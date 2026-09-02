import type { ProblemSeed } from '../types';

export const dogScooting: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-digestion',
  slug: 'dog-scooting',
  canonicalPath: '/pets/dogs/digestion/dog-scooting/',
  name: 'Dog Scooting',
  eyebrow: 'Pets · Dogs · Digestion',

  h1: 'Can I Ignore My Dog Scooting?',
  seoTitle: 'Dog Scooting: When to Watch and When to Call a Vet',
  metaDescription:
    'One scoot may be harmless, but repeated dog scooting can signal anal sac trouble, skin irritation, allergies, or tapeworms. Know when to call a vet.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I wait and see?',
  canIUseItLabel: 'Only after one isolated scoot',

  shortAnswer:
    'One isolated scoot in a dog that otherwise seems completely normal can be watched. Repeated scooting, persistent licking, a fishy odor, swelling, discharge, or painful bowel movements needs veterinary attention.',

  whyItMattersHeading: 'Why Does Dog Scooting Matter?',
  whyItMatters: [
    'Scooting means something is itching, irritating, or hurting around your dog’s anus. Anal sacs that are impacted or inflamed are a common reason, but allergies, skin disease, stool problems, fleas, and tapeworms can produce a similar behavior.',
    'An untreated anal sac problem can progress from discomfort to infection, an abscess, or a ruptured wound. A physical and rectal examination may be needed to tell these conditions apart, especially when the scooting persists or other signs appear.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help Promptly If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against CDC, Cornell, Merck Veterinary Manual, VCA, and peer-reviewed evidence on canine anal sac disease, tapeworms, allergies, and triage.',
  disclaimer:
    'General triage guidance only. Scooting can have several causes, and a page cannot diagnose anal sac disease, parasites, allergy, infection, or a mass in an individual dog.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-isolated-scoot',
      label: 'My dog scooted once and now seems completely normal',
      shortDescription:
        'There is no continued licking, odor, redness, swelling, discharge, straining, stool change, or behavior change.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Brief monitoring is reasonable',
      resultBody:
        'A single scoot can come from temporary irritation. The reassuring part is that the behavior stops and your dog remains comfortable, active, and normal during bowel movements.',
      recommendedAction:
        'Look under the tail without squeezing anything. Monitor for another episode, licking, odor, redness, swelling, discharge, or trouble passing stool.',
    },
    {
      slug: 'repeated-or-returning-scooting',
      label: 'The scooting keeps happening or repeatedly returns',
      shortDescription:
        'Your dog drags their rear on the floor more than occasionally, even if eating, playing, and passing stool normally.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'It needs a cause, not continued watching',
      resultBody:
        'Repeated scooting indicates ongoing discomfort. Anal sac disease, skin inflammation, parasites, and other perianal conditions cannot be reliably distinguished from the behavior alone.',
      recommendedAction:
        'Arrange a veterinary examination. Record how often it happens and note licking, odor, stool changes, flea exposure, skin problems, and previous anal sac trouble.',
    },
    {
      slug: 'fishy-odor-and-licking',
      label: 'There is a fishy odor or frequent licking under the tail',
      shortDescription:
        'Your dog repeatedly licks or bites the anal area, leaves strong-smelling spots, or seems uncomfortable while sitting.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Anal sac trouble is likely enough to check',
      resultBody:
        'Anal sac discharge has a characteristic strong odor. Persistent odor with scooting or licking can occur when the sacs are full, inflamed, infected, or leaking.',
      recommendedAction:
        'Contact your veterinarian for an examination. Prevent persistent licking and do not squeeze the area to test whether the sacs are full.',
    },
    {
      slug: 'red-swollen-or-painful',
      label: 'The area is red, swollen, hot, or painful',
      shortDescription:
        'One or both sides of the anus look enlarged or discolored, or your dog resists sitting, lifting the tail, or being touched.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This may be an infection or abscess',
      resultBody:
        'Inflamed or abscessed anal sacs can be severely painful. A painful dog may growl or bite even if normally gentle, and an abscess may require drainage and medication.',
      recommendedAction:
        'Contact a veterinarian promptly. Stop your dog from licking, avoid pressing on the swelling, and handle the hind end cautiously.',
    },
    {
      slug: 'blood-pus-or-open-wound',
      label: 'I see blood, pus, drainage, or an open wound',
      shortDescription:
        'Fluid is draining beside the anus, the skin has opened, or discharge contains blood or yellow-green material.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A ruptured abscess needs urgent care',
      resultBody:
        'An anal sac abscess can rupture through the skin and release pus or blood. The open tract remains painful and requires assessment, cleaning, and treatment.',
      recommendedAction:
        'Seek urgent veterinary care. Prevent licking, keep the area from contacting dirty surfaces, and do not squeeze, probe, or apply human medication to the wound.',
    },
    {
      slug: 'rice-like-segments-or-fleas',
      label: 'I see rice-like pieces near the anus or my dog has fleas',
      shortDescription:
        'Small pale segments appear on the fur, bedding, or fresh stool, or flea exposure makes tapeworm infection possible.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Ask about tapeworm treatment and flea control',
      resultBody:
        'Dipylidium tapeworm segments can irritate the anal area and may look like grains of rice. Dogs acquire this tapeworm by swallowing an infected flea, so parasite treatment alone does not address the full cycle.',
      recommendedAction:
        'Save a clear photo or sealed sample and contact your veterinarian. Use a veterinarian-recommended tapeworm and flea-control plan rather than guessing with a general dewormer.',
    },
    {
      slug: 'scooting-with-broader-itch',
      label: 'My dog also has itchy skin, ears, or paws',
      shortDescription:
        'Scooting occurs with paw licking, scratching, recurrent ear trouble, hair loss, rash, or inflamed skin around the rear.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The problem may be broader than the anal sacs',
      resultBody:
        'Environmental, food, or flea-related allergies can inflame the skin around the anus and may also contribute to recurring anal sac disease.',
      recommendedAction:
        'Arrange a veterinary visit that addresses the full itch pattern. Note whether signs are seasonal and report food, treat, flea-prevention, ear, skin, and stool history.',
    },
    {
      slug: 'mild-loose-stool-and-one-scoot',
      label: 'It happened once during a mild loose-stool episode',
      shortDescription:
        'An otherwise well adult dog scooted briefly after passing soft stool and has no pain, blood, swelling, discharge, vomiting, or low energy.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Watch both the stool and the scooting',
      resultBody:
        'Soft stool can irritate the area and may interfere with normal anal sac emptying. Brief monitoring is reasonable only while both problems remain mild and your dog feels well.',
      recommendedAction:
        'Keep water available, avoid abrupt food changes and rich extras, and watch the next bowel movements. Call your veterinarian if the diarrhea or scooting continues or another symptom appears.',
    },
    {
      slug: 'straining-or-painful-defecation',
      label: 'My dog strains, cries, or seems unable to pass stool',
      shortDescription:
        'Bowel movements are painful or difficult, your dog repeatedly postures without passing stool, or the tail stays tucked.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Painful defecation needs prompt assessment',
      resultBody:
        'Anal sac inflammation, an abscess, a perianal condition, constipation, or a mass can interfere with comfortable defecation. Repeated unsuccessful straining should not be treated as ordinary scooting.',
      recommendedAction:
        'Contact a veterinarian promptly. Seek urgent care if your dog cannot pass stool, develops a swollen abdomen, vomits, becomes weak, or appears severely distressed.',
    },
    {
      slug: 'firm-lump-or-one-sided-enlargement',
      label: 'There is a firm lump or persistent swelling on one side',
      shortDescription:
        'A firm area remains beside the anus, particularly in an older dog or when the problem keeps recurring on the same side.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A mass must be ruled out',
      resultBody:
        'Infection can cause a firm enlargement, but anal sac tumors can also present as a firm, enlarged sac or perianal mass. Scooting alone cannot distinguish between them.',
      recommendedAction:
        'Arrange a prompt veterinary examination. Do not repeatedly express or massage the area; imaging or a tissue sample may be needed if a mass is suspected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Scooting signals irritation or discomfort',
      description:
        'Dragging the rear applies pressure and friction to an area that may already be itchy, inflamed, or painful.',
      severity: 'info',
      chainLabel: 'Perianal discomfort',
    },
    {
      stageLabel: 'IF THE SCOOTING CONTINUES',
      title: 'Licking and rubbing can damage the skin',
      description:
        'Repeated contact with carpet, flooring, grass, or the tongue can leave the skin raw and make it more vulnerable to further inflammation.',
      severity: 'caution',
      chainLabel: 'Self-trauma',
    },
    {
      stageLabel: 'IF ANAL SAC RETENTION CONTINUES',
      title: 'Impaction can progress to inflammation or infection',
      description:
        'Retained anal sac contents can thicken, enlarge the sac, and create conditions that allow inflammation and bacterial infection to develop.',
      severity: 'warning',
      chainLabel: 'Impaction and infection',
    },
    {
      stageLabel: 'IF AN ABSCESS FORMS',
      title: 'The sac can rupture through the skin',
      description:
        'An abscess may cause severe pain and swelling before opening beside the anus and releasing pus or blood.',
      severity: 'danger',
      chainLabel: 'Abscess and rupture',
    },
    {
      stageLabel: 'IF A SERIOUS CAUSE IS MISSED',
      title: 'A persistent mass or underlying disease remains untreated',
      description:
        'Recurrent scooting may continue when allergy, gastrointestinal disease, parasites, or obesity is not addressed. A firm anal sac or perianal mass also requires evaluation for neoplasia.',
      severity: 'danger',
      chainLabel: 'Missed underlying cause',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One isolated scoot in a comfortable dog with no other signs',
      ignoreAnswer: 'Yes, briefly',
      severity: 'info',
      whatToDo:
        'Check externally for visible irritation and monitor. The answer changes if the scooting repeats or licking, odor, swelling, discharge, pain, or stool changes appear.',
    },
    {
      situation: 'Scooting keeps happening or repeatedly returns',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Arrange a veterinary examination rather than repeatedly waiting for it to stop.',
    },
    {
      situation: 'Scooting comes with a fishy odor or persistent licking',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Contact your veterinarian to check the anal sacs and surrounding skin. Prevent excessive licking.',
    },
    {
      situation: 'The area is red, swollen, hot, or painful',
      ignoreAnswer: 'No—prompt care',
      severity: 'warning',
      whatToDo:
        'Contact a veterinarian promptly and do not press, massage, or try to express the swollen area.',
    },
    {
      situation: 'Blood, pus, drainage, or an open wound is present',
      ignoreAnswer: 'No—urgent',
      severity: 'danger',
      whatToDo:
        'Seek urgent veterinary care, prevent licking, and do not probe or apply unapproved medication.',
    },
    {
      situation: 'Rice-like segments appear near the anus or in the stool',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Save a photo or sample and ask your veterinarian about tapeworm treatment and effective flea control.',
    },
    {
      situation: 'One scoot follows mild loose stool and the dog feels normal',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Monitor the stool, appetite, energy, and scooting. Contact your veterinarian if either problem continues or worsens.',
    },
    {
      situation: 'Defecation is painful, straining is repeated, or a firm lump is present',
      ignoreAnswer: 'No—prompt care',
      severity: 'warning',
      whatToDo:
        'Arrange prompt veterinary assessment. Seek urgent care if your dog cannot pass stool or develops vomiting, weakness, severe distress, or abdominal swelling.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Look under the tail without squeezing',
      body:
        'If your dog allows it comfortably, look for redness, swelling, discharge, an open sore, stool stuck in the fur, rice-like segments, or a visible lump. Stop if your dog shows pain or may bite.',
    },
    {
      title: 'Step 2: Prevent persistent licking and rubbing',
      body:
        'Use an Elizabethan collar if needed and if your dog can wear it safely. Do not scrub painful skin, insert anything into the anus, or apply human creams without veterinary direction.',
    },
    {
      title: 'Step 3: Record useful clues for the clinic',
      body:
        'Take a photo or video and note when the scooting occurs, stool consistency, odor, licking, flea exposure, skin or ear problems, diet changes, and any previous anal sac treatment. Save a suspected tapeworm segment in a sealed container if practical.',
    },
    {
      title: 'Step 4: Pay attention to accompanying diarrhea or constipation',
      body:
        'Stool consistency can contribute to anal sac trouble and may identify a separate digestive problem. Report persistent loose stool, difficult defecation, blood, vomiting, appetite changes, or weight loss.',
      destinationProblemSlug: 'dog-diarrhea',
    },
    {
      title: 'Step 5: Check for a wider itch pattern',
      body:
        'Paw licking, ear inflammation, rash, hair loss, flea exposure, and seasonal scratching make allergy or skin disease more likely. Treating only the anal sacs may not prevent recurrence when the underlying itch remains.',
      destinationProblemSlug: 'dog-licking-paws-constantly',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Blood, pus, or an open wound appears beside the anus',
      description: 'This can indicate an anal sac abscess that has ruptured through the skin.',
      severity: 'danger',
    },
    {
      title: 'The area becomes red, hot, markedly swollen, or very painful',
      description:
        'These signs are consistent with significant inflammation or infection and should not be squeezed at home.',
      severity: 'warning',
    },
    {
      title: 'Your dog strains repeatedly or cannot pass stool',
      description:
        'Painful or obstructed defecation can accompany an abscess, constipation, perianal disease, or a mass.',
      severity: 'danger',
    },
    {
      title: 'A firm lump or persistent one-sided enlargement is present',
      description:
        'Infection and tumors can both create a firm enlargement, so a physical and rectal examination is needed.',
      severity: 'warning',
    },
    {
      title: 'Your dog becomes weak, collapses, vomits, or seems severely ill',
      description:
        'Whole-body illness is not explained by a harmless itch and warrants urgent veterinary assessment.',
      severity: 'danger',
    },
    {
      title: 'Scooting or licking has made the skin raw',
      description: 'Ongoing self-trauma increases pain and can complicate the original problem.',
      severity: 'warning',
    },
    {
      title: 'Rice-like segments or a flea infestation is visible',
      description: 'Suspected Dipylidium tapeworm requires appropriate treatment along with flea control.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does dog scooting always mean worms?',
      answer:
        'No. Anal sac trouble and allergic or irritated skin are common explanations. Tapeworm becomes more likely when you see pale, rice-like segments around the anus, on bedding, or in fresh stool.',
    },
    {
      question: 'Is a fishy smell proof that my dog’s anal glands are infected?',
      answer:
        'No. Normal anal sac secretion also has a strong odor. Persistent odor with scooting, pain, swelling, blood, or pus makes an anal sac problem more concerning, but an examination is needed to identify the stage.',
    },
    {
      question: 'Should I express my dog’s anal glands at home?',
      answer:
        'Not unless your veterinarian has examined your dog, confirmed that expression is appropriate, and taught you how to follow a specific care plan. Squeezing a painful or swollen area can hurt your dog and does not rule out infection, a wound, or a mass.',
    },
    {
      question: 'Can allergies make a dog scoot?',
      answer:
        'Yes. Environmental, food, or flea-related allergies can inflame the skin around the anus and may occur with paw licking, ear trouble, rash, hair loss, or recurrent anal sac problems.',
    },
    {
      question: 'What do tapeworm segments look like?',
      answer:
        'Dipylidium segments may move near the anus or appear as small pale pieces on stool or fur. Dried segments are commonly described as looking like grains of rice.',
    },
    {
      question: 'Can people catch my dog’s tapeworm?',
      answer:
        'People can acquire Dipylidium by swallowing an infected flea, not simply by touching a dog. Flea control, prompt feces cleanup, and handwashing help interrupt the cycle.',
    },
    {
      question: 'Can a routine stool test miss tapeworm?',
      answer:
        'Yes. CDC notes that veterinarians do not typically find Dipylidium eggs during a routine fecal exam and often rely on the owner seeing segments. Bring a photo or sample if you find one.',
    },
    {
      question: 'Will adding fiber stop the scooting?',
      answer:
        'Additional fiber may improve fecal bulk and anal sac emptying in some dogs, but it is not a universal fix. Ask your veterinarian before changing the diet, especially when diarrhea, constipation, allergy, or another illness is present.',
    },
    {
      question: 'What will a veterinarian do for a scooting dog?',
      answer:
        'The visit may include inspection of the skin and a digital rectal examination. Depending on the findings, treatment can include anal sac expression, flushing, medication, parasite control, allergy management, drainage, or further testing of a firm mass.',
    },
    {
      question: 'Could scooting be a sign of cancer?',
      answer:
        'It can, but anal sac tumors are a less common explanation than noncancerous anal sac or skin problems. A firm, enlarged, nonexpressible sac or persistent perianal mass deserves prompt evaluation, particularly in an older dog.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'About Dog or Cat Tapeworm Infection',
      url: 'https://www.cdc.gov/dipylidium/about/index.html',
      sourceType: 'government',
      notes:
        'Supports Dipylidium transmission through infected fleas, the rice-like appearance of dried segments, owner recognition of segments, veterinary treatment, flea control, feces cleanup, and hand hygiene.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Anal sac diseases',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/anal-sac-diseases',
      sourceType: 'academic',
      notes:
        'Supports scooting, licking, odor, painful defecation, redness, swelling, bloody discharge, progression from impaction to infection and rupture, risk factors, examination, treatment, and recurrence management.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Anal Sac Disease in Dogs and Cats',
      url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-rectum-and-anus/anal-sac-disease-in-dogs-and-cats',
      sourceType: 'industry',
      notes:
        'Supports anal sac impaction, inflammation, abscessation and neoplasia; associated scooting and painful defecation; rectal examination; tumor warning signs; treatment options; and the possible role of supplemental fiber.',
    },
    {
      publisher: 'VCA Animal Hospitals',
      title: 'Butt-scooting: is it parasites?',
      url: 'https://vcahospitals.com/pediatric/puppy/behavior-training/puppy-butt-scooting',
      sourceType: 'industry',
      notes:
        'Supports occasional scooting as watchable in an otherwise normal young dog, repeated scooting as a reason to consider allergies or anal sac conditions, and evaluation for inflammation, fishy odor, bleeding, swelling, or a wound.',
    },
    {
      publisher: 'Animals, via PubMed Central',
      title: 'A Cross-Sectional Study on Canine and Feline Anal Sac Disease',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8749694/',
      sourceType: 'academic',
      notes:
        'Observational evidence identifying diarrhea, skin problems, small body size, and obesity as reported predisposing factors and supporting clinical examination plus treatment of underlying dermatologic or gastrointestinal disease.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Veterinary examination',
      description:
        'A physical and rectal examination can distinguish impaction from inflammation, abscess, skin disease, parasites, and a possible mass.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Elizabethan collar',
      description:
        'A properly fitted collar can prevent licking and chewing while a painful or open area is being assessed or treated.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Fresh stool or parasite sample container',
      description:
        'A clean sealed container can hold a requested stool sample or suspected tapeworm segment for the veterinary clinic.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinarian-guided flea and deworming plan',
      description:
        'Correct treatment must target the parasite involved, while effective flea control helps prevent Dipylidium reinfection.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'dog-diarrhea', anchorText: 'Can I ignore diarrhea in my dog?', relationshipType: 'cause' },
    { slug: 'dog-constipation', anchorText: 'Can I ignore constipation in my dog?', relationshipType: 'cause' },
    {
      slug: 'dog-licking-paws-constantly',
      anchorText: 'Can I ignore my dog licking their paws constantly?',
      relationshipType: 'related',
    },
  ],
};
