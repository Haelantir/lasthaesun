import type { ProblemSeed } from '../types';

export const eggsPastSellByDate: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'food-safety',
  slug: 'eggs-past-sell-by-date',
  canonicalPath: '/food-kitchen/refrigeration/food-safety/eggs-past-sell-by-date/',
  name: 'Eggs Past the Sell-By Date',
  eyebrow: 'Food & Kitchen · Refrigeration · Food Safety',

  h1: 'Can I Ignore Eggs Past the Sell-By Date?',
  seoTitle: 'Eggs Past the Sell-By Date: When They’re Still Safe to Eat',
  metaDescription:
    'Refrigerated eggs can remain usable after the sell-by date. Check storage time, temperature, shell damage, odors, appearance, and cooking method.',

  aliases:
    ['/food-kitchen/refrigeration/food-safety/expired-eggs/', '/food-kitchen/refrigeration/food-safety/eggs-after-sell-by-date/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat them?',
  canIUseItLabel: 'Usually, if they stayed cold and are within the storage window',

  shortAnswer:
    'Usually yes. A sell-by date is mainly about egg quality and store inventory, not a safety switch. Eggs bought before that date and kept at 40°F or below can generally be used within USDA’s three-to-five-week refrigerated storage window.',

  whyItMattersHeading: 'The Date Tracks Quality, but Storage Controls Safety',
  whyItMatters: [
    'USDA says sell-by and use-by dates on egg cartons indicate the period of optimum quality. As eggs age, the white can become thinner and the yolk flatter, but those changes do not automatically make the egg unsafe. The sell-by date commonly passes while properly refrigerated eggs are still within USDA’s storage guidance.',
    'The date cannot make up for poor handling. Clean, uncracked eggs may contain Salmonella, and bacteria can enter through a damaged shell or multiply when eggs become warm. Storage time, refrigerator temperature, shell condition, recalls, and how the eggs will be cooked matter more than the printed date alone.',
  ].join('\n\n'),

  redFlagsHeading: 'Discard or Change Plans If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Sell-by dating, refrigeration, storage limits, shell damage, spoilage signs, float testing, cooking, recalls, and higher-risk groups checked against USDA and FDA guidance.',
  disclaimer:
    'General guidance for commercially sold refrigerated chicken shell eggs in the United States. Liquid egg products, eggs handled under a different refrigeration system, and products outside the U.S. may have different instructions.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'date-passed-properly-refrigerated',
      label: 'The sell-by date passed, but the eggs were refrigerated promptly',
      shortDescription:
        'You bought them before the date, kept them in their carton at 40°F or below, and know when they entered your refrigerator.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The date alone is not a reason to discard them',
      resultBody:
        'USDA says refrigerated shell eggs may be kept for three to five weeks from the day they are placed in the refrigerator, and the sell-by date will usually expire during that period.',
      recommendedAction:
        'Use them if they are still within that storage window, the shells are intact, and the carton is not subject to a recall. Cook them thoroughly unless they are pasteurized.',
    },
    {
      slug: 'watery-white-or-flat-yolk',
      label: 'The white is watery or the yolk looks flatter',
      shortDescription:
        'The egg looks older after cracking, but there is no off odor, unusual color, or known storage problem.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'That is usually an age-related quality change',
      resultBody:
        'USDA describes thinner whites and flatter yolks as signs of declining egg quality. They may spread more in the pan or perform differently in baking, but this appearance alone does not establish that the egg is unsafe.',
      recommendedAction:
        'Use it promptly in a fully cooked dish if its storage history is acceptable. Discard it if you notice an off odor, pink or iridescent white, or another unusual change.',
    },
    {
      slug: 'egg-floats-in-water',
      label: 'The egg floats in water',
      shortDescription:
        'A float test shows the egg is buoyant, but it has otherwise remained properly refrigerated.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Floating means older, not automatically unsafe',
      resultBody:
        'USDA says an egg floats when its enlarged air cell makes it buoyant. That indicates poorer quality, but the egg may still be safe if it remains within the refrigerated storage guidance and has no spoilage signs.',
      recommendedAction:
        'Crack it into a separate clean bowl. Discard it for an off odor or unusual appearance, but do not use floating as the only safety test.',
    },
    {
      slug: 'beyond-refrigerated-storage-window',
      label: 'The eggs have been refrigerated longer than USDA guidance',
      shortDescription:
        'You know they have remained in the refrigerator beyond the recommended storage range for raw shell eggs.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not stretch the date indefinitely',
      resultBody:
        'Passing the sell-by date did not make the eggs unsafe that day, but USDA’s refrigerated storage guidance for raw shell eggs ends after three to five weeks. A normal smell or successful float test does not extend that guidance.',
      recommendedAction:
        'Discard the eggs rather than trying to prove they are safe through appearance, smell, or floating.',
    },
    {
      slug: 'age-or-temperature-history-unknown',
      label: 'You do not know how old they are or whether they stayed cold',
      shortDescription:
        'The carton was moved, the purchase date is unknown, or there is no reliable refrigerator-temperature history.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The printed date cannot fill in the missing history',
      resultBody:
        'The sell-by date describes quality and inventory timing; it does not prove that eggs remained refrigerated or that they are still within the recommended home-storage period.',
      recommendedAction:
        'Discard them when you cannot establish an acceptable age and cold-storage history. Do not rely on smell alone, because Salmonella contamination may not create obvious spoilage signs.',
    },
    {
      slug: 'cracked-or-leaking-shell',
      label: 'An egg is cracked or leaking before cooking',
      shortDescription:
        'A shell is split, seeping, or stuck to the carton, and you do not know when the damage occurred.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A damaged shell changes the safety decision',
      resultBody:
        'USDA says bacteria can enter eggs through cracks and advises against purchasing cracked eggs. A sell-by date cannot show how long an unnoticed crack has been present.',
      recommendedAction:
        'Discard the damaged egg without using it. Clean any leaked egg from the carton area, refrigerator surface, hands, and utensils with hot, soapy water.',
    },
    {
      slug: 'refrigerated-eggs-left-out',
      label: 'Refrigerated eggs were left at room temperature too long',
      shortDescription:
        'The carton sat on a counter, in a vehicle, or elsewhere without reliable refrigeration.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Warm exposure matters more than the carton date',
      resultBody:
        'USDA says refrigerated eggs should not remain out of refrigeration for more than two hours. A cold egg can sweat as it warms, and Salmonella can multiply at room temperature.',
      recommendedAction:
        'Discard eggs that exceeded the limit. Do not put them back in the refrigerator and treat the sell-by date as proof that they are safe.',
    },
    {
      slug: 'off-odor-or-unusual-color',
      label: 'The opened egg smells bad or has pink or iridescent white',
      shortDescription:
        'The egg has an unpleasant odor, unexpected discoloration, or another clearly abnormal appearance after cracking.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'These are discard signs',
      resultBody:
        'USDA says a spoiled egg develops an unpleasant odor when opened and identifies pink or iridescent egg white as spoilage associated with bacteria, some of which can be harmful.',
      recommendedAction:
        'Discard the egg without tasting it. Wash the bowl, utensils, work surface, and your hands before cracking another egg.',
    },
    {
      slug: 'raw-or-undercooked-recipe',
      label: 'You plan to serve the eggs raw or undercooked',
      shortDescription:
        'The eggs are intended for runny yolks, homemade dressing, uncooked batter, eggnog, ice cream, or another dish that will not be thoroughly cooked.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Use pasteurized eggs or change the recipe',
      resultBody:
        'FDA says clean, uncracked shell eggs may contain Salmonella. For food served raw or undercooked, it recommends eggs treated to destroy Salmonella or pasteurized egg products.',
      recommendedAction:
        'Use pasteurized eggs or cook the dish thoroughly. Take particular care when serving children, older adults, pregnant people, or anyone with a weakened immune system.',
    },
    {
      slug: 'carton-matches-recall',
      label: 'The brand, plant, or lot matches a recall',
      shortDescription: 'An FDA or producer notice identifies the carton or eggs you have.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Recall instructions override the date',
      resultBody:
        'A recalled product may pose an illness or injury risk even when the eggs look normal, stayed refrigerated, and have not reached the sell-by date.',
      recommendedAction:
        'Do not eat the eggs. Follow the recall notice for returning or discarding them, and clean any surfaces specified in the notice.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The printed date passes',
      description:
        'The eggs do not suddenly change at midnight. The date marks expected quality and helps retailers rotate stock.',
      severity: 'info',
      chainLabel: 'Date passes',
    },
    {
      stageLabel: 'AS THE EGGS AGE',
      title: 'Whites thin and yolks flatten',
      description:
        'Moisture and structural changes can make older eggs spread more and perform differently in recipes.',
      severity: 'info',
      chainLabel: 'Quality declines',
    },
    {
      stageLabel: 'IF STORAGE CONTINUES',
      title: 'Official storage guidance eventually runs out',
      description:
        'Once the eggs are beyond the recommended refrigerated range, the carton date, smell, and float test cannot establish that they should be kept.',
      severity: 'caution',
      chainLabel: 'Storage limit reached',
    },
    {
      stageLabel: 'IF THE COLD CHAIN OR SHELL FAILS',
      title: 'Bacterial risk becomes the main issue',
      description:
        'Warm temperatures can support bacterial growth, while cracks provide a route through the shell.',
      severity: 'warning',
      chainLabel: 'Handling failure',
    },
    {
      stageLabel: 'IF A CONTAMINATED EGG IS EATEN',
      title: 'Foodborne illness can occur',
      description:
        'Salmonella can cause diarrhea, fever, abdominal cramps, and vomiting. Illness can be more severe in young children, older adults, pregnant people, and people with weakened immune systems.',
      severity: 'danger',
      chainLabel: 'Foodborne illness',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Past the sell-by date but within three to five weeks of refrigeration',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Keep the eggs at 40°F or below, confirm that the shells are intact, and cook them appropriately.',
    },
    {
      situation: 'Watery white or flatter yolk with acceptable storage history',
      ignoreAnswer: 'Yes, for safety',
      severity: 'info',
      whatToDo:
        'Use the egg promptly in a dish where appearance matters less, and discard it if there is an off odor or unusual color.',
    },
    {
      situation: 'The egg floats but stayed properly refrigerated',
      ignoreAnswer: 'Usually',
      severity: 'caution',
      whatToDo:
        'Treat floating as an age indicator. Crack the egg separately and check it, while still following the refrigerated storage window.',
    },
    {
      situation: 'Beyond USDA’s refrigerated storage guidance',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the eggs rather than relying on a float test or normal smell.',
    },
    {
      situation: 'Age or refrigeration history is unknown',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Discard them when you cannot establish that they stayed cold and remained within the recommended storage period.',
    },
    {
      situation: 'A shell is cracked or leaking before cooking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard that egg and clean any surfaces touched by the leak.',
    },
    {
      situation: 'Refrigerated eggs remained at room temperature too long',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Discard them after more than two hours without refrigeration, or sooner under hotter conditions specified by official guidance.',
    },
    {
      situation: 'The eggs will be served raw or undercooked',
      ignoreAnswer: 'Only with pasteurized eggs',
      severity: 'warning',
      whatToDo:
        'Use eggs treated to destroy Salmonella or pasteurized egg products, or change to a thoroughly cooked recipe.',
    },
    {
      situation: 'The carton matches a recall notice',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not eat the eggs. Follow the return, disposal, and cleaning instructions in the recall notice.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check when the eggs entered your refrigerator',
      body:
        'Count refrigerated storage from when you brought the eggs home, not only from the sell-by date. USDA’s guidance for raw shell eggs is three to five weeks under proper refrigeration.',
    },
    {
      title: 'Verify that the refrigerator is cold enough',
      body:
        'Keep eggs in their original carton in the coldest part of a refrigerator at 40°F or below, rather than in the door. Use a refrigerator thermometer if the setting does not show the actual temperature.',
      destinationProblemSlug: 'fridge-not-cold-enough',
    },
    {
      title: 'Inspect the shells before use',
      body:
        'Remove any cracked or leaking egg. Do not wash store-bought eggs at home, because extra handling and washing can increase contamination risk.',
    },
    {
      title: 'Crack questionable eggs separately',
      body:
        'Open each older egg into a clean bowl before adding it to other ingredients. An off odor or pink or iridescent white means discard, but a normal appearance cannot prove the absence of Salmonella.',
    },
    {
      title: 'Change course after unsafe warm exposure',
      body:
        'If refrigerated eggs sat out beyond the safe limit, discard them. Returning them to the refrigerator does not reverse bacterial growth that may have occurred.',
      destinationProblemSlug: 'leftovers-left-out',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The shell is cracked or leaking',
      description:
        'Bacteria can enter through cracks, and an old crack may not show how long the egg has been exposed.',
      severity: 'warning',
    },
    {
      title: 'The eggs were left unrefrigerated too long',
      description:
        'Refrigerated eggs should be discarded after unsafe room-temperature exposure, regardless of the sell-by date.',
      severity: 'danger',
    },
    {
      title: 'The age or cold-storage history is unknown',
      description:
        'A carton date cannot establish whether the eggs stayed at a safe temperature or remained within the recommended storage period.',
      severity: 'warning',
    },
    {
      title: 'There is an unpleasant odor after cracking',
      description: 'USDA identifies an unpleasant odor in a raw or cooked egg as a spoilage sign.',
      severity: 'warning',
    },
    {
      title: 'The egg white is pink or iridescent',
      description:
        'USDA associates these colors with bacterial spoilage and says some of the organisms involved can be harmful.',
      severity: 'danger',
    },
    {
      title: 'The carton matches a recall',
      description: 'Follow the recall instructions even when the eggs look and smell normal.',
      severity: 'danger',
    },
    {
      title: 'Ordinary shell eggs will be served raw to someone at higher risk',
      description:
        'Use pasteurized eggs or cook the food thoroughly, especially for children, older adults, pregnant people, and people with weakened immune systems.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'How long are eggs good after the sell-by date?',
      answer:
        'Do not count from the sell-by date alone. USDA says eggs may be refrigerated for three to five weeks from the day they are placed in the refrigerator, and the sell-by date commonly expires during that period.',
    },
    {
      question: 'Is the sell-by date an expiration date?',
      answer:
        'Not in the sense that the eggs automatically become unsafe on that day. USDA describes sell-by and use-by dates on egg cartons as indicators of optimum quality and tools for retail stock rotation.',
    },
    {
      question: 'Are sell-by dates required on every egg carton?',
      answer:
        'No. USDA says expiration code dating is not required on every egg container, although state requirements and labeling practices can differ.',
    },
    {
      question: 'Does a floating egg have to be thrown away?',
      answer:
        'No. USDA says floating means the air cell has enlarged and the egg is older or lower in quality. It may still be safe, but the float test cannot replace storage-time and temperature checks.',
    },
    {
      question: 'Can I use an egg with a watery white?',
      answer:
        'Usually, if it stayed properly refrigerated and remains within the storage guidance. A watery white and flatter yolk are common quality changes as an egg ages.',
    },
    {
      question: 'Can smell tell me whether an egg is safe?',
      answer:
        'Smell can reveal spoilage: a bad odor means discard. A normal smell does not prove safety because Salmonella may be present without an obvious odor or appearance change.',
    },
    {
      question: 'Should I wash older eggs before using them?',
      answer:
        'No. USDA advises consumers not to wash commercially processed eggs at home because washing can increase contamination risk, particularly if a shell becomes cracked.',
    },
    {
      question: 'Are older eggs better for hard-boiling?',
      answer:
        'They can be. USDA notes that lower-quality older eggs can work well for hard-cooking and may peel more easily. They still need acceptable refrigeration and intact shells.',
    },
    {
      question: 'Is a blood spot a sign that an egg has spoiled?',
      answer:
        'No. USDA says a blood spot results from a small blood-vessel rupture during ovulation and does not make the egg unsafe.',
    },
    {
      question: 'Can I freeze eggs before they get too old?',
      answer:
        'Do not freeze raw eggs in their shells. FDA recommends beating whole eggs together before freezing, or freezing egg whites separately.',
    },
    {
      question: 'What if I bought the carton after its sell-by date?',
      answer:
        'USDA advises buying eggs before the sell-by or expiration date. If a store sold you an out-of-date carton, return or exchange it rather than assuming the store’s refrigeration history was adequate.',
    },
    {
      question: 'Does cooking make eggs safe after improper storage?',
      answer:
        'Do not use cooking to rescue eggs that were left warm too long, stored beyond official guidance, recalled, cracked, or spoiled. Cooking guidance applies to eggs that were otherwise handled safely.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'How long can you store eggs in the refrigerator?',
      url: 'https://ask.fsis.usda.gov/article/How-long-can-you-store-eggs-in-the-refrigerator',
      sourceType: 'government',
      notes:
        'USDA says eggs may be refrigerated 3 to 5 weeks from the day they enter the refrigerator and that the sell-by date will usually expire during that period. It advises storage at 40°F or below in the carton, away from the door.',
    },
    {
      publisher: 'U.S. Department of Agriculture Agricultural Marketing Service',
      title: 'Questions and Answers – USDA Shell Egg Grading Service',
      url: 'https://www.ams.usda.gov/publications/qa-shell-eggs',
      sourceType: 'government',
      notes:
        'USDA explains that sell-by and use-by dates indicate optimum egg quality and assist retail inventory control. It describes thinner whites and flatter yolks as age-related quality changes.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'What You Need to Know About Egg Safety',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety',
      sourceType: 'government',
      notes:
        'FDA covers Salmonella risk, refrigeration at 40°F or below, intact shells, thorough cooking, pasteurized eggs for raw recipes, and groups at greater risk of severe illness.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Shell Eggs from Farm to Table',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/eggs/shell-eggs-farm-table',
      sourceType: 'government',
      notes:
        'USDA addresses sell-by dating, refrigeration, room-temperature exposure, cracks, float testing, odors, unusual egg-white colors, washing, cooking, and storage periods for shell eggs and egg dishes.',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Cold Food Storage Chart',
      url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts',
      sourceType: 'government',
      notes:
        'The federal cold-storage chart lists raw shell eggs at 3 to 5 weeks in a refrigerator at 40°F or below and provides separate guidance for hard-cooked eggs and egg products.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Food Recalls: What You Need to Know',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/food-recalls-what-you-need-know',
      sourceType: 'government',
      notes:
        'FDA explains why consumers should act on food recalls and identifies official recall notices and enforcement reports as sources for current product information.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Refrigerator thermometer',
      description:
        'Shows whether the refrigerator actually remains at 40°F or below instead of relying on the appliance’s control setting.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Food thermometer',
      description: 'Helps confirm that casseroles and other egg dishes reach a safe internal temperature.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'USDA cold-storage chart',
      description:
        'Provides refrigerated and frozen storage guidance for raw shell eggs, hard-cooked eggs, egg products, and cooked dishes.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'FDA food recall lookup',
      description:
        'Lets you check current notices by product, brand, lot, plant information, and recall reason.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'leftovers-left-out',
      anchorText: 'Can I eat food that was left out overnight?',
      relationshipType: 'escalation',
    },
    {
      slug: 'refrigerator-door-left-open-overnight',
      anchorText: 'Are eggs safe after the refrigerator door was left open?',
      relationshipType: 'related',
    },
    {
      slug: 'fridge-not-cold-enough',
      anchorText: 'What if my refrigerator is not cold enough for eggs?',
      relationshipType: 'cause',
    },
  ],
};
