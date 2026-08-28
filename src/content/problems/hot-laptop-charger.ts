import type { ProblemSeed } from '../types';

/**
 * Technology > Computers > Chargers > Hot Laptop Charger.
 *
 * Every factual claim below traces to one of the seven sources at the
 * bottom of this file. The core distinction is: normal operating warmth
 * on a ventilated, undamaged adapter is expected, while heat from being
 * covered or enclosed, repeated thermal shutdowns, a damaged cable or
 * housing, discoloration, odor, sparking away from the wall-plug blades,
 * or a hot wall plug/outlet are not.
 */
export const hotLaptopCharger: ProblemSeed = {
  systemSlug: 'chargers',
  slug: 'hot-laptop-charger',
  canonicalPath: '/technology/computers/chargers/hot-laptop-charger/',
  name: 'Hot Laptop Charger',
  eyebrow: 'Technology · Computers · Chargers',

  h1: 'Can I Ignore a Hot Laptop Charger?',
  seoTitle: 'Hot Laptop Charger: When Heat Is Normal and When to Stop | Can I Ignore It',
  metaDescription:
    'Laptop power adapters can get warm in normal use. See when charger heat is expected and when damage, odor, shutdowns or sparking mean stop using it.',

  status: 'published',
  indexable: true,

  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the charger?',
  canIUseItLabel: 'Usually, if it is only warm',

  shortAnswer:
    'Laptop power adapters can become quite warm during normal charging, especially under heavier load. Keep the adapter uncovered on a hard, well-ventilated surface. Stop using it if the heat becomes abnormal for that charger or comes with damage, discoloration, burning odor, unreliable charging, repeated shutdowns or sparking away from the wall-plug blades.',

  whyItMattersHeading: 'Why Does a Laptop Charger Get Hot?',
  whyItMatters: [
    'A laptop power adapter converts household AC power into the lower-voltage DC power the computer uses. That conversion is not perfectly efficient, so some energy leaves as heat. Apple says its laptop power adapters can become warm during normal use. Dell likewise states that AC adapters become hot during operation and need airflow around them.',
    'Heat becomes more concerning when the adapter cannot shed it or when another fault appears. A charger buried in bedding, carpeting, papers or a bag can retain heat. Damaged cables, exposed wiring, discoloration, melting, an adapter that repeatedly shuts itself off, or heat at the wall outlet call for a different response. CPSC recalls also show that defective laptop adapters can overheat, melt, spark and create burn or fire hazards.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Charger If You Notice:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Laptop AC-adapter operating heat, ventilation, cable/housing damage, charging interruptions, plug heating and sparking escalation checked against Apple, Dell, HP and U.S. CPSC guidance.',
  disclaimer:
    'General laptop charging guidance only. Adapter temperatures and power requirements vary by manufacturer and model. Do not use a universal touch temperature as a diagnostic cutoff. Follow the laptop manufacturer\'s power-adapter specifications and safety instructions.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'warm-during-normal-charging',
      label: 'The charger gets warm while the laptop is charging',
      shortDescription: 'Charging works normally and the adapter has no smell, damage or discoloration.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Some heat is normal',
      resultBody: 'Power adapters produce heat while converting AC power for the laptop. Apple and Dell both state that noticeable warmth can occur during normal operation.',
      recommendedAction: 'Keep the adapter uncovered on a hard, well-ventilated surface and use it normally if everything else remains stable.',
    },
    {
      slug: 'hotter-under-heavy-use',
      label: 'It gets hotter while gaming, rendering or fast charging',
      shortDescription: 'The laptop is drawing more power than during light use.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Higher load can mean more adapter heat',
      resultBody: 'A laptop can draw more power during demanding work or battery charging. More load can make the adapter warmer as long as it continues operating normally and has adequate ventilation.',
      recommendedAction: 'Give the adapter open airflow and check that you are using the correct wattage specified for the laptop.',
    },
    {
      slug: 'on-bed-or-carpet',
      label: 'The charger is hot while sitting on a bed, sofa or thick carpet',
      shortDescription: 'The adapter is resting on a soft or insulating surface.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Move it to a hard open surface',
      resultBody: 'Apple and Dell both warn against using power adapters where bedding, carpet or other material traps heat around them.',
      recommendedAction: 'Uncover the adapter, move it to a hard well-ventilated surface and let it cool before judging whether the heat remains unusual.',
    },
    {
      slug: 'covered-or-inside-bag',
      label: 'The charger was covered or running inside a bag',
      shortDescription: 'Air could not circulate around the adapter.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not run it enclosed',
      resultBody: 'Trapped heat can raise the adapter temperature even when the charger itself is functioning normally.',
      recommendedAction: 'Disconnect it if needed, let it cool and use it only with open ventilation.',
    },
    {
      slug: 'too-hot-and-shuts-off',
      label: 'The charger gets very hot and stops charging',
      shortDescription: 'Charging cuts out until the adapter cools.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep forcing it to run',
      resultBody: 'Apple notes that its adapters may shut themselves off when they become too warm. Repeated heat-related shutdowns should not become the normal way you charge.',
      recommendedAction: 'Disconnect the charger, let it cool in a ventilated location and check for obstruction, wrong wattage or adapter damage. Arrange service or replacement if it keeps happening.',
    },
    {
      slug: 'damaged-cable',
      label: 'The cable is frayed, split, loose or exposing wire',
      shortDescription: 'The insulation or strain relief is visibly damaged.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Replace the damaged charger or cable',
      resultBody: 'Damaged electrical cords can expose live conductors and create shock or fire hazards. Apple and Dell both advise against continued use of damaged charging cables or adapters.',
      recommendedAction: 'Stop using the damaged part and replace it with a manufacturer-approved compatible cable or adapter.',
    },
    {
      slug: 'housing-cracked-or-open',
      label: 'The charger housing is cracked, separated or deformed',
      shortDescription: 'The adapter brick itself has physical damage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Keep the adapter out of service',
      resultBody: 'A damaged adapter enclosure can expose or disturb high-voltage components inside the power supply.',
      recommendedAction: 'Unplug it and replace the adapter. Do not open or repair the power brick yourself.',
    },
    {
      slug: 'discoloration-or-melting',
      label: 'The charger is brown, melted or visibly heat-damaged',
      shortDescription: 'The housing, connector or cable has changed shape or color.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using it now',
      resultBody: 'Discoloration or melting shows that the adapter or connection has experienced abnormal heat. CPSC has recalled laptop adapters that overheated, melted and created burn or fire hazards.',
      recommendedAction: 'Disconnect it if you can do so safely and replace the adapter before charging the laptop again.',
    },
    {
      slug: 'burning-smell',
      label: 'I smell burning plastic or an electrical odor',
      shortDescription: 'The smell comes from the charger, cable or connector.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Unplug it and stop using it',
      resultBody: 'A new burning or overheated-plastic smell is not ordinary operating warmth.',
      recommendedAction: 'Disconnect power if it is safe to do so. Do not reconnect the charger until the damaged part has been replaced or inspected.',
    },
    {
      slug: 'sparks-at-adapter-or-cable',
      label: 'I see sparks from the charger body, cable or laptop connector',
      shortDescription: 'The spark is not just a brief flash at the wall-plug blades during insertion.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using the charger',
      resultBody: 'Apple says a brief spark at the wall-plug blades can occur when plugging an appliance into a live outlet. Sparking elsewhere, damage or discoloration needs service.',
      recommendedAction: 'Unplug the charger if safe and replace or inspect the adapter and cable before reuse.',
    },
    {
      slug: 'wall-plug-or-outlet-hot',
      label: 'The wall plug or outlet is getting hot too',
      shortDescription: 'Heat is concentrated where the charger plugs into the wall.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check the outlet and plug connection',
      resultBody: "Heat at the wall connection can come from a poor plug fit, overloaded cord or receptacle problem rather than the adapter's normal conversion heat.",
      recommendedAction: 'Stop using that outlet with the charger and have the hot plug or receptacle checked.',
    },
    {
      slug: 'wrong-or-low-wattage-adapter',
      label: 'I am using a lower-wattage or unknown third-party charger',
      shortDescription: 'The adapter is not the one specified for the laptop.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Verify the charger specification',
      resultBody: 'Dell and HP warn that an underpowered or incompatible adapter can cause slow charging, reduced performance or charging problems. Safety certification and compatibility also matter.',
      recommendedAction: "Check the laptop manufacturer's required wattage and supported charger type. Replace an unsuitable adapter with a properly specified one.",
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The adapter releases heat',
      description: 'Some energy is lost as heat while the charger converts household power for the laptop.',
      severity: 'info',
      chainLabel: 'Normal heat',
    },
    {
      stageLabel: 'UNDER HEAVIER LOAD',
      title: 'The adapter can become warmer',
      description: 'Charging a battery or powering a busy laptop can increase the amount of power moving through the adapter.',
      severity: 'info',
      chainLabel: 'More load',
    },
    {
      stageLabel: 'IF HEAT CANNOT ESCAPE',
      title: 'The adapter temperature can climb further',
      description: 'Bedding, thick carpet, paper, blankets or a closed bag can trap heat around the power brick.',
      severity: 'caution',
      chainLabel: 'Poor ventilation',
    },
    {
      stageLabel: 'IF SOMETHING IS WRONG',
      title: 'Charging may become unstable',
      description: 'An overheated, damaged or incompatible adapter may stop charging, shut down, show damage or behave differently from its normal pattern.',
      severity: 'warning',
      chainLabel: 'Abnormal operation',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'A defective power adapter can create burn or fire hazards',
      description: 'CPSC has recalled laptop adapters after reports of overheating, melting, burning and fire. Normal operating warmth by itself does not mean a charger is failing.',
      severity: 'danger',
      chainLabel: 'Electrical hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The adapter is warm during charging and works normally',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Keep it uncovered on a hard, ventilated surface.',
    },
    {
      situation: 'It becomes warmer during heavy laptop use but remains stable',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Check ventilation and confirm the adapter has the correct wattage.',
    },
    {
      situation: 'It is hot because it was under bedding, carpet or inside a bag',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Move it to an open hard surface and let it cool.',
    },
    {
      situation: 'It repeatedly gets very hot and stops charging',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Let it cool and arrange service or replacement if the behavior returns.',
    },
    {
      situation: 'The cable or adapter housing is damaged',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using the damaged charger and replace the affected part.',
    },
    {
      situation: 'There is discoloration, melting or a burning smell',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Disconnect it safely and keep it out of service.',
    },
    {
      situation: 'Sparks come from the adapter body, cable or laptop connector',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using the charger and replace or inspect the damaged equipment.',
    },
    {
      situation: 'The plug or wall outlet becomes hot',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using that receptacle and check the outlet or plug connection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Give the adapter room to lose heat',
      body: 'Put the charger on a hard, open surface with air around it. Apple and Dell advise against covering power adapters or using them on bedding, thick carpet, pillows or inside enclosed spaces.',
    },
    {
      title: 'Check whether charging is otherwise normal',
      body: 'Look for repeated charging dropouts, adapter warning messages, an indicator light that turns off unexpectedly or a laptop that reports the wrong adapter wattage. Stable charging with ordinary warmth is a much less concerning pattern.',
    },
    {
      title: 'Inspect the cable and housing',
      body: 'Look for frayed insulation, exposed wire, bent or damaged connectors, cracks, separation, discoloration or melting. Do not keep using a physically damaged charger.',
    },
    {
      title: 'Verify the correct charger rating',
      body: "Check the laptop manufacturer's required wattage and charging standard. Apple recommends an equal-or-higher supported USB-C adapter for Mac laptops, while Dell and HP advise using adapters specified for their systems.",
    },
    {
      title: 'Let an overheated adapter cool',
      body: 'If the charger becomes excessively hot or shuts itself off, disconnect it from the laptop and let it cool in a ventilated place before handling it. If the behavior returns under normal conditions, replace or service it.',
    },
    {
      title: 'Replace suspicious power hardware',
      body: 'Do not open a sealed AC adapter to repair it. Replace a charger that is damaged, repeatedly overheating, melting, producing an unusual odor or sparking from anywhere other than the normal wall-plug contact point.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The adapter repeatedly shuts down from heat',
      description: 'The charger is no longer maintaining normal operation.',
      severity: 'warning',
    },
    {
      title: 'The cable is frayed or exposed',
      description: 'Damaged insulation can create shock and fire hazards.',
      severity: 'danger',
    },
    {
      title: 'The adapter housing is cracked or opening',
      description: 'Keep the power brick out of service.',
      severity: 'danger',
    },
    {
      title: 'You see melting or dark discoloration',
      description: 'Visible heat damage means the charger should be replaced.',
      severity: 'danger',
    },
    {
      title: 'You smell burning plastic or an electrical odor',
      description: 'Disconnect the charger if it is safe to do so.',
      severity: 'danger',
    },
    {
      title: 'Sparks come from the cable, adapter body or laptop connector',
      description: 'Stop using the charger.',
      severity: 'danger',
    },
    {
      title: 'The wall plug or outlet is hot',
      description: 'The problem may be at the receptacle or plug connection.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it normal for a laptop charger to get hot?',
      answer: 'Yes. Power adapters can become quite warm during normal use. Apple and Dell both say this can be normal, provided the adapter has good ventilation and shows no damage or abnormal behavior.',
    },
    {
      question: 'How hot is too hot for a laptop charger?',
      answer: 'There is no useful universal touch-temperature cutoff for every charger. Adapter designs and power levels differ. Repeated shutdowns, pain from brief handling, melting, discoloration, odor or charging failure are better reasons to stop using it.',
    },
    {
      question: 'Why does my charger get hotter when the laptop is under heavy load?',
      answer: 'The adapter may be supplying more power while the laptop is working hard or charging its battery. More power conversion can mean more heat.',
    },
    {
      question: 'Can I use a laptop charger on my bed?',
      answer: 'Do not leave a power adapter operating on bedding, pillows or other surfaces that trap heat. Apple specifically advises using its adapters in a well-ventilated area and avoiding bedding and thick carpet.',
    },
    {
      question: 'Why does my charger stop charging when it gets hot?',
      answer: 'Some adapters have thermal protection. Apple says its Mac power adapters may turn themselves off when they become too warm. Let it cool and investigate if this happens repeatedly.',
    },
    {
      question: 'Is a brief spark when I plug in the charger dangerous?',
      answer: 'A small spark at the wall-plug blades can occur when an appliance is connected to a live outlet. Apple says sparking somewhere else on the adapter or damage and discoloration need attention.',
    },
    {
      question: 'Can I keep using a charger with a frayed cable?',
      answer: 'No. Damaged electrical cords can expose live conductors and create shock or fire hazards. Replace the damaged cable or adapter.',
    },
    {
      question: 'Why is the charger hot near the wall plug?',
      answer: 'Heat concentrated at the plug or receptacle can come from a poor electrical connection. Stop using that outlet if the plug or outlet itself becomes hot.',
    },
    {
      question: 'Can an underpowered laptop charger overheat?',
      answer: 'An underpowered or incompatible charger can run under heavier demand and may charge slowly or fail to power the laptop properly. Use the wattage and charging standard specified by the laptop manufacturer.',
    },
    {
      question: 'Do I need to replace a charger just because it feels warm?',
      answer: 'No. Warmth alone is common during normal operation. Replace or service it when heat is paired with damage, repeated thermal shutdowns, unstable charging, burning odor, melting or abnormal sparking.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Manufacturer-approved replacement charger',
      description: "Use a charger that meets the laptop maker's required wattage, voltage and charging standard.",
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Replacement charging cable',
      description: 'Replace a cable with frayed insulation, exposed wire, damaged connectors or failing strain relief.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Laptop power-adapter specification guide',
      description: "Use the laptop manufacturer's documentation to confirm the correct wattage and connector or USB-C Power Delivery requirements.",
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer or authorized repair service',
      description: 'Appropriate when a charger repeatedly overheats, shuts down, sparks, smells burned or shows physical heat damage.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Dynabook Americas Recalls 15.5 Million Toshiba Laptop AC Adapters Due to Burn and Fire Hazards',
      url: 'https://www.cpsc.gov/Recalls/2024/Dynabook-Americas-Recalls-15-5-Million-Toshiba-Laptop-AC-Adapters-Due-to-Burn-and-Fire-Hazards',
      sourceType: 'government',
      notes: 'CPSC documented recalled laptop adapters that could overheat and spark, with reports of overheating, fire, melting, burning and minor burn injuries. Used only to support the possible consequences of a defective adapter, not to imply normal charger warmth is dangerous.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Guide to Home Wiring Hazards',
      url: 'https://www.cpsc.gov/s3fs-public/518.pdf',
      sourceType: 'government',
      notes: 'CPSC advises discontinuing use of appliances with damaged cords because exposed conductors can create shock or fire hazards.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Warns Consumers About Faulty Extension Cords, Power Strips and Surge Protectors',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/1999/CPSC-Warns-Consumers-About-Faulty-Extension-Cords-Power-Strips-and-Surge-Protectors',
      sourceType: 'government',
      notes: 'CPSC advises stopping use of electrical cords that become hot and warns that trapped heat, overloading and damaged cords can contribute to fire hazards. Used for cord and wall-connection escalation, not as a temperature rule for laptop adapter bricks.',
    },
    {
      publisher: 'Apple',
      title: "If Your USB-C Power Adapter Isn't Charging Your Mac Laptop",
      url: 'https://support.apple.com/en-ca/102464',
      sourceType: 'manufacturer',
      notes: 'Apple says USB-C laptop adapters can become warm during normal use, recommends good ventilation, warns against bedding and thick carpet, explains thermal shutdown behavior and distinguishes a normal plug-in spark from concerning sparking or damage.',
    },
    {
      publisher: 'Apple',
      title: 'Important Safety Information for Your Mac',
      url: 'https://support.apple.com/guide/macbook-air/important-safety-information-apd9b8f7aa11/mac',
      sourceType: 'manufacturer',
      notes: 'Apple states that Mac power adapters may become very warm during normal use, recommends ventilation and warns that damaged adapters or cables can cause fire, electric shock, injury or property damage.',
    },
    {
      publisher: 'Dell',
      title: 'Electrical Safety for Dell Product Repair: ESD Protection and Precautions',
      url: 'https://www.dell.com/support/kbdoc/en-us/000137973/safety-precautions-when-working-with-electrical-equipment',
      sourceType: 'manufacturer',
      notes: 'Dell states that laptop AC adapters become hot during normal operation, recommends ventilation and warns against using adapters with damaged cables, exposed wiring or excessive wear.',
    },
    {
      publisher: 'Dell',
      title: 'How to Identify AC Adapter Damage on Dell Systems',
      url: 'https://www.dell.com/support/kbdoc/en-uk/000125337/identify-ac-adapter-damage-on-dell-systems',
      sourceType: 'manufacturer',
      notes: 'Dell recommends correct adapter wattage, good airflow, inspection for cable and pin damage and replacement when damage is found. Dell also warns against opening or repairing an AC adapter.',
    },
    {
      publisher: 'HP',
      title: 'HP Notebook PCs - Using and Troubleshooting the AC Adapter',
      url: 'https://support.hp.com/us-en/document/ish_2025983-1502949-16',
      sourceType: 'manufacturer',
      notes: 'HP explains that an AC adapter can become warm to the touch and that using an adapter with inadequate wattage can cause slow charging, no charging or reduced system performance.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'warm-electrical-outlet', anchorText: 'Can I ignore a warm electrical outlet?', relationshipType: 'escalation' },
    { slug: 'damaged-laptop-charger-cable', anchorText: 'Can I ignore a damaged laptop charging cable?', relationshipType: 'escalation' },
    { slug: 'laptop-not-charging', anchorText: 'Can I ignore a laptop that will not charge?', relationshipType: 'sibling' },
    { slug: 'laptop-charger-sparking', anchorText: 'Can I ignore sparks from my laptop charger?', relationshipType: 'escalation' },
    { slug: 'laptop-overheating', anchorText: 'Can I ignore a laptop that keeps overheating?', relationshipType: 'related' },
  ],
};
