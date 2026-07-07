// MoveWell exercise database: Yoga poses.
// These use type "yoga" and are hidden from the library, search, body map, and
// routine picker unless the Yoga filter is selected. Same schema as other exercises.

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ WARM-UP ============
{
  id: "yoga-wrist-rolls", name: "Wrist Rolls", region: "wrist", type: "yoga",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Wrists, forearms",
  helps: [],
  dose: { sets: 1, reps: 10 },
  howTo: [
    "Extend your arms in front of you and make soft fists.",
    "Slowly circle both wrists in one direction.",
    "After your reps, circle the other direction the same number of times."
  ],
  tips: ["Keep the circles slow and smooth.", "Great before poses that put weight on your hands, like Plank or Downward Dog."]
},
{
  id: "yoga-shoulder-rolls", name: "Shoulder Rolls", region: "shoulder", type: "yoga",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Shoulders, upper trapezius",
  helps: [],
  dose: { sets: 1, reps: 10 },
  howTo: [
    "Sit or stand tall with your arms relaxed at your sides.",
    "Lift your shoulders up toward your ears, roll them back, then let them drop down.",
    "After your reps, reverse and roll them forward."
  ],
  tips: ["Match the movement to your breath: inhale as they lift, exhale as they roll down."]
},
{
  id: "yoga-hip-circles", name: "Hip Circles", region: "hip", type: "yoga",
  equipment: ["none"], position: "Standing", level: 1,
  muscles: "Hips, low back",
  helps: [],
  dose: { sets: 1, reps: 8 },
  howTo: [
    "Stand with feet hip-width apart and hands on your hips.",
    "Slowly circle your hips in one direction, like tracing a big circle.",
    "After your reps, circle the other direction."
  ],
  tips: ["Keep your knees soft and your feet planted.", "Make the circles bigger as your body warms up."]
},
{
  id: "yoga-ankle-rolls", name: "Ankle Rolls", region: "ankle-foot", type: "yoga",
  equipment: ["none"], position: "Standing or sitting", level: 1,
  muscles: "Ankles, calves",
  helps: [],
  dose: { sets: 1, reps: 10, perSide: true },
  howTo: [
    "Shift your weight to one leg, or sit if balance is tricky.",
    "Lift the other foot slightly and slowly circle the ankle.",
    "Circle both directions, then switch feet."
  ],
  tips: ["Hold a wall or chair for balance if you need it."]
},
{
  id: "yoga-neck-rolls", name: "Neck Rolls", region: "neck", type: "yoga",
  equipment: ["none"], position: "Sitting or standing", level: 1,
  muscles: "Neck, upper trapezius",
  helps: [],
  dose: { sets: 1, reps: 6 },
  howTo: [
    "Sit or stand tall and let your chin drop gently toward your chest.",
    "Slowly roll your right ear toward your right shoulder, then back down through center to the left.",
    "Trace a gentle half-circle from shoulder to shoulder along the front."
  ],
  tips: ["Stay in the front half-circle. Rolling the head backward can pinch the neck."],
  caution: "Move slowly and skip this one if you feel dizziness or any sharp pain."
},

