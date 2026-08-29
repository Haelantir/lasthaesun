import type { ProblemSeed } from '../types';

export const carPullsToOneSide: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'tires',
  slug: 'car-pulls-to-one-side',
  canonicalPath: '/cars/tires/car-pulls-to-one-side/',
  name: 'Car Pulling to One Side',
  eyebrow: 'Mobility · Cars · Tires',

  h1: 'Can I Ignore a Car That Pulls to One Side?',
  seoTitle: 'Car Pulling Left or Right? When It Needs Attention',
  metaDescription:
    'A car that pulls left or right can point to low tire pressure, alignment, tire damage or brake trouble. Here’s when to stop and what to check first.',

  aliases: ['/cars/tires/car-pulling-left-or-right/', '/cars/tires/car-drifts-to-one-side/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Usually only briefly',

  shortAnswer:
    'Probably not. A mild drift that only happens on a sloped road can come from the road itself, but a consistent pull on a flat road needs attention. Check tire pressure first; if the pull is sudden, strong, happens while braking or comes with vibration or tire damage, stop driving normally and get it inspected.',

  whyItMattersHeading: 'Why Does a Car Pull to One Side?',
  whyItMatters: [
    'A car should track straight on a flat road without constant steering correction. If it keeps tugging left or right, something is making the tires generate unequal forces. Common causes include unequal tire pressure, tire damage or wear, wheel misalignment, and worn steering or suspension parts.',
    'When the pull shows up only during braking, the brakes move much higher on the suspect list. The important clue is not just which direction the car moves, but when it happens: all the time, only under braking, or immediately after a pothole or curb strike.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Call for Help If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Checked against NHTSA tire-safety guidance plus current AAA, Michelin, Bridgestone and Firestone material on tire pressure, alignment, braking and vehicle pulling.',
  disclaimer:
    'This page is general triage guidance, not an inspection of your car. If the vehicle feels difficult to control or braking has changed, stop somewhere safe and have it inspected.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'mild-drift-on-sloped-road',
      label: 'It drifts slightly only on sloped or crowned roads',
      shortDescription: 'The car tracks normally on a flat, straight road and the steering feels normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'ROAD SHAPE MAY BE THE REASON',
      resultBody:
        'Road slope and crosswind can influence how a car tracks. If the drift disappears on a flat, straight road and there are no other symptoms, this does not look like a persistent vehicle pull.',
      recommendedAction:
        'Check the car again on a safe, flat road with little crosswind. If it consistently pulls the same way there, treat it as a vehicle problem.',
    },
    {
      slug: 'constant-pull-on-flat-road',
      label: 'It pulls the same way on a flat, straight road',
      shortDescription: 'You have to keep correcting the steering to hold a straight path.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'CHECK THE TIRES, THEN THE ALIGNMENT',
      resultBody:
        'A steady pull can come from unequal tire pressure, tire damage or poor wheel alignment. Alignment problems can also create uneven tread wear and keep the steering wheel from sitting centered.',
      recommendedAction:
        'Check all tire pressures against the vehicle placard. If they are correct and the pull remains, arrange a tire, alignment and steering inspection.',
    },
    {
      slug: 'one-tire-low',
      label: 'One tire is low or the TPMS light is on',
      shortDescription: 'The pull started with a pressure warning or one tire measures lower than specified.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'FIX THE PRESSURE PROBLEM FIRST',
      resultBody:
        'A pressure difference can make the car pull, and significant underinflation can damage the tire and affect control.',
      recommendedAction:
        "Inflate to the vehicle manufacturer's recommended pressure and inspect for damage. If the same tire loses pressure again, have the leak found.",
    },
    {
      slug: 'pulls-only-when-braking',
      label: 'It pulls only when I brake',
      shortDescription: 'The car tracks normally until the brake pedal is applied.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'TREAT THIS AS A BRAKE SYMPTOM',
      resultBody:
        'Pulling during braking can come from uneven brake action, including a sticking caliper or uneven brake wear. That can change how evenly the car slows down.',
      recommendedAction:
        'Minimize driving and arrange a brake inspection. If braking feels weak, the pedal feels abnormal or the car is hard to control, stop and use roadside assistance.',
    },
    {
      slug: 'sudden-strong-pull',
      label: 'The pull started suddenly and is strong',
      shortDescription: 'The steering now needs major correction or the car is difficult to keep in its lane.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP WHEN IT IS SAFE',
      resultBody:
        'A sudden handling change can come from a tire losing pressure, tire damage or a steering, suspension or brake fault. Continuing before you know the cause adds unnecessary loss-of-control risk.',
      recommendedAction:
        'Ease off the accelerator, avoid abrupt steering or braking and pull over somewhere safe. Inspect the tires and use roadside assistance if the cause is not obvious and safely correctable.',
    },
    {
      slug: 'after-pothole-or-curb-hit',
      label: 'It started after a pothole or curb hit',
      shortDescription: 'The car pulled normally before the impact and changed afterward.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'CHECK FOR IMPACT DAMAGE',
      resultBody:
        'An impact can change alignment and can also damage a tire or wheel. A new pull after the hit is a useful sign that something changed.',
      recommendedAction:
        'Look for a low tire, bulge, cut or bent-looking wheel. If nothing obvious is visible, have the tires, wheels and alignment inspected.',
    },
    {
      slug: 'pull-with-vibration',
      label: 'It pulls and also vibrates or thumps',
      shortDescription: 'The steering wheel or vehicle shakes, or there is a new repeating thump.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DO NOT TREAT THIS AS ALIGNMENT ALONE',
      resultBody:
        'Vibration or thumping can point to tire or wheel trouble, including damage that needs inspection. Pairing that with a pull makes continued normal driving a bad bet.',
      recommendedAction:
        'Slow down and stop somewhere safe. Check the tires for pressure loss or visible damage before deciding whether the car should move again.',
    },
    {
      slug: 'uneven-wear-and-crooked-wheel',
      label: 'The tires wear unevenly or the steering wheel sits crooked',
      shortDescription:
        'One edge of a tire is wearing faster or the wheel is off-center while driving straight.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'ALIGNMENT IS A STRONG SUSPECT',
      resultBody:
        'Uneven tread wear and an off-center steering wheel are common signs that wheel alignment is outside the intended range.',
      recommendedAction:
        'Schedule an alignment check and ask for the tires and steering or suspension parts to be inspected at the same visit.',
    },
    {
      slug: 'pull-after-tire-work',
      label: 'It started after tire replacement, rotation or other wheel work',
      shortDescription: 'The car did not pull this way before the recent service.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'TAKE IT BACK FOR A RECHECK',
      resultBody:
        'Pressure differences, tire condition, installation details or alignment can change how the car tracks after wheel or tire work.',
      recommendedAction:
        'Check pressures first. If they match the vehicle specification and the pull remains, return to the shop and describe exactly when and which way the car pulls.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'You keep correcting the steering',
      description:
        'A persistent pull means the car is not tracking neutrally. Even before the cause is known, the symptom deserves a basic tire-pressure and condition check.',
      severity: 'caution',
      chainLabel: 'Pull → constant steering correction',
    },
    {
      stageLabel: 'IF THE CAUSE IS PRESSURE OR ALIGNMENT',
      title: 'Tire wear can become uneven',
      description:
        'Incorrect pressure and misalignment change how the tread meets the road. Misalignment can wear one edge faster and reduce tire life.',
      severity: 'caution',
      chainLabel: 'Unequal forces → uneven wear',
    },
    {
      stageLabel: 'IF THE CAUSE IS A BRAKE OR MECHANICAL FAULT',
      title: 'Handling or braking can become less predictable',
      description:
        'A brake that acts differently from the opposite side, or worn steering or suspension parts, can make the pull more important than a routine alignment issue.',
      severity: 'warning',
      chainLabel: 'Mechanical fault → less predictable control',
    },
    {
      stageLabel: 'IF A TIRE IS DAMAGED OR LOSING PRESSURE',
      title: 'The tire can become unsafe to keep using',
      description:
        'Significant underinflation and physical tire damage can progress to tire failure. A new pull with vibration, thumping or visible damage calls for a stop and inspection.',
      severity: 'danger',
      chainLabel: 'Tire problem → damage → possible failure',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'You can lose control of the vehicle',
      description:
        'If the pull comes from a serious tire, steering, suspension or brake problem, continuing to drive can reduce your ability to steer or stop predictably.',
      severity: 'danger',
      chainLabel: 'Serious fault → loss-of-control risk',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Slight drift only on a sloped road; normal on a flat road',
      ignoreAnswer: 'Yes, if it stays road-dependent',
      severity: 'info',
      whatToDo:
        'Confirm the behavior on a safe, flat road with little crosswind and keep an eye out for any new vibration, tire warning or persistent same-direction pull.',
    },
    {
      situation: 'Consistent pull on a flat, straight road',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Check all tire pressures first. If they are correct, arrange an alignment and tire inspection rather than compensating with the steering wheel.',
    },
    {
      situation: 'Pull disappears after correcting low tire pressure',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Drive normally only if the car now tracks correctly and the tire looks sound. Recheck that tire later because repeated pressure loss means there is still a leak to find.',
    },
    {
      situation: 'Pull happens only while braking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange a brake inspection and minimize unnecessary driving. Stop if braking feels weak, the pedal changes or the pull becomes hard to control.',
    },
    {
      situation: 'Pull started after a pothole or curb strike',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Inspect the tires and wheels for obvious damage and have the alignment checked if the new pull remains.',
    },
    {
      situation: 'Pull comes with heavy vibration, thumping or visible tire damage',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Slow down, stop somewhere safe and inspect the tires. Use roadside assistance if a tire is badly underinflated, damaged or the car still feels unstable.',
    },
    {
      situation: 'Sudden strong pull or difficulty keeping the car in its lane',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop driving when it is safe to pull over. Do not continue normal driving until the cause has been identified.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check all four tire pressures',
      body:
        "Use a gauge and compare each reading with the cold-pressure specification on the vehicle's tire placard or in the owner's manual. Do not use the maximum pressure molded into the tire sidewall as the target.",
      destinationProblemSlug: 'low-tire-pressure',
    },
    {
      title: 'Look closely at the tires and tread',
      body:
        'Check for a tire that looks low, a bulge, cut, unusual wear pattern or obvious impact damage. Uneven wear can point toward alignment or suspension trouble.',
      destinationProblemSlug: 'uneven-tire-wear',
    },
    {
      title: 'Notice exactly when the pull happens',
      body:
        'Tell the shop whether the car pulls while cruising, only under braking, after an impact, or together with vibration. That pattern helps separate tire and alignment causes from brake or mechanical causes.',
    },
    {
      title: 'Get the alignment and steering checked if pressure is correct',
      body:
        'A persistent same-direction pull on a flat road warrants an alignment measurement and inspection for tire, steering or suspension problems. Do not assume an alignment adjustment alone will fix every pull.',
    },
    {
      title: 'Treat vibration as a separate warning sign',
      body:
        'If the pull comes with shaking or thumping, stop treating it as a minor tracking annoyance. Inspect the tires and wheels before continuing normal driving.',
      destinationProblemSlug: 'wheel-vibration',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The pull becomes sudden or hard to control',
      description:
        'A major change in steering behavior can signal a tire or mechanical problem that should not be diagnosed by continuing to drive.',
      severity: 'danger',
    },
    {
      title: 'A tire looks flat, bulged, cut or otherwise damaged',
      description: 'Physical tire damage or major pressure loss can lead to tire failure.',
      severity: 'danger',
    },
    {
      title: 'Heavy vibration or thumping starts with the pull',
      description:
        'This combination can point to tire or wheel damage and needs inspection before normal driving continues.',
      severity: 'danger',
    },
    {
      title: 'Braking feels weak or the pedal suddenly feels different',
      description:
        'A pull paired with reduced or abnormal braking raises the concern beyond routine alignment.',
      severity: 'danger',
    },
    {
      title: 'You smell something burning or one wheel area is unusually hot',
      description:
        'A dragging brake can generate heat. Do not touch the wheel or brake parts to test the temperature.',
      severity: 'warning',
    },
    {
      title: 'The steering feels loose, stiff or unresponsive',
      description: 'A pull plus a major change in steering feel can indicate a steering or suspension problem.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can low tire pressure really make a car pull to one side?',
      answer:
        'Yes. Unequal pressure can change how the tires roll and grip, and AAA lists an underinflated or damaged tire as a possible cause of a steady-speed pull. Check pressures with a gauge before paying for an alignment.',
    },
    {
      question: 'Does pulling always mean I need a wheel alignment?',
      answer:
        'No. Misalignment is common, but low tire pressure, tire damage, uneven wear, brakes and steering or suspension problems can cause similar symptoms. A good inspection should identify the cause before adjustments are made.',
    },
    {
      question: 'Why does my car pull only when I press the brake pedal?',
      answer:
        'That pattern points more strongly toward a brake problem. Uneven brake action or a sticking caliper can make the car move to one side as it slows.',
    },
    {
      question: 'Can a crowned road make a good car drift?',
      answer:
        'Yes. Road slope and crosswind can influence tracking. A more useful alignment clue is a consistent same-direction pull on a flat, straight road with little crosswind.',
    },
    {
      question: 'Why is my steering wheel crooked when the car is going straight?',
      answer:
        'An off-center steering wheel can be a sign of misalignment. If it appears together with pulling or uneven tread wear, have the alignment and related steering or suspension parts checked.',
    },
    {
      question: 'My car started pulling after I hit a pothole. What should I check?',
      answer:
        'Check tire pressure and look for visible tire or wheel damage first. An impact can also disturb alignment, so a new persistent pull after the hit is a reason to have the tires, wheels and alignment inspected.',
    },
    {
      question: 'Can tire rotation fix a pull?',
      answer:
        'Sometimes changing tire positions changes the symptom, but rotation is not a diagnosis or a guaranteed fix. If the car consistently pulls, find out whether the cause is pressure, the tire itself, alignment or another component.',
    },
    {
      question: 'My car started pulling after new tires. Is that normal?',
      answer:
        'It should not be dismissed as normal. Verify all pressures first, then return to the installer if the pull remains so the tires, installation and alignment can be checked.',
    },
    {
      question: 'Can I just keep driving and hold the steering wheel against the pull?',
      answer:
        'That hides the symptom without fixing the cause. A mild road-dependent drift is one thing; a persistent pull means you should check the tires and have the car inspected if it does not resolve.',
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
        'Supports checking vehicle-specified tire pressure, inspecting tire damage and treating significant underinflation, vibration and other tire-performance changes as safety issues.',
    },
    {
      publisher: 'AAA',
      title: 'Tire Safety and Maintenance',
      url: 'https://exchange.aaa.com/automotive/car-care-repair-and-maintenance/tire-safety-and-maintenance/',
      sourceType: 'industry',
      notes:
        'Lists low or damaged tires, brake problems and poor wheel alignment as causes of pulling and recommends a full inspection because a pull has more than one possible cause.',
    },
    {
      publisher: 'Michelin USA',
      title: 'Symptom: Pulling to One Side',
      url: 'https://www.michelinman.com/auto/auto-tips-and-advice/tire-damage/handling-problems/symptom-pulling-to-one-side',
      sourceType: 'manufacturer',
      notes:
        'Identifies pulling to one side and uneven tire wear as signs that wheel alignment should be inspected.',
    },
    {
      publisher: 'Bridgestone',
      title: 'Tire Alignment: What You Need to Know',
      url: 'https://tires.bridgestone.com/en-us/learn/automotive/tire-maintenance/tire-alignment',
      sourceType: 'manufacturer',
      notes:
        'Explains that alignment affects handling and lists pulling left or right, an off-center steering wheel, vibration and uneven tread wear as signs of misalignment.',
    },
    {
      publisher: 'AAA Auto Club Group',
      title: 'How to Know if Your Brakes Are Going Bad',
      url: 'https://www.acg.aaa.com/connect/blogs/5c/auto/how-to-know-if-your-brakes-are-going-bad',
      sourceType: 'industry',
      notes:
        'Identifies pulling to one side as a possible brake symptom and describes uneven braking from sticking calipers or brake hose or line restrictions.',
    },
    {
      publisher: 'Firestone Complete Auto Care',
      title: "Are Your Brake Calipers Sticking? Here's How to Get to the Root of the Issue",
      url: 'https://www.firestonecompleteautocare.com/blog/brakes/signs-of-a-bad-brake-caliper/',
      sourceType: 'industry',
      notes:
        'Lists pulling, a burning smell, excess brake heat, reduced braking and a soft pedal among signs associated with a sticking or seized brake caliper.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Tire pressure gauge',
      description:
        "Lets you compare all tires with the vehicle manufacturer's specified cold pressures instead of relying on appearance.",
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Tire and alignment inspection',
      description:
        'Useful when pressures are correct but the car still pulls, the steering wheel is off-center or the tread is wearing unevenly.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Brake inspection',
      description: 'The right service when the car pulls mainly during braking or braking feel has changed.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Roadside assistance',
      description:
        'Use it when the car is difficult to control, a tire is badly damaged or you cannot safely continue driving.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'low-tire-pressure',
      anchorText: 'Could low tire pressure be causing the pull?',
      relationshipType: 'cause',
    },
    {
      slug: 'uneven-tire-wear',
      anchorText: 'Is uneven tire wear a sign of bad alignment?',
      relationshipType: 'sibling',
    },
    {
      slug: 'wheel-vibration',
      anchorText: 'What if the car pulls and vibrates too?',
      relationshipType: 'escalation',
    },
    {
      slug: 'squeaky-brakes',
      anchorText: 'Could the pulling be coming from the brakes?',
      relationshipType: 'related',
    },
  ],
};
