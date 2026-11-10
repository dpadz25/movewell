// MoveWell conditions, regions, equipment labels, and prebuilt routine templates
// icon fields reference keys in window.ICONS (js/icons.js)

window.REGIONS = [
  { id: "neck", name: "Neck", icon: "neck", color: "teal" },
  { id: "shoulder", name: "Shoulder", icon: "shoulder", color: "blue" },
  { id: "upper-back", name: "Upper Back & Posture", icon: "upper-back", color: "purple" },
  { id: "chest", name: "Chest", icon: "chest", color: "red" },
  { id: "arms", name: "Arms", icon: "arms", color: "orange" },
  { id: "elbow", name: "Elbow", icon: "elbow", color: "yellow" },
  { id: "wrist", name: "Wrist & Hand", icon: "wrist", color: "pink" },
  { id: "lower-back", name: "Lower Back", icon: "lower-back", color: "accent" },
  { id: "hip", name: "Hip", icon: "hip", color: "teal" },
  { id: "knee", name: "Knee", icon: "knee", color: "blue" },
  { id: "ankle-foot", name: "Ankle & Foot", icon: "ankle-foot", color: "orange" },
  { id: "core", name: "Core", icon: "core", color: "purple" },
  { id: "balance", name: "Balance & Whole Body", icon: "balance", color: "accent" }
];

