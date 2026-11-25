// MoveWell exercise database, Part 14: hips, glutes and thighs
// Instructions are written for MoveWell. Loads after exercises-round-e.js.

window.EXERCISES = window.EXERCISES || [];
(function () {
  const HARD = "Keep breathing and do not hold your breath. Stop if you feel sharp pain, dizziness, or chest pain.";
  const HIP = "After a hip replacement, follow the movement limits your surgeon gave you.";
  const BONES = "Skip this if you have osteoporosis or have had a spinal fracture, unless your clinician says it is fine.";
  window.EXERCISES.push(
  {
    id: "buttock-squeeze", name: "Buttock Squeeze", region: "hip", type: "strengthen",
    equipment: ["none"], position: "Lying on your back", level: 1,
    muscles: "Glutes",
    helps: ["hip-pain", "low-back-pain", "post-surgery", "general"],
    dose: { sets: 2, reps: 10, hold: 5 },
    howTo: [
      "Lie on your back with your legs straight or knees bent.",
      "Squeeze your buttocks together.",
      "Hold while breathing normally.",
      "Relax and repeat."
    ],
    tips: ["Keep your back relaxed."],
    caution: "Do not hold your breath. After surgery, only do this when your surgeon or therapist says you can.",
    variations: []
  },
  {
    id: "lying-leg-slide-out", name: "Lying Leg Slide Out to the Side", region: "hip", type: "mobility",
    equipment: ["none"], position: "Lying on your back", level: 1,
    muscles: "Outer hip",
    helps: ["hip-pain", "post-surgery", "general"],
    dose: { sets: 2, reps: 10, perSide: true },
    howTo: [
      "Lie on your back with legs straight and toes pointing up.",
      "Slide one leg out to the side.",
      "Slide it back to the middle, without crossing the other leg.",
      "Repeat, then switch legs."
    ],
    tips: ["A smooth surface or a plastic bag under your heel helps it slide."],
    caution: "Keep toes pointing up. " + HIP,
    variations: []
  },
  {
    id: "knee-squeeze-pillow", name: "Knee Squeeze with Pillow", region: "hip", type: "strengthen",
    equipment: ["none"], position: "Lying on your back, knees bent", level: 1,
    muscles: "Inner thighs",
    helps: ["hip-pain", "knee-pain", "post-surgery", "general"],
    dose: { sets: 2, reps: 10, hold: 5 },
    howTo: [
      "Lie on your back with knees bent and a pillow between them.",
      "Squeeze the pillow with your knees.",
      "Hold while breathing normally.",
      "Relax and repeat."
    ],
    tips: ["Use a steady, medium effort."],
    caution: "Ease off if you feel groin pain. " + HIP,
    variations: []
  },
  {
    id: "side-lying-inner-thigh-lift", name: "Side-Lying Inner Thigh Lift", region: "hip", type: "strengthen",
    equipment: ["none"], position: "Lying on your side", level: 2,
    muscles: "Inner thighs",
    helps: ["hip-pain", "general"],
    dose: { sets: 2, reps: 10, perSide: true },
    howTo: [
      "Lie on your side with the bottom leg straight.",
      "Bend the top leg and place that foot on the floor in front.",
      "Lift the bottom leg a few inches.",
      "Lower slowly. Switch sides."
    ],
    tips: ["The lift is small."],
    caution: "Stop if you feel groin pain. This crosses the leg past the middle, so after a hip replacement ask your surgeon first.",
    variations: []
  },
  {
    id: "single-leg-squat", name: "Single-Leg Squat", region: "knee", type: "strengthen",
    equipment: ["none"], position: "Standing on one leg", level: 3,
    muscles: "Thighs, glutes",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 5, perSide: true },
    howTo: [
      "Stand on one leg beside something steady.",
      "Reach the other leg forward.",
      "Sit your hips back and bend the standing knee as far as you can control.",
      "Press back up."
    ],
    tips: ["Start with a shallow bend."],
    caution: "An advanced move. Keep the knee over the middle of your foot and have a support in reach. " + HARD,
    variations: []
  },
  {
    id: "machine-leg-push-back", name: "Machine Leg Push-Back", region: "hip", type: "lift",
    equipment: ["machine"], position: "At a hip machine", level: 2,
    muscles: "Glutes",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 12, perSide: true },
    howTo: [
      "Set the pad against the back of your thigh and hold the handles.",
      "Push your leg down and back.",
      "Return slowly."
    ],
    tips: ["Keep your trunk still."],
    caution: "Do not arch your lower back. " + HARD,
    variations: []
  },
  {
    id: "double-leg-raise", name: "Double Leg Raise", region: "core", type: "strengthen",
    equipment: ["none", "bench"], position: "Lying on the floor or a bench", level: 2,
    muscles: "Lower abdominals, hip flexors",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 10 },
    howTo: [
      "Lie on your back and hold something steady or rest your hands by your hips.",
      "With knees bent, lift both legs toward your chest.",
      "Lower slowly without letting your lower back arch."
    ],
    tips: ["Bending the knees more makes it lighter."],
    caution: "Stop if your lower back hurts or arches. " + BONES + " " + HARD,
    variations: []
  },
  {
    id: "machine-front-leg-raise", name: "Machine Front Leg Raise", region: "hip", type: "lift",
    equipment: ["machine"], position: "At a hip machine", level: 2,
    muscles: "Hip flexors",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 12, perSide: true },
    howTo: [
      "Set the pad against the front of your thigh and hold the handles.",
      "Raise your leg forward.",
      "Lower slowly."
    ],
    tips: ["Stand tall without leaning back."],
    caution: "Use a light weight. " + HARD,
    variations: []
  },
  {
    id: "reverse-nordic-curl", name: "Reverse Nordic Curl", region: "knee", type: "strengthen",
    equipment: ["none"], position: "Kneeling upright", level: 3,
    muscles: "Front of the thighs",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 5 },
    howTo: [
      "Kneel upright on a soft pad.",
      "Keeping hips straight, lean back from your knees a little way.",
      "Pull yourself back upright with your thighs."
    ],
    tips: ["Squeeze your buttocks and start with a very small lean."],
    caution: "An advanced move that loads the knees heavily. Skip it with knee trouble or after knee surgery. " + HARD,
    variations: []
  },
  {
    id: "glute-ham-raise", name: "Glute-Ham Raise", region: "knee", type: "lift",
    equipment: ["machine"], position: "On a glute-ham bench", level: 3,
    muscles: "Hamstrings, glutes",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 6 },
    howTo: [
      "Set your feet in the holders and your thighs on the pad.",
      "With your body straight, lower your trunk forward under control.",
      "Bend your knees to pull yourself back up.",
      "Place your hands behind your hips or across your chest."
    ],
    tips: ["Move slowly. Shorten the range until you are strong enough."],
    caution: "An advanced move. Adjust and check the bench first, and stop if your hamstring cramps. " + HARD,
    variations: []
  }
  );
})();

