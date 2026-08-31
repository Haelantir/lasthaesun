import type { ProblemSeed } from '../types';

export const catThrowingUp: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'cat-digestion',
  slug: 'cat-throwing-up',
  canonicalPath: '/pets/cats/digestion/cat-throwing-up/',
  name: 'Cat Throwing Up',
  eyebrow: 'Pets · Cats · Digestion',

  h1: 'Can I Ignore My Cat Throwing Up?',
  seoTitle: 'Cat Vomiting: When to Watch and When to Call a Vet',
  metaDescription:
    'One isolated vomit may be watchable. Repeated vomiting, blood, lethargy, pain, toxin exposure, or suspected string or blockage needs veterinary care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I watch my cat at home?',
  canIUseItLabel: 'Yes, if it was isolated and your cat seems normal',

  shortAnswer:
    'Sometimes. If your cat vomited once, is acting normal, and can keep water down, you can usually watch closely. Repeated vomiting or vomiting with other symptoms needs veterinary attention.',

  whyItMattersHeading: 'When Cat Vomiting Stops Being a Wait-and-See Problem',
  whyItMatters: [
    'Cats do vomit occasionally, and a single episode in an otherwise normal cat may pass without becoming a bigger problem. Hairballs are one common reason. Vomiting itself is a sign, though, not a diagnosis, so the pattern matters more than the mess on the floor.',
    'Repeated or severe vomiting can lead to dehydration and electrolyte problems, and the cause can be more serious than stomach upset. Foreign objects, toxins, kidney or liver disease, pancreatitis, infection, parasites, and other illnesses can all cause vomiting. Blood, pain, weakness, appetite loss, diarrhea, or suspected toxin or foreign-body exposure should move this out of the watch-and-wait category.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Reviewed against FDA, Cornell, Merck Veterinary Manual, and ASPCA guidance on feline vomiting, poisoning, foreign-body risk, and urgent warning signs.',
  disclaimer:
    'This is general triage guidance, not a diagnosis. A veterinarian should assess persistent, recurrent, severe, or otherwise concerning vomiting.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'vomited-once-acting-normal',
      label: 'My cat vomited once and now seems completely normal',
      shortDescription:
        'Normal behavior, normal breathing, still interested in water, and no obvious pain or other symptoms.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'WATCH CLOSELY',
      resultBody:
        'One isolated episode in an otherwise normal cat is often reasonable to monitor. What matters is whether the vomiting stops and your cat continues acting like itself.',
      recommendedAction:
        'Keep fresh water available, watch appetite and litter-box use, and see whether vomiting happens again or any other symptom appears.',
    },
    {
      slug: 'coughed-up-hairball',
      label: 'My cat brought up a hairball and otherwise seems fine',
      shortDescription:
        'The material contains a clear clump of hair and the cat returns to normal behavior afterward.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'USUALLY LOW CONCERN',
      resultBody:
        'Cats can bring up hairballs from swallowed fur. An occasional hairball without other illness signs is usually less concerning than repeated vomiting with no clear hairball.',
      recommendedAction:
        'Monitor for repeat episodes. Regular brushing can reduce loose fur, and frequent hairballs or repeated vomiting should be discussed with your veterinarian.',
    },
    {
      slug: 'vomiting-repeatedly',
      label: 'My cat has vomited several times',
      shortDescription: 'Vomiting is repeating rather than stopping after one isolated episode.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'CALL YOUR VET',
      resultBody:
        'Repeated vomiting raises the risk of dehydration and makes an underlying illness, obstruction, or other problem more concerning.',
      recommendedAction:
        'Contact your veterinarian promptly. If your cat also looks weak, painful, dehydrated, or very ill, use an emergency veterinary service.',
    },
    {
      slug: 'cannot-keep-water-down',
      label: 'My cat vomits after drinking or cannot keep water down',
      shortDescription: 'Water comes back up or drinking repeatedly triggers more vomiting.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "DON'T WAIT THIS OUT",
      resultBody:
        'Ongoing vomiting can cause dehydration, and a cat that cannot keep water down may need fluids and treatment rather than home observation.',
      recommendedAction:
        'Arrange veterinary care promptly. Do not intentionally withhold water unless a veterinarian specifically directs you to do so.',
    },
    {
      slug: 'blood-in-vomit',
      label: 'There is blood in the vomit',
      shortDescription: 'The vomit contains obvious blood rather than just food, liquid, foam, or hair.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET VETERINARY CARE',
      resultBody:
        'Blood in vomit is an abnormal sign and can occur with significant gastrointestinal irritation or other disease.',
      recommendedAction:
        'Contact a veterinarian promptly. If bleeding is substantial or your cat is weak, pale, collapsing, or severely ill, seek emergency care.',
    },
    {
      slug: 'vomiting-with-other-symptoms',
      label: 'My cat is vomiting and is also lethargic, not eating, painful, or having diarrhea',
      shortDescription:
        'Vomiting is accompanied by a clear change in behavior, appetite, comfort, stool, or overall condition.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THIS NEEDS A VET',
      resultBody:
        'Vomiting plus other illness signs is more concerning than an isolated episode because it raises the chance of dehydration or a more significant underlying problem.',
      recommendedAction:
        'Contact your veterinarian promptly and describe every symptom, not just the vomiting.',
    },
    {
      slug: 'possible-string-or-foreign-object',
      label: 'My cat may have swallowed string, yarn, ribbon, or another object',
      shortDescription:
        'A foreign object may be missing, visible in the vomit, or suspected from what the cat had access to.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'TREAT THIS AS URGENT',
      resultBody:
        'Foreign objects can obstruct or injure the digestive tract. String and yarn are especially concerning in cats because they can create serious intestinal injury.',
      recommendedAction:
        'Contact a veterinarian or emergency veterinary hospital now. Do not pull on string hanging from the mouth or anus and do not try to make your cat vomit at home.',
    },
    {
      slug: 'possible-toxin-or-lily',
      label: 'My cat may have eaten a toxic plant, medication, chemical, or other dangerous substance',
      shortDescription:
        'There is known or suspected exposure to something potentially poisonous, including true lilies or daylilies.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'ACT NOW',
      resultBody:
        'Vomiting can be an early poisoning sign, and some cat toxins can cause severe illness before the full effects are obvious.',
      recommendedAction:
        'Call your veterinarian, an emergency veterinary hospital, or an animal poison control service immediately. Do not induce vomiting unless a veterinary professional specifically tells you to.',
    },
    {
      slug: 'vomiting-keeps-coming-back',
      label: 'My cat keeps vomiting on different days',
      shortDescription: 'The problem is recurring even though the cat may look normal between episodes.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'RECURRING VOMITING NEEDS A WORKUP',
      resultBody:
        'Recurrent vomiting can be linked to gastrointestinal disease, parasites, kidney disease, thyroid disease, food-related problems, or other conditions that cannot be identified from the vomit alone.',
      recommendedAction:
        'Schedule a veterinary evaluation and keep track of when the vomiting happens, what comes up, appetite, weight changes, stool, thirst, and urination.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'One episode may end there',
      description:
        'An otherwise normal cat may vomit once from a minor stomach upset or a hairball and then return to normal.',
      severity: 'info',
      chainLabel: 'One episode',
    },
    {
      stageLabel: 'IF IT REPEATS',
      title: 'Fluid loss starts to matter',
      description:
        'Repeated vomiting can cause dehydration and electrolyte imbalance, especially when the cat stops eating or drinking normally.',
      severity: 'caution',
      chainLabel: 'Repeated vomiting',
    },
    {
      stageLabel: 'IF THE CAUSE IS STILL PRESENT',
      title: 'The underlying problem keeps going',
      description:
        'A foreign object, toxin, infection, inflammatory disease, or organ problem will not be fixed by the vomiting itself.',
      severity: 'warning',
      chainLabel: 'Ongoing cause',
    },
    {
      stageLabel: 'IF OTHER SIGNS APPEAR',
      title: 'The risk level changes',
      description:
        'Weakness, pain, blood, appetite loss, diarrhea, or obvious dehydration make home observation less appropriate.',
      severity: 'warning',
      chainLabel: 'Red flags',
    },
    {
      stageLabel: 'IF SEVERE VOMITING CONTINUES',
      title: 'Some causes can become life-threatening',
      description:
        'Severe or prolonged vomiting may require diagnostic testing, fluid therapy, medication, or treatment of an obstruction, poisoning, or systemic disease.',
      severity: 'danger',
      chainLabel: 'Veterinary treatment',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One isolated vomit and the cat is acting completely normal',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Watch closely, keep fresh water available, and make sure normal appetite, behavior, and litter-box habits continue.',
    },
    {
      situation: 'An occasional hairball with no other signs of illness',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Monitor the pattern and brush regularly. Frequent hairballs or repeated vomiting deserve a veterinary discussion.',
    },
    {
      situation: 'Vomiting more than once or twice in a day',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact your veterinarian because repeated vomiting is more likely to cause dehydration or reflect an underlying problem.',
    },
    {
      situation: 'Vomiting with lethargy, weakness, poor appetite, pain, diarrhea, or dehydration',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange veterinary evaluation promptly. The combination of symptoms matters more than the vomit alone.',
    },
    {
      situation: 'Blood in the vomit',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact a veterinarian promptly and use emergency care if your cat appears weak, pale, collapsed, or severely ill.',
    },
    {
      situation: 'Possible string, yarn, ribbon, or other foreign-object ingestion',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Seek veterinary care promptly. Do not pull visible string from the mouth or anus and do not try to induce vomiting at home.',
    },
    {
      situation: 'Possible poisoning or lily exposure',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Call a veterinarian, emergency veterinary hospital, or animal poison control service immediately.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the whole cat, not just the vomit',
      body:
        'Look at energy, appetite, thirst, stool, urination, breathing, and signs of pain. A cat that vomits once and acts normal is a different situation from a cat that vomits and then hides, refuses food, or looks weak.',
    },
    {
      title: 'Keep water available',
      body:
        'Vomiting can contribute to dehydration. Do not deliberately withhold water unless your veterinarian has given specific instructions for your cat.',
    },
    {
      title: 'Look for what your cat could have swallowed',
      body:
        'Check for missing string, ribbon, yarn, small objects, plants, human medications, chemicals, or spoiled food. If a potentially dangerous exposure is possible, contact a veterinarian or poison control rather than waiting for more symptoms.',
    },
    {
      title: 'Do not try to make a cat vomit at home',
      body:
        'Home vomiting methods can injure cats and may make some poison exposures worse. If poisoning is possible, call a veterinarian or animal poison control service for case-specific instructions.',
    },
    {
      title: 'Get help if the pattern changes',
      body:
        'If vomiting repeats, your cat stops eating, becomes lethargic or painful, develops diarrhea, or you see blood, move from observation to veterinary care.',
      destinationProblemSlug: 'cat-diarrhea',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Repeated or severe vomiting',
      description:
        'Vomiting that keeps happening is more concerning than one isolated episode and increases the risk of dehydration.',
      severity: 'warning',
    },
    {
      title: 'Blood in the vomit',
      description: 'Visible blood is an abnormal sign and needs veterinary assessment.',
      severity: 'danger',
    },
    {
      title: 'Lethargy, weakness, collapse, or marked behavior change',
      description: 'These signs suggest the problem is affecting more than the stomach.',
      severity: 'danger',
    },
    {
      title: 'Abdominal pain or a swollen, tense abdomen',
      description: 'Pain or distention can occur with serious gastrointestinal disease or obstruction.',
      severity: 'danger',
    },
    {
      title: 'Refusing food or unable to keep water down',
      description: 'Poor intake combined with vomiting raises concern for dehydration and ongoing illness.',
      severity: 'warning',
    },
    {
      title: 'Suspected toxin or foreign-object exposure',
      description:
        'Lilies, medications, chemicals, string, yarn, and other swallowed objects can require urgent treatment even before severe signs appear.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it normal for a cat to throw up once in a while?',
      answer:
        'It can be. An isolated episode in a cat that immediately returns to normal may be watchable, but recurring vomiting or any additional illness sign should be evaluated.',
    },
    {
      question: 'How can I tell vomiting from regurgitation?',
      answer:
        'Vomiting usually involves nausea, retching, and forceful abdominal contractions. Regurgitation is more passive and often brings up undigested food soon after eating.',
    },
    {
      question: 'Is a hairball the same as vomiting?',
      answer:
        'A hairball is brought up by vomiting, but an occasional obvious hairball is usually less concerning than repeated vomiting without a clear hairball.',
    },
    {
      question: "Should I take away my cat's water after vomiting?",
      answer:
        'Not on your own. Water is important for preventing dehydration, and veterinary references caution that withholding it can make dehydration worse unless fluids are being provided another way.',
    },
    {
      question: 'Should I stop feeding my cat after it vomits?',
      answer:
        "Feeding advice depends on the cause and the cat's condition. Do not make up your own fasting schedule; if vomiting continues or your cat will not eat, contact your veterinarian.",
    },
    {
      question: 'What does yellow or foamy vomit mean?',
      answer:
        'Yellow or foamy material can contain bile, especially when the stomach is empty, but color alone does not tell you the cause. Frequency and other symptoms matter more.',
    },
    {
      question: 'What if my cat throws up undigested food right after eating?',
      answer:
        'If food comes up passively with little abdominal effort, it may be regurgitation rather than vomiting. Repeated episodes still deserve veterinary evaluation.',
    },
    {
      question: 'Is weekly vomiting something I can ignore?',
      answer:
        'No. Cornell advises prompt veterinary evaluation when vomiting occurs more frequently than once per week or when it comes with other concerning signs.',
    },
    {
      question: 'What if my cat may have eaten a lily?',
      answer:
        'Treat it as urgent. FDA warns that true lilies and daylilies can cause fatal kidney failure in cats, so call a veterinarian or pet poison control immediately.',
    },
    {
      question: 'Can I use hydrogen peroxide to make my cat vomit?',
      answer:
        'No. ASPCA advises that hydrogen peroxide should not be given to cats and that there is no safe at-home method to induce vomiting in a cat.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Potentially Dangerous Items for Your Pet',
      url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/potentially-dangerous-items-your-pet',
      sourceType: 'government',
      notes:
        'Lists foods, medications, chemicals, plants, and foreign objects that can harm pets and advises calling a veterinarian or pet poison control promptly after potentially dangerous ingestion.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Lovely Lilies and Curious Cats: A Dangerous Combination',
      url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination',
      sourceType: 'government',
      notes:
        'Explains that true lilies and daylilies can cause fatal kidney failure in cats, with vomiting among early signs, and recommends immediate veterinary or poison-control contact after exposure.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Vomiting',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/vomiting',
      sourceType: 'academic',
      notes:
        'Covers occasional versus concerning vomiting, hairballs, toxins, foreign objects, metabolic disease, and signs such as lethargy, weakness, appetite loss, blood, and diarrhea.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Vomiting in Cats',
      url: 'https://www.merckvetmanual.com/cat-owners/digestive-disorders-of-cats/vomiting-in-cats',
      sourceType: 'other',
      notes:
        'Describes vomiting versus regurgitation, common causes, dehydration and electrolyte risks, and the need for veterinary evaluation when vomiting is severe, frequent, prolonged, or accompanied by other adverse signs.',
    },
    {
      publisher: 'ASPCA',
      title: 'Is It Ever Safe to Induce Vomiting?',
      url: 'https://www.aspca.org/news/it-ever-safe-induce-vomiting',
      sourceType: 'other',
      notes:
        'Advises contacting a veterinarian or poison-control service after suspected toxin ingestion and states that hydrogen peroxide should not be given to cats to induce vomiting.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Gastrointestinal Obstruction in Small Animals',
      url: 'https://www.merckvetmanual.com/digestive-system/surgical-problems-of-the-gastrointestinal-tract-in-small-animals/gastrointestinal-obstruction-in-small-animals',
      sourceType: 'other',
      notes:
        'Explains gastrointestinal obstruction from foreign bodies, the higher perforation risk from linear objects such as string or yarn in cats, and why a visible linear foreign body should not be pulled.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Veterinary clinic',
      description:
        'Useful for recurrent vomiting, appetite changes, dehydration, pain, weight loss, or any pattern that is no longer a one-off episode.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Emergency veterinary hospital',
      description:
        'Appropriate for severe vomiting, collapse, suspected obstruction, significant bleeding, or a cat that looks seriously ill.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Animal poison control service',
      description:
        'Provides case-specific guidance when a cat may have swallowed a toxic plant, medication, chemical, or other dangerous substance.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Grooming brush',
      description:
        'Regular removal of loose fur can help reduce the amount of hair a cat swallows and may help with hairball-related vomiting.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'cat-diarrhea', anchorText: 'Can I ignore my cat having diarrhea?', relationshipType: 'sibling' },
    {
      slug: 'cat-coughing',
      anchorText: 'Is my cat coughing instead of vomiting?',
      relationshipType: 'related',
    },
    {
      slug: 'cat-hiding-suddenly',
      anchorText: 'Can I ignore my cat suddenly hiding?',
      relationshipType: 'follow_up',
    },
  ],
};
