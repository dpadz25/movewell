// MoveWell exercise database: expansion pack.
// Cardio (home and machine), balance progressions, missing PT classics,
// mobility warmups, recovery/self-massage, breathing, extra gym lifts,
// and additional yoga poses (yoga stays hidden behind the Yoga filter).

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ CARDIO ============
{
  id: "brisk-outdoor-walk", name: "Brisk Outdoor Walk", region: "balance", type: "cardio",
  equipment: ["none"], position: "Outdoors, comfortable shoes", level: 1,
  muscles: "Heart and lungs, whole lower body",
  helps: ["conditioning", "general"],
  dose: { sets: 1, timeSec: 1800 },
  howTo: [
    "Pick a route with even ground to start.",
    "Walk fast enough that your breathing picks up but you can still talk.",
    "Swing your arms naturally and look ahead, not down.",
    "Slow your pace for the last few minutes to cool down."
  ],
  tips: ["A good pace feels like you are late for an appointment.", "Add gentle hills as it gets easier."],
  variations: [
    { name: "Hiking", note: "Trails and hills work the legs and balance harder. Poles help on uneven ground." }
  ]
},
{
  id: "swimming", name: "Swimming / Water Walking", region: "balance", type: "cardio",
  equipment: ["none"], position: "Pool", level: 1,
  muscles: "Heart and lungs, whole body",
  helps: ["conditioning", "general", "knee-oa"],
  dose: { sets: 1, timeSec: 1200 },
  howTo: [
    "In the pool, swim laps at an easy pace, or walk through chest-deep water.",
    "For water walking, take long strides and pump your arms under the water.",
    "Rest at the wall whenever you need to.",
    "Build up time gradually across visits."
  ],
  tips: ["The water carries your body weight, so this is the gentlest cardio there is for sore joints."]
},
{
  id: "chair-aerobics", name: "Seated Chair Aerobics", region: "balance", type: "cardio",
  equipment: ["chair"], position: "Sitting tall on a sturdy chair", level: 1,
  muscles: "Heart and lungs, arms, legs",
  helps: ["conditioning", "general"],
  dose: { sets: 1, timeSec: 600 },
  howTo: [
    "Sit tall near the front edge of a sturdy chair.",
    "March your feet while pumping your arms.",
    "Mix in toe taps, knee lifts, and arm reaches overhead and out to the sides.",
    "Keep moving to music and switch moves every 30 seconds or so."
  ],
  tips: ["Music with a steady beat makes the time fly.", "Everything counts, keep the feet or arms moving the whole time."],
  variations: [
    { name: "Seated Punches", note: "Alternate punching straight ahead at shoulder height, quick but controlled." }
  ]
},
{
  id: "arm-bike", name: "Arm Bike (Upper Body Ergometer)", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Seated at the arm crank machine", level: 1,
  muscles: "Heart and lungs, shoulders, arms",
  helps: ["conditioning", "general"],
  dose: { sets: 1, timeSec: 600 },
  howTo: [
    "Sit with the crank axle at about shoulder height.",
    "Grip the handles and pedal with your arms at an easy pace.",
    "Keep your shoulders relaxed and your trunk tall.",
    "Pedal backward now and then to change the work."
  ],
  tips: ["Perfect cardio when legs, hips, or knees need a rest."]
},
{
  id: "jumping-jacks", name: "Jumping Jacks", region: "balance", type: "cardio",
  equipment: ["none"], position: "Standing", level: 2,
  muscles: "Heart and lungs, whole body",
  helps: ["conditioning", "general"],
  dose: { sets: 3, timeSec: 60 },
  howTo: [
    "Stand tall with feet together and arms at your sides.",
    "Jump your feet out wide while sweeping your arms overhead.",
    "Jump back to the start position.",
    "Repeat at a steady rhythm."
  ],
  tips: ["Land softly with knees slightly bent."],
  variations: [
    { name: "Step Jacks", note: "Step one foot out at a time instead of jumping. Same move, no impact." }
  ]
},
{
  id: "high-knees", name: "High Knees", region: "balance", type: "cardio",
  equipment: ["none"], position: "Standing", level: 2,
  muscles: "Heart and lungs, hip flexors, core",
  helps: ["conditioning", "general"],
  dose: { sets: 3, timeSec: 45 },
  howTo: [
    "Run in place, driving each knee up toward hip height.",
    "Pump your arms as if sprinting.",
    "Stay tall, do not lean back.",
    "Land lightly on the balls of your feet."
  ],
  tips: ["March instead of run for a low-impact version."]
},
{
  id: "mountain-climbers-cardio", name: "Mountain Climbers", region: "balance", type: "cardio",
  equipment: ["none"], position: "Plank position on hands", level: 2,
  muscles: "Heart and lungs, core, shoulders",
  helps: ["conditioning", "general"],
  dose: { sets: 3, timeSec: 45 },
  howTo: [
    "Start in a strong plank with hands under shoulders.",
    "Drive one knee toward your chest, then quickly switch legs.",
    "Keep your hips low and level, like running in place horizontally.",
    "Move at a pace you can control."
  ],
  tips: ["Slow it down to a march if your hips start bouncing."],
  caution: "Skip if your wrists hurt in a plank position."
},
{
  id: "burpees", name: "Burpees", region: "balance", type: "cardio",
  equipment: ["none"], position: "Standing", level: 3,
  muscles: "Heart and lungs, whole body",
  helps: ["conditioning"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "From standing, crouch and place your hands on the floor.",
    "Jump or step your feet back to a plank.",
    "Do a push-up if you want the full version.",
    "Jump or step your feet back in, then stand or jump up with arms overhead."
  ],
  tips: ["Step back and step in for a gentler version that still works."],
  caution: "Demanding on the whole body. Build up slowly."
},
{
  id: "shadow-boxing", name: "Shadow Boxing", region: "balance", type: "cardio",
  equipment: ["none"], position: "Standing, staggered stance", level: 1,
  muscles: "Heart and lungs, shoulders, core",
  helps: ["conditioning", "general"],
  dose: { sets: 3, timeSec: 180 },
  howTo: [
    "Stand with one foot slightly ahead, fists up near your chin.",
    "Throw relaxed punches at the air: jabs, crosses, hooks.",
    "Keep your feet moving with small steps and weight shifts.",
    "Punch in combinations of two to four, breathe out with each punch."
  ],
  tips: ["Speed matters less than staying loose and moving the whole round."]
},
{
  id: "air-bike", name: "Air Bike (Assault Bike)", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Seated on the fan bike", level: 2,
  muscles: "Heart and lungs, whole body",
  helps: ["conditioning"],
  dose: { sets: 1, timeSec: 600 },
  howTo: [
    "Sit with the saddle set so your knee stays slightly bent at the bottom.",
    "Push and pull the handles while pedaling. Arms and legs share the work.",
    "The harder you go, the harder the fan pushes back.",
    "Settle into a pace you can hold, or alternate easy and hard minutes."
  ],
  tips: ["The fan bike is famously honest. Start easier than you think."]
},
{
  id: "ski-erg", name: "Ski Erg", region: "balance", type: "cardio",
  equipment: ["cardio-machine"], position: "Standing at the machine", level: 2,
  muscles: "Heart and lungs, lats, core, legs",
  helps: ["conditioning"],
  dose: { sets: 1, timeSec: 600 },
  howTo: [
    "Stand facing the machine and grab both handles overhead.",
    "Drive the handles down past your hips using your lats and a crunch of the core, letting your knees bend.",
    "Rise tall as your arms return overhead.",
    "Find a smooth rhythm, like cross-country skiing."
  ],
  tips: ["Power comes from the whole body folding down, not just the arms pulling."]
},
{
  id: "sled-push", name: "Sled Push", region: "balance", type: "cardio",
  equipment: ["machine"], position: "Leaning into the sled handles", level: 3,
  muscles: "Legs, glutes, core, heart and lungs",
  helps: ["conditioning"],
  dose: { sets: 4, reps: 1 },
  howTo: [
    "Load a manageable weight and grip the sled poles at chest or hip height.",
    "Lean forward into the sled with straight arms and a flat back.",
    "Drive hard with your legs, taking powerful steps.",
    "One trip down the track counts as a set. Rest and repeat."
  ],
  tips: ["Very knee-friendly for how hard it works the legs, there is no lowering phase."]
},
{
  id: "dancing", name: "Dance It Out", region: "balance", type: "cardio",
  equipment: ["none"], position: "Anywhere with a little space", level: 1,
  muscles: "Heart and lungs, whole body, mood",
  helps: ["conditioning", "general"],
  dose: { sets: 1, timeSec: 900 },
  howTo: [
    "Put on music you love.",
    "Move however feels good: step, sway, twist, bounce.",
    "Keep your feet moving through the whole song.",
    "String several songs together for a full session."
  ],
  tips: ["If it gets your breathing up and makes you smile, it counts as cardio."]
},

