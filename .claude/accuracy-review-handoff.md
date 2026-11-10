# For the accuracy review (handoff from review 1 to review 2)

Paste this into review 2 (`.claude/review-2-fable-accuracy-ethics-prompt.md`) at the `[paste]` line.

Review 1 changed wording and cautions only. It did NOT verify or change doses, levels, positions, or condition tags (`helps`). Everything below is unverified and needs a source check or a licensed PT.

## Clinical advice and protocols
- `knee-to-chest` and `prone-on-elbows`: cautions were reworded to be generic, but these exercises sit in a direction-preference (McKenzie-style) idea. Check whether they belong in an unsupervised app at all.
- "Disc-Related Back Pain" condition (now "Back discomfort with bending"): blurb says some people find gentle back-extension movements comfortable. Check that this is safe to say.
- Routines modeled on named protocols: Low Back Care (Big 3 +) and its dose, Foot & Heel Care (eccentric heel program, Alfredson-style), Steady & Strong (Otago-style balance), Elbow and Forearm Strength ("mild ache is okay" wording was removed; check the dose), Gentle Shoulder Mobility.
- Nerve glides and tendon glides (`median-nerve-glide`, exercises of the `nerve-glide` type, carpal and sciatica routines): are these safe without supervision, and are the stop rules ("stop if tingling gets worse") enough?
- Neck, Chest and Shoulder Opener routine (formerly the thoracic outlet routine) and `first-rib-mobilization`, `scalene-stretch`, `doorway-pec-stretch`: check the dose, the position, and the "stop if your arm tingles" caution.

## Cautions written by category (generic, need a real check)
Review 1 added a caution to every exercise that had none, using one template per category (cardio, impact, balance, stretch, floor strength, back extension, twist, mobility, foam roll, lifting, overhead lifting, standing yoga, folding and resting yoga, cat-cow, rest poses, plank, deep squat, self massage). Check each template against the real risks:
- Osteoporosis and fracture risk: twists, forward folds, back extensions (`yoga-cobra`, `yoga-locust`, `yoga-sphinx`, `standing-torso-twists`, `yoga-seated-twist`, `yoga-supine-twist`).
- Blood pressure, heart conditions, and breath holding: lifts, `box-breathing`, `body-scan`, deadlifts, overhead presses.
- Dizziness and fall risk: balance and standing yoga, `carioca`, `clock-reach`, `yoga-eagle`, `yoga-half-moon`, `deep-squat-hold`.
- Blood thinners and circulation: foam rolling and ball release.
- Pregnancy: not mentioned anywhere yet.
- Unsupervised heavy lifts: `sumo-deadlift`, `deadlift`, `barbell-back-squat`, `sled-push`. Are they appropriate in this app at all?

## Remaining claims worth checking (reworded, but still stated as fact)
- `stationary-bike`: "low-impact, often easier on the knees than walking or running".
- `single-leg-stance`, `tai-chi-weight-transfer`: balance practice claims (now softened).
- `eccentric-wrist-extension`: "slow, lowering-only work is a common way to build forearm strength".
- `suboccipital-release`, `scalene-stretch`, `breathing-diaphragm`: relaxation claims.
- Condition blurbs in `js/data/templates.js`: every "may help" or "commonly used" line, plus "Balance can be practiced at any age", "Daily gentle movement ... can help keep hands moving", and the cardio blurb.
- Routine descriptions in `js/data/templates.js`, including the new ones for the neck, shoulder, elbow, wrist, back and leg, knee, and ankle routines.

## Things I did not change on purpose
- Doses, levels, positions, and `helps` tags on all 312 exercises (68 exercises have no tags).
- The 0 to 10 pain logging and its guidance (`js/bodymap.js`, `js/session.js`, `js/progress.js`). Part 2 should check what the app says when pain is high or rising.
- Existing users keep their saved routine names (for example "Thoracic Outlet Relief"), because those are stored in their data.
- The custom exercise builder's "Often used for" picker still lists all 28 conditions at once.
- There is no disclaimer for existing users who already finished onboarding, only the Settings note.
