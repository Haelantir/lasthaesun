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
    "Don't ignore a nail in your tire, and don't pull it out. Check the tire's pressure first. If the nail is in the tread, the pressure is holding, and the car feels normal, keep driving to a minimum and get it inspected soon. If the tire is losing pressure, the damage is near the sidewall, or the car feels off, stop driving on it.",

  whyItMattersHeading: 'Why Does a Nail in a Tire Matter?',
  whyItMatters: [
    "A nail doesn't always cause a flat right away. It may not have gone all the way through, or it's still plugging the hole and slowing the air loss. The tire can look and feel normal even when it needs attention.",
    "Location decides whether a shop can repair it. A puncture in the tread can usually be fixed. One in the shoulder or sidewall usually can't, because those parts of the tire flex and carry load differently than the tread does.",
    "Even a tread puncture that looks fine from the outside needs to come off the wheel for an internal check. A proper repair fills the puncture channel and seals the inner liner — a plug on the outside alone doesn't count as a permanent fix.",
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
        "A small puncture in the tread is often repairable, but a shop needs to pull the tire off the wheel to check for damage inside before confirming that.",
      recommendedAction:
        "Leave the nail in place, check that the tire is at the vehicle's recommended pressure, and get it inspected soon. Keep driving to a minimum.",
    },
    {
      slug: 'near-shoulder',
      label: 'The nail is near the outer edge or shoulder',
      shortDescription: 'The puncture is close to the edge of the tread.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: "DON'T COUNT ON A REPAIR",
      resultBody:
        "Punctures near the shoulder often can't be repaired. Something that looks like it's still on the tread can still be too close to the edge to fix.",
      recommendedAction: 'Keep driving to a minimum and have the tire professionally inspected.',
    },
    {
      slug: 'sidewall',
      label: 'The nail is in the sidewall',
      shortDescription: 'The object is outside the tread area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: "DON'T KEEP USING THE TIRE NORMALLY",
      resultBody: "Sidewall punctures aren't repairable. This usually means the tire needs to be replaced.",
      recommendedAction:
        'If the tire is losing pressure or shows more damage, switch to the spare or call roadside assistance instead of driving on it.',
    },
    {
      slug: 'slow-pressure-loss',
      label: 'The tire keeps losing pressure',
      shortDescription: 'You add air, but the pressure falls again.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DEAL WITH IT NOW',
      resultBody:
        "If you keep adding air and the pressure keeps dropping, the tire is leaking. That can happen even when the tire doesn't look flat.",
      recommendedAction: 'Check the pressure and get the tire inspected. Repeatedly adding air is not a repair.',
    },
    {
      slug: 'flat-or-hissing',
      label: 'The tire looks low or I can hear air escaping',
      shortDescription: 'Pressure loss appears significant or rapid.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP DRIVING',
      resultBody:
        "Driving on a flat or badly underinflated tire causes more internal damage. A puncture that could have been repaired may not qualify anymore once you've driven on it flat.",
      recommendedAction:
        'Stop driving when it is safe to pull over. Use the spare or call roadside assistance, then have the tire inspected.',
    },
    {
      slug: 'nail-removed',
      label: 'I already pulled the nail out',
      shortDescription: 'The object is no longer plugging the puncture.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CHECK THE PRESSURE NOW',
      resultBody:
        'Pulling the nail out can make the tire leak faster. It may start losing pressure even if it looked fine before.',
      recommendedAction:
        "Check the tire pressure right away. If it's falling, the tire looks low, or the car feels off, stop driving on it and get help.",
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
      title: 'The tire flexes more and builds up heat',
      description: 'An underinflated tire flexes more with every rotation, which speeds up wear and internal damage.',
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
      description: 'Severe pressure loss and built-up damage can eventually cause the tire to fail and affect your control of the vehicle.',
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
      whatToDo: "Don't just keep adding air. Minimize driving and get the puncture inspected.",
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
      whatToDo: "Don't assume it can be repaired. Have the tire inspected for replacement.",
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
      body: "Use a pressure gauge to check the tire. Compare the reading to the vehicle manufacturer's recommended cold pressure, found on the driver's door placard or in the owner's manual — not the maximum pressure molded into the tire's sidewall, which is a different number.",
      destinationProblemSlug: 'low-tire-pressure',
      destinationLabel: 'See low tire pressure guidance',
    },
    {
      title: 'Have the tire inspected',
      body: "A real puncture check means pulling the tire off the wheel to look inside. If it's losing pressure fast, looks low, or the car feels off, use the spare or call roadside assistance instead of driving on it.",
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
        "Sometimes — if the puncture is in the tread, no larger than 1/4 inch (6 mm), and there's no other damage. A shop still needs to pull the tire off the wheel to confirm that before repairing it.",
    },
    {
      question: 'Should I pull the nail out?',
      answer:
        'No. It may be slowing the air loss, and pulling it out can make the leak worse. Leave it in place, check the pressure, and get the tire inspected.',
    },
    {
      question: 'Can a nail in the sidewall be repaired?',
      answer: 'No. Sidewall punctures fall outside the repairable tread area, so the tire usually needs to be replaced.',
    },
    {
      question: 'What about a nail near the edge of the tread?',
      answer:
        "Location matters. Punctures that extend into the shoulder or belt-edge area usually aren't repairable, even if they look close to the tread. Have it professionally inspected.",
    },
    {
      question: 'Is an external tire plug enough?',
      answer:
        'No. A proper repair takes the tire off the wheel, fills the puncture channel, and seals the inner liner. A plug on the outside alone does not do that.',
    },
    {
      question: 'What if the tire is not losing any air?',
      answer:
        "That's a good sign, but it doesn't rule out a puncture. The nail may not have gone all the way through, or it's slowing the leak — check the pressure and get it inspected.",
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Tire pressure gauge',
      description: "Check whether the tire is actually holding the vehicle manufacturer's recommended pressure.",
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
