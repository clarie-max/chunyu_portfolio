(() => {
  const section = document.getElementById('projects');
  const copy = {
    all: ['00','Different tools. A shared curiosity.','Games, tangible interactions, and everyday experiences — a collection of things I have designed, built, and tested.'],
    game: ['01','Rules that invite players to explore.','Digital worlds and tabletop experiments, exploring player choice, spatial challenges, and the surprises that emerge through playtesting.'],
    interactive: ['02','An action becomes a connection.','Gestures, physical inputs, and responsive feedback turn ideas into experiences people can participate in.'],
    hardware: ['03','Ideas you can hold in your hands.','Physical prototypes and product systems, shaped around how people move, use, and understand objects.'],
    service: ['04','Design around everyday lives.','Services and interfaces that connect individual needs with shared experiences.']
  };
  // Build a light card frame around the existing content and links.
  const cards = [...document.querySelectorAll('.projects-grid .project-card')];
  cards.forEach(card => {
    card.classList.add('level-card');
    const shell = document.createElement('div');
    shell.className = 'project-card-shell';
    shell.append(...card.childNodes);
    const header = document.createElement('div');
    header.className = 'card-heading';
    const category = document.createElement('span');
    category.className = 'card-category';
    category.textContent = card.dataset.label;
    header.append(category);
    shell.prepend(header);
    const corner = document.createElement('span');
    corner.className = 'card-corner';
    corner.setAttribute('aria-hidden', 'true');
    card.append(shell, corner);
    const link = card.querySelector('.project-open-label');
    if (link) {
      const label = document.createElement('span');
      label.textContent = 'Explore project';
      const arrow = document.createElement('span');
      arrow.className = 'card-link-arrow';
      arrow.textContent = '↗';
      arrow.setAttribute('aria-hidden', 'true');
      link.replaceChildren(label, arrow);
    }
  });
  // Reserve the tallest category's text height at every screen width.
  const introCopy = section?.querySelector('.discipline-intro > div');
  if (introCopy) {
    introCopy.classList.add('discipline-copy');
    const activeCopy = document.createElement('div');
    activeCopy.append(...introCopy.childNodes);
    introCopy.append(activeCopy);
    Object.values(copy).forEach(([, title, description]) => {
      const sizingCopy = activeCopy.cloneNode(true);
      sizingCopy.className = 'discipline-sizing';
      sizingCopy.setAttribute('aria-hidden', 'true');
      sizingCopy.inert = true;
      sizingCopy.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
      sizingCopy.querySelector('h3').textContent = title;
      sizingCopy.querySelector('p:last-child').textContent = description;
      introCopy.append(sizingCopy);
    });
  }
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.filter;
      section.dataset.discipline = key;
      const [index,title,description] = copy[key];
      document.getElementById('disciplineIndex').textContent = index;
      document.getElementById('disciplineTitle').textContent = title;
      document.getElementById('disciplineDescription').textContent = description;
    });
  });
  document.querySelectorAll('[data-jump-filter]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector(`.filter-btn[data-filter="${button.dataset.jumpFilter}"]`);
      if (!target) {
        const link = document.createElement('a');
        link.href = `projects.html?category=${encodeURIComponent(button.dataset.jumpFilter)}`;
        document.body.append(link);
        link.click();
        link.remove();
        return;
      }
      target.click();
      section.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
      target.focus({preventScroll:true});
    });
  });
  const role = document.getElementById('changingRole');
  const requestedCategory = new URLSearchParams(location.search).get('category');
  const initialCategory = Object.hasOwn(copy, requestedCategory || '') ? requestedCategory : 'game';
  if (section) {
    document.querySelector(`.filter-btn[data-filter="${initialCategory}"]`)?.click();
  }
  if (!role) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const words = ['play.','discovery.','connection.'];
  let word = 0, length = words[0].length, deleting = true;
  function tick() {
    if (reduced.matches) { role.textContent = 'play.'; return; }
    if (document.hidden) { setTimeout(tick,500); return; }
    length += deleting ? -1 : 1;
    role.textContent = words[word].slice(0,length);
    let delay = deleting ? 65 : 110;
    if (length === 0) { deleting=false; word=(word+1)%words.length; delay=300; }
    if (length === words[word].length && !deleting) { deleting=true; delay=2600; }
    setTimeout(tick,delay);
  }
  if (!reduced.matches) setTimeout(tick,2600);
})();
