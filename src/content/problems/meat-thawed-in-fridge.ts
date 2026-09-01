import type { ProblemSeed } from '../types';

export const meatThawedInFridge: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'frozen-food',
  slug: 'meat-thawed-in-fridge',
  canonicalPath: '/food-kitchen/food-storage/frozen-food/meat-thawed-in-fridge/',
  name: 'Meat Thawed in the Fridge',
  eyebrow: 'Food & Kitchen · Food Storage · Frozen Food',

  h1: 'Can I Ignore Meat That Has Thawed in the Fridge?',
  seoTitle: 'Can You Refreeze Meat After Thawing It in the Refrigerator?',
  metaDescription:
    'Meat thawed in a refrigerator at 40°F or below can usually be refrozen raw. Learn the storage windows and when other thawing methods change the answer.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I refreeze it?',
  canIUseItLabel: 'Yes, if it thawed safely in the fridge',

  shortAnswer:
    'Yes—if the meat thawed in a refrigerator that stayed at 40°F or below, USDA says you can refreeze it without cooking. Cook or refreeze it within the refrigerated storage window for that type of meat, and expect some possible loss of moisture and texture.',

  whyItMattersHeading: 'Thawing Method and Temperature Decide the Answer',
  whyItMatters: [
    'Thawing does not make meat unsafe by itself. What matters is where it thawed, how cold it stayed, and how long it has been fully thawed. Refrigerator thawing keeps food at a safe, constant cold temperature, so raw meat can go back into the freezer.',
    'Refreezing does not reset its refrigerated storage history. Ground meat and poultry have a shorter window after thawing than steaks, chops, and roasts. If the meat was thawed in cold water or the microwave, cook it immediately before freezing it again. If it warmed beyond safe cold-storage limits, discard it.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Refreeze It Raw If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Refrigerator thawing, refreezing, storage windows, spoilage signs, cross-contamination, and cooking temperatures checked against USDA FSIS and FoodSafety.gov guidance.',
  disclaimer:
    'General home food-safety guidance. If the meat’s time or temperature history cannot be established, discard it rather than relying on smell or appearance.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'ground-meat-or-poultry-within-window',
      label: 'Ground meat or poultry thawed in the fridge',
      shortDescription:
        'It stayed at 40°F or below and has been fully thawed no longer than the short USDA storage window.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Safe briefly, not indefinitely',
      resultBody:
        'USDA says ground meats and poultry thawed in the refrigerator should be used or refrozen within one or two days.',
      recommendedAction:
        'Cook or refreeze it within that window. Keep the package contained so raw juices cannot drip onto other food.',
    },
    {
      slug: 'steak-chop-or-roast-within-window',
      label: 'A steak, chop, or roast thawed in the fridge',
      shortDescription: 'A beef, pork, lamb, or veal cut stayed at 40°F or below.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'You have a longer refrigerator window',
      resultBody:
        'USDA allows three to five days after refrigerator thawing for beef, pork, lamb, or veal steaks, chops, and roasts.',
      recommendedAction:
        'Cook or refreeze the meat before that window ends. If you do not know when it finished thawing, use the shorter reasonable estimate.',
    },
    {
      slug: 'refreezing-immediately-after-fridge-thaw',
      label: 'The meat just thawed and you want to refreeze it',
      shortDescription:
        'It thawed entirely in a refrigerator at 40°F or below and remained within its storage window.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Raw refreezing is safe',
      resultBody:
        'USDA specifically says meat and poultry thawed in the refrigerator can be refrozen without cooking. The main downside is possible moisture and texture loss.',
      recommendedAction:
        'Repackage it tightly if needed, label it, and return it to a freezer holding 0°F or below.',
    },
    {
      slug: 'cooked-meat-thawed-in-fridge',
      label: 'Previously cooked meat thawed in the fridge',
      shortDescription: 'Frozen cooked meat or leftovers thawed under refrigeration.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'It can be used or refrozen',
      resultBody:
        'Cooked leftovers thawed in the refrigerator can generally be used within three or four days or refrozen during that period.',
      recommendedAction: 'Refreeze the unused portion promptly, or reheat it safely before serving.',
    },
    {
      slug: 'thawed-in-cold-water',
      label: 'The meat was thawed in cold water',
      shortDescription:
        'A leakproof package was submerged in cold water rather than thawed in the refrigerator.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Cook it before refreezing',
      resultBody:
        'USDA says food thawed by the cold-water method should be cooked immediately. Do not put the raw thawed meat back into the freezer.',
      recommendedAction:
        'Cook it now to the safe internal temperature, then refrigerate or freeze the cooked meat promptly.',
    },
    {
      slug: 'thawed-in-microwave',
      label: 'The meat was thawed in the microwave',
      shortDescription: 'Microwave defrosting may have warmed or partly cooked areas of the meat.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Cook it immediately',
      resultBody:
        'Microwave thawing can warm parts of the meat enough for bacterial growth to begin. USDA directs consumers to cook it immediately before refreezing.',
      recommendedAction:
        'Cook the meat now and freeze it only after cooking. Do not leave it raw in the refrigerator for later.',
    },
    {
      slug: 'past-refrigerator-storage-window',
      label: 'The fully thawed meat is past its refrigerator window',
      shortDescription:
        'Ground meat or poultry has exceeded the short window, or a steak, chop, or roast has exceeded the longer window.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Freezing it now does not rescue it',
      resultBody:
        'USDA storage limits still apply after thawing. Refreezing cannot reset time the meat has already spent fully thawed in the refrigerator.',
      recommendedAction:
        'Discard meat that has passed the applicable storage window rather than cooking or refreezing it.',
    },
    {
      slug: 'warmed-above-safe-temperature',
      label: 'The meat was above 40°F for too long',
      shortDescription:
        'A warm refrigerator, power loss, counter thawing, or another problem kept the meat above safe cold-storage temperature.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Discard it',
      resultBody:
        'USDA advises discarding perishable food that has been above 40°F for more than two hours. Smell, color, and cooking cannot reverse that temperature history.',
      recommendedAction:
        'Throw the meat away without tasting it. Check the refrigerator or freezer before storing more perishable food.',
    },
    {
      slug: 'temperature-history-unknown',
      label: 'You cannot establish how cold the meat stayed',
      shortDescription:
        'The refrigerator failed, lost power, or was left open, and there is no reliable temperature or time record.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not refreeze it based on a guess',
      resultBody:
        'Appearance, smell, and touch cannot confirm that thawed meat stayed within safe limits. An uncertain cold-storage history is not the same as a verified refrigerator thaw.',
      recommendedAction:
        'Discard the meat if you cannot establish that it stayed at 40°F or below or remained within the applicable safety limits.',
    },
    {
      slug: 'off-odor-sticky-or-slimy',
      label: 'The thawed meat smells bad or feels sticky or slimy',
      shortDescription: 'The meat has spoilage signs rather than an ordinary color change.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not use it',
      resultBody:
        'USDA identifies an off odor, sticky or tacky texture, and sliminess as spoilage signs. Refreezing does not correct spoilage.',
      recommendedAction:
        'Discard the meat. Clean any container or refrigerator surface contacted by leaking raw juices.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Refrigerator thawing keeps the meat cold',
      description:
        'When the refrigerator remains at 40°F or below, the meat thaws without entering the warmer range where bacteria grow rapidly.',
      severity: 'info',
      chainLabel: 'Safe cold thaw',
    },
    {
      stageLabel: 'ONCE FULLY THAWED',
      title: 'The refrigerated storage window applies',
      description:
        'Ground meat and poultry have a shorter window than intact steaks, chops, and roasts. The meat must be cooked or refrozen before its window ends.',
      severity: 'caution',
      chainLabel: 'Storage clock',
    },
    {
      stageLabel: 'IF YOU REFREEZE IT',
      title: 'Quality may decline',
      description:
        'Moisture lost during thawing can leave the meat drier or change its texture after another freeze-and-thaw cycle.',
      severity: 'info',
      chainLabel: 'Quality loss',
    },
    {
      stageLabel: 'IF RAW JUICES LEAK',
      title: 'Other food can be contaminated',
      description:
        'Drips from thawing meat can spread bacteria to shelves, containers, produce, and ready-to-eat food.',
      severity: 'warning',
      chainLabel: 'Cross-contamination',
    },
    {
      stageLabel: 'IF IT GETS TOO WARM OR SITS TOO LONG',
      title: 'Foodborne illness becomes the concern',
      description:
        'Pathogenic bacteria may grow without changing the meat’s smell or appearance. Refreezing or cooking does not make an unsafe time-and-temperature history acceptable.',
      severity: 'danger',
      chainLabel: 'Unsafe handling',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Ground meat or poultry thawed in a refrigerator at 40°F or below',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Use or refreeze it within one or two days after it has thawed.',
    },
    {
      situation: 'Beef, pork, lamb, or veal steak, chop, or roast thawed in the fridge',
      ignoreAnswer: 'Yes, within the USDA window',
      severity: 'info',
      whatToDo: 'Use or refreeze it within three to five days after thawing.',
    },
    {
      situation: 'Meat is still partly frozen or contains ice crystals',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Refreeze it or continue thawing it safely, provided it is still at 40°F or below.',
    },
    {
      situation: 'Cooked meat or leftovers thawed in the refrigerator',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Use or refreeze them within three or four days.',
    },
    {
      situation: 'Raw meat thawed in cold water or the microwave',
      ignoreAnswer: 'No, not while raw',
      severity: 'warning',
      whatToDo: 'Cook it immediately, then freeze the cooked meat if desired.',
    },
    {
      situation: 'Meat stayed above 40°F for more than two hours',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Discard it without tasting it.',
    },
    {
      situation: 'The temperature or thawing method cannot be established',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not rely on smell or appearance. Discard it if you cannot verify a safe cold-storage history.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check how the meat thawed',
      body:
        'Confirm that it thawed entirely in a refrigerator holding 40°F or below. If the refrigerator ran warm or lost power, use measured temperature and reliable time history rather than touch alone.',
      destinationProblemSlug: 'fridge-not-cold-enough',
      destinationLabel: 'If the refrigerator is running warm',
    },
    {
      title: 'Identify the correct storage window',
      body:
        'Count from when the meat became fully thawed. Use the shorter window for ground meat and poultry and the longer window for intact beef, pork, lamb, or veal cuts.',
    },
    {
      title: 'Repackage it for the freezer',
      body:
        'Use freezer-safe airtight wrap or a freezer bag, remove excess air, and label the package. Better packaging limits moisture loss and freezer burn.',
      destinationProblemSlug: 'freezer-burn',
      destinationLabel: 'If the meat develops freezer burn',
    },
    {
      title: 'Contain and clean raw-meat drips',
      body:
        'Keep thawing meat in a sealed container on the lowest practical refrigerator shelf. Wash hands and clean any surface touched by raw juices before preparing other food.',
    },
    {
      title: 'Use a food thermometer if you cook it',
      body:
        'Cook steaks, chops, and roasts to at least 145°F with a three-minute rest, ground meat to 160°F, and poultry or reheated leftovers to 165°F.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'It was above 40°F for more than two hours',
      description: 'USDA discard guidance applies even when the meat still looks and smells normal.',
      severity: 'danger',
    },
    {
      title: 'Its cold-storage history is unknown',
      description:
        'A refrigerator or power failure without a thermometer or reliable time record makes safety impossible to confirm by sight or touch.',
      severity: 'warning',
    },
    {
      title: 'It was thawed on the counter',
      description:
        'Counter thawing can let the outside warm while the center remains frozen. Apply USDA time-and-temperature discard guidance.',
      severity: 'warning',
    },
    {
      title: 'It was thawed in cold water or the microwave',
      description: 'Cook it immediately before freezing it again.',
      severity: 'warning',
    },
    {
      title: 'It has exceeded its refrigerator storage window',
      description: 'Refreezing does not restart or erase the refrigerated storage period.',
      severity: 'warning',
    },
    {
      title: 'It has an off odor or feels sticky, tacky, or slimy',
      description: 'USDA identifies these as spoilage signs and says the meat should not be used.',
      severity: 'warning',
    },
    {
      title: 'Raw juices reached ready-to-eat food',
      description:
        'Discard contaminated food that will not be cooked and clean the affected refrigerator surfaces.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I refreeze raw meat that thawed in the refrigerator?',
      answer:
        'Yes. USDA says raw meat and poultry thawed in a refrigerator can be safely refrozen without cooking, provided they stayed cold and remain within their refrigerated storage window.',
    },
    {
      question: 'How long can thawed meat stay in the refrigerator?',
      answer:
        'Use or refreeze ground meat and poultry within one or two days. Beef, pork, lamb, or veal steaks, chops, and roasts have three to five days after refrigerator thawing.',
    },
    {
      question: 'Does the meat have to be completely thawed before I refreeze it?',
      answer: 'No. Food that still contains ice crystals or remains at 40°F or below can be safely refrozen.',
    },
    {
      question: 'Can I refreeze meat thawed in cold water?',
      answer:
        'Not while it is still raw. USDA says to cook meat immediately after cold-water thawing; you can then freeze the cooked meat.',
    },
    {
      question: 'Can I refreeze meat thawed in the microwave?',
      answer:
        'Cook it immediately first. Microwave thawing can warm or partly cook some areas, so raw storage or raw refreezing is not recommended.',
    },
    {
      question: 'Will refrozen meat taste the same?',
      answer:
        'Maybe not. Moisture lost during thawing can make the meat drier or change its texture, but that quality loss does not make safely handled meat unsafe.',
    },
    {
      question: 'Does freezing kill bacteria in raw meat?',
      answer:
        'No. Freezing stops the growth of most bacteria but does not destroy them. Safe thawing, separation, and cooking are still necessary.',
    },
    {
      question: 'Is brown or gray meat automatically spoiled?',
      answer:
        'No. USDA says color change alone does not prove spoilage. An off odor, sticky or tacky surface, or sliminess means the meat should not be used.',
    },
    {
      question: 'Can smell tell me whether thawed meat is safe?',
      answer:
        'A bad smell is a reason to discard it, but a normal smell cannot prove safety. Harmful bacteria may not change the meat’s smell, taste, or appearance.',
    },
    {
      question: 'Can I refreeze meat sold as previously frozen?',
      answer:
        'Yes, if it was handled properly, kept cold, and thawed in the refrigerator. Check the package for any product-specific handling instructions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Freezing and Food Safety',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety',
      sourceType: 'government',
      notes:
        'States that refrigerator-thawed food can be refrozen without cooking, while cold-water or microwave-thawed food requires different handling. Covers ice crystals, 40°F, quality loss, and unsafe warming.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'The Big Thaw — Safe Defrosting Methods',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/big-thaw-safe-defrosting-methods',
      sourceType: 'government',
      notes:
        'Describes refrigerator, cold-water, and microwave thawing and gives post-thaw refrigerator windows for ground meat, poultry, seafood, steaks, chops, and roasts.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'How long can meat and poultry remain in the refrigerator, once thawed?',
      url: 'https://ask.fsis.usda.gov/article/How-long-can-meat-and-poultry-remain-in-the-refrigerator-once-thawed',
      sourceType: 'government',
      notes:
        'Says to use or refreeze ground meat, poultry, and fish within 1 or 2 days and beef, pork, lamb, or veal steaks, chops, and roasts within 3 to 5 days.',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Cold Food Storage Chart',
      url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts',
      sourceType: 'government',
      notes:
        'Provides refrigerator and freezer storage limits for raw ground meat, poultry, steaks, chops, roasts, cooked meat, and other perishable foods.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Keep Food Safe! Food Safety Basics',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/steps-keep-food-safe',
      sourceType: 'government',
      notes:
        'Covers safe refrigerator and freezer temperatures, refreezing after refrigerator thawing, cooking after other thawing methods, cross-contamination prevention, and safe internal temperatures.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Does a change in color indicate spoilage?',
      url: 'https://ask.fsis.usda.gov/article/Does-a-change-in-color-indicate-spoilage',
      sourceType: 'government',
      notes:
        'Explains that color change alone does not mean spoilage and identifies off odor, sticky or tacky texture, and sliminess as reasons not to use meat or poultry.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Refrigerator and Freezer Thermometer',
      description:
        'Confirms that the refrigerator is holding 40°F or below and the freezer is holding 0°F or below.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Instant-Read Food Thermometer',
      description:
        'Checks the internal temperature of meat instead of relying on color or texture to judge doneness.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Freezer-Safe Bags, Wrap, and Labels',
      description:
        'Airtight packaging and clear dates reduce moisture loss and make storage history easier to track.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'USDA FoodKeeper Guide',
      description:
        'Provides food-specific refrigerator and freezer storage guidance when the type of meat does not fit a simple category.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'partially-thawed-frozen-food',
      anchorText: 'What if the food is only partly thawed?',
      relationshipType: 'sibling',
    },
    {
      slug: 'freezer-burn',
      anchorText: 'Does freezer burn make refrozen meat unsafe?',
      relationshipType: 'related',
    },
    {
      slug: 'freezer-door-left-open',
      anchorText: 'What if the freezer door was left open?',
      relationshipType: 'cause',
    },
    {
      slug: 'freezer-not-cold-enough',
      anchorText: 'What if the freezer is not cold enough?',
      relationshipType: 'cause',
    },
    {
      slug: 'fridge-not-cold-enough',
      anchorText: 'What if the refrigerator is running warm?',
      relationshipType: 'cause',
    },
  ],
};
