const themeToggle = document.getElementById('themeToggle');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
        function updateThemeButton() {
            const dark = document.documentElement.dataset.theme === 'dark';
            const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
            themeToggle.setAttribute('aria-label', label);
            themeToggle.title = label;
        }
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.remove('theme-changing');
            void document.documentElement.offsetWidth;
            document.documentElement.classList.add('theme-changing');
            const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = theme;
            try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
            updateThemeButton();
            window.setTimeout(() => document.documentElement.classList.remove('theme-changing'), 520);
        });
        systemTheme.addEventListener('change', event => {
            let saved;
            try { saved = localStorage.getItem('portfolio-theme'); } catch (_) {}
            if (saved !== 'light' && saved !== 'dark') {
                document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
                updateThemeButton();
            }
        });
        updateThemeButton();


const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.section-title, .about-text, .about-image, .skills, .publication-card, .project-card').forEach(element => {
    if (!('IntersectionObserver' in window) || reduceMotion.matches) {
        element.classList.add('visible');
        return;
    }
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            element.classList.add('visible');
            observer.disconnect();
        }
    }, {threshold: 0.05});
    observer.observe(element);
});
const updateNav = () => document.getElementById('nav')?.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', updateNav, {passive:true});
updateNav();

document.querySelectorAll('[data-copy-email]').forEach(button => {
    const feedback = button.querySelector('.copy-feedback');
    let resetTimer;
    let copying = false;
    button.addEventListener('click', async () => {
        if (copying) return;
        copying = true;
        clearTimeout(resetTimer);
        feedback.textContent = '';
        try {
            try {
                await navigator.clipboard.writeText(button.dataset.copyEmail);
            } catch (_) {
                // Support browsers that restrict the Clipboard API during local preview.
                const previousFocus = document.activeElement;
                const field = document.createElement('textarea');
                field.value = button.dataset.copyEmail;
                field.readOnly = true;
                field.tabIndex = -1;
                field.style.cssText = 'position:fixed;left:-9999px;top:0;';
                document.body.append(field);
                try {
                    field.select();
                    if (!document.execCommand('copy')) throw new Error('Copy failed');
                } finally {
                    field.remove();
                    previousFocus?.focus({preventScroll:true});
                }
            }
            feedback.textContent = 'Copied!';
            resetTimer = setTimeout(() => { feedback.textContent = ''; }, 2200);
        } catch (_) {
            feedback.textContent = 'Unable to copy. Please select the address manually.';
        } finally {
            copying = false;
        }
    });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = [...document.querySelectorAll('.projects-grid .project-card')];
filterButtons.forEach(button => {
    const category = button.dataset.filter;
    button.querySelector('.filter-count').textContent = projectCards.filter(card => category === 'all' || card.dataset.category === category).length;
    button.addEventListener('click', () => {
        let count = 0;
        filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        projectCards.forEach(card => {
            const visible = category === 'all' || card.dataset.category === category;
            card.classList.toggle('is-hidden', !visible);
            if (visible) { count++; card.classList.add('visible'); }
        });
        document.getElementById('projectFilterStatus').textContent = category === 'all'
            ? `Showing all ${count} projects.` : `Showing ${count} projects in ${button.textContent.replace(/\d+/g, '').trim()}.`;
        const url = new URL(location.href);
        if (category === 'game') url.searchParams.delete('category');
        else url.searchParams.set('category', category);
        history.replaceState(history.state, '', url);
        try { sessionStorage.setItem('portfolio-projects-url', url.pathname + url.search); } catch (_) {}
    });
});
projectCards.forEach(card => {
    const title = card.querySelector('h3').textContent.trim();
    const paragraphs = [...card.querySelectorAll('.project-content > p:not(.date)')];
    paragraphs.forEach((paragraph, index) => paragraph.classList.add(index === (title === 'Shattered Light' ? 1 : 0) ? 'card-summary' : 'card-detail-only'));
    const link = document.createElement('a');
    link.className = 'project-open-label';
    link.href = `project-detail.html?project=${encodeURIComponent(card.dataset.project)}`;
    link.textContent = 'Open case study →';
    link.setAttribute('aria-label', `Open ${title} project details`);
    card.querySelector('.project-content').append(link);
    card.addEventListener('click', event => {
        if (!event.target.closest('a, button')) link.click();
    });
});
document.querySelectorAll('.awards-item').forEach(card => {
    const detail = card.querySelector('.awards-detail');
    const open = value => { card.classList.toggle('awards-open',value); detail.setAttribute('aria-hidden',String(!value)); };
    card.addEventListener('mouseenter',()=>open(true));
    card.addEventListener('mouseleave',()=>open(false));
    card.addEventListener('focusin',()=>open(true));
    card.addEventListener('focusout',()=>open(false));
    card.addEventListener('click',()=>open(true));
    card.addEventListener('keydown',e=> {
        if(e.key==='Escape')open(false);
        if(e.key==='Enter' || e.key===' ') {e.preventDefault();open(true);}
    });
});
