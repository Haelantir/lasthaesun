import type { ProblemSeed } from '../types';

export const bikeChainSkipping: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'bike-drivetrain',
  slug: 'bike-chain-skipping',
  canonicalPath: '/bicycles/drivetrain/bike-chain-skipping/',
  name: 'Bike Chain Skipping',
  eyebrow: 'Mobility · Bicycles · Drivetrain',

  h1: 'Can I Ignore a Bike Chain That Keeps Skipping?',
  seoTitle: 'Bike Chain Skipping Under Load: Causes, Risk, and What to Check',
  metaDescription:
    'A skipping bike chain can dump pedal resistance and cause a fall. Learn what one-gear, all-gear, new-chain, wear, and stiff-link patterns mean.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Not for normal riding',

  shortAnswer:
    'No. A recurring skip can suddenly remove pedal resistance or release the chain, making you lose balance or control. Avoid hard pedaling and diagnose it before your next normal ride; do not ride with visible chain damage or a chain that drops or jams.',

  whyItMattersHeading: 'Why a Skipping Chain Is More Than an Annoyance',
  whyItMatters: [
    'The chain carries your pedaling force to the rear wheel. If it jumps across worn teeth, misses a cog, or passes through a stiff link, the resistance at the pedals can disappear without warning. That is especially destabilizing while climbing, accelerating, or standing on the pedals.',
    'Skipping is a symptom, not a diagnosis. Common causes include chain or sprocket wear, poor derailleur indexing, contamination, incorrect setup, a stiff link, or a worn cassette that no longer meshes with a new chain. A compatible chain-wear checker gives you a concrete starting point, but the replacement limit must match your drivetrain manufacturer’s instructions.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Inspect It If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Chain-skipping risk, wear checks, adjustment patterns, stiff links, and new-chain/old-cassette mismatch were checked against CPSC, Shimano, SRAM, and Park Tool materials.',
  disclaimer:
    'General guidance for bicycle drivetrains. Component compatibility, chain-connector rules, wear limits, and adjustment procedures vary, so follow the instructions for the parts installed on your bike.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'only-during-forceful-shifts',
      label: 'It happens only while shifting under heavy pedal pressure',
      shortDescription:
        'The chain settles into the selected gear and does not skip once the shift is complete.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Change your shifting technique first',
      resultBody:
        'High chain tension can interfere with a derailleur shift. This is different from a chain that jumps after it is already settled on a cog.',
      recommendedAction:
        'Ease pedal pressure during each shift and test again while seated in a clear, flat area. If it skips after the gear has engaged, treat it as a drivetrain fault.',
    },
    {
      slug: 'skips-in-one-or-two-gears',
      label: 'It skips under pressure in only one or two rear gears',
      shortDescription:
        'Most of the cassette works normally, but frequently used cogs jump during climbing or acceleration.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Those cogs or the chain may be worn',
      resultBody:
        'A repeatable skip in a small part of the cassette fits localized sprocket wear, often combined with chain wear. Indexing can contribute, but adjustment will not restore worn tooth profiles.',
      recommendedAction:
        'Measure chain wear and have the affected cogs inspected. Avoid standing or sprinting in those gears until the drivetrain stays engaged under load.',
    },
    {
      slug: 'skips-across-all-gears',
      label: 'It skips or hunts across most of the cassette',
      shortDescription:
        'The problem is not confined to a favorite cog, and shifting feels unreliable throughout the range.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Check adjustment and overall setup',
      resultBody:
        'Broad skipping can come from indexing, cable friction, derailleur or hanger alignment, incorrect chain setup, contamination, or extensive drivetrain wear. Turning an adjuster at random can make another part of the range worse.',
      recommendedAction:
        'Inspect the chain first, then check indexing and derailleur alignment using the component instructions. Use a bike shop if the hanger looks bent or adjustment will not remain consistent.',
    },
    {
      slug: 'started-after-new-chain',
      label: 'It began after a new chain was installed on the old cassette',
      shortDescription: 'The previous chain seemed usable, but its replacement now jumps under pressure.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The cassette may be worn to the old chain',
      resultBody:
        'A heavily worn chain and cassette can develop matching wear. A new chain may then ride up or jump on the old sprocket teeth instead of seating securely.',
      recommendedAction:
        'Confirm that the chain is compatible, correctly sized, routed, and joined. If installation is correct, have the cassette or freewheel inspected and replace worn parts.',
    },
    {
      slug: 'stiff-or-seized-link',
      label: 'One link kinks or hops through the derailleur',
      shortDescription:
        'Backpedaling reveals a link that does not bend freely as it passes around the pulley wheels.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A stiff link can disrupt engagement',
      resultBody:
        'A tight link cannot wrap smoothly around the pulleys and sprockets. It may come from contamination, corrosion, a damaged plate, or a poorly installed connecting pin or master link.',
      recommendedAction:
        'With the bike stationary, inspect the link closely. Replace the chain if the link is bent, cracked, seized, or has a displaced pin; do not try to loosen a structurally damaged link.',
    },
    {
      slug: 'chain-at-wear-limit',
      label: 'A compatible chain checker reaches the replacement mark',
      shortDescription: 'The chain measures at or beyond the wear limit specified for the drivetrain.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Replace the worn chain and inspect the teeth',
      resultBody:
        'Internal roller and rivet wear increases the chain’s pitch, so it no longer meshes correctly with the sprockets. Continued use can wear the cassette and chainrings prematurely.',
      recommendedAction:
        'Replace the chain with a compatible model and connector. Check the cassette and chainrings as well, especially if the old chain was used past its stated limit.',
    },
    {
      slug: 'damaged-chain-or-connector',
      label: 'A plate, pin, roller, or connecting link looks damaged',
      shortDescription:
        'You see cracking, bending, separation, a protruding pin, a missing roller, or a connector that is not fully seated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not ride this chain',
      resultBody:
        'Visible structural damage can allow the chain to separate under load. A detached chain can cause a sudden loss of drive, a fall, or interference with other moving parts.',
      recommendedAction:
        'Stop using the bike and replace the damaged chain or connector according to the component manufacturer’s instructions. Have the drivetrain inspected if the damage followed a jam or impact.',
    },
    {
      slug: 'chain-drops-or-jams',
      label: 'The chain drops, wedges, or moves toward the spokes',
      shortDescription: 'The skip becomes a derailment, or the chain catches between drivetrain parts.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop riding immediately',
      resultBody:
        'A released chain can remove pedal resistance, damage the frame or derailleur, or become caught near a wheel. CPSC incident investigations include riders who lost control after chain malfunctions.',
      recommendedAction:
        'Dismount and keep your hands away from moving parts. Walk the bike and have the limits, hanger, derailleur, wheel installation, chain, and sprockets checked.',
    },
    {
      slug: 'resolved-after-cleaning',
      label: 'It was dry or dirty and stops completely after proper service',
      shortDescription:
        'Cleaning, drying, and lubrication restore smooth engagement during a careful low-load test.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Continue only if the symptom is truly gone',
      resultBody:
        'Contamination and poor lubrication can degrade drivetrain performance. If the chain remains seated in every gear after correct service, there may be no remaining fault.',
      recommendedAction:
        'Test while seated in a clear area before returning to normal riding. If even one under-load skip returns, measure wear and continue the diagnosis.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Pedal resistance disappears',
      description:
        'The crank can lurch forward as the chain jumps, shifting your weight when you expected the pedals to support it.',
      severity: 'caution',
      chainLabel: 'Chain jumps under load',
    },
    {
      stageLabel: 'IF IT KEEPS HAPPENING',
      title: 'Reliable power transfer is lost',
      description:
        'Climbing, accelerating, and crossing traffic become harder to judge because the drivetrain may not respond when you press the pedals.',
      severity: 'warning',
      chainLabel: 'Unpredictable engagement',
    },
    {
      stageLabel: 'IF WEAR IS THE CAUSE',
      title: 'The sprockets wear with the chain',
      description:
        'An elongated chain meshes poorly and can accelerate wear to cassette cogs and chainrings, increasing the number of parts needed for a lasting repair.',
      severity: 'warning',
      chainLabel: 'Drivetrain wear spreads',
    },
    {
      stageLabel: 'AFTER INSTALLING ONLY A NEW CHAIN',
      title: 'Worn teeth may reject the replacement',
      description:
        'A new chain can continue skipping on sprockets that developed their shape around a heavily worn old chain.',
      severity: 'warning',
      chainLabel: 'New chain, old wear',
    },
    {
      stageLabel: 'IF THE CHAIN RELEASES OR BREAKS',
      title: 'A fall or sudden wheel interference is possible',
      description:
        'The rider may lose balance when drive disappears. A released chain can also become caught around drivetrain or wheel components and stop the bike abruptly.',
      severity: 'danger',
      chainLabel: 'Loss of control',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One rough shift made under heavy pedal pressure, with no skipping after engagement',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Shift again with lighter pedal pressure. Investigate if the chain jumps after it has settled into the gear.',
    },
    {
      situation: 'Recurring skipping whenever you climb or accelerate',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop hard efforts, measure chain wear, and inspect the cassette, chainrings, and adjustment.',
    },
    {
      situation: 'Skipping confined to one or two cassette cogs',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo: 'Avoid loading those gears and arrange inspection for localized sprocket and chain wear.',
    },
    {
      situation: 'Skipping across most or all rear gears',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check chain condition, indexing, cable movement, hanger alignment, and drivetrain setup before normal riding.',
    },
    {
      situation: 'Skipping that began immediately after chain replacement',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Verify compatibility and installation, then inspect the old cassette or freewheel for wear.',
    },
    {
      situation: 'A stiff link with no cracking, bending, or displaced pin',
      ignoreAnswer: 'Only for diagnosis',
      severity: 'caution',
      whatToDo:
        'Keep the bike stationary, locate the tight link, and correct or replace it before riding under load.',
    },
    {
      situation: 'A cracked plate, protruding pin, missing roller, or unsecured connector',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not ride. Replace the damaged chain or connector using the specified compatible part.',
    },
    {
      situation: 'The chain drops, jams, or moves toward the spokes',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Dismount, walk the bike, and have the drivetrain and wheel area inspected before riding again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop testing it with hard pedal strokes',
      body:
        'Do not stand, sprint, or climb to prove that the skip is still present. If a careful seated test produces another jump, end the test and inspect the bike while stationary.',
    },
    {
      title: 'Inspect every visible part of the chain',
      body:
        'Look for bent or cracked plates, damaged rollers, corrosion, displaced pins, and a master link that is not fully seated. Backpedal slowly with the bike secure and keep fingers, hair, and clothing clear of moving parts.',
    },
    {
      title: 'Clean and lubricate it correctly',
      body:
        'Remove dirt with a chain-safe cleaner, let the drivetrain dry, and apply bicycle chain lubricant as directed. Do not use acidic or alkaline rust-removal solvents or soak the chain in cleaner.',
      destinationProblemSlug: 'dry-bike-chain',
    },
    {
      title: 'Measure chain wear with a compatible checker',
      body:
        'Use the tool exactly as directed and compare the reading with the replacement limit for your chain and drivetrain. Do not assume one threshold applies to every speed or component system.',
    },
    {
      title: 'Check indexing and worn mating parts',
      body:
        'If the chain is sound, inspect derailleur indexing, cable movement, hanger alignment, chain length, cassette teeth, and chainrings. A shop can test the drivetrain under controlled load and identify which parts require replacement.',
      destinationProblemSlug: 'bike-gears-wont-shift-cleanly',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A chain plate is cracked, bent, or separating',
      description:
        'Structural chain damage can progress to separation under load. Replace the chain rather than trying to straighten or patch it.',
      severity: 'danger',
    },
    {
      title: 'A pin or master link is displaced',
      description:
        'A connecting point that is not fully seated may detach. Use only a connector specified for the chain and follow its reuse rules.',
      severity: 'danger',
    },
    {
      title: 'The chain drops toward the wheel or spokes',
      description: 'Stop before the chain can catch the wheel or pull the derailleur into the spokes.',
      severity: 'danger',
    },
    {
      title: 'A skip throws your foot or makes you lose balance',
      description: 'The drivetrain is already affecting control. Do not repeat the maneuver to test it again.',
      severity: 'danger',
    },
    {
      title: 'The derailleur or hanger points toward the spokes',
      description:
        'A bent or loose part can misguide the chain and may contact the wheel. Walk the bike and arrange inspection.',
      severity: 'danger',
    },
    {
      title: 'A new chain skips on the old cassette',
      description:
        'Confirm installation first. If it is correct, the sprocket teeth may be too worn to mesh with the replacement chain.',
      severity: 'warning',
    },
    {
      title: 'Skipping continues under gentle seated pedaling',
      description:
        'The problem is no longer limited to aggressive riding or poor shifting technique and needs diagnosis before normal use.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why does my bike chain skip mainly when I stand on the pedals?',
      answer:
        'Standing usually puts more force through the chain. Worn teeth, an elongated chain, or another engagement problem may stay hidden under light pedaling and jump when that force rises.',
    },
    {
      question: 'Why does the chain skip in only one gear?',
      answer:
        'A frequently used cassette cog may be worn more than the others. Poor indexing can also place the chain slightly off-center, so check adjustment as well as chain and sprocket wear.',
    },
    {
      question: 'Why did a new chain make the skipping worse?',
      answer:
        'The old chain may have worn together with the cassette. The new chain has its original pitch and may ride up on teeth shaped by the worn chain. First confirm that the new chain is compatible and installed correctly.',
    },
    {
      question: 'Can chain lubricant stop skipping?',
      answer:
        'It can help if dryness or contamination is disrupting movement, but lubricant cannot restore worn teeth, repair a damaged link, correct derailleur alignment, or fix an incompatible chain.',
    },
    {
      question: 'How do I know whether my bike chain is worn?',
      answer:
        'Use a chain-wear indicator that is compatible with the chain. Follow the tool instructions and your drivetrain manufacturer’s replacement limit rather than relying only on appearance.',
    },
    {
      question: 'How can I find a stiff chain link?',
      answer:
        'Secure the bike and backpedal slowly while watching the chain pass through the derailleur pulleys. A tight link often remains kinked and makes the derailleur cage move as it passes.',
    },
    {
      question: 'Do I always need a new cassette when replacing a chain?',
      answer:
        'No. A chain replaced within its wear limit may work with the existing cassette. If a correctly installed new chain skips on particular old cogs, those cogs may already be too worn.',
    },
    {
      question: 'Can worn chainrings cause skipping too?',
      answer:
        'Yes. If the jump occurs at the front or only while using a particular chainring, inspect that ring for wear, damage, contamination, and poor chain engagement.',
    },
    {
      question: 'Could derailleur adjustment be the whole problem?',
      answer:
        'Yes, especially when the chain hunts or skips across much of the cassette. Adjustment will not fix a damaged chain or teeth that are physically worn, so inspect those first.',
    },
    {
      question: 'Can I carefully ride a skipping bike to a shop?',
      answer:
        'Only if there is no visible damage, the chain stays engaged during a gentle seated test, and the route does not require hard acceleration or climbing. Walk it if the chain drops, the pedals lurch sharply, or you cannot trust the drive.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'An Overview of the Bicycle Study',
      url: 'https://www.cpsc.gov/s3fs-public/pdfs/344.pdf',
      sourceType: 'government',
      notes:
        'CPSC incident investigations include loss of control and a fall associated with reported chain skipping. Other chain-release and break incidents involved falls, and some released chains jammed the rear wheel.',
    },
    {
      publisher: 'Shimano',
      title: "Dealer's Manual — Chain: CN-M9100, CN-M8100, CN-M7100, CN-M6100 and SM-CN910-12",
      url: 'https://si.shimano.com/en/pdfs/dm/MACN001/DM-MACN001-04-ENG.pdf',
      sourceType: 'manufacturer',
      notes:
        'This model-specific manual tells users to check for chain damage, skipping, and unintended shifting and warns that chain breakage or QUICK-LINK detachment may cause a fall.',
    },
    {
      publisher: 'SRAM',
      title: 'Eagle Transmission User Manual',
      url: 'https://docs.sram.com/en-US/publications/5jblJ4SRpeHwjcuWG1vPy4/UM%20-%20Transmission?installation-or-maintenance-=maintenance',
      sourceType: 'manufacturer',
      notes:
        'Model-specific troubleshooting lists contamination, chain gap, chain length, cage or damper condition, and worn or damaged chains and cassettes among causes of skipping under load.',
    },
    {
      publisher: 'Park Tool',
      title: 'When to Replace a Worn Chain',
      url: 'https://www.parktool.com/en-us/blog/repair-help/when-to-replace-a-chain-on-a-bicycle',
      sourceType: 'industry',
      notes:
        'Explains that roller and rivet wear causes poor meshing and premature cog wear, identifies slipping under load as a wear symptom, and recommends measurement with a chain-wear indicator.',
    },
    {
      publisher: 'Park Tool',
      title: 'Chain Replacement: Derailleur Bikes',
      url: 'https://www.parktool.com/en-int/blog/repair-help/chain-replacement-derailleur-bikes',
      sourceType: 'industry',
      notes:
        'Covers chain sizing, routing, connectors, and tight-link checks. It states that skipping after a new chain installation can indicate worn cassette or freewheel cogs.',
    },
    {
      publisher: 'Park Tool',
      title: 'Rear Derailleur — Advanced Troubleshooting',
      url: 'https://www.parktool.com/en-us/blog/repair-help/rear-derailleur-advanced-troubleshooting',
      sourceType: 'industry',
      notes:
        'Its troubleshooting table associates skipping across all gear combinations with indexing and skipping under pressure in one or two gears with possible chain and sprocket wear.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Compatible chain-wear indicator',
      description:
        'Provides a repeatable measurement of chain elongation. Choose a design approved for the chain type and interpret it using the drivetrain maker’s limit.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bicycle chain cleaner and lubricant',
      description:
        'Useful for ruling out contamination and dry links without using chemicals that can damage chain components.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bike repair stand',
      description:
        'Holds the bicycle securely while you backpedal, watch the chain pass through the pulleys, and check shifting without riding.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bicycle drivetrain inspection',
      description:
        'A shop can assess chain wear, cassette and chainring engagement, derailleur indexing, hanger alignment, chain length, and connector installation.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'bike-gears-wont-shift-cleanly',
      anchorText: 'Can I ignore bike gears that will not shift cleanly?',
      relationshipType: 'sibling',
    },
    {
      slug: 'dry-bike-chain',
      anchorText: 'Can I ignore a bike chain that looks and sounds dry?',
      relationshipType: 'cause',
    },
    {
      slug: 'clicking-noise-when-pedaling',
      anchorText: 'Can I ignore a clicking noise when I pedal?',
      relationshipType: 'related',
    },
    {
      slug: 'rusty-bike-chain',
      anchorText: 'Can I ignore rust forming on my bike chain?',
      relationshipType: 'cause',
    },
  ],
};
