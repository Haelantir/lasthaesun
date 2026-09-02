import type { ProblemSeed } from '../types';

export const rustOnBrakeRotors: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'brakes',
  slug: 'rust-on-brake-rotors',
  canonicalPath: '/cars/brakes/rust-on-brake-rotors/',
  name: 'Rust on Brake Rotors',
  eyebrow: 'Mobility · Cars · Brakes',

  h1: 'Can I Ignore Rust on My Brake Rotors?',
  seoTitle: 'Rusty Brake Rotors: When Surface Rust Is Normal',
  metaDescription:
    'Light rotor rust after rain may clear with normal braking. Learn when pitting, vibration, grinding, pulling, or rust after storage needs a brake inspection.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Only for a cautious check if the brakes feel normal',

  shortAnswer:
    'Not automatically. A thin, even orange film after rain or a wash is usually harmless if the brakes feel normal and the swept rotor face clears after a few normal brake applications. Rust that remains, is pitted or flaky, or comes with vibration, grinding, pulling, a changed pedal, or weaker braking needs inspection.',

  whyItMattersHeading: 'The Difference Between Surface Rust and Rotor Damage',
  whyItMatters: [
    'Many brake rotors have exposed cast-iron friction surfaces. Moisture can leave a thin orange film while the car is parked, and normal contact between the pads and rotors usually polishes that film from the swept area. Appearance alone is not a reason to replace an otherwise sound rotor.',
    'Persistent or uneven corrosion is different. Long storage can produce pitting or uneven rotor thickness, while a rusty band that never becomes shiny can mean the pad is not contacting the full surface. These conditions can cause noise, pulsation, uneven braking, or reduced contact between the pad and rotor. Rotor thickness, both friction faces, the pads, and caliper operation may need to be checked.',
  ].join('\n\n'),

  redFlagsHeading: 'Treat It as a Brake Problem If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed surface rust, storage corrosion, pitting, partial pad contact, vibration, and brake red flags against PennDOT, Toyota, GM, Tesla, Brembo, and AAA materials.',
  disclaimer:
    "General automotive triage, not a diagnosis of your vehicle. Follow its owner's manual and service information. Brake specifications and state inspection rules vary.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'thin-film-after-rain',
      label: 'A thin orange film appeared after rain or washing',
      shortDescription:
        'The rust is light and even, the car was recently wet, and the brakes felt normal before it was parked.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually ordinary surface rust',
      resultBody:
        'Moisture can oxidize an exposed cast-iron rotor face while the vehicle sits. If braking feels normal and the film clears from the swept area during ordinary use, it is not rotor damage that needs repair.',
      recommendedAction:
        'Start cautiously in a safe, low-traffic area and make a few normal brake applications. Confirm that the pedal, stopping response, tracking, and brake sound return to normal.',
    },
    {
      slug: 'rust-only-on-hat-or-edge',
      label: 'Rust is limited to the rotor hub or unswept outer edge',
      shortDescription:
        'The broad area contacted by the pads is smooth and shiny, while the center hat or narrow edge looks rusty.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Cosmetic rust outside the swept face is usually not a braking fault',
      resultBody:
        'The pads do not clean every exposed part of the rotor. Rust on an unswept edge or center section can remain even when the working friction surfaces are normal.',
      recommendedAction:
        'Monitor it during routine service. Have it inspected if the metal is deeply flaking, cracked, loose, or the rust extends into the pad-swept area.',
    },
    {
      slug: 'brief-noise-then-normal',
      label: 'The brakes scrape or squeak briefly, then become quiet',
      shortDescription:
        'The noise occurs on the first brake applications after wet parking, then disappears with normal braking.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Brief noise can come from the surface film being cleared',
      resultBody:
        'Light surface rust can make the first brake applications sound rough. A noise that fades as the rotor face becomes clean is different from recurring squealing or grinding.',
      recommendedAction:
        'Confirm that the noise fully disappears and that braking remains smooth and predictable. Investigate it if the sound keeps returning after the wet surface rust is gone.',
    },
    {
      slug: 'heavy-rust-after-storage',
      label: 'The car sat unused and the rotors are heavily rusted',
      shortDescription:
        'The braking surfaces have extensive orange or brown corrosion after prolonged storage.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Heavy storage corrosion should not be assumed to be self-cleaning',
      resultBody:
        'Manufacturer guidance distinguishes slight rust that is easy to remove through braking from severe rust that can be difficult to clear and may cause vibration or rotor thickness variation.',
      recommendedAction:
        'Arrange a brake inspection before returning the vehicle to normal use. Do not attempt an aggressive hard-stop routine unless the vehicle manufacturer provides a procedure for that model.',
    },
    {
      slug: 'rust-remains-after-normal-driving',
      label: 'Rust remains on the swept face after normal driving',
      shortDescription:
        'The area contacted by the pads is still visibly rusty after repeated ordinary brake use.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Persistent rust needs a closer look',
      resultBody:
        'A functioning disc brake normally cleans much of its working surface. Rust that remains can reflect deeper pitting, limited pad contact, or a brake that is not operating normally.',
      recommendedAction:
        'Schedule a wheel-off brake inspection. Ask for both rotor faces, pad condition, caliper movement, rotor thickness, and surface condition to be checked.',
    },
    {
      slug: 'pitted-rotor-no-symptoms',
      label: 'The rotor is visibly pitted but braking still feels normal',
      shortDescription:
        'Small cavities or rough patches remain in the friction surface, but there is no obvious change in braking.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Pitting is not automatically a failed rotor, but it needs measurement',
      resultBody:
        "Rust or pitting alone does not prove that braking is impaired or that replacement is required. The decision depends on severity, scoring, remaining thickness, surface condition, and the vehicle manufacturer's limits.",
      recommendedAction:
        'Have the rotors measured and inspected rather than judging them from color alone. Do not authorize resurfacing or replacement without confirming that the proposed repair fits the rotor condition and specifications.',
    },
    {
      slug: 'partial-shiny-band',
      label: 'Only part of the rotor face becomes shiny',
      shortDescription: 'A broad rusty band remains while a narrower section shows pad contact.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The pad may not be contacting the full braking surface',
      resultBody:
        'Partial wear marked by a permanent rusty band can result from a caliper or pad problem. Reduced contact area can lower braking torque, raise local temperatures, and lead to uneven wear or vibration.',
      recommendedAction:
        'Minimize driving and arrange a brake inspection promptly. The caliper, pads, hardware, and both rotor faces need to be checked together.',
    },
    {
      slug: 'vibration-or-pulsation',
      label: 'The pedal or steering wheel pulses while braking',
      shortDescription:
        'Braking produces a repeating vibration, shudder, or pedal pulsation that remains after surface rust should have cleared.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Persistent pulsation points beyond harmless flash rust',
      resultBody:
        'Uneven corrosion can produce rotor thickness variation, but other rotor, hub, pad, or caliper faults can create similar symptoms. Continuing to drive does not identify or correct the cause.',
      recommendedAction:
        'Avoid unnecessary driving and have the brakes inspected. Stop driving if the vibration is severe or braking becomes weak, erratic, or difficult to control.',
    },
    {
      slug: 'deep-scoring-flaking-or-cracks',
      label: 'The rotor has deep grooves, heavy flaking, or visible cracks',
      shortDescription: 'The surface is physically damaged rather than covered by a thin removable film.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is rotor damage, not ordinary surface rust',
      resultBody:
        'Deep scoring reduces useful contact between the pad and rotor. Cracks, severe corrosion, or a rotor below its minimum thickness can require replacement rather than continued use or resurfacing.',
      recommendedAction:
        "Do not keep driving normally. Arrange professional inspection and follow the vehicle manufacturer's replacement and minimum-thickness requirements.",
    },
    {
      slug: 'abnormal-braking',
      label: 'Braking is weak, the pedal is soft, or a red brake warning appears',
      shortDescription:
        'The car takes more effort to stop, the pedal sinks or feels spongy, or a brake-system warning stays on.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a brake-system problem',
      resultBody:
        'These symptoms cannot be explained away as cosmetic rotor rust. They can indicate reduced braking ability or another brake-system fault that makes continued driving unsafe.',
      recommendedAction:
        'Pull over safely and stop driving. Arrange roadside assistance or towing rather than testing the brakes in traffic.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'A thin surface film may affect appearance and sound',
      description:
        'Fresh moisture-related oxidation can make a rotor look orange and cause brief scraping or squeaking during the first brake applications.',
      severity: 'info',
      chainLabel: 'Moisture → thin oxidation',
    },
    {
      stageLabel: 'IF IT CLEARS',
      title: 'Normal pad contact restores the swept surface',
      description:
        'When the film is superficial, ordinary braking polishes the working area and the brakes return to smooth, quiet operation.',
      severity: 'info',
      chainLabel: 'Pad contact → clean friction surface',
    },
    {
      stageLabel: 'IF CORROSION REMAINS',
      title: 'The rotor surface can stay rough or uneven',
      description:
        'Persistent corrosion may leave pits or uneven areas that cannot be judged by color alone and may require measurement or resurfacing assessment.',
      severity: 'caution',
      chainLabel: 'Persistent corrosion → surface damage',
    },
    {
      stageLabel: 'IF CONTACT IS INCOMPLETE',
      title: 'Part of the rotor may stop doing its share',
      description:
        'A permanent rusty band can show that the pad is contacting only part of the rotor, reducing useful friction area and increasing uneven wear or localized heat.',
      severity: 'warning',
      chainLabel: 'Limited contact → uneven braking',
    },
    {
      stageLabel: 'WITH BRAKE SYMPTOMS',
      title: 'Stopping can become less predictable',
      description:
        'Pulsation, pulling, grinding, a changed pedal, or weak braking can interfere with smooth, controlled stopping and increase crash risk.',
      severity: 'danger',
      chainLabel: 'Brake fault → reduced control',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A thin, even film appeared after rain or a car wash, with normal pedal feel',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Make a few gentle, normal brake applications in a safe area. Continue only if the swept surfaces clear and braking remains smooth, straight, and predictable.',
    },
    {
      situation: 'The film clears and no unusual noise, pull, or vibration remains',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'No repair is normally needed. Recheck the rotors if the vehicle is parked wet again or if a brake symptom develops.',
    },
    {
      situation: 'Rust is only on the center hat or a narrow unswept edge',
      ignoreAnswer: 'Yes, if the working surfaces are normal',
      severity: 'info',
      whatToDo:
        'Monitor it during routine service. The answer changes if the metal is deeply scaled, cracked, or the rust reaches areas that should be swept clean by the pads.',
    },
    {
      situation: 'The car was stored and the rotor faces are heavily corroded',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Arrange an inspection before regular driving. Heavy corrosion may not clear normally and can leave pitting or uneven rotor thickness.',
    },
    {
      situation: 'Rust remains on the pad-swept surface after ordinary braking',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Have both sides of the rotor, the pads, and caliper operation inspected. The visible outer face may not show the condition of the inner face.',
    },
    {
      situation: 'Only a narrow band becomes shiny while the rest stays rusty',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Minimize driving and have the brake inspected promptly. Partial pad contact can indicate a caliper, pad, hardware, or installation problem.',
    },
    {
      situation: 'The brakes pulse, grind, grab, pull, or smell hot',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop normal driving and arrange brake service. Use roadside assistance if the symptom is severe, the car is difficult to control, or braking feels weaker.',
    },
    {
      situation: 'The pedal is soft or sinking, stopping is weak, or a red brake warning stays on',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Pull over safely and have the vehicle towed. Do not use repeated test stops to diagnose a brake system that already feels abnormal.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check whether the working surface actually clears',
      body:
        'Before driving, look through the wheel with a flashlight. After a few normal brake applications in a safe area, compare the broad pad-swept surface. A clean, even ring supports surface rust; permanent rusty patches or bands need inspection.',
    },
    {
      title: 'Keep oils and rust treatments off the brakes',
      body:
        'Never apply penetrating oil, grease, rust converter, or a protective coating to the pad-swept rotor face. Contamination can transfer to the pads and reduce brake performance. Brake cleaner also cannot repair pitting, scoring, or uneven wear.',
    },
    {
      title: 'Request a complete brake inspection',
      body:
        'Ask the shop to inspect both rotor faces, measure thickness against the rotor marking or vehicle specifications, assess pitting and scoring, and check the pads, calipers, slides, hardware, hub, and runout as applicable.',
    },
    {
      title: 'Treat persistent brake vibration as a separate fault',
      body:
        'If pulsation remains after the surface film is gone, do not keep trying to scrub the rotors through harder braking. Rotor thickness variation, deposits, hub runout, or another brake fault may need diagnosis.',
      destinationProblemSlug: 'wheel-vibration',
    },
    {
      title: 'Act quickly if the car pulls while braking',
      body:
        'A pull under braking can mean the brakes are applying unevenly. Minimize driving and arrange inspection; stop if the pull is strong, sudden, or difficult to control.',
      destinationProblemSlug: 'car-pulls-to-one-side',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Braking feels weaker or takes longer than usual',
      description:
        'Do not continue testing the vehicle in traffic. Stop safely and arrange towing if normal braking ability is reduced.',
      severity: 'danger',
    },
    {
      title: 'The brake pedal feels soft, spongy, or sinks',
      description:
        'A changed pedal can indicate a hydraulic or mechanical brake problem unrelated to harmless surface rust.',
      severity: 'danger',
    },
    {
      title: 'A red brake-system warning stays on',
      description:
        "Confirm that the parking brake is released. If the warning remains, follow the owner's manual and do not keep driving with abnormal brake operation.",
      severity: 'danger',
    },
    {
      title: 'The car pulls, grabs, or changes direction under braking',
      description: 'Unequal brake force can make the vehicle difficult to control and needs prompt diagnosis.',
      severity: 'warning',
    },
    {
      title: 'Pulsation or shaking continues after the rust film clears',
      description:
        'Persistent vibration can reflect an uneven rotor surface, thickness variation, deposits, or another brake or hub issue.',
      severity: 'warning',
    },
    {
      title: 'You hear grinding or smell overheated brakes',
      description:
        'Grinding can indicate damaged friction components, while a hot odor can accompany a dragging or overheated brake. Stop if there is smoke, weak braking, or excessive heat at one wheel.',
      severity: 'danger',
    },
    {
      title: 'The rotor is cracked, deeply scored, or heavily flaking',
      description:
        "Physical damage and severe corrosion require inspection against the manufacturer's service limits and may rule out continued use or resurfacing.",
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why do brake rotors rust after rain?',
      answer:
        'The working surfaces of many rotors are exposed cast iron. Water and oxygen can leave a thin orange oxidation layer while the vehicle is parked.',
    },
    {
      question: 'Will normal braking remove rotor rust?',
      answer:
        'Light surface rust usually clears from the pad-swept area during normal braking. Heavy corrosion, pitting, or rust caused by incomplete pad contact may remain.',
    },
    {
      question: 'Is rust on the rotor hub or outer lip dangerous?',
      answer:
        'Not by itself. Those areas may not touch the pads, so they can remain rusty while the working surface stays clean. Deep scaling, cracks, or loose metal still need inspection.',
    },
    {
      question: 'Can I remove the rust with several hard stops?',
      answer:
        'Do not invent a hard-stop procedure. Use ordinary braking for light surface film and follow only the burnishing instructions published for your specific vehicle. Persistent rust or vibration needs inspection.',
    },
    {
      question: 'Should I spray anything on rusty rotors?',
      answer:
        'No oil, grease, penetrating fluid, rust converter, or ordinary paint should touch the pad-swept face. These products can contaminate the pads and reduce braking performance.',
    },
    {
      question: 'Do electric and hybrid cars get more rotor rust?',
      answer:
        'They can. Regenerative braking may reduce how often the friction brakes are used, so some manufacturers provide vehicle-specific guidance for using or maintaining the mechanical brakes.',
    },
    {
      question: 'Does a pitted rotor always need replacement?',
      answer:
        'No. The decision depends on the depth and extent of damage, remaining rotor thickness, scoring, symptoms, and whether the manufacturer permits resurfacing. Severe corrosion or insufficient thickness can require replacement.',
    },
    {
      question: 'Will rusty brake rotors fail a state inspection?',
      answer:
        'Rules vary by state. Pennsylvania guidance, for example, says rust or pitting alone is not an automatic failure; braking performance, scoring, mechanical damage, and minimum thickness also matter. Do not treat that as a nationwide rule.',
    },
    {
      question: 'Can brand-new rotors develop surface rust?',
      answer:
        'Yes. An uncoated cast-iron friction surface can develop a light film after moisture exposure. Rust that clears normally is different from pitting, deep scoring, or incomplete pad contact.',
    },
    {
      question: 'Is it safe to drive to a repair shop?',
      answer:
        'Only if braking strength, pedal feel, tracking, and vehicle control are normal and there is no grinding, severe vibration, or red brake warning. Otherwise, use roadside assistance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Pennsylvania Department of Transportation',
      title: 'Safety Inspection Bulletin BI11-1: Rusted/Pitted Brake Rotors',
      url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dmv/documents/vehicle-services/bmv-safety-inspection-bulletins/safety_bulletin_bi11-1.pdf',
      sourceType: 'government',
      notes:
        'Pennsylvania-specific guidance says rust or pitting alone is not an inspection failure. Inspectors assess whether it is temporary and whether braking performance, rotor thickness, or scoring creates a rejectable condition. It is not a nationwide rule.',
    },
    {
      publisher: 'Toyota Motor Sales, U.S.A., Inc.',
      title: 'T-SB-0023-24 Rev1: Long-Term Vehicle Storage Guidelines',
      url: 'https://static.nhtsa.gov/odi/tsbs/2024/MC-11005110-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'For covered Toyota vehicles, distinguishes slight rotor rust that is easy to remove by braking from severe storage rust, links severe buildup with possible vibration, and directs diagnosis if vibration remains.',
    },
    {
      publisher: 'General Motors',
      title: 'PI0281J: Underbody Component Corrosion',
      url: 'https://static.nhtsa.gov/odi/tsbs/2023/MC-10235561-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'For listed GM vehicles, says brake surfaces tend to self-clean in use and that extended humid storage can produce uneven rotor corrosion, thickness variation, and pulsation that may not clear through moderate braking.',
    },
    {
      publisher: 'Tesla',
      title: 'Burnishing the Brakes',
      url: 'https://service.tesla.com/docs/Public/diy/modelx/en_us/GUID-D49F81B4-8E10-4A24-871E-5EF2F30C8285.html',
      sourceType: 'manufacturer',
      notes:
        'Explains that rain, humidity, and surface rust can cause temporary disc-brake noise and says persistent noise should be serviced. Its prescribed burnishing procedure applies only to supported Tesla vehicles and is not generalized here.',
    },
    {
      publisher: 'AAA Via',
      title: 'Don’t Wait Until Your Brakes Squeak to Get Them Checked',
      url: 'https://mwg.aaa.com/via/car/brake-check-service-tips',
      sourceType: 'industry',
      notes:
        'Supports vibration, pulling, grinding, hot-brake odor, leaking fluid, a low or spongy pedal, and brake warnings as signs that brake service or towing may be needed.',
    },
    {
      publisher: 'Brembo',
      title: 'The Brembo Guide to Brake Disc Assembly and Maintenance',
      url: 'https://www.bremboparts.com/en/media/page/documents/8b6fd884-e07b-4e99-96b2-16c493862e44',
      sourceType: 'manufacturer',
      notes:
        'Covers rotor inspection and defects, warns that oil or grease contamination can reduce pad performance, and links permanent rusty bands from partial pad contact with reduced braking torque, heat, uneven wear, and vibration.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Bright flashlight',
      description:
        'Helps you compare the visible pad-swept rotor surface with rusty unswept areas without touching brake components.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual and service information",
      description:
        'Provides model-specific brake warnings, maintenance instructions, minimum rotor specifications, and any approved brake burnishing procedure.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Complete wheel-off brake inspection',
      description:
        'Allows both rotor faces, pad wear, caliper movement, rotor thickness, scoring, pitting, and related hardware to be assessed.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Roadside assistance or towing',
      description:
        'The safe way to move a vehicle when braking is weak, the pedal is abnormal, a red brake warning remains on, or the car cannot stop predictably.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'squeaky-brakes',
      anchorText: 'Can I ignore squeaky brakes after the rust clears?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'wheel-vibration',
      anchorText: 'Can I ignore vibration that happens while braking?',
      relationshipType: 'escalation',
    },
    {
      slug: 'car-pulls-to-one-side',
      anchorText: 'Can I ignore a car that pulls when I brake?',
      relationshipType: 'escalation',
    },
    {
      slug: 'abs-warning-light',
      anchorText: 'Can I ignore an ABS warning light with rusty rotors?',
      relationshipType: 'related',
    },
  ],
};
