/* Current prototype and clearly separated thesis-era evaluation. */
(() => {
  const project = new URLSearchParams(location.search).get('project') || 'shattered-light';
  if (project !== 'shattered-light') return;
  const main = document.getElementById('caseStudy');
  if (!main) return;

  const assets = 'resources/projects/shattered-light';
  document.body.classList.add('shattered-case');
  document.querySelector('.topbar .case-id').textContent = 'GAME DESIGN / RESEARCH';
  document.querySelector('meta[name="description"]').content = 'Shattered Light — an evolving narrative prototype by Chunyu Ji. Explore the reworked presentation-anxiety chapter, its choices and progression, and research from the earlier thesis build.';

  main.innerHTML = `
    <header class="sl-intro" id="overview">
      <div>
        <p class="sl-eyebrow">UNDERGRADUATE THESIS · CONTINUING DEVELOPMENT · 2026</p>
        <h1 id="title">Shattered Light</h1>
        <p class="sl-tagline">Small actions. A different way forward.</p>
      </div>
      <p class="sl-lede">A first-person narrative prototype about taking small actions under academic stress. The latest school chapter follows a student preparing to join a group presentation—still nervous, with a friend close by.</p>
    </header>
    <dl class="sl-facts" aria-label="Project facts">
      <div><dt>My role</dt><dd>Solo Game Designer &amp; Developer<br>Level Design · User Research</dd></div>
      <div><dt>Origin</dt><dd>Undergraduate thesis<br>South China University of Technology</dd></div>
      <div><dt>Format</dt><dd>Single-player narrative prototype<br>Three connected chapters</dd></div>
      <div><dt>Tools</dt><dd>Unity · C#<br>Figma · SPSS</dd></div>
    </dl>
    <p class="sl-contribution"><strong>My contribution.</strong> I conducted the research, designed the chapter progression and interaction feedback, built the Unity prototype, and planned and analyzed the user evaluation.</p>
    <p class="sl-version-note"><strong>Current iteration.</strong> The school chapter has been reworked around presentation anxiety. The bedroom and park retain their earlier structure; their revisions are still ahead.</p>
    <nav class="sl-contents" aria-label="On this project page">
      <a href="#chapter-design">Current gameplay</a><a href="#research-testing">Earlier research</a><a href="#reflection">Next iteration</a>
    </nav>
    <figure class="sl-hero">
      <img src="${assets}/card-preview-1280.webp" alt="Concept illustration of a figure in a fractured classroom, with light falling through the windows" width="1280" height="640" fetchpriority="high" decoding="async">
      <figcaption><span>Concept illustration · Not a gameplay capture</span><span>Shattered Light</span></figcaption>
    </figure>

    <section class="sl-section" id="chapter-design" aria-labelledby="chaptersTitle">
      <p class="sl-eyebrow">GAMEPLAY &amp; LEVEL DESIGN</p>
      <h2 id="chaptersTitle">Take a step before feeling ready.</h2>
      <p class="sl-section-lede">The project explores behavioral activation, cognitive restructuring, and problem-solving from cognitive behavioral therapy (CBT). The current school revision focuses on making action and support part of the story.</p>
      <ol class="sl-route" aria-label="Chapter progression">
        <li><a href="#classroom"><span>School · Reworked</span><strong>Begin</strong></a></li>
        <li><a href="#bedroom"><span>Bedroom</span><strong>Reframe</strong></a></li>
        <li><a href="#park"><span>Park</span><strong>Resolve</strong></a></li>
      </ol>

      <article class="sl-chapter sl-school" id="classroom" aria-labelledby="classroomTitle">
        <figure class="sl-flow" aria-labelledby="flowTitle">
          <h3 id="flowTitle">Prepare in your own way</h3>
          <p class="sl-flow-label">OPTIONAL ACTIONS · NO REQUIRED ORDER</p>
          <ul class="sl-flow-options">
            <li><strong>Message Lin</strong><span>Say you are on your way, share your nerves, or put the phone away.</span></li>
            <li><strong>Try the opening</strong><span>Rehearse, then shorten it, mark a handover, or keep the original notes.</span></li>
          </ul>
          <div class="sl-flow-door"><span class="sl-flow-arrow" aria-hidden="true">↓</span><strong>At the door</strong><p>Listen to a vignette about another speaker restarting. Step back, go with Lin, or enter first with Lin nearby.</p></div>
          <p class="sl-flow-outcome">The ending recalls your choices. Ming is still nervous.</p>
          <figcaption>Current school flow. Phone and notes are optional; reaching the ending does not require completing every activity.</figcaption>
        </figure>
        <div class="sl-prose">
          <p class="sl-eyebrow">SCHOOL · CURRENT REVISION</p>
          <h3 id="classroomTitle">“Just beyond the door.”</h3>
          <p>Ming’s group is presenting next door. Explore the classroom, reply to Lin, and try a first sentence. The desk, schedule board, and door give the story physical anchors.</p>
          <p><strong>Choices leave a trace.</strong> Admitting nervousness changes Lin’s reply; marking a handover changes the exchange at the door. Both entry choices lead forward, with different closing text.</p>
          <p><strong>Design intent.</strong> Progress comes from taking a manageable step. There is no mood score, countdown, or requirement to choose a positive answer.</p>
          <p class="sl-scope-note">This revision uses text for the rehearsal, friend, and next-room vignette. A fully staged presentation scene and new voice performances are not part of the current prototype.</p>
        </div>
      </article>

      <article class="sl-chapter" id="bedroom" aria-labelledby="bedroomTitle">
        <figure>
          <a class="sl-image-link" href="${assets}/gameplay/level-02-dialogue-thesis.jpg" target="_blank" rel="noopener" aria-label="Open the bedroom dialogue screenshot at full size">
            <img src="${assets}/gameplay/level-02-dialogue-thesis.jpg" alt="Dialogue choices after missing a hike range from self-blame to deciding to catch up with friends" width="1068" height="599" loading="lazy" decoding="async">
          </a>
          <figcaption>Earlier thesis capture · Bedroom revision pending. <a href="${assets}/gameplay/level-02-dialogue-thesis.jpg" target="_blank" rel="noopener">View full size ↗</a></figcaption>
        </figure>
        <div class="sl-prose">
          <p class="sl-eyebrow">BEDROOM · EXISTING CHAPTER</p>
          <h3 id="bedroomTitle">Change the interpretation, then act.</h3>
          <p><strong>Player action.</strong> Respond to missing a hike, recharge the phone, and take a call from friends before preparing to leave.</p>
          <p>The existing dialogue contrasts self-blame with taking action, but still directs players toward a preferred answer. My next revision will give this chapter the same room for uncertainty as the school story.</p>
        </div>
      </article>

      <article class="sl-chapter" id="park" aria-labelledby="parkTitle">
        <figure>
          <a class="sl-image-link" href="${assets}/gameplay/level-03-objective-thesis.jpg" target="_blank" rel="noopener" aria-label="Open the park objective screenshot at full size">
            <img src="${assets}/gameplay/level-03-objective-thesis.jpg" alt="A forest scene with an inventory and a mission to help a friend find a key and collect nearby objects" width="1251" height="704" loading="lazy" decoding="async">
          </a>
          <figcaption>Earlier thesis capture · Park revision pending. <a href="${assets}/gameplay/level-03-objective-thesis.jpg" target="_blank" rel="noopener">View full size ↗</a></figcaption>
        </figure>
        <div class="sl-prose">
          <p class="sl-eyebrow">PARK · EXISTING CHAPTER</p>
          <h3 id="parkTitle">Turn observation into a solution.</h3>
          <p><strong>Player action.</strong> Receive a call about a key trapped in a rock crevice. Find a branch, return to the rock, and retrieve the key into the inventory.</p>
          <p><strong>Design intent.</strong> The branch links observation to a useful action. It creates a clear dependency between finding a resource and helping a friend.</p>
        </div>
      </article>
      <aside class="sl-feedback"><strong>From explanation to experience.</strong> The thesis classroom introduced strategies through a handbook and energy rewards. The reworked chapter uses a specific situation, optional preparation, and remembered choices to make the first step part of the story.</aside>
    </section>

    <section class="sl-section" id="research-testing" aria-labelledby="researchTitle">
      <p class="sl-eyebrow">EARLIER THESIS BUILD · RESEARCH &amp; EVALUATION</p>
      <h2 id="researchTitle">The research behind the project.</h2>
      <div class="sl-research-grid">
        <div class="sl-prose">
          <h3>Before development</h3>
          <p>A survey with <strong>115 students</strong> and <strong>14 interviews</strong> informed the direction. Participants wanted approachable, narrative experiences and found existing tools burdensome or overly formal.</p>
          <p>I used familiar student situations, simple controls, and contextual feedback to keep participation approachable.</p>
        </div>
        <div class="sl-prose">
          <h3>Earlier prototype evaluation</h3>
          <p><strong>13 students</strong> evaluated the thesis build through gameplay, questionnaires, a CBT knowledge test before and after play, and interviews.</p>
          <p>The evaluation examined usability, experience, and immediate understanding of the strategies.</p>
        </div>
      </div>
      <dl class="sl-results" aria-label="Results from the earlier thesis build, not the current revision">
        <div><dt>Mean System Usability Scale score</dt><dd>80.8<span> / 100</span></dd></div>
        <div><dt>Mean CBT knowledge accuracy · Before → After</dt><dd>48.5% <span aria-label="to">→</span> 88.7%</dd></div>
      </dl>
      <p class="sl-study-note">These results belong to the earlier thesis build, not the current school revision. They describe usability and immediate learning in a small, single-session study, not lasting emotional or clinical outcomes.</p>
    </section>

    <section class="sl-section" id="reflection" aria-labelledby="reflectionTitle">
      <p class="sl-eyebrow">REFLECTION &amp; NEXT ITERATION</p>
      <h2 id="reflectionTitle">What I need to test next.</h2>
      <p class="sl-section-lede">Earlier interviews identified unclear prompts, delayed feedback, and inconsistent visuals. The next playtest needs to examine the revised story itself, especially whether players understand their choices and feel able to pause.</p>
      <ul class="sl-findings">
        <li><h3>Optional preparation</h3><p>Can new players find the door and move forward without treating every activity as a checklist?</p></li>
        <li><h3>Choices and consequences</h3><p>Do players notice how their reply and speaking notes change the later exchange?</p></li>
        <li><h3>Consistency across chapters</h3><p>Revise the bedroom and park dialogue, then test continuity in agency, pacing, and visual feedback.</p></li>
      </ul>
    </section>
    <p class="sl-credits">Current development: school narrative revision. Research and labeled gameplay captures: earlier thesis build. Cover: concept artwork.</p>
    <div class="bottom-nav"><a class="back" href="projects.html">← Back to Game Design</a><a class="back" href="#overview">Back to top ↑</a></div>
  `;
})();
