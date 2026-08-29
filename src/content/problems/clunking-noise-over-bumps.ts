import type { ProblemSeed } from '../types';

export const clunkingNoiseOverBumps: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'suspension',
  slug: 'clunking-noise-over-bumps',
  canonicalPath: '/cars/suspension/clunking-noise-over-bumps/',
  name: 'Clunking Noise Over Bumps',
  eyebrow: 'Mobility · Cars · Suspension',

  h1: 'Can I Ignore a Clunking Noise Over Bumps?',
  seoTitle: 'Car Clunks Over Bumps: When to Keep Driving and When to Stop',
  metaDescription:
    'A clunk over bumps can come from a loose mount, sway bar link, bushing, ball joint or even cargo. Here is when to drive carefully and when to stop.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep driving?',
  canIUseItLabel: 'Usually briefly if the car still handles normally',

  shortAnswer:
    'Probably not. A clunk over bumps often means something has play or is moving where it should not, and sound alone cannot tell you whether the cause is a minor loose item or a safety-relevant suspension or steering part. If steering, braking, wheel position or vehicle control changes, stop driving and have the car inspected.',

  whyItMattersHeading: 'Why a Clunk Over Bumps Matters',
  whyItMatters: [
    'A bump forces the suspension through its travel, so looseness in a mount, joint, bushing or link can show up as a knock that is quiet on smooth pavement. Monroe identifies worn shock or strut mounts and loose mounting hardware as causes of clunking over bumps, while Delphi lists control arms, bushings, ball joints and tie-rod ends among possible sources of knocking or clunking.',
    'The sound does not tell you how serious the fault is. A loose item in the cargo area may be harmless once secured, while a worn ball joint can also clunk over bumps and may affect steering as wear progresses. That is why the deciding factor is not volume alone but whether the car still tracks, steers, settles and sits normally.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Get Help If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Suspension clunks, steering red flags, shock and strut symptoms, ball-joint signs, post-repair hardware issues and recall checks were compared against NHTSA, Monroe, Delphi and MOOG guidance.',
  disclaimer:
    'General automotive triage guidance. A clunk cannot identify the failed part by sound alone. If steering, braking, wheel position or vehicle control changes, stop driving and arrange inspection.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'mild-clunk-normal-handling',
      label: 'A small clunk over bumps but the car handles normally',
      shortDescription:
        'The noise is repeatable on bumps, but steering, braking and ride height feel unchanged.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Drive carefully, then get it checked',
      resultBody:
        'A bump-only clunk can come from worn or loose suspension hardware, links, bushings or joints. Normal handling lowers the immediate concern, but it does not identify the source.',
      recommendedAction: 'Avoid rough driving and arrange a suspension and steering inspection soon.',
    },
    {
      slug: 'clunk-after-pothole',
      label: 'The clunk started after a hard pothole or curb impact',
      shortDescription:
        'The noise is new after a sharp road impact, but the car still appears to track normally.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the new noise as impact damage until checked',
      resultBody:
        'A hard impact can expose or worsen looseness in suspension hardware, joints, mounts, springs, wheels or tires. A new clunk after an impact deserves a visual check and prompt inspection.',
      recommendedAction:
        'Park safely and look for tire damage, a changed wheel position, sagging or anything hanging loose. If none is obvious and the car feels normal, drive cautiously to inspection.',
    },
    {
      slug: 'clunk-with-loose-steering',
      label: 'The clunk comes with loose, wandering or changed steering',
      shortDescription: 'The wheel feels vague, the car wanders, pulls or changes direction more than usual.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop treating this as a noise problem',
      resultBody:
        'Delphi lists loose steering, drifting over bumps and clunking among symptoms associated with worn steering and suspension parts. Ball-joint wear can also cause clunking and steering changes.',
      recommendedAction:
        'Stop normal driving. If the car feels unstable or difficult to control, pull over safely and arrange roadside assistance or inspection.',
    },
    {
      slug: 'clunk-with-bouncing',
      label: 'The car keeps bouncing after bumps',
      shortDescription:
        'The clunk is paired with extra body movement instead of settling after the road input.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The damping side of the suspension needs attention',
      resultBody:
        'Continued bouncing after a bump is a recognized sign of worn shocks or struts. Reduced damping can also affect stability, steering precision and tire contact.',
      recommendedAction:
        'Keep driving to a minimum and arrange inspection before treating the noise as harmless.',
    },
    {
      slug: 'clunk-after-suspension-work',
      label: 'The clunk started after shock, strut or suspension work',
      shortDescription: 'The noise appeared after parts were replaced or disturbed.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Have the installation rechecked',
      resultBody:
        'Monroe notes that metallic clunking after shock or strut replacement can come from loose or worn mounting hardware or an upper mounting plate that needs attention.',
      recommendedAction:
        'Return to the shop or installer for a mounting and hardware check. Do not assume a new part itself is the only possible cause.',
    },
    {
      slug: 'clunk-with-sagging',
      label: 'One corner sits lower or the wheel looks out of position',
      shortDescription:
        'The noise is paired with visible sagging, a changed wheel angle or obvious suspension damage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not keep driving normally',
      resultBody:
        'Visible ride-height or wheel-position changes can indicate a damaged spring, joint, arm or mounting point. The combination of noise and visible geometry change needs inspection before more driving.',
      recommendedAction:
        'Park on a safe level surface and arrange roadside assistance or inspection rather than testing the car on the road.',
    },
    {
      slug: 'clunk-with-scraping',
      label: 'The clunk is followed by scraping or tire rubbing',
      shortDescription:
        'You hear contact noise or see signs that the tire or another part is touching something.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Something may be moving far enough to make contact',
      resultBody:
        'Scraping or tire rub means the problem is no longer just an isolated sound. A shifted or damaged component can interfere with the wheel or nearby parts.',
      recommendedAction:
        'Stop driving when safe and inspect from outside the vehicle. Do not crawl under a car supported only by a jack.',
    },
    {
      slug: 'clunk-from-loose-cargo',
      label: 'The clunk is clearly from loose cargo, a jack or the spare-tire area',
      shortDescription:
        'The sound disappears after the item is secured and the car has no steering or ride symptoms.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'You found the harmless version',
      resultBody:
        'Loose items can imitate suspension noise because bumps make them shift at the same moment the suspension moves. If securing the item completely removes the clunk and nothing else feels wrong, there may be no suspension fault to chase.',
      recommendedAction: 'Secure the item properly and listen for the noise again during normal driving.',
    },
    {
      slug: 'clunk-and-turning-noise',
      label: 'The clunk also appears while turning',
      shortDescription: 'You hear knocking or clunking during steering as well as over uneven pavement.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Steering-related parts move higher on the list',
      resultBody:
        'Delphi specifically lists ball joints and tie-rod ends among components to check when noises occur while turning. A steering-related symptom makes prompt inspection more important.',
      recommendedAction:
        'Limit driving and arrange a steering and suspension inspection. Stop if steering effort, direction or control changes.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Something moves when the suspension is loaded',
      description:
        'The bump makes the suspension travel. If a mount, link, bushing, joint or nearby part has play, that movement can produce the clunk.',
      severity: 'info',
      chainLabel: 'Bump → movement → clunk',
    },
    {
      stageLabel: 'IF THE SOURCE IS A MOUNT OR BUSHING',
      title: 'The looseness can become more noticeable',
      description:
        'Worn mounting components and suspension bushings can allow extra movement. The noise may become easier to reproduce and other ride symptoms can appear.',
      severity: 'caution',
      chainLabel: 'Wear → more play',
    },
    {
      stageLabel: 'IF DAMPING IS ALSO WEAK',
      title: 'The car may stop settling cleanly after bumps',
      description:
        'Worn shocks or struts can allow continued bouncing and reduce steering precision, stability and road holding.',
      severity: 'warning',
      chainLabel: 'Weak damping → extra body motion',
    },
    {
      stageLabel: 'IF A STEERING OR LOAD-BEARING JOINT IS WORN',
      title: 'Handling can change',
      description:
        'Ball-joint and other steering or suspension wear can be accompanied by wandering, vibration, pulling or altered steering feel.',
      severity: 'warning',
      chainLabel: 'Joint wear → control symptoms',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'A failed joint can become a control problem',
      description:
        'Severe ball-joint failure can allow the wheel to move out of its intended position and cause loss of steering control. This is not the expected outcome of every clunk, but it is why a clunk plus steering or wheel-position changes should not be driven on.',
      severity: 'danger',
      chainLabel: 'Joint failure → loss of control',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Mild clunk over bumps with normal steering, braking and ride height',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Drive gently and arrange an inspection soon. Stop sooner if the noise changes or any handling symptom appears.',
    },
    {
      situation: 'New clunk after a pothole, curb strike or other hard impact',
      ignoreAnswer: 'Briefly, only if the car feels normal',
      severity: 'warning',
      whatToDo:
        'Check the tires, wheel position and visible suspension area first. If anything looks shifted, damaged or low, do not continue driving.',
    },
    {
      situation: 'Clunk with loose steering, wandering or pulling',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop normal driving and arrange inspection. If control feels compromised, pull over safely and use roadside assistance.',
    },
    {
      situation: 'Clunk with continued bouncing after bumps',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Have the shocks, struts and related suspension parts inspected. Avoid unnecessary driving until the cause is known.',
    },
    {
      situation: 'Clunk that began after recent suspension or strut work',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Have the installation and mounting hardware rechecked before assuming the new part is defective.',
    },
    {
      situation: 'One corner is low, the wheel angle changed or the tire is rubbing',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Park safely and arrange roadside assistance or inspection rather than continuing to test the vehicle.',
    },
    {
      situation: 'The sound is proven to be loose cargo or a loose jack and disappears when secured',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Secure the item correctly. If the clunk returns with the cargo secured, treat it as an unresolved vehicle noise.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Rule out loose cargo first',
      body:
        'Empty or secure loose items in the trunk or cargo area and make sure the spare-tire tools and jack are properly retained. If the sound remains, do not keep blaming the cargo.',
    },
    {
      title: 'Note exactly when the clunk happens',
      body:
        'Pay attention to whether it comes from the front or rear, one side or both, and whether braking or turning changes it. That pattern helps a shop reproduce the problem without you performing risky tests.',
    },
    {
      title: 'Look from outside the car',
      body:
        'On level ground with the vehicle parked, look for a visibly low corner, a wheel that appears shifted, a broken-looking spring, obvious fluid leakage or fresh tire rub marks. Do not crawl under a vehicle supported only by a jack.',
    },
    {
      title: 'Have the steering and suspension checked',
      body:
        "Ask for an inspection of joints, control arms and bushings, sway bar links, shocks or struts, mounts and relevant hardware. A clunk can come from several parts that sound similar from the driver's seat.",
    },
    {
      title: 'Check for an open recall',
      body:
        "Use the vehicle identification number in NHTSA's recall lookup. A recall search will not diagnose a generic clunk, but it can tell you whether your specific vehicle has an unrepaired safety recall.",
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Steering suddenly feels loose, vague or difficult to control',
      description:
        'A clunk paired with a steering change can indicate a steering or suspension fault that needs immediate attention.',
      severity: 'danger',
    },
    {
      title: 'The car wanders, pulls or changes direction over bumps',
      description: 'Do not keep testing the vehicle on the road if it no longer tracks predictably.',
      severity: 'danger',
    },
    {
      title: 'A wheel looks tilted, shifted or out of position',
      description:
        'Visible wheel-position change can mean a joint, arm, spring or mounting point is no longer holding geometry correctly.',
      severity: 'danger',
    },
    {
      title: 'A tire is rubbing or you hear scraping after the clunk',
      description: 'Contact means something may be moving beyond its intended range.',
      severity: 'danger',
    },
    {
      title: 'One corner of the car is suddenly sitting lower',
      description:
        'A changed ride height can point to spring or suspension damage and should be inspected before further driving.',
      severity: 'warning',
    },
    {
      title: 'The car keeps bouncing or swaying after the bump',
      description: 'Continued body motion can indicate weakened damping and reduced stability.',
      severity: 'warning',
    },
    {
      title: 'The noise began after suspension work and something appears loose',
      description: 'Loose or worn mounting hardware can cause metallic clunking after shock or strut work.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can a bad sway bar link cause a clunk over bumps?',
      answer:
        'Yes. Excess play in a sway bar link can cause metallic clunking or knocking over bumps. The same symptom can come from other suspension parts, so the sound does not identify the link by itself.',
    },
    {
      question: 'Can a bad ball joint sound like this?',
      answer:
        'Yes. MOOG lists intermittent clunking over bumps or dips as a symptom of worn or loose ball joints. Steering looseness, drift or vibration makes that possibility more urgent to inspect.',
    },
    {
      question: 'Does a clunk mean my shock or strut is bad?',
      answer:
        'Not necessarily. Monroe notes that worn shocks or struts can clunk, but worn mounts and loose mounting hardware can make similar noise. Other steering and suspension parts can also be responsible.',
    },
    {
      question: 'Can a strut mount clunk even if the strut is not leaking?',
      answer:
        'Yes. An upper mounting plate or worn mounting hardware can create clunking independently of an obvious fluid leak.',
    },
    {
      question: 'Could the noise really just be something loose in the trunk?',
      answer:
        'Yes. A jack, spare-tire tool or cargo can shift on the same bumps that move the suspension. Secure everything first. If the noise remains, the vehicle still needs diagnosis.',
    },
    {
      question: 'Will a wheel alignment fix the clunk?',
      answer:
        'An alignment cannot tighten a loose joint, bushing, link or mount. Alignment may be needed after some suspension repairs, but the source of the clunk has to be found first.',
    },
    {
      question: 'Can I diagnose the failed part from the sound alone?',
      answer:
        'Usually not. Several suspension and steering parts can produce similar knocking or clunking, and the same sound can even come from non-suspension items. The pattern and a hands-on inspection matter more than the word used for the noise.',
    },
    {
      question: 'What if the clunk started right after new shocks or struts were installed?',
      answer:
        'Have the installation rechecked. Monroe says loose or worn mounting hardware and upper mounting plates are common places to inspect when a metallic clunk appears after shock or strut replacement.',
    },
    {
      question: 'Should sway bar links, shocks or struts always be replaced in pairs?',
      answer:
        "There is no universal answer for every part and vehicle. Replacement strategy depends on the component, condition of the opposite side and the vehicle manufacturer's service procedure.",
    },
    {
      question: 'Is it safe to drive the car to a repair shop?',
      answer:
        'Only if steering, braking, wheel position and ride feel remain normal and there is no visible damage or tire rubbing. If the car feels unstable, do not drive it there.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Check for Recalls: Vehicle, Car Seat, Tire, Equipment',
      url: 'https://www.nhtsa.gov/recalls',
      sourceType: 'government',
      notes:
        'NHTSA explains that a VIN or license-plate search can show unrepaired safety recalls for a specific vehicle. Used only for the recall-check action, not to diagnose the source of a clunk.',
    },
    {
      publisher: 'Monroe Shocks & Struts',
      title: 'Signs of Bad Shocks & Struts',
      url: 'https://www.monroe.com/technical-resources/shocks-101/symptoms-worn-shock-struts.html',
      sourceType: 'manufacturer',
      notes:
        'Supports clunking or knocking as a possible shock, strut or mounting symptom and continued bouncing, reduced stability and steering-precision concerns with worn ride-control components.',
    },
    {
      publisher: 'Monroe Shocks & Struts',
      title: 'Diagnosing Noise With New Shocks and Struts',
      url: 'https://www.monroe.com/technical-resources/tech-tips/diagnosing-noise-with-new-shock-struts.html',
      sourceType: 'manufacturer',
      notes:
        'Supports loose or worn mounting hardware and upper mounting plates as possible causes of metallic clunking over bumps, especially after shock or strut replacement.',
    },
    {
      publisher: 'Delphi',
      title: 'Symptoms of Bad Steering and Suspension',
      url: 'https://www.delphiautoparts.com/resource-center/article/symptoms-of-bad-steering-and-suspension',
      sourceType: 'manufacturer',
      notes:
        'Lists control arms, bushings, ball joints and tie-rod ends among possible sources of knocking or clunking and links steering looseness, drifting and bump-related steering changes with suspension faults.',
    },
    {
      publisher: 'MOOG Parts',
      title: 'Symptoms of Bad Ball Joints',
      url: 'https://www.moogparts.com/parts-matter/symptoms-of-bad-ball-joints.html',
      sourceType: 'manufacturer',
      notes:
        'Supports intermittent clunking over bumps or dips and steering looseness, vibration or drifting as possible signs of worn or loose ball joints.',
    },
    {
      publisher: 'MOOG Parts',
      title: 'Bad Sway Bar Link Signs',
      url: 'https://www.moogparts.com/parts-matter/Symptoms-of-Bad-Sway-Bar-Links.html',
      sourceType: 'manufacturer',
      notes:
        'Supports metallic clunking or knocking over bumps as a sign of excessive play in a sway bar link and notes that similar symptoms can come from other steering and suspension parts.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Vehicle owner's manual",
      description:
        'Use it for vehicle-specific warnings, jacking information and any suspension or stability-control guidance that applies to your model.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Flashlight',
      description:
        'Useful for a parked, outside-only look at springs, tires, wheel wells and visible suspension areas without crawling under the car.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Suspension and steering inspection',
      description:
        'A hands-on inspection can check play in joints, links, bushings, mounts and hardware that cannot be identified reliably from cabin noise alone.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'NHTSA VIN recall checker',
      description:
        'Useful for finding unrepaired safety recalls tied to the specific vehicle identification number.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'bouncy-ride-after-bumps',
      anchorText: 'Does the car keep bouncing after bumps?',
      relationshipType: 'escalation',
    },
    {
      slug: 'car-pulls-to-one-side',
      anchorText: 'Does the car pull to one side while driving?',
      relationshipType: 'escalation',
    },
    {
      slug: 'car-sitting-lower-on-one-corner',
      anchorText: 'Is one corner of the car sitting lower?',
      relationshipType: 'escalation',
    },
    {
      slug: 'clicking-noise-when-turning',
      anchorText: 'Is there also a clicking noise while turning?',
      relationshipType: 'sibling',
    },
    {
      slug: 'leaking-shock-absorber',
      anchorText: 'Is a shock absorber visibly leaking?',
      relationshipType: 'related',
    },
  ],
};
