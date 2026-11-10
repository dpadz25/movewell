# Review 2 of 2: accuracy and ethics (Fable 5.2)

Run this SECOND, after review 1 is done and merged, in a Claude Code session opened in this folder with Fable 5.2. Suggested effort: High or Xhigh. Paste the "For the accuracy review" list from review 1 along with it.

```
Read CLAUDE.md first and follow it. This is part 2 of a 2-part review of MoveWell. Part 1 (a cleanup pass by another model) already simplified wording, removed diagnosis language, reordered the onboarding conditions, and added a disclaimer. Run `git log` and `git diff` against the commit before part 1 so you know what changed, and do not redo that work. I will paste part 1's "For the accuracy review" list below; treat every item on it as a priority.

MoveWell is used by real PT patients, many older and not tech savvy. It must be an honest, safe foundation of general exercises that a professional can adjust, never a diagnosis or prescription. Your job is the hard judgment work: is this actually correct and safe, and is the app ethical?

This is a review-first job. DO NOT edit anything until I approve the findings.

PHASE 1: Exercise accuracy (every exercise in js/data/exercises-*.js)
For EVERY exercise, check and record:
1. Accuracy: is the movement described correctly and safely (position, range, breathing, what you should feel)? Does the dose (sets, reps, hold, time, per side) match common practice? Is the level (1 gentle, 2 moderate, 3 advanced) honest?
2. Cautions: are the "stop if" cautions specific and sufficient? Check red flags and risk groups: dizziness, sharp pain, numbness or tingling, chest pain, shortness of breath, balance and fall risk, post-surgery limits, osteoporosis or fracture risk for twists and flexion, blood pressure for breath-holding or inverted positions, pregnancy.
3. Tags: do the helps [condition ids] make sense, or is the exercise tagged to something it is not suited for? Are any exercises too advanced or risky for an app with no professional supervision?
4. Variations: are the easier and harder options real and clearly different?
Verify against reputable sources (clinical guidelines, systematic reviews, major PT or sports medicine organizations, university or hospital patient pages). Cite a source for any dose or safety claim you keep or change. If you cannot verify something, DO NOT call it valid: label it "unverified, needs PT review". The best claim allowed is "consistent with these cited sources".
Output: exercise id | accuracy concern | caution fix | source | confidence (verified / likely fine / needs PT review).

PHASE 2: Routine templates and condition blurbs
Review js/data/templates.js routines (the "modeled on real PT protocols" ones such as McGill Big 3, Alfredson heel drops, Otago-style balance). Are they described honestly, safely, and without implying a prescription? Are the exercise combinations and ordering sensible? Does the Otago-style and Alfredson-style wording overstate what an unsupervised app can offer?

PHASE 3: Onboarding critique (honest)
Walk the redesigned flow in the built-in browser at 375px and Extra Large text. Be blunt: where does it bother you, confuse you, ask too much or too early, feel pushy or diagnostic? Does each question earn its place (sex, height, weight, conditions, goal)? Is anything missing (for example a "check with your clinician first" moment, red-flag guidance)? Is the disclaimer from part 1 clear, truthful, and actually seen? Does the app still work well for someone who skips everything?

PHASE 4: Ethics and product review
- Safety: who could be harmed (post-surgery, osteoporosis, heart or blood pressure issues, dizziness, pregnancy, severe pain, red-flag symptoms such as numbness, weakness, chest pain, loss of bladder control)? Where should the app say "stop and see a professional"?
- Honesty: overpromising wording, "progress", streak, or confetti features that could push someone to exercise through pain.
- Pain logging: when pain is high or rising, does the app guide the user sensibly?
- Privacy: what is stored (all in the browser), how clear that is, how backup and delete work, sensitivity of weight, pain, and conditions data.
- Accessibility and inclusion: older adults, low vision, motor limits, non-native English, people who are not fit.
- Anything else a thoughtful clinician, ethicist, or accessibility expert would flag.
Rank every finding must fix / should fix / nice to have, and say what you would change.

RULES
- Be honest and direct. Say plainly when something is weak, risky, or unverified. Do not soften findings.
- Do not claim anything is "medically verified".
- After the review, give me one prioritized change list and WAIT for approval. Then apply changes in small batches (exercises by region, then templates, then onboarding and safety guidance), verifying each with before and after screenshots at 375px and Extra Large text, following CLAUDE.md (rem units, safe areas, ?v= bump, do not break saved data, no em dashes). End each batch with a "What changed" summary.
- Final deliverable: (1) exercise accuracy table, (2) templates review, (3) onboarding critique with screenshots, (4) ethics review, (5) prioritized change list, (6) one clean list of items for a licensed PT to review, ready to hand over.

PART 1 "FOR THE ACCURACY REVIEW" LIST (paste here):
[paste]
```
