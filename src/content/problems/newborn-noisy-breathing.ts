import type { ProblemSeed } from '../types';

export const newbornNoisyBreathing: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'newborn-breathing-and-sounds',
  slug: 'newborn-noisy-breathing',
  canonicalPath: '/babies/newborns/breathing-and-sounds/newborn-noisy-breathing/',
  name: 'Noisy Breathing in a Newborn',
  eyebrow: 'Babies · Newborns · Breathing & Sounds',

  h1: 'Can I Ignore Noisy Breathing in My Newborn?',
  seoTitle: 'Newborn Noisy Breathing: Normal Sounds vs. Breathing Trouble',
  metaDescription:
    'Some newborn snorts and gurgles are normal. Learn which sounds can wait, when to call the pediatrician, and which breathing signs need emergency care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I monitor my baby at home?',
  canIUseItLabel: 'Only if breathing stays easy and feeding and color are normal',

  shortAnswer:
    'Sometimes, but do not ignore a new sound until you check the whole baby. Brief nasal snorts or sleep gurgles can be normal when breathing is easy, color is normal, and feeding is unchanged. Persistent squeaking, grunting, chest pulling, color changes, pauses, or feeding trouble needs medical attention.',

  whyItMattersHeading: 'The Sound Matters Less Than the Work of Breathing',
  whyItMatters: [
    'Newborns have narrow nasal passages and may sound congested from a small amount of dried mucus. Saliva, refluxed milk and active sleep can also produce gurgles, squeaks and irregular breathing without causing distress.',
    'A repetitive high-pitched sound while breathing in can be stridor, which means airflow through the upper airway is partly obstructed. Laryngomalacia is a common cause and is often mild, but noisy breathing can also accompany infection or another airway problem. Color, breathing effort, feeding and alertness determine how urgently your baby needs care.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Emergency Help or Urgent Medical Care If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    "CDC, FDA, NICHD, AAP and children's-hospital guidance was checked for normal newborn sounds, stridor, respiratory distress, congestion care, fever and safe sleep.",
  disclaimer:
    'General newborn triage guidance only. A newborn cannot be assessed by sound alone. If breathing looks hard, color changes, feeding drops, your baby is difficult to wake, or you are unsure, seek medical care rather than relying on this page.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'occasional-snorts-and-gurgles',
      label: 'Occasional snorts or gurgles with otherwise easy breathing',
      shortDescription:
        'The noise comes and goes, especially during sleep, but the chest moves comfortably and feeding, color and alertness are normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This often fits normal newborn noise',
      resultBody:
        "Air moving past dried nasal mucus, saliva or a small amount of refluxed milk can sound surprisingly loud in a newborn's narrow airway.",
      recommendedAction:
        'Watch during calm breathing and feeding. If the noise remains occasional and your baby stays comfortable, no treatment is usually needed.',
    },
    {
      slug: 'brief-irregular-sleep-breathing',
      label: 'Brief pauses and faster bursts during sleep',
      shortDescription:
        'Pauses are shorter than ten seconds, breathing restarts on its own, and there is no color change or visible struggle.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This can be normal periodic breathing',
      resultBody:
        'Newborn breathing can briefly pause and then speed up. It is generally considered normal when the pause is short and the baby remains comfortable with normal color.',
      recommendedAction:
        'Observe without disturbing safe sleep. Get medical help if pauses become longer, color changes, or breathing looks difficult.',
    },
    {
      slug: 'nasal-noise-improves-after-saline',
      label: 'Stuffy nasal noise that improves after saline and suction',
      shortDescription:
        'The sound appears to come from the nose and becomes quieter after dried mucus is gently cleared.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'A small nasal blockage is likely',
      resultBody:
        "Even a little mucus can make loud sounds because a newborn's nasal passages are small. Nasal blockage matters more if it interferes with feeding.",
      recommendedAction:
        'Use plain saline drops and gentle suction as needed, especially before feeding. Call if the blockage does not improve or breathing becomes hard.',
    },
    {
      slug: 'persistent-high-pitched-squeak',
      label: 'A persistent high-pitched squeak while breathing in',
      shortDescription:
        'The sound repeats at rest or becomes louder while crying, feeding or lying on the back.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Have possible stridor evaluated',
      resultBody:
        'A repetitive inspiratory squeak can be stridor. Laryngomalacia is a common cause in infants and is often mild, but the sound should be identified and feeding and growth should be monitored.',
      recommendedAction:
        'Contact your pediatrician and record a short video if it is safe. Seek faster care if retractions, color changes, pauses or feeding difficulty appear.',
    },
    {
      slug: 'noisy-breathing-during-feeding',
      label: 'Coughing, choking or gasping during feeds',
      shortDescription:
        'Noisy breathing comes with trouble coordinating sucking and breathing, frequent pauses, tiring or distress while feeding.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Feeding and airway function need assessment',
      resultBody:
        'Feeding problems can occur with more significant laryngomalacia or another swallowing or airway problem. A newborn who cannot feed comfortably may also take in too little fluid.',
      recommendedAction:
        'Pause the feeding if your baby is struggling and contact the pediatrician now. Seek emergency care if your baby cannot breathe normally or develops blue or gray color.',
    },
    {
      slug: 'cold-symptoms-and-reduced-feeding',
      label: 'Congestion or cough with reduced feeding or activity',
      shortDescription:
        'The noisy breathing accompanies illness symptoms, and the baby is eating less, sleeping unusually deeply or becoming less responsive.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A respiratory illness may be worsening',
      resultBody:
        'Very young infants with respiratory infections may show breathing difficulty, reduced intake, irritability or decreased activity. Fever may be absent.',
      recommendedAction:
        'Contact your pediatrician promptly for an assessment. Go to emergency care if breathing becomes difficult, your baby is hard to wake, or fluid intake drops substantially.',
    },
    {
      slug: 'grunting-flaring-or-retractions',
      label: 'Grunting, flaring nostrils or skin pulling between the ribs',
      shortDescription:
        'The baby appears to work for each breath, or breathing remains faster than normal while calm.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'This is respiratory distress',
      resultBody:
        'Every-breath grunting, nasal flaring and retractions are signs that a newborn is working harder to move air. Persistent breathing above sixty breaths in one minute while calm is also a warning sign.',
      recommendedAction:
        'Seek emergency medical care now. Call emergency services if the struggle is severe, your baby cannot feed or cry normally, or transport would be unsafe.',
    },
    {
      slug: 'blue-color-apnea-or-unresponsiveness',
      label: 'Blue or gray color, a long breathing pause or poor responsiveness',
      shortDescription:
        'The lips, tongue or face change color, breathing stops for longer than ten seconds, or the baby becomes limp or difficult to wake.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Get emergency help immediately',
      resultBody:
        'These signs can indicate inadequate oxygen or another life-threatening problem. They are not normal periodic breathing or harmless newborn noise.',
      recommendedAction:
        "Call emergency services now. Follow the dispatcher's instructions and do not wait for the sound or color to improve on its own.",
    },
    {
      slug: 'noisy-breathing-with-fever',
      label: 'Noisy breathing with a newborn fever',
      shortDescription:
        'A rectal temperature is 100.4°F or higher, even if the baby otherwise appears comfortable.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A newborn fever needs immediate medical evaluation',
      resultBody:
        'Fever in a baby this young can be the first sign of a serious infection. Breathing noise or congestion does not make it safe to watch at home.',
      recommendedAction:
        'Call your pediatrician immediately and follow instructions for urgent evaluation. Use emergency care if you cannot promptly reach appropriate medical help.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Noise may come from the nose or throat',
      description:
        'Narrow nasal passages, dried mucus, saliva and refluxed milk can make normal airflow audible even when the lungs and airway are working comfortably.',
      severity: 'info',
      chainLabel: 'Small airway or secretions → louder airflow',
    },
    {
      stageLabel: 'IF YOUR BABY REMAINS COMFORTABLE',
      title: 'A normal sound may pass without harm',
      description:
        'Occasional snorts, gurgles and brief periodic breathing can be watched when color, feeding, alertness and breathing effort remain normal.',
      severity: 'info',
      chainLabel: 'Comfortable baby → observation',
    },
    {
      stageLabel: 'IF HIGH-PITCHED NOISE PERSISTS',
      title: 'Upper-airway narrowing may need diagnosis',
      description:
        'Persistent stridor can come from laryngomalacia or another upper-airway condition. Even mild cases should be identified so feeding, breathing and growth can be followed.',
      severity: 'caution',
      chainLabel: 'Persistent stridor → airway evaluation',
    },
    {
      stageLabel: 'IF FEEDING OR ILLNESS CHANGES',
      title: 'Intake and breathing can become harder to maintain',
      description:
        'Coughing, choking, reduced feeding, unusual sleepiness or worsening congestion can signal that the problem is affecting more than the sound alone.',
      severity: 'warning',
      chainLabel: 'Feeding or illness changes → prompt care',
    },
    {
      stageLabel: 'IF RESPIRATORY DISTRESS APPEARS',
      title: 'Low oxygen can become life-threatening',
      description:
        'Retractions, grunting, blue or gray color, prolonged pauses and poor responsiveness require emergency care rather than home observation.',
      severity: 'danger',
      chainLabel: 'Distress or color change → emergency care',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation:
        'Occasional nasal snorts or sleep gurgles with easy breathing, normal color and normal feeding',
      ignoreAnswer: 'Yes, with observation',
      severity: 'info',
      whatToDo:
        'Watch the pattern during calm breathing. No treatment is usually needed if the noise stays occasional and nothing else changes.',
    },
    {
      situation: 'Brief sleep pauses shorter than ten seconds without color change or distress',
      ignoreAnswer: 'Yes, with observation',
      severity: 'info',
      whatToDo:
        "Continue safe sleep and observe. Seek care if pauses become longer, breathing does not restart normally, or your baby's color changes.",
    },
    {
      situation: 'Nasal stuffiness that improves after plain saline and gentle suction',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Clear only visible or obvious nasal congestion. Call the pediatrician if the blockage persists, affects feeding or is accompanied by hard breathing.',
    },
    {
      situation: 'A new, repetitive, high-pitched squeak while breathing in',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Contact your pediatrician for evaluation and take a short video when safe. Move faster if feeding, growth or breathing effort is affected.',
    },
    {
      situation: 'Noisy breathing with coughing, choking, gasping or tiring during feeds',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop the feed if your baby is struggling and contact the pediatrician now. Use emergency care for color changes or continued breathing difficulty.',
    },
    {
      situation: 'Congestion or cough with reduced feeding, fewer wet diapers or decreased activity',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange prompt medical assessment because very young infants can become ill without developing a fever.',
    },
    {
      situation: 'A rectal temperature of 100.4°F or higher',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Call the pediatrician immediately and follow instructions for urgent evaluation, even if your newborn otherwise appears well.',
    },
    {
      situation: 'Retractions, nasal flaring, every-breath grunting, blue or gray color, or a prolonged pause',
      ignoreAnswer: 'No — emergency care',
      severity: 'danger',
      whatToDo:
        'Seek emergency medical care immediately. Call emergency services for severe distress, abnormal color, poor responsiveness or stopped breathing.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check your baby, not just the sound',
      body:
        'Look at the lips and tongue, chest and neck movement, nostrils, alertness and ability to feed. Visible struggle, abnormal color, poor responsiveness or a prolonged breathing pause overrides every home-care step.',
    },
    {
      title: 'Clear an obviously blocked nose safely',
      body:
        'Use plain saline nose drops and gentle suction with a bulb syringe or infant aspirator. Do not put cotton swabs inside the nostrils or use medicated decongestant drops unless specifically directed.',
      destinationProblemSlug: 'newborn-stuffy-nose',
    },
    {
      title: 'Count calm breathing and record the pattern',
      body:
        'When your baby is calm, count breaths for one full minute because newborn breathing can be irregular. Persistent breathing above sixty breaths in one minute is a warning sign. A short video can help the pediatrician identify the sound.',
    },
    {
      title: 'Call when the noise persists or affects feeding',
      body:
        'Contact the pediatrician for ongoing stridor, repeated choking, tiring during feeds, reduced intake or poor weight gain. A pediatric ear, nose and throat evaluation may be needed for persistent upper-airway noise.',
      destinationProblemSlug: 'newborn-feeding-less-than-usual',
    },
    {
      title: 'Keep sleep flat, clear and on the back',
      body:
        'Place your baby on their back on a firm, flat and level sleep surface. Do not use wedges, positioners, pillows or an inclined mattress to quiet the breathing, and do not give over-the-counter cough or cold medicine.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Blue or gray lips, tongue or face',
      description:
        'Persistent abnormal color can mean the baby is not getting enough oxygen. Call emergency services rather than watching for another episode.',
      severity: 'danger',
    },
    {
      title: 'A prolonged pause, limpness or poor responsiveness',
      description:
        'A pause longer than ten seconds, trouble waking the baby or loss of normal muscle tone requires immediate emergency help.',
      severity: 'danger',
    },
    {
      title: 'Skin pulls in at the ribs, breastbone or neck',
      description:
        'Retractions show that the baby is using extra effort to breathe, especially when they continue at rest.',
      severity: 'danger',
    },
    {
      title: 'Nostrils flare or the baby grunts with each breath',
      description:
        'These are signs of respiratory distress rather than ordinary digestive grunting or harmless sleep noise.',
      severity: 'danger',
    },
    {
      title: 'Breathing stays unusually fast while calm',
      description:
        'Count for a full minute. A persistent rate above sixty breaths per minute in a calm newborn should be assessed promptly, especially with any other warning sign.',
      severity: 'warning',
    },
    {
      title: 'Feeding becomes difficult',
      description:
        'Repeated coughing, choking, gasping, tiring, reduced intake or fewer wet diapers can mean the breathing problem is interfering with feeding or hydration.',
      severity: 'warning',
    },
    {
      title: 'Rectal temperature reaches 100.4°F or higher',
      description:
        'A newborn with this temperature needs immediate medical evaluation even if the breathing noise seems mild.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why does my newborn sound congested without having a cold?',
      answer:
        "A small amount of dried mucus can sound loud in a newborn's narrow nasal passages. The nose may be noisy even without infection, especially if feeding and breathing remain comfortable.",
    },
    {
      question: 'Are gurgling sounds during sleep normal?',
      answer:
        'Often. Saliva or a small amount of refluxed milk can collect in the throat during sleep and create gurgling sounds. Persistent choking, coughing or breathing effort is different and needs medical attention.',
    },
    {
      question: 'What is stridor?',
      answer:
        'Stridor is a repetitive, usually high-pitched breathing sound caused by turbulent airflow through a partly narrowed upper airway. In infants, laryngomalacia is a common cause.',
    },
    {
      question: 'Is every newborn grunt a breathing emergency?',
      answer:
        'No. Brief grunting while passing stool can be normal. Grunting with each breath, especially with flaring nostrils, retractions or fast breathing, is a respiratory warning sign.',
    },
    {
      question: "How should I count my newborn's breathing?",
      answer:
        'Count each rise of the chest or abdomen for one full minute while your baby is calm. Newborn breathing can be irregular, but a persistent rate above sixty breaths per minute should prompt a call for medical advice.',
    },
    {
      question: 'Is laryngomalacia dangerous?',
      answer:
        'Most babies with laryngomalacia breathe noisily but feed and grow normally, and many improve as the airway matures. Feeding problems, poor growth, retractions, blue spells or breathing pauses can indicate a more serious case.',
    },
    {
      question: 'Can I use saline and a nasal aspirator?',
      answer:
        'Yes. Plain saline and gentle suction can help when the sound comes from nasal mucus. Stop and seek advice if clearing the nose does not help or your baby appears to struggle.',
    },
    {
      question: 'Should I put my baby on their stomach if the breathing sounds quieter?',
      answer:
        'No. Continue placing your baby on their back on a firm, flat and level sleep surface. Do not raise the mattress or use a sleep positioner to change the sound.',
    },
    {
      question: 'Should I take my newborn to the emergency room or call the pediatrician?',
      answer:
        'Call emergency services for blue or gray color, severe breathing effort, stopped breathing, limpness or poor responsiveness. Call the pediatrician promptly for persistent stridor, feeding changes, illness symptoms or any newborn fever.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Newborn Reflexes and Behavior',
      url: 'https://www.healthychildren.org/English/tips-tools/symptom-checker/Pages/symptomviewer.aspx?symptom=Newborn%2BReflexes%2Band%2BBehavior',
      sourceType: 'other',
      notes:
        'Supports normal nasal and throat noises, sleep gurgling, brief periodic breathing, saline and bulb suction, and escalation when breathing becomes hard or pauses are prolonged.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Stridor & Laryngomalacia: Is My Baby’s Noisy Breathing Serious?',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/laryngomalacia-and-stridor-is-my-babys-noisy-breathing-serious.aspx',
      sourceType: 'other',
      notes:
        'Defines stridor, describes laryngomalacia and supports evaluation when noisy breathing accompanies feeding difficulty, retractions or breathing pauses.',
    },
    {
      publisher: "Children's Hospital of Philadelphia",
      title: 'Laryngomalacia',
      url: 'https://www.chop.edu/conditions-diseases/laryngomalacia',
      sourceType: 'academic',
      notes:
        'Supports laryngomalacia as a common cause of infant noisy breathing, its often mild course, and emergency escalation for blue color, prolonged apnea or persistent chest and neck retractions.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'About Respiratory Illnesses',
      url: 'https://www.cdc.gov/respiratory-viruses/about/index.html',
      sourceType: 'government',
      notes:
        'Supports immediate medical care for fast or difficult breathing, bluish lips or face, retractions, reduced alertness and fever of 100.4°F or higher in a child younger than twelve weeks.',
    },
    {
      publisher: 'Eunice Kennedy Shriver National Institute of Child Health and Human Development',
      title: 'About Back Sleeping',
      url: 'https://safetosleep.nichd.nih.gov/reduce-risk/back-sleeping',
      sourceType: 'government',
      notes:
        'Supports back sleeping on a firm, flat and level surface, including for babies with reflux, and warns against raising the mattress.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Should You Give Kids Medicine for Coughs and Colds?',
      url: 'https://www.fda.gov/consumers/consumer-updates/should-you-give-kids-medicine-coughs-and-colds',
      sourceType: 'government',
      notes:
        'Supports saline drops and nasal suction for infants and advises against over-the-counter cough and cold medicines in children younger than two because of potentially serious side effects.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Plain saline nose drops',
      description:
        'Unmedicated saline can loosen dried nasal mucus so it can be sneezed out or removed gently.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bulb syringe or infant nasal aspirator',
      description:
        'A properly used infant suction device can clear loosened mucus when nasal blockage is interfering with comfortable breathing or feeding.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Phone video of the breathing sound',
      description:
        'A short recording made without delaying care can show the sound, breathing phase, chest movement and surrounding behavior more clearly than a description from memory.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pediatrician or pediatric nurse advice line',
      description:
        'A clinician can triage persistent noise, feeding changes, fever or illness symptoms and arrange an airway evaluation when needed.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'newborn-stuffy-nose',
      anchorText: "Can I ignore my newborn's stuffy nose?",
      relationshipType: 'cause',
    },
    {
      slug: 'newborn-feeding-less-than-usual',
      anchorText: 'Can I ignore my newborn feeding less than usual?',
      relationshipType: 'escalation',
    },
    {
      slug: 'newborn-sneezing',
      anchorText: 'Can I ignore frequent sneezing in my newborn?',
      relationshipType: 'sibling',
    },
    {
      slug: 'newborn-spitting-up',
      anchorText: 'Can I ignore my newborn spitting up?',
      relationshipType: 'related',
    },
  ],
};
