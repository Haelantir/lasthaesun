import type { ProblemSeed } from '../types';

/**
 * Home > Plumbing > Drains > Slow Drain.
 *
 * Every factual claim below traces to one of the six sources at the
 * bottom of this file. The core distinction is: one mildly slow drain is
 * usually a local, low-urgency restriction, while several drains slowing
 * together, gurgling, cross-fixture backups or sewage entering the home
 * point to a shared-line or sewer problem that needs prompt attention.
 */
export const slowDrain: ProblemSeed = {
  systemSlug: 'drains',
  slug: 'slow-drain',
  canonicalPath: '/home/plumbing/drains/slow-drain/',
  name: 'Slow Drain',
  eyebrow: 'Home · Plumbing · Drains',

  h1: 'Can I Ignore a Slow Drain?',
  seoTitle: 'Slow Drain: When to Fix It and When It Can Wait | Can I Ignore It',
  metaDescription:
    'A slow drain is usually a partial clog, not an emergency. See when you can keep using it, when to clear it, and which signs point to a sewer backup.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I use the drain?',
  canIUseItLabel: 'Usually, for now',

  shortAnswer:
    'A single slow sink, tub or shower usually is not an emergency, but it is worth clearing before it becomes a full clog. Several slow drains, gurgling, or water backing up can point to a blockage farther down the system and should be checked promptly.',

  whyItMattersHeading: 'Why Does a Slow Drain Matter?',
  whyItMatters: [
    'A slow drain usually means water is squeezing past a partial restriction. Hair, soap residue, food debris or grease can narrow the flow path, and more material can collect on the buildup until the drain becomes fully blocked.',
    'One slow fixture is often a local drain problem. Several fixtures slowing down together can mean the restriction is in a shared drain or side sewer. If dirty water or sewage starts coming back through a sink, tub, toilet or floor drain, that is a sewer backup and needs prompt attention.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Help Promptly If You Notice:',

  lastReviewedAt: new Date('2026-08-28T00:00:00Z'),
  reviewScope:
    'Household drain flow, clog progression, sewer-backup warning signs, grease-related blockages and basic consumer drain-clearing guidance checked against U.S. government and municipal utility sources.',
  disclaimer:
    "General household plumbing guidance only. Drain layouts and sewer responsibilities vary by property and location. If wastewater or sewage is backing up into the home, limit exposure and arrange professional help.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-drain-slightly-slow',
      label: 'One sink, tub or shower is only a little slow',
      shortDescription: 'It still empties completely and no other drain is acting up.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'You can watch it briefly',
      resultBody:
        'A mildly slow single drain is usually a local restriction. It is unlikely to be an emergency if it still empties and nothing else in the home is affected.',
      recommendedAction: 'Remove any visible debris and plan to clear the drain soon if it stays slow.',
    },
    {
      slug: 'getting-slower',
      label: 'It has been getting slower over days or weeks',
      shortDescription: 'The same drain is taking longer and longer to empty.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Clear it before it becomes a full clog',
      resultBody:
        'A restriction that keeps getting worse usually has material collecting in or near the drain. Waiting gives the buildup more time to narrow the pipe.',
      recommendedAction: 'Clear accessible debris, then use an appropriate plunger or hand drain snake if you are comfortable doing so.',
    },
    {
      slug: 'water-pools-first',
      label: 'Water pools before it finally drains',
      shortDescription: 'The sink, tub or shower holds standing water for a while.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The drain is already significantly restricted',
      resultBody:
        'Water is still getting through, but the drain has lost much of its normal flow. A complete blockage is more likely if the buildup continues.',
      recommendedAction: 'Reduce unnecessary use and clear the restriction soon.',
    },
    {
      slug: 'multiple-drains-slow',
      label: 'Several drains are slow at the same time',
      shortDescription: 'More than one sink, tub, shower or toilet is draining poorly.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check for a shared-line blockage',
      resultBody:
        'Several slow fixtures can point to a restriction farther downstream where their drain lines join. A fixture-by-fixture cleanup may not reach it.',
      recommendedAction: 'Limit heavy water use and arrange a plumbing inspection if the pattern persists or worsens.',
    },
    {
      slug: 'gurgling-or-fixture-reacts',
      label: 'I hear gurgling or another fixture reacts',
      shortDescription: 'A drain gurgles, a toilet bubbles, or water moves in another fixture when one is used.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The problem may be farther down the drain system',
      resultBody:
        'Gurgling or one fixture reacting to another can happen when normal flow and air movement are being disturbed by a blockage or another drainage problem.',
      recommendedAction: 'Avoid sending large amounts of water down the system and have it checked if the behavior repeats.',
    },
    {
      slug: 'backs-up-into-another-fixture',
      label: 'Water backs up into another sink, tub or floor drain',
      shortDescription: 'Using one fixture makes water rise somewhere else.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop adding more water',
      resultBody:
        'Water appearing in another fixture means it is not moving through the drain system normally. More water can turn a partial blockage into a larger indoor backup.',
      recommendedAction: 'Stop unnecessary water use and call a plumber.',
    },
    {
      slug: 'sewage-coming-up',
      label: 'Dirty water or sewage is coming up through a drain',
      shortDescription: 'Wastewater is entering the home instead of leaving it.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a sewer backup',
      resultBody:
        'Sewage and dirty wastewater can contain harmful bacteria and viruses. Keep people away from the affected area and deal with the backup promptly.',
      recommendedAction: 'Stop water use where practical, avoid contact with the wastewater and call a plumber or your local sewer utility as appropriate.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Water is getting past a partial restriction',
      description: 'The drain still works, but the opening available for flow is smaller than it should be.',
      severity: 'info',
      chainLabel: 'Partial restriction',
    },
    {
      stageLabel: 'KEEP USING IT',
      title: 'More debris can collect',
      description: 'Hair, soap residue, food debris or grease can catch on existing buildup and slow the drain further.',
      severity: 'caution',
      chainLabel: 'More buildup',
    },
    {
      stageLabel: 'IF THE BLOCKAGE GROWS',
      title: 'The drain can stop completely',
      description: 'A partial clog can become a full blockage, leaving standing water in the fixture.',
      severity: 'warning',
      chainLabel: 'Full clog',
    },
    {
      stageLabel: 'IF THE PROBLEM IS DOWNSTREAM',
      title: 'Other fixtures can be affected',
      description: 'A blockage in a shared drain or side sewer can interfere with more than one sink, tub, shower, toilet or floor drain.',
      severity: 'warning',
      chainLabel: 'Shared line',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Wastewater can back up into the home',
      description: 'A blocked sewer line can send dirty water or sewage back through a fixture or drain. That creates a cleanup problem and a potential exposure hazard.',
      severity: 'danger',
      chainLabel: 'Sewer backup',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One drain is only slightly slow and still empties',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo: 'Remove visible debris and clear it soon if the slow flow continues.',
    },
    {
      situation: 'The same drain keeps getting slower',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Clear the restriction before it becomes fully blocked.',
    },
    {
      situation: 'Water sits in the fixture before draining',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Reduce use and clear the drain soon.',
    },
    {
      situation: 'Several drains are slow at the same time',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Limit heavy water use and check for a shared-line problem.',
    },
    {
      situation: 'A toilet bubbles or another fixture reacts when water drains',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the drainage system checked if the pattern repeats.',
    },
    {
      situation: 'Water backs up into another fixture',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop unnecessary water use and call a plumber.',
    },
    {
      situation: 'Sewage or dirty wastewater comes up through a drain',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Keep people away from the wastewater and arrange prompt professional help.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Remove what you can reach',
      body: 'Lift out hair, food debris or other visible material from the stopper, strainer or drain opening. Wear gloves if the material is dirty and put removed debris in the trash.',
    },
    {
      title: 'Try a mechanical clearing method',
      body: 'A sink plunger or small hand drain snake can clear many local clogs. Use a tool that fits the fixture and stop if you would need to force or dismantle plumbing you are not comfortable working on.',
    },
    {
      title: 'Keep grease and solids out of the drain',
      body: 'Do not pour cooking fats, oils or grease down the sink. EPA guidance notes that FOG can clog pipes and pumps, and grease buildup can block sewer flow.',
    },
    {
      title: 'Escalate if the pattern is bigger than one fixture',
      body: 'Several slow drains, repeated gurgling, cross-fixture backups or a clog that quickly returns are good reasons to call a plumber. If sewage is backing up, your local sewer utility may also need to be involved.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Several drains become slow or clogged together',
      description: 'This can indicate a restriction in a shared drain or sewer line.',
      severity: 'warning',
    },
    {
      title: 'Water rises in another fixture when one is used',
      description: 'The drain system is no longer carrying flow normally.',
      severity: 'danger',
    },
    {
      title: 'A floor drain backs up when a toilet, washer or sink is used',
      description: 'Stop adding unnecessary water and have the drainage system checked.',
      severity: 'danger',
    },
    {
      title: 'Sewage or dirty wastewater enters the home',
      description: 'Avoid contact and arrange prompt cleanup and repair.',
      severity: 'danger',
    },
    {
      title: 'The clog keeps returning after you clear it',
      description: 'A recurring restriction may be deeper in the line or caused by a pipe defect.',
      severity: 'warning',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can a slow drain fix itself?',
      answer:
        'Sometimes the flow improves temporarily, but a real buildup usually does not disappear on its own. If the drain keeps slowing down, clear it before it becomes fully blocked.',
    },
    {
      question: 'Why is only one drain slow?',
      answer:
        'A single slow sink, tub or shower often has a local restriction near that fixture. Hair, soap residue, food debris and grease are common materials found in clogged drains.',
    },
    {
      question: 'Why are several drains slow at once?',
      answer:
        'A blockage farther downstream can affect several fixtures that share the same drain path. If multiple drains slow down together or one fixture affects another, have the system checked.',
    },
    {
      question: 'Can I keep using a slow drain?',
      answer:
        'Usually, if only one drain is mildly slow and it still empties. Use less water if it is getting worse, and stop using the system normally if water begins backing up elsewhere.',
    },
    {
      question: 'Is gurgling with a slow drain a bad sign?',
      answer:
        'Repeated gurgling means water and air are not moving through the drain system normally. A clog or another drainage issue may need to be checked, especially if other fixtures are involved.',
    },
    {
      question: 'Should I use chemical drain cleaner?',
      answer:
        'Follow the product label exactly and never mix cleaning products. If your home uses a septic system, EPA specifically advises avoiding chemical drain openers for a clogged drain and using a drain snake instead.',
    },
    {
      question: 'What if the drain works after I plunge or snake it?',
      answer:
        'If normal flow returns and stays normal, no further action may be needed. A drain that slows again soon may have a deeper or recurring blockage.',
    },
    {
      question: 'Is sewage coming up through a drain still just a clog?',
      answer:
        'It may begin with a blockage, but once sewage or dirty wastewater is entering the home, treat it as a sewer backup. Limit exposure and arrange prompt professional help.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Sink or cup plunger',
      description: 'Useful for many local sink, tub and shower clogs when the fixture can be sealed well enough to create pressure.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Hand drain snake or hair-removal tool',
      description: 'Useful for pulling hair and debris from a nearby drain restriction without pouring more material into the pipe.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Drain strainer',
      description: 'Helps catch hair, food scraps and other solids before they enter the drain.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional plumber',
      description: 'Appropriate when several fixtures are affected, the clog keeps returning, or water is backing up into the home.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Sanitary Sewer Overflow (SSO) Frequent Questions',
      url: 'https://www.epa.gov/npdes/sanitary-sewer-overflow-sso-frequent-questions',
      sourceType: 'government',
      notes: 'EPA identifies fats, oils, grease and some household products as causes of sewer blockages and explains the health concerns associated with untreated sewage overflows.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Industrial Uses for Wasted Food',
      url: 'https://www.epa.gov/sustainable-management-food/industrial-uses-wasted-food',
      sourceType: 'government',
      notes: 'EPA states that fats, oils and grease can clog pipes and pumps in public sewer systems.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'How to Care for Your Septic System',
      url: 'https://www.epa.gov/septic/how-care-your-septic-system',
      sourceType: 'government',
      notes: 'EPA advises keeping grease out of drains and, for septic systems, avoiding chemical drain openers for clogs in favor of methods such as a drain snake.',
    },
    {
      publisher: 'Seattle Public Utilities',
      title: 'Side Sewer Defects & Issues',
      url: 'https://www.seattle.gov/utilities/your-services/sewer-and-drainage/side-sewers/defects-and-issues',
      sourceType: 'government',
      notes: 'Seattle Public Utilities explains that debris and grease can reduce sewer capacity, slow drainage and contribute to complete blockages or backups.',
    },
    {
      publisher: 'Seattle Public Utilities',
      title: 'Side Sewer Backups',
      url: 'https://www.seattle.gov/utilities/your-services/sewer-and-drainage/side-sewers/backups',
      sourceType: 'government',
      notes: 'Defines sewer backups as sewage or wastewater coming up through sinks, toilets or drains and recommends prompt action to reduce exposure.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Biological Pollutants in Your Home',
      url: 'https://www.cpsc.gov/safety-education/safety-guides/home/biological-pollutants-your-home',
      sourceType: 'government',
      notes: 'CPSC advises consumers to read cleaning-product labels and not mix chemical products because hazardous gases can form.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'completely-clogged-drain', anchorText: 'Can I ignore a completely clogged drain?', relationshipType: 'escalation' },
    { slug: 'drain-gurgling', anchorText: 'Can I ignore a drain that keeps gurgling?', relationshipType: 'sibling' },
    { slug: 'sewage-backup', anchorText: 'Can I ignore sewage backing up through a drain?', relationshipType: 'escalation' },
    { slug: 'bad-smell-from-drain', anchorText: 'Can I ignore a bad smell coming from a drain?', relationshipType: 'related' },
  ],
};
