// MoveWell exercise database, Part 1: Neck, Shoulder, Elbow, Wrist & Hand, Upper Back
// Schema:
// id, name, region, type (stretch|strengthen|mobility|nerve-glide|balance),
// equipment [none|band|dumbbell|machine|chair|wall|towel|foam-roller|step|ball|doorway|table|stick],
// position, level (1 gentle, 2 moderate, 3 advanced), muscles, helps [condition ids],
// dose { sets, reps, hold (sec), timeSec, perSide }, howTo [], tips [], caution, variations [{name, note}]

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ NECK ============
{
  id: "chin-tuck", name: "Chin Tuck", region: "neck", type: "strengthen",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Deep neck flexors",
  helps: ["neck-pain", "upper-cross", "tos", "posture", "headache"],
  dose: { sets: 3, reps: 10, hold: 5 },
  howTo: [
    "Sit or stand tall, looking straight ahead.",
    "Gently draw your chin straight back, as if making a double chin.",
    "Keep your eyes level. Do not tilt your head up or down.",
    "Hold, then relax and repeat."
  ],
  tips: ["Imagine the back of your head sliding up a wall.", "The movement is small. You should feel a gentle stretch at the base of your skull."],
  caution: "Stop if you feel dizziness or pain shooting into your arms.",
  variations: [
    { name: "Lying Chin Tuck", note: "Lie on your back with a small towel under your head. Nod gently, pressing the back of your neck down." },
    { name: "Chin Tuck Against Wall", note: "Stand with your head against a wall and press the back of your head gently into it as you tuck." },
    { name: "Chin Tuck with Band", note: "Loop a light band behind your head and hold the ends in front. Tuck against the band's pull." }
  ]
},
{
  id: "upper-trap-stretch", name: "Upper Trapezius Stretch", region: "neck", type: "stretch",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Upper trapezius",
  helps: ["neck-pain", "upper-cross", "tos", "headache"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Sit tall. Reach your right hand toward the floor or hold the chair edge.",
    "Gently tilt your left ear toward your left shoulder.",
    "Rest your left hand lightly on your head for a gentle extra stretch.",
    "Hold, breathe slowly, then switch sides."
  ],
  tips: ["Keep both shoulders relaxed and down.", "The stretch should feel gentle, never sharp."],
  caution: "Never pull hard on your head. If you feel numbness or tingling down the arm, ease off.",
  variations: [
    { name: "Levator Scapulae Stretch", note: "Turn your nose toward your armpit before tilting. Stretches a different corner of the neck." }
  ]
},
{
  id: "levator-stretch", name: "Levator Scapulae Stretch", region: "neck", type: "stretch",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Levator scapulae",
  helps: ["neck-pain", "upper-cross", "headache"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Sit tall and turn your head about 45 degrees to the left.",
    "Look down toward your left armpit.",
    "Place your left hand gently on the back of your head and let its weight guide the stretch.",
    "Hold and breathe, then switch sides."
  ],
  tips: ["Reaching your other hand toward the floor deepens the stretch.", "Move slowly in and out of the stretch.", "PTs nickname this one the 'armpit sniffer': nose toward armpit is the whole cue."],
  caution: "Keep it gentle. Do not force the head down.",
  variations: [
    { name: "Armpit Sniffer", note: "The classic clinic cue. Turn your nose directly toward your armpit and nod down, letting your hand add gentle weight." }
  ]
},
{
  id: "scalene-stretch", name: "Scalene Stretch", region: "neck", type: "stretch",
  equipment: ["none"], position: "Sitting", level: 1,
  muscles: "Scalenes (side of neck)",
  helps: ["tos", "neck-pain", "upper-cross"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Sit tall. Hold the edge of your chair with your right hand to anchor the shoulder down.",
    "Tilt your left ear toward your left shoulder.",
    "Now gently look slightly upward toward the ceiling.",
    "You should feel a stretch along the front-side of the right side of your neck."
  ],
  tips: ["Very important for thoracic outlet syndrome. Tight scalenes can compress the nerves to your arm.", "Breathe with your belly, not your chest, while holding."],
  caution: "If you feel tingling in your hand, ease off the stretch. Tension, not pain.",
  variations: [
    { name: "With Towel Anchor", note: "Sit on the end of a towel draped over the shoulder to hold it down while you stretch." }
  ]
},
{
  id: "scm-stretch", name: "Front-of-Neck (SCM) Stretch", region: "neck", type: "stretch",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Sternocleidomastoid",
  helps: ["neck-pain", "posture", "headache", "upper-cross"],
  dose: { sets: 2, reps: 1, hold: 20, perSide: true },
  howTo: [
    "Sit tall and place your right hand on your right collarbone.",
    "Gently tilt your head back and to the left.",
    "Turn your chin slightly toward the right to feel the stretch along the front of the neck.",
    "Hold, then switch sides."
  ],
  tips: ["This muscle gets tight from looking down at phones and screens."],
  caution: "Tilt back gently. Stop if you feel dizzy.",
  variations: []
},
{
  id: "neck-rotation", name: "Neck Rotation", region: "neck", type: "mobility",
  equipment: ["none"], position: "Sitting", level: 1,
  muscles: "Neck rotators",
  helps: ["neck-pain", "general"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Sit tall with shoulders relaxed.",
    "Slowly turn your head to look over your right shoulder as far as comfortable.",
    "Return to center, then turn to the left.",
    "Move slowly and smoothly."
  ],
  tips: ["Great to do a few times a day if your neck feels stiff.", "Try to turn a tiny bit farther each week, never forcing."],
  caution: "Stay in a pain-free range.",
  variations: [
    { name: "Neck Side Bend", note: "Instead of turning, tip your ear toward each shoulder." },
    { name: "Chin-to-Chest Nod", note: "Slowly lower chin toward chest, then return to neutral. Avoid rolling the head in full circles." }
  ]
},
{
  id: "deep-neck-flexor-lift", name: "Head Nod (Deep Neck Flexor)", region: "neck", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 2,
  muscles: "Deep neck flexors",
  helps: ["neck-pain", "upper-cross", "posture", "headache"],
  dose: { sets: 3, reps: 8, hold: 10 },
  howTo: [
    "Lie on your back with knees bent, head resting down.",
    "Gently nod your chin, as if saying a small 'yes'.",
    "Keep the big muscles at the front of your neck soft. The work is deep and subtle.",
    "Hold the nod, then relax."
  ],
  tips: ["If the front of your neck bulges or shakes, you are working too hard. Make the nod smaller."],
  caution: "Do not lift the head off the floor for this version.",
  variations: [
    { name: "Head Lift Progression", note: "After nodding, lift the head one inch off the floor and hold briefly. Advanced." }
  ]
},
{
  id: "neck-isometrics", name: "Neck Isometrics (4 Directions)", region: "neck", type: "strengthen",
  equipment: ["none"], position: "Sitting", level: 1,
  muscles: "Neck stabilizers all around",
  helps: ["neck-pain", "general"],
  dose: { sets: 2, reps: 5, hold: 5 },
  howTo: [
    "Sit tall. Place your palm on your forehead.",
    "Press your head gently into your palm without moving. Hold.",
    "Repeat with your hand on the back of your head, then each side.",
    "Use about 25 percent of your strength."
  ],
  tips: ["Strengthens the neck without any movement, so it is very joint-friendly."],
  caution: "Keep the pressure gentle. No breath-holding.",
  variations: []
},
{
  id: "suboccipital-release", name: "Base-of-Skull Release", region: "neck", type: "mobility",
  equipment: ["ball", "towel"], position: "Lying on back", level: 1,
  muscles: "Suboccipitals (base of skull)",
  helps: ["headache", "neck-pain", "upper-cross"],
  dose: { sets: 1, reps: 1, timeSec: 120 },
  howTo: [
    "Place two tennis balls in a sock, or use a rolled towel.",
    "Lie on your back and rest the base of your skull on the balls or roll.",
    "Let your head sink and relax. Breathe slowly.",
    "You can add tiny 'yes' nods for a gentle massage."
  ],
  tips: ["Wonderful for tension headaches that start at the base of the skull."],
  caution: "Pressure should feel relieving, not painful.",
  variations: []
},
{
  id: "first-rib-mobilization", name: "First Rib Stretch (Towel)", region: "neck", type: "mobility",
  equipment: ["towel"], position: "Sitting", level: 2,
  muscles: "First rib area, scalenes",
  helps: ["tos", "neck-pain"],
  dose: { sets: 2, reps: 10, hold: 3, perSide: true },
  howTo: [
    "Drape a towel over the top of your right shoulder, close to your neck.",
    "Hold the front end with your left hand and the back end with your right, pulling down and across your body.",
    "Gently tilt your left ear toward your left shoulder while keeping downward pressure on the towel.",
    "Hold a few seconds, release, and repeat."
  ],
  tips: ["The towel gently holds the first rib down while the neck stretches away, opening the thoracic outlet."],
  caution: "Ease off if you feel arm tingling.",
  variations: []
},

