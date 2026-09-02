import type { ProblemSeed } from '../types';

export const catNotEating: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'cat-eating-and-drinking',
  slug: 'cat-not-eating',
  canonicalPath: '/pets/cats/eating-and-drinking/cat-not-eating/',
  name: 'Cat Not Eating',
  eyebrow: 'Pets · Cats · Eating & Drinking',

  h1: 'Can I Ignore My Cat Not Eating?',
  seoTitle: 'Cat Not Eating: When to Call the Vet and When You Can Watch',
  metaDescription:
    'One missed meal may be watchable, but no food for about a day, poor drinking, vomiting, lethargy, pain, or weight loss needs veterinary attention.',

  aliases:
    ['/pets/cats/eating-and-drinking/cat-wont-eat/', '/pets/cats/eating-and-drinking/cat-refusing-food/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep watching at home?',
  canIUseItLabel: 'Only briefly, if everything else is normal',

  shortAnswer:
    'Do not ignore a cat that continues refusing food. An otherwise normal adult cat that skips one meal can be watched briefly, but contact your veterinarian if the next meal is also refused or the cat has eaten nothing for twenty-four hours. Act sooner for kittens, overweight cats, diabetic cats, or any cat with other symptoms.',

  whyItMattersHeading: 'Why a Cat Not Eating Needs Faster Attention',
  whyItMatters: [
    'Appetite loss can come from stress or an unwanted food change, but it can also signal dental pain, nausea, an intestinal obstruction, kidney disease, diabetes, pancreatitis, infection, or another illness. Drinking normally is reassuring, but it does not cancel the concern if food refusal continues.',
    'Cats are vulnerable to hepatic lipidosis, a potentially fatal liver disorder associated with inadequate food intake. The risk is especially important in overweight cats. Very young kittens also have little reserve, so dog-style wait-and-see rules should not be applied to them.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help Now If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against FDA pet-hazard guidance and veterinary sources covering feline anorexia, dehydration, hepatic lipidosis, obstruction, and diabetes-related feeding risks.',
  disclaimer:
    'General triage guidance only. Appetite loss has many possible causes and cannot be diagnosed from feeding behavior alone. Contact a veterinarian sooner if your cat is very young, overweight, diabetic, taking medication, or showing any other sign of illness.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'skipped-one-meal',
      label: 'My adult cat skipped one meal but seems completely normal',
      shortDescription:
        'Energy, drinking, breathing, litter-box use, and behavior are normal, with no vomiting, pain, or suspected exposure.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Watch the next feeding closely',
      resultBody:
        'One missed meal does not always mean illness, particularly after a minor routine disruption. The situation becomes less reassuring if your cat refuses the next meal or anything else changes.',
      recommendedAction:
        'Offer the normal food again at the usual feeding time and keep fresh water available. If the next meal is refused, contact your veterinarian rather than waiting beyond a full day.',
    },
    {
      slug: 'no-food-for-a-full-day',
      label: 'My cat has eaten nothing for about a full day',
      shortDescription: 'The cat has refused meals and treats rather than simply eating a smaller portion.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Call your veterinarian now',
      resultBody:
        'Cornell notes that sustained appetite loss can seriously affect a mature cat after as little as twenty-four hours. The cause needs attention even if the cat is still drinking and does not look dramatically ill.',
      recommendedAction:
        'Contact your veterinarian for prompt guidance and examination. Report the last confirmed meal, water intake, urination, stool, vomiting, medications, diet changes, and behavior changes.',
    },
    {
      slug: 'recent-move-or-food-change',
      label: 'My cat stopped eating after a move, boarding stay, or food change',
      shortDescription:
        'There is an obvious recent stressor, and the adult cat otherwise appears comfortable and alert.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Stress may explain it, but only briefly',
      resultBody:
        "Moving, a new animal, boarding, and an unfamiliar diet can reduce a cat's appetite. They do not make prolonged food refusal safe or rule out an illness that appeared at the same time.",
      recommendedAction:
        'Offer a familiar food in a quiet place away from other pets. Call your veterinarian if the next meal is refused, intake remains very low, or any illness sign appears.',
    },
    {
      slug: 'overweight-cat',
      label: 'My overweight cat has stopped eating',
      shortDescription: 'A cat with excess body fat is refusing food or consuming far less than usual.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not wait for visible weight loss',
      resultBody:
        'Hepatic lipidosis can follow anorexia or food deprivation, and its incidence is higher in overweight cats. Jaundice and major weakness are late warning signs, not milestones to wait for.',
      recommendedAction:
        'Seek same-day veterinary advice. Tell the clinic that your cat is overweight and describe whether intake is completely absent or merely reduced.',
    },
    {
      slug: 'very-young-kitten',
      label: 'A kitten younger than six weeks is not eating',
      shortDescription: 'A neonatal or very young kitten has refused feeding or cannot nurse normally.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'This is urgent',
      resultBody:
        'Very young kittens have limited energy reserves. Cornell warns that food avoidance for twelve hours in a kitten younger than six weeks can pose a lethal threat.',
      recommendedAction:
        "Contact a veterinarian or emergency veterinary hospital immediately. Keep the kitten safely warm during transport, but do not force food or liquid into a weak kitten's mouth.",
    },
    {
      slug: 'wants-to-eat-but-cannot',
      label: 'My cat approaches food but cannot eat normally',
      shortDescription:
        'The cat sniffs or tries to eat but drops food, chews oddly, gags, drools, or repeatedly swallows.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Look for pain or difficulty swallowing',
      resultBody:
        'A cat may remain hungry but be unable to pick up, chew, or swallow food because of dental disease, mouth injury, throat problems, pain, or a foreign object.',
      recommendedAction:
        'Arrange a prompt veterinary examination. Do not force the mouth open, push food inside, or pull on any thread or string that may be visible.',
    },
    {
      slug: 'vomiting-or-not-drinking',
      label: 'My cat is not eating and is vomiting, having diarrhea, or not taking in water',
      shortDescription:
        'Food refusal is occurring with fluid loss, poor water intake, or an inability to keep water down.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Dehydration and serious illness are concerns',
      resultBody:
        'Vomiting and diarrhea increase fluid loss, while reduced food intake also removes water normally obtained from moist food. An obstruction, toxin, infection, or organ disease may be involved.',
      recommendedAction:
        'Contact a veterinarian promptly. Use emergency care if vomiting keeps returning, water will not stay down, your cat is weak, or the abdomen appears painful or swollen.',
    },
    {
      slug: 'hiding-weak-or-painful',
      label: 'My cat is not eating and is hiding, weak, lethargic, or painful',
      shortDescription:
        'Appetite loss is accompanied by a clear change in energy, posture, movement, grooming, or social behavior.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not dismiss this as pickiness',
      resultBody:
        'Cats often show illness or pain through quiet behavior changes. Appetite loss combined with weakness, hiding, or pain is more concerning than a missed meal by itself.',
      recommendedAction:
        'Contact a veterinarian promptly and describe every change you have noticed. Seek emergency care for collapse, severe weakness, breathing difficulty, or pale, blue, or gray gums.',
    },
    {
      slug: 'possible-toxin-or-object',
      label: 'My cat may have eaten a toxin, plant, string, or another object',
      shortDescription:
        'Medication, chemicals, dangerous food, plants, thread, ribbon, yarn, or another object may be missing or accessible.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not wait for the appetite to return',
      resultBody:
        "Poisoning and gastrointestinal obstruction can cause appetite loss and may worsen before all symptoms become obvious. Linear objects such as string can injure or perforate a cat's intestines.",
      recommendedAction:
        'Call a veterinarian, emergency animal hospital, or animal poison-control service immediately. Do not induce vomiting and never pull visible string from the mouth or anus.',
    },
    {
      slug: 'diabetic-cat',
      label: 'My diabetic cat has stopped eating',
      shortDescription: 'A cat receiving insulin or another diabetes medication is refusing food or water.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Get medication-specific instructions',
      resultBody:
        "Poor intake changes the risks surrounding diabetes treatment, and the correct response depends on the medication and the cat's condition. Generic dose advice is not safe for every diabetic cat.",
      recommendedAction:
        'Contact the prescribing veterinarian before making the next medication decision. Seek urgent care if your cat is weak, vomiting, dehydrated, uncoordinated, trembling, or otherwise unwell.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The cause may be minor or medical',
      description:
        'A stressful event or disliked food may reduce appetite, but nausea, pain, dental disease, infection, and organ disorders can look the same at first.',
      severity: 'caution',
      chainLabel: 'Appetite drops',
    },
    {
      stageLabel: 'IF INTAKE STAYS LOW',
      title: 'Nutritional and hydration deficits grow',
      description:
        'Continued low intake deprives the body of energy and nutrients. Dehydration becomes more likely if drinking is reduced or vomiting and diarrhea are present.',
      severity: 'warning',
      chainLabel: 'Reduced intake continues',
    },
    {
      stageLabel: 'IF BODY FAT IS MOBILIZED',
      title: 'Fatty liver becomes a concern',
      description:
        'When a cat does not consume enough food, fat can move to the liver faster than it can be processed. Overweight cats are at greater risk.',
      severity: 'warning',
      chainLabel: 'Liver function is threatened',
    },
    {
      stageLabel: 'IF WEIGHT LOSS, WEAKNESS, OR JAUNDICE APPEARS',
      title: 'The illness may already be advanced',
      description:
        'Marked weight loss, lethargy, drooling, vomiting, or yellow discoloration can occur with hepatic lipidosis and other serious diseases.',
      severity: 'danger',
      chainLabel: 'Systemic illness develops',
    },
    {
      stageLabel: 'IF THE CAUSE IS AN OBSTRUCTION, TOXIN, OR SEVERE DISEASE',
      title: 'Waiting can become life-threatening',
      description:
        'A blocked or injured digestive tract, poisoning, severe dehydration, or uncontrolled metabolic disease may require hospitalization, diagnostic testing, fluids, medication, or assisted nutrition.',
      severity: 'danger',
      chainLabel: 'Emergency treatment may be needed',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'An adult cat skipped one meal and otherwise appears completely normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Offer the normal food at the next scheduled feeding and monitor water intake, energy, breathing, vomiting, stool, urination, and behavior.',
    },
    {
      situation: 'Appetite changed immediately after a move, boarding stay, new pet, or new food',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Restore a quiet routine and offer familiar food. Do not keep blaming stress if the next meal is refused or another symptom appears.',
    },
    {
      situation: 'The cat has consumed no meaningful food for twenty-four hours',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact your veterinarian for prompt evaluation, even if your cat is still drinking and walking around normally.',
    },
    {
      situation: 'An overweight cat is refusing food or eating very little',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Seek same-day veterinary advice because excess body fat increases the concern for hepatic lipidosis when intake falls.',
    },
    {
      situation: 'A kitten younger than six weeks has stopped nursing or eating',
      ignoreAnswer: 'No — urgent',
      severity: 'danger',
      whatToDo:
        'Contact a veterinarian or emergency hospital immediately. Do not attempt force-feeding if the kitten is weak or cannot swallow normally.',
    },
    {
      situation: 'The cat takes treats but repeatedly refuses normal meals',
      ignoreAnswer: 'Only through the next feeding',
      severity: 'caution',
      whatToDo:
        'Stop replacing meals with unlimited treats. Track how much is actually eaten and contact your veterinarian if normal intake does not return.',
    },
    {
      situation: 'Appetite loss comes with vomiting, diarrhea, poor drinking, or dehydration signs',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Arrange veterinary care promptly. Use emergency care if water will not stay down, weakness is developing, or symptoms are severe.',
    },
    {
      situation: 'The cat wants food but drops it, drools, gags, or cannot chew or swallow',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange a veterinary examination for possible dental, oral, throat, or foreign-object problems. Do not force food into the mouth.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm how much your cat is actually eating',
      body:
        'In a multi-cat home, separate the cat with a measured portion so another animal cannot hide the problem. Record the last normal meal, what has been accepted since, water intake, urine, stool, vomiting, and recent weight changes.',
    },
    {
      title: 'Offer familiar food without turning it into a prolonged experiment',
      body:
        "Use your cat's usual food, a clean dish, and a quiet feeding location away from competing pets. Trying one familiar wet-food texture is reasonable, but repeatedly opening new foods can obscure how little the cat is consuming and delay care.",
    },
    {
      title: 'Keep fresh water available',
      body:
        'Place clean water where the cat can reach it without climbing or passing another pet. Remember that cats eating wet food may drink little from a bowl, so consider total water intake rather than bowl use alone. Do not syringe water into a cat that resists or cannot swallow.',
    },
    {
      title: 'Do not force-feed or use leftover medication',
      body:
        'Pushing food into the mouth can worsen food aversion and may be unsafe when swallowing is impaired. Appetite stimulants, pain medicines, nausea medicines, and diabetes drugs require veterinary instructions for the individual cat.',
    },
    {
      title: 'Escalate possible poisoning, obstruction, or repeated vomiting',
      body:
        'Contact a veterinarian or emergency service immediately after suspected dangerous ingestion. Bring the package, plant identification, medication label, or a photo of the suspected object if it can be collected safely.',
      destinationProblemSlug: 'cat-throwing-up',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'No meaningful food intake for twenty-four hours',
      description:
        'Sustained appetite loss can seriously affect an adult cat even when the cat is still drinking or does not yet appear critically ill.',
      severity: 'warning',
    },
    {
      title: 'A very young kitten has stopped feeding',
      description:
        'A kitten younger than six weeks can become critically ill after a much shorter period without food.',
      severity: 'danger',
    },
    {
      title: 'Repeated vomiting or inability to keep water down',
      description:
        'Fluid loss and poor intake can cause dehydration, while obstruction, poisoning, or another serious disease may be responsible.',
      severity: 'danger',
    },
    {
      title: 'Weakness, collapse, or trouble breathing',
      description: 'These are emergency signs regardless of whether appetite loss was the first symptom.',
      severity: 'danger',
    },
    {
      title: 'Yellow, pale, blue, or gray tissue',
      description:
        'Yellow gums, eyes, or inner ears can indicate jaundice. Pale, blue, or gray gums may indicate another serious emergency.',
      severity: 'danger',
    },
    {
      title: 'A painful or swollen abdomen',
      description:
        'Abdominal pain or distention with appetite loss can occur with significant gastrointestinal disease or obstruction.',
      severity: 'danger',
    },
    {
      title: 'Possible toxin, medication, plant, string, or foreign-object exposure',
      description:
        'Do not wait for vomiting, weakness, or other symptoms. Early guidance can be important, and visible thread or string must not be pulled.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it okay if my cat skips one meal?',
      answer:
        'An otherwise normal adult cat can be watched through the next scheduled feeding. If that meal is also refused, contact your veterinarian rather than continuing to wait.',
    },
    {
      question: 'How long is too long for a cat to go without eating?',
      answer:
        'Cornell warns that sustained appetite loss can seriously affect a mature cat after as little as twenty-four hours. A kitten younger than six weeks may face a lethal threat after twelve hours without food.',
    },
    {
      question: 'Why is a cat not eating more urgent than a dog not eating?',
      answer:
        'Cats have a particular vulnerability to hepatic lipidosis when food intake falls, especially if they are overweight. Very young kittens also have limited reserves, so advice written for dogs should not be reused automatically.',
    },
    {
      question: 'Can stress or moving make a cat stop eating?',
      answer:
        'Yes. Moving, boarding, a new pet, loss of a companion, or an unwanted food change can reduce appetite. Stress should not be treated as the final answer if food refusal continues or your cat looks unwell.',
    },
    {
      question: 'Does it count if my cat eats treats but refuses meals?',
      answer:
        'It counts as some intake, but it is not proof that your cat is healthy or eating enough. Dental pain and nausea can make a cat selective, and treats can mask a substantial drop in total food intake.',
    },
    {
      question: 'Is my cat safe if it is still drinking water?',
      answer:
        'Normal drinking is reassuring but does not rule out disease or protect against the effects of inadequate nutrition. Also, cats normally obtain some water from food, particularly wet food.',
    },
    {
      question: 'How can I tell if my cat is dehydrated?',
      answer:
        'Warning signs include weakness, lethargy, dry or tacky gums, poor appetite, and sunken eyes. Skin elasticity can be misleading in older cats, so contact a veterinarian if dehydration is a concern.',
    },
    {
      question: 'Should I force-feed my cat?',
      answer:
        'Not without veterinary direction. Forcing food can worsen aversion and may be unsafe if your cat is nauseated, cannot swallow properly, or has an obstruction.',
    },
    {
      question: 'Can dental problems make a cat stop eating?',
      answer:
        'Yes. Dental or mouth pain may cause food dropping, unusual chewing, drooling, preference for soft food, or approaching the bowl and then backing away. A veterinary mouth examination is needed.',
    },
    {
      question: 'Can I give my cat a leftover appetite stimulant?',
      answer:
        "No. Appetite stimulants do not correct every cause of food refusal, and the appropriate drug and dose depend on the cat's condition and other medications. Call your veterinarian.",
    },
    {
      question: 'What will a veterinarian check when a cat stops eating?',
      answer:
        'The evaluation usually begins with feeding history, weight, hydration, temperature, a physical examination, and a careful check of the mouth and teeth. Blood, urine, stool, X-ray, ultrasound, or other tests may follow based on the findings.',
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
        'Identifies dangerous foods, medications, chemicals, plants, and obstructive objects, and advises immediate contact with a veterinarian or pet poison-control center after suspected ingestion.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Anorexia',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/anorexia',
      sourceType: 'academic',
      notes:
        'Supports the twenty-four-hour concern for mature cats, the shorter window for kittens younger than six weeks, potential medical and psychological causes, dental evaluation, and avoiding forced oral feeding.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Hepatic Lipidosis',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hepatic-lipidosis',
      sourceType: 'academic',
      notes:
        'Explains that anorexia commonly precedes hepatic lipidosis, that the condition can be fatal without prompt treatment, and that incidence is higher in obese cats.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Hydration',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hydration',
      sourceType: 'academic',
      notes:
        'Covers water obtained through food, dehydration risks, signs such as weakness and dry gums, limitations of skin-turgor checks in older cats, and the need for prompt veterinary care when dehydration is suspected.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Gastrointestinal Obstruction in Small Animals',
      url: 'https://www.merckvetmanual.com/digestive-system/surgical-problems-of-the-gastrointestinal-tract-in-small-animals/gastrointestinal-obstruction-in-small-animals',
      sourceType: 'other',
      notes:
        'Supports anorexia, vomiting, lethargy, pain, and shock as possible obstruction signs and explains why linear foreign bodies in cats must never be pulled.',
    },
    {
      publisher: 'American Animal Hospital Association',
      title: '2026 AAHA Diabetes Management Guidelines FAQs - Cats',
      url: 'https://www.aaha.org/resources/2026-aaha-diabetes-management-guidelines-for-cats/2026-aaha-diabetes-management-guidelines-faqs-cats/',
      sourceType: 'standards_body',
      notes:
        'Provides medication-specific guidance for diabetic cats that stop eating or drinking and supports contacting the prescribing veterinarian rather than improvising treatment changes.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Veterinary examination',
      description:
        'A physical examination can identify dental pain, dehydration, fever, abdominal abnormalities, jaundice, and other clues that cannot be assessed from eating behavior alone.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Food, water, and symptom log',
      description:
        'A written record of meals offered, estimated intake, water use, vomiting, stool, urine, medications, and behavior gives the veterinary clinic a clearer timeline.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pet or infant scale',
      description:
        'Consistent weight checks can reveal loss that is difficult to notice visually, particularly in long-haired or overweight cats.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Animal poison-control service',
      description:
        'A poison-control service can provide case-specific guidance when a cat may have contacted a dangerous plant, medication, chemical, food, or household product.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'cat-throwing-up', anchorText: 'Is your cat also throwing up?', relationshipType: 'escalation' },
    { slug: 'cat-diarrhea', anchorText: 'Is diarrhea happening too?', relationshipType: 'escalation' },
    {
      slug: 'cat-hiding-suddenly',
      anchorText: 'Has your cat started hiding suddenly?',
      relationshipType: 'escalation',
    },
    {
      slug: 'cat-eating-houseplants',
      anchorText: 'Could a houseplant be involved?',
      relationshipType: 'cause',
    },
    {
      slug: 'cat-drinking-lots-of-water',
      anchorText: 'Is your cat drinking much more?',
      relationshipType: 'related',
    },
  ],
};