// ============ BALANCE ============
{
  id: "clock-reach", name: "Clock Reach", region: "balance", type: "balance",
  equipment: ["none"], position: "Standing on one leg", level: 2,
  muscles: "Ankles, hips, core",
  helps: ["balance-falls", "general"],
  dose: { sets: 2, reps: 5, perSide: true },
  howTo: [
    "Imagine you are standing in the middle of a clock face.",
    "Balance on one leg and reach your other foot toward 12 o'clock, tap lightly, and return.",
    "Reach toward 3, then 6, then 9, returning to center each time.",
    "That full circuit is one rep. Switch legs after your reps."
  ],
  tips: ["Keep a chair or counter within reach.", "Smaller reaches are fine, control beats distance."]
},
{
  id: "backward-walking", name: "Backward Walking", region: "balance", type: "balance",
  equipment: ["none"], position: "Standing, clear path", level: 1,
  muscles: "Legs, balance system",
  helps: ["balance-falls", "knee-oa", "general"],
  dose: { sets: 2, timeSec: 60 },
  howTo: [
    "Find a clear hallway or use a counter to trail your hand along.",
    "Step backward slowly, reaching back with your toes first.",
    "Stand tall, resisting the urge to look down at your feet.",
    "Turn around and repeat."
  ],
  tips: ["Surprisingly good for knees and balance at the same time."],
  caution: "Only do this somewhere you know is free of obstacles and trip hazards."
},
{
  id: "carioca", name: "Grapevine Walk (Carioca)", region: "balance", type: "balance",
  equipment: ["none"], position: "Standing, clear path", level: 2,
  muscles: "Hips, ankles, coordination",
  helps: ["balance-falls", "general"],
  dose: { sets: 2, timeSec: 60 },
  howTo: [
    "Step sideways, crossing one foot in front of the other.",
    "On the next step, cross it behind instead.",
    "Keep alternating front and back as you travel sideways.",
    "Go both directions."
  ],
  tips: ["Start slow, it is a brain exercise as much as a leg exercise.", "Let your hips rotate naturally with the steps."]
},
{
  id: "eyes-closed-stand", name: "Eyes-Closed Stand", region: "balance", type: "balance",
  equipment: ["none"], position: "Standing at a counter", level: 2,
  muscles: "Balance system, ankles",
  helps: ["balance-falls"],
  dose: { sets: 3, reps: 1, hold: 20 },
  howTo: [
    "Stand with feet together, fingertips resting on a counter.",
    "Close your eyes and find your steadiness.",
    "Lift your fingertips a hair above the counter if you feel solid.",
    "Open your eyes and rest between holds."
  ],
  tips: ["Closing the eyes makes your feet and inner ear do all the work. Wobbling is expected."],
  caution: "Always do this at a counter or in a corner, never in open space.",
  variations: [
    { name: "Head Turns", note: "Eyes open, feet together, slowly turn your head left and right while staying steady." }
  ]
},
{
  id: "single-leg-ball-toss", name: "Single-Leg Ball Toss", region: "balance", type: "balance",
  equipment: ["ball"], position: "Standing on one leg", level: 3,
  muscles: "Ankles, hips, core, coordination",
  helps: ["balance-falls", "ankle-sprain"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Stand on one leg with a soft knee.",
    "Toss a small ball up and catch it, or bounce it against a wall.",
    "Stay tall and keep the standing hip steady.",
    "Switch legs after your reps."
  ],
  tips: ["No ball? Toss a rolled-up pair of socks."],
  caution: "Have support nearby. This one is a real challenge."
},

// ============ NERVE GLIDE ============
{
  id: "femoral-nerve-glide", name: "Femoral Nerve Glide", region: "hip", type: "nerve-glide",
  equipment: ["none"], position: "Lying on your side", level: 1,
  muscles: "Femoral nerve pathway (front of thigh)",
  helps: [],
  dose: { sets: 1, reps: 10, perSide: true },
  howTo: [
    "Lie on your side with the sore leg on top, and hug your bottom knee toward your chest.",
    "Reach back and hold your top ankle, gently drawing the heel toward your buttock.",
    "As you do, slowly tuck your chin to your chest.",
    "Then release the ankle slightly while lifting your head back up. Alternate smoothly."
  ],
  tips: ["Nerve glides should feel like a gentle flossing, never a hard stretch."],
  caution: "Keep it pain free. If symptoms in the thigh get worse, stop and ease off for the day."
},

