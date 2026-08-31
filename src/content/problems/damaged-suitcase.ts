import type { ProblemSeed } from '../types';

export const damagedSuitcase: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'suitcases',
  slug: 'damaged-suitcase',
  canonicalPath: '/travel/luggage/suitcases/damaged-suitcase/',
  name: 'Cracked Suitcase or Broken Wheel',
  eyebrow: 'Travel · Luggage · Suitcases',

  h1: 'Can I Ignore a Crack or Broken Wheel on My Suitcase?',
  seoTitle: 'Cracked Suitcase or Broken Wheel: When to Repair or Replace It',
  metaDescription:
    'A scuff may be cosmetic, but shell cracks and loose, stuck, or missing wheels can disrupt travel. Learn when to stop using the suitcase and seek repair.',

  aliases: ['/travel/luggage/suitcases/cracked-suitcase/', '/travel/luggage/suitcases/broken-suitcase-wheel/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Briefly, only if it closes securely and rolls normally',

  shortAnswer:
    'Probably not. A mark that is only a surface scuff can wait, but an actual shell crack, loose wheel housing, missing wheel, or wheel that sticks should be repaired before normal travel. If airline handling caused the damage, photograph and report it before leaving the airport.',

  whyItMattersHeading: 'Why Suitcase Damage Is More Than Cosmetic',
  whyItMatters: [
    'Wheels, housings, corners, and the shell help support the load and keep the case controllable and closed. A jammed or loose wheel can make the suitcase drag or turn unexpectedly, while a crack near a corner, hinge, latch, zipper track, or wheel mount can affect the structure rather than just its appearance.',
    'The immediate safety risk is usually limited, but carrying a loaded suitcase after its wheels fail adds awkward lifting, and sharp broken plastic or exposed hardware can cause injury. Damage also becomes harder to claim after another trip because airlines generally are not responsible for pre-existing damage.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Suitcase If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Suitcase damage triage checked against U.S. DOT, eCFR, and NIOSH guidance plus current manufacturer repair, warranty, and use instructions.',
  disclaimer:
    'This is general suitcase and travel triage. Construction, repairability, warranty coverage, and airline claim procedures vary by model and carrier.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'surface-scuff-not-a-crack',
      label: 'The mark is only a surface scuff or scratch',
      shortDescription:
        'The shell is not split, the mark does not continue through the material, and the case closes and rolls normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually cosmetic',
      resultBody:
        'Manufacturers commonly distinguish scratches, scuffs, and minor dents without cracks from damage that affects function. Cosmetic marks do not normally require repair if the shell remains intact.',
      recommendedAction:
        'Clean the area and inspect it in bright light from both sides. Photograph it for reference and recheck it if the mark changes or the shell begins to separate.',
    },
    {
      slug: 'small-flat-shell-crack',
      label: 'There is a small crack, but the shell stays flat',
      shortDescription:
        'The material is split, but the crack does not open, the nearby corner is firm, and the suitcase still closes normally.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Use it only as a temporary workaround',
      resultBody:
        'Once the shell material has separated, the damage is no longer purely cosmetic. Repairability depends on the shell material, location, construction, and manufacturer.',
      recommendedAction:
        'Empty the case, inspect the inside, and ask the manufacturer or a luggage repair service whether it can be repaired. Avoid checking it again until you know the damaged area will remain secure.',
    },
    {
      slug: 'crack-opens-or-shell-flexes',
      label: 'The crack opens or the shell flexes around it',
      shortDescription:
        'The edges separate, the panel feels soft, or light handling changes the crack’s shape.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop treating this as minor damage',
      resultBody:
        'Movement at the crack shows that the damaged panel is no longer behaving as one continuous piece. Tape may contain the opening temporarily, but it does not restore the shell.',
      recommendedAction:
        'Transfer the contents to another bag if possible. Do not keep testing or bending the crack, and arrange an assessment or replacement before further travel.',
    },
    {
      slug: 'crack-at-wheel-corner',
      label: 'The crack reaches a wheel housing or corner',
      shortDescription:
        'The shell is split around the wheel mount, corner cap, or the area carrying the wheel assembly.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The wheel attachment may no longer be secure',
      resultBody:
        'A crack at the mounting area can affect both the shell and the wheel assembly. Replacing only the wheel may not solve the problem if its housing no longer has solid material to attach to.',
      recommendedAction:
        'Stop rolling the loaded suitcase. Have the complete corner and wheel housing assessed before ordering a wheel or attempting a repair.',
    },
    {
      slug: 'noisy-wheel-with-debris',
      label: 'One wheel squeaks or turns slowly, but is not loose',
      shortDescription:
        'The wheel remains aligned and attached, and dirt, hair, or other debris may be restricting it.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Clean and test it before replacing anything',
      resultBody:
        'Manufacturer repair guidance commonly recommends checking for debris when a wheel does not rotate freely. A dirty wheel can resemble a damaged one.',
      recommendedAction:
        'Unload the suitcase, remove visible debris, and clean the wheel and housing. Test it on a level surface and seek repair if it still sticks, wobbles, or turns sideways.',
    },
    {
      slug: 'wheel-wobbles-or-housing-is-loose',
      label: 'A wheel wobbles or its housing moves',
      shortDescription:
        'The wheel is still attached, but it leans, swivels unevenly, rattles, or shifts where it meets the suitcase.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Repair it before routine use',
      resultBody:
        'Loose hardware may be serviceable, but continued use with a loose wheel housing is not normal use. The correct repair depends on whether the fastener, wheel, housing, or shell is damaged.',
      recommendedAction:
        'Stop rolling a heavily loaded case. Check the manufacturer’s instructions and use the exact replacement hardware or an authorized repair option rather than forcing a generic part into place.',
    },
    {
      slug: 'wheel-tread-partly-broken',
      label: 'Part of the wheel tread has broken away',
      shortDescription:
        'The wheel is uneven but remains firmly attached, rotates, and does not expose a sharp axle or damaged housing.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'It may get you home, but it needs replacement',
      resultBody:
        'Some manufacturers describe short-term fixes for damaged in-line wheel tread, but those measures are intended to bridge a trip rather than restore the wheel permanently.',
      recommendedAction:
        'Reduce the load and use a cart where possible. Replace the wheel before checking the suitcase again, and stop using it sooner if it begins to jam, lean, or damage the housing.',
    },
    {
      slug: 'wheel-is-missing-or-seized',
      label: 'A wheel is missing, detached, or completely seized',
      shortDescription:
        'The suitcase drags, tips, scrapes its shell, or cannot roll without being pulled at an angle.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep rolling it normally',
      resultBody:
        'A missing or locked wheel leaves the case uneven and can make it stop or veer. Dragging it can also damage the shell and remaining wheel mounts.',
      recommendedAction:
        'Transfer the contents, use a baggage cart, or carry the suitcase only if you can do so safely. Replace or professionally repair the wheel before normal use.',
    },
    {
      slug: 'airline-damage-at-baggage-claim',
      label: 'You discovered the damage at baggage claim',
      shortDescription:
        'The suitcase was intact when checked and returned with a crack, missing wheel, loose housing, or other new damage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Document and report it before leaving',
      resultBody:
        'U.S. DOT guidance says passengers should report visible damage before leaving the airport. Airlines cannot categorically exclude wheel damage that goes beyond fair wear and tear.',
      recommendedAction:
        'Photograph the whole bag, close-ups of the damage, the baggage tag, and the claim check. Inspect the contents and ask the airline to create a damage report before you leave.',
    },
    {
      slug: 'sharp-edge-or-exposed-hardware',
      label: 'Broken plastic or metal has left a sharp edge',
      shortDescription:
        'The damage can cut a hand, snag clothing, or expose screws, an axle, or jagged shell material.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using it until the edge is contained',
      resultBody:
        'This is a direct contact hazard, especially when lifting the bag or placing it in a crowded baggage area. Covering the edge may help with immediate handling but does not make the structural damage safe for travel.',
      recommendedAction:
        'Keep people away from the damaged area, unload the suitcase, and transfer the contents. Have the part repaired or replace the case before using it again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The suitcase may lose part of its normal function',
      description:
        'A damaged wheel changes how the case rolls, while a true shell crack reduces the continuity of the panel that supports and protects the contents.',
      severity: 'caution',
      chainLabel: 'Damage affects function',
    },
    {
      stageLabel: 'IF YOU KEEP ROLLING IT',
      title: 'The wheel can drag, veer, or strain its mounting area',
      description:
        'A blocked, uneven, or loose wheel no longer shares the load normally. The suitcase may become harder to control, and connected hardware or shell material may also be affected.',
      severity: 'warning',
      chainLabel: 'Rolling becomes unreliable',
    },
    {
      stageLabel: 'IF YOU CARRY IT INSTEAD',
      title: 'The load shifts to your body',
      description:
        'Carrying a bulky, loaded suitcase can require more lifting, twisting, and awkward posture than rolling it. The risk increases when a broken part also makes the case difficult to grip.',
      severity: 'caution',
      chainLabel: 'Awkward manual handling',
    },
    {
      stageLabel: 'IF YOU CHECK IT AGAIN',
      title: 'The existing damage may complicate a later claim',
      description:
        'Airlines generally are not responsible for pre-existing damage. Another trip can make it difficult to separate old damage from anything that happens while the bag is in the carrier’s custody.',
      severity: 'warning',
      chainLabel: 'Pre-existing damage issue',
    },
    {
      stageLabel: 'IF THE WHEEL DETACHES OR THE SHELL OPENS',
      title: 'The bag can tip, drop, or expose its contents',
      description:
        'A detached wheel can leave an unstable load or loose part. A split shell can expose belongings, and jagged plastic or metal can become a contact hazard.',
      severity: 'danger',
      chainLabel: 'Loss of containment or control',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The mark is a confirmed surface scuff and every part works normally',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Clean it, photograph it, and continue using the suitcase. Reinspect it if the line changes or begins to separate.',
    },
    {
      situation: 'A small shell crack stays flat and the suitcase closes securely',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Use another bag for demanding travel if possible and arrange a manufacturer or repair-service assessment before checking this suitcase again.',
    },
    {
      situation: 'A wheel is noisy but firm and only appears dirty',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Unload and clean the wheel, remove visible debris, and confirm that it rotates and swivels normally.',
    },
    {
      situation: 'A wheel wobbles, leans, or has a loose housing',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop rolling a loaded case and identify whether the wheel, fastener, housing, or shell needs repair.',
    },
    {
      situation: 'A wheel is missing, seized, or partly detached',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Use a baggage cart, transfer the contents, or carry the case only if the load is manageable. Repair it before normal travel.',
    },
    {
      situation: 'The crack opens, reaches a corner, or exposes the interior',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Unload the suitcase and arrange repair or replacement. Do not rely on tape as a structural fix.',
    },
    {
      situation: 'The airline returned the checked bag with new damage',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Take photographs, inspect the contents, retain the baggage documents, and report the damage before leaving the airport.',
    },
    {
      situation: 'You only need to move the damaged bag to a safer location',
      ignoreAnswer: 'Only for that move',
      severity: 'caution',
      whatToDo:
        'Reduce the weight, cover sharp edges, and use a cart or help from another person rather than dragging a failed wheel.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Empty the suitcase and inspect both sides',
      body:
        'Remove the load before handling damaged wheels or flexing the case. Check the shell lining, corners, wheel housings, fasteners, closure, and interior for separation or missing hardware.',
    },
    {
      title: 'Test each wheel without forcing it',
      body:
        'On a level surface, spin and swivel each unloaded wheel. Clean visible debris first. Stop if a wheel jams, turns sideways, scrapes the housing, or makes the shell around it move.',
    },
    {
      title: 'Find the exact model before ordering parts',
      body:
        'Wheel assemblies and fasteners vary by collection and are not safely interchangeable just because they look similar. Use the interior product label and ask the manufacturer for the correct part and instructions.',
    },
    {
      title: 'Check warranty and repair terms before modifying the case',
      body:
        'Photograph the damage before drilling, gluing, riveting, or cutting anything. Unauthorized work can complicate a warranty assessment, and shell cracks may require evaluation rather than a generic patch.',
    },
    {
      title: 'Report carrier damage immediately',
      body:
        'Keep the baggage tag and claim check, photograph the entire suitcase and damaged area, inspect the contents, and ask the airline to create a written report before you leave the airport.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The wheel housing is separating from the shell',
      description:
        'Movement where the assembly attaches can mean that replacing the wheel alone will not restore a secure mount.',
      severity: 'danger',
    },
    {
      title: 'A wheel jams or turns sideways under the load',
      description: 'The case can stop or veer unexpectedly instead of tracking normally.',
      severity: 'warning',
    },
    {
      title: 'The crack opens when the suitcase is handled',
      description: 'Visible movement means the shell damage is functional rather than a fixed surface mark.',
      severity: 'danger',
    },
    {
      title: 'The interior or your belongings are visible',
      description: 'The suitcase is no longer reliably containing or protecting its contents.',
      severity: 'danger',
    },
    {
      title: 'Broken material has a sharp or exposed edge',
      description: 'Jagged plastic, screws, or an exposed axle can cut or snag someone handling the bag.',
      severity: 'danger',
    },
    {
      title: 'The suitcase will not remain upright or closed',
      description:
        'Do not take an unstable or unsecured case through crowded areas or attempt to check it without repacking.',
      severity: 'warning',
    },
    {
      title: 'You cannot carry the failed suitcase safely',
      description:
        'Do not compensate for broken wheels by lifting or twisting with a load that is too awkward for you. Transfer items or use a cart.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I fly with one broken suitcase wheel?',
      answer:
        'Avoid it if possible. A firmly attached wheel with minor tread damage may be manageable as a short-term workaround, but a loose, seized, or missing wheel should be repaired before the suitcase is checked or rolled normally.',
    },
    {
      question: 'Will an airline accept a cracked suitcase?',
      answer:
        'Acceptance policies vary, and staff may note pre-existing damage or decide that a severely damaged bag is unsuitable. Even if accepted, the airline generally is not responsible for damage that was already present.',
    },
    {
      question: 'Can I use a cracked suitcase as a carry-on?',
      answer:
        'Only if it closes securely, contains every item, meets the airline’s allowance, and can be stowed as directed by the crew. Do not use it if the shell opens, has sharp edges, or cannot be handled safely.',
    },
    {
      question: 'Can duct tape fix a cracked shell?',
      answer:
        'Tape may temporarily contain a small opening while you transfer or move the bag, but it does not restore the shell’s structure. Do not treat a taped crack as ready for checked-baggage handling.',
    },
    {
      question: 'Can I tape a damaged suitcase wheel?',
      answer:
        'Some manufacturer guidance describes tape as a short-term measure for certain damaged in-line wheel treads. It is not suitable for a loose housing, detached spinner, seized bearing, or cracked wheel-mounting corner.',
    },
    {
      question: 'Can a broken suitcase wheel be replaced?',
      answer:
        'Often, yes. Some cases have screw-mounted or user-replaceable wheels, while others require a repair service. A cracked housing or shell can make a wheel-only replacement insufficient.',
    },
    {
      question: 'Are replacement suitcase wheels universal?',
      answer:
        'No. Dimensions, axle designs, housings, screw patterns, and wheel positions vary. Match the replacement to the exact brand, collection, model, and wheel location.',
    },
    {
      question: 'Does a luggage warranty cover cracks or broken wheels?',
      answer:
        'It depends on the cause and warranty. Manufacturing defects may be covered, while normal wear, accidents, misuse, transport damage, and unauthorized repairs are commonly excluded. Have the brand assess the damage.',
    },
    {
      question: 'How can I tell a scratch from a crack?',
      answer:
        'Clean the mark and inspect the exterior and interior in bright light. A scratch affects the surface; a crack involves separation in the shell material. If the line opens, flexes, or reaches an edge or mount, treat it as a crack.',
    },
    {
      question: 'Will the airline pay for a wheel broken during a flight?',
      answer:
        'Potentially. U.S. DOT guidance says airlines cannot categorically exclude damage to wheels and other components when it goes beyond fair wear and tear. Report it promptly and keep photographs and baggage documents.',
    },
    {
      question: 'What if I noticed airline damage after leaving the airport?',
      answer:
        'Contact the airline immediately and follow its claim procedure. Reporting deadlines and evidence requirements vary, and leaving without a report can make the claim more difficult.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Transportation',
      title: 'Lost, Delayed, or Damaged Baggage',
      url: 'https://www.transportation.gov/lost-delayed-or-damaged-baggage',
      sourceType: 'government',
      notes:
        'Explains airline responsibility for baggage damaged while in its custody, treatment of pre-existing damage, wheel and component claims, and the recommendation to report visible damage before leaving the airport.',
    },
    {
      publisher: 'Electronic Code of Federal Regulations',
      title: '14 CFR 121.589 — Carry-on baggage',
      url: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-121/subpart-T/section-121.589',
      sourceType: 'regulation',
      notes:
        'Requires carry-on baggage to comply with the carrier’s approved program and to be properly stowed in a suitable compartment, overhead rack, or beneath a seat as applicable.',
    },
    {
      publisher: 'RIMOWA',
      title: 'Owner manual',
      url: 'https://www.rimowa.com/us/en/owner-manual',
      sourceType: 'manufacturer',
      notes:
        'Identifies continued use with blocked wheels or loose components such as wheel housings as improper use and recommends inspecting luggage after transport and immediately reporting carrier damage.',
    },
    {
      publisher: 'Travelpro',
      title: 'Luggage Repair Guide',
      url: 'https://travelpro.com/pages/luggage-repair-guide/1000',
      sourceType: 'manufacturer',
      notes:
        'Advises cleaning restricted wheels, carefully addressing loose hardware, obtaining properly fitting replacement wheels from the manufacturer, and treating emergency wheel measures as short-term repairs.',
    },
    {
      publisher: 'LOJEL',
      title: 'The Warranty',
      url: 'https://www.lojel.com/warranty/',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes cosmetic scuffs and minor dents without cracks from functional damage, describes individual assessment of shell cracks, and lists wheels among parts that may be replaced subject to availability.',
    },
    {
      publisher: 'National Institute for Occupational Safety and Health',
      title: 'Step 1: Identify Risk Factors',
      url: 'https://www.cdc.gov/niosh/ergonomics/ergo-programs/risk-factors.html',
      sourceType: 'government',
      notes:
        'Identifies twisting while carrying loads, lifting bulky loads, awkward posture, forceful movement, and heavy physical work as musculoskeletal risk factors.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Model-specific replacement wheel kit',
      description:
        'Provides a wheel and compatible hardware intended for the exact suitcase model. Confirm the collection and wheel position before ordering.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Luggage repair service',
      description:
        'Useful when the wheel housing, shell, frame, or inaccessible internal hardware is damaged, or when the manufacturer does not offer a self-repair part.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Baggage cart or porter service',
      description:
        'Lets you move a suitcase with failed wheels without dragging it or taking on an awkward load.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Phone camera and baggage documents',
      description:
        'Clear photographs, the baggage tag, claim check, receipt, and product label help with airline, warranty, and repair assessments.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'suitcase-zip-not-closing',
      anchorText: 'Can I ignore a suitcase zipper that will not close?',
      relationshipType: 'sibling',
    },
  ],
};
