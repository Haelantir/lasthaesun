import type { ProblemSeed } from '../types';

export const pipesBangWhenWaterTurnsOff: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'pipes',
  slug: 'pipes-bang-when-water-turns-off',
  canonicalPath: '/home/plumbing/pipes/pipes-bang-when-water-turns-off/',
  name: 'Pipes Bang When Water Turns Off',
  eyebrow: 'Home · Plumbing · Pipes',

  h1: 'Can I Ignore Pipes That Bang When I Turn Off the Water?',
  seoTitle: 'Banging Pipes After Shutoff: Water Hammer Warning Signs',
  metaDescription:
    'Repeated pipe bangs are usually water hammer. Learn when brief use is reasonable and how pressure, moving pipes, leaks, and arrestors change the answer.',

  aliases: ['/home/plumbing/pipes/water-hammer/', '/home/plumbing/pipes/banging-pipes/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the water?',
  canIUseItLabel: 'Yes, briefly, if nothing leaks or moves',

  shortAnswer:
    'Probably not. Repeated banging at shutoff is usually water hammer or pipe movement, and it should be diagnosed before it becomes background noise. Brief use is reasonable only if there is no leak, visible pipe movement, or unusually high pressure.',

  whyItMattersHeading: 'Why the Bang Is More Than a Noise',
  whyItMatters: [
    'Water hammer happens when moving water stops abruptly and sends a pressure wave through the plumbing. A fast-closing faucet can trigger it, and automatic valves in washing machines and dishwashers are common triggers. The noise may come from the pressure surge itself or from piping that moves and strikes nearby framing.',
    'A bang does not mean a pipe is about to burst, but repeated surges are not a normal condition to accept indefinitely. Water-hammer arresters are specifically designed to protect piping, valves, fittings, appliances, and other components from detrimental surge pressure. High static pressure, a failing pressure-reducing valve, or loose piping can make the situation more concerning.',
  ].join('\n\n'),

  redFlagsHeading: 'Escalate It Now If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Checked against utility guidance, Seattle plumbing requirements, the current ASSE arrester standard, GE appliance guidance, and CPSC electrical-safety guidance.',
  disclaimer:
    'This page covers household potable-water piping that bangs when flow stops. Well-pump surge, fire-sprinkler piping, steam systems, and hydronic heating systems require system-specific diagnosis.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'mild-knock-after-water-service-work',
      label: 'A mild knock began after water service or plumbing work',
      shortDescription:
        'The system was recently shut down and restored, and the noise is fading while the lines are being flushed.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Follow the flushing instructions and monitor it',
      resultBody:
        'Trapped air and pressure disturbances can make pipes vibrate after water service work. A mild noise that steadily fades is less concerning than hammering that continues after the system has been properly flushed.',
      recommendedAction:
        'Follow the flushing directions from the utility or contractor. Check for leaks while the water runs, and arrange a plumbing assessment if the bang persists or returns.',
    },
    {
      slug: 'manual-faucet-slammed-shut',
      label: 'It happens only when a manual faucet is snapped shut',
      shortDescription:
        'The pipe stays quiet during normal use and makes a mild knock only when the handle is closed unusually fast.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Slow the closure, but keep watching',
      resultBody:
        'Abruptly stopping the flow can create a pressure wave even when the system is otherwise quiet. If ordinary, controlled closure prevents the noise and nothing moves or leaks, this is not urgent.',
      recommendedAction:
        'Close the faucet normally rather than slamming it. If the bang starts happening during ordinary closure, becomes louder, or appears at other fixtures, have the system checked.',
    },
    {
      slug: 'washer-or-dishwasher-shutoff',
      label: 'It happens when a washer or dishwasher stops filling',
      shortDescription: 'A sharp bang occurs as an appliance automatically closes its water inlet valve.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The household plumbing needs attention',
      resultBody:
        "Appliance valves can stop water quickly enough to trigger water hammer. The appliance may be operating normally while the pressure surge occurs in the home's supply piping.",
      recommendedAction:
        'Check for leaks at the appliance hoses and valves, then arrange a plumbing assessment. A properly selected arrestor near the quick-closing valve may be appropriate.',
    },
    {
      slug: 'several-fixtures-bang',
      label: 'Several faucets or fixtures cause the bang',
      shortDescription:
        'The noise occurs in different rooms or whenever water is shut off throughout the home.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Look for a system-wide pressure problem',
      resultBody:
        'Hammering at several fixtures is less likely to be a single loose hose or one appliance connection. Static pressure, the pressure regulator, pipe sizing, valve behavior, and pipe support may all need evaluation.',
      recommendedAction:
        'Measure static pressure if you can do so safely, compare it with utility and local-code guidance, and have a plumber assess the regulator and distribution piping.',
    },
    {
      slug: 'pipe-visibly-jumps',
      label: 'An exposed pipe visibly jumps or shakes',
      shortDescription:
        'Supply piping moves at the moment the valve closes or strikes framing, a wall, or another pipe.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop repeatedly stressing the moving pipe',
      resultBody:
        'Visible movement shows that the surge is physically displacing the pipe. Repeated impacts can load supports and connections and may damage surrounding materials.',
      recommendedAction:
        'Avoid unnecessary use of the triggering fixture. Do not wedge or rigidly clamp the pipe with improvised materials; have the support and the cause of the surge corrected.',
    },
    {
      slug: 'high-pressure-or-failed-regulator',
      label: 'Pressure is high or the pressure regulator is not working',
      shortDescription:
        'A gauge reading exceeds the local limit, pressure fluctuates abnormally, or an existing pressure-reducing valve appears ineffective.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Correct the pressure problem',
      resultBody:
        'A water-hammer arrestor is not a substitute for correcting excessive static pressure. Local plumbing requirements commonly limit residential pressure and require pressure reduction above that limit.',
      recommendedAction:
        'Report unusual utility-side pressure to the water provider. Have a plumber test, adjust, repair, or replace private pressure-control equipment as appropriate.',
    },
    {
      slug: 'bang-followed-by-leak',
      label: 'The bang is followed by dripping or an active leak',
      shortDescription:
        'Water appears at a fitting, hose, valve, appliance connection, wall, ceiling, cabinet, or floor.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The leak is now the priority',
      resultBody:
        'Once water escapes, the problem is no longer just noise. Continued flow can damage cabinets, finishes, framing, flooring, and other materials.',
      recommendedAction:
        'Stop using the triggering fixture and close the nearest working shutoff if it operates normally. Use the main shutoff if necessary and arrange repair before normal use resumes.',
    },
    {
      slug: 'leak-near-electricity',
      label: 'Leaking water is near electrical equipment',
      shortDescription:
        'Water has reached or is approaching an outlet, switch, appliance connection, panel, power strip, or energized equipment.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as an electrical hazard',
      resultBody:
        'Water and energized electrical equipment can create serious shock or fire hazards. Do not enter pooled water or touch wet equipment to reach a plug, switch, or control.',
      recommendedAction:
        'Keep people away. Stop the water only from a dry, safe location, and have the plumbing and electrical hazards addressed before touching or reusing affected equipment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Abrupt shutoff creates a pressure wave',
      description:
        'Moving water is forced to stop or change direction suddenly, producing the shock heard as a bang or knock.',
      severity: 'info',
      chainLabel: 'Abrupt stop → pressure wave',
    },
    {
      stageLabel: 'WITH REPEATED CLOSURES',
      title: 'Components keep absorbing the surge',
      description:
        'Valves, fittings, appliance connections, and piping repeatedly take the pressure shock that an arrestor is intended to control.',
      severity: 'caution',
      chainLabel: 'Repeated surges → component stress',
    },
    {
      stageLabel: 'IF THE PIPE IS LOOSE',
      title: 'Piping can strike nearby surfaces',
      description:
        'Each surge can make unsupported or poorly restrained pipe hit framing, another pipe, or a wall surface, increasing noise and movement.',
      severity: 'warning',
      chainLabel: 'Loose pipe → impact and movement',
    },
    {
      stageLabel: 'IF A CONNECTION OR PART FAILS',
      title: 'A noise problem becomes a water leak',
      description:
        'Damage to a fitting, valve, hose, appliance connection, or pipe can release water into cabinets, walls, floors, or other building materials.',
      severity: 'warning',
      chainLabel: 'Damage → leak',
    },
    {
      stageLabel: 'IF WATER REACHES POWER',
      title: 'Shock and fire hazards enter the picture',
      description:
        'Water around energized equipment, wiring, outlets, or appliances requires immediate isolation and appropriate electrical as well as plumbing help.',
      severity: 'danger',
      chainLabel: 'Leak + electricity → serious hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation:
        'One mild knock after recent water service work is fading during the prescribed flushing process',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        "Complete the utility or contractor's flushing instructions, inspect for leaks, and investigate if the noise does not clear.",
    },
    {
      situation: 'A manual faucet knocks only when you deliberately snap it shut',
      ignoreAnswer: 'Yes, with slower closure',
      severity: 'info',
      whatToDo:
        'Close it normally and monitor the plumbing. Escalate if ordinary closure begins causing the same bang.',
    },
    {
      situation: 'A washer or dishwasher causes a sharp bang when it stops filling',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Check accessible hoses and connections for leaks, then arrange diagnosis of the household pressure and hammer control.',
    },
    {
      situation: 'Several fixtures cause banging when their water stops',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check static pressure and have the pressure regulator, valves, pipe supports, and distribution system evaluated.',
    },
    {
      situation: 'An exposed pipe jumps, flexes, or hits another surface',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Limit use of the triggering fixture and have both the pipe support and the pressure surge corrected.',
    },
    {
      situation: 'Static pressure is above the utility range or local plumbing limit',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        "Contact the utility if its supply appears abnormal and arrange service for the home's pressure-reducing equipment.",
    },
    {
      situation: 'Dripping, dampness, staining, or pooled water appears after a bang',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop using the source, isolate the water with a working shutoff, dry the area, and repair the leak.',
    },
    {
      situation: 'Water is near an outlet, wiring, or powered appliance',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stay away from the wet electrical area, stop the water only from a safe location, and get appropriate help before reuse.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Identify exactly what triggers the bang',
      body:
        'Test fixtures individually without repeatedly slamming valves. Note whether the sound follows a faucet, toilet fill valve, washing machine, dishwasher, refrigerator dispenser, or several fixtures. The pattern helps separate a local valve problem from a system-wide issue.',
    },
    {
      title: 'Inspect every accessible connection',
      body:
        'Look at exposed supply pipes, appliance hoses, shutoff valves, fittings, cabinets, walls, ceilings, and floors while the triggering fixture operates. Stop the test if you see movement, dripping, spraying, swelling, or fresh staining.',
    },
    {
      title: "Check the home's static water pressure",
      body:
        "Attach a suitable pressure gauge to an outdoor hose connection or other approved test point with all water use stopped. Compare the result with your water utility's expected range and local plumbing requirements rather than relying on a universal target.",
    },
    {
      title: 'Use the right surge-control device',
      body:
        'If a quick-closing valve is the cause, use an appropriately sized, ASSE 1010-listed water-hammer arrestor installed in the location and orientation specified by its manufacturer. Do not guess at sizing or conceal an unapproved device in a wall.',
    },
    {
      title: 'Isolate the water if damage appears',
      body:
        'Close the fixture shutoff only if it operates freely and is not leaking. If that does not control an active leak, use the next working shutoff upstream or the private main valve. Do not reach through water near energized equipment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A pipe visibly jumps or hits the structure',
      description:
        'Physical movement means the force is not limited to an audible noise. Avoid repeatedly operating the triggering valve until the pipe and surge are addressed.',
      severity: 'warning',
    },
    {
      title: 'The banging suddenly becomes louder or spreads',
      description:
        'A change from one local fixture to several fixtures can point to changing pressure, a regulator issue, or worsening pipe movement.',
      severity: 'warning',
    },
    {
      title: 'A fitting, valve, hose, or connector looks damaged',
      description:
        'Cracks, bulging, corrosion, looseness, or fresh moisture at a pressurized connection should be dealt with before continued normal use.',
      severity: 'warning',
    },
    {
      title: 'A shutoff valve leaks or will not isolate the fixture',
      description:
        'Do not force a stuck or corroded valve. Use a working upstream shutoff if water must be isolated and arrange valve repair.',
      severity: 'warning',
    },
    {
      title: 'A wall, ceiling, cabinet, or floor becomes wet',
      description:
        'Hidden or escaping water can damage building materials even when the visible leak seems small.',
      severity: 'danger',
    },
    {
      title: 'Water pressure is unusually high or unstable',
      description:
        'Report a possible utility-side problem and have private pressure-control equipment checked rather than relying on an arrestor alone.',
      severity: 'warning',
    },
    {
      title: 'Water reaches electrical equipment',
      description:
        'Keep away from wet outlets, wiring, panels, switches, power strips, and appliances while they may be energized.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is banging after I shut off a faucet always water hammer?',
      answer:
        'No. Loose pipe, a hose striking an appliance, a valve problem, or another plumbing movement can sound similar. A sharp bang exactly when flow stops is a strong water-hammer pattern, but the trigger and pipe movement still need to be checked.',
    },
    {
      question: 'Why does it happen only when the washing machine runs?',
      answer:
        "The washer's automatic inlet valve closes quickly. GE and other appliance guidance identify banging as a household plumbing and water-pressure issue rather than necessarily a washer defect.",
    },
    {
      question: 'Can a dishwasher cause water hammer too?',
      answer:
        'Yes. Its inlet valve can stop the incoming water abruptly. GE describes pipe rattling when a dishwasher valve closes as water hammer and recommends plumbing evaluation.',
    },
    {
      question: 'Can water hammer burst a pipe?',
      answer:
        'Water hammer can damage plumbing, but one bang does not prove that a pipe is about to rupture. The reason not to ignore recurring hammer is that repeated surge pressure can stress piping, fittings, valves, appliance connections, and supports.',
    },
    {
      question: 'Will closing a faucet more slowly fix it?',
      answer:
        'Slower closure may prevent hammer from a manual faucet because it avoids stopping the flow abruptly. It does not solve a quick-closing automatic valve, excessive pressure, failed regulator, or loose pipe.',
    },
    {
      question: 'Where should a water-hammer arrestor be installed?',
      answer:
        "Near the quick-closing valve and according to the arrestor manufacturer's sizing, location, and orientation instructions. Residential codes that address water hammer commonly require an ASSE 1010-conforming device.",
    },
    {
      question: 'Can I drain the house to recharge an old air chamber?',
      answer:
        'Some older plumbing used air chambers that could lose their air cushion, but do not assume that is what you have. Modern ASSE 1010 arresters use a permanently sealed gas cushion and are intended to provide continuous protection without recharging.',
    },
    {
      question: 'Is water pressure above 80 psi too high?',
      answer:
        'Many residential plumbing codes, including the cited Seattle code, limit static pressure to 80 psi and require pressure reduction above that level. Local code and utility guidance control where you live.',
    },
    {
      question: 'Do I need a plumber?',
      answer:
        'Arrange plumbing service if the bang recurs, affects several fixtures, moves pipes, continues despite an existing arrestor, or comes with high pressure or leakage. A pressure regulator or concealed pipe-support problem is not a blind trial-and-error repair.',
    },
    {
      question: 'What should I do if I rent the home?',
      answer:
        "Report recurring banging, visible pipe movement, high pressure, or any leak through the landlord or property manager's maintenance process. Repair duties and response rules vary by lease and location.",
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Denver Water',
      title: 'General Construction FAQs',
      url: 'https://www.denverwater.org/residential/services-and-information/troubleshooting-and-repairs/general-construction-faqs',
      sourceType: 'government',
      notes:
        'Defines water hammer as a pressure surge or shockwave caused when water stops or changes direction abruptly, says it can damage plumbing, and discusses trapped air and flushing after service-line work.',
    },
    {
      publisher: 'Seattle Department of Construction and Inspections',
      title: '2021 Seattle Residential Code, Chapter 29: Water Supply and Distribution',
      url: 'https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2021SRCChapter29.pdf',
      sourceType: 'regulation',
      notes:
        "Requires an ASSE 1010-conforming water-hammer arrestor where quick-closing valves are used, requires manufacturer-directed installation, and limits static pressure to 80 psi under Seattle's code.",
    },
    {
      publisher: 'Portland Water Bureau',
      title: 'Troubleshooting Water Pressure and Flow',
      url: 'https://www.portland.gov/water/drinking-water-quality/troubleshooting-drinking-water-quality-home/water-pressure-and-flow',
      sourceType: 'government',
      notes:
        "Explains how residents can check pressure with a gauge, report abnormal pressure, inspect pressure-reducing equipment, and follow Portland's local requirement for pressure reduction above 80 psi.",
    },
    {
      publisher: 'ASSE International',
      title: 'Product Standards',
      url: 'https://asse-plumbing.org/standards/product-standards',
      sourceType: 'standards_body',
      notes:
        'Describes ASSE/IAPMO/ANSI/CAN 1010-2025 arresters as devices that prevent detrimental surge pressures, prolong component service life, reduce noise, and use a permanently sealed gas cushion.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Dishwasher - Cause of Water Hammer',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=18922',
      sourceType: 'manufacturer',
      notes:
        'Says household water pressure and the closing dishwasher inlet valve can make pipes rattle, and recommends plumbing evaluation rather than treating the sound solely as an appliance fault.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Home Electrical Safety Checklist',
      url: 'https://www.cpsc.gov/safety-education/safety-guides/electronics-and-electrical-home/home-electrical-safety-checklist',
      sourceType: 'government',
      notes:
        'Advises keeping electrical equipment dry and warns that mixing electricity and water can create serious shock or fire hazards.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Hose-connection water pressure gauge',
      description:
        "A gauge with a suitable connection can help identify unusually high or fluctuating static pressure. Use the utility's testing guidance and compare the result with local requirements.",
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'ASSE 1010-listed water-hammer arrestor',
      description:
        'A listed arrestor uses a sealed gas cushion to control detrimental surge pressure. Selection and installation must match the valve, piping, demand, and manufacturer instructions.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Material-compatible pipe supports',
      description:
        'Correct clamps, isolators, and supports can keep accessible piping from striking nearby surfaces. The support type and spacing depend on the pipe material and installation.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Residential plumbing service',
      description:
        'A plumbing service can measure pressure, assess a pressure-reducing valve, locate moving piping, identify the triggering valve, and select or install appropriate hammer control.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'rattling-pipes-in-the-wall',
      anchorText: 'Why are pipes rattling inside the wall?',
      relationshipType: 'sibling',
    },
    { slug: 'whistling-pipes', anchorText: 'Why do my water pipes whistle?', relationshipType: 'sibling' },
    {
      slug: 'dripping-shutoff-valve',
      anchorText: 'What if the shutoff valve starts dripping?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'washing-machine-leaking-water',
      anchorText: 'What if the washing machine starts leaking?',
      relationshipType: 'escalation',
    },
  ],
};
