import type { ProblemSeed } from '../types';

export const phoneBatteryDrainingFast: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'charging',
  slug: 'phone-battery-draining-fast',
  canonicalPath: '/technology/phones/charging/phone-battery-draining-fast/',
  name: 'Phone battery draining fast',
  eyebrow: 'Technology · Phones · Charging',

  h1: 'Can I Ignore My Phone Battery Draining Fast?',
  seoTitle: 'Phone Battery Draining Fast: What to Check and When to Stop',
  metaDescription:
    'Fast battery drain can come from apps, weak signal, updates, or battery aging. Learn when to wait, troubleshoot, replace the battery, or stop using the phone.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using my phone?',
  canIUseItLabel: 'Usually, if it stays cool and undamaged',

  shortAnswer:
    'Probably not as a long-term habit. Fast drain after an update or during heavy use can be temporary, but persistent idle drain, unexpected shutdowns, or a degraded-battery warning deserves attention. Stop using the phone if it is swelling, separating, smoking, hissing, or unusually hot.',

  whyItMattersHeading: 'Why Is My Phone Battery Dying So Fast?',
  whyItMatters: [
    'Fast drain is a symptom, not a diagnosis. The screen, navigation, camera, hotspot, poor signal, background activity, device setup, and a problem app can all increase power use. Battery settings can usually show whether the drop matches what you were doing or whether one app or system activity is out of proportion.',
    'Rechargeable batteries also lose capacity as they age, which means less use between charges and sometimes unexpected shutdowns. That is usually a service and reliability issue rather than an emergency. Physical deformation, rapid heating, odor, hissing, or smoke is different because lithium-ion battery damage can create overheating and fire hazards.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Battery-drain causes, update behavior, aging signs, physical battery hazards, and disposal were checked against Apple, Google, Samsung, CPSC, EPA, and USFA guidance.',
  disclaimer:
    "Menu names, battery-health features, and repair procedures vary by phone model and software version. Follow your device manufacturer's instructions, and do not open, puncture, bend, or press on a built-in battery.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'after-software-update',
      label: 'The drain started after a software update or device setup',
      shortDescription:
        'Battery settings show update, setup, restoration, or other system activity, and the phone remains cool and physically normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Temporary background work can explain it',
      resultBody:
        'Phones may continue indexing files, restoring data, optimizing apps, and completing update work after they become usable. Apple and Google both say this can temporarily affect battery life.',
      recommendedAction:
        'Check the battery screen for ongoing update or setup activity and use the phone normally while it finishes. Troubleshoot further if the unusual drain continues after that activity clears.',
    },
    {
      slug: 'heavy-use-or-weak-signal',
      label: 'It drains fast during heavy use or poor coverage',
      shortDescription:
        'The drop happens during gaming, video, navigation, camera use, hotspot use, high brightness, or weak cellular service.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The battery use matches the workload',
      resultBody:
        'Screen-intensive apps, constant location use, video, cellular data, and searching for a weak signal can use substantial power. Fast drain during those activities does not by itself show that the battery is defective.',
      recommendedAction:
        'Lower brightness, use strong Wi-Fi when available, turn off the hotspot when finished, and use a power-saving mode if you need more runtime.',
    },
    {
      slug: 'one-app-using-most-power',
      label: 'One app is using much more battery than everything else',
      shortDescription:
        'Battery usage points to one app, or the problem began after that app was installed or updated.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Treat it as an app problem first',
      resultBody:
        'A downloaded app can remain active in the background, use location, sync repeatedly, or encounter a software fault. The battery report is more useful than closing apps at random.',
      recommendedAction:
        'Update the app, review its background and location permissions, restrict background use where appropriate, or uninstall it if the drain began with that app.',
    },
    {
      slug: 'draining-while-idle',
      label: 'The battery drops quickly while the phone is untouched',
      shortDescription:
        'The screen is off and the phone is not being actively used, but the battery continues falling abnormally.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Idle drain needs a cause',
      resultBody:
        'Persistent drain with little screen use can come from background activity, poor signal, syncing, software trouble, or reduced battery capacity. It should not be accepted as normal without checking the usage report.',
      recommendedAction:
        'Restart the phone, install available system and app updates, check battery usage by app and system activity, and arrange support if no cause appears.',
    },
    {
      slug: 'battery-health-warning',
      label: 'The phone reports degraded battery health or recommends service',
      shortDescription:
        'Built-in battery health or diagnostics indicate reduced capacity, poor condition, or a need for replacement.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The battery is wearing out',
      resultBody:
        'Battery capacity falls with chemical age. A degraded-health message alone does not necessarily indicate a safety problem, but shorter runtime and performance issues will continue until the battery is replaced.',
      recommendedAction:
        'Back up the phone and plan battery service. You can usually keep using it if there is no swelling, case separation, abnormal heat, odor, hissing, leaking, or smoke.',
    },
    {
      slug: 'unexpected-shutdowns',
      label: 'The phone shuts down before the battery is empty',
      shortDescription:
        'It powers off unexpectedly despite showing remaining charge, especially under load or in cold conditions.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The battery may not be supplying peak power',
      resultBody:
        'An aged battery may still report remaining capacity but fail to provide the power the phone needs at that moment. Repeated shutdowns make the device unreliable and can indicate that replacement is due.',
      recommendedAction:
        'Check the built-in battery condition or diagnostics, back up important data, and arrange battery service rather than relying on frequent recharging.',
    },
    {
      slug: 'unusually-hot',
      label: 'The phone is unusually hot while idle or charging',
      shortDescription:
        'Heat is strong, concentrated, or recurring and cannot be explained by gaming, navigation, direct sun, or another demanding task.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop adding heat and power',
      resultBody:
        'Battery drain and heat often occur together during heavy workloads, but unexplained or escalating heat can also accompany a charging, software, or battery fault.',
      recommendedAction:
        'Unplug the charger, stop demanding use, move the phone away from external heat, and let it cool naturally. If abnormal heat returns during ordinary use, stop using it and arrange service.',
    },
    {
      slug: 'screen-or-back-lifting',
      label: 'The screen or back is lifting away from the frame',
      shortDescription:
        'A seam is opening, the phone has changed shape, or the display or rear cover is being pushed outward.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Assume battery swelling',
      resultBody:
        'Internal battery expansion can push the screen or back cover outward. Pressing the phone closed or opening it yourself can damage the battery further.',
      recommendedAction:
        'Stop using and charging the phone. Do not press, puncture, bend, or pry it open; contact the manufacturer or a qualified battery-service provider for handling instructions.',
    },
    {
      slug: 'smoke-hissing-or-odor',
      label: 'There is smoke, hissing, leaking, or a strong unusual odor',
      shortDescription:
        'The phone is rapidly heating, venting, making unusual noises, leaking, smoking, or showing flame.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'This is an active battery emergency',
      resultBody:
        'These are recognized signs of lithium-ion battery damage or thermal runaway, not ordinary battery drain.',
      recommendedAction:
        'Move away and evacuate if there is smoke or fire. Call 911 for an active fire, and do not try to keep using, charging, opening, or carrying the phone.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The phone becomes harder to rely on',
      description: 'You need to recharge more often, and the phone may die before the end of normal use.',
      severity: 'info',
      chainLabel: 'Shorter usable runtime',
    },
    {
      stageLabel: 'IF AN APP OR SYSTEM TASK IS RESPONSIBLE',
      title: 'Background work keeps consuming power',
      description:
        'The drain may continue until an update finishes, a restore completes, or the app is updated, restricted, or removed.',
      severity: 'caution',
      chainLabel: 'Ongoing software load',
    },
    {
      stageLabel: 'IF THE BATTERY HAS AGED',
      title: 'Capacity and peak performance decline',
      description:
        'The phone spends less time away from a charger and may begin shutting down when the battery cannot meet a sudden demand for power.',
      severity: 'warning',
      chainLabel: 'Reduced battery capability',
    },
    {
      stageLabel: 'IF SHUTDOWNS BECOME NORMAL',
      title: 'Important phone functions become unreliable',
      description:
        'Calls, navigation, tickets, alarms, authentication apps, and emergency communication can become unavailable when the phone powers off unexpectedly.',
      severity: 'warning',
      chainLabel: 'Reliability failure',
    },
    {
      stageLabel: 'IF PHYSICAL FAILURE SIGNS APPEAR',
      title: 'The issue changes from runtime to battery safety',
      description:
        'Fast drain alone does not mean a fire is developing. Bulging, case separation, rising heat, leaking, hissing, odor, smoke, or flame can indicate battery damage with overheating and fire hazards.',
      severity: 'danger',
      chainLabel: 'Damaged lithium-ion battery',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Drain began after an update, restore, or new-device setup',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Check for ongoing system activity and reassess after it finishes. Investigate if the drain remains abnormal.',
    },
    {
      situation: 'Drain occurs only during gaming, video, navigation, hotspot use, or poor coverage',
      ignoreAnswer: 'Yes, if the phone stays normal',
      severity: 'info',
      whatToDo: 'Reduce the workload, brightness, or cellular demand when you need longer battery life.',
    },
    {
      situation: 'One app clearly dominates the battery report',
      ignoreAnswer: 'Only while you correct it',
      severity: 'caution',
      whatToDo:
        'Update the app, limit unnecessary background activity and permissions, or uninstall it if the problem continues.',
    },
    {
      situation: 'The battery falls quickly while the phone is idle',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Restart, update the phone and apps, inspect battery usage, and seek support if nothing explains the drain.',
    },
    {
      situation: 'Battery health says degraded, but there is no heat or deformation',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Back up the phone and schedule battery replacement when practical. Watch for shutdowns or physical warning signs.',
    },
    {
      situation: 'The phone repeatedly shuts down with charge remaining',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check battery diagnostics and arrange service. Do not depend on the phone for critical tasks until it is reliable.',
    },
    {
      situation: 'The phone gets unusually hot during ordinary use or charging',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using or charging it, let it cool naturally, and arrange service if the heat returns.',
    },
    {
      situation: 'The case is lifting, or there is leaking, hissing, odor, smoke, or flame',
      ignoreAnswer: 'No — stop using it',
      severity: 'danger',
      whatToDo:
        'Stop use and charging. Do not press or open the device; move away and call 911 if there is smoke or fire.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check what used the battery',
      body:
        "Open the phone's Battery settings and compare app use, screen activity, background activity, signal conditions, and system tasks. Look for one item that does not match how you used the phone.",
    },
    {
      title: 'Restart and install available updates',
      body:
        'Restart the phone, then update its operating system and apps. A restart can end a stuck process, while app and system updates may correct known power-use problems.',
    },
    {
      title: 'Test without the obvious high-drain features',
      body:
        'Use moderate brightness, strong Wi-Fi where available, and no unnecessary hotspot, navigation, camera, or gaming activity. If drain becomes normal, the battery was responding to workload rather than failing.',
    },
    {
      title: "Run the phone's battery health or diagnostic check",
      body:
        "Use the manufacturer's built-in battery health, device care, or diagnostic feature if your model has one. A degraded result, service message, or repeated shutdown is a reason to arrange battery replacement.",
    },
    {
      title: 'Treat lifting or bulging as a separate battery problem',
      body:
        'If the screen or back cover is separating, stop using and charging the phone. Do not press it closed or attempt to remove an adhesive-mounted battery yourself.',
      destinationProblemSlug: 'swollen-phone-battery',
    },
    {
      title: 'Stop the charging session if abnormal heat develops',
      body:
        'Unplug the phone and let it cool away from external heat. Repeated or unexplained heat while charging needs troubleshooting before another normal charging session.',
      destinationProblemSlug: 'hot-phone-while-charging',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The screen or back cover is lifting',
      description:
        'Case separation or a new bulge can indicate an expanding battery. Do not press the phone back together.',
      severity: 'danger',
    },
    {
      title: 'The phone is leaking or changing shape',
      description:
        "Stop use and charging, avoid handling it more than necessary, and follow the manufacturer's damaged-battery instructions.",
      severity: 'danger',
    },
    {
      title: 'You hear hissing, popping, or other unusual battery noises',
      description: 'Move away from the device. These sounds can accompany venting or thermal runaway.',
      severity: 'danger',
    },
    {
      title: 'There is smoke, flame, or rapid heating',
      description:
        'Evacuate and call 911 for an active lithium-ion battery fire. Do not remain nearby trying to continue charging or using the phone.',
      severity: 'danger',
    },
    {
      title: 'It develops a strong chemical or burning odor',
      description:
        'Disconnect power only if that can be done safely, stop using the phone, and move away if heat, smoke, or venting develops.',
      severity: 'danger',
    },
    {
      title: 'It stays unusually hot during light use or while idle',
      description:
        'Ordinary heavy use can warm a phone, but persistent or unexplained heat with rapid drain needs prompt service.',
      severity: 'warning',
    },
    {
      title: 'It repeatedly shuts down with charge remaining',
      description:
        'The battery may no longer be able to provide the required power. Back up your data and arrange a battery check.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is fast battery drain normal after a phone update?',
      answer:
        'It can be temporary. Apple and Google say background update or optimization work may use extra power after an update. Check again after that activity has finished.',
    },
    {
      question: 'Why does my phone lose battery when I am not using it?',
      answer:
        'Background apps, syncing, weak signal, notifications, location activity, device setup, software faults, or an aging battery can use power while the screen is off. The battery usage report is the best place to start.',
    },
    {
      question: 'Can poor cellular signal drain a phone battery?',
      answer:
        'Yes. A phone can use more power while searching for or maintaining a weak cellular connection. Strong Wi-Fi or Airplane Mode in a no-service area can reduce that load when appropriate.',
    },
    {
      question: 'Can one bad app cause rapid battery drain?',
      answer:
        'Yes. Look for an app with unusually high background or total battery use. Update it, review its permissions, restrict unnecessary background activity, or uninstall it if the problem began with that app.',
    },
    {
      question: 'Does a degraded battery-health message mean the phone is dangerous?',
      answer:
        'Not by itself. It usually means reduced capacity or performance and a need to consider replacement. Swelling, separation, leaking, unusual heat, hissing, odor, or smoke changes it into a safety issue.',
    },
    {
      question: 'Should I close every app to save battery?',
      answer:
        'Focus on the app identified by the battery report rather than repeatedly closing everything. Restricting or removing the actual high-use app is more useful than guessing.',
    },
    {
      question: 'Will Battery Saver or Low Power Mode fix the problem?',
      answer:
        'It can extend remaining runtime by reducing background work and some features, but it does not identify an abnormal app or restore capacity lost through battery aging.',
    },
    {
      question: 'Should I factory-reset a phone with fast battery drain?',
      answer:
        'A factory reset is a last troubleshooting step, not the first. Update, restart, check battery usage, test problem apps, and back up your data before considering a reset.',
    },
    {
      question: 'Should I replace the battery or buy a new phone?',
      answer:
        "Battery replacement often makes sense when diagnostics show degradation and the rest of the phone still meets your needs. Compare the service cost with the phone's condition, support status, and remaining useful life.",
    },
    {
      question: 'Can I throw an old phone battery in the trash?',
      answer:
        'No. EPA says lithium-ion batteries and devices containing them should go to an appropriate battery or electronics recycler or household hazardous-waste collection point, not household trash or curbside recycling.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Batteries',
      url: 'https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Topics/Batteries',
      sourceType: 'government',
      notes:
        'Lists overheating, fire, electrical shock, and thermal burns among reported battery and charger hazards, including incidents involving cellular-phone lithium-ion batteries.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Used Lithium-Ion Batteries',
      url: 'https://www.epa.gov/recycle/used-lithium-ion-batteries',
      sourceType: 'government',
      notes:
        'Explains that cellphones contain rechargeable lithium-ion cells and directs consumers to battery or electronics recycling instead of household trash or municipal recycling.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Educating Your Community',
      url: 'https://www.usfa.fema.gov/a-z/lithium-ion-batteries/community-education/',
      sourceType: 'government',
      notes:
        'Identifies cracking, bulging, leaking, abnormal heat, odors, and noises as battery warning signs; advises unplugging a noticeably hot charging device and evacuating for a battery fire.',
    },
    {
      publisher: 'Apple',
      title: 'If the battery in your iPhone or iPad drains too quickly',
      url: 'https://support.apple.com/en-us/120745',
      sourceType: 'manufacturer',
      notes:
        'Covers battery usage reports, background activity, weak signal, post-update tasks, power-saving modes, and checking battery health.',
    },
    {
      publisher: 'Google',
      title: 'Fix battery drain problem',
      url: 'https://support.google.com/pixelphone/answer/6090599?hl=en',
      sourceType: 'manufacturer',
      notes:
        'States that post-update drain can be temporary and provides steps for battery diagnostics, app-usage review, background restrictions, updates, restarting, and advanced troubleshooting.',
    },
    {
      publisher: 'Samsung Electronics America',
      title: 'Determine when your Samsung Galaxy phone battery needs replacing',
      url: 'https://www.samsung.com/us/support/answer/ANS10013266/',
      sourceType: 'manufacturer',
      notes:
        'Identifies fast drain and unexpected shutdowns as possible battery-aging signs and directs users to built-in battery diagnostics and service options.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Built-in battery usage report',
      description:
        'Shows which apps, system activities, and screen use consumed power so you can distinguish heavy use from abnormal background drain.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Battery health or device diagnostics',
      description:
        'Manufacturer-provided checks can identify reduced battery condition, service recommendations, charging faults, and other hardware concerns.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Battery Saver or Low Power Mode',
      description:
        'Temporarily reduces power use while you troubleshoot or need the remaining charge to last longer.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer battery service or qualified repair provider',
      description:
        'Appropriate for degraded batteries, unexpected shutdowns, recurring abnormal heat, or a phone that cannot be opened safely by the user.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'swollen-phone-battery',
      anchorText: 'Is my phone battery swollen?',
      relationshipType: 'escalation',
    },
    {
      slug: 'hot-phone-while-charging',
      anchorText: 'Why is my phone hot while charging?',
      relationshipType: 'escalation',
    },
    {
      slug: 'phone-charges-slowly',
      anchorText: 'Why is my phone charging slowly?',
      relationshipType: 'sibling',
    },
    {
      slug: 'phone-not-charging',
      anchorText: 'What if my phone will not charge?',
      relationshipType: 'sibling',
    },
  ],
};
