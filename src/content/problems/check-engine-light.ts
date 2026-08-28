import type { ProblemSeed } from '../types';

/**
 * Cars > Engine > Check Engine Light.
 *
 * Every factual claim below traces to one of the four sources at the bottom
 * of this file. The core distinction the page is built around is steady
 * versus flashing: a steady light is a "get it checked soon" signal, a
 * flashing light warns of a severe misfire that can damage the catalytic
 * converter. No driving distance or duration is invented for how long a
 * steady light can be driven on — no source publishes one.
 */
export const checkEngineLight: ProblemSeed = {
  systemSlug: 'engine',
  slug: 'check-engine-light',
  canonicalPath: '/cars/engine/check-engine-light/',
  name: 'Check Engine Light',
  eyebrow: 'Cars · Engine',

  h1: 'Can I Ignore a Check Engine Light?',
  seoTitle: 'Check Engine Light On? When You Can Drive and When to Stop',
  metaDescription:
    'A steady check engine light may not mean stop immediately. A flashing light, rough running or power loss needs faster action. Here’s how to tell.',

  status: 'published',
  indexable: true,

  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Usually, if the light is steady and the car feels normal',

  shortAnswer:
    'Probably not. If the light is steady and the car feels normal, you can usually keep driving long enough to get it checked soon. If it flashes or the engine starts running badly, minimize driving and get the car checked promptly.',

  whyItMattersHeading: 'Why Does a Check Engine Light Matter?',
  whyItMatters: [
    "The check engine light comes from the car's onboard diagnostic system, or OBD. When the system detects an emissions-related fault, it stores a diagnostic trouble code that can be read with a scan tool.",
    'A steady light can come from something as small as a loose fuel cap or from a fault that needs repair. A flashing light is more urgent because it can indicate a severe misfire that may damage the catalytic converter.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving If You Notice:',

  lastReviewedAt: new Date('2026-08-28T00:00:00Z'),
  reviewScope:
    'OBD check engine light behavior, steady versus flashing warnings, common low-risk situations and signs that need faster action.',
  disclaimer:
    "General automotive triage guidance only. A check engine light does not identify the failed part on its own. Follow the owner's manual and vehicle-specific service information when the light appears.",

  aliases: ['/cars/engine/check-engine-light-on/', '/cars/check-engine-light/'],

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'steady-light-car-feels-normal',
      label: 'The light is steady and the car feels normal',
      shortDescription: 'No shaking, major power loss or other serious warning.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'CHECK IT SOON',
      resultBody:
        'A steady light means OBD has detected a fault. If the car starts, idles and drives normally, you can usually continue driving while you arrange a code scan and repair.',
      recommendedAction: 'Get the stored code read soon and find the cause.',
    },
    {
      slug: 'flashing-check-engine-light',
      label: 'The check engine light is flashing',
      shortDescription: 'The light blinks repeatedly while the engine is running.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'FLASHING IS URGENT',
      resultBody:
        'A flashing check engine light can indicate a severe misfire. Continued driving can damage the catalytic converter.',
      recommendedAction:
        'Ease off the accelerator, avoid high speed and heavy loads, and minimize driving. If the flashing continues or the car runs badly, stop safely and arrange service.',
    },
    {
      slug: 'light-after-refueling',
      label: 'The light came on soon after refueling',
      shortDescription: 'The car feels normal and the light is steady.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'CHECK THE FUEL CAP',
      resultBody:
        'On vehicles with a removable fuel cap, a loose or missing cap can trigger an OBD fault. Tightening it may solve the problem, but the light may not go out immediately.',
      recommendedAction:
        "Check the fuel cap according to the owner's manual. If the light stays on, read the stored code.",
    },
    {
      slug: 'rough-running-with-light',
      label: 'The engine is shaking, stumbling or running rough',
      shortDescription: 'The warning light is on and the engine no longer feels normal.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'GET IT CHECKED NOW',
      resultBody:
        'Rough running with a check engine light can be a misfire or another active engine fault. Continuing to drive can make the problem worse.',
      recommendedAction: 'Keep driving to a minimum. Reduce speed and engine load and arrange service promptly.',
    },
    {
      slug: 'power-loss-with-light',
      label: 'The car has lost a lot of power',
      shortDescription: 'Acceleration is weak or the engine struggles while the light is on.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'DO NOT KEEP PUSHING IT',
      resultBody:
        'Major power loss means the fault is affecting how the car runs. The vehicle may also be operating in a reduced-power mode.',
      recommendedAction:
        'Avoid hard acceleration and unnecessary driving. Stop if the car cannot maintain safe speed or feels unstable.',
    },
    {
      slug: 'light-went-out',
      label: 'The light came on, then went away',
      shortDescription: 'The car now runs normally and the light has stayed off.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'KEEP AN EYE ON IT',
      resultBody:
        'OBD can turn the light off after a fault stops recurring. If the light stays off and the car feels normal, no immediate action is usually needed.',
      recommendedAction: 'If the light comes back, have the stored codes checked.',
    },
    {
      slug: 'check-engine-plus-critical-warning',
      label: 'Another serious warning light is on too',
      shortDescription: 'An oil-pressure or overheating warning appears with the check engine light.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'STOP FOR THE OTHER WARNING',
      resultBody:
        'An overheating or oil-pressure warning can require immediate action. Follow that warning even if the check engine light is also on.',
      recommendedAction: "Stop safely and follow the vehicle owner's manual for the warning shown.",
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The car stores a fault code',
      description:
        'OBD has detected a problem and stores diagnostic information that can be read with a scan tool.',
      severity: 'info',
      chainLabel: 'Fault detected',
    },
    {
      stageLabel: 'IF THE LIGHT STAYS ON',
      title: 'The cause still needs attention',
      description:
        'A steady light can come from many different faults. Some mainly affect emissions, while others can hurt fuel economy or how the engine runs.',
      severity: 'caution',
      chainLabel: 'Fault remains',
    },
    {
      stageLabel: 'IF THE ENGINE STARTS RUNNING BADLY',
      title: 'Driveability can get worse',
      description: 'Misfires and other active faults can cause shaking, hesitation, stalling or loss of power.',
      severity: 'warning',
      chainLabel: 'Poor running',
    },
    {
      stageLabel: 'IF THE LIGHT FLASHES',
      title: 'A severe misfire may be occurring',
      description:
        'A flashing check engine light can warn of a misfire severe enough to damage the catalytic converter.',
      severity: 'danger',
      chainLabel: 'Catalyst damage risk',
    },
    {
      stageLabel: 'KEEP IGNORING A SERIOUS FAULT',
      title: 'The repair can become more expensive',
      description:
        'Some faults can damage other components when the vehicle keeps running with the problem unresolved.',
      severity: 'danger',
      chainLabel: 'More damage',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Steady light and the car feels normal',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo: 'You usually do not need to stop immediately. Get the code read and arrange the needed repair soon.',
    },
    {
      situation: 'Light came on after refueling and the car feels normal',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'If your vehicle has a removable fuel cap, make sure it is installed correctly. If the light stays on, have the code checked.',
    },
    {
      situation: 'Light is flashing',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Reduce speed and engine load and minimize driving. Stop safely if the flashing continues or the engine runs badly.',
    },
    {
      situation: 'Engine is shaking, misfiring or losing substantial power',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Keep driving to a minimum and arrange prompt diagnosis.',
    },
    {
      situation: 'Light went out and has not returned',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'No immediate action is usually needed if the car runs normally. Have it checked if the light returns.',
    },
    {
      situation: 'Check engine light appears with an overheating or oil-pressure warning',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: "Stop safely and follow the owner's manual for the more serious warning.",
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: See if the light is steady or flashing',
      body: 'A steady light usually gives you time to get the fault checked. A flashing light needs faster action.',
    },
    {
      title: 'Step 2: Pay attention to how the car runs',
      body: 'Shaking, stumbling, stalling or major power loss raises the urgency. If the car feels unsafe, stop driving.',
    },
    {
      title: 'Step 3: Check the fuel cap if this started after refueling',
      body: 'If your vehicle uses a removable fuel cap, make sure it is installed correctly. A loose cap can trigger the check engine light.',
    },
    {
      title: 'Step 4: Read the stored code',
      body: 'An OBD-II scanner can retrieve the diagnostic trouble code. The code narrows down where to look but does not prove that a specific part has failed.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The check engine light is flashing',
      description: 'A flashing light can indicate a severe misfire that may damage the catalytic converter.',
      severity: 'danger',
    },
    {
      title: 'The engine is shaking or misfiring badly',
      description: 'Rough running means the fault is actively affecting engine operation.',
      severity: 'danger',
    },
    {
      title: 'The car has major power loss or keeps stalling',
      description: 'Stop if the vehicle cannot be driven safely.',
      severity: 'danger',
    },
    {
      title: 'An overheating warning appears',
      description: "Follow the manufacturer's overheating procedure and stop when it is safe.",
      severity: 'danger',
    },
    {
      title: 'A red oil-pressure warning appears',
      description: 'Follow the owner’s manual immediately. Low oil pressure can cause serious engine damage.',
      severity: 'danger',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I drive with the check engine light on?',
      answer:
        'Usually, if the light is steady and the car feels completely normal. Get the code checked soon. A flashing light or a badly running engine needs faster action.',
    },
    {
      question: 'What does a solid check engine light mean?',
      answer:
        'OBD has detected a fault and stored diagnostic information. A steady light usually calls for service soon, not an immediate roadside stop when the car otherwise feels normal.',
    },
    {
      question: 'What does a flashing check engine light mean?',
      answer:
        'It can indicate a severe engine misfire that may damage the catalytic converter. Reduce speed and load and minimize driving.',
    },
    {
      question: 'Can a loose gas cap cause the check engine light?',
      answer:
        'Yes. On vehicles with a removable fuel cap, a loose or missing cap can cause the OBD system to detect an evaporative-emissions leak.',
    },
    {
      question: 'Will the check engine light turn off after I tighten the gas cap?',
      answer:
        'It can, but it may not happen immediately. If the light stays on after the cap is installed correctly, read the stored code.',
    },
    {
      question: 'Why did my check engine light turn off by itself?',
      answer: 'OBD can switch the light off after the fault stops recurring. If it comes back, have the stored codes checked.',
    },
    {
      question: 'Does an OBD code tell me which part to replace?',
      answer:
        'No. A trouble code identifies the fault or system the car detected. Testing is still needed before replacing parts.',
    },
    {
      question: 'Does a check engine light always mean the engine itself is damaged?',
      answer:
        'No. The light can be triggered by faults in the fuel, ignition or emissions-control systems. The stored code helps narrow down the cause.',
    },
    {
      question: 'Is the check engine light the same as a maintenance reminder?',
      answer:
        'No. A check engine light comes from the OBD fault-monitoring system. Oil-change and scheduled-maintenance reminders are separate warnings on most vehicles.',
    },
    {
      question: 'Can I just clear the check engine code?',
      answer:
        'Clearing the code does not fix the fault and can erase useful diagnostic information. Read the code first and address the cause.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'OBD-II scanner',
      description:
        'Reads the diagnostic trouble codes stored by the vehicle. A code helps narrow down the fault but does not identify a failed part with certainty.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: "Vehicle owner's manual",
      description:
        'Check the warning-light section for instructions specific to your vehicle, especially if the light is flashing or another warning appears.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional diagnostic service',
      description: 'Useful when the light remains on, returns repeatedly or appears with poor engine performance.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'What to Do With the Check Engine Light',
      url: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100MHPD.TXT',
      sourceType: 'government',
      notes:
        'Distinguishes a steady check engine light from a blinking light and advises minimizing driving and seeking repair quickly for a flashing/severe-misfire condition.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Do You Drive a 1996 or Newer Car or Light Truck?',
      url: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1002K2N.TXT',
      sourceType: 'government',
      notes:
        'OBD-II guidance covering steady vs. blinking light behavior, loose/missing fuel caps, diagnostic trouble codes and catalyst-damaging misfire warnings.',
    },
    {
      publisher: 'Electronic Code of Federal Regulations',
      title: '40 CFR Part 86 — Control of Emissions from New and In-Use Highway Vehicles and Engines',
      url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-86',
      sourceType: 'regulation',
      notes: 'Federal regulatory framework covering vehicle emissions compliance and onboard diagnostic requirements.',
    },
    {
      publisher: 'Chevrolet',
      title: '2005 Chevrolet Equinox — Getting to Know Your Vehicle',
      url: 'https://www.chevrolet.com/ownercenter/content/dam/gmownercenter/gmna/dynamic/manuals/2005/chevrolet/equinox/2005_chevrolet_equinox_getknow.pdf',
      sourceType: 'manufacturer',
      notes:
        'Manufacturer guidance distinguishing a flashing malfunction indicator lamp from a steady light and describing the fuel-cap check for a steady warning.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'high-rpm-after-cold-start', anchorText: 'Can I ignore high RPM after a cold start?', relationshipType: 'sibling' },
  ],
};
