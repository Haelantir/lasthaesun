import type { ProblemSeed } from '../types';

export const washingMachineShakesViolently: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'vibration-and-balance',
  slug: 'washing-machine-shakes-violently',
  canonicalPath: '/appliances/washing-machines/vibration-and-balance/washing-machine-shakes-violently/',
  name: 'Washing Machine Shaking Violently',
  eyebrow: 'Appliances · Washing Machines · Vibration & Balance',

  h1: 'Can I Ignore a Washing Machine That Shakes Violently?',
  seoTitle: 'Violently Shaking Washer: When to Stop and What to Check',
  metaDescription:
    'A violently shaking washer may have a load imbalance, leveling issue, installation error, or internal fault. Learn when to stop it and what to check.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Only after the shaking is resolved',

  shortAnswer:
    'No. Pause or stop a violently shaking washer instead of letting the spin cycle continue. Rebalance the load and check the installation; if severe shaking returns, leave the machine off and arrange service.',

  whyItMattersHeading: 'Why Violent Washer Shaking Needs Attention',
  whyItMatters: [
    'A bunched load can make a washer pound during spin, and that problem may disappear after the laundry is redistributed. Small, brief movement during load sensing can also be normal. Violent shaking, walking across the floor, or repeated banging is different.',
    'A washer also depends on solid flooring, firm contact at every leveling foot, and correct installation. Shipping hardware left in a new front-loader can cause excessive vibration. If those simple causes are ruled out and the shaking continues, the machine may need service rather than another load.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Washer If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Assessment based on current CPSC recall notices and LG, Samsung, Whirlpool, and GE guidance on load balance, leveling, shipping hardware, testing, and service.',
  disclaimer:
    "General appliance triage only. Follow your model's manual and any recall instructions. Do not tip the washer, open its panels, or approach wet electrical parts; leave internal repairs and wet electrical issues to qualified service.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'brief-load-sensing-movement',
      label: 'It moves briefly while sensing the load',
      shortDescription:
        'The cabinet stays planted, movement is mild and brief, and there is no banging, walking, leak, odor, damage, or error.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Brief mild movement can be normal',
      resultBody:
        'Some washers make small movements while measuring or redistributing a load. That is not the same as violent shaking during a sustained spin.',
      recommendedAction:
        'Watch the cycle. Take action if the movement becomes forceful, continues into high-speed spin, or causes the cabinet to move from its position.',
    },
    {
      slug: 'one-off-unbalanced-load',
      label: 'A bulky or tangled load caused one shaking episode',
      shortDescription:
        'Laundry collected on one side, and the washer runs normally after the items are spread out or the load is adjusted.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The load was probably out of balance',
      resultBody:
        'A single absorbent item, tangled bedding, or a very small load can concentrate wet weight on one side of the drum. If redistribution fully stops the shaking, the washer itself may be fine.',
      recommendedAction:
        "Wait for the drum to stop, spread the items evenly, and follow the manual's load and cycle guidance. Stop again if forceful shaking returns.",
    },
    {
      slug: 'washer-rocks-when-off',
      label: 'The washer rocks when you press its corners',
      shortDescription:
        'The machine is stationary and empty, but one or more feet do not feel firmly planted on the floor.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Level the washer before normal use',
      resultBody:
        'A washer that rocks while off is not supported evenly. During spin, that instability can turn ordinary vibration into pounding or movement.',
      recommendedAction:
        'Turn the washer off and follow its installation instructions to level it, seat every foot firmly, and secure any foot locknuts. Do not tip a heavy washer by yourself.',
    },
    {
      slug: 'shipping-hardware-still-installed',
      label: 'A recently installed front-loader may still have shipping hardware',
      shortDescription:
        'The washer has shaken severely since installation or moving, and the drum feels unusually rigid when pushed as the manual describes.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop until the installation is corrected',
      resultBody:
        'Front-load shipping bolts or braces hold the tub for transport. Manufacturers warn that leaving them installed causes excessive noise and vibration during operation.',
      recommendedAction:
        "Stop using the washer and check the model's installation guide. Remove only the shipping components identified for that model, or contact the installer or manufacturer for help.",
    },
    {
      slug: 'shaking-continues-after-rebalancing',
      label: 'It still shakes with a balanced load',
      shortDescription:
        'Redistributing the laundry, correcting the load size, and confirming that the washer is level do not solve the problem.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The washer needs diagnosis',
      resultBody:
        'Manufacturers recommend service when vibration continues after load and installation checks. Repeated test loads do not identify an internal fault and can allow more pounding or movement.',
      recommendedAction:
        'Leave the washer off and arrange service using the model and serial number. Describe whether the shaking occurs during wash, drain, or spin and whether the drum looks off-center.',
    },
    {
      slug: 'washer-walks-or-hits-things',
      label: 'The washer walks, jumps, or strikes nearby objects',
      shortDescription:
        'The cabinet changes position or bangs into a wall, dryer, cabinet, hoses, or other equipment.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop the cycle now',
      resultBody:
        'A moving cabinet can damage the washer or surrounding property. Excessive vibration has also been associated with injury hazards in specific recalled washer models.',
      recommendedAction:
        'Use Pause or Cancel without grabbing the moving machine. After it stops, check the load, floor, feet, clearances, hoses, cord, installation, and recall status before any further use.',
    },
    {
      slug: 'bulky-or-water-resistant-item',
      label: 'It shakes while washing bedding or a water-resistant item',
      shortDescription:
        'The problem appears with a mattress cover, mat, blanket, waterproof fabric, or another item that holds water unevenly.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Do not force the current cycle to finish',
      resultBody:
        'These items can become severely unbalanced, and some models require a particular cycle or prohibit certain items. Recall instructions for affected washers may also impose special restrictions.',
      recommendedAction:
        "Stop the cycle, let the washer drain and unlock normally, and check the model's fabric, load, and cycle instructions before trying the item again.",
    },
    {
      slug: 'stacked-unit-or-pedestal-moves',
      label: 'A stacked unit, riser, or pedestal is moving',
      shortDescription:
        'The washer itself or the equipment mounted above or below it rocks, shifts, or has visibly loose attachment points.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop until the assembly is secure',
      resultBody:
        'Stacked and raised installations rely on the correct approved hardware, firm feet, and proper leveling. Shaking should not be dismissed when the support assembly is moving.',
      recommendedAction:
        'Stop use and check the installation instructions for the washer, pedestal, riser, and stacking kit. Arrange installation service if hardware is loose or inaccessible.',
    },
    {
      slug: 'leak-electrical-or-loose-parts',
      label: 'Shaking comes with water, electrical signs, or loose panels',
      shortDescription:
        'There is leaking, smoke, sparking, a burning smell, breaker tripping, cord damage, or movement of the lid, door, top, drum, or cabinet panels.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a safety problem',
      resultBody:
        'These signs go beyond an ordinary unbalanced load. Water near energized equipment, electrical damage, or parts separating during operation can create injury, shock, fire, or impact hazards.',
      recommendedAction:
        'Stop the washer and keep clear of water and moving parts. Disconnect power only from a dry, safely accessible location, then arrange appropriate appliance or electrical service.',
    },
    {
      slug: 'washer-is-recalled',
      label: 'The model and serial number match a safety recall',
      shortDescription:
        'The washer appears in a CPSC or manufacturer recall involving vibration, a loose drum, a separating top, fire, shock, or another hazard.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Follow the recall instructions exactly',
      resultBody:
        'Recall remedies and interim instructions are model-specific. CPSC has told users of certain recalled washers with excessive shaking to stop using them immediately.',
      recommendedAction:
        'Stop use when the recall directs it, contact the manufacturer for the listed remedy, and do not substitute generic load-balancing advice for the official recall instructions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The spin force is not being controlled normally',
      description:
        'A bunched load, poor leveling, unstable floor, shipping hardware, or an internal problem can make the tub pound against its suspension or move the cabinet.',
      severity: 'caution',
      chainLabel: 'Imbalance or setup fault',
    },
    {
      stageLabel: 'IF THE LOAD IS THE CAUSE',
      title: 'Pausing and redistributing may solve it',
      description:
        'If the washer becomes stable after the load is spread evenly and remains stable on a normal test, the episode may have been a one-time imbalance.',
      severity: 'info',
      chainLabel: 'Load corrected',
    },
    {
      stageLabel: 'IF THE CAUSE REMAINS',
      title: 'The shaking keeps returning',
      description:
        'Incorrect leveling, an unsuitable floor, overloads, shipping hardware, or an unresolved machine fault can produce repeated vibration and pounding.',
      severity: 'warning',
      chainLabel: 'Repeated pounding',
    },
    {
      stageLabel: 'IF THE WASHER STARTS WALKING',
      title: 'The machine and nearby property can be damaged',
      description:
        'A moving cabinet may strike walls, cabinets, another appliance, hoses, or the power connection. CPSC recall records document property damage from excessive washer vibration in specific affected models.',
      severity: 'warning',
      chainLabel: 'Washer movement',
    },
    {
      stageLabel: 'IF PARTS, WATER, OR ELECTRICAL DAMAGE APPEARS',
      title: 'Continued use can become dangerous',
      description:
        'Certain recalled models have had drums or tops loosen during use. Any separating part, active leak, damaged cord, smoke, sparking, or burning odor is a reason to stop using the washer.',
      severity: 'danger',
      chainLabel: 'Injury or electrical hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Movement is mild, brief, and limited to load sensing',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Watch the machine. It should remain planted and settle without forceful banging, walking, leaking, or an error.',
    },
    {
      situation: 'One unbalanced load stops shaking after redistribution',
      ignoreAnswer: 'Yes, with monitoring',
      severity: 'info',
      whatToDo:
        'Finish only if the washer now runs normally. Use the recommended load size and cycle for similar items in the future.',
    },
    {
      situation: 'Shaking returns on the next ordinary balanced load',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the washer and arrange diagnosis after checking the feet, floor, load, and installation instructions.',
    },
    {
      situation: 'The empty washer rocks when pressed at its corners',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Level and stabilize the washer before normal use. Confirm that every foot contacts a solid floor and any locknuts are secure.',
    },
    {
      situation: 'A recently installed front-loader may still have shipping bolts',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop use and verify the installation against the manual. Contact the installer if the required shipping hardware was not removed correctly.',
    },
    {
      situation: 'The washer walks, jumps, or hits nearby objects',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop the cycle without trying to hold the machine in place. Inspect the installation, connections, surrounding damage, and recall status.',
    },
    {
      situation: 'Bedding or a water-resistant item triggers violent shaking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        "Stop the cycle and consult the model's instructions for permitted items, load arrangement, and cycle selection before washing it again.",
    },
    {
      situation: 'There is leaking, smoke, sparking, odor, cord damage, or a loose panel',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop using the washer, stay clear of wet electrical equipment, and arrange service before reconnecting or operating it.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop the current spin cycle',
      body:
        'Press Pause or Cancel from a safe position. Do not grab, brace, climb on, or move the washer while the drum is spinning. Wait for the drum to stop and the lid or door to unlock normally.',
    },
    {
      title: 'Redistribute or reduce the load',
      body:
        'Spread tangled items around the tub, remove some laundry if it is tightly packed, or add compatible items if one absorbent item is spinning alone. Follow the manual for bedding, rugs, mats, and water-resistant fabrics.',
    },
    {
      title: "Check the washer's footing and floor",
      body:
        'With the washer off, press its corners to see whether it rocks. Follow the installation guide to level it, place every foot firmly on a solid floor, tighten the specified locknuts, and verify any pedestal or stacking hardware.',
    },
    {
      title: 'Verify shipping hardware and recall status',
      body:
        'If the washer was recently installed or moved, check the model-specific installation guide for shipping bolts, braces, or packing. Use the model and serial number to search CPSC and manufacturer recall notices.',
    },
    {
      title: 'Perform only the model-approved test',
      body:
        "After correcting an obvious load or installation issue, use the test procedure in the owner's manual and stay nearby. Stop immediately if severe shaking returns; persistent vibration needs service rather than repeated testing.",
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'It walks or jumps across the floor',
      description:
        'Do not try to restrain a moving washer with your hands or body. Stop the cycle and inspect the load, feet, floor, installation, connections, and recall status.',
      severity: 'danger',
    },
    {
      title: 'The drum, lid, door, top, or cabinet looks loose',
      description:
        'Shifting or separating parts are not ordinary load imbalance. Leave the washer off and arrange service.',
      severity: 'danger',
    },
    {
      title: 'Water is leaking or reaching the plug, outlet, or wiring',
      description:
        'Keep away from the wet electrical area. Do not stand in water or touch wet equipment to disconnect it.',
      severity: 'danger',
    },
    {
      title: 'You smell burning or see smoke or sparks',
      description:
        'Stop using the washer. Disconnect power only if that can be done from a dry, safely accessible location.',
      severity: 'danger',
    },
    {
      title: 'A breaker trips when the washer runs',
      description:
        'Do not repeatedly reset the breaker to continue the load. The appliance or electrical circuit needs diagnosis.',
      severity: 'danger',
    },
    {
      title: 'Severe shaking remains after load and leveling checks',
      description:
        'Manufacturers recommend service when redistribution, correct loading, leveling, and installation checks do not resolve the vibration.',
      severity: 'warning',
    },
    {
      title: 'The washer matches a safety recall',
      description:
        "Follow the recall's stop-use, cycle restriction, repair, replacement, or refund instructions rather than relying on generic troubleshooting.",
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is any washing machine vibration normal?',
      answer:
        'Yes. Mild vibration during load sensing or high-speed spin can be normal if the washer stays planted and does not bang, walk, leak, or show damage. Violent shaking is not normal operation.',
    },
    {
      question: 'Can an unbalanced load really make a washer shake violently?',
      answer:
        'Yes. A small load, a single absorbent item, tangled bedding, or tightly packed laundry can put most of the wet weight on one side. Pause and redistribute it rather than letting the pounding continue.',
    },
    {
      question: 'Why does the shaking happen only during the spin cycle?',
      answer:
        'Imbalance and poor support become more noticeable as spin speed rises. If the washer repeatedly becomes violent during spin despite a balanced load and correct installation, it needs service.',
    },
    {
      question: 'Can I hold the washer still until the cycle ends?',
      answer:
        'No. Do not brace or grab a moving washer. Use the controls from a safe position and wait until the drum fully stops before approaching or opening it.',
    },
    {
      question: 'Why is my brand-new front-load washer shaking?',
      answer:
        'Check the installation first. Shipping bolts or braces may still be installed, the feet may not be set firmly, or the floor may be unstable. Follow the manual for your exact model.',
    },
    {
      question: 'How can I tell whether the washer is level?',
      answer:
        'With the washer off, press opposite corners and check whether it rocks. A level can confirm front-to-back and side-to-side alignment, but every foot must also contact the floor firmly.',
    },
    {
      question: 'Will anti-vibration pads fix a violently shaking washer?',
      answer:
        'Pads may help prevent slipping when the manufacturer recommends them, but they do not correct shipping bolts, a rocking cabinet, an unsuitable installation, an unbalanced load, or an internal fault.',
    },
    {
      question: 'Can I wash a blanket or waterproof mattress cover again?',
      answer:
        "Check the owner's manual first. Some washers require a specific cycle, loading method, or spin setting, while some items may not be permitted. Recall instructions can impose additional restrictions.",
    },
    {
      question: 'Should I run an empty spin cycle to test the washer?',
      answer:
        "Only if the owner's manual or manufacturer guidance calls for that test and there are no leaks, electrical signs, loose parts, or recall stop-use instructions. Stop the test if severe shaking begins.",
    },
    {
      question: 'Does violent shaking mean the suspension is broken?',
      answer:
        'Not necessarily. Load imbalance, leveling, flooring, shipping hardware, drainage, calibration, or installation can produce similar symptoms. Persistent shaking after basic checks requires diagnosis.',
    },
    {
      question: 'Should I check whether my washing machine was recalled?',
      answer:
        'Yes. Search using the full model and serial number. If the washer matches a CPSC or manufacturer recall, follow that notice exactly because remedies and interim instructions are model-specific.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'LG Recalls Top-Loading Washing Machines Due to Risk of Injury',
      url: 'https://www.cpsc.gov/Recalls/2012/lg-recalls-top-loading-washing-machines-due-to-risk-of-injury',
      sourceType: 'government',
      notes:
        'Model-specific recall showing that excessive shaking in named top-load washers could loosen the drum. CPSC told affected users who observed excessive shaking to stop using the recalled machine immediately.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Samsung Recalls Top-Load Washing Machines Due to Risk of Impact Injuries',
      url: 'https://www.cpsc.gov/Recalls/2016/samsung-recalls-top-load-washing-machines',
      sourceType: 'government',
      notes:
        'Model-specific recall for named top-load washers whose tops could detach. Documents reports involving excessive vibration, top separation, and impact injuries; it does not apply to all washers.',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'LG Washer – Troubleshooting Vibration Issues on an LG Washing Machine',
      url: 'https://www.lg.com/us/support/help-library/lg-washer-troubleshooting-vibration-issues-on-an-lg-washing-machine--1400517829363',
      sourceType: 'manufacturer',
      notes:
        'Covers shipping-bolt removal, load redistribution, leveling, test cycles, and requesting service when vibration continues after troubleshooting.',
    },
    {
      publisher: 'Samsung Electronics America',
      title: 'Samsung washing machine is shaking too much',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10007111/',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes small sensing vibration from excessive shaking and covers shipping bolts, load balance, stable flooring, leveling, calibration, testing, and service.',
    },
    {
      publisher: 'Whirlpool',
      title: 'Washer Walking and/or Vibrating - Front Load Washer',
      url: 'https://producthelp.whirlpool.com/Laundry/Washers/Front_Load_Washers/Not_Starting_or_Not_Operating/Vibration/Washer_Walking_and%2F%2For_Vibrating_-_Front_Load_Washer',
      sourceType: 'manufacturer',
      notes:
        'Covers walking and vibration related to shipping materials, firm foot contact, leveling, flexing floors, overloading, bulky single items, pedestals, and service.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Front Load Washer - Walking, Vibrating, Shaking, or Moving',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17446',
      sourceType: 'manufacturer',
      notes:
        'Covers load redistribution, model-approved testing, pump filters, shipping bolts, leveling, solid flooring, and service when troubleshooting does not correct excessive movement.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Bubble level',
      description:
        'Helps check the cabinet from front to back and side to side while the leveling feet are adjusted according to the installation guide.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: "Owner's and installation manuals",
      description:
        'Provide model-specific instructions for shipping hardware, leveling feet, test cycles, load limits, special fabrics, pedestals, risers, and stacking kits.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer appliance service',
      description:
        'Appropriate when severe vibration continues after the load, floor, leveling, and installation have been checked.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'CPSC recall search',
      description:
        "Lets you compare the washer's brand, model, and serial number with current recall and product safety warning records.",
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'breaker-keeps-tripping',
      anchorText: 'Can I ignore a breaker that trips when the washer runs?',
      relationshipType: 'escalation',
    },
    {
      slug: 'warm-electrical-outlet',
      anchorText: 'Can I ignore a warm outlet behind the washing machine?',
      relationshipType: 'escalation',
    },
  ],
};