// commonRank: how common/prevalent the condition is in the general population, low = more common.
// Used to sort the condition list shown when a body region is tapped (bodymap.js), most to least common.
// Non-diagnosis catch-all entries (posture, general, strength-training, conditioning, post-surgery) use 999
// so they always sort to the bottom; they aren't real conditions to rank by prevalence.
window.CONDITIONS = [
  { id: "tos", name: "Neck and arm tension", aka: "thoracic outlet syndrome", regions: ["neck", "shoulder", "upper-back"], commonRank: 23, blurb: "Tightness through the neck, chest, and shoulders. These routines use gentle stretches, posture work, and easy nerve glides. Stop if your arm tingles or feels heavy." },
  { id: "upper-cross", name: "Rounded shoulders or forward head", aka: "upper crossed syndrome posture", regions: ["neck", "shoulder", "upper-back"], commonRank: 16, blurb: "Gentle stretches for the chest and neck, with strengthening for the upper back." },
  { id: "neck-pain", name: "Neck stiffness", aka: "neck pain", regions: ["neck", "upper-back"], commonRank: 2, blurb: "General neck stiffness or ache. Gentle movement, neck strengthening, and upper back mobility may help." },
  { id: "headache", name: "Headaches with a tight neck", aka: "tension headaches", regions: ["neck"], commonRank: 4, blurb: "Headaches that come with a tight neck or shoulders. Gentle neck and posture work may help some people." },
  { id: "shoulder-pain", name: "Shoulder aches", aka: "general shoulder pain", regions: ["shoulder"], commonRank: 3, blurb: "An achy or pinchy shoulder when reaching or lifting. Building shoulder and shoulder-blade strength may help." },
  { id: "rotator-cuff", name: "Sore when reaching or lifting", aka: "rotator cuff injury impingement", regions: ["shoulder"], commonRank: 11, blurb: "Soreness in the shoulder with reaching or lifting. Gradual shoulder and shoulder-blade strengthening is commonly used." },
  { id: "frozen-shoulder", name: "Stiff, limited shoulder movement", aka: "frozen shoulder", regions: ["shoulder"], commonRank: 17, blurb: "A shoulder that feels stiff and hard to move. Frequent, gentle range-of-motion work within a comfortable limit is commonly used." },
  { id: "tennis-elbow", name: "Outer elbow soreness", aka: "tennis elbow", regions: ["elbow", "wrist"], commonRank: 20, blurb: "Soreness on the outside of the elbow with gripping and wrist work. Slow, lowering-only strengthening is commonly used." },
  { id: "golfers-elbow", name: "Inner elbow soreness", aka: "golfer's elbow", regions: ["elbow", "wrist"], commonRank: 21, blurb: "Soreness on the inside of the elbow. It uses the same slow strengthening approach, on the other side." },
  { id: "carpal-tunnel", name: "Hand and wrist strain", aka: "carpal tunnel syndrome", regions: ["wrist"], commonRank: 14, blurb: "Wrist and hand strain from desk or hand work. Gentle tendon glides, nerve glides, and stretches are commonly used. If numbness or tingling is new or getting worse, see a professional." },
  { id: "wrist-pain", name: "Wrist soreness or weakness", aka: "wrist pain", regions: ["wrist"], commonRank: 6, blurb: "General wrist soreness or weakness. Gentle movement first, then gradual strengthening." },
  { id: "arthritis-hand", name: "Stiff, achy fingers and thumbs", aka: "hand arthritis stiffness", regions: ["wrist"], commonRank: 13, blurb: "Stiff or achy fingers and thumbs. Daily gentle movement and light strengthening can help keep hands moving." },
  { id: "low-back-pain", name: "Low back aches", aka: "low back pain", regions: ["lower-back", "core", "hip"], commonRank: 1, blurb: "A very common complaint. Gentle movement, core endurance, hip strength, and walking are often used." },
  { id: "sciatica", name: "Back and leg discomfort", aka: "sciatica leg nerve pain", regions: ["lower-back", "hip"], commonRank: 15, blurb: "Discomfort that runs from the back or buttock down the leg. Gentle nerve glides, back care, and hip stretches are commonly used. If it is severe or getting worse, see a professional." },
  { id: "disc", name: "Back discomfort with bending", aka: "disc bulge back pain", regions: ["lower-back"], commonRank: 8, blurb: "Back discomfort that changes with bending or sitting. Some people find gentle back-extension movements comfortable. A professional can tell you which direction suits you." },
  { id: "hip-pain", name: "Hip aches", aka: "hip pain bursitis arthritis", regions: ["hip"], commonRank: 7, blurb: "Aching in the groin, side of the hip, or buttock. Strengthening the hip muscles is commonly used." },
  { id: "knee-pain", name: "Knee aches", aka: "kneecap knee pain", regions: ["knee", "hip"], commonRank: 12, blurb: "Aching around the kneecap with stairs, squatting, or sitting. Quad and hip strengthening are commonly used." },
  { id: "knee-oa", name: "Stiff, achy knees", aka: "knee arthritis osteoarthritis", regions: ["knee"], commonRank: 5, blurb: "Stiff or sore knees. Gentle movement, strengthening, and regular walking are commonly used." },
  { id: "post-surgery", name: "Getting moving after surgery", aka: "post-surgery recovery", regions: ["knee", "ankle-foot", "balance"], commonRank: 999, blurb: "Gentle early movement after a procedure. Always follow your surgeon's or therapist's instructions first." },
  { id: "itb", name: "Outer thigh or knee tightness", aka: "IT band", regions: ["knee", "hip"], commonRank: 19, blurb: "Tightness along the outer thigh or outer knee. Hip strengthening and targeted stretching are commonly used." },
  { id: "ankle-sprain", name: "Rolled or weak ankle", aka: "ankle sprain recovery", regions: ["ankle-foot", "balance"], commonRank: 9, blurb: "After a rolled ankle: restore movement, rebuild strength in every direction, then practice balance." },
  { id: "achilles", name: "Lower calf and heel cord soreness", aka: "achilles tendon pain", regions: ["ankle-foot"], commonRank: 18, blurb: "Soreness in the cord above the heel. Slow, steady calf and heel work is commonly used." },
  { id: "plantar-fasciitis", name: "Heel and arch soreness", aka: "plantar fasciitis heel pain", regions: ["ankle-foot"], commonRank: 10, blurb: "Heel or arch soreness, often worst with the first steps of the day. Calf and arch stretching and foot strengthening are commonly used." },
  { id: "posture", name: "Slouching or posture", aka: "posture improvement", regions: ["upper-back", "neck", "core"], commonRank: 999, blurb: "Standing and sitting taller with less effort. Open the chest, strengthen the back, and move often." },
  { id: "balance-falls", name: "Steadier balance", aka: "balance fall prevention", regions: ["balance", "ankle-foot", "hip"], commonRank: 22, blurb: "Balance can be practiced at any age. Regular, gentle balance work may help you feel steadier." },
  { id: "general", name: "General strength and mobility", aka: "general fitness", regions: ["balance", "core"], commonRank: 999, blurb: "Overall conditioning: getting stronger, moving more easily, and keeping your independence." },
  { id: "strength-training", name: "Strength and muscle building", aka: "strength training gym", regions: ["chest", "arms", "upper-back", "shoulder", "hip", "knee", "core"], commonRank: 999, blurb: "Classic gym training to build muscle and strength. Start lighter than you think and progress gradually." },
  { id: "conditioning", name: "Cardio and conditioning", aka: "cardio conditioning", regions: ["balance", "hip", "knee"], commonRank: 999, blurb: "Heart and lung fitness with the treadmill, bike, rower, stairs, or intervals. Build up gradually." }
];

