import type { ProblemSeed } from '../types';

export const newbornNotPooping: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'newborn-diapers-and-digestion',
  slug: 'newborn-not-pooping',
  canonicalPath: '/babies/newborns/diapers-and-digestion/newborn-not-pooping/',
  name: 'Newborn Not Pooping',
  eyebrow: 'Babies · Newborns · Diapers & Digestion',

  h1: 'Can I Ignore My Newborn Not Pooping Today?',
  seoTitle: 'Newborn Not Pooping Today: When to Call the Pediatrician',
  metaDescription:
    'A stool-free day may be normal, but age, feeding, wet diapers, stool consistency, vomiting, belly swelling, and fever determine whether your newborn needs care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I watch my baby at home?',
  canIUseItLabel: 'Yes, briefly, if feeding and wet diapers are normal',

  shortAnswer:
    'A single stool-free day can be watched briefly if your newborn has already passed meconium, feeds normally, has the expected wet diapers, and has a soft belly with no vomiting or fever. Call the pediatrician sooner if your baby is in the first week, stool output has dropped along with feeding or urine, or any red flag appears.',

  whyItMattersHeading: 'Why a Missing Poop Can Mean Different Things',
  whyItMatters: [
    'Newborn stool frequency changes with age and feeding. During the first week, dirty diapers help show whether a breastfed baby is taking in enough milk. Toward three to six weeks, some healthy breastfed babies begin going several days between soft stools. Formula-fed babies usually poop more predictably, though an otherwise well baby may occasionally skip a day.',
    'Constipation is about more than frequency. Hard, dry, painful stools are more concerning than a soft stool that arrives late. No stool can also accompany low milk intake, dehydration, or, less commonly, an intestinal obstruction. Feeding, wet diapers, belly shape, vomiting, temperature, and alertness provide the context.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Medical Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Reviewed against CDC and NIH guidance plus American Academy of Pediatrics references on newborn stool patterns, feeding adequacy, constipation, obstruction signs, and fever.',
  disclaimer:
    "General newborn triage guidance only. Stool frequency cannot diagnose constipation, dehydration, inadequate feeding, infection, or intestinal obstruction. Contact your baby's clinician whenever the baby appears ill or you are unsure.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'older-breastfed-newborn-normal',
      label: 'My breastfed baby is several weeks old and otherwise completely normal',
      shortDescription:
        'The baby has passed meconium, nurses regularly, has normal wet diapers, is gaining weight, has a soft belly, and passed a soft stool last time.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This can be a normal breastfed pattern',
      resultBody:
        'Some breastfed babies begin having much less frequent bowel movements at around three to six weeks. Infrequent stool is usually reassuring when the eventual stool is soft and feeding, growth, urine output, comfort, and behavior remain normal.',
      recommendedAction:
        'Continue normal breastfeeding and monitor the overall pattern. Contact the pediatrician if feeding, wet diapers, comfort, or stool consistency changes.',
    },
    {
      slug: 'no-meconium-first-day',
      label: 'My baby has not passed any meconium during the first day',
      shortDescription: 'There has been no black or dark green first stool since birth.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Tell the newborn care team now',
      resultBody:
        'Most newborns pass meconium soon after birth. Lack of a first stool needs to be documented and monitored because delayed passage can sometimes signal an intestinal problem.',
      recommendedAction:
        'Tell the hospital, birth-center, or pediatric care team now rather than trying to trigger a bowel movement yourself.',
    },
    {
      slug: 'no-first-stool-forty-eight-hours',
      label: 'My baby still has not passed a first stool after forty-eight hours',
      shortDescription: 'No meconium has passed by the end of the second day after birth.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Delayed meconium needs prompt evaluation',
      resultBody:
        'Failure to pass a first bowel movement within forty-eight hours is a recognized warning sign for intestinal obstruction and conditions such as Hirschsprung disease.',
      recommendedAction:
        'Contact the pediatrician or newborn care team immediately. Seek emergency care if the baby also has vomiting, belly swelling, poor feeding, unusual sleepiness, or appears ill.',
    },
    {
      slug: 'first-week-breastfed-no-stool',
      label: 'My breastfed baby is in the first week and has gone a full day without stool',
      shortDescription:
        'Stool output has stopped or is below the expected early newborn pattern while breastfeeding is still being established.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Check milk intake with the pediatrician',
      resultBody:
        'During the first week, stool output is one of the clues that a breastfed newborn is receiving enough milk. A sudden gap matters more at this age than it does in an older, steadily growing breastfed baby.',
      recommendedAction:
        'Call the pediatrician or newborn feeding team the same day. Describe feeding frequency, swallowing, wet diapers, stool color, and when the last stool occurred.',
    },
    {
      slug: 'feeding-or-urine-decreased',
      label: 'My baby is feeding less or having fewer wet diapers',
      shortDescription:
        'No stool is accompanied by weak feeding, trouble latching, less swallowing, concentrated urine, fewer wet diapers, continued weight loss, or increasing jaundice.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Low intake or dehydration is possible',
      resultBody:
        'Reduced stool and urine together can indicate that a newborn is not taking in enough milk or formula. Increasing jaundice, poor feeding, and unusual sleepiness make that concern stronger.',
      recommendedAction:
        'Contact the pediatrician now for feeding and hydration guidance. Do not wait only for a bowel movement to decide whether intake is adequate.',
    },
    {
      slug: 'hard-dry-or-bloody-stool',
      label: 'The last stool was hard, dry, painful, or streaked with blood',
      shortDescription:
        'Stool was pellet-like, formed, difficult to pass, or accompanied by a small amount of visible blood.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'This sounds more like true constipation',
      resultBody:
        'Newborn stools should normally be soft. Hard or very dry stool can occur with inadequate fluid intake, incorrect formula preparation, or another problem. Blood may come from a small anal crack but still deserves medical guidance.',
      recommendedAction:
        'Call the pediatrician before changing feeds or using a constipation treatment. If formula-fed, confirm that every bottle was mixed exactly as directed.',
    },
    {
      slug: 'formula-fed-several-days',
      label: 'My formula-fed newborn has gone several days without stool',
      shortDescription:
        'The baby usually receives formula and the stool-free interval is continuing, especially with straining, irritability, or firmer stools.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Call rather than extending the wait',
      resultBody:
        'Formula-fed babies generally stool more regularly than older exclusively breastfed babies. A prolonged change, especially with discomfort or hard stool, needs pediatric advice.',
      recommendedAction:
        'Contact the pediatrician and describe the formula, mixing method, feeding amounts, wet diapers, last stool, and any vomiting or belly swelling.',
    },
    {
      slug: 'swollen-belly-or-green-vomit',
      label: 'My baby has a swollen belly or green vomit',
      shortDescription:
        'The abdomen appears enlarged, firm, or painful, or vomit is green or brown rather than ordinary milky spit-up.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'An intestinal obstruction is possible',
      resultBody:
        'Failure to pass stool with abdominal swelling, feeding problems, or green vomit is a warning pattern for bowel obstruction. This is not ordinary constipation to manage at home.',
      recommendedAction:
        'Go to an emergency department now. Do not give water, juice, laxatives, suppositories, or an enema, and do not attempt rectal stimulation.',
    },
    {
      slug: 'fever-or-very-ill',
      label: 'My newborn has a fever or looks seriously ill',
      shortDescription:
        'Rectal temperature is 100.4°F or higher, or the baby is hard to wake, unusually limp, struggling to breathe, or turning blue.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The baby needs immediate medical assessment',
      resultBody:
        'Fever in a newborn can be a sign of serious infection, even when there are no other obvious symptoms. Difficulty waking or breathing is an emergency regardless of bowel movements.',
      recommendedAction:
        'Seek immediate medical care. Call emergency services if the baby cannot be awakened normally, has severe breathing difficulty, or has blue lips or skin.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'One missed day may be normal variation',
      description:
        'Stool timing varies, especially as a breastfed baby approaches the end of the newborn period. A soft belly, normal feeding, expected wet diapers, and normal behavior are reassuring.',
      severity: 'info',
      chainLabel: 'Stool-free day',
    },
    {
      stageLabel: 'IF MILK INTAKE IS LOW',
      title: 'Diaper output can reveal a feeding problem',
      description:
        'A young newborn who takes in too little milk may produce fewer stools and less urine. Continued low intake can contribute to dehydration, poor weight gain, and worsening jaundice.',
      severity: 'warning',
      chainLabel: 'Reduced intake',
    },
    {
      stageLabel: 'IF STOOL BECOMES HARD',
      title: 'Pain and a small anal crack can develop',
      description:
        'Dry, formed stool can be difficult to pass and may cause discomfort or a small streak of blood from irritated tissue.',
      severity: 'caution',
      chainLabel: 'Hard stool',
    },
    {
      stageLabel: 'IF AN OBSTRUCTION IS PRESENT',
      title: 'Vomiting and abdominal swelling can follow',
      description:
        'A blocked intestine prevents contents from moving normally. Feeding trouble, a swollen abdomen, and green or brown vomit require urgent evaluation.',
      severity: 'danger',
      chainLabel: 'Obstruction signs',
    },
    {
      stageLabel: 'IF THE BABY BECOMES ILL',
      title: 'Newborn illness can require immediate treatment',
      description:
        'Fever, marked sleepiness, weak feeding, breathing difficulty, or dehydration can signal a problem more serious than an isolated change in stool frequency.',
      severity: 'danger',
      chainLabel: 'Medical emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation:
        'Several-week-old breastfed baby with normal feeding, growth, urine, behavior, and soft previous stools',
      ignoreAnswer: 'Yes, with routine observation',
      severity: 'info',
      whatToDo:
        "Continue normal feeds and watch for a soft stool. Call if the baby's feeding, wet diapers, comfort, belly, or behavior changes.",
    },
    {
      situation: 'One stool-free day in a formula-fed newborn who is feeding and acting normally',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Keep feeding normally, verify correct formula mixing, and monitor wet diapers, comfort, vomiting, and belly size. Call if the gap continues.',
    },
    {
      situation: 'Breastfed baby in the first week with no stool for a full day',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact the pediatrician or newborn feeding team the same day so milk transfer, weight, urine, and stool output can be assessed.',
    },
    {
      situation: 'No first meconium by forty-eight hours after birth',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact the newborn care team immediately for evaluation, even if the baby has not yet developed dramatic symptoms.',
    },
    {
      situation: 'No stool with reduced feeding, fewer wet diapers, increasing jaundice, or unusual sleepiness',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Call the pediatrician now. These changes can indicate inadequate intake, dehydration, or illness.',
    },
    {
      situation: 'Hard, dry, painful stool or visible blood',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Ask the pediatrician for advice before trying a remedy. Check formula preparation if applicable and report the amount and appearance of any blood.',
    },
    {
      situation: 'No stool with a swollen abdomen, repeated vomiting, or green vomit',
      ignoreAnswer: 'No — emergency',
      severity: 'danger',
      whatToDo:
        'Go to an emergency department now and avoid food or constipation treatments unless the medical team gives instructions.',
    },
    {
      situation: 'Rectal temperature of 100.4°F or higher',
      ignoreAnswer: 'No — immediate care',
      severity: 'danger',
      whatToDo:
        'Contact the pediatrician immediately or use emergency care as directed. Do not delay because the baby otherwise seems comfortable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm the stool timeline',
      body:
        'Write down when the baby was born, whether meconium passed, when the last stool occurred, and whether it was soft, hard, black, yellow, green, or bloody. Age and the first-stool history change the urgency.',
    },
    {
      title: 'Check feeding and wet diapers',
      body:
        'Note how often the baby feeds, whether you can hear swallowing, whether feeds have become shorter or weaker, and whether urine output has fallen. A feeding change can matter more than the missing stool itself.',
      destinationProblemSlug: 'newborn-feeding-less-than-usual',
    },
    {
      title: "Check the baby's belly, behavior, and temperature",
      body:
        'Look for swelling, firmness, pain, vomiting, unusual sleepiness, weak movement, or breathing trouble. If the baby feels warm or seems unwell, check the temperature with an age-appropriate digital thermometer.',
    },
    {
      title: 'Continue normal newborn feeds',
      body:
        "Offer breast milk or correctly prepared infant formula on the usual schedule. Do not dilute formula or add extra powder, and do not give a newborn water or juice unless the baby's clinician specifically instructs you to.",
    },
    {
      title: 'Avoid do-it-yourself constipation treatments',
      body:
        'Do not use a thermometer, cotton swab, suppository, enema, laxative, or repeated rectal stimulation to produce stool without direct pediatric guidance. These measures can cause injury or hide an important pattern.',
      destinationProblemSlug: 'newborn-straining-to-poop',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'No first bowel movement by forty-eight hours',
      description:
        'Delayed meconium can be a sign of Hirschsprung disease or another intestinal obstruction and needs prompt evaluation.',
      severity: 'danger',
    },
    {
      title: 'Green or brown vomit',
      description:
        'Green vomit can contain bile and, together with absent stool, may indicate a bowel obstruction. Go to an emergency department.',
      severity: 'danger',
    },
    {
      title: 'Swollen, firm, or painful abdomen',
      description:
        'Abdominal distention with no stool, vomiting, or poor feeding is not a routine constipation pattern.',
      severity: 'danger',
    },
    {
      title: 'Rectal temperature of 100.4°F or higher',
      description:
        'Any fever at this age requires immediate contact with the pediatrician or emergency evaluation as directed.',
      severity: 'danger',
    },
    {
      title: 'Poor feeding or fewer wet diapers',
      description:
        'Reduced stool combined with reduced intake or urine may indicate inadequate feeding or dehydration.',
      severity: 'warning',
    },
    {
      title: 'Hard, dry, or bloody stool',
      description: 'Hard newborn stool is abnormal, and visible blood should be reported to the pediatrician.',
      severity: 'warning',
    },
    {
      title: 'Hard to wake, limp, blue, or struggling to breathe',
      description:
        'These are emergency signs regardless of when the baby last pooped. Call emergency services.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can an exclusively breastfed newborn go a day without pooping?',
      answer:
        'It depends on age. During the first weeks, frequent stool helps show that milk intake is adequate. Around three to six weeks, some healthy breastfed babies begin going several days between soft stools while feeding and growing normally.',
    },
    {
      question: 'Is it normal for a formula-fed newborn to skip a day?',
      answer:
        'It can happen, but formula-fed babies usually stool more regularly. Watch closely for continued absence, hard stool, straining, irritability, vomiting, belly swelling, reduced feeding, or fewer wet diapers.',
    },
    {
      question: 'Does not pooping automatically mean constipation?',
      answer:
        'No. Constipation is more strongly suggested by hard, dry, painful stool than by frequency alone. A baby who eventually passes a large soft stool may not be constipated.',
    },
    {
      question: 'Is grunting and turning red a sign of constipation?',
      answer:
        'Not necessarily. Newborns often grunt, cry, and turn red while learning to coordinate pushing and relaxing. It is more concerning when no stool passes and the baby is persistently distressed, or when stool is hard or bloody.',
    },
    {
      question: 'Why do wet diapers matter when the problem is poop?',
      answer:
        'Stool and urine output help show whether a newborn is getting enough milk. By day five, CDC guidance expects at least six wet diapers and several stools each day for a breastfed newborn.',
    },
    {
      question: 'Should I give my newborn water or juice to make them poop?',
      answer:
        "No, not without specific instructions from the baby's clinician. Newborns should receive breast milk or properly prepared infant formula, and extra water can be dangerous.",
    },
    {
      question: 'Can I use a rectal thermometer or cotton swab to stimulate a bowel movement?',
      answer:
        'Do not insert anything solely to make the baby poop unless a clinician has shown you exactly what to do. Repeated rectal stimulation can injure delicate tissue and may obscure a pattern the pediatrician needs to assess.',
    },
    {
      question: 'What if my baby never passed the black first stool?',
      answer:
        'Tell the newborn care team immediately. Failure to pass meconium within forty-eight hours after birth is a recognized warning sign for an intestinal obstruction.',
    },
    {
      question: 'Is green vomit the same as ordinary spit-up?',
      answer:
        'No. Milky spit-up is common, but distinctly green vomit may contain bile. Green vomit with no stool or a swollen belly requires emergency evaluation.',
    },
    {
      question: 'What should I tell the pediatrician when I call?',
      answer:
        "Give the baby's age, feeding method, time of the last stool, whether meconium passed, stool consistency and color, feeding pattern, wet-diaper count, temperature, vomiting, belly changes, and behavior.",
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Newborn Breastfeeding Basics',
      url: 'https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/newborn-basics.html',
      sourceType: 'government',
      notes:
        'Provides first-week wet- and dirty-diaper expectations and lists reduced stool, urine, feeding, swallowing, and weight gain as possible signs that a breastfed newborn is not getting enough milk.',
    },
    {
      publisher: 'National Institute of Diabetes and Digestive and Kidney Diseases',
      title: 'Symptoms & Causes of Hirschsprung Disease',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/hirschsprung-disease/symptoms-causes',
      sourceType: 'government',
      notes:
        'Identifies no first bowel movement within 48 hours, green or brown vomit, abdominal swelling, and feeding problems as signs of intestinal obstruction in newborns with Hirschsprung disease.',
    },
    {
      publisher: 'MedlinePlus, U.S. National Library of Medicine',
      title: 'Constipation in infants and children',
      url: 'https://medlineplus.gov/ency/article/003125.htm',
      sourceType: 'government',
      notes:
        'Explains that soft infrequent stool may be normal, lists hard stool, pain, bloating, fussiness, and blood as constipation signs, and advises against laxatives or enemas without clinician approval.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: "Baby's First Days: Bowel Movements & Urination",
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Days-Bowel-Movements-and-Urination.aspx',
      sourceType: 'other',
      notes:
        'Describes normal newborn stool appearance and frequency, hard-stool concerns, less frequent stools in some breastfed babies by three to six weeks, and daily stool expectations for formula-fed infants.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'How to Tell if Your Breastfed Baby is Getting Enough Milk',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Tell-if-Baby-is-Getting-Enough-Milk.aspx',
      sourceType: 'other',
      notes:
        'Uses stool frequency, wet diapers, feeding frequency, swallowing, satisfaction, and weight as indicators of adequate milk intake during the newborn period.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Fever and Your Baby',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx?form=HealthyChildren',
      sourceType: 'other',
      notes:
        'Defines a rectal temperature of 100.4°F or higher as fever and advises immediate pediatric contact for babies three months old or younger.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Newborn diaper and feeding log',
      description:
        'A simple written or digital log helps track feeds, wet diapers, stools, stool appearance, and symptoms for the pediatrician.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Digital infant thermometer',
      description: 'An accurate thermometer helps identify fever when a newborn feels warm or acts unwell.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pediatrician or after-hours nurse line',
      description:
        'Use this service for age-specific advice when stool output changes, especially during the first week or when feeding and urine output are also reduced.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Lactation support',
      description:
        'A lactation service can observe latch and milk transfer when low stool output may be connected to breastfeeding difficulty.',
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
      relationshipType: 'cause',
    },
    {
      slug: 'newborn-straining-to-poop',
      anchorText: 'Can I ignore my newborn straining to poop?',
      relationshipType: 'sibling',
    },
  ],
};
