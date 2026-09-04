import type { ProblemSeed } from '../types';

export const laptopChargerBuzzing: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'chargers',
  slug: 'laptop-charger-buzzing',
  canonicalPath: '/technology/computers/chargers/laptop-charger-buzzing/',
  name: 'Faint Buzzing Laptop Charger',
  eyebrow: 'Technology · Computers · Chargers',

  h1: 'Can I Ignore a Laptop Charger That Makes a Faint Buzzing Noise?',
  seoTitle: 'Faint Laptop Charger Buzz: Normal Coil Whine or Warning Sign?',
  metaDescription:
    'A faint, steady laptop-charger buzz may be normal switching noise. Learn when to keep using it, test the outlet, contact support, or unplug it.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the charger?',
  canIUseItLabel: 'Yes, if the buzz stays faint and nothing else is wrong',

  shortAnswer:
    'Usually, a faint, steady buzz can wait if the correct charger is charging normally, stays within its usual warmth, and has no damage or odor. Test a known-good outlet and check the guidance for your exact charger; stop using it if the sound becomes loud, crackly, or comes with heat, damage, unstable charging, or sparks.',

  whyItMattersHeading: 'A Faint Buzz Is Not a Universal Fault Code',
  whyItMatters: [
    'Laptop adapters are switching power supplies, and some can emit faint high-frequency noise during normal power conversion. HP identifies this as normal behavior for the HP notebook adapters covered by its guidance. The sound may also vary as charging demand changes.',
    'Other manufacturers take a more conservative position. Dell’s current guidance treats buzzing from Dell adapters as a possible electrical fault, while its troubleshooting instructions direct users to test another outlet and contact support if the noise stays with the adapter. The sound’s volume, stability, source, and accompanying symptoms matter more than the word “buzz” alone.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Charger If:',

  lastReviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Faint adapter noise, outlet checks, damage, heat, charging instability, recall escalation, and model-specific guidance checked against HP, Dell, Apple, and CPSC materials.',
  disclaimer:
    'General triage for external laptop power adapters. Follow the safety instructions for your exact laptop and charger; if the sound comes from the outlet or laptop, diagnose that component separately.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'faint-steady-buzz',
      label: 'The buzz is faint, steady, and only noticeable nearby',
      shortDescription:
        'The correct charger works normally and has no unusual heat, odor, damage, discoloration, or charging interruptions.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be normal switching noise',
      resultBody:
        'Some switching power adapters produce a quiet high-frequency sound without a charging or safety fault. A stable pattern with no other symptoms is the least concerning case.',
      recommendedAction:
        'Keep the adapter uncovered on a hard surface, note its normal sound, and check the manufacturer’s guidance for your exact charger.',
    },
    {
      slug: 'outlet-specific-buzz',
      label: 'The charger buzzes only on one outlet or power strip',
      shortDescription:
        'The noise stops or changes when the charger is connected directly to a different known-good wall outlet.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Stop using the suspect power source',
      resultBody:
        'The outlet, power strip, UPS, or electrical conditions on that circuit may be affecting the adapter. This is different from a charger that sounds the same everywhere.',
      recommendedAction:
        'Use the known-good outlet instead. Stop using a power strip or outlet that is loose, noisy, discolored, or warm and have the electrical connection checked.',
    },
    {
      slug: 'new-or-louder-buzz',
      label: 'The sound is new, louder, or changing',
      shortDescription:
        'A previously quiet charger now buzzes audibly, or the volume and tone are becoming less consistent.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Treat the change as a developing problem',
      resultBody:
        'A new or worsening sound is less reassuring than a faint pattern that has always been present. It may reflect a change inside the adapter or at one of its connections.',
      recommendedAction:
        'Stop routine use until you have tested a known-good outlet and contacted the manufacturer or replaced the charger with a properly specified unit.',
    },
    {
      slug: 'crackling-or-popping',
      label: 'The charger crackles, snaps, or makes sharp popping sounds',
      shortDescription: 'The sound is irregular and electrical rather than a quiet, continuous whine.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is not the faint-buzz scenario',
      resultBody:
        'Apple lists popping from an adapter or AC cable among signs of damage. Sharp, irregular sounds can indicate arcing or a failing internal connection.',
      recommendedAction:
        'Unplug the charger if it is safe to do so and keep it out of service. Do not open the power brick; replace it or arrange manufacturer service.',
    },
    {
      slug: 'buzz-with-abnormal-heat',
      label: 'The buzzing charger is unusually hot or shuts itself off',
      shortDescription:
        'Heat is greater than the charger’s normal warmth, charging cuts out, or the adapter repeatedly stops working until it cools.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Heat changes the verdict',
      resultBody:
        'A charger that cannot maintain normal operation may be overheating or failing. Covering the brick or placing it on bedding can also trap heat.',
      recommendedAction:
        'Disconnect it, move it away from combustible material, and let it cool in an open location. Replace or service it if the behavior occurs with normal ventilation.',
    },
    {
      slug: 'buzz-with-burning-signs',
      label: 'There is a burning odor, smoke, melting, or dark discoloration',
      shortDescription:
        'The adapter, cable, plug, or connector shows clear signs of abnormal heat or electrical damage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using it immediately',
      resultBody:
        'These signs indicate overheating or electrical damage, not harmless coil whine. Defective laptop adapters have been recalled for overheating, melting, burning, and fire hazards.',
      recommendedAction:
        'Disconnect power only if you can do so safely. Keep the charger unplugged and replace it before charging the laptop again.',
    },
    {
      slug: 'buzz-with-physical-damage',
      label: 'The cable, plug, connector, or adapter housing is damaged',
      shortDescription:
        'Insulation is split, wire is exposed, a prong is loose, the connector is bent, or the power brick is cracked or separating.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Replace the damaged charging hardware',
      resultBody:
        'Damaged insulation and electrical connections can create shock or fire hazards even if the laptop still charges.',
      recommendedAction:
        'Stop using the damaged part. Do not tape exposed wiring or force a loose connector; obtain a properly specified replacement.',
    },
    {
      slug: 'buzz-with-unstable-charging',
      label: 'Charging flickers, disconnects, or works only when the cable moves',
      shortDescription:
        'The charging icon or adapter light changes unexpectedly, the laptop reports the wrong adapter, or power cuts in and out.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The adapter is not operating normally',
      resultBody:
        'Normal charging does not flicker when a cable is held still. The fault may be in the cable, connector, charger, charging port, or power source.',
      recommendedAction:
        'Stop flexing or repositioning the cable to make it work. Test only with undamaged compatible equipment and arrange replacement or service.',
    },
    {
      slug: 'sparks-away-from-wall-blades',
      label: 'Sparks come from the brick, cable, or laptop connector',
      shortDescription:
        'Sparking occurs somewhere other than a brief flash at the wall-plug blades during insertion.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Disconnect the charger',
      resultBody:
        'Apple distinguishes an occasional plug-in spark at the wall blades from sparks elsewhere on the adapter. Sparking from the brick, cable, or device connector requires service.',
      recommendedAction:
        'Cut power or unplug the charger only if it is safe. Do not reconnect it until the damaged equipment has been replaced or evaluated.',
    },
    {
      slug: 'recalled-adapter',
      label: 'The model or serial number is covered by a recall',
      shortDescription:
        'CPSC or the manufacturer instructs owners to stop using the specific adapter and obtain a replacement.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Follow the recall remedy',
      resultBody:
        'A charger can be recalled even if it still appears to work. The official remedy for a recalled adapter overrides an otherwise faint and steady sound.',
      recommendedAction:
        'Stop using the recalled adapter and follow the manufacturer’s verified replacement or disposal instructions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Switching components may produce an audible vibration',
      description:
        'A functioning power adapter can emit a faint high-frequency sound while converting household AC power into the DC power used by the laptop.',
      severity: 'info',
      chainLabel: 'Faint conversion noise',
    },
    {
      stageLabel: 'IF EVERYTHING STAYS STABLE',
      title: 'The sound may remain only a nuisance',
      description:
        'When the noise stays faint and charging, temperature, cables, and connectors remain normal, it may not affect use.',
      severity: 'info',
      chainLabel: 'Stable operation',
    },
    {
      stageLabel: 'IF THE PATTERN CHANGES',
      title: 'The adapter needs closer attention',
      description:
        'Increasing volume, a different tone, charging interruptions, or dependence on one outlet makes normal switching noise a less convincing explanation.',
      severity: 'caution',
      chainLabel: 'Changing behavior',
    },
    {
      stageLabel: 'IF DAMAGE OR OVERHEATING APPEARS',
      title: 'Electrical insulation or connections may be compromised',
      description:
        'Cracked housing, exposed wire, abnormal heat, odor, discoloration, or irregular electrical sounds call for the charger to be taken out of service.',
      severity: 'warning',
      chainLabel: 'Hardware fault',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'A defective adapter can cause shock, burns, or fire',
      description:
        'CPSC recalls document specific laptop adapters that overheated, sparked, melted, burned, or caught fire. A faint buzz alone does not prove this is happening, but the associated warning signs must not be ignored.',
      severity: 'danger',
      chainLabel: 'Electrical hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The buzz has always been faint, charging is stable, and there are no other symptoms',
      ignoreAnswer: 'Yes, with limits',
      severity: 'info',
      whatToDo:
        'Use the charger with open ventilation and confirm that its manufacturer does not classify the sound as a fault.',
    },
    {
      situation: 'The sound varies slightly as the battery charges or the laptop works harder',
      ignoreAnswer: 'Yes, if it stays faint',
      severity: 'info',
      whatToDo: 'Watch for abnormal heat, charging interruptions, odor, or a continuing increase in volume.',
    },
    {
      situation: 'A previously quiet charger has started buzzing',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Inspect it while unplugged, test a known-good wall outlet, and contact support if the noise remains with the adapter.',
    },
    {
      situation: 'The charger buzzes only through one power strip, UPS, or wall outlet',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Stop using that power source for the charger. Use a known-good direct wall outlet and investigate any loose, warm, discolored, or noisy receptacle.',
    },
    {
      situation: 'The buzz persists on different outlets and the maker gives no clear guidance',
      ignoreAnswer: 'Only while arranging support',
      severity: 'caution',
      whatToDo:
        'Contact the laptop or charger manufacturer with the model number and sound pattern, especially if the charger is new or under warranty.',
    },
    {
      situation: 'The sound becomes loud, irregular, crackly, or sharp',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Unplug the charger safely and replace or service it rather than waiting for charging to fail.',
    },
    {
      situation: 'The charger is damaged, unusually hot, discolored, or smells burned',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Keep it out of service and replace the affected adapter or cable before charging again.',
    },
    {
      situation: 'The adapter sparks away from the wall-plug blades or is under recall',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using it immediately and follow manufacturer service or recall instructions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm where the sound is coming from',
      body:
        'Disconnect the charger from the laptop and outlet, then listen separately during a careful retest only if there are no red flags. Determine whether the sound follows the adapter, the laptop, the cable connection, or the outlet.',
    },
    {
      title: 'Try a known-good wall outlet',
      body:
        'If the charger is undamaged and only faintly noisy, connect it directly to a different known-good outlet without the current power strip, surge protector, or UPS. Stop if the outlet itself buzzes, warms, or fits the plug loosely.',
    },
    {
      title: 'Inspect the charger while it is unplugged',
      body:
        'Check the full cable length, strain reliefs, detachable AC lead, connector, prongs, and adapter housing for cuts, exposed wire, bent parts, looseness, cracking, discoloration, or melting.',
      destinationProblemSlug: 'damaged-laptop-charger-cable',
    },
    {
      title: 'Verify the charger and its safety instructions',
      body:
        'Match the model, output, connector, and charging standard to the laptop manufacturer’s requirements. Check the manufacturer’s support page and CPSC recall records using the model and serial information on the label.',
      destinationProblemSlug: 'cheap-third-party-charger',
    },
    {
      title: 'Replace or service a suspicious adapter',
      body:
        'Use a manufacturer-specified or properly certified compatible replacement. Do not open a sealed power brick or keep using a cable that must be bent or held in place to charge.',
      destinationProblemSlug: 'laptop-not-charging',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The buzz becomes loud or rapidly changes',
      description:
        'A new, worsening, or irregular noise deserves a different response from a faint sound that has always been present.',
      severity: 'warning',
    },
    {
      title: 'You hear crackling, snapping, or sharp popping',
      description:
        'These sounds can indicate an abnormal electrical connection rather than steady switching noise.',
      severity: 'danger',
    },
    {
      title: 'The charger becomes unusually hot or repeatedly shuts down',
      description:
        'Disconnect it and keep it uncovered. Recurring heat-related interruptions require replacement or service.',
      severity: 'warning',
    },
    {
      title: 'There is smoke, a burning odor, melting, or discoloration',
      description: 'These are signs of abnormal heat or electrical damage.',
      severity: 'danger',
    },
    {
      title: 'The cable, prongs, connector, or housing is damaged',
      description:
        'Stop using frayed insulation, exposed wire, loose prongs, bent connectors, or a cracked adapter body.',
      severity: 'danger',
    },
    {
      title: 'Charging cuts in and out',
      description:
        'Flickering power, an unstable indicator light, or charging that depends on cable position points to a connection or hardware fault.',
      severity: 'warning',
    },
    {
      title: 'The outlet buzzes, warms, sparks, or grips the plug loosely',
      description:
        'Stop using that receptacle. The problem may be in the building wiring or wall connection rather than the charger.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a faint buzzing sound from a laptop charger normal?',
      answer:
        'It can be. HP documents faint high-frequency noise as normal for the HP notebook adapters covered by its guidance. Other manufacturers may classify adapter buzzing more cautiously, so check the instructions for your exact charger.',
    },
    {
      question: 'What causes the faint sound?',
      answer:
        'A laptop charger is a switching power supply. Electrical and magnetic components can vibrate slightly during power conversion, producing a faint buzz, whine, or hiss.',
    },
    {
      question: 'Why does the pitch change while the laptop is charging?',
      answer:
        'The adapter’s electrical load changes with battery charging and laptop activity. Small sound changes can occur, but the noise should not become loud, crackly, or accompanied by unstable charging.',
    },
    {
      question: 'Does normal charging prove that the charger is safe?',
      answer:
        'No. It is reassuring, but damaged or recalled electrical products can continue working. Check for cable damage, abnormal heat, odor, discoloration, unstable output, and model-specific warnings.',
    },
    {
      question: 'Should I test the charger in another outlet?',
      answer:
        'Yes, if the charger has no dangerous symptoms. Dell recommends trying a direct connection to another wall outlet when troubleshooting adapter noise. Do not continue testing a charger that is damaged, overheating, smoking, or sparking.',
    },
    {
      question: 'Will a surge protector stop coil whine?',
      answer:
        'Not reliably. A power strip, UPS, outlet, or circuit can change the behavior, but replacing one accessory is not a universal cure. Test a known-good direct wall outlet first.',
    },
    {
      question: 'Can I open the charger and fix the buzzing?',
      answer:
        'No. A sealed power adapter contains parts connected to household voltage and can retain electrical energy. Replace it or use manufacturer service rather than opening it.',
    },
    {
      question: 'Should I request a replacement if the charger is new?',
      answer:
        'Contact the seller or manufacturer if the sound is new, clearly audible during ordinary use, or inconsistent with the maker’s guidance. A warranty exchange is reasonable even when the only problem is persistent objectionable noise.',
    },
    {
      question: 'Is a third-party USB-C charger more likely to buzz?',
      answer:
        'The brand alone does not answer that. Use a charger that supports the laptop’s required charging standard and power level and carries legitimate safety certification. Stop using an adapter with unclear labeling or questionable certification.',
    },
    {
      question: 'What if the noise is coming from the laptop instead?',
      answer:
        'That is a separate diagnosis. Disconnect AC power and compare the sound carefully. Noise from inside the laptop may come from its power circuitry, fan, speakers, or another component.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'HP',
      title: 'Notebook PC シリーズ - ACアダプタで発する小さなノイズ音や表面温度について',
      url: 'https://support.hp.com/jp-ja/document/c01787024',
      sourceType: 'manufacturer',
      notes:
        'For the covered HP notebook adapters, HP says faint high-frequency sounds can result from switching-power operation and are not a fault. It also advises using the adapter on a hard surface with ventilation.',
    },
    {
      publisher: 'Dell Technologies',
      title: 'How To Troubleshoot Noise Coming from the AC Adapter',
      url: 'https://www.dell.com/support/kbdoc/en-us/000130860/troubleshooting-ac-adapter-noise',
      sourceType: 'manufacturer',
      notes:
        'Dell directs users to isolate the source, try a different direct wall outlet, reseat a detachable cable, and contact support if the noise remains with the adapter.',
    },
    {
      publisher: 'Dell Technologies',
      title: 'How to Identify AC Adapter Damage on Dell Systems',
      url: 'https://www.dell.com/support/kbdoc/en-us/000125337/identify-ac-adapter-damage-on-dell-systems',
      sourceType: 'manufacturer',
      notes:
        'Dell lists buzzing as a possible electrical fault for Dell adapters and advises discontinuing use and contacting support. It also covers frayed cables, loose connectors, overheating, and unstable charging.',
    },
    {
      publisher: 'Apple',
      title: 'Using Apple power adapters, cables, and duckheads with Apple products',
      url: 'https://support.apple.com/en-us/102193',
      sourceType: 'manufacturer',
      notes:
        'Apple identifies popping, casing damage, discoloration, damaged prongs, failed power delivery, and sparks away from the plug blades as reasons to stop using an adapter or seek service.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Home Electrical Safety Checklist',
      url: 'https://www.cpsc.gov/safety-education/safety-guides/electronics-and-electrical-home/home-electrical-safety-checklist',
      sourceType: 'government',
      notes:
        'CPSC advises replacing damaged cords because exposed live wires can create shock and fire hazards, and warns that a warm cord, plug, or outlet may indicate overloading and a fire hazard.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Dynabook Americas Recalls 15.5 Million Toshiba Laptop AC Adapters Due to Burn and Fire Hazards',
      url: 'https://www.cpsc.gov/Recalls/2024/Dynabook-Americas-Recalls-15-5-Million-Toshiba-Laptop-AC-Adapters-Due-to-Burn-and-Fire-Hazards',
      sourceType: 'government',
      notes:
        'This specific recall documents laptop adapters that could overheat and spark, with reports of melting, burning, fire, and injuries. It supports recall and defective-adapter escalation, not a claim that ordinary faint noise is dangerous.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Manufacturer support and warranty service',
      description:
        'Useful for checking whether the sound is expected for the exact adapter model and obtaining an approved replacement when required.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Properly specified replacement power adapter',
      description:
        'A manufacturer-approved or legitimately safety-certified compatible adapter avoids uncertain output, connector, and charging-protocol compatibility.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'CPSC recall search',
      description:
        'Use the charger brand, model, serial number, and date code to check whether an official stop-use or replacement notice applies.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Electrical inspection for a noisy outlet',
      description:
        'An electrician can inspect a receptacle that buzzes, becomes warm, shows discoloration, sparks, or no longer grips plugs securely.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'hot-laptop-charger',
      anchorText: 'Can I ignore a laptop charger that gets hot?',
      relationshipType: 'escalation',
    },
    {
      slug: 'damaged-laptop-charger-cable',
      anchorText: 'Can I use a laptop charger with a damaged cable?',
      relationshipType: 'escalation',
    },
    {
      slug: 'laptop-charger-sparking',
      anchorText: 'Can I ignore sparks from my laptop charger?',
      relationshipType: 'escalation',
    },
    {
      slug: 'laptop-not-charging',
      anchorText: 'Can I ignore a laptop that is not charging?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'cheap-third-party-charger',
      anchorText: 'Can I safely use a cheap third-party laptop charger?',
      relationshipType: 'cause',
    },
  ],
};
