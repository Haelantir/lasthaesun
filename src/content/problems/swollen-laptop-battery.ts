import type { ProblemSeed } from '../types';

/**
 * Technology > Computers > Batteries > Swollen Laptop Battery.
 *
 * Every factual claim below traces to one of the six sources at the
 * bottom of this file. The core distinction is: any credible sign of
 * battery swelling (raised trackpad or keyboard, bulging case, a laptop
 * that rocks on a flat surface, a misaligned screen) means stop using and
 * charging the laptop — this is not a "wait and see" problem. Never
 * press, pry, puncture or force a swollen lithium-ion battery.
 */
export const swollenLaptopBattery: ProblemSeed = {
  systemSlug: 'batteries',
  slug: 'swollen-laptop-battery',
  canonicalPath: '/technology/computers/batteries/swollen-laptop-battery/',
  name: 'Swollen Laptop Battery',
  eyebrow: 'Technology · Computers · Batteries',

  h1: 'Can I Ignore a Swollen Laptop Battery?',
  seoTitle: 'Swollen Laptop Battery: What to Do Right Now | Can I Ignore It',
  metaDescription:
    'A swollen laptop battery should not stay in use. See the warning signs, what not to press or pry, and when heat or odor makes the situation more urgent.',

  status: 'published',
  indexable: true,

  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep using the laptop?',
  canIUseItLabel: 'No, stop using it',

  shortAnswer:
    'No. Visible battery swelling is abnormal, and major laptop manufacturers recommend stopping use and disconnecting AC power until the battery is replaced. Do not press a raised trackpad or case back into place, puncture the battery, or force a swollen battery out of the laptop.',

  whyItMattersHeading: 'Why Does a Swollen Laptop Battery Matter?',
  whyItMatters: [
    'Lithium-ion and lithium-polymer battery cells can expand as gases build up inside them. Age, charge cycles, heat, storage conditions and physical damage can all contribute. The first clue may be a bulging case, a raised trackpad or keyboard, a laptop that rocks on a flat surface, gaps in the chassis, or a screen that no longer closes normally.',
    'Swelling does not mean the battery is about to catch fire. HP and Lenovo both note that swelling itself is not necessarily an immediate safety event. It is still an abnormal battery condition. Dell, HP and Lenovo recommend discontinuing use and arranging replacement because the expanding battery can deform the laptop and because crushing, bending, puncturing or otherwise damaging lithium-ion cells can create a more dangerous situation.',
  ].join('\n\n'),

  redFlagsHeading: 'Move Away From Normal Use Immediately If You Notice:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Swollen laptop batteries, chassis deformation, raised trackpads/keyboards, lithium-ion handling, battery replacement and escalation signs checked against Dell, HP, Lenovo and U.S. CPSC guidance.',
  disclaimer:
    'General laptop battery guidance only. Battery construction and service procedures vary by model. Follow the laptop manufacturer\'s instructions. Do not puncture, bend, compress or pry against a swollen battery. If there is smoke, fire, violent venting or rapid overheating, move away from the device if you can do so safely and follow local emergency guidance.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'trackpad-raised',
      label: 'The trackpad is raised or no longer clicks normally',
      shortDescription: 'The palm-rest area looks lifted or feels different.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check for battery swelling',
      resultBody: 'Dell lists a raised or stiff trackpad as a common sign that an internal battery has expanded beneath the chassis.',
      recommendedAction: 'Shut the laptop down, disconnect AC power and arrange manufacturer or qualified service.',
    },
    {
      slug: 'case-gap-or-bulge',
      label: 'The bottom cover is bulging or a case seam is opening',
      shortDescription: 'The laptop no longer closes evenly around the edges.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using the laptop',
      resultBody: 'Visible bulging or separation of the enclosure is a recognized sign of battery swelling. Continued expansion can put more pressure on the case and internal components.',
      recommendedAction: 'Power the laptop down, unplug the charger and arrange battery replacement.',
    },
    {
      slug: 'laptop-rocks-on-table',
      label: 'The laptop rocks on a flat table',
      shortDescription: 'The base no longer sits evenly even though the feet are intact.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Inspect for swelling before using it again',
      resultBody: 'Dell includes a laptop that wobbles on a flat surface among common signs of a swollen battery.',
      recommendedAction: 'Turn it off and check for visible chassis deformation without pressing on the case.',
    },
    {
      slug: 'keyboard-lifting',
      label: 'The keyboard is lifting or keys feel raised',
      shortDescription: 'The center or edge of the keyboard is being pushed upward.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Internal pressure may be deforming the laptop',
      resultBody: 'A swollen battery can distort nearby components including the keyboard and palm rest.',
      recommendedAction: 'Stop using the laptop and arrange service rather than pressing the keyboard back down.',
    },
    {
      slug: 'screen-wont-close',
      label: 'The screen no longer closes normally',
      shortDescription: 'The lid looks misaligned or the chassis has changed shape.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check the chassis for battery swelling',
      resultBody: 'Dell lists a misaligned display or a screen that will not close completely among possible swelling indicators.',
      recommendedAction: 'Shut down and unplug the laptop, then arrange inspection.',
    },
    {
      slug: 'visible-battery-swollen',
      label: 'I can clearly see that the battery itself is swollen',
      shortDescription: 'An accessible battery pack or pouch is visibly expanded.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep using the battery',
      resultBody: 'Dell says swollen batteries should not be used and should be replaced and disposed of properly.',
      recommendedAction: "Stop using and charging the laptop. Follow the manufacturer's service instructions rather than improvising removal.",
    },
    {
      slug: 'battery-stuck-in-device',
      label: 'The swollen battery is stuck and will not come out',
      shortDescription: 'Expansion has wedged the battery into the laptop.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not pry it out',
      resultBody: 'Dell specifically warns against using tools to pry against a swollen battery because puncturing, bending or crushing it can be dangerous.',
      recommendedAction: 'Leave the battery in place and contact the manufacturer or a qualified repair provider.',
    },
    {
      slug: 'hot-and-swollen',
      label: 'The laptop or battery is unusually hot and swollen',
      shortDescription: 'Swelling is accompanied by abnormal heat.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using and charging it',
      resultBody: 'Lithium-ion batteries can overheat when damaged or defective. Heat together with visible deformation deserves faster attention than swelling alone.',
      recommendedAction: 'Disconnect AC power if it is safe to do so, stop using the laptop and arrange prompt service.',
    },
    {
      slug: 'smell-hissing-or-smoke',
      label: 'I smell something unusual, hear hissing, or see smoke',
      shortDescription: 'The battery problem is accompanied by signs of active failure.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Move away from normal handling',
      resultBody: 'Smoke, unusual odor, hissing or rapid heating is no longer a routine battery-replacement situation.',
      recommendedAction: 'Do not continue handling or charging the laptop. Move away if you can do so safely and follow local emergency guidance if there is smoke or fire.',
    },
    {
      slug: 'old-battery-no-swelling',
      label: 'The battery only has poor runtime, but nothing is swollen',
      shortDescription: 'Battery life is short but the laptop remains flat and undamaged.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Poor battery life is a different problem',
      resultBody: 'Capacity loss by itself does not mean the battery is swollen. A worn battery can often continue to be used until replacement is convenient if the manufacturer does not show a fault or safety warning.',
      recommendedAction: "Check the laptop's battery-health information and plan replacement if runtime no longer meets your needs.",
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The battery expands inside the chassis',
      description: 'Gas generation inside the battery cell can make the pack thicker than it was designed to be.',
      severity: 'warning',
      chainLabel: 'Swelling',
    },
    {
      stageLabel: 'AS IT EXPANDS',
      title: 'The laptop can begin to deform',
      description: 'The battery can push against the trackpad, keyboard, bottom cover or other internal parts.',
      severity: 'warning',
      chainLabel: 'Chassis pressure',
    },
    {
      stageLabel: 'KEEP USING IT',
      title: 'Mechanical pressure can increase',
      description: 'Continued swelling can separate case seams, affect controls and make the battery harder to remove safely.',
      severity: 'warning',
      chainLabel: 'Hardware damage',
    },
    {
      stageLabel: 'IF THE BATTERY IS FORCED OR DAMAGED',
      title: 'The cell can be punctured, bent or crushed',
      description: 'Dell and CPSC warn against crushing, puncturing or applying heavy pressure to lithium-ion batteries because physical damage can lead to internal shorting and overheating.',
      severity: 'danger',
      chainLabel: 'Cell damage',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'A damaged lithium-ion battery can overheat or ignite',
      description: 'CPSC has documented laptop battery recalls for overheating and fire hazards. Swelling alone does not prove that this will happen, but a visibly swollen battery should not remain in service.',
      severity: 'danger',
      chainLabel: 'Fire hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The trackpad, keyboard or case is visibly lifting',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Shut down, disconnect AC power and arrange battery service.',
    },
    {
      situation: 'The laptop rocks because the chassis is bulging',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using it and have the battery inspected.',
    },
    {
      situation: 'The battery itself is visibly swollen',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Do not use or charge it. Arrange replacement.',
    },
    {
      situation: 'The swollen battery is stuck in the laptop',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not pry or force it out. Get qualified service.',
    },
    {
      situation: 'Swelling is accompanied by abnormal heat',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using and charging the laptop and arrange prompt service.',
    },
    {
      situation: 'There is smoke, hissing, unusual odor or rapid heating',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop handling the device and follow local emergency guidance if there is active smoke or fire.',
    },
    {
      situation: 'Battery runtime is poor but there is no swelling or deformation',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Check battery health and plan replacement when needed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Shut the laptop down',
      body: 'Stop normal use once you have a credible sign of battery swelling. Dell and HP both recommend discontinuing use of a laptop with a swollen battery.',
    },
    {
      title: 'Disconnect AC power',
      body: 'Unplug the laptop from its charger. HP specifically recommends disconnecting AC power when battery swelling is present.',
    },
    {
      title: 'Do not press the case back into shape',
      body: 'Do not push down a raised trackpad, keyboard or bottom cover. Pressure on the battery is exactly what you want to avoid.',
    },
    {
      title: 'Do not puncture, bend or pry the battery',
      body: 'Dell warns not to crush, bend, puncture or use tools to pry against a swollen lithium-ion battery. If expansion has trapped the battery in the chassis, leave removal to qualified service.',
    },
    {
      title: 'Arrange battery replacement',
      body: 'Contact the laptop manufacturer, an authorized service provider or a qualified repair shop familiar with your model. The battery should be replaced rather than put back into service.',
    },
    {
      title: 'Dispose of the old battery properly',
      body: 'Do not put a swollen lithium-ion battery back into normal use. Follow the manufacturer and local rules for damaged lithium-ion battery recycling or disposal rather than placing it in ordinary household trash.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The trackpad or keyboard is being pushed upward',
      description: 'Internal swelling is already deforming the laptop.',
      severity: 'warning',
    },
    {
      title: 'The case is separating or bulging',
      description: 'Stop using the laptop and arrange battery replacement.',
      severity: 'warning',
    },
    {
      title: 'The battery is stuck because of swelling',
      description: 'Do not pry, bend or force it out.',
      severity: 'danger',
    },
    {
      title: 'The laptop becomes unusually hot',
      description: 'Heat together with swelling needs prompt attention.',
      severity: 'danger',
    },
    {
      title: 'You hear hissing or notice a strong unusual odor',
      description: 'Stop charging and handling the device normally.',
      severity: 'danger',
    },
    {
      title: 'You see smoke or signs of fire',
      description: 'Move away if safe and follow local emergency guidance.',
      severity: 'danger',
    },
    {
      title: 'The battery has been punctured, crushed or badly bent',
      description: 'Physical battery damage can cause internal shorting and overheating.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a swollen laptop battery dangerous?',
      answer: 'It is abnormal and should not stay in use. Swelling does not mean a fire is inevitable, but manufacturers recommend stopping use because the battery can damage the laptop and becomes more hazardous if punctured, bent or crushed.',
    },
    {
      question: 'Can I keep using the laptop while plugged in?',
      answer: 'No. HP and Dell both recommend discontinuing use when a battery is swollen, and HP specifically says to disconnect the notebook from AC power.',
    },
    {
      question: 'Why is my laptop trackpad lifting up?',
      answer: 'A swollen internal battery can push the trackpad upward from below. Dell lists a raised or stiff trackpad as a common sign of battery swelling.',
    },
    {
      question: 'Why does my laptop wobble on a flat desk?',
      answer: 'If the feet are intact, a bulging bottom cover caused by battery swelling is one possibility. Dell includes rocking on a flat surface among its swelling warning signs.',
    },
    {
      question: 'Can I push the swollen laptop case back down?',
      answer: 'No. Do not press on a swollen battery through the trackpad, keyboard or bottom cover. Dell warns against applying pressure to the battery surface.',
    },
    {
      question: 'Can I remove a swollen laptop battery myself?',
      answer: "Follow the manufacturer's service instructions for your exact model. If the battery is built in, stuck, distorted or requires prying or force, do not attempt removal yourself.",
    },
    {
      question: 'Can I puncture the battery to release the gas?',
      answer: 'No. Never puncture, crush or cut a lithium-ion battery. Dell and CPSC both warn that physical damage can lead to internal shorting and overheating.',
    },
    {
      question: 'Does battery swelling mean the laptop is about to explode?',
      answer: 'No. Visible swelling is not proof that an explosion or fire is imminent. HP and Lenovo note that swelling itself is not necessarily an immediate safety event, but both still recommend replacement or service.',
    },
    {
      question: 'What causes laptop batteries to swell?',
      answer: 'Manufacturers cite factors including battery age, charge cycles, heat, long periods at high charge, storage conditions and physical damage. The exact cause cannot usually be identified from the bulge alone.',
    },
    {
      question: 'Can I throw a swollen laptop battery in the trash?',
      answer: "No. Lithium-ion batteries require appropriate recycling or disposal, and damaged batteries may need special handling. Follow your manufacturer and local waste authority's instructions.",
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Manufacturer battery service',
      description: 'The first choice for a laptop with a built-in, stuck or visibly swollen battery.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Authorized computer repair provider',
      description: 'Appropriate when battery replacement requires opening the laptop or working around a deformed chassis.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Battery-health diagnostic',
      description: 'Useful for an aging battery with poor runtime when there is no physical swelling. It does not make a visibly swollen battery safe to keep using.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Local lithium-ion battery disposal guidance',
      description: 'Check local rules before transporting or disposing of a damaged or swollen battery.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Releases Tips on Notebook Computer Use',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2006/CPSC-Releases-Tips-on-Notebook-Computer-Use',
      sourceType: 'government',
      notes: 'CPSC advises against crushing, puncturing or applying high pressure to computer batteries because this can cause internal shorting and overheating, and recommends manufacturer inspection when battery damage is suspected.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'PC Notebook Computer Batteries Recalled Due to Fire and Burn Hazard',
      url: 'https://www.cpsc.gov/Recalls/2008/pc-notebook-computer-batteries-recalled-due-to-fire-and-burn-hazard',
      sourceType: 'government',
      notes: 'CPSC recall documentation confirms that lithium-ion batteries used in notebook computers can overheat and pose fire and burn hazards when defective. Used only to support the potential consequence of battery failure, not to imply every swollen battery will ignite.',
    },
    {
      publisher: 'Dell',
      title: 'Swollen Battery Information and Guidance',
      url: 'https://www.dell.com/support/kbdoc/en-us/000128491/swollen-battery-information-and-guidance',
      sourceType: 'manufacturer',
      notes: 'Dell lists chassis bulging, case gaps, raised trackpads or keyboards, rocking on a flat surface and display misalignment as swelling signs, and recommends stopping use, disconnecting AC power and arranging replacement.',
    },
    {
      publisher: 'Dell',
      title: 'Handling Swollen Lithium-Ion Batteries',
      url: 'https://www.dell.com/support/manuals/en-us/latitude-e5470-laptop/swollenbattery/handling-swollen-lithium-ion-batteries',
      sourceType: 'manufacturer',
      notes: 'Dell says swollen batteries should not be used and warns against crushing, puncturing, bending, applying pressure or prying against them.',
    },
    {
      publisher: 'HP',
      title: 'HP Notebook PCs - Swelling or Deformation of Notebook Battery',
      url: 'https://support.hp.com/us-en/document/ish_4158581-4158704-16',
      sourceType: 'manufacturer',
      notes: 'HP recommends discontinuing notebook use and disconnecting AC power when battery swelling is present. HP also notes that swelling itself is not necessarily a safety issue but can deform the chassis and affect other components.',
    },
    {
      publisher: 'Lenovo',
      title: 'Battery Q&A',
      url: 'https://support.lenovo.com/us/en/solutions/ht509084-battery-qa',
      sourceType: 'manufacturer',
      notes: 'Lenovo describes visible bulging as abnormal swelling, lists heat, extended high charge, cycling, storage and physical damage among possible contributors, and recommends careful handling and prompt replacement through support or authorized service.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'laptop-trackpad-lifting', anchorText: 'Can I ignore a laptop trackpad that is lifting?', relationshipType: 'cause' },
    { slug: 'laptop-overheating', anchorText: 'Can I ignore a laptop that keeps overheating?', relationshipType: 'related' },
    { slug: 'laptop-battery-draining-fast', anchorText: 'Can I ignore a laptop battery that drains quickly?', relationshipType: 'sibling' },
    { slug: 'laptop-case-bulging', anchorText: 'Can I ignore a laptop case that is bulging?', relationshipType: 'escalation' },
    { slug: 'hot-laptop-charger', anchorText: 'Can I ignore a laptop charger that gets hot?', relationshipType: 'related' },
  ],
};
