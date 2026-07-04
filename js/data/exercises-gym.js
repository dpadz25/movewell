// MoveWell exercise database, Part 4: Popular gym lifts
// The classics from push / pull / legs and upper / lower routines, using
// barbells, dumbbells, kettlebells, cables, machines, and bodyweight.
// Same schema as the therapy database. type "lift" marks a gym movement.

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ PUSH: CHEST ============
{
  id: "barbell-bench-press", name: "Barbell Bench Press", region: "chest", type: "lift",
  equipment: ["barbell", "bench"], position: "Lying on a flat bench", level: 3,
  muscles: "Chest, front shoulders, triceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Lie on the bench with your eyes under the bar and feet planted on the floor.",
    "Grip the bar a little wider than shoulder width and squeeze your shoulder blades together.",
    "Unrack the bar and lower it under control to your mid chest.",
    "Press the bar back up until your arms are straight, then repeat."
  ],
  tips: ["Keep your wrists stacked over your elbows on the way down.", "Use a spotter or safety arms when going heavy."],
  caution: "Never bench heavy without a spotter or safeties. Keep your shoulder blades pinched to protect the shoulders.",
  variations: [
    { name: "Close-Grip Bench Press", note: "Hands shoulder width apart. Shifts the work onto the triceps." },
    { name: "Incline Barbell Press", note: "Bench set to 30 degrees. Emphasizes the upper chest." },
    { name: "Smith Machine Bench", note: "The fixed bar path makes it easier to control while learning." }
  ]
},
{
  id: "dumbbell-bench-press", name: "Dumbbell Bench Press", region: "chest", type: "lift",
  equipment: ["dumbbell", "bench"], position: "Lying on a flat bench", level: 2,
  muscles: "Chest, front shoulders, triceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Sit on the bench with a dumbbell on each thigh, then lie back and bring them to your chest.",
    "Press both dumbbells up until your arms are straight above your chest.",
    "Lower them slowly until you feel a stretch across the chest.",
    "Press back up and repeat."
  ],
  tips: ["Dumbbells let each arm work on its own, which evens out strength differences.", "Kick the weights up with your knees when getting into position."],
  caution: "Do not let the dumbbells drift out wide at the bottom. Keep them over your elbows.",
  variations: [
    { name: "Floor Press", note: "Same movement lying on the floor. Friendlier on cranky shoulders." },
    { name: "Neutral Grip Press", note: "Palms facing each other. Often more comfortable for the shoulders." }
  ]
},
{
  id: "incline-dumbbell-press", name: "Incline Dumbbell Press", region: "chest", type: "lift",
  equipment: ["dumbbell", "bench"], position: "Lying on an incline bench", level: 2,
  muscles: "Upper chest, front shoulders, triceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set the bench to a 30 to 45 degree incline.",
    "Lie back with a dumbbell in each hand at shoulder level.",
    "Press the weights up and slightly together until your arms are straight.",
    "Lower under control to the start and repeat."
  ],
  tips: ["A lower incline hits more chest, a higher incline more shoulder.", "Keep your feet planted and your lower back lightly against the bench."],
  caution: "Start lighter than flat bench. The incline is always harder than people expect.",
  variations: [
    { name: "Incline Machine Press", note: "Same angle on a chest press machine for extra stability." }
  ]
},
{
  id: "machine-chest-press", name: "Machine Chest Press", region: "chest", type: "lift",
  equipment: ["machine"], position: "Seated at a chest press machine", level: 1,
  muscles: "Chest, front shoulders, triceps",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Adjust the seat so the handles line up with your mid chest.",
    "Grip the handles and press them forward until your arms are straight.",
    "Pause briefly, then let the handles come back slowly.",
    "Stop before the weight stack touches down and press again."
  ],
  tips: ["Machines are a great way to learn pressing before moving to free weights.", "Keep your head and back against the pad."],
  caution: "Set the seat height first. Pressing from too low or too high strains the shoulders.",
  variations: [
    { name: "Single Arm Press", note: "Press with one arm at a time to work each side evenly." }
  ]
},
{
  id: "cable-fly", name: "Cable Fly", region: "chest", type: "lift",
  equipment: ["cable"], position: "Standing between cable columns", level: 2,
  muscles: "Chest, front shoulders",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Set both pulleys to about chest height and grab a handle in each hand.",
    "Step forward into a staggered stance with a slight lean.",
    "With a soft bend in the elbows, sweep your hands together in front of your chest.",
    "Let your arms open back out slowly until you feel a chest stretch, then repeat."
  ],
  tips: ["Think of hugging a barrel rather than pressing.", "The stretch at the back is where the magic happens, so control it."],
  caution: "Keep the elbow bend constant. Turning it into a press defeats the purpose.",
  variations: [
    { name: "Pec Deck Machine", note: "The seated machine version. Very easy to learn." },
    { name: "Dumbbell Fly", note: "Same motion lying on a bench with dumbbells." },
    { name: "Low-to-High Fly", note: "Pulleys set low, sweeping up. Targets the upper chest." }
  ]
},
{
  id: "push-up", name: "Push-Up", region: "chest", type: "lift",
  equipment: ["none"], position: "Plank position on the floor", level: 2,
  muscles: "Chest, shoulders, triceps, core",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Start in a plank with hands slightly wider than your shoulders.",
    "Keep your body in one straight line from head to heels.",
    "Lower your chest toward the floor by bending your elbows.",
    "Press back up to the start and repeat."
  ],
  tips: ["Squeeze your glutes and brace your stomach to keep the hips from sagging.", "Elbows at about 45 degrees from your body, not flared straight out."],
  caution: "If your lower back aches, raise your hands onto a bench or counter instead.",
  variations: [
    { name: "Incline Push-Up", note: "Hands on a bench or counter. Easier version." },
    { name: "Knee Push-Up", note: "From the knees. Great stepping stone." },
    { name: "Deficit Push-Up", note: "Hands on dumbbells for extra depth. Harder version." }
  ]
},
{
  id: "chest-dip", name: "Chest Dip", region: "chest", type: "lift",
  equipment: ["machine"], position: "Supported on parallel bars", level: 3,
  muscles: "Lower chest, triceps, front shoulders",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Grip the parallel bars and press up to straight arms.",
    "Lean your torso slightly forward and bend your knees.",
    "Lower yourself until your upper arms are about parallel to the floor.",
    "Press back up to straight arms and repeat."
  ],
  tips: ["More forward lean works the chest, staying upright works the triceps.", "Most gyms have an assisted dip machine if bodyweight is too much."],
  caution: "Do not sink past a comfortable depth. Deep dips are hard on the front of the shoulder.",
  variations: [
    { name: "Assisted Dip Machine", note: "The knee pad offsets part of your bodyweight." },
    { name: "Bench Dip", note: "Hands on a bench behind you, feet on the floor. Easier version." }
  ]
},

