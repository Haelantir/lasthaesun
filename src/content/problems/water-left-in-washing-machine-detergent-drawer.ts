import type { ProblemSeed } from '../types';

export const waterLeftInWashingMachineDetergentDrawer: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'water-and-drainage',
  slug: 'water-left-in-washing-machine-detergent-drawer',
  canonicalPath:
    '/appliances/washing-machines/water-and-drainage/water-left-in-washing-machine-detergent-drawer/',
  name: 'Water Left in the Washer Detergent Drawer',
  eyebrow: 'Appliances · Washing Machines · Water & Drainage',

  h1: 'Can I Ignore Water Left in the Washing Machine Detergent Drawer?',
  seoTitle: 'Water Left in the Washer Detergent Drawer: Normal or Clogged?',
  metaDescription:
    'A small amount after a cycle can be normal. Learn when pooled water points to a dirty siphon, poor leveling, a leak, or a failed inlet valve.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the washer?',
  canIUseItLabel: 'Yes—if it is only a small residual amount',

  shortAnswer:
    'Usually, yes. A small amount of clean water left in the dispenser after a completed cycle is normal on many washers. Clean and inspect the drawer if a compartment stays full, additives remain, or the amount is increasing.',

  whyItMattersHeading: 'The Amount and Timing Tell You What Is Wrong',
  whyItMatters: [
    'Washers flush water through the dispenser, and some can remain in the drawer or siphon compartments afterward. Your owner’s manual is the best standard for what is normal on your model.',
    'A consistently full compartment usually points to residue, a blocked or misfitted insert, or poor leveling rather than the main drain pump. Water that accumulates while the washer is off or escapes outside the appliance needs faster attention.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Washer If:',

  lastReviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Checked residual water, dispenser blockage, leveling, off-cycle filling, leak escalation, and wet-appliance safety against current manufacturer and CPSC guidance.',
  disclaimer:
    'General appliance triage only. Follow the instructions for your exact washer model. Do not remove panels or handle plugs, outlets, wiring, or breakers while you or the surrounding area are wet.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'a-few-drops-after-the-cycle',
      label: 'Only a few drops or a shallow film remain after the cycle',
      shortDescription:
        'The water is clean, appears only after washing, and does not interfere with detergent or softener dispensing.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is commonly normal residual water',
      resultBody:
        'Several washer manufacturers state that a small amount can remain in the dispenser after a completed cycle. The drawer does not need to be completely dry for the washer to be operating normally.',
      recommendedAction:
        'Wipe it out if desired and leave the drawer slightly open to dry if your manual permits it. Watch for a larger amount, odor, residue, or poor dispensing.',
    },
    {
      slug: 'manual-allows-water-in-that-compartment',
      label: 'Your owner’s manual says water may remain in that compartment',
      shortDescription:
        'The location and amount match the model-specific description of normal siphon or dispenser operation.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Follow the model-specific guidance',
      resultBody:
        'Some bleach and softener compartments retain a little water because of how their siphons operate. A condition expressly identified as normal in the manual is not evidence of a clog.',
      recommendedAction: 'Continue using the washer while keeping the drawer clean and correctly assembled.',
    },
    {
      slug: 'drawer-nearly-full-every-cycle',
      label: 'A compartment is nearly full after every wash',
      shortDescription: 'The amount is clearly more than a few drops and returns after each completed cycle.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The dispenser is not emptying properly',
      resultBody:
        'A blocked siphon, detergent buildup, misfitted insert, or incorrect drawer angle can keep a larger amount of water trapped. This is usually a local dispenser problem, but it should not become the normal condition.',
      recommendedAction:
        'Remove and clean the drawer and inserts as the manual directs, refit every part fully, check that the washer is level, and run an empty test cycle.',
    },
    {
      slug: 'detergent-or-softener-remains',
      label: 'Detergent or fabric softener remains mixed with the water',
      shortDescription:
        'Laundry additives are still visible in the drawer, or clothes show residue because the compartment did not empty.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Dispensing is incomplete',
      resultBody:
        'Thick additives, excess product, residue, a blocked siphon, or an incorrectly installed insert can prevent the compartment from flushing. Repeated use can add more buildup and cause odor or staining.',
      recommendedAction:
        'Clean the dispenser, confirm the correct insert and compartment, stay below the MAX line, and use the detergent type and dose specified for the washer.',
    },
    {
      slug: 'problem-cleared-after-cleaning',
      label: 'Cleaning and reseating the drawer restored normal operation',
      shortDescription:
        'An empty test cycle now leaves only the small amount allowed by the manual, with no residue or leak.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The simple obstruction appears to be cleared',
      resultBody:
        'Normal dispensing after the drawer, inserts, and siphon openings are cleaned and correctly reassembled is a useful sign that residue or poor assembly caused the problem.',
      recommendedAction: 'Continue using the washer and add dispenser cleaning to its routine maintenance.',
    },
    {
      slug: 'washer-is-not-level',
      label: 'The washer or dispenser drawer visibly slopes',
      shortDescription:
        'The machine was moved, rocks on the floor, or a level shows that it is not aligned as its installation instructions require.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Correct the installation before judging the drawer',
      resultBody:
        'Manufacturers note that an incorrect drawer angle can affect siphon operation and leave more water behind.',
      recommendedAction:
        'Level the washer using its installation instructions. Do not use the open drawer or another projecting part to move or support the machine.',
    },
    {
      slug: 'water-accumulates-while-off',
      label: 'Water appears or keeps rising while the washer is off',
      shortDescription: 'The drawer was emptied or dry, but fresh water collects without a cycle running.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is not ordinary post-cycle moisture',
      resultBody:
        'Water entering a washer while it is not operating can indicate an inlet valve that is not closing. The water supply remains pressurized even when the control panel is off.',
      recommendedAction:
        'Close the washer’s hot and cold supply valves and arrange appliance service. Do not rely on the power button to stop a water-side valve leak.',
    },
    {
      slug: 'drawer-leaks-outside',
      label: 'Water runs from the drawer onto the washer or floor',
      shortDescription:
        'The dispenser overflows during filling or leaves water on nearby cabinets, flooring, the outlet, or the appliance exterior.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as an active washer leak',
      resultBody:
        'Excess detergent, blocked passages, poor drawer assembly, or a damaged component can redirect water outside the intended path. External water can damage surrounding materials and become hazardous near electrical equipment.',
      recommendedAction:
        'Stop the cycle, close the water valves if the leak continues, and disconnect power only from a dry, safely accessible location. Correct the cause before another load.',
    },
    {
      slug: 'drum-also-holds-water',
      label: 'The drum also has standing water or shows a drain error',
      shortDescription:
        'Water in the drawer appears with incomplete draining, wet laundry, a locked door, or a recurring pump or drain code.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'This may be a broader drainage problem',
      resultBody:
        'Drawer-only water does not prove the drain pump is clogged, but water remaining in the drum after a completed cycle changes the diagnosis.',
      recommendedAction:
        'Use the model’s drain procedure and inspect only the user-accessible filter and hose areas described in the manual. Arrange service if the washer still will not drain.',
    },
    {
      slug: 'electrical-warning-signs',
      label: 'There is smoke, electrical burning, sparking, or repeated breaker tripping',
      shortDescription:
        'The water issue appears with heat, damaged wiring, loss of power, or another electrical warning.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using the washer immediately',
      resultBody:
        'This is no longer a routine dispenser issue. A wet or damaged electrical appliance can create shock or fire hazards.',
      recommendedAction:
        'Do not touch wet electrical parts or keep resetting the breaker. Shut off power from a dry, safe location and arrange appropriate electrical or appliance service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'A small amount may simply remain after rinsing',
      description:
        'Clean water confined to the drawer after a completed cycle can be part of normal dispenser operation.',
      severity: 'info',
      chainLabel: 'Residual rinse water → no fault',
    },
    {
      stageLabel: 'IF A SIPHON OR INSERT IS BLOCKED',
      title: 'Water and additives stop dispensing completely',
      description:
        'Detergent residue, thick softener, or a misfitted insert can interrupt the intended flushing and siphoning action.',
      severity: 'caution',
      chainLabel: 'Blocked insert → incomplete dispensing',
    },
    {
      stageLabel: 'IF RESIDUE KEEPS ACCUMULATING',
      title: 'Odor and repeat dispensing problems can develop',
      description:
        'Moisture combined with detergent residue can promote unpleasant odor and biological buildup inside the washer.',
      severity: 'caution',
      chainLabel: 'Residue + moisture → odor',
    },
    {
      stageLabel: 'IF THE DRAWER OVERFLOWS',
      title: 'Water can reach flooring and nearby materials',
      description:
        'A blocked water path or excessive suds can send water over the front of the dispenser rather than into the drum.',
      severity: 'warning',
      chainLabel: 'Overflow → water damage',
    },
    {
      stageLabel: 'IF WATER REACHES ELECTRICAL PARTS',
      title: 'Shock or fire becomes possible',
      description:
        'Do not touch or energize an appliance when leaked water has reached wiring, an outlet, a plug, or damaged electrical components.',
      severity: 'danger',
      chainLabel: 'Wet electrical parts → serious hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A few clean drops remain only after a completed cycle',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Compare the amount with your owner’s manual and keep the drawer clean.',
    },
    {
      situation: 'A small amount remains where the manual says siphon water is normal',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Continue using the washer and allow the drawer to dry between loads if the manual permits it.',
    },
    {
      situation: 'A compartment is nearly full after every cycle',
      ignoreAnswer: 'No—clean it before the next load',
      severity: 'caution',
      whatToDo:
        'Clean the drawer, insert, siphon cap, and accessible housing, then reassemble them correctly and run an empty test.',
    },
    {
      situation: 'Detergent or softener remains with the water',
      ignoreAnswer: 'No—correct the dispensing problem',
      severity: 'caution',
      whatToDo:
        'Check the product type, dose, MAX line, inserts, residue, and washer level before washing more clothes.',
    },
    {
      situation: 'Normal operation returned after cleaning and reseating the parts',
      ignoreAnswer: 'Yes, if the fix holds',
      severity: 'info',
      whatToDo: 'Keep using the washer and repeat the model’s recommended dispenser maintenance as needed.',
    },
    {
      situation: 'Water accumulates while the washer is turned off',
      ignoreAnswer: 'No—close the supply valves',
      severity: 'warning',
      whatToDo: 'Shut the hot and cold washer valves and arrange service for possible inlet-valve leakage.',
    },
    {
      situation: 'Water escapes from the drawer onto the appliance or floor',
      ignoreAnswer: 'No—stop using it',
      severity: 'warning',
      whatToDo:
        'Stop the cycle, control the water source, dry the area, and investigate the leak before another load.',
    },
    {
      situation: 'The drum also contains standing water or a drain error appears',
      ignoreAnswer: 'No—check the drainage system',
      severity: 'warning',
      whatToDo:
        'Follow the manual’s drain and filter procedure rather than assuming the drawer itself is the only problem.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the manual for the normal amount and location',
      body:
        'Find the model number and review the dispenser and troubleshooting sections. Some manuals expressly allow a small amount in certain compartments, while automatic bulk dispensers follow different rules.',
    },
    {
      title: 'Clean the removable drawer and inserts',
      body:
        'Turn the washer off and disconnect it as the manual directs. Remove only user-removable parts, rinse them with warm water, and use a soft brush to clear residue and siphon openings. Clean the accessible drawer housing without spraying water into the machine.',
    },
    {
      title: 'Reassemble the dispenser and level the washer',
      body:
        'Push siphon caps, liquid-detergent inserts, and covers fully into their specified positions. Seat the drawer completely, then check the washer’s alignment using its installation instructions.',
    },
    {
      title: 'Correct the detergent use and run an empty test',
      body:
        'Use the detergent type required by the washer, follow the product dose, and stay below every MAX line. Run the manufacturer-approved empty rinse cycle. Seek service if a large amount returns after cleaning, assembly, and leveling checks.',
    },
    {
      title: 'Switch to leak control if water escapes or enters while off',
      body:
        'Stop using the washer, close its supply valves, and keep water away from outlets and wiring. Disconnect power only if the control or breaker is safely reachable from a dry location.',
      destinationProblemSlug: 'washing-machine-leaking-water',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Water keeps entering while the washer is off',
      description:
        'Close both supply valves. Fresh water accumulating without a running cycle can indicate that an inlet valve is not closing.',
      severity: 'warning',
    },
    {
      title: 'The drawer overflows or water reaches the floor',
      description:
        'Stop the cycle and control the water source rather than running another load to observe the leak.',
      severity: 'warning',
    },
    {
      title: 'The breaker trips or you smell electrical burning',
      description:
        'Do not reset the breaker repeatedly or touch wet electrical equipment. Shut off power from a dry, safe location.',
      severity: 'danger',
    },
    {
      title: 'The drum also fails to drain',
      description:
        'Standing water in the drum, a drain error, or unusually wet laundry points beyond harmless dispenser residue.',
      severity: 'warning',
    },
    {
      title: 'The drawer, insert, or siphon cap is cracked or missing',
      description:
        'Incorrect or damaged dispenser parts can prevent proper flow. Replace them with parts specified for the model.',
      severity: 'caution',
    },
    {
      title: 'Slime, persistent odor, or visible growth returns after cleaning',
      description:
        'Clean and dry the dispenser as directed and address the continuing moisture or residue source rather than masking the odor.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a little water in the detergent drawer normal?',
      answer:
        'Yes, on many washers. The amount should be small, clean, and limited to the locations described as normal in the owner’s manual.',
    },
    {
      question: 'Does water in the drawer mean the washer drain is clogged?',
      answer:
        'Not by itself. If the drum empties normally and there is no drain error, start with the drawer, inserts, siphon openings, and washer level. A main drainage problem is more likely when water also remains in the drum.',
    },
    {
      question: 'Why does the fabric-softener compartment hold more water?',
      answer:
        'Softener compartments commonly use a removable siphon cap. Residue, thick softener, poor leveling, or a cap that is blocked or not fully seated can prevent complete siphoning.',
    },
    {
      question: 'Can I add detergent on top of the leftover water?',
      answer:
        'A trace amount allowed by the manual is usually not a problem. If the compartment contains a noticeable pool that could dilute the product or push it above the MAX line, empty and clean it first.',
    },
    {
      question: 'Should I leave the detergent drawer open after washing?',
      answer:
        'Many manufacturers recommend leaving it open enough to dry, but follow your manual and keep detergent residue and removable parts inaccessible to children and pets.',
    },
    {
      question: 'Could using too much detergent cause water to remain?',
      answer:
        'It can contribute to residue, blocked water paths, excessive suds, poor dispensing, and overflow. Use the detergent type and amount specified for the washer and load.',
    },
    {
      question: 'Why did the problem start after I cleaned the drawer?',
      answer:
        'A siphon cap, insert, or cover may not be fully seated. Compare the assembly with the diagram in the manual and reinstall every removable part in its correct compartment.',
    },
    {
      question: 'What if water is already there before I start a cycle?',
      answer:
        'It may simply be water left from the previous wash. If the drawer was emptied and the level later rises while the washer is off, close the supply valves and arrange service.',
    },
    {
      question: 'Can I clean the drawer with vinegar or bleach?',
      answer:
        'Do not improvise or mix cleaning products. Use the method approved for your model; manufacturers commonly specify warm water and a soft brush for removable dispenser parts.',
    },
    {
      question: 'When does persistent drawer water require service?',
      answer:
        'Arrange service when a large amount returns after the drawer is cleaned and correctly assembled, the washer is level, and an empty test still fails. Service is also appropriate for off-cycle filling, a damaged drawer, or any external leak.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Whirlpool',
      title: 'Water Remains in Dispenser Area - Front Load Washer',
      url: 'https://producthelp.whirlpool.com/Laundry/Stacked_Laundry_Center/Laundry_Tower/Washer/Cycle_Concerns/Water_Remains_After_Cycle_is_Complete/Water_Remains_in_Dispenser_Area_-_Front_Load_Washer',
      sourceType: 'manufacturer',
      notes:
        'States that a small amount after a cycle is normal and directs users to clean the dispenser when larger amounts of water or additives remain.',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'LG Washer - Water Left in Dispenser',
      url: 'https://www.lg.com/us/support/help-library/lg-washer-water-left-in-dispenser--1337625067361',
      sourceType: 'manufacturer',
      notes:
        'Covers normal residual water, detergent buildup, drawer assembly, cleaning, washer leveling, and service when the problem continues.',
    },
    {
      publisher: 'Samsung Electronics America',
      title: 'Dispenser Drawer Issues in Samsung Washing Machine',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10002916/',
      sourceType: 'manufacturer',
      notes:
        'Covers MAX lines, liquid inserts, siphon operation, leveling, residue cleaning, empty rinse cycles, drawer replacement, and service for persistent dispensing issues.',
    },
    {
      publisher: 'Bosch Home Appliances',
      title: 'User Manual and Installation Instructions WGB24600UC',
      url: 'https://media3.bosch-home.com/Documents/9001852659_J.pdf',
      sourceType: 'manufacturer',
      notes:
        'Identifies a blocked insert as a cause of residual compartment water and advises cleaning, correct assembly, ventilation, and drying of the detergent drawer.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Washer - Drips or Fills When Not Turned On',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=16834',
      sourceType: 'manufacturer',
      notes:
        'Says water accumulating while a washer is off can indicate a failed water valve and advises closing the supply valves and obtaining repair service.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Warns of Generator, Carbon Monoxide and Fire Hazards Ahead of Hurricane Season',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Warns-of-Generator-Carbon-Monoxide-and-Fire-Hazards-Ahead-of-Hurricane-Season',
      sourceType: 'government',
      notes:
        'Warns consumers not to touch wet appliances that remain connected to electricity. This supports escalation when an external washer leak reaches electrical equipment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Washer owner’s manual',
      description:
        'Shows which compartments may retain water, how to remove and assemble the drawer, and which cleaning and test procedures apply to the exact model.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Soft nylon cleaning brush',
      description:
        'Helps remove detergent and softener residue from removable inserts and siphon openings without using a sharp tool.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Small bubble level',
      description:
        'Helps confirm that the washer is aligned as its installation instructions require so the dispenser can drain and siphon correctly.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance repair service',
      description:
        'Appropriate when water enters while the washer is off, the drawer leaks after basic corrections, or persistent dispensing trouble suggests a failed part.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'washing-machine-leaking-water',
      anchorText: 'Can I ignore water leaking from the washing machine?',
      relationshipType: 'escalation',
    },
  ],
};
