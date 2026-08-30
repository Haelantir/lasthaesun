import type { ProblemSeed } from '../types';

export const acLeakingWaterInside: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'air-conditioning',
  slug: 'ac-leaking-water-inside',
  canonicalPath: '/home/hvac/air-conditioning/ac-leaking-water-inside/',
  name: 'Air Conditioner Leaking Water Inside',
  eyebrow: 'Home · HVAC · Air Conditioning',

  h1: 'Can I Ignore an Air Conditioner Leaking Water Inside?',
  seoTitle: 'Why Your AC Is Leaking Water Indoors and When to Shut It Off',
  metaDescription:
    'Indoor AC water leaks often point to a clogged condensate drain, frozen coil, or damaged pan. See when to shut it off and what to check.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep running the AC?',
  canIUseItLabel: 'Not while it is actively leaking indoors',

  shortAnswer:
    'Probably not. Water dripping or pooling inside usually means the condensate is not draining where it should or the evaporator coil is freezing and then melting. Turn the cooling off until you know why the water is escaping, especially if it is reaching a ceiling or anything electrical.',

  whyItMattersHeading: 'Why an Indoor AC Leak Deserves Attention',
  whyItMatters: [
    'Air conditioners normally remove moisture from indoor air. That water should collect in a drain pan and leave through the condensate drain. If it ends up on the floor, inside a ceiling, or dripping from the cabinet, something in that drainage path or cooling process is not working normally. Common causes include a clogged condensate line, a damaged drain pan, and a frozen evaporator coil.',
    'The immediate problem is usually water damage rather than the water itself. A plugged drain can overflow into drywall, flooring, insulation, or cabinetry. Repeated dampness also creates conditions where mold can grow. If water reaches energized electrical equipment, stop treating this as a routine HVAC leak and keep clear of the wet electrical area.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the AC and Deal With It Now If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Checked against current ENERGY STAR condensate-drain guidance, EPA moisture and mold guidance, CPSC wet-appliance safety advice, and Carrier and Trane troubleshooting.',
  disclaimer:
    'This page covers water leaking from residential air-conditioning equipment. Do not open energized HVAC cabinets or attempt refrigerant work as a DIY leak test.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'small-puddle-near-indoor-unit',
      label: 'A small puddle is forming under the indoor unit',
      shortDescription:
        'The AC still cools, but water is appearing on the floor near the air handler or furnace cabinet.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Shut the cooling off and find the drainage problem',
      resultBody:
        'Even a small indoor puddle means condensate is escaping the path designed to carry it away. A clogged drain, overflowing pan, or damaged pan can start this way.',
      recommendedAction:
        'Turn off cooling, dry the visible water, and inspect only the filter and accessible condensate components you can reach safely. Arrange HVAC service if the source is not obvious or the leak returns.',
    },
    {
      slug: 'water-in-secondary-drain-pan',
      label: 'The secondary drain pan has water in it',
      shortDescription:
        'A pan under an attic or horizontal air handler is catching water even though it is not overflowing yet.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The backup pan is doing its job, but something upstream needs fixing',
      resultBody:
        'A secondary pan is there to catch water that escaped the normal condensate path. Water in it can point to a blocked primary drain, an overflowing primary pan, or another drainage fault.',
      recommendedAction:
        'Turn off cooling and have the primary drain, drain pan, and any condensate safety switch checked. Do not bypass a safety switch to keep the system running.',
    },
    {
      slug: 'water-dripping-through-ceiling',
      label: 'Water is dripping through the ceiling below the AC',
      shortDescription:
        'The air handler is in an attic or upper level and water has reached drywall, a ceiling stain, or a light fixture area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop the AC and deal with the water source now',
      resultBody:
        'Once water has reached the ceiling, the problem is no longer contained at the HVAC equipment. Continuing to produce condensate can spread damage into drywall, insulation, and nearby finishes.',
      recommendedAction:
        'Turn off cooling, keep people and belongings away from the wet area, and arrange HVAC service. If water is near a light fixture or other electrical equipment, keep clear of that area until the electrical risk is addressed.',
    },
    {
      slug: 'ice-on-coil-or-refrigerant-line',
      label: 'There is ice or frost on the indoor coil or copper line',
      shortDescription:
        'Frost is visible near the evaporator section or refrigerant tubing and water appears as the ice melts.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep cooling with a frozen coil',
      resultBody:
        'Restricted airflow, a dirty filter, coil problems, or low refrigerant can contribute to evaporator icing. Meltwater can overwhelm the normal drainage path, and continued operation with a frozen coil can damage the system.',
      recommendedAction:
        'Turn off cooling. Check the filter if it is safely accessible, but do not open energized cabinets or attempt refrigerant work. Arrange service if icing occurred or returns.',
    },
    {
      slug: 'dirty-filter-and-weak-airflow',
      label: 'The filter is dirty and airflow feels weak',
      shortDescription:
        'The leak appeared along with reduced airflow and a visibly dirty or clogged return-air filter.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Fix the airflow issue before running it normally again',
      resultBody:
        'A dirty filter can restrict airflow and contribute to coil icing. It may be part of the leak problem, but changing the filter does not prove that the condensate drain and coil are otherwise fine.',
      recommendedAction:
        'Turn the cooling off, replace or clean the filter according to the equipment instructions, and look for ice or standing water. If leaking or icing continues, arrange service.',
    },
    {
      slug: 'water-near-electrical-equipment',
      label: 'Water is reaching wiring, an outlet, a panel, or powered equipment',
      shortDescription: 'The leak is wetting electrical components or the path to a switch or breaker is wet.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as an electrical hazard',
      resultBody:
        'Wet energized equipment can create shock and fire hazards. The HVAC fault matters, but the immediate priority is avoiding contact with wet electrical equipment or surfaces around it.',
      recommendedAction:
        'Stay clear of the wet electrical area. Do not touch wet equipment or stand in water to reach a switch. Have the water source and the electrical safety of affected equipment addressed before reuse.',
    },
    {
      slug: 'window-ac-leaking-into-room',
      label: 'A window air conditioner is dripping into the room',
      shortDescription: 'Water is running from the indoor side of a window unit onto the sill, wall, or floor.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Indoor dripping is not the normal destination for condensate',
      resultBody:
        'Window units are designed to manage condensate according to their own drain and installation design. Indoor leakage can result from drainage problems, improper installation, blockage, or icing.',
      recommendedAction:
        'Turn the unit off and follow its manufacturer instructions for drainage, installation angle, filter care, and cleaning. Do not reposition or open the unit while it is energized.',
    },
    {
      slug: 'outdoor-condensate-drain-dripping',
      label: 'Water is only dripping from the condensate drain outside',
      shortDescription:
        'There is no indoor leak, no ceiling stain, and the water is coming from the normal exterior drain outlet while the AC runs.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'That can be normal condensate drainage',
      resultBody:
        'An operating air conditioner removes moisture from indoor air, and that condensate has to drain somewhere. Water leaving through the intended exterior condensate outlet is different from water leaking inside the home.',
      recommendedAction:
        'No repair is needed just because the normal drain is releasing water. Check the system if the drain stops flowing when it normally would or if water starts appearing indoors.',
    },
    {
      slug: 'leak-stopped-after-drain-cleared',
      label: 'The leak stopped after the condensate drain was cleared',
      shortDescription:
        'The area is dry now, the system is draining normally, and there is no ice, overflow, or electrical involvement.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Monitor it, but make sure the fix actually holds',
      resultBody:
        'If the blockage was the cause and the drain is now flowing normally, the immediate leak may be resolved. A returning puddle suggests the drain was not fully cleared or another cause remains.',
      recommendedAction:
        'Dry the affected materials, restart only if the system is otherwise normal, and watch the drain and indoor area for renewed leakage. Arrange service if the problem comes back.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Condensate is escaping its normal path',
      description:
        'The AC is still removing moisture from the air, but some of that water is ending up inside the home instead of leaving through the drain system.',
      severity: 'caution',
      chainLabel: 'Drainage fault',
    },
    {
      stageLabel: 'IF THE AC KEEPS RUNNING',
      title: 'More water can reach surrounding materials',
      description:
        'A blocked drain or overflowing pan can keep sending condensate into floors, ceilings, insulation, cabinets, or other nearby materials.',
      severity: 'warning',
      chainLabel: 'Continued overflow',
    },
    {
      stageLabel: 'IF MATERIALS STAY DAMP',
      title: 'Water damage and mold become bigger concerns',
      description:
        'EPA guidance emphasizes moisture control because mold can grow on damp materials. Staining, swelling, musty odor, or visible mold means the water problem has gone beyond a clean puddle.',
      severity: 'warning',
      chainLabel: 'Persistent moisture',
    },
    {
      stageLabel: 'IF THE EVAPORATOR COIL IS FROZEN',
      title: 'Meltwater may be only one symptom',
      description:
        'A frozen coil can point to restricted airflow, a dirty filter, or another cooling-system problem. Running the system while the coil remains frozen can lead to further equipment damage.',
      severity: 'warning',
      chainLabel: 'Frozen coil',
    },
    {
      stageLabel: 'IF WATER REACHES ELECTRICAL EQUIPMENT',
      title: 'The situation becomes a safety problem',
      description:
        'Wet energized appliances and electrical components can create shock or fire hazards. Do not handle wet electrical equipment while it may still be energized.',
      severity: 'danger',
      chainLabel: 'Water plus electricity',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Water is only leaving through the normal exterior condensate drain',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Leave it alone if there is no indoor leakage and the system is operating normally. Exterior condensate drainage is expected when the AC removes moisture from indoor air.',
    },
    {
      situation: 'A small indoor puddle is forming near the air handler',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Turn off cooling, dry the area, and check the accessible drain pan, drain path, and filter. Arrange service if the cause is not obvious or the leak returns.',
    },
    {
      situation: 'The backup or secondary drain pan contains water',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Treat it as evidence that the normal condensate path may have failed. Have the primary drain and pan checked before relying on the backup pan.',
    },
    {
      situation: 'The leak stopped after a drain blockage was cleared',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Dry the affected area and monitor the next cooling cycles. If water returns, shut the cooling off again and arrange service.',
    },
    {
      situation: 'Ice or frost is visible on the indoor coil or refrigerant line',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Turn off cooling and arrange service if icing occurred or returns. Do not attempt refrigerant repairs yourself.',
    },
    {
      situation: 'Water has reached drywall, a ceiling stain, or insulation',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop the source, dry what can be dried safely, and inspect the HVAC drainage problem and the affected building materials.',
    },
    {
      situation: 'Water is near electrical wiring, a light fixture, an outlet, or a panel',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep clear of the wet electrical area and avoid touching wet equipment. Have the electrical safety of affected components checked before reuse.',
    },
    {
      situation: 'A window AC is dripping into the room',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Turn it off and follow the manufacturer instructions for drainage, installation, filter care, and cleaning before using it normally again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Turn off cooling',
      body:
        'Use the thermostat or normal dry controls to stop cooling so the system is not producing more condensate. If water is near electrical equipment, do not touch wet equipment or stand in water to reach a switch.',
    },
    {
      title: 'Contain and dry the water you can reach safely',
      body:
        'Move belongings away, use towels or a wet-dry vacuum where appropriate, and dry hard surfaces. Do not work under a wet electrical fixture or disturb a badly soaked ceiling just to reach the HVAC leak.',
      destinationProblemSlug: 'water-stain-on-ceiling',
    },
    {
      title: 'Check the filter and look for ice',
      body:
        'With cooling off, inspect the accessible air filter and visible refrigerant lines or coil area. Replace a dirty filter with the correct type for the system. Visible ice or repeated icing calls for further diagnosis.',
    },
    {
      title: 'Check the accessible condensate drain and pan',
      body:
        'Look for standing water, obvious overflow, or a blocked drain outlet only where the system design allows safe access. Follow the equipment instructions rather than pouring chemicals into an unfamiliar drain setup.',
    },
    {
      title: 'Arrange HVAC service when the cause is not obvious',
      body:
        'Get service if the drain will not stay clear, the pan is damaged, the coil freezes, the system cools poorly, water returns, or the air handler is in a location you cannot access safely.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Water is near electrical equipment',
      description:
        'Keep away from wet wiring, outlets, panels, switches, light fixtures, or powered appliances until the electrical risk has been addressed.',
      severity: 'danger',
    },
    {
      title: 'The ceiling is wet, bulging, or actively dripping',
      description:
        'Water has spread beyond the HVAC cabinet. Keep people and belongings away from the affected area and stop the source.',
      severity: 'warning',
    },
    {
      title: 'The drain pan is overflowing',
      description:
        'The condensate system is no longer containing the water it collects. Continued cooling can send more water into the building.',
      severity: 'warning',
    },
    {
      title: 'Ice or frost is visible on the coil or refrigerant line',
      description:
        'A frozen evaporator coil can produce extra meltwater and points to an airflow, refrigerant, or other system problem that needs diagnosis.',
      severity: 'warning',
    },
    {
      title: 'The breaker trips when the AC runs',
      description:
        'Do not keep resetting a breaker to make a wet or malfunctioning HVAC system run. The electrical problem needs its own diagnosis.',
      severity: 'danger',
    },
    {
      title: 'The leak returns after the drain was cleared',
      description:
        'Repeated leakage means the blockage may not be fully resolved or another cause such as a damaged pan or frozen coil remains.',
      severity: 'caution',
    },
    {
      title: 'You see mold or notice a persistent musty odor',
      description:
        'Fix the moisture source first. EPA guidance says mold control depends on controlling moisture, and damp materials may need cleaning, drying, or replacement depending on their condition.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why does an air conditioner make water in the first place?',
      answer:
        'Cooling the air also removes moisture from it. That moisture condenses on the cold evaporator coil, collects in a pan, and should leave through the condensate drain.',
    },
    {
      question: 'Is water dripping from the AC drain outside normal?',
      answer:
        'Often yes. If the water is coming from the intended exterior condensate outlet and nothing is leaking indoors, that is usually the drainage system doing its job.',
    },
    {
      question: 'Is the puddle under my AC refrigerant?',
      answer:
        'A clear water puddle near the indoor unit is usually condensate, not refrigerant. Refrigerant problems can still contribute to coil icing, so poor cooling or repeated frost should be diagnosed rather than treated as a simple water leak.',
    },
    {
      question: 'Can a dirty air filter really make the AC leak water?',
      answer:
        'It can contribute. A heavily restricted filter reduces airflow and can help the evaporator coil freeze. When the ice melts, the drainage system may have more water to handle.',
    },
    {
      question: 'Can I unclog an AC condensate drain myself?',
      answer:
        'Sometimes, if the service point is accessible and the manufacturer instructions support a simple cleaning method. Do not open energized cabinets or pour chemicals into an unfamiliar drain system just because a generic video recommends it.',
    },
    {
      question: 'Why is the AC still dripping after I turned it off?',
      answer:
        'Water already sitting in the pan can continue to drain, and ice on a frozen coil can melt after cooling stops. Continued or heavy leaking still needs a source check.',
    },
    {
      question: 'Why does the leak seem worse on humid days?',
      answer:
        'The AC removes more moisture from humid indoor air, so the condensate system has more water to carry. A marginal drain or pan problem may become easier to notice when condensate production is higher.',
    },
    {
      question: 'Does an AC water leak automatically mean I have mold?',
      answer:
        'No. Mold needs moisture, but a fresh leak does not prove mold is present. Dry the affected area and fix the moisture source. Investigate visible growth or a persistent musty odor.',
    },
    {
      question: 'What if I rent the home?',
      answer:
        "Report the leak through the landlord or property manager's maintenance process and document visible water damage. Repair duties and response requirements vary by lease and location, so there is no single nationwide rule.",
    },
    {
      question: 'Should I keep resetting a condensate safety switch or breaker so the AC runs?',
      answer:
        'No. A condensate switch may be stopping the system because water is not draining correctly, and a tripping breaker can signal an electrical fault. Find the cause instead of defeating the warning or protection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'ENERGY STAR',
      title: 'Maintenance Checklist',
      url: 'https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist',
      sourceType: 'government',
      notes:
        'Says a plugged condensate drain in a central air conditioner can cause water damage and affect indoor humidity, and recommends inspection of the condensate drain during maintenance.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'A Brief Guide to Mold, Moisture and Your Home',
      url: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
      sourceType: 'government',
      notes:
        'Explains that moisture control is central to mold control, advises fixing water problems and drying wet materials promptly, and specifically says AC drip pans should be clean and drain lines unobstructed.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Hurricane Milton Warning: Protect Your Family from CO Poisoning and Other Post-Storm Dangers',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2025/Hurricane-Milton-Warning-Protect-Your-Family-from-CO-Poisoning-and-Other-Post-Storm-Dangers',
      sourceType: 'government',
      notes:
        'Warns not to touch wet appliances that remain connected to electrical power and recommends safety evaluation before reuse after electrical equipment becomes wet.',
    },
    {
      publisher: 'Carrier',
      title: 'Why Is My AC Leaking Water?',
      url: 'https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/why-is-my-ac-leaking-water/',
      sourceType: 'manufacturer',
      notes:
        'Identifies clogged condensate drains, frozen evaporator coils, dirty filters, and damaged drain pans as common causes of indoor AC water leaks and recommends shutting the system off when it is leaking.',
    },
    {
      publisher: 'Trane',
      title: 'AC Leaking Water',
      url: 'https://www.trane.com/residential/en/resources/troubleshooting/air-conditioners/ac-leaking-water/',
      sourceType: 'manufacturer',
      notes:
        'Explains normal condensate drainage, damaged or overflowing drain pans, clogged condensate lines, and frozen evaporator coils, and recommends turning off a central AC that is leaking water indoors.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Correct replacement air filter',
      description:
        'A clean filter helps maintain proper airflow. Use the size and type specified for the system rather than forcing in a higher-restriction filter.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Wet-dry vacuum',
      description:
        'Useful for removing accessible standing water and, on systems where the manufacturer or installer allows it, clearing debris from an exterior condensate drain outlet.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Moisture meter',
      description:
        'Helps check whether nearby drywall, wood, or other materials remain damp after the visible water is gone.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'HVAC repair service',
      description:
        'Appropriate when the drain keeps clogging, the pan is damaged, the evaporator coil freezes, cooling performance changes, or the leak source is inaccessible.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'water-stain-on-ceiling',
      anchorText: 'What if the AC leak left a water stain on the ceiling?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'breaker-keeps-tripping',
      anchorText: 'What if the breaker keeps tripping when the AC runs?',
      relationshipType: 'escalation',
    },
    {
      slug: 'mold-around-window',
      anchorText: 'What if I am also seeing mold from indoor moisture?',
      relationshipType: 'related',
    },
  ],
};