// Broad categories so long lists (onboarding conditions, routine templates)
// can be browsed as "pick an area first, then the specifics".
window.CONDITION_GROUPS = [
  { id: "grp-neck-shoulder", name: "Neck & Shoulders", icon: "shoulder", color: "blue", blurb: "Neck, shoulders, and posture", conditions: ["neck-pain", "shoulder-pain", "headache", "posture", "rotator-cuff", "upper-cross", "frozen-shoulder", "tos"] },
  { id: "grp-arm", name: "Elbows, Wrists & Hands", icon: "wrist", color: "pink", blurb: "Elbows, wrists, and hands", conditions: ["wrist-pain", "arthritis-hand", "carpal-tunnel", "tennis-elbow", "golfers-elbow"] },
  { id: "grp-back", name: "Back", icon: "lower-back", color: "accent", blurb: "Low back and legs", conditions: ["low-back-pain", "sciatica", "disc"] },
  { id: "grp-leg", name: "Hips & Knees", icon: "knee", color: "teal", blurb: "Hips and knees", conditions: ["knee-pain", "hip-pain", "knee-oa", "itb"] },
  { id: "grp-foot", name: "Feet & Ankles", icon: "ankle-foot", color: "orange", blurb: "Ankles, heels, and feet", conditions: ["ankle-sprain", "plantar-fasciitis", "achilles"] },
  { id: "grp-balance", name: "Balance & Recovery", icon: "balance", color: "yellow", blurb: "Steadiness and getting moving again", conditions: ["balance-falls", "general", "post-surgery"] },
  { id: "grp-gym", name: "Gym & Fitness", icon: "dumbbell", color: "purple", blurb: "Building muscle, strength, and cardio fitness", conditions: ["strength-training", "conditioning"] }
];

window.TEMPLATE_GROUPS = [
  { id: "tg-neck", name: "Neck, Shoulders & Posture", icon: "shoulder", color: "blue", blurb: "Neck, shoulders, and posture", templates: ["tpl-neck", "tpl-tos", "tpl-upper-cross", "tpl-rotator-cuff", "tpl-frozen-shoulder"] },
  { id: "tg-arm", name: "Elbows, Wrists & Hands", icon: "wrist", color: "pink", blurb: "Elbows, wrists, and grip", templates: ["tpl-tennis-elbow", "tpl-carpal"] },
  { id: "tg-back", name: "Back & Core", icon: "lower-back", color: "accent", blurb: "Low back care and core strength", templates: ["tpl-low-back", "tpl-sciatica", "tpl-abs"] },
  { id: "tg-leg", name: "Hips & Knees", icon: "knee", color: "teal", blurb: "Hip strength and knee care", templates: ["tpl-hip", "tpl-knee"] },
  { id: "tg-legs", name: "Legs", icon: "step", color: "accent", blurb: "Stretches, warmups, strength, yoga, and recovery for your legs", templates: ["tpl-leg-warmup", "tpl-leg-stretch", "tpl-leg-strength", "tpl-leg-yoga", "tpl-leg-recovery", "tpl-legs"] },
  { id: "tg-foot", name: "Feet, Ankles & Balance", icon: "balance", color: "orange", blurb: "Ankles, heels, and steadiness", templates: ["tpl-ankle", "tpl-foot", "tpl-balance"] },
  { id: "tg-gentle", name: "Gentle Full-Body Start", icon: "leaf", color: "yellow", blurb: "A kind first routine after a long break", templates: ["tpl-gentle-full"] },
  { id: "tg-gym", name: "Gym Strength (Weights)", icon: "dumbbell", color: "purple", blurb: "Push / pull / legs and upper / lower plans", templates: ["tpl-push", "tpl-pull", "tpl-legs", "tpl-upper", "tpl-lower", "tpl-kettlebell", "tpl-abs"] },
  { id: "tg-cardio", name: "Cardio & Conditioning", icon: "run", color: "red", blurb: "Heart and lung fitness on the machines", templates: ["tpl-cardio"] },
  { id: "tg-yoga", name: "Yoga", icon: "sun", color: "pink", blurb: "Full-length beginner flows", templates: ["tpl-yoga-beginner-flow"] }
];