// ============ CORE SEQUENCE ============
{
  id: "yoga-cat-cow", name: "Cat-Cow (Marjaryasana-Bitilasana)", region: "upper-back", type: "yoga",
  equipment: ["none"], position: "On hands and knees", level: 1,
  muscles: "Spine, core, neck",
  helps: [],
  dose: { sets: 1, reps: 10 },
  howTo: [
    "Start on hands and knees, wrists under shoulders, knees under hips.",
    "Inhale: drop your belly, lift your chest and tailbone, and look gently up. This is Cow.",
    "Exhale: round your back toward the ceiling and tuck your chin. This is Cat.",
    "Flow slowly between the two with your breath."
  ],
  tips: ["Let the breath set the pace, one full breath per cycle.", "Pad your knees with a folded blanket if they complain."]
},
{
  id: "yoga-plank", name: "Plank (Phalakasana)", region: "core", type: "yoga",
  equipment: ["none"], position: "Face down, on hands and toes", level: 2,
  muscles: "Core, shoulders, arms",
  helps: [],
  dose: { sets: 1, reps: 0, timeSec: 30 },
  howTo: [
    "From hands and knees, step both feet back so your body forms one straight line.",
    "Stack shoulders over wrists and press the floor away.",
    "Squeeze your belly and legs so your hips neither sag nor pike up.",
    "Breathe steadily while you hold."
  ],
  tips: ["Drop to your knees any time to make it easier without losing the shape."],
  caution: "Skip or shorten the hold if your low back starts to sag or ache.",
  variations: [
    { name: "Knee Plank", note: "Keep your knees on the floor, body straight from head to knees." },
    { name: "Forearm Plank", note: "Rest on your forearms instead of your hands, easier on the wrists." }
  ]
},
{
  id: "yoga-chaturanga", name: "Chaturanga (Chaturanga Dandasana)", region: "arms", type: "yoga",
  equipment: ["none"], position: "From Plank", level: 3,
  muscles: "Triceps, chest, core",
  helps: [],
  dose: { sets: 1, reps: 5 },
  howTo: [
    "From Plank, shift slightly forward onto your toes.",
    "Bend your elbows straight back, hugging them against your ribs.",
    "Lower halfway down, stopping when your upper arms are level with your ribs.",
    "Hold for a breath, then either lower all the way down or push back up."
  ],
  tips: ["Elbows point back, not out to the sides.", "It is a slow, controlled lower, not a drop."],
  caution: "This is a demanding pose. Do it from your knees until you feel strong in Plank.",
  variations: [
    { name: "Knees-Chest-Chin", note: "Lower knees, then chest, then chin to the floor in sequence. The classic beginner substitute." }
  ]
},
{
  id: "yoga-upward-dog", name: "Upward Facing Dog (Urdhva Mukha Svanasana)", region: "upper-back", type: "yoga",
  equipment: ["none"], position: "Face down", level: 2,
  muscles: "Spine, chest, arms",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15 },
  howTo: [
    "Lie face down with hands beside your lower ribs.",
    "Press into your hands and straighten your arms, lifting your chest and hips off the floor.",
    "Only the tops of your feet and your hands touch the ground.",
    "Roll your shoulders back and look gently forward."
  ],
  tips: ["Keep your legs active so your low back stays comfortable."],
  caution: "If lifting the hips is too much, do Sphinx or Cobra instead.",
  variations: [
    { name: "Cobra Pose", note: "Keep hips and legs on the floor and lift just the chest, with soft elbows. Gentler on the back." }
  ]
},
{
  id: "yoga-downward-dog", name: "Downward Facing Dog (Adho Mukha Svanasana)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Hands and feet on floor, hips high", level: 2,
  muscles: "Hamstrings, calves, shoulders, back",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30 },
  howTo: [
    "From hands and knees, tuck your toes and lift your hips up and back.",
    "Your body makes an upside-down V shape.",
    "Press the floor away with your hands and let your head hang relaxed.",
    "Keep a generous bend in your knees if your hamstrings are tight."
  ],
  tips: ["Bent knees with a long spine beats straight legs with a rounded back.", "Pedal your feet slowly to warm up the calves."],
  caution: "Come down and rest in Child's Pose if your wrists or shoulders complain."
},
{
  id: "yoga-childs-pose", name: "Child's Pose (Balasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Kneeling, folded forward", level: 1,
  muscles: "Low back, hips, shoulders",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 45 },
  howTo: [
    "Kneel down and sit back toward your heels.",
    "Fold forward and rest your forehead on the floor or a cushion.",
    "Stretch your arms forward, or rest them alongside your body.",
    "Breathe slowly into your back."
  ],
  tips: ["Widen your knees to make room for your belly.", "This is your rest stop. Return here any time a sequence feels like too much."]
},
{
  id: "yoga-sphinx", name: "Sphinx Pose (Salamba Bhujangasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Face down, propped on forearms", level: 1,
  muscles: "Spine, chest",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30 },
  howTo: [
    "Lie face down and prop yourself up on your forearms, elbows under shoulders.",
    "Press your forearms down and let your chest lift and open.",
    "Keep your legs and hips relaxed on the floor.",
    "Breathe and let your low back gently arch."
  ],
  tips: ["A gentle backbend that most backs love. Ease off if it pinches."]
},