// ----- new versions: [name, how it differs, equipment if different, caution if needed] -----
(function () {
  const HARD = "Keep breathing and do not hold your breath. Stop if you feel sharp pain, dizziness, or chest pain.";
  const HIP = "After a hip replacement, follow the movement limits your surgeon gave you.";
  const BONES = "Skip this if you have osteoporosis or have had a spinal fracture, unless your clinician says it is fine.";
  const HANG = "Check that the straps and anchor will hold your weight.";
  const RACK = "Squat inside a rack with safety pins set. " + HARD;
  const LOAD = "Add weight only when the bodyweight move is steady. " + HARD;
  const PRESS = "Do not lock your knees hard, and keep your hips on the pad. " + HARD;
  const HINGE = "Keep your back flat and the weight light. " + BONES + " " + HARD;
  const BALANCE = "Keep something steady within reach. ";
  const STRETCH = "Gentle effort only. Never bounce or force it. ";
  const NORDIC = "Advanced. Start with very few reps and expect soreness. ";
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

  // ----- hip and knee basics -----
  addTo("figure-4-stretch", [
    ["Knee to Opposite Shoulder Stretch", "Lie on your back and guide one knee toward the opposite shoulder with your hands.", ["none"]],
    ["Squeeze-and-Relax Glute Stretch", "In the stretch, press your leg gently into your hands for 5 seconds, relax, then ease a little further.", null, STRETCH + HIP],
    ["Wall Figure-4 Stretch", "Lie on your back with one foot on a wall and cross the other ankle over that knee.", ["wall"]],
    ["Floor Seated Glute Stretch", "Sit on the floor, cross one ankle over the other knee and bring your chest toward your legs."],
    ["Seated Pretzel Stretch", "Sit on the floor, cross one foot over the other leg and turn toward the raised knee.", null, "Turn gently. " + HIP + " " + BONES],
    ["Machine Glute Stretch", "Use a stretch machine that holds your crossed leg while you lean in.", ["machine"]]
  ]);
  addTo("quad-set", [
    ["Quad Set with Heel Propped", "Rest your heel on a rolled towel so the knee can straighten fully, then tighten your thigh."]
  ]);
  addTo("heel-slide", [
    ["Sitting Heel Slide with Strap", "Sit with legs out and use a strap or belt around your foot to help draw the heel in.", ["towel"]]
  ]);
  addTo("standing-hip-abduction", [
    ["Standing Front Leg Raise", "Holding a support, raise your straight leg forward."],
    ["Cable Back Leg Raise", "With a cable on your ankle, move your leg straight back.", ["cable"]],
    ["Bent-Over Cable Back Leg Raise", "Lean forward onto a support and move your cabled leg back and up.", ["cable"]],
    ["Cable Hip Abduction", "With a low cable on your outer ankle, move your leg out to the side.", ["cable"]],
    ["Cable Front Leg Raise", "Face away from a low cable and raise your leg forward.", ["cable"]],
    ["Suspension Side Leg Raise", "With your feet in straps, move your legs apart under control.", ["suspension"], "An advanced version. " + HANG + " " + HIP]
  ]);
  addTo("side-stepping", [
    ["Side Steps with Band", "Loop a band around your ankles, bend your knees a little and step sideways.", ["band"], "Hold a counter if balance is shaky, and check the band."]
  ]);
  addTo("side-lying-hip-abduction", [
    ["Weighted Side-Lying Leg Lift", "Rest a light weight on your top thigh, or wear an ankle weight, as you lift.", ["dumbbell"]]
  ]);
  addTo("seated-hip-turns-band", [
    ["Cable Hip Turn In", "Sit with a low cable on your ankle and swing your foot outward, which turns the hip in.", ["cable", "bench"]],
    ["Cable Hip Turn Out", "Sit with a low cable on your ankle and swing your foot inward, which turns the hip out.", ["cable", "bench"]]
  ]);
  addTo("side-lying-inner-thigh-lift", [
    ["Weighted Inner Thigh Lift", "Rest a light weight on the lower thigh as you lift.", ["dumbbell"]]
  ]);

  // ----- squats, lunges and steps -----
  addTo("single-leg-squat", [
    ["Box Pistol Squat", "Sit back to touch a box or bench, then stand up on one leg.", ["bench"]],
    ["Barbell Single-Leg Squat", "Squat on one leg with a light bar across your upper back.", ["barbell"], "Very advanced. Have spotters or safety supports. " + HARD],
    ["Weighted Single-Leg Squat", "Hold a light weight in front of you.", ["dumbbell"], LOAD],
    ["Machine Single-Leg Squat", "Do it on a squat machine, one leg at a time.", ["machine"]],
    ["Foot-Wrapped Single-Leg Squat", "Hold a sturdy support, wrap the lifted leg behind the standing leg, and let it help you back up. An easier way to learn the move.", ["chair"], BALANCE + HARD],
    ["Suspension Single-Leg Squat", "Hold straps for balance and help as you squat.", ["suspension"], HANG + " " + HARD]
  ]);
  addTo("walking-lunge", [
    ["Barbell Lunge", "Step forward into a lunge with a bar across your upper back.", ["barbell"], LOAD],
    ["Barbell Reverse Lunge", "Step back into a lunge with a bar across your upper back.", ["barbell"], LOAD],
    ["Dumbbell Lunge", "Step forward holding a dumbbell in each hand.", ["dumbbell"]],
    ["Dumbbell Reverse Lunge", "Step back holding a dumbbell in each hand.", ["dumbbell"]],
    ["Cable Reverse Lunge", "Step back while holding a low cable in one or both hands.", ["cable"]],
    ["Smith Machine Reverse Lunge", "Step back under the Smith machine bar.", ["smith-machine"], "Set the safety stops first. " + HARD],
    ["Forward Lunge", "Step forward into a lunge, then push back to standing.", ["none"]],
    ["Barbell Split Squat", "Stay in a split stance with a bar and bend both knees.", ["barbell"], LOAD],
    ["Dumbbell Split Squat", "Stay in a split stance holding dumbbells.", ["dumbbell"]],
    ["Machine Split Squat", "Do the split squat on a machine.", ["machine"]],
    ["Suspension Split Squat", "Rest your back foot in a strap loop and bend your front knee.", ["suspension"], BALANCE + HANG],
    ["Cable Split Squat", "Stay in a split stance while holding a low cable.", ["cable"]]
  ]);
  addTo("barbell-back-squat", [
    ["Safety Bar Squat", "Use a padded bar with front handles.", ["barbell"], RACK],
    ["Cable Squat", "Squat while holding a low cable.", ["cable"]],
    ["Dumbbell Squat", "Hold dumbbells by your sides and squat.", ["dumbbell"]],
    ["Dumbbell Front Squat", "Hold dumbbells at your shoulders and squat.", ["dumbbell"]],
    ["Machine Squat", "Use a squat machine with pads on your shoulders.", ["machine"]],
    ["Machine Front Squat", "Face into a squat machine and squat.", ["machine"]],
    ["V-Squat Machine", "Squat on a V-squat machine, which guides your path.", ["machine"]],
    ["Trap Bar Squat", "Stand inside a six-sided bar and squat with an upright trunk.", ["barbell"]]
  ]);
  addTo("goblet-squat", [
    ["Kettlebell Front Squat", "Hold one or two kettlebells at your shoulders.", ["kettlebell"]]
  ]);
  addTo("mini-squat", [
    ["Full Bodyweight Squat", "Squat as deep as you can with good control, no weight.", ["none"], "Go only as deep as your knees and hips allow comfortably. " + HIP],
    ["Supported Full Squat", "Hold a sturdy post or heavy furniture to help you squat deeper.", ["chair"], "Use only a support that cannot move. " + HIP]
  ]);
  addTo("step-up", [
    ["Barbell Step-Up", "Step up with a light bar across your upper back.", ["barbell", "step"], "A fall with a bar can injure. Use a low, steady step. " + HARD],
    ["Cable Step-Up", "Step up while holding a low cable.", ["cable", "step"]],
    ["Dumbbell Step-Up", "Step up holding dumbbells.", ["dumbbell", "step"]],
    ["Dumbbell Step-Down", "Stand on a step holding dumbbells and slowly lower one heel to the floor.", ["dumbbell", "step"], "Use a low step. " + HARD],
    ["Supported Step-Down", "Hold a rail and slowly lower one heel from a step.", ["step"], BALANCE + "Use a low step."],
    ["Cable Step-Down", "Step down slowly while holding a cable.", ["cable", "step"], "Use a low step. " + HARD]
  ]);
  addTo("leg-press", [
    ["Angled Leg Press", "Use a press that slides up at an angle.", ["machine"], "Know how to set the safety catches before you start. " + PRESS],
    ["Lying Leg Press", "Use a press where you lie flat.", ["machine"], PRESS],
    ["Seated Leg Press", "Use a press where you sit upright.", ["machine"], PRESS]
  ]);

  // ----- glutes and back of the hip -----
  addTo("donkey-kick", [
    ["Cable Glute Kickback", "With a cable on your ankle, kick your leg back.", ["cable"]],
    ["Machine Glute Kickback", "Use a kickback machine, kneeling or bent over.", ["machine"]],
    ["Standing Machine Kickback", "Stand at a kickback machine and push one leg back.", ["machine"]]
  ]);
  addTo("machine-leg-push-back", [
    ["Bent-Over Machine Push-Back", "Lean your chest on a pad and push one leg back."],
    ["Lying Machine Push-Back", "Lie on your back at the machine and push your leg down."],
    ["Standing Machine Push-Back", "Stand upright at the machine and push your leg back."]
  ]);
  addTo("back-extension", [
    ["Reverse Back Extension", "Rest your hips and chest on a high bench, hold on, and lift your legs. Add weight only when ready.", ["machine", "bench"], "Move without swinging. " + BONES + " " + HARD],
    ["Single-Leg Back Extension", "Do the back extension with one leg holding you.", null, "A harder version. Be sure your foot is held securely. Skip this if you have glaucoma, unless your eye doctor says it is fine. " + BONES]
  ]);
  addTo("glute-bridge", [
    ["Suspension Bridge", "With your heels in straps, lift your hips.", ["suspension"], HANG],
    ["Hanging Hamstring Bridge", "Hang one heel in a strap and lift your hips with that leg.", ["suspension"], "An advanced version. " + HANG + " Stop if your hamstring cramps."]
  ]);

  // ----- leg raises and core -----
  addTo("double-leg-raise", [
    ["Straight Double Leg Raise", "Keep your legs straight as you lift.", null, "Much harder on the back. " + BONES],
    ["Incline Leg Raise", "Lie on a slanted bench with your head higher, knees bent.", ["bench"]],
    ["Straight Incline Leg Raise", "On a slanted bench, lift straight legs.", ["bench"], "Much harder on the back. " + BONES],
    ["Seated Leg Raise", "Sit on the edge of a bench, lean back a little and lift your knees.", ["bench"], "Use a bench that cannot tip. " + BONES],
    ["Weighted Leg Raise", "Hold a light weight between your feet.", ["dumbbell", "bench"], "The weight can slip, so start very light. " + BONES],
    ["Cable Leg Raise", "Lie facing away from a low cable on your ankles and lift.", ["cable"]],
    ["Machine Leg Raise", "Support your forearms on a machine and lift your knees or legs.", ["machine"]]
  ]);
  addTo("hanging-leg-raise", [
    ["Straight-Leg Captain's Chair Raise", "On a captain's chair or parallel bars, lift straight legs.", ["machine"], "A hard version. " + BONES + " " + HARD]
  ]);
  addTo("sit-up", [
    ["Roman Chair Sit-Up", "Sit on a Roman chair with feet held and lower back only partway.", ["bench"], "Hard on the back. Do not lean past level. " + BONES + " " + HARD]
  ]);
  addTo("mountain-climbers-cardio", [
    ["Suspension Mountain Climber", "Put your feet in straps in a plank and bring your knees in one at a time.", ["suspension"], "An advanced version. " + HANG + " " + HARD]
  ]);
  addTo("suspension-knee-tuck", [
    ["Suspension Pike", "With straight legs, lift your hips high, then lower to a plank.", null, "Very advanced. " + HANG + " " + HARD]
  ]);

  // ----- hip and trunk stretches -----
  addTo("itb-tfl-stretch", [
    ["Seated Outer-Hip Stretch", "Sit on the floor, cross one foot over the other leg and hug that knee toward the opposite shoulder. The lower leg can be straight or bent.", ["none"], "Pull gently. " + HIP]
  ]);
  addTo("lower-trunk-rotation", [
    ["Squeeze-and-Relax Crossover", "Lie with one leg crossed over your body, press it gently against your hand for 5 seconds, relax, and ease further.", null, STRETCH + HIP]
  ]);
  addTo("hip-flexor-stretch", [
    ["Lunging Hip Flexor Stretch", "Step into a long lunge, rest your hands on your front thigh, and sink your hips.", ["none"], BALANCE + HIP],
    ["Machine Hip Flexor Stretch", "Use a stretch machine that holds one leg back.", ["machine"]]
  ]);

  // ----- thighs -----
  addTo("reverse-nordic-curl", [
    ["Band-Assisted Reverse Nordic", "Hold a band anchored in front to help you back up.", ["band"]],
    ["Machine-Assisted Reverse Nordic", "Use an assist machine that takes some of your weight.", ["machine"]]
  ]);
  addTo("glute-ham-raise", [
    ["Barbell Glute-Ham Raise", "Hold a light bar across your upper back.", ["machine", "barbell"], "Very advanced. " + HARD],
    ["Weighted Glute-Ham Raise", "Hold a weight plate to your chest.", ["machine", "dumbbell"], LOAD]
  ]);
  addTo("quad-stretch", [
    ["Machine Quad Stretch", "Use a stretch machine that holds your bent knee.", ["machine"]],
    ["Squeeze-and-Relax Quad Stretch", "Lying face down with a strap, press your foot gently against it for 5 seconds, relax, then ease further.", ["towel"], STRETCH],
    ["Walking Quad Stretch", "Walk slowly, holding one heel toward your buttock for a moment at each step.", ["none"], "Needs good balance. Walk beside a wall or counter."]
  ]);
  addTo("nordic-curl", [
    ["Band-Assisted Nordic Curl", "A band anchored behind you helps hold your weight.", ["band"], NORDIC + "Check the band and anchor."],
    ["Machine-Assisted Nordic Curl", "Use an assist machine that takes some of your weight.", ["machine"], NORDIC],
    ["Hand-Assisted Nordic Curl", "Catch yourself with your hands and push off to help you come back up.", null, NORDIC + "Skip it if your wrists or shoulders cannot catch you."]
  ]);
  addTo("deadlift", [
    ["Dumbbell Stiff-Leg Deadlift", "Hinge with nearly straight knees, holding two dumbbells.", ["dumbbell"], HINGE]
  ]);
  addTo("lying-leg-curl", [
    ["Cable Leg Curl", "Lie face down with a low cable on your ankle and curl.", ["cable", "bench"]],
    ["Cable Standing Leg Curl", "Stand facing a low cable and bend one knee.", ["cable"]],
    ["Machine Standing Leg Curl", "Stand at a curl machine and bend one knee.", ["machine"]],
    ["Kneeling Leg Curl", "Kneel at a curl machine and bend one knee."],
    ["Bent-Over Leg Curl", "Lean forward on a curl machine and bend one knee."],
    ["One-Leg Lying Curl", "Curl one leg at a time."],
    ["Suspension Leg Curl", "Lie with heels in straps, lift your hips and pull your heels in. Keep hips bent or straight.", ["suspension"], HANG + " Stop if your hamstring cramps."],
    ["Suspension Hanging Leg Curl", "Hang under the straps holding on, with heels supported, and curl your body up.", ["suspension"], "Very advanced. " + HANG]
  ]);
  addTo("hamstring-stretch-towel", [
    ["Machine Hamstring Stretch", "Use a stretch machine, seated or lying.", ["machine"]],
    ["Squeeze-and-Relax Hamstring Stretch", "Lying with a strap on your foot, press your leg gently into it for 5 seconds, relax, then raise a little further.", null, STRETCH + HIP],
    ["Bench Hamstring Stretch", "Sit sideways on a bench with one leg along it and tip forward from your hips.", ["bench"], "Stop at a gentle pull. " + HIP]
  ]);
  addTo("leg-swings", [
    ["Straight-Leg Kicks", "Walk forward, kicking a straight leg up toward your opposite hand.", ["none"], "Needs good balance. Start with low kicks. " + HIP]
  ]);

  // ----- inner thigh -----
  addTo("hip-abduction-machine", [
    ["Standing Outer Hip Machine", "Stand at the machine and push one leg out to the side."]
  ]);
  addTo("hip-adduction-machine", [
    ["Cable Hip Adduction", "With a cable on your inner ankle, pull your leg across toward the other.", ["cable"], "Use a light weight and hold a support. " + HIP],
    ["Standing Inner Thigh Machine", "Stand at the machine and pull one leg inward.", null, HIP]
  ]);
  addTo("butterfly-stretch", [
    ["Machine Groin Stretch", "Use a stretch machine that opens your legs gently.", ["machine"]],
    ["Wall Groin Stretch", "Lie with your hips near a wall and let your legs rest open against it.", ["wall"]],
    ["Squeeze-and-Relax Groin Stretch", "With knees bent open, press them gently up into your hands for 5 seconds, relax, then ease further.", null, STRETCH + HIP],
    ["Chair Groin Stretch", "Sit on a chair or bench with knees wide and lean forward gently.", ["chair", "bench"]],
    ["One-Leg Seated Groin Stretch", "Sit with one leg out to the side and the other bent, then lean forward gently."]
  ]);
})();
