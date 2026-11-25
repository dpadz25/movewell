// MoveWell exercise database, Part 10: neck, jaw and face
// Instructions are written for MoveWell. Loads after exercises-round-a.js.

window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(

// ============ NECK AND UPPER BACK ============
{
  id: "neck-look-up", name: "Neck Look Up", region: "neck", type: "mobility",
  equipment: ["none"], position: "Seated or standing", level: 1,
  muscles: "Neck muscles",
  helps: ["neck-pain", "posture"],
  dose: { sets: 1, reps: 10, hold: 2 },
  howTo: [
    "Sit or stand tall with your shoulders relaxed.",
    "Slowly tip your head back to look up toward the ceiling.",
    "Stop where it is comfortable and pause.",
    "Return slowly to looking straight ahead."
  ],
  tips: ["Keep your mouth relaxed and keep breathing."],
  caution: "Stop if you feel dizzy, see spots, or get tingling in your arms. After a neck injury or neck surgery, ask your doctor or physical therapist first.",
  variations: []
},
{
  id: "clasped-hands-back-stretch", name: "Clasped-Hands Upper Back Stretch", region: "upper-back", type: "stretch",
  equipment: ["none"], position: "Seated or standing", level: 1,
  muscles: "Muscles between the shoulder blades",
  helps: ["upper-back", "posture", "neck-pain"],
  dose: { sets: 1, reps: 3, hold: 20 },
  howTo: [
    "Clasp your hands together in front of your chest.",
    "Reach your hands forward and let your upper back round.",
    "Let your head drop a little until you feel a stretch between your shoulder blades.",
    "Hold, then sit or stand tall again."
  ],
  tips: ["Breathe into your upper back."],
  caution: "Ease off if you feel pain in your shoulders or neck.",
  variations: []
},
{
  id: "wall-posture-hold", name: "Wall Posture Hold", region: "upper-back", type: "mobility",
  equipment: ["wall"], position: "Standing against a wall", level: 1,
  muscles: "Upper back and neck posture muscles",
  helps: ["posture", "upper-back", "upper-cross"],
  dose: { sets: 1, reps: 3, hold: 30 },
  howTo: [
    "Stand with your back to a wall and your heels a few inches out.",
    "Rest your buttocks and upper back against the wall.",
    "Draw your chin back and let your head come toward the wall as far as is comfortable.",
    "Hold while breathing normally."
  ],
  tips: ["Your head does not need to touch the wall."],
  caution: "Do not force your head back. Step away if you feel dizzy or unsteady.",
  variations: []
},

// ============ JAW AND FACE ============
{
  id: "jaw-opening", name: "Slow Jaw Opening", region: "jaw", type: "mobility",
  equipment: ["none"], position: "Seated", level: 1,
  muscles: "Jaw muscles",
  helps: [],
  dose: { sets: 1, reps: 10 },
  howTo: [
    "Sit tall with your jaw and tongue relaxed.",
    "Slowly open your mouth as far as is comfortable.",
    "Try to keep your chin moving straight down. A mirror helps.",
    "Close slowly."
  ],
  tips: ["Slow and even is the goal, not a wide opening."],
  caution: "Stay in a comfortable range. Stop if your jaw catches or pain increases. If your jaw locks open or shut, get care right away. After jaw surgery or injury, ask your dentist or doctor first.",
  variations: []
},
{
  id: "jaw-side-to-side", name: "Jaw Side to Side", region: "jaw", type: "mobility",
  equipment: ["none"], position: "Seated", level: 1,
  muscles: "Jaw muscles",
  helps: [],
  dose: { sets: 1, reps: 10 },
  howTo: [
    "Relax your lips and keep your teeth slightly apart.",
    "Slowly slide your lower jaw to the right.",
    "Return to the middle.",
    "Slide to the left and return."
  ],
  tips: ["Keep your head still. Only the jaw moves."],
  caution: "Move only as far as is comfortable. Stop if your jaw catches, locks or hurts more. After jaw surgery or injury, ask your dentist or doctor first.",
  variations: []
},
{
  id: "jaw-press-holds", name: "Gentle Jaw Press Holds", region: "jaw", type: "strengthen",
  equipment: ["none"], position: "Seated", level: 1,
  muscles: "Jaw muscles",
  helps: [],
  dose: { sets: 1, reps: 5, hold: 5 },
  howTo: [
    "Sit tall with your teeth slightly apart.",
    "Place two fingers under your chin.",
    "Try to open your mouth while your fingers stop it from moving.",
    "Hold with light effort, then relax."
  ],
  tips: ["Use only a little force. Your jaw should not move."],
  caution: "Press lightly. Stop if you feel pain, clicking with pain or a headache coming on. After jaw surgery or injury, ask your dentist or doctor first.",
  variations: []
},
{
  id: "cheek-massage", name: "Cheek Muscle Massage", region: "jaw", type: "recovery",
  equipment: ["none"], position: "Seated", level: 1,
  muscles: "Large chewing muscle in the cheek",
  helps: [],
  dose: { sets: 1, timeSec: 60 },
  howTo: [
    "Wash your hands and relax your jaw.",
    "Place your fingertips on the thick muscle between your cheekbone and the corner of your jaw.",
    "Make slow, small circles with comfortable pressure.",
    "Work up and down the muscle on both sides."
  ],
  tips: ["Clench once to find the muscle, then relax before you rub."],
  caution: "Press only as hard as feels comfortable. Skip areas that are swollen, red, hot or broken.",
  variations: []
},
{
  id: "smile-pucker", name: "Smile and Pucker", region: "jaw", type: "mobility",
  equipment: ["none"], position: "Seated", level: 1,
  muscles: "Muscles around the mouth and cheeks",
  helps: [],
  dose: { sets: 1, reps: 10, hold: 3 },
  howTo: [
    "Sit where you can see yourself in a mirror.",
    "Smile as wide as you comfortably can and hold.",
    "Then push your lips forward as if blowing a kiss and hold.",
    "Relax your face."
  ],
  tips: ["Try to move both sides evenly."],
  caution: "Sudden face drooping, weakness or trouble speaking is an emergency. Call 911 or your local emergency number.",
  variations: []
}

);

