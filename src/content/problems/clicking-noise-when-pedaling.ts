import type { ProblemSeed } from '../types';

export const clickingNoiseWhenPedaling: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'bike-drivetrain',
  slug: 'clicking-noise-when-pedaling',
  canonicalPath: '/bicycles/drivetrain/clicking-noise-when-pedaling/',
  name: 'Clicking Noise When Pedaling',
  eyebrow: 'Mobility · Bicycles · Drivetrain',

  h1: 'Can I Ignore a Clicking Noise When I Pedal?',
  seoTitle: 'Bike Clicking While Pedaling: When to Stop Riding',
  metaDescription:
    'A pedal-stroke click may be a shoe or saddle, but it can also signal a loose pedal, crank, cleat, chainring, bearing, or cracked part. Check it before riding.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Only if a safety check finds no play or damage',

  shortAnswer:
    'Probably not as a background noise. A click can come from harmless shoe or saddle movement, but a loose pedal, crank, cleat, wheel axle or cracked part can also click under load, so check the bike before normal riding.',

  whyItMattersHeading: 'A Click Does Not Identify the Part',
  whyItMatters: [
    'A sound that repeats with each crank revolution often comes from the pedal, cleat, crank, chainring or bottom-bracket area. Sound travels through a bicycle frame, however, so saddle rails, the seatpost, wheel hardware and even a frame joint can seem as though they are clicking at the pedals.',
    'The important dividing line is whether anything is loose, rough, cracked or unpredictable. A moving pedal or crank connection can damage threads or fittings, while a loose cleat, skipping chain or failing loaded component can interrupt foot support or control. If the bike passes a hands-on check, a brief test away from traffic can help locate the sound; persistent clicking still deserves repair.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Inspect the Bike If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Pedal, crank, cleat, chainring, bottom-bracket, saddle and frame causes were checked against CPSC guidance and current Trek, Shimano and Park Tool materials.',
  disclaimer:
    'General triage for conventional bicycles. Follow the instructions for your bicycle and components, and do not ride if any loaded part is loose, cracked, rough or unpredictable.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'click-stops-when-standing',
      label: 'The click stops when I stand on the pedals',
      shortDescription:
        'It occurs while seated, disappears when your weight leaves the saddle, and the saddle and seatpost do not visibly move.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The saddle area is the leading suspect',
      resultBody:
        'Saddle rails, binder hardware and the seatpost can click as your weight shifts with each stroke. The standing test is a useful clue, but it does not prove the crank area is fault-free.',
      recommendedAction:
        'Check that the saddle and seatpost are secure and undamaged. Arrange adjustment if the click continues, and stop riding if either part rocks, slips or changes position.',
    },
    {
      slug: 'confirmed-shoe-or-lace-click',
      label: 'I confirmed that my shoe or lace is tapping the crank',
      shortDescription:
        'Securing the lace or changing shoes stops the sound, and the pedals, cranks and saddle have no play.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The bicycle itself is not making the click',
      resultBody:
        'A lace end, buckle or shoe sole can tap or shift once per stroke and imitate a mechanical drivetrain noise.',
      recommendedAction:
        'Secure loose laces and keep them away from the chain and crank. If the noise returns after that cause is removed, repeat the mechanical checks.',
    },
    {
      slug: 'extreme-gear-only',
      label: 'It happens only in an extreme gear combination',
      shortDescription:
        'The noise disappears when you shift to a straighter chainline, with no skipping, looseness or rough rotation.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Change gears instead of accepting the noise',
      resultBody:
        'An extreme chain angle can make the drivetrain run roughly and increase wear. A sound that vanishes with a straighter chainline is less concerning than clicking under load in every gear.',
      recommendedAction:
        'Use a gear combination that keeps the chain straighter. Clean and inspect the drivetrain if the noise remains in ordinary gears.',
    },
    {
      slug: 'loose-cleat-or-release-change',
      label: 'A cleat is loose or clips in and out differently',
      shortDescription:
        'The shoe moves around the cleat, a mounting screw is loose, or pedal engagement and release no longer feel normal.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Fix the cleat before riding',
      resultBody:
        'Loose or worn cleat hardware can click and may prevent release when intended or allow an unexpected release.',
      recommendedAction:
        "Stop using the clipless system until the cleat, screws and pedal mechanism are inspected and adjusted to the component manufacturer's instructions.",
    },
    {
      slug: 'pedal-or-crank-has-play',
      label: 'The pedal or crank moves side to side',
      shortDescription: 'You can feel looseness when wiggling a pedal, crank arm or the crankset by hand.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not ride on a loose loaded connection',
      resultBody:
        'A loose pedal can damage the crank threads, and a loose crank arm can damage its spindle interface or come off. Play may also indicate a worn pedal or bottom-bracket bearing.',
      recommendedAction:
        'Walk or transport the bike. Have the loose connection identified and tightened, adjusted or replaced using the correct procedure and torque.',
    },
    {
      slug: 'grinding-or-rough-rotation',
      label: 'The click comes with grinding, binding or rough rotation',
      shortDescription: 'A pedal or crank feels gritty, notchy, stiff or uneven when turned by hand.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The bearings or crank assembly need attention',
      resultBody:
        'Roughness or binding means this is more than a harmless noise. Pedal bearings, the bottom bracket or another rotating connection may be worn, damaged or incorrectly adjusted.',
      recommendedAction:
        'Do not ride until the pedal and crank assembly have been inspected. Bearing adjustment and replacement may require bicycle-specific tools.',
    },
    {
      slug: 'chain-skips-or-jumps',
      label: 'The pedals jump forward or the chain skips under load',
      shortDescription:
        'The click is accompanied by a sudden loss of resistance, a chain jump or the chain coming off a chainring or rear cog.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a drive-loss problem',
      resultBody:
        'Skipping can throw your balance when you press hard on the pedals. Wear, a stiff or damaged link, poor adjustment or incompatible drivetrain parts may be involved.',
      recommendedAction:
        'Stop hard riding and diagnose the skipping before using the bike again. Inspect the chain, chainrings, cassette and derailleur setup.',
    },
    {
      slug: 'visible-crack-or-gap',
      label: 'I see a crack, opening or separated joint',
      shortDescription:
        'There is a crack in a crank arm or frame, or a bonded area near the bottom bracket appears to be separating.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop riding immediately',
      resultBody:
        'Cracked or separating structural parts can fail under pedaling load. Noise may be one sign of movement at the damaged area.',
      recommendedAction:
        "Do not test-ride the bike. Have the frame or component inspected and follow the manufacturer's replacement or repair guidance.",
    },
    {
      slug: 'click-after-installation',
      label: 'The click began after a pedal, crank or other part was fitted',
      shortDescription:
        'The bicycle was quiet before assembly, service or a component change, and the installation has not been rechecked.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Have the installation verified',
      resultBody:
        'Incorrect fit, assembly order, thread preparation or fastener torque can let a newly installed part move under load.',
      recommendedAction:
        'Stop regular riding and return to the installer or follow the exact component instructions. Do not compensate by tightening every fastener as hard as possible.',
    },
    {
      slug: 'saddle-rocks-or-slips',
      label: 'The saddle rocks, twists or slips with the click',
      shortDescription: 'The saddle or seatpost visibly moves when you push, pull or place weight on it.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Secure the saddle before riding',
      resultBody:
        'The saddle and post support and position the rider. Movement can worsen, damage rails or clamping surfaces, or cause an abrupt change in riding position.',
      recommendedAction:
        'Do not ride until the correct clamp hardware, rail position, seatpost insertion and manufacturer torque have been confirmed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The sound is only a clue',
      description:
        'Shoe contact, saddle movement and several loaded mechanical joints can produce nearly the same click.',
      severity: 'info',
      chainLabel: 'Source still unknown',
    },
    {
      stageLabel: 'IF A JOINT IS MOVING',
      title: 'Load keeps working the connection',
      description: 'A loose fastener, dry interface or worn bearing can shift whenever pedal force is applied.',
      severity: 'caution',
      chainLabel: 'Movement under load',
    },
    {
      stageLabel: 'IF PLAY CONTINUES',
      title: 'Threads and fittings can be damaged',
      description:
        'Pedal threads, crank interfaces, chainring mounts and bearing seats may wear or deform if they continue moving against each other.',
      severity: 'warning',
      chainLabel: 'Repair becomes larger',
    },
    {
      stageLabel: 'IF SUPPORT OR DRIVE DISENGAGES',
      title: 'Your foot can lose resistance unexpectedly',
      description:
        'A loose cleat, pedal, crank arm or skipping chain can interrupt the force you are putting into the bicycle and upset your balance.',
      severity: 'warning',
      chainLabel: 'Sudden drive loss',
    },
    {
      stageLabel: 'IF A CRACKED PART FAILS',
      title: 'Loss of control and a fall are possible',
      description:
        'A crank, pedal axle, frame joint or other loaded part that separates can remove support without warning.',
      severity: 'danger',
      chainLabel: 'Component failure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A lace or shoe part is confirmed as the cause and the click stops when secured',
      ignoreAnswer: 'Yes, once confirmed',
      severity: 'info',
      whatToDo:
        'Secure the loose item away from the chain and crank, then make sure the mechanical noise does not return.',
    },
    {
      situation: 'The click occurs only while seated, and the saddle and post remain completely secure',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Check the saddle rails, binder and seatpost fit. Arrange service if the noise persists.',
    },
    {
      situation: 'The click repeats under pedal load but there is no play, damage, skipping or roughness',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo:
        'Use only a cautious test away from traffic to isolate the source, then inspect or service the bike before ordinary riding.',
    },
    {
      situation: 'The noise began immediately after assembly or component installation',
      ignoreAnswer: 'No, until checked',
      severity: 'warning',
      whatToDo:
        'Have the installation and fastener torque verified against the instructions for the exact bicycle and component.',
    },
    {
      situation: 'A pedal, crank arm, saddle, wheel or axle has detectable play',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Walk or transport the bicycle and correct the loose connection before riding.',
    },
    {
      situation: 'A pedal or crank feels rough, notchy, stiff or grinding',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the pedal bearings, crank and bottom bracket inspected before further use.',
    },
    {
      situation: 'The chain skips, jumps or comes off while you pedal',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop riding and diagnose the chain, gears and derailleur system before applying load again.',
    },
    {
      situation: 'You find a crack, opening or separated bonded joint',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not test the bicycle. Arrange inspection and replacement or an approved repair.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop somewhere safe and check for play',
      body:
        'With the bike stationary, hold each pedal and crank arm and gently test for side-to-side movement. Check the saddle, seatpost and wheel security as well. Do not ride if a loaded part shifts or knocks.',
    },
    {
      title: 'Match the click to the moving part',
      body:
        'Turn the crank by hand with the rear wheel raised, keeping fingers and clothing clear of the chain. Notice whether the sound follows each crank revolution, several chain passes, a wheel revolution or only rider weight.',
    },
    {
      title: 'Use simple isolation tests only after the bike passes inspection',
      body:
        'In a safe area, compare seated and standing pedaling, ordinary shoes and cycling shoes, and different non-extreme gears. Stop testing if you feel play, skipping, binding or a change in control.',
    },
    {
      title: 'Tighten only to the exact specification',
      body:
        'Use the bicycle or component instructions and a suitable torque wrench. Pedals use different thread directions on each side, and excessive torque can damage parts just as insufficient torque can let them loosen.',
    },
    {
      title: 'Treat pedal slipping as chain skipping',
      body:
        'If resistance suddenly disappears rather than merely making a sound, stop riding and inspect the chain, chainrings, cassette and derailleur system.',
      destinationProblemSlug: 'bike-chain-skipping',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Any pedal or crank play',
      description:
        'Movement at a pedal thread, crank interface or bearing assembly can damage the connection and may allow a loaded part to separate.',
      severity: 'danger',
    },
    {
      title: 'Grinding, binding or rough rotation',
      description:
        'A rotating part that no longer turns smoothly may have damaged, contaminated or incorrectly adjusted bearings.',
      severity: 'warning',
    },
    {
      title: 'The chain skips or falls off',
      description: 'A sudden loss of pedal resistance can affect balance and control.',
      severity: 'danger',
    },
    {
      title: 'A cleat is loose or releases unpredictably',
      description: 'The shoe may fail to disengage when needed or may come out of the pedal unexpectedly.',
      severity: 'danger',
    },
    {
      title: 'A visible crack or separated joint',
      description:
        'Stop using a cracked crank, pedal or frame and do not rely on a test ride to judge its remaining strength.',
      severity: 'danger',
    },
    {
      title: 'The click followed a crash or hard impact',
      description: 'Damage may not be obvious, especially around loaded frame and crank areas.',
      severity: 'warning',
    },
    {
      title: 'Steering, braking or wheel security also changed',
      description:
        'Do not treat this as a drivetrain-noise problem if the bicycle wobbles, pulls, binds or has a loose wheel.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does a click while pedaling always mean the bottom bracket is bad?',
      answer:
        'No. Pedals, cleats, crank interfaces, chainring bolts, the chain, saddle rails, the seatpost, wheel hardware and frame joints can all transmit noise through the frame.',
    },
    {
      question: 'Why does it click once per pedal stroke?',
      answer:
        'That timing points toward something loaded at the same crank position, such as one pedal, cleat, crank arm or chainring connection. It narrows the search but does not identify the part by itself.',
    },
    {
      question: 'Why does the bike click only when I pedal hard?',
      answer:
        'Pedal force can make a slightly loose or dry interface move even when everything is silent in a repair stand. Load-dependent noise deserves inspection even if the crank spins quietly by hand.',
    },
    {
      question: 'Does a click that disappears when I stand mean the bottom bracket is fine?',
      answer:
        'Not necessarily. It makes the saddle, rails and seatpost more likely, but standing also changes how force enters the frame. Confirm that the saddle is secure and still check the pedals and cranks.',
    },
    {
      question: 'Can a click on only one side help find the cause?',
      answer:
        'Yes. It can point toward that shoe, cleat, pedal or crank arm. Check for looseness and roughness rather than assuming the sound proves which component is faulty.',
    },
    {
      question: 'Can a dry chain make a rhythmic clicking noise?',
      answer:
        'Yes, especially if a link is stiff, damaged or contaminated. Chain-related noise may repeat less often than every crank revolution because the chain is much longer than one pedal stroke.',
    },
    {
      question: 'Should I tighten every bolt until the clicking stops?',
      answer:
        'No. Different components require different procedures and torque values. Excessive tightening can damage threads, clamps and lightweight parts without fixing the actual source.',
    },
    {
      question: 'Can I ride the bike to a repair shop?',
      answer:
        'Only if there is no play, crack, grinding, skipping, abnormal cleat behavior or change in control, and the route allows cautious riding. Otherwise, walk or transport the bike.',
    },
    {
      question: 'Can a bicycle frame crack make a pedaling click?',
      answer:
        'Yes. A cracked weld, separating bonded joint or movement near the bottom bracket can make noise under load. Stop riding if you see or suspect structural damage.',
    },
    {
      question: 'Why did my new bike start clicking after its first rides?',
      answer:
        'A component may need its installation or fastener torque checked after assembly and initial use. Return it to the seller or installer rather than guessing at the adjustment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Bicycles',
      url: 'https://www.cpsc.gov/FAQ/Bicycles',
      sourceType: 'government',
      notes:
        'Summarizes federal bicycle requirements, including testing of pedals, cranks and fasteners and the requirement for operation, assembly, safety and maintenance instructions.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Sprocket Man Bicycle Safety Booklet, Publication 341',
      url: 'https://www.cpsc.gov/s3fs-public/341.pdf',
      sourceType: 'government',
      notes:
        'Its bicycle-checking guidance covers wheel, saddle and chain checks and advises stopping when a clunk is felt with every pedal revolution.',
    },
    {
      publisher: 'Trek Bicycle Corporation',
      title: "Trek Bicycle Owner's Manual, March 2026",
      url: 'https://media.trekbikes.com/image/upload/v1772741823/TrekBicycleOwnersManual_EN_Rev6_Mar2026.pdf',
      sourceType: 'manufacturer',
      notes:
        'Instructs riders to check pedal and crank looseness, pedal rotation and unusual noises, and says not to ride if the crank feels or sounds loose or grinds.',
    },
    {
      publisher: 'Shimano',
      title: "One-Sided SPD and One-Sided Flat Pedals User's Manual",
      url: 'https://si.shimano.com/en/pdfs/um/L840A/UM-L840A-004-ENG.pdf',
      sourceType: 'manufacturer',
      notes:
        'Calls for checking pedal fastening, cleat play, engagement and release abnormalities, abnormal noises and rotating-part trouble before riding.',
    },
    {
      publisher: 'Park Tool',
      title: 'Troubleshooting a Noisy Drivetrain',
      url: 'https://www.parktool.com/en-us/blog/repair-help/troubleshooting-a-noisy-drivetrain',
      sourceType: 'industry',
      notes:
        'Covers timing-based noise diagnosis and possible sources including cranks, bottom brackets, chainrings, pedals, cleats, chains, axles, saddles, seatposts and frame damage.',
    },
    {
      publisher: 'Park Tool',
      title: 'Repairing On-The-Ride',
      url: 'https://www.parktool.com/en-us/blog/calvins-corner/repairing-on-the-ride',
      sourceType: 'industry',
      notes:
        'Warns that riding with a loose pedal can damage crank threads, a loose crank arm can come off and damage its fittings, and loose cleat hardware can interfere with release.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Bicycle torque wrench',
      description:
        'Helps tighten pedals, crank hardware, chainring fasteners and saddle clamps to the specification for the exact component.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Correct pedal and hex wrenches',
      description:
        'Bicycle hardware may require specific wrench sizes and access from either side of a part. Use tools that fit fully and do not damage the fastener.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bicycle drivetrain inspection',
      description:
        'A bicycle shop can load-test and inspect pedals, cranks, bottom brackets, chainrings, bearings and frame interfaces when the source is unclear.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bicycle and component manuals',
      description:
        'Use the instructions for the exact frame, crankset, pedals, cleats and saddle hardware rather than relying on generic torque or assembly advice.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'bike-chain-skipping',
      anchorText: 'Can I ignore a bike chain that skips under load?',
      relationshipType: 'escalation',
    },
    {
      slug: 'dry-bike-chain',
      anchorText: 'Can I ignore a dry or squeaky bicycle chain?',
      relationshipType: 'cause',
    },
    {
      slug: 'bike-gears-wont-shift-cleanly',
      anchorText: 'Can I ignore bike gears that will not shift cleanly?',
      relationshipType: 'related',
    },
    {
      slug: 'loose-bike-spoke',
      anchorText: 'Can I ignore a loose spoke on my bicycle wheel?',
      relationshipType: 'cause',
    },
  ],
};