// Everyday muscle names -> precise anatomical names, shown in exercise details.
// Terms that already carry a parenthetical or are anatomical stay untouched.
window.MUSCLE_MAP = {
  "chest": "pectoralis major",
  "upper chest": "clavicular pectoralis major",
  "lower chest": "sternal pectoralis major",
  "shoulders": "deltoids",
  "shoulder": "deltoid, rotator cuff",
  "front shoulders": "anterior deltoids",
  "front of shoulder": "anterior deltoid",
  "rear shoulders": "posterior deltoids",
  "rear delts": "posterior deltoids",
  "posterior shoulder": "posterior deltoid, infraspinatus",
  "triceps": "triceps brachii",
  "biceps": "biceps brachii",
  "forearms": "wrist flexors & extensors",
  "grip": "forearm flexors, hand intrinsics",
  "lats": "latissimus dorsi",
  "lat": "latissimus dorsi",
  "back": "latissimus dorsi, trapezius, spinal erectors",
  "entire back": "latissimus dorsi, trapezius, rhomboids, erector spinae",
  "upper back": "trapezius, rhomboids",
  "mid back": "middle trapezius, rhomboids",
  "mid-back": "middle trapezius, rhomboids",
  "especially mid-back": "middle trapezius, rhomboids",
  "mid traps": "middle trapezius",
  "lower traps": "lower trapezius",
  "lower back": "erector spinae, quadratus lumborum",
  "back extensors": "erector spinae",
  "spinal extensors": "erector spinae",
  "serratus": "serratus anterior",
  "rotator cuff": "supraspinatus, infraspinatus, teres minor, subscapularis",
  "core": "rectus abdominis, obliques, transverse abdominis",
  "deep core": "transverse abdominis",
  "deep abdominals": "transverse abdominis",
  "lower abs": "lower rectus abdominis",
  "obliques": "internal & external obliques",
  "side core": "obliques, quadratus lumborum",
  "anti-rotation core": "obliques, transverse abdominis",
  "glutes": "gluteus maximus",
  "side hip": "gluteus medius",
  "side hips": "gluteus medius",
  "hip abductors": "gluteus medius & minimus, TFL",
  "hip flexors": "iliopsoas, rectus femoris",
  "deep hip rotators": "piriformis, obturators, gemelli",
  "hips": "gluteals, hip flexors",
  "groin": "hip adductors",
  "hamstrings": "biceps femoris, semitendinosus, semimembranosus",
  "quads": "quadriceps femoris",
  "front of thigh": "quadriceps femoris",
  "calves": "gastrocnemius, soleus",
  "calf": "gastrocnemius, soleus",
  "shin": "tibialis anterior",
  "legs": "quadriceps, hamstrings, gluteals, calves",
  "whole lower body": "quadriceps, gluteals, hamstrings, calves",
  "deep neck flexors": "longus colli, longus capitis",
  "neck rotators": "SCM, splenius muscles",
  "postural muscles": "deep spinal stabilizers, lower trapezius"
};

window.EQUIPMENT = [
  { id: "none", name: "No Equipment", icon: "bodyweight" },
  { id: "band", name: "Resistance Band", icon: "band" },
  { id: "dumbbell", name: "Dumbbell", icon: "dumbbell" },
  { id: "barbell", name: "Barbell", icon: "barbell" },
  { id: "kettlebell", name: "Kettlebell", icon: "kettlebell" },
  { id: "cable", name: "Cable Station", icon: "cable" },
  { id: "machine", name: "Gym Machine", icon: "machine" },
  { id: "smith-machine", name: "Smith Machine", icon: "smith-machine" },
  { id: "cardio-machine", name: "Cardio Machine", icon: "run" },
  { id: "jump-rope", name: "Jump Rope", icon: "jump-rope" },
  { id: "bench", name: "Bench", icon: "bench" },
  { id: "pullup-bar", name: "Pull-Up Bar", icon: "pullup-bar" },
  { id: "chair", name: "Chair", icon: "chair" },
  { id: "wall", name: "Wall", icon: "wall" },
  { id: "towel", name: "Towel / Strap", icon: "towel" },
  { id: "doorway", name: "Doorway", icon: "doorway" },
  { id: "table", name: "Table / Counter", icon: "table" },
  { id: "foam-roller", name: "Foam Roller", icon: "foam-roller" },
  { id: "step", name: "Step / Stairs", icon: "step" },
  { id: "ball", name: "Ball / Cushion", icon: "ball" },
  { id: "stick", name: "Stick / Hammer", icon: "stick" }
];

