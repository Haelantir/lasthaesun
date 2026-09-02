import type { ProblemSeed } from '../types';

export const absWarningLight: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'brakes',
  slug: 'abs-warning-light',
  canonicalPath: '/cars/brakes/abs-warning-light/',
  name: 'ABS warning light',
  eyebrow: 'Mobility · Cars · Brakes',

  h1: 'Can I Ignore an ABS Warning Light?',
  seoTitle: 'ABS Light On: When You Can Drive and When to Stop',
  metaDescription:
    'An ABS-only light may leave regular braking available, but anti-lock braking can be disabled. Learn when to drive carefully, stop, tow, and get it checked.',

  aliases: ['/cars/brakes/can-i-drive-with-the-abs-light-on/', '/cars/brakes/abs-light-on/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive?',
  canIUseItLabel: 'Only briefly if it is the only light and braking feels normal',

  shortAnswer:
    'Probably not. If the amber ABS light is the only warning and the brake pedal and stopping feel normal, regular braking is often still available, but anti-lock braking may not be. Drive cautiously only as needed to get it diagnosed; if a red brake warning is also on or braking feels different, stop and arrange a tow.',

  whyItMattersHeading: 'What Changes When the ABS Light Is On?',
  whyItMatters: [
    'ABS helps prevent wheel lock during hard braking, which can help you retain steering control. With an ABS fault, the car may still stop normally during routine braking, but that protection may be unavailable when braking hard or on a slippery surface.',
    'The warning light does not identify the failed part or prove that the rest of the brake system is safe. The exact meaning can also vary by vehicle, especially when brake assist, stability control, regenerative braking, or other systems share components. Inspection consequences vary by state as well, so passing an inspection does not mean the fault is safe to leave unresolved.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Call for Help If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against federal brake-warning rules, NHTSA driving guidance, current manufacturer instructions, and state inspection materials.',
  disclaimer:
    "This is general vehicle-triage guidance. Warning meanings and shutdown steps vary by model, so follow the owner's manual and dashboard message. If braking feels unsafe, stop and arrange towing.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'normal-startup-check',
      label: 'The ABS light appears at startup and then turns off',
      shortDescription:
        'The light illuminates during the dashboard check and goes out after the vehicle starts.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually the normal warning-light check',
      resultBody:
        'Brake warning indicators are designed to illuminate briefly so the driver can confirm that the lamp works. A light that turns off normally and does not return is not indicating an active ABS fault.',
      recommendedAction:
        'No repair is needed unless the light stays on, returns while driving, or fails to illuminate during the normal startup check.',
    },
    {
      slug: 'abs-light-only',
      label: 'The amber ABS light is the only warning',
      shortDescription:
        'The pedal feels normal, the car stops normally, and no red brake warning or stop message is present.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Regular braking may remain, but ABS may be unavailable',
      resultBody:
        'Manufacturer guidance commonly distinguishes an ABS-only warning from a red brake-system warning. Routine braking may still work, but the wheels may lock during hard braking and the fault needs diagnosis.',
      recommendedAction:
        "Limit driving, leave extra space, avoid abrupt braking, and arrange an ABS inspection. Confirm the meaning for your vehicle in the owner's manual.",
    },
    {
      slug: 'abs-and-red-brake-light',
      label: 'The ABS and red brake warning lights are both on',
      shortDescription: 'The red brake-system warning remains on after the parking brake is fully released.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop because the regular brake system may also have a fault',
      resultBody:
        'This combination can mean that ABS is unavailable and the regular brake system has a problem. Pedal effort or stopping performance may change, and continuing to drive can lead to a crash.',
      recommendedAction:
        'Pull over carefully, stop in a safe place, and arrange towing. Do not continue merely because the vehicle still seems able to stop.',
    },
    {
      slug: 'braking-feels-different',
      label: 'The pedal or stopping performance has changed',
      shortDescription:
        'The pedal feels hard, low, soft, or sinking, or the vehicle takes noticeably more effort to stop.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a brake-system problem, not just an ABS fault',
      resultBody:
        'An abnormal pedal or reduced stopping ability means the basic braking system or its power assistance may be affected. The fact that an ABS warning appeared first does not make continued driving safe.',
      recommendedAction:
        'Slow and stop carefully in a safe location. Use roadside assistance rather than attempting to drive to a shop.',
    },
    {
      slug: 'slippery-roads-ahead',
      label: 'You would need to drive on snow, ice, or another slick surface',
      shortDescription:
        'The ABS light is the only warning, but road conditions make wheel lock and loss of control more likely.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Avoid a nonessential trip without working ABS',
      resultBody:
        'ABS is especially relevant when traction is limited because it helps prevent wheel lock during braking. Without it, steering control during a hard stop may be reduced.',
      recommendedAction:
        'Postpone nonessential driving until the fault is checked. If travel is unavoidable, reduce speed, leave substantially more space, and avoid abrupt inputs.',
    },
    {
      slug: 'intentional-drive-mode',
      label: "The owner's manual says the selected drive mode disables ABS",
      shortDescription:
        'A manufacturer-described off-road or axle-locking mode intentionally turns the light on while that mode is active.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The light may be expected for that specific mode',
      resultBody:
        'Some vehicles intentionally disable ABS in a particular operating mode. That does not mean the warning should be dismissed in normal driving or applied to a different vehicle.',
      recommendedAction:
        'Follow the instructions for that mode and restore the normal setting when appropriate. Get the vehicle checked if the light remains on afterward.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The vehicle has detected an ABS-related fault',
      description:
        'The warning indicates that the anti-lock system or a related brake-control function may not be operating as designed.',
      severity: 'caution',
      chainLabel: 'Fault detected',
    },
    {
      stageLabel: 'DURING ROUTINE BRAKING',
      title: 'The regular brakes may still feel normal',
      description:
        'An ABS-only warning commonly leaves ordinary braking available, so the problem may not be obvious from pedal feel during an easy stop.',
      severity: 'info',
      chainLabel: 'Basic braking remains',
    },
    {
      stageLabel: 'DURING HARD OR SLIPPERY BRAKING',
      title: 'The wheels may lock',
      description:
        'Without anti-lock control, hard braking can lock one or more wheels, reducing the ability to steer around a hazard.',
      severity: 'warning',
      chainLabel: 'ABS unavailable',
    },
    {
      stageLabel: 'IF THE FAULT IS LEFT UNRESOLVED',
      title: 'You keep driving without a key safety function',
      description:
        'The warning remains unexplained, other model-specific brake or stability functions may also be affected, and the vehicle may fail inspection under some state rules.',
      severity: 'warning',
      chainLabel: 'Safety margin reduced',
    },
    {
      stageLabel: 'IF A RED WARNING OR BRAKING CHANGE APPEARS',
      title: 'The regular brake system may be impaired',
      description:
        'A red brake warning, abnormal pedal, or reduced stopping ability can indicate a more serious brake fault with a risk of losing adequate braking.',
      severity: 'danger',
      chainLabel: 'Braking danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The light appears briefly during startup and then turns off',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Treat it as the normal function check unless it stays on, returns while driving, or does not illuminate at startup.',
    },
    {
      situation: 'The amber ABS light is steady and braking feels completely normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Drive only as needed to arrange diagnosis. Leave extra space and avoid hard braking and slippery roads.',
    },
    {
      situation: 'The ABS light is on with a red brake-system warning',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop carefully and arrange towing after confirming that the parking brake is fully released.',
    },
    {
      situation: 'The pedal feels hard, soft, low, or begins sinking',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop in a safe place. Do not attempt to prove that the brakes still work by continuing to drive.',
    },
    {
      situation: 'The car takes more effort to stop or feels unstable under braking',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Treat the change in braking as the controlling issue and use roadside assistance.',
    },
    {
      situation: 'Snow, ice, or other slippery conditions are expected',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Postpone nonessential driving because ABS may not be available when wheel lock is most likely.',
    },
    {
      situation: 'The manual confirms that a selected operating mode disables ABS',
      ignoreAnswer: 'Only while that mode is required',
      severity: 'caution',
      whatToDo:
        'Follow the vehicle-specific instructions, return to normal mode when appropriate, and verify that the warning goes out.',
    },
    {
      situation: 'A safety inspection is due',
      ignoreAnswer: 'Check local rules',
      severity: 'caution',
      whatToDo:
        'Do not assume the light automatically passes or fails. Inspection treatment varies by state and vehicle type, but the fault still needs repair.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Identify every illuminated brake warning',
      body:
        'Confirm whether you have only an amber ABS symbol or also a red BRAKE symbol, parking-brake warning, stability-control light, or dashboard stop message. The red warning and any stop instruction take priority.',
    },
    {
      title: 'Confirm that the parking brake is fully released',
      body:
        'A red brake warning can remain on when the parking brake is applied. If it stays on after full release, treat it as a possible brake-system fault rather than assuming it is part of the ABS warning.',
    },
    {
      title: 'Check pedal feel before moving',
      body:
        'While safely parked, notice whether the pedal feels normal and holds its position. Do not road-test a vehicle with a sinking pedal, an unusually hard or low pedal, or a red brake warning.',
    },
    {
      title: 'Reduce risk if you must drive with an ABS-only warning',
      body:
        'Keep the trip limited to obtaining service, increase following space, slow down, and avoid abrupt braking, towing, heavy loads, and slippery roads where practical.',
    },
    {
      title: 'Arrange an ABS-capable diagnostic inspection',
      body:
        'The light only identifies a system fault. A shop needs equipment that can communicate with the ABS controller, along with checks of the vehicle-specific sensors, wiring, hydraulic components, power supply, and related systems.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A red brake-system warning remains on',
      description:
        'Confirm that the parking brake is released. If the red warning remains, the regular braking system may have a fault.',
      severity: 'danger',
    },
    {
      title: 'The brake pedal feels low or sinks',
      description:
        'A major change in pedal travel can indicate a hydraulic or other brake-system problem that requires immediate attention.',
      severity: 'danger',
    },
    {
      title: 'The brake pedal becomes unusually hard',
      description:
        'Increased pedal effort can indicate a loss of brake assistance. Stopping may require much more force than expected.',
      severity: 'danger',
    },
    {
      title: 'The vehicle takes noticeably more effort to stop',
      description:
        'Reduced braking performance overrides the more limited ABS-only guidance. Stop rather than trying to reach a repair shop under your own power.',
      severity: 'danger',
    },
    {
      title: 'The dashboard displays a stop-vehicle message',
      description:
        "Follow the vehicle's warning message and owner's manual instead of relying on general ABS-light advice.",
      severity: 'danger',
    },
    {
      title: 'The vehicle pulls sharply or becomes difficult to control while braking',
      description:
        'A major control change suggests that the problem is affecting more than the anti-lock function.',
      severity: 'danger',
    },
    {
      title: 'You see brake fluid leaking',
      description:
        'A visible fluid leak near a wheel, brake line, or under the engine compartment can indicate loss from the hydraulic brake system.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I drive with the ABS light on?',
      answer:
        'Usually only as needed to get service if it is the sole warning and the pedal and stopping feel normal. Drive cautiously because anti-lock protection may be unavailable.',
    },
    {
      question: 'Does an ABS light mean I have no brakes?',
      answer:
        'Not necessarily. On many vehicles, an ABS-only warning leaves regular braking available, but this is not true of every warning combination. A red brake light or changed pedal feel requires you to stop.',
    },
    {
      question: 'What is the difference between the amber ABS light and the red brake light?',
      answer:
        'The amber ABS light identifies a fault in anti-lock or related brake-control functions. A red brake warning can indicate low brake fluid, a hydraulic fault, or another problem affecting regular braking.',
    },
    {
      question: 'What happens if I brake hard without ABS?',
      answer:
        'One or more wheels may lock, especially on a slippery surface. Locked wheels can make it harder to steer around an obstacle while braking.',
    },
    {
      question: 'Is it normal for the ABS light to come on when I start the car?',
      answer:
        'Yes, if it appears briefly as a function check and then turns off. A light that remains on, returns while driving, or never illuminates during the check needs attention.',
    },
    {
      question: 'Why are the traction-control or stability lights on too?',
      answer:
        "These systems may share sensors or brake-control hardware, but warning combinations are vehicle-specific. Check the owner's manual and have the stored faults diagnosed.",
    },
    {
      question: 'Can low brake fluid cause an ABS warning?',
      answer:
        'System designs vary. Low fluid commonly triggers a red brake-system warning, and some faults can illuminate more than one light. Do not drive if the red warning stays on after releasing the parking brake.',
    },
    {
      question: 'Will disconnecting the battery fix the ABS light?',
      answer:
        'No. It may temporarily change or clear a warning on some vehicles, but it does not repair the fault. Diagnosis is still needed if the light remains on or returns.',
    },
    {
      question: 'Will an ABS warning light fail a state inspection?',
      answer:
        'It depends on the state and vehicle category. Some inspection programs do not reject a light-duty vehicle solely for an amber ABS light, while others list an ABS indicator that stays on as a rejection item.',
    },
    {
      question: 'Is an ABS light more serious in rain or snow?',
      answer:
        'Yes. ABS helps prevent wheel lock, so losing it matters more when traction is limited. Postpone nonessential travel in poor conditions until the fault is checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Electronic Code of Federal Regulations',
      title: '49 CFR 571.135 — Standard No. 135; Light vehicle brake systems',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.135',
      sourceType: 'regulation',
      notes:
        'Federal light-vehicle brake standard covering warning activation for electrical ABS failures, warning-light function checks, and yellow ABS indicator labeling.',
    },
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Winter Weather Driving Tips',
      url: 'https://www.nhtsa.gov/winter-driving-tips',
      sourceType: 'government',
      notes:
        'Explains that ABS prevents wheel lock during braking, recommends firm continuous pedal pressure with working ABS, and emphasizes greater stopping and control difficulty on slick roads.',
    },
    {
      publisher: 'Chevrolet',
      title: 'Identify Warning Lights',
      url: 'https://www.chevrolet.com/support/vehicle/dashboard-lights-signals/warning-lights',
      sourceType: 'manufacturer',
      notes:
        'States that an ABS-only warning leaves regular brakes working on covered Chevrolet vehicles, while ABS plus the brake-system warning means ABS is unavailable and regular brakes have a problem.',
    },
    {
      publisher: 'Ford Motor Company',
      title: 'Brakes — Warning Lamps',
      url: 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G2442155&Uid=G2442169&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G2126635&userMarket=USA&vFilteringEnabled=False&variantid=10105',
      sourceType: 'manufacturer',
      notes:
        'Ford owner guidance for the specified vehicle says an ABS warning can leave normal braking without anti-lock function and directs the driver to stop for a red hydraulic brake warning.',
    },
    {
      publisher: 'New York State Department of Motor Vehicles',
      title: 'Open an Inspection Station — About Safety Inspections',
      url: 'https://dmvsearch.webnycdn.ny.gov/business/open-an-inspection-station',
      sourceType: 'government',
      notes:
        'Says an activated ABS warning light alone cannot cause rejection during New York light-duty and medium-duty safety inspections.',
    },
    {
      publisher: 'New Hampshire Department of Safety',
      title: 'Saf-C 3200 — Official Motor Vehicle Inspection Requirements',
      url: 'https://gc.nh.gov/rules/state_agencies/saf-c3200.html',
      sourceType: 'regulation',
      notes:
        'Lists an ABS indicator that fails to illuminate or fails to go out after startup among brake inspection rejection conditions, illustrating that state inspection treatment varies.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Vehicle owner's manual",
      description:
        'Use the warning-light section to confirm what the exact light combination and any dashboard message mean for your model.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'ABS-capable diagnostic service',
      description:
        'A suitable shop can read the brake controller, test the affected circuits, and determine whether the fault involves sensing, wiring, hydraulic control, power, or another linked system.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Roadside assistance or towing',
      description:
        'Use this when a red brake warning, abnormal pedal, reduced stopping ability, or stop-vehicle message appears.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'NHTSA VIN recall lookup',
      description:
        'Check whether the vehicle has an unrepaired safety recall involving the brake or stability-control system.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'squeaky-brakes', anchorText: 'Can I ignore squeaky brakes?', relationshipType: 'sibling' },
    {
      slug: 'car-pulls-to-one-side',
      anchorText: 'Why does my car pull to one side?',
      relationshipType: 'escalation',
    },
    { slug: 'wheel-vibration', anchorText: 'What does wheel vibration mean?', relationshipType: 'related' },
  ],
};
