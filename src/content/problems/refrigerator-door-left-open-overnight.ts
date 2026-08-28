import type { ProblemSeed } from '../types';

/**
 * Food & Kitchen > Refrigeration > Food Safety > Refrigerator Door Left Open Overnight.
 *
 * Every factual claim below traces to one of the six sources at the
 * bottom of this file, most directly USDA's own published answer to this
 * exact question. The core distinction is: if the refrigerator kept
 * running and stayed at 40°F or below, the food is safe regardless of
 * how long the door was ajar; if the temperature is unknown and
 * perishable food feels warm, or it was above 40°F for more than two
 * hours, discard the perishables — food type and time/temperature
 * decide this, not smell or appearance.
 */
export const refrigeratorDoorLeftOpenOvernight: ProblemSeed = {
  systemSlug: 'food-safety',
  slug: 'refrigerator-door-left-open-overnight',
  canonicalPath: '/food-kitchen/refrigeration/food-safety/refrigerator-door-left-open-overnight/',
  name: 'Refrigerator Door Left Open Overnight',
  eyebrow: 'Food & Kitchen · Refrigeration · Food Safety',

  h1: 'Can I Ignore a Refrigerator Door Left Open Overnight?',
  seoTitle: 'Fridge Door Left Open Overnight: Is the Food Safe? | Can I Ignore It',
  metaDescription:
    'A fridge door left open overnight does not automatically ruin everything. Check temperature and food type to see what stays and what should be discarded.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep the food?',
  canIUseItLabel: 'Only if it stayed cold enough',

  shortAnswer:
    'Maybe. If the refrigerator kept running and stayed at 40°F (4°C) or below, USDA says the food is safe. If the temperature is unknown and perishable food feels warm, discard those perishables. Foods such as hard cheese, butter, whole produce and many condiments can often be kept even when more temperature-sensitive foods cannot.',

  whyItMattersHeading: 'Why Does Leaving the Refrigerator Door Open Matter?',
  whyItMatters: [
    'A refrigerator is meant to hold perishable food at 40°F (4°C) or below. An open door lets warmer room air enter while the refrigerator tries to pull the temperature back down. A slightly open door does not tell you by itself whether the food became unsafe. USDA says food is safe if the unit kept operating and the temperature stayed at 40°F or below, even when the door was left slightly open overnight.',
    'If perishable food warms above 40°F, time starts to matter. USDA and FDA guidance uses two hours above 40°F as the discard point for many refrigerated perishables including meat, poultry, seafood, milk, eggs and leftovers. Smell and appearance cannot reliably tell you whether food stayed safe.',
  ].join('\n\n'),

  redFlagsHeading: 'Discard Perishable Food If You Notice:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Refrigerator doors left open, refrigerator temperature, perishable-food time limits and food-by-food discard guidance checked against USDA FSIS, FDA and FoodSafety.gov guidance.',
  disclaimer:
    'General food-safety guidance only. Food safety depends on the actual food, temperature and time. Do not taste questionable food to test whether it is safe. People at higher risk of foodborne illness may need to be especially cautious with refrigerated ready-to-eat foods.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'door-ajar-under-two-hours',
      label: 'The door was ajar for less than two hours',
      shortDescription: 'The refrigerator was still running and the problem was caught quickly.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The food is generally safe',
      resultBody: 'USDA says food is safe to use if the refrigerator door was ajar for less than two hours.',
      recommendedAction: 'Close the door fully and make sure the refrigerator returns to 40°F or below.',
    },
    {
      slug: 'overnight-temp-40-or-below',
      label: 'It was open overnight, but the refrigerator is 40°F or below',
      shortDescription: 'An appliance thermometer confirms the temperature stayed cold enough.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'USDA says the food is safe',
      resultBody: 'If the refrigerator kept operating and the temperature stayed at 40°F or below, an open door overnight does not require you to throw the food away.',
      recommendedAction: 'Close the door, keep the refrigerator at 40°F or below and use the food normally.',
    },
    {
      slug: 'unknown-temp-food-warm',
      label: 'I do not know the temperature and the food feels warm',
      shortDescription: 'The door was open for hours or overnight and there was no thermometer.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Discard the perishable food',
      resultBody: 'USDA specifically advises discarding perishable items when the refrigerator temperature is unknown and the food feels warm after the door was left open.',
      recommendedAction: 'Discard temperature-sensitive perishables and use the USDA or FoodSafety.gov chart to sort the rest.',
    },
    {
      slug: 'perishables-above-40-over-two-hours',
      label: 'Perishable food was above 40°F for more than two hours',
      shortDescription: 'Meat, poultry, seafood, milk, eggs, leftovers or similar foods warmed beyond the safe limit.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Throw those perishables away',
      resultBody: 'USDA and FDA advise discarding many refrigerated perishables that have been above 40°F for more than two hours.',
      recommendedAction: 'Do not taste the food. Discard the affected perishables.',
    },
    {
      slug: 'no-thermometer-food-feels-cold',
      label: 'I have no thermometer, but the food still feels cold',
      shortDescription: 'The door was open for an unknown length of time.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Cold to the touch is not a precise safety test',
      resultBody: 'A hand cannot tell you how long food may have spent above 40°F. FDA recommends using refrigerator or food thermometers and warns that appearance and odor cannot establish safety.',
      recommendedAction: 'Use the USDA food chart and discard temperature-sensitive perishables if you cannot establish a safe temperature history.',
    },
    {
      slug: 'only-condiments-hard-cheese-butter',
      label: 'Mostly condiments, hard cheese and butter were inside',
      shortDescription: 'The foods are less temperature-sensitive than meat, milk, eggs or leftovers.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Many of these foods can be kept',
      resultBody: "USDA's emergency chart lists hard and processed cheeses, butter, margarine, mustard, ketchup, pickles, jams and several other condiments among foods that can be kept after warmer refrigerator conditions.",
      recommendedAction: 'Check the specific food against USDA guidance before discarding it.',
    },
    {
      slug: 'milk-eggs-meat-leftovers-warm',
      label: 'Milk, eggs, meat or leftovers feel warm',
      shortDescription: 'The refrigerator door was open for hours and these foods are no longer properly chilled.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep these on a guess',
      resultBody: 'These are among the refrigerated foods USDA tells consumers to discard after unsafe warm exposure.',
      recommendedAction: 'If you cannot confirm they remained at 40°F or below, follow the discard guidance for perishable foods.',
    },
    {
      slug: 'raw-meat-juices-leaked',
      label: 'Raw meat juices leaked onto other food',
      shortDescription: 'Packages softened or shifted and liquid contaminated nearby items.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Deal with the cross-contamination',
      resultBody: 'USDA advises discarding foods that become contaminated by juices from raw meat, poultry or fish during an emergency temperature event.',
      recommendedAction: 'Discard contaminated ready-to-eat foods and clean the affected refrigerator surfaces.',
    },
    {
      slug: 'door-keeps-popping-open',
      label: 'The refrigerator door keeps opening again',
      shortDescription: 'The seal does not hold or something inside prevents full closure.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Fix the door-closing problem',
      resultBody: 'Repeated door gaps can keep raising the cabinet temperature and make future food-safety decisions harder.',
      recommendedAction: 'Remove anything blocking the door, inspect the gasket and verify with a refrigerator thermometer that the cabinet holds 40°F or below.',
    },
    {
      slug: 'fridge-still-not-cooling',
      label: 'The refrigerator stays above 40°F after the door is closed',
      shortDescription: 'The appliance is not returning to a safe storage temperature.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a refrigeration problem',
      resultBody: 'Refrigerated perishable food needs to stay at 40°F or below. A refrigerator that cannot return to that range may have a separate cooling fault.',
      recommendedAction: 'Move safe food to another refrigerator or an iced cooler that stays at 40°F or below and arrange appliance service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT AWAY',
      title: 'Warm room air enters the refrigerator',
      description: 'The appliance has to remove the added heat while cold air escapes through the open door.',
      severity: 'info',
      chainLabel: 'Open door',
    },
    {
      stageLabel: 'IF THE DOOR STAYS OPEN',
      title: 'Food temperature can begin to rise',
      description: 'Items near the door and smaller containers may warm faster than dense foods deeper in the refrigerator.',
      severity: 'caution',
      chainLabel: 'Warming food',
    },
    {
      stageLabel: 'ABOVE 40°F',
      title: 'Perishable food enters a less safe temperature range',
      description: 'USDA and FDA set 40°F as the upper target for refrigerated food storage.',
      severity: 'warning',
      chainLabel: 'Temperature loss',
    },
    {
      stageLabel: 'AFTER TOO LONG',
      title: 'Many perishables need to be discarded',
      description: 'USDA and FDA use more than two hours above 40°F as the discard point for many refrigerated perishable foods.',
      severity: 'warning',
      chainLabel: 'Discard perishables',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Unsafe food can cause foodborne illness',
      description: 'Perishable food that was not kept adequately refrigerated may cause illness even when it still looks or smells normal.',
      severity: 'danger',
      chainLabel: 'Foodborne illness',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Door ajar for less than two hours',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Close it and confirm the refrigerator returns to 40°F or below.',
    },
    {
      situation: 'Door open overnight but refrigerator stayed at 40°F or below',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Keep the food and close the door properly.',
    },
    {
      situation: 'Temperature unknown and perishable food feels warm',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the perishable food and check other items against USDA guidance.',
    },
    {
      situation: 'Perishable food was above 40°F for more than two hours',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Discard it.',
    },
    {
      situation: 'Hard cheese, butter or shelf-stable-style condiments warmed',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Check the specific food on the USDA emergency chart; many of these items can be kept.',
    },
    {
      situation: 'Raw meat juices leaked onto other foods',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard contaminated food and clean the affected surfaces.',
    },
    {
      situation: 'Refrigerator remains above 40°F after the door is closed',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Move perishables to safe cold storage and have the appliance checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Close the door and check the temperature',
      body: 'Use an appliance thermometer if you have one. USDA and FDA recommend keeping the refrigerator at 40°F or below.',
    },
    {
      title: 'Measure questionable perishable food',
      body: 'A food thermometer can give you better information than touching the package. If the food remained at 40°F or below, it stayed within the recommended refrigerated range.',
    },
    {
      title: 'Sort foods by type',
      body: 'Do not empty the whole refrigerator automatically. Meat, poultry, seafood, milk, eggs, soft cheeses and leftovers need stricter treatment. Hard cheeses, butter, whole produce and many acidic condiments can often be kept under USDA emergency guidance.',
    },
    {
      title: 'Discard perishables that crossed the limit',
      body: 'Throw away perishable food that was above 40°F for more than two hours. Do not taste it to decide whether it is safe.',
    },
    {
      title: 'Check why the door stayed open',
      body: 'Make sure a container, drawer or shelf is not blocking the door. Check the gasket and confirm the refrigerator can return to and hold 40°F or below.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Perishable food was above 40°F for more than two hours',
      description: 'USDA and FDA advise discarding it.',
      severity: 'danger',
    },
    {
      title: 'The temperature is unknown and perishable food feels warm',
      description: 'USDA advises discarding the perishable items.',
      severity: 'warning',
    },
    {
      title: 'Raw meat, poultry or fish juices contaminated other food',
      description: 'Discard contaminated foods that cannot be safely cleaned or cooked.',
      severity: 'warning',
    },
    {
      title: 'The refrigerator will not return to 40°F or below',
      description: 'Move perishables to safe cold storage and address the appliance problem.',
      severity: 'warning',
    },
    {
      title: 'Someone wants to taste questionable food to test it',
      description: 'USDA says never taste food to determine its safety.',
      severity: 'warning',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is food safe if the refrigerator door was left open overnight?',
      answer: 'It can be. USDA says the food is safe if the refrigerator kept operating and stayed at 40°F or below. If the temperature is unknown and perishable food feels warm, discard those perishables.',
    },
    {
      question: 'What if the refrigerator door was only slightly open?',
      answer: 'A small gap does not automatically make the food unsafe. Temperature decides it. USDA says food is safe if the refrigerator stayed at 40°F or below.',
    },
    {
      question: 'What if the door was open for less than two hours?',
      answer: 'USDA says the food is safe to use when the refrigerator door was ajar for less than two hours.',
    },
    {
      question: 'Which foods should I throw away first?',
      answer: 'Meat, poultry, seafood, milk, eggs, soft cheeses, leftovers, deli meats, cooked rice or pasta and similar perishables are among the foods USDA tells consumers to discard after unsafe warm exposure.',
    },
    {
      question: 'Do I have to throw away ketchup, mustard and pickles?',
      answer: 'Usually not. USDA lists mustard, ketchup, relishes, pickles, jams, jellies and several similar condiments among foods that can be kept after warmer refrigerator conditions.',
    },
    {
      question: 'What about butter and hard cheese?',
      answer: "USDA lists butter, margarine, hard cheeses and processed cheeses among foods that can be kept in its emergency refrigerator chart.",
    },
    {
      question: 'Can I smell the food to see whether it is safe?',
      answer: 'No. FDA and USDA warn that appearance and odor cannot reliably establish safety after a temperature problem. Never taste questionable food as a test.',
    },
    {
      question: 'Will cooking warm meat make it safe again?',
      answer: 'Do not use cooking as a rescue for meat that exceeded the official time and temperature limits. FDA warns that inadequately refrigerated perishable foods may cause illness even when thoroughly cooked.',
    },
    {
      question: 'Should I buy a refrigerator thermometer?',
      answer: 'Yes. USDA and FDA both recommend appliance thermometers because they give you the temperature needed to make decisions after a door is left open or the power fails.',
    },
    {
      question: 'Why is my refrigerator still warm after I closed the door?',
      answer: 'It may need time to remove the warm air that entered. If it cannot return to 40°F or below, check that the door seals fully and arrange appliance service if the temperature remains too high.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Refrigerator appliance thermometer',
      description: 'The simplest way to know whether the refrigerator stayed at the recommended 40°F or below.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Food thermometer',
      description: 'Useful for checking individual perishable foods when the refrigerator temperature history is uncertain.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Insulated cooler with ice or frozen gel packs',
      description: 'Temporary cold storage for food that is still safe when the refrigerator cannot hold 40°F or below.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'USDA emergency food-safety chart',
      description: 'Lists which refrigerated foods to keep and which to discard after unsafe temperature exposure.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Our Refrigerator Door Was Left Open Overnight. Is the Food Safe?',
      url: 'https://ask.fsis.usda.gov/article/Our-refrigerator-door-was-left-open-overnight-Is-the-food-safe',
      sourceType: 'government',
      notes: 'Direct USDA answer for this exact problem. USDA says food is safe if the refrigerator kept operating and stayed at 40°F or below, says food is safe if the door was ajar for less than two hours, and advises discarding perishables if temperature is unknown and the food feels warm.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Keep Your Food Safe During Emergencies: Power Outages, Floods & Fires',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/emergencies/keep-your-food-safe-during-emergencies',
      sourceType: 'government',
      notes: 'USDA provides the food-by-food keep-or-discard chart used to distinguish temperature-sensitive perishables from foods such as hard cheese, butter, whole produce and many condiments.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Keeping Food Safe During an Emergency',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/keeping-food-safe-during',
      sourceType: 'government',
      notes: 'USDA states that refrigerated food should be held at 40°F or below, advises never tasting food to determine safety and gives the two-hour-above-40°F discard guidance for many perishable foods.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Refrigerator Thermometers - Cold Facts About Food Safety',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety',
      sourceType: 'government',
      notes: 'FDA recommends refrigerator thermometers, a refrigerator temperature of 40°F or below and discarding perishables when safe time and temperature limits cannot be established.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Are You Storing Food Safely?',
      url: 'https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely',
      sourceType: 'government',
      notes: 'FDA recommends keeping refrigerators at or below 40°F and explains the two-hour rule for perishable foods outside safe refrigeration.',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Food Safety During Power Outage',
      url: 'https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage',
      sourceType: 'government',
      notes: 'U.S. government food-safety chart showing which specific refrigerated foods should be discarded or kept after exposure above 40°F for more than two hours.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'fridge-not-cold-enough', anchorText: 'Can I ignore a refrigerator that is not cold enough?', relationshipType: 'escalation' },
    { slug: 'freezer-door-left-open', anchorText: 'Can I ignore a freezer door left open overnight?', relationshipType: 'sibling' },
    { slug: 'milk-left-out', anchorText: 'Can I ignore milk that was left out too long?', relationshipType: 'related' },
    { slug: 'leftovers-left-out', anchorText: 'Can I ignore leftovers left out at room temperature?', relationshipType: 'related' },
    { slug: 'freezer-burn', anchorText: 'Can I ignore freezer burn on frozen food?', relationshipType: 'sibling' },
  ],
};
