import type { ProblemSeed } from '../types';

export const burningSmellFromEngine: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'engine',
  slug: 'burning-smell-from-engine',
  canonicalPath: '/cars/engine/burning-smell-from-engine/',
  name: 'Burning Smell After Driving',
  eyebrow: 'Mobility · Cars · Engine',

  h1: 'Can I Ignore a Burning Smell After Driving?',
  seoTitle: 'Burning Smell After Driving: When to Stop and What to Check',
  metaDescription:
    'A burning smell after driving can come from hot brakes, leaking oil, a slipping belt, debris, or wiring. See when to stop and when a brief smell can wait.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep driving?',
  canIUseItLabel: 'Only if the smell is faint, brief, and nothing else is wrong',

  shortAnswer:
    'Probably not as a habit. A faint smell that appears once and disappears can have a harmless cause, but a new or recurring burning odor can also come from overheated brakes, leaking fluid, a slipping belt, or an electrical fault. Stop driving if there is smoke, a strong electrical smell, an overheating warning, or any change in braking.',

  whyItMattersHeading: 'Why a Burning Smell Is Hard to Judge by Smell Alone',
  whyItMatters: [
    'Your car has several parts that normally get very hot. Brakes create heat through friction, exhaust parts run hot enough to burn road debris, and engine heat can make leaking oil or other fluids smell much stronger after you park. A belt that is slipping can also create a rubber smell.',
    'The problem is that a harmless bit of debris and an overheating electrical component can both announce themselves with the same basic warning: something smells burned. Location, timing, smoke, warning lights, noises, fluid spots, and changes in how the car drives matter more than trying to identify the odor perfectly.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Get Help If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Reviewed for burning-odor causes, brake and oil warning signs, vehicle-fire actions, recall checks, and when continued driving becomes unsafe.',
  disclaimer:
    'General automotive triage guidance only. A burning smell can have several causes, and smell alone cannot confirm which part is failing.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'brief-smell-after-recent-oil-change',
      label: 'The smell started after a recent oil change and fades',
      shortDescription:
        'There is no smoke, no warning light, no oil puddle, and the odor is getting weaker rather than stronger.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'A small spill may be burning off',
      resultBody:
        'A small amount of oil spilled onto a hot engine or exhaust surface can create a temporary odor after service. That is different from a smell that keeps returning or is paired with visible leakage.',
      recommendedAction:
        'Check the oil level and look for fresh drips once the vehicle is cool. If the smell keeps returning, have the oil filter, drain plug, and nearby seals checked.',
    },
    {
      slug: 'burning-oil-smell-with-leak',
      label: 'It smells like hot oil and you see fresh oil',
      shortDescription:
        'There are new oil spots, wet engine surfaces, or light smoke from the engine area after driving.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as an active oil leak',
      resultBody:
        'Oil that reaches hot engine or exhaust parts can produce a strong burning smell. A continuing leak can also lower the engine oil level.',
      recommendedAction:
        "Avoid unnecessary driving. Check the oil level according to the owner's manual and arrange an inspection before the leak gets worse.",
    },
    {
      slug: 'smell-after-heavy-braking',
      label: 'The smell appeared after hard braking or a long downhill',
      shortDescription:
        'The odor is strongest near the wheels, the brake pedal still feels normal, and the smell begins to fade after stopping.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The brakes may simply be very hot',
      resultBody:
        'Heavy or prolonged braking can overheat pads and rotors enough to create an acrid smell even when nothing has broken.',
      recommendedAction:
        'Stop somewhere safe and let the brakes cool naturally. If the smell returns during ordinary driving or braking feels different, have the brake system inspected.',
    },
    {
      slug: 'one-wheel-smells-hot',
      label: 'The smell is strongest at one wheel',
      shortDescription:
        'One corner smells much hotter than the others, the car may pull, or the brake pedal feels different.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A dragging brake is possible',
      resultBody:
        'A sticking caliper or parking-brake problem can keep a pad in contact with the rotor and create continuous heat. That can reduce braking performance and damage brake parts.',
      recommendedAction:
        'Do not keep driving normally. Arrange a brake inspection and use a tow if braking feels weak, the vehicle pulls badly, or the wheel area is smoking.',
    },
    {
      slug: 'electrical-plastic-smell',
      label: 'It smells like burning plastic or electrical insulation',
      shortDescription:
        'The odor comes from the dash, vents, fuse area, or under the hood, especially with flickering or failed electrical accessories.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Electrical overheating needs prompt attention',
      resultBody:
        'Overheated wiring, a failing motor, a short circuit, or another electrical fault can produce a sharp burning-plastic smell and can become a fire hazard.',
      recommendedAction:
        'Pull over safely and switch the vehicle off. If there is smoke, sparking, or visible melting, move away from the vehicle and call emergency services.',
    },
    {
      slug: 'burning-rubber-with-squeal',
      label: 'It smells like burning rubber and the engine area is squealing',
      shortDescription: 'The odor is paired with squealing, chirping, or a new accessory-related problem.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'A belt or driven component may be slipping',
      resultBody:
        'A slipping or damaged drive belt can create heat and a rubber smell. If the belt fails, systems driven by that belt may stop working and some vehicles can overheat.',
      recommendedAction:
        'Avoid unnecessary driving and have the belt, pulleys, and driven accessories inspected. Stop if an overheating warning or major steering change appears.',
    },
    {
      slug: 'debris-on-hot-exhaust',
      label: 'The smell began after driving over road debris',
      shortDescription:
        'You suspect plastic or other debris contacted the exhaust, there are no warning lights, and the odor is fading.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Hot exhaust parts can burn trapped debris',
      resultBody:
        'Plastic bags, leaves, and other debris can stick near hot exhaust parts and make a strong temporary odor.',
      recommendedAction:
        'Once the vehicle is fully cool, look from a safe position for visible debris. Do not crawl under a hot vehicle. If the smell persists or smoke appears, have it inspected.',
    },
    {
      slug: 'overheating-warning-with-smell',
      label: 'A temperature warning appears with the burning smell',
      shortDescription:
        'The temperature gauge is high, an overheating warning is on, or the vehicle is losing cooling performance.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop for the overheating warning',
      resultBody:
        'A burning smell can accompany overheating as hot plastic, rubber, leaking fluid, or nearby components are exposed to excessive heat.',
      recommendedAction:
        "Pull over safely, shut the engine off, and follow the owner's manual for overheating. Do not keep driving to see whether the warning clears.",
    },
    {
      slug: 'smoke-or-flames',
      label: 'You see smoke or flames',
      shortDescription:
        'Smoke is coming from the engine bay, wheel area, dashboard, or under the vehicle, or there is visible fire.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a fire emergency',
      resultBody: 'Active smoke or fire changes the problem from diagnosis to personal safety.',
      recommendedAction:
        'Pull over safely, turn the vehicle off, get everyone out, move away from traffic and the vehicle, and call 911. Do not open the hood if you suspect a fire underneath it.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Heat is affecting something',
      description:
        'The odor means a material or fluid is getting hot enough to produce a noticeable smell, but the smell alone does not identify the cause.',
      severity: 'info',
      chainLabel: 'Odor appears',
    },
    {
      stageLabel: 'IF IT KEEPS HAPPENING',
      title: 'A hidden fault becomes more likely',
      description:
        'Repeated smells during normal driving point more strongly toward a leak, dragging brake, slipping belt, electrical problem, or another heat-related fault.',
      severity: 'caution',
      chainLabel: 'Odor repeats',
    },
    {
      stageLabel: 'IF FRICTION OR A LEAK CONTINUES',
      title: 'Parts can overheat or wear faster',
      description:
        'Continuous friction can damage brake or belt components, while leaking fluids can reach hot surfaces or leave a system with too little fluid.',
      severity: 'warning',
      chainLabel: 'Heat and wear build',
    },
    {
      stageLabel: 'IF BRAKING OR COOLING IS AFFECTED',
      title: 'The car may no longer be safe to drive',
      description:
        'A dragging brake can reduce stopping performance, and a failed belt or cooling problem can lead to overheating on vehicles that depend on that belt.',
      severity: 'danger',
      chainLabel: 'Safe operation is affected',
    },
    {
      stageLabel: 'IF SMOKE OR FIRE DEVELOPS',
      title: 'Get out and call for help',
      description:
        'Vehicle fires can spread quickly. Once smoke or flames appear, protecting people matters more than identifying the failed part.',
      severity: 'danger',
      chainLabel: 'Fire emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A faint smell appeared once after recent service and is clearly fading',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Check for fresh leaks and verify fluid levels after the vehicle cools. Arrange service if the smell returns.',
    },
    {
      situation: 'The smell returns on ordinary drives',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Have the vehicle inspected rather than waiting for a warning light or visible smoke.',
    },
    {
      situation: 'The smell followed heavy braking and the pedal still feels normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Stop safely and let the brakes cool naturally. If the smell returns during normal braking, get the brakes checked.',
    },
    {
      situation: 'One wheel smells much hotter or the vehicle pulls while braking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat it as a possible dragging brake and arrange prompt inspection. Do not continue if braking is weak or the wheel area smokes.',
    },
    {
      situation: 'The odor smells electrical or like melting plastic',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Pull over safely and switch the vehicle off. If there is smoke, sparking, or melting, move away and call emergency services.',
    },
    {
      situation: 'A temperature or oil-pressure warning appears too',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        "Stop safely and follow the owner's manual for that warning. The warning takes priority over diagnosing the smell.",
    },
    {
      situation: 'Smoke or flames are visible',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop, turn the vehicle off, get everyone out, move away from the vehicle and traffic, and call 911.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Work out where the smell is strongest',
      body:
        'Without touching hot parts, note whether the odor is strongest near a wheel, under the hood, through the vents, or under the center of the car. That location can narrow the likely cause.',
    },
    {
      title: 'Check for smoke, warning lights, and new noises',
      body:
        'Smoke, an overheating or oil-pressure warning, electrical problems, belt squeal, weak braking, or major power loss raises the urgency immediately.',
      destinationProblemSlug: 'engine-overheating',
    },
    {
      title: 'Check the oil level and look for fresh leakage',
      body:
        "After the vehicle is cool and parked safely, follow the owner's manual for checking engine oil. Fresh oil on the ground or wetness around the engine makes a leak more likely.",
      destinationProblemSlug: 'oil-leak',
    },
    {
      title: 'Treat a wheel-area smell as a brake clue',
      body:
        'If the odor is concentrated near one wheel, pay attention to pulling, grinding, a soft pedal, or smoke. Those symptoms need a brake inspection rather than another test drive.',
      destinationProblemSlug: 'squeaky-brakes',
    },
    {
      title: 'Check for open safety recalls',
      body:
        'Use the NHTSA recall lookup with your VIN or license plate. A burning smell does not prove a recall applies, but vehicle-specific safety guidance matters if your car is affected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Smoke comes from the engine bay, dash, wheel area, or undercarriage',
      description:
        'If there are flames or you suspect a vehicle fire, get everyone out, move away from the vehicle and traffic, and call 911. Do not open the hood if you suspect a fire underneath it.',
      severity: 'danger',
    },
    {
      title: 'The smell is electrical and getting stronger',
      description:
        'Burning plastic, sparking, flickering accessories, or visible melting can indicate electrical overheating.',
      severity: 'danger',
    },
    {
      title: 'Braking feels weak, soft, or the car pulls hard',
      description:
        'A burning smell near a wheel with changed braking can point to a dragging or overheated brake.',
      severity: 'danger',
    },
    {
      title: 'An overheating warning appears',
      description: "Stop safely and follow the vehicle's overheating procedure instead of continuing to drive.",
      severity: 'danger',
    },
    {
      title: 'A red oil-pressure warning appears',
      description:
        "Stop safely and follow the owner's manual. A burning-oil smell with an oil-pressure warning is not a wait-and-see situation.",
      severity: 'danger',
    },
    {
      title: 'A belt squeal comes with overheating or loss of an accessory',
      description:
        'A slipping or failed belt can affect systems driven by that belt and may leave the vehicle unable to continue safely.',
      severity: 'warning',
    },
    {
      title: 'The odor returns every time you drive',
      description:
        'Repetition makes a one-off spill or piece of road debris less likely and deserves diagnosis.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can a recent oil change cause a burning smell?',
      answer:
        'Yes. A small spill on a hot engine or exhaust surface can smell for a while after service. If the smell keeps returning, check for a leak or an improperly sealed service point.',
    },
    {
      question: 'Can hot brakes smell even if nothing is broken?',
      answer:
        'Yes. Heavy braking or a long downhill can make brakes hot enough to smell. A smell during normal driving, especially from one wheel, is more concerning.',
    },
    {
      question: 'Should I pour water on brakes that smell hot?',
      answer:
        'No. Let the brakes cool naturally. Rapid cooling can damage hot brake parts, and a recurring smell still needs inspection.',
    },
    {
      question: 'Can a plastic bag stuck under the car cause a burning smell?',
      answer:
        'Yes. Road debris can contact the hot exhaust and create a strong temporary odor. Do not reach under a hot vehicle to remove it.',
    },
    {
      question: 'Why is the smell stronger after I park?',
      answer:
        'Heat remains in the engine, exhaust, and brakes after the car stops. Leaking oil, trapped debris, or hot brake parts can keep producing odor even after the engine is off.',
    },
    {
      question: 'Can a burning smell enter through the air vents?',
      answer:
        'Yes. Odors from under the hood can be pulled into the cabin through the ventilation system, so a smell at the vents does not always mean the fault is inside the dashboard.',
    },
    {
      question: 'Can a slipping clutch cause a burning smell?',
      answer:
        'Yes, on a manual-transmission vehicle. A clutch that overheats can produce a sharp burned odor. If it happens repeatedly or the clutch starts slipping, have it inspected.',
    },
    {
      question: 'Does a burning smell always trigger a warning light?',
      answer:
        'No. A dragging brake, belt problem, road debris, small fluid leak, or some electrical faults may create an odor before a dashboard warning appears.',
    },
    {
      question: 'Should I open the hood if I see smoke?',
      answer:
        'Not if you suspect an under-hood fire. Get out and move away. The U.S. Fire Administration warns that opening a hood or trunk when fire is suspected can make the fire grow.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Fire Administration',
      title: 'Vehicle Fire Safety',
      url: 'https://www.usfa.fema.gov/prevention/vehicle-fires/',
      sourceType: 'government',
      notes:
        'Advises drivers to pull over, shut off the engine, get everyone out, avoid opening the hood if fire is suspected, move away, and call 911.',
    },
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Check for Recalls',
      url: 'https://www.nhtsa.gov/recalls',
      sourceType: 'government',
      notes:
        'Provides VIN and license-plate recall lookup and explains that vehicle-specific recall results can identify unrepaired safety recalls.',
    },
    {
      publisher: 'AAA Via',
      title: 'Signs Your Brakes Need Service',
      url: 'https://mwg.aaa.com/via/car/brake-check-service-tips',
      sourceType: 'industry',
      notes:
        'Explains that overheated or frozen brake calipers can produce a burning odor and advises letting overheated brakes cool naturally rather than pouring water on them.',
    },
    {
      publisher: 'Firestone Complete Auto Care',
      title: 'Smell of Burning From Your Car? Causes Explained',
      url: 'https://www.firestonecompleteautocare.com/blog/maintenance/smell-of-burning-from-car/',
      sourceType: 'industry',
      notes:
        'Covers burning odors from belts, fluid leaks, electrical faults, road debris, overheated or dragging brakes, and warning signs that call for stopping.',
    },
    {
      publisher: 'Toyota',
      title: 'How To Tell If You May Need An Oil Change',
      url: 'https://www.toyota.com/car-tips/signs-oil-change/',
      sourceType: 'manufacturer',
      notes:
        'Notes that a burnt-oil smell inside the vehicle can point to a leak or overheating and calls for prompt investigation.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Vehicle owner's manual",
      description:
        'Use it for the correct oil-check procedure, overheating instructions, warning-light meanings, and vehicle-specific emergency guidance.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Flashlight',
      description:
        'Useful for a visual check for fresh leaks or debris once the vehicle is cool. Do not use it as a reason to reach near hot or moving parts.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Brake inspection',
      description:
        'Appropriate when the smell is strongest near a wheel or comes with pulling, grinding, a soft pedal, or repeated overheating.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Roadside assistance or towing',
      description:
        'Use it when smoke, electrical overheating, weak braking, overheating, or another red flag makes continued driving unsafe.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'oil-leak', anchorText: 'Can I ignore an oil leak?', relationshipType: 'cause' },
    {
      slug: 'engine-overheating',
      anchorText: 'Can I ignore an overheating engine?',
      relationshipType: 'escalation',
    },
    { slug: 'squeaky-brakes', anchorText: 'Can I ignore squeaky brakes?', relationshipType: 'related' },
    { slug: 'low-engine-oil', anchorText: 'Can I ignore low engine oil?', relationshipType: 'follow_up' },
    {
      slug: 'check-engine-light',
      anchorText: 'Can I ignore a check engine light?',
      relationshipType: 'related',
    },
  ],
};
