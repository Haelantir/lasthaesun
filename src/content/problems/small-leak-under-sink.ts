import type { ProblemSeed } from '../types';

/**
 * Home > Plumbing > Leaks > Small Leak Under Sink.
 *
 * Every factual claim below traces to one of the six sources at the
 * bottom of this file. The core distinction is: a small drip that only
 * appears during use and can be kept dry is manageable briefly while you
 * find the source, while a continuous drip, a supply-side leak, a fast
 * leak or water reaching electrical equipment needs faster action.
 */
export const smallLeakUnderSink: ProblemSeed = {
  systemSlug: 'leaks',
  slug: 'small-leak-under-sink',
  canonicalPath: '/home/plumbing/leaks/small-leak-under-sink/',
  name: 'Small Leak Under Sink',
  eyebrow: 'Home · Plumbing · Leaks',

  h1: 'Can I Ignore a Small Leak Under My Sink?',
  seoTitle: 'Small Leak Under the Sink: How Urgent Is It? | Can I Ignore It',
  metaDescription:
    'A small leak under the sink may look harmless, but repeated moisture can damage the cabinet and support mold growth. See when to shut off the water.',

  status: 'published',
  indexable: true,

  verdict: 'do_not_ignore',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I use the sink?',
  canIUseItLabel: 'Sometimes, briefly',

  shortAnswer:
    'Do not leave a small under-sink leak indefinitely. If it only drips when the sink runs and you can keep the area dry, limited use may be possible while you arrange a repair. Shut off the water if the leak is continuous, getting worse, soaking the cabinet, or reaching electrical equipment.',

  whyItMattersHeading: 'Why Does a Small Leak Under the Sink Matter?',
  whyItMatters: [
    'Water under a sink can come from several places: the faucet connections, shutoff valves, supply lines, drain joints, trap, disposal or nearby appliance connections. A few drops may be the first visible sign of a loose fitting, worn seal or damaged component. Finding the exact source is more useful than repeatedly drying the bottom of the cabinet.',
    'Repeated moisture can swell or stain cabinet materials and keep nearby surfaces damp. EPA recommends fixing indoor water leaks promptly and drying wet materials quickly — within a day or two — to reduce the chance of mold growth. Water reaching a plugged-in appliance or electrical connection needs extra caution.',
  ].join('\n\n'),

  redFlagsHeading: 'Shut Off the Water or Stop Using the Sink If You Notice:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Under-sink leaks, faucet and pipe leak checks, moisture damage, mold prevention, water shutoff and wet-appliance safety checked against U.S. EPA, CPSC and municipal water-utility guidance.',
  disclaimer:
    "General household plumbing guidance only. Plumbing layouts and appliance connections vary. If water is spraying, cannot be controlled with the fixture shutoff, is entering electrical equipment, or is spreading into walls or flooring, stop using the affected plumbing and arrange professional help.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'few-drops-only-when-running',
      label: 'I see a few drops only while the sink is running',
      shortDescription: 'The cabinet stays mostly dry when the faucet is off.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Find the source and fix it soon',
      resultBody:
        'A small use-related drip is usually manageable for a short period if you can keep the area dry. It still means a joint, seal or connection is leaking.',
      recommendedAction: 'Dry the area completely, run the faucet briefly and watch each connection to locate the source.',
    },
    {
      slug: 'drain-pipe-or-trap-drip',
      label: 'The drain pipe or P-trap drips when water goes down',
      shortDescription: 'The leak appears below the sink after water drains.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The drain connection needs repair',
      resultBody:
        'A drain-side leak usually appears only when water is moving through the pipe. Loose slip-joint connections, seals or damaged drain parts can allow wastewater into the cabinet.',
      recommendedAction: 'Limit sink use, dry the area and repair the leaking joint or trap. Replace damaged parts instead of repeatedly tightening them.',
    },
    {
      slug: 'supply-line-drip',
      label: 'A water-supply line or shutoff valve is dripping',
      shortDescription: 'The leak is on the pressurized water side under the sink.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Deal with a supply-side leak promptly',
      resultBody:
        'Supply lines and valves remain under water pressure even when the faucet is off. A leak here can continue without anyone using the sink.',
      recommendedAction: 'Close the affected fixture shutoff valve if it works normally and arrange the repair before returning the line to regular use.',
    },
    {
      slug: 'continuous-drip-faucet-off',
      label: 'It keeps dripping even when nobody uses the sink',
      shortDescription: 'Water appears under the sink with the faucet off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not leave this running unattended',
      resultBody:
        'A continuous leak can keep wetting the cabinet for hours without any sink use. The source may be a supply connection, valve, faucet body or another nearby water line.',
      recommendedAction: 'Use the under-sink shutoff valves to isolate the leak if possible and arrange repair.',
    },
    {
      slug: 'puddle-keeps-returning',
      label: 'I dry the cabinet, but the puddle keeps coming back',
      shortDescription: 'Moisture returns after cleanup.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The leak is still active',
      resultBody: 'Repeated puddling means water is continuing to enter the cabinet. Towels and bowls may contain it temporarily but they do not stop the source.',
      recommendedAction: 'Locate the leak, shut off the affected water supply if necessary and dry the cabinet completely after the repair.',
    },
    {
      slug: 'cabinet-swollen-or-stained',
      label: 'The cabinet is swollen, soft, stained or smells musty',
      shortDescription: 'The area shows signs of repeated or long-term moisture.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check for water damage and hidden moisture',
      resultBody: 'Swelling, softness, staining or a musty odor suggests the area has stayed wet long enough to affect surrounding materials.',
      recommendedAction: 'Stop the leak, empty the cabinet and dry the area. Check nearby surfaces for damage or mold and replace materials that cannot be dried or cleaned properly.',
    },
    {
      slug: 'leak-near-disposal-or-electric',
      label: 'Water is reaching the garbage disposal, outlet or wiring',
      shortDescription: 'Electrical equipment or connections are getting wet.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Keep away from wet electrical equipment',
      resultBody: 'Water around energized equipment can create a shock hazard. CPSC advises against touching wet appliances that are still connected to an electrical source.',
      recommendedAction: 'Stop using the sink. Do not touch a wet plugged-in appliance. Have the electrical and plumbing situation made safe before using the equipment again.',
    },
    {
      slug: 'spraying-or-fast-leak',
      label: 'The leak suddenly became a spray or fast stream',
      shortDescription: 'Water is escaping much faster than a drip.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Shut off the water now',
      resultBody: "A fast supply-side leak can spread water through the cabinet and onto the floor quickly.",
      recommendedAction: "Close the fixture shutoff valve. If that does not stop the leak, use the home's main water shutoff and call a plumber.",
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Water starts wetting the cabinet',
      description: 'A small drip may stay local at first, especially if it appears only while the sink is being used.',
      severity: 'info',
      chainLabel: 'Small leak',
    },
    {
      stageLabel: 'KEEP USING THE SINK',
      title: 'Moisture keeps returning',
      description: 'Each use can add more water if the leak is on the drain side. A supply-side leak may continue even with the faucet off.',
      severity: 'caution',
      chainLabel: 'Repeated moisture',
    },
    {
      stageLabel: 'KEEP IGNORING IT',
      title: 'Cabinet materials can absorb water',
      description: 'Wood-based cabinet panels and nearby finishes can stain, swell or soften after repeated wetting.',
      severity: 'warning',
      chainLabel: 'Material damage',
    },
    {
      stageLabel: 'IF THE AREA STAYS DAMP',
      title: 'Mold can begin growing',
      description: 'EPA advises drying wet or damp materials within 24 to 48 hours after a leak or spill because persistent moisture supports mold growth.',
      severity: 'warning',
      chainLabel: 'Mold risk',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'The leak spreads or reaches electrical equipment',
      description: 'A failed supply connection can release more water, and wet plugged-in appliances or electrical connections create an additional safety concern.',
      severity: 'danger',
      chainLabel: 'Larger leak',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A few drops appear only while the sink runs and the cabinet dries fully',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Locate the source and arrange a repair soon.',
    },
    {
      situation: 'A drain joint or P-trap leaks whenever water drains',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Limit sink use and repair the leaking drain connection.',
    },
    {
      situation: 'A supply line or shutoff valve is dripping',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Close the affected fixture shutoff if needed and repair the pressurized connection.',
    },
    {
      situation: 'Water appears even when the faucet has not been used',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Isolate the water source and arrange repair promptly.',
    },
    {
      situation: 'The cabinet is repeatedly wet, swollen, soft or musty',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop the leak, dry the area and inspect for moisture damage or mold.',
    },
    {
      situation: 'Water is reaching a plugged-in disposal, outlet or wiring',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using the sink and avoid touching wet energized equipment.',
    },
    {
      situation: 'Water is spraying or flowing quickly',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Shut off the fixture supply or main water supply and call a plumber.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Empty and dry the cabinet',
      body: 'Remove stored items and wipe the cabinet dry. Starting with a dry surface makes a fresh drip easier to trace and reduces the time surrounding materials stay wet.',
    },
    {
      title: 'Find where the first drop appears',
      body: 'Run the faucet briefly while watching the faucet connections, shutoff valves, supply lines, drain joints, trap and any disposal or dishwasher connection. Water can travel along a pipe before it falls, so trace it back to the highest wet point.',
    },
    {
      title: 'Check whether the leak is on the supply or drain side',
      body: 'A leak that appears only while water drains often comes from drain plumbing. A leak that continues with the faucet off may be on a pressurized supply connection or another water line and deserves faster attention.',
    },
    {
      title: 'Shut off the fixture supply if needed',
      body: "The hot and cold shutoff valves are usually under the sink. Portland Water Bureau advises closing these valves before faucet repairs. If they do not close normally or the leak continues, use the home's main shutoff if necessary and call a plumber.",
    },
    {
      title: 'Dry wet materials after the repair',
      body: 'Do not leave the cabinet damp once the leak has stopped. EPA recommends drying wet or damp materials within a day or two after a leak or spill to help prevent mold growth.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The leak continues with the faucet off',
      description: 'A pressurized water connection may be leaking.',
      severity: 'warning',
    },
    {
      title: 'Water is spraying or flowing faster than a drip',
      description: 'Shut off the affected water supply before the leak spreads.',
      severity: 'danger',
    },
    {
      title: 'Water is touching a plugged-in appliance or electrical connection',
      description: 'Do not touch wet energized equipment.',
      severity: 'danger',
    },
    {
      title: 'The cabinet floor is swollen, soft or breaking apart',
      description: 'Repeated moisture has already damaged the material.',
      severity: 'warning',
    },
    {
      title: 'You see mold or smell a persistent musty odor',
      description: 'Stop the moisture source and deal with the damp or contaminated material.',
      severity: 'warning',
    },
    {
      title: 'Water is spreading into the wall, floor or room below',
      description: 'The leak is no longer confined to the sink cabinet.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a small leak under the sink an emergency?',
      answer: 'Usually not if it is only a few drops and you can keep the area dry. It still needs repair because repeated moisture can damage the cabinet and support mold growth.',
    },
    {
      question: 'Can I still use the sink if it leaks underneath?',
      answer: 'Sometimes, briefly, if the leak is minor, appears only during use and stays away from electrical equipment. Limit use until you know where the water is coming from.',
    },
    {
      question: 'How do I tell where an under-sink leak is coming from?',
      answer: 'Dry everything first, then run the faucet briefly and watch for the first fresh drop. Check supply connections, shutoff valves, drain joints, the trap and any disposal or dishwasher connections.',
    },
    {
      question: 'Why does it leak only when I run water?',
      answer: 'A drain-side joint or trap may leak only while water is passing through it. Faucet-body leaks can also appear during use, so trace the water to its starting point before replacing parts.',
    },
    {
      question: 'Why is it leaking when the faucet is off?',
      answer: 'The leak may be on a pressurized supply line, shutoff valve, faucet connection or another nearby water line. Close the affected shutoff valve if needed and have the connection repaired.',
    },
    {
      question: 'Can I just put a bowl under the leak?',
      answer: 'A bowl can catch a small drip temporarily, but it does not stop the source. Water can miss the container, travel along pipes or keep surrounding materials damp.',
    },
    {
      question: 'Can a small leak cause mold?',
      answer: 'Yes, if materials stay damp. EPA recommends drying wet or damp areas within a day or two after a leak or spill because moisture supports mold growth.',
    },
    {
      question: 'What should I do if the leak is near the garbage disposal?',
      answer: 'Stop using the sink if water is reaching the disposal or its electrical connection. Do not touch a wet appliance that is still connected to power.',
    },
    {
      question: 'Should I tighten a leaking fitting myself?',
      answer: "A loose drain connection may be simple to correct, but overtightening can damage plastic nuts, seals or fittings. If the leak is on a supply line, valve or unfamiliar connection, shut off the water and use the manufacturer's instructions or call a plumber.",
    },
    {
      question: 'When should I call a plumber for an under-sink leak?',
      answer: 'Call if the source is unclear, a supply line or shutoff valve is leaking, the leak returns after repair, the shutoff will not work, or water is spreading beyond the cabinet.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Flashlight',
      description: 'Helps trace a fresh drip to the highest wet connection inside a dark sink cabinet.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Absorbent towels',
      description: 'Useful for drying the cabinet before leak tracing and removing moisture after the source is stopped.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Replacement P-trap or drain washers',
      description: 'Common parts for a confirmed drain-side leak. Match the size and configuration already installed.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Replacement faucet supply line',
      description: 'Appropriate only after a leaking supply connector or hose has been identified. Match the required connection type and length.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Water leak detector',
      description: 'A small moisture sensor can alert you if water appears inside the cabinet again.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional plumber',
      description: 'Appropriate for pressurized supply leaks, failed shutoff valves, recurring leaks or any source you cannot identify confidently.',
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
      notes: 'EPA WaterSense advises homeowners to check for leaks regularly, address identified leaks as soon as possible and notes that leaks can cause serious damage in the home.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Fix a Leak Week',
      url: 'https://www.epa.gov/watersense/fix-leak-week',
      sourceType: 'government',
      notes: 'EPA recommends examining faucet gaskets and pipe fittings for water on the outside of pipes and provides household leak-detection guidance.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'A Brief Guide to Mold, Moisture and Your Home',
      url: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
      sourceType: 'government',
      notes: 'EPA explains that mold requires moisture and recommends drying water-damaged or damp areas within 24 to 48 hours after a leak or spill in most cases to prevent mold growth.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'The Key to Mold Control is Moisture Control',
      url: 'https://www.epa.gov/mold/key-mold-control-moisture-control-infographic',
      sourceType: 'government',
      notes: 'EPA advises fixing the source of water problems or leaks and completely drying damp or wet surfaces within 24 to 48 hours.',
    },
    {
      publisher: 'Portland Water Bureau',
      title: 'How to Fix a Faucet Leak',
      url: 'https://www.portland.gov/water/water-efficiency-programs/faucet-leak',
      sourceType: 'government',
      notes: "Municipal guidance explains how to locate a faucet leak and advises shutting off the hot and cold water-supply valves under the sink before repair, or the home's main supply if those valves cannot be used.",
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Warns of Generator, Carbon Monoxide and Fire Hazards Ahead of Hurricane Season',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Warns-of-Generator-Carbon-Monoxide-and-Fire-Hazards-Ahead-of-Hurricane-Season',
      sourceType: 'government',
      notes: 'CPSC advises consumers not to touch wet appliances that remain plugged into an electrical source. Used here only for the wet-electrical-equipment warning.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'leaking-p-trap', anchorText: 'Can I ignore a leaking P-trap under the sink?', relationshipType: 'sibling' },
    { slug: 'dripping-shutoff-valve', anchorText: 'Can I ignore a dripping water shutoff valve?', relationshipType: 'escalation' },
    { slug: 'leaking-faucet', anchorText: 'Can I ignore a faucet that keeps dripping?', relationshipType: 'related' },
    { slug: 'water-damaged-cabinet', anchorText: 'Can I ignore water damage inside a sink cabinet?', relationshipType: 'follow_up' },
    { slug: 'mold-under-sink', anchorText: 'Can I ignore mold growing under the sink?', relationshipType: 'escalation' },
  ],
};
