import type { ProblemSeed } from '../types';

/**
 * Cars > Exhaust > White Smoke From Exhaust.
 *
 * Every factual claim below traces to one of the four sources at the
 * bottom of this file. The core distinction is: thin white vapor that
 * appears on a cold start and fades as the exhaust warms is normal
 * combustion water vapor, while thick white exhaust that persists after
 * warm-up — especially with coolant loss, overheating or rough running —
 * is not. No driving distance or duration is invented for how long that
 * can be tolerated — no source publishes one.
 */
export const whiteSmokeFromExhaust: ProblemSeed = {
  systemSlug: 'exhaust',
  slug: 'white-smoke-from-exhaust',
  canonicalPath: '/cars/exhaust/white-smoke-from-exhaust/',
  name: 'White Smoke From Exhaust',
  eyebrow: 'Cars · Exhaust',

  h1: 'Can I Ignore White Smoke From My Exhaust?',
  seoTitle: 'White Smoke From Exhaust? When It Is Normal and When to Stop',
  metaDescription:
    'Thin white vapor on a cold start can be normal. Thick white exhaust that continues when warm, falling coolant or overheating needs attention.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Sometimes, if it clears after the engine warms up',

  shortAnswer:
    'Sometimes. Thin white vapor that appears on a cold start and fades as the exhaust warms is usually condensation. Thick white exhaust that keeps coming after warm-up, especially with coolant loss, rough running or overheating, needs to be checked.',

  whyItMattersHeading: 'Why Does White Exhaust Matter?',
  whyItMatters: [
    'Burning fuel produces water vapor. When the exhaust is cold, some of that moisture can show up as a light white cloud. It is especially noticeable on cold or humid days and usually fades as the exhaust warms.',
    'Persistent thick white exhaust can have another cause. Coolant can sometimes enter the intake, combustion chamber or exhaust through an internal fault. Coolant loss, overheating or rough running makes that more concerning.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving If You Notice:',

  lastReviewedAt: new Date('2026-08-28T00:00:00Z'),
  reviewScope:
    'Normal cold-start exhaust vapor, persistent white exhaust, coolant-loss symptoms, overheating and warning signs that need diagnosis.',
  disclaimer:
    "General automotive triage guidance only. Exhaust color alone cannot identify a failed part. This page applies mainly to gasoline-powered vehicles and hybrids while the engine is running. Diesel exhaust can have additional causes that require vehicle-specific diagnosis.",

  aliases: [
    '/cars/exhaust/white-smoke/',
    '/cars/exhaust/white-exhaust-smoke/',
    '/cars/white-smoke-from-exhaust/',
  ],

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'cold-start-clears',
      label: 'Thin white vapor appears on a cold start, then fades',
      shortDescription: 'The cloud gets lighter or disappears as the car warms up.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'THIS IS USUALLY NORMAL',
      resultBody:
        'Cold exhaust turns some of the water vapor from combustion into visible mist and droplets. If it clears as the car warms and everything else feels normal, there is usually nothing to repair.',
      recommendedAction: 'Drive normally and watch for any change in the pattern.',
    },
    {
      slug: 'cold-humid-weather',
      label: 'I notice more white vapor on cold or humid days',
      shortDescription: 'The car runs normally and the vapor fades after warm-up.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'WEATHER CAN MAKE IT MORE VISIBLE',
      resultBody:
        'Cold air and a cold exhaust make normal water vapor easier to see. Humid conditions can make the cloud look heavier.',
      recommendedAction: 'No repair is usually needed if the vapor clears normally.',
    },
    {
      slug: 'thick-smoke-after-warm',
      label: 'Thick white exhaust continues after the engine is warm',
      shortDescription: 'The cloud does not fade after normal warm-up.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET IT CHECKED',
      resultBody:
        'Persistent thick white exhaust can occur when coolant enters the engine or exhaust through an internal fault. It should not be written off as cold-start condensation.',
      recommendedAction: 'Check for coolant loss, overheating and rough running. Arrange diagnosis soon.',
    },
    {
      slug: 'coolant-dropping',
      label: 'The coolant level keeps dropping',
      shortDescription: 'White exhaust appears and the cooling system needs repeated topping up.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'COOLANT IS GOING SOMEWHERE',
      resultBody:
        'Falling coolant with persistent white exhaust can point to an internal coolant leak or another cooling-system fault.',
      recommendedAction: 'Minimize driving and have the cooling system and engine checked.',
    },
    {
      slug: 'overheating',
      label: 'The engine is overheating',
      shortDescription: 'A temperature warning or hot gauge appears with white exhaust.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP FOR THE OVERHEATING',
      resultBody:
        'Overheating can damage the engine. White exhaust together with coolant loss or an over-temperature warning needs immediate attention.',
      recommendedAction:
        "Stop safely and follow the vehicle manufacturer's overheating procedure. Do not open a pressurized cooling-system cap while the engine is hot.",
    },
    {
      slug: 'rough-running',
      label: 'The engine runs rough with the white exhaust',
      shortDescription: 'The car shakes, misfires, hesitates or loses power.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE ENGINE NEEDS DIAGNOSIS',
      resultBody:
        'Rough running with persistent white exhaust can occur when a fault is affecting combustion. Coolant intrusion is one possible cause.',
      recommendedAction: 'Keep driving to a minimum and arrange diagnosis promptly.',
    },
    {
      slug: 'sweet-smell',
      label: 'The exhaust has a sweet smell and coolant is dropping',
      shortDescription: 'The white exhaust is persistent and the cooling system is losing fluid.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CHECK THE COOLING SYSTEM',
      resultBody:
        'A sweet smell can occur when engine coolant reaches hot engine or exhaust areas. Combined with falling coolant and white exhaust, it needs inspection.',
      recommendedAction: 'Have the cooling system and engine checked before continuing normal driving.',
    },
    {
      slug: 'only-water-drips',
      label: 'It is mostly clear water from the tailpipe',
      shortDescription: 'A few drops appear and the engine otherwise runs normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'THIS SOUNDS LIKE CONDENSATION',
      resultBody: 'Clear water from the tailpipe is common as water vapor condenses inside a cool exhaust system.',
      recommendedAction: 'No action is usually needed if there are no other symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'COLD START',
      title: 'Water vapor becomes visible',
      description: 'Combustion produces water vapor. A cold exhaust can turn some of it into a visible white mist.',
      severity: 'info',
      chainLabel: 'White vapor',
    },
    {
      stageLabel: 'AS THE EXHAUST WARMS',
      title: 'Normal vapor fades',
      description: 'The exhaust heats up and less water condenses into visible droplets and mist.',
      severity: 'info',
      chainLabel: 'Vapor clears',
    },
    {
      stageLabel: 'IF IT DOES NOT CLEAR',
      title: 'Check for other symptoms',
      description: 'Persistent thick white exhaust needs more attention, especially when coolant is disappearing or the engine runs badly.',
      severity: 'caution',
      chainLabel: 'Persistent exhaust',
    },
    {
      stageLabel: 'IF COOLANT IS ENTERING THE ENGINE',
      title: 'The cooling system loses fluid',
      description: 'An internal leak can lower the coolant level and interfere with normal engine operation.',
      severity: 'warning',
      chainLabel: 'Coolant loss',
    },
    {
      stageLabel: 'IF THE ENGINE OVERHEATS',
      title: 'Engine damage can follow',
      description: 'Continued overheating can damage the engine and leave the vehicle unable to drive safely.',
      severity: 'danger',
      chainLabel: 'Overheating',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Thin white vapor appears only during a cold start and fades',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'No action is usually needed if the car runs normally.',
    },
    {
      situation: 'White vapor is heavier on a cold or humid day but clears',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Treat it as normal condensation if it fades and no other symptoms appear.',
    },
    {
      situation: 'Thick white exhaust continues after the engine is warm',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange diagnosis and check for coolant loss or other symptoms.',
    },
    {
      situation: 'Coolant level keeps falling',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the cooling system and engine inspected.',
    },
    {
      situation: 'Engine runs rough or misfires with white exhaust',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Minimize driving and arrange prompt diagnosis.',
    },
    {
      situation: 'Temperature warning or overheating appears',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: "Stop safely and follow the manufacturer's overheating procedure.",
    },
    {
      situation: 'Only clear water drips from the tailpipe',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Normal condensation usually needs no repair if the engine otherwise behaves normally.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: See if it clears as the car warms up',
      body: 'Light white vapor on a cold start is common. Persistent thick exhaust after warm-up needs more attention.',
    },
    {
      title: 'Step 2: Check for coolant loss',
      body: "Follow the owner's manual and check the coolant level only when the cooling system is safe to inspect. Repeated coolant loss needs diagnosis.",
      destinationProblemSlug: 'coolant-leak',
    },
    {
      title: 'Step 3: Watch the temperature warning',
      body: "If the engine overheats or an over-temperature warning appears, stop safely and follow the owner's manual. Never remove a pressurized cooling-system cap from a hot engine.",
    },
    {
      title: 'Step 4: Pay attention to how the engine runs',
      body: 'Rough running, misfires or major power loss with persistent white exhaust raises the urgency.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The engine is overheating',
      description: "Stop safely and follow the manufacturer's overheating procedure.",
      severity: 'danger',
    },
    {
      title: 'The coolant level keeps dropping',
      description: 'Persistent coolant loss with white exhaust can indicate an internal leak or cooling-system fault.',
      severity: 'danger',
    },
    {
      title: 'Thick white exhaust continues after warm-up',
      description: 'This needs diagnosis, especially if it is a new symptom.',
      severity: 'warning',
    },
    {
      title: 'The engine begins shaking, misfiring or losing power',
      description: 'The fault is affecting engine operation.',
      severity: 'danger',
    },
    {
      title: 'A coolant or temperature warning appears',
      description: 'Do not continue normal driving with an active overheating warning.',
      severity: 'danger',
    },
    {
      title: 'Steam or coolant is escaping from under the hood',
      description: 'Keep clear of hot coolant and do not open the cooling system while it is hot and pressurized.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is white smoke from the exhaust normal on a cold start?',
      answer: 'Light white vapor can be normal when the exhaust is cold. It should fade as the exhaust warms.',
    },
    {
      question: 'Why does my car make more white vapor in cold weather?',
      answer: 'Cold exhaust surfaces condense more of the water vapor produced by combustion, making it easier to see.',
    },
    {
      question: 'Is white exhaust always a blown head gasket?',
      answer:
        'No. Cold-start vapor is common, and persistent white exhaust can have several causes. Coolant loss, overheating and rough running are more useful warning signs.',
    },
    {
      question: 'Can I drive with white smoke coming from the exhaust?',
      answer:
        'Usually if it is light cold-start vapor that quickly clears. Persistent thick exhaust, coolant loss, overheating or rough running needs attention.',
    },
    {
      question: 'What if the white smoke does not go away after the engine warms up?',
      answer: 'Have the car checked. Persistent thick white exhaust can occur with an internal coolant leak or another engine fault.',
    },
    {
      question: 'Why is my coolant disappearing with no puddle under the car?',
      answer:
        'Coolant can leak internally without leaving a puddle. Persistent white exhaust is one symptom that can appear with some internal coolant leaks.',
    },
    {
      question: 'Can white smoke come from coolant entering the engine?',
      answer: 'Yes. Manufacturer service bulletins document faults where coolant enters the intake, cylinders or exhaust and produces white exhaust.',
    },
    {
      question: 'Does clear water from the tailpipe mean something is wrong?',
      answer: 'Usually not. Clear water is commonly condensation from the water vapor produced during combustion.',
    },
    {
      question: 'Should I open the coolant cap if the engine is overheating?',
      answer: 'No. Let the cooling system cool and follow the owner’s manual. Hot pressurized coolant can cause serious burns.',
    },
    {
      question: 'Can a check engine light come on with white exhaust?',
      answer: 'Yes. Some faults that cause white exhaust can also trigger misfire, cooling-system or emissions-related diagnostic codes.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Vehicle owner's manual",
      description: 'Use it for the correct coolant-checking procedure and instructions if an overheating warning appears.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Coolant level check',
      description: 'Repeated coolant loss is an important clue when white exhaust continues after warm-up.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional cooling-system and engine diagnosis',
      description: 'Needed when white exhaust persists, coolant keeps dropping, the engine overheats or it begins running rough.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Formation and Control of Combustion Pollutants From Gasoline-Fueled Spark-Ignition Motor Vehicle Engines',
      url: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100S4W0.TXT',
      sourceType: 'government',
      notes:
        'EPA technical material explaining that complete hydrocarbon combustion produces carbon dioxide and water vapor. Used to support normal combustion water vapor.',
    },
    {
      publisher: 'Ford Motor Company',
      title: 'SSM 48345 — Low Coolant, White Smoke From Tailpipe And/Or Illuminated MIL',
      url: 'https://static.nhtsa.gov/odi/tsbs/2019/MC-10168812-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'Model-specific Ford service message documenting low coolant, white tailpipe smoke, over-temperature warnings and coolant leaking into the intake or exhaust through an EGR cooler fault. Used as real-world evidence that this symptom combination can occur, not as a diagnosis for other vehicles.',
    },
    {
      publisher: 'Ford Motor Company',
      title: 'TSB 24-2263 — 2.0L EcoBoost Cooling System Symptoms',
      url: 'https://static.nhtsa.gov/odi/tsbs/2024/MC-11006777-0001.pdf',
      sourceType: 'manufacturer',
      notes: 'Model-specific bulletin documenting white tailpipe smoke, internal or external coolant leakage and over-temperature warnings from a cooling-system fault.',
    },
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Summer Driving & Road Trip Tips',
      url: 'https://www.nhtsa.gov/summer-driving-tips',
      sourceType: 'government',
      notes: "NHTSA guidance to maintain proper coolant level, follow the owner's manual and have cooling-system leaks serviced.",
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'water-dripping-from-exhaust', anchorText: 'Can I ignore water dripping from my exhaust?', relationshipType: 'sibling' },
    { slug: 'coolant-leak', anchorText: 'Can I ignore a coolant leak?', relationshipType: 'cause' },
    { slug: 'check-engine-light', anchorText: 'Can I ignore a check engine light?', relationshipType: 'related' },
    { slug: 'engine-overheating', anchorText: 'Can I ignore an overheating engine?', relationshipType: 'escalation' },
  ],
};
