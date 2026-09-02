import type { ProblemSeed } from '../types';

export const hairlineCrackInDrywall: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'walls',
  slug: 'hairline-crack-in-drywall',
  canonicalPath: '/home/structure/walls/hairline-crack-in-drywall/',
  name: 'Hairline Crack in Drywall',
  eyebrow: 'Home · Structure · Walls',

  h1: 'Can I Ignore a Hairline Crack in Drywall?',
  seoTitle: 'Hairline Drywall Crack: When It Is Cosmetic and When to Worry',
  metaDescription:
    'A stable, dry hairline drywall crack can often wait. Learn when growth, moisture, bulging, sticking doors, floor slope, or event damage changes the answer.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I leave the wall alone?',
  canIUseItLabel: 'Yes, if the crack is stable, dry, and isolated',

  shortAnswer:
    'Usually, for now. An isolated hairline crack that stays unchanged on a flat, dry wall is commonly a finish or drywall-joint issue, but photograph it and watch for change. Do not dismiss growth, moisture, deformation, or other signs that the building is shifting.',

  whyItMattersHeading: 'The Crack Is Less Important Than What It Does Next',
  whyItMatters: [
    'Drywall commonly cracks along panel joints. Temperature and humidity changes can make framing swell or shrink, while installation and finishing details can also stress the joint. If the line remains thin, dry, and unchanged and the wall stays flat, the immediate concern is usually cosmetic.',
    'The judgment changes when the crack is active or part of a larger pattern. Lengthening, reopening after repair, wetness, bulging, sticking doors or windows, uneven floors, and new gaps elsewhere suggest that patching the surface alone may not address the cause.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Treat It as Cosmetic If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Drywall-crack triage checked against Gypsum Association, USG, EPA, USGS, and FEMA guidance on joint movement, repairs, moisture, lead dust, and structural warning patterns.',
  disclaimer:
    'General home-triage guidance only. A written description cannot confirm whether movement is limited to the drywall finish or involves concealed framing or structure, and local construction requirements vary.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'stable-joint-crack',
      label: 'The crack is thin, dry, and unchanged',
      shortDescription:
        'It follows a straight wall joint, the wall is flat, and nearby doors, windows, floors, and trim have not changed.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'A cosmetic joint crack is likely',
      resultBody:
        'Gypsum industry guidance identifies framing movement, environmental changes, and installation details as common causes of cracking at panel joints. An isolated line with no progression or surrounding damage presents a low immediate concern.',
      recommendedAction:
        'Take a clear baseline photo showing the entire line and its endpoints. You can leave it visible or make a cosmetic repair once you are confident it has stabilized.',
    },
    {
      slug: 'seasonal-repeat',
      label: 'It appears and fades with seasonal conditions',
      shortDescription:
        'The same fine line has opened and closed before, without spreading, displacement, moisture, or changes elsewhere.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'A stable seasonal pattern can be monitored',
      resultBody:
        'Changes in temperature and humidity can move framing enough to stress drywall joints. A repeatable pattern that returns to the same condition and has no companion warning signs is different from a crack that progressively grows.',
      recommendedAction:
        'Keep indoor conditions reasonably consistent and compare photos taken from the same position. Investigate if the crack stops following its familiar pattern or new symptoms appear.',
    },
    {
      slug: 'dry-loose-tape',
      label: 'Drywall tape is lifting, but the wall is dry and flat',
      shortDescription:
        'A straight edge, bubble, or loose strip is visible along a seam, with no stain, softness, musty odor, or wall movement.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually a finish repair',
      resultBody:
        'Joint tape can lose its bond or crack because of finishing problems or movement at the panel joint. When the surrounding material remains dry, firm, and flat, the defect is generally cosmetic.',
      recommendedAction:
        'Confirm that there are no moisture clues before repairing it. Remove only loose finish material, then retape and refinish the joint rather than repeatedly covering the line with a thin skim coat.',
    },
    {
      slug: 'growing-or-reopening',
      label: 'The crack is lengthening, opening, or returning after repair',
      shortDescription:
        'Current photos, an old patch, or visible branching shows that the condition is not staying stable.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Change means the condition is active',
      resultBody:
        'A patch can crack again when the underlying joint, framing, or building continues to move. Repeated surface repairs do not identify or correct that movement.',
      recommendedAction:
        'Do not keep hiding the evidence. Photograph the progression, check both sides of the wall when accessible, and arrange an inspection if the change continues or the wall is no longer flat.',
    },
    {
      slug: 'diagonal-from-opening',
      label: 'A new diagonal crack runs from a door or window corner',
      shortDescription:
        'The line extends away from an opening, but the door or window still operates normally and no other movement signs are present.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Opening-corner cracks deserve closer tracking',
      resultBody:
        'Drywall joints placed near opening corners are prone to cracking, so this pattern does not prove a structural problem. A new or extending diagonal line still deserves more attention than a stable seam crack because movement concentrates around openings.',
      recommendedAction:
        'Photograph the crack and test the opening without forcing it. Have the drywall and nearby framing assessed if the line grows, returns after repair, or the opening begins to bind.',
    },
    {
      slug: 'opening-and-house-changes',
      label: 'The crack comes with a sticking door, uneven floor, or new gaps',
      shortDescription:
        'A nearby opening has gone out of square, the floor feels different, or additional gaps and cracks have appeared.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the whole pattern as movement',
      resultBody:
        'FEMA guidance groups drywall cracks with out-of-plumb doors, sticking windows, uneven floors, and wall gaps when documenting possible foundation-related damage. Several new symptoms together are harder to explain as a drywall finish defect.',
      recommendedAction:
        'Document every affected area and arrange a structural evaluation. Do not adjust doors, fill gaps, or patch the crack first if doing so would erase useful evidence of movement.',
    },
    {
      slug: 'moisture-signs',
      label: 'The crack is damp, stained, soft, or musty',
      shortDescription:
        'There is discoloration, swollen drywall, loose wet tape, peeling paint, or an odor suggesting moisture inside the wall.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Treat this as a moisture problem first',
      resultBody:
        'EPA guidance identifies cracked drywall tape as a possible water-leak clue and says swollen drywall or failed seams may require removal rather than drying in place. Covering the line does not stop a leak or dry the wall cavity.',
      recommendedAction:
        'Find and stop the moisture source, protect nearby electrical equipment, and assess the drywall and cavity before refinishing. Use experienced help if the water may be contaminated or the affected area is extensive.',
    },
    {
      slug: 'wall-deformation',
      label: 'The wall bulges, bows, feels loose, or has an offset',
      shortDescription:
        'The surfaces on opposite sides of the crack are no longer flush, or the panel appears detached or deformed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is more than a hairline finish crack',
      resultBody:
        'Visible deformation suggests panel detachment, damaged material, framing movement, or another condition that cannot be judged from the crack alone. Pressing or patching the surface may hide the problem without making it secure.',
      recommendedAction:
        'Keep people and heavy objects away from any area that appears unstable. Arrange an inspection before cutting, fastening, loading, or cosmetically repairing the wall.',
    },
    {
      slug: 'multiple-new-defects',
      label: 'Several cracks, gaps, or nail pops appeared together',
      shortDescription: 'The hairline crack is one of multiple recent changes across the room or house.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A group of changes needs an explanation',
      resultBody:
        'Drywall defects can share a harmless environmental cause, but several new changes can also reflect framing or building movement. The pattern and whether it continues matter more than any one narrow line.',
      recommendedAction:
        'Map and photograph all affected locations. If the defects keep appearing, cross multiple rooms, or accompany changes in floors and openings, arrange a broader building evaluation.',
    },
    {
      slug: 'after-damaging-event',
      label: 'The crack appeared after an earthquake, impact, flood, or ground movement',
      shortDescription:
        'It is new after an event capable of moving framing, wetting the wall, or affecting the supporting structure.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Assume the event may be related',
      resultBody:
        'Post-event cracks need more caution because concealed framing, utilities, or wet materials may also be damaged. USGS guidance lists new wall cracks with sticking openings and other changes among signs that can accompany ground movement.',
      recommendedAction:
        'Do not remain near a wall that is visibly shifting or unstable. Follow local emergency guidance after a major event and have the affected area checked before treating the crack as routine drywall damage.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'It may be only a finish defect',
      description:
        'A stable line can be limited to paint, joint compound, tape, or movement where two drywall panels meet. The crack alone does not establish structural damage.',
      severity: 'info',
      chainLabel: 'Surface line',
    },
    {
      stageLabel: 'IF THE JOINT KEEPS MOVING',
      title: 'Cosmetic repairs may keep failing',
      description:
        'Compound or tape can split again if environmental movement, poor joint construction, loose panels, or misaligned framing remains uncorrected.',
      severity: 'caution',
      chainLabel: 'Recurring repair',
    },
    {
      stageLabel: 'IF MOISTURE IS INVOLVED',
      title: 'Hidden wall damage can develop',
      description:
        'Wet drywall can swell, lose seam integrity, or conceal damp insulation and mold. The moisture source must be corrected before the finish is restored.',
      severity: 'warning',
      chainLabel: 'Water damage',
    },
    {
      stageLabel: 'IF OTHER PARTS OF THE HOUSE SHIFT',
      title: 'The crack becomes one symptom of building movement',
      description:
        'Sticking openings, uneven floors, new gaps, displaced trim, or multiple cracks point beyond an isolated drywall seam and require a broader assessment.',
      severity: 'warning',
      chainLabel: 'Movement pattern',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'An unstable area may be unsafe',
      description:
        'A hairline crack does not cause a collapse, but cracks accompanied by visible deformation, continuing movement, or event damage can warn of a condition that is unsafe to inspect closely or occupy.',
      severity: 'danger',
      chainLabel: 'Structural instability',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Isolated, dry, unchanged crack on a flat wall',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Photograph it, note the endpoints, and check occasionally for growth, moisture, or changes around nearby openings.',
    },
    {
      situation: 'Familiar seasonal crack with no progression',
      ignoreAnswer: 'Yes, with monitoring',
      severity: 'info',
      whatToDo:
        'Compare it with prior photos and keep indoor temperature and humidity reasonably consistent. Reassess if the pattern changes.',
    },
    {
      situation: 'Newly noticed crack with no other symptoms',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Create a baseline record rather than patching immediately. Check nearby walls, trim, doors, windows, and floors for other recent changes.',
    },
    {
      situation: 'New diagonal crack from a door or window corner',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Track the line and test the opening normally. Arrange an inspection if it spreads, reopens after repair, or the opening starts sticking.',
    },
    {
      situation: 'Crack is growing, branching, or returning after repair',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Preserve photos and old repair evidence, then identify whether the drywall joint, framing, or building is moving before repairing it again.',
    },
    {
      situation: 'Crack is stained, damp, soft, swollen, or musty',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop and correct the moisture source, then determine whether the drywall and concealed materials can be dried or need replacement.',
    },
    {
      situation: 'Doors stick, floors slope, or new gaps appear',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Document the combined pattern and arrange a structural evaluation instead of treating each visible defect separately.',
    },
    {
      situation: 'Wall is bulging, displaced, or newly damaged by an event',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep clear of an area that appears unstable and seek prompt local or professional guidance before cutting into or loading the wall.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Photograph the entire crack',
      body:
        'Take a well-lit photo that includes the crack, nearby corners, trim, and openings. Add close views of each endpoint and keep the original files so later changes are easier to compare.',
    },
    {
      title: 'Check whether it follows a drywall joint',
      body:
        'A straight line, lifted tape edge, or narrow ridge may identify a panel seam. Do not assume every straight crack is harmless; also check whether the wall is flat and firmly attached.',
    },
    {
      title: 'Look for water before making dust',
      body:
        'Check for stains, softness, peeling paint, swollen seams, plumbing above or behind the wall, and musty odors. Correct the leak and assess concealed materials before refinishing.',
      destinationProblemSlug: 'stain-on-a-wall',
    },
    {
      title: 'Treat wall deformation as a separate problem',
      body:
        'Do not press, drill, or fasten through a bulging or displaced section to see whether it moves. Keep the area clear and have the panel, fasteners, and framing inspected first.',
      destinationProblemSlug: 'bulging-drywall',
    },
    {
      title: 'Repair only after the condition is stable',
      body:
        'For an ordinary stable crack, remove loose material, use joint compound and reinforcing tape where the joint has opened, feather the finish, prime, and repaint. In a pre-1978 home, follow lead-safe practices before sanding or disturbing painted surfaces.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The crack keeps growing or reopening',
      description:
        'Progression or repeated failure after repair means the underlying condition has not stabilized or been corrected.',
      severity: 'warning',
    },
    {
      title: 'The wall is bulging, bowing, loose, or displaced',
      description:
        'Visible deformation requires an inspection of the drywall attachment, concealed framing, and surrounding structure.',
      severity: 'danger',
    },
    {
      title: 'A door or window suddenly sticks or looks out of square',
      description:
        'An opening that changes along with a nearby crack makes building or framing movement more plausible.',
      severity: 'warning',
    },
    {
      title: 'Floors changed or new gaps appeared',
      description:
        'Uneven floors and new separations at walls, ceilings, trim, or floors turn an isolated crack into a broader movement pattern.',
      severity: 'warning',
    },
    {
      title: 'The drywall is wet, stained, soft, or musty',
      description:
        'Investigate for a leak and hidden moisture before patching. Swollen drywall or failed seams may not be suitable for drying in place.',
      severity: 'warning',
    },
    {
      title: 'The crack followed a damaging event',
      description:
        'Earthquake, impact, flood, slope movement, or other event-related damage can extend beyond the visible finish.',
      severity: 'danger',
    },
    {
      title: 'You hear cracking or see movement',
      description:
        'Leave the affected area rather than inspecting it closely. Seek urgent local help if a wall, ceiling, or connected structure appears unstable.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Are hairline cracks in drywall normal?',
      answer:
        'They are common, especially at panel joints, and can result from humidity, temperature, framing movement, or finishing details. Common does not mean every crack should be ignored; stability, moisture, and surrounding changes determine the concern.',
    },
    {
      question: 'Why does the crack appear in one season and fade in another?',
      answer:
        'Wood framing can swell and shrink as environmental conditions change, placing stress on the drywall joint. A repeatable, nonprogressive pattern is generally less concerning than one that opens farther each time.',
    },
    {
      question: 'Does a diagonal crack above a door mean foundation trouble?',
      answer:
        'Not by itself. Drywall joints near door and window corners are prone to cracking, and installation details can cause the pattern. The concern rises if the line grows or the opening sticks, shifts, or goes out of square.',
    },
    {
      question: 'How can I tell whether the crack is only in the paint?',
      answer:
        'A paint-only line may be extremely shallow and may not continue through the underlying compound. Do not scrape aggressively just to find out. If the line follows a seam, has a ridge, or exposes tape, treat it as a drywall-joint defect.',
    },
    {
      question: 'Can I fill the crack with spackle?',
      answer:
        'A tiny, stable surface defect may accept a simple filler. A joint crack that opens again usually needs loose material removed and the joint reinforced with tape and compound; filling the visible line alone is more likely to fail again.',
    },
    {
      question: 'Should I repair a seasonal crack immediately?',
      answer:
        'Not if it is still changing. A cosmetic repair is more likely to last after the assembly has stabilized and the source of repeated movement has been addressed.',
    },
    {
      question: 'Who should inspect the crack?',
      answer:
        'A drywall finisher or experienced repair contractor can handle an isolated, stable joint defect. Use a structural engineer or seek local building guidance when there is deformation, recurring movement, uneven floors, sticking openings, or uncertainty about stability.',
    },
    {
      question: 'Can a plumbing leak cause drywall tape to crack?',
      answer:
        'Yes. EPA guidance identifies cracked drywall tape as a possible sign of water leakage, particularly when accompanied by rippling, staining, swelling, softness, or a musty odor.',
    },
    {
      question: 'Is a hairline crack more concerning in an old house?',
      answer:
        'Age alone does not decide the answer. An old, unchanged crack can be less concerning than a new crack in any house. Focus on current change, moisture, deformation, and related symptoms.',
    },
    {
      question: 'Is it safe to sand the repair in a pre-1978 home?',
      answer:
        'Painted surfaces in a pre-1978 home may contain lead. EPA recommends determining whether lead-based paint is present or using lead-safe renovation practices, because sanding and other repair work can create hazardous dust.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Gypsum Association',
      title: 'GA-221-2019 Causes, Prevention, and Repair of Joint Ridging and Centerline Cracking',
      url: 'https://www.americangypsum.com/sites/default/files/2022-01/ga-221_repair_of_gypsum_board_joint_ridging.pdf',
      sourceType: 'industry',
      notes:
        'Explains that temperature, humidity, framing movement, panel installation, and joints near openings can cause cracking. It also recommends correcting continuing movement before cosmetic repair.',
    },
    {
      publisher: 'USG',
      title: 'USG Sheetrock Brand Installation and Finishing Guide',
      url: 'https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/sheetrock-gypsum-panels-installation-guide-en-J371.pdf',
      sourceType: 'manufacturer',
      notes:
        'Provides manufacturer instructions for repairing small cracks and for reinforcing larger drywall cracks with joint compound and tape before priming and painting.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Mold Course Chapter 9',
      url: 'https://www.epa.gov/mold/mold-course-chapter-9',
      sourceType: 'government',
      notes:
        'Identifies cracked drywall tape, rippling coverings, and musty odors as signs that can indicate water leakage and hidden mold or material damage.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Mold Course Chapter 4',
      url: 'https://www.epa.gov/mold/mold-course-chapter-4',
      sourceType: 'government',
      notes:
        'States that drywall may be dried in place only when there is no obvious swelling and seams remain intact; otherwise removal may be necessary.',
    },
    {
      publisher: 'U.S. Geological Survey',
      title: 'What Are the Signs of Landslide Development? What Do I Do If a Landslide Occurs?',
      url: 'https://www.usgs.gov/programs/landslide-hazards/what-are-signs-landslide-development-what-do-i-do-if-a-landslide-occurs',
      sourceType: 'government',
      notes:
        'Lists new wall cracks, sticking doors or windows, utility damage, and separation from foundations among signs that can accompany ground movement.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Lead-Safe Renovations for DIYers',
      url: 'https://www.epa.gov/lead/lead-safe-renovations-diyers',
      sourceType: 'government',
      notes:
        'Advises precautions for renovation and repair work that may disturb lead-based paint in pre-1978 homes, including testing, dust control, containment, and cleanup.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Photo Log With a Consistent Reference',
      description:
        'Clear photographs from the same angle make growth, branching, and changes at the endpoints easier to identify than memory alone.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Drywall Joint Repair Materials',
      description:
        'Joint tape, compatible compound, finishing knives, primer, and dust-control supplies are appropriate only after the crack is stable and moisture or structural causes have been ruled out.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Moisture and Leak Assessment',
      description:
        'Useful when the crack is stained, soft, swollen, near plumbing, or accompanied by a musty odor. The source should be corrected before drywall repair.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Structural Evaluation',
      description:
        'Appropriate when the wall is deformed or the crack accompanies sticking openings, uneven floors, new gaps, repeated movement, or event damage.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'EPA Lead-Safe Renovation Guidance',
      description:
        'Explains how to contain dust, protect occupants, clean the work area, and find trained help when repairs may disturb lead-based paint.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'bulging-drywall',
      anchorText: 'Can I ignore drywall that is bulging?',
      relationshipType: 'escalation',
    },
    {
      slug: 'nail-pops-in-drywall',
      anchorText: 'Can I ignore nail pops in drywall?',
      relationshipType: 'sibling',
    },
    {
      slug: 'gap-between-wall-and-ceiling',
      anchorText: 'Can I ignore a gap between the wall and ceiling?',
      relationshipType: 'escalation',
    },
    {
      slug: 'crack-in-foundation',
      anchorText: 'Can I ignore a crack in my foundation?',
      relationshipType: 'escalation',
    },
    { slug: 'stain-on-a-wall', anchorText: 'Can I ignore a stain on the wall?', relationshipType: 'cause' },
  ],
};
