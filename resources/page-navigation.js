(() => {
  const pages = ['chunyu_portfolio.html','projects.html','about.html'];
  const index = window.portfolioPageIndex;
  const current = index(location.href);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let leaving = false;
  let exitAnimation;
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || link.target || link.hasAttribute('download') || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
    const url = new URL(link.href,location.href);
    if (url.origin !== location.origin || url.pathname.substring(0,url.pathname.lastIndexOf('/')) !== location.pathname.substring(0,location.pathname.lastIndexOf('/'))) return;
    const next = index(url.href);
    if (next<0 || current<0 || next===current) return;
    const direction = next<current ? 'back' : 'forward';
    document.documentElement.dataset.slideDirection=direction;
    try { sessionStorage.setItem('portfolio-page-move',JSON.stringify({to:next,direction,time:Date.now()})); } catch (_) {}
    if (!('onpagereveal' in window) && !reduced.matches) {
      event.preventDefault();
      if (leaving) return;
      leaving=true;
      const main=document.getElementById('pageContent');
      const movement=direction==='forward' ? '-10vw':'10vw';
      exitAnimation=main.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${movement})`}],{duration:160,easing:'ease-in',fill:'forwards'});
      exitAnimation.finished.catch(()=>{}).then(()=>location.assign(url.href));
    }
  });
  addEventListener('pageshow',()=>{
    leaving=false;
    exitAnimation?.cancel();
    exitAnimation=undefined;
  });
  // Horizontal swipes turn pages; vertical movement continues scrolling normally.
  let touch;
  const interactive='a,button,input,textarea,select,iframe,video,[contenteditable],.project-card';
  document.addEventListener('touchstart',event=>{
    touch=event.touches.length===1 && !event.target.closest(interactive)
      ? {x:event.touches[0].clientX,y:event.touches[0].clientY,time:Date.now()} : null;
  },{passive:true});
  document.addEventListener('touchend',event=>{
    if(!touch || event.changedTouches.length!==1) return;
    const dx=event.changedTouches[0].clientX-touch.x, dy=event.changedTouches[0].clientY-touch.y;
    const valid=Math.abs(dx)>95 && Math.abs(dx)>Math.abs(dy)*1.8 && Date.now()-touch.time<800;
    touch=null;
    if(!valid || String(window.getSelection()))return;
    const next=current+(dx<0?1:-1);
    if(next<0 || next>=pages.length)return;
    document.querySelector(`.page-steps a[href="${pages[next]}"]`).click();
  },{passive:true});
  document.addEventListener('touchcancel',()=>touch=null,{passive:true});
})();