// ============ STRETCHES ============
{
  id: "sleeper-stretch", name: "Sleeper Stretch", region: "shoulder", type: "stretch",
  equipment: ["none"], position: "Lying on your side", level: 1,
  muscles: "Back of the shoulder (posterior capsule, rotator cuff)",
  helps: [],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Lie on your side with the bottom arm straight out from the shoulder, elbow bent 90 degrees, fingers to the ceiling.",
    "With your top hand, gently press the bottom forearm down toward the floor.",
    "Stop at a comfortable stretch in the back of the shoulder.",
    "Hold, breathe, then switch sides."
  ],
  tips: ["Gentle pressure only. This stretch responds to patience, not force."],
  caution: "Skip if it causes pinching in the front of the shoulder."
},
{
  id: "soleus-stretch", name: "Bent-Knee Calf Stretch (Soleus)", region: "ankle-foot", type: "stretch",
  equipment: ["wall"], position: "Standing at a wall", level: 1,
  muscles: "Deep calf (soleus)",
  helps: ["achilles", "plantar-fasciitis", "ankle-sprain"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Stand facing a wall with one foot behind the other, hands on the wall.",
    "Keep the back heel down and bend the back knee, sinking down slightly.",
    "Feel the stretch low in the calf, near the Achilles.",
    "Hold, then switch sides."
  ],
  tips: ["The bent knee is the whole trick. It moves the stretch from the upper calf down to the deep calf."]
},
{
  id: "lat-stretch", name: "Kneeling Lat Stretch", region: "upper-back", type: "stretch",
  equipment: ["chair"], position: "Kneeling at a chair or bench", level: 1,
  muscles: "Lats, side of the trunk",
  helps: [],
  dose: { sets: 2, reps: 1, hold: 30 },
  howTo: [
    "Kneel in front of a chair and place both elbows on the seat, hands together.",
    "Sit your hips back toward your heels and let your chest sink toward the floor.",
    "Keep your elbows narrow and feel the stretch along your sides and armpits.",
    "Breathe slowly into your ribs."
  ],
  tips: ["Point your thumbs toward the ceiling to deepen the lat stretch."]
},
{
  id: "chair-hamstring-stretch", name: "Seated Chair Hamstring Stretch", region: "knee", type: "stretch",
  equipment: ["chair"], position: "Sitting on the front edge of a chair", level: 1,
  muscles: "Hamstrings",
  helps: ["knee-oa", "low-back-pain", "general"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Sit near the front edge of a sturdy chair.",
    "Straighten one leg out, heel on the floor, toes up.",
    "Sit tall, then hinge slightly forward from the hips until you feel the back of the thigh stretch.",
    "Hold, then switch legs."
  ],
  tips: ["Keep your back long. Leaning from the hips beats slumping toward the toes."]
},
{
  id: "chair-figure4", name: "Seated Figure-4 Stretch", region: "hip", type: "stretch",
  equipment: ["chair"], position: "Sitting tall on a chair", level: 1,
  muscles: "Outer hip, glutes (piriformis)",
  helps: ["sciatica", "hip-pain", "low-back-pain"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Sit tall and cross one ankle over the opposite knee, making a figure 4.",
    "Let the crossed knee relax toward the floor.",
    "For more stretch, hinge gently forward from the hips.",
    "Hold, breathe, then switch sides."
  ],
  tips: ["The floor version of this stretch is in the library too. This one needs no getting up or down."]
},
{
  id: "side-lunge-adductor", name: "Standing Side-Lunge Inner Thigh Stretch", region: "hip", type: "stretch",
  equipment: ["none"], position: "Standing, feet wide", level: 2,
  muscles: "Inner thighs (adductors)",
  helps: ["hip-pain", "general"],
  dose: { sets: 2, reps: 1, hold: 20, perSide: true },
  howTo: [
    "Stand with feet wide apart, toes forward.",
    "Bend one knee and shift your weight over that leg, keeping the other leg straight.",
    "Feel the stretch along the straight leg's inner thigh.",
    "Hold, then shift to the other side."
  ],
  tips: ["Hands on the bent thigh or a chair for support."]
},

// ============ STRENGTHENING ============
{
  id: "lateral-step-down", name: "Lateral Step-Down", region: "knee", type: "strengthen",
  equipment: ["step"], position: "Standing sideways on a step", level: 2,
  muscles: "Quads, glutes, knee control",
  helps: ["knee-pain", "knee-oa"],
  dose: { sets: 3, reps: 8, perSide: true },
  howTo: [
    "Stand sideways on a step, one foot hanging off the edge.",
    "Slowly bend the standing knee and lower the free heel toward the floor.",
    "Tap the heel lightly, then press back up.",
    "Keep the standing knee tracking over the middle of the foot the whole time."
  ],
  tips: ["Slow on the way down is the whole point.", "Watch the knee in a mirror, it should not dive inward."]
},
{
  id: "copenhagen-plank", name: "Copenhagen Plank (Knees)", region: "hip", type: "strengthen",
  equipment: ["bench"], position: "Side plank with top leg on a bench", level: 3,
  muscles: "Inner thighs (adductors), core",
  helps: [],
  dose: { sets: 2, reps: 1, hold: 15, perSide: true },
  howTo: [
    "Lie on your side with your forearm under your shoulder and the inside of your top knee resting on a bench.",
    "Press through that knee to lift your hips off the floor into a side plank.",
    "Keep your body in one straight line.",
    "Hold, lower with control, then switch sides."
  ],
  tips: ["Starting with the knee on the bench, not the foot, keeps it manageable."],
  caution: "The inner thigh works hard here. Ease in with short holds."
},
{
  id: "fire-hydrant", name: "Fire Hydrant", region: "hip", type: "strengthen",
  equipment: ["none"], position: "On hands and knees", level: 1,
  muscles: "Outer glutes",
  helps: ["hip-pain", "itb"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Start on hands and knees, wrists under shoulders.",
    "Keeping the knee bent, lift one leg out to the side like a dog at a hydrant.",
    "Lift only as high as your hips can stay level.",
    "Lower with control and repeat, then switch sides."
  ],
  tips: ["Keep your trunk quiet. If your whole body tips, lift the leg lower."]
},
{
  id: "donkey-kick", name: "Donkey Kick", region: "hip", type: "strengthen",
  equipment: ["none"], position: "On hands and knees", level: 1,
  muscles: "Glutes, hamstrings",
  helps: ["hip-pain", "low-back-pain"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Start on hands and knees.",
    "Keeping the knee bent at 90 degrees, press one heel up toward the ceiling.",
    "Squeeze the glute at the top without arching your low back.",
    "Lower with control and repeat, then switch sides."
  ],
  tips: ["Think of stamping the ceiling with a flat foot.", "Small and controlled beats high and sloppy."]
},
{
  id: "single-leg-glute-bridge", name: "Single-Leg Glute Bridge", region: "hip", type: "strengthen",
  equipment: ["none"], position: "Lying on your back", level: 2,
  muscles: "Glutes, hamstrings, core",
  helps: ["hip-pain", "low-back-pain"],
  dose: { sets: 3, reps: 8, perSide: true },
  howTo: [
    "Lie on your back with knees bent and feet flat.",
    "Lift one foot off the floor, knee toward chest.",
    "Press through the other heel and lift your hips until your body is straight from shoulder to knee.",
    "Lower slowly and repeat, then switch legs."
  ],
  tips: ["Keep your hips level, do not let one side droop.", "Master the two-leg bridge in the library first."]
},
{
  id: "single-leg-rdl-bw", name: "Single-Leg Romanian Deadlift (Bodyweight)", region: "hip", type: "strengthen",
  equipment: ["none"], position: "Standing on one leg", level: 2,
  muscles: "Hamstrings, glutes, balance",
  helps: ["balance-falls", "hip-pain"],
  dose: { sets: 3, reps: 8, perSide: true },
  howTo: [
    "Stand on one leg with a soft knee.",
    "Hinge forward at the hips, letting the free leg float straight back.",
    "Lower until your torso and back leg are near level, spine long.",
    "Drive the hips forward to stand back up."
  ],
  tips: ["Fingertips on a counter make it a strength exercise instead of a wobble contest.", "Hips stay square to the floor."]
},
{
  id: "sidelying-external-rotation", name: "Side-Lying External Rotation", region: "shoulder", type: "strengthen",
  equipment: ["dumbbell", "towel"], position: "Lying on your side", level: 1,
  muscles: "Rotator cuff (infraspinatus, teres minor)",
  helps: ["rotator-cuff", "rotator-cuff"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Lie on your side, top elbow bent 90 degrees and tucked against your ribs, with a rolled towel between elbow and ribs.",
    "Hold a light weight with the forearm resting across your belly.",
    "Keeping the elbow pinned, rotate the forearm up toward the ceiling.",
    "Lower slowly and repeat, then switch sides."
  ],
  tips: ["The towel roll is the secret, it puts the cuff in its strongest position.", "A can of soup is plenty of weight to start."]
},
{
  id: "nordic-curl", name: "Nordic Hamstring Curl", region: "knee", type: "strengthen",
  equipment: ["none"], position: "Kneeling, ankles anchored", level: 3,
  muscles: "Hamstrings",
  helps: [],
  dose: { sets: 3, reps: 5 },
  howTo: [
    "Kneel on a pad with your ankles held down by a partner, a couch, or heavy furniture.",
    "With a straight line from knees to head, lower your body forward as slowly as you can.",
    "Catch yourself with your hands when the hamstrings give out.",
    "Push back up with your arms to the start."
  ],
  tips: ["Even two or three slow inches of lowering counts. This one builds over months."],
  caution: "Advanced. Expect serious muscle soreness the first weeks, start with very few reps."
},
{
  id: "ball-squeeze", name: "Ball Squeeze (Inner Thigh)", region: "hip", type: "strengthen",
  equipment: ["ball"], position: "Sitting or lying with knees bent", level: 1,
  muscles: "Inner thighs (adductors)",
  helps: ["hip-pain", "knee-oa"],
  dose: { sets: 3, reps: 10, hold: 5 },
  howTo: [
    "Sit on a chair or lie on your back with knees bent.",
    "Place a soft ball or firm pillow between your knees.",
    "Squeeze the ball steadily, hold, then relax.",
    "Keep breathing during the squeeze."
  ],
  tips: ["Squeeze at about 7 out of 10 effort, not an all-out crush."]
},
{
  id: "psoas-march", name: "Psoas March with Band", region: "hip", type: "strengthen",
  equipment: ["band"], position: "Lying on your back, band around feet", level: 2,
  muscles: "Hip flexors, core",
  helps: ["hip-pain", "low-back-pain"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Lie on your back with a loop band around both feet, knees and hips bent to 90 degrees.",
    "Brace your core so your low back stays gently pressed to the floor.",
    "Pull one knee toward your chest against the band while the other leg holds still.",
    "Return slowly and alternate sides."
  ],
  tips: ["The leg that holds still is doing the secret work. Do not let it drift."]
},

