import type { ProblemSeed } from '../types';

export const fridgeNotColdEnough: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'food-safety',
  slug: 'fridge-not-cold-enough',
  canonicalPath: '/food-kitchen/refrigeration/food-safety/fridge-not-cold-enough/',
  name: 'Refrigerator Not Cooling',
  eyebrow: 'Food & Kitchen · Refrigeration · Food Safety',

  h1: "Can I Ignore a Refrigerator That Isn't Cooling?",
  seoTitle: 'Refrigerator Not Cooling: Food Safety, Checks, and Repair',
  metaDescription:
    'A warm refrigerator can make perishable food unsafe. Check the temperature, protect the food, try basic airflow and door checks, and know when to call.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Only for food kept at 40°F or below',

  shortAnswer:
    'No. Check the temperature now; if the refrigerator is above 40°F, move perishable food to safe cold storage and address the cause. Discard affected perishables if safe time and temperature limits were exceeded or cannot be established.',

  whyItMattersHeading: 'Why a Warm Refrigerator Matters',
  whyItMatters: [
    'Refrigerated food should be held at 40°F or below. When meat, poultry, seafood, milk, eggs, leftovers and other perishables warm above that temperature, harmful bacteria can multiply without causing an obvious change in smell, taste or appearance.',
    'The cause may be as simple as a changed setting, blocked vent or door that is not sealing. It can also involve a fan, control, defrost system, compressor or another internal part. A cold freezer does not prove the refrigerator compartment is keeping food safe.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It Normally If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Refrigerator temperature, food discard rules, airflow, door seals and electrical warnings checked against FDA, USDA, FoodSafety.gov, manufacturer and ESFI guidance.',
  disclaimer:
    'General U.S. consumer food-safety and appliance guidance. Model-specific controls and repair procedures vary. Do not open the sealed refrigeration system or attempt energized electrical repairs.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'thermometer-at-or-below-40',
      label: 'The refrigerator feels warm, but a thermometer reads 40°F or below',
      shortDescription:
        'The cabinet air does not feel very cold when the door opens, but an appliance thermometer confirms safe refrigeration.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The measured temperature is within the safe range',
      resultBody:
        'Cold air escapes when the door opens, so the cabinet may not feel as cold as expected. FDA recommends judging refrigeration with a thermometer and keeping the compartment at 40°F or below.',
      recommendedAction:
        'Keep monitoring the thermometer. If food begins spoiling unusually early or the reading rises above 40°F, start the cooling checks and arrange service if necessary.',
    },
    {
      slug: 'recently-installed-or-restarted',
      label: 'The refrigerator was recently installed, moved or restarted',
      shortDescription: 'Cooling has begun, but the refrigerator has not yet reached its normal temperature.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'It may still be cooling down',
      resultBody:
        'Manufacturers note that cooling after installation or service is not immediate, and recovery time varies by model and conditions. That does not make a warm compartment safe for perishable food.',
      recommendedAction:
        'Follow the model manual and keep perishables in another refrigerator or an iced cooler at 40°F or below until the compartment reaches a safe temperature.',
    },
    {
      slug: 'freezer-cold-fridge-warm',
      label: 'The freezer is cold, but the refrigerator compartment is warm',
      shortDescription:
        'Frozen food remains hard while milk, drinks or food in the fresh-food section is warming.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The refrigerator may have an airflow problem',
      resultBody:
        'Many models send cold air from the freezer into the refrigerator through vents. Blocked vents, heavy frost or a failed fan, damper or related part can leave the freezer cold while the fresh-food compartment warms.',
      recommendedAction:
        'Move refrigerator perishables to safe cold storage. Clear packages from vents, check for heavy frost and request service if the compartment cannot return to 40°F or below.',
    },
    {
      slug: 'both-compartments-warm',
      label: 'Both the refrigerator and freezer are warming',
      shortDescription: 'Refrigerated food is warm and frozen food is softening or thawing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a complete cooling failure',
      resultBody:
        'The appliance may have lost power, had its cooling turned off or developed a fault affecting the entire refrigeration system. Food in both compartments now requires temperature-based decisions.',
      recommendedAction:
        'Keep the doors closed while checking power and controls. Move perishables to safe cold storage, evaluate thawing frozen food separately and arrange service if cooling does not resume.',
    },
    {
      slug: 'cooling-off-or-demo-mode',
      label: 'The display shows cooling off, showroom mode or demo mode',
      shortDescription:
        'Lights and controls work, but the compressor or cooling system does not appear to operate.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Cooling may have been disabled',
      resultBody:
        'Some refrigerators have a showroom or cooling-off setting that leaves the display and lights operating without normal refrigeration. The exact display and exit procedure vary by model.',
      recommendedAction:
        'Use the owner’s manual to restore cooling. Do not store perishables in the compartment until a thermometer confirms 40°F or below.',
    },
    {
      slug: 'vents-blocked-or-overpacked',
      label: 'Food is packed tightly against the interior vents',
      shortDescription:
        'Containers or packages restrict the openings that circulate cold air through the refrigerator.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Restore the airflow now',
      resultBody:
        'FDA and manufacturers warn that overcrowding and blocked vents can prevent cold air from circulating properly. Some shelves or areas may warm even while others still feel cold.',
      recommendedAction:
        'Rearrange food so air can move around the compartment and vents remain open. Check the temperature afterward and move perishables if the refrigerator remains above 40°F.',
    },
    {
      slug: 'door-not-sealing',
      label: 'The refrigerator door does not close or seal fully',
      shortDescription: 'A package, shelf, dirty gasket or damaged seal leaves a gap around the door.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Escaping cold air can keep the refrigerator warm',
      resultBody:
        'A blocked or damaged door seal lets warm room air enter and can prevent the appliance from maintaining its set temperature.',
      recommendedAction:
        'Remove obstructions, seat shelves and drawers correctly, and clean the gasket as the manual directs. Replace a damaged gasket or request service if the gap remains.',
    },
    {
      slug: 'brief-temperature-rise-corrected',
      label: 'The temperature rose above 40°F briefly, and the cause is corrected',
      shortDescription:
        'The door or airflow problem was fixed, and the food was above 40°F for no more than two hours.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The food may still be safe',
      resultBody:
        'FDA guidance says food that has been above 40°F for only two hours or less should be safe. The refrigerator still needs to return to and hold the proper temperature.',
      recommendedAction:
        'Keep the door closed, monitor the thermometer and use safe alternate refrigeration if the temperature does not return to 40°F or below.',
    },
    {
      slug: 'perishables-warm-too-long',
      label: 'Perishable food was above 40°F for more than two hours',
      shortDescription:
        'Meat, poultry, seafood, milk, eggs, leftovers or similar foods exceeded the official temperature limit.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Discard the affected perishables',
      resultBody:
        'USDA and FoodSafety.gov guidance directs consumers to discard many refrigerated perishables after more than two hours above 40°F. Smell and appearance cannot reverse that decision.',
      recommendedAction:
        'Do not taste the food. Discard affected perishables, check individual foods against the FoodSafety.gov chart and restore safe refrigeration before restocking.',
    },
    {
      slug: 'warm-food-duration-unknown',
      label: 'The food feels warm, and you do not know how long it has been that way',
      shortDescription: 'There was no thermometer or reliable record of when cooling stopped.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not guess with perishable food',
      resultBody:
        'Touch, smell and appearance cannot establish a safe temperature history. When you cannot show that affected perishables stayed within official limits, keeping them is not a safe bet.',
      recommendedAction:
        'Discard temperature-sensitive perishables whose safety cannot be established. Use the official food-by-food chart for items such as condiments, hard cheese and whole produce.',
    },
    {
      slug: 'electrical-warning-signs',
      label: 'There is smoke, sparking, a burning odor or repeated breaker tripping',
      shortDescription: 'The cooling problem comes with signs of an electrical fault or overheating.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using the refrigerator',
      resultBody:
        'Repeated breaker trips or visible electrical symptoms can indicate a defect with fire or shock potential. This is separate from the food-safety problem and takes priority.',
      recommendedAction:
        'Disconnect power only if you can do so without approaching smoke, sparks or heat. Do not keep resetting the breaker. Use emergency services for active fire or smoke and have the appliance and circuit checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The food temperature may be uncertain',
      description:
        'Without a thermometer, a warm-feeling cabinet does not reveal whether perishables are still within safe refrigeration limits.',
      severity: 'caution',
      chainLabel: 'Uncertain temperature',
    },
    {
      stageLabel: 'IF IT STAYS ABOVE 40°F',
      title: 'Perishable food leaves safe cold storage',
      description:
        'Higher temperatures allow bacteria to multiply more readily in foods that require refrigeration.',
      severity: 'warning',
      chainLabel: 'Warming perishables',
    },
    {
      stageLabel: 'AFTER TOO LONG',
      title: 'Some food must be discarded',
      description:
        'Official guidance calls for discarding many perishables after more than two hours above 40°F.',
      severity: 'warning',
      chainLabel: 'Food loss',
    },
    {
      stageLabel: 'IF THE COOLING FAULT CONTINUES',
      title: 'More of the refrigerator becomes unusable',
      description:
        'Repeated warming can spoil new groceries and may point to a door, airflow, control or mechanical problem that basic adjustments will not solve.',
      severity: 'warning',
      chainLabel: 'Ongoing failure',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Unsafe food causes illness',
      description:
        'Pathogenic bacteria may be present even when the food looks and smells normal, so tasting questionable food is not a valid safety test.',
      severity: 'danger',
      chainLabel: 'Foodborne illness',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The refrigerator is consistently at 40°F or below',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Continue using it and monitor with an appliance thermometer. Investigate if the reading rises or food begins spoiling unusually early.',
    },
    {
      situation: 'The door was opened frequently, but the temperature remains safe',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Close the door, avoid unnecessary opening and make sure packages are not blocking the vents or door.',
    },
    {
      situation: 'A new or restarted refrigerator has not reached 40°F',
      ignoreAnswer: 'Only before storing perishables',
      severity: 'caution',
      whatToDo:
        'Follow the model manual and keep perishable food in verified cold storage until the refrigerator reaches 40°F or below.',
    },
    {
      situation: 'The freezer is cold, but the refrigerator is above 40°F',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Protect refrigerated food, clear blocked vents, look for heavy frost and arrange service if safe cooling does not return.',
    },
    {
      situation: 'Food was above 40°F for no more than two hours',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Correct the cooling problem, return the food to safe refrigeration and monitor the compartment temperature.',
    },
    {
      situation: 'Perishables were above 40°F for more than two hours',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Discard affected perishables without tasting them and restore safe refrigeration before replacing the food.',
    },
    {
      situation: 'Power is out, and the refrigerator door has stayed closed',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Keep the door closed. Government guidance says an unopened refrigerator keeps food safely cold for about four hours; use a cooler with ice if the outage continues.',
    },
    {
      situation: 'The appliance smokes, sparks, smells burned or trips the breaker again',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop using it. Disconnect power only if safe, do not reset the breaker repeatedly and obtain appropriate electrical or appliance service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the actual temperature',
      body:
        'Put an appliance thermometer in the refrigerator and follow its instructions. Check questionable food with a food thermometer when useful. The target for the refrigerator is 40°F or below.',
    },
    {
      title: 'Protect the perishable food',
      body:
        'Move meat, poultry, seafood, milk, eggs, leftovers and other temperature-sensitive foods to another refrigerator or an iced cooler that stays at 40°F or below. Minimize door opening while sorting the problem.',
    },
    {
      title: 'Check settings, vents and the door',
      body:
        'Confirm that cooling is on and the controls were not changed. Clear interior vents, remove anything blocking the door, inspect the gasket and clean accessible components only as the model manual directs.',
    },
    {
      title: 'Sort food by time and temperature',
      body:
        'Discard affected perishables that were above 40°F for more than two hours. If the temperature history is unknown, use the FoodSafety.gov food-by-food chart rather than relying on smell or taste.',
    },
    {
      title: 'Arrange service if safe cooling does not return',
      body:
        'If the refrigerator cannot reach and hold 40°F after basic model-approved checks, request appliance service. Internal fans, controls, defrost components, relays and compressors are not general do-it-yourself repairs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The refrigerator remains above 40°F',
      description: 'Move perishables to verified cold storage and address the cooling fault.',
      severity: 'warning',
    },
    {
      title: 'Perishable food has been warm for too long',
      description:
        'Discard affected meat, poultry, seafood, milk, eggs, leftovers and similar foods according to official time-and-temperature guidance.',
      severity: 'danger',
    },
    {
      title: 'The temperature history is unknown',
      description: 'Warm food that looks or smells normal may still be unsafe. Do not taste it to decide.',
      severity: 'warning',
    },
    {
      title: 'The freezer is also warming',
      description:
        'Soft ice cream, thawing packages or loss of ice crystals can indicate a broader cooling failure requiring separate frozen-food decisions.',
      severity: 'warning',
    },
    {
      title: 'The door will not stay closed',
      description:
        'Remove obstructions and check the gasket. A door that cannot seal can prevent safe cooling from returning.',
      severity: 'warning',
    },
    {
      title: 'Heavy frost covers the freezer back wall or vents',
      description:
        'Frost can restrict the airflow used to cool the fresh-food compartment and may indicate a door-seal or defrost problem.',
      severity: 'caution',
    },
    {
      title: 'There is smoke, sparking, a burning odor or repeated breaker tripping',
      description:
        'Do not reach behind a smoking or sparking appliance. Cut power only if safe, leave the area for active smoke or fire and call emergency services when needed.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why is the freezer cold while the refrigerator is warm?',
      answer:
        'Many refrigerators produce cold air in the freezer and circulate it into the fresh-food compartment. Blocked vents, frost, a fan problem, a damper problem or another internal fault can interrupt that airflow.',
    },
    {
      question: 'Is 41°F cold enough for a refrigerator?',
      answer:
        'It is above the FDA and USDA recommended maximum of 40°F. A single reading after opening the door may be temporary, but a refrigerator that consistently stays above 40°F needs attention.',
    },
    {
      question: 'Can I judge the temperature by touching food or drinks?',
      answer:
        'No. Touch cannot tell you the exact temperature or how long food has been warm. Use an appliance thermometer and, when needed, a food thermometer.',
    },
    {
      question: 'How long should I wait after changing the temperature setting?',
      answer:
        'Recovery time varies by model, room conditions, food load and how often the door opens. Follow the manual, and do not use the compartment for perishables until it measures 40°F or below.',
    },
    {
      question: 'Can I keep using the freezer if it is still at 0°F?',
      answer:
        'Yes, if it is consistently holding 0°F and the food remains frozen. Monitor it because some refrigerator and freezer compartments share cooling components.',
    },
    {
      question: 'Will turning the control to its coldest setting fix the problem?',
      answer:
        'It may correct an accidentally changed setting, but it will not repair blocked airflow, a bad seal or a failed component. Verify the result with a thermometer.',
    },
    {
      question: 'Should I unplug the refrigerator to reset it?',
      answer:
        'Only follow a reset or power-cycle procedure listed for your model. Repeatedly unplugging it or resetting a tripping breaker does not diagnose an electrical or mechanical fault.',
    },
    {
      question: 'Can I keep food that still smells fine?',
      answer:
        'Smell and appearance cannot prove that warm perishable food is safe. Make the decision using the food type, measured temperature and how long it was above 40°F.',
    },
    {
      question: 'Will cooking warm meat or leftovers make them safe?',
      answer:
        'Do not use cooking to rescue food that official guidance says to discard. Some organisms can produce toxins that survive cooking.',
    },
    {
      question: 'Could dirty condenser coils cause poor cooling?',
      answer:
        'They can on models with accessible condenser coils. Cleaning instructions differ, so locate the model manual and follow its power-disconnection and cleaning directions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Refrigerator Thermometers - Cold Facts about Food Safety',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety',
      sourceType: 'government',
      notes:
        'FDA recommends keeping refrigerators at 40°F or below, using appliance thermometers and judging warm perishable food by temperature and time rather than appearance or odor.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Refrigeration & Food Safety',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration',
      sourceType: 'government',
      notes:
        'USDA states that refrigerators should maintain 40°F or below and advises against consuming foods held above 40°F for more than two hours.',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Food Safety During Power Outage',
      url: 'https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage',
      sourceType: 'government',
      notes:
        'The federal food-by-food chart identifies refrigerated items to keep or discard after unsafe warming and explains the closed-refrigerator guidance for power outages.',
    },
    {
      publisher: 'Whirlpool',
      title: 'Why Is My Refrigerator Not Cooling? 7 Possible Causes and Fixes',
      url: 'https://www.whirlpool.com/blog/kitchen/why-is-my-refrigerator-not-cooling.html',
      sourceType: 'manufacturer',
      notes:
        'Whirlpool identifies settings, blocked vents, overcrowding, condenser coils, door gaskets and internal component faults as possible causes, while directing model-specific repairs to service.',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'Troubleshooting an LG refrigerator not cooling properly',
      url: 'https://www.lg.com/us/support/help-library/troubleshooting-an-lg-refrigerator-not-cooling-properly-CT10000021-20155295246336',
      sourceType: 'manufacturer',
      notes:
        'LG covers temperature settings, blocked airflow, overfilling, doors that do not close, and the recovery period after installation or service.',
    },
    {
      publisher: 'Electrical Safety Foundation International',
      title: 'Appliance Safety Tips',
      url: 'https://www.esfi.org/appliance-safety-tips/',
      sourceType: 'industry',
      notes:
        'ESFI warns that an appliance repeatedly tripping a breaker can indicate a defect with fire or shock potential and advises unplugging it and obtaining repair or replacement.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Refrigerator appliance thermometer',
      description: 'Shows whether the fresh-food compartment is consistently holding 40°F or below.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Food thermometer',
      description:
        'Helps check the temperature of individual packages when the cabinet temperature history is uncertain.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Insulated cooler with ice or frozen gel packs',
      description:
        'Provides temporary cold storage for perishables while the refrigerator is being checked or repaired.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Model-specific owner’s manual',
      description:
        'Identifies the correct settings, vent locations, demo-mode controls, cleaning instructions and approved troubleshooting procedure.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance repair service',
      description:
        'Diagnoses fan, control, defrost, compressor and sealed-system faults when basic checks do not restore safe cooling.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'refrigerator-door-left-open-overnight',
      anchorText: 'Was the refrigerator door left open overnight?',
      relationshipType: 'cause',
    },
    {
      slug: 'freezer-not-cold-enough',
      anchorText: 'Is the freezer also not cold enough?',
      relationshipType: 'sibling',
    },
    {
      slug: 'ice-on-freezer-back-wall',
      anchorText: 'Is ice covering the freezer back wall?',
      relationshipType: 'cause',
    },
    {
      slug: 'refrigerator-running-constantly',
      anchorText: 'Why is the refrigerator running constantly?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'refrigerator-clicking-on-and-off',
      anchorText: 'Why does the refrigerator keep clicking on and off?',
      relationshipType: 'cause',
    },
  ],
};
