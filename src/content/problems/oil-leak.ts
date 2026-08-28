import type { ProblemSeed } from '../types';

/**
 * Cars > Fluids > Oil Leak.
 *
 * Every factual claim below traces to one of the three sources at the
 * bottom of this file. The core distinction is: a small leak with a normal
 * oil level and no warning lights usually does not require an immediate
 * stop, while a fast leak, a falling oil level, an oil-pressure warning or
 * smoke/burning smell does. No driving distance or duration is invented for
 * how long a leak can be tolerated — no source publishes one.
 */
export const oilLeak: ProblemSeed = {
  systemSlug: 'fluids',
  slug: 'oil-leak',
  canonicalPath: '/cars/fluids/oil-leak/',
  name: 'Oil Leak',
  eyebrow: 'Cars · Fluids',

  h1: 'Can I Ignore an Oil Leak?',
  seoTitle: 'Oil Leak Under Your Car? When It Can Wait and When to Stop',
  metaDescription:
    'A small oil spot may not mean stop immediately, but a growing leak, falling oil level, smoke or an oil-pressure warning needs faster action.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Usually briefly, if the oil level is normal and there are no warnings',

  shortAnswer:
    'Probably not. A small oil spot does not always mean you need to stop immediately, but check the oil level and watch how fast it is leaking. If the oil-pressure warning comes on, the leak is heavy, or you see smoke from oil hitting hot parts, stop driving.',

  whyItMattersHeading: 'Why Does an Oil Leak Matter?',
  whyItMatters: [
    'Engine oil has to stay inside the engine and lubrication system. A leak can slowly lower the oil level, and a larger leak can do it much faster. Low oil can eventually leave parts without enough lubrication and cause serious engine damage.',
    'Oil can leak from several places, including seals, gaskets, the oil pan, drain plug and filter area. A wet engine is not enough to tell you how serious the leak is. Check the oil level and look at how much fluid is actually reaching the ground.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving If You Notice:',

  lastReviewedAt: new Date('2026-08-28T00:00:00Z'),
  reviewScope:
    'External engine-oil leaks, oil-level loss, oil-pressure warnings, post-service leaks and signs that require immediate action.',
  disclaimer:
    "General automotive triage guidance only. Fluid under a vehicle is not always engine oil, and the source of a leak cannot be confirmed from appearance alone. Follow the owner's manual for checking oil level and responding to oil-pressure warnings.",

  aliases: ['/cars/fluids/engine-oil-leak/', '/cars/engine/oil-leak/', '/cars/oil-leak/'],

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'few-drops-level-normal',
      label: 'I see a few drops, but the oil level is normal',
      shortDescription: 'Small spots appear under the car and there are no warning lights or other symptoms.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'CHECK IT, BUT YOU CAN USUALLY DRIVE',
      resultBody:
        'A small leak with a normal oil level usually does not require an immediate stop. It still needs attention because small leaks can grow or slowly lower the oil level.',
      recommendedAction: 'Check the oil level regularly and arrange an inspection.',
    },
    {
      slug: 'new-puddle',
      label: 'There is a fresh puddle under the car',
      shortDescription: 'More than a few drops are collecting where the car was parked.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'FIND OUT HOW FAST IT IS LEAKING',
      resultBody:
        'A puddle can mean the engine is losing oil faster than a small seep. The oil level may fall enough to make continued driving risky.',
      recommendedAction: 'Check the oil level before driving. If the level is very low or the leak continues quickly, do not keep driving.',
    },
    {
      slug: 'oil-level-keeps-dropping',
      label: 'The oil level keeps dropping',
      shortDescription: 'You add oil, then the dipstick shows it falling again.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'THE LEAK IS COSTING YOU OIL',
      resultBody:
        'Repeated oil loss means the engine is not keeping the oil it needs. Topping it up buys time but does not fix the leak.',
      recommendedAction: 'Keep the oil at the correct level and have the leak repaired soon.',
    },
    {
      slug: 'oil-pressure-warning',
      label: 'The oil-pressure warning light is on',
      shortDescription: 'A red oil-can warning or low-oil-pressure message appears while the engine is running.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP THE ENGINE',
      resultBody:
        'Low oil pressure can cause serious engine damage very quickly. The warning can have causes other than a leak, so do not assume adding oil will solve it.',
      recommendedAction:
        'Stop in a safe place, shut the engine off and follow the owner’s manual. Check the oil level only when it is safe to do so.',
    },
    {
      slug: 'burning-smell-or-smoke',
      label: 'I smell burning oil or see smoke',
      shortDescription: 'Oil may be reaching a hot engine or exhaust surface.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DO NOT KEEP DRIVING IT NORMALLY',
      resultBody:
        'Oil on hot components can smoke and, in some situations, create a fire risk. A growing leak can also lower the engine oil level.',
      recommendedAction: 'Stop safely and have the source checked before normal driving continues.',
    },
    {
      slug: 'leak-after-oil-change',
      label: 'The leak started right after an oil change',
      shortDescription: 'Fresh oil appears under the car soon after service.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'HAVE THE SERVICE CHECKED',
      resultBody: 'A loose drain plug, filter problem or spilled oil can show up after service. A continuing leak needs to be corrected.',
      recommendedAction:
        'Check the oil level and contact the shop that performed the oil change. Do not drive if oil is pouring out or the oil-pressure warning appears.',
    },
    {
      slug: 'only-wet-or-greasy',
      label: 'The engine looks oily, but nothing drips on the ground',
      shortDescription: 'There is oily residue around the engine with no fresh puddle.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'THIS MAY BE A SLOW SEEP',
      resultBody:
        'Old residue or a slow seep can leave the engine greasy without losing much oil. Clean, fresh oil appearing again will make the source easier to identify.',
      recommendedAction: 'Check the oil level and have the area inspected if the wetness returns or gets worse.',
    },
    {
      slug: 'not-sure-what-fluid',
      label: 'I found a fluid spot but I am not sure it is engine oil',
      shortDescription: 'The color or location does not make the fluid easy to identify.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'IDENTIFY THE FLUID FIRST',
      resultBody: 'Cars use several fluids, and a spot on the ground does not prove that engine oil is leaking.',
      recommendedAction: 'Check the engine oil level and have the leak identified if the fluid keeps appearing.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Oil begins escaping',
      description: 'A seal, gasket, filter, drain plug or another part of the lubrication system is allowing oil out.',
      severity: 'caution',
      chainLabel: 'Oil leak',
    },
    {
      stageLabel: 'IF IT KEEPS LEAKING',
      title: 'The oil level falls',
      description: 'A slow leak may take time to show on the dipstick. A larger leak can lower the level much faster.',
      severity: 'caution',
      chainLabel: 'Oil loss',
    },
    {
      stageLabel: 'KEEP LOSING OIL',
      title: 'Lubrication can suffer',
      description: 'If the oil level becomes too low, the engine may no longer have enough oil available for normal lubrication.',
      severity: 'warning',
      chainLabel: 'Low oil',
    },
    {
      stageLabel: 'IF OIL PRESSURE DROPS',
      title: 'Engine damage can happen quickly',
      description: 'Low oil pressure means critical engine parts may not be getting the lubrication they need.',
      severity: 'danger',
      chainLabel: 'Low oil pressure',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Engine damage, stalling or fire can occur',
      description: 'Severe oil loss can damage the engine or cause it to stall. Oil reaching very hot components can also create a fire risk in some failures.',
      severity: 'danger',
      chainLabel: 'Major damage',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A few drops under the car and the oil level remains normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Keep checking the oil level and arrange an inspection before the leak gets worse.',
    },
    {
      situation: 'Oily residue but no fresh drips',
      ignoreAnswer: 'Usually for now',
      severity: 'info',
      whatToDo: 'Check the oil level and watch for fresh oil, new spots or a growing leak.',
    },
    {
      situation: 'A fresh puddle appears',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Check the oil level before driving and have the leak inspected.',
    },
    {
      situation: 'The oil level keeps falling between checks',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Keep the oil at the correct level and arrange repair soon.',
    },
    {
      situation: 'Oil is dripping quickly or pouring out',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Shut the engine off and arrange roadside assistance or repair.',
    },
    {
      situation: 'Oil-pressure warning comes on',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: "Stop safely, shut the engine off and follow the owner's manual immediately.",
    },
    {
      situation: 'Burning-oil smell or smoke appears',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop safely and have the leak checked before continuing normal driving.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Check the engine oil level',
      body: "Park on level ground and follow the owner's manual for the correct checking procedure. If the level is below the safe range, do not keep driving without correcting the problem.",
    },
    {
      title: 'Step 2: Look at how much is leaking',
      body: 'A damp engine, a few drops and a growing puddle are not the same thing. Fresh fluid on the ground helps show whether the leak is getting worse.',
    },
    {
      title: 'Step 3: Check for an oil-pressure warning',
      body: 'If the low-oil-pressure warning is on while the engine is running, stop safely and shut the engine off. Do not keep driving to see if it clears.',
    },
    {
      title: 'Step 4: Have the source found',
      body: 'Oil can travel along the engine and drip far from where the leak started. A proper inspection is usually needed to identify the source.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The oil-pressure warning light comes on',
      description: 'Low oil pressure can cause serious engine damage very quickly.',
      severity: 'danger',
    },
    {
      title: 'Oil is dripping quickly or forming a large fresh puddle',
      description: 'The engine may be losing oil fast enough to make continued driving unsafe.',
      severity: 'danger',
    },
    {
      title: 'The dipstick shows very little or no oil',
      description: 'Do not run the engine normally with an unsafe oil level.',
      severity: 'danger',
    },
    {
      title: 'You smell burning oil or see smoke from the engine bay',
      description: 'Oil may be reaching a hot surface.',
      severity: 'danger',
    },
    {
      title: 'The engine starts knocking, ticking loudly or losing power',
      description: 'Stop driving and have the vehicle checked.',
      severity: 'danger',
    },
    {
      title: 'The engine stalls while oil is leaking',
      description: 'Do not continue driving until the cause is understood.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I drive with an oil leak?',
      answer:
        'Sometimes for a short time if the leak is small, the oil level is normal and there are no warning lights or other symptoms. Check the level often and have the leak inspected.',
    },
    {
      question: 'Is a small oil leak serious?',
      answer: 'Not always immediately, but it should not be forgotten. A small leak can grow or slowly lower the oil level.',
    },
    {
      question: 'How do I know if the leak is engine oil?',
      answer: 'Location and appearance can give clues, but several vehicle fluids can leave spots. Check the engine oil level and have the fluid identified if you are unsure.',
    },
    {
      question: 'Why is my car leaking oil after an oil change?',
      answer:
        'The drain plug, oil filter or another serviced area may be leaking, or spilled oil may still be dripping off. If fresh oil keeps appearing, have the service checked.',
    },
    {
      question: 'Can I just keep adding oil instead of fixing the leak?',
      answer: 'Adding oil can keep the level from getting too low for a while, but it does not repair the leak. A leak that keeps using oil needs inspection.',
    },
    {
      question: 'Does an oil leak always leave a puddle?',
      answer: 'No. A slow seep may only leave oily residue, and some oil can collect on engine covers or other parts before reaching the ground.',
    },
    {
      question: 'What does the red oil-can warning light mean?',
      answer:
        "It usually warns about low engine oil pressure, not just the oil level. Stop safely and follow the owner's manual if it stays on while the engine is running.",
    },
    {
      question: 'Can an oil leak cause engine damage?',
      answer: 'Yes. If enough oil is lost, lubrication and oil pressure can suffer and the engine can be damaged.',
    },
    {
      question: 'Can leaking oil cause a fire?',
      answer: 'It can in some situations if oil reaches very hot engine or exhaust components. Smoke or a strong burning-oil smell needs prompt attention.',
    },
    {
      question: 'Is it normal for an old car to leak a little oil?',
      answer:
        'Oil leaks may become more common as seals and gaskets age, but age does not make a leak harmless. Keep the oil level correct and watch whether the leak is getting worse.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Engine oil dipstick or electronic oil-level display',
      description: "Use the vehicle's specified method to check whether the engine is actually losing oil.",
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual",
      description: 'Gives the correct oil-level checking procedure, oil specification and instructions for an oil-pressure warning.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional leak inspection',
      description: 'Useful when the leak source is unclear, the oil level keeps falling or fresh oil continues to reach the ground.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Summer Driving & Road Trip Tips',
      url: 'https://www.nhtsa.gov/summer-driving-tips',
      sourceType: 'government',
      notes: 'NHTSA advises checking engine-oil level and having signs of fluid leakage serviced.',
    },
    {
      publisher: 'Toyota Motor North America',
      title: '2023 Corolla Cross — If a Warning Light Turns On or a Warning Buzzer Sounds',
      url: 'https://www.toyota.com/owners/warranty-owners-manuals/digital/article/corolla-cross/2023/om0a039u/ch07se020404/',
      sourceType: 'manufacturer',
      notes: 'Toyota owner guidance states that an excessively low engine-oil-pressure warning requires stopping the vehicle immediately in a safe place.',
    },
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Kia Safety Recall Campaign SC174 — Oil Pan Inspection and Replacement',
      url: 'https://static.nhtsa.gov/odi/rcl/2019/RCRIT-19V101-5200.pdf',
      sourceType: 'government',
      notes:
        'Model-specific recall evidence that an unrepaired engine-oil leak can cause oil loss, engine damage, stalling and in some cases fire. Used as an example of what a severe oil leak can cause, not as a universal diagnosis.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'check-engine-light', anchorText: 'Can I ignore a check engine light?', relationshipType: 'related' },
    { slug: 'low-engine-oil', anchorText: 'Can I ignore low engine oil?', relationshipType: 'escalation' },
    { slug: 'oil-pressure-warning-light', anchorText: 'Can I ignore an oil-pressure warning light?', relationshipType: 'escalation' },
    { slug: 'burning-smell-from-engine', anchorText: 'Can I ignore a burning smell from the engine?', relationshipType: 'related' },
  ],
};
