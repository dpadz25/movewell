// MoveWell exercise database, Part 11: shoulder and upper back
// Instructions are written for MoveWell. Loads after exercises-round-b.js.

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ SHOULDER BLADES AND UPPER BACK ============
{
  id: "shoulder-blade-squeeze", name: "Shoulder Blade Squeeze", region: "upper-back", type: "strengthen",
  equipment: ["none"], position: "Seated or standing", level: 1,
  muscles: "Muscles between the shoulder blades",
  helps: ["posture", "upper-back", "neck-pain", "upper-cross"],
  dose: { sets: 2, reps: 10, hold: 5 },
  howTo: [
    "Sit or stand tall with your arms relaxed.",
    "Draw your shoulder blades back and together.",
    "Hold, keeping your shoulders down away from your ears.",
    "Relax and repeat."
  ],
  tips: ["Imagine holding a pencil between your shoulder blades."],
  caution: "Keep breathing. Stop if you feel sharp pain.",
  variations: []
},
{
  id: "doorway-upper-back-stretch", name: "Doorway Upper Back Stretch", region: "upper-back", type: "stretch",
  equipment: ["doorway"], position: "Standing in a doorway", level: 1,
  muscles: "Upper back, between the shoulder blades",
  helps: ["upper-back", "posture"],
  dose: { sets: 1, reps: 3, hold: 20, perSide: true },
  howTo: [
    "Stand facing the edge of a sturdy door frame.",
    "Reach one arm across your body and hold the frame.",
    "Bend your knees a little and let your weight sit back.",
    "Feel the stretch behind your shoulder blade, hold, then switch."
  ],
  tips: ["Let your upper back round."],
  caution: "Make sure your grip is secure and your feet will not slip.",
  variations: []
},
{
  id: "body-row", name: "Body Row", region: "upper-back", type: "lift",
  equipment: ["barbell"], position: "Hanging under a waist-high bar", level: 2,
  muscles: "Upper back, lats, biceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Set a sturdy bar in a rack at about waist height.",
    "Lie under it, grab it a little wider than your shoulders, and straighten your arms.",
    "With heels on the floor and body straight, pull your chest toward the bar.",
    "Lower slowly until your arms are straight."
  ],
  tips: ["A higher bar makes it easier."],
  caution: "Check that the bar cannot roll or slip before you hang from it. Stop for sharp pain, dizziness or chest pain.",
  variations: []
},

// ============ CHEST ============
{
  id: "foam-roller-chest-stretch", name: "Foam Roller Chest Stretch", region: "chest", type: "stretch",
  equipment: ["foam-roller"], position: "Lying along a foam roller", level: 1,
  muscles: "Chest, front of the shoulders",
  helps: ["posture", "upper-cross"],
  dose: { sets: 1, timeSec: 60 },
  howTo: [
    "Lie lengthwise on a foam roller so your head and tailbone are supported.",
    "Bend your knees and keep your feet flat for balance.",
    "Open your arms out to the sides, palms up.",
    "Relax and breathe while your chest stretches."
  ],
  tips: ["Rest your arms on cushions if they do not reach comfortably."],
  caution: "Get on and off slowly. Skip this if lying on the roller hurts your back or neck, or if your arms tingle.",
  variations: []
},
{
  id: "band-chest-press", name: "Band Chest Press", region: "chest", type: "strengthen",
  equipment: ["band"], position: "Standing or seated", level: 1,
  muscles: "Chest, shoulders, triceps",
  helps: ["general", "strength-training"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Wrap a band behind your upper back and hold one end in each hand.",
    "Start with your hands beside your chest, elbows bent.",
    "Press both hands straight forward.",
    "Return slowly."
  ],
  tips: ["Keep your shoulders down."],
  caution: "Check the band for tears and hold it firmly.",
  variations: []
},

