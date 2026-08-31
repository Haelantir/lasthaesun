import type { ProblemSeed } from '../types';

export const dogAteChocolate: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-toxins-and-foreign-objects',
  slug: 'dog-ate-chocolate',
  canonicalPath: '/pets/dogs/toxins-and-foreign-objects/dog-ate-chocolate/',
  name: 'Dog Ate Chocolate',
  eyebrow: 'Pets · Dogs · Toxins & Foreign Objects',

  h1: 'Can I Ignore My Dog Eating Chocolate?',
  seoTitle: 'Dog Ate Chocolate? How Dangerous It Is and What to Do Now',
  metaDescription:
    "Chocolate can poison dogs. See which types are most dangerous, what symptoms matter, and what to do now based on the amount, product, and your dog's size.",

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I just watch my dog at home?',
  canIUseItLabel: 'Only after the risk is checked',

  shortAnswer:
    "No. Chocolate can poison dogs, and the risk depends on the type of chocolate, how much was eaten, and your dog's weight. Contact your veterinarian or an animal poison control service now rather than waiting for symptoms.",

  whyItMattersHeading: 'Why Chocolate Can Be Dangerous for Dogs',
  whyItMatters: [
    'Chocolate contains theobromine and caffeine. Dogs clear these stimulants slowly, so enough exposure can affect the stomach, nervous system, and heart. Darker and more bitter chocolate generally contains more of the toxic compounds than milk chocolate.',
    'A tiny lick of milk chocolate may turn out to be low risk, while cocoa powder or baking chocolate can be dangerous in much smaller amounts. The product matters too: some chocolate foods also contain xylitol, raisins, macadamia nuts, coffee, or alcohol, which add separate hazards.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Emergency Help If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Reviewed against FDA, Cornell, Merck Veterinary Manual, ASPCA, and Pet Poison Helpline guidance on canine chocolate toxicity plus Cornell guidance on swallowed foreign objects.',
  disclaimer:
    'General triage guidance only. Chocolate risk depends on the dog, the product, and the amount eaten. If the exposure is uncertain or your dog has symptoms, contact a veterinarian or animal poison control service.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'tiny-lick-milk-chocolate',
      label: 'A tiny lick or crumb of milk chocolate',
      shortDescription: 'You saw the exposure and know it was only a trace amount.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'LOWER RISK, BUT CHECK THE PRODUCT',
      resultBody:
        'A trace exposure to milk chocolate is much less concerning than a swallowed portion of dark or baking chocolate. The risk rises if the amount is larger than you think or the product contains another hazardous ingredient.',
      recommendedAction:
        'Remove access, save the packaging, and monitor your dog. If you are not certain it was only a trace amount, contact your veterinarian or an animal poison control service.',
    },
    {
      slug: 'white-chocolate-only',
      label: 'My dog ate white chocolate',
      shortDescription:
        'The product is truly white chocolate and does not contain another hazardous ingredient.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'LOW THEOBROMINE RISK',
      resultBody:
        'White chocolate contains very little theobromine and caffeine compared with darker chocolate. A large amount can still cause stomach upset because it is rich in fat and sugar.',
      recommendedAction:
        'Check the ingredient list and estimate how much was eaten. Contact your veterinarian if the amount was large, your dog is unwell, or the product contains another risky ingredient.',
    },
    {
      slug: 'milk-chocolate-piece',
      label: 'My dog ate a noticeable amount of milk chocolate',
      shortDescription: 'You know the product and can estimate the amount eaten.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'GET THE EXPOSURE CHECKED',
      resultBody:
        "Milk chocolate is less concentrated than dark or baking chocolate, but enough can still cause poisoning. Your dog's weight and the amount eaten matter.",
      recommendedAction:
        'Gather the package, estimate the amount eaten, and contact your veterinarian or an animal poison control service for a risk assessment.',
    },
    {
      slug: 'dark-or-semisweet-chocolate',
      label: 'My dog ate dark or semisweet chocolate',
      shortDescription: 'The chocolate has a higher cocoa content than milk chocolate.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CALL NOW',
      resultBody:
        'Dark and semisweet chocolate contain more theobromine than milk chocolate, so a smaller amount can create a more serious exposure.',
      recommendedAction:
        "Contact your veterinarian or an animal poison control service promptly with your dog's weight, the product, and the estimated amount eaten.",
    },
    {
      slug: 'baking-chocolate-or-cocoa',
      label: 'My dog ate baking chocolate or cocoa powder',
      shortDescription: 'The exposure involves a concentrated cocoa product.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'TREAT THIS AS AN EMERGENCY',
      resultBody:
        'Unsweetened baking chocolate and cocoa powder are among the most concentrated common sources of theobromine. Even an amount that looks small can be important in a dog.',
      recommendedAction:
        'Call your veterinarian or emergency veterinary clinic immediately. Bring or photograph the package so the product and amount can be identified.',
    },
    {
      slug: 'amount-or-type-unknown',
      label: 'I do not know what kind or how much was eaten',
      shortDescription: 'Chocolate is missing, but the exact product or amount is uncertain.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DO NOT GUESS FROM APPEARANCE',
      resultBody:
        "Risk cannot be estimated reliably without the chocolate type, amount, and your dog's size. Waiting for symptoms can waste the period when early treatment may help.",
      recommendedAction:
        'Contact your veterinarian or an animal poison control service now. Give them the best estimate you have and keep any wrappers or packaging.',
    },
    {
      slug: 'small-dog-or-puppy',
      label: 'A small dog or puppy ate chocolate',
      shortDescription: 'The same amount represents a larger dose for a smaller dog.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'SIZE MAKES THE EXPOSURE MORE SERIOUS',
      resultBody:
        'Chocolate toxicity is dose-dependent. A portion that may be low risk for a large dog can be much more important for a small dog.',
      recommendedAction:
        "Do not wait for symptoms. Contact your veterinarian or an animal poison control service with the dog's weight and the chocolate details.",
    },
    {
      slug: 'symptoms-started',
      label: 'My dog is vomiting, restless, trembling, or acting abnormal',
      shortDescription: 'Signs have started after possible chocolate ingestion.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'GET VETERINARY HELP NOW',
      resultBody:
        'Chocolate toxicity can affect the gastrointestinal tract, heart, and nervous system. Tremors, seizures, collapse, or an abnormal heart rhythm can occur in severe cases.',
      recommendedAction:
        "Go to an emergency veterinary clinic or follow your veterinarian's immediate instructions. Do not try home remedies while your dog is showing concerning signs.",
    },
    {
      slug: 'other-toxic-ingredients',
      label: 'The chocolate also contains xylitol, raisins, coffee, alcohol, or macadamia nuts',
      shortDescription: 'The product may expose your dog to more than chocolate.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'THERE MAY BE A SECOND POISONING RISK',
      resultBody:
        'Some chocolate products contain ingredients that can create separate toxic effects in dogs. That can change the urgency even when the chocolate amount alone seems small.',
      recommendedAction:
        'Read the full ingredient list and contact your veterinarian or an animal poison control service immediately with the product details.',
    },
    {
      slug: 'wrapper-or-foil-swallowed',
      label: 'My dog swallowed the wrapper or foil too',
      shortDescription: 'Packaging may have gone down with the chocolate.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THERE IS ALSO A FOREIGN-BODY RISK',
      resultBody:
        'The chocolate creates a toxicity question, while swallowed packaging can create a separate choking or intestinal blockage problem.',
      recommendedAction:
        'Tell your veterinarian exactly what packaging is missing. Seek urgent care if your dog is choking, repeatedly vomiting, painful, weak, or unable to keep food or water down.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Theobromine and caffeine enter the digestive tract',
      description: 'Chocolate contains methylxanthines that dogs process much more slowly than people.',
      severity: 'caution',
      chainLabel: 'Exposure',
    },
    {
      stageLabel: 'AS THE COMPOUNDS ARE ABSORBED',
      title: 'The nervous system and heart can be stimulated',
      description: 'Theobromine and caffeine can increase activity, heart rate, and urine production.',
      severity: 'caution',
      chainLabel: 'Stimulation',
    },
    {
      stageLabel: 'IF TOXICITY DEVELOPS',
      title: 'Vomiting, diarrhea, thirst, and restlessness can appear',
      description:
        'Early signs can be gastrointestinal or behavioral and may progress rather than resolving on their own.',
      severity: 'warning',
      chainLabel: 'Clinical signs',
    },
    {
      stageLabel: 'WITH A MORE SERIOUS EXPOSURE',
      title: 'Tremors, abnormal heart rhythms, and seizures can occur',
      description: 'Higher exposures can affect cardiovascular and central nervous system function.',
      severity: 'danger',
      chainLabel: 'Severe toxicity',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Collapse or death is possible',
      description:
        'Severe chocolate toxicosis can become life-threatening without appropriate veterinary care.',
      severity: 'danger',
      chainLabel: 'Emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A tiny lick or crumb of milk chocolate and you are certain of the amount',
      ignoreAnswer: 'Maybe, with monitoring',
      severity: 'info',
      whatToDo:
        'Remove the chocolate, check the ingredients, and watch your dog. Contact your veterinarian or poison control if the amount is uncertain or your dog develops symptoms.',
    },
    {
      situation: 'White chocolate only, with no other hazardous ingredients',
      ignoreAnswer: 'Usually, if the amount was small',
      severity: 'info',
      whatToDo:
        'Confirm that it is truly white chocolate and check the ingredient list. Watch for stomach upset and call your veterinarian if a large amount was eaten or your dog becomes unwell.',
    },
    {
      situation: 'A noticeable amount of milk chocolate',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Gather the package and contact your veterinarian or an animal poison control service for a dose-based risk assessment.',
    },
    {
      situation: 'Dark, semisweet, baking chocolate, or cocoa powder',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact your veterinarian or an emergency veterinary service promptly. Do not wait for symptoms before asking for guidance.',
    },
    {
      situation: 'The type or amount of chocolate is unknown',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        "Treat the uncertainty as part of the risk. Call with your dog's weight, what is missing, and any packaging you can find.",
    },
    {
      situation: 'Vomiting, agitation, tremors, collapse, seizures, or abnormal behavior',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Seek emergency veterinary care now and tell the clinic that chocolate ingestion is suspected.',
    },
    {
      situation: 'The product also contains xylitol, raisins, coffee, alcohol, or macadamia nuts',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact a veterinarian or animal poison control service immediately and read them the full ingredient list.',
    },
    {
      situation: 'Wrapper, foil, or packaging may also have been swallowed',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Tell your veterinarian what packaging is missing so the foreign-body risk can be assessed along with the chocolate exposure.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Identify the chocolate',
      body:
        'Find the package or recipe if you can. Note whether it was milk, dark, semisweet, baking chocolate, cocoa powder, white chocolate, or a mixed product such as brownies or candy.',
    },
    {
      title: 'Estimate how much was eaten',
      body:
        "Compare what is missing with what remains. Your veterinarian or poison control will use the amount, chocolate type, and your dog's weight to estimate risk.",
    },
    {
      title: 'Check the full ingredient list',
      body:
        'Look for xylitol, raisins, macadamia nuts, coffee or espresso, and alcohol. These can create separate hazards that change the response.',
    },
    {
      title: 'Call before trying to make your dog vomit',
      body:
        'Do not induce vomiting unless a veterinarian or veterinary poison control professional specifically tells you to. Vomiting is not appropriate in every poisoning situation.',
    },
    {
      title: 'Save the package and watch your dog closely',
      body:
        'Keep the wrapper, label, or recipe available. If your dog develops tremors, seizures, collapse, marked agitation, repeated vomiting, or other concerning signs, seek emergency veterinary care.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Tremors or seizures',
      description: 'Neurologic signs can occur with more severe methylxanthine exposure.',
      severity: 'danger',
    },
    {
      title: 'Collapse or severe weakness',
      description: 'Collapse after chocolate ingestion needs emergency veterinary assessment.',
      severity: 'danger',
    },
    {
      title: 'Very fast or irregular heartbeat',
      description: 'Chocolate toxicity can cause serious cardiovascular effects.',
      severity: 'danger',
    },
    {
      title: 'Severe agitation or inability to settle',
      description: 'Marked restlessness or hyperactivity can be a sign of stimulant toxicity.',
      severity: 'warning',
    },
    {
      title: 'Repeated vomiting or worsening diarrhea',
      description:
        'Ongoing gastrointestinal signs can accompany chocolate toxicity and can contribute to dehydration.',
      severity: 'warning',
    },
    {
      title: 'Trouble walking or loss of coordination',
      description: 'Incoordination can indicate nervous system involvement.',
      severity: 'danger',
    },
    {
      title: 'Another toxic ingredient is involved',
      description: 'Xylitol, raisins, coffee, alcohol, or macadamia nuts can add separate poisoning risks.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is milk chocolate safer for dogs than dark chocolate?',
      answer:
        "It is less concentrated in theobromine than dark or baking chocolate, but it is not safe food for dogs. The amount eaten and your dog's weight still matter.",
    },
    {
      question: 'What about white chocolate?',
      answer:
        'White chocolate contains very little theobromine and caffeine, so methylxanthine poisoning is much less likely. Large amounts can still cause stomach upset because of fat and sugar, and other ingredients may add risk.',
    },
    {
      question: 'My dog seems completely normal. Can I just wait?',
      answer:
        'Do not use the absence of symptoms as your only safety check. Signs can be delayed, and early veterinary guidance may change what treatment is useful.',
    },
    {
      question: 'Should I make my dog vomit at home?',
      answer:
        'Not unless a veterinarian or veterinary poison control professional specifically instructs you to. Inducing vomiting is not safe or useful in every situation.',
    },
    {
      question: 'What information should I have when I call the vet?',
      answer:
        "Have your dog's weight, the chocolate type or product name, the estimated amount eaten, the ingredient list, and the approximate time of ingestion if you know it.",
    },
    {
      question: 'Are brownies, cookies, and chocolate cake less dangerous?',
      answer:
        'Not necessarily. Their cocoa content can vary widely, and they may contain other risky ingredients. Use the package or recipe rather than guessing from how chocolatey the food looks.',
    },
    {
      question: 'Can an online chocolate toxicity calculator tell me whether my dog is safe?',
      answer:
        'A calculator can help estimate exposure when the type, amount, and body weight are known. It should not replace veterinary advice when the details are uncertain or your dog has symptoms.',
    },
    {
      question: 'Does the wrapper matter?',
      answer:
        'Yes. Foil, plastic, paper, or other packaging can create a separate choking or intestinal blockage risk if swallowed.',
    },
    {
      question: 'Why is dark chocolate more dangerous?',
      answer:
        'Darker and more bitter chocolate generally contains more cocoa solids and more theobromine, so a smaller amount can create a higher dose.',
    },
    {
      question: 'Can chocolate cause problems besides theobromine poisoning?',
      answer:
        'Yes. High-fat chocolate products can contribute to stomach upset or pancreatitis, and mixed products may contain other toxic ingredients.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Food and Drug Administration',
      title: "Leave Chocolate Out of Rover's Celebrations",
      url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/leave-chocolate-out-rovers-celebrations',
      sourceType: 'government',
      notes:
        'Confirms that chocolate is toxic to dogs, identifies theobromine and caffeine as the toxic compounds, explains that darker chocolate contains more theobromine, and lists common toxicity signs.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Chocolate toxicity: What should I do if my dog eats chocolate?',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/chocolate-toxicity-what-should-i-do-if-my-dog-eats-chocolate',
      sourceType: 'academic',
      notes:
        'Supports the importance of chocolate type, amount, and dog size, the higher risk of darker chocolate, common clinical signs, and the recommendation to contact an emergency veterinarian after ingestion.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Chocolate Toxicosis in Animals',
      url: 'https://www.merckvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals',
      sourceType: 'industry',
      notes:
        'Provides veterinary toxicology guidance on methylxanthine exposure, relative concentrations in chocolate types, clinical progression, serious cardiac and neurologic effects, and treatment principles.',
    },
    {
      publisher: 'ASPCA',
      title: 'What to Do If Your Pet Gets into Chocolate',
      url: 'https://www.aspca.org/news/what-do-if-your-pet-gets-chocolate',
      sourceType: 'other',
      notes:
        'Supports contacting a veterinarian or poison control even when signs are absent or mild and explains that home monitoring or vomiting should follow case-specific professional guidance.',
    },
    {
      publisher: 'Pet Poison Helpline',
      title: 'Chocolate',
      url: 'https://www.petpoisonhelpline.com/poison/chocolate/',
      sourceType: 'industry',
      notes:
        'Supports dose-dependent risk, the importance of chocolate type and patient size, serious gastrointestinal, cardiovascular, and neurologic effects, and the added hazards from ingredients such as raisins or xylitol.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Gastrointestinal foreign body obstruction in dogs',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/gastrointestinal-foreign-body-obstruction-dogs',
      sourceType: 'academic',
      notes:
        'Supports the separate risk from swallowed nondigestible objects, including intestinal obstruction, vomiting, abdominal pain, lethargy, and the need for prompt veterinary care when obstruction is suspected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Original chocolate package or recipe',
      description:
        'Helps identify the chocolate type, cocoa content, ingredients, and how much may be missing.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Animal poison control service',
      description:
        "Can assess the exposure using your dog's weight, the chocolate type, and the estimated amount eaten.",
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Emergency veterinary clinic',
      description: 'Needed when serious symptoms are present or the exposure is judged high risk.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Kitchen scale',
      description:
        'Can help estimate the weight of a remaining chocolate piece when the package gives a total product weight.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'dog-ate-grapes',
      anchorText: 'What if my dog ate grapes or raisins?',
      relationshipType: 'sibling',
    },
  ],
};
