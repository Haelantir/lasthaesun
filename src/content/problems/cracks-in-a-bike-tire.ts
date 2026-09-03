import type { ProblemSeed } from '../types';

export const cracksInABikeTire: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'bike-wheels-and-tires',
  slug: 'cracks-in-a-bike-tire',
  canonicalPath: '/bicycles/wheels-and-tires/cracks-in-a-bike-tire/',
  name: 'Cracks in a Bike Tire',
  eyebrow: 'Mobility · Bicycles · Wheels & Tires',

  h1: 'Can I Ignore Cracks in a Bike Tire?',
  seoTitle: 'Bike Tire Cracks: When to Replace the Tire',
  metaDescription:
    'Fine surface checking may be cosmetic, but deep sidewall cracks, exposed casing, bulges, bead damage, or air loss mean the bike tire should be replaced.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Only after a close inspection',

  shortAnswer:
    'Probably not. Fine surface checking can be limited to the outer rubber, but deeper sidewall cracks, exposed casing, bulges, bead damage, or air loss mean stop riding and replace the tire. If you cannot tell how deep the damage is, do not ride until a bike shop checks it.',

  whyItMattersHeading: 'Why Tire Cracks Need a Closer Look',
  whyItMatters: [
    'A bike tire’s rubber covers a textile casing that gives the tire its shape and strength. Small, evenly distributed aging checks can stay in the outer rubber, so the number of lines alone does not decide whether the tire is unsafe. Depth, location, deformation, air retention, and the condition of the casing matter more.',
    'A crack that reaches the casing is different. A damaged sidewall can let an inner tube push through, while a damaged tubeless setup can lose pressure or detach from the rim. Prolonged underinflation, flat storage, sunlight, heat, abrasion, and brake-pad contact can all contribute to tire damage.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding Immediately If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Assessment covers crack depth, sidewall fatigue, tread splits, exposed casing, bulges, bead damage, pressure loss, storage, and field measures using CPSC and tire-maker guidance.',
  disclaimer:
    'This page provides general bicycle triage and cannot determine casing damage from a description or photograph. When the tire’s structure or bead is uncertain, keep the bike off the road until it has been inspected.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'fine-sidewall-crazing',
      label: 'Fine, even checking across the sidewall',
      shortDescription:
        'Small shallow lines are spread evenly across the sidewall, while the tire remains supple, round, and free of exposed fabric or air loss.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'It may be surface aging, but keep checking it',
      resultBody:
        'Small, evenly distributed aging checks can be limited to the outer rubber. They are lower concern only when the casing stays covered, the tire keeps its shape, and pressure remains stable.',
      recommendedAction:
        'Clean and inspect the tire in bright light. Photograph the area, check pressure with a gauge, and recheck before riding. Replace the tire if the lines deepen, the rubber becomes brittle or flaky, or its manufacturer says cracking requires replacement.',
    },
    {
      slug: 'shallow-cracks-between-knobs',
      label: 'Shallow cracks between tread knobs',
      shortDescription:
        'Fine splits appear in the tread valleys, but the knobs remain firmly attached and no casing threads are visible.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Inspect closely before continuing to use it',
      resultBody:
        'Surface checking between knobs does not automatically prove the casing has failed. It becomes more concerning when a split reaches fabric, a knob starts separating, or the tire loses grip or pressure.',
      recommendedAction:
        'Deflate the tire before gently inspecting the tread valleys. Replace it if a crack reaches the casing, rubber flakes away, or any knob moves independently from its base.',
    },
    {
      slug: 'large-upper-sidewall-cracks',
      label: 'A few larger cracks high on the sidewall',
      shortDescription:
        'Larger cracks run near the transition between the tread and sidewall, especially on a tire that has often been ridden soft.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This fits sidewall fatigue',
      resultBody:
        'A few larger upper-sidewall cracks are associated with repeated sidewall flex from prolonged underinflation. The visible rubber damage may accompany weakening farther into the tire.',
      recommendedAction:
        'Stop normal riding and replace the tire. Check the other tire’s pressure and condition, and use a gauge to maintain pressure within the limits specified for the tire, rim, and bicycle.',
    },
    {
      slug: 'crack-opens-when-flexed',
      label: 'The crack opens when the deflated tire is flexed',
      shortDescription:
        'The split has visible depth, reveals a different layer, or opens into a cut when the tire is gently flexed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The damage is deeper than surface checking',
      resultBody:
        'An opening split suggests that the rubber cover is separating or the casing may be involved. Continued flexing can enlarge a weakened area.',
      recommendedAction:
        'Do not reinflate the tire for riding. Remove it and inspect the inside if you know how, or have a bike shop inspect and replace it.',
    },
    {
      slug: 'casing-threads-visible',
      label: 'Casing threads or canvas are visible',
      shortDescription: 'Fabric appears through a crack, cut, or worn area in the tread or sidewall.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Replace the tire before riding',
      resultBody:
        'Visible casing means the protective rubber has been breached. Tire manufacturers treat exposed casing threads or a cut through the casing as a replacement condition.',
      recommendedAction:
        'Do not ride on it. Replace the tire and inspect the tube, rim tape, rim, and the inside of the old tire for the cause of the damage.',
    },
    {
      slug: 'sidewall-bulge',
      label: 'A bulge, bubble, or lump near the crack',
      shortDescription: 'Part of the inflated tire protrudes outward or changes shape as pressure is added.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The casing is no longer holding its shape',
      resultBody:
        'A bulge indicates deformation or loss of support within the tire. On a tubed setup, the tube may be pushing toward or through damaged casing.',
      recommendedAction:
        'Do not add more air or ride the bike. Deflate the tire carefully, replace it, and inspect the tube and rim before installing the replacement.',
    },
    {
      slug: 'bead-or-rim-edge-damage',
      label: 'The crack reaches the bead or rim edge',
      shortDescription:
        'Damage appears where the tire sits against the rim, or the bead looks cut, frayed, exposed, or unevenly seated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not trust the tire to stay seated',
      resultBody:
        'The bead holds the tire on the rim, and exposed casing at the rim edge can chafe quickly. Damage in this area can interfere with secure seating.',
      recommendedAction:
        'Stop riding and deflate the tire. Replace a damaged tire, then inspect the rim edge and rim tape and confirm that the new tire seats evenly.',
    },
    {
      slug: 'crack-leaking-air-or-sealant',
      label: 'Air or tubeless sealant is escaping through the crack',
      shortDescription: 'The tire loses pressure, hisses, bubbles, or shows wet sealant at the damaged area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The damage is no longer cosmetic',
      resultBody:
        'Leakage through the crack shows that the tire system is not reliably containing pressure. Sealant may slow a leak without restoring damaged casing.',
      recommendedAction:
        'Stop riding, deflate the tire, and inspect it from both sides. Replace the tire if the casing is cut or damaged rather than relying on sealant or an external patch.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The visible lines may not show their full depth',
      description:
        'Fine checking can stay in the outer rubber, but an inflated tire can hide how far a split reaches. Inspection is needed before deciding it is cosmetic.',
      severity: 'caution',
      chainLabel: 'Surface mark or casing damage?',
    },
    {
      stageLabel: 'WITH CONTINUED FLEXING',
      title: 'A weakened area can open farther',
      description:
        'Sidewalls flex whenever the wheel rolls. A tear or fatigue-damaged area can enlarge, particularly if pressure remains too low.',
      severity: 'warning',
      chainLabel: 'Repeated sidewall movement',
    },
    {
      stageLabel: 'IF THE CASING IS BREACHED',
      title: 'Pressure support becomes unreliable',
      description:
        'Exposed or cut casing reduces protection against punctures and may allow an inner tube to protrude through the damaged area.',
      severity: 'warning',
      chainLabel: 'Rubber breached',
    },
    {
      stageLabel: 'IF THE TIRE DEFORMS',
      title: 'A bulge or damaged bead can no longer be monitored safely',
      description:
        'Deformation means the tire is not containing pressure uniformly. Bead damage can also interfere with the tire’s ability to remain seated on the rim.',
      severity: 'danger',
      chainLabel: 'Structural warning',
    },
    {
      stageLabel: 'IF THE TIRE FAILS WHILE RIDING',
      title: 'Sudden pressure loss can cause a crash',
      description:
        'A tube can burst, a tubeless tire can rapidly lose pressure, or a damaged tire can come off the rim. Any of these can cause loss of control and a fall.',
      severity: 'danger',
      chainLabel: 'Tire failure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation:
        'Fine, even sidewall checking with no exposed fabric, distortion, brittleness, or pressure loss',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Inspect closely, record its condition, verify pressure with a gauge, and follow the tire manufacturer’s replacement guidance. Stop using it if any line deepens or opens.',
    },
    {
      situation: 'Shallow tread-valley cracks with secure knobs and intact casing',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Inspect with the tire deflated. Continue only if the damage stays in the outer rubber and the tire retains pressure, shape, and grip.',
    },
    {
      situation: 'A few large cracks near the tread-sidewall transition',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Replace the tire and correct any underinflation or load problem that contributed to repeated sidewall flex.',
    },
    {
      situation: 'A crack opens or shows another layer when the tire is flexed',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Keep the tire deflated and replace it or have it inspected at a bike shop.',
    },
    {
      situation: 'Casing threads, canvas, or the puncture-protection layer are visible',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not ride. Replace the tire and inspect the tube, rim tape, and rim.',
    },
    {
      situation: 'The tire has a bulge, bubble, lump, or uneven shape',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not inflate it further. Deflate and replace the tire before the bike is ridden.',
    },
    {
      situation: 'Damage reaches the bead or sits directly at the rim edge',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop riding, deflate the tire, and inspect both the tire bead and rim before installing a replacement.',
    },
    {
      situation: 'Air or sealant escapes from the crack',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat it as a pressure-retention or casing problem. Replace structurally damaged tires rather than relying on sealant.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Inspect the entire tire before adding more air',
      body:
        'Put the bike somewhere stable and examine the tread, both sidewalls, bead line, and valve area in bright light. Do not add air to a bulged or uneven tire. If no deformation is present, deflate and remove the tire for an inside inspection when necessary.',
    },
    {
      title: 'Check whether the tire is losing pressure',
      body:
        'Use a gauge rather than judging pressure by squeezing the tire. If pressure falls again, find the leak and inspect the matching area of the tire, tube, rim tape, and rim.',
      destinationProblemSlug: 'bike-tire-losing-air-slowly',
    },
    {
      title: 'Replace a tire with structural damage',
      body:
        'Match the replacement tire to the rim diameter and a width approved for the bicycle and rim. Inspect the tube or tubeless components before installation, seat the bead evenly, and stay within the applicable pressure limits.',
    },
    {
      title: 'Find what caused the cracking',
      body:
        'Check for prolonged underinflation, flat storage, direct sunlight, heat, abrasive contact, sharp debris, and rim-brake pads rubbing the tire. Correcting the cause helps protect the replacement.',
    },
    {
      title: 'Use a tire boot only as an emergency measure',
      body:
        'A boot may help contain a tube behind a localized casing cut long enough to leave a route, but it does not restore the tire’s original strength. It is not a remedy for aging cracks, bulges, bead damage, or structurally damaged tubeless tires. Walking or transporting the bike is safer.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A bulge, bubble, or localized lump',
      description:
        'This indicates deformation beneath the rubber or a tube pushing into damaged casing. Do not inflate the tire further.',
      severity: 'danger',
    },
    {
      title: 'Visible casing threads or canvas',
      description: 'The tire’s structural layer is exposed through a crack, cut, or worn area.',
      severity: 'danger',
    },
    {
      title: 'A crack that opens or reaches through the casing',
      description: 'A deep split is structural damage, not harmless surface checking.',
      severity: 'danger',
    },
    {
      title: 'Damage at the bead or rim edge',
      description:
        'A cut, frayed bead, exposed casing, or uneven seating can prevent the tire from remaining securely mounted.',
      severity: 'danger',
    },
    {
      title: 'Air loss, hissing, bubbles, or leaking sealant',
      description: 'The tire system is no longer reliably holding pressure, even if the leak seems slow.',
      severity: 'warning',
    },
    {
      title: 'New thumping, rubbing, or visible tire wobble',
      description:
        'Stop and check for a bulge, bead seating problem, casing distortion, rim damage, or tire contact with the bicycle.',
      severity: 'danger',
    },
    {
      title: 'Brake-pad damage to the sidewall',
      description:
        'A rim-brake pad that touches the tire can slice the sidewall. Replace the damaged tire and correct the brake alignment before riding.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Are small sidewall cracks always dangerous?',
      answer:
        'No. Fine, shallow, evenly distributed checking can be limited to the outer rubber. It should not be treated as harmless unless the tire remains supple and round, covers the casing completely, and holds pressure.',
    },
    {
      question: 'How old is too old for a bike tire?',
      answer:
        'There is no single age limit that applies to every bicycle tire. Follow the tire manufacturer’s instructions and judge the tire by cracking, brittleness, wear, storage conditions, pressure history, and casing condition.',
    },
    {
      question: 'Can I glue cracks in a bike tire?',
      answer:
        'No adhesive applied to the outside restores a damaged casing or bead. Glue may hide the opening without returning the tire’s original strength.',
    },
    {
      question: 'Will tubeless sealant fix a cracked tire?',
      answer:
        'Sealant can close some small punctures, but it does not repair aged rubber, a split casing, a bulge, or bead damage. Sealant leaking through a crack is a reason to stop and inspect the tire.',
    },
    {
      question: 'Can I use a tire boot over a crack?',
      answer:
        'A tire boot is an emergency support for a localized cut in a tire with an inner tube. It is not a permanent repair and should not be used to justify riding on widespread cracking, a bulge, damaged bead, or brittle tire.',
    },
    {
      question: 'Are cracks between mountain-bike tire knobs normal?',
      answer:
        'Fine surface checking can occur as rubber ages. Replace the tire if the splits reach the casing, knobs crack at their bases or begin separating, the rubber flakes away, or grip has noticeably deteriorated.',
    },
    {
      question: 'Why does low pressure cause sidewall cracks?',
      answer:
        'Insufficient pressure makes the sidewall flex more as the tire carries the bicycle and rider. Repeated excessive flex can fatigue the sidewall and produce larger cracks or tears.',
    },
    {
      question: 'Do I need to replace both bike tires?',
      answer:
        'Not automatically. Replace the damaged tire, but inspect the other tire closely because similar age, storage, and pressure history may have affected it too.',
    },
    {
      question: 'Can I ride a cracked tire to the bike shop?',
      answer:
        'Only if a close inspection confirms shallow surface checking with no casing exposure, bulge, bead damage, brittleness, or pressure loss. Otherwise, walk the bike or transport it.',
    },
    {
      question: 'Should I replace the inner tube with the tire?',
      answer:
        'Replace the tube if it is punctured, abraded, stretched where it pushed into a cut, damaged at the valve, or otherwise questionable. A sound tube can be reused after careful inspection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Sprocket Man',
      url: 'https://www.cpsc.gov/s3fs-public/341.pdf',
      sourceType: 'government',
      notes:
        'Its bicycle inspection checklist says tire tread should have no worn-through patches or bulges and calls for checking inflation pressure.',
    },
    {
      publisher: 'Continental',
      title: 'Mounting and Care Instructions for Clincher and Folding Tyres',
      url: 'https://www.continental-tires.com/content/dam/conti-tires-cms/continental/b2c/downloads/bicycle/Continental%20Montageanleitung_EN_2018-04-19_Internet.pdf.coredownload.pdf',
      sourceType: 'manufacturer',
      notes:
        'Says to check tire condition before riding and replace brittle or cracked tires with worn tread or visible carcass. It warns that impaired structure can let the tube burst and advises avoiding sun, heat, and flat storage.',
    },
    {
      publisher: 'Schwalbe',
      title: 'Bicycle Tire Wear',
      url: 'https://www.schwalbe.com/en/technology-faq/tire-wear/',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes larger fatigue cracks linked to prolonged low pressure from small, evenly distributed aging cracks. It says visible carcass or puncture-protection material marks the wear limit and discusses storage conditions.',
    },
    {
      publisher: 'Trek Bicycle',
      title: 'Trek Bicycle Owner’s Manual, Revision 6, March 2026',
      url: 'https://media.trekbikes.com/image/upload/v1772741823/TrekBicycleOwnersManual_EN_Rev6_Mar2026.pdf',
      sourceType: 'manufacturer',
      notes:
        'Says to replace a tire if a cut passes through the casing or casing threads show through the tread. It also warns that a damaged tubeless tire and rim combination can lose pressure or detach.',
    },
    {
      publisher: 'Continental',
      title: 'Bike Tire Maintenance',
      url: 'https://www.continental-tires.com/about-us/stories/bike-tire-maintenance/',
      sourceType: 'manufacturer',
      notes:
        'Advises checking sidewalls for tears and bulges, explains that a tear can let the tube bulge outward, identifies bare canvas as a replacement condition, and notes that a misaligned rim-brake pad can slice a tire.',
    },
    {
      publisher: 'Cycling UK',
      title: 'Foldable Tyres',
      url: 'https://www.cyclinguk.org/cycle/foldable-tyres',
      sourceType: 'industry',
      notes:
        'Its technical Q&A distinguishes cracking limited to outer rubber from puncturing or distortion and identifies exposed casing at the rim edge as a concern.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Floor pump with a pressure gauge',
      description:
        'Provides a repeatable pressure reading and helps prevent the prolonged underinflation associated with sidewall fatigue.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Compatible replacement tire and tube',
      description:
        'Match the rim diameter and use a width and pressure range suitable for the rim and bicycle. Keep a tube available even if only one currently needs replacement.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bicycle tire levers and tire boot',
      description:
        'Tire levers help with removal without using sharp tools. A tire boot is for limited emergency support behind a localized cut, not permanent repair.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bike shop tire and wheel inspection',
      description:
        'Useful when crack depth is uncertain, the bead looks damaged, a tubeless setup will not hold pressure, or the tire has developed a bulge or unexplained wobble.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'bike-tire-losing-air-slowly',
      anchorText: 'Why does my bike tire keep losing air?',
      relationshipType: 'related',
    },
  ],
};
