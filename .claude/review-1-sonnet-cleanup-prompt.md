# Review 1 of 2: cleanup pass (Sonnet 5.5)

Run this FIRST, in a Claude Code session opened in this folder with Sonnet 5.5. Then run `.claude/review-2-fable-accuracy-ethics-prompt.md` on the cleaned-up result.

```
Read CLAUDE.md first and follow it. This is part 1 of a 2-part review of MoveWell. Your job is the cleanup pass: plain language, no diagnosing, a better onboarding, and a simple disclaimer. A stronger model will do the accuracy and ethics review afterward, so do NOT try to certify that exercises are medically correct.

CONTEXT
MoveWell is used by real PT patients, many older and not tech savvy. It should be a friendly foundation of general exercises that a professional can adjust. It must never read as a diagnosis, a treatment plan for a specific condition, or a promise of results.

PHASE A: Diagnosis and assumption audit (whole app)
Search every user-facing string in index.html and js/ (including js/data/templates.js CONDITIONS blurbs, routine templates, onboarding, body map, tour, progress, settings, empty states, session screens). Find every place the app:
- names or defines a diagnosis, disorder, or injury (e.g. Thoracic Outlet Syndrome, Upper Crossed Syndrome, Rotator Cuff, Carpal Tunnel, Sciatica, Disc-Related, Frozen Shoulder)
- implies the user HAS a condition, or that an exercise is the treatment for it
- explains causes, mechanisms, or prognosis ("recovery is slow but steady", "research-backed fix", "reduces falls by 30 to 40 percent", "usually calms...")
- makes numeric or outcome claims without a source
- assumes things about the user (age, ability, equipment, that they have a professional, that they are healthy enough to exercise)
List every hit with file and line. For each, propose neutral replacement wording, or a restructure that removes the diagnosis label. Prefer body areas and goals over medical names ("Shoulder aches", "Neck tension and stiffness", "Standing taller", "Stiff hands", "Steadier balance"). If a medical name must remain, it is optional and never a suggestion. Flag any claim you are unsure about as "for the accuracy review" instead of guessing.

PHASE B: Exercise wording pass (all exercises in js/data/exercises-*.js)
For every exercise, check ONLY clarity and tone:
1. Are the howTo steps plain English a 75-year-old could follow? Short sentences, no jargon, one action per step, clear start and end position.
2. Remove "treats", "fixes", "cures". Prefer "may help with", "often used for".
3. Add an obviously missing "stop if" caution (dizziness, sharp pain, numbness or tingling, chest pain, shortness of breath). Do not invent clinical specifics.
4. Do NOT change doses, levels, positions, or condition tags. If something looks wrong or risky, add it to a list titled "For the accuracy review" with the exercise id and your reason.
Show me the proposed edits grouped by region before applying.

PHASE C: Onboarding walkthrough and "Anything more specific?" screen
Walk the whole first-run flow (core.js startOnboarding / obSteps / onboardStep, tour.js) in the built-in browser at 375px and again at Extra Large text. Take a screenshot of every step. Note anything confusing, long, pushy, or asking for sensitive info too early (give a short honest note per step; a deeper critique comes in part 2).
Fix the "Anything more specific? (optional)" screen:
  a. It reads like a list of diagnoses, which is too diagnostic and can alarm or mislead people.
  b. The order comes from hard-coded group lists in js/data/templates.js, so rare conditions (Thoracic Outlet Syndrome has commonRank 23) sit near the top. Reorder by how common and relatable each item is (use commonRank or a better ordering), most familiar and least clinical first.
  c. Reframe it so it does NOT imply the exercises are universal or a prescription: "These are starting points. A professional can adjust them for you." Use plain, symptom or goal language, add a "Not sure / just exploring" option, and keep the step easy to skip.
Show me 2 or 3 mockups of the redesigned screen and wait for my pick before building.

PHASE D: Disclaimer
Design a very short, aesthetic disclaimer at the start of onboarding: 2 to 3 plain sentences, friendly not legal, large text, one "I understand" button, matches the Calm Glass design (css/calm.css), works at Extra Large text and on phones, and can be viewed again in Settings. It should say, in spirit: MoveWell shares general exercises as a starting point; it does not diagnose or replace a doctor or physical therapist; stop if something hurts or feels wrong; check with a professional before starting, especially with an injury, surgery, or health condition. Do not collect health data in this step. Show 2 or 3 mockups and wait for my pick.

RULES
- Report first, edit after I approve. Apply approved changes in small batches (copy, then exercises by region, then onboarding, then disclaimer) and verify each batch with before and after screenshots at 375px and Extra Large text.
- Keep CLAUDE.md rules: rem units, safe areas, bump ?v= in index.html, do not break saved data (if the disclaimer needs a saved flag, add a default plus a migration), no em dashes.
- End each batch with a "What changed" summary.
- Final output: (1) audit list, (2) exercise wording edits, (3) onboarding screenshots and notes, (4) chosen mockups built and verified, (5) a "For the accuracy review" list to hand to part 2.
```
