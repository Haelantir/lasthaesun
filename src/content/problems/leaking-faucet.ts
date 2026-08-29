import type { ProblemSeed } from '../types';

export const leakingFaucet: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'leaks',
  slug: 'leaking-faucet',
  canonicalPath: '/home/plumbing/leaks/leaking-faucet/',
  name: 'Faucet That Keeps Dripping',
  eyebrow: 'Home · Plumbing · Leaks',

  h1: 'Can I Ignore a Faucet That Keeps Dripping?',
  seoTitle: 'Dripping Faucet: Is It Safe to Wait Before Fixing It?',
  metaDescription:
    'A faucet that keeps dripping usually is not an emergency, but it should be repaired. Learn when you can wait, when to shut off the water, and what changes the risk.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the faucet?',
  canIUseItLabel: 'Yes, if the water stays in the sink',

  shortAnswer:
    'Usually, yes for a short while. A steady drip into the sink is normally a low-safety-risk problem, but it wastes water and means the faucet is not sealing correctly. Fix it rather than letting it become background noise.',

  whyItMattersHeading: 'Why a Small Drip Is Still Worth Fixing',
  whyItMatters: [
    'EPA WaterSense lists dripping faucets among common household leaks and notes that worn faucet washers and gaskets frequently cause them. At one drip per second, EPA says a leaky faucet can waste more than 3,000 gallons in a year.',
    'The bigger concern is where the water is going. A drip falling cleanly into the basin is mostly a water-waste and maintenance problem. Water leaking around the handle, faucet base, supply lines, shutoff valves, countertop, or cabinet changes the situation because ongoing moisture can damage the home. If water reaches electrical equipment, the safety risk rises sharply.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop and Deal With It Now If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Checked against current EPA WaterSense leak guidance, CPSC electrical-safety guidance, faucet-manufacturer repair instructions, and AWWA water-waste tools.',
  disclaimer:
    'This page covers household faucet drips. Water escaping into cabinets, walls, floors, or electrical equipment should be treated according to the actual leak location and hazard.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'slow-drip-into-sink',
      label: 'A slow drip falls only into the sink',
      shortDescription: 'The faucet is fully off, but drops keep falling from the spout into the basin.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'You can use it, but schedule the repair',
      resultBody:
        'This is usually not an emergency if all water stays in the sink and the drip is stable. The faucet is still leaking internally and wasting water, so it should not be left indefinitely.',
      recommendedAction:
        'Keep the area under the sink dry, identify the faucet model, and plan to replace the worn seal, washer, cartridge, or other model-specific valve part.',
    },
    {
      slug: 'drip-getting-faster',
      label: 'The drip is getting faster',
      shortDescription: 'What used to be an occasional drop is becoming a steady or increasing leak.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not keep putting this off',
      resultBody:
        'A worsening leak suggests the faucet is no longer sealing reliably. Even if the water still lands in the sink, increasing flow means more wasted water and less confidence that the problem will remain minor.',
      recommendedAction:
        'Repair the faucet soon. If it will not shut off normally, close the fixture shutoff valves if they operate freely and arrange repair.',
    },
    {
      slug: 'leak-around-handle',
      label: 'Water appears around the handle or faucet base',
      shortDescription: 'The faucet is wet somewhere other than the spout outlet.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'This is more than a harmless spout drip',
      resultBody:
        'Water around the handle or base can travel onto the countertop or below the sink instead of staying in the basin. That creates a property-damage problem as well as a plumbing leak.',
      recommendedAction:
        'Dry the area, check below the sink, stop using the faucet if water escapes the basin, and repair the leak source.',
    },
    {
      slug: 'water-under-sink',
      label: 'Water is showing up under the sink',
      shortDescription: 'The cabinet, supply lines, fittings, or floor below the faucet are wet.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop treating this as a faucet-only drip',
      resultBody:
        'Water outside the sink can damage cabinets and other materials, and the visible drip may be coming from a supply connection, valve, or faucet body rather than the spout.',
      recommendedAction:
        'Stop using the faucet, dry the area, identify where the water starts, and shut off the fixture supply if the leak continues.',
    },
    {
      slug: 'shutoff-valve-leaking',
      label: 'The shutoff valve is also dripping',
      shortDescription: 'Closing or touching the valve under the sink reveals a separate leak.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The isolation valve now needs attention too',
      resultBody:
        'A leaking shutoff valve means the component you would normally use to isolate the faucet may itself be unreliable. Forcing an old or stuck valve can make matters worse.',
      recommendedAction:
        'Do not keep working the valve back and forth. Use the main shutoff if necessary and have the valve and faucet repaired.',
    },
    {
      slug: 'faucet-will-not-shut-off',
      label: 'The faucet will not shut off fully',
      shortDescription: 'Water keeps running rather than dripping after the handle is moved to off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Isolate the water supply',
      resultBody:
        'This is no longer a minor drip. A faucet that cannot stop the flow needs prompt isolation and repair.',
      recommendedAction:
        'Close the hot and cold fixture shutoff valves if they operate normally. If they do not stop the flow, use the next working shutoff upstream or the main water shutoff.',
    },
    {
      slug: 'water-near-electricity',
      label: 'Leaking water is reaching electrical equipment',
      shortDescription:
        'Water is near an outlet, powered appliance, garbage disposal connection, power strip, or other electrical equipment.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat the area as an electrical hazard',
      resultBody:
        'CPSC guidance warns that mixing electricity and water can create serious shock or fire hazards. Do not handle wet electrical equipment while it may be energized.',
      recommendedAction:
        'Keep away from the wet electrical area and stop the water source if you can do so without contacting wet electrical equipment. Get appropriate electrical and plumbing help before reuse.',
    },
    {
      slug: 'repeated-repair',
      label: 'The faucet has already been repaired and keeps leaking again',
      shortDescription: 'New seals or cartridges have not produced a lasting fix.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Repeating the same repair may not be enough',
      resultBody:
        'Faucet makers note that persistent leaks can require a different internal part, proper model-specific service, or replacement of an older fixture.',
      recommendedAction:
        'Confirm the exact model and repair part. If the leak persists after correct service, consider professional diagnosis or faucet replacement.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Water keeps being wasted',
      description:
        'A persistent spout drip sends treated water straight down the drain even though the faucet is off.',
      severity: 'info',
      chainLabel: 'Ongoing drip → unnecessary water use',
    },
    {
      stageLabel: 'IF THE DRIP CONTINUES',
      title: 'The leak remains a maintenance problem',
      description:
        'The faucet is not sealing correctly. Worn washers, gaskets, cartridges, seals, seats, or springs may be involved depending on the faucet design.',
      severity: 'caution',
      chainLabel: 'Worn valve part → continuing leak',
    },
    {
      stageLabel: 'IF WATER ESCAPES THE BASIN',
      title: 'Moisture can damage nearby materials',
      description:
        'EPA advises addressing household leaks because they can cause serious damage in the home. Water around the faucet base or below the sink deserves more urgency than a clean drip into the drain.',
      severity: 'warning',
      chainLabel: 'Escaping water → cabinet or surface damage',
    },
    {
      stageLabel: 'IF THE SHUTOFF CANNOT ISOLATE IT',
      title: 'A minor repair can become harder to control',
      description:
        'A leaking, stuck, or ineffective shutoff valve makes it harder to safely isolate the faucet for service or if the leak increases.',
      severity: 'warning',
      chainLabel: 'Failed shutoff → harder leak control',
    },
    {
      stageLabel: 'IF WATER REACHES ELECTRICAL EQUIPMENT',
      title: 'Shock and fire risk can enter the picture',
      description:
        'CPSC electrical-safety guidance warns that equipment should be kept dry and free from leaks because water and electricity can create serious shock or fire hazards.',
      severity: 'danger',
      chainLabel: 'Water + energized equipment → serious hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Slow spout drip that stays entirely inside the sink',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo: 'Keep using the sink if needed, but arrange a repair rather than accepting the drip as normal.',
    },
    {
      situation: 'Continuous drip that is becoming faster',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Repair it soon and make sure the fixture shutoff valves work without forcing them.',
    },
    {
      situation: 'Water around the handle, base, or countertop',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using the faucet if water is escaping the basin, dry the area, and locate the source.',
    },
    {
      situation: 'Water under the sink or inside the cabinet',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using the fixture, dry the cabinet, and isolate the water supply if the leak continues.',
    },
    {
      situation: 'Shutoff valve drips or will not stop the water',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Do not force the valve. Use a working upstream shutoff if needed and arrange repair.',
    },
    {
      situation: 'Faucet will not shut off and water keeps running',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Isolate the fixture at the shutoff valves or main supply and repair the faucet before normal use.',
    },
    {
      situation: 'Water is reaching electrical equipment or an outlet',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep away from wet electrical equipment while it may be energized and get the water and electrical hazards addressed before reuse.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Find out whether the leak is only at the spout',
      body:
        'Dry the faucet, countertop, cabinet, supply lines, and shutoff valves. Then run the faucet and turn it off. Watch for new moisture outside the spout. If water appears below the sink, treat that as a separate under-sink leak.',
      destinationProblemSlug: 'small-leak-under-sink',
    },
    {
      title: 'Identify the faucet before buying parts',
      body:
        'Faucet internals vary. Use the brand and model information to find the correct washer, seal, cartridge, seats and springs, or repair kit instead of assuming every faucet uses the same fix.',
    },
    {
      title: 'Shut off the water before opening the faucet',
      body:
        'Close the hot and cold fixture shutoff valves and verify that water has stopped before disassembly. If a shutoff is stuck, corroded, or leaking, do not force it.',
      destinationProblemSlug: 'dripping-shutoff-valve',
    },
    {
      title: 'Repair the worn internal part',
      body:
        'Follow the manufacturer instructions for your faucet design. Keep removed parts in order, use the specified replacement parts, and test for leaks after reassembly.',
    },
    {
      title: 'Replace or escalate when the leak will not stay fixed',
      body:
        'If the correct repair does not stop the leak, parts are unavailable, the faucet body is damaged, or you cannot safely isolate the water, use a plumbing service or replace the fixture.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Water is leaking below the sink',
      description:
        'A wet cabinet, supply line, fitting, or floor means water is escaping the sink area and can damage surrounding materials.',
      severity: 'warning',
    },
    {
      title: 'The shutoff valve is leaking or stuck',
      description:
        'Do not force an old or corroded valve. A failed shutoff can make the faucet harder to isolate safely.',
      severity: 'warning',
    },
    {
      title: 'The faucet will not stop running',
      description:
        'Continuous flow is more urgent than an occasional drip and should be isolated at a working shutoff.',
      severity: 'warning',
    },
    {
      title: 'The drip suddenly becomes a stream',
      description:
        'A rapid change means the leak is no longer stable. Shut off the fixture supply if you can do so safely.',
      severity: 'warning',
    },
    {
      title: 'Cabinet material is swelling, staining, or staying damp',
      description:
        'Those signs suggest water has been escaping outside the basin and the issue may extend beyond the faucet valve itself.',
      severity: 'warning',
    },
    {
      title: 'Water is near electrical equipment',
      description:
        'Keep away from wet outlets, powered appliances, or other energized equipment. Water and electricity can create serious shock or fire hazards.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a dripping faucet a plumbing emergency?',
      answer:
        'Usually not when the drip is slow, stable, and falls entirely into the sink. It becomes more urgent if water escapes the basin, the faucet will not shut off, or the fixture cannot be isolated.',
    },
    {
      question: 'Why does a faucet drip after I turn it off?',
      answer:
        'Persistent dripping commonly comes from worn or damaged internal sealing parts. The exact part depends on the faucet design, so use the model-specific repair instructions.',
    },
    {
      question: 'Can I keep using a faucet that drips?',
      answer:
        'Yes if it still controls flow normally and all water stays in the sink. Keep checking below the sink and do not postpone the repair indefinitely.',
    },
    {
      question: 'Should I close the valves under the sink until I repair it?',
      answer:
        'You can isolate the faucet if the shutoff valves operate normally and you know they serve that fixture. Do not force a valve that is stuck, corroded, or leaking.',
    },
    {
      question: 'Do I need to replace the whole faucet?',
      answer:
        'Often no. Many faucet leaks can be repaired with a model-specific washer, seal, cartridge, or valve part. Replacement makes more sense when the fixture is damaged, parts are unavailable, or leaks keep returning after correct repairs.',
    },
    {
      question: 'What if I replaced the cartridge and the faucet still drips?',
      answer:
        'Confirm that the part matches the exact faucet model and follow the manufacturer troubleshooting steps. Depending on the design, debris, installation, another sealing part, or faucet damage may still need attention.',
    },
    {
      question: 'Will a dripping faucet raise my water bill?',
      answer:
        'It can. EPA WaterSense specifically identifies dripping faucets as a common source of household water waste, and the waste adds up while the leak continues.',
    },
    {
      question: 'How do I know whether the leak is actually under the sink?',
      answer:
        'Dry everything first, then run and shut off the faucet while watching the supply lines, shutoff valves, faucet underside, and cabinet. New moisture away from the spout means you have more than a simple spout drip.',
    },
    {
      question: 'Is it safe to repair a leaking faucet myself?',
      answer:
        'Many faucet repairs are approachable if you can identify the correct parts and fully shut off the water first. Stop if the shutoff does not work, the plumbing is badly corroded, or water is reaching electrical equipment.',
    },
    {
      question: 'What if I rent the home?',
      answer:
        "Report the leak through the landlord or property manager's maintenance process. Repair duties and response requirements vary by lease and location, so this page does not assume one nationwide rule.",
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency WaterSense',
      title: 'Fix a Leak Week',
      url: 'https://www.epa.gov/watersense/fix-leak-week',
      sourceType: 'government',
      notes:
        'Identifies dripping faucets as common household leaks, says worn washers and gaskets frequently cause faucet leaks, recommends turning off the water before repair, and documents the amount of water a persistent drip can waste.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency WaterSense',
      title: 'Home Maintenance',
      url: 'https://www.epa.gov/watersense/home-maintenance',
      sourceType: 'government',
      notes:
        'Advises checking faucets and under-sink connections for leaks and says household leaks can waste water and cause serious damage in the home.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Home Electrical Safety Checklist',
      url: 'https://www.cpsc.gov/s3fs-public/513.pdf',
      sourceType: 'government',
      notes:
        'Advises keeping electrical equipment in dry locations free of leaks and warns that mixing electricity and water can create serious shock or fire hazards.',
    },
    {
      publisher: 'Delta Faucet',
      title: 'DIY: Easiest Way to Fix a Leaky Faucet',
      url: 'https://www.deltafaucet.com/il/home-improvement-101/diy-easiest-way-fix-leaky-faucet',
      sourceType: 'manufacturer',
      notes:
        'Gives repair instructions for certain Delta ball-valve faucets, including shutting off both water supplies first, and shows that seats, springs, cam, and packing can be leak sources on that design.',
    },
    {
      publisher: 'KOHLER',
      title: 'How to Fix a Leaky Sink Faucet',
      url: 'https://www.kohler.com/en/inspiration/articles/how-to/how-to-fix-a-leaky-sink-faucet',
      sourceType: 'manufacturer',
      notes:
        'Describes common faucet leak causes such as worn washers, cartridges, and seals, instructs users to shut off the water before repair, and discusses repair versus replacement.',
    },
    {
      publisher: 'American Water Works Association',
      title: 'Drip Calculator',
      url: 'https://drinktap.org/water-info/water-conservation/drip-calculator',
      sourceType: 'industry',
      notes: 'Provides a calculator for estimating water waste from dripping faucets based on drip rate.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Faucet model and parts guide',
      description:
        'The manufacturer diagram or support page helps identify the correct cartridge, washer, seal, seat, spring, or repair kit for the specific faucet.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Basic faucet repair tools',
      description:
        'A screwdriver, adjustable wrench, pliers, and a drain stopper or cloth cover the basics for many model-specific repairs.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Correct replacement valve part',
      description: 'Use the part specified for the faucet model rather than a visually similar substitute.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Plumbing service',
      description:
        'Useful when the shutoff does not work, the faucet body is damaged, corrosion is severe, or a correct repair does not stop the leak.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'small-leak-under-sink',
      anchorText: 'Is a small leak under the sink safe to ignore?',
      relationshipType: 'escalation',
    },
    {
      slug: 'dripping-shutoff-valve',
      anchorText: 'What if the shutoff valve is dripping too?',
      relationshipType: 'escalation',
    },
    {
      slug: 'mold-under-sink',
      anchorText: 'What if dampness has caused mold under the sink?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'water-damaged-cabinet',
      anchorText: 'What if the cabinet has already been damaged by water?',
      relationshipType: 'follow_up',
    },
  ],
};
