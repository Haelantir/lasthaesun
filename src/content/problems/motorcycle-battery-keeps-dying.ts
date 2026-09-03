import type { ProblemSeed } from '../types';

export const motorcycleBatteryKeepsDying: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'motorcycle-electrical',
  slug: 'motorcycle-battery-keeps-dying',
  canonicalPath: '/motorcycles/electrical/motorcycle-battery-keeps-dying/',
  name: 'Motorcycle battery keeps dying',
  eyebrow: 'Mobility · Motorcycles · Electrical',

  h1: 'Can I Ignore a Motorcycle Battery That Keeps Dying?',
  seoTitle: 'Motorcycle Battery Keeps Dying: Causes, Tests, and When to Stop',
  metaDescription:
    'A motorcycle battery that repeatedly dies needs more than another jump. Separate storage or short-trip discharge from a bad battery, parasitic draw, or charging fault.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Only to get it tested if it starts and runs normally',

  shortAnswer:
    'Probably not. One dead battery after storage may only need a proper recharge and test, but repeated discharge points to a weak battery, bad connection, key-off draw, or charging-system fault. Stop using it if the battery is hot, swollen, cracked, leaking, or giving off an unusual odor.',

  whyItMattersHeading: 'Why Does the Battery Keep Going Flat?',
  whyItMatters: [
    'Starting takes a substantial amount of energy from a small motorcycle battery. The alternator and regulator should replace that energy while you ride, but short trips or a deeply discharged battery may not allow a complete recharge. Leaving a lead-acid battery discharged also promotes sulfation, making it progressively harder to recharge.',
    'Repeated jump-starting does not identify the cause. The battery may be worn out, but a loose terminal, faulty charging system, added accessory, or excessive key-off draw can flatten a good replacement too. Lithium starter batteries require chemistry-compatible charging and have different cold-weather and storage instructions from lead-acid batteries.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding or Charging It If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Battery failure, charging, storage, parasitic draw, cold-weather behavior, damage warnings, and recycling were checked against current manufacturer and U.S. agency guidance.',
  disclaimer:
    'Motorcycle charging specifications and battery procedures vary by model and chemistry. Follow the motorcycle, battery, and charger manuals. If electrical power cuts out while riding, arrange transport rather than continuing to test the bike on the road.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'dead-once-after-storage',
      label: 'It died once after the motorcycle was stored',
      shortDescription:
        'The bike sat unused, and there were no starting or electrical problems before storage.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Recharge and test before replacing anything',
      resultBody:
        'A connected battery can lose charge during storage through self-discharge and small electrical loads. One known storage discharge does not prove the battery or charging system has failed.',
      recommendedAction:
        'Inspect the case and terminals, then fully charge it with a charger approved for its chemistry. Have the battery tested after charging and investigate further if the problem returns.',
    },
    {
      slug: 'only-short-trips',
      label: 'The motorcycle is ridden only on short trips',
      shortDescription:
        'The starter is used often, but the motorcycle gets little sustained riding between starts.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Correct the charging pattern now',
      resultBody:
        'Short trips may not replace all the energy used during starting, especially with lights, heated gear, alarms, or other accessories. Repeated partial charging can damage a lead-acid battery.',
      recommendedAction:
        'Fully charge the battery with a compatible smart charger and use an approved maintainer if the riding pattern will continue. If it still goes flat, test the battery and motorcycle.',
    },
    {
      slug: 'cold-lithium-first-crank',
      label: 'A lithium battery is sluggish only on the first cold start',
      shortDescription:
        'The first crank is weak in cold weather, but the battery quickly recovers and then starts the motorcycle normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be normal for that battery',
      resultBody:
        'Some lithium-iron motorcycle batteries temporarily deliver less cranking power when cold and improve as current warms the cells. That is different from a battery that actually loses its stored charge.',
      recommendedAction:
        'Follow the exact battery maker’s cold-start and temperature instructions. Do not charge a frozen battery or charge outside the maker’s permitted range. Investigate if the weakness persists after warming.',
    },
    {
      slug: 'fails-after-full-charge',
      label: 'It dies again after a full compatible charge',
      shortDescription:
        'The battery was fully charged correctly but soon cranks weakly again or cannot start the motorcycle.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The battery or motorcycle needs testing',
      resultBody:
        'A battery that will not retain usable charge may have lost capacity. If the battery passes testing, the next suspects are the charging system, connections, starter circuit, or an electrical draw while parked.',
      recommendedAction:
        'Stop relying on jump-starts. Get a battery health or load test, then verify charging output and key-off current against the motorcycle’s service information.',
    },
    {
      slug: 'good-battery-dies-parked',
      label: 'A good or recently replaced battery dies while parked',
      shortDescription:
        'The battery tests well or is recently installed, but loses charge with the ignition off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Look for a parasitic draw or installation problem',
      resultBody:
        'Clocks, alarms, control modules, and accessories can use some current while parked, but excessive draw can flatten a healthy battery. A short circuit, poor connection, incorrect battery, or charging fault can produce the same complaint.',
      recommendedAction:
        'Check accessory wiring and measure key-off draw using the motorcycle’s service procedure. Confirm that the replacement battery is the correct type and specification before replacing it again.',
    },
    {
      slug: 'power-loss-while-running',
      label: 'The motorcycle loses electrical power while running',
      shortDescription:
        'Lights or instruments fade, the engine cuts out, or the motorcycle will not restart after a ride.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a charging-system fault',
      resultBody:
        'The motorcycle’s alternator and regulator should support the electrical system and recharge the battery while riding. Power loss while running makes a simple storage discharge much less likely.',
      recommendedAction:
        'Pull over safely and avoid another ride. Arrange transport and have the battery, regulator, stator, wiring, grounds, and charging output checked using specifications for that motorcycle.',
    },
    {
      slug: 'loose-or-corroded-connection',
      label: 'A terminal or battery cable is loose or badly corroded',
      shortDescription:
        'The connection moves, has heavy buildup, becomes hot, or causes intermittent power when disturbed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Restore a secure connection before riding',
      resultBody:
        'A poor connection can restrict charging and starting current or interrupt electrical power. Heat, melted insulation, or recurring corrosion can indicate more than a dirty terminal.',
      recommendedAction:
        'Keep the ignition off and follow the motorcycle manual’s battery disconnection procedure. Clean and secure serviceable connections, but replace damaged hardware or cables and investigate any heat or rapid corrosion.',
    },
    {
      slug: 'damaged-or-overheating-battery',
      label: 'The battery is hot, swollen, cracked, leaking, or smells unusual',
      shortDescription:
        'The case is deformed or damaged, electrolyte is escaping, or the battery heats abnormally during use or charging.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using and charging it',
      resultBody:
        'Physical damage, abnormal heat, or swelling can signal internal failure or improper charging. Lead-acid batteries can release corrosive electrolyte and flammable gas; damaged lithium batteries can present a fire hazard.',
      recommendedAction:
        'Turn the motorcycle and charger off if this can be done without touching a hot or leaking battery. Keep sparks and flames away, ventilate the area, and contact the battery maker or a battery service for safe handling.',
    },
    {
      slug: 'flooded-battery-low-electrolyte',
      label: 'A serviceable flooded battery has low electrolyte',
      shortDescription:
        'The level is below the marked range or the internal plates are exposed on a battery designed to be opened.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep operating it dry',
      resultBody:
        'Exposed lead plates can corrode and suffer permanent damage. This check applies only to conventional serviceable batteries, not sealed AGM or lithium batteries.',
      recommendedAction:
        'Follow the battery manual exactly and use eye protection. Add only the specified fluid when permitted, then charge and test the battery. Do not open a battery labeled sealed or maintenance-free.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Starting becomes unreliable',
      description:
        'The starter may crank slowly, click, or fail to turn the engine. Even if the motorcycle starts after a jump, it may not restart after being shut off.',
      severity: 'caution',
      chainLabel: 'Low charge → weak starting',
    },
    {
      stageLabel: 'IF YOU KEEP JUMP-STARTING IT',
      title: 'The cause remains hidden',
      description:
        'A jump supplies temporary starting power but does not prove the battery has recovered or that the motorcycle is charging it correctly.',
      severity: 'warning',
      chainLabel: 'Jump → temporary recovery',
    },
    {
      stageLabel: 'IF A LEAD-ACID BATTERY STAYS DISCHARGED',
      title: 'Sulfation reduces its ability to recharge',
      description:
        'Lead-sulfate crystals can harden during prolonged discharge, reducing usable capacity. A discharged lead-acid battery is also more vulnerable to freezing in cold conditions.',
      severity: 'warning',
      chainLabel: 'Discharge → sulfation',
    },
    {
      stageLabel: 'IF THE ROOT CAUSE IS NOT FIXED',
      title: 'A replacement battery can fail the same way',
      description:
        'Excessive key-off draw, low charging output, overcharging, or poor connections can drain or damage a new battery as well as an old one.',
      severity: 'warning',
      chainLabel: 'Fault → repeat discharge',
    },
    {
      stageLabel: 'IF DAMAGE OR IMPROPER CHARGING IS PRESENT',
      title: 'Battery hazards can develop',
      description:
        'Overheating and physical damage can lead to electrolyte leakage, flammable gas, fire, or battery failure. Chemistry and charger compatibility matter.',
      severity: 'danger',
      chainLabel: 'Heat or damage → battery hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One dead start after known storage, followed by a full charge and a passing battery test',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Resume use cautiously and monitor it. Use an approved storage charger or disconnection procedure if the motorcycle will sit again.',
    },
    {
      situation: 'The bike is used only for short trips and holds charge after external charging',
      ignoreAnswer: 'Only while changing the charging routine',
      severity: 'caution',
      whatToDo:
        'Use a chemistry-compatible maintainer or provide proper recharge periods. Test the system if the battery continues losing charge.',
    },
    {
      situation: 'The battery goes flat again after a full compatible charge',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Have the battery tested and check charging output, connections, and key-off draw before buying another battery.',
    },
    {
      situation: 'A good or recently replaced battery discharges with the ignition off',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Inspect accessory installation and test for excessive parasitic current or a short circuit.',
    },
    {
      situation: 'A lithium battery is only sluggish on the first cold crank, then recovers normally',
      ignoreAnswer: 'Yes, if its manual identifies this as normal',
      severity: 'info',
      whatToDo:
        'Use the maker’s cold-start procedure and temperature limits. Do not assume a battery that stays weak is merely cold.',
    },
    {
      situation: 'An older battery now needs repeated charging or jump-starting',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Fully charge and test it. Replace it if it cannot retain charge or deliver adequate starting current.',
    },
    {
      situation: 'The motorcycle loses electrical power or stalls while running',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop riding and arrange transport. The charging system and main electrical connections need prompt diagnosis.',
    },
    {
      situation: 'The battery is hot, swollen, cracked, leaking, or producing an unusual odor',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop using and charging it. Keep ignition sources away and obtain battery-specific handling and replacement guidance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Identify the battery chemistry',
      body:
        'Read the battery label and motorcycle manual before connecting a charger. Flooded lead-acid, sealed AGM, and lithium-iron batteries can require different charging, storage, and cold-weather procedures.',
    },
    {
      title: 'Inspect the battery and its connections',
      body:
        'With the ignition off, look for a loose hold-down, damaged case, leaking electrolyte, corrosion, melted insulation, or cables that move at the terminal. Follow the motorcycle manual before disconnecting anything.',
      destinationProblemSlug: 'corroded-battery-terminal',
    },
    {
      title: 'Fully charge it with the correct equipment',
      body:
        'Use a smart charger or maintainer approved for the battery’s chemistry and capacity. Charge in a ventilated area away from sparks and flames, and stop if the case becomes abnormally hot, swells, leaks, or emits an unusual odor.',
    },
    {
      title: 'Test the battery and charging system separately',
      body:
        'Charge the battery before testing it. A load or conductance test can assess starting capacity; charging-output checks can identify regulator, stator, wiring, or connection problems. Use model-specific specifications rather than a universal voltage target.',
      destinationProblemSlug: 'motorcycle-dim-headlight',
    },
    {
      title: 'Check for electrical draw while parked',
      body:
        'If the battery passes testing but loses charge while connected, use the service manual’s key-off current procedure. Disconnect added accessories one circuit at a time only if you understand the wiring and meter setup; otherwise use a motorcycle electrical service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The battery is swollen, cracked, or leaking',
      description:
        'Physical damage or deformation is not a normal sign of discharge. Avoid handling a leaking or unstable battery more than necessary.',
      severity: 'danger',
    },
    {
      title: 'The battery becomes abnormally hot',
      description:
        'Stop charging or using it. Heat can result from excessive charge current, incorrect voltage, internal failure, or a short circuit.',
      severity: 'danger',
    },
    {
      title: 'You notice smoke, hissing, sparks, or a strong unusual odor',
      description:
        'Shut down and move away if it is safe to do so. Keep flames and other ignition sources away from the battery area.',
      severity: 'danger',
    },
    {
      title: 'The engine or electrical system cuts out while riding',
      description:
        'Dimming lights, blank instruments, misfiring, or stalling can indicate that system voltage is no longer being maintained.',
      severity: 'danger',
    },
    {
      title: 'A terminal, cable, or connector is hot or melted',
      description:
        'Do not tighten or disturb an energized hot connection. Damaged cables, terminals, and insulation need repair before normal use.',
      severity: 'danger',
    },
    {
      title: 'The battery or charger is the wrong chemistry',
      description:
        'Do not use a lead-acid repair or desulfation mode on a lithium battery unless the battery maker specifically approves it.',
      severity: 'warning',
    },
    {
      title: 'The battery is frozen or may have frozen',
      description:
        'Do not charge or jump-start it. Follow the battery maker’s instructions for inspection and safe handling.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I keep jump-starting a motorcycle with a dying battery?',
      answer:
        'No. A jump may start the engine, but it does not repair lost battery capacity, restore a complete charge, or fix a charging fault or parasitic draw. Repeated need for a jump calls for testing.',
    },
    {
      question: 'Will riding the motorcycle recharge a dead battery?',
      answer:
        'Not reliably. Charging performance varies by motorcycle, and normal riding may not fully recover a deeply discharged battery. Use a compatible external charger before judging whether the battery can still hold a charge.',
    },
    {
      question: 'How do I tell whether the battery or charging system is bad?',
      answer:
        'Fully charge the battery, test its starting capacity, and then measure motorcycle charging output using the model’s service specifications. If both pass, check connections and key-off current draw.',
    },
    {
      question: 'Can short motorcycle rides cause a battery to keep dying?',
      answer:
        'Yes. Starting can remove more energy than a short ride replaces, particularly when the bike carries added electrical loads. A compatible maintainer may be needed if the riding pattern cannot change.',
    },
    {
      question: 'Does every stored motorcycle need a battery tender?',
      answer:
        'Not necessarily. It depends on battery chemistry, storage conditions, and the motorcycle’s key-off draw. Follow the battery and motorcycle manuals; some lithium batteries use a storage mode or different maintenance schedule.',
    },
    {
      question: 'Does cold weather mean the battery is bad?',
      answer:
        'Not by itself. Cold reduces starting performance, and some lithium-iron batteries may improve after their maker’s approved warming procedure. Persistent weakness, actual voltage loss, or failure after warming still needs diagnosis.',
    },
    {
      question: 'Is an old battery automatically the problem?',
      answer:
        'No. Age increases suspicion when starting performance has declined, but condition matters more than age alone. Test the battery before replacing it, especially if another battery has already failed on the same motorcycle.',
    },
    {
      question: 'Can a new motorcycle battery keep dying?',
      answer:
        'Yes. Possible causes include incomplete initial charging, incorrect fitment, loose terminals, a faulty charging system, a short circuit, or excessive key-off draw. Do not assume another new battery will solve it.',
    },
    {
      question: 'Can I charge a motorcycle battery with a car battery charger?',
      answer:
        'Only if the charger’s instructions and settings are approved for that exact battery chemistry and capacity. Many automotive chargers can supply unsuitable current, and lead-acid recovery modes may damage lithium batteries.',
    },
    {
      question: 'Can I disconnect the motorcycle battery during storage?',
      answer:
        'Some battery makers recommend disconnection to eliminate vehicle draw, but doing so may reset clocks, security systems, or learned settings. Follow the motorcycle manual and consider an approved maintainer instead.',
    },
    {
      question: 'Can I put an old motorcycle battery in the trash?',
      answer:
        'No. Return lead-acid batteries to a battery retailer or household hazardous-waste program. Lithium batteries also require separate recycling or hazardous-waste handling, with terminals protected as directed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Yuasa Battery, Inc.',
      title: '2023 Powersports Battery Applications & Specifications',
      url: 'https://www.yuasabatteries.com/wp-content/uploads/2023/01/2023-Application-Guide-1-1.x89818.pdf',
      sourceType: 'manufacturer',
      notes:
        'Covers powersports battery storage, charging safety, deep discharge, sulfation, freezing risk, charger current, testing, and the possibility that short trips do not provide enough charging time.',
    },
    {
      publisher: 'Yuasa Battery, Inc.',
      title: 'Yuasa Battery FAQ',
      url: 'https://www.yuasabatteries.com/resources/faqs/',
      sourceType: 'manufacturer',
      notes:
        'Identifies charging faults, short circuits, poor terminals, parasitic drains, accessories, sulfation, low electrolyte, and failure to hold charge as battery-problem causes.',
    },
    {
      publisher: 'Yuasa Battery, Inc.',
      title: 'Battery Charging While Riding',
      url: 'https://www.yuasabatteries.com/resources/guides/does-my-motorcycle-battery-charge-while-i-ride/',
      sourceType: 'manufacturer',
      notes:
        'Explains that the alternator and regulator charge the motorcycle battery while riding, but normal riding may not fully restore a deeply discharged battery.',
    },
    {
      publisher: 'Antigravity Batteries',
      title: 'RE-START Powersports User Manual',
      url: 'https://antigravitybatteries.com/downloads/AG-Powersports-RS-Batteries-User-Manual.pdf',
      sourceType: 'manufacturer',
      notes:
        'Product-specific LiFePO4 guidance covering compatible chargers, temperature limits, storage, physical damage, swelling, abnormal heat, incorrect charging, and fire or explosion hazards.',
    },
    {
      publisher: 'Shorai',
      title: 'Battery Charging',
      url: 'https://shoraipower.com/charging',
      sourceType: 'manufacturer',
      notes:
        'Product-specific lithium-iron guidance on key-off draw, storage, cold conditions, charger compatibility, manual charging schedules, and avoiding charging below freezing.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'How Do I Recycle Common Recyclables?',
      url: 'https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables',
      sourceType: 'government',
      notes:
        'Says motorcycle lead-acid batteries should go to a battery retailer or household hazardous-waste program, not household trash or municipal recycling; rechargeable lithium batteries also need separate handling.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Chemistry-compatible smart charger or maintainer',
      description:
        'Select one approved for the battery label, capacity, and storage method. It should not force an incompatible recovery or desulfation cycle.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Digital multimeter',
      description:
        'Useful for resting-voltage, charging-output, and key-off draw checks when used with the motorcycle’s service procedure.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Battery health or load-testing service',
      description:
        'A battery retailer or motorcycle shop can test whether a charged battery still has enough capacity to crank the engine reliably.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Motorcycle service manual and wiring diagram',
      description:
        'Provides model-specific charging specifications, fuse locations, connector layouts, and parasitic-current test procedures.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'corroded-battery-terminal',
      anchorText: 'Could corroded battery terminals be causing it?',
      relationshipType: 'cause',
    },
    {
      slug: 'motorcycle-dim-headlight',
      anchorText: 'Why is my motorcycle headlight dim?',
      relationshipType: 'escalation',
    },
    {
      slug: 'motorcycle-hard-to-start-cold',
      anchorText: 'Why is my motorcycle hard to start when cold?',
      relationshipType: 'related',
    },
    {
      slug: 'blown-motorcycle-fuse',
      anchorText: 'Could a blown motorcycle fuse look like a dead battery?',
      relationshipType: 'related',
    },
  ],
};
