// MoveWell exercise database, Part 12: chest, arms and hands
// Instructions are written for MoveWell. Loads after exercises-round-c.js.

window.EXERCISES = window.EXERCISES || [];
(function () {
  const HARD = "Keep breathing and do not hold your breath. Stop if you feel sharp pain, dizziness, or chest pain.";
  window.EXERCISES.push(

  // ============ CHEST ============
  {
    id: "cable-chest-press", name: "Cable Chest Press", region: "chest", type: "lift",
    equipment: ["cable", "bench"], position: "Seated or lying between two cables", level: 2,
    muscles: "Chest, shoulders, triceps",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 10 },
    howTo: [
      "Set a bench between two low or chest-height cables.",
      "Sit or lie with a handle in each hand beside your chest.",
      "Press both hands forward until your arms are nearly straight.",
      "Return slowly until your hands are level with your chest."
    ],
    tips: ["Keep your shoulder blades lightly pulled back."],
    caution: "Check that the bench is steady and the weight is light enough to control. " + HARD,
    variations: []
  },
  {
    id: "dumbbell-pullover", name: "Dumbbell Pullover", region: "chest", type: "lift",
    equipment: ["dumbbell", "bench"], position: "Lying on a bench", level: 2,
    muscles: "Chest, lats",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 10 },
    howTo: [
      "Lie on a bench holding one dumbbell with both hands above your chest.",
      "Keeping a slight bend in your elbows, lower it back over your head.",
      "Stop when you feel a comfortable stretch.",
      "Bring it back above your chest."
    ],
    tips: ["Start very light and keep your ribs down."],
    caution: "The weight passes over your head, so grip it securely. Skip this if reaching overhead hurts your shoulder. " + HARD,
    variations: []
  },
  {
    id: "suspension-chest-press", name: "Suspension Chest Press", region: "chest", type: "lift",
    equipment: ["suspension"], position: "Leaning forward into straps", level: 3,
    muscles: "Chest, shoulders, triceps, core",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 8 },
    howTo: [
      "Hold the straps and face away from the anchor with your arms straight in front.",
      "Lean forward with your body in a straight line.",
      "Bend your elbows to lower your chest between your hands.",
      "Press back up."
    ],
    tips: ["Stand more upright to make it lighter."],
    caution: "Check that the straps and anchor will hold your full weight. " + HARD,
    variations: []
  },

  // ============ ARMS ============
  {
    id: "dumbbell-kickback", name: "Dumbbell Kickback", region: "arms", type: "lift",
    equipment: ["dumbbell", "bench"], position: "Hinged forward, one hand supported", level: 1,
    muscles: "Triceps",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 12, perSide: true },
    howTo: [
      "Rest one hand and knee on a bench with your back flat.",
      "Hold a light dumbbell with your upper arm along your side, elbow bent.",
      "Straighten your elbow so the weight moves back.",
      "Bend it again slowly."
    ],
    tips: ["Only your forearm moves."],
    caution: "Use a light weight without swinging. " + HARD,
    variations: []
  },
  {
    id: "machine-triceps-extension", name: "Machine Triceps Extension", region: "arms", type: "lift",
    equipment: ["machine"], position: "Seated at the machine", level: 1,
    muscles: "Triceps",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 12 },
    howTo: [
      "Adjust the seat so your elbows line up with the machine's pivot.",
      "Hold the handles with your elbows bent.",
      "Straighten your arms.",
      "Return slowly."
    ],
    tips: ["Keep your upper arms still."],
    caution: "Do not snap your elbows straight. " + HARD,
    variations: []
  },
  {
    id: "underhand-body-row", name: "Underhand Body Row", region: "arms", type: "lift",
    equipment: ["barbell"], position: "Hanging under a waist-high bar", level: 2,
    muscles: "Biceps, upper back",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 8 },
    howTo: [
      "Set a sturdy bar in a rack at about waist height.",
      "Lie under it and grab it with your palms facing you, hands shoulder width.",
      "With heels on the floor and body straight, pull your chest toward the bar.",
      "Lower slowly until your arms are straight."
    ],
    tips: ["A higher bar makes it easier."],
    caution: "Check that the bar cannot roll or slip before you hang from it. " + HARD,
    variations: []
  },
  {
    id: "reverse-curl", name: "Reverse Curl", region: "arms", type: "lift",
    equipment: ["barbell"], position: "Standing", level: 2,
    muscles: "Forearms, biceps",
    helps: ["strength-training"],
    dose: { sets: 3, reps: 10 },
    howTo: [
      "Stand holding a light bar with your palms facing down.",
      "Keeping your elbows by your sides, curl the bar up.",
      "Lower it slowly."
    ],
    tips: ["Keep your wrists straight. Use less weight than a regular curl."],
    caution: "Stop if your wrists or elbows hurt. " + HARD,
    variations: []
  },
  {
    id: "band-biceps-curl", name: "Band Biceps Curl", region: "arms", type: "strengthen",
    equipment: ["band"], position: "Standing or seated", level: 1,
    muscles: "Biceps",
    helps: ["general", "strength-training"],
    dose: { sets: 2, reps: 12 },
    howTo: [
      "Stand or sit with one end of a band secured under your foot.",
      "Hold the other end with your palm facing up.",
      "Bend your elbow to bring your hand toward your shoulder.",
      "Lower slowly."
    ],
    tips: ["Keep your elbow close to your side."],
    caution: "Check the band for tears and make sure it cannot slip from under your foot.",
    variations: []
  },
  {
    id: "band-triceps-extension", name: "Band Triceps Extension", region: "arms", type: "strengthen",
    equipment: ["band"], position: "Standing or seated", level: 1,
    muscles: "Triceps",
    helps: ["general", "strength-training"],
    dose: { sets: 2, reps: 12, perSide: true },
    howTo: [
      "Hold one end of a band against your upper chest with one hand.",
      "Hold the other end with your working hand, elbow bent.",
      "Straighten your elbow downward.",
      "Return slowly."
    ],
    tips: ["Only your elbow moves."],
    caution: "Check the band for tears and hold it firmly so it cannot snap toward your face.",
    variations: []
  },

  // ============ WRIST AND HAND ============
  {
    id: "thumb-touches", name: "Thumb Touches", region: "wrist", type: "mobility",
    equipment: ["none"], position: "Seated, forearm supported", level: 1,
    muscles: "Thumb and hand muscles",
    helps: ["arthritis-hand", "wrist-pain", "general"],
    dose: { sets: 2, reps: 10, perSide: true },
    howTo: [
      "Rest your forearm with your palm facing up.",
      "Touch the tip of your thumb to your index finger, making a round shape.",
      "Open your hand.",
      "Repeat with each finger in turn."
    ],
    tips: ["Go slowly and make each circle as round as you comfortably can."],
    caution: "Do not force stiff or swollen joints.",
    variations: []
  },
  {
    id: "hand-pumps", name: "Hand Pumps", region: "wrist", type: "mobility",
    equipment: ["none"], position: "Seated or lying", level: 1,
    muscles: "Hand and forearm muscles",
    helps: ["arthritis-hand", "general"],
    dose: { sets: 2, reps: 15, perSide: true },
    howTo: [
      "Rest your arm on a pillow, with your hand a little raised.",
      "Open your fingers wide.",
      "Close them into a loose fist.",
      "Repeat at a steady pace."
    ],
    tips: ["Keeping the hand raised may help with puffiness."],
    caution: "New or sudden swelling, redness or warmth needs a call to your doctor before exercising.",
    variations: []
  }
  );
})();

