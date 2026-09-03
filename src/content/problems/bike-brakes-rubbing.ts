import type { ProblemSeed } from '../types';

export const bikeBrakesRubbing: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'bike-brakes',
  slug: 'bike-brakes-rubbing',
  canonicalPath: '/bicycles/brakes/bike-brakes-rubbing/',
  name: 'Bike Brakes Rubbing',
  eyebrow: 'Mobility · Bicycles · Brakes',

  h1: 'Can I Ignore Bike Brakes That Keep Rubbing?',
  seoTitle: 'Bike Brake Rub: When a Tick Can Wait and When to Stop',
  metaDescription:
    'Light brake rub may be an alignment issue, but constant drag, wheel looseness, tire contact, heat, or changed braking means stop riding and fix it.',

  aliases: ['/bicycles/brakes/brakes-rubbing/', '/bicycles/brakes/rubbing-bike-brakes/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Only briefly if the wheel is secure and braking is normal',

  shortAnswer:
    'Probably not. A faint disc tick with a freely spinning, securely installed wheel and normal braking can usually wait for adjustment, but constant drag, wheel looseness, a pad touching the tire, or changed braking means stop and fix it first.',

  whyItMattersHeading: 'The Sound Is Not the Only Problem',
  whyItMatters: [
    'Rubbing means a brake pad is contacting the rotor or rim when you are not braking. Even light contact adds resistance and uses pad material. If it continues, it can also wear the rotor or rim braking surface, and grit trapped between the surfaces can speed up that wear.',
    'The pattern helps narrow the cause. One disc tick per wheel revolution often points to a localized rotor deviation. Contact throughout the rotation fits poor caliper centering, insufficient pad clearance, a sticky piston, or a rim brake that is not releasing. Rub after wheel installation makes wheel seating and axle security the first checks. Load-only rub can come from slight flex, but looseness or visible movement changes the answer.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Fix It First If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'This page covers rim and disc brake rub, wheel refitting, load-related contact, wear, and stop-riding signs using federal rules and current manufacturer and repair guidance.',
  disclaimer:
    'General triage for conventional bicycle rim and disc brakes. Follow the wheel, brake, and torque instructions for your exact components; if you cannot verify secure assembly and normal braking, do not ride.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'disc-tick-once-per-revolution',
      label: 'A disc rotor ticks once each wheel revolution',
      shortDescription:
        'The contact is faint and rhythmic, the wheel spins freely, and braking power and lever feel are normal.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'A minor alignment issue can wait briefly',
      resultBody:
        'A repeating touch at the same point usually fits slight rotor runout or a small alignment error. It is less urgent when the axle is secure, the rotor has no play, the wheel coasts normally, and braking has not changed.',
      recommendedAction:
        'Check wheel seating and rotor security, then arrange caliper alignment or careful rotor inspection. Stop riding if the tick becomes continuous, the wheel slows noticeably, or any looseness appears.',
    },
    {
      slug: 'constant-disc-brake-rub',
      label: 'The disc brake rubs through the whole wheel rotation',
      shortDescription: 'The scraping is continuous rather than limited to one section of the rotor.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Continuous drag needs correction',
      resultBody:
        'Full-rotation contact commonly fits a caliper that is not centered, pad clearance that is too tight, a sticky hydraulic piston, or a mechanical brake that is not returning fully. Continued contact wastes effort and consumes the braking surfaces.',
      recommendedAction:
        'Fix the alignment or return problem before ordinary riding. A brief stationary or low-speed check is reasonable only if the wheel is secure and the brake still applies and releases normally.',
    },
    {
      slug: 'constant-rim-brake-rub',
      label: 'A rim brake pad drags continuously',
      shortDescription: 'One or both pads stay against the rim after the lever is released.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Center the brake and check the wheel',
      resultBody:
        'Common causes include uneven return-spring tension, excessive cable tension, a wheel that is not centered, or a rim that is out of true. The contact wears both the pad and the rim brake track.',
      recommendedAction:
        'Confirm that the wheel is seated and straight, then correct pad height, brake centering, and cable tension using the instructions for that brake.',
    },
    {
      slug: 'rub-after-wheel-refitted',
      label: 'The brake started rubbing after the wheel was refitted',
      shortDescription:
        'The wheel was removed for transport, tire work, or maintenance, and the brake dragged after reinstallation.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Verify wheel installation before riding',
      resultBody:
        'A wheel seated differently in the dropouts moves the rim or rotor relative to the brake. More importantly, an incompletely secured quick release, axle nut, or thru axle can let the wheel move or come loose.',
      recommendedAction:
        'Do not solve this by loosening the axle and riding. Reseat the wheel fully and secure its attachment exactly as the wheel or bicycle manufacturer specifies. Get help if correct closure or torque is uncertain.',
    },
    {
      slug: 'pads-closed-with-wheel-removed',
      label: 'The disc brake lever was squeezed while the wheel was out',
      shortDescription:
        'The rotor is now difficult to insert or rubs heavily because the pads moved closer together.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Reset the pad gap before riding',
      resultBody:
        'On hydraulic systems, operating the lever without a rotor or pad spacer can reduce the space between the pads. Forcing the rotor between them can damage or contaminate components.',
      recommendedAction:
        'Use the pad-gap reset procedure for the exact brake model or have a bike shop reset it. Reinstall the wheel securely and recenter the caliper afterward.',
    },
    {
      slug: 'rub-only-under-hard-pedaling',
      label: 'The rub appears only when pedaling hard',
      shortDescription:
        'The brake is quiet while coasting and on easy efforts, with no wheel, hub, rotor, or spoke looseness.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Load-related flex is possible',
      resultBody:
        'Hard pedaling can slightly deflect a wheel, fork, frame, or open-dropout axle position and use up the small clearance beside a disc rotor or rim pad. If every attachment is secure and braking is normal, this is usually an adjustment issue rather than an immediate failure.',
      recommendedAction:
        'Arrange a clearance and alignment check. Stop treating it as minor if it is new, worsening, happens during ordinary pedaling, or comes with movement you can feel or see.',
    },
    {
      slug: 'rub-with-component-play',
      label: 'The rub comes with wheel, hub, rotor, or spoke movement',
      shortDescription:
        'The rim moves sideways, the hub knocks, the rotor is loose, or one or more spokes are loose or broken.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The rubbing may be a symptom of looseness',
      resultBody:
        'Caliper adjustment will not fix a moving wheel, loose rotor, or hub play. Movement can alter brake clearance under load and may indicate a wheel or attachment problem that affects control.',
      recommendedAction:
        'Stop riding until the loose or damaged part is identified and corrected. Do not keep widening brake clearance to hide the movement.',
    },
    {
      slug: 'rim-pad-touching-tire-or-spokes',
      label: 'A rim brake pad touches the tire or spokes',
      shortDescription: 'The pad sits above the rim brake track, overlaps the tire, or can contact a spoke.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not ride with the pad in the wrong place',
      resultBody:
        'Brake pads are supposed to engage the braking surface without contacting the tire or spokes. Tire contact can damage the tire, while spoke contact can interfere with the rotating wheel.',
      recommendedAction:
        'Reposition and securely tighten the pad before riding. Replace any tire or other part already damaged by the contact.',
    },
    {
      slug: 'wheel-slows-quickly-or-brake-stays-on',
      label: 'The wheel slows quickly or the brake does not release',
      shortDescription:
        'The wheel is hard to turn, stops almost immediately, or remains braked after the lever is released.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is significant brake drag',
      resultBody:
        'A sticky piston, seized pivot, binding cable, excessive adjustment, or installation fault may be holding the brake on. The friction wastes substantial effort, generates heat, and can rapidly consume braking material.',
      recommendedAction:
        'Do not continue a normal ride. Let hot components cool without touching the rotor, then repair the return or clearance problem and verify normal braking before riding.',
    },
    {
      slug: 'rubbing-with-changed-braking',
      label: 'The rubbing comes with weak, spongy, or abnormal braking',
      shortDescription:
        'The lever reaches the handlebar, the bite point changes, fluid is visible, or the bike no longer stops normally.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The braking change controls the decision',
      resultBody:
        'Rubbing alone does not prove brake failure, but reduced power, abnormal lever travel, or a hydraulic leak means the brake cannot be assumed to work safely.',
      recommendedAction:
        'Stop riding and have the brake repaired. Do not use repeated test rides to determine whether enough braking remains.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The wheel loses some free movement',
      description:
        'The pad converts part of your effort into friction even though you are not asking the bike to slow down.',
      severity: 'info',
      chainLabel: 'Unwanted contact',
    },
    {
      stageLabel: 'IF CONTACT CONTINUES',
      title: 'Pads and braking surfaces wear unnecessarily',
      description:
        'Continuous contact removes pad material and adds wear to the rotor or rim brake track. Dirt and grit between the surfaces can accelerate the process.',
      severity: 'caution',
      chainLabel: 'Added wear',
    },
    {
      stageLabel: 'IF THE BRAKE CANNOT RELEASE',
      title: 'Drag and heat increase',
      description:
        'A sticky piston, binding cable, seized pivot, or overly tight adjustment can keep the brake applied and make the wheel progressively harder to turn.',
      severity: 'warning',
      chainLabel: 'Persistent friction',
    },
    {
      stageLabel: 'IF A MOVING PART IS THE CAUSE',
      title: 'Alignment adjustments will not hold',
      description:
        'A loose axle, hub, rotor, or spoke lets the braking surface shift relative to the pads and may also affect wheel security or handling.',
      severity: 'warning',
      chainLabel: 'Movement under load',
    },
    {
      stageLabel: 'IF BRAKING OR WHEEL SECURITY IS COMPROMISED',
      title: 'You can lose reliable control',
      description:
        'A loose wheel, pad contacting the tire or spokes, damaged rotor, hydraulic leak, or brake that no longer stops normally can lead to a fall or collision.',
      severity: 'danger',
      chainLabel: 'Rub → wear or movement → unreliable braking',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A faint disc tick occurs once per revolution, but the wheel spins freely',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Confirm that the wheel and rotor are secure and braking is normal, then schedule alignment or rotor inspection rather than accepting the noise permanently.',
    },
    {
      situation: 'A disc pad rubs throughout the entire rotation',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Check wheel seating, caliper centering, pad clearance, rotor condition, and piston or cable return before ordinary riding.',
    },
    {
      situation: 'A rim brake pad stays against the rim',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Check wheel centering and trueness, then adjust the brake arms, pad position, cable tension, and return springs as applicable.',
    },
    {
      situation: 'The rubbing began immediately after wheel installation',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Reseat and secure the wheel using the instructions for its quick release, axle nuts, or thru axle before riding.',
    },
    {
      situation: 'The brake rubs only during hard pedaling and nothing is loose',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Arrange an alignment and clearance check. Recheck promptly if the contact becomes easier to trigger or appears while coasting.',
    },
    {
      situation: 'The rim, rotor, or wheel moves sideways or has play',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Repair the loose hub, rotor, spoke, axle, or damaged wheel before adjusting the brake around it.',
    },
    {
      situation: 'A rim brake pad touches the tire or spokes',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not ride until the pad is positioned securely on the rim brake track and any contact damage has been inspected.',
    },
    {
      situation: 'The brake stays applied, gets unusually hot, leaks, or loses power',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop riding, let hot parts cool, and have the brake repaired before testing it again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Find where and how often it touches',
      body:
        'In a repair stand, spin each wheel and watch the gap beside the rotor or rim pads. A single repeating contact point, continuous contact, and movement that appears only under load suggest different causes. Keep fingers away from a moving rotor.',
    },
    {
      title: 'Check wheel seating and axle security first',
      body:
        'Make sure the axle is fully seated and the wheel attachment is correctly closed or tightened. Follow the instructions and torque specification for the exact quick release, axle nuts, or thru axle. Do not ride with the attachment loosened to create brake clearance.',
    },
    {
      title: 'Correct brake alignment and release',
      body:
        'For a disc brake, verify the rotor before centering the caliper and setting pad clearance. For a rim brake, check pad height, arm centering, return springs, and cable tension. Use the component manual rather than a generic torque value.',
    },
    {
      title: 'Inspect the wheel, pads, and braking surface',
      body:
        'Look for hub play, loose spokes, a visibly wandering rim, a loose or deformed rotor, worn pads, and excessive rim or rotor wear. Fix the moving or damaged part instead of widening the brake around it.',
      destinationProblemSlug: 'wobbly-bike-wheel',
    },
    {
      title: 'Perform a controlled brake check before traffic',
      body:
        'Confirm that both brakes apply firmly, release fully, and stop the bike normally during a careful check away from traffic. If a lever reaches the handlebar or braking feels weak or inconsistent, stop and repair it.',
      destinationProblemSlug: 'bike-brake-lever-pulls-to-bar',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A brake pad touches the tire or spokes',
      description:
        'The pad is outside the intended rim braking surface and can damage the tire or interfere with the rotating wheel.',
      severity: 'danger',
    },
    {
      title: 'The wheel or axle is loose',
      description:
        'Stop even if reseating the wheel temporarily changes the sound. The wheel attachment must be fully secure before riding.',
      severity: 'danger',
    },
    {
      title: 'The rotor is cracked, severely deformed, or loose',
      description: 'A caliper adjustment cannot make a damaged or unsecured rotor safe.',
      severity: 'danger',
    },
    {
      title: 'The wheel slows sharply when spun',
      description:
        'Heavy drag means the brake is remaining substantially applied and needs repair before normal use.',
      severity: 'warning',
    },
    {
      title: 'The brake lever reaches the handlebar or feels abnormal',
      description: 'Weak, spongy, sinking, or inconsistent lever feel takes priority over the rubbing noise.',
      severity: 'danger',
    },
    {
      title: 'Brake fluid is visible',
      description:
        'A hydraulic leak can reduce braking and contaminate pads or rotors. Stop using the affected brake.',
      severity: 'danger',
    },
    {
      title: 'The wheel, rim, hub, rotor, or spokes have play',
      description:
        'Movement under load may be causing the rub and can indicate a separate wheel or attachment fault.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a tiny amount of disc brake rub normal?',
      answer:
        'Very small rotor movement can occur, and a faint intermittent touch may not noticeably slow the wheel. Actual rubbing should still be corrected, especially if it is continuous, worsening, or accompanied by looseness or changed braking.',
    },
    {
      question: 'Why does my disc rotor tick once per wheel revolution?',
      answer:
        'The same part of the rotor is passing too close to a pad each time around. Common possibilities include slight rotor runout, a poorly seated wheel, rotor play, or caliper alignment that leaves too little clearance.',
    },
    {
      question: 'Why does the brake rub through the whole rotation?',
      answer:
        'The caliper or brake arms may be off-center, pad clearance may be too tight, or a piston, pivot, or cable may not be returning fully. Check wheel seating before changing the brake adjustment.',
    },
    {
      question: 'Why did the brake start rubbing after I put the wheel back on?',
      answer:
        'The axle may be seated in a slightly different position, or a hydraulic pad gap may have closed while the wheel was removed. First confirm that the wheel is fully seated and securely attached.',
    },
    {
      question: 'Can I loosen the axle slightly to stop the rubbing?',
      answer:
        'No. Wheel attachments must be properly secured. Fix the wheel seating or brake alignment instead of creating clearance with a loose axle.',
    },
    {
      question: 'Will bedding in new disc brakes fix rubbing?',
      answer:
        'No. Bedding in conditions the pad and rotor surfaces for consistent braking; it is not a substitute for correct caliper alignment and pad clearance.',
    },
    {
      question: 'Does brake rub wear out pads and rotors?',
      answer:
        'Yes. Contact uses pad material and wears the rotor or rim braking surface. The amount depends on the severity, conditions, and components, but continuous drag should not be treated as free.',
    },
    {
      question: 'Is rim brake rub different from disc brake rub?',
      answer:
        'The diagnosis differs, but the unwanted friction is similar. With rim brakes, inspect wheel trueness, brake-arm centering, cable tension, pad height, and rim wear. The pad must not touch the tire or spokes.',
    },
    {
      question: 'Can I straighten a rubbing disc rotor myself?',
      answer:
        'Minor rotor truing is possible with the correct tool and technique, but a significantly deformed, cracked, loose, or worn rotor should be replaced or assessed by a bike shop. Rotor edges are sharp.',
    },
    {
      question: 'Can I ride home with a rubbing brake?',
      answer:
        'Only if the contact is light, the wheel is fully secure and spins freely, both brakes work and release normally, and there is no heat, leak, damage, or component play. Otherwise, walk the bike or arrange transport.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Electronic Code of Federal Regulations',
      title: '16 CFR 1512.5 — Requirements for braking system',
      url: 'https://www.ecfr.gov/current/title-16/chapter-II/subchapter-C/part-1512/subpart-A/section-1512.5',
      sourceType: 'regulation',
      notes:
        'Sets federal requirements for brake attachment and performance, including caliper pads that engage the braking surface without contacting the tire or spokes.',
    },
    {
      publisher: 'Electronic Code of Federal Regulations',
      title: '16 CFR 1512.12 — Requirements for wheel hubs',
      url: 'https://www.ecfr.gov/current/title-16/chapter-II/subchapter-C/part-1512/subpart-A/section-1512.12',
      sourceType: 'regulation',
      notes:
        'Requires positive wheel-locking devices and says locking devices on threaded axles must be tightened to manufacturer specifications.',
    },
    {
      publisher: 'Trek Bicycle',
      title: "Trek Bicycle Owner's Manual, Rev 6, March 2026",
      url: 'https://media.trekbikes.com/image/upload/v1772741823/TrekBicycleOwnersManual_EN_Rev6_Mar2026.pdf',
      sourceType: 'manufacturer',
      notes:
        'Covers pre-ride wheel and brake checks, fully seated and secure axles, rim wheels spinning without pad contact, brake function, component torque, and rim wear.',
    },
    {
      publisher: 'SRAM',
      title: 'Hydraulic Road Disc Brake Hose Shortening and Bleed Manual',
      url: 'https://docs.sram.com/en-US/publications/2wamQedjkGP8QebD5HQiiC',
      sourceType: 'manufacturer',
      notes:
        'Covers brake safety, caliper centering, pad and rotor wear, sticky-piston troubleshooting, and reduced pad clearance after the lever is operated without a rotor or spacer.',
    },
    {
      publisher: 'Park Tool',
      title: 'Hydraulic Disc Brake Alignment',
      url: 'https://www.parktool.com/en-us/blog/repair-help/hydraulic-disc-brake-alignment',
      sourceType: 'industry',
      notes:
        'Identifies improper wheel seating, caliper misalignment, bent or loose rotors, hub play, and sticky pistons as causes of disc pad rub.',
    },
    {
      publisher: 'Park Tool',
      title: 'Linear Pull Brake Service',
      url: 'https://www.parktool.com/en-int/blog/repair-help/linear-pull-brake-service',
      sourceType: 'industry',
      notes:
        'Covers rim-brake pad position, cable tension, centering, return-spring adjustment, and the need to keep pads from contacting the tire.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Bicycle repair stand',
      description:
        'Holds the bike securely so each wheel can be spun while you observe pad clearance and locate repeating contact.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Torque wrench or torque driver',
      description:
        'Helps secure caliper, rotor, and wheel hardware to the specification for the exact component rather than relying on feel.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer brake and wheel instructions',
      description:
        'Provides the correct pad-gap, alignment, axle-closing, and torque procedures for the equipment installed on the bike.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bicycle brake and wheel service',
      description:
        'Appropriate when the brake will not release, hydraulic work is needed, the rotor or wheel has play, or secure installation cannot be verified.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'bike-brake-lever-pulls-to-bar',
      anchorText: 'Does the brake lever pull to the handlebar?',
      relationshipType: 'escalation',
    },
    {
      slug: 'worn-bike-brake-pads',
      anchorText: 'Are the bike brake pads worn out?',
      relationshipType: 'follow_up',
    },
    { slug: 'wobbly-bike-wheel', anchorText: 'Is the bike wheel wobbling?', relationshipType: 'cause' },
    {
      slug: 'loose-bike-spoke',
      anchorText: 'Could a loose spoke be causing the rub?',
      relationshipType: 'cause',
    },
    {
      slug: 'squeaky-bike-brakes',
      anchorText: 'Why are the bike brakes squeaking?',
      relationshipType: 'related',
    },
  ],
};