window.EX_TYPES = [
  { id: "yoga", name: "Yoga", color: "pink" },
  { id: "stretch", name: "Stretch", color: "teal" },
  { id: "strengthen", name: "Strengthen", color: "accent" },
  { id: "mobility", name: "Mobility", color: "blue" },
  { id: "nerve-glide", name: "Nerve Glide", color: "orange" },
  { id: "balance", name: "Balance", color: "yellow" },
  { id: "lift", name: "Gym Lift", color: "purple" },
  { id: "cardio", name: "Cardio", color: "red" },
  { id: "recovery", name: "Recovery", color: "teal" }
];

// Routine types for the library filter. Most are auto-detected from a routine's
// exercises; the rest (yoga, warm-up, etc.) can be picked manually in the editor.
window.ROUTINE_TYPES = [
  { id: "rehab", name: "Rehab", icon: "medical" },
  { id: "stretching", name: "Stretching", icon: "leaf" },
  { id: "strengthening", name: "Strengthening", icon: "arms" },
  { id: "mobility", name: "Mobility", icon: "stick" },
  { id: "gym", name: "Gym", icon: "barbell" },
  { id: "cardio", name: "Cardio", icon: "run" },
  { id: "balance", name: "Balance", icon: "balance" },
  { id: "yoga", name: "Yoga", icon: "sun" },
  { id: "posture", name: "Posture", icon: "upper-back" },
  { id: "warmup", name: "Warm-Up", icon: "flame" },
  { id: "recovery", name: "Recovery", icon: "heart" },
  { id: "mixed", name: "Mixed", icon: "sparkle" }
];

