import type { ProblemSeed } from '../types';

export const eBikeBatteryHotWhileCharging: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'e-bike-batteries',
  slug: 'e-bike-battery-hot-while-charging',
  canonicalPath: '/e-bikes-and-scooters/e-bike-batteries/e-bike-battery-hot-while-charging/',
  name: 'Hot E-Bike Battery While Charging',
  eyebrow: 'Mobility · E-bikes & Scooters · E-Bike Batteries',

  h1: 'Can I Ignore an E-Bike Battery That Gets Hot While Charging?',
  seoTitle: 'Hot E-Bike Battery During Charging: When to Stop',
  metaDescription:
    'A warm e-bike battery may be normal for some models, but a hot, rising, swollen, noisy, smelly, or mismatched-charger battery needs immediate action.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep charging or ride it?',
  canIUseItLabel: 'No—stop charging until the cause is clear',

  shortAnswer:
    'No. Stop charging a battery that is truly hot, hotter than usual, or still getting hotter. Mild warmth may be acceptable only when it matches the exact manufacturer’s guidance and there is no odor, swelling, leaking, noise, smoke, damage, or charging error.',

  whyItMattersHeading: 'Hot Is Not the Same as Normally Warm',
  whyItMatters: [
    'Charging produces some heat, but there is no universal surface-temperature cutoff for every e-bike battery. Pack design, charging rate, ambient conditions, and manufacturer limits differ. One manufacturer, Rad Power Bikes, says its batteries should be merely warm rather than hot while charging; use the instructions for your exact battery instead of applying that guidance to every brand.',
    'Too much heat can indicate an incompatible charger, damaged connection, abnormal cell behavior, or physical damage. USFA lists excessive heat, odor, color or shape changes, leaking, and odd noises as reasons to stop using a lithium-ion battery. CPSC also advises staying present during charging and using only the charger provided or recommended by the device manufacturer.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Charging Immediately If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Scope covered charging heat, charger compatibility, battery warning signs, emergency response, and certified systems using CPSC, USFA, UL, and manufacturer guidance.',
  disclaimer:
    'General e-bike battery triage only. Follow the safety instructions and recall notices for your exact battery and charger. Do not handle a battery that is swelling, hissing, leaking, venting, smoking, or burning.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'mildly-warm-within-manufacturer-guidance',
      label: 'The battery is only mildly warm',
      shortDescription:
        'Warmth is even, charging is normal, and the exact manufacturer’s instructions describe this behavior as expected.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Mild manufacturer-approved warmth can be normal',
      resultBody:
        'A slight, stable temperature rise is less concerning when your battery maker confirms it is expected and there are no warnings, charging interruptions, unusual smells, noises, damage, or shape changes.',
      recommendedAction:
        'Keep the battery and charger uncovered in the charging location specified by the manufacturer. Remain present and disconnect the charger when charging is complete.',
    },
    {
      slug: 'battery-warm-from-riding-or-hot-surroundings',
      label: 'The battery was already warm from riding or the surroundings',
      shortDescription:
        'It was recently ridden, left in sunlight, stored in a hot vehicle, or brought in from an environment outside its approved charging range.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Let the battery return to its approved charging range',
      resultBody:
        'Charging an already heated pack can add more heat. Battery makers specify acceptable charging conditions, and the permitted range varies by system.',
      recommendedAction:
        'Do not begin or resume charging until the battery has cooled naturally in a dry, shaded location and is within the range stated in its manual. Do not use a refrigerator, freezer, water, or ice.',
    },
    {
      slug: 'battery-is-noticeably-hot',
      label: 'The battery is hot rather than mildly warm',
      shortDescription:
        'It is uncomfortable to touch briefly, much hotter than in previous charges, or hot enough to make you pull your hand away.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop charging the battery',
      resultBody:
        'Touch is not a precise thermometer, but obvious or unusual heat is outside the pattern manufacturers describe as ordinary warmth. USFA identifies too much heat as a lithium-ion battery warning sign.',
      recommendedAction:
        'Stop charging only if you can do so without touching or approaching a failing pack. Keep people away, let it cool naturally, and contact the manufacturer or an authorized e-bike dealer before charging or riding again.',
    },
    {
      slug: 'heat-keeps-rising',
      label: 'The battery keeps getting hotter as charging continues',
      shortDescription:
        'Heat is increasing instead of leveling off, even though the room and charging setup appear normal.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Rising heat is abnormal',
      resultBody:
        'Continued temperature rise can indicate that charging energy is not being managed normally. Waiting for an automatic shutoff is not a safe troubleshooting method.',
      recommendedAction:
        'End the charging attempt if it is safe to reach the power connection. Do not reconnect the charger to test the battery. Arrange manufacturer or authorized dealer guidance.',
    },
    {
      slug: 'universal-or-unapproved-charger',
      label: 'The charger did not come with the bike',
      shortDescription:
        'It is described as universal, fits the connector, came with another device, or has not been approved for this exact battery.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using the unapproved charger',
      resultBody:
        'A connector that fits does not prove electrical compatibility. CPSC warns that universal micromobility chargers can be incompatible and can cause a battery to ignite.',
      recommendedAction:
        'Disconnect the setup if safe. Obtain the charger specified or approved by the bike or battery manufacturer, and have the hot battery assessed before trying the correct charger.',
    },
    {
      slug: 'heat-at-port-plug-or-cable',
      label: 'Heat is concentrated at the charging port or connector',
      shortDescription:
        'The port, plug, cable, or nearby part of the battery is much hotter than the rest of the pack.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Suspect a connection or charging fault',
      resultBody:
        'Localized heat can accompany a loose, dirty, corroded, damaged, wet, or electrically incompatible connection. This is different from mild, evenly distributed warmth.',
      recommendedAction:
        'Stop using the charging setup. After everything is cool, look without disassembling for discoloration, melting, looseness, moisture, dirt, or damaged pins, then arrange service.',
    },
    {
      slug: 'charging-error-or-interruption',
      label: 'Heat comes with a charging error',
      shortDescription:
        'An error light appears, charging repeatedly stops, or the battery does not finish within the maker’s stated charging pattern.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep restarting the charge',
      resultBody:
        'Shimano instructs users to stop using a battery if an error occurs during charging. Repeatedly reconnecting a hot battery can add energy without resolving the underlying problem.',
      recommendedAction:
        'Unplug the equipment if safe, record the indicator pattern or error code, and consult the exact manual or an authorized dealer. Do not bypass a temperature or charging warning.',
    },
    {
      slug: 'battery-was-damaged-wet-or-modified',
      label: 'The battery was dropped, crashed, soaked, opened, or rebuilt',
      shortDescription:
        'The heat began after impact, extensive water exposure, casing damage, cell replacement, or unauthorized repair.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the battery as potentially damaged',
      resultBody:
        'Impact, moisture, modification, or improper rebuilding can damage cells, connections, insulation, or protective electronics even when the exterior still looks usable.',
      recommendedAction:
        'Do not charge or ride with the battery. Do not open it to inspect the cells. Contact the manufacturer or a qualified battery service for handling, inspection, and disposal instructions.',
    },
    {
      slug: 'smell-noise-swelling-leak-or-smoke',
      label: 'There is odor, hissing, swelling, leaking, vapor, or smoke',
      shortDescription:
        'The battery changes shape or color, makes popping or hissing sounds, leaks, smells strange, vents, smokes, or catches fire.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Leave the area and call 911',
      resultBody:
        'These are recognized signs of serious lithium-ion battery failure or thermal runaway. The pack can release intense heat and flammable gases and may ignite nearby materials.',
      recommendedAction:
        'Do not touch, carry, unplug, or attempt to cool the battery. Warn others, leave by a safe route, close doors behind you if practical, and call 911 from outside.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Charging generates some heat',
      description:
        'Normal electrical and chemical processes can cause a slight temperature rise, depending on the battery and charger design.',
      severity: 'info',
      chainLabel: 'Charging warmth',
    },
    {
      stageLabel: 'IF THE HEAT IS ABNORMAL',
      title: 'Charging protection may activate',
      description:
        'The battery or charger may slow, stop, display an error, or refuse to resume until conditions change.',
      severity: 'caution',
      chainLabel: 'Protective response',
    },
    {
      stageLabel: 'IF A FAULT REMAINS',
      title: 'Heat may return or intensify',
      description:
        'An incompatible charger, damaged connection, failed cell, or defective protection circuit can produce more heat during another charging attempt.',
      severity: 'warning',
      chainLabel: 'Repeated overheating',
    },
    {
      stageLabel: 'IF THERMAL RUNAWAY BEGINS',
      title: 'The battery can vent, burn, or explode',
      description:
        'Uncontrolled heating can release flammable gases, produce smoke and fire, ignite nearby materials, and create serious burn and inhalation hazards.',
      severity: 'danger',
      chainLabel: 'Fire and injury',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The battery is mildly warm and the exact manufacturer confirms this is normal',
      ignoreAnswer: 'Yes, with monitoring',
      severity: 'info',
      whatToDo:
        'Continue only with the approved charger, proper ventilation, and no warning signs. Stay present and unplug the charger when charging is complete.',
    },
    {
      situation: 'The pack is warm after riding or being in a hot environment',
      ignoreAnswer: 'Only until it has cooled',
      severity: 'caution',
      whatToDo:
        'Delay charging until the pack is within the manufacturer’s approved charging conditions and has cooled naturally.',
    },
    {
      situation: 'The battery is hotter than usual or uncomfortable to touch',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop charging if this can be done safely, keep people away, and obtain manufacturer or authorized dealer guidance before reuse.',
    },
    {
      situation: 'Heat increases throughout the charge',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not wait for the charge to finish or reconnect it for another test. Keep the battery out of use pending assessment.',
    },
    {
      situation: 'A universal, borrowed, or unapproved charger is connected',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using it. Ask the battery or bike manufacturer for the exact approved replacement charger and have the overheated pack checked.',
    },
    {
      situation: 'The port, connector, cable, or battery casing is damaged or discolored',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep the charging equipment out of service. Do not clean, bend, open, or repair electrical contacts while the system is connected.',
    },
    {
      situation: 'The battery was dropped, soaked, opened, or rebuilt',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not charge or ride with it. Follow manufacturer instructions for inspection, transport, and recycling of a potentially damaged pack.',
    },
    {
      situation: 'The pack swells, leaks, hisses, vents, smokes, or burns',
      ignoreAnswer: 'No—leave immediately',
      severity: 'danger',
      whatToDo:
        'Do not handle it. Evacuate, call 911 from outside, and tell responders that an e-bike lithium-ion battery is involved.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop adding power',
      body:
        'If there is no smoke, hissing, leaking, swelling, or rapidly rising heat and you can safely reach the power connection without handling the battery, end the charge. Otherwise, leave the equipment alone and move away.',
    },
    {
      title: 'Let it cool naturally',
      body:
        'Keep the battery away from direct sunlight and combustible clutter. Do not cover it or use water, ice, a refrigerator, or a freezer. Do not carry a hot or suspect pack through the home to find a different location.',
    },
    {
      title: 'Verify the exact charger',
      body:
        'Check the bike and battery manuals, charger model number, electrical ratings, and manufacturer compatibility list. Matching plugs or voltage claims alone are not proof that a charger is approved.',
      destinationProblemSlug: 'cheap-third-party-charger',
    },
    {
      title: 'Check for damage only after cooling',
      body:
        'Without opening the pack, look for swelling, cracks, impact marks, melted plastic, discoloration, moisture, corrosion, damaged pins, or a loose charging port. Keep a suspect battery out of use.',
      destinationProblemSlug: 'swollen-e-bike-battery',
    },
    {
      title: 'Arrange safe service or disposal',
      body:
        'Contact the bike or battery manufacturer or an authorized e-bike dealer. Do not open, rebuild, puncture, mail, or place a lithium-ion battery in household trash or ordinary recycling.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The battery is excessively or increasingly hot',
      description:
        'Heat that is clearly beyond the maker’s expected pattern, keeps rising, or makes brief contact uncomfortable is not routine charging warmth.',
      severity: 'warning',
    },
    {
      title: 'The casing changes shape',
      description:
        'Bulging, swelling, splitting seams, or a battery that no longer fits its mount can indicate internal damage. Do not press it flat or force it out.',
      severity: 'danger',
    },
    {
      title: 'You hear hissing, popping, or crackling',
      description:
        'Odd noises can accompany gas release or internal battery failure. Move away rather than trying to unplug or carry the pack.',
      severity: 'danger',
    },
    {
      title: 'There is a strange or burning odor',
      description:
        'An acrid, chemical, sweet, or overheated-plastic smell is a recognized battery warning sign, even if smoke is not visible.',
      severity: 'danger',
    },
    {
      title: 'Liquid, residue, melting, or discoloration appears',
      description:
        'Leaking material and visible heat damage mean the battery or charging connection must not be reused.',
      severity: 'danger',
    },
    {
      title: 'Vapor or smoke comes from the battery',
      description:
        'Leave immediately and call 911. Do not breathe the fumes, touch the battery, or attempt to carry it outside.',
      severity: 'danger',
    },
    {
      title: 'Flames appear',
      description:
        'Evacuate by a safe route, close doors behind you if practical, and call 911 from outside. Tell responders a lithium-ion e-bike battery is involved.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it normal for an e-bike battery to feel warm while charging?',
      answer:
        'It can be normal for some batteries to become mildly warm, but check the instructions for your exact model. Warmth should not keep increasing or come with errors, odor, noise, damage, leaking, swelling, or smoke.',
    },
    {
      question: 'How hot is too hot for an e-bike battery?',
      answer:
        'There is no reliable universal surface-temperature cutoff for every battery. Use the limits and warning behavior in your manual. Stop charging if the pack is hotter than its established normal pattern, uncomfortable to touch briefly, or continuing to heat.',
    },
    {
      question: 'Can I unplug a hot e-bike battery?',
      answer:
        'Only if there are no signs of active failure and you can reach the power connection safely without touching the battery. If it is hissing, swelling, leaking, venting, smoking, or rapidly heating, do not approach it; leave and call 911.',
    },
    {
      question: 'Can I charge it again after it cools?',
      answer:
        'Not if the battery became truly hot or the cause is unknown. Cooling does not repair a damaged cell, connector, charger, or protection circuit. Get guidance from the manufacturer or an authorized dealer before another charge.',
    },
    {
      question: 'Can I use another charger if the plug and voltage match?',
      answer:
        'Not unless the bike or battery manufacturer has tested and approved it for that exact system. CPSC warns that so-called universal chargers can fit a device while still being electrically incompatible.',
    },
    {
      question: 'Should I put a hot battery outside?',
      answer:
        'Do not carry a hot or failing battery through an occupied building. If it is actively venting, hissing, smoking, leaking, or swelling, leave it alone, evacuate, and call 911. Follow fire-department instructions.',
    },
    {
      question: 'Can I cool the battery with water, ice, or a freezer?',
      answer:
        'No. Do not improvise a cooling method for a battery that has not caught fire. Rapid cooling, condensation, and handling can add hazards. Let a stable battery cool naturally and leave active failures to emergency responders.',
    },
    {
      question: 'Can I ride the bike after the battery overheated?',
      answer:
        'Not until the cause has been identified and the manufacturer or authorized dealer says the battery is safe to use. Riding can place additional electrical and mechanical demands on a damaged pack.',
    },
    {
      question: 'Does UL certification mean an e-bike battery cannot overheat?',
      answer:
        'No. UL 2849 evaluates the e-bike’s electrical drive, battery, and charger as a system for fire and electrical hazards, but certification does not replace correct charging, compatible parts, inspections, or recall checks.',
    },
    {
      question: 'Can I put a damaged e-bike battery in the trash?',
      answer:
        'No. Lithium-ion batteries can start fires in garbage trucks and waste facilities. Follow the manufacturer’s instructions and use a local battery recycling or household hazardous-waste program that accepts damaged e-bike batteries.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Micromobility: E-Bikes, E-Scooters and Hoverboards',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Micromobility-Information-Center',
      sourceType: 'government',
      notes:
        'Advises following manufacturer charging instructions, remaining present during charging, unplugging when done, and using only the provided or manufacturer-recommended charger and approved replacement batteries.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title:
        'CPSC Urges Consumers to Not Buy or Use “Universal” Chargers with Micromobility Products Due to Fire Hazard',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2024/CPSC-Urges-Consumers-to-Not-Buy-or-Use-Universal-Chargers-with-Micromobility-Products-Due-to-Fire-Hazard',
      sourceType: 'government',
      notes:
        'Warns that universal chargers may fit while remaining electrically incompatible and can cause battery ignition. Directs consumers to use the supplied or specifically approved charger.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Battery Fire Safety',
      url: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/batteries/',
      sourceType: 'government',
      notes:
        'Says to stop using lithium-ion batteries showing too much heat, odor, color or shape changes, leaking, or odd noises and advises keeping batteries away from direct sunlight and hot cars.',
    },
    {
      publisher: 'Rad Power Bikes',
      title: 'Summer Weather Tips for Your Electric Bike Battery',
      url: 'https://support.radpowerbikes.com/blogs/the-scenic-route/hot-weather-tips-for-your-electric-bike-battery',
      sourceType: 'manufacturer',
      notes:
        'For Rad batteries specifically, says a charging battery should be merely warm rather than hot and that hot charging can indicate damage. Also warns against high heat and third-party charging equipment.',
    },
    {
      publisher: 'Shimano',
      title: "SHIMANO STEPS Special Battery and Parts Dealer's Manual (Gen.2)",
      url: 'https://si.shimano.com/en/pdfs/dm/BTE001/DM-BTE001-01-ENG.pdf',
      sourceType: 'manufacturer',
      notes:
        'Requires the specified battery and charger combination, directs users to stop if a charge error occurs, warns against touching a high-temperature battery, and provides model-specific charging conditions.',
    },
    {
      publisher: 'UL Solutions',
      title: 'E-Bikes Certification: Evaluating and Testing to UL 2849',
      url: 'https://www.ul.com/services/e-bikes-certificationevaluating-and-testing-ul-2849',
      sourceType: 'standards_body',
      notes:
        'Explains that UL 2849 evaluates the e-bike electrical drive, battery, and charger system combination for electrical and fire safety, including charging-related shock hazards.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Exact battery and charger manual',
      description:
        'Use it to confirm the approved charger, charging environment, indicator behavior, operating limits, and instructions for a charging or temperature error.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer-approved replacement charger',
      description:
        'The replacement must be specifically tested and approved for the exact bike and battery system, not merely advertised as compatible with e-bikes.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Authorized e-bike battery service',
      description:
        'A brand-authorized dealer or battery service can assess abnormal heat, charging errors, impact damage, wet components, and connector faults without opening the pack at home.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Battery recycling or hazardous-waste service',
      description:
        'Use a program that specifically accepts lithium-ion e-bike batteries, especially when a pack is damaged, defective, swollen, recalled, or no longer usable.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'swollen-e-bike-battery',
      anchorText: 'Can I ignore a swollen e-bike battery?',
      relationshipType: 'escalation',
    },
    {
      slug: 'cheap-third-party-charger',
      anchorText: 'Can I use a cheap third-party charger?',
      relationshipType: 'cause',
    },
    {
      slug: 'e-bike-battery-got-wet',
      anchorText: 'Can I ignore an e-bike battery that got wet?',
      relationshipType: 'cause',
    },
  ],
};