// ============ PUSH: SHOULDERS ============
{
  id: "seated-dumbbell-shoulder-press", name: "Seated Dumbbell Shoulder Press", region: "shoulder", type: "lift",
  equipment: ["dumbbell", "bench"], position: "Seated on an upright bench", level: 2,
  muscles: "Shoulders, triceps, upper chest",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Sit on a bench with the back pad upright and a dumbbell at each shoulder.",
    "Brace your core and press both weights overhead until your arms are straight.",
    "Do not bang the dumbbells together at the top.",
    "Lower slowly back to shoulder level and repeat."
  ],
  tips: ["Keep your ribs down rather than arching your lower back to finish the press.", "A slight forward angle of the forearms is normal and fine."],
  caution: "Skip overhead pressing if you have thoracic outlet syndrome or shoulder impingement. Lateral raises and landmine presses are friendlier options.",
  variations: [
    { name: "Overhead Barbell Press", note: "Standing barbell version, a classic strength builder." },
    { name: "Arnold Press", note: "Rotate the palms from facing you to facing forward as you press." },
    { name: "Machine Shoulder Press", note: "The most stable and beginner friendly version." }
  ]
},
{
  id: "lateral-raise", name: "Dumbbell Lateral Raise", region: "shoulder", type: "lift",
  equipment: ["dumbbell"], position: "Standing", level: 1,
  muscles: "Side shoulders (lateral delts)",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Stand tall with a light dumbbell in each hand at your sides.",
    "With a soft bend in the elbows, raise both arms out to the sides.",
    "Stop when your hands reach about shoulder height.",
    "Lower slowly back to your sides and repeat."
  ],
  tips: ["Lead with your elbows, like pouring out two jugs of water.", "Lighter than you think. This is a small muscle and swinging cheats it."],
  caution: "Do not shrug the weights up with your traps. If your neck takes over, go lighter.",
  variations: [
    { name: "Cable Lateral Raise", note: "Constant tension through the whole arc." },
    { name: "Seated Lateral Raise", note: "Sitting removes the urge to swing." }
  ]
},
{
  id: "dumbbell-front-raise", name: "Dumbbell Front Raise", region: "shoulder", type: "lift",
  equipment: ["dumbbell"], position: "Standing", level: 1,
  muscles: "Front shoulders (anterior delts)",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Stand tall with a light dumbbell in each hand resting on the front of your thighs.",
    "With a soft bend in the elbows, raise both arms straight out in front of you.",
    "Stop when your hands reach about shoulder height, palms facing down.",
    "Lower slowly back to your thighs and repeat."
  ],
  tips: ["Brace your core so your lower back doesn't arch as the weights come up.", "Alternating one arm at a time makes it easier to keep the body still."],
  caution: "No swinging or leaning back to heave the weight up. Stop at shoulder height, going higher just irritates the shoulder.",
  variations: [
    { name: "Alternating Front Raise", note: "One arm at a time. Easier to control and kinder to the lower back." },
    { name: "Plate Front Raise", note: "Hold a single weight plate with both hands like a steering wheel." },
    { name: "Cable Front Raise", note: "Facing away from a low pulley. Constant tension through the whole arc." },
    { name: "Incline Front Raise", note: "Chest against an incline bench. Removes all momentum and body English." }
  ]
},
{
  id: "rear-delt-fly", name: "Rear Delt Fly", region: "shoulder", type: "lift",
  equipment: ["dumbbell", "machine"], position: "Hinged forward or seated at a machine", level: 2,
  muscles: "Rear shoulders, upper back",
  helps: ["strength-training", "posture", "upper-cross"],
  dose: { sets: 3, reps: 15 },
  howTo: [
    "Hinge forward at the hips with a flat back, a light dumbbell in each hand.",
    "Let your arms hang straight down, palms facing each other.",
    "Sweep your arms out to the sides, squeezing between the shoulder blades.",
    "Lower slowly and repeat."
  ],
  tips: ["The reverse pec deck machine is the easiest way to learn this.", "Rear delts balance out all the pressing most people do."],
  caution: "Keep the weights light and the motion smooth. Momentum takes the rear delts out of it.",
  variations: [
    { name: "Reverse Pec Deck", note: "Seated machine version facing the pad." },
    { name: "Chest-Supported Fly", note: "Lying face down on an incline bench removes lower back strain." }
  ]
},

// ============ PUSH: TRICEPS ============
{
  id: "tricep-pushdown", name: "Cable Tricep Pushdown", region: "arms", type: "lift",
  equipment: ["cable"], position: "Standing at a cable station", level: 1,
  muscles: "Triceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Set a rope or straight bar on a high pulley and grip it with both hands.",
    "Pin your elbows to your sides and stand tall.",
    "Push the handle down until your arms are fully straight.",
    "Let it rise slowly to chest height, keeping your elbows still, and repeat."
  ],
  tips: ["With a rope, pull the two ends apart slightly at the bottom.", "Everything moves below the elbow. The upper arm stays glued in place."],
  caution: "If your elbows drift forward, the weight is too heavy.",
  variations: [
    { name: "Single Arm Pushdown", note: "One arm at a time with a small handle." },
    { name: "Reverse Grip Pushdown", note: "Palms up, hits the triceps from a different angle." }
  ]
},
{
  id: "overhead-tricep-extension", name: "Overhead Tricep Extension", region: "arms", type: "lift",
  equipment: ["dumbbell", "cable"], position: "Standing or seated", level: 2,
  muscles: "Triceps (long head)",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Hold one dumbbell with both hands and press it overhead.",
    "Keeping your elbows pointing forward, lower the weight behind your head.",
    "Feel the stretch in the back of your arms.",
    "Straighten your arms back to the top and repeat."
  ],
  tips: ["The overhead stretch position grows the biggest part of the triceps.", "Keep your elbows narrow rather than letting them flare wide."],
  caution: "Move slowly behind the head. Keep the weight light until the movement feels smooth.",
  variations: [
    { name: "Cable Overhead Extension", note: "Face away from a low pulley with a rope for constant tension." },
    { name: "Skull Crusher", note: "Lying on a bench, lower a bar or dumbbells to the forehead. Same muscle, different angle." }
  ]
},
{
  id: "skull-crusher", name: "Skull Crusher (Lying Tricep Extension)", region: "arms", type: "lift",
  equipment: ["barbell", "dumbbell", "bench"], position: "Lying on a flat bench", level: 2,
  muscles: "Triceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Lie on a bench holding an EZ bar or dumbbells above your chest.",
    "Keeping your upper arms vertical, bend the elbows to lower the weight toward your forehead.",
    "Stop just above your head.",
    "Straighten your arms back to the start and repeat."
  ],
  tips: ["Lowering slightly behind the head instead of to the forehead is easier on the elbows.", "An EZ curl bar is more comfortable on the wrists than a straight bar."],
  caution: "The name is a warning. Use a weight you can fully control.",
  variations: [
    { name: "Dumbbell Skull Crusher", note: "One dumbbell per hand with neutral palms." }
  ]
},

