import type { ProblemSeed } from '../types';

export const motorcyclePopsOnDeceleration: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'motorcycle-engine',
  slug: 'motorcycle-pops-on-deceleration',
  canonicalPath: '/motorcycles/engine/motorcycle-pops-on-deceleration/',
  name: 'Motorcycle pops on deceleration',
  eyebrow: 'Mobility · Motorcycles · Engine',

  h1: 'Can I Ignore a Motorcycle That Pops on Deceleration?',
  seoTitle: 'Motorcycle Deceleration Popping: Normal Crackle or Warning Sign?',
  metaDescription:
    'Light, familiar crackling on a closed throttle can be normal. Learn when new pops, loud bangs, leaks, poor running, or recent modifications need attention.',

  aliases:
    ['/motorcycles/engine/motorcycle-backfires-on-deceleration/', '/motorcycles/engine/motorcycle-decel-pop/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Usually, if it is light and the bike runs normally',

  shortAnswer:
    'A light, familiar crackle only during closed-throttle deceleration can be normal, especially if the motorcycle starts, idles, and pulls normally. Do not ignore new or worsening pops, gunshot-like bangs, warning lights, rough running, stalling, or signs of an exhaust leak.',

  whyItMattersHeading: 'Why Deceleration Popping Can Mean Different Things',
  whyItMatters: [
    'The sound usually comes from combustion occurring in the exhaust after you close the throttle. Some motorcycles intentionally vary their off-throttle acoustics, and a less restrictive muffler can make ordinary exhaust combustion easier to hear.',
    'The same symptom can also appear when an exhaust joint leaks, an intake or fuel problem disrupts the mixture, or a modification does not match the engine calibration. If the engine is actually misfiring or running poorly, unburned fuel can overheat and damage a catalytic converter.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Get Help If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed against EPA tampering guidance, BMW, Honda, Harley-Davidson and Indian manufacturer materials, and motorcycle-industry guidance on decel pop and afterfire.',
  disclaimer:
    'General motorcycle triage only. Exhaust sound alone cannot identify a failed part or confirm that an aftermarket configuration is safe, properly calibrated, or legal for street use.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'light-familiar-crackle',
      label: 'Light crackling that the motorcycle has always made',
      shortDescription:
        'The sound is a soft burble or series of small pops only after you close the throttle, with normal starting, idle, power, and warning lights.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This can be normal exhaust behavior',
      resultBody:
        'Consistent light deceleration pop without any driveability symptom is often an exhaust-sound characteristic rather than evidence of an engine failure.',
      recommendedAction:
        "Keep riding normally and note whether the sound changes. Use your owner's manual and the motorcycle's usual behavior as the baseline.",
    },
    {
      slug: 'documented-off-throttle-acoustics',
      label: "The owner's manual or riding-mode description identifies off-throttle acoustics",
      shortDescription:
        'The sound appears in a mode that intentionally changes engine response or exhaust acoustics and disappears or softens in another mode.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The sound may be an intended feature',
      resultBody:
        "Some motorcycles deliberately change off-throttle sound according to the selected riding mode. A repeatable sound that matches the model's documentation is not the same as a newly developed fault.",
      recommendedAction:
        'Confirm that the behavior matches the manual for your exact model and mode. Investigate it if the sound changes or other symptoms appear.',
    },
    {
      slug: 'started-after-exhaust-or-filter-change',
      label: 'Popping started after an exhaust, air filter, or intake change',
      shortDescription:
        'The motorcycle ran differently or became noticeably louder on deceleration immediately after new hardware was installed.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Recheck the installation and calibration',
      resultBody:
        'A freer-flowing exhaust can reveal sounds the stock muffler hid, but a leaking joint, incorrect assembly, or mismatched fuel calibration can also create new popping.',
      recommendedAction:
        'Check the instructions for the exact parts, confirm that every joint and intake connection is sealed, and verify that the installed calibration matches the complete configuration.',
    },
    {
      slug: 'catalyst-or-emissions-equipment-removed',
      label: 'The catalyst or other emissions equipment was removed or disabled',
      shortDescription:
        'Popping increased after a de-cat pipe, air-injection block-off, ECU change, or another emissions-related modification.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not treat this as a harmless sound change',
      resultBody:
        'Removing exhaust restrictions can make popping much more audible and can change how the engine and oxygen sensors behave. Removing or defeating required emissions controls can also violate federal law, with additional state rules varying by location.',
      recommendedAction:
        'Restore an emissions-compliant configuration or have the complete setup assessed using instructions approved for the motorcycle. Do not disable more equipment to hide the sound.',
    },
    {
      slug: 'exhaust-leak-signs',
      label: 'Popping comes with ticking, soot, discoloration, or a loose exhaust joint',
      shortDescription:
        'The exhaust is louder than before, a joint looks sooty, hardware is loose, or a ticking sound follows engine speed.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'An exhaust leak is likely enough to check',
      resultBody:
        'A leak can draw or release air at a joint, affect oxygen-sensor readings, increase noise, and reduce performance. Hot escaping gas can also damage nearby material.',
      recommendedAction:
        'Let the motorcycle cool fully, then inspect accessible joints and mounting hardware without starting disassembly. Have damaged gaskets, pipes, or fasteners repaired.',
    },
    {
      slug: 'poor-running-with-popping',
      label: 'Popping comes with hard starting, rough idle, hesitation, or stalling',
      shortDescription:
        'The motorcycle no longer runs normally, needs unusual throttle to stay running, hesitates, surges, loses power, or stalls.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as an engine-running problem',
      resultBody:
        'Popping combined with poor running can indicate misfire, an intake leak, incorrect fueling, ignition trouble, or another fault. Continued misfire can overheat a catalytic converter.',
      recommendedAction:
        'Stop riding if the bike stalls or cannot deliver predictable power. Arrange diagnosis rather than adjusting fuel settings or replacing parts by guesswork.',
    },
    {
      slug: 'recurring-loud-bangs',
      label: 'The exhaust makes new, gunshot-like bangs',
      shortDescription:
        'The sound is an isolated but violent bang or repeated explosive reports rather than a soft stream of crackles.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Loud afterfire needs investigation',
      resultBody:
        'Violent bangs are different from ordinary deceleration burble and can point to an exhaust leak, incorrect mixture, ignition problem, cam-timing issue, or an unsuitable tune.',
      recommendedAction:
        'Avoid hard riding and repeated attempts to reproduce the bang. Check for recent changes and arrange an exhaust and engine-management inspection.',
    },
    {
      slug: 'warning-light-or-overheating',
      label: 'A warning light or abnormal heat appears with the popping',
      shortDescription:
        'The check-engine light comes on, the temperature warning appears, or the exhaust and engine become unusually hot.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Follow the warning and stop riding',
      resultBody:
        'A warning light or abnormal heat makes ordinary exhaust acoustics an unsafe assumption. Misfire can raise exhaust temperature and damage emission-control components.',
      recommendedAction:
        "Pull over safely, turn the engine off, and follow the owner's manual for the displayed warning. Have the motorcycle diagnosed before normal riding resumes.",
    },
    {
      slug: 'smoke-fire-or-intake-backfire',
      label: 'There is smoke, fire, raw-fuel odor, or a pop through the intake',
      shortDescription:
        'Smoke or flame appears unexpectedly, fuel is leaking or strongly smelled, or the bang comes from the airbox or throttle-body area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop and move away from the motorcycle',
      resultBody:
        'An unexpected intake backfire can send flame toward the air cleaner, while leaking fuel, smoke, or fire is an immediate hazard rather than an exhaust-sound issue.',
      recommendedAction:
        'Shut the engine off if you can do so safely, move away, and call emergency services for smoke or fire. Do not restart a motorcycle with a suspected fuel leak.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The exhaust is burning residual gases',
      description:
        'Small, consistent pops may be no more than audible afterfire during closed-throttle operation, especially when the motorcycle otherwise runs normally.',
      severity: 'info',
      chainLabel: 'Light afterfire',
    },
    {
      stageLabel: 'IF A LEAK OR MODIFICATION IS INVOLVED',
      title: 'The sound can become louder and less predictable',
      description:
        'A leaking joint, open exhaust, incorrect assembly, or changed intake can alter exhaust airflow and make popping more noticeable.',
      severity: 'caution',
      chainLabel: 'Airflow changes',
    },
    {
      stageLabel: 'IF THE CALIBRATION OR MIXTURE IS WRONG',
      title: 'Driveability symptoms may appear',
      description:
        'Hesitation, surging, rough idle, difficult starting, excessive heat, or power loss can accompany an engine that is no longer operating correctly.',
      severity: 'warning',
      chainLabel: 'Poor running',
    },
    {
      stageLabel: 'IF THE ENGINE IS MISFIRING',
      title: 'The catalytic converter can overheat',
      description:
        'Unburned fuel entering a catalyst can create abnormal exhaust heat and damage the converter or surrounding motorcycle components.',
      severity: 'warning',
      chainLabel: 'Excess exhaust heat',
    },
    {
      stageLabel: 'IF STALLING, FUEL LEAKAGE, OR FIRE DEVELOPS',
      title: 'Riding can become unsafe',
      description:
        'Unpredictable power or stalling can interfere with traffic maneuvers, while leaking fuel, smoke, or fire requires immediate separation from the motorcycle.',
      severity: 'danger',
      chainLabel: 'Stop riding',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Light, familiar crackling with normal starting, idle, power, and temperature',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Continue riding and watch for any change in sound or behavior.',
    },
    {
      situation: "The exact owner's manual describes off-throttle or thrust acoustics for the selected mode",
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Confirm that the sound matches the documented operating mode and remains consistent.',
    },
    {
      situation: 'Popping became louder immediately after a slip-on or full exhaust was fitted',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Recheck joints, gaskets, mounting hardware, part compatibility, and any required model-specific calibration.',
    },
    {
      situation: 'Popping started after an air filter, intake, ECU, or fuel-controller change',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Verify the complete configuration and map rather than assuming every aftermarket part works with the existing calibration.',
    },
    {
      situation: 'A joint ticks, leaks, moves, or has soot or scorch marks',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Let the exhaust cool and arrange repair of the leaking or damaged connection.',
    },
    {
      situation: 'The motorcycle is hard to start, idles roughly, hesitates, or stalls',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Minimize operation and arrange engine and fuel-system diagnosis. Stop riding if power delivery becomes unpredictable.',
    },
    {
      situation: 'New gunshot-like bangs occur repeatedly',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Avoid hard riding and have the exhaust, intake, ignition, and calibration checked.',
    },
    {
      situation: 'A warning light, smoke, fire, fuel leak, or intake backfire appears',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop safely and turn the engine off. Move away and call emergency services if there is smoke, fire, or leaking fuel.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: "Compare the sound with the motorcycle's normal baseline",
      body:
        "Note whether it is a light series of crackles or a violent bang, whether it occurs only with the throttle closed, and whether a riding mode changes it. Check the owner's manual for model-specific exhaust behavior.",
    },
    {
      title: 'Inspect the exhaust only after it has cooled',
      body:
        'Look for loose fasteners, separated joints, soot, cracks, discoloration, or contact with nearby parts. Do not touch or work around a hot exhaust, and do not use an open flame to search for leaks.',
      destinationProblemSlug: 'exhaust-leak',
    },
    {
      title: 'Recheck every recent modification',
      body:
        'Confirm part numbers, gasket placement, intake connections, oxygen-sensor installation, and the required calibration for the complete setup. Contact the installer if the symptom began immediately after their work.',
    },
    {
      title: 'Do not tune around an unidentified fault',
      body:
        'Randomly adding fuel or disabling air-injection and catalyst controls can hide a symptom without fixing a leak, ignition fault, or installation problem. Diagnose the mechanical condition first.',
    },
    {
      title: 'Arrange diagnosis when the motorcycle also runs poorly',
      body:
        'A motorcycle-compatible diagnostic system can identify stored faults, but codes and sound alone do not prove which part failed. Have the intake, exhaust, fuel, ignition, and calibration checked together.',
      destinationProblemSlug: 'motorcycle-idles-rough',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The engine warning or temperature light appears',
      description:
        "Follow the motorcycle's warning display and owner's manual. Do not assume the light is unrelated to the new exhaust noise.",
      severity: 'warning',
    },
    {
      title: 'The motorcycle stalls or will not idle reliably',
      description: 'Unpredictable stalling can make intersections, turns, and low-speed maneuvering unsafe.',
      severity: 'danger',
    },
    {
      title: 'Acceleration becomes weak or unpredictable',
      description:
        'Major hesitation, surging, or loss of power means the problem is affecting more than exhaust sound.',
      severity: 'warning',
    },
    {
      title: 'The exhaust produces recurring explosive bangs',
      description:
        'Gunshot-like reports are not ordinary light deceleration crackle and deserve prompt diagnosis.',
      severity: 'warning',
    },
    {
      title: 'The bang or flame comes from the intake',
      description:
        'A true intake backfire is different from exhaust afterfire and can direct flame toward the air cleaner.',
      severity: 'danger',
    },
    {
      title: 'You smell raw fuel or see a fuel leak',
      description: 'Turn the engine off, keep ignition sources away, and do not restart the motorcycle.',
      severity: 'danger',
    },
    {
      title: 'Smoke, fire, or severe burning odor appears',
      description:
        'Move away from the motorcycle and call emergency services. Do not continue troubleshooting beside a burning vehicle.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a little motorcycle exhaust popping on deceleration normal?',
      answer:
        'It can be. Light, familiar crackling only with the throttle closed is often normal when the motorcycle starts, idles, accelerates, and maintains temperature normally.',
    },
    {
      question: 'Does deceleration popping always mean the engine is running lean?',
      answer:
        'No. Lean calibration is one possibility, but exhaust leaks, intake leaks, air-injection systems, rich combustion, ignition faults, and intentional exhaust acoustics can produce similar sounds.',
    },
    {
      question: 'Why did the popping become louder after installing an aftermarket exhaust?',
      answer:
        'A less restrictive muffler can reveal afterfire that the stock exhaust concealed. Installation leaks, different airflow, and a calibration mismatch can also add new popping, so check the exact system instructions.',
    },
    {
      question: 'Does every slip-on exhaust require an ECU tune?',
      answer:
        'No universal rule applies. Some slip-ons are designed for the stock calibration, while full systems, intake changes, or particular manufacturer kits may require a matching map. Follow the instructions for the exact motorcycle and parts.',
    },
    {
      question: 'Can an exhaust gasket leak cause popping?',
      answer:
        'Yes. Air entering or exhaust escaping at a joint can contribute to popping, ticking, soot, increased noise, misleading oxygen-sensor readings, and reduced performance.',
    },
    {
      question: 'Will ordinary deceleration popping damage the engine?',
      answer:
        'Light, intended deceleration crackle by itself is generally not damaging. Actual misfire or poor running is different because unburned fuel can overheat a catalytic converter.',
    },
    {
      question: 'What is the difference between decel pop and a backfire?',
      answer:
        'Decel pop is usually a softer series of burbles or snaps from the exhaust. A violent exhaust bang is afterfire commonly called a backfire, while a true backfire travels through the intake.',
    },
    {
      question: 'Can removing the catalytic converter cause more popping?',
      answer:
        'It can make popping more audible and alter exhaust behavior. Removing required emissions equipment can also constitute illegal tampering, so a de-cat is not an appropriate troubleshooting fix for a street motorcycle.',
    },
    {
      question: 'Should I block the PAIR or air-injection system to stop the popping?',
      answer:
        "Not as a first repair. The system may be part of the motorcycle's emissions controls, and disabling it can create legal and diagnostic problems. Check for leaks, faults, and correct calibration instead.",
    },
    {
      question: 'Can I ride to a repair shop with deceleration popping?',
      answer:
        'Usually, if the sound is light, the bike runs normally, there are no warnings or leaks, and power remains predictable. Stop riding for rough running, stalling, major power loss, abnormal heat, smoke, or fuel odor.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'EPA Fact Sheet re Aftermarket Defeat Devices and Tampering',
      url: 'https://www.epa.gov/enforcement/epa-fact-sheet-re-aftermarket-defeat-devices-and-tampering',
      sourceType: 'government',
      notes:
        'Explains Clean Air Act prohibitions involving parts or modifications that bypass, defeat, remove, or render required motor-vehicle emissions controls inoperative.',
    },
    {
      publisher: 'BMW Motorrad',
      title: "Rider's Manual S 1000 XR",
      url: 'https://manuals.bmw-motorrad.com/manuals/BA-Extern/IN/BA-INTERNET-COM/PDF/S_0D03_RM_0317_01.pdf',
      sourceType: 'manufacturer',
      notes:
        'Shows that the covered motorcycle intentionally switches “thrust acoustics” on or off according to riding mode, demonstrating a model-specific designed off-throttle sound feature.',
    },
    {
      publisher: 'Honda',
      title: "2010 Fury Owner's Manual",
      url: 'https://owners.honda.com/assets/OWNERLINK/Model/own_man/powersports/motorcycle/2010/Fury.pdf',
      sourceType: 'manufacturer',
      notes:
        'States that a poorly running engine can overheat and damage the catalytic converter and instructs riders to stop if the engine is misfiring, backfiring, stalling, or otherwise not running properly.',
    },
    {
      publisher: 'Indian Motorcycle',
      title: 'Misfire and Runability Diagnostics Team Tip I-22-09-01',
      url: 'https://static.nhtsa.gov/odi/tsbs/2025/MC-11019371-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'Covers exhaust leaks, oxygen-sensor effects, reduced performance, heat damage, aftermarket configurations, correct calibration, and changes caused by modified exhausts or catalyst deletion on the listed Indian models.',
    },
    {
      publisher: 'Harley-Davidson',
      title: 'DYNOJET Kit Instructions J03137',
      url: 'https://serviceinfo.harley-davidson.com/sip/service/document/2120',
      sourceType: 'manufacturer',
      notes:
        'The model-specific troubleshooting guide directs users to check exhaust and intake leaks when a motorcycle runs normally except for popping during deceleration, before changing mixture settings.',
    },
    {
      publisher: 'RevZilla Common Tread',
      title: 'Decel Pop and Backfiring: What It Means for Your Motorcycle',
      url: 'https://www.revzilla.com/common-tread/decel-pop-vs-backfires-whats-the-difference-and-does-it-matter',
      sourceType: 'industry',
      notes:
        'Distinguishes soft deceleration pop from loud afterfire, explains why open exhausts make popping easier to hear, and identifies leaks, mixture, fuel, ignition, and timing faults as concerns when the sound becomes violent or accompanies poor running.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Exact motorcycle owner's manual",
      description:
        'Use it to identify model-specific riding-mode acoustics, warning-light instructions, approved modifications, and procedures for stopping after a malfunction.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Flashlight and inspection mirror',
      description:
        'Useful for checking cooled exhaust joints, mounting points, soot, cracks, and nearby heat damage without placing your hands near hidden sharp or hot parts.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Motorcycle engine and exhaust diagnostic service',
      description:
        'Appropriate when popping is new, loud, or paired with rough running, hard starting, warning lights, power loss, or evidence of a leak.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Model-specific ECU calibration verification',
      description:
        'Confirms that an installed exhaust, intake, stage kit, or fuel controller uses software intended for the exact motorcycle and hardware combination.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'exhaust-leak', anchorText: 'Could this be a motorcycle exhaust leak?', relationshipType: 'cause' },
    {
      slug: 'motorcycle-idles-rough',
      anchorText: 'Why is my motorcycle idling rough?',
      relationshipType: 'escalation',
    },
    {
      slug: 'motorcycle-hard-to-start-cold',
      anchorText: 'Why is my motorcycle hard to start cold?',
      relationshipType: 'related',
    },
    {
      slug: 'motorcycle-running-hot',
      anchorText: 'Why is my motorcycle running unusually hot?',
      relationshipType: 'escalation',
    },
  ],
};
