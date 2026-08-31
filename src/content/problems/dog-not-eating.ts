import type { ProblemSeed } from '../types';

export const dogNotEating: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-eating-and-drinking',
  slug: 'dog-not-eating',
  canonicalPath: '/pets/dogs/eating-and-drinking/dog-not-eating/',
  name: 'Dog Not Eating',
  eyebrow: 'Pets · Dogs · Eating & Drinking',

  h1: 'Can I Ignore My Dog Not Eating?',
  seoTitle: 'Dog Not Eating: When a Missed Meal Needs a Vet',
  metaDescription:
    'A dog skipping one meal may be fine. Learn when loss of appetite can wait, when to call your vet, and which symptoms need emergency care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I wait and see?',
  canIUseItLabel: 'Sometimes, briefly',

  shortAnswer:
    'A healthy dog that skips one meal but is otherwise acting completely normal can usually be watched briefly. If your dog still will not eat by the next day or has vomiting, diarrhea, lethargy, pain, a swollen abdomen, trouble breathing, or possible toxin or foreign-object exposure, do not keep waiting.',

  whyItMattersHeading: 'Why Does a Dog Not Eating Matter?',
  whyItMatters: [
    'Loss of appetite is a symptom, not a diagnosis. A dog may eat less because of stress, a change in food, too many treats, nausea, dental or other pain, medication effects, infection, or disease elsewhere in the body. Some dogs also seem uninterested in food when they actually want to eat but have trouble chewing or swallowing.',
    'The important question is what comes with the appetite change. Vomiting, abdominal pain, lethargy, dehydration, weight loss, or abdominal swelling can point toward problems such as gastrointestinal disease or an obstruction. A swollen abdomen with unsuccessful attempts to vomit can be a sign of gastric dilatation-volvulus, a life-threatening emergency.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Reviewed against FDA pet-hazard guidance and veterinary sources covering appetite loss, pain, gastrointestinal obstruction, GDV, and emergency warning signs.',
  disclaimer:
    'General triage guidance only. Loss of appetite has many possible causes and cannot be diagnosed from eating behavior alone. Seek veterinary care sooner if your dog appears ill or you are concerned about a toxin, foreign object, or emergency symptom.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'skipped-one-meal-otherwise-normal',
      label: 'My dog skipped one meal but seems completely normal',
      shortDescription:
        'Energy, drinking, breathing, stool, and behavior are normal with no obvious pain or vomiting.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'WATCH THE NEXT MEAL',
      resultBody:
        'Healthy dogs do occasionally skip a meal. One missed meal without any other change is less concerning than appetite loss paired with illness signs.',
      recommendedAction:
        "Keep fresh water available and offer the dog's normal food again at the usual mealtime. Watch for any new symptoms or continued refusal to eat.",
    },
    {
      slug: 'still-not-eating-next-day',
      label: 'My dog is still refusing food the next day',
      shortDescription: 'The appetite has not returned even though there are no dramatic emergency symptoms.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'CALL YOUR VET',
      resultBody:
        'Appetite loss that continues deserves investigation because pain, nausea, dental disease, gastrointestinal problems, and systemic illness can all reduce food intake.',
      recommendedAction:
        'Contact your veterinarian and describe when your dog last ate normally, whether water intake has changed, and any changes in behavior, stool, medications, or diet.',
    },
    {
      slug: 'eats-treats-not-regular-food',
      label: 'My dog refuses meals but still eats treats',
      shortDescription: 'High-value snacks are accepted but normal food is repeatedly refused.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'IT MAY BE PICKINESS, BUT WATCH THE PATTERN',
      resultBody:
        'Taking treats shows that appetite is not completely absent, but it does not rule out dental discomfort, nausea, or a developing health problem. Frequent treats can also reduce interest in regular meals.',
      recommendedAction:
        'Stop repeatedly replacing meals with treats. Offer the normal diet on the usual schedule and contact your veterinarian if the change persists or other symptoms appear.',
    },
    {
      slug: 'wants-to-eat-but-cannot',
      label: 'My dog approaches food but struggles to eat',
      shortDescription:
        'The dog seems hungry but drops food, chews strangely, backs away, or appears uncomfortable.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'CHECK FOR PAIN OR TROUBLE EATING',
      resultBody:
        'A dog can want food but have difficulty picking it up, chewing, swallowing, or reaching the bowl comfortably. Mouth, dental, throat, or other pain can cause this pattern.',
      recommendedAction:
        'Arrange a veterinary examination rather than assuming the dog is being picky. Do not force food into the mouth.',
    },
    {
      slug: 'not-eating-with-vomiting-or-diarrhea',
      label: 'My dog is not eating and is vomiting or having diarrhea',
      shortDescription: 'Appetite loss is occurring with gastrointestinal symptoms.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CONTACT A VET PROMPTLY',
      resultBody:
        'Loss of appetite combined with vomiting or diarrhea can occur with gastrointestinal disease, infection, pancreatitis, obstruction, toxin exposure, and other conditions. Fluid loss can also lead to dehydration.',
      recommendedAction:
        'Contact your veterinarian promptly. Seek emergency care if vomiting or diarrhea is severe, bloody, accompanied by marked weakness, or your dog cannot keep water down.',
    },
    {
      slug: 'not-eating-and-lethargic',
      label: 'My dog is not eating and seems weak or unusually tired',
      shortDescription: 'The dog is much quieter than normal, reluctant to move, weak, or difficult to engage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "DON'T WRITE THIS OFF AS PICKINESS",
      resultBody:
        'Loss of appetite plus lethargy is more concerning than a missed meal by itself. Pain and many systemic illnesses can produce both signs.',
      recommendedAction:
        'Contact a veterinarian promptly. If your dog is collapsing, cannot stand normally, has pale gums, or appears severely ill, seek emergency care.',
    },
    {
      slug: 'swollen-belly-and-dry-heaving',
      label: "My dog's belly is swollen and they keep trying to vomit",
      shortDescription:
        'The abdomen looks enlarged or painful and little or nothing comes up when the dog retches.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'GO TO AN EMERGENCY VET',
      resultBody:
        'A distended abdomen with nonproductive retching is a classic warning pattern for gastric dilatation-volvulus. GDV can cause shock and requires immediate veterinary treatment.',
      recommendedAction:
        'Go to an emergency veterinary hospital now. Do not wait for the appetite to return or attempt home treatment first.',
    },
    {
      slug: 'possible-foreign-object',
      label: 'My dog may have swallowed something',
      shortDescription:
        'A toy, sock, bone, food packaging, or another object may be missing or was seen being swallowed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'AN OBSTRUCTION IS POSSIBLE',
      resultBody:
        'Gastrointestinal foreign-body obstruction can cause loss of appetite, vomiting, abdominal pain, dehydration, and lethargy. Severe obstruction can become life-threatening.',
      recommendedAction:
        'Contact a veterinarian promptly and explain what may have been swallowed. If vomiting, abdominal pain, swelling, or marked lethargy is present, seek urgent or emergency care.',
    },
    {
      slug: 'possible-toxic-ingestion',
      label: 'My dog may have eaten something toxic',
      shortDescription:
        'There is possible access to medication, xylitol, grapes, raisins, chocolate, chemicals, or another potentially harmful substance.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: "DON'T WAIT FOR MORE SYMPTOMS",
      resultBody:
        'Some toxic exposures can cause serious illness before the full set of symptoms becomes obvious. Appetite loss may occur with poisoning, but waiting for a dog to stop eating is not a safe way to judge whether an exposure matters.',
      recommendedAction:
        'Contact a veterinarian, emergency animal hospital, or animal poison-control service immediately. Keep the product package or ingredient list available if you have it.',
    },
    {
      slug: 'appetite-loss-with-weight-loss',
      label: "My dog's appetite keeps changing and they are losing weight",
      shortDescription: 'Poor appetite is recurring or body weight is dropping without an obvious reason.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'THIS NEEDS AN EXAM',
      resultBody:
        'Repeated appetite changes or unexplained weight loss can accompany dental problems, gastrointestinal disease, pain, metabolic disease, infection, and other chronic conditions.',
      recommendedAction:
        'Schedule a veterinary examination rather than repeatedly changing foods or adding treats to keep your dog eating.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'One missed meal may not mean illness',
      description:
        'A healthy dog can occasionally skip a meal because of stress, routine changes, food preference, or simply being less hungry than usual.',
      severity: 'info',
      chainLabel: 'Missed meal',
    },
    {
      stageLabel: 'IF THE APPETITE STAYS LOW',
      title: 'An underlying problem becomes more likely',
      description:
        'Persistent appetite loss can be associated with pain, nausea, dental disease, gastrointestinal problems, medication effects, infection, or systemic illness.',
      severity: 'caution',
      chainLabel: 'Continued appetite loss',
    },
    {
      stageLabel: 'IF OTHER SYMPTOMS APPEAR',
      title: 'The situation needs faster attention',
      description:
        'Vomiting, diarrhea, lethargy, weight loss, dehydration, or abdominal pain make a simple picky-eating explanation less reassuring.',
      severity: 'warning',
      chainLabel: 'Additional illness signs',
    },
    {
      stageLabel: 'IF THERE IS AN OBSTRUCTION OR TOXIN',
      title: 'Waiting can allow serious illness to progress',
      description:
        'Foreign-body obstruction and some toxic exposures can cause rapid deterioration and may require urgent treatment.',
      severity: 'danger',
      chainLabel: 'Serious underlying cause',
    },
    {
      stageLabel: 'EMERGENCY PATTERN',
      title: 'Some combinations need immediate care',
      description:
        'A swollen painful abdomen with repeated unsuccessful retching, collapse, severe weakness, pale gums, or breathing difficulty warrants emergency evaluation.',
      severity: 'danger',
      chainLabel: 'Emergency signs',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One missed meal and your dog is otherwise completely normal',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Offer the normal diet again at the next scheduled meal and watch energy, water intake, stool, vomiting, and behavior.',
    },
    {
      situation: 'Still refusing food by the next day',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Contact your veterinarian even if there are no dramatic symptoms. Persistent appetite loss deserves evaluation.',
    },
    {
      situation: 'Eats treats but repeatedly refuses normal meals',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Stop replacing meals with a stream of treats and watch the next regular feeding. Get veterinary advice if the pattern continues.',
    },
    {
      situation: 'Approaches food but appears unable or unwilling to chew or swallow',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange a veterinary examination for possible dental, oral, throat, or other pain.',
    },
    {
      situation: 'Appetite loss with vomiting, diarrhea, obvious pain, or marked lethargy',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact a veterinarian promptly. Escalate to emergency care if symptoms are severe or your dog is becoming weak.',
    },
    {
      situation: 'Swollen abdomen with repeated dry heaving or unsuccessful vomiting',
      ignoreAnswer: 'No — emergency',
      severity: 'danger',
      whatToDo: 'Go to an emergency veterinary hospital immediately.',
    },
    {
      situation: 'Known or suspected toxin exposure',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact a veterinarian, emergency animal hospital, or animal poison-control service immediately rather than waiting for symptoms.',
    },
    {
      situation: 'Possible swallowed object with appetite loss or vomiting',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact a veterinarian promptly because gastrointestinal obstruction may require imaging and treatment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the whole dog, not just the food bowl',
      body:
        'Look at energy, drinking, vomiting, diarrhea, stool, breathing, posture, abdominal size, and signs of pain. A missed meal in an otherwise normal dog is very different from appetite loss in a dog that looks ill.',
    },
    {
      title: 'Think about what changed',
      body:
        'Note any new food, unusually large number of treats, medication, stressful event, recent procedure, access to trash, missing toys, or possible exposure to human food or chemicals. This history can help your veterinarian narrow down the cause.',
    },
    {
      title: 'Keep the feeding test simple',
      body:
        "Offer the dog's usual food and fresh water rather than cycling through many rich foods and treats. If your dog seems hungry but cannot chew or swallow normally, stop testing foods and arrange an examination.",
    },
    {
      title: 'Treat possible toxic food as its own problem',
      body:
        'If grapes, raisins, xylitol-containing products, medication, or another potentially toxic item may have been eaten, do not wait to see whether appetite returns. Get veterinary or poison-control guidance immediately.',
      destinationProblemSlug: 'dog-ate-grapes',
    },
    {
      title: 'Treat a possible swallowed object as its own problem',
      body:
        'Missing socks, toys, bones, packaging, or other objects matter because an intestinal blockage can cause appetite loss and vomiting. Contact a veterinarian if ingestion is possible.',
      destinationProblemSlug: 'dog-swallowed-a-sock',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Swollen abdomen with dry heaving',
      description:
        'A distended belly with repeated attempts to vomit that produce little or nothing can indicate GDV and needs immediate emergency care.',
      severity: 'danger',
    },
    {
      title: 'Collapse, severe weakness, or pale gums',
      description: 'These can occur with shock or other serious illness and warrant emergency evaluation.',
      severity: 'danger',
    },
    {
      title: 'Trouble breathing',
      description: 'Breathing difficulty is an emergency regardless of whether appetite loss is also present.',
      severity: 'danger',
    },
    {
      title: 'Severe or repeated vomiting',
      description:
        'Vomiting together with appetite loss raises concern for significant gastrointestinal disease, obstruction, toxin exposure, or dehydration.',
      severity: 'danger',
    },
    {
      title: 'Possible toxin exposure',
      description:
        'Do not wait for appetite loss or other symptoms to worsen after suspected ingestion of a dangerous food, medication, chemical, or other toxin.',
      severity: 'danger',
    },
    {
      title: 'Possible swallowed foreign object',
      description:
        'Loss of appetite with vomiting, abdominal pain, or lethargy after possible foreign-object ingestion can indicate an intestinal obstruction.',
      severity: 'danger',
    },
    {
      title: 'Persistent appetite loss or unexplained weight loss',
      description:
        'Ongoing changes deserve veterinary investigation even when the dog does not appear acutely ill.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it okay if my dog skips one meal?',
      answer:
        'Sometimes. A healthy dog that skips one meal but has normal energy, water intake, stool, breathing, and behavior can usually be watched through the next feeding.',
    },
    {
      question: 'What if my dog eats treats but refuses dog food?',
      answer:
        'That is less concerning than refusing all food, but it does not prove your dog is healthy. Too many treats can reduce interest in meals, while dental pain or nausea can still make a dog selective about what it will eat.',
    },
    {
      question: 'Can stress make a dog stop eating?',
      answer:
        'Yes. Changes in routine, environment, or other stressors can reduce appetite. The appetite should not be blamed on stress if your dog also looks ill or the problem persists.',
    },
    {
      question: 'Can dental problems cause appetite loss?',
      answer:
        'Yes. Mouth and dental pain can make dogs avoid hard food, chew differently, drop food, or approach the bowl and then back away.',
    },
    {
      question: 'Why does my dog seem hungry but not eat?',
      answer:
        'Some dogs have what veterinarians describe as difficulty eating rather than a true lack of appetite. Problems involving the mouth, teeth, throat, chewing, swallowing, or pain can make a hungry dog unable or unwilling to eat normally.',
    },
    {
      question: 'Does normal drinking mean my dog is probably fine?',
      answer:
        'It is reassuring but does not rule out illness. Appetite can fall before other obvious signs appear, so persistent refusal to eat still deserves attention.',
    },
    {
      question: 'Can an intestinal blockage make a dog stop eating?',
      answer:
        'Yes. Foreign-body obstruction commonly causes loss of appetite and may also cause vomiting, abdominal pain, dehydration, diarrhea, and lethargy.',
    },
    {
      question: 'Should I force-feed my dog?',
      answer:
        'No. Force-feeding can be stressful and may be unsafe if your dog is nauseated, has trouble swallowing, or has an obstruction. Ask your veterinarian how to manage feeding if your dog continues to refuse food.',
    },
    {
      question: 'What will a veterinarian check when a dog stops eating?',
      answer:
        'The evaluation starts with the history and physical examination. Depending on the findings, blood tests, urine testing, stool testing, X-rays, ultrasound, or other diagnostics may be used to look for the cause.',
    },
    {
      question: 'Is a swollen belly with no appetite just an upset stomach?',
      answer:
        'Do not assume that. A swollen or painful abdomen, especially with repeated unsuccessful attempts to vomit, can indicate GDV and requires emergency veterinary care.',
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
        'Lists potentially dangerous foods, medications, and household items for pets and notes that swallowed non-food objects can cause gastrointestinal obstruction.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Gastrointestinal foreign body obstruction in dogs',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/gastrointestinal-foreign-body-obstruction-dogs',
      sourceType: 'academic',
      notes:
        'Supports loss of appetite, vomiting, abdominal pain, dehydration, diarrhea, and lethargy as signs of foreign-body obstruction and explains veterinary diagnosis.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Emergency and Critical Care',
      url: 'https://www.vet.cornell.edu/hospitals/services/emergency-and-critical-care-0',
      sourceType: 'academic',
      notes:
        'Identifies severe vomiting, nonproductive retching, and a bloated, distended, or painful abdomen among problems requiring emergency veterinary evaluation.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Introduction to Digestive Disorders of Dogs',
      url: 'https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/introduction-to-digestive-disorders-of-dogs',
      sourceType: 'other',
      notes:
        'Lists loss of appetite among general signs of digestive disease along with vomiting, diarrhea, abdominal pain, bloating, bleeding, dehydration, and shock.',
    },
    {
      publisher: 'American Animal Hospital Association',
      title: '10 Pet Health Signs You Should Never Ignore',
      url: 'https://www.aaha.org/resources/10-pet-health-signs-you-should-never-ignore/',
      sourceType: 'industry',
      notes:
        'Advises veterinary evaluation for meaningful appetite changes and notes that appetite changes can accompany pain, dental discomfort, illness, or hormonal problems.',
    },
    {
      publisher: 'American Animal Hospital Association',
      title: 'What’s Wrong? Common Pet Pain Signs',
      url: 'https://www.aaha.org/resources/whats-wrong-common-pet-pain-signs/',
      sourceType: 'industry',
      notes:
        'Supports decreased food intake as a possible sign of pain and identifies persistent appetite reduction as a reason for veterinary evaluation.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Food and symptom log',
      description:
        'Record meals offered, what was actually eaten, water intake, vomiting, diarrhea, stool changes, medications, and behavior so your veterinarian has a clearer history.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinary examination',
      description:
        'Useful when appetite loss persists, recurs, or occurs with pain, weight loss, vomiting, diarrhea, or other changes.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Emergency veterinary hospital',
      description:
        'Appropriate for a swollen abdomen with dry heaving, collapse, breathing difficulty, severe weakness, significant vomiting, or another rapidly worsening problem.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Animal poison-control service',
      description:
        'Provides exposure-specific guidance when a dog may have eaten a dangerous food, medication, chemical, or other potentially toxic substance.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'dog-drinking-lots-of-water',
      anchorText: 'Is my dog drinking too much water?',
      relationshipType: 'related',
    },
    { slug: 'dog-swallowed-a-sock', anchorText: 'What if my dog swallowed a sock?', relationshipType: 'cause' },
    { slug: 'dog-ate-grapes', anchorText: 'What if my dog ate grapes or raisins?', relationshipType: 'cause' },
    {
      slug: 'dog-constipation',
      anchorText: 'Can I ignore constipation in my dog?',
      relationshipType: 'related',
    },
  ],
};