// ============ PULL: BACK ============
{
  id: "deadlift", name: "Barbell Deadlift", region: "hip", type: "lift",
  equipment: ["barbell"], position: "Standing over a loaded barbell", level: 3,
  muscles: "Glutes, hamstrings, entire back, grip",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 5 },
  howTo: [
    "Stand with the bar over the middle of your feet, about hip width apart.",
    "Hinge down and grip the bar just outside your legs, with a flat back and chest up.",
    "Push the floor away and stand up tall, keeping the bar close to your body.",
    "Hinge back down under control to set the bar on the floor, then repeat."
  ],
  tips: ["Think of it as a push with your legs, not a pull with your back.", "Take a big breath and brace your stomach before every rep."],
  caution: "Learn this with light weight or a trainer first. A rounded lower back under load is the classic way people get hurt.",
  variations: [
    { name: "Trap Bar Deadlift", note: "The hexagon bar keeps the load centered and is easier to learn." },
    { name: "Sumo Deadlift", note: "Wide stance, hands inside the knees. More upright torso." },
    { name: "Rack Pull", note: "Bar starts elevated on rack pins. Shorter range for building the top half." }
  ]
},
{
  id: "romanian-deadlift", name: "Romanian Deadlift (RDL)", region: "hip", type: "lift",
  equipment: ["barbell", "dumbbell"], position: "Standing", level: 2,
  muscles: "Hamstrings, glutes, lower back",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand tall holding a barbell or dumbbells in front of your thighs.",
    "With a slight knee bend, push your hips straight back and let the weight slide down your legs.",
    "Stop when you feel a strong hamstring stretch, around mid shin.",
    "Drive your hips forward to stand back up, squeezing your glutes at the top."
  ],
  tips: ["The knees stay softly bent the whole time. All the motion comes from the hips.", "Keep the weight brushing your legs. Drifting forward strains the back."],
  caution: "Keep your back flat throughout. Shorten the range if your back starts to round.",
  variations: [
    { name: "Single Leg RDL", note: "One leg at a time. Adds a balance challenge." },
    { name: "Dumbbell RDL", note: "Same hinge with dumbbells, great for learning." }
  ]
},
{
  id: "lat-pulldown", name: "Lat Pulldown", region: "upper-back", type: "lift",
  equipment: ["machine", "cable"], position: "Seated at a pulldown station", level: 1,
  muscles: "Lats, biceps, mid back",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Sit with your thighs snug under the pads and grip the bar wider than your shoulders.",
    "Lean back very slightly and lift your chest.",
    "Pull the bar down to the top of your chest, driving your elbows down and back.",
    "Let the bar rise slowly until your arms are fully stretched, then repeat."
  ],
  tips: ["Think about pulling with your elbows, not your hands.", "This is the best way to build up to your first pull-up."],
  caution: "Always pull to the front of the chest, never behind the neck.",
  variations: [
    { name: "Close Neutral Grip", note: "Palms facing each other on a V handle. Comfortable and strong." },
    { name: "Single Arm Pulldown", note: "One handle at a time to fix side-to-side gaps." }
  ]
},
{
  id: "pull-up", name: "Pull-Up", region: "upper-back", type: "lift",
  equipment: ["pullup-bar"], position: "Hanging from a bar", level: 3,
  muscles: "Lats, biceps, grip, core",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 6 },
  howTo: [
    "Hang from a bar with hands slightly wider than your shoulders, palms facing away.",
    "Squeeze your shoulder blades down, then pull your chest toward the bar.",
    "Get your chin over the bar without kicking or swinging.",
    "Lower yourself all the way down under control and repeat."
  ],
  tips: ["Full hang at the bottom, chin over bar at the top. Half reps build half strength.", "Bands or the assisted machine let you train the full movement while building up."],
  caution: "Lower under control rather than dropping. The slow descent is half the exercise.",
  variations: [
    { name: "Chin-Up", note: "Palms facing you. Uses more biceps and is a bit easier." },
    { name: "Assisted Pull-Up Machine", note: "The knee pad offsets bodyweight so anyone can start." },
    { name: "Negative Pull-Up", note: "Jump to the top, lower down as slowly as possible." }
  ]
},
{
  id: "barbell-row", name: "Barbell Bent-Over Row", region: "upper-back", type: "lift",
  equipment: ["barbell"], position: "Hinged forward, standing", level: 3,
  muscles: "Lats, mid back, rear shoulders, biceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Hold a barbell and hinge forward until your torso is about 45 degrees to the floor.",
    "Let the bar hang at arm's length below your shoulders.",
    "Pull the bar to your lower ribs, driving the elbows back.",
    "Lower under control and repeat without standing up between reps."
  ],
  tips: ["Brace your core like someone is about to poke your stomach.", "A tight hinge position matters more than the weight on the bar."],
  caution: "If your lower back fatigues before your upper back, switch to chest-supported rows.",
  variations: [
    { name: "Pendlay Row", note: "Bar rests on the floor between reps. Strict and powerful." },
    { name: "Chest-Supported Row", note: "Lying on an incline bench. Removes all lower back strain." }
  ]
},
{
  id: "seated-cable-row", name: "Seated Cable Row", region: "upper-back", type: "lift",
  equipment: ["cable", "machine"], position: "Seated at a row station", level: 1,
  muscles: "Mid back, lats, biceps",
  helps: ["strength-training", "posture", "general"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Sit with your feet on the platform and knees slightly bent.",
    "Grab the handle and sit tall with your chest up.",
    "Pull the handle to your stomach, squeezing your shoulder blades together.",
    "Let your arms reach fully forward under control, then pull again."
  ],
  tips: ["Imagine pinching a pencil between your shoulder blades on every rep.", "A tall chest beats a heavy stack. Do not rock back and forth."],
  caution: "Keep your lower back neutral. Lean from the hips only slightly, not the spine.",
  variations: [
    { name: "Wide Grip Row", note: "A long bar with a wide grip shifts work to the rear delts." },
    { name: "Machine Row", note: "Chest pad machine version, very beginner friendly." }
  ]
},
{
  id: "single-arm-dumbbell-row", name: "Single Arm Dumbbell Row", region: "upper-back", type: "lift",
  equipment: ["dumbbell", "bench"], position: "One hand and knee on a bench", level: 2,
  muscles: "Lats, mid back, biceps, grip",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Place your left hand and left knee on a bench, right foot on the floor.",
    "Hold a dumbbell in your right hand, arm hanging straight down.",
    "Pull the dumbbell up to your hip, keeping your elbow close to your body.",
    "Lower it all the way down with control. Finish the set, then switch sides."
  ],
  tips: ["Pull toward your hip pocket, not straight up to your chest.", "Keep your back flat like a table top."],
  caution: "Avoid twisting your torso to heave the weight up.",
  variations: [
    { name: "Meadows Row", note: "Rowing the end of a landmine barbell. A bodybuilding favorite." },
    { name: "Kroc Row", note: "Higher reps with a heavier bell and a little body english. Advanced." }
  ]
},
{
  id: "back-extension", name: "Back Extension (Hyperextension)", region: "lower-back", type: "lift",
  equipment: ["machine"], position: "On a 45 degree back extension bench", level: 2,
  muscles: "Lower back, glutes, hamstrings",
  helps: ["strength-training", "low-back-pain"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Set the pad at the crease of your hips and hook your heels under the rollers.",
    "Cross your arms over your chest and hinge down until your torso is near vertical.",
    "Squeeze your glutes to raise your torso until your body forms a straight line.",
    "Lower with control and repeat."
  ],
  tips: ["Squeeze the glutes to lift rather than yanking with the lower back.", "Hold a weight plate to your chest once bodyweight gets easy."],
  caution: "Do not hyperextend past a straight line at the top.",
  variations: [
    { name: "Glute-Focused Extension", note: "Round your upper back slightly and tuck the chin to keep it all glutes." }
  ]
},
{
  id: "dumbbell-shrug", name: "Dumbbell Shrug", region: "upper-back", type: "lift",
  equipment: ["dumbbell", "barbell"], position: "Standing", level: 1,
  muscles: "Upper trapezius",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Stand tall with a heavy dumbbell in each hand at your sides.",
    "Shrug your shoulders straight up toward your ears.",
    "Pause and squeeze at the top for a second.",
    "Lower all the way down and repeat."
  ],
  tips: ["Straight up and down. Rolling the shoulders adds nothing and irritates joints.", "A slow lower builds more muscle than a heavy bounce."],
  caution: "Skip shrugs if you deal with neck pain or thoracic outlet syndrome. Tight upper traps are usually part of that picture.",
  variations: [
    { name: "Barbell Shrug", note: "Lets you load heavier with the bar in front of your thighs." }
  ]
},
{
  id: "kelso-shrug", name: "Kelso Shrug", region: "upper-back", type: "lift",
  equipment: ["dumbbell", "bench"], position: "Chest down on a low incline bench", level: 2,
  muscles: "Middle and lower trapezius, rhomboids",
  helps: ["strength-training", "upper-cross", "posture", "tos"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Set a bench to a low incline and lie chest-down with a dumbbell in each hand hanging straight toward the floor.",
    "Keep your arms completely straight the whole time. This is a shrug for the shoulder blades, not a row.",
    "Squeeze your shoulder blades back and together, lifting the weights an inch or two.",
    "Pause and hold the squeeze for a second, then let the blades spread apart slowly and repeat."
  ],
  tips: ["Think about pinching a pencil between your shoulder blades.", "Light weight with a hard squeeze beats heavy weight here. The range is tiny by design."],
  caution: "Keep your neck long and relaxed. If your upper traps or neck take over, go lighter.",
  variations: [
    { name: "Cable Row Kelso Shrug", note: "Seated at a cable row, pull the shoulder blades back and together without bending the elbows." },
    { name: "Chest-Supported Machine Version", note: "Chest against a supported-row pad, retracting the blades only. Very easy to lock in the form." }
  ]
},

