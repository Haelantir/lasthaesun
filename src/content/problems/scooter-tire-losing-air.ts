import type { ProblemSeed } from '../types';

export const scooterTireLosingAir: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'scooter-tires',
  slug: 'scooter-tire-losing-air',
  canonicalPath: '/e-bikes-and-scooters/scooter-tires/scooter-tire-losing-air/',
  name: 'Electric scooter tire losing air',
  eyebrow: 'Mobility · E-bikes & Scooters · Scooter Tires',

  h1: 'Can I Ignore an Electric Scooter Tire That Keeps Losing Air?',
  seoTitle: 'Electric Scooter Tire Keeps Losing Air: When to Stop Riding',
  metaDescription:
    'A scooter tire that repeatedly loses air needs a leak check. Learn when a monthly top-up is normal, when to stop riding, and what to inspect.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Only after it is inflated and holding',

  shortAnswer:
    'Probably not. A pneumatic scooter tire that repeatedly drops below its specified pressure has a leak or damage that needs finding. Inflate it and verify that it holds before riding; do not ride if it is soft, visibly damaged, unstable, or quickly goes flat again.',

  whyItMattersHeading: 'Why a Slow Leak Matters on a Scooter',
  whyItMatters: [
    'Pneumatic tires support the scooter and rider through air pressure. Below the model’s specified pressure, the tire flexes more, rolling resistance rises, and the scooter may feel less precise. Manufacturers warn that underinflation can accelerate wear, raise puncture risk, damage the tire, and, on some scooters, make the motor work harder.',
    'Some gradual pressure loss is normal. The important question is whether the tire remains within its specified range between routine checks. Repeated loss in one tire can come from a puncture, leaking valve, damaged tube, tubeless bead leak, tire damage, or a bent rim. A soft scooter tire also provides less cushioning when its small wheel hits a curb, pothole, or road debris.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Pressure-loss triage was checked against CPSC micromobility guidance and current manufacturer instructions for pneumatic scooter tires, valves, punctures, beads, and rims.',
  disclaimer:
    'This page applies to electric scooters with pneumatic tires. Follow the pressure and repair instructions for your exact model; wheel motors, split rims, tubes, tubeless beads, and sealants differ.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'small-monthly-correction',
      label: 'It only needs a small correction during a monthly check',
      shortDescription:
        'The tire stays firm, remains near its specified pressure, and has no visible damage or handling changes.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This can be routine pressure maintenance',
      resultBody:
        'Air can gradually permeate through pneumatic tires during storage and use. A small correction during a regular monthly check does not by itself prove that the tire is punctured.',
      recommendedAction:
        'Inflate it to the specification for your exact scooter and continue checking it with a gauge. Investigate if the loss becomes faster, affects only one tire, or lets the tire become noticeably soft.',
    },
    {
      slug: 'slightly-low-after-storage',
      label: 'Both tires are slightly low after the scooter was stored',
      shortDescription:
        'Neither tire is flat or damaged, and both hold their specified pressure after inflation.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Inflate before riding and monitor',
      resultBody:
        'Some pressure loss during storage can be normal for pneumatic tires. Similar loss in both tires is less suspicious than one tire repeatedly dropping faster than the other.',
      recommendedAction:
        'Inflate both tires before use and check them again before later rides. If either tire cannot hold the correct pressure, stop treating it as routine storage loss.',
    },
    {
      slug: 'needs-air-every-week',
      label: 'The same tire needs air every week',
      shortDescription:
        'One tire repeatedly falls below its specified pressure while the other remains stable.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Assume there is a slow leak',
      resultBody:
        'Repeated loss from one tire points toward a puncture, valve leak, tube problem, bead leak, or rim damage rather than ordinary maintenance.',
      recommendedAction:
        'Minimize riding until you locate the leak. Check the tread, sidewalls, valve, and rim area, then repair the correct component instead of continuing to top it up.',
    },
    {
      slug: 'flat-by-next-morning',
      label: 'The tire is flat by the next morning',
      shortDescription: 'It becomes very soft or fully flat soon after being inflated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not ride on it',
      resultBody:
        'This is an active leak, not normal pressure loss. Riding can damage the tire, tube, bead, or rim and may allow the tire to shift or deflate further while moving.',
      recommendedAction:
        'Power the scooter off and transport or walk it without riding. Find and repair the leak before putting the tire back into service.',
    },
    {
      slug: 'object-in-tread',
      label: 'A nail, screw, glass, or other object is visible in the tread',
      shortDescription:
        'The object may still be plugging the hole, whether or not the tire currently feels firm.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat it as a puncture',
      resultBody:
        'An embedded object can move, enlarge the damage, or release air rapidly when removed. A self-sealing tire may appear to hold pressure without making the damage irrelevant.',
      recommendedAction:
        'Do not ride. Leave the object in place until the scooter is in a safe work area or with a repair service, then follow the tire manufacturer’s puncture procedure.',
    },
    {
      slug: 'bubbles-at-valve',
      label: 'Soapy water bubbles around the valve',
      shortDescription:
        'Air is escaping from the valve core, valve stem, or the seal where the valve meets the wheel.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The valve needs service',
      resultBody:
        'Bubbles identify an active air path. The fix may be a loose or faulty core, a damaged stem, or a valve seal problem, depending on the wheel and tire design.',
      recommendedAction:
        'Do not keep relying on repeated inflation. Have the valve tightened or replaced as appropriate, then confirm that it holds pressure before riding.',
    },
    {
      slug: 'bead-or-rim-leak',
      label: 'Air bubbles at the bead, or the rim is bent or cracked',
      shortDescription:
        'The leak is where a tubeless tire meets the rim, often after an impact or running at low pressure.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The wheel may not be able to seal safely',
      resultBody:
        'Tubeless tires depend on an airtight bead-to-rim seal. Dirt, tire damage, an unseated bead, or rim deformation can prevent the tire from holding pressure.',
      recommendedAction:
        'Do not ride until the bead and rim are inspected. A clean, undamaged assembly may only need reseating, but a cracked or badly bent rim needs replacement.',
    },
    {
      slug: 'losing-air-during-ride',
      label: 'The tire loses pressure while you are riding',
      shortDescription:
        'The scooter suddenly feels soft, pulls, wobbles, steers differently, or makes a new tire noise.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop as soon as you can do so safely',
      resultBody:
        'A handling change can mean active deflation or wheel damage. Continuing places more load on the tire and rim and increases the chance of losing control.',
      recommendedAction:
        'Ease off the throttle, avoid abrupt steering or braking, and stop in a safe place. Do not resume riding until the tire and wheel have been checked.',
    },
    {
      slug: 'solid-or-honeycomb-tire',
      label: 'The scooter has solid or honeycomb tires',
      shortDescription: 'The tire has no pressurized air chamber or tubeless cavity.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Air loss does not apply to this tire',
      resultBody:
        'Solid tires do not require inflation. If the ride feels different, the cause may instead be cracking, separation, wear, wheel damage, or another scooter problem.',
      recommendedAction:
        'Confirm the tire type in the owner’s manual. Inspect a solid tire for cracks, missing material, deformation, or looseness rather than trying to inflate it.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The tire is no longer working at its intended pressure',
      description: 'The casing flexes more, rolling resistance increases, and steering response may change.',
      severity: 'caution',
      chainLabel: 'Low pressure → extra flex',
    },
    {
      stageLabel: 'IF YOU KEEP RIDING',
      title: 'The tire, tube, and motor may take more strain',
      description:
        'Repeated flex can accelerate tire wear, while the added rolling resistance can increase the work required from the scooter’s motor.',
      severity: 'warning',
      chainLabel: 'Extra flex → wear and resistance',
    },
    {
      stageLabel: 'AT THE NEXT HARD IMPACT',
      title: 'The tube, bead, or rim can be damaged',
      description:
        'A soft tire has less cushioning between the road and wheel. A bump or pothole can pinch a tube, disturb a tubeless bead, or transfer more force to the rim.',
      severity: 'warning',
      chainLabel: 'Low cushioning → impact damage',
    },
    {
      stageLabel: 'IF THE LEAK CONTINUES',
      title: 'The tire may stop holding usable pressure',
      description:
        'A puncture, valve fault, damaged bead, or bent rim can leave the tire too soft to support normal riding.',
      severity: 'warning',
      chainLabel: 'Active leak → unusable tire',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Rapid deflation causes a fall',
      description:
        'A tire that loses pressure while moving can change steering and stability suddenly. Tire or wheel damage can contribute to loss of control and a crash.',
      severity: 'danger',
      chainLabel: 'Rapid air loss → loss of control',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A small monthly correction keeps the tire within specification',
      ignoreAnswer: 'Yes, while it stays stable',
      severity: 'info',
      whatToDo:
        'Inflate with a gauge and keep monitoring for faster loss, visible damage, or a change in handling.',
    },
    {
      situation: 'Both tires are slightly low after storage',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Inflate both before riding and confirm that they continue to hold the model’s specified pressure.',
    },
    {
      situation: 'The same tire needs air every week',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Check for a puncture, leaking valve, tube damage, bead leak, or rim problem instead of repeatedly topping it up.',
    },
    {
      situation: 'The tire is flat by the next morning',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Do not ride. Transport the scooter and repair the leak before using it again.',
    },
    {
      situation: 'An object is embedded in the tread',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Leave the object in place until you are ready to repair the tire safely. Walk or transport the scooter rather than riding it.',
    },
    {
      situation: 'Air bubbles appear around the valve',
      ignoreAnswer: 'Only after the leak is fixed',
      severity: 'caution',
      whatToDo: 'Service the valve and verify that the tire holds pressure before riding.',
    },
    {
      situation: 'The rim is bent, cracked, or leaking at the bead',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Have the wheel inspected. Do not rely on sealant or repeated inflation to compensate for structural or sealing damage.',
    },
    {
      situation: 'The scooter pulls, wobbles, or changes handling',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop safely and inspect the tire and wheel before continuing.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm the tire type',
      body:
        'Check the owner’s manual or tire construction. Pneumatic tires may use an inner tube or a tubeless bead; solid and honeycomb tires do not hold air and need a different inspection.',
    },
    {
      title: 'Inflate to the specification for your exact scooter',
      body:
        'Use a compatible gauge and pump. Follow the owner’s manual, official support information, and tire markings, and do not exceed the tire’s stated limits.',
    },
    {
      title: 'Measure instead of squeezing the tire',
      body:
        'A tire can feel firm by hand while still being below specification. Record the pressure and which wheel is affected so you can tell whether the loss is gradual, recurring, or rapid.',
    },
    {
      title: 'Locate the air path',
      body:
        'Inspect the tread, sidewalls, valve, bead, and rim. Mild soapy water can reveal bubbles around a valve, puncture, or tubeless bead, but keep water away from electrical openings and dry the wheel afterward.',
    },
    {
      title: 'Match the repair to the damage',
      body:
        'A tube puncture, faulty valve, tubeless tread puncture, bead leak, damaged tire, and bent rim require different repairs. Use your model’s procedure or a scooter repair service, especially when the wheel contains the motor.',
      destinationProblemSlug: 'worn-scooter-tire',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The tire is visibly flat or coming off the rim',
      description:
        'Do not try to ride to a repair shop. Walking or transporting the scooter avoids placing more weight and impact on the tire and rim.',
      severity: 'danger',
    },
    {
      title: 'Pressure drops while the scooter is moving',
      description:
        'Stop safely. Active deflation can change steering and stability before the tire looks completely flat.',
      severity: 'danger',
    },
    {
      title: 'The scooter pulls, wobbles, or becomes difficult to steer',
      description:
        'A pressure difference, damaged tire, unseated bead, or bent wheel may be affecting control.',
      severity: 'danger',
    },
    {
      title: 'The tire has a bulge, deep cut, exposed casing, or sidewall puncture',
      description:
        'These signs can indicate structural damage that ordinary tread sealant or a simple tube patch will not correct.',
      severity: 'danger',
    },
    {
      title: 'The rim is bent, dented, or cracked',
      description: 'A damaged rim may not retain a tubeless bead and can damage a tube or replacement tire.',
      severity: 'danger',
    },
    {
      title: 'The valve stem is torn, crooked, or separating from the wheel',
      description:
        'A damaged stem can leak and may fail more rapidly when it moves during inflation or riding.',
      severity: 'warning',
    },
    {
      title: 'A nail, screw, or piece of glass is embedded in the tire',
      description:
        'Treat the tire as punctured even if it currently holds pressure. Do not continue riding or remove the object away from a safe repair location.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does every scooter tire pressure drop mean there is a puncture?',
      answer:
        'No. Pneumatic tires can slowly lose some pressure through normal permeation and during storage. A repeated or accelerating drop in one tire is more consistent with a leak or damage.',
    },
    {
      question: 'Is adding a little air once a month normal?',
      answer:
        'It can be for some pneumatic scooter tires, provided the tire stays within the manufacturer’s specified range and has no damage or handling changes. There is no universal acceptable pressure-loss figure for every tire.',
    },
    {
      question: 'Why does the same tire need air every week?',
      answer:
        'Common causes include a small tread puncture, leaking valve core or stem, damaged inner tube, tubeless bead leak, tire damage, or a bent rim. Repeated inflation does not correct the cause.',
    },
    {
      question: 'Can I ride after pumping the tire back up?',
      answer:
        'Only if it reaches the correct pressure, has no visible damage, and continues to hold. Do not ride if it softens again, leaks audibly, or changes the scooter’s handling.',
    },
    {
      question: 'Should I pull a nail or screw out of the tire?',
      answer:
        'Not while you are away from a safe repair area. The object may be limiting the leak, and removing it can cause rapid air loss. Stop riding and remove it only as part of the correct repair procedure.',
    },
    {
      question: 'Can I find the leak with soapy water?',
      answer:
        'Mild soapy water can reveal bubbles at a valve, puncture, or tubeless bead. Apply it only around the tire and wheel, avoid electrical openings, and dry the area afterward.',
    },
    {
      question: 'Can tire sealant permanently fix the problem?',
      answer:
        'Sealant use depends on the tire and manufacturer. It may seal some small tread punctures, but it does not make sidewall damage, a faulty valve, a damaged bead, or a bent rim safe.',
    },
    {
      question: 'Are tube and tubeless scooter tire repairs the same?',
      answer:
        'No. A tube must be patched or replaced and the original cause removed. A tubeless tire depends on its tread, valve, bead, and rim all remaining airtight.',
    },
    {
      question: 'Which pressure should I use?',
      answer:
        'Use the specification for your exact scooter and installed tire. Check the owner’s manual and official manufacturer support along with the tire markings, and ask the manufacturer if those instructions conflict.',
    },
    {
      question: 'Do the front and rear tires always use the same pressure?',
      answer:
        'No. Some models specify different pressures. Do not copy a pressure from another scooter, even if its tires look similar.',
    },
    {
      question: 'What if my scooter has solid tires?',
      answer:
        'Solid and honeycomb tires cannot lose air. Inspect them for cracks, separation, missing chunks, deformation, or wheel damage if the ride has changed.',
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
        'Advises checking scooter tires and other components for damage before riding, and notes that small scooter tires can be stopped suddenly by objects and uneven surfaces.',
    },
    {
      publisher: 'Segway',
      title: 'F3 Series User Manual',
      url: 'https://store.segway.com/media/wysiwyg/f3-page/F3_Series_User_Manual.pdf',
      sourceType: 'manufacturer',
      notes:
        'Warns that underinflated tires can damage the tires, affect riding safety, overwork the motor, and contribute to unexpected motor shutdown; directs users to check pressure regularly.',
    },
    {
      publisher: 'Xiaomi',
      title: "Why do the Xiaomi Electric Scooter 5 Pro's tires slowly deflate during use?",
      url: 'https://www.mi.com/global/support/faq/details/KA-509366/',
      sourceType: 'manufacturer',
      notes:
        'Explains that some tubeless pressure loss occurs naturally during storage and use, recommends regular gauge checks, and advises against riding with irregular tire pressure.',
    },
    {
      publisher: 'Apollo Scooters',
      title: 'What To Do If Your Apollo Scooter Tire Is Punctured And Flat',
      url: 'https://support.apolloscooters.co/en-US/what-to-do-if-your-apollo-scooter-tire-is-punctured-and-flat-4332089',
      sourceType: 'manufacturer',
      notes:
        'Covers tread punctures, valve and bead leaks, sidewall damage, embedded objects, safe transport, and why an object should remain in place until the scooter reaches a safe repair location.',
    },
    {
      publisher: 'Park Tool',
      title: 'Tire and Tube Removal and Installation',
      url: 'https://www.parktool.com/en-us/blog/repair-help/tire-and-tube-removal-and-installation',
      sourceType: 'industry',
      notes:
        'Identifies punctures, pinch damage, valve-core leaks, rim-strip problems, bead damage, and the need to inspect the tire, tube, and rim when servicing a flat.',
    },
    {
      publisher: 'Pure Electric',
      title: 'Tyres & Punctures',
      url: 'https://support.pureelectric.com/en/articles/12595629-tyres-punctures',
      sourceType: 'manufacturer',
      notes:
        'States that gradual air loss can occur, explains why pressure loss matters more in small scooter tires, and discusses low-pressure puncture and rim-damage risks.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Compatible tire pressure gauge',
      description:
        'A gauge that fits the scooter’s valve gives a more reliable reading than squeezing the tire by hand.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pump with the correct valve adapter',
      description:
        'Small scooter wheels can have recessed or difficult-to-reach valves, so the correct adapter helps inflate without straining the stem.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Mild soap and water leak check',
      description:
        'Useful for identifying bubbles at a valve, tread puncture, or tubeless bead without removing the wheel.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Electric scooter or bicycle repair service',
      description:
        'Useful when the wheel contains a motor, the rim is damaged, the bead will not seal, or tire removal requires model-specific tools.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'worn-scooter-tire',
      anchorText: 'Can I ignore a worn electric scooter tire?',
      relationshipType: 'sibling',
    },
    {
      slug: 'cracked-solid-scooter-tire',
      anchorText: 'Can I ignore cracks in a solid scooter tire?',
      relationshipType: 'sibling',
    },
    {
      slug: 'scooter-pulls-to-one-side',
      anchorText: 'Can I ignore a scooter that pulls to one side?',
      relationshipType: 'escalation',
    },
  ],
};
