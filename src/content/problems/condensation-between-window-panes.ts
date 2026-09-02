import type { ProblemSeed } from '../types';

export const condensationBetweenWindowPanes: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'windows',
  slug: 'condensation-between-window-panes',
  canonicalPath: '/home/structure/windows/condensation-between-window-panes/',
  name: 'Condensation Between Window Panes',
  eyebrow: 'Home · Structure · Windows',

  h1: 'Can I Ignore Condensation Between Window Panes?',
  seoTitle: 'Fog Between Double-Pane Windows: Seal Failure and Repair Options',
  metaDescription:
    'Fog trapped inside a double- or triple-pane window means the insulated glass seal has failed. Learn when it can wait and what type of replacement you may need.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep using the window?',
  canIUseItLabel: 'Yes, if the glass and hardware are sound',

  shortAnswer:
    'Usually, briefly. Condensation you cannot wipe from either side means the insulated glass seal has failed. An intact, secure window is not normally an immediate safety problem, but the haze will not be fixed by cleaning or lowering room humidity.',

  whyItMattersHeading: 'What the Fog Means',
  whyItMatters: [
    'Double- and triple-pane windows use a sealed insulating glass unit. Once its edge seal allows moisture into the cavity, insulating gas may escape, the view becomes cloudy, and moisture can leave permanent deposits or affect a low-E coating. The symptom may change with the weather, but that does not mean the seal has recovered.',
    'This failure is inside the glass assembly; it does not automatically mean the frame or wall is leaking. A sound frame may only need a replacement insulated glass unit or sash. Full window replacement makes more sense when the frame is deteriorated, badly out of square, or also allowing air or rainwater into the building.',
  ].join('\n\n'),

  redFlagsHeading: 'Move Faster If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Seal failure, energy effects, repair levels, warranty checks, frame leakage, and egress escalation were checked against DOE, LBNL, NFRC, FGIA, and USFA guidance.',
  disclaimer:
    'General home-triage guidance. Window warranties, rental responsibilities, and building requirements vary by product and location. Cracked or loose glass requires separate safety assessment.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'moisture-wipes-off-the-glass',
      label: 'The moisture wipes off an exposed side of the glass',
      shortDescription:
        'A cloth removes it completely from the room side or exterior, and it does not remain trapped inside.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is surface condensation, not a failed glass seal',
      resultBody:
        'Moisture on an accessible surface comes from the surrounding air meeting cold glass. Occasional exterior condensation can be normal. Recurring interior condensation still deserves humidity and ventilation attention because it can wet the sill.',
      recommendedAction:
        'Wipe the glass dry. If it repeatedly forms indoors or runs onto the frame, address the room moisture rather than ordering a sealed glass replacement.',
    },
    {
      slug: 'new-window-or-warranty-coverage',
      label: 'The window is new or may still be under warranty',
      shortDescription:
        'Fog appeared unexpectedly early, or you still have the order, label, receipt, or warranty information.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Document it before paying for a repair',
      resultBody:
        'Insulating-glass warranties and service terms vary. Altering the glass or hiring an unauthorized service first could complicate a claim.',
      recommendedAction:
        'Photograph the haze, identify the manufacturer and product, and contact the warranty provider before authorizing drilling, defogging, or replacement.',
    },
    {
      slug: 'several-windows-are-fogging',
      label: 'Several insulated glass units are fogging',
      shortDescription: 'The problem affects multiple windows rather than one isolated pane.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Treat this as a replacement-planning issue',
      resultBody:
        'Several failed units can make the loss of clarity, comfort, and energy performance more significant. Their age and construction may also affect whether individual glass replacement remains practical.',
      recommendedAction:
        'Get an assessment covering all affected units and compare glass-only, sash, insert, and full-window options rather than approving one repair at a time.',
    },
    {
      slug: 'permanent-haze-or-discoloration',
      label: 'The cavity has permanent haze, streaks, or discoloration',
      shortDescription:
        'The glass looks milky, rainbow-colored, etched, or dirty even when no droplets are visible.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Moisture may have left lasting damage inside',
      resultBody:
        'Seal failure can allow deposits to form and may degrade a low-E coating. Because those surfaces are enclosed, normal glass cleaning cannot reach them.',
      recommendedAction:
        'Ask whether the affected insulated glass unit or sash can be replaced while keeping the existing frame.',
    },
    {
      slug: 'rental-window-is-fogged',
      label: 'The failed window is in a rental home',
      shortDescription: 'You do not own the window or have authority to arrange permanent alterations.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Report the failed unit instead of modifying it',
      resultBody:
        'The owner or property manager may hold the warranty and must usually approve permanent work. Responsibility and repair procedures depend on the lease and local requirements.',
      recommendedAction:
        'Send dated photographs and a written report. Mention separately if the window leaks rain, will not lock, or is meant to provide emergency escape.',
    },
    {
      slug: 'rainwater-or-soft-frame',
      label: 'Rainwater enters or the frame feels soft',
      shortDescription:
        'Trim becomes wet after rain, paint is failing, or wood around the opening is dark, soft, swollen, or crumbling.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is more than an insulated-glass seal failure',
      resultBody:
        'Fog inside the glass does not itself prove a wall leak, but wet or deteriorated framing shows that water may also be entering around the window. That can damage the frame, insulation, and nearby wall materials.',
      recommendedAction:
        'Have the window opening and water-management details inspected. Do not order glass-only replacement until the separate water-entry problem is understood.',
    },
    {
      slug: 'glass-is-cracked-or-loose',
      label: 'A pane is cracked, chipped at an edge, or loose',
      shortDescription: 'The fogged unit also has visible glass damage or movement within the sash.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the damaged glass as a safety issue',
      resultBody:
        'The failed seal is no longer the main concern. Damaged or poorly retained glass can break further and create sharp fragments.',
      recommendedAction:
        'Keep people away from the window, avoid opening or pressing on it, and arrange glass or sash replacement promptly.',
    },
    {
      slug: 'window-will-not-lock-or-serve-as-an-exit',
      label: 'The window will not close, lock, or open for emergency escape',
      shortDescription:
        'The sash is loose or jammed, the lock will not engage, or a designated escape window cannot be used.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Operation and security take priority over the fog',
      resultBody:
        'Condensation between panes does not normally stop a window from operating. A separate sash, frame, or hardware problem can affect security, fall protection, or an emergency escape route.',
      recommendedAction:
        'Restrict access if the sash feels unstable. Restore secure operation promptly, and do not leave a required escape window blocked or unusable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The insulated glass seal has failed',
      description:
        'Moisture has reached a cavity that was intended to remain sealed and dry. The glass may still be secure and usable, but cleaning its exposed surfaces will not remove the internal fog.',
      severity: 'info',
      chainLabel: 'Seal failure',
    },
    {
      stageLabel: 'IF MOISTURE KEEPS ENTERING',
      title: 'Haze and staining can become permanent',
      description:
        'Moisture can overwhelm the spacer’s drying material and leave deposits on enclosed glass surfaces. Low-E coatings inside the unit may also deteriorate.',
      severity: 'caution',
      chainLabel: 'Internal deposits',
    },
    {
      stageLabel: 'AS PERFORMANCE DECLINES',
      title: 'The original insulating performance is no longer dependable',
      description:
        'A failed seal can release insulating gas and reduce the benefit provided by the sealed cavity. The room may become less comfortable near the affected window.',
      severity: 'caution',
      chainLabel: 'Lower performance',
    },
    {
      stageLabel: 'IF WATER ALSO ENTERS AROUND THE FRAME',
      title: 'The opening can develop a separate moisture problem',
      description:
        'Rain leakage around the frame can wet trim, wall materials, and insulation. This is not an inevitable result of fogged glass, but it requires a broader repair when present.',
      severity: 'warning',
      chainLabel: 'Frame and wall damage',
    },
    {
      stageLabel: 'IF THE GLASS OR SASH BECOMES DAMAGED',
      title: 'Breakage, security, or escape becomes the urgent concern',
      description:
        'Cracked glass, a detached sash, failed locks, or an unusable escape window changes the issue from energy performance to immediate physical safety.',
      severity: 'danger',
      chainLabel: 'Unsafe window',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One window is fogged, but the glass, frame, lock, and operation are sound',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Photograph it, check the warranty, and plan an insulated glass or sash replacement when practical.',
    },
    {
      situation: 'The moisture wipes from the room side or exterior',
      ignoreAnswer: 'Yes, if occasional',
      severity: 'info',
      whatToDo:
        'Treat it as surface condensation. Dry recurring indoor moisture before it can soak the frame or sill.',
    },
    {
      situation: 'The fog disappears in different weather and later returns',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Do not assume the seal healed. Temperature changes can hide the symptom while the underlying seal failure remains.',
    },
    {
      situation: 'Several units are fogged or stained internally',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Arrange a whole-house window assessment and compare targeted glass replacement with broader replacement options.',
    },
    {
      situation: 'The unit may have warranty coverage',
      ignoreAnswer: 'Only until you contact the provider',
      severity: 'caution',
      whatToDo: 'Record the product label and photograph the defect before anyone alters or removes the glass.',
    },
    {
      situation: 'Rain reaches the trim or wall around the window',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Have the opening inspected for frame, flashing, drainage, or installation problems before choosing a glass-only repair.',
    },
    {
      situation: 'The pane is cracked, chipped, shattered, or moving',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep clear of the glass, avoid operating the sash, and arrange prompt professional replacement.',
    },
    {
      situation: 'The window cannot lock or provide its intended emergency exit',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Restore safe operation and security promptly. The between-pane condensation is secondary to the hardware or frame failure.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm where the moisture is',
      body:
        'Clean and dry both accessible faces of the glass. If the haze remains and appears to shift when viewed from an angle, it is inside the insulated glass unit.',
    },
    {
      title: 'Find the product label and warranty',
      body:
        'Look along the sash, frame, glass corner, or original paperwork for the manufacturer and product information. Contact the warranty provider before allowing anyone to alter the sealed unit.',
    },
    {
      title: 'Ask for more than one repair option',
      body:
        'Request separate explanations for replacing the insulated glass unit, replacing the sash, installing an insert window, and replacing the complete frame. Not every option is available for every window design.',
    },
    {
      title: 'Inspect the frame after rain',
      body:
        'Check the sill, trim, and nearby wall for dampness, staining, swelling, or softness. Fog inside the glass and rain leakage around the opening are different failures and may need different repairs.',
    },
    {
      title: 'Clean without damaging the window',
      body:
        'Use a soft cloth and a mild, manufacturer-approved cleaner on exposed surfaces. Do not use razor blades, abrasive pads, solvents, pressure washers, or unapproved film on the window.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The glass is cracked, chipped, loose, or shattered',
      description:
        'Keep people and pets away and avoid operating the window. The physical glass damage is more urgent than the failed seal.',
      severity: 'danger',
    },
    {
      title: 'The sash is sagging, separating, or moving in the frame',
      description: 'Stop using it if it feels unstable. A loose sash can fall or allow glass to break.',
      severity: 'danger',
    },
    {
      title: 'The window will not close or lock',
      description:
        'A separate frame, hardware, or alignment failure may be reducing home security or creating a fall hazard.',
      severity: 'warning',
    },
    {
      title: 'An intended emergency escape window will not open',
      description: 'Do not leave a planned escape route blocked or unusable. Restore operation promptly.',
      severity: 'danger',
    },
    {
      title: 'Rainwater reaches the trim, sill, or wall',
      description:
        'Water around the opening points to a frame, drainage, flashing, or installation problem in addition to the failed insulated glass.',
      severity: 'warning',
    },
    {
      title: 'Wood around the opening is soft, swollen, or crumbling',
      description:
        'Deteriorated framing may not be suitable for a glass-only repair and could require removal of the existing window.',
      severity: 'warning',
    },
    {
      title: 'Moisture on the room-facing glass is soaking the sill',
      description:
        'That is accessible surface condensation, not the trapped cavity moisture. Dry it and address the indoor moisture source to protect nearby materials.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'How can I tell whether condensation is really between the panes?',
      answer:
        'Wipe and dry every accessible glass surface. If the haze remains, cannot be touched, and appears enclosed when viewed from an angle, it is inside the insulated glass unit.',
    },
    {
      question: 'Will a dehumidifier clear condensation between sealed panes?',
      answer:
        'No. Lower humidity can reduce condensation on the room-facing surface, but it cannot remove moisture already trapped inside a factory-sealed glass unit.',
    },
    {
      question: 'Can I clean the inside faces of a double-pane window?',
      answer:
        'Not without dismantling the sealed glass assembly. Those surfaces are not intended to be accessible for household cleaning.',
    },
    {
      question: 'Do I have to replace the entire window?',
      answer:
        'Not always. If the frame is square, dry, and structurally sound, the manufacturer or a glass company may be able to replace only the insulated glass unit or the complete sash.',
    },
    {
      question: 'When is full-frame replacement the better choice?',
      answer:
        'Consider it when the frame is deteriorated, badly out of square, leaking air or rainwater, or incompatible with an appropriate glass or sash replacement.',
    },
    {
      question: 'Does a failed glass seal mean rain is leaking into the wall?',
      answer:
        'No. The glass edge seal and the installation around the window are separate systems. Check for an exterior leak only if the frame, trim, or nearby wall becomes wet.',
    },
    {
      question: 'Why does the fog come and go?',
      answer:
        'Changing glass temperatures affect when trapped moisture becomes visible. Clear glass during different weather does not mean the failed seal has repaired itself.',
    },
    {
      question: 'Can exterior caulk repair the seal between the panes?',
      answer:
        'No. Caulk around the frame may address certain air or water gaps, but it does not rebuild the factory seal around the insulated glass unit.',
    },
    {
      question: 'Is condensation between panes covered by a window warranty?',
      answer:
        'It may be. Coverage, exclusions, service methods, and transfer rules vary, so identify the product and read the specific warranty before paying for work.',
    },
    {
      question: 'Can triple-pane windows develop the same problem?',
      answer:
        'Yes. Any sealed insulating glass assembly can fog if moisture enters one of its enclosed cavities.',
    },
    {
      question: 'Is condensation on the exterior glass also seal failure?',
      answer:
        'No. Exterior condensation can form when humid outdoor air meets cool exterior glass. Unlike between-pane fog, it can be wiped from the exposed surface.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Energy',
      title: 'Measure Guideline: Wood Window Repair, Rehabilitation, and Replacement',
      url: 'https://www1.eere.energy.gov/buildings/publications/pdfs/building_america/measure_guide_wood_windows.pdf',
      sourceType: 'government',
      notes:
        'Identifies condensation or fogging between glass layers as evidence of insulated glass seal failure and discusses glass, sash, and window rehabilitation options.',
    },
    {
      publisher: 'Lawrence Berkeley National Laboratory',
      title: 'WINDOW 7 User Manual',
      url: 'https://windows.lbl.gov/sites/default/files/software/WINDOW/WINDOW7UserManual.pdf',
      sourceType: 'academic',
      notes:
        'Explains how moisture entering a sealed unit overwhelms its desiccant, may affect low-E coatings and gas fill, and generally requires replacement of the failed sealed unit.',
    },
    {
      publisher: 'National Fenestration Rating Council',
      title: 'Guidance On Window Durability',
      url: 'https://efficientwindows.org/existing-durable/',
      sourceType: 'standards_body',
      notes:
        'States that insulating-glass seal failure can cause gas loss, condensation between panes, and degradation of low-E coatings, and advises checking product warranties.',
    },
    {
      publisher: 'National Fenestration Rating Council',
      title: 'Insert Replacement Windows',
      url: 'https://efficientwindows.org/insert-replacement-windows/',
      sourceType: 'standards_body',
      notes:
        'Describes when an existing sound frame can remain and when deterioration, major misalignment, or water and air leakage favor full window replacement.',
    },
    {
      publisher: 'Fenestration and Glazing Industry Alliance',
      title: 'Maximize Window, Door & Skylight Lifespan',
      url: 'https://fgiaonline.org/resources/homeowner-resources/caring-for-your-windows-doors-skylights/',
      sourceType: 'industry',
      notes:
        'Advises inspecting moisture or fogging between panes, repairing damaged components, consulting warranties, keeping drainage paths clear, and avoiding damaging cleaning methods.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Home Fire Escape Plans',
      url: 'https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/home-fire-escape-plans/index.html',
      sourceType: 'government',
      notes:
        'Advises including doors and windows in escape planning, finding two ways out of each room, and ensuring doors and windows are not blocked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Manufacturer product identification and warranty guide',
      description:
        'Helps match labels, glass markings, and order records to the correct warranty and replacement part.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Insulated glass replacement service',
      description:
        'A local glass company can determine whether the sealed glass unit can be replaced while keeping the existing sash and frame.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Window and water-entry assessment',
      description:
        'Appropriate when the frame is damaged, the opening is out of square, or rainwater reaches surrounding materials.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Soft cloth and mild glass cleaner',
      description:
        'Useful for confirming that the haze is not on an accessible surface without scratching coated or heat-treated glass.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'mold-around-window',
      anchorText: 'Is moisture causing mold around the window?',
      relationshipType: 'sibling',
    },
    {
      slug: 'stain-on-a-wall',
      anchorText: 'Is a nearby wall stain coming from the window?',
      relationshipType: 'escalation',
    },
  ],
};
