import type { ProblemSeed } from '../types';

export const dogDiarrhea: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-digestion',
  slug: 'dog-diarrhea',
  canonicalPath: '/pets/dogs/digestion/dog-diarrhea/',
  name: 'Dog Diarrhea',
  eyebrow: 'Pets · Dogs · Digestion',

  h1: 'Can I Ignore Diarrhea in My Dog?',
  seoTitle: 'Dog Diarrhea: When to Watch It and When to Call a Vet',
  metaDescription:
    'A mild episode may pass on its own, but vomiting, lethargy, black stool, dehydration, blood, puppy age, or persistent diarrhea changes the answer.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I wait and see?',
  canIUseItLabel: 'Sometimes, if your dog is otherwise normal',

  shortAnswer:
    'Sometimes. A mild episode in an otherwise bright adult dog that is eating, drinking, and acting normally can often be watched at home. Do not wait if your dog is weak, repeatedly vomiting, passing black or bloody stool, becoming dehydrated, may have swallowed something dangerous, or is a puppy or not fully vaccinated.',

  whyItMattersHeading: 'Why Does Dog Diarrhea Matter?',
  whyItMatters: [
    'Diarrhea is a symptom, not a diagnosis. A sudden food change, dietary indiscretion, stress, or a mild intestinal upset can cause a short-lived episode, but parasites, infection, toxins, inflammation, and intestinal blockage can produce the same basic sign.',
    'The bigger concern is what comes with the diarrhea. Ongoing fluid loss can cause dehydration and electrolyte problems, especially when vomiting is happening too. How your dog feels, whether your dog can drink, the appearance of the stool, age, vaccination status, and whether the problem keeps going matter more than one loose bowel movement by itself.',
  ].join('\n\n'),

  redFlagsHeading: 'Call a Vet Promptly If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Reviewed against Cornell, CDC, WSAVA/ENOVAT, Merck Veterinary Manual, and FDA guidance on canine diarrhea, dehydration, infectious risks, parvovirus, and home triage.',
  disclaimer:
    'General triage guidance only. Dog diarrhea has many possible causes, and a page cannot assess hydration, abdominal pain, infection, toxin exposure, or intestinal blockage in an individual dog.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-loose-stool-normal-dog',
      label: 'One loose stool and my adult dog seems completely normal',
      shortDescription: 'Your dog is alert, drinking, interested in food, and has no vomiting or obvious pain.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'WATCH FOR NOW',
      resultBody:
        'One mild episode in an otherwise normal adult dog often settles without treatment. The important part is making sure it stays mild and your dog continues to act normally.',
      recommendedAction:
        "Keep fresh water available, avoid rich treats or sudden diet changes, and watch the next bowel movements and your dog's energy and appetite.",
    },
    {
      slug: 'repeated-diarrhea-normal-dog',
      label: 'The diarrhea has happened several times but my dog still seems normal',
      shortDescription:
        'Stool is repeatedly loose or watery, but your dog is bright, drinking, and not vomiting.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'KEEP A CLOSE EYE ON IT',
      resultBody:
        'Repeated diarrhea increases fluid loss even when a dog still looks well. If it continues, the chance that your dog needs an exam or stool testing goes up.',
      recommendedAction:
        'Keep water available and contact your veterinarian if the diarrhea keeps going, becomes more frequent, or any new symptom appears.',
    },
    {
      slug: 'after-food-change',
      label: 'It started after a sudden food change or dietary indiscretion',
      shortDescription:
        'The timing fits a new food, unusual treats, table scraps, or something your dog ate outside.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'OFTEN MILD, BUT WATCH THE DOG',
      resultBody:
        'Sudden diet changes and dietary indiscretion are common causes of short-lived diarrhea. That explanation is reassuring only while your dog remains otherwise well.',
      recommendedAction:
        'Stop rich extras and sudden food changes. Keep water available and get veterinary advice if your dog becomes sick in any other way or the diarrhea does not settle.',
    },
    {
      slug: 'diarrhea-and-vomiting',
      label: 'My dog has diarrhea and repeated vomiting',
      shortDescription: 'Vomiting is occurring along with diarrhea or your dog cannot keep water down.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CALL A VET NOW',
      resultBody:
        'Vomiting and diarrhea together can accelerate fluid loss and may occur with infections, toxins, pancreatitis, or intestinal obstruction. A dog that cannot keep water down can deteriorate faster than one with diarrhea alone.',
      recommendedAction:
        'Contact a veterinarian promptly. If your dog is weak, collapsing, severely painful, or unable to keep water down, seek urgent veterinary care.',
    },
    {
      slug: 'black-tarry-stool',
      label: 'The stool is black and tarry',
      shortDescription: 'The feces look unusually black, sticky, or tar-like rather than simply dark brown.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THIS CAN MEAN DIGESTED BLOOD',
      resultBody:
        'Black tarry stool can be melena, which is partially digested blood from bleeding higher in the digestive tract or another source. This is not a routine watch-and-wait sign.',
      recommendedAction:
        'Contact a veterinarian promptly and describe the stool. Seek urgent care sooner if your dog is weak, pale, vomiting, painful, or collapsing.',
    },
    {
      slug: 'fresh-blood-in-stool',
      label: 'There is fresh red blood in the diarrhea',
      shortDescription: 'You see red streaks, drops, or clearly bloody diarrhea.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'CALL YOUR VET',
      resultBody:
        "Fresh blood can occur with irritation of the lower bowel, but it can also accompany more significant disease. Blood by itself does not tell you how systemically ill the dog is, so the rest of the dog's condition matters.",
      recommendedAction:
        'Contact your veterinarian for guidance. Seek urgent care if bleeding is heavy or repeated, or if your dog is weak, vomiting, painful, or showing signs of dehydration.',
    },
    {
      slug: 'lethargic-not-eating',
      label: 'My dog is lethargic, weak, or refusing food',
      shortDescription: 'Your dog is no longer acting normally in addition to having diarrhea.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE DOG IS SICK, NOT JUST THE STOOL',
      resultBody:
        'Loss of appetite, weakness, or marked lethargy raises concern for dehydration or an underlying illness that needs more than home observation.',
      recommendedAction:
        'Contact a veterinarian promptly. If your dog is collapsing, has very pale gums, seems severely weak, or is difficult to rouse, seek emergency care.',
    },
    {
      slug: 'puppy-or-unvaccinated',
      label: 'My dog is a puppy or is not fully vaccinated',
      shortDescription: 'A young dog or a dog with incomplete vaccination has developed diarrhea.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CALL YOUR VET PROMPTLY',
      resultBody:
        'Puppies can become dehydrated more easily, and unvaccinated or incompletely vaccinated dogs with gastrointestinal signs need assessment for serious infections such as parvovirus.',
      recommendedAction:
        'Contact your veterinarian promptly, especially if there is vomiting, poor appetite, lethargy, weakness, or blood in the stool. Keep the dog away from shared dog areas until an infectious cause is ruled out.',
    },
    {
      slug: 'possible-toxin-or-foreign-object',
      label: 'My dog may have eaten a toxin or swallowed an object',
      shortDescription:
        'Diarrhea started after possible access to medication, chemicals, toxic food, trash, toys, fabric, bones, or another object.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DO NOT WAIT ON THE DIARRHEA',
      resultBody:
        'Toxins and intestinal foreign bodies can cause diarrhea along with vomiting, pain, appetite loss, or other signs. Waiting for the stool to improve can delay treatment of the real problem.',
      recommendedAction:
        'Contact a veterinarian or appropriate poison service promptly and tell them what may have been swallowed. If an object may be involved, do not induce vomiting unless you are specifically told to do so.',
    },
    {
      slug: 'persistent-or-recurring',
      label: 'The diarrhea keeps coming back or is not resolving',
      shortDescription:
        'The problem has continued beyond a day or two or repeatedly returns after seeming to improve.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'IT NEEDS A CAUSE, NOT MORE WAITING',
      resultBody:
        'Persistent or recurrent diarrhea can reflect parasites, food-related disease, chronic intestinal inflammation, or illness elsewhere in the body. Continuing to guess at home can also prolong dehydration or weight loss.',
      recommendedAction:
        'Arrange a veterinary visit. Bring a fresh stool sample if your clinic requests one and note any diet changes, medications, exposures, vomiting, appetite changes, or weight loss.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'A mild episode may be self-limiting',
      description:
        'Some dogs develop loose stool after a diet change, scavenging, stress, or a mild gastrointestinal upset and otherwise remain bright and comfortable.',
      severity: 'info',
      chainLabel: 'Mild intestinal upset',
    },
    {
      stageLabel: 'IF IT CONTINUES',
      title: 'Fluid and electrolyte losses add up',
      description:
        'Repeated watery stool removes fluid the body would normally absorb. Vomiting at the same time increases the risk of dehydration.',
      severity: 'caution',
      chainLabel: 'Ongoing fluid loss',
    },
    {
      stageLabel: 'IF OTHER SIGNS APPEAR',
      title: 'The cause may be more serious',
      description:
        'Lethargy, appetite loss, vomiting, pain, black stool, or significant weakness can accompany infection, inflammation, bleeding, toxin exposure, or obstruction.',
      severity: 'warning',
      chainLabel: 'Systemic illness',
    },
    {
      stageLabel: 'IN A PUPPY OR UNVACCINATED DOG',
      title: 'Serious infection moves higher on the list',
      description:
        'Parvovirus can cause vomiting, diarrhea, appetite loss, weakness, and dehydration, with young and unvaccinated dogs at particular risk.',
      severity: 'warning',
      chainLabel: 'Higher-risk patient',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Severe dehydration or the underlying disease becomes dangerous',
      description:
        'Serious gastrointestinal disease can progress to circulatory problems, shock, or other life-threatening complications if the dog is losing fluid or the underlying cause is not treated.',
      severity: 'danger',
      chainLabel: 'Emergency illness',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One loose stool in a healthy adult dog that is acting normally',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Keep water available and monitor appetite, energy, vomiting, stool appearance, and whether the diarrhea happens again.',
    },
    {
      situation: 'Repeated diarrhea but the dog is bright, drinking, and not vomiting',
      ignoreAnswer: 'Only while closely monitoring',
      severity: 'caution',
      whatToDo:
        'Watch closely and contact your veterinarian if it continues, worsens, or any other symptom appears.',
    },
    {
      situation: 'Diarrhea continues beyond a day or two',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Arrange a veterinary visit rather than continuing home observation.',
    },
    {
      situation: 'Fresh red blood appears in the stool',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Call your veterinarian for guidance and seek urgent care if bleeding is heavy or repeated or your dog is otherwise unwell.',
    },
    {
      situation: 'Stool is black and tarry',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Contact a veterinarian promptly because black tarry stool can indicate digested blood.',
    },
    {
      situation: 'Vomiting, weakness, marked lethargy, or poor appetite appears',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact a veterinarian promptly. Seek urgent care if your dog cannot keep water down, collapses, or becomes severely weak.',
    },
    {
      situation: 'A puppy or incompletely vaccinated dog develops diarrhea',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact your veterinarian promptly, especially if vomiting, appetite loss, lethargy, weakness, or blood is also present.',
    },
    {
      situation: 'A toxin, medication, dangerous food, or swallowed object may be involved',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Get veterinary or poison-control guidance promptly instead of waiting to see whether the diarrhea stops.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Keep fresh water available',
      body:
        'Diarrhea increases fluid loss. Make sure your dog can reach clean water, but seek veterinary care if your dog cannot keep water down or becomes weak or dehydrated.',
    },
    {
      title: 'Watch the dog, not just the stool',
      body:
        'Note energy, appetite, drinking, vomiting, belly pain, stool color, how often diarrhea occurs, and anything unusual your dog may have eaten. Those details are more useful than calling every loose stool the same problem.',
    },
    {
      title: 'Skip rich extras and avoid abrupt diet changes',
      body:
        'Rich food, excessive treats, and sudden diet changes can worsen gastrointestinal upset. If your veterinarian recommends a digestible diet, use it only as directed and return to a complete balanced diet as advised.',
    },
    {
      title: 'Do not reach for human anti-diarrhea medicine',
      body:
        'Human products such as loperamide or bismuth-containing medicines are not appropriate for every dog and can interact with other conditions or medications. Use them only when your veterinarian specifically directs you.',
    },
    {
      title: 'Handle diarrhea as potentially infectious',
      body:
        'Pick up stool promptly, wash your hands after cleanup, clean soiled pet items, and avoid dog parks or shared water areas while diarrhea is ongoing if an infectious cause is possible.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Repeated vomiting or inability to keep water down',
      description: 'Fluid loss can build quickly when vomiting and diarrhea occur together.',
      severity: 'danger',
    },
    {
      title: 'Black, sticky, tar-like stool',
      description: 'This can represent digested blood and needs veterinary assessment.',
      severity: 'danger',
    },
    {
      title: 'Marked lethargy, weakness, collapse, or very pale gums',
      description: 'These signs suggest the problem is affecting more than the bowel movement itself.',
      severity: 'danger',
    },
    {
      title: 'A painful or swollen abdomen',
      description:
        'Significant abdominal pain or distension can occur with conditions that need urgent evaluation.',
      severity: 'danger',
    },
    {
      title: 'Fresh blood that is heavy, repeated, or paired with illness',
      description:
        'Blood matters more when it is substantial or comes with vomiting, weakness, dehydration, or pain.',
      severity: 'warning',
    },
    {
      title: 'Diarrhea in a young or incompletely vaccinated puppy',
      description: 'Puppies are more vulnerable to dehydration and serious infections such as parvovirus.',
      severity: 'warning',
    },
    {
      title: 'Possible toxin or foreign-object ingestion',
      description: 'Diarrhea may be only one sign of poisoning or intestinal obstruction.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can one loose stool in my dog be normal?',
      answer:
        'It can happen after a diet change, stress, scavenging, or a mild intestinal upset. If your adult dog is bright, eating, drinking, and otherwise normal, one mild episode can usually be watched.',
    },
    {
      question: 'When should I call the vet for dog diarrhea?',
      answer:
        'Call if diarrhea persists beyond a day or two, keeps returning, or comes with vomiting, poor appetite, lethargy, weakness, black stool, blood, pain, or dehydration. Puppies and incompletely vaccinated dogs deserve earlier attention.',
    },
    {
      question: 'Is blood in dog diarrhea always an emergency?',
      answer:
        'Not automatically. A small amount of fresh red blood can come from lower-bowel irritation, and current acute-diarrhea guidance does not classify severity from blood alone. Still contact your veterinarian, and seek urgent care if bleeding is heavy or your dog is otherwise ill.',
    },
    {
      question: 'What does black tarry stool mean in a dog?',
      answer:
        'Black tarry stool can be melena, which is partially digested blood. That is different from ordinary brown diarrhea and should be assessed by a veterinarian promptly.',
    },
    {
      question: 'What should I feed a dog with diarrhea?',
      answer:
        'A short-term bland or veterinary gastrointestinal diet may be useful for some mild cases. Avoid rich treats, and do not use an unbalanced homemade diet as long-term food.',
    },
    {
      question: 'Can I give my dog Imodium or Pepto-Bismol?',
      answer:
        'Not unless your veterinarian tells you to. Loperamide and bismuth-containing products can be unsuitable for some dogs, can interact with other medications, and can complicate certain illnesses.',
    },
    {
      question: 'Can a sudden food change cause diarrhea?',
      answer:
        'Yes. Changing food too quickly is a common trigger for short-lived diarrhea. If your dog is otherwise normal, return to a stable feeding plan and make future transitions gradually.',
    },
    {
      question: 'Can dog diarrhea spread germs to people or other pets?',
      answer:
        'Sometimes. Parasites and foodborne bacteria can be shed in feces, so clean up stool promptly, wash your hands, and clean contaminated pet items. The exact risk depends on the cause.',
    },
    {
      question: 'Should I save a stool sample for the vet?',
      answer:
        'It can be useful because veterinarians may test feces for parasites or other causes. Ask your clinic how fresh the sample should be and how they want it stored before the visit.',
    },
    {
      question: 'Does my puppy need a parvovirus test?',
      answer:
        'A puppy or unvaccinated dog with vomiting and diarrhea should be evaluated for parvovirus. Your veterinarian can decide whether testing is appropriate based on age, vaccination history, exposure, and other signs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Diarrhea',
      url: null,
      sourceType: 'academic',
      notes:
        'Supports that many mild cases are self-limiting and identifies persistent diarrhea, vomiting, appetite loss, lethargy, black or bloody stool, dehydration, diet changes, parasites, and foreign bodies as relevant considerations.',
    },
    {
      publisher: 'World Small Animal Veterinary Association and ENOVAT',
      title: 'Five Steps of Canine Acute Diarrhea Treatment',
      url: null,
      sourceType: 'other',
      notes:
        'Supports assessing acute diarrhea severity primarily from systemic clinical signs, using supportive care for mild cases, and not treating blood in stool alone as the definition of severe disease.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'About Giardia and Pets',
      url: null,
      sourceType: 'government',
      notes:
        'Supports contacting a veterinarian for persistent pet diarrhea, higher susceptibility in young animals, fecal contamination precautions, handwashing, cleaning pet items, and limiting exposure to shared water or pet areas.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Introduction to Digestive Disorders of Dogs',
      url: null,
      sourceType: 'other',
      notes:
        'Supports the broad differential for diarrhea, including infection, malabsorption, foreign objects, toxins, and other diseases, plus the importance of fluid and electrolyte replacement when dehydration develops.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Parvovirus: Transmission to Treatment',
      url: null,
      sourceType: 'academic',
      notes:
        'Supports prompt parvovirus evaluation in puppies or unvaccinated dogs with vomiting and diarrhea and describes lethargy, poor appetite, weakness, abdominal pain, fever, and dehydration as important associated signs.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title:
        'FDA Cautions Pet Owners Not to Feed Performance Dog Raw Pet Food Due to Salmonella, Listeria monocytogenes',
      url: null,
      sourceType: 'government',
      notes:
        'Supports that contaminated pet food can cause vomiting, diarrhea, appetite loss, and decreased activity and that infected pets may shed pathogens in feces, making cleanup and hand hygiene important.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Fresh water bowl',
      description: 'Easy access to clean water matters while a dog is losing fluid through diarrhea.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Stool sample container',
      description:
        'A clean leak-resistant container can make it easier to bring a fresh sample if your veterinary clinic asks for one.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinary examination',
      description:
        'Appropriate when diarrhea persists, recurs, or appears with vomiting, appetite loss, weakness, blood, pain, dehydration, or higher-risk age and vaccination status.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinary gastrointestinal diet guidance',
      description:
        'A veterinarian can recommend an appropriate digestible diet when food management is useful and help avoid an unbalanced homemade diet being used too long.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'dog-constipation',
      anchorText: 'What if my dog is constipated instead?',
      relationshipType: 'sibling',
    },
    { slug: 'dog-swallowed-a-sock', anchorText: 'What if my dog swallowed a sock?', relationshipType: 'cause' },
    { slug: 'dog-ate-grapes', anchorText: 'What if my dog ate grapes?', relationshipType: 'cause' },
    {
      slug: 'dog-drinking-lots-of-water',
      anchorText: 'What if my dog is drinking much more water?',
      relationshipType: 'follow_up',
    },
  ],
};
