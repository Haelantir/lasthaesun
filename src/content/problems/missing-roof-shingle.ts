import type { ProblemSeed } from '../types';

export const missingRoofShingle: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'shingles',
  slug: 'missing-roof-shingle',
  canonicalPath: '/home/roof/shingles/missing-roof-shingle/',
  name: 'Missing Roof Shingle',
  eyebrow: 'Home · Roof · Shingles',

  h1: 'Can I Ignore a Missing Roof Shingle?',
  seoTitle: 'Missing Roof Shingle: How Urgent Is the Repair?',
  metaDescription:
    "One missing roof shingle may not mean an immediate emergency, but it leaves part of the roof more vulnerable to wind and water. Here's when to act.",

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I wait to repair it?',
  canIUseItLabel: 'Briefly, if the roof is dry and not leaking',

  shortAnswer:
    'Probably not. One missing shingle usually is not an emergency by itself, but the exposed area has less protection from wind and rain. Arrange a repair soon and move faster if more shingles are loose, the underlayment is damaged, or water is getting inside.',

  whyItMattersHeading: 'Why One Missing Shingle Matters',
  whyItMatters: [
    'Asphalt shingles are the outer water-shedding layer of the roof. Underlayment sits beneath them as additional protection, but losing a shingle exposes that underlying layer directly to weather and can also leave neighboring shingles more vulnerable to wind.',
    'A missing shingle does not guarantee a leak. The real concern is what happens if water gets past the remaining roof layers. Moisture can reach the roof deck, insulation, attic, ceilings, and walls. That turns a small exterior repair into an interior water-damage problem.',
  ].join('\n\n'),

  redFlagsHeading: 'Get the Roof Checked Promptly If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Checked missing-shingle repair, water-intrusion, asphalt-shingle construction, wind damage, and roof-access safety against government, industry, and manufacturer guidance.',
  disclaimer:
    'This is general triage guidance for asphalt-shingle roofs. Roof construction and damage vary, and a ground-level observation cannot confirm the condition of concealed roof layers.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-shingle-missing-roof-dry',
      label: 'One shingle is missing and everything inside is dry',
      shortDescription:
        'You can see one missing asphalt shingle, but there are no ceiling stains, attic moisture, or other obvious damage.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Repair it soon',
      resultBody:
        'A single missing shingle can leave the underlayment more exposed to rain and wind even when no leak is visible yet.',
      recommendedAction:
        'Arrange a roof repair and check the attic or ceilings for signs of water after rain. There is usually no reason to treat a dry house as an immediate emergency.',
    },
    {
      slug: 'several-shingles-missing',
      label: 'Several shingles are missing',
      shortDescription: 'A storm or wind event removed shingles from more than one part of the roof.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as meaningful roof damage',
      resultBody:
        'Wider loss of the roof covering exposes more of the water-control system and may indicate that surrounding shingles were also loosened.',
      recommendedAction:
        'Have the roof inspected promptly. Stay off the roof and use a qualified roofing service to assess the full damaged area.',
    },
    {
      slug: 'exposed-underlayment-intact',
      label: 'Underlayment is visible but appears intact',
      shortDescription:
        'The shingle is gone and the material beneath it is visible, but you do not see an open hole or torn roof deck.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'You still have some protection, not a finished roof',
      resultBody:
        'Underlayment provides secondary protection beneath asphalt shingles, but it is not a reason to leave the missing roof covering unrepaired.',
      recommendedAction:
        'Schedule repair before the exposed area experiences more weather. Watch the attic and ceiling below it for moisture.',
    },
    {
      slug: 'underlayment-torn-or-deck-visible',
      label: 'The underlayment is torn or roof deck is exposed',
      shortDescription:
        'You can see damaged underlayment, bare wood, an opening, or deeper layers where the shingle came off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The roof has lost more than its outer covering',
      resultBody: "Damage beneath the shingle reduces the roof's backup protection against water entry.",
      recommendedAction:
        'Arrange prompt weatherproofing and repair. Do not climb onto a wet, steep, or storm-damaged roof to attempt a temporary fix yourself.',
    },
    {
      slug: 'active-leak-after-missing-shingle',
      label: 'Water is already leaking inside',
      shortDescription:
        'The attic is wet, water is dripping, or a ceiling stain appeared after the roof damage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is now a water-intrusion problem',
      resultBody:
        'Water has already made it through the roof system. Continued exposure can damage insulation, ceilings, walls, and wood components and can create conditions for mold growth.',
      recommendedAction:
        'Stop additional water entry as safely as possible and arrange roof repair. Keep people away from wet electrical fixtures or damaged ceilings.',
    },
    {
      slug: 'surrounding-shingles-loose-lifted',
      label: 'Nearby shingles are lifted, curled, or loose',
      shortDescription: 'The missing shingle is not the only visible problem around that section of roof.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The damaged area may be larger than it looks',
      resultBody:
        'Wind damage can affect shingle sealing and attachment without removing every damaged shingle. Loose neighboring shingles can expose more of the roof during later weather.',
      recommendedAction:
        'Have the surrounding roof area inspected instead of replacing only the visibly missing piece.',
    },
    {
      slug: 'ridge-or-hip-shingle-missing',
      label: 'A ridge or hip cap shingle is missing',
      shortDescription: 'The missing piece is along the peak or angled seam where roof surfaces meet.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not dismiss it as cosmetic',
      resultBody:
        "Hip and ridge shingles cover seams where roof planes meet and are part of the roof's weather protection.",
      recommendedAction: 'Arrange repair and have adjacent cap shingles checked for looseness or damage.',
    },
    {
      slug: 'widespread-aging-and-missing-shingles',
      label: 'Shingles are missing across an old or deteriorated roof',
      shortDescription: 'You also see cracking, curling, brittleness, worn areas, or repeated shingle loss.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Think beyond one replacement shingle',
      resultBody:
        'Widespread deterioration suggests the roof-covering problem may not be confined to the piece that fell off.',
      recommendedAction:
        'Have the overall roof condition assessed so you can determine whether a localized repair is still appropriate.',
    },
    {
      slug: 'found-shingle-on-ground-no-gap-seen',
      label: 'You found a shingle on the ground but cannot find the missing spot',
      shortDescription:
        'A shingle or shingle-like piece appeared after wind, but the roof looks normal from the ground.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Verify that it actually came from your roof',
      resultBody:
        'The piece may have come from your roof or elsewhere nearby, and damage can be difficult to identify safely from the ground.',
      recommendedAction:
        'Look from the ground with binoculars and check the attic for water. Arrange an inspection if you cannot confirm that your roof is intact.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Part of the roof covering is gone',
      description:
        'The area that lost the shingle no longer has the same outer water-shedding and wind protection as the surrounding roof.',
      severity: 'caution',
      chainLabel: 'Missing roof covering',
    },
    {
      stageLabel: 'IF WEATHER REACHES THE EXPOSED AREA',
      title: 'The layers underneath take more exposure',
      description: 'Underlayment beneath the shingles becomes more directly exposed to rain and wind.',
      severity: 'caution',
      chainLabel: 'Less weather protection',
    },
    {
      stageLabel: 'IF WATER GETS PAST THOSE LAYERS',
      title: 'Moisture reaches the roof assembly',
      description: 'Water can wet roof decking, insulation, attic materials, or interior finishes.',
      severity: 'warning',
      chainLabel: 'Water intrusion',
    },
    {
      stageLabel: 'IF THE LEAK CONTINUES',
      title: 'Interior damage spreads',
      description:
        'Damp drywall, stained ceilings, damaged insulation, and deterioration of wood components can follow continued water intrusion.',
      severity: 'warning',
      chainLabel: 'Building damage',
    },
    {
      stageLabel: 'IF MOISTURE REMAINS',
      title: 'Rot and mold can become part of the repair',
      description:
        'Persistent moisture can support mold growth and contribute to decay of susceptible building materials.',
      severity: 'danger',
      chainLabel: 'Larger repair',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One missing shingle, dry weather, and no sign of a leak',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Arrange repair soon and inspect the attic or ceiling below the area for moisture.',
    },
    {
      situation: 'Rain is expected before the shingle can be replaced',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact a roofing service about repair or safe temporary weather protection rather than climbing onto the roof yourself.',
    },
    {
      situation: 'Several shingles came off during a storm',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Have the roof inspected for wider wind damage and loose surrounding shingles.',
    },
    {
      situation: 'Underlayment is visible but not obviously damaged',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Keep the repair on your near-term list and monitor indoors for water after precipitation.',
    },
    {
      situation: 'Bare roof decking or torn underlayment is visible',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Arrange prompt weatherproofing and repair.',
    },
    {
      situation: 'A ceiling stain or attic moisture appeared',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Treat this as an active roof leak and address both the water entry and any wet interior materials.',
    },
    {
      situation: 'The rest of the roof is curling, brittle, or losing shingles too',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Request an assessment of the roof as a whole rather than assuming one replacement shingle solves the problem.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check from the ground first',
      body:
        'Look for the missing area, lifted neighboring shingles, exposed underlayment, sagging, or other storm damage. Binoculars can help. Avoid walking on the roof just to inspect it.',
    },
    {
      title: 'Look inside for water',
      body:
        'Check the attic if it is safely accessible and look at ceilings below the damaged roof area. Damp insulation, wet wood, dripping, or new stains means water has already entered.',
      destinationProblemSlug: 'water-stain-on-ceiling',
    },
    {
      title: 'Arrange the shingle repair',
      body:
        'Replacing a missing shingle requires matching the roof system and fastening the replacement correctly without damaging surrounding shingles. For most homeowners, a roofing service is the safer choice.',
    },
    {
      title: 'Have nearby shingles checked',
      body:
        'If wind removed one shingle, neighboring shingles may also have loosened seals or attachment damage that is harder to see from the ground.',
    },
    {
      title: 'Protect the interior if water is entering',
      body:
        'Move belongings away from the leak and contain dripping water where it is safe to do so. Avoid wet electrical fixtures and damaged or bulging ceiling material while the source is being repaired.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Water is entering the attic or living space',
      description:
        'Dripping, damp insulation, wet roof decking, or a new ceiling stain means the roof problem is no longer limited to the exterior.',
      severity: 'danger',
    },
    {
      title: 'Bare roof decking is visible',
      description:
        'A damaged or missing underlayment layer leaves the roof with less protection from direct water entry.',
      severity: 'danger',
    },
    {
      title: 'Several shingles are missing',
      description: 'Wider shingle loss increases the exposed area and can signal broader wind damage.',
      severity: 'warning',
    },
    {
      title: 'Surrounding shingles are lifting or flapping',
      description: 'Shingles that remain on the roof may still have lost their seal or secure attachment.',
      severity: 'warning',
    },
    {
      title: 'The roof is sagging',
      description:
        'Sagging should not be treated as a routine missing-shingle repair because it can indicate a problem deeper in the roof assembly.',
      severity: 'danger',
    },
    {
      title: 'Water has reached lights, wiring, or electrical fixtures',
      description: 'Keep clear of the wet area and address the electrical hazard as well as the roof leak.',
      severity: 'danger',
    },
    {
      title: 'Shingles keep coming off',
      description:
        'Repeated shingle loss can point to aging materials, installation problems, or wind damage affecting a larger section of roof.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Will one missing shingle definitely make my roof leak?',
      answer:
        'No. The underlayment and overlapping roof layers may still keep water out. The problem is that the damaged area has less protection and should not be relied on indefinitely.',
    },
    {
      question: 'Can I replace only the missing shingle?',
      answer:
        'Sometimes. Localized damage on an otherwise sound roof may be repairable without replacing the whole roof. The condition of surrounding shingles and the layers underneath matters.',
    },
    {
      question: 'Does a missing shingle mean I need a new roof?',
      answer:
        'Not by itself. A few damaged shingles may be replaceable. Widespread missing, cracked, brittle, curled, or otherwise deteriorated shingles make a broader roof assessment more appropriate.',
    },
    {
      question: 'Why is there material under the missing shingle?',
      answer:
        'Asphalt-shingle roofs normally have underlayment installed over the roof deck beneath the shingles. It provides another layer of water protection but does not make the missing shingle irrelevant.',
    },
    {
      question: 'Can I just glue the old shingle back down?',
      answer:
        'Do not assume adhesive alone recreates the original roof installation. Shingle fastening and sealing depend on the roof product and installation method.',
    },
    {
      question: 'Why did only one shingle blow off?',
      answer:
        'Wind loads, aging, sealing, fastener placement, roof location, and installation quality can vary across a roof. One visible loss does not prove that every neighboring shingle is secure.',
    },
    {
      question: 'Is it safe to climb up and inspect it myself?',
      answer:
        'Roof work carries a fall risk, and storm-damaged or wet roofs can be especially hazardous. Much of the initial inspection can be done from the ground or from inside the attic.',
    },
    {
      question: 'Should I tarp a missing shingle?',
      answer:
        'Temporary weather protection can be useful when water is entering and permanent repair cannot happen immediately, but installing a tarp should not require you to take unsafe risks on the roof.',
    },
    {
      question: 'What if the replacement shingle does not match the color?',
      answer:
        'A color mismatch is mainly cosmetic. Correct compatibility, installation, fastening, and weather protection matter more than making the repair visually invisible.',
    },
    {
      question: 'Can a missing shingle cause mold?',
      answer:
        'The missing shingle itself does not create mold. If it contributes to water getting inside and materials remain wet, those damp conditions can support mold growth.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Virginia Department of Health',
      title: 'Water Intrusion and Mold',
      url: 'https://www.vdh.virginia.gov/environmental-health/public-health-toxicology/water-intrusion-and-mold/',
      sourceType: 'government',
      notes:
        'Advises fixing leaks promptly, checking for storm damage including missing shingles, preventing further water entry, and drying wet materials to reduce mold risk.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Doing the Little Things Makes a Difference in Wildfire Safety',
      url: 'https://www.usfa.fema.gov/blog/doing-the-little-things-makes-a-difference-in-wildfire-safety/',
      sourceType: 'government',
      notes:
        'U.S. Fire Administration guidance specifically recommends replacing or repairing loose or missing shingles or roof tiles.',
    },
    {
      publisher: 'National Roofing Contractors Association',
      title: 'Resources',
      url: 'https://www.nrca.net/roofing-guidelines/resources',
      sourceType: 'industry',
      notes:
        'Identifies missing shingles as a visible sign of roof problems, discusses leaks from localized roof damage, and advises homeowners to avoid most roof repair work because of fall and damage risks.',
    },
    {
      publisher: 'GAF',
      title: 'How to Identify Roof Damage and What to Look For',
      url: 'https://www.gaf.com/en-us/plan-design/homeowner-education/roof-damage',
      sourceType: 'manufacturer',
      notes:
        'Describes underlayment beneath shingles, lists missing shingles as roof damage, connects roof leaks with damaged shingles or underlayment, and recommends checking attics and ceilings for water damage.',
    },
    {
      publisher: 'Owens Corning',
      title: 'Signs of Storm Damage on your Roof',
      url: 'https://search.owenscorning.com/cache/?docId=5959360872fe44f8bdae2a8d25c98ddc&hq=on',
      sourceType: 'manufacturer',
      notes:
        'States that significant wind can blow shingles off the roof deck and that missing shingles can lead to leaks and interior damage. It also notes that wind damage may affect shingle seals without obvious shingle loss.',
    },
    {
      publisher: 'Insurance Institute for Business & Home Safety',
      title: 'Roof 101',
      url: 'https://ibhs.org/roof-101/',
      sourceType: 'industry',
      notes:
        'Explains asphalt-shingle layering, underlayment, fastening, sealing, and how wind can lift inadequately sealed shingles while water can move beneath them.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Binoculars',
      description: 'Useful for checking a roof from the ground without climbing onto it.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Roofing inspection and repair service',
      description:
        'Useful for confirming whether damage is localized and replacing shingles without damaging adjacent roof materials.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Attic flashlight',
      description:
        'Helps you look safely from inside for wet decking, damp insulation, staining, or daylight through damaged areas.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Temporary weather protection',
      description:
        'A roofing service may use appropriate temporary covering when permanent repair cannot be completed before more weather arrives.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'water-stain-on-ceiling',
      anchorText: 'Can I ignore a water stain on my ceiling?',
      relationshipType: 'follow_up',
    },
  ],
};
