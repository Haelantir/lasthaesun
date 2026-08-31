import type { ProblemSeed } from '../types';

export const dogEatingGrass: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-eating-and-drinking',
  slug: 'dog-eating-grass',
  canonicalPath: '/pets/dogs/eating-and-drinking/dog-eating-grass/',
  name: 'Dog Eating Grass',
  eyebrow: 'Pets · Dogs · Eating & Drinking',

  h1: 'Can I Ignore My Dog Eating Grass?',
  seoTitle: 'Dog Eating Grass: When It’s Normal and When to Call a Vet',
  metaDescription:
    'Most dogs can occasionally eat grass without a problem. Learn when vomiting, sudden grazing, pesticides, parasites, or toxic plants change the answer.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I let my dog keep eating grass?',
  canIUseItLabel: 'Usually, if your dog feels well and the grass is safe',

  shortAnswer:
    'Usually, yes. Occasional grass eating in a dog that is otherwise acting normal is common and does not automatically mean the dog is sick. Stop treating it as harmless if the behavior suddenly changes, your dog keeps vomiting, or the grass may contain lawn chemicals or toxic plants.',

  whyItMattersHeading: "When Grass Eating Is Just a Habit — and When It Isn't",
  whyItMatters: [
    'Grass and plant eating is a common canine behavior. Research on healthy dogs found that plant eating often occurred without signs of illness beforehand and without vomiting afterward, so seeing your dog nibble a lawn does not by itself point to an upset stomach or a nutritional problem.',
    'The more useful question is what comes with the grass eating. A sudden or frantic change in behavior, repeated vomiting, diarrhea, loss of appetite, abdominal pain, weakness, or eating other non-food objects deserves more attention. The lawn itself matters too: pesticides, weed killers, fertilizers, animal feces, mushrooms, and toxic garden plants can turn ordinary grazing into an exposure problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Call a Vet If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Reviewed against FDA and EPA pet-safety guidance, Cornell vomiting guidance, published canine plant-eating research, and veterinary references on abnormal ingestion.',
  disclaimer:
    'This page is general triage guidance for dogs. It cannot identify a plant, diagnose gastrointestinal disease, or determine toxicity after a specific exposure. Contact a veterinarian or pet poison service when poisoning is possible.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'occasional-grazing-and-otherwise-normal',
      label: 'My dog occasionally nibbles grass and acts completely normal',
      shortDescription: 'Appetite, energy, drinking, stool, and behavior are unchanged.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Usually fine to leave alone',
      resultBody:
        'Occasional grass eating is common in dogs and can occur without illness before or vomiting afterward. If your dog feels well and the grass is from a safe untreated area, the behavior itself usually does not need treatment.',
      recommendedAction:
        'Let your dog move on naturally or redirect them if you prefer. Keep an eye out for a change in frequency or any digestive symptoms.',
    },
    {
      slug: 'vomited-once-after-eating-grass',
      label: 'My dog ate grass, vomited once, and now seems normal',
      shortDescription:
        'The vomiting stopped and your dog is bright, comfortable, and interested in normal activities.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Watch the dog, not just the grass',
      resultBody:
        'An isolated vomiting episode can happen after grass or for many unrelated reasons. If your dog quickly returns to normal and the vomiting does not continue, monitoring is reasonable.',
      recommendedAction:
        'Watch appetite, energy, drinking, and any further vomiting. Contact your veterinarian if the problem returns or other symptoms appear.',
    },
    {
      slug: 'frequent-grazing-but-no-other-symptoms',
      label: 'My dog eats grass frequently but otherwise seems healthy',
      shortDescription: 'The pattern is regular rather than sudden and there are no obvious signs of illness.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Not urgent, but worth mentioning',
      resultBody:
        'Frequent plant eating can still be a normal behavior, but a persistent pattern is worth discussing during routine veterinary care, especially if it is becoming more intense or includes other non-food items.',
      recommendedAction:
        'Note when it happens and what your dog is eating normally. Do not assume the dog needs a fiber supplement or diet change without veterinary guidance.',
    },
    {
      slug: 'sudden-frantic-grass-eating',
      label: 'My dog suddenly wants to eat grass frantically',
      shortDescription: 'The behavior is new, urgent, or much more intense than usual.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: "Don't dismiss a sudden change",
      resultBody:
        'Grass eating alone can be normal, but a sharp change in behavior matters more than the grass itself. Gastrointestinal discomfort and other medical or behavioral problems can change eating behavior.',
      recommendedAction:
        'Watch closely for vomiting, diarrhea, appetite changes, abdominal discomfort, weakness, or other unusual behavior and contact your veterinarian if the pattern persists or symptoms appear.',
    },
    {
      slug: 'grass-eating-with-vomiting-or-diarrhea',
      label: 'My dog is eating grass and also vomiting or having diarrhea',
      shortDescription: 'Digestive symptoms are occurring along with the grazing.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a stomach problem',
      resultBody:
        'Once vomiting or diarrhea is recurring, the question is no longer whether grass eating is normal. Gastrointestinal illness, dietary problems, parasites, toxins, or other conditions may need to be considered.',
      recommendedAction:
        'Contact your veterinarian for guidance, especially if symptoms continue, your dog stops eating or drinking normally, or their energy drops.',
    },
    {
      slug: 'blood-pain-or-lethargy',
      label: 'My dog has blood in the vomit, belly pain, or marked lethargy',
      shortDescription: 'Grass eating is happening alongside a more serious warning sign.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Get veterinary help',
      resultBody:
        'Blood in vomit, pronounced lethargy, weakness, or abdominal pain can occur with conditions that need prompt assessment. Grass eating does not explain these signs away.',
      recommendedAction:
        'Contact a veterinarian promptly. If your dog is collapsing, severely weak, or rapidly worsening, seek urgent veterinary care.',
    },
    {
      slug: 'grass-from-treated-lawn',
      label: 'My dog ate grass from a recently treated lawn',
      shortDescription: 'Pesticides, weed killers, fertilizers, or another lawn product may have been applied.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The chemical exposure is the issue',
      resultBody:
        'Lawn pesticides, weed killers, and fertilizers can be hazardous to pets depending on the product and exposure. Do not assume the grass is safe just because your dog usually eats untreated grass without problems.',
      recommendedAction:
        'Keep your dog away from the treated area, find the product label if possible, and contact your veterinarian or a pet poison service for exposure-specific advice.',
    },
    {
      slug: 'unknown-plant-or-mushroom',
      label: 'My dog may have eaten a plant or mushroom mixed in with the grass',
      shortDescription: 'You are not sure that everything swallowed was ordinary lawn grass.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "Don't guess at plant toxicity",
      resultBody:
        'Some plants and other yard growth can be harmful to pets, and toxicity depends on the species, the part eaten, and the amount. An unknown plant exposure deserves a different response from ordinary grass grazing.',
      recommendedAction:
        'Prevent further eating, photograph or safely identify what was eaten if possible, and contact your veterinarian or a pet poison service.',
    },
    {
      slug: 'grass-in-feces-contaminated-area',
      label: 'My dog eats grass where other animals frequently poop',
      shortDescription: 'The area may be contaminated with animal feces or soil containing parasite stages.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Pick a cleaner grazing spot',
      resultBody:
        'Dog and cat feces can contaminate soil and plants with parasite eggs or larvae. Eating vegetation or dirt in heavily soiled areas adds an avoidable exposure risk.',
      recommendedAction:
        "Redirect your dog away from contaminated areas, keep parasite prevention and veterinary testing appropriate for your dog's lifestyle, and clean up pet waste promptly.",
    },
    {
      slug: 'grass-plus-other-nonfood-items',
      label: 'My dog also eats dirt, fabric, rocks, or other non-food items',
      shortDescription: 'Grass eating is part of a broader pattern of swallowing things that are not food.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'This is more than ordinary grazing',
      resultBody:
        'Repeatedly eating non-food items can fall under abnormal ingestive behavior or pica. Medical conditions, gastrointestinal problems, behavioral disorders, or normal exploratory behavior can all be relevant depending on the dog.',
      recommendedAction:
        'Arrange a veterinary assessment and prevent access to objects that could cause poisoning, choking, or gastrointestinal obstruction.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Most occasional grazing causes no obvious problem',
      description:
        'Many healthy dogs eat plants or grass without appearing ill beforehand or vomiting afterward.',
      severity: 'info',
      chainLabel: 'Occasional grazing',
    },
    {
      stageLabel: 'IF THE STOMACH REACTS',
      title: 'Vomiting or digestive upset may appear',
      description:
        'Plant material can accompany vomiting or gastrointestinal irritation. An isolated episode may settle, while repeated symptoms deserve more attention.',
      severity: 'caution',
      chainLabel: 'Digestive symptoms',
    },
    {
      stageLabel: 'IF THE AREA IS CONTAMINATED',
      title: 'The risk may come from what is on or around the grass',
      description:
        'Lawn chemicals, animal feces, and unwanted plants can create exposure risks that have little to do with ordinary grass itself.',
      severity: 'warning',
      chainLabel: 'Contaminated grass',
    },
    {
      stageLabel: 'IF THE BEHAVIOR CHANGES',
      title: 'Persistent or abnormal eating can point elsewhere',
      description:
        'Sudden intense grazing or eating multiple kinds of non-food material can occur alongside gastrointestinal disease, behavioral problems, or other medical conditions.',
      severity: 'warning',
      chainLabel: 'Changed behavior',
    },
    {
      stageLabel: 'IF POISONING OR SERIOUS ILLNESS IS INVOLVED',
      title: 'Grass eating becomes the least important symptom',
      description:
        'Suspected toxic exposure, repeated vomiting, blood, marked weakness, or abdominal pain can require prompt veterinary assessment.',
      severity: 'danger',
      chainLabel: 'Veterinary care',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Occasional grass nibbling and your dog otherwise feels normal',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'No special treatment is usually needed. Keep your dog away from treated lawns, toxic plants, and heavily contaminated areas.',
    },
    {
      situation: 'One vomiting episode after grass eating and your dog is back to normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Monitor for more vomiting, appetite changes, diarrhea, lethargy, or discomfort. Call your veterinarian if symptoms return or worsen.',
    },
    {
      situation: 'Frequent grass eating that has been stable with no other symptoms',
      ignoreAnswer: 'Usually',
      severity: 'caution',
      whatToDo:
        'Track the pattern and mention it during routine veterinary care if it is persistent or increasing.',
    },
    {
      situation: 'A sudden or frantic increase in grass eating',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Look for digestive or behavioral changes and contact your veterinarian if the new pattern persists or other symptoms appear.',
    },
    {
      situation: 'Grass eating with repeated vomiting, diarrhea, or loss of appetite',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact your veterinarian because the accompanying symptoms matter more than the grass eating itself.',
    },
    {
      situation: 'Grass from a lawn treated with pesticide, herbicide, or fertilizer',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Prevent further exposure, check the product label, and contact your veterinarian or a pet poison service for guidance specific to the product.',
    },
    {
      situation: 'An unknown plant or mushroom may have been swallowed',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Prevent further eating and contact your veterinarian or a pet poison service rather than waiting for symptoms.',
    },
    {
      situation: 'Blood in vomit, marked lethargy, weakness, collapse, or abdominal pain',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Seek prompt veterinary care. These signs should not be attributed to harmless grass eating.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check how your dog actually feels',
      body:
        'Look at appetite, energy, drinking, stool, vomiting, and comfort. A dog casually grazing while otherwise normal is a very different situation from a dog that is frantic, weak, painful, or repeatedly sick.',
    },
    {
      title: 'Check where the grass came from',
      body:
        'Avoid lawns that may have been treated with pesticides, herbicides, fertilizers, or other products. If a product was used, follow its label precautions for pets rather than guessing when the area is safe.',
    },
    {
      title: 'Redirect your dog from questionable areas',
      body:
        'Use a leash, cue, toy, or treat to move your dog away from unknown plants, mushrooms, chemically treated lawns, and areas contaminated with animal feces.',
    },
    {
      title: 'Track a new or persistent pattern',
      body:
        'Note whether grass eating is new, increasing, tied to vomiting or stool changes, or accompanied by eating dirt and other non-food objects. That information is more useful to a veterinarian than the grass habit alone.',
    },
    {
      title: 'Treat possible poisoning as a separate problem',
      body:
        'If your dog may have swallowed a toxic plant or contacted a lawn chemical, keep the packaging or take a clear photo of the plant when safe to do so and contact your veterinarian or a pet poison service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Repeated vomiting or inability to keep water down',
      description:
        'Ongoing vomiting can lead to dehydration and may reflect gastrointestinal disease, poisoning, or another problem.',
      severity: 'danger',
    },
    {
      title: 'Blood or coffee-ground-like material in vomit',
      description: 'Blood in vomit deserves veterinary assessment rather than being blamed on grass eating.',
      severity: 'danger',
    },
    {
      title: 'Marked lethargy, weakness, or collapse',
      description:
        'A dog that is substantially less responsive or weak needs more attention than a dog casually grazing.',
      severity: 'danger',
    },
    {
      title: 'A painful or noticeably distended abdomen',
      description:
        'Abdominal pain or swelling can occur with serious gastrointestinal problems and should not be watched casually at home.',
      severity: 'danger',
    },
    {
      title: 'Suspected pesticide, weed killer, or fertilizer exposure',
      description:
        'The risk depends on the exact product and exposure, so use the label and professional poison guidance rather than a generic rule.',
      severity: 'danger',
    },
    {
      title: 'An unknown or potentially toxic plant was eaten',
      description:
        'Many yard and garden plants are not interchangeable. Toxicity can vary by plant species, plant part, and amount swallowed.',
      severity: 'danger',
    },
    {
      title: 'Grass eating has become obsessive or includes other non-food items',
      description:
        'Persistent abnormal ingestive behavior can warrant evaluation for medical or behavioral causes and may expose the dog to foreign-body hazards.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does eating grass mean my dog has an upset stomach?',
      answer:
        "Not necessarily. Research on plant-eating dogs found that illness before eating and vomiting afterward were not the usual pattern. Look at your dog's overall condition instead of treating grass eating as proof of nausea.",
    },
    {
      question: 'Do dogs eat grass because they want to make themselves vomit?',
      answer:
        'That idea is popular, but the evidence does not show that vomiting is the normal outcome of grass eating. Some dogs do vomit afterward, while many do not.',
    },
    {
      question: 'Should I stop my dog from eating all grass?',
      answer:
        'Not necessarily. Occasional grazing by a healthy dog can be left alone, but it is sensible to prevent access to chemically treated lawns, unknown plants, mushrooms, and feces-contaminated areas.',
    },
    {
      question: 'Can my dog get parasites from eating grass?',
      answer:
        "The concern is contaminated soil or vegetation rather than clean grass itself. Animal feces can deposit parasite eggs or larvae into the environment, so discourage grazing in heavily soiled areas and follow your veterinarian's parasite-control advice.",
    },
    {
      question: 'What does yellow foam after eating grass mean?',
      answer:
        'Yellow or greenish vomit can contain bile, but its appearance does not tell you why your dog vomited. An isolated episode in an otherwise normal dog may settle, while repeated vomiting or other symptoms deserves veterinary advice.',
    },
    {
      question: "Does grass eating mean my dog's diet needs more fiber?",
      answer:
        'Not automatically. Fiber has been proposed as one factor in some dogs, but grass eating is also common in dogs eating complete diets. Do not change food or add supplements solely because your dog occasionally grazes.',
    },
    {
      question: 'What should I do if the lawn was recently sprayed?',
      answer:
        'Keep your dog out of the treated area and read the product label. If your dog may have swallowed treated grass or the product itself, contact your veterinarian or a pet poison service with the product information.',
    },
    {
      question: 'Is ordinary lawn grass poisonous to dogs?',
      answer:
        'Ordinary grass is usually not the main concern in casual grazing. Problems are more likely when the dog becomes sick, consumes large amounts of plant material, or encounters lawn chemicals or another plant growing among the grass.',
    },
    {
      question: 'What if my dog eats grass on every walk?',
      answer:
        'A longstanding pattern without symptoms can still be behavioral. If the grazing becomes intense, suddenly increases, accompanies digestive symptoms, or expands to dirt and other non-food objects, have it assessed.',
    },
    {
      question: 'Can puppies eat grass too?',
      answer:
        'Puppies may explore plants and other objects with their mouths. Occasional grass nibbling can occur, but supervise closely because puppies may be more likely to swallow unknown plants or other non-food material.',
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
        'Identifies lawn fertilizers, weed killers, pesticides, and numerous plants as potential pet hazards and advises prompt contact with a veterinarian or pet poison center after a potentially dangerous ingestion.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Read the Label First: Protect Your Pets',
      url: 'https://www.epa.gov/pets/read-label-first-protect-your-pets',
      sourceType: 'government',
      notes:
        'Supports following pesticide label directions, keeping pets away from treated areas as directed, and keeping product information available if an exposure occurs.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Vomiting',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/vomiting',
      sourceType: 'academic',
      notes:
        'Supports treating persistent vomiting and vomiting with blood, lethargy, or abdominal pain more seriously while noting that an isolated vomiting episode may be self-limited.',
    },
    {
      publisher: 'Applied Animal Behaviour Science',
      title: 'Characterisation of plant eating in dogs',
      url: 'https://www.sciencedirect.com/science/article/pii/S0168159107001827',
      sourceType: 'academic',
      notes:
        'Survey research found plant eating common among dogs and found that regular signs of illness before eating and regular vomiting afterward were uncommon.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Behavior Problems of Dogs',
      url: 'https://www.merckvetmanual.com/behavior/behavior-of-dogs/behavior-problems-of-dogs',
      sourceType: 'other',
      notes:
        'Describes pica and other abnormal ingestive behaviors and notes that medical causes including gastrointestinal disorders should be considered when abnormal eating patterns occur.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'How Toxocariasis Spreads',
      url: 'https://www.cdc.gov/toxocariasis/spreads/index.html',
      sourceType: 'government',
      notes:
        'Explains that roundworm eggs from infected dog or cat feces can contaminate soil and supports keeping pet areas free of fecal contamination and maintaining veterinary parasite care.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Leash or walking harness',
      description:
        'Helps you redirect grazing away from treated lawns, mushrooms, unknown plants, and areas contaminated with animal feces.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Lawn treatment product label',
      description:
        'The label gives the product-specific precautions, re-entry directions, first-aid information, and contact details that generic advice cannot replace.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinary evaluation',
      description:
        'Useful when grass eating is new, persistent, excessive, or accompanied by vomiting, diarrhea, appetite changes, pain, lethargy, or other abnormal behavior.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pet poison consultation',
      description:
        'Appropriate when a dog may have swallowed a toxic plant, mushroom, pesticide, herbicide, fertilizer, or another potentially hazardous yard substance.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'dog-constipation',
      anchorText: 'Can I Ignore My Dog Being Constipated?',
      relationshipType: 'related',
    },
  ],
};
