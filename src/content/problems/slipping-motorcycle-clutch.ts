import type { ProblemSeed } from '../types';

export const slippingMotorcycleClutch: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'motorcycle-drivetrain',
  slug: 'slipping-motorcycle-clutch',
  canonicalPath: '/motorcycles/drivetrain/slipping-motorcycle-clutch/',
  name: 'Slipping Motorcycle Clutch',
  eyebrow: 'Mobility · Motorcycles · Chain & Clutch',

  h1: 'Can I Ignore a Slipping Motorcycle Clutch?',
  seoTitle: 'Motorcycle Clutch Slipping: Is It Safe to Keep Riding?',
  metaDescription:
    'A slipping motorcycle clutch can overheat and lose drive. Learn when a gentle trip may be possible, when to stop, and what to check first.',

  aliases:
    ['/motorcycles/drivetrain/motorcycle-clutch-slipping/', '/motorcycles/drivetrain/clutch-slips-under-acceleration/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Only briefly, if power stays predictable',

  shortAnswer:
    'Probably not. If engine speed rises without matching acceleration while the clutch lever is fully released, avoid hard acceleration and arrange diagnosis. Stop riding if slip occurs during normal use, power becomes unreliable, or you smell burning.',

  whyItMattersHeading: 'Why a Slipping Clutch Gets Worse',
  whyItMatters: [
    'A fully engaged clutch should transfer engine torque to the transmission without an unexpected flare in engine speed. When it slips, some of that energy becomes heat inside the clutch. Continued heat can increase friction-material wear, reduce the clutch’s holding capacity, and make the problem appear under progressively lighter loads.',
    'The cause is not always worn friction plates. Incorrect cable free play, a hydraulic fault, unsuitable oil in a wet-clutch motorcycle, weak springs, or damaged clutch parts can produce similar symptoms. A clutch that drags is a different fault: it fails to release fully, so the motorcycle may creep or stall with the lever pulled.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding and Arrange Help If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Checked against California safety guidance, Honda service information, JASO oil standards, Suzuki oil guidance, and wet-clutch research.',
  disclaimer:
    'This is general triage for manual motorcycle clutches. Cable, hydraulic, wet, dry, assist-and-slipper, and automatic clutch systems differ, so follow the service information for the exact motorcycle.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'intentional-clutch-use',
      label: 'The RPM rises only while you deliberately use the clutch',
      shortDescription:
        'The engine flares while you feather the lever, pull it for a shift, or intentionally match engine speed.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Normal if it stops when the lever is released',
      resultBody:
        'Engine speed can change independently of road speed while you intentionally disengage or feather the clutch. It becomes a fault when the engine flares after the lever is fully released.',
      recommendedAction:
        'Confirm that the lever returns completely and the clutch holds once engaged. Investigate any unexpected flare that continues with your hand off the lever.',
    },
    {
      slug: 'traction-control-or-wheelspin',
      label: 'It happened only during wheelspin or traction-control intervention',
      shortDescription:
        'The surface was loose or slippery, and the traction indicator appeared or the rear tire briefly lost grip.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may not be clutch slip',
      resultBody:
        'Rear-wheel spin can raise engine speed without a matching increase in road speed. Traction control may then interrupt power. That is different from repeatable clutch slip on dry pavement.',
      recommendedAction:
        'Reduce throttle for the available grip. Treat it as a clutch problem if the same smooth RPM flare returns on a dry surface without wheelspin.',
    },
    {
      slug: 'top-gear-hard-load-only',
      label: 'It slips only in top gear under hard acceleration',
      shortDescription:
        'The clutch holds during gentle riding but the engine races ahead when load is highest.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Likely an early loss of holding capacity',
      resultBody:
        'Slip that appears only under heavy load can be an early sign that the clutch no longer holds full engine torque. Gentle operation may still feel normal, but repeated testing adds heat and wear.',
      recommendedAction:
        'Avoid hard throttle, steep climbs, passengers, and demanding merges. Check the specified clutch free play and oil, then arrange service before using full power again.',
    },
    {
      slug: 'slips-in-normal-acceleration',
      label: 'It slips during ordinary acceleration or in several gears',
      shortDescription:
        'RPM rises ahead of road speed without hard throttle, a steep climb, or deliberate clutch use.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop normal riding',
      resultBody:
        'The clutch is no longer holding reliably during routine use. Available drive may deteriorate further, and continued slipping generates additional heat.',
      recommendedAction:
        'Park the motorcycle and arrange inspection. Do not keep reproducing the symptom to see how much throttle it can handle.',
    },
    {
      slug: 'started-after-oil-change',
      label: 'The slipping started immediately after an oil change',
      shortDescription:
        'The clutch was normal before service and began slipping after the engine oil was replaced.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Verify the oil before riding again',
      resultBody:
        'On a motorcycle whose engine oil also lubricates a wet clutch, the oil must meet the exact specification in the owner’s manual. The timing also warrants checking the oil level and the work performed.',
      recommendedAction:
        'Check the container or invoice against the exact model’s oil requirements. Contact the servicing shop and correct any mismatch; persistent slip may require clutch inspection.',
    },
    {
      slug: 'no-cable-free-play',
      label: 'A cable-operated lever has no specified free play',
      shortDescription: 'The cable stays tight and the lever begins pulling the clutch immediately.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The clutch may be held partly released',
      resultBody:
        'Incorrect free play can prevent full engagement and cause premature clutch wear. The required measurement and adjustment method are model-specific.',
      recommendedAction:
        'Do not guess at the setting. Check the owner’s manual and adjust only by its procedure, or have the control inspected before normal riding.',
    },
    {
      slug: 'hydraulic-clutch-feels-wrong',
      label: 'The hydraulic clutch feels soft, spongy, or has a leak',
      shortDescription:
        'Lever feel or travel has changed, or fluid is visible around the hose, master cylinder, or slave cylinder.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a hydraulic fault',
      resultBody:
        'Air, leakage, or another hydraulic problem can stop the clutch from operating correctly. Hydraulic clutches do not necessarily use the same adjustment procedure as cable clutches.',
      recommendedAction:
        'Park the motorcycle and have the hydraulic system inspected and bled or repaired using model-specific service information.',
    },
    {
      slug: 'burning-smell-or-smoke',
      label: 'Slipping comes with a burning smell or smoke',
      shortDescription: 'A strong hot-friction odor or visible smoke appears after acceleration or clutch use.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop and shut the engine off',
      resultBody:
        'A slipping friction clutch produces heat. A strong odor or smoke indicates that continuing to apply power may cause substantially more clutch damage, and smoke could have another source that needs inspection.',
      recommendedAction:
        'Pull over safely, switch off the engine, and do not try to overcome the slip with more throttle. Arrange transport and inspection.',
    },
    {
      slug: 'little-or-no-drive',
      label: 'The motorcycle has little or no forward drive',
      shortDescription:
        'The engine revs, but the motorcycle barely moves or cannot maintain predictable progress.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not ride it',
      resultBody:
        'The motorcycle can no longer deliver dependable power to the rear wheel. That can leave you unable to merge, cross traffic, climb a grade, or move away from danger.',
      recommendedAction:
        'Get out of traffic without demanding more acceleration. Stop in a safe place and arrange motorcycle transport.',
    },
    {
      slug: 'clutch-drags-instead',
      label: 'The motorcycle creeps with the clutch lever fully pulled',
      shortDescription:
        'Selecting gear causes a lurch or stall, neutral is difficult to find, or the motorcycle tries to move with the lever held in.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is clutch drag, not clutch slip',
      resultBody:
        'A dragging clutch is failing to disengage fully. Its causes and adjustment direction can differ from those of a slipping clutch, so treating the two as the same problem can make operation worse.',
      recommendedAction:
        'Do not compensate by blindly tightening or loosening the control. Check the exact manual and have persistent creeping, stalling, or rough engagement inspected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Engine speed and road speed stop matching',
      description:
        'The clutch transfers less torque than the engine is producing, so RPM rises without the expected acceleration.',
      severity: 'caution',
      chainLabel: 'Torque is lost',
    },
    {
      stageLabel: 'IF SLIP CONTINUES',
      title: 'Heat builds between the clutch plates',
      description:
        'Relative movement between friction and steel surfaces converts power into heat instead of forward motion.',
      severity: 'warning',
      chainLabel: 'Heat increases',
    },
    {
      stageLabel: 'AS HEAT AND WEAR BUILD',
      title: 'The clutch can hold less torque',
      description:
        'Higher surface temperature can reduce friction and increase wear, allowing slip to appear under lighter acceleration.',
      severity: 'warning',
      chainLabel: 'Holding power falls',
    },
    {
      stageLabel: 'IF THE ORIGINAL CAUSE IS NOT CORRECTED',
      title: 'A smaller fix can become an internal repair',
      description:
        'Incorrect free play or unsuitable wet-clutch oil may be correctable early, but continued slipping can leave the friction discs, plates, or springs needing inspection or replacement.',
      severity: 'warning',
      chainLabel: 'Parts are damaged',
    },
    {
      stageLabel: 'IF DRIVE BECOMES UNRELIABLE',
      title: 'The motorcycle may not accelerate when needed',
      description:
        'Severe slip can prevent predictable merging, crossing, climbing, or movement away from a traffic hazard.',
      severity: 'danger',
      chainLabel: 'Drive is lost',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A single suspected flare occurred only in top gear under hard throttle',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Ride gently only if the clutch holds normally at lighter loads. Avoid repeat testing and arrange a free-play, oil, and clutch check.',
    },
    {
      situation: 'RPM rises ahead of speed during ordinary acceleration',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop normal riding and arrange inspection before the slip spreads to more operating conditions.',
    },
    {
      situation: 'The problem began directly after an oil change',
      ignoreAnswer: 'Only until the oil is verified',
      severity: 'warning',
      whatToDo:
        'Check the exact oil specification and level before riding again, especially on a wet-clutch motorcycle.',
    },
    {
      situation: 'A cable-operated clutch has no manual-specified free play',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Correct the control using the procedure for that motorcycle, or have it adjusted before normal use.',
    },
    {
      situation: 'The hydraulic lever feels soft or fluid is leaking',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Park the motorcycle and have the hydraulic clutch system inspected.',
    },
    {
      situation: 'There is a burning smell or smoke',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Shut the engine off and arrange transport rather than trying to ride through the slip.',
    },
    {
      situation: 'The motorcycle cannot maintain predictable forward drive',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Leave traffic safely and arrange motorcycle transport.',
    },
    {
      situation: 'RPM rises only while the clutch lever is intentionally pulled or feathered',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'No repair is indicated if the clutch holds normally once the lever is fully released.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop testing it with hard acceleration',
      body:
        'Repeated full-throttle checks deliberately create the load and heat that expose the problem. Ease off and avoid demanding acceleration until the cause is known.',
    },
    {
      title: 'Check the clutch control against the exact manual',
      body:
        'Confirm that the lever returns fully and inspect a cable for damage, binding, or incorrect free play. Hydraulic systems require their own leakage, fluid, and lever-feel checks.',
      destinationProblemSlug: 'motorcycle-clutch-lever-play',
    },
    {
      title: 'Verify the oil and recent service',
      body:
        'If the motorcycle uses engine oil in a wet clutch, compare the oil container or invoice with every specification in the owner’s manual. Do not assume that any automotive or motorcycle oil is interchangeable.',
    },
    {
      title: 'Separate smooth clutch flare from final-drive skipping',
      body:
        'A clutch usually produces a smooth rise in RPM without matching speed. A loose chain or worn sprocket may instead produce jumping, banging, or abrupt interruptions in drive.',
      destinationProblemSlug: 'loose-motorcycle-chain',
    },
    {
      title: 'Arrange the appropriate repair',
      body:
        'Diagnosis may end with a control adjustment or correct oil, or it may require checking friction discs, steel plates, springs, the pressure plate, and the release mechanism against service limits.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Little or no forward drive',
      description:
        'Do not enter traffic when the engine revs but the motorcycle cannot accelerate predictably.',
      severity: 'danger',
    },
    {
      title: 'A strong burning smell or visible smoke',
      description:
        'Shut the engine off. Continued slipping adds heat, and smoke may come from another fluid or mechanical problem.',
      severity: 'danger',
    },
    {
      title: 'Slip during gentle, ordinary acceleration',
      description:
        'The clutch is no longer holding only at extreme load and should not be trusted for normal riding.',
      severity: 'warning',
    },
    {
      title: 'Sudden or rapidly worsening slip',
      description:
        'A quick change may reflect a control, hydraulic, oil, or internal clutch fault that needs prompt diagnosis.',
      severity: 'warning',
    },
    {
      title: 'A soft hydraulic lever or visible fluid leak',
      description:
        'Changed lever feel or leakage indicates that the hydraulic actuation system is not operating normally.',
      severity: 'danger',
    },
    {
      title: 'Creeping or stalling with the lever fully pulled',
      description: 'This points to clutch drag or incomplete disengagement rather than ordinary clutch slip.',
      severity: 'warning',
    },
    {
      title: 'Banging, chain jumping, or abrupt loss of drive',
      description:
        'These symptoms can involve the chain, sprockets, transmission, or another drivetrain component rather than the clutch alone.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'What does a slipping motorcycle clutch feel like?',
      answer:
        'The clearest sign is engine RPM rising while the motorcycle does not accelerate by the expected amount, even though the clutch lever is fully released. The flare is often smooth rather than a sharp bang.',
    },
    {
      question: 'Why does the clutch slip only in a high gear?',
      answer:
        'Higher load can expose a clutch that still holds during gentle operation. Treat this as an early warning, avoid deliberately reproducing it, and have the clutch control, oil, and internal condition checked.',
    },
    {
      question: 'Can the wrong engine oil cause clutch slip?',
      answer:
        'Yes, on motorcycles where the engine oil also lubricates a wet clutch. Use every oil specification listed for the exact model. Engine oil is less likely to explain slip on a dry clutch or a design with separate lubrication.',
    },
    {
      question: 'Will another oil change fix a slipping wet clutch?',
      answer:
        'It may help when the symptom began with unsuitable oil and no internal damage occurred, but it is not guaranteed. Follow the manufacturer’s correction procedure and inspect the clutch if slipping remains.',
    },
    {
      question: 'Can adjusting the clutch cable fix the problem?',
      answer:
        'Yes, if incorrect free play is preventing full engagement. Use the exact measurement and procedure in the owner’s manual; too much or too little free play can create different problems.',
    },
    {
      question: 'Is synthetic oil automatically bad for a wet clutch?',
      answer:
        'No. The base-oil description alone does not decide compatibility. The oil must meet the viscosity, performance, and clutch-friction specifications required by the motorcycle manufacturer.',
    },
    {
      question: 'Is a slipping clutch the same as a dragging clutch?',
      answer:
        'No. A slipping clutch fails to hold when engaged, causing RPM to race ahead. A dragging clutch fails to release fully, causing creeping, stalling, difficult neutral selection, or rough engagement.',
    },
    {
      question: 'Does an assist-and-slipper clutch normally slip during acceleration?',
      answer:
        'No. Its slipper function is intended to limit excessive back-torque during deceleration. It should still transmit normal engine power without an unexpected RPM flare.',
    },
    {
      question: 'Can I ride a mildly slipping motorcycle to a repair shop?',
      answer:
        'Only if the symptom is slight, stable, limited to heavy load, and the motorcycle still delivers predictable power. Use gentle acceleration and avoid demanding traffic. Arrange transport for normal-use slip, burning odor, or unreliable drive.',
    },
    {
      question: 'Do worn clutch plates always need to be replaced with the springs?',
      answer:
        'Not automatically. Friction discs, steel plates, and springs should be inspected and measured against the service information for that motorcycle. Replace the parts that are damaged or outside their specified limits.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'California Department of Motor Vehicles',
      title: 'California Motorcycle Handbook',
      url: 'https://www.dmv.ca.gov/portal/file/motorcycle-driver-handbook-pdf/',
      sourceType: 'government',
      notes:
        'Advises riders to confirm that the clutch works smoothly and to investigate motorcycle problems before entering traffic or operating at freeway speeds.',
    },
    {
      publisher: 'Honda Motor Co., Ltd.',
      title: '2025 SCL500 Owner’s Manual',
      url: 'https://cdn.powersports.honda.com/documentum/MWOM/ml.remawmom.amlp2525omen.pdf',
      sourceType: 'manufacturer',
      notes:
        'Gives model-specific clutch free-play and oil requirements, warns that improper free-play adjustment causes premature clutch wear, and says the motorcycle should accelerate smoothly after adjustment.',
    },
    {
      publisher: 'Honda Motor Co., Ltd.',
      title: '2025 CRF250R/RX/RWE Competition Handbook',
      url: 'https://cdn.powersports.honda.com/documentum/MWOM/ml.remawmom.ak952525chen.pdf',
      sourceType: 'manufacturer',
      notes:
        'Directs inspection if correct free play cannot be obtained or the clutch still slips, and provides service checks for friction discs, plates, springs, and hydraulic components.',
    },
    {
      publisher: 'JASO Engine Oil Standards Implementation Panel',
      title: 'Motorcycles—Four-Stroke Cycle Gasoline Engine Oils (JASO T 903:2023) Implementation Manual',
      url: 'https://www.jalos.or.jp/onfile/pdf/4T_EV2305.pdf',
      sourceType: 'standards_body',
      notes:
        'Describes motorcycle oil performance classifications based partly on clutch-friction testing and the procedures for labeling conforming oils.',
    },
    {
      publisher: 'Suzuki Canada Inc.',
      title: 'JASO T 903 Engine Oil Standard',
      url: 'https://www.suzuki.ca/wp-content/uploads/SUZUKI-JASO-Standard-Sheet_EN.pdf',
      sourceType: 'manufacturer',
      notes:
        'Explains that oil friction classification matters to shared engine and wet-clutch lubrication and that using MB oil where MA is specified may cause clutch slippage.',
    },
    {
      publisher: 'Society of Automotive Engineers of Japan',
      title: 'Optimized Wet Clutch Design',
      url: 'https://saemobilus.sae.org/papers/optimized-wet-clutch-design-2019-32-0553',
      sourceType: 'academic',
      notes:
        'Explains that motorcycle wet-clutch life and performance depend on energy generated during slip and heat dissipation, and that higher temperature can increase friction-material wear and reduce torque capacity.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Owner’s manual for the exact motorcycle',
      description:
        'Provides the correct clutch-control procedure, oil specification, maintenance checks, and model-specific warnings.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Clutch free-play measuring tool',
      description:
        'A small ruler or suitable gauge helps check a cable-operated lever against the measurement in the owner’s manual.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer-specified motorcycle oil',
      description:
        'Needed when correcting an oil mismatch on a wet-clutch motorcycle; the label must meet every specification required by the exact model.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Motorcycle repair and transport service',
      description:
        'Appropriate when the clutch slips during ordinary use, the hydraulic system is faulty, or the motorcycle cannot deliver reliable drive.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'motorcycle-clutch-lever-play',
      anchorText: 'Can I ignore incorrect motorcycle clutch lever play?',
      relationshipType: 'cause',
    },
    {
      slug: 'loose-motorcycle-chain',
      anchorText: 'Can I ignore a loose motorcycle chain?',
      relationshipType: 'related',
    },
    {
      slug: 'worn-motorcycle-sprocket',
      anchorText: 'Can I ignore a worn motorcycle sprocket?',
      relationshipType: 'related',
    },
  ],
};
