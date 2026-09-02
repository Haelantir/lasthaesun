import type { ProblemSeed } from '../types';

export const wobblingCeilingFan: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'ceiling-fans',
  slug: 'wobbling-ceiling-fan',
  canonicalPath: '/home/electrical/ceiling-fans/wobbling-ceiling-fan/',
  name: 'Wobbling ceiling fan',
  eyebrow: 'Home · Electrical · Ceiling Fans',

  h1: 'Can I Ignore a Wobbling Ceiling Fan?',
  seoTitle: 'Wobbling Ceiling Fan: When It Could Fall and What to Check',
  metaDescription:
    'A small wobble may be a blade-balance problem, but a moving canopy, loose box, damaged blade, or electrical signs mean stop the fan and get it checked.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the fan?',
  canIUseItLabel: 'Not until the cause is checked',

  shortAnswer:
    'Probably not. A slight, steady wobble is often a balance or loose-hardware issue, but movement at the canopy, outlet box, or ceiling can mean the support is not secure. Turn the fan off until you check it, and keep it off for damage, worsening movement, electrical warning signs, or a recall match.',

  whyItMattersHeading: 'Why a Wobbling Fan Deserves a Closer Look',
  whyItMatters: [
    'Uneven dust, loose blade screws, poor blade alignment, or a warped blade can unbalance the rotating assembly. These causes are often repairable, but they should be corrected rather than accepted as normal operation.',
    'The concern changes when the canopy, mounting bracket, outlet box, or surrounding ceiling moves. A ceiling fan needs a box or structural support suitable for fan use and correctly assembled mounting hardware. CPSC recalls have documented specific defective fans and brackets that allowed blades or entire fans to fall. That does not mean every wobble predicts a fall, but mounting movement and damaged parts require immediate shutoff.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Fan If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Wobble causes, blade balance, fan-rated support, falling-part hazards, recall checks, and shutoff guidance were checked against EPA, CPSC, and manufacturer materials.',
  disclaimer:
    'General U.S. household guidance only. Model instructions and recall remedies take priority. Do not work on energized wiring or stand beneath a fan that appears loose or damaged.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'chain-moving-not-fan',
      label: 'Only the pull chain or light chain is swinging',
      shortDescription:
        'The chain moves in the airflow, but the motor housing, downrod, canopy, and blades remain steady.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'That is not a wobbling fan',
      resultBody:
        'A moving chain can look or sound like fan movement without indicating that the fan assembly is loose.',
      recommendedAction:
        'Confirm from the floor that the housing and canopy stay fixed. Adjust the chain only as the fan manual allows.',
    },
    {
      slug: 'barely-visible-stable-movement',
      label: 'The movement is barely visible and has not changed',
      shortDescription:
        'The fan has minimal movement, the canopy stays tight to the ceiling, and there is no damage, noise, odor, or loose hardware.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Low concern after the mounting is confirmed',
      resultBody:
        'Very slight, stable movement is less concerning than a wide or worsening side-to-side swing. It is still worth checking blade cleanliness, fasteners, alignment, and mounting.',
      recommendedAction:
        'Turn the fan off, inspect it according to the owner’s manual, and correct any imbalance before the movement becomes more noticeable.',
    },
    {
      slug: 'uneven-dust-on-blades',
      label: 'The wobble appeared as dust built up on the blades',
      shortDescription:
        'The blades are visibly dusty, but no blade, bracket, canopy, or ceiling part appears loose or damaged.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Clean and rebalance before assuming a larger fault',
      resultBody:
        'Uneven debris can change blade balance. Cleaning may correct the wobble if the mounting and blade hardware are secure.',
      recommendedAction:
        'De-energize the fan, clean every blade evenly, check the accessible blade screws, and retest from a safe position.',
    },
    {
      slug: 'loose-blade-hardware',
      label: 'A blade or blade screw is loose',
      shortDescription:
        'One blade shifts by hand, a blade fastener is backing out, or a blade holder is not firmly attached.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not run it with loose blade hardware',
      resultBody:
        'A rotating loose blade or holder can move farther out of alignment and may detach if the connection fails.',
      recommendedAction:
        'Keep the fan off. Follow the model instructions to secure the correct hardware, or arrange service if threads, brackets, or mounting holes are damaged.',
    },
    {
      slug: 'damaged-or-mismatched-blade',
      label: 'A blade is cracked, warped, bent, or different from the others',
      shortDescription:
        'A blade or blade holder is visibly damaged, or replacement blades do not form a matched set.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Balancing weights cannot repair structural damage',
      resultBody:
        'A balancing kit may correct small weight differences, but it cannot make a cracked, deformed, or incompatible blade safe.',
      recommendedAction:
        'Stop using the fan and obtain the correct model-specific replacement parts. Replace the fan if safe compatible parts are unavailable.',
    },
    {
      slug: 'sudden-or-worsening-wobble',
      label: 'The wobble started suddenly or is getting stronger',
      shortDescription:
        'A previously steady fan now swings noticeably, or the movement has increased without an obvious harmless explanation.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A change in behavior needs inspection',
      resultBody:
        'Sudden or increasing movement can indicate loosened hardware, damaged blades, a displaced hanger assembly, or a mounting problem.',
      recommendedAction:
        'Turn the fan off and do not use a lower speed as a workaround. Have the blades, downrod, bracket, outlet box, and structural attachment checked.',
    },
    {
      slug: 'mount-or-ceiling-moving',
      label: 'The canopy, outlet box, or ceiling moves',
      shortDescription:
        'The canopy shifts, a gap opens at the ceiling, the box feels loose, or the fan may have replaced a light fixture without confirmed fan-rated support.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a mounting problem',
      resultBody:
        'Blade balancing will not secure a loose bracket, unsuitable outlet box, or inadequate structural attachment. Continued operation can load a support that is already moving.',
      recommendedAction:
        'Keep the fan off and clear the area beneath it. Have a qualified electrician or installer confirm the box, bracket, fasteners, and structural support.',
    },
    {
      slug: 'wobble-with-contact-noise',
      label: 'The fan wobbles with clicking, clunking, scraping, or rubbing',
      shortDescription:
        'The movement comes with repeated mechanical noise or visible contact between fan components.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Something may be loose or contacting another part',
      resultBody:
        'Clicking can come from loose blade hardware, while scraping or clunking may indicate incorrect assembly, damaged parts, or movement at a connection.',
      recommendedAction:
        'Switch the fan off and let it stop. Do not reach toward moving blades; inspect only after the fan is de-energized.',
    },
    {
      slug: 'wobble-with-electrical-warning',
      label: 'There is a burning odor, crackling, sparking, heat, or a breaker trip',
      shortDescription: 'Mechanical movement is accompanied by signs of an electrical fault or overheating.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Shut off power and treat it as an electrical hazard',
      resultBody:
        'Wobble does not explain away electrical warning signs. Damaged, pinched, loose, or overheating connections require separate attention.',
      recommendedAction:
        'Turn off the affected circuit if you can do so safely. Do not open the canopy or touch damaged parts; arrange urgent electrical service and follow local emergency guidance for smoke or fire.',
    },
    {
      slug: 'fan-matches-recall',
      label: 'The brand and model match a CPSC recall',
      shortDescription:
        'A recall covers the fan, blades, mounting assembly, or another component identified on the product.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Follow the recall remedy instead of troubleshooting around it',
      resultBody:
        'Recall instructions are specific to the affected model and may require immediate shutoff, inspection, repair, replacement, or disposal.',
      recommendedAction:
        'Stop using the fan and follow the CPSC and recalling company instructions. Do not substitute balancing for the required recall remedy.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The rotating assembly is out of balance',
      description: 'The fan moves instead of keeping its motor housing centered and steady.',
      severity: 'caution',
      chainLabel: 'Imbalance',
    },
    {
      stageLabel: 'IF HARDWARE IS LOOSE',
      title: 'Movement continues at the connection',
      description:
        'Blade screws, holders, downrod hardware, light-kit parts, or mounting components may shift or make contact.',
      severity: 'warning',
      chainLabel: 'Loose parts',
    },
    {
      stageLabel: 'IF THE SUPPORT SHIFTS',
      title: 'The bracket, box, or ceiling can be damaged',
      description:
        'Operation can keep loading a mounting point that is not firmly secured or suitable for supporting the fan.',
      severity: 'warning',
      chainLabel: 'Mount movement',
    },
    {
      stageLabel: 'IF A BLADE CONNECTION FAILS',
      title: 'A blade or holder can detach',
      description:
        'CPSC recalls show that defective blade components on certain fan models have separated during use and created impact hazards.',
      severity: 'danger',
      chainLabel: 'Falling part',
    },
    {
      stageLabel: 'IF THE HANGER OR BOX FAILS',
      title: 'The fan can fall',
      description:
        'A failed mounting bracket, outlet box, or structural attachment can allow part or all of the fan to separate from the ceiling.',
      severity: 'danger',
      chainLabel: 'Fan fall',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Only a pull chain is swinging while the fan assembly stays steady',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Confirm that the canopy, downrod, housing, and blades are not moving abnormally.',
    },
    {
      situation: 'Movement is barely visible, stable, and remains after the mounting is confirmed secure',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Check cleanliness, blade alignment, fasteners, and balance according to the owner’s manual.',
    },
    {
      situation: 'Cleaning and tightening accessible blade hardware do not correct the wobble',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Keep troubleshooting with the model instructions or arrange service before normal use.',
    },
    {
      situation: 'The wobble appeared suddenly or continues to get worse',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Turn the fan off and have the blades, hanger assembly, bracket, and support inspected.',
    },
    {
      situation: 'A blade, blade holder, light kit, or fastener is loose or damaged',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not run the fan until the correct part is securely repaired or replaced.',
    },
    {
      situation: 'The canopy, outlet box, or surrounding ceiling moves',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Keep clear beneath the fan and have its mounting and structural support checked.',
    },
    {
      situation: 'There is crackling, sparking, heat, burning odor, smoke, or a breaker trip',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Shut off the affected circuit if safe and arrange urgent electrical help.',
    },
    {
      situation: 'The fan matches a product recall',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using it and complete the recall remedy supplied for that model.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Turn the fan off before inspecting it',
      body:
        'Wait for the blades to stop completely. Keep people and pets away from beneath a fan that swings widely, hangs crooked, or appears loose.',
    },
    {
      title: 'De-energize it before touching hardware',
      body:
        'Turn off the circuit before cleaning blades, tightening hardware, opening a canopy, or working near wiring. Do not rely on a remote control to prevent the fan from starting.',
    },
    {
      title: 'Check the blades before adding balance weights',
      body:
        'Clean every blade evenly and look for looseness, cracks, warping, bent holders, missing fasteners, and mismatched replacement parts. Use only compatible model-specific parts.',
    },
    {
      title: 'Confirm the mounting is secure',
      body:
        'The canopy, mounting bracket, outlet box, and surrounding ceiling should not shift with the fan. If the box is loose or its fan-support rating cannot be confirmed, have a qualified electrician inspect it.',
    },
    {
      title: 'Balance only after ruling out damage and mounting problems',
      body:
        'Follow the fan manufacturer’s balancing procedure. A balancing kit can correct uneven blade weight, but it cannot repair a loose box, defective bracket, damaged blade, or incorrectly assembled downrod.',
    },
    {
      title: 'Check the brand and model for recalls',
      body:
        'Search the CPSC ceiling-fan recall listings using the fan’s brand and model information. Follow the specified remedy if there is a match.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The canopy or ceiling box moves',
      description:
        'Movement at the ceiling points to the bracket, outlet box, fasteners, or structural support rather than simple blade balance.',
      severity: 'danger',
    },
    {
      title: 'The fan hangs crooked or a ceiling gap is opening',
      description: 'A changed position or widening gap can indicate that the hanger or support is shifting.',
      severity: 'danger',
    },
    {
      title: 'A blade or blade holder is cracked, bent, or loose',
      description: 'Do not operate a fan with damaged or unsecured rotating parts.',
      severity: 'danger',
    },
    {
      title: 'The wobble is sudden, strong, or getting worse',
      description:
        'A clear change from the fan’s previous operation deserves prompt mounting and hardware inspection.',
      severity: 'warning',
    },
    {
      title: 'Parts click, clunk, scrape, or strike each other',
      description:
        'Repeated contact or mechanical noise can indicate loose hardware, damage, or incorrect assembly.',
      severity: 'warning',
    },
    {
      title: 'You smell burning or hear crackling or sizzling',
      description:
        'Shut off power if safe and arrange electrical service. These are not ordinary balance symptoms.',
      severity: 'danger',
    },
    {
      title: 'The fan sparks, smokes, feels abnormally hot, or trips the breaker',
      description: 'Treat this as an electrical hazard rather than continuing mechanical troubleshooting.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can a wobbling ceiling fan actually fall?',
      answer:
        'Yes, if its mounting support or a major fan component fails. Wobble alone does not prove that a fall is imminent, but a moving canopy, loose box, damaged bracket, or crooked fan makes that risk more credible.',
    },
    {
      question: 'Is a tiny amount of ceiling-fan movement normal?',
      answer:
        'Do not use “a little movement is normal” as proof that the mounting is safe. Barely visible, stable movement after the mounting and blades are checked is lower concern than a pronounced or worsening side-to-side swing.',
    },
    {
      question: 'Can dust really cause a ceiling fan to wobble?',
      answer:
        'Uneven dust accumulation can affect blade balance. Clean every blade evenly, then check the fasteners and retest before assuming the problem is fixed.',
    },
    {
      question: 'What if the fan only wobbles on high speed?',
      answer:
        'Higher speed can make an imbalance more visible, but it does not rule out loose hardware or mounting trouble. Inspect the fan instead of permanently limiting it to a lower speed.',
    },
    {
      question: 'Will a ceiling-fan balancing kit fix the problem?',
      answer:
        'It can correct uneven blade weight after the fan is securely mounted and its blades are undamaged. It cannot fix a loose outlet box, warped blade, cracked holder, incorrect downrod assembly, or defective component.',
    },
    {
      question: 'How can I tell whether the outlet box is fan-rated?',
      answer:
        'A fan-support box is listed and marked for that purpose. If the marking cannot be confirmed without opening the canopy, or the box moves, have a qualified electrician check it rather than assuming a former light-fixture box is suitable.',
    },
    {
      question: 'Can I keep using the fan on low speed?',
      answer:
        'Not when the wobble is new or worsening, the mounting moves, a blade is damaged, parts make contact, or there are electrical warning signs. Lower speed does not repair the cause.',
    },
    {
      question: 'Why would a newly installed ceiling fan wobble?',
      answer:
        'Possible causes include blade alignment, loose hardware, an incorrectly seated hanger ball, downrod assembly, an unbalanced blade set, or an outlet box that is not securely supported. Ask the installer to recheck the complete installation.',
    },
    {
      question: 'Should I replace the blades or the entire fan?',
      answer:
        'Loose hardware or a minor balance problem may be correctable. Replace damaged blades only with the correct matched parts. Replace or professionally repair the fan when its hub, motor attachment, bracket, or other critical component is damaged or covered by a replacement remedy.',
    },
    {
      question: 'How do I check whether my fan was recalled?',
      answer:
        'Find the brand and model from the manual, purchase records, or the label location specified by the manufacturer, then search the CPSC ceiling-fan recall listings. Do not energize or dismantle an unsafe-looking fan just to reach a label.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency ENERGY STAR',
      title: 'Ceiling Fan Installation and Usage Tips',
      url: 'https://www.energystar.gov/products/ceiling_fans/installation-and-usage-tips',
      sourceType: 'government',
      notes:
        'Advises using an outlet box marked for ceiling-fan use, securing the fan to suitable support, checking aligned and tight connections, and using a balancing kit after blade alignment is confirmed.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Ceiling Fans Recalled by Emerson Air Comfort Products Due to Injury Hazard',
      url: 'https://www.cpsc.gov/Recalls/2012/Ceiling-Fans-Recalled-by-Emerson-Air-Comfort-Products-Due-to-Injury-Hazard',
      sourceType: 'government',
      notes:
        'Documents a specific recalled fan whose hanger bracket could spread from motor heat or out-of-balance operation, allowing the fan to fall. This evidence is limited to the recalled model.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title:
        'Hampton Bay Halwin 52-Inch Ceiling Fans Recalled Due to Impact and Injury Hazards; Manufactured by Youngo Limited',
      url: 'https://www.cpsc.gov/Recalls/2026/Hampton-Bay-Halwin-52-Inch-Ceiling-Fans-Recalled-Due-to-Impact-and-Injury-Hazards-Manufactured-by-Youngo-Limited',
      sourceType: 'government',
      notes:
        'Current model-specific recall states that blades can break or separate from the motor flywheel and directs consumers to stop using affected fans immediately.',
    },
    {
      publisher: 'Hunter Fan Company',
      title: 'How to Balance a Ceiling Fan',
      url: 'https://www.hunterfan.com/pages/how-to-fix-a-wobbly-ceiling-fan/1000',
      sourceType: 'manufacturer',
      notes:
        'Lists mounting checks, cleaning, tightening the mounting plate, downrod, set screw, blades and light kit, checking for warped blades, and using a balancing kit.',
    },
    {
      publisher: 'Hunter Fan Company',
      title: 'How to Fix a Noisy Ceiling Fan',
      url: 'https://www.hunterfan.com/pages/how-to-fix-a-noisy-ceiling-fan',
      sourceType: 'manufacturer',
      notes:
        'Connects clicking with loose blade hardware and advises immediate power shutoff for crackling or sizzling around the fan.',
    },
    {
      publisher: 'Visual Comfort & Co.',
      title: '3AVLR44XXXD-CUL-ENG Installation Guide',
      url: 'https://www.visualcomfort.com/media/docs/install_guide/3/a/ig_3avlr44xxxd-cul-eng.pdf',
      sourceType: 'manufacturer',
      notes:
        'This model’s installation guide requires fan-suitable support, service-panel shutoff before work, secure structural attachment, and states that a loose outlet box will cause wobble.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Model-specific owner’s manual',
      description:
        'Provides the correct hardware checks, blade-balancing procedure, replacement parts, mounting configuration, and troubleshooting instructions for the fan.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Ceiling-fan balancing kit',
      description:
        'Helps locate and correct small blade-weight differences after loose mounting and damaged parts have been ruled out.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Fan-rated outlet box and brace',
      description:
        'Provides appropriate support when an existing electrical box is not listed or secured for ceiling-fan use. Selection and installation must match the fan and building structure.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Qualified electrical service',
      description:
        'Appropriate when the outlet box, bracket, structural support, wiring, or fan-support rating is uncertain, loose, damaged, or inaccessible.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'ceiling-fan-clicking',
      anchorText: 'Can I ignore a ceiling fan that clicks?',
      relationshipType: 'sibling',
    },
    {
      slug: 'ceiling-fan-humming',
      anchorText: 'Can I ignore a ceiling fan that hums?',
      relationshipType: 'sibling',
    },
    {
      slug: 'ceiling-fan-slowed-down',
      anchorText: 'Can I ignore a ceiling fan that has slowed down?',
      relationshipType: 'related',
    },
    {
      slug: 'ceiling-fan-light-flickering',
      anchorText: 'Can I ignore a flickering ceiling fan light?',
      relationshipType: 'escalation',
    },
  ],
};