// ============ PULL: BICEPS ============
{
  id: "barbell-curl", name: "Barbell Curl", region: "arms", type: "lift",
  equipment: ["barbell"], position: "Standing", level: 2,
  muscles: "Biceps, forearms",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand holding a barbell with an underhand grip, hands shoulder width.",
    "Keeping your elbows pinned to your sides, curl the bar up to shoulder height.",
    "Squeeze the biceps at the top.",
    "Lower slowly all the way down until your arms are straight, then repeat."
  ],
  tips: ["The slow lower is where most of the growth comes from.", "An EZ curl bar is kinder to the wrists than a straight bar."],
  caution: "No swinging the hips to heave the bar up. If you must swing, it is too heavy.",
  variations: [
    { name: "EZ Bar Curl", note: "Angled grips reduce wrist strain." },
    { name: "Preacher Curl", note: "Arms braced on an angled pad. Zero cheating possible." },
    { name: "Cable Curl", note: "Constant tension from bottom to top." }
  ]
},
{
  id: "dumbbell-curl", name: "Dumbbell Curl", region: "arms", type: "lift",
  equipment: ["dumbbell"], position: "Standing or seated", level: 1,
  muscles: "Biceps, forearms",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand with a dumbbell in each hand, palms facing forward.",
    "Curl both weights up toward your shoulders, elbows staying at your sides.",
    "Squeeze at the top.",
    "Lower slowly to straight arms and repeat."
  ],
  tips: ["Alternating arms lets you focus on each side.", "Turning the pinky up slightly at the top adds an extra biceps squeeze."],
  caution: "Keep your shoulders back. Letting them roll forward turns curls into a front raise.",
  variations: [
    { name: "Incline Curl", note: "Seated on an incline bench, arms hanging back. A deep biceps stretch." },
    { name: "Concentration Curl", note: "Elbow braced against your inner thigh, one arm at a time." }
  ]
},
{
  id: "hammer-curl", name: "Hammer Curl", region: "arms", type: "lift",
  equipment: ["dumbbell"], position: "Standing", level: 1,
  muscles: "Biceps, brachialis, forearms",
  helps: ["strength-training", "tennis-elbow"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Hold a dumbbell in each hand with palms facing your body, like holding hammers.",
    "Curl the weights up without rotating your wrists.",
    "Squeeze at the top with thumbs pointing up.",
    "Lower slowly and repeat."
  ],
  tips: ["The neutral grip trains the forearm muscles that support achy elbows.", "You can usually go a bit heavier than regular curls."],
  caution: "Same rule as all curls. Elbows stay pinned, no swinging.",
  variations: [
    { name: "Cross-Body Hammer Curl", note: "Curl across toward the opposite shoulder." },
    { name: "Rope Hammer Curl", note: "Cable rope version with constant tension." }
  ]
},