// ============ SHOULDER ============
{
  id: "pendulum", name: "Pendulum Swing", region: "shoulder", type: "mobility",
  equipment: ["table", "chair"], position: "Standing, leaning forward", level: 1,
  muscles: "Shoulder joint (passive motion)",
  helps: ["rotator-cuff", "frozen-shoulder", "shoulder-pain"],
  dose: { sets: 2, reps: 1, timeSec: 60, perSide: true },
  howTo: [
    "Rest your good arm on a table or chair back and lean forward.",
    "Let your sore arm hang straight down, completely relaxed.",
    "Rock your body gently so the arm swings in small circles.",
    "Swing forward-and-back and side-to-side as well."
  ],
  tips: ["The arm should feel like a wet noodle. Your body creates the motion, not the shoulder muscles.", "A classic first step after shoulder injury or surgery."],
  caution: "Keep circles small at first. This should feel soothing.",
  variations: [
    { name: "With Light Weight", note: "Hold a can of soup or one-pound weight to add gentle traction." }
  ]
},
{
  id: "band-external-rotation", name: "Band External Rotation", region: "shoulder", type: "strengthen",
  equipment: ["band"], position: "Standing", level: 2,
  muscles: "Rotator cuff (infraspinatus, teres minor)",
  helps: ["rotator-cuff", "shoulder-pain", "upper-cross", "tos"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Anchor a band at elbow height, or hold it with both hands.",
    "Keep your elbow bent 90 degrees and tucked against your side.",
    "Rotate your forearm outward, away from your belly, keeping the elbow pinned.",
    "Slowly return. Slow on the way back matters most."
  ],
  tips: ["Place a small towel between your elbow and ribs. If it falls, your elbow drifted.", "One of the most prescribed shoulder exercises in physical therapy."],
  caution: "Use a light band first. This muscle group is small.",
  variations: [
    { name: "Side-Lying with Dumbbell", note: "Lie on your side, elbow on your top hip, and rotate a light dumbbell up toward the ceiling." },
    { name: "Isometric at Doorway", note: "Press the back of your wrist outward into a door frame and hold. No movement version." }
  ]
},
{
  id: "band-internal-rotation", name: "Band Internal Rotation", region: "shoulder", type: "strengthen",
  equipment: ["band"], position: "Standing", level: 2,
  muscles: "Rotator cuff (subscapularis)",
  helps: ["rotator-cuff", "shoulder-pain"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Anchor a band at elbow height beside you.",
    "Keep your elbow bent 90 degrees and tucked against your side.",
    "Pull your forearm inward across your belly.",
    "Slowly let it return."
  ],
  tips: ["Pairs with external rotation for balanced cuff strength."],
  caution: "Keep the shoulder relaxed and down, away from your ear.",
  variations: []
},
{
  id: "scaption-raise", name: "Scaption Raise", region: "shoulder", type: "strengthen",
  equipment: ["dumbbell", "none"], position: "Standing", level: 2,
  muscles: "Supraspinatus, deltoid, serratus",
  helps: ["rotator-cuff", "shoulder-pain", "general"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand tall holding light weights, thumbs pointing up.",
    "Raise your arms at a 30 to 45 degree angle in front of you, like a wide 'V'.",
    "Lift only to shoulder height.",
    "Lower slowly."
  ],
  tips: ["This diagonal path is the friendliest lifting angle for the rotator cuff.", "Start with no weight, then a water bottle, then light dumbbells."],
  caution: "Stop below any pinching point. Do not shrug as you lift.",
  variations: [
    { name: "Full Can", note: "Same movement with thumbs up (as described). Avoid the thumbs-down version." }
  ]
},
{
  id: "prone-ytw", name: "Prone Y-T-W", region: "shoulder", type: "strengthen",
  equipment: ["none", "table"], position: "Lying face down", level: 2,
  muscles: "Lower trapezius, mid trapezius, rear deltoid, rhomboids",
  helps: ["upper-cross", "tos", "posture", "rotator-cuff", "shoulder-pain"],
  dose: { sets: 2, reps: 8, hold: 3 },
  howTo: [
    "Lie face down on a bed or mat, forehead resting on a small towel.",
    "Y: reach arms overhead in a 'Y' shape, thumbs up. Lift arms an inch, hold, lower.",
    "T: arms straight out to the sides in a 'T'. Squeeze shoulder blades and lift, hold, lower.",
    "W: bend elbows to make a 'W'. Squeeze blades down and back, lift, hold, lower."
  ],
  tips: ["Think about your shoulder blades sliding down toward your back pockets.", "Small lifts done well beat big lifts done poorly."],
  caution: "Keep your neck relaxed. If your arms tingle in the Y, skip that letter for now.",
  variations: [
    { name: "Wall Y-T-W", note: "Standing against a wall version. Easier and great for beginners or anyone who cannot lie down." },
    { name: "Y-T-A", note: "Swap the W for an 'A': arms down along your sides, thumbs out, lifting toward the ceiling. Targets the lower traps hard." },
    { name: "Y-T-W-L", note: "Add an 'L': elbows bent 90 degrees, rotate forearms up while keeping elbows still." },
    { name: "With Light Dumbbells", note: "Add one-pound weights once bodyweight feels easy." }
  ]
},
{
  id: "band-pull-apart", name: "Band Pull-Apart", region: "shoulder", type: "strengthen",
  equipment: ["band"], position: "Standing", level: 1,
  muscles: "Rear deltoid, rhomboids, mid trapezius",
  helps: ["upper-cross", "posture", "tos", "shoulder-pain"],
  dose: { sets: 3, reps: 15 },
  howTo: [
    "Hold a band in front of you at shoulder height, hands shoulder-width apart.",
    "Keep arms straight and pull the band apart until it touches your chest.",
    "Squeeze your shoulder blades together at the end.",
    "Return slowly with control."
  ],
  tips: ["Keep shoulders down away from ears.", "Excellent desk-break exercise for rounded shoulders."],
  caution: "Choose a band light enough to reach full spread without straining.",
  variations: [
    { name: "Palms-Up Pull-Apart", note: "Underhand grip, biases the lower trapezius more." },
    { name: "Diagonal Pull-Apart", note: "One hand high, one low. Alternate diagonals." }
  ]
},
{
  id: "face-pull", name: "Band Face Pull", region: "shoulder", type: "strengthen",
  equipment: ["band"], position: "Standing", level: 2,
  muscles: "Rear deltoid, mid and lower trapezius, external rotators",
  helps: ["upper-cross", "posture", "tos", "rotator-cuff"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Anchor a band at face height (door anchor or railing).",
    "Hold the ends with both hands, arms extended.",
    "Pull toward your face, leading with your elbows wide and high.",
    "Finish with hands beside your ears, shoulder blades squeezed. Return slowly."
  ],
  tips: ["Think 'thumbs to ears' at the finish.", "Counteracts hours of sitting and reaching forward."],
  caution: "Keep the neck relaxed, do not poke the chin forward.",
  variations: []
},
{
  id: "band-row", name: "Band Row", region: "shoulder", type: "strengthen",
  equipment: ["band"], position: "Sitting or standing", level: 1,
  muscles: "Mid back, lats, rhomboids, biceps",
  helps: ["upper-cross", "posture", "tos", "general", "low-back-pain"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Sit tall with legs extended, loop the band around your feet.",
    "Hold an end in each hand, arms reaching forward.",
    "Pull your elbows back along your sides, squeezing shoulder blades together.",
    "Return slowly until arms are straight."
  ],
  tips: ["Rowing strength holds your shoulders back where they belong.", "Lead with the shoulder blades, not the hands."],
  caution: "Keep your back tall, do not lean back to cheat.",
  variations: [
    { name: "Standing Row (Door Anchor)", note: "Anchor the band in a door at belly height and row standing." },
    { name: "Single-Arm Row", note: "One arm at a time to spot side-to-side differences." },
    { name: "Machine / Cable Row", note: "Gym version with seated row machine." }
  ]
},
{
  id: "wall-slides", name: "Wall Slides", region: "shoulder", type: "mobility",
  equipment: ["wall"], position: "Standing at wall", level: 2,
  muscles: "Serratus anterior, lower trapezius, shoulder mobility",
  helps: ["upper-cross", "posture", "shoulder-pain", "frozen-shoulder"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Stand facing a wall, forearms on the wall, elbows shoulder-width.",
    "Slide your forearms slowly up the wall as far as comfortable.",
    "At the top, lift your hands one inch off the wall if you can.",
    "Slide back down with control."
  ],
  tips: ["Keep ribs down, do not arch the lower back as arms rise."],
  caution: "Stay below any painful pinch. Range improves with weeks of practice.",
  variations: [
    { name: "Unilateral Wall Slide", note: "One arm at a time. Perfect when one shoulder is further along than the other, and it lets you focus on clean shoulder-blade motion." },
    { name: "Wall Angels", note: "Back against the wall instead, sliding arms like a snow angel. Harder than it looks." },
    { name: "With Band Around Wrists", note: "Push gently outward into a mini-band while sliding to wake up the cuff." }
  ]
},
{
  id: "doorway-pec-stretch", name: "Doorway Chest Stretch", region: "shoulder", type: "stretch",
  equipment: ["doorway"], position: "Standing in doorway", level: 1,
  muscles: "Pectoralis major and minor",
  helps: ["upper-cross", "tos", "posture", "shoulder-pain"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Stand in a doorway. Place your forearm on the frame, elbow at shoulder height.",
    "Step gently forward with the same-side foot.",
    "Feel a stretch across your chest and front shoulder.",
    "Hold and breathe, then switch sides."
  ],
  tips: ["A tight chest pulls you into a rounded posture. Opening it makes every posture exercise easier.", "For thoracic outlet syndrome, this is a cornerstone stretch. A tight pec minor can pinch nerves to the arm."],
  caution: "Never force. If your hand tingles, lower the elbow or ease the lean.",
  variations: [
    { name: "Low Elbow (Pec Minor Bias)", note: "Elbow slightly above shoulder height and lean; targets the deeper pec minor." },
    { name: "Both Arms", note: "Both forearms on both sides of the frame at once." },
    { name: "Corner Stretch", note: "Face a corner of the room with a forearm on each wall and lean in." }
  ]
},
{
  id: "cross-body-stretch", name: "Cross-Body Shoulder Stretch", region: "shoulder", type: "stretch",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Posterior deltoid, posterior capsule",
  helps: ["shoulder-pain", "rotator-cuff", "frozen-shoulder"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Bring your right arm across your chest.",
    "Use your left hand above the elbow to gently hug it closer.",
    "Keep the right shoulder down and relaxed.",
    "Hold, then switch."
  ],
  tips: ["Stretches the back of the shoulder, which is often tight in people with pinchy shoulders."],
  caution: "Hold above the elbow joint, not on it.",
  variations: [
    { name: "Sleeper Stretch", note: "Lying on your side, elbow at 90 degrees, gently press the forearm toward the floor. More intense; keep it gentle." }
  ]
},
{
  id: "behind-back-towel-stretch", name: "Towel Behind-Back Stretch", region: "shoulder", type: "stretch",
  equipment: ["towel"], position: "Standing", level: 2,
  muscles: "Internal rotators, shoulder capsule",
  helps: ["frozen-shoulder", "rotator-cuff", "shoulder-pain"],
  dose: { sets: 2, reps: 5, hold: 15, perSide: true },
  howTo: [
    "Hold a towel over your right shoulder with your right hand, letting it hang down your back.",
    "Grab the bottom of the towel behind your back with your left hand.",
    "Gently pull upward with the right hand, drawing the left hand up your back.",
    "Hold, lower, and repeat, then switch roles."
  ],
  tips: ["Rebuilds the reach-behind-your-back motion used for dressing and tucking in shirts."],
  caution: "Progress slowly. Frozen shoulders improve over months, not days.",
  variations: []
},
{
  id: "shoulder-flexion-wall-walk", name: "Wall Walk (Finger Ladder)", region: "shoulder", type: "mobility",
  equipment: ["wall"], position: "Standing facing wall", level: 1,
  muscles: "Shoulder flexion range",
  helps: ["frozen-shoulder", "rotator-cuff", "shoulder-pain"],
  dose: { sets: 2, reps: 5, perSide: true },
  howTo: [
    "Stand facing a wall, arm's length away.",
    "Walk your fingers slowly up the wall as high as comfortable.",
    "Hold at the top for a breath or two.",
    "Walk back down with control. Do not just drop the arm."
  ],
  tips: ["Mark your best height with a sticky note and watch it climb over the weeks."],
  caution: "Mild stretch discomfort is fine, sharp pain is not.",
  variations: [
    { name: "Side Wall Walk", note: "Stand sideways to the wall and walk fingers up out to the side (abduction)." }
  ]
},
{
  id: "serratus-punch", name: "Serratus Punch", region: "shoulder", type: "strengthen",
  equipment: ["band", "dumbbell", "none"], position: "Lying on back or standing", level: 2,
  muscles: "Serratus anterior",
  helps: ["tos", "upper-cross", "shoulder-pain", "posture"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Lie on your back holding a light weight straight up over your shoulder (or stand and press into a band anchored behind you).",
    "Keep the elbow straight and 'punch' the weight one inch higher, letting your shoulder blade slide forward off the floor.",
    "Slowly let the blade settle back down.",
    "That small punch is the whole exercise."
  ],
  tips: ["The serratus keeps your shoulder blade snug against your ribs. Vital for shoulder and thoracic outlet health."],
  caution: "Keep the movement small and smooth.",
  variations: [
    { name: "Wall Push-Up Plus", note: "Do a wall push-up and at the top keep pushing until your upper back rounds slightly. Gentlest version." },
    { name: "Push-Up Plus (Knees or Full)", note: "Same 'push extra' at the top of a push-up. Advanced." }
  ]
},
{
  id: "shoulder-shrug-roll", name: "Shoulder Rolls & Shrugs", region: "shoulder", type: "mobility",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Upper trapezius, shoulder girdle",
  helps: ["neck-pain", "posture", "general", "tos"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Sit or stand tall, arms relaxed.",
    "Roll your shoulders up, back, and down in a smooth circle.",
    "After 10 rolls, shrug both shoulders up toward your ears, hold 2 seconds, then let them drop and fully relax."
  ],
  tips: ["A perfect warm-up and a great tension reset during the day."],
  caution: "Roll backward, not forward, to encourage open posture.",
  variations: []
},
{
  id: "isometric-shoulder-abduction", name: "Wall Press (Isometric Shoulder)", region: "shoulder", type: "strengthen",
  equipment: ["wall"], position: "Standing beside wall", level: 1,
  muscles: "Deltoid, rotator cuff",
  helps: ["rotator-cuff", "shoulder-pain", "frozen-shoulder"],
  dose: { sets: 3, reps: 5, hold: 10, perSide: true },
  howTo: [
    "Stand with your side to a wall, arm hanging down, back of your hand against the wall.",
    "Press your whole arm gently outward into the wall.",
    "Nothing should move. Hold, breathe, release."
  ],
  tips: ["Isometrics build strength and often calm pain in irritated shoulders. A great starting point when lifting hurts."],
  caution: "Press at an effort that stays comfortable, around 25 to 50 percent.",
  variations: [
    { name: "Forward Press", note: "Face the wall, fist against it, press forward." },
    { name: "Backward Press", note: "Back of the elbow presses back into the wall behind you." }
  ]
},

