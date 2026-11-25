// MoveWell exercise database, Part 9: gap fillers for home and everyday movement
// Instructions are written for MoveWell. Loads after exercises-added.js.

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ SHOULDER, CHEST, ARMS ============
{
  id: "table-slides", name: "Table Slides", region: "shoulder", type: "mobility",
  equipment: ["table", "towel"], position: "Seated at a table", level: 1,
  muscles: "Shoulder joint, shoulder muscles",
  helps: ["shoulder-pain", "frozen-shoulder", "rotator-cuff"],
  dose: { sets: 2, reps: 10, hold: 3 },
  howTo: [
    "Sit beside a table and rest your forearm on a folded towel.",
    "Slowly slide your arm forward, letting your body lean with it.",
    "Stop at a comfortable stretch and hold for a moment.",
    "Slide back to the start."
  ],
  tips: ["Let the table take the weight of your arm."],
  caution: "Go only as far as is comfortable. After shoulder surgery or a recent injury, follow the limits your surgeon or physical therapist gave you.",
  variations: []
},
{
  id: "stick-arm-raises", name: "Stick Arm Raises and Turns", region: "shoulder", type: "mobility",
  equipment: ["stick"], position: "Lying on back", level: 1,
  muscles: "Shoulder joint, rotator cuff",
  helps: ["shoulder-pain", "frozen-shoulder", "rotator-cuff"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Lie on your back holding a stick or broom handle with both hands.",
    "Use your stronger arm to guide the other arm up and overhead, then lower slowly.",
    "Next, bend your elbows and keep them by your sides.",
    "Push the stick sideways so the sore arm turns outward, then return."
  ],
  tips: ["The arm you are working stays relaxed. The other arm does the work."],
  caution: "Stop at a comfortable stretch, never push into sharp pain. After surgery or a recent injury, ask your doctor or physical therapist first.",
  variations: []
},
{
  id: "wall-push-up", name: "Wall Push-Up", region: "chest", type: "strengthen",
  equipment: ["wall"], position: "Standing", level: 1,
  muscles: "Chest, shoulders, triceps",
  helps: ["general", "strength-training"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Stand an arm's length from a wall.",
    "Place your hands on the wall at chest height, a little wider than your shoulders.",
    "Bend your elbows and bring your chest toward the wall, body in one straight line.",
    "Push back to the start."
  ],
  tips: ["Step your feet closer to the wall to make it easier."],
  caution: "Use a dry floor and shoes that grip. Stop if you feel chest pain, dizziness or sharp pain.",
  variations: []
},
{
  id: "wall-biceps-stretch", name: "Wall Biceps Stretch", region: "arms", type: "stretch",
  equipment: ["wall"], position: "Standing", level: 1,
  muscles: "Biceps, front of the shoulder",
  helps: ["general", "posture"],
  dose: { sets: 1, reps: 3, hold: 30, perSide: true },
  howTo: [
    "Stand side-on to a wall.",
    "Reach back and place your hand flat on the wall, arm straight, at shoulder height or lower.",
    "Slowly turn your body away until you feel a stretch in the front of your arm.",
    "Hold, breathe, then relax."
  ],
  tips: ["A lower hand gives a softer stretch."],
  caution: "Lower your hand if the shoulder pinches. Skip this if your shoulder has slipped out of place before, unless a clinician has cleared it.",
  variations: []
},

// ============ HANDS ============
{
  id: "thumb-stretch", name: "Thumb Stretch", region: "wrist", type: "stretch",
  equipment: ["none"], position: "Seated", level: 1,
  muscles: "Thumb muscles",
  helps: ["wrist-pain", "arthritis-hand"],
  dose: { sets: 1, reps: 3, hold: 15, perSide: true },
  howTo: [
    "Rest your forearm on a table with your palm up.",
    "Bring your thumb across your palm toward your little finger, helping lightly with the other hand.",
    "Hold, then let go.",
    "Now ease the thumb out, away from your palm, and hold."
  ],
  tips: ["A light pull is enough."],
  caution: "Do not force a swollen or painful joint. Stop if you feel sharp pain or tingling.",
  variations: []
},
{
  id: "finger-lifts", name: "Finger Lifts", region: "wrist", type: "mobility",
  equipment: ["table"], position: "Seated at a table", level: 1,
  muscles: "Finger muscles",
  helps: ["arthritis-hand", "wrist-pain"],
  dose: { sets: 1, reps: 10, hold: 2, perSide: true },
  howTo: [
    "Rest your hand flat on a table, palm down.",
    "Lift one finger while the others stay down.",
    "Hold for a moment and lower it.",
    "Work through each finger and your thumb."
  ],
  tips: ["Small lifts are fine. Some fingers move less than others."],
  caution: "Move gently and stop if a joint hurts or swells.",
  variations: []
},

