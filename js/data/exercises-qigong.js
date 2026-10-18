// MoveWell exercise database, Part 7: Qi Gong moves (filed under Mobility), plus a few gap fillers
// Kept in its own file so the original data files stay untouched.
// Loads after templates.js, so it can add its own type, template and template group.

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ QI GONG ============
{
  id: "qg-bounce-shake", name: "Bouncing and Shaking", region: "balance", type: "mobility", alias: "qi gong",
  equipment: ["none"], position: "Standing, feet shoulder-width apart", level: 1,
  muscles: "Whole body, calves, shoulders, jaw",
  helps: ["general", "posture"],
  dose: { sets: 1, reps: 0, timeSec: 120 },
  howTo: [
    "Stand with your feet shoulder-width apart and your knees soft, not locked.",
    "Gently bounce up and down from your heels in a small, easy rhythm.",
    "Let the bounce travel up through your spine, shoulders and jaw. Let your arms hang and jiggle.",
    "Breathe out through your mouth as you shake off tension, and keep going until the chime."
  ],
  tips: ["Keep it small and loose. It should feel like shaking water off your hands, not like jumping."],
  caution: "Keep your heels close to the floor if your balance is shaky, or hold the back of a chair.",
  variations: [
    { name: "Seated Shaking", note: "Sit tall and gently shake your hands, arms and shoulders instead." },
    { name: "Heel Drops", note: "Rise slightly onto your toes, then let your heels drop softly. A little stronger." }
  ]
},
{
  id: "qg-arm-swings", name: "Arm Swings and Waist Twists", region: "lower-back", type: "mobility", alias: "qi gong",
  equipment: ["none"], position: "Standing, feet shoulder-width apart", level: 1,
  muscles: "Spine, obliques, shoulders",
  helps: ["low-back-pain", "general"],
  dose: { sets: 1, reps: 0, timeSec: 60 },
  howTo: [
    "Stand with your feet a little wider than your hips and your knees soft.",
    "Turn your waist gently to one side, then the other.",
    "Let your arms swing loosely and wrap around your body, tapping your hips and chest.",
    "Let your heels pivot a little if it helps, and find an easy rhythm."
  ],
  tips: ["Your arms are empty sleeves. The turn starts at your waist and the arms simply follow."],
  caution: "Keep the turn gentle if you have back pain. Smaller is fine.",
  variations: [
    { name: "Seated Twists", note: "Sit tall and turn your shoulders side to side with hands resting on your thighs." }
  ]
},
{
  id: "qg-rowing-boat", name: "Rowing the Boat", region: "upper-back", type: "mobility", alias: "qi gong",
  equipment: ["none"], position: "Standing, one foot slightly ahead", level: 1,
  muscles: "Chest, shoulders, upper back, legs",
  helps: ["posture", "upper-cross", "general"],
  dose: { sets: 1, reps: 0, timeSec: 120 },
  howTo: [
    "Stand with your hands up in front of you at chest height, palms facing down.",
    "Breathe in as you lift your arms and shift your weight gently forward.",
    "Breathe out as you bend your knees a little and sweep your arms down and back, like pulling oars.",
    "Keep the movement slow and match it to your breathing."
  ],
  tips: ["Let your chest open as your arms sweep back. One full stroke per breath."],
  caution: "Keep your arms below shoulder height if your shoulders are sore.",
  variations: [
    { name: "Seated Rowing", note: "Do the same arm sweep while sitting tall in a chair." }
  ]
},
{
  id: "qg-cloud-hands", name: "Cloud Hands", region: "balance", type: "mobility", alias: "qi gong",
  equipment: ["none"], position: "Standing, feet wider than hips", level: 1,
  muscles: "Legs, hips, shoulders, balance",
  helps: ["balance-falls", "general"],
  dose: { sets: 1, reps: 0, timeSec: 120 },
  howTo: [
    "Stand with your feet a little wider than your hips and your knees soft.",
    "Raise one hand in front of your face, palm facing you, and keep the other hand low near your waist.",
    "Slowly shift your weight to one side as your upper hand floats across in front of you.",
    "Swap hands as you shift back the other way. Keep it smooth, like hands drifting through clouds."
  ],
  tips: ["Watch your top hand as it moves. Slow is the point."],
  caution: "Stand near a counter or chair the first few times in case you need a hand for balance.",
  variations: [
    { name: "Hands Only", note: "Keep your weight in the middle and move just the arms. Easier for balance." }
  ]
},
{
  id: "qg-belly-tapping", name: "Belly Tapping and Breathing", region: "core", type: "mobility", alias: "qi gong",
  equipment: ["none"], position: "Standing or sitting", level: 1,
  muscles: "Diaphragm, lower belly",
  helps: ["general", "low-back-pain"],
  dose: { sets: 1, reps: 0, timeSec: 120 },
  howTo: [
    "Make loose, soft fists and gently tap the area about two inches below your belly button.",
    "Tap for about a minute in an easy, steady rhythm.",
    "Then rest both hands there and breathe deeply into your belly.",
    "Feel it rise under your hands as you breathe in and fall as you breathe out."
  ],
  tips: ["In Korean practice this area is called the Dahn Jon. Think of it as your calm center."],
  caution: "Tap gently. Skip the tapping after recent belly surgery or during pregnancy and just breathe.",
  variations: [
    { name: "Breathing Only", note: "Skip the tapping and rest your hands on your belly the whole time." }
  ]
},
{
  id: "qg-self-massage", name: "Self-Massage and Gratitude", region: "neck", type: "mobility", alias: "qi gong",
  equipment: ["none"], position: "Standing or sitting", level: 1,
  muscles: "Face, scalp, neck",
  helps: ["neck-pain", "headache", "general"],
  dose: { sets: 1, reps: 0, timeSec: 60 },
  howTo: [
    "Rub your palms together until they feel warm.",
    "Gently sweep your warm hands over your face, over the top of your head and down the back of your neck.",
    "Repeat a few times, slowly.",
    "Finish with your right hand over your heart and your left hand on your lower belly. Take a few quiet breaths and think of something you are thankful for."
  ],
  tips: ["A calm way to close any session, not only Qi Gong."],
  variations: []
},

