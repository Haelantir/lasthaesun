import type { ProblemSeed } from '../types';

export const whiteSpotsOnChocolate: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'pantry',
  slug: 'white-spots-on-chocolate',
  canonicalPath: '/food-kitchen/food-storage/pantry/white-spots-on-chocolate/',
  name: 'White Spots on Chocolate',
  eyebrow: 'Food & Kitchen · Food Storage · Pantry',

  h1: 'Can I Ignore White Spots on Chocolate?',
  seoTitle: 'White Spots on Chocolate: Bloom, Mold, and When to Toss It',
  metaDescription:
    'White or gray spots on chocolate are usually harmless fat or sugar bloom. Learn the clues that separate bloom from mold and when to throw it away.',

  aliases:
    ['/food-kitchen/food-storage/pantry/white-film-on-chocolate/', '/food-kitchen/food-storage/pantry/chocolate-bloom/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'Yes, if it is bloom and the chocolate otherwise seems normal',

  shortAnswer:
    'Usually. Flat gray-white streaks or a dusty, grainy coating are commonly chocolate bloom, which is safe but can hurt flavor and texture. Discard chocolate with fuzzy growth, unusual colors, an off odor, unexpected moisture, contaminated packaging, or marks you cannot confidently identify.',

  whyItMattersHeading: 'Why Chocolate Turns White',
  whyItMatters: [
    'Fat bloom happens when cocoa butter separates or forms unstable crystals at the surface, often after warmth, temperature swings, poor tempering, or fat migration from a filling. It usually creates a smooth, waxy gray-white haze, streaks, or blotches that may soften or disappear when rubbed.',
    'Sugar bloom happens when moisture dissolves sugar at the surface and then evaporates, leaving rough, dry crystals behind. Both kinds of bloom are quality defects rather than mold. Fuzzy or raised growth, unexpected colors, a musty odor, wet filling, or compromised packaging points to a separate spoilage or contamination problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Throw the Chocolate Away If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Chocolate bloom, mold warning signs, quality changes, storage, and date-label meaning were checked against USDA, FDA, university extension, and chocolate-maker guidance.',
  disclaimer:
    'General guidance for commercially made chocolate. Homemade chocolates and products with cream, custard, fresh fruit, or other perishable fillings need storage based on the filling, not the chocolate shell alone.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'smooth-white-streaks',
      label: 'Smooth gray-white streaks or haze',
      shortDescription:
        'The coating is flat and waxy rather than fuzzy, and the wrapper, smell, and rest of the chocolate seem normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This matches fat bloom',
      resultBody:
        'Cocoa butter has migrated or recrystallized at the surface. Chocolate makers describe this as a visual and textural defect that remains safe to eat.',
      recommendedAction:
        'Eat or bake with it if the quality is acceptable. Expect less shine, a weaker snap, or a softer or crumbly texture.',
    },
    {
      slug: 'rough-dusty-coating',
      label: 'Rough, dusty, or grainy white coating',
      shortDescription:
        'The surface feels dry and gritty, especially after refrigeration, freezing, humidity, or a move from cold to warm conditions.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This matches sugar bloom',
      resultBody:
        'Condensation or humidity dissolved surface sugar. When the moisture evaporated, the sugar recrystallized into a pale, rough coating.',
      recommendedAction:
        'It is safe if everything else is normal. Use it as-is or in baking, but expect a gritty surface and possible melting problems.',
    },
    {
      slug: 'melted-and-rehardened',
      label: 'The chocolate melted and hardened again',
      shortDescription:
        'The bar is misshapen or dull with pale patches, but its packaging stayed clean and intact.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Heat damaged the finish, not necessarily the food',
      resultBody:
        'Melting disrupts the cocoa butter crystal structure and commonly produces fat bloom after the chocolate hardens again.',
      recommendedAction:
        'Use it if there are no separate spoilage signs. Baking or melting applications usually make the damaged appearance less important.',
    },
    {
      slug: 'sealed-filled-chocolate-bloom',
      label: 'Even gray coating on a sealed filled or nut chocolate',
      shortDescription:
        'The shell has a smooth, uniform cast, while the filling, package, and odor remain normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Filling fats can cause bloom',
      resultBody:
        'Fat from nut-based or other fat-based centers can migrate into the chocolate shell and create fat bloom. That is a quality change rather than proof of spoilage.',
      recommendedAction:
        'It can be eaten if the filling was stored as directed and shows no leaking, off odor, or other abnormal change.',
    },
    {
      slug: 'fuzzy-raised-growth',
      label: 'Fuzzy, hairy, raised, or threadlike spots',
      shortDescription:
        'The marks project above the surface or form irregular colonies rather than a flat film.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Treat this as possible mold',
      resultBody:
        'Bloom is crystalline and lies on the chocolate surface. Fuzzy or filament-like growth does not match normal fat or sugar bloom.',
      recommendedAction:
        'Do not taste or closely sniff it. Bag and discard the entire product, then check nearby food for contamination.',
    },
    {
      slug: 'colored-spots',
      label: 'Green, blue, black, or pink spots mixed with white',
      shortDescription: 'New localized colors are present and are not an expected ingredient or decoration.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'This is not typical chocolate bloom',
      resultBody:
        'Fat and sugar bloom are generally pale gray, tan, or white. Unexpected colored colonies are a spoilage warning.',
      recommendedAction:
        'Discard the chocolate without tasting it. Clean the area where it was stored if residue or growth is present.',
    },
    {
      slug: 'leaking-or-wet-filling',
      label: 'Unexpected wetness or a leaking filling',
      shortDescription:
        'A cream, fruit, or other center is oozing, the shell is unusually damp, or residue has collected inside the wrapper.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Judge the filling, not just the shell',
      resultBody:
        'A pale shell can still be bloom, but unexpected moisture or a deteriorating center creates a separate storage and spoilage concern.',
      recommendedAction:
        'Follow the product’s storage directions. Discard it if the filling looks or smells spoiled, the package is damaged, or its storage history is questionable.',
    },
    {
      slug: 'off-odor',
      label: 'Musty, sour, rancid, or paint-like odor',
      shortDescription: 'The chocolate smells noticeably different from when it was fresh.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'low',
      resultHeadline: 'White spots do not explain an off odor',
      resultBody:
        'Chocolate can lose flavor or become rancid as fats oxidize. A musty smell can also indicate moisture or mold contamination.',
      recommendedAction:
        'Do not eat it. Discard it rather than using appearance alone to call the marks harmless bloom.',
    },
    {
      slug: 'cannot-identify-spots',
      label: 'You cannot tell whether it is bloom or growth',
      shortDescription:
        'The surface has mixed textures, the storage history is unknown, or the marks do not clearly fit either kind of bloom.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'low',
      resultHeadline: 'Do not use taste as the test',
      resultBody:
        'Bloom is safe, but a photo or quick visual check cannot always rule out contamination when the appearance is ambiguous.',
      recommendedAction:
        'Contact the manufacturer with the package and lot information, or discard the chocolate if you cannot confidently identify the change.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Surface crystals have changed',
      description:
        'Cocoa butter may migrate and recrystallize, or moisture may dissolve sugar that later recrystallizes on the surface.',
      severity: 'info',
      chainLabel: 'Crystal change → pale coating',
    },
    {
      stageLabel: 'WHEN YOU EAT IT',
      title: 'The texture may be disappointing',
      description:
        'Bloomed chocolate can lose gloss and snap or feel waxy, soft, crumbly, dusty, or gritty. Flavor may also seem flatter.',
      severity: 'info',
      chainLabel: 'Bloom → quality loss',
    },
    {
      stageLabel: 'IF POOR STORAGE CONTINUES',
      title: 'More of the surface may turn dull',
      description:
        'Continued heat, humidity, condensation, or temperature swings can promote additional bloom and further reduce eating quality.',
      severity: 'caution',
      chainLabel: 'Poor storage → more bloom',
    },
    {
      stageLabel: 'IF THE MARKS ARE ACTUALLY MOLD',
      title: 'This is no longer a bloom problem',
      description:
        'Wiping the surface does not establish that suspicious food is safe. Fuzzy growth, abnormal colors, moisture, or a musty odor calls for discarding it.',
      severity: 'warning',
      chainLabel: 'Mold signs → discard',
    },
    {
      stageLabel: 'IF MOLDY FOOD IS EATEN OR CLOSELY SNIFFED',
      title: 'Mold can cause health effects',
      description:
        'USDA notes that some molds can cause allergic or respiratory reactions, and some can produce harmful mycotoxins under the right conditions.',
      severity: 'danger',
      chainLabel: 'Mold exposure → possible reaction',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Smooth, flat gray-white haze with normal packaging and odor',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Treat it as fat bloom. Eat it if the texture is acceptable, or use it for baking.',
    },
    {
      situation: 'Rough, dry white coating after refrigeration or humidity',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Treat it as sugar bloom if there are no other warning signs. Expect a gritty surface.',
    },
    {
      situation: 'Chocolate melted and hardened again in an intact wrapper',
      ignoreAnswer: 'Yes, for safety',
      severity: 'info',
      whatToDo:
        'Use it if it remained clean and shows no spoilage signs. Its shape, snap, and finish may be poor.',
    },
    {
      situation: 'The best-by date has passed, but only normal bloom is present',
      ignoreAnswer: 'Usually',
      severity: 'caution',
      whatToDo:
        'Check the package, odor, filling, and overall condition. A quality date alone does not identify spoilage.',
    },
    {
      situation: 'Fuzzy growth or unexpected green, blue, black, or pink spots',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Do not taste or closely sniff it. Discard the product and inspect nearby food.',
    },
    {
      situation: 'Musty, sour, rancid, or otherwise abnormal odor',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard it. Bloom does not account for an off odor.',
    },
    {
      situation: 'Unexpectedly wet filling, leaking center, pests, or a contaminated wrapper',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat the packaging or filling problem separately and discard the product if contamination or spoilage is possible.',
    },
    {
      situation: 'You cannot confidently distinguish bloom from mold',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Ask the manufacturer using the lot code and a clear photo, or discard it. Do not taste-test uncertain growth.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Identify the surface pattern',
      body:
        'Flat, smooth, waxy streaks suggest fat bloom. A dry, rough, grainy coating suggests sugar bloom. Do not rub or handle marks that already look fuzzy, raised, or mold-like.',
    },
    {
      title: 'Check for a separate spoilage problem',
      body:
        'Look at the wrapper, seams, filling, and nearby food. Check for unexpected moisture, leaking, pests, colored growth, or an off odor without putting your nose close to the product.',
    },
    {
      title: 'Use bloomed chocolate where appearance matters less',
      body:
        'Safe bloomed chocolate can be eaten normally or used in brownies, cookies, sauces, and other recipes. Sugar-bloomed chocolate may become grainy or seize when melted because moisture caused the bloom.',
    },
    {
      title: 'Store the remaining chocolate dry and wrapped',
      body:
        'Use airtight packaging in a cool, dry place away from strong odors and temperature swings. If refrigeration is necessary, keep the chocolate wrapped while it warms so condensation forms on the package rather than the chocolate.',
    },
    {
      title: 'Use the package information',
      body:
        'Check the best-by date as a quality clue, not as the only safety test. If the appearance is unusual, contact the manufacturer with the product name, lot code, storage history, and a clear photo.',
      destinationProblemSlug: 'food-past-best-by-date',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Fuzzy, hairy, or threadlike growth',
      description:
        'Normal bloom is a crystalline coating rather than raised biological growth. Do not taste or closely sniff suspicious spots.',
      severity: 'warning',
    },
    {
      title: 'Unexpected green, blue, black, or pink areas',
      description:
        'These colors do not match ordinary fat or sugar bloom unless they are clearly part of the product.',
      severity: 'warning',
    },
    {
      title: 'A musty, sour, rancid, or paint-like odor',
      description:
        'An off odor points to spoilage, absorbed odors, or fat oxidation rather than harmless bloom.',
      severity: 'caution',
    },
    {
      title: 'Wetness or a deteriorating filling',
      description:
        'Leaking cream, fruit, or another moist center must be judged by its own storage requirements and condition.',
      severity: 'warning',
    },
    {
      title: 'Torn, dirty, pest-damaged, or contaminated packaging',
      description:
        'Webbing, insects, droppings, water damage, or an open wrapper creates a separate contamination concern.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Are white spots on chocolate always mold?',
      answer:
        'No. They are usually fat bloom or sugar bloom. Flat, smooth streaks suggest fat bloom, while a dry, rough coating suggests sugar bloom. Fuzzy growth, unusual colors, moisture, or a musty odor is not typical bloom.',
    },
    {
      question: 'What does fat bloom feel like?',
      answer:
        'It is generally smooth or waxy and may soften, smear, or disappear when lightly rubbed. Only try this on a flat coating that has no fuzzy growth or other spoilage signs.',
    },
    {
      question: 'What does sugar bloom feel like?',
      answer:
        'It feels dry, rough, dusty, or gritty. It forms when moisture dissolves surface sugar and then evaporates, leaving sugar crystals behind.',
    },
    {
      question: 'Can chocolate bloom make me sick?',
      answer:
        'Fat bloom and sugar bloom themselves are not considered safety hazards. That does not make unrelated mold, contamination, damaged packaging, or spoiled fillings safe.',
    },
    {
      question: 'Can I bake with bloomed chocolate?',
      answer:
        'Yes, if it otherwise looks and smells normal. Bloomed chocolate is often more useful in baked goods or sauces where its dull appearance and changed snap do not matter.',
    },
    {
      question: 'Can I melt the white coating away?',
      answer:
        'Melting can reincorporate fat bloom. Sugar-bloomed chocolate can be harder to melt smoothly because the moisture that caused it may make the chocolate seize or remain grainy.',
    },
    {
      question: 'Why did chocolate turn white after being refrigerated?',
      answer:
        'Condensation can form when cold chocolate meets warmer air. That moisture dissolves surface sugar and can leave sugar bloom when it evaporates.',
    },
    {
      question: 'Is bloomed chocolate safe after its best-by date?',
      answer:
        'Often, if the package is intact and there are no spoilage signs. Best-by dates generally describe peak quality, while odor, filling condition, packaging, and visible growth provide additional information.',
    },
    {
      question: 'Can filled chocolates be judged the same way as a plain bar?',
      answer:
        'Not completely. Fat from a filling can cause harmless shell bloom, but cream, fruit, and other moist centers may have different storage needs. Unexpected leaking, wetness, or an off odor changes the answer.',
    },
    {
      question: 'Can I wipe mold off chocolate and eat the rest?',
      answer:
        'No. If the marks appear moldy or cannot be distinguished from mold, discard the product rather than wiping, cutting, or taste-testing it.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Molds on Food: Are They Dangerous?',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/molds-food-are-they-dangerous',
      sourceType: 'government',
      notes:
        'Explains visible mold, possible allergic and respiratory effects, mycotoxins, why mold may extend beyond what is visible, and why moldy food should not be closely sniffed.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'How to Cut Food Waste and Maintain Food Safety',
      url: 'https://www.fda.gov/food/consumers/how-cut-food-waste-and-maintain-food-safety',
      sourceType: 'government',
      notes:
        'Describes “Best if Used By” as a quality label, advises checking foods for noticeable spoilage changes, and suggests contacting the producer about packaged-food concerns.',
    },
    {
      publisher: 'Iowa State University Extension and Outreach',
      title: 'Chocolate – Shelf Life, Storage, and Bloom',
      url: 'https://blogs.extension.iastate.edu/answerline/2023/11/07/chocolate-shelf-life-storage-and-bloom/',
      sourceType: 'academic',
      notes:
        'Describes bloom as safe, identifies smooth fat bloom and rough sugar bloom, explains their causes, and discusses airtight, cool, dry storage and baking uses.',
    },
    {
      publisher: 'The Hershey Company',
      title: 'Frequently Asked Questions (FAQs)',
      url: 'https://www.thehersheycompany.com/content/hershey-corporate/en-us/home/faqs.html',
      sourceType: 'manufacturer',
      notes:
        'Explains cocoa butter bloom and sugar bloom, states bloomed chocolate is safe to use, and notes possible flavor loss and texture changes.',
    },
    {
      publisher: 'Guittard Chocolate Company',
      title: 'Problem Solving: Chocolate Bloom',
      url: 'https://guittard.com/blog/problem-solving',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes fat bloom that melts to the touch from grainy sugar bloom and connects bloom with heat, temperature changes, humidity, condensation, tempering, and filling fats.',
    },
    {
      publisher: 'Ghirardelli Chocolate Company',
      title: 'Product FAQs',
      url: 'https://www.ghirardelli.com/product-faqs',
      sourceType: 'manufacturer',
      notes:
        'Describes fat and sugar bloom as visual and textural defects, states bloomed chocolate remains fine to eat, and explains the typical dry or soft texture changes.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Bright light and a clean plate',
      description:
        'A well-lit, contrasting surface makes it easier to tell a flat crystalline haze from raised or fuzzy growth.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Airtight food-storage container',
      description: 'Protects chocolate from humidity, condensation, odors, pests, and abrupt storage changes.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer consumer-care service',
      description:
        'The maker may identify a known quality issue from the product name, lot code, storage history, and clear photos.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'USDA mold-on-food guidance',
      description: 'Useful when the marks appear fuzzy, colored, or otherwise unlike normal chocolate bloom.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'food-past-best-by-date',
      anchorText: 'Can I eat food after the best-by date?',
      relationshipType: 'sibling',
    },
    { slug: 'mold-on-bread', anchorText: 'Can I ignore mold on another food?', relationshipType: 'related' },
    {
      slug: 'dog-ate-chocolate',
      anchorText: 'What if my dog ate the chocolate?',
      relationshipType: 'follow_up',
    },
  ],
};
