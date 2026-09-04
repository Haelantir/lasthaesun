import type { ProblemSeed } from '../types';

export const crookedSteeringWheel: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'steering',
  slug: 'crooked-steering-wheel',
  canonicalPath: '/cars/steering/crooked-steering-wheel/',
  name: 'Crooked Steering Wheel While Driving Straight',
  eyebrow: 'Mobility · Cars · Steering',

  h1: 'Can I Ignore a Steering Wheel That Sits Crooked When the Car Drives Straight?',
  seoTitle: 'Crooked Steering Wheel After Alignment: Safe to Drive or Recheck?',
  metaDescription:
    'A crooked steering wheel with straight tracking is usually drivable briefly, but it deserves an alignment recheck—especially after tire or steering work.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep driving?',
  canIUseItLabel: 'Yes, briefly, if steering feels normal',

  shortAnswer:
    'Usually, for limited driving. If the car tracks straight, the steering feels firm and smooth, and there are no warnings or tire problems, an off-center wheel is not usually an immediate stop-driving issue. Still, return to the shop for an alignment and steering-center recheck rather than accepting it as normal.',

  whyItMattersHeading: 'Why an Off-Center Wheel Still Needs a Recheck',
  whyItMatters: [
    'The steering wheel should be centered when the vehicle travels straight on a flat road. A consistently tilted wheel often means the straight-ahead position was not set correctly during toe adjustment, even if the car does not pull. Road crown can create a false impression, so the symptom should be confirmed on a suitable flat surface.',
    'The spoke position alone does not prove the car is unsafe or that every alignment angle is wrong. The same symptom can, however, accompany incorrect toe, an unwanted thrust angle, worn or damaged parts, or an electronic steering reset that the vehicle manufacturer requires after alignment. A proper recheck separates a cosmetic centering error from a broader alignment or steering problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Get Help If:',

  lastReviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Checked against NHTSA tire-safety guidance and current OEM and alignment-equipment material on off-center steering wheels, toe adjustment, road crown and sensor resets.',
  disclaimer:
    'This is general triage guidance, not an inspection of your vehicle. If steering response or vehicle control changes, stop somewhere safe and arrange professional diagnosis.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'only-crooked-on-crowned-roads',
      label: 'The wheel looks crooked only on sloped or crowned roads',
      shortDescription:
        'It returns to center on a flat road, and the vehicle has no consistent pull or steering change.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Road shape may explain it',
      resultBody:
        'A crowned road slopes toward the shoulder, so a small steering input may be needed to keep the vehicle on course. If the wheel sits level on a genuinely flat road, this is not a confirmed off-center condition.',
      recommendedAction:
        'Check again on a safe, flat road with little crosswind. Keep both hands on the wheel and judge whether the offset remains while maintaining a straight path.',
    },
    {
      slug: 'offset-is-getting-worse',
      label: 'The wheel is becoming more crooked',
      shortDescription:
        'The car still appears to track straight, but the resting position has changed or continues to move farther from center.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A changing symptom needs inspection',
      resultBody:
        'A centering error from one service visit should not continue changing. Increasing offset can indicate that alignment is shifting or that a steering or suspension connection needs inspection.',
      recommendedAction:
        'Avoid treating the new position as cosmetic. Arrange an alignment, steering and suspension check and explain that the offset is progressing.',
    },
    {
      slug: 'after-steering-component-service',
      label: 'It started after tie-rod, steering or suspension work',
      shortDescription:
        'The wheel became crooked after a component affecting wheel position or steering geometry was replaced or loosened.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The service needs to be verified',
      resultBody:
        'Work involving tie rods and other steering or suspension parts can change alignment geometry. The repair may need a mechanical alignment check and, on some vehicles, a model-specific electronic steering reset.',
      recommendedAction:
        'Return to the repair facility before resuming routine driving. Ask for the installation, fasteners, alignment measurements and required calibration steps to be verified.',
    },
    {
      slug: 'uneven-tire-wear',
      label: 'The tires are wearing unevenly',
      shortDescription:
        'One edge, one tire or an axle shows noticeably different tread wear along with the crooked wheel.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'This may be more than spoke position',
      resultBody:
        'Irregular tread wear can indicate that the wheels are not meeting the road at the intended angles. Continued use may waste tire life, and severe wear can make a tire unsuitable for service.',
      recommendedAction:
        'Have the tires inspected and request a four-wheel alignment measurement. Replace any tire that is damaged or worn beyond its service limit.',
    },
    {
      slug: 'started-after-impact',
      label: 'It began after a pothole, curb strike or collision',
      shortDescription:
        'The steering wheel position changed immediately after an impact involving the tire, wheel or suspension.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Rule out impact damage',
      resultBody:
        'An impact can disturb alignment or damage a tire, wheel, steering part or suspension component. Straight tracking does not rule out hidden damage.',
      recommendedAction:
        'Inspect the tires and wheels without crawling under an unsecured vehicle. Arrange a professional alignment and damage check before normal driving.',
    },
    {
      slug: 'pull-wander-or-vibration',
      label: 'The car also pulls, wanders or vibrates',
      shortDescription:
        'Holding a straight course requires correction, or the steering wheel and vehicle shake while moving.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is no longer an isolated centering issue',
      resultBody:
        'Pulling, wandering or vibration broadens the possible causes to tire, wheel, alignment, steering and suspension faults. Vehicle control may become less predictable if the condition worsens.',
      recommendedAction:
        'Reduce speed and stop somewhere safe if the vehicle feels unstable. Check the tires and arrange inspection before continuing normal driving.',
    },
    {
      slug: 'warning-light-after-service',
      label: 'A steering, stability-control, ABS or driver-assist warning appeared',
      shortDescription:
        'A dashboard warning or system-unavailable message appeared with the crooked wheel after alignment or steering work.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A calibration or system fault may be present',
      resultBody:
        'Certain vehicles require steering-system resets after alignment. A warning means the vehicle has detected a problem and relevant stability or assistance functions may not be operating normally.',
      recommendedAction:
        'Follow the warning message and contact the shop or dealer for a diagnostic scan and model-specific calibration check. Tow the car if steering or braking behavior has changed.',
    },
    {
      slug: 'loose-stiff-or-binding-steering',
      label: 'The steering feels loose, stiff, binding or unresponsive',
      shortDescription:
        'There is play, resistance, failure to return normally or a delay between steering input and vehicle response.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop treating this as an alignment annoyance',
      resultBody:
        'Abnormal steering feel can indicate a mechanical or power-steering fault that affects control. It does not fit a harmless spoke-centering complaint.',
      recommendedAction:
        'Pull over safely and stop driving. Arrange roadside assistance and have the steering and suspension inspected before the vehicle is used again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The visual reference is misleading',
      description:
        'The vehicle may travel straight while the spokes remain tilted. That is uncomfortable and can make it harder to judge the true straight-ahead position, but it does not by itself prove the vehicle is pulling.',
      severity: 'info',
      chainLabel: 'Straight travel → tilted wheel',
    },
    {
      stageLabel: 'IF THE CENTERING PROCEDURE WAS INCOMPLETE',
      title: 'The alignment can remain unfinished',
      description:
        'The front toe may need to be adjusted with the steering wheel correctly centered. A road test should then confirm that both the vehicle and wheel point straight.',
      severity: 'caution',
      chainLabel: 'Poor centering → repeat adjustment',
    },
    {
      stageLabel: 'IF ALIGNMENT ANGLES ARE ACTUALLY WRONG',
      title: 'Tire wear can become irregular',
      description:
        'Incorrect toe or other out-of-specification geometry can make the tread scrub or carry load unevenly, shortening useful tire life.',
      severity: 'warning',
      chainLabel: 'Bad geometry → tread wear',
    },
    {
      stageLabel: 'IF A REQUIRED RESET WAS SKIPPED',
      title: 'Electronic systems may report a fault',
      description:
        'On vehicles whose procedures require a steering-angle or related system reset, incomplete calibration can trigger warnings or affect the expected operation of stability and driver-assistance features.',
      severity: 'warning',
      chainLabel: 'Missed reset → system warning',
    },
    {
      stageLabel: 'IF DAMAGE OR LOOSENESS IS THE REAL CAUSE',
      title: 'Steering control can deteriorate',
      description:
        'A worsening offset accompanied by pulling, play, binding, vibration or impact damage may reflect a fault that reduces predictable vehicle control.',
      severity: 'danger',
      chainLabel: 'Mechanical fault → control risk',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The wheel is tilted only on crowned roads and centers on a flat road',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Confirm the behavior on a safe, flat surface with little crosswind. No repair is indicated if the wheel consistently centers there and no other symptoms appear.',
    },
    {
      situation: 'It is slightly off-center after an alignment, but the car is stable and warning-free',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Contact the alignment shop and arrange a centering recheck. Limited driving is reasonable while the steering, tires and vehicle behavior remain normal.',
    },
    {
      situation: 'The wheel has a small, unchanged offset with no recent impact or repair',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Check tire pressure and tread, then schedule an alignment measurement. Do not assume that straight tracking proves every setting is correct.',
    },
    {
      situation: 'It appeared after new tires or a tire rotation',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Verify pressures against the door placard and inspect the tires. Return to the installer if the offset remains on a flat road.',
    },
    {
      situation: 'It appeared after steering or suspension parts were serviced',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Have the work and alignment checked before routine driving. Ask whether the vehicle’s service procedure calls for an electronic steering reset.',
    },
    {
      situation: 'The crooked wheel comes with irregular tire wear',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange a tire and four-wheel alignment inspection. Do not keep using a tire with exposed material, a bulge or severe edge wear.',
    },
    {
      situation: 'The position changed after a pothole, curb strike or collision',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check for visible tire or wheel damage and have the alignment, steering and suspension inspected.',
    },
    {
      situation: 'There is pulling, vibration, abnormal steering feel or a warning light',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop normal driving. Pull over if control feels abnormal and use roadside assistance when the vehicle cannot be moved safely.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm that the wheel is truly off-center',
      body:
        'Check the position while maintaining a straight course on a safe, flat road with little crosswind. Do not release the steering wheel as a test. A wheel that is tilted only on crowned roads may be responding normally to road slope.',
    },
    {
      title: 'Check tire pressure and visible condition',
      body:
        'Compare every tire with the cold-pressure specification on the driver-door placard or in the owner’s manual. Look for uneven wear, a low tire, cuts, bulges or impact damage.',
      destinationProblemSlug: 'low-tire-pressure',
    },
    {
      title: 'Document when the problem started',
      body:
        'Photograph the steering wheel while the vehicle is safely parked, and tell the shop whether the change followed an alignment, tire installation, component replacement or impact. Keep the alignment printout and repair order if available.',
    },
    {
      title: 'Return for a complete alignment recheck',
      body:
        'Ask the shop to verify all alignment measurements, individual front toe, rear thrust angle and steering-wheel centering. The wheel should be centered during adjustment and confirmed by a road test.',
      destinationProblemSlug: 'uneven-tire-wear',
    },
    {
      title: 'Report any symptom beyond spoke position',
      body:
        'Tell the shop immediately if the car pulls, wanders, vibrates or develops unusual steering feel. Those symptoms need broader diagnosis rather than another cosmetic centering attempt.',
      destinationProblemSlug: 'car-pulls-to-one-side',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The car suddenly pulls or will not hold its lane',
      description:
        'A sudden directional change can come from a tire, steering, suspension or brake problem rather than a simple centering error.',
      severity: 'danger',
    },
    {
      title: 'The steering feels loose or does not respond normally',
      description: 'Play or delayed response can reduce control and requires mechanical inspection.',
      severity: 'danger',
    },
    {
      title: 'The wheel binds, becomes unusually heavy or will not return',
      description: 'Abnormal resistance or return action can indicate a steering-system fault.',
      severity: 'danger',
    },
    {
      title: 'A tire looks flat, bulged, cut or distorted',
      description: 'Visible tire damage or major pressure loss can lead to tire failure.',
      severity: 'danger',
    },
    {
      title: 'Heavy vibration, thumping or wheel movement begins',
      description:
        'These symptoms can indicate tire, wheel or mechanical damage and do not fit an isolated off-center steering wheel.',
      severity: 'warning',
    },
    {
      title: 'A steering, stability-control or ABS warning appears',
      description:
        'The vehicle may have detected a steering-angle, calibration or system fault. Follow the displayed instructions and arrange diagnosis.',
      severity: 'warning',
    },
    {
      title: 'Grinding or hard clunking follows an impact or repair',
      description:
        'New mechanical noise with a changed steering position calls for inspection before continued driving.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does straight tracking mean the alignment is definitely correct?',
      answer:
        'No. A vehicle can travel straight while the steering wheel remains off-center. Total toe may be acceptable while steering centering, individual toe or rear thrust angle still needs attention.',
    },
    {
      question: 'Why did this happen immediately after an alignment?',
      answer:
        'The wheel may not have been centered and held correctly during adjustment, the toe correction may be incomplete, or the final road test may not have caught the offset. Return to the shop for verification.',
    },
    {
      question: 'Can a crowned road make a good steering wheel look crooked?',
      answer:
        'Yes. Road slope can require a small steering input toward the higher side. Judge the wheel on a flat road with little crosswind before deciding it is mechanically off-center.',
    },
    {
      question: 'Can new tires or a tire rotation cause the wheel to sit differently?',
      answer:
        'Tire service does not normally change tie-rod adjustment, but pressure differences and tire forces can change how the vehicle tracks. Check pressures and have the installer recheck the car if the offset persists.',
    },
    {
      question: 'Will a crooked steering wheel ruin my tires?',
      answer:
        'The spoke position itself does not wear tires. Tire wear occurs if the underlying alignment geometry is wrong, which is why an alignment measurement matters.',
    },
    {
      question: 'Can the alignment printout show green readings while the wheel is crooked?',
      answer:
        'Yes. Readings can fall within listed ranges while the wheel-centering step or road-test result is unsatisfactory. Ask the shop to check individual toe, thrust angle and the actual straight-ahead wheel position.',
    },
    {
      question: 'Should I remove and reinstall the steering wheel to straighten it?',
      answer:
        'Usually not. On rack-and-pinion vehicles, manufacturers commonly correct off-center complaints through tie-rod or alignment procedures. Steering-wheel removal also involves the airbag, wiring and clock spring, so use the model-specific repair procedure.',
    },
    {
      question: 'Does every car need a steering-angle sensor reset after alignment?',
      answer:
        'No. Requirements vary by vehicle and by the work performed. The shop should follow the service information for your exact model, especially if a warning appeared after the alignment.',
    },
    {
      question: 'Is highway driving okay with a slightly crooked wheel?',
      answer:
        'Limited driving is usually reasonable if the vehicle remains stable, the steering feels completely normal, the tires are sound and no warnings are present. Avoid continued normal use if any handling symptom develops.',
    },
    {
      question: 'Should the shop that performed the alignment recheck it?',
      answer:
        'Yes. Contact the shop promptly, describe the flat-road behavior and ask for a road test and alignment recheck. Whether the adjustment is covered depends on the shop’s service policy.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Tire Safety Ratings and Awareness | TireWise',
      url: 'https://www.nhtsa.gov/vehicle-safety/tires',
      sourceType: 'government',
      notes:
        'States that wheel alignment is important for vehicle safety and tire life, helps prevent veering on a straight level road, and should be performed by qualified service personnel.',
    },
    {
      publisher: 'FCA US LLC',
      title: 'Steering Wheel Not Centered',
      url: 'https://static.nhtsa.gov/odi/tsbs/2015/MC-10148607-9999.pdf',
      sourceType: 'manufacturer',
      notes:
        'Separates an off-center steering wheel from a pull, calls for checks of pressure, tire wear and suspension damage, and describes correcting the condition through toe adjustment with the wheel centered.',
    },
    {
      publisher: 'Toyota Motor Sales, USA',
      title: 'Vehicle Pull, Steering Wheel Off Center, and Alignment Best Practices',
      url: 'https://static.nhtsa.gov/odi/tsbs/2020/MC-10177781-9999.pdf',
      sourceType: 'manufacturer',
      notes:
        'Defines steering-wheel off-center as straight vehicle travel without pulling and provides tie-rod adjustment procedures after inspection for tire, wheel, steering, suspension and collision issues.',
    },
    {
      publisher: 'Infiniti',
      title: 'Diagnosis of Vehicle Pull (Drift)',
      url: 'https://static.nhtsa.gov/odi/tsbs/2023/MC-10232643-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'Explains how road crown can affect wheel position, links off-center steering to uneven tie-rod adjustment or thrust angle, and calls for alignment measurement, road testing and sensor adjustment when required.',
    },
    {
      publisher: 'Stellantis US LLC',
      title: 'Steering Wheel Off Center. Diagnostic Trouble Code C0051-00 Set',
      url: 'https://static.nhtsa.gov/odi/tsbs/2025/MC-11015039-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'Provides a model-specific example in which an off-center wheel paired with a steering-position fault code requires steering-angle calibration and sensor-offset reset.',
    },
    {
      publisher: 'Hunter Engineering Company',
      title: 'Performing a Steering System Reset',
      url: 'https://www.hunter.com/media-center/industry-insights/steering-angle-sensor-reset/',
      sourceType: 'industry',
      notes:
        'Explains that certain vehicles require steering-system resets after alignment and that missed required resets may affect electronic stability or driver-assistance system operation.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Accurate tire-pressure gauge',
      description: 'Helps rule out pressure differences before the vehicle returns for alignment diagnosis.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Four-wheel alignment inspection',
      description:
        'Measures front and rear geometry, including toe and thrust angle, and allows the steering wheel to be centered against the vehicle’s actual direction of travel.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Vehicle-specific service information',
      description:
        'Identifies the correct alignment procedure and whether steering-angle or related electronic resets are required for the exact model.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Diagnostic scan and steering-system calibration',
      description:
        'Appropriate when a warning appears or the manufacturer requires an electronic reset after alignment or steering work.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'car-pulls-to-one-side',
      anchorText: 'Does the car also pull to one side?',
      relationshipType: 'escalation',
    },
    {
      slug: 'wheel-vibration',
      anchorText: 'Is the steering wheel vibrating too?',
      relationshipType: 'escalation',
    },
    { slug: 'uneven-tire-wear', anchorText: 'Are the tires wearing unevenly?', relationshipType: 'follow_up' },
    {
      slug: 'loose-steering-wheel',
      anchorText: 'Does the steering wheel have actual play?',
      relationshipType: 'escalation',
    },
  ],
};
