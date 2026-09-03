import type { ProblemSeed } from '../types';

export const weakElectricScooterBrakes: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'scooter-brakes',
  slug: 'weak-electric-scooter-brakes',
  canonicalPath: '/e-bikes-and-scooters/scooter-brakes/weak-electric-scooter-brakes/',
  name: 'Weak Electric Scooter Brakes',
  eyebrow: 'Mobility · E-bikes & Scooters · Scooter Brakes',

  h1: 'Can I Ignore Weak Brakes on an Electric Scooter?',
  seoTitle: 'Weak Electric Scooter Brakes: When to Stop Riding',
  metaDescription:
    'Weak scooter brakes can turn a routine stop into a crash. Learn when to stop riding, how wet conditions and regen change the answer, and what to check.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding it?',
  canIUseItLabel: 'No—walk or transport it',

  shortAnswer:
    'No. If the scooter takes more effort or more space to stop, the lever bottoms out, or braking has become weaker, stop riding and walk or transport it. Use it again only after the cause is corrected and the brakes pass a controlled low-speed check.',

  whyItMattersHeading: 'Weak Braking Removes Your Margin to Stop',
  whyItMatters: [
    'CPSC advises riders to check an e-scooter’s brakes before riding and learn how long that particular scooter takes to stop. A brake that feels weak or has changed leaves less margin for a pedestrian, vehicle, pothole, or other unexpected hazard.',
    'Scooter requirements in Ireland and UK rental guidance treat braking as measurable safety performance, with independent braking systems and defined stopping or deceleration criteria. Those requirements are not universal U.S. law, but they show why brakes that were weak from new, or regenerative braking without a working friction brake, should not be accepted as normal.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Brake safety guidance was checked against CPSC materials, UK and Irish braking requirements, and a manufacturer service manual.',
  disclaimer:
    'This page provides general safety triage, not model-specific repair instructions. Brake designs and local rules vary; follow the owner’s manual and any recall instructions.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'weak-since-new',
      label: 'The brakes have felt weak since the scooter was new',
      shortDescription:
        'The scooter has never stopped as firmly or predictably as expected, even though nothing recently changed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Weak from new is still a brake problem',
      resultBody:
        'A low price, small motor, or familiar soft feel does not prove that the scooter can stop safely. It may be misadjusted, defective, poorly matched to the rider and load, or simply unable to provide acceptable performance.',
      recommendedAction:
        'Do not enter traffic or descend hills on it. Compare the brake operation with the owner’s manual and contact the seller or manufacturer about adjustment, service, replacement, or return.',
    },
    {
      slug: 'braking-got-worse',
      label: 'The brakes have become weaker than they used to be',
      shortDescription: 'Stopping takes more effort or space, or the brake response has changed between rides.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A change in braking needs inspection',
      resultBody:
        'Worsening performance can follow wear, loosened adjustment, damage, contamination, cable trouble, a hydraulic problem, or an electrical braking fault. The symptom does not identify which one.',
      recommendedAction:
        'Stop riding and inspect the brake controls and visible components while parked. Arrange service before using the scooter normally again.',
    },
    {
      slug: 'lever-bottoms-out',
      label: 'The brake lever reaches the handlebar or grip',
      shortDescription:
        'The lever uses nearly all its travel before the brake produces adequate stopping force.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not ride with a bottoming lever',
      resultBody:
        'If the control runs out of travel before adequate braking develops, you may have no additional braking available when you need a harder stop.',
      recommendedAction:
        'Keep the scooter parked. Follow only the model-specific adjustment procedure or have the cable, hydraulic system, pads, caliper, drum, and lever checked.',
    },
    {
      slug: 'regen-only',
      label: 'Regenerative braking works, but the mechanical brake does not',
      shortDescription:
        'Motor drag slows the scooter, but the disc, drum, or other friction brake provides little or no stopping force.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Regenerative braking alone is not an acceptable backup',
      resultBody:
        'Electronic braking can vary with the scooter’s design and operating condition. Safety requirements that count regenerative braking as one system call for a separate friction brake, so do not rely on motor braking as your only way to stop.',
      recommendedAction:
        'Power the scooter off and walk or transport it. Restore the mechanical brake and verify both systems before riding.',
    },
    {
      slug: 'weak-only-wet',
      label: 'The brakes are weak only in rain or on wet pavement',
      shortDescription:
        'Dry stopping feels normal, but wet conditions produce delayed, longer, or less predictable braking.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Avoid wet riding until it is addressed',
      resultBody:
        'Wet surfaces reduce available traction, and water can change how some friction brakes respond. A scooter that cannot stop predictably in the conditions you encounter should not be used in those conditions.',
      recommendedAction:
        'Stay off wet roads, check the manual’s weather limitations, and have the brakes and tires inspected if the wet-weather change is substantial or persists after drying.',
    },
    {
      slug: 'shared-rental-scooter',
      label: 'A shared or rental scooter has weak brakes',
      shortDescription:
        'The scooter belongs to a rental service, campus fleet, hotel, workplace, or another shared program.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'End the ride and report the scooter',
      resultBody:
        'You do not know its maintenance history, and another rider may select it after you. Continuing the trip also means testing an unfamiliar faulty brake in public.',
      recommendedAction:
        'Stop in a safe location, end or pause the rental as the service directs, report the brake problem in the app or to the operator, and choose another scooter.',
    },
    {
      slug: 'braking-fades-downhill',
      label: 'Braking becomes weaker during a descent',
      shortDescription:
        'The scooter slows normally at first but loses braking force while going downhill or after repeated brake use.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop the descent',
      resultBody:
        'Continuing means relying on a braking system that is already changing under load while gravity keeps adding speed.',
      recommendedAction:
        'Stop at the first safe place without making an abrupt maneuver, get off, and walk the scooter. Have the braking system inspected before another descent.',
    },
    {
      slug: 'regen-feel-changed-only',
      label: 'Only regenerative slowing feels weaker',
      shortDescription:
        'Coast-down or electronic braking has changed, but the mechanical brake remains firm and controlled stopping is normal.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Separate a regen change from weak total braking',
      resultBody:
        'A change in regenerative braking is not identical to losing the service brake if the mechanical system still provides normal, predictable stopping. It still deserves investigation because the scooter is no longer behaving as expected.',
      recommendedAction:
        'Use the mechanical brake as the manual directs, avoid routes where you depend on regen, and check the model’s settings, warnings, battery conditions, and service guidance.',
    },
    {
      slug: 'unfamiliar-brake-feel',
      label: 'The brake feels less sharp than another scooter’s',
      shortDescription:
        'There is no known change or defect, and the scooter stops predictably, but its control feel is unfamiliar.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Learn the controls before entering traffic',
      resultBody:
        'Brake response and stopping distance vary among scooters. A different lever feel alone does not prove failure, but unfamiliarity can delay your response during an emergency.',
      recommendedAction:
        'Review the manual and practice controlled stops at walking pace in a level area free of traffic and obstacles. Do not ride around others until the response is predictable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Your stopping distance is uncertain',
      description:
        'Weak or changed braking means the space that used to be enough may no longer be enough, even if gentle stops still seem manageable.',
      severity: 'warning',
      chainLabel: 'Reduced stopping margin',
    },
    {
      stageLabel: 'DURING A SURPRISE STOP',
      title: 'The scooter may not slow fast enough',
      description:
        'A pedestrian, opening car door, turning vehicle, or surface hazard can demand more braking than a weak system can provide.',
      severity: 'danger',
      chainLabel: 'Hazard appears → braking falls short',
    },
    {
      stageLabel: 'IF ONE SYSTEM IS ALREADY LOST',
      title: 'There may be no effective backup',
      description:
        'A scooter designed around mechanical and electronic braking loses redundancy when either system is unavailable or severely reduced.',
      severity: 'danger',
      chainLabel: 'One brake lost → backup unavailable',
    },
    {
      stageLabel: 'ON WET OR SLOPED SURFACES',
      title: 'Control becomes less predictable',
      description:
        'Lower traction or a descent can increase the demand on a brake that is already marginal, raising the chance of sliding, overshooting, or losing balance.',
      severity: 'danger',
      chainLabel: 'Weak brake + demanding surface',
    },
    {
      stageLabel: 'IF BRAKING FAILS WHEN NEEDED',
      title: 'A collision or fall can cause serious injury',
      description:
        'CPSC recalls document brake failures that led to crashes and injuries. A helmet reduces some injury risk but does not restore stopping performance.',
      severity: 'danger',
      chainLabel: 'Brake failure → crash or fall',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The brakes have always been weak',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat the original performance as unverified, not normal. Contact the seller or manufacturer and keep the scooter out of traffic until it stops predictably.',
    },
    {
      situation: 'The braking has become worse',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop riding and arrange inspection. A change from previous performance is enough reason to keep it parked.',
    },
    {
      situation: 'Braking is weak only when wet',
      ignoreAnswer: 'No in wet conditions',
      severity: 'warning',
      whatToDo:
        'Avoid rain and wet pavement. Check weather limitations, tire condition, and brake service needs before relying on the scooter in the wet.',
    },
    {
      situation: 'The mechanical brake is dead but regen still slows the scooter',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Walk or transport the scooter. Electronic slowing is not a substitute for restoring the failed friction brake.',
    },
    {
      situation: 'Only regen changed and the mechanical brake is fully normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Avoid depending on regen, review model-specific guidance, and arrange diagnosis if the change remains or any warning appears.',
    },
    {
      situation: 'The repair shop or seller is nearby',
      ignoreAnswer: 'No—walk or transport it',
      severity: 'warning',
      whatToDo:
        'Do not make the trip into a brake test. Fold, walk, carry, or transport the scooter without riding it.',
    },
    {
      situation: 'The brakes were just adjusted or repaired',
      ignoreAnswer: 'Only after a controlled check',
      severity: 'caution',
      whatToDo:
        'Confirm the controls while parked, then begin at walking pace in a level traffic-free area. Stop if the lever bottoms out, braking is uneven, or stopping remains weak.',
    },
    {
      situation: 'A rental scooter has weak brakes',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'End the ride safely, report the scooter to the operator, and prevent it from being mistaken for a usable unit if the service provides a reporting method.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop riding without testing the brakes at speed',
      body:
        'Get off at a safe location, release the throttle, power the scooter down, and walk or transport it. A high-speed road test can turn a suspected problem into a crash.',
    },
    {
      title: 'Check both brake controls while the scooter is parked',
      body:
        'Look for a lever that bottoms out, a detached or frayed cable, loose hardware, a visibly displaced caliper, damaged braking surfaces, a hydraulic leak, tire damage, or an error warning. Do not make adjustments while the scooter is powered or moving.',
      destinationProblemSlug: 'scooter-brake-lever-goes-soft',
    },
    {
      title: 'Separate weak regenerative braking from weak total braking',
      body:
        'Identify which control operates the mechanical brake and whether it still stops the wheel firmly. Do not assume motor drag, an app setting, or a brake light proves that the friction brake works.',
      destinationProblemSlug: 'scooter-regen-braking-weaker',
    },
    {
      title: 'Use the model-specific repair procedure',
      body:
        'Brake cable tension, lever clearance, caliper alignment, hydraulic service, drum adjustment, and electronic settings differ by model. Follow the owner’s manual exactly or use a repair service familiar with that scooter.',
    },
    {
      title: 'Verify the repair before returning to normal use',
      body:
        'Check for firm control operation while parked, then make gentle stops starting at walking pace in an open, level area. Do not move into traffic, hills, or wet conditions until braking is strong, stable, and repeatable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The scooter provides little or no stopping force',
      description: 'Do not keep squeezing harder and continue riding. Get off and transport the scooter.',
      severity: 'danger',
    },
    {
      title: 'The brake lever reaches the grip',
      description:
        'A control that runs out of travel before adequate braking develops cannot provide dependable emergency braking.',
      severity: 'danger',
    },
    {
      title: 'One of the scooter’s braking systems does not respond',
      description:
        'Do not rely on the remaining brake or regenerative slowing as proof that normal use is safe.',
      severity: 'danger',
    },
    {
      title: 'Braking suddenly becomes worse',
      description:
        'A rapid change can indicate movement, damage, loss of adjustment, contamination, a control fault, or another problem that needs inspection.',
      severity: 'danger',
    },
    {
      title: 'A cable is frayed or detached, or hydraulic fluid is leaking',
      description: 'Visible damage or leakage can prevent the brake control from transmitting adequate force.',
      severity: 'danger',
    },
    {
      title: 'The scooter pulls, judders, locks a wheel, or brakes unpredictably',
      description: 'Unstable braking can cause a fall even when the scooter eventually stops.',
      severity: 'danger',
    },
    {
      title: 'The motor keeps driving when you apply the brake',
      description:
        'Release the throttle, stop as safely as possible, power the scooter off, and do not ride it again until the control fault is resolved.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can weak brakes be normal on a cheap electric scooter?',
      answer:
        'No. Price can affect components and feel, but it does not make inadequate or unpredictable stopping acceptable.',
    },
    {
      question: 'Can brand-new scooter brakes need bedding in?',
      answer:
        'Some friction brake systems have a model-specific bedding procedure. That procedure is not permission to ride with inadequate braking; follow the manual in a traffic-free area and stop if performance remains weak.',
    },
    {
      question: 'Can I tighten the brake cable myself?',
      answer:
        'Only if your owner’s manual provides the procedure and you can complete it correctly. Cable tension is not the only possible cause, and an incorrect adjustment can leave the brake weak, dragging, or unsecured.',
    },
    {
      question: 'Is regenerative braking enough to stop an electric scooter?',
      answer:
        'Do not treat it as your only brake unless the manufacturer explicitly designed and documented the scooter that way. Requirements for UK rental scooters call for a friction brake when energy recovery counts as one braking system.',
    },
    {
      question: 'Can battery charge or temperature change regenerative braking?',
      answer:
        'It can on some designs. The exact behavior is model-specific, which is why a working mechanical brake and the owner’s manual matter.',
    },
    {
      question: 'Why are the brakes worse in the rain?',
      answer:
        'Wet pavement reduces tire grip, and water can affect friction-brake response. Slow response that makes stopping unsafe is a reason to avoid wet riding and inspect the scooter.',
    },
    {
      question: 'Is one working brake enough if the other has failed?',
      answer:
        'Not for normal riding on a scooter designed with more than one braking system. The remaining system may not provide the expected stopping performance or redundancy.',
    },
    {
      question: 'Can I drag my foot or press the rear fender as a backup?',
      answer:
        'Only use a fender brake if the manufacturer identifies it as an intended brake. Improvised foot dragging is not a reliable substitute for repairing the service brake.',
    },
    {
      question: 'Does an illuminated brake light prove the brake works?',
      answer:
        'No. A light can confirm that a switch or control input was detected, but it does not measure the force reaching the wheel or the scooter’s stopping performance.',
    },
    {
      question: 'How should I test the brakes after repair?',
      answer:
        'Begin with the scooter parked, then perform gentle stops at walking pace in a level area without traffic or obstacles. Do not use a hill or normal riding speed as the first test.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Electric-Powered Scooters',
      url: 'https://www.cpsc.gov/s3fs-public/eScooter_SafetyAlert_v4.pdf',
      sourceType: 'government',
      notes:
        'Advises checking brakes and other components before riding, testing the brakes, learning the scooter’s stopping distance, and reporting problems with shared scooters.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission Staff',
      title: 'CPSC Staff Letter to ASTM F15.58 for Commercial E-scooter Ballot',
      url: 'https://www.cpsc.gov/s3fs-public/Letter-to-ASTM-F15-58-Commercial-E-Scooters-Regarding-Ballot.pdf?VersionId=sUJU1EckWWTU10Wj_Fzy8aPZEm_bsJ2q',
      sourceType: 'government',
      notes:
        'CPSC staff commented on a draft standard, compared proposed scooter stopping performance with the federal bicycle requirement, and recommended a stronger deceleration benchmark. The letter is staff input, not the final ASTM standard.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'DGL Group Recalls Hover-1 Dynamo E-Scooters Due to Risk of Serious Injury and Crash Hazard',
      url: 'https://www.cpsc.gov/Recalls/2024/DGL-Group-Recalls-Hover-1-Dynamo-E-Scooters-Due-to-Risk-of-Serious-Injury-and-Crash-Hazard-Sold-Exclusively-at-Walmart-com',
      sourceType: 'government',
      notes:
        'Documents reported e-scooter brake failures and resulting injuries, with instructions for affected consumers to stop using the recalled scooters immediately.',
    },
    {
      publisher: 'Irish Statute Book',
      title: 'S.I. No. 199/2024 - Road Traffic (Electric Scooters) Regulations 2024',
      url: 'https://www.irishstatutebook.ie/eli/2024/si/199/made/en/print',
      sourceType: 'regulation',
      notes:
        'Requires two independent braking devices, combined deceleration of at least 3.5 m/s², residual performance if one device fails, and stable braking without excessive juddering.',
    },
    {
      publisher: 'UK Department for Transport',
      title: 'E-scooter trials: guidance for local authorities and rental operators',
      url: 'https://www.gov.uk/government/publications/e-scooter-trials-guidance-for-local-areas-and-rental-operators/e-scooter-trials-guidance-for-local-areas-and-rental-operators',
      sourceType: 'government',
      notes:
        'Specifies independent braking systems for trial scooters, a friction brake when energy recovery counts as one system, combined stopping criteria, and maintenance in good working order and adjustment.',
    },
    {
      publisher: 'Razor USA',
      title: 'C45 Electric Scooter Owner’s Manual',
      url: 'https://global.razor.com/pa/wp-content/uploads/sites/21/2023/07/LOCALIZATION_Scooters-Electricos_C45_USER-MANUAL_ENGLISH_PA.pdf',
      sourceType: 'manufacturer',
      notes:
        'Provides model-specific instructions for controlled stopping, regenerative braking, brake-lever clearance, cable tension, caliper alignment, and low-risk practice. Its adjustment measurements apply only to the C45.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Model-specific owner’s or service manual',
      description:
        'Provides the correct brake controls, adjustment limits, maintenance procedure, weather restrictions, and testing instructions for the exact scooter.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'E-scooter brake inspection service',
      description:
        'Useful when the scooter has hydraulic brakes, electronic braking faults, damaged hardware, uncertain parts compatibility, or a problem that remains after permitted basic adjustments.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer-approved brake parts',
      description:
        'Correct pads, cables, calipers, rotors, drums, levers, and fasteners help preserve the intended fit and braking operation.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Product recall lookup and incident reporting service',
      description:
        'Helps identify a model-specific brake recall and report a failure to the manufacturer, rental operator, or CPSC.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'scooter-brake-lever-goes-soft',
      anchorText: 'Is the scooter brake lever going soft?',
      relationshipType: 'cause',
    },
    {
      slug: 'scooter-regen-braking-weaker',
      anchorText: 'Is only the regenerative braking getting weaker?',
      relationshipType: 'sibling',
    },
    {
      slug: 'squealing-scooter-brakes',
      anchorText: 'Are the scooter brakes squealing too?',
      relationshipType: 'related',
    },
  ],
};
