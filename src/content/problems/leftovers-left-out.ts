import type { ProblemSeed } from '../types';

/**
 * Food & Kitchen > Refrigeration > Food Safety > Food Left Out Overnight.
 *
 * The distinction the page is built around: this is not a judgement call.
 * USDA answers it directly — perishable food left out overnight is thrown
 * away — and the reason people get it wrong is that the food looks and
 * smells fine, and that reheating feels like it should fix it. Some
 * bacteria leave behind toxins that heat does not destroy, which is why
 * "I'll just microwave it" is the dangerous part of this page.
 *
 * Reserved slug: `leftovers-left-out` was a bare draft in
 * planned-food-safety-problems.ts. That entry is removed in favour of this file.
 */
export const leftoversLeftOut: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'food-safety',
  slug: 'leftovers-left-out',
  canonicalPath: '/food-kitchen/refrigeration/food-safety/leftovers-left-out/',
  name: 'Food Left Out Overnight',
  eyebrow: 'Food & Kitchen · Refrigeration · Food Safety',

  h1: 'Can I Ignore Food Left Out Overnight?',
  seoTitle: 'Food Left Out Overnight: Is It Still Safe? | Can I Ignore It',
  metaDescription:
    'USDA answers this one plainly: perishable food left out overnight gets thrown away. See why reheating does not fix it and what is actually fine to keep.',

  aliases: ['/food-kitchen/refrigeration/food-safety/food-left-out-overnight/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'medium',
  safetyRisk: 'high',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I still eat it?',
  canIUseItLabel: 'No, throw it out',

  shortAnswer:
    'No. USDA says perishable food left out of refrigeration for more than two hours should be discarded, and overnight is far past that. It does not matter that it looks fine, smells fine, or was covered. Throw it out.',

  whyItMattersHeading: 'Why Does Food Left Out Overnight Have to Go?',
  whyItMatters: [
    'USDA calls 40°F to 140°F the Danger Zone, and says bacteria in that range can double in number in as little as twenty minutes. A dish that sat on the counter from dinner until morning spent the whole night in it, cooling through the fastest-growing part of the range and staying there.',
    'Reheating is where people come unstuck. Some bacteria that grow on food left out, including Staphylococcus aureus, produce toxins that survive cooking temperatures. Killing the bacteria does not remove what they left behind, so a hot microwave does not undo the night on the counter.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Medical Advice If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'The USDA Danger Zone, the two-hour and one-hour limits, discard guidance for food left out overnight, heat-stable toxins and shelf-stable foods, checked against USDA FSIS and Ask USDA.',
  disclaimer:
    'General food-safety guidance for a home kitchen. It does not replace medical advice. Anyone pregnant, very young, elderly or immune-compromised should treat every borderline case as a discard, and seek advice sooner if symptoms appear.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'cooked-dinner-on-the-counter',
      label: 'Cooked dinner left on the counter all night',
      shortDescription: 'Meat, rice, pasta, casserole, curry — anything cooked and perishable.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Throw it out',
      resultBody:
        'This is the case USDA answers directly, and the answer is discard. Overnight is many times the limit, at the temperature bacteria like most.',
      recommendedAction: 'Bin it. Do not taste it to decide.',
    },
    {
      slug: 'pizza-or-takeout',
      label: 'Pizza or takeout left out overnight',
      shortDescription: 'Box on the counter, lid closed, still looks perfect.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Same rule, no exception',
      resultBody:
        'Cheese and cooked meat are perishable, and a cardboard box is not refrigeration. USDA applies the same discard guidance to take-out food.',
      recommendedAction: 'Throw it away, and refrigerate the next one within two hours.',
    },
    {
      slug: 'just-over-two-hours',
      label: 'It was out a bit longer than two hours',
      shortDescription: 'A long dinner, a distracted afternoon, food left on the table.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Past the line is past the line',
      resultBody:
        'USDA sets the limit at two hours for a reason, and there is no half-credit for being close to it. Perishable food past that gets discarded.',
      recommendedAction: 'Discard perishable items. Keep shelf-stable ones.',
    },
    {
      slug: 'hot-kitchen-or-outdoors',
      label: 'The room was hot, or it was outdoors in summer',
      shortDescription: 'A barbecue, a picnic table, a kitchen above 90°F.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The limit halves',
      resultBody:
        'Above 90°F, USDA cuts the window to one hour. Food left out through a hot night is well past that.',
      recommendedAction: 'Discard it, and use a cooler with ice for the next event.',
    },
    {
      slug: 'covered-or-left-in-the-oven',
      label: 'It was covered, or left in the switched-off oven',
      shortDescription: 'Foil over the top, a lid on the pot, or the oven door shut.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Covering changes nothing',
      resultBody:
        'A lid keeps flies off. It does not keep the food out of the Danger Zone, and a cooling oven holds the warmth bacteria prefer.',
      recommendedAction: 'Discard it.',
    },
    {
      slug: 'bread-and-dry-food',
      label: 'Bread, cookies, crackers or chips',
      shortDescription: 'Dry, shelf-stable food left out.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Fine to keep',
      resultBody:
        'Dry shelf-stable food is not perishable and is meant to live at room temperature. Staleness is the only thing at stake.',
      recommendedAction: 'Reseal it and carry on.',
    },
    {
      slug: 'whole-fruit-and-vegetables',
      label: 'Whole uncut fruit or vegetables',
      shortDescription: 'Apples, bananas, onions, potatoes on the counter.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'No problem',
      resultBody:
        'Whole produce is stored at room temperature routinely. Once it is cut, it becomes perishable and the two-hour rule applies again.',
      recommendedAction: 'Leave whole produce out. Refrigerate anything you have already cut.',
    },
    {
      slug: 'left-on-warm-in-a-slow-cooker',
      label: 'It stayed in a slow cooker set to warm',
      shortDescription: 'The appliance was on all night, not switched off.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Depends whether it stayed above 140°F',
      resultBody:
        'Held above 140°F, food stays out of the Danger Zone. A warm setting that drifts below it does not, and you cannot tell which happened by looking.',
      recommendedAction: 'Check the temperature with a food thermometer now. If it is below 140°F, discard it.',
    },
    {
      slug: 'already-ate-some',
      label: 'Someone has already eaten it',
      shortDescription: 'Breakfast before anyone thought about it.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop, and watch for symptoms',
      resultBody:
        'Most people are fine. Staph toxin acts quickly, so nausea, vomiting or cramps that come on fast are the signal to take seriously.',
      recommendedAction: 'Throw the rest away, keep fluids up, and get medical advice if symptoms are severe or do not settle.',
    },
    {
      slug: 'baby-or-vulnerable-person',
      label: 'It would be eaten by a child, an older adult or someone pregnant',
      shortDescription: 'Anyone with a higher risk of serious illness.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'No margin at all here',
      resultBody:
        'Foodborne illness that is unpleasant for a healthy adult can be dangerous for these groups. Borderline cases are discards.',
      recommendedAction: 'Throw it out without weighing it up.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'The first hour or two',
      title: 'The food cools into the Danger Zone',
      description: 'Anything that came off the stove passes down through 140°F and settles at room temperature.',
      severity: 'info',
      chainLabel: 'Food enters the Danger Zone',
    },
    {
      stageLabel: 'Through the night',
      title: 'Bacteria multiply fast',
      description: 'USDA says numbers can double in as little as twenty minutes at these temperatures.',
      severity: 'caution',
      chainLabel: 'Bacteria multiply',
    },
    {
      stageLabel: 'Through the night',
      title: 'Some of them produce toxins',
      description: 'Staphylococcus aureus is the common one, and what it leaves behind is not alive.',
      severity: 'warning',
      chainLabel: 'Toxins build up',
    },
    {
      stageLabel: 'The next morning',
      title: 'Reheating kills the bacteria and not the toxin',
      description: 'The food comes out steaming and tasting normal. Nothing about that reverses the night.',
      severity: 'warning',
      chainLabel: 'Reheating does not remove them',
    },
    {
      stageLabel: 'Hours after eating',
      title: 'Food poisoning',
      description: 'Vomiting and cramps that arrive quickly, and land hardest on the people least able to take it.',
      severity: 'danger',
      chainLabel: 'Food poisoning',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Perishable food, out under two hours',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Refrigerate it now, in a shallow container so it cools fast.',
    },
    {
      situation: 'Perishable food, out over two hours',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard it.',
    },
    {
      situation: 'Perishable food, room above 90°F',
      ignoreAnswer: 'Only under an hour',
      severity: 'warning',
      whatToDo: 'Discard anything past that.',
    },
    {
      situation: 'Left out overnight, any perishable food',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Throw it away without tasting it.',
    },
    {
      situation: 'Bread, crackers, whole uncut produce',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Keep it. These live at room temperature.',
    },
    {
      situation: 'Held in an appliance above 140°F all night',
      ignoreAnswer: 'Yes, if it truly stayed above it',
      severity: 'caution',
      whatToDo: 'Check with a food thermometer before deciding.',
    },
    {
      situation: 'Someone already ate it',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Bin the rest and watch for symptoms coming on quickly.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Throw the perishable food away',
      body: 'Meat, poultry, fish, eggs, dairy, cooked rice and pasta, cut fruit, anything with a sauce. Bin it rather than feeding it to a pet.',
    },
    {
      title: 'Keep what was never at risk',
      body: 'Bread, dry snacks and whole uncut produce are fine. Sorting the counter into these two groups is the whole decision.',
    },
    {
      title: 'Do not try to rescue it by reheating',
      body: 'Heat kills bacteria and leaves their toxins in place. This is the specific mistake that turns leftovers into an illness.',
    },
    {
      title: 'Cool the next batch properly',
      body: 'USDA says refrigerate leftovers within two hours, in shallow containers so the middle drops below 40°F quickly. A deep pot in the fridge stays warm inside for hours.',
      destinationProblemSlug: 'fridge-not-cold-enough',
      destinationLabel: 'If your fridge runs warm',
    },
    {
      title: 'Set a timer when food goes on the table',
      body: 'The two-hour clock starts when it leaves the heat, not when the meal ends. A phone timer is what stops this happening again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Vomiting or diarrhea that will not stop',
      description: 'Dehydration is the thing that puts people in hospital.',
      severity: 'danger',
    },
    {
      title: 'A fever, bloody stools, or symptoms lasting more than a couple of days',
      severity: 'danger',
    },
    {
      title: 'Symptoms in an infant, an older adult, or someone pregnant',
      description: 'Do not wait to see how it develops.',
      severity: 'danger',
    },
    {
      title: 'Signs of dehydration — dizziness, very little urine, a dry mouth',
      severity: 'warning',
    },
    {
      title: 'Anyone who is immune-compromised has eaten it',
      severity: 'warning',
    },
    {
      title: 'Several people who ate the same dish are ill',
      description: 'Worth reporting to your local health department.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'It smells fine. Can I eat it?',
      answer: 'No. The bacteria that make you ill do not change how food smells, looks or tastes. Smell only catches spoilage, which is a different thing.',
    },
    {
      question: 'What if I boil it hard?',
      answer:
        'Boiling kills bacteria but not the toxins some of them leave behind. USDA guidance is to discard the food, not to cook it harder.',
    },
    {
      question: 'How long can food actually sit out?',
      answer: 'Two hours at normal room temperature, one hour if the air is above 90°F. Both are counted from when it left the heat or the fridge.',
    },
    {
      question: 'Does it matter that it was covered?',
      answer: 'No. A lid or foil keeps insects and dust off. It has no effect on temperature, which is what actually matters.',
    },
    {
      question: 'What about rice or pasta specifically?',
      answer:
        'Cooked rice and pasta are perishable and follow the same rule. They are also a common cause of illness after being left out, so they are not the ones to gamble on.',
    },
    {
      question: 'Is butter left out a problem?',
      answer:
        'Butter is often kept out deliberately in a covered dish, and it is far less risky than cooked food. It is not what this guidance is about.',
    },
    {
      question: 'The food was still slightly warm in the morning. Is that better?',
      answer: 'No, worse. Warm means it stayed in the range bacteria grow fastest in for longer.',
    },
    {
      question: 'Can I feed it to the dog?',
      answer: 'Not a good idea. The same toxins affect animals, and dogs are worse at telling you they feel ill.',
    },
    {
      question: 'How quickly would I get sick?',
      answer: 'Staph toxin can act within a few hours. Other organisms take a day or more, which is why the source is often never identified.',
    },
    {
      question: 'What if only part of the dish was left out?',
      answer: 'Discard the part that was out. The portion that went into the fridge on time is unaffected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: '"Danger Zone" (40°F – 140°F)',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/danger-zone-40f-140f',
      sourceType: 'government',
      notes:
        'FSIS states that bacteria grow most rapidly between 40°F and 140°F, doubling in number in as little as 20 minutes, and that perishable food should never be left out of refrigeration for more than two hours, or one hour above 90°F.',
    },
    {
      publisher: 'U.S. Department of Agriculture',
      title: 'Ask USDA: What is the 2-Hour Rule with leaving food out?',
      url: 'https://ask.usda.gov/s/article/What-is-the-2-Hour-Rule-with-leaving-food-out',
      sourceType: 'government',
      notes:
        'USDA answers the overnight case directly: food left out overnight should be thrown out, and states that bacteria growing at room temperature can reach levels that cause illness.',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'How Temperatures Affect Food',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/how-temperatures-affect-food',
      sourceType: 'government',
      notes:
        'FSIS describes bacterial growth by temperature range and notes that some bacteria produce heat-stable toxins that cooking does not destroy.',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Safe Handling of Take-Out Foods',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-handling-take-out-foods',
      sourceType: 'government',
      notes: 'FSIS applies the same two-hour discard rule to take-out and delivered food, and covers holding food hot above 140°F.',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: "Leftovers: Let's Keep the Best Part of Thanksgiving Safe",
      url: 'https://www.fsis.usda.gov/news-events/news-press-releases/leftovers-lets-keep-best-part-thanksgiving-safe',
      sourceType: 'government',
      notes: 'FSIS advises refrigerating leftovers within two hours in shallow containers so they cool quickly to 40°F or below.',
    },
    {
      publisher: 'U.S. Department of Agriculture',
      title: 'Leftovers: The Gift That Keeps on Giving',
      url: 'https://www.usda.gov/about-usda/news/blog/leftovers-gift-keeps-giving',
      sourceType: 'government',
      notes: 'USDA consumer guidance on storing, reheating and discarding leftovers.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'A digital food thermometer',
      description: 'The only way to know whether something held above 140°F all night actually did.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Shallow storage containers',
      description: 'USDA asks for shallow ones so the middle of the food cools inside the two-hour window.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'A fridge thermometer',
      description: 'Confirms the fridge is at 40°F or below, which is what the two-hour rule assumes on the other end.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'FoodSafety.gov and the USDA Meat and Poultry Hotline',
      description: 'For the cases this page does not cover — recalls, illness after eating, and unusual foods.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'refrigerator-door-left-open-overnight',
      anchorText: 'Can I ignore a refrigerator door left open overnight?',
      relationshipType: 'sibling',
    },
    { slug: 'milk-left-out', anchorText: 'Can I ignore milk that was left out too long?', relationshipType: 'sibling' },
    { slug: 'fridge-not-cold-enough', anchorText: 'Can I ignore a refrigerator that is not cold enough?', relationshipType: 'cause' },
    { slug: 'freezer-burn', anchorText: 'Can I ignore freezer burn on frozen food?', relationshipType: 'related' },
    { slug: 'partially-thawed-frozen-food', anchorText: 'Can I ignore frozen food that partially thawed?', relationshipType: 'related' },
  ],
};
