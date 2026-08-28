import type { ProblemSeed } from '../types';

/**
 * Cars > Exhaust > Water Dripping From Exhaust.
 *
 * Every factual claim below traces to one of the four sources at the bottom
 * of this file — principally the chemistry of combustion (EPA) and two
 * separate branches of manufacturer service information: routine condensate
 * drainage (GM) versus a documented coolant-intrusion failure mode (Ford).
 *
 * Main editorial distinction: normal exhaust condensation and an internal
 * coolant problem are separate branches. Normal condensation does not
 * "progress into" a coolant leak — the scenarios and consequence chain below
 * are written so the two never read as one linear story.
 */
export const waterDrippingFromExhaust: ProblemSeed = {
  systemSlug: 'exhaust',
  slug: 'water-dripping-from-exhaust',
  canonicalPath: '/cars/exhaust/water-dripping-from-exhaust/',
  name: 'Water Dripping From Exhaust',
  eyebrow: 'Cars · Exhaust',

  h1: 'Can I Ignore Water Dripping From My Exhaust?',
  seoTitle: 'Water Coming Out of Your Exhaust: Is It Normal? | Can I Ignore It',
  metaDescription:
    'Clear water dripping from a car exhaust is usually normal condensation. See when you can ignore it and which signs point to coolant or engine trouble instead.',

  status: 'published',
  indexable: true,

  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep driving?',
  canIUseItLabel: 'Yes, if it is only condensation',

  shortAnswer:
    "Yes. A few drops of clear water from the tailpipe are normal, especially after a cold start, in cool or humid weather, or on short trips — it's condensation from the water vapor combustion produces. If the engine runs normally with no coolant loss or overheating, ordinary clear condensation does not need a repair. Persistent thick white exhaust, falling coolant or an overheating warning can mean something else is going on.",

  whyItMattersHeading: 'Why Does Water Come Out of a Car Exhaust?',
  whyItMatters: [
    "Burning gasoline or diesel produces water vapor — hydrogen from the fuel combines with oxygen during combustion, and the EPA lists water as a normal product of it, along with CO2. When the exhaust system is still cool, some of that vapor condenses into liquid water and drains out through the tailpipe. That's why you'll see it most around cold starts, cool weather, idling and short trips.",
    'Clear water with an otherwise normal-running car is condensation. Persistent thick white exhaust, falling coolant or an overheating warning point to something else — coolant getting into the intake, combustion or exhaust path — and that needs diagnosis.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Ignoring It If You Notice:',

  lastReviewedAt: new Date('2026-08-27T00:00:00Z'),
  reviewScope:
    'Normal exhaust condensation, combustion water production and warning signs that distinguish condensation from possible coolant-related engine faults',
  disclaimer:
    "General automotive triage guidance only. This page applies primarily to vehicles with an internal-combustion engine, including hybrids while the engine is running. Clear exhaust condensation cannot diagnose the condition of an engine or exhaust system, and persistent white exhaust, coolant loss, overheating or abnormal engine operation requires vehicle-specific diagnosis. Follow the owner's manual if an overheating warning appears.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'clear-water-cold-start',
      label: 'A few drops of clear water appear after a cold start',
      shortDescription: 'The car runs normally and there are no warning lights or other symptoms.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'IGNORE IT',
      resultBody:
        'This is normal exhaust condensation. Fuel combustion produces water vapor, and a cold exhaust system cools some of it back into liquid.',
      recommendedAction: 'No repair is needed. Drive normally unless other symptoms appear.',
    },
    {
      slug: 'clear-water-short-trip',
      label: 'Clear water drips after a short trip or while idling',
      shortDescription: 'The liquid looks like water and the engine otherwise behaves normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'USUALLY NORMAL',
      resultBody:
        'Short trips and extended idling can leave parts of the exhaust cool enough for water vapor to condense. Exhaust systems drain that condensate during normal operation.',
      recommendedAction:
        'You do not need to fix ordinary condensation. Watch for coolant loss, persistent thick white exhaust or an overheating warning instead.',
    },
    {
      slug: 'thin-white-vapor-when-cold',
      label: 'There is thin white vapor with the water when the engine is cold',
      shortDescription: 'The vapor fades as the exhaust warms and the car otherwise feels normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'NORMAL WHEN COLD',
      resultBody:
        "Water vapor is easiest to see when the exhaust and outside air are cold. If it's light and clears up as the vehicle warms, it's the same condensation as the water droplets.",
      recommendedAction: "Drive normally. Get it checked if the exhaust stays thick and white once it's fully warm.",
    },
    {
      slug: 'persistent-water-no-other-symptoms',
      label: 'It keeps dripping even after I have been driving',
      shortDescription: 'There is still clear water, but no overheating, coolant loss or abnormal engine behavior.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'CHECK THE PATTERN, NOT THE CLOCK',
      resultBody:
        "How long condensation lasts depends on the weather and how the car is driven, so there's no fixed cutoff for clear water alone. If the car is running normally with no coolant loss or overheating, you do not need to time it.",
      recommendedAction:
        'Check the coolant level and watch for warning lights, rough running or thick white exhaust. Look into it only if one of those shows up.',
    },
    {
      slug: 'persistent-thick-white-exhaust',
      label: 'Thick white exhaust continues after the vehicle is warm',
      shortDescription: 'This looks different from a light cloud that disappears quickly on a cold start.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "DON'T CALL THIS NORMAL CONDENSATION",
      resultBody:
        "Thick white exhaust that continues after warm-up can mean coolant is getting into the intake, combustion or exhaust path. It's worth an inspection, not written off as condensation.",
      recommendedAction:
        'Check for other warning signs and arrange a professional inspection. If the vehicle is also overheating or losing coolant rapidly, stop driving when safe.',
    },
    {
      slug: 'coolant-loss-or-overheating',
      label: 'The coolant level is dropping or the car is overheating',
      shortDescription: 'Water or white exhaust is accompanied by a cooling-system warning sign.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP TREATING IT AS CONDENSATION',
      resultBody:
        "Coolant loss or an over-temperature warning means this isn't condensation anymore. It points to a cooling-system or engine fault that needs attention.",
      recommendedAction:
        "If the temperature warning is on or the engine is overheating, stop driving as soon as it is safe and follow the vehicle manufacturer's overheating instructions. Do not open a pressurized cooling-system cap while the engine is hot.",
    },
    {
      slug: 'rough-running-warning-light',
      label: 'The engine runs rough or a warning light appears with the white exhaust',
      shortDescription: 'The water is no longer the only symptom.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET THE ENGINE CHECKED',
      resultBody:
        "A rough-running engine or warning light isn't part of normal condensation. Coolant-related engine faults can show up together with white tailpipe exhaust.",
      recommendedAction:
        'Get the engine diagnosed. If the vehicle is overheating, losing power badly or feels unsafe, stop driving when safe.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  // Two branches, not one chain: the first three stages are the ordinary
  // condensation story and end in normal drainage. The last two are a
  // SEPARATE branch — coolant-related symptoms — not a continuation of it.
  consequences: [
    {
      stageLabel: 'NORMAL COMBUSTION',
      title: 'The engine produces water vapor',
      description:
        'Burning fuel combines hydrogen with oxygen and forms water, which leaves the engine mostly as vapor in the exhaust.',
      severity: 'info',
      chainLabel: 'Water vapor',
    },
    {
      stageLabel: 'WHEN THE EXHAUST IS COOL',
      title: 'Some of that vapor becomes liquid water',
      description:
        'Cool metal in the exhaust can chill that vapor below its dew point, so it collects as liquid in the pipes or muffler.',
      severity: 'info',
      chainLabel: 'Condensation',
    },
    {
      stageLabel: 'IF THAT IS ALL YOU ARE SEEING',
      title: 'The water drains out or evaporates',
      description:
        "A few clear drips with nothing else going on is not a failure — some exhaust systems even have drain holes built in for this.",
      severity: 'info',
      chainLabel: 'Normal drainage',
    },
    {
      stageLabel: 'WHEN IT MAY NOT BE CONDENSATION',
      title: 'Coolant-related symptoms are not normal condensation',
      description:
        "Persistent thick white exhaust with falling coolant, an over-temperature warning or abnormal engine operation means something else is wrong — not just more condensation.",
      severity: 'warning',
      chainLabel: 'Check other symptoms',
    },
    {
      stageLabel: 'IF A COOLANT FAULT IS IGNORED',
      title: 'Low coolant can lead to overheating and engine damage',
      description: 'A coolant leak can eventually cause overheating and engine damage.',
      severity: 'danger',
      chainLabel: 'Overheating risk',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A few clear drops after a cold start',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Nothing, if the car runs normally and there are no cooling-system warning signs.',
    },
    {
      situation: 'Clear water after a short trip or while idling',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Treat it as normal condensation if there are no other symptoms.',
    },
    {
      situation: 'Thin white vapor that disappears as the car warms',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'No action is normally required for the vapor or water alone.',
    },
    {
      situation: 'Clear water continues after the vehicle is warm',
      ignoreAnswer: 'Usually',
      severity: 'caution',
      whatToDo: 'Check for coolant loss, overheating, persistent thick white exhaust or abnormal engine behavior.',
    },
    {
      situation: 'Persistent thick white exhaust after warm-up',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange diagnosis and check for cooling-system symptoms.',
    },
    {
      situation: 'Coolant level keeps falling',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Have the cooling system and engine inspected.',
    },
    {
      situation: 'Over-temperature or overheating warning',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: "Stop driving as soon as it is safe and follow the vehicle manufacturer's overheating procedure.",
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Look at the whole pattern',
      body: 'A few clear drops with a normally running engine are usually condensation. Watch for persistent thick white exhaust, coolant loss, overheating or abnormal engine behavior.',
    },
    {
      title: 'Check for cooling-system warnings',
      body: "Look at the temperature gauge or warning display. If you have reason to check the coolant level, follow your vehicle owner's manual and only inspect the cooling system when it is safe to do so. Never remove a pressurized cooling-system cap from a hot engine.",
    },
    {
      title: 'Do nothing if it is ordinary condensation',
      body: 'Normal exhaust condensation needs no additive, cleaner or repair. If the car is otherwise normal, keep driving.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    { title: 'An engine over-temperature or overheating warning', severity: 'danger' },
    { title: 'The coolant level keeps dropping', severity: 'danger' },
    { title: 'Thick white exhaust continues after the vehicle is fully warm', severity: 'warning' },
    { title: 'The engine begins running rough, misfiring or losing power', severity: 'warning' },
    { title: 'A malfunction warning appears together with abnormal white exhaust', severity: 'warning' },
    { title: 'The vehicle no longer feels safe to drive', severity: 'danger' },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it normal for water to come out of a car exhaust?',
      answer:
        'Yes. A small amount of clear water is usually normal condensation, especially when the exhaust is cold and the car is otherwise running fine.',
    },
    {
      question: 'Why is there more water when I first start the car?',
      answer:
        'The exhaust is coolest at startup, so water vapor condenses more easily on the metal. As it warms up, more of the water stays vapor and the dripping usually drops off.',
    },
    {
      question: 'Does water from the exhaust mean the catalytic converter is working properly?',
      answer:
        'No. Water is a normal product of combustion, so seeing it does not tell you whether the catalytic converter is healthy.',
    },
    {
      question: 'What if water still comes out after the engine is warm?',
      answer:
        'Clear water can still be normal after the engine warms up, depending on weather and driving conditions. Coolant loss, overheating or persistent thick white exhaust is a reason to have the car checked.',
    },
    {
      question: 'Is white vapor from the exhaust normal too?',
      answer:
        'Light vapor on a cold start that clears up quickly can be normal. Thick white exhaust that stays after the vehicle is fully warm needs inspection.',
    },
    {
      question: 'Can I drive with water dripping from the exhaust?',
      answer:
        'Yes, if it is clear condensation and the car is otherwise running normally. Stop and investigate if the engine is overheating or showing other warning signs.',
    },
    {
      question: 'Why is water dripping from a small hole in the muffler instead of the tailpipe?',
      answer:
        'Some mufflers have a built-in drain hole so condensate does not collect inside, so water there can be intentional. If the exhaust has suddenly gotten louder, fumes are entering the cabin, or the pipe looks physically damaged, have it inspected.',
    },
    {
      question: 'Does a lot of water automatically mean a blown head gasket?',
      answer:
        'No. The amount of water alone cannot diagnose a head-gasket failure. Look for persistent thick white exhaust, coolant loss, overheating or rough running.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  // Deliberately empty. Normal condensation requires no purchase, and adding
  // a product here would make the page less useful and less trustworthy —
  // see docs/content-architecture.md §6. ProblemPage / UsefulResources both
  // hide Block 7 entirely when this array is empty; no placeholder renders.
  resources: [],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Greenhouse Gas Emissions from a Typical Passenger Vehicle',
      url: 'https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle',
      sourceType: 'government',
      notes:
        'Primary chemistry source. EPA explains that when gasoline burns, hydrogen from the fuel combines with oxygen to form water while carbon combines with oxygen to form carbon dioxide.',
    },
    {
      publisher: 'General Motors',
      title: 'PIC5295B — Slosh Noise From Rear Of Vehicle',
      url: 'https://static.nhtsa.gov/odi/tsbs/2015/MC-10115051-9999.pdf',
      sourceType: 'manufacturer',
      notes:
        'NHTSA-hosted OEM bulletin documenting a manufacturer-provided muffler drain hole and condensate collecting in the muffler. Used only to support that some exhaust systems intentionally drain accumulated condensation — not a universal repair procedure.',
    },
    {
      publisher: 'Ford Motor Company',
      title: 'TSB 20-2234 — 2.0L EcoBoost: Low Coolant Level, White Smoke From Tailpipe and/or Over-Temperature Warning',
      url: 'https://static.nhtsa.gov/odi/tsbs/2020/MC-10177867-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'NHTSA-hosted OEM bulletin. Model-specific evidence (2019–2020 Edge/Nautilus 2.0L EcoBoost) that low coolant, white tailpipe exhaust and an over-temperature warning can occur together from coolant entering the intake/exhaust path. Cited as evidence this symptom combination can occur in a real coolant-intrusion fault — not as proof every vehicle with white exhaust has this specific Ford fault.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'white-smoke-from-exhaust',
      anchorText: 'Can I ignore white smoke from my exhaust?',
      relationshipType: 'follow_up',
    },
    { slug: 'exhaust-leak', anchorText: 'Can I ignore an exhaust leak?', relationshipType: 'related' },
    { slug: 'coolant-leak', anchorText: 'Can I ignore a coolant leak?', relationshipType: 'follow_up' },
  ],
};