// ============ FLOOR / SEATED ============
{
  id: "yoga-boat", name: "Boat Pose (Paripurna Navasana)", region: "core", type: "yoga",
  equipment: ["none"], position: "Seated, leaning back", level: 2,
  muscles: "Abdominals, hip flexors",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20 },
  howTo: [
    "Sit with knees bent and feet flat on the floor.",
    "Lean back slightly, keeping your spine long, and lift your feet so your shins are level with the floor.",
    "Reach your arms forward beside your knees.",
    "Balance on your sit bones and breathe."
  ],
  tips: ["Hold behind your thighs for support if needed.", "A long spine matters more than straight legs."],
  variations: [
    { name: "Full Boat", note: "Straighten both legs so your body forms a V shape. Much harder." }
  ]
},
{
  id: "yoga-supine-twist", name: "Supine Spinal Twist (Jathara Parivartanasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Lying on your back", level: 1,
  muscles: "Low back, obliques, glutes",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Lie on your back and hug your knees to your chest.",
    "Let both knees drop to one side while your shoulders stay on the floor.",
    "Stretch your arms out to the sides and look the opposite way if comfortable.",
    "Breathe, then bring the knees through center and switch sides."
  ],
  tips: ["Put a cushion under the knees if they do not reach the floor."]
},
{
  id: "yoga-happy-baby", name: "Happy Baby (Ananda Balasana)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Lying on your back", level: 1,
  muscles: "Hips, inner thighs, low back",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30 },
  howTo: [
    "Lie on your back and draw your knees toward your armpits.",
    "Hold the outside edges of your feet, shins pointing straight up.",
    "Gently pull down so your knees move toward the floor beside your ribs.",
    "Rock softly side to side if that feels nice."
  ],
  tips: ["Hold behind your thighs instead if reaching your feet is a strain."]
},
{
  id: "yoga-butterfly", name: "Butterfly Pose (Baddha Konasana)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Seated", level: 1,
  muscles: "Inner thighs, hips, groin",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 45 },
  howTo: [
    "Sit tall and bring the soles of your feet together, knees falling out to the sides.",
    "Hold your feet or ankles.",
    "Sit up tall, or hinge gently forward from the hips for more stretch.",
    "Let gravity do the work on your knees. No pushing."
  ],
  tips: ["Sit on a folded blanket to make sitting tall easier.", "Cushions under the knees make it restful."]
},
{
  id: "yoga-seated-forward-fold", name: "Seated Forward Fold (Paschimottanasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Seated, legs extended", level: 2,
  muscles: "Hamstrings, low back, calves",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30 },
  howTo: [
    "Sit with both legs stretched out in front of you.",
    "Inhale and sit up tall.",
    "Exhale and hinge forward from your hips, reaching toward your feet.",
    "Hold your shins, ankles, or feet, wherever you comfortably reach."
  ],
  tips: ["Bend your knees as much as you like. Folding from the hips matters more than touching your toes.", "A strap or towel around the feet helps you relax into it."]
},
{
  id: "yoga-corpse", name: "Corpse Pose (Savasana)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Lying on your back", level: 1,
  muscles: "Whole body relaxation",
  helps: [],
  dose: { sets: 1, reps: 0, timeSec: 180 },
  howTo: [
    "Lie flat on your back with legs extended and arms at your sides, palms up.",
    "Let your feet fall open and your whole body grow heavy.",
    "Close your eyes and breathe naturally.",
    "Stay still and let the practice settle in."
  ],
  tips: ["A cushion under the knees eases the low back.", "This is the most skipped and most important pose. Stay for the full time."]
},

