// MoveWell exercise database, Part 3: Core, Balance & Whole Body

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ CORE ============
{
  id: "dead-bug", name: "Dead Bug", region: "core", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 2,
  muscles: "Deep abdominals, coordination",
  helps: ["low-back-pain", "posture", "general"],
  dose: { sets: 3, reps: 8, perSide: true },
  howTo: [
    "Lie on your back, arms reaching to the ceiling, knees lifted over hips and bent 90 degrees.",
    "Gently flatten your lower back toward the floor and keep it there.",
    "Slowly lower your right arm overhead and extend your left leg toward the floor.",
    "Return and switch pairs. The back never arches."
  ],
  tips: ["Breathe out as the limbs lower. If the back pops up, shorten the reach."],
  caution: "Quality over range. Small controlled reaches first.",
  variations: [
    { name: "Legs Only", note: "Keep hands on the floor and move only the legs. Easier." },
    { name: "Heel Taps", note: "Tap one heel to the floor at a time with knees bent. Easiest version." }
  ]
},
{
  id: "abdominal-bracing", name: "Abdominal Bracing", region: "core", type: "strengthen",
  equipment: ["none"], position: "Lying, sitting, or standing", level: 1,
  muscles: "All trunk muscles together",
  helps: ["low-back-pain", "general", "posture"],
  dose: { sets: 3, reps: 8, hold: 10 },
  howTo: [
    "Lie on your back with knees bent (later, practice sitting and standing).",
    "Gently tighten your whole middle, as if about to be poked in the belly.",
    "Keep breathing normally while holding the tension.",
    "Relax fully between holds."
  ],
  tips: ["This gentle 'ready' tension is what you switch on before lifting groceries or grandchildren."],
  caution: "It is a 30 percent effort, not a maximal clench, and never hold your breath.",
  variations: []
},
{
  id: "side-plank-knees", name: "Side Plank (Knees)", region: "core", type: "strengthen",
  equipment: ["none"], position: "Lying on side", level: 2,
  muscles: "Obliques, side hip, shoulder",
  helps: ["low-back-pain", "posture", "general", "hip-pain"],
  dose: { sets: 3, reps: 1, timeSec: 15, perSide: true },
  howTo: [
    "Lie on your side, propped on your elbow, knees bent and stacked.",
    "Lift your hips so your body is straight from head to knees.",
    "Hold, breathing steadily, then lower. Switch sides."
  ],
  tips: ["The third member of the back-friendly 'Big 3'. Builds side strength with almost no spine bending."],
  caution: "Keep the elbow under the shoulder. Skip if the shoulder is currently injured.",
  variations: [
    { name: "Full Side Plank", note: "Legs straight, feet stacked. Much harder." },
    { name: "Wall Side Lean", note: "Standing version leaning sideways on a wall for beginners." }
  ]
},
{
  id: "plank-incline", name: "Incline Plank", region: "core", type: "strengthen",
  equipment: ["wall", "table"], position: "Leaning on counter or wall", level: 2,
  muscles: "Whole trunk, shoulders",
  helps: ["general", "posture", "low-back-pain"],
  dose: { sets: 3, reps: 1, timeSec: 20 },
  howTo: [
    "Place your forearms or hands on a counter, wall, or sturdy table.",
    "Walk your feet back until your body forms a straight ramp.",
    "Brace gently and hold, breathing the whole time."
  ],
  tips: ["The higher the surface, the easier. Wall is easiest, floor is hardest. Pick your rung on the ladder."],
  caution: "Do not let the hips sag or the head droop.",
  variations: [
    { name: "Full Plank", note: "On the floor, forearms and toes. Advanced." },
    { name: "Plank with Shoulder Taps", note: "In a hands plank, tap opposite shoulder slowly. Adds balance work." }
  ]
},
{
  id: "pallof-press", name: "Pallof Press", region: "core", type: "strengthen",
  equipment: ["band"], position: "Standing", level: 2,
  muscles: "Anti-rotation core, obliques",
  helps: ["low-back-pain", "general", "posture"],
  dose: { sets: 3, reps: 10, hold: 3, perSide: true },
  howTo: [
    "Anchor a band at chest height. Stand sideways to it and hold the band at your chest with both hands.",
    "Step away until the band is taut.",
    "Press your hands straight out from your chest. The band will try to twist you toward it. Do not let it.",
    "Hold, return, repeat, then face the other way."
  ],
  tips: ["Trains your trunk to resist twisting, exactly what it does when you carry a bag on one side."],
  caution: "Stand tall, knees soft, and breathe.",
  variations: []
},
{
  id: "glute-bridge-march", name: "Bridge March", region: "core", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 3,
  muscles: "Glutes, hamstrings, deep core",
  helps: ["low-back-pain", "hip-pain", "general", "balance-falls"],
  dose: { sets: 2, reps: 6, perSide: true },
  howTo: [
    "Set up a glute bridge and hold the hips high.",
    "Without letting the hips tip, slowly lift one foot an inch off the floor.",
    "Place it back, then lift the other. That is one pair."
  ],
  tips: ["Put your hands on your hip bones. They will tattle if the pelvis tips."],
  caution: "Master the regular bridge first.",
  variations: []
},
{
  id: "suitcase-carry", name: "Suitcase Carry", region: "core", type: "strengthen",
  equipment: ["dumbbell"], position: "Walking", level: 2,
  muscles: "Side core, grip, hips",
  helps: ["low-back-pain", "balance-falls", "general", "posture"],
  dose: { sets: 3, reps: 1, timeSec: 30, perSide: true },
  howTo: [
    "Hold a weight (dumbbell, kettlebell, or loaded shopping bag) in one hand.",
    "Stand perfectly tall. Do not lean toward or away from the weight.",
    "Walk slowly and steadily for the time, then switch hands."
  ],
  tips: ["It is literally carrying groceries, trained. Few exercises transfer to life better."],
  caution: "Choose a weight you can carry with completely level shoulders.",
  variations: [
    { name: "Farmer Carry", note: "A weight in each hand. More total load, less lean challenge." }
  ]
},

