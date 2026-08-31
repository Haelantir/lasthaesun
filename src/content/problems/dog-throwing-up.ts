import type { ProblemSeed } from '../types';

export const dogThrowingUp: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-digestion',
  slug: 'dog-throwing-up',
  canonicalPath: '/pets/dogs/digestion/dog-throwing-up/',
  name: 'Dog Throwing Up',
  eyebrow: 'Pets · Dogs · Digestion',

  h1: 'Can I Ignore My Dog Throwing Up?',
  seoTitle: 'Dog Vomiting: When You Can Watch and When to Call a Vet',
  metaDescription:
    'One vomit can be minor. Repeated vomiting, blood, a swollen belly, weakness, or possible toxin or foreign-object exposure needs faster veterinary attention.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I wait and watch my dog at home?',
  canIUseItLabel: 'Sometimes, if it happened once and your dog seems normal',

  shortAnswer:
    'Sometimes. One isolated episode in an otherwise healthy dog that is acting normal and keeping water down can often be watched at home. Repeated vomiting, blood, a painful or swollen belly, marked weakness, collapse, trouble breathing, or possible toxin or foreign-object exposure should not be ignored.',

  whyItMattersHeading: 'Why Does Vomiting in a Dog Matter?',
  whyItMatters: [
    'Dogs vomit for many reasons, from eating something irritating to intestinal obstruction, poisoning, medication reactions, or disease elsewhere in the body. How dramatic the vomit looks does not reliably tell you how serious the cause is. A dog with a significant problem may vomit only a few times while another dog with a mild stomach upset may vomit more.',
    'Vomiting that continues can also lead to fluid and electrolyte loss. Age and overall health matter too. Puppies, older dogs, and dogs with existing medical problems can become sick faster or may need veterinary attention sooner than a healthy adult dog.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked against FDA pet-safety guidance plus AAHA, Cornell, and UC Davis guidance on vomiting, poisoning, dehydration, foreign objects, and emergency signs.',
  disclaimer:
    'General triage guidance only. Vomiting has many possible causes and this page cannot determine the cause in an individual dog or replace veterinary examination.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'vomited-once-acting-normal',
      label: 'My dog vomited once and is acting completely normal',
      shortDescription:
        'One isolated episode with normal energy, normal behavior, and no other concerning signs.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'WATCH FOR ANOTHER EPISODE',
      resultBody:
        'One episode in an otherwise healthy dog may be a minor and self-limiting stomach upset. What happens afterward matters more than the mess itself.',
      recommendedAction:
        "Keep an eye on your dog's energy, appetite, drinking, stool, and whether vomiting happens again. Call your veterinarian if anything else seems abnormal.",
    },
    {
      slug: 'vomiting-repeatedly',
      label: 'My dog keeps vomiting',
      shortDescription: 'Vomiting has happened repeatedly or is becoming more frequent.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: "DON'T KEEP WAITING",
      resultBody:
        'Repeated vomiting raises the risk of dehydration and makes an underlying illness, obstruction, or other problem more concerning.',
      recommendedAction:
        'Contact your veterinarian promptly. Seek faster care if your dog also becomes weak, painful, unusually quiet, or unable to keep water down.',
    },
    {
      slug: 'cannot-keep-water-down',
      label: 'My dog vomits after drinking water',
      shortDescription: 'Water comes back up or repeated vomiting makes normal drinking impossible.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CALL A VETERINARIAN',
      resultBody:
        'A dog that cannot keep water down can become dehydrated and may have a problem that needs treatment rather than home monitoring.',
      recommendedAction:
        'Contact a veterinarian or emergency animal hospital for guidance. Do not force large amounts of food or water.',
    },
    {
      slug: 'blood-in-vomit',
      label: 'There is blood or coffee-ground material in the vomit',
      shortDescription: 'Vomit is visibly bloody or contains dark material that resembles coffee grounds.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THIS NEEDS VETERINARY ATTENTION',
      resultBody:
        'Fresh blood or digested blood can indicate bleeding in the digestive tract and is not a routine stomach-upset sign.',
      recommendedAction:
        'Contact a veterinarian promptly. Take a photo of the vomit if you can do so without delaying care.',
    },
    {
      slug: 'bloated-belly-dry-heaving',
      label: "My dog's belly looks swollen and they keep trying to vomit",
      shortDescription: 'The abdomen is enlarged or painful and repeated retching produces little or nothing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'GO TO AN EMERGENCY VET',
      resultBody:
        'A swollen abdomen with unproductive retching can occur with gastric dilatation-volvulus and other serious abdominal emergencies.',
      recommendedAction:
        'Go to an emergency veterinary hospital now. Do not wait for your dog to produce vomit or for the swelling to improve on its own.',
    },
    {
      slug: 'possible-toxin-or-medication',
      label: 'My dog may have eaten a toxin or medication',
      shortDescription:
        'There is possible access to human medicine, toxic food, chemicals, plants, or another potentially harmful substance.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CALL NOW',
      resultBody:
        'Vomiting may be an early sign of poisoning. Some toxic exposures can cause serious illness even before other obvious symptoms appear.',
      recommendedAction:
        'Call your veterinarian or an animal poison control center right away. Keep the product, package, or ingredient information available and do not induce vomiting unless specifically instructed.',
    },
    {
      slug: 'possible-foreign-object',
      label: 'My dog may have swallowed a sock, toy, bone, or other object',
      shortDescription: 'Something non-food is missing or you saw your dog swallow an object.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "DON'T ASSUME IT WILL PASS",
      resultBody:
        'Swallowed objects can become lodged in the stomach or intestines. Vomiting can be one sign of an obstruction.',
      recommendedAction:
        'Contact a veterinarian promptly and tell them what may have been swallowed. Do not wait for repeated vomiting before asking for advice.',
    },
    {
      slug: 'vomiting-with-severe-illness',
      label: 'My dog is vomiting and is weak, collapsing, or having trouble breathing',
      shortDescription:
        'Vomiting is accompanied by major changes in strength, responsiveness, gum color, breathing, or coordination.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'TREAT THIS AS AN EMERGENCY',
      resultBody:
        'Vomiting combined with collapse, severe weakness, breathing difficulty, abnormal gum color, or neurologic signs can indicate serious illness or shock.',
      recommendedAction:
        'Go to the nearest emergency veterinary hospital. Call ahead if possible so the staff knows you are coming.',
    },
    {
      slug: 'puppy-or-older-dog',
      label: 'A puppy or older dog is vomiting',
      shortDescription: 'The dog is very young, older, frail, or has an existing medical condition.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'USE A LOWER THRESHOLD FOR CALLING',
      resultBody:
        'Young, older, and medically vulnerable animals may have less reserve when vomiting is caused by dehydration, infection, or another illness.',
      recommendedAction:
        'Contact your veterinarian earlier than you might for a healthy adult dog, especially if vomiting repeats or other symptoms appear.',
    },
    {
      slug: 'food-comes-up-without-retching',
      label: 'Food comes up without heaving or obvious nausea',
      shortDescription: 'Material seems to come up passively with little warning or abdominal effort.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'THIS MAY BE REGURGITATION',
      resultBody:
        'Regurgitation is different from vomiting and can point to problems involving the esophagus rather than the stomach.',
      recommendedAction:
        'Record a video if another episode happens and discuss recurring episodes with your veterinarian. The distinction can change what needs to be investigated.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'It may be an isolated stomach upset',
      description: 'A healthy dog may vomit once and then return to normal without developing any other signs.',
      severity: 'info',
      chainLabel: 'Isolated episode',
    },
    {
      stageLabel: 'IF VOMITING CONTINUES',
      title: 'Fluid and electrolyte losses increase',
      description: 'Ongoing vomiting removes fluid and electrolytes that the body needs for normal function.',
      severity: 'caution',
      chainLabel: 'Repeated vomiting',
    },
    {
      stageLabel: 'IF WATER WILL NOT STAY DOWN',
      title: 'Dehydration becomes a bigger concern',
      description:
        'Continued fluid loss combined with an inability to replace water can lead to dehydration and weakness.',
      severity: 'warning',
      chainLabel: 'Dehydration risk',
    },
    {
      stageLabel: 'IF THERE IS AN UNDERLYING CAUSE',
      title: 'The real problem may keep progressing',
      description:
        'Vomiting can accompany intestinal obstruction, poisoning, medication reactions, metabolic disease, and other conditions that need treatment.',
      severity: 'warning',
      chainLabel: 'Underlying illness',
    },
    {
      stageLabel: 'IF EMERGENCY SIGNS APPEAR',
      title: 'Waiting can become dangerous',
      description:
        'Foreign-body obstruction, toxic exposure, severe dehydration, and a bloated abdomen with unproductive retching can require urgent veterinary care.',
      severity: 'danger',
      chainLabel: 'Veterinary emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One vomit, normal behavior, no other symptoms',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Monitor closely for another episode or any change in energy, appetite, drinking, stool, or comfort.',
    },
    {
      situation: 'Vomiting keeps happening',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact your veterinarian. Repeated vomiting deserves evaluation even if the first episode seemed minor.',
    },
    {
      situation: 'Water will not stay down',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Get veterinary advice promptly because ongoing vomiting without normal fluid intake can lead to dehydration.',
    },
    {
      situation: 'Blood or coffee-ground material is present',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Contact a veterinarian promptly and take a photo or sample information with you if practical.',
    },
    {
      situation: 'Swollen abdomen with repeated unsuccessful retching',
      ignoreAnswer: 'No — emergency',
      severity: 'danger',
      whatToDo: 'Go to an emergency veterinary hospital immediately.',
    },
    {
      situation: 'Possible toxin, medication, or dangerous food exposure',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Call your veterinarian or an animal poison control center right away. Do not induce vomiting without specific instructions.',
    },
    {
      situation: 'Possible swallowed sock, toy, bone, or other foreign object',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact a veterinarian promptly. An obstruction can be serious even when vomiting has not been dramatic.',
    },
    {
      situation: 'Vomiting keeps returning over time',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Arrange a veterinary examination rather than repeatedly treating it as an ordinary sensitive stomach.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Watch your dog, not just the vomit',
      body:
        'Check energy, appetite, drinking, diarrhea, abdominal discomfort, breathing, and whether your dog seems like themselves. Those clues can matter as much as the appearance of the vomit.',
    },
    {
      title: 'Record what happened',
      body:
        'Note whether there was retching, what came up, when your dog last ate, and whether the episode is repeating. A photo or video can help a veterinary team distinguish vomiting from regurgitation.',
    },
    {
      title: 'Keep water available',
      body:
        'Do not deliberately withhold water unless a veterinarian tells you to. If drinking repeatedly triggers more vomiting or water will not stay down, get veterinary advice.',
    },
    {
      title: "Don't reach for human medicine",
      body:
        'Do not give pain relievers or other human medications unless your veterinarian specifically recommends them for your dog. Some medications used safely by people can harm pets.',
    },
    {
      title: "Don't make your dog vomit on your own",
      body:
        'If poisoning is possible, call a veterinarian or animal poison control center first. Inducing vomiting is inappropriate for some exposures and situations.',
    },
    {
      title: 'Check whether grapes or raisins were involved',
      body:
        'If your dog may have eaten grapes or raisins, treat that exposure separately and get veterinary advice right away.',
      destinationProblemSlug: 'dog-ate-grapes',
    },
    {
      title: 'Check whether an object is missing',
      body:
        'If a sock, toy, fabric, bone, or another object may have been swallowed, tell your veterinarian. Vomiting can occur when something becomes lodged in the digestive tract.',
      destinationProblemSlug: 'dog-swallowed-a-sock',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Repeated unsuccessful retching with a swollen abdomen',
      description:
        'Trying to vomit without producing much while the belly becomes enlarged or painful can signal a serious abdominal emergency.',
      severity: 'danger',
    },
    {
      title: 'Collapse, severe weakness, or poor responsiveness',
      description: 'These signs can indicate a much more serious problem than an ordinary stomach upset.',
      severity: 'danger',
    },
    {
      title: 'Difficulty breathing or abnormal gum color',
      description:
        'Breathing trouble or pale, blue, grey, or purple gums requires urgent veterinary attention.',
      severity: 'danger',
    },
    {
      title: 'Blood or coffee-ground material in the vomit',
      description: 'Visible blood or dark digested-blood material can indicate gastrointestinal bleeding.',
      severity: 'danger',
    },
    {
      title: 'Water will not stay down',
      description:
        'Repeatedly vomiting after drinking increases concern for dehydration and a significant underlying problem.',
      severity: 'warning',
    },
    {
      title: 'Possible toxin, medication, or foreign-object ingestion',
      description:
        'Do not wait for symptoms to become severe before seeking veterinary or poison-control advice.',
      severity: 'danger',
    },
    {
      title: 'Dry or tacky gums with worsening lethargy',
      description: 'These can accompany dehydration, especially when vomiting has continued.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does one episode of vomiting mean my dog needs an emergency vet?',
      answer:
        'Usually not if your dog is otherwise healthy, alert, comfortable, and returns to normal. Monitor closely because another episode or a new symptom changes the picture.',
    },
    {
      question: 'Is yellow vomit an emergency?',
      answer:
        'Yellow material is often bile. Color alone does not determine urgency, so pay more attention to repeated vomiting, behavior changes, pain, hydration, and other symptoms.',
    },
    {
      question: 'What does white foamy vomit mean?',
      answer:
        'Foam by itself does not identify the cause. Pay attention to what your dog is doing before and afterward. Repeated unsuccessful retching with a swollen abdomen is an emergency regardless of what little foam comes up.',
    },
    {
      question: 'How can I tell vomiting from regurgitation?',
      answer:
        'Vomiting usually involves nausea, retching, and abdominal contractions. Regurgitation is generally more passive and may happen with little warning or effort.',
    },
    {
      question: 'Should I let my dog drink water after vomiting?',
      answer:
        'Keep water available unless your veterinarian gives different instructions. If your dog repeatedly vomits after drinking or cannot keep water down, call for veterinary advice.',
    },
    {
      question: 'What should I feed my dog after vomiting?',
      answer:
        'There is no single feeding plan for every dog. A healthy adult with an isolated mild episode may be managed differently from a puppy, senior dog, or dog with another illness, so ask your veterinarian if you are unsure.',
    },
    {
      question: 'Can I give Pepto-Bismol or another human medicine?',
      answer:
        'Do not give human medication unless your veterinarian specifically recommends it for your dog. Human drugs can have different effects and risks in animals.',
    },
    {
      question: 'How many times can a dog vomit before I should worry?',
      answer:
        'There is no reliable universal count. Multiple episodes over a short period, worsening symptoms, or an inability to keep water down are more useful warning signs than waiting for a particular number.',
    },
    {
      question: 'My dog ate grass and vomited. Can I ignore it?',
      answer:
        'An isolated episode followed by completely normal behavior may only need monitoring. Repeated vomiting or other signs of illness should not be dismissed because grass was present.',
    },
    {
      question: 'Can an intestinal blockage cause only a few episodes of vomiting?',
      answer:
        'Yes. The number of vomiting episodes does not reliably measure how serious the underlying cause is. Suspected foreign-object ingestion deserves veterinary advice even if vomiting has been limited.',
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
        'FDA guidance on foods, medications, plants, and other items that may harm pets, including advice to contact a veterinarian or pet poison control center promptly after a potentially dangerous ingestion.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Who Do You Call if You Have a Pet Emergency?',
      url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/who-do-you-call-if-you-have-pet-emergency',
      sourceType: 'government',
      notes:
        'FDA guidance on contacting a veterinarian, emergency animal hospital, or animal poison control center when urgent veterinary advice is needed.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Get the Facts about Pain Relievers for Pets',
      url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-about-pain-relievers-pets',
      sourceType: 'government',
      notes:
        'FDA information on risks from giving pets human pain relievers and on vomiting and other adverse effects associated with NSAIDs.',
    },
    {
      publisher: 'American Animal Hospital Association',
      title: "Why is my Dog throwing up? Vets explain when it's serious",
      url: 'https://www.aaha.org/resources/why-is-my-dog-throwing-up-vets-explain-when-its-serious/',
      sourceType: 'industry',
      notes:
        'Veterinary guidance on isolated versus repeated vomiting, vomiting versus regurgitation, and red flags including blood, dehydration, abdominal pain or bloating, weakness, toxins, and foreign objects.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Vomiting',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/vomiting',
      sourceType: 'academic',
      notes:
        'Guidance on dehydration, electrolyte imbalance, blood in vomit, persistent vomiting, abdominal pain, and the distinction between vomiting and regurgitation.',
    },
    {
      publisher: 'UC Davis School of Veterinary Medicine',
      title: 'Guide to Pet Emergencies',
      url: 'https://healthtopics.vetmed.ucdavis.edu/health-topics/guide-pet-emergencies',
      sourceType: 'academic',
      notes:
        'Emergency guidance including a lower threshold for veterinary attention in young and older pets and concern for blood or foreign material associated with vomiting.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Veterinary clinic or emergency animal hospital',
      description:
        'Use for persistent vomiting, blood, abdominal pain or swelling, severe weakness, breathing problems, or other concerning symptoms.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Animal poison control service',
      description:
        'Provides case-specific guidance when a dog may have swallowed medication, toxic food, a chemical, or another potentially poisonous substance.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Phone camera and symptom notes',
      description:
        'Photos, videos, and notes about timing, behavior, food, medications, and possible exposures can help a veterinary team understand what happened.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'dog-diarrhea', anchorText: 'What if my dog has diarrhea too?', relationshipType: 'sibling' },
    { slug: 'dog-ate-grapes', anchorText: 'What if my dog ate grapes or raisins?', relationshipType: 'cause' },
    { slug: 'dog-swallowed-a-sock', anchorText: 'What if my dog swallowed a sock?', relationshipType: 'cause' },
  ],
};
