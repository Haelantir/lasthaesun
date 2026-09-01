import type { ProblemSeed } from '../types';

export const garbageDisposalHumming: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'jams-and-clogs',
  slug: 'garbage-disposal-humming',
  canonicalPath: '/appliances/garbage-disposals/jams-and-clogs/garbage-disposal-humming/',
  name: "Garbage Disposal Hums but Won't Spin",
  eyebrow: 'Appliances · Garbage Disposals · Jams & Clogs',

  h1: "Can I Ignore a Garbage Disposal That Hums but Won't Spin?",
  seoTitle: "Humming Garbage Disposal: Why It Won't Spin and What to Do",
  metaDescription:
    'A humming garbage disposal is usually stalled by a jam. Stop retrying it, disconnect power before clearing it, and know when to call for service.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'No—leave it off until it spins freely',

  shortAnswer:
    'Probably not. A disposal that hums without grinding is usually receiving power while its grinding mechanism is jammed or stalled. Switch it off, do not keep testing it, and disconnect power before using tools to clear it.',

  whyItMattersHeading: 'Why a Humming Disposal Needs Attention',
  whyItMatters: [
    "The hum means the motor is trying to run but the grinding mechanism is not turning. Repeated attempts can trip the disposal's overload protector and may damage the motor instead of clearing the obstruction.",
    'Many jams can be released without replacing the disposal, but the method depends on the model. Some use a wrench socket underneath; others are freed from above with a manufacturer-approved tool. Never put your hand into the disposal, and arrange service if it still hums after the mechanism moves freely.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It and Cut Power If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current U.S. Fire Administration guidance and official Moen, InSinkErator, Whirlpool and Joneca disposer instructions.',
  disclaimer:
    'General appliance triage only. Follow the instructions for your disposal model, and use an electrician or appliance service provider for hardwired, leaking or electrical faults.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'food-waste-jam',
      label: 'The hum started after hard or fibrous food went in',
      shortDescription:
        'The disposal stopped grinding after food waste was added, with no smoke, leak or electrical damage.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Treat it as a mechanical jam',
      resultBody:
        'Food or another obstruction may be preventing the turntable from moving while the motor remains energized. More switch attempts are unlikely to release it safely.',
      recommendedAction:
        "Leave it off, disconnect power and follow the model's approved unjamming procedure. Remove loosened material with long-handled tongs or pliers.",
    },
    {
      slug: 'metal-object-visible',
      label: 'A utensil, bottle cap or other metal object is visible',
      shortDescription: 'A foreign object is lodged in or near the grinding components.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not restart it with the object inside',
      resultBody:
        'Metal can keep the mechanism locked and may be damaged or expelled if the disposal suddenly starts.',
      recommendedAction:
        'Disconnect power completely. Use a flashlight and long-handled tongs or pliers to remove the object; never reach into the disposal.',
    },
    {
      slug: 'glass-or-ceramic-inside',
      label: 'Glass or ceramic has fallen into the disposal',
      shortDescription:
        'Broken or intact glass or ceramic is visible or suspected inside the grinding chamber.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Keep the disposal off',
      resultBody:
        'Sharp fragments create a hand-injury risk and should not be ground or flushed through the unit.',
      recommendedAction:
        'Isolate power and avoid reaching inside. Remove accessible pieces with suitable long-handled tools or have the disposal removed and cleared by a service provider.',
    },
    {
      slug: 'turns-freely-but-hums',
      label: 'The mechanism turns freely but the motor still only hums',
      shortDescription:
        'The model-approved tool can move the grinding mechanism, but restoring power produces another hum without rotation.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The problem is no longer a simple jam',
      resultBody:
        'If the mechanism is free but the motor cannot start it, an internal motor or electrical problem is more likely. More test cycles can add heat without fixing the fault.',
      recommendedAction:
        'Disconnect power again and arrange manufacturer support, appliance service or replacement evaluation.',
    },
    {
      slug: 'overload-or-breaker-trips',
      label: 'The reset pops out or the circuit trips again',
      shortDescription:
        "The disposal's overload protector, a GFCI or the household breaker will not remain set.",
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop resetting it',
      resultBody:
        'A repeated trip means the overload or fault is still present. Resetting protection over and over does not remove the cause.',
      recommendedAction:
        'Leave the disposal disconnected. Have the jam, motor and electrical supply checked before restoring normal use.',
    },
    {
      slug: 'smoke-or-burning-smell',
      label: 'There is smoke, a burning smell or visible melting',
      shortDescription: 'The hum is accompanied by smoke, a sharp electrical odor, melting or scorching.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Cut power and do not test it again',
      resultBody:
        'These signs point beyond an ordinary food jam and may indicate overheating or electrical damage.',
      recommendedAction:
        'Switch off the circuit if it is safe to do so. Keep the disposal out of service and use an electrician or appliance service provider as appropriate.',
    },
    {
      slug: 'leak-near-disposal',
      label: 'Water is leaking from the disposal or its electrical area',
      shortDescription:
        'Water appears around the housing, power cord, wiring cover, outlet or under-sink connections.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using both the disposal and the affected connection',
      resultBody:
        'Water near energized equipment adds an electrical hazard. A leak from the disposal body can also mean the unit needs replacement rather than a simple jam release.',
      recommendedAction:
        'Disconnect power without touching wet electrical parts. Stop running water through the unit and arrange repair or replacement.',
    },
    {
      slug: 'jam-cleared-and-running',
      label: 'The jam was cleared and the disposal now runs normally',
      shortDescription:
        'The mechanism moves freely, the obstruction is gone and the disposal starts without humming, leaking or tripping.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Normal use can resume',
      resultBody:
        'A removable obstruction may have been the entire problem. The old humming episode does not require further action if the unit now starts, grinds and drains normally.',
      recommendedAction:
        'Use it with cold running water and feed waste gradually. Stop again if the humming, tripping, leaking or abnormal noise returns.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The motor is stalled',
      description:
        'Power reaches the motor, but a jam or mechanical restriction prevents the grinding mechanism from rotating.',
      severity: 'caution',
      chainLabel: 'Motor hums',
    },
    {
      stageLabel: 'IF YOU SWITCH IT OFF PROMPTLY',
      title: 'A removable obstruction may be all that happened',
      description:
        'Manufacturer procedures commonly begin by disconnecting power, freeing the mechanism and removing the foreign material with tools.',
      severity: 'info',
      chainLabel: 'Jam is cleared',
    },
    {
      stageLabel: 'IF YOU KEEP RETRYING IT',
      title: 'The overload protector may trip',
      description:
        "Continued attempts against a locked mechanism can cause the disposal's internal protection to shut the motor off.",
      severity: 'warning',
      chainLabel: 'Overload trips',
    },
    {
      stageLabel: 'IF IT STILL HUMS AFTER THE MECHANISM IS FREE',
      title: 'Service or replacement may be needed',
      description:
        'A disposal that can be moved manually but still cannot start may have an internal problem that an ordinary jam procedure will not correct.',
      severity: 'warning',
      chainLabel: 'Fault persists',
    },
    {
      stageLabel: 'IF SMOKE, MELTING OR ELECTRICAL DAMAGE APPEARS',
      title: 'The appliance is unsafe to keep testing',
      description:
        'Disconnect power if it is safe and leave the unit out of service until the electrical or appliance fault is addressed.',
      severity: 'danger',
      chainLabel: 'Full shutdown',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'It hummed once and you immediately switched it off',
      ignoreAnswer: 'Only while it stays off',
      severity: 'caution',
      whatToDo:
        'Leave it off until you can disconnect power and inspect it using the procedure for your model.',
    },
    {
      situation: 'A visible utensil or foreign object is lodged inside',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Isolate power and remove the object with long-handled tools. Do not restart the disposal with the object present.',
    },
    {
      situation: 'The jam was cleared and the disposal now runs smoothly',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Resume normal use if there is no unusual noise, leak, smell or repeated trip.',
    },
    {
      situation: 'The turntable moves freely but the disposal still hums',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop testing it and arrange service or replacement guidance.',
    },
    {
      situation: 'The reset button or household breaker trips repeatedly',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Leave the power off. The continuing overload or electrical fault needs diagnosis.',
    },
    {
      situation: 'You need to use the sink while waiting for repair',
      ignoreAnswer: 'Briefly, if it drains freely',
      severity: 'caution',
      whatToDo:
        'Keep the disposal off and keep food waste out. Stop using the sink if water backs up or leaks around the disposal.',
    },
    {
      situation: 'Smoke, a burning odor, sparking or melting appears',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Disconnect power if safe and do not touch wet, hot or damaged electrical parts.',
    },
    {
      situation: 'Water is leaking around the disposal or its power connection',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop the water and power as safely as possible and arrange appropriate plumbing, electrical or appliance service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Switch it off and disconnect the power supply',
      body:
        "Turn the disposal control off. Before putting any tool through the opening, unplug the unit or switch off its circuit as the owner's manual directs. Prevent anyone else from restoring power while you work.",
    },
    {
      title: 'Inspect it without reaching inside',
      body:
        'Shine a flashlight through the sink opening. Remove visible food or foreign objects only with long-handled tongs or pliers.',
      destinationProblemSlug: 'something-metal-in-garbage-disposal',
    },
    {
      title: 'Use the unjamming method specified for your model',
      body:
        'Some disposals accept a wrench through a socket on the bottom. Others direct you to move the turntable from above with a wooden or specialized tool. Do not force a tool into a feature your model does not have.',
    },
    {
      title: 'Reset and test only after the mechanism is free',
      body:
        'Remove every tool from the sink opening, reinstall any required splash guard, press the overload reset if your manual calls for it, restore power and test with cold water. Switch it off immediately if it only hums again.',
    },
    {
      title: 'Stop DIY troubleshooting if the simple procedure fails',
      body:
        'Arrange service if the mechanism will not release, turns freely but the motor still hums, or protection trips again. A disposal that becomes silent after humming may have tripped its overload.',
      destinationProblemSlug: 'garbage-disposal-wont-turn-on',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Smoke, melting or a burning electrical smell appears',
      description:
        'Do not run another test cycle. Disconnect power if it can be done without touching damaged or wet equipment.',
      severity: 'danger',
    },
    {
      title: 'The plug, cord, outlet or wiring area is hot or discolored',
      description:
        'Heat or visible damage at the electrical connection needs electrical evaluation rather than another reset.',
      severity: 'danger',
    },
    {
      title: 'Water is reaching an outlet, cord or wiring cover',
      description:
        'Avoid touching the wet area while it may be energized. Shut off the appropriate circuit if safe.',
      severity: 'danger',
    },
    {
      title: 'The overload, GFCI or circuit breaker trips again',
      description:
        'Repeated operation of a protective device means the jam, overload or electrical fault remains.',
      severity: 'warning',
    },
    {
      title: 'Glass, sharp metal or ceramic is inside',
      description:
        'Keep hands out and do not try to grind the material. Use suitable long-handled tools or arrange removal.',
      severity: 'warning',
    },
    {
      title: 'The mechanism is free but the motor still cannot start',
      description: 'Further humming is unlikely to correct the problem and can add heat to a stalled motor.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does humming mean the garbage disposal is getting power?',
      answer:
        'Usually, yes. The hum commonly means the motor is energized but cannot rotate the grinding mechanism because it is jammed or stalled.',
    },
    {
      question: 'Does a humming disposal mean the motor is ruined?',
      answer:
        'Not necessarily. A removable food or foreign-object jam is common. Motor or internal failure becomes more likely if the mechanism turns freely but the disposal still only hums.',
    },
    {
      question: 'Should I press the reset button before clearing the jam?',
      answer:
        'Do not use the reset as a substitute for clearing the obstruction. Disconnect power, release the jam as the manual directs, remove tools and debris, and then reset the overload if required.',
    },
    {
      question: 'Can I put my hand inside after unplugging the disposal?',
      answer:
        'No. Manufacturer safety instructions say not to put fingers or hands into a waste disposal. Use a flashlight, long-handled tongs or pliers.',
    },
    {
      question: 'Can I use an Allen wrench to free it?',
      answer:
        'Only if your model has a bottom wrench socket and its instructions permit that method. Use the correct wrench for the unit rather than forcing an arbitrary tool into the base.',
    },
    {
      question: 'What if my garbage disposal has no wrench hole underneath?',
      answer:
        'Check the model manual. Some designs are freed from above with a wooden or specialized tool instead of a bottom wrench socket.',
    },
    {
      question: 'Why does the reset button keep popping out?',
      answer:
        'The motor may still be overloaded by a jam, or the disposal may have another internal problem. Stop repeated resets and leave it disconnected if the protection trips again.',
    },
    {
      question: 'Can drain cleaner fix a humming disposal?',
      answer:
        'No. A mechanical jam needs mechanical removal, and disposer manuals warn against putting caustic drain cleaners into the unit. Follow the disposal and cleaner labels if a chemical is already present.',
    },
    {
      question: 'Can I still use the sink or dishwasher?',
      answer:
        'Limited sink use may be possible if water drains freely and there is no leak, but keep solids out. Do not run the dishwasher if the shared drain is backing up or the sink is not draining normally.',
    },
    {
      question: 'When should I replace the disposal instead of unjamming it?',
      answer:
        'Replacement becomes more likely when the mechanism is free but the motor cannot start, jams keep returning, the body leaks, or the manufacturer determines that an internal repair is not practical.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Moen',
      title: 'How to Unjam a Garbage Disposal',
      url: 'https://solutions.moen.com/Article_Library/How_to_Unjam_a_Garbage_Disposal',
      sourceType: 'manufacturer',
      notes:
        'Explains that humming commonly indicates a jam, warns that repeated attempts can trip the internal breaker, and directs users to disconnect power, keep hands out, use tools and seek support if unjamming fails.',
    },
    {
      publisher: 'InSinkErator',
      title: 'Fixing a Jammed Garbage Disposal',
      url: 'https://support.insinkerator.com/app/answers/detail/a_id/515',
      sourceType: 'manufacturer',
      notes:
        'Provides model-dependent jam-release methods, overload-reset guidance and instructions to keep hands out and remove objects with tongs or pliers.',
    },
    {
      publisher: 'Whirlpool',
      title: 'Clearing a Jammed Disposer',
      url: 'https://producthelp.whirlpool.com/Other_Products/Disposers/Product_Info/Disposer_Product_Assistance/Clearing_a_Jammed_Disposer',
      sourceType: 'manufacturer',
      notes:
        'Identifies humming without rotation as a mechanical jam, requires power disconnection, describes approved tools and advises stopping for smoke, burning odor, leaks or unresolved operation.',
    },
    {
      publisher: 'Joneca Corporation',
      title: 'Food Waste Disposer Instruction Manual',
      url: 'https://www.anaheimmarketing.com/wp-content/uploads/IM_USA_111.pdf',
      sourceType: 'manufacturer',
      notes:
        'Says not to put hands into the disposer, describes wooden-tool and long-handled-tong methods, warns against glass, metal and caustic cleaners, and notes that a freely rotating unit may need service if internal problems remain.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Appliance and Electrical Fire Safety',
      url: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/appliance-and-electrical/',
      sourceType: 'government',
      notes:
        'Provides general home appliance and electrical fire-safety guidance, including replacing appliances with cracked, damaged or loose cords and avoiding unsafe cord repairs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Garbage disposal owner's manual",
      description:
        'Identifies the correct power-disconnection, jam-release and reset procedure for the exact model.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Model-compatible disposal wrench',
      description:
        'Fits disposals designed with an underside wrench socket and lets the grinding mechanism be moved without reaching through the sink opening.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Flashlight and long-handled tongs',
      description:
        'Allow inspection and removal of visible objects while keeping hands outside the grinding chamber.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance or electrical service',
      description:
        'Appropriate when the mechanism is free but the motor still hums, protection repeatedly trips, wiring is damaged or the disposal cannot be safely isolated.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'garbage-disposal-wont-turn-on',
      anchorText: "Why won't my garbage disposal turn on at all?",
      relationshipType: 'follow_up',
    },
    {
      slug: 'something-metal-in-garbage-disposal',
      anchorText: 'What if something metal fell into the disposal?',
      relationshipType: 'cause',
    },
    {
      slug: 'garbage-disposal-draining-slowly',
      anchorText: 'Why is my garbage disposal draining slowly?',
      relationshipType: 'sibling',
    },
    {
      slug: 'breaker-keeps-tripping',
      anchorText: 'Why does the breaker keep tripping when I use it?',
      relationshipType: 'escalation',
    },
    {
      slug: 'dishwasher-backing-up-into-sink',
      anchorText: 'Why is my dishwasher backing up into the sink?',
      relationshipType: 'follow_up',
    },
  ],
};
