import type { ProblemSeed } from '../types';

export const motorcycleOilLeak: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'motorcycle-fluids',
  slug: 'motorcycle-oil-leak',
  canonicalPath: '/motorcycles/fluids/motorcycle-oil-leak/',
  name: 'Motorcycle Oil Leak',
  eyebrow: 'Mobility · Motorcycles · Fluids',

  h1: 'Can I Ignore an Oil Leak on My Motorcycle?',
  seoTitle: 'Motorcycle Oil Leak: When to Stop Riding and What to Check',
  metaDescription:
    'A faint film may be residue, but fresh drips, oil on the rear tire or brakes, smoke, or an oil-pressure warning mean stop riding and arrange repair.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I ride it?',
  canIUseItLabel: 'Only after confirming no fresh oil can reach a tire, brake, or exhaust',

  shortAnswer:
    'Probably not. Do not ride until you know the oil is only old residue or a slight weep that stays away from the tires, brakes, and exhaust, with the oil level correct and no warning indicator. Fresh drips, oil near the rear wheel, smoke, or an oil-pressure warning mean shut the engine off and arrange repair or transport.',

  whyItMattersHeading: 'Why a Motorcycle Oil Leak Can Become a Riding Hazard',
  whyItMatters: [
    'Escaping oil is not only an engine-lubrication problem. On a motorcycle, it may reach the rear tire or brake and reduce traction or braking. Oil that lands on a hot exhaust can produce smoke and, in some failures, create a fire risk.',
    'Even when the oil stays away from safety-critical parts, continued loss can lower the engine-oil level and eventually affect oil pressure. A dry stain may be leftover residue, but fresh wetness needs to be traced before the motorcycle is treated as roadworthy.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Shut It Down If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed against NHTSA guidance, motorcycle manuals, manufacturer leak procedures, tire guidance, and recall evidence on tire, brake, exhaust, and oil-pressure hazards.',
  disclaimer:
    "General motorcycle triage only. Oil-level procedures and warning indicators vary by model; follow the owner's manual and do not ride a motorcycle that appears unsafe.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'dry-residue-no-return',
      label: 'A dry stain does not return after cleaning',
      shortDescription:
        'The area remains dry after the cooled motorcycle is cleaned, operated normally, and parked again.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be old residue rather than an active leak',
      resultBody:
        'Oil left from assembly, an earlier repair, or a spill can collect in crevices and appear later. If no fresh wetness returns and the oil level remains correct, there is no confirmed active leak.',
      recommendedAction:
        'Photograph the clean area and include it in future pre-ride checks. Reassess if fresh oil, a floor spot, or a falling oil level appears.',
    },
    {
      slug: 'slight-seep-contained',
      label: 'There is a thin fresh film but no forming drop',
      shortDescription:
        'A joint or seal looks damp, but oil is not running or dripping and remains far from the tire, brakes, and exhaust.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'A contained weep can wait briefly for inspection',
      resultBody:
        'A faint film is less urgent than a drip, but fresh oil confirms that fluid is escaping. Its path and the oil level still need monitoring.',
      recommendedAction:
        'Arrange an inspection before treating it as normal. Limited riding may be reasonable only while the oil level stays correct and every tire, brake, and exhaust surface remains dry.',
    },
    {
      slug: 'overnight-drip',
      label: 'Fresh drops appear under the motorcycle after parking',
      shortDescription: 'The leak forms drops rather than leaving only a damp film.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not ride until the leak path is checked',
      resultBody:
        'A forming drop is an active leak. The amount seen on the floor does not show how the oil will move when the engine is running or the motorcycle is leaning and moving.',
      recommendedAction:
        'Check the oil level and inspect the rear tire, wheel, brake, and exhaust while the motorcycle is cool. Arrange repair or transport if the source and path are not clearly safe.',
    },
    {
      slug: 'oil-on-swingarm-or-wheel',
      label: 'Oil is visible on the swingarm, rear wheel, or tire',
      shortDescription: 'Wet oil has traveled toward the rear of the motorcycle or reached the tire.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not ride on an oil-contaminated rear end',
      resultBody:
        'Oil on the tire can reduce grip, and oil on the swingarm or wheel shows that the leak is already moving toward a safety-critical area.',
      recommendedAction:
        'Keep the engine off. Inspect the full tire circumference, arrange leak repair, and have an oil-soaked or chemically altered tire assessed before returning the motorcycle to service.',
    },
    {
      slug: 'brake-contamination',
      label: 'Oil has reached a brake disc, caliper, or pad',
      shortDescription: 'A braking surface or friction component is wet or visibly contaminated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The motorcycle is not safe to ride',
      resultBody:
        'Oil and other slippery substances can make motorcycle brakes ineffective. Wiping the visible face of the disc does not confirm that the pads and hidden surfaces are clean.',
      recommendedAction:
        "Do not test the brakes by riding. Have the leak repaired and the affected brake components inspected, cleaned, or replaced as the motorcycle's service information requires.",
    },
    {
      slug: 'oil-on-hot-exhaust',
      label: 'Oil is near the exhaust, with burning odor or smoke',
      shortDescription:
        'Oil is dripping or cooking on a header, pipe, catalytic converter, or other hot surface.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Shut it down and keep it away from ignition sources',
      resultBody:
        'Oil on a hot exhaust can smoke and may ignite in some failures. The leak may also worsen while the engine is running.',
      recommendedAction:
        'Stop the engine in a safe outdoor location. Move away if flames appear, do not touch hot components, and arrange transport and repair before restarting it.',
    },
    {
      slug: 'oil-pressure-warning',
      label: 'The oil-pressure warning stays on while the engine runs',
      shortDescription:
        'The oil-can indicator or a low-oil-pressure message remains illuminated after startup or appears while riding.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop the engine as soon as it is safe',
      resultBody:
        'The warning concerns lubrication pressure, not merely the quantity shown in a sight glass or on a dipstick. Continuing to run the engine can cause serious damage.',
      recommendedAction:
        "Pull over safely, shut the engine off, and follow the owner's manual. Do not assume adding oil fixes the warning, and do not restart if an active leak remains.",
    },
    {
      slug: 'oil-level-falling',
      label: 'The oil level is below the safe range or keeps falling',
      shortDescription: 'The dipstick or sight glass shows loss between correctly performed checks.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Topping it up does not make the leak safe',
      resultBody:
        'Repeated loss confirms that the lubrication system is not retaining its oil. A correct level at one check also does not protect the tire, brakes, or exhaust from the leak.',
      recommendedAction:
        "Add only the oil and amount permitted by the owner's manual, then arrange repair. Do not ride if the level cannot be corrected, falls again, or any warning appears.",
    },
    {
      slug: 'post-service-fresh-oil',
      label: 'Fresh oil appeared after an oil or filter service',
      shortDescription:
        'Oil continues to emerge around the filter, drain plug, oil line, or another recently serviced area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Have the service checked before riding',
      resultBody:
        'The wetness may be spilled residue, but continuing fresh oil can indicate a filter, seal, drain plug, line, or installation problem.',
      recommendedAction:
        'Keep the motorcycle parked, verify the level using the model-specific procedure, and contact the shop or person who performed the work. Do not tighten parts by guesswork.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Fresh oil marks an escape path',
      description:
        'A seal, gasket, housing, filter, drain plug, oil line, or another lubricated part is allowing oil out, unless the wetness is confirmed residue from earlier work.',
      severity: 'info',
      chainLabel: 'Fresh oil → identify the source',
    },
    {
      stageLabel: 'IF THE LEAK CONTINUES',
      title: 'The engine-oil level can fall',
      description:
        'Oil that leaves the system is no longer available for lubrication. The amount on the floor may not reveal the total loss or where the oil traveled.',
      severity: 'caution',
      chainLabel: 'Active leak → oil loss',
    },
    {
      stageLabel: 'IF OIL REACHES THE REAR OF THE BIKE',
      title: 'Traction or braking can be compromised',
      description:
        'Oil on a motorcycle tire can reduce grip. Contamination on a brake disc or pad can interfere with braking.',
      severity: 'danger',
      chainLabel: 'Contamination → reduced control',
    },
    {
      stageLabel: 'IF OIL REACHES HOT EXHAUST PARTS',
      title: 'Smoke or fire can result',
      description:
        'Model-specific motorcycle recalls document failures in which leaked engine oil reached an exhaust pipe, creating smoke and increasing fire risk.',
      severity: 'danger',
      chainLabel: 'Hot exhaust + oil → smoke or fire',
    },
    {
      stageLabel: 'IF OIL PRESSURE DROPS',
      title: 'Serious engine damage can occur',
      description:
        'Critical internal parts may no longer receive adequate lubrication. The engine may become noisy, lose power, seize, or stop running.',
      severity: 'danger',
      chainLabel: 'Low pressure → engine damage',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A dry stain was cleaned away and no fresh oil returned',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Continue normal pre-ride inspections and watch the cleaned area and oil level for any change.',
    },
    {
      situation: 'A faint fresh film remains contained and does not form a drop',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Schedule inspection and verify before each ride that the oil level is correct and the tires, brakes, and exhaust remain completely dry.',
    },
    {
      situation: 'A drop forms or the floor is marked after parking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check the oil level and leak path while the motorcycle is cool. Arrange repair or transport rather than assuming the drip will stay small.',
    },
    {
      situation: 'Oil is on the swingarm, rear wheel, or tire',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep the motorcycle parked until the leak is repaired and the tire and surrounding components have been assessed.',
    },
    {
      situation: 'Oil has reached a brake or hot exhaust component',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Shut the engine off. Do not ride or repeatedly restart the motorcycle to test the leak.',
    },
    {
      situation: 'The oil-pressure warning is on or the oil level is unsafe',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        "Stop the engine and follow the owner's manual. Arrange transport if the warning remains, the level falls again, or a leak is present.",
    },
    {
      situation: 'You cannot identify the fluid or where it is going',
      ignoreAnswer: 'Only while parked',
      severity: 'caution',
      whatToDo:
        'Treat it as unsafe until the fluid, source, oil level, and possible tire, brake, or exhaust contamination are checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Shut the engine off and let the motorcycle cool',
      body:
        'Park in a safe, well-ventilated place. Do not touch the engine or exhaust while hot, and do not run the motorcycle in an enclosed garage to watch for a leak.',
    },
    {
      title: 'Inspect the rear tire, wheel, brakes, and exhaust',
      body:
        'With the engine off and the motorcycle stable, examine the full rear-tire circumference and both sides of the wheel and brake disc. Look for a wet trail along the engine, frame, swingarm, or exhaust.',
    },
    {
      title: 'Check the engine-oil level exactly as the manual specifies',
      body:
        'Oil checks vary by motorcycle: some require the bike upright, others use the side stand, and hot and cold procedures may differ. Do not guess or overfill.',
      destinationProblemSlug: 'low-engine-oil',
    },
    {
      title: 'Treat an oil-pressure warning as a stop-engine warning',
      body:
        'If the indicator remains on while the engine runs or appears while riding, shut down as soon as it is safe. Adding oil is not proof that pressure has returned or that the leak is safe.',
      destinationProblemSlug: 'oil-pressure-warning-light',
    },
    {
      title: 'Confirm the source and arrange the correct repair',
      body:
        'Place clean cardboard beneath the parked motorcycle, clean only accessible cooled surfaces, and photograph where fresh oil first appears. Use transport if oil is dripping, migrating rearward, reaching hot parts, or lowering the level.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Oil is on the rear tire or wheel',
      description:
        'Loss of rear-tire grip can cause instability or a crash. Do not try to ride carefully on an oily tire.',
      severity: 'danger',
    },
    {
      title: 'A brake disc, caliper, or pad is contaminated',
      description:
        'Oil or grease on braking surfaces can reduce braking effectiveness and may require more than surface cleaning.',
      severity: 'danger',
    },
    {
      title: 'Smoke, flames, or a strong burning-oil odor appears',
      description:
        'Oil may be contacting the exhaust or another hot component. Stop the engine and move away if fire develops.',
      severity: 'danger',
    },
    {
      title: 'The oil-pressure indicator remains on',
      description:
        'Stop the engine as soon as it is safe. The warning can indicate inadequate lubrication pressure even when oil is visible.',
      severity: 'danger',
    },
    {
      title: 'Oil sprays, runs, or forms fresh drops',
      description:
        'An active leak may lose oil or spread it across nearby components while the engine is running.',
      severity: 'warning',
    },
    {
      title: 'The oil level is below the safe range or keeps falling',
      description:
        'Do not continue normal operation when the lubrication system cannot retain the required oil level.',
      severity: 'danger',
    },
    {
      title: 'The engine becomes noisy, loses power, or stalls',
      description:
        'These symptoms with an oil leak can indicate that lubrication or engine operation has already been affected.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a light oily film the same as an active motorcycle oil leak?',
      answer:
        'Not necessarily. It may be old residue or a very slight seep. Clean the cooled area and check whether fresh oil returns, runs, or forms a drop.',
    },
    {
      question: 'Can I ride to a repair shop with a small oil leak?',
      answer:
        'Only when it is clearly a slight contained weep, the oil level is correct, no warning is present, and the tires, brakes, and exhaust are dry. Use transport when the source or path is uncertain.',
    },
    {
      question: 'Why is an oil leak especially concerning on a motorcycle?',
      answer:
        'The rear tire, brake, and hot exhaust are close to exposed engine components. Oil has fewer barriers keeping it away from parts that directly affect grip and braking.',
    },
    {
      question: 'How can I tell whether the fluid is engine oil?',
      answer:
        "Color alone is unreliable. Trace the highest fresh wet point, check the engine-oil level correctly, and compare the location with the owner's manual. Have it identified if uncertain.",
    },
    {
      question: 'Can I keep topping up the oil instead of fixing the leak?',
      answer:
        'No. Topping up may restore the level temporarily, but it does not prevent oil from reaching the tire, brake, or exhaust and does not correct the failed part.',
    },
    {
      question: 'Does the oil-can warning mean the engine is simply low on oil?',
      answer:
        "Usually it is an oil-pressure warning, not a direct level gauge. Stop the engine and follow the owner's manual rather than assuming a top-up will clear the problem.",
    },
    {
      question: 'Can I clean oil off a motorcycle tire and keep using it?',
      answer:
        "Do not ride while the tire is oily. Follow the tire manufacturer's cleaning guidance for minor surface contact. A tire that was soaked or shows softening, swelling, or discoloration should be removed from service and assessed.",
    },
    {
      question: 'What should I do if oil reached the brake disc or pads?',
      answer:
        'Do not ride. The rotor, pads, and caliper area need inspection, and contaminated friction material may require replacement rather than a quick wipe.',
    },
    {
      question: 'Why did the motorcycle start leaking after an oil change?',
      answer:
        'It may be residual spilled oil, or fresh oil may be escaping at the filter, drain plug, sealing washer, oil line, or another serviced part. Continuing wetness needs to be checked before riding.',
    },
    {
      question: 'Should I tighten the oil filter or drain plug harder?',
      answer:
        'No. Use the exact installation and torque procedure for the motorcycle. Guessing can damage threads, distort a seal, or make the leak worse.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Motorcycle Safety: Helmets, Motorists, Road Awareness',
      url: 'https://www.nhtsa.gov/road-safety/motorcycles',
      sourceType: 'government',
      notes:
        'NHTSA advises checking motorcycle fluid levels and looking under the motorcycle for signs of oil or gas leaks before every ride.',
    },
    {
      publisher: 'American Honda Motor Co., Inc.',
      title: "2005 Honda VT750C Shadow Aero Owner's Manual",
      url: 'https://owners.honda.com/assets/ownerlink/model/own_man/powersports/2005/2005_vt750c.pdf',
      sourceType: 'manufacturer',
      notes:
        'Model-specific guidance says to stop the engine for a low-oil-pressure indicator, check for leakage and oil level, and not ride if a leak remains.',
    },
    {
      publisher: 'American Honda Motor Co., Inc.',
      title: 'Defect Information Report — NHTSA Recall 22V-061',
      url: 'https://static.nhtsa.gov/odi/rcl/2022/RMISC-22V061-2451.pdf',
      sourceType: 'regulation',
      notes:
        'Model-specific recall evidence that oil from a ruptured cooler pipe could reach the exhaust or rear tire, increasing fire, crash, and injury risk. It supports the hazard mechanism, not a diagnosis of other motorcycles.',
    },
    {
      publisher: 'Michelin North America, Inc.',
      title: 'Motorcycle Tire Damage',
      url: 'https://www.michelinman.com/motorcycle/tips-and-advice/motorcycle-tire-basics/motorcycle-tire-damage',
      sourceType: 'manufacturer',
      notes:
        'Michelin says petroleum products can degrade motorcycle tire rubber, an oil-soaked tire should not be used, and excessive lubricant on the rear tire reduces grip.',
    },
    {
      publisher: 'Harley-Davidson Motor Company',
      title: 'M1513: Diagnostics and Repair — Leaks, Weeps and Seeps',
      url: 'https://static.nhtsa.gov/odi/tsbs/2020/MC-10173470-0001.pdf',
      sourceType: 'manufacturer',
      notes:
        'Manufacturer service guidance distinguishes residual lubricant or slight seal wetness from confirmed running or dripping fluid and describes cleaning and rechecking the area to confirm a leak.',
    },
    {
      publisher: 'Royal Enfield North America Limited',
      title: 'Caliper Dismantling & Assembly Procedure — Himalayan Model',
      url: 'https://static.nhtsa.gov/odi/rcl/2023/RCMN-23V129-3073.pdf',
      sourceType: 'manufacturer',
      notes:
        'Model-specific brake service guidance says oil, grease, and other slippery contamination on brake discs can render braking ineffective and requires correction before riding.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Model-Specific Owner's Manual",
      description:
        'Gives the correct oil-level procedure, required oil, warning-indicator response, and maintenance instructions for the motorcycle.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Clean Cardboard or Absorbent Drip Pads',
      description:
        'Makes fresh drops easier to see and helps show where oil lands while the motorcycle is parked.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Flashlight and Inspection Mirror',
      description:
        'Helps inspect cooled, difficult-to-see areas without reaching around a hot engine or exhaust.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Motorcycle Transport or Roadside Assistance',
      description:
        'Moves a motorcycle that has an active leak, contaminated tire or brake, unsafe oil level, or oil-pressure warning without riding it.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'low-engine-oil',
      anchorText: 'What if the motorcycle is low on engine oil?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'oil-pressure-warning-light',
      anchorText: 'What does an oil-pressure warning light mean?',
      relationshipType: 'escalation',
    },
    {
      slug: 'blue-smoke-from-exhaust',
      anchorText: 'Why is blue smoke coming from the exhaust?',
      relationshipType: 'related',
    },
  ],
};