// ============ HIP AND KNEE ============
{
  id: "reverse-clamshell", name: "Reverse Clamshell", region: "hip", type: "strengthen",
  equipment: ["none"], position: "Side-lying", level: 1,
  muscles: "Hip muscles that turn the leg inward",
  helps: ["hip-pain", "knee-pain"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Lie on your side with your knees bent and together, head supported.",
    "Keep your knees touching and lift your top foot toward the ceiling.",
    "Pause, then lower slowly."
  ],
  tips: ["Keep your hips stacked. Do not roll backward."],
  caution: "The movement is small. After a hip replacement or hip surgery, ask your surgeon first.",
  variations: []
},
{
  id: "seated-hip-turns-band", name: "Seated Hip Turns with Band", region: "hip", type: "strengthen",
  equipment: ["band", "chair"], position: "Seated", level: 2,
  muscles: "Hip rotator muscles",
  helps: ["hip-pain", "knee-pain"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Sit tall on a sturdy chair. Anchor a band to one side and loop it around your ankle.",
    "Keep your knee still and swing your foot away from the anchor.",
    "Return slowly.",
    "Move the anchor to the other side and repeat the opposite way."
  ],
  tips: ["Your thigh stays on the chair. Only the lower leg swings."],
  caution: "Check that the band is secure. After a hip replacement or hip surgery, ask your surgeon first.",
  variations: []
},
{
  id: "heel-prop-knee", name: "Heel Prop Knee Straightening", region: "knee", type: "stretch",
  equipment: ["towel"], position: "Lying on back or seated with leg up", level: 1,
  muscles: "Back of the knee",
  helps: ["knee-pain", "knee-oa", "post-surgery"],
  dose: { sets: 1, timeSec: 120, perSide: true },
  howTo: [
    "Lie down or sit with your leg out straight.",
    "Rest your heel on a rolled towel so your knee and calf hang free.",
    "Relax and let gravity slowly straighten the knee."
  ],
  tips: ["Start with a shorter time and build up."],
  caution: "Do not press down on the knee. Stop for sharp pain or numbness. After surgery, follow your surgeon's instructions.",
  variations: []
},
{
  id: "face-down-knee-bend", name: "Face-Down Knee Bend", region: "knee", type: "strengthen",
  equipment: ["none"], position: "Lying face down", level: 1,
  muscles: "Hamstrings",
  helps: ["knee-pain", "knee-oa"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Lie on your stomach with your legs straight.",
    "Bend one knee, bringing your heel toward your buttock.",
    "Lower it slowly."
  ],
  tips: ["Keep your hips resting on the floor or bed."],
  caution: "Ease off if your back arches, your thigh cramps or the knee hurts.",
  variations: []
},
{
  id: "band-leg-press", name: "Band Leg Press", region: "knee", type: "strengthen",
  equipment: ["band", "chair"], position: "Seated", level: 1,
  muscles: "Front of the thigh, buttocks",
  helps: ["knee-pain", "knee-oa", "general"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Sit on a sturdy chair and loop a band under the ball of one foot.",
    "Hold both ends near your hips and bend that knee toward you.",
    "Press your foot forward until the leg is nearly straight.",
    "Return slowly."
  ],
  tips: ["Wear a shoe so the band stays put."],
  caution: "Check the band for tears and hold it firmly. Do not snap the knee straight.",
  variations: []
},