// ============ MOBILITY ============
{
  id: "leg-swings", name: "Leg Swings", region: "hip", type: "mobility",
  equipment: ["wall"], position: "Standing beside a wall", level: 1,
  muscles: "Hips, hamstrings, hip flexors",
  helps: ["hip-pain", "general"],
  dose: { sets: 1, reps: 10, perSide: true },
  howTo: [
    "Stand tall with one hand on a wall for balance.",
    "Swing the outside leg forward and backward like a pendulum, relaxed and smooth.",
    "After your reps, face the wall and swing the leg side to side across your body.",
    "Switch legs."
  ],
  tips: ["Let the swings grow bigger gradually as the hip loosens.", "A classic warmup before walks and workouts."]
},
{
  id: "arm-circles", name: "Arm Circles", region: "shoulder", type: "mobility",
  equipment: ["none"], position: "Standing, arms out wide", level: 1,
  muscles: "Shoulders, upper back",
  helps: ["general"],
  dose: { sets: 1, reps: 10 },
  howTo: [
    "Stand with both arms stretched out to the sides at shoulder height.",
    "Make small circles forward, letting them slowly grow into big ones.",
    "Reverse and circle backward, big to small.",
    "Keep your shoulders down away from your ears."
  ],
  tips: ["Great quick warmup before any upper body work."]
},
{
  id: "deep-squat-hold", name: "Supported Deep Squat Hold", region: "hip", type: "mobility",
  equipment: ["doorway", "table"], position: "Holding a doorframe or heavy table", level: 2,
  muscles: "Hips, ankles, low back",
  helps: ["hip-pain", "general"],
  dose: { sets: 2, reps: 1, hold: 30 },
  howTo: [
    "Hold a doorframe or sturdy table edge with both hands, feet shoulder-width or a bit wider.",
    "Sink your hips down into as deep a squat as is comfortable, heels staying down.",
    "Use your grip to stay balanced and keep your chest up.",
    "Hang out and breathe, shifting gently side to side if it feels good."
  ],
  tips: ["The support lets your hips relax into the position instead of fighting to balance.", "Depth comes with weeks, not minutes."]
},
{
  id: "shoulder-cars", name: "Shoulder Circles (CARs)", region: "shoulder", type: "mobility",
  equipment: ["none"], position: "Standing tall", level: 1,
  muscles: "Entire shoulder joint",
  helps: ["frozen-shoulder", "general"],
  dose: { sets: 1, reps: 5, perSide: true },
  howTo: [
    "Stand tall with one arm straight at your side, and brace your trunk so only the arm moves.",
    "Slowly raise the straight arm forward and all the way overhead.",
    "Rotate the arm and continue the circle behind you, reaching back and down.",
    "One slow full circle is one rep. Do both directions, then switch arms."
  ],
  tips: ["The slower the circle, the more it counts. Take 10 seconds per circle.", "Work around any pinchy spots, not through them."]
},
{
  id: "hip-cars", name: "Hip Circles (CARs)", region: "hip", type: "mobility",
  equipment: ["wall"], position: "Standing on one leg at a wall", level: 2,
  muscles: "Entire hip joint",
  helps: ["hip-pain", "general"],
  dose: { sets: 1, reps: 5, perSide: true },
  howTo: [
    "Stand tall holding a wall, weight on one leg.",
    "Lift the other knee up toward your chest.",
    "Slowly sweep the knee out to the side, then rotate it back behind you before returning to the start.",
    "Draw the biggest slow circle your hip allows. Do both directions, then switch."
  ],
  tips: ["Keep your trunk tall and still, the circle comes from the hip alone."]
},
{
  id: "standing-torso-twists", name: "Standing Torso Twists", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "Standing, feet shoulder-width", level: 1,
  muscles: "Spine, obliques",
  helps: ["low-back-pain", "general"],
  dose: { sets: 1, reps: 10 },
  howTo: [
    "Stand with feet shoulder-width apart, knees soft, arms relaxed.",
    "Gently rotate your torso side to side, letting your arms swing loosely around you.",
    "Let your heels pivot naturally as you turn.",
    "Keep it easy and rhythmic, like wringing out gently."
  ],
  tips: ["A relaxed swing, not a forced stretch. The arms should flop like empty sleeves."]
},