// ============ LEGS ============
{
  id: "barbell-back-squat", name: "Barbell Back Squat", region: "knee", type: "lift",
  equipment: ["barbell"], position: "Standing, bar on upper back", level: 3,
  muscles: "Quads, glutes, core",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Set the bar on your upper traps, not your neck, and step back from the rack.",
    "Stand with feet shoulder width, toes turned slightly out.",
    "Sit down and back, keeping your chest up, until your thighs reach about parallel.",
    "Drive through your whole foot to stand back up."
  ],
  tips: ["Take a big breath at the top and brace before every rep.", "Depth you can control with a flat back beats forced extra depth."],
  caution: "Squat inside a rack with safety pins set just below your bottom position.",
  variations: [
    { name: "Front Squat", note: "Bar on the front of the shoulders. More upright, more quads." },
    { name: "Box Squat", note: "Sit lightly to a box each rep to learn depth and stay consistent." },
    { name: "Smith Machine Squat", note: "Fixed bar path adds stability while learning." }
  ]
},
{
  id: "goblet-squat", name: "Goblet Squat", region: "knee", type: "lift",
  equipment: ["kettlebell", "dumbbell"], position: "Standing", level: 1,
  muscles: "Quads, glutes, core",
  helps: ["strength-training", "general", "knee-pain"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Hold a kettlebell or dumbbell with both hands against your chest.",
    "Stand with feet shoulder width, toes slightly out.",
    "Squat down between your knees, keeping your chest tall.",
    "Push through your feet to stand and repeat."
  ],
  tips: ["The front-held weight acts as a counterbalance, making depth easier.", "This is the single best way to learn squatting before the barbell."],
  caution: "Keep your heels on the floor. If they lift, raise them on small plates or work on ankle mobility.",
  variations: [
    { name: "Goblet Squat with Pause", note: "Hold three seconds at the bottom to build control." }
  ]
},
{
  id: "leg-press", name: "Leg Press", region: "knee", type: "lift",
  equipment: ["machine"], position: "Seated in a leg press machine", level: 1,
  muscles: "Quads, glutes, hamstrings",
  helps: ["strength-training", "general", "knee-oa"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Sit in the machine with your feet shoulder width on the platform.",
    "Release the safety handles and lower the platform toward your chest.",
    "Stop before your lower back rolls off the pad.",
    "Press the platform away until your legs are nearly straight, without locking hard."
  ],
  tips: ["Feet higher on the platform hits more glutes and hamstrings, lower hits more quads.", "A great option to load the legs without loading the spine."],
  caution: "Never lock your knees harshly at the top, and keep your hips on the seat throughout.",
  variations: [
    { name: "Single Leg Press", note: "One leg at a time to fix strength gaps." },
    { name: "Calf Press", note: "Press the platform with just the balls of your feet for a calf workout." }
  ]
},
{
  id: "walking-lunge", name: "Walking Lunge", region: "knee", type: "lift",
  equipment: ["none", "dumbbell"], position: "Standing, open floor space", level: 2,
  muscles: "Quads, glutes, balance",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Stand tall, hands at your sides or holding dumbbells.",
    "Step forward farther than a normal stride and bend both knees to about 90 degrees.",
    "Let the back knee hover just above the floor.",
    "Push through the front foot and step forward into the next lunge."
  ],
  tips: ["Keep your torso upright, like a string is pulling the top of your head up.", "Longer steps hit the glutes more, shorter steps hit the quads."],
  caution: "If balance is shaky, do stationary lunges next to a rail first.",
  variations: [
    { name: "Reverse Lunge", note: "Step backward instead. Easier on the knees." },
    { name: "Stationary Split Squat", note: "Stay in one split stance and pump up and down." }
  ]
},
{
  id: "bulgarian-split-squat", name: "Bulgarian Split Squat", region: "knee", type: "lift",
  equipment: ["bench", "dumbbell"], position: "Standing, rear foot elevated on a bench", level: 3,
  muscles: "Quads, glutes, balance",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 8, perSide: true },
  howTo: [
    "Stand a big step in front of a bench and place the top of your rear foot on it.",
    "Keeping your torso tall, lower your back knee toward the floor.",
    "Go as deep as you can control.",
    "Drive through the front foot to stand. Finish the set, then switch legs."
  ],
  tips: ["Hop your front foot forward or back until the bottom position feels stable.", "Famous for being brutally effective. Start with bodyweight only."],
  caution: "Expect serious muscle soreness the first week. Ease in with low sets.",
  variations: [
    { name: "Front Foot Elevated Split Squat", note: "Front foot on a small plate for extra depth." },
    { name: "Goblet Hold Version", note: "Hold one weight at the chest to stay more upright." }
  ]
},
{
  id: "hip-thrust", name: "Barbell Hip Thrust", region: "hip", type: "lift",
  equipment: ["barbell", "bench"], position: "Upper back on a bench, hips on the floor", level: 2,
  muscles: "Glutes, hamstrings",
  helps: ["strength-training", "hip-pain"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Sit on the floor with your upper back against a bench and a padded barbell over your hips.",
    "Plant your feet flat, about hip width, close to your glutes.",
    "Drive through your heels and lift your hips until your body is a flat tabletop.",
    "Squeeze your glutes hard at the top, then lower with control."
  ],
  tips: ["Tuck your chin and look forward at the top rather than arching your neck back.", "The strongest glute exercise there is. Most people can load it heavier than they expect."],
  caution: "Finish flat, not hyperextended. The lift comes from glutes, not the lower back arching.",
  variations: [
    { name: "Glute Bridge (Floor)", note: "Shoulders stay on the floor. Shorter range, no bench needed." },
    { name: "Single Leg Hip Thrust", note: "One foot down, one leg lifted. No barbell required." },
    { name: "Machine Hip Thrust", note: "Many gyms now have a dedicated thrust machine with a belt." }
  ]
},
{
  id: "leg-extension", name: "Leg Extension", region: "knee", type: "lift",
  equipment: ["machine"], position: "Seated in a leg extension machine", level: 1,
  muscles: "Quadriceps",
  helps: ["strength-training", "knee-pain", "knee-oa"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Sit with your back against the pad and the roller on your shins above the ankles.",
    "Grip the handles at your sides.",
    "Straighten your knees to lift the roller until your legs are fully extended.",
    "Squeeze the quads at the top, then lower slowly."
  ],
  tips: ["A one second pause at the top makes lighter weight work harder.", "One of the few ways to fully isolate the quads."],
  caution: "Use smooth, controlled reps. Kicking the weight up fast is rough on the kneecap.",
  variations: [
    { name: "Single Leg Extension", note: "One leg at a time, useful after injuries." }
  ]
},
{
  id: "lying-leg-curl", name: "Lying Leg Curl", region: "knee", type: "lift",
  equipment: ["machine"], position: "Face down on a leg curl machine", level: 1,
  muscles: "Hamstrings",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Lie face down with the roller against the back of your ankles.",
    "Hold the handles and keep your hips pressed into the pad.",
    "Curl your heels toward your glutes.",
    "Lower slowly until your legs are almost straight, then repeat."
  ],
  tips: ["Point your toes toward your shins to make the hamstrings do all the work.", "Hips stay glued down. Lifting them cheats the range."],
  caution: "Do not let the weight yank your legs straight at the bottom.",
  variations: [
    { name: "Seated Leg Curl", note: "Seated machine version. Research suggests it grows hamstrings slightly better." },
    { name: "Swiss Ball Leg Curl", note: "Bridge up on a ball and curl it toward you. No machine needed." }
  ]
},
{
  id: "standing-calf-raise-machine", name: "Standing Calf Raise (Machine)", region: "ankle-foot", type: "lift",
  equipment: ["machine", "step"], position: "Standing on a calf raise machine or step", level: 1,
  muscles: "Calves (gastrocnemius)",
  helps: ["strength-training", "achilles"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Stand with the balls of your feet on the platform, shoulders under the pads.",
    "Let your heels sink below the platform for a full stretch.",
    "Rise up as high as you can onto your toes.",
    "Pause at the top, then lower slowly to the stretch."
  ],
  tips: ["Full stretch at the bottom and a pause at the top beat bouncing every time.", "Calves respond to slow reps and honest range."],
  caution: "No bouncing out of the bottom stretch position.",
  variations: [
    { name: "Seated Calf Raise", note: "Bent knees target the deeper soleus muscle." },
    { name: "Single Leg Calf Raise", note: "One leg on a step holding a dumbbell." }
  ]
},
{
  id: "kettlebell-swing", name: "Kettlebell Swing", region: "hip", type: "lift",
  equipment: ["kettlebell"], position: "Standing", level: 2,
  muscles: "Glutes, hamstrings, core, grip",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 15 },
  howTo: [
    "Stand with feet shoulder width, kettlebell on the floor a foot in front of you.",
    "Hinge at the hips, grab the bell, and hike it back between your legs.",
    "Snap your hips forward to swing the bell up to chest height.",
    "Let it swing back between your legs and immediately drive into the next rep."
  ],
  tips: ["The power comes from the hip snap, not the arms. Your arms are just ropes.", "Stand up hard and squeeze your glutes at the top of every swing."],
  caution: "This is a hip hinge, not a squat. If your back gets sore, practice the hinge with light weight first.",
  variations: [
    { name: "Single Arm Swing", note: "One hand on the bell. Adds a core anti-rotation challenge." },
    { name: "Dead-Stop Swing", note: "Reset the bell on the floor between each rep to drill form." }
  ]
},
{
  id: "kettlebell-deadlift", name: "Kettlebell Deadlift", region: "hip", type: "lift",
  equipment: ["kettlebell"], position: "Standing over a kettlebell", level: 1,
  muscles: "Glutes, hamstrings, back, grip",
  helps: ["strength-training", "general", "low-back-pain"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand with the kettlebell between your feet.",
    "Push your hips back and bend your knees to grip the handle with both hands.",
    "Flatten your back, then stand up tall by driving through your feet.",
    "Push your hips back to set the bell down and repeat."
  ],
  tips: ["The perfect first hinge exercise before barbell deadlifts.", "Keep your chest proud and arms long the whole way."],
  caution: "Keep the bell close to your body. Reaching forward rounds the back.",
  variations: [
    { name: "Suitcase Deadlift", note: "Bell beside one foot, lifted one-handed like luggage." }
  ]
},

