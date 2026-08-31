import type { ProblemSeed } from '../types';

export const newbornSneezing: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'newborn-breathing-and-sounds',
  slug: 'newborn-sneezing',
  canonicalPath: '/babies/newborns/breathing-and-sounds/newborn-sneezing/',
  name: 'Frequent Sneezing in a Newborn',
  eyebrow: 'Babies · Newborns · Breathing & Sounds',

  h1: 'Can I Ignore Frequent Sneezing in My Newborn?',
  seoTitle: 'Newborn Sneezing: What’s Normal and When to Get Help',
  metaDescription:
    'Frequent sneezing is often a normal newborn reflex. Learn when congestion, fever, poor feeding, color changes, or hard breathing make it urgent.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I watch this at home?',
  canIUseItLabel: 'Yes, if sneezing is the only symptom',

  shortAnswer:
    'Usually, yes. Frequent sneezing can be normal when your newborn is feeding, waking, breathing comfortably, and maintaining normal color. Fever, poor feeding, unusual sleepiness, or breathing difficulty changes the answer.',

  whyItMattersHeading: 'The Rest of Your Baby Matters More Than the Sneeze Count',
  whyItMatters: [
    'Newborns commonly sneeze. It is a reflex that may follow ordinary nasal irritation, a strong odor, or another disturbance, and frequent sneezing by itself does not prove that your baby has a cold or allergy.',
    'Sneezing can also occur with RSV and other respiratory infections. Newborn illness may begin with subtle changes, so pay closer attention to breathing effort, feeding, alertness, temperature, congestion, coughing, and skin color than to how many times your baby sneezes.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Medical Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked normal newborn sneezing, respiratory infection signs, fever, feeding changes, breathing emergencies, congestion care, medicines, and safe sleep against AAP, CDC, and FDA guidance.',
  disclaimer:
    'General triage information only, not a diagnosis. Newborns can show subtle signs of illness; contact your baby’s clinician whenever behavior, feeding, breathing, temperature, or color changes from normal.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'sneezing-only-otherwise-normal',
      label: 'Frequent sneezing, but everything else is normal',
      shortDescription:
        'Your newborn feeds normally, wakes for feeds, has normal color, and breathes comfortably without coughing, congestion, or fever.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually a normal newborn reflex',
      resultBody:
        'Sneezing is common in newborns and may be triggered by ordinary sensory or nasal irritation. When feeding, breathing, alertness, color, and temperature remain normal, frequency alone does not make it an illness.',
      recommendedAction:
        'Observe rather than treat the sneezing. Recheck the situation if congestion, coughing, fever, poor feeding, unusual sleepiness, or any breathing change appears.',
    },
    {
      slug: 'smoke-or-vape-exposure',
      label: 'Sneezing happens around smoke or vape aerosol',
      shortDescription: 'Someone smokes or vapes in the home, car, another room, or near the baby.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Remove the exposure, not just the odor',
      resultBody:
        'Tobacco smoke and vape aerosol are not harmless newborn irritants. Ventilation, open windows, fans, and smoking in another room do not reliably prevent exposure.',
      recommendedAction:
        'Make the home and car smoke-free and move the baby away from active smoke or aerosol. Contact the pediatrician if coughing, wheezing, congestion, poor feeding, or breathing changes occur.',
    },
    {
      slug: 'mild-nasal-congestion',
      label: 'Sneezing comes with a mildly stuffy nose',
      shortDescription:
        'The nose sounds blocked or contains visible mucus, but the baby still feeds and breathes comfortably and has no fever.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Gentle congestion care is reasonable',
      resultBody:
        'Mild nasal blockage can trigger sneezing and make a newborn sound congested. Home care is reasonable while feeding, color, alertness, and breathing effort remain normal.',
      recommendedAction:
        'Use plain saline drops and gentle suction only when mucus is interfering with breathing or feeding. Do not use medicated nose drops or cold medicine unless your baby’s clinician directs it.',
    },
    {
      slug: 'new-cold-like-symptoms',
      label: 'Sneezing comes with a cough, runny nose, or sick contact',
      shortDescription:
        'Your newborn has additional cold-like symptoms or has been closely exposed to someone with a respiratory illness.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A respiratory infection is possible',
      resultBody:
        'RSV and other respiratory infections can include sneezing, congestion, coughing, and reduced appetite. Very young infants may show only subtle changes and may not develop a fever.',
      recommendedAction:
        'Contact your baby’s clinician today and describe every symptom and known exposure. Seek urgent help sooner if feeding, alertness, color, or breathing worsens.',
    },
    {
      slug: 'feeding-less-or-tiring',
      label: 'The baby is feeding less or tiring during feeds',
      shortDescription:
        'Your newborn cannot finish feeds, repeatedly stops to breathe, has a weaker suck, or is taking noticeably less milk.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is more than isolated sneezing',
      resultBody:
        'A sudden feeding change is an important newborn illness sign. Congestion or respiratory illness can interfere with feeding, and poor intake can lead to dehydration.',
      recommendedAction:
        'Call your baby’s clinician now. Seek emergency care if the baby cannot stay awake to feed, cannot take milk, looks weak or floppy, or is working hard to breathe.',
    },
    {
      slug: 'newborn-fever',
      label: 'Your newborn has a temperature of 100.4°F or higher',
      shortDescription:
        'A rectal temperature reaches the fever threshold, even if sneezing is the only other symptom.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A newborn fever needs immediate medical guidance',
      resultBody:
        'Fever at this age can be the first sign of a serious infection and requires prompt assessment even when the baby otherwise appears comfortable.',
      recommendedAction:
        'Call your baby’s clinician immediately and follow the instructions for evaluation. Do not give fever or cold medicine unless a clinician specifically tells you what to give.',
    },
    {
      slug: 'increased-breathing-effort',
      label: 'Breathing is fast, noisy, or visibly difficult',
      shortDescription:
        'The ribs pull in, the nostrils flare, the baby grunts, wheezes, struggles for breaths, or cannot feed comfortably because of breathing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a breathing emergency',
      resultBody:
        'These are signs of respiratory distress, not a harmless extension of newborn sneezing. The baby may not be moving air effectively or maintaining enough oxygen.',
      recommendedAction:
        'Call 911 if the baby is struggling for each breath or can barely cry. Otherwise, seek emergency medical evaluation now rather than waiting for the sneezing to stop.',
    },
    {
      slug: 'blue-color-apnea-or-unresponsive',
      label: 'Lips or face turn blue or gray, breathing pauses, or the baby is hard to wake',
      shortDescription:
        'The baby has abnormal color, stops breathing, becomes limp or unusually weak, or does not respond normally.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Call 911 now',
      resultBody:
        'Blue or gray color, pauses in breathing, severe weakness, and inability to wake can indicate inadequate oxygen or another life-threatening newborn emergency.',
      recommendedAction:
        'Call 911 immediately. Follow the dispatcher’s instructions and begin infant CPR if the baby is not breathing and you are instructed or trained to do so.',
    },
    {
      slug: 'high-risk-newborn-with-symptoms',
      label: 'A premature or medically high-risk newborn develops respiratory symptoms',
      shortDescription:
        'The baby was born prematurely or has a heart, lung, immune, swallowing, or mucus-clearing condition and now has congestion, coughing, or reduced feeding.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Call early because the risk is higher',
      resultBody:
        'Premature infants and babies with certain medical conditions have a higher risk of severe illness from RSV and other respiratory infections.',
      recommendedAction:
        'Contact the baby’s clinician or specialty team promptly, even if the symptoms initially appear mild. Seek emergency care for breathing difficulty, abnormal color, apnea, or marked weakness.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The sneeze may simply clear an irritated nose',
      description:
        'A healthy newborn may sneeze repeatedly without being sick. If the baby remains comfortable and otherwise normal, the episode may end without treatment.',
      severity: 'info',
      chainLabel: 'Nasal trigger → sneeze',
    },
    {
      stageLabel: 'IF THE PATTERN CONTINUES',
      title: 'Other symptoms become more useful than frequency',
      description:
        'Sneezing alone still may be normal, but congestion, coughing, feeding changes, fever, or altered behavior can reveal that illness is developing.',
      severity: 'caution',
      chainLabel: 'Persistent pattern → reassess',
    },
    {
      stageLabel: 'IF RESPIRATORY SYMPTOMS APPEAR',
      title: 'A viral infection becomes possible',
      description:
        'RSV and other respiratory infections may begin with congestion, a runny nose, sneezing, reduced appetite, or coughing. Very young infants may not have a fever.',
      severity: 'caution',
      chainLabel: 'Virus → congestion or cough',
    },
    {
      stageLabel: 'IF FEEDING DECLINES',
      title: 'Dehydration and weakness can follow',
      description:
        'A blocked nose or respiratory illness can make feeding harder. Poor intake and markedly fewer wet diapers indicate that the problem is affecting more than the nose.',
      severity: 'warning',
      chainLabel: 'Poor intake → dehydration risk',
    },
    {
      stageLabel: 'IF BREATHING OR COLOR CHANGES',
      title: 'The situation can become life-threatening',
      description:
        'Retractions, grunting, struggling for breath, apnea, abnormal color, or inability to wake require emergency help.',
      severity: 'danger',
      chainLabel: 'Respiratory distress → emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Frequent sneezing is the only symptom and the baby otherwise looks normal',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Observe. No treatment is needed if feeding, alertness, color, temperature, and breathing remain normal.',
    },
    {
      situation: 'Sneezing stops after dust or strong fragrance is removed',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Keep the area well ventilated and avoid heavily scented sprays, cleaners, and personal products near the baby. Reassess if the sneezing continues away from the trigger.',
    },
    {
      situation: 'Sneezing occurs around tobacco, cannabis smoke, or vape aerosol',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Remove the baby from the exposure and make the home and car smoke-free. Opening a window or smoking in another room is not adequate protection.',
    },
    {
      situation: 'The nose is mildly blocked, but feeding and breathing remain comfortable',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Use plain saline and gentle suction when needed. Contact the pediatrician if congestion interferes with feeding, worsens, or comes with other illness signs.',
    },
    {
      situation: 'A cough, runny nose, reduced activity, or known sick contact appears',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Contact your baby’s clinician today. Newborn respiratory infections can begin subtly and do not always cause fever.',
    },
    {
      situation: 'The baby feeds less, tires during feeds, or has markedly fewer wet diapers',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Call the baby’s clinician now. Seek faster help if the baby is weak, hard to wake, unable to take milk, or breathing abnormally.',
    },
    {
      situation: 'A rectal temperature is 100.4°F or higher',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Call your baby’s clinician immediately and follow the instructions for urgent evaluation.',
    },
    {
      situation: 'Ribs pull in, the baby grunts, breathing pauses, or color turns blue or gray',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Call 911 for struggling breaths, apnea, abnormal color, or inability to wake. Do not wait to see whether another sneeze occurs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the whole baby, not the sneeze count',
      body:
        'Look at breathing effort, skin and lip color, alertness, feeding, wet diapers, coughing, and nasal discharge. If the baby feels warm or seems ill, check the temperature with a reliable digital thermometer.',
    },
    {
      title: 'Remove airborne irritants',
      body:
        'Keep smoke, vape aerosol, air fresheners, perfume, scented sprays, harsh cleaners, and visible dust away from the baby. Do not rely on fans or open windows to make indoor smoking safe.',
    },
    {
      title: 'Clear only actual nasal blockage',
      body:
        'If mucus is interfering with breathing or feeding, use plain saline drops followed by gentle suction with a bulb syringe or infant nasal aspirator. Sneezing alone does not require suction.',
      destinationProblemSlug: 'newborn-stuffy-nose',
    },
    {
      title: 'Watch feeding and wet diapers closely',
      body:
        'Notice whether the baby wakes for feeds, sucks normally, finishes a usual feed, and continues producing wet diapers. Call promptly for a clear change from the baby’s normal pattern.',
      destinationProblemSlug: 'newborn-feeding-less-than-usual',
    },
    {
      title: 'Keep sleep flat and safe',
      body:
        'Place the baby on their back on a firm, flat sleep surface. Do not incline the mattress or use pillows, wedges, positioners, swings, or car seats as a congestion treatment.',
    },
    {
      title: 'Separate noisy breathing from ordinary sneezing',
      body:
        'Sneezing comes from the nose. Persistent grunting, wheezing, stridor, chest retractions, or other unusual breathing sounds need a different assessment.',
      destinationProblemSlug: 'newborn-noisy-breathing',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A temperature of 100.4°F or higher',
      description:
        'Any fever in a newborn requires immediate medical guidance, even if the baby appears comfortable and is still feeding.',
      severity: 'danger',
    },
    {
      title: 'Struggling, fast, or visibly difficult breathing',
      description:
        'Watch for ribs pulling in, nostril flaring, grunting with breaths, wheezing, or difficulty crying or feeding because of breathing effort.',
      severity: 'danger',
    },
    {
      title: 'Blue or gray lips, tongue, or face',
      description: 'Persistent abnormal color can indicate inadequate oxygen and requires emergency help.',
      severity: 'danger',
    },
    {
      title: 'Pauses in breathing',
      description:
        'Apnea is not ordinary sneezing. Call 911 if the baby stops breathing or has concerning breathing pauses with color or responsiveness changes.',
      severity: 'danger',
    },
    {
      title: 'The baby is hard to wake, weak, or floppy',
      description:
        'A newborn who is unusually unresponsive, barely moving, or markedly weaker than normal needs urgent evaluation.',
      severity: 'danger',
    },
    {
      title: 'A sudden feeding change',
      description:
        'Weak sucking, inability to finish feeds, repeated tiring during feeds, or taking much less milk can be an early sign of newborn illness.',
      severity: 'warning',
    },
    {
      title: 'Signs of dehydration',
      description:
        'Markedly fewer wet diapers, a dry mouth, poor feeding, or no tears with crying can indicate inadequate fluid intake.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why does my newborn sneeze so often?',
      answer:
        'Sneezing is a common newborn reflex. A sensitive nose may react to mucus, dry air, dust, strong odors, or ordinary disturbances even when the baby is not sick.',
    },
    {
      question: 'Is there a normal number of newborn sneezes?',
      answer:
        'There is no useful cutoff based only on frequency. Breathing, feeding, alertness, temperature, color, and added symptoms are more important than counting individual sneezes.',
    },
    {
      question: 'Does sneezing mean my newborn has a cold or RSV?',
      answer:
        'Not by itself. Infection becomes more likely when sneezing comes with congestion, a runny nose, coughing, reduced feeding, lower activity, fever, wheezing, or breathing difficulty.',
    },
    {
      question: 'Can RSV occur without a fever?',
      answer:
        'Yes. Very young infants with RSV may have reduced activity, irritability, poor feeding, apnea, or breathing difficulty without developing a fever.',
    },
    {
      question: 'Should I use saline when sneezing is the only symptom?',
      answer:
        'Usually not. Plain saline is useful when sticky mucus or congestion is blocking the nose or interfering with feeding, not as a treatment for an otherwise normal sneeze.',
    },
    {
      question: 'Can I use a bulb syringe or nasal aspirator?',
      answer:
        'Yes, when there is actual mucus or blockage. Use gentle suction, follow the product instructions, and stop if the nose becomes irritated or bleeds.',
    },
    {
      question: 'Can I give my newborn cold medicine or medicated nose drops?',
      answer:
        'No, unless your baby’s clinician specifically directs it. Cough and cold medicines can cause serious side effects in infants, and plain saline is different from medicated drops.',
    },
    {
      question: 'Should I prop up the crib mattress if the baby sounds congested?',
      answer:
        'No. Babies should sleep on their backs on a firm, flat surface. Pillows, wedges, inclined mattresses, swings, and car seats are not safe substitutes for a sleep surface.',
    },
    {
      question: 'Should I call the pediatrician even if there is no fever?',
      answer:
        'Yes if the baby develops a cough, breathing change, poor feeding, unusual sleepiness, weak movement, markedly fewer wet diapers, worsening congestion, or abnormal color.',
    },
    {
      question: 'Can fragrance, smoke, or vaping cause newborn sneezing?',
      answer:
        'Airborne irritants may trigger sneezing. Strong fragrance should be removed, while tobacco smoke, cannabis smoke, and vape aerosol should be kept completely out of the baby’s home and car environment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'American Academy of Pediatrics',
      title: 'How Your Newborn Behaves',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/How-Your-Newborn-Behaves.aspx',
      sourceType: 'other',
      notes:
        'Describes sneezes, hiccups, grunts, and other sounds as common newborn behaviors and notes that newborn reactions may follow disturbances or strong odors.',
    },
    {
      publisher: 'American Academy of Pediatrics',
      title: 'Newborn Illness - How to Recognize',
      url: 'https://www.healthychildren.org/English/tips-tools/Symptom-Checker/Pages/symptomviewer.aspx?symptom=Newborn+Illness+-+How+to+Recognize',
      sourceType: 'other',
      notes:
        'Explains that newborn illness signs may be subtle and identifies feeding changes, grunting, abnormal color, weakness, unusual sleepiness, and inability to wake as reasons for urgent care.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'RSV in Infants and Young Children',
      url: 'https://www.cdc.gov/rsv/infants-young-children/index.html',
      sourceType: 'government',
      notes:
        'Covers RSV symptoms in young infants, including reduced feeding, irritability, decreased activity, apnea, and breathing difficulty, plus higher risk in premature infants and children with certain conditions.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'About Respiratory Illnesses',
      url: 'https://www.cdc.gov/respiratory-viruses/about/index.html',
      sourceType: 'government',
      notes:
        'Lists emergency warning signs in children, including fast or difficult breathing, retractions, blue lips or face, dehydration, reduced alertness, and fever in very young infants.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Should You Give Kids Medicine for Coughs and Colds?',
      url: 'https://www.fda.gov/consumers/consumer-updates/should-you-give-kids-medicine-coughs-and-colds',
      sourceType: 'government',
      notes:
        'Warns that cough and cold medicines can cause serious side effects in infants and describes plain saline, cool mist, and nasal suction as non-drug congestion measures.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Providing Care for Babies to Sleep Safely',
      url: 'https://www.cdc.gov/sudden-infant-death/sleep-safely/index.html',
      sourceType: 'government',
      notes:
        'Recommends placing babies on their backs for sleep on a firm, flat, non-inclined surface and keeping soft bedding out of the sleep area.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Reliable digital thermometer',
      description:
        'Helps confirm whether a newborn who feels warm or seems unwell has a true fever. Ask the baby’s clinician to demonstrate the recommended method if you are unsure.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Plain infant saline and a gentle nasal aspirator',
      description:
        'Useful for loosening and removing mucus when congestion interferes with breathing or feeding. Choose unmedicated saline and follow the aspirator instructions.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pediatrician or pediatric nurse advice line',
      description:
        'Provides individualized guidance for new respiratory symptoms, feeding changes, fever, sick contacts, or uncertainty about whether emergency evaluation is needed.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'newborn-stuffy-nose',
      anchorText: 'Can I ignore a stuffy nose in my newborn?',
      relationshipType: 'sibling',
    },
    {
      slug: 'newborn-noisy-breathing',
      anchorText: 'Can I ignore noisy breathing in my newborn?',
      relationshipType: 'escalation',
    },
    {
      slug: 'newborn-feeding-less-than-usual',
      anchorText: 'Can I ignore my newborn feeding less than usual?',
      relationshipType: 'escalation',
    },
  ],
};
