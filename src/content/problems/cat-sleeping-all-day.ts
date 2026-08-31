import type { ProblemSeed } from '../types';

export const catSleepingAllDay: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'cat-behavior-and-energy',
  slug: 'cat-sleeping-all-day',
  canonicalPath: '/pets/cats/behavior-and-energy/cat-sleeping-all-day/',
  name: 'Cat Sleeping All Day',
  eyebrow: 'Pets · Cats · Behavior & Energy',

  h1: 'Can I Ignore My Cat Sleeping All Day?',
  seoTitle: "Cat Sleeping All Day: What's Normal and When to Call the Vet",
  metaDescription:
    'Cats sleep a lot, but a sudden jump in sleep or low energy while awake can signal pain or illness. Learn what is normal and when to call a vet.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I just let my cat sleep?',
  canIUseItLabel: 'Yes, if this is normal for them',

  shortAnswer:
    'Usually. Cats naturally spend a lot of time resting and sleeping. If your cat wakes normally, eats, drinks, uses the litter box and still acts like themselves while awake, a sleepy-looking day is usually not a problem. A sudden increase in sleep or low energy while awake is different.',

  whyItMattersHeading: 'Sleepy Cat or Lethargic Cat?',
  whyItMatters: [
    'The important question is not how many hours your cat appears to sleep. It is whether this is normal for your cat and what happens when they are awake. A healthy cat may nap through much of the day and then get up for food, grooming, attention, play or whatever else normally interests them.',
    'Lethargy looks different. A lethargic cat stays unusually dull, weak or uninterested even after waking. Cats may become less active or sleep more when they are in pain or sick, and behavior changes can be subtle. Appetite, grooming, movement, breathing, hiding and litter-box habits often tell you more than the sleep itself.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Reviewed against CDC, Cornell, Merck Veterinary Manual, AAHA and feline behavior guidance for normal rest, behavior change, pain and illness warning signs.',
  disclaimer:
    "This page provides general triage guidance for changes in a cat's sleep and activity. It cannot identify the cause of lethargy or replace an examination when your cat appears sick.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'normal-sleep-pattern',
      label: "This is my cat's normal routine",
      shortDescription: 'Your cat has always slept a lot but wakes normally and behaves normally when awake.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'THIS SOUNDS NORMAL',
      resultBody:
        'A cat that sleeps frequently but still wakes readily, eats normally, grooms, moves comfortably and has normal alert periods is showing a much more reassuring pattern than a cat that is unusually sluggish while awake.',
      recommendedAction:
        'Let your cat rest. Keep an eye on their usual appetite, activity and litter-box habits rather than trying to count every nap.',
    },
    {
      slug: 'wakes-for-food-and-play',
      label: 'My cat wakes up normally for food or play',
      shortDescription:
        'Your cat may sleep much of the day but becomes alert when something interesting happens.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'GOOD SIGN',
      resultBody:
        'Normal responsiveness is reassuring. If your cat wakes for familiar sounds, meals, attention or play and then behaves normally, the sleeping itself is less concerning.',
      recommendedAction: 'Continue your normal routine and watch for a meaningful change from this pattern.',
    },
    {
      slug: 'sudden-sleep-increase',
      label: 'My cat suddenly started sleeping much more',
      shortDescription:
        "The amount of sleep or inactivity is noticeably different from your cat's usual behavior.",
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: "DON'T DISMISS A SUDDEN CHANGE",
      resultBody:
        'A new drop in activity can be an early sign of pain or illness even when there is no dramatic symptom. Cats can hide discomfort surprisingly well.',
      recommendedAction:
        'Watch closely for appetite, grooming, movement, breathing or litter-box changes and contact your veterinarian if your cat is clearly less energetic than usual or the change continues.',
    },
    {
      slug: 'sleepy-and-not-eating',
      label: 'My cat is sleeping more and eating less',
      shortDescription: 'Increased sleep or inactivity is happening along with reduced appetite.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CALL YOUR VETERINARIAN',
      resultBody:
        'Reduced appetite plus unusual lethargy is more concerning than extra sleep by itself. Many illnesses can cause both signs and the cause cannot be determined from sleep behavior alone.',
      recommendedAction:
        'Contact your veterinarian and describe the change in appetite and energy. Seek faster care if your cat is becoming weak, difficult to wake or otherwise worsening.',
    },
    {
      slug: 'hard-to-wake',
      label: 'My cat is unusually hard to wake',
      shortDescription:
        'Your cat barely responds to touch, familiar sounds or other things that normally get their attention.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'THIS IS NOT NORMAL SLEEP',
      resultBody:
        'Profound weakness, reduced responsiveness or loss of consciousness should not be treated as an especially deep nap. These signs can occur with serious illness or other emergencies.',
      recommendedAction:
        'Seek urgent veterinary care. If your cat is unresponsive, collapsing or having trouble breathing, treat it as an emergency.',
    },
    {
      slug: 'sleeping-and-hiding',
      label: 'My cat is sleeping more and hiding',
      shortDescription: 'Your cat has become less social and is spending unusual amounts of time tucked away.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'LOOK FOR PAIN OR ILLNESS',
      resultBody:
        'Withdrawal and reduced activity can accompany pain or disease. The combination matters more if hiding is new for your cat or comes with appetite, grooming or movement changes.',
      recommendedAction:
        'Check whether your cat is eating, drinking, moving and using the litter box normally. Arrange veterinary advice if the behavior is a clear change from normal.',
    },
    {
      slug: 'sleeping-and-moving-differently',
      label: 'My cat sleeps more and avoids jumping or moving',
      shortDescription:
        'Your cat is less active and seems reluctant to climb, jump, stretch or change position.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'PAIN MAY BE PART OF IT',
      resultBody:
        'Cats in pain may become less active, sleep more, change resting positions or stop doing movements they previously handled easily. This can be especially easy to mistake for slowing down with age.',
      recommendedAction:
        'Do not force exercise or jumping. Arrange a veterinary evaluation and mention the specific movements your cat has stopped doing.',
    },
    {
      slug: 'abnormal-breathing',
      label: 'My sleeping cat is breathing abnormally',
      shortDescription:
        'Breathing looks labored, unusually fast or difficult, or your cat is breathing with an open mouth.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'GET URGENT HELP',
      resultBody:
        'Difficulty breathing is not a normal consequence of being sleepy. Respiratory disease and other serious conditions can cause lethargy along with abnormal breathing.',
      recommendedAction:
        'Keep your cat calm and seek urgent veterinary care. Avoid unnecessary handling or anything that makes breathing harder.',
    },
    {
      slug: 'sleepy-with-vomiting-or-diarrhea',
      label: 'My cat is sleepy and also vomiting or has diarrhea',
      shortDescription: 'The change in energy is happening with gastrointestinal symptoms.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE EXTRA SYMPTOMS MATTER',
      resultBody:
        'Vomiting or diarrhea together with unusual lethargy makes simple sleepiness a less reassuring explanation. Illness, dehydration and other problems may be involved.',
      recommendedAction:
        'Contact your veterinarian. Seek more urgent care if your cat becomes weak, difficult to wake, cannot keep water down or develops other severe signs.',
    },
    {
      slug: 'expected-medication-sleepiness',
      label: 'My veterinarian said a medication or procedure may make my cat sleepy',
      shortDescription:
        'The sleepiness started after veterinary treatment and matches an effect you were told to expect.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'FOLLOW THE INSTRUCTIONS YOU WERE GIVEN',
      resultBody:
        'Some medications and procedures can reduce activity or cause sedation. What is expected depends on the treatment and the individual cat, so the instructions from the treating clinic matter.',
      recommendedAction:
        'Follow the discharge or medication instructions. Contact the clinic if the sedation seems stronger than expected, your cat is getting worse or another concerning sign appears.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Lots of sleep may be completely normal',
      description:
        "If this is your cat's usual pattern and normal behavior returns when they wake, there may be nothing to fix.",
      severity: 'info',
      chainLabel: 'Normal sleep',
    },
    {
      stageLabel: 'IF THE PATTERN CHANGES',
      title: 'Extra sleep can be an early clue',
      description:
        'A noticeable change in activity or sleep can appear with pain, illness, stress or other changes in health.',
      severity: 'caution',
      chainLabel: 'Behavior change',
    },
    {
      stageLabel: 'IF YOUR CAT IS LETHARGIC',
      title: 'The problem is no longer just sleep',
      description:
        'A cat that remains dull, weak, withdrawn or uninterested while awake may need veterinary evaluation.',
      severity: 'warning',
      chainLabel: 'Reduced activity',
    },
    {
      stageLabel: 'IF OTHER SIGNS APPEAR',
      title: 'Appetite and movement changes raise concern',
      description:
        'Reduced eating, abnormal breathing, vomiting, diarrhea, hiding, reduced grooming or difficulty moving make illness or pain more likely explanations for the inactivity.',
      severity: 'warning',
      chainLabel: 'Additional symptoms',
    },
    {
      stageLabel: 'EMERGENCY SIGNS',
      title: 'Severe weakness or breathing trouble needs urgent care',
      description:
        'A cat that is unresponsive, collapsing or struggling to breathe should not be watched at home as though it is simply sleeping deeply.',
      severity: 'danger',
      chainLabel: 'Urgent veterinary care',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: "This has always been my cat's sleep pattern and they act normal when awake",
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Let your cat sleep and continue watching their normal appetite, activity, grooming and litter-box habits.',
    },
    {
      situation: 'My cat wakes normally for meals, attention or play',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Normal responsiveness is reassuring. Focus on whether their awake behavior changes rather than the number of naps.',
    },
    {
      situation: 'My cat is suddenly sleeping much more but has no obvious emergency signs',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Watch their awake behavior closely and contact your veterinarian if they remain unusually sluggish or the change continues.',
    },
    {
      situation: 'My older cat has developed a new sleeping or activity pattern',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Bring up the change with your veterinarian rather than assuming it is just aging. New behavior changes in older cats can accompany pain or disease.',
    },
    {
      situation: 'My cat is sleeping more and eating less',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact your veterinarian. Appetite loss combined with reduced energy deserves more attention than extra sleep alone.',
    },
    {
      situation: 'My cat is unusually difficult to wake or very weak',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Seek urgent veterinary care rather than waiting to see whether your cat becomes more alert on their own.',
    },
    {
      situation: 'My cat has difficult, labored or open-mouth breathing',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Seek urgent veterinary care and keep your cat as calm as possible during transport.',
    },
    {
      situation: 'Sleepiness followed a treatment that my veterinarian said could cause sedation',
      ignoreAnswer: 'Only as directed',
      severity: 'caution',
      whatToDo:
        'Follow the instructions from the treating clinic and contact them if the sedation is stronger than expected or your cat develops other concerning signs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Watch what happens when your cat wakes',
      body:
        'Notice whether your cat becomes normally alert and interested in food, people, play or familiar routines. Persistent dullness while awake is more important than the fact that your cat takes many naps.',
    },
    {
      title: 'Check the everyday basics',
      body:
        'Look for changes in eating, drinking, grooming, movement and litter-box use. These can help separate a normal sleepy day from a broader change in health.',
    },
    {
      title: "Compare with your cat's own baseline",
      body:
        'Think about what is normal for this individual cat. A major change from a familiar routine is more useful information than trying to decide whether an arbitrary amount of sleep is too much.',
    },
    {
      title: 'Record unusual behavior',
      body:
        'A short phone video of abnormal breathing, difficulty moving, unusual posture or poor responsiveness can help your veterinarian understand what you are seeing at home.',
    },
    {
      title: 'Call when sleepiness comes with other changes',
      body:
        'Contact your veterinarian if increased sleep is accompanied by reduced appetite, hiding, weakness, movement changes, abnormal breathing, vomiting, diarrhea or other signs of illness.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Your cat is difficult or impossible to wake',
      description: 'Markedly reduced responsiveness should not be assumed to be deep sleep.',
      severity: 'danger',
    },
    {
      title: 'Your cat is struggling to breathe',
      description:
        'Labored breathing, obvious respiratory distress or open-mouth breathing needs urgent veterinary attention.',
      severity: 'danger',
    },
    {
      title: 'Your cat collapses or cannot stand normally',
      description: 'Severe weakness or collapse is not normal sleepiness.',
      severity: 'danger',
    },
    {
      title: 'The gums look very pale, white or bluish',
      description:
        'Abnormal gum color together with weakness or breathing changes can signal a serious problem.',
      severity: 'danger',
    },
    {
      title: 'Your cat stops eating and becomes unusually lethargic',
      description: 'Loss of appetite combined with a clear drop in energy warrants veterinary attention.',
      severity: 'warning',
    },
    {
      title: 'Your cat is hiding and moving differently',
      description:
        'New withdrawal, reluctance to jump, abnormal posture or reduced grooming can be signs of pain or illness.',
      severity: 'warning',
    },
    {
      title: 'Vomiting or diarrhea comes with marked lethargy',
      description:
        'Multiple symptoms make ordinary sleep a less likely explanation for the change in behavior.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'How much sleep is too much for a cat?',
      answer:
        'There is no useful universal cutoff that tells you a cat is sick just from sleep duration. Compare your cat with their own normal pattern and pay attention to how alert and functional they are when awake.',
    },
    {
      question: 'How can I tell normal sleep from lethargy?',
      answer:
        'A normally sleeping cat wakes and returns to familiar behaviors. A lethargic cat remains unusually dull, weak, slow or uninterested even after waking.',
    },
    {
      question: 'Do older cats sleep more?',
      answer:
        'Sleep and activity patterns can change with age, but a new change should not automatically be blamed on aging. Pain, reduced mobility and disease can also change how an older cat rests and moves.',
    },
    {
      question: 'Should I keep waking my cat to check on them?',
      answer:
        'No. Cats need uninterrupted rest. You can notice whether your cat responds normally when meals, familiar sounds or normal household activity naturally give them a reason to wake.',
    },
    {
      question: 'Can pain make a cat look sleepy?',
      answer:
        'Yes. Cats in pain may reduce activity, sleep more, hide, groom less, avoid jumping or rest in unusual positions.',
    },
    {
      question: 'Can boredom make my cat sleep more?',
      answer:
        'A low-stimulation environment can affect activity patterns. Provide normal opportunities for play, climbing, scratching and interaction, but do not assume boredom explains a sudden or persistent drop in energy.',
    },
    {
      question: 'Can medication make my cat sleepy?',
      answer:
        'Some medications and veterinary procedures can cause sedation. Follow the instructions for the specific treatment and call the prescribing clinic if your cat seems more sedated than expected.',
    },
    {
      question: 'Is eating normally enough to prove my cat is fine?',
      answer:
        'It is reassuring but not definitive. A sudden behavior change, abnormal breathing, weakness, pain signs or other symptoms still deserve attention even if your cat continues to eat.',
    },
    {
      question: 'Should I track exactly how long my cat sleeps?',
      answer:
        'You usually do not need a stopwatch. Tracking changes in appetite, responsiveness, play, grooming, movement and litter-box habits is often more useful.',
    },
    {
      question: 'When is a sleepy cat an emergency?',
      answer:
        'Seek urgent veterinary care if your cat is unresponsive, collapses, has severe weakness, struggles to breathe or develops very pale, white or bluish gums.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Cats | Healthy Pets, Healthy People',
      url: 'https://www.cdc.gov/healthy-pets/about/cats.html',
      sourceType: 'government',
      notes:
        'CDC guidance identifies sluggish or depressed behavior and abnormal breathing as signs of sickness in cats and advises contacting a veterinarian when signs of illness appear.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Loving Care for Older Cats',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/loving-care-older-cats',
      sourceType: 'academic',
      notes:
        'Cornell describes changes in sleeping and eating patterns among behavioral or health changes in older cats that warrant veterinary attention.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Medical Causes of Behavioral Signs',
      url: 'https://www.merckvetmanual.com/multimedia/table/medical-causes-of-behavioral-signs',
      sourceType: 'other',
      notes:
        'Merck lists lethargy, withdrawal, reduced grooming, altered activity and altered sleep among behavioral signs that can accompany illness, pain and other medical conditions.',
    },
    {
      publisher: 'Journal of Feline Medicine and Surgery',
      title: 'Behavioral awareness in the feline consultation: Understanding physical and emotional health',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11395291/',
      sourceType: 'academic',
      notes:
        "The review identifies sleeping more and inactivity as behavior changes that may be associated with disease or pain and emphasizes assessing changes from the individual cat's normal behavior.",
    },
    {
      publisher: 'American Animal Hospital Association',
      title: "What's Wrong? Common Pet Pain Signs",
      url: 'https://www.aaha.org/resources/whats-wrong-common-pet-pain-signs/',
      sourceType: 'industry',
      notes:
        'AAHA notes that lethargy or unusually increased sleeping can indicate pain and recommends attention to behavioral and posture changes.',
    },
    {
      publisher: 'AAFP and ISFM',
      title: 'AAFP and ISFM Feline Environmental Needs Guidelines',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11383066/',
      sourceType: 'academic',
      notes:
        'The feline environmental guidelines describe resting and sleeping areas as core resources and recommend opportunities for play and normal species-specific behavior.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Daily behavior log',
      description:
        'A simple record of appetite, activity, grooming, litter-box use and unusual hiding can make changes easier to recognize.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Phone camera',
      description:
        'Video can capture abnormal breathing, posture, movement or responsiveness that may not appear during a veterinary visit.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinary examination',
      description:
        'An examination can help distinguish normal resting behavior from pain, illness, mobility problems or other causes of lethargy.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Interactive play routine',
      description:
        "Regular opportunities for play and predatory behavior can help you see what your cat's normal awake activity looks like.",
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'cat-hiding-suddenly',
      anchorText: 'Is your cat suddenly hiding too?',
      relationshipType: 'sibling',
    },
    {
      slug: 'cat-coughing',
      anchorText: 'Is your sleepy cat coughing as well?',
      relationshipType: 'escalation',
    },
    { slug: 'cat-diarrhea', anchorText: 'Does your cat also have diarrhea?', relationshipType: 'escalation' },
  ],
};
