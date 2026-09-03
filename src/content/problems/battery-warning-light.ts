import type { ProblemSeed } from '../types';

export const batteryWarningLight: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'car-electrical',
  slug: 'battery-warning-light',
  canonicalPath: '/cars/electrical/battery-warning-light/',
  name: 'Battery warning light',
  eyebrow: 'Mobility · Cars · Electrical',

  h1: 'Can I Ignore a Battery Warning Light?',
  seoTitle: 'Battery Warning Light On: When to Stop Driving',
  metaDescription:
    'A battery-shaped dashboard light usually means the low-voltage charging system is failing. Learn when to stop, what to switch off, and why range is unpredictable.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep driving?',
  canIUseItLabel: 'Only to reach a safe stop',

  shortAnswer:
    'No. If the battery-shaped charging light stays on while the vehicle is running, get out of traffic and stop in a safe place. The vehicle can lose electrical power and stop unexpectedly, and there is no dependable distance you can count on.',

  whyItMattersHeading: 'Why the Battery Light Is Not Just About the Battery',
  whyItMatters: [
    'The battery symbol is primarily a low-voltage charging-system warning. Possible causes include the alternator or charging converter, drive belt, voltage regulator or control system, wiring, battery, cables, terminals, or grounds. Replacing the battery without testing the system may miss the real fault.',
    'If the charging source stops supplying enough power, the vehicle draws from energy stored in its battery. As voltage falls, lights and accessories may weaken, additional warnings can appear, and the engine or drive system may eventually shut down. Remaining range varies with the fault, battery condition, electrical demand, and vehicle design.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Call for Help If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed against federal display rules and Mazda, Ford, Nissan, Bosch, and AAA guidance on charging warnings, belt faults, electrical load, shutdown risk, and testing.',
  disclaimer:
    'This covers the low-voltage dashboard charging-system light, not an EV or hybrid high-voltage traction-battery warning. Follow your vehicle’s manual for model-specific instructions.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'startup-self-check',
      label: 'The light appears before starting, then goes out',
      shortDescription:
        'The battery symbol illuminates with the ignition on and turns off promptly after the engine or drive system starts.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually a normal self-check',
      resultBody:
        'Many vehicles briefly illuminate the charging-system warning during the dashboard lamp check. It is not a fault if it goes out as your owner’s manual describes and does not return.',
      recommendedAction:
        'No special action is needed. Check your owner’s manual if the behavior has changed or the light does not illuminate during the expected lamp check.',
    },
    {
      slug: 'stays-on-after-starting',
      label: 'The light stays on after the vehicle starts',
      shortDescription:
        'The engine is running or the vehicle is ready to drive, but the battery-shaped light remains illuminated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The charging system may not be working',
      resultBody:
        'A light that remains on after startup is no longer the normal lamp check. The vehicle may be running from stored battery energy rather than receiving adequate charging output.',
      recommendedAction:
        'Do not begin a normal trip. If you are still parked safely, leave the vehicle there and arrange charging-system diagnosis or towing.',
    },
    {
      slug: 'steady-while-driving',
      label: 'The light comes on and stays on while driving',
      shortDescription: 'The warning appears during the trip and remains steadily illuminated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Find a safe place to stop',
      resultBody:
        'Manufacturer guidance commonly treats a charging light that appears while driving as an active system fault. Continued operation can end with an unexpected engine or drive-system shutdown.',
      recommendedAction:
        'Move out of traffic, switch off unnecessary electrical equipment, and stop safely. Arrange roadside assistance or prompt diagnosis rather than trying to complete the trip.',
    },
    {
      slug: 'intermittent-while-driving',
      label: 'The light flickers or comes and goes while driving',
      shortDescription: 'The warning is not steady, but it appears intermittently with the vehicle running.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Intermittent does not mean harmless',
      resultBody:
        'A loose connection, slipping belt, wiring fault, or inconsistent charging output can make the light disappear temporarily. The system can still fail again without warning.',
      recommendedAction:
        'Avoid unnecessary driving and have the charging system inspected promptly. Stop sooner if the light stays on or any electrical symptom develops.',
    },
    {
      slug: 'electrical-functions-weakening',
      label: 'Lights dim or electrical equipment slows down',
      shortDescription:
        'Headlights, dashboard lights, blower, wipers, windows, or displays weaken while the warning is on.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stored electrical power may be running down',
      resultBody:
        'Dimming and slowing accessories indicate that system voltage may already be falling. The vehicle may be approaching the point where control systems can no longer keep it running.',
      recommendedAction:
        'Stop at the nearest safe location and arrange a tow. Keep headlights, hazard lights, and wipers operating when they are needed for immediate safety.',
    },
    {
      slug: 'temperature-warning-too',
      label: 'A temperature warning appears at the same time',
      shortDescription:
        'The battery light is joined by a high-temperature warning, rising temperature gauge, or steam.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop for the overheating warning',
      resultBody:
        'An overheating warning independently requires immediate action. A belt problem can also affect more than charging on some engines, but the exact accessory layout depends on the vehicle.',
      recommendedAction:
        'Pull over safely and shut the engine off. Do not open a hot pressurized cooling system, and follow the overheating procedure in your owner’s manual.',
    },
    {
      slug: 'belt-noise-or-damage',
      label: 'There is belt squeal, flapping, or visible belt damage',
      shortDescription:
        'The charging warning comes with unusual belt noise or a belt that looks loose, broken, or missing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not continue with a damaged drive belt',
      resultBody:
        'A loose or failed belt can stop the alternator from charging. Depending on the vehicle, the same accessory drive may also operate other important components.',
      recommendedAction:
        'Stop safely and switch off the engine. Inspect only after moving parts have stopped, and arrange towing if the belt is loose, broken, or missing.',
    },
    {
      slug: 'burning-smell-or-smoke',
      label: 'There is a burning smell or smoke',
      shortDescription:
        'The warning appears with a hot-wire odor, burning-rubber smell, visible smoke, or unusual heat.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as an active electrical or belt hazard',
      resultBody:
        'Smoke or a strong burning odor can indicate overheating wiring, a slipping belt, a failing component, or another fault that is unsafe to investigate while driving.',
      recommendedAction:
        'Stop away from traffic, shut the vehicle off, exit if conditions appear unsafe, and call for roadside or emergency help as appropriate.',
    },
    {
      slug: 'remains-on-after-jump-start',
      label: 'The light remains on after a jump-start',
      shortDescription: 'The vehicle started with outside power, but the charging warning remains illuminated.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The jump-start did not fix the charging fault',
      resultBody:
        'A jump-start may provide enough energy to start the vehicle, but it does not repair a failed charging source. The vehicle can stall again as the available battery energy is used.',
      recommendedAction:
        'Do not use the vehicle for a normal trip. Arrange a charging-system test or tow, especially if it stalls, dims the lights, or will not stay running.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Charging output is outside the expected range',
      description:
        'The warning system has detected that the low-voltage charging system is not operating as expected.',
      severity: 'caution',
      chainLabel: 'Warning appears',
    },
    {
      stageLabel: 'IF CHARGING OUTPUT DROPS',
      title: 'The battery carries more of the electrical load',
      description:
        'Instead of being replenished, stored battery energy is used to operate control modules, ignition or drive controls, lighting, and accessories.',
      severity: 'warning',
      chainLabel: 'Stored power takes over',
    },
    {
      stageLabel: 'AS STORED ENERGY FALLS',
      title: 'Electrical functions can become unstable',
      description:
        'Lights may dim, accessories may slow or shut off, and several warning messages can appear as voltage declines.',
      severity: 'warning',
      chainLabel: 'Electrical symptoms spread',
    },
    {
      stageLabel: 'WHEN VOLTAGE BECOMES TOO LOW',
      title: 'The vehicle can stop running',
      description:
        'Engine management or other essential controls may no longer have enough electrical power to operate, and the vehicle may not restart after shutdown.',
      severity: 'danger',
      chainLabel: 'Vehicle shuts down',
    },
    {
      stageLabel: 'IF IT STOPS IN TRAFFIC',
      title: 'A breakdown becomes a safety problem',
      description:
        'Unexpected power loss can leave the vehicle in a travel lane, intersection, or another location where moving to safety is difficult.',
      severity: 'danger',
      chainLabel: 'Stranded in traffic',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The light appears only during the normal startup lamp check',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'No action is needed if it goes out as the owner’s manual describes and does not return.',
    },
    {
      situation: 'The light came on briefly while driving, then went out',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Treat it as a possible intermittent fault. Avoid unnecessary trips and arrange prompt inspection if it returns or other electrical symptoms appear.',
    },
    {
      situation: 'The light stays on while the vehicle is running',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Move to a safe stopping place, reduce unnecessary electrical load, and arrange diagnosis or roadside assistance.',
    },
    {
      situation: 'Lights dim, the blower slows, or displays begin shutting down',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop at the nearest safe location and arrange towing. The vehicle may be close to losing essential electrical power.',
    },
    {
      situation: 'A temperature warning or steam appears too',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop safely and shut the engine off. Follow the overheating instructions in your owner’s manual and do not open a hot cooling system.',
    },
    {
      situation: 'A belt is loose, broken, missing, or making severe noise',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Shut the engine off once safely parked and do not continue driving. Keep clear of moving components and arrange towing.',
    },
    {
      situation: 'The warning remains after a jump-start',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'A jump-start is not a charging-system repair. Have the battery and complete charging system tested before relying on the vehicle.',
    },
    {
      situation: 'The car is safely parked while you arrange service',
      ignoreAnswer: 'Only while parked',
      severity: 'info',
      whatToDo:
        'It can remain parked while service is arranged, but do not use it for normal transportation with the warning unresolved.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Move out of traffic',
      body:
        'Signal, reduce speed smoothly, and choose the nearest safe place away from moving traffic. If the vehicle is already losing power, do not attempt to reach a repair shop on your own.',
    },
    {
      title: 'Reduce nonessential electrical load',
      body:
        'Until you are safely stopped, switch off climate control, rear defogger, seat heaters, audio, and device chargers. Keep headlights, hazard lights, and wipers on when conditions require them.',
    },
    {
      title: 'Follow a temperature warning first',
      body:
        'If a high-temperature warning, rising gauge, or steam is present, stop safely and shut the engine off. Do not open the radiator or coolant reservoir while the system is hot.',
      destinationProblemSlug: 'engine-overheating',
    },
    {
      title: 'Check the drive belt only after shutdown',
      body:
        'With the engine off and moving parts stopped, look for an obviously loose, broken, or missing belt only if you can do so safely. Do not reach into the belt path or run the engine with the hood open to investigate noise.',
    },
    {
      title: 'Arrange a complete charging-system test',
      body:
        'Use roadside assistance or a repair facility that can test the battery, charging output, belt, cables, terminals, grounds, and control system. Do not authorize a battery or alternator solely from the dashboard icon without diagnosis.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Headlights or dashboard lights are dimming or flickering',
      description:
        'Visible changes in brightness while the warning is on can indicate unstable or falling system voltage.',
      severity: 'warning',
    },
    {
      title: 'Blower, wipers, windows, or displays are slowing or cutting out',
      description:
        'Several weakening electrical functions suggest the vehicle is losing available power rather than experiencing an isolated accessory problem.',
      severity: 'warning',
    },
    {
      title: 'The engine stumbles, stalls, or will not stay running',
      description:
        'The charging fault may already be interfering with essential vehicle controls. Do not keep restarting and attempting to drive.',
      severity: 'danger',
    },
    {
      title: 'A temperature warning, rising gauge, or steam appears',
      description:
        'Stop safely and shut the engine off. Continued operation while overheating can seriously damage the engine.',
      severity: 'danger',
    },
    {
      title: 'There is smoke or a strong electrical or burning-rubber smell',
      description:
        'This can indicate overheated wiring, a slipping belt, or another active fault. Stop, shut down, and move away if the vehicle appears unsafe.',
      severity: 'danger',
    },
    {
      title: 'The belt squeals, flaps, or looks loose or missing',
      description:
        'A belt fault can eliminate charging and may affect other belt-driven equipment. Do not continue driving with an obviously damaged belt.',
      severity: 'danger',
    },
    {
      title: 'Steering becomes heavy or brake or steering warnings appear',
      description:
        'Low voltage or an accessory-drive failure can affect assistance on some vehicles. Stop safely instead of testing whether the vehicle remains controllable in traffic.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does the battery warning light mean the battery itself is bad?',
      answer:
        'Not necessarily. It is mainly a charging-system warning. The cause may be the alternator or charging converter, belt, regulator, wiring, connections, battery, or system controls.',
    },
    {
      question: 'How far can I drive with the battery light on?',
      answer:
        'There is no dependable distance. Remaining operation depends on battery charge and condition, electrical demand, vehicle design, and whether charging output is reduced or completely absent.',
    },
    {
      question: 'Will turning off accessories let me keep driving?',
      answer:
        'It can reduce electrical demand while you move to a safe stopping place. It does not make a normal trip safe or repair the fault. Keep safety-critical lighting and wipers operating when needed.',
    },
    {
      question: 'Can I jump-start the car and continue driving?',
      answer:
        'A jump-start may get the vehicle running, but it will not restore a failed charging system. If the warning remains on, the vehicle can drain the available charge and stall again.',
    },
    {
      question: 'Should I replace the battery first?',
      answer:
        'Not without testing. A new battery can also discharge if the charging source, belt, wiring, or connections are faulty. Test the complete system before choosing parts.',
    },
    {
      question: 'What if the battery light flickered and went away?',
      answer:
        'Treat it as an intermittent charging fault, especially if it happened while driving. Arrange prompt inspection and stop if the light returns steadily or electrical functions weaken.',
    },
    {
      question: 'Can I test the alternator by disconnecting a battery cable while the engine runs?',
      answer:
        'No. Bosch warns against disconnecting the battery cable with the engine running. Use proper voltage and charging-system tests instead of risking electrical-system damage.',
    },
    {
      question: 'Is it normal for the battery light to appear when I start the car?',
      answer:
        'A brief appearance during the dashboard self-check can be normal if the light goes out after startup as the owner’s manual describes. Staying on or returning while driving is not normal.',
    },
    {
      question: 'Is this the same as a hybrid or electric-car traction-battery warning?',
      answer:
        'No. This page covers the low-voltage battery or charging-system symbol. A high-voltage traction-battery, hybrid-system, or charging-port warning has different procedures that must be checked in the vehicle’s manual.',
    },
    {
      question: 'Can an OBD scanner identify the problem?',
      answer:
        'It may retrieve useful charging, voltage, or communication faults on some vehicles, but a code alone does not prove which part failed. Physical inspection and charging-output testing may still be needed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Electronic Code of Federal Regulations',
      title: '49 CFR § 571.101 — Standard No. 101; Controls and Displays',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.101',
      sourceType: 'regulation',
      notes:
        'Defines regulated telltales and their identification. The table lists electrical charge with a battery symbol or Volts, Charge, or Amp wording. It identifies the display rather than prescribing a repair procedure.',
    },
    {
      publisher: 'Mazda North American Operations',
      title: '2026 Mazda CX-30 Owner’s Manual — Warning and Indicator Lights',
      url: 'https://www.mazdausa.com/static/manuals/2026/cx-30/contents/68140100.html',
      sourceType: 'manufacturer',
      notes:
        'States that the charging-system light means a problem, directs the driver to park safely, and warns that continued driving can result in the engine stopping. It also says not to drive with the high coolant-temperature warning on.',
    },
    {
      publisher: 'Ford Motor Company',
      title: '2023 Bronco Sport Owner’s Manual — 12V Battery Warning Lamps',
      url: 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G2264798&Uid=G2357977&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G2186921&userMarket=usa&vFilteringEnabled=False&variantid=9156',
      sourceType: 'manufacturer',
      notes:
        'Says illumination while driving indicates a charging-system error and instructs the driver to switch off unnecessary electrical equipment and have the vehicle checked immediately.',
    },
    {
      publisher: 'AAA Mountain West Group',
      title: 'What’s Wrong if My Battery or Charging System Light Comes On?',
      url: 'https://mwg.aaa.com/automotive/auto-repair/articles/what-s-wrong-if-battery-or-charging-system-light-comes-on',
      sourceType: 'industry',
      notes:
        'Describes charging-system causes, explains reliance on stored battery power and eventual shutdown, and distinguishes a brief startup self-check from a warning that remains on.',
    },
    {
      publisher: 'Nissan North America',
      title: '2015 Nissan Versa Sedan Owner’s Manual',
      url: 'https://owners.nissanusa.com/content/techpub/ManualsAndGuides/VersaSedan/2015/2015-VersaSedan-owner-manual.pdf',
      sourceType: 'manufacturer',
      notes:
        'Says a charge light with the engine running can indicate a charging malfunction, directs the driver to check the drive belt, and warns not to continue if the belt is loose, broken, or missing.',
    },
    {
      publisher: 'Bosch Automotive Aftermarket',
      title: 'Bosch Starters and Alternators Catalogue',
      url: 'https://www.boschaftermarket.com/xrm/media/images/country_specific/in/parts_11/starter_and_alternator/bosch-starters-alternatrors-catalogue.pdf',
      sourceType: 'manufacturer',
      notes:
        'Advises against disconnecting the battery cable while the engine is running and describes belt, battery connection, and alternator operating precautions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Vehicle owner’s manual',
      description:
        'Identifies the exact symbol and gives model-specific stopping, belt-check, towing, and restart instructions.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Roadside assistance or towing service',
      description:
        'Moves the vehicle without relying on uncertain remaining battery energy or risking a shutdown in traffic.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Charging-system diagnostic service',
      description:
        'Tests the battery, charging source, drive belt, voltage control, cables, terminals, grounds, and related electronics before parts are replaced.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Digital multimeter',
      description:
        'Useful for basic battery and charging-voltage checks when used with the vehicle’s specifications and safe procedures, but it does not replace a complete output and load diagnosis.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'dim-headlights',
      anchorText: 'Can I ignore dim headlights while driving?',
      relationshipType: 'escalation',
    },
    {
      slug: 'corroded-battery-terminal',
      anchorText: 'Can I ignore corrosion on a battery terminal?',
      relationshipType: 'cause',
    },
    {
      slug: 'car-slow-to-start',
      anchorText: 'Can I ignore a car that is slow to start?',
      relationshipType: 'related',
    },
    {
      slug: 'engine-overheating',
      anchorText: 'Can I ignore an overheating engine?',
      relationshipType: 'escalation',
    },
  ],
};
