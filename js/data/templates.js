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

window.CONDITIONS = [
  { id: "tos", name: "Thoracic Outlet Syndrome", regions: ["neck", "shoulder", "upper-back"], blurb: "Nerves or blood vessels get pinched between the neck and shoulder, causing arm pain, tingling, or heaviness. Care focuses on posture, opening the chest, calming the scalene muscles, and gentle nerve glides." },
  { id: "upper-cross", name: "Upper Crossed Syndrome / Rounded Shoulders", regions: ["neck", "shoulder", "upper-back"], blurb: "Tight chest and neck muscles pair with weak deep-neck and mid-back muscles, creating a forward-head, rounded-shoulder posture. Care stretches the tight front and strengthens the sleepy back." },
  { id: "neck-pain", name: "Neck Pain & Stiffness", regions: ["neck", "upper-back"], blurb: "General neck ache and stiffness, often from posture, stress, or age-related change. Gentle motion, deep neck strengthening, and upper back mobility usually help." },
  { id: "headache", name: "Tension Headaches", regions: ["neck"], blurb: "Headaches that start at the base of the skull or feel like a tight band, often driven by neck muscle tension and posture." },
  { id: "shoulder-pain", name: "General Shoulder Pain", regions: ["shoulder"], blurb: "Aching or pinching shoulder with reaching or lifting. Building rotator cuff and shoulder blade strength usually calms it." },
  { id: "rotator-cuff", name: "Rotator Cuff Injury / Impingement", regions: ["shoulder"], blurb: "The small stabilizing muscles of the shoulder are irritated, torn, or weak. Progressive cuff and shoulder-blade strengthening is the gold standard." },
  { id: "frozen-shoulder", name: "Frozen Shoulder", regions: ["shoulder"], blurb: "The shoulder capsule tightens, badly limiting motion. Recovery is slow but steady, with frequent gentle stretching within tolerable limits." },
  { id: "tennis-elbow", name: "Tennis Elbow (Outer)", regions: ["elbow", "wrist"], blurb: "Irritated tendon on the outside of the elbow from gripping and wrist work. Slow 'lowering-only' strengthening rebuilds the tendon." },
  { id: "golfers-elbow", name: "Golfer's Elbow (Inner)", regions: ["elbow", "wrist"], blurb: "The inner-elbow cousin of tennis elbow. Same slow strengthening approach, opposite side." },
  { id: "carpal-tunnel", name: "Carpal Tunnel Syndrome", regions: ["wrist"], blurb: "The median nerve is compressed at the wrist, causing numb or tingly fingers. Tendon glides, nerve glides, and gentle stretches keep things moving." },
  { id: "wrist-pain", name: "Wrist Pain / Weakness", regions: ["wrist"], blurb: "General wrist soreness or weakness from sprains, overuse, or arthritis. Gentle motion first, then gradual strengthening." },
  { id: "arthritis-hand", name: "Hand Arthritis / Stiffness", regions: ["wrist"], blurb: "Stiff, achy fingers and thumbs. Daily gentle motion and light strengthening keep hands functional." },
  { id: "low-back-pain", name: "Low Back Pain", regions: ["lower-back", "core", "hip"], blurb: "The most common complaint in physical therapy. Gentle motion, core endurance (the 'Big 3'), hip strength, and walking are the recipe." },
  { id: "sciatica", name: "Sciatica / Leg Nerve Pain", regions: ["lower-back", "hip"], blurb: "Pain running from the back or buttock down the leg along the sciatic nerve. Nerve flossing, back care, and piriformis work often ease it." },
  { id: "disc", name: "Disc-Related Back Pain", regions: ["lower-back"], blurb: "Back pain influenced by a bulging or irritated disc. Extension-based movements (McKenzie) help many people. Follow your therapist's direction preference." },
  { id: "hip-pain", name: "Hip Pain / Bursitis / Arthritis", regions: ["hip"], blurb: "Aching in the groin, side hip, or buttock. Strengthening the gluteals, especially the side hip, is usually the core of care." },
  { id: "knee-pain", name: "Kneecap / General Knee Pain", regions: ["knee", "hip"], blurb: "Pain around or behind the kneecap with stairs, squatting, or sitting. Quad and hip strengthening are proven treatment." },
  { id: "knee-oa", name: "Knee Arthritis", regions: ["knee"], blurb: "Wear-related knee change. Motion is lotion. Strengthening and regular walking reduce pain better than rest." },
  { id: "post-surgery", name: "Post-Surgery Recovery (General)", regions: ["knee", "ankle-foot", "balance"], blurb: "Early-stage gentle motion and activation after joint surgery. Always follow your surgeon's specific protocol first." },
  { id: "itb", name: "IT Band / Outer Thigh Pain", regions: ["knee", "hip"], blurb: "Pain along the outer thigh or outer knee, common in walkers and runners. Side-hip strengthening plus targeted stretching." },
  { id: "ankle-sprain", name: "Ankle Sprain Recovery", regions: ["ankle-foot", "balance"], blurb: "After a rolled ankle, restore motion, rebuild strength in all four directions, then retrain balance so it does not happen again." },
  { id: "achilles", name: "Achilles Tendon Pain", regions: ["ankle-foot"], blurb: "Pain in the cord above the heel. Slow, heavy heel work (eccentrics) is the research-backed fix." },
  { id: "plantar-fasciitis", name: "Plantar Fasciitis (Heel Pain)", regions: ["ankle-foot"], blurb: "Sharp heel pain, worst with the first morning steps. Calf and arch stretching plus foot strengthening." },
  { id: "posture", name: "Posture Improvement", regions: ["upper-back", "neck", "core"], blurb: "Standing and sitting taller with less effort. Open the front, strengthen the back, and move often." },
  { id: "balance-falls", name: "Balance & Fall Prevention", regions: ["balance", "ankle-foot", "hip"], blurb: "Balance is a trainable skill at any age. Programs like these reduce falls by 30 to 40 percent." },
  { id: "general", name: "General Strength & Mobility", regions: ["balance", "core"], blurb: "Overall conditioning, getting stronger, moving easier, and keeping independence." },
  { id: "strength-training", name: "Strength & Muscle Building", regions: ["chest", "arms", "upper-back", "shoulder", "hip", "knee", "core"], blurb: "Classic gym training to build muscle and strength. Think push, pull, and leg days with barbells, dumbbells, kettlebells, cables, and machines. Start lighter than you think and progress gradually." }
];

