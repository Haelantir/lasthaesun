import type { ProblemSeed } from '../types';

export const dogDrinkingLotsOfWater: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-eating-and-drinking',
  slug: 'dog-drinking-lots-of-water',
  canonicalPath: '/pets/dogs/eating-and-drinking/dog-drinking-lots-of-water/',
  name: 'Dog Drinking Lots of Water',
  eyebrow: 'Pets · Dogs · Eating & Drinking',

  h1: 'Can I Ignore My Dog Drinking Lots of Water?',
  seoTitle: 'Dog Drinking Excessive Water: When Increased Thirst Needs a Vet',
  metaDescription:
    'A dog may drink more after heat or exercise, but a new or persistent increase can signal diabetes, kidney disease, Cushing’s, infection, or another problem.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep giving my dog water?',
  canIUseItLabel: 'Yes—keep fresh water available',

  shortAnswer:
    'Probably not. Extra water after heat or exercise can be normal if your dog quickly returns to their usual pattern and feels well. A new or persistent increase—especially with more urination, weight loss, vomiting, weakness, or appetite changes—needs veterinary attention, and you should not restrict water.',

  whyItMattersHeading: 'Why Does Excessive Thirst in a Dog Matter?',
  whyItMatters: [
    'A dog’s water intake changes with body size, activity, temperature, diet, and health. Drinking more after vigorous activity or a hot outing may be expected. What matters more is a clear change from your dog’s normal pattern, particularly when the water bowl empties faster and urination also increases.',
    'Persistent excessive thirst is called polydipsia. It can accompany diabetes mellitus, kidney or liver disease, adrenal disorders such as Cushing’s disease, urinary infection, leptospirosis, medication effects, and other conditions. An unspayed female may also drink more because of pyometra, a dangerous uterine infection. Until the cause is known, assume your dog needs the water; restricting it can cause dehydration or dangerous electrolyte changes.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Assessed against FDA and veterinary sources covering canine excessive thirst, diabetes, Cushing’s disease, pyometra, medication effects, testing, and heatstroke.',
  disclaimer:
    'General triage guidance only. Increased thirst has many possible causes and cannot be diagnosed from water intake alone. Do not restrict water or change prescribed medication unless a veterinarian directs you.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'heat-or-exercise-then-normal',
      label: 'More drinking after heat or exercise, then back to normal',
      shortDescription:
        'Your dog drank extra after activity or warm weather but soon returned to their usual drinking, urination, energy, and behavior.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'A TEMPORARY INCREASE CAN BE NORMAL',
      resultBody:
        'Dogs may need more water when they are active or warm. Returning to the usual pattern without illness signs makes an underlying problem less likely.',
      recommendedAction:
        'Keep fresh water available and watch for continued heavy drinking, increased urination, vomiting, weakness, confusion, or excessive panting.',
    },
    {
      slug: 'new-increase-otherwise-well',
      label: 'A new increase that continues, but my dog otherwise seems well',
      shortDescription:
        'The bowl is emptying faster than usual on repeated occasions, without obvious vomiting, weakness, pain, or appetite loss.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'ARRANGE A VETERINARY VISIT',
      resultBody:
        'A persistent change from your dog’s normal intake can be an early sign of disease even before the dog looks sick.',
      recommendedAction:
        'Keep water available, measure intake over a full day if practical, and schedule a veterinary examination. Note any diet, medication, urination, appetite, or weight changes.',
    },
    {
      slug: 'drinking-and-urinating-more',
      label: 'My dog is drinking more and producing much more urine',
      shortDescription:
        'Your dog asks to go out more, urinates for longer, has accidents, leaks while sleeping, or produces unusually large puddles.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'THIS FITS POLYURIA AND POLYDIPSIA',
      resultBody:
        'Many conditions cause the body to produce excess urine, which then drives thirst. Diabetes, kidney disease, adrenal disorders, liver disease, infection, and other problems can produce this pattern.',
      recommendedAction:
        'Contact your veterinarian and keep water freely available. Record the size and frequency of urination and whether your dog is straining or simply producing more urine.',
    },
    {
      slug: 'weight-loss-or-ravenous-appetite',
      label: 'Increased thirst with weight loss or unusual hunger',
      shortDescription:
        'Your dog is drinking and urinating more while losing weight, eating more than usual, or developing cloudy eyes.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'DIABETES NEEDS TO BE RULED OUT',
      resultBody:
        'Increased thirst, increased urination, increased appetite, and weight loss are common signs of canine diabetes. Dogs with poorly controlled diabetes can develop serious complications.',
      recommendedAction:
        'Arrange a veterinary examination promptly for blood and urine testing. Seek urgent care if vomiting, appetite loss, marked lethargy, weakness, or dehydration develops.',
    },
    {
      slug: 'after-medication-change',
      label: 'The change began after starting or changing medication',
      shortDescription:
        'Increased drinking and urination appeared after a new prescription or dose adjustment, and your dog otherwise feels normal.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'CHECK WITH THE PRESCRIBING CLINIC',
      resultBody:
        'Corticosteroids, diuretics, and some anti-seizure medicines can increase thirst or urination. The prescribing veterinarian still needs to know if the change is marked or unexpected.',
      recommendedAction:
        'Contact the prescribing clinic and describe the change. Keep water available and do not stop or adjust prescribed medication unless the clinic directs you to do so.',
    },
    {
      slug: 'known-diabetes-thirst-returns',
      label: 'My diabetic dog has started drinking more again',
      shortDescription:
        'A dog being treated for diabetes has a new or returning increase in thirst, urination, hunger, or weight loss.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DIABETES CONTROL MAY HAVE CHANGED',
      resultBody:
        'Returning thirst and urination can mean blood glucose is not adequately controlled or another illness is affecting treatment.',
      recommendedAction:
        'Contact the veterinarian managing the diabetes. If your dog is vomiting, refusing food, weak, dehydrated, or unusually sleepy, seek urgent veterinary care rather than changing insulin yourself.',
    },
    {
      slug: 'unspayed-female-feels-sick',
      label: 'An unspayed female is thirsty and feels sick',
      shortDescription:
        'Increased thirst occurs with lethargy, poor appetite, vomiting, vaginal discharge, pale gums, weakness, or a swollen or painful abdomen.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'PYOMETRA IS A MEDICAL EMERGENCY',
      resultBody:
        'An unspayed dog with these signs may have pyometra, a potentially life-threatening uterine infection. Some affected dogs have no visible discharge.',
      recommendedAction:
        'Go to an emergency veterinary hospital or contact a veterinarian for immediate direction. Do not wait for the thirst or other symptoms to improve.',
    },
    {
      slug: 'vomiting-or-cannot-keep-water-down',
      label: 'My dog is vomiting or cannot keep water down',
      shortDescription:
        'Heavy drinking occurs with repeated vomiting, refusal to eat, marked lethargy, weakness, dehydration, or collapse.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'THE DOG NEEDS URGENT ASSESSMENT',
      resultBody:
        'Excessive thirst with systemic illness can occur with diabetic ketoacidosis, kidney disease, Addisonian crisis, infection, or other serious conditions. Drinking does not protect a dog that keeps vomiting the water back up.',
      recommendedAction:
        'Seek urgent veterinary care. Go directly to an emergency hospital if your dog collapses, cannot stand normally, has pale gums, seems confused, or cannot keep water down.',
    },
    {
      slug: 'heatstroke-warning-signs',
      label: 'Heavy drinking after heat exposure with abnormal panting or weakness',
      shortDescription:
        'Your dog is excessively panting or drooling, vomiting, uncoordinated, confused, weak, having seizures, or collapsing after being in the heat.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'TREAT THIS AS POSSIBLE HEATSTROKE',
      resultBody:
        'Thirst after heat exposure may be normal, but these additional signs fit heatstroke, which is a life-threatening emergency.',
      recommendedAction:
        'Move your dog into a cool area, begin cooling with cool rather than ice-cold water, and contact an emergency veterinary hospital while arranging immediate transport.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The increase may reflect a normal demand',
      description:
        'Heat, activity, stress, and other temporary factors can make a dog drink more while the body replaces water.',
      severity: 'info',
      chainLabel: 'Temporary thirst',
    },
    {
      stageLabel: 'IF THE CHANGE CONTINUES',
      title: 'A urine-and-thirst cycle may be present',
      description:
        'Many underlying conditions cause excess urine production first. The dog then drinks more to replace the water being lost.',
      severity: 'caution',
      chainLabel: 'Ongoing fluid loss',
    },
    {
      stageLabel: 'IF AN UNDERLYING DISEASE IS MISSED',
      title: 'Illness can progress before the cause is obvious',
      description:
        'Diabetes, kidney disease, adrenal disease, liver disease, infection, and other conditions may initially appear as little more than an empty water bowl and extra trips outside.',
      severity: 'warning',
      chainLabel: 'Disease progression',
    },
    {
      stageLabel: 'IF WATER IS RESTRICTED',
      title: 'Dehydration and electrolyte problems can worsen',
      description:
        'A dog producing excess urine may depend on free access to water to maintain hydration. Removing the bowl does not fix the cause and can make the dog dangerously ill.',
      severity: 'danger',
      chainLabel: 'Unsafe restriction',
    },
    {
      stageLabel: 'EMERGENCY PATTERN',
      title: 'Serious complications can become life-threatening',
      description:
        'Heatstroke, diabetic ketoacidosis, pyometra, severe infection, or another critical illness can cause weakness, vomiting, dehydration, shock, seizures, or collapse.',
      severity: 'danger',
      chainLabel: 'Critical illness',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Extra drinking after activity or warm weather, followed by a full return to normal',
      ignoreAnswer: 'Yes, while monitoring',
      severity: 'info',
      whatToDo:
        'Keep fresh water available and confirm that drinking, urination, panting, energy, and behavior return to the usual pattern.',
    },
    {
      situation: 'A new increase in water intake that continues or repeatedly returns',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Measure the intake if practical and arrange a veterinary examination, even if your dog still appears comfortable.',
    },
    {
      situation: 'Increased thirst with large urine volumes, accidents, or nighttime urination',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Contact your veterinarian and record how often your dog urinates, whether the amount is large, and whether straining or discomfort occurs.',
    },
    {
      situation: 'Increased thirst after a prescribed medication change, with no illness signs',
      ignoreAnswer: 'Only while contacting your veterinarian',
      severity: 'caution',
      whatToDo:
        'Ask the prescribing clinic whether the change is expected. Continue providing water and do not alter the medication without instructions.',
    },
    {
      situation: 'Increased thirst with weight loss, increased hunger, or cloudy eyes',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange prompt blood and urine testing for diabetes and other metabolic conditions.',
    },
    {
      situation: 'An unspayed female with discharge, vomiting, lethargy, or abdominal swelling',
      ignoreAnswer: 'No — urgent',
      severity: 'danger',
      whatToDo:
        'Seek immediate veterinary care because pyometra is possible even when no discharge is visible.',
    },
    {
      situation: 'Repeated vomiting, inability to keep water down, severe weakness, or collapse',
      ignoreAnswer: 'No — emergency',
      severity: 'danger',
      whatToDo:
        'Go to an emergency veterinary hospital. Do not delay care while attempting to manage the thirst at home.',
    },
    {
      situation: 'Excessive panting, drooling, confusion, weakness, or collapse after heat exposure',
      ignoreAnswer: 'No — emergency',
      severity: 'danger',
      whatToDo:
        'Move your dog to a cool area, begin safe cooling, and arrange immediate emergency veterinary care.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Keep fresh water freely available',
      body:
        'Do not remove the bowl to reduce urination or accidents. Until a veterinarian determines otherwise, assume your dog is drinking to replace water the body needs.',
    },
    {
      title: 'Measure how much your dog actually drinks',
      body:
        'Start with a measured amount in a clean bowl, record all refills, and measure what remains after a full day. Include water added to food and other known sources. Separate pets during measurement only if each animal still has unrestricted access to water.',
    },
    {
      title: 'Record urination and whole-dog changes',
      body:
        'Note large urine volumes, frequent small attempts, accidents, leaking, appetite, weight, vomiting, diarrhea, panting, energy, and behavior. A short video or written log can help the clinic understand the pattern.',
    },
    {
      title: 'Review medications, diet, and recent events',
      body:
        'List every prescription, supplement, recent dose change, diet change, heat exposure, and possible access to medications or chemicals. Do not change prescribed treatment without veterinary instructions.',
    },
    {
      title: 'Arrange testing instead of guessing from the bowl',
      body:
        'A veterinary evaluation commonly begins with a physical examination, urinalysis, blood count, and chemistry profile. Urine culture, imaging, or hormone testing may be recommended based on the initial findings.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Collapse, severe weakness, confusion, seizures, or pale gums',
      description:
        'These signs can accompany shock, severe metabolic disturbance, heatstroke, infection, or another critical illness.',
      severity: 'danger',
    },
    {
      title: 'Repeated vomiting or inability to keep water down',
      description:
        'A dog can become dehydrated despite drinking if the water is repeatedly vomited, and the combination may indicate serious systemic disease.',
      severity: 'danger',
    },
    {
      title: 'Heat exposure with excessive panting or drooling',
      description:
        'Weakness, vomiting, loss of coordination, confusion, seizures, or collapse after heat exposure are heatstroke warning signs.',
      severity: 'danger',
    },
    {
      title: 'An unspayed female with vaginal discharge or a swollen abdomen',
      description:
        'Increased thirst with lethargy, poor appetite, vomiting, weakness, discharge, or abdominal pain can indicate pyometra. Visible discharge may be absent.',
      severity: 'danger',
    },
    {
      title: 'A diabetic dog becomes weak, lethargic, vomits, or stops eating',
      description:
        'These signs can occur with diabetic ketoacidosis or another illness affecting diabetes control and require urgent veterinary guidance.',
      severity: 'danger',
    },
    {
      title: 'Straining to urinate or producing little or no urine',
      description:
        'Frequent attempts with little output are different from producing a large volume of urine and may indicate a painful or obstructive urinary problem.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'How much water is too much for a dog?',
      answer:
        'A commonly used veterinary definition of polydipsia is more than 100 milliliters per kilogram of body weight per day. Intake varies with activity, temperature, diet, and health, so a clear change from your dog’s usual pattern also matters.',
    },
    {
      question: 'Should I limit my dog’s water if they are drinking too much?',
      answer:
        'No. Keep water freely available unless a veterinarian gives specific instructions in a controlled medical setting. Restricting water can cause dehydration or dangerous electrolyte abnormalities.',
    },
    {
      question: 'Can hot weather or exercise make my dog drink more?',
      answer:
        'Yes. Temporary extra drinking after activity or warm weather can be normal if your dog cools down, returns to their usual pattern, and has no weakness, vomiting, confusion, or persistent excessive panting.',
    },
    {
      question: 'Can stress cause excessive drinking in dogs?',
      answer:
        'Stress can increase water intake, and an uncommon behavioral condition called psychogenic polydipsia exists. Medical causes should be ruled out before assuming the drinking is behavioral.',
    },
    {
      question: 'Can medication make my dog drink and urinate more?',
      answer:
        'Yes. Corticosteroids, diuretics, and some anti-seizure medications can increase thirst or urination. Tell the prescribing clinic about the change, but do not stop or adjust medication on your own.',
    },
    {
      question: 'Does excessive thirst mean my dog has diabetes?',
      answer:
        'Not necessarily. Diabetes is one possibility, especially with increased urination, increased hunger, weight loss, weakness, or cloudy eyes. Kidney, liver, adrenal, infectious, urinary, and medication-related causes are also possible.',
    },
    {
      question: 'Why is my dog urinating more when the problem looks like thirst?',
      answer:
        'In many diseases, increased urine production comes first. The dog drinks more to replace the lost water, which is why veterinarians often evaluate excessive thirst and urination together.',
    },
    {
      question: 'Is frequent urination the same as producing too much urine?',
      answer:
        'No. Large, dilute urine volumes often accompany excessive thirst. Repeated squatting with only drops, straining, pain, or blood points more toward a lower urinary problem and needs veterinary attention.',
    },
    {
      question: 'What tests will the veterinarian run?',
      answer:
        'The initial evaluation often includes a history, physical examination, urinalysis, complete blood count, and chemistry profile. The findings may lead to urine culture, imaging, blood pressure measurement, or hormone testing.',
    },
    {
      question: 'How can I measure water intake when several pets share bowls?',
      answer:
        'If practical, give your dog separate access to a measured bowl while ensuring every pet still has water. Record refills, leftovers, water added to food, and any drinking from toilets, puddles, or other bowls.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Canine Polyuria and Polydipsia (PU/PD) - April 2024',
      url: 'https://riney.vet.cornell.edu/member-benefits-health-tips/polyuria-polydipsia-april-2024',
      sourceType: 'academic',
      notes:
        'Defines excessive thirst and urination, lists common causes, describes initial testing, recommends veterinary evaluation, and warns that restricting water can cause dehydration or electrolyte abnormalities.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: "Treating Cushing's Disease in Dogs",
      url: 'https://www.fda.gov/consumers/consumer-updates/treating-cushings-disease-dogs',
      sourceType: 'government',
      notes:
        'Lists increased thirst and urination among canine Cushing’s disease signs, along with increased appetite, panting, reduced activity, hair loss, skin changes, and abdominal enlargement.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Diabetes Mellitus in Dogs and Cats',
      url: 'https://www.merckvetmanual.com/endocrine-system/the-pancreas/diabetes-mellitus-in-dogs-and-cats',
      sourceType: 'industry',
      notes:
        'Supports increased thirst, urination, appetite, and weight loss as diabetes signs and describes vomiting, appetite loss, dehydration, and metabolic disturbance in diabetic ketoacidosis.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Pyometra',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/pyometra',
      sourceType: 'academic',
      notes:
        'Describes pyometra as a medical emergency in unspayed dogs and lists increased thirst or urination, discharge, lethargy, poor appetite, vomiting, abdominal changes, pale gums, weakness, and collapse.',
    },
    {
      publisher: 'VCA Animal Hospitals',
      title: 'Testing for Increased Thirst and Urination',
      url: 'https://vcahospitals.com/cottage/know-your-pet/testing-for-increased-thirst-and-urination',
      sourceType: 'industry',
      notes:
        'Reviews potential causes, medication effects, history and physical examination, measuring water intake, and screening with urinalysis, blood count, and chemistry testing.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Summer heat safety tips for dogs',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/summer-heat-safety-tips-dogs',
      sourceType: 'academic',
      notes:
        'Identifies excessive panting, drooling, vomiting, weakness, confusion, seizures, collapse, and breathing difficulty after heat exposure as signs requiring immediate veterinary care.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Measured water pitcher or container',
      description:
        'Makes it easier to record how much water goes into the bowl and calculate actual intake for the veterinary clinic.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Water, urination, and symptom log',
      description:
        'A simple written or phone-based log can track refills, urine volume, accidents, appetite, weight, medication, vomiting, panting, and energy.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Primary veterinary examination',
      description:
        'Blood and urine testing can distinguish a temporary intake change from diabetes, kidney disease, infection, endocrine disease, and other causes.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Emergency veterinary hospital',
      description:
        'Needed for collapse, repeated vomiting, inability to keep water down, heatstroke signs, severe weakness, or possible pyometra.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'dog-not-eating', anchorText: 'Can I ignore my dog not eating?', relationshipType: 'related' },
    { slug: 'dog-throwing-up', anchorText: 'Can I ignore my dog throwing up?', relationshipType: 'escalation' },
    { slug: 'dog-diarrhea', anchorText: 'Can I ignore diarrhea in my dog?', relationshipType: 'related' },
    { slug: 'dog-ate-grapes', anchorText: 'Can I ignore my dog eating grapes?', relationshipType: 'cause' },
  ],
};
