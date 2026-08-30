import type { ProblemSeed } from '../types';

export const crackInFoundation: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'foundation',
  slug: 'crack-in-foundation',
  canonicalPath: '/home/structure/foundation/crack-in-foundation/',
  name: 'Crack in Foundation',
  eyebrow: 'Home · Structure · Foundation',

  h1: 'Can I Ignore a Crack in My Foundation?',
  seoTitle: 'Foundation Crack: When It Can Wait and When to Get Help',
  metaDescription:
    'Some foundation cracks are minor. Others signal movement or water problems. Learn which warning signs make a crack worth prompt professional evaluation.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I stay in the house?',
  canIUseItLabel: 'Usually, unless there are signs of active structural movement',

  shortAnswer:
    'Probably not. A thin, stable crack with no water, wall movement or other changes can often be documented and watched. A new, growing, horizontal, displaced or leaking crack deserves professional evaluation, and visible wall movement or other signs of structural instability should be treated as urgent.',

  whyItMattersHeading: 'Why Does a Foundation Crack Matter?',
  whyItMatters: [
    'Concrete can crack for different reasons. Some cracks are limited to shrinkage or appearance, while others are evidence that the foundation or the soil supporting it has moved. The crack by itself does not tell you which one you have.',
    'What matters most is the pattern around it. A crack that changes, leaks, shows displacement or appears with a bowed wall, sticking doors, uneven floors or new gaps elsewhere is harder to dismiss as a cosmetic defect. Soil moisture changes can also move foundations in some locations, so drainage and ground conditions may be part of the cause rather than a separate problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Leave the Area and Get Help If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Foundation-crack triage checked against FEMA, USGS, ACI and NDSU guidance on structural warning signs, concrete cracking, soil movement and water entry.',
  disclaimer:
    'General home-triage guidance only. A crack cannot be classified reliably from text alone, and local building rules, soil conditions and construction methods vary.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'thin-stable-vertical-crack',
      label: 'The crack is thin, vertical and has not changed',
      shortDescription:
        'It is dry, the wall looks straight and there are no new problems elsewhere in the house.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'DOCUMENT IT AND WATCH IT',
      resultBody:
        'Some concrete cracks affect appearance more than structural performance. A stable crack with no displacement, leakage or other movement signs is lower concern, but appearance alone cannot prove the cause.',
      recommendedAction:
        "Take clear dated photos and note the crack's location. Recheck it periodically and arrange an evaluation if it changes, leaks or is joined by other signs of movement.",
    },
    {
      slug: 'new-crack-no-other-symptoms',
      label: 'The crack is new but nothing else seems wrong',
      shortDescription: 'The wall still looks straight and doors, windows and floors seem normal.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'NEW DAMAGE DESERVES A CLOSER LOOK',
      resultBody:
        'A new foundation crack can come from several causes, including shrinkage or movement. Without a prior record, you do not yet know whether it is stable.',
      recommendedAction:
        'Photograph it now and arrange a professional assessment if the crack is substantial, keeps changing or you are unsure whether the wall has moved.',
    },
    {
      slug: 'horizontal-foundation-crack',
      label: 'The crack runs horizontally across the foundation wall',
      shortDescription: 'The line runs side to side through concrete, block or mortar joints.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET THE WALL EVALUATED',
      resultBody:
        'A horizontal crack can be associated with lateral pressure and wall movement. The concern rises further if the wall bows, leans, leaks or shows any offset across the crack.',
      recommendedAction:
        'Do not cover or patch over the evidence before it is assessed. Arrange a structural evaluation and keep people away from any area where the wall appears unstable.',
    },
    {
      slug: 'stair-step-masonry-crack',
      label: 'The crack follows a stair-step pattern through block or brick',
      shortDescription: 'It tracks through mortar joints instead of forming one straight line.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'CHECK FOR MOVEMENT AROUND IT',
      resultBody:
        'Stair-step cracking can accompany movement in masonry. The pattern matters more when blocks are displaced, nearby openings are out of square or the crack is changing.',
      recommendedAction:
        'Document the full crack pattern and check nearby doors, windows and floors for new changes. Arrange an evaluation if there is displacement, progression or more than one movement sign.',
    },
    {
      slug: 'crack-with-displacement',
      label: 'One side of the crack sits forward, back, higher or lower than the other',
      shortDescription: 'The wall is no longer flush across the crack.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THIS IS MORE THAN A SURFACE LINE',
      resultBody:
        'Visible displacement means the material on the two sides is no longer in the same plane. That makes actual movement more plausible than a purely cosmetic surface crack.',
      recommendedAction:
        'Avoid loading, drilling or cosmetic repair around the area. Have the foundation evaluated before deciding how the crack should be repaired.',
    },
    {
      slug: 'crack-growing-or-reopening',
      label: 'The crack is getting longer, wider or reopening after repair',
      shortDescription: 'Photos or an old patch show that the crack is not staying put.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CHANGE IS THE WARNING SIGN',
      resultBody:
        'A changing crack pattern is evidence that the condition is active rather than fully settled. Sealing the surface again does not explain or stop the underlying movement.',
      recommendedAction:
        'Keep the old photos or repair records and arrange an evaluation. Do not rely on repeated patching as proof that the foundation is stable.',
    },
    {
      slug: 'water-through-crack',
      label: 'Water comes through the crack',
      shortDescription: 'The crack becomes damp, drips or shows staining after wet weather.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'DEAL WITH THE WATER AND THE CRACK',
      resultBody:
        'A crack can provide a path for water even when it is not a structural failure. Water entry can damage finishes and complicate the concrete repair, and exterior drainage or soil moisture may also be contributing to the problem.',
      recommendedAction:
        'Keep water away from electrical equipment and stored items, document when leakage occurs and have the crack and surrounding drainage assessed before choosing a sealant or repair method.',
    },
    {
      slug: 'wall-bowing-or-leaning',
      label: 'The foundation wall bows, leans or bulges',
      shortDescription: 'The wall is visibly out of line rather than only cracked.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'TREAT THIS AS A STRUCTURAL WARNING',
      resultBody:
        'A leaning or visibly deformed foundation wall is a stronger warning sign than a crack alone. Guidance for damaged buildings treats leaning walls and continuous cracks as indicators that structural stability may be compromised.',
      recommendedAction:
        'Keep people away from the affected area. If the wall appears unstable, the crack pattern is changing or you hear movement, leave the building and contact local authorities or a structural professional.',
    },
    {
      slug: 'crack-with-house-movement-signs',
      label: 'Doors stick, floors slope or new gaps appear elsewhere',
      shortDescription: 'The foundation crack is accompanied by changes in other parts of the house.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE WHOLE-HOUSE PATTERN MATTERS',
      resultBody:
        'FEMA guidance on foundation issues tells inspectors to document symptoms such as out-of-plumb doors, sticking windows, uneven floors and gaps at walls. Several of those signs together make movement more plausible.',
      recommendedAction:
        'Photograph the crack and the other changes, then arrange a structural evaluation rather than repairing each symptom separately.',
    },
    {
      slug: 'crack-after-major-event',
      label: 'The crack appeared after an earthquake, flood, impact or ground movement',
      shortDescription: 'It is new after an event that could have moved the structure or soil.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'ASSUME THE EVENT MAY BE RELATED',
      resultBody:
        'New foundation cracks after a damaging event deserve more caution because other structural or utility damage may not be obvious. The risk is higher if the building shifted, utilities were damaged or other cracks appeared at the same time.',
      recommendedAction:
        'Do not enter or remain in an area that looks structurally unstable. Follow local emergency guidance and have the building checked before treating the crack as a routine repair.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The crack may be cosmetic or a clue',
      description:
        'A crack shows that the material separated, but its significance depends on the cause, location and surrounding signs. Some concrete cracks affect appearance only; others point to structural distress.',
      severity: 'info',
      chainLabel: 'Crack appears',
    },
    {
      stageLabel: 'IF WATER ENTERS',
      title: 'Moisture gets a path inside',
      description:
        'Water can move through cracks and damage nearby finishes or stored materials. Repeated wetting can also make the repair problem more complicated.',
      severity: 'caution',
      chainLabel: 'Water intrusion',
    },
    {
      stageLabel: 'IF THE FOUNDATION KEEPS MOVING',
      title: 'More parts of the house can show it',
      description:
        'Doors and windows may go out of square, floors may become uneven and gaps or additional cracks can appear as movement affects connected parts of the structure.',
      severity: 'warning',
      chainLabel: 'Movement spreads',
    },
    {
      stageLabel: 'IF THE WALL DEFORMS',
      title: 'Structural stability becomes the issue',
      description:
        'Bowing, leaning, separation or visible displacement means the concern is no longer just the crack surface. The wall and the loads it carries need professional assessment.',
      severity: 'danger',
      chainLabel: 'Wall movement',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'An unstable area can become unsafe to occupy',
      description:
        'Severe structural movement can make part of a building unsafe. Changing crack patterns, leaning structural elements or sounds of movement are reasons to leave the affected area and seek urgent help.',
      severity: 'danger',
      chainLabel: 'Unsafe condition',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Thin, stable, dry crack with no other movement signs',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Document it with clear photos and keep watching for change. If it remains unchanged and the wall stays straight, the urgency is lower.',
    },
    {
      situation: 'New crack with no other symptoms',
      ignoreAnswer: 'Not indefinitely',
      severity: 'caution',
      whatToDo:
        'Photograph it now so you have a baseline. Arrange an evaluation if it changes, looks substantial or you cannot tell whether the wall moved.',
    },
    {
      situation: 'Horizontal crack in a foundation wall',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Have the wall evaluated, especially if there is bowing, displacement or water entry. Do not hide the crack before the cause is understood.',
    },
    {
      situation: 'Stair-step crack in block or masonry',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo:
        'Check for displacement and changes around doors, windows and floors. Get it assessed if the pattern is new, progressing or paired with other movement signs.',
    },
    {
      situation: 'Crack is widening, lengthening or reopening',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep photos and past repair records and arrange a structural evaluation. Repeated surface patching is not a diagnosis.',
    },
    {
      situation: 'Water is entering through the crack',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Protect nearby belongings and electrical equipment, note when the leak happens and address both the crack and the drainage or moisture source.',
    },
    {
      situation: 'Wall is bowing, leaning, bulging or visibly displaced',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep people away from the area. If the wall appears unstable or movement is ongoing, leave the building and seek urgent professional or local-authority guidance.',
    },
    {
      situation: 'New crack after an earthquake, flood or ground movement',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Treat it as possible event-related structural damage. Follow local safety guidance and have the structure checked before normal use if other damage is present.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Photograph the crack before touching it',
      body:
        'Take clear, dated photos that show the entire crack and its position on the wall. Keep older photos, inspection reports and repair records because change over time is useful evidence.',
    },
    {
      title: 'Look for movement beyond the crack',
      body:
        'Check whether the wall is straight and whether doors, windows, floors, wall-to-ceiling joints or nearby masonry have changed. Several new symptoms together matter more than one isolated surface line.',
    },
    {
      title: 'Check for water and drainage clues',
      body:
        'Note whether the crack becomes damp after rain and whether water collects near the foundation. Do not assume sealing the inside surface fixes an exterior drainage or soil-moisture problem.',
    },
    {
      title: 'Get the right level of evaluation',
      body:
        'Use a structural engineer or local building official when there is bowing, displacement, significant movement or uncertainty about stability. A foundation or waterproofing contractor may still be needed for the eventual repair.',
    },
    {
      title: 'Leave if the structure looks unstable',
      body:
        'If the wall is leaning, the crack pattern is changing, the building has shifted or you hear cracking or movement, get out of the affected area and seek urgent local help rather than continuing a close inspection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The foundation wall is bowing, leaning or bulging',
      description: 'Visible deformation is a stronger structural warning than a crack alone.',
      severity: 'danger',
    },
    {
      title: 'The crack pattern is changing while you watch',
      description: 'New spreading, widening or connected cracks suggest active movement.',
      severity: 'danger',
    },
    {
      title: 'The wall or structure has visibly shifted or separated',
      description:
        'Separation at the foundation or obvious displacement should not be treated as cosmetic damage.',
      severity: 'danger',
    },
    {
      title: 'Several movement signs appeared together',
      description:
        'Sticking openings, uneven floors, wall gaps and new foundation cracks occurring together raise the concern.',
      severity: 'warning',
    },
    {
      title: 'The crack appeared after a damaging event',
      description:
        'Earthquake, flood, impact or ground movement can leave structural and utility damage that is not obvious from the crack alone.',
      severity: 'warning',
    },
    {
      title: 'You hear cracking, creaking or movement from the structure',
      description:
        'Leave the affected area. Guidance for damaged buildings treats changing crack patterns and sounds of movement as collapse warning signs.',
      severity: 'danger',
    },
    {
      title: 'You smell gas or see damaged utility lines',
      description:
        'Leave immediately and follow utility or emergency-service guidance. Do not operate switches or create an ignition source around a suspected gas leak.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Are all foundation cracks structural?',
      answer:
        'No. ACI notes that concrete cracks can be cosmetic, durability-related or evidence of significant structural distress. The surrounding signs and whether the crack is changing matter.',
    },
    {
      question: 'Does the direction of the crack tell me how serious it is?',
      answer:
        'It is a clue, not a diagnosis. A horizontal or stair-step pattern becomes more concerning when it is paired with bowing, displacement, growth, water or other signs that the structure is moving.',
    },
    {
      question: 'Can I just fill the crack with epoxy or sealant?',
      answer:
        'Not before you understand why it cracked. A sealant can stop some water paths, but it does not correct foundation movement and can hide evidence that would help with evaluation.',
    },
    {
      question: 'Can dry weather cause foundation cracks?',
      answer:
        'Yes, in some soils. NDSU Extension notes that fine-particle soils can shrink as they dry, reducing support and allowing a building to shift enough to stress the foundation.',
    },
    {
      question: 'Does water coming through the crack mean the foundation is failing?',
      answer:
        'Not necessarily. Cracks can leak without being structural failures, but the water source still needs attention and active movement should be ruled out before choosing a repair.',
    },
    {
      question: 'Should I mark or measure the crack myself?',
      answer:
        'Clear dated photos and notes are useful. Do not rely on a single width threshold to decide safety, because crack significance depends on the structure, the crack pattern and whether anything is moving.',
    },
    {
      question: 'Who should inspect a worrying foundation crack?',
      answer:
        'A structural engineer is a good choice when there is bowing, displacement, recurring movement or uncertainty about stability. Local building officials can also advise on permits and post-event safety procedures.',
    },
    {
      question: 'Can a foundation crack open and close with weather changes?',
      answer:
        'It can in locations where soil expands and shrinks with moisture changes. That behavior still tells you the foundation is responding to changing support conditions, so document it rather than assuming it is harmless.',
    },
    {
      question: 'Is a crack in the basement slab the same as a crack in the foundation wall?',
      answer:
        'No. Slabs and walls behave differently, and concrete slabs can crack without the wall moving. A displaced slab crack or one that appears with other movement signs still deserves evaluation.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Federal Emergency Management Agency',
      title: 'NFIP Claims Review',
      url: 'https://emilms.fema.gov/IS1104/groups/320.html',
      sourceType: 'government',
      notes:
        'FEMA tells flood adjusters to document foundation-related signs including wall and ceiling cracks, out-of-plumb doors, sticking windows, uneven floors, masonry cracks, gaps and leaning chimneys, and to involve experts when needed.',
    },
    {
      publisher: 'U.S. Geological Survey',
      title: 'What are the signs of landslide development? What do I do if a landslide occurs?',
      url: 'https://www.usgs.gov/programs/landslide-hazards/what-are-signs-landslide-development-what-do-i-do-if-a-landslide-occurs',
      sourceType: 'government',
      notes:
        'USGS lists sticking doors or windows, new cracks in walls or foundations, utility damage and separation from the foundation among signs that can accompany ground movement.',
    },
    {
      publisher: 'American Concrete Institute',
      title: 'Do we always need to repair cracked concrete?',
      url: 'https://www.concrete.org/frequentlyaskedquestions.aspx?faqid=809',
      sourceType: 'standards_body',
      notes:
        'ACI explains that concrete cracks have many causes and may be cosmetic, may affect durability or may indicate significant structural distress; significance depends on the structure and nature of the cracking.',
    },
    {
      publisher: 'American Concrete Institute',
      title: 'Acceptable concrete cracking',
      url: 'https://www.concrete.org/frequentlyaskedquestions/faqid/906.aspx',
      sourceType: 'standards_body',
      notes:
        'ACI notes that visible cracking can develop under service loads and that crack widths vary because of shrinkage and other time-dependent effects, supporting the need to judge cracks in context rather than by appearance alone.',
    },
    {
      publisher: 'American Concrete Institute',
      title: 'Cracks in a Repair',
      url: 'https://www.concrete.org/Portals/0/Files/PDF/3649T_03-11.pdf',
      sourceType: 'standards_body',
      notes:
        'ACI explains that cracks can provide direct paths for water and aggressive agents and that cracking can affect the performance of repairs designed to carry load.',
    },
    {
      publisher: 'North Dakota State University Extension',
      title: 'Dry Soil May Cause Building Problems',
      url: 'https://www.ag.ndsu.edu/news/newsreleases/2021/july-26-2021/dry-soil-may-cause-building-problems/',
      sourceType: 'academic',
      notes:
        'NDSU explains how drying fine-particle soils can shrink and reduce foundation support, contributing to shifting, cracks, sticking openings and water-entry problems.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Dated crack photo log',
      description:
        'A simple record of the crack, its location and visible changes gives an inspector something more useful than memory alone.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Long level or straightedge',
      description:
        'Useful for documenting obvious changes in wall alignment. It is not a substitute for a structural assessment.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Structural engineering evaluation',
      description:
        'Appropriate when the wall is displaced, bowed, leaning, repeatedly moving or otherwise difficult to classify safely.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Local building department guidance',
      description:
        'Useful after a damaging event or before structural repair because permit, inspection and occupancy procedures vary by jurisdiction.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],
};
