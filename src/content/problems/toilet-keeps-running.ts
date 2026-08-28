import type { ProblemSeed } from '../types';

/**
 * Home > Plumbing > Toilets > Toilet Keeps Running.
 *
 * Every factual claim below traces to one of the six sources at the
 * bottom of this file. The core distinction is: a toilet that only runs
 * while the tank refills after a flush is normal, while one that never
 * stops, turns on by itself, or sends water into the overflow tube has a
 * leaking or misadjusted part and wastes water until it's fixed. A rising
 * bowl or water on the floor is a different, more urgent problem.
 */
export const toiletKeepsRunning: ProblemSeed = {
  systemSlug: 'toilets',
  slug: 'toilet-keeps-running',
  canonicalPath: '/home/plumbing/toilets/toilet-keeps-running/',
  name: 'Toilet Keeps Running',
  eyebrow: 'Home · Plumbing · Toilets',

  h1: 'Can I Ignore a Toilet That Keeps Running?',
  seoTitle: 'Running Toilet: When It Can Wait and When to Fix It | Can I Ignore It',
  metaDescription:
    'A toilet that keeps running usually wastes water rather than creating an emergency. See what is normal, what causes it, and when to fix it.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Usually, but fix it soon',

  shortAnswer:
    'A toilet that runs briefly after a flush is normal while the tank refills. If it keeps running, refills by itself, or sends water continuously into the overflow tube, it is leaking or not shutting off correctly and should be fixed.',

  whyItMattersHeading: 'Why Does a Toilet Keep Running?',
  whyItMatters: [
    'A tank toilet is supposed to refill after a flush and then stop. If water keeps moving after the tank should be full, one of the parts that controls or seals that flow is not doing its job. A worn or misaligned flapper is a common cause. The chain, float, water level or fill valve can also be involved.',
    "The usual consequence is wasted water, not an immediate plumbing emergency. Water leaking from the tank into the bowl makes the fill valve replace it again and again. A continuous overflow into the tank's overflow tube can waste water the same way. If water is rising toward the rim of the bowl or spilling onto the floor, stop treating it as an ordinary running-toilet problem.",
  ].join('\n\n'),

  redFlagsHeading: 'Stop and Deal With It Now If You Notice:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Running tank toilets, flapper leaks, fill-valve and overflow-tube problems, and household repair guidance checked against U.S. EPA WaterSense and municipal water-utility sources.',
  disclaimer:
    "General household plumbing guidance only. Toilet designs vary. If water is overflowing onto the floor, the bowl is rising instead of draining normally, or a shutoff valve does not work when you need it, limit water use and arrange professional help.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'brief-refill-after-flush',
      label: 'It runs for a short time after I flush, then stops',
      shortDescription: 'The tank refills and the sound ends on its own.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'That is normal',
      resultBody:
        'A tank toilet has to refill after each flush. Running water during that refill is expected if it shuts off once the tank reaches its normal level.',
      recommendedAction: 'No repair is needed if the toilet consistently stops after refilling.',
    },
    {
      slug: 'never-stops-after-flush',
      label: 'It keeps running and never fully stops',
      shortDescription: 'Water continues moving long after the flush is over.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The toilet is not shutting off correctly',
      resultBody:
        'Continuous running usually means water is escaping from the tank or the fill system is not reaching its shutoff point. The toilet may still flush, but it is wasting water.',
      recommendedAction: 'Check the flapper, chain, tank water level and fill valve.',
    },
    {
      slug: 'turns-on-by-itself',
      label: 'It goes quiet, then starts refilling by itself',
      shortDescription: 'Nobody flushed it, but the fill valve comes on again.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'There is probably a slow tank leak',
      resultBody:
        'If the tank loses water into the bowl, the fill valve eventually opens to replace it. A worn or poorly sealing flapper is a common cause.',
      recommendedAction: 'Do a dye test and inspect the flapper if the test shows water leaking into the bowl.',
    },
    {
      slug: 'handle-jiggle-stops-it',
      label: 'Jiggling the handle makes it stop',
      shortDescription: 'The toilet keeps running until I move the handle.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Check the handle, chain and flapper',
      resultBody:
        'A chain that is too tight or poorly positioned can keep the flapper from sealing. A loose or misaligned handle can cause a similar problem.',
      recommendedAction: 'Remove the tank lid and check whether the chain and flapper settle freely after a flush.',
    },
    {
      slug: 'water-overflow-tube',
      label: 'Water is continuously flowing into the overflow tube',
      shortDescription: 'The tank water level stays high enough to spill into the tube.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The fill system needs attention',
      resultBody:
        'Water should not continuously pour into the overflow tube. The water level may be set too high, the float may not be shutting the valve off, or the fill valve may be faulty.',
      recommendedAction: "Check the manufacturer's water-level setting and fill-valve adjustment. Replace the fill valve if adjustment does not stop the flow.",
    },
    {
      slug: 'flapper-visibly-not-sealing',
      label: 'The flapper does not sit flat after a flush',
      shortDescription: 'The seal looks crooked, worn or held open.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Fix the seal',
      resultBody:
        'The flapper is meant to close the opening between the tank and bowl. If it cannot seal, tank water can keep leaking into the bowl and trigger repeated refilling.',
      recommendedAction: 'Check for a tangled or tight chain, clean the valve seat if appropriate, and replace a worn flapper with the correct type for the toilet.',
    },
    {
      slug: 'bowl-rising',
      label: 'The bowl water is rising toward the rim',
      shortDescription: 'The toilet is not draining normally and looks close to overflowing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop flushing',
      resultBody:
        'This is not just a running tank. The toilet may also be clogged, and another flush can put water onto the floor.',
      recommendedAction: 'Do not flush again. Shut off the toilet’s water supply if needed and deal with the clog or call a plumber.',
    },
    {
      slug: 'water-on-floor',
      label: 'Water is leaking onto the floor around the toilet',
      shortDescription: 'The problem is no longer contained inside the tank and bowl.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop the leak',
      resultBody:
        'A running toilet normally sends wasted water down the drain. Water appearing on the floor points to a separate leak that can damage nearby materials.',
      recommendedAction: "Shut off the toilet's water supply if you can do so safely and arrange repair.",
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Water keeps moving when it should have stopped',
      description: 'After the normal refill is complete, a leaking seal or fill-system problem can keep water flowing through the toilet.',
      severity: 'info',
      chainLabel: 'Running toilet',
    },
    {
      stageLabel: 'AS IT CONTINUES',
      title: 'The tank keeps replacing lost water',
      description: 'Water leaking into the bowl lowers the tank level, so the fill valve opens again or stays open.',
      severity: 'caution',
      chainLabel: 'Refill cycle',
    },
    {
      stageLabel: 'KEEP IGNORING IT',
      title: 'Water use keeps adding up',
      description: 'The toilet can waste water continuously or in repeated refill cycles even when nobody is using it.',
      severity: 'warning',
      chainLabel: 'Water waste',
    },
    {
      stageLabel: 'OVER TIME',
      title: 'The water bill can rise',
      description: 'EPA WaterSense treats running and leaking toilets as a significant source of household water waste, and many common toilet leaks are repairable with inexpensive parts.',
      severity: 'warning',
      chainLabel: 'Higher cost',
    },
    {
      stageLabel: 'IF WATER LEAVES THE FIXTURE',
      title: 'A different problem needs immediate attention',
      description: 'A rising bowl or water leaking onto the floor is no longer just an internal running-toilet leak. Stop adding water and deal with the overflow or external leak.',
      severity: 'danger',
      chainLabel: 'Overflow risk',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The toilet runs only while the tank refills after a flush',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Nothing, if it shuts off normally once the tank is full.',
    },
    {
      situation: 'The toilet keeps running after the tank should be full',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Check the flapper, chain, water level and fill valve.',
    },
    {
      situation: 'The toilet turns on by itself between flushes',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Test for a tank-to-bowl leak and inspect the flapper.',
    },
    {
      situation: 'Jiggling the handle is the only way to stop it',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Check the handle, chain and flapper alignment.',
    },
    {
      situation: 'Water continuously flows into the overflow tube',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Correct the water level or fill-valve problem.',
    },
    {
      situation: 'The bowl water is rising instead of draining',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop flushing and deal with the clog or call a plumber.',
    },
    {
      situation: 'Water is leaking onto the floor',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: "Shut off the toilet's supply if needed and repair the external leak promptly.",
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Let one normal refill finish',
      body: 'Flush once and listen. If the water stops after the tank refills, the sound you heard was normal. If it continues or starts again without another flush, inspect the tank.',
    },
    {
      title: 'Look inside the tank',
      body: 'Check whether the flapper closes fully after a flush, whether the chain is holding it open, and whether water is continuously entering the overflow tube. Do not force unfamiliar parts.',
    },
    {
      title: 'Test for a silent flapper leak',
      body: 'EPA WaterSense recommends putting a few drops of food coloring or a dye tablet into the tank and waiting about ten minutes without flushing. If color appears in the bowl, water is leaking from the tank. Flush afterward to avoid staining.',
    },
    {
      title: 'Fix the part causing the leak',
      body: "A worn flapper is a common and usually inexpensive repair. If water is spilling into the overflow tube, check the tank water level and fill valve. Use the toilet manufacturer's instructions when adjusting or replacing parts.",
    },
    {
      title: 'Use the shutoff valve if water may escape the toilet',
      body: "If the bowl is rising or water is leaking onto the floor, stop flushing. The toilet's water-supply shutoff valve is usually near the wall or floor behind the toilet. Close it if needed and arrange repair.",
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The bowl water is rising toward the rim',
      description: 'Do not flush again. A clog or drainage problem may cause an overflow.',
      severity: 'danger',
    },
    {
      title: 'Water is spilling onto the floor',
      description: 'Stop the water source and repair the external leak.',
      severity: 'danger',
    },
    {
      title: 'The toilet will not stop filling and water keeps entering the overflow tube',
      description: 'The fill system is not shutting off correctly.',
      severity: 'warning',
    },
    {
      title: 'The toilet repeatedly refills when nobody has used it',
      description: 'A tank-to-bowl leak is likely and should be repaired.',
      severity: 'warning',
    },
    {
      title: 'The shutoff valve will not close when you need to stop the water',
      description: 'Avoid forcing a stuck valve and call a plumber if water control is needed.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is it normal for a toilet to run after flushing?',
      answer: 'Yes, while the tank is refilling. It should stop once the tank reaches its normal water level.',
    },
    {
      question: 'Why does my toilet keep running after the tank is full?',
      answer: 'Common causes include a flapper that does not seal, a chain that holds the flapper open, an incorrect water level or a fill valve that does not shut off.',
    },
    {
      question: 'Why does my toilet start running by itself?',
      answer: 'The tank may be slowly losing water into the bowl. When the level drops far enough, the fill valve opens and refills the tank even though nobody flushed.',
    },
    {
      question: 'Why does jiggling the toilet handle stop the running?',
      answer: 'Moving the handle can let a misaligned chain or flapper fall back into place. If you have to do this repeatedly, adjust or repair the mechanism instead of relying on the handle.',
    },
    {
      question: 'How can I tell if the flapper is leaking?',
      answer: 'Put a few drops of food coloring or a dye tablet in the tank and wait about ten minutes without flushing. Color appearing in the bowl indicates a leak from the tank; flush afterward to avoid staining.',
    },
    {
      question: 'What if water is going into the overflow tube?',
      answer: "The tank water level may be too high or the fill valve may not be shutting off. Check the manufacturer's adjustment instructions and repair the fill system if the flow continues.",
    },
    {
      question: 'Can I still use a toilet that keeps running?',
      answer: 'Usually yes if it flushes and drains normally and all the water stays inside the fixture. Fix the leak soon because it will keep wasting water.',
    },
    {
      question: 'Can a running toilet overflow?',
      answer: 'A normal tank leak usually sends water into the bowl and down the drain. A rising bowl, poor drainage or water on the floor is a different and more urgent problem, so stop flushing and deal with it promptly.',
    },
    {
      question: 'Do I need a plumber for a running toilet?',
      answer: 'Not always. Flappers and simple chain or water-level adjustments are common DIY repairs. Call a plumber if the cause is unclear, the repair does not hold, the shutoff valve fails, or water is escaping onto the floor.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Toilet leak dye tablets',
      description: 'A simple way to check whether tank water is leaking into the bowl without flushing.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Replacement toilet flapper',
      description: 'A common repair part for tank-to-bowl leaks. Match the replacement to the toilet model or existing flapper.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Toilet fill valve',
      description: 'May need adjustment or replacement if the tank keeps filling or water continuously enters the overflow tube.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Adjustable wrench',
      description: 'Useful for some toilet repairs, but do not overtighten plastic fittings or force a stuck shutoff valve.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional plumber',
      description: 'Appropriate when the cause is unclear, a repair keeps failing, the shutoff does not work, or water is overflowing or leaking outside the toilet.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Home Maintenance',
      url: 'https://www.epa.gov/watersense/home-maintenance',
      sourceType: 'government',
      notes: 'EPA WaterSense advises checking toilets for silent leaks, identifies worn flappers as a common cause, and says continuously running toilets or water flowing into the overflow tube should be investigated.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Fix a Leak Week',
      url: 'https://www.epa.gov/watersense/fix-leak-week',
      sourceType: 'government',
      notes: 'EPA describes worn toilet flappers as a common household leak, explains the dye test and notes that many flapper repairs are quick and inexpensive.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Residential Toilets',
      url: 'https://www.epa.gov/watersense/residential-toilets',
      sourceType: 'government',
      notes: 'EPA identifies toilets as a major source of indoor household water use and notes that old or worn toilet flappers commonly cause leaks.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'WaterSense at Work Section 3.1: Toilets (Water Closets)',
      url: 'https://www.epa.gov/system/files/documents/2023-06/ws-commercial-watersense-at-work_Section_3.1_Toilets.pdf',
      sourceType: 'government',
      notes: 'Provides tank-toilet maintenance guidance for flappers, chains, overflow tubes, water level and fill valves. Used for the operating mechanism and troubleshooting steps, not for a household-specific repair mandate.',
    },
    {
      publisher: 'Portland Water Bureau',
      title: 'How to Find and Fix a Toilet Leak',
      url: 'https://www.portland.gov/water/water-efficiency-programs/fixatoiletleak',
      sourceType: 'government',
      notes: 'Municipal utility guidance covering running-toilet sounds, dye testing, handle and chain adjustment, flapper replacement, overflow-tube water level and fill-valve troubleshooting.',
    },
    {
      publisher: 'Portland Water Bureau',
      title: 'How to Catch a Running Toilet',
      url: 'https://www.portland.gov/water/news/2023/3/20/how-catch-running-toilet',
      sourceType: 'government',
      notes: 'Explains toilet leak detection, the water-supply shutoff valve, flapper alignment and chain adjustment.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'toilet-wont-flush', anchorText: 'Can I ignore a toilet that will not flush?', relationshipType: 'sibling' },
    { slug: 'clogged-toilet', anchorText: 'Can I ignore a toilet that keeps clogging?', relationshipType: 'related' },
    { slug: 'toilet-water-rising', anchorText: 'Can I ignore rising water in the toilet bowl?', relationshipType: 'escalation' },
    { slug: 'water-around-toilet-base', anchorText: 'Can I ignore water leaking around the toilet base?', relationshipType: 'escalation' },
    { slug: 'toilet-gurgling', anchorText: 'Can I ignore a toilet that keeps gurgling?', relationshipType: 'related' },
  ],
};
