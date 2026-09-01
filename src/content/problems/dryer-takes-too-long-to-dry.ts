import type { ProblemSeed } from '../types';

export const dryerTakesTooLongToDry: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'venting-and-heat',
  slug: 'dryer-takes-too-long-to-dry',
  canonicalPath: '/appliances/dryers/venting-and-heat/dryer-takes-too-long-to-dry/',
  name: 'Dryer Takes Too Long to Dry',
  eyebrow: 'Appliances · Dryers · Venting & Heat',

  h1: 'Can I Ignore a Dryer That Takes Too Long to Dry?',
  seoTitle: 'Dryer Taking Too Long to Dry: Vent Checks and Warning Signs',
  metaDescription:
    'Long dry times can come from load settings or a restricted vent. Learn when to stop using the dryer, check airflow, clean the vent, or call for service.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the dryer?',
  canIUseItLabel: 'Only after checking the filter and airflow',

  shortAnswer:
    'Probably not. One slow bulky load or an energy-saving cycle may be normal, but repeated long dry times can signal restricted airflow. Clean the lint filter, check the accessible vent and outdoor hood, and stop using the dryer if airflow is weak, the machine gets unusually hot, or you smell burning.',

  whyItMattersHeading: 'Why Slow Drying Can Be a Safety Clue',
  whyItMatters: [
    'A vented dryer must move heated, moisture-laden air outdoors. When lint, a crushed transition duct, debris, or a stuck exterior flap restricts that path, clothes can stay warm and damp while heat builds inside the dryer and duct. CPSC specifically identifies longer-than-normal drying as a possible sign that the lint screen or exhaust duct is blocked.',
    'Not every long cycle means a fire hazard. Large or mixed loads, air-only or low-heat settings, a weak washer spin, cold conditions, and some ventless heat-pump designs can change drying time. The useful dividing line is whether the slowdown is expected and isolated, or keeps happening with ordinary loads and poor airflow, excess heat, an odor, smoke, or flame.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Dryer If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current CPSC, USFA, ENERGY STAR, GE Appliances, and Whirlpool guidance on slow drying, vent restriction, overheating, fire, and carbon monoxide.',
  disclaimer:
    'General appliance triage only. Follow the installation and care instructions for your dryer model. Do not operate a gas dryer with its exhaust disconnected, and treat smoke, flame, burning odor, or a carbon monoxide alarm as an emergency.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-bulky-or-overloaded-load',
      label: 'A bulky or overloaded load was slow',
      shortDescription:
        'A comforter, towels, mixed fabrics, or an overfilled drum took longer, but an ordinary load dries normally and outdoor airflow is strong.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Adjust the load and recheck',
      resultBody:
        'Large, heavy, mixed, overloaded, or very small loads may tumble poorly or hold more moisture. If the dryer has normal airflow and returns to normal with an appropriate load, this points more to load conditions than a vent fault.',
      recommendedAction:
        'Split heavy loads, dry similar fabrics together, and make sure items can tumble freely. Check again with an ordinary load rather than repeatedly extending the same overloaded cycle.',
    },
    {
      slug: 'low-heat-or-air-only-setting',
      label: 'An air-only, low-heat, or energy-saving option is selected',
      shortDescription:
        'The selected cycle intentionally uses little heat or prioritizes lower energy use, and the dryer otherwise works normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The longer cycle may be intentional',
      resultBody:
        "Air-only settings add no heat, while low-heat and energy-saving options may trade speed for fabric care or reduced energy use. A longer cycle is expected if it matches the selected option and the owner's manual.",
      recommendedAction:
        'Choose the cycle and dryness level intended for the fabric. If a normal heated cycle is also unusually slow, check the filter and exhaust airflow.',
    },
    {
      slug: 'ventless-or-heat-pump-model',
      label: 'The dryer is a ventless or heat-pump model',
      shortDescription:
        'The model uses a closed-loop drying system and its performance is consistent with the manual, with no warning, odor, or unusual heat.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Compare it with its own design',
      resultBody:
        "Heat-pump dryers reuse heated air, operate at relatively low temperatures, and do not use the outdoor exhaust path of a conventional vented dryer. Their behavior should be judged against the model's instructions rather than a previous vented dryer.",
      recommendedAction:
        "Clean the model's filters and heat exchanger as directed, empty or check its water system if applicable, and use the recommended load and cycle.",
    },
    {
      slug: 'washer-left-laundry-too-wet',
      label: 'The washer left the laundry unusually wet',
      shortDescription:
        'Clothing enters the dryer dripping or much wetter than usual because the washer did not complete an effective spin.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Re-spin before blaming the dryer',
      resultBody:
        'A dryer must remove whatever water remains after washing. An unusually wet load can make a working dryer appear slow and waste energy without proving that its vent is restricted.',
      recommendedAction:
        'Run an appropriate washer spin, check that the washer drained, and investigate the washer if loads repeatedly come out unusually wet.',
    },
    {
      slug: 'weak-or-no-outdoor-airflow',
      label: 'Airflow at the outdoor vent is weak or absent',
      shortDescription:
        'The exterior hood barely opens, no exhaust is felt, or lint and debris are blocking the outlet while the dryer runs.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop normal use and clear the exhaust path',
      resultBody:
        'CPSC identifies weak or missing exhaust airflow as a sign that the vent or duct may be blocked. A restriction keeps heat and moisture from leaving normally and can allow excessive heat buildup.',
      recommendedAction:
        'Stop using the dryer until the vent path is inspected and cleared. Use a vent-cleaning service if the duct is concealed, difficult to reach, or cannot be cleared completely.',
    },
    {
      slug: 'crushed-kinked-or-wrong-duct',
      label: 'The duct is crushed, kinked, plastic, or foil accordion-style',
      shortDescription:
        'The transition duct behind the dryer is flattened, sharply bent, sagging, or made from material that easily traps lint.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Correct the duct before using the dryer normally',
      resultBody:
        'Crushed and kinked ducts reduce airflow. CPSC advises replacing plastic or foil accordion-style ducting with rigid or corrugated semi-rigid metal duct because the flimsier material traps lint more easily and is more susceptible to crushing.',
      recommendedAction:
        "Leave the dryer off until the transition duct is corrected with material permitted by the model's installation instructions. Do not alter a gas connection to gain access.",
    },
    {
      slug: 'dryer-or-room-unusually-hot',
      label: 'The dryer or laundry area becomes unusually hot or humid',
      shortDescription:
        'The cabinet feels much hotter than normal, the room fills with heat or moisture, or loads come out extremely hot but still damp.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Heat may not be escaping properly',
      resultBody:
        'Manufacturer guidance links restricted venting with excess heat and humidity building inside the drum, a hot cabinet, and longer drying times. This is more concerning than slow drying by itself.',
      recommendedAction:
        'Turn the dryer off, let it cool, and check the filter, accessible duct, and exterior hood. Do not resume normal use until airflow is restored or the dryer is evaluated.',
    },
    {
      slug: 'burning-smell',
      label: 'Slow drying comes with a burning smell',
      shortDescription: 'There is a hot-lint, rubber, plastic, or electrical odor during or after the cycle.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Shut the dryer down',
      resultBody:
        'A burning odor can indicate overheating, lint near a heat source, a slipping component, or electrical damage. Continuing to run the dryer to identify the smell can worsen the problem.',
      recommendedAction:
        'Stop the cycle and disconnect power if that can be done safely. Do not use the dryer again until the source has been found and corrected.',
    },
    {
      slug: 'smoke-flame-or-sparks',
      label: 'There is smoke, flame, or sparking',
      shortDescription:
        'Smoke exits the dryer or vent, flames are visible, or electrical sparking occurs at the appliance, cord, plug, or outlet.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a fire emergency',
      resultBody:
        'This is no longer a drying-performance problem. Lint and other combustible material can ignite inside the dryer or exhaust system, and an electrical fault can also start a fire.',
      recommendedAction:
        'Get everyone to safety and call emergency services. Do not open or move a burning dryer, and do not restore power or gas afterward until the appliance and affected connections are declared safe.',
    },
    {
      slug: 'carbon-monoxide-alarm',
      label: 'A carbon monoxide alarm sounds near a gas dryer',
      shortDescription:
        'A CO alarm activates, or someone develops headache, dizziness, nausea, weakness, confusion, or unusual shortness of breath.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Get outside immediately',
      resultBody:
        'Carbon monoxide is colorless and odorless. An alarming CO alarm or possible exposure symptoms are a separate emergency and should never be treated as an ordinary dryer-vent problem.',
      recommendedAction:
        'Move everyone outside to fresh air and call emergency services. Do not search for the source or use the gas dryer again until responders permit reentry and the fuel-burning equipment has been checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Drying performance falls',
      description:
        'A poorly chosen cycle or load can extend drying, but a restricted exhaust also leaves clothing warm and damp because moisture is not leaving the drum efficiently.',
      severity: 'info',
      chainLabel: 'Slow drying',
    },
    {
      stageLabel: 'IF THE EXHAUST IS RESTRICTED',
      title: 'Heat and moisture build up',
      description:
        'Lint, a crushed duct, or a blocked exterior hood can reduce airflow and raise heat and humidity inside the dryer and exhaust system.',
      severity: 'caution',
      chainLabel: 'Restricted exhaust',
    },
    {
      stageLabel: 'IF LINT CONTINUES TO ACCUMULATE',
      title: 'The blockage and fire load increase',
      description:
        'Lint is combustible. CPSC warns that buildup can block airflow, cause excessive heat, and result in a fire in some dryers.',
      severity: 'warning',
      chainLabel: 'Heat and lint buildup',
    },
    {
      stageLabel: 'IF IGNITION OCCURS',
      title: 'A dryer or duct fire can start',
      description:
        'Fire may begin inside the appliance or exhaust path, producing smoke and threatening nearby clothing, stored items, walls, and framing.',
      severity: 'danger',
      chainLabel: 'Ignition',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Fire spreads beyond the laundry area',
      description:
        'A dryer fire can cause injuries and major property damage. Smoke, flame, or sparking requires emergency action rather than more troubleshooting.',
      severity: 'danger',
      chainLabel: 'Spreading fire',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One slow load was bulky, heavy, mixed, or overloaded',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Adjust the load and cycle, then confirm that an ordinary load dries normally and that outdoor exhaust airflow is strong.',
    },
    {
      situation: 'Air-only, low-heat, or energy-saving mode explains the longer cycle',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Use the setting intended for the fabric. Check the manual if you are unsure whether the selected option intentionally extends drying.',
    },
    {
      situation: 'A ventless or heat-pump dryer behaves as its manual describes',
      ignoreAnswer: 'Yes, if it matches the manual',
      severity: 'info',
      whatToDo:
        'Maintain the filters, heat exchanger, drain, or water tank as the manufacturer directs and watch for a clear change from normal performance.',
    },
    {
      situation: 'The washer leaves clothing dripping or unusually wet',
      ignoreAnswer: 'Only until the washer issue is checked',
      severity: 'caution',
      whatToDo:
        'Re-spin the load and verify that the washer drains correctly. Investigate the washer if the problem repeats.',
    },
    {
      situation: 'Ordinary loads repeatedly take longer despite a clean lint filter',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Check exterior airflow and the accessible duct. Arrange vent cleaning or appliance service if the cause is not obvious.',
    },
    {
      situation: 'The outdoor hood barely opens or little exhaust air comes out',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop normal use until the exhaust path is cleared and the hood opens freely while the dryer operates.',
    },
    {
      situation: 'The dryer is unusually hot or produces a burning odor',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Shut it down, let it cool, and do not use it again until the airflow and appliance have been checked.',
    },
    {
      situation: 'There is smoke, flame, sparking, or a carbon monoxide alarm',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Leave the area and call emergency services. Do not keep troubleshooting or return to operate the dryer until it is safe.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Clean and inspect the lint filter',
      body:
        "Remove lint before the next load. If the screen looks clean but water beads on it or residue is visible, wash it only as the owner's manual directs and let it dry completely before reinstalling it. Never run the dryer without the filter.",
    },
    {
      title: 'Rule out the load, cycle, and washer spin',
      body:
        'Dry similar fabrics together, reduce an overloaded load, and choose a heated cycle appropriate for the material. If clothing comes from the washer unusually wet, re-spin it and check the washer before extending dryer cycles.',
    },
    {
      title: 'Check the accessible transition duct',
      body:
        'Turn the dryer off before inspecting behind it. Look for crushing, sharp kinks, sagging, disconnection, lint buildup, or plastic and foil accordion-style material. Do not move a gas dryer or alter its fuel connection just to reach the duct.',
    },
    {
      title: 'Verify that exhaust reaches outdoors',
      body:
        'If there is no burning odor or unusual heat, run the dryer and observe the exterior hood. It should open freely and release a noticeable stream of exhaust air. Stop the dryer if airflow is weak or absent, and clear snow, nests, lint, or debris without installing a screen that can trap lint.',
    },
    {
      title: 'Choose vent service or appliance service',
      body:
        'Call a dryer-vent cleaning service when outdoor airflow is weak or the hidden duct may be obstructed. Choose appliance service when airflow is good but the dryer has no heat, unusual noise, electrical symptoms, or persistent poor performance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Smoke or flame appears',
      description: 'Leave the area and call emergency services. Do not open, move, or keep testing the dryer.',
      severity: 'danger',
    },
    {
      title: 'You see sparking or electrical damage',
      description:
        'Sparking, melting, scorching, or discoloration at the dryer, cord, plug, or outlet requires shutdown and electrical evaluation.',
      severity: 'danger',
    },
    {
      title: 'There is a burning odor',
      description:
        'Stop the cycle rather than waiting to see whether a hot-lint, rubber, plastic, or electrical smell fades.',
      severity: 'danger',
    },
    {
      title: 'The cabinet or laundry area becomes unusually hot',
      description:
        'Excess heat or humidity, especially with damp clothing, can indicate that exhaust is not escaping normally.',
      severity: 'warning',
    },
    {
      title: 'Outdoor exhaust airflow is weak or absent',
      description:
        'A hood that does not open or an outlet with little airflow can indicate a blocked, crushed, or otherwise restricted exhaust path.',
      severity: 'warning',
    },
    {
      title: 'The duct is visibly crushed, kinked, or disconnected',
      description:
        'Do not keep pushing the dryer back into place or running it with damaged venting. Correct the duct without straining electrical or gas connections.',
      severity: 'warning',
    },
    {
      title: 'A carbon monoxide alarm sounds',
      description:
        'Move everyone outside and call emergency services. Do not look for the source before leaving or reuse a suspected gas appliance until it has been checked.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does a long drying time always mean the vent is clogged?',
      answer:
        'No. Load size, fabric type, washer spin, cycle selection, room conditions, and dryer design can all affect drying. A restriction becomes more likely when ordinary loads repeatedly stay warm and damp or outdoor airflow is weak.',
    },
    {
      question: 'Can the exhaust duct be blocked even if the lint screen looks clean?',
      answer:
        'Yes. Lint can collect in the transition duct, concealed vent, exterior hood, or inside the dryer. A clean screen does not prove that the rest of the exhaust path is clear.',
    },
    {
      question: 'Is it safe to run another cycle on damp clothes?',
      answer:
        'Only when an obvious load or setting issue explains the result and the dryer has normal airflow, heat, and odor. Do not repeatedly restart it when the slowdown is unexplained or the dryer is unusually hot.',
    },
    {
      question: 'How do I check the outdoor dryer vent?',
      answer:
        'With the lint filter clean and no red flags present, run the dryer and observe the exterior hood. Its flap should open freely and exhaust air should escape. Stop the dryer if airflow is weak or missing.',
    },
    {
      question: 'Can dryer sheets make drying slower?',
      answer:
        "They can leave residue on some lint screens and reduce airflow through the screen. Clean the filter using the procedure in the owner's manual rather than using solvents or reinstalling it while wet.",
    },
    {
      question: 'Do heat-pump dryers need an outdoor vent?',
      answer:
        'Heat-pump dryers are ventless and remove moisture through a closed-loop system. They still require model-specific filter, heat-exchanger, drainage, or water-tank maintenance.',
    },
    {
      question: 'What if the dryer tumbles but does not heat?',
      answer:
        "That may be an appliance, power-supply, or gas-supply problem rather than a clogged vent. Stop extending cycles and follow the model's troubleshooting guidance or arrange appliance service.",
    },
    {
      question: 'Can I clean the dryer vent myself?',
      answer:
        "You may be able to clean a short, fully accessible duct if the manufacturer's instructions allow it. Use a service for concealed, roof-terminating, damaged, or difficult-to-reach venting, or whenever complete cleaning cannot be confirmed.",
    },
    {
      question: 'Can I test the dryer with the exhaust duct disconnected?',
      answer:
        'Do not do this with a gas dryer because combustion gases, including possible carbon monoxide, can enter the room. For an electric dryer, perform such a test only if the manufacturer specifically provides that procedure.',
    },
    {
      question: 'How often should the dryer vent be cleaned?',
      answer:
        'USFA recommends cleaning dryer vent ductwork every year. Clean it sooner whenever drying performance drops, outdoor airflow weakens, or inspection finds lint or an obstruction.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Overheated Clothes Dryers Can Cause Fires',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Guides/Home-Fire-Electronics-and-Electrical/Overheated-Clothes-Dryers-Can-Cause-Fires',
      sourceType: 'government',
      notes:
        'Identifies longer-than-normal drying as a possible sign of a blocked lint screen or exhaust duct and covers filter cleaning, vent checks, lint buildup, fire risk, and replacement of plastic or foil accordion ducting.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Clothes Dryer Fire Safety',
      url: 'https://www.usfa.fema.gov/downloads/pdf/publications/clothes_dryer_fire_safety_flyer.pdf',
      sourceType: 'government',
      notes:
        'States that failure to clean lint filters and dryer vents increases dryer-fire risk and advises checking for damaged, crushed, or restricted venting and confirming that the outdoor cover opens.',
    },
    {
      publisher: 'Whirlpool',
      title: 'Dryer is not Drying or Experiencing Long Dry Times',
      url: 'https://producthelp.whirlpool.com/Laundry/Dryers/Product_Info/Dryer_Product_Assistance/Dryer_is_not_Drying_or_Experiencing_Long_Dry_Times',
      sourceType: 'manufacturer',
      notes:
        'Covers overloaded and mixed loads, cycle selection, lint-screen residue, weak outdoor airflow, crushed or kinked ducts, exterior obstructions, and service when long drying persists.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Dryer - Things To Check For A Venting Issue',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=21557',
      sourceType: 'manufacturer',
      notes:
        'Links restricted airflow with longer drying, heat and humidity buildup, and a hot cabinet. Covers duct and exterior-cap checks and warns not to operate a gas dryer with its vent disconnected.',
    },
    {
      publisher: 'ENERGY STAR',
      title: 'Heat Pump Dryer',
      url: 'https://www.energystar.gov/products/clothes_dryers/heat-pump-dryer',
      sourceType: 'government',
      notes:
        'Explains that heat-pump dryers use a ventless closed-loop system, dry at relatively low temperatures, require moisture drainage, and benefit from filter maintenance and effective washer spinning.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Carbon Monoxide Fact Sheet',
      url: 'https://www.cpsc.gov/safety-education/safety-guides/carbon-monoxide/carbon-monoxide-fact-sheet',
      sourceType: 'government',
      notes:
        'Describes carbon monoxide symptoms and fuel-burning appliance safety and directs occupants to move outside and call emergency services when a CO alarm sounds or exposure is suspected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Dryer owner's manual and installation instructions",
      description:
        'Provides the correct cycles, filter care, approved duct material, vent limits, clearance requirements, and model-specific troubleshooting steps.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Dryer vent cleaning brush or rotary kit',
      description:
        'Helps remove lint from accessible duct sections when the tool and procedure are appropriate for the vent layout.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional dryer vent inspection and cleaning',
      description:
        'Appropriate for concealed, long, roof-terminating, damaged, or repeatedly obstructed vents and for ducts that cannot be confirmed clear from both ends.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance diagnostic service',
      description:
        'Needed when exhaust airflow is normal but the dryer still has no heat, unusual overheating, electrical symptoms, error messages, or persistent long cycles.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],
};
