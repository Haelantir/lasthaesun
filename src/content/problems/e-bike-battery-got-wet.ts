import type { ProblemSeed } from '../types';

export const eBikeBatteryGotWet: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'e-bike-batteries',
  slug: 'e-bike-battery-got-wet',
  canonicalPath: '/e-bikes-and-scooters/e-bike-batteries/e-bike-battery-got-wet/',
  name: 'Wet E-Bike Battery',
  eyebrow: 'Mobility · E-bikes & Scooters · E-Bike Batteries',

  h1: 'Can I Ignore an E-Bike Battery That Got Wet?',
  seoTitle: 'Wet E-Bike Battery: When Rain Is Fine and Water Means Stop',
  metaDescription:
    'Rain on a properly installed pack may be normal. Learn when to stop using or charging a wet e-bike battery and what flood exposure changes.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep riding or charge it?',
  canIUseItLabel: 'Only after minor, permitted wetting and a dry check',

  shortAnswer:
    'Probably not until you identify how wet it got. Ordinary rain on an intact, correctly installed battery may be within the bike’s design, but immersion, floodwater, direct jet washing, wet terminals, or charging while wet calls for stopping use and getting model-specific guidance.',

  whyItMattersHeading: 'Water Resistance Has Limits',
  whyItMatters: [
    'E-bike batteries are sealed electrical assemblies, not universally waterproof boxes. Some certified systems and manufacturer manuals allow wet-weather riding or light splashing, while the same instructions prohibit immersion, pressure washing, wet connectors, or charging in wet conditions. The exact manual and any water-resistance marking set the limit.',
    'If water reaches contacts or internal electronics, it can cause faults or corrosion. If a cell or protection circuit is damaged, applying charge can add heat and raise the risk of fire. U.S. fire-safety guidance treats flood-exposed lithium-ion devices more seriously than equipment that was merely ridden in rain.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It Immediately If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Wet-weather use, immersion, charging, warning signs, and disposal checked against U.S. fire-safety, CPSC, EPA, Shimano, Electra, and ULSE guidance.',
  disclaimer:
    'General guidance only. Water resistance, port design, and post-exposure procedures vary by battery and bike. Follow the instructions for your exact model, and do not open the battery housing.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'rain-ride-installed',
      label: 'You rode in rain with the battery installed normally',
      shortDescription:
        'The pack was locked into its intended mount, port covers were closed, and the bike was not submerged or pressure-washed.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Usually within normal wet-weather use',
      resultBody:
        'Many e-bike systems are designed for rain or light splashing, but only within the limits stated for that model. A sealed, undamaged pack in its intended mount is different from a loose pack with exposed contacts.',
      recommendedAction:
        'Power the bike off after the ride, wipe the pack and mount, and confirm that the charge port and connectors are fully dry before charging. Follow any stricter instructions in your manual.',
    },
    {
      slug: 'loose-pack-left-in-rain',
      label: 'The removable battery was left outside in heavy rain',
      shortDescription:
        'The pack was off the bike or stored where its contacts, charge port, seams, or release mechanism were exposed to a downpour.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Do not assume the loose pack is rain-safe',
      resultBody:
        'Off-bike storage can expose terminals and openings differently from installed wet-weather riding. A dry-looking exterior does not confirm that water stayed outside the pack or connector area.',
      recommendedAction:
        'Do not turn it on or charge it. Keep it disconnected, inspect accessible ports and seals without opening the housing, and ask the manufacturer or an authorized e-bike dealer whether inspection is required.',
    },
    {
      slug: 'wet-terminals-or-charge-port',
      label: 'The battery terminals or charge port are visibly wet',
      shortDescription:
        'Water is present in the connector, around the contacts, under a port cover, or on the charger plug.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Keep the electrical connection de-energized',
      resultBody:
        'Manufacturer instructions warn against connecting wet terminals or handling a wet charging plug because wet electrical interfaces can cause overheating, ignition, or electric shock.',
      recommendedAction:
        'Keep the battery off and the charger unplugged. Blot accessible moisture with a dry lint-free cloth without probing the contacts. Reconnect only when everything is fully dry and the exact product instructions permit it.',
    },
    {
      slug: 'pressure-washed-or-directly-jetted',
      label: 'The battery or bike was pressure-washed or hit with a direct water jet',
      shortDescription:
        'Concentrated spray was aimed at the pack, charging port, battery mount, seams, controls, or other electrical parts.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A water jet can defeat normal weather sealing',
      resultBody:
        'Manufacturer guidance distinguishes rain from concentrated spray. A direct jet can force water into sensitive areas and lead to electrical faults or corrosion even if the bike initially works.',
      recommendedAction:
        'Stop using and charging the pack. Dry accessible surfaces and arrange model-specific advice or inspection, especially if the jet reached a seam, connector, control panel, or battery mount.',
    },
    {
      slug: 'briefly-immersed-in-puddle',
      label: 'The battery or its compartment went into a deep puddle',
      shortDescription: 'The pack was partly or briefly underwater rather than merely splashed by the tires.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Immersion is outside ordinary rain protection',
      resultBody:
        'Water resistance for rain or splashing does not provide blanket permission for immersion. Water may reach openings and internal pathways that remain protected during normal wet-weather riding.',
      recommendedAction:
        'Do not use or charge it. Keep it disconnected away from combustible materials and contact the battery manufacturer or an authorized dealer for handling, inspection, and possible replacement instructions.',
    },
    {
      slug: 'submerged-floodwater-or-saltwater',
      label: 'The battery was submerged, flooded, or exposed to saltwater',
      shortDescription:
        'The pack went fully underwater, sat in floodwater, fell into a body of water, or was soaked by saltwater.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat it as a potentially damaged battery',
      resultBody:
        'U.S. fire-safety guidance calls for special precautions after lithium-ion batteries are flooded. Battery instructions also warn that immersion or wet terminals can lead to overheating, bursting, or ignition.',
      recommendedAction:
        'Disconnect charging power if safe and do not turn the battery on. If it is stable and safe to move, place it in a dry outdoor area away from structures and combustibles while seeking fire-department and manufacturer guidance. Do not move a hot, hissing, smoking, or leaking pack.',
    },
    {
      slug: 'charged-after-getting-wet',
      label: 'The battery was connected to a charger after getting wet',
      shortDescription: 'Charging began before the pack, charge port, mount, or plug was confirmed dry.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop charging without touching a wet connection',
      resultBody:
        'Charging can energize a wet connector or water-damaged circuit. Continued normal charging is not a safe way to test whether the pack survived.',
      recommendedAction:
        'If the area is safe and dry enough to approach, switch power off at the wall before touching the charger. Leave the pack disconnected and obtain manufacturer or dealer guidance before using it again.',
    },
    {
      slug: 'error-or-cutout-after-wetting',
      label: 'The battery now shows an error, will not turn on, or cuts out',
      shortDescription:
        'The bike developed a battery warning, charger fault, intermittent assist, or complete loss of power after the water exposure.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The wetting may have caused an electrical fault',
      resultBody:
        'A new malfunction after water exposure is not proof that the battery only needs more drying. Repeatedly turning it on or reconnecting the charger can keep energizing a damaged or corroding circuit.',
      recommendedAction:
        'Stop testing and charging it. Record the error, exposure, and battery model, then arrange diagnosis through the manufacturer or an authorized e-bike service provider.',
    },
    {
      slug: 'heat-smoke-hissing-or-leak',
      label: 'The wet battery is hot, swollen, leaking, hissing, popping, or smoking',
      shortDescription: 'The pack shows signs of active failure after the water exposure.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Move away and treat it as an emergency',
      resultBody:
        'Heat, smoke, vapor, odd noises, swelling, and leakage are recognized warning signs of lithium-ion battery failure. The pack should not be handled as a routine wet electronic device.',
      recommendedAction:
        'Do not touch, carry, charge, or operate it. Move everyone away and call 911 from a safe location. Tell responders that an e-bike lithium-ion battery is involved.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The water may remain outside—or reach an electrical opening',
      description:
        'Rain on an intact installed pack may stay on the exterior. Immersion, exposed ports, damaged seals, or concentrated spray can let water reach contacts or electronics.',
      severity: 'info',
      chainLabel: 'Water exposure',
    },
    {
      stageLabel: 'IF WATER REACHES CONNECTIONS',
      title: 'The connector or protection system can develop a fault',
      description:
        'Wet contacts can create unintended electrical paths. The bike may show an error, lose assist, refuse to charge, or appear normal despite hidden moisture.',
      severity: 'caution',
      chainLabel: 'Wet connection',
    },
    {
      stageLabel: 'IF POWER IS APPLIED',
      title: 'Charging or operation can add electrical stress',
      description:
        'Energizing a wet or damaged interface can cause overheating, ignition, electric shock, or failure of electrical components.',
      severity: 'warning',
      chainLabel: 'Electrical fault',
    },
    {
      stageLabel: 'IF CORROSION OR INTERNAL DAMAGE DEVELOPS',
      title: 'The problem may become intermittent or permanent',
      description:
        'Moisture and residue can corrode terminals or internal circuitry, while damaged seals or cells can make the battery unsuitable for further use.',
      severity: 'warning',
      chainLabel: 'Battery damage',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'A damaged lithium-ion pack can enter thermal runaway',
      description:
        'An internal short or failed protection system can lead to rapid self-heating, toxic off-gassing, fire, or explosion.',
      severity: 'danger',
      chainLabel: 'Fire hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation:
        'The pack was installed correctly during ordinary rain, and the manual allows wet-weather riding',
      ignoreAnswer: 'Yes, after a dry check',
      severity: 'info',
      whatToDo:
        'Wipe the bike down and confirm that ports, connectors, and the battery mount are fully dry before charging.',
    },
    {
      situation: 'Only the exterior received a light splash, with closed covers and dry contacts',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Inspect the casing, seams, covers, and connections. Resume normal use only if the exposure falls within the manual’s stated limits.',
    },
    {
      situation: 'A removable pack was left in a downpour off the bike',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep it off and disconnected. Contact the manufacturer or an authorized dealer if terminals were soaked, water pooled near openings, or internal exposure cannot be ruled out.',
    },
    {
      situation: 'Water is visible in the charge port, plug, mount, or terminals',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not connect the battery or charger. Dry accessible surfaces without inserting tools and follow the model’s instructions before reuse.',
    },
    {
      situation: 'The pack was pressure-washed or directly sprayed',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using and charging it until you receive model-specific guidance or inspection, especially if the spray hit connectors or seams.',
    },
    {
      situation: 'The battery was briefly or partly underwater',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Treat it as possible water damage. Keep it disconnected and arrange manufacturer or authorized-service assessment rather than testing it yourself.',
    },
    {
      situation: 'The pack was submerged in floodwater, saltwater, or a body of water',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not use or charge it. Follow local fire-department and manufacturer directions for safe isolation, handling, and disposal.',
    },
    {
      situation: 'The battery is hot, leaking, swollen, noisy, or producing smoke',
      ignoreAnswer: 'No — emergency',
      severity: 'danger',
      whatToDo: 'Do not handle it. Move away, keep others back, and call 911 from a safe location.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Disconnect power without touching wet connections',
      body:
        'Turn the bike off. If it is charging and the area is dry enough to approach safely, cut power at the wall before touching the charger. Do not handle a wet plug, hot pack, or smoking device.',
    },
    {
      title: 'Classify the exposure before deciding to reuse it',
      body:
        'Check the exact manual and label. Ordinary rain with closed ports is not the same as a loose pack in a downpour, direct jet washing, immersion, floodwater, or saltwater. If you cannot place it confidently within permitted wet-weather use, do not charge it.',
    },
    {
      title: 'Dry only accessible surfaces',
      body:
        'Remove the battery only if the instructions allow and it can be done safely. Wipe the casing, mount, port covers, and accessible connectors with a dry lint-free cloth. Let them air-dry; do not open the pack, apply high heat, or insert objects into contacts.',
    },
    {
      title: 'Arrange battery-system inspection when exposure was significant',
      body:
        'Use the manufacturer or authorized e-bike service after immersion, a direct water jet, pooled water in a connector, a broken seal, or any error, cutout, corrosion, or charging abnormality. A sealed battery pack is not a do-it-yourself repair.',
      destinationProblemSlug: 'e-bike-error-code',
    },
    {
      title: 'Use a damaged-battery disposal channel if the pack is retired',
      body:
        'Contact a household hazardous waste program or battery recycler that accepts damaged large-format lithium-ion packs. Do not put the battery in household trash, curbside recycling, or an ordinary retail collection bin without approval.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Smoke or a cloud of vapor appears',
      description:
        'Move away and call 911. Do not carry the battery through the building or attempt a normal repair.',
      severity: 'danger',
    },
    {
      title: 'The battery hisses, pops, crackles, or vents',
      description:
        'These sounds can accompany active battery failure. Keep everyone away and contact emergency services.',
      severity: 'danger',
    },
    {
      title: 'The pack becomes unusually or rapidly hot',
      description: 'Stop charging and handling it. Heat after water exposure needs immediate escalation.',
      severity: 'danger',
    },
    {
      title: 'The casing swells, changes shape, or separates',
      description:
        'Do not press, puncture, open, or reinstall the pack. Arrange safe handling and replacement.',
      severity: 'danger',
    },
    {
      title: 'Liquid leaks from the battery',
      description:
        'Avoid skin and eye contact. Keep people and pets away and obtain emergency or manufacturer guidance appropriate to the situation.',
      severity: 'danger',
    },
    {
      title: 'A seal, seam, port cover, or casing is cracked or missing',
      description:
        'Water protection may already be compromised. Do not use or charge the battery after wetting.',
      severity: 'warning',
    },
    {
      title: 'New errors, cutouts, corrosion, or charger faults appear',
      description:
        'Stop repeated testing. The battery and electrical system need diagnosis before normal use resumes.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I ride an e-bike in the rain?',
      answer:
        'Often, yes, if the exact bike and battery instructions allow wet-weather riding, the battery is installed correctly, and every port cover is closed. Rain permission does not include immersion or pressure washing.',
    },
    {
      question: 'Are e-bike batteries waterproof?',
      answer:
        'Not as a blanket rule. Water resistance varies by product and may cover rain or splashing without covering a loose battery left outside, a direct jet, or submersion. Check the exact manual and water-resistance marking.',
    },
    {
      question: 'Can I charge the battery once the outside feels dry?',
      answer:
        'Only if the exposure was within the manufacturer’s permitted conditions and the charge port, plug, mount, and terminals are fully dry. If the pack was immersed, pressure-washed, flooded, or developed a fault, get guidance before charging.',
    },
    {
      question: 'How should I dry a wet e-bike battery?',
      answer:
        'Turn it off, disconnect it from charging power, and wipe only accessible exterior surfaces with a dry lint-free cloth. Let connectors air-dry without opening the housing or inserting anything into the contacts. Significant exposure needs assessment, not just drying.',
    },
    {
      question: 'Can I put the battery in rice or use a hair dryer?',
      answer:
        'No. Rice cannot confirm that internal moisture is gone, and concentrated heat can damage a lithium-ion battery. Use gentle air-drying for accessible surfaces and follow the manufacturer’s instructions.',
    },
    {
      question: 'What if the battery still turns on and works normally?',
      answer:
        'Normal operation does not prove that water stayed outside or that corrosion will not develop. It is reassuring only after minor exposure that the manual expressly permits, with dry connections and no damage or warning signs.',
    },
    {
      question: 'Does UL certification mean the battery can be submerged?',
      answer:
        'No. UL standards evaluate products under specified conditions, and normal-use testing can include light rain or splashing puddles. Certification is not permission for unlimited water exposure; the product’s rating and instructions still control.',
    },
    {
      question: 'What if only the battery contacts got wet?',
      answer:
        'Do not connect or charge them while wet. Manufacturer instructions warn that wet terminals or plugs can create overheating, ignition, or electric-shock hazards. Dry accessible surfaces and investigate any pooled water or corrosion.',
    },
    {
      question: 'What should I do after saltwater or floodwater exposure?',
      answer:
        'Do not use or charge the pack. Treat it as potentially damaged, keep away from it if warning signs appear, and contact the local fire department, manufacturer, or damaged-battery disposal program for instructions.',
    },
    {
      question: 'Can I throw away a water-damaged e-bike battery?',
      answer:
        'No. Lithium-ion batteries do not belong in household trash or curbside recycling. Contact the manufacturer, an appropriate battery recycler, or your local household hazardous waste program and state that the battery may be water-damaged.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Fire Administration',
      title: 'Lithium-Ion Battery Safety After Flooding',
      url: 'https://www.usfa.fema.gov/downloads/pdf/publications/lithium-ion-battery-after-flooding-handout.pdf',
      sourceType: 'government',
      notes:
        'Advises disconnecting potentially flooded lithium-ion devices from chargers, moving stable flooded devices away from buildings, calling the fire department for smoke or hissing, and keeping them out of trash and recycling.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Micromobility: E-Bikes, E-Scooters and Hoverboards',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Micromobility-Information-Center',
      sourceType: 'government',
      notes:
        'Recommends certified micromobility products, manufacturer-directed charging, attended charging, approved chargers and batteries, and proper recycling rather than household trash.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Used Lithium-Ion Batteries',
      url: 'https://www.epa.gov/recycle/used-lithium-ion-batteries',
      sourceType: 'government',
      notes:
        'Directs consumers not to use household trash or municipal recycling, recommends specialized recycling or hazardous waste programs, and says to contact the manufacturer for handling information when a battery is damaged.',
    },
    {
      publisher: 'Shimano',
      title: "Lithium Ion Battery User's Manual UM-70F5A",
      url: 'https://si.shimano.com/en/pdfs/um/70F5A/UM-70F5A.pdf',
      sourceType: 'manufacturer',
      notes:
        'Warns against immersion and wet terminals, charging in wet conditions, handling wet plugs, using damaged or abnormally behaving batteries, and opening the battery housing.',
    },
    {
      publisher: 'Electra Bicycle Company',
      title: 'Electric Bike Maintenance',
      url: 'https://electra.trekbikes.com/us/en_US/electric-bike-maintenance/',
      sourceType: 'manufacturer',
      notes:
        'Advises avoiding high-pressure water jets, wiping the battery with a dry cloth, keeping connections clean, and ensuring the battery is completely dry before recharging.',
    },
    {
      publisher: 'UL Standards & Engagement',
      title: 'Ensuring Safe, Sustainable E-Mobility Transportation',
      url: 'https://ulse.org/wp-content/uploads/2025/06/ULSE-E-Bike-Toolkit-Update-6.13.25.pdf',
      sourceType: 'standards_body',
      notes:
        'Explains UL 2849 and UL 2271 coverage, normal-use testing that can include light rain and splashing puddles, and the thermal-runaway hazards of damaged or malfunctioning lithium-ion batteries.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Exact Battery and E-Bike Owner’s Manual',
      description:
        'Use the model number on the pack and bike to find the manufacturer’s water-resistance limits, charging precautions, removal procedure, and post-exposure instructions.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Authorized E-Bike Battery Service',
      description:
        'A provider approved for the battery system can inspect connectors, retrieve diagnostic information, and determine whether the sealed pack should return to service or be replaced.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Household Hazardous Waste or Damaged-Battery Program',
      description:
        'Confirm that the facility accepts large-format, damaged lithium-ion e-bike batteries before transporting the pack.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Recall and Safety-Certification Lookup',
      description:
        'Check whether the battery or bike is covered by a CPSC warning or recall and verify certification claims through the named accredited testing organization.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'swollen-e-bike-battery',
      anchorText: 'Is the e-bike battery swollen?',
      relationshipType: 'escalation',
    },
    {
      slug: 'e-bike-battery-hot-while-charging',
      anchorText: 'Why is the battery hot while charging?',
      relationshipType: 'escalation',
    },
    {
      slug: 'e-bike-error-code',
      anchorText: 'Can I ignore an e-bike error code?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'e-bike-cuts-out-while-riding',
      anchorText: 'Why does the e-bike cut out while riding?',
      relationshipType: 'follow_up',
    },
  ],
};
