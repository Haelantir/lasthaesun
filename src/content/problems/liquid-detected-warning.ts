import type { ProblemSeed } from '../types';

export const liquidDetectedWarning: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'charging',
  slug: 'liquid-detected-warning',
  canonicalPath: '/technology/phones/charging/liquid-detected-warning/',
  name: 'Liquid Detected Warning',
  eyebrow: 'Technology · Phones · Charging',

  h1: 'Can I Ignore a Liquid Detected Warning on My Phone?',
  seoTitle: 'Liquid Detected in Your Phone’s Charging Port: What to Do',
  metaDescription:
    'Disconnect a wet charging cable, let the port and plug dry, and use wireless charging only with a dry phone. Get service if the warning persists.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the phone?',
  canIUseItLabel: 'Usually, with the wired port disconnected',

  shortAnswer:
    'No. Disconnect the cable and do not override the warning for ordinary charging. Let the phone’s port and both ends of the cable dry completely before reconnecting them.',

  whyItMattersHeading: 'Why a Wet Charging Port Matters',
  whyItMatters: [
    'The warning is a protective feature, not proof that the phone is ruined. Moisture may be in the phone’s port, on the cable connector or, on some models, mixed with debris. Apple warns that charging through wet connector pins can cause corrosion, permanent damage and connection failure. Samsung also identifies corrosion and device damage as reasons its phones stop wired charging.',
    'Risk and drying instructions vary by model. Google tells Pixel users to disconnect accessories, keep objects out of the port and let a wet port dry at room temperature. Wireless charging may be an option on supported phones, but only when the phone’s exterior and charging surface are dry.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using and Charging the Phone If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Phone liquid alerts, wet-port charging, drying, wireless charging, corrosion, persistent warnings and escalation signs checked against Apple, Samsung, Google and U.S. CPSC guidance.',
  disclaimer:
    'General smartphone triage only. Drying, cleaning and water-resistance instructions vary by model, so follow the manufacturer’s guidance for your exact phone.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'known-water-exposure',
      label: 'The warning appeared after rain, a splash or a spill',
      shortDescription: 'The phone or charging connector was recently exposed to liquid.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Disconnect the cable now',
      resultBody:
        'The alert has a plausible cause, and reconnecting the cable can energize wet contacts. The phone may look normal while moisture remains around the connector pins.',
      recommendedAction:
        'Unplug the cable, dry the phone’s exterior and leave the port facing down in a dry area with airflow. Do not reconnect until the port and cable are dry and your phone permits wired use.',
    },
    {
      slug: 'warning-cleared-after-drying',
      label: 'The warning cleared after the phone and cable dried',
      shortDescription:
        'The alert is gone, the connector looks dry and there are no heat, damage or charging problems.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Normal charging can resume',
      resultBody:
        'A cleared warning after complete drying is consistent with the protection system doing its job. There is no need to repair a phone that now charges normally and shows no damage.',
      recommendedAction:
        'Reconnect a clean, dry and compatible cable. Stop again if the warning returns, the connection becomes hot or charging is unreliable.',
    },
    {
      slug: 'wireless-charging-available',
      label: 'The phone supports wireless charging',
      shortDescription: 'The wired port is unavailable, but the phone’s back and wireless charger are dry.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Work around the port while it dries',
      resultBody:
        'Apple and Samsung allow wireless charging in this situation on supported models when the outside of the phone is dry. This avoids placing a powered connector in the wet port.',
      recommendedAction:
        'Dry the phone thoroughly, remove moisture from the case and use a compatible wireless charger. Leave the wired port disconnected until the warning clears.',
    },
    {
      slug: 'one-cable-triggers-warning',
      label: 'The alert appears with only one cable or accessory',
      shortDescription: 'Other dry, compatible accessories work after the port has been confirmed dry.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Suspect the cable or accessory',
      resultBody:
        'Moisture or damage can be on the cable connector rather than inside the phone. Apple says an alert tied repeatedly to one accessory may indicate that the accessory is damaged.',
      recommendedAction:
        'Stop using the suspect cable. Let it dry separately and inspect it for corrosion, discoloration, bent contacts or damaged insulation before deciding whether to replace it.',
    },
    {
      slug: 'warning-persists-when-dry',
      label: 'The warning stays on when everything appears dry',
      shortDescription:
        'The alert returns with more than one clean, compatible cable and there was no recent liquid exposure.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The port needs further checking',
      resultBody:
        'Debris, corrosion, connector damage or a detection fault may be keeping the warning active. Repeatedly reconnecting cables does not identify or fix the cause.',
      recommendedAction:
        'Follow the troubleshooting instructions for your exact model. Arrange manufacturer support or authorized repair if the warning keeps returning.',
    },
    {
      slug: 'visible-debris',
      label: 'You can see lint or debris in the port',
      shortDescription: 'The connector appears dry, but foreign material is visible around the contacts.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not dig into the port',
      resultBody:
        'Debris can interfere with the connector and may hold moisture against the contacts. Metal tools, cotton swabs and paper can bend pins or leave more material behind.',
      recommendedAction:
        'Disconnect power and follow your manufacturer’s debris-removal method. Google advises keeping objects out of the port and gently tapping the phone with the port facing down.',
    },
    {
      slug: 'non-water-liquid',
      label: 'The port was exposed to salt water, soda, coffee or another liquid',
      shortDescription:
        'The liquid can leave salt, sugar, oil or other residue after the visible moisture evaporates.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Drying alone may leave residue',
      resultBody:
        'Residue can keep the contacts contaminated and promote corrosion or connection problems. Cleanup instructions depend on whether the exact phone is designed to resist water.',
      recommendedAction:
        'Follow the liquid-exposure instructions for your model. Some water-resistant devices have fresh-water rinsing instructions; non-water-resistant phones may need to be turned off and inspected. Do not improvise.',
    },
    {
      slug: 'port-hot-or-damaged',
      label: 'The port is hot, burned, melted or corroded',
      shortDescription: 'There is abnormal heat, discoloration, deformation or visible contact damage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using the port',
      resultBody:
        'This is no longer a routine drying issue. Google directs users with burned, melted or corroded USB-C ports to seek repair, and abnormal heat can indicate a damaged connection.',
      recommendedAction:
        'Stop wired charging and disconnect power if it is safe to do so. Do not scrape or straighten the contacts. Arrange authorized inspection before using the port again.',
    },
    {
      slug: 'submerged-or-internally-wet',
      label: 'The phone was submerged or liquid may have entered the case',
      shortDescription: 'Exposure was more serious than a few drops around the charging port.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat it as possible internal damage',
      resultBody:
        'A port warning does not show how far liquid traveled. CPSC notes that a wet phone may appear to work while circuitry corrodes and creates a later safety hazard.',
      recommendedAction:
        'Disconnect all cables and follow the exact model’s liquid-exposure instructions. If the phone lacks suitable water resistance, behaves abnormally or becomes hot, stop using it and arrange inspection.',
    },
    {
      slug: 'iphone-emergency-override',
      label: 'An iPhone offers Emergency Override',
      shortDescription:
        'Wired power is essential for an actual emergency and no safer charging option is available.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Use the override only as a last resort',
      resultBody:
        'Apple provides the override for emergencies, but it does not make wet charging harmless. Connector pins can still corrode or suffer permanent damage.',
      recommendedAction:
        'Prefer a dry wireless charger or another phone. Use Emergency Override only when maintaining communication is more important than the risk to the connector, then disconnect and dry the device afterward.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Wired charging and port accessories are blocked',
      description:
        'The phone limits the connection to keep power away from moisture or contamination detected around the port or cable.',
      severity: 'info',
      chainLabel: 'Protection activates',
    },
    {
      stageLabel: 'IF YOU KEEP RECONNECTING',
      title: 'Wet contacts can remain energized',
      description:
        'Repeated connection or an emergency override can put current through a connector that has not dried.',
      severity: 'caution',
      chainLabel: 'Moisture meets powered contacts',
    },
    {
      stageLabel: 'IF RESIDUE REMAINS',
      title: 'The connection may become unreliable',
      description:
        'Salt, sugar, dirt or other residue can interfere with the contacts and cause the warning, charging failures or accessory problems to return.',
      severity: 'warning',
      chainLabel: 'Contamination remains',
    },
    {
      stageLabel: 'IF CORROSION DEVELOPS',
      title: 'The port or cable can be permanently damaged',
      description:
        'Corroded connector pins may stop charging or transferring data normally and can turn a drying problem into a hardware repair.',
      severity: 'warning',
      chainLabel: 'Contacts deteriorate',
    },
    {
      stageLabel: 'IF LIQUID REACHED INTERNAL PARTS',
      title: 'A larger device or battery problem may emerge',
      description:
        'Internal liquid damage can cause abnormal heat, shutdowns, swelling or other unsafe behavior even if the phone initially appears to work.',
      severity: 'danger',
      chainLabel: 'Internal damage',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A cable is connected and the liquid warning is visible',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Disconnect the cable and leave it out until the phone, port and connector are dry.',
    },
    {
      situation: 'The port or cable connector is visibly wet',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Dry both separately at room temperature with airflow. Do not test the connection while moisture remains.',
    },
    {
      situation: 'The alert has cleared and everything is clean, cool and dry',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Resume charging with a compatible cable and stop if the alert or abnormal heat returns.',
    },
    {
      situation: 'You want to keep using the phone on battery power',
      ignoreAnswer: 'Only if your model allows it',
      severity: 'caution',
      whatToDo:
        'Keep the port disconnected and follow model-specific guidance. Some manufacturers instruct users to turn off a phone when the port or cable is wet.',
    },
    {
      situation: 'You have a compatible wireless charger and the phone is dry outside',
      ignoreAnswer: 'Yes, without using the port',
      severity: 'info',
      whatToDo:
        'Dry the phone and case completely before placing them on the charger. Keep the wired port unused.',
    },
    {
      situation: 'Only one cable causes the warning',
      ignoreAnswer: 'Only until the cable is checked',
      severity: 'caution',
      whatToDo: 'Stop using that cable and inspect or replace it. Do not assume the phone is at fault.',
    },
    {
      situation: 'The warning keeps returning with dry, compatible cables',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop repeated testing and contact the manufacturer or an authorized repair provider.',
    },
    {
      situation: 'An iPhone offers Emergency Override',
      ignoreAnswer: 'Only for a true emergency',
      severity: 'warning',
      whatToDo:
        'Prefer wireless charging or another communication device. The override still carries a risk of connector damage.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Disconnect the wired connection',
      body:
        'Remove the charging cable and any wired headphones or accessories. If the cable is unusually warm, follow your manufacturer’s instructions and disconnect the power adapter safely before handling the phone end.',
    },
    {
      title: 'Dry the phone without forcing the process',
      body:
        'Wipe the exterior with a soft, lint-free cloth. Hold the connector downward and gently tap the phone against your hand, then leave it in a dry area with airflow. Do not use heat, compressed air, rice or objects inside the port.',
    },
    {
      title: 'Check the cable and charger too',
      body:
        'Moisture may be on the plug rather than in the phone. Let the connector dry separately and stop using any cable with corrosion, bent contacts, discoloration, damaged insulation or abnormal heat.',
      destinationProblemSlug: 'frayed-charging-cable',
    },
    {
      title: 'Use wireless charging only when the exterior is dry',
      body:
        'If the phone supports it, a compatible wireless charger can avoid the wet port. Remove moisture from the phone, case and charging pad before use.',
    },
    {
      title: 'Arrange service when the warning will not clear',
      body:
        'Persistent alerts, unreliable charging, corrosion, heat or visible port damage need manufacturer troubleshooting or hardware inspection rather than more reconnecting.',
      destinationProblemSlug: 'phone-not-charging',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The phone or connector is too hot to touch',
      description:
        'Stop using and charging it. Use another device to contact the manufacturer or repair provider.',
      severity: 'danger',
    },
    {
      title: 'You see smoke, sparks or melted plastic',
      description:
        'Disconnect power only if you can do so safely. Move away and call emergency services if there is fire or continuing smoke.',
      severity: 'danger',
    },
    {
      title: 'The charging port looks burned or corroded',
      description: 'Do not scrape, bend or clean the contacts with a tool. The port needs inspection.',
      severity: 'warning',
    },
    {
      title: 'The phone is swelling or the screen is lifting',
      description:
        'This can indicate a battery problem rather than isolated port moisture. Do not press the phone back together.',
      severity: 'danger',
    },
    {
      title: 'The phone restarts, shuts down or behaves abnormally after getting wet',
      description:
        'Liquid may have reached internal components. Disconnect accessories and follow manufacturer service guidance.',
      severity: 'warning',
    },
    {
      title: 'You feel a shock or tingling while charging',
      description:
        'Stop touching the phone and disconnect power if it is safe. The charger, cable, outlet or device may have an electrical fault.',
      severity: 'danger',
    },
    {
      title: 'Liquid reached the charger or wall outlet',
      description:
        'Do not handle wet electrical equipment with wet hands. Keep the area unused until it is dry and safe.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does the warning mean my phone is permanently damaged?',
      answer:
        'Not necessarily. It often means the protection system detected moisture or contamination and stopped wired charging before damage occurred. Persistent alerts, corrosion or abnormal behavior are different.',
    },
    {
      question: 'Can I put the phone in rice?',
      answer:
        'No. Apple warns that rice particles can enter and damage the connector. Use ordinary airflow at room temperature instead.',
    },
    {
      question: 'Can I use a hair dryer or compressed air?',
      answer:
        'No. External heat and compressed air can damage the phone or push material farther into the port.',
    },
    {
      question: 'How long does a charging port take to dry?',
      answer:
        'There is no universal drying time. Apple says complete drying can take up to a day, while other manufacturers provide different model-specific thresholds. Wait for the phone to confirm that the port is usable.',
    },
    {
      question: 'Can I charge the phone wirelessly?',
      answer:
        'Usually, if the model supports wireless charging and the phone’s back, case and charging pad are completely dry. Wireless charging does not make a wet exterior safe.',
    },
    {
      question: 'What if the phone was never near water?',
      answer:
        'Check the cable connector and port for debris, damage or corrosion. If the warning returns with several clean, dry and compatible cables, contact the manufacturer.',
    },
    {
      question: 'Can I clean the port with a cotton swab or paper towel?',
      answer:
        'No. These can bend contacts or leave fibers behind. Follow the cleaning method provided for your exact phone.',
    },
    {
      question: 'Should I use Emergency Override on an iPhone?',
      answer:
        'Only for an actual emergency when no safer power or communication option is available. Apple still warns that wet charging can corrode the connector and cause permanent damage.',
    },
    {
      question: 'Does a water-resistance rating mean I can charge the phone while wet?',
      answer:
        'No. Water resistance does not make a wet charging port safe, and resistance can decrease with wear, impact or repair.',
    },
    {
      question: 'What should I do after salt water, soda or coffee gets into the port?',
      answer:
        'Keep the phone disconnected and check its model-specific liquid-cleanup instructions. Some water-resistant models call for a fresh-water rinse, while non-water-resistant phones may require shutdown and service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Cell Phone Batteries: CPSC, CTIA Working Together to Keep Consumers Safe',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2005/Cell-Phone-Batteries-CPSC-CTIA-Working-Together-to-Keep-Consumers-Safe',
      sourceType: 'government',
      notes:
        'CPSC advises keeping phones and batteries dry, noting that circuitry may slowly corrode and pose a safety hazard even when a wet phone appears to operate normally.',
    },
    {
      publisher: 'Apple',
      title: 'If you see a liquid-detection alert on your iPhone',
      url: 'https://support.apple.com/en-us/102643',
      sourceType: 'manufacturer',
      notes:
        'Apple explains its liquid alerts, wet-pin corrosion and permanent-damage risk, drying steps, prohibited drying methods, wireless charging and the iPhone emergency override.',
    },
    {
      publisher: 'Samsung',
      title: "Moisture in water-resistant Samsung phone or tablet's charging port",
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10004905/',
      sourceType: 'manufacturer',
      notes:
        'Samsung says moisture detection blocks charging to prevent corrosion and advises against wet charging, inserting objects or handling charging equipment with wet hands.',
    },
    {
      publisher: 'Google',
      title: 'Fix "Unplug charger" or "Liquid or debris" message',
      url: 'https://support.google.com/pixelphone/answer/9280079?hl=en',
      sourceType: 'manufacturer',
      notes:
        'Google tells Pixel users to unplug accessories, dry wet ports at room temperature, keep objects out and seek support for persistent alerts or burned, melted or corroded ports.',
    },
    {
      publisher: 'Google',
      title: 'Safety & regulatory guide for Pixel 10, Pixel 10 Pro & Pixel 10 Pro XL',
      url: 'https://support.google.com/pixelphone/answer/16275254?hl=en',
      sourceType: 'manufacturer',
      notes:
        'Google warns that charging these Pixel models when moisture is present can cause fire, electric shock, injury or property and device damage.',
    },
    {
      publisher: 'Samsung',
      title: 'Protect your Samsung Galaxy device after water exposure',
      url: 'https://www.samsung.com/us/support/answer/ANS10013257/',
      sourceType: 'manufacturer',
      notes:
        'Samsung distinguishes cleanup for water-resistant and non-water-resistant Galaxy devices and warns that internal damage or corrosion may remain after apparent drying.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Soft lint-free microfiber cloth',
      description:
        'Useful for drying the phone’s exterior and cable without leaving paper or cotton fibers around the connector.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Compatible wireless charger',
      description:
        'Provides a temporary charging option on supported phones when the exterior is dry but the wired port remains unavailable.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer liquid-exposure guide',
      description:
        'Gives the correct drying, cleaning, shutdown and service instructions for the exact phone model.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Authorized phone repair service',
      description:
        'Appropriate when the warning persists or the port is hot, corroded, burned, melted or physically damaged.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'phone-not-charging',
      anchorText: 'Can I ignore a phone that will not charge?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'loose-charging-port',
      anchorText: 'Can I ignore a loose phone charging port?',
      relationshipType: 'escalation',
    },
    {
      slug: 'hot-phone-while-charging',
      anchorText: 'Can I ignore a phone getting hot while charging?',
      relationshipType: 'escalation',
    },
    {
      slug: 'frayed-charging-cable',
      anchorText: 'Can I ignore a frayed phone charging cable?',
      relationshipType: 'cause',
    },
    {
      slug: 'swollen-phone-battery',
      anchorText: 'Can I ignore a swollen phone battery?',
      relationshipType: 'escalation',
    },
  ],
};
