import type { ProblemSeed } from '../types';

/**
 * Food & Kitchen > Food Storage > Pantry > Dented Can.
 *
 * The distinction the page is built around: USDA says a small dent on a
 * can that is otherwise in good shape is safe, so most dented cans are
 * fine. What matters is whether the dent could have broken the seal — a
 * sharp crease, a dent on a seam, or any bulging, leaking or badly rusted
 * can. Those are the botulism warnings, and the rule there is absolute:
 * do not taste it to find out.
 */
export const dentedCan: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'pantry',
  slug: 'dented-can',
  canonicalPath: '/food-kitchen/food-storage/pantry/dented-can/',
  name: 'Dented Can',
  eyebrow: 'Food & Kitchen · Food Storage · Pantry',

  h1: 'Can I Ignore a Dented Can?',
  seoTitle: 'Dented Can: Is the Food Inside Still Safe? | Can I Ignore It',
  metaDescription:
    'Most dented cans are fine, and USDA says so. See which dents actually matter, which cans go straight in the bin, and why tasting is never the test.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'Usually yes, if the dent is shallow',

  shortAnswer:
    'Usually yes. USDA says food from a can with a small dent, otherwise in good shape, is safe to eat. What you do not eat is anything from a can that is bulging, leaking, badly rusted, or deeply dented — especially on a seam.',

  whyItMattersHeading: 'Why Does the Kind of Dent Matter?',
  whyItMatters: [
    'A can keeps food safe by being sealed. The metal is thin and dents easily, and a shallow dent in the middle of the body changes nothing about the seal. That is why USDA is relaxed about small dents and specific about the rest.',
    'The dents that count are the ones that could have opened a path in. Sharp creases and dents on the top, bottom or side seams can break the seal, and once air and bacteria get in, Clostridium botulinum can grow in the low-oxygen environment inside. Botulinum toxin is deadly in tiny amounts, and it does not announce itself by taste.',
  ].join('\n\n'),

  redFlagsHeading: 'Throw the Can Away Unopened If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Shallow versus deep and seam dents, the USDA damage criteria for discarding a can, bulging, leaking and rusted cans, and botulism warning signs, checked against USDA FSIS and Ask USDA.',
  disclaimer:
    'General guidance for commercially canned food. Home-canned food, especially low-acid vegetables and meats, carries a different and higher botulism risk and is not covered here.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'shallow-dent-on-the-body',
      label: 'A shallow dent in the side, seams intact',
      shortDescription: 'The kind a can picks up in a shopping bag.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Safe to use',
      resultBody:
        'USDA says a can with a small dent that is otherwise in good shape is safe. The seal is at the seams, and the seams are untouched.',
      recommendedAction: 'Use it as normal, and use it before the undamaged ones.',
    },
    {
      slug: 'dent-on-a-seam',
      label: 'The dent is on the top, bottom or side seam',
      shortDescription: 'On the rim or the welded line rather than the flat face.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'That is where the seal is',
      resultBody:
        'A seam dent can break the seal without leaving anything you can see. USDA treats compromised seams as a reason to throw the can out.',
      recommendedAction: 'Discard it unopened.',
    },
    {
      slug: 'sharp-crease-deep-dent',
      label: 'A deep dent with a sharp point or crease',
      shortDescription: 'Deep enough to lay a fingertip in, with an edge to it.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Sharp dents can puncture from the inside',
      resultBody:
        'The metal stretches and can split along the crease. USDA lists deep denting among the damage that means discarding the can.',
      recommendedAction: 'Discard it. A tiny split is enough to let bacteria in.',
    },
    {
      slug: 'bulging-can',
      label: 'The can is swollen or the lid domes up',
      shortDescription: 'The ends bulge, or a lid pops when pressed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Gas inside — this is the botulism warning',
      resultBody:
        'Swelling means something is producing gas in there. USDA names bulging cans among the containers never to use.',
      recommendedAction: 'Do not open it, do not taste it. Bag it and bin it.',
      },
    {
      slug: 'leaking-or-sticky',
      label: 'It is leaking, sticky or stained',
      shortDescription: 'Dried residue on the can or the shelf beneath it.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The seal has already failed',
      resultBody:
        'Anything that came out means air went in. USDA lists leaking cans alongside bulging ones as containers never to use.',
      recommendedAction: 'Discard it and clean the shelf it was standing on.',
    },
    {
      slug: 'badly-rusted',
      label: 'It is rusty',
      shortDescription: 'Surface speckles, or deep rust you can feel.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Depends how deep it goes',
      resultBody:
        'Light surface rust that wipes off leaves the can intact. Extensive deep rusting is on USDA’s discard list, because rust eats through.',
      recommendedAction: 'Wipe it. If pitting or roughness remains under the rust, throw it out.',
    },
    {
      slug: 'spurts-when-opened',
      label: 'It sprays, or hisses unusually hard, when you open it',
      shortDescription: 'Liquid spurts, or a foul or unexpected smell comes out.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop there',
      resultBody:
        'What USDA lists as warnings is liquid that spurts out and a foul or unexpected odour. A can that simply releases its vacuum with a short hiss is not what that describes. The warnings apply even if the can looked perfect on the shelf.',
      recommendedAction: 'Do not taste it. Discard the contents where nobody and no animal can reach them, and wash everything it touched.',
    },
    {
      slug: 'wont-fit-a-can-opener',
      label: 'It is too crushed for a can opener to grip',
      shortDescription: 'The rim is deformed enough that the wheel will not run.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'USDA uses this as the test',
      resultBody:
        'Denting severe enough to stop a manual wheel-type opener working, or to stop the can stacking normally, is on the discard list.',
      recommendedAction: 'Throw it away rather than forcing it open.',
    },
    {
      slug: 'dented-in-the-freezer-or-flood',
      label: 'The can froze, or was in a flood',
      shortDescription: 'Left in a cold car, or covered by flood water.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Seams and contamination, not the dent',
      resultBody:
        'Freezing expands the contents and can burst the seams. Flood water contaminates the outside of every can it touches.',
      recommendedAction: 'Discard burst or rusted cans. Follow USDA flood guidance for the rest before using any of them.',
    },
    {
      slug: 'already-eaten-from-a-suspect-can',
      label: 'Someone has already eaten from a suspect can',
      shortDescription: 'Bulging, leaking, or it smelled wrong going in.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat it as urgent',
      resultBody:
        'Botulism symptoms start with blurred or double vision, drooping eyelids, slurred speech and trouble swallowing, and get worse.',
      recommendedAction: 'Get emergency medical help now, or call poison control, and do what they tell you about the can.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'The dent happens',
      title: 'The metal stretches',
      description: 'A shallow dent in the body flexes the steel and leaves the seams alone.',
      severity: 'info',
      chainLabel: 'Can is dented',
    },
    {
      stageLabel: 'If the dent hit a seam',
      title: 'The seal opens a fraction',
      description: 'A crease across a seam can part it by an amount too small to see or feel.',
      severity: 'caution',
      chainLabel: 'Seal broken',
    },
    {
      stageLabel: 'On the shelf',
      title: 'Air and bacteria get in',
      description: 'The can stops being sterile from that moment, however normal it still looks.',
      severity: 'warning',
      chainLabel: 'Contamination enters',
    },
    {
      stageLabel: 'Weeks to months',
      title: 'Bacteria grow in a low-oxygen space',
      description: 'The inside of a sealed can is exactly the environment Clostridium botulinum needs.',
      severity: 'warning',
      chainLabel: 'Botulinum grows',
    },
    {
      stageLabel: 'When it is opened',
      title: 'Toxin that tasting cannot detect',
      description: 'Botulism is rare and it is severe: paralysis that starts at the eyes and face and can stop the breathing muscles.',
      severity: 'danger',
      chainLabel: 'Botulism',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Shallow dent on the body, seams clean',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Use it normally, ahead of your undented stock.',
    },
    {
      situation: 'Dent on any seam',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard it without opening it.',
    },
    {
      situation: 'Deep dent with a sharp crease',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard it — the metal may have split.',
    },
    {
      situation: 'Light surface rust only',
      ignoreAnswer: 'Yes, once wiped',
      severity: 'caution',
      whatToDo: 'Check for pitting underneath before using it.',
    },
    {
      situation: 'Bulging, swollen or leaking',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Bin it sealed. Do not open it to check.',
    },
    {
      situation: 'Foul smell or spurting liquid on opening',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Discard it safely and wash everything it touched.',
    },
    {
      situation: 'Anyone has eaten from a suspect can',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Get emergency medical care or call poison control now, and follow their instructions on the can.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Run a finger around the seams',
      body: 'Top rim, bottom rim, and the welded line up the side. A dent that touches any of them is the one that matters.',
    },
    {
      title: 'Look at the shape of the dent, not the size',
      body: 'Smooth and shallow is fine. Sharp, creased, or deep enough to lay a fingertip into is a discard.',
    },
    {
      title: 'Press the ends',
      body: 'They should be flat or slightly concave. A lid that domes up, or pops in and out, means gas inside.',
      destinationProblemSlug: 'bulging-can',
      destinationLabel: 'More on bulging cans',
    },
    {
      title: 'Bin a suspect can sealed',
      body: 'Bag it before it goes in the trash so nothing else gets into it. Never pour a suspect can down the sink or feed it to an animal.',
    },
    {
      title: 'Use the dented ones first',
      body: 'A safe dented can is still worth eating sooner. Move it to the front of the shelf rather than to the back.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The can is swollen or the lid bulges',
      description: 'Gas inside. USDA lists this among the containers never to use.',
      severity: 'danger',
    },
    {
      title: 'It is leaking, or sticky where it has leaked before',
      severity: 'danger',
    },
    {
      title: 'Liquid spurts out when you open it',
      severity: 'danger',
    },
    {
      title: 'A foul or unexpected smell from the contents',
      severity: 'danger',
    },
    {
      title: 'Extensive deep rust, or pitting you can feel',
      severity: 'warning',
    },
    {
      title: 'The dent crosses a seam, or is sharp and deep',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Are dented cans in the discount bin safe?',
      answer:
        'The shallow-dented ones are, by USDA’s own criteria. Check the seams and the ends of each one before you buy, because the bin mixes them together.',
    },
    {
      question: 'How deep is too deep?',
      answer:
        'USDA’s practical test is whether the denting stops the can stacking normally or stops a manual wheel-type opener from working. Sharpness matters more than depth.',
    },
    {
      question: 'Can I tell by tasting it?',
      answer: 'No, and this is the one to take seriously. Botulinum toxin is deadly in tiny amounts and does not change the taste.',
    },
    {
      question: 'What if I boil the food first?',
      answer:
        'Do not rely on it. The safe response to a suspect can is discarding it, not cooking it, and opening a bulging can spreads what is inside.',
    },
    {
      question: 'Is a dented can worse than an expired one?',
      answer:
        'Generally yes. A date on a can is about quality; a broken seal is about safety. Both matter, but the seal is the one that makes people ill.',
    },
    {
      question: 'What about a dent in a can of soda?',
      answer:
        'Carbonated drinks are pressurised, so a failed seal usually shows as a flat or leaking can. The same rules on bulging and leaking apply.',
    },
    {
      question: 'How common is botulism from canned food?',
      answer:
        'Rare in commercially canned food, which is why most dented cans are safe. It is severe enough that the warning signs are treated as absolute.',
    },
    {
      question: 'The can was dented and I already ate it. What now?',
      answer:
        'If it was only a shallow body dent, nothing to do. If the can was bulging, leaking or smelled wrong, get advice now rather than waiting for symptoms — emergency medical help if anyone feels unwell, poison control otherwise.',
    },
    {
      question: 'Can I still use it if I decant it straight away?',
      answer: 'Moving the food does not undo a broken seal. The question is whether contamination got in before you opened it.',
    },
    {
      question: 'Should I keep a suspect can as evidence?',
      answer:
        'If anyone has eaten from it, ask the medical service or poison control what they want done with it, and follow that. Otherwise seal it and bin it.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Shelf-Stable Food Safety',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food',
      sourceType: 'government',
      notes:
        'FSIS advises against buying bulging, rusted, leaking or deeply dented cans, describes damage as swelling, leakage, punctures, holes, fractures, extensive deep rusting or denting severe enough to prevent normal stacking or opening with a manual wheel-type opener, and lists the botulism warning signs including spurting liquid and foul odour.',
    },
    {
      publisher: 'U.S. Department of Agriculture',
      title: 'Ask USDA: Is it safe to use food from dented cans?',
      url: 'https://ask.usda.gov/s/article/Is-it-safe-to-use-food-from-dented-cans',
      sourceType: 'government',
      notes:
        'USDA states that if a can containing food has a small dent but is otherwise in good shape, the food should be safe to eat.',
    },
    {
      publisher: 'U.S. Department of Agriculture',
      title: 'Ask USDA: Is food in damaged cans dangerous?',
      url: 'https://ask.usda.gov/s/article/Is-food-in-damaged-cans-dangerous',
      sourceType: 'government',
      notes:
        'USDA describes why cans swell, including contamination with Clostridium botulinum, and notes that a minuscule amount of botulinum toxin can be deadly.',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: "A Consumer's Guide to Food Safety: Severe Storms and Hurricanes",
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/emergencies/consumers-guide-food-safety-severe',
      sourceType: 'government',
      notes: 'FSIS guidance on cans that have been through flood water or freezing, including which can be salvaged and how.',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Meat and Poultry Packaging Materials',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/meat-and-poultry-packaging',
      sourceType: 'government',
      notes: 'FSIS explains how metal cans are constructed and sealed at the seams, and says to discard cans whose seams have rusted or burst.',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Clostridium botulinum Illness Potentially Associated With Canned Food: After-Action Review',
      url: 'https://www.fsis.usda.gov/sites/default/files/media_file/documents/FSIS-After-Action-Review-2022-03.pdf',
      sourceType: 'government',
      notes: 'FSIS review material on botulism risk associated with canned product, used here for the seriousness of the hazard rather than for consumer steps.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'A manual wheel-type can opener',
      description: 'Doubles as USDA’s test: if it cannot grip the rim, the can is too damaged to use.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Sealable bags for disposal',
      description: 'A suspect can goes in the trash sealed, so nothing gets into it afterwards.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'The USDA Meat and Poultry Hotline',
      description: 'Staffed food-safety specialists for the cases a page cannot settle.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'FoodSafety.gov recall alerts',
      description: 'Worth checking when several cans of the same product look wrong.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'bulging-can', anchorText: 'Can I ignore a can with a bulging lid?', relationshipType: 'escalation' },
    { slug: 'rusty-can', anchorText: 'Can I ignore rust on a food can?', relationshipType: 'sibling' },
    { slug: 'expired-canned-food', anchorText: 'Can I ignore the date on a can of food?', relationshipType: 'sibling' },
    { slug: 'can-that-hisses-when-opened', anchorText: 'Can I ignore a can that hisses or spurts when opened?', relationshipType: 'escalation' },
    { slug: 'leftovers-left-out', anchorText: 'Can I ignore food left out overnight?', relationshipType: 'related' },
  ],
};
