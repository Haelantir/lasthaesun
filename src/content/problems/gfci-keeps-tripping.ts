import type { ProblemSeed } from '../types';

/**
 * Home > Electrical > Outlets > GFCI Keeps Tripping.
 *
 * The distinction the page is built around: a tripping GFCI is a device
 * doing its job, so the trip itself is not the hazard. The hazard is the
 * leakage current it found, and the common response — resetting on autopilot,
 * or swapping the GFCI for a plain receptacle — which removes the protection
 * while leaving the fault in place. A GFCI that fails its own test button is
 * a separate case: CPSC says stop using it and replace it.
 */
export const gfciKeepsTripping: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'outlets',
  slug: 'gfci-keeps-tripping',
  canonicalPath: '/home/electrical/outlets/gfci-keeps-tripping/',
  name: 'GFCI Keeps Tripping',
  eyebrow: 'Home · Electrical · Outlets',

  h1: 'Can I Ignore a GFCI Outlet That Keeps Tripping?',
  seoTitle: 'GFCI Outlet Keeps Tripping: What It Means | Can I Ignore It',
  metaDescription:
    'A GFCI that keeps tripping has found current leaking somewhere. See how to find the cause, when a reset is fine, and what you must never do instead.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I just keep resetting it?',
  canIUseItLabel: 'Only while you are finding the cause',

  shortAnswer:
    'Not for long. A GFCI trips because current is leaking somewhere it should not, and repeated trips mean the leak is still there. Resetting it is fine while you track down which appliance or which circuit is causing it. Replacing it with an ordinary outlet is not.',

  whyItMattersHeading: 'Why Does a GFCI Keep Tripping?',
  whyItMatters: [
    'A GFCI compares the current going out with the current coming back. When the two differ, even slightly, something is carrying current somewhere it should not — through damp insulation, a failing appliance, or a person. The device cuts power in a fraction of a second. That is the whole point of it, and it is why the code puts them in kitchens, bathrooms, garages, basements and outdoors.',
    'So a trip is information, not a malfunction. Repeated trips usually mean one of three things: a specific appliance is leaking, moisture has got into an outdoor or bathroom box, or the GFCI itself has worn out. The first two are findable in an evening. The third is a replacement.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop and Call an Electrician If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'GFCI operation, monthly test-button testing, causes of repeated tripping, moisture, failure to reset and the code locations requiring GFCI protection, checked against CPSC, OSHA, ESFI and NFPA 70.',
  disclaimer:
    'General home electrical guidance. Anything involving opening a box, testing wiring or replacing a device is work for a qualified electrician unless you are confident and the circuit is off. Local code requirements vary.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'tripped-once-in-a-storm',
      label: 'It tripped once during heavy rain',
      shortDescription: 'An outdoor or garage outlet, no obvious damage, resets cleanly.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Probably moisture, and it did its job',
      resultBody:
        'Water bridging the contacts is the most common one-off cause outdoors. If it resets and holds, the device worked exactly as designed.',
      recommendedAction: 'Let the outlet dry, reset it, and check that the weatherproof cover actually closes over the plug.',
    },
    {
      slug: 'trips-with-one-appliance',
      label: 'It only trips when one thing is plugged in',
      shortDescription: 'A heater, a pressure washer, an old power tool, a hair dryer.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The appliance is the fault',
      resultBody:
        'Leaking insulation inside a motor or heating element is a classic cause. The GFCI is catching a fault that a plain outlet would have passed straight through to you.',
      recommendedAction: 'Stop using that appliance. Have it repaired or replace it — do not move it to a non-GFCI outlet.',
    },
    {
      slug: 'trips-with-nothing-plugged-in',
      label: 'It trips with nothing plugged in',
      shortDescription: 'You have unplugged everything downstream and it still goes.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The fault is in the wiring or the device',
      resultBody:
        'With no load connected, the leak is in the circuit itself or the GFCI has failed. Neither is a homeowner guessing game.',
      recommendedAction: 'Leave it tripped and get an electrician to test the circuit.',
    },
    {
      slug: 'bathroom-gfci-trips',
      label: 'The bathroom outlet trips after a shower',
      shortDescription: 'Trips in a steamy room, resets fine once it clears.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Humidity is reaching something it should not',
      resultBody:
        'Steam alone rarely trips a healthy circuit. Repeated trips point at a damp box, a worn appliance cord, or a fan wired into the same circuit.',
      recommendedAction: 'Run the extractor fan, then test with everything unplugged to see whether the room or an appliance is at fault.',
    },
    {
      slug: 'outdoor-cover-broken',
      label: 'The outdoor outlet cover is cracked or missing',
      shortDescription: 'Water is getting straight into the box.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Fix the cover, not the symptom',
      resultBody:
        'An open outdoor box will keep tripping, and in freezing weather the water sits inside the device. The trips will get less reliable as it corrodes.',
      recommendedAction: 'Stop using the outlet and fit a proper in-use weatherproof cover before anything is plugged in again.',
    },
    {
      slug: 'will-not-reset',
      label: 'It will not reset at all',
      shortDescription: 'The button clicks but the power does not come back.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Either the fault is still live or the device has locked out',
      resultBody:
        'A GFCI will not reset while it still sees a fault. Newer ones also lock themselves out when their internal self-test fails, which is deliberate.',
      recommendedAction: 'Unplug everything downstream and try once more. If it still refuses, treat the device or the circuit as faulty and call an electrician.',
    },
    {
      slug: 'fails-test-button',
      label: 'Pressing TEST does not cut the power',
      shortDescription: 'The monthly test does nothing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The protection is already gone',
      resultBody:
        'CPSC is direct about this one: a GFCI that does not respond to its own test button should be taken out of use and replaced.',
      recommendedAction: 'Stop using the outlet and have it replaced.',
    },
    {
      slug: 'replaced-with-standard-outlet',
      label: 'Someone swapped it for a normal outlet',
      shortDescription: 'The tripping stopped because the protection was removed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The fault is still there and nothing is watching it',
      resultBody:
        'The code requires GFCI protection in wet and damp locations for a reason. A plain receptacle in that spot will pass a ground fault through whoever is holding the appliance.',
      recommendedAction: 'Have GFCI protection restored, then find the original fault.',
    },
    {
      slug: 'felt-a-shock',
      label: 'Someone felt a shock or a tingle',
      shortDescription: 'A buzz off an appliance, a tap, or the outlet itself.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Current is already finding people',
      resultBody:
        'A tingle from an appliance means leakage large enough to feel. In a kitchen or bathroom the next contact can be a much better path to ground.',
      recommendedAction: 'Switch the circuit off at the panel and call an electrician today.',
    },
    {
      slug: 'very-old-gfci',
      label: 'The GFCI is decades old',
      shortDescription: 'Original to the house, never replaced.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Older units may have no self-test',
      resultBody:
        'Newer GFCIs test themselves periodically and lock out when they fail. An older one has no such check, so the test button is the only thing that tells you it still works.',
      recommendedAction: 'Press TEST and watch how it trips and resets. Replace it if the test fails or the behaviour is erratic — not simply because it is old.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'You keep resetting it',
      title: 'The reset becomes a habit',
      description: 'The outlet works again each time, so the trip stops registering as a warning about anything.',
      severity: 'info',
      chainLabel: 'Trips ignored',
    },
    {
      stageLabel: 'You keep resetting it',
      title: 'The leak keeps running',
      description: 'Whatever is passing current — damp insulation, a failing motor winding — carries on degrading.',
      severity: 'caution',
      chainLabel: 'Fault left in place',
    },
    {
      stageLabel: 'Weeks later',
      title: 'The protection gets removed',
      description: 'Nuisance trips are the usual reason a GFCI gets swapped for a plain outlet or wired past.',
      severity: 'warning',
      chainLabel: 'Protection bypassed',
    },
    {
      stageLabel: 'Weeks later',
      title: 'Nothing is watching the circuit',
      description: 'The same fault is now live in a kitchen, bathroom, garage or outdoor socket with no fast cutoff behind it.',
      severity: 'warning',
      chainLabel: 'No cutoff left',
    },
    {
      stageLabel: 'Wet hands, wet floor',
      title: 'A shock with nothing to stop it',
      description: 'GFCIs exist because damp locations turn a small leak into a path through a person. Without one, the current keeps flowing.',
      severity: 'danger',
      chainLabel: 'Shock in a wet room',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One trip, resets and holds, nothing unusual',
      ignoreAnswer: 'Yes, but note it',
      severity: 'info',
      whatToDo: 'Carry on, and test the outlet with its button this month.',
    },
    {
      situation: 'Trips only with one appliance',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Take that appliance out of service until it is repaired.',
    },
    {
      situation: 'Outdoor outlet trips whenever it rains',
      ignoreAnswer: 'Only until the weather clears',
      severity: 'warning',
      whatToDo: 'Fit an in-use weatherproof cover, then re-test.',
    },
    {
      situation: 'Trips repeatedly with nothing plugged in',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Leave it off and book an electrician.',
    },
    {
      situation: 'Will not reset',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Treat the circuit or the device as faulty and get it tested.',
    },
    {
      situation: 'Fails its own test button',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using the outlet and replace the device.',
    },
    {
      situation: 'Anyone has felt a shock from the circuit',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Kill the breaker and call an electrician the same day.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Unplug everything downstream first',
      body: 'One GFCI usually protects several outlets. Pull every plug on the circuit, including the ones in other rooms, then reset.',
    },
    {
      title: 'Add appliances back one at a time',
      body: 'Plug in one item, wait, then the next. The one that trips it is the fault, and this is the whole diagnosis for most tripping GFCIs.',
    },
    {
      title: 'Look for water',
      body: 'Check outdoor covers, the back of the garage, under the sink and anywhere a box sits below a leaking fitting. Damp is the other common cause.',
      destinationProblemSlug: 'small-leak-under-sink',
      destinationLabel: 'If you find a leak under the sink',
    },
    {
      title: 'Test the device with its own button',
      body: 'Press TEST — the power should cut. Press RESET — it should come back. CPSC recommends doing this monthly on every GFCI in the house.',
    },
    {
      title: 'Hand it over if nothing plugged in explains it',
      body: 'A GFCI tripping on a bare circuit, or one that will not reset, is a wiring test. Say what you already ruled out so the electrician starts where you stopped.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Anyone has felt a shock or tingle from an appliance or fixture',
      description: 'Switch the circuit off at the panel first, then call.',
      severity: 'danger',
    },
    {
      title: 'A burning smell, scorch marks or a buzzing sound at the outlet',
      severity: 'danger',
    },
    {
      title: 'The GFCI does not cut power when you press TEST',
      description: 'CPSC says stop using it and replace it.',
      severity: 'danger',
    },
    {
      title: 'The outlet or faceplate is warm',
      description: 'Heat is a different fault from leakage, and a more urgent one.',
      severity: 'warning',
    },
    {
      title: 'Water is visibly getting into the box',
      severity: 'warning',
    },
    {
      title: 'A GFCI has been replaced with a plain outlet in a kitchen, bathroom, garage or outdoors',
      description: 'The protection the code requires there is gone.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a GFCI that trips broken?',
      answer:
        'Usually the opposite. Tripping is the device working; the question is what it found. A GFCI that fails its test button is the broken one.',
    },
    {
      question: 'Why does one GFCI cut power to other rooms?',
      answer:
        'Outlets downstream of it are protected by it, so they all lose power together. That is also why you have to unplug those rooms when hunting the fault.',
    },
    {
      question: 'Can I put a normal outlet in instead?',
      answer:
        'No. The National Electrical Code requires GFCI protection in kitchens, bathrooms, garages, basements, crawlspaces and outdoors. Removing it leaves the fault with nothing to catch it.',
    },
    {
      question: 'How often should I test a GFCI?',
      answer: 'CPSC recommends testing every GFCI in the house at least monthly, using the test button on the unit.',
    },
    {
      question: 'Do GFCIs wear out?',
      answer:
        'They can. The test button is what tells you, which is why it is worth pressing monthly. Newer designs also self-test and lock out on failure; older ones rely on you.',
    },
    {
      question: 'Why does it only trip in wet weather?',
      answer:
        'Water lets current cross where it normally cannot. Outdoors that usually means a cover that no longer seals, or a plug left exposed to rain.',
    },
    {
      question: 'Is a tripping GFCI a fire risk?',
      answer:
        'It is primarily a shock protection device rather than a fire one. Heat, buzzing or a burning smell at the outlet is the fire signal, and needs an electrician.',
    },
    {
      question: 'What if it trips as soon as I reset it?',
      answer: 'The fault is still connected. Unplug everything on the circuit and try again — if it still trips, the wiring or the device needs testing.',
    },
    {
      question: 'Can a light bulb or a fan cause this?',
      answer:
        'Anything on the circuit can. Bathroom fans and outdoor lights are common culprits because they sit where moisture collects.',
    },
    {
      question: 'Does a tripping GFCI mean my whole house needs rewiring?',
      answer:
        'Rarely. Most cases come down to one appliance or one damp box. The circuit-wide problems show up when it trips with nothing plugged in.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Fact Sheet: What Is a GFCI?',
      url: 'https://www.cpsc.gov/s3fs-public/099_0.pdf',
      sourceType: 'government',
      notes:
        'CPSC explains how a GFCI detects a difference between outgoing and returning current and recommends testing every GFCI at least monthly with its test button, replacing any unit that does not respond.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Consumer Opinion Forum Survey: GFCI Receptacles',
      url: 'https://www.cpsc.gov/s3fs-public/gfci.pdf',
      sourceType: 'government',
      notes: 'CPSC research material on how households use, test and understand GFCI receptacles.',
    },
    {
      publisher: 'Occupational Safety and Health Administration',
      title: 'Information on Ground Fault Circuit Interrupters',
      url: 'https://www.osha.gov/laws-regs/standardinterpretations/1992-02-04',
      sourceType: 'government',
      notes: 'OSHA interpretation describing GFCI function and the practice of testing the device with its test button before use.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'NEC Task Group on Section 210.8(F): GFCI Protection for Outdoor Outlets',
      url: 'https://www.cpsc.gov/content/National-Fire-Protection-Association-NFPA-70-National-Electrical-Code-NEC-Task-Group-on-NEC-section-2108F-Ground-Fault-Circuit-Interrupter-GFCI-Protection-for-Personnel-on-Outdoor-Outlets',
      sourceType: 'regulation',
      notes: 'CPSC material on the National Electrical Code requirement for GFCI protection of outdoor outlets, and the code work behind it.',
    },
    {
      publisher: 'Electrical Safety Foundation International',
      title: 'Ground Fault Circuit Interrupters (GFCI)',
      url: 'https://www.esfi.org/ground-fault-circuit-interrupters-gfci/',
      sourceType: 'industry',
      notes:
        'ESFI states that a GFCI responds when current flowing into a circuit differs by even a slight amount from that returning, that leakage typically occurs when appliances are damaged or electrical parts get wet, and lists the code locations requiring GFCIs.',
    },
    {
      publisher: 'National Fire Protection Association',
      title: 'NFPA 70: National Electrical Code, Article 210.8',
      url: null,
      sourceType: 'regulation',
      notes:
        'The code article setting out where GFCI protection for personnel is required in dwellings. Adopted and amended locally, so the exact locations depend on the edition in force in your area.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'A plug-in outlet tester with a GFCI test button',
      description: 'Confirms the outlet is wired correctly and trips the device from the far end of the circuit.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'An in-use ("bubble") weatherproof cover',
      description: 'The outdoor cover that closes with a cord plugged in. The flat flip-lid kind does not.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'A licensed electrician',
      description: 'For a GFCI that trips with nothing plugged in, will not reset, or protects a circuit anyone has been shocked on.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'A self-testing GFCI receptacle as the replacement',
      description: 'Checks itself periodically and locks out rather than failing quietly.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'warm-electrical-outlet', anchorText: 'Can I ignore an electrical outlet that feels warm?', relationshipType: 'sibling' },
    { slug: 'breaker-keeps-tripping', anchorText: 'Can I ignore a circuit breaker that keeps tripping?', relationshipType: 'sibling' },
    { slug: 'buzzing-electrical-outlet', anchorText: 'Can I ignore an electrical outlet that buzzes?', relationshipType: 'escalation' },
    { slug: 'burning-smell-from-outlet', anchorText: 'Can I ignore a burning smell from an outlet?', relationshipType: 'escalation' },
    { slug: 'loose-electrical-outlet', anchorText: 'Can I ignore an outlet that will not hold a plug?', relationshipType: 'related' },
  ],
};