// ============ RECOVERY / SELF-MASSAGE ============
{
  id: "foam-roll-quads", name: "Foam Roll: Front of Thigh", region: "knee", type: "recovery",
  equipment: ["foam-roller"], position: "Face down, roller under thighs", level: 1,
  muscles: "Quads",
  helps: ["knee-pain", "general"],
  dose: { sets: 1, timeSec: 45, perSide: true },
  howTo: [
    "Lie face down with a foam roller under the front of one thigh, forearms on the floor.",
    "Slowly roll from just above the knee to just below the hip.",
    "Pause and breathe on any tender spots for a few seconds.",
    "Switch legs."
  ],
  tips: ["Slow rolling works. Racing back and forth does nothing.", "Support more weight on your arms to lighten the pressure."]
},
{
  id: "foam-roll-itband", name: "Foam Roll: Outer Thigh", region: "hip", type: "recovery",
  equipment: ["foam-roller"], position: "Side-lying, roller under outer thigh", level: 2,
  muscles: "Outer thigh (IT band area, outer quad)",
  helps: ["itb", "knee-pain"],
  dose: { sets: 1, timeSec: 45, perSide: true },
  howTo: [
    "Lie on your side with the roller under your outer thigh, bottom forearm on the floor.",
    "Cross the top leg over and plant that foot for support.",
    "Roll slowly between the hip and just above the knee.",
    "Switch sides."
  ],
  tips: ["This area is tender on almost everyone. Use the top leg to take off as much pressure as you need."],
  caution: "Aim for 'good sore', never wincing pain. Skip the bony point of the hip."
},
{
  id: "foam-roll-upper-back", name: "Foam Roll: Upper Back", region: "upper-back", type: "recovery",
  equipment: ["foam-roller"], position: "Lying back over the roller", level: 1,
  muscles: "Upper back, lats",
  helps: ["posture", "upper-cross"],
  dose: { sets: 1, timeSec: 60 },
  howTo: [
    "Sit on the floor with the roller behind you, then lean back so it sits across your upper back.",
    "Cross your arms over your chest and lift your hips slightly.",
    "Roll slowly between the shoulder blades and the middle of your back.",
    "Pause anywhere that feels tight and take a slow breath."
  ],
  tips: ["Support your head with your hands if your neck tires.", "Stay off the low back and neck, this one is for between the shoulder blades."]
},
{
  id: "ball-glute-release", name: "Ball Release: Glutes", region: "hip", type: "recovery",
  equipment: ["ball"], position: "Sitting on the ball against floor or wall", level: 2,
  muscles: "Glutes, deep hip rotators",
  helps: ["sciatica", "hip-pain"],
  dose: { sets: 1, timeSec: 45, perSide: true },
  howTo: [
    "Sit on the floor and tuck a tennis ball or massage ball under one buttock.",
    "Lean onto it and roll gently until you find a tender spot.",
    "Rest on the spot and breathe for 20 to 30 seconds while it softens.",
    "Move to the next spot, then switch sides."
  ],
  tips: ["Standing against a wall with the ball behind you is a gentler version."]
},
{
  id: "foot-ball-roll", name: "Ball Release: Foot Roll", region: "ankle-foot", type: "recovery",
  equipment: ["ball"], position: "Sitting or standing, ball underfoot", level: 1,
  muscles: "Sole of the foot (plantar fascia)",
  helps: ["plantar-fasciitis"],
  dose: { sets: 1, timeSec: 45, perSide: true },
  howTo: [
    "Sit in a chair and place a small ball under the arch of your bare foot.",
    "Roll slowly from heel to toes with steady pressure.",
    "Linger on tender spots and let them ease.",
    "Switch feet."
  ],
  tips: ["A frozen water bottle works wonderfully for sore, inflamed feet."]
},
{
  id: "box-breathing", name: "Box Breathing", region: "core", type: "recovery",
  equipment: ["none"], position: "Sitting comfortably", level: 1,
  muscles: "Diaphragm, nervous system",
  helps: ["general"],
  dose: { sets: 1, timeSec: 180 },
  howTo: [
    "Sit comfortably with a tall, relaxed spine.",
    "Breathe in through your nose for a slow count of 4.",
    "Hold for 4, breathe out for 4, hold empty for 4.",
    "That square is one round. Keep going, smooth and unhurried."
  ],
  tips: ["Used by athletes and soldiers alike to settle the nerves.", "If 4 feels long, start with a count of 3."]
},
{
  id: "breathing-478", name: "4-7-8 Breathing", region: "core", type: "recovery",
  equipment: ["none"], position: "Sitting or lying down", level: 1,
  muscles: "Diaphragm, nervous system",
  helps: ["general"],
  dose: { sets: 1, reps: 4 },
  howTo: [
    "Breathe in quietly through your nose for a count of 4.",
    "Hold the breath for a count of 7.",
    "Exhale slowly through your mouth for a count of 8, like fogging a mirror.",
    "That is one breath. Do about four in a row."
  ],
  tips: ["The long exhale is what tells your body to relax.", "Lovely before sleep."],
  caution: "Feeling lightly dizzy means slow down or shorten the counts."
},

