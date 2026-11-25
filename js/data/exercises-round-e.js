// MoveWell exercise database, Part 13: core and lower back
// Instructions are written for MoveWell. Loads after exercises-round-d.js.

window.EXERCISES = window.EXERCISES || [];
(function () {
  const HARD = "Keep breathing and do not hold your breath. Stop if you feel sharp pain, dizziness, or chest pain.";
  const BONES = "Skip this if you have osteoporosis or have had a spinal fracture, unless your clinician says it is fine.";
  window.EXERCISES.push(
  {
    id: "crunch", name: "Crunch", region: "core", type: "strengthen",
    equipment: ["none"], position: "Lying on your back, knees bent", level: 2,
    muscles: "Abdominals",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 12 },
    howTo: [
      "Lie on your back with knees bent and feet flat.",
      "Rest your fingertips lightly behind your ears.",
      "Curl your head and shoulder blades a little way off the floor.",
      "Lower slowly."
    ],
    tips: ["Look toward the ceiling and keep space under your chin."],
    caution: "Do not pull on your neck. " + BONES + " " + HARD,
    variations: []
  },
  {
    id: "sit-up", name: "Sit-Up", region: "core", type: "strengthen",
    equipment: ["none"], position: "Lying on your back, knees bent", level: 2,
    muscles: "Abdominals, hip flexors",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 10 },
    howTo: [
      "Lie on your back with knees bent and feet flat.",
      "Rest your fingertips lightly behind your ears.",
      "Curl up until your chest comes toward your knees.",
      "Lower slowly, one part of your back at a time."
    ],
    tips: ["Anchor your feet only if you need to."],
    caution: "Do not pull on your neck or jerk up. Stop if your lower back hurts. " + BONES + " " + HARD,
    variations: []
  },
  {
    id: "knee-raise-machine", name: "Knee Raise Machine", region: "core", type: "lift",
    equipment: ["machine"], position: "Kneeling on the sliding seat", level: 2,
    muscles: "Lower abdominals, hip flexors",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 10 },
    howTo: [
      "Kneel on the sliding seat and rest your forearms on the pads.",
      "Pull your knees up the track toward your chest.",
      "Lower slowly."
    ],
    tips: ["Move smoothly without swinging."],
    caution: "Start with the lightest setting and get on and off carefully. " + BONES + " " + HARD,
    variations: []
  },
  {
    id: "suspension-knee-tuck", name: "Suspension Knee Tuck", region: "core", type: "lift",
    equipment: ["suspension"], position: "Plank with feet in straps", level: 3,
    muscles: "Abdominals, shoulders",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 8 },
    howTo: [
      "Put your feet in the strap loops and walk your hands out to a plank.",
      "Draw your knees toward your chest.",
      "Straighten your legs back to the plank.",
      "Step out of the straps carefully."
    ],
    tips: ["Keep your arms straight and your hips from sagging."],
    caution: "An advanced move. Check that the straps and anchor will hold your weight. " + HARD,
    variations: []
  },
  {
    id: "weighted-side-bend", name: "Weighted Side Bend", region: "core", type: "lift",
    equipment: ["dumbbell"], position: "Standing", level: 2,
    muscles: "Side abdominals",
    helps: ["strength-training"],
    dose: { sets: 2, reps: 12, perSide: true },
    howTo: [
      "Stand tall holding one weight by your side.",
      "Bend sideways toward the weight, a comfortable distance.",
      "Return to upright.",
      "Finish your reps, then switch hands."
    ],
    tips: ["Move straight to the side without leaning forward or back."],
    caution: "Use a light weight. " + BONES + " " + HARD,
    variations: []
  },
  {
    id: "cable-trunk-twist", name: "Cable Trunk Twist", region: "core", type: "lift",
    equipment: ["cable"], position: "Standing side-on to the cable", level: 2,
    muscles: "Side abdominals, core",
    helps: ["strength-training"],
    dose: { sets: 2, reps: 12, perSide: true },
    howTo: [
      "Stand side-on to a chest-height cable and hold the handle in both hands.",
      "With arms nearly straight, turn your body away from the cable.",
      "Let your back foot pivot.",
      "Return slowly."
    ],
    tips: ["Turn from your middle, not just your arms."],
    caution: "Use a light weight and a comfortable range. " + BONES + " " + HARD,
    variations: []
  },
  {
    id: "machine-trunk-twist", name: "Machine Trunk Twist", region: "core", type: "lift",
    equipment: ["machine"], position: "Seated at the machine", level: 2,
    muscles: "Side abdominals",
    helps: ["strength-training"],
    dose: { sets: 2, reps: 12, perSide: true },
    howTo: [
      "Sit at the machine and set a small, comfortable starting angle.",
      "Hold the handles or rest against the pads.",
      "Turn your body slowly to the other side.",
      "Return under control."
    ],
    tips: ["Light weight and smooth turns."],
    caution: "Never swing or start from a forced twist. " + BONES + " " + HARD,
    variations: []
  }
  );
})();

