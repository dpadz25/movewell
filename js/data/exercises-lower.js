// MoveWell exercise database, Part 2: Lower Back, Hip, Knee, Ankle & Foot

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ LOWER BACK ============
{
  id: "pelvic-tilt", name: "Pelvic Tilt", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "Lying on back", level: 1,
  muscles: "Deep abdominals, lower back",
  helps: ["low-back-pain", "posture", "general"],
  dose: { sets: 2, reps: 10, hold: 5 },
  howTo: [
    "Lie on your back with knees bent, feet flat.",
    "Gently flatten your lower back into the floor by tightening your belly and tilting your pelvis.",
    "Hold, then relax and let the small arch return.",
    "Rock slowly between the two positions."
  ],
  tips: ["The foundation for almost every other back exercise.", "Think of your pelvis as a bowl of water tipping slightly back and forward."],
  caution: "Small, gentle movement. No straining.",
  variations: [
    { name: "Seated Pelvic Tilt", note: "Same rocking motion sitting on a firm chair." }
  ]
},
{
  id: "knee-to-chest", name: "Knee to Chest Stretch", region: "lower-back", type: "stretch",
  equipment: ["none"], position: "Lying on back", level: 1,
  muscles: "Lower back, glutes",
  helps: ["low-back-pain", "sciatica", "hip-pain"],
  dose: { sets: 2, reps: 3, hold: 30, perSide: true },
  howTo: [
    "Lie on your back with knees bent.",
    "Bring one knee up and hug it gently toward your chest with both hands.",
    "Keep the other foot flat on the floor.",
    "Hold, breathe, lower, and switch."
  ],
  tips: ["Hold behind the thigh instead of over the knee if your knee is sensitive."],
  caution: "If this position eases your leg pain, it suits you. If it worsens leg pain, try the Press-Up direction instead and tell your therapist.",
  variations: [
    { name: "Both Knees to Chest", note: "Hug both knees at once for a fuller lower back stretch." }
  ]
},
{
  id: "lower-trunk-rotation", name: "Lower Trunk Rotation", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "Lying on back", level: 1,
  muscles: "Lower back rotators, obliques",
  helps: ["low-back-pain", "general", "sciatica"],
  dose: { sets: 2, reps: 10, hold: 3 },
  howTo: [
    "Lie on your back, knees bent together, feet flat, arms out to the sides.",
    "Keeping shoulders on the floor, let both knees fall slowly to the right.",
    "Pause where comfortable, then bring them across to the left.",
    "Rock gently side to side."
  ],
  tips: ["A soothing way to start and end the day for a stiff back."],
  caution: "Keep the motion in a pain-free arc.",
  variations: []
},
{
  id: "prone-press-up", name: "Press-Up (McKenzie Extension)", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "Lying face down", level: 2,
  muscles: "Lower back extension",
  helps: ["low-back-pain", "sciatica", "disc"],
  dose: { sets: 3, reps: 10, hold: 2 },
  howTo: [
    "Lie face down, hands under your shoulders like a push-up.",
    "Keeping hips and legs relaxed on the floor, press your chest up with your arms.",
    "Let your back arch passively. Go only as high as comfortable.",
    "Lower back down slowly."
  ],
  tips: ["Often helpful for back pain that runs into the leg, especially pain that eases as it moves toward the spine (centralizes).", "Let the hips sag, the arms do the lifting."],
  caution: "If leg pain increases or spreads farther down, stop and check with your clinician.",
  variations: [
    { name: "Prone on Elbows", note: "Rest propped on your forearms for 1 to 2 minutes. A gentler starting version." },
    { name: "Standing Back Bend", note: "Hands on hips, gently arch backward. The standing version for during the day." }
  ]
},
{
  id: "sciatic-nerve-floss", name: "Sciatic Nerve Floss", region: "lower-back", type: "nerve-glide",
  equipment: ["chair"], position: "Sitting", level: 2,
  muscles: "Sciatic nerve pathway",
  helps: ["sciatica", "low-back-pain"],
  dose: { sets: 1, reps: 10, perSide: true },
  howTo: [
    "Sit tall on a chair, hands resting at your sides.",
    "Straighten your right knee and pull the toes up while gently looking up at the ceiling.",
    "Then bend the knee back down while tucking your chin to your chest.",
    "Alternate smoothly, like a slow see-saw."
  ],
  tips: ["The head and leg move in opposite pairs to slide the nerve rather than yank it."],
  caution: "Gentle tension only. If symptoms increase afterward, do fewer and gentler.",
  variations: []
},
{
  id: "childs-pose", name: "Child's Pose", region: "lower-back", type: "stretch",
  equipment: ["none"], position: "Kneeling", level: 1,
  muscles: "Lower back, lats, hips",
  helps: ["low-back-pain", "general"],
  dose: { sets: 2, reps: 1, hold: 45 },
  howTo: [
    "Kneel on the floor, big toes together, knees apart.",
    "Sit your hips back toward your heels and walk your hands forward.",
    "Rest your forehead down and let your back lengthen.",
    "Breathe slowly into your lower ribs."
  ],
  tips: ["A resting position you can return to any time your back wants a break."],
  caution: "Use a pillow under hips or chest for comfort. Skip if knees will not allow it.",
  variations: []
},
{
  id: "bird-dog", name: "Bird Dog", region: "lower-back", type: "strengthen",
  equipment: ["none"], position: "Hands and knees", level: 2,
  muscles: "Back extensors, glutes, core stabilizers",
  helps: ["low-back-pain", "posture", "general", "balance-falls"],
  dose: { sets: 3, reps: 8, hold: 5, perSide: true },
  howTo: [
    "Start on hands and knees, back flat like a tabletop.",
    "Reach your right arm forward and left leg back at the same time.",
    "Keep hips level and back still, as if balancing a cup of tea on it.",
    "Hold, return with control, then switch pair."
  ],
  tips: ["Part of the famous 'Big 3' for backs. Trains the back to stay steady while limbs move.", "Slow and quiet beats high and wobbly."],
  caution: "Keep the lower back from arching or twisting.",
  variations: [
    { name: "Arm Only / Leg Only", note: "Lift just one limb at a time. The right starting point for most people." },
    { name: "Elbow-to-Knee", note: "Advanced: draw elbow and knee together under your body between reps." }
  ]
},
{
  id: "curl-up", name: "Modified Curl-Up", region: "lower-back", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 2,
  muscles: "Abdominals (back-sparing)",
  helps: ["low-back-pain", "general", "posture"],
  dose: { sets: 3, reps: 6, hold: 8 },
  howTo: [
    "Lie on your back, one knee bent, the other leg straight.",
    "Slide your hands under the small of your back, palms down.",
    "Lift your head and shoulders one inch as a single unit, without bending the neck.",
    "Hold, breathe, lower. Switch the bent leg halfway."
  ],
  tips: ["Also from the 'Big 3'. Builds ab strength without bending the spine, unlike sit-ups."],
  caution: "The lift is tiny. Do not curl up high or tuck the chin.",
  variations: []
},
{
  id: "standing-back-extension", name: "Standing Back Bend", region: "lower-back", type: "mobility",
  equipment: ["none"], position: "Standing", level: 1,
  muscles: "Lumbar extension",
  helps: ["low-back-pain", "posture", "disc"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Stand tall with feet hip-width, hands on the back of your hips.",
    "Gently arch backward over your hands, letting your gaze rise slightly.",
    "Return to standing. Repeat in a slow rhythm."
  ],
  tips: ["A great antidote after lifting, bending, or long sitting."],
  caution: "Move within comfort, and keep knees soft.",
  variations: []
},

