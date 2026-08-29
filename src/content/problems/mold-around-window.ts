import type { ProblemSeed } from '../types';

/**
 * Home > Structure > Windows > Mold Around a Window.
 *
 * The distinction the page is built around: the mold is the symptom and
 * the moisture is the problem. EPA is explicit that cleaning without
 * fixing the water source brings it straight back, that a small patch is
 * a homeowner job, and that testing the mold is a waste of money because
 * the response is the same either way. The second split is condensation
 * versus a leak — same black spots, different repair.
 */
export const moldAroundWindow: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'windows',
  slug: 'mold-around-window',
  canonicalPath: '/home/structure/windows/mold-around-window/',
  name: 'Mold Around a Window',
  eyebrow: 'Home · Structure · Windows',

  h1: 'Can I Ignore Mold Around a Window?',
  seoTitle: 'Mold Around a Window: Clean It or Call Someone? | Can I Ignore It',
  metaDescription:
    'Black mold on a window frame is a moisture problem, not a cleaning problem. See what you can wipe away yourself and when it needs a professional.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I just leave it?',
  canIUseItLabel: 'No, but most of it you can clean yourself',

  shortAnswer:
    'No, though a small patch is usually a job you can do yourself. EPA says growth under about 10 square feet is generally within reach of a homeowner: clean it with detergent and water and dry it properly. Cleaning alone will not hold, because the mold comes back unless the moisture feeding it stops.',

  whyItMattersHeading: 'Why Does Mold Grow Around a Window?',
  whyItMatters: [
    'Mold needs water, and a window is where a warm room meets a cold surface. Condensation collects on the glass, runs down onto the frame and sits in the corner of the sill. EPA advises drying that surface quickly and cutting the moisture source, because damp materials that dry within a day or two usually never grow anything.',
    'The health side is real but not exotic. EPA links indoor mold to allergic reactions and asthma symptoms, which is why the advice is the same for every colour and species: remove it and fix the water. EPA also says not to pay for sampling — knowing which mold it is does not change what you do about it.',
  ].join('\n\n'),

  redFlagsHeading: 'Get a Professional In If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Condensation and mold on window frames, the EPA cleanup size guidance, detergent-and-water cleaning, indoor humidity targets, porous materials and health effects, checked against U.S. EPA guidance.',
  disclaimer:
    'General guidance for household mold. It does not cover flood damage, sewage contamination, or mold in a home where someone is immune-compromised or has a diagnosed mold allergy — those need individual advice.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'black-spots-on-frame-in-winter',
      label: 'Black spots on the frame, worst in winter',
      shortDescription: 'Appears in the cold months, wipes off, comes back.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Condensation is feeding it',
      resultBody:
        'Cold glass, warm damp air, water running into the corner of the sill. Cleaning works; keeping it clean depends on the humidity in the room.',
      recommendedAction: 'Clean it with detergent and water, dry it, then work on ventilation and indoor humidity.',
    },
    {
      slug: 'mold-on-the-sealant-only',
      label: 'It is only on the rubber seal or the caulk',
      shortDescription: 'A dark line along the sealant, glass and frame clean.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'low',
      resultHeadline: 'Surface growth on a porous strip',
      resultBody:
        'Sealant holds water in its surface, so it colonises first. It often stains permanently even after the mold is dead.',
      recommendedAction: 'Clean it, and if the stain stays, cut out and replace that run of sealant.',
    },
    {
      slug: 'spreading-onto-the-wall',
      label: 'It has spread onto the wall or the curtains',
      shortDescription: 'Past the frame and onto plaster, paint or fabric.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The damp is no longer just on the glass',
      resultBody:
        'Growth on plaster means the wall surface is staying wet. Soft furnishings that have gone moldy are usually not worth saving.',
      recommendedAction: 'Clean what is hard and washable, bin the porous items, and find out why that wall is damp.',
    },
    {
      slug: 'patch-bigger-than-a-few-feet',
      label: 'The patch is bigger than about a yard square',
      shortDescription: 'More than roughly 10 square feet of visible growth.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Bigger than the homeowner guidance covers',
      resultBody:
        'EPA’s do-it-yourself advice is written for patches under about 10 square feet. Above that it points you to its guidance for larger jobs, and how much help you need depends on the area and on what the water did behind it.',
      recommendedAction: 'Read EPA’s guidance for larger areas, and get a mold specialist to look at it before you disturb any more of it.',
    },
    {
      slug: 'sill-soft-or-crumbling',
      label: 'The wood sill is soft or crumbling',
      shortDescription: 'The timber gives under a fingernail or a screwdriver.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The timber has started to rot',
      resultBody:
        'Wood only goes soft after being wet for a long time. Cleaning the surface leaves the decay and whatever is behind it.',
      recommendedAction: 'Have the frame looked at by a carpenter or window fitter — the repair is joinery, not cleaning.',
    },
    {
      slug: 'comes-straight-back',
      label: 'It comes back within weeks of cleaning',
      shortDescription: 'Same spot, same season, every time.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'You are treating the symptom',
      resultBody:
        'Regrowth means the surface is still getting wet. Cleaning again will produce the same result on the same schedule.',
      recommendedAction: 'Measure the room humidity and check the window for a failed seal or a gap letting rain in.',
    },
    {
      slug: 'water-runs-in-when-it-rains',
      label: 'Water actually comes in when it rains',
      shortDescription: 'Wet sill after a storm, not after a cold night.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Rain is getting in',
      resultBody:
        'Rain getting past the frame or the flashing above it soaks the structure, not just the surface. The mold is the least of it.',
      recommendedAction: 'Trace where the water enters and get the frame or flashing repaired.',
      },
    {
      slug: 'fogged-double-glazing',
      label: 'The glass is fogged between the panes',
      shortDescription: 'Misting you cannot wipe off from either side.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'A failed seal in the glazing unit',
      resultBody:
        'The seal on the glazing unit has failed and moisture is trapped inside it. It plays no part in the growth on the frame.',
      recommendedAction: 'Note it for a glazier. The frame mold still needs cleaning on its own schedule.',
    },
    {
      slug: 'asthma-in-the-house',
      label: 'Someone in the house has asthma or allergies',
      shortDescription: 'A child, an older relative, anyone with a reactive chest.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The tolerance for leaving it drops',
      resultBody:
        'EPA links indoor mold to allergic reactions and asthma symptoms. A patch you might otherwise watch is worth clearing now.',
      recommendedAction: 'Clean it promptly, keep that person out of the room while you do, and ventilate afterwards.',
    },
    {
      slug: 'rented-home',
      label: 'You rent the place',
      shortDescription: 'Recurring mold around the windows of a rental.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Report it in writing',
      resultBody:
        'Recurring window mold can come from the building — ventilation, glazing or a leak — or from how the room is heated and aired. Who has to put it right depends on the cause, your lease and local rental rules.',
      recommendedAction: 'Photograph it, report it to the landlord in writing, and keep cleaning the surface meanwhile.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'You leave it',
      title: 'The patch spreads along the sill',
      description: 'Growth follows the water, so it creeps toward the corners where condensation pools.',
      severity: 'info',
      chainLabel: 'Growth spreads',
    },
    {
      stageLabel: 'Over a season',
      title: 'It reaches materials you cannot clean',
      description: 'Plaster, wallpaper, curtains and blinds absorb it. EPA says porous materials often have to be thrown out.',
      severity: 'caution',
      chainLabel: 'Porous materials lost',
    },
    {
      stageLabel: 'Over a season',
      title: 'The frame stays wet underneath',
      description: 'Paint and sealant hide timber that is soaking and drying on repeat.',
      severity: 'warning',
      chainLabel: 'Frame stays wet',
    },
    {
      stageLabel: 'Over years',
      title: 'The wood softens and the joint opens',
      description: 'Rot loosens the frame, which lets in more water, which speeds up the rot.',
      severity: 'warning',
      chainLabel: 'Rot sets in',
    },
    {
      stageLabel: 'The end of it',
      title: 'Growth behind the wall and a frame that needs replacing',
      description: 'By this point the repair is joinery and remediation, and the household has been breathing the spores all along.',
      severity: 'danger',
      chainLabel: 'Hidden growth, frame replaced',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A few spots on the frame or sealant',
      ignoreAnswer: 'Only until the weekend',
      severity: 'caution',
      whatToDo: 'Clean with detergent and water and dry the surface fully.',
    },
    {
      situation: 'Comes back every winter after cleaning',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Fix the humidity and ventilation, not just the surface.',
    },
    {
      situation: 'Spread onto plaster, paint or fabric',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard porous items and find the water source.',
    },
    {
      situation: 'Patch larger than about 10 square feet',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Stop disturbing it, follow EPA’s guidance for larger areas, and consider getting a specialist in.',
    },
    {
      situation: 'Wood sill soft, dark or crumbling',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the frame inspected for rot and repaired.',
    },
    {
      situation: 'Water entering when it rains',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Treat it as a leak and get the frame or flashing fixed.',
    },
    {
      situation: 'Anyone in the house has asthma or a mold allergy',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Clear it now and ventilate the room well afterwards.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Work out which kind of water it is',
      body: 'Wet after a cold night is condensation. Wet after rain is a leak. Check the sill on the morning after each and you will know which one you have.',
    },
    {
      title: 'Clean the hard surfaces',
      body: 'Detergent and water on glass, painted frame and sill. EPA does not require bleach for this. Open the window and wear gloves.',
    },
    {
      title: 'Dry it properly',
      body: 'Wipe the surface down and leave the room ventilated until it is properly dry. Damp that dries within a day or two rarely regrows.',
    },
    {
      title: 'Bring the room humidity down',
      body: 'EPA suggests keeping indoor humidity below 60 percent, ideally in the 30 to 50 range. A cheap hygrometer tells you where you actually are.',
    },
    {
      title: 'Deal with the porous things',
      body: 'Moldy curtains, blinds and wallpaper generally do not come back. Wait until the surface behind them is dry before you replace them.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The growth covers more than roughly a three-foot square',
      description: 'Past the size EPA’s homeowner advice is written for; it points to its guidance for larger jobs instead.',
      severity: 'warning',
    },
    {
      title: 'The sill or frame is soft, spongy or crumbling',
      severity: 'warning',
    },
    {
      title: 'A strong musty smell with no mold you can see',
      description: 'Growth behind the plaster or inside the frame smells before it shows.',
      severity: 'warning',
    },
    {
      title: 'Water runs in around the frame during rain',
      severity: 'danger',
    },
    {
      title: 'Anyone in the house is immune-compromised',
      description: 'Get advice before disturbing it — cleaning releases spores into the room.',
      severity: 'danger',
    },
    {
      title: 'Mold reappears within days of a thorough clean',
      description: 'Something is actively wetting that surface.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is black mold around a window dangerous?',
      answer:
        'EPA gives the same advice regardless of colour: remove it and fix the moisture. Allergic reactions and asthma symptoms are the common effects.',
    },
    {
      question: 'Should I get the mold tested?',
      answer: 'EPA says sampling is generally not useful for a homeowner, because the removal is the same whatever the species turns out to be.',
    },
    {
      question: 'Do I need bleach?',
      answer: 'Not for a hard surface. EPA describes scrubbing with detergent and water, then drying completely.',
    },
    {
      question: 'How big a patch can I clean myself?',
      answer:
        'EPA’s homeowner advice covers up to roughly a three-foot square. Above that it points to its guidance for larger jobs, and how much help you need depends on the area and any water damage behind it.',
    },
    {
      question: 'Why does it come back every winter?',
      answer: 'Cold glass plus humid indoor air makes condensation, and condensation makes mold. Ventilation and humidity control break the cycle; cleaning alone does not.',
    },
    {
      question: 'Can I just paint over it?',
      answer: 'No. Paint over live mold peels, and the growth continues underneath on the damp it is sealing in.',
    },
    {
      question: 'Is condensation on the glass itself a problem?',
      answer: 'It is the warning sign. EPA advises drying wet windows and walls quickly and reducing the moisture source before growth starts.',
    },
    {
      question: 'What if it is between the panes of glass?',
      answer: 'That is a failed sealed unit, not mold. It needs a glazier, and it is not what is feeding the growth on the frame.',
    },
    {
      question: 'Will a dehumidifier fix it?',
      answer: 'It helps when the room genuinely runs humid. It will not touch rain coming in around the frame.',
    },
    {
      question: 'My landlord says it is my fault for not ventilating. Is it?',
      answer:
        'It can be, and it can equally be the glazing, the insulation or a leak. Responsibility depends on the cause and on your lease and local rules, so report it in writing and keep photographs of what recurs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'A Brief Guide to Mold, Moisture and Your Home',
      url: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
      sourceType: 'government',
      notes:
        'EPA states that a moldy area under about 10 square feet can usually be handled by the homeowner, that indoor humidity should be kept below 60 percent, that condensation on windows should be dried quickly with the moisture source reduced, and that material dried within a day or two after a leak usually will not grow mold.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Mold Cleanup in Your Home',
      url: 'https://www.epa.gov/mold/mold-cleanup-your-home',
      sourceType: 'government',
      notes:
        'EPA describes scrubbing mold off hard surfaces with detergent and water and drying completely, and says absorbent or porous materials may have to be thrown away.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'A Brief Guide to Mold, Moisture, and Your Home (printable guide)',
      url: 'https://www.epa.gov/sites/default/files/2016-10/documents/moldguide12.pdf',
      sourceType: 'government',
      notes: 'The full EPA consumer booklet, including the moisture-control checklist and the health-effects summary.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Mold Course Chapter 4: Preventing Mold Growth',
      url: 'https://www.epa.gov/mold/mold-course-chapter-4',
      sourceType: 'government',
      notes: 'EPA training material on the moisture conditions that allow growth and on controlling condensation on cold surfaces.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Mold Remediation in Schools and Commercial Buildings',
      url: 'https://www.epa.gov/sites/default/files/2014-08/documents/moldremediation.pdf',
      sourceType: 'government',
      notes: 'The document EPA directs readers to once growth exceeds the homeowner threshold or follows significant water damage.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'A hygrometer for the room',
      description: 'Tells you whether the humidity is actually above EPA’s 60 percent line or whether the window is just cold.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Household detergent and disposable cloths',
      description: 'What EPA describes for hard surfaces. Throw the cloths away afterwards; rinsing them spreads it.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Gloves and an N95 mask',
      description: 'Cleaning disturbs spores. Worth it even on a small patch, and necessary if anyone in the house reacts to mold.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'A mold remediation contractor',
      description: 'Worth calling for larger areas, after water damage, or where the frame has rotted.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'small-leak-under-sink', anchorText: 'Can I ignore a small leak under the sink?', relationshipType: 'related' },
    { slug: 'mold-under-sink', anchorText: 'Can I ignore mold under the kitchen sink?', relationshipType: 'sibling' },
    { slug: 'water-damaged-cabinet', anchorText: 'Can I ignore a water-damaged cabinet?', relationshipType: 'follow_up' },
  ],
};
