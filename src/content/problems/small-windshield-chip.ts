import type { ProblemSeed } from '../types';

/**
 * Cars > Glass > Small Windshield Chip.
 *
 * Every factual claim below traces to one of the five sources at the
 * bottom of this file. The core distinction is: a small isolated chip away
 * from the driver's primary viewing area is often a repair candidate and
 * usually does not force an immediate stop, while damage that spreads,
 * reaches an edge, involves the inside layer, or sits in the driver's main
 * view needs faster professional assessment. No fixed safe waiting period
 * is invented — no source publishes one.
 */
export const smallWindshieldChip: ProblemSeed = {
  systemSlug: 'glass',
  slug: 'small-windshield-chip',
  canonicalPath: '/cars/glass/small-windshield-chip/',
  name: 'Small Windshield Chip',
  eyebrow: 'Cars · Glass',

  h1: 'Can I Ignore a Small Windshield Chip?',
  seoTitle: 'Small Windshield Chip? When You Can Drive and When to Fix It',
  metaDescription:
    'A small windshield chip may be drivable for now, but chips can spread. Learn when repair can wait briefly and when the damage needs faster attention.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Usually briefly, if the chip is small and does not block your view',

  shortAnswer:
    'Probably not. A small chip away from your main line of sight usually does not mean you have to stop driving immediately, but it should be repaired soon. If cracks start spreading, the damage reaches an edge, or your view is affected, deal with it faster.',

  whyItMattersHeading: 'Why Does a Windshield Chip Matter?',
  whyItMatters: [
    'A chip is damage to laminated windshield glass. The outer layer can crack around the impact point even while the windshield still looks mostly intact.',
    'Road vibration and temperature changes can make existing damage spread. Once a chip turns into a larger crack, repair may no longer be the best option and the windshield may need replacement.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Ignoring It If You Notice:',

  lastReviewedAt: new Date('2026-08-28T00:00:00Z'),
  reviewScope:
    "Small laminated-windshield chips, spreading cracks, driver visibility, edge damage and common repair-versus-replacement factors.",
  disclaimer:
    "General automotive glass guidance only. Repairability depends on the exact type, size, depth and location of the damage, the windshield design and the repair provider's standards. State inspection and windshield laws also vary.",

  aliases: [
    '/cars/glass/windshield-chip/',
    '/cars/glass/rock-chip-windshield/',
    '/cars/windshield-chip/',
  ],

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'small-chip-away-from-view',
      label: 'It is a small chip away from my main view',
      shortDescription: 'No long cracks are coming from it and the windshield is otherwise intact.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'YOU CAN USUALLY DRIVE FOR NOW',
      resultBody:
        "A small isolated chip away from the driver's main viewing area is often repairable. It can still spread, so waiting does not help.",
      recommendedAction: 'Arrange a windshield repair soon.',
    },
    {
      slug: 'chip-in-driver-view',
      label: 'The chip is directly in front of me',
      shortDescription: 'The damage sits in the area I look through while driving.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET THE VIEW CHECKED',
      resultBody:
        "Even small damage can scatter light or leave distortion in the driver's viewing area. Repair standards put tighter limits on damage in this part of the windshield.",
      recommendedAction: 'Have an auto-glass professional assess it promptly.',
    },
    {
      slug: 'cracks-starting',
      label: 'Small cracks are growing out of the chip',
      shortDescription: 'The damage is no longer just a single impact mark.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE CHIP IS STARTING TO SPREAD',
      resultBody:
        'Once cracks start extending from the impact point, the damage can keep growing with vibration and temperature changes.',
      recommendedAction: 'Get it assessed soon while repair may still be possible.',
    },
    {
      slug: 'crack-growing',
      label: 'The crack is getting longer',
      shortDescription: 'The damaged line has noticeably spread since I first saw it.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DO NOT KEEP WAITING',
      resultBody: 'Growing damage is less likely to stay a simple chip repair. A longer crack may push the job toward windshield replacement.',
      recommendedAction: 'Arrange glass service promptly.',
    },
    {
      slug: 'damage-at-edge',
      label: 'The damage reaches the edge of the windshield',
      shortDescription: 'A crack touches the outer edge of the glass.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'EDGE DAMAGE NEEDS ATTENTION',
      resultBody: 'Edge cracks are treated differently from a small isolated chip and may not be suitable for a normal chip repair.',
      recommendedAction: 'Have the windshield inspected for repair or replacement.',
    },
    {
      slug: 'multiple-chips',
      label: 'There are several chips or damaged spots',
      shortDescription: 'More than one impact point is visible on the windshield.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'HAVE THE WHOLE WINDSHIELD CHECKED',
      resultBody: 'Multiple damaged areas can affect repair options and visibility even when each mark looks small.',
      recommendedAction: 'Have an auto-glass professional evaluate all of the damage together.',
    },
    {
      slug: 'inner-layer-damage',
      label: 'The glass is cracked on the inside too',
      shortDescription: 'Damage appears to reach or involve the inner layer of the laminated windshield.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THIS MAY NEED REPLACEMENT',
      resultBody:
        'Current laminated-glass repair standards recommend replacement when damage penetrates both the inside and outside layers or involves the inside layer.',
      recommendedAction: 'Do not attempt a simple chip repair. Have the windshield inspected for replacement.',
    },
    {
      slug: 'camera-area',
      label: 'The chip is near a windshield camera or sensor',
      shortDescription: 'The damage is close to a forward-facing camera, sensor or other feature built into the windshield area.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'HAVE THE LOCATION CHECKED',
      resultBody: 'Some windshields have cameras, sensors, coatings or other features that can affect the repair decision.',
      recommendedAction: "Have the damage assessed using the vehicle manufacturer's guidance.",
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The outer glass has a small break',
      description: 'A stone or other object damages the outer layer of the laminated windshield.',
      severity: 'caution',
      chainLabel: 'Chip',
    },
    {
      stageLabel: 'IF THE DAMAGE IS STRESSED',
      title: 'Small cracks can begin to spread',
      description: 'Road vibration, body movement and temperature changes can extend existing damage.',
      severity: 'caution',
      chainLabel: 'Crack growth',
    },
    {
      stageLabel: 'IF THE CRACK GROWS',
      title: 'Repair options become more limited',
      description: 'Larger, deeper or poorly located damage may no longer be suitable for a normal windshield repair.',
      severity: 'warning',
      chainLabel: 'Fewer repair options',
    },
    {
      stageLabel: 'IF IT REACHES A BAD LOCATION',
      title: 'Visibility or repairability can become a problem',
      description: "Damage in the driver's viewing area, at an edge or around windshield features needs closer evaluation.",
      severity: 'warning',
      chainLabel: 'Location matters',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'The windshield needs replacement',
      description: 'Damage that spreads too far or involves the wrong part of the laminated glass may require the entire windshield to be replaced.',
      severity: 'danger',
      chainLabel: 'Replacement',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: "Small isolated chip away from the driver's main viewing area",
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'You can usually keep driving, but arrange repair soon before the damage spreads.',
    },
    {
      situation: "Chip is directly in the driver's main viewing area",
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the damage assessed promptly because both the chip and the finished repair can affect visibility.',
    },
    {
      situation: 'Small cracks are growing from the chip',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange repair or inspection soon.',
    },
    {
      situation: 'The crack is visibly getting longer',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the windshield checked before the damage spreads further.',
    },
    {
      situation: 'Damage reaches the edge of the windshield',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have an auto-glass professional determine whether replacement is needed.',
    },
    {
      situation: 'Damage involves the inside layer of the windshield',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Have the windshield inspected for replacement.',
    },
    {
      situation: 'Damage blocks or distorts your view of the road',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not continue normal driving if you cannot see the road clearly.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Check where the chip is',
      body: 'Look at whether it sits in your normal view of the road, near an edge or close to a windshield camera or sensor.',
    },
    {
      title: 'Step 2: See if cracks are growing from it',
      body: 'A clean isolated chip is a better repair candidate than damage that is already spreading.',
    },
    {
      title: 'Step 3: Keep the damaged area clean',
      body: 'Avoid picking at the chip or pushing on the glass. Dirt and moisture inside the break can make a clean repair harder.',
    },
    {
      title: 'Step 4: Arrange a glass assessment soon',
      body: 'A professional can tell whether the damage can be repaired or whether the windshield needs replacement.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The crack is spreading',
      description: 'Growing damage can reduce the chance of a simple repair.',
      severity: 'warning',
    },
    {
      title: 'The damage blocks or distorts your view',
      description: 'Clear driver visibility comes first.',
      severity: 'danger',
    },
    {
      title: 'A crack reaches the windshield edge',
      description: 'Edge damage needs professional evaluation.',
      severity: 'warning',
    },
    {
      title: 'The inside layer is damaged',
      description: 'Laminated-glass repair standards recommend replacement for damage involving the inside layer.',
      severity: 'danger',
    },
    {
      title: 'Several cracks spread from one impact point',
      description: 'Complex damage may fall outside normal repair limits.',
      severity: 'warning',
    },
    {
      title: 'The windshield suddenly develops a long crack',
      description: 'Arrange service before normal driving continues.',
      severity: 'warning',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I drive with a small windshield chip?',
      answer: 'Usually for a short time if the chip is small, stable and away from your main view. Repair it soon because chips can spread.',
    },
    {
      question: 'Will a windshield chip spread?',
      answer: 'It can. Temperature changes, vibration and normal vehicle movement can extend existing cracks around the impact point.',
    },
    {
      question: 'Does every windshield chip need a new windshield?',
      answer: 'No. Many small chips can be repaired. Size, damage type, depth and location decide whether repair is suitable.',
    },
    {
      question: 'Can a chip in front of the driver be repaired?',
      answer:
        "Sometimes, but repair standards use tighter limits in the driver's primary viewing area because the damage or finished repair can affect visibility.",
    },
    {
      question: 'Is a chip near the edge worse?',
      answer: 'Edge damage needs closer inspection. A crack that reaches the edge can change the repair decision and may require replacement.',
    },
    {
      question: 'How long can I wait to repair a windshield chip?',
      answer: 'There is no fixed safe waiting period. A chip can stay stable or start spreading, so repairing it sooner keeps more options open.',
    },
    {
      question: 'Can temperature changes make a windshield chip worse?',
      answer: 'Yes. Glass expands and contracts as temperatures change, which can put more stress around existing damage.',
    },
    {
      question: 'Should I use a DIY windshield repair kit?',
      answer:
        "A kit may work for some small damage, but the correct repair depends on the type and location of the break. Damage in the driver's view, near an edge or around sensors is better assessed professionally.",
    },
    {
      question: 'What is a windshield chip repair?',
      answer:
        'A repair removes air from the break and fills it with resin. The goal is to stabilize the damage and improve its appearance, although a repaired spot may still be visible.',
    },
    {
      question: 'Is a repaired windshield chip supposed to disappear completely?',
      answer: 'Not necessarily. A good repair can still leave a cosmetic mark even when the break has been properly filled and stabilized.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Professional windshield repair',
      description: 'Best for small repairable chips before they spread into larger cracks.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Windshield replacement assessment',
      description: 'Needed when damage is too large, reaches the wrong location or involves layers that should not be repaired.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual",
      description: 'Check it when damage is close to a forward-facing camera, sensor, head-up display or other windshield feature.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'FMVSS Considerations for Vehicles With Automated Driving Systems: Volume 1 — FMVSS No. 205 Glazing Materials',
      url: 'https://www.nhtsa.gov/document/fmvss-considerations-vehicles-automated-driving-systems-volume-1',
      sourceType: 'government',
      notes:
        'NHTSA explains that FMVSS No. 205 is intended in part to ensure the transparency needed for driver visibility and to reduce injuries involving vehicle glazing.',
    },
    {
      publisher: 'U.S. Code of Federal Regulations',
      title: '49 CFR 571.205 — Standard No. 205; Glazing materials',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.205',
      sourceType: 'regulation',
      notes: 'Federal safety standard for motor-vehicle glazing materials. It governs glazing performance and transparency, not a universal waiting period for an existing windshield chip.',
    },
    {
      publisher: 'Auto Glass Safety Council / National Windshield Repair Division',
      title: 'ANSI/AGSC/NWRD/ROLAGS 002-2022 — Repair of Laminated Automotive Glass Standard',
      url: 'https://rolags.com/pdf/ANSI%2BAGSC%2BNWRD%2BROLAGS%2B002-2022.pdf',
      sourceType: 'standards_body',
      notes:
        "Current laminated-auto-glass repair standard covering repairable damage dimensions, repair limitations, the driver's primary viewing area and conditions where replacement is recommended.",
    },
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'NHTSA Interpretation — Windshield Repair Kits and FMVSS No. 205',
      url: 'https://www.nhtsa.gov/interpretations/aiam5118',
      sourceType: 'government',
      notes: 'NHTSA explains that FMVSS No. 205 does not set federal performance requirements for aftermarket windshield crack-repair kits. Used to avoid presenting a federal chip-repair limit that does not exist.',
    },
    {
      publisher: 'AAA',
      title: 'Windshield Repair and Replacement',
      url: 'https://www.aaa.com/autorepair/articles/windshield-repair-and-replacement',
      sourceType: 'industry',
      notes: 'Consumer guidance explaining that repairability depends heavily on the size and location of the damage and that cracks extending from an edge are commonly replacement candidates.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'cracked-windshield', anchorText: 'Can I ignore a cracked windshield?', relationshipType: 'escalation' },
    { slug: 'windshield-camera-warning', anchorText: 'Can I ignore a windshield camera warning?', relationshipType: 'related' },
    { slug: 'windshield-wiper-streaks', anchorText: 'Can I ignore windshield wiper streaks?', relationshipType: 'related' },
  ],
};
