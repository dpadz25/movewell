// MoveWell exercise database, Part 15: calves, shins, cardio, kettlebell and jumps
// Instructions are written for MoveWell. Loads after exercises-round-f.js.

window.EXERCISES = window.EXERCISES || [];
(function () {
  const HARD = "Keep breathing and do not hold your breath. Stop if you feel sharp pain, dizziness, or chest pain.";
  const HEART = "Stop if you feel chest pain, dizziness, unusual shortness of breath, or sharp pain.";
  const JUMP = "High impact. Skip it with joint, back, foot or balance problems, osteoporosis, pregnancy, or after recent surgery. Jump on a forgiving, clear floor. " + HEART;
  const KB = "A skilled lift. Learn it with a light weight or a trainer, and clear the space around you. " + HARD;
  const ex = o => Object.assign({ equipment: ["none"], level: 3, variations: [] }, o);
  window.EXERCISES.push(
  ex({
    id: "shin-stretch", name: "Shin Stretch", region: "ankle-foot", type: "stretch",
    position: "Kneeling", level: 2,
    muscles: "Front of the shins and ankles",
    helps: ["general"],
    dose: { sets: 2, reps: 1, hold: 20 },
    howTo: [
      "Kneel on a soft surface with the tops of your feet flat.",
      "Slowly sit back toward your heels, hands supporting you.",
      "Hold a gentle stretch along your shins.",
      "Rise with your hands."
    ],
    tips: ["A cushion between your heels and buttocks takes off some weight."],
    caution: "Skip it if kneeling hurts your knees or ankles, or after knee or hip surgery unless cleared."
  }),
  ex({
    id: "climbing-machine", name: "Climbing Machine", region: "balance", type: "cardio",
    equipment: ["cardio-machine"], position: "On the machine", level: 2,
    muscles: "Whole body",
    helps: ["conditioning"],
    dose: { sets: 1, timeSec: 600 },
    howTo: [
      "Step onto the pedals and hold the handles.",
      "Begin at a slow speed.",
      "Climb with opposite arm and leg, or as the machine guides.",
      "Slow down before stepping off."
    ],
    tips: ["Stand tall and take full steps."],
    caution: "Build up gradually. " + HEART
  }),
  ex({
    id: "bear-crawl", name: "Bear Crawl", region: "balance", type: "strengthen",
    position: "Hands and feet on the floor", level: 3,
    muscles: "Shoulders, core, thighs",
    helps: ["conditioning", "strength-training"],
    dose: { sets: 3, timeSec: 20 },
    howTo: [
      "Start on hands and knees, then lift your knees just off the floor.",
      "Move the opposite hand and foot forward together.",
      "Continue with small steps.",
      "Lower your knees to rest."
    ],
    tips: ["Keep your hips low and level."],
    caution: "Needs healthy wrists and shoulders. Clear the path. " + HEART
  }),
  ex({
    id: "butt-kicks", name: "Butt Kicks", region: "balance", type: "cardio",
    position: "Standing", level: 2,
    muscles: "Hamstrings, whole body",
    helps: ["conditioning"],
    dose: { sets: 3, timeSec: 20 },
    howTo: [
      "Stand tall.",
      "Jog in place, bringing your heels up toward your buttocks.",
      "Swing your arms and land softly."
    ],
    tips: ["Go at a pace you can control."],
    caution: "High impact. Skip it with knee, foot or balance problems. " + HEART
  }),
  ex({
    id: "bouldering", name: "Bouldering", region: "balance", type: "strengthen",
    equipment: ["wall"], position: "On a low climbing wall", level: 3,
    muscles: "Whole body, grip",
    helps: ["conditioning", "strength-training"],
    dose: { sets: 1, timeSec: 1200 },
    howTo: [
      "Use a climbing gym wall with padded floors.",
      "Warm up and choose a simple route.",
      "Climb using your legs to push and your hands to steady you.",
      "Climb down rather than jumping where you can."
    ],
    tips: ["Rest between climbs."],
    caution: "Falls can injure. Climb only at a proper facility, follow its safety rules, and get instruction first. " + HEART
  }),

  // ============ KETTLEBELL ============
  ex({
    id: "kettlebell-windmill", name: "Kettlebell Windmill", region: "core", type: "lift",
    equipment: ["kettlebell"], position: "Standing, one arm overhead",
    muscles: "Side abdominals, shoulders, hips",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 5, perSide: true },
    howTo: [
      "Hold a light kettlebell straight overhead, feet wide and turned away from that side.",
      "Keeping your eyes on the weight, push your hip out and slide your free hand down your leg.",
      "Go only as far as your back stays straight.",
      "Return to standing."
    ],
    tips: ["Practice with no weight first."],
    caution: "Skip it with shoulder or back trouble or osteoporosis. " + KB
  }),
  ex({
    id: "turkish-get-up", name: "Turkish Get-Up", region: "balance", type: "lift",
    equipment: ["kettlebell"], position: "Lying on your back",
    muscles: "Whole body",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 3, perSide: true },
    howTo: [
      "Lie on your back, one arm straight up holding a light kettlebell, that knee bent.",
      "Roll up onto your other elbow, then your hand.",
      "Lift your hips, sweep the straight leg back to kneel, and stand up.",
      "Reverse each step to lie down again."
    ],
    tips: ["Learn it holding nothing, eyes on your raised hand."],
    caution: "The weight is above you the whole time. " + KB
  }),
  ex({
    id: "kettlebell-clean", name: "Kettlebell Clean", region: "balance", type: "lift",
    equipment: ["kettlebell"], position: "Standing",
    muscles: "Hips, back, arms",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 5, perSide: true },
    howTo: [
      "Hinge at your hips and hold the kettlebell in one hand.",
      "Swing it back between your legs.",
      "Drive your hips forward and guide it up close to your body.",
      "Catch it softly against your forearm at your shoulder, then lower."
    ],
    tips: ["Keep your elbow near your ribs."],
    caution: KB
  }),
  ex({
    id: "kettlebell-snatch", name: "Kettlebell Snatch", region: "balance", type: "lift",
    equipment: ["kettlebell"], position: "Standing",
    muscles: "Whole body",
    helps: ["strength-training", "conditioning"],
    dose: { sets: 3, reps: 5, perSide: true },
    howTo: [
      "Swing the kettlebell back between your legs with one hand.",
      "Drive your hips forward and pull it up close to your body.",
      "Punch your hand through so it settles on your forearm overhead.",
      "Lower it with control into the next swing."
    ],
    tips: ["Master the swing and clean first."],
    caution: "An advanced overhead move. " + KB
  }),

  // ============ JUMPS ============
  ex({
    id: "vertical-jump", name: "Vertical Jump", region: "balance", type: "cardio",
    position: "Standing",
    muscles: "Legs, glutes",
    helps: ["conditioning", "strength-training"],
    dose: { sets: 3, reps: 5 },
    howTo: [
      "Stand with feet hip width.",
      "Bend your knees and swing your arms back.",
      "Jump straight up, reaching overhead.",
      "Land softly on the balls of your feet with knees bent."
    ],
    tips: ["Quiet landings are good landings."],
    caution: JUMP
  }),
  ex({
    id: "box-jump", name: "Box Jump", region: "balance", type: "cardio",
    equipment: ["step"], position: "Standing facing a box",
    muscles: "Legs, glutes",
    helps: ["conditioning", "strength-training"],
    dose: { sets: 3, reps: 5 },
    howTo: [
      "Stand facing a low, sturdy box.",
      "Bend your knees, swing your arms and jump onto it.",
      "Land softly with your whole foot on the box.",
      "Stand up, then step down."
    ],
    tips: ["Start very low. Step down, do not jump down."],
    caution: "Use a box that cannot slide or tip. " + JUMP
  }),
  ex({
    id: "depth-jump", name: "Depth Jump", region: "balance", type: "cardio",
    equipment: ["step"], position: "Standing on a low box",
    muscles: "Legs, glutes",
    helps: ["conditioning", "strength-training"],
    dose: { sets: 3, reps: 4 },
    howTo: [
      "Stand on a low, sturdy box.",
      "Step off, landing on both feet with soft knees.",
      "Jump straight up right away.",
      "Land softly and reset."
    ],
    tips: ["Use a very low box."],
    caution: "Very advanced. Only after solid jumping practice. " + JUMP
  }),
  ex({
    id: "broad-jump", name: "Broad Jump", region: "balance", type: "cardio",
    position: "Standing",
    muscles: "Legs, glutes",
    helps: ["conditioning", "strength-training"],
    dose: { sets: 3, reps: 5 },
    howTo: [
      "Stand with feet hip width and plenty of room ahead.",
      "Bend your knees and swing your arms back.",
      "Jump forward as your arms swing through.",
      "Land softly on both feet with knees bent."
    ],
    tips: ["Stick each landing before the next."],
    caution: JUMP
  }),
  ex({
    id: "side-to-side-hop", name: "Side-to-Side Hop", region: "balance", type: "cardio",
    position: "Standing beside a line", level: 2,
    muscles: "Legs, ankles",
    helps: ["conditioning"],
    dose: { sets: 3, timeSec: 20 },
    howTo: [
      "Stand beside a line on the floor.",
      "Hop sideways over it with both feet.",
      "Hop back, landing softly.",
      "Keep a steady rhythm."
    ],
    tips: ["Small hops first."],
    caution: JUMP
  }),

  // ============ MEDICINE BALL ============
  ex({
    id: "medicine-ball-chop", name: "Medicine Ball Chop", region: "core", type: "strengthen",
    equipment: ["medicine-ball"], position: "Standing", level: 2,
    muscles: "Core, shoulders",
    helps: ["strength-training", "conditioning"],
    dose: { sets: 3, reps: 10 },
    howTo: [
      "Stand with feet wide holding a light ball in both hands.",
      "Raise it overhead.",
      "Bend your hips and knees as you bring it down between your feet.",
      "Stand and raise it again."
    ],
    tips: ["Keep your back flat and move with control."],
    caution: "Use a light ball. Skip this if you have osteoporosis or have had a spinal fracture, unless your clinician says it is fine. " + HARD
  }),
  ex({
    id: "medicine-ball-slam", name: "Medicine Ball Slam", region: "balance", type: "cardio",
    equipment: ["medicine-ball"], position: "Standing", level: 2,
    muscles: "Whole body",
    helps: ["conditioning", "strength-training"],
    dose: { sets: 3, reps: 8 },
    howTo: [
      "Hold a non-bouncing slam ball overhead.",
      "Throw it down hard in front of your feet, bending hips and knees.",
      "Squat to pick it up with a flat back.",
      "Lift it overhead and repeat."
    ],
    tips: ["Use a ball made for slamming so it does not bounce back."],
    caution: "Watch for bounce back and keep others clear. Skip it with back or shoulder trouble or osteoporosis. " + HEART
  })
  );
})();

