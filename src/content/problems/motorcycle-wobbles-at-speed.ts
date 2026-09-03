import type { ProblemSeed } from '../types';

export const motorcycleWobblesAtSpeed: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'motorcycle-steering',
  slug: 'motorcycle-wobbles-at-speed',
  canonicalPath: '/motorcycles/steering/motorcycle-wobbles-at-speed/',
  name: 'Motorcycle wobble at speed',
  eyebrow: 'Mobility · Motorcycles · Steering & Handling',

  h1: 'Can I Ignore a Motorcycle That Wobbles at Speed?',
  seoTitle: 'Motorcycle Speed Wobble: When to Stop Riding and What to Check',
  metaDescription:
    'A motorcycle wobble at speed is not normal. Learn how to slow safely, when to stop riding, and how tires, loading, wheels, steering, or suspension may be involved.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Not at the speed that triggers it',

  shortAnswer:
    'No. A true side-to-side handlebar wobble or whole-bike weave can affect control. Reduce speed smoothly, pull off safely, and do not return to the speed that triggers it until the tires, loading, wheels, steering, and suspension have been checked.',

  whyItMattersHeading: 'A wobble is a control problem, not just vibration',
  whyItMatters: [
    'A handlebar vibration usually feels like a buzz or shake without the front wheel repeatedly steering left and right. A wobble is a rhythmic steering oscillation. A weave is slower and involves more of the motorcycle, producing a snaking or rolling motion. Wobble and weave require smooth deceleration because abrupt braking, acceleration, or steering input can aggravate an unstable condition.',
    'Incorrect tire pressure, tire wear, wheel imbalance or poor tire centering can contribute. Loading, a passenger, luggage, a top case, or a large accessory can change weight distribution and aerodynamics. Inspection may also uncover wheel or steering-bearing play, a bent or misaligned wheel, suspension trouble, or loose axle and other front-end fasteners.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Arrange Transport If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Motorcycle wobble triage and rider response checked against current NHTSA, state rider-handbook, tire-maker, and motorcycle-manufacturer guidance.',
  disclaimer:
    'This is general motorcycle-safety guidance, not a diagnosis. If the motorcycle feels unstable or you cannot identify and safely correct a simple pressure or loading issue, arrange transport and inspection rather than road-testing it.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'mild-deceleration-shimmy',
      label: 'Mild shimmy in a narrow speed band while slowing',
      shortDescription:
        'The bars make a gentle, repeatable left-right movement in one speed range, then settle as the motorcycle slows.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Avoid the trigger speed and arrange an inspection',
      resultBody:
        'A mild speed-specific shimmy may settle when speed falls, but it can still be associated with tire pressure, wear, wheel balance, tire centering, or steering condition. The narrow speed band does not prove it is harmless.',
      recommendedAction:
        'Keep both hands on the bars, slow smoothly, and avoid deliberately reproducing it. Check the tires and loading, then arrange a wheel, tire, and steering inspection before returning to normal higher-speed use.',
    },
    {
      slug: 'hands-off-only',
      label: 'It happens only when the handlebars are released',
      shortDescription:
        'The motorcycle feels normal with a light two-handed grip but begins to shimmy during a hands-off test.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Stop testing it hands-off',
      resultBody:
        'Riders are supposed to keep both hands on the grips. A hands-off shimmy is less urgent than a wobble that overpowers normal steering input, but it can still expose pressure, wear, balance, or steering issues.',
      recommendedAction:
        'Keep both hands on the handlebars and do not repeat the test. Check tire pressure and condition, and have the front wheel and steering inspected if the motion is repeatable.',
    },
    {
      slug: 'vibration-not-wobble',
      label: 'The bars buzz but do not sweep from side to side',
      shortDescription:
        'The sensation appears in a narrow speed range, but the motorcycle tracks straight and the steering does not oscillate.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'This sounds more like vibration',
      resultBody:
        'Speed-specific vibration commonly sends a buzz through the bars without repeatedly steering the front wheel. Wheel balance and tire centering are useful starting points, although vibration alone cannot confirm the cause.',
      recommendedAction:
        'Reduce speed and arrange a tire, wheel-balance, and centering check. Treat it as a wobble instead if the bars start moving left and right or the motorcycle begins to snake.',
    },
    {
      slug: 'single-road-kick',
      label: 'One brief handlebar kick after a bump or road seam',
      shortDescription:
        'The bars moved once after a clear road impact, immediately settled, and did not continue oscillating.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Monitor it, but inspect after a hard impact',
      resultBody:
        'One isolated deflection from a road irregularity is not the same as a continuing wobble. A hard strike can still damage a tire, wheel, bearing, or alignment even when the motorcycle settles immediately.',
      recommendedAction:
        'Stop somewhere safe and inspect the tires and wheels. If the movement repeats, the bike pulls, the tire loses pressure, or anything looks damaged, arrange transport and inspection.',
    },
    {
      slug: 'gone-after-basic-correction',
      label: 'It stopped after correcting pressure or removing cargo',
      shortDescription:
        'The tires are set to the motorcycle specification, the load is secure and balanced, and the wobble has not returned.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Confirm the correction instead of assuming it is fixed',
      resultBody:
        'Correct pressure and loading can restore normal handling, but a tire that became underinflated may have a leak or damage. A shifted or excessive load can also hide another handling issue.',
      recommendedAction:
        'Inspect the tires closely and confirm the owner-manual load and suspension settings. Ride cautiously only if the motorcycle remains completely stable; stop and arrange inspection if the symptom returns.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The motorcycle is no longer tracking normally',
      description:
        'A wobble means the steering is oscillating, while a weave means the motorcycle is moving laterally or rolling as a larger system. Either reduces the margin for abrupt rider input or another road disturbance.',
      severity: 'warning',
      chainLabel: 'Oscillation → reduced stability',
    },
    {
      stageLabel: 'IF IT REPEATS AT THE SAME SPEED',
      title: 'Avoiding the speed hides the symptom, not the cause',
      description:
        'Slowing may make the motion disappear, but pressure, wear, balance, loading, or a mechanical condition can remain and trigger it again.',
      severity: 'caution',
      chainLabel: 'Trigger returns → wobble returns',
    },
    {
      stageLabel: 'IF LOAD OR PRESSURE IS WRONG',
      title: 'Handling can remain sensitive to wind and movement',
      description:
        'Improper pressure, uneven loading, excessive weight, or shifting luggage can change how the tires and suspension carry the motorcycle.',
      severity: 'warning',
      chainLabel: 'Wrong setup → unstable handling',
    },
    {
      stageLabel: 'IF A TIRE OR FRONT-END PART IS DAMAGED',
      title: 'A routine-looking wobble may hide a serious fault',
      description:
        'Tire damage, wheel or bearing play, loose axle hardware, worn steering parts, or suspension trouble requires correction before normal riding.',
      severity: 'danger',
      chainLabel: 'Damage or looseness → control risk',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'The oscillation can become difficult to control',
      description:
        'A growing wobble or high-speed weave can move the motorcycle out of its intended path and lead to loss of control.',
      severity: 'danger',
      chainLabel: 'Uncontrolled motion → crash risk',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The motorcycle is actively wobbling while you are riding',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep a secure but relaxed hold, do not wrestle the bars, close the throttle gradually, and avoid sudden braking or acceleration. Pull off safely after the oscillation settles.',
    },
    {
      situation: 'A mild shimmy appears only in one deceleration speed band',
      ignoreAnswer: 'Only below the trigger speed',
      severity: 'warning',
      whatToDo:
        'Avoid deliberately reproducing it and stay out of higher-speed traffic. Check pressure, wear, loading, and accessories, then arrange a wheel and steering inspection.',
    },
    {
      situation: 'The wobble appears only during a hands-off test',
      ignoreAnswer: 'Briefly, with both hands on',
      severity: 'caution',
      whatToDo:
        'Stop testing it hands-off. Ride only with a normal light grip and have the tires, wheel balance, and steering checked if the shimmy is repeatable.',
    },
    {
      situation: 'It began after adding a passenger, luggage, or a top case',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Slow down and stop. Secure and balance the load, confirm load limits, and set tire pressure and adjustable suspension according to the motorcycle and accessory instructions.',
    },
    {
      situation: 'The whole motorcycle slowly snakes or rolls at higher speed',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not accelerate or make abrupt control inputs. Decelerate smoothly, pull off safely, and arrange inspection before returning to higher-speed riding.',
    },
    {
      situation: 'It began after tire, wheel, fork, or axle service',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Return the motorcycle to the shop or arrange transport. Ask for tire seating, wheel balance, axle hardware, pinch fasteners, fork alignment, bearings, and steering adjustment to be rechecked.',
    },
    {
      situation: 'A tire is low, damaged, bulged, or wearing irregularly',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop riding. Do not continue on a visibly damaged tire or one that will not hold the motorcycle manufacturer’s specified pressure.',
    },
    {
      situation: 'It disappeared after pressure or loading was corrected',
      ignoreAnswer: 'Only after a careful recheck',
      severity: 'caution',
      whatToDo:
        'Confirm that the tires are undamaged, the pressure remains correct, and the load matches the owner’s manual. If the wobble returns, stop and arrange a full inspection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Slow the motorcycle without fighting the bars',
      body:
        'Maintain a controlled, relaxed hold and close the throttle gradually. Avoid sudden braking, acceleration, or steering while the motorcycle is oscillating. Once it has slowed and settled, pull off and stop safely.',
    },
    {
      title: 'Check cold tire pressure and tire condition',
      body:
        'Compare both tires with the motorcycle manufacturer’s cold-pressure specification, not the maximum molded on the tire sidewall. Look for cuts, bulges, uneven or peaked wear, embedded objects, and a tire that is not seated evenly.',
      destinationProblemSlug: 'uneven-tire-wear',
    },
    {
      title: 'Describe whether it is vibration, wobble, or weave',
      body:
        'Note whether the bars buzz, repeatedly steer left and right, or move as part of a slower whole-bike snake. Record whether it happens during acceleration, steady cruising, or deceleration and whether loading changes it.',
      destinationProblemSlug: 'motorcycle-handlebar-vibration',
    },
    {
      title: 'Check loading, accessories, and visible fasteners',
      body:
        'Remove unnecessary cargo, secure remaining items, balance weight from side to side, and check the owner’s manual for load and suspension settings. While parked, look for obviously loose axle, wheel, handlebar, windshield, or front-end hardware. Do not guess at safety-critical torque values.',
    },
    {
      title: 'Arrange a steering and chassis inspection',
      body:
        'Ask the shop to inspect wheel balance and centering, tire condition, wheel and steering-head bearings, spokes if fitted, axle and pinch fasteners, fork alignment, suspension, swingarm bearings, and any steering damper fitted by design.',
      destinationProblemSlug: 'notchy-steering-head-bearings',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The wobble becomes violent or rapidly increases',
      description:
        'A growing steering oscillation can become difficult to control. Decelerate smoothly without forcing the handlebars and stop as soon as it is safe.',
      severity: 'danger',
    },
    {
      title: 'The motorcycle snakes across the lane',
      description:
        'A slow whole-bike weave is not ordinary handlebar vibration and can threaten directional control, especially at higher speed.',
      severity: 'danger',
    },
    {
      title: 'A tire is visibly low, cut, bulged, or distorted',
      description:
        'Physical damage or significant pressure loss can lead to tire failure. Do not continue riding on the tire.',
      severity: 'danger',
    },
    {
      title: 'The steering binds, feels notchy, or has free play',
      description:
        'Roughness, looseness, or movement at the steering head needs inspection before the motorcycle is ridden normally.',
      severity: 'danger',
    },
    {
      title: 'A wheel or axle area has movement or loose hardware',
      description:
        'Loose axle, pinch, wheel, or other front-end fasteners are not suitable for a road test. Use the motorcycle’s service information and arrange qualified repair.',
      severity: 'danger',
    },
    {
      title: 'The problem began immediately after an impact or service',
      description:
        'A wheel strike or recent tire, wheel, axle, fork, or steering job raises concern for damage, incorrect assembly, misalignment, or improper tightening.',
      severity: 'warning',
    },
    {
      title: 'Adding a passenger or luggage makes it return',
      description:
        'Stop and correct load distribution, pressure, suspension settings, and accessory installation before carrying the load again.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'What commonly causes a motorcycle to wobble at speed?',
      answer:
        'Common inspection targets include tire pressure and wear, wheel balance and tire centering, loading, accessories, steering adjustment, wheel or steering bearings, wheel alignment, suspension, swingarm bearings, and loose axle or chassis hardware.',
    },
    {
      question: 'Does a narrow speed band mean it is only a wheel-balance problem?',
      answer:
        'No. Speed-specific vibration often points toward balance or tire centering, but a true left-right steering wobble can also involve pressure, tire wear, steering, suspension, loading, or other mechanical conditions.',
    },
    {
      question: 'Why does my motorcycle wobble only when I take my hands off?',
      answer:
        'A hands-off test is not normal riding technique and does not prove the motorcycle is safe. Keep both hands on the grips, stop reproducing the symptom, and check the tires, wheel, and steering if it happens repeatedly.',
    },
    {
      question: 'Can luggage, a passenger, or a top case cause a wobble?',
      answer:
        'They can contribute by changing total load, weight distribution, suspension position, and airflow around the motorcycle. Follow the motorcycle and accessory load limits, balance the load, secure it, and use the specified pressure and suspension settings.',
    },
    {
      question: 'What is the difference between wobble and weave?',
      answer:
        'Wobble is primarily a rapid left-right oscillation at the handlebars and front end. Weave is a slower snaking or rolling motion involving more of the motorcycle. Both call for smooth deceleration rather than abrupt correction.',
    },
    {
      question: 'Should I accelerate out of a speed wobble?',
      answer:
        'No. Rider-handbook guidance warns that accelerating can make a wobble more unstable. Close the throttle gradually and avoid abrupt inputs.',
    },
    {
      question: 'Should I brake during a motorcycle wobble?',
      answer:
        'Do not make a sudden brake input while the motorcycle is oscillating. Reduce speed smoothly; once the bike has settled and is under control, brake as needed to stop safely.',
    },
    {
      question: 'Will tightening or adding a steering damper fix the problem?',
      answer:
        'Not necessarily. A damper can affect steering oscillation on a motorcycle designed for one, but it cannot repair incorrect pressure, tire wear, imbalance, loose bearings, damaged parts, or bad loading. Use only approved equipment and settings.',
    },
    {
      question: 'Is wobble after new tires normal?',
      answer:
        'Do not dismiss it as normal. Have the pressure, tire size and specification, seating on the rim, wheel balance, installation, axle fasteners, and alignment rechecked by the installer.',
    },
    {
      question: 'Can I ride the motorcycle home after a mild wobble?',
      answer:
        'Only if the motion has fully stopped, both tires look and feel properly inflated, the steering has no looseness or binding, and you can remain below the trigger speed on a low-speed route. If it returns or the bike feels unstable, stop and arrange transport.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Utah Driver License Division',
      title: 'Motorcycle Section 4 | Ride Within Your Abilities',
      url: 'https://dld.utah.gov/motorcycle-handbook-section-4-ride-within-your-abilities/',
      sourceType: 'government',
      notes:
        'Defines motorcycle wobble, lists loading, accessories, pressure, wheel, bearing, steering, and swingarm causes, and advises a firm controlled hold, gradual throttle closure, no acceleration, and pulling off to fix the problem.',
    },
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Motorcycle Safety: Helmets, Motorists, Road Awareness',
      url: 'https://www.nhtsa.gov/road-safety/motorcycles',
      sourceType: 'government',
      notes:
        'Supports checking motorcycle tire pressure and tread before riding and securing and balancing cargo while adjusting suspension and tire pressure for added weight.',
    },
    {
      publisher: 'Michelin USA',
      title: 'Motorcycle Handlebar Vibration, Wobble, and Other Handling Difficulties',
      url: 'https://www.michelinman.com/motorcycle/tips-and-advice/motorcycle-tire-basics/motorcycle-handlebar-vibration-and-wobble',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes speed-specific vibration, front-end wobble, kickback, and high-speed weave; links them to balance, centering, wear, pressure, suspension, and added load; and recommends smooth deceleration without abrupt braking or acceleration.',
    },
    {
      publisher: 'Bridgestone',
      title: 'Motorcycle Tire Safety and Maintenance Manual',
      url: 'https://tires.bridgestone.com/en-us/learn/motorcycle/tire-maintenance/motorcycle-tire-safety-and-maintenance-manual',
      sourceType: 'manufacturer',
      notes:
        'Supports using motorcycle-specified cold pressure, checking load limits, inspecting irregular wear and damage, and treating riding vibration, bulges, pressure loss, and overloaded tires as conditions requiring evaluation.',
    },
    {
      publisher: 'Harley-Davidson',
      title: 'Troubleshooting: Handling Irregularities',
      url: 'https://serviceinfo.harley-davidson.com/sip/service/procedure/2062292608231078472/BLAISE/1236105/en_US?nid=6410&uid=1236105',
      sourceType: 'manufacturer',
      notes:
        'Harley-Davidson troubleshooting material lists loading, tires, pressure, shocks, loose axle hardware, alignment, steering-head bearings, wheel balance, swingarm bearings, mounts, and steering dampers among handling inspection points.',
    },
    {
      publisher: 'Indian Motorcycle',
      title: '2024 Indian Motorcycle Rider’s Manual',
      url: 'https://publications.polaris.com/owner/owners-manuals/0000886880.xml?onepage=true',
      sourceType: 'manufacturer',
      notes:
        'Provides model-specific warnings about cargo distribution, weight limits, large accessories, wind effects, suspension adjustment, steering looseness, wheel bearings, and correcting abnormal motorcycle operation.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Accurate motorcycle tire-pressure gauge',
      description:
        'Allows both cold tire pressures to be compared with the motorcycle manufacturer’s specification.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Motorcycle owner’s manual',
      description:
        'Provides the correct tire pressures, load limits, suspension adjustments, approved tire specifications, and accessory restrictions for the exact motorcycle.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Motorcycle handling and wheel inspection',
      description:
        'A service shop can check wheel balance and tire centering along with steering bearings, axle hardware, fork alignment, suspension, and chassis play.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Motorcycle roadside assistance or transport',
      description:
        'The safer option when a tire is damaged, steering is loose or binding, hardware may be loose, or the motorcycle cannot be kept stable.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'motorcycle-handlebar-vibration',
      anchorText: 'Could handlebar vibration be a different problem?',
      relationshipType: 'sibling',
    },
    {
      slug: 'notchy-steering-head-bearings',
      anchorText: 'Could notchy steering-head bearings cause the wobble?',
      relationshipType: 'cause',
    },
    {
      slug: 'uneven-tire-wear',
      anchorText: 'Does uneven tire wear affect motorcycle stability?',
      relationshipType: 'cause',
    },
    {
      slug: 'motorcycle-pulls-to-one-side',
      anchorText: 'Why does my motorcycle pull to one side?',
      relationshipType: 'related',
    },
  ],
};
