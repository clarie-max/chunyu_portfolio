/* A focused case study; the shared renderer still owns media and theme behavior. */
(() => {
  if (new URLSearchParams(location.search).get('project') !== 'a-way-to-you') return;
  const main = document.getElementById('caseStudy');
  const demo = document.getElementById('demoSection');
  if (!main || !demo) return;

  document.body.classList.add('away-case');
  document.querySelector('.topbar .case-id').textContent = 'GAME DESIGN / LEVEL DESIGN';
  document.querySelector('meta[name="description"]').content = 'A Way to You — a solo, three-week course prototype by Chunyu Ji. Explore its echo mechanic, navigation guidance, and shared-access ending.';
  main.innerHTML = `
    <header class="away-intro" id="overview">
      <div>
        <p class="away-eyebrow">SOLO COURSE PROJECT · 3 WEEKS · 2026</p>
        <h1 id="title">A Way to You</h1>
        <p class="away-tagline">Find your way. Find a way together.</p>
      </div>
      <p class="away-lede">A first-person exploration prototype about crossing a city block with limited vision to meet a friend. Sound and fading outlines guide the journey; the final task asks you to find a route you can both use.</p>
    </header>
    <dl class="away-facts" aria-label="Project facts">
      <div><dt>My role</dt><dd>Solo Designer &amp; Developer<br>Game &amp; Level Design</dd></div>
      <div><dt>Engine</dt><dd>Unity · C# · URP</dd></div>
      <div><dt>Format</dt><dd>Single-player<br>First-person exploration</dd></div>
      <div><dt>Focus</dt><dd>Sound · Spatial memory<br>Environmental storytelling</dd></div>
    </dl>
    <p class="away-contribution"><strong>My contribution.</strong> I designed the echo and memory rules, navigation guidance, onboarding, and ramp-discovery ending, and implemented the prototype in Unity with AI-assisted coding and third-party scene assets.</p>
    <nav class="away-contents" aria-label="On this project page">
      <a href="#gameplay">Gameplay</a><a href="#level-design">Level design</a><a href="#ending-design">Ending</a><a href="#reflection">Reflection</a>
    </nav>
    <div class="away-demo-slot"></div>

    <section class="away-section" id="gameplay" aria-labelledby="gameplayTitle">
      <p class="away-eyebrow">CORE GAMEPLAY</p><h2 id="gameplayTitle">Read the street, one echo at a time.</h2>
      <ol class="away-loop">
        <li><h3>Listen</h3><p>Follow nearby sounds for direction.</p></li>
        <li><h3>Probe</h3><p>Click a surface to reveal its contours.</p></li>
        <li><h3>Remember</h3><p>Use the dim outline left as a spatial reference.</p></li>
        <li><h3>Move</h3><p>Choose a way through, then probe again.</p></li>
      </ol>
      <p class="away-section-lede">Clear contours gradually soften into dim, blurred spatial memory. I kept this trace so explored areas remain a reference while precise details need another probe—a balance between uncertainty and orientation.</p>
    </section>

    <section class="away-section" id="level-design" aria-labelledby="levelTitle">
      <p class="away-eyebrow">LEVEL DESIGN</p><h2 id="levelTitle">Guidance with interruptions.</h2>
      <p class="away-section-lede">I used tactile paving as a route reference, with everyday obstacles that ask players to check the space ahead. The goal is to make probing useful for navigation.</p>
      <div class="away-map-layout">
        <figure class="away-map">
          <a class="away-map-image" href="resources/projects/a-way-to-you/map.png" target="_blank" rel="noopener" aria-label="Open the full-size level map in a new tab">
            <img src="resources/projects/a-way-to-you/map.png" alt="Top-down Unity scene showing yellow tactile paving between buildings and around a central park, with the pizza restaurant and its side ramp above the park" width="826" height="607" loading="lazy" decoding="async">
            <span class="away-map-pin" style="--pin-x:22%;--pin-y:48.3%" aria-hidden="true">A</span>
            <span class="away-map-pin" style="--pin-x:59.3%;--pin-y:57.7%" aria-hidden="true">B</span>
            <span class="away-map-pin" style="--pin-x:66.7%;--pin-y:38.7%" aria-hidden="true">C</span>
          </a>
          <figcaption><span>Level layout from the Unity scene.</span><a href="resources/projects/a-way-to-you/map.png" target="_blank" rel="noopener">Open full-size map ↗</a></figcaption>
        </figure>
        <div class="away-map-context">
          <p class="away-eyebrow">SPATIAL CONTEXT</p>
          <ul class="away-map-key" aria-label="Map annotations">
            <li><h3><span aria-hidden="true">A</span> Tactile route</h3><p>A ground-level reference between buildings and around the park.</p></li>
            <li><h3><span aria-hidden="true">B</span> Park landmark</h3><p>The opening call points to the park and nearby barking as clues to the destination.</p></li>
            <li><h3><span aria-hidden="true">C</span> Restaurant &amp; ramp</h3><p>Meet the friend at the pizza place, then explore the side entrance to find a shared route.</p></li>
          </ul>
        </div>
      </div>
      <ol class="away-route" aria-label="Player journey sequence"><li>Listen for landmarks</li><li>Follow tactile paving</li><li>Read obstacles</li><li>Reach the restaurant</li></ol>
      <div class="away-evidence-grid">
        <figure><img src="resources/projects/a-way-to-you/gameplay-tactile-path.webp" alt="A probe reveals raised parallel bars of tactile paving, offering a direction along the street" width="1440" height="806" loading="lazy" decoding="async"><figcaption><strong>Tactile paving</strong><span>Raised lines offer a direction to rediscover after the echo fades.</span></figcaption></figure>
        <figure><img src="resources/projects/a-way-to-you/gameplay-street-obstacles.webp" alt="A shopping cart revealed in white contours interrupts the pedestrian route" width="1440" height="806" loading="lazy" decoding="async"><figcaption><strong>Street obstacles</strong><span>A shopping cart interrupts the path and prompts a new probe.</span></figcaption></figure>
      </div>
      <p class="away-guidance"><strong>Learn, then explore.</strong> The opening call introduces audible landmarks; movement unlocks after the first successful probe. Players can press <kbd>Tab</kbd> to recall destination clues if they lose direction.</p>
    </section>

    <section class="away-section" id="ending-design" aria-labelledby="endingTitle">
      <p class="away-eyebrow">ENDING DESIGN</p><h2 id="endingTitle">“A way for both of us.”</h2>
      <p class="away-section-lede">The friend’s wheelchair cannot pass the restaurant step. I reused the navigation mechanic for a shared goal: probe and approach the side ramp, then return to the friend. Returning completes the task and closes the story through dialogue.</p>
      <div class="away-evidence-grid">
        <figure><img src="resources/projects/a-way-to-you/gameplay-meeting-friend.webp" alt="The friend explains that their wheelchair cannot pass the restaurant step" width="1440" height="806" loading="lazy" decoding="async"><figcaption><strong>Meet the friend</strong><span>Reaching the destination reveals a barrier to entering together.</span></figcaption></figure>
        <figure><img src="resources/projects/a-way-to-you/gameplay-ramp-discovery.webp" alt="An echo reveals the sloping ramp and handrails beside the restaurant, with a prompt to explore it and walk closer" width="1440" height="806" loading="lazy" decoding="async"><figcaption><strong>Confirm a shared route</strong><span>Probe the ramp and approach it before returning to the friend.</span></figcaption></figure>
      </div>
      <ol class="away-route away-ending-route" aria-label="Ending sequence"><li>Meet</li><li>Probe &amp; approach ramp</li><li>Return to friend</li></ol>
    </section>

    <section class="away-section away-reflection" id="reflection" aria-labelledby="reflectionTitle">
      <div><p class="away-eyebrow">REFLECTION</p><h2 id="reflectionTitle">Next to test.</h2></div>
      <div class="away-prose"><p>I scoped the prototype around one street, one navigation mechanic, and a shared-access ending.</p><p>Next, I would observe how new players find their first route, when they recall clues, and whether repeated probing replaces listening and spatial memory. Those observations would guide changes to cue placement and reveal timing.</p></div>
    </section>
    <p class="away-credits">Presentation: in-game screenshots; AI-assisted cover artwork on the project listing.</p>
    <div class="bottom-nav"><a class="back" href="projects.html">← Back to Game Design</a><a class="back" href="#overview">Back to top ↑</a></div>
  `;
  main.querySelector('.away-demo-slot').replaceWith(demo);
  if (!demo.hidden) {
    const watch = document.createElement('a');
    watch.href = '#demoSection';
    watch.textContent = 'Watch gameplay ↗';
    watch.className = 'away-watch';
    main.querySelector('.away-contents').append(watch);
  }
})();
