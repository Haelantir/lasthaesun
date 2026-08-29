import type { ProblemSeed } from '../types';

export const coolantLeak: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'cooling',
  slug: 'coolant-leak',
  canonicalPath: '/cars/cooling/coolant-leak/',
  name: 'Small Coolant Leak',
  eyebrow: 'Mobility · Cars · Cooling',

  h1: 'Can I Ignore a Small Coolant Leak?',
  seoTitle: 'Small Coolant Leak: Can You Drive and When Should You Stop?',
  metaDescription:
    'A small coolant leak should not be ignored. Learn when limited driving may be reasonable, when to stop, and how to check the cooling system safely.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Sometimes, briefly',

  shortAnswer:
    'Probably not. A small coolant leak may let you drive only as needed to get it repaired if the engine is cool, the coolant level is adequate and temperature stays normal. Stop if the temperature rises, a warning appears or steam develops.',

  whyItMattersHeading: 'Why Does a Small Coolant Leak Matter?',
  whyItMatters: [
    'Coolant carries heat away from the engine and through the radiator. A leak means the cooling system is losing fluid somewhere, and repeated low coolant can leave the system unable to control engine temperature properly.',
    'The size of the spot on the ground does not tell you how safe the car is to drive. What matters more is whether the coolant level keeps falling, whether the leak gets worse under heat and pressure, and whether the engine shows any sign of overheating.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Deal With It Now If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Cooling-system leak triage, overheating warnings, hot-cap safety, coolant loss and ethylene-glycol exposure were checked against government, manufacturer and AAA guidance.',
  disclaimer:
    "General automotive triage guidance only. Cooling-system design, coolant type and warning behavior vary by vehicle. Follow the owner's manual and vehicle-specific service information.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'small-drip-temperature-normal',
      label: 'A few drops appear after parking',
      shortDescription:
        'The engine is cool, the reservoir is at the proper cold level and the temperature stays normal.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not ignore it, but this is not an automatic roadside stop',
      resultBody:
        'A confirmed coolant leak still needs repair even if it is small. If the cold coolant level is adequate and the engine temperature stays normal, limited driving for diagnosis or repair may be reasonable.',
      recommendedAction:
        'Check the coolant level only when the system is cool, watch the temperature closely and arrange repair soon.',
    },
    {
      slug: 'coolant-level-keeps-dropping',
      label: 'The coolant level keeps dropping',
      shortDescription: 'The reservoir is lower on repeated cold checks even after coolant has been added.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The leak is active',
      resultBody:
        'A cooling system should not need repeated replacement of lost coolant. A level that keeps falling means the leak or another coolant-loss problem is still present.',
      recommendedAction:
        'Stop treating top-offs as the fix. Have the cooling system checked for the source of the loss.',
    },
    {
      slug: 'repeated-top-offs',
      label: 'I keep topping it off',
      shortDescription: 'Adding coolant restores the level, but it falls again later.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Topping off is buying time, not fixing the leak',
      resultBody:
        'Adding coolant can restore the level temporarily, but it does not repair the failed hose, reservoir, radiator, pump, seal or other leak point.',
      recommendedAction:
        'Use only the coolant specified for the vehicle and arrange diagnosis instead of relying on repeated top-offs.',
    },
    {
      slug: 'low-coolant-warning',
      label: 'A low-coolant warning appears',
      shortDescription: 'The dashboard reports low coolant, even though the temperature is not yet high.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Check it before the warning becomes an overheating problem',
      resultBody:
        'A low-coolant warning means the system may no longer have the fluid level it expects. The engine can still feel normal before overheating develops.',
      recommendedAction:
        "Let the system cool, check the level according to the owner's manual and have the leak diagnosed.",
    },
    {
      slug: 'temperature-rising',
      label: 'The temperature gauge is climbing or a high-temperature warning appears',
      shortDescription: 'The engine is running hotter than normal while coolant is leaking.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop driving',
      resultBody:
        'An overheating warning means the cooling system is no longer controlling temperature safely. Continuing to drive can cause severe engine damage.',
      recommendedAction:
        "Pull over safely and shut the engine down as directed by the owner's manual. Do not open a hot pressurized cooling system.",
    },
    {
      slug: 'steam-or-boiling',
      label: 'Steam or boiling appears under the hood',
      shortDescription: 'Vapor, boiling coolant or obvious hot fluid is coming from the cooling-system area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as an overheating event',
      resultBody:
        'Steam or boiling coolant means you should not keep driving normally. Hot cooling systems are pressurized and opening a cap can release scalding fluid.',
      recommendedAction:
        'Stop safely, shut the engine down and keep clear of the pressure cap until the system has cooled.',
    },
    {
      slug: 'sweet-smell-or-colored-wetness',
      label: 'I smell something sweet or see colored wetness',
      shortDescription: 'There is no large puddle, but there are signs that coolant may be escaping.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A hidden or small leak still counts',
      resultBody:
        'Coolant can leak without leaving a dramatic puddle. A sweet odor or wet residue around cooling-system parts is a reason to inspect the system rather than wait for overheating.',
      recommendedAction:
        'Check the cold coolant level, look for fresh wetness and arrange a leak inspection if the signs return.',
    },
    {
      slug: 'clear-water-after-ac',
      label: 'The liquid is clear water after using the air conditioner',
      shortDescription: 'The drip is clear, odorless water and the coolant level remains stable.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'That may be normal A/C condensation',
      resultBody:
        'Water draining from the air-conditioning system is normal on many vehicles and is not the same thing as a coolant leak.',
      recommendedAction:
        'If the liquid is clearly water and the coolant level stays stable, no cooling-system repair is needed for that drip.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The cooling system has lost its seal',
      description: 'Coolant is escaping from somewhere in a system that is meant to hold and circulate it.',
      severity: 'caution',
      chainLabel: 'Coolant leak',
    },
    {
      stageLabel: 'IF THE LEAK CONTINUES',
      title: 'The coolant level can fall',
      description: 'A small leak can keep removing coolant even when the car still feels normal.',
      severity: 'caution',
      chainLabel: 'Lower coolant level',
    },
    {
      stageLabel: 'IF THE LEVEL GETS TOO LOW',
      title: 'Heat transfer gets worse',
      description:
        'With less coolant available, the system has less ability to carry engine heat to the radiator.',
      severity: 'warning',
      chainLabel: 'Reduced cooling',
    },
    {
      stageLabel: 'IF TEMPERATURE RISES',
      title: 'The engine can overheat',
      description:
        'A rising gauge, high-temperature warning or steam means the cooling problem has become urgent.',
      severity: 'warning',
      chainLabel: 'Overheating',
    },
    {
      stageLabel: 'KEEP DRIVING OVERHEATED',
      title: 'Severe engine damage can follow',
      description: 'Manufacturers warn that continued operation while overheated can damage the engine.',
      severity: 'danger',
      chainLabel: 'Engine damage',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A few drops, proper cold coolant level and normal engine temperature',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Limit driving to what is needed for diagnosis or repair, monitor temperature and recheck the coolant level when the system is cool.',
    },
    {
      situation: 'Coolant level falls again after being topped off',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange leak diagnosis. Repeatedly adding coolant does not repair the source of the loss.',
    },
    {
      situation: 'Low-coolant warning appears',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        "Let the engine cool, check the level as the owner's manual directs and have the cooling system inspected.",
    },
    {
      situation: 'Temperature gauge rises or a high-coolant-temperature warning appears',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        "Pull over safely and follow the vehicle's overheating procedure. Do not keep driving normally.",
    },
    {
      situation: 'Steam, boiling or hot coolant is escaping',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop safely and shut the engine down. Do not remove a pressure cap while the cooling system is hot.',
    },
    {
      situation: 'Clear odorless water drips after air-conditioner use',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'If it is clearly condensation and the coolant level remains stable, no coolant-leak repair is needed for that water.',
    },
    {
      situation: 'The car is parked until the leak can be inspected',
      ignoreAnswer: 'Yes, while parked',
      severity: 'info',
      whatToDo:
        'Leave the engine off and arrange repair before returning to normal driving if the leak is confirmed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Let the cooling system cool before checking it',
      body:
        "Do not open a radiator or pressure cap while the system is hot. Check the coolant level only after the vehicle has cooled and follow the owner's manual for the correct reservoir or fill point.",
    },
    {
      title: 'Confirm whether the fluid is actually coolant',
      body:
        'A/C condensation is usually clear water. Coolant may be colored, but color alone does not identify the correct type. Compare the cold reservoir level and inspect for fresh wetness around cooling-system parts.',
    },
    {
      title: 'Use the vehicle-specified coolant if a top-off is needed',
      body:
        "Use the coolant type and mixture specified in the owner's manual. A top-off can restore the level temporarily, but it is not a repair for an active leak.",
    },
    {
      title: 'Have the leak found and repaired',
      body:
        'A pressure test and inspection can help locate leaks from hoses, the radiator, reservoir, cap, water pump or other cooling-system components. Repair the source instead of judging the problem by puddle size.',
    },
    {
      title: 'Stop for any overheating warning',
      body:
        "If the temperature rises, a high-temperature warning appears or steam develops, stop safely and follow the vehicle's overheating procedure.",
      destinationProblemSlug: 'engine-overheating',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The temperature gauge is in the hot range',
      description: 'A hot gauge or high-coolant-temperature warning means the engine may be overheating.',
      severity: 'danger',
    },
    {
      title: 'Steam or boiling coolant is coming from under the hood',
      description: 'Shut the engine down safely and do not open the hot cooling system.',
      severity: 'danger',
    },
    {
      title: 'Coolant is spraying or pouring out',
      description: 'Rapid coolant loss can leave the cooling system unable to control engine temperature.',
      severity: 'danger',
    },
    {
      title: 'The reservoir is empty after the engine has cooled',
      description: 'Do not assume the car is safe to drive normally just because it still starts.',
      severity: 'warning',
    },
    {
      title: 'The coolant level drops again soon after a top-off',
      description: 'Repeated loss means the underlying problem is still active and needs diagnosis.',
      severity: 'warning',
    },
    {
      title: 'The engine loses power while running hot',
      description: 'Pull over safely. Loss of power together with overheating is a reason to stop driving.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'How small is too small for a coolant leak?',
      answer:
        'There is no useful universal puddle-size threshold. A tiny visible leak can still lower the coolant level over time, so judge it by coolant loss, temperature and whether the leak is getting worse.',
    },
    {
      question: 'Can I drive if the temperature gauge is normal?',
      answer:
        'Sometimes, briefly, if the engine is cool, the coolant level is adequate and there are no other warning signs. That is a way to reach diagnosis or repair, not permission to ignore the leak indefinitely.',
    },
    {
      question: 'Can I just keep adding coolant?',
      answer:
        'No. Topping off replaces lost fluid but does not repair the leak. If the level keeps falling, find the source.',
    },
    {
      question: 'Is clear water under the car a coolant leak?',
      answer:
        'Not necessarily. Clear water after air-conditioner use is often normal condensation. Check whether the coolant level is stable and whether the liquid has the appearance of coolant.',
    },
    {
      question: 'Can I open the radiator cap to check the level?',
      answer:
        'Not while the cooling system is hot. A hot pressurized system can release steam and scalding coolant when opened.',
    },
    {
      question: 'Does coolant color tell me which coolant to buy?',
      answer:
        "No. Coolant colors vary by product and manufacturer. Use the specification in the owner's manual rather than choosing by color alone.",
    },
    {
      question: 'Why can I smell coolant without seeing a puddle?',
      answer:
        'A small leak may occur only when the system is hot or pressurized, and leaking fluid can evaporate on hot parts. Have recurring odor or wet residue checked even if the ground stays dry.',
    },
    {
      question: 'Does a small coolant leak always mean the radiator is bad?',
      answer:
        'No. Coolant can escape from several parts of the cooling system, including hoses, the radiator, reservoir, cap and water pump. Inspection is needed to locate the source.',
    },
    {
      question: 'Is engine coolant toxic?',
      answer:
        'Some common antifreeze products contain ethylene glycol, which can cause serious illness if swallowed. Keep leaking coolant and stored antifreeze away from children and clean spills promptly.',
    },
    {
      question: 'What if the leak appeared right after cooling-system service?',
      answer:
        'Recheck the level only when the engine is cool and contact the shop if the level falls, fresh wetness appears or any temperature warning develops.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Agency for Toxic Substances and Disease Registry',
      title: 'Ethylene Glycol | ToxFAQs',
      url: 'https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=85&toxid=21',
      sourceType: 'government',
      notes:
        'States that ethylene glycol is used in automotive antifreeze, that larger ingestions can cause serious illness or death, and that antifreeze should be kept away from children.',
    },
    {
      publisher: 'Toyota Motor Sales, U.S.A.',
      title: '2023 Corolla Cross - If a warning light turns on or a warning buzzer sounds',
      url: 'https://www.toyota.com/owners/warranty-owners-manuals/digital/article/corolla-cross/2023/om0a039u/ch07se020404/',
      sourceType: 'manufacturer',
      notes:
        'Identifies the high coolant temperature warning as an excessively hot engine condition and directs the driver to stop the vehicle immediately in a safe place.',
    },
    {
      publisher: 'Chevrolet',
      title: 'GM Genuine Parts Radiator Surge Tank | 84368362 | Chevrolet Parts',
      url: 'https://parts.chevrolet.com/product/gm-genuine-parts-radiator-surge-tank-84368362',
      sourceType: 'manufacturer',
      notes:
        'Warns against opening a hot pressurized cooling system, says coolant should be checked when cold and lists coolant leaks, overheating and low-coolant warnings as signs of cooling-system trouble.',
    },
    {
      publisher: 'AAA',
      title: 'Car Overheating: 8 Causes and Solutions',
      url: 'https://www.aaa.com/autorepair/articles/car-overheating-8-causes-and-solutions',
      sourceType: 'industry',
      notes:
        "Explains coolant's heat-transfer role, links low coolant and cooling-system leaks with overheating, and lists common leak points such as hoses, radiator components and the water pump.",
    },
    {
      publisher: 'Firestone Complete Auto Care',
      title: 'Why is My Car Leaking Water?',
      url: 'https://www.firestonecompleteautocare.com/blog/maintenance/car-leaking-water/',
      sourceType: 'industry',
      notes:
        'Explains that clear water under a car can be normal A/C condensation and describes coolant as a different fluid that should be identified rather than assumed to be water.',
    },
    {
      publisher: 'Valvoline Global',
      title: 'Zerex DEX-COOL Concentrate Antifreeze',
      url: 'https://shop.valvolineglobal.com/products/zerex-dex-cool-concentrate-antifreeze',
      sourceType: 'manufacturer',
      notes:
        "States that antifreeze color is used for identification but does not determine performance, and directs users to follow the coolant specification in the owner's manual.",
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Vehicle owner's manual cooling-system section",
      description:
        'Gives the correct coolant specification, fill point, level markings and vehicle-specific overheating procedure.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Cooling-system pressure test',
      description:
        'A shop test that can help expose leaks that are difficult to find by looking for a puddle alone.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Cooling-system leak inspection',
      description:
        'Inspection of hoses, radiator, reservoir, cap, water pump and nearby components for fresh leakage or failed parts.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Vehicle-specified engine coolant',
      description:
        "The correct coolant for restoring the level after the system has cooled, chosen from the owner's manual rather than by color alone.",
      kind: 'part',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'engine-overheating',
      anchorText: 'What if the engine is overheating?',
      relationshipType: 'escalation',
    },
    {
      slug: 'white-smoke-from-exhaust',
      anchorText: 'What if white smoke is coming from the exhaust?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'burning-smell-from-engine',
      anchorText: 'What if there is a burning smell from the engine?',
      relationshipType: 'related',
    },
  ],
};
