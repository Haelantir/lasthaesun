import type { ProblemSeed } from '../types';

/**
 * Home > Electrical > Outlets > Warm Electrical Outlet.
 *
 * Every factual claim below traces to one of the seven sources at the
 * bottom of this file. The core distinction is: a warm device or charger
 * with a cool outlet plate can be normal, while the outlet or cover plate
 * itself becoming noticeably warm — or hot, discolored, loose-fitting,
 * buzzing, sparking or repeatedly tripping a breaker — is a wiring
 * warning sign CPSC says should stop normal use.
 */
export const warmElectricalOutlet: ProblemSeed = {
  systemSlug: 'outlets',
  slug: 'warm-electrical-outlet',
  canonicalPath: '/home/electrical/outlets/warm-electrical-outlet/',
  name: 'Warm Electrical Outlet',
  eyebrow: 'Home · Electrical · Outlets',

  h1: 'Can I Ignore a Warm Electrical Outlet?',
  seoTitle: 'Warm Electrical Outlet: Is It Safe to Keep Using? | Can I Ignore It',
  metaDescription:
    'A warm wall outlet can signal overheating or a poor connection. See when to stop using it and which warning signs need an electrician quickly.',

  status: 'published',
  indexable: true,

  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I use the outlet?',
  canIUseItLabel: 'No, until it is checked',

  shortAnswer:
    'If the outlet or its wall plate feels noticeably warm, stop using it and have the cause checked. Heat can come from a poor connection, a worn receptacle, excessive load or another wiring problem. Burning smells, discoloration, buzzing, sparks or a hot-to-the-touch outlet make it more urgent.',

  whyItMattersHeading: 'Why Does a Warm Electrical Outlet Matter?',
  whyItMatters: [
    'Electrical connections should carry current without producing noticeable heat at the wall outlet. CPSC warns that warm or hot outlet cover plates can indicate an unsafe wiring condition. Its home-wiring guidance treats a faceplate that becomes hot or uncomfortable to touch as a potential fire hazard.',
    'Poor contact can create heat at the receptacle or plug connection. CPSC investigations of residential electrical fires found overheating at receptacles associated with loose or poor connections, including loose contact between a plug and an outlet. A loose-fitting plug, recurring heat, discoloration, odor or electrical noise should be checked instead of worked around.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Outlet Immediately If You Notice:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Warm and hot household receptacles, loose plug fit, overheating, breaker trips and high-load appliance use checked against U.S. CPSC guidance and fire-investigation material.',
  disclaimer:
    'General household electrical guidance only. Do not remove a receptacle cover or work on energized wiring to investigate heat unless you are qualified to do that work. If there is smoke, active fire or sustained arcing, leave the immediate area and follow local emergency guidance.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'charger-warm-outlet-cool',
      label: 'The charger or plug feels warm, but the outlet plate does not',
      shortDescription: 'The warmth seems limited to the device or power adapter.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Check the device first',
      resultBody:
        'Some electrical products and plugs can become warm while operating. If the wall outlet and cover plate stay cool, the heat may be coming from the device rather than the receptacle.',
      recommendedAction: "Follow the device manufacturer's instructions. Stop using it if the plug becomes excessively hot, damaged, discolored or gives off an unusual smell.",
    },
    {
      slug: 'outlet-slightly-warm-in-use',
      label: 'The outlet plate itself feels slightly warm while something is plugged in',
      shortDescription: 'The warmth is noticeable at the wall plate.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using that outlet for now',
      resultBody:
        'CPSC warns that warm or hot cover plates can indicate an unsafe wiring condition. The source can be inside the receptacle, at the plug contact or elsewhere on the circuit.',
      recommendedAction: 'Unplug the connected device if it is safe to do so and leave the outlet unused until a qualified electrician checks it.',
    },
    {
      slug: 'warm-with-nothing-plugged-in',
      label: 'The outlet feels warm even with nothing plugged into it',
      shortDescription: 'The receptacle is unused but the wall plate is still warm.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Have the circuit checked',
      resultBody:
        'An unused receptacle can still carry current through connections that feed other outlets on the circuit. CPSC specifically notes that unused receptacles can become hot when power passes through those connections.',
      recommendedAction: 'Stop using the outlet and arrange a qualified electrical inspection.',
    },
    {
      slug: 'plug-fits-loosely',
      label: 'The plug feels loose or falls out easily',
      shortDescription: 'The blades do not fit snugly in the receptacle.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Replace the worn receptacle',
      resultBody:
        'CPSC warns that loose-fitting plugs can overheat. Poor contact between the plug blades and receptacle contacts can generate heat and has been seen in receptacle-related fire investigations.',
      recommendedAction: 'Stop using the loose outlet and have the receptacle replaced by a qualified person.',
    },
    {
      slug: 'hot-uncomfortable-touch',
      label: 'The outlet is hot or uncomfortable to touch',
      shortDescription: 'The heat is much stronger than mild warmth.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Discontinue use immediately',
      resultBody: 'CPSC treats a hot receptacle faceplate as a potential fire hazard and advises stopping use and getting qualified electrical help as soon as possible.',
      recommendedAction: 'Do not keep testing the outlet. If you can safely disconnect the load without touching damaged or overheated parts, do so and arrange prompt electrical service.',
    },
    {
      slug: 'discoloration-or-melting',
      label: 'The outlet is brown, scorched, warped or melted',
      shortDescription: 'Heat has visibly changed the receptacle or wall plate.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Keep the outlet out of service',
      resultBody: 'Visible heat damage means the problem has progressed beyond a warm surface. The receptacle, plug or connection may have overheated.',
      recommendedAction: 'Stop using the outlet and have the receptacle and wiring inspected before power is used there again.',
    },
    {
      slug: 'burning-smell',
      label: 'I smell burning plastic or hot insulation',
      shortDescription: 'The odor comes from the outlet or nearby wall.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat the smell as an electrical warning',
      resultBody: 'CPSC identifies the smell of burning plastic or overheated insulation near a receptacle as a warning sign of an electrical problem.',
      recommendedAction: 'Stop using the outlet. If there is smoke, active sparking or signs of fire, leave the area and follow local emergency guidance.',
    },
    {
      slug: 'buzzing-or-crackling',
      label: 'The outlet buzzes, sizzles or crackles',
      shortDescription: 'An unusual sound comes from the receptacle or wall.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using the outlet',
      resultBody: 'CPSC home-wiring guidance lists unusual sizzling or buzzing among signs that can accompany electrical-system problems.',
      recommendedAction: 'Leave the outlet unused and arrange prompt inspection by a qualified electrician.',
    },
    {
      slug: 'sparks-or-arcing',
      label: 'I see sparks or arcing at the outlet',
      shortDescription: 'Visible electrical flashes occur during normal use.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not keep using it',
      resultBody: 'Visible arcing or repeated sparks can accompany damaged or poor electrical connections and should be treated as a serious warning sign.',
      recommendedAction: 'Stop using the outlet. If sparking continues, smoke appears or a fire starts, leave the area and follow local emergency guidance.',
    },
    {
      slug: 'breaker-trips-with-outlet',
      label: 'The breaker trips when I use this outlet',
      shortDescription: 'Using the receptacle repeatedly shuts the circuit off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep resetting the breaker',
      resultBody: 'CPSC advises against substituting a larger breaker or fuse when a particular outlet repeatedly trips the circuit. The electrical problem needs to be corrected.',
      recommendedAction: 'Stop using the outlet and have the circuit checked by a qualified electrician.',
    },
    {
      slug: 'space-heater-or-high-load',
      label: 'It gets warm when I use a space heater or other high-power appliance',
      shortDescription: 'The outlet heats up under a heavy electrical load.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using that appliance on this outlet',
      resultBody: 'A high electrical load can expose a poor connection or worn receptacle. CPSC advises plugging portable space heaters directly into a wall outlet and warns that a loose plug can overheat the plug or receptacle.',
      recommendedAction: 'Unplug the appliance if it is safe to do so and have the warm outlet checked before using it again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Heat develops at the outlet or connection',
      description: 'Noticeable warmth means electrical energy is being converted to heat somewhere in the receptacle, plug connection or circuit.',
      severity: 'caution',
      chainLabel: 'Heat',
    },
    {
      stageLabel: 'IF THE CONNECTION IS POOR',
      title: 'The contact can keep overheating',
      description: 'A loose or worn connection can create resistance at the contact point. CPSC fire investigations have linked poor receptacle and plug connections with overheating.',
      severity: 'warning',
      chainLabel: 'Poor contact',
    },
    {
      stageLabel: 'KEEP USING IT',
      title: 'Heat can damage the receptacle and plug',
      description: 'Continued overheating can discolor, deform or degrade electrical components and their insulation.',
      severity: 'warning',
      chainLabel: 'Component damage',
    },
    {
      stageLabel: 'IF ARCING DEVELOPS',
      title: 'Damage can accelerate',
      description: 'Deteriorated or loose electrical contacts can arc, producing more heat and damaging nearby insulating material.',
      severity: 'danger',
      chainLabel: 'Arcing',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'An electrical fire can start',
      description: 'CPSC treats hot receptacles and unsafe wiring conditions as fire hazards. A fire inside an outlet box or wall may not be immediately visible.',
      severity: 'danger',
      chainLabel: 'Fire hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Only the charger or plug is mildly warm and the outlet plate stays cool',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Follow the device instructions and watch for excessive heat, damage or odor.',
    },
    {
      situation: 'The outlet plate itself feels noticeably warm',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using the outlet and have it checked.',
    },
    {
      situation: 'The outlet is warm with nothing plugged into it',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Leave it unused and arrange an electrical inspection.',
    },
    {
      situation: 'A plug fits loosely in the outlet',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using the worn receptacle and have it replaced.',
    },
    {
      situation: 'The outlet is hot or uncomfortable to touch',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Discontinue use immediately and get qualified electrical help.',
    },
    {
      situation: 'The outlet is discolored, melted, buzzing or smells burned',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Keep it out of service and arrange prompt inspection.',
    },
    {
      situation: 'The outlet sparks or the breaker repeatedly trips',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using the circuit and have the cause diagnosed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop using the warm outlet',
      body: 'If the receptacle or cover plate itself is noticeably warm, do not keep plugging devices into it to see whether the heat returns. CPSC advises discontinuing use of hot receptacles and switches while the cause is investigated.',
    },
    {
      title: 'Unplug the connected device if it is safe',
      body: 'Grip the plug body rather than pulling on the cord. Do not touch melted, scorched or actively sparking parts. If the outlet is too hot to approach safely, leave it alone and get qualified help.',
    },
    {
      title: 'Check the plug fit without repeated testing',
      body: 'If you already noticed that a plug sits loosely or falls out easily, stop using that receptacle. CPSC recommends replacing outlets that do not hold plugs snugly because loose connections can overheat.',
    },
    {
      title: 'Note what was running when the outlet heated up',
      body: 'Tell the electrician which device was connected and whether other outlets, lights or breakers behaved differently at the same time. This can help narrow the circuit and load involved without opening the outlet yourself.',
    },
    {
      title: 'Have the receptacle and circuit inspected',
      body: 'A qualified electrician can check the receptacle, plug contact, wiring connections and circuit loading. Do not replace the breaker with a higher-rated one or open an energized electrical box as a shortcut.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The outlet is hot or painful to touch',
      description: 'CPSC treats this as a potential fire hazard.',
      severity: 'danger',
    },
    {
      title: 'The plug fits loosely',
      description: 'Loose contact can create enough heat to damage the plug or receptacle.',
      severity: 'warning',
    },
    {
      title: 'The outlet is brown, scorched, warped or melted',
      description: 'Visible heat damage requires inspection before reuse.',
      severity: 'danger',
    },
    {
      title: 'You smell burning plastic or hot insulation',
      description: 'Stop using the outlet and check for smoke or other signs of fire.',
      severity: 'danger',
    },
    {
      title: 'You hear buzzing, sizzling or crackling',
      description: 'Electrical noise together with heat can indicate a deteriorating connection.',
      severity: 'danger',
    },
    {
      title: 'You see repeated sparks or arcing',
      description: 'Keep the outlet out of service.',
      severity: 'danger',
    },
    {
      title: 'The breaker repeatedly trips when this outlet is used',
      description: 'Do not keep resetting it without correcting the cause.',
      severity: 'danger',
    },
    {
      title: 'The outlet stays warm even when unused',
      description: 'Other current may still pass through connections at that receptacle.',
      severity: 'warning',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it normal for an electrical outlet to feel warm?',
      answer: 'A wall outlet or cover plate should not be noticeably warm without explanation. CPSC says warm or hot outlet cover plates can indicate an unsafe wiring condition and should be inspected.',
    },
    {
      question: 'What if only my phone charger feels warm?',
      answer: "That is different from the wall outlet itself becoming warm. Follow the charger's instructions and stop using it if the plug or adapter becomes excessively hot, damaged, discolored or gives off an unusual odor.",
    },
    {
      question: 'Why is my outlet warm when nothing is plugged in?',
      answer: 'An unused receptacle can still be part of the electrical path feeding other outlets. CPSC notes that power can pass through connections at an unused receptacle, so unexplained heat there needs inspection.',
    },
    {
      question: 'Can a loose plug make an outlet hot?',
      answer: 'Yes. CPSC warns that loose-fitting plugs can cause overheating, and its fire investigations have found poor plug-to-receptacle contact among causes of receptacle overheating.',
    },
    {
      question: 'Should I keep using a warm outlet if the breaker has not tripped?',
      answer: 'No. A breaker does not need to trip for a receptacle or connection to overheat. Stop using the warm outlet and have it checked.',
    },
    {
      question: 'Is a warm outlet more serious if a space heater is plugged in?',
      answer: 'Yes. Space heaters draw substantial power, and CPSC advises plugging them directly into a wall outlet. If the outlet or plug becomes excessively hot, stop using the heater there and have the connection checked.',
    },
    {
      question: 'What if the outlet is only warm with one particular appliance?',
      answer: 'The appliance, plug, receptacle or their connection may be involved. Stop using that appliance on the warm outlet until you know which part is causing the heat.',
    },
    {
      question: 'Can I tighten the outlet wires myself?',
      answer: 'Do not open an electrical box or work on energized wiring unless you are qualified to do so. CPSC describes locating and repairing specific wiring defects as work for qualified electrical professionals.',
    },
    {
      question: 'Should I turn off the breaker to a warm outlet?',
      answer: 'If the outlet is hot, damaged, sparking or producing a burning odor, keeping the affected circuit de-energized can prevent further heating. If you are unsure which breaker controls it or cannot reach the panel safely, leave the outlet alone and get qualified help.',
    },
    {
      question: 'Do I need an electrician for a warm outlet?',
      answer: 'If the outlet or cover plate itself is repeatedly or noticeably warm, yes. CPSC recommends qualified electrical inspection for warm or hot receptacle cover plates and immediate discontinuation of a hot receptacle.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Qualified electrician',
      description: 'The appropriate service for a receptacle that is warm, hot, damaged, loose, buzzing, sparking or repeatedly tripping its circuit.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Replacement receptacle',
      description: 'A worn or heat-damaged receptacle may need replacement after the circuit and wiring connections are inspected.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Home electrical safety checklist',
      description: 'CPSC\'s household checklist covers loose-fitting plugs, GFCI testing and other common electrical warning signs.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Smoke alarm',
      description: "Working smoke alarms are a basic layer of home fire protection. Test and maintain them according to the alarm manufacturer's instructions.",
      kind: 'part',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Home Wiring Hazards',
      url: 'https://www.cpsc.gov/safety-education/safety-guides/home-wiring-hazards',
      sourceType: 'government',
      notes: 'CPSC identifies hot receptacle and switch faceplates as a potential fire hazard, advises discontinuing use and recommends qualified electrical help.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Guide to Home Wiring Hazards',
      url: 'https://www.cpsc.gov/s3fs-public/518.pdf',
      sourceType: 'government',
      notes: 'Detailed CPSC guidance states that hot or uncomfortable-to-touch receptacle faceplates can indicate a fire hazard and notes that unused receptacles may also heat because current can pass through their connections.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Home Electrical Safety Checklist',
      url: 'https://www.cpsc.gov/safety-education/safety-guides/electronics-and-electrical-home/home-electrical-safety-checklist',
      sourceType: 'government',
      notes: 'CPSC tells consumers to replace outlets that do not hold plugs snugly because loose-fitting plugs can overheat and contribute to fires.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Residential Electrical Distribution System Fires',
      url: 'https://www.cpsc.gov/s3fs-public/reselecfire.pdf',
      sourceType: 'government',
      notes: 'CPSC fire-investigation material describes receptacle overheating associated with loose or poor terminal connections and poor contact between receptacles and mating plugs.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Electrical Safety Month: Improved Home Safety Needed To Prevent Electrical Fires',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/1980/Electrical-Safety-Month-Improved-Home-Safety-Needed-To-Prevent-Electrical-Fires',
      sourceType: 'government',
      notes: 'CPSC says warm or hot outlet cover plates often indicate unsafe wiring and recommends having an electrician inspect the wiring.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Keep Warm and Safe This Winter: Tips for Using Generators, Furnaces and Space Heaters',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/Keep-Warm-and-Safe-This-Winter-Tips-for-Using-Generators-Furnaces-and-Space-Heaters',
      sourceType: 'government',
      notes: 'Current CPSC heater guidance says portable electric space heaters should be plugged directly into a wall outlet rather than an extension cord or power strip.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Fire Hazard: Using A Portable Heater? Use Smoke Detector, Too',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/1989/Fire-Hazard-Using-A-Portable-Heater-Use-Smoke-Detector-Too',
      sourceType: 'government',
      notes: 'CPSC warns that loose heater plugs can overheat the plug or receptacle and recommends repair or outlet replacement when excessive plug heat is found.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'flickering-light', anchorText: 'Can I ignore a light that keeps flickering?', relationshipType: 'related' },
    { slug: 'loose-electrical-outlet', anchorText: 'Can I ignore an outlet that will not hold a plug?', relationshipType: 'sibling' },
    { slug: 'buzzing-electrical-outlet', anchorText: 'Can I ignore an electrical outlet that buzzes?', relationshipType: 'escalation' },
    { slug: 'burning-smell-from-outlet', anchorText: 'Can I ignore a burning smell from an outlet?', relationshipType: 'escalation' },
    { slug: 'breaker-keeps-tripping', anchorText: 'Can I ignore a circuit breaker that keeps tripping?', relationshipType: 'escalation' },
  ],
};
