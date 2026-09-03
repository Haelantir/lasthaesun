import type { ProblemSeed } from '../types';

export const blueSmokeFromExhaust: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'exhaust',
  slug: 'blue-smoke-from-exhaust',
  canonicalPath: '/cars/exhaust/blue-smoke-from-exhaust/',
  name: 'Blue Smoke From the Exhaust',
  eyebrow: 'Mobility · Cars · Exhaust',

  h1: 'Can I Ignore Blue Smoke From My Exhaust?',
  seoTitle: 'Blue Smoke From the Exhaust: When to Stop Driving',
  metaDescription:
    'Blue or blue-grey exhaust usually means oil is burning. Learn when a brief puff can wait, when to stop driving, and which warning signs make it urgent.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Only briefly if the oil level is safe',

  shortAnswer:
    'Probably not. Blue or blue-grey tailpipe smoke usually means engine oil is reaching the combustion chamber or exhaust. If the smoke is light and intermittent, the oil level is safe, and the car runs normally, drive only as needed for diagnosis; stop for heavy smoke, an oil-pressure warning, rough running, major power loss, or uncontrolled engine speed.',

  whyItMattersHeading: 'Why Blue Exhaust Smoke Matters',
  whyItMatters: [
    'A warmed-up gasoline engine should not normally produce visible blue smoke. Oil may be entering through worn piston rings, valve guides or seals, a crankcase ventilation fault, a turbocharger problem, or another internal path. When the smoke appears—during startup, acceleration, idling, or deceleration—can help narrow the inspection, but it cannot identify the failed part by itself.',
    'Continued oil burning can lower the engine-oil level and leave deposits in the combustion and exhaust systems. If the level or oil pressure becomes too low, lubrication can fail and serious engine damage can follow. A turbocharged diesel that suddenly revs uncontrollably while smoking is a separate emergency because it may be consuming its own lubricating oil.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Call for Help If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Covers gasoline and diesel tailpipe smoke, oil-level checks, operating patterns, turbo-related faults, warning signs, and model-specific manufacturer bulletins.',
  disclaimer:
    'General automotive triage guidance only. Exhaust color and driving pattern cannot identify a failed part. Follow the owner’s manual for oil checks and warning lights, and use only the model-specific procedure for a diesel runaway.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'single-faint-puff-once',
      label: 'A single faint puff appeared once on startup',
      shortDescription:
        'The haze disappeared immediately, has not returned, and the oil level and engine operation remain normal.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Monitor it rather than dismissing it',
      resultBody:
        'A one-time brief puff does not prove that a major failure is developing. Small amounts of residual oil can create a visible cloud, including on some turbocharged engines, but recurring blue smoke is not normal condensation.',
      recommendedAction:
        'Check the oil level using the owner’s manual, record when it happened, and watch the next several starts. Arrange an inspection if it returns, grows, or comes with oil loss.',
    },
    {
      slug: 'thin-white-vapor-that-clears',
      label: 'It is thin white vapor rather than blue smoke',
      shortDescription:
        'The mist is most visible in cold air, fades as the exhaust warms, and leaves no oily smell or oil loss.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This sounds more like condensation',
      resultBody:
        'Normal water vapor can look grey against certain lighting or backgrounds. Vapor that clears after warm-up is different from oily blue smoke that lingers or returns under load.',
      recommendedAction:
        'No repair is usually needed if the vapor clears and the engine runs normally. Reassess if it remains thick after warm-up or the oil or coolant level falls.',
    },
    {
      slug: 'continuous-after-warmup',
      label: 'Blue smoke continues after the engine is warm',
      shortDescription:
        'Visible smoke remains at idle or while driving instead of appearing as one brief startup puff.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Persistent oil burning needs prompt diagnosis',
      resultBody:
        'A properly operating warmed-up gasoline engine should not emit visible smoke. Continuous blue exhaust suggests that oil is entering the engine or exhaust repeatedly rather than as an isolated residue.',
      recommendedAction:
        'Minimize driving, avoid heavy engine load, verify the oil level, and arrange prompt diagnosis.',
    },
    {
      slug: 'large-cloud-under-acceleration',
      label: 'A large blue cloud appears during acceleration',
      shortDescription:
        'The smoke becomes obvious when climbing, merging, towing, or pressing the accelerator hard.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep loading the engine',
      resultBody:
        'Smoke under load can accompany piston-ring or cylinder wear, crankcase ventilation faults, or oil leakage through a turbocharger. A large cloud may also mean the engine is consuming oil quickly.',
      recommendedAction:
        'Ease off the accelerator, avoid towing and hard acceleration, check the oil level when safe, and have the engine inspected before normal driving continues.',
    },
    {
      slug: 'oil-level-keeps-dropping',
      label: 'The engine-oil level keeps dropping',
      shortDescription: 'The dipstick or electronic display shows repeated oil loss along with blue exhaust.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The engine is losing oil through use or leakage',
      resultBody:
        'Blue smoke plus a falling oil level is stronger evidence of active oil consumption. Topping up the oil protects the level temporarily but does not correct the route by which oil is escaping or burning.',
      recommendedAction:
        'Keep the level within the manufacturer’s safe range without overfilling, minimize driving, and arrange an oil-consumption and leak diagnosis.',
    },
    {
      slug: 'started-after-oil-service',
      label: 'The smoke started immediately after oil service',
      shortDescription:
        'Blue exhaust appeared after an oil change, top-up, or other work involving the engine or turbocharger.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Have the service checked before driving normally',
      resultBody:
        'The timing makes the oil level, oil specification, serviced connections, and any oil left in the intake or exhaust important to verify. Do not assume the smoke will simply burn away.',
      recommendedAction:
        'Check the level exactly as the owner’s manual directs and contact the service provider. Do not drive if the level is above or below the safe range, smoke is heavy, or a warning appears.',
    },
    {
      slug: 'turbo-noise-or-power-loss',
      label: 'A turbocharged car also has noise or power loss',
      shortDescription:
        'Blue smoke comes with unusual turbo noise, weak acceleration, or an oil level that is falling.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A turbo or related oil path may be failing',
      resultBody:
        'Manufacturer bulletins document model-specific cases where turbocharger oil leakage, oil-feed faults, crankcase pressure, or cylinder wear caused blue smoke. Power loss or new noise makes continued driving more concerning.',
      recommendedAction:
        'Avoid boost and heavy load, stop if the smoke becomes dense or power drops sharply, and arrange diagnosis of the turbocharger, intake, crankcase ventilation, and engine.',
    },
    {
      slug: 'rough-running-or-warning-light',
      label: 'The engine runs rough or a warning light appears',
      shortDescription:
        'The car shakes, misfires, hesitates, loses power, or shows a flashing check engine light with the smoke.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The fault is affecting engine operation',
      resultBody:
        'Oil entering the cylinders can interfere with combustion, while a separate active engine fault may also be present. A flashing check engine light can indicate a damaging misfire.',
      recommendedAction:
        'Reduce engine load and stop safely if the light keeps flashing, the engine shakes badly, or the vehicle cannot maintain safe speed. Arrange roadside help or prompt service.',
    },
    {
      slug: 'diesel-engine-revs-by-itself',
      label: 'A diesel engine starts revving uncontrollably',
      shortDescription:
        'Engine speed rises without accelerator input, often with a rapidly growing cloud of smoke.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a diesel runaway emergency',
      resultBody:
        'Some diesel engines can consume lubricating oil through a failed turbocharger or another intake path and continue accelerating even after the driver releases the pedal. Severe engine damage and personal injury are possible.',
      recommendedAction:
        'Turn the ignition off, stop and exit if you can do so safely, move away from the vehicle, and call emergency or roadside assistance. Follow the exact runaway procedure in the vehicle’s manual; do not approach a violently revving engine.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Engine oil is reaching the exhaust stream',
      description:
        'Blue or blue-grey smoke usually means lubricating oil has entered the combustion chamber or, in some turbo faults, the exhaust side of the system.',
      severity: 'caution',
      chainLabel: 'Oil enters combustion',
    },
    {
      stageLabel: 'IF THE SMOKE CONTINUES',
      title: 'Oil consumption can become measurable',
      description: 'Repeated burning can lower the oil level even when no puddle forms beneath the vehicle.',
      severity: 'warning',
      chainLabel: 'Oil level falls',
    },
    {
      stageLabel: 'IF DEPOSITS BUILD',
      title: 'Engine operation may deteriorate',
      description:
        'Oil contamination can foul combustion components, contribute to misfires, and increase exhaust emissions.',
      severity: 'warning',
      chainLabel: 'Running problems develop',
    },
    {
      stageLabel: 'IF OIL PRESSURE DROPS',
      title: 'Critical parts may lose lubrication',
      description:
        'An unsafe oil level or lubrication-system fault can leave bearings and other moving parts without adequate oil pressure.',
      severity: 'danger',
      chainLabel: 'Lubrication fails',
    },
    {
      stageLabel: 'IF THE FAILURE WORSENS',
      title: 'Major engine damage can follow',
      description:
        'Continued operation with severe oil loss, low pressure, or an uncontrolled diesel runaway can result in engine seizure or destructive mechanical failure.',
      severity: 'danger',
      chainLabel: 'Engine failure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A single faint startup puff happened once and has not returned',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Check the oil level and monitor later starts. Arrange an inspection if the smoke returns or the level changes.',
    },
    {
      situation: 'Blue smoke returns on cold starts',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Note whether it follows overnight parking or extended idling and arrange diagnosis. Repetition distinguishes it from an isolated residue.',
    },
    {
      situation: 'Blue smoke appears during hard acceleration',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Avoid heavy load and have the engine, crankcase ventilation, and turbocharger if equipped inspected.',
    },
    {
      situation: 'Smoke appears after a long downhill or when you lift off the accelerator',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Report the exact pattern during diagnosis. Intake vacuum, valve-guide sealing, or a breather fault can affect when oil is drawn into some engines.',
    },
    {
      situation: 'Smoke continues at idle or every speed after warm-up',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Minimize driving, check the oil level, and arrange prompt diagnosis.',
    },
    {
      situation: 'Smoke is light, the oil level is safe, and the car runs normally',
      ignoreAnswer: 'Only for a direct trip to diagnosis',
      severity: 'caution',
      whatToDo:
        'Drive gently, keep engine load low, and stop if the smoke grows, the level falls, or a warning appears.',
    },
    {
      situation: 'The smoke began after an oil change or top-up',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Verify the oil level with the manufacturer’s procedure and have the recent service checked.',
    },
    {
      situation: 'The oil-pressure warning comes on',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop safely, shut the engine off, and follow the owner’s manual. Do not continue driving to see whether the warning clears.',
    },
    {
      situation: 'A diesel engine revs without accelerator input',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Switch off the ignition, get away from the vehicle, and call for emergency assistance. Use only the model-specific procedure in the owner’s manual.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm that the smoke is coming from the tailpipe',
      body:
        'Watch from a safe outdoor position or ask another person to observe. Thin white vapor that fades is usually condensation; smoke from under the hood suggests a different oil leak or hot-surface problem.',
      destinationProblemSlug: 'white-smoke-from-exhaust',
    },
    {
      title: 'Check the engine-oil level correctly',
      body:
        'Park as the owner’s manual directs and use its dipstick or electronic measurement procedure. Do not add oil unless the reading is below the specified range, and do not overfill.',
      destinationProblemSlug: 'low-engine-oil',
    },
    {
      title: 'Record exactly when the smoke appears',
      body:
        'Note whether it happens at cold start, after idling, during acceleration, while cruising, after lifting off, or at every speed. Also record oil-level changes, smells, warning lights, noise, and power loss.',
    },
    {
      title: 'Reduce load until the cause is known',
      body:
        'Avoid hard acceleration, high engine speed, towing, and steep-load driving. Limited gentle driving is reasonable only when smoke is light, the oil level is safe, and the engine has no warning or drivability problem.',
    },
    {
      title: 'Treat oil-pressure and misfire warnings separately',
      body:
        'An oil-pressure warning requires an immediate safe stop. A flashing check engine light or severe rough running also raises the urgency even if the smoke itself seems light.',
      destinationProblemSlug: 'oil-pressure-warning-light',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The oil-pressure warning appears',
      description:
        'Shut the engine off in a safe place. The warning concerns oil pressure, not merely the maintenance interval.',
      severity: 'danger',
    },
    {
      title: 'The dipstick shows little or no oil',
      description:
        'Do not keep operating the engine with the level outside the safe range. Follow the owner’s manual and investigate where the oil went.',
      severity: 'danger',
    },
    {
      title: 'Blue smoke becomes dense or continuous',
      description: 'A growing cloud can mean oil is entering the engine or exhaust rapidly.',
      severity: 'warning',
    },
    {
      title: 'The engine shakes, misfires, or loses major power',
      description:
        'The problem is affecting combustion or engine operation rather than producing an isolated puff.',
      severity: 'danger',
    },
    {
      title: 'The check engine light flashes',
      description: 'Reduce load immediately and stop if the flashing continues or the engine runs badly.',
      severity: 'danger',
    },
    {
      title: 'A turbocharged engine develops new whining or scraping noise',
      description:
        'Blue smoke with unusual turbo noise, falling oil, or sudden power loss needs prompt diagnosis.',
      severity: 'danger',
    },
    {
      title: 'A diesel engine revs without accelerator input',
      description:
        'Move away and call for emergency assistance. A runaway engine can overspeed while consuming its own lubricating oil.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does blue exhaust smoke always mean the engine is burning oil?',
      answer:
        'Usually, but color alone is not a complete diagnosis. Lighting can make white vapor look grey, and oil may enter through the cylinders, crankcase ventilation system, turbocharger, or another internal route.',
    },
    {
      question: 'Is a small blue puff normal on a cold start?',
      answer:
        'Not in the same way that white condensation is normal. Some model-specific faults or designs can produce a short startup puff, but recurring blue smoke should be checked even if it disappears immediately.',
    },
    {
      question: 'Why does my car smoke only when I accelerate?',
      answer:
        'Engine load can reveal oil passing through worn rings or cylinders, a crankcase ventilation problem, or a turbocharger oil leak. The pattern is useful evidence but does not confirm which part has failed.',
    },
    {
      question: 'Why does blue smoke appear after a long downhill?',
      answer:
        'On some gasoline engines, high intake vacuum during closed-throttle deceleration can draw oil through worn valve guides or seals or through the breather system. Tell the repair facility about this exact pattern.',
    },
    {
      question: 'Can a bad turbocharger cause blue smoke?',
      answer:
        'Yes. Manufacturer bulletins document oil entering the intake or exhaust through turbocharger-related faults. Turbo noise, power loss, or falling oil makes the situation more urgent.',
    },
    {
      question: 'Is blue smoke expected from an older high-mileage engine?',
      answer:
        'Wear in rings, cylinders, valves, and seals becomes more plausible as an engine ages, but age does not make visible smoke harmless. Monitor the oil level and have the rate and source of oil consumption assessed.',
    },
    {
      question: 'Can I keep driving if the oil level is still full?',
      answer:
        'Only cautiously and briefly when the smoke is light, the level is within the correct range, and there are no warnings, noises, or drivability changes. A normal reading does not make recurring smoke normal.',
    },
    {
      question: 'Could an oil change cause blue smoke?',
      answer:
        'Smoke beginning immediately after service makes the oil level, oil specification, serviced connections, and residual oil important to check. Contact the service provider rather than assuming it will clear.',
    },
    {
      question: 'Will thicker oil or a stop-smoke additive fix it?',
      answer:
        'Do not substitute an unapproved viscosity or additive for diagnosis. Use only oil permitted by the owner’s manual; an additive cannot repair worn parts, a failed turbocharger, or a crankcase ventilation fault.',
    },
    {
      question: 'Can blue smoke make my car fail an emissions inspection?',
      answer:
        'It can in jurisdictions that include a visible-smoke check. Inspection rules vary by state and local program, so check the requirements where the vehicle is registered.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Pennsylvania Department of Environmental Protection',
      title: 'Automobiles — Car Care',
      url: 'https://www.pa.gov/agencies/dep/programs-and-services/air/bureau-of-air-quality/automobiles/car-care',
      sourceType: 'government',
      notes:
        'States that a properly operating warmed gasoline vehicle should not emit visible smoke and identifies blue smoke as engine oil burning, with worn rings, valves, or cylinders among possible causes.',
    },
    {
      publisher: 'Toyota Motor North America',
      title: '2023 Corolla Cross — If a Warning Light Turns On or a Warning Buzzer Sounds',
      url: 'https://www.toyota.com/owners/warranty-owners-manuals/digital/article/corolla-cross/2023/om0a039u/ch07se020404/',
      sourceType: 'manufacturer',
      notes:
        'Model-specific owner guidance says an excessively low engine-oil-pressure warning requires an immediate safe stop.',
    },
    {
      publisher: 'Bentley Motors',
      title: 'Technical Product Information 2074962/2 — Engine Lubricating Oil Replenishment',
      url: 'https://static.nhtsa.gov/odi/tsbs/2025/MC-11012194-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'Model-specific procedure says oil consumption can change over engine life and directs inspection for blue smoke during starting, idling, throttle application, and engine load.',
    },
    {
      publisher: 'General Motors',
      title: 'PIP5680D — Excessive Oil Smoke From the Exhaust on Cold Start',
      url: 'https://static.nhtsa.gov/odi/tsbs/2021/MC-10202386-9999.pdf',
      sourceType: 'manufacturer',
      notes:
        'Cadillac-specific bulletin documents cold-start blue smoke associated with turbocharger oil, PCV operation, crankcase pressure, and piston-ring or cylinder-bore wear. It is not a diagnosis for other vehicles.',
    },
    {
      publisher: 'Jaguar Cars Limited',
      title: 'Service Bulletin JD 39/93 — Engine Breather Modification',
      url: 'https://www.terrysjag.com/XJS%2092-96%20Engine%20Service.pdf',
      sourceType: 'manufacturer',
      notes:
        'Model-specific bulletin documents blue smoke after trailing-throttle deceleration and acceleration caused by oil drawn into the intake through the engine breather system.',
    },
    {
      publisher: 'FCA US LLC',
      title: '2017 Ram Truck Owner’s Manual — Diesel Supplement',
      url: 'https://static.nhtsa.gov/odi/inv/2019/INRD-PE19017-10043.pdf',
      sourceType: 'manufacturer',
      notes:
        'Explains diesel engine runaway from consuming lubricating oil, including through turbocharger oil leaks, and provides model-specific emergency instructions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Vehicle owner’s manual',
      description:
        'Provides the correct oil-level procedure, approved oil specification, warning-light instructions, and any model-specific diesel runaway guidance.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Engine-oil dipstick or electronic level display',
      description:
        'Use the vehicle’s installed measurement system exactly as directed to determine whether the oil is within its safe operating range.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'OBD diagnostic scan',
      description:
        'Reads stored engine and emissions codes when blue smoke appears with a check engine light, misfire, or power loss.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Engine oil-consumption and smoke diagnosis',
      description:
        'May include leak inspection, crankcase ventilation checks, turbocharger inspection, spark-plug examination, compression testing, and other vehicle-specific procedures.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'white-smoke-from-exhaust',
      anchorText: 'Is the exhaust smoke actually white vapor?',
      relationshipType: 'sibling',
    },
    {
      slug: 'water-dripping-from-exhaust',
      anchorText: 'Is clear water dripping from the tailpipe?',
      relationshipType: 'related',
    },
    {
      slug: 'low-engine-oil',
      anchorText: 'Is the engine-oil level below the safe range?',
      relationshipType: 'cause',
    },
    {
      slug: 'oil-pressure-warning-light',
      anchorText: 'Did the oil-pressure warning light come on?',
      relationshipType: 'escalation',
    },
    {
      slug: 'check-engine-light',
      anchorText: 'Is the check engine light on or flashing?',
      relationshipType: 'escalation',
    },
  ],
};