// ============ ELBOW ============
{
  id: "eccentric-wrist-extension", name: "Eccentric Wrist Extension (Tennis Elbow)", region: "elbow", type: "strengthen",
  equipment: ["dumbbell"], position: "Sitting, forearm on table", level: 2,
  muscles: "Wrist extensors (outer elbow tendon)",
  helps: ["tennis-elbow", "wrist-pain"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Sit with your forearm on a table, palm facing down, hand hanging off the edge, light weight in hand.",
    "Use your other hand to help lift the weight up.",
    "Remove the helping hand and lower the weight slowly, counting 3 to 5 seconds down.",
    "That slow lowering is the medicine."
  ],
  tips: ["Slow 'lowering-only' work is the gold-standard rehab for tennis elbow tendons.", "Mild ache during is acceptable if it settles within 24 hours."],
  caution: "Start with 1 to 2 pounds. Sharp pain means the weight is too heavy.",
  variations: [
    { name: "Tyler Twist (FlexBar)", note: "Twist a rubber bar and slowly untwist with the sore arm. Same principle, research-backed." }
  ]
},
{
  id: "eccentric-wrist-flexion", name: "Eccentric Wrist Curl (Golfer's Elbow)", region: "elbow", type: "strengthen",
  equipment: ["dumbbell"], position: "Sitting, forearm on table", level: 2,
  muscles: "Wrist flexors (inner elbow tendon)",
  helps: ["golfers-elbow", "wrist-pain"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Forearm on a table, palm facing up, hand off the edge, light weight in hand.",
    "Help the weight up with your other hand.",
    "Lower it slowly over 3 to 5 seconds using only the sore arm.",
    "Repeat."
  ],
  tips: ["Mirror image of the tennis elbow exercise, for pain on the inner elbow."],
  caution: "Keep the weight light and the lowering slow.",
  variations: []
},
{
  id: "forearm-rotation", name: "Forearm Pronation & Supination", region: "elbow", type: "strengthen",
  equipment: ["dumbbell", "stick"], position: "Sitting, elbow at side", level: 1,
  muscles: "Forearm rotators (pronators and supinators)",
  helps: ["tennis-elbow", "golfers-elbow", "wrist-pain"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Hold a hammer or a dumbbell by one end, elbow bent 90 degrees at your side.",
    "Slowly rotate your palm up (supination), then slowly palm down (pronation).",
    "Control the speed the whole way."
  ],
  tips: ["Holding the far end of the hammer makes it harder, choking up makes it easier."],
  caution: "Keep the elbow tucked so the rotation comes from the forearm.",
  variations: [
    { name: "No-Weight Version", note: "Just the rotation, palm up to palm down, when a hammer is still too much." },
    { name: "Isometric Holds", note: "Hold the hammer halfway rotated for 10 seconds each direction." }
  ]
},
{
  id: "elbow-flexion-extension", name: "Elbow Bend & Straighten", region: "elbow", type: "mobility",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Biceps, triceps, elbow joint",
  helps: ["general", "tennis-elbow", "golfers-elbow"],
  dose: { sets: 2, reps: 15, perSide: true },
  howTo: [
    "Let your arm hang at your side, palm forward.",
    "Slowly bend the elbow, bringing your palm to your shoulder.",
    "Slowly straighten all the way down.",
    "Smooth and unhurried."
  ],
  tips: ["Good after time in a sling or cast to restore easy motion."],
  caution: "Work in the range you have. It grows with repetition.",
  variations: [
    { name: "With Light Weight", note: "Add a soup can or light dumbbell to build gentle strength." }
  ]
},
{
  id: "ulnar-nerve-glide", name: "Ulnar Nerve Glide", region: "elbow", type: "nerve-glide",
  equipment: ["none"], position: "Sitting or standing", level: 2,
  muscles: "Ulnar nerve pathway (funny bone nerve)",
  helps: ["tos", "wrist-pain", "golfers-elbow"],
  dose: { sets: 1, reps: 8, perSide: true },
  howTo: [
    "Make an 'OK' circle with your thumb and index finger.",
    "Raise your hand and flip the circle so you look through it like a mask, fingers resting on your cheek.",
    "Your elbow points out to the side. You may feel gentle tension along the inner arm.",
    "Return and repeat slowly, moving in and out of light tension."
  ],
  tips: ["Nerves like to slide, not stretch. Move gently in and out, never holding a strong pull."],
  caution: "Tingling that lingers means you did too much. Less is more with nerves.",
  variations: []
},
{
  id: "triceps-stretch", name: "Overhead Triceps Stretch", region: "elbow", type: "stretch",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Triceps, lat",
  helps: ["general", "shoulder-pain"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Reach your right arm overhead and bend the elbow, hand dropping behind your neck.",
    "Use your left hand to gently press the right elbow back.",
    "Hold and breathe, then switch sides."
  ],
  tips: ["Also helps overhead reach for cupboards and shelves."],
  caution: "Skip if your shoulder pinches overhead. Work on shoulder mobility first.",
  variations: []
},

