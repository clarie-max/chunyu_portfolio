/* Portfolio copy grounded in the current project and user-confirmed responsibilities. */
(() => {
  if (new URLSearchParams(location.search).get('project') !== 'doorcom') return;
  const main = document.getElementById('caseStudy');
  if (!main) return;
  document.body.classList.add('doorcom-case');
  const screenshot = (file, alt, title, caption) => `<figure class="dc-evidence"><a href="resources/projects/doorcom/${file}.webp" target="_blank" rel="noopener" aria-label="Open ${title.toLowerCase()} screenshot at full size"><img src="resources/projects/doorcom/${file}.webp" alt="${alt}" width="1280" height="720" loading="lazy" decoding="async"></a><figcaption><strong>${title}</strong><span>${caption}</span></figcaption></figure>`;
  document.querySelector('meta[name="description"]').content = 'Doorcom — a collaborative Unity prototype exploring social media through portal-connected rooms, spatial puzzles, and two endings. Game concept and level design by Chunyu Ji.';
  main.innerHTML = `
    <header class="dc-intro" id="overview">
      <p class="dc-kicker">GAME DESIGN / COLLABORATIVE PROTOTYPE / 2026</p>
      <h1 id="title">Doorcom</h1>
      <p class="dc-tagline">One more door. One more scroll.</p>
      <p class="dc-lede">A surreal first-person exploration prototype that turns a social media feed into a place. Step through a door, explore a room, and solve its puzzle—until the choice becomes whether to keep going at all.</p>
      <p class="dc-status"><span aria-hidden="true">●</span> In development</p>
    </header>
    <dl class="dc-facts" aria-label="Project facts">
      <div><dt>My role</dt><dd>Game Concept &amp; Level Designer<br>Unity Developer</dd></div>
      <div><dt>Team</dt><dd>Two-person collaboration</dd></div>
      <div><dt>Tools</dt><dd>Unity · C# · URP</dd></div>
      <div><dt>Current scope</dt><dd>Five stages · Two endings</dd></div>
    </dl>
    <div class="dc-contribution" aria-label="My contribution">
      <strong>My contribution</strong>
      <ul><li>Overall game concept and level design.</li><li>Portal design and material programming.</li><li>Code for two stages and the game menu.</li></ul>
    </div>
    <nav class="dc-nav" aria-label="On this project page"><a href="#doorcom-loop">Gameplay</a><a href="#doorcom-stages">Level design</a><a href="#doorcom-endings">Ending</a><a href="#reflection">Reflection</a><a href="#doorcom-demo">Watch gameplay ↗</a></nav>
    <figure class="dc-demo" id="doorcom-demo">
      <iframe src="https://www.youtube-nocookie.com/embed/L7IZA6z1K0A" title="Doorcom — gameplay demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
      <figcaption>Doorcom · Gameplay demo · <a href="https://youtu.be/L7IZA6z1K0A" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></figcaption>
    </figure>
    <section class="dc-section" id="doorcom-loop" aria-labelledby="dcLoopTitle">
      <p class="dc-kicker">CORE GAMEPLAY</p>
      <h2 id="dcLoopTitle">Explore. Respond. Return.</h2>
      <ol class="dc-loop" aria-label="Core gameplay loop"><li><span>01</span><strong>Enter</strong><p>Cross the portal.</p></li><li><span>02</span><strong>Explore</strong><p>Read the room's clues.</p></li><li><span>03</span><strong>Respond</strong><p>Act on what you found.</p></li><li><span>04</span><strong>Return</strong><p>The hub has changed.</p></li></ol>
      <p class="dc-section-lede">The portal connects a persistent hub to a sequence of themed rooms. Explore each room, then return to use its clues in a puzzle. Moving between spaces turns browsing a feed into a physical action.</p>
      <div class="dc-evidence-grid">
        ${screenshot('gameplay-portal', 'The animal room is visible through the doorway, with the yellow hub wall still at the edge of the view', 'Cross the threshold', 'The door frames a different room while keeping the connection to the hub visible.')}
        ${screenshot('gameplay-changing-hub', 'Doors stand against a collage of browser windows beside the yellow hub wall and data rain', 'Return to a changing space', 'Browser imagery, extra doors, and data rain bring the digital feed into the surroundings.')}
      </div>
    </section>
    <section class="dc-section" id="doorcom-stages" aria-labelledby="dcStagesTitle">
      <p class="dc-kicker">LEVEL DESIGN</p><h2 id="dcStagesTitle">A familiar loop, with growing pressure.</h2>
      <ul class="dc-design-points">
        <li><h3>A consistent spatial anchor</h3><p>The hub gives players a familiar place to return to between rooms.</p></li>
        <li><h3>A new action in each room</h3><p>Decoding, cooking, rhythm, and heart assembly vary the interaction within the same door-and-return structure.</p></li>
        <li><h3>A changing return space</h3><p>More doors appear and data rain becomes increasingly visible as players progress. The hub itself carries the sense of a growing feed.</p></li>
      </ul>
      <p class="dc-kicker">CHAPTER ONE / FIVE STAGES</p>
      <ol class="dc-stages">
        <li><span>01</span><div><h3>#PawsAndWhiskers</h3><p>Explore an animal-themed room and use its clues to solve a keypad puzzle.</p></div><small>OBSERVE / DECODE</small></li>
        <li><span>02</span><div><h3>#KitchenChronicles</h3><p>Read recipe clues, handle vegetables, and combine ingredients in a pot.</p></div><small>READ / COMBINE</small></li>
        <li><span>03</span><div><h3>#SoundOn</h3><p>Interact with instruments and reproduce a rhythm to progress.</p></div><small>LISTEN / REPEAT</small></li>
        <li><span>04</span><div><h3>#LikeMe</h3><p>Repeated clicks fill heart fragments, which become pieces of a heart puzzle.</p></div><small>CLICK / ASSEMBLE</small></li>
        <li><span>05</span><div><h3>#InOrOut</h3><p>A ladder and a door offer two different ways to end the journey.</p></div><small>CONTINUE / DISCONNECT</small></li>
      </ol>
      <div class="dc-evidence-grid">
        ${screenshot('gameplay-animal-room', 'Cats and stylized dogs fill the first room, including a floating hot-dog-shaped dog', 'PawsAndWhiskers · Observe', 'A dense collection of cats and dogs turns an animal-themed feed into a room to inspect.')}
        ${screenshot('gameplay-recipe-clues', 'Illustrated recipe cards lie among oversized vegetables in a blue refrigerator-like room', 'KitchenChronicles · Read', 'Recipe images provide visual clues among the oversized ingredients.')}
      </div>
    </section>
    <section class="dc-section" id="doorcom-endings" aria-labelledby="dcEndingsTitle">
      <p class="dc-kicker">ENDING DESIGN</p><h2 id="dcEndingsTitle">Stay in the loop.<br>Or put the phone down.</h2>
      <p class="dc-section-lede">The final stage gives the player two routes. Each turns a familiar digital action into the ending itself.</p>
      <div class="dc-endings">
        <article><p class="dc-kicker">THROUGH THE DOOR</p><h3>One more click.</h3><ol class="dc-ending-steps"><li>Click the robot-verification prompt; it moves elsewhere.</li><li>Repeated attempts trigger the door to slam shut.</li><li>Further clicks multiply the prompts until they overwhelm the view.</li></ol><p class="dc-ending-line">Clicking to dismiss becomes a trap: “You are lost in the digital world.”</p></article>
        <article><p class="dc-kicker">UP THE LADDER</p><h3>Leave the feed.</h3><ol class="dc-ending-steps"><li>Climb out into a seemingly endless fall.</li><li>The view brightens, then cuts to black with a phone screen-off sound.</li><li>Two seconds after the sound finishes, the application closes.</li></ol><p class="dc-ending-line">Closing the game represents putting the phone down.</p></article>
      </div>
      <div class="dc-evidence-grid">
        ${screenshot('gameplay-captcha', 'An I am not a robot verification prompt appears inside the dark final room', 'Stay in the loop', 'The familiar verification prompt becomes the focus of repeated clicking.')}
        ${screenshot('gameplay-fall', 'Repeated outlines of the falling space recede toward a bright white opening', 'Leave the feed', 'The falling space brightens before the screen-off ending.')}
      </div>
    </section>
    <section class="dc-section dc-reflection" id="reflection" aria-labelledby="dcReflectionTitle">
      <div><p class="dc-kicker">REFLECTION</p><h2 id="dcReflectionTitle">Next to test.</h2></div>
      <ul class="dc-reflection-points"><li>Do new players understand how room clues connect to the hub puzzles?</li><li>Do the extra doors and data rain communicate increasing pressure?</li><li>Does the final choice read as staying online or disconnecting?</li></ul>
    </section>
    <footer class="dc-footer"><p>Doorcom · Collaborative prototype · 2026</p><div class="dc-footer-links"><a class="back" href="projects.html">← Back to Game Design</a><a class="back" href="#overview">Back to top ↑</a></div></footer>`;
})();
