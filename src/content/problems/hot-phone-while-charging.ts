import type { ProblemSeed } from '../types';

export const hotPhoneWhileCharging: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'charging',
  slug: 'hot-phone-while-charging',
  canonicalPath: '/technology/phones/charging/hot-phone-while-charging/',
  name: 'Phone Getting Hot',
  eyebrow: 'Technology · Phones · Charging',

  h1: 'Can I Ignore a Phone That Gets Hot?',
  seoTitle: 'Hot Phone While Charging: Normal Warmth vs. Overheating',
  metaDescription:
    'Mild warmth during charging, gaming, or video can be normal. Learn when phone heat means stop using it, cool it down, or arrange repair.',

  aliases: ['/technology/phones/charging/phone-gets-hot/', '/technology/phones/charging/phone-overheating/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Only if it is mildly warm with no warning or damage',

  shortAnswer:
    'Sometimes. Mild warmth during charging or demanding use can be normal, but stop using the phone if it displays a temperature warning, becomes uncomfortably hot, repeatedly overheats, or shows battery damage.',

  whyItMattersHeading: 'When Phone Heat Stops Being Normal',
  whyItMatters: [
    'Charging, gaming, recording video, navigation, data transfer, setup, and software updates can make a phone feel warm. Apple, Google, and Samsung describe this as expected in some conditions, and their phones may slow charging, dim the screen, limit performance, close apps, or shut down as temperatures rise.',
    'Excessive or unexplained heat is different. A damaged battery, charging accessory, port, or internal component can create abnormal heat. Stop treating it as routine warmth if heat comes with swelling, a lifting screen or back, odor, discoloration, leaking, hissing, smoke, or heat that returns while the phone is idle.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Phone If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Scope covered normal phone warmth, thermal warnings, charging conditions, physical damage, lithium-ion warning signs, and fire response using U.S. agency and manufacturer guidance.',
  disclaimer:
    'General smartphone triage only. Follow the safety instructions and recall notices for your exact model. Do not handle a phone that is smoking, hissing, leaking, swollen, or burning.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'mildly-warm-while-charging',
      label: 'The phone is mildly warm while charging',
      shortDescription:
        'Charging works normally, there is no temperature warning, and the phone cools after charging or use ends.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Some charging warmth is normal',
      resultBody:
        'Major phone manufacturers state that phones can become warm during wired or wireless charging. Mild, even warmth without warnings, damage, odor, or charging problems is not by itself a sign of battery failure.',
      recommendedAction:
        'Keep the phone uncovered on a hard surface with ventilation. Use compatible charging equipment and continue to watch for increasing heat or warning messages.',
    },
    {
      slug: 'warm-during-demanding-use',
      label: 'It gets warm during gaming, video recording, navigation, or setup',
      shortDescription: 'Heat appears during a demanding task and fades after the task stops.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The workload can explain the warmth',
      resultBody:
        'Processor-intensive apps, cameras, data transfers, mobile hotspots, weak connections, and system setup can increase power use and heat. This pattern is expected if the phone remains functional and cools afterward.',
      recommendedAction:
        'Reduce screen brightness or pause the demanding task if the warmth is uncomfortable. Let the phone cool before combining heavy use with charging again.',
    },
    {
      slug: 'exposed-to-external-heat',
      label: 'The phone is hot from direct sunlight, a parked car, or trapped bedding',
      shortDescription: 'Heat is coming from the environment or cannot escape around the phone.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Remove it from the hot environment now',
      resultBody:
        'Direct sunlight, a hot vehicle, and enclosed or insulated spaces can push a phone outside its intended operating conditions. Bedding can also trap charging heat against the phone and skin.',
      recommendedAction:
        'Disconnect power if safe, move the phone to a cooler shaded location, uncover it, and let it cool naturally before use. Do not place it in a refrigerator or freezer.',
    },
    {
      slug: 'temperature-warning-or-shutdown',
      label: 'A temperature warning appears or the phone shuts down',
      shortDescription:
        'Charging pauses, the display dims, apps close, connectivity drops, or the phone powers itself off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "Let the phone's thermal protection do its job",
      resultBody:
        'These changes mean the phone has detected excessive internal temperature and is limiting operation to protect itself. Continuing the same activity works against those safeguards.',
      recommendedAction:
        'Stop using it, unplug it if charging, move it away from heat, and allow it to cool. If warnings or heat-related shutdowns keep returning, arrange service.',
    },
    {
      slug: 'hot-while-idle',
      label: 'The phone gets hot while idle or during light use',
      shortDescription:
        'Heat returns without gaming, charging, navigation, recording, updating, or another clear heavy workload.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Unexplained recurring heat needs attention',
      resultBody:
        'Heat at idle can point to a runaway app, poor connectivity, battery drain, charging trouble, or a hardware problem. The lack of a demanding task makes ordinary workload heat a weaker explanation.',
      recommendedAction:
        'After the phone cools, restart it and check battery or app usage. If it heats up again while idle, power it off and contact the manufacturer or an authorized repair provider.',
    },
    {
      slug: 'charger-cable-or-port-hot',
      label: 'Heat is concentrated at the charger, cable, or charging port',
      shortDescription:
        'The connector area is much hotter than the rest of the phone, or the problem happens with one accessory.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using that charging setup',
      resultBody:
        'Localized heat can come from a damaged cable, incompatible charger, moisture, debris, corrosion, a loose connection, or port damage. This is not the same as evenly distributed warmth from charging.',
      recommendedAction:
        'Unplug the charger if safe. Inspect the accessory and port after they cool, and stop using anything damaged, discolored, melted, loose, wet, or unreliable.',
    },
    {
      slug: 'hot-after-impact-or-liquid',
      label: 'The heat started after a drop, crushing, puncture, or liquid exposure',
      shortDescription: 'The phone may have suffered battery or internal damage before it began heating.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat possible internal damage seriously',
      resultBody:
        'Impact and liquid can damage a phone or its lithium-ion battery even when the outside looks mostly intact. Continuing to charge a suspected damaged device can add heat.',
      recommendedAction:
        'Power it off if safe and do not charge it to test it. Contact the manufacturer or an authorized repair provider for inspection and handling instructions.',
    },
    {
      slug: 'swelling-or-case-separation',
      label: 'The screen or back is lifting, or the phone is bulging',
      shortDescription: 'The case no longer sits flat or a gap is opening around the screen or back panel.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Suspect a swollen battery',
      resultBody:
        "A change in shape is a recognized lithium-ion battery warning sign. The pressure can separate the phone's enclosure and indicates that this is not ordinary operating heat.",
      recommendedAction:
        'Stop charging and using the phone. Do not press it closed, bend it, puncture it, or attempt to remove the battery. Ask the manufacturer or a repair provider about safe service and recycling.',
    },
    {
      slug: 'odor-hissing-smoke-or-fire',
      label: 'There is an unusual odor, leaking, hissing, smoke, or fire',
      shortDescription: 'The phone shows signs of active battery failure rather than normal electronic heat.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Move away and get emergency help',
      resultBody:
        'Odor, leaking, odd noises, smoke, and fire are lithium-ion danger signs. A failing battery can release intense heat and flammable material.',
      recommendedAction:
        'Do not handle the phone. Move people away, leave the area, and call 911. If this happens on an aircraft, notify the flight crew immediately.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Charging or processing creates heat',
      description:
        'Normal power conversion and processor activity can make the phone feel warm while it is working.',
      severity: 'info',
      chainLabel: 'Normal operating heat',
    },
    {
      stageLabel: 'IF THE TEMPERATURE RISES',
      title: 'Protective limits may activate',
      description:
        'The phone may reduce performance, dim the display, slow or stop charging, close apps, disable features, or shut down.',
      severity: 'caution',
      chainLabel: 'Thermal controls',
    },
    {
      stageLabel: 'IF HIGH HEAT CONTINUES',
      title: 'Battery life and components can be affected',
      description:
        'Operation in very hot conditions can shorten battery life and interfere with reliable charging or performance.',
      severity: 'warning',
      chainLabel: 'Heat stress',
    },
    {
      stageLabel: 'IF THE CAUSE IS DAMAGE',
      title: 'Abnormal heat may keep returning',
      description:
        'A damaged battery, port, cable, charger, or internal component can continue generating excessive heat after the phone initially cools.',
      severity: 'warning',
      chainLabel: 'Fault escalation',
    },
    {
      stageLabel: 'IF A LITHIUM-ION BATTERY FAILS',
      title: 'Fire and burn hazards are possible',
      description:
        'Battery failure can produce rapidly increasing heat, smoke, fire, leaking material, or an explosion hazard.',
      severity: 'danger',
      chainLabel: 'Fire or burns',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The phone is mildly warm during normal charging and has no warning or damage',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Keep it uncovered on a hard surface and use compatible charging equipment. Watch for increasing heat or interrupted charging.',
    },
    {
      situation: 'It warms during gaming, recording, navigation, setup, or a software update',
      ignoreAnswer: 'Yes, if it cools afterward',
      severity: 'info',
      whatToDo:
        'Pause the task if needed and confirm that the phone returns to its normal temperature when the workload ends.',
    },
    {
      situation: 'It is hot from direct sunlight, a parked car, or being under bedding',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Remove the heat source, uncover the phone, disconnect power if safe, and let it cool naturally in a shaded, ventilated place.',
    },
    {
      situation: 'A temperature warning appears, charging stops, or the phone shuts down',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the phone and allow it to cool. Seek service if the same behavior returns under ordinary conditions.',
    },
    {
      situation: 'It repeatedly gets hot while idle or during light use',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Restart it after cooling and check battery use. Power it off and arrange support if unexplained heat returns.',
    },
    {
      situation: 'The cable, charger, connector, or charging port is unusually hot',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using that charging setup. Inspect for damage, debris, moisture, corrosion, looseness, discoloration, or melting.',
    },
    {
      situation: 'Heat began after impact, crushing, puncture, or liquid exposure',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using and charging the phone. Arrange manufacturer or authorized repair guidance for possible internal damage.',
    },
    {
      situation: 'The phone is swollen, leaking, hissing, smoking, or producing an unusual odor',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not handle or charge it. Move people away and call emergency services for smoke, fire, or active venting.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop the activity and let the phone cool',
      body:
        'Unplug it if charging, stop demanding apps, and move it out of direct sunlight. Set it on a hard, dry, uncovered surface with air around it and let it cool naturally.',
    },
    {
      title: 'Look for the trigger after it cools',
      body:
        'Check whether the heat followed gaming, video recording, navigation, hotspot use, setup, an update, poor signal, or charging. Restart the phone and review battery or app usage if the cause is unclear.',
    },
    {
      title: 'Inspect the charger, cable, and port',
      body:
        'Look for fraying, looseness, debris, corrosion, discoloration, melting, or moisture. Do not insert metal objects or liquids into the port. Test a manufacturer-approved compatible accessory only after the phone has cooled.',
      destinationProblemSlug: 'frayed-charging-cable',
    },
    {
      title: 'Check the phone for swelling or separation',
      body:
        'Look along the edges for a lifting screen, raised back, new gap, or a case that no longer fits. Stop using the phone and arrange safe service rather than pressing it back together.',
      destinationProblemSlug: 'swollen-phone-battery',
    },
    {
      title: 'Match the response to the danger',
      body:
        'Arrange support if idle heat, warnings, or shutdowns keep returning. If the phone hisses, leaks, smokes, or burns, do not handle it; leave the area and call 911. Alert flight crew immediately on an aircraft.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A temperature or cooling warning appears',
      description: 'Stop the workload and let the phone cool instead of repeatedly dismissing the warning.',
      severity: 'warning',
    },
    {
      title: 'It is uncomfortably hot to hold',
      description:
        'Touch is not a precise thermometer, but heat that causes discomfort is a reason to stop prolonged contact and use.',
      severity: 'warning',
    },
    {
      title: 'The screen or back is lifting',
      description:
        'Bulging or case separation can indicate a swollen battery. Do not squeeze the phone closed.',
      severity: 'danger',
    },
    {
      title: 'There is an odor, leak, discoloration, or odd noise',
      description:
        'These are recognized warning signs for lithium-ion batteries and are not normal charging behavior.',
      severity: 'danger',
    },
    {
      title: 'Smoke or flames appear',
      description: 'Do not pick up or carry the phone. Leave the area and call emergency services.',
      severity: 'danger',
    },
    {
      title: 'The port, plug, or cable is melted or burned',
      description:
        'Keep the charging equipment and phone out of service until the damaged parts are replaced or inspected.',
      severity: 'danger',
    },
    {
      title: 'Heat began after physical or liquid damage',
      description:
        'Internal battery damage may not be visible from outside. Stop charging and arrange an inspection.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it normal for a phone to get warm while charging?',
      answer:
        'Yes. Mild warmth can be normal, especially during fast or wireless charging. It should not come with a temperature warning, uncomfortable heat, swelling, odor, damage, or repeated charging shutdowns.',
    },
    {
      question: 'Why does wireless charging make my phone warmer?',
      answer:
        'Wireless charging can produce noticeable warmth. Poor alignment or metal and magnetic objects between the phone and charger can add heat or interfere with charging, so remove them and realign the phone.',
    },
    {
      question: 'Is gaming or recording video while charging bad?',
      answer:
        'It combines a demanding workload with battery charging, so the phone may become warmer and limit performance or charging. Pause one of the activities if the temperature keeps rising.',
    },
    {
      question: 'How hot is too hot for a phone?',
      answer:
        'There is no useful universal touch cutoff for every model. A temperature warning, heat-related shutdown, uncomfortable heat, recurring idle heat, swelling, odor, or damage is a better reason to stop.',
    },
    {
      question: 'Should I remove the phone case when it gets hot?',
      answer:
        'Remove it temporarily if the phone is overheating and the case comes off without force. Use a case designed for the phone, and do not force a case off a swollen device.',
    },
    {
      question: 'Can I put a hot phone in the refrigerator or freezer?',
      answer:
        'No. Rapid temperature changes and moisture can damage a phone. Move it to a cooler shaded place, turn it off if needed, and let it cool naturally.',
    },
    {
      question: 'Why does my phone get hot when I am barely using it?',
      answer:
        'Background apps, poor connectivity, battery drain, charging faults, or hardware trouble may be involved. Restart it after cooling and arrange service if idle heat returns.',
    },
    {
      question: 'Why did my phone pause charging because of temperature?',
      answer:
        'The phone is protecting itself because its internal temperature is outside its charging range. Unplug it if appropriate and wait for it to cool before charging again.',
    },
    {
      question: 'Is it safe to charge a phone overnight?',
      answer:
        "Follow the phone maker's instructions and use intact, compatible equipment on a hard, uncovered surface. Do not charge under a pillow, blanket, mattress, or your body.",
    },
    {
      question: 'What should I do if my phone overheats on an airplane?',
      answer:
        'Notify the flight crew immediately. FAA guidance specifically tells passengers to report a lithium-battery device that is overheating, expanding, smoking, or burning.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Fire Administration',
      title: 'Battery Fire Safety',
      url: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/batteries/',
      sourceType: 'government',
      notes:
        'Advises stopping use of lithium-ion batteries showing too much heat, odor, color change, shape change, leaking, or odd noises, and warns against direct sunlight and hot cars.',
    },
    {
      publisher: 'Federal Aviation Administration',
      title: 'PackSafe - Portable Electronic Devices Containing Batteries',
      url: 'https://www.faa.gov/hazmat/packsafe/portable-electronic-devices-with-batteries',
      sourceType: 'regulation',
      notes:
        'Tells passengers to notify flight crew immediately if a phone or other lithium-battery device is overheating, expanding, smoking, or burning, and explains restrictions for damaged or recalled devices.',
    },
    {
      publisher: 'Apple',
      title: 'If your iPhone or iPad gets too hot or too cold',
      url: 'https://support.apple.com/en-us/118431',
      sourceType: 'manufacturer',
      notes:
        'Describes normal warmth during charging, setup, updates, gaming, camera use, and streaming; lists thermal safeguards and directs users to turn off and cool a device showing a temperature warning.',
    },
    {
      publisher: 'Apple',
      title: 'Important safety information for iPhone',
      url: 'https://support.apple.com/guide/iphone/important-safety-information-iph301fc905/ios',
      sourceType: 'manufacturer',
      notes:
        'Covers suspected damage after drops or liquid, battery service, damaged chargers, charging ventilation, metallic objects on wireless chargers, bedding, and prolonged contact with warm surfaces.',
    },
    {
      publisher: 'Google',
      title: 'Help keep your Pixel phone from feeling too warm or hot',
      url: 'https://support.google.com/pixelphone/answer/3333708?hl=en',
      sourceType: 'manufacturer',
      notes:
        'Lists demanding activities that can cause normal warmth, explains thermal limits and shutdowns, and advises disconnecting power, moving the phone to a cooler place, and not using it until cooled.',
    },
    {
      publisher: 'Samsung',
      title: 'Keep your Galaxy device at its normal operating temperature',
      url: 'https://www.samsung.com/us/support/answer/ANS10002887/',
      sourceType: 'manufacturer',
      notes:
        'Covers charging and processor-related warmth, hot environments, incompatible accessories, cooling warnings, hard charging surfaces, and contacting support when a device remains too warm to touch.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Phone manufacturer temperature and battery diagnostics',
      description:
        'Built-in diagnostics and official support steps can identify thermal warnings, unusual battery drain, and model-specific operating limits.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer-approved compatible charger and cable',
      description:
        'Properly specified charging equipment helps rule out an incompatible or damaged accessory as the source of localized heat.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Authorized phone repair service',
      description:
        'Appropriate for recurring idle heat, repeated thermal shutdowns, port damage, impact damage, or suspected battery swelling.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Local battery and electronics recycling service',
      description:
        'Damaged lithium-ion devices require appropriate handling and should not be placed in ordinary household trash.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'swollen-phone-battery',
      anchorText: 'Can I ignore a swollen phone battery?',
      relationshipType: 'escalation',
    },
    {
      slug: 'phone-screen-lifting',
      anchorText: 'Why is my phone screen lifting from the frame?',
      relationshipType: 'escalation',
    },
    {
      slug: 'frayed-charging-cable',
      anchorText: 'Can I ignore a frayed phone charging cable?',
      relationshipType: 'cause',
    },
    {
      slug: 'cheap-third-party-charger',
      anchorText: 'Can I use a cheap third-party phone charger?',
      relationshipType: 'cause',
    },
    {
      slug: 'phone-not-charging',
      anchorText: 'Why did my phone stop charging?',
      relationshipType: 'follow_up',
    },
  ],
};
