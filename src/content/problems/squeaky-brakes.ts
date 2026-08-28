import type { ProblemSeed } from '../types';

/**
 * Cars > Brakes > Squeaky Brakes.
 *
 * Every factual claim below traces to one of the four sources at the bottom
 * of this file. The core distinction is: a brief squeak on the first few
 * stops (moisture, temperature, normal friction) can be harmless, while a
 * persistent squeal, grinding, a soft pedal or reduced braking performance
 * is not a noise issue anymore. No driving distance or duration is invented
 * for how long the noise can be tolerated — no source publishes one.
 */
export const squeakyBrakes: ProblemSeed = {
  systemSlug: 'brakes',
  slug: 'squeaky-brakes',
  canonicalPath: '/cars/brakes/squeaky-brakes/',
  name: 'Squeaky Brakes',
  eyebrow: 'Cars · Brakes',

  h1: 'Can I Ignore Squeaky Brakes?',
  seoTitle: 'Squeaky Brakes: When the Noise Is Harmless and When to Check It',
  metaDescription:
    'Brake squeaks can come from moisture or normal friction, but persistent squealing, grinding, a soft pedal or poor braking should be checked. Here’s how to tell.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Usually, if braking feels normal and the noise is brief',

  shortAnswer:
    'Sometimes. A brief squeak during the first few brake applications can happen in certain weather or driving conditions, but a squeal that keeps returning can be a brake-pad wear warning. Grinding, weak braking or an abnormal pedal needs faster attention.',

  whyItMattersHeading: 'Why Do Squeaky Brakes Matter?',
  whyItMatters: [
    'Brake noise has more than one cause. Moisture, temperature and normal pad-and-rotor vibration can create a brief squeak even when the brakes are working normally.',
    'Some brake pads also use an acoustic wear indicator that makes a high-pitched warning sound when the pads are worn enough to need replacement. If that warning is ignored, the pads can wear further and damage the rotors.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving If You Notice:',

  lastReviewedAt: new Date('2026-08-28T00:00:00Z'),
  reviewScope:
    'Brake squeal and squeak, brake-pad wear indicators, temporary weather-related noise, grinding or scraping, pedal changes and braking-performance warning signs.',
  disclaimer:
    'General automotive triage guidance only. Brake noise varies by vehicle, brake design, pad material and driving conditions. If braking performance changes or the vehicle feels unsafe, stop driving and have the brake system inspected.',

  aliases: ['/cars/brakes/brake-squeal/', '/cars/brakes/squealing-brakes/'],

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'brief-squeak-after-rain-or-cold-start',
      label: 'The brakes squeak only at first, then go quiet',
      shortDescription: 'The noise appears after rain, overnight parking or cool weather and disappears after a few normal stops.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'THIS CAN BE NORMAL',
      resultBody:
        'Some weather and driving conditions can make brakes squeal when they are first or lightly applied. If the noise fades and braking feels completely normal, there may be nothing to repair.',
      recommendedAction: 'Drive normally and see whether the noise disappears once the brakes have been used.',
    },
    {
      slug: 'squeaks-every-time-i-brake',
      label: 'The brakes squeak almost every time I stop',
      shortDescription: 'The noise keeps returning during normal braking.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'HAVE THE BRAKES CHECKED',
      resultBody:
        'Persistent squealing can come from worn pads or another brake condition that needs inspection. The sound alone cannot tell you which part is responsible.',
      recommendedAction: 'Arrange a brake inspection soon, especially if the noise is getting louder or more frequent.',
    },
    {
      slug: 'high-pitched-squeal-while-driving',
      label: 'I hear a high-pitched squeal even when I am barely braking',
      shortDescription: 'The sound may come and go while the vehicle is moving.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE PADS MAY BE WARNING YOU',
      resultBody:
        'Some disc brake pads have built-in wear indicators that make a high-pitched sound when pad replacement is due.',
      recommendedAction: 'Have the brake pads inspected and replaced if they have reached their wear limit.',
    },
    {
      slug: 'grinding-or-scraping',
      label: 'The squeak has turned into grinding or scraping',
      shortDescription: 'The sound is rough, metallic or much harsher than a normal squeal.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DO NOT KEEP DRIVING NORMALLY',
      resultBody:
        'Grinding or scraping can happen when brake pads are severely worn. Continued use can damage the rotors and may reduce braking performance.',
      recommendedAction: 'Minimize driving and have the brakes inspected promptly. Stop if braking performance has changed.',
    },
    {
      slug: 'soft-or-sinking-brake-pedal',
      label: 'The brake pedal feels soft, low or keeps sinking',
      shortDescription: 'The pedal no longer feels firm or normal.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP AND GET HELP',
      resultBody:
        'A major change in brake-pedal feel can indicate a brake-system problem. Do not judge this as a noise issue anymore.',
      recommendedAction: 'Stop in a safe place and arrange professional inspection or roadside assistance.',
    },
    {
      slug: 'car-pulls-or-vibrates-when-braking',
      label: 'The car pulls or vibrates when I brake',
      shortDescription: 'The noise comes with steering pull, pedal pulsation or shaking.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE BRAKES NEED INSPECTION',
      resultBody:
        'Pulling or strong vibration means there is more going on than a harmless squeak. Brake wear, rotor problems or another fault may be affecting braking.',
      recommendedAction: 'Have the brake system inspected soon. Stop driving if control or stopping ability feels impaired.',
    },
    {
      slug: 'brake-warning-light-with-noise',
      label: 'A brake warning light is on too',
      shortDescription: 'The squeak appears with a red brake-system warning or another brake warning.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'FOLLOW THE WARNING LIGHT',
      resultBody:
        'A brake-system warning can indicate low brake fluid or a brake-system malfunction on some vehicles. The warning light takes priority over the noise.',
      recommendedAction: "Stop safely if pedal feel is abnormal and follow the owner's manual for the warning shown.",
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The noise may be temporary',
      description: 'Moisture, temperature or normal brake vibration can cause a short-lived squeak when the brakes are first used.',
      severity: 'info',
      chainLabel: 'Brief squeak',
    },
    {
      stageLabel: 'IF IT KEEPS COMING BACK',
      title: 'The brakes may need inspection',
      description:
        'A persistent squeal can come from pad wear or another brake condition that will not be identified by the sound alone.',
      severity: 'caution',
      chainLabel: 'Persistent noise',
    },
    {
      stageLabel: 'IF IT IS A WEAR INDICATOR',
      title: 'The brake pads are due for service',
      description:
        'Some pads make a high-pitched warning sound when the friction material has worn far enough that replacement is needed.',
      severity: 'warning',
      chainLabel: 'Worn pads',
    },
    {
      stageLabel: 'KEEP DRIVING ON WORN PADS',
      title: 'Rotor damage can follow',
      description: 'Continuing to drive after the pads are worn out can damage the brake rotors and make the repair more expensive.',
      severity: 'warning',
      chainLabel: 'Rotor damage',
    },
    {
      stageLabel: 'IF BRAKING PERFORMANCE CHANGES',
      title: 'It becomes a safety problem',
      description: 'A soft pedal, reduced stopping ability, severe pulling or other major changes need immediate attention.',
      severity: 'danger',
      chainLabel: 'Braking risk',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Brief squeak after rain, overnight parking or cool weather that quickly disappears',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Keep driving if the noise fades and braking feels normal. Reassess it if the squeak continues.',
    },
    {
      situation: 'Squeak keeps returning during normal braking',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo: 'Arrange a brake inspection soon. Persistent squeal can come from worn pads or another brake condition.',
    },
    {
      situation: 'High-pitched wear-indicator type squeal',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the brake pads checked and replace them if they have reached their wear limit.',
    },
    {
      situation: 'Grinding or scraping noise',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Minimize driving and get the brakes inspected promptly.',
    },
    {
      situation: 'Soft, low or sinking brake pedal',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop safely and arrange professional help.',
    },
    {
      situation: 'Brake warning light with abnormal pedal feel',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: "Stop safely and follow the vehicle manufacturer's warning-light instructions.",
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Notice when the squeak happens',
      body: 'Pay attention to whether it happens only on the first few stops, only with light braking or nearly every time you use the brakes. A brief cold or wet-weather squeak is less concerning than noise that keeps returning.',
    },
    {
      title: 'Step 2: Check how the brakes feel',
      body: 'The pedal should feel normal and the car should stop normally. A soft pedal, major vibration, pulling or reduced braking raises the urgency.',
    },
    {
      title: 'Step 3: Listen for grinding or scraping',
      body: 'A rough metallic sound needs faster attention than a light squeal. Continued driving with severely worn pads can damage the rotors.',
    },
    {
      title: 'Step 4: Have persistent noise inspected',
      body: 'If the squeak does not go away or keeps returning, have the pads, rotors and related brake hardware checked. Sound alone cannot confirm the cause.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The brakes grind or scrape',
      description: 'A harsh metallic sound can occur with severely worn pads and can lead to rotor damage.',
      severity: 'danger',
    },
    {
      title: 'The brake pedal feels soft, low or sinks',
      description: 'A major pedal change can indicate a brake-system problem that needs immediate attention.',
      severity: 'danger',
    },
    {
      title: 'The car takes noticeably longer to stop',
      description: 'Reduced braking performance is a safety issue, not a normal brake-noise problem.',
      severity: 'danger',
    },
    {
      title: 'The vehicle pulls strongly when braking',
      description: 'Stop driving if the pull makes the vehicle difficult to control.',
      severity: 'danger',
    },
    {
      title: 'A red brake-system warning light appears',
      description: 'Follow the owner’s manual and stop safely if the pedal or braking performance is abnormal.',
      severity: 'danger',
    },
    {
      title: 'You smell burning or see smoke near a wheel',
      description: 'An overheated or dragging brake can become dangerous. Stop safely and arrange inspection.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Are squeaky brakes always bad?',
      answer:
        'No. Some weather and driving conditions can cause temporary squeal when the brakes are first or lightly applied. Noise that keeps returning should be checked.',
    },
    {
      question: 'Why do my brakes squeak in the morning?',
      answer:
        'Moisture and cool conditions can contribute to brief brake noise after the car has been parked. If it disappears after normal brake use and the brakes feel normal, it is usually less concerning.',
    },
    {
      question: 'Why do my brakes squeak after it rains?',
      answer:
        'Wet conditions can change the contact between the pads and rotors for the first few stops. Have the brakes checked if the noise does not fade or braking feels different.',
    },
    {
      question: 'Does squeaking mean I need new brake pads?',
      answer:
        'Sometimes. Many disc brake pads use a high-pitched wear indicator to warn that replacement is due, but squeaking can have other causes too.',
    },
    {
      question: 'Can I drive with squeaky brakes?',
      answer:
        'Usually, if the noise is brief and braking feels completely normal. Persistent squealing, grinding or any change in braking performance needs inspection.',
    },
    {
      question: 'What is the difference between squeaking and grinding brakes?',
      answer: 'Squeaking is usually a high-pitched sound. Grinding is rougher and more metallic and can occur when brake pads are severely worn.',
    },
    {
      question: 'Can worn brake pads damage the rotors?',
      answer: 'Yes. Manufacturer guidance warns that continuing to drive after the pads are worn out can cause rotor damage.',
    },
    {
      question: 'Why do new brakes sometimes squeak?',
      answer:
        'Brake noise can come from pad material, rotor condition, hardware or vibration even when braking performance is normal. Persistent noise after brake work should be checked by the shop that performed the service.',
    },
    {
      question: 'Should I worry if the brakes squeak only at low speed?',
      answer:
        'Not automatically. Brake squeal can happen during light, low-speed braking, but a recurring noise still deserves inspection if it does not fade.',
    },
    {
      question: 'Is a brake warning light more serious than squeaking?',
      answer:
        "Yes. Follow the warning-light instructions in the owner's manual, especially if the pedal feels abnormal or braking performance has changed.",
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Professional brake inspection',
      description: 'A brake inspection can check pad thickness, rotor condition, calipers and brake hardware when the noise keeps returning.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual",
      description: 'Use the brake and warning-light sections for vehicle-specific guidance on pad wear indicators and brake-system warnings.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Electronic Code of Federal Regulations',
      title: '49 CFR 571.135 — Standard No. 135; Light Vehicle Brake Systems',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.135',
      sourceType: 'regulation',
      notes:
        'Federal light-vehicle brake-system standard. Requires safe braking performance and provides for brake wear status to be indicated by an acoustic or optical warning or by a means of visual inspection.',
    },
    {
      publisher: 'Toyota Motor North America',
      title: '2024 Prius — Driving the Vehicle',
      url: 'https://www.toyota.com/owners/warranty-owners-manuals/digital/article/prius/2024/om47e80u/ch04se010401/',
      sourceType: 'manufacturer',
      notes:
        'Toyota owner guidance says squealing or scraping from brake-pad wear limit indicators should prompt pad inspection and replacement as soon as possible and warns that rotor damage can result if replacement is delayed.',
    },
    {
      publisher: 'General Motors',
      title: '2010 Chevrolet Silverado Owner Manual',
      url: 'https://static.nhtsa.gov/odi/inv/2011/INRD-EA11003-50073P.pdf',
      sourceType: 'manufacturer',
      notes:
        'NHTSA-hosted GM owner manual. States that disc brake pads can use high-pitched wear indicators, warns against continuing to drive on worn-out pads, and notes that some driving conditions or climates can cause squeal during first or light brake application without indicating a brake fault.',
    },
    {
      publisher: 'Toyota Motor North America',
      title: 'Signs You May Need New Brake Pads',
      url: 'https://www.toyota.com/car-tips/signs-new-brake-pads/',
      sourceType: 'manufacturer',
      notes:
        'Consumer brake-pad guidance covering squealing, grinding, reduced braking response and vibration as signs that can accompany brake wear or other brake problems.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [],
};