// ============ GYM LIFTS ============
{
  id: "standing-overhead-press", name: "Standing Overhead Press", region: "shoulder", type: "lift",
  equipment: ["barbell"], position: "Standing, bar at the collarbones", level: 3,
  muscles: "Shoulders, triceps, core",
  helps: [],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Hold the bar at your collarbones, hands just outside shoulder width, elbows slightly forward.",
    "Brace your core and squeeze your glutes.",
    "Press the bar straight overhead, moving your head back slightly to let it pass.",
    "Finish with the bar over the back of your head, arms locked, then lower with control."
  ],
  tips: ["The whole body stays tight, it is as much a core lift as a shoulder lift.", "Dumbbells work if no barbell is free."]
},
{
  id: "dumbbell-fly", name: "Dumbbell Chest Fly", region: "chest", type: "lift",
  equipment: ["dumbbell", "bench"], position: "Lying on a flat bench", level: 2,
  muscles: "Chest, front shoulders",
  helps: [],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Lie on a bench holding light dumbbells above your chest, palms facing each other.",
    "With a slight, fixed bend in the elbows, open your arms out wide like hugging a barrel in reverse.",
    "Lower until you feel a comfortable stretch across the chest.",
    "Squeeze the chest to bring the weights back together."
  ],
  tips: ["Go lighter than a press. The stretch position is where flys earn their keep and where they bite."],
  caution: "Do not let the arms drop below chest level while learning."
},
{
  id: "pec-deck", name: "Pec Deck Machine", region: "chest", type: "lift",
  equipment: ["machine"], position: "Seated at the fly machine", level: 1,
  muscles: "Chest",
  helps: [],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set the seat so the handles sit at chest height.",
    "Grip the handles with a soft bend in the elbows.",
    "Squeeze the handles together in front of your chest.",
    "Open back up slowly to a comfortable stretch."
  ],
  tips: ["The machine guides the path, making it the friendliest way to learn the fly motion."]
},
{
  id: "front-squat", name: "Front Squat", region: "knee", type: "lift",
  equipment: ["barbell"], position: "Bar racked on the front of the shoulders", level: 3,
  muscles: "Quads, glutes, upper back, core",
  helps: [],
  dose: { sets: 3, reps: 6 },
  howTo: [
    "Rest the bar on the front of your shoulders, elbows lifted high, fingertips under the bar.",
    "Stand with feet shoulder-width, toes slightly out.",
    "Squat down keeping your chest tall and elbows up.",
    "Drive up through the middle of your feet."
  ],
  tips: ["Elbows up is the golden rule, if they drop, the bar rolls forward.", "Crossed-arms grip works if your wrists complain."],
  caution: "Learn with an empty bar first. The rack position takes practice."
},
{
  id: "sumo-deadlift", name: "Sumo Deadlift", region: "hip", type: "lift",
  equipment: ["barbell"], position: "Wide stance over the bar", level: 3,
  muscles: "Glutes, inner thighs, hamstrings, back",
  helps: [],
  dose: { sets: 3, reps: 5 },
  howTo: [
    "Stand very wide, toes pointed out, bar over the middle of your feet.",
    "Grip the bar with your hands inside your knees, arms vertical.",
    "Chest up, back flat, then push the floor apart with your feet as you stand.",
    "Lock out tall, then lower the bar with control."
  ],
  tips: ["More upright than a regular deadlift, so many people with cranky backs prefer it."],
  variations: [
    { name: "Trap Bar Deadlift", note: "Standing inside a hexagon bar with neutral handles. The easiest deadlift to learn of all." }
  ]
},
{
  id: "close-grip-bench", name: "Close-Grip Bench Press", region: "arms", type: "lift",
  equipment: ["barbell", "bench"], position: "Lying on a flat bench", level: 2,
  muscles: "Triceps, chest, front shoulders",
  helps: [],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Lie on the bench and grip the bar at about shoulder width, narrower than a normal press.",
    "Lower the bar to your lower chest with elbows tucked close to your sides.",
    "Press back up, focusing on the triceps doing the pushing.",
    "Keep wrists stacked straight over elbows."
  ],
  tips: ["Shoulder width is close enough. Ultra-narrow grips just hurt the wrists."]
},
{
  id: "preacher-curl", name: "Preacher Curl", region: "arms", type: "lift",
  equipment: ["dumbbell", "bench"], position: "Arms over the preacher pad", level: 1,
  muscles: "Biceps",
  helps: [],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Sit at the preacher bench with your upper arms resting on the angled pad.",
    "Hold the weight with arms nearly straight.",
    "Curl up until your forearms are vertical.",
    "Lower slowly all the way back down."
  ],
  tips: ["The pad kills all swinging and cheating, so expect to use less weight than a normal curl."],
  caution: "Do not bounce out of the bottom, ease into the stretched position."
},
{
  id: "cable-lateral-raise", name: "Cable Lateral Raise", region: "shoulder", type: "lift",
  equipment: ["cable"], position: "Standing side-on to a low pulley", level: 2,
  muscles: "Side shoulders",
  helps: [],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Stand side-on to a low cable, handle in the far hand, cable running in front of your body.",
    "With a soft elbow, raise the arm out to the side to shoulder height.",
    "Lower slowly, feeling tension the whole way down.",
    "Finish the set, then turn around for the other arm."
  ],
  tips: ["Cables keep tension at the bottom where dumbbells go slack, so it burns more with less weight."]
},
{
  id: "machine-shoulder-press", name: "Machine Shoulder Press", region: "shoulder", type: "lift",
  equipment: ["machine"], position: "Seated at the press machine", level: 1,
  muscles: "Shoulders, triceps",
  helps: [],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Set the seat so the handles start at about ear height.",
    "Grip the handles and press up until your arms are nearly straight.",
    "Lower with control back to the start.",
    "Keep your back against the pad throughout."
  ],
  tips: ["The guided path makes this the safest way to press overhead when you are new or coming back."]
},
{
  id: "seated-calf-raise", name: "Seated Calf Raise", region: "ankle-foot", type: "lift",
  equipment: ["machine"], position: "Seated, pad across the knees", level: 1,
  muscles: "Deep calf (soleus)",
  helps: ["achilles"],
  dose: { sets: 3, reps: 15 },
  howTo: [
    "Sit at the machine with the balls of your feet on the platform and the pad snug on your thighs.",
    "Lower your heels for a full stretch.",
    "Press up onto your toes as high as you can.",
    "Pause a second at the top, then lower slowly."
  ],
  tips: ["The bent knee targets the deep calf muscle that standing raises miss. Do both for complete calves."]
},
{
  id: "hip-abduction-machine", name: "Hip Abduction Machine", region: "hip", type: "lift",
  equipment: ["machine"], position: "Seated, pads outside the knees", level: 1,
  muscles: "Outer glutes",
  helps: ["hip-pain", "itb"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Sit with the pads resting against the outside of your knees.",
    "Press your legs apart against the resistance.",
    "Pause briefly at the widest point.",
    "Return slowly to the start."
  ],
  tips: ["Lean slightly forward off the backrest to hit the glutes harder."]
},
{
  id: "hip-adduction-machine", name: "Hip Adduction Machine", region: "hip", type: "lift",
  equipment: ["machine"], position: "Seated, pads inside the knees", level: 1,
  muscles: "Inner thighs",
  helps: ["hip-pain"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Sit with the pads against the inside of your knees, legs open to a comfortable width.",
    "Squeeze your legs together smoothly.",
    "Pause when the pads meet.",
    "Open back up with control."
  ],
  tips: ["Set the starting width conservatively, you can widen it as you warm up."]
},
{
  id: "assisted-pullup", name: "Assisted Pull-Up Machine", region: "upper-back", type: "lift",
  equipment: ["machine"], position: "Kneeling on the assist pad", level: 1,
  muscles: "Lats, biceps, upper back",
  helps: [],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Set the counterweight. Heavier counterweight means more help.",
    "Kneel on the pad and grip the handles overhead.",
    "Pull yourself up until your chin reaches hand height.",
    "Lower slowly to a full hang."
  ],
  tips: ["Reduce the assist a little each week and a real pull-up gets closer every visit."]
},
{
  id: "farmers-carry", name: "Farmer's Carry", region: "core", type: "lift",
  equipment: ["dumbbell", "kettlebell"], position: "Standing, weight in each hand", level: 1,
  muscles: "Grip, core, traps, whole body",
  helps: ["general", "posture"],
  dose: { sets: 3, timeSec: 30 },
  howTo: [
    "Pick up a heavy dumbbell or kettlebell in each hand.",
    "Stand tall, shoulders back, core braced.",
    "Walk with controlled, even steps for the time.",
    "Set the weights down with a flat back."
  ],
  tips: ["One of the most useful exercises in the gym, it is literally carrying groceries.", "Tall posture is the entire exercise, do not let the weights round you forward."]
},
{
  id: "good-morning", name: "Good Morning", region: "hip", type: "lift",
  equipment: ["barbell"], position: "Bar on the upper back", level: 3,
  muscles: "Hamstrings, glutes, low back",
  helps: [],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Stand with a light bar on your upper back, feet hip-width, knees soft.",
    "Push your hips straight back and hinge your chest toward the floor, back flat.",
    "Stop when you feel a firm hamstring stretch, around chest parallel to the floor.",
    "Drive your hips forward to stand tall."
  ],
  tips: ["Start with an empty bar or just a band. Position and hinge quality are everything here."],
  caution: "Keep the back flat throughout. If it rounds, the weight is too heavy."
},
{
  id: "landmine-press", name: "Landmine Press", region: "shoulder", type: "lift",
  equipment: ["barbell"], position: "Standing, one end of the bar in a corner", level: 2,
  muscles: "Shoulders, chest, core",
  helps: ["rotator-cuff"],
  dose: { sets: 3, reps: 8, perSide: true },
  howTo: [
    "Wedge one end of a barbell into a corner or landmine attachment.",
    "Hold the other end at your shoulder with one hand, staggered stance.",
    "Press the bar up and slightly forward until the arm is long.",
    "Lower with control and finish the set, then switch arms."
  ],
  tips: ["The angled path is much kinder to cranky shoulders than pressing straight overhead."]
},