// ============ HIP ============
{
  id: "glute-bridge", name: "Glute Bridge", region: "hip", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 1,
  muscles: "Glutes, hamstrings, core",
  helps: ["low-back-pain", "hip-pain", "knee-pain", "general", "balance-falls"],
  dose: { sets: 3, reps: 10, hold: 3 },
  howTo: [
    "Lie on your back, knees bent, feet flat hip-width apart.",
    "Squeeze your buttocks and lift your hips until your body forms a straight line from knees to shoulders.",
    "Hold at the top, then lower slowly."
  ],
  tips: ["Push through your heels.", "If you feel it mostly in your hamstrings, bring the feet closer to your hips."],
  caution: "Lift with the glutes, not by arching the lower back.",
  variations: [
    { name: "Bridge with Band", note: "Mini-band around the knees, press out gently while bridging. Wakes up the side glutes." },
    { name: "Single-Leg Bridge", note: "One leg extended, bridge on the other. Much harder." },
    { name: "Bridge March", note: "Hold the bridge and slowly lift one foot, then the other." }
  ]
},
{
  id: "clamshell", name: "Clamshell", region: "hip", type: "strengthen",
  equipment: ["band", "none"], position: "Lying on side", level: 1,
  muscles: "Gluteus medius (side hip)",
  helps: ["hip-pain", "knee-pain", "low-back-pain", "itb"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Lie on your side, knees bent about 45 degrees, feet together, head supported.",
    "Keeping feet touching, lift your top knee like a clam opening.",
    "Do not let your pelvis roll backward.",
    "Lower slowly."
  ],
  tips: ["Strong side-hips keep knees tracking straight when you walk and climb stairs.", "Add a mini-band above the knees to progress."],
  caution: "Small controlled lift, the pelvis stays stacked and still.",
  variations: [
    { name: "With Mini-Band", note: "Band above knees for resistance." },
    { name: "Side-Lying Hip Abduction", note: "Straighten the top leg and lift it toward the ceiling, heel leading." }
  ]
},
{
  id: "side-lying-hip-abduction", name: "Side-Lying Leg Lift", region: "hip", type: "strengthen",
  equipment: ["none"], position: "Lying on side", level: 2,
  muscles: "Gluteus medius, hip abductors",
  helps: ["hip-pain", "knee-pain", "balance-falls", "itb"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Lie on your side with your bottom knee bent for balance and top leg straight, in line with your body.",
    "Point the top toes slightly down and lift the leg about 45 degrees.",
    "Lower slowly without letting the leg drift forward."
  ],
  tips: ["Leading with the heel keeps the work in the glute instead of the front of the hip."],
  caution: "If you feel it in the front of the hip, the leg has drifted forward. Re-set.",
  variations: []
},
{
  id: "hip-flexor-stretch", name: "Half-Kneeling Hip Flexor Stretch", region: "hip", type: "stretch",
  equipment: ["none", "chair"], position: "Half-kneeling", level: 2,
  muscles: "Hip flexors, front of thigh",
  helps: ["low-back-pain", "hip-pain", "posture"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Kneel on your right knee with your left foot planted in front (use a cushion under the knee).",
    "Tuck your tailbone slightly and squeeze the right glute.",
    "Shift your weight gently forward until you feel a stretch across the front of the right hip.",
    "Hold, breathe, switch sides."
  ],
  tips: ["The tailbone tuck matters more than how far you lunge.", "Tight hip flexors from sitting tilt the pelvis and load the lower back."],
  caution: "Hold a chair for balance. Skip kneeling versions if knees object and use the standing variation.",
  variations: [
    { name: "Standing Hip Flexor Stretch", note: "Stagger stance, tuck tailbone, shift forward. No kneeling needed." },
    { name: "Couch Stretch", note: "Back foot elevated on a couch. Advanced, adds quad stretch." }
  ]
},
{
  id: "figure-4-stretch", name: "Figure-4 Piriformis Stretch", region: "hip", type: "stretch",
  equipment: ["none", "chair"], position: "Lying on back or sitting", level: 1,
  muscles: "Piriformis, deep hip rotators, glutes",
  helps: ["sciatica", "hip-pain", "low-back-pain"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Lie on your back with knees bent.",
    "Cross your right ankle over your left thigh, making a '4'.",
    "Reach through and hold behind your left thigh, gently pulling it toward you.",
    "Feel the stretch deep in the right buttock. Hold, then switch."
  ],
  tips: ["The piriformis lies right over the sciatic nerve, so releasing it often eases buttock and leg symptoms."],
  caution: "Gentle pull. Numbness or electric pain means back off.",
  variations: [
    { name: "Seated Figure-4", note: "Sitting in a chair, ankle over opposite knee, hinge slightly forward with a tall back." }
  ]
},
{
  id: "hamstring-stretch-towel", name: "Hamstring Stretch with Strap", region: "hip", type: "stretch",
  equipment: ["towel"], position: "Lying on back", level: 1,
  muscles: "Hamstrings",
  helps: ["low-back-pain", "knee-pain", "sciatica", "general"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Lie on your back, loop a towel or belt around your right foot.",
    "Keeping the knee nearly straight, raise the leg until you feel a stretch behind the thigh.",
    "Keep your head and shoulders relaxed on the floor.",
    "Hold, breathe, lower, switch."
  ],
  tips: ["Bend the other knee, foot flat, to keep the back comfortable."],
  caution: "Stretch the muscle behind the thigh, not the nerve. A sharp electric feeling means lower the leg a little.",
  variations: [
    { name: "Seated Hamstring Stretch", note: "Sit at the edge of a chair, one leg straight, heel on floor, hinge forward with a tall back." },
    { name: "Doorway Hamstring Stretch", note: "Lie in a doorway with one leg resting up the wall. Fully relaxed passive version." }
  ]
},
{
  id: "standing-hip-abduction", name: "Standing Side Leg Raise", region: "hip", type: "strengthen",
  equipment: ["chair", "band"], position: "Standing at support", level: 1,
  muscles: "Gluteus medius",
  helps: ["hip-pain", "balance-falls", "knee-pain"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Stand tall holding a counter or chair back.",
    "Keeping your trunk upright and toes facing forward, lift one leg straight out to the side.",
    "Lower slowly. No leaning."
  ],
  tips: ["The standing leg works on balance while the moving leg builds strength. Double value."],
  caution: "Stay tall. Leaning over cheats the muscle.",
  variations: [
    { name: "With Ankle Band", note: "Mini-band around ankles for resistance." },
    { name: "Standing Hip Extension", note: "Lift the leg straight behind you, squeezing the buttock, without arching the back." }
  ]
},
{
  id: "monster-walk", name: "Sideways Band Walk", region: "hip", type: "strengthen",
  equipment: ["band"], position: "Standing", level: 2,
  muscles: "Gluteus medius, hip stabilizers",
  helps: ["knee-pain", "hip-pain", "itb", "balance-falls"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Place a mini-band around your legs just above the knees (or at the ankles for harder).",
    "Bend your knees slightly into a mini squat.",
    "Step sideways, keeping tension on the band, feet pointing forward.",
    "Take 10 steps one way, then 10 back."
  ],
  tips: ["Keep the steps smooth. Do not let the trailing foot drag in and slacken the band."],
  caution: "Stay in the mini squat, knees tracking over toes.",
  variations: [
    { name: "Monster Walk", note: "Walk forward and backward in a wide stance with the band on." }
  ]
},
{
  id: "ninety-ninety-stretch", name: "90/90 Hip Stretch", region: "hip", type: "stretch",
  equipment: ["none"], position: "Sitting on floor", level: 2,
  muscles: "Hip rotators, glutes",
  helps: ["hip-pain", "low-back-pain", "sciatica"],
  dose: { sets: 2, reps: 1, hold: 45, perSide: true },
  howTo: [
    "Sit with your right leg bent 90 degrees in front of you and your left leg bent 90 degrees behind.",
    "Keep your chest tall and hinge slightly over the front shin.",
    "Feel the stretch in the right outer hip. Hold and breathe.",
    "Swivel the legs and repeat on the other side."
  ],
  tips: ["Prop a hand or cushion under the hip if you tilt heavily to one side."],
  caution: "Skip if getting to the floor is unsafe. Use Seated Figure-4 instead.",
  variations: []
},
{
  id: "butterfly-stretch", name: "Butterfly (Inner Thigh) Stretch", region: "hip", type: "stretch",
  equipment: ["none"], position: "Sitting", level: 1,
  muscles: "Adductors (inner thigh)",
  helps: ["hip-pain", "general"],
  dose: { sets: 2, reps: 1, hold: 30 },
  howTo: [
    "Sit tall with the soles of your feet together, knees dropped out to the sides.",
    "Hold your ankles and rest elbows lightly on your thighs.",
    "Sit tall and let the knees sink with gravity.",
    "Hold and breathe."
  ],
  tips: ["Sitting on a folded blanket makes it much easier to sit tall."],
  caution: "Let gravity work, do not press the knees down hard.",
  variations: [
    { name: "Standing Wide-Leg Lean", note: "Standing alternative: wide stance, shift hips side to side." }
  ]
},
{
  id: "quad-stretch", name: "Standing Quad Stretch", region: "hip", type: "stretch",
  equipment: ["chair"], position: "Standing at support", level: 2,
  muscles: "Quadriceps (front of thigh)",
  helps: ["knee-pain", "hip-pain", "general"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Hold a chair or counter with your left hand.",
    "Bend your right knee and catch the ankle behind you with your right hand.",
    "Stand tall, knees close together, and tuck your tailbone slightly.",
    "Feel the stretch down the front of the thigh. Hold, then switch."
  ],
  tips: ["Cannot reach the ankle? Loop a towel around the foot, or rest the foot on a low stool behind you."],
  caution: "Keep the knee pointing down, not out to the side.",
  variations: [
    { name: "Side-Lying Quad Stretch", note: "Lie on your side and pull the top ankle back. No balance required." }
  ]
},
{
  id: "hip-hinge", name: "Hip Hinge Practice", region: "hip", type: "strengthen",
  equipment: ["stick", "none"], position: "Standing", level: 2,
  muscles: "Glutes, hamstrings, back position sense",
  helps: ["low-back-pain", "general", "balance-falls"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand tall. Optionally hold a stick along your spine touching head, mid-back, and tailbone.",
    "Push your hips backward as if closing a drawer behind you, letting your chest tip forward.",
    "Keep the back straight (stick stays in contact) and knees soft.",
    "Squeeze glutes to stand tall again."
  ],
  tips: ["This is how to bend and lift without straining the back. Practicing it protects you every day."],
  caution: "The movement is hips back, not back bending down.",
  variations: [
    { name: "Romanian Deadlift (Light)", note: "Hinge holding light weights. Builds real-world lifting strength." }
  ]
},

