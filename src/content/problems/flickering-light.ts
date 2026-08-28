import type { ProblemSeed } from '../types';

/**
 * Home > Electrical > Lighting > Flickering Light.
 *
 * Every factual claim below traces to one of the six sources at the
 * bottom of this file. The core distinction is: one light flickering
 * occasionally is often a bulb, fixture or dimmer-compatibility issue,
 * while several lights flickering together, or heat, odor, buzzing,
 * sparks or repeated breaker trips, are wiring warning signs CPSC treats
 * as a different, more urgent category of problem.
 */
export const flickeringLight: ProblemSeed = {
  systemSlug: 'lighting',
  slug: 'flickering-light',
  canonicalPath: '/home/electrical/lighting/flickering-light/',
  name: 'Flickering Light',
  eyebrow: 'Home · Electrical · Lighting',

  h1: 'Can I Ignore a Flickering Light?',
  seoTitle: "Flickering Light: When It's Fine and When to Worry | Can I Ignore It",
  metaDescription:
    'One flickering light may be a bulb or dimmer issue. Several flickering lights, hot switches, burning smells or sparks need faster attention.',

  status: 'published',
  indexable: true,

  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the light?',
  canIUseItLabel: 'Usually, if it is only one light',

  shortAnswer:
    'One light that flickers occasionally is often a bulb, fixture or dimmer issue and may not need immediate attention. Do not ignore flickering that affects several lights or comes with heat, a burning smell, buzzing, sparks or repeated breaker trips.',

  whyItMattersHeading: 'Why Does a Flickering Light Matter?',
  whyItMatters: [
    'A flickering light can start with something local to one fixture. The bulb may be failing, the lamp or fixture may have a poor connection, or an LED may not work smoothly with the dimmer controlling it. If changing to a compatible bulb stops the flicker and nothing else is wrong, the problem may be limited to that light.',
    'Repeated flickering across several lights deserves more attention. CPSC lists dimming or flickering lights among warning signs of possible home-wiring problems. Heat at a switch or outlet, a burning-plastic smell, sparks, unusual buzzing or frequent breaker trips raise the concern further and should not be treated as an ordinary bulb problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Light and Get It Checked If You Notice:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Household light flicker, LED/dimmer compatibility, home-wiring warning signs and breaker-trip escalation checked against U.S. CPSC, ENERGY STAR and lighting-control manufacturer guidance.',
  disclaimer:
    'General household electrical guidance only. Do not remove a switch, outlet or hardwired fixture cover to investigate live wiring unless you are qualified to do that work. If you see smoke, active sparking or signs of fire, leave the immediate area and follow local emergency guidance.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-light-occasional',
      label: 'One light flickers occasionally',
      shortDescription: 'The rest of the room and house seem normal.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Start with the bulb',
      resultBody:
        'Flicker limited to one light is often local to the bulb, fixture or control. If there is no heat, smell, buzzing or other electrical symptom, you can troubleshoot the light first.',
      recommendedAction: 'Turn the light off, let the bulb cool, and try a known-good compatible bulb if the fixture allows user-replaceable lamps.',
    },
    {
      slug: 'only-on-dimmer',
      label: 'The LED flickers only when I dim it',
      shortDescription: 'The light is stable at some settings but flickers at others.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Check bulb and dimmer compatibility',
      resultBody:
        'ENERGY STAR notes that not every LED works well with every dimmer. Dimmer manufacturers also document flicker when an LED and dimmer are not a good match.',
      recommendedAction: "Confirm the bulb is dimmable and check the dimmer manufacturer's compatibility list before assuming the house wiring is faulty.",
    },
    {
      slug: 'new-bulb-flickers',
      label: 'A new bulb started flickering in one fixture',
      shortDescription: 'The old bulb did not show the same behavior.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The bulb may be the problem',
      resultBody: 'A defective or incompatible replacement lamp can flicker even when the rest of the circuit is normal.',
      recommendedAction: 'Turn the light off and try another correctly rated bulb that is approved for the fixture and control type.',
    },
    {
      slug: 'same-fixture-keeps-flickering',
      label: 'Different bulbs flicker in the same fixture',
      shortDescription: 'Replacing the bulb did not solve it.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The problem may be in the fixture or switch',
      resultBody:
        'If several known-good bulbs behave the same way in one location, the bulb itself becomes a less likely explanation. The fixture, socket, switch or its connections may need inspection.',
      recommendedAction: 'Stop swapping bulbs and have the fixture or switch checked if the flicker keeps returning.',
    },
    {
      slug: 'several-lights-flicker',
      label: 'Several lights flicker at the same time',
      shortDescription: 'More than one fixture is affected together.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'This is bigger than one bulb',
      resultBody: 'Multiple lights changing together can point to a circuit or wiring issue. CPSC includes recurring dimming or flickering lights among home electrical warning signs.',
      recommendedAction: 'Note which rooms or circuits are affected and arrange an electrical inspection if the pattern repeats.',
    },
    {
      slug: 'switch-or-outlet-hot',
      label: 'The switch or nearby outlet feels unusually hot',
      shortDescription: 'The wall plate is hot or painful to touch.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using that switch or outlet',
      resultBody: 'CPSC says hot or unusually warm outlets and switches can indicate an unsafe wiring condition. Heat together with flickering deserves prompt attention.',
      recommendedAction: 'Stop using the affected switch, outlet or light and have a qualified electrician check it as soon as possible.',
    },
    {
      slug: 'burning-smell',
      label: 'I smell hot plastic or burning near the light or switch',
      shortDescription: 'The odor appears when the light is on or nearby.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Turn it off and get it checked',
      resultBody: 'CPSC lists the odor of overheated insulation or burning plastic as a warning sign of an electrical problem.',
      recommendedAction: 'Stop using the affected light or control. If there is smoke, active arcing or signs of fire, leave the area and follow local emergency guidance.',
    },
    {
      slug: 'sparks-or-arcing',
      label: 'I see sparks or flashes at the switch, fixture or outlet',
      shortDescription: 'Visible arcing appears during normal use.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not keep using it',
      resultBody: 'Visible sparks or arcing are electrical warning signs and should not be treated as normal light flicker.',
      recommendedAction: 'Stop using the affected equipment and arrange qualified electrical inspection.',
    },
    {
      slug: 'buzzing-with-flicker',
      label: 'The light, switch or outlet buzzes while it flickers',
      shortDescription: 'There is an unusual electrical sound along with the light change.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Have the circuit checked',
      resultBody: 'CPSC lists unusual sizzling or buzzing sounds among signs of possible electrical-system trouble.',
      recommendedAction: 'Stop using the affected light if the sound comes from the switch, outlet or hardwired fixture and arrange an inspection.',
    },
    {
      slug: 'breaker-keeps-tripping',
      label: 'The flickering happens with repeated breaker trips',
      shortDescription: 'The circuit breaker needs resetting more than once.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep resetting the breaker',
      resultBody: 'CPSC identifies frequent breaker trips together with flickering lights as electrical warning signs that deserve investigation.',
      recommendedAction: 'Stop repeatedly resetting the circuit and have the cause checked by a qualified electrician.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The light output becomes unstable',
      description: 'The cause may be limited to the bulb, fixture or dimmer, especially when only one light is affected.',
      severity: 'info',
      chainLabel: 'Flicker',
    },
    {
      stageLabel: 'IF IT IS A BULB OR DIMMER ISSUE',
      title: 'The annoyance may continue',
      description: 'An incompatible LED and dimmer can keep flickering until the bulb, dimmer setting or control is changed.',
      severity: 'info',
      chainLabel: 'Local issue',
    },
    {
      stageLabel: 'IF THE FIXTURE OR CONNECTION IS THE CAUSE',
      title: 'The flicker may keep returning',
      description: 'Replacing bulbs will not solve a problem in the fixture, switch or electrical connection.',
      severity: 'caution',
      chainLabel: 'Persistent fault',
    },
    {
      stageLabel: 'IF SEVERAL LIGHTS ARE INVOLVED',
      title: 'The problem may extend beyond one fixture',
      description: 'Repeated flicker across multiple lights can be a sign that the circuit or home wiring needs inspection.',
      severity: 'warning',
      chainLabel: 'Wiring warning',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Overheating or arcing can create a fire hazard',
      description: 'Heat, burning odors, sparks and damaged electrical connections are warning signs CPSC associates with unsafe wiring conditions.',
      severity: 'danger',
      chainLabel: 'Electrical hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One light flickers occasionally with no other symptoms',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo: 'Try a known-good compatible bulb and watch whether the problem returns.',
    },
    {
      situation: 'An LED flickers only on a dimmer',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Check that the LED is dimmable and compatible with the control.',
    },
    {
      situation: 'Different bulbs keep flickering in the same fixture',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Have the fixture or switch checked if the problem persists.',
    },
    {
      situation: 'Several lights flicker together',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Arrange an electrical inspection if the pattern repeats.',
    },
    {
      situation: 'The switch or outlet becomes unusually hot',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using it and have an electrician check the wiring promptly.',
    },
    {
      situation: 'There is a burning smell, smoke, sparks or arcing',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using the affected equipment and treat signs of fire as an emergency.',
    },
    {
      situation: 'Flickering comes with repeated breaker trips',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop repeatedly resetting the breaker and have the circuit checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'See whether the problem is limited to one light',
      body: 'Check whether other lights in the room or nearby circuits are changing at the same time. One isolated fixture points you toward the bulb, fixture or control. Several lights behaving together deserve more attention.',
    },
    {
      title: 'Try a known-good compatible bulb',
      body: 'Turn the light off and let the bulb cool before handling it. Use the correct bulb type and rating for the fixture. If the light is on a dimmer, make sure the replacement bulb is designed for dimming.',
    },
    {
      title: 'Check dimmer compatibility',
      body: "If an LED flickers mainly at low brightness or only on a dimmer, check the bulb and dimmer manufacturer's compatibility information. ENERGY STAR notes that not every LED works well with every dimmer.",
    },
    {
      title: 'Stop at the wall plate',
      body: 'You can observe whether a switch or outlet is unusually warm, noisy or discolored, but do not open the electrical box or handle exposed wiring as a casual troubleshooting step.',
    },
    {
      title: 'Escalate when the warning signs spread',
      body: 'Call a qualified electrician if several lights flicker together, multiple bulbs fail to solve the problem, a breaker repeatedly trips, or the switch, outlet or fixture is hot, buzzing, sparking or giving off a burning smell.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Several lights flicker at the same time',
      description: 'A circuit or wiring problem may be involved.',
      severity: 'warning',
    },
    {
      title: 'A switch or outlet is unusually hot',
      description: 'CPSC treats this as a possible unsafe wiring condition.',
      severity: 'danger',
    },
    {
      title: 'You smell hot insulation or burning plastic',
      description: 'Stop using the affected light or control.',
      severity: 'danger',
    },
    {
      title: 'You see sparks, arcing or smoke',
      description: 'Stop using the equipment and treat signs of fire as an emergency.',
      severity: 'danger',
    },
    {
      title: 'You hear unusual sizzling or buzzing from the electrical hardware',
      description: 'The sound can accompany a poor or overheating electrical connection.',
      severity: 'danger',
    },
    {
      title: 'The circuit breaker repeatedly trips',
      description: 'Do not keep resetting it without finding the cause.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is one flickering light dangerous?',
      answer: 'Not necessarily. If only one light is affected and there is no heat, smell, buzzing, sparking or breaker trouble, start by checking the bulb and its compatibility with the fixture or dimmer.',
    },
    {
      question: 'Why does my LED bulb flicker on a dimmer?',
      answer: "The LED may not be compatible with that dimmer or may become unstable at part of the dimming range. Check that the bulb is dimmable and use the manufacturer's compatibility guidance.",
    },
    {
      question: 'Can a bad bulb cause flickering?',
      answer: 'Yes. A failing, defective or incompatible bulb can flicker in an otherwise normal fixture. Trying a known-good correct replacement is a useful first check.',
    },
    {
      question: 'What if a new bulb still flickers?',
      answer: 'If multiple known-good bulbs flicker in the same fixture, the fixture, socket, switch or connection may need inspection.',
    },
    {
      question: 'Why are several lights flickering at once?',
      answer: 'Several lights changing together can indicate a problem beyond one bulb. CPSC lists recurring dimming or flickering lights among warning signs that should prompt attention to the electrical system.',
    },
    {
      question: 'Is a hot light switch normal?',
      answer: 'A dimmer may feel somewhat warm in normal operation, but a switch or outlet that is unusually hot, painful to touch or discolored should not be ignored. CPSC advises stopping use of unusually hot electrical outlets or switches and having them checked.',
    },
    {
      question: 'What if the flickering light also buzzes?',
      answer: 'Buzzing from some LED and dimmer combinations can come from compatibility issues. Buzzing or sizzling from a wall switch, outlet or hardwired connection is more concerning and should be checked.',
    },
    {
      question: 'Should I keep resetting a breaker if the light flickers?',
      answer: 'No. Repeated breaker trips are a warning sign. Have the circuit checked instead of repeatedly restoring power without finding the cause.',
    },
    {
      question: 'Can I replace the light switch myself?',
      answer: 'Replacing a wall switch involves house wiring and shock risk. If you are not qualified and familiar with safe electrical work, use an electrician rather than opening the electrical box to investigate flicker.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Compatible replacement light bulb',
      description: 'Useful for checking whether flicker limited to one fixture follows the bulb. Match the fixture rating, base type and dimmer requirements.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'LED compatibility guide',
      description: 'Use the bulb or dimmer manufacturer\'s compatibility information when flicker occurs mainly during dimming.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Non-contact voltage tester',
      description: 'An electrical safety tool for trained users, not a substitute for qualified diagnosis of an energized switch, outlet or fixture.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Qualified electrician',
      description: 'Appropriate when several lights flicker together or when heat, odors, sparks, unusual electrical sounds or repeated breaker trips are present.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Guide to Home Wiring Hazards',
      url: 'https://www.cpsc.gov/s3fs-public/518.pdf',
      sourceType: 'government',
      notes: 'CPSC lists dimming or flickering lights, frequent breaker resets, arcs or sparks, unusual sizzling or buzzing, overheating and odors from hot insulation as warning signs of potential home electrical hazards.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Electrical Safety Month: Improved Home Safety Needed To Prevent Electrical Fires',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/1980/Electrical-Safety-Month-Improved-Home-Safety-Needed-To-Prevent-Electrical-Fires',
      sourceType: 'government',
      notes: 'CPSC states that flickering lights can have several causes, often involving the receptacle, wall switch or electrical product, and says unusually warm or hot outlet cover plates can indicate unsafe wiring.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC, National Electrical Safety Foundation Urge Consumers to Plug Into Electrical Safety',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/1997/CPSC-National-Electrical-Safety-Foundation-Urge-Consumers-to-Plug-Into-Electrical-Safety',
      sourceType: 'government',
      notes: 'CPSC advises consumers not to use unusually warm or hot outlets or switches and to have the wiring checked by a qualified electrician.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Government And Private Organizations Kick Off National Electrical Safety Month 1992',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/1992/Government-And-Private-Organizations-Kick-Off-National-Electrical-Safety-Month-1992',
      sourceType: 'government',
      notes: 'CPSC identifies overheated plugs and receptacles, lingering odors, dim or flickering lights, sparks and damaged insulation as warning signs that warrant electrical inspection.',
    },
    {
      publisher: 'ENERGY STAR',
      title: 'Light Fixtures (Downlights)',
      url: 'https://www.energystar.gov/products/light_fixtures',
      sourceType: 'government',
      notes: 'ENERGY STAR notes that not every LED light works well with every dimmer and advises checking dimmer-manufacturer compatibility information.',
    },
    {
      publisher: 'Lutron Electronics',
      title: 'Maestro LED+ Dual Control Troubleshooting',
      url: 'https://support.lutron.com/us/en/product/maestro/article/troubleshooting/Selecting-a-Maestro-LED-Dual-Dimmer',
      sourceType: 'manufacturer',
      notes: 'Manufacturer troubleshooting guidance confirms that non-dimmable LEDs or incompatibility between an LED and a dimmer can cause flickering, buzzing or unstable dimming.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'warm-electrical-outlet', anchorText: 'Can I ignore a warm electrical outlet?', relationshipType: 'related' },
    { slug: 'buzzing-light-switch', anchorText: 'Can I ignore a buzzing light switch?', relationshipType: 'escalation' },
    { slug: 'breaker-keeps-tripping', anchorText: 'Can I ignore a circuit breaker that keeps tripping?', relationshipType: 'escalation' },
    { slug: 'light-bulb-keeps-burning-out', anchorText: 'Can I ignore a light bulb that keeps burning out?', relationshipType: 'sibling' },
    { slug: 'dimmer-switch-hot', anchorText: 'Can I ignore a dimmer switch that feels hot?', relationshipType: 'related' },
  ],
};
