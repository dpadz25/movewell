# MoveWell review 2: accuracy, safety, and ethics

Date: 2026-11-10. Reviewed at commit `7abf9f2` (site version `20261110d`). Nothing in the app was changed.

## How to read this

- **Scope.** All 312 exercises, all 34 routine templates, all 29 condition blurbs, the onboarding flow at 375px and at the Largest text size, and the pain, streak, backup, and delete code paths.
- **What "verified" means here.** A named source supports that specific dose or safety point. It does not mean medically verified. For most sources I read search summaries and abstracts, not the full text. Where a source did not cover a point, I say so.
- **What "likely fine" means.** I read the exercise in full, it is a standard low-risk movement, and its dose sits in a normal range. I did not find a source for that individual exercise.
- **What "needs PT review" means.** A clinical judgment call I should not make for you.
- **Part 1's handoff list.** Every item on it is covered and marked `[H]` in the change list.

Files in this folder:
- `REVIEW.md` (this file): templates, onboarding, ethics, change list, sources.
- `1-exercise-accuracy-table.md`: one row per exercise.
- `pt-handover.md`: the clean list to hand to a licensed PT.
- `screens/`: onboarding screenshots.

## The ten things that matter most

1. **High pain gets no response.** Logging 9 out of 10 shows only "Saved. You can see it in Progress." (tested, see `screens/09`). Finishing a session with pain 10 shows "Session saved. See you next time!".
2. **Stopping because it hurts costs you your streak.** "This hurts" then "Stop for today" opens a dialog that says the session "will not count toward your streak", with a "Keep going" button. That rewards pushing through pain.
3. **There is no emergency guidance anywhere.** Nothing about chest pain, numbness around the groin, loss of bladder control, or sudden leg weakness. The one mention of chest pain (upper back blurb) says "see a professional" where the sources say call emergency services.
4. **Onboarding calls hard routines "gentle".** "Lift at the gym" adds barbell bench press and back squat. "Yoga" adds a 68-step, roughly 60 minute flow with six Advanced poses. "Cardio" adds about 61 minutes including all-out sprints. "Core and posture" adds hanging leg raises. All are announced as "gentle starter routines".
5. **Tapping Chest on the body map** lets you log chest pain with no heart warning, and "Make me a routine for this area" builds Push Day (barbell bench press). Tapping Neck builds the old thoracic outlet routine with nerve glides, not the Gentle Neck Routine. (Both tested.)
6. **Osteoporosis cautions are on the wrong exercises.** Part 1 put them on twists and backbends. The osteoporosis sources are most careful about forward bending and curl-ups, and treat gentle back extension as the safer direction. Forward folds, crunches, sit-ups, and the Curl-Up have no note.
7. **The back bending exercises still carry assessment logic.** Press-Up and Lying on Elbows explain "centralization" and "disc-related pain". The Back and Leg routine mixes a bend-forward stretch with a bend-backward one, which contradicts the direction idea both come from.
8. **Named protocols are overstated.** The heel drop is called "the classic Alfredson protocol" at about a fifth of that protocol's daily dose. The balance routine name-drops Otago, whose results come from a physical therapist visiting the home.
9. **"After surgery" routines have no gate.** Picking "Getting moving after surgery" adds bridges, sit to stand, and a 10 minute walk with no "only when your surgeon says so" step.
10. **Cautions are hidden during a session.** The "Take care" line only shows if you open "How to do it". "This hurts" is two taps away behind the X.

---

## 1. Exercise accuracy

Full table: `1-exercise-accuracy-table.md`. Totals: 312 rows, 7 verified, 275 likely fine, 30 need PT review, 156 rows have a specific finding.

Patterns across the table:

- **Wrong caution pasted on.** `carioca` has the jumping caution. `sidelying-external-rotation` warns about back, hip, and knee on a shoulder exercise. `yoga-anjali-mudra` and `yoga-closing-self-hug` talk about lying flat while seated. `ankle-pumps` says "None for most people".
- **Cardio machines missed part 1's stop rule.** Treadmill walk and run, bike, rower, elliptical, stair climber, mountain climbers, burpees, and Walking (Timed) have no chest pain or dizziness line. 34 of the lifts in `exercises-gym.js` also lack the shared lifting line.
- **Levels are too kind for older adults.** 157 exercises are Gentle. Ones I would raise: `backward-walking`, `carioca`, `eyes-closed-stand`, `leg-swings`, `incline-treadmill-walk`, `goblet-squat`, `bicycle-crunch`, `farmers-carry`, `scalene-stretch`, `scm-stretch`, `sleeper-stretch`, `yoga-wide-fold`, `pigeon-stretch`, `couch-stretch`, `yoga-camel`, `yoga-fish`, `kettlebell-swing`, `lateral-step-down`, `mountain-climbers-cardio`, `push-up-plus`.
- **Tags that make gym lifts look like treatment.** `kelso-shrug` (thoracic outlet), `hammer-curl` (tennis elbow), `hip-thrust` and `machine-hip-thrust` (hip aches), `landmine-press` (rotator cuff), `back-extension` and `kettlebell-deadlift` (low back), `elliptical` (after surgery).
- **Tags that contradict the exercise.** `couch-stretch` is tagged for knee aches and its caution says skip with kneecap pain. `prone-swimmers` and `shoulder-cars` are tagged for stiff shoulders that cannot do them. `suitcase-carry`, `bird-dog`, and `monster-walk` are tagged for balance.
- **Diagnosis words left in names.** Press-Up (McKenzie Extension), Eccentric Heel Drop (Achilles), Eccentric Wrist Extension (Tennis Elbow), Eccentric Wrist Curl (Golfer's Elbow), Wrist Extension Hold (Tennis Elbow). Old names can stay as search aliases.
- **Nerve glides.** Two are written correctly as gentle sliders (`sciatic-nerve-floss`, `supine-sciatic-glide`, `neck-arm-nerve-slider`). Three are closer to nerve stretches as written (`median-nerve-glide`, `ulnar-nerve-glide`, `radial-nerve-glide`), and `median-nerve-glide` contradicts the slider next to it. Evidence for glides is very low quality for the hand (S11) and mixed for the leg (S12). My recommendation: keep the three sliders with firm stop rules, pull the other three plus `femoral-nerve-glide` out of routines until a PT rewrites them.
- **Heavy barbell lifts `[H]`.** Deadlift, sumo deadlift, back squat, front squat, good morning, and sled push are described correctly and rated Advanced. They are acceptable in a library a gym-goer browses. They are not acceptable as an automatic onboarding starter. Two tips teach breath holding under load.
- **Variations.** Mostly real and clearly different. Problems: `levator-stretch` (the variation is the same exercise), `weight-shifts` (only variation is much harder), `doorway-pec-stretch` (variation text contradicts its name), `stair-climber` (sideways steps on moving stairs).
- **Pregnancy `[H]`.** Mentioned once (`qg-belly-tapping`). Lying flat on the back for long periods, breath holds, and impact have no pregnancy note (S5).
- **No pictures.** Every exercise is text only. For older adults and non-native English readers this is the largest single accuracy risk: a correct description can still be performed wrongly.

## 2. Routine templates and condition blurbs

### Routines modeled on named protocols `[H]`

| Routine | Honest? | Safe and sensible? | What I would change |
|---|---|---|---|
| **Low Back Care (Big 3 +)** | Mostly. "Three well-known core endurance exercises" is fair. "Big 3" in the name means nothing to a patient. | The three core moves and doses fit how they are usually taught (S9, though I found no official dose). It adds Knee to Chest and Lower Trunk Rotation, which the Big 3 approach does not include. About 29 minutes, long for a first routine. No emergency signs. | Rename "Low Back Care" for new users. Cut to about 6 exercises. Add the back emergency line (S3). PT to confirm the stretches. |
| **Foot & Heel Care** | No. "Including the classic eccentric heel program" overstates it: the program is 180 reps a day for 12 weeks (S6), the app gives 36. | One routine serves both heel cord soreness and arch soreness. The Advanced heel drop off a step is handed to anyone with a sore arch. | Say "a slow heel-lowering exercise based on a well-known program". Default to the floor version. PT to decide on splitting it in two. |
| **Steady & Strong (Balance)** | Partly. The exercises overlap with Otago (sit to stand, sideways walking, heel to toe, one-leg stand, heel and toe raises). But Otago is prescribed and progressed by a therapist over home visits, with ankle weights and a walking plan (S8). The fall results come from that. | Order is fine. About 29 minutes is long. Nothing about dizziness or past falls. Sources prefer a counter to a chair, because chairs move (S18). | Drop the Otago name. Say "common strength and balance exercises. Hold a kitchen counter." Add: if you have fallen in the past year or feel dizzy, ask for a falls check first. |
| **Elbow and Forearm Strength** | Yes. | One routine loads both sides of the forearm for either complaint, plus grip squeezes that can aggravate the outer elbow. Dose is near the small trials (S13). No word on how often. | Add "every other day is plenty to start". PT to confirm the grip squeeze and the ache rule. |
| **Gentle Shoulder Mobility** | Yes. "Change takes patience" is truthful. | Sensible order. Ends on an isometric, fine. | Add a stop rule to the description. |
| **Neck, Chest and Shoulder Opener** (old thoracic outlet routine) | The name is honest. The content is still the thoracic outlet routine. | Ten exercises including a first rib self-mobilization and two nerve glides. Arm tingling or heaviness is itself a reason to be seen. | Remove the first rib move and both nerve glides. Add: new arm numbness, weakness, swelling, or color change means see a professional. |
| **Back and Leg Mobility** | Yes. | No. It contains Knee to Chest (bend forward) and Press-Up (bend backward). The direction approach picks one, after an assessment (S10). | Remove both. Keep the seated nerve slider, Figure-4, bridge, bird dog. Add the emergency line. |
| **Wrist and Hand Care** | "To keep the wrist and hand moving" is fair. | Serves three different complaints. A nerve glide is irrelevant to hand arthritis. End-range wrist stretches are doubtful for nerve-type hand symptoms. | Remove the nerve glide and Prayer Stretch from the shared routine. |
| **Upper Back Mobility / Strength** `[H]` | Yes, and part 1 was honest that the evidence is weak. | Low risk. Three of six mobility moves need hands and knees. `prone-cobra`, `bird-dog`, `wall-angels` are fine unsupervised. | Offer seated options first. |

### Other routines

- **Gentle Full-Body Start.** Says "every exercise has an easier variation". Four of nine have none (tested). Tagged for after surgery with no gate. About 36 minutes.
- **Leg Warmup.** "Gentle moves" includes single-leg swings, a deep squat hold, and band walking.
- **Yoga for Legs & Hips.** "A gentle flow" includes Downward Dog, a deep squat, and two head-down folds.
- **Beginner Yoga Flow.** 68 steps, about 60 minutes, Chaturanga four times, Warrior III twice, the Seated Roll-Up. Not a beginner routine for this audience.
- **Cardio & Conditioning Day.** About 61 minutes across five machines, ending in sprints "if you have gas left".
- **Core & Abs Day.** Weighted crunches, decline sit-ups, hanging leg raises. Mapped to "Core and posture" in onboarding.
- **Push, Pull, Leg, Upper, Lower, Kettlebell.** Normal programming for healthy gym-goers. Leg Day is a lot of volume. The 15 minute steep treadmill walk is not a cool-down.
- **Knee Builder, Hip Strength, Ankle, Seated, Relax, Qi Gong.** Sensible. Knee Builder (40 min) and Seated (39 min) are long. "Restores hip flexibility" is an outcome claim.
- **No routine says how often.** Only one mentions "every other day". The streak design implies everything daily.

### Condition blurbs `[H]`

- **Upper back aches.** Good that it has a red-flag line. Chest pain or shortness of breath must say "get emergency help", not "see a professional" (S4).
- **Back and leg discomfort, Low back aches.** Need the emergency line: numbness around the groin or bottom, trouble peeing or controlling bowels, weakness or numbness in both legs (S3).
- **Back discomfort with bending** `[H]`. "Some people find gentle back-extension movements comfortable" is true, and the next sentence ("a professional can tell you which direction suits you") is the honest part. But the condition only exists to steer people toward extension, which an app cannot assess. It also has no routine, so picking it in onboarding gives nothing (tested). Recommend hiding it from onboarding and the body map, keeping the id for saved data.
- **Hand and wrist strain.** Fine. Change "commonly used" to "sometimes used" for glides (S11).
- **Headaches with a tight neck.** Add: a sudden severe headache, or one with weakness, confusion, or vision change, is an emergency. Unverified wording, PT or doctor to confirm.
- **Getting moving after surgery.** The blurb is right. It needs to be a gate, not a sentence.
- **Steadier balance.** Modest and fine. "Balance can be practiced at any age" is reasonable.
- **Stiff, achy fingers; cardio; strength.** Modest. Cardio and strength should add "ask first if you have a heart condition".
- **Every "commonly used" line.** Reasonable wording. I verified only the plantar stretch (S14) and elbow lowering (S13, small trials). The rest are unverified.
- **"commonRank" numbers** are invented orderings. Harmless, but the code comment calls them prevalence.

## 3. Onboarding critique

Walked at 375px and at Largest text (26px root). Layout holds at both. Screenshots in `screens/`.

| Step | Verdict |
|---|---|
| **Name** (`01`) | Fine. Optional, blank works. |
| **Text size and color** | Good that it comes second. Earns its place. |
| **Safety note** (`03`) | Clear, short, truthful, and cannot be skipped, so it is seen. Weak points below. |
| **Goal** (`04`) | The only forced question: no Skip, Continue disabled. A stethoscope icon on "Ease aches" leans medical. |
| **Fitness choices** (`05`) | Promises "a gentle starter routine for each one". False for four of eight choices. |
| **Areas** (`06`) | "Where would you like to focus?" is well worded and not diagnostic. "Not sure, just exploring" is good. |
| **Done** (`07`) | "We picked 4 gentle starter routines" listed Upper Body Day and Lower Body Day in my run. Up to 6 routines can be added at once. |

Where it bothers me:

- **The safety note is honest but thin.** It never says who should ask first: recent surgery, heart condition, chest pain, dizziness or falls, osteoporosis or a past fracture, pregnancy. It has no emergency line. After onboarding it lives only in small footer text at the bottom of Settings.
- **"Stop if anything hurts" is not what the app then says.** Several exercises say a mild ache or stretch discomfort is fine. Pick one rule and use it everywhere.
- **"PT"** is an abbreviation many older or non-native readers will not know.
- **No check-in at the risky moments.** Choosing Back gives a back routine without the emergency signs. Choosing "Getting moving after surgery" adds two routines with no question.
- **The step dots change length** (5, then 6, then 7) as you answer. People cannot tell how long it is.
- **Decorative leaves drift across the heading and the routine list** on the last step.
- **Sex, height, weight.** Onboarding no longer asks. Good. But Settings still asks for height, which nothing uses, and `sex` is still saved as an empty value. Weight is optional and only feeds a chart.
- **Conditions and goal** earn their place: they pick routines and hide pain prompts for fitness-only users.
- **Skipping everything works.** Home shows a clear empty state with two buttons (`08`). The one exception is the forced goal step.

## 4. Ethics and product review

### Safety

| # | Finding | Rank |
|---|---|---|
| S-1 | No "when to stop and get help" guidance anywhere. No emergency signs. | must fix |
| S-2 | Chest on the body map: pain log with no heart warning, and the routine button builds Push Day. | must fix |
| S-3 | Onboarding hands out advanced routines as "gentle". | must fix |
| S-4 | After-surgery content has no gate. Hip replacement limits (S17) are not mentioned on deep hip bends, crossed-leg stretches, or twists. | must fix |
| S-5 | Osteoporosis notes missing from forward bends, crunches, sit-ups, Curl-Up, rowing, foam rolling the upper back (S2). | must fix |
| S-6 | Cautions hidden during sessions. "This hurts" buried behind the X. | must fix |
| S-7 | Neck on the body map builds the nerve glide routine. | should fix |
| S-8 | Back bending exercises carry self-assessment logic. | should fix |
| S-9 | Dizziness and fall risk: several balance exercises are under-rated or lack "someone nearby". Sources say hold a counter, not a chair (S18). | should fix |
| S-10 | Head-down poses have no glaucoma note (S16). | should fix |
| S-11 | Breath holding: two lift tips teach it, two breathing drills use holds with weak cautions. I could not confirm the blood pressure point in a primary source. | should fix |
| S-12 | Pregnancy is covered in one exercise only (S5). | should fix |
| S-13 | Blood thinners on foam rolling `[H]`: sensible, but the consensus I found names blood clots, fractures, and open wounds (S15). Add "never roll a swollen, painful leg". | nice to have |

### Honesty

| # | Finding | Rank |
|---|---|---|
| H-1 | Streak penalty when stopping for pain. Also "Almost there. Do at least N to have it count" with a "Go back and do more" button. | must fix |
| H-2 | Daily streak, "N of 7 days done" bar, milestones up to 365 days. Strength and tendon work need rest days. This pushes daily exercise by design. | should fix |
| H-3 | Confetti and "Nice work" fire before the pain question, and nothing changes if the answer is 9. | should fix (with P-1) |
| H-4 | Protocol name-dropping (Alfredson, Otago, Big 3, McKenzie). | should fix |
| H-5 | Outcome claims left in tips: "the medicine", "rebuilds the tendon", "research-backed", "wonderful for tension headaches", "many people feel relief within a few minutes", "restores hip flexibility", "torches extra calories". The tour says "watch your work pay off". | should fix |
| H-6 | The Mind screen cites "Cleveland Clinic & American Psychological Association" with no link. Unverified. | nice to have |

### Pain logging `[H]`

| # | Finding | Rank |
|---|---|---|
| P-1 | Body map: any score, even 10, gets "Saved." Finish screen: same. | must fix |
| P-2 | Progress says pain is "up a little" for any rise, even 2 to 8, and tags it "Keep an eye on it". | must fix |
| P-3 | A rise after a session (for example 3 before, 7 after) triggers nothing. | should fix |
| P-4 | The 0 to 10 buttons are 24px wide at 375px. Hard to hit for older hands. | should fix |

What I would have it say: at 7 or more, or a rise of 3 or more, show a calm card: "That is a lot of pain. Rest today. If it does not settle, or you have any of these signs, contact your doctor or therapist", with a link to the emergency signs. No confetti on that path.

### Privacy

- **What is stored:** name, goal, chosen conditions, routines, session history, pain scores with free-text notes, weight history. All in the browser on the device. Nothing is sent anywhere. That is a real strength.
- **How clear it is:** stated in Settings and on the backup card. Not stated in onboarding, where trust is set. **Should fix:** one line on the safety step.
- **Backup file:** plain readable text containing all of the above, saved wherever the phone puts downloads. No warning. **Should fix:** "This file has your health notes. Keep it somewhere private."
- **Loading a backup** replaces everything after one confirm, and skips the upgrade steps that normal loading runs. An older backup could lose its Home routines or break warmups. Found by reading the code, not reproduced. **Should fix.**
- **Erase everything** has a clear confirm. It leaves the unfinished-session record behind (`movewell-active-session-v1`). **Nice to have.**
- **Outside requests:** fonts from Google and Chart.js from a public CDN on every load. No data is sent, but "everything stays on this device" should not be read as "this app contacts nobody". **Nice to have:** host both locally, which also helps offline use.
- **Sensitivity:** weight plus pain plus conditions is health data on what may be a shared family phone. No lock. Worth one sentence in Settings.

### Accessibility and inclusion

- **Works well:** text scaling to 26px, big buttons, plain headings, reduced-motion rules exist in the CSS.
- **Low vision:** no exercise pictures. Pain scale buttons are small.
- **Motor limits:** floor exercises are everywhere and there is no "no floor" filter. Getting down and up is itself a fall risk. Only one exercise says to skip if the floor is unsafe.
- **Non-native English:** "PT", "CARs", "Scaption", "Pallof", "Kelso", "Eccentric", "Pronation & Supination", "Isometric", "Quadruped", Sanskrit names in titles. Anatomical muscle names are shown in details. Pounds, feet, and mph only.
- **People who are not fit:** Gentle routines run 20 to 40 minutes. A first session should be about 10.
- **Older adults:** up to six routines land on Home after onboarding. One is enough to start.

### Anything else

- The custom exercise builder lets anyone tag their own exercise as helping a condition. Low risk, since it is their own device.
- "Exercises that often help" as the heading on a condition page is a mild efficacy claim. "Exercises often used" is safer.
- A stale code comment says the body figure adapts to male or female. It does not.

## 5. Prioritized change list

Nothing below is applied. Batches follow your order: exercises by region, then templates, then onboarding and safety. `[H]` marks part 1's handoff items. `[PT]` means I would hold it until a PT answers.

### Must fix

| # | Change | Batch |
|---|---|---|
| M1 | Add a "When to stop and get help" screen (emergency signs, then see-a-professional signs). Link it from Settings, the "This hurts" sheet, condition pages, and the pain card in M2. Needs a mockup first. | Safety |
| M2 | Respond to high or rising pain: card at 7+ or a rise of 3+, on the body map, the finish screen, and Progress. Replace "up a little". `[H]` | Safety |
| M3 | Stopping for pain saves what was done and does not mention the streak. Remove "have it count" pressure from the half-done prompt. | Safety |
| M4 | Onboarding: stop calling non-gentle routines gentle. Either remap the four choices to gentle routines (needs up to four new small templates, your call) or keep the mapping and say "starter routine" with a level label. | Onboarding |
| M5 | Chest on the body map: add a heart warning to the pain sheet, and stop the routine button from picking gym days. Neck picks the Gentle Neck Routine. | Safety |
| M6 | After-surgery gate: a confirm step ("Has your surgeon or therapist said you can exercise?") before those routines are added, plus the surgery line on the 11 tagged exercises. `[H]` | Onboarding + exercises |
| M7 | Osteoporosis notes on forward bends, crunches, sit-ups, Curl-Up, Seated Roll-Up, rowing, upper back foam rolling, Qi Gong twists. Fix the Roll-Up's "safer substitute". `[H]` | Exercises |
| M8 | Add the cardio stop line to the nine cardio entries that lack it, and the lifting stop line to the gym lifts that lack it. `[H]` | Exercises |
| M9 | Fix the wrong cautions: `carioca`, `sidelying-external-rotation`, `yoga-anjali-mudra`, `yoga-closing-self-hug`, `ankle-pumps`, `farmers-carry`. | Exercises |
| M10 | Blurbs: emergency line on the two back conditions, "get emergency help" on upper back, hide "Back discomfort with bending" from pickers. `[H]` | Templates |
| M11 | Show the caution on the session card, and put "This hurts" on the session screen. | Safety |

### Should fix

| # | Change | Batch |
|---|---|---|
| S1 | Raise the 20 under-rated levels listed in section 1. | Exercises |
| S2 | Remove the misleading tags listed in section 1 and the table. `[H]` | Exercises |
| S3 | Rename the five exercises with diagnosis words, old names kept as aliases. Remove centralization and disc wording. `[H]` | Exercises |
| S4 | Nerve glides: firm stop rules on the three sliders. Pull the other four from routines. `[H]` `[PT]` | Exercises + templates |
| S5 | Routines: remove first rib and nerve glides from the Opener, remove Knee to Chest and Press-Up from Back and Leg, drop the Otago and "classic eccentric program" wording, floor version of the heel drop, fix "every exercise has an easier variation", reword the three "gentle" descriptions. `[H]` `[PT]` for the swaps | Templates |
| S6 | Take the Seated Roll-Up out of the Beginner Yoga Flow and rename the flow honestly, or build a short gentle yoga routine. | Templates |
| S7 | Add glaucoma, hip replacement, pregnancy, and "counter not chair" notes where the table lists them. `[H]` | Exercises |
| S8 | Remove breath-holding tips from deadlift and squat. Align the two breathing-drill cautions. `[H]` | Exercises |
| S9 | Remove leftover outcome claims and superlatives (list in H-5 and the table). `[H]` | Exercises + tour |
| S10 | Safety step: add who should ask first, spell out "physical therapist", add the privacy line, settle on one pain rule. Give the goal step a "Not sure" option. | Onboarding |
| S11 | Streak: change to a weekly active-days view with rest days treated as normal. Needs a mockup. | Safety |
| S12 | Backup: privacy sentence on save, run the upgrade steps on load. | Safety |
| S13 | Bigger pain scale buttons (two rows at phone width). | Safety |
| S14 | Add "how often" to rehab routine descriptions. `[PT]` | Templates |
| S15 | Cap onboarding at one or two starter routines, shortest first. | Onboarding |

### Nice to have

| # | Change |
|---|---|
| N1 | A "no floor exercises" filter. |
| N2 | Remove the Height field and the unused `sex` value from the screens (keep the saved keys). |
| N3 | Host fonts and Chart.js locally. |
| N4 | Clear the unfinished-session record on Erase everything. |
| N5 | Fix variation oddities (`levator-stretch`, `weight-shifts`, `doorway-pec-stretch`, `stair-climber`). |
| N6 | Fixed-length step dots, and keep leaves off the text on the last onboarding step. |
| N7 | Simple line drawings for the 20 most-used exercises. A large job, worth planning separately. |
| N8 | Shorter first-week versions of the long gentle routines. |

### What I would not do

- Remove the heavy barbell lifts `[H]`. They are correct, clearly Advanced, and fine for people who chose the gym. Keeping them out of automatic starters is enough.
- Remove `knee-to-chest` and `prone-on-elbows` from the library `[H]`. Both are ordinary gentle movements once the assessment wording and condition tags are gone.

## Sources

Used as "consistent with", never as proof of medical validity.

- **S1** ACSM stretching guidance (10 to 30 s holds, 30 to 60 s for older adults, 2 to 4 repeats): https://www.acsm.org/blog-detail/acsm-certified-blog/2021/03/18/stretching-and-flexibility-guidelines-update
- **S2** Royal Osteoporosis Society, bending forward: https://theros.org.uk/information-and-support/osteoporosis/living-with-osteoporosis/exercise-and-physical-activity-for-osteoporosis/caring-for-your-back/bending-forward-with-osteoporosis . UK consensus statement "Strong, steady and straight": https://repository.lboro.ac.uk/articles/journal_contribution/Strong_steady_and_straight_UK_consensus_statement_on_physical_activity_and_exercise_for_osteoporosis/19906744/1 . International Osteoporosis Foundation: https://www.osteoporosis.foundation/health-professionals/prevention/exercise/exercise-individuals-with-osteoporosis . Note: the Society says ordinary bending is generally safe, and the concern is forced, loaded, repeated, or end-range bending and twisting.
- **S3** NHS back pain, when to get urgent help: https://www.nhs.uk/conditions/back-pain/
- **S4** American Heart Association, heart attack warning signs and calling 911: https://www.heart.org/en/news/2025/04/15/call-911-for-heart-attack-or-stroke-symptoms-or-just-drive-to-the-er
- **S5** ACOG, exercise during pregnancy: https://www.acog.org/womens-health/faqs/exercise-during-pregnancy and Committee Opinion 804: https://pubmed.ncbi.nlm.nih.gov/33481513/ . I saw the warning list through a secondary document, not the page text.
- **S6** Heel drop program dose (3 x 15, twice daily, two knee positions, 12 weeks): https://pmc.ncbi.nlm.nih.gov/articles/PMC6429908
- **S7** Pain-monitoring approach for heel cord rehab (up to 5 out of 10, settled by next morning): https://pmc.ncbi.nlm.nih.gov/articles/PMC8364697
- **S8** Otago programme delivery: https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2017.00054/pdf and https://pmc.ncbi.nlm.nih.gov/articles/PMC6549299
- **S9** "Big 3" back exercises as commonly taught: https://www.health.harvard.edu/staying-healthy/three-moves-for-better-spine-health . No official dose found.
- **S10** Low back pain clinical practice guideline, 2021 revision: https://pubmed.ncbi.nlm.nih.gov/34719942/
- **S11** Cochrane review, exercise and mobilisation for carpal tunnel syndrome (limited, very low quality evidence): https://pubmed.ncbi.nlm.nih.gov/22696387/
- **S12** Neural mobilization for lumbar radiculopathy, meta-analysis (favorable, very mixed studies): https://pmc.ncbi.nlm.nih.gov/articles/PMC10744707/
- **S13** Eccentric wrist extensor exercise, small trial: https://journals.riphah.edu.pk/index.php/jrcrs/article/view/1759 . The 3 x 15 daily figure comes from a 2010 study I saw only through secondary pages.
- **S14** Plantar fascia stretch trial summary: https://www.aafp.org/pubs/afp/issues/2004/0215/p961.html and RACGP: https://www.racgp.org.au/clinical-resources/clinical-guidelines/handi/handi-interventions/exercise/stretching-exercises-for-plantar-fasciitis
- **S15** Foam rolling cautions, expert consensus: https://pubmed.ncbi.nlm.nih.gov/34830642/
- **S16** Glaucoma and head-down poses: https://glaucoma.org/articles/sports-exercise-and-glaucoma-safe-practices-and-recommendations
- **S17** Hip replacement precautions: https://www.ncbi.nlm.nih.gov/books/NBK537031/ . Practice varies by surgeon: https://news.hss.edu/study-suggests-hip-replacement-patients-can-skip-hip-precautions
- **S18** National Institute on Aging, balance exercises: https://www.nia.nih.gov/health/exercise-and-physical-activity/three-types-exercise-can-improve-your-health-and-physical . NHS handout on not holding furniture that can move: https://worcsacute.nhs.uk/~documents/route:/download/4177
- **S19** AHA resistance training statement: https://pmc.ncbi.nlm.nih.gov/articles/PMC11209834 . It did not cover breath holding in what I could read, so that point stays unverified.

Not verified at all, and labeled that way in the table: neck positions and dizziness, back bending with standing-related leg pain, isometric holds easing pain, the stroke and headache emergency wording, heel drops with soreness at the heel bone, knee guideline support for the knee routines, tai chi and falls.