// ============ YOGA (hidden behind the Yoga filter) ============
{
  id: "yoga-mountain", name: "Mountain Pose (Tadasana)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Standing", level: 1,
  muscles: "Posture, whole body awareness",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30 },
  howTo: [
    "Stand with feet together or hip-width, weight even across both feet.",
    "Grow tall through the crown of your head, shoulders relaxed back and down.",
    "Let your arms rest at your sides, palms facing forward.",
    "Stand steady and breathe. This is the pose every standing pose starts from."
  ],
  tips: ["It looks like just standing. Done with attention, it teaches everything about posture."]
},
{
  id: "yoga-triangle", name: "Triangle (Trikonasana)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Standing wide", level: 2,
  muscles: "Hamstrings, hips, side body",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20, perSide: true },
  howTo: [
    "Stand wide with your front foot pointing forward and back foot turned in slightly.",
    "With straight legs, reach your front arm forward, then tilt and lower it to your shin or a block.",
    "Stretch your top arm to the ceiling, opening your chest sideways.",
    "Gaze up, forward, or down, wherever your neck is happy."
  ],
  tips: ["Rest the bottom hand on your shin, not the floor, until the sides feel long.", "Both legs stay straight but not locked."]
},
{
  id: "yoga-chair-pose", name: "Chair Pose (Utkatasana)", region: "knee", type: "yoga",
  equipment: ["none"], position: "Standing, knees bent", level: 2,
  muscles: "Quads, glutes, core, shoulders",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20 },
  howTo: [
    "Stand with feet together or hip-width.",
    "Bend your knees and sit your hips back like lowering into an invisible chair.",
    "Reach your arms overhead alongside your ears.",
    "Keep your weight in your heels and your chest lifted."
  ],
  tips: ["Deeper is harder. Even a small sit builds serious leg strength."]
},
{
  id: "yoga-low-lunge", name: "Low Lunge (Anjaneyasana)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Kneeling lunge", level: 1,
  muscles: "Hip flexors, quads",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20, perSide: true },
  howTo: [
    "From kneeling, step one foot forward so the knee stacks over the ankle.",
    "Keep the back knee on the floor, padded if needed.",
    "Sink your hips gently forward until the front of the back hip stretches.",
    "Reach your arms up or rest hands on the front thigh. Switch sides after the hold."
  ],
  tips: ["Tuck the tailbone slightly to deepen the stretch without arching the low back."]
},
{
  id: "yoga-high-lunge", name: "High Lunge (Crescent)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Standing lunge, back heel lifted", level: 2,
  muscles: "Legs, hip flexors, core",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20, perSide: true },
  howTo: [
    "Step one foot back and stay high on the back toes, back leg strong and straight.",
    "Bend the front knee over the ankle.",
    "Reach both arms overhead, torso tall.",
    "Press through the back heel to stay steady. Switch sides after the hold."
  ],
  tips: ["Like Warrior I but with the back heel up, which challenges balance more."]
},
{
  id: "yoga-bridge", name: "Bridge Pose (Setu Bandhasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Lying on your back", level: 1,
  muscles: "Glutes, hamstrings, chest opener",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20 },
  howTo: [
    "Lie on your back with knees bent, feet hip-width and close to your hips.",
    "Press into your feet and lift your hips toward the ceiling.",
    "Roll your shoulders slightly under and interlace your hands beneath you if comfortable.",
    "Keep your knees tracking straight ahead. Lower down slowly, one vertebra at a time."
  ],
  tips: ["A yoga block under the hips turns this into a lovely resting pose."]
},
{
  id: "yoga-cobra", name: "Cobra (Bhujangasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Face down", level: 1,
  muscles: "Spine, chest",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15 },
  howTo: [
    "Lie face down with hands under your shoulders, elbows hugging your ribs.",
    "Keep your hips and legs on the floor.",
    "Press lightly into your hands and peel your chest up, leading with the breastbone.",
    "Elbows stay bent. Lower back down with control."
  ],
  tips: ["The height comes from your back muscles, the hands only assist.", "Gentler than Upward Dog, a perfect starting backbend."]
},
{
  id: "yoga-legs-up-wall", name: "Legs Up the Wall (Viparita Karani)", region: "balance", type: "yoga",
  equipment: ["wall"], position: "Lying on your back, legs on the wall", level: 1,
  muscles: "Whole body relaxation, circulation",
  helps: [],
  dose: { sets: 1, reps: 0, timeSec: 300 },
  howTo: [
    "Sit sideways next to a wall, then swing your legs up the wall as you lie back.",
    "Scoot your hips as close to the wall as is comfortable.",
    "Rest your arms out to the sides, palms up.",
    "Close your eyes and breathe. Let the wall hold your legs."
  ],
  tips: ["Wonderful for tired, swollen legs at the end of a day.", "A folded blanket under the hips adds comfort."],
  caution: "Roll to your side to come out, do not sit straight up quickly."
},
{
  id: "yoga-eagle", name: "Eagle Pose (Garudasana)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Standing, limbs wrapped", level: 3,
  muscles: "Balance, shoulders, outer hips",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15, perSide: true },
  howTo: [
    "Bend your knees slightly and cross one thigh over the other, hooking the foot behind the calf if you can.",
    "Cross the opposite arm over the other at the elbows and wrap the forearms, palms toward each other.",
    "Sink your hips slightly and lift your elbows to shoulder height.",
    "Fix your gaze on one point. Unwind and switch sides."
  ],
  tips: ["Toe on the floor as a kickstand and just crossed arms is Eagle enough.", "The wrap gives the upper back a lovely stretch."]
},
{
  id: "yoga-dancer", name: "Dancer Pose (Natarajasana)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Standing on one leg", level: 3,
  muscles: "Balance, quads, chest, shoulders",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15, perSide: true },
  howTo: [
    "Stand on one leg and bend the other knee, catching that foot or ankle behind you.",
    "Reach your free arm forward and up.",
    "Press the lifted foot back into your hand, letting your chest tip slightly forward as the leg rises.",
    "Find one still point to gaze at. Switch sides."
  ],
  tips: ["A strap around the lifted foot bridges the gap if you cannot reach.", "The press of foot into hand creates the balance."],
  caution: "Keep a wall within arm's reach while learning."
},
{
  id: "yoga-half-moon", name: "Half Moon (Ardha Chandrasana)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Balancing sideways on one leg", level: 3,
  muscles: "Legs, outer hips, core, balance",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15, perSide: true },
  howTo: [
    "From Triangle, bend the front knee and walk your bottom hand about a foot forward, fingertips on the floor or a block.",
    "Shift your weight into the front leg and float the back leg up to hip height.",
    "Open your hips and chest sideways, top arm reaching up.",
    "Gaze down for balance, or up for challenge. Switch sides."
  ],
  tips: ["A block under the bottom hand makes this pose ten times more accessible.", "Do it with your back against a wall to learn the shape safely."]
},
{
  id: "yoga-camel", name: "Camel Pose (Ustrasana)", region: "upper-back", type: "yoga",
  equipment: ["none"], position: "Kneeling, arching back", level: 2,
  muscles: "Chest, hip flexors, spine",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15 },
  howTo: [
    "Kneel with knees hip-width, hips stacked over knees.",
    "Place your hands on your low back, fingers pointing down, and lift your chest to the ceiling.",
    "Press your hips forward and let your upper back arch.",
    "Only if easy, reach back for your heels. Come up slowly, chin to chest last."
  ],
  tips: ["Hands on the low back is the full pose for most people. Heels are optional extra credit.", "Tuck your toes to raise the heels closer."],
  caution: "Come out slowly and rest in Child's Pose after. Backbends can make you lightheaded."
},
{
  id: "yoga-fish", name: "Fish Pose (Matsyasana)", region: "chest", type: "yoga",
  equipment: ["none"], position: "Lying back, chest lifted", level: 2,
  muscles: "Chest, front of neck, shoulders",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20 },
  howTo: [
    "Lie on your back with legs long and hands tucked under your hips, palms down.",
    "Press into your forearms and lift your chest high.",
    "Let your head tip back gently, crown resting lightly on the floor.",
    "Keep most of the weight on your forearms, not your head. Lift your head to come out."
  ],
  tips: ["A rolled blanket lengthwise under the spine gives the same chest opening with zero effort."],
  caution: "Keep the neck weightless. Skip the head drop if you have neck trouble."
},
{
  id: "yoga-locust", name: "Locust Pose (Salabhasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Face down", level: 2,
  muscles: "Back muscles, glutes, hamstrings",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15 },
  howTo: [
    "Lie face down with arms alongside your body, palms down.",
    "On an inhale, lift your chest, arms, and legs off the floor at once.",
    "Reach your fingertips back toward your feet, legs active and long.",
    "Gaze down to keep the neck long. Lower everything slowly."
  ],
  tips: ["Lifting just the chest, or just the legs, are both worthy versions.", "This is the strengthening cousin of the backbend family."]
},
{
  id: "yoga-seated-twist", name: "Seated Twist (Ardha Matsyendrasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Seated, one knee crossed", level: 1,
  muscles: "Spine, outer hips",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Sit tall and cross one foot over the opposite leg, planting it outside the knee.",
    "Hug that knee with the opposite arm, or hook your elbow outside it.",
    "Inhale to grow tall, exhale to twist toward the bent knee.",
    "Place your other hand on the floor behind you. Unwind and switch sides."
  ],
  tips: ["Grow taller with every inhale, twist a touch deeper with every exhale.", "The twist comes from the middle back, not from cranking the neck."]
},
{
  id: "yoga-garland", name: "Garland Squat (Malasana)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Deep squat, feet flat", level: 2,
  muscles: "Hips, ankles, inner thighs",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30 },
  howTo: [
    "Stand with feet slightly wider than your hips, toes turned out.",
    "Lower your hips all the way down into a deep squat, heels staying down if possible.",
    "Bring your palms together at your chest, elbows gently pressing the knees wide.",
    "Keep your chest lifted and breathe."
  ],
  tips: ["A folded blanket under the heels makes this available to almost everyone.", "Sitting on a low block or stack of books works too."]
},
{
  id: "yoga-wide-fold", name: "Wide-Legged Forward Fold (Prasarita Padottanasana)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Standing very wide, folded forward", level: 1,
  muscles: "Hamstrings, inner thighs, back",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30 },
  howTo: [
    "Step your feet very wide, toes pointing forward.",
    "Hands on your hips, inhale tall, then fold forward from the hips.",
    "Rest your hands on the floor, a block, or your shins.",
    "Let your head hang. Come up with a flat back and hands on hips."
  ],
  tips: ["Bend the knees freely. The fold is about the hips, not the knees.", "Wider feet bring the floor closer."],
  caution: "Rise slowly to avoid a head rush."
},
{
  id: "yoga-pyramid", name: "Pyramid Pose (Parsvottanasana)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Short stance, folding over the front leg", level: 2,
  muscles: "Hamstrings, hips, back",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20, perSide: true },
  howTo: [
    "Take a short stance, one foot about a leg's length ahead, both hips squared forward.",
    "Keep both legs straight but not locked.",
    "Hinge forward over the front leg with a long spine.",
    "Rest hands on the shin, blocks, or the floor. Switch sides."
  ],
  tips: ["A deep hamstring stretch. A tiny knee bend in the front leg is always allowed."]
},
{
  id: "yoga-side-plank", name: "Side Plank (Vasisthasana)", region: "core", type: "yoga",
  equipment: ["none"], position: "Balancing on one hand and foot edge", level: 3,
  muscles: "Obliques, shoulders, hips",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15, perSide: true },
  howTo: [
    "From Plank, roll onto the outer edge of one foot and stack the other on top.",
    "Press the floor away with your supporting hand, shoulder stacked over wrist.",
    "Lift your hips high and reach your top arm to the ceiling.",
    "Hold and breathe, then switch sides."
  ],
  tips: ["Bottom knee on the floor is a fully respectable version.", "Hips high is what makes it work, do not let them sag."]
}

);