// ============ STANDING ============
{
  id: "yoga-tree", name: "Tree Pose (Vrksasana)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Standing on one leg", level: 2,
  muscles: "Ankles, legs, core",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20, perSide: true },
  howTo: [
    "Stand tall and shift your weight onto one foot.",
    "Place the other foot on your inner calf or inner thigh, never on the knee.",
    "Press palms together at your chest, or reach them overhead.",
    "Fix your gaze on one still point and breathe."
  ],
  tips: ["A toe kickstand on the floor still counts as Tree.", "Wobbling is the exercise, not a failure."],
  caution: "Stand near a wall or counter if your balance is unsteady."
},
{
  id: "yoga-warrior-1", name: "Warrior I (Virabhadrasana I)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Standing lunge", level: 2,
  muscles: "Legs, hips, shoulders",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20, perSide: true },
  howTo: [
    "Step one foot back about a leg's length, back foot angled slightly out.",
    "Bend your front knee over the ankle. Both hips face forward.",
    "Reach both arms overhead.",
    "Breathe, then switch sides."
  ],
  tips: ["Shorten the stance any time to feel steadier."]
},
{
  id: "yoga-warrior-2", name: "Warrior II (Virabhadrasana II)", region: "hip", type: "yoga",
  equipment: ["none"], position: "Wide standing lunge", level: 2,
  muscles: "Legs, hips, shoulders",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20, perSide: true },
  howTo: [
    "Step your feet wide apart. Turn your front foot forward and back foot parallel to the back of the mat.",
    "Bend the front knee over the ankle. Hips and chest face the long side.",
    "Stretch your arms out at shoulder height, one forward and one back.",
    "Gaze over the front fingertips and breathe."
  ],
  tips: ["Stack your shoulders over your hips, not leaning forward."]
},
{
  id: "yoga-warrior-3", name: "Warrior III (Virabhadrasana III)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Balancing on one leg, torso level", level: 3,
  muscles: "Glutes, hamstrings, core, back",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15, perSide: true },
  howTo: [
    "Stand on one leg and hinge your torso forward.",
    "Extend your other leg straight behind you until body and leg are level with the floor, like the letter T.",
    "Reach your arms back along your sides, out wide, or forward.",
    "Keep your hips level and breathe."
  ],
  tips: ["Hands on a chair back or wall makes this much more doable."],
  caution: "A strong balance challenge. Keep support within reach."
},
{
  id: "yoga-reverse-warrior", name: "Reverse Warrior (Viparita Virabhadrasana)", region: "hip", type: "yoga",
  equipment: ["none"], position: "From Warrior II", level: 2,
  muscles: "Legs, side body, shoulders",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 15, perSide: true },
  howTo: [
    "Start in Warrior II with the front knee bent.",
    "Flip your front palm up and reach that arm toward the ceiling and slightly back.",
    "Rest your back hand lightly on your back leg.",
    "Feel the stretch along the front side of your body."
  ],
  tips: ["Keep the front knee bent. The legs stay Warrior while the upper body leans back."]
},
{
  id: "yoga-star", name: "Star Pose (Utthita Tadasana)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Standing wide", level: 1,
  muscles: "Whole body, posture",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 20 },
  howTo: [
    "Step your feet wide apart, toes pointing forward.",
    "Stretch your arms out to the sides at shoulder height.",
    "Reach out through all five points: head, hands, and feet.",
    "Stand tall and breathe."
  ],
  tips: ["A simple, energizing shape. Good between the Warrior poses."]
},
{
  id: "yoga-standing-forward-fold", name: "Standing Forward Fold (Uttanasana)", region: "lower-back", type: "yoga",
  equipment: ["none"], position: "Standing, folded forward", level: 1,
  muscles: "Hamstrings, low back, calves",
  helps: [],
  dose: { sets: 1, reps: 1, hold: 30 },
  howTo: [
    "Stand with feet hip-width apart.",
    "Bend your knees generously and fold forward from your hips.",
    "Let your head and arms hang heavy, or hold opposite elbows.",
    "Sway gently side to side if it feels good."
  ],
  tips: ["Bent knees protect the low back and still stretch the hamstrings."],
  caution: "Rise back up slowly to avoid a head rush."
},

// ============ CLOSING ============
{
  id: "yoga-anjali-mudra", name: "Heart Center (Anjali Mudra)", region: "balance", type: "yoga",
  equipment: ["none"], position: "Seated or standing", level: 1,
  muscles: "Posture, breath",
  helps: [],
  dose: { sets: 1, reps: 0, timeSec: 60 },
  howTo: [
    "Sit or stand tall and press your palms together at the center of your chest.",
    "Close your eyes or soften your gaze.",
    "Take slow, even breaths.",
    "Take a moment to notice how you feel compared to when you started."
  ],
  tips: ["A traditional way to close a practice. Even a few breaths count."]
}

);