// ============ GAP FILLERS ============
{
  id: "prone-on-elbows", name: "Lying on Elbows (Prone Prop)", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "Lying on stomach", level: 1,
  muscles: "Lower back extension",
  helps: ["disc", "low-back-pain", "sciatica"],
  dose: { sets: 1, reps: 1, timeSec: 120 },
  howTo: [
    "Lie on your stomach for a minute and let your back relax.",
    "Slowly come up onto your elbows, with elbows under your shoulders.",
    "Let your belly and hips stay relaxed on the floor and breathe slowly.",
    "Stay here until the chime, then lower down gently."
  ],
  tips: ["This is the gentle first step before the full Press-Up. Many people with disc-related pain find it eases leg symptoms."],
  caution: "Stop if pain spreads further down your leg. Pain moving toward the middle of your back is usually a good sign. Check with your therapist.",
  variations: [
    { name: "Lying Flat", note: "Just lie on your stomach with a pillow under your hips. The easiest version." },
    { name: "Press-Up", note: "Push up onto straight arms with hips staying down. Harder." }
  ]
},
{
  id: "isometric-wrist-extension", name: "Wrist Extension Hold (Tennis Elbow)", region: "elbow", type: "strengthen",
  equipment: ["table"], position: "Sitting, forearm on a table", level: 1,
  muscles: "Wrist extensors, outer elbow tendon",
  helps: ["tennis-elbow", "wrist-pain"],
  dose: { sets: 5, reps: 1, hold: 30 },
  howTo: [
    "Sit with your forearm on a table, palm down, wrist just over the edge.",
    "Place your other hand on the back of your hand.",
    "Gently push your hand up into your other hand without letting it move.",
    "Hold steady and keep breathing. Rest a minute between holds."
  ],
  tips: ["A still hold often calms a sore tendon before you are ready for the moving version."],
  caution: "Use a medium effort. A little discomfort is fine, sharp pain is not.",
  variations: [
    { name: "Elbow Bent", note: "Do it with your elbow bent at your side. Easier." },
    { name: "Eccentric Wrist Extension", note: "Move on to the slow lowering version with a light weight." }
  ]
},
{
  id: "seated-marching", name: "Seated Marching", region: "hip", type: "strengthen",
  equipment: ["chair"], position: "Sitting tall in a sturdy chair", level: 1,
  muscles: "Hip flexors, core",
  helps: ["general", "post-surgery", "balance-falls"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Sit near the front of a sturdy chair with your feet flat and back tall.",
    "Hold the sides of the seat if you like.",
    "Lift one knee a few inches, then lower it slowly.",
    "Switch legs, like marching in place while sitting."
  ],
  tips: ["A safe way to build leg strength when standing exercise is not possible yet."],
  caution: "Keep your back tall. Do not lean back to lift the knee higher.",
  variations: [
    { name: "Ankle Weights", note: "Add light ankle weights to make it harder." },
    { name: "Standing March", note: "March in place while holding a counter." }
  ]
}

);

// ----- type, routine and plan for Qi Gong -----
// Qi Gong moves count as Mobility, so there is no separate Qi Gong filter or routine type.
if (window.TEMPLATES && !window.TEMPLATES.some(t => t.id === "tpl-qigong-10")) {
  window.TEMPLATES.push({
    id: "tpl-qigong-10", name: "10-Minute Qi Gong", conditions: ["general"],
    desc: "Slow, flowing movement and deep breathing to loosen up, steady your balance and calm your mind. Good on its own or after any routine.",
    items: ["qg-bounce-shake", "qg-arm-swings", "qg-rowing-boat", "qg-cloud-hands", "qg-belly-tapping", "qg-self-massage"]
  });
}
if (window.TEMPLATE_GROUPS && !window.TEMPLATE_GROUPS.some(g => g.id === "tg-qigong")) {
  window.TEMPLATE_GROUPS.push({ id: "tg-qigong", name: "Qi Gong", icon: "leaf", color: "teal", blurb: "Gentle flowing movement and breathing", templates: ["tpl-qigong-10"] });
}
