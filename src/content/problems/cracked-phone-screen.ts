import type { ProblemSeed } from '../types';

/**
 * Technology > Phones > Screens > Cracked Phone Screen.
 *
 * Every factual claim below traces to one of the six sources at the
 * bottom of this file. The core distinction is: a small, stable crack
 * with no loose glass and normal touch/display can be used briefly until
 * repair, while spreading cracks, loose or sharp glass, touch/display
 * failure, or a screen lifting from the frame — which can point to a
 * swollen battery — need faster attention.
 */
export const crackedPhoneScreen: ProblemSeed = {
  systemSlug: 'screens',
  slug: 'cracked-phone-screen',
  canonicalPath: '/technology/phones/screens/cracked-phone-screen/',
  name: 'Cracked Phone Screen',
  eyebrow: 'Technology · Phones · Screens',

  h1: 'Can I Ignore a Cracked Phone Screen?',
  seoTitle: 'Cracked Phone Screen: Can You Keep Using It? | Can I Ignore It',
  metaDescription:
    'A small stable screen crack may be usable for now, but loose glass, touch problems, display damage or a lifting screen need faster attention.',

  status: 'published',
  indexable: true,

  verdict: 'can_wait',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep using the phone?',
  canIUseItLabel: 'Sometimes, if the damage is minor',

  shortAnswer:
    'A small stable crack with no loose glass, display problems or touch issues may be usable until you arrange a repair. Do not treat a cracked screen as harmless, though: sharp glass can injure you, and a screen that is lifting away from the frame may point to a battery problem rather than ordinary impact damage.',

  whyItMattersHeading: 'Why Does a Cracked Phone Screen Matter?',
  whyItMatters: [
    'A phone screen is more than the picture underneath it. The outer glass is part of the surface you touch dozens or hundreds of times a day. Once it cracks, edges can become sharp and additional drops or pressure can make the damage worse. Apple specifically warns not to use an iPhone with cracked glass because it can cause injury.',
    'The symptoms around the crack matter more than the crack pattern alone. If the image is normal and touch works everywhere, the damage may be limited mainly to the outer screen assembly. Black areas, colored lines, flicker or dead touch zones show that the display or touch system is also affected. A screen that is lifting away from the frame deserves a different check: Google notes that a swollen battery can push the screen upward and recommends starting a repair if the screen begins to lift.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Phone If You Notice:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Cracked smartphone glass, injury risk, display and touch-function changes, screen lifting and swollen-battery escalation checked against Apple, Google and U.S. CPSC consumer-safety guidance.',
  disclaimer:
    'General smartphone triage guidance only. Phone construction and repair procedures vary by model. Do not press a lifted screen back into the frame, pry the phone open or attempt to repair a swollen battery yourself.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'small-hairline-crack',
      label: 'There is one small hairline crack',
      shortDescription: 'The glass is still flat, the image looks normal and touch works everywhere.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'You can arrange the repair rather than panic',
      resultBody:
        'A small stable crack without loose glass or functional problems is less urgent than a shattered or failing display. It still leaves damaged glass in a surface you handle constantly.',
      recommendedAction: 'Back up the phone, avoid extra pressure or drops and arrange screen repair when practical.',
    },
    {
      slug: 'crack-spreading',
      label: 'The crack is getting longer or branching',
      shortDescription: 'New lines are appearing from the original break.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The damage is progressing',
      resultBody: 'A growing crack means the glass is no longer staying stable. More of the surface can become sharp or structurally weak.',
      recommendedAction: 'Avoid pressure on the screen and arrange repair soon.',
    },
    {
      slug: 'shattered-but-display-works',
      label: 'The glass is badly shattered, but the screen still works',
      shortDescription: 'The image and touch still function, but there are many cracks.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Working display does not make shattered glass safe',
      resultBody: 'A functioning screen can still have loose or sharp glass. Apple warns that cracked glass can cause injury.',
      recommendedAction: 'Minimize handling and arrange screen service rather than continuing normal use.',
    },
    {
      slug: 'loose-or-sharp-glass',
      label: 'Glass pieces are loose, raised or sharp',
      shortDescription: 'Small shards can catch on a finger or come away from the screen.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using the damaged surface',
      resultBody: 'Loose glass creates a direct cut risk and can break away further during normal touch use.',
      recommendedAction: 'Stop touching the damaged area and arrange repair.',
    },
    {
      slug: 'touch-not-working',
      label: 'Part of the touchscreen no longer responds',
      shortDescription: 'Taps or swipes fail in one or more areas.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The damage is affecting function',
      resultBody: 'The problem is no longer limited to visible glass. The touch system or display assembly has been affected.',
      recommendedAction: 'Back up important data while the phone is still usable and arrange screen repair.',
    },
    {
      slug: 'ghost-touch',
      label: 'The phone taps or swipes by itself',
      shortDescription: 'Apps open, keys press or touches register without input.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The screen is no longer reliable to control',
      resultBody: 'Unwanted touch input can interfere with unlocking, typing, calls and other phone controls.',
      recommendedAction: 'Back up the phone if you can control it safely, then stop relying on the damaged touchscreen and arrange repair.',
    },
    {
      slug: 'black-spots-lines-flicker',
      label: 'I see black spots, colored lines or flickering',
      shortDescription: 'The image itself changed after the crack or drop.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The display is damaged too',
      resultBody: 'These symptoms show that the problem extends beyond a cosmetic crack in the outer surface.',
      recommendedAction: 'Back up your data and arrange display repair before the screen becomes harder to use.',
    },
    {
      slug: 'screen-lifting-from-frame',
      label: 'The screen is lifting away from the frame',
      shortDescription: 'There is a gap under the display or one edge is being pushed outward.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Check for a swollen battery',
      resultBody: 'Google notes that a swollen battery can push the screen away from the phone. If the battery becomes exposed, accidental damage can cause overheating and injury.',
      recommendedAction: 'Stop using the phone normally. Do not press the screen back down or pry the device open. Start the manufacturer repair process or follow local battery-recycling guidance.',
    },
    {
      slug: 'phone-hot-or-swollen',
      label: 'The phone is unusually hot, bulging or changing shape',
      shortDescription: 'The cracked screen is accompanied by heat or physical swelling.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a battery or internal-device problem',
      resultBody: 'Physical damage and high-energy lithium-ion batteries are a bad combination. CPSC says mobile-device batteries are sensitive to physical stress and advises inspection when device or battery damage is suspected.',
      recommendedAction: "Stop using and charging the phone and follow the manufacturer's service guidance for a potentially damaged battery.",
    },
    {
      slug: 'cracked-after-hard-impact',
      label: 'The phone took a hard hit and now acts strangely',
      shortDescription: 'It restarts, shuts down, will not charge normally or has other new problems.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not assume only the glass was damaged',
      resultBody: 'A hard drop can damage more than the display. CPSC advises having a mobile device inspected when damage to the device or battery is suspected after a drop.',
      recommendedAction: 'Stop charging or using the phone if it is overheating, swollen or otherwise behaving abnormally and arrange inspection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The outer glass is damaged',
      description: 'The phone may still look and work normally apart from the visible crack.',
      severity: 'info',
      chainLabel: 'Cracked glass',
    },
    {
      stageLabel: 'KEEP USING IT',
      title: 'The damaged surface keeps taking pressure',
      description: 'Normal tapping, pocket pressure and another drop can put more stress on already cracked glass.',
      severity: 'caution',
      chainLabel: 'More stress',
    },
    {
      stageLabel: 'IF THE DAMAGE PROGRESSES',
      title: 'Sharp glass or functional problems can appear',
      description: 'A crack can become more difficult to handle if edges lift, pieces loosen or the touch and display layers begin malfunctioning.',
      severity: 'warning',
      chainLabel: 'Usability loss',
    },
    {
      stageLabel: 'IF THE DISPLAY IS AFFECTED',
      title: 'Touch or image quality can fail',
      description: 'Dead touch areas, ghost touches, black patches, lines or flicker mean the screen assembly is no longer working normally.',
      severity: 'warning',
      chainLabel: 'Display failure',
    },
    {
      stageLabel: 'IF THE SCREEN IS LIFTING',
      title: 'A swollen battery may be involved',
      description: 'Google documents swollen batteries pushing phone screens upward. Pressing the screen back into place or opening the device yourself can damage the battery.',
      severity: 'danger',
      chainLabel: 'Battery check',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One small stable crack, no loose glass and normal touch/display',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo: 'Back up the phone, protect it from more impact and arrange repair when practical.',
    },
    {
      situation: 'The crack is spreading or branching',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Avoid pressure and arrange repair soon.',
    },
    {
      situation: 'The screen is heavily shattered',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Minimize handling and arrange screen service.',
    },
    {
      situation: 'Glass is loose or sharp',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop touching the damaged area and have the screen repaired.',
    },
    {
      situation: 'Touch is failing or registering ghost touches',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Back up the phone and arrange repair.',
    },
    {
      situation: 'Black spots, colored lines or flicker appeared after the damage',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Back up important data and repair the display.',
    },
    {
      situation: 'The screen is lifting away from the frame',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not press it back down. Stop normal use and check for battery swelling.',
    },
    {
      situation: 'The phone is swollen, unusually hot or physically deforming',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using and charging it and follow manufacturer service guidance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check whether the damage is only visual',
      body: 'Without pressing hard on the glass, look for loose edges, missing pieces, black patches, colored lines, flicker or a gap between the display and frame. Check whether touch works normally across the screen.',
    },
    {
      title: 'Back up important data',
      body: 'A cracked phone can become harder to operate if the display or touch layer fails later. Back up photos, messages and other important data while the phone is still easy to use.',
    },
    {
      title: 'Avoid extra pressure and moisture',
      body: 'Do not press hard on the cracked area or carry the phone where it will bend or be crushed. Keep a physically damaged phone away from unnecessary liquid exposure.',
    },
    {
      title: 'Arrange a proper screen repair',
      body: "Use the phone manufacturer's repair channel or a repair provider familiar with your model. Google lists cracked screens as a hardware issue eligible for its repair process, and Apple provides dedicated screen-repair service options.",
    },
    {
      title: 'Treat a lifting screen differently',
      body: 'If the screen is separating from the frame, do not push it back into place. Google specifically tells users with a swollen battery not to press the cover glass or pry the device open.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Loose or sharp glass',
      description: 'Stop touching the broken area because the glass can cause injury.',
      severity: 'danger',
    },
    {
      title: 'The screen is lifting away from the frame',
      description: 'A swollen battery can push the display outward.',
      severity: 'danger',
    },
    {
      title: 'The phone is bulging or changing shape',
      description: 'Stop using and charging the device and follow manufacturer repair guidance.',
      severity: 'danger',
    },
    {
      title: 'The phone becomes unusually hot after the damage',
      description: 'Heat together with suspected internal or battery damage needs prompt attention.',
      severity: 'danger',
    },
    {
      title: 'Touch input is unreliable or happens by itself',
      description: 'The damaged screen can no longer be trusted for normal control.',
      severity: 'warning',
    },
    {
      title: 'Black spots, colored lines or severe flicker appear',
      description: 'The display itself is damaged, not only the surface glass.',
      severity: 'warning',
    },
    {
      title: 'The phone begins shutting down, restarting or charging abnormally',
      description: 'A hard impact may have affected more than the screen.',
      severity: 'warning',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I keep using a phone with one small screen crack?',
      answer: 'Sometimes, for a short period, if the glass is flat, nothing is loose and the display and touch system work normally. Arrange a repair rather than assuming the crack is harmless.',
    },
    {
      question: 'Is cracked phone glass dangerous?',
      answer: 'It can be. Sharp or loose glass can cut you, and Apple specifically warns that using an iPhone with cracked glass may cause injury.',
    },
    {
      question: 'What if the crack is only cosmetic?',
      answer: 'If the image and touch response are completely normal and the glass is not loose, the immediate problem may be limited to the damaged screen surface. Watch for spreading cracks, sharp edges or new display symptoms.',
    },
    {
      question: 'Why are black spots appearing near the crack?',
      answer: 'Black patches, colored lines or flicker mean the display itself is no longer working normally. Back up the phone and arrange screen repair.',
    },
    {
      question: 'Why is part of the touchscreen not responding?',
      answer: 'The impact may have damaged the touch-sensitive part of the display assembly. Once touch function changes, the problem is more than a cosmetic glass crack.',
    },
    {
      question: 'What are ghost touches after a screen crack?',
      answer: 'Ghost touches are inputs the phone registers without you touching the screen. A damaged touchscreen can become unreliable, so back up your data and arrange repair.',
    },
    {
      question: 'Can I put a screen protector over a cracked screen and keep using it?',
      answer: 'A protector does not repair the damaged glass or make a failing display safe. Do not press a protector onto a screen that is lifted, bulging or shedding glass.',
    },
    {
      question: 'Why is my screen separating from the phone?',
      answer: 'Impact damage can disturb the screen assembly, but battery swelling can also push the display outward. Google tells users to start a repair when a swollen battery causes the screen to lift and not to press the screen back down.',
    },
    {
      question: 'Should I keep charging a phone if the screen is lifting?',
      answer: "No. If screen separation may be caused by battery swelling, stop normal use and charging and follow the manufacturer's repair instructions.",
    },
    {
      question: 'Do I need to back up my phone before screen repair?',
      answer: 'Yes. Google recommends preparing and backing up a device before repair, and a damaged display can become harder to operate if the problem worsens.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Manufacturer repair service',
      description: 'The safest first choice when the phone has cracked glass, display failure, screen separation or possible battery damage.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Phone data-backup guide',
      description: "Use the manufacturer's backup instructions while the display and touchscreen are still usable.",
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Protective phone case',
      description: 'Useful after repair to reduce the chance that a future drop sends impact directly into the screen or frame.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Tempered-glass screen protector',
      description: 'Best used on an intact or repaired screen as added surface protection. It is not a repair for broken glass or a lifted display.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Cell Phone Batteries: CPSC, CTIA Working Together to Keep Consumers Safe',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2005/Cell-Phone-Batteries-CPSC-CTIA-Working-Together-to-Keep-Consumers-Safe',
      sourceType: 'government',
      notes: 'CPSC explains that lithium-ion cell-phone batteries contain substantial energy in a small package, are sensitive to physical stress and should be inspected when device or battery damage is suspected.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC, CTIA Remind Consumers to Shop Safely When Choosing Replacement Mobile Device Batteries',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2013/CPSC-CTIA-Remind-Consumers-to-Shop-Safely-When-Choosing-Replacement-Mobile-Device-Batteries',
      sourceType: 'government',
      notes: 'CPSC advises avoiding crushing, puncturing or heavy pressure on mobile-device batteries and says a device or battery suspected of damage after a drop should be inspected.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Batteries, Fire (High-Energy Density)',
      url: 'https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Batteries-Fire-High-Energy-Density',
      sourceType: 'government',
      notes: 'CPSC explains that high-energy lithium-ion and lithium-polymer batteries require enhanced safety systems and care in use and handling because of overheating, fire, burn and explosion hazards.',
    },
    {
      publisher: 'Apple',
      title: 'Important Safety Information for iPhone',
      url: 'https://support.apple.com/guide/iphone/important-safety-information-iph301fc905/ios',
      sourceType: 'manufacturer',
      notes: 'Apple warns that cracked iPhone glass may cause injury, recommends discontinuing use when phone or battery damage is suspected and says battery repair should be performed by a trained technician.',
    },
    {
      publisher: 'Apple',
      title: 'Apple Service and Repair for iPhone Screens',
      url: 'https://support.apple.com/iphone/repair/screen-replacement',
      sourceType: 'manufacturer',
      notes: 'Apple provides inspection, repair and replacement options for damaged iPhone displays.',
    },
    {
      publisher: 'Google',
      title: 'Get Your Device Repaired',
      url: 'https://support.google.com/pixelphone/answer/13516446',
      sourceType: 'manufacturer',
      notes: 'Google lists a cracked Pixel screen as a hardware issue for which repair options are available and describes preparation for walk-in or mail-in repair.',
    },
    {
      publisher: 'Google',
      title: 'Understand Your Pixel Battery',
      url: 'https://support.google.com/pixelphone/answer/15738128',
      sourceType: 'manufacturer',
      notes: 'Google explains that a swollen battery can lift the screen, advises starting a repair if the display begins lifting and warns users not to press the screen back down, pry the device open or attempt swollen-battery repair themselves.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'swollen-phone-battery', anchorText: 'Can I ignore a swollen phone battery?', relationshipType: 'escalation' },
    { slug: 'phone-screen-lifting', anchorText: 'Can I ignore a phone screen lifting from the frame?', relationshipType: 'escalation' },
    { slug: 'black-spot-on-phone-screen', anchorText: 'Can I ignore a black spot on my phone screen?', relationshipType: 'sibling' },
    { slug: 'phone-ghost-touch', anchorText: 'Can I ignore ghost touches on my phone screen?', relationshipType: 'related' },
    { slug: 'cracked-phone-back-glass', anchorText: 'Can I ignore cracked glass on the back of my phone?', relationshipType: 'sibling' },
  ],
};
