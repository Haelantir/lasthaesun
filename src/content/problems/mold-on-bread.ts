import type { ProblemSeed } from '../types';

export const moldOnBread: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'pantry',
  slug: 'mold-on-bread',
  canonicalPath: '/food-kitchen/food-storage/pantry/mold-on-bread/',
  name: 'Mold on Bread',
  eyebrow: 'Food & Kitchen · Food Storage · Pantry',

  h1: 'Can I Ignore Mold on Bread?',
  seoTitle: 'Moldy Bread: Why Cutting Off the Spot Is Not Safe',
  metaDescription:
    'Do not cut mold off bread and eat the rest. Learn why the whole loaf should go, what may be a false alarm, and what to do after an accidental bite.',

  aliases:
    ['/food-kitchen/food-storage/pantry/moldy-bread/', '/food-kitchen/food-storage/pantry/bread-with-mold/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'No—discard the loaf or shared package',

  shortAnswer:
    'No. Throw away the entire loaf or all bread sharing the same unsealed package. Bread is porous, so mold can spread below the surface where you cannot see it.',

  whyItMattersHeading: 'Why One Mold Spot Spoils the Loaf',
  whyItMatters: [
    'The colored fuzz is only the visible part of the mold. Threadlike growth can extend through soft, porous bread, so removing one slice or cutting around a spot does not reliably remove the contamination. USDA guidance specifically lists moldy bread and baked goods as foods to discard.',
    'Some molds can cause allergic or respiratory reactions, and some produce mycotoxins under the right conditions. Moldy food may also contain bacteria. An accidental small bite is unlikely to cause symptoms in a healthy person, but the rest of the bread should still go.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Medical Help If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Bread disposal, hidden mold growth, accidental ingestion, symptom red flags, and higher-risk groups were checked against USDA, FDA, CDC, Poison Control, and university guidance.',
  disclaimer:
    'General U.S. food-safety guidance, not a medical diagnosis. Seek urgent care for severe symptoms or breathing difficulty; Poison Control can provide individualized ingestion advice.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'confirmed-flour-dusting',
      label: 'The white coating is confirmed flour',
      shortDescription:
        "An evenly applied dry dusting matches the bakery's intended finish, with no fuzz, colored spots, spreading patches, or musty odor.",
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Flour is not mold',
      resultBody:
        'Artisan loaves and rolls may be intentionally dusted with flour. A uniform coating that was present when the bread was fresh is different from a new fuzzy or spreading colony.',
      recommendedAction:
        'Use the bread normally if you are confident the coating is flour. If the appearance has changed or you cannot tell, discard it.',
    },
    {
      slug: 'stale-without-mold',
      label: 'The bread is stale but has no mold',
      shortDescription:
        'It is dry or firm but has no fuzzy growth, unusual colored patches, damp spots, or musty odor.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Staleness is a quality problem',
      resultBody:
        'Bread can lose moisture and become hard without becoming moldy. Stale bread may be unpleasant, but dryness alone is not the same as visible spoilage.',
      recommendedAction: 'Use it if the appearance and odor are otherwise normal, or discard it for quality.',
    },
    {
      slug: 'frozen-bread-with-ice-crystals',
      label: 'Frozen bread has dry white patches or ice crystals',
      shortDescription:
        'The bread remained frozen, and the marks are dry, crystalline, or pale rather than fuzzy or spreading.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be freezer damage, not mold',
      resultBody:
        'Ice crystals and freezer burn can change the surface color and texture without making continuously frozen bread unsafe.',
      recommendedAction:
        'Thaw one piece and inspect it. Keep it if the marks disappear or remain dry and there is no fuzz or musty odor.',
    },
    {
      slug: 'separately-sealed-clean-bread',
      label: 'Clean bread was stored in a separate sealed package',
      shortDescription:
        'The moldy bread never shared a bag or touched the clean bread, and the clean package remains intact.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'An intact package provides separation',
      resultBody:
        'The moldy item still needs to be discarded, but bread in a different unopened wrapper is not automatically contaminated merely because it was stored nearby.',
      recommendedAction:
        'Discard the moldy bread, wipe the storage area, and inspect the sealed package before opening it.',
    },
    {
      slug: 'accidental-small-bite-no-symptoms',
      label: 'You accidentally swallowed a small bite',
      shortDescription:
        'You are generally healthy, feel normal, and stopped eating as soon as you noticed the mold.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Do not panic, but stop eating it',
      resultBody:
        'Poison Control reports that a healthy person who eats a small amount will probably have no symptoms. Nausea, vomiting, diarrhea, cramps, or an allergic reaction can occur.',
      recommendedAction:
        'Discard the rest, rinse your mouth, and monitor how you feel. Contact Poison Control if you want case-specific guidance.',
    },
    {
      slug: 'mild-symptoms-after-eating',
      label: 'You have mild stomach upset after eating it',
      shortDescription:
        'Mild nausea, cramps, vomiting, or diarrhea began after the bread was eaten, without breathing trouble or other severe symptoms.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Monitor closely and stay hydrated',
      resultBody:
        'Mild symptoms may settle without treatment, but worsening vomiting or diarrhea can lead to dehydration and may have another foodborne cause.',
      recommendedAction:
        'Stop eating the product, drink fluids if you can keep them down, and contact Poison Control or a health care provider if symptoms persist or worsen.',
    },
    {
      slug: 'higher-risk-person-ate-it',
      label: 'A higher-risk person ate the moldy bread',
      shortDescription:
        'The person is pregnant, under five, an older adult, or has a weakened immune system or significant medical condition.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Get individualized advice sooner',
      resultBody:
        'These groups can be more vulnerable to complications from foodborne illness. The amount eaten, symptoms, allergies, and underlying health all affect the appropriate response.',
      recommendedAction:
        'Discard the bread and contact a health care provider or Poison Control for advice rather than waiting for significant symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The visible spot is only part of the mold',
      description:
        'Fuzzy or colored growth produces threadlike structures that can extend into the bread beyond the area you can see.',
      severity: 'caution',
      chainLabel: 'Visible spot → hidden growth',
    },
    {
      stageLabel: 'IF YOU CUT AROUND IT',
      title: 'Contaminated bread may remain',
      description:
        'Because bread is porous, trimming the crust or removing nearby slices cannot reliably separate clean bread from affected bread.',
      severity: 'warning',
      chainLabel: 'Trimming → uncertain contamination',
    },
    {
      stageLabel: 'IF YOU KEEP THE PACKAGE',
      title: 'Mold can continue growing',
      description:
        'Moisture and food allow mold to develop, while spores and crumbs can contaminate the storage area or contact nearby items.',
      severity: 'caution',
      chainLabel: 'Storage → continued growth',
    },
    {
      stageLabel: 'IF IT IS EATEN',
      title: 'Symptoms are possible but not inevitable',
      description:
        'A healthy person who swallows a small amount will often have no symptoms. Possible effects include nausea, vomiting, diarrhea, cramps, rash, or respiratory symptoms.',
      severity: 'warning',
      chainLabel: 'Ingestion → possible reaction',
    },
    {
      stageLabel: 'IF A SEVERE REACTION OCCURS',
      title: 'Breathing trouble or dehydration needs care',
      description:
        'Trouble breathing, facial or throat swelling, frequent vomiting, bloody diarrhea, or an inability to keep fluids down requires prompt medical attention.',
      severity: 'danger',
      chainLabel: 'Severe symptoms → medical help',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One mold spot on one slice of a shared loaf',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the entire loaf and its bag. Clean the shelf or bread box where it was stored.',
    },
    {
      situation: 'Mold appears only on the crust',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Discard the loaf. Removing the crust does not address growth that may extend into the porous bread.',
    },
    {
      situation: 'Bagels, rolls, buns, or tortillas share the same unsealed bag',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard everything in the shared package, even if only one piece has visible growth.',
    },
    {
      situation: 'You plan to toast or bake the bread',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Do not use heating as a rescue method. USDA guidance is to discard moldy bread, not cook it.',
    },
    {
      situation: 'The coating is confirmed flour applied by the bakery',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Use it normally as long as there is no new fuzz, spreading discoloration, dampness, or musty odor.',
    },
    {
      situation: 'The bread is stale but shows no mold',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Use or discard it based on quality. Hardness or dryness alone does not establish mold growth.',
    },
    {
      situation: 'You swallowed a small bite and feel normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Rinse your mouth, discard the bread, and monitor for stomach, skin, or breathing symptoms.',
    },
    {
      situation: 'Symptoms developed after eating the bread',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop eating it, stay hydrated if possible, and seek advice based on the severity of the symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Discard the entire loaf or shared package',
      body:
        'Put the moldy bread and its bag into another bag or wrap them before placing them in a covered trash can. Keep discarded food away from children and animals.',
    },
    {
      title: 'Do not sniff, taste, or toast it',
      body:
        'Sniffing mold can irritate the respiratory system. Tasting another piece or heating the bread cannot confirm that the hidden portions are safe.',
    },
    {
      title: 'Clean the storage spot',
      body:
        'Remove crumbs, wash the shelf or bread box with ordinary kitchen cleaner or hot soapy water, and dry it. Inspect foods that touched the package.',
    },
    {
      title: 'Freeze bread before it spoils',
      body:
        'If you cannot finish a loaf while it is fresh, divide and freeze it in sealed freezer-safe packaging. Freezing before mold appears reduces waste; freezing moldy bread does not rescue it.',
      destinationProblemSlug: 'freezer-burn',
    },
    {
      title: 'Respond to an accidental bite based on symptoms',
      body:
        'A healthy person who ate a small amount will probably be fine. Call Poison Control at 1-800-222-1222 for individualized guidance, and seek urgent care for severe symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Trouble breathing or wheezing',
      description:
        'Call emergency services for breathing difficulty, especially if it begins suddenly after mold exposure.',
      severity: 'danger',
    },
    {
      title: 'Swelling of the face, lips, tongue, or throat',
      description: 'This may be a serious allergic reaction and requires emergency medical care.',
      severity: 'danger',
    },
    {
      title: 'Vomiting prevents fluids from staying down',
      description:
        "Frequent vomiting can cause dehydration and is one of the CDC's severe food-poisoning warning signs.",
      severity: 'warning',
    },
    {
      title: 'Bloody diarrhea or a fever over 102°F',
      description: 'The CDC recommends medical care for these signs of severe foodborne illness.',
      severity: 'warning',
    },
    {
      title: 'Signs of dehydration',
      description:
        'Very little urination, a dry mouth or throat, or dizziness when standing needs medical attention.',
      severity: 'warning',
    },
    {
      title: 'Symptoms in someone at higher risk',
      description:
        'Pregnant people, young children, older adults, and people with weakened immune systems should seek advice sooner.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I remove the moldy slice and eat the rest of the loaf?',
      answer:
        'No. Bread is porous, and mold can extend into slices that still look clean. Discard the loaf or shared package.',
    },
    {
      question: 'Does toasting moldy bread make it safe?',
      answer:
        'No. Toasting does not let you verify that hidden mold, bacteria, or mold-produced substances are gone. Follow the USDA discard guidance.',
    },
    {
      question: 'What if the mold is only on the crust?',
      answer:
        'Discard the bread. A crust spot is still visible growth on a porous food, not a removable shell around an unaffected interior.',
    },
    {
      question: 'Are white spots on bread always mold?',
      answer:
        'No. They may be flour or, on frozen bread, ice crystals and freezer damage. Mold is more likely to look fuzzy, irregular, colored, spreading, or newly developed. Discard the bread if you are unsure.',
    },
    {
      question: 'Why can mold sometimes be cut off hard cheese but not bread?',
      answer:
        'Mold has more difficulty penetrating dense hard cheese. Bread has an open, porous structure that allows growth below the visible surface.',
    },
    {
      question: 'Does the color of bread mold show whether it is dangerous?',
      answer: 'No. White, green, blue, pink, gray, or black growth cannot be declared safe by color alone.',
    },
    {
      question: 'Can I feed moldy bread to pets, livestock, or birds?',
      answer:
        'No. Do not transfer a food-safety gamble to an animal. Wrap the bread and place it where animals cannot reach it.',
    },
    {
      question: 'What should I do if I accidentally ate moldy bread?',
      answer:
        'Stop eating, rinse your mouth, and discard the rest. A healthy person who swallowed a small amount will probably have no symptoms, but monitor for stomach, allergic, or breathing problems.',
    },
    {
      question: 'Can mold grow on bread in the refrigerator?',
      answer:
        'Yes. Refrigeration may slow growth, but molds can grow at refrigerator temperatures. Freezing portions is a better option for longer storage.',
    },
    {
      question: 'Is homemade or preservative-free bread different?',
      answer:
        'It may develop mold sooner, but the response is the same once mold appears: discard the bread rather than trimming it.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Molds on Food: Are They Dangerous?',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/molds-food-are-they-dangerous',
      sourceType: 'government',
      notes:
        'FSIS says to discard moldy bread and baked goods because porous foods can be contaminated below the surface. It also advises against sniffing moldy food and recommends cleaning the storage spot.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Mycotoxins',
      url: 'https://www.fda.gov/food/natural-toxins-food/mycotoxins',
      sourceType: 'government',
      notes:
        'FDA explains that only certain molds produce mycotoxins, identifies grains as susceptible foods, and notes that high levels of some mycotoxins found in bread can cause nausea, vomiting, and other symptoms.',
    },
    {
      publisher: 'National Capital Poison Center',
      title: 'Spoiled Food and Drinks: When in Doubt, Throw It Out',
      url: 'https://www.poison.org/articles/spoiled-food-and-drinks',
      sourceType: 'other',
      notes:
        'Poison Control says a healthy person who eats a small amount of moldy food will probably have no symptoms and lists possible gastrointestinal, respiratory, and allergic effects.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Food Poisoning Symptoms',
      url: 'https://www.cdc.gov/food-safety/signs-symptoms/index.html',
      sourceType: 'government',
      notes:
        'CDC lists common foodborne illness symptoms and warning signs that require medical care, including bloody diarrhea, high fever, frequent vomiting, and dehydration.',
    },
    {
      publisher: 'University of Minnesota Extension',
      title: 'Safe Food Handling Basics',
      url: 'https://extension.umn.edu/node/2666',
      sourceType: 'academic',
      notes:
        'University guidance explains that visible mold is only part of the growth and recommends discarding most moldy foods rather than tasting them.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'People at Risk of Foodborne Illness',
      url: 'https://www.fda.gov/food/consumers/people-risk-foodborne-illness',
      sourceType: 'government',
      notes:
        'FDA identifies pregnant people, young children, older adults, and people with weakened immune systems as groups more vulnerable to foodborne illness and complications.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Sealable trash bag',
      description: 'Contains the moldy bread and loose crumbs while it is moved to a covered trash can.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Freezer-safe bread bags or containers',
      description: 'Let you freeze portions before mold develops while limiting drying and freezer damage.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Poison Control consultation',
      description: 'Provides free, confidential, case-specific guidance after someone swallows moldy food.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Food-storage labels',
      description:
        'Help track when bread was opened or frozen so extra portions can be used before quality declines.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'freezer-burn',
      anchorText: 'Are white patches on frozen bread just freezer burn?',
      relationshipType: 'related',
    },
  ],
};
