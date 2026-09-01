import type { ProblemSeed } from '../types';

export const meatTurnedBrownInFridge: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'food-safety',
  slug: 'meat-turned-brown-in-fridge',
  canonicalPath: '/food-kitchen/refrigeration/food-safety/meat-turned-brown-in-fridge/',
  name: 'Meat Turned Brown in the Fridge',
  eyebrow: 'Food & Kitchen · Refrigeration · Food Safety',

  h1: 'Can I Ignore Meat That Turned Brown in the Fridge?',
  seoTitle: 'Brown Meat in the Fridge: Safe to Eat or Spoiled?',
  metaDescription:
    'Brown beef is not automatically spoiled. Check its refrigerator temperature, storage time, odor, and texture before deciding whether to cook or discard it.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'Usually—if it stayed cold and passes the storage checks',

  shortAnswer:
    'Usually, yes: brown color by itself does not mean refrigerated meat is spoiled. Confirm that it stayed at 40°F or below, is within its recommended storage window, and has no off odor, sticky feel, or slime before using it.',

  whyItMattersHeading: 'Brown Is a Color Change, Not a Safety Test',
  whyItMatters: [
    'Beef pigments change as they gain and lose contact with oxygen. That can make a steak darken, turn the center of ground beef grayish-brown, or give vacuum-packed beef a dark purplish appearance without making it unsafe.',
    'Color cannot clear meat that has been stored too long or allowed to warm. Harmful bacteria may be present without changing the smell or appearance, while an off odor, tackiness, stickiness, or slime is a clear reason to discard the meat.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Eat It—or Get Help—If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Meat color, refrigerated storage limits, temperature control, spoilage signs, date labels, cooking temperatures, and illness warnings checked against USDA, FDA, and CDC guidance.',
  disclaimer: 'General food-safety guidance for a home kitchen; it does not replace medical advice.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'brown-whole-cut-within-storage-window',
      label: 'A steak, chop, or roast turned brown',
      shortDescription:
        'It stayed at 40°F or below, has been refrigerated for no more than three to five days, and has no off odor or abnormal texture.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The browning alone is normal',
      resultBody:
        'Oxygen-related changes in meat pigments can darken a properly refrigerated whole cut. The color by itself does not show that the meat is spoiled.',
      recommendedAction:
        'Cook it within the recommended storage window or freeze it now. Use a food thermometer rather than color to judge doneness.',
    },
    {
      slug: 'ground-beef-brown-in-center',
      label: 'Ground beef is red outside and brown inside',
      shortDescription: 'The center is grayish-brown while the oxygen-exposed surface remains red.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually caused by limited oxygen',
      resultBody:
        'Oxygen reaches the outside of the package more easily than the center. USDA says this color pattern does not mean the ground beef is old or spoiled.',
      recommendedAction: 'Use or freeze it within the one-to-two-day refrigerator window and cook it to 160°F.',
    },
    {
      slug: 'vacuum-packed-beef-looks-dark',
      label: 'Vacuum-packed beef looks dark or purplish-brown',
      shortDescription:
        'The package is sealed, properly refrigerated, and still within its labeled storage directions.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Low-oxygen packaging changes the color',
      resultBody:
        'Beef protected from oxygen is naturally darker than the bright red meat displayed in oxygen-permeable wrap.',
      recommendedAction:
        'Follow the package directions and use-by guidance. Check for leaks, an off odor, or abnormal texture after opening.',
    },
    {
      slug: 'sell-by-date-passed',
      label: 'The sell-by date has passed',
      shortDescription:
        'The meat was purchased recently and is otherwise within the recommended home-refrigeration window.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The printed date is not the whole decision',
      resultBody:
        'A sell-by date is mainly for store inventory and is not a safety deadline. Time since purchase, temperature, meat type, and spoilage signs still matter.',
      recommendedAction:
        'Work out how long the meat has been in your refrigerator. Use or freeze it now if it remains inside the recommended window; otherwise discard it.',
    },
    {
      slug: 'brown-meat-smells-or-feels-wrong',
      label: 'The meat smells off or feels sticky or slimy',
      shortDescription: 'Browning comes with a sour or unpleasant odor, tackiness, stickiness, or slime.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat it as spoiled',
      resultBody:
        'USDA lists an off odor, sticky or tacky texture, and slime as spoilage signs. This is no longer a color-only question.',
      recommendedAction:
        'Discard it without tasting it. Seal it before placing it in the trash and clean anything touched by raw juices.',
    },
    {
      slug: 'ground-meat-stored-too-long',
      label: 'Ground meat or raw sausage has been refrigerated too long',
      shortDescription: 'It has been in a refrigerator at 40°F or below for longer than one to two days.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The short storage window has passed',
      resultBody:
        'Ground meat and raw sausage have a shorter recommended refrigerator life than intact steaks, chops, and roasts. A normal smell or color does not extend that window.',
      recommendedAction: 'Discard it rather than trying to judge safety by smell, color, or extra cooking.',
    },
    {
      slug: 'whole-cut-stored-too-long',
      label: 'A store-wrapped steak, chop, or roast has been refrigerated too long',
      shortDescription: 'A fresh whole cut has remained refrigerated for longer than three to five days.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not let the color overrule the storage limit',
      resultBody:
        'The recommended refrigerator window for fresh steaks, chops, and roasts has passed, even if the meat has no strong odor.',
      recommendedAction:
        'Discard it. Next time, freeze the meat while it is still within its refrigerator storage window.',
    },
    {
      slug: 'meat-warmed-above-safe-temperature',
      label: 'The meat warmed above 40°F',
      shortDescription:
        'A power outage, open refrigerator door, transport delay, or cooling problem allowed the meat to warm.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Temperature history now controls the decision',
      resultBody:
        'Perishable meat that has been above 40°F for more than two hours should be discarded. If the duration is unknown, appearance and smell cannot prove it remained safe.',
      recommendedAction:
        'Discard the meat if the limit was exceeded or cannot be established. Address the refrigerator problem before storing more perishables.',
    },
    {
      slug: 'brown-ground-beef-used-as-doneness-test',
      label: 'You plan to judge cooked ground beef by its brown color',
      shortDescription:
        'The beef was already brown before cooking, making a visual doneness check especially unreliable.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Brown does not mean fully cooked',
      resultBody:
        'Ground beef can turn brown before reaching a temperature that destroys harmful bacteria. Refrigerated browning makes that visual shortcut even less useful.',
      recommendedAction: 'Check the center with a food thermometer and cook ground meat to 160°F.',
    },
    {
      slug: 'cooked-meat-beyond-leftover-window',
      label: 'It is cooked meat that has been refrigerated too long',
      shortDescription:
        'Cooked meat or a meat dish has remained refrigerated beyond the usual three-to-four-day leftover window.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Browning is not the deciding factor',
      resultBody:
        'Cooked meat has its own refrigerator storage limit. Reheating does not provide a reason to keep leftovers beyond the recommended window.',
      recommendedAction: 'Discard the leftovers without tasting them.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The meat pigment reacts to its surroundings',
      description:
        'Oxygen exposure, packaging, light, and storage can alter myoglobin, the pigment responsible for much of beef’s color.',
      severity: 'info',
      chainLabel: 'Pigment exposure',
    },
    {
      stageLabel: 'AS THE COLOR CHANGES',
      title: 'Red can become brown without spoilage',
      description:
        'Oxidation creates brown metmyoglobin, while limited oxygen can leave the center of ground beef grayish-brown.',
      severity: 'info',
      chainLabel: 'Normal browning',
    },
    {
      stageLabel: 'IF STORAGE LIMITS ARE EXCEEDED',
      title: 'Color stops being useful',
      description:
        'Meat can contain harmful bacteria without an obvious change in appearance, smell, or taste.',
      severity: 'warning',
      chainLabel: 'Unsafe storage',
    },
    {
      stageLabel: 'IF SPOILAGE DEVELOPS',
      title: 'Odor and texture may change',
      description: 'An off odor, tackiness, stickiness, or slime indicates that the meat should not be used.',
      severity: 'warning',
      chainLabel: 'Spoilage signs',
    },
    {
      stageLabel: 'IF UNSAFE MEAT IS EATEN',
      title: 'Foodborne illness can follow',
      description:
        'Raw, undercooked, temperature-abused, or excessively stored meat can expose someone to illness-causing germs.',
      severity: 'danger',
      chainLabel: 'Foodborne illness',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Brown steak, chop, or roast within the recommended cold-storage window',
      ignoreAnswer: 'Yes, after checking odor and texture',
      severity: 'info',
      whatToDo: 'Cook or freeze it while it remains within the three-to-five-day refrigerator window.',
    },
    {
      situation: 'Ground meat or raw sausage refrigerated for no more than one to two days',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Cook it now to the safe temperature for that meat, or freeze it.',
    },
    {
      situation: 'Sealed vacuum-packed beef that looks dark',
      ignoreAnswer: 'Yes, if storage directions were followed',
      severity: 'info',
      whatToDo: 'Keep it refrigerated and follow the package’s use and storage instructions.',
    },
    {
      situation: 'The sell-by date passed, but home storage time is still within guidance',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo:
        'Use the purchase date and meat type to make the decision. Cook or freeze it now if it is still within the recommended window.',
    },
    {
      situation: 'Meat with an off odor, sticky feel, tackiness, or slime',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard it without tasting or rinsing it.',
    },
    {
      situation: 'Meat was above 40°F beyond the safe limit',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Throw it away. Do not use smell or cooking as a way to rescue it.',
    },
    {
      situation: 'You do not know how long the meat has been refrigerated or warm',
      ignoreAnswer: 'No, not based on color alone',
      severity: 'warning',
      whatToDo:
        'Check labels, receipts, or meal records. Discard it if you cannot establish a safe storage history.',
    },
    {
      situation: 'Already-brown ground beef is being cooked',
      ignoreAnswer: 'No visual shortcut',
      severity: 'warning',
      whatToDo: 'Use a food thermometer and verify that the center reaches 160°F.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Identify the meat and when it entered the refrigerator',
      body:
        'Work from the date you bought, opened, cooked, or thawed it—not the day it turned brown. Ground meat and raw sausage have a shorter refrigerator window than steaks, chops, and roasts.',
    },
    {
      title: 'Check the actual refrigerator temperature',
      body:
        'Confirm with an appliance thermometer that the refrigerator is holding 40°F or below. Move perishables to reliable cold storage if it is running warm.',
      destinationProblemSlug: 'fridge-not-cold-enough',
    },
    {
      title: 'Check for spoilage without tasting',
      body:
        'Look for an off odor, tackiness, stickiness, or slime. Any of those signs means the meat should be discarded, regardless of its date or color.',
    },
    {
      title: 'Cook with a food thermometer',
      body:
        'Cook whole cuts of beef, pork, veal, and lamb to 145°F and allow a three-minute rest. Cook ground meat to 160°F and poultry to 165°F.',
    },
    {
      title: 'Contain and clean raw juices',
      body:
        'Keep raw meat and its packaging away from cooked and ready-to-eat food. Wash your hands, utensils, boards, counters, and refrigerator surfaces after contact with raw juices.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'It has a sour, rancid, or otherwise off odor',
      description: 'USDA identifies an off odor alongside color change as a reason not to use the meat.',
      severity: 'warning',
    },
    {
      title: 'The surface is sticky, tacky, or slimy',
      description: 'These texture changes indicate spoilage rather than harmless pigment oxidation.',
      severity: 'warning',
    },
    {
      title: 'Its recommended refrigerator storage window has passed',
      description:
        'Do not let a normal appearance or mild smell overrule the shorter limits for ground meat, sausage, poultry, cooked meat, or variety meats.',
      severity: 'warning',
    },
    {
      title: 'It was warm for too long',
      description:
        'Discard perishable meat that remained above 40°F beyond the safe limit or whose warm-temperature history cannot be established.',
      severity: 'danger',
    },
    {
      title: 'Raw juices reached ready-to-eat food',
      description:
        'Discard contaminated food that will not be cooked, and clean the affected refrigerator shelf, container, or work surface.',
      severity: 'warning',
    },
    {
      title: 'You cannot establish its age or temperature history',
      description:
        'Brown color, a normal smell, and a passed sell-by date cannot reconstruct missing storage information.',
      severity: 'caution',
    },
    {
      title: 'Someone who ate it develops severe food-poisoning symptoms',
      description:
        'Seek medical care for bloody diarrhea, a fever above 102°F, frequent vomiting that prevents drinking, prolonged diarrhea, or signs of dehydration.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why did my beef turn brown in the refrigerator?',
      answer:
        'Oxygen changes the form of myoglobin, a meat pigment. The resulting brown pigment is called metmyoglobin, and its presence alone does not mean the beef is spoiled.',
    },
    {
      question: 'Is grayish-brown ground beef in the middle normal?',
      answer:
        'Often, yes. Less oxygen reaches the center of the package, so the inside can look grayish-brown while the outside remains red.',
    },
    {
      question: 'Why is vacuum-packed beef so dark?',
      answer:
        'Beef without much oxygen is naturally dark red or purplish. It often becomes brighter after the package is opened and the surface is exposed to air.',
    },
    {
      question: 'Is meat safe if it smells normal?',
      answer:
        'A normal smell does not prove safety. Harmful bacteria may not change how meat looks or smells, so storage time and temperature still control the decision.',
    },
    {
      question: 'Can I taste a small piece to check whether it is spoiled?',
      answer:
        'No. Tasting cannot establish safety and may expose you to harmful germs. Discard meat when its storage history or spoilage signs make it unsafe.',
    },
    {
      question: 'Can I cook meat that smells bad and make it safe?',
      answer:
        'No. USDA says meat with an off odor, sticky or tacky texture, or slime should not be used. Cooking is not a reason to override those spoilage signs.',
    },
    {
      question: 'How long can raw ground beef stay in the refrigerator?',
      answer: 'FoodSafety.gov lists one to two days at 40°F or below for hamburger and other ground meats.',
    },
    {
      question: 'How long can raw steaks, chops, and roasts stay refrigerated?',
      answer:
        'Fresh beef, veal, lamb, and pork steaks, chops, and roasts generally have a three-to-five-day refrigerator window at 40°F or below.',
    },
    {
      question: 'Does a passed sell-by date mean the meat is spoiled?',
      answer:
        'Not by itself. A sell-by date is intended for store inventory rather than as a safety deadline. Use the meat type, purchase date, storage temperature, and spoilage signs to decide.',
    },
    {
      question: 'Why do I need a thermometer if the meat looks brown when cooked?',
      answer:
        'Brown color is not a reliable doneness test. Ground meat can brown before it reaches 160°F, and some safely cooked meat can remain pink.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'The Color of Meat and Poultry',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/color-meat-and-poultry',
      sourceType: 'government',
      notes:
        'Explains myoglobin, oxidation, brown metmyoglobin, dark vacuum-packed beef, gray-brown ground-beef centers, and spoilage signs such as off odor, tackiness, stickiness, and slime.',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Cold Food Storage Chart',
      url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts',
      sourceType: 'government',
      notes:
        'Lists refrigerator storage guidance at 40°F or below for ground meat, raw sausage, poultry, steaks, chops, roasts, cooked meat, and other perishables.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Refrigerator Thermometers - Cold Facts about Food Safety',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety',
      sourceType: 'government',
      notes:
        'Supports maintaining refrigerators at 40°F or below, using thermometers, separating raw meat, and not relying on appearance or odor to detect illness-causing bacteria.',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Cook to a Safe Minimum Internal Temperature',
      url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures',
      sourceType: 'government',
      notes:
        'Provides thermometer-based minimum temperatures for whole cuts, ground meat, poultry, leftovers, and other foods.',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Food Product Dating',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-product-dating',
      sourceType: 'government',
      notes:
        'Explains that sell-by and most other food dates concern inventory or quality rather than acting as universal safety deadlines, and that meat color alone does not indicate spoilage.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Food Poisoning Symptoms',
      url: 'https://www.cdc.gov/food-safety/signs-symptoms/',
      sourceType: 'government',
      notes:
        'Lists common food-poisoning symptoms and signs that warrant medical care, including bloody diarrhea, high fever, frequent vomiting, prolonged diarrhea, and dehydration.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Refrigerator thermometer',
      description:
        'Shows whether the refrigerator is actually maintaining 40°F or below instead of relying on the control dial or how cold food feels.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Instant-read food thermometer',
      description:
        'Checks the center of meat so color is not used as a substitute for a safe internal temperature.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'FoodKeeper storage guide',
      description:
        'Helps identify refrigerator and freezer guidance for specific cuts, ground meats, sausages, poultry, and cooked dishes.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'USDA Meat and Poultry Hotline',
      description:
        'Provides food-safety guidance when the meat type, packaging, storage history, or label instructions make the decision unclear.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'fridge-not-cold-enough',
      anchorText: 'Is your refrigerator staying cold enough?',
      relationshipType: 'cause',
    },
    {
      slug: 'refrigerator-door-left-open-overnight',
      anchorText: 'Was the refrigerator door left open overnight?',
      relationshipType: 'cause',
    },
    {
      slug: 'leftovers-left-out',
      anchorText: 'Was the meat left out before refrigeration?',
      relationshipType: 'related',
    },
  ],
};
