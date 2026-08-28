import type { ProblemSeed } from '../types';

/**
 * Cars > Engine > High RPM After a Cold Start.
 *
 * Every factual claim below traces to one of the three sources at the
 * bottom of this file. The problem definition is specifically a commanded
 * idle that is higher than normal warm idle just after a cold start, with
 * no accelerator input, that comes down as the engine warms — not a driver
 * pressing the accelerator, and not hybrid engine start/stop behavior,
 * which is controlled differently and is out of scope here.
 *
 * Main editorial distinction: a temporarily elevated commanded idle after a
 * cold start can be normal. Idle that remains abnormally high after
 * warm-up, or becomes unstable, is a different branch and is never
 * described here as a later stage of the same normal process.
 */
export const highRpmAfterColdStart: ProblemSeed = {
  systemSlug: 'engine',
  slug: 'high-rpm-after-cold-start',
  canonicalPath: '/cars/engine/high-rpm-after-cold-start/',
  name: 'High RPM After a Cold Start',
  eyebrow: 'Cars · Engine',

  h1: 'Can I Ignore High RPM After a Cold Start?',
  seoTitle: 'High Idle RPM on a Cold Start: Is It Normal? | Can I Ignore It',
  metaDescription:
    'High idle RPM just after a cold start is often normal if it drops as the engine warms. See when you can ignore it and when high idle needs attention.',

  status: 'published',
  indexable: true,

  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Yes, if the RPM settles normally',

  shortAnswer:
    "Yes. Many cars idle faster right after a cold start, and the RPM should gradually fall as the engine warms — there's no single RPM or time limit that works for every vehicle. If the idle stays high once the engine is warm, surges up and down, triggers a warning light, or the vehicle behaves oddly, that's no longer normal cold-start behavior.",

  whyItMattersHeading: 'Why Is the RPM Higher After a Cold Start?',
  whyItMatters: [
    "Modern engine-management systems actively control idle speed instead of holding one fixed RPM. Toyota specifically identifies 'cold start idle-up' as normal: idle speed increases just after a cold start, then decreases as the engine warms.",
    "A cold engine has different combustion and operating needs than a warm one, so the control system may command a higher idle while things stabilize. On some vehicles, that elevated idle also helps bring the catalytic converter up to operating temperature faster — part of the emission control performance federal rules require automakers to monitor.",
    'The exact RPM varies by vehicle and temperature, so a normal cold start should end with the idle settling as the engine warms. If it stays high when warm, repeatedly hunts or surges, triggers a warning light, or affects vehicle movement, have it checked.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Ignoring It If You Notice:',

  lastReviewedAt: new Date('2026-08-27T00:00:00Z'),
  reviewScope:
    'Normal cold-start elevated idle, catalyst warm-up behavior, gear-engagement caution and warning signs that distinguish normal cold-start idle from abnormal persistent high idle',
  disclaimer:
    "General automotive triage guidance only. Normal cold-start idle speed and duration vary by engine, vehicle, outside temperature and manufacturer calibration. Do not use a universal RPM or time threshold to diagnose a fault. Follow the owner's manual and vehicle-specific service information if the engine remains at an abnormally high idle after warm-up, a warning light appears or the vehicle behaves unpredictably.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'high-then-gradually-drops',
      label: 'The RPM starts high, then gradually comes down',
      shortDescription: 'This happens after a cold start and the engine otherwise runs normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'IGNORE IT',
      resultBody:
        'This is the classic normal cold-start pattern. Toyota describes increased idle speed just after a cold start as normal, and says it decreases as the engine warms.',
      recommendedAction:
        "No repair is needed if the RPM drops normally as the engine warms. Drive normally and avoid unnecessary revving while it's cold.",
    },
    {
      slug: 'higher-on-colder-days',
      label: 'The RPM is higher or stays elevated longer on colder days',
      shortDescription: 'It still gradually drops as the engine warms and there are no other symptoms.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'USUALLY NORMAL',
      resultBody:
        "Cold-start behavior can vary with engine temperature, outside temperature and the vehicle's control strategy. A colder engine may remain in its cold-start operating strategy longer than it would in warm conditions.",
      recommendedAction:
        'If the RPM steadily falls toward the normal warm idle and the engine behaves normally, there is usually nothing to fix.',
    },
    {
      slug: 'higher-idle-catalyst-warmup',
      label: 'The engine sounds louder and idles faster only just after startup',
      shortDescription: 'The behavior is repeatable when cold and disappears after warm-up.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'THIS CAN BE INTENTIONAL',
      resultBody:
        'Some vehicles intentionally raise idle speed to bring the catalytic converter up to operating temperature faster after a cold start.',
      recommendedAction:
        "Don't treat the sound or RPM alone as a fault if it's limited to cold start and settles normally.",
    },
    {
      slug: 'stays-high-when-warm',
      label: 'The RPM stays unusually high after the engine is warm',
      shortDescription: "It does not return toward the vehicle's normal warm idle.",
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "THIS ISN'T THE NORMAL COLD-START PATTERN",
      resultBody:
        "If the RPM is still unusually high once the engine is warm, have it diagnosed. Standard OBD terminology even has a code for it — P0507, idle speed higher than the control system expects.",
      recommendedAction: 'Arrange diagnosis if the engine remains abnormally high at idle after warm-up.',
    },
    {
      slug: 'rpm-hunts-or-surges',
      label: 'The RPM repeatedly rises and falls on its own',
      shortDescription: "The idle hunts, surges or feels unstable instead of smoothly settling.",
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET IT CHECKED',
      resultBody:
        'Repeated surging or hunting is not typical cold-start behavior and should be checked if it continues.',
      recommendedAction:
        'Have the vehicle diagnosed if the idle repeatedly surges or hunts, especially after warm-up or together with a warning light.',
    },
    {
      slug: 'check-engine-light',
      label: 'A check-engine light appears with the high idle',
      shortDescription: 'The vehicle is reporting a fault in addition to the RPM change.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "READ THE FAULT, DON'T GUESS",
      resultBody:
        "If the check-engine light comes on, read the stored codes. They can point to an idle-control fault that a tachometer reading alone can't identify.",
      recommendedAction: "Have the diagnostic codes read and follow the manufacturer's service guidance.",
    },
    {
      slug: 'hard-engagement-creep',
      label: 'The car jumps or creeps unusually hard when I select Drive or Reverse',
      shortDescription: 'The elevated idle noticeably affects vehicle movement.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'USE EXTRA CAUTION',
      resultBody:
        "Nissan owner guidance warns that higher idle when cold requires extra caution when shifting into gear. Some extra creep is expected, but unusually strong movement shouldn't be ignored.",
      recommendedAction:
        'Keep the brake pedal firmly applied while selecting gear. If the engagement feels unusually harsh, the vehicle tries to move aggressively or the high idle continues after warm-up, have it inspected.',
    },
    {
      slug: 'rpm-keeps-rising',
      label: 'The RPM keeps climbing even though I am not pressing the accelerator',
      shortDescription: 'The engine does not settle into a stable elevated idle.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: "DON'T TREAT THIS AS NORMAL",
      resultBody:
        'Normal cold-start idle stays controlled and comes down as the engine warms. An engine that keeps revving upward or behaves unpredictably needs attention right away.',
      recommendedAction:
        'Keep the vehicle securely stopped. If the engine speed or vehicle movement feels uncontrolled or unsafe, shut the vehicle down when safe and arrange professional diagnosis.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  // Two branches, not one chain: the first three stages are the ordinary
  // cold-start-idle story and end with the RPM returning to normal. The
  // last two are a SEPARATE branch — a persistent or unstable idle fault —
  // not a continuation of it.
  consequences: [
    {
      stageLabel: 'COLD START',
      title: 'The control system commands a higher idle',
      description:
        'Many engines intentionally idle faster when cold. This helps the engine operate stably during the cold-start period.',
      severity: 'info',
      chainLabel: 'Elevated idle',
    },
    {
      stageLabel: 'ON SOME VEHICLES',
      title: 'Higher idle also helps warm the emissions system',
      description: 'On some vehicles, higher idle also helps bring the catalytic converter up to temperature faster.',
      severity: 'info',
      chainLabel: 'Warm-up strategy',
    },
    {
      stageLabel: 'AS THE ENGINE WARMS',
      title: 'The idle speed comes down',
      description: 'This is the pattern Toyota and other manufacturers describe as normal cold-start idle.',
      severity: 'info',
      chainLabel: 'Normal idle returns',
    },
    {
      stageLabel: 'WHEN IT MAY NOT BE NORMAL',
      title: 'The RPM stays too high or becomes unstable',
      description: 'Persistent warm high idle, hunting or a warning light means something else is going on and needs diagnosis.',
      severity: 'warning',
      chainLabel: 'Abnormal idle',
    },
    {
      stageLabel: 'IF THAT FAULT IS IGNORED',
      title: 'Driveability and gear engagement can become a problem',
      description:
        'Excessive idle speed can increase vehicle creep or make engagement into a driving gear more abrupt. If the high idle continues when warm, the cause needs to be diagnosed.',
      severity: 'danger',
      chainLabel: 'Diagnose the cause',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'High idle immediately after a cold start',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: "Watch whether the RPM begins moving toward the vehicle's normal warm idle as the engine warms.",
    },
    {
      situation: 'High idle lasts longer on a colder day but is steadily decreasing',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'If the RPM is steadily falling as the engine warms, the behavior is usually normal.',
    },
    {
      situation: 'RPM settles normally once the engine warms',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'No action is needed for the cold-start high idle itself.',
    },
    {
      situation: 'RPM remains unusually high after the engine is warm',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange diagnosis because this no longer matches normal cold-start idle behavior.',
    },
    {
      situation: 'RPM repeatedly surges or hunts',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the idle-control behavior diagnosed, especially if it continues after warm-up.',
    },
    {
      situation: 'Check-engine light appears',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: "Read the stored diagnostic codes and follow the manufacturer's service guidance.",
    },
    {
      situation: 'Vehicle movement or engine speed feels uncontrolled',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Keep the vehicle securely stopped and stop driving normally until the abnormal behavior is understood.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Watch what happens as the engine warms',
      body: "Watch the RPM as the engine warms. It should gradually move toward the vehicle's normal warm idle — manufacturers use different idle targets and cold-start strategies, so don't judge it from a single number.",
    },
    {
      title: 'Keep the brake applied when selecting gear',
      body: 'A cold engine can idle faster than a warm one. Owner guidance warns this can increase vehicle movement when you select Drive or Reverse, so keep the brake pedal firmly applied during the shift.',
    },
    {
      title: 'Do not rev the engine just to warm it faster',
      body: "Do not repeatedly rev the engine to warm it faster. Follow any cold-weather or warm-up instructions in the owner's manual.",
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    { title: 'The idle stays unusually high after the engine is warm', severity: 'warning' },
    { title: 'The RPM repeatedly surges or hunts', severity: 'warning' },
    { title: 'A check-engine or other engine warning appears', severity: 'warning' },
    { title: 'The vehicle engages Drive or Reverse unusually harshly', severity: 'warning' },
    { title: 'The engine speed keeps rising without accelerator input', severity: 'danger' },
    { title: 'The vehicle moves in a way that feels difficult to control', severity: 'danger' },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is high RPM normal when I first start a cold car?',
      answer:
        'Yes, on many vehicles — Toyota describes increased idle right after a cold start as normal, with RPM decreasing as the engine warms.',
    },
    {
      question: 'Why does my car rev higher when it is cold?',
      answer:
        'The engine-management system can intentionally raise idle during cold operation to help the engine run smoothly, and on some vehicles it also speeds up catalytic-converter warm-up.',
    },
    {
      question: 'What RPM is too high on a cold start?',
      answer:
        "There is no universal RPM limit. Normal cold-start speed varies by vehicle, temperature and calibration, so compare it with your car's usual cold-start behavior.",
    },
    {
      question: 'How long should high idle last after a cold start?',
      answer:
        "There's no universal time limit that applies to every vehicle. The RPM should trend downward as the engine warms, not stay high indefinitely.",
    },
    {
      question: 'Why is the cold-start RPM higher on some mornings than others?',
      answer:
        'The engine begins each start under different temperature and operating conditions. Colder temperatures can change the cold-start strategy, so the initial RPM and the time it takes to settle may vary.',
    },
    {
      question: 'Can I put the car in Drive while the RPM is still high?',
      answer:
        'Yes, but use the brake carefully. Nissan owner guidance warns that higher idle when cold calls for extra caution when shifting into gear, since the vehicle may creep more than at normal warm idle.',
    },
    {
      question: 'Should I wait until the RPM drops before driving?',
      answer:
        'Follow the owner’s manual for your vehicle. A temporarily elevated cold-start idle does not automatically mean you need to wait for a specific RPM before driving.',
    },
    {
      question: 'What if the RPM is still high after the engine is warm?',
      answer:
        "Toyota's description of normal cold-start idle has the RPM decreasing as the engine warms, not staying elevated. If it stays unusually high after warm-up, have it diagnosed.",
    },
    {
      question: 'What does P0507 mean?',
      answer:
        "P0507 is the standardized code for an idle-control system whose RPM is higher than expected. It doesn't tell you which component failed — diagnosis still depends on the specific vehicle.",
    },
    {
      question: 'Does high cold-start RPM mean the throttle is stuck?',
      answer:
        'Usually not if the RPM rises only when cold and settles normally. A persistent high idle can have several causes, so the tachometer alone cannot identify a failed throttle component.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  // Deliberately empty. No product is required for normal cold-start high
  // idle — see docs/content-architecture.md §6. ProblemPage / UsefulResources
  // both hide Block 7 entirely when this array is empty; no placeholder renders.
  resources: [],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Toyota Motor North America',
      title: 'Why is My Car Doing This?',
      url: 'https://pressroom.toyota.com/why-is-my-car-doing-this/',
      sourceType: 'manufacturer',
      notes:
        "Primary source for the main verdict. Under 'Cold start idle-up', Toyota states that increased idle speed just after a cold start is a normal condition and that idle speed reduces as the engine warms.",
    },
    {
      publisher: 'Nissan North America',
      title: '2022 Nissan Rogue Owner’s Manual',
      url: 'https://www.nissanusa.com/content/dam/Nissan/us/manuals-and-guides/rogue/2022/2022-nissan-rogue-owner-manual.pdf',
      sourceType: 'manufacturer',
      notes:
        'Owner guidance stating that cold engine idle speed is high and that extra caution must be used when shifting into a driving position immediately after starting the engine. Cited only for that gear-engagement caution — not as a universal RPM or duration figure, and not extended to other manufacturers.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Final Rule: Onboard Diagnostic Regulations for Light-Duty Vehicles and Light-Duty Trucks',
      url: 'https://www.epa.gov/regulations-emissions-vehicles-and-engines/final-rule-control-air-pollution-motor-vehicles-and-new',
      sourceType: 'regulation',
      notes:
        'Confirms that on-board diagnostic (OBD) monitoring of emission-control system performance — including the malfunction thresholds that trigger a warning light — is a federal regulatory requirement, not an invented detail.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'rough-idle', anchorText: 'Can I ignore a rough idle?', relationshipType: 'related' },
    {
      slug: 'check-engine-light',
      anchorText: 'Can I ignore the check-engine light?',
      relationshipType: 'follow_up',
    },
    { slug: 'engine-rpm-surging', anchorText: 'Can I ignore engine RPM surging?', relationshipType: 'related' },
  ],
};