// ----- new versions: [name, how it differs, equipment if different, caution if needed] -----
(function () {
  const HARD = "Keep breathing and do not hold your breath. Stop if you feel sharp pain, dizziness, or chest pain.";
  const BONES = "Skip this if you have osteoporosis or have had a spinal fracture, unless your clinician says it is fine.";
  const BALL = "Make sure the ball and your feet will not slip. Have something steady nearby.";
  const HINGE = "Keep your back flat and the weight light. " + BONES + " " + HARD;
  const addTo = (id, list) => {
    const ex = window.EXERCISES.find(e => e.id === id);
    if (!ex) return;
    ex.variations = ex.variations || [];
    list.forEach(([name, note, equipment, caution]) => {
      if (ex.variations.some(x => x.name === name)) return;
      const v = { name, note };
      if (equipment) v.equipment = equipment;
      if (caution) v.caution = caution;
      ex.variations.push(v);
    });
  };

  addTo("abdominal-bracing", [
    ["Bracing with Heel Slides", "Lying down, brace gently while you slide one heel away and back, then the other."],
    ["Belly Draw-In Hold", "Breathe out, draw your belly button toward your spine, and hold while taking small breaths.", null, "Never hold your breath. Skip it during pregnancy, with a hernia, or soon after belly surgery."]
  ]);
  addTo("glute-bridge", [
    ["Bridge with Leg Straightening", "Hold the bridge and straighten one knee, set the foot down, then switch."],
    ["Bridge with Feet on Exercise Ball", "Rest your heels on an exercise ball and lift your hips.", ["ball"], BALL],
    ["Feet-Raised Bridge", "Rest your feet on a bench or step and lift your hips.", ["bench", "step"], "Use a support that cannot slide."]
  ]);
  addTo("side-plank-knees", [
    ["Side Plank with Top Leg Lift", "Hold the side plank and lift your top leg.", null, "A harder version. Keep the elbow under the shoulder, and skip it if your shoulder or hip hurts."]
  ]);
  addTo("standing-back-extension", [
    ["Counter Back Bend", "Lean the small of your back against a sturdy counter, hands on its edge, and bend back over it.", ["table"]]
  ]);
  addTo("chair-hamstring-stretch", [
    ["Standing Hamstring Stretch", "Rest one heel on a low step while holding a support, and tip forward from your hips.", ["step", "chair"], "Hold something steady. Stop at a gentle pull. After a hip replacement, follow your surgeon's limits."]
  ]);
  addTo("crunch", [
    ["Arms-Crossed Crunch", "Cross your arms on your chest as you curl up."],
    ["Arms-at-Sides Crunch", "Reach your hands along the floor toward your heels as you curl up."],
    ["Slant Bench Crunch", "Crunch on a bench that slopes down toward your head.", ["bench"], "Your head is lower than your hips. Skip it with blood pressure or eye concerns. " + BONES],
    ["Exercise Ball Crunch", "Lie with your lower back on an exercise ball and curl up.", ["ball"], BALL + " " + BONES],
    ["Weighted Crunch", "Hold a light weight on your chest as you crunch.", ["dumbbell"], "Use a light weight. " + BONES],
    ["Weight Press Crunch", "Press a light weight toward the ceiling as you crunch. Use one dumbbell or a bar.", ["dumbbell", "barbell"], "Grip securely, the weight is above you. " + BONES],
    ["Twisting Crunch", "Turn one shoulder toward the opposite knee as you curl up. Can be done on a slope or ball."],
    ["Side Crunch", "Let your bent knees rest to one side and curl your shoulders straight up."]
  ]);
  addTo("sit-up", [
    ["Arms-Crossed Sit-Up", "Cross your arms on your chest as you sit up."],
    ["Arms-at-Sides Sit-Up", "Keep your arms by your sides as you sit up."],
    ["Weighted Sit-Up", "Hold a light weight on your chest.", ["dumbbell"], "Add weight only when sit-ups are comfortable. " + BONES],
    ["Twisting Sit-Up", "Turn toward one knee near the top, switching sides."]
  ]);
  addTo("cable-crunch", [
    ["Seated Cable Crunch", "Sit with your back to a high cable and curl your chest down.", ["cable", "bench"]],
    ["Standing Cable Crunch", "Stand with the rope by your head and curl your chest toward your hips.", ["cable"]],
    ["Overhead Cable Crunch", "Hold the rope with your arms overhead as you curl forward.", ["cable"]],
    ["Twisting Cable Crunch", "Turn one elbow toward the opposite hip as you curl.", ["cable"]],
    ["Cable Side Crunch", "Stand side-on and bend your ribs toward your hip.", ["cable"]],
    ["Lying Machine Crunch", "Use a crunch machine where you lie back.", ["machine"]],
    ["Leg Raise Machine Crunch", "Use a seated machine that brings your knees up as you crunch.", ["machine"]],
    ["Side Leg Raise Machine Crunch", "Use that seated machine turned to one side.", ["machine"]]
  ]);
  addTo("knee-raise-machine", [
    ["Side Knee Raise Machine", "Turn your hips so your knees travel toward one side."]
  ]);
  addTo("hanging-leg-raise", [
    ["Ab Sling Leg Raise", "Rest your upper arms in padded slings that hang from the bar.", null, "Check the slings and bar will hold your weight. " + HARD],
    ["Twisting Leg Raise", "Turn your knees toward one side as you lift.", null, "Move without swinging. " + BONES + " " + HARD]
  ]);
  addTo("suspension-knee-tuck", [
    ["Twisting Suspension Knee Tuck", "Draw your knees toward one elbow, then the other."],
    ["Suspension Pull-Through", "Sit with your heels in the straps and hands on the floor, then lift your hips back between your arms.", null, "An advanced move that loads the shoulders and wrists. Check the straps and anchor first."]
  ]);
  addTo("weighted-side-bend", [
    ["Cable Side Bend", "Hold a low cable and bend away from it.", ["cable"]],
    ["Bench Side Bend", "Lie sideways on a slanted back bench and bend your trunk up and down.", ["bench"], "Secure your feet and move slowly. " + BONES],
    ["Exercise Ball Side Bend", "Lie sideways over an exercise ball with feet braced and lift your trunk.", ["ball"], BALL + " " + BONES],
    ["Suspension Side Bend", "Stand side-on holding straps overhead and let your hips shift, then pull back upright.", ["suspension"], "Check the straps and anchor first. " + BONES]
  ]);
  addTo("cable-trunk-twist", [
    ["Seated Cable Twist", "Sit on a bench side-on to the cable and turn.", ["cable", "bench"]],
    ["Cable Push-Pull", "Between two cables, push one handle forward as you pull the other back."]
  ]);
  addTo("machine-trunk-twist", [
    ["Kneeling Machine Twist", "Kneel on a twist machine and turn your hips and legs."],
    ["Lower-Body Machine Twist", "Sit with your chest still while the machine turns your legs."]
  ]);
  addTo("standing-torso-twists", [
    ["Stick Twist", "Rest a light stick across your shoulders and turn slowly side to side.", ["stick"]]
  ]);
  addTo("lower-trunk-rotation", [
    ["Pretzel Stretch", "Lie on your side, hold the top knee forward and the bottom ankle back, and roll your shoulders open.", null, "A deep stretch. Go gently. After hip or back surgery, ask first."]
  ]);
  addTo("deadlift", [
    ["Stiff-Leg Deadlift", "With knees nearly straight, hinge at your hips to lower the bar.", null, HINGE],
    ["Cable Stiff-Leg Deadlift", "Hinge holding a low cable.", ["cable"], HINGE],
    ["One-Arm Stiff-Leg Deadlift", "Hinge holding one dumbbell.", ["dumbbell"], HINGE],
    ["Machine Deadlift", "Use a deadlift machine, with knees bent or nearly straight.", ["machine"]],
    ["Smith Machine Deadlift", "Lift the Smith machine bar on its fixed track.", ["smith-machine"]]
  ]);
  addTo("good-morning", [
    ["Smith Machine Good Morning", "Do the movement under the Smith machine bar.", ["smith-machine"]]
  ]);
  addTo("back-extension", [
    ["Flat Bench Back Extension", "Lie face down with your hips at the end of a high flat bench and feet held, then raise your trunk.", ["bench"], "Be sure your feet are held securely. " + BONES + " " + HARD],
    ["Weighted Back Extension", "Hold a light weight on your chest.", ["bench", "dumbbell"], "Add weight only when the standard one is steady. " + BONES + " " + HARD],
    ["Seated Machine Back Extension", "Sit at a back machine and press back against the pad.", ["machine"]],
    ["Exercise Ball Back Extension", "Lie face down over an exercise ball with feet braced and lift your chest.", ["ball"], BALL + " " + BONES]
  ]);
})();
