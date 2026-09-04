import type { ProblemSeed } from '../types';

export const milkyResidueUnderOilCap: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'fluids',
  slug: 'milky-residue-under-oil-cap',
  canonicalPath: '/cars/fluids/milky-residue-under-oil-cap/',
  name: 'Milky Residue Under the Oil Cap',
  eyebrow: 'Mobility · Cars · Fluids',

  h1: 'Can I Ignore Milky Residue Under the Oil Cap?',
  seoTitle: 'Milky Oil Cap Residue: Condensation or Coolant Leak?',
  metaDescription:
    'Milky oil-cap residue is often condensation, but milky dipstick oil, coolant loss, overheating, or persistent white exhaust needs prompt diagnosis.',

  aliases: ['/cars/fluids/milky-oil-cap/', '/cars/fluids/white-sludge-under-oil-cap/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Only if the other checks are normal',

  shortAnswer:
    'Sometimes. A small amount confined to the cap can be condensation, especially after repeated short trips in cold weather. Do not keep driving normally if the dipstick oil is milky, coolant is disappearing, or the engine is overheating or running badly.',

  whyItMattersHeading: 'The Cap Alone Does Not Tell You the Cause',
  whyItMatters: [
    'Water vapor can collect in engine oil when repeated short trips prevent the oil from reaching normal operating temperature. Moisture and oil vapor may form a pale, creamy deposit at the cap, while the oil on the dipstick and the coolant remain normal.',
    'The same appearance can become more concerning when it extends into the oil supply or appears with coolant loss. Coolant leaking into the crankcase weakens the oil’s ability to lubricate and can promote deposits, while continuing coolant loss can lead to overheating. Check the dipstick, coolant level, temperature, exhaust, and engine behavior before deciding it is harmless condensation.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Get Help If:',

  lastReviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Reviewed against federal vehicle-maintenance guidance, manufacturer service information, owner guidance, and current ASTM oil-contamination testing standards.',
  disclaimer:
    'General automotive triage only. Appearance alone cannot identify an internal leak, and checking procedures vary by vehicle. Follow the owner’s manual and obtain hands-on diagnosis when warning signs are present.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'cap-only-after-short-cold-trips',
      label: 'Residue is only on the cap after short cold-weather trips',
      shortDescription:
        'The dipstick oil looks normal, the coolant level is stable, and the engine has mostly been used for short trips.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is consistent with condensation',
      resultBody:
        'Repeated cold starts and short trips may leave water vapor in the crankcase because the oil does not become hot enough to release it. The cooler filler cap is a common place for the resulting emulsion to collect.',
      recommendedAction:
        'Wipe the removable cap clean, confirm that the dipstick oil and cold coolant level are normal, and recheck after the vehicle has had normal use that fully warms the engine.',
    },
    {
      slug: 'cap-only-without-short-trip-pattern',
      label: 'Residue is limited to the cap, but the driving pattern does not fit',
      shortDescription:
        'The dipstick and coolant appear normal, but the vehicle regularly reaches operating temperature or the weather is warm.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Check why it is forming',
      resultBody:
        'Condensation remains possible, but it is less convincing when the engine regularly gets fully warm. Crankcase ventilation or another source of moisture may need inspection.',
      recommendedAction:
        'Clean the cap, document the coolant and oil levels, and arrange an inspection if the residue returns.',
    },
    {
      slug: 'residue-clears-and-does-not-return',
      label: 'The residue clears after normal fully warm driving',
      shortDescription:
        'The cap stays clean afterward, with normal dipstick oil, stable coolant, and no warning lights or performance changes.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'No repair is usually needed',
      resultBody:
        'A deposit that disappears when the oil regularly reaches operating temperature supports condensation rather than an active coolant leak.',
      recommendedAction:
        'Continue normal maintenance and follow the severe-use oil-change schedule if your owner’s manual classifies frequent short trips that way.',
    },
    {
      slug: 'residue-keeps-returning',
      label: 'The residue keeps returning despite regular full warm-ups',
      shortDescription:
        'Creamy buildup repeatedly comes back even though the vehicle is not limited to short cold trips.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Have the cause checked',
      resultBody:
        'Persistent buildup outside the usual condensation pattern deserves inspection. Appearance alone cannot separate a ventilation problem from internal fluid contamination.',
      recommendedAction:
        'Arrange diagnosis and keep monitoring the dipstick, oil level, cold coolant level, temperature, and exhaust.',
    },
    {
      slug: 'milky-oil-on-dipstick',
      label: 'The oil on the dipstick is milky or cloudy',
      shortDescription:
        'The pale emulsion is not confined to the cap and appears in the oil checked at the dipstick.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not treat this as cap condensation',
      resultBody:
        'Cloudy oil throughout the lubrication system may contain substantial water or coolant. Coolant contamination weakens lubrication and can promote varnish, deposits, wear, and serious engine damage.',
      recommendedAction:
        'Avoid driving normally and have the oil and cooling system tested before continued use. Do not assume that an oil change alone fixes the source.',
    },
    {
      slug: 'coolant-level-dropping',
      label: 'The coolant level keeps dropping',
      shortDescription:
        'The cold reservoir level falls, repeated top-offs are needed, or oily contamination appears in the coolant.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Coolant loss needs diagnosis',
      resultBody:
        'Falling coolant means fluid is escaping somewhere. Milky residue raises concern that the loss may involve an internal leak, although external cooling-system leaks are also possible.',
      recommendedAction:
        'Minimize driving and have the cooling system and engine inspected. Check coolant only when the system is cool, and never open a hot pressure cap.',
    },
    {
      slug: 'persistent-white-exhaust',
      label: 'Thick white exhaust continues after warm-up',
      shortDescription:
        'The exhaust does not clear normally and appears with falling coolant, a sweet odor, or rough running.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'An internal coolant leak is possible',
      resultBody:
        'Persistent white exhaust combined with coolant loss or poor running can occur when coolant reaches the intake, combustion chambers, or exhaust through an internal fault.',
      recommendedAction:
        'Stop using the car for normal travel and arrange prompt diagnosis. Stop immediately if the temperature rises or steam appears.',
    },
    {
      slug: 'engine-running-rough',
      label: 'The engine misfires, shakes, stalls, or loses power',
      shortDescription:
        'Milky residue appears with abnormal engine operation or a flashing malfunction warning.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The problem is affecting engine operation',
      resultBody:
        'Rough running means this is no longer an appearance-only concern. Coolant intrusion is one possible cause, but other engine faults can produce similar behavior.',
      recommendedAction:
        'Pull over if the engine is running severely rough, power drops sharply, or the warning light flashes. Arrange diagnosis before normal driving resumes.',
    },
    {
      slug: 'overheating-or-oil-pressure-warning',
      label: 'An overheating or oil-pressure warning appears',
      shortDescription:
        'The temperature is in the hot range, steam is present, or the low-oil-pressure warning stays on while the engine runs.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop the engine safely',
      resultBody:
        'Overheating can damage the engine, and low oil pressure may mean critical parts are not receiving adequate lubrication. Milky residue does not make either warning safe to ignore.',
      recommendedAction:
        'Stop in a safe place, shut the engine off, and follow the owner’s manual. Do not open a hot cooling system or restart merely to see whether the warning clears.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The residue is a clue, not a diagnosis',
      description:
        'Oil and water vapor can create a creamy emulsion, but its location and the vehicle’s other symptoms determine how concerning it is.',
      severity: 'info',
      chainLabel: 'Cap residue',
    },
    {
      stageLabel: 'IF CONDENSATION IS THE CAUSE',
      title: 'Moisture may keep collecting',
      description:
        'Repeated operation without fully warming the oil can allow moisture to remain in the crankcase and reform at cooler surfaces such as the filler cap.',
      severity: 'caution',
      chainLabel: 'Moisture buildup',
    },
    {
      stageLabel: 'IF COOLANT IS ENTERING THE OIL',
      title: 'Lubrication can be compromised',
      description:
        'Glycol-based coolant in the crankcase weakens the oil’s lubricating ability and promotes varnish and deposit formation.',
      severity: 'warning',
      chainLabel: 'Contaminated oil',
    },
    {
      stageLabel: 'IF COOLANT LOSS CONTINUES',
      title: 'The engine can overheat',
      description:
        'An active internal or external leak may lower the coolant level until the cooling system can no longer control engine temperature.',
      severity: 'warning',
      chainLabel: 'Coolant loss',
    },
    {
      stageLabel: 'IF WARNING SIGNS ARE IGNORED',
      title: 'Serious engine damage can follow',
      description:
        'Continuing to drive with contaminated oil, low oil pressure, or overheating can damage internal engine components and leave the vehicle disabled.',
      severity: 'danger',
      chainLabel: 'Engine damage',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Residue is only under the cap, with normal dipstick oil and stable coolant',
      ignoreAnswer: 'Yes, for now',
      severity: 'info',
      whatToDo: 'Clean the cap, document the oil and cold coolant levels, and recheck for changes.',
    },
    {
      situation: 'The vehicle mostly makes short trips in cold weather',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Confirm that no warning signs are present and allow normal driving that brings the engine fully to operating temperature when practical.',
    },
    {
      situation: 'There is no short-trip or cold-weather pattern',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Arrange an inspection if the deposit returns after cleaning.',
    },
    {
      situation: 'The residue persists despite regular fully warm operation',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Have the crankcase ventilation, oil condition, and cooling system checked.',
    },
    {
      situation: 'The dipstick oil is milky, cloudy, or unusually thick',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Avoid normal driving and have the oil tested for water or coolant contamination.',
    },
    {
      situation: 'The cold coolant level keeps falling',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Minimize driving and arrange cooling-system and engine diagnosis.',
    },
    {
      situation: 'Thick white exhaust, rough running, or major power loss appears',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop normal use and arrange prompt diagnosis, especially if coolant is disappearing.',
    },
    {
      situation: 'The engine overheats or the oil-pressure warning comes on',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop safely, shut the engine off, and follow the owner’s manual.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the dipstick correctly',
      body:
        'Park on level ground and use the procedure in the owner’s manual. Wipe and reinsert the dipstick before judging the oil’s level and appearance. Milky oil on the dipstick is more concerning than residue confined to the cap.',
      destinationProblemSlug: 'low-engine-oil',
    },
    {
      title: 'Check the coolant only when the engine is cool',
      body:
        'Note the reservoir level and condition so you can tell whether it changes. Do not remove a radiator or pressure cap from a hot engine because pressurized coolant can cause serious burns.',
      destinationProblemSlug: 'coolant-leak',
    },
    {
      title: 'Clean the cap and track what returns',
      body:
        'Wipe the removable cap with a clean lint-free cloth without pushing debris into the filler opening. A dated photo of the cap, dipstick, and coolant level can make a recurring pattern easier to identify.',
    },
    {
      title: 'Arrange testing if the pattern is unclear',
      body:
        'A shop may inspect crankcase ventilation, pressure-test the cooling system, and test used oil for water, glycol, or coolant indicators. This is more reliable than diagnosing a head gasket from color alone.',
    },
    {
      title: 'Stop for an active warning',
      body:
        'Shut the engine off safely if it overheats, develops an oil-pressure warning, produces steam, or begins running severely rough. Do not continue driving to complete a test.',
      destinationProblemSlug: 'engine-overheating',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Milky oil appears on the dipstick',
      description: 'This suggests that the contamination is not limited to the cooler surface under the cap.',
      severity: 'danger',
    },
    {
      title: 'The coolant level keeps falling',
      description: 'Repeated coolant loss means an internal or external leak remains active.',
      severity: 'warning',
    },
    {
      title: 'The temperature warning appears',
      description: 'Stop safely and follow the manufacturer’s overheating procedure.',
      severity: 'danger',
    },
    {
      title: 'Thick white exhaust continues after warm-up',
      description:
        'Persistent exhaust with coolant loss or rough running can indicate coolant entering the engine or exhaust.',
      severity: 'warning',
    },
    {
      title: 'The engine misfires, shakes, stalls, or loses power',
      description: 'The problem is affecting operation and should not be treated as harmless cap residue.',
      severity: 'danger',
    },
    {
      title: 'The oil-pressure warning stays on',
      description: 'Low oil pressure can rapidly damage engine parts that depend on pressurized lubrication.',
      severity: 'danger',
    },
    {
      title: 'The coolant looks oily or sludgy',
      description:
        'Oil contamination in the cooling system needs prompt inspection even if the engine has not overheated.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does milky residue under the oil cap always mean a blown head gasket?',
      answer:
        'No. Condensation from repeated short trips is a common alternative when the residue is confined to the cap, the dipstick oil looks normal, and the coolant level is stable. A head gasket is only one of several possible paths for an internal coolant leak.',
    },
    {
      question: 'Why can the cap be milky when the dipstick looks normal?',
      answer:
        'The filler cap is a relatively cool, high point where water vapor and oil mist can condense. That small local deposit does not necessarily represent the oil circulating through the engine.',
    },
    {
      question: 'Can cold weather cause the residue?',
      answer:
        'Yes. Cold conditions and short trips make it harder for moisture in the crankcase to evaporate. The driving pattern matters more than the color alone.',
    },
    {
      question: 'Should I let the engine idle to dry out the moisture?',
      answer:
        'Idling is not a reliable substitute for normal operation that fully warms the engine oil. Repeated idle-only starts can contribute to moisture buildup in some engines.',
    },
    {
      question: 'Can I simply wipe the residue away?',
      answer:
        'You can wipe the removable cap clean, but cleaning does not identify or correct the cause. Recheck the dipstick and coolant, then see whether the deposit returns.',
    },
    {
      question: 'Will an oil change solve the problem?',
      answer:
        'An oil change removes the oil currently in the engine but does not repair an internal coolant leak or ventilation fault. If the dipstick oil is milky or coolant is disappearing, diagnose the source as well.',
    },
    {
      question: 'Can a crankcase ventilation problem cause this?',
      answer:
        'A restricted or malfunctioning ventilation system can interfere with the way moisture and oil vapor leave the crankcase. Inspection may be appropriate when buildup persists outside a short-trip pattern.',
    },
    {
      question: 'Can a shop confirm whether coolant is in the oil?',
      answer:
        'Yes. Laboratory oil analysis can test for glycol and other coolant indicators. Cooling-system pressure testing and vehicle-specific engine tests may also help locate the source.',
    },
    {
      question: 'Does the color of the residue identify the coolant type?',
      answer:
        'No. Oil, water, additives, temperature, and age can change the deposit’s color. Do not choose coolant or diagnose the leak from color alone.',
    },
    {
      question: 'Is an internal coolant leak always caused by the head gasket?',
      answer:
        'No. Depending on engine design, possible sources can include a head gasket, intake gasket, oil cooler, cylinder head, engine block, or another coolant-to-oil passage.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Summer Driving & Road Trip Tips',
      url: 'https://www.nhtsa.gov/summer-driving-tips',
      sourceType: 'government',
      notes:
        'Advises checking engine-oil level, coolant condition and level, and the cooling system for leaks, while following vehicle-specific manufacturer recommendations.',
    },
    {
      publisher: 'Mitsubishi Motors North America',
      title: 'Tech Talk Volume 269 — Cloudy Engine Oil Troubleshooting',
      url: 'https://static.nhtsa.gov/odi/tsbs/2022/MC-10219502-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'Vehicle-specific technical guidance documents cloudy oil and filler-cap residue caused by combustion water vapor that does not evaporate during short drives, and instructs checking coolant condition and level.',
    },
    {
      publisher: 'General Motors',
      title: 'Bulletin 03-06-01-023E — Higher Than Expected Oil Consumption at 8600 GVW and Above',
      url: 'https://static.nhtsa.gov/odi/tsbs/2022/MC-10211061-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'Vehicle-specific bulletin explains that short trips, particularly in cold weather, can prevent condensation from evaporating from engine oil and discusses accurate dipstick checks and overheating damage.',
    },
    {
      publisher: 'ASTM International',
      title: 'ASTM D4291-21(2025) — Standard Test Method for Trace Ethylene Glycol in Used Engine Oil',
      url: 'https://store.astm.org/standards/d4291',
      sourceType: 'standards_body',
      notes:
        'States that coolant leaking into the crankcase weakens lubrication, promotes varnish and deposits, and can seriously damage the engine; defines a laboratory method for detecting ethylene glycol in used oil.',
    },
    {
      publisher: 'Chevron Lubricants',
      title: 'Interpreting Oil Analysis: What Does It Tell You?',
      url: 'https://www.chevronlubricants.com/en_us/home/learning/from-chevron/industrial-machinery/interpreting-oil-analysis.html',
      sourceType: 'industry',
      notes:
        'Explains that oil analysis can identify excessive water contamination, viscosity changes, wear indicators, and traces associated with an internal coolant leak.',
    },
    {
      publisher: 'Toyota Motor North America',
      title: '2020 Corolla — Engine Compartment',
      url: 'https://www.toyota.com/owners/warranty-owners-manuals/digital/article/corolla/2020/om12k77u/ch07se030404/',
      sourceType: 'manufacturer',
      notes:
        'Vehicle-specific owner guidance covers checking oil and coolant, investigating coolant that falls after replenishing, and avoiding removal of a hot pressurized coolant cap.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Clean lint-free cloth and flashlight',
      description:
        'Useful for inspecting the cap and dipstick without leaving fibers or pushing loose deposits into the engine.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Vehicle owner’s manual',
      description:
        'Provides the correct procedures for checking engine oil and coolant and responding to temperature or oil-pressure warnings.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Cooling-system pressure test',
      description:
        'A service test that can help identify external leaks and some internal coolant-loss problems.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Used-oil laboratory analysis',
      description:
        'Can check for water, glycol, coolant indicators, viscosity changes, and wear metals when visual inspection is inconclusive.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'coolant-leak', anchorText: 'Can I ignore a coolant leak?', relationshipType: 'cause' },
    {
      slug: 'white-smoke-from-exhaust',
      anchorText: 'Can I ignore white smoke from the exhaust?',
      relationshipType: 'escalation',
    },
    {
      slug: 'engine-overheating',
      anchorText: 'Can I ignore an overheating engine?',
      relationshipType: 'escalation',
    },
    {
      slug: 'oil-pressure-warning-light',
      anchorText: 'Can I ignore an oil-pressure warning light?',
      relationshipType: 'escalation',
    },
    { slug: 'low-engine-oil', anchorText: 'Can I ignore low engine oil?', relationshipType: 'related' },
  ],
};
