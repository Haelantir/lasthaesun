import type { ProblemSeed } from '../types';

export const carJerksWhenAccelerating: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'transmission',
  slug: 'car-jerks-when-accelerating',
  canonicalPath: '/cars/transmission/car-jerks-when-accelerating/',
  name: 'Car Jerks When Accelerating',
  eyebrow: 'Mobility · Cars · Transmission',

  h1: 'Can I Ignore a Car That Jerks When Accelerating?',
  seoTitle: 'Car Jerks When Accelerating: When to Stop Driving',
  metaDescription:
    'Repeated jerking under acceleration can point to an engine or transmission fault. See when you can drive briefly and when to stop.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep driving?',
  canIUseItLabel: 'Usually only briefly',

  shortAnswer:
    'Probably not. A one-off bump can be harmless, but repeated jerking when you press the accelerator means the powertrain is not delivering power smoothly. Drive gently only if the car otherwise feels normal, and stop if you get a flashing warning light, major power loss, stalling, or violent shuddering.',

  whyItMattersHeading: 'Why Does Jerking Under Acceleration Matter?',
  whyItMatters: [
    'Acceleration puts the engine and transmission under load. A misfire can show up as stumbling or repeated surging, while a transmission or powertrain fault can make shifts harsh or interrupt power delivery. The symptom alone cannot tell you which system is responsible.',
    'Some vehicles also have normal behaviors that can feel abrupt. Manufacturer guidance for certain dual-clutch transmissions describes more noticeable low-speed shifts and light vibration, and traction control can deliberately reduce engine power when the drive wheels slip. The useful question is whether the jerk matches a known operating condition or keeps happening on dry pavement during ordinary acceleration.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Get Help If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Checked against EPA OBD guidance and manufacturer owner guidance for misfire, powertrain warnings, traction control, and dual-clutch behavior.',
  disclaimer:
    'General automotive triage only. Jerking under acceleration can have several causes that cannot be identified from the symptom alone. Follow vehicle-specific warning messages and service information, and stop driving if power delivery becomes unsafe or unpredictable.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'repeated-jerk-normal-acceleration',
      label: 'It jerks repeatedly during normal acceleration',
      shortDescription:
        'The car bucks or hesitates more than once when you press the accelerator on a normal dry road.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'GET THE POWERTRAIN CHECKED',
      resultBody:
        'Repeated jerking is not something to diagnose by feel alone. Engine misfire, transmission behavior, or another powertrain fault can produce a similar sensation.',
      recommendedAction:
        'Avoid hard acceleration and arrange diagnosis. Note whether the RPM jumps, the engine shakes, or the jerk lines up with a gear change.',
    },
    {
      slug: 'flashing-check-engine-light',
      label: 'The check engine light is flashing',
      shortDescription:
        'The car jerks or runs rough and the check engine light flashes while the engine is running.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'MINIMIZE DRIVING',
      resultBody:
        'EPA guidance says a flashing malfunction indicator can signal a severe engine misfire that can damage the catalytic converter.',
      recommendedAction:
        'Reduce speed and engine load. Stop safely if the engine runs badly or the car cannot maintain safe progress, and arrange prompt service.',
    },
    {
      slug: 'steady-check-engine-light',
      label: 'The check engine light is steady',
      shortDescription: 'The car still accelerates, but it jerks and the check engine light stays on.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'READ THE CODE SOON',
      resultBody:
        'A steady light means the OBD system has detected a fault. The jerking means the car is also showing a driveability symptom, so do not treat the light as incidental.',
      recommendedAction:
        'Keep driving to a minimum, avoid heavy throttle, and have the stored diagnostic code read.',
    },
    {
      slug: 'rpm-flares-without-speed',
      label: 'The RPM jumps but the car does not accelerate normally',
      shortDescription: 'Engine speed rises sharply, then the car catches, jerks, or finally accelerates.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DO NOT KEEP TESTING IT',
      resultBody:
        'If engine speed rises sharply without a matching increase in vehicle speed and the car then jerks or catches, the powertrain is not responding normally and needs diagnosis.',
      recommendedAction:
        'Avoid hard acceleration and unnecessary driving. Arrange powertrain diagnosis before the symptom gets worse.',
    },
    {
      slug: 'powertrain-warning',
      label: 'A transmission or powertrain warning appears',
      shortDescription: 'The jerking comes with a transmission, powertrain, or reduced-power warning.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'FOLLOW THE WARNING',
      resultBody:
        'Manufacturer guidance treats these warnings as faults that need service, and some vehicles may reduce power to protect the powertrain.',
      recommendedAction:
        "Ease off the accelerator and follow the vehicle owner's manual. Stop if the vehicle cannot maintain speed safely or the warning tells you to stop.",
    },
    {
      slug: 'near-stall-or-major-power-loss',
      label: 'The car nearly stalls or loses major power',
      shortDescription:
        'Acceleration becomes unpredictable, the engine nearly dies, or the car cannot keep up with traffic.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP WHEN IT IS SAFE',
      resultBody:
        'Once the car cannot deliver predictable power, the problem is no longer just about comfort or repair cost. Safe merging and crossing traffic may be affected.',
      recommendedAction:
        'Move out of traffic without demanding more acceleration. Stop in a safe place and arrange roadside help or service.',
    },
    {
      slug: 'traction-control-on-slippery-road',
      label: 'It happened only on a slippery or loose surface',
      shortDescription:
        'The traction-control indicator flashed and the car felt normal again once grip returned.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'THIS MAY BE TRACTION CONTROL',
      resultBody:
        'Traction control can apply braking and reduce engine power when the drive wheels slip, which can feel like a brief interruption in acceleration.',
      recommendedAction:
        'Ease off the accelerator and drive for the surface conditions. If the jerking also happens on dry pavement with normal traction, treat it as a separate fault.',
    },
    {
      slug: 'known-dct-characteristic',
      label: "Your owner's manual describes similar dual-clutch behavior",
      shortDescription:
        'The sensation occurs at low speed or during a shift and matches the normal behavior described for your specific transmission.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'IT MAY BE NORMAL FOR THAT TRANSMISSION',
      resultBody:
        'Some dual-clutch owner manuals say shifts can feel more noticeable and that light vibration or low-speed jerkiness can occur as the clutches engage.',
      recommendedAction:
        "Compare the behavior with your own owner's manual. If it becomes stronger, appears at new speeds, or comes with a warning light, have it checked.",
    },
    {
      slug: 'started-after-transmission-service',
      label: 'It started after transmission or powertrain work',
      shortDescription: 'The car did not jerk before recent repair, software, clutch, or transmission work.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'TAKE IT BACK FOR A RECHECK',
      resultBody:
        'A new symptom that appears after service deserves a direct recheck because the shop can compare it with the work that was just performed.',
      recommendedAction:
        'Avoid hard acceleration and contact the shop that performed the work. Tell them exactly when the jerk occurs and whether any warning lights appear.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Power delivery becomes uneven',
      description:
        'The car hesitates, bucks, or changes speed more abruptly than your accelerator input suggests.',
      severity: 'caution',
      chainLabel: 'Jerking begins',
    },
    {
      stageLabel: 'IF THE CAUSE IS AN ENGINE MISFIRE',
      title: 'Combustion becomes unstable',
      description:
        'A misfire can make the engine stumble under load. If severe enough to trigger a flashing malfunction indicator, EPA guidance calls for prompt attention.',
      severity: 'warning',
      chainLabel: 'Engine fault',
    },
    {
      stageLabel: 'IF THE CAUSE IS A POWERTRAIN FAULT',
      title: 'Shifts or available power can deteriorate',
      description:
        'Manufacturer guidance for powertrain and transmission warnings may call for reduced acceleration and prompt service.',
      severity: 'warning',
      chainLabel: 'Powertrain fault',
    },
    {
      stageLabel: 'IF YOU KEEP PUSHING A SEVERE MISFIRE',
      title: 'The catalytic converter can be damaged',
      description:
        'EPA guidance warns that severe misfire can raise exhaust temperatures enough to damage emission-control components, especially the catalytic converter.',
      severity: 'danger',
      chainLabel: 'More damage',
    },
    {
      stageLabel: 'IF POWER BECOMES UNPREDICTABLE',
      title: 'Driving can become unsafe',
      description:
        'Major power loss, near-stalling, or an inability to accelerate predictably can make merging or crossing traffic unsafe.',
      severity: 'danger',
      chainLabel: 'Stop driving',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One mild bump happened once and the car now feels completely normal',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Pay attention on the next normal drive. If the jerk repeats, treat it as a real symptom and arrange diagnosis.',
    },
    {
      situation: 'The car repeatedly jerks on dry pavement during ordinary acceleration',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Avoid hard acceleration and schedule a powertrain diagnosis.',
    },
    {
      situation: 'The check engine light is steady and the car is jerking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Minimize driving and have the stored OBD code read soon.',
    },
    {
      situation: 'The check engine light is flashing',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Reduce speed and engine load. Stop safely if the engine runs badly or the car cannot maintain safe speed.',
    },
    {
      situation: 'A transmission or powertrain warning appears',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: "Follow the owner's manual and avoid heavy acceleration. Arrange prompt service.",
    },
    {
      situation: 'The car nearly stalls or loses enough power that traffic becomes hard to match',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Get out of traffic safely and arrange roadside help or service.',
    },
    {
      situation: 'The jerk occurs only when traction control activates on a slippery surface',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Reduce throttle and drive for the available grip. Investigate it if the same symptom appears on dry pavement.',
    },
    {
      situation: "Your owner's manual says the same low-speed dual-clutch behavior is normal",
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Use the vehicle-specific guidance. Have it checked if the behavior changes or warning lights appear.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Ease off hard acceleration',
      body:
        'Do not repeatedly floor the accelerator to reproduce the symptom. Drive gently until you know whether the problem is engine, transmission, or traction-control related.',
    },
    {
      title: 'Check the warning lights',
      body:
        "A flashing check engine light, transmission warning, or reduced-power message changes the urgency. Follow the owner's manual for the warning shown.",
      destinationProblemSlug: 'check-engine-light',
    },
    {
      title: 'Watch the RPM and gear-change pattern',
      body:
        'Note whether RPM rises without matching vehicle speed, whether the engine shakes, and whether the jerk happens exactly as the transmission shifts. That pattern gives a repair shop useful diagnostic information.',
      destinationProblemSlug: 'engine-rpm-surging',
    },
    {
      title: 'Read stored OBD codes when the check engine light is on',
      body:
        'A scan tool can retrieve the stored diagnostic trouble code. The code narrows the search but does not prove that a particular part has failed.',
      destinationProblemSlug: 'check-engine-light',
    },
    {
      title: 'Look for a related transmission symptom',
      body:
        'If the car also delays before engaging Drive or Reverse, grinds during shifts, or shows a transmission-fluid leak, treat that as additional evidence that the transmission needs attention.',
      destinationProblemSlug: 'delayed-gear-engagement',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The check engine light is flashing',
      description: 'This can indicate a severe misfire that risks catalytic-converter damage.',
      severity: 'danger',
    },
    {
      title: 'The car nearly stalls',
      description: 'Unpredictable loss of engine power can make normal traffic maneuvers unsafe.',
      severity: 'danger',
    },
    {
      title: 'Major power loss',
      description: 'Stop if the car cannot maintain a safe speed or respond predictably to the accelerator.',
      severity: 'danger',
    },
    {
      title: 'A powertrain warning tells you to stop',
      description:
        "Follow the vehicle-specific warning and owner's manual rather than trying to drive through it.",
      severity: 'danger',
    },
    {
      title: 'Violent shuddering or banging',
      description: 'Strong new mechanical shock during acceleration or shifting needs prompt diagnosis.',
      severity: 'warning',
    },
    {
      title: 'A transmission warning is blinking',
      description:
        "Treat a blinking transmission warning as a fault and follow the vehicle-specific instructions in the owner's manual.",
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can worn spark plugs make a car jerk when accelerating?',
      answer:
        'Yes. EPA OBD guidance uses a poorly performing spark plug as an example of something that can cause an engine misfire. A scan code and proper diagnosis are still needed before replacing parts.',
    },
    {
      question: 'Can the transmission cause jerking when I accelerate?',
      answer:
        'Yes. Harsh or abnormal shifts can feel like jerking, and transmission warning guidance from manufacturers calls for service when a fault is detected.',
    },
    {
      question: 'Why does it jerk only when I accelerate hard?',
      answer:
        'Hard acceleration puts more load on the powertrain, so a problem may become easier to feel then. Do not keep flooring it as a test; note the pattern and have the cause diagnosed.',
    },
    {
      question: 'Is it safe if there is no warning light?',
      answer:
        'A missing warning light does not make repeated jerking normal. If it keeps happening on dry pavement during ordinary acceleration, get it checked.',
    },
    {
      question: 'Can traction control make the car feel like it is jerking?',
      answer:
        'Yes. On slippery or loose surfaces, traction control can reduce engine power and apply braking to limit wheelspin. That brief intervention is different from repeated jerking on a normal dry road.',
    },
    {
      question: 'Can a dual-clutch transmission feel jerky even when nothing is wrong?',
      answer:
        "On some vehicles, yes. Manufacturer owner manuals describe more noticeable low-speed shifts, light vibration, and some jerkiness as normal DCT characteristics. Check your own model's manual before assuming that applies to your car.",
    },
    {
      question: 'Should I scan the car if the check engine light is on?',
      answer:
        'Yes. Reading the stored OBD code is useful, but the code identifies a monitored fault area rather than proving that one specific part has failed.',
    },
    {
      question: 'What if the RPM jumps but the car barely speeds up?',
      answer:
        'Avoid hard acceleration and get the powertrain checked. A large mismatch between engine speed and vehicle acceleration needs diagnosis rather than repeated road testing.',
    },
    {
      question: 'Could this be normal after recent transmission work?',
      answer:
        "Do not assume so. If the symptom started immediately after service, contact the shop and have the work rechecked against the vehicle's service information.",
    },
    {
      question: 'Can I keep driving if the car only jerks once in a while?',
      answer:
        'A single mild bump with no other symptom may be something to watch. Repeated jerking, warning lights, power loss, or worsening behavior should move it into the get-it-checked category.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Environmental Fact Sheet Frequently Asked Questions About On-Board Diagnostics',
      url: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1009Z15.TXT',
      sourceType: 'government',
      notes:
        'Explains that a flashing malfunction indicator can signal severe engine misfire, advises reducing speed and seeking service, and notes that misfire can damage the catalytic converter.',
    },
    {
      publisher: 'Honda',
      title: 'Shifting | CR-V 2025 | Honda Owners Manual',
      url: 'https://techinfo.honda.com/rjanisis/pubs/OM/AH/A3A02525IOM/enu/details/131240047-386916.html',
      sourceType: 'manufacturer',
      notes:
        'States that a blinking transmission-system indicator signals a transmission problem and advises avoiding sudden acceleration and having the transmission checked.',
    },
    {
      publisher: 'Hyundai',
      title: 'Dual clutch transmission operation',
      url: 'https://ownersmanual.hyundai.com/docview/webhelp/Hyundai/5375bf28-c9d4-4116-920b-b92a819711e6/idc5b4e91727a.html',
      sourceType: 'manufacturer',
      notes:
        'Describes more noticeable shifts, light vibration, and some low-speed jerkiness as normal characteristics on the covered dual-clutch transmission. Used only as a vehicle-specific example.',
    },
    {
      publisher: 'Ford Motor Company',
      title: 'Starting and Stopping the Engine – Warning Lamps',
      url: 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G2144297&Uid=G2144294&buildType=web&countryCode=USA&div=f&languageCode=EN&userMarket=USA&vCode=&vFilteringEnabled=False&variantid=9535',
      sourceType: 'manufacturer',
      notes:
        'Says flashing engine or powertrain warning lamps require reduced speed, avoidance of heavy acceleration, and prompt service; some combined warnings call for stopping safely.',
    },
    {
      publisher: 'Ford Motor Company',
      title: 'Traction Control - Principle of Operation',
      url: 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G1448586&Uid=G1518964&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G539571&userMarket=usa&vFilteringEnabled=False&variantid=4670',
      sourceType: 'manufacturer',
      notes:
        'Explains that traction control can apply individual wheel braking and reduce engine power when drive wheels slip during acceleration.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'OBD-II scan tool',
      description: 'Retrieves stored diagnostic trouble codes when the check engine light is on.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual",
      description:
        'The best source for model-specific transmission behavior, warning lights, reduced-power messages, and traction-control operation.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Powertrain diagnostic service',
      description:
        'Useful when the symptom is repeatable, severe, or paired with warning lights, power loss, or abnormal shifting.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'check-engine-light',
      anchorText: 'Is the check engine light on too?',
      relationshipType: 'related',
    },
    {
      slug: 'engine-rpm-surging',
      anchorText: 'Does the engine RPM surge up and down?',
      relationshipType: 'cause',
    },
    { slug: 'rough-idle', anchorText: 'Does the engine also run rough at idle?', relationshipType: 'related' },
    {
      slug: 'delayed-gear-engagement',
      anchorText: 'Does the transmission hesitate before engaging?',
      relationshipType: 'related',
    },
    {
      slug: 'grinding-when-shifting',
      anchorText: 'Do you hear grinding when the car shifts?',
      relationshipType: 'escalation',
    },
  ],
};