// ============ LOWER BACK AND CORE ============
{
  id: "log-roll", name: "Log Roll (Getting In and Out of Bed)", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "Lying on a bed", level: 1,
  muscles: "Trunk and arms",
  helps: ["low-back-pain", "disc", "sciatica"],
  dose: { sets: 1, reps: 5 },
  howTo: [
    "Lie on your back and bend your knees.",
    "Roll onto your side, moving shoulders, hips and knees together.",
    "Lower your feet off the bed while you push up to sitting with your arms.",
    "To lie down, do the same steps in reverse."
  ],
  tips: ["Move as one piece, without twisting."],
  caution: "Sit for a moment before you stand, in case you feel dizzy. Make sure you are not too close to the far edge of the bed.",
  variations: []
},
{
  id: "pelvic-clock", name: "Pelvic Clock", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "Lying on back", level: 1,
  muscles: "Lower back and belly muscles",
  helps: ["low-back-pain"],
  dose: { sets: 1, reps: 10 },
  howTo: [
    "Lie on your back with knees bent. Picture a clock on your lower belly, with 12 toward your head.",
    "Gently tip your hips toward 12, then toward 6.",
    "Tip toward 3, then toward 9.",
    "When that feels smooth, circle slowly around the clock both ways."
  ],
  tips: ["Keep the movement small and keep breathing."],
  caution: "Stay in a comfortable range. Stop if pain increases or travels down your leg.",
  variations: []
},
{
  id: "knee-fall-outs", name: "Knee Fall-Outs", region: "lower-back", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 1,
  muscles: "Deep belly muscles, inner thighs",
  helps: ["low-back-pain", "hip-pain"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Lie on your back with knees bent and feet flat.",
    "Gently tighten your belly.",
    "Let one knee slowly lower out to the side while your hips stay still.",
    "Bring it back to the middle."
  ],
  tips: ["Rest your hands on your hip bones to feel whether they move."],
  caution: "Only go as far as you can without your hips rolling. Stop if your back or groin hurts.",
  variations: []
},
{
  id: "lying-march", name: "Lying March", region: "lower-back", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 1,
  muscles: "Deep belly muscles, hip flexors",
  helps: ["low-back-pain", "general"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Lie on your back with knees bent and feet flat.",
    "Gently tighten your belly.",
    "Lift one foot a few inches, then set it down.",
    "Switch legs, keeping your hips still."
  ],
  tips: ["Slow is better than high."],
  caution: "Keep breathing. Stop if your back pain increases.",
  variations: []
},
{
  id: "tabletop-leg-hold", name: "Tabletop Leg Hold", region: "core", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 2,
  muscles: "Belly muscles, hip flexors",
  helps: ["general"],
  dose: { sets: 3, hold: 15, reps: 1 },
  howTo: [
    "Lie on your back with knees bent.",
    "Tighten your belly and lift one leg, then the other, until your knees are over your hips.",
    "Hold with your shins level, breathing steadily.",
    "Lower one foot at a time."
  ],
  tips: ["Shorten the hold if your lower back starts to lift."],
  caution: "Stop if your back arches or hurts. Do not hold your breath.",
  variations: []
},
{
  id: "face-down-arm-leg-raise", name: "Face-Down Arm and Leg Raise", region: "lower-back", type: "strengthen",
  equipment: ["none"], position: "Lying face down", level: 2,
  muscles: "Back muscles, buttocks, shoulders",
  helps: ["low-back-pain", "posture"],
  dose: { sets: 2, reps: 8, hold: 3, perSide: true },
  howTo: [
    "Lie on your stomach with arms stretched overhead.",
    "Lift one arm and the opposite leg a few inches.",
    "Hold, then lower.",
    "Switch to the other arm and leg."
  ],
  tips: ["Look at the floor. A pillow under your belly can feel better."],
  caution: "Lift only a little. Skip this if arching your back hurts.",
  variations: []
},
{
  id: "rock-back", name: "Hands-and-Knees Rock Back", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "On hands and knees", level: 1,
  muscles: "Lower back, hips",
  helps: ["low-back-pain", "hip-pain"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Get on your hands and knees, hands under shoulders and knees under hips.",
    "Slowly rock your hips back toward your heels.",
    "Stop when you feel a comfortable stretch, then return."
  ],
  tips: ["A cushion under your knees helps."],
  caution: "Go only as far as your back, hips and knees allow comfortably.",
  variations: []
},
{
  id: "seated-forward-bend", name: "Seated Forward Bend Stretch", region: "lower-back", type: "stretch",
  equipment: ["chair"], position: "Seated", level: 1,
  muscles: "Lower back",
  helps: ["low-back-pain"],
  dose: { sets: 1, reps: 3, hold: 20 },
  howTo: [
    "Sit on a sturdy chair with your feet flat and apart.",
    "Slide your hands down your legs toward the floor.",
    "Let your back relax and hold.",
    "Push on your thighs to sit back up slowly."
  ],
  tips: ["Reach only as low as feels easy."],
  caution: "Come up slowly in case you feel dizzy. Skip this if bending makes back or leg pain worse, or if you were told to avoid bending, such as with weak bones or after back surgery.",
  variations: []
},
{
  id: "pelvic-floor-squeeze", name: "Pelvic Floor Squeeze", region: "core", type: "strengthen",
  equipment: ["none"], position: "Seated or lying", level: 1,
  muscles: "Pelvic floor muscles",
  helps: ["general"],
  dose: { sets: 3, reps: 10, hold: 5 },
  howTo: [
    "Sit or lie comfortably.",
    "Squeeze the muscles you would use to hold in urine or gas.",
    "Hold while breathing normally. Keep your buttocks and thighs relaxed.",
    "Let go completely and rest just as long."
  ],
  tips: ["If a long hold is hard, begin with two or three seconds."],
  caution: "Do not practice by stopping your urine midstream. Stop if it causes pain, and talk to a doctor.",
  variations: []
},