// ============ BALANCE & WHOLE BODY ============
{
  id: "single-leg-stance", name: "Single Leg Stand", region: "balance", type: "balance",
  equipment: ["chair"], position: "Standing at support", level: 1,
  muscles: "Balance system, hips, ankles",
  helps: ["balance-falls", "ankle-sprain", "hip-pain", "general"],
  dose: { sets: 3, reps: 1, timeSec: 20, perSide: true },
  howTo: [
    "Stand tall beside a counter or sturdy chair, holding on.",
    "Lift one foot a few inches off the floor.",
    "Balance on the standing leg, staying tall.",
    "Lower, rest, and switch legs."
  ],
  tips: ["Progression ladder: two hands on support, one hand, fingertip, hovering hands, then eyes-closed with a helper nearby.", "One of the most proven fall-prevention exercises there is."],
  caution: "Always practice next to something solid you can grab.",
  variations: [
    { name: "Eyes Closed", note: "Advanced, only with support at hand and someone nearby." },
    { name: "With Head Turns", note: "Slowly look left and right while balancing. Trains real-world balance." }
  ]
},
{
  id: "tandem-stance", name: "Tandem Stance (Heel-to-Toe)", region: "balance", type: "balance",
  equipment: ["chair", "wall"], position: "Standing at support", level: 1,
  muscles: "Balance system",
  helps: ["balance-falls", "general"],
  dose: { sets: 3, reps: 1, timeSec: 20, perSide: true },
  howTo: [
    "Stand near a wall or counter for safety.",
    "Place one foot directly in front of the other, heel touching toe, like standing on a tightrope.",
    "Hold steady and tall.",
    "Switch which foot leads."
  ],
  tips: ["Narrow stance means bigger challenge. This one bridges the gap between two-feet and one-foot balance."],
  caution: "Keep a hand hovering over the support.",
  variations: [
    { name: "Semi-Tandem", note: "Front heel beside the back big toe rather than in line. Easier start." }
  ]
},
{
  id: "heel-toe-walking", name: "Heel-to-Toe Walking", region: "balance", type: "balance",
  equipment: ["wall"], position: "Walking along a wall", level: 2,
  muscles: "Dynamic balance",
  helps: ["balance-falls", "general"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand beside a wall or hallway rail.",
    "Walk forward placing the heel of one foot directly in front of the toes of the other.",
    "Take 10 slow, deliberate steps, using the wall as needed.",
    "Turn carefully and walk back."
  ],
  tips: ["Fix your eyes on a target ahead, not on your feet, once you feel steady."],
  caution: "Stay beside the wall for the whole path.",
  variations: [
    { name: "Backward Walking", note: "Slow backward steps along a counter. Excellent and underused." }
  ]
},
{
  id: "weight-shifts", name: "Weight Shifts", region: "balance", type: "balance",
  equipment: ["chair"], position: "Standing at support", level: 1,
  muscles: "Balance system, hips",
  helps: ["balance-falls", "general", "post-surgery"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Stand with feet hip-width apart, hands hovering over a support.",
    "Shift your weight slowly onto the right foot, letting the left get light.",
    "Shift across to the left. Then practice shifting forward to toes and back to heels.",
    "Smooth and unhurried, like slow dancing."
  ],
  tips: ["The gentlest doorway into balance training. Perfect first exercise after illness or surgery."],
  caution: "Small shifts first, growing bolder as confidence builds.",
  variations: [
    { name: "Clock Reaches", note: "Balance on one leg and reach the other toe to 12, 3, and 6 o'clock positions." }
  ]
},
{
  id: "marching-in-place", name: "Marching in Place", region: "balance", type: "balance",
  equipment: ["chair"], position: "Standing at support", level: 1,
  muscles: "Hip flexors, balance, heart",
  helps: ["balance-falls", "general", "post-surgery"],
  dose: { sets: 2, reps: 20 },
  howTo: [
    "Stand tall near a support.",
    "Lift one knee toward hip height, place it down, lift the other.",
    "March with rhythm, swinging the arms if you feel steady."
  ],
  tips: ["Counts as gentle cardio too. Put on a favorite song and march through it."],
  caution: "Lower knee height is fine. Keep the trunk tall rather than leaning back.",
  variations: [
    { name: "Seated Marching", note: "March sitting tall in a chair. Great starting point." },
    { name: "March with Head Turns", note: "Advanced: turn your head side to side while marching." }
  ]
},
{
  id: "side-stepping", name: "Side Stepping", region: "balance", type: "balance",
  equipment: ["chair"], position: "Standing along a counter", level: 1,
  muscles: "Side hips, lateral balance",
  helps: ["balance-falls", "hip-pain", "general"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Stand at a kitchen counter, hands resting on it.",
    "Step sideways along the counter, bringing feet together each step.",
    "Travel one way, then return."
  ],
  tips: ["Most daily movement is forward. Training sideways fills a dangerous gap in balance skills."],
  caution: "Do not cross the feet at first, that is a later progression.",
  variations: [
    { name: "Grapevine Steps", note: "Advanced: cross one foot in front, then behind, as you travel." }
  ]
},
{
  id: "step-taps", name: "Step Taps", region: "balance", type: "balance",
  equipment: ["step"], position: "Standing at a step", level: 2,
  muscles: "Balance, hip control",
  helps: ["balance-falls", "knee-pain", "general"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Stand facing the bottom stair or a low step, hand on rail.",
    "Tap one foot lightly onto the step, then back to the floor.",
    "Keep the standing leg tall and steady. Switch legs after a set."
  ],
  tips: ["All the challenge of stairs with none of the commitment."],
  caution: "The tap is light, weight stays mostly on the standing leg.",
  variations: []
},
{
  id: "walking-program", name: "Walking (Timed)", region: "balance", type: "balance",
  equipment: ["none"], position: "Walking", level: 1,
  muscles: "Heart, legs, whole body",
  helps: ["general", "balance-falls", "low-back-pain", "knee-oa", "posture"],
  dose: { sets: 1, reps: 1, timeSec: 600 },
  howTo: [
    "Choose a safe, flat route or a treadmill.",
    "Walk at a pace where you can talk but feel gently worked.",
    "Stand tall: eyes ahead, gentle arm swing.",
    "Build up time gradually, a few minutes more each week."
  ],
  tips: ["Walking is the base layer of nearly every recovery plan. Ten minutes counts.", "Log how long you walked in the timer."],
  caution: "Use your usual walking aid if you have one, and supportive shoes.",
  variations: []
},
{
  id: "worlds-greatest-stretch", name: "World's Greatest Stretch", region: "balance", type: "mobility",
  equipment: ["none"], position: "Lunge position", level: 3,
  muscles: "Hips, upper back, hamstrings, whole chain",
  helps: ["general", "posture", "hip-pain", "upper-cross"],
  dose: { sets: 2, reps: 5, perSide: true },
  howTo: [
    "Step your right foot forward into a long lunge, left hand on the floor.",
    "Place your right elbow toward the instep of the right foot, feeling the hip open.",
    "Then rotate your chest and reach the right hand to the ceiling, following with your eyes.",
    "Step back and switch sides."
  ],
  tips: ["A whole warm-up in one move for those who can get up and down from the floor easily."],
  caution: "Advanced. Choose Open Book plus Hip Flexor Stretch for the same benefits in gentler pieces.",
  variations: []
},
{
  id: "tai-chi-weight-transfer", name: "Tai Chi Style Flow Steps", region: "balance", type: "balance",
  equipment: ["none"], position: "Standing", level: 2,
  muscles: "Balance, coordination, calm",
  helps: ["balance-falls", "general"],
  dose: { sets: 1, reps: 1, timeSec: 180 },
  howTo: [
    "Stand tall, knees soft, hands floating in front of you.",
    "Step slowly to the side, pouring your weight from one leg to the other like water.",
    "Let the arms sweep gently in the direction of each shift.",
    "Continue in slow motion, breathing deeply."
  ],
  tips: ["Tai Chi has some of the strongest research support for preventing falls. Slowness is the point."],
  caution: "Practice in a clear space near a support at first.",
  variations: []
}
);
