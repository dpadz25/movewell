// MoveWell exercise database, Part 8: gap fillers from the library review
// Nerve glides, relaxation, neck strength, plus seated and relaxing routines.
// Kept in its own file so the original data files stay untouched. Loads after templates.js.

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ NERVE GLIDES ============
{
  id: "supine-sciatic-glide", name: "Lying Sciatic Nerve Glide", region: "lower-back", type: "nerve-glide",
  equipment: ["towel"], position: "Lying on back", level: 1,
  muscles: "Sciatic nerve, back of the thigh",
  helps: ["sciatica", "disc", "low-back-pain"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Lie on your back and hold behind one thigh with both hands (or loop a towel behind it), knee bent.",
    "Slowly straighten the knee until you feel a gentle pull, not pain.",
    "As you straighten the knee, point your toes away. As you bend it, pull your toes back toward you.",
    "Keep it smooth and rhythmic, like flossing the nerve back and forth."
  ],
  tips: ["A good choice if sitting on a chair for the Nerve Floss is uncomfortable."],
  caution: "Nerves do not like to be stretched hard. Keep it gentle and stop if tingling gets stronger or lasts.",
  variations: [
    { name: "Ankle Only", note: "Keep the knee bent and just move the ankle up and down. Easiest." },
    { name: "Sciatic Nerve Floss", note: "The seated version, once this feels easy." }
  ]
},
{
  id: "neck-arm-nerve-slider", name: "Neck and Arm Nerve Slider", region: "neck", type: "nerve-glide",
  equipment: ["none"], position: "Sitting or standing tall", level: 1,
  muscles: "Nerves from the neck into the arm",
  helps: ["tos", "carpal-tunnel", "neck-pain"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Hold one arm out to the side at shoulder height, palm up, elbow slightly bent.",
    "Tilt your head toward that arm as you gently bend your wrist back.",
    "Then tilt your head away as you let the wrist relax.",
    "Move the head and wrist together, slowly, so the nerve slides instead of stretching."
  ],
  tips: ["The head and hand move in opposite directions on purpose. That is what makes it gentle."],
  caution: "Stop if you feel strong tingling or numbness that lingers.",
  variations: [
    { name: "Arm Lower", note: "Hold the arm lower, at waist height. Gentler." }
  ]
},

// ============ RELAXATION AND RECOVERY ============
{
  id: "body-scan", name: "Body Scan Relaxation", region: "balance", type: "recovery",
  equipment: ["none"], position: "Lying on back or sitting", level: 1,
  muscles: "Whole body, nervous system",
  helps: ["general", "neck-pain", "low-back-pain"],
  dose: { sets: 1, reps: 0, timeSec: 180 },
  howTo: [
    "Lie or sit comfortably and close your eyes if you like.",
    "Breathe slowly through your nose.",
    "Bring your attention to your feet, then slowly move up: legs, hips, belly, back, shoulders, arms, neck, face.",
    "At each spot, notice any tightness and let it soften as you breathe out."
  ],
  tips: ["There is no wrong way to do this. If your mind wanders, gently come back to where you were."],
  variations: []
},
{
  id: "progressive-relaxation", name: "Progressive Muscle Relaxation", region: "balance", type: "recovery",
  equipment: ["none"], position: "Lying on back or sitting", level: 1,
  muscles: "Whole body",
  helps: ["general", "neck-pain", "headache"],
  dose: { sets: 1, reps: 0, timeSec: 300 },
  howTo: [
    "Squeeze both hands into fists for about 5 seconds, then let go and relax for 15 seconds.",
    "Do the same with your shoulders (shrug up), face (scrunch), stomach (pull in) and legs (point toes).",
    "Notice the difference between tight and loose each time.",
    "Finish with a few slow breaths, fully relaxed."
  ],
  tips: ["Great before bed or after a stressful day. Stress tightens muscles and can make aches feel worse."],
  caution: "Skip any area that hurts to tense, and just relax it instead.",
  variations: []
},
{
  id: "supported-rest-90-90", name: "Legs on a Chair Rest", region: "lower-back", type: "recovery",
  equipment: ["chair"], position: "Lying on back, calves on a chair seat", level: 1,
  muscles: "Lower back, hips",
  helps: ["low-back-pain", "sciatica", "disc"],
  dose: { sets: 1, reps: 0, timeSec: 180 },
  howTo: [
    "Lie on your back on the floor with your calves resting on a chair seat.",
    "Your hips and knees should both be bent about 90 degrees.",
    "Let your arms rest by your sides and your back sink into the floor.",
    "Breathe slowly into your belly and stay until the chime."
  ],
  tips: ["A classic position to calm a flared-up back. Many people feel relief within a few minutes."],
  caution: "Get up slowly by rolling onto your side first.",
  variations: [
    { name: "Pillows Instead", note: "Stack pillows under your knees if a chair is not handy." }
  ]
},

