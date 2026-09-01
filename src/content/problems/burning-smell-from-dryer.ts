import type { ProblemSeed } from '../types';

export const burningSmellFromDryer: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'venting-and-heat',
  slug: 'burning-smell-from-dryer',
  canonicalPath: '/appliances/dryers/venting-and-heat/burning-smell-from-dryer/',
  name: 'Burning Smell From Dryer',
  eyebrow: 'Appliances · Dryers · Venting & Heat',

  h1: 'Can I Ignore a Burning Smell From My Dryer?',
  seoTitle: 'Burning Smell From a Dryer: When to Stop Using It',
  metaDescription:
    'A dryer burning smell can signal lint buildup, blocked venting, overheated parts, or an electrical fault. Learn when to stop, clean, or call for service.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep using the dryer?',
  canIUseItLabel: 'No—stop until the cause is clear',

  shortAnswer:
    'No. Stop the cycle and do not keep testing the dryer until you have ruled out blocked airflow, lint buildup, an overheated part, and an electrical problem. A mild first-use odor may be normal only when the instructions for that exact dryer say to expect it and there is no smoke, abnormal heat, or electrical smell.',

  whyItMattersHeading: 'Why a Dryer Burning Smell Is More Than Ordinary Heat',
  whyItMatters: [
    'Lint in the filter, exhaust duct, or dryer cabinet can restrict airflow and trap heat. Cleaning the visible filter does not rule out lint farther along the exhaust path or around internal components.',
    'A burning odor also does not prove that lint is the cause. Mechanical and electrical malfunctions are documented contributors to dryer fires, and rubber, plastic, wiring, a motor, or another part can overheat. The odor type, airflow, noises, and electrical symptoms help determine who should inspect it, but repeated test cycles are not a safe diagnosis.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Dryer and Get Help If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Guidance was checked against CPSC and USFA fire-safety material, NFPA dryer-fire research, and current Samsung and Maytag support instructions.',
  disclaimer:
    'Do not remove dryer panels, handle a heat-damaged plug, or work on gas connections unless you are qualified and the manufacturer’s instructions permit it. If there is smoke, fire, or suspected gas leakage, leave and call emergency services.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'new-dryer-first-use-odor',
      label: 'Mild odor from a brand-new dryer during initial use',
      shortDescription:
        'The dryer is newly installed, the smell is faint and oily rather than smoky, and there is no unusual heat, smoke, sparking, noise, or damaged laundry.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'A brief first-use odor may be expected',
      resultBody:
        'Some manufacturers describe a mild oily or semi-burning odor during initial operation as shipping residue or a new heating element warms. This exception applies only when the instructions for your model allow it and the odor is fading.',
      recommendedAction:
        'Follow the startup instructions for your exact model, keep the dryer attended, and ventilate the room. Stop using it if the odor persists, returns later, worsens, or changes to plastic, rubber, electrical, or smoke.',
    },
    {
      slug: 'odor-after-painting-or-varnishing',
      label: 'The smell began after painting, staining, or varnishing nearby',
      shortDescription:
        'The dryer and laundry smell unusual, but the same paint, stain, solvent, or varnish odor is present in the surrounding room.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The dryer may be pulling in fumes from the room',
      resultBody:
        'Vented dryers draw in surrounding air. Manufacturer guidance notes that odors from painting, staining, or varnishing nearby can be heated and transferred to the laundry.',
      recommendedAction:
        'Stop using the dryer while fumes remain. Close or remove the products, ventilate the area, and resume only after the room no longer smells of them. If a burning odor remains afterward, treat it as a dryer problem.',
    },
    {
      slug: 'lint-filter-full',
      label: 'The lint filter is visibly full or clogged',
      shortDescription:
        'The smell appeared with a heavily loaded lint screen, but there is no smoke, electrical odor, damaged cord, breaker trip, or unusual mechanical noise.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Correct the airflow problem before another load',
      resultBody:
        'A lint-blocked filter can increase drying time and heat. The filter may be the immediate problem, but lint may also be present in the duct or dryer cabinet.',
      recommendedAction:
        'Let the dryer cool and disconnect power if safe. Clean and reinstall the filter, inspect accessible lint areas and the exhaust outlet, and confirm normal airflow. If the odor returns, stop and arrange service.',
    },
    {
      slug: 'weak-airflow-or-long-drying',
      label: 'Clothes take longer to dry or the outdoor vent has weak airflow',
      shortDescription:
        'Loads remain damp, the dryer or laundry feels unusually hot, the vent is crushed or kinked, or the outdoor flap barely opens while the dryer runs.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A restricted exhaust path can trap excessive heat',
      resultBody:
        'CPSC and USFA guidance identifies blocked or restricted dryer venting as a fire concern. Longer drying and weak exhaust airflow are warning signs that the lint screen, duct, or outside termination may be blocked.',
      recommendedAction:
        'Stop using the dryer until the complete exhaust path is cleaned and any crushed or damaged duct is corrected. Use a dryer-vent service if the full path cannot be safely reached and verified.',
    },
    {
      slug: 'rubber-smell-with-noise',
      label: 'Burning-rubber smell with squealing, grinding, humming, or a stalled drum',
      shortDescription:
        'The odor appears with a new mechanical noise, the drum turns poorly or not at all, or the dryer struggles to start.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop before friction or a drive fault causes more damage',
      resultBody:
        'These symptoms mean a moving part or motor is not operating normally. Mechanical failures are documented contributors to dryer fires, and restarting the dryer can add heat to a slipping, seized, or overloaded part.',
      recommendedAction:
        'Shut off power and do not restart the dryer. Arrange appliance service to inspect the belt, drum supports, blower, motor, and related parts rather than opening the cabinet to test them while energized.',
    },
    {
      slug: 'electrical-or-melting-plastic-smell',
      label: 'Electrical, hot-plastic, or melting-insulation smell',
      shortDescription:
        'The odor is sharp or acrid, seems strongest near the cord, outlet, controls, or rear connection, or comes with flickering, sparking, power loss, or discoloration.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as an electrical fault',
      resultBody:
        'Manufacturer guidance says to shut off a dryer that produces an electrical smell and request service. The fault may be in the dryer, its cord connection, the receptacle, or the building circuit.',
      recommendedAction:
        'Turn off the dryer circuit at the breaker if it is safe to do so. Do not touch a hot or damaged plug, move the dryer, or reset a tripping breaker. Contact an electrician and appliance service as appropriate.',
    },
    {
      slug: 'smoke-flame-or-scorching',
      label: 'Visible smoke, flames, glowing material, or scorch marks',
      shortDescription:
        'Smoke or flame is coming from the drum, lint opening, exhaust, controls, cord area, or behind the dryer.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'This is a fire emergency',
      resultBody:
        'Smoke and visible burning are no longer a troubleshooting situation. NFPA guidance says not to open a dryer door to fight a fire inside because added oxygen can make the fire worse.',
      recommendedAction:
        'Leave the dryer door closed, get everyone out, and call emergency services from outside. Do not stay to unplug the dryer, move it, retrieve laundry, or fight a growing fire.',
    },
    {
      slug: 'gas-odor-from-gas-dryer',
      label: 'Rotten-egg, sulfur, or obvious gas odor near a gas dryer',
      shortDescription: 'The odor resembles fuel gas rather than hot lint, rubber, or dusty fabric.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Leave the building for a suspected gas leak',
      resultBody:
        'A fuel-gas odor is a separate emergency from an ordinary burning smell. Electrical switches, appliances, phones, flames, and other ignition sources can create a spark.',
      recommendedAction:
        'Clear the building without operating switches or using a phone inside. From a safe location, call emergency services and the gas utility or supplier. Do not use the dryer again until the source is corrected.',
    },
    {
      slug: 'oil-or-solvent-soiled-load',
      label: 'The load contains cooking oil, finishing oil, gasoline, or solvent residue',
      shortDescription:
        'The burning smell began while drying heavily oil-soiled towels, shop rags, cleaning cloths, or fabric exposed to a flammable substance.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop drying that load',
      resultBody:
        'CPSC warns that normal washing may not remove enough oil from heavily contaminated cloth and that warm oil-containing laundry can begin to smoke or ignite. Solvent- or gasoline-contaminated fabric should not be put in a dryer.',
      recommendedAction:
        'Stop the cycle. If smoke or abnormal heating continues, leave and call emergency services. Do not pile warm items together or machine-dry contaminated fabric; follow the product label and appropriate disposal or cleaning guidance.',
    },
    {
      slug: 'smell-persists-after-vent-cleaning',
      label: 'The filter and exhaust vent are clean, but the smell returns',
      shortDescription:
        'Accessible lint has been removed and outside airflow appears normal, yet the dryer produces the same odor again.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The problem may be inside the dryer',
      resultBody:
        'Lint can accumulate inside the cabinet even when the visible filter and vent line look clear. A recurring odor may also come from the heater, motor, controls, wiring, or another internal part.',
      recommendedAction:
        'Turn off the breaker and arrange appliance service. Do not remove panels or keep running empty cycles to reproduce the smell.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The odor does not identify the source',
      description:
        'Hot lint, restricted airflow, overheated fabric, mechanical friction, and electrical faults can produce similar smells from outside the appliance.',
      severity: 'caution',
      chainLabel: 'Unknown heat source',
    },
    {
      stageLabel: 'IF AIRFLOW IS RESTRICTED',
      title: 'Heat and moisture stop exhausting normally',
      description:
        'A clogged filter, crushed duct, blocked vent, or internal lint buildup can increase drying time and allow excessive heat to remain in the dryer and exhaust path.',
      severity: 'warning',
      chainLabel: 'Airflow drops',
    },
    {
      stageLabel: 'IF A PART OR CONNECTION OVERHEATS',
      title: 'Insulation, belts, motors, and controls can be damaged',
      description:
        'Continued operation can add heat to a failing moving part or electrical connection. The original fault may then damage nearby components.',
      severity: 'warning',
      chainLabel: 'Heat becomes damage',
    },
    {
      stageLabel: 'IF LINT OR THE LOAD IGNITES',
      title: 'Smoke and fire can develop inside the appliance',
      description:
        'Lint and certain contaminated fabrics can burn. Opening the door during an internal fire can supply additional oxygen.',
      severity: 'danger',
      chainLabel: 'Ignition',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Fire spreads beyond the dryer',
      description:
        'Flames, smoke, and heat can spread through nearby combustibles, the exhaust path, or the surrounding structure, causing injury and major property damage.',
      severity: 'danger',
      chainLabel: 'Home fire',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Mild first-use odor specifically covered by the instructions for a new dryer',
      ignoreAnswer: 'Briefly, if it is fading',
      severity: 'info',
      whatToDo:
        'Follow the instructions for that model and keep the dryer attended. Stop if the odor persists, worsens, or comes with smoke, unusual heat, noise, or an electrical smell.',
    },
    {
      situation: 'Paint, stain, or varnish fumes are present near the dryer',
      ignoreAnswer: 'Only until the fumes are gone',
      severity: 'caution',
      whatToDo:
        'Do not run the dryer around active fumes. Ventilate the room and resume only after the surrounding odor is gone.',
    },
    {
      situation: 'The lint filter is full, with no smoke or electrical symptoms',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Let the dryer cool, clean and reinstall the filter, and check accessible venting. Stop and get service if the burning smell returns.',
    },
    {
      situation: 'Drying takes longer, laundry is unusually hot, or outside airflow is weak',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the dryer until the full exhaust path has been cleaned and any crushed, kinked, or damaged duct has been corrected.',
    },
    {
      situation: 'The smell persists with clean accessible venting or comes with abnormal noise',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Shut off power and arrange appliance service. Do not use repeated starts or an air-only cycle as a diagnostic test.',
    },
    {
      situation: 'The smell is electrical, plastic-like, or accompanied by a breaker trip',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Turn off the circuit if safe, avoid touching the plug or outlet, and have the electrical supply and dryer inspected.',
    },
    {
      situation: 'Smoke, flame, glowing material, or scorching is visible',
      ignoreAnswer: 'No—leave now',
      severity: 'danger',
      whatToDo: 'Keep the dryer door closed, evacuate, and call emergency services from outside.',
    },
    {
      situation: 'A gas dryer produces a fuel-gas odor',
      ignoreAnswer: 'No—leave now',
      severity: 'danger',
      whatToDo:
        'Leave without operating switches or using a phone inside. Call emergency services and the gas utility or supplier from a safe location.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop the dryer and classify the warning signs',
      body:
        'End the cycle without opening panels. If there is smoke, flame, or gas odor, leave and call for help. Otherwise, turn off the dryer circuit and let the appliance cool before checking accessible areas.',
    },
    {
      title: 'Check the lint filter and visible exhaust path',
      body:
        'With the dryer cool and power disconnected, clean and reinstall the lint filter. Look for a crushed transition duct, heavy lint behind the dryer, or a blocked outdoor flap. Do not disconnect a gas line or move a heat-damaged appliance.',
    },
    {
      title: 'Treat cord, plug, and outlet symptoms as electrical',
      body:
        'If the odor is strongest near the power connection or you see heat damage, leave the dryer circuit off. Do not pull a hot plug or reuse the outlet until an electrician has checked it.',
      destinationProblemSlug: 'burning-smell-from-outlet',
    },
    {
      title: 'Leave a repeatedly tripping breaker off',
      body:
        'A breaker that trips again is responding to an overload or fault. Do not keep resetting it or substitute a larger breaker. Have the dryer and circuit checked.',
      destinationProblemSlug: 'breaker-keeps-tripping',
    },
    {
      title: 'Arrange the service that matches the evidence',
      body:
        'Use a vent-cleaning service for an inaccessible or blocked exhaust path, appliance service for internal lint, noises, motors, heaters, or controls, and an electrician for supply wiring, receptacle, cord-connection, or breaker problems.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'You see smoke, flame, glowing lint, or scorch marks',
      description:
        'Leave the dryer door closed if fire appears to be inside. Evacuate and call emergency services rather than staying to unplug or move the appliance.',
      severity: 'danger',
    },
    {
      title: 'The smell resembles melting plastic or electrical insulation',
      description:
        'Shut off the circuit if safe and arrange service. Do not touch a hot plug, cord, receptacle, or connection.',
      severity: 'danger',
    },
    {
      title: 'You smell fuel gas near a gas dryer',
      description:
        'Leave without operating switches or using a phone inside. Call emergency services and the gas utility or supplier from outside.',
      severity: 'danger',
    },
    {
      title: 'The breaker trips, sparks appear, or the dryer loses power',
      description:
        'Leave the breaker off. Repeated resets can reenergize the same fault without correcting it.',
      severity: 'danger',
    },
    {
      title: 'The drum stops or the dryer hums, squeals, grinds, or scrapes',
      description:
        'A drive, blower, support, or motor problem may be creating friction or overload. Do not keep pressing Start.',
      severity: 'warning',
    },
    {
      title: 'Clothes take longer to dry or come out unusually hot',
      description: 'These symptoms can indicate restricted airflow even when the lint filter has been cleaned.',
      severity: 'warning',
    },
    {
      title: 'The burning smell returns after accessible lint and vent cleaning',
      description:
        'Recurrence points away from a simple one-time filter blockage and warrants inspection of the dryer interior and components.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a burning smell normal in a brand-new dryer?',
      answer:
        'A faint oily or semi-burning odor can be normal during initial use on some models. Follow the manual for your exact dryer. Smoke, electrical odor, abnormal heat, or a smell that persists beyond the manufacturer’s guidance is not normal.',
    },
    {
      question: 'Can a clogged dryer vent cause a burning smell?',
      answer:
        'Yes. A blocked or crushed exhaust path can reduce airflow and trap excessive heat. Longer drying, unusually hot laundry, and weak airflow at the outside vent support this possibility.',
    },
    {
      question: 'Does a clean lint filter rule out a lint problem?',
      answer:
        'No. Lint can collect in the transition duct, wall duct, outside termination, behind the dryer, and inside the cabinet. CPSC recommends periodic exhaust cleaning and qualified cleaning of the dryer chassis.',
    },
    {
      question: 'How can I tell whether the cause is the vent, motor, or electrical system?',
      answer:
        'Weak exhaust and long drying point toward venting. Humming, grinding, squealing, or a stalled drum suggest a mechanical problem. Plastic odor, sparking, power loss, discoloration, or breaker trips suggest an electrical fault. These clues do not replace inspection.',
    },
    {
      question: 'Can I use an air-only cycle to see whether the smell returns?',
      answer:
        'Do not use an air-only cycle as a test when there is an electrical smell, abnormal noise, stalled drum, smoke, or recurring unexplained odor. The motor and moving parts still operate without heat.',
    },
    {
      question: 'Why does the dryer smell burned even though there is no smoke?',
      answer:
        'A fault or lint buildup can overheat without producing visible smoke where you can see it. The absence of smoke does not make a recurring burning odor safe to ignore.',
    },
    {
      question: 'Should I open the dryer cabinet and vacuum it myself?',
      answer:
        'Clean only areas the owner’s manual identifies for user access. Internal electrical parts, sharp metal, gas connections, and stored electrical energy can make cabinet work hazardous. CPSC recommends qualified service for chassis cleaning.',
    },
    {
      question: 'Can odors from paint or varnish make the dryer smell like it is burning?',
      answer:
        'Yes. A vented dryer pulls in surrounding room air, so nearby finishing-product fumes can be heated and transferred to laundry. Do not operate the dryer until the products are closed or removed and the fumes have cleared.',
    },
    {
      question: 'Can I put cooking-oil or solvent-soiled towels in the dryer?',
      answer:
        'Do not machine-dry fabric contaminated with gasoline, solvents, or similar flammable substances. CPSC also warns that heavily cooking-oil-soiled cloth can retain oil after washing and may smoke or ignite when heated or piled while warm.',
    },
    {
      question: 'Should I open the dryer door if there is a fire inside?',
      answer:
        'No. NFPA guidance says opening the door can provide more oxygen and worsen the fire. Leave the door closed, evacuate, and call emergency services.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Overheated Clothes Dryers Can Cause Fires',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Guides/Home-Fire-Electronics-and-Electrical/Overheated-Clothes-Dryers-Can-Cause-Fires',
      sourceType: 'government',
      notes:
        'Explains that lint can block airflow, create excessive heat, and cause fires. Advises cleaning the filter, vent, exhaust duct, and dryer area and using qualified service for chassis cleaning.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Clothes Dryer Fire Safety',
      url: 'https://www.usfa.fema.gov/downloads/pdf/publications/clothes_dryer_fire_safety_flyer.pdf',
      sourceType: 'government',
      notes:
        'Advises cleaning the lint filter, checking for damaged or restricted venting, confirming the outdoor vent opens, cleaning behind the dryer, and using professional installation and service.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Hidden Hazard In The Home: Cloths Heavily Soiled With Vegetable Oil Can Start Fires',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/1992/Hidden-Hazard-In-The-Home-Cloths-Heavily-Soiled-With-Vegetable-Oil-Can-Start-Fires',
      sourceType: 'government',
      notes:
        'Warns that normal laundering may leave oil in heavily soiled cloth and that heated or piled oil-containing towels can begin to smoke and catch fire.',
    },
    {
      publisher: 'National Fire Protection Association',
      title: 'Home Fires Involving Clothes Dryers and Washing Machines',
      url: 'https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/US-Fire-Problem/Fire-causes/oswashersdryers.pdf?rev=a2ca193e4d3f4852973805277ce91d05',
      sourceType: 'standards_body',
      notes:
        'Documents lint, cleaning failures, mechanical failures, and electrical failures in dryer fires. Advises proper venting and service and says not to open the dryer door during an internal fire.',
    },
    {
      publisher: 'Samsung',
      title: 'Samsung dryer smells or smokes',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10007108/',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes an initial new-dryer odor from persistent burning or electrical smells. Directs users to shut off the breaker and request service for continuing or electrical odors and to evacuate for gas odor or gas-dryer smoke.',
    },
    {
      publisher: 'Maytag',
      title: 'Removing Odors or Smells - Dryer',
      url: 'https://producthelp.maytag.com/Laundry/Dryers/Dryer/Cleaning_and_Maintenance/Removing_Odors_or_Smells_-_Dryer',
      sourceType: 'manufacturer',
      notes:
        'Says a new dryer may initially emit a semi-burning or oily odor and explains that dryers draw surrounding air, allowing nearby paint, stain, or varnish fumes to transfer to laundry.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Model-specific dryer manual and installation instructions',
      description:
        'Use the exact model number to check approved venting, lint-filter care, startup odors, load restrictions, error codes, and shutdown instructions.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Dryer vent inspection and cleaning service',
      description:
        'Useful when the exhaust path runs through walls, cannot be fully reached, has weak airflow, or contains a crushed or damaged section.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance repair service',
      description:
        'Appropriate for persistent odors, internal lint, abnormal noises, a stalled drum, overheating, or suspected motor, heater, control, belt, or blower faults.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Electrical inspection',
      description:
        'Needed when the smell is strongest at the cord or outlet or comes with discoloration, sparking, power loss, a loose connection, or repeated breaker trips.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'burning-smell-from-outlet',
      anchorText: 'Can I ignore a burning smell from an outlet?',
      relationshipType: 'cause',
    },
    {
      slug: 'warm-electrical-outlet',
      anchorText: 'Can I ignore a warm electrical outlet?',
      relationshipType: 'escalation',
    },
    {
      slug: 'breaker-keeps-tripping',
      anchorText: 'Why does my circuit breaker keep tripping?',
      relationshipType: 'cause',
    },
  ],
};