// ============ WRIST & HAND ============
{
  id: "tendon-glides", name: "Tendon Glides", region: "wrist", type: "mobility",
  equipment: ["none"], position: "Sitting", level: 1,
  muscles: "Finger flexor tendons",
  helps: ["carpal-tunnel", "wrist-pain", "arthritis-hand"],
  dose: { sets: 2, reps: 5, hold: 3, perSide: true },
  howTo: [
    "Start with fingers straight up, like waving.",
    "Hook fist: bend only the top two joints, like a claw. Hold.",
    "Straight fist: fold fingers flat against the palm, thumb outside. Hold.",
    "Full fist: curl into a normal fist. Hold.",
    "Tabletop: knuckles bent 90 degrees, fingers straight. Hold, then back to straight."
  ],
  tips: ["The classic carpal tunnel exercise. Keeps tendons sliding freely through the wrist.", "Do these several times a day; they take under a minute."],
  caution: "Move smoothly. Mild pulling is fine, pain is not.",
  variations: []
},
{
  id: "median-nerve-glide", name: "Median Nerve Glide", region: "wrist", type: "nerve-glide",
  equipment: ["none"], position: "Sitting or standing", level: 2,
  muscles: "Median nerve pathway",
  helps: ["carpal-tunnel", "tos", "wrist-pain"],
  dose: { sets: 1, reps: 8, perSide: true },
  howTo: [
    "Start with your arm at your side, elbow bent, palm facing up near your shoulder.",
    "Slowly straighten the elbow while extending the wrist and fingers back, arm slightly out to the side.",
    "As the arm straightens, tilt your head gently away for a touch more glide.",
    "Return to the start. That is one slow repetition."
  ],
  tips: ["Helps both carpal tunnel and thoracic outlet syndrome since the median nerve runs through both areas.", "Think of flossing the nerve gently back and forth."],
  caution: "Go to light tension only, never to tingling. If symptoms flare, cut repetitions in half.",
  variations: [
    { name: "Wrist-Only Glide", note: "Gentler start: with elbow supported and bent, just extend the wrist and fingers, then relax." }
  ]
},
{
  id: "radial-nerve-glide", name: "Radial Nerve Glide", region: "wrist", type: "nerve-glide",
  equipment: ["none"], position: "Standing", level: 2,
  muscles: "Radial nerve pathway",
  helps: ["tos", "tennis-elbow", "wrist-pain"],
  dose: { sets: 1, reps: 8, perSide: true },
  howTo: [
    "Let your arm hang at your side, palm facing behind you.",
    "Bend the wrist so fingers point back, and reach the arm slightly behind your body.",
    "Tilt your head gently to the opposite side.",
    "Return and repeat in a slow rhythm."
  ],
  tips: ["Move like a slow pendulum, in and out of gentle tension."],
  caution: "Same nerve rules: light tension, no lingering tingling.",
  variations: []
},
{
  id: "wrist-flexor-stretch", name: "Wrist Flexor Stretch", region: "wrist", type: "stretch",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Forearm flexors",
  helps: ["carpal-tunnel", "golfers-elbow", "wrist-pain"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Straighten your right arm in front, palm facing up.",
    "With your left hand, gently bend the right wrist down so fingers point at the floor.",
    "Feel the stretch along the inside of your forearm.",
    "Hold, then switch."
  ],
  tips: ["Great after typing, gripping, or gardening."],
  caution: "Gentle pull only, especially if nerves are irritable.",
  variations: []
},
{
  id: "wrist-extensor-stretch", name: "Wrist Extensor Stretch", region: "wrist", type: "stretch",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Forearm extensors",
  helps: ["tennis-elbow", "wrist-pain", "carpal-tunnel"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Straighten your right arm in front, palm facing down.",
    "With your left hand, gently bend the wrist so fingers point at the floor.",
    "Feel the stretch along the top of your forearm.",
    "Hold, then switch."
  ],
  tips: ["Pairs with the flexor stretch for a complete forearm reset."],
  caution: "Keep the elbow straight but not locked hard.",
  variations: []
},
{
  id: "prayer-stretch", name: "Prayer Stretch", region: "wrist", type: "stretch",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Wrist flexors, palm fascia",
  helps: ["carpal-tunnel", "wrist-pain"],
  dose: { sets: 2, reps: 1, hold: 20 },
  howTo: [
    "Press your palms together in front of your chest, fingers up.",
    "Keeping palms glued, slowly lower your hands toward your waist.",
    "Stop when you feel a comfortable stretch in the wrists and forearms.",
    "Hold and breathe."
  ],
  tips: ["Reverse prayer (backs of hands together, lowering elbows) stretches the other side."],
  caution: "Ease up if the wrists ache afterward.",
  variations: [
    { name: "Reverse Prayer", note: "Backs of hands pressed together, fingers pointing down, gently raise the hands." }
  ]
},
{
  id: "wrist-circles", name: "Wrist Circles & Waves", region: "wrist", type: "mobility",
  equipment: ["none"], position: "Sitting", level: 1,
  muscles: "Wrist joint all directions",
  helps: ["wrist-pain", "arthritis-hand", "general"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Support your forearm on a table or your leg, hand free.",
    "Draw slow circles with your hand, 10 one way, 10 the other.",
    "Then wave up and down, and side to side."
  ],
  tips: ["Perfect gentle warm-up before wrist strengthening."],
  caution: "Stay smooth, no forcing end ranges.",
  variations: []
},
{
  id: "grip-squeeze", name: "Grip Squeeze", region: "wrist", type: "strengthen",
  equipment: ["ball", "towel"], position: "Sitting", level: 1,
  muscles: "Grip, finger flexors",
  helps: ["wrist-pain", "arthritis-hand", "tennis-elbow", "general"],
  dose: { sets: 3, reps: 10, hold: 5, perSide: true },
  howTo: [
    "Hold a soft ball or rolled washcloth in your hand.",
    "Squeeze firmly but comfortably.",
    "Hold, then fully relax the hand between squeezes."
  ],
  tips: ["Grip strength predicts independence. It is worth training at every age."],
  caution: "Use a softer object if joints are flared.",
  variations: [
    { name: "Pinch Grip", note: "Pinch the ball between thumb and each fingertip in turn." }
  ]
},
{
  id: "finger-band-extension", name: "Finger Spreads with Band", region: "wrist", type: "strengthen",
  equipment: ["band"], position: "Sitting", level: 1,
  muscles: "Finger extensors, hand intrinsics",
  helps: ["arthritis-hand", "wrist-pain", "carpal-tunnel"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Loop a rubber band around your fingers and thumb near the fingertips.",
    "Spread your fingers apart against the band.",
    "Slowly let them close.",
    "Repeat."
  ],
  tips: ["Balances all the gripping we do every day."],
  caution: "A light rubber band is plenty.",
  variations: []
},
{
  id: "wrist-curls", name: "Wrist Curls (Both Directions)", region: "wrist", type: "strengthen",
  equipment: ["dumbbell"], position: "Sitting, forearm on table", level: 2,
  muscles: "Wrist flexors and extensors",
  helps: ["wrist-pain", "tennis-elbow", "golfers-elbow", "general"],
  dose: { sets: 2, reps: 12, perSide: true },
  howTo: [
    "Forearm on a table, hand off the edge, palm up, light weight in hand.",
    "Curl the wrist up, then lower slowly.",
    "After a set, flip palm down and lift the back of the hand up, lower slowly."
  ],
  tips: ["Builds the everyday strength for jars, kettles, and door handles."],
  caution: "Light weight, slow lowering.",
  variations: []
},

