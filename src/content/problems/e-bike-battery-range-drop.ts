import type { ProblemSeed } from '../types';

export const eBikeBatteryRangeDrop: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'e-bike-batteries',
  slug: 'e-bike-battery-range-drop',
  canonicalPath: '/e-bikes-and-scooters/e-bike-batteries/e-bike-battery-range-drop/',
  name: 'Sudden E-Bike Battery Range Drop',
  eyebrow: 'Mobility · E-bikes & Scooters · E-Bike Batteries',

  h1: 'Can I Ignore a Sudden Drop in E-Bike Battery Range?',
  seoTitle: 'Sudden E-Bike Battery Range Loss: When to Get It Checked',
  metaDescription:
    'Cold weather or a changing estimate can cut displayed range, but sharp actual range loss, cutouts, charge errors, heat, swelling, or odor need attention.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep riding it?',
  canIUseItLabel: 'Only if it is stable and shows no warning signs',

  shortAnswer:
    'Probably not as a long-term plan. Rule out cold weather, a changing range estimate, low tire pressure, brake drag, heavier loads, and higher assist first. If the bike’s actual usable range has sharply fallen under comparable conditions, arrange a battery and drive-system diagnostic.',

  whyItMattersHeading: 'A Range Number Is Not the Same as Battery Capacity',
  whyItMatters: [
    'Actual range changes with temperature, terrain, wind, assist level, rider effort, load, tire pressure, and bike condition. The remaining-range display is an estimate built around some of those variables, so it can fall sharply even when the battery still holds its usual amount of energy. Shimano also notes that low-temperature charging can temporarily shorten maximum riding distance.',
    'A repeatable loss under similar riding conditions is different. It can reflect battery aging, incomplete charging, a battery-management error, poor electrical contact, or another system fault. That does not automatically mean a fire is imminent, but heat, swelling, leakage, odor, unusual noises, smoke, water damage, or physical damage changes the situation from a range problem to a battery-safety problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Charging If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Range estimates, cold performance, storage effects, battery errors, capacity loss, charging safety, and warning signs were checked against CPSC, NYC DOT, Shimano, and Giant guidance.',
  disclaimer:
    'General guidance for consumer e-bikes. Follow the battery, charger, and drive-system instructions for your exact model. Do not open, modify, or rebuild a lithium-ion battery pack.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'cold-weather-arrived',
      label: 'The drop started when cold weather arrived',
      shortDescription:
        'Range is lower only in cold conditions, while charging, battery appearance, and system operation remain normal.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Cold can temporarily reduce usable range',
      resultBody:
        'Battery performance can fall as temperature drops. Shimano says low-temperature charging can also shorten maximum riding distance, with normal distance returning after charging at room temperature.',
      recommendedAction:
        'Store and charge the battery within the temperature limits in its manual. Let a cold battery reach an approved charging temperature before connecting it, then compare performance again in milder conditions.',
    },
    {
      slug: 'range-estimate-only',
      label: 'Only the displayed remaining range changed',
      shortDescription:
        'The range number fell after a hill, headwind, assist-mode change, or harder riding, but battery percentage and actual use remain familiar.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The display may be revising its estimate',
      resultBody:
        'Remaining range is calculated rather than directly measured. Giant describes it as an estimate based on the selected assist level and warns that terrain, riding style, rider condition, wind, and weather affect actual range.',
      recommendedAction:
        'Compare starting and ending battery percentage on familiar rides. If actual battery consumption remains normal and there are no errors or warning signs, the changing estimate alone is not evidence of lost capacity.',
    },
    {
      slug: 'riding-conditions-changed',
      label: 'The route, load, assist, tires, or bike condition changed',
      shortDescription:
        'The bike is carrying more weight, climbing more, fighting wind, using stronger assist, running soft tires, or developing mechanical drag.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The battery may not be the cause',
      resultBody:
        'Higher assistance, hills, wind, weight, low tire pressure, and poor bike condition can all raise energy use. A rubbing brake or underinflated tire can make a healthy battery appear weak.',
      recommendedAction:
        'Set tire pressure within the tire and bike maker’s limits, check that both wheels rotate freely, remove unnecessary load, and repeat a familiar ride using the usual assist setting.',
    },
    {
      slug: 'first-rides-after-storage',
      label: 'The battery was just returned to use after prolonged storage',
      shortDescription:
        'Initial range is shorter after storage, but the pack has no damage, abnormal heat, charging fault, or error indication.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Normal use may restore some performance',
      resultBody:
        'Shimano says batteries may require repeated normal charge-and-discharge use after prolonged storage to restore their original performance. Improper storage can also cause lasting capacity loss or defects.',
      recommendedAction:
        'Fully charge the battery as its manual directs and use ordinary riding and charging cycles rather than forcing a deep discharge. Seek service if the loss stays severe or any error appears.',
    },
    {
      slug: 'gradual-capacity-aging',
      label: 'The loss was gradual rather than truly sudden',
      shortDescription:
        'Range has slowly become shorter with battery age and use, remains predictable, and comes with no errors or physical warning signs.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Gradual capacity loss is expected',
      resultBody:
        'Rechargeable batteries gradually lose charging capacity through use and time. Replacement can usually be planned when the available range no longer meets your needs, provided the battery remains physically normal and operates predictably.',
      recommendedAction:
        'Confirm battery health through the manufacturer’s app or an authorized diagnostic service. Plan replacement rather than waiting until the remaining range becomes impractical.',
    },
    {
      slug: 'actual-range-cut-in-half',
      label: 'Actual usable range fell by about half under similar conditions',
      shortDescription:
        'Comparable routes, weather, assist, load, tire pressure, and riding style now produce a much shorter ride.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Get the battery and system tested',
      resultBody:
        'A large, repeatable change is not explained by the normal uncertainty of a range estimate. The battery may have lost capacity, may not be reaching full charge, or may be reporting or delivering energy incorrectly.',
      recommendedAction:
        'Avoid depending on the bike for a long or isolated trip. Arrange an authorized battery-capacity and system diagnostic, and provide details about when the change began and how the battery percentage behaves.',
    },
    {
      slug: 'percentage-plunges-or-assist-cuts-out',
      label: 'The charge reading plunges or assistance cuts out',
      shortDescription:
        'Battery percentage falls abruptly, reaches empty under load, recovers after a restart, or the motor shuts down unexpectedly.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is more than a range-estimate change',
      resultBody:
        'Cold and strong assistance at a low charge can affect output, but repeated plunges or shutdowns can also indicate a battery, connection, communication, or voltage fault. Unexpected loss of assistance can affect control in traffic or on a climb.',
      recommendedAction:
        'Stop relying on the bike for normal trips and have the battery, mount, contacts, wiring, firmware, and stored error information checked.',
    },
    {
      slug: 'battery-will-not-charge-normally',
      label: 'The battery will not reach a normal full charge',
      shortDescription:
        'Charging ends early, takes abnormally long, produces an error, or the battery and display disagree after charging.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Disconnect it and follow the manual',
      resultBody:
        'Incomplete charging can directly explain shorter range. Shimano instructs users to disconnect and seek service when a battery does not become fully charged after the designated charging process.',
      recommendedAction:
        'Use only the designated charger, disconnect it if charging is abnormal, and follow the troubleshooting instructions for your exact system. Do not keep reconnecting a pack that shows a charging fault.',
    },
    {
      slug: 'battery-safety-warning',
      label: 'Range loss comes with heat, swelling, odor, leakage, noise, smoke, damage, or water exposure',
      shortDescription:
        'The battery or charger has a physical, thermal, electrical, or contamination warning sign.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop riding and charging',
      resultBody:
        'These signs can indicate a damaged or failing lithium-ion battery rather than ordinary capacity loss. Government and manufacturer guidance says to discontinue use when a battery overheats, leaks, changes shape or color, smells unusual, makes odd noises, or is visibly damaged.',
      recommendedAction:
        'Turn the system off and disconnect charging if that can be done safely. Do not handle a smoking, rapidly heating, hissing, or burning pack; move away and call emergency services for active smoke, fire, or violent venting.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Your trip planning becomes unreliable',
      description:
        'The bike may run out of assistance sooner than expected, leaving you to pedal a heavier bicycle without motor support.',
      severity: 'caution',
      chainLabel: 'Uncertain remaining range',
    },
    {
      stageLabel: 'IF IT IS ONLY AN ESTIMATE',
      title: 'The number may stabilize as conditions change',
      description:
        'A range estimate can move with assist level, hills, wind, load, and recent riding. Battery capacity may remain normal.',
      severity: 'info',
      chainLabel: 'Estimate changes',
    },
    {
      stageLabel: 'IF THE LOSS IS REAL',
      title: 'Available battery energy is reduced',
      description:
        'Incomplete charging, battery aging, poor connections, or a system fault can leave less usable energy for each ride.',
      severity: 'warning',
      chainLabel: 'Less usable energy',
    },
    {
      stageLabel: 'IF THE FAULT CONTINUES',
      title: 'Assistance may become unpredictable',
      description:
        'A battery or communication problem can lead to error indications, abrupt charge-level changes, or motor-assistance shutdown.',
      severity: 'warning',
      chainLabel: 'Unreliable power',
    },
    {
      stageLabel: 'IF A DAMAGED BATTERY IS KEPT IN SERVICE',
      title: 'Charging or use can become a fire hazard',
      description:
        'This applies when the pack is damaged, abnormal, overheating, leaking, swelling, smoking, or otherwise showing a battery-safety warning—not to ordinary range loss by itself.',
      severity: 'danger',
      chainLabel: 'Abnormal battery → overheating or fire',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Only the estimated range changed while actual battery use remains normal',
      ignoreAnswer: 'Yes, if there are no other symptoms',
      severity: 'info',
      whatToDo:
        'Compare battery percentage used on familiar rides instead of relying only on the predicted range number.',
    },
    {
      situation: 'Range fell when cold weather arrived',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Charge and store the battery within its manual’s temperature limits, then compare performance after the battery and weather are warmer.',
    },
    {
      situation: 'The bike has soft tires, extra load, stronger assist, hills, wind, or drag',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Correct the riding or mechanical cause and repeat a comparable ride before blaming the battery.',
    },
    {
      situation: 'Initial rides are shorter after prolonged storage',
      ignoreAnswer: 'Briefly, if operation is otherwise normal',
      severity: 'caution',
      whatToDo:
        'Follow the manufacturer’s return-to-use instructions and observe normal charging and riding cycles. Arrange service if performance does not recover.',
    },
    {
      situation: 'Actual range remains sharply lower under comparable conditions',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Book a capacity and system diagnostic before depending on the bike for normal range.',
    },
    {
      situation: 'Battery percentage plunges or assistance cuts out',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Minimize riding and have the battery, mount, connections, firmware, and fault history checked.',
    },
    {
      situation: 'Charging ends abnormally or an error indicator appears',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Disconnect the charger, follow the exact manual, and contact an authorized service provider if the error remains.',
    },
    {
      situation: 'The battery is hot, swollen, leaking, damaged, wet, smoking, or making odd noises',
      ignoreAnswer: 'Not at all',
      severity: 'danger',
      whatToDo:
        'Stop using and charging it. Move away and call emergency services if there is active smoke, fire, rapid heating, or violent venting.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Separate estimated range from actual battery use',
      body:
        'Charge the battery with its designated charger as directed. Record starting and ending battery percentage on a familiar route with similar assist, load, tire pressure, and weather. A changing range number alone is not a capacity test.',
    },
    {
      title: 'Check the easy range drains',
      body:
        'Verify tire pressure, wheel rotation, brake clearance, ride mode, cargo, route, wind, and any recently changed drive settings. Correct obvious mechanical drag before testing again.',
    },
    {
      title: 'Use the approved charger and temperature range',
      body:
        'Charge only with the charger supplied or recommended for the exact battery and bike. Do not charge a wet, frozen, overheated, damaged, or abnormal battery, and remain present while it charges.',
    },
    {
      title: 'Inspect the pack without opening it',
      body:
        'With the system off, look for swelling, cracks, impact damage, leakage, discoloration, contaminated contacts, corrosion, or signs of water entry. Do not open, press, puncture, or attempt to rebuild the pack.',
      destinationProblemSlug: 'e-bike-battery-got-wet',
    },
    {
      title: 'Arrange a battery and system diagnostic',
      body:
        'Ask an authorized e-bike service provider to check stored errors, battery health or usable capacity, charging behavior, electrical contacts, wiring, firmware, and the bike’s mechanical condition. Also check the model and battery against current safety warnings and recalls.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The battery case is swollen or changing shape',
      description: 'A deformed lithium-ion battery should not remain in use or be pressed back into shape.',
      severity: 'danger',
    },
    {
      title: 'The battery or charger becomes unusually hot',
      description:
        'Stop charging and disconnect power if that can be done safely. Rapid heating with odor, noise, smoke, or deformation is an emergency warning.',
      severity: 'danger',
    },
    {
      title: 'There is smoke, hissing, popping, or a strong unusual odor',
      description:
        'Do not continue handling or charging the pack. Move away and call emergency services if there is smoke, fire, rapid heating, or violent venting.',
      severity: 'danger',
    },
    {
      title: 'The pack is leaking, discolored, cracked, or visibly damaged',
      description:
        'Manufacturer guidance warns against using batteries with leakage, deformation, external damage, or other abnormalities.',
      severity: 'danger',
    },
    {
      title: 'The battery was flooded, soaked, crushed, or punctured',
      description:
        'Physical damage and water entry can compromise cells, wiring, insulation, contacts, or the battery-management system even if the pack still powers the bike.',
      severity: 'danger',
    },
    {
      title: 'Charging produces an error or never finishes normally',
      description:
        'Disconnect the charger and follow the exact system manual. Do not repeatedly restart an abnormal charging process.',
      severity: 'warning',
    },
    {
      title: 'Assistance cuts out or the charge reading plunges while riding',
      description:
        'Unexpected shutdown deserves prompt diagnosis, particularly if it occurs in moderate temperatures or with substantial charge remaining.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can cold weather suddenly reduce e-bike range?',
      answer:
        'Yes. Battery output and usable range can fall in cold conditions. Shimano also says charging in a low-temperature environment can shorten maximum riding distance, with normal distance returning after charging at room temperature.',
    },
    {
      question: 'Is the displayed remaining range a battery-health measurement?',
      answer:
        'No. It is an estimate influenced by assist level and riding conditions. A proper battery-health or capacity check uses system data or diagnostic equipment.',
    },
    {
      question: 'Can leaving the battery fully charged during storage cause the drop?',
      answer:
        'Extended storage at a high charge can add stress, which is why manufacturers commonly specify a partial storage charge. It does not prove that a sudden loss came from storage; compare actual performance and obtain a diagnostic if the loss persists.',
    },
    {
      question: 'Should I fully drain the battery to recalibrate it?',
      answer:
        'Not unless the manual for your exact system instructs you to. Forced deep discharge can be harmful, and no universal e-bike battery recalibration procedure applies to every brand.',
    },
    {
      question: 'Can low tire pressure really make that much difference?',
      answer:
        'It can noticeably increase rolling resistance, especially when combined with hills, wind, cargo, and strong assist. Use the pressure range approved for the tire, rim, bike, and load.',
    },
    {
      question: 'How can I tell whether actual capacity has fallen?',
      answer:
        'Compare battery percentage used on familiar rides under similar conditions. For a reliable capacity assessment, use an authorized service provider with diagnostic tools approved for your drive system.',
    },
    {
      question: 'Is it safe to ride while I investigate?',
      answer:
        'Limited riding may be reasonable if operation is stable, charging is normal, and there is no damage, heat, odor, leakage, noise, smoke, error, or cutout. Do not depend on uncertain range for an isolated or traffic-critical trip.',
    },
    {
      question: 'Does a sudden range drop mean I need a new battery immediately?',
      answer:
        'No. First rule out the estimate, cold, tire pressure, mechanical drag, changed assist, incomplete charging, and system errors. Replace the battery if diagnostics confirm inadequate capacity or a nonrepairable battery fault.',
    },
    {
      question: 'Can an e-bike battery pack be opened or rebuilt?',
      answer:
        'Do not open or rebuild it yourself. The cells, insulation, connections, enclosure, and battery-management system are safety-critical, and improper work can create short-circuit and fire hazards.',
    },
    {
      question: 'Why does the battery drop to empty only during strong assist?',
      answer:
        'Cold temperature and high demand at a low charge can cause a voltage drop or protective shutdown on some systems. Reduce assistance and charge the battery as directed, but seek service if it repeats in ordinary conditions.',
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
        'Advises following manufacturer charging instructions, remaining present while charging, using only approved chargers and replacement packs, avoiding modified batteries, and keeping lithium batteries out of household trash and general recycling.',
    },
    {
      publisher: 'New York City Department of Transportation',
      title: 'Electric Bicycles & More',
      url: 'https://www.nyc.gov/html/dot/html/bicyclists/ebikes.shtml',
      sourceType: 'government',
      notes:
        'Lists overheating, odor, shape or color changes, leakage, and odd noises as reasons to stop using a lithium-ion battery immediately, and advises emergency action for battery fires.',
    },
    {
      publisher: 'Shimano',
      title: 'SHIMANO STEPS Special Battery and Parts User’s Manual UM-70F5A',
      url: 'https://si.shimano.com/en/pdfs/um/70F5A/UM-70F5A.pdf',
      sourceType: 'manufacturer',
      notes:
        'Covers cold-temperature range effects, accurate charge display after full charging, storage guidance, recovery after prolonged storage, gradual capacity loss, end-of-life symptoms, charging faults, physical damage, and abnormal battery conditions.',
    },
    {
      publisher: 'Shimano',
      title: 'SHIMANO STEPS Battery Charger User’s Manual UM-7K10A',
      url: 'https://si.shimano.com/en/pdfs/um/7K10A/UM-7K10A-002-ENG.pdf',
      sourceType: 'manufacturer',
      notes:
        'Explains battery-level indicators and fault patterns for overcurrent protection, temperature protection, battery recognition, charging errors, and electrical abnormalities, with instructions to seek service when faults remain.',
    },
    {
      publisher: 'Giant Bicycles',
      title: 'E-bike User Manual Smart Gateway 2.0 V1.1',
      url: 'https://static.giant-bicycles.com/Manuals/E-bikeUsermanualSmartGateway20V11_en-EN_1771924079.pdf',
      sourceType: 'manufacturer',
      notes:
        'Defines remaining range as an estimate based on the selected assist level and states that terrain, rider condition, riding style, weather, and wind can change actual range.',
    },
    {
      publisher: 'Giant Bicycles',
      title: 'E-bike User Manual V10.0',
      url: 'https://static.giant-bicycles.com/Manuals/E-bikeUsermanualV100_en-EN_1735039859.pdf',
      sourceType: 'manufacturer',
      notes:
        'Provides approved-charger guidance and states that improper storage temperature or long-term neglect can reduce battery health and capacity or cause defects.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Owner’s manual for the exact battery and drive system',
      description:
        'Provides the approved charger, temperature limits, storage charge, indicator meanings, reset steps, and model-specific troubleshooting.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Accurate bicycle tire gauge',
      description:
        'Helps rule out underinflation as a source of increased rolling resistance and apparent range loss.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Authorized e-bike diagnostic service',
      description:
        'Can read system faults, check firmware and electrical connections, assess charging behavior, and measure battery health with compatible equipment.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Original or manufacturer-approved charger',
      description:
        'The charger must match the exact battery system and charging protocol; a connector that fits does not establish compatibility.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'e-bike-assist-feels-weak',
      anchorText: 'Could weak pedal assist be causing the shorter range?',
      relationshipType: 'sibling',
    },
    {
      slug: 'e-bike-cuts-out-while-riding',
      anchorText: 'My e-bike cuts out while I am riding',
      relationshipType: 'escalation',
    },
    {
      slug: 'e-bike-battery-left-over-winter',
      anchorText: 'What if the battery was left unused over winter?',
      relationshipType: 'cause',
    },
    {
      slug: 'e-bike-battery-got-wet',
      anchorText: 'What if my e-bike battery got wet?',
      relationshipType: 'escalation',
    },
    {
      slug: 'swollen-e-bike-battery',
      anchorText: 'Is a swollen e-bike battery safe to charge?',
      relationshipType: 'escalation',
    },
  ],
};
