import type { ProblemSeed } from '../types';

export const waterStainOnCeiling: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'ceilings',
  slug: 'water-stain-on-ceiling',
  canonicalPath: '/home/structure/ceilings/water-stain-on-ceiling/',
  name: 'Water stain on ceiling',
  eyebrow: 'Home · Structure · Ceilings',

  h1: 'Can I Ignore a Water Stain on My Ceiling?',
  seoTitle: 'Ceiling Water Stain: When to Worry and What to Check',
  metaDescription:
    'A ceiling water stain can be old damage or an active leak. Learn when you can wait, when to trace the source, and when sagging or wet wiring makes it urgent.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the room?',
  canIUseItLabel: 'Usually, if the ceiling is dry and firm',

  shortAnswer:
    'Usually, but do not ignore the cause. A dry, unchanged stain from a leak you know was repaired can wait for cosmetic work. A new, damp, growing, soft, sagging, or electrically involved stain needs attention now.',

  whyItMattersHeading: 'Why a Ceiling Water Stain Matters',
  whyItMatters: [
    'A water stain means moisture reached the ceiling at some point. The source may be a roof leak, plumbing above the ceiling, HVAC condensate, or indoor condensation. The stain itself cannot tell you whether the moisture problem is finished, so the first job is finding out whether the area is still getting wet.',
    'Ongoing moisture can damage drywall, ceiling tiles, insulation, paint, and nearby materials. It can also support mold growth. Painting over the discoloration does not fix the moisture source, and porous ceiling materials that become moldy may need to be removed rather than covered up.',
  ].join('\n\n'),

  redFlagsHeading: 'Keep Clear and Deal With It Now If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Checked against current HUD, EPA, FEMA and CPSC guidance on household moisture, mold, ceiling sagging and wet electrical hazards.',
  disclaimer:
    'This page provides general household triage. If the ceiling is sagging, electrically wet, or actively failing, keep clear of the area and use appropriate local emergency or professional help.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'old-dry-stain-after-confirmed-repair',
      label: 'The stain is old, dry, and the leak was already repaired',
      shortDescription:
        'The ceiling feels firm, the mark has not changed, and you know the original water source was fixed.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The remaining problem may be cosmetic',
      resultBody:
        'If the ceiling is fully dry and firm and the original leak has been confirmed repaired, the visible stain can remain after the moisture problem is gone.',
      recommendedAction:
        'Monitor the area for any change. Once you are confident it is staying dry, repair damaged paint or ceiling material as needed.',
    },
    {
      slug: 'new-stain-unknown-source',
      label: 'A new stain appeared and you do not know why',
      shortDescription: 'The mark is recent even though there is no visible dripping or sagging.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Find the source before treating it as cosmetic',
      resultBody:
        'A new stain is evidence that moisture reached the ceiling recently. The source could still be active even if the surface does not feel wet when you check it.',
      recommendedAction:
        'Look at what is directly above the stain and check for roof, plumbing, bathroom, appliance, or HVAC sources. Arrange further inspection if the cause is not obvious.',
    },
    {
      slug: 'stain-grows-after-rain',
      label: 'The stain gets larger or darker after rain',
      shortDescription: 'The mark changes when it rains or after storms.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as an active water-entry problem',
      resultBody:
        'A stain that repeatedly changes with rainfall strongly points toward ongoing exterior water intrusion rather than old cosmetic damage.',
      recommendedAction:
        'Have the roof and relevant exterior penetrations inspected. Protect the interior from further water only where you can do so without standing under a soft or sagging ceiling.',
    },
    {
      slug: 'stain-below-bathroom-or-plumbing',
      label: 'The stain is below a bathroom, kitchen, or plumbing fixture',
      shortDescription:
        'Water-using fixtures, pipes, drains, or appliances are located above the stained area.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Check the plumbing above it',
      resultBody:
        'Supply lines, drains, toilets, tubs, showers, sinks, appliances, and their connections can leak into the ceiling below without producing an obvious puddle upstairs.',
      recommendedAction:
        'Stop using the suspected fixture if the stain changes during use. Check accessible plumbing and arrange leak diagnosis before repairing the ceiling finish.',
    },
    {
      slug: 'bathroom-condensation-pattern',
      label: 'The mark appears in a humid bathroom with no obvious leak above',
      shortDescription: 'Moisture collects on the ceiling during showers or other high-humidity conditions.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Condensation is possible, but moisture still needs controlling',
      resultBody:
        'High indoor humidity and condensation can wet ceiling surfaces even without a plumbing or roof leak. Repeated dampness can still support mold and damage finishes.',
      recommendedAction:
        'Use effective exhaust ventilation and reduce excess humidity. If the stain keeps changing despite better moisture control, investigate for a hidden leak.',
    },
    {
      slug: 'ceiling-damp-soft-or-bubbling',
      label: 'The ceiling feels damp, soft, swollen, or the paint is bubbling',
      shortDescription: 'The material itself is changing rather than showing only a flat discoloration.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The ceiling material is being affected',
      resultBody:
        'Softness, swelling, peeling, or bubbling suggests moisture has affected the ceiling finish or material beneath it. Covering the area with new paint will not solve the underlying problem.',
      recommendedAction:
        'Stop the water source first. Have damaged material assessed after the area is dry and keep watching for any sagging or loss of firmness.',
    },
    {
      slug: 'musty-smell-or-visible-mold',
      label: 'There is a musty smell or visible mold near the stain',
      shortDescription: 'Discoloration is accompanied by mold-like growth or a persistent musty odor.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Deal with both the moisture and the mold',
      resultBody:
        'Mold growth indicates a moisture problem that needs correction. EPA and CDC guidance emphasizes fixing the water source rather than treating mold as a surface-only problem.',
      recommendedAction:
        'Find and correct the moisture source. Clean or remove affected materials using appropriate mold-cleanup guidance and consider professional remediation when the damage is extensive or difficult to access.',
    },
    {
      slug: 'active-water-dripping',
      label: 'Water is actively dripping from the ceiling',
      shortDescription: 'Drops are forming or water is running through the ceiling surface.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop treating this as a stain',
      resultBody:
        'Active dripping means water is entering the ceiling now. Continued wetting can damage ceiling materials and anything below.',
      recommendedAction:
        'Stop the water source if you can identify and isolate it safely. Keep clear of electrical fixtures and watch the ceiling for swelling, softening, or sagging while arranging repair.',
    },
    {
      slug: 'ceiling-sagging-or-bulging',
      label: 'The ceiling is sagging, bulging, or bowing around the stain',
      shortDescription: 'The ceiling surface has visibly dropped or formed a swollen area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stay out from underneath it',
      resultBody:
        'Sagging can indicate that ceiling materials have weakened or that water is trapped above them. FEMA specifically warns that water may be trapped where damaged ceilings are sagging.',
      recommendedAction:
        'Keep people and pets away from the area below the sag. Do not poke, cut, or press on the ceiling to release water. Have the leak and ceiling condition handled safely.',
    },
    {
      slug: 'water-near-light-fixture',
      label: 'The stain reaches a light, fan, detector, or other electrical equipment',
      shortDescription: 'Moisture is touching or approaching equipment connected to household electricity.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as an electrical hazard',
      resultBody:
        'Electrical equipment that becomes wet can create shock or fire hazards. Do not touch a wet fixture, switch, ceiling fan, detector, or other electrical component while it may be energized.',
      recommendedAction:
        'Keep away from the wet electrical area. If power must be isolated, do so only from a dry and safely accessible location or have appropriate electrical help handle it before the area is used normally again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The stain tells you water has been there',
      description:
        'Even a dry mark is evidence of previous moisture. The immediate question is whether the source has stopped or is still feeding water into the ceiling.',
      severity: 'caution',
      chainLabel: 'Moisture reached the ceiling',
    },
    {
      stageLabel: 'IF MOISTURE CONTINUES',
      title: 'Ceiling materials can stay wet and deteriorate',
      description:
        'Drywall, ceiling tile, insulation, paint, and other materials can be damaged when the water source remains active.',
      severity: 'caution',
      chainLabel: 'Continued wetting',
    },
    {
      stageLabel: 'IF MOLD DEVELOPS',
      title: 'Cleanup becomes more than a paint job',
      description:
        'Mold grows where moisture is available. Porous materials such as ceiling tiles can be difficult to clean completely once mold is established.',
      severity: 'warning',
      chainLabel: 'Persistent moisture → mold',
    },
    {
      stageLabel: 'IF THE CEILING SOFTENS OR SAGS',
      title: 'Falling material becomes a concern',
      description:
        'A visibly sagging or bulging wet ceiling should not be treated as a cosmetic stain. Keep clear of the area until the cause and ceiling condition are addressed.',
      severity: 'danger',
      chainLabel: 'Wet material → loss of strength',
    },
    {
      stageLabel: 'IF WATER REACHES ELECTRICAL EQUIPMENT',
      title: 'Shock and fire hazards enter the picture',
      description:
        'Moisture around energized lights, fans, switches, wiring, or other electrical equipment raises the safety risk sharply.',
      severity: 'danger',
      chainLabel: 'Water + electricity',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Old dry stain after a leak that was confirmed repaired',
      ignoreAnswer: 'Yes, cosmetically',
      severity: 'info',
      whatToDo: 'Monitor for changes and repair the finish once the ceiling is fully dry and stable.',
    },
    {
      situation: 'New stain with no known source',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Identify what is above the stain and investigate the likely roof, plumbing, HVAC, or condensation source.',
    },
    {
      situation: 'Stain enlarges or darkens after rain',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat it as possible active exterior water intrusion and arrange roof or building-envelope inspection.',
    },
    {
      situation: 'Stain changes when an upstairs fixture is used',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop using the suspected fixture if practical and check the plumbing or drain serving it.',
    },
    {
      situation: 'Ceiling is damp, soft, peeling, or bubbling',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop the moisture source before repairing paint or ceiling material and watch closely for sagging.',
    },
    {
      situation: 'Musty odor or visible mold appears around the stain',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Correct the moisture problem and address the mold rather than covering the area with paint.',
    },
    {
      situation: 'Water is actively dripping or the ceiling is sagging',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep clear of unstable ceiling material and arrange prompt control of the water source and damaged area.',
    },
    {
      situation: 'Moisture has reached a light, fan, detector, or electrical fixture',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not touch wet electrical equipment while it may be energized. Keep away and have the electrical and water hazards addressed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Decide whether the stain is active',
      body:
        'Look for changes in size, color, dampness, peeling, bubbling, softness, dripping, or sagging. Compare the area after rain or after nearby plumbing and HVAC equipment have been used.',
    },
    {
      title: 'Step 2: Work out what is above the stain',
      body:
        'A top-floor stain may point toward the roof or exterior envelope. A stain below a bathroom, kitchen, appliance, pipe, or HVAC system gives you a different place to start looking.',
    },
    {
      title: 'Step 3: Stop the water source before repairing the ceiling',
      body:
        'Fix the roof, plumbing, drainage, HVAC condensate, or humidity problem responsible for the moisture. Do not use stain-blocking primer or new paint as a substitute for stopping the water.',
    },
    {
      title: 'Step 4: Let the area dry and assess the material',
      body:
        'Once the source is corrected, determine whether the ceiling remains firm and intact. Moldy, badly softened, crumbling, or deformed porous material may require removal or replacement instead of cosmetic repair.',
    },
    {
      title: 'Step 5: Document recurring or concealed damage',
      body:
        'Photograph the stain and note when it changes. This can help a plumber, roofer, HVAC service, restoration company, landlord, property manager, or insurer understand the pattern without assuming the stain itself identifies the cause.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The ceiling is sagging or bulging',
      description:
        'Water may be trapped above weakened ceiling material. Do not stand underneath it or puncture the bulge as a casual DIY fix.',
      severity: 'danger',
    },
    {
      title: 'Water is touching a light or other electrical equipment',
      description: 'Do not touch wet electrical fixtures or controls while they may be energized.',
      severity: 'danger',
    },
    {
      title: 'Water is actively dripping and spreading',
      description:
        'The moisture source is still active and further ceiling damage can continue until the water is controlled.',
      severity: 'warning',
    },
    {
      title: 'The ceiling has become soft, crumbly, or visibly deformed',
      description:
        'Material damage has progressed beyond a surface stain and needs assessment before the area is treated as stable.',
      severity: 'warning',
    },
    {
      title: 'You see mold or smell a persistent musty odor',
      description:
        'Address the moisture source along with the contaminated material rather than painting over it.',
      severity: 'warning',
    },
    {
      title: 'The stain repeatedly returns after rain or plumbing use',
      description:
        'A recurring pattern strongly suggests that the underlying water source has not been corrected.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can an old ceiling water stain stay visible after the leak is fixed?',
      answer:
        'Yes. Drywall and paint can remain discolored after the moisture source has been repaired. The important part is confirming that the area stays dry and does not soften, grow, or change.',
    },
    {
      question: 'Can I just paint over a ceiling water stain?',
      answer:
        'Not until the moisture source is fixed and the area is dry. EPA guidance says not to paint over moldy surfaces, and new paint will not stop an active leak hidden above the ceiling.',
    },
    {
      question: 'Does a water stain automatically mean there is mold?',
      answer:
        'No. A stain proves that moisture reached the area but does not prove mold is present. Mold becomes more likely when materials remain damp, and visible growth or a musty odor should be addressed.',
    },
    {
      question: 'How can I tell whether the leak is still active?',
      answer:
        'Watch for changes in the stain, dampness, softness, peeling, bubbling, or dripping. A moisture meter can help compare suspicious areas, but it does not identify the source by itself.',
    },
    {
      question: 'Can condensation cause stains on a ceiling?',
      answer:
        'Yes. High humidity and condensation can wet ceiling surfaces. Improve ventilation and humidity control, but investigate further if the mark keeps growing or appears unrelated to humid conditions.',
    },
    {
      question: 'What does a brown or yellow ceiling stain mean?',
      answer:
        "The color alone does not reliably identify the source. Use the stain's location, when it changes, and what is above it to narrow down where the moisture is coming from.",
    },
    {
      question: 'Should I call a plumber or a roofer?',
      answer:
        'Start with the location and pattern. A stain below plumbing or a bathroom points toward plumbing, while a top-floor stain that changes with rain points toward the roof or exterior water entry.',
    },
    {
      question: 'Does stained drywall always need to be replaced?',
      answer:
        'No. Dry, firm drywall with only cosmetic staining may be repairable. Material that is moldy, badly softened, crumbling, sagging, or otherwise damaged may need removal and replacement.',
    },
    {
      question: 'What if I rent the home?',
      answer:
        "Report the stain and any change in moisture promptly through your landlord or property manager's maintenance process. Repair duties and response rules vary by lease and location, so this page does not assume one nationwide requirement.",
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Housing and Urban Development',
      title: 'MOLD',
      url: 'https://www.hud.gov/sites/dfiles/HH/documents/OLHCHH_MOLD.PDF',
      sourceType: 'government',
      notes:
        'Identifies ceiling stains and discoloration as signs to check for moisture problems and explains that roof leaks, plumbing leaks, condensation, and other wet conditions can support mold growth.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'What are the basic mold cleanup steps?',
      url: 'https://www.epa.gov/mold/what-are-basic-mold-cleanup-steps',
      sourceType: 'government',
      notes:
        'Emphasizes moisture control, prompt repair of water problems, complete drying, and removal of porous materials such as ceiling tiles when mold cannot be cleaned effectively.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'The Key to Mold Control is Moisture Control - Infographic',
      url: 'https://www.epa.gov/mold/key-mold-control-moisture-control-infographic',
      sourceType: 'government',
      notes:
        'Explains that mold requires moisture, recommends fixing leaks and drying wet surfaces, and notes that moldy absorbent materials such as ceiling tiles may need replacement.',
    },
    {
      publisher: 'Federal Emergency Management Agency',
      title: 'FEMA Offers Tips for Safely Returning to a Fire- or Flood-Damaged Home',
      url: 'https://www.fema.gov/print/pdf/node/679890',
      sourceType: 'government',
      notes:
        'In post-disaster safety guidance, FEMA warns occupants to check ceilings for sagging because water may be trapped above them and advises caution around damaged electrical and structural conditions.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Home Electrical Safety Checklist',
      url: 'https://www.cpsc.gov/safety-education/safety-guides/electronics-and-electrical-home/home-electrical-safety-checklist',
      sourceType: 'government',
      notes:
        'Provides household electrical-safety guidance and warns that wet electrical equipment can create serious shock or electrocution hazards.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Moisture meter',
      description:
        'Helps compare the stained area with nearby dry material and can show whether moisture is still present near the surface.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Plumbing, roofing, or HVAC inspection',
      description:
        'The right service depends on what is above the stain and whether the pattern follows plumbing use, rainfall, or HVAC operation.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Water-damage restoration service',
      description:
        'Useful when ceiling materials are extensively wet, moldy, difficult to access, or require removal and drying beyond a minor repair.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'EPA mold and moisture guidance',
      description:
        'Provides practical guidance on stopping moisture, cleaning mold, drying materials, and deciding when porous materials may need replacement.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'missing-roof-shingle',
      anchorText: 'Could a missing roof shingle be letting water in?',
      relationshipType: 'cause',
    },
    {
      slug: 'ac-leaking-water-inside',
      anchorText: 'Is your air conditioner leaking water indoors?',
      relationshipType: 'cause',
    },
    {
      slug: 'water-heater-leaking',
      anchorText: 'Is the water heater above you leaking?',
      relationshipType: 'cause',
    },
  ],
};