// ============ SHOULDER ============
{
  id: "pulley-arm-raise", name: "Pulley Arm Raise", region: "shoulder", type: "mobility",
  equipment: ["door-pulley"], position: "Seated under a door pulley", level: 1,
  muscles: "Shoulder joint",
  helps: ["frozen-shoulder", "shoulder-pain", "rotator-cuff"],
  dose: { sets: 2, reps: 10, hold: 3 },
  howTo: [
    "Fix the pulley securely over a closed door and sit beneath it.",
    "Hold one handle in each hand.",
    "Pull down with your stronger arm so the other arm rises in front of you.",
    "Hold at a comfortable stretch, then lower slowly."
  ],
  tips: ["Let the working arm relax. The other arm does the pulling."],
  caution: "Make sure the door is closed and cannot be opened. Do not force the arm. After surgery, follow your surgeon's limits.",
  variations: []
},
{
  id: "forward-arm-raise", name: "Forward Arm Raise", region: "shoulder", type: "mobility",
  equipment: ["none"], position: "Standing or seated", level: 1,
  muscles: "Shoulder muscles",
  helps: ["shoulder-pain", "rotator-cuff", "frozen-shoulder"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Stand or sit tall with your arms by your sides, thumbs forward.",
    "Raise your arm in front of you as high as is comfortable.",
    "Lower it slowly."
  ],
  tips: ["Watch in a mirror so your shoulder does not hike up."],
  caution: "Stay below any painful point. After surgery, ask before lifting your arm on its own.",
  variations: []
},
{
  id: "straight-arm-band-pullback", name: "Straight-Arm Band Pull-Back", region: "shoulder", type: "strengthen",
  equipment: ["band"], position: "Standing", level: 1,
  muscles: "Back of the shoulder, lats",
  helps: ["shoulder-pain", "rotator-cuff", "posture"],
  dose: { sets: 2, reps: 10 },
  howTo: [
    "Anchor a band in front of you at about waist height and hold an end in each hand.",
    "Keep your arms straight.",
    "Pull your hands back until they are level with your hips.",
    "Return slowly."
  ],
  tips: ["Stand tall and squeeze your shoulder blades lightly."],
  caution: "Check the band and anchor first. Do not pull far behind your body.",
  variations: []
},
{
  id: "wall-ball-circles", name: "Ball Circles on the Wall", region: "shoulder", type: "strengthen",
  equipment: ["ball", "wall"], position: "Standing at a wall", level: 1,
  muscles: "Shoulder stabilizers",
  helps: ["shoulder-pain", "rotator-cuff"],
  dose: { sets: 2, timeSec: 30, perSide: true },
  howTo: [
    "Stand facing a wall and hold a small ball against it with one hand at shoulder height or lower.",
    "Keep your arm straight but not locked.",
    "Roll the ball in small circles.",
    "Change direction halfway through."
  ],
  tips: ["Small, smooth circles work best."],
  caution: "Lower your hand if the shoulder pinches.",
  variations: []
},
{
  id: "shoulder-blade-clocks", name: "Shoulder Blade Clocks", region: "shoulder", type: "mobility",
  equipment: ["none"], position: "Lying on your side or seated", level: 1,
  muscles: "Shoulder blade muscles",
  helps: ["shoulder-pain", "rotator-cuff", "posture"],
  dose: { sets: 1, reps: 10, perSide: true },
  howTo: [
    "Picture a clock face on your shoulder.",
    "Move your shoulder up toward 12, then down toward 6.",
    "Move it forward and back toward 3 and 9.",
    "Then draw slow circles both ways."
  ],
  tips: ["Keep your arm relaxed. Only the shoulder blade moves."],
  caution: "Keep the movement small and comfortable.",
  variations: []
},
{
  id: "pike-push-up", name: "Pike Push-Up", region: "shoulder", type: "lift",
  equipment: ["none"], position: "Hands and feet on the floor, hips high", level: 3,
  muscles: "Shoulders, triceps, upper chest",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 6 },
  howTo: [
    "Start in a push-up position, then walk your feet in so your hips point up.",
    "Bend your elbows and lower the top of your head toward the floor, just in front of your hands.",
    "Press back up."
  ],
  tips: ["Bend your knees if your hamstrings are tight."],
  caution: "This is a hard move with your head low. Skip it if you have shoulder, neck or blood pressure concerns. Lower under control so your head never drops.",
  variations: []
},
{
  id: "upright-row", name: "Upright Row", region: "shoulder", type: "lift",
  equipment: ["barbell"], position: "Standing", level: 2,
  muscles: "Shoulders, upper back",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand tall holding a light bar in front of your thighs, hands a little wider than hip width.",
    "Lift your elbows out to the sides, keeping the bar close to your body.",
    "Stop when your elbows reach shoulder height or lower.",
    "Lower slowly."
  ],
  tips: ["A wider grip is usually kinder to the shoulders."],
  caution: "This lift can pinch the shoulder. Never raise your elbows above your shoulders, and stop at any pinching or pain. Skip it if you already have shoulder trouble.",
  variations: []
},
{
  id: "rear-shoulder-row", name: "Rear Shoulder Row", region: "shoulder", type: "lift",
  equipment: ["barbell"], position: "Hinged forward, standing", level: 2,
  muscles: "Back of the shoulders, upper back",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Hold a light bar with a wide grip and bend forward at the hips with a flat back.",
    "Let the bar hang below your shoulders.",
    "Pull it toward your upper chest, elbows flaring out to the sides.",
    "Lower slowly."
  ],
  tips: ["Think about leading with your elbows."],
  caution: "Keep your back flat and the weight light. Stop for sharp pain, dizziness or chest pain.",
  variations: []
}

);