// ============ CORE (GYM) ============
{
  id: "plank", name: "Plank", region: "core", type: "lift",
  equipment: ["none"], position: "Face down on forearms and toes", level: 2,
  muscles: "Entire core, shoulders",
  helps: ["strength-training", "general", "low-back-pain", "posture"],
  dose: { sets: 3, timeSec: 30 },
  howTo: [
    "Lie face down, then prop up onto your forearms and toes.",
    "Form one straight line from head to heels.",
    "Squeeze your glutes and brace your stomach.",
    "Breathe steadily and hold until the timer chimes."
  ],
  tips: ["A shorter perfect plank beats a long saggy one.", "Push the floor away so your upper back does not sink between the shoulders."],
  caution: "Stop when your hips start to sag. That is the set, no matter what the clock says.",
  variations: [
    { name: "Incline Plank", note: "Forearms on a bench. Easier version." },
    { name: "Side Plank", note: "On one forearm, hips stacked. Targets the obliques." },
    { name: "Plank with Shoulder Tap", note: "From a push-up position, tap each shoulder without wobbling." }
  ]
},
{
  id: "hanging-leg-raise", name: "Hanging Leg Raise", region: "core", type: "lift",
  equipment: ["pullup-bar"], position: "Hanging from a bar", level: 3,
  muscles: "Lower abs, hip flexors, grip",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Hang from a pull-up bar with straight arms.",
    "Keeping your legs together, raise them until your thighs pass parallel.",
    "Curl your pelvis up slightly at the top for full ab work.",
    "Lower slowly without swinging and repeat."
  ],
  tips: ["Bent knees make it easier, straight legs make it harder.", "Control the way down to kill the swing."],
  caution: "If you swing like a pendulum, slow down and reset between reps.",
  variations: [
    { name: "Hanging Knee Raise", note: "Knees tucked. The starting version." },
    { name: "Captain's Chair Raise", note: "Forearms on the pads of the vertical knee raise station." }
  ]
},
{
  id: "cable-crunch", name: "Cable Crunch", region: "core", type: "lift",
  equipment: ["cable"], position: "Kneeling below a high pulley", level: 2,
  muscles: "Rectus abdominis (six pack)",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Kneel facing a high pulley, holding a rope on either side of your head.",
    "Keep your hips still and locked in place.",
    "Crunch your ribs down toward your pelvis, rounding your upper back.",
    "Return slowly until your abs are stretched, then repeat."
  ],
  tips: ["The hips do not move. Only the spine flexes.", "One of the few easy ways to add weight to ab training."],
  caution: "Pull with your abs, not your arms. Hands just hold the rope in place.",
  variations: [
    { name: "Machine Crunch", note: "Seated ab crunch machine with the same motion." }
  ]
},
{
  id: "russian-twist", name: "Russian Twist", region: "core", type: "lift",
  equipment: ["none", "dumbbell", "ball"], position: "Seated, leaning back slightly", level: 2,
  muscles: "Obliques, entire core",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Sit on the floor with knees bent and lean back to about 45 degrees.",
    "Hold a weight or medicine ball at your chest.",
    "Rotate your torso to bring the weight beside one hip.",
    "Rotate all the way across to the other hip. That is one rep per side."
  ],
  tips: ["Rotate from the ribs, letting your eyes and chest travel together.", "Feet down is easier, feet hovering is harder."],
  caution: "Slow and controlled. Fast twisting under load is rough on the spine.",
  variations: [
    { name: "Feet Elevated Twist", note: "Hover the feet for a much harder version." },
    { name: "Cable Woodchop", note: "Standing rotation at a cable stack, high to low." }
  ]
},
{
  id: "ab-wheel-rollout", name: "Ab Wheel Rollout", region: "core", type: "lift",
  equipment: ["none"], position: "Kneeling with an ab wheel or barbell", level: 3,
  muscles: "Entire core, lats",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Kneel with the wheel under your shoulders, arms straight.",
    "Brace your core hard and tuck your tailbone slightly.",
    "Roll the wheel forward as far as you can without your back arching.",
    "Pull the wheel back to the start using your abs and lats."
  ],
  tips: ["Range grows with strength. Short rollouts done well are plenty at first.", "A loaded barbell with round plates works if you have no wheel."],
  caution: "The moment your lower back arches, you have gone too far. Shorten the range.",
  variations: [
    { name: "Wall Rollout", note: "Roll toward a wall that stops the wheel, limiting the range safely." },
    { name: "Standing Rollout", note: "From the feet instead of knees. Extremely advanced." }
  ]
},

