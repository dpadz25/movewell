# Exercise accuracy table

One row per exercise, all 312. Source codes (S1 to S19) are listed at the end of `REVIEW.md`.

- **verified**: a named source supports that dose or safety point. Not a medical sign-off.
- **likely fine**: read in full, standard and low risk, no source checked for that exercise.
- **needs PT review**: a clinical judgment call.

Rows: 312. Verified: 7. Likely fine: 275. Needs PT review: 30. Rows with a specific finding: 156.

### Neck, shoulder, elbow, wrist, upper back (exercises-upper.js)

| exercise id | accuracy concern | caution or content fix | source | confidence |
|---|---|---|---|---|
| `chin-tuck` | Movement and 3 x 10, 5 s hold match common practice. | Add numbness or tingling in the arm to the stop rule. | none checked | likely fine |
| `upper-trap-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `levator-stretch` | Fine. The one variation (Armpit Sniffer) is the same exercise again, not a real variation. | Remove or replace the duplicate variation. | S1 (hold time) | likely fine |
| `scalene-stretch` | Combines side bend with looking up. Neck extension plus side bend can bring on dizziness or arm symptoms in older necks. Rated Gentle, which is generous. | Add dizziness to the stop rule. Raise to Moderate. Drop the look-up step unless a PT keeps it. | S1 (hold time only) | needs PT review |
| `scm-stretch` | Head back, tilted and turned at the same time is an end-range neck position. Commonly avoided without supervision in older adults. I could not find a patient-safe source for doing it alone. | Remove from the Posture Reset routine, or keep only with a PT's OK. Raise to Moderate. | unverified | needs PT review |
| `neck-rotation` | Fine. | Add: stop if you feel dizzy. | none checked | likely fine |
| `deep-neck-flexor-lift` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `neck-isometrics` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `suboccipital-release` | Position is fine. Tip claims it is 'wonderful for tension headaches', which is an outcome claim. | Soften the tip. Add dizziness to the stop rule. | unverified claim | likely fine |
| `first-rib-mobilization` | A clinic self-mobilization technique. The towel direction ('down and across') is hard to follow from text, and I found no patient source supporting unsupervised use. | Remove from the library and from the Neck, Chest and Shoulder Opener, unless a PT rewrites it. | unverified | needs PT review |
| `pendulum` | Movement is right. Tip calls it 'a classic first step after shoulder injury or surgery', and a variation adds a weight. After surgery this must come from the surgical team. | Add: after surgery or an injury, only do this if your surgeon or PT told you to. Mark the weighted variation as later-stage. | unverified | needs PT review |
| `band-external-rotation` | Fine, 3 x 12 is common practice. | Add a shared band line to all band exercises: check the band for cracks and anchor it firmly. | none checked | likely fine |
| `band-internal-rotation` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `scaption-raise` | Fine. 'Friendliest lifting angle for the rotator cuff' is a claim. | Soften the tip. | unverified claim | likely fine |
| `prone-ytw` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `band-pull-apart` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `face-pull` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `band-row` | Fine. Tagged for low back aches, but the default position is long sitting with straight legs, which many sore backs dislike. | Remove the low-back-pain tag. Add the band safety line. | none checked | likely fine |
| `wall-slides` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `doorway-pec-stretch` | Main text is fine. The variation 'Low Elbow' then says 'elbow slightly above shoulder height', which contradicts its own name. | Fix the variation wording. | S1 (hold time) | likely fine |
| `cross-body-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `behind-back-towel-stretch` | Movement is right. The caution is encouragement, not a stop rule. | Add: stop at sharp pain, never yank the towel. | none checked | likely fine |
| `shoulder-flexion-wall-walk` | Fine. Says 'mild stretch discomfort is fine', which conflicts with the app-wide 'stop if anything hurts'. | Keep. Fix the app-wide line instead (see change list). | none checked | likely fine |
| `serratus-punch` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `shoulder-shrug-roll` | Fine. The 'caution' is a posture tip, not a caution. | Replace with a real stop rule (pinching or sharp pain). | none checked | likely fine |
| `isometric-shoulder-abduction` | Fine. 'Often calm pain' is a claim. Evidence for isometrics easing pain is mixed. | Soften the tip. | unverified claim | likely fine |
| `eccentric-wrist-extension` | Name carries a diagnosis (Tennis Elbow). 'That slow lowering is the medicine' is a treatment claim. Still says 'mild ache is acceptable if it settles within 24 hours', which part 1 thought it removed. 3 x 12 is close to the 3 x 15 daily used in the small trials. 'Research-backed' on the FlexBar variation rests on very small studies. | Rename to plain words. Remove 'medicine' and 'research-backed'. Decide with a PT whether the mild-ache rule stays, and give it a number if so. | S13 | needs PT review |
| `eccentric-wrist-flexion` | Name carries a diagnosis (Golfer's Elbow). Evidence for the inner elbow is thinner than for the outer elbow. | Rename. Add a stop rule. | S13 (indirect) | needs PT review |
| `forearm-rotation` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `elbow-flexion-extension` | Fine. Tip mentions use after a sling or cast. | Add: after a cast or sling, follow your clinician's timing. | none checked | likely fine |
| `ulnar-nerve-glide` | The 'mask' position loads the nerve at the end (it is closer to a stretch than a glide). Tagged for wrist soreness and inner elbow, with no clear basis. Caution has no stop rule. | Remove from the Opener routine. Add: stop if tingling, numbness, or weakness appears or lasts. Trim tags to none until a PT reviews. | S11 (evidence for glides is very low quality) | needs PT review |
| `triceps-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `tendon-glides` | The five positions are the standard sequence. 'The classic carpal tunnel exercise. Keeps tendons sliding freely' overstates it. | Soften the tip to 'a gentle finger movement sequence often given for stiff hands'. | S11 | likely fine |
| `median-nerve-glide` | Internally inconsistent. It says to tilt the head AWAY 'for a touch more glide', but tilting away adds tension. The app's own Neck and Arm Nerve Slider does the opposite (tilts toward), which is the gentler logic. | Remove the head tilt, or match the slider. Add a firm stop rule. Keep out of the hand arthritis and wrist routines. | S11 | needs PT review |
| `radial-nerve-glide` | As written this is a tension position (wrist bent, arm back, head tilted away). Tagged for outer elbow and wrist soreness without support. | Add a firm stop rule. Trim tags until a PT reviews. | unverified | needs PT review |
| `wrist-flexor-stretch` | Fine as a forearm stretch. Tagged for hand and wrist strain (carpal tunnel): sustained end-range wrist extension is commonly limited there. | Remove the carpal-tunnel tag unless a PT keeps it. | S1 (hold time), tag unverified | needs PT review |
| `wrist-extensor-stretch` | Fine. Carpal-tunnel tag has no clear basis. | Remove the carpal-tunnel tag. | S1 (hold time) | likely fine |
| `prayer-stretch` | Holds both wrists at end-range extension. Same concern as the flexor stretch for the carpal tunnel tag. | Remove the carpal-tunnel tag unless a PT keeps it. | tag unverified | needs PT review |
| `wrist-circles` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `grip-squeeze` | Fine. 'Grip strength predicts independence' is a research association stated as a promise. Tagged for outer elbow soreness, where repeated gripping can aggravate. | Soften the tip. Remove the tennis-elbow tag unless a PT keeps it. | unverified | likely fine |
| `finger-band-extension` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `wrist-curls` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `thoracic-extension-foam-roller` | Good: already tells people with osteoporosis to skip unless cleared. Tagged for neck and arm tension without basis. | Remove the tos tag. Make the chair or towel version the default in routines. | S2 | likely fine |
| `cat-cow` | Fine and gentle. Needs hands and knees. | Add: use the seated version if your wrists or knees object. | none checked | likely fine |
| `open-book` | Fine. Unloaded, comfortable-range rotation. Tagged for neck and arm tension without basis. | Remove the tos tag. | none checked | likely fine |
| `thread-the-needle` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `wall-angels` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `prone-cobra` | Fine for an unsupervised app: small lift, low load. Extension is the direction osteoporosis guidance treats as safe. | Add: stop if your low back pinches. | S2 | likely fine |
| `quadruped-thoracic-rotation` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `childs-pose-lat-reach` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `seated-thoracic-extension-chair` | Fine. Leaning back over a chair can tip a light chair. | Add: use a heavy chair or put it against a wall. | none checked | likely fine |
| `breathing-diaphragm` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `push-up-plus` | The default is a full push-up position, which is not Moderate for this audience. The wall version is only a variation. | Make the wall version the default, or raise to Advanced. | none checked | likely fine |
| `prone-swimmers` | Needs full overhead reach while lying face down. Tagged for stiff, limited shoulders (frozen shoulder), who cannot do it. | Remove the frozen-shoulder tag. | none checked | likely fine |
| `shoulder-extension-scap-tilt` | Name is jargon. The tip says it moves the shoulder blade 'the opposite way' to a tight chest, but reaching the arms back tends to tip the blade forward, the same way. The reasoning looks backwards. | Rename to 'Arms Behind Chest Opener'. Remove the mechanism tip. | unverified | needs PT review |

### Low back, hip, knee, ankle and foot (exercises-lower.js)

| exercise id | accuracy concern | caution or content fix | source | confidence |
|---|---|---|---|---|
| `pelvic-tilt` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `knee-to-chest` | Movement is right. It is a bend-forward stretch tagged for back and leg discomfort, where bending can aggravate. No note for osteoporosis (spinal flexion) or hip replacement (bending past 90 degrees). | Remove the sciatica tag. Add: skip after a hip replacement unless cleared, and keep it gentle with osteoporosis. | S2, S10, S17 | needs PT review |
| `lower-trunk-rotation` | Fine and gentle. | Add: after a hip replacement or back surgery, ask first. | S17 | likely fine |
| `prone-press-up` | Name carries a method (McKenzie). The tip explains 'centralization', which is assessment reasoning for a trained clinician. The guideline gives this approach only a weak grade, delivered by a therapist. Older adults whose leg pain comes on with standing or walking (often narrowing of the spine) commonly feel worse with back bending. | Rename to 'Press-Up'. Remove the centralization tip. Remove the sciatica and disc tags. Add: skip if standing or walking brings on leg pain. Take out of the Back and Leg routine. | S10 | needs PT review |
| `sciatic-nerve-floss` | The seated see-saw is described correctly as a slider. The caution is not a stop rule. | Add: stop if leg pain, numbness, or weakness increases. Point to the emergency signs. | S12, S3 | needs PT review |
| `childs-pose` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `bird-dog` | Fine. 5 s holds are within the 5 to 10 s range usually taught. Tagged for balance, though it is done on hands and knees. | Remove the balance-falls tag. | S9 | likely fine |
| `curl-up` | Described correctly (tiny lift, hands under back). Osteoporosis guidance names curl-ups as a movement to avoid, and the app's Seated Roll-Up recommends this as the 'safer substitute' for osteoporosis. | Add: skip if you have osteoporosis or have had a spinal fracture. Fix the Roll-Up substitute. | S9, S2 | needs PT review |
| `standing-back-extension` | Same direction issue as the Press-Up. Also leaning backward while standing is a balance risk. | Add: stand with a counter behind you. Skip if standing or walking brings on leg pain. Remove the disc tag. | S10 | needs PT review |
| `glute-bridge` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `clamshell` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `side-lying-hip-abduction` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `hip-flexor-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `figure-4-stretch` | Fine. The tip says releasing this muscle 'often eases buttock and leg symptoms', an outcome claim. Name uses 'Piriformis'. | Soften the tip. Add a hip replacement note. | S1, S17 | likely fine |
| `hamstring-stretch-towel` | Fine as a stretch. Raising a straight leg also pulls on the nerve, so the sciatica tag is doubtful. | Remove the sciatica tag. | S1 | likely fine |
| `standing-hip-abduction` | Fine. | Say counter rather than chair back where possible. | S18 | likely fine |
| `monster-walk` | Fine. A band around the legs while stepping is a trip risk, and it is tagged for balance. | Add: do it beside a counter. Remove the balance-falls tag. | none checked | likely fine |
| `ninety-ninety-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `butterfly-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `quad-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `hip-hinge` | Good. Hinging at the hips with a straight back is the bending method osteoporosis guidance recommends. Balance tag is weak. | Remove the balance-falls tag. | S2 | verified |
| `quad-set` | Fine. | Add to every exercise tagged for surgery: only when your surgeon or therapist says you can. | none checked | likely fine |
| `straight-leg-raise` | Fine for knees. Tagged for after surgery in general, but some hip surgery protocols restrict lifting a straight leg. | Add the surgery line. Limit the tag wording to knee surgery, or remove. | S17 (indirect) | needs PT review |
| `short-arc-quad` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `terminal-knee-extension` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `heel-slide` | Fine. | Add the surgery line. After a hip replacement, respect the bend limit you were given. | S17 | likely fine |
| `mini-squat` | Fine. 'Keep knees behind the tips of your toes' is an old cue that is not needed for safety at this depth. | Optional: drop the cue. Not a safety issue. | none checked | likely fine |
| `sit-to-stand` | Good choice, used in recognized older-adult programs. | Add: put the chair against a wall so it cannot slide. | S8, S18 | verified |
| `step-up` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `standing-hamstring-curl` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `wall-sit` | Rated Advanced, which is cautious. The tip says isometric holds 'can actually reduce tendon and knee pain'. That evidence is mixed. Long holds raise blood pressure. | Soften the tip. Add: keep breathing, and ask first if you have high blood pressure. | unverified claim | likely fine |
| `seated-knee-extension` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `itb-tfl-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `ankle-pumps` | Fine. The caution says 'None for most people', which is not a caution. | Replace with: after surgery or long bed rest, a painful, swollen, warm calf needs urgent medical care. | unverified wording | likely fine |
| `band-ankle-4way` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `calf-raise` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `eccentric-heel-drop` | Not the protocol it names. The published program is 3 x 15, twice a day, straight and bent knee, for 12 weeks. The app gives 3 x 12 once. 'The slow lowering rebuilds the tendon' is a mechanism claim. Dropping the heel below a step is commonly avoided when soreness is right at the heel bone. Standing on a step edge on one leg is a fall risk. The 'ache that settles by next day' rule matches a published pain-monitoring approach, but that approach caps pain at 5 out of 10. | Rename to 'Slow Heel Lowering'. Call it 'based on' the heel drop program, not the program. Make the floor version the default. Give the ache rule a number. Hold a rail with both hands. | S6, S7 | needs PT review |
| `calf-stretch-wall` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `plantar-fascia-stretch` | Consistent with the studied stretch (pull toes back before first steps). The trial used 10 x 10 s, three times a day. The app's 3 x 30 s is a similar total. | Add to the frozen bottle variation: not if you have poor feeling or circulation in your feet (for example with diabetes). | S14 | verified |
| `towel-scrunch` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `knee-to-wall` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `toe-raises` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `single-leg-balance-foam` | Fine and honestly rated Advanced. | Say counter, not chair: a chair can move. | S18 | likely fine |
| `pigeon-stretch` | Movement is right. Rated Moderate, but getting in and out is hard for older hips and knees. Tagged for back and leg discomfort without basis. | Raise to Advanced. Remove the sciatica and low-back-pain tags. Add a hip or knee replacement note. | S17 | likely fine |
| `couch-stretch` | Tagged for knee aches while its own caution says to skip it with kneecap pain. Rated Moderate but it is an advanced position. | Remove the knee-pain tag. Raise to Advanced. | none checked | likely fine |
| `frog-stretch` | Fine. Low-back-pain tag has no clear basis. | Remove the low-back-pain tag. | none checked | likely fine |

### Core and balance (exercises-core.js)

| exercise id | accuracy concern | caution or content fix | source | confidence |
|---|---|---|---|---|
| `dead-bug` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `abdominal-bracing` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `side-plank-knees` | Fine. 15 s is conservative next to the 10 s repeated holds usually taught. | none | S9 | likely fine |
| `plank-incline` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `pallof-press` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `glute-bridge-march` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `suitcase-carry` | Fine as a strength move. Tagged for steadier balance: carrying a weight while walking is not a starting point for someone at risk of falling. | Remove the balance-falls tag. Drop 'few exercises transfer to life better'. | none checked | likely fine |
| `single-leg-stance` | Good. Matches national aging guidance, including the hold-on-to-something rule. | Prefer 'kitchen counter' over 'chair'. | S18 | verified |
| `tandem-stance` | Good. A recognized balance exercise. | Change 'keep a hand hovering' to 'rest your fingers on the counter until you are steady'. | S18, S8 | verified |
| `heel-toe-walking` | Good. A recognized balance exercise. | none | S18 | verified |
| `weight-shifts` | Fine. The only variation (Clock Reaches) is much harder, not easier. | Label the variation as harder. Add the surgery line. | none checked | likely fine |
| `marching-in-place` | Described correctly, with support built in. | Prefer 'counter' over 'chair' as the support. | S18 | likely fine |
| `side-stepping` | Described correctly, with support built in. | Prefer 'counter' over 'chair' as the support. | S18 | likely fine |
| `step-taps` | Described correctly, with support built in. | Prefer 'counter' over 'chair' as the support. | S18 | likely fine |
| `walking-program` | Fine. Unlike the other cardio entries it has no stop rule. | Add: stop for chest pain or pressure, unusual breathlessness, or dizziness. | S4 | likely fine |
| `worlds-greatest-stretch` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `tai-chi-weight-transfer` | Described correctly, with support built in. | Prefer 'counter' over 'chair' as the support. | S18 | likely fine |

### Extra cardio, balance, stretches, lifts, yoga (exercises-extra.js)

| exercise id | accuracy concern | caution or content fix | source | confidence |
|---|---|---|---|---|
| `brisk-outdoor-walk` | Fine. The stop rule matches heart warning sign guidance. | none | S4 | verified |
| `swimming` | Fine. 'The gentlest cardio there is' is a superlative. | Soften the tip. | S4 | likely fine |
| `chair-aerobics` | Described correctly. General fitness. | none | S4 | likely fine |
| `arm-bike` | Described correctly. General fitness. | none | S4 | likely fine |
| `jumping-jacks` | Fine with the impact caution. | Add: skip jumping if you have osteoporosis with a past fracture, or a joint replacement, unless cleared. | S4 | likely fine |
| `high-knees` | Described correctly. General fitness. | none | S4 | likely fine |
| `mountain-climbers-cardio` | Hard cardio in a plank. Caution only mentions wrists. | Add the cardio stop line. Raise to Advanced. | S4 | likely fine |
| `burpees` | Advanced, fair. The caution has no stop rule, and the fast down-and-up can cause dizziness. | Add the cardio stop line and: skip if you get dizzy when standing up quickly. | S4 | likely fine |
| `shadow-boxing` | Described correctly. General fitness. | none | S4 | likely fine |
| `air-bike` | Described correctly. General fitness. | none | S4 | likely fine |
| `ski-erg` | Described correctly. General fitness. | none | S4 | likely fine |
| `sled-push` | Belongs to a gym with staff. 'Very knee-friendly' is a claim. | Soften the tip. Keep the existing caution. | none checked | likely fine |
| `dancing` | Described correctly. General fitness. | none | S4 | likely fine |
| `clock-reach` | Fine. Single-leg reaching is hard for people with poor balance. | Keep Moderate, but say 'fingers on a counter' in the steps, not only in tips. | S18 | likely fine |
| `backward-walking` | Rated Gentle. Walking backward is a real fall risk, and the caution only mentions clutter. The counter is optional in the steps. | Raise to Moderate. Require a hand on a counter or wall. | S18 | likely fine |
| `carioca` | Wrong caution: it has the jumping caution ('march in place instead') pasted on a cross-step balance walk. Crossing the feet is a trip risk. | Replace with the balance caution. Require a counter. Raise to Advanced. | S18 | likely fine |
| `eyes-closed-stand` | Feet together, eyes closed, fingertips lifting off. No mention of having someone nearby, unlike the same idea under Single Leg Stand. | Add: only with someone nearby, in a corner or at a counter. Raise to Advanced. | S18 | likely fine |
| `single-leg-ball-toss` | Described correctly, with support built in. | Prefer 'counter' over 'chair' as the support. | S18 | likely fine |
| `femoral-nerve-glide` | An uncommon self-exercise, rated Gentle while every other nerve glide is Moderate. No tags, not in any routine. | Remove from the library, or raise to Moderate pending a PT. | unverified | needs PT review |
| `sleeper-stretch` | Known to pinch the front of the shoulder in some people. Rated Gentle. | Raise to Moderate. Point to the Cross-Body Stretch as the first choice. | unverified | needs PT review |
| `soleus-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `lat-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `chair-hamstring-stretch` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `chair-figure4` | Fine. | Add a hip replacement note. | S17 | likely fine |
| `side-lunge-adductor` | Position is described correctly. Hold time is inside the usual 10 to 60 s range. | none | S1 (hold time) | likely fine |
| `lateral-step-down` | Single-leg lowering off a step. Moderate is generous for this audience. | Raise to Advanced. Require a rail. | none checked | likely fine |
| `copenhagen-plank` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `fire-hydrant` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `donkey-kick` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `single-leg-glute-bridge` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `single-leg-rdl-bw` | Fine with support. | Keep, but move 'fingertips on a counter' from tips into the steps. | none checked | likely fine |
| `sidelying-external-rotation` | Wrong caution: it warns about 'back, hip, or knee' on a shoulder exercise. The tag list has rotator-cuff twice. | Use the shoulder wording. Remove the duplicate tag. | none checked | likely fine |
| `nordic-curl` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `ball-squeeze` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `psoas-march` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `leg-swings` | Swinging on one leg, rated Gentle, and first in the Leg Warmup. | Raise to Moderate. Add a hip replacement note. | S17 | likely fine |
| `arm-circles` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `deep-squat-hold` | A full deep squat, in a warmup described as gentle. Not suitable after a hip or knee replacement. | Take out of the Leg Warmup. Add the joint replacement note. | S17 | likely fine |
| `shoulder-cars` | Fine for healthy shoulders. Tagged for stiff, limited shoulders, where full circles are not possible. | Remove the frozen-shoulder tag unless a PT keeps it. | unverified | likely fine |
| `hip-cars` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `standing-torso-twists` | Fine. Already has an osteoporosis note, but it is a loose, repeated swing, which is the pattern the guidance flags. | Change 'check first' to 'skip this one' for osteoporosis with a past spinal fracture. | S2 | likely fine |
| `foam-roll-quads` | Fine. The blood thinner note is sensible, but the expert consensus I found lists blood clots, fractures, and open wounds, not blood thinners. | Add: never roll a swollen, painful calf or thigh. | S15 | likely fine |
| `foam-roll-itband` | Missing the shared rolling caution the other three have. | Add the shared rolling caution. | S15 | likely fine |
| `foam-roll-upper-back` | Body weight over a roller on the spine and ribs. The similar Upper Back Extension warns about osteoporosis, this one does not. | Add: skip if you have osteoporosis unless cleared. | S2, S15 | likely fine |
| `ball-glute-release` | Tagged for back and leg discomfort. Pressing a ball into the buttock can irritate the nerve there. | Add: stop if it sends pain or tingling down the leg. Remove the sciatica tag unless a PT keeps it. | unverified | likely fine |
| `foot-ball-roll` | Fine. | Add to the frozen bottle tip: not if you have poor feeling or circulation in your feet. | unverified | likely fine |
| `box-breathing` | Includes two breath holds per round. | Add: skip the holds if you have a heart or lung condition, or are pregnant, and just breathe slowly. | unverified | likely fine |
| `breathing-478` | A 7 second hold. The caution is softer than Box Breathing's. 'Tells your body to relax' is a claim. | Use the same caution as Box Breathing. Soften the tip. | unverified | likely fine |
| `standing-overhead-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | none | none checked | likely fine |
| `dumbbell-fly` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `pec-deck` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | none | none checked | likely fine |
| `front-squat` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `sumo-deadlift` | Standard lift. Tip says 'many people with cranky backs prefer it', which reads as a suggestion for sore backs. | Remove the tip. | none checked | likely fine |
| `close-grip-bench` | Standard lift. No spotter or safety bar note, unlike the regular bench press. | Add the spotter line. | none checked | likely fine |
| `preacher-curl` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `cable-lateral-raise` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | none | none checked | likely fine |
| `machine-shoulder-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | none | none checked | likely fine |
| `seated-calf-raise` | Standard. Tagged for heel cord soreness and uses a full heel drop. | Remove the achilles tag unless a PT keeps it. | unverified | likely fine |
| `hip-abduction-machine` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | none | none checked | likely fine |
| `hip-adduction-machine` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | none | none checked | likely fine |
| `assisted-pullup` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | none | none checked | likely fine |
| `farmers-carry` | Contradicts itself: rated Gentle, steps say 'pick up a heavy dumbbell', caution says 'very light weight'. | Say 'a weight you can carry without leaning'. Raise to Moderate. | none checked | likely fine |
| `good-morning` | A loaded forward bend with a bar on the back. Advanced is right. | Add the shared lifting stop line and: not with osteoporosis. | S2 | likely fine |
| `landmine-press` | Standard lift. Tagged for sore-when-reaching shoulders, which makes a barbell lift look like rehab. | Remove the rotator-cuff tag. Soften 'kinder to cranky shoulders'. | none checked | likely fine |
| `yoga-mountain` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-triangle` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-chair-pose` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-low-lunge` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-high-lunge` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-bridge` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-cobra` | Fine. The osteoporosis note is cautious: guidance treats gentle back extension as the safer direction. The real group to warn is people whose legs hurt with standing or walking. | Keep the note, add that group. | S2 | likely fine |
| `yoga-legs-up-wall` | Caution only covers getting out. A study found eye pressure rises in this pose. The tip recommends it for 'swollen legs', and new swelling can be a medical sign. | Add: skip if you have glaucoma, and ask first with heart trouble or uncontrolled blood pressure. Change the tip: new swelling in one leg needs a doctor. | S16 | likely fine |
| `yoga-eagle` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-dancer` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-half-moon` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-camel` | Deep kneeling backbend with the head back. Moderate is generous. | Raise to Advanced. Add: skip with neck problems or if backbends make you dizzy. | none checked | likely fine |
| `yoga-fish` | Rests weight toward the top of the head with the neck arched. Risky for older necks. | Make the rolled-blanket version the main version, or remove. Raise to Advanced. | unverified | needs PT review |
| `yoga-locust` | Fine. | Same wording change as Cobra. | S2 | likely fine |
| `yoga-seated-twist` | Uses the arm as a lever to twist further. Has an osteoporosis note that says 'check first'. Also crosses one leg over the other. | Change to 'skip the arm lever' for osteoporosis. Add a hip replacement note. | S2, S17 | likely fine |
| `yoga-garland` | Full deep squat. | Add the joint replacement note. | S17 | likely fine |
| `yoga-wide-fold` | Head-down fold rated Gentle. Eye pressure rises in forward folds. No osteoporosis note, though forward bending is the movement the guidance is most careful about. | Raise to Moderate. Add glaucoma and osteoporosis notes (hinge at the hips, back straight). | S16, S2 | likely fine |
| `yoga-pyramid` | Fine. | Add the osteoporosis line (hinge at the hips, back straight). | S2 | likely fine |
| `yoga-side-plank` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |

### Gym lifts and cardio machines (exercises-gym.js)

| exercise id | accuracy concern | caution or content fix | source | confidence |
|---|---|---|---|---|
| `barbell-bench-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `dumbbell-bench-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `incline-dumbbell-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `machine-chest-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `cable-fly` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `push-up` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `chest-dip` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `seated-dumbbell-shoulder-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `lateral-raise` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `dumbbell-front-raise` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `rear-delt-fly` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `tricep-pushdown` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `overhead-tricep-extension` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `skull-crusher` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `deadlift` | Standard technique. Tip says 'take a big breath and tighten your belly before every rep', which teaches breath holding under load. Part 1 told other lifts 'do not hold your breath'. Breath holding spikes blood pressure. | Change to 'breathe out as you lift'. Add the shared lifting stop line. | unverified in a primary source (S19 did not cover it) | likely fine |
| `romanian-deadlift` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `lat-pulldown` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `pull-up` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `barbell-row` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `seated-cable-row` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `single-arm-dumbbell-row` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `back-extension` | Hanging forward to near vertical on a bench, tagged for low back aches. Also a head-down position. | Remove the low-back-pain tag. Add: not with osteoporosis or glaucoma. | S2, S16 | needs PT review |
| `dumbbell-shrug` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `kelso-shrug` | Standard. Tagged for neck and arm tension (thoracic outlet), which makes a gym lift look like treatment. | Remove the tos tag. | none checked | likely fine |
| `barbell-curl` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `dumbbell-curl` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `hammer-curl` | Standard. Tagged for outer elbow soreness with a tip about 'achy elbows'. Loaded gripping can aggravate that area. | Remove the tennis-elbow tag and the tip. | unverified | likely fine |
| `barbell-back-squat` | Same breath-holding tip as the deadlift. | Same change. | unverified in a primary source | likely fine |
| `goblet-squat` | A weighted full squat rated Gentle and tagged for knee aches. | Raise to Moderate. Remove the knee-pain tag unless a PT keeps it. | none checked | likely fine |
| `leg-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `walking-lunge` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `bulgarian-split-squat` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `hip-thrust` | Standard. Tagged for hip aches: a loaded barbell across the pelvis is not a hip ache starting point. | Remove the hip-pain tag. | none checked | likely fine |
| `leg-extension` | Standard. Tagged for knee aches and stiff knees. Whether this machine suits kneecap pain is debated. | Keep the knee-oa tag only if a PT agrees. Remove the knee-pain tag. | unverified | needs PT review |
| `lying-leg-curl` | Standard. A variation says 'research suggests it grows hamstrings slightly better'. I did not verify that. | Remove the claim. | unverified claim | likely fine |
| `standing-calf-raise-machine` | Standard. Tagged for heel cord soreness and uses a full heel drop under load. | Remove the achilles tag unless a PT keeps it. | unverified | likely fine |
| `kettlebell-swing` | A fast, loaded hip snap. Moderate is generous for this audience. | Raise to Advanced. Add the shared lifting stop line. | none checked | likely fine |
| `kettlebell-deadlift` | Standard. Tagged for low back aches. | Remove the low-back-pain tag unless a PT keeps it. | unverified | needs PT review |
| `plank` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `hanging-leg-raise` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `cable-crunch` | Weighted spinal flexion. | Add: not with osteoporosis or a past spinal fracture. | S2 | likely fine |
| `russian-twist` | Weighted flexion plus twisting. Caution mentions the spine but not osteoporosis. | Add: not with osteoporosis or a past spinal fracture. | S2 | likely fine |
| `ab-wheel-rollout` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `t-bar-row` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `chest-supported-db-row` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `scapular-pulldown` | Fine. Tagged for neck and arm tension without basis. | Remove the tos tag. | none checked | likely fine |
| `hack-squat` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `machine-hip-thrust` | Standard. Same tag issue. | Remove the hip-pain tag. | none checked | likely fine |
| `seated-leg-curl` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `smith-squat` | Standard. Tip says you can 'push the legs hard safely'. | Remove 'safely'. | none checked | likely fine |
| `smith-incline-press` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `incline-dumbbell-curl` | Standard gym technique and a common sets and reps scheme. General fitness, not rehab. | Add the shared lifting stop line (breathe out as you lift, stop for chest pain, dizziness, or sharp pain) that part 1 gave the other lifts. | none checked | likely fine |
| `decline-sit-up` | Head-down, loaded spinal flexion. | Add: not with osteoporosis or glaucoma. | S2, S16 | likely fine |
| `bicycle-crunch` | Flexion plus twisting with hands behind the head, rated Gentle. | Raise to Moderate. Add the osteoporosis line. | S2 | likely fine |
| `incline-treadmill-walk` | Rated Gentle with a 5 to 12 percent incline for 15 minutes, tagged for stiff knees, and used as a 'cool-down'. That is a workout. Tells people not to hold the rails, which is wrong for anyone unsteady. 'Running-level heart work' and 'torches calories' are claims. No cardio stop rule. | Raise to Moderate. Start at 1 to 3 percent. Say a light hand on the rail is fine. Remove the claims. Add the cardio stop line. | S4 | likely fine |
| `treadmill-run` | Fine. No cardio stop rule. The '10 percent per week' rule is folk guidance. | Add the cardio stop line. Say 'build up gradually' without the number. | S4 | likely fine |
| `stationary-bike` | Fine. 80 to 100 rpm is fast for an older beginner. 'Number one cause of bike knee pain' and 'easier on the knees than walking' are claims. No cardio stop rule. | Say 'a smooth, comfortable rhythm'. Soften both tips. Add the cardio stop line. | S4 | likely fine |
| `rowing-machine` | Fine. Repeated forward bending under effort. No cardio stop rule. | Add the cardio stop line and an osteoporosis note. | S4, S2 | likely fine |
| `elliptical` | Fine. Tagged for getting moving after surgery. No cardio stop rule. | Remove the post-surgery tag. Add the cardio stop line. | S4 | likely fine |
| `stair-climber` | Tells people to use fingertips only, suggests skipping steps, and has a 'sideways steps' variation on moving stairs. All three are fall risks. | Remove the sideways variation and the skip-a-step tip. Allow a proper rail hold. Add the cardio stop line. | S4 | likely fine |
| `jump-rope-cardio` | Described correctly. General fitness. | Add the cardio stop line. | S4 | likely fine |
| `sprint-intervals` | Honestly rated Advanced, with a heart and blood pressure line. 'Half the session time' is a claim. It is inside the Cardio day that onboarding hands out as a gentle starter. | Soften the tip. Take it out of the starter routine. | S4 | likely fine |

### Yoga flow poses (exercises-yoga.js)

| exercise id | accuracy concern | caution or content fix | source | confidence |
|---|---|---|---|---|
| `yoga-wrist-rolls` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-shoulder-rolls` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-hip-circles` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-ankle-rolls` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-neck-rolls` | Good: front half-circles only, and it says why. | none | none checked | likely fine |
| `yoga-cat-cow` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-plank` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-chaturanga` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-upward-dog` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-downward-dog` | Caution only covers wrists and shoulders. The glaucoma study found the largest eye pressure rise in this pose. | Add: skip if you have glaucoma, and come up slowly. | S16 | likely fine |
| `yoga-childs-pose` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-sphinx` | Fine. | Same wording change as Cobra. | S2 | likely fine |
| `yoga-boat` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-seated-roll-up` | A loaded roll through spinal flexion. The caution says skip with osteoporosis, uses the phrase 'disc-related back problem', and recommends the Curl-Up as a safer substitute, which the osteoporosis guidance also names. It sits in the Beginner Yoga Flow by default. | Remove from the Beginner Yoga Flow. Reword the caution without diagnosis language and without the Curl-Up substitute. | S2 | needs PT review |
| `yoga-pike-bent-knee-side-stretch` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-supine-final-stretch` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-supine-twist` | Fine. Has the osteoporosis note. | Add a hip replacement note. | S2, S17 | likely fine |
| `yoga-happy-baby` | Deep hip bend. | Add a hip replacement note. | S17 | likely fine |
| `yoga-butterfly` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-seated-forward-fold` | A sustained forward bend with no osteoporosis note. Part 1 put that note on twists and backbends, but forward bending is the movement the guidance flags most. | Add: with osteoporosis or a past spinal fracture, skip this or keep your back straight and tip from the hips. | S2 | likely fine |
| `yoga-corpse` | Fine. | Add: later in pregnancy, lie on your side or prop yourself up. | S5 | likely fine |
| `yoga-tree` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-warrior-1` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-warrior-2` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-warrior-3` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-reverse-warrior` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-star` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-half-lift` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-standing-backbend` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-side-stretch-elbow-knee` | Pose is described correctly, with an easier option in the tips. Level looks honest. | none | none checked | likely fine |
| `yoga-standing-forward-fold` | 'Let your head and arms hang heavy' is a rounded, head-down fold. No osteoporosis or glaucoma note. | Add both notes. Keep 'rise slowly'. | S2, S16 | likely fine |
| `yoga-anjali-mudra` | Wrong caution: it talks about lying flat, but the pose is seated or standing. | Replace with a plain 'sit if standing is tiring'. | none checked | likely fine |
| `yoga-closing-self-hug` | Wrong caution: it talks about lying flat, but the pose is seated. | Replace with 'reach only as high as your shoulders allow'. | none checked | likely fine |

### Qi Gong and gap fillers (exercises-qigong.js)

| exercise id | accuracy concern | caution or content fix | source | confidence |
|---|---|---|---|---|
| `qg-bounce-shake` | Fine and small. | Add: keep it to a gentle shake, no heel drops, if you have had a spinal fracture or a joint replacement. | unverified | likely fine |
| `qg-arm-swings` | Same loose twisting as Standing Torso Twists, tagged for low back aches, but without that exercise's osteoporosis note. | Add the same osteoporosis note. | S2 | likely fine |
| `qg-rowing-boat` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `qg-cloud-hands` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `qg-belly-tapping` | Fine. The only place the app mentions pregnancy. Tagged for low back aches with no basis. | Remove the low-back-pain tag. | none checked | likely fine |
| `qg-self-massage` | Fine. Tags for neck stiffness and headaches are generous. | Optional: remove the headache tag. | none checked | likely fine |
| `prone-on-elbows` | Two minutes of sustained back bending, rated Gentle. Tip says 'many people with disc-related pain find it eases leg symptoms': diagnosis language plus an outcome claim. Same concern as the Press-Up for people whose legs hurt with standing or walking. | Remove the tip. Remove the sciatica and disc tags. Add: skip if standing or walking brings on leg pain. Start at 30 seconds. | S10 | needs PT review |
| `isometric-wrist-extension` | Name carries a diagnosis (Tennis Elbow). 'A still hold often calms a sore tendon' is a claim with mixed evidence. 5 x 30 s is a lot of holding for a first try. | Rename. Soften the tip. Start at 3 holds. | unverified claim | needs PT review |
| `seated-marching` | Described correctly. Dose matches common practice. | none | none checked | likely fine |

### Later additions (exercises-added.js)

| exercise id | accuracy concern | caution or content fix | source | confidence |
|---|---|---|---|---|
| `supine-sciatic-glide` | Described correctly as a slider. The stop rule is reasonable. Tagged with the disc condition. | Remove the disc tag. Point to the emergency signs. | S12, S3 | needs PT review |
| `neck-arm-nerve-slider` | Described correctly as a slider (head and wrist move so the nerve is not stretched). Tagged for hand and wrist strain. | Keep. Remove the carpal-tunnel tag unless a PT keeps it. | S11 | needs PT review |
| `body-scan` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `progressive-relaxation` | Fine. The separate Mind screen version asks people to tip the head back while tensing. | On the Mind screen, change the neck step to a gentle shoulder press. Add: tense gently if you have high blood pressure. | unverified | likely fine |
| `supported-rest-90-90` | Fine. 'Many people feel relief within a few minutes' is an outcome claim. | Soften the tip. Add the pregnancy line (prop yourself up). | S5 | likely fine |
| `lying-head-lift` | Described correctly. Dose matches common practice. | none | none checked | likely fine |
| `prone-head-lift` | Described correctly. Dose matches common practice. | none | none checked | likely fine |

