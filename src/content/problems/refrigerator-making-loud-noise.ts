import type { ProblemSeed } from '../types';

export const refrigeratorMakingLoudNoise: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'noises',
  slug: 'refrigerator-making-loud-noise',
  canonicalPath: '/appliances/refrigerators/noises/refrigerator-making-loud-noise/',
  name: 'Loud refrigerator noise',
  eyebrow: 'Appliances · Refrigerators · Noises',

  h1: 'Can I Ignore a Refrigerator Making a Loud Noise?',
  seoTitle: 'Loud Refrigerator Noise: Normal Sounds vs. Signs It Needs Service',
  metaDescription:
    'A loud refrigerator may be normal during cooling, defrosting, or ice making, but persistent grinding, fan scraping, cooling loss, or electrical signs need action.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Briefly, if it stays cold and has no warning signs',

  shortAnswer:
    'Probably not as a long-term plan. Brief humming, popping, gurgling, and ice-making sounds can be normal, but a new, persistent, or unusually loud noise should be identified—especially if the refrigerator is warming, repeatedly trying to start, or showing electrical warning signs.',

  whyItMattersHeading: 'The Sound Matters Less Than What Happens With It',
  whyItMatters: [
    'Refrigerators normally make noise as the compressor and fans run, refrigerant moves, defrost water reaches the heater, controls switch, and ice drops into the bin. A sound that follows one of those events and then stops may not indicate a defect.',
    'A harsh or persistent sound can instead come from vibration, a fan touching frost or another object, an ice maker without water, or a component that needs service. Cooling performance is the key check: USDA guidance says the refrigerator should remain at 40°F or below.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It or Get Help Now If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Checked against current USDA and U.S. Fire Administration guidance plus Whirlpool, Samsung, GE Appliances, and LG refrigerator-noise support materials.',
  disclaimer:
    "Refrigerator designs vary by model. Follow the owner's manual before moving the unit, removing covers, cleaning internal areas, or disconnecting water or power.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'louder-hum-after-door-opening',
      label: 'The hum gets louder after the doors were open',
      shortDescription:
        'The compressor or fans sound stronger after grocery loading, frequent door opening, or a warm food load, then return to their usual level.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This can be normal cooling operation',
      resultBody:
        'The compressor and fans may run faster or longer while the refrigerator removes added heat. A sound that settles as the temperature recovers is usually normal.',
      recommendedAction:
        'Keep the doors closed, make sure interior vents are not blocked, and confirm the temperature remains at 40°F or below.',
    },
    {
      slug: 'brief-defrost-and-refrigerant-sounds',
      label: 'You hear brief popping, hissing, or gurgling',
      shortDescription:
        'The sound occurs occasionally during cooling or defrosting and the refrigerator otherwise works normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'These are common operating sounds',
      resultBody:
        'Plastic parts can expand and contract, refrigerant can gurgle through tubing, and defrost water can hiss when it reaches the heater.',
      recommendedAction:
        "No repair is needed if the sounds are occasional, match the model's noise guide, and are not becoming unusually loud or continuous.",
    },
    {
      slug: 'ice-drop-or-dispenser-noise',
      label: 'The loud sound happens during ice making or dispensing',
      shortDescription:
        'Ice drops into an empty bin, or the dispenser briefly grinds while moving cubed or crushed ice.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Ice mechanisms can sound surprisingly loud',
      resultBody:
        'Ice falling into the bin and the dispenser motor moving ice can create clattering or grinding that is normal when tied directly to ice operation.',
      recommendedAction:
        'Confirm the noise stops when the ice-making or dispensing event ends. Investigate if grinding continues when no ice is being dispensed.',
    },
    {
      slug: 'identifiable-external-rattle',
      label: 'The rattle stops when you move a bottle or nearby object',
      shortDescription:
        'Containers are touching, something is sitting on the refrigerator, or the cabinet is vibrating against a wall, line, or adjacent surface.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The refrigerator may be amplifying a simple vibration',
      resultBody:
        'Normal compressor and fan vibration can become much louder when bottles, shelves, tubing, cabinets, or objects on top of the refrigerator resonate against one another.',
      recommendedAction:
        "Separate touching items, remove objects from the top, and check the model's leveling and clearance instructions. Do not move or tilt a full refrigerator alone.",
    },
    {
      slug: 'ice-maker-buzzing-without-water',
      label: 'The ice maker buzzes but has no water supply',
      shortDescription:
        'The ice maker is on even though the refrigerator is not connected to water or the supply valve is closed.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Turn the ice maker off',
      resultBody:
        'The water valve may buzz or click when the ice maker requests water it cannot receive. Manufacturer guidance commonly directs users to switch off the ice maker when no water supply is available.',
      recommendedAction:
        "Turn off the ice maker using the model's instructions until a working water supply is connected. Check for a closed valve or kink only where the manual allows.",
    },
    {
      slug: 'fan-scraping-stops-with-door-open',
      label: 'Scraping or thudding stops when a door opens',
      shortDescription:
        'A steady fan-like noise begins after the door closes and stops when the refrigerator or freezer door is opened.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A fan may be hitting frost or an obstruction',
      resultBody:
        'Door switches often stop an interior circulation fan. A noise that stops with the door open can therefore point to fan interference, which manufacturers treat as an abnormal condition.',
      recommendedAction:
        'Check for visible frost and packages blocking exposed vents. Do not reach into a moving fan or remove internal covers; arrange service if the noise returns.',
    },
    {
      slug: 'grinding-away-from-dispensing',
      label: 'Grinding occurs when you are not dispensing ice',
      shortDescription:
        'The grinding, drilling, or mechanical scraping is persistent and is not tied to normal ice dispensing.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'This is not a normal dispenser sound',
      resultBody:
        'Manufacturer guidance distinguishes normal dispenser-motor noise from grinding that occurs while the dispenser is idle. A fan, motor, or another moving component may need diagnosis.',
      recommendedAction:
        'Stop using the ice dispenser if it seems involved, verify that cooling is normal, and arrange appliance service if the sound persists.',
    },
    {
      slug: 'persistent-new-motor-noise',
      label: 'A new loud hum, whine, or drilling sound persists',
      shortDescription:
        'The refrigerator remains cold, but a compressor- or fan-like sound is clearly louder than its previous operating noise.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Schedule a diagnosis if basic checks do not help',
      resultBody:
        'Variable-speed compressors and fans change sound during normal operation, but manufacturers recommend service when an unusually loud motor sound persists.',
      recommendedAction:
        'Check for contact vibration, stability, blocked vents, and model-required clearance. Record the sound and arrange service if it continues.',
    },
    {
      slug: 'loud-noise-with-cooling-loss',
      label: 'The noise comes with warming food or a temperature warning',
      shortDescription:
        'An appliance thermometer reads above 40°F, food is softening, or the display shows a cooling-related alarm or error.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a cooling failure',
      resultBody:
        'The noise is now secondary. A refrigerator that cannot maintain a safe storage temperature can create a food-safety problem even if the motor continues running.',
      recommendedAction:
        'Keep the doors closed, verify the temperature with an appliance thermometer, protect perishables, and arrange prompt service. Follow USDA guidance for food that has warmed.',
    },
    {
      slug: 'electrical-warning-signs',
      label: 'The noise comes with smoke, sparks, heat, or a burning smell',
      shortDescription:
        'You notice smoke, visible arcing, melted material, a hot or damaged plug, a shock or tingle, or repeated breaker trips.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using the refrigerator now',
      resultBody:
        'These signs can indicate an electrical fault rather than an ordinary compressor or fan noise. Continuing to energize the appliance may create fire or electric-shock risk.',
      recommendedAction:
        'Disconnect power only if you can do so safely. Otherwise use the appropriate circuit breaker, stay clear of smoke or damaged wiring, and contact emergency services if there is fire.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The noise may be normal or may be a clue',
      description:
        'Cooling, defrosting, airflow, water filling, ice harvesting, and control switching all create sounds. The trigger and duration help separate those sounds from a fault.',
      severity: 'info',
      chainLabel: 'Sound begins',
    },
    {
      stageLabel: 'IF SOMETHING IS VIBRATING',
      title: 'Normal movement gets amplified',
      description:
        'Bottles, shelves, water tubing, surrounding cabinets, an uneven installation, or objects on top can turn mild motor vibration into a loud rattle.',
      severity: 'caution',
      chainLabel: 'Vibration resonates',
    },
    {
      stageLabel: 'IF A FAN IS OBSTRUCTED',
      title: 'Scraping or thudding can continue',
      description:
        'Frost or a foreign object near a fan can produce repeated contact noise. If airflow is affected, temperature control may also suffer.',
      severity: 'warning',
      chainLabel: 'Airflow is affected',
    },
    {
      stageLabel: 'IF A MOTOR OR COOLING PART CANNOT OPERATE NORMALLY',
      title: 'The refrigerator may stop holding temperature',
      description:
        'Persistent abnormal compressor or fan noise can require service. If cooling declines, stored food rather than the noise becomes the immediate concern.',
      severity: 'warning',
      chainLabel: 'Cooling declines',
    },
    {
      stageLabel: 'IF ELECTRICAL WARNING SIGNS APPEAR',
      title: 'Fire or electric-shock risk takes priority',
      description:
        'Smoke, sparks, burning odors, damaged cords, abnormal outlet heat, shocks, or repeated breaker trips call for shutdown rather than further testing.',
      severity: 'danger',
      chainLabel: 'Unsafe to continue',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: "A brief hum, click, pop, hiss, or gurgle matches the owner's manual",
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Continue using the refrigerator if it remains cold and the sound is occasional rather than harsh, persistent, or steadily worsening.',
    },
    {
      situation: 'The refrigerator is louder after loading groceries or opening the doors',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Close the doors, keep vents clear, and let the appliance recover. Confirm that the sound and temperature return to normal.',
    },
    {
      situation: 'A rattle stops after separating containers or removing cabinet contact',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Secure the item and check that the refrigerator is stable and installed according to its model-specific clearance instructions.',
    },
    {
      situation: 'The ice maker buzzes with no working water supply',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: "Turn the ice maker off according to the owner's manual until water is available.",
    },
    {
      situation: 'Fan-like scraping stops when a refrigerator or freezer door opens',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Look for visible frost or blocked vents without removing covers. Arrange service if the sound returns after the door closes.',
    },
    {
      situation: 'A new motor-like sound remains unusually loud while cooling is normal',
      ignoreAnswer: 'Only while arranging service',
      severity: 'caution',
      whatToDo:
        'Rule out exterior vibration and monitor temperature. Schedule diagnosis if the sound persists.',
    },
    {
      situation: 'The refrigerator is above 40°F or food is warming',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep the doors closed, protect perishables, follow USDA food-safety guidance, and arrange prompt repair.',
    },
    {
      situation: 'There is smoke, a burning smell, sparking, shock, or electrical damage',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop use and disconnect power only if safe. Leave the area and call emergency services if there is fire or significant smoke.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Identify when the noise happens',
      body:
        'Listen for a connection to compressor startup, door opening, defrosting, water filling, ice dropping, or dispensing. Record the sound and note whether opening a door stops it.',
    },
    {
      title: 'Remove simple vibration sources',
      body:
        'Separate touching containers, reseat removable bins and shelves, clear objects from the top, and look for safe-to-reach tubing or surrounding surfaces touching the cabinet.',
      destinationProblemSlug: 'refrigerator-rattling',
    },
    {
      title: 'Check the ice maker and water supply',
      body:
        'If the buzz occurs when the ice maker requests water, confirm that the supply is intended to be on. Switch the ice maker off when no water line is connected.',
      destinationProblemSlug: 'buzzing-refrigerator',
    },
    {
      title: 'Measure the refrigerator temperature',
      body:
        'Use an appliance thermometer rather than judging only by the air you feel when the door opens. The refrigerator should remain at 40°F or below.',
      destinationProblemSlug: 'fridge-not-cold-enough',
    },
    {
      title: 'Escalate persistent or unsafe noise',
      body:
        'Arrange model-appropriate service for recurring scraping, grinding, drilling, or unusually loud motor noise. Stop use immediately for smoke, sparks, burning odor, electrical heat, shock, or repeated breaker trips.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Smoke, sparks, or visible melting',
      description:
        'Disconnect power only if it is safe to approach the plug or breaker. Treat active flame or spreading smoke as an emergency.',
      severity: 'danger',
    },
    {
      title: 'A burning electrical or melting-plastic smell',
      description: 'Do not keep the refrigerator running to see whether the odor disappears.',
      severity: 'danger',
    },
    {
      title: 'The plug, cord, or outlet is damaged or unusually hot',
      description:
        'Stop using the appliance and have the electrical connection evaluated before reconnecting it.',
      severity: 'danger',
    },
    {
      title: 'You feel a shock or tingle from the refrigerator',
      description:
        'Do not touch the appliance again. Shut off its circuit without approaching the refrigerator if that can be done safely.',
      severity: 'danger',
    },
    {
      title: 'The refrigerator repeatedly trips its breaker',
      description:
        'Repeated tripping can indicate an appliance or circuit fault and should not be defeated with a larger breaker, extension cord, or repeated resets.',
      severity: 'danger',
    },
    {
      title: 'The temperature rises above 40°F',
      description: 'Cooling performance and food safety now matter more than identifying the exact sound.',
      severity: 'warning',
    },
    {
      title: 'Harsh fan scraping or thudding keeps returning',
      description:
        'A fan may be contacting frost or another obstruction. Avoid reaching into the fan area or removing internal covers.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is refrigerator humming normal?',
      answer:
        'A low or changing hum from the compressor and fans is usually normal. Investigate a hum that becomes unusually loud, stays harsh, or comes with poor cooling.',
    },
    {
      question: 'Why is my refrigerator louder after I put groceries away?',
      answer:
        'Open doors and warmer contents add heat, so the compressor and fans may work harder until the set temperature is restored.',
    },
    {
      question: 'Why does the noise stop when I open the door?',
      answer:
        'Some refrigerators stop an interior fan when a door opens. Repeated scraping or thudding that follows this pattern can mean the fan is contacting frost or another obstruction.',
    },
    {
      question: 'Does a loud noise mean the compressor is failing?',
      answer:
        'Not by itself. Variable-speed compressors change pitch and volume during normal operation. Persistent abnormal noise plus warming, repeated start attempts, or an error indication is more concerning.',
    },
    {
      question: 'Can the ice maker make a loud bang?',
      answer:
        'Yes. Ice falling into an empty storage bin can be loud. Repeated pipe banging during water filling may be water hammer and deserves a separate check.',
    },
    {
      question: 'Should I unplug a refrigerator just because it is noisy?',
      answer:
        "Not automatically. First confirm that it is cooling and that there is no smoke, electrical odor, sparking, shock, or damaged connection. Follow the owner's manual before power cycling it.",
    },
    {
      question: 'Can I keep food in a noisy refrigerator?',
      answer:
        'Yes, if an appliance thermometer confirms the refrigerator remains at 40°F or below. If it is warmer, follow USDA guidance rather than relying on smell or taste.',
    },
    {
      question: 'Can dirty condenser coils make a refrigerator louder?',
      answer:
        "They can contribute to longer or harder operation on models with accessible coils. Clean only the areas and by the method specified in the owner's manual, with power disconnected when directed.",
    },
    {
      question: 'Is it safe to use an extension cord for a noisy refrigerator?',
      answer:
        'No. U.S. Fire Administration guidance says major appliances such as refrigerators should be plugged directly into a wall outlet.',
    },
    {
      question: 'Should I move or level the refrigerator myself?',
      answer:
        'Small leveling adjustments may be allowed by the manual, but refrigerators are heavy and can tip. Do not move or tilt one alone.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Refrigeration & Food Safety',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration',
      sourceType: 'government',
      notes:
        'Says refrigerators should maintain 40°F or below, recommends appliance thermometers, and explains why temperature matters when refrigeration is interrupted.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Appliance and Electrical Fire Safety',
      url: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/appliance-and-electrical/',
      sourceType: 'government',
      notes:
        'Advises plugging refrigerators directly into wall outlets, avoiding extension cords for major appliances, and replacing appliances with damaged or loose cords.',
    },
    {
      publisher: 'Whirlpool',
      title: 'Refrigerator Normal Sounds and Noises',
      url: 'https://producthelp.whirlpool.com/Refrigeration/Full-Size_Refrigerators/Product_Info/Product_Assistance/Refrigerator_Normal_Sounds_and_Noises',
      sourceType: 'manufacturer',
      notes:
        'Describes common humming, clicking, gurgling, popping, hissing, rattling, airflow, water-valve, compressor, and fan sounds and basic ways to reduce vibration.',
    },
    {
      publisher: 'Samsung Electronics America',
      title: 'Understanding the different noises coming from your Samsung refrigerator',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10007113/',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes normal cooling, defrosting, ice-making, and refrigerant sounds from very loud noise, grinding outside dispensing, and fan contact caused by ice buildup.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Refrigerator - Unusual Noises',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17473',
      sourceType: 'manufacturer',
      notes:
        'Says fan-blade contact sounds are abnormal and need service, and explains buzzing caused by an ice maker requesting water when its supply is off.',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'How to Troubleshoot Unusual Noises From Your LG Refrigerator',
      url: 'https://www.lg.com/us/support/help-library/how-to-troubleshoot-unusual-noises-from-your-lg-refrigerator--20155377726975',
      sourceType: 'manufacturer',
      notes:
        'Covers normal compressor, fan, refrigerant, defrost, and expansion sounds; identifies leveling, frost around a fan, and persistent loud motor noise as conditions to address.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Refrigerator and freezer appliance thermometer',
      description:
        'Confirms whether the noise is accompanied by a real cooling problem instead of relying on how the air or containers feel.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: "Model-specific owner's manual",
      description:
        'Identifies normal sounds, ice-maker controls, required clearances, leveling instructions, safe cleaning steps, and approved troubleshooting procedures.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bubble level',
      description:
        'Helps check whether an unstable or uneven installation is amplifying compressor and fan vibration.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance repair service',
      description:
        'Appropriate for persistent fan scraping, grinding, unusually loud motor noise, recurring errors, or any noise accompanied by cooling loss.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'buzzing-refrigerator',
      anchorText: 'Can I ignore a refrigerator that keeps buzzing?',
      relationshipType: 'sibling',
    },
    {
      slug: 'refrigerator-rattling',
      anchorText: 'Can I ignore a refrigerator that keeps rattling?',
      relationshipType: 'sibling',
    },
    {
      slug: 'refrigerator-clicking-on-and-off',
      anchorText: 'Can I ignore a refrigerator clicking on and off?',
      relationshipType: 'escalation',
    },
    {
      slug: 'refrigerator-running-constantly',
      anchorText: 'Can I ignore a refrigerator that runs constantly?',
      relationshipType: 'related',
    },
    {
      slug: 'fridge-not-cold-enough',
      anchorText: 'Can I ignore a refrigerator that is not cold enough?',
      relationshipType: 'escalation',
    },
  ],
};