// ============ UPPER BACK (THORACIC) ============
{
  id: "thoracic-extension-foam-roller", name: "Upper Back Extension over Foam Roller", region: "upper-back", type: "mobility",
  equipment: ["foam-roller"], position: "Lying on back over roller", level: 2,
  muscles: "Thoracic spine extension",
  helps: ["upper-cross", "posture", "tos", "neck-pain"],
  dose: { sets: 2, reps: 8 },
  howTo: [
    "Lie on your back with a foam roller across your mid-back, knees bent.",
    "Support your head with your hands, elbows pointing up.",
    "Gently arch backward over the roller, letting the upper back extend.",
    "Return up and shift the roller slightly to a new segment."
  ],
  tips: ["A stiff upper back forces the neck and lower back to overwork. This frees the middle.", "Exhale as you extend."],
  caution: "Keep the arch in the upper back, not the lower back. Skip if you have osteoporosis unless cleared by your clinician.",
  variations: [
    { name: "Segmental Thoracic Mobility", note: "Work one level at a time: extend over the roller, come back up, move the roller one inch, repeat from the bottom of the ribcage to the base of the neck." },
    { name: "Chair Thoracic Extension", note: "Sit in a chair, hands behind head, arch your upper back over the chair's backrest. No floor needed." },
    { name: "Towel Roll Version", note: "Use a firmly rolled towel instead of a roller for a gentler arch." }
  ]
},
{
  id: "cat-cow", name: "Cat-Cow", region: "upper-back", type: "mobility",
  equipment: ["none"], position: "Hands and knees", level: 1,
  muscles: "Entire spine, especially mid-back",
  helps: ["low-back-pain", "upper-cross", "posture", "general", "neck-pain"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Start on hands and knees, hands under shoulders, knees under hips.",
    "Cow: let your belly sink, lift your chest and tailbone, look gently forward.",
    "Cat: round your back up to the ceiling, tuck your tailbone, let your head hang.",
    "Flow slowly between the two with your breath."
  ],
  tips: ["One of the safest all-purpose spine mobilizers.", "Move segment by segment, like a wave along the spine."],
  caution: "Keep the motion comfortable, no forcing end range.",
  variations: [
    { name: "Seated Cat-Cow", note: "Hands on knees, arch and round while sitting. Great if kneeling is uncomfortable." }
  ]
},
{
  id: "open-book", name: "Open Book Rotation", region: "upper-back", type: "mobility",
  equipment: ["none"], position: "Lying on side", level: 1,
  muscles: "Thoracic rotation, chest",
  helps: ["upper-cross", "posture", "neck-pain", "low-back-pain", "tos"],
  dose: { sets: 2, reps: 8, hold: 3, perSide: true },
  howTo: [
    "Lie on your left side, knees bent and stacked, arms extended together in front at shoulder height.",
    "Keeping knees glued together, lift your right arm and open it across your body like a book cover.",
    "Follow your hand with your eyes as your chest turns toward the ceiling.",
    "Pause, breathe, then close the book. Repeat, then switch sides."
  ],
  tips: ["Feels wonderful after a day of sitting.", "Keep the knees down so the twist comes from the mid-back."],
  caution: "Only rotate as far as comfortable, the range grows with practice.",
  variations: []
},
{
  id: "thread-the-needle", name: "Thread the Needle", region: "upper-back", type: "mobility",
  equipment: ["none"], position: "Hands and knees", level: 2,
  muscles: "Thoracic rotation, posterior shoulder",
  helps: ["upper-cross", "posture", "shoulder-pain"],
  dose: { sets: 2, reps: 8, hold: 3, perSide: true },
  howTo: [
    "Start on hands and knees.",
    "Slide your right hand palm-up underneath your left arm, letting your right shoulder and ear lower toward the floor.",
    "Feel the twist through your upper back. Pause.",
    "Return and reach the right hand to the ceiling for a bonus opening twist."
  ],
  tips: ["Move with your breath: exhale threading under, inhale reaching up."],
  caution: "Pad the knees. Skip if kneeling is not tolerable and use Open Book instead.",
  variations: []
},
{
  id: "wall-angels", name: "Wall Angels", region: "upper-back", type: "strengthen",
  equipment: ["wall"], position: "Standing against wall", level: 2,
  muscles: "Lower trapezius, postural muscles",
  helps: ["upper-cross", "posture", "tos", "neck-pain"],
  dose: { sets: 2, reps: 8 },
  howTo: [
    "Stand with your back against a wall, feet a few inches away, lower back gently flattened.",
    "Press the back of your head, shoulders, and arms against the wall, elbows bent like a goalpost.",
    "Slowly slide your arms up the wall, keeping everything in contact.",
    "Slide back down. Quality beats height."
  ],
  tips: ["Harder than it looks. Losing wall contact shows exactly where your mobility runs out.", "Do not force the wrists to touch, work within your range."],
  caution: "Keep ribs down, do not let the lower back arch off the wall.",
  variations: [
    { name: "Floor Angels", note: "Same movement lying on the floor. Gravity assists, making it gentler." }
  ]
},
{
  id: "prone-cobra", name: "Prone Cobra", region: "upper-back", type: "strengthen",
  equipment: ["none"], position: "Lying face down", level: 2,
  muscles: "Spinal extensors, lower trapezius, rear deltoids",
  helps: ["upper-cross", "posture", "low-back-pain"],
  dose: { sets: 3, reps: 8, hold: 5 },
  howTo: [
    "Lie face down, arms at your sides, palms facing down.",
    "Gently lift your chest off the floor while turning your palms to face forward, thumbs up.",
    "Squeeze shoulder blades down and together. Keep your gaze at the floor so your neck stays long.",
    "Hold, then lower with control."
  ],
  tips: ["Strengthens the exact muscles that fight a slouched posture."],
  caution: "Lift the chest a comfortable amount. This is not a high backbend.",
  variations: [
    { name: "Superman", note: "Also lift the legs slightly. More total-back work." }
  ]
},
{
  id: "quadruped-thoracic-rotation", name: "Quadruped Thoracic Rotation", region: "upper-back", type: "mobility",
  equipment: ["none"], position: "Hands and knees", level: 2,
  muscles: "Thoracic rotation",
  helps: ["upper-cross", "posture", "low-back-pain"],
  dose: { sets: 2, reps: 8, perSide: true },
  howTo: [
    "On hands and knees, place your right hand behind your head.",
    "Rotate your right elbow down toward your left wrist.",
    "Then rotate it up toward the ceiling, following with your eyes.",
    "Repeat slowly, then switch sides."
  ],
  tips: ["Sit back slightly toward your heels to lock the lower back and isolate the mid-back twist."],
  caution: "Rotate through a smooth, comfortable arc.",
  variations: []
},
{
  id: "childs-pose-lat-reach", name: "Child's Pose with Side Reach", region: "upper-back", type: "stretch",
  equipment: ["none"], position: "Kneeling", level: 1,
  muscles: "Lats, mid-back, hips",
  helps: ["low-back-pain", "upper-cross", "general", "posture"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Kneel and sit back toward your heels, reaching arms far forward on the floor, forehead down.",
    "Walk both hands over to the right until you feel a stretch along your left side.",
    "Hold and breathe into your ribs, then walk hands to the other side."
  ],
  tips: ["A calming full-back stretch, lovely at the end of a session."],
  caution: "Place a pillow between hips and heels if knees complain, or do a standing version leaning on a counter.",
  variations: [
    { name: "Counter Lean Stretch", note: "Stand, hold a countertop, step back and hinge until your back lengthens. Standing alternative." }
  ]
},
{
  id: "seated-thoracic-extension-chair", name: "Chair Back Extension", region: "upper-back", type: "mobility",
  equipment: ["chair"], position: "Sitting", level: 1,
  muscles: "Thoracic extension",
  helps: ["posture", "upper-cross", "neck-pain"],
  dose: { sets: 2, reps: 8, hold: 3 },
  howTo: [
    "Sit in a sturdy chair with a mid-height backrest.",
    "Interlace your fingers behind your head, elbows wide.",
    "Gently arch your upper back over the top of the backrest, lifting your chest to the ceiling.",
    "Return upright and repeat."
  ],
  tips: ["A perfect once-an-hour desk reset."],
  caution: "The chair back should hit your mid-back, not your lower back.",
  variations: []
},
{
  id: "breathing-diaphragm", name: "Belly Breathing", region: "upper-back", type: "mobility",
  equipment: ["none"], position: "Lying or sitting", level: 1,
  muscles: "Diaphragm",
  helps: ["tos", "neck-pain", "posture", "low-back-pain", "general"],
  dose: { sets: 1, reps: 1, timeSec: 180 },
  howTo: [
    "Lie on your back with knees bent, one hand on your chest, one on your belly.",
    "Breathe in slowly through your nose so the belly hand rises. The chest hand stays quiet.",
    "Exhale slowly through pursed lips, letting the belly fall.",
    "Continue for a few minutes."
  ],
  tips: ["People with thoracic outlet syndrome and neck pain often over-breathe with their neck muscles. Belly breathing retrains this and gives the scalenes a rest.", "Try 4 seconds in, 6 seconds out."],
  caution: "If you feel lightheaded, breathe normally for a bit.",
  variations: [
    { name: "Crocodile Breathing", note: "Face down, forehead on hands, breathe into the floor. Strong belly feedback." }
  ]
},
{
  id: "push-up-plus", name: "Push-Up Plus (Scapular Push-Up)", region: "shoulder", type: "strengthen",
  equipment: ["none", "wall"], position: "Plank or hands on wall", level: 2,
  muscles: "Serratus anterior",
  helps: ["shoulder-pain", "rotator-cuff", "upper-cross", "tos", "posture", "strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set up in a push-up position with arms straight.",
    "Without bending your elbows, let your chest sink as the shoulder blades pinch together.",
    "Then push the floor away hard, spreading the blades and rounding the upper back slightly. That extra push is the 'plus'.",
    "Move slowly between the two positions."
  ],
  tips: ["EMG research consistently ranks the push-up plus among the very best serratus anterior exercises, and a strong serratus keeps the shoulder blade gliding smoothly.", "All the magic is in the 'plus' at the top. Do not rush it."],
  caution: "Keep your hips in line with your shoulders. If your wrists complain, do it on fists or against a wall.",
  variations: [
    { name: "Wall Push-Up Plus", note: "Hands on a wall. The gentlest entry point, great early in rehab." },
    { name: "Knee Push-Up Plus", note: "From the knees, halfway between wall and floor." },
    { name: "Beast Push-Up Plus", note: "From the beast position (hands and toes, knees hovering an inch up). The hover adds a huge core and serratus demand." },
    { name: "Full Push-Up Plus", note: "Add the plus to the top of every regular push-up." }
  ]
},
{
  id: "prone-swimmers", name: "Prone Swimmers", region: "shoulder", type: "strengthen",
  equipment: ["none"], position: "Lying face down", level: 2,
  muscles: "Lower traps, mid traps, rotator cuff, shoulder mobility",
  helps: ["shoulder-pain", "rotator-cuff", "upper-cross", "posture", "frozen-shoulder"],
  dose: { sets: 2, reps: 6 },
  howTo: [
    "Lie face down, forehead on a towel, arms overhead in a 'Y', thumbs up.",
    "Lift both arms an inch off the floor.",
    "Keeping them hovering, sweep the arms in a wide arc down toward your hips, rotating palms toward the ceiling.",
    "Sweep back overhead without letting anything touch down. That is one rep."
  ],
  tips: ["It is a full lap of shoulder-blade control: every muscle that positions the blade takes a turn.", "Fewer clean reps beat many sloppy ones. Six is plenty at first."],
  caution: "Keep your neck long and relaxed. Shrink the arc if anything pinches.",
  variations: [
    { name: "Bent-Elbow Swimmers", note: "Sweep with elbows bent to shorten the lever and make it easier." },
    { name: "Swimmer Hovers", note: "Just hold the arms hovering in each position for 5 seconds instead of sweeping." }
  ]
},
{
  id: "shoulder-extension-scap-tilt", name: "Shoulder Extension (Anterior Scapular Tilt)", region: "shoulder", type: "mobility",
  equipment: ["none", "stick"], position: "Standing, arms behind you", level: 1,
  muscles: "Pec minor, front of shoulder, scapular tilt control",
  helps: ["upper-cross", "tos", "posture", "shoulder-pain"],
  dose: { sets: 2, reps: 8, hold: 5 },
  howTo: [
    "Stand tall with your arms at your sides, palms facing back.",
    "Reach both arms straight behind you as far as comfortable.",
    "As you reach, let the shoulder blades tip and squeeze together without slumping forward.",
    "Hold, feeling a stretch across the front of the shoulders and chest, then return."
  ],
  tips: ["A tight pec minor tips the shoulder blade forward all day. This drill moves the blade the opposite way and stretches the culprit.", "Holding a stick or towel between your hands behind you deepens the reach."],
  caution: "Keep standing tall. If your hands tingle, shrink the range, especially with thoracic outlet syndrome.",
  variations: [
    { name: "With Stick or Towel", note: "Hold a stick behind you with both hands and lift it gently away from your body." },
    { name: "Chest Opener Hold", note: "Interlace your fingers behind your back and hold the open position for 20 to 30 seconds as a stretch." }
  ]
}
);
