import type { ProblemSeed } from '../types';

export const looseMotorcycleChain: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'motorcycle-drivetrain',
  slug: 'loose-motorcycle-chain',
  canonicalPath: '/motorcycles/drivetrain/loose-motorcycle-chain/',
  name: 'Loose motorcycle drive chain',
  eyebrow: 'Mobility · Motorcycles · Chain & Clutch',

  h1: 'Can I Ignore a Loose Motorcycle Chain?',
  seoTitle: 'Loose Motorcycle Chain: When to Stop Riding and What to Check',
  metaDescription:
    'A loose motorcycle chain can skip, damage nearby parts, or fail. See how the manual’s slack range, uneven tension, wear, and recent adjustment change the urgency.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'No—measure and correct it first',

  shortAnswer:
    'No. If the drive-chain slack is outside your motorcycle manufacturer’s range, correct it before normal riding. Leave the bike parked if slack is excessive, varies as the wheel turns, returns after adjustment, or comes with skipping or damaged parts.',

  whyItMattersHeading: 'Why a Loose Drive Chain Is More Than a Noise',
  whyItMatters: [
    'The correct slack and measuring method vary by motorcycle. Both excessive and insufficient slack can load drivetrain parts incorrectly, so use the exact range, stand position, load condition, and measuring point in your owner’s manual rather than a generic number.',
    'Uneven slack can indicate kinked or binding links or uneven wear. Excessive slack may let the chain strike nearby parts, slip, or break; government rider guidance warns that a slipping or broken chain could lock the rear wheel and cause a skid.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Arrange Transport If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Drive-chain measurement, uneven slack, adjustment security, wear limits, sprocket condition, and failure hazards checked against government, MSF, Honda, and Yamaha guidance.',
  disclaimer:
    'General guidance for chain-drive motorcycles. Slack specifications, measuring conditions, adjustment methods, and fastener torques vary by model; follow the exact owner’s and service information for your motorcycle.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'within-manual-range',
      label: 'It is at the loose end of the manual’s range',
      shortDescription:
        'You measured it exactly as directed, and every section remains within the specified range.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'It is in specification, not dangerously loose',
      resultBody:
        'The upper end of the manufacturer’s permitted range is still an acceptable setting. Visual sag alone does not override a correct measurement.',
      recommendedAction:
        'Leave the adjustment alone. Confirm that slack stays consistent as the wheel turns, then continue the inspection and lubrication schedule in the manual.',
    },
    {
      slug: 'not-measured-correctly',
      label: 'It looks loose, but you have not measured it correctly',
      shortDescription:
        'The bike was on the wrong stand, carried weight, or was checked at an arbitrary point.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Remeasure before adjusting or riding',
      resultBody:
        'Measurement methods differ between models. A reading taken with the wrong support, load, chain position, or reference point can make a correct chain look loose or produce a bad adjustment.',
      recommendedAction:
        'Do not adjust it by eye. Find the model-specific procedure, switch the engine off, select Neutral, and measure under the conditions the manual specifies.',
    },
    {
      slug: 'slightly-over-range',
      label: 'It is slightly beyond the listed range',
      shortDescription:
        'Slack is uniform and the chain looks intact, but the measured value is outside specification.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Adjust it before the next normal ride',
      resultBody:
        'Being only a little outside the range is less alarming than a chain hanging far below it, but it is still an incorrect setting. There is no model-independent safe distance for leaving it that way.',
      recommendedAction:
        'Arrange adjustment before ordinary riding. Inspect chain condition, sprockets, alignment, and available adjustment rather than assuming tension is the only issue.',
    },
    {
      slug: 'far-over-range',
      label: 'It is well beyond the specified range',
      shortDescription:
        'The chain has obvious excess movement or has passed a do-not-ride limit stated in the manual.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Leave the motorcycle parked',
      resultBody:
        'Some manufacturers publish a separate maximum beyond which the motorcycle must not be ridden. Even when no separate maximum is listed, excessive slack can permit slippage, breakage, or contact with the frame, swingarm, slider, or engine case.',
      recommendedAction:
        'Do not ride it to test whether it improves. Correct the adjustment and inspect the entire chain, both sprockets, the slider, guard, axle, and adjusters first.',
    },
    {
      slug: 'uneven-slack',
      label: 'Slack changes as the rear wheel turns',
      shortDescription: 'One section is loose while another section becomes noticeably tighter.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This needs more than a simple adjustment',
      resultBody:
        'Manufacturers associate inconsistent slack with kinked or binding links, and safety guidance calls for checking tension at the tightest point. Adjusting from the loosest section could leave the tight section over-tight.',
      recommendedAction:
        'Stop riding and rotate the wheel by hand with the engine off. Have the chain inspected for stiff links, damage, uneven wear, and sprocket problems; replace unserviceable parts.',
    },
    {
      slug: 'loose-again-after-adjustment',
      label: 'It became loose again soon after adjustment',
      shortDescription: 'The chain was set within range but quickly returned to an excessive reading.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep tightening it repeatedly',
      resultBody:
        'A recurring change raises concern about chain wear, uneven links, adjuster security, rear-axle fastening, or an incorrect adjustment procedure. Repeatedly taking up slack does not identify which condition is present.',
      recommendedAction:
        'Recheck the axle nut, adjuster locknuts, alignment, slack at multiple wheel positions, and chain and sprocket wear using the service information for the motorcycle.',
    },
    {
      slug: 'adjuster-at-limit',
      label: 'The adjusters are at the end of their usable range',
      shortDescription: 'The chain remains loose even with no normal adjustment travel left.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Adjustment is no longer the repair',
      resultBody:
        'Manufacturer guidance treats excessive slack at the adjustment limit as a worn-out chain condition on applicable designs. Improvised links or forcing the adjuster farther are not substitutes for replacement.',
      recommendedAction:
        'Replace the chain as specified for the motorcycle and inspect both sprockets, the chain slider, and related hardware before returning it to service.',
    },
    {
      slug: 'visible-chain-or-sprocket-damage',
      label: 'The chain or sprockets are visibly damaged',
      shortDescription:
        'You find loose pins, damaged rollers, cracked plates, seized links, or bent, missing, or heavily hooked teeth.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not ride on damaged drive parts',
      resultBody:
        'These are component defects, not normal slack adjustment. A chain that cannot articulate or engage the sprockets correctly is at greater risk of slipping or failing.',
      recommendedAction:
        'Arrange transport and replace the unserviceable parts. Inspect the full chain-and-sprocket system rather than replacing only the most obvious damaged item.',
    },
    {
      slug: 'chain-skips-under-load',
      label: 'The chain skips, jumps, or snaps under acceleration',
      shortDescription: 'Drive engagement changes abruptly when accelerating or climbing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop riding as soon as it is safe',
      resultBody:
        'Government motorcycle guidance treats chain slippage as a roadside stop condition. The cause may be incorrect slack, a worn or stretched chain, damaged links, or worn or bent sprockets.',
      recommendedAction:
        'Pull off safely, switch the engine off, and inspect without placing hands near a moving chain. Transport the motorcycle if wear, damage, or correct adjustment cannot be ruled out.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The chain is outside its intended operating range',
      description:
        'The motorcycle may still move normally, but the manufacturer’s required chain condition is no longer being met.',
      severity: 'caution',
      chainLabel: 'Excess free play',
    },
    {
      stageLabel: 'WHEN DRIVE LOAD CHANGES',
      title: 'Slack can be taken up abruptly',
      description:
        'Acceleration, deceleration, and gear changes can make an excessively loose chain slap or engage the sprockets less smoothly.',
      severity: 'warning',
      chainLabel: 'Chain snatch and slapping',
    },
    {
      stageLabel: 'IF THE CHAIN CONTACTS NEARBY PARTS',
      title: 'The slider, swingarm, frame, or case can be damaged',
      description:
        'Model-specific manufacturer manuals warn that excessive slack can allow the chain to strike and damage surrounding components.',
      severity: 'warning',
      chainLabel: 'Contact damage',
    },
    {
      stageLabel: 'IF WEAR OR BINDING CONTINUES',
      title: 'Slack becomes uneven or difficult to maintain',
      description:
        'Kinked links, worn components, and damaged sprocket teeth can prevent a uniform adjustment and accelerate further wear.',
      severity: 'warning',
      chainLabel: 'Unstable adjustment',
    },
    {
      stageLabel: 'IF THE CHAIN SLIPS OR BREAKS',
      title: 'Drive can disappear or the rear wheel can lock',
      description:
        'A failure can cause sudden loss of power to the rear wheel. Government rider manuals also warn that a slipping or broken chain could lock the wheel and cause a skid.',
      severity: 'danger',
      chainLabel: 'Loss of control risk',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The measured slack is within the manual’s range at every wheel position',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'No adjustment is needed. Continue the manufacturer’s inspection, cleaning, and lubrication schedule.',
    },
    {
      situation: 'The chain only looks loose and has not been measured as directed',
      ignoreAnswer: 'Only until you measure it',
      severity: 'caution',
      whatToDo:
        'Find the correct stand, load condition, measuring point, and range in the owner’s manual before deciding whether it needs adjustment.',
    },
    {
      situation: 'Slack is uniform but slightly outside the specified range',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Correct it before normal riding and inspect the chain, sprockets, alignment, and adjustment hardware.',
    },
    {
      situation: 'Slack exceeds a do-not-ride limit in the manual',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Leave the motorcycle parked and follow the model-specific adjustment and inspection procedure.',
    },
    {
      situation: 'Slack changes substantially as the wheel turns',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Check for kinked, binding, damaged, or unevenly worn links and have the drivetrain inspected.',
    },
    {
      situation: 'The chain became loose again after a recent adjustment',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Verify rear-axle fastening, adjuster security, alignment, chain condition, and the original adjustment method.',
    },
    {
      situation: 'The chain remains loose at the end of the adjustment range',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Replace the worn chain as required and inspect both sprockets and the chain slider.',
    },
    {
      situation: 'The chain skips, has damaged links, or runs over damaged sprocket teeth',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop riding and arrange transport for inspection and replacement of unserviceable parts.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Find the exact slack specification',
      body:
        'Use the owner’s manual for your motorcycle’s model and year. Record the specified range, measuring location, support method, load condition, and whether the wheel must be rotated to find the tightest section.',
    },
    {
      title: 'Measure with the engine off',
      body:
        'Put the transmission in Neutral and stabilize the motorcycle exactly as the manual directs. Keep fingers away from pinch points, move the wheel only by hand, and compare multiple chain positions when required.',
    },
    {
      title: 'Inspect the whole drive system',
      body:
        'Look for stiff or kinked links, loose pins, damaged rollers or plates, rust, missing seals, excessive slider wear, a loose guard, and bent, missing, or hooked sprocket teeth.',
      destinationProblemSlug: 'worn-motorcycle-sprocket',
    },
    {
      title: 'Adjust alignment and fasteners correctly',
      body:
        'Move both adjusters as directed, verify rear-wheel alignment, tighten the axle and locknuts to the model-specific torque, and recheck slack and smooth chain movement after tightening. Use a repair service if you lack the procedure or tools.',
    },
    {
      title: 'Replace worn parts instead of chasing the adjustment',
      body:
        'If the chain is damaged, remains uneven, or has reached its service or adjustment limit, replace it as specified. Inspect both sprockets because installing a new chain on worn teeth can shorten its life.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The chain skips or jumps under acceleration',
      description: 'Pull off safely. Slippage can precede loss of drive or a more serious chain failure.',
      severity: 'danger',
    },
    {
      title: 'Slack changes sharply as the wheel turns',
      description:
        'A tight section combined with a loose section can indicate binding links, damage, or uneven wear that cannot be corrected by setting one measurement.',
      severity: 'warning',
    },
    {
      title: 'Links, rollers, pins, or plates are damaged',
      description:
        'Loose pins, cracked plates, damaged rollers, seized links, or a questionable connecting link make the chain unserviceable until properly inspected.',
      severity: 'danger',
    },
    {
      title: 'Sprocket teeth are bent, missing, or heavily hooked',
      description:
        'Damaged teeth cannot engage the chain correctly and may require sprocket and chain replacement.',
      severity: 'danger',
    },
    {
      title: 'The chain is striking nearby parts',
      description:
        'Fresh marks, gouges, metal debris, or a worn-through slider show that excessive movement is already causing contact.',
      severity: 'danger',
    },
    {
      title: 'The adjusters are exhausted',
      description:
        'A chain that remains loose at the end of its usable adjustment range has reached a replacement condition on applicable designs.',
      severity: 'warning',
    },
    {
      title: 'The axle or adjusters appear loose or misaligned',
      description:
        'Do not ride until the rear wheel, adjusters, locknuts, and axle have been assembled, aligned, and tightened according to the service information.',
      severity: 'danger',
    },
    {
      title: 'The chain breaks or rear-wheel drive disappears',
      description:
        'Close the throttle and brake to a controlled stop in a safe area. Do not attempt to continue riding.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'How do I know whether my motorcycle chain is too loose?',
      answer:
        'Measure it using the exact method and range in your owner’s manual. The correct stand, load, wheel position, measuring point, and definition of slack vary by model.',
    },
    {
      question: 'Why can’t I use a generic motorcycle-chain slack number?',
      answer:
        'Different motorcycles specify very different ranges and measuring methods. A number that is correct for one bike may be wrong for another.',
    },
    {
      question: 'Can I ride a slightly loose chain to a repair shop?',
      answer:
        'There is no universal safe ride-to-shop allowance. Do not ride if the manual gives a do-not-ride limit, the reading is far outside range, slack varies, or any skipping, damage, contact, or loose hardware is present.',
    },
    {
      question: 'Why should I check the chain at more than one wheel position?',
      answer:
        'Slack can change around the chain because of kinked links, binding, damage, or uneven wear. The tightest section may control the adjustment even when another section looks very loose.',
    },
    {
      question: 'Will chain lubricant fix excessive slack?',
      answer:
        'No. Lubricant may free mild binding and reduces wear, but it does not correct an axle adjustment, restore worn components, or repair damaged links.',
    },
    {
      question: 'Why did the chain become loose again after I adjusted it?',
      answer:
        'Possible reasons include continuing wear, uneven links, an incorrect procedure, unsecured adjusters, rear-axle fastening problems, or sprocket wear. Reinspect the assembly rather than repeatedly tightening it.',
    },
    {
      question: 'Can I make the chain extra tight so it does not loosen again?',
      answer:
        'No. Insufficient slack can overload the engine and other drivetrain parts as the suspension moves. Set it only to the manufacturer’s range.',
    },
    {
      question: 'Can a loose chain damage the motorcycle even if it does not break?',
      answer:
        'Yes. Manufacturer manuals warn that excessive slack can let the chain damage parts such as the slider, swingarm, frame, or engine case on affected models.',
    },
    {
      question: 'Should I replace the sprockets when replacing the chain?',
      answer:
        'Inspect both sprockets and follow the model’s service guidance. A new chain running on worn teeth can wear rapidly, so replacing only the chain may not be an adequate repair.',
    },
    {
      question: 'Can a loose motorcycle chain lock the rear wheel?',
      answer:
        'A loose chain does not automatically lock the wheel, but government rider guidance warns that a chain that slips or breaks while riding could lock the rear wheel and cause a skid.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Utah Driver License Division',
      title: 'Motorcycle Section 3 — Preparing to Ride',
      url: 'https://dld.utah.gov/motorcycle-handbook-section-3-preparing-to-ride/',
      sourceType: 'government',
      notes:
        'Says pre-ride chassis checks should include adjusting a chain or belt to manufacturer specifications and inspecting sprockets for wear or damage.',
    },
    {
      publisher: 'New York State Department of Motor Vehicles',
      title: 'Motorcycle Manual: Ride Within Your Abilities',
      url: 'https://dmvsearch.webnycdn.ny.gov/motorcycle-manual/motorcycle-manual-ride-within-your-abilities',
      sourceType: 'government',
      notes:
        'Warns that chain slippage or breakage could lock the rear wheel and cause a skid, and directs riders to stop and inspect after slippage.',
    },
    {
      publisher: 'Yamaha Motor Corporation, U.S.A.',
      title: '2024 XSR700R/XSR700RC Owner’s Manual — Drive Chain Slack',
      url: 'https://library.ymcapps.net/library/om/contents/html/10/BMC-28199-11_02/7-22.html',
      sourceType: 'manufacturer',
      notes:
        'Requires pre-ride slack checks and adjustment when incorrect; warns of slippage, breakage, and component damage and specifies alignment and fastener checks.',
    },
    {
      publisher: 'American Honda Motor Co., Inc.',
      title: '2025 Honda CRF300L and CRF300L Rally Owner’s Manual',
      url: 'https://cdn.powersports.honda.com/documentum/MWOM/ml.remawmom.ak1t2525omen.pdf',
      sourceType: 'manufacturer',
      notes:
        'Gives model-specific slack ranges and do-not-ride limits, calls for checking multiple chain positions and smooth movement, and requires sprocket inspection.',
    },
    {
      publisher: 'American Honda Motor Co., Inc.',
      title: '2024 Honda CRF125F/FB Owner’s Manual',
      url: 'https://cdn.powersports.honda.com/documentum/MWOM/ml.remawmom.ak282424omen.pdf',
      sourceType: 'manufacturer',
      notes:
        'Links uneven slack to kinked or binding links, warns of engine-case damage from excess slack, and treats excessive slack at the adjustment limit as chain wear. Model values were not generalized.',
    },
    {
      publisher: 'Motorcycle Safety Foundation',
      title: 'T-CLOCS Pre-Ride Inspection Checklist',
      url: 'https://msf-usa.org/documents/library/t-clocs-pre-ride-inspection-checklist/',
      sourceType: 'industry',
      notes:
        'Directs riders to check chain or belt tension at the tightest point, inspect sprocket teeth for hooking, and confirm drivetrain fasteners are secure.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Model-specific owner’s or service manual',
      description:
        'Provides the correct slack range, measuring setup, adjustment procedure, alignment checks, fastener torques, and replacement limits for the motorcycle.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Ruler or motorcycle chain-slack gauge',
      description: 'Helps produce a repeatable measurement at the location specified by the manufacturer.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Correctly rated torque wrench',
      description:
        'Needed when the procedure requires the rear axle and adjuster hardware to be tightened to specified torque values.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Motorcycle drivetrain inspection service',
      description:
        'Appropriate when slack varies, adjustment will not hold, hardware security is uncertain, or chain and sprocket replacement is needed.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'worn-motorcycle-sprocket',
      anchorText: 'Can I ignore a worn motorcycle sprocket?',
      relationshipType: 'cause',
    },
    {
      slug: 'rusty-motorcycle-chain',
      anchorText: 'Can I ignore rust on a motorcycle chain?',
      relationshipType: 'related',
    },
  ],
};
