import type { ProblemSeed } from '../types';

export const eBikeCutsOutWhileRiding: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'e-bike-power',
  slug: 'e-bike-cuts-out-while-riding',
  canonicalPath: '/e-bikes-and-scooters/e-bike-power/e-bike-cuts-out-while-riding/',
  name: 'E-Bike Cuts Out While Riding',
  eyebrow: 'Mobility · E-bikes & Scooters · E-Bike Power',

  h1: 'Can I Ignore an E-Bike That Cuts Out While Riding?',
  seoTitle: 'Why an E-Bike Cuts Out While Riding and When to Stop',
  metaDescription:
    'Sudden e-bike assist loss may be normal at the assist limit, but repeat cutouts can signal a loose connection, low voltage, overheating, or battery trouble.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Only to get out of danger if it pedals and brakes normally',

  shortAnswer:
    'Probably not. A cutout caused by an almost-empty or very cold battery may have a straightforward explanation, but random or repeated loss of assist needs diagnosis. Stop using and charging the bike for battery heat, swelling, leaking, odor, smoke, sparks, or a loose battery.',

  whyItMattersHeading: 'Why Sudden Assist Loss Matters',
  whyItMatters: [
    'An e-bike may still pedal and brake after the motor stops helping, but the sudden increase in effort can leave you slowing unexpectedly while starting, climbing, crossing traffic, or carrying a load. A repeatable cutout is therefore a reliability and riding-safety problem even when a restart brings the system back.',
    'The pattern helps narrow the cause. A smooth fade at the programmed assist limit can be normal. Cutouts over bumps can involve a battery mount, cable, or connector; failures during heavy demand can involve temperature or voltage protection; and error codes can identify sensor, communication, battery, or drive-system faults. A restart is a troubleshooting step, not proof that the cause is gone.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Charging If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Assessed against current CPSC, NFPA, Bosch, Shimano, and Trek materials on cutouts, connections, voltage, temperature, error states, and battery warning signs.',
  disclaimer:
    'This is general triage for consumer e-bikes, not a diagnosis of a particular battery or drive system. Follow the instructions and stop-use warnings for your exact bike, battery, motor, and charger.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'smooth-fade-at-assist-limit',
      label: 'Assist fades at the bike’s programmed top-assist speed',
      shortDescription:
        'The display stays on, the transition is smooth, and assistance returns as speed falls below the limit.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'That can be normal assist behavior',
      resultBody:
        'E-bike systems stop providing assistance above their configured limit. A smooth, repeatable fade at that speed is different from the system abruptly shutting down at random.',
      recommendedAction:
        'Confirm the behavior and assist limit in the bike’s manual. Investigate it if the transition becomes abrupt, happens below the expected limit, or turns off the display.',
    },
    {
      slug: 'cuts-out-near-empty',
      label: 'It cuts out only when the battery is nearly empty',
      shortDescription:
        'The charge indicator is at the bottom of its range, with no unusual heat, damage, odor, or persistent error.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Recharge before assuming there is a fault',
      resultBody:
        'A nearly spent battery may no longer provide assist, and an undervoltage condition can trigger system protection. A cutout at substantial indicated charge is less easily explained.',
      recommendedAction:
        'Charge with the bike manufacturer’s approved charger and test again in a safe, low-demand setting. Arrange a battery check if the cutout returns well before the battery is nearly empty.',
    },
    {
      slug: 'cuts-out-in-very-cold-weather',
      label: 'It happens only with a very cold battery',
      shortDescription:
        'The pack was stored or ridden in cold conditions and works normally after warming naturally.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Temperature protection may be limiting output',
      resultBody:
        'Cold reduces battery performance, and some systems stop battery output outside their permitted temperature range. The same behavior after the battery reaches a suitable temperature needs further investigation.',
      recommendedAction:
        'Bring the battery into a dry, moderate-temperature location and let it warm naturally. Follow its manual before charging, and do not use heaters, flames, or other forced heating.',
    },
    {
      slug: 'cuts-out-over-bumps',
      label: 'It cuts out over bumps or during steering movements',
      shortDescription:
        'Road impacts, rough ground, or turning the handlebar can make the display or motor switch off.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Suspect an intermittent connection',
      resultBody:
        'Movement-triggered shutdown can come from a battery that is not fully engaged, incorrect mount spacing, a strained cable, or a loose or damaged connector. Repeated impacts can keep interrupting the connection.',
      recommendedAction:
        'Stop somewhere safe, switch the bike off, and check that the removable battery is locked firmly and visible plugs are fully seated. Do not ride normally if the battery moves or the problem returns.',
    },
    {
      slug: 'cuts-out-under-heavy-load',
      label: 'It cuts out after a long climb or heavy-load ride',
      shortDescription:
        'The failure follows sustained high assistance, hot weather, a steep climb, or carrying a heavy load.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'A protection system may have intervened',
      resultBody:
        'Sustained demand can heat the battery and drive system. Manufacturer guidance recognizes that temperature or overcurrent protection may reduce or stop battery output rather than allow continued operation outside its limits.',
      recommendedAction:
        'Stop using assist and let the system cool naturally in a safe place. Use a lower assist mode and suitable gear after it returns to normal, and seek service if ordinary riding triggers another cutout.',
    },
    {
      slug: 'returns-after-restart',
      label: 'A restart restores assist, but the cutout keeps returning',
      shortDescription: 'Switching the system off and on clears the problem only temporarily.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The restart has not fixed the cause',
      resultBody:
        'Manufacturers commonly recommend a restart for a temporary system error, but they also direct users to service when the fault persists. Repeated restarts can hide a connection, sensor, voltage, firmware, or controller problem.',
      recommendedAction:
        'Record when it happens and stop depending on the bike for traffic, hills, or heavy loads. Arrange diagnosis using the bike maker’s service system.',
    },
    {
      slug: 'display-shows-error-code',
      label: 'The display shows an error or warning code',
      shortDescription:
        'A number, symbol, flashing pattern, or app warning appears with the loss of assistance.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The exact code controls the next step',
      resultBody:
        'E-bike codes are system-specific. They can indicate anything from a misplaced speed sensor to a loose cable, low voltage, temperature protection, battery malfunction, or a drive-unit fault.',
      recommendedAction:
        'Photograph the code before restarting and look it up for the exact bike and drive system. Follow its stated remedy and seek service if it returns or the instructions say to stop use.',
    },
    {
      slug: 'random-assist-loss-display-on',
      label: 'The display stays on but assist stops at random',
      shortDescription:
        'Charge remains visible and the system appears active, but the motor stops helping below its normal assist limit.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'A sensor or drive fault needs checking',
      resultBody:
        'Speed-sensor, torque-sensor, firmware, communication, or drive-unit problems can remove assistance while leaving some display functions active. The symptom alone cannot identify which component is responsible.',
      recommendedAction:
        'Check only user-accessible items named in the manual, such as an external speed-sensor magnet. Avoid opening the motor, controller, wiring harness, or battery, and arrange service if assist remains unreliable.',
    },
    {
      slug: 'entire-system-shuts-down',
      label: 'The battery and display shut off completely',
      shortDescription:
        'The whole electrical system dies while riding rather than only reducing motor assistance.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop relying on the electrical system',
      resultBody:
        'A complete shutdown can involve interrupted battery communication, undervoltage, an improperly engaged battery, damaged wiring, or an internal electrical fault. It deserves more caution than normal assist limitation.',
      recommendedAction:
        'Move off the road, switch the bike off, and inspect the battery’s external fit only after stopping. Do not continue if the battery is loose, contacts are damaged, or the system shuts down again.',
    },
    {
      slug: 'battery-has-warning-signs',
      label: 'The cutout comes with battery heat, swelling, odor, leaking, smoke, or sparks',
      shortDescription:
        'The battery changes shape, gets abnormally hot, vents, smells unusual, leaks, smokes, or shows electrical damage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a battery safety problem',
      resultBody:
        'These are recognized warning signs of lithium-ion battery failure, with fire and burn hazards. The issue is no longer just unreliable motor assistance.',
      recommendedAction:
        'Stop riding and charging. Do not open, press, puncture, or carry a smoking or rapidly heating battery. Move away, evacuate an enclosed area, and call emergency services for smoke or fire.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The bike becomes unexpectedly harder to propel',
      description:
        'Motor loss can produce a sudden change in speed and required pedal effort, particularly during starts, climbs, or loaded riding.',
      severity: 'caution',
      chainLabel: 'Assist stops',
    },
    {
      stageLabel: 'IF A CONNECTION OR SENSOR IS INTERMITTENT',
      title: 'Normal movement keeps triggering the fault',
      description:
        'Bumps, steering, vibration, or changing pedal demand may interrupt communication or produce an invalid sensor signal again.',
      severity: 'warning',
      chainLabel: 'Movement triggers another cutout',
    },
    {
      stageLabel: 'IF VOLTAGE OR TEMPERATURE PROTECTION IS ACTIVE',
      title: 'Repeated demand causes repeated shutdown',
      description:
        'Recharging, warming, or cooling may restore operation, but recurring protection under ordinary conditions can point to battery or system trouble.',
      severity: 'warning',
      chainLabel: 'Protection keeps intervening',
    },
    {
      stageLabel: 'IF RESTARTING BECOMES THE WORKAROUND',
      title: 'The bike remains unreliable when assist matters',
      description:
        'The next loss may occur in traffic, on a climb, or while carrying cargo, even though earlier restarts appeared successful.',
      severity: 'warning',
      chainLabel: 'Temporary reset hides the fault',
    },
    {
      stageLabel: 'IF BATTERY DAMAGE SIGNS APPEAR',
      title: 'The problem changes from propulsion to fire safety',
      description:
        'Abnormal heat, swelling, leaking, venting, odor, smoke, or sparks can indicate battery damage with fire and burn hazards.',
      severity: 'danger',
      chainLabel: 'Damaged lithium-ion battery',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Assist fades smoothly only at the programmed top-assist speed',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Confirm the expected assist limit in the manual. Investigate any abrupt shutdown, display loss, or cutout below that limit.',
    },
    {
      situation: 'It happened with the battery nearly empty and disappears after charging',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Recharge with the approved charger and test in a safe setting. Do not dismiss it if it returns with substantial charge remaining.',
    },
    {
      situation: 'It happens only when the battery is very cold',
      ignoreAnswer: 'Only until it warms naturally',
      severity: 'caution',
      whatToDo:
        'Let the battery reach a suitable temperature in a dry indoor location and follow the maker’s charging-temperature instructions.',
    },
    {
      situation: 'It follows an unusually demanding hot climb or heavy load',
      ignoreAnswer: 'Only while it cools',
      severity: 'caution',
      whatToDo:
        'Stop assist use and let the system cool naturally. Arrange service if normal riding causes another temperature-related cutout.',
    },
    {
      situation: 'Bumps, vibration, or turning the handlebar trigger it',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop normal riding and check the battery’s fit and user-accessible connections with the system switched off.',
    },
    {
      situation: 'Restarting restores assist, but the problem returns',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Record the conditions and arrange diagnosis rather than making power cycling part of every ride.',
    },
    {
      situation: 'An error code or warning pattern appears',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Photograph the code, identify the exact drive system, and follow that manufacturer’s remedy.',
    },
    {
      situation: 'The battery is loose, damaged, swollen, hot, leaking, smoking, or sparking',
      ignoreAnswer: 'No — stop using it',
      severity: 'danger',
      whatToDo:
        'Stop riding and charging. Keep away from a smoking or rapidly heating pack and call emergency services for an active fire.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Get out of moving traffic before troubleshooting',
      body:
        'Coast or pedal to a safe stopping place if the bicycle remains controllable. Do not look up codes, reseat plugs, or restart the display while moving.',
    },
    {
      title: 'Save the evidence before restarting',
      body:
        'Photograph the display and note the charge level, assist mode, weather, terrain, load, speed pattern, and whether the display also turned off. This is more useful than reporting only that the motor stopped.',
      destinationProblemSlug: 'e-bike-error-code',
    },
    {
      title: 'Check the battery’s external fit with the power off',
      body:
        'If the manual allows battery removal, confirm that the pack locks firmly and inspect the mount and accessible connector pins for movement, dirt, moisture, bending, scorching, or corrosion. Do not probe contacts with metal tools.',
    },
    {
      title: 'Retest only under controlled conditions',
      body:
        'After an appropriate recharge, warm-up, or cool-down, use a low-demand route away from traffic and confirm that pedals, brakes, steering, and lights work normally. End the test if assistance drops again.',
    },
    {
      title: 'Arrange drive-system diagnosis if it repeats',
      body:
        'A shop familiar with the bike’s exact motor and battery system can retrieve stored faults and test the battery, mount, wiring, sensors, controller, and firmware. Do not open or bypass sealed electrical components.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The battery changes shape or no longer fits normally',
      description:
        'Swelling, a lifted case seam, or a pack that has become difficult to install or remove can indicate internal battery failure.',
      severity: 'danger',
    },
    {
      title: 'There is smoke, flame, hissing, popping, or rapid heating',
      description:
        'Move away and evacuate an enclosed area. Call emergency services for smoke or fire rather than trying to continue using or carrying the battery.',
      severity: 'danger',
    },
    {
      title: 'You notice leaking, an unusual odor, discoloration, or melted material',
      description:
        'Stop use and charging. These are battery or connector damage signs, not ordinary motor-assist behavior.',
      severity: 'danger',
    },
    {
      title: 'The battery moves in its mount or will not lock securely',
      description:
        'Do not ride with a pack that can lose electrical contact or come loose. Have the mount, lock, and battery fit corrected.',
      severity: 'warning',
    },
    {
      title: 'Contacts or cables are wet, corroded, bent, broken, or scorched',
      description:
        'Leave the system off and follow the manufacturer’s inspection and service instructions. Do not reconnect visibly damaged electrical parts.',
      severity: 'warning',
    },
    {
      title: 'The cutout also disables lights or other critical electrical functions',
      description:
        'Do not continue a ride that depends on integrated lights, electronic shifting, or another function that disappeared with the shutdown.',
      severity: 'danger',
    },
    {
      title: 'Assist repeatedly disappears in traffic, on climbs, or under cargo',
      description:
        'Even without battery warning signs, unpredictable propulsion makes the bike unsafe to rely on in situations where sudden slowing creates a hazard.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I ride an e-bike without motor assistance?',
      answer:
        'Often, yes, if it pedals freely and the brakes, steering, wheels, and required lights work normally. E-bikes are heavy, though, so ride unassisted only far enough to reach a safe place if the cutout was unexpected.',
    },
    {
      question: 'Did restarting the e-bike fix the problem?',
      answer:
        'Not if the cutout returns. A restart may clear temporary protection or an error state, but recurring shutdown shows that the underlying condition remains.',
    },
    {
      question: 'Why does my e-bike cut out over bumps?',
      answer:
        'A battery that is not fully engaged, incorrect battery-mount spacing, a strained cable, or a loose or damaged connector can lose contact when the bike moves. Stop and check the external fit with the system off.',
    },
    {
      question: 'Why does assist stop on steep climbs?',
      answer:
        'A steep climb increases electrical and thermal demand. Temperature, overcurrent, or low-voltage protection may reduce or stop output, especially with a low charge, heavy load, hot conditions, or a battery that no longer performs normally.',
    },
    {
      question: 'Can cold weather make an e-bike shut off?',
      answer:
        'Yes. Cold reduces battery performance, and some systems stop output when the battery or drive unit is outside its allowed temperature range. Let it warm naturally and investigate if the problem continues at a suitable temperature.',
    },
    {
      question: 'Is losing assist at low battery normal?',
      answer:
        'It can be. Recharge before testing again. A bike that cuts out while the display still shows substantial charge may have an inaccurate reading, abnormal voltage output, a weak battery, or another electrical fault.',
    },
    {
      question: 'Is the motor supposed to cut out at the e-bike’s speed limit?',
      answer:
        'Assistance is supposed to end at the system’s configured limit. A smooth fade with the display still operating can be normal; an abrupt random shutdown or complete loss of electrical power is not the same behavior.',
    },
    {
      question: 'What should I do with an e-bike error code?',
      answer:
        'Photograph it and use the manual or support page for the exact motor, display, and battery system. Code meanings are not interchangeable between manufacturers.',
    },
    {
      question: 'Can I spray cleaner on the battery contacts?',
      answer:
        'Do not apply an unspecified cleaner or lubricant. Switch the system off, follow the manufacturer’s removal instructions, and limit home inspection to accessible, dry external surfaces unless the manual authorizes more.',
    },
    {
      question: 'Does a cutout mean the battery could catch fire?',
      answer:
        'Not by itself. Low charge, cold, sensors, connectors, and protective shutdowns can all remove assist without indicating a fire. Swelling, leaking, abnormal heat, odor, venting, smoke, sparks, or fire are the warning signs that require immediate stop-use action.',
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
        'Advises pre-ride damage checks, following manufacturer instructions, using approved batteries and chargers, checking product warnings, and keeping lithium-ion batteries out of household trash.',
    },
    {
      publisher: 'National Fire Protection Association',
      title: 'E-Bike and E-Scooter Safety',
      url: 'https://www.nfpa.org/-/media/Project/Storefront/Catalog/Files/Safety-tip-sheets/ElectricBikeSafetyTips.pdf?hash=26167AA7345BFBD80B0A33E64667AF51&rev=-1',
      sourceType: 'standards_body',
      notes:
        'Identifies unusual odor, color change, excessive heat, shape change, leaking, smoking, or failure to hold charge as reasons to stop using the battery and gives fire-response guidance.',
    },
    {
      publisher: 'Shimano',
      title: 'SHIMANO STEPS User’s Manual UM-72F0B',
      url: 'https://si.shimano.com/en/pdfs/um/72F0B/UM-72F0B.pdf',
      sourceType: 'manufacturer',
      notes:
        'Covers errors that remove assist, battery-to-drive communication faults, disconnected cables, speed-sensor faults, low charge, winter performance, and overheating during long slopes or heavy-load riding.',
    },
    {
      publisher: 'Shimano',
      title: 'SHIMANO STEPS General User’s Manual UM-7GP0B',
      url: 'https://si.shimano.com/en/pdfs/um/7GP0B/UM-7GP0B-005-ENG.pdf',
      sourceType: 'manufacturer',
      notes:
        'States that battery overcurrent protection and temperatures outside the discharge range can turn off battery output, with different recovery steps for a pack that is too hot or too cold.',
    },
    {
      publisher: 'Bosch eBike Systems',
      title: 'My eBike switches off during certain riding manoeuvres. What can I do?',
      url: 'https://help.bosch-ebike.com/nz/help-center/led-remote/asset-asf-01063',
      sourceType: 'manufacturer',
      notes:
        'Says shutdown during certain maneuvers may indicate a cable connection error and directs users to check secure plugs and cables that become excessively tensioned during steering.',
    },
    {
      publisher: 'Trek Bicycle',
      title: '65 | Battery - Battery Undervoltage',
      url: 'https://help.trekbikes.com/en_US/dst-hyena-error-codes/65',
      sourceType: 'manufacturer',
      notes:
        'Explains that abnormal low battery voltage can reduce performance and trigger protective system shutdown, with charging, retesting, battery replacement, or service as the stated remedies.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Bike-specific owner’s manual and error-code guide',
      description:
        'Use the documentation for the exact drive system because reset procedures, indicator patterns, temperature limits, and user-accessible checks vary.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Authorized e-bike drive-system service',
      description:
        'Appropriate for stored-fault retrieval and testing of the battery, mount, wiring, sensors, controller, motor, and firmware.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer-approved charger',
      description:
        'Use the charger supplied with or specifically approved for the battery rather than a universal or improvised replacement.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Battery recycling or hazardous-waste service',
      description:
        'Damaged and end-of-life lithium-ion e-bike batteries require local battery-recycling or hazardous-waste handling rather than household trash.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'e-bike-error-code',
      anchorText: 'What does my e-bike error code mean?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'e-bike-battery-range-drop',
      anchorText: 'Why did my e-bike battery range suddenly drop?',
      relationshipType: 'cause',
    },
    {
      slug: 'e-bike-assist-feels-weak',
      anchorText: 'Why does my e-bike assist feel weak?',
      relationshipType: 'sibling',
    },
    {
      slug: 'e-bike-battery-got-wet',
      anchorText: 'Can I use an e-bike battery that got wet?',
      relationshipType: 'cause',
    },
    {
      slug: 'swollen-e-bike-battery',
      anchorText: 'Can I ignore a swollen e-bike battery?',
      relationshipType: 'escalation',
    },
  ],
};