window.EQUIPMENT = [
  { id: "none", name: "No Equipment", icon: "bodyweight" },
  { id: "band", name: "Resistance Band", icon: "band" },
  { id: "dumbbell", name: "Dumbbell", icon: "dumbbell" },
  { id: "barbell", name: "Barbell", icon: "barbell" },
  { id: "kettlebell", name: "Kettlebell", icon: "kettlebell" },
  { id: "cable", name: "Cable Station", icon: "cable" },
  { id: "machine", name: "Gym Machine", icon: "machine" },
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
  { id: "stretch", name: "Stretch", color: "teal" },
  { id: "strengthen", name: "Strengthen", color: "accent" },
  { id: "mobility", name: "Mobility", color: "blue" },
  { id: "nerve-glide", name: "Nerve Glide", color: "orange" },
  { id: "balance", name: "Balance", color: "yellow" },
  { id: "lift", name: "Gym Lift", color: "purple" }
];

// Routine templates. Items may override the exercise's default dose.
window.TEMPLATES = [
  {
    id: "tpl-tos", name: "Thoracic Outlet Relief", conditions: ["tos"],
    desc: "Opens the chest, calms the scalenes, glides the nerves, and builds shoulder-blade support. Do daily or every other day.",
    items: ["breathing-diaphragm", "scalene-stretch", "first-rib-mobilization", "doorway-pec-stretch", "median-nerve-glide", "ulnar-nerve-glide", "chin-tuck", "band-row", "serratus-punch", "prone-ytw"]
  },
  {
    id: "tpl-upper-cross", name: "Posture Reset (Upper Body)", conditions: ["upper-cross", "posture"],
    desc: "The classic recipe for rounded shoulders and forward head. Stretch the tight front, strengthen the sleepy back.",
    items: ["doorway-pec-stretch", "upper-trap-stretch", "scm-stretch", "thoracic-extension-foam-roller", "chin-tuck", "wall-angels", "band-pull-apart", "face-pull", "prone-cobra"]
  },
  {
    id: "tpl-neck", name: "Neck Pain Relief", conditions: ["neck-pain", "headache"],
    desc: "Gentle motion, deep neck strengthening, and tension release for everyday neck pain and headaches.",
    items: ["neck-rotation", "upper-trap-stretch", "levator-stretch", "chin-tuck", "deep-neck-flexor-lift", "shoulder-shrug-roll", "suboccipital-release"]
  },
  {
    id: "tpl-rotator-cuff", name: "Shoulder & Rotator Cuff Builder", conditions: ["rotator-cuff", "shoulder-pain"],
    desc: "Progressive cuff and shoulder-blade strengthening. Start light, progress steadily.",
    items: ["pendulum", "cross-body-stretch", "band-external-rotation", "band-internal-rotation", "scaption-raise", "band-row", "prone-ytw", "wall-slides"]
  },
  {
    id: "tpl-frozen-shoulder", name: "Frozen Shoulder Mobility", conditions: ["frozen-shoulder"],
    desc: "Frequent, gentle range work. Patience wins. Expect progress across months.",
    items: ["pendulum", "shoulder-flexion-wall-walk", "wall-slides", "behind-back-towel-stretch", "cross-body-stretch", "isometric-shoulder-abduction"]
  },
  {
    id: "tpl-tennis-elbow", name: "Tennis / Golfer's Elbow Care", conditions: ["tennis-elbow", "golfers-elbow"],
    desc: "Slow eccentric tendon work plus stretching. Mild ache during is okay if it settles within a day.",
    items: ["wrist-extensor-stretch", "wrist-flexor-stretch", "eccentric-wrist-extension", "eccentric-wrist-flexion", "forearm-rotation", "grip-squeeze"]
  },
  {
    id: "tpl-carpal", name: "Wrist & Carpal Tunnel Care", conditions: ["carpal-tunnel", "wrist-pain", "arthritis-hand"],
    desc: "Tendon glides, nerve glides, and gentle stretches to keep the wrist tunnel moving freely.",
    items: ["wrist-circles", "tendon-glides", "median-nerve-glide", "wrist-flexor-stretch", "wrist-extensor-stretch", "prayer-stretch", "finger-band-extension", "grip-squeeze"]
  },
  {
    id: "tpl-low-back", name: "Low Back Care (Big 3 +)", conditions: ["low-back-pain"],
    desc: "Gentle mobility plus the research-famous 'Big 3' core endurance exercises, finished with hip support.",
    items: ["pelvic-tilt", "cat-cow", "knee-to-chest", "lower-trunk-rotation", "curl-up", "side-plank-knees", "bird-dog", "glute-bridge", "hip-flexor-stretch"]
  },
  {
    id: "tpl-sciatica", name: "Sciatica Relief", conditions: ["sciatica"],
    desc: "Nerve flossing, piriformis release, and back-friendly strengthening for leg nerve pain.",
    items: ["sciatic-nerve-floss", "figure-4-stretch", "knee-to-chest", "prone-press-up", "glute-bridge", "bird-dog"]
  },
  {
    id: "tpl-hip", name: "Hip Strength & Mobility", conditions: ["hip-pain", "itb"],
    desc: "Wakes up the gluteals from every angle and restores hip flexibility.",
    items: ["glute-bridge", "clamshell", "side-lying-hip-abduction", "standing-hip-abduction", "monster-walk", "hip-flexor-stretch", "figure-4-stretch", "butterfly-stretch"]
  },
  {
    id: "tpl-knee", name: "Knee Builder", conditions: ["knee-pain", "knee-oa"],
    desc: "Quad and hip strengthening, the proven pair for kneecap pain and knee arthritis.",
    items: ["quad-set", "straight-leg-raise", "short-arc-quad", "sit-to-stand", "mini-squat", "step-up", "standing-hamstring-curl", "clamshell", "quad-stretch"]
  },
  {
    id: "tpl-ankle", name: "Ankle Sprain Recovery", conditions: ["ankle-sprain"],
    desc: "Motion, four-direction strength, then balance retraining so the ankle does not roll again.",
    items: ["ankle-pumps", "band-ankle-4way", "calf-raise", "knee-to-wall", "calf-stretch-wall", "single-leg-stance", "single-leg-balance-foam"]
  },
  {
    id: "tpl-foot", name: "Foot & Heel Care", conditions: ["plantar-fasciitis", "achilles"],
    desc: "Stretching and strengthening for heel and arch pain, including the classic eccentric heel program.",
    items: ["plantar-fascia-stretch", "calf-stretch-wall", "towel-scrunch", "calf-raise", "eccentric-heel-drop", "toe-raises"]
  },
  {
    id: "tpl-balance", name: "Steady & Strong (Balance)", conditions: ["balance-falls"],
    desc: "An evidence-based balance session in the spirit of the Otago program. Practice beside a counter.",
    items: ["sit-to-stand", "weight-shifts", "marching-in-place", "side-stepping", "single-leg-stance", "tandem-stance", "heel-toe-walking", "calf-raise", "toe-raises"]
  },
  {
    id: "tpl-gentle-full", name: "Gentle Full-Body Start", conditions: ["general", "post-surgery"],
    desc: "A kind first routine for rebuilding after illness, surgery, or a long break. Every exercise has an easier variation.",
    items: ["breathing-diaphragm", "seated-thoracic-extension-chair", "shoulder-shrug-roll", "ankle-pumps", "quad-set", "glute-bridge", "sit-to-stand", "marching-in-place", "walking-program"]
  },
  {
    id: "tpl-push", name: "Push Day (Chest, Shoulders, Triceps)", conditions: ["strength-training"],
    desc: "The classic push session. Press movements for chest and shoulders, then triceps to finish.",
    items: ["barbell-bench-press", "incline-dumbbell-press", "seated-dumbbell-shoulder-press", "cable-fly", "lateral-raise", "tricep-pushdown", "overhead-tricep-extension"]
  },
  {
    id: "tpl-pull", name: "Pull Day (Back & Biceps)", conditions: ["strength-training"],
    desc: "Rows and pulldowns for a strong back, finished with curls for the biceps.",
    items: ["lat-pulldown", "barbell-row", "seated-cable-row", "single-arm-dumbbell-row", "rear-delt-fly", "barbell-curl", "hammer-curl"]
  },
  {
    id: "tpl-legs", name: "Leg Day (Quads, Glutes, Hamstrings)", conditions: ["strength-training"],
    desc: "Squat, hinge, lunge, and isolate. The full lower-body recipe plus calves.",
    items: ["barbell-back-squat", "romanian-deadlift", "leg-press", "walking-lunge", "leg-extension", "lying-leg-curl", "standing-calf-raise-machine"]
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
    items: ["kettlebell-swing", "goblet-squat", "kettlebell-deadlift", "single-arm-dumbbell-row", "plank", "russian-twist"]
  }
];
