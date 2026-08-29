import type { ProblemSeed } from '../types';

/**
 * Home > Safety > Alarms > Chirping Smoke Alarm.
 *
 * The distinction the page is built around: a chirp is a maintenance
 * signal, and the alarm is still working while it chirps. The hazard is
 * what people do about it — pulling the battery to stop the noise, which
 * USFA describes as the same as having no smoke alarm at all. The second
 * distinction is chirp versus alarm: one chirp about once a minute is a
 * battery, three loud beeps is fire, four beeps is carbon monoxide.
 */
export const chirpingSmokeAlarm: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'alarms',
  slug: 'chirping-smoke-alarm',
  canonicalPath: '/home/safety/alarms/chirping-smoke-alarm/',
  name: 'Chirping Smoke Alarm',
  eyebrow: 'Home · Safety · Alarms',

  h1: 'Can I Ignore a Smoke Alarm That Keeps Chirping?',
  seoTitle: 'Chirping Smoke Alarm: What the Beep Means | Can I Ignore It',
  metaDescription:
    'A chirping smoke alarm is a low battery or an alarm at end of life. See how to tell them apart, what to do tonight, and which beeps mean get out.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I leave it?',
  canIUseItLabel: 'No, but it is a quick fix',

  shortAnswer:
    'No. On most alarms a single chirp about once a minute means the battery is nearly dead, and an alarm with a dead battery is the same as no alarm at all. Change the battery tonight. If it still chirps, or the alarm is past 10 years from its manufacture date, replace the unit.',

  whyItMattersHeading: 'Why Does a Chirping Smoke Alarm Matter?',
  whyItMatters: [
    'The chirp is the alarm telling you it is about to stop protecting you. USFA is blunt about where this ends: a smoke alarm with a dead or missing battery is the same as having no smoke alarm at all, and pulling the battery to stop the noise is how homes end up unprotected for months.',
    'A chirp that survives a fresh battery is different. NFPA says that alarm has reached end of life and the unit has to be replaced. Alarms are also replaced 10 years from the manufacture date on the back, whatever the battery is doing — the sensor degrades whether or not the alarm has ever gone off.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Out and Call 911 If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Chirp patterns, low-battery and end-of-life signals, the 10-year replacement rule, hardwired backup batteries and the alarm patterns meaning fire or CO, checked against USFA, CPSC and NFPA guidance.',
  disclaimer:
    'General home fire-safety guidance. Alarm sounds vary by brand and model, and combination smoke and CO alarms use different patterns for each hazard. Check the label on your own alarm or its user guide when a pattern does not match what is described here.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-chirp-a-minute',
      label: 'One chirp, roughly once a minute',
      shortDescription: 'The steady, evenly spaced single chirp most alarms use for a low battery.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Low battery',
      resultBody:
        'This is the standard low-battery signal. The alarm still works, but not for long. Fitting a fresh battery ends it.',
      recommendedAction: 'Put in a new battery tonight, then press the test button until it sounds.',
    },
    {
      slug: 'chirps-after-new-battery',
      label: 'It still chirps after a new battery',
      shortDescription: 'You changed the battery and the chirp came back.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The alarm is at end of life',
      resultBody:
        'NFPA treats a chirp that survives a battery change as end of life. No amount of cleaning or resetting fixes it.',
      recommendedAction: 'Replace the whole alarm, not the battery.',
    },
    {
      slug: 'alarm-past-ten-years',
      label: 'The date on the back is more than 10 years ago',
      shortDescription: 'Every alarm carries a manufacture date on the back of the housing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Past its replacement date',
      resultBody:
        'USFA replaces alarms 10 years from the manufacture date. An expired alarm may chirp, or may simply fail quietly when it matters.',
      recommendedAction: 'Replace it, and check the date on every other alarm in the house while you are at it.',
    },
    {
      slug: 'hardwired-alarm-chirping',
      label: 'The alarm is wired in and still chirping',
      shortDescription: 'Hardwired alarms carry a backup battery for power cuts.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The backup battery is dying',
      resultBody:
        'Mains power keeps the alarm running, so it is easy to assume the chirp is cosmetic. It is not: the backup is what protects you when a fire takes out the power.',
      recommendedAction: 'Replace the backup battery. USFA says to change it at least once a year regardless.',
    },
    {
      slug: 'sealed-battery-alarm',
      label: 'It has a sealed 10-year battery',
      shortDescription: 'Some alarms have a lithium battery that is not meant to come out.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The unit is finished',
      resultBody:
        'On a sealed alarm the battery and the alarm expire together. There is nothing to open and nothing to swap.',
      recommendedAction: 'Replace the alarm.',
    },
    {
      slug: 'chirps-only-at-night',
      label: 'It only chirps in the small hours',
      shortDescription: 'Chirping that starts overnight and stops by morning.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Still a low battery',
      resultBody:
        'A cold house drops battery voltage enough to trigger the warning, which is why this so often starts at night. The battery is still going.',
      recommendedAction: 'Change the battery rather than waiting to see whether it settles down.',
    },
    {
      slug: 'several-alarms-chirping',
      label: 'More than one alarm is chirping',
      shortDescription: 'Two or more units in the house, usually installed at the same time.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'They are ageing together',
      resultBody:
        'Alarms fitted on the same day reach end of life on the same day. Fixing one and leaving the rest buys you nothing.',
      recommendedAction: 'Check every alarm in the house, batteries and dates, in one pass.',
    },
    {
      slug: 'battery-removed',
      label: 'Someone took the battery out to stop the noise',
      shortDescription: 'The chirp has gone and so has the protection.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'You have no smoke alarm',
      resultBody:
        'This is the outcome USFA warns about. The room now has a plastic disc on the ceiling and nothing else.',
      recommendedAction: 'Put a working battery in now. If none is to hand, buy one tonight.',
    },
    {
      slug: 'three-loud-beeps',
      label: 'Three loud beeps, over and over',
      shortDescription: 'Beep, beep, beep — pause — beep, beep, beep.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'That is not a chirp. That is smoke or fire',
      resultBody:
        'NFPA: three loud beeps in a repeating set means smoke or fire. Nothing on this page applies to it.',
      recommendedAction: 'Get everyone out, stay out, and call 911.',
    },
    {
      slug: 'four-beeps',
      label: 'Four beeps, then a pause',
      shortDescription: 'A combination alarm uses a separate pattern for carbon monoxide.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Carbon monoxide',
      resultBody:
        'Four beeps and a pause is the carbon monoxide pattern on most combination alarms. You cannot smell CO and you cannot judge it by how you feel.',
      recommendedAction: 'Get everyone into fresh air, then call 911 from outside.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'You leave it chirping',
      title: 'The noise becomes background',
      description: 'The alarm still works. Everyone in the house stops hearing the chirp within a day or two.',
      severity: 'info',
      chainLabel: 'Chirp ignored',
    },
    {
      stageLabel: 'Someone gets tired of it',
      title: 'Someone pulls the battery',
      description: 'The usual way a chirp gets resolved at 3am. The noise stops, and so does the protection.',
      severity: 'caution',
      chainLabel: 'Battery removed',
    },
    {
      stageLabel: 'Days later',
      title: 'The alarm is silent for the wrong reason',
      description: 'A dead or missing battery looks exactly like a working alarm from the floor.',
      severity: 'warning',
      chainLabel: 'No detection',
    },
    {
      stageLabel: 'Weeks later',
      title: 'A fire starts with nothing listening',
      description: 'Smoke spreads through the house at its own pace. Nothing wakes anyone.',
      severity: 'warning',
      chainLabel: 'Fire grows unnoticed',
    },
    {
      stageLabel: 'The night it matters',
      title: 'No warning while everyone is asleep',
      description: 'Working smoke alarms exist for the hours nobody is awake to smell smoke. This is the gap they close.',
      severity: 'danger',
      chainLabel: 'No warning asleep',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Single chirp, battery not yet changed',
      ignoreAnswer: 'Only until tonight',
      severity: 'warning',
      whatToDo: 'Fit a fresh battery and test the alarm.',
    },
    {
      situation: 'Chirp continues after a new battery',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Replace the unit. The battery is not the problem.',
    },
    {
      situation: 'Alarm past 10 years from its manufacture date',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Replace it whether or not it is chirping.',
    },
    {
      situation: 'Hardwired alarm chirping on backup battery',
      ignoreAnswer: 'Only until tonight',
      severity: 'warning',
      whatToDo: 'Replace the backup battery and test.',
    },
    {
      situation: 'Battery removed to stop the noise',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Put a working battery in before anyone sleeps in the house.',
    },
    {
      situation: 'Three loud repeating beeps',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Leave the building and call 911.',
    },
    {
      situation: 'Four beeps and a pause on a combination alarm',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Get outside into fresh air, then call 911.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Work out which alarm is chirping',
      body: 'In a house with several alarms the sound bounces and the wrong one gets blamed. Stand under each in turn until the chirp is clearly overhead.',
    },
    {
      title: 'Change the battery',
      body: 'Twist the alarm off its bracket, swap the battery, and refit it. Use the battery type printed inside the housing.',
    },
    {
      title: 'Read the date on the back',
      body: 'Twist the alarm off its bracket and read the date stamped on the back. Past 10 years, replace it and skip the rest of this list.',
      destinationProblemSlug: 'expired-smoke-alarm',
      destinationLabel: 'What to do with an alarm past its date',
    },
    {
      title: 'Press the test button',
      body: 'Hold it until the alarm sounds properly, not a single beep. USFA says to do this monthly, not only after a battery change.',
    },
    {
      title: 'Check the rest of the house',
      body: 'Alarms bought together fail together. Test each one and note which rooms have none — bedrooms are the ones that matter most.',
      destinationProblemSlug: 'no-smoke-alarm-in-bedroom',
      destinationLabel: 'Bedrooms with no alarm',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Three loud beeps in a repeating set',
      description: 'Smoke or fire. Get out, stay out, call 911 from outside.',
      severity: 'danger',
    },
    {
      title: 'Four beeps and a pause',
      description: 'Carbon monoxide on a combination alarm. Get into fresh air first, then call.',
      severity: 'danger',
    },
    {
      title: 'A headache or nausea that eases when you leave the house',
      description: 'Classic carbon monoxide pattern. Do not wait for an alarm to confirm it.',
      severity: 'danger',
    },
    {
      title: 'Any alarm with no battery in it',
      description: 'USFA treats this as having no smoke alarm at all. Put a working battery in tonight.',
      severity: 'danger',
    },
    {
      title: 'The alarm sounds for no reason, repeatedly',
      description: 'Repeated false alarms end with someone disconnecting it. Replace the unit instead.',
      severity: 'warning',
    },
    {
      title: 'Scorching, staining or a burnt smell around the alarm',
      description: 'That is a wiring problem, not an alarm problem. Kill the circuit and call an electrician.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why does my smoke alarm only chirp at night?',
      answer:
        'Houses get colder overnight and battery voltage drops with temperature, which is usually enough to cross the low-battery threshold. The battery is genuinely near the end.',
    },
    {
      question: 'Can I just take the battery out until I get a new one?',
      answer:
        'No. USFA treats a missing battery as having no smoke alarm at all. If you cannot fit one now, borrow one from a less critical device tonight.',
    },
    {
      question: 'How do I tell a chirp from a real alarm?',
      answer:
        'A chirp is one short sound with a long gap. An alarm is loud and repeating: NFPA gives three beeps for smoke and four for carbon monoxide, which is what most alarms use. Check the label on yours if the pattern differs.',
    },
    {
      question: 'My alarm is hardwired. Why does it need a battery?',
      answer:
        'The battery keeps it running when the power is out, which is exactly the situation candles and generators create. USFA says replace it at least once a year.',
    },
    {
      question: 'Where is the date on a smoke alarm?',
      answer:
        'Printed on the back of the housing, so you have to twist the alarm off its bracket to read it. It is the manufacture date, not the date it was installed.',
    },
    {
      question: 'Does cleaning the alarm stop the chirping?',
      answer:
        'Dust can cause false alarms, but it does not cause the low-battery chirp. If a fresh battery does not stop it, the alarm is at end of life.',
    },
    {
      question: 'Can I replace one alarm and leave the others?',
      answer:
        'You can, but alarms installed together usually expire together. Check the date on all of them before deciding.',
    },
    {
      question: 'Do smoke alarms really expire?',
      answer:
        'Yes. The sensor degrades with age, so USFA replaces alarms 10 years from the manufacture date regardless of how they look or sound.',
    },
    {
      question: 'What if the chirping stops on its own?',
      answer:
        'It usually means the battery warmed up, not that it recovered. Change it anyway — the next stop is silence.',
    },
    {
      question: 'Is a chirping CO alarm the same problem?',
      answer:
        'The chirp means the same thing, a dying battery or an expired unit, but CO alarms have their own replacement interval. Check the label on yours.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Fire Administration',
      title: 'Smoke Alarms',
      url: 'https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/smoke-alarms/',
      sourceType: 'government',
      notes:
        'USFA states that smoke alarms need to be replaced 10 years from the manufacture date, that batteries should be replaced at least once a year, that alarms should be tested monthly, and that a smoke alarm with a dead or missing battery is the same as having no smoke alarm at all.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: "Don't Wait — Check the Date! Replace Smoke Alarms Every 10 Years",
      url: 'https://www.usfa.fema.gov/downloads/pdf/publications/infographic_2016_fpw_custom.pdf',
      sourceType: 'government',
      notes: 'USFA campaign material on finding the manufacture date on the alarm and replacing the unit on that schedule.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Smoke Alarms — Why, Where, and Which',
      url: 'https://www.cpsc.gov/s3fs-public/pdfs/blk_media_559.pdf',
      sourceType: 'government',
      notes: 'CPSC consumer guidance on smoke alarm placement, testing and battery maintenance.',
    },
    {
      publisher: 'National Fire Protection Association',
      title: 'Smoke Alarms',
      url: 'https://www.nfpa.org/education-and-research/home-fire-safety/smoke-alarms',
      sourceType: 'standards_body',
      notes:
        'NFPA states that a single chirp every 30 or 60 seconds means a low battery, and that three loud beeps in a repeating set means smoke or fire.',
    },
    {
      publisher: 'National Fire Protection Association',
      title: 'Smoke Alarm Troubleshooting',
      url: 'https://www.nfpa.org/news-blogs-and-articles/blogs/2022/02/11/smoke-alarm-smoke-detector-troubleshooting',
      sourceType: 'standards_body',
      notes:
        'NFPA states that chirping which continues after the battery has been replaced means the alarm is at the end of its life and the unit must be replaced.',
    },
    {
      publisher: 'National Fire Protection Association',
      title: 'Learn the Sounds of Fire Safety',
      url: 'https://content.nfpa.org/-/media/project/storefront/catalog/files/home-fire-safety/smoke-alarms/fpw22learnthesounds.pdf',
      sourceType: 'standards_body',
      notes: 'NFPA campaign sheet distinguishing smoke alarm and carbon monoxide alarm sound patterns, including the four-beep CO pattern.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Replacement batteries in the size printed inside the alarm',
      description: 'Usually a 9-volt or AA. The type is moulded into the battery compartment.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'A step stool you can stand on with both hands free',
      description: 'Twisting an alarm off its bracket one-handed on a chair is how this job goes wrong.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'A sealed 10-year alarm as the replacement',
      description: 'Removes the annual battery change, and the temptation to pull the battery, for the life of the unit.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Your local fire department',
      description: 'Many run free alarm checks and fit alarms for residents who cannot reach the ceiling safely.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'co-alarm-beeping', anchorText: 'Can I ignore a carbon monoxide alarm that beeps?', relationshipType: 'sibling' },
    { slug: 'expired-smoke-alarm', anchorText: 'Can I ignore a smoke alarm past its replacement date?', relationshipType: 'escalation' },
    { slug: 'smoke-alarm-goes-off-cooking', anchorText: 'Can I ignore an alarm that goes off every time I cook?', relationshipType: 'sibling' },
    { slug: 'no-smoke-alarm-in-bedroom', anchorText: 'Can I ignore a bedroom with no smoke alarm?', relationshipType: 'escalation' },
    { slug: 'warm-electrical-outlet', anchorText: 'Can I ignore an electrical outlet that feels warm?', relationshipType: 'related' },
  ],
};