// ============ FEET ============
{
  id: "toe-spreads", name: "Toe Spreads and Big Toe Lifts", region: "ankle-foot", type: "strengthen",
  equipment: ["none"], position: "Seated, feet bare", level: 1,
  muscles: "Foot and toe muscles",
  helps: ["plantar-fasciitis", "balance-falls"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Sit with your foot flat on the floor.",
    "Spread your toes apart, then relax.",
    "Lift your big toe while the other toes stay down.",
    "Then keep the big toe down and lift the others."
  ],
  tips: ["It is normal for this to feel awkward at first."],
  caution: "Rest if your foot cramps.",
  variations: []
},
{
  id: "big-toe-stretch", name: "Big Toe Stretch", region: "ankle-foot", type: "stretch",
  equipment: ["chair"], position: "Seated", level: 1,
  muscles: "Big toe joint, sole of the foot",
  helps: ["plantar-fasciitis"],
  dose: { sets: 1, reps: 3, hold: 20, perSide: true },
  howTo: [
    "Sit and rest one ankle on the opposite knee.",
    "Hold your big toe and gently bend it up until you feel a stretch.",
    "Hold, then gently bend it down and hold."
  ],
  tips: ["If you cannot cross your leg, rest your foot on a low stool."],
  caution: "Do not stretch a toe that is red, hot or swollen. After a hip replacement, do not cross your leg without your surgeon's approval.",
  variations: []
},

// ============ BALANCE AND EVERYDAY ============
{
  id: "floor-get-up", name: "Getting Up From the Floor", region: "balance", type: "balance",
  equipment: ["chair"], position: "Floor to chair", level: 2,
  muscles: "Legs, arms, trunk",
  helps: ["balance-falls", "general"],
  dose: { sets: 1, reps: 3 },
  howTo: [
    "Start on the floor near a sturdy chair. Roll onto your side.",
    "Push up with your arms to sit on your hip, then move onto hands and knees.",
    "Put your hands on the chair seat and bring one foot forward, flat on the floor.",
    "Push up with your arms and legs, then turn and sit.",
    "To get down for practice, do the steps in reverse."
  ],
  tips: ["Lead with your stronger leg."],
  caution: "Practice with someone nearby at first. After a real fall, if you hit your head or have bad pain, do not try to get up. Call 911 or your local emergency number.",
  variations: []
},
{
  id: "turning-in-circle", name: "Turning in a Circle", region: "balance", type: "balance",
  equipment: ["none"], position: "Standing at a counter", level: 2,
  muscles: "Balance system, legs",
  helps: ["balance-falls"],
  dose: { sets: 2, reps: 4 },
  howTo: [
    "Stand tall next to a kitchen counter.",
    "Take small steps to turn all the way around.",
    "Pause until you feel steady.",
    "Turn the other way."
  ],
  tips: ["Pick your feet up. Do not pivot on one foot."],
  caution: "Keep the counter within reach. Sit down if you feel dizzy. New or severe dizziness needs a doctor.",
  variations: []
}

);

// ----- new versions of exercises that already exist -----
(function () {
  const addTo = (id, v) => {
    const ex = window.EXERCISES.find(e => e.id === id);
    if (!ex) return;
    ex.variations = ex.variations || [];
    if (!ex.variations.some(x => x.name === v.name)) ex.variations.push(v);
  };
  addTo("walking-program", {
    name: "Walking with Head Turns",
    note: "As you walk, turn your head to look left, then right, every few steps.",
    caution: "Walk beside a wall or counter at first. Stop if you feel dizzy or unsteady."
  });
  addTo("step-up", {
    name: "Stair Practice",
    note: "Walk up and down a few stairs holding the rail. Lead up with your stronger leg, and down with your sore or weaker leg.",
    caution: "Always hold the rail and use good light. Have someone nearby if you are unsteady."
  });
  addTo("quad-stretch", {
    name: "Face-Down Thigh Stretch with Strap",
    note: "Lie on your stomach with a strap or towel around one ankle. Pull your heel toward your buttock until you feel a stretch, hold, then switch.",
    equipment: ["towel"],
    caution: "Pull gently. Stop if your knee or back hurts."
  });
  addTo("breathing-diaphragm", {
    name: "Pursed-Lip Breathing",
    note: "Sit tall. Breathe in through your nose for a count of two, then out through puckered lips for a count of four.",
    caution: "Do not force the breath. Sudden or severe trouble breathing is an emergency: call 911 or your local emergency number."
  });
  addTo("wrist-curls", {
    name: "Wrist Side Lifts with Light Weight",
    note: "Rest your forearm on a table, thumb up, hand past the edge, holding a light weight. Tip your hand up toward the ceiling, then lower it.",
    caution: "Use a very light weight and stop if the thumb side of your wrist hurts."
  });
})();
