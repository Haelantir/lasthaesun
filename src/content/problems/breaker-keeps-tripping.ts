import type { ProblemSeed } from '../types';

export const breakerKeepsTripping: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'breakers',
  slug: 'breaker-keeps-tripping',
  canonicalPath: '/home/electrical/breakers/breaker-keeps-tripping/',
  name: 'Circuit breaker keeps tripping',
  eyebrow: 'Home · Electrical · Breakers',

  h1: 'Can I Ignore a Circuit Breaker That Keeps Tripping?',
  seoTitle: 'Breaker Keeps Tripping? When to Reset It and When to Stop',
  metaDescription:
    'A breaker that repeatedly trips is warning you about an overload or electrical fault. See when one reset is reasonable and when to leave it off.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep using the circuit?',
  canIUseItLabel: 'Not if it keeps tripping',

  shortAnswer:
    'No. A circuit breaker that keeps tripping is usually reacting to an overload or electrical fault, and repeatedly resetting it does not fix the cause. If it trips again after you reduce or unplug the loads, leave it off and have the circuit checked.',

  whyItMattersHeading: 'Why Does a Breaker Keep Tripping?',
  whyItMatters: [
    'A standard circuit breaker opens the circuit when current becomes unsafe because of an overload or short circuit. AFCI and GFCI breakers can also trip for arc-fault or ground-fault conditions. The trip is the protective action; the problem is whatever made the breaker trip.',
    'One trip during an obvious overload is different from a breaker that keeps opening with little connected, trips the moment one appliance starts, or shows up with heat, odor, buzzing, discoloration, smoke, or moisture. In those cases, stop treating the breaker as a reset button and find the cause.',
  ].join('\n\n'),

  redFlagsHeading: 'Leave It Off and Get Help If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Reviewed against CPSC guidance plus ESFI, UL, Siemens, and Schneider material on overloads, short circuits, AFCI/GFCI protection, and repeated trips.',
  disclaimer:
    'General residential electrical triage only. Circuit design, breaker type, wiring, and code requirements vary by home and location. Do not remove a panel cover or work on energized wiring unless you are qualified to do so.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'obvious-overload-clears',
      label: 'It tripped once while several high-draw appliances were running',
      shortDescription: 'You unplugged or turned off some loads, reset the breaker, and it has stayed on.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The overload may be explained',
      resultBody:
        'Too much load on one circuit can trip a breaker even when the breaker and wiring are working correctly. If reducing the load stops the problem, do not recreate the same overload.',
      recommendedAction:
        'Keep the heavy loads separated and watch for another trip. If it happens again under a lighter load, stop using the circuit normally and have it checked.',
    },
    {
      slug: 'trips-again-after-load-reduced',
      label: 'It trips again after you reduce the load',
      shortDescription: 'You unplugged or turned off several devices, but the breaker still opens again.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Leave it off and investigate',
      resultBody:
        'A repeated trip after the obvious load has been reduced makes a simple one-time overload less convincing. The cause could be a damaged appliance, wiring fault, breaker problem, or another condition that needs diagnosis.',
      recommendedAction:
        'Leave the breaker off if it trips again. Arrange electrical diagnosis instead of continuing to reset it.',
    },
    {
      slug: 'trips-immediately-on-reset',
      label: 'It trips immediately when you reset it',
      shortDescription: 'The handle will not stay on or it trips as soon as the circuit is energized.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep resetting it',
      resultBody:
        'Immediate tripping can happen with a short circuit, a fault in connected equipment, or another high-current condition. Repeatedly re-energizing the circuit is not troubleshooting.',
      recommendedAction:
        'Turn off or unplug accessible loads if it is safe to do so. If the breaker still trips, leave it off and call an electrician.',
    },
    {
      slug: 'one-appliance-triggers-trip',
      label: 'One appliance reliably makes the breaker trip',
      shortDescription: 'The circuit stays on until a particular appliance or tool is switched on.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using that appliance on the circuit',
      resultBody:
        'The appliance may be drawing too much current or may have an internal or cord fault. Moving it around the house without understanding the cause can move the problem instead of solving it.',
      recommendedAction:
        'Unplug the appliance and stop using it until the appliance and circuit are checked as appropriate.',
    },
    {
      slug: 'afci-gfci-breaker-repeats',
      label: 'The breaker has a TEST button and keeps tripping',
      shortDescription: 'It is an AFCI, GFCI, or dual-function breaker rather than a standard breaker.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not bypass the extra protection',
      resultBody:
        'These breakers can trip for the same overload and short-circuit conditions as applicable, while also providing arc-fault or ground-fault protection. A repeated trip may be the device detecting the hazard it was designed to catch.',
      recommendedAction:
        "Follow the breaker manufacturer's reset and diagnostic guidance. Do not replace it with a standard breaker just to stop the tripping.",
    },
    {
      slug: 'heat-smell-buzzing',
      label: 'The breaker or panel is hot, smells burnt, or makes unusual noise',
      shortDescription:
        'There is heat, discoloration, burning odor, buzzing, sizzling, or crackling at the panel.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using the circuit',
      resultBody:
        'Heat, odor, discoloration, or abnormal electrical noise can signal overheating or a poor electrical connection. That raises the concern beyond an ordinary overload.',
      recommendedAction:
        'Keep clear of the panel if it appears damaged or unsafe. Shut off power only if you can do so safely and arrange urgent electrical service.',
    },
    {
      slug: 'smoke-sparks',
      label: 'You see smoke or sparking at the panel',
      shortDescription:
        'Smoke, visible arcing, or active sparking is coming from the breaker or electrical panel.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as an electrical emergency',
      resultBody:
        'Smoke or visible arcing can indicate an active electrical fault or fire hazard. Do not keep operating the breaker.',
      recommendedAction:
        'Stay away from the panel. If there is fire or an immediate threat, get to a safe place and contact emergency services.',
    },
    {
      slug: 'moisture-near-panel',
      label: 'The panel or breaker area is wet',
      shortDescription:
        'Water intrusion, flooding, or visible moisture is present around the electrical panel.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not touch a wet electrical panel',
      resultBody:
        'Water around energized electrical equipment creates a shock hazard and can damage electrical components. A trip in this setting should not be treated as a routine reset.',
      recommendedAction:
        'Keep away from the wet equipment and arrange qualified electrical help. Do not touch the panel while you or the area around it is wet.',
    },
    {
      slug: 'trips-with-loads-unplugged',
      label: 'It trips even with the accessible loads unplugged',
      shortDescription:
        'Lamps, appliances, and other plug-in loads on the circuit are disconnected, but the breaker still trips.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The circuit itself needs diagnosis',
      resultBody:
        'With plug-in loads removed, a continuing trip raises concern for fixed wiring, hardwired equipment, the breaker, or another fault that cannot be ruled out from the panel handle.',
      recommendedAction: 'Leave the breaker off and have the circuit inspected.',
    },
    {
      slug: 'multiple-breakers-or-main',
      label: 'Several breakers or the main breaker are tripping',
      shortDescription: 'The problem is not limited to one ordinary branch circuit.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This needs broader electrical diagnosis',
      resultBody:
        'Trips involving multiple circuits or the main breaker can reflect a larger load or distribution problem. The cause is not something to diagnose by repeatedly switching breakers back on.',
      recommendedAction:
        'Reduce unnecessary loads and arrange prompt electrical evaluation. If there is heat, odor, smoke, sparking, or unstable power, treat it as urgent.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The breaker opens the circuit',
      description:
        'The trip removes power from the affected circuit. That is the safety device doing its job, not proof that the breaker itself is the problem.',
      severity: 'info',
      chainLabel: 'Trip',
    },
    {
      stageLabel: 'IF YOU RESET WITHOUT FIXING THE CAUSE',
      title: 'The same condition can return',
      description:
        'An overload, damaged appliance, short circuit, or other fault can still be present when power comes back on.',
      severity: 'caution',
      chainLabel: 'Re-energize',
    },
    {
      stageLabel: 'IF THE PROBLEM IS AN OVERLOAD',
      title: 'Wiring and equipment can be stressed',
      description:
        'Repeated overloads should be avoided because excessive current can overheat wiring and damage equipment.',
      severity: 'warning',
      chainLabel: 'Overload',
    },
    {
      stageLabel: 'IF THE PROBLEM IS A FAULT',
      title: 'Fire or shock risk may remain',
      description:
        'Short circuits are hazardous, while ground-fault and arc-fault protection is specifically intended to reduce shock or fire hazards where those devices are installed.',
      severity: 'danger',
      chainLabel: 'Fault',
    },
    {
      stageLabel: 'IF YOU BYPASS THE PROTECTION',
      title: 'You can make the circuit less safe',
      description:
        'Installing an oversized breaker or removing AFCI or GFCI protection just to stop tripping can defeat protection the circuit is supposed to have.',
      severity: 'danger',
      chainLabel: 'Bypass',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One obvious overload happened and the breaker stays on after reducing the load',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Keep the load reduced and do not recreate the overload. If the breaker trips again, move to diagnosis instead of another reset.',
    },
    {
      situation: 'The breaker keeps tripping under normal use',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the circuit normally. Leave the breaker off if it trips again and arrange electrical diagnosis.',
    },
    {
      situation: 'One appliance or tool triggers the trip',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Unplug that appliance and stop using it until the appliance or circuit problem is identified.',
    },
    {
      situation: 'The breaker trips immediately or will not stay reset',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not keep resetting it. Disconnect accessible loads if safe, then leave the breaker off and call an electrician if the trip continues.',
    },
    {
      situation: 'An AFCI, GFCI, or dual-function breaker keeps tripping',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        "Treat the trip as a possible protective response. Follow the manufacturer's guidance and do not bypass or downgrade the breaker.",
    },
    {
      situation: 'There is heat, burning odor, discoloration, buzzing, sizzling, or crackling',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop using the affected circuit and arrange urgent electrical service. Keep clear if the panel itself appears unsafe.',
    },
    {
      situation: 'There is smoke, sparking, or water at the electrical panel',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stay away from the panel. Do not touch wet or actively arcing equipment, and contact emergency services if there is fire or an immediate threat.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Reduce the load before any reset',
      body:
        'If there is no heat, smoke, odor, moisture, or visible damage, unplug or turn off devices on the affected circuit. Reset a tripped breaker according to its instructions, which commonly requires moving the handle fully OFF before switching it ON.',
    },
    {
      title: 'Stop after a repeated trip',
      body:
        'If the breaker trips again after the load has been reduced, leave it off. Repeatedly resetting a breaker is not a repair and can re-energize the condition that caused the trip.',
    },
    {
      title: 'Isolate an appliance that triggers the problem',
      body:
        'If one appliance reliably causes the trip, unplug it and stop using it until the cause is understood. A malfunctioning product can overload or fault a circuit.',
    },
    {
      title: 'Check whether the breaker is AFCI or GFCI',
      body:
        "A breaker with a TEST button may provide arc-fault, ground-fault, or dual-function protection. Use the manufacturer's instructions and trip indicators if provided rather than replacing it with a standard breaker.",
      destinationProblemSlug: 'gfci-keeps-tripping',
    },
    {
      title: 'Do not upsize or bypass the breaker',
      body:
        "The breaker rating and type are part of the circuit's protection. Do not install a larger breaker or remove required AFCI or GFCI protection just to stop nuisance trips.",
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Burning odor, smoke, or visible sparking',
      description: 'These can indicate overheating, arcing, or an active electrical fault.',
      severity: 'danger',
    },
    {
      title: 'The panel or breaker is unusually hot or discolored',
      description: 'Heat or discoloration around electrical equipment is not a normal sign to work around.',
      severity: 'danger',
    },
    {
      title: 'Buzzing, sizzling, or crackling at the panel',
      description: 'Unusual electrical noise can point to a poor connection or arcing condition.',
      severity: 'danger',
    },
    {
      title: 'You feel a shock or tingling from connected equipment',
      description: 'Stop using the affected equipment and circuit until the source is identified.',
      severity: 'danger',
    },
    {
      title: 'Water or flooding is near the electrical panel',
      description: 'Do not touch wet electrical equipment or stand in water to reach a breaker.',
      severity: 'danger',
    },
    {
      title: 'The breaker trips immediately with accessible loads disconnected',
      description: 'Fixed wiring, hardwired equipment, or the breaker itself may need diagnosis.',
      severity: 'warning',
    },
    {
      title: 'More than one circuit is behaving abnormally',
      description:
        'Multiple trips, widespread dimming, or unstable power can indicate a broader electrical problem.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why does a circuit breaker trip?',
      answer:
        'Standard breakers are designed to open on overloads and short circuits. AFCI and GFCI breakers add protection for specific arc-fault or ground-fault conditions.',
    },
    {
      question: 'Can the breaker itself be bad?',
      answer:
        'Yes. Breakers can fail, but a repeated trip should not be blamed on the breaker until overloads, connected equipment, wiring, and the type of protective device have been checked.',
    },
    {
      question: 'Is it safe to reset a tripped breaker once?',
      answer:
        'It can be reasonable after an obvious overload has been removed and there is no heat, odor, smoke, moisture, or visible damage. If it trips again, stop resetting it.',
    },
    {
      question: 'Why does the breaker trip only after an appliance has been running for a while?',
      answer:
        'A sustained overload can trigger the thermal part of a thermal-magnetic breaker. The appliance, circuit loading, connections, and breaker still need to be considered if the pattern repeats.',
    },
    {
      question: 'Why does the breaker trip the instant I turn something on?',
      answer:
        'A high starting current can be normal for some equipment, but immediate repeated tripping can also indicate a short circuit or equipment fault. Do not keep forcing the breaker back on.',
    },
    {
      question: 'Can I replace the breaker with a larger one?',
      answer:
        'Not as a workaround. The breaker must be appropriate for the circuit and wiring. Upsizing it without a proper electrical evaluation can remove needed overcurrent protection.',
    },
    {
      question: 'What if the breaker only trips when it rains or when something gets wet?',
      answer:
        'Stop using the affected circuit or outdoor equipment until the cause is checked. Moisture can create ground-fault and shock hazards, especially on GFCI-protected circuits.',
    },
    {
      question: 'What if I leave the breaker switched off?',
      answer:
        'Leaving the affected circuit de-energized is safer than repeatedly resetting it. You should still arrange diagnosis if the trip is unexplained or repeated, especially if there were signs of heat or damage.',
    },
    {
      question: 'Are AFCI or GFCI trips just nuisance trips?',
      answer:
        'Not necessarily. These devices are designed to detect hazards that a standard breaker may not detect. Repeated tripping should be investigated before the protection is changed or removed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title:
        'Commission Closes Investigation Of FPE Circuit Breakers And Provides Safety Information For Consumers',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/1983/Commission-Closes-Investigation-Of-FPE-Circuit-Breakers-And-Provides-Safety-Information-For-Consumers',
      sourceType: 'government',
      notes:
        'Advises consumers to investigate why a breaker trips rather than simply resetting it, avoid circuit overloads, disconnect products that develop problems, and use properly sized circuit protection.',
    },
    {
      publisher: 'Electrical Safety Foundation International',
      title: 'Fuse and Breaker Breakdown',
      url: 'https://www.esfi.org/fuse-and-breaker-breakdown/',
      sourceType: 'industry',
      notes:
        'Explains standard, AFCI, and GFCI breaker functions and states that frequent breaker trips indicate a problem that should be inspected.',
    },
    {
      publisher: 'Schneider Electric USA',
      title: 'Why is my GFI breaker tripping when I use my chop saw?',
      url: 'https://www.se.com/us/en/faqs/FA316728/',
      sourceType: 'manufacturer',
      notes:
        'For Schneider QO and HOM GFI breakers, identifies overload, short circuit, and ground fault as trip causes and warns against repeated overloads, bypassing the breaker, or substituting a non-GFI breaker.',
    },
    {
      publisher: 'UL Solutions',
      title: 'Arc Fault Circuit Interrupter (AFCI) Device Testing and Certification',
      url: 'https://www.ul.com/services/arc-fault-circuit-interrupter-afci-device-testing-and-certification',
      sourceType: 'standards_body',
      notes:
        'Explains that AFCIs de-energize a circuit when an arc fault is detected and identifies UL 1699 and UL 489 as applicable U.S. standards for AFCI circuit-breaker devices.',
    },
    {
      publisher: 'Siemens',
      title: 'Miniature Circuit Breakers Technology Primer',
      url: 'https://cache.industry.siemens.com/dl/files/304/109482304/att_866617/v1/MiniatureCircuitBreakers_primer_EN_201601250852395217.pdf',
      sourceType: 'manufacturer',
      notes:
        'Describes miniature circuit breakers as combining delayed thermal overload protection with magnetic short-circuit protection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Circuit directory or panel labels',
      description:
        'Helps identify which outlets, lights, and appliances are actually on the breaker that is tripping.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance nameplates and manuals',
      description:
        'Useful for checking what loads are connected and whether an appliance has installation or circuit requirements.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Breaker manufacturer diagnostic guide',
      description:
        'Some AFCI, GFCI, and dual-function breakers provide trip indicators or model-specific reset instructions.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Electrical diagnostic service',
      description:
        'Appropriate when the breaker retrips after loads are reduced, trips with little connected, or there are signs of heat, damage, arcing, or moisture.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'gfci-keeps-tripping',
      anchorText: 'Is the GFCI protection what keeps tripping?',
      relationshipType: 'sibling',
    },
    {
      slug: 'warm-electrical-outlet',
      anchorText: 'Is an outlet on the circuit getting warm?',
      relationshipType: 'escalation',
    },
    {
      slug: 'burning-smell-from-outlet',
      anchorText: 'Do you smell burning near an outlet?',
      relationshipType: 'escalation',
    },
    {
      slug: 'buzzing-electrical-outlet',
      anchorText: 'Is an outlet buzzing or making electrical noise?',
      relationshipType: 'escalation',
    },
    {
      slug: 'flickering-light',
      anchorText: 'Are the lights on the circuit flickering too?',
      relationshipType: 'related',
    },
  ],
};
