import type { ProblemSeed } from '../types';

export const wheelVibration: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'tires',
  slug: 'wheel-vibration',
  canonicalPath: '/cars/tires/wheel-vibration/',
  name: 'Steering Wheel Vibration at Highway Speed',
  eyebrow: 'Mobility · Cars · Tires',

  h1: 'Can I Ignore a Steering Wheel That Shakes at Highway Speed?',
  seoTitle: 'Steering Wheel Shakes on the Highway: Causes and When to Stop',
  metaDescription:
    'A steering wheel that shakes at highway speed often points to a tire or wheel issue. Learn when you can keep driving and when to stop.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep driving at highway speed?',
  canIUseItLabel: 'Only briefly if the car stays stable',

  shortAnswer:
    'Probably not. A mild shake that appears only at highway speed often fits a tire or wheel balance problem, but vibration can also come from tire damage, a wheel problem, brakes or worn steering and suspension parts. Slow down and arrange an inspection; stop if the shaking is severe, sudden, or comes with thumping, pulling or visible tire damage.',

  whyItMattersHeading: 'Why Does the Steering Wheel Shake at Highway Speed?',
  whyItMatters: [
    'Your tires and wheels spin much faster on the highway, so an unevenly balanced tire-and-wheel assembly can create a vibration that becomes noticeable through the steering wheel. NHTSA says proper tire balancing keeps wheels rotating correctly without making the vehicle shake or vibrate, and U.S. Tire Manufacturers Association guidance identifies wheel imbalance as a source of highway-speed vibration.',
    'The catch is that a shaking steering wheel does not diagnose itself. Tire damage, incorrect pressure, a bent or poorly mounted wheel, and steering or suspension problems can also produce vibration. If the shake appears mainly when you brake, the brake system deserves attention instead. That is why persistent highway-speed vibration is worth inspecting rather than assuming it just needs a balancing weight.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Get Help If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Highway-speed steering vibration guidance checked against NHTSA tire-safety material and current tire-industry and manufacturer guidance.',
  disclaimer:
    'This is general vehicle-safety guidance, not a diagnosis. If the vehicle feels unstable or a tire appears damaged, stop in a safe place and arrange inspection or roadside assistance.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'mild-speed-specific-vibration',
      label: 'Mild vibration only at certain highway speeds',
      shortDescription:
        'The steering wheel shakes in a repeatable speed range, but the car otherwise tracks normally.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Get the wheels checked',
      resultBody:
        'A speed-specific shake fits a tire or wheel imbalance pattern. Balancing commonly corrects this kind of vibration, but vibration alone cannot confirm the cause.',
      recommendedAction: 'Reduce speed and arrange a tire and wheel inspection and balance check.',
    },
    {
      slug: 'vibration-after-tire-service',
      label: 'It started after new tires or tire service',
      shortDescription:
        'The vibration appeared after tires were installed, rotated or other wheel work was performed.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Have the recent work rechecked',
      resultBody:
        'New tires should be balanced when installed. A mounting, centering or balance problem can become obvious once the vehicle reaches highway speed.',
      recommendedAction:
        'Contact the shop that performed the work and ask for the tire and wheel installation and balance to be checked.',
    },
    {
      slug: 'vibration-after-pothole',
      label: 'It started after a pothole or curb impact',
      shortDescription: 'The shaking appeared after a hard hit to a wheel or tire.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check for impact damage',
      resultBody:
        'A hard impact can affect tire pressure, damage a tire or wheel, or disturb alignment. Treat a new vibration after an impact as a possible damage warning rather than assuming the wheel is merely out of balance.',
      recommendedAction:
        'Slow down, inspect the tires and wheels and arrange an inspection before returning to normal highway driving.',
    },
    {
      slug: 'vibration-with-tpms-warning',
      label: 'The TPMS warning is on too',
      shortDescription: 'The steering wheel shakes and the tire-pressure warning is illuminated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check tire pressure now',
      resultBody:
        'The combination raises the possibility that a tire is significantly underinflated or has another tire-related problem. NHTSA advises inspecting the tires and checking pressure when the TPMS warning appears.',
      recommendedAction:
        "Check every tire against the vehicle manufacturer's recommended pressure and inspect for visible damage before continuing normally.",
    },
    {
      slug: 'heavy-vibration-or-thumping',
      label: 'The vibration is heavy or comes with thumping',
      shortDescription: 'The shake is strong, getting worse or accompanied by a repeating thump or slap.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop when it is safe',
      resultBody:
        'Strong vibration or unusual tire noise can indicate more than ordinary imbalance. Tire damage or another mechanical problem needs to be ruled out before the vehicle is driven normally again.',
      recommendedAction:
        'Reduce speed smoothly, avoid abrupt steering or braking and pull over somewhere safe. Inspect the tires and use roadside assistance if anything looks damaged.',
    },
    {
      slug: 'vibration-with-pulling',
      label: 'The car also pulls or the steering feels loose',
      shortDescription:
        'The vehicle drifts, wanders or no longer responds normally through the steering wheel.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This needs broader diagnosis',
      resultBody:
        'Pulling and steering changes do not fit a simple balance complaint as neatly. Alignment, tire condition and steering or suspension components may need inspection.',
      recommendedAction:
        'Avoid unnecessary highway driving and have the tires, alignment, steering and suspension checked.',
    },
    {
      slug: 'vibration-while-braking',
      label: 'It shakes mainly when you brake',
      shortDescription:
        'The steering wheel is relatively smooth while cruising but shakes or pulses as you slow down.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Look at the brakes, not just the balance',
      resultBody:
        'A vibration that appears or becomes much stronger during braking points toward a brake-related problem rather than ordinary highway-speed wheel imbalance.',
      recommendedAction:
        'Arrange a brake inspection and avoid treating wheel balancing as the diagnosis unless the braking system has been ruled out.',
    },
    {
      slug: 'temporary-flat-spot-vibration',
      label: 'It happens after the car has been sitting and then fades',
      shortDescription:
        'The vibration appears after a long rest or cold soak and completely disappears as the tires warm during driving.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Temporary tire flat spotting may explain it',
      resultBody:
        'Tires can temporarily develop a slight flat-spot effect while parked, which can produce vibration until the tire warms and returns to its normal shape. Persistent vibration does not fit that explanation.',
      recommendedAction:
        'If the vibration completely disappears and no other symptoms are present, monitor it. Have the tires inspected if it persists, worsens or stops going away.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Something rotating is no longer running smoothly',
      description:
        'A repeatable highway-speed vibration means a tire, wheel or another vehicle system is transmitting an oscillation into the steering wheel.',
      severity: 'caution',
      chainLabel: 'Vibration appears',
    },
    {
      stageLabel: 'IF THE WHEEL IS OUT OF BALANCE',
      title: 'The tire can develop irregular wear',
      description:
        'An imbalanced tire-and-wheel assembly repeatedly bounces or wobbles as it rotates. Industry guidance links continued imbalance with reduced tire life and irregular tread wear.',
      severity: 'caution',
      chainLabel: 'Imbalance → repeated movement',
    },
    {
      stageLabel: 'IF THE CAUSE IS DAMAGE',
      title: 'The balance explanation can hide the real problem',
      description:
        'A pothole impact, damaged tire, pressure loss or wheel damage can also create vibration. Continuing to drive without checking leaves that condition undiscovered.',
      severity: 'warning',
      chainLabel: 'Damage → vibration',
    },
    {
      stageLabel: 'IF HANDLING CHANGES',
      title: 'The problem is no longer just an annoying shake',
      description:
        'Pulling, wandering, loose steering or rapidly increasing vibration means the vehicle is no longer behaving normally and needs prompt inspection.',
      severity: 'warning',
      chainLabel: 'Vibration → handling change',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'An underlying tire problem can become a safety issue',
      description:
        'If the vibration is being caused by an underinflated or physically damaged tire, continued use can lead to further tire damage and possible tire failure.',
      severity: 'danger',
      chainLabel: 'Tire damage → possible failure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Mild vibration only at highway speed and the car otherwise feels normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Reduce speed and arrange a tire and wheel inspection rather than continuing normal highway use indefinitely.',
    },
    {
      situation: 'Vibration began immediately after new tires, rotation or wheel service',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Return to the shop and have the installation, wheel mounting and balance checked.',
    },
    {
      situation: 'Vibration began after a pothole, curb strike or other hard impact',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Inspect the tires and wheels for damage and arrange a professional check before normal highway driving.',
    },
    {
      situation: 'TPMS warning appears with the vibration',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Check tire pressure and tire condition before continuing normally.',
    },
    {
      situation: 'Strong vibration, thumping or visible tire damage',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Slow down smoothly and stop somewhere safe. Use roadside assistance if the tire or wheel appears damaged.',
    },
    {
      situation: 'The vehicle pulls, wanders or the steering feels loose',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Avoid unnecessary driving and have the tires, steering, suspension and alignment inspected.',
    },
    {
      situation: 'The steering wheel shakes mainly while braking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange a brake inspection rather than assuming wheel balance is the only issue.',
    },
    {
      situation: 'Vibration after sitting completely disappears as the tires warm',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Monitor it. If the vibration stops disappearing, becomes stronger or appears with other symptoms, have the tires inspected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the tires before more highway driving',
      body:
        'Look for a bulge, cut, unusual tread shape, exposed material or anything else that makes one tire look different from the others. Do not continue normal driving on a visibly damaged tire.',
    },
    {
      title: 'Check tire pressure',
      body:
        "Compare all tires with the vehicle manufacturer's recommended pressure on the tire placard or in the owner's manual. Do not use the maximum pressure molded into the tire sidewall as the target pressure.",
      destinationProblemSlug: 'low-tire-pressure',
    },
    {
      title: 'Pay attention to exactly when it shakes',
      body:
        'Note whether the vibration depends on vehicle speed, braking, a recent impact or recent tire work. That pattern gives the shop a much better starting point than saying the car vibrates all the time.',
    },
    {
      title: 'Have the tire and wheel balance checked',
      body:
        'Tire balancing requires suitable equipment and trained service personnel. Ask the shop to inspect the tires and wheels as well instead of adding balance weights without checking their condition.',
    },
    {
      title: 'Check more than the tires if the symptoms do not fit',
      body:
        'Pulling, loose steering, vibration during braking or a shake that remains after proper balancing calls for diagnosis of the relevant brake, steering, suspension or alignment components.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The vibration suddenly becomes severe',
      description:
        'A major change while driving deserves immediate attention, especially when the car was previously smooth.',
      severity: 'danger',
    },
    {
      title: 'You hear repeated thumping or slapping',
      description:
        'Unusual tire noise together with vibration can indicate tire damage rather than a routine balance issue.',
      severity: 'danger',
    },
    {
      title: 'A tire has a bulge, cut or exposed internal material',
      description:
        'Physical tire damage is a reason to stop using the tire until it has been properly assessed.',
      severity: 'danger',
    },
    {
      title: 'The car begins pulling or wandering',
      description:
        'A change in directional stability broadens the problem beyond ordinary vibration and can affect vehicle control.',
      severity: 'warning',
    },
    {
      title: 'The steering suddenly feels loose or abnormal',
      description: 'Steering changes need prompt mechanical inspection.',
      severity: 'danger',
    },
    {
      title: 'The TPMS warning appears with the vibration',
      description:
        'Check the tire pressures and inspect the tires before assuming the problem is only wheel balance.',
      severity: 'warning',
    },
    {
      title: 'The vibration started after a hard wheel impact',
      description:
        'A pothole or curb strike can affect the tire, wheel or alignment and should be followed by an inspection if new vibration appears.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a shaking steering wheel at highway speed usually caused by wheel balance?',
      answer:
        'Wheel imbalance is one of the classic causes. NHTSA, USTMA and tire manufacturers all identify imbalance as a source of highway-speed vibration, but the symptom alone cannot rule out tire damage or another mechanical problem.',
    },
    {
      question: 'Can bad alignment make the steering wheel shake?',
      answer:
        'Misalignment more commonly shows up as pulling, an off-center steering wheel or uneven tire wear. Speed-specific vibration is more characteristic of tire or wheel imbalance, although both conditions can exist at the same time.',
    },
    {
      question: 'Why does the steering wheel shake only at certain speeds?',
      answer:
        'Forces from an imbalanced rotating tire and wheel change as rotational speed changes. That can make the vibration much more noticeable in one speed range than another.',
    },
    {
      question: 'Can brand-new tires cause highway vibration?',
      answer:
        'New tires should be balanced when installed. If vibration starts immediately after replacement, have the mounting, centering and balance checked rather than assuming the new tires themselves are defective.',
    },
    {
      question: 'Could a missing wheel weight cause the shaking?',
      answer:
        'Yes. Balance weights can move or come off, leaving the tire-and-wheel assembly out of balance. A balancing machine can determine whether correction is needed.',
    },
    {
      question: 'Will a tire rotation fix steering wheel vibration?',
      answer:
        'Rotation alone does not correct an imbalanced wheel. If the location or feel of the vibration changes after rotation, that can be a useful diagnostic clue, but the underlying cause still needs to be found.',
    },
    {
      question: 'Can low tire pressure cause or contribute to vibration?',
      answer:
        'Yes. Incorrect pressure changes how a tire carries load and performs. If vibration appears with a TPMS warning or a visibly low tire, check the pressure and tire condition promptly.',
    },
    {
      question: 'What if the steering wheel shakes only when I brake?',
      answer:
        'That pattern deserves a brake inspection. A vibration that appears or becomes stronger during braking can come from the brake system rather than ordinary tire or wheel imbalance.',
    },
    {
      question: 'Can tires temporarily vibrate after the car has been parked?',
      answer:
        'Yes. Temporary flat spotting can occur while a tire sits and may fade as the tire warms during driving. Vibration that persists or keeps worsening should not be written off as temporary flat spotting.',
    },
    {
      question: 'Can I balance the wheels myself?',
      answer:
        'Proper wheel balancing uses specialized equipment to measure imbalance in the tire-and-wheel assembly. USTMA guidance says balancing should be performed by trained tire service personnel.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Tire Safety Ratings and Awareness | TireWise',
      url: 'https://www.nhtsa.gov/vehicle-safety/tires',
      sourceType: 'government',
      notes:
        'NHTSA guidance on tire inspection, pressure, balance and alignment. It states that balancing prevents vehicle shake or vibration and advises consulting a tire professional for tire performance issues including noise or vibration.',
    },
    {
      publisher: 'U.S. Tire Manufacturers Association',
      title: 'Care and Service of Passenger and Light Truck Tires',
      url: 'https://www.ustires.org/sites/default/files/2024-08/Care%20and%20Service%20of%20Passenger%20and%20Light%20Truck%20Tires%202017_0.pdf',
      sourceType: 'industry',
      notes:
        'Tire-industry service guidance explaining that out-of-balance tire and wheel assemblies can produce vibration at highway speeds and that trained tire service professionals should perform balancing.',
    },
    {
      publisher: 'Michelin USA',
      title: 'Wheel Alignment and Balancing: Why They Matter',
      url: 'https://www.michelinman.com/auto/auto-tips-and-advice/tire-maintenance/wheel-alignment-wheel-balancing',
      sourceType: 'manufacturer',
      notes:
        'Explains the distinction between alignment and balancing, lists highway-speed steering wheel vibration as a common sign of wheel imbalance and recommends checks after impacts or when vibration develops.',
    },
    {
      publisher: 'Michelin USA',
      title: 'Michelin FAQs - Answers to Common Tire and Assistance Questions',
      url: 'https://www.michelinman.com/auto/assistance/michelin-faqs',
      sourceType: 'manufacturer',
      notes:
        'Covers balancing, vibration, temporary tire flat spotting, irregular wear and the need to inspect tires, steering and suspension when persistent vibration occurs.',
    },
    {
      publisher: 'Firestone Complete Auto Care',
      title: 'What To Do When Your Steering Wheel Shakes When Braking',
      url: 'https://www.firestonecompleteautocare.com/blog/brakes/steering-wheel-shakes-when-braking/',
      sourceType: 'industry',
      notes:
        'Explains that steering-wheel vibration occurring during braking can originate in the brake system, while vibration during normal driving may instead involve tire pressure, tire balance or another tire issue.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Tire pressure gauge',
      description:
        "Lets you compare each tire with the vehicle manufacturer's specified pressure instead of relying on appearance.",
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Tire and wheel balancing service',
      description:
        'Uses balancing equipment to identify and correct uneven mass distribution in the tire-and-wheel assembly.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Steering and suspension inspection',
      description:
        'Useful when vibration remains after the tires and wheels are ruled out or when the vehicle also pulls, wanders or feels loose.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual and tire information placard",
      description:
        'Provides the correct tire pressure, approved tire specifications and vehicle-specific maintenance guidance.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'low-tire-pressure',
      anchorText: 'Can low tire pressure cause the shake?',
      relationshipType: 'cause',
    },
    {
      slug: 'tpms-warning-light',
      anchorText: 'What if the TPMS warning is on too?',
      relationshipType: 'escalation',
    },
    {
      slug: 'uneven-tire-wear',
      anchorText: 'Does uneven tire wear explain the vibration?',
      relationshipType: 'cause',
    },
    {
      slug: 'tire-rotation',
      anchorText: 'Could tire rotation affect the vibration?',
      relationshipType: 'related',
    },
  ],
};
