import type { ProblemSeed } from '../types';

export const hollowSoundingFloorTile: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'floors',
  slug: 'hollow-sounding-floor-tile',
  canonicalPath: '/home/structure/floors/hollow-sounding-floor-tile/',
  name: 'Hollow-Sounding Floor Tile',
  eyebrow: 'Home · Structure · Floors',

  h1: 'Can I Ignore a Hollow-Sounding Floor Tile?',
  seoTitle: 'Hollow-Sounding Floor Tile: When to Watch and When to Repair',
  metaDescription:
    'A hollow tile is not always loose. Learn when one stable tile can be monitored and when spreading sound, cracked grout, movement, moisture, or lifting needs repair.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep walking on it?',
  canIUseItLabel: 'Yes, if it is flat, stable, and uncracked',

  shortAnswer:
    'Usually, for now. One tile that only sounds hollow but does not move, crack, lift, or disturb the grout is not proof of imminent failure. Mark it and monitor it; arrange an inspection if the sound spreads or physical damage appears.',

  whyItMattersHeading: 'The Sound Is a Clue, Not a Diagnosis',
  whyItMatters: [
    'A hollow or tinny tap can suggest incomplete mortar coverage, loss of bond, movement in the substrate, or separation within a mortar bed. It can also be an acoustic effect of a correctly installed membrane or another tile-assembly detail. Tap testing alone cannot show which condition exists.',
    'The practical warning signs are change and movement. A stable sound-only spot is usually a low immediate concern, especially over rigid concrete. Cracked grout, flexing over a wood floor, rocking tile, moisture, spreading hollow areas, or raised edges make bond or substrate trouble more likely.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Treating It as Sound-Only If:',

  lastReviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Tile-floor triage checked against TCNA, MAPEI, LATICRETE, and OSHA guidance on hollow sounds, bond coverage, substrate movement, tenting, and repair dust.',
  disclaimer:
    'General home-triage guidance only. A tap sound cannot confirm bond coverage or concealed substrate condition, and repair requirements, warranties, and local construction rules vary.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'isolated-stable-tile',
      label: 'One tile sounds hollow but remains completely stable',
      shortDescription:
        'The tile is flat and uncracked, the grout is intact, and normal walking causes no rocking, clicking, flexing, or edge movement.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'A sound-only difference can be monitored',
      resultBody:
        'Hollow sound does not prove that the tile is loose. Tile-industry guidance notes that some bonded assemblies sound hollow and that an otherwise stable hollow spot does not mean failure is imminent.',
      recommendedAction:
        'Mark the tile with removable tape, photograph the surrounding grout, and leave it visible for comparison. Reassess if the boundary changes or any physical symptom appears.',
    },
    {
      slug: 'confirmed-membrane-sound',
      label: 'The floor has a confirmed membrane or floating mortar-bed assembly',
      shortDescription:
        'Installation records or the installer confirm an uncoupling, sound-control, cleavage-membrane, or similar system, and the sound is consistent across the assembly.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be a normal assembly sound',
      resultBody:
        'Some tile systems intentionally separate or uncouple layers, which can change the sound produced by tapping without showing that the tile has lost its bond.',
      recommendedAction:
        'Confirm that the sound matches the documented assembly rather than one newly changing spot. No repair is needed while the surface and grout remain stable.',
    },
    {
      slug: 'stable-area-over-concrete',
      label: 'A small stable area is installed over rigid concrete',
      shortDescription:
        'Several tiles have always sounded different, but there is no flexing, cracked grout, raised edge, moisture, or recent expansion of the area.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Failure is not necessarily developing',
      resultBody:
        'TCNA guidance says a hollow area over concrete does not necessarily mean failure is imminent when the floor is not deflecting and the tile layer is not being forced to move.',
      recommendedAction:
        'Map the boundary and continue normal use. Have it assessed if the area expands, grout starts releasing, or tiles begin to move.',
    },
    {
      slug: 'flexing-wood-floor',
      label: 'The tile is over wood and the floor flexes or squeaks',
      shortDescription:
        'The floor feels bouncy, nearby joints move underfoot, or the hollow sound changes as weight crosses the area.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Subfloor movement raises the failure risk',
      resultBody:
        'Movement in a wood-framed floor can break grout away from tile and add instability. Hollow sound combined with flexing is more concerning than the same sound over a rigid, motionless base.',
      recommendedAction:
        'Limit concentrated loads and arrange an inspection of the tile assembly, underlayment, subfloor attachment, and framing before replacing only the visible tile.',
    },
    {
      slug: 'hollow-area-spreading',
      label: 'More neighboring tiles are starting to sound hollow',
      shortDescription:
        'The mapped boundary is expanding or tiles that previously sounded solid now sound noticeably different.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A changing pattern needs investigation',
      resultBody:
        'An expanding area is harder to explain as one harmless acoustic variation. It can indicate continuing loss of bond, substrate movement, moisture-related deterioration, or stress in the tile layer.',
      recommendedAction:
        'Document the new boundary and arrange a tile inspection. Do not cover the floor or begin injecting adhesive before the cause and extent are understood.',
    },
    {
      slug: 'grout-cracking-or-releasing',
      label: 'Grout beside the hollow tile is cracking or coming loose',
      shortDescription:
        'The joint has opened, crumbled, separated from the tile edge, or failed again after a prior repair.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The floor is showing physical movement',
      resultBody:
        'Cracked or loose grout can result from substrate deflection, weak grout, or movement in the tile assembly. Beside a hollow area, it is evidence that the problem is no longer sound alone.',
      recommendedAction:
        'Preserve the loose grout and photograph the joint. Find the movement or installation problem before regrouting, because a surface-only repair may fail again.',
    },
    {
      slug: 'tile-moves-or-clicks',
      label: 'The tile rocks, clicks, or moves underfoot',
      shortDescription:
        'Pressure makes an edge shift, produces a click, changes the sound, or causes visible movement against the grout.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the tile as loose',
      resultBody:
        'Movement means the tile is not being held as a stable part of the floor. Continued traffic can damage the tile, grout, neighboring edges, or underlying assembly.',
      recommendedAction:
        'Keep traffic and heavy objects off the tile and have it removed and reset after the substrate and surrounding bond are checked.',
    },
    {
      slug: 'tile-cracked-or-chipped',
      label: 'The hollow tile is cracked, chipped, or breaking at an edge',
      shortDescription: 'A fracture crosses the tile, a corner has broken, or a sharp fragment is loose.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'The tile now needs repair',
      resultBody:
        'Cracking over a hollow area can indicate insufficient support or movement, although impact is another possible cause. Loose or sharp pieces also create a direct foot and trip hazard.',
      recommendedAction:
        'Keep bare feet and traffic away from sharp damage. Replace the tile and inspect the mortar coverage and substrate rather than assuming the crack was only cosmetic.',
    },
    {
      slug: 'tile-lifting-or-tenting',
      label: 'An edge is rising or several tiles are tenting',
      shortDescription:
        'A tile sits higher than before, the surface forms a ridge, grout is compressed, or tiles have released with a pop.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Keep clear and address the movement',
      resultBody:
        'Heaving or tenting can result from compression and inadequate movement accommodation. Tile can crack or release as stress overcomes the bond.',
      recommendedAction:
        'Keep people away from the raised area and do not press the tile down. Arrange prompt evaluation of movement joints, perimeter clearance, bond, and substrate conditions.',
    },
    {
      slug: 'moisture-or-soft-floor',
      label: 'The hollow sound appeared with water, staining, or softness',
      shortDescription:
        'The area followed a leak or flood, stays damp, smells musty, or the floor or grout feels soft or deteriorated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Investigate moisture before repairing tile',
      resultBody:
        'Moisture can deteriorate some substrates and adhesives, and a hollow tile does not reveal how far the damage extends. Resetting the surface tile without stopping the water can conceal the cause.',
      recommendedAction:
        'Stop the water source, protect nearby materials, and have the tile assembly and subfloor assessed before sealing joints or replacing tile.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The sound is only a screening clue',
      description:
        'A tap comparison may identify an acoustic difference, but it cannot confirm mortar coverage, bond strength, membrane construction, or substrate condition.',
      severity: 'info',
      chainLabel: 'Sound difference',
    },
    {
      stageLabel: 'IF BOND OR SUPPORT IS LIMITED',
      title: 'The tile becomes more vulnerable to damage',
      description:
        'Inadequate mortar contact can leave portions of a tile less supported and can contribute to bond loss or breakage when the floor is loaded or moves.',
      severity: 'caution',
      chainLabel: 'Possible void or weak bond',
    },
    {
      stageLabel: 'IF THE ASSEMBLY MOVES',
      title: 'Grout and neighboring edges can begin to fail',
      description:
        'Deflection, expansion, contraction, settlement, or subfloor movement can open grout joints, release tile edges, or transfer stress into nearby tiles.',
      severity: 'warning',
      chainLabel: 'Joint and edge damage',
    },
    {
      stageLabel: 'IF THE AFFECTED AREA EXPANDS',
      title: 'A localized repair can become a larger floor repair',
      description:
        'Continuing movement, moisture, or poor installation across a wider area may require multiple tiles and the underlying cause to be corrected.',
      severity: 'warning',
      chainLabel: 'Spreading failure',
    },
    {
      stageLabel: 'IF TILE HEAVES OR BREAKS',
      title: 'Raised or sharp tile can become unsafe',
      description:
        'Tented, rocking, or fractured tile can create a trip hazard, expose sharp edges, and release further if stress remains in the floor.',
      severity: 'danger',
      chainLabel: 'Loose or raised tile',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One isolated tile sounds hollow but is flat, still, dry, and uncracked',
      ignoreAnswer: 'Yes, with monitoring',
      severity: 'info',
      whatToDo:
        'Mark its outline, photograph the grout, and watch for movement, cracking, moisture, or a change in the surrounding sound.',
    },
    {
      situation: 'A documented membrane or floating assembly produces a consistent sound',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Confirm the assembly with records or the installer. Treat it as an acoustic characteristic unless a localized area changes or physical damage appears.',
    },
    {
      situation: 'A small unchanged area sounds hollow over rigid concrete',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Map it and continue ordinary use. Arrange an inspection if the boundary grows or grout and tile no longer remain stable.',
    },
    {
      situation: 'The floor flexes, squeaks, or feels bouncy around the tile',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Limit heavy loading and have the tile assembly and supporting floor checked for movement before making a surface repair.',
    },
    {
      situation: 'The hollow sound is spreading to neighboring tiles',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Record the expanding boundary and arrange an inspection to determine whether bond loss, moisture, or movement is continuing.',
    },
    {
      situation: 'Grout is cracking, crumbling, or separating beside the tile',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not simply cover the joint with new grout. Identify and correct the movement or installation defect first.',
    },
    {
      situation: 'The tile rocks, clicks, shifts, or has a loose sharp fragment',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep traffic off the area and arrange removal and repair after the substrate and neighboring tiles are checked.',
    },
    {
      situation: 'Tile is lifting, tenting, damp, or located over a soft floor',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep clear, stop any water source, and get the floor evaluated before pressing, drilling, sealing, or loading the affected area.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Map the sound without striking the floor hard',
      body:
        'Compare the suspect tile with its immediate neighbors using a knuckle or lightweight nonmetallic handle. Mark only clear differences with removable tape. Tap testing is a comparison tool, not proof of a loose tile.',
    },
    {
      title: 'Check for symptoms that matter more than the sound',
      body:
        'Look closely at grout joints and tile edges. During normal walking, notice any rocking, clicking, flexing, height change, loose fragment, moisture, softness, or new ridge. Do not jump or stomp on the area to test it.',
    },
    {
      title: 'Identify what is under the tile',
      body:
        'Check plans, invoices, product labels, photographs, or installer records for a concrete or wood base, mortar bed, backer board, uncoupling membrane, or sound-control layer. The same tap sound can mean different things in different assemblies.',
    },
    {
      title: 'Get a targeted inspection before choosing a repair',
      body:
        'A tile installer or floor-failure consultant can compare the sound pattern with movement, substrate type, joint layout, and installation history. Do not assume adhesive injection or replacing one tile will correct a wider cause.',
    },
    {
      title: 'Control dust if tile must be removed',
      body:
        'Cutting, grinding, or crushing tile and mortar can create respirable silica dust. Avoid uncontrolled dry grinding, isolate the work area, use appropriate dust-control methods, and hire qualified help when safe removal is outside your equipment or experience.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The tile moves, rocks, or clicks',
      description:
        'Any movement under ordinary foot traffic means the condition is no longer just an acoustic difference.',
      severity: 'warning',
    },
    {
      title: 'Grout cracks or releases along the tile edge',
      description:
        'Joint failure can indicate movement, deflection, weak grout, or loss of support and should be investigated before regrouting.',
      severity: 'warning',
    },
    {
      title: 'A tile edge rises or a ridge forms',
      description:
        'Lifting or tenting can reflect compression in the tile layer and may lead to sudden cracking or release.',
      severity: 'danger',
    },
    {
      title: 'The hollow boundary keeps expanding',
      description:
        'A changing pattern can indicate that bond loss, substrate movement, moisture damage, or stress is affecting more of the installation.',
      severity: 'warning',
    },
    {
      title: 'The floor feels bouncy, soft, or newly uneven',
      description:
        'The supporting floor may be moving or deteriorating, especially over wood framing or in an area affected by water.',
      severity: 'danger',
    },
    {
      title: 'The tile cracks or develops a loose sharp piece',
      description:
        'Keep feet and traffic away from the damage until the fragment is secured and the cause is assessed.',
      severity: 'danger',
    },
    {
      title: 'Water or a musty odor appears',
      description:
        'A leak, flood, or damp substrate changes the problem from a tile sound to a moisture investigation.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does a hollow sound always mean the tile is loose?',
      answer:
        'No. TCNA notes that a tile floor can sound hollow even when the tile is bonded. The sound can also come from a mortar-bed, membrane, or subfloor condition rather than separation directly beneath that tile.',
    },
    {
      question: 'Will a hollow-sounding tile eventually crack?',
      answer:
        'Not necessarily. There is no dependable failure timeline based on sound alone. Cracking becomes more likely when the tile lacks support, the substrate flexes, the floor is under stress, or grout and tile have already started moving.',
    },
    {
      question: 'Can tapping tell me how much mortar is under the tile?',
      answer:
        'No. A tap test is qualitative and can only reveal sound differences. It cannot measure mortar coverage, identify the separated layer, or prove how strongly the tile is bonded.',
    },
    {
      question: 'Why would only one tile sound hollow?',
      answer:
        'Possible causes include uneven mortar coverage, contamination, residue on the tile back, mortar that skinned over, disturbance while curing, or a localized feature in the assembly. An inspection is needed to distinguish them.',
    },
    {
      question: 'Does an uncoupling membrane make tile sound hollow?',
      answer:
        'It can change the acoustic response because the tile assembly is designed to manage movement differently from tile bonded directly to concrete. Confirm the actual product and installation before assuming the sound is normal.',
    },
    {
      question: 'Is a hollow tile more concerning over a wood subfloor?',
      answer:
        'Yes, especially if the floor flexes. TCNA says failure is more likely over wood because subfloor movement can break grout away from tile and increase instability.',
    },
    {
      question: 'Can adhesive or epoxy be injected under the tile?',
      answer:
        'Injection is sometimes attempted for a small area, but it may not reach the right layer or correct the cause. TCNA cautions that a repair that does not address the underlying failure may not last.',
    },
    {
      question: 'Can just one tile be replaced?',
      answer:
        'Often, if the problem is truly localized and the substrate remains sound. The removed tile also gives the installer a chance to inspect mortar transfer and the underlying surface before setting the replacement.',
    },
    {
      question: 'Is a hollow tile in a bathroom automatically a leak?',
      answer:
        'No. Hollow sound alone does not prove water intrusion. Act promptly if the tile or grout is cracked, the floor stays damp, nearby material is soft, or there is staining, odor, or a known leak.',
    },
    {
      question: 'Can I put furniture on a hollow-sounding tile?',
      answer:
        'Ordinary use is generally reasonable when the tile is flat, still, and undamaged. Avoid placing a concentrated heavy load on a tile that rocks, flexes, is cracked, or sits over a visibly moving area.',
    },
    {
      question: 'Does a hollow tile mean the house has a structural problem?',
      answer:
        'Usually not. Most causes are within the tile assembly or its immediate substrate. Broader evaluation is appropriate if the floor also sags or bounces or if new wall cracks, sticking openings, or other movement signs appear.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Tile Council of North America',
      title: 'Hollow/Loose Tile',
      url: 'https://tcnatile.com/resource-center/faq/hollow-loose-tile/',
      sourceType: 'standards_body',
      notes:
        'Explains that hollow sound does not always mean tile is unbonded or failure is imminent, that failure is more likely over wood, and that poor coverage, movement, moisture, and substrate problems can cause hollow or loose tile.',
    },
    {
      publisher: 'Tile Council of North America',
      title: 'Cracked/Loose Grout',
      url: 'https://tcnatile.com/resource-center/faq/cracked-loose-grout/',
      sourceType: 'standards_body',
      notes:
        'Identifies substrate deflection, installation problems, and inadequate adhesive coverage as possible causes of cracked grout and tile and explains why on-site assessment may be needed.',
    },
    {
      publisher: 'Tile Council of North America',
      title: 'Tenting',
      url: 'https://tcnatile.com/resource-center/faq/tenting/',
      sourceType: 'standards_body',
      notes:
        'Explains that tile can heave or tent when movement is not adequately accommodated and describes how compression can cause tile to crack or release.',
    },
    {
      publisher: 'MAPEI',
      title: 'Floor Tile Mortar',
      url: 'https://cdnmedia.mapei.com/docs/librariesprovider10/products-documents/1_3000025_floor-tile-mortar_en-us_96b2569ae15a44f3a4fe0aa322122bd9.pdf?sfvrsn=1251ea1c_0',
      sourceType: 'manufacturer',
      notes:
        'Directs installers to use a structurally sound, stable substrate and achieve more than 80% mortar contact in dry interiors and more than 95% in wet or exterior applications.',
    },
    {
      publisher: 'LATICRETE',
      title: 'Thin-Set Troubleshooting Guide for Exterior Glue Plywood Substrates',
      url: 'https://cdn-global.laticrete.com/-/media/project/laticrete-international/shared/files/support-and-downloads/technical-datasheets/tds210.pdf?hash=F0F87E7DE44A3E856CB7E6EE5692B4A6&rev=d10ec02d1a6e4191bedbb2cb15523826',
      sourceType: 'manufacturer',
      notes:
        'Lists deflection, substrate movement, inadequate thin-set, contamination, tile-back residue, and missing movement joints as causes of hollow-sounding tile over plywood.',
    },
    {
      publisher: 'Occupational Safety and Health Administration',
      title: 'Silica, Crystalline - Overview',
      url: 'https://www.osha.gov/silica-crystalline',
      sourceType: 'government',
      notes:
        'Explains that cutting, grinding, drilling, or crushing ceramic, mortar, concrete, and stone can generate respirable crystalline silica dust linked to serious lung and kidney disease.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Removable floor-marking supplies',
      description:
        "Painter's tape, removable labels, and phone photographs help record the hollow boundary without writing on or damaging the tile.",
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Tile installation records',
      description:
        'Plans, invoices, product manuals, and installation photographs can identify the substrate, membrane, mortar, movement joints, and original installer.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Matching spare tile',
      description:
        'A saved tile from the original installation makes a localized replacement easier and avoids a visible mismatch if removal becomes necessary.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Tile installation inspection',
      description:
        'An experienced tile contractor or floor-failure consultant can assess movement, grout condition, substrate type, bond pattern, moisture clues, and repair scope.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],
};
