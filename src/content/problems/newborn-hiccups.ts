import type { ProblemSeed } from '../types';

export const newbornHiccups: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'newborn-breathing-and-sounds',
  slug: 'newborn-hiccups',
  canonicalPath: '/babies/newborns/breathing-and-sounds/newborn-hiccups/',
  name: 'Newborn Hiccups',
  eyebrow: 'Babies · Newborns · Breathing & Sounds',

  h1: 'Can I Ignore My Newborn’s Hiccups?',
  seoTitle: 'Newborn Hiccups: When They’re Normal and When to Call',
  metaDescription:
    'Newborn hiccups are usually harmless. Learn when to pause a feed, when reflux or poor feeding needs a call, and which signs need urgent care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can my baby keep feeding and sleeping normally?',
  canIUseItLabel: 'Yes—if breathing and feeding are normal',

  shortAnswer:
    'Yes. Ordinary newborn hiccups are common, usually harmless, and normally stop on their own. The answer changes if your baby also has breathing trouble, fever, poor feeding, unusual sleepiness, or abnormal vomiting.',

  whyItMattersHeading: 'Why Newborn Hiccups Usually Aren’t a Problem',
  whyItMatters: [
    'A hiccup is an involuntary spasm of the diaphragm followed by a quick closing of the vocal cords. It can make a newborn’s chest or whole body jerk rhythmically, but it usually does not hurt or interfere with breathing.',
    'The hiccups themselves rarely cause complications. What matters is how your baby looks, breathes, feeds, and behaves around them. Painful feeds, poor intake, fever, breathing difficulty, or forceful, green, or bloody vomit should not be blamed on ordinary hiccups.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Medical Help If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked newborn hiccups, feeding measures, reflux warning signs, fever escalation, and bottle-feeding safety against NIH, CDC, Healthdirect Australia, and AAP materials.',
  disclaimer:
    'General newborn triage guidance only, not a diagnosis. Newborns can become ill quickly, so contact your pediatrician whenever your baby seems unwell or the pattern is unclear. Call 911 for breathing trouble, choking, blue or gray color, collapse, or unresponsiveness.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'brief-hiccups-baby-normal',
      label: 'Brief hiccups and the baby otherwise seems normal',
      shortDescription:
        'The hiccups stop on their own, and your baby is breathing comfortably, feeding normally, and acting as usual.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually normal',
      resultBody:
        'Hiccups are common in newborns and infants. A typical episode does not need treatment when your baby remains comfortable and returns to their usual behavior.',
      recommendedAction:
        'Let the episode pass. Watch your baby’s breathing, color, feeding, and alertness rather than trying to stop every hiccup.',
    },
    {
      slug: 'hiccups-during-feeding',
      label: 'Hiccups start during a feeding',
      shortDescription:
        'Your baby hiccups while nursing or taking a bottle but remains comfortable and interested in feeding.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Pause, burp, and let your baby settle',
      resultBody:
        'Feeding and swallowed air can occur around hiccup episodes. A short pause and a position change may help without requiring treatment.',
      recommendedAction:
        'Pause the feed, support your baby upright while awake, and try a gentle burp. Resume when your baby is calm and ready; do not force the bottle or breast.',
    },
    {
      slug: 'hiccups-with-small-spit-up',
      label: 'Hiccups come with a small amount of spit-up',
      shortDescription:
        'A little milk comes up, but your baby remains comfortable, feeds well, and is growing normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Small, comfortable spit-up is often normal',
      resultBody:
        'Hiccups and regurgitation can happen together. Small spit-ups are usually not concerning when they cause no distress and feeding and growth remain on track.',
      recommendedAction:
        'Clean your baby up, burp gently, and keep them upright while awake after the feed. Continue using a flat, back-sleep position for sleep.',
    },
    {
      slug: 'hiccups-keep-interrupting-feeds-or-sleep',
      label: 'Hiccups repeatedly disrupt feeding or sleep',
      shortDescription:
        'Episodes keep stopping feeds, prevent your baby from settling, or seem unusually prolonged.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Ask your pediatrician about the pattern',
      resultBody:
        'Frequent hiccups alone can still be harmless, but a pattern that consistently interferes with eating or sleep deserves discussion.',
      recommendedAction:
        'Note when episodes happen and how feeding is affected. Contact your pediatrician for guidance rather than changing feed amounts or using remedies on your own.',
    },
    {
      slug: 'hiccups-with-painful-feeding',
      label: 'Hiccups come with arching, crying, or feeding refusal',
      shortDescription:
        'Your baby appears uncomfortable during feeds, pulls away, arches, gags, or refuses to continue eating.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'This may be more than ordinary hiccups',
      resultBody:
        'Painful feeding, arching, gagging, or refusal can occur with reflux or another feeding or swallowing problem. Hiccups alone do not explain significant distress.',
      recommendedAction:
        'Contact your pediatrician and describe the full feeding pattern. A feeding observation may help identify whether positioning, swallowing, reflux, or another issue is involved.',
    },
    {
      slug: 'hiccups-with-poor-intake-or-low-energy',
      label: 'Your baby is feeding less or is unusually sleepy',
      shortDescription:
        'Hiccups occur alongside poor intake, fewer wet diapers, weakness, or difficulty waking for feeds.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Have your newborn assessed promptly',
      resultBody:
        'Poor feeding, reduced urine output, and low energy can signal dehydration or illness. These findings matter much more than the hiccups.',
      recommendedAction:
        'Call your pediatrician now for instructions. Seek emergency care if your baby is difficult to wake, becomes limp or unresponsive, or cannot feed because of breathing difficulty.',
    },
    {
      slug: 'hiccups-with-abnormal-vomiting',
      label: 'There is forceful, green, bloody, or large-volume vomiting',
      shortDescription:
        'Vomiting is forceful or contains green fluid or blood, or the abdomen looks swollen or feels hard.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'This needs urgent medical evaluation',
      resultBody:
        'These are not normal features of uncomplicated hiccups or ordinary spit-up. They can occur with serious digestive problems that require prompt assessment.',
      recommendedAction:
        'Contact your pediatrician or emergency department immediately. Go to emergency care now if the vomit is green, your baby appears very ill, or the abdomen is swollen or hard.',
    },
    {
      slug: 'hiccups-with-breathing-trouble',
      label: 'Your baby is struggling to breathe or may be choking',
      shortDescription:
        'Breathing is labored, the chest pulls in, your baby cannot cry or feed normally, or choking is suspected.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a breathing emergency',
      resultBody:
        'Ordinary hiccups do not cause ongoing respiratory distress. Trouble breathing or possible choking requires immediate action.',
      recommendedAction:
        'Call 911. Follow infant choking or CPR instructions if needed and if you know how; do not put fingers into the mouth unless you can clearly see and safely remove an object.',
    },
    {
      slug: 'hiccups-with-color-change',
      label: 'The lips, tongue, or skin turn blue or gray',
      shortDescription:
        'Your baby develops an abnormal color, becomes limp, collapses, or stops responding normally.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Get emergency help now',
      resultBody:
        'Blue or gray color, limpness, or unresponsiveness can indicate inadequate oxygen or another life-threatening problem. This is not a normal hiccup pattern.',
      recommendedAction:
        'Call 911 immediately and begin infant CPR if your baby is not breathing normally and you are able to do so.',
    },
    {
      slug: 'hiccups-with-newborn-fever',
      label: 'Your newborn has a temperature of 100.4°F or higher',
      shortDescription:
        'A rectal temperature confirms a fever, even if hiccups are the only other noticeable sign.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'A newborn fever needs immediate medical attention',
      resultBody:
        'Fever in a newborn requires prompt evaluation even when the baby otherwise appears well. The hiccups do not make the fever less important.',
      recommendedAction:
        'Call your pediatrician immediately and follow their directions for urgent evaluation. Do not give fever medicine unless a clinician specifically tells you to.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The diaphragm contracts involuntarily',
      description:
        'A brief diaphragm spasm followed by vocal-cord closure creates the rhythmic movement and familiar hiccup sound.',
      severity: 'info',
      chainLabel: 'Diaphragm spasm → hiccup',
    },
    {
      stageLabel: 'AFTER A TYPICAL EPISODE',
      title: 'The hiccups stop without causing harm',
      description:
        'Most newborn hiccups resolve on their own, leaving the baby breathing, feeding, and behaving normally.',
      severity: 'info',
      chainLabel: 'Hiccup → normal again',
    },
    {
      stageLabel: 'IF IT HAPPENS DURING A FEED',
      title: 'Feeding may need a short pause',
      description: 'A position change, a gentle burp, and time to settle may make feeding more comfortable.',
      severity: 'info',
      chainLabel: 'Feeding interruption → settle → resume',
    },
    {
      stageLabel: 'IF DISTRESS OR POOR FEEDING APPEARS',
      title: 'A feeding or reflux problem may need attention',
      description:
        'Repeated arching, crying, gagging, refusal, or poor growth does not fit harmless hiccups alone and warrants assessment.',
      severity: 'caution',
      chainLabel: 'Added symptoms → pediatric evaluation',
    },
    {
      stageLabel: 'IF EMERGENCY SIGNS ARE PRESENT',
      title: 'The problem is no longer the hiccups',
      description:
        'Breathing difficulty, abnormal color, newborn fever, or abnormal vomiting can indicate a separate urgent condition. Hiccups do not normally progress into these emergencies.',
      severity: 'danger',
      chainLabel: 'Red flags → emergency care',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Brief hiccups with normal breathing, color, feeding, and behavior',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Let the hiccups stop on their own and continue normal care.',
    },
    {
      situation: 'Hiccups begin during nursing or bottle-feeding',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Pause, support your baby upright while awake, try a gentle burp, and resume when your baby is calm and ready.',
    },
    {
      situation: 'Your baby falls asleep while hiccupping',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Place your baby on their back on a firm, flat sleep surface. Do not incline the mattress or use a sleep positioner.',
    },
    {
      situation: 'Hiccups occur often but cause no distress or feeding problem',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Observe the pattern. Mention it at a routine visit if you remain concerned.',
    },
    {
      situation: 'Hiccups repeatedly prevent feeding or sleep',
      ignoreAnswer: 'Only until you can call the pediatrician',
      severity: 'caution',
      whatToDo:
        'Track the episodes and contact your pediatrician for advice, especially if intake is decreasing.',
    },
    {
      situation: 'Hiccups come with arching, crying, gagging, or feeding refusal',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange a pediatric assessment of the feeding and reflux symptoms.',
    },
    {
      situation: 'Your newborn has a temperature of 100.4°F or higher',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Call your pediatrician immediately and follow their instructions for urgent medical evaluation.',
    },
    {
      situation: 'Vomit is forceful, green, bloody, or accompanied by a swollen abdomen',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Seek urgent medical evaluation rather than treating this as ordinary hiccups or spit-up.',
    },
    {
      situation: 'Breathing is difficult, choking is suspected, or your baby turns blue or gray',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Call 911 immediately.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the whole baby, not just the sound',
      body:
        'Look for comfortable breathing, normal lip and skin color, usual alertness, and a normal willingness to feed. A rhythmic hiccup in an otherwise well newborn usually needs no intervention.',
    },
    {
      title: 'Pause a feed if the hiccups are disruptive',
      body:
        'Hold your baby upright while awake with the head and neck supported, try a gentle burp, and let them settle. Resume feeding when they show they are ready.',
    },
    {
      title: 'Do not use adult hiccup tricks',
      body:
        'Do not startle your baby, restrict breathing, force anything into the mouth, or add water, cereal, sugar, or other remedies to a bottle. Feed only breast milk or properly prepared infant formula unless your clinician directs otherwise.',
    },
    {
      title: 'Keep sleep flat and on the back',
      body:
        'Hiccups and spit-up are not reasons to incline the mattress or place a newborn on the stomach or side. Use a firm, flat sleep surface with the baby on their back.',
    },
    {
      title: 'Track feeding and related symptoms',
      body:
        'If the pattern keeps returning, note whether it happens during feeds, whether your baby arches or cries, how well they eat, and whether wet diapers have changed. A short video may help your pediatrician identify the movement and sound.',
      destinationProblemSlug: 'newborn-feeding-less-than-usual',
    },
    {
      title: 'Separate ordinary hiccups from concerning spit-up',
      body:
        'Small, comfortable spit-up can occur with hiccups. Forceful, green, bloody, or distressing vomiting is different and needs medical attention.',
      destinationProblemSlug: 'newborn-spitting-up',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Trouble breathing or suspected choking',
      description:
        'Labored breathing, chest retractions, inability to cry or feed normally, or suspected airway blockage requires emergency help.',
      severity: 'danger',
    },
    {
      title: 'Blue, gray, or unusually pale color',
      description:
        'Abnormal color around the lips, tongue, or skin can indicate a serious breathing or circulation problem.',
      severity: 'danger',
    },
    {
      title: 'A temperature of 100.4°F or higher',
      description:
        'A confirmed fever in a newborn requires immediate contact with a pediatrician, even if the baby otherwise seems well.',
      severity: 'danger',
    },
    {
      title: 'Forceful, green, or bloody vomiting',
      description: 'This is not ordinary spit-up and should not be attributed to hiccups.',
      severity: 'danger',
    },
    {
      title: 'Poor feeding or fewer wet diapers',
      description:
        'Reduced intake or urine output can indicate dehydration or illness and deserves prompt pediatric guidance.',
      severity: 'warning',
    },
    {
      title: 'Extreme sleepiness, limpness, or difficulty waking',
      description:
        'A newborn who cannot wake and feed normally or who becomes weak, limp, or unresponsive needs urgent assessment.',
      severity: 'danger',
    },
    {
      title: 'Painful feeds or poor growth',
      description:
        'Repeated arching, crying, gagging, feeding refusal, or inadequate weight gain can occur with reflux or another feeding problem.',
      severity: 'warning',
    },
    {
      title: 'Hiccups repeatedly interfere with eating or sleep',
      description:
        'Persistent disruption is not usually an emergency by itself, but it is a reason to discuss the pattern with your pediatrician.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why do newborns hiccup so often?',
      answer:
        'Hiccups are an automatic diaphragm reflex and are common in newborns. Feeding, a full stomach, or swallowed air may coincide with an episode, but there is often no clear trigger.',
    },
    {
      question: 'Are hiccups painful for a newborn?',
      answer:
        'Usually not. Most babies remain comfortable and are more bothered by an interrupted feed than by the hiccups themselves.',
    },
    {
      question: 'Can hiccups damage my baby’s lungs or diaphragm?',
      answer:
        'Ordinary newborn hiccups are not known to damage the lungs or diaphragm and are unlikely to cause complications.',
    },
    {
      question: 'Can I continue feeding while my baby has hiccups?',
      answer:
        'If your baby is comfortable and feeding smoothly, you can continue. If the hiccups disrupt sucking or your baby becomes fussy, pause, burp, and resume when they settle.',
    },
    {
      question: 'Can my newborn sleep with hiccups?',
      answer:
        'Yes, if breathing and color are normal. Keep using the recommended back-sleep position on a firm, flat surface; do not incline the mattress.',
    },
    {
      question: 'Do frequent hiccups mean my baby has reflux?',
      answer:
        'Not by themselves. Hiccups can happen with ordinary spit-up, but arching, painful feeds, refusal to eat, poor weight gain, coughing, wheezing, or forceful vomiting deserve pediatric evaluation.',
    },
    {
      question: 'Is spit-up during hiccups dangerous?',
      answer:
        'A small amount in a comfortable baby is often normal. Forceful, green, bloody, or large-volume vomiting, or vomiting with a swollen abdomen or breathing trouble, needs urgent assessment.',
    },
    {
      question: 'Should I give my newborn water to stop hiccups?',
      answer:
        'No. Do not give a newborn plain water or add unapproved remedies to a bottle. Breast milk or properly prepared infant formula should remain the normal feed unless your clinician says otherwise.',
    },
    {
      question: 'How can I tell hiccups from choking?',
      answer:
        'With ordinary hiccups, the baby continues breathing and keeps a normal color. Suspected choking, inability to cry or breathe normally, labored breathing, or blue or gray color is an emergency.',
    },
    {
      question: 'When should I call the pediatrician about hiccups alone?',
      answer:
        'Call if an episode seems unusually prolonged, the pattern keeps disrupting feeds or sleep, or you are unsure that the movements are hiccups. Seek faster help whenever other symptoms appear.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'MedlinePlus, U.S. National Library of Medicine',
      title: 'Hiccups',
      url: 'https://medlineplus.gov/ency/article/003068.htm',
      sourceType: 'government',
      notes:
        'Defines the diaphragm and vocal-cord mechanism, states that hiccups are common and normal in newborns and infants, and notes that they usually disappear on their own.',
    },
    {
      publisher: 'Pregnancy, Birth and Baby, Healthdirect Australia',
      title: 'Hiccups',
      url: 'https://www.pregnancybirthbaby.org.au/babies/daily-care/hiccups',
      sourceType: 'government',
      notes:
        'Supports that baby hiccups are generally harmless, rarely cause complications, usually need no treatment, and may be managed by upright holding and burping. It also identifies breathing trouble, blue color, and suspected choking as emergencies.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Baby Burping, Hiccups & Spit-Up',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/baby-burping-hiccups-and-spit-up.aspx',
      sourceType: 'other',
      notes:
        'Supports pausing a feed, repositioning, burping, resuming once the baby settles, feeding before extreme hunger, and keeping babies flat on their backs for sleep even when spit-up occurs.',
    },
    {
      publisher: 'National Institute of Diabetes and Digestive and Kidney Diseases',
      title: 'Symptoms & Causes of GER & GERD in Infants',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants/symptoms-causes',
      sourceType: 'government',
      notes:
        'Supports reflux-related warning signs including arching, feeding refusal, poor weight gain, swallowing or breathing problems, dehydration, forceful vomiting, and green or bloody vomit.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Fever and Your Baby',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx',
      sourceType: 'other',
      notes:
        'Supports rectal temperature as the most reliable method for young infants and immediate pediatric contact for a baby age 3 months or younger with a temperature of 100.4°F or higher.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'About Feeding From a Bottle',
      url: 'https://www.cdc.gov/infant-toddler-nutrition/bottle-feeding/index.html',
      sourceType: 'government',
      notes:
        'Supports feeding only breast milk or infant formula from a bottle, allowing feeding breaks, responding to fullness cues, avoiding forced bottle completion, and not adding cereal or food because of choking risk.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Pediatrician or after-hours newborn advice line',
      description:
        'Use it when hiccups repeatedly affect feeding or sleep, your baby appears uncomfortable, or you are unsure whether the movement is harmless.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Lactation consultant or infant feeding specialist',
      description:
        'A feeding observation can help with positioning, gulping, swallowed air, painful feeds, or repeated pulling away from the breast or bottle.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Digital rectal thermometer',
      description:
        'A reliable temperature reading is important because a newborn fever requires immediate medical guidance. Follow the device and pediatrician’s instructions.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Infant CPR and choking course',
      description:
        'Hands-on training helps caregivers recognize airway obstruction and respond while emergency help is on the way.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'newborn-spitting-up',
      anchorText: 'Can I ignore my newborn spitting up?',
      relationshipType: 'sibling',
    },
    {
      slug: 'newborn-feeding-less-than-usual',
      anchorText: 'Can I ignore my newborn feeding less than usual?',
      relationshipType: 'escalation',
    },
    {
      slug: 'newborn-noisy-breathing',
      anchorText: 'Can I ignore my newborn’s noisy breathing?',
      relationshipType: 'related',
    },
  ],
};
