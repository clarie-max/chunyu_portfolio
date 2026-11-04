// Run before first paint so all three pages share appearance and direction.
(() => {
  let theme;
  try { theme = localStorage.getItem('portfolio-theme'); } catch (_) {}
  document.documentElement.dataset.theme = theme === 'light' || theme === 'dark'
    ? theme : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const names = ['chunyu_portfolio.html','projects.html','about.html'];
  const pageIndex = url => {
    const path = new URL(url,location.href).pathname.split('/').pop();
    return !path || path === 'index.html' ? 0 : names.indexOf(path);
  };
  window.portfolioPageIndex = pageIndex;
  // Preserve links shared before the portfolio was split into pages.
  if (pageIndex(location.href) === 0) {
    const legacy = {'#projects':'projects.html','#contact':'about.html#contact'};
    if (legacy[location.hash]) location.replace(legacy[location.hash]);
  }
  let pending;
  try { pending=JSON.parse(sessionStorage.getItem('portfolio-page-move')); } catch (_) {}
  if (pending && Date.now()-pending.time<10000 && pageIndex(location.href)===pending.to) {
    document.documentElement.dataset.slideDirection=pending.direction;
  }
  addEventListener('pagereveal', event => {
    // A canceled native transition must not surface as an unhandled rejection.
    event.viewTransition?.ready.catch(() => {});
    const activation=event.activation || window.navigation?.activation;
    if(activation?.from?.url) {
      const from=pageIndex(activation.from.url), to=pageIndex(location.href);
      if(from>=0 && to>=0) document.documentElement.dataset.slideDirection=to<from?'back':'forward';
    }
  });
  addEventListener('pageswap', event => {
    if (!event.viewTransition) return;
    event.viewTransition.ready.catch(() => {});
    const target = event.activation?.entry?.url;
    const next = target ? pageIndex(target) : -1;
    if (next < 0) {
      event.viewTransition.skipTransition();
      return;
    }
    document.documentElement.dataset.slideDirection = next < pageIndex(location.href) ? 'back' : 'forward';
  });
  if(!('onpagereveal' in window)) document.documentElement.classList.add('slide-fallback');
})();