// ============ MORE MACHINES & SMITH MACHINE ============
{
  id: "t-bar-row", name: "T-Bar Row", region: "upper-back", type: "lift",
  equipment: ["machine", "barbell"], position: "Standing, hinged over the bar", level: 2,
  muscles: "Lats, mid-back, rear delts, biceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Straddle the bar and grab the handles with a neutral grip.",
    "Hinge to about 45 degrees with a flat back and soft knees.",
    "Pull the handles to your chest, driving your elbows back.",
    "Squeeze your shoulder blades together, then lower with control."
  ],
  tips: ["The chest-pad version removes lower back strain entirely.", "Think about pulling with your elbows, not your hands."],
  caution: "Keep your back flat. If it rounds, lower the weight.",
  variations: [
    { name: "Chest-Supported T-Bar Row", note: "Lying on the machine's pad takes the lower back out of it." },
    { name: "Landmine Row", note: "Same movement using a barbell wedged in a corner." }
  ]
},
{
  id: "chest-supported-db-row", name: "Chest-Supported Incline Dumbbell Row", region: "upper-back", type: "lift",
  equipment: ["dumbbell", "bench"], position: "Chest down on an incline bench", level: 2,
  muscles: "Lats, mid-back, rear delts, biceps",
  helps: ["strength-training", "posture"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set a bench to about 30 to 45 degrees and lie chest-down on it.",
    "Let the dumbbells hang straight down with your arms long.",
    "Row both dumbbells up until your elbows pass your torso.",
    "Squeeze the shoulder blades, then lower slowly."
  ],
  tips: ["Because the bench holds your torso, every rep is pure back work with zero cheating.", "Great choice when your lower back is tired from squats or deadlifts."],
  caution: "Keep your neck relaxed. Look at the floor, not the mirror.",
  variations: [
    { name: "Single Arm Version", note: "One side at a time to fix left-right imbalances." },
    { name: "Rear Delt Emphasis", note: "Row with elbows flared wide to hit the rear shoulders more." }
  ]
},
{
  id: "scapular-pulldown", name: "Scapular Pull-Down", region: "upper-back", type: "strengthen",
  equipment: ["cable", "machine"], position: "Seated at a lat pulldown station", level: 1,
  muscles: "Lower traps, lats (scapular depression)",
  helps: ["posture", "tos", "shoulder-pain", "strength-training", "upper-cross"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Sit at a lat pulldown and hold the bar with straight arms.",
    "Without bending your elbows, pull your shoulder blades down and back.",
    "The bar moves a few inches as your shoulders drop away from your ears.",
    "Hold one second, then let the blades glide back up."
  ],
  tips: ["This teaches your shoulder blades to move before your arms do, the foundation of healthy pulling.", "Do these before pull-ups or pulldowns as a primer."],
  caution: "The movement is small. If your elbows bend, you are turning it into a pulldown.",
  variations: [
    { name: "Hanging Scapular Pull", note: "Same motion hanging from a pull-up bar. Harder, and builds grip too." }
  ]
},
{
  id: "hack-squat", name: "Hack Squat", region: "knee", type: "lift",
  equipment: ["machine"], position: "Back against the machine pad", level: 2,
  muscles: "Quads, glutes",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set your back and shoulders against the pads, feet shoulder-width on the platform.",
    "Release the safeties and lower under control until your thighs are at least parallel.",
    "Drive through your whole foot to press back up.",
    "Keep your knees tracking over your toes the whole way."
  ],
  tips: ["The machine locks in your torso, so it isolates the quads more than a free squat.", "Lower foot placement hits more quad, higher placement hits more glute."],
  caution: "Do not let your hips tuck under at the bottom. Cut the depth where your form holds.",
  variations: [
    { name: "Narrow Stance", note: "More outer quad emphasis." },
    { name: "Reverse Hack Squat", note: "Facing the pad shifts work toward the glutes." }
  ]
},
{
  id: "machine-hip-thrust", name: "Machine Hip Thrust", region: "hip", type: "lift",
  equipment: ["machine"], position: "Seated in the hip thrust machine", level: 1,
  muscles: "Glutes, hamstrings",
  helps: ["strength-training", "hip-pain"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set your upper back against the pad and the belt or pad across your hips.",
    "Plant your feet flat, shins vertical at the top position.",
    "Drive through your heels and squeeze your glutes to full hip extension.",
    "Pause one second at the top, then lower with control."
  ],
  tips: ["The machine is faster to set up than a barbell hip thrust and easier on the hip bones.", "Tuck your chin slightly and keep your ribs down for a stronger squeeze."],
  caution: "Do not arch your lower back at the top. The finish comes from the glutes, not the spine.",
  variations: [
    { name: "Single Leg Version", note: "One foot at a time doubles the challenge without more weight." },
    { name: "Pause Reps", note: "Hold 3 seconds at the top for extra glute time under tension." }
  ]
},
{
  id: "seated-leg-curl", name: "Seated Leg Curl", region: "knee", type: "lift",
  equipment: ["machine"], position: "Seated in the leg curl machine", level: 1,
  muscles: "Hamstrings",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Sit with the pad on the back of your lower calves and the thigh pad locked down.",
    "Curl your heels down and under you as far as they go.",
    "Squeeze the hamstrings hard at the bottom.",
    "Return slowly, resisting the weight the whole way up."
  ],
  tips: ["Research favors the seated version over lying: the hamstrings work at a longer length here, which grows them faster.", "Slow negatives (3 seconds up) make a light stack feel heavy."],
  caution: "Do not let the weight yank your legs back up. Control both directions.",
  variations: [
    { name: "Lying Leg Curl", note: "The face-down machine version. Fine if seated is taken." },
    { name: "Single Leg Version", note: "One leg at a time to catch imbalances." }
  ]
},
{
  id: "smith-squat", name: "Smith Machine Squat", region: "knee", type: "lift",
  equipment: ["smith-machine"], position: "Bar across the upper back, feet slightly forward", level: 2,
  muscles: "Quads, glutes",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set the bar at shoulder height and duck under it, bar across your upper traps.",
    "Walk your feet slightly forward of the bar, about shoulder-width.",
    "Unhook the bar and squat down until thighs reach parallel.",
    "Drive up through your whole foot, then re-hook when done."
  ],
  tips: ["The fixed bar path means no balancing act, so you can push the legs hard safely.", "Feet forward turns it into more of a quad and glute slide, which is the point."],
  caution: "Always know where the safety hooks are before your first rep.",
  variations: [
    { name: "Smith Split Squat", note: "One foot forward, one back. A very stable Bulgarian split squat." },
    { name: "Smith Calf Raise", note: "Bar on your back, press up onto your toes off a small plate or block." },
    { name: "Smith Romanian Deadlift", note: "Hold the bar at your thighs and hinge. A guided hamstring hinge." }
  ]
},
{
  id: "smith-incline-press", name: "Smith Machine Incline Press", region: "chest", type: "lift",
  equipment: ["smith-machine", "bench"], position: "On an incline bench under the bar", level: 2,
  muscles: "Upper chest, front shoulders, triceps",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Set an incline bench at about 30 degrees under the Smith bar.",
    "Line the bar up with your upper chest, just below the collarbones.",
    "Unhook, lower the bar to a light touch on your chest.",
    "Press up and slightly back until your arms are long."
  ],
  tips: ["The guided bar lets you chase upper-chest growth without a spotter.", "Set the safety stops just below chest level so you can always bail out."],
  caution: "Get the bench position right before loading weight. A bar path over your neck or belly ruins the lift.",
  variations: [
    { name: "Smith Flat Bench Press", note: "Flat bench under the bar for the classic press with training wheels." },
    { name: "Close Grip Version", note: "Hands shoulder-width shifts the work to the triceps." }
  ]
},
{
  id: "incline-dumbbell-curl", name: "Incline Dumbbell Curl", region: "arms", type: "lift",
  equipment: ["dumbbell", "bench"], position: "Lying back on an incline bench", level: 2,
  muscles: "Biceps (long head, stretched position)",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set a bench to about 45 to 60 degrees and lie back with a dumbbell in each hand.",
    "Let your arms hang straight down and slightly behind you.",
    "Curl both dumbbells up without letting your elbows drift forward.",
    "Lower all the way to a full stretch each rep."
  ],
  tips: ["Training the biceps at a long muscle length like this is one of the best-supported tricks in hypertrophy research.", "Go lighter than your standing curl. The stretch position is humbling."],
  caution: "If the hanging stretch bothers your shoulder, raise the bench angle a notch.",
  variations: [
    { name: "Alternating Version", note: "One arm at a time for better focus." },
    { name: "Incline Hammer Curl", note: "Neutral grip shifts work to the brachialis and forearms." }
  ]
},

// ============ MORE ABS ============
{
  id: "decline-sit-up", name: "Decline Sit-Up", region: "core", type: "lift",
  equipment: ["bench"], position: "On a decline bench, feet hooked", level: 2,
  muscles: "Rectus abdominis (six-pack), hip flexors",
  helps: ["strength-training"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Hook your feet under the pads of a decline bench and lie back.",
    "Cross your arms over your chest or hold a plate against it.",
    "Curl your torso up, ribs toward hips, until you are most of the way up.",
    "Lower yourself slowly, one vertebra at a time."
  ],
  tips: ["The decline adds range and resistance that floor sit-ups cannot match.", "Once 15 reps feel easy, hold a plate on your chest instead of adding reps. Abs grow with load like any muscle."],
  caution: "Do not yank your neck with your hands. If your lower back complains, reduce the decline angle.",
  variations: [
    { name: "Weighted Decline Sit-Up", note: "Hug a plate or dumbbell to your chest for progressive overload." },
    { name: "Twisting Decline Sit-Up", note: "Rotate a shoulder toward the opposite knee at the top to involve the obliques." }
  ]
},
{
  id: "bicycle-crunch", name: "Bicycle Crunch", region: "core", type: "strengthen",
  equipment: ["none"], position: "Lying on your back", level: 1,
  muscles: "Abs and obliques together",
  helps: ["strength-training", "general"],
  dose: { sets: 3, reps: 20 },
  howTo: [
    "Lie on your back, hands lightly behind your head, knees up.",
    "Bring one knee in while extending the other leg out.",
    "Rotate your opposite elbow toward the bent knee.",
    "Switch sides in a slow pedaling rhythm."
  ],
  tips: ["In classic EMG research this ranked among the highest activation moves for both abs and obliques.", "Slower is stronger. Racing through reps turns it into a neck exercise."],
  caution: "Do not pull on your head. Elbows stay wide.",
  variations: [
    { name: "Feet-Down Version", note: "Tap the free heel to the floor between reps to make it easier." },
    { name: "Slow Count Version", note: "Three seconds per side. Brutal and effective." }
  ]
},

