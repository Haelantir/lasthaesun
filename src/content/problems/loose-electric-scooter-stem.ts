import type { ProblemSeed } from '../types';

export const looseElectricScooterStem: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'scooter-steering',
  slug: 'loose-electric-scooter-stem',
  canonicalPath: '/e-bikes-and-scooters/scooter-steering/loose-electric-scooter-stem/',
  name: 'Loose electric scooter stem',
  eyebrow: 'Mobility · E-bikes & Scooters · Scooter Stem & Steering',

  h1: 'Can I Ignore a Loose Electric Scooter Stem?',
  seoTitle: 'Loose Electric Scooter Stem: When to Stop Riding',
  metaDescription:
    'A loose scooter stem can let the folding joint shift or collapse. Learn when to stop riding, what to inspect, and when adjustment is not enough.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding it?',
  canIUseItLabel: 'No—identify and fix the play first',

  shortAnswer:
    'Probably not. If the stem itself has play at the folding joint, clamp, or steering assembly, do not ride until the cause is identified and corrected. A loose accessory or cable can be less serious, but confirm that the stem is rigid before deciding that is all you are hearing.',

  whyItMattersHeading: 'Why Stem Play Can Become a Control Problem',
  whyItMatters: [
    'The stem connects the handlebars to the scooter’s front assembly and may include the joint that allows the scooter to fold. Movement there can indicate an incompletely engaged latch, a loose fastener, wear, damaged threads, or structural damage. The amount of play alone does not reliably identify the cause.',
    'CPSC recalls covering different scooter models have documented loose hardware, folding-mechanism failures, and cracked welds that could let a stem fold or break during use. Those recalls are model-specific, but they show the failure mechanism: sudden loss of handlebar support or steering control can throw the rider. Adjustment procedures and torque specifications vary, so the instructions for the exact scooter take priority.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding Immediately If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Stem play, folding-lock maintenance, crack and collapse hazards, recall remedies, and adjustment limits were checked against CPSC and manufacturer materials.',
  disclaimer:
    'General U.S. guidance only. Follow the exact manual and recall remedy for your scooter. Do not improvise torque values or repair cracked steering components.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'accessory-moves-but-stem-is-rigid',
      label: 'Only an accessory, cable, or display cover moves',
      shortDescription:
        'A phone mount, bell, cable, or trim piece rattles, while both handlebars, the stem, folding joint, fork, and front wheel remain firmly connected.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is not a loose stem',
      resultBody:
        'Movement from an accessory can travel through the hollow stem and sound structural. It is lower concern once you have confirmed that the steering assembly and folding lock have no play.',
      recommendedAction:
        'Secure or remove the loose accessory. Recheck the stem while the scooter is powered off, and investigate again if the rattle remains or any movement appears at the joint.',
    },
    {
      slug: 'slight-play-at-folding-joint',
      label: 'There is slight fore-and-aft play at the folding joint',
      shortDescription:
        'The handlebars move relative to the deck or fork, and the movement can be seen or felt at the hinge, latch, or stem base.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Even small confirmed joint play needs correction',
      resultBody:
        'A small gap does not identify whether the cause is simple adjustment, worn contact surfaces, damaged hardware, or incomplete latch engagement. Riding repeatedly loads the same moving connection.',
      recommendedAction:
        'Keep the scooter parked. Use the exact model instructions to inspect and adjust the mechanism, or arrange service if the procedure or required torque is unclear.',
    },
    {
      slug: 'stem-play-is-increasing',
      label: 'The play has increased or returned',
      shortDescription:
        'The stem moves more than at an earlier check, or looseness returns after it was previously corrected.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A changing joint is not stable',
      resultBody:
        'Increasing or returning movement suggests that adjustment is not holding, hardware is moving, or mating parts may be wearing or damaged.',
      recommendedAction:
        'Stop riding and have the latch, hinge, fasteners, threads, clamp surfaces, and steering assembly inspected. Do not keep tightening the same fastener without finding why it moves.',
    },
    {
      slug: 'rattle-traced-to-nonstructural-part',
      label: 'The rattle is traced to a cable or accessory',
      shortDescription:
        'The sound can be reproduced from a loose cable, bell, hook, or mount, and the locked stem has no detectable play.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Secure the noisy part, then monitor it',
      resultBody:
        'A confirmed nonstructural rattle is different from movement in the steering or folding mechanism. It should not be used to explain away a second sound or movement at the latch.',
      recommendedAction:
        'Secure the identified part and repeat a stationary stem check. If the sound persists at the folding mechanism, treat it as a latch issue instead.',
    },
    {
      slug: 'rattle-at-folding-latch',
      label: 'The folding latch rattles or shifts',
      shortDescription:
        'The sound or movement comes directly from the folding lock, safety catch, hinge pin, or contact surfaces.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check the lock before riding',
      resultBody:
        'Manufacturers identify rattling and stem wobble as possible signs of loose parts or incorrect folding-latch engagement. A latch should lock as designed without stem play.',
      recommendedAction:
        'Do not ride until the latch is fully engaged and inspected under the model’s instructions. Replace worn or damaged parts rather than silencing the rattle with an improvised shim.',
    },
    {
      slug: 'visible-crack-or-deformation',
      label: 'There is a crack, bent part, or damaged weld',
      shortDescription:
        'A crack, split, deformation, chipped hinge, or opening weld is visible anywhere on the stem, clamp, folding mechanism, or adjoining frame.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Structural damage rules out further riding',
      resultBody:
        'CPSC recalls have documented scooter stem welds cracking and stems breaking during use. Tightening a latch cannot restore a cracked tube, weld, or integral hinge mount.',
      recommendedAction:
        'Stop using the scooter and do not test it under load. Contact the manufacturer or a suitable repair service about model-specific replacement, and check for a recall.',
    },
    {
      slug: 'still-loose-after-adjustment',
      label: 'The stem remains loose after adjustment',
      shortDescription:
        'The correct model procedure was attempted, but play remains, quickly returns, or the latch cannot be adjusted to lock firmly and release normally.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Further tightening is not the answer',
      resultBody:
        'Persistent play can indicate wear, damaged threads, incorrect parts, deformation, or a mechanism that needs replacement. Overtightening can also make a folding mechanism bind without fixing its condition.',
      recommendedAction:
        'Stop adjusting and arrange a complete inspection. Tell the service provider what was adjusted and whether the movement changed.',
    },
    {
      slug: 'latch-does-not-fully-engage',
      label: 'The latch or secondary lock will not fully engage',
      shortDescription:
        'The folding lever will not seat, the safety catch misses its position, the lock opens too easily, or the stem can begin folding while supposedly locked.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not ride with an incomplete lock',
      resultBody:
        'An unsecured folding mechanism can release and allow the stem to fold during use. A lever that appears nearly closed is not a substitute for full engagement.',
      recommendedAction:
        'Keep the scooter off and transport it rather than riding it. Follow the exact setup or repair instructions for the model, replacing damaged locking parts when required.',
    },
    {
      slug: 'scooter-matches-a-recall',
      label: 'The brand and model match a stem or folding recall',
      shortDescription:
        'The model, serial number, or production range is included in a CPSC or manufacturer recall involving the stem, front tube, weld, fastener, or folding mechanism.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Follow the recall remedy',
      resultBody:
        'Recall instructions are written for a confirmed product defect and may require immediate stop-use, a maintenance kit, replacement hardware, or a replacement stem.',
      recommendedAction:
        'Stop using the scooter and complete the official remedy. Do not substitute a generic adjustment for the recall instructions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'A steering connection is moving',
      description:
        'The stem, latch, clamp, or adjoining assembly is shifting instead of remaining rigid in its locked position.',
      severity: 'caution',
      chainLabel: 'Stem play',
    },
    {
      stageLabel: 'WHEN THE SCOOTER IS LOADED',
      title: 'Braking, steering, and bumps move the joint',
      description:
        'Forces that should pass through a secure stem can produce movement at the loose connection.',
      severity: 'warning',
      chainLabel: 'Repeated joint movement',
    },
    {
      stageLabel: 'IF THE CONDITION PROGRESSES',
      title: 'Lock engagement or alignment can deteriorate',
      description:
        'A moving fastener, worn contact surface, damaged thread, or distorted component may no longer hold the stem in its intended position.',
      severity: 'warning',
      chainLabel: 'Reduced lock engagement',
    },
    {
      stageLabel: 'IF THE LOCK OR STRUCTURE FAILS',
      title: 'The stem can fold, shift, or break',
      description:
        'Documented scooter recalls show that folding mechanisms, loose fasteners, and cracked stem welds can cause this type of failure.',
      severity: 'danger',
      chainLabel: 'Fold or break',
    },
    {
      stageLabel: 'DURING A RIDE',
      title: 'The rider can lose control and fall',
      description:
        'Sudden loss of handlebar support or steering stability can leave little opportunity to recover, especially while braking, turning, or traveling over an uneven surface.',
      severity: 'danger',
      chainLabel: 'Loss of control',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Only a secured accessory was moving, and the complete stem remains rigid',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Confirm the result with the scooter powered off, then secure the accessory and monitor for any new movement.',
    },
    {
      situation: 'There is any visible or detectable play at the folding joint',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not ride until the joint is correctly adjusted, repaired, or inspected under the model’s instructions.',
    },
    {
      situation: 'The stem play is increasing or has returned after correction',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop further riding and have the entire connection checked for wear, damaged hardware, thread problems, and deformation.',
    },
    {
      situation: 'A sound has been positively traced to a cable or removable accessory',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Secure the source and repeat the stationary check. Do not continue if the latch itself rattles or the stem moves.',
    },
    {
      situation: 'The folding latch or secondary catch will not fully lock',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Keep the scooter parked and use the exact model repair procedure or service support.',
    },
    {
      situation: 'A crack, bent part, chipped hinge, or damaged weld is visible',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not load or test the stem. Arrange model-specific replacement and check whether the scooter is recalled.',
    },
    {
      situation: 'The correct adjustment was attempted but play remains',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop tightening it and arrange inspection. Persistent movement may require replacement parts rather than another adjustment.',
    },
    {
      situation: 'The model or serial number is covered by a recall',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Follow the official stop-use and remedy instructions from CPSC and the recalling company.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop riding until you locate the movement',
      body:
        'Power the scooter off and keep it unavailable for use. Walk it or transport it for repair rather than relying on the stem for another ride.',
    },
    {
      title: 'Identify which connection has play',
      body:
        'On level ground, stand beside the scooter and gently load the handlebars while watching the folding joint, stem clamp, headset, fork, and front wheel. Keep fingers out of the hinge and do not perform a powered test.',
      destinationProblemSlug: 'rattling-scooter-handlebars',
    },
    {
      title: 'Check the complete folding lock',
      body:
        'Confirm that the stem is fully upright, the main latch seats as designed, and every secondary catch, pin, ring, or strap is engaged. Use the manual for the exact model because locking designs differ.',
      destinationProblemSlug: 'scooter-folding-latch-play',
    },
    {
      title: 'Inspect for damage before adjusting anything',
      body:
        'Look for cracks, opening welds, bent parts, missing hardware, backing-out fasteners, damaged threads, unusual gaps, and fresh rubbing marks. Structural damage calls for replacement, not added clamp force.',
    },
    {
      title: 'Use the model-specific remedy',
      body:
        'Find the model and serial number, check CPSC and manufacturer recall listings, and obtain the correct service instructions. Do not copy torque values, threadlocker choices, or folding adjustments from another scooter.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A crack or opening weld is visible',
      description:
        'Do not tighten around structural damage or test whether it will hold. A damaged stem, weld, or integral hinge component requires the correct replacement remedy.',
      severity: 'danger',
    },
    {
      title: 'The stem begins folding while locked',
      description:
        'Any partial release under hand pressure means the folding lock is not safely retaining the stem.',
      severity: 'danger',
    },
    {
      title: 'The latch will not seat or its safety catch will not engage',
      description: 'A nearly closed lever does not provide confirmed locking.',
      severity: 'danger',
    },
    {
      title: 'Play is increasing or returning',
      description:
        'A connection that will not remain adjusted may have wear, thread damage, moving hardware, or deformation.',
      severity: 'warning',
    },
    {
      title: 'Looseness remains after the specified adjustment',
      description:
        'Stop turning the adjuster. More force may conceal damage, strip threads, or make the mechanism bind without securing it.',
      severity: 'warning',
    },
    {
      title: 'The problem appeared after a crash or hard impact',
      description:
        'Inspect the stem, welds, folding mechanism, fork, and adjoining frame before the scooter is ridden again.',
      severity: 'danger',
    },
    {
      title: 'The scooter matches a safety recall',
      description:
        'Complete the official remedy even if the looseness seems minor or a home adjustment appears to remove it.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a tiny amount of scooter stem play normal?',
      answer:
        'Do not assume it is normal. Some movement may come from suspension, brakes, cables, or accessories, but visible movement at a folding hinge, stem clamp, or steering connection should be corrected before riding.',
    },
    {
      question: 'Can I tighten the folding mechanism and ride?',
      answer:
        'Only if the exact model instructions authorize that adjustment, the latch works normally afterward, and all play is gone. If looseness remains or returns, stop riding and arrange service.',
    },
    {
      question: 'How tight should the stem bolts be?',
      answer:
        'Use only the torque specification for the exact model and fastener. Scooter designs differ, and a value copied from another model can leave the joint loose or damage its hardware.',
    },
    {
      question: 'Can overtightening a folding latch cause problems?',
      answer:
        'Yes. Manufacturer guidance warns that excessive adjustment can make a folding mechanism too stiff or bind. The goal is correct engagement with no wobble, not maximum possible tightness.',
    },
    {
      question: 'Can I ride slowly to a repair shop?',
      answer:
        'Not with confirmed stem or folding-joint play. Low speed does not prevent the stem from folding, shifting, or breaking. Walk the scooter or transport it.',
    },
    {
      question: 'Does a rattle always mean the stem is loose?',
      answer:
        'No. Cables, bells, mounts, hooks, and trim can rattle. Reproduce the sound while stationary and verify that the stem and latch do not move before treating it as harmless.',
    },
    {
      question: 'How can I tell whether the play is in the hinge or steering bearings?',
      answer:
        'Watch each connection while a second person gently loads the handlebars with the scooter powered off. Movement at the folding seam points to the hinge or latch; movement above or below it may involve a clamp, headset, fork, or other steering part.',
    },
    {
      question: 'Should I add threadlocker to stop the bolt loosening?',
      answer:
        'Only if the manufacturer specifies the product, fastener, preparation, and procedure for your model. Threadlocker cannot repair worn threads, cracks, deformation, or an incorrectly assembled lock.',
    },
    {
      question: 'Can a cracked scooter stem be welded?',
      answer:
        'Do not arrange an improvised weld. The stem material, heat treatment, geometry, and affected wiring may require a complete manufacturer-approved replacement. A recall remedy may also require replacement rather than repair.',
    },
    {
      question: 'Can a scooter stem really fail without much warning?',
      answer:
        'Yes. CPSC recalls have documented folding mechanisms releasing, loose screws allowing front tubes to fold, and cracked stem welds leading to breakage and falls.',
    },
    {
      question: 'Does wearing a helmet make a loose stem acceptable?',
      answer:
        'No. A helmet is important fall protection, but it does not prevent sudden loss of steering or handlebar support. Fix the scooter before riding.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title:
        'Segway Recalls Segway Ninebot Max G30P and Max G30LP KickScooters Due to Fall Hazard and Risk of Serious Injury',
      url: 'https://www.cpsc.gov/Recalls/2025/Segway-Recalls-Segway-Ninebot-Max-G30P-and-Max-G30LP-KickScooters-Due-to-Fall-Hazard-and-Risk-of-Serious-Injury',
      sourceType: 'government',
      notes:
        'Documents a model-specific folding mechanism that could fail and let the handlebars or stem fold during use. The recall directs consumers to stop using affected scooters and complete the maintenance remedy.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Apollo Recalls Electric Scooters Due to Fall and Injury Hazards',
      url: 'https://www.cpsc.gov/Recalls/2025/Apollo-Recalls-Electric-Scooters-Due-to-Fall-and-Injury-Hazards',
      sourceType: 'government',
      notes:
        'Documents affected Apollo City scooters whose stem weld line could crack, allowing the stem to break and creating fall and injury hazards. The remedy is a replacement stem.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title:
        'Acer America Corporation Recalls Two-Wheeled Folding Electric Scooters Due to Risk of Injury from Fall Hazard',
      url: 'https://www.cpsc.gov/Recalls/2026/Acer-America-Corporation-Recalls-Two-Wheeled-Folding-Electric-Scooters-Due-to-Risk-of-Injury-from-Fall-Hazard',
      sourceType: 'government',
      notes:
        'Documents a recalled folding scooter where a loose screw could allow the front tube to fold unexpectedly. The remedy calls for immediate stop-use and model-specific tightening instructions.',
    },
    {
      publisher: 'Segway',
      title: 'Ninebot KickScooter F65 Product Manual',
      url: 'https://support.segway.com/product_files/20230616023826_Ninebot%20KickScooter%20F65%20Product%20Manual.pdf',
      sourceType: 'manufacturer',
      notes:
        'This model’s maintenance table calls for regular checks and gives specific folding-mechanism fastener procedures and torque values when the stem becomes shaky, showing why adjustments must be model-specific.',
    },
    {
      publisher: 'Apollo Scooters',
      title: 'How to Adjust the Folding Mechanism',
      url: 'https://support.apolloscooters.co/en-US/how-to-adjust-the-folding-mechanism-3361782',
      sourceType: 'manufacturer',
      notes:
        'Explains that a properly adjusted mechanism should lock securely without wobble, warns against overtightening, notes that procedures differ by model, and says to stop riding if looseness remains after adjustment.',
    },
    {
      publisher: 'NIU',
      title: 'NIU FAQ',
      url: 'https://shop.niu.com/pages/niu-faq',
      sourceType: 'manufacturer',
      notes:
        'Advises checking folding-latch engagement and stem fasteners when the stem wobbles, tracing rattles to loose parts, and seeking service when looseness remains after tightening the specified cover screws.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Exact-model owner manual and service instructions',
      description:
        'These identify the correct latch sequence, inspection points, compatible parts, adjustment procedure, and torque specifications for the scooter.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer-specified metric and torque tools',
      description:
        'Use only the sizes and torque-control tools required by the model instructions. Poorly fitting tools can damage fasteners and make later service harder.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Authorized scooter service or established micromobility repair shop',
      description:
        'Useful when play remains after adjustment, damage is visible, special tools are required, or the source of movement cannot be isolated.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'CPSC and manufacturer recall lookup',
      description:
        'Search with the brand, model, serial number, and production information before paying for a repair or applying a generic fix.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'scooter-folding-latch-play',
      anchorText: 'Can I ignore play in the scooter folding latch?',
      relationshipType: 'sibling',
    },
    {
      slug: 'rattling-scooter-handlebars',
      anchorText: 'Why are my scooter handlebars rattling?',
      relationshipType: 'cause',
    },
  ],
};