// ----- new versions: [name, how it differs, equipment if different, caution if needed] -----
(function () {
  const HARD = "Keep breathing and do not hold your breath. Stop if you feel sharp pain, dizziness, or chest pain.";
  const HEART = "Stop if you feel chest pain, dizziness, unusual shortness of breath, or sharp pain.";
  const JUMP = "High impact. Skip it with joint, back, foot or balance problems, osteoporosis, pregnancy, or after recent surgery. Jump on a forgiving, clear floor. " + HEART;
  const BONES = "Skip this if you have osteoporosis or have had a spinal fracture, unless your clinician says it is fine.";
  const BALANCE = "Keep something steady within reach. ";
  const PLYO = "An advanced jumping push-up. Skip it with wrist, elbow or shoulder trouble. " + HARD;
  const THROW = "Use a ball made for throwing, a solid wall, and a clear space. Watch the rebound. " + HEART;
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

  // ----- calves and shins -----
  addTo("standing-calf-raise-machine", [
    ["Barbell Calf Raise", "Rise onto your toes with a bar across your upper back.", ["barbell"], "Squat rack and safety pins recommended. " + HARD],
    ["Belt Calf Raise", "Hang a low cable from a belt around your hips and rise onto your toes.", ["cable", "step"]],
    ["Cable One-Leg Calf Raise", "Hold a low cable and rise on one leg.", ["cable", "step"], BALANCE],
    ["Dumbbell Calf Raise", "Hold dumbbells and rise onto your toes.", ["dumbbell", "step"], BALANCE],
    ["Dumbbell One-Leg Calf Raise", "Hold one dumbbell and rise on one leg.", ["dumbbell", "step"], BALANCE],
    ["Angled Leg Press Calf Raise", "On an angled press, push through the balls of your feet.", ["machine"], "Leave the safety catches on so the sled cannot drop. Keep knees soft."],
    ["Angled Machine Calf Raise", "Use a calf machine that slides at an angle.", ["machine"]],
    ["Machine Calf Push", "Sit at a machine and point your toes against the footplate.", ["machine"]],
    ["Donkey Calf Raise", "Bend forward at the hips onto a support with weight on your hips, and rise onto your toes.", ["machine", "step"]],
    ["Lying Calf Press", "Lie at a leg press and push through the balls of your feet.", ["machine"]]
  ]);
  addTo("seated-calf-raise", [
    ["Seated Calf Press", "Sit at a press and push your toes forward, both feet or one.", ["machine"]],
    ["Barbell Seated Calf Raise", "Sit with a padded bar on your thighs and lift your heels.", ["barbell", "bench"], "Hold the bar so it cannot roll."],
    ["Smith Machine Seated Calf Raise", "Sit under the Smith machine bar, padded, across your thighs.", ["smith-machine", "bench"], "Set the safety stops first."]
  ]);
  addTo("calf-raise", [
    ["Weighted One-Leg Heel Raise", "Hold a light weight in one hand and a support in the other, and rise on one leg.", ["dumbbell", "chair"], BALANCE],
    ["Suspension One-Leg Calf Raise", "Lean back or forward on straps and rise on one leg.", ["suspension"], "Check that the straps and anchor will hold your weight."]
  ]);
  addTo("calf-stretch-wall", [
    ["Slant Board Calf Stretch", "Stand on a slanted board or a firm floor wedge holding a support.", ["step"], BALANCE],
    ["Pike Calf Stretch", "With hands on the floor and hips high, press one heel down, then the other.", ["none"], "Your head is low. Skip it with blood pressure or eye concerns."]
  ]);
  addTo("soleus-stretch", [
    ["Bent-Knee Step Calf Stretch", "On a step or board with a support, bend the knee and let your heel drop.", ["step"], BALANCE]
  ]);
  addTo("toe-raises", [
    ["Safety Bar Toe Raise", "With a padded bar on your shoulders and heels on a step, lift your toes.", ["barbell", "step"], "Easy to tip backward. Use a rack. " + HARD],
    ["Cable Toe Raise", "Pull your toes up against a low cable.", ["cable"]],
    ["Dumbbell Toe Raise", "Hold dumbbells, heels on a step, and lift your toes.", ["dumbbell", "step"], BALANCE],
    ["One-Leg Toe Raise", "Lift the toes of one foot at a time.", null, BALANCE],
    ["Machine Toe Raise", "Use a calf machine with heels on the plate and lift your toes.", ["machine"]],
    ["Machine Toe Pull-Up", "Sit at a shin machine and pull your toes toward you.", ["machine"]],
    ["Angled Leg Press Toe Raise", "On an angled press, keep heels on the plate and pull your toes back.", ["machine"], "Leave the safety catches on."],
    ["Angled Machine Toe Raise", "Use an angled calf machine, lifting your toes.", ["machine"]],
    ["Hack Machine Toe Raise", "Use a hack squat machine, heels down, lifting your toes.", ["machine"]],
    ["Lying Leg Press Toe Raise", "Lie at a press and pull your toes back.", ["machine"], "Leave the safety catches on."],
    ["Seated Leg Press Toe Raise", "Sit at a press and pull your toes back.", ["machine"], "Leave the safety catches on."],
    ["Smith Machine Toe Raise", "Under the Smith bar with heels on a step, lift your toes.", ["smith-machine", "step"], "Set the safety stops. " + HARD]
  ]);
  addTo("shin-stretch", [
    ["Standing Shin Stretch", "Holding a support, rest the top of one foot on the floor behind you and press gently.", ["chair"], BALANCE]
  ]);

  // ----- cardio -----
  addTo("climbing-machine", [
    ["Ladder Climbing Machine", "Use a machine with moving rungs.", null, "Hold on, start slowly and know how to stop. " + HEART]
  ]);
  addTo("stationary-bike", [
    ["Outdoor Cycling", "Ride a bicycle outside.", ["none"], "Wear a helmet, check your brakes and watch for traffic. " + HEART]
  ]);
  addTo("rowing-machine", [
    ["Horse-Rider Machine", "Use a rider machine, pushing with your feet as you pull the handles.", null, "Keep your back tall. " + HEART]
  ]);
  addTo("ski-erg", [
    ["Pull-Cord Ski Machine", "Use a ski machine with pull cords."]
  ]);
  addTo("stair-climber", [
    ["Revolving Stair Machine", "Climb a machine with moving steps.", null, "Hold a rail to get on and off. " + HEART],
    ["Stair Running", "Run up real stairs and walk down.", ["step"], "A fall on stairs can injure. Use a rail side. " + HEART]
  ]);
  addTo("sprint-intervals", [
    ["Sprint Machine", "Do your intervals on a sprint machine.", null, "Very intense. Skip it with heart or blood pressure concerns without clearance. " + HEART]
  ]);
  addTo("treadmill-run", [
    ["Treadmill Walk", "Walk on the treadmill at a comfortable pace. Easier than running.", null, "Hold the rail to get on and off. " + HEART],
    ["Self-Powered Treadmill", "Walk or run on a belt that you move with your own steps.", null, "Hold on while getting the feel of it. " + HEART],
    ["Outdoor Run", "Run outside on an even path.", ["none"], "Build up gradually and watch your footing and traffic. " + HEART]
  ]);
  addTo("sled-push", [
    ["Sled Pull", "Walk backward or forward while pulling the sled by straps.", null, "Check behind you before walking backward. " + HARD]
  ]);
  addTo("burpees", [
    ["Burpee with Push-Up", "Add one push-up while you are in the plank."]
  ]);
  addTo("side-stepping", [
    ["Side Shuffle", "Move sideways quickly with knees bent.", ["none"], "Faster and needs good balance. Do not cross your feet."]
  ]);
  addTo("jump-rope-cardio", [
    ["Heel Tap Skip", "Tap one heel forward on alternate turns."],
    ["Irish Step Skip", "Add a quick kick and hop pattern between turns."],
    ["Toe Tap Skip", "Tap one toe on the floor on alternate turns."]
  ]);
  addTo("swimming", [
    ["Freestyle Swimming", "Swim front crawl.", null, "Swim where someone else is nearby. " + HEART]
  ]);

  // ----- kettlebell -----
  addTo("standing-overhead-press", [
    ["Kettlebell Press", "Press one or two kettlebells overhead.", ["kettlebell"]]
  ]);
  addTo("kettlebell-swing", [
    ["Kettlebell Swing Catch", "At the top of a two-hand swing, let go briefly and catch the bell.", null, "A dropped bell can injure. Practice only after the swing is solid, on a clear floor. " + HARD]
  ]);

  // ----- jumps -----
  addTo("vertical-jump", [
    ["Jump Turns", "Turn a quarter, half or full circle in the air.", null, "Twisting landings strain the knees. " + JUMP],
    ["Split Jump", "Jump from a split stance and switch legs in the air.", null, JUMP],
    ["Toe-Touch Jump", "Lift straight legs and reach for your toes at the top.", null, JUMP],
    ["Stair Jumps", "Jump up a stair at a time, then walk down.", ["step"], "A fall on stairs can injure. " + JUMP]
  ]);
  addTo("box-jump", [
    ["Low Box March", "Quickly step on and off a low box without jumping.", null, BALANCE + HEART],
    ["Multiple Box Jumps", "Jump along a row of low boxes.", null, JUMP],
    ["Hurdle Jumps", "Jump over low hurdles that fall easily if clipped.", ["none"], JUMP],
    ["Side Box Jumps", "Jump sideways onto the box.", null, JUMP]
  ]);
  addTo("depth-jump", [
    ["Hurdle Depth Jump", "Step off the box, then jump over a low hurdle.", null, "Very advanced. " + JUMP],
    ["Staircase Depth Jump", "Drop down a low stair and spring back up the stairs.", null, "Very advanced, with a real risk of falls. " + JUMP],
    ["Long Depth Jump", "Step off the box, then jump forward.", null, "Very advanced. " + JUMP]
  ]);
  addTo("broad-jump", [
    ["Triple Jump", "Link three forward bounds in a row from standing.", null, JUMP],
    ["Leaping Strides", "Bound forward from one leg to the other.", null, JUMP],
    ["Repeated Long Jumps", "Do broad jumps one after another.", null, JUMP],
    ["Speed Hops", "Make quick, small hops forward, bringing your knees up.", null, JUMP],
    ["Ladder Speed Hops", "Hop quickly through the squares of a floor ladder.", null, JUMP],
    ["Cone Jumps", "Jump forward over a line of low cones.", null, JUMP]
  ]);
  addTo("side-to-side-hop", [
    ["Side Box Shuffle", "Step side to side over a low box, one foot at a time.", ["step"], "Use a box that cannot slide. " + HEART],
    ["Four-Square Jumps", "Hop around four floor squares, including diagonally.", null, JUMP],
    ["Slalom Jumps", "Hop side to side while moving forward.", null, JUMP],
    ["Side Cone Hops", "Hop sideways over a low cone.", null, JUMP],
    ["One-Leg Barrier Hop", "Hop sideways over a low barrier on one leg.", null, "Very advanced. " + JUMP],
    ["Medicine Ball Side Bound", "Bound from leg to leg sideways holding a light ball.", ["medicine-ball"], JUMP]
  ]);

  // ----- medicine ball and plyometric core -----
  addTo("medicine-ball-chop", [
    ["Diagonal Chop", "Bring the ball from above one shoulder down toward the opposite knee."],
    ["Rainbow Chop", "Move the ball in an arc overhead from one side to the other."],
    ["Medicine Ball Standing Twist", "Hold the ball at your middle and turn side to side."]
  ]);
  addTo("medicine-ball-slam", [
    ["Wall Ball", "Squat, then throw the ball up to a target on a wall and catch it.", ["medicine-ball", "wall"], THROW],
    ["Side Wall Throw", "Stand side-on and throw the ball into a wall with a turn.", ["medicine-ball", "wall"], THROW],
    ["Scoop Throw", "Swing the ball from one hip and scoop it forward with a turn.", ["medicine-ball", "wall"], THROW],
    ["Squat Overhead Throw", "Squat, then stand and throw the ball up or forward.", null, "Make sure nothing and nobody is where it lands. " + HEART],
    ["Backward Overhead Throw", "Swing the ball from between your legs and throw it back over your head.", null, "Check behind you before every throw. " + HEART]
  ]);
  addTo("russian-twist", [
    ["Medicine Ball Russian Twist", "Hold a medicine ball as you twist.", ["medicine-ball"]]
  ]);
  addTo("sit-up", [
    ["Wall Throw Sit-Up", "Throw a ball to a wall as you sit up and catch it on the way down.", ["medicine-ball", "wall"], BONES + " " + THROW]
  ]);
  addTo("push-up", [
    ["Wall Bounce Push-Up", "Lean into a wall and push off just enough to leave it, then catch yourself softly.", ["wall"], "Make sure your feet cannot slip. Skip it with wrist or shoulder trouble."],
    ["Shoulder Tap Push-Up", "After each push-up, tap one hand to the opposite shoulder.", null, "Keep your hips level. " + HARD],
    ["Incline Bounce Push-Up", "Hands on a sturdy raised surface, push off and catch yourself.", ["bench"], "The surface must not move. " + PLYO],
    ["Kneeling Bounce Push-Up", "From your knees, push your hands off the floor.", null, PLYO],
    ["Assisted Bounce Push-Up", "Keep your knees down and use your legs to help you push off.", null, PLYO],
    ["Knee Depth Push-Up", "On your knees, drop from two low blocks and push back up.", ["step"], PLYO],
    ["Medicine Ball Depth Push-Up", "Start with hands on a ball, drop to the floor and push back up.", ["medicine-ball"], "The ball can roll. " + PLYO]
  ]);
})();
