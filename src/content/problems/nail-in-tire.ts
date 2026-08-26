import type { ProblemSeed } from '../types';

/**
 * Cars > Tires > Nail in Tire.
 *
 * Every factual claim below traces to one of the three sources at the bottom
 * of this file — principally the tire industry's own puncture-repair
 * criteria (repairable tread area, 1/4"/6mm size limit, no repair once a
 * tire has been driven flat) rather than a driving-distance figure, which no
 * source publishes and this page does not invent.
 */
export const nailInTire: ProblemSeed = {
  systemSlug: 'tires',
  slug: 'nail-in-tire',
  canonicalPath: '/cars/tires/nail-in-tire/',
  name: 'Nail in Tire',
  eyebrow: 'Cars · Tires',

  h1: 'Can I Ignore a Nail in My Tire?',
  seoTitle: 'Can You Drive With a Nail in Your Tire? When Is It Safe? | Can I Ignore It',
  metaDescription:
    "A nail in your tire doesn't always mean you must stop immediately, but location and pressure loss matter. See when to stop and what to do next.",

  status: 'published',
  indexable: true,

  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Sometimes, briefly',

  shortAnswer:
    "Don't ignore a nail in your tire. If it is in the tread, the tire is holding the correct pressure and the car feels completely normal, you may have more options than if the tire is actively losing air. Leave the nail in place, check the pressure and arrange a professional inspection. If the tire is low, going flat, damaged near the sidewall or behaving abnormally, stop treating it as a normal drive.",

  whyItMattersHeading: 'Why Does a Nail in a Tire Matter?',
  whyItMatters: [
    'A nail does not always produce an immediate flat tire. The object may not have penetrated completely, or it may remain in the puncture and slow the loss of air. That can make the tire appear normal even when it needs attention.',
    'What matters most is the location and extent of the damage. Industry guidance limits normal puncture repairs to qualifying injuries in the tread area. Damage extending into the shoulder or sidewall falls outside that repair area because those parts of the tire experience substantial flex and load.',
    'Even a puncture that appears repairable from the outside still needs an internal inspection. Industry guidance calls for the tire to be removed from the wheel, the puncture channel filled and the inner liner sealed. An external plug by itself is not considered a proper permanent repair.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving If You Notice:',

  lastReviewedAt: new Date('2026-08-27T00:00:00Z'),
  reviewScope: 'Tire puncture safety and repair guidance',
  disclaimer:
    'General tire-safety guidance only. Whether a punctured tire can be repaired depends on its location, internal condition and the tire manufacturer’s repair policy. A qualified tire professional should inspect the tire before a repair decision is made.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'tread-pressure-holding',
      label: 'The nail is in the middle of the tread',
      shortDescription: 'The tire is holding pressure and feels normal.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'GET IT CHECKED',
      resultBody:
        'A small puncture confined to the repairable tread area may be repairable, but that cannot be confirmed from the outside. The tire needs to be removed from the wheel and inspected for internal damage.',
      recommendedAction:
        "Leave the nail in place, confirm that the tire is at the vehicle's recommended pressure and arrange a tire inspection promptly. Avoid unnecessary driving.",
    },
    {
      slug: 'near-shoulder',
      label: 'The nail is near the outer edge or shoulder',
      shortDescription: 'The puncture is close to the edge of the tread.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "DON'T COUNT ON A REPAIR",
      resultBody:
        'Industry repair guidance excludes punctures that extend into the shoulder or belt-edge area. Something that looks like it is still on the tread can still be outside the repairable zone.',
      recommendedAction:
        'Avoid unnecessary driving and have the tire professionally inspected. Do not assume it can be repaired based on appearance alone.',
    },
    {
      slug: 'sidewall',
      label: 'The nail is in the sidewall',
      shortDescription: 'The object is outside the tread area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: "DON'T KEEP USING THE TIRE NORMALLY",
      resultBody:
        'A sidewall puncture falls outside the standard repairable tread area. Sidewall damage is generally treated as a replacement issue rather than a conventional puncture repair.',
      recommendedAction:
        'If the tire is losing pressure or shows additional damage, use a suitable spare or roadside assistance rather than continuing to drive normally.',
    },
    {
      slug: 'slow-pressure-loss',
      label: 'The tire keeps losing pressure',
      shortDescription: 'You add air, but the pressure falls again.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DEAL WITH IT NOW',
      resultBody:
        'Repeated pressure loss indicates that the tire is not maintaining its proper inflation. The puncture may be leaking even if the tire does not look flat.',
      recommendedAction: 'Check the pressure and arrange an inspection. Repeatedly adding air is not a repair.',
    },
    {
      slug: 'flat-or-hissing',
      label: 'The tire looks low or I can hear air escaping',
      shortDescription: 'Pressure loss appears significant or rapid.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP DRIVING',
      resultBody:
        'Driving on a severely underinflated or flat tire can create additional internal damage. A puncture that might otherwise have been repairable may no longer qualify after the tire has been driven flat.',
      recommendedAction:
        'Stop driving when safe. Use a suitable spare tire or roadside assistance and have the damaged tire inspected.',
    },
    {
      slug: 'nail-removed',
      label: 'I already pulled the nail out',
      shortDescription: 'The object is no longer plugging the puncture.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CHECK THE PRESSURE NOW',
      resultBody:
        'Removing the object can expose the puncture path and allow air to escape more quickly. The tire may begin losing pressure even if it looked normal beforehand.',
      recommendedAction:
        'Check the tire pressure immediately. If the pressure is falling, the tire looks low or the vehicle feels abnormal, stop driving normally and arrange assistance or inspection.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The nail may appear to be doing nothing',
      description:
        'It may not have penetrated completely, or the object may be slowing air loss through the puncture.',
      severity: 'info',
      chainLabel: 'Puncture',
    },
    {
      stageLabel: 'IF IT LEAKS',
      title: 'Air pressure begins to fall',
      description: 'The leak may be obvious or slow enough that the tire still looks normal.',
      severity: 'caution',
      chainLabel: 'Pressure loss',
    },
    {
      stageLabel: 'KEEP DRIVING UNDERINFLATED',
      title: 'The tire flexes more and generates more heat',
      description: 'Underinflation increases tire deformation and can accelerate wear and internal damage.',
      severity: 'warning',
      chainLabel: 'Heat / flex',
    },
    {
      stageLabel: 'DRIVE ON IT FLAT',
      title: 'Internal damage can develop',
      description:
        'A tire that has been driven while flat may no longer be safely repairable even when the original puncture was small.',
      severity: 'danger',
      chainLabel: 'Internal damage',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Tire failure',
      description:
        'Severe pressure loss and accumulated tire damage can eventually compromise the tire and vehicle control.',
      severity: 'danger',
      chainLabel: 'Possible tire failure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Nail in the tread and pressure is holding',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Confirm the pressure and arrange a professional inspection promptly. Avoid unnecessary driving.',
    },
    {
      situation: 'Slow pressure loss',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Minimize driving and have the puncture inspected rather than repeatedly adding air.',
    },
    {
      situation: 'Rapid pressure loss or audible hissing',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop driving when safe and use a suitable spare or roadside assistance.',
    },
    {
      situation: 'Tire visibly low or flat',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not continue driving normally. Use a suitable spare or roadside assistance.',
    },
    {
      situation: 'Nail in the shoulder or sidewall',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Have the tire inspected for replacement rather than assuming the puncture can be repaired.',
    },
    {
      situation: 'Tire was driven while flat',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Have the tire removed and inspected internally. Do not assume the original puncture is still repairable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Leave the nail in place',
      body: 'Do not pull it out just to see what happens. The object may be slowing air loss through the puncture, and removing it can make the leak worse.',
    },
    {
      title: 'Check the tire pressure',
      body: "Use a pressure gauge and compare the reading with the vehicle manufacturer's recommended cold pressure on the driver's door placard or in the owner's manual. Do not use the maximum pressure molded into the tire sidewall as the vehicle's target pressure.",
      destinationProblemSlug: 'low-tire-pressure',
      destinationLabel: 'See low tire pressure guidance',
    },
    {
      title: 'Have the tire inspected',
      body: 'A proper puncture assessment requires the tire to be removed from the wheel so the inside can be inspected. If the tire is losing pressure rapidly, visibly low or behaving abnormally, use a suitable spare or roadside assistance instead of continuing normally.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    { title: 'The tire is visibly low or flat', severity: 'danger' },
    { title: 'Pressure is dropping rapidly', severity: 'danger' },
    { title: 'You can hear air escaping', severity: 'danger' },
    { title: 'There is a bulge, cut or other sidewall damage', severity: 'danger' },
    { title: 'The vehicle begins vibrating, pulling or feeling unstable', severity: 'danger' },
    { title: 'The tire will not maintain proper pressure', severity: 'warning' },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can a nail in the tread be repaired?',
      answer:
        'Sometimes. Industry guidance allows a repair to be considered when the puncture is confined to the repairable tread area, is no larger than 1/4 inch (6 mm) and the tire has not suffered other damage that rules out repair. The tire still needs to be removed from the wheel and inspected before anyone can determine whether it is safely repairable.',
    },
    {
      question: 'Should I pull the nail out?',
      answer:
        'Not before you know what you are dealing with. The nail may be slowing air loss through the puncture. Leave it in place, check the pressure and have the tire inspected rather than removing it just to see what happens.',
    },
    {
      question: 'Can a nail in the sidewall be repaired?',
      answer:
        'Not under standard passenger-tire puncture repair guidance. A sidewall puncture is outside the normal repairable tread area and generally means the tire needs to be replaced.',
    },
    {
      question: 'What about a nail near the edge of the tread?',
      answer:
        'Location matters. Industry guidance excludes punctures that extend into the shoulder or belt-edge area. A puncture that appears to be on the tread can still be too close to the edge for a standard repair, so have it professionally inspected.',
    },
    {
      question: 'Is an external tire plug enough?',
      answer:
        'Not as a proper permanent repair. Industry guidance calls for the tire to be removed from the wheel and inspected internally, with the puncture channel filled and the inner liner sealed. A plug-only repair from the outside does not satisfy that procedure.',
    },
    {
      question: 'What if the tire is not losing any air?',
      answer:
        'That is better than an active pressure loss, but it does not prove there is no puncture. The nail may not have penetrated completely or may be slowing the leak. Check the pressure and arrange an inspection instead of assuming the tire is fine.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Tire pressure gauge',
      description:
        "Check whether the tire is actually holding the vehicle manufacturer's recommended pressure instead of judging it by appearance.",
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Portable tire inflator',
      description:
        'Useful for restoring pressure in an appropriate non-emergency situation. Adding air does not repair the puncture.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Tire Manufacturers Association',
      title: 'Tire Repair Basics',
      url: 'https://www.ustires.org/tire-care-safety/tire-repair-basics',
      sourceType: 'standards_body',
      notes:
        'Industry guidance on the repairable tread area, the 1/4-inch (6mm) puncture size limit, internal inspection and combined stem-and-patch repair.',
    },
    {
      publisher: 'Michelin USA',
      title: 'Can My Tire Be Repaired?',
      url: 'https://www.michelinman.com/auto/auto-tips-and-advice/tire-maintenance/can-my-tire-be-repaired',
      sourceType: 'manufacturer',
      notes:
        'Manufacturer guidance on qualifying tread punctures, sidewall damage and tires that have been driven while flat.',
    },
    {
      publisher: 'NHTSA',
      title: 'Tire Safety (TireWise)',
      url: 'https://www.nhtsa.gov/vehicle-safety/tires',
      sourceType: 'government',
      notes: 'Government guidance on recommended tire pressure, underinflation and tire inspection.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'low-tire-pressure', anchorText: 'Can I ignore low tire pressure?', relationshipType: 'cause' },
    {
      slug: 'tpms-warning-light',
      anchorText: 'Can I ignore a TPMS warning light?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'cracked-tire-sidewall',
      anchorText: 'Can I ignore tire sidewall damage?',
      relationshipType: 'related',
    },
  ],
};