// ============ KNEE ============
{
  id: "quad-set", name: "Quad Set", region: "knee", type: "strengthen",
  equipment: ["towel"], position: "Sitting or lying, leg straight", level: 1,
  muscles: "Quadriceps",
  helps: ["knee-pain", "knee-oa", "post-surgery"],
  dose: { sets: 3, reps: 10, hold: 5, perSide: true },
  howTo: [
    "Sit or lie with your leg straight, a small towel roll under the knee.",
    "Tighten the muscle on top of your thigh, pressing the knee gently down into the towel.",
    "Your kneecap should slide slightly upward. Hold, then fully relax."
  ],
  tips: ["The very first knee exercise after most injuries and surgeries. It re-teaches the quad to fire."],
  caution: "It should feel like a strong tightening, not pain.",
  variations: []
},
{
  id: "straight-leg-raise", name: "Straight Leg Raise", region: "knee", type: "strengthen",
  equipment: ["none"], position: "Lying on back", level: 1,
  muscles: "Quadriceps, hip flexors",
  helps: ["knee-pain", "knee-oa", "post-surgery", "general"],
  dose: { sets: 3, reps: 10, hold: 3, perSide: true },
  howTo: [
    "Lie on your back, left knee bent with foot flat, right leg straight.",
    "Tighten the right thigh and lock the knee straight.",
    "Lift the straight leg to the height of the other knee.",
    "Hold, then lower slowly. Keep the knee locked the whole time."
  ],
  tips: ["If the knee bends during the lift, do more Quad Sets first."],
  caution: "Keep your lower back relaxed on the floor.",
  variations: [
    { name: "With Ankle Weight", note: "Add a light cuff weight above the ankle as you get stronger." }
  ]
},
{
  id: "short-arc-quad", name: "Short Arc Quad", region: "knee", type: "strengthen",
  equipment: ["towel", "foam-roller"], position: "Lying on back", level: 1,
  muscles: "Quadriceps (especially inner portion)",
  helps: ["knee-pain", "knee-oa", "post-surgery"],
  dose: { sets: 3, reps: 10, hold: 3, perSide: true },
  howTo: [
    "Place a large rolled towel or roller under your knee so it rests bent about 30 degrees.",
    "Straighten the knee by lifting your heel, keeping the knee on the roll.",
    "Squeeze the thigh hard at the top. Hold, lower slowly."
  ],
  tips: ["Small range, big payoff for the muscle that controls the kneecap."],
  caution: "The back of the knee stays on the roll throughout.",
  variations: []
},
{
  id: "terminal-knee-extension", name: "Terminal Knee Extension (Band)", region: "knee", type: "strengthen",
  equipment: ["band"], position: "Standing", level: 2,
  muscles: "Quadriceps end-range control",
  helps: ["knee-pain", "post-surgery", "knee-oa"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Anchor a band at knee height and loop it behind your right knee, facing the anchor.",
    "Step back until the band is taut, right knee slightly bent.",
    "Squeeze the thigh to straighten the knee fully against the band.",
    "Slowly let it bend again."
  ],
  tips: ["Rebuilds the confident 'locked-out' feeling when standing and walking."],
  caution: "Straighten firmly but do not snap the knee back.",
  variations: []
},
{
  id: "heel-slide", name: "Heel Slide", region: "knee", type: "mobility",
  equipment: ["towel"], position: "Lying on back", level: 1,
  muscles: "Knee bending range",
  helps: ["post-surgery", "knee-pain", "knee-oa"],
  dose: { sets: 2, reps: 10, hold: 5, perSide: true },
  howTo: [
    "Lie on your back with legs straight.",
    "Slide your right heel along the floor toward your buttock as far as comfortable.",
    "Hold at the end, then slide back out.",
    "A towel under the heel helps it glide."
  ],
  tips: ["Loop a towel around the ankle and assist with your hands for a little extra range."],
  caution: "Expect a firm stretch after surgery, but stay out of sharp pain.",
  variations: [
    { name: "Seated Heel Slide", note: "Sitting in a chair, slide the foot back under the seat." }
  ]
},
{
  id: "mini-squat", name: "Mini Squat", region: "knee", type: "strengthen",
  equipment: ["chair", "none"], position: "Standing at support", level: 2,
  muscles: "Quadriceps, glutes",
  helps: ["knee-pain", "knee-oa", "balance-falls", "general", "hip-pain"],
  dose: { sets: 3, reps: 10 },
  howTo: [
    "Stand tall holding a counter or chair back, feet hip-width apart.",
    "Bend your knees and sit back slightly, lowering a few inches.",
    "Keep heels down and knees tracking over the toes.",
    "Push through your feet to stand tall."
  ],
  tips: ["Shallow and pain-free first. Depth grows as strength does."],
  caution: "Keep knees behind the tips of your toes and pointed the same way as the feet.",
  variations: [
    { name: "Wall Slide Squat", note: "Back against a wall, slide down a few inches and return. Extra support." },
    { name: "Goblet Squat", note: "Advanced: hold a weight at the chest and squat deeper." }
  ]
},
{
  id: "sit-to-stand", name: "Sit to Stand", region: "knee", type: "strengthen",
  equipment: ["chair"], position: "Sitting to standing", level: 2,
  muscles: "Quadriceps, glutes, balance",
  helps: ["knee-oa", "knee-pain", "balance-falls", "general", "hip-pain"],
  dose: { sets: 3, reps: 8 },
  howTo: [
    "Sit toward the front of a sturdy chair, feet under your knees.",
    "Lean your nose over your toes and push through your feet to stand fully tall.",
    "Reverse slowly: hips back, lower with control until you softly touch the seat.",
    "Try not to use your hands."
  ],
  tips: ["Possibly the single most useful strength exercise for staying independent.", "Slow lowering builds the most strength."],
  caution: "Use armrests as needed at first. A higher chair or a cushion makes it easier.",
  variations: [
    { name: "With Hands Crossed", note: "Arms crossed over chest, no hand help." },
    { name: "Lower Chair", note: "Progress by using a lower seat." },
    { name: "Single-Leg Emphasis", note: "Advanced: stand using mostly one leg." }
  ]
},
{
  id: "step-up", name: "Step-Up", region: "knee", type: "strengthen",
  equipment: ["step"], position: "Standing at a step", level: 2,
  muscles: "Quadriceps, glutes",
  helps: ["knee-pain", "knee-oa", "balance-falls", "general", "hip-pain"],
  dose: { sets: 3, reps: 8, perSide: true },
  howTo: [
    "Stand facing a step or the bottom stair, hand on the rail.",
    "Place your right foot fully on the step.",
    "Push through the right heel to lift your body up, touching the left toes to the step.",
    "Lower back down slowly with control."
  ],
  tips: ["Push up with the front leg, do not bounce off the back leg.", "Stair-climbing strength, trained safely one leg at a time."],
  caution: "Keep the knee tracking over the middle of the foot.",
  variations: [
    { name: "Lateral Step-Up", note: "Stand sideways to the step. Targets the outer hip and knee control." },
    { name: "Step-Down (Eccentric)", note: "Stand on the step and slowly lower one heel toward the floor. Excellent for kneecap pain, and harder than it looks." }
  ]
},
{
  id: "standing-hamstring-curl", name: "Standing Hamstring Curl", region: "knee", type: "strengthen",
  equipment: ["chair"], position: "Standing at support", level: 1,
  muscles: "Hamstrings",
  helps: ["knee-pain", "knee-oa", "general", "balance-falls"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Stand tall holding a chair back.",
    "Keeping knees side by side, bend your right knee and lift the heel toward your buttock.",
    "Pause at the top, lower slowly."
  ],
  tips: ["Add an ankle weight when 10 repetitions become easy."],
  caution: "Do not let the hip swing forward or back, the thigh stays vertical.",
  variations: []
},
{
  id: "wall-sit", name: "Wall Sit", region: "knee", type: "strengthen",
  equipment: ["wall"], position: "Standing against wall", level: 3,
  muscles: "Quadriceps, glutes (isometric)",
  helps: ["knee-pain", "knee-oa", "general"],
  dose: { sets: 3, reps: 1, timeSec: 30 },
  howTo: [
    "Lean your back flat against a wall, feet out in front of you.",
    "Slide down until knees are comfortably bent (a shallow angle is fine).",
    "Hold the position, breathing steadily.",
    "Slide back up to rest."
  ],
  tips: ["Isometric holds like this can actually reduce tendon and knee pain while building strength.", "Start shallow, 10 to 15 seconds, and grow from there."],
  caution: "Knees stay above ankles, never deeper than 90 degrees.",
  variations: []
},
{
  id: "seated-knee-extension", name: "Seated Knee Extension", region: "knee", type: "strengthen",
  equipment: ["chair", "machine"], position: "Sitting", level: 1,
  muscles: "Quadriceps",
  helps: ["knee-oa", "knee-pain", "post-surgery", "general"],
  dose: { sets: 3, reps: 10, hold: 3, perSide: true },
  howTo: [
    "Sit tall in a chair, thighs supported.",
    "Straighten your right knee until the leg is level, pulling toes toward you.",
    "Squeeze the thigh at the top, hold, then lower slowly."
  ],
  tips: ["Easy to do during television commercials. Add an ankle weight to progress.", "At the gym, the knee extension machine is the loaded version."],
  caution: "Move slowly, no kicking or swinging.",
  variations: [
    { name: "Machine Knee Extension", note: "Gym machine version with adjustable weight." }
  ]
},
{
  id: "itb-tfl-stretch", name: "Standing Outer-Hip Stretch", region: "knee", type: "stretch",
  equipment: ["wall"], position: "Standing", level: 2,
  muscles: "TFL and outer hip (IT band area)",
  helps: ["itb", "knee-pain", "hip-pain"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Stand with your right side to a wall, hand on the wall.",
    "Cross your right leg behind your left.",
    "Push your right hip gently toward the wall until you feel a stretch along the outer right hip and thigh.",
    "Hold, then switch sides."
  ],
  tips: ["Outer-thigh (IT band) irritation usually calms best with side-hip strengthening plus this stretch."],
  caution: "A lean, not a collapse. Keep tall through the trunk.",
  variations: []
},