// Routine templates. Items may override the exercise's default dose.
window.TEMPLATES = [
  {
    id: "tpl-tos", name: "Neck, Chest and Shoulder Opener", conditions: ["tos"],
    desc: "Opens the chest, relaxes the neck, adds easy nerve glides, and builds shoulder-blade support. Go gently, and stop if your arm tingles.",
    items: ["breathing-diaphragm", "scalene-stretch", "first-rib-mobilization", "doorway-pec-stretch", "median-nerve-glide", "ulnar-nerve-glide", "chin-tuck", "band-row", "serratus-punch", "prone-ytw"]
  },
  {
    id: "tpl-upper-cross", name: "Posture Reset (Upper Body)", conditions: ["upper-cross", "posture"],
    desc: "Stretch the tight chest and neck, and strengthen the upper back.",
    items: ["doorway-pec-stretch", "upper-trap-stretch", "scm-stretch", "thoracic-extension-foam-roller", "chin-tuck", "wall-angels", "band-pull-apart", "face-pull", "prone-cobra"]
  },
  {
    id: "tpl-neck", name: "Gentle Neck Routine", conditions: ["neck-pain", "headache"],
    desc: "Gentle movement, neck strengthening, and tension release for a stiff neck.",
    items: ["neck-rotation", "upper-trap-stretch", "levator-stretch", "chin-tuck", "deep-neck-flexor-lift", "shoulder-shrug-roll", "suboccipital-release"]
  },
  {
    id: "tpl-rotator-cuff", name: "Shoulder Strength Builder", conditions: ["rotator-cuff", "shoulder-pain"],
    desc: "Gradual shoulder and shoulder-blade strengthening. Start light and build slowly.",
    items: ["pendulum", "cross-body-stretch", "band-external-rotation", "band-internal-rotation", "scaption-raise", "band-row", "prone-ytw", "wall-slides"]
  },
  {
    id: "tpl-frozen-shoulder", name: "Gentle Shoulder Mobility", conditions: ["frozen-shoulder"],
    desc: "Frequent, gentle range-of-motion work. Go at your own pace; change takes patience.",
    items: ["pendulum", "shoulder-flexion-wall-walk", "wall-slides", "behind-back-towel-stretch", "cross-body-stretch", "isometric-shoulder-abduction"]
  },
  {
    id: "tpl-tennis-elbow", name: "Elbow and Forearm Strength", conditions: ["tennis-elbow", "golfers-elbow"],
    desc: "Slow lowering-only strengthening plus stretching. Stop if pain increases.",
    items: ["wrist-extensor-stretch", "wrist-flexor-stretch", "eccentric-wrist-extension", "eccentric-wrist-flexion", "forearm-rotation", "grip-squeeze"]
  },
  {
    id: "tpl-carpal", name: "Wrist and Hand Care", conditions: ["carpal-tunnel", "wrist-pain", "arthritis-hand"],
    desc: "Tendon glides, nerve glides, and gentle stretches to keep the wrist and hand moving.",
    items: ["wrist-circles", "tendon-glides", "median-nerve-glide", "wrist-flexor-stretch", "wrist-extensor-stretch", "prayer-stretch", "finger-band-extension", "grip-squeeze"]
  },
  {
    id: "tpl-low-back", name: "Low Back Care (Big 3 +)", conditions: ["low-back-pain"],
    desc: "Gentle movement plus three well-known core endurance exercises, finished with hip support.",
    items: ["pelvic-tilt", "cat-cow", "knee-to-chest", "lower-trunk-rotation", "curl-up", "side-plank-knees", "bird-dog", "glute-bridge", "hip-flexor-stretch"]
  },
  {
    id: "tpl-sciatica", name: "Back and Leg Mobility", conditions: ["sciatica"],
    desc: "Gentle nerve glides, hip stretches, and back-friendly strengthening. Stop if leg pain gets worse.",
    items: ["sciatic-nerve-floss", "figure-4-stretch", "knee-to-chest", "prone-press-up", "glute-bridge", "bird-dog"]
  },
  {
    id: "tpl-hip", name: "Hip Strength & Mobility", conditions: ["hip-pain", "itb"],
    desc: "Wakes up the gluteals from every angle and restores hip flexibility.",
    items: ["glute-bridge", "clamshell", "side-lying-hip-abduction", "standing-hip-abduction", "monster-walk", "hip-flexor-stretch", "figure-4-stretch", "butterfly-stretch"]
  },
  {
    id: "tpl-knee", name: "Knee Builder", conditions: ["knee-pain", "knee-oa"],
    desc: "Quad and hip strengthening for stiff or achy knees.",
    items: ["quad-set", "straight-leg-raise", "short-arc-quad", "sit-to-stand", "mini-squat", "step-up", "standing-hamstring-curl", "clamshell", "quad-stretch"]
  },
  {
    id: "tpl-leg-warmup", name: "Leg Warmup", conditions: [], kind: "warmup",
    desc: "Gentle moves that wake up the hips, knees, and ankles. Do it before walks, leg day, or any lower-body session.",
    items: [
      { id: "leg-swings", sets: 1 },
      { id: "hip-cars", sets: 1 },
      { id: "ankle-pumps", sets: 1 },
      { id: "knee-to-wall", sets: 1 },
      { id: "glute-bridge", sets: 1 },
      { id: "deep-squat-hold", sets: 1 },
      { id: "monster-walk", sets: 1 }
    ]
  },
  {
    id: "tpl-leg-stretch", name: "Leg Stretch Session", conditions: [],
    desc: "Stretches every major leg muscle: quads, hamstrings, glutes, inner thighs, and calves.",
    items: ["quad-stretch", "hamstring-stretch-towel", "hip-flexor-stretch", "figure-4-stretch", "butterfly-stretch", "itb-tfl-stretch", "calf-stretch-wall", "soleus-stretch"]
  },
  {
    id: "tpl-leg-strength", name: "Leg Strength (No Equipment)", conditions: [],
    desc: "Builds the quads, glutes, hamstrings, and calves using just your body weight and a chair.",
    items: ["sit-to-stand", "mini-squat", "step-up", "standing-hamstring-curl", "glute-bridge", "side-lying-hip-abduction", "calf-raise", "wall-sit"]
  },
  {
    id: "tpl-leg-yoga", name: "Yoga for Legs & Hips", conditions: [],
    desc: "A gentle flow of standing and floor poses that stretch and strengthen the legs from hips to ankles.",
    items: ["yoga-hip-circles", "yoga-downward-dog", "yoga-low-lunge", "yoga-warrior-2", "yoga-triangle", "yoga-wide-fold", "yoga-garland", "yoga-happy-baby"]
  },
  {
    id: "tpl-leg-recovery", name: "Leg Recovery & Massage", conditions: [],
    desc: "Foam rolling and release work for tired, tight legs after workouts or long days on your feet.",
    items: ["foam-roll-quads", "foam-roll-itband", "ball-glute-release", "foot-ball-roll", "yoga-legs-up-wall"]
  },
  {
    id: "tpl-ankle", name: "Ankle Strength and Balance", conditions: ["ankle-sprain"],
    desc: "Movement, strength in every direction, then balance practice.",
    items: ["ankle-pumps", "band-ankle-4way", "calf-raise", "knee-to-wall", "calf-stretch-wall", "single-leg-stance", "single-leg-balance-foam"]
  },
  {
    id: "tpl-foot", name: "Foot & Heel Care", conditions: ["plantar-fasciitis", "achilles"],
    desc: "Stretching and strengthening for heel and arch pain, including the classic eccentric heel program.",
    items: ["plantar-fascia-stretch", "calf-stretch-wall", "towel-scrunch", "calf-raise", "eccentric-heel-drop", "toe-raises"]
  },
  {
    id: "tpl-balance", name: "Steady & Strong (Balance)", conditions: ["balance-falls"],
    desc: "A balance session inspired by Otago-style exercises. Practice beside a counter.",
    items: ["sit-to-stand", "weight-shifts", "marching-in-place", "side-stepping", "single-leg-stance", "tandem-stance", "heel-toe-walking", "calf-raise", "toe-raises"]
  },
  {
    id: "tpl-gentle-full", name: "Gentle Full-Body Start", conditions: ["general", "post-surgery"],
    desc: "A kind first routine for rebuilding after illness, surgery, or a long break. Every exercise has an easier variation.",
    items: ["breathing-diaphragm", "seated-thoracic-extension-chair", "shoulder-shrug-roll", "ankle-pumps", "quad-set", "glute-bridge", "sit-to-stand", "marching-in-place", "walking-program"]
  },
  {
    id: "tpl-push", name: "Push Day (Chest, Shoulders, Triceps)", conditions: ["strength-training"],
    desc: "The classic push session. Press movements for chest and shoulders, triceps to finish, and a cardio cool-down.",
    items: ["barbell-bench-press", "incline-dumbbell-press", "seated-dumbbell-shoulder-press", "cable-fly", "lateral-raise", "tricep-pushdown", "overhead-tricep-extension", "incline-treadmill-walk"]
  },
  {
    id: "tpl-pull", name: "Pull Day (Back & Biceps)", conditions: ["strength-training"],
    desc: "Rows and pulldowns for a strong back, finished with curls and a cardio cool-down.",
    items: ["lat-pulldown", "t-bar-row", "seated-cable-row", "chest-supported-db-row", "rear-delt-fly", "barbell-curl", "incline-dumbbell-curl", "incline-treadmill-walk"]
  },
  {
    id: "tpl-legs", name: "Leg Day (Quads, Glutes, Hamstrings)", conditions: ["strength-training"],
    desc: "Squat, hinge, lunge, and isolate. The full lower-body recipe plus calves and a bike cool-down.",
    items: ["barbell-back-squat", "romanian-deadlift", "leg-press", "walking-lunge", "leg-extension", "seated-leg-curl", "standing-calf-raise-machine", "stationary-bike"]
  },
  {
    id: "tpl-upper", name: "Upper Body Day", conditions: ["strength-training"],
    desc: "Everything above the waist in one session, for an upper / lower split.",
    items: ["barbell-bench-press", "lat-pulldown", "seated-dumbbell-shoulder-press", "seated-cable-row", "lateral-raise", "barbell-curl", "tricep-pushdown"]
  },
  {
    id: "tpl-lower", name: "Lower Body Day", conditions: ["strength-training"],
    desc: "Everything below the waist in one session, for an upper / lower split.",
    items: ["barbell-back-squat", "hip-thrust", "romanian-deadlift", "bulgarian-split-squat", "leg-extension", "lying-leg-curl", "standing-calf-raise-machine"]
  },
  {
    id: "tpl-kettlebell", name: "Kettlebell Full Body", conditions: ["strength-training", "general"],
    desc: "One kettlebell, whole body. Swings, squats, and carries build strength and conditioning together.",
    items: ["kettlebell-swing", "goblet-squat", "kettlebell-deadlift", "single-arm-dumbbell-row", "suitcase-carry", "plank"]
  },
  {
    id: "tpl-cardio", name: "Cardio & Conditioning Day", conditions: ["conditioning"],
    desc: "A complete cardio session. Warm up easy, pick your main machine, then finish with intervals if you have gas left.",
    items: ["incline-treadmill-walk", "stationary-bike", "rowing-machine", "stair-climber", "sprint-intervals"]
  },
  {
    id: "tpl-abs", name: "Core & Abs Day", conditions: ["strength-training"],
    desc: "Ab training with weighted flexion, hanging work, anti-rotation, and a carry to finish.",
    items: ["cable-crunch", "decline-sit-up", "hanging-leg-raise", "bicycle-crunch", "pallof-press", "suitcase-carry"]
  },
  {
    id: "tpl-yoga-beginner-flow", name: "Beginner Yoga Flow", conditions: [], kind: "yoga",
    desc: "A full beginner vinyasa flow: joint warm-up, sun-salutation-style rounds, a standing warrior sequence on both sides, a floor cool-down, and a seated close with breath work.",
    items: [
      "yoga-wrist-rolls", "yoga-neck-rolls", "yoga-shoulder-rolls", "yoga-hip-circles", "yoga-ankle-rolls",
      "yoga-cat-cow",
      "yoga-downward-dog", "yoga-plank", "yoga-chaturanga", "yoga-upward-dog", "yoga-downward-dog",
      "yoga-childs-pose", "yoga-sphinx",
      { id: "yoga-chaturanga", reps: 4 }, "yoga-upward-dog", "yoga-childs-pose",
      "yoga-seated-forward-fold", "yoga-boat",
      "knee-to-chest", "lower-trunk-rotation", "yoga-supine-twist",
      { id: "knee-to-chest", perSide: false, reps: 1, hold: 30 },
      "yoga-happy-baby", "yoga-seated-roll-up",
      "yoga-plank", { id: "yoga-chaturanga", reps: 4 }, "yoga-downward-dog",
      "yoga-standing-forward-fold", { id: "yoga-half-lift", reps: 2 }, "yoga-standing-backbend",
      { id: "yoga-tree", perSide: false },
      { id: "yoga-warrior-1", perSide: false }, { id: "yoga-warrior-2", perSide: false }, "yoga-star",
      { id: "yoga-warrior-2", perSide: false }, { id: "yoga-reverse-warrior", perSide: false },
      { id: "yoga-side-stretch-elbow-knee", perSide: false },
      { id: "yoga-warrior-3", perSide: false }, { id: "yoga-warrior-2", perSide: false }, { id: "yoga-warrior-1", perSide: false },
      { id: "yoga-tree", perSide: false },
      { id: "yoga-warrior-1", perSide: false }, { id: "yoga-warrior-2", perSide: false }, "yoga-star",
      { id: "yoga-warrior-2", perSide: false }, { id: "yoga-reverse-warrior", perSide: false },
      { id: "yoga-side-stretch-elbow-knee", perSide: false },
      { id: "yoga-warrior-3", perSide: false }, { id: "yoga-warrior-2", perSide: false }, { id: "yoga-warrior-1", perSide: false },
      "yoga-standing-forward-fold", "yoga-downward-dog",
      { id: "yoga-chaturanga", reps: 2 }, "yoga-downward-dog", "yoga-upward-dog", "yoga-childs-pose",
      "yoga-butterfly",
      { id: "yoga-seated-forward-fold", perSide: true },
      "yoga-seated-forward-fold", "yoga-pike-bent-knee-side-stretch",
      { id: "knee-to-chest", perSide: false, reps: 1, hold: 30 },
      "yoga-happy-baby", "yoga-supine-final-stretch", "yoga-corpse",
      "yoga-anjali-mudra", "yoga-neck-rolls", "yoga-shoulder-rolls", "yoga-closing-self-hug"
    ]
  }
];
