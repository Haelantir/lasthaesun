import type { ProblemSeed } from '../types';

/**
 * Cars > Tires > TPMS Warning Light.
 *
 * Every factual claim below traces to one of the three sources at the
 * bottom of this file. The core distinction is: a steady light usually
 * means at least one tire is significantly underinflated and should be
 * checked with a gauge soon, while a light that flashes briefly after
 * startup and then stays on usually signals a TPMS system malfunction
 * rather than a tire-pressure problem. No driving distance or duration is
 * invented for how long the light can be tolerated — no source publishes
 * one.
 */
export const tpmsWarningLight: ProblemSeed = {
  systemSlug: 'tires',
  slug: 'tpms-warning-light',
  canonicalPath: '/cars/tires/tpms-warning-light/',
  name: 'TPMS Warning Light',
  eyebrow: 'Cars · Tires',

  h1: 'Can I Ignore a TPMS Warning Light?',
  seoTitle: 'TPMS Light On? What It Means and When You Need to Stop',
  metaDescription:
    'A TPMS light usually means at least one tire needs attention. Learn when you can drive briefly, when to add air and what a flashing TPMS light means.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Usually briefly, after checking the tires',

  shortAnswer:
    'Probably not. A steady TPMS light usually means one or more tires are significantly underinflated, so check the tires and pressure as soon as you can. If a tire looks flat or the car feels unstable, stop driving.',

  whyItMattersHeading: 'Why Does the TPMS Light Matter?',
  whyItMatters: [
    "TPMS watches for significant underinflation. When the warning comes on, check the tires with a pressure gauge and compare them with the cold-pressure numbers on the vehicle placard or in the owner's manual.",
    'A tire can look normal and still be low. Low pressure makes the tire flex more and build heat, which can hurt handling and eventually damage the tire. A TPMS light that flashes for about a minute and then stays on usually means the monitoring system itself has a fault.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving If You Notice:',

  lastReviewedAt: new Date('2026-08-28T00:00:00Z'),
  reviewScope:
    'TPMS low-pressure warnings, TPMS malfunction warnings, cold-weather pressure changes and signs that make continued driving unsafe.',
  disclaimer:
    "General tire-safety guidance only. TPMS does not replace a pressure gauge or regular tire checks. Use the recommended cold tire pressure on the vehicle placard or in the owner's manual.",

  aliases: [
    '/cars/tires/tire-pressure-warning-light/',
    '/cars/tires/tpms-light/',
    '/cars/tpms-warning-light/',
  ],

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'steady-light-tires-look-normal',
      label: 'The light is steady and the tires look normal',
      shortDescription: 'No tire looks flat and the car drives normally.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'CHECK THE PRESSURE SOON',
      resultBody:
        'A tire can be low without looking flat. Check all four tires with a gauge instead of judging them by appearance.',
      recommendedAction: "Inflate any low tire to the vehicle manufacturer's recommended cold pressure.",
    },
    {
      slug: 'cold-morning-light',
      label: 'The light came on during cold weather',
      shortDescription: 'The warning appeared after a temperature drop and the tires look normal.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'COLD WEATHER CAN TRIGGER IT',
      resultBody:
        'Tire pressure falls as the air gets colder. A tire that was already close to the warning threshold can turn the light on after a cold night.',
      recommendedAction: 'Check the pressure while the tires are cold and inflate them to the placard specification if needed.',
    },
    {
      slug: 'one-tire-keeps-going-low',
      label: 'The same tire keeps losing pressure',
      shortDescription: 'You add air, but the warning returns.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'FIND THE LEAK',
      resultBody:
        'Repeated pressure loss can come from a puncture, valve leak, rim leak or wheel damage. Adding air does not fix the cause.',
      recommendedAction: 'Have the tire inspected for a leak.',
    },
    {
      slug: 'flashing-then-solid',
      label: 'The TPMS light flashes, then stays on',
      shortDescription: 'It flashes for about a minute after startup before remaining lit.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'THE TPMS MAY HAVE A FAULT',
      resultBody:
        'This pattern usually means the monitoring system is not working properly. It may not warn you about low pressure as intended.',
      recommendedAction: 'Check tire pressures manually and have the TPMS inspected.',
    },
    {
      slug: 'after-tire-or-wheel-work',
      label: 'The light started after tire or wheel work',
      shortDescription: 'Tires were replaced, rotated or wheels were changed recently.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'CHECK THE PRESSURES AND SYSTEM',
      resultBody:
        'The pressures may need correction or the TPMS may need the vehicle-specific setup procedure. Replacement wheels or sensors can also cause a TPMS malfunction.',
      recommendedAction: "Check the tire pressures first, then follow the owner's manual if the light stays on or flashes.",
    },
    {
      slug: 'tire-looks-flat',
      label: 'One tire looks visibly low or flat',
      shortDescription: 'The tire is sagging, flattened at the bottom or sitting unusually low.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'DO NOT KEEP DRIVING',
      resultBody: 'A visibly low or flat tire can overheat and suffer internal damage if you continue driving on it.',
      recommendedAction: 'Stop safely and use a suitable spare or roadside assistance.',
    },
    {
      slug: 'vibration-or-pulling',
      label: 'The car is vibrating, pulling or thumping',
      shortDescription: 'The warning light is on and the car no longer feels normal.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP WHEN IT IS SAFE',
      resultBody: 'New vibration, pulling or thumping can mean the tire has lost more pressure or has other damage.',
      recommendedAction: 'Slow down and stop somewhere safe. Inspect the tires before continuing.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The system warns you about low pressure',
      description:
        'TPMS has detected significant underinflation in at least one tire, or the system itself has detected a malfunction.',
      severity: 'caution',
      chainLabel: 'Warning light',
    },
    {
      stageLabel: 'IF A TIRE IS LOW',
      title: 'The tire flexes more',
      description: 'Low pressure makes the tire bend more as it rolls.',
      severity: 'caution',
      chainLabel: 'More flex',
    },
    {
      stageLabel: 'KEEP DRIVING UNDERINFLATED',
      title: 'Heat and wear build up',
      description: "Extra flex creates heat and can damage the tire's rubber and internal structure.",
      severity: 'warning',
      chainLabel: 'Heat and damage',
    },
    {
      stageLabel: 'IF PRESSURE KEEPS FALLING',
      title: 'Handling can get worse',
      description: 'The car may begin pulling, vibrating or responding differently when you steer and brake.',
      severity: 'warning',
      chainLabel: 'Poor handling',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'The tire can fail',
      description: 'Severe underinflation and accumulated damage can lead to tire failure.',
      severity: 'danger',
      chainLabel: 'Tire failure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Steady TPMS light and all tires look normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Check all four tires with a pressure gauge as soon as practical.',
    },
    {
      situation: 'Light appeared after a cold-weather temperature drop',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Check the pressures cold and inflate to the vehicle placard specification if needed.',
    },
    {
      situation: 'Pressure is low but the tire still holds its shape',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Add air soon and check whether the pressure drops again.',
    },
    {
      situation: 'The same tire keeps losing pressure',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the tire checked for a puncture or other leak.',
    },
    {
      situation: 'TPMS light flashes and then stays on',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo: 'Check tire pressures manually and arrange a TPMS inspection.',
    },
    {
      situation: 'Tire looks nearly flat',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not continue driving normally. Use a suitable spare or roadside assistance.',
    },
    {
      situation: 'Car vibrates, pulls or thumps',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop when safe and inspect the tires before continuing.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Look at all four tires',
      body: 'If one tire looks flat or badly damaged, do not keep driving on it normally.',
      destinationProblemSlug: 'low-tire-pressure',
    },
    {
      title: 'Step 2: Check the pressure with a gauge',
      body: "Use the recommended cold pressure on the driver's door placard or in the owner's manual. Do not use the maximum pressure molded into the tire sidewall.",
      destinationProblemSlug: 'low-tire-pressure',
    },
    {
      title: 'Step 3: Add air if a tire is low',
      body: "Inflate the tire to the vehicle manufacturer's cold-pressure specification. If the same tire loses pressure again, have it checked for a leak.",
    },
    {
      title: 'Step 4: Notice whether the light is flashing',
      body: 'A light that flashes for about a minute and then stays on usually indicates a TPMS malfunction. Check the pressures yourself until the system is fixed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A tire looks flat or nearly flat',
      description: 'Driving on a severely underinflated tire can damage it quickly.',
      severity: 'danger',
    },
    {
      title: 'The car starts pulling or feels unstable',
      description: 'Stop when safe and check the tires before continuing.',
      severity: 'danger',
    },
    {
      title: 'You hear new thumping or feel heavy vibration',
      description: 'The tire may be badly underinflated or damaged.',
      severity: 'danger',
    },
    {
      title: 'Pressure drops again soon after adding air',
      description: 'The tire may have a puncture or another leak.',
      severity: 'warning',
    },
    {
      title: 'There is a nail, cut or sidewall bulge',
      description: 'Visible tire damage needs inspection even if the TPMS light is the first thing you noticed.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I drive with the TPMS light on?',
      answer:
        'Usually for a short distance if the tires look normal and the car feels normal, but check the pressure as soon as you can. Do not keep driving on a visibly low or flat tire.',
    },
    {
      question: 'Why did my TPMS light come on when it got cold?',
      answer: 'Tire pressure drops as temperature falls. Cold weather can push a borderline tire low enough to trigger the warning.',
    },
    {
      question: 'Can I tell if a tire is low just by looking at it?',
      answer: 'No. A tire can be underinflated and still look normal, so use a pressure gauge.',
    },
    {
      question: 'What pressure should I use?',
      answer:
        "Use the recommended cold tire pressure on the vehicle placard or in the owner's manual. The number molded into the tire sidewall is not the vehicle's recommended pressure.",
    },
    {
      question: 'What does a flashing TPMS light mean?',
      answer:
        'If it flashes for about a minute and then stays on, the TPMS has usually detected a system malfunction. Check the tire pressures manually until the problem is fixed.',
    },
    {
      question: 'Why is my TPMS light still on after adding air?',
      answer:
        "One or more tires may still be low, the system may need time or a vehicle-specific reset procedure, or the TPMS itself may have a fault. Check the owner's manual if the pressures are correct and the light stays on.",
    },
    {
      question: 'Will the TPMS light go away on its own when the weather warms up?',
      answer:
        'It may if the warning was caused by a small temperature-related pressure drop. Check and correct the pressure instead of waiting for warmer weather.',
    },
    {
      question: 'Does the spare tire have a TPMS sensor?',
      answer: "It depends on the vehicle. Check the owner's manual for how your spare tire is monitored.",
    },
    {
      question: 'Can a bad TPMS sensor make the warning light come on?',
      answer: 'Yes. A system fault can trigger the TPMS malfunction warning even when tire pressure is correct.',
    },
    {
      question: 'Do I still need to check tire pressure if the TPMS light is off?',
      answer: 'Yes. TPMS warns about significant underinflation and does not replace regular pressure checks.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Tire pressure gauge',
      description: 'The quickest way to confirm whether the warning is caused by low tire pressure.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Portable tire inflator',
      description: "Useful for bringing a low tire back to the vehicle manufacturer's recommended pressure when the tire is otherwise safe to inflate.",
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual",
      description: 'Shows the correct TPMS reset or initialization procedure and explains the warning behavior for your vehicle.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Tire inspection',
      description: 'Needed when the same tire repeatedly loses pressure or has visible damage.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Tire Safety Ratings and Awareness — TireWise',
      url: 'https://www.nhtsa.gov/vehicle-safety/tires',
      sourceType: 'government',
      notes: 'NHTSA consumer guidance on TPMS, tire pressure and underinflation.',
    },
    {
      publisher: 'U.S. Code of Federal Regulations',
      title: '49 CFR 571.138 — FMVSS No. 138, Tire pressure monitoring systems',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.138',
      sourceType: 'regulation',
      notes: 'Federal TPMS performance requirements, low-pressure warning requirements and the flashing malfunction-indicator sequence.',
    },
    {
      publisher: 'Toyota Motor North America',
      title: '2025 Quick Reference Guide — Tire Pressure Monitoring System',
      url: 'https://assets.sia.toyota.com/publications/en/om-s/OM25K1QRG/pdf/OM25K1QRG.pdf',
      sourceType: 'manufacturer',
      notes:
        'Manufacturer guidance on temperature-related warnings, tire-pressure specifications and the approximately one-minute flashing TPMS malfunction pattern.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'low-tire-pressure', anchorText: 'Can I ignore low tire pressure?', relationshipType: 'cause' },
    { slug: 'nail-in-tire', anchorText: 'Can I ignore a nail in my tire?', relationshipType: 'cause' },
    { slug: 'cracked-tire-sidewall', anchorText: 'Can I ignore a cracked tire sidewall?', relationshipType: 'escalation' },
  ],
};