// ----- new versions: [name, how it differs, equipment if different, caution if needed] -----
(function () {
  const HARD = "Keep breathing and do not hold your breath. Stop if you feel sharp pain, dizziness, or chest pain.";
  const HANG = "Check that the straps and anchor will hold your full weight before you lean on them.";
  const DIP = "Do not sink past a comfortable depth. Dips are hard on the front of the shoulder.";
  const HEAD = "The weight moves near your head. Use a light weight and a secure grip.";
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

  addTo("cable-chest-press", [
    ["Standing Cable Press", "Stand between the cables, one foot forward, and press.", ["cable"]],
    ["Decline Cable Press", "Press forward and down, toward your hips.", ["cable"]],
    ["Incline Cable Press", "Sit back on an incline bench and press up and forward."]
  ]);
  addTo("suspension-chest-press", [
    ["Suspension Chest Fly", "With elbows slightly bent, open your arms wide, then bring your hands together.", null, "Harder on the shoulders than the press. Keep the range small. " + HANG],
    ["Suspension Chest Angel", "Keeping arms nearly straight, let them travel from your hips up toward your head and back.", null, "A very hard version for strong, healthy shoulders. " + HANG]
  ]);
  addTo("barbell-bench-press", [
    ["Decline Barbell Press", "Press on a bench that slopes down toward your head.", null, "Use a spotter. Your head is lower than your hips, so skip it with blood pressure or eye concerns."]
  ]);
  addTo("smith-incline-press", [
    ["Smith Machine Decline Press", "Press the Smith machine bar on a bench that slopes down toward your head.", null, "Set the safety stops first. Skip head-down positions with blood pressure or eye concerns."]
  ]);
  addTo("dumbbell-bench-press", [
    ["Decline Dumbbell Press", "Press dumbbells on a bench that slopes down toward your head.", null, "Have someone hand you the weights if you can. Skip head-down positions with blood pressure or eye concerns."]
  ]);
  addTo("machine-chest-press", [
    ["Decline Machine Press", "Use a press machine that pushes forward and down."]
  ]);
  addTo("cable-fly", [
    ["Lying Cable Fly", "Lie on a flat bench between low cables and bring your hands together above your chest.", ["cable", "bench"]],
    ["Seated Cable Fly", "Sit on an upright bench between the cables and bring your hands together in front.", ["cable", "bench"]],
    ["Incline Cable Fly", "Lie on an incline bench between low cables and bring your hands together above your upper chest.", ["cable", "bench"]]
  ]);
  addTo("dumbbell-fly", [
    ["Incline Dumbbell Fly", "Do the fly on a bench tilted up.", null, "Stop the arms level with your chest and use light weights."]
  ]);
  addTo("chest-dip", [
    ["Band-Assisted Dip", "Loop a strong band over the bars and kneel in it so it takes some of your weight.", ["machine", "band"], DIP + " Check the band and get on and off carefully."],
    ["Foot-Assisted Dip", "Use low bars or straps and let your feet on the floor take some of your weight.", ["machine", "suspension"], DIP],
    ["Weighted Dip", "Add weight with a dip belt or a dumbbell held between your legs.", ["machine", "dumbbell"], DIP + " Add weight only when bodyweight dips are steady."],
    ["Triceps Dip", "Stay upright with elbows close to your body so the back of your arms does more work.", null, DIP],
    ["Seated Dip Machine", "Sit at a dip machine and press the handles down.", ["machine"]],
    ["Cable Dip", "Press cable handles down by your sides from bent elbows to straight arms.", ["cable"]],
    ["Straight-Leg Bench Dip", "Hands on a bench behind you, legs straight with heels on the floor.", ["bench"], DIP + " Use a bench that cannot slide."],
    ["Weighted Bench Dip", "Do a bench dip with a weight resting on your lap.", ["bench", "dumbbell"], DIP + " Use a bench that cannot slide, and a weight that will not roll off."]
  ]);
  addTo("push-up", [
    ["Weighted Push-Up", "Add a weighted vest, or have a plate placed on your upper back.", ["dumbbell"], "Add weight only when regular push-ups are steady. " + HARD],
    ["Archer Push-Up", "With hands very wide, lower toward one hand while the other arm stays straight.", null, "An advanced move. It loads one shoulder and elbow heavily."],
    ["Clap Push-Up", "Push up fast enough to leave the floor and clap before you land.", null, "An advanced jumping move with a risk of falls and wrist injury. Land with soft elbows, on a forgiving surface."],
    ["Depth Push-Up", "Drop from two low blocks to the floor, then push up quickly back onto them.", ["step"], "An advanced jumping move. Use low, steady blocks. Skip it with any wrist, elbow or shoulder trouble."],
    ["Close-Grip Push-Up", "Place your hands closer than shoulder width and keep your elbows near your sides."],
    ["Incline Close-Grip Push-Up", "Hands close together on a sturdy bar or counter, which lightens the load.", ["table"], "Make sure the surface cannot move."],
    ["Knee Close-Grip Push-Up", "Keep your knees on the floor with your hands close together."]
  ]);
  addTo("doorway-pec-stretch", [
    ["Hands-Behind-Head Chest Stretch", "Clasp your hands behind your head and gently draw your elbows back.", ["none"], "Do not pull on your head or neck."]
  ]);
  addTo("serratus-punch", [
    ["Incline Punch Reach", "Lie back on an incline bench, arms straight, and reach the weight up by moving only your shoulder blades. Use dumbbells, a bar, cables or a machine.", ["bench", "dumbbell"]]
  ]);
  addTo("machine-triceps-extension", [
    ["Preacher Pad Triceps Extension", "Rest your upper arms on an angled pad while you straighten your elbows."]
  ]);
  addTo("close-grip-bench", [
    ["Machine Close-Grip Press", "Use a press machine with a narrow grip.", ["machine"]],
    ["Smith Machine Close-Grip Press", "Press the Smith machine bar with hands about shoulder width.", ["smith-machine", "bench"], "Set the safety stops first."]
  ]);
  addTo("overhead-tricep-extension", [
    ["Barbell Overhead Extension", "Hold a light bar overhead, bend your elbows to lower it behind your head, then straighten.", ["barbell"], HEAD],
    ["Rope Overhead Extension", "Face away from a cable and straighten your arms overhead with a rope.", ["cable"]],
    ["Suspension Triceps Extension", "Lean into straps, bend only your elbows so your head moves toward your hands, then straighten.", ["suspension"], HANG],
    ["One-Arm Lying Extension", "Lie on a bench and lower one dumbbell beside your head, then straighten.", ["dumbbell", "bench"], HEAD],
    ["Lying Cable Extension", "Lie on a bench facing away from a low cable and straighten your elbows.", ["cable", "bench"], HEAD]
  ]);
  addTo("tricep-pushdown", [
    ["Bent-Over Cable Extension", "Hinge forward facing away from or toward the cable and straighten your elbows."],
    ["Back-Supported Pushdown", "Lean your back on a support while you push down.", ["cable", "bench"]],
    ["V-Bar Pushdown", "Use a V-shaped handle."]
  ]);
  addTo("triceps-stretch", [
    ["Towel Triceps Stretch", "Hold a towel behind your back, one hand above and one below, and gently pull down.", ["towel"]]
  ]);
  addTo("barbell-curl", [
    ["Alternating Cable Curl", "Curl one cable handle at a time, switching sides.", ["cable"]],
    ["One-Arm Cable Curl", "Stand facing a low cable and curl with one arm.", ["cable"]],
    ["Machine Curl", "Sit at a curl machine and curl the handles.", ["machine"]],
    ["Face-Down Incline Curl", "Lie chest down on an incline bench and curl the bar.", ["barbell", "bench"]],
    ["Suspension Curl", "Lean back on straps, palms up, and curl yourself toward your hands.", ["suspension"], HANG]
  ]);
  addTo("dumbbell-curl", [
    ["Alternating Dumbbell Curl", "Curl one arm, lower it, then curl the other."],
    ["Cable Concentration Curl", "Sit with your elbow against your inner thigh and curl a low cable.", ["cable", "bench"]]
  ]);
  addTo("preacher-curl", [
    ["Cable Preacher Curl", "Curl a low cable with your upper arms on the pad.", ["cable", "bench"]],
    ["One-Arm Preacher Curl", "Curl one dumbbell with that upper arm on the pad."],
    ["Machine Preacher Curl", "Use a preacher curl machine.", ["machine"]],
    ["High-Arm Machine Curl", "Use a curl machine that holds your arms up near shoulder height.", ["machine"]]
  ]);
  addTo("wall-biceps-stretch", [
    ["Doorway Biceps Stretch", "Hold the door frame behind you, arm straight and thumb down, and turn gently away.", ["doorway"]],
    ["Seated Biceps Stretch", "Sit with hands behind you, fingers pointing back, and slide your hips forward a little.", ["none"], "Stop if the front of your shoulder hurts. Skip it if your wrists cannot bear weight."]
  ]);
  addTo("reverse-curl", [
    ["Cable Reverse Curl", "Curl a low cable bar with palms facing down.", ["cable"]],
    ["Machine Reverse Curl", "Use a curl machine with your palms facing down.", ["machine"]]
  ]);
  addTo("hammer-curl", [
    ["Alternating Hammer Curl", "Curl one arm at a time with thumbs up."],
    ["Machine Hammer Preacher Curl", "Use a preacher curl machine with handles that keep your thumbs up.", ["machine"]]
  ]);
  addTo("wrist-curls", [
    ["Barbell Wrist Curl", "Forearms resting on a bench, palms up, curl a light bar with your wrists.", ["barbell", "bench"]],
    ["Cable Wrist Curl", "Palms up, curl a low cable bar with your wrists.", ["cable"]],
    ["Machine Wrist Curl", "Use a wrist curl machine, palms up.", ["machine"]],
    ["Barbell Reverse Wrist Curl", "Palms down, lift a light bar with your wrists.", ["barbell", "bench"]],
    ["Cable Reverse Wrist Curl", "Palms down, lift a low cable bar with your wrists.", ["cable"]],
    ["Machine Reverse Wrist Curl", "Use a wrist machine, palms down.", ["machine"]],
    ["Wrist Curl, Palm Up", "Only one direction: forearm on a table or your thigh, palm up, lift your hand and lower it."],
    ["Wrist Curl, Palm Down", "Only one direction: forearm on a table or your thigh, palm down, lift your hand and lower it."],
    ["Band Wrist Curl, Palm Up", "Hold a band anchored under your foot, palm up, and lift your hand.", ["band"]],
    ["Band Wrist Curl, Palm Down", "Hold a band anchored under your foot, palm down, and lift your hand.", ["band"]]
  ]);
  addTo("grip-squeeze", [
    ["Grip Machine", "Squeeze the handles of a grip machine, one hand or both.", ["machine"]],
    ["Putty Squeeze", "Squeeze a lump of therapy putty in your palm, reshape it, and repeat.", ["putty"]],
    ["Key Pinch", "Press therapy putty between your thumb and the side of your index finger, as if turning a key.", ["putty"]]
  ]);
  addTo("wrist-flexor-stretch", [
    ["Kneeling Inner Forearm Stretch", "On hands and knees, turn your fingers toward your knees, palms down, and ease back.", ["none"], "This puts weight through your wrists. Move gently, and skip it if your wrists or knees object."]
  ]);
  addTo("wrist-extensor-stretch", [
    ["Kneeling Outer Forearm Stretch", "On hands and knees, rest the backs of your hands on the floor and ease back.", ["none"], "This puts weight through your wrists. Use very little pressure, and skip it if your wrists or knees object."]
  ]);
  addTo("forearm-rotation", [
    ["Machine Forearm Rotation", "Sit at a wrist rotation machine and turn the handle both ways.", ["machine"]]
  ]);
  addTo("elbow-flexion-extension", [
    ["Lying Elbow Bend & Straighten", "Lie on your back with your upper arm resting on the bed, and bend and straighten your elbow."]
  ]);
  addTo("wrist-circles", [
    ["Wrist Up and Down", "Forearm on a table or thigh, hand past the edge, move your hand up and down.", ["table"]],
    ["Wrist Side to Side", "Rest your forearm and move your hand toward your thumb side, then your little finger side.", ["table"]],
    ["Hand-Assisted Wrist Bend", "Use your other hand to bend the relaxed wrist up and down.", null, "Move only as far as is comfortable. After surgery or a broken bone, ask first."]
  ]);
})();
