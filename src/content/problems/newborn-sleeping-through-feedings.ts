import type { ProblemSeed } from '../types';

export const newbornSleepingThroughFeedings: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'newborn-feeding',
  slug: 'newborn-sleeping-through-feedings',
  canonicalPath: '/babies/newborns/feeding/newborn-sleeping-through-feedings/',
  name: 'Newborn Sleeping Through Feedings',
  eyebrow: 'Babies · Newborns · Feeding',

  h1: 'Can I Ignore My Newborn Sleeping Through Feedings?',
  seoTitle: 'Newborn Sleeping Through Feedings: When to Wake Them',
  metaDescription:
    'A newborn may need to be woken for feeds until weight gain and intake are established. Learn when longer sleep is okay and which signs need urgent care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I let my newborn keep sleeping?',
  canIUseItLabel: 'Not until weight gain is established',

  shortAnswer:
    'Not by default. Until your newborn is feeding effectively, has regained birth weight, and is gaining steadily, wake them according to the feeding plan from your hospital or pediatrician. Once those checks are reassuring, many healthy newborns can sleep longer and feed when they wake.',

  whyItMattersHeading: 'Why missed newborn feeds matter',
  whyItMatters: [
    'A very young baby may sleep past feeding cues, especially during the first days. Repeatedly missed feeds can reduce total milk intake, interfere with weight gain, lower urine and stool output, and reduce breast stimulation while milk supply is being established.',
    'The deciding factor is not one long nap. It is the whole picture: weight trend, effective swallowing or bottle feeding, total feeds, diaper output, jaundice, medical history, and how easily the baby wakes. Unusual sleepiness can also be a sign of inadequate intake, rising bilirubin, or illness.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Medical Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked against current CDC feeding guidance and AAP guidance on newborn growth, sleep, jaundice, hydration, and fever.',
  disclaimer:
    'General triage guidance only. A newborn’s safe feeding interval depends on gestational age, weight trend, medical history, feeding effectiveness, and the discharge plan. Contact your baby’s care team when those details are uncertain.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'birth-weight-not-regained',
      label: 'My baby has not regained birth weight',
      shortDescription: 'Weight gain has not yet been confirmed, or the baby is still below birth weight.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'KEEP WAKING FOR FEEDS',
      resultBody:
        'Before weight gain is established, long sleep can reduce the total amount your baby takes in. Birth weight is an important checkpoint, but feeding quality, diapers, and the baby’s medical history also matter.',
      recommendedAction:
        'Wake and offer each scheduled feed. Follow the discharge plan and arrange a weight check if one is not already scheduled.',
    },
    {
      slug: 'healthy-growing-and-cleared',
      label: 'My baby regained birth weight and is gaining steadily',
      shortDescription:
        'Feeding is effective, diapers are normal, and the pediatrician has no concerns about growth or jaundice.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'LONGER SLEEP MAY BE OKAY',
      resultBody:
        'Healthy newborns who are feeding well and gaining steadily usually do not need to be awakened for every feed. The reassurance comes from documented growth and adequate intake, not from age alone.',
      recommendedAction:
        'Feed when your baby shows early hunger cues and continue watching feeding quality, diapers, and weight checks.',
    },
    {
      slug: 'no-weight-check-after-discharge',
      label: 'My baby has not had a weight check since discharge',
      shortDescription:
        'You do not know whether weight loss has stopped or whether birth weight has been regained.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'DO NOT ASSUME SLEEP MEANS FULL',
      resultBody:
        'A calm, sleepy baby is not proof that enough milk is getting in. Weight, swallowing, urine, and stool provide better information about intake.',
      recommendedAction:
        'Continue waking for feeds according to the discharge plan and arrange the recommended newborn follow-up and weight check.',
    },
    {
      slug: 'fewer-than-eight-breastfeeds',
      label: 'My breastfed newborn feeds fewer than eight times most days',
      shortDescription: 'Long sleep is causing the baby to miss enough feeds that the daily total stays low.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE FEEDING TOTAL IS TOO LOW',
      resultBody:
        'Breastfed newborns commonly need eight to twelve feeds in twenty-four hours. Consistently feeding fewer than eight times is a warning that intake or milk stimulation may be inadequate.',
      recommendedAction:
        'Wake the baby and offer a feed. Contact the pediatrician or lactation support provider today for help assessing latch, swallowing, milk transfer, and weight.',
    },
    {
      slug: 'diaper-output-dropping',
      label: 'Wet or dirty diapers are below the expected pattern',
      shortDescription:
        'Urine or stool output has dropped, urine is dark, or stools are not transitioning as expected.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CHECK INTAKE AND HYDRATION NOW',
      resultBody:
        'Diaper output is an important clue after the first days. Low output alongside long sleep can mean the baby is not taking in enough milk.',
      recommendedAction:
        'Offer a feed and contact the pediatrician promptly. Report the baby’s age, recent feeds, wet diapers, stools, urine color, and current weight if known.',
    },
    {
      slug: 'jaundiced-and-sleepy',
      label: 'My baby looks yellow and is increasingly sleepy',
      shortDescription: 'Yellow skin or eyes are paired with missed feeds, poor sucking, or difficulty waking.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CALL THE PEDIATRICIAN TODAY',
      resultBody:
        'Inadequate intake can contribute to higher bilirubin levels, while worsening jaundice may make feeding harder. Color alone cannot show how high the bilirubin is.',
      recommendedAction:
        'Contact the pediatrician today for feeding and jaundice guidance. Seek emergency care if the baby becomes limp, extremely difficult to wake, or develops abnormal movements.',
    },
    {
      slug: 'premature-low-birth-weight-or-medical-plan',
      label: 'My baby was premature, had a low birth weight, or has a medical feeding plan',
      shortDescription:
        'The baby left the hospital with specific feeding intervals, fortification, supplementation, or weight-monitoring instructions.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'FOLLOW THE INDIVIDUAL PLAN',
      resultBody:
        'General advice about letting a healthy, growing newborn sleep does not replace a feeding plan made for a higher-risk baby. Sleepiness can make it harder to take the prescribed amount.',
      recommendedAction:
        'Wake the baby as instructed. Call the neonatal or pediatric care team if feeds are being missed, the baby cannot finish them, or you are considering changing the plan.',
    },
    {
      slug: 'hard-to-wake-or-weak-suck',
      label: 'My baby is hard to wake or sucks weakly',
      shortDescription:
        'Gentle stimulation does not produce an alert, effective feed, or the baby quickly becomes limp and unresponsive.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'THIS IS NOT NORMAL DEEP SLEEP',
      resultBody:
        'A newborn who cannot wake enough to feed may have significant dehydration, high bilirubin, infection, low blood sugar, or another illness that needs prompt assessment.',
      recommendedAction:
        'Seek urgent medical evaluation now. Call emergency services if the baby is unresponsive, limp, blue or gray, having a seizure, or struggling to breathe.',
    },
    {
      slug: 'fever-or-breathing-change',
      label: 'Sleepiness comes with fever or abnormal breathing',
      shortDescription:
        'The baby has a rectal temperature of 100.4°F or higher, breathing difficulty, pauses, grunting, or blue or gray color.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'GET MEDICAL HELP NOW',
      resultBody:
        'Fever in a newborn and any true breathing difficulty require immediate medical assessment. Do not assume the baby is merely sleeping through hunger.',
      recommendedAction:
        'Seek immediate medical care. Call emergency services for severe breathing trouble, blue or gray color, unresponsiveness, or prolonged pauses in breathing.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'One long sleep may not mean something is wrong',
      description:
        'An isolated missed feed is not automatically an emergency if the baby wakes normally, feeds effectively, and has reassuring growth and diaper output.',
      severity: 'info',
      chainLabel: 'Long sleep',
    },
    {
      stageLabel: 'IF IT KEEPS HAPPENING BEFORE WEIGHT GAIN IS ESTABLISHED',
      title: 'Total intake and milk stimulation can fall',
      description:
        'Repeatedly sleeping through planned feeds can reduce the milk the baby receives and, during breastfeeding, reduce the stimulation that helps establish milk production.',
      severity: 'caution',
      chainLabel: '→ Fewer effective feeds',
    },
    {
      stageLabel: 'IF OUTPUT OR WEIGHT FALLS',
      title: 'Dehydration and poor growth become concerns',
      description:
        'Low intake may show up as continued weight loss, inadequate gain, fewer wet diapers, dark urine, or delayed stool changes.',
      severity: 'warning',
      chainLabel: '→ Lower intake and output',
    },
    {
      stageLabel: 'IF JAUNDICE IS PRESENT',
      title: 'Inadequate feeding can worsen bilirubin problems',
      description:
        'Low milk intake and less stooling can contribute to suboptimal-intake hyperbilirubinemia. A bilirubin measurement, not visual inspection alone, determines treatment needs.',
      severity: 'warning',
      chainLabel: '→ Greater jaundice concern',
    },
    {
      stageLabel: 'IF THE BABY IS HARD TO WAKE OR ILL',
      title: 'Waiting can delay care for a sick newborn',
      description:
        'Marked lethargy, weak feeding, fever, breathing trouble, limpness, or abnormal movements can signal illness or severe jaundice and require urgent evaluation.',
      severity: 'danger',
      chainLabel: '→ Emergency illness concern',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Birth weight has not been regained or weight gain is unknown',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Keep waking for feeds according to the discharge plan and arrange a weight check.',
    },
    {
      situation: 'Birth weight is regained, growth is steady, and feeding and diapers are normal',
      ignoreAnswer: 'Yes, if your clinician has cleared it',
      severity: 'info',
      whatToDo: 'Let the baby sleep longer, respond to early hunger cues, and keep scheduled growth checks.',
    },
    {
      situation: 'There has been no newborn follow-up or weight check since discharge',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Continue the planned feeding schedule and arrange the recommended newborn visit.',
    },
    {
      situation: 'Breastfeeding occurs fewer than eight times most days',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Wake and feed the baby, then get prompt help assessing milk transfer, latch, and weight.',
    },
    {
      situation: 'Wet or dirty diaper output is below the expected age-based pattern',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Contact the pediatrician promptly and provide a record of feeds, urine, stools, and weight.',
    },
    {
      situation: 'The baby is yellow, increasingly sleepy, or feeding poorly',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Call the pediatrician today for a feeding assessment and bilirubin guidance.',
    },
    {
      situation: 'The baby was premature, had a low birth weight, or received a special feeding plan',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Follow the individual plan and contact the care team before allowing feeds to be skipped.',
    },
    {
      situation: 'The baby is very hard to wake, weak, feverish, or breathing abnormally',
      ignoreAnswer: 'No — get help now',
      severity: 'danger',
      whatToDo:
        'Seek immediate medical evaluation and call emergency services for unresponsiveness, blue or gray color, limpness, seizure, or severe breathing trouble.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Wake the baby and offer a feed',
      body:
        'Try skin-to-skin contact, change the diaper, undress the baby to the diaper, or gently rub the back and feet. If the baby does not wake enough to suck and swallow effectively, call the pediatrician promptly.',
    },
    {
      title: 'Use the feeding plan you were given',
      body:
        'Follow the hospital or pediatrician’s instructions for feeding frequency, bottle amounts, supplementation, fortification, and pumping. Do not extend intervals just because the baby remains asleep.',
    },
    {
      title: 'Track feeds and diaper output',
      body:
        'Record when feeds start, whether swallowing is heard, bottle amounts when measurable, wet diapers, stools, urine color, jaundice, and how easily the baby wakes. Bring the record to weight and feeding checks.',
    },
    {
      title: 'Arrange a weight and feeding assessment',
      body:
        'A current weight and an observed feed can show whether the baby is transferring milk and gaining appropriately. Get prompt help if feeds are consistently missed, short, weak, painful, or without audible swallowing.',
      destinationProblemSlug: 'newborn-feeding-less-than-usual',
    },
    {
      title: 'Escalate unusual sleepiness',
      body:
        'Contact the pediatrician the same day for worsening sleepiness, jaundice, low diaper output, or poor feeding. Seek emergency care for fever, breathing trouble, blue or gray color, limpness, seizure, or inability to wake.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The baby cannot wake enough to feed',
      description:
        'A newborn who remains unresponsive, limp, unusually weak, or unable to suck after gentle attempts to wake needs urgent medical assessment.',
      severity: 'danger',
    },
    {
      title: 'Rectal temperature of 100.4°F or higher',
      description:
        'Fever in a baby three months old or younger requires immediate contact with a medical professional, even if no other symptom is present.',
      severity: 'danger',
    },
    {
      title: 'Breathing trouble or blue or gray color',
      description:
        'Fast or labored breathing, chest pulling in, grunting, prolonged pauses, or blue or gray lips, face, or skin requires emergency help.',
      severity: 'danger',
    },
    {
      title: 'Jaundice with poor feeding or worsening sleepiness',
      description:
        'Increasing yellow color paired with weak feeding or difficulty waking needs prompt bilirubin and feeding assessment.',
      severity: 'warning',
    },
    {
      title: 'Much less urine or signs of dehydration',
      description:
        'Noticeably fewer wet diapers, dark urine, dry mouth, a sunken soft spot, or unusual drowsiness can indicate inadequate fluid intake.',
      severity: 'warning',
    },
    {
      title: 'Weak sucking or no audible swallowing',
      description:
        'Repeated feeds without effective sucking and swallowing may not provide enough milk even if the baby spends time at the breast or bottle.',
      severity: 'warning',
    },
    {
      title: 'Continued weight loss or failure to gain',
      description:
        'A baby who keeps losing weight, does not regain birth weight as expected, or falls off the planned growth pattern needs feeding and medical evaluation.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'When can I stop waking my newborn to feed?',
      answer:
        'Usually after your baby has regained birth weight, is gaining steadily, feeds effectively, has reassuring diaper output, and has no medical reason to follow a stricter schedule. Confirm this at a newborn weight check.',
    },
    {
      question: 'Is regaining birth weight the only requirement?',
      answer:
        'No. Weight is important, but the decision also depends on feeding quality, total intake, diapers, jaundice, gestational age, and any medical feeding instructions.',
    },
    {
      question: 'What does “sleeping through a feeding” mean?',
      answer:
        'There is no universal sleep duration that defines it. The practical concern is that the baby is missing feeds required by the current feeding plan or is no longer reaching an adequate daily total.',
    },
    {
      question: 'Should breastfed and formula-fed newborns both be woken?',
      answer:
        'They may both need waking during the early period. Follow the feeding frequency and amount recommended for your baby until growth and intake are established.',
    },
    {
      question: 'Should I wait until my baby cries from hunger?',
      answer:
        'No. Crying is a late hunger cue. Offer a feed when you see hand-to-mouth movements, rooting, lip smacking, increased alertness, or other early cues, and wake the baby when the feeding plan requires it.',
    },
    {
      question: 'What if my baby latches but immediately falls asleep?',
      answer:
        'Look for active sucking and swallowing, not just time at the breast. Try skin-to-skin contact, a diaper change, and switching sides. Get feeding support if this happens repeatedly.',
    },
    {
      question: 'Can pumping make up for a feed my baby slept through?',
      answer:
        'Pumping can help protect milk supply, but it does not ensure that the baby received enough milk. Feed expressed milk or use supplementation only according to the feeding plan or clinical guidance.',
    },
    {
      question: 'How many wet diapers should a breastfed newborn have?',
      answer:
        'The expected number changes during the first days. By about day five, six or more clear or pale wet diapers a day is a common benchmark, but follow the age-based guidance from your baby’s care team.',
    },
    {
      question: 'Is a sleepy baby with jaundice just experiencing normal newborn sleep?',
      answer:
        'Do not assume that. Jaundice with poor feeding, low output, or increasing difficulty waking needs same-day guidance because the bilirubin level may need to be checked.',
    },
    {
      question: 'Should I give water or sugar water to a sleepy newborn?',
      answer:
        'No. Give only breast milk or properly prepared infant formula unless the baby’s medical team has prescribed something else. Water and sugar water do not correct inadequate feeding or jaundice.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'How Much and How Often to Breastfeed',
      url: 'https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/how-much-and-how-often.html',
      sourceType: 'government',
      notes:
        'Supports frequent newborn breastfeeding, waking sleepy newborns to feed, and an expected range of eight to twelve breastfeeds in twenty-four hours.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'How Much and How Often to Feed Infant Formula',
      url: 'https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/how-much-and-how-often.html',
      sourceType: 'government',
      notes:
        'Supports frequent formula feeding during the newborn period and notes that some formula-fed babies need to be awakened for feeds.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Newborn Breastfeeding Basics',
      url: 'https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/newborn-basics.html',
      sourceType: 'government',
      notes:
        'Supports using feeding frequency, swallowing, weight gain, urine, stool, latch, and jaundice to judge whether a breastfed newborn is receiving enough milk.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Sleeping Through the Night',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Sleeping-Through-the-Night.aspx',
      sourceType: 'standards_body',
      notes:
        'Supports allowing healthy, steadily growing babies to sleep without waking while checking that feeding, urination, bowel movements, and weight gain remain adequate.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title:
        'Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation',
      url: 'https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/Clinical-Practice-Guideline-Revision-Management-of',
      sourceType: 'standards_body',
      notes:
        'Supports frequent feeding, assessment of weight and output, and the connection between suboptimal milk intake, reduced stooling, excess weight loss, and hyperbilirubinemia.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Fever and Your Baby',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx',
      sourceType: 'standards_body',
      notes:
        'Supports immediate medical contact for a rectal temperature of 100.4°F or higher in a baby three months old or younger and identifies rectal measurement as most reliable for young infants.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Feeding and diaper log',
      description:
        'A simple written or digital log helps you show the pediatrician how often the baby feeds, whether feeds are effective, and how urine and stool output are changing.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Newborn weight and feeding check',
      description:
        'A current weight, hydration assessment, jaundice check, and observed feed can determine whether longer sleep is safe for this baby.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Lactation consultation',
      description:
        'Feeding support can assess latch, swallowing, milk transfer, pumping needs, and ways to keep a sleepy breastfed newborn actively feeding.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Digital rectal thermometer',
      description:
        'Rectal temperature is the most reliable way to check for fever in a young infant when illness or unusual sleepiness is suspected.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'newborn-feeding-less-than-usual',
      anchorText: 'Is my newborn feeding less than usual?',
      relationshipType: 'escalation',
    },
    {
      slug: 'newborn-not-pooping',
      anchorText: 'What if my newborn is not pooping?',
      relationshipType: 'follow_up',
    },
  ],
};
