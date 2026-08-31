import type { ProblemSeed } from '../types';

export const catSneezing: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'cat-breathing',
  slug: 'cat-sneezing',
  canonicalPath: '/pets/cats/breathing/cat-sneezing/',
  name: 'Cat Sneezing',
  eyebrow: 'Pets · Cats · Breathing',

  h1: 'Can I Ignore My Cat Sneezing?',
  seoTitle: 'Cat Sneezing: When It’s Harmless and When to Call the Vet',
  metaDescription:
    'An occasional cat sneeze can be harmless. Learn when repeated sneezing, discharge, appetite changes, blood, or breathing trouble needs veterinary care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I wait and watch?',
  canIUseItLabel: 'Yes, if it is occasional and your cat is otherwise normal',

  shortAnswer:
    'A sneeze or two in an otherwise normal cat is usually fine to watch. If the sneezing keeps happening or comes with eye or nose discharge, poor appetite, low energy, blood, or any breathing difficulty, stop treating it as a harmless sneeze and call a veterinarian.',

  whyItMattersHeading: 'Why Sneezing Can Mean Different Things',
  whyItMatters: [
    'Sneezing is a reflex that helps clear irritation from the nose. Dust or another brief irritant can trigger a few sneezes without anything being wrong. The pattern matters more than the sneeze itself: an occasional sneeze in a cat that is eating, playing, and breathing normally is very different from repeated sneezing with other signs of illness.',
    'Respiratory infections are a common cause of sneezing in cats and may also cause nasal or eye discharge, conjunctivitis, lethargy, mouth sores, or loss of appetite. Persistent or one-sided nasal problems can have other causes including inflammation, foreign material, fungal disease, or a mass. Difficulty breathing, open-mouth breathing, or neurologic signs raise the urgency substantially.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help Faster If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked feline sneezing, upper respiratory disease, nasal red flags, breathing difficulty, contagious causes, and current H5N1 exposure guidance against Cornell, Merck, FDA, and CDC sources.',
  disclaimer:
    'General triage guidance only. Sneezing has many possible causes and cannot be diagnosed from symptoms alone. Any cat with labored or open-mouth breathing, severe weakness, abnormal gum color, or neurologic signs needs urgent veterinary assessment.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'occasional-sneeze-normal-cat',
      label: 'A couple of sneezes, then completely normal',
      shortDescription:
        'Your cat sneezes occasionally but is eating, playing, grooming, and breathing normally with no eye or nose discharge.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'WATCH IT, BUT THIS IS OFTEN HARMLESS',
      resultBody:
        'Sneezing is a normal protective reflex when something irritates the nasal passages. An isolated sneeze or brief cluster without any other change does not by itself point to respiratory disease.',
      recommendedAction:
        'Keep an eye on your cat. If the sneezing stops and everything else remains normal, you do not need to do anything about the sneeze itself.',
    },
    {
      slug: 'sneezing-after-dust-or-irritant',
      label: 'Sneezing started around dust or a strong irritant',
      shortDescription:
        'The sneezing appeared after dusty litter, cleaning, smoke, or another airborne irritant and settles after the exposure ends.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'REMOVE THE IRRITANT AND WATCH',
      resultBody:
        'Nasal irritation can trigger sneezing without an infection. The reassuring pattern is that the sneezing settles once the irritant is gone and your cat otherwise behaves normally.',
      recommendedAction:
        'Move your cat away from smoke, aerosols, heavy fragrance, or obvious dust. If the sneezing continues after the exposure has ended, reassess it as persistent sneezing rather than assuming irritation is the cause.',
    },
    {
      slug: 'repeated-sneezing-no-other-signs',
      label: 'Repeated sneezing but otherwise acting normal',
      shortDescription:
        'Your cat keeps having sneezing episodes but has normal energy, appetite, breathing, eyes, and nose.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: "DON'T PANIC, BUT DON'T IGNORE A PATTERN",
      resultBody:
        'Repeated sneezing can come from persistent irritation or an early nasal or respiratory problem even before other signs appear. A sneeze alone cannot tell you which cause is responsible.',
      recommendedAction:
        'Watch the frequency and look for discharge, appetite changes, eye irritation, coughing, or breathing changes. Contact your veterinarian if the repeated sneezing continues or increases.',
    },
    {
      slug: 'sneezing-with-clear-discharge',
      label: 'Sneezing with clear eye or nose discharge',
      shortDescription:
        'Your cat is sneezing and has watery eyes or clear nasal discharge but is still breathing comfortably and eating.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A RESPIRATORY INFECTION IS POSSIBLE',
      resultBody:
        'Sneezing with nasal or eye discharge fits the pattern of feline upper respiratory disease. Viral infections including feline herpesvirus and calicivirus are common causes, although signs alone cannot identify the exact cause.',
      recommendedAction:
        'Contact your veterinarian for guidance, especially if the discharge or sneezing persists, additional symptoms appear, or other cats in the home develop similar signs.',
    },
    {
      slug: 'thick-discharge-or-sore-eyes',
      label: 'Thick discharge, inflamed eyes, or mouth sores',
      shortDescription:
        'Nasal discharge is thick or pus-like, the eyes are red or irritated, or your cat has visible sores in the mouth.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'THIS NEEDS VETERINARY ATTENTION',
      resultBody:
        'These signs can occur with feline respiratory infections and indicate more than a simple sneeze from dust. Secondary bacterial infection can also complicate viral respiratory disease.',
      recommendedAction:
        'Arrange veterinary care. Do not assume that antibiotics are automatically needed because many feline respiratory infections are viral and treatment depends on the cause and severity.',
    },
    {
      slug: 'sneezing-with-poor-appetite-or-lethargy',
      label: 'Sneezing plus poor appetite or low energy',
      shortDescription:
        'Your cat is sneezing and is eating less, refusing food, unusually quiet, weak, or clearly less active than normal.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE CAT IS SICK, NOT JUST SNEEZING',
      resultBody:
        'Loss of appetite and lethargy are recognized signs of feline respiratory infection. More severe respiratory illness can require fluid or nutritional support, so these changes matter even when breathing still looks comfortable.',
      recommendedAction:
        'Contact your veterinarian promptly and mention the appetite and energy change along with the respiratory signs.',
    },
    {
      slug: 'bloody-or-one-sided-nasal-discharge',
      label: 'Blood, repeated one-sided discharge, or pawing at the face',
      shortDescription:
        'You see blood from the nose, discharge repeatedly comes from one nostril, or your cat keeps pawing at its face.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'HAVE THE NOSE EXAMINED',
      resultBody:
        'Persistent one-sided nasal signs can occur with a foreign object or other localized nasal disease. Blood can also occur with several nasal or systemic problems and should not be diagnosed from appearance alone.',
      recommendedAction:
        'Arrange veterinary examination rather than trying to probe or flush the nose yourself. Seek faster care if bleeding is substantial, keeps recurring, or your cat develops breathing difficulty.',
    },
    {
      slug: 'sneezing-with-breathing-difficulty',
      label: 'Open-mouth, labored, or obviously difficult breathing',
      shortDescription:
        'Your cat is struggling to breathe, breathing with its mouth open, or showing obvious respiratory distress in addition to sneezing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'THIS IS A BREATHING EMERGENCY',
      resultBody:
        'Difficulty breathing is a serious respiratory sign. At this point the important problem is not the sneezing but whether your cat can move air effectively.',
      recommendedAction:
        'Seek urgent veterinary care. Keep your cat calm and minimize unnecessary handling or stress while arranging transport.',
    },
    {
      slug: 'respiratory-signs-after-h5n1-exposure',
      label: 'Respiratory signs after raw food or bird exposure',
      shortDescription:
        'Your cat has respiratory illness after eating raw or unpasteurized animal products, hunting birds, or contacting sick or dead birds.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'TELL THE VETERINARIAN ABOUT THE EXPOSURE',
      resultBody:
        'H5N1 avian influenza has caused serious illness in cats. Sneezing can occur, usually alongside other possible signs such as nasal or eye discharge, low appetite, lethargy, breathing problems, or neurologic abnormalities.',
      recommendedAction:
        'Contact a veterinarian promptly and describe the exposure before arriving. Stop feeding raw or unpasteurized animal products and prevent contact with wild birds.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The sneeze may simply clear the nose',
      description:
        'Sneezing is a protective reflex. If a brief irritant triggered it, the problem may end there and your cat remains completely normal.',
      severity: 'info',
      chainLabel: 'Irritation → sneeze',
    },
    {
      stageLabel: 'IF THE SNEEZING CONTINUES',
      title: 'Persistent nasal irritation or disease becomes more likely',
      description:
        'Repeated sneezing can accompany inflammation, respiratory infection, foreign material, or other nasal disease. The sneeze itself cannot distinguish among them.',
      severity: 'caution',
      chainLabel: 'Repeated sneezing → look for other signs',
    },
    {
      stageLabel: 'IF RESPIRATORY DISEASE DEVELOPS',
      title: 'Eye and nose signs can appear',
      description:
        'Feline respiratory infections can cause nasal discharge, eye discharge or inflammation, mouth sores, lethargy, and reduced appetite in addition to sneezing.',
      severity: 'caution',
      chainLabel: 'Respiratory disease → more symptoms',
    },
    {
      stageLabel: 'IF THE CAT STOPS EATING OR BECOMES SYSTEMICALLY ILL',
      title: 'Supportive care may become necessary',
      description:
        'More severe respiratory illness can interfere with appetite and hydration. Some affected cats need veterinary treatment and nutritional or fluid support.',
      severity: 'warning',
      chainLabel: 'Illness → poor intake → veterinary care',
    },
    {
      stageLabel: 'IF BREATHING BECOMES DIFFICULT',
      title: 'Respiratory distress can become life-threatening',
      description:
        'Open-mouth or labored breathing is not a normal extension of uncomplicated sneezing. A cat showing respiratory distress needs urgent assessment.',
      severity: 'danger',
      chainLabel: 'Breathing difficulty → emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A couple of sneezes and your cat immediately acts normal',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Observe. No treatment is needed for an isolated sneeze if your cat remains comfortable, active, and otherwise normal.',
    },
    {
      situation: 'Sneezing follows obvious dust, smoke, fragrance, or another irritant and then stops',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Remove the suspected irritant and watch for recurrence. Persistent sneezing deserves a different assessment.',
    },
    {
      situation: 'Sneezing keeps recurring but there are no other symptoms',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Track whether it continues and watch for nasal or eye discharge, coughing, appetite changes, lethargy, or breathing changes. Contact your veterinarian if the pattern persists or worsens.',
    },
    {
      situation: 'Sneezing comes with clear nasal or eye discharge',
      ignoreAnswer: 'Not really',
      severity: 'caution',
      whatToDo:
        'A respiratory infection is possible. Contact your veterinarian for guidance if the signs continue or additional symptoms develop.',
    },
    {
      situation:
        'Discharge becomes thick, bloody, repeatedly one-sided, or the eyes become painful or inflamed',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange veterinary examination. These findings can require more than home monitoring.',
    },
    {
      situation: 'Your cat becomes lethargic or loses its appetite',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact your veterinarian promptly. Appetite and energy changes indicate that the problem is affecting more than the nose.',
    },
    {
      situation: 'Your cat has open-mouth, labored, or obviously difficult breathing',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Seek urgent veterinary care and minimize stress while arranging transport.',
    },
    {
      situation: 'Respiratory illness follows raw food, unpasteurized dairy, or exposure to sick or dead birds',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact a veterinarian promptly and explain the exposure history because H5N1 is one possible concern in exposed cats.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the whole cat, not just the sneeze',
      body:
        'Look at appetite, energy, breathing, the eyes, and the nose. Notice whether discharge is clear, thick, bloody, or mainly from one side. Those details are more useful than counting sneezes alone.',
    },
    {
      title: 'Remove obvious airborne irritants',
      body:
        'Keep your cat away from smoke, aerosols, strong fragrance, and excessive dust. If litter seems to trigger sneezing, consider a lower-dust unscented option.',
    },
    {
      title: 'Keep the face clean without medicating it',
      body:
        'If there is mild discharge, gently clean the outside of the nose or eyes with a soft damp cloth. Do not put medication into the nose or eyes unless a veterinarian has told you what to use.',
    },
    {
      title: 'Limit contact with other cats if respiratory illness is possible',
      body:
        'Several common feline respiratory infections spread between cats. If sneezing comes with nasal or eye discharge or other signs of illness, reduce close contact and shared items until you have veterinary guidance.',
    },
    {
      title: 'Treat coughing as a different clue',
      body:
        'Cats can make respiratory sounds that owners describe as sneezing even when they are coughing. If the movement or sound seems to come from the chest rather than the nose, compare it with the coughing guidance.',
      destinationProblemSlug: 'cat-coughing',
    },
    {
      title: 'Call a veterinarian when the pattern stops looking minor',
      body:
        'Persistent sneezing, discharge, appetite or energy changes, blood, facial changes, or signs of respiratory distress deserve veterinary assessment. Mention any raw-food or wild-bird exposure when you call.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Open-mouth or labored breathing',
      description:
        'Difficulty breathing is more urgent than the sneezing itself and can indicate serious respiratory disease.',
      severity: 'danger',
    },
    {
      title: 'Blue, gray, or very pale gums',
      description:
        'Abnormal gum color together with breathing trouble can indicate inadequate oxygen delivery or another serious problem.',
      severity: 'danger',
    },
    {
      title: 'Loss of appetite or marked lethargy',
      description:
        'These are recognized signs of feline respiratory illness and indicate that the problem is affecting your cat more broadly.',
      severity: 'warning',
    },
    {
      title: 'Blood from the nose',
      description:
        'Nasal bleeding has multiple possible causes and should not be written off as routine sneezing if it is significant or recurrent.',
      severity: 'warning',
    },
    {
      title: 'Persistent discharge mainly from one nostril',
      description:
        'One-sided nasal signs can occur with a foreign object or other localized disease and deserve examination if they continue.',
      severity: 'warning',
    },
    {
      title: 'Painful, red, or badly inflamed eyes',
      description:
        'Eye disease can accompany feline respiratory infections and may need treatment rather than observation alone.',
      severity: 'warning',
    },
    {
      title: 'Tremors, seizures, loss of coordination, or sudden blindness',
      description:
        'Neurologic signs are urgent. They are particularly important to report when illness follows raw animal products or exposure to sick or dead birds.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why does my cat sneeze once in a while?',
      answer:
        'Sneezing is a normal reflex that clears irritation from the nasal passages. A brief sneeze in a cat that otherwise looks and acts normal is often not a problem.',
    },
    {
      question: 'Can dusty cat litter make a cat sneeze?',
      answer:
        'Airborne particles and nasal irritation can trigger sneezing. If the pattern consistently appears around dusty litter and stops away from it, trying a lower-dust unscented litter is reasonable.',
    },
    {
      question: 'Does sneezing automatically mean my cat has a respiratory infection?',
      answer:
        'No. Irritation, inflammation, foreign material, and other nasal conditions can also cause sneezing. Eye or nasal discharge, lethargy, poor appetite, or multiple affected cats make infectious respiratory disease more plausible.',
    },
    {
      question: 'Can cats have allergies that cause sneezing?',
      answer:
        'Yes. Allergic rhinitis can occur in cats, although infection and other nasal disorders can produce similar signs. Repeated sneezing should not automatically be labeled an allergy without considering other causes.',
    },
    {
      question: 'Is cat sneezing contagious?',
      answer:
        'The sneeze itself is not a disease, but some common causes are contagious between cats. Feline herpesvirus, calicivirus, and several other respiratory pathogens can spread in cat populations.',
    },
    {
      question: 'Is clear nasal discharge harmless?',
      answer:
        'Not necessarily. Clear discharge can occur early in respiratory or nasal disease. What matters is whether it persists and whether sneezing, eye changes, poor appetite, lethargy, or breathing problems appear with it.',
    },
    {
      question: 'Why does discharge from only one nostril matter?',
      answer:
        'Persistent one-sided discharge can point toward a localized nasal problem such as foreign material or other disease within one side of the nasal cavity. It is worth having examined if it continues.',
    },
    {
      question: 'Can a vaccinated cat still get an upper respiratory infection?',
      answer:
        'Yes. Vaccination reduces the burden of important feline respiratory diseases but does not eliminate every infection or prevent every respiratory sign.',
    },
    {
      question: 'Could sneezing be bird flu in a cat?',
      answer:
        'It is possible in an exposed cat, but sneezing alone does not identify H5N1. Concern rises when respiratory or neurologic illness follows raw or unpasteurized animal products, hunting, or contact with sick or dead birds.',
    },
    {
      question: 'My cat is sneezing but still eating and playing. Do I need an emergency visit?',
      answer:
        'An emergency visit is usually not indicated for occasional sneezing in a cat that is eating, active, and breathing comfortably. Repeated or worsening sneezing still deserves attention if it does not settle or other symptoms appear.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Respiratory Infections',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/respiratory-infections',
      sourceType: 'academic',
      notes:
        'Describes feline upper respiratory infection signs including sneezing, nasal and eye discharge, conjunctivitis, mouth ulcers, lethargy, and anorexia, and explains that multiple infectious agents can cause respiratory disease.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Rhinitis and Sinusitis in Cats',
      url: 'https://www.merckvetmanual.com/cat-owners/lung-and-airway-disorders-of-cats/rhinitis-and-sinusitis-in-cats',
      sourceType: 'industry',
      notes:
        'Covers viral, bacterial, allergic, fungal, and other causes of feline nasal disease and signs including sneezing, nasal discharge, pawing at the face, open-mouth breathing, and labored inhalation.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Clinical Signs of Respiratory Disease in Animals',
      url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-system-introduction/clinical-signs-of-respiratory-disease-in-animals',
      sourceType: 'industry',
      notes:
        'Defines sneezing as a protective reflex caused by nasal or nasopharyngeal irritation and notes that persistent sneezing can occur with infectious, inflammatory, neoplastic, congenital, and foreign-body conditions.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'FDA Outlines Ways to Reduce Risk of HPAI in Cats',
      url: 'https://www.fda.gov/animal-veterinary/cvm-updates/fda-outlines-ways-reduce-risk-hpai-cats',
      sourceType: 'government',
      notes:
        'Describes H5N1 risk to cats, including transmission associated with unpasteurized milk and uncooked meats, and advises veterinary care for illness including low appetite, lethargy, eye or nose discharge, breathing difficulty, or neurologic signs.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Managing Cats and Captive Wild Animals Exposed to Bird Flu (H5N1)',
      url: 'https://www.cdc.gov/bird-flu/hcp/animals/index.html',
      sourceType: 'government',
      notes:
        'Lists possible H5N1 signs in cats including reduced energy and appetite, nasal discharge, sneezing, coughing, breathing difficulty, neurologic abnormalities, and severe disease.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Phone camera',
      description:
        'A short video of a sneezing or unusual breathing episode can help show your veterinarian what happens when the symptom is not occurring in the exam room.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Low-dust unscented cat litter',
      description: 'Useful when airborne litter dust or fragrance appears to be irritating the nose.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Secure cat carrier',
      description:
        'Keeps transport controlled and minimizes unnecessary handling if your cat needs veterinary assessment.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinary examination',
      description:
        'Appropriate for persistent sneezing, nasal or eye discharge, appetite changes, one-sided symptoms, bleeding, or any concern about breathing.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'cat-coughing', anchorText: 'Is my cat actually coughing instead?', relationshipType: 'sibling' },
  ],
};
