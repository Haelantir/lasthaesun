import type { ProblemSeed } from '../types';

export const flatSpotOnBabysHead: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'newborn-head-and-skull',
  slug: 'flat-spot-on-babys-head',
  canonicalPath: '/babies/newborns/head-and-skull/flat-spot-on-babys-head/',
  name: "Flat Spot on a Baby's Head",
  eyebrow: 'Babies · Newborns · Head & Skull',

  h1: "Can I Ignore a Flat Spot on My Baby's Head?",
  seoTitle: 'Baby Flat Head: When Positional Plagiocephaly Needs Care',
  metaDescription:
    'Most flat spots are positional, but head tilt, worsening asymmetry, ridges, or an unusual shape present from birth need a pediatric exam.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Should my baby still sleep on their back?',
  canIUseItLabel: 'Yes — back sleep remains safest',

  shortAnswer:
    'Probably not. Most flat spots are positional and cosmetic, but a pediatrician should confirm that the skull sutures and neck movement are normal. Keep putting your baby on their back to sleep; use supervised awake positioning, not pillows or sleep positioners, to reduce pressure on the flat area.',

  whyItMattersHeading: 'The Shape May Be Positional, but the Cause Matters',
  whyItMatters: [
    'A flat area often develops because a baby repeatedly rests with their head in one position. This positional flattening does not restrict brain growth and often improves as the baby gains head control, spends more awake time off the back of the head, and becomes mobile. A baby who always looks one way may also have torticollis, which can keep pressure on the same area and may need physical therapy.',
    'The important exception is craniosynostosis, in which one or more skull sutures close too early. It can produce a distinctive head or facial shape and, in some cases, restrict skull growth or raise pressure inside the skull. A pediatric examination is the safest way to separate a routine positional flat spot from a skull-suture or neck problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Call the Pediatrician Promptly If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Checked positional flattening, torticollis, craniosynostosis, safe sleep, tummy time, physical therapy, and helmet guidance against CDC, NIH, CPSC, and AAP sources.',
  disclaimer:
    'General triage information only, not a diagnosis. A clinician needs to examine an unusual or changing head shape and assess skull growth, sutures, neck movement, and development.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'confirmed-mild-and-improving',
      label: 'A pediatrician confirmed mild positional flattening, and it is improving',
      shortDescription:
        'The baby turns both ways, has normal head growth and development, and the flat area is becoming less noticeable.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Routine home care is enough',
      resultBody:
        'Once craniosynostosis and significant neck tightness have been ruled out, mild positional flattening is mainly cosmetic. Continued improvement is reassuring.',
      recommendedAction:
        'Continue safe back sleeping, supervised tummy time, upright holding, and balanced positioning while awake. Keep routine growth visits and reassess if improvement stops.',
    },
    {
      slug: 'new-mild-flat-spot',
      label: 'The flat spot is mild, recently noticed, and the baby turns both ways',
      shortDescription:
        'There is no head tilt, hard ridge, pronounced facial difference, developmental concern, or worsening shape.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Start positioning changes and arrange a routine check',
      resultBody:
        'This pattern commonly fits positional flattening, but a first examination is still useful because appearance alone cannot fully assess the sutures or neck muscles.',
      recommendedAction:
        'Mention it at the next routine pediatric visit. Meanwhile, add supervised tummy time and upright play, alternate holding sides, and reduce unnecessary awake time in seats and swings.',
    },
    {
      slug: 'preferred-side-or-head-tilt',
      label: 'The baby always looks one way, tilts the head, or cannot turn equally',
      shortDescription:
        'The same side of the head stays against the sleep surface, or neck movement appears restricted.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Check for torticollis',
      resultBody:
        'Tight or imbalanced neck muscles can maintain a one-sided position and make flattening more pronounced. Early physical therapy may improve neck movement and positioning.',
      recommendedAction:
        'Contact the pediatrician for a neck and head examination. Do not force stretches or use a device to hold the head in place; learn any exercises from the care team.',
    },
    {
      slug: 'worsening-or-pronounced-flattening',
      label: 'The flat area is becoming more pronounced or the face looks increasingly uneven',
      shortDescription:
        'Repositioning has not helped, or the flattening appears moderate or severe rather than subtle.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not keep watching without an assessment',
      resultBody:
        'Persistent or worsening flattening may need measured follow-up, physical therapy, or discussion of a specialist-fitted cranial orthosis. It also deserves another check of the neck and sutures.',
      recommendedAction:
        'Arrange a pediatric appointment promptly. Bring earlier photographs if available and describe what positioning changes you have already tried.',
    },
    {
      slug: 'persistent-later-in-infancy',
      label: 'Moderate or severe flattening remains later in infancy',
      shortDescription:
        'The head shape has not improved enough as the baby has gained mobility or after repositioning or physical therapy.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Ask whether a specialist evaluation is still useful',
      resultBody:
        "Helmet decisions depend on the baby's age, skull growth, severity, and response to conservative care. Waiting indefinitely can reduce the practical treatment options during active growth.",
      recommendedAction:
        'Ask the pediatrician whether referral to a craniofacial clinic, pediatric neurosurgery service, or qualified cranial orthotics provider is appropriate.',
    },
    {
      slug: 'unusual-shape-or-hard-ridge',
      label: 'The shape was present at birth and remains unusual, or there is a hard ridge',
      shortDescription:
        'The head is distinctly long and narrow, the forehead looks triangular, the eyes or forehead are uneven, or a firm ridge follows a skull suture.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Craniosynostosis needs to be ruled out',
      resultBody:
        'These findings can occur when a skull suture closes too early. Craniosynostosis cannot be corrected by ordinary repositioning and may require early specialist care.',
      recommendedAction:
        'Contact the pediatrician promptly and describe the head shape and when it first appeared. Do not delay the visit while trying pillows, massage, repositioning devices, or an online helmet.',
    },
    {
      slug: 'development-or-head-control-concern',
      label: 'The flat spot comes with poor head control or delayed motor skills',
      shortDescription:
        'The baby struggles to lift or turn the head, uses the body unevenly, or is not progressing as expected.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Assess development as well as head shape',
      resultBody:
        'Positional flattening does not itself prove brain injury, but motor or movement concerns need their own evaluation and may affect how the baby positions the head.',
      recommendedAction:
        'Contact the pediatrician and describe the movement or milestone concern. A developmental assessment and pediatric physical therapy referral may be appropriate.',
    },
    {
      slug: 'neurologic-emergency-signs',
      label: 'The baby has a tense bulging soft spot, repeated vomiting, a seizure, or is hard to wake',
      shortDescription:
        'The symptoms suggest possible increased pressure or another acute illness rather than uncomplicated positional flattening.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Get emergency medical care',
      resultBody:
        'A true bulging fontanelle when the baby is calm, a seizure, marked drowsiness, or repeated vomiting can signal a serious neurologic problem.',
      recommendedAction:
        'Seek emergency care now. Call emergency services for a seizure, unresponsiveness, severe weakness, abnormal breathing, or blue or gray color.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Repeated pressure can mold a flexible skull',
      description:
        'When a baby rests in the same position, the back or one side of the skull can gradually flatten. This is usually a positional and cosmetic change.',
      severity: 'info',
      chainLabel: 'Repeated position → localized pressure',
    },
    {
      stageLabel: 'IF ONE-SIDED POSITIONING CONTINUES',
      title: 'The asymmetry may become more noticeable',
      description:
        'Continued pressure on one area can deepen the flat spot and shift the visible balance of the forehead, ears, or face.',
      severity: 'caution',
      chainLabel: 'Ongoing pressure → greater asymmetry',
    },
    {
      stageLabel: 'IF NECK TIGHTNESS IS MISSED',
      title: 'Torticollis can maintain the pattern',
      description:
        'Limited neck rotation or a persistent head tilt can keep the baby facing the same direction and interfere with balanced movement.',
      severity: 'warning',
      chainLabel: 'Tight neck → preferred side → persistent flattening',
    },
    {
      stageLabel: 'IF MODERATE OR SEVERE FLATTENING PERSISTS',
      title: 'Specialist treatment may need consideration',
      description:
        'Repositioning may not be enough for a pronounced deformity. Physical therapy or a specialist-fitted helmet may be discussed based on severity, growth, and response to earlier care.',
      severity: 'warning',
      chainLabel: 'Persistent shape → specialist assessment',
    },
    {
      stageLabel: 'IF THE CAUSE IS CRANIOSYNOSTOSIS',
      title: 'Delayed diagnosis can delay necessary treatment',
      description:
        'A fused skull suture changes how the skull grows. Some cases can raise pressure inside the skull and require coordinated craniofacial or neurosurgical care.',
      severity: 'danger',
      chainLabel: 'Fused suture → restricted growth → pressure risk',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Mild positional flattening was confirmed and is clearly improving',
      ignoreAnswer: 'Yes, with routine monitoring',
      severity: 'info',
      whatToDo:
        'Continue safe sleep and pressure-relieving awake activities. Keep normal growth visits and report renewed worsening or limited neck movement.',
    },
    {
      situation: 'A mild flat spot is new, and the baby turns the head freely both ways',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Start supervised tummy time and balanced positioning, then show the head shape at the next routine pediatric visit.',
    },
    {
      situation: 'The baby always faces one direction or holds the head tilted',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange a pediatric examination for torticollis or another cause of restricted neck movement.',
    },
    {
      situation: 'The flattening or facial asymmetry is becoming more pronounced',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact the pediatrician promptly rather than continuing home positioning without reassessment.',
    },
    {
      situation: 'The unusual shape was present at birth, persists, or follows a hard ridge',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Request prompt evaluation for craniosynostosis. Do not assume the shape is caused by sleep position.',
    },
    {
      situation: 'Moderate or severe flattening remains after repositioning or therapy',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Ask whether measured follow-up, a craniofacial referral, or a specialist helmet assessment is appropriate.',
    },
    {
      situation: 'The flat spot comes with poor head control or delayed movement',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange a developmental and physical assessment. Do not assume the head shape caused the delay.',
    },
    {
      situation: 'The baby has a tense bulging soft spot, repeated vomiting, a seizure, or marked drowsiness',
      ignoreAnswer: 'No — emergency care',
      severity: 'danger',
      whatToDo:
        'Seek emergency medical evaluation now. Call emergency services if the baby is unresponsive, seizing, breathing abnormally, or turning blue or gray.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Keep every sleep flat, bare, and on the back',
      body:
        'Continue placing your baby on their back on a firm, flat sleep surface with only a fitted sheet. Do not switch to side or stomach sleeping and do not add a pillow, wedge, roll, sleep positioner, or padded head support.',
    },
    {
      title: 'Arrange a head and neck examination',
      body:
        'Ask the pediatrician to look at the head from several angles, feel the sutures, review head-circumference growth, and check whether the neck turns equally in both directions. Seek a quicker visit for worsening shape, a ridge, or pronounced facial asymmetry.',
    },
    {
      title: 'Add supervised pressure-free awake time',
      body:
        'Use frequent short periods of tummy time while the baby is awake and watched. Hold the baby upright for cuddling and play, and limit unnecessary awake time with the head resting against car seats, swings, bouncers, and similar equipment.',
    },
    {
      title: 'Encourage balanced movement without restraining the head',
      body:
        "Alternate arms during feeding and holding. Change which end of the crib the baby's head faces and place interesting activity toward the nonpreferred side while the baby is awake. Never secure the head in position.",
    },
    {
      title: 'Use therapy or helmet care only through qualified services',
      body:
        'Follow stretches and positioning exercises demonstrated for your baby rather than forcing the neck. If helmet therapy is recommended, use a custom-fitted medical orthosis with regular follow-up, not an unmeasured product bought online.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The head shape was unusual at birth and remains pronounced',
      description:
        'Persistent long, narrow, triangular, or markedly uneven shapes need assessment rather than an assumption that sleep position caused them.',
      severity: 'warning',
    },
    {
      title: 'You feel a firm ridge along the skull',
      description:
        'A clinician should assess a persistent hard edge along a suture, especially when it follows an unusual growth pattern.',
      severity: 'warning',
    },
    {
      title: 'The forehead, eyes, or face look increasingly uneven',
      description:
        'Positional flattening can affect visible symmetry, but pronounced or progressive facial differences require an examination to identify the cause.',
      severity: 'warning',
    },
    {
      title: 'The baby cannot turn the neck equally',
      description:
        'A consistent head tilt, preferred side, or resistance to turning may indicate torticollis or another movement problem.',
      severity: 'warning',
    },
    {
      title: 'The flat area keeps worsening',
      description:
        'Increasing flattening despite balanced positioning or improved mobility should not be managed indefinitely without reassessment.',
      severity: 'caution',
    },
    {
      title: 'Head control or motor development seems delayed',
      description:
        'Poor head lifting, unequal movement, or loss of a previously acquired skill needs evaluation separate from the cosmetic head-shape concern.',
      severity: 'warning',
    },
    {
      title: 'A tense bulging soft spot or neurologic symptoms appear',
      description:
        'Emergency evaluation is needed for a true bulging fontanelle while calm, repeated vomiting, a seizure, marked drowsiness, unresponsiveness, or abnormal breathing.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: "Does a positional flat spot damage my baby's brain?",
      answer:
        'No. Positional plagiocephaly and brachycephaly are skull-shape changes and do not restrict brain growth. Craniosynostosis is different and must be ruled out when the shape or examination is concerning.',
    },
    {
      question: 'Will the flat spot round out on its own?',
      answer:
        'Many mild positional flat spots improve as babies gain head control, spend less time resting on the same area, and become mobile. Improvement is not guaranteed, so track the shape and keep pediatric follow-up.',
    },
    {
      question: 'Should I put my baby on their stomach or side to sleep?',
      answer:
        'No. Start every sleep on the back on a firm, flat, bare sleep surface. Tummy time is only for an awake baby who is being watched.',
    },
    {
      question: 'How much tummy time should my baby have?',
      answer:
        'Begin with short supervised sessions and offer them regularly throughout the day, building up as your baby tolerates them. Ask the pediatrician for adjustments if the baby was premature or has medical or movement concerns.',
    },
    {
      question: 'Can I use a head-shaping pillow or sleep positioner?',
      answer:
        'No. These products are not proven treatments and can create a suffocation hazard. Keep pillows, wedges, rolls, and positioners out of the sleep space.',
    },
    {
      question: 'What is torticollis?',
      answer:
        'Torticollis involves tight or imbalanced neck muscles that make a baby tilt the head or prefer looking one way. It can maintain a flat spot and often benefits from pediatric physical therapy.',
    },
    {
      question: 'Will my baby need a CT scan?',
      answer:
        'Usually not for straightforward positional flattening. A pediatric examination can identify most cases, while imaging may be considered if the diagnosis remains uncertain or craniosynostosis is suspected.',
    },
    {
      question: 'Does every baby with a flat head need a helmet?',
      answer:
        'No. Mild flattening often responds to positioning and mobility. A specialist may consider a helmet for persistent moderate or severe flattening, particularly when conservative care has not worked and the skull is still growing rapidly.',
    },
    {
      question: 'When is helmet therapy usually discussed?',
      answer:
        'The AAP notes that babies with moderate or severe flattening that has not responded by around five or six months may benefit. The decision depends on measured severity, age, growth, neck movement, and previous treatment.',
    },
    {
      question: "Can I stretch my baby's neck at home?",
      answer:
        'Do only the gentle exercises demonstrated for your baby by the pediatrician or physical therapist. Do not force the head past resistance or copy aggressive stretches from online videos.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Craniosynostosis',
      url: 'https://www.cdc.gov/birth-defects/about/craniosynostosis.html',
      sourceType: 'government',
      notes:
        'Explains premature skull-suture closure, characteristic head shapes, hard suture edges, slow head growth, possible intracranial pressure, diagnosis, and treatment.',
    },
    {
      publisher: 'Eunice Kennedy Shriver National Institute of Child Health and Human Development',
      title: 'Tummy Time for a Healthy Baby',
      url: 'https://safetosleep.nichd.nih.gov/reduce-risk/tummy-time',
      sourceType: 'government',
      notes:
        'Defines supervised awake tummy time and recommends it, upright holding, varied positioning, and reduced container time to help prevent flat spots.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Safe Sleep – Cribs and Infant Products',
      url: 'https://www.cpsc.gov/SafeSleep',
      sourceType: 'government',
      notes:
        'Recommends back sleeping on a bare approved sleep surface and warns that pillows, sleep positioners, and unsuitable sleep products can create suffocation hazards.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'When a Baby’s Head is Misshapen: Positional Skull Deformities',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Cleft-Craniofacial/Pages/Positional-Skull-Deformities-and-Torticollis.aspx',
      sourceType: 'academic',
      notes:
        'Covers positional plagiocephaly, brachycephaly, torticollis, safe repositioning, physical therapy, helmet considerations, and the distinction from craniosynostosis.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Identifying the Misshapen Head: Craniosynostosis and Related Disorders',
      url: 'https://publications.aap.org/pediatrics/article/146/3/e2020015511/36647/Identifying-the-Misshapen-Head-Craniosynostosis',
      sourceType: 'academic',
      notes:
        'Clinical report distinguishing deformational head shapes from craniosynostosis, supporting early positional changes and referral when a fused suture is suspected.',
    },
    {
      publisher: 'MedlinePlus, U.S. National Library of Medicine',
      title: 'Increased intracranial pressure',
      url: 'https://medlineplus.gov/ency/article/000793.htm',
      sourceType: 'government',
      notes:
        'Lists infant warning signs such as drowsiness, a bulging fontanelle, vomiting, and seizures, and identifies sudden increased intracranial pressure as an emergency.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Pediatric Head and Neck Assessment',
      description:
        'A pediatric visit can evaluate skull shape, sutures, head-circumference growth, facial symmetry, neck movement, and development.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pediatric Physical Therapy',
      description:
        'A therapist can assess torticollis, head control, motor development, and positioning, then teach safe exercises tailored to the baby.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Safe Sleep and Tummy Time Guide',
      description:
        'A reliable guide helps caregivers separate back sleeping from supervised awake tummy time and avoid pillows, wedges, and positioners.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Craniofacial or Pediatric Neurosurgery Clinic',
      description:
        'This service evaluates unusual skull shapes, possible craniosynostosis, and persistent moderate or severe deformities that may need specialist treatment.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'newborn-cone-shaped-head',
      anchorText: 'Is a cone-shaped newborn head normal?',
      relationshipType: 'sibling',
    },
    {
      slug: 'newborn-head-lag',
      anchorText: 'When does newborn head lag need attention?',
      relationshipType: 'related',
    },
    {
      slug: 'newborn-soft-spot-pulsing',
      anchorText: 'Is a pulsing newborn soft spot normal?',
      relationshipType: 'related',
    },
  ],
};