// ============ ANKLE & FOOT ============
{
  id: "ankle-pumps", name: "Ankle Pumps", region: "ankle-foot", type: "mobility",
  equipment: ["none"], position: "Sitting or lying", level: 1,
  muscles: "Calf, shin, circulation",
  helps: ["ankle-sprain", "post-surgery", "general"],
  dose: { sets: 3, reps: 20 },
  howTo: [
    "Sit or lie with legs supported.",
    "Point your toes away from you, then pull them back toward your shins.",
    "Pump smoothly, like pressing and releasing a gas pedal."
  ],
  tips: ["Also boosts circulation after surgery or long sitting. Do them often."],
  caution: "None for most people, this is as gentle as it gets.",
  variations: [
    { name: "Ankle Circles", note: "Draw slow circles with your foot, both directions." },
    { name: "Ankle Alphabet", note: "Write the alphabet in the air with your big toe. Covers every direction." }
  ]
},
{
  id: "band-ankle-4way", name: "Ankle Strengthening with Band (4 Directions)", region: "ankle-foot", type: "strengthen",
  equipment: ["band"], position: "Sitting, leg extended", level: 2,
  muscles: "All ankle stabilizers",
  helps: ["ankle-sprain", "balance-falls", "achilles"],
  dose: { sets: 2, reps: 10, perSide: true },
  howTo: [
    "Sit with your leg extended, band looped around the ball of your foot.",
    "Press down against the band (like a gas pedal), return slowly.",
    "Re-anchor the band to pull the foot up, then inward, then outward for the other directions.",
    "Ten slow repetitions each direction."
  ],
  tips: ["The outward direction (eversion) is the key one after a rolled ankle."],
  caution: "Move the ankle only, keep the leg still.",
  variations: []
},
{
  id: "calf-raise", name: "Heel Raise", region: "ankle-foot", type: "strengthen",
  equipment: ["chair", "wall"], position: "Standing at support", level: 1,
  muscles: "Calves",
  helps: ["achilles", "ankle-sprain", "balance-falls", "plantar-fasciitis", "general"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Stand tall holding a counter or chair back.",
    "Rise up onto the balls of both feet.",
    "Pause at the top, then lower slowly with control."
  ],
  tips: ["Strong calves power walking and catch you when you stumble.", "Progress: two feet up, one foot down slowly."],
  caution: "Use fingertip support, not a death grip. Balance is part of the exercise.",
  variations: [
    { name: "Single-Leg Heel Raise", note: "All your weight on one leg. A key strength milestone." },
    { name: "Seated Heel Raise", note: "Sitting version to bias the deeper soleus muscle, or as an easier start." }
  ]
},
{
  id: "eccentric-heel-drop", name: "Eccentric Heel Drop (Achilles)", region: "ankle-foot", type: "strengthen",
  equipment: ["step"], position: "Standing on a step", level: 3,
  muscles: "Calf and Achilles tendon",
  helps: ["achilles"],
  dose: { sets: 3, reps: 12, perSide: true },
  howTo: [
    "Stand on a step with your heels hanging off the edge, hands on the rail.",
    "Rise up on both feet.",
    "Shift weight to the sore leg and lower that heel slowly below the step level, counting 3 to 5 seconds.",
    "Use both legs to rise again."
  ],
  tips: ["The classic Alfredson protocol for Achilles tendon pain. The slow lowering rebuilds the tendon.", "Also do a set with the knee slightly bent to reach the deeper calf."],
  caution: "Some tendon ache during is normal if it settles by the next day. Sharp pain is a stop sign.",
  variations: [
    { name: "Bent-Knee Heel Drop", note: "Same drop with a soft knee, targets the soleus." },
    { name: "Floor Version", note: "No step: rise on two feet, lower slowly on one. Gentler start." }
  ]
},
{
  id: "calf-stretch-wall", name: "Wall Calf Stretch", region: "ankle-foot", type: "stretch",
  equipment: ["wall"], position: "Standing at wall", level: 1,
  muscles: "Gastrocnemius (upper calf)",
  helps: ["plantar-fasciitis", "achilles", "ankle-sprain", "general"],
  dose: { sets: 2, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Face a wall with hands on it, step your right foot far back.",
    "Keep the right heel down and the right knee straight.",
    "Lean into the wall until the right calf stretches.",
    "Hold, then switch."
  ],
  tips: ["Point the back foot straight at the wall like a ski, not turned out."],
  caution: "Keep it a steady stretch, no bouncing.",
  variations: [
    { name: "Soleus Stretch", note: "Same position but bend the back knee slightly, keeping the heel down. Reaches the lower calf." },
    { name: "Step Calf Stretch", note: "Ball of foot on a step edge, let the heel sink below." }
  ]
},
{
  id: "plantar-fascia-stretch", name: "Plantar Fascia Stretch", region: "ankle-foot", type: "stretch",
  equipment: ["none"], position: "Sitting", level: 1,
  muscles: "Plantar fascia (sole of foot)",
  helps: ["plantar-fasciitis"],
  dose: { sets: 3, reps: 1, hold: 30, perSide: true },
  howTo: [
    "Sit and cross your right ankle over your left knee.",
    "Grab your right toes and pull them back toward the shin until the arch tightens.",
    "Massage along the arch with your other thumb while holding.",
    "Especially useful before your first steps in the morning."
  ],
  tips: ["Do it before getting out of bed to tame those painful first steps.", "Rolling the arch over a frozen water bottle is a soothing add-on."],
  caution: "Firm stretch is fine, grinding pain is not.",
  variations: [
    { name: "Frozen Bottle Roll", note: "Roll the sole over a frozen water bottle or firm ball for 1 to 2 minutes." }
  ]
},
{
  id: "towel-scrunch", name: "Towel Scrunches", region: "ankle-foot", type: "strengthen",
  equipment: ["towel"], position: "Sitting", level: 1,
  muscles: "Foot intrinsic muscles",
  helps: ["plantar-fasciitis", "balance-falls", "ankle-sprain"],
  dose: { sets: 3, reps: 10, perSide: true },
  howTo: [
    "Sit with a small towel flat on the floor under your bare foot.",
    "Scrunch the towel toward you using only your toes.",
    "Smooth it out and repeat."
  ],
  tips: ["Strong feet support the arch and take strain off the plantar fascia."],
  caution: "Watch for foot cramps at first, they fade as the muscles wake up.",
  variations: [
    { name: "Marble Pickups", note: "Pick up marbles or small objects with your toes and drop them in a cup." },
    { name: "Short Foot (Arch Doming)", note: "Without curling toes, gently draw the ball of the foot toward the heel to lift the arch. Subtle and advanced." }
  ]
},
{
  id: "knee-to-wall", name: "Knee-to-Wall Ankle Mobility", region: "ankle-foot", type: "mobility",
  equipment: ["wall"], position: "Standing or half-kneeling at wall", level: 2,
  muscles: "Ankle dorsiflexion range",
  helps: ["ankle-sprain", "achilles", "knee-pain", "balance-falls"],
  dose: { sets: 2, reps: 10, hold: 2, perSide: true },
  howTo: [
    "Face a wall with your right toes about a hand-width away from it.",
    "Keeping the right heel glued down, drive the right knee forward to touch the wall.",
    "If it touches easily, scoot the foot back a little.",
    "Repeat in a slow rhythm, then switch."
  ],
  tips: ["Stiff ankles make stairs and squatting harder and can feed knee pain. Track your distance from the wall as a score."],
  caution: "The heel must stay down or the repetition does not count.",
  variations: []
},
{
  id: "toe-raises", name: "Toe Raises (Shin Strength)", region: "ankle-foot", type: "strengthen",
  equipment: ["wall"], position: "Standing against wall", level: 1,
  muscles: "Tibialis anterior (shin)",
  helps: ["balance-falls", "ankle-sprain", "general"],
  dose: { sets: 3, reps: 12 },
  howTo: [
    "Stand with your back and hips against a wall, feet slightly forward.",
    "Keeping heels on the ground, lift your toes and forefeet toward your shins.",
    "Lower slowly."
  ],
  tips: ["Shin strength lifts your toes as you walk. It is a quiet hero for preventing trips."],
  caution: "Hold the wall lightly if needed.",
  variations: [
    { name: "Heel Walking", note: "Walk on your heels for 20 steps, toes up." }
  ]
},
{
  id: "single-leg-balance-foam", name: "Balance on Cushion", region: "ankle-foot", type: "balance",
  equipment: ["ball", "towel"], position: "Standing at support", level: 3,
  muscles: "Ankle stabilizers, balance system",
  helps: ["ankle-sprain", "balance-falls"],
  dose: { sets: 3, reps: 1, timeSec: 30, perSide: true },
  howTo: [
    "Place a folded towel or cushion on the floor next to a counter.",
    "Stand on it with one foot, fingertips on the counter.",
    "Balance, letting the ankle make its tiny corrections.",
    "Switch feet."
  ],
  tips: ["The wobbly surface retrains the ankle's position sensors after a sprain."],
  caution: "Always have support within reach.",
  variations: []
},
{
  id: "pigeon-stretch", name: "Pigeon Stretch", region: "hip", type: "stretch",
  equipment: ["none"], position: "On the floor, one leg folded in front", level: 2,
  muscles: "Glutes, piriformis, deep hip rotators",
  helps: ["hip-pain", "sciatica", "low-back-pain", "general", "strength-training"],
  dose: { sets: 2, reps: 1, hold: 45, perSide: true },
  howTo: [
    "From hands and knees, slide your right knee forward toward your right wrist.",
    "Angle the right shin across your body and extend the left leg straight back.",
    "Square your hips toward the floor and settle your weight down.",
    "Fold forward over the front leg for a deeper stretch, breathe, then switch."
  ],
  tips: ["One of the deepest glute stretches there is, and a favorite for desk-tight hips.", "A pillow under the front-side hip makes it far more comfortable."],
  caution: "The front knee should feel nothing. If it does, do the Figure-4 version on your back instead.",
  variations: [
    { name: "Figure-4 Pigeon (On Back)", note: "Lying on your back with ankle over knee. All the stretch, none of the knee pressure." },
    { name: "Bench Pigeon", note: "Front shin resting on a bench or bed, standing behind it. Easy to control the depth." }
  ]
},
{
  id: "couch-stretch", name: "Couch Stretch", region: "hip", type: "stretch",
  equipment: ["wall", "chair"], position: "Kneeling, back foot up a wall or couch", level: 2,
  muscles: "Hip flexors and quads together (rectus femoris)",
  helps: ["hip-pain", "low-back-pain", "knee-pain", "posture", "general", "strength-training"],
  dose: { sets: 2, reps: 1, hold: 45, perSide: true },
  howTo: [
    "Kneel with your back to a wall or couch, and place one shin up the wall, knee in the corner.",
    "Step the other foot forward into a lunge stance.",
    "Squeeze the glute of the back leg and lift your chest tall.",
    "You will feel a deep stretch down the front of the back thigh and hip."
  ],
  tips: ["Because the knee is bent, this reaches the rectus femoris, the one hip flexor a regular lunge stretch misses.", "Padding under the down knee is not optional. Use a cushion."],
  caution: "Intense by design. Start upright and only lean back over weeks. Skip during acute kneecap pain.",
  variations: [
    { name: "Half Couch (Foot on Chair)", note: "Back foot on a low chair instead of the wall. Much gentler angle." },
    { name: "With Side Reach", note: "Reach the same-side arm overhead and lean slightly away to add the hip's front-side fascia." }
  ]
},
{
  id: "frog-stretch", name: "Frog Stretch (Adductor Rock-Back)", region: "hip", type: "stretch",
  equipment: ["none"], position: "On hands and knees, knees wide", level: 2,
  muscles: "Inner thighs (adductors), groin",
  helps: ["hip-pain", "low-back-pain", "general", "strength-training"],
  dose: { sets: 2, reps: 10, hold: 3 },
  howTo: [
    "From hands and knees, walk your knees out wide, shins parallel and feet turned out.",
    "Keep your back flat and forearms on the floor if comfortable.",
    "Slowly rock your hips back toward your heels until you feel the inner thighs pull.",
    "Rock forward to ease off, then repeat in slow waves."
  ],
  tips: ["The rocking version doubles as a warm-up before squats and leg day.", "Let the stretch build over reps rather than forcing the first one."],
  caution: "Keep the movement in the hips, not the lower back. Pad the knees well.",
  variations: [
    { name: "Static Frog Hold", note: "Settle into the back position and hold 30 to 60 seconds, breathing slowly." },
    { name: "Cossack Squat", note: "The standing cousin: shift side to side over one bent leg with the other straight. Strength and stretch in one." }
  ]
}
);
