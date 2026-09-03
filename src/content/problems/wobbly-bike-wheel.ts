import type { ProblemSeed } from '../types';

export const wobblyBikeWheel: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'bike-wheels-and-tires',
  slug: 'wobbly-bike-wheel',
  canonicalPath: '/bicycles/wheels-and-tires/wobbly-bike-wheel/',
  name: 'Wobbly Bike Wheel',
  eyebrow: 'Mobility · Bicycles · Wheels & Tires',

  h1: 'Can I Ignore a Wobbly Bike Wheel?',
  seoTitle: 'Wobbly Bike Wheel: When to Stop Riding and What to Check',
  metaDescription:
    'A slight wheel wobble may only need truing, but brake rub, impact damage, loose spokes, tire seating problems, or hub play mean stop riding.',

  aliases:
    ['/bicycles/wheels-and-tires/bike-wheel-out-of-true/', '/bicycles/wheels-and-tires/bent-bike-wheel/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep riding?',
  canIUseItLabel: 'Only if the wobble is slight and all safety checks pass',

  shortAnswer:
    'Probably not. A barely visible wobble that clears everything and comes with no loose spokes, rim damage, tire problem, or hub play may wait for prompt service. Stop riding if it rubs, followed an impact, is getting worse, or involves a loose wheel, spoke, rim, or tire.',

  whyItMattersHeading: 'Why a Small Wobble Can Become a Wheel Problem',
  whyItMatters: [
    'A lateral wobble means the rim or tire moves from side to side as the wheel turns. Possible causes include uneven spoke tension, a bent rim, an incorrectly seated tire, hub play, or a wheel attachment problem. Looking at the rim and tire separately helps identify what is moving.',
    'With rim brakes, the rim is the braking surface, so a wobble can make one section rub or meet the pad differently. Disc brakes may keep braking normal because the rotor is attached at the hub, but that does not remove the wheel fault. Low or uneven spoke tension can let a wheel drift farther out of true and contribute to broken spokes or rim fatigue.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Riding the Bike If:',

  lastReviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Wheel alignment, spokes, brake clearance, tire seating, impact damage, and wheel retention were checked against CPSC rules and bicycle-industry manuals.',
  disclaimer:
    'This is general triage, not an inspection. Follow the instructions for your bicycle, wheel, tire, brakes, and axle; if the cause is uncertain, do not ride until the bike is checked.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'barely-visible-wobble',
      label: 'The wobble is slight and clears the brakes and frame',
      shortDescription:
        'The rim moves only slightly, the wheel is secure, the tire is seated evenly, the spokes feel intact, and there is no visible rim damage.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'It can wait briefly, but it still needs attention',
      resultBody:
        'A small, stable deviation without contact or damage is more consistent with a routine truing issue than an immediate failure. There is no universal visual threshold that proves a wobble is safe.',
      recommendedAction:
        'Arrange wheel truing. If you ride before service, keep it gentle and avoid rough surfaces, hard braking, speed, and heavy loads. Walking or transporting the bike is safer.',
    },
    {
      slug: 'rim-brake-pad-contact',
      label: 'The rim hits a brake pad on every turn',
      shortDescription:
        'A repeating scrape appears as the high side of the rim passes through a rim-brake caliper.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop normal riding and correct the wheel or brake setup',
      resultBody:
        'The rim is also the braking surface. Repeated contact causes drag, and the changing pad clearance can make braking feel uneven.',
      recommendedAction:
        'Do not open the brake release and continue riding as a workaround. Have the wheel trued and confirm that the pads contact only the intended braking surface.',
    },
    {
      slug: 'wobble-after-impact',
      label: 'The wobble appeared after a pothole, curb strike, crash, or hard landing',
      shortDescription: 'A previously straight wheel began wobbling immediately after a significant impact.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the impact as possible wheel damage',
      resultBody:
        'An impact can bend the rim, disturb spoke tension, damage the tire, or affect the hub and axle. Spoke adjustment cannot safely repair every permanently bent or cracked rim.',
      recommendedAction:
        'Stop riding and inspect the rim, spokes, tire, hub, and wheel attachment. Have the wheel evaluated before using the bike again.',
    },
    {
      slug: 'obviously-loose-spoke',
      label: 'A spoke is obviously loose',
      shortDescription:
        'One spoke has much less tension than nearby spokes, rattles, or can be moved unusually far by hand.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The wheel is no longer sharing its load correctly',
      resultBody:
        'Low spoke tension can let the spoke loosen further and places extra stress on neighboring spokes and the rim. The wheel may continue moving out of true.',
      recommendedAction:
        'Stop normal riding and have the spoke tension and wheel trueness corrected together. Do not tighten one nipple at random without checking the rest of the wheel.',
    },
    {
      slug: 'broken-or-missing-spoke',
      label: 'A spoke is broken or missing',
      shortDescription:
        'The spoke has snapped, detached at the hub or rim, or is no longer supporting the wheel.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not ride the wheel in this condition',
      resultBody:
        'Federal bicycle requirements do not permit missing spokes on covered bicycles, and a broken spoke changes tension throughout the wheel. The loose end may also interfere with other parts.',
      recommendedAction:
        'Secure the loose spoke only for safe handling, not for riding. Have the spoke replaced and the complete wheel tensioned and trued.',
    },
    {
      slug: 'uneven-tire-bead',
      label: 'The tire wobbles while the rim runs straight',
      shortDescription:
        'The tire’s bead line is uneven, or the casing has a bulge, while the metal rim follows a straight path.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is a tire seating or casing problem, not wheel truing',
      resultBody:
        'A tire that is not seated uniformly can appear to be a bent wheel. A casing bulge or damaged bead requires replacement rather than spoke adjustment.',
      recommendedAction:
        'Do not exceed the tire or rim pressure limit to force it straight. Deflate and reinstall it according to the tire and rim instructions, or replace it if damaged.',
    },
    {
      slug: 'wheel-or-hub-side-play',
      label: 'The whole wheel shifts when pushed sideways',
      shortDescription:
        'The rim, rotor, and hub move together relative to the fork or frame, or the axle does not appear fully secured.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop riding because the wheel may not be securely supported',
      resultBody:
        'This points away from simple rim truing and toward a loose attachment or hub problem. An improperly secured wheel can loosen, interfere with other parts, or come off.',
      recommendedAction:
        'Do not ride. Follow the axle maker’s installation instructions, and have the hub or attachment inspected if there is still any movement or uncertainty.',
    },
    {
      slug: 'visible-rim-damage',
      label: 'The rim is dented, cracked, creased, bulging, or visibly damaged',
      shortDescription:
        'The wobble coincides with structural damage, exposed carbon fibers, or a deformed section of the rim.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The rim needs inspection and may require replacement',
      resultBody:
        'Truing changes spoke tension; it does not restore damaged rim material. Trying to pull a deformed rim straight can leave unsafe tension differences or conceal structural damage.',
      recommendedAction:
        'Stop riding and do not attempt to straighten a cracked or sharply deformed rim. Have the wheel inspected for repair or replacement.',
    },
    {
      slug: 'worsening-wobble-or-handling',
      label: 'The wobble is growing or the bike no longer handles normally',
      shortDescription:
        'The deviation has become more noticeable, or it comes with shaking, steering changes, grinding, clicking, or repeated spoke noise.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A changing wheel problem is not safe to monitor while riding',
      resultBody:
        'Worsening trueness or altered handling suggests that a component is continuing to move, loosen, or deteriorate rather than remaining a stable cosmetic defect.',
      recommendedAction:
        'Stop riding and have the wheel, tire, hub, axle, and brakes checked before further use.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The wheel no longer tracks straight',
      description:
        'The moving rim or tire may reduce clearance at the brake, fork, frame, fender, or other nearby parts.',
      severity: 'info',
      chainLabel: 'Lateral deviation',
    },
    {
      stageLabel: 'IF SPOKE TENSION IS UNEVEN',
      title: 'The load is shared unevenly',
      description:
        'Loose spokes can relax further while neighboring spokes and sections of the rim carry more of the load.',
      severity: 'caution',
      chainLabel: 'Uneven tension',
    },
    {
      stageLabel: 'IF RIDING CONTINUES',
      title: 'The wheel can move farther out of true',
      description:
        'Low or inconsistent tension can contribute to recurring wobble, broken spokes, and rim fatigue.',
      severity: 'warning',
      chainLabel: 'Progressive wheel damage',
    },
    {
      stageLabel: 'IF CLEARANCE DISAPPEARS',
      title: 'Brakes, tire, or frame may be affected',
      description:
        'A rim-brake pad can drag, while a larger deviation may let the tire or rim touch a fixed part of the bicycle.',
      severity: 'warning',
      chainLabel: 'Contact and interference',
    },
    {
      stageLabel: 'IF THE WHEEL OR ATTACHMENT FAILS',
      title: 'The rider can lose control',
      description:
        'A failed rim, tire, spoke system, hub, or wheel attachment can abruptly affect steering, support, or wheel rotation.',
      severity: 'danger',
      chainLabel: 'Loss of control',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation:
        'Barely visible rim wobble, with secure attachment, even tire seating, intact spokes, normal brakes, and no damage',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Arrange truing and monitor it before every ride. Avoid hard use, and stop if the wobble grows or any other symptom appears.',
    },
    {
      situation: 'Rim contacts a rim-brake pad on each revolution',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop normal riding. Have the wheel trued and the brake pads aligned before using the bike again.',
    },
    {
      situation: 'Disc brake works normally, the rotor is straight, and the rim wobble is slight',
      ignoreAnswer: 'Briefly, after all other checks',
      severity: 'caution',
      whatToDo:
        'Disc brakes may hide the braking symptom, but the wheel still needs truing. Do not ride if there is damage, loose hardware, or spoke trouble.',
    },
    {
      situation: 'Wobble began after a pothole, crash, curb strike, or hard landing',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Inspect the complete wheel and tire, then have any uncertain or visible damage evaluated before riding.',
    },
    {
      situation: 'Any spoke is loose, broken, bent, detached, or missing',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Keep the wheel out of service until the spoke and the wheel’s overall tension and trueness have been corrected.',
    },
    {
      situation: 'The tire bead is uneven or the tire casing has a bulge',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Deflate the tire and correct its installation, or replace it if the bead or casing is damaged.',
    },
    {
      situation: 'The axle is not secure or the whole wheel has side-to-side play',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Do not ride. Correct the wheel attachment according to its instructions or have the hub and axle inspected.',
    },
    {
      situation: 'The rim has a crack, dent, crease, bulge, flat spot, or exposed carbon fibers',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop using the wheel and have it assessed for replacement. Truing is not a structural repair.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm whether the rim or tire is wobbling',
      body:
        'Raise the wheel and spin it while keeping fingers, clothing, and tools clear. Watch the rim against a fixed point on the fork or frame, then watch the tire’s bead line. A straight rim with a moving tire points to tire seating or casing trouble.',
    },
    {
      title: 'Check the axle and hub for movement',
      body:
        'Confirm that the axle is fully seated and secured using the manufacturer’s instructions. Push the rim gently from side to side. Movement of the entire wheel may indicate attachment or hub play rather than an out-of-true rim.',
      destinationProblemSlug: 'play-in-a-bike-hub',
    },
    {
      title: 'Inspect every spoke and the full rim',
      body:
        'Look for loose, broken, bent, or detached spokes and for cracks, dents, scoring, or deformation at the rim and spoke holes. Do not correct one loose spoke without checking overall trueness and tension.',
      destinationProblemSlug: 'loose-bike-spoke',
    },
    {
      title: 'Check the brake system separately',
      body:
        'With rim brakes, watch the gap between both pads and the rim. With disc brakes, check the rotor at the caliper separately from the rim. Brake rub may need brake adjustment, wheel truing, or both.',
      destinationProblemSlug: 'bike-brakes-rubbing',
    },
    {
      title: 'Arrange a wheel inspection and truing',
      body:
        'A shop can check lateral and radial trueness, spoke tension, dish, hub condition, rim damage, and tire seating. An impact-bent or cracked rim may need replacement instead of further spoke adjustment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The axle is loose or the whole wheel moves sideways',
      description:
        'This is not ordinary rim wobble. The wheel attachment or hub may not be supporting the wheel securely.',
      severity: 'danger',
    },
    {
      title: 'A spoke is loose, broken, detached, or missing',
      description:
        'The wheel’s tension balance has changed, and the damaged spoke or loose end can create additional problems.',
      severity: 'danger',
    },
    {
      title: 'The rim is cracked, sharply dented, creased, bulging, or exposing carbon fibers',
      description:
        'Structural rim damage cannot be made safe by pulling the wheel straight with spoke tension.',
      severity: 'danger',
    },
    {
      title: 'The tire bead is uneven or the casing is bulging',
      description:
        'The apparent wheel wobble may be an incorrectly seated or damaged tire that needs refitting or replacement.',
      severity: 'danger',
    },
    {
      title: 'The rim hits a brake pad or braking pulses or grabs',
      description: 'A rim-brake system depends on a straight braking surface and consistent pad clearance.',
      severity: 'warning',
    },
    {
      title: 'The wobble began immediately after an impact',
      description: 'Inspect for damage even if the wheel still turns and the wobble initially looks small.',
      severity: 'warning',
    },
    {
      title: 'The wobble is worsening or handling has changed',
      description:
        'Increasing deviation, shaking, grinding, clicking, or unusual spoke noise suggests an active mechanical problem.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'How can I tell whether the rim or the tire is wobbling?',
      answer:
        'Spin the raised wheel and watch the metal rim against a fixed point on the fork or frame. Then watch the tire’s molded bead line. If the rim stays straight while the tire moves, check tire seating and casing condition rather than adjusting spokes.',
    },
    {
      question: 'Can I ride a slightly wobbly wheel to a bike shop?',
      answer:
        'Only if the wobble is barely visible and the axle, hub, spokes, rim, tire, and brakes all pass inspection. Ride gently and stop if anything changes. Walking or transporting the bike is safer.',
    },
    {
      question: 'Does a disc brake make a wobbly rim safe?',
      answer:
        'No. A straight rotor may prevent brake pulsing or rim-pad rub, but the rim, spokes, tire, hub, and axle still have to support and guide the bicycle correctly.',
    },
    {
      question: 'Can I true the wheel without a truing stand?',
      answer:
        'A frame-mounted indicator can reveal lateral movement, and experienced riders can make minor corrections with the correct spoke wrench. Incorrect adjustments can create poor tension balance, so uncertain or impact-damaged wheels belong in a shop.',
    },
    {
      question: 'Can I release a rim brake so the wobbly wheel stops rubbing?',
      answer:
        'Do not use reduced brake clearance or a released brake as a riding workaround. It removes a symptom without correcting the wheel and may leave the brake improperly configured.',
    },
    {
      question: 'Is one loose spoke really enough to stop riding?',
      answer:
        'Yes. One loose spoke changes how nearby spokes and the rim share loads. Correcting it also requires checking the wheel’s overall tension and trueness.',
    },
    {
      question: 'Can a pothole-bent rim always be trued?',
      answer:
        'No. Spoke adjustments can correct some deviations, but a permanently bent, cracked, sharply dented, or badly tensioned rim may require replacement.',
    },
    {
      question: 'Why did the wheel wobble after I reinstalled it?',
      answer:
        'The axle may not be fully seated, the attachment may be incorrectly secured, or the brake may have shifted. Do not ride until the wheel is correctly installed and has no side play.',
    },
    {
      question: 'Can tire pressure cause an apparent wheel wobble?',
      answer:
        'An incorrectly seated tire or damaged casing can move side to side even when the rim is straight. Set pressure within the marked limits and make sure the bead line is even around both sides.',
    },
    {
      question: 'Is a front-wheel wobble more urgent than a rear-wheel wobble?',
      answer:
        'A front-wheel problem can affect steering directly, but either wheel can cause loss of control or damage nearby parts. Treat attachment, tire, spoke, and rim red flags on either wheel as no-ride conditions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Summary of Electric and Non-Powered Bicycle Standards',
      url: 'https://www.cpsc.gov/s3fs-public/Electric-and-Non-Powered-Bicycle-Standards-Summary-Report.pdf',
      sourceType: 'government',
      notes:
        'Summarizes CPSC wheel-rim strength and wheel-retention requirements, including spoke retention, free wheel rotation, and secure attachment.',
    },
    {
      publisher: 'Legal Information Institute, Cornell Law School',
      title: '16 CFR § 1512.11 - Requirements for wheels',
      url: 'https://www.law.cornell.edu/cfr/text/16/1512.11',
      sourceType: 'regulation',
      notes:
        'Reproduces the federal bicycle-wheel rule requiring no missing spokes and clearance between the tire and fork or frame throughout wheel rotation.',
    },
    {
      publisher: 'Trek Bicycle Corporation',
      title: "Trek Bicycle Owner's Manual",
      url: 'https://media.trekbikes.com/image/upload/TK_OwnersManual_EN_WEB_April2023.pdf',
      sourceType: 'manufacturer',
      notes:
        'Directs riders to check rims and spokes, verify that wheels spin straight without contacting rim-brake pads, secure axles correctly, and have damaged or loose spokes serviced.',
    },
    {
      publisher: 'Cannondale',
      title: "HollowGram Wheel Set Owner's Manual",
      url: 'https://www.cannondale.com/-/media/files/manual-uploads/manuals/019_OM%20Hollowgram%20Wheel%20Sets_134944_EN.pdf',
      sourceType: 'manufacturer',
      notes:
        'For HollowGram wheelsets, calls for inspection after an impact and says side-to-side wheel wobble, brake-clearance problems, or wheel damage require service before riding.',
    },
    {
      publisher: 'Park Tool',
      title: 'Wheel Truing (Lateral & Radial)',
      url: 'https://www.parktool.com/blog/repair-help/wheel-and-rim-truing',
      sourceType: 'industry',
      notes:
        'Explains lateral and radial trueness, identifies lateral wobble as especially important with rim brakes, and describes how spoke-tension changes affect wheel alignment.',
    },
    {
      publisher: 'Continental Tires',
      title: 'Bike Tire Maintenance',
      url: 'https://www.continental-tires.com/about-us/stories/bike-tire-maintenance/',
      sourceType: 'manufacturer',
      notes:
        'Advises checking that the tire bead is uniform, confirming that wheels run true, and investigating loose or broken spokes and wheel attachment when wobble is present.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Bicycle shop wheel inspection and truing service',
      description:
        'Checks spoke tension, lateral and radial trueness, rim centering, hub play, tire seating, brake clearance, and whether the rim is repairable.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Correctly sized spoke wrench',
      description:
        'Fits the spoke nipples without rounding them, but should be used only with an understanding of wheel tension and truing.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Truing stand or noncontact wheel indicator',
      description:
        'Provides a fixed reference for identifying where the rim moves laterally or radially as it rotates.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Bicycle pump with pressure gauge',
      description:
        'Helps set pressure within the tire and rim limits after confirming that the tire bead is installed evenly.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'loose-bike-spoke',
      anchorText: 'Could a loose bike spoke be causing the wobble?',
      relationshipType: 'cause',
    },
    {
      slug: 'play-in-a-bike-hub',
      anchorText: 'Does the bike hub have side-to-side play?',
      relationshipType: 'cause',
    },
    {
      slug: 'bike-brakes-rubbing',
      anchorText: 'Why are my bike brakes rubbing the wheel?',
      relationshipType: 'related',
    },
    {
      slug: 'cracks-in-a-bike-tire',
      anchorText: 'Are cracks in the bike tire causing the wobble?',
      relationshipType: 'related',
    },
  ],
};
