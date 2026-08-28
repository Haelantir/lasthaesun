import type { ProblemSeed } from '../types';

/**
 * The reference problem record.
 *
 * Every factual claim below traces to one of the four sources at the bottom of
 * this file. Where no authoritative figure exists — most importantly "how far can
 * I drive on it" — the content says so instead of inventing a number. That is a
 * content rule, not a stylistic preference: a fabricated safe distance on an
 * automotive safety page is the one failure mode that actually hurts someone.
 */
export const lowTirePressure: ProblemSeed = {
  systemSlug: 'tires',
  slug: 'low-tire-pressure',
  canonicalPath: '/cars/tires/low-tire-pressure/',
  name: 'Low Tire Pressure',
  eyebrow: 'Cars · Tires',

  // The H1 is the brand question. The <title> is how people actually search.
  // They are different on purpose, and both are stored, not derived.
  h1: 'Can I Ignore Low Tire Pressure?',
  seoTitle: 'Can You Drive With Low Tire Pressure? How Long Is Safe? | Can I Ignore It',
  metaDescription:
    "Low tire pressure isn't always an immediate stop, but it shouldn't be ignored. See when you can keep driving, when to stop, and what happens if you wait.",

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Usually only briefly',

  shortAnswer:
    "You don't necessarily need to stop the car immediately if the tire is only slightly low and still looks normal. But check the pressure and add air as soon as you can.",

  whyItMattersHeading: 'Why Does Low Tire Pressure Matter?',
  whyItMatters: [
    "A tire isn't rigid — it carries the vehicle's weight through the air inside it, at a pressure the manufacturer chose for that job. Below that pressure, the sidewall flexes more on every rotation, and that extra flex builds heat, which can damage the rubber and the structure underneath it.",
    "That flex also changes the contact patch — the small area of tread actually touching the road — so grip and wear drift from what the vehicle was tuned for. A slightly low tire may still feel normal at first, which makes the problem easy to miss.",
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving If You Notice:',

  lastReviewedAt: new Date('2026-08-01T00:00:00Z'),
  reviewScope: 'Safety and automotive guidance, checked against published U.S. federal sources.',
  disclaimer:
    'This page is general information to help you triage a situation. It is not an inspection — we cannot see your tire or your vehicle. If the car feels unsafe, stop somewhere safe and have it looked at by a professional.',

  // Keyword variations redirect here. They are the same problem, so they get the
  // same page — this is the mechanism that keeps the site from breeding
  // near-duplicate URLs as it scales. See docs/content-architecture.md.
  aliases: [
    '/cars/tires/can-i-drive-with-low-tire-pressure/',
    '/cars/tires/how-long-can-i-drive-with-low-tire-pressure/',
  ],

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'light-just-came-on',
      label: 'The light just came on',
      shortDescription: 'Dashboard warning, tire looks normal',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'CHECK IT SOON',
      resultBody:
        "A TPMS warning isn't a “slightly low” signal. Once it's on, at least one tire is already significantly underinflated — federal rules set the threshold at roughly 25% below the vehicle's recommended pressure. The tire can still look normal, so don't just eyeball it.",
      recommendedAction:
        'Drive to somewhere you can add air and check all four tires with a gauge, inflating to the pressure on the driver’s door placard.',
    },
    {
      slug: 'one-tire-slightly-low',
      label: 'One tire looks slightly low',
      shortDescription: 'Still holding its shape, car drives normally',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'TOP IT UP SOON',
      resultBody:
        "If the tire still holds a normal shape and the car drives normally, this is a top-it-up job rather than a stop-now job. Don't settle for the eyeball test — a tire can sit well below the recommended pressure and still look fine. Check it with a gauge.",
      recommendedAction:
        'Add air to the vehicle’s recommended pressure, then re-check in a few days to see whether it is holding.',
    },
    {
      slug: 'visibly-flat',
      label: 'The tire looks visibly flat',
      shortDescription: 'Bulging at the bottom, sitting on the rim',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: "DON'T KEEP DRIVING",
      resultBody:
        'A tire that looks flat is past the point where “add air soon” is the answer. Driving on it generates severe heat in an already-deformed structure, can destroy the tire, damage the wheel, and make the car hard to control.',
      recommendedAction: 'Stop somewhere safe. Use the spare, a sealant kit or roadside assistance — don’t keep driving on it.',
    },
    {
      slug: 'keeps-dropping',
      label: 'Pressure keeps dropping after I add air',
      shortDescription: 'Same tire, again and again',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET THE LEAK FOUND',
      resultBody:
        "A tire that won't hold pressure has a reason — a puncture, a leaking valve stem, a poor seal at the rim, or a damaged wheel. Re-inflating it treats the symptom and resets the clock without fixing any of those. NHTSA recommends having it inspected by a professional.",
      recommendedAction:
        'Have that tire inspected at a tire shop. Note which wheel it is and roughly how quickly it drops.',
    },
    {
      slug: 'thumping-or-vibration',
      label: 'I hear thumping / feel vibration',
      shortDescription: 'New noise or shaking through the car',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP WHEN IT IS SAFE',
      resultBody:
        'New thumping or vibration can mean the tire is already damaged or coming apart internally. NHTSA lists vibration and unusual noise among the signs a tire needs professional inspection.',
      recommendedAction:
        'Ease off the speed, avoid hard braking or steering, pull over where it is safe and look at all four tires.',
    },
    {
      slug: 'nail-cut-or-bulge',
      label: 'There is a nail, cut or bulge',
      shortDescription: 'Visible damage to the tread or sidewall',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'DO NOT IGNORE THIS ONE',
      resultBody:
        "A bulge means the internal structure of the tire has already failed and the air is pushing against what's left. NHTSA advises having tires with cuts, cracks or bulges inspected by a professional. A nail may be repairable, but a tire shop needs to determine that — it depends on where it sits and how deep it goes.",
      recommendedAction:
        'Do not keep driving normally on a bulge or a deep cut. Have the tire inspected before you continue.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  // Steps sharing a stage label are grouped into one stage by the timeline, which
  // is how "KEEP IGNORING IT" holds two separate outcomes.
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Handling and braking start to change',
      description:
        'Underinflation changes how the tire supports the car, so steering and grip shift away from how the vehicle was tuned.',
      severity: 'caution',
      chainLabel: 'Low pressure',
    },
    {
      stageLabel: 'KEEP DRIVING',
      title: 'The tire flexes more than it was designed to',
      description: 'Every rotation bends the sidewall further than the design intends.',
      severity: 'caution',
      chainLabel: 'More flex',
    },
    {
      stageLabel: 'KEEP DRIVING',
      title: 'That flexing builds heat',
      description: 'That extra flex creates heat, which can damage the rubber and internal structure.',
      severity: 'warning',
      chainLabel: 'Heat / wear',
    },
    {
      stageLabel: 'KEEP IGNORING IT',
      title: 'Tread wears faster and unevenly',
      description: 'A deformed contact patch wears at the shoulders, shortening the life of the tire.',
      severity: 'warning',
      chainLabel: 'Handling degradation',
    },
    {
      stageLabel: 'KEEP IGNORING IT',
      title: 'Fuel economy falls',
      description:
        'FuelEconomy.gov puts the loss at roughly 0.2% for every 1 psi below the recommended average pressure.',
      severity: 'warning',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Tire failure',
      description:
        'NHTSA identifies underinflation and overloading as leading causes of tire failure. A tire can fail suddenly, especially at speed.',
      severity: 'danger',
      chainLabel: 'Possible tire failure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  // Deliberately consolidates "can I drive with low tire pressure", "how long
  // can I drive with it", "is it safe" and "can I drive with the light on" onto
  // one canonical page instead of four near-duplicate ones.
  windows: [
    {
      situation: 'Slightly below recommended pressure',
      ignoreAnswer: 'Briefly',
      severity: 'warning',
      whatToDo: 'Add air soon',
    },
    {
      situation: 'TPMS warning light on',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Check pressure as soon as practical',
    },
    {
      situation: 'Keeps losing pressure',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Have it checked for a leak',
    },
    {
      situation: 'Visibly flat',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: "Don't continue driving on it normally",
    },
    {
      situation: 'Bulge, cut or major damage',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop and have the tire inspected',
    },
    {
      situation: 'Vibration, thumping or pulling',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop when it is safe to do so',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check the pressure',
      body: 'Find the recommended cold inflation pressure on the tire information placard — usually in the driver’s door jamb, sometimes the glovebox or fuel door — or in the owner’s manual. Don’t use the number moulded into the tire sidewall; that’s the tire’s maximum, not the vehicle’s recommended pressure. Check it with a gauge when the tires are cold.',
    },
    {
      title: 'Add air if needed',
      body: 'Inflate to the vehicle manufacturer’s figure and check all four while you are there. Tires read a little high once they’ve been driven on, so expect that if you just drove to the pump.',
      // Populated once the walkthrough exists as its own published problem. Until
      // then no link is rendered rather than a link to nothing.
      destinationLabel: 'How to inflate a car tire',
    },
    {
      title: 'See if it happens again',
      body: 'Re-check the tire in a few days. If the same tire loses pressure again that quickly, have it checked for a leak.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    { title: 'The tire looks nearly flat' },
    { title: 'A bulge, or major sidewall damage' },
    { title: 'Pressure dropping rapidly' },
    { title: 'Heavy vibration or thumping' },
    { title: 'The car suddenly pulls, or feels unstable' },
  ],

  /* --------------------------------------------------------------- Block 10 */
  // Sub-intents of the same problem. They belong on this page — none of them
  // justifies a URL of its own.
  faqs: [
    {
      question: 'Does cold weather cause the tire pressure light to come on?',
      answer:
        'Yes. Air contracts as it cools, so pressure drops with temperature and can push a borderline tire below the warning threshold. Check pressure cold and inflate to the vehicle’s figure — if the light keeps returning once it warms up, have it checked for a leak.',
    },
    {
      question: 'Why does the same tire keep losing air?',
      answer:
        'A puncture, leaking valve stem, rim leak or damaged wheel may be letting air out. If the same tire keeps losing pressure, have it inspected instead of repeatedly topping it up.',
    },
    {
      question: 'Should I use the PSI printed on the tire?',
      answer:
        'No. Use the recommended pressure on the vehicle placard or in the owner’s manual, not the maximum pressure moulded into the tire sidewall.',
    },
    {
      question: 'Will the TPMS light go away after adding air?',
      answer:
        'Usually, once pressure is back above the threshold — sometimes right away, sometimes after driving a short distance so the system can re-read. Some vehicles need a manual reset described in the owner’s manual. If it stays on after correct inflation, have the sensor checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  // Monetisation-ready, monetisation-free. `url: null` renders an informational
  // card with no outbound link; dropping an affiliate URL in later changes the
  // page without touching a single layout component.
  resources: [
    {
      title: 'Digital tire pressure gauge',
      description:
        'A pencil or dial gauge works, but a digital one is easier to read and holds the reading. Measure cold — before driving, or at least a few hours after — because tires read high once they have warmed up.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Portable tire inflator',
      description:
        'A 12V compressor that runs from the car’s power socket, so a low tire does not depend on finding a working air pump. A built-in gauge and auto-stop are more useful than maximum inflation speed.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  // Every URL below was verified before being written down. The manufacturer
  // entry has no URL because it is vehicle-specific — so it gets no link rather
  // than a plausible-looking guess.
  sources: [
    {
      publisher: 'NHTSA',
      title: 'Tire Safety (TireWise)',
      url: 'https://www.nhtsa.gov/vehicle-safety/tires',
      sourceType: 'government',
      notes:
        'Underinflation and overloading as leading causes of tire failure; inflate to the vehicle placard pressure; check monthly; when to have a tire inspected.',
    },
    {
      publisher: 'U.S. Code of Federal Regulations',
      title: '49 CFR 571.138 — FMVSS No. 138, Tire pressure monitoring systems',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.138',
      sourceType: 'regulation',
      notes:
        'Source of the warning-light threshold: the greater of 25% below the vehicle’s recommended cold pressure or the regulation’s minimum activation pressure table.',
    },
    {
      publisher: 'U.S. Department of Energy & U.S. EPA',
      title: 'FuelEconomy.gov — Gas Mileage Tips: Keeping Your Vehicle in Shape',
      url: 'https://www.fueleconomy.gov/feg/maintain.jsp',
      sourceType: 'government',
      notes: 'Fuel-economy effect of proper inflation, and where to find the recommended pressure.',
    },
    {
      publisher: 'Your vehicle manufacturer',
      title: 'Tire information placard and owner’s manual',
      url: null,
      sourceType: 'manufacturer',
      notes:
        'The recommended cold inflation pressure is specific to your vehicle. No general figure substitutes for it, so no link is given here.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  // Every target below is a real row in the database. All are currently drafts,
  // so they render as plain text; each becomes a link automatically on the day
  // its status flips to 'published'. No dead links, no thin placeholder pages.
  related: [
    { slug: 'nail-in-tire', anchorText: 'Can I ignore a nail in my tire?', relationshipType: 'sibling' },
    { slug: 'tpms-warning-light', anchorText: 'Can I ignore a TPMS warning light?', relationshipType: 'cause' },
    {
      slug: 'cracked-tire-sidewall',
      anchorText: 'Can I ignore a cracked tire sidewall?',
      relationshipType: 'sibling',
    },
    { slug: 'tire-rotation', anchorText: 'Can I skip tire rotation?', relationshipType: 'sibling' },
    { slug: 'uneven-tire-wear', anchorText: 'Can I ignore uneven tire wear?', relationshipType: 'escalation' },
    { slug: 'wheel-vibration', anchorText: 'Can I ignore wheel vibration?', relationshipType: 'sibling' },
  ],
};