// ============ NECK STRENGTH ============
{
  id: "lying-head-lift", name: "Chin Tuck Head Lift (Lying)", region: "neck", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 2,
  muscles: "Deep front neck muscles",
  helps: ["neck-pain", "headache", "posture", "upper-cross"],
  dose: { sets: 2, reps: 8, hold: 5 },
  howTo: [
    "Lie on your back with knees bent.",
    "Gently tuck your chin, like making a double chin.",
    "Keeping the tuck, lift your head about an inch off the floor.",
    "Hold, then lower slowly and relax."
  ],
  tips: ["The next step up from the Head Nod. Keep the chin tucked the whole time."],
  caution: "Lower down if your chin pokes forward or your neck shakes. Build up slowly.",
  variations: [
    { name: "Head Nod", note: "Just the nod with your head resting on the floor. Easier." }
  ]
},
{
  id: "prone-head-lift", name: "Lying Neck Lift (Face Down)", region: "neck", type: "strengthen",
  equipment: ["towel"], position: "Lying on stomach, forehead on a folded towel", level: 2,
  muscles: "Back of the neck, upper back",
  helps: ["neck-pain", "posture", "upper-cross"],
  dose: { sets: 2, reps: 8, hold: 3 },
  howTo: [
    "Lie face down with your forehead resting on a folded towel and arms by your sides.",
    "Gently tuck your chin.",
    "Lift your head just off the towel, keeping your eyes looking at the floor.",
    "Hold, then lower slowly."
  ],
  tips: ["Think of lengthening the back of your neck as you lift, not tipping your head back."],
  caution: "Small lift only. Do not look up.",
  variations: [
    { name: "On Hands and Knees", note: "Do the same small lift on hands and knees. Easier for some people." }
  ]
}

);

// ----- ready-made plans -----
(function () {
  const add = (t) => { if (window.TEMPLATES && !window.TEMPLATES.some(x => x.id === t.id)) window.TEMPLATES.push(t); };
  add({
    id: "tpl-seated", name: "Seated Strength and Stretch", conditions: ["post-surgery"],
    desc: "Everything is done from a sturdy chair. For days when standing is hard, after surgery, or when balance is shaky.",
    items: ["breathing-diaphragm", "chin-tuck", "shoulder-shrug-roll", "seated-thoracic-extension-chair", "seated-marching",
      "seated-knee-extension", "ankle-pumps", "chair-hamstring-stretch", "chair-figure4", "chair-aerobics"]
  });
  add({
    id: "tpl-relax", name: "Relax and Unwind", conditions: [],
    desc: "Slow breathing and gentle positions to let tension go. Good before bed or after a hard day.",
    items: ["breathing-diaphragm", "supported-rest-90-90", "childs-pose", "progressive-relaxation", "box-breathing", "body-scan"]
  });
  const grp = (g) => { if (window.TEMPLATE_GROUPS && !window.TEMPLATE_GROUPS.some(x => x.id === g.id)) window.TEMPLATE_GROUPS.push(g); };
  const gentle = (window.TEMPLATE_GROUPS || []).find(g => g.id === "tg-gentle");
  if (gentle && !gentle.templates.includes("tpl-seated")) gentle.templates.push("tpl-seated");
  grp({ id: "tg-relax", name: "Relax and Recover", icon: "heart", color: "blue", blurb: "Breathing and calm positions", templates: ["tpl-relax"] });
})();
