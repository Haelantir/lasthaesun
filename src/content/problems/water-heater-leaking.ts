import type { ProblemSeed } from '../types';

export const waterHeaterLeaking: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'water-heaters',
  slug: 'water-heater-leaking',
  canonicalPath: '/home/plumbing/water-heaters/water-heater-leaking/',
  name: 'Leaking Water Heater',
  eyebrow: 'Home · Plumbing · Water Heaters',

  h1: 'Can I Ignore a Water Heater That Is Leaking?',
  seoTitle: 'Leaking Water Heater: When to Shut It Down and What to Check',
  metaDescription:
    'A leaking water heater can mean condensation, a loose fitting, a bad valve, or a failed tank. Learn when to shut it down and what to check safely.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'No — shut it down first',

  shortAnswer:
    'No. Shut off the heater’s heat or power using the normal control for your model and stop the incoming water if the leak is active. The source may be a repairable fitting or valve, but a confirmed tank leak means the water heater needs replacement.',

  whyItMattersHeading: 'The puddle does not tell you what failed',
  whyItMatters: [
    'Water around a water heater can come from condensation, inlet or outlet fittings, the drain valve, the temperature-and-pressure relief valve, an electric-element gasket, or the tank itself. Those causes do not have the same fix, so the first job is to stop the leak from getting worse and identify where the water starts.',
    'A leaking T&P relief valve deserves special attention because it may be reacting to excessive pressure or temperature rather than merely having a bad seal. Never cap or plug its discharge path. If the tank shell itself is leaking, manufacturers and safety guidance treat replacement as the remedy rather than a patch.',
  ].join('\n\n'),

  redFlagsHeading: 'Shut It Down and Get Help If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Reviewed for leak-source triage, T&P relief-valve safety, electrical and gas hazards, tank failure, water damage, and manufacturer shutdown guidance.',
  disclaimer:
    'General triage guidance only. Water-heater designs and shutdown procedures vary by model, fuel type, plumbing configuration, and local code. Follow the manufacturer’s instructions for your unit and avoid wet electrical equipment or gas-system work you are not trained to handle.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'tank-shell-is-leaking',
      label: 'Water is seeping from the tank body or base',
      shortDescription:
        'The fittings and valves above look dry, but water keeps appearing from the heater itself.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a failed tank',
      resultBody:
        'A confirmed tank leak usually means the tank has corroded or otherwise lost integrity. This is not the kind of leak to seal from the outside or keep running.',
      recommendedAction:
        'Shut off the heater’s heat or power and cold-water supply using the normal controls for your model. Arrange replacement and contain the water only if you can do so without approaching wet electrical parts.',
    },
    {
      slug: 'relief-valve-is-leaking',
      label: 'Water is coming from the T&P relief valve or discharge pipe',
      shortDescription: 'Hot water drips or flows from the safety valve or the pipe connected to it.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not plug the valve',
      resultBody:
        'The valve may be opening because of excessive pressure or temperature, thermal expansion, or a valve fault. Blocking the discharge removes a safety function and can create a dangerous pressure condition.',
      recommendedAction:
        'Keep clear of the discharge because the water may be very hot. Shut the heater down if the discharge is continuing and have the valve, system pressure, and thermal-expansion control checked.',
    },
    {
      slug: 'intermittent-relief-valve-drip',
      label: 'The T&P valve drips only during heating cycles',
      shortDescription: 'The discharge is intermittent rather than a constant flow.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Intermittent does not mean normal',
      resultBody:
        'Heating water expands it. In a closed plumbing system that can raise pressure and make the relief valve discharge intermittently. A dripping valve can also be defective.',
      recommendedAction:
        'Do not cap the discharge. Have the system pressure, expansion control, and valve condition checked before treating the drip as harmless.',
    },
    {
      slug: 'top-fitting-is-leaking',
      label: 'A hot or cold water connection is dripping',
      shortDescription: 'The leak clearly begins at a pipe fitting near the top of the heater.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Often repairable, still worth fixing',
      resultBody:
        'A connection leak may be much simpler than a failed tank, but water can run down the jacket and make the tank look like the source. Continued leakage can also damage the surrounding area.',
      recommendedAction:
        'Shut off the water if the drip is growing or cannot be contained. Have the connection repaired and confirm the tank stays dry afterward.',
    },
    {
      slug: 'drain-valve-is-leaking',
      label: 'The drain valve at the bottom is dripping',
      shortDescription: 'Water is clearly coming from the drain valve rather than through the tank shell.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The valve may be repairable',
      resultBody:
        'A drain valve can leak because it is not fully closed or because the valve itself has failed. That is different from a leaking tank, but the water can still damage floors and nearby materials.',
      recommendedAction:
        'Do not force or overtighten the valve. If it does not stop with normal operation, shut down the heater and have the valve serviced or replaced.',
    },
    {
      slug: 'electric-access-panel-is-wet',
      label: 'Water is entering an electrical access panel',
      shortDescription:
        'Moisture is reaching the wiring, element cover, junction box, or another electrical area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Cut power and stay out of the panel',
      resultBody:
        'Water around energized water-heater components creates an electrical hazard. Opening covers or touching wet equipment while power may still be present can make the situation worse.',
      recommendedAction:
        'Turn off the water heater at the breaker if you can reach the panel without standing in water or touching wet equipment. Do not open the heater’s electrical covers. Call for service.',
    },
    {
      slug: 'likely-condensation',
      label: 'Water appears only with heavy hot-water use and then stops',
      shortDescription:
        'The unit is a gas storage heater and the moisture pattern is consistent with condensation rather than a continuing leak.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'It may be condensation',
      resultBody:
        'Condensation can collect around some gas water heaters and can be mistaken for a tank leak. The important distinction is whether the moisture stops and the fittings, valves, and tank remain dry afterward.',
      recommendedAction:
        'Dry the area and observe where fresh moisture begins. If water returns while the burner is off or you cannot clearly confirm condensation, treat it as a real leak and arrange service.',
    },
    {
      slug: 'water-in-drain-pan-source-unknown',
      label: 'There is water in the drain pan but no obvious source',
      shortDescription: 'The pan is catching water and the leak point is hidden or intermittent.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Unknown source means shut it down',
      resultBody:
        'A drain pan limits property damage but does not tell you whether the source is a fitting, relief valve, drain valve, or failed tank. Continued operation can keep feeding the leak.',
      recommendedAction:
        'Shut off heat or power and the incoming water if the pan is continuing to fill. Have the source identified before returning the heater to service.',
    },
    {
      slug: 'active-flow-or-spreading-water',
      label: 'Water is flowing or spreading across the floor',
      shortDescription: 'The leak is no longer a small drip and water is moving beyond the heater area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop the water now',
      resultBody:
        'An active leak can reach flooring, walls, stored belongings, and nearby electrical equipment. The immediate problem is limiting water and energy to the appliance without entering an unsafe wet area.',
      recommendedAction:
        'Shut off the heater’s cold-water supply and heat or power if the controls are safely reachable. If water is near electrical equipment, avoid the wet area and get emergency plumbing or electrical help.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The leak source is still uncertain',
      description:
        'A puddle at the base can be caused by several different components, so location matters more than the size of the puddle.',
      severity: 'caution',
      chainLabel: 'Find the source',
    },
    {
      stageLabel: 'IF THE LEAK CONTINUES',
      title: 'Water damage spreads beyond the heater',
      description:
        'Repeated wetting can damage flooring, drywall, cabinets, insulation, and stored items. Damp materials also create conditions that support mold growth.',
      severity: 'warning',
      chainLabel: 'Moisture damage',
    },
    {
      stageLabel: 'IF THE T&P VALVE IS DISCHARGING',
      title: 'The pressure or temperature problem remains unresolved',
      description:
        'A relief valve is a safety device. Continued discharge can involve very hot water and may point to system pressure, thermal expansion, temperature, or valve problems.',
      severity: 'warning',
      chainLabel: 'Safety valve active',
    },
    {
      stageLabel: 'IF THE TANK ITSELF HAS FAILED',
      title: 'The heater needs replacement',
      description:
        'A leaking tank shell is generally treated as a failed water heater rather than a repairable external leak.',
      severity: 'danger',
      chainLabel: 'Tank failure',
    },
    {
      stageLabel: 'IF WATER REACHES ELECTRICAL PARTS',
      title: 'The situation becomes an electrical hazard',
      description:
        'Wet electrical components should not be handled or serviced while energized. Power must be isolated before qualified service work begins.',
      severity: 'danger',
      chainLabel: 'Electrical exposure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'You only see a small puddle and do not know the source',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Dry the visible water only if the area is electrically safe, then look for the first place fresh water appears. Shut the heater down if the source remains unknown or the water returns.',
    },
    {
      situation: 'The tank shell or base is confirmed to be leaking',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Shut off heat or power and the cold-water supply using the normal controls for the unit. Arrange replacement rather than trying to patch the tank.',
    },
    {
      situation: 'The T&P relief valve or discharge pipe is leaking',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep clear of hot discharge and do not cap or plug the valve. Have the pressure, thermal-expansion control, temperature, and valve condition checked.',
    },
    {
      situation: 'A top plumbing fitting is slowly dripping',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Control the water and arrange repair. Confirm afterward that the tank jacket and base remain dry so a second leak is not missed.',
    },
    {
      situation: 'The drain valve is dripping',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Do not force the valve. If normal closing does not stop the leak, shut down the heater and have the valve serviced.',
    },
    {
      situation: 'Water is touching an electrical cover or junction box',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep out of the wet area. Turn off the breaker only if it is safely reachable without contacting water, then arrange service.',
    },
    {
      situation: 'Moisture is confirmed to be condensation and stops normally',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Dry the area and monitor it. Recheck if moisture appears when the heater is not operating or if the amount increases.',
    },
    {
      situation: 'Water is spreading beyond the drain pan',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop the incoming water and the heater’s energy source if the controls are safely reachable. Protect the area from further water damage and get prompt help.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Shut down the heater safely',
      body:
        'Use the normal shutoff procedure in the owner’s manual. For an electric unit that may mean the dedicated breaker. For a gas unit use the appliance control specified by the manufacturer. If you cannot reach a control without entering water, do not approach it.',
    },
    {
      title: 'Stop the incoming water',
      body:
        'Close the cold-water supply valve to the water heater if the leak is active and the valve is safely accessible. If the shutoff itself is leaking, do not keep forcing it.',
      destinationProblemSlug: 'dripping-shutoff-valve',
    },
    {
      title: 'Find where fresh water starts',
      body:
        'Once the area is safe, dry visible water and inspect the top fittings, T&P relief valve and discharge pipe, drain valve, tank jacket, and nearby plumbing. Water can travel down the outside of the tank and disguise the true source.',
    },
    {
      title: 'Protect wet building materials',
      body:
        'Remove standing water and begin drying affected materials once the leak is controlled and the area is safe. Water that reaches nearby cabinetry or finishes should be handled as a separate water-damage problem.',
      destinationProblemSlug: 'water-damaged-cabinet',
    },
    {
      title: 'Get the right repair',
      body:
        'A fitting, drain valve, relief valve, or gasket may be serviceable. A confirmed tank leak generally means replacement. Ask the service provider to identify the actual source rather than replacing parts based only on where the puddle collects.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Water is coming through the tank shell',
      description:
        'A confirmed tank leak points to loss of tank integrity and generally calls for replacement.',
      severity: 'danger',
    },
    {
      title: 'The T&P relief valve is flowing continuously',
      description:
        'Keep clear of the discharge and never cap or plug the valve. Continuous discharge needs the cause identified.',
      severity: 'danger',
    },
    {
      title: 'Water has reached electrical parts',
      description: 'Do not remove covers or touch wet electrical equipment while it may be energized.',
      severity: 'danger',
    },
    {
      title: 'The leak is actively spreading',
      description:
        'Stop the incoming water and heater energy if the controls are safely reachable. Avoid standing water near electrical equipment.',
      severity: 'danger',
    },
    {
      title: 'Steam is coming from a hot-water faucet',
      description:
        'Shut off heat input and get service. Safety guidance treats steam from a hot-water faucet as a dangerous overheating condition.',
      severity: 'danger',
    },
    {
      title: 'You smell or hear leaking gas',
      description:
        'Leave the home and contact the gas utility or emergency services from outside. Do not operate lights, phones, or other electronics before leaving.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does water at the bottom always mean the tank has failed?',
      answer:
        'No. Water can run down from top fittings, a relief valve, a drain valve, condensation, or another nearby pipe. A dry inspection of those points is needed before blaming the tank.',
    },
    {
      question: 'Can a leaking water heater stop leaking on its own?',
      answer:
        'Condensation can stop when operating conditions change, but a true plumbing, valve, gasket, or tank leak should not be assumed to heal itself.',
    },
    {
      question: 'Is a dripping T&P relief valve just a bad valve?',
      answer:
        'Not necessarily. It can also discharge because of excessive system pressure, thermal expansion, or excessive temperature. Replacing the valve without finding the cause can miss the real problem.',
    },
    {
      question: 'Can I cap the T&P discharge pipe until I get it repaired?',
      answer:
        'No. The relief valve and its discharge path are safety features and must not be blocked or plugged.',
    },
    {
      question: 'Can I turn off the cold-water supply and keep heating the tank?',
      answer:
        'No. If you isolate the heater because of a leak, shut off its heat or power as well and follow the model-specific shutdown instructions. An electric heater must not be energized without a properly filled tank.',
    },
    {
      question: 'Can I just put a bucket under a slow leak?',
      answer:
        'A bucket can limit water damage while you arrange repair, but it does not make a leaking valve, fitting, or tank safe to ignore.',
    },
    {
      question: 'Should I drain the water heater myself?',
      answer:
        'Not automatically. Draining can involve very hot water and model-specific steps. If you are not already comfortable with the manufacturer’s procedure, leave draining to the service provider.',
    },
    {
      question: 'Can high water pressure cause a water heater leak?',
      answer:
        'Yes. Excessive pressure and thermal expansion can contribute to T&P valve discharge and stress water-heater components. The plumbing system may need pressure or expansion-control work rather than just a new valve.',
    },
    {
      question: 'What if the water heater is in a rental home?',
      answer:
        'Report the leak promptly to the landlord or property manager and follow any emergency maintenance procedure in your lease. Responsibility and repair rules vary by state and locality.',
    },
    {
      question: 'Does the same advice apply to a tankless water heater?',
      answer:
        'Yes for triage. An internal tankless-unit leak should not be ignored. Shut off water and energy according to the manufacturer’s instructions and have the leak diagnosed before continued use.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Washington State Department of Labor & Industries',
      title: 'Keep Your Water Heater Safe',
      url: 'https://www.rentonwa.gov/files/assets/city/v/1/public-works/utilities/documents/utility-projects/windsor-hills-prv-brochure.pdf',
      sourceType: 'government',
      notes:
        'Advises stopping use and shutting off heat input when a tank appears to be leaking until the source is found, replacing a leaking tank, and keeping clear of hot T&P relief-valve discharge.',
    },
    {
      publisher: 'A. O. Smith',
      title: 'Technical Bulletin 51 — Puddle On The Floor',
      url: 'https://www.hotwater.com/info-center/technical-bulletins/bulletin-51.html',
      sourceType: 'manufacturer',
      notes:
        'Lists condensation, drain-valve leakage, T&P valve leakage, inlet and outlet piping, electric-element gaskets, and tank leakage as possible sources. States that a confirmed tank leak requires replacement.',
    },
    {
      publisher: 'A. O. Smith',
      title: 'Residential Electric Water Heater Use and Care Guide',
      url: 'https://assets.hotwater.com/damroot/Original/10001/100296628.pdf',
      sourceType: 'manufacturer',
      notes:
        'Warns of severe electrical-shock risk around energized circuits and instructs users to turn off power before service. Also warns not to energize an electric water heater when the tank is not properly filled.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'The Key to Mold Control is Moisture Control',
      url: 'https://www.epa.gov/mold/key-mold-control-moisture-control-infographic',
      sourceType: 'government',
      notes:
        'Advises fixing water leaks promptly and completely drying damp or wet surfaces within 24–48 hours to reduce mold growth.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Issues Winter Weather Safety Tips to Prevent Fires and Carbon Monoxide Poisoning',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Issues-Winter-Weather-Safety-Tips-to-Prevent-Fires-and-Carbon-Monoxide-Poisoning',
      sourceType: 'government',
      notes:
        'Advises leaving the home immediately if gas is smelled or heard leaking, contacting local gas authorities from outside, and not operating electronics before leaving.',
    },
    {
      publisher: 'Bradford White',
      title: 'Do I need a drain pan?',
      url: 'https://www.bradfordwhite.com/bw-faq/do-i-need-a-drain-pan/',
      sourceType: 'manufacturer',
      notes:
        'States that water heaters should be located so leakage from the tank, water connections, or relief valve will not damage surrounding areas, and that a suitable drain pan is needed where damage cannot otherwise be avoided.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Water heater owner’s manual',
      description:
        'Gives the correct shutdown, isolation, draining, and restart procedure for the exact model.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Flashlight',
      description:
        'Helps trace where fresh water begins without opening electrical or gas-control compartments.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Water pressure gauge',
      description:
        'Useful when a competent homeowner or plumber is checking whether system pressure or thermal expansion is contributing to relief-valve discharge.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Plumbing service',
      description:
        'Appropriate for an unidentified leak, T&P valve discharge, failed tank, inaccessible shutoff, or repair involving gas or electrical components.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'dripping-shutoff-valve',
      anchorText: 'Is the water-heater shutoff valve itself dripping?',
      relationshipType: 'sibling',
    },
    {
      slug: 'water-damaged-cabinet',
      anchorText: 'Did the leak soak a nearby cabinet or vanity?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'brown-water-from-faucet',
      anchorText: 'Is brown water also coming from your faucets?',
      relationshipType: 'related',
    },
  ],
};
