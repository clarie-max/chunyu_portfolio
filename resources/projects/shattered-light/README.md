# Shattered Light

2026 undergraduate thesis project by Chunyu Ji at South China University of Technology, now in continued development. Chunyu confirmed that the portfolio should focus on the latest Unity version. The current school chapter is a presentation-anxiety narrative; the bedroom and park retain their earlier structure.

## Portfolio files

- `resources/shattered-light-case.js`: focused case-study content, loaded only for the `shattered-light` slug (also the detail page's default).
- `resources/shattered-light-case.css`: styles scoped to `.shattered-case`.
- `project-detail.html`: shared fallback data, theme handling, and case-study entry point.
- `projects.html`: concise listing summary and concept-art cover.

The case study distinguishes the current revision, earlier thesis evaluation, and proposed future work. All visible webpage copy is English. No current gameplay video or playable-build URL has been supplied for this project. Existing gameplay captures are labeled as earlier thesis images; the current school flow is presented as an HTML diagram, not a simulated screenshot.

## Sources and scope

The supplied `thesis-report.pdf` is the source for the earlier build and its evaluation. Page references below are PDF page numbers, including front matter:

- Pages 18–20: formative survey (115 participants) and interviews (14 participants), needs, and design direction.
- Pages 21–28: CBT-informed framework, interaction design, and the three chapter sequences.
- Pages 29–33: separate prototype evaluation with 13 students, questionnaire results, immediate knowledge scores, and interview feedback.
- Page 31: mean SUS 80.8 (SD 2.27), and mean CBT knowledge accuracy 48.5% before play and 88.7% after play. These are not percentages of emotional improvement.
- Pages 32–33: unclear prompts, delayed feedback, and inconsistent visual styles reported during evaluation. These findings are not presented as feedback on the new school story.

The study session included gameplay, tests, questionnaires, and interviews; its approximately 50-minute duration is not a claim about game length. A small, single-session evaluation does not establish long-term emotional or clinical outcomes.

## Latest Unity version

Read-only review of `D:/Unity/ShatteredLight` on 2026-11-05:

- `Docs/Design/Level01-Playtest.md` (2026-11-04) describes the current presentation-anxiety story and explicitly states that bedroom and park narrative rewrites are pending.
- `Assets/Scripts/SchoolChapterController.cs` and `SchoolChapterProgress.cs`: optional phone replies, rehearsal, three speaking-note choices, listening at the door, and two entry variants. Notes and replies affect later text. Movement is not gated by a mood or energy score. The school scene contains an enabled controller with physical references for desk materials, schedule board, and door.
- `Assets/Scenes/1SchoolSceneDay.unity` and `ProjectSettings/EditorBuildSettings.asset`: chapter is connected to the existing bedroom scene, followed by the park.
- `Assets/Dialogue/MorningHike.asset`, `FriendsCallDialogue.asset`, and `Assets/Scenes/2RoomScene.unity`: morning interpretation dialogue, phone charging, friend call, and departure preparation. The existing dialogue still explicitly favors a constructive response; the website does not claim all three chapters already offer the school's ungraded choices.
- `Assets/Resources/Dialogue/KeyFind.asset`, `Assets/Scripts/StandardRock3KeyInteract.cs`, and `GameplayStoryFlags.cs`: a key in a rock crevice, branch inventory dependency, and key retrieval. The portfolio describes this concrete dependency rather than the thesis's more generic grass/key example.

The current school story is text-led: no newly voiced friend, new NPC model, or fully staged presentation room is established by this revision. The ending is narrated before the transition into the bedroom. Its approximately five-minute design target is not a verified playtime and is not advertised as such.

`Docs/Design/Level01-School.md` is an archived graph-editing proposal. The `Logs/SchoolChapter-intro.png`, `SchoolChapter-draft.png`, and existing validation report also show that superseded graph story; they are not evidence of the current presentation story and are not used on the webpage. This portfolio task did not run the Unity game or validate its current runtime behavior. Website rendering checks are separate from game playtesting.

## Images

- `concept-art.png`: supplied concept illustration; not an in-game capture. Its lightweight preview is used for the listing and detail cover, with an explicit concept-art caption on the detail page.
- `card-preview-640.webp` and `card-preview-1280.webp`: 2:1 previews generated from `concept-art.png`; the existing preview-building script can regenerate them using the listing's `data-preview-source`.
- `gameplay/level-01-classroom.png`: supplied earlier classroom capture, retained as source material.
- `gameplay/level-01-handbook.png`: supplied earlier handbook screenshot. Not used to illustrate the reworked school chapter.
- `gameplay/level-02-dialogue-thesis.jpg`: original embedded image `IM463.jpg` from PDF page 27, extracted without retouching or added text (1068 × 599). Unlike the supplied `level-02-choice.png`, this image contains the actual dialogue text and options.
- `gameplay/level-03-objective-thesis.jpg`: original embedded image `IM469.jpg` from PDF page 28, extracted without retouching or added text (1251 × 704). Shows the key-recovery mission and inventory.
- Other source screenshots, `design-framework.png`, and `thesis-shattered-light-board.jpg` are retained. The long Chinese poster and framework are not displayed in the English case study.

The two existing filenames containing `typewriter` do not match their contents (bed and doorway views). They remain untouched as source files; unsupported typewriter-puzzle claims were removed from the webpage. The thesis PDF is not offered as a public download on the case-study page.

## Most useful additions

1. A current English-language school gameplay recording showing the phone reply, speaking-note options, and door/ending sequence, with a YouTube link for embedding. Current school screenshots are the most important missing visual evidence.
2. A school scene overview showing the desk, schedule board, and door. The webpage already includes a logic diagram; a real spatial overview would add different evidence.
3. A new playtest of the presentation story: observe whether players understand that preparation is optional, notice callbacks to earlier choices, and feel able to pause. Keep this separate from the original 13-person study.
4. Confirm asset and coding credits before adding a detailed production-credit section. Solo design/development does not assert authorship of all art assets.
