import type { ProblemSeed } from '../types';

export const gasSmellNearTheStove: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'gas-burners',
  slug: 'gas-smell-near-the-stove',
  canonicalPath: '/appliances/stoves-and-ovens/gas-burners/gas-smell-near-the-stove/',
  name: 'Gas Smell From the Oven',
  eyebrow: 'Appliances · Stoves & Ovens · Gas Burners',

  h1: 'Can I Ignore a Gas Smell From My Oven?',
  seoTitle: 'Gas Smell From an Oven: Normal Ignition or a Leak?',
  metaDescription:
    'A brief odor at ignition may be normal. Learn when an oven gas smell means stop using it, leave the home, call the gas utility, or arrange service.',

  aliases:
    ['/appliances/stoves-and-ovens/gas-burners/gas-smell-from-oven/', '/appliances/stoves-and-ovens/gas-burners/oven-smells-like-gas/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'severe',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep using the oven?',
  canIUseItLabel: 'Only if the odor is faint, brief, and limited to ignition',

  shortAnswer:
    'Usually not. A faint odor that appears only as a gas oven ignites and fades promptly can be normal. If it is strong, lingers, returns during cooking, appears while the oven is off, or comes with hissing or illness, treat it as a possible gas leak and leave.',

  whyItMattersHeading: 'The Timing and Type of Odor Matter',
  whyItMatters: [
    'A gas oven ignites fuel when it starts, so a brief combustion odor may occur at ignition. Unburned natural gas or propane has a distinctly unpleasant odor added to help reveal leaks. An odor that continues after ignition can point to delayed ignition, a faulty component, or a supply connection that needs attention.',
    'Leaking fuel can ignite and cause a fire or explosion. Improper combustion can also produce carbon monoxide, which has no useful warning smell. A gas odor and a carbon monoxide hazard are different problems, but either one can require immediate evacuation.',
  ].join('\n\n'),

  redFlagsHeading: 'Leave and Call for Help If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Checked against current CPSC, EPA, and gas-safety guidance plus manufacturer information about oven ignition, abnormal odors, connectors, and service.',
  disclaimer:
    'General gas-appliance triage only. Odors are difficult to identify remotely; if you are unsure whether you smell unburned gas, treat it as a suspected leak and follow your gas supplier’s emergency instructions.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'faint-odor-only-at-ignition',
      label: 'A faint odor appears only when the oven ignites',
      shortDescription:
        'The smell is mild, starts with ignition, fades promptly, and does not return while the oven is heating.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This can be normal oven operation',
      resultBody:
        'Manufacturer guidance says a brief odor can occur when a gas oven starts and combustion begins. It should fade promptly rather than remain in the kitchen.',
      recommendedAction:
        'Continue only if the odor is faint, consistently limited to ignition, and there is no hissing, failed ignition, soot, carbon monoxide alarm, or physical symptom. Follow the guidance for your model.',
    },
    {
      slug: 'new-oven-material-odor',
      label: 'A new oven has a chemical, oily, or hot-material smell',
      shortDescription: 'The oven is new, and the odor does not resemble sulfur, rotten eggs, or skunk spray.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'New materials may be heating for the first time',
      resultBody:
        'New parts, insulation, coatings, or remaining shipping material can produce odor during early use. That is different from the odorant used to reveal leaking fuel.',
      recommendedAction:
        'Confirm that all packaging has been removed and follow the model’s first-use instructions. Stop and treat it as a possible leak if the odor is sulfur-like, strong, or present while the oven is off.',
    },
    {
      slug: 'heated-food-residue-smell',
      label: 'The odor clearly smells like burnt food or grease',
      shortDescription:
        'The smell occurs as old spills heat, with no sulfur-like odor, hissing, ignition trouble, or carbon monoxide alarm.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The oven may need cleaning rather than gas repair',
      resultBody:
        'Food and grease left in the oven can smoke or smell when heated. Blocked vents or an improper oven liner can also interfere with normal operation.',
      recommendedAction:
        'Turn the oven off, let it cool, and clean it as the manual directs. Remove unauthorized liners or foil that block vents. If you are not certain the smell is food residue, treat it as gas.',
    },
    {
      slug: 'odor-lingers-during-preheat',
      label: 'The gas smell lingers through preheating or cooking',
      shortDescription:
        'The odor does not fade after ignition or repeatedly fills the kitchen while the oven runs.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using the oven',
      resultBody:
        'A lingering odor is not the brief startup condition described as normal by manufacturers. Delayed ignition, an igniter problem, or another gas-related fault may be present.',
      recommendedAction:
        'Turn the oven off if the control is immediately accessible, avoid another test cycle, and arrange gas-appliance service. Leave and call from outside if the odor is strong or continues after shutdown.',
    },
    {
      slug: 'gas-smell-when-oven-is-off',
      label: 'Gas is smelled while the oven is off',
      shortDescription:
        'All oven controls appear off, but a sulfur-like or rotten-egg odor remains near the appliance or elsewhere in the home.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a suspected gas leak',
      resultBody:
        'A gas oven should not produce a fuel-gas odor while it is off. The source could be a control, connector, supply line, another burner, or another gas appliance.',
      recommendedAction:
        'Leave immediately without using lights, phones, switches, fans, or other electronics. Call 911 or the gas supplier’s emergency line from outside and do not return until the area is declared safe.',
    },
    {
      slug: 'oven-does-not-ignite',
      label: 'The oven smells like gas but does not ignite or heat',
      shortDescription:
        'The igniter clicks or glows, but the burner does not light normally and the oven stays cool or heats poorly.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not keep attempting ignition',
      resultBody:
        'Gas odor with failed or delayed ignition can mean fuel is being released without normal combustion. Repeated attempts can make the situation more hazardous.',
      recommendedAction:
        'Turn the control off if it is immediately accessible, do not relight or restart the oven, and leave if the smell remains. Contact the gas supplier or an appliance service provider from a safe location.',
    },
    {
      slug: 'odor-after-moving-or-installation',
      label: 'The smell began after installation, cleaning behind the range, or moving it',
      shortDescription:
        'The range was installed, replaced, pulled forward, or pushed back shortly before the odor appeared.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'A gas connection may have been disturbed',
      resultBody:
        'Gas connectors can be damaged by movement, bending, wear, or corrosion. CPSC warns against moving an appliance to inspect its connector.',
      recommendedAction:
        'Do not pull the range out again or inspect the connector yourself. Leave if gas odor is present and call the gas supplier or emergency services from outside. Have the hookup checked before reuse.',
    },
    {
      slug: 'strong-odor-hissing-or-symptoms',
      label: 'The odor is strong, gas is hissing, or someone feels ill',
      shortDescription:
        'There is a powerful sulfur-like odor, a possible escaping-gas sound, a carbon monoxide alarm, headache, dizziness, nausea, weakness, or confusion.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Leave immediately',
      resultBody:
        'Strong odor or hissing can indicate escaping fuel. Illness or a carbon monoxide alarm may indicate a separate combustion emergency that cannot be judged by smell.',
      recommendedAction:
        'Get everyone outside without operating electronics or investigating the source. Call 911 and the gas supplier from outside. Seek urgent medical help for possible carbon monoxide exposure.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The odor may be startup combustion or a warning',
      description:
        'A faint odor limited to ignition can be normal, but strength, duration, appliance behavior, and whether the oven is off change the decision.',
      severity: 'caution',
      chainLabel: 'Identify the pattern',
    },
    {
      stageLabel: 'IF THE ODOR CONTINUES',
      title: 'Fuel may not be igniting normally',
      description:
        'A weak or faulty igniter or another appliance problem may allow gas odor to linger instead of disappearing after normal ignition.',
      severity: 'warning',
      chainLabel: 'Odor persists',
    },
    {
      stageLabel: 'IF GAS IS ESCAPING',
      title: 'An ignition source could start a fire',
      description:
        'Leaking natural gas or propane can ignite. Electrical switches, phones, flames, and other sources of sparks should not be operated in the affected area.',
      severity: 'danger',
      chainLabel: 'Leak meets ignition source',
    },
    {
      stageLabel: 'IF COMBUSTION IS IMPROPER',
      title: 'Carbon monoxide may be produced',
      description:
        'Gas ranges and ovens can produce carbon monoxide when combustion is incomplete. Carbon monoxide is not the substance creating the warning odor and cannot be detected by smell.',
      severity: 'danger',
      chainLabel: 'Combustion problem',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Fire, explosion, or severe poisoning',
      description:
        'An unresolved fuel leak can cause a fire or explosion, while substantial carbon monoxide exposure can cause unconsciousness or death.',
      severity: 'danger',
      chainLabel: 'Life-threatening emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A faint odor occurs only as the oven ignites and fades promptly',
      ignoreAnswer: 'Yes, if it stays brief and faint',
      severity: 'info',
      whatToDo:
        'Follow the owner’s manual and watch for any change in the pattern. Stop using the oven if the odor becomes stronger, lasts longer, or appears at other times.',
    },
    {
      situation: 'A new oven smells chemical or oily rather than sulfur-like',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Remove packaging and follow the manufacturer’s first-use procedure. Do not assume a rotten-egg or skunk-like odor is normal new-oven burn-off.',
    },
    {
      situation: 'The odor is clearly burnt food or grease',
      ignoreAnswer: 'Only until the oven can be cleaned',
      severity: 'caution',
      whatToDo:
        'Turn it off, let it cool, and clean spills as the manual directs. Keep vents clear and remove any liner the manufacturer does not permit.',
    },
    {
      situation: 'Gas odor lingers while the oven preheats or cooks',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the oven and arrange service. If the odor is strong or remains after the control is off, leave and report a suspected leak from outside.',
    },
    {
      situation: 'Gas is smelled while the oven and burners are off',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Leave without operating electronics or searching for the source. Call 911 or the gas supplier’s emergency line from outside.',
    },
    {
      situation: 'The oven does not ignite or heat normally',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not keep restarting it. Turn the control off if immediately accessible, leave if gas odor remains, and have the oven inspected before using it again.',
    },
    {
      situation: 'The range was recently moved or installed',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not move it again to inspect the connector. Leave if gas odor is present and have the gas hookup and appliance checked before reuse.',
    },
    {
      situation: 'There is strong odor, hissing, a CO alarm, or possible poisoning symptoms',
      ignoreAnswer: 'No — leave immediately',
      severity: 'danger',
      whatToDo:
        'Get everyone outside, call emergency services from a safe location, and do not return until responders or the gas supplier say it is safe.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Leave if the odor could be leaking gas',
      body:
        'For a strong, persistent, unexplained, or off-cycle gas odor, do not stay to troubleshoot. Leave without operating lights, phones, switches, fans, garage doors, or other electrical equipment.',
    },
    {
      title: 'Report the odor from outside',
      body:
        'Once you are safely outside, call 911 or your natural-gas utility’s emergency line. Propane users should call their propane supplier or emergency services. Follow their instructions and do not reenter on your own.',
    },
    {
      title: 'Keep a problem oven off',
      body:
        'If the odor was not an active emergency but lingered during operation, stop using the oven and arrange service. Do not repeatedly test the ignition or assume that ventilation has repaired the cause.',
    },
    {
      title: 'Do not move the range or repair gas parts yourself',
      body:
        'Do not pull the appliance away from the wall, open gas components, adjust the regulator, or inspect the flexible connector. Movement can damage a vulnerable connector, and leak diagnosis requires appropriate equipment.',
    },
    {
      title: 'Treat carbon monoxide as a separate hazard',
      body:
        'Maintain working carbon monoxide alarms as recommended for your home, but do not use a silent alarm as proof that a gas odor is harmless. If an alarm sounds or anyone develops possible symptoms, get outside and call for help.',
      destinationProblemSlug: 'co-alarm-beeping',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Strong rotten-egg, sulfur, or skunk-like odor',
      description:
        'A powerful fuel-gas odor should be treated as a suspected leak rather than normal oven ignition.',
      severity: 'danger',
    },
    {
      title: 'Hissing or roaring near the oven or gas line',
      description: 'The sound may indicate escaping gas. Do not approach it or try to locate the exact source.',
      severity: 'danger',
    },
    {
      title: 'Gas odor while every control is off',
      description: 'The appliance should not smell like unburned fuel while it is off.',
      severity: 'danger',
    },
    {
      title: 'The oven fails to ignite or heats poorly',
      description:
        'Gas odor combined with delayed ignition, repeated ignition attempts, or abnormal heating needs service before reuse.',
      severity: 'warning',
    },
    {
      title: 'The odor started after the range was moved',
      description:
        'Movement can stress or damage a gas connector. Do not pull the range out again to investigate.',
      severity: 'danger',
    },
    {
      title: 'A carbon monoxide alarm sounds',
      description:
        'Carbon monoxide cannot be smelled. Leave for fresh air and call emergency services rather than searching for the source.',
      severity: 'danger',
    },
    {
      title: 'Headache, dizziness, nausea, weakness, or confusion',
      description:
        'These can occur with carbon monoxide exposure. Get outside and seek emergency help if a fuel-burning appliance may be involved.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a brief gas-like smell when the oven turns on normal?',
      answer:
        'It can be. Manufacturer guidance allows for a faint odor as a gas oven ignites, but it should fade promptly. A strong, lingering, or recurring fuel odor is not the same condition.',
    },
    {
      question: 'Why does my oven smell like gas when it is off?',
      answer:
        'That is not normal operation. Check only whether nearby controls are visibly in the OFF position without delaying your exit, then leave and report the odor from outside if it remains.',
    },
    {
      question: 'Should I open the windows if I smell gas?',
      answer:
        'Do not delay leaving to ventilate the home, and never operate an electrical fan. For a suspected leak, get outside without using switches or electronics and follow the gas supplier’s instructions.',
    },
    {
      question: 'Can I use the cooktop if only the oven smells?',
      answer:
        'Not until the source is understood. The oven and cooktop may share the appliance’s gas supply and connection, so using another burner could introduce an ignition source.',
    },
    {
      question: 'Is the gas smell carbon monoxide?',
      answer:
        'No. The added odor in natural gas or propane helps reveal fuel, while carbon monoxide is colorless and odorless. A fuel leak and a carbon monoxide problem require different detection but can both be emergencies.',
    },
    {
      question: 'Does a silent carbon monoxide alarm prove there is no gas leak?',
      answer:
        'No. A carbon monoxide alarm detects carbon monoxide, not leaking natural gas or propane. It is not a gas-leak detector and does not make a persistent fuel odor safe.',
    },
    {
      question: 'Can a new oven smell strange without leaking gas?',
      answer:
        'Yes. New parts, insulation, coatings, or shipping material can create chemical or oily odors during early use. A sulfur-like, rotten-egg, or skunk-like odor should not be dismissed as new-oven smell.',
    },
    {
      question: 'Can a dirty oven smell like gas?',
      answer:
        'Heated grease and food residue can create unpleasant smoke or odors, and blocked vents or improper liners may interfere with operation. If you cannot confidently identify the smell as food residue, treat it as possible gas.',
    },
    {
      question: 'What if the gas smell disappeared after I turned the oven off?',
      answer:
        'A faint odor limited to normal ignition may need no repair. If the smell lingered, the oven failed to ignite, or the odor has happened repeatedly, keep the oven off and arrange service even if the room now smells normal.',
    },
    {
      question: 'Should I call the gas company or 911?',
      answer:
        'Call from outside. Your gas supplier’s emergency line is appropriate for a suspected utility-gas leak, while strong odor, hissing, illness, fire, or immediate danger warrants 911. Follow local emergency instructions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Issues Winter Weather Safety Tips to Prevent Fires and Carbon Monoxide Poisoning',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Issues-Winter-Weather-Safety-Tips-to-Prevent-Fires-and-Carbon-Monoxide-Poisoning',
      sourceType: 'government',
      notes:
        'Says to leave immediately if gas is smelled or heard leaking, contact local gas authorities from outside, and avoid operating lights, phones, or other electronics before leaving.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Certain Older Gas Connectors May Be Dangerous',
      url: 'https://www.cpsc.gov/s3fs-public/gas.pdf',
      sourceType: 'government',
      notes:
        'Warns that moving a gas appliance can cause a weakened connector to fail, advises professional connector inspection, and gives emergency actions for a suspected gas leak.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: "Carbon Monoxide's Impact on Indoor Air Quality",
      url: 'https://www.epa.gov/indoor-air-quality-iaq/carbon-monoxides-impact-indoor-air-quality',
      sourceType: 'government',
      notes:
        'Identifies gas stoves and incomplete combustion in gas ranges as CO sources, explains that CO is odorless and toxic, lists health effects, and stresses appliance maintenance.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Gas Range - Gas Odors',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=16702',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes a temporary combustion odor when a gas oven starts from the odor of unburned gas and says unburned gas odor in the home is not normal.',
    },
    {
      publisher: 'Whirlpool',
      title: 'Why Does My Oven Smell Like Gas?',
      url: 'https://www.whirlpool.com/blog/kitchen/why-does-my-oven-smell-like-gas.html?fmt=png-alpha',
      sourceType: 'manufacturer',
      notes:
        'Describes brief ignition odor, new-oven and food-residue odors, lingering odor associated with possible igniter trouble, and emergency action for suspected leaks or gas odor while off.',
    },
    {
      publisher: 'Propane Education & Research Council',
      title: 'What To Do If You Smell Gas',
      url: 'https://propane.com/safety/safety-articles/what-to-do-if-you-smell-gas/',
      sourceType: 'industry',
      notes:
        'Advises propane users to avoid flames and sparks, leave immediately, report the leak from outside, stay out until cleared, and have the system checked before reuse.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Gas utility emergency service',
      description:
        'The utility can respond to a suspected natural-gas leak, make the area safe, and determine whether the supply or appliance connection needs further work.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Qualified gas-appliance service',
      description:
        'Appropriate for diagnosing delayed ignition, faulty igniters, valves, regulators, and other internal oven problems after any active leak concern has been cleared.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Oven owner’s manual',
      description:
        'Provides model-specific information about normal ignition odors, approved liners, vent locations, first-use procedures, cleaning, and service.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Working carbon monoxide alarms',
      description:
        'Add protection against odorless carbon monoxide from fuel-burning equipment. They do not detect natural gas or replace appliance maintenance.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'gas-burner-wont-light',
      anchorText: 'Can I ignore a gas burner that will not light?',
      relationshipType: 'sibling',
    },
    {
      slug: 'gas-stove-keeps-clicking',
      anchorText: 'Can I ignore a gas stove that keeps clicking?',
      relationshipType: 'related',
    },
    {
      slug: 'yellow-flame-on-gas-stove',
      anchorText: 'Can I ignore a yellow flame on my gas stove?',
      relationshipType: 'related',
    },
    {
      slug: 'co-alarm-beeping',
      anchorText: 'Can I ignore a carbon monoxide alarm that is beeping?',
      relationshipType: 'escalation',
    },
  ],
};
