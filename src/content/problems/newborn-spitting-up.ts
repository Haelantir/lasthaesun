import type { ProblemSeed } from '../types';

export const newbornSpittingUp: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'newborn-diapers-and-digestion',
  slug: 'newborn-spitting-up',
  canonicalPath: '/babies/newborns/diapers-and-digestion/newborn-spitting-up/',
  name: 'Newborn spitting up after every feeding',
  eyebrow: 'Babies · Newborns · Diapers & Digestion',

  h1: 'Can I Ignore My Newborn Spitting Up After Every Feeding?',
  seoTitle: 'Newborn Spit-Up After Every Feeding: Normal or Urgent?',
  metaDescription:
    'Small, effortless spit-up after every feeding can be normal in a thriving newborn. Learn which force, color, feeding, fever, and breathing signs need care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep feeding my newborn?',
  canIUseItLabel: 'Yes—if the baby is otherwise well',

  shortAnswer:
    'Usually, yes. Small, effortless spit-up after every feeding can be normal when your newborn feeds comfortably, has their usual wet diapers, and is growing as expected. Forceful, green, bloody, painful, or illness-related vomiting is different and needs medical attention.',

  whyItMattersHeading: 'Spit-Up and Vomiting Are Not the Same',
  whyItMatters: [
    'Spit-up is the easy flow of milk from the mouth, often with a burp and without distress or abdominal effort. A newborn can do this after nearly every feeding because the valve above the stomach is still developing, and frequency alone does not make uncomplicated reflux dangerous.',
    'True vomiting is forceful or uncomfortable. Spitting up also stops being routine when it comes with feeding refusal, poor growth, fewer wet diapers, a swollen belly, breathing problems, unusual sleepiness, blood, green fluid, or fever. Those signs can point to dehydration, infection, bleeding, or an intestinal problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Medical Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked against NIH, NICHD, AAP, and NASPGHAN guidance on infant reflux, feeding changes, safe sleep, fever, dehydration, and vomiting red flags.',
  disclaimer:
    'General triage guidance only. It cannot diagnose the cause of vomiting or replace an examination. Because newborns can show subtle signs of illness, contact your pediatrician whenever the pattern or your baby’s behavior concerns you.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'happy-spitter-after-every-feed',
      label: 'Small amounts come up easily after every feeding',
      shortDescription:
        'Milk dribbles out without force, and the baby remains comfortable, alert, interested in feeding, and has their usual wet diapers.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'THIS CAN BE NORMAL REFLUX',
      resultBody:
        'Effortless spit-up in a comfortable newborn who feeds and grows normally is usually uncomplicated reflux rather than an illness.',
      recommendedAction:
        'Continue the usual feeding plan and watch the baby’s comfort, intake, diapers, and growth. Mention the pattern at routine newborn visits if you remain unsure.',
    },
    {
      slug: 'spit-up-worsening-or-painful',
      label: 'The spit-up is increasing or the baby seems uncomfortable',
      shortDescription:
        'Episodes are becoming more intense, or the baby cries, arches, gags, or appears distressed during or after feeds.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'CALL THE PEDIATRICIAN',
      resultBody:
        'Worsening reflux, persistent pain, arching, or feeding distress is not the typical pattern of a comfortable “happy spitter.”',
      recommendedAction:
        'Contact the pediatrician for guidance. Describe when it happens, whether there is force, and how feeding, diapers, and behavior have changed.',
    },
    {
      slug: 'forceful-projectile-vomiting',
      label: 'Milk shoots out forcefully after feedings',
      shortDescription:
        'The episode involves abdominal effort or sends stomach contents outward rather than letting milk dribble from the mouth.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET URGENT PEDIATRIC CARE',
      resultBody:
        'Persistent forceful vomiting in a young infant can occur with pyloric stenosis or another condition that needs diagnosis and treatment.',
      recommendedAction:
        'Call the pediatrician immediately for urgent evaluation. Seek emergency care if vomiting repeats, the baby appears ill, or dehydration signs develop.',
    },
    {
      slug: 'green-vomit',
      label: 'The vomit is green',
      shortDescription:
        'The material is distinctly green rather than ordinary white, clear, or milk-colored spit-up.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'GO TO AN EMERGENCY DEPARTMENT',
      resultBody:
        'Green, bile-stained vomiting can be a sign of an intestinal obstruction and should not be treated as ordinary reflux.',
      recommendedAction:
        'Seek emergency care now. Do not wait for another episode or for the color to disappear.',
    },
    {
      slug: 'blood-in-spit-up',
      label: 'There is blood or coffee-ground material',
      shortDescription:
        'Spit-up or vomit contains red blood, dark flecks, or material resembling coffee grounds.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET MEDICAL ADVICE NOW',
      resultBody:
        'Blood may come from the esophagus, stomach, swallowed blood, or another source that cannot be identified safely at home.',
      recommendedAction:
        'Contact the pediatrician or an urgent pediatric service now. Take a photo if practical, but do not delay care to collect a sample.',
    },
    {
      slug: 'feeding-refusal-or-arching',
      label: 'The baby refuses feeds, cries, or arches during feeding',
      shortDescription:
        'Feeding has become difficult, painful-looking, unusually brief, or repeatedly interrupted by distress.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'THIS NEEDS A FEEDING REVIEW',
      resultBody:
        'Feeding refusal or persistent distress can mean reflux is troublesome or that another feeding, swallowing, or medical problem is present.',
      recommendedAction:
        'Call the pediatrician. Continue offering breast milk or correctly prepared formula unless the medical team gives different instructions.',
    },
    {
      slug: 'fewer-wet-diapers-or-poor-growth',
      label: 'Wet diapers decrease or weight gain is a concern',
      shortDescription:
        'The baby takes less milk, has noticeably fewer wet diapers, lacks energy, or is not gaining weight as expected.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DEHYDRATION OR LOW INTAKE IS POSSIBLE',
      resultBody:
        'These changes can mean that too little milk is staying down or that illness is interfering with feeding.',
      recommendedAction:
        'Contact the pediatrician promptly. Seek urgent care if the baby is difficult to wake, cannot feed, or has stopped producing wet diapers.',
    },
    {
      slug: 'swollen-hard-belly',
      label: 'The belly is swollen, firm, or painful',
      shortDescription:
        'The abdomen looks distended, feels unusually hard, or appears painful along with spit-up or vomiting.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'SEEK EMERGENCY EVALUATION',
      resultBody:
        'Abdominal distension with vomiting can occur with obstruction or another problem that requires prompt examination.',
      recommendedAction:
        'Go to an emergency department now, especially if the vomit is green or the baby is unusually sleepy or distressed.',
    },
    {
      slug: 'choking-blue-or-limp',
      label: 'The baby turns blue, goes limp, or struggles to breathe',
      shortDescription:
        'A spit-up episode is followed by abnormal color, poor responsiveness, pauses in breathing, or obvious breathing difficulty.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'CALL 911',
      resultBody:
        'Blue color, limpness, poor responsiveness, or breathing difficulty is an emergency regardless of whether spit-up appeared to trigger it.',
      recommendedAction:
        'Call 911 now. Follow dispatcher instructions and do not delay emergency help while trying reflux remedies.',
    },
    {
      slug: 'fever-in-newborn',
      label: 'The newborn has a temperature of 100.4°F or higher',
      shortDescription:
        'A measured fever occurs along with spitting up, vomiting, reduced feeding, or any other symptom.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CALL FOR IMMEDIATE MEDICAL CARE',
      resultBody:
        'A temperature of 100.4°F or higher in a baby three months old or younger requires prompt medical evaluation even when no other illness signs are obvious.',
      recommendedAction:
        'Call the pediatrician immediately and follow instructions for evaluation. Do not give fever medicine unless specifically directed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'It may only be normal infant reflux',
      description:
        'Small amounts of milk can return easily after feeding without causing pain, illness, or poor growth.',
      severity: 'info',
      chainLabel: 'Effortless spit-up',
    },
    {
      stageLabel: 'IF THE STOMACH IS OVERFILLED',
      title: 'Spit-up may become more frequent',
      description:
        'Large or rushed feeds, swallowed air, bouncing, or pressure on the abdomen can make milk come back up more readily.',
      severity: 'caution',
      chainLabel: 'Feeding and handling factors',
    },
    {
      stageLabel: 'IF INTAKE STARTS TO SUFFER',
      title: 'Hydration and growth can be affected',
      description:
        'Feeding refusal, repeated vomiting, or reduced milk intake can lead to fewer wet diapers, low energy, and inadequate weight gain.',
      severity: 'warning',
      chainLabel: 'Low intake',
    },
    {
      stageLabel: 'IF VOMITING IS FORCEFUL, GREEN, OR BLOODY',
      title: 'A different medical problem may be present',
      description:
        'Forceful vomiting can occur with pyloric stenosis, green vomit can indicate obstruction, and blood can signal gastrointestinal bleeding.',
      severity: 'danger',
      chainLabel: 'Alarm features',
    },
    {
      stageLabel: 'IF BREATHING OR RESPONSIVENESS CHANGES',
      title: 'Waiting can become unsafe',
      description:
        'Breathing difficulty, blue color, limpness, or poor responsiveness requires emergency help rather than reflux monitoring.',
      severity: 'danger',
      chainLabel: 'Medical emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Small, effortless milk-colored spit-up; baby is comfortable and feeding well',
      ignoreAnswer: 'Yes, with routine monitoring',
      severity: 'info',
      whatToDo:
        'Continue normal care and watch feeding, diapers, comfort, and growth rather than judging the problem by the laundry alone.',
    },
    {
      situation: 'Spit-up happens after bouncing or pressure on the belly',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Keep handling calm after feeds, avoid immediate tummy pressure, and hold the baby upright while awake and supervised.',
    },
    {
      situation: 'Spit-up is worsening, painful, or disrupting feeds',
      ignoreAnswer: 'No—call the pediatrician',
      severity: 'caution',
      whatToDo:
        'Arrange a feeding and growth review instead of repeatedly changing bottles, formula, or feeding technique on your own.',
    },
    {
      situation: 'Vomiting is forceful or projectile',
      ignoreAnswer: 'No—urgent evaluation',
      severity: 'danger',
      whatToDo:
        'Call the pediatrician immediately. Repeated forceful vomiting in a newborn needs prompt assessment.',
    },
    {
      situation: 'Vomit is green, bloody, or coffee-ground-like',
      ignoreAnswer: 'No—get care now',
      severity: 'danger',
      whatToDo: 'Seek urgent medical care. Green vomit warrants emergency evaluation.',
    },
    {
      situation: 'The baby feeds less, has fewer wet diapers, or is not gaining well',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Contact the pediatrician promptly because hydration and adequate intake need to be checked.',
    },
    {
      situation: 'The belly is swollen or hard',
      ignoreAnswer: 'No—emergency evaluation',
      severity: 'danger',
      whatToDo: 'Go to an emergency department, particularly if vomiting is continuing or green.',
    },
    {
      situation: 'The baby turns blue, goes limp, or has trouble breathing',
      ignoreAnswer: 'No—call 911',
      severity: 'danger',
      whatToDo: 'Call 911 immediately and follow dispatcher instructions.',
    },
    {
      situation: 'A newborn has a temperature of 100.4°F or higher',
      ignoreAnswer: 'No—call immediately',
      severity: 'danger',
      whatToDo: 'Contact the pediatrician immediately and follow instructions for prompt evaluation.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check whether it is spit-up or vomiting',
      body:
        'Notice whether milk flows out easily with a burp or comes out with abdominal contractions, distress, and force. Record the color and take a photo or video if an episode repeats and doing so will not delay care.',
    },
    {
      title: 'Protect normal milk intake without overfeeding',
      body:
        'Follow your newborn’s feeding plan and hunger and fullness cues. Do not dilute formula or deliberately reduce total intake. If feeds seem rushed or unusually large, ask whether smaller, more frequent feeds are appropriate.',
      destinationProblemSlug: 'newborn-feeding-less-than-usual',
    },
    {
      title: 'Use calm, supervised after-feed care',
      body:
        'Burp at natural pauses and hold the baby upright while awake for a short period after feeding. Avoid bouncing, active play, and pressure on the abdomen immediately after a feed.',
    },
    {
      title: 'Keep every sleep surface flat',
      body:
        'Place the baby on their back on a firm, flat, level sleep surface. Do not elevate the mattress or use a wedge, positioner, or inclined sleep product to treat reflux.',
    },
    {
      title: 'Ask before changing milk or starting treatment',
      body:
        'Do not thicken feeds, switch formula, remove foods from a breastfeeding parent’s diet, or start acid-reducing medicine unless the pediatrician recommends it after assessing symptoms, intake, and growth.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Green vomit',
      description:
        'Distinctly green fluid may contain bile and can signal an intestinal obstruction. Seek emergency care.',
      severity: 'danger',
    },
    {
      title: 'Persistent forceful or projectile vomiting',
      description:
        'Vomit that shoots outward or repeatedly involves abdominal contractions is not ordinary spit-up and needs urgent pediatric evaluation.',
      severity: 'danger',
    },
    {
      title: 'Blood or coffee-ground material',
      description:
        'Red blood, dark flecks, or coffee-ground-like material requires prompt medical assessment even if the baby otherwise seems comfortable.',
      severity: 'warning',
    },
    {
      title: 'Blue color, limpness, or breathing difficulty',
      description:
        'Call 911 for abnormal color, poor responsiveness, pauses in breathing, or visible trouble breathing.',
      severity: 'danger',
    },
    {
      title: 'Reduced feeding or dehydration signs',
      description:
        'Fewer wet diapers, dry mouth, low energy, difficulty waking, or inability to keep milk down needs prompt medical attention.',
      severity: 'warning',
    },
    {
      title: 'Swollen, firm, or painful abdomen',
      description:
        'Abdominal distension with vomiting can indicate an obstruction or another urgent abdominal condition.',
      severity: 'danger',
    },
    {
      title: 'Temperature of 100.4°F or higher',
      description:
        'A baby three months old or younger with this measured temperature needs immediate contact with a pediatric healthcare service.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is spitting up after every feeding normal for a newborn?',
      answer:
        'It can be. Frequency alone is not alarming when the spit-up is effortless and milk-colored and the baby remains comfortable, feeds well, has their usual wet diapers, and gains weight.',
    },
    {
      question: 'How can I tell spit-up from vomiting?',
      answer:
        'Spit-up flows out easily, often with a burp. Vomiting usually involves abdominal contractions, discomfort, and force. Projectile vomiting needs urgent evaluation in a newborn.',
    },
    {
      question: 'Should I feed my baby again after they spit up?',
      answer:
        'After a small, effortless spit-up, follow the baby’s usual feeding plan and hunger cues rather than forcing extra milk. Call for advice if feeding repeatedly triggers forceful vomiting.',
    },
    {
      question: 'Should I stop breastfeeding because of frequent spit-up?',
      answer:
        'No. Uncomplicated reflux is not a reason to stop breastfeeding. Ask for a feeding assessment if nursing is painful, intake seems low, or the baby is not gaining as expected.',
    },
    {
      question: 'Should I switch formula or add cereal to the bottle?',
      answer:
        'Not without medical guidance. Formula changes and thickened feeds may be appropriate in selected cases, but a clinician should consider the baby’s age, intake, growth, and symptoms first.',
    },
    {
      question: 'Does my newborn need reflux medicine?',
      answer:
        'Normal, painless spit-up generally does not need acid-reducing medicine. Medication is reserved for selected infants with diagnosed complications or troublesome disease.',
    },
    {
      question: 'Should a baby with reflux sleep on their stomach or on an incline?',
      answer:
        'No. Place the baby on their back on a firm, flat, level sleep surface. Reflux does not make stomach sleeping or an inclined mattress safer.',
    },
    {
      question: 'Does frequent spit-up mean my baby has a milk allergy?',
      answer:
        'Not by itself. Milk-protein allergy can resemble reflux, but other findings may include persistent discomfort, feeding problems, eczema, blood in stool, or poor growth. Discuss suspected allergy before changing diets.',
    },
    {
      question: 'When does normal newborn reflux improve?',
      answer:
        'It generally becomes less frequent as the digestive system matures and the baby spends more time upright. Improvement is gradual, and the exact timing differs among babies.',
    },
    {
      question: 'Should I contact the pediatrician even if there are no red flags?',
      answer:
        'Yes if you are uncertain, the pattern is changing, or you cannot confirm that feeding, diapers, and growth are normal. Newborn concerns are appropriate reasons to call.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Institute of Diabetes and Digestive and Kidney Diseases',
      title: 'Symptoms & Causes of GER & GERD in Infants',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants/symptoms-causes',
      sourceType: 'government',
      notes:
        'Supports normal infant regurgitation and red flags including forceful or bile-stained vomiting, blood, dehydration, poor growth, feeding problems, breathing problems, and abdominal concerns.',
    },
    {
      publisher: 'National Institute of Diabetes and Digestive and Kidney Diseases',
      title: 'Eating, Diet, & Nutrition for GER & GERD in Infants',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants/eating-diet-nutrition',
      sourceType: 'government',
      notes:
        'Advises discussing diet changes with a doctor and covers avoiding overfeeding, smaller feedings, thickening, and medically directed milk-protein changes.',
    },
    {
      publisher: 'Eunice Kennedy Shriver National Institute of Child Health and Human Development',
      title: 'About Back Sleeping',
      url: 'https://safetosleep.nichd.nih.gov/reduce-risk/back-sleeping',
      sourceType: 'government',
      notes:
        'Supports back sleeping for babies with reflux, explains why healthy babies can clear spit-up, and warns against raising the crib mattress or using an inclined sleep surface.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Why Babies Spit Up',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Why-Babies-Spit-Up.aspx',
      sourceType: 'other',
      notes:
        'Distinguishes effortless spit-up from forceful vomiting and supports avoiding overfeeding, burping, supervised upright holding, and prompt calls for forceful vomiting or blood.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Fever and Your Baby',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx',
      sourceType: 'other',
      notes:
        'States that a baby three months old or younger with a rectal temperature of 100.4°F or higher requires immediate contact with the pediatrician.',
    },
    {
      publisher: 'NASPGHAN and ESPGHAN',
      title:
        'Summary of the 2018 NASPGHAN-ESPGHAN Pediatric Gastroesophageal Reflux Clinical Practice Guideline',
      url: 'https://naspghan.org/wp-content/uploads/2024/01/PedGERD-Summary-revised-January-2024.pdf',
      sourceType: 'standards_body',
      notes:
        'Supports assessment of feeding and growth, avoiding overfeeding, clinician-directed treatment, and alarm signs such as forceful or bilious vomiting, blood, fever, lethargy, and abdominal distension.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Feeding and diaper log',
      description:
        'A simple written or phone-based log helps track feeding duration or bottle amounts, spit-up patterns, wet diapers, stool, and behavior for the pediatrician.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Digital thermometer',
      description:
        'A reliable digital thermometer helps confirm whether a newborn has a true fever. Ask the pediatrician which measurement method to use.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pediatric advice line or same-day visit',
      description:
        'A pediatric service can assess whether force, color, hydration, feeding changes, or growth concerns require an examination.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Lactation or bottle-feeding assessment',
      description:
        'A feeding assessment can identify latch problems, fast milk flow, bottle-flow issues, swallowed air, or feeding patterns that may contribute to spit-up.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'newborn-feeding-less-than-usual',
      anchorText: 'Can I ignore my newborn feeding less than usual?',
      relationshipType: 'escalation',
    },
    {
      slug: 'newborn-hiccups',
      anchorText: 'Can I ignore frequent hiccups in my newborn?',
      relationshipType: 'sibling',
    },
  ],
};
