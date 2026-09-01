import type { ProblemSeed } from '../types';

export const refrigeratorLeakingWater: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'frost-and-ice',
  slug: 'refrigerator-leaking-water',
  canonicalPath: '/appliances/refrigerators/frost-and-ice/refrigerator-leaking-water/',
  name: 'Refrigerator leaking water',
  eyebrow: 'Appliances · Refrigerators · Frost & Ice',

  h1: 'Can I Ignore a Refrigerator That Is Leaking Water?',
  seoTitle: 'Refrigerator Leaking Water: When to Shut It Off and What to Check',
  metaDescription:
    'A refrigerator leak may be a spill, condensation, clogged defrost drain, filter problem, or supply-line leak. Learn when to shut off water or power.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the refrigerator?',
  canIUseItLabel: 'Only if the leak is minor and contained',

  shortAnswer:
    'No—not if water returns after cleanup. Find the source, and shut off the refrigerator’s water supply if an active leak is coming from a line, valve, filter, dispenser, or ice maker. If water is reaching electrical equipment, do not touch the wet appliance.',

  whyItMattersHeading: 'The Location of the Water Changes the Answer',
  whyItMatters: [
    'Water around a refrigerator is not one diagnosis. It can be a spilled container or temporary condensation, but it can also be defrost water backing up through a drain, a loose filter, a leaking ice-maker connection, a faulty inlet valve, or a damaged household supply line. Drying the area and watching where the first fresh water appears helps separate these possibilities.',
    'An active leak can damage flooring and cabinets and leave materials damp enough to support mold. Water reaching the cord, plug, outlet, controls, or internal electrical equipment adds a shock hazard. If the refrigerator is also warming, verify that it remains at 40°F or below and treat food safety as a separate issue.',
  ].join('\n\n'),

  redFlagsHeading: 'Shut Off Water or Power If You Notice:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Refrigerator leak causes, water shutoff, defrost drainage, moisture damage, wet-appliance safety, and food temperature were checked against EPA, CPSC, FDA, GE, and Samsung guidance.',
  disclaimer:
    'Refrigerator layouts and shutoff locations vary by model and home. Follow the owner’s manual before moving the appliance, removing panels, clearing a drain, or replacing parts.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'confirmed-one-time-spill',
      label: 'The water came from a spilled or leaking food container',
      shortDescription: 'You found the container, cleaned the refrigerator, and no water returns.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is not an appliance leak',
      resultBody:
        'A confirmed one-time spill does not mean the refrigerator has failed. The important check is whether the area remains dry after the container is removed and the spill is cleaned.',
      recommendedAction:
        'Clean and dry the shelves, drawers, cabinet floor, and any water on the kitchen floor. Monitor the area to confirm that fresh water does not return.',
    },
    {
      slug: 'temporary-condensation',
      label: 'Moisture appeared after humid weather or a door was left ajar',
      shortDescription:
        'Light moisture is on the gasket, cabinet, or interior, and the door now closes completely.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Correct the door issue and monitor it',
      resultBody:
        'Humid room air can condense on cold surfaces when the door is open, obstructed, or not sealing. It may stop once the door closes properly, but recurring puddles need investigation.',
      recommendedAction:
        'Wipe the refrigerator dry, remove anything blocking the door, clean the gasket contact surface, and confirm that moisture does not return.',
    },
    {
      slug: 'water-contained-in-drain-pan',
      label: 'Water is only in the designated defrost drain pan',
      shortDescription:
        'The owner’s manual identifies the accessible pan, and it is not cracked, overflowing, or leaking onto the floor.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Contained defrost water can be normal',
      resultBody:
        'Automatic-defrost refrigerators route meltwater through a drain to a pan below the appliance. Water contained in that intended pan is different from water escaping onto the floor.',
      recommendedAction:
        'Leave the pan in place and monitor it. Follow the owner’s manual if it overflows, is damaged, or requires cleaning; do not remove appliance panels just to inspect it.',
    },
    {
      slug: 'brief-dispenser-drips',
      label: 'Only a few drops fall immediately after dispensing water',
      shortDescription: 'The dripping stops promptly and does not happen while the dispenser is idle.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'A brief drip may be normal',
      resultBody:
        'A small amount of residual water can leave the nozzle immediately after use. Trapped air after installation or a filter change can also contribute, depending on the model.',
      recommendedAction:
        'Hold the glass under the nozzle briefly after dispensing and follow the model’s instructions for purging a newly installed water system. Investigate dripping that continues while idle.',
    },
    {
      slug: 'recurring-water-under-drawers',
      label: 'Water or ice keeps returning under the crisper or freezer basket',
      shortDescription: 'Cleanup helps temporarily, but another puddle or sheet of ice forms in the same area.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Internal drainage may be blocked',
      resultBody:
        'Recurring water or ice low in the cabinet can fit a defrost drainage problem, although location alone cannot prove the cause. Some models provide an owner procedure; others require service.',
      recommendedAction:
        'Check the model-specific manual for drain troubleshooting. Do not use knives, picks, or improvised heaters to remove ice, and arrange service if the approved steps do not stop the problem.',
    },
    {
      slug: 'leaking-water-filter',
      label: 'Water is appearing around the filter or filter housing',
      shortDescription:
        'The leak began after a filter change, or the filter or housing looks loose, cracked, or damaged.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using the water system',
      resultBody:
        'A poorly seated or damaged filter can release water inside the cabinet. A damaged housing or a leak that continues after correct installation needs appliance service.',
      recommendedAction:
        'Turn off the ice maker and stop using the dispenser. Reseat or replace the filter only as the owner’s manual directs; shut off the refrigerator water supply if the leak remains active.',
    },
    {
      slug: 'leaking-supply-line-or-valve',
      label: 'Water is coming from behind the refrigerator or its supply connection',
      shortDescription: 'The household tubing, shutoff connection, appliance inlet, or nearby valve is wet.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Shut off the refrigerator’s water',
      resultBody:
        'A supply line or valve can keep leaking even when nobody uses the dispenser. The problem may be in the household plumbing, the connection, or the refrigerator’s inlet system.',
      recommendedAction:
        'Turn off the ice maker and close the dedicated refrigerator shutoff if you can reach it safely. Use a plumber for a household line or valve problem and appliance service for an appliance-side leak.',
    },
    {
      slug: 'leaking-ice-maker',
      label: 'The ice maker leaks while filling or water escapes from its compartment',
      shortDescription:
        'Water appears during an ice-making cycle, ice is melting, or a fill connection is leaking.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Disable the ice maker and isolate the water',
      resultBody:
        'Possible causes include a loose fill connection, a valve problem, improper leveling, melting ice, or a model-specific ice-maker fault. Continued operation can add more water.',
      recommendedAction:
        'Turn off the ice maker. If water continues, close the refrigerator’s water supply and arrange model-appropriate service rather than repeatedly emptying the ice bin.',
    },
    {
      slug: 'leak-with-warming-food',
      label: 'The refrigerator is leaking and no longer staying cold',
      shortDescription: 'Food is warming, an alarm is active, or an appliance thermometer reads above 40°F.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a cooling and food-safety problem',
      resultBody:
        'The leak may be separate from the cooling failure, but a refrigerator that cannot maintain a safe temperature changes what food can be kept.',
      recommendedAction:
        'Keep the doors closed, verify the temperature with an appliance thermometer, address the cooling fault, and use FDA guidance to evaluate perishable food.',
    },
    {
      slug: 'water-reaching-electrical-equipment',
      label: 'Water is touching the plug, outlet, cord, controls, or electrical parts',
      shortDescription:
        'Electrical equipment is wet, the breaker trips, or there are sparks, smoke, a shock, or a burning smell.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not touch the wet appliance',
      resultBody:
        'Water around energized equipment creates an electrical hazard. Moving the refrigerator, reaching for its plug, or operating a wet control can put you in contact with electricity.',
      recommendedAction:
        'Stay out of the water. From a dry, safe location, disconnect the circuit only if you can do so safely; otherwise get help. Have the electrical and appliance condition checked before reuse.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Water spreads beyond its source',
      description:
        'A small amount can run along shelves, tubing, cabinet seams, or flooring before collecting where you finally notice it.',
      severity: 'caution',
    },
    {
      stageLabel: 'IF THE LEAK KEEPS RETURNING',
      title: 'Flooring and cabinets remain wet',
      description:
        'Repeated exposure can stain, swell, soften, or separate moisture-sensitive flooring, trim, and cabinet materials.',
      severity: 'warning',
    },
    {
      stageLabel: 'IF DEFROST WATER CANNOT DRAIN',
      title: 'Water or ice builds up again',
      description:
        'Meltwater can collect inside the refrigerator or freezer and may eventually escape through a door opening onto the floor.',
      severity: 'caution',
    },
    {
      stageLabel: 'IF MATERIALS STAY DAMP',
      title: 'Mold can begin growing',
      description:
        'Mold requires moisture, so cleanup is not complete until the source is fixed and surrounding materials are thoroughly dried.',
      severity: 'warning',
    },
    {
      stageLabel: 'IF COOLING IS AFFECTED',
      title: 'Perishable food may become unsafe',
      description:
        'A refrigerator that rises above its safe storage temperature requires a food-by-food decision based on temperature and exposure.',
      severity: 'warning',
    },
    {
      stageLabel: 'IF WATER REACHES ENERGIZED EQUIPMENT',
      title: 'Shock and electrical damage become possible',
      description:
        'A wet plug, outlet, control, motor, or connection should not be handled or returned to service until the electrical condition is safe.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'You confirmed that the water came from one spilled container',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Clean and dry the area, then confirm that no fresh water appears.',
    },
    {
      situation: 'Light condensation appeared after humidity or an open door',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo: 'Close the door fully, clean the gasket, dry the moisture, and watch for recurrence.',
    },
    {
      situation: 'Water remains inside the intended defrost drain pan',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Monitor it and follow the manual if the pan overflows, leaks, or appears damaged.',
    },
    {
      situation: 'A few dispenser drops stop immediately after use',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Catch the residual drops and investigate if dripping continues when nobody is dispensing water.',
    },
    {
      situation: 'Water or ice repeatedly returns under drawers or baskets',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Use the model’s drain troubleshooting instructions or arrange appliance service.',
    },
    {
      situation: 'The filter, ice maker, inlet valve, or supply line is leaking',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the water system and close the refrigerator’s water shutoff if the leak remains active.',
    },
    {
      situation: 'The refrigerator is warming or food is softening',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Check the temperature, minimize door opening, and evaluate perishables using FDA guidance.',
    },
    {
      situation: 'Water is touching electrical equipment',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not touch the wet appliance. Disconnect the circuit only from a dry, safe location and arrange an electrical safety check.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Dry everything and find the first fresh drop',
      body:
        'Remove wet items, wipe the interior and floor dry, and place a dry towel or shallow tray where water appeared. Watch the dispenser, filter, ice maker, door area, floor, and accessible connections to identify where new water starts.',
    },
    {
      title: 'Shut off the refrigerator water if the leak is active',
      body:
        'Turn off the ice maker first, then close the dedicated water-supply valve if it is safely accessible. If the valve will not close or water keeps flowing, use the home’s main shutoff if necessary and call a plumber.',
    },
    {
      title: 'Follow the manual for water under drawers or freezer ice',
      body:
        'Internal drain access and cleaning procedures vary. Use only the steps approved for your model, and arrange service if the water returns or the drain is behind panels the manual does not tell owners to remove.',
      destinationProblemSlug: 'water-pooling-under-crisper',
    },
    {
      title: 'Verify the refrigerator temperature',
      body:
        'Use an appliance thermometer instead of judging by how cold the air or food feels. If the refrigerator is above 40°F, address the cooling problem and evaluate temperature-sensitive food separately.',
      destinationProblemSlug: 'fridge-not-cold-enough',
    },
    {
      title: 'Send the repair to the right service',
      body:
        'A plumber usually handles the household supply tubing and shutoff valve. Appliance service handles internal valves, filter housings, ice makers, defrost drains, and leaks whose source cannot be reached safely.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Water is spraying, flowing, or spreading quickly',
      description:
        'Turn off the refrigerator’s water supply. If that does not stop it, use the home’s main water shutoff and call for plumbing help.',
      severity: 'danger',
    },
    {
      title: 'The plug, outlet, cord, controls, or electrical compartment is wet',
      description:
        'Do not touch or move the wet appliance while it remains energized, especially while standing on a wet floor.',
      severity: 'danger',
    },
    {
      title: 'The breaker or GFCI trips, or you feel a shock',
      description:
        'Leave the circuit off. Sparks, smoke, a burning smell, or any shock requires an electrical safety check before the refrigerator is used again.',
      severity: 'danger',
    },
    {
      title: 'The refrigerator shutoff valve does not stop the water',
      description:
        'The valve may be faulty or the leak may come from another source. Use the main shutoff if needed and arrange prompt repair.',
      severity: 'warning',
    },
    {
      title: 'Water is entering flooring, cabinets, walls, or the room below',
      description:
        'The leak is no longer contained around the appliance and may be causing hidden moisture damage.',
      severity: 'warning',
    },
    {
      title: 'The floor or cabinet is swollen, soft, stained, or musty',
      description:
        'These signs suggest repeated moisture exposure. Stop the leak, dry the area, and inspect for damaged or moldy material.',
      severity: 'warning',
    },
    {
      title: 'The refrigerator cannot stay at 40°F or below',
      description:
        'Protect food first. Keep the door closed, confirm the temperature, and address the cooling failure rather than treating the water alone.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can a refrigerator leak even if it has no water dispenser or ice maker?',
      answer:
        'Yes. Automatic-defrost models still create meltwater that must travel through a drain into a pan. A blocked drain, damaged pan, condensation, or an unrelated spill can produce water without a household supply line.',
    },
    {
      question: 'Is water in the refrigerator drain pan normal?',
      answer:
        'It can be. The pan is intended to receive defrost water on many models. It is a problem if water escapes the pan, the pan is cracked or overflowing, or the manual does not identify what you are looking at as the drain pan.',
    },
    {
      question: 'Why does water keep collecting under the crisper drawers?',
      answer:
        'Recurring water there can fit an internal drainage problem, but it may also come from a leaking container, filter, reservoir, or another component. Dry the area first and use the model-specific manual to narrow the source.',
    },
    {
      question: 'How can I tell whether the household supply line is leaking?',
      answer:
        'Dry the tubing, valve, fittings, and floor, then watch for the highest point that becomes wet again. Water behind the refrigerator or a leak that continues without dispenser use makes the supply connection or inlet system more suspicious.',
    },
    {
      question: 'Can I keep using the ice maker if the refrigerator is leaking?',
      answer:
        'No if the leak may involve the ice maker or water system. Turn the ice maker off, and close the refrigerator water supply if water continues to appear.',
    },
    {
      question: 'Should I unplug a leaking refrigerator?',
      answer:
        'Follow the owner’s manual before moving panels or performing repairs. If electrical equipment is wet, do not reach through water to unplug it; disconnect the circuit only from a dry, safe location.',
    },
    {
      question: 'Are a few drops from the water dispenser normal?',
      answer:
        'A few drops immediately after dispensing may be residual water, and some models can drip when air is trapped after installation or a filter change. Dripping that continues while idle is not normal.',
    },
    {
      question: 'Can a refrigerator leak make the food unsafe?',
      answer:
        'The water itself does not automatically make all food unsafe. The concern is contamination from a spill or a cooling problem. Keep the refrigerator at 40°F or below and discard food directly contaminated by raw-food juices or dirty water.',
    },
    {
      question: 'What should I do with perishables if the refrigerator warmed above 40°F?',
      answer:
        'Check the actual temperature and how long the food was warm. FDA guidance says perishables that have been above 40°F for more than two hours should be discarded; if the exposure is uncertain, do not rely on smell or appearance.',
    },
    {
      question: 'Can I put towels around the refrigerator and wait?',
      answer:
        'Towels can contain a small leak while you identify it, but they do not stop the source and can hide continued moisture. Do not leave an active water-line leak or wet electrical area unattended.',
    },
    {
      question: 'Do I need a plumber or appliance repair service?',
      answer:
        'Call a plumber for household tubing, the supply shutoff, or a leak before the appliance connection. Use appliance service for internal valves, filter housings, ice makers, defrost drains, or an unclear refrigerator-side leak.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'A Brief Guide to Mold, Moisture and Your Home',
      url: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
      sourceType: 'government',
      notes:
        'EPA explains that mold requires moisture, advises acting quickly after indoor leaks or spills, and recommends fixing the moisture source and thoroughly drying wet materials.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title:
        'CPSC Urges Flood Victims to Take Steps to Prevent CO Poisoning, Electrocution, Explosion and Fires',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2023/CPSC-Urges-Flood-Victims-to-Take-Steps-to-Prevent-CO-Poisoning-Electrocution-Explosion-and-Fires',
      sourceType: 'government',
      notes:
        'CPSC advises people not to touch wet appliances that are still plugged into an electrical source. Used here only for the wet-appliance electrical warning.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Refrigerator Thermometers - Cold Facts about Food Safety',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety',
      sourceType: 'government',
      notes:
        'FDA recommends keeping refrigerators at 40°F or below, using an appliance thermometer, cleaning spills promptly, and evaluating perishables by temperature and exposure.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Refrigerator - Water Leaking Onto The Floor',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=39562',
      sourceType: 'manufacturer',
      notes:
        'GE identifies appliance valves, household water lines, and ice-maker fill lines as possible floor-leak sources and advises shutting off refrigerator water for certain active leaks.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Side-by-Side Refrigerator - Drain Tube',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=19364',
      sourceType: 'manufacturer',
      notes:
        'For covered side-by-side models, GE explains that defrost water travels through a drain tube to a pan and that a clogged tube can cause freezer-floor ice or water outside the refrigerator.',
    },
    {
      publisher: 'Samsung',
      title: 'Water leaks in a Samsung refrigerator',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10003766/',
      sourceType: 'manufacturer',
      notes:
        'Samsung distinguishes spills and condensation from recurring leaks and provides model-specific checks for filters, water under drawers, dispenser drips, trapped air, water lines, and service escalation.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Refrigerator and freezer appliance thermometer',
      description:
        'Confirms whether the refrigerator remains at 40°F or below and whether a leak is accompanied by a cooling problem.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Model-specific owner’s manual',
      description:
        'Shows the correct water shutoff, filter installation, ice-maker controls, leveling requirements, drain access, and maintenance procedures for the refrigerator.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Absorbent towels and a shallow catch tray',
      description:
        'Helps dry the area and makes the location of the first fresh drip easier to identify. It is temporary containment, not a repair.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance repair or plumbing service',
      description:
        'Appliance service handles internal refrigerator faults; a plumber handles household supply tubing, shutoff valves, and other building-side water connections.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'water-pooling-under-crisper',
      anchorText: 'Why is water pooling under the crisper drawers?',
      relationshipType: 'sibling',
    },
    {
      slug: 'ice-on-freezer-back-wall',
      anchorText: 'What does ice on the freezer back wall mean?',
      relationshipType: 'cause',
    },
    {
      slug: 'frost-buildup-in-freezer',
      anchorText: 'Can I ignore frost building up in my freezer?',
      relationshipType: 'related',
    },
    {
      slug: 'fridge-not-cold-enough',
      anchorText: 'What if the refrigerator is not cold enough?',
      relationshipType: 'escalation',
    },
    {
      slug: 'refrigerator-door-left-open-overnight',
      anchorText: 'What if the refrigerator door was left open overnight?',
      relationshipType: 'cause',
    },
  ],
};