// ----- new versions: [name, how it differs, equipment if different, caution if needed] -----
(function () {
  const HANG = "Check that the straps and anchor will hold your full weight before you lean on them.";
  const OVERHEAD = "Skip overhead pressing if it pinches your shoulder or your arms tingle. Use a weight you can control.";
  const PINCH = "Keep your elbows at or below shoulder height and stop at any pinching.";
  const ASSIST = "Move only as far as is comfortable. After surgery, follow your surgeon's limits.";
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

  addTo("shoulder-blade-squeeze", [
    ["Band Shoulder Blade Squeeze", "Hold a band in front of you. Squeeze your shoulder blades together as you pull your hands apart.", ["band"]],
    ["Face-Down Shoulder Blade Squeeze", "Lie on your stomach, arms by your sides. Lift your shoulders slightly and squeeze your shoulder blades together."]
  ]);
  addTo("doorway-upper-back-stretch", [
    ["Bar Hold Back Stretch", "Hold a fixed upright bar with both hands and sit your hips back until your upper back stretches.", ["pullup-bar"], "Hold only something that is bolted in place and cannot tip."],
    ["Machine Back Stretch", "Use a back stretch machine. Hold the handles and let the machine ease you into a comfortable stretch.", ["machine"]],
    ["Self-Hug Upper Back Stretch", "Wrap your arms around yourself, hands on your shoulder blades, and let your upper back round.", ["none"]]
  ]);
  addTo("body-row", [
    ["Feet-Raised Body Row", "Rest your heels on a bench so your body is level, then row.", ["barbell", "bench"], "A hard version. Build up with the standard row first."],
    ["High-Bar Body Row", "Set the bar at chest height so you stand more upright. An easier way to row.", null],
    ["Weighted Body Row", "Rest a weight plate on your chest or wear a weighted vest while you row.", ["barbell", "dumbbell"], "Add weight only when the standard row is steady, and make sure it cannot slide off."],
    ["Suspension Body Row", "Hold hanging straps, lean back with a straight body, and pull your chest to your hands.", ["suspension"], HANG],
    ["One-Arm Suspension Row", "Row with one hand on a strap while keeping your hips and shoulders level.", ["suspension"], HANG]
  ]);
  addTo("foam-roller-chest-stretch", [
    ["Foam Roller Snow Angels", "While lying along the roller, slide your arms slowly up toward your head and back down."]
  ]);
  addTo("pulley-arm-raise", [
    ["Pulley Raise Out to the Side", "Let the working arm rise out to the side, thumb up, as your other arm pulls.", null, ASSIST]
  ]);
  addTo("forward-arm-raise", [
    ["Side Arm Raise", "Raise your arm out to the side, thumb up, as high as is comfortable."],
    ["Side-Lying Arm Raise", "Lie on your side and raise the top arm toward the ceiling, then lower slowly."],
    ["Band Forward Raise", "Stand on one end of a band and raise your straight arm in front of you.", ["band"]],
    ["Band Side Raise", "Stand on one end of a band and raise your arm out to the side, up to shoulder height.", ["band"]]
  ]);
  addTo("band-external-rotation", [
    ["Two-Arm Band Rotation Out", "Hold a band in both hands, elbows at your sides. Turn both forearms outward and squeeze your shoulder blades."],
    ["Raised-Arm Rotation Out", "Hold your upper arm out at shoulder height, elbow bent. Rotate your hand up and back.", null, "Harder on the shoulder. Skip it if it pinches or your shoulder has slipped out of place."],
    ["Cable Rotation Out", "Stand side-on to a low-set cable at elbow height and turn your forearm outward, elbow at your side.", ["cable"]],
    ["Supported Dumbbell Rotation Out", "Sit with your elbow resting on a support at shoulder height and rotate a light dumbbell upward.", ["dumbbell", "bench"], "Use a very light weight and a comfortable range."],
    ["Machine Rotation Out", "Use a rotation machine with your elbow on the pad and turn outward under control.", ["machine"]],
    ["Suspension Rotation Out", "Lean back holding straps, elbows bent, and rotate your hands outward to pull yourself up a little.", ["suspension"], "An advanced version. " + HANG]
  ]);
  addTo("band-internal-rotation", [
    ["Raised-Arm Rotation In", "Hold your upper arm out at shoulder height, elbow bent. Rotate your hand forward and down against the band.", null, "Harder on the shoulder. Skip it if it pinches or your shoulder has slipped out of place."],
    ["Cable Rotation In", "Stand side-on to a cable at elbow height and turn your forearm in across your belly.", ["cable"]],
    ["Lying Dumbbell Rotation In", "Lie on your back, elbow at your side and bent. Lower a light dumbbell outward, then bring it back over your belly.", ["dumbbell"], "Use a very light weight and a comfortable range."],
    ["Machine Rotation In", "Use a rotation machine with your elbow on the pad and turn inward under control.", ["machine"]]
  ]);
  addTo("band-row", [
    ["High Band Row", "Anchor the band above head height and pull your elbows down toward your sides."],
    ["Wide Row, Elbows Out", "Row with your elbows out at about shoulder height.", null, PINCH],
    ["Face-Down Row", "Lie on your stomach on a bed or bench with arms hanging. Bend your elbows up and squeeze your shoulder blades.", ["bench"]]
  ]);
  addTo("isometric-shoulder-abduction", [
    ["Inward Press", "Stand at a door frame, elbow bent, with the palm side of your wrist against it. Press inward without moving.", ["doorway"]]
  ]);
  addTo("pendulum", [
    ["Lying Arm Circles", "Lie on your back with your arm pointing at the ceiling and draw small, slow circles.", ["none"], "Keep circles small. After surgery, ask before holding your arm up on its own."]
  ]);
  addTo("doorway-pec-stretch", [
    ["Low Elbow", "Place your forearm on the frame with your elbow below shoulder height, then step through."],
    ["Doorway Rotation Stretch", "Keep your elbow at your side, hand on the frame, and turn your body away until the front of your shoulder stretches."]
  ]);
  addTo("band-pull-apart", [
    ["Lying Pull-Apart", "Lie on your back holding the band above your chest, palms down, and pull your hands out to the sides."]
  ]);
  addTo("prone-ytw", [
    ["On an Exercise Ball", "Rest your chest on an exercise ball, feet wide, and lift your arms into the Y and T shapes.", ["ball"], "Make sure the ball and your feet will not slip."]
  ]);
  addTo("behind-back-towel-stretch", [
    ["Behind-Back Stick Stretch", "Hold a stick behind your back with both hands and use the stronger arm to slide the other hand up.", ["stick"]]
  ]);
  addTo("table-slides", [
    ["Diagonal Table Slides", "Slide your arm forward and out to the side at an angle."],
    ["Side Table Slides", "Sit with your side to the table and slide your arm out to the side."]
  ]);
  addTo("stick-arm-raises", [
    ["Lying Stick Raise", "Only the raise: lie on your back, palms down on the stick, and lift both arms overhead."],
    ["One-Arm Stick Raise", "Hold one end in your sore hand and push the other end with your stronger hand to raise the arm.", null, ASSIST],
    ["Stick Raise Out to the Side", "Use the stick to push your sore arm out to the side and up.", null, ASSIST],
    ["Lying Stick Rotation", "Only the turn: elbows by your sides, bent. Push the stick side to side."],
    ["Standing Stick Rotation", "Stand with elbows by your sides, bent, and push the stick side to side."],
    ["Lying Stick Chest Press", "Lie on your back and press the stick up from your chest, then lower."],
    ["Helper-Hand Arm Raise", "No stick: clasp your hands or hold your sore wrist and lift that arm with your stronger one.", ["none"], ASSIST]
  ]);
  addTo("pike-push-up", [
    ["Feet-Raised Pike Push-Up", "Put your feet on a bench or box with hips high, then lower and press.", ["bench"], "A very hard version with your head low. Master the standard pike first and clear the floor around you."]
  ]);
  addTo("upright-row", [
    ["Dumbbell Upright Row", "Use a dumbbell in each hand so your wrists can move freely.", ["dumbbell"]],
    ["One-Arm Upright Row", "Lift one arm at a time with a dumbbell or low cable.", ["dumbbell", "cable"]],
    ["Cable Upright Row", "Stand facing a low cable with a bar or rope and pull upward.", ["cable"]],
    ["Smith Machine Upright Row", "Use the Smith machine bar, which moves on a fixed track.", ["smith-machine"]]
  ]);
  addTo("rear-shoulder-row", [
    ["Dumbbell Rear Row", "Row two dumbbells with your elbows flaring out to the sides.", ["dumbbell"]],
    ["Cable Rear Row", "Pull a cable handle or rope toward your upper chest with elbows high. One arm or both.", ["cable"]],
    ["Machine Rear Row", "Sit at a row machine and pull with your elbows out to the sides.", ["machine"]],
    ["Smith Machine Rear Row", "Hinge forward and row the Smith machine bar toward your upper chest.", ["smith-machine"]],
    ["Suspension Rear Row", "Lean back on straps and pull with your elbows high and wide.", ["suspension"], HANG],
    ["Under-the-Bar Rear Row", "Lie under a fixed bar, take a wide grip and pull your upper chest to it. Bend your knees or hinge at the hips to make it lighter.", null, "Check that the bar cannot roll or slip."]
  ]);
  addTo("dumbbell-front-raise", [
    ["Barbell Front Raise", "Raise a light barbell in front of you to shoulder height.", ["barbell"]],
    ["Suspension Front Raise", "Lean back on straps and raise your straight arms to pull your body upright.", ["suspension"], "An advanced version. " + HANG]
  ]);
  addTo("seated-dumbbell-shoulder-press", [
    ["Seated Barbell Press", "Sit upright and press a barbell from the top of your chest to overhead.", ["barbell", "bench"], OVERHEAD],
    ["Cable Shoulder Press", "Sit between two low cables and press the handles overhead.", ["cable", "bench"], OVERHEAD],
    ["Standing Cable Shoulder Press", "Stand between two low cables, brace your belly and press overhead.", ["cable"], OVERHEAD],
    ["One-Arm Dumbbell Press", "Press one dumbbell at a time without leaning to the side.", null, OVERHEAD],
    ["Smith Machine Shoulder Press", "Sit under the Smith machine bar and press it overhead.", ["smith-machine", "bench"], OVERHEAD]
  ]);
  addTo("machine-shoulder-press", [
    ["Reclined Machine Press", "Use a press machine with the back pad leaned back.", null, OVERHEAD],
    ["Palms-In Machine Press", "Hold the handles with your palms facing each other.", null, OVERHEAD]
  ]);
  addTo("lateral-raise", [
    ["Cable Y Raise", "Stand between low cables and raise your arms up and out into a Y.", ["cable"], "Use light weight and stop at any pinching."],
    ["Suspension Y Raise", "Lean back on straps and raise your arms into a Y to pull yourself upright.", ["suspension"], "An advanced version. " + HANG],
    ["Incline Lateral Raise", "Lie on your side against an incline bench and raise one dumbbell.", ["dumbbell", "bench"]],
    ["Machine Lateral Raise", "Sit at a side raise machine and lift your arms to shoulder height.", ["machine"]]
  ]);
  addTo("scaption-raise", [
    ["One-Arm Angled Raise", "Raise one light dumbbell at an angle between straight ahead and out to the side.", ["dumbbell"]],
    ["Cable Angled Raise", "Raise one arm at an angle using a low cable.", ["cable"]]
  ]);
  addTo("rear-delt-fly", [
    ["Cable Reverse Fly", "Stand between cables, cross your hands over, and open your arms out to the sides.", ["cable"]],
    ["Seated Reverse Fly", "Sit on a bench, lean your chest toward your knees and lift the dumbbells out to the sides.", ["dumbbell", "bench"]],
    ["Lying Machine Reverse Fly", "Use a machine where you lie face down and open your arms against the pads.", ["machine"]],
    ["Suspension Reverse Fly", "Lean back on straps and open your straight arms to pull yourself upright.", ["suspension"], "An advanced version. " + HANG]
  ]);
  addTo("cross-body-stretch", [
    ["Behind-Back Arm Pull", "Hold one wrist behind your back and gently pull it across, tilting your head the same way."]
  ]);
  addTo("barbell-row", [
    ["Underhand Barbell Row", "Hold the bar with your palms facing forward."],
    ["Smith Machine Bent-Over Row", "Row the Smith machine bar, which moves on a fixed track.", ["smith-machine"]]
  ]);
  addTo("single-arm-dumbbell-row", [
    ["Dumbbell Bent-Over Row", "Hinge forward with a dumbbell in each hand and row both together.", ["dumbbell"], "With no bench to support you, keep your back flat and the weight moderate."]
  ]);
  addTo("seated-cable-row", [
    ["One-Arm Bent-Over Cable Row", "Hinge forward facing a low cable and row with one arm.", ["cable"]],
    ["One-Arm High Cable Row", "Sit facing a high cable and pull one handle down toward your side.", ["cable"]],
    ["Incline Machine Row", "Rest your chest on an angled pad and row with palms facing each other.", ["machine"]],
    ["Wide Incline Machine Row", "Rest your chest on an angled pad and row with a wide grip.", ["machine"]],
    ["Machine High Row", "Use a machine where the handles start above you and pull down and back.", ["machine"]],
    ["Machine Low Row", "Use a machine where the handles start low and pull toward your hips.", ["machine"]],
    ["Wide Machine Row", "Row a machine with a wide grip.", ["machine"]],
    ["Underhand Machine Row", "Row a machine with your palms facing up.", ["machine"]]
  ]);
  addTo("t-bar-row", [
    ["Close-Grip T-Bar Row", "Use the narrow handle and keep your elbows close to your sides."]
  ]);
  addTo("dumbbell-shrug", [
    ["Trap Bar Shrug", "Stand inside a six-sided trap bar and shrug.", ["barbell"]],
    ["Cable Shrug", "Shrug while holding a low cable, one side or both.", ["cable"]],
    ["Seated Machine Shrug", "Sit at a machine, hold the handles and shrug.", ["machine"]],
    ["Machine Shrug", "Stand at a shrug machine and lift the handles with your shoulders.", ["machine"]],
    ["Hands-Free Machine Shrug", "Set your shoulders under the pads and shrug without holding a weight.", ["machine"]],
    ["Smith Machine Shrug", "Shrug while holding the Smith machine bar.", ["smith-machine"]],
    ["Upside-Down Shrug", "Hang upside down from sturdy bars with straight arms and shrug your shoulders.", ["pullup-bar"], "An advanced gymnastic move. Skip it unless you are confident upside down, and not with high blood pressure or eye, heart or neck problems."],
    ["Suspension Upside-Down Shrug", "Hang upside down from straps with straight arms and shrug your shoulders.", ["suspension"], "An advanced gymnastic move. Skip it with high blood pressure or eye, heart or neck problems. " + HANG]
  ]);
})();