// ----- new versions -----
(function () {
  const addTo = (id, list) => {
    const ex = window.EXERCISES.find(e => e.id === id);
    if (!ex) return;
    ex.variations = ex.variations || [];
    list.forEach(v => { if (!ex.variations.some(x => x.name === v.name)) ex.variations.push(v); });
  };
  addTo("neck-look-up", [
    { name: "Towel-Supported Look Up", equipment: ["towel"],
      note: "Wrap a towel behind your neck and hold both ends. Look up slowly while the towel supports the curve of your neck." }
  ]);
  addTo("upper-trap-stretch", [
    { name: "Side Neck Stretch, Hand Behind Back",
      note: "Place one hand behind your back. Tilt your head away from that side, resting your other hand lightly on your head. Hold, then switch.",
      caution: "Let the hand rest. Do not pull. Stop for tingling or numbness in your arm." }
  ]);
  addTo("levator-stretch", [
    { name: "Back-of-Neck Stretch, Hand Behind Back",
      note: "Place one hand behind your back. Turn your head away from that side and look down toward the opposite armpit, other hand resting lightly on your head. Hold, then switch.",
      caution: "Let the hand rest. Do not pull. Stop for tingling or numbness in your arm." }
  ]);
  addTo("scalene-stretch", [
    { name: "Front Neck Stretch, Hands on Chest",
      note: "Rest one hand over the other just below your collarbone on one side. Tilt your head away and look slightly up. Hold, then switch.",
      caution: "Move slowly. Stop if you feel dizzy or get tingling in your arm." }
  ]);
  addTo("chin-tuck", [
    { name: "Chin Tuck with Hand Push",
      note: "Tuck your chin, then use two fingers on your chin to guide it a little farther back. Hold briefly and relax.",
      caution: "Push lightly. Stop if pain or tingling travels into your arm." }
  ]);
  addTo("neck-rotation", [
    { name: "Towel-Assisted Neck Turn", equipment: ["towel"],
      note: "Drape a towel behind your neck. Hold the ends crossed in front and use a light pull to help your head turn. Switch hands for the other side.",
      caution: "Pull lightly. Stop if you feel dizzy or get tingling in your arm." },
    { name: "Lying Neck Turn",
      note: "Lie on your back with your head supported. Roll your head slowly to one side, then the other." }
  ]);
  addTo("neck-isometrics", [
    { name: "Fingertip Neck Holds",
      note: "Use only your fingertips against the side of your head, then your forehead. Press lightly into them without moving, hold, and relax." }
  ]);
  addTo("jaw-opening", [
    { name: "Tongue-Up Jaw Opening",
      note: "Rest the tip of your tongue on the roof of your mouth. Open only as far as your tongue can stay there, then close." }
  ]);
  addTo("jaw-side-to-side", [
    { name: "Hand-Assisted Jaw Side Stretch",
      note: "Slide your jaw to one side, then use your fingers on your chin to guide it a little farther. Hold a few seconds, then do the other side." },
    { name: "Jaw Forward and Back",
      note: "With your teeth slightly apart, slide your lower jaw forward, then draw it back." }
  ]);
  addTo("jaw-press-holds", [
    { name: "Jaw Closing Press",
      note: "Open a little and rest two fingers on your chin below your lip. Try to close while your fingers stop the movement. Hold lightly." },
    { name: "Jaw Side Press",
      note: "Rest two fingers on one side of your lower jaw. Press your jaw into them without letting it move. Hold lightly, then switch." },
    { name: "Jaw Forward Press",
      note: "Rest two fingers on the front of your chin. Try to slide your jaw forward while your fingers stop it. Hold lightly." }
  ]);
  addTo("cheek-massage", [
    { name: "Temple Muscle Massage",
      note: "Place your fingertips on your temples, above and in front of your ears. Make slow, small circles with comfortable pressure." }
  ]);
  addTo("smile-pucker", [
    { name: "Frown", note: "Draw the corners of your mouth down, hold, then relax." },
    { name: "Upper Lip Lift", note: "Raise your upper lip to show your top teeth, hold, then relax." },
    { name: "Lower Lip Pull-Down", note: "Pull your lower lip down to show your bottom teeth, hold, then relax." },
    { name: "Cheek Puff", note: "Close your lips and fill your cheeks with air. Hold while breathing through your nose, then let it out." }
  ]);
})();