// ============ CARDIO ============
{
  id: "incline-treadmill-walk", name: "Incline Treadmill Walk", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Treadmill at 5 to 12 percent incline", level: 1,
  muscles: "Heart and lungs, calves, glutes",
  helps: ["conditioning", "general", "knee-oa"],
  dose: { sets: 1, timeSec: 900 },
  howTo: [
    "Set the treadmill to a comfortable walking speed, around 2.5 to 3.5 mph.",
    "Raise the incline until it feels like a purposeful hill, 5 to 12 percent.",
    "Walk tall without hanging onto the rails.",
    "You should be able to talk, but not sing."
  ],
  tips: ["Incline walking gives running-level heart work with a fraction of the joint impact.", "A favorite cool-down after lifting: 10 to 15 minutes torches extra calories without eating into recovery."],
  caution: "Holding the rails and leaning back cancels most of the incline. Lower it instead.",
  variations: [
    { name: "12-3-30 Style", note: "The popular recipe: 12 percent incline, 3 mph, 30 minutes." },
    { name: "Outdoor Hill Walk", note: "Same idea on real hills." }
  ]
},
{
  id: "treadmill-run", name: "Treadmill Jog / Run", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Treadmill, flat or 1 percent incline", level: 2,
  muscles: "Heart and lungs, whole lower body",
  helps: ["conditioning", "general"],
  dose: { sets: 1, timeSec: 1200 },
  howTo: [
    "Warm up with 3 to 5 minutes of brisk walking.",
    "Increase to an easy jog where you could still hold a conversation.",
    "Keep your steps short and quick, landing under your body.",
    "Finish with 2 to 3 minutes of walking to cool down."
  ],
  tips: ["A 1 percent incline best mimics outdoor running.", "Most of your running should feel easy. Speed comes from consistency, not heroics."],
  caution: "Build running time gradually, no more than about 10 percent per week, or shins and knees will complain.",
  variations: [
    { name: "Walk-Jog Intervals", note: "Alternate 1 minute jogging with 2 minutes walking when starting out." }
  ]
},
{
  id: "stationary-bike", name: "Stationary Bike", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Seated, saddle at hip height", level: 1,
  muscles: "Heart and lungs, quads, glutes",
  helps: ["conditioning", "general", "knee-oa", "knee-pain"],
  dose: { sets: 1, timeSec: 1200 },
  howTo: [
    "Set the saddle so your knee has a slight bend at the bottom of the pedal stroke.",
    "Pedal at a smooth, steady rhythm, around 80 to 100 rpm.",
    "Adjust resistance so your legs feel worked but not burning.",
    "Stay tall through your spine rather than slumping over the bars."
  ],
  tips: ["The bike is the most knee-friendly cardio there is, and physical therapists prescribe it for knee arthritis on purpose.", "Zero impact makes it the perfect leg-day cool-down."],
  caution: "Saddle too low is the number one cause of bike knee pain. When in doubt, raise it.",
  variations: [
    { name: "Recumbent Bike", note: "The chair-style bike. Easier on the back and hips." },
    { name: "Spin Intervals", note: "30 seconds hard, 90 seconds easy, repeated." }
  ]
},
{
  id: "rowing-machine", name: "Rowing Machine", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Seated on the rower", level: 2,
  muscles: "Heart and lungs, legs, back, arms. About 85 percent of your muscle in one machine",
  helps: ["conditioning", "general", "strength-training"],
  dose: { sets: 1, timeSec: 600 },
  howTo: [
    "Strap in and grab the handle with straight arms, shins vertical.",
    "Drive with your legs first, then lean back slightly, then pull the handle to your ribs.",
    "Reverse it: arms away, lean forward, then bend the knees.",
    "Aim for a steady 20 to 26 strokes per minute."
  ],
  tips: ["The order is legs, body, arms on the way back, and arms, body, legs on the return.", "Rowing trains the upper back while doing cardio, a rare two-for-one."],
  caution: "Keep your back tall through the drive. Rounding under fatigue is the main rowing mistake.",
  variations: [
    { name: "500m Repeats", note: "Row 500 meters at effort, rest 90 seconds, repeat 4 to 6 times." }
  ]
},
{
  id: "elliptical", name: "Elliptical", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Standing on the pedals", level: 1,
  muscles: "Heart and lungs, whole body, zero impact",
  helps: ["conditioning", "general", "post-surgery"],
  dose: { sets: 1, timeSec: 1200 },
  howTo: [
    "Step on and start pedaling in a smooth forward motion.",
    "Use the moving handles to involve your upper body.",
    "Set resistance so the effort feels steady, about a 5 to 7 out of 10.",
    "Stand tall. Avoid leaning your weight on the handles."
  ],
  tips: ["Great choice on days your joints want a break but your heart still needs work.", "Pedaling backward for a few minutes shifts the work toward the hamstrings and glutes."],
  caution: "If your toes go numb, wiggle them and shift your feet occasionally. It is a common quirk of the machine.",
  variations: [
    { name: "No-Hands Version", note: "Let go of the handles to challenge balance and posture." }
  ]
},
{
  id: "stair-climber", name: "Stair Climber", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Standing on the rotating stairs", level: 2,
  muscles: "Heart and lungs, glutes, quads, calves",
  helps: ["conditioning", "general", "strength-training"],
  dose: { sets: 1, timeSec: 600 },
  howTo: [
    "Start at a slow step rate and find your rhythm.",
    "Place your whole foot on each step and push through the heel.",
    "Rest your fingertips on the rails for balance only.",
    "Increase speed gradually as you warm up."
  ],
  tips: ["Minute for minute, one of the hardest-working cardio machines in the gym, and it doubles as glute training.", "Skipping a step (every other stair) turns it into a serious glute session."],
  caution: "Death-gripping the rails and hunching over cuts the work in half. Slow down and stand tall instead.",
  variations: [
    { name: "Sideways Steps", note: "A minute facing each side works the outer hips." }
  ]
},
{
  id: "jump-rope-cardio", name: "Jump Rope", region: "balance", type: "cardio",
  equipment: ["jump-rope"], position: "Standing, rope in both hands", level: 2,
  muscles: "Heart and lungs, calves, coordination",
  helps: ["conditioning", "general"],
  dose: { sets: 3, timeSec: 60 },
  howTo: [
    "Size the rope: standing on its middle, the handles should reach your armpits.",
    "Jump just an inch or two off the ground, landing softly on the balls of your feet.",
    "Spin the rope from your wrists, not your shoulders.",
    "Work in short rounds with rest between."
  ],
  tips: ["Ten minutes of rope work is a serious conditioning session, and it builds bouncy, resilient calves and ankles.", "Trip on the rope? That is normal. Reset and keep the rounds short."],
  caution: "High impact. Skip it if you have active foot, achilles, or shin pain, and jump on forgiving floors, not concrete.",
  variations: [
    { name: "Boxer Skip", note: "Shift weight foot to foot instead of jumping with both. Easier to sustain." },
    { name: "Double Unders", note: "Two rope spins per jump. An advanced conditioning skill." }
  ]
},
{
  id: "sprint-intervals", name: "Sprint Intervals (HIIT)", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Bike, rower, treadmill, or hill", level: 3,
  muscles: "Heart and lungs, maximal effort systems",
  helps: ["conditioning", "strength-training"],
  dose: { sets: 6, timeSec: 30 },
  howTo: [
    "Warm up thoroughly for at least 5 minutes first.",
    "Go hard for 30 seconds, around an 8 or 9 out of 10 effort.",
    "Recover easy for 90 seconds or more.",
    "Repeat 4 to 8 rounds, then cool down."
  ],
  tips: ["Interval training improves cardio fitness in roughly half the session time of steady work, which is why it is so well studied.", "The bike and rower are the safest places to sprint. Treadmill sprints demand caution."],
  caution: "This is the spiciest cardio there is. Build a base of easy cardio for a few weeks before adding sprints, and skip it if you have heart or blood pressure concerns without clearance.",
  variations: [
    { name: "Beginner Intervals", note: "20 seconds brisk, 100 seconds easy. Same idea, gentler dose." },
    { name: "Norwegian 4x4", note: "4 minutes hard, 3 minutes easy, 4 rounds. A research favorite for building VO2 max." }
  ]
}
);
