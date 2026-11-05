"""Build lightweight listing images; retain original artwork for detail pages.

Run from any directory with Python and Pillow. To change a cover, update its
data-preview-source in projects.html, then run this script again.
"""
from pathlib import Path
import html
import json
import re

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "projects.html"
report = []


def preview_tag(match):
    tag = match.group(0)
    attributes = dict(re.findall(r'([\w-]+)="([^"]*)"', tag))
    source = html.unescape(attributes.get("data-preview-source", attributes["src"]))
    source_path = (ROOT / source).resolve()
    if not source_path.is_relative_to(ROOT / "resources" / "projects"):
        raise ValueError(f"Unexpected cover path: {source}")
    variants = []
    with Image.open(source_path) as original:
        original = ImageOps.exif_transpose(original)
        original = original.convert("RGBA" if "A" in original.getbands() else "RGB")
        for width in sorted({min(640, original.width), min(1280, original.width)}):
            height = round(original.height * width / original.width)
            target = source_path.with_name(f"card-preview-{width}.webp")
            if not target.exists() or target.stat().st_mtime < source_path.stat().st_mtime:
                preview = original.resize((width, height), Image.Resampling.LANCZOS)
                preview.save(target, "WEBP", quality=82, method=6)
            variants.append((target.relative_to(ROOT).as_posix(), width, height))
    featured = source_path.parent.name == "shattered-light"
    first_row = featured or source_path.parent.name == "a-way-to-you"
    fallback = variants[-1] if featured else variants[0]
    sizes = (
        ("(min-width: 1100px) 924px, " if featured else "")
        + "(max-width: 600px) calc(100vw - 64px), "
        + "(max-width: 768px) calc((100vw - 92px) / 2), "
        + "(max-width: 1000px) calc((100vw - 156px) / 2), "
        + "(min-width: 1528px) 448px, calc((100vw - 184px) / 3)"
    )
    # Keep the existing alt text and object-fit choice intact.
    tag = re.sub(r'\s+(?:src|srcset|sizes|width|height|loading|decoding|fetchpriority|data-preview-source)="[^"]*"', "", tag)
    extra = {
        "src": fallback[0],
        "srcset": ", ".join(f"{path} {width}w" for path, width, _ in variants),
        "sizes": sizes,
        "width": str(fallback[1]),
        "height": str(fallback[2]),
        "loading": "eager" if first_row else "lazy",
        "decoding": "async",
        "fetchpriority": "high" if featured else "auto",
        "data-preview-source": source,
    }
    report.append({"project": source_path.parent.name, "originalBytes": source_path.stat().st_size,
                   "previewBytes": sum((ROOT / path).stat().st_size for path, _, _ in variants)})
    return tag[:-1] + " " + " ".join(f'{name}="{html.escape(value, quote=True)}"' for name, value in extra.items()) + ">"


updated = re.sub(r"<img\b[^>]*>", preview_tag, PAGE.read_text(encoding="utf-8"))
PAGE.write_text(updated, encoding="utf-8")
print(json.dumps({"images": report, "originalTotal": sum(r["originalBytes"] for r in report),
                  "previewTotal": sum(r["previewBytes"] for r in report)}, indent=2))
