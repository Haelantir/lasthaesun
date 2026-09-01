import type { ProblemSeed } from '../types';

export const washingMachineLeakingWater: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'leaks',
  slug: 'washing-machine-leaking-water',
  canonicalPath: '/home/plumbing/leaks/washing-machine-leaking-water/',
  name: 'Washing Machine Leaking Water',
  eyebrow: 'Home · Plumbing · Leaks',

  h1: 'Can I Ignore a Washing Machine That Is Leaking Water?',
  seoTitle: 'Leaking Washing Machine: When to Stop Using It and What to Check',
  metaDescription:
    'A leaking washer should not keep running. Learn what hose, drain, seal, and detergent problems mean and when to shut off water, power, or call for help.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'No — identify and stop the leak first',

  shortAnswer:
    'No. Stop the cycle and close the washer’s hot and cold water valves if water is still escaping. Do not run another load until you find the source, and stay out of the wet area if water is near electrical equipment.',

  whyItMattersHeading: 'The source matters more than the size of the first puddle',
  whyItMatters: [
    'A washer can leak from a supply hose, household valve, drain hose, standpipe, door seal, dispenser, pump filter, or an internal component. Some causes are simple to correct, but a supply-side leak can continue while the machine is off, and a drain problem can release more water whenever the washer pumps out.',
    'Escaping water can spread beneath flooring, cabinets, walls, or rooms below. EPA recommends fixing the moisture source and drying wet materials within one to two days to reduce mold growth. Water reaching an outlet, cord, controls, or other energized equipment adds an electrical hazard.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It and Get Help If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Washing-machine leak triage, hose and drain causes, wet-electrical safety, and moisture damage checked against CDC, EPA, and major-manufacturer guidance.',
  disclaimer:
    'General household guidance only. Washer layouts and shutdown steps vary. Follow the owner’s manual, and use plumbing, appliance, or electrical help when the source or safe isolation method is unclear.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'residual-drops-from-open-door',
      label: 'A few drops fall from an opened front-load door after the cycle',
      shortDescription: 'The closed machine and surrounding floor stayed dry during operation.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be normal residual water',
      resultBody:
        'Some front-load washers release a few remaining drops from the door or gasket after the door is opened. That is different from water escaping while the door is closed.',
      recommendedAction:
        'Wipe the door and gasket dry and watch the next cycle. Treat it as a leak if water appears with the door closed, collects on the floor, or keeps returning.',
    },
    {
      slug: 'front-door-gasket-leak',
      label: 'Water escapes around the closed front door',
      shortDescription: 'Drops appear at the door during filling, washing, rinsing, or spinning.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Check the seal before running another full load',
      resultBody:
        'Hair, thread, detergent residue, trapped clothing, or a damaged gasket can prevent the door from sealing. A torn or deformed seal generally needs service.',
      recommendedAction:
        'Stop the cycle, remove trapped items, and clean the door glass and gasket according to the manual. Do not continue if the gasket is damaged or the leak returns.',
    },
    {
      slug: 'top-loader-splashing',
      label: 'A top-loader splashes only with a bulky or overloaded load',
      shortDescription: 'Water comes over the top during agitation, but normal loads do not leak.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The load may be causing the spill',
      resultBody:
        'Overloading, uneven loading, or buoyant items can push or splash water over the tub. Repeated splashing still needs correction because it wets the cabinet and floor.',
      recommendedAction:
        'Stop the washer, remove some items, and redistribute the load as directed in the manual. Monitor a properly loaded cycle and stop using it if water returns.',
    },
    {
      slug: 'detergent-dispenser-or-suds-leak',
      label: 'Foam or water comes from the dispenser or rear vent',
      shortDescription:
        'The leak followed excess detergent, the wrong detergent, a misplaced pod, or dispenser buildup.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Correct the detergent or dispenser problem first',
      resultBody:
        'Excess suds and blocked dispenser passages can make water or foam escape. Pods placed in a dispenser can also block the intended flow on some models.',
      recommendedAction:
        'Stop the cycle, follow the manual’s suds-removal instructions, clean the dispenser, and use the correct detergent and amount. Retest only after the area is dry.',
    },
    {
      slug: 'inlet-hose-or-water-valve-leak',
      label: 'An inlet hose, hose connection, or household valve is dripping',
      shortDescription: 'Water appears at the back of the washer during filling or while the machine is off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Shut off the washer’s water supply',
      resultBody:
        'Supply hoses and connections remain exposed to household water pressure while their valves are open. A damaged hose, missing seal, loose connection, or leaking wall valve can continue releasing water without a cycle running.',
      recommendedAction:
        'Close both washer supply valves. Replace a damaged hose or seal with a compatible part, and call a plumber if the household valve or plumbing connection is leaking.',
    },
    {
      slug: 'drain-hose-or-standpipe-overflow',
      label: 'Water spills only while the washer drains',
      shortDescription: 'The drain hose moves, leaks, falls out, or the standpipe backs up.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using the washer until the drain is corrected',
      resultBody:
        'A loose or damaged drain hose can discharge onto the floor. Water rising from the standpipe points to a restricted household drain or an installation problem rather than a harmless washer drip.',
      recommendedAction:
        'Stop the cycle. Check the hose for visible damage and proper placement using the model’s installation instructions. Have a backing-up standpipe cleared before running the washer again.',
    },
    {
      slug: 'pump-filter-area-leak',
      label: 'Water leaks from the pump-filter access area',
      shortDescription: 'The leak began after the filter or emergency drain hose was opened or cleaned.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A cap or filter may not be seated correctly',
      resultBody:
        'On washers with an accessible pump filter, a loose filter, damaged seal, or unsecured emergency drain-hose cap can let water escape during draining.',
      recommendedAction:
        'Turn the washer off safely and follow the model-specific draining and filter procedure. Reinstall the cap and filter correctly without forcing them. Arrange service if the leak continues.',
    },
    {
      slug: 'water-under-washer-unknown-source',
      label: 'Water appears underneath and the source is not visible',
      shortDescription: 'The hoses and accessible connections look dry, but a puddle returns.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a possible internal leak',
      resultBody:
        'Water can travel along the cabinet or floor before becoming visible. An unknown leak underneath may involve an internal hose, pump, tub seal, valve, or another component that is not safely accessible.',
      recommendedAction:
        'Stop using the washer, close the supply valves, and arrange appliance service. Do not remove panels unless the owner’s manual specifically provides a user procedure.',
    },
    {
      slug: 'spraying-or-spreading-water',
      label: 'Water is spraying, flowing, or spreading across the floor',
      shortDescription: 'The leak is more than a contained drip or small splash.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop the water now',
      resultBody:
        'A failed supply connection, displaced drain hose, or overflow can release enough water to reach flooring, walls, belongings, and nearby electrical equipment.',
      recommendedAction:
        'Stop the cycle and close the washer supply valves if they are safely reachable. Use the home’s main water shutoff if necessary, then arrange urgent plumbing or appliance help.',
    },
    {
      slug: 'water-near-electrical-equipment',
      label: 'Water is near the plug, outlet, cord, controls, or electrical panel',
      shortDescription: 'The wet area may contain energized equipment or blocks safe access to a shutoff.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stay out of the wet area',
      resultBody:
        'Wet electrical equipment and standing water can create a shock hazard. Do not approach the plug, washer, breaker, or shutoff if doing so requires touching wet equipment or standing in water.',
      recommendedAction:
        'Keep people away. Cut power only from a dry, safely accessible location. Otherwise call an electrician or emergency service to make the area safe before cleanup or appliance inspection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Water is escaping from its intended path',
      description:
        'The first puddle may be small, but it does not reveal whether the source is a one-time spill, pressurized supply connection, drain problem, or internal failure.',
      severity: 'info',
      chainLabel: 'Leak source still unknown',
    },
    {
      stageLabel: 'IF THE CYCLE CONTINUES',
      title: 'More water may reach the floor',
      description:
        'The washer can add water during filling or pump water out during draining, feeding a leak that only appears during a particular part of the cycle.',
      severity: 'caution',
      chainLabel: 'Operation feeds the leak',
    },
    {
      stageLabel: 'IF MATERIALS STAY WET',
      title: 'Flooring and nearby materials can be damaged',
      description:
        'Repeated wetting can stain, swell, soften, or separate wood-based products and finishes. Moisture can also travel beneath flooring or into adjacent rooms.',
      severity: 'warning',
      chainLabel: 'Puddle → hidden moisture',
    },
    {
      stageLabel: 'IF MOISTURE IS NOT DRIED',
      title: 'Damp areas can support mold growth',
      description:
        'EPA advises fixing the water source and drying wet materials promptly. Porous materials that cannot be cleaned and dried may require removal.',
      severity: 'warning',
      chainLabel: 'Persistent moisture → mold risk',
    },
    {
      stageLabel: 'IF WATER REACHES ENERGIZED EQUIPMENT',
      title: 'The leak becomes an electrical hazard',
      description:
        'A wet outlet, plug, cord, appliance component, or electrical circuit should not be handled or returned to service until the area is safely de-energized and the equipment is dry and evaluated.',
      severity: 'danger',
      chainLabel: 'Water → electrical exposure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A few drops fall only after opening a front-load door',
      ignoreAnswer: 'Yes, if the closed washer and floor stayed dry',
      severity: 'info',
      whatToDo:
        'Wipe the residual moisture away and watch the next cycle. Investigate if water appears while the door is closed.',
    },
    {
      situation: 'A few drops escape through a dirty door gasket',
      ignoreAnswer: 'Only for a controlled retest after cleaning',
      severity: 'caution',
      whatToDo:
        'Clean the gasket and glass, remove trapped items, and check for tears. Stop if the leak returns.',
    },
    {
      situation: 'Suds or water overflow from the detergent dispenser',
      ignoreAnswer: 'No — correct the cause first',
      severity: 'caution',
      whatToDo:
        'Stop the cycle, remove excess suds as directed by the manual, and clean and reassemble the dispenser correctly.',
    },
    {
      situation: 'An inlet hose or household water valve is leaking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Close both washer supply valves and repair or replace the leaking connection before restoring water.',
    },
    {
      situation: 'The standpipe overflows while the washer drains',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using the washer and have the drain restriction or hose-installation problem corrected.',
    },
    {
      situation: 'Water keeps returning underneath the washer',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Shut off the washer’s water supply and arrange service to identify the internal or hidden source.',
    },
    {
      situation: 'Water is flowing or spreading beyond the washer',
      ignoreAnswer: 'No — shut off the water now',
      severity: 'danger',
      whatToDo: 'Close the washer valves or main water supply if safely reachable and get urgent help.',
    },
    {
      situation: 'Water is near electrical equipment or standing water',
      ignoreAnswer: 'No — keep away',
      severity: 'danger',
      whatToDo:
        'Do not touch wet equipment or enter the water. Isolate power only from a dry, safe location or call an electrician.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop the cycle and control the water',
      body:
        'Use the washer’s normal stop or power control if safely reachable. Close the hot and cold supply valves if the leak is active, especially when water appears during filling or continues while the machine is off.',
    },
    {
      title: 'Keep electrical shutdown separate from the wet area',
      body:
        'Do not unplug the washer or operate a breaker while standing in water. If the outlet, cord, or appliance has become wet, leave power off until the equipment is dry and its safety has been evaluated.',
      destinationProblemSlug: 'breaker-keeps-tripping',
    },
    {
      title: 'Dry the visible area and find the first wet point',
      body:
        'Once electrical hazards and active water are controlled, remove standing water and dry accessible surfaces. Check where fresh water first appears rather than assuming the puddle’s location identifies the failed part.',
    },
    {
      title: 'Inspect only user-accessible parts',
      body:
        'Following the owner’s manual, examine the inlet hoses, drain hose, door gasket, dispenser, and any user-serviceable pump filter. Replace visibly damaged hoses or seals with compatible parts and do not open the washer cabinet.',
    },
    {
      title: 'Match the repair provider to the source',
      body:
        'Call a plumber for a leaking household valve, supply plumbing, or backing-up standpipe. Use an appliance service provider for a damaged door seal, internal hose, pump, tub, inlet valve, or unexplained leak beneath the machine.',
      destinationProblemSlug: 'slow-drain',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Water is touching the plug, outlet, cord, or controls',
      description:
        'Do not approach wet energized equipment or unplug it while standing in water. Isolate power only from a dry, safe location.',
      severity: 'danger',
    },
    {
      title: 'The breaker trips, sparks appear, or something smells burned',
      description:
        'Leave the circuit off. Do not repeatedly reset the breaker or run another cycle to test the washer.',
      severity: 'danger',
    },
    {
      title: 'Water is spraying or spreading quickly',
      description:
        'Close the washer supply valves or main water shutoff if they are safely accessible and arrange urgent help.',
      severity: 'danger',
    },
    {
      title: 'The washer leaks while it is turned off',
      description:
        'A supply hose, household valve, connection, or inlet component may still be exposed to water pressure.',
      severity: 'warning',
    },
    {
      title: 'A hose is cracked, stiff, torn, punctured, or bulging',
      description:
        'Close the water valves and replace the hose with a compatible part. Do not tape or patch a damaged pressurized inlet hose.',
      severity: 'warning',
    },
    {
      title: 'The standpipe backs up or other drains react when the washer empties',
      description:
        'This can indicate a household drain restriction. Stop using the washer until the drain can accept its discharge normally.',
      severity: 'warning',
    },
    {
      title: 'Flooring is soft, swollen, stained, or wet in another room',
      description:
        'The water has moved beyond a surface puddle. Control the source and inspect concealed areas and porous materials for moisture damage.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a few drops of water from a washing machine an emergency?',
      answer:
        'Not always. Drops that fall only after opening a front-load door may be residual water. Drops appearing with the door closed, beneath the machine, or at a hose connection are an active leak and should be addressed before another load.',
    },
    {
      question: 'Can I finish the wash cycle if the leak looks small?',
      answer:
        'Usually not. Continuing the cycle can feed the leak during filling or draining. Stop the machine, control the water, and identify the source first.',
    },
    {
      question: 'Should I unplug a leaking washing machine?',
      answer:
        'Only if the plug and your path to it are completely dry and safely reachable. If water is near the plug or you would stand in water, do not approach it; isolate power from a safe, dry location or call an electrician.',
    },
    {
      question: 'Why does my washer leak only during the drain or spin cycle?',
      answer:
        'Check for a loose, damaged, or displaced drain hose and watch the standpipe for backup. An internal pump or hose can also leak only while the washer is draining.',
    },
    {
      question: 'Why is water leaking from the front door?',
      answer:
        'Common external causes include debris on the gasket, trapped clothing, detergent residue, or a door that is not fully closed. A torn or deformed gasket generally requires repair.',
    },
    {
      question: 'Can too much detergent make a washer leak?',
      answer:
        'Yes. Excess detergent or the wrong detergent can create too many suds, while residue can block dispenser passages. Follow the washer and detergent instructions rather than adding extra detergent.',
    },
    {
      question: 'Can a washer leak even when it is off?',
      answer:
        'Yes. An inlet hose, hose connection, or household shutoff valve can keep leaking while the water supply remains open. Close both washer valves and investigate promptly.',
    },
    {
      question: 'Should I call a plumber or an appliance repair service?',
      answer:
        'Call a plumber for household valves, supply plumbing, or a backing-up standpipe. Use appliance service when water comes from inside the cabinet, a damaged gasket, pump area, or another washer component.',
    },
    {
      question: 'Can I put towels or a pan under the washer and keep using it?',
      answer:
        'No. Towels and pans may limit a minor puddle, but they do not stop the source and may hide continued moisture beneath the washer or flooring.',
    },
    {
      question: 'How soon should I dry the floor after a leak?',
      answer:
        'Start as soon as the water and electrical hazards are controlled. EPA recommends drying wet or damp materials within one to two days to reduce the chance of mold growth.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'What to Do to Protect Yourself From Electrical Hazards',
      url: 'https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-from-electrical-hazards.html',
      sourceType: 'government',
      notes:
        'Advises turning off power when electrical equipment is wet or near water, never operating electrical controls while standing in water, and keeping wet equipment out of service until dry and evaluated.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'A Brief Guide to Mold, Moisture and Your Home',
      url: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
      sourceType: 'government',
      notes:
        'Explains that moisture supports mold growth, advises fixing the water problem, and recommends drying wet or damp materials within 24 to 48 hours after a leak or spill.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Front Load Washer - Leaking Water',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17532',
      sourceType: 'manufacturer',
      notes:
        'Covers gasket debris, dispenser blockage, fill and drain hose checks, and stopping the washer, power, and household water when substantial leaking or flooding occurs.',
    },
    {
      publisher: 'Samsung',
      title: 'Samsung washing machine is leaking',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10001007/',
      sourceType: 'manufacturer',
      notes:
        'Covers hose and connection damage, door-gasket debris, drain-hose installation, pump-filter maintenance, detergent use, and normal residual drops from an opened front-load door.',
    },
    {
      publisher: 'LG Electronics',
      title: 'LG Washer – Why is My Front Load Washing Machine Leaking?',
      url: 'https://www.lg.com/us/support/help-library/lg-washer-why-is-my-front-load-washing-machine-leaking-CT10000010-1431986512448',
      sourceType: 'manufacturer',
      notes:
        'Identifies dispenser, door, pump-filter, inlet-hose, drain-hose, and internal areas as possible sources and provides model-specific checks, shutdown steps, and service guidance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Model-specific washer manual',
      description:
        'Provides the correct shutdown, drain-hose installation, pump-filter, detergent, and user-maintenance instructions for the exact washer.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Compatible inlet hoses and sealing washers',
      description:
        'Replace a hose or connector seal that is cracked, stiff, torn, bulging, missing, or otherwise damaged. Match the parts to the washer and connection type.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Wet-water cleanup equipment',
      description:
        'Absorbent towels, a mop, or a wet vacuum can help remove water after the supply and electrical hazards are controlled. Do not use powered equipment in an unsafe wet area.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Plumbing or appliance diagnostic service',
      description:
        'A plumber can handle household valves and drain backups, while appliance service can identify internal hoses, pumps, seals, tubs, and valves.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'small-leak-under-sink',
      anchorText: 'How should I handle another small household leak?',
      relationshipType: 'sibling',
    },
    {
      slug: 'slow-drain',
      anchorText: 'Could a slow household drain be causing the overflow?',
      relationshipType: 'cause',
    },
    {
      slug: 'water-damaged-cabinet',
      anchorText: 'What if nearby cabinetry has water damage?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'breaker-keeps-tripping',
      anchorText: 'What if the washer circuit breaker keeps tripping?',
      relationshipType: 'escalation',
    },
  ],
};
