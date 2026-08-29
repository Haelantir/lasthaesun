import type { ProblemSeed } from '../types';

export const clickingNoiseWhenTurning: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'steering',
  slug: 'clicking-noise-when-turning',
  canonicalPath: '/cars/steering/clicking-noise-when-turning/',
  name: 'Clicking Noise When Turning',
  eyebrow: 'Mobility · Cars · Steering',

  h1: 'Can I Ignore a Clicking Noise When I Turn?',
  seoTitle: 'Clicking When Turning: CV Joint Warning or Something Else?',
  metaDescription:
    'A repetitive click while turning often points to a worn CV joint, but steering and suspension parts can make similar noises. Here is when to stop driving.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Usually, if steering feels normal',

  shortAnswer:
    'Probably not. A repetitive clicking or popping sound while the car is moving through a turn often points to wear in a CV joint. If the steering feels loose, binds, pulls, vibrates heavily, or the sound turns into grinding or hard clunking, stop driving and have the car inspected.',

  whyItMattersHeading: 'Why Does My Car Click When I Turn?',
  whyItMatters: [
    'CV joints let a driven wheel receive power while the axle changes angle as the suspension moves and the wheels steer. Wear in an outer CV joint can produce a repeating click or pop that becomes easiest to hear during sharp low-speed turns, particularly while power is being applied.',
    'But the sound does not identify the part by itself. Strut bearings, mounts, suspension joints, loose hardware, or something contacting a rotating wheel can also make noise while steering. A useful clue is whether the click happens only while the car is moving or also while it is parked and you turn the steering wheel.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Get Help If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Automotive triage reviewed against NHTSA recall guidance and published CV-joint, driveline, and strut diagnostic materials from GKN, MOOG, Monroe, and AAA.',
  disclaimer:
    'This page is general triage information, not a diagnosis. If steering, handling, or wheel behavior changes, stop somewhere safe and have the vehicle inspected.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'repetitive-click-on-sharp-turns',
      label: 'Repetitive clicking on sharp turns',
      shortDescription: 'A steady click-click-click appears as the car moves through a tight corner.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A CV joint is high on the suspect list',
      resultBody:
        'Repetitive clicking or popping while cornering is a recognized symptom of outer CV-joint wear. The joint is working at a larger angle during a tight turn, which can make internal wear easier to hear.',
      recommendedAction:
        'Minimize unnecessary driving and arrange an inspection of the CV axles, joints, and boots.',
    },
    {
      slug: 'clicking-louder-under-power',
      label: 'Clicking gets louder when accelerating through a turn',
      shortDescription: 'The noise is most obvious when the car is turning and the drivetrain is under load.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Driveline wear becomes more likely',
      resultBody:
        'A CV joint has to transmit torque while operating at an angle. Clicking that becomes more obvious under power during a turn fits a common CV-joint failure pattern.',
      recommendedAction:
        'Have the driveline inspected rather than waiting for the noise to become louder or for vibration to appear.',
    },
    {
      slug: 'clicking-while-parked',
      label: 'It clicks while the car is parked',
      shortDescription:
        'The sound occurs when you turn the steering wheel even though the vehicle is not rolling.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Look beyond the CV axle',
      resultBody:
        'A CV axle is not rotating while the car sits still, so a click produced by steering alone makes steering or suspension components more plausible. Strut upper bearings and mounting hardware are among the parts that can make noise while turning.',
      recommendedAction:
        'Have the steering and front suspension inspected, especially if the steering also feels rough, sticky, or different from normal.',
    },
    {
      slug: 'grease-near-wheel-or-torn-boot',
      label: 'There is grease near the wheel or a torn CV boot',
      shortDescription:
        'Grease is splattered around the inside of the wheel area or the rubber CV boot is visibly split.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The joint may be losing its protection',
      resultBody:
        'CV boots seal grease inside the joint and keep contamination out. A torn or displaced boot can let lubricant escape and allow dirt or water into the joint, accelerating wear.',
      recommendedAction:
        'Have the boot and joint inspected promptly. Once a joint is already clicking, replacing only the boot may no longer address the wear inside it.',
    },
    {
      slug: 'clicking-after-recent-repair',
      label: 'The noise started after recent axle or suspension work',
      shortDescription:
        'The clicking appeared after work involving a CV axle, strut, steering, brake, or wheel area.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Have the recent work rechecked',
      resultBody:
        'Installation problems and loose or damaged mounting hardware can create new noises. Monroe specifically notes that strut mounting and bearing problems can produce noise while turning.',
      recommendedAction:
        'Contact the shop that performed the work and describe exactly when the click began and when it occurs.',
    },
    {
      slug: 'clicking-with-vibration',
      label: 'Clicking comes with vibration or shuddering',
      shortDescription: 'The steering wheel or vehicle shakes while the clicking is happening.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This needs a closer look before normal driving',
      resultBody:
        'Vibration can accompany driveline problems including worn CV joints or axles. Combined symptoms give you more reason to treat the noise as a mechanical fault rather than an isolated sound.',
      recommendedAction:
        'Reduce driving and arrange an inspection. If the vibration is strong or suddenly worsening, pull over somewhere safe.',
    },
    {
      slug: 'steering-loose-binding-or-pulling',
      label: 'The steering feels loose, binds, or pulls',
      shortDescription: 'Steering behavior has changed along with the clicking noise.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop treating this as a noise problem',
      resultBody:
        'Once steering behavior changes, the concern is no longer just what is making the sound. A steering or suspension fault may be affecting how the vehicle responds to your inputs.',
      recommendedAction:
        'Stop driving when it is safe to do so and have the steering and suspension inspected before continuing normally.',
    },
    {
      slug: 'grinding-scraping-or-wheel-wobble',
      label: 'Clicking has become grinding, scraping, or wheel wobble',
      shortDescription:
        'The original click is joined by harsh mechanical noise or visible or felt movement at a wheel.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not keep testing it on the road',
      resultBody:
        'Grinding, scraping, or wheel movement points to a more advanced or different mechanical problem that cannot be safely identified from the sound alone.',
      recommendedAction:
        'Pull over somewhere safe and use roadside assistance if the wheel or steering feels unstable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The sound is a symptom, not a diagnosis',
      description:
        'Clicking during a turn commonly fits CV-joint wear, but steering, suspension, mounting hardware, and wheel-area contact can produce similar noises.',
      severity: 'info',
      chainLabel: 'New clicking during turns',
    },
    {
      stageLabel: 'IF A CV BOOT IS DAMAGED',
      title: 'Grease can escape and contamination can enter',
      description:
        'The boot seals the CV joint. When it tears or slips, lubrication can be lost and dirt or water can reach the joint surfaces.',
      severity: 'caution',
      chainLabel: 'Boot damage → lubrication and sealing problems',
    },
    {
      stageLabel: 'IF CV-JOINT WEAR PROGRESSES',
      title: 'Internal play and noise can increase',
      description:
        'Worn joint surfaces can develop greater play. A severely deteriorated joint or axle can eventually fail to transfer power properly to the wheel.',
      severity: 'warning',
      chainLabel: 'Wear → play → driveline failure',
    },
    {
      stageLabel: 'IF THE SOURCE IS STEERING OR SUSPENSION',
      title: 'Handling symptoms may appear',
      description:
        'A worn mount, bearing, joint, or loose component can begin affecting steering feel or suspension movement as the underlying problem worsens.',
      severity: 'warning',
      chainLabel: 'Mechanical wear → altered steering or handling',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'The vehicle can become unsafe or unable to continue',
      description:
        'A major driveline failure can leave the vehicle unable to drive normally, while a serious steering or suspension fault can make the vehicle unsafe to control.',
      severity: 'danger',
      chainLabel: 'Component failure → stop driving',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Mild repetitive clicking on turns but steering feels completely normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Drive only as needed to arrange an inspection. Avoid deliberately repeating hard turns to see whether the noise gets worse.',
    },
    {
      situation: 'A single new click occurs when changing steering direction',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Pay attention to whether it repeats, appears while parked, or starts occurring over bumps. Persistent new noise deserves an inspection.',
    },
    {
      situation: 'Clicking happens even while parked',
      ignoreAnswer: 'Not indefinitely',
      severity: 'caution',
      whatToDo:
        'Have the steering and suspension checked because a rotating CV axle becomes a less likely explanation when the vehicle is stationary.',
    },
    {
      situation: 'A CV boot is split or grease is scattered near the wheel',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange an inspection of the boot, CV joint, and axle before continuing normal use.',
    },
    {
      situation: 'Clicking is accompanied by vibration or shuddering',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Minimize driving and have the driveline and wheel area inspected.',
    },
    {
      situation: 'Steering feels loose, catches, binds, or the car pulls unexpectedly',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop driving when safe and arrange an inspection before continuing.',
    },
    {
      situation: 'You hear grinding or scraping or a wheel appears to wobble',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Pull over somewhere safe. Do not continue road-testing the vehicle to identify the sound yourself.',
    },
    {
      situation: 'The clicking began immediately after axle, strut, steering, or wheel work',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Have the repair shop recheck the installation and mounting hardware.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Notice exactly when the click happens',
      body:
        'Pay attention to whether the sound repeats with wheel rotation, happens only on sharp turns, gets louder under light acceleration, or also occurs while parked. Those details help separate driveline noise from steering or suspension noise.',
    },
    {
      title: 'Look for CV-boot damage',
      body:
        'With the vehicle parked, engine off, and parking brake set, look behind the driven wheels for a split accordion-shaped rubber boot or fresh grease around the inside of the wheel. Do not crawl under an unsupported vehicle.',
    },
    {
      title: 'Compare turning noise with bump noise',
      body:
        'If the car also clunks over bumps, suspension mounts or joints deserve attention along with the CV axle.',
      destinationProblemSlug: 'clunking-noise-over-bumps',
    },
    {
      title: 'Stop if steering behavior changes',
      body:
        'Noise alone may allow a cautious trip for inspection. Loose steering, binding, unexpected pulling, or strong vibration changes that decision.',
      destinationProblemSlug: 'loose-steering-wheel',
    },
    {
      title: 'Have the wheel-end and driveline inspected',
      body:
        'Ask for the CV axles and boots, strut mounts and bearings, steering and suspension joints, wheel-area contact, and any recently disturbed hardware to be checked. The sound alone is not enough to identify the failed part.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Steering suddenly feels loose',
      description:
        'Extra free play or a sudden change in steering response can indicate a steering or suspension problem rather than harmless noise.',
      severity: 'danger',
    },
    {
      title: 'The steering catches or binds',
      description:
        'Resistance that appears as you turn the wheel needs inspection before normal driving continues.',
      severity: 'danger',
    },
    {
      title: 'The car pulls or changes direction unexpectedly',
      description: 'A change in directional control matters more than the clicking sound itself.',
      severity: 'danger',
    },
    {
      title: 'Strong vibration or shuddering appears',
      description:
        'Vibration together with clicking can indicate a driveline or wheel-end problem that has progressed beyond an isolated noise.',
      severity: 'warning',
    },
    {
      title: 'Grinding or scraping replaces the click',
      description:
        'Harsh metal-like noise can point to more advanced wear or a different component contacting something it should not.',
      severity: 'danger',
    },
    {
      title: 'A wheel feels or looks unstable',
      description:
        'Visible wobble or unusual wheel movement is not something to diagnose by continuing to drive.',
      severity: 'danger',
    },
    {
      title: 'Grease is thrown around the inside of a wheel',
      description: 'This can indicate a damaged CV boot that is no longer keeping lubricant inside the joint.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is clicking while turning usually a bad CV joint?',
      answer:
        'It is one of the classic possibilities, especially when the click repeats while the car is moving through a sharp turn. It is not the only cause, so the joint should be inspected rather than diagnosed from sound alone.',
    },
    {
      question: 'Does clicking on a left turn mean the left CV joint is bad?',
      answer:
        "Not reliably. Noise travels through the chassis and loading changes across the vehicle during a turn, so identifying the side from the driver's seat can be misleading.",
    },
    {
      question: 'Why does the clicking get louder when I accelerate around a corner?',
      answer:
        'Applying power increases the torque passing through the driveline. A worn CV joint can become easier to hear when it is both angled and carrying load.',
    },
    {
      question: 'Why does my car click when I turn the steering wheel while parked?',
      answer:
        'The CV axle is not rotating while the vehicle is stationary. That makes steering or suspension parts such as a strut bearing or mount more plausible sources.',
    },
    {
      question: 'Does a torn CV boot mean the CV joint is already ruined?',
      answer:
        'Not necessarily. The boot can fail before the joint does. But once the joint is clicking, internal wear becomes more likely and the joint should be inspected before assuming a new boot is enough.',
    },
    {
      question: 'Can a wheel bearing make a clicking noise while turning?',
      answer:
        'Wheel bearings are more commonly associated with humming, growling, or roughness, but wheel-end noises overlap. Do not rule components in or out from the sound description alone.',
    },
    {
      question: 'Could a stone in the tire make a clicking sound?',
      answer:
        'Yes. A stone or object in the tread can click once per wheel rotation. That noise usually follows vehicle speed rather than appearing specifically because the steering wheel is turned.',
    },
    {
      question: 'Is clicking at full steering lock normal?',
      answer:
        'Do not assume a new repetitive click is normal unless your vehicle manufacturer specifically describes that behavior. Tight turns are also where worn outer CV joints commonly become easier to hear.',
    },
    {
      question: 'Do both CV axles have to be replaced if one is bad?',
      answer:
        "There is no universal rule that both must be replaced together. Each axle and joint should be inspected and the repair decision should follow its actual condition and the vehicle manufacturer's procedures.",
    },
    {
      question: 'Will a wheel alignment fix clicking when I turn?',
      answer:
        'An alignment cannot repair a worn CV joint, damaged strut bearing, loose mount, or failed steering component. Alignment may be appropriate after certain suspension repairs, but it is not a cure for the noise itself.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Check for Recalls',
      url: 'https://www.nhtsa.gov/recalls',
      sourceType: 'government',
      notes:
        "NHTSA's official VIN and vehicle search provides unrepaired recall information plus access to investigations, complaints, and manufacturer communications.",
    },
    {
      publisher: 'GKN Automotive',
      title: 'Safety on board: How to identify driveshaft damages',
      url: 'https://www.gknautomotive.com/media/4w3dhu1e/workshop_tips_loebro_cv_gb.pdf',
      sourceType: 'manufacturer',
      notes:
        'Describes cornering noise from worn CV joints, vibration from joint play or a bent shaft, common boot-related failures, and inspection points for driveshafts and joints.',
    },
    {
      publisher: 'MOOG Parts',
      title: 'What is a CV Axle?',
      url: 'https://www.moogparts.com/parts-matter/What-is-a-CV-Axle.html',
      sourceType: 'manufacturer',
      notes:
        'Explains CV-axle function, boot lubrication and contamination, and identifies clicking or popping during turns as a sign of possible outer CV-joint trouble.',
    },
    {
      publisher: 'Monroe Shocks & Struts',
      title: 'Shock & Strut Installation Tips',
      url: 'https://www.monroe.com/technical-resources/tech-tips/troubleshooting-installation-issues.html',
      sourceType: 'manufacturer',
      notes:
        'Documents strut-bearing noise while turning and explains how improper mount loading or damaged mounting hardware can create noise.',
    },
    {
      publisher: 'AAA Auto Club Group',
      title: 'Strange Car Noises: What Do They Mean?',
      url: 'https://www.acg.aaa.com/connect/blogs/4c/auto/car-noises-you-shouldnt-ignore',
      sourceType: 'industry',
      notes:
        'Identifies clicking or popping while turning as a common sign of worn CV joints and recommends having the condition checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Flashlight',
      description:
        'Useful for checking the visible CV boots and wheel area for torn rubber, grease, or obvious contact without disassembling anything.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual",
      description:
        'Check for model-specific steering behavior, warnings, maintenance instructions, and guidance that may change the general advice on this page.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Steering and driveline inspection',
      description:
        'A hands-on inspection can locate play, damaged boots, worn joints, mount problems, and loose hardware that cannot be identified reliably from sound alone.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'NHTSA VIN recall lookup',
      description:
        'Useful for checking whether the vehicle has an unrepaired safety recall or relevant manufacturer communication that may apply to the symptom.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'whining-noise-when-turning',
      anchorText: 'What if it whines instead when I turn?',
      relationshipType: 'sibling',
    },
    {
      slug: 'loose-steering-wheel',
      anchorText: 'What if the steering wheel feels loose?',
      relationshipType: 'escalation',
    },
    {
      slug: 'clunking-noise-over-bumps',
      anchorText: 'What if the car clunks when I hit bumps?',
      relationshipType: 'related',
    },
    {
      slug: 'wheel-vibration',
      anchorText: 'What if the steering wheel also vibrates?',
      relationshipType: 'escalation',
    },
    {
      slug: 'car-pulls-to-one-side',
      anchorText: 'What if the car starts pulling to one side?',
      relationshipType: 'escalation',
    },
  ],
};
