import type { ProblemSeed } from '../types';

export const frostBuildupInFreezer: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'frost-and-ice',
  slug: 'frost-buildup-in-freezer',
  canonicalPath: '/appliances/refrigerators/frost-and-ice/frost-buildup-in-freezer/',
  name: 'Frost Buildup in Freezer',
  eyebrow: 'Appliances · Refrigerators · Frost & Ice',

  h1: 'Can I Ignore Frost Buildup in My Freezer?',
  seoTitle: 'Freezer Frost Buildup: When It Is Normal and When to Fix It',
  metaDescription:
    'A little freezer frost can be harmless. Heavy or recurring frost can point to a door, gasket, airflow, or cooling problem. Here is what to check.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the freezer?',
  canIUseItLabel: 'Yes, if it stays cold and the door seals fully',

  shortAnswer:
    'A light, one-time layer of frost after humid air gets in is usually not urgent. Do not ignore frost that keeps returning, gets heavy, blocks vents, prevents the door from closing, or comes with a freezer that is no longer holding 0°F.',

  whyItMattersHeading: 'Why Freezer Frost Keeps Coming Back',
  whyItMatters: [
    'Frost forms when moisture enters the freezer and freezes on cold surfaces. Frequent door openings, a door left ajar, warm food, high humidity, a poor door seal, and blocked airflow can all contribute. A small amount may be temporary. Repeated buildup means the moisture source or airflow problem is still there.',
    'Heavy frost can crowd vents and interfere with air circulation. The bigger concern is temperature: FDA and USDA guidance uses 0°F as the target freezer temperature. If the freezer is warming or food is thawing, the issue has moved from appliance maintenance to food safety.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Keep Ignoring It If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Checked against current FDA and USDA food-storage guidance plus Whirlpool, GE Appliances, and Frigidaire freezer-frost troubleshooting materials.',
  disclaimer:
    'Appliance designs and defrost procedures vary by model. Follow the owner’s manual before removing panels, defrosting, cleaning around electrical parts, or replacing components.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'light-frost-after-frequent-opening',
      label: 'Light frost after frequent door opening',
      shortDescription: 'A thin layer appeared after the freezer was opened often or during humid weather.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Usually temporary',
      resultBody:
        'Humid room air can enter each time the door opens and freeze on cold surfaces. If the door now closes fully and the freezer remains at 0°F, a light one-off layer is usually not a sign of failure.',
      recommendedAction:
        'Wipe away loose frost if practical, minimize unnecessary door openings, and watch whether the frost returns.',
    },
    {
      slug: 'frost-after-door-left-ajar',
      label: 'Frost after the door was left ajar',
      shortDescription: 'Frost appeared after a package or other item kept the door from closing completely.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Fix the cause and monitor it',
      resultBody:
        'A partly open door lets warm, moist air into the freezer. Once the obstruction is removed and the door seals normally, the frost may be a leftover effect rather than an ongoing defect.',
      recommendedAction:
        'Remove anything blocking the door, confirm the gasket contacts the cabinet all the way around, and check the freezer temperature.',
    },
    {
      slug: 'frost-inside-food-packages',
      label: 'Frost only inside sealed food packages',
      shortDescription: 'Ice crystals are inside packages while the freezer walls and door area look normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Often a food-quality issue',
      resultBody:
        'Moisture can migrate from food and freeze inside a package. That does not by itself show that the appliance is failing, and freezer burn is a quality issue rather than a food-safety issue.',
      recommendedAction:
        'Keep food tightly wrapped or sealed and confirm the freezer is holding its normal temperature.',
    },
    {
      slug: 'frost-around-door-opening',
      label: 'Frost concentrated around the door or drawer opening',
      shortDescription: 'Ice crystals repeatedly collect near the gasket, edge, or front of the freezer.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Check the seal',
      resultBody:
        'Frost near the opening often points to humid air getting past a door that is blocked, misaligned, dirty at the gasket, or not sealing properly.',
      recommendedAction:
        'Clear obstructions, clean the gasket contact surface, inspect for tears or distortion, and make sure the door closes fully.',
    },
    {
      slug: 'torn-or-damaged-gasket',
      label: 'The door gasket is torn, split, or deformed',
      shortDescription: 'The seal has visible damage and frost keeps forming near the same area.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not leave the bad seal in place',
      resultBody:
        'A damaged gasket can let humid room air leak into the freezer and can make the appliance work harder to maintain temperature.',
      recommendedAction:
        'Use the model-specific manual to confirm the correct gasket and arrange replacement if the seal cannot make full contact.',
    },
    {
      slug: 'thick-frost-blocking-vents',
      label: 'Thick frost is covering or crowding air vents',
      shortDescription:
        'Frost has built up enough to interfere with the openings that move cold air through the appliance.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Airflow is being affected',
      resultBody:
        'Manufacturers warn that frost and blocked vents can interfere with airflow and temperature control. This is no longer just a cosmetic layer of ice.',
      recommendedAction:
        "Follow the owner's manual for safe defrosting and keep food packages clear of vents when the freezer is put back into service.",
    },
    {
      slug: 'heavy-ice-on-back-wall',
      label: 'Heavy ice on the back wall of a frost-free freezer',
      shortDescription: 'A solid or recurring sheet of ice develops on an interior wall in a frost-free model.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A frost-free unit should not keep doing this',
      resultBody:
        'GE notes that ice accumulation on the freezer wall is not expected in a frost-free refrigerator or freezer. If obvious causes such as a blocked door or warm food load are corrected and ice returns, service may be needed.',
      recommendedAction:
        'Check the door, gasket, airflow, and fan operation that your manual allows you to inspect. Arrange service if the ice continues to return.',
    },
    {
      slug: 'frost-returns-after-defrosting',
      label: 'Frost returns after defrosting and basic checks',
      shortDescription:
        'The freezer was cleared, the door closes properly, and vents are open, but heavy frost comes back.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The underlying problem is still active',
      resultBody:
        'Persistent frost after obvious moisture and airflow causes are corrected can point to a sealing, airflow, fan, or another appliance problem that basic cleanup will not solve.',
      recommendedAction:
        'Check the model manual for troubleshooting steps and arrange appliance service if the frost keeps returning.',
    },
    {
      slug: 'freezer-warming-or-food-thawing',
      label: 'Frost plus a warm freezer or thawing food',
      shortDescription:
        'Food is softening, an alarm is active, or a thermometer shows the freezer is not staying properly cold.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a cooling problem',
      resultBody:
        'The important issue is no longer the frost. A freezer that cannot hold the proper temperature can allow frozen food to thaw, which changes the food-safety decision.',
      recommendedAction:
        'Keep the door closed as much as practical, verify the temperature with an appliance thermometer, and follow FDA or USDA guidance for any food that has thawed or warmed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Moisture freezes onto cold surfaces',
      description:
        'Humid air entering through an open door, a poor seal, or warm food can condense and become frost.',
      severity: 'info',
      chainLabel: 'Moisture enters',
    },
    {
      stageLabel: 'IF THE MOISTURE SOURCE CONTINUES',
      title: 'Frost keeps accumulating',
      description:
        'Repeated air leakage or frequent openings can add new frost instead of letting the problem settle down.',
      severity: 'caution',
      chainLabel: 'Frost builds',
    },
    {
      stageLabel: 'IF FROST OR PACKAGES BLOCK AIRFLOW',
      title: 'Temperature control gets harder',
      description:
        'Restricted vents and heavy frost can interfere with circulation and make it harder for the appliance to maintain an even freezer temperature.',
      severity: 'warning',
      chainLabel: 'Airflow suffers',
    },
    {
      stageLabel: 'IF THE FREEZER CAN NO LONGER STAY COLD',
      title: 'Food safety becomes the real issue',
      description:
        'Frozen food can begin to thaw. FDA and USDA guidance bases food-safety decisions on actual temperature and whether ice crystals remain.',
      severity: 'danger',
      chainLabel: 'Food warms',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A light dusting after frequent opening or humid weather',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Make sure the door closes completely and the freezer remains at 0°F. Watch for repeated buildup.',
    },
    {
      situation: 'Frost appeared after the door was accidentally left ajar',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Remove the obstruction, close the door fully, verify temperature, and monitor whether the frost stops forming.',
    },
    {
      situation: 'Frost repeatedly forms around the gasket or door edge',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Inspect the gasket and door alignment, clean the sealing surfaces, and address any damage or obstruction.',
    },
    {
      situation: 'Thick frost is covering vents or taking over interior space',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        "Follow the owner's manual for defrosting and clear the airflow path before returning the freezer to normal use.",
    },
    {
      situation: 'Heavy ice keeps returning in a frost-free model',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Correct obvious door, gasket, and airflow problems. If the ice returns, arrange service.',
    },
    {
      situation: 'The freezer is warmer than its normal target',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Use an appliance thermometer to verify temperature and troubleshoot the cooling problem rather than treating the frost alone.',
    },
    {
      situation: 'Food is thawing or no longer staying frozen',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep the door closed, verify food and freezer temperatures, and use FDA or USDA guidance to decide what can be kept, refrozen, cooked, or discarded.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check whether the door is actually sealing',
      body:
        'Look for packages, shelves, bins, or ice that keep the door from closing. Inspect the gasket for debris, folds, tears, or areas that do not contact the cabinet.',
    },
    {
      title: 'Measure the freezer temperature',
      body:
        'Put an appliance thermometer in the freezer instead of judging temperature by how the food feels. FDA and USDA guidance uses 0°F as the target freezer temperature.',
      destinationProblemSlug: 'freezer-not-cold-enough',
    },
    {
      title: 'Clear the vents and stop overpacking',
      body:
        "Find the freezer vents in the owner's manual and make sure packages are not blocking them. Leave enough space for the appliance's intended airflow.",
    },
    {
      title: 'Defrost it the way the manufacturer specifies',
      body:
        "Use the model's manual for the correct defrost procedure. Do not chip ice with a sharp object or improvise around electrical components.",
      destinationProblemSlug: 'ice-on-freezer-back-wall',
    },
    {
      title: 'Escalate recurring frost',
      body:
        'If heavy frost returns after the door, gasket, airflow, and obvious moisture sources have been corrected, arrange service rather than repeatedly clearing the ice.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The door will not close or seal fully',
      description:
        'A blocked or damaged seal can keep feeding humid air into the freezer and can let the temperature rise.',
      severity: 'warning',
    },
    {
      title: 'Food is softening or thawing',
      description:
        'This means the problem may be affecting storage temperature, not just leaving frost on surfaces.',
      severity: 'danger',
    },
    {
      title: 'A thermometer shows the freezer is not staying at 0°F',
      description:
        'Treat the temperature problem as the priority and evaluate food according to FDA or USDA guidance.',
      severity: 'warning',
    },
    {
      title: 'Heavy ice returns in a frost-free freezer',
      description: 'Recurring wall ice after basic causes are corrected can require appliance service.',
      severity: 'warning',
    },
    {
      title: 'Frost is blocking vents or the fan area',
      description: 'Restricted airflow can worsen temperature and moisture problems.',
      severity: 'warning',
    },
    {
      title: 'The gasket is torn, split, or visibly distorted',
      description: 'A damaged seal can allow repeated moisture entry and should be corrected.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a little frost in the freezer normal?',
      answer:
        'It can be. Frequent door opening, humid weather, warm food, or a door that was briefly left ajar can create temporary frost. What matters is whether it keeps returning and whether the freezer stays at 0°F.',
    },
    {
      question: 'Why does frost form around the freezer door?',
      answer:
        'That location often points to warm, humid air entering near the opening. Check for food packages blocking the door, dirty sealing surfaces, misalignment, or gasket damage.',
    },
    {
      question: 'Does frost mean my freezer is too cold?',
      answer:
        "Not necessarily. Frost is usually about moisture meeting cold surfaces. Some manufacturers also warn that settings colder than recommended can contribute, so use the model's recommended setting rather than guessing.",
    },
    {
      question: 'Can overfilling a freezer cause frost?',
      answer:
        'It can contribute if packages block vents or prevent the door from sealing. FDA also advises against crowding refrigerators or freezers so tightly that air cannot circulate.',
    },
    {
      question: 'Should I scrape freezer ice off with a knife?',
      answer:
        "No. Use the defrost and cleaning procedure in your owner's manual. Sharp tools can damage interior surfaces or components, and the appliance may need to be unplugged before maintenance.",
    },
    {
      question: 'Is frost on frozen food unsafe?',
      answer:
        'Frost or freezer burn is usually a quality issue by itself. Food safety depends more on temperature and whether the food has thawed.',
    },
    {
      question: 'What if my frozen food has started to thaw?',
      answer:
        'Check the food and freezer temperature. USDA says food that still contains ice crystals or is at 40°F or below can be refrozen or used, while warmer perishable food may need to be discarded depending on how long it was above that temperature.',
    },
    {
      question: 'Why does frost come back after I defrost the freezer?',
      answer:
        'Defrosting removes the ice but not necessarily the cause. A leaking gasket, door problem, blocked airflow, fan issue, or another appliance fault can make the buildup return.',
    },
    {
      question: 'Do I need appliance service for freezer frost?',
      answer:
        'Not for every light layer. Service becomes more reasonable when heavy frost returns after basic door, gasket, airflow, and temperature checks or when a frost-free unit develops recurring wall ice.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Are You Storing Food Safely?',
      url: 'https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely',
      sourceType: 'government',
      notes:
        'FDA says freezers should be kept at 0°F, recommends appliance thermometers, advises against crowding that blocks air circulation, and explains how temperature and remaining ice crystals affect food-safety decisions.',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Freezing and Food Safety',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety',
      sourceType: 'government',
      notes:
        'USDA says food stored continuously at 0°F remains safe, recommends an appliance thermometer, and gives guidance for food after a freezer failure or a door left ajar.',
    },
    {
      publisher: 'Whirlpool',
      title: 'How to Avoid Frost Build Up',
      url: 'https://producthelp.whirlpool.com/Refrigeration/Freezers/Product_Info/Product_Assistance/How_to_Avoid_Frost_Build_Up',
      sourceType: 'manufacturer',
      notes:
        'Whirlpool identifies humidity, frequent door opening, warm food, poor door sealing, and blocked airflow as contributors to freezer frost and recommends checking seals and airflow.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Refrigerator & Freezer - Ice on Freezer Wall',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=16894',
      sourceType: 'manufacturer',
      notes:
        'GE says wall ice is not expected in a frost-free unit and lists humidity, door openings, warm food, blocked closure, gasket problems, and a non-running fan as possible causes.',
    },
    {
      publisher: 'Frigidaire',
      title: 'Refrigerators / Freezer - Frost Build Up',
      url: 'https://owner.frigidaire.com/support-articles/article/1918348-refrigerators-freezer-frost-build-up',
      sourceType: 'manufacturer',
      notes:
        'Frigidaire explains frost formation and points to door sealing, blocked airflow, temperature settings, and ice-chute closure as causes to check.',
    },
    {
      publisher: 'Whirlpool',
      title: 'How to Defrost the Freezer',
      url: 'https://producthelp.whirlpool.com/Refrigeration/Freezers/Product_Info/Product_Assistance/How_to_Defrost_the_Freezer',
      sourceType: 'manufacturer',
      notes:
        'Whirlpool instructs users to disconnect power for manual defrosting, use the model manual, and avoid knives, ice picks, electrical heaters, and other unsafe shortcuts.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Appliance thermometer',
      description:
        'Gives you an actual freezer temperature so you can separate a cosmetic frost problem from a cooling problem.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Freezer owner’s manual',
      description:
        'Provides model-specific instructions for temperature settings, vent locations, defrosting, cleaning, and safe maintenance.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Replacement door gasket',
      description:
        'Relevant when the existing gasket is torn, split, deformed, or unable to seal against the cabinet.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance repair service',
      description:
        'Useful when heavy frost keeps returning after basic door, gasket, airflow, and defrost checks or when the freezer cannot maintain temperature.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'freezer-door-left-open',
      anchorText: 'What if the freezer door was left open?',
      relationshipType: 'cause',
    },
    {
      slug: 'freezer-not-cold-enough',
      anchorText: 'What if the freezer is not cold enough?',
      relationshipType: 'escalation',
    },
    {
      slug: 'ice-on-freezer-back-wall',
      anchorText: 'What if ice is forming on the freezer back wall?',
      relationshipType: 'sibling',
    },
    {
      slug: 'ice-crystals-on-frozen-food',
      anchorText: 'What do ice crystals on frozen food mean?',
      relationshipType: 'related',
    },
    { slug: 'freezer-burn', anchorText: 'Can freezer-burned food still be used?', relationshipType: 'related' },
  ],
};
