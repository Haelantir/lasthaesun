import type { ProblemSeed } from '../types';

export const catStrainingToPee: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'cat-urinary-and-litter-box',
  slug: 'cat-straining-to-pee',
  canonicalPath: '/pets/cats/urinary-and-litter-box/cat-straining-to-pee/',
  name: 'Cat Straining to Pee',
  eyebrow: 'Pets · Cats · Urinary & Litter Box',

  h1: 'Can I Ignore My Cat Straining to Pee?',
  seoTitle: 'Cat Straining to Pee? When It’s an Emergency',
  metaDescription:
    'Straining can mean bladder pain or a blocked urethra. Learn when little or no urine means an emergency and what to do right now.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'severe',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I wait and see?',
  canIUseItLabel: 'No — don’t wait it out',

  shortAnswer:
    'No. Straining to pee can come from painful lower urinary tract disease and it can also be a sign of a blocked urethra. If your cat is repeatedly trying to urinate but producing only drops or no urine, especially if your cat is male, go to an emergency veterinary hospital now.',

  whyItMattersHeading: 'Why Straining to Pee Can Be an Emergency',
  whyItMatters: [
    'Cats strain to urinate for several reasons including bladder inflammation, urinary stones, infection and urethral obstruction. These problems can look frustratingly similar at home. A cat with bladder inflammation may keep visiting the litter box because urination hurts. A cat with a urethral blockage may make the same repeated attempts because urine physically cannot get out.',
    'The blockage is the part you cannot safely miss. Male cats are at higher risk because their urethra is narrower. If urine flow becomes completely blocked, waste products and potassium can build up in the blood and the cat can become critically ill. You do not need to identify the exact cause before seeking care. The immediate question is whether your cat is actually passing a normal amount of urine.',
  ].join('\n\n'),

  redFlagsHeading: 'Go to an Emergency Vet Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked against Cornell, Merck Veterinary Manual, ACVS and NLM/PubMed sources covering feline lower urinary tract disease and urethral obstruction.',
  disclaimer:
    'General triage guidance for cat owners. Urinary straining cannot be diagnosed safely from symptoms alone. Suspected urethral obstruction requires immediate veterinary care.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'repeated-attempts-no-urine',
      label: 'My cat keeps trying but no urine comes out',
      shortDescription:
        'Your cat repeatedly enters the litter box, squats or strains but you cannot find urine afterward.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a urinary blockage',
      resultBody:
        'Repeated unsuccessful attempts to urinate are a classic warning sign of urethral obstruction. A complete blockage prevents the bladder from emptying and can cause dangerous changes in kidney function and blood electrolytes.',
      recommendedAction:
        'Go to an emergency veterinary hospital now. Do not wait to see whether the cat eventually urinates and do not delay the trip while trying home treatments.',
    },
    {
      slug: 'only-drops-coming-out',
      label: 'Only a few drops are coming out',
      shortDescription:
        'Your cat keeps straining and produces tiny spots or drops instead of a normal urination.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Drops do not rule out an obstruction',
      resultBody:
        'A partially or severely obstructed cat may still pass a very small amount of urine. Seeing a few drops does not prove that the bladder is emptying normally.',
      recommendedAction:
        'Seek urgent veterinary care. If the attempts are repeated or your cat is male, use an emergency veterinary service rather than watching at home.',
    },
    {
      slug: 'male-cat-output-unclear',
      label: 'My male cat is straining and I cannot tell how much he peed',
      shortDescription:
        'There are several cats in the home or the litter makes urine output difficult to judge.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not assume he is still urinating normally',
      resultBody:
        'Male cats are at greater risk of urethral obstruction. If repeated straining is happening and you cannot confirm normal urine output, the uncertainty itself matters because waiting for clearer signs can delay treatment.',
      recommendedAction:
        'Contact an emergency veterinary hospital and describe the repeated straining and uncertain urine output. Do not spend a long period trying to prove whether he is blocked before seeking care.',
    },
    {
      slug: 'normal-urine-but-straining',
      label: 'My cat is still making normal-sized urine clumps',
      shortDescription:
        'You can confirm substantial urine output but your cat strains, urinates frequently or appears uncomfortable.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'A complete blockage is less likely but this still needs attention',
      resultBody:
        'Normal urine output makes complete urethral obstruction less likely at that moment. Straining can still indicate painful bladder inflammation, stones or another lower urinary tract problem.',
      recommendedAction:
        'Arrange veterinary care promptly and keep watching urine output. If the amount drops sharply, repeated attempts become unproductive or your cat becomes ill, switch to emergency care.',
    },
    {
      slug: 'blood-in-urine',
      label: 'There is blood in the urine',
      shortDescription: 'Your cat is passing urine but you can see pink, red or blood-tinged urine.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Blood points to urinary tract disease',
      resultBody:
        'Blood can occur with bladder inflammation, stones and other urinary tract problems. It does not tell you the cause and it does not prove that the urethra is open enough.',
      recommendedAction:
        'Arrange veterinary care promptly. If urine output becomes very small or stops, treat the situation as an emergency.',
    },
    {
      slug: 'crying-or-genital-licking',
      label: 'My cat cries while trying to pee or keeps licking the genital area',
      shortDescription: 'Urination appears painful or your cat is repeatedly focused on the genital area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Your cat is showing signs of urinary pain',
      resultBody:
        'Crying during urination and frequent genital licking are recognized signs of lower urinary tract disease. They can occur with an obstruction as well as with painful non-obstructive conditions.',
      recommendedAction:
        'Check whether normal urine is actually being produced and arrange veterinary care. If attempts are unproductive or only drops appear, go to emergency care.',
    },
    {
      slug: 'vomiting-lethargic-or-weak',
      label: 'My cat is vomiting, weak, very quiet or collapsing',
      shortDescription: 'Urinary straining is now accompanied by signs that your cat is ill overall.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'This may be an advanced urinary emergency',
      resultBody:
        'Cats with complete urethral obstruction can develop uremia, dehydration and dangerous electrolyte disturbances. Vomiting, severe lethargy, weakness or collapse alongside urinary straining raises the concern substantially.',
      recommendedAction:
        'Go to an emergency veterinary hospital immediately. Do not wait for another litter-box attempt.',
    },
    {
      slug: 'recently-unblocked',
      label: 'My cat was recently treated for a urinary blockage and is straining again',
      shortDescription:
        'Straining, frequent litter-box visits or poor urine output have returned after treatment for an obstruction.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Re-obstruction needs to be ruled out',
      resultBody:
        'Urethral obstruction can recur. Returning signs after treatment should not be assumed to be routine soreness or irritation when urine output is reduced or uncertain.',
      recommendedAction:
        'Contact the treating clinic or an emergency veterinary hospital immediately and tell them your cat was recently obstructed.',
    },
    {
      slug: 'one-odd-attempt-then-normal',
      label: 'My cat strained once but then urinated normally',
      shortDescription:
        'There was one questionable litter-box attempt followed by an obvious normal urination and normal behavior.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Watch closely but do not dismiss a repeat',
      resultBody:
        'A single odd posture is less concerning when normal urine output immediately follows and the cat otherwise appears comfortable. Repeated straining changes the picture.',
      recommendedAction:
        'Monitor the next litter-box visits closely. If straining happens again, urinations become smaller or any pain or illness appears, contact a veterinarian.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Something is making urination difficult or painful',
      description:
        'Bladder inflammation, urinary stones and other lower urinary tract problems can make a cat squat repeatedly, strain or urinate in unusually small amounts.',
      severity: 'caution',
      chainLabel: 'Straining',
    },
    {
      stageLabel: 'IF URINE FLOW IS RESTRICTED',
      title: 'The bladder cannot empty normally',
      description:
        'A urethral plug, stone or other obstruction can narrow or block the path urine takes out of the body. Male cats are especially susceptible to urethral obstruction.',
      severity: 'warning',
      chainLabel: 'Poor urine flow',
    },
    {
      stageLabel: 'IF THE URETHRA BECOMES BLOCKED',
      title: 'Urine backs up and waste products accumulate',
      description:
        "Complete obstruction stops normal urine elimination. Kidney function and the body's normal fluid and electrolyte balance are disrupted.",
      severity: 'danger',
      chainLabel: 'Obstruction',
    },
    {
      stageLabel: 'AS THE CAT BECOMES SYSTEMICALLY ILL',
      title: 'Vomiting, weakness and dangerous electrolyte changes can develop',
      description:
        'Severe obstruction can lead to uremia, dehydration and high potassium levels that may affect the heart.',
      severity: 'danger',
      chainLabel: 'Systemic illness',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Untreated complete obstruction can be fatal',
      description:
        'A completely blocked cat can deteriorate rapidly. This is why repeated straining with little or no urine is treated as an emergency rather than a wait-and-see problem.',
      severity: 'danger',
      chainLabel: 'Life-threatening emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One questionable strain followed by obvious normal urination and normal behavior',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Watch the next litter-box visits closely. If straining repeats or urine output changes, contact a veterinarian.',
    },
    {
      situation: 'Repeated straining but normal-sized urine clumps are still appearing',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange veterinary care promptly. Continue checking output because worsening flow changes the urgency.',
    },
    {
      situation: 'Repeated attempts produce only drops',
      ignoreAnswer: 'No — emergency',
      severity: 'danger',
      whatToDo:
        'Seek emergency veterinary care. A small amount of urine does not reliably exclude urethral obstruction.',
    },
    {
      situation: 'Repeated attempts produce no visible urine',
      ignoreAnswer: 'No — emergency now',
      severity: 'danger',
      whatToDo: 'Go to an emergency veterinary hospital immediately.',
    },
    {
      situation: 'A male cat is straining and normal urine output cannot be confirmed',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Treat possible obstruction seriously and contact an emergency veterinary hospital rather than waiting for the signs to become clearer.',
    },
    {
      situation: 'A female cat is straining but still passing normal amounts of urine',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Complete urethral obstruction is less common in females but painful urinary disease still needs veterinary evaluation.',
    },
    {
      situation: 'Straining is accompanied by blood in the urine',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange veterinary evaluation. If urine becomes scant or stops, escalate to emergency care.',
    },
    {
      situation: 'Straining is accompanied by vomiting, severe lethargy, weakness or collapse',
      ignoreAnswer: 'No — emergency',
      severity: 'danger',
      whatToDo: 'Go to an emergency veterinary hospital immediately.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check whether urine is actually coming out',
      body:
        'Look for a normal urine stream or a normal-sized fresh clump in the litter. Frequent squatting alone does not tell you whether the bladder is emptying. If your cat keeps trying and produces only drops or nothing, stop monitoring and seek emergency care.',
    },
    {
      title: 'Treat absent or severely reduced urine as an emergency',
      body:
        'A suspected urethral obstruction needs veterinary treatment. If your cat is repeatedly straining without normal urine output, especially if your cat is male, go to an emergency veterinary hospital. Calling ahead can help the hospital prepare but should not become a reason to delay leaving.',
    },
    {
      title: 'Do not squeeze the bladder or try to unblock your cat',
      body:
        'Do not press hard on the abdomen, massage the bladder or attempt to pass anything into the urethra. Relieving a urinary obstruction is a veterinary procedure and an obstructed bladder can be painful and fragile.',
    },
    {
      title: 'Skip home remedies and human medication',
      body:
        'Do not use leftover antibiotics, human pain relievers, urinary supplements or diet changes as a substitute for evaluation. They cannot rule out or physically relieve a urethral blockage and some human medications are dangerous to cats.',
    },
    {
      title: 'Bring useful history with you',
      body:
        'If you can do so without delaying care, note when you last saw a normal urination, whether you saw blood, whether your cat has vomited and whether there is a history of urinary stones, cystitis or obstruction. Transport your cat in a secure carrier.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Repeated attempts with no urine',
      description:
        'Multiple litter-box trips or repeated squatting without producing urine strongly raises concern for urethral obstruction.',
      severity: 'danger',
    },
    {
      title: 'Only tiny drops are coming out',
      description: 'Partial urine passage does not guarantee that the urethra is adequately open.',
      severity: 'danger',
    },
    {
      title: 'A male cat is straining and output is uncertain',
      description: 'Male cats have a greater risk of urethral obstruction because of their urinary anatomy.',
      severity: 'danger',
    },
    {
      title: 'Crying or obvious severe pain while trying to urinate',
      description: 'Increasing distress can accompany both painful urinary disease and obstruction.',
      severity: 'warning',
    },
    {
      title: 'Vomiting or marked lethargy',
      description: 'These can appear when an obstructed cat becomes systemically ill.',
      severity: 'danger',
    },
    {
      title: 'Weakness, collapse or severe deterioration',
      description:
        'These signs alongside urinary straining can indicate a critically ill cat and require immediate emergency care.',
      severity: 'danger',
    },
    {
      title: 'Urinary signs returning after a previous obstruction',
      description:
        'Re-obstruction is possible and reduced or uncertain urine output should be assessed urgently.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does straining to pee always mean my cat is blocked?',
      answer:
        'No. Bladder inflammation, stones, infection and other urinary problems can also cause straining. The problem is that a blocked cat can initially look very similar, so urine output matters more than guessing the cause at home.',
    },
    {
      question: 'Could my cat actually be constipated instead?',
      answer:
        'Yes. Owners can mistake urinary straining for attempts to defecate and the reverse can happen too. If repeated straining is occurring and you cannot confirm normal urination, especially in a male cat, have a veterinarian rule out urinary obstruction.',
    },
    {
      question: 'Why are male cats at greater risk?',
      answer:
        'The male feline urethra is longer and narrower than the female urethra. Plugs, stones or swelling can therefore obstruct urine flow more readily.',
    },
    {
      question: 'Can female cats get urinary blockages?',
      answer:
        'Yes, although urethral obstruction is less common in females. Female cats can also develop painful bladder inflammation, stones and other urinary tract disease, so persistent straining still deserves veterinary evaluation.',
    },
    {
      question: 'Can stress make a cat strain to urinate?',
      answer:
        'Stress is associated with feline idiopathic cystitis, a common cause of lower urinary tract signs. Do not assume stress is the explanation until dangerous causes such as obstruction have been considered.',
    },
    {
      question: 'Is this probably just a urinary tract infection?',
      answer:
        'Not necessarily. Lower urinary tract signs in cats have several possible causes including idiopathic cystitis, stones, urethral plugs and infection. Symptoms alone usually cannot identify which one is responsible.',
    },
    {
      question: 'Can I wait until morning if my cat is still acting normal?',
      answer:
        'Not if repeated attempts are producing little or no urine. A cat can be obstructed before severe whole-body illness becomes obvious.',
    },
    {
      question: 'Should I give my cat a urinary supplement or special food first?',
      answer:
        'No if obstruction is possible. Diet and long-term urinary management may matter after the cause is diagnosed but they do not relieve an acute urethral blockage.',
    },
    {
      question: 'What will the veterinarian check?',
      answer:
        'The evaluation commonly includes a physical examination and assessment of the bladder. Depending on the situation, urinalysis, blood testing and imaging may be needed. If the urethra is blocked, treatment focuses on stabilizing the cat and restoring urine flow.',
    },
    {
      question: 'My cat has been blocked before. Is new straining more concerning?',
      answer:
        'Yes. Urethral obstruction can recur. If the previous signs are returning and urine output is reduced or uncertain, contact the treating clinic or an emergency veterinary hospital immediately.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Feline Lower Urinary Tract Disease',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-lower-urinary-tract-disease',
      sourceType: 'academic',
      notes:
        'Describes common feline lower urinary tract signs, major causes, increased obstruction risk in male cats and urethral obstruction as an emergency requiring immediate treatment.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Urethral Obstruction in Small Animals',
      url: 'https://www.merckvetmanual.com/urinary-system/urolithiasis-in-small-animals/urethral-obstruction-in-small-animals',
      sourceType: 'other',
      notes:
        'Covers nonproductive urination attempts, male-cat predisposition, metabolic consequences, diagnostic evaluation and emergency stabilization and relief of urethral obstruction.',
    },
    {
      publisher: 'American College of Veterinary Surgeons',
      title: 'Urinary Stones',
      url: 'https://www.acvs.org/small-animal/urinary-stones/',
      sourceType: 'industry',
      notes:
        'Lists straining, small frequent urinations and other signs associated with urinary stones and states that urinary obstruction from stones requires immediate emergency treatment.',
    },
    {
      publisher: 'National Library of Medicine',
      title: 'PubMed: Managing urethral obstruction in male cats: a practical guide and literature review',
      url: 'https://pubmed.ncbi.nlm.nih.gov/40664355/',
      sourceType: 'government',
      notes:
        'Government-hosted PubMed record for a recent literature review describing feline urethral obstruction as a life-threatening condition involving uremia, metabolic acidosis and electrolyte disturbances.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Emergency veterinary hospital',
      description:
        'The appropriate service when a cat is repeatedly straining and producing little or no urine or is showing vomiting, weakness or collapse.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Secure cat carrier',
      description:
        'Keeps a painful or distressed cat safely contained during transport and allows you to leave promptly if emergency care is needed.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Litter-box urine tracking',
      description:
        'A clean litter box and awareness of fresh urine clumps can help you tell whether your cat is producing normal amounts. Do not use prolonged monitoring when obstruction is suspected.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'cat-peeing-outside-litter-box',
      anchorText: 'Is your cat suddenly peeing outside the litter box?',
      relationshipType: 'sibling',
    },
    {
      slug: 'cat-hiding-suddenly',
      anchorText: 'Is your cat suddenly hiding more than usual?',
      relationshipType: 'related',
    },
  ],
};
