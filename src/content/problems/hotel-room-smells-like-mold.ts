import type { ProblemSeed } from '../types';

export const hotelRoomSmellsLikeMold: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'hotel-rooms',
  slug: 'hotel-room-smells-like-mold',
  canonicalPath: '/travel/lodging/hotel-rooms/hotel-room-smells-like-mold/',
  name: 'Moldy or musty smell in a hotel room',
  eyebrow: 'Travel · Lodging · Hotel Rooms',

  h1: 'Can I Ignore a Hotel Room That Smells Like Mold?',
  seoTitle: 'Musty Hotel Room: When to Ask for a Different Room',
  metaDescription:
    'A musty hotel-room smell can signal hidden dampness. Learn when to request another room, turn off the AC, document the problem, or seek help.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I sleep in the room?',
  canIUseItLabel: 'Only if the odor clears and stays gone',

  shortAnswer:
    'Probably not. A musty odor can be the only sign of hidden dampness or mold, so report it before settling in. If it persists, returns when the AC runs, or comes with visible moisture or symptoms, ask for a different room rather than sleeping there.',

  whyItMattersHeading: 'The Smell May Be the Only Warning',
  whyItMatters: [
    'Mold is not always visible. Damp carpet padding, drywall, wallpaper, ceiling materials, bathroom cavities, and air-conditioning components can hide moisture and growth. EPA and NIOSH guidance treats a moldy or musty odor as a reason to investigate rather than something to cover with fragrance.',
    'People react differently to damp buildings. Possible effects include eye, nose, throat, skin, and lung irritation, allergic symptoms, and worsening asthma. There is no federal mold exposure limit or quick air test that can certify a room safe, so the practical choice for a hotel guest is to reduce exposure and let the property investigate the source.',
  ].join('\n\n'),

  redFlagsHeading: 'Leave the Room Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Hotel-room mold odors, hidden dampness, HVAC concerns, health effects, testing limits, and room-change triage checked against EPA, CDC/NIOSH, and WHO guidance.',
  disclaimer:
    'General triage for hotel-room odors, not a mold inspection or a guarantee of hotel remedies. Booking terms, refunds, and lodging rules vary.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'arrival-odor-clears',
      label: 'The room smells stale at first, then clears completely',
      shortDescription:
        'The odor disappears after the door is opened, does not return with the AC or bathroom use, and there is no visible dampness or irritation.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'A brief check is reasonable',
      resultBody:
        'Smell alone does not prove mold. If the odor fully disappears, stays gone, and no dampness or symptoms appear, you do not need to abandon the room immediately.',
      recommendedAction:
        'Note the odor and recheck after using the AC and bathroom. Do not move furniture or open equipment to investigate. Report it if it returns.',
    },
    {
      slug: 'shower-odor-clears',
      label: 'The odor appears only during a steamy shower and clears',
      shortDescription:
        'The bathroom smells musty while humid but returns to normal after ventilation, with no stains, leaks, soft surfaces, or recurring odor.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Ventilate and watch once',
      resultBody:
        'Steam can intensify an existing bathroom odor. If ventilation clears it completely and the smell does not persist once the room is dry, brief monitoring is reasonable.',
      recommendedAction:
        'Run the bathroom exhaust if available. Call the front desk if the odor lingers, returns while the bathroom is dry, or appears with visible growth or water damage.',
    },
    {
      slug: 'persistent-room-odor',
      label: 'The musty smell stays after the room has aired out',
      shortDescription:
        'The odor remains around the bed, carpet, walls, closet, or curtains and does not fade with ordinary ventilation.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Ask to change rooms',
      resultBody:
        'A persistent musty odor is a recognized sign of possible hidden dampness or mold. You cannot rule out growth behind finishes or beneath carpet by looking around the room.',
      recommendedAction:
        'Stop unpacking, report the odor, and ask for a room without the same smell. Check the replacement room before moving your belongings into it.',
    },
    {
      slug: 'odor-when-ac-runs',
      label: 'The smell starts or gets stronger when the AC runs',
      shortDescription:
        'Air from the room unit or vent produces the odor, or the smell fades when the system is switched off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the HVAC as a possible source',
      resultBody:
        'Moisture can collect in drain pans, liners, filters, or ductwork. EPA warns that a mold-contaminated HVAC system can spread contamination and increase occupant exposure.',
      recommendedAction:
        'Turn the unit off with its normal controls, leave the room, and tell the hotel exactly what triggers the odor. Do not remove a cover or sniff closely into a vent.',
    },
    {
      slug: 'visible-dampness-or-growth',
      label: 'You see spots, stains, leaks, or damp materials',
      shortDescription:
        'There is suspected growth, wet carpet, peeling wallpaper, a water stain, condensation around the AC, or a soft or swollen wall or ceiling.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The odor now has a visible moisture clue',
      resultBody:
        'Visible growth or water damage makes a hidden moisture problem more likely. Disturbing damp finishes or carpet can release material into the room.',
      recommendedAction:
        'Photograph the condition without touching it, leave the affected area alone, and request another room. Report active dripping or a sagging surface immediately.',
    },
    {
      slug: 'sensitive-occupant',
      label: 'Someone staying there has asthma or another high-risk condition',
      shortDescription:
        'A guest has asthma, a mold allergy, another chronic lung condition, or immune suppression.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not use this room as a test',
      resultBody:
        'People with asthma, allergies, other lung conditions, or immune suppression may be more vulnerable to mold-related exposure. CDC guidance advises especially strong avoidance when mold can be seen or smelled.',
      recommendedAction:
        'Wait outside the room and request a different one. If the property cannot provide an acceptable room, arrange other lodging rather than testing whether symptoms develop.',
    },
    {
      slug: 'symptoms-in-room',
      label: 'Coughing, wheezing, irritation, or chest tightness begins',
      shortDescription:
        'Symptoms appear or worsen in the room, especially if they improve after stepping outside.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Leave the room now',
      resultBody:
        'Eye and airway irritation, allergy symptoms, and asthma attacks can occur in damp or moldy environments. A pattern tied to the room is enough reason to stop the exposure.',
      recommendedAction:
        'Move to fresh air, follow any existing asthma or allergy action plan, and notify the hotel. Get urgent medical help for serious or worsening breathing difficulty.',
    },
    {
      slug: 'odor-masked-with-spray',
      label: 'Staff sprays fragrance, but the musty smell returns',
      shortDescription:
        'Air freshener or cleaning fragrance temporarily covers the odor without any inspection, drying, repair, or room change.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Masking the smell is not a fix',
      resultBody:
        'Fragrance may make the odor harder to notice, but it does not remove hidden moisture or mold. NIOSH specifically warns against masking musty odors instead of correcting damp materials.',
      recommendedAction:
        'Decline the treated room if the underlying odor returns. Ask for a different room or escalate to the manager and booking service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The source may remain hidden',
      description:
        'A musty odor can be the only clue to damp carpet backing, wall cavities, ceiling materials, or air-conditioning components.',
      severity: 'caution',
      chainLabel: 'Odor without a visible source',
    },
    {
      stageLabel: 'IF YOU KEEP STAYING',
      title: 'Irritation or allergy symptoms may develop',
      description:
        'Damp-building exposure is associated with respiratory symptoms, allergic reactions, eye or skin irritation, and worsening asthma.',
      severity: 'warning',
      chainLabel: 'Continued exposure',
    },
    {
      stageLabel: 'IF THE HVAC IS INVOLVED',
      title: 'The system may distribute contaminated air',
      description:
        'If an air-conditioning system is contaminated, running it can move mold and dampness-related material beyond the original source.',
      severity: 'warning',
      chainLabel: 'Local source → air distribution',
    },
    {
      stageLabel: 'IF MOISTURE CONTINUES',
      title: 'The building problem remains',
      description:
        'Air freshener and surface wiping do not correct a leak, wet insulation, poor drainage, or persistent humidity. Growth and material damage can continue behind the finish.',
      severity: 'warning',
      chainLabel: 'Moisture → recurring growth',
    },
    {
      stageLabel: 'IF BREATHING WORSENS',
      title: 'A room complaint becomes a medical issue',
      description:
        'Wheezing, chest tightness, or serious breathing difficulty can require urgent treatment, particularly for someone with asthma or another lung condition.',
      severity: 'danger',
      chainLabel: 'Exposure → respiratory reaction',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Faint odor at entry that fully clears and stays gone',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Recheck after the AC and bathroom have been used. Report the odor if it returns or you find dampness.',
    },
    {
      situation: 'Persistent musty odor after ordinary ventilation',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop unpacking and request another room that you can inspect before accepting.',
    },
    {
      situation: 'Odor starts or gets stronger when the AC runs',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Switch the unit off with its normal control, leave the room, and report the HVAC connection to the hotel.',
    },
    {
      situation: 'Odor occurs during a shower and disappears once the bathroom is dry',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Use the exhaust fan if available and report any odor that persists or returns while the bathroom is dry.',
    },
    {
      situation: 'Visible growth, an active leak, wet carpet, or damaged wall or ceiling',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Photograph it without touching or disturbing the material, leave the affected area, and ask to move.',
    },
    {
      situation: 'A guest has asthma, a mold allergy, lung disease, or immune suppression',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Avoid the room and arrange a replacement rather than waiting to see whether symptoms occur.',
    },
    {
      situation: 'New coughing, wheezing, chest tightness, burning eyes, or a rash',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Leave the room, follow any existing medical action plan, and seek care if symptoms are serious or do not settle.',
    },
    {
      situation: 'No acceptable room is immediately available and no red flags are present',
      ignoreAnswer: 'Only while arranging another room',
      severity: 'caution',
      whatToDo:
        'Wait in a lobby or other clean area when practical and arrange a room change or alternative lodging. Do not remain if symptoms or visible damage appear.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Document what you notice before unpacking',
      body:
        'Photograph visible stains, leaks, damp carpet, peeling finishes, and the room number. Note whether the odor is strongest near the bathroom, window, carpet, or AC and whether operating the AC changes it.',
    },
    {
      title: 'Ask for a different room and inspect it first',
      body:
        'Tell the front desk that the room has a persistent musty or mold-like odor. Ask for a room in another part of the property if possible, then check it before transferring your belongings.',
    },
    {
      title: 'Stop using an AC that triggers the odor',
      body:
        'Switch it off only through the normal guest controls and wait outside the room. Do not open the unit, remove a filter, or disturb material around the vent.',
    },
    {
      title: 'Escalate if the hotel cannot provide an acceptable room',
      body:
        'Ask for the manager, then contact the booking service or travel insurer if relevant. Keep messages and receipts. Refund and relocation options depend on the booking terms, hotel policy, and local rules.',
    },
    {
      title: 'Respond promptly to symptoms',
      body:
        'Move away from the room and follow your prescribed asthma or allergy plan. Seek urgent medical help for serious breathing difficulty, severe chest tightness, faintness, or symptoms that are rapidly worsening.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Anyone is wheezing or having trouble breathing',
      description:
        'Move to fresh air and use prescribed rescue treatment as directed. Serious or worsening breathing difficulty needs urgent medical help.',
      severity: 'danger',
    },
    {
      title: 'A guest has asthma, lung disease, or immune suppression',
      description: 'Do not wait inside the room for proof that the odor is mold or for symptoms to begin.',
      severity: 'danger',
    },
    {
      title: 'There is an active leak or wet, sagging material',
      description:
        'Water-damaged ceilings and walls may involve more than mold and should not be touched or disturbed by a guest.',
      severity: 'danger',
    },
    {
      title: 'The odor blows directly from the AC or a vent',
      description:
        'Stop the unit with its normal controls and report a possible HVAC moisture or contamination problem.',
      severity: 'warning',
    },
    {
      title: 'The room causes eye, throat, skin, or airway irritation',
      description: 'Symptoms tied to the room are a reason to end the exposure even if no growth is visible.',
      severity: 'warning',
    },
    {
      title: 'The odor may actually be gas, sewage, smoke, or chemicals',
      description:
        'Do not assume every bad smell is mold. Leave immediately and contact hotel staff from another location if the odor is burning, gas-like, chemical, or accompanied by dizziness or nausea.',
      severity: 'danger',
    },
    {
      title: 'The replacement room or nearby hallway has the same odor',
      description:
        'The issue may extend beyond one guest room. Request another part of the property or arrange different lodging.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does a musty smell prove there is mold?',
      answer:
        'No. Odor alone cannot identify the exact source, but EPA and NIOSH treat moldy or musty odors as useful indicators of possible dampness or hidden growth. It is enough reason to report the room.',
    },
    {
      question: 'Should I use a mold test kit in the hotel room?',
      answer:
        'No. NIOSH does not recommend routine air sampling, and short samples cannot be interpreted as proof that a room is safe. The hotel should investigate moisture, visible damage, odors, and the HVAC system.',
    },
    {
      question: 'Is black mold automatically more dangerous than other colors?',
      answer:
        'Color does not determine what action a hotel guest should take. Any suspected indoor mold indicates a moisture problem, and the practical response is to avoid the affected room and have the source addressed.',
    },
    {
      question: 'Can I sleep there for one night?',
      answer:
        'If the odor persists, ask to move. If no alternative is immediately available, you have no symptoms or high-risk condition, and there is no visible damage, remain only while arranging a safer option.',
    },
    {
      question: 'What if the smell happens only when the air conditioner runs?',
      answer:
        'Turn the unit off with its normal control and request another room. EPA advises against running an HVAC system that is known or suspected to be contaminated with mold.',
    },
    {
      question: 'What if the smell is only in the bathroom?',
      answer:
        'If it occurs only with shower steam and disappears once the bathroom is dry, ventilate and watch for recurrence. A smell that remains in a dry bathroom, or comes with stains or leaks, should be reported and is a reason to move.',
    },
    {
      question: 'Will opening a window or using an air purifier make the room safe?',
      answer:
        'It may reduce an odor or some airborne particles, but it does not fix wet materials or remove hidden growth. EPA says air cleaners do not solve mold and musty-odor problems because the moisture source remains.',
    },
    {
      question: 'Can the hotel solve it by spraying air freshener?',
      answer:
        'No. Fragrance can mask the warning sign without correcting the moisture or damaged material. If the musty odor returns, ask for another room.',
    },
    {
      question: 'Am I automatically entitled to a refund?',
      answer:
        'Not automatically under one nationwide rule. Ask the hotel and booking service, document the condition and your request to move, and keep receipts if you must arrange other lodging. Rights and policies vary.',
    },
    {
      question: 'What if my symptoms improve when I leave the room?',
      answer:
        'Do not use that improvement as a reason to go back and test the room again. Report the pattern, stay elsewhere, and contact a health care provider if symptoms persist, recur, or are concerning.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Mold Remediation in Schools and Commercial Buildings Guide: Chapter 3',
      url: 'https://www.epa.gov/mold/mold-remediation-schools-and-commercial-buildings-guide-chapter-3',
      sourceType: 'government',
      notes:
        'Identifies musty odors as a possible sign of hidden mold, advises against running HVAC suspected of contamination, and discusses protecting or temporarily relocating building occupants.',
    },
    {
      publisher: 'National Institute for Occupational Safety and Health',
      title: 'Mold, Testing, and Remediation',
      url: 'https://www.cdc.gov/niosh/mold/testing-remediation/index.html',
      sourceType: 'government',
      notes:
        'States that musty odors and thorough visual inspection are more reliable than routine air sampling and that indoor mold indicates a moisture problem that should be addressed.',
    },
    {
      publisher: 'National Institute for Occupational Safety and Health',
      title: 'Health Problems',
      url: 'https://www.cdc.gov/niosh/mold/health-problems/index.html',
      sourceType: 'government',
      notes:
        'Summarizes respiratory symptoms, irritation, allergies, asthma, and other health problems reported in damp buildings, including concerns involving contaminated air-conditioning systems.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title:
        'Clinical Guidance for Asthma, Other Respiratory Conditions, and/or Mold Allergy After a Severe Weather Event',
      url: 'https://www.cdc.gov/asthma/hcp/clinical-guidance/index.html',
      sourceType: 'government',
      notes:
        'In its severe-weather clinical guidance, CDC advises people with asthma or other lung conditions to avoid buildings where mold is seen or smelled and gives stronger avoidance guidance for immune suppression.',
    },
    {
      publisher: 'World Health Organization',
      title: 'WHO guidelines for indoor air quality: dampness and mould',
      url: 'https://www.who.int/publications/i/item/9789289041683',
      sourceType: 'other',
      notes:
        'Reviews evidence linking persistent indoor dampness and microbial growth with respiratory symptoms, allergies, and asthma and recommends preventing or minimizing those conditions.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Guide to Air Cleaners in the Home',
      url: 'https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home',
      sourceType: 'government',
      notes:
        'Explains that portable air cleaners and HVAC filters may reduce particles or odors but cannot solve a mold problem without removing growth and correcting the moisture source.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Phone camera and notes app',
      description:
        'Use them to record the room number, visible water damage, when the odor occurs, who you notified, and how the hotel responded.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Hotel manager or guest services',
      description:
        'The property needs to inspect the moisture source, HVAC equipment, and affected materials and arrange a room change when appropriate.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Booking platform or travel insurer support',
      description:
        'Useful if the property cannot provide an acceptable replacement room or you need help documenting relocation expenses under applicable terms.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'EPA and CDC mold guidance',
      description:
        'Provides authoritative information about musty odors, hidden growth, HVAC contamination, health effects, testing limits, and moisture control.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'mold-around-window',
      anchorText: 'What if mold is visible around the window?',
      relationshipType: 'related',
    },
    {
      slug: 'ac-leaking-water-inside',
      anchorText: 'Could an air conditioner leak be causing the damp smell?',
      relationshipType: 'cause',
    },
    {
      slug: 'water-stain-on-ceiling',
      anchorText: 'What if the ceiling also has a water stain?',
      relationshipType: 'cause',
    },
  ],
};
