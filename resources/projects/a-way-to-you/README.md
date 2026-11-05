# A Way to You

A first-person, sound-guided exploration prototype made in Unity as a three-week solo course project in 2026 (duration, solo authorship, and context confirmed by Chunyu). The player follows a street to meet a friend at a pizza restaurant, then finds a ramp that both can use.

## Assets

- `hero-image.png`: supplied cover artwork, retained as the source for the project listing previews. The detail page uses the YouTube video instead of a separate cover image. This is AI-assisted artwork, not an in-game screenshot.
- `card-preview-640.webp` and `card-preview-1280.webp`: lightweight listing images generated with `scripts/build-project-previews.py`.
- `demo.mp4`: complete gameplay walkthrough, approximately 4 minutes 42 seconds. Local source video; excluded from Git.
- `democut.mp4`: supplied short edit, approximately 1 minute 45 seconds. It ends at the friend's request to find a ramp; a future short edit should also include ramp discovery and the return. Local source video; excluded from Git.
- `development-recording.mp4`: earlier screen recording with the Unity editor and a partial playthrough, approximately 5 minutes 12 seconds. Local source video; excluded from Git.
- `gameplay-tactile-path.webp`: unaltered gameplay frame from `demo.mp4` at 01:25, resized for the web.
- `gameplay-street-obstacles.webp`: unaltered gameplay frame from `demo.mp4` at 01:55, resized for the web.
- `gameplay-meeting-friend.webp`: unaltered gameplay frame from `demo.mp4` at 04:10, resized for the web.
- `gameplay-ramp-discovery.webp`: unaltered gameplay frame from `demo.mp4` at 04:21, resized to 1440 × 806 for the web. Shows the ramp, echo response, and exploration prompt.
- `map.png`: supplied 826 × 607 top-down Unity scene capture. Displayed uncropped with HTML markers for the tactile route (A), park (B), and restaurant/side-ramp area (C). The original image is unchanged and linked for full-size viewing.

## Portfolio

Project slug: `a-way-to-you`. Category: Game Design. The English description is based on the supplied gameplay recording, the linked EchoWay development conversation, and the current Unity scripts/settings. The dedicated case study is in `resources/a-way-to-you-case.js`, with scoped styling in `resources/a-way-to-you-case.css`.

The concise case study identifies solo ownership and specific contributions, including echo/memory rules, navigation guidance, onboarding, and the ending. The supplied top-down map establishes spatial context before gameplay captures show the tactile path and an obstacle, followed by the friend's access problem and ramp discovery. It describes retained blurred spatial memory, the first-probe movement gate, and Tab-based destination clues, verified against the existing implementation. Sequence diagrams describe player actions. It does not claim measured playtest results.

Map annotations were checked against the current `Traveler.unity` scene: the pizza building is at approximately (-81.82, 59.26) in world X/Z, the friend at (-75.047, 64.562), and the authored side ramp at (-73, 69). Marker C identifies this destination area rather than an exact interaction point. The park is visually identifiable in the supplied capture, and its role as an audible destination clue is supported by `TravelerDestinationHints.cs`. No player spawn or required path is asserted by the map overlays.

Screenshots remain available on the public site. All source recordings stay local and are excluded from Git. The portfolio embeds the [YouTube gameplay walkthrough](https://youtu.be/Y_OGXDYPicM) using `youtubeId: 'Y_OGXDYPicM'` in `project-detail.html`. The video player and watch link are available in both local and public previews.

The original folder name was `A Way to You`. The supplied cover and timestamped screen recording were renamed; both original videos are retained.

## Next supporting material

1. One or two genuine iteration records: the original issue, the change and its reason, and what was observed afterward. Pair old/new screenshots or clips if available. Distinguish developer observations from player feedback; do not invent outcomes or test participants.
2. Optional: confirm the player start and intended route if a route overlay is wanted on the supplied map. Keep landmark annotations distinct from a prescribed player path.
3. Optional: a playable build with controls and supported platform, plus a short video edit that includes the ending. Keep original builds and recordings outside the public upload until a hosting approach is chosen.

The existing full video already supplies ramp evidence; another recording is not needed for that screenshot. Source code and materials from the EchoWay development context support descriptions of implementation, but do not establish novice-player usability or playtest outcomes.
