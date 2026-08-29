import type { ProblemSeed } from '../types';

export const sparkingMicrowave: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'sparking-and-damage',
  slug: 'sparking-microwave',
  canonicalPath: '/appliances/microwaves/sparking-and-damage/sparking-microwave/',
  name: 'Sparking Microwave',
  eyebrow: 'Appliances · Microwaves · Sparking & Damage',

  h1: 'Can I Ignore a Microwave That Sparks?',
  seoTitle: 'Microwave Sparking: When to Stop Using It and What to Check',
  metaDescription:
    'Stop the microwave when you see sparks. Learn when arcing comes from metal, food or residue and when repeated sparking means the oven needs service.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Not until you find the cause',

  shortAnswer:
    'No. Stop the microwave when it sparks. A brief arc from an obvious metal item or certain foods may not mean the oven is broken, but repeated or unexplained sparking can damage the oven and should not be ignored.',

  whyItMattersHeading: 'Why Is My Microwave Sparking?',
  whyItMatters: [
    'Sparks inside a microwave are called arcing. Common triggers include metal cookware, twist ties, metallic trim, improperly used foil, a rack touching the cavity, food residue and sometimes the food itself. USDA guidance says to turn the oven off immediately when arcing occurs, remove the offending item and switch to microwave-safe cookware or another cooking method.',
    'If you remove the obvious cause and the oven is clean and undamaged, the problem may be over. If it keeps sparking with microwave-safe cookware, or you see burned, rusted, scratched or otherwise damaged interior surfaces, stop using it and arrange service. A damaged door, hinge, latch or seal is a separate reason not to operate the microwave.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current USDA, FDA and manufacturer guidance on microwave arcing, cookware, cavity damage, cleaning and door safety.',
  disclaimer:
    'General appliance triage only. Follow the instructions for your microwave model, and stop using the appliance if there is smoke, flame, electrical damage or a damaged door.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'metal-utensil-or-twist-tie',
      label: 'A metal utensil or twist tie caused the sparks',
      shortDescription:
        'You can identify a fork, spoon, twist tie or other metal item that was inside when the arcing started.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Stop it and remove the metal',
      resultBody:
        'Metal can cause arcing. If you stopped the oven promptly and there is no visible damage, removing the offending item may solve the problem.',
      recommendedAction:
        'Stop the microwave, remove the metal and inspect the cavity before using microwave-safe cookware.',
    },
    {
      slug: 'metallic-trim-on-dish',
      label: 'The dish has metallic trim or decoration',
      shortDescription: 'The plate or bowl has gold, silver or other metallic edging, paint or glaze.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Use a different dish',
      resultBody: 'Metallic trim can arc even when the dish otherwise looks like ordinary ceramic or glass.',
      recommendedAction:
        'Stop the cycle and transfer the food to cookware that is labeled or known to be microwave-safe.',
    },
    {
      slug: 'foil-sparked',
      label: 'Aluminum foil sparked',
      shortDescription:
        'Foil was wrinkled, had exposed edges or was used in a way the microwave manual does not allow.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Stop the arcing',
      resultBody:
        'Improperly used foil can spark. USDA says wrinkled foil can cause arcing and advises removing foil shielding if sparks appear.',
      recommendedAction:
        "Stop the oven and remove the foil. Follow the owner's manual before using any foil in that microwave again.",
    },
    {
      slug: 'vegetable-sparked',
      label: 'The sparks came from the food itself',
      shortDescription:
        'The arcing appeared on food such as carrots or other vegetables and no metal item is present.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The food can be the cause',
      resultBody:
        'USDA and appliance manufacturers note that some foods can arc. That does not automatically mean the microwave has failed.',
      recommendedAction:
        "Stop the cycle. Use another cooking method or follow the manufacturer's guidance for that food and confirm the oven does not spark with normal microwave-safe use.",
    },
    {
      slug: 'food-residue-inside',
      label: 'There is burned-on food or grease inside',
      shortDescription:
        'The cavity, rack supports or door-contact area has visible residue or carbonized splatter.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Clean it before using it again',
      resultBody:
        'Food buildup can cause arcing. Manufacturer guidance specifically lists soil and burned food residue as possible causes.',
      recommendedAction:
        "Let the oven cool, clean it according to the owner's manual and inspect the interior for burns or coating damage before using it again.",
    },
    {
      slug: 'sparks-after-cleaning',
      label: 'It still sparks after obvious causes are removed',
      shortDescription:
        'The oven is clean, you are using microwave-safe cookware and no metal or foil is present.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using the microwave',
      resultBody:
        'Repeated unexplained arcing can point to cavity damage or another fault that needs diagnosis.',
      recommendedAction:
        'Unplug the countertop unit if safe to do so, or switch off its circuit if appropriate, and arrange service according to the manufacturer.',
    },
    {
      slug: 'interior-burn-or-damage',
      label: 'You see a burn mark, rust, scratch or damaged coating',
      shortDescription: 'Sparking is coming from an area of visible cavity damage or scorching.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep testing it',
      resultBody:
        'Manufacturers warn that damaged interior surfaces can cause arcing and recommend discontinuing use when cavity damage is present.',
      recommendedAction:
        'Stop using the microwave and have the damaged cavity evaluated before operating it again.',
    },
    {
      slug: 'rack-touching-wall',
      label: 'A supplied metal rack is touching the microwave wall',
      shortDescription: 'Your model came with a rack, but it is out of position or touching the cavity.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Reposition it exactly as the manual says',
      resultBody:
        'Some microwaves are designed to use a metal rack in specific positions. If the rack touches the cavity or its supports are damaged, it can spark.',
      recommendedAction:
        "Stop the oven and check the rack, supports and owner's manual. Do not improvise the rack position.",
    },
    {
      slug: 'empty-microwave',
      label: 'The microwave sparked while empty',
      shortDescription: 'The oven was running with no food or liquid inside.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not run it empty again',
      resultBody:
        'Manufacturer guidance warns that operating a microwave empty can cause arcing and damage the cavity.',
      recommendedAction:
        "Stop the oven. Inspect for scorching or damage and follow the model's manual before using it again.",
    },
    {
      slug: 'smoke-flame-or-burning-smell',
      label: 'Sparks come with smoke, flame or an electrical burning smell',
      shortDescription:
        'The arcing is accompanied by visible smoke, flame, melting or a sharp electrical odor.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using it now',
      resultBody:
        'This is no longer a minor one-off arc. Continuing to energize the microwave can worsen overheating or damage.',
      recommendedAction:
        'Stop the microwave. If safe, disconnect power. Do not resume use until the cause has been identified and the appliance is safe.',
    },
    {
      slug: 'damaged-door-or-seal',
      label: 'The door, hinge, latch or seal is damaged',
      shortDescription: 'The microwave also has a door that is bent, warped, loose or does not close firmly.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not operate it',
      resultBody:
        'FDA guidance says not to use a microwave if the door does not close firmly or is bent, warped or otherwise damaged.',
      recommendedAction:
        'Stop using the microwave and contact the manufacturer or an appropriate service provider.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Arcing forms inside the cavity',
      description:
        'Metal, foil, residue, certain foods or damaged surfaces can create visible sparks or flashes while the microwave is operating.',
      severity: 'warning',
      chainLabel: 'Sparks appear',
    },
    {
      stageLabel: 'IF YOU STOP IT QUICKLY',
      title: 'A simple cause may be all that happened',
      description:
        'USDA and manufacturer guidance say brief arcing caught promptly may not damage the oven. Removing the offending utensil, foil or food can end the problem.',
      severity: 'caution',
      chainLabel: 'Cause removed',
    },
    {
      stageLabel: 'IF ARCING CONTINUES',
      title: 'The oven or cookware can be damaged',
      description: 'Appliance manufacturers warn that prolonged arcing can damage the oven and the utensil.',
      severity: 'warning',
      chainLabel: 'Repeated arcing',
    },
    {
      stageLabel: 'IF THE CAVITY IS DAMAGED',
      title: 'Sparking can keep coming back',
      description:
        'Burned, rusted, scratched or otherwise damaged interior surfaces can become a continuing source of arcing and require service.',
      severity: 'warning',
      chainLabel: 'Damage persists',
    },
    {
      stageLabel: 'IF THERE IS SMOKE, FLAME OR ELECTRICAL DAMAGE',
      title: 'Stop treating it as a cookware problem',
      description:
        'Smoke, flame, melting, electrical odor or damage around the door or power connection calls for immediate shutdown and inspection rather than another test cycle.',
      severity: 'danger',
      chainLabel: 'Unsafe to continue',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One brief spark from an obvious metal item and no visible damage',
      ignoreAnswer: 'Only after removing the cause',
      severity: 'caution',
      whatToDo:
        'Stop the oven, remove the item and inspect the cavity. Resume normal use only if the microwave is undamaged and no further arcing occurs.',
    },
    {
      situation: 'Metallic trim, twist tie or improper foil caused the sparks',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        "Stop the cycle and switch to microwave-safe cookware or follow the owner's manual for any model-approved foil use.",
    },
    {
      situation: 'Sparks appear only on certain food',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Stop the cycle. Use another cooking method or follow the manufacturer guidance for that food, then confirm the microwave behaves normally with ordinary microwave-safe use.',
    },
    {
      situation: 'Food residue or grease is visible where it sparked',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        "Clean the microwave according to the owner's manual and inspect the cavity before using it again.",
    },
    {
      situation: 'It sparks with microwave-safe cookware after cleaning',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop using the microwave and arrange service. Do not keep running test cycles to see whether the problem disappears.',
    },
    {
      situation: 'The cavity is burned, rusted, scratched or damaged',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Discontinue use and have the microwave evaluated before operating it again.',
    },
    {
      situation: 'Smoke, flame, melting or electrical odor appears',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop the microwave and disconnect power if safe. Do not resume use until the cause has been addressed.',
    },
    {
      situation: 'The door, hinge, latch or seal is damaged',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not operate the microwave. Contact the manufacturer or service provider for guidance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop the microwave when it arcs',
      body:
        'Press Stop or Cancel and let the arcing end. Do not leave the oven running to see whether the sparks stop on their own.',
    },
    {
      title: 'Remove obvious arcing triggers',
      body:
        'Check for metal utensils, twist ties, metallic trim, foil, metal fasteners or packaging that is not approved for microwave use.',
    },
    {
      title: 'Clean and inspect the cavity',
      body:
        "Once the oven is cool, remove food residue according to the owner's manual. Look for scorching, rust, scratches, peeling or other interior damage.",
    },
    {
      title: "Check the owner's manual before using racks or foil",
      body:
        'Some models allow specific racks or limited foil use. Use those items only in the way the manufacturer specifies.',
    },
    {
      title: 'Get service if sparking is unexplained or returns',
      body:
        'If the microwave sparks with normal microwave-safe cookware after obvious causes are removed, stop using it and arrange diagnosis.',
      destinationProblemSlug: 'burning-smell-from-microwave',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Sparking keeps returning',
      description: 'Repeated arcing after metal, residue and obvious food causes are removed needs diagnosis.',
      severity: 'danger',
    },
    {
      title: 'You see smoke or flame',
      description: 'Stop the microwave and disconnect power if it is safe to do so.',
      severity: 'danger',
    },
    {
      title: 'There is an electrical or chemical burning smell',
      description: 'Do not keep running the microwave to identify the smell.',
      severity: 'danger',
    },
    {
      title: 'The interior is burned, rusted or damaged',
      description: 'Cavity damage can itself become a source of arcing.',
      severity: 'warning',
    },
    {
      title: 'The door does not close firmly',
      description:
        'FDA guidance says not to operate a microwave with a bent, warped or otherwise damaged door.',
      severity: 'danger',
    },
    {
      title: 'The plug, cord or outlet shows heat or burning damage',
      description:
        'Stop using the appliance and avoid reconnecting it until the electrical problem is addressed.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does one spark mean my microwave is ruined?',
      answer:
        'Not necessarily. USDA and manufacturer guidance say arcing caught promptly may not damage the oven. Remove the cause and inspect the cavity before using it again.',
    },
    {
      question: 'Why did my microwave spark when there was no fork inside?',
      answer:
        'Metallic trim, foil, twist ties, food residue, a misplaced rack, certain foods or interior damage can all cause arcing.',
    },
    {
      question: 'Can carrots or vegetables really spark in a microwave?',
      answer:
        'Yes. USDA and manufacturers note that some foods can arc. Stop the cycle and follow the appliance guidance or use another cooking method.',
    },
    {
      question: 'Can I use aluminum foil in a microwave?',
      answer:
        "Only if your microwave's instructions allow it and you follow them exactly. USDA notes that wrinkled foil can arc and says to remove foil shielding immediately if sparks appear.",
    },
    {
      question: 'Why would a microwave-safe-looking plate spark?',
      answer:
        'Some dishes contain metallic paint, trim or glaze that is easy to miss. If the dish sparks, stop using it in the microwave.',
    },
    {
      question: 'Can dirty food splatter make a microwave spark?',
      answer: 'Yes. Manufacturer guidance lists food residue and soil buildup as possible causes of arcing.',
    },
    {
      question: 'Should I test the microwave again after it sparks?',
      answer:
        "Do not keep repeating test cycles when the cause is unknown. If an obvious removable cause is gone and the cavity is clean and undamaged, follow the owner's manual. If arcing returns, stop using it and arrange service.",
    },
    {
      question: 'Is a sparking microwave leaking radiation?',
      answer:
        'Sparking by itself does not prove microwave leakage. Door damage is a separate concern. FDA says not to use a microwave if the door does not close firmly or is bent, warped or otherwise damaged.',
    },
    {
      question: 'Can I repair the inside of a sparking microwave myself?',
      answer:
        "Cleaning removable food residue is routine. Burns, rust, damaged coatings or internal faults are different. Follow the manufacturer's service guidance rather than opening or modifying the microwave yourself.",
    },
    {
      question: 'What if the sparks happen only when the metal rack is installed?',
      answer:
        "Check the owner's manual. Some supplied racks are designed for specific positions and modes. If the rack or supports are damaged or the rack touches the cavity, stop using that setup.",
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Cooking with Microwave Ovens',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cooking-microwave-ovens',
      sourceType: 'government',
      notes:
        'Defines arcing, says to turn the oven off immediately when sparks appear, lists metal-related causes, notes that some foods can arc and explains safe cookware and foil practices.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Microwave Ovens',
      url: 'https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-ovens',
      sourceType: 'government',
      notes:
        'Covers microwave radiation safety and says not to operate an oven if the door does not close firmly or is bent, warped or otherwise damaged.',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'LG Microwave: Why is my Microwave Arcing or Sparking?',
      url: 'https://www.lg.com/us/support/help-library/lg-microwave-why-is-my-microwave-arcing-or-sparking--1430169363778',
      sourceType: 'manufacturer',
      notes:
        'Lists empty operation, improper cookware, rack position, food residue and cavity damage as causes; advises discontinuing use when the cavity is damaged.',
    },
    {
      publisher: 'Whirlpool',
      title: 'General Arcing and Sparking - Microwave Drawer',
      url: 'https://producthelp.whirlpool.com/Cooking/Microwaves/Built-In_Microwave/Drawer/Operation/General_Arcing_and_Sparking_-_Microwave_Drawer',
      sourceType: 'manufacturer',
      notes:
        'States that prolonged arcing can damage the oven or utensil and covers microwave-safe cookware, foil, vegetables and soil buildup as causes.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Microwave - Arcing or Making Sounds',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17875',
      sourceType: 'manufacturer',
      notes:
        'Covers common sounds, food spills and empty operation as causes of popping or arcing concerns and warns that empty operation can damage the interior.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Microwave owner's manual",
      description:
        'The model-specific source for approved cookware, rack positions, foil use, cleaning and service instructions.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Microwave-safe glass or ceramic cookware',
      description:
        'Useful for replacing dishes with metallic trim, metal fasteners or uncertain microwave compatibility.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer repair service',
      description:
        'Appropriate when arcing continues after obvious causes are removed or the cavity, door or electrical parts appear damaged.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'burning-smell-from-microwave',
      anchorText: 'What if my microwave smells like it is burning?',
      relationshipType: 'escalation',
    },
    {
      slug: 'damaged-microwave-door-seal',
      anchorText: 'Can I use a microwave with a damaged door seal?',
      relationshipType: 'escalation',
    },
    {
      slug: 'chipped-paint-inside-microwave',
      anchorText: 'Can I ignore chipped paint inside my microwave?',
      relationshipType: 'related',
    },
  ],
};
