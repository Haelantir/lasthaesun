import type { ProblemSeed } from '../types';

export const brownWaterFromFaucet: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'water-quality',
  slug: 'brown-water-from-faucet',
  canonicalPath: '/home/plumbing/water-quality/brown-water-from-faucet/',
  name: 'Brown Water From Faucet',
  eyebrow: 'Home · Plumbing · Water Quality',

  h1: 'Can I Ignore Brown Water From My Faucet?',
  seoTitle: 'Brown Water From the Faucet: What It Means and What to Do',
  metaDescription:
    'Brown faucet water is often rust or sediment, but do not drink it while discolored. Learn when flushing is enough and when to call the utility or plumber.',

  aliases:
    ['/home/plumbing/water-quality/brown-tap-water/', '/home/plumbing/water-quality/rusty-water-from-faucet/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I drink or cook with it?',
  canIUseItLabel: 'Not while it is discolored',

  shortAnswer:
    'Probably not. Brown water is often rust, iron, manganese or disturbed sediment, but color alone does not tell you exactly what is in the water. Do not drink or cook with visibly discolored water; check whether the problem clears from the cold tap and investigate it if it persists or returns.',

  whyItMattersHeading: 'Why Did My Water Turn Brown?',
  whyItMatters: [
    'Brown, reddish or orange water commonly comes from iron, manganese, rust or sediment in water mains or household plumbing. A water-main repair, hydrant use, construction or restoration of water service can disturb material that had settled inside pipes. If that is the cause, the water may return to normal after the system and your cold-water plumbing are flushed.',
    'Where the discoloration appears tells you a lot. Brown water from hot taps only points toward the water heater or hot-water plumbing. A problem at one faucet can be local to that fixture or branch of plumbing. Brown cold water at several faucets may originate farther upstream. A private well needs different treatment because a new change in color can be a reason to test the water rather than assume it is harmless sediment.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It for Drinking or Cooking If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current EPA and CDC drinking-water guidance and municipal utility guidance on discolored water.',
  disclaimer:
    'General household drinking-water triage. Local water utility advisories and public health instructions take priority.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'after-water-main-work',
      label: 'It started after water-main work, hydrant use or nearby construction',
      shortDescription:
        'Several cold-water faucets became brown or rusty after a disturbance to the public water system.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Disturbed sediment is a common explanation',
      resultBody:
        'Changes in flow can stir up iron, manganese and sediment inside water mains. This type of discoloration may clear once the disturbed material is flushed out.',
      recommendedAction:
        'Avoid drinking, cooking or doing laundry with the discolored water. Run a cold-water tap and see whether it returns completely clear. Contact your utility if it does not.',
    },
    {
      slug: 'after-water-service-restored',
      label: 'It appeared after the water was shut off and turned back on',
      shortDescription: 'The water was clear before the interruption and became brown when service returned.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The shutoff may have disturbed pipe sediment',
      resultBody:
        'Restoring flow after a service interruption can move sediment and corrosion products that were sitting inside mains or plumbing.',
      recommendedAction:
        'Use cold water to flush the line until it runs clear. Do not use the visibly discolored water for drinking or cooking while you are checking it.',
    },
    {
      slug: 'hot-water-only',
      label: 'Only the hot water is brown',
      shortDescription: 'Cold water stays clear but hot water from one or more faucets is discolored.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Look at the water heater',
      resultBody:
        'When cold water is clear and only hot water is brown, sediment or corrosion in the water heater or hot-water plumbing becomes a more likely source.',
      recommendedAction:
        "Stop treating this as a public-water problem. Follow the water-heater manufacturer's maintenance guidance or have the heater and hot-water plumbing inspected.",
    },
    {
      slug: 'one-faucet-only',
      label: 'Only one faucet has brown cold water',
      shortDescription: 'Other cold-water faucets in the home run clear.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The problem may be local to that fixture',
      resultBody:
        'A problem isolated to one faucet is more consistent with that fixture, its aerator, connecting line or a nearby section of plumbing than with the entire water supply.',
      recommendedAction:
        'Compare the affected faucet with other cold-water taps. If the discoloration stays isolated, inspect the faucet aerator and local plumbing or have a plumber check it.',
    },
    {
      slug: 'multiple-cold-faucets',
      label: 'Several cold-water faucets are brown',
      shortDescription: 'Discoloration appears throughout the home rather than at one fixture.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Check the supply before blaming one faucet',
      resultBody:
        'Brown cold water at multiple fixtures can come from the building plumbing, service line or public distribution system. Nearby water-main activity makes a utility-side cause more plausible.',
      recommendedAction:
        'Ask whether neighbors are seeing the same thing and check your water utility for work or alerts. Report persistent discoloration to the utility or building manager.',
    },
    {
      slug: 'keeps-coming-back',
      label: 'The water clears but the brown color keeps returning',
      shortDescription: 'Flushing temporarily fixes the appearance but the problem repeatedly comes back.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Recurring discoloration deserves a cause',
      resultBody:
        'Repeated brown water can point to ongoing corrosion, sediment in household plumbing or a water-heater problem rather than a one-time disturbance.',
      recommendedAction:
        'Note whether it affects hot water, cold water or both and whether it happens at every fixture. Use that pattern to decide whether to contact the utility or a plumber.',
    },
    {
      slug: 'private-well-color-change',
      label: 'My home uses a private well and the water changed color',
      shortDescription: 'Well water that was normally clear has become brown, rusty or unusually cloudy.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Test the well water',
      resultBody:
        "Private wells are not monitored like public water systems. CDC recommends testing when a well's color, taste or smell changes because a visible change can accompany problems that cannot be identified by appearance alone.",
      recommendedAction:
        'Use another safe source for drinking and cooking while you arrange appropriate testing through a state-certified laboratory and ask your local health department what contaminants to test for.',
    },
    {
      slug: 'unusual-odor-with-brown-water',
      label: 'The brown water also has a fuel, chemical or sewage-like odor',
      shortDescription: 'The odor appears to come from the water itself rather than only from the sink drain.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not assume this is ordinary rust',
      resultBody:
        'A strong unusual odor changes the situation because discoloration alone cannot identify the substance involved. Chemical contamination also cannot be made safe just by guessing at a household treatment.',
      recommendedAction:
        'Stop using the water for drinking and cooking. Contact the water utility or local health authority and follow any instructions they give about other household uses.',
    },
    {
      slug: 'clears-and-stays-clear',
      label: 'It clears completely and does not come back',
      shortDescription:
        'Cold water returns to its normal appearance and stays clear with no unusual smell or other warning signs.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'A temporary disturbance is more likely',
      resultBody:
        'Brown water that appears around a known distribution disturbance and then fully clears fits the common pattern of rust or sediment being stirred up in the system.',
      recommendedAction:
        'Once the water is completely clear, follow any local utility instructions before returning to normal use. Report the problem if discoloration returns.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Something has changed in the water or plumbing',
      description:
        'Brown color can come from iron, manganese, rust or sediment. The appearance identifies a water-quality change but does not identify every substance that may be present.',
      severity: 'caution',
      chainLabel: 'Visible discoloration',
    },
    {
      stageLabel: 'IF THE WATER CLEARS',
      title: 'The disturbance may have flushed through',
      description:
        'Water-main work, hydrant use and changes in flow can stir up deposits. If clear water returns and remains normal, the event may have been temporary.',
      severity: 'info',
      chainLabel: 'Disturbed sediment clears',
    },
    {
      stageLabel: 'IF IT KEEPS RETURNING',
      title: 'Corrosion or sediment may need attention',
      description:
        'Recurring discoloration can originate in household pipes, a water heater, a service line or the distribution system. The hot-versus-cold pattern helps narrow it down.',
      severity: 'caution',
      chainLabel: 'Persistent source remains',
    },
    {
      stageLabel: 'IF IT IS PRIVATE WELL WATER',
      title: 'A water test may be needed',
      description:
        'A new color change in private well water is a reason to test because private wells are not routinely monitored by a public water system.',
      severity: 'warning',
      chainLabel: 'Water quality needs verification',
    },
    {
      stageLabel: 'IF OTHER CONTAMINATION SIGNS APPEAR',
      title: 'Stop treating it as ordinary rusty water',
      description:
        'A strong chemical or fuel odor, an official water advisory or other evidence of contamination calls for instructions from the water utility or public health authority.',
      severity: 'danger',
      chainLabel: 'Possible contamination',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Brown water appeared after nearby water-main work or hydrant use',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Do not drink or cook with it while discolored. Flush cold water and see whether it becomes completely clear. Report persistent discoloration to the water utility.',
    },
    {
      situation: 'Brown water appeared after water service was restored',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Flush cold water before using hot water. Wait for the water to return to its normal clear appearance before using it for drinking or cooking.',
    },
    {
      situation: 'Only the hot water is brown',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        "Check the water heater and hot-water plumbing. Follow the manufacturer's maintenance instructions or arrange service if the discoloration persists.",
    },
    {
      situation: 'Only one cold-water faucet is affected',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Compare other cold taps. If they stay clear, inspect the affected fixture, aerator and local plumbing rather than flushing the entire home indefinitely.',
    },
    {
      situation: 'Several cold-water faucets are brown',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check for utility work or outages and ask whether nearby homes are affected. Contact the utility if the water does not clear or no obvious system disturbance explains it.',
    },
    {
      situation: 'The water clears completely and stays normal',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Follow any local utility guidance and watch for recurrence. A one-time event around known system work is often caused by disturbed sediment.',
    },
    {
      situation: 'Private well water has suddenly changed color',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange testing through a state-certified laboratory and ask the local health department which contaminants are appropriate for your area.',
    },
    {
      situation: 'Brown water has a strong chemical, fuel or sewage-like odor',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop using it for drinking and cooking and contact the water utility or local health authority. Follow their instructions before resuming normal use.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Compare cold water, hot water and different faucets',
      body:
        'Start with cold water and check more than one fixture. If cold water is clear but hot water is brown, focus on the water heater. If only one faucet is affected, focus on that fixture or nearby plumbing.',
    },
    {
      title: 'Flush cold water and watch for a real change',
      body:
        'Run a cold-water tap and look for the water to return completely to its normal clear appearance. If it remains discolored, repeated flushing without investigating the source is not a solution.',
    },
    {
      title: 'Keep discolored water out of food and laundry',
      body:
        'Do not drink or cook with visibly brown water while you are troubleshooting it. Rust and sediment can also stain laundry, so wait until the water runs clear before washing clothes.',
    },
    {
      title: 'Find out whether the problem extends beyond your home',
      body:
        'Check your water utility for maintenance, main breaks or advisories and ask neighbors whether they see the same discoloration. A neighborhood-wide problem points away from a single faucet.',
      destinationProblemSlug: 'low-water-pressure',
    },
    {
      title: 'Test when appearance cannot answer the question',
      body:
        'If you use a private well or are specifically concerned about contaminants such as lead, use appropriate laboratory testing. Water color cannot confirm that lead is present or prove that it is absent.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The water has a strong chemical or fuel odor',
      description:
        'An unusual odor coming from the water itself needs more investigation than ordinary rusty discoloration.',
      severity: 'danger',
    },
    {
      title: 'An official drinking-water advisory is active',
      description:
        "Follow the water utility or public health authority's instructions instead of relying on general flushing advice.",
      severity: 'danger',
    },
    {
      title: 'Private well water suddenly changed color',
      description:
        'A new change in well-water color, taste or smell is a reason to arrange appropriate water testing.',
      severity: 'warning',
    },
    {
      title: 'Brown water persists across several cold-water faucets',
      description:
        'This pattern can involve the building supply, service line or public distribution system and should be reported if it does not clear.',
      severity: 'warning',
    },
    {
      title: 'Discoloration repeatedly returns',
      description:
        'Recurrence makes a continuing source such as corrosion, sediment or a water-heater problem more likely.',
      severity: 'caution',
    },
    {
      title: 'Brown water appears with a sudden pressure problem',
      description:
        'Report both symptoms to the water utility because changes in the distribution system can affect pressure and disturb sediment.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is brown tap water usually rust?',
      answer:
        'Often, yes. Iron, manganese, pipe corrosion and disturbed sediment are common causes of reddish, orange or brown water. Appearance alone cannot prove the exact cause.',
    },
    {
      question: 'Is brown water safe to drink?',
      answer:
        'Do not drink visibly discolored water while you are troubleshooting it. Let the water return completely clear and follow any instructions from your local water utility or health authority.',
    },
    {
      question: 'Will boiling brown water make it safe?',
      answer:
        'Do not use boiling as a catch-all fix. Brown water can have several causes and boiling does not identify what caused the discoloration. Follow the response recommended for the actual problem or local advisory.',
    },
    {
      question: 'Why is my water brown only when I turn on the hot tap?',
      answer:
        'If cold water is clear, the water heater or hot-water plumbing becomes a likely source. Sediment or corrosion inside the hot-water system may need maintenance.',
    },
    {
      question: 'Why did my water turn brown after the city worked on the pipes?',
      answer:
        'Changes in water flow during main repairs, hydrant use or construction can stir up rust and sediment that had settled inside the distribution system.',
    },
    {
      question: 'Can brown water stain my clothes?',
      answer:
        'Yes. Rusty or iron-containing water can stain laundry, so wait until the water is clear before running a load.',
    },
    {
      question: 'Does brown water mean there is lead in my water?',
      answer:
        'No. EPA says dissolved lead cannot be identified by sight, taste or smell. If lead is a concern, check information from your water supplier or use an appropriate certified laboratory test.',
    },
    {
      question: 'Why is only my kitchen faucet producing brown water?',
      answer:
        'If every other cold-water faucet is clear, the problem may be in the kitchen faucet, aerator, connector or nearby branch of plumbing rather than the incoming water supply.',
    },
    {
      question: 'What if my private well suddenly starts producing brown water?',
      answer:
        'Treat the change as a reason to test. CDC recommends well testing when color, taste or smell changes and advises using a state-certified laboratory.',
    },
    {
      question: 'Should I call a plumber or the water company?',
      answer:
        'Call the water utility when multiple cold-water faucets or nearby homes are affected. A plumber makes more sense when the problem is isolated to your home, one fixture or only the hot-water system.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Secondary Drinking Water Standards: Guidance for Nuisance Chemicals',
      url: 'https://www.epa.gov/sdwa/secondary-drinking-water-standards-guidance-nuisance-chemicals',
      sourceType: 'government',
      notes:
        'EPA identifies iron and manganese as causes of rusty, reddish, black or brown color and explains that corrosion and sediment can affect water appearance and plumbing.',
    },
    {
      publisher: 'New York City Department of Environmental Protection',
      title: 'Drinking Water FAQs',
      url: 'https://www.nyc.gov/site/dep/water/drinking-water-frequently-asked-questions.page',
      sourceType: 'government',
      notes:
        'NYC DEP says brown water can result from building corrosion, rusting water heaters, main repairs, construction or hydrant use and advises against drinking obviously discolored water.',
    },
    {
      publisher: 'DC Water',
      title: 'Drinking Water Quality FAQs',
      url: 'https://www.dcwater.com/faq/DrinkingWaterQualityFAQs',
      sourceType: 'government',
      notes:
        'DC Water describes iron corrosion and disturbed pipe scale as common causes of brown water and recommends avoiding drinking and laundry use while water is discolored.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Guidelines for Testing Well Water',
      url: 'https://www.cdc.gov/drinking-water/safety/guidelines-for-testing-well-water.html',
      sourceType: 'government',
      notes:
        'CDC recommends testing private well water when its color, taste or smell changes and using a state-certified laboratory for testing.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title:
        'The drinking water I receive from a public water system has an unfamiliar odor and a slight discoloration. I am concerned that this is an indication of lead in my drinking water. What can I do to determine if lead is in my drinking water?',
      url: 'https://www.epa.gov/lead/drinking-water-i-receive-public-water-system-has-unfamiliar-odor-and-slight-discoloration-i-am',
      sourceType: 'government',
      notes:
        'EPA says lead cannot be seen, tasted or smelled in drinking water and recommends utility information or certified laboratory testing when lead is a concern.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Local water utility water-quality service',
      description:
        'Useful for checking current main work, outages, flushing activity, advisories and neighborhood-wide discoloration.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'State-certified drinking-water laboratory',
      description:
        'Appropriate when you need to identify contaminants that cannot be confirmed from color, taste or smell.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Clear drinking glass or container',
      description:
        'Helps compare cold and hot water, different faucets and whether visible sediment settles or the water returns to its normal appearance.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Plumbing or water-heater service',
      description:
        'Useful when discoloration is limited to one fixture, repeatedly returns inside the home or appears only in hot water.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'low-water-pressure',
      anchorText: 'Is low water pressure part of the problem?',
      relationshipType: 'related',
    },
    {
      slug: 'water-heater-leaking',
      anchorText: 'Is the water heater showing signs of a leak?',
      relationshipType: 'related',
    },
    { slug: 'leaking-faucet', anchorText: 'Is the faucet itself also leaking?', relationshipType: 'sibling' },
  ],
};
