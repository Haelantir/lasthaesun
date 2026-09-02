import type { ProblemSeed } from '../types';

export const refrigeratorRunningConstantly: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'noises',
  slug: 'refrigerator-running-constantly',
  canonicalPath: '/appliances/refrigerators/noises/refrigerator-running-constantly/',
  name: 'Refrigerator Running Constantly',
  eyebrow: 'Appliances · Refrigerators · Noises',

  h1: 'Can I Ignore a Refrigerator That Runs Constantly?',
  seoTitle: 'Refrigerator Runs Constantly: Normal Cycles vs. Trouble Signs',
  metaDescription:
    'A constantly running refrigerator may be normal on a variable-speed model. Check temperature, doors, airflow, frost, and electrical warning signs.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Yes, if it stays cold and has no warning signs',

  shortAnswer:
    'Probably not as a long-term plan. Long runs can be normal on some variable-speed models or after added heat, but unexplained constant operation deserves basic checks. Act promptly if the refrigerator rises above 40°F or shows electrical warning signs.',

  whyItMattersHeading: 'Constant Operation Is Not Always a Fault',
  whyItMatters: [
    'Some modern refrigerators use variable-speed compressors that run for extended periods, sometimes nearly continuously, at low output. Runtime alone does not prove a defect; your model information, normal operating pattern, and actual compartment temperature matter more.',
    'A door leak, blocked airflow, frost, an overly cold setting, poor ventilation, or dirty accessible condenser coils can also make a refrigerator work harder. If it cannot maintain 40°F or below, food safety becomes the priority. Smoke, sparks, electrical odors, shock, or a hot connection require shutdown rather than routine troubleshooting.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It or Get Help Now If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Checked against current USDA, ENERGY STAR, U.S. Fire Administration, GE, Frigidaire, and KitchenAid guidance on temperature, electrical safety, and compressor operation.',
  disclaimer:
    'Refrigerator designs vary. Follow the owner’s manual before moving the appliance, removing covers, defrosting, cleaning condenser areas, or disconnecting power.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'variable-speed-model-stays-cold',
      label: 'The model uses a variable-speed compressor and stays cold',
      shortDescription:
        'The manual or manufacturer says extended operation is normal, the sound is low and steady, and an appliance thermometer remains at 40°F or below.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be normal operation',
      resultBody:
        'Some variable-speed compressors adjust output instead of repeatedly switching fully on and off. Continuous low-speed operation can maintain an even temperature efficiently.',
      recommendedAction:
        'Keep using the refrigerator and monitor its temperature. Investigate only if its sound, temperature, alerts, or operating pattern changes.',
    },
    {
      slug: 'recently-started-or-restored-power',
      label: 'The refrigerator was recently started or power was restored',
      shortDescription: 'The cabinet and contents warmed before the refrigerator began running continuously.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'It may be pulling the compartments back down to temperature',
      resultBody:
        'Cooling a warm cabinet and its contents creates sustained demand. A long run is expected while the refrigerator restores its set temperature.',
      recommendedAction:
        'Keep the doors closed, avoid adding warm items, and verify that the temperature is moving toward the model’s normal range.',
    },
    {
      slug: 'frequent-opening-or-large-food-load',
      label: 'The doors were opened often or many groceries were added',
      shortDescription:
        'The longer operation began after shopping, cleaning, entertaining, or another period of frequent door use.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Added heat can explain the longer run',
      resultBody:
        'Open doors admit warm room air, and new food adds heat that the cooling system must remove. The compressor may run longer until conditions stabilize.',
      recommendedAction:
        'Close the doors fully, keep packages away from vents, and confirm that the refrigerator returns to 40°F or below.',
    },
    {
      slug: 'hot-room-or-near-heat-source',
      label: 'The room is hot or the refrigerator is near a heat source',
      shortDescription:
        'Constant operation occurs during hot weather or near an oven, dishwasher, radiator, or direct sunlight.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The surrounding heat may be increasing the cooling load',
      resultBody:
        'A warmer installation area makes it harder for the refrigerator to release heat and maintain its internal temperature.',
      recommendedAction:
        'Confirm that the location meets the model’s installation limits, preserve the required clearance, and reduce nearby heat when practical.',
    },
    {
      slug: 'setting-too-cold-or-fast-cooling',
      label: 'The setting is colder than recommended or fast cooling is active',
      shortDescription:
        'The controls were lowered recently, or a maximum-cooling feature may still be operating.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The controls may be demanding unnecessary cooling',
      resultBody:
        'A colder setting increases cooling demand and will not correct a door, airflow, or mechanical problem.',
      recommendedAction:
        'Use the manufacturer’s normal setting and disable temporary cooling modes as the manual directs. Verify the result with an appliance thermometer.',
    },
    {
      slug: 'door-not-sealing',
      label: 'A door is blocked or the gasket does not seal completely',
      shortDescription:
        'Packaging obstructs the door, the gasket is dirty or damaged, or a visible gap lets room air enter.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Correct the air leak instead of accepting the run time',
      resultBody:
        'A poor seal continually admits warm, humid air. The refrigerator may keep running while frost, condensation, and uneven temperatures develop.',
      recommendedAction:
        'Remove obstructions, clean the sealing surfaces as directed, and inspect the gasket. Arrange adjustment or replacement if full contact cannot be restored.',
    },
    {
      slug: 'airflow-or-condenser-restricted',
      label: 'Ventilation is restricted or accessible condenser areas are dusty',
      shortDescription:
        'Interior vents are blocked, required exterior clearance is missing, or a model with accessible coils has heavy dust buildup.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Restricted airflow can keep the system working harder',
      resultBody:
        'The refrigerator needs unobstructed internal circulation and a way to release heat outside the cabinet. Restrictions can reduce efficiency and temperature control.',
      recommendedAction:
        'Clear food from vents and follow the model’s clearance and cleaning instructions. Disconnect power when the manual requires it before cleaning condenser areas.',
    },
    {
      slug: 'frost-blocking-airflow',
      label: 'Frost or ice is crowding vents or the fan area',
      shortDescription:
        'Heavy frost is visible on an interior wall, around vents, or near a fan, especially in a frost-free model.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The refrigerator may be losing effective airflow',
      resultBody:
        'Frost can obstruct circulation, make a fan work abnormally, and prevent cold air from reaching the refrigerator compartment evenly.',
      recommendedAction:
        'Check the door and gasket, keep vents clear, and follow the manual’s safe defrost procedure. Arrange service if heavy frost returns.',
    },
    {
      slug: 'temperature-above-safe-range',
      label: 'The refrigerator is above 40°F or food is warming',
      shortDescription:
        'An appliance thermometer shows unsafe refrigeration temperature, food feels warmer, or a temperature alarm is active.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a cooling failure',
      resultBody:
        'Constant operation is not protecting the food if the refrigerator cannot hold a safe temperature. Smell and appearance cannot reliably determine whether warmed perishables are safe.',
      recommendedAction:
        'Keep the doors closed, protect perishable food, follow USDA or FDA food-safety guidance, and arrange prompt appliance service.',
    },
    {
      slug: 'clicking-or-electrical-warning-signs',
      label: 'It clicks repeatedly, trips power, smells burnt, sparks, or feels electrically hot',
      shortDescription:
        'The refrigerator repeatedly tries to start, or there is smoke, visible melting, a burning odor, shock, cord damage, or unusual heat at the plug or outlet.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop treating this as ordinary compressor operation',
      resultBody:
        'Repeated failed starts can indicate a component fault. Smoke, arcing, burning odor, shock, or damaged electrical connections can indicate fire or electric-shock danger.',
      recommendedAction:
        'Disconnect power only if it is safe to approach the plug or breaker. Stay clear of smoke or damaged wiring, seek repair, and call emergency services for fire or significant smoke.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The refrigerator may be operating normally',
      description:
        'A variable-speed compressor may run steadily at low output, while temporary heat from open doors, groceries, or a warm room can produce a longer run.',
      severity: 'info',
    },
    {
      stageLabel: 'IF EXTRA HEAT KEEPS ENTERING',
      title: 'Cooling demand remains high',
      description:
        'Frequent openings, a door gap, nearby heat, or an unnecessarily cold setting can keep the compressor and fans working harder than the situation requires.',
      severity: 'caution',
    },
    {
      stageLabel: 'IF AIRFLOW OR HEAT RELEASE IS RESTRICTED',
      title: 'Temperature control can become less effective',
      description:
        'Blocked vents, recurring frost, insufficient clearance, or dirty accessible condenser areas can interfere with circulation or heat removal.',
      severity: 'caution',
    },
    {
      stageLabel: 'IF COOLING CANNOT KEEP UP',
      title: 'Stored food may enter an unsafe temperature range',
      description:
        'A refrigerator that runs continuously but remains above 40°F is experiencing a cooling problem, regardless of whether the compressor can still be heard.',
      severity: 'warning',
    },
    {
      stageLabel: 'IF ELECTRICAL WARNING SIGNS APPEAR',
      title: 'Fire or electric-shock risk takes priority',
      description:
        'Smoke, sparks, burning odors, shock, damaged cords, abnormal connection heat, or repeated breaker trips require shutdown rather than further testing.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A variable-speed model runs quietly and remains at 40°F or below',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Confirm that extended operation matches the model’s documentation and continue monitoring for changes in temperature, sound, or alerts.',
    },
    {
      situation: 'Long operation follows frequent door opening, groceries, or hot weather',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Close the doors, clear interior vents, reduce unnecessary openings, and confirm that normal temperature and operation return.',
    },
    {
      situation: 'The refrigerator was recently started or power was restored',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Keep the doors closed and watch the thermometer. Escalate if the compartments do not reach the model’s normal temperature range.',
    },
    {
      situation: 'The controls are set colder than the manufacturer recommends',
      ignoreAnswer: 'Only until you correct the setting',
      severity: 'caution',
      whatToDo:
        'Restore the recommended setting, turn off temporary maximum-cooling modes, and check the actual temperature rather than repeatedly lowering the controls.',
    },
    {
      situation: 'A door gap, damaged gasket, frost, or blocked vent is visible',
      ignoreAnswer: 'Only while arranging correction',
      severity: 'caution',
      whatToDo:
        'Correct safe, obvious obstructions and follow the manual for cleaning or defrosting. Arrange service if the seal or frost problem persists.',
    },
    {
      situation: 'Accessible condenser areas are dusty or exterior clearance is blocked',
      ignoreAnswer: 'Only while correcting it safely',
      severity: 'caution',
      whatToDo:
        'Follow the owner’s manual for clearance and cleaning. Do not remove covers or clean powered equipment unless the instructions specifically direct you to do so.',
    },
    {
      situation: 'An unexplained change continues even though temperatures remain safe',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Document the temperature and sound, complete the model-approved checks, and arrange diagnosis if the refrigerator no longer follows its usual operating pattern.',
    },
    {
      situation: 'The refrigerator is above 40°F, clicking repeatedly, or showing an error',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Protect perishable food, keep the doors closed, check the model’s error guidance, and arrange prompt service.',
    },
    {
      situation: 'There is smoke, sparking, shock, burning odor, or electrical heat',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop use and disconnect power only if it can be done safely. Stay away from damaged wiring and call emergency services if there is fire or significant smoke.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Measure the compartment temperatures',
      body:
        'Place appliance thermometers in the refrigerator and freezer and allow the readings to stabilize. The refrigerator should remain at 40°F or below, while 0°F is the usual freezer target.',
      destinationProblemSlug: 'fridge-not-cold-enough',
    },
    {
      title: 'Check the model information and control settings',
      body:
        'Find the owner’s manual using the model number. Confirm whether the refrigerator has a variable-speed compressor, what operating sounds are expected, and which temperature settings and installation conditions apply.',
    },
    {
      title: 'Stop warm air from entering',
      body:
        'Remove packages that obstruct a door, inspect and clean the gasket contact surfaces as directed, and make sure shelves or bins are seated correctly. Keep food clear of interior vents.',
      destinationProblemSlug: 'frost-buildup-in-freezer',
    },
    {
      title: 'Restore safe exterior airflow',
      body:
        'Verify the model-required clearance and keep exterior ventilation openings unobstructed. Clean accessible condenser areas only by the method in the manual and with power disconnected when directed.',
    },
    {
      title: 'Arrange service for an unexplained change',
      body:
        'Seek model-appropriate appliance service if constant operation remains a new pattern after temperature, settings, doors, vents, frost, clearance, and approved cleaning checks.',
      destinationProblemSlug: 'refrigerator-clicking-on-and-off',
    },
    {
      title: 'Shut down for electrical warning signs',
      body:
        'Stop using the refrigerator for smoke, sparks, melting, burning odor, shock, cord damage, repeated breaker trips, or abnormal plug or outlet heat. Disconnect power only when safe.',
      destinationProblemSlug: 'warm-electrical-outlet',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Smoke, sparks, flame, or visible melting',
      description:
        'Do not approach a smoking or actively burning appliance to reach its plug. Leave the area and call emergency services if there is fire or significant smoke.',
      severity: 'danger',
    },
    {
      title: 'A burning electrical or melting-plastic odor',
      description:
        'Do not keep the refrigerator energized to see whether the smell disappears. Shut off its circuit if that can be done without approaching the appliance.',
      severity: 'danger',
    },
    {
      title: 'Shock or tingling from the cabinet',
      description:
        'Do not touch the refrigerator again. Isolate power from a safe location and have the appliance and electrical connection evaluated.',
      severity: 'danger',
    },
    {
      title: 'A damaged, loose, discolored, or unusually hot connection',
      description:
        'Stop using the refrigerator if its cord, plug, or outlet shows damage, melting, discoloration, looseness, or abnormal heat.',
      severity: 'danger',
    },
    {
      title: 'Repeated breaker trips or rapid failed-start clicking',
      description:
        'Do not defeat the breaker, repeatedly reset it, or move the refrigerator to an extension cord. The appliance or circuit needs diagnosis.',
      severity: 'danger',
    },
    {
      title: 'The refrigerator remains above 40°F',
      description:
        'Constant motor noise does not mean food is being kept safely cold. Protect perishables and follow government food-safety guidance.',
      severity: 'warning',
    },
    {
      title: 'Food is softening or a high-temperature alarm remains active',
      description:
        'Treat this as a cooling failure. Keep the doors closed and arrange prompt service rather than continuing to adjust the thermostat.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Do modern refrigerators normally run all the time?',
      answer:
        'Some do. Certain variable-speed compressors are designed for long or nearly continuous low-output operation. Confirm this in documentation for your model and verify that the refrigerator stays at 40°F or below.',
    },
    {
      question: 'Should a conventional refrigerator eventually shut off?',
      answer:
        'It normally cycles according to cooling demand and may stop during defrost. A sudden change from regular cycling to unexplained continuous operation deserves temperature, door, airflow, and maintenance checks.',
    },
    {
      question: 'Can a dirty condenser make the refrigerator run constantly?',
      answer:
        'It can contribute on models with accessible condenser coils or ventilation areas. Use the owner’s manual to locate and clean them safely; some refrigerators do not have user-cleanable coils.',
    },
    {
      question: 'Will turning the refrigerator colder fix constant running?',
      answer:
        'Usually not. A colder setting can lengthen operation and will not repair a poor seal, blocked vent, frost problem, fan fault, or cooling-system problem.',
    },
    {
      question: 'Can a bad door gasket cause continuous operation?',
      answer:
        'Yes. A gap can continually admit warm, humid air. Clear door obstructions, clean the sealing surfaces as directed, and replace or adjust a gasket that cannot seal fully.',
    },
    {
      question: 'Why does my refrigerator run constantly after grocery shopping?',
      answer:
        'Open doors and newly added food increase the heat inside. Longer operation is expected while the refrigerator removes that heat, provided it returns to a safe temperature.',
    },
    {
      question: 'Does constant running mean the refrigerator is low on refrigerant?',
      answer:
        'Not by itself. Many ordinary conditions and several different faults can cause long operation. Sealed-system diagnosis requires appropriate service equipment.',
    },
    {
      question: 'Can normal continuous operation damage the compressor?',
      answer:
        'Continuous operation is not inherently damaging when the compressor is designed and controlled to run that way. Abnormal operation caused by a cooling or airflow fault should still be corrected.',
    },
    {
      question: 'Should I unplug the refrigerator to reset it?',
      answer:
        'Do not use repeated power cycling as a diagnosis. It can interrupt cooling without fixing the cause. Follow the model’s instructions if an error procedure specifically calls for a power reset.',
    },
    {
      question: 'Can I keep food in a refrigerator that never shuts off?',
      answer:
        'Yes, if an appliance thermometer confirms that it remains at 40°F or below. If it is warmer, use USDA or FDA guidance to decide which perishable food must be discarded.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'What temperature should a refrigerator maintain?',
      url: 'https://ask.fsis.usda.gov/article/What-temperature-should-a-refrigerator-maintain',
      sourceType: 'government',
      notes:
        'Says refrigerators should maintain 40°F or below and recommends verifying the temperature with a refrigerator appliance thermometer.',
    },
    {
      publisher: 'ENERGY STAR',
      title: 'Refrigerators',
      url: 'https://www.energystar.gov/products/refrigerators',
      sourceType: 'government',
      notes:
        'Advises appropriate temperature settings, airtight door seals, limited door opening, distance from heat sources, exterior airflow, and manual-directed condenser cleaning.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Appliance and Electrical Fire Safety',
      url: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/appliance-and-electrical/',
      sourceType: 'government',
      notes:
        'Advises plugging refrigerators directly into wall outlets, avoiding extension cords for major appliances, and addressing damaged or loose cords and outlets.',
    },
    {
      publisher: 'Frigidaire',
      title: 'Refrigerators - Why does my refrigerator run most of the time? Is this normal?',
      url: 'https://owner.frigidaire.com/support-articles/article/1847710-refrigerators-why-does-my-refrigerator-run-most-of-the-time-is-this-normal-',
      sourceType: 'manufacturer',
      notes:
        'Explains that some variable-speed models run continuously and identifies door use, extra-cold settings, warm surroundings, restricted exterior airflow, and dust as contributors.',
    },
    {
      publisher: 'KitchenAid',
      title: 'Motor or Compressor Runs Too Much - Built-In Refrigerator',
      url: 'https://producthelp.kitchenaid.com/Refrigeration/Full-Size_Refrigerators/Built_In_Refrigerator/Other/Motor_or_Compressor_Runs_too_Much/Motor_or_Compressor_Runs_Too_Much_-_Built-In_Refrigerator',
      sourceType: 'manufacturer',
      notes:
        'Covers extended high-efficiency compressor operation, new food loads, frequent door opening, cold settings, nearby heat sources, and model-specific ventilation clearance.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Refrigerator - Normal Cycle Times',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=19194',
      sourceType: 'manufacturer',
      notes:
        'Explains that GE refrigerator runtime depends on conditions and that modern compressors may run for much of the operating period, especially in hot or humid settings.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Refrigerator and freezer appliance thermometers',
      description:
        'These show whether constant operation is maintaining safe temperatures and are more reliable than judging the air by touch.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Model-specific owner’s manual',
      description:
        'The manual identifies normal compressor behavior, recommended settings, clearances, accessible maintenance areas, and safe troubleshooting procedures.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Condenser coil cleaning brush',
      description:
        'Useful only for a refrigerator with user-accessible coils when the manual permits coil cleaning. It should not be used inside covered or energized compartments.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance diagnostic service',
      description:
        'Appropriate when the operating pattern remains unexplained, temperatures are unstable, frost returns, or the refrigerator repeatedly fails to start.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'fridge-not-cold-enough',
      anchorText: 'Is the refrigerator no longer cold enough?',
      relationshipType: 'escalation',
    },
    {
      slug: 'frost-buildup-in-freezer',
      anchorText: 'Is frost building up in the freezer?',
      relationshipType: 'cause',
    },
    {
      slug: 'refrigerator-clicking-on-and-off',
      anchorText: 'Is the refrigerator clicking on and off?',
      relationshipType: 'escalation',
    },
    {
      slug: 'refrigerator-making-loud-noise',
      anchorText: 'Is the refrigerator making a loud noise?',
      relationshipType: 'sibling',
    },
    {
      slug: 'warm-electrical-outlet',
      anchorText: 'Does the refrigerator outlet feel warm?',
      relationshipType: 'escalation',
    },
  ],
};
