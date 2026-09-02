import type { ProblemSeed } from '../types';

export const deadPixelOnMonitor: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'displays',
  slug: 'dead-pixel-on-monitor',
  canonicalPath: '/technology/computers/displays/dead-pixel-on-monitor/',
  name: 'Dead Pixel on a Monitor',
  eyebrow: 'Technology · Computers · Displays',

  h1: 'Can I Ignore a Dead Pixel on My Monitor?',
  seoTitle: 'Dead Pixel on a Monitor: Safe to Use, Warranty, and When to Act',
  metaDescription:
    'One stable dead pixel is usually safe to live with. Learn how to confirm it, protect your return or warranty options, and spot a larger display problem.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'hard',
  canIUseItQuestion: 'Can I keep using the monitor?',
  canIUseItLabel: 'Yes, if it is one stable pixel',

  shortAnswer:
    'Yes. One stable dead pixel is usually a cosmetic display defect, not a reason to stop using the monitor. Test and document it, then use any available return or warranty option before that opportunity closes.',

  whyItMattersHeading: 'A Dead Pixel Is Usually a Panel Defect, Not a Breakdown',
  whyItMatters: [
    'A true dead pixel or subpixel stays dark in the same place because that part of the panel is no longer producing light. The rest of the monitor can remain fully usable, and a single fixed dot does not by itself show that the whole screen is failing.',
    "The practical issue is usually coverage rather than safety. Manufacturers distinguish full pixels, dark subpixels, and bright or colored subpixels, and their allowable counts vary by model and warranty program. A new monitor may also be exchangeable through the seller even when the manufacturer's pixel threshold would not qualify it for service.",
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Treat It as Just a Dead Pixel If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Pixel diagnosis, safe continued use, eye comfort, warranty variation, and escalation signs checked against Dell, LG, ViewSonic, ISO, FTC, and NEI materials.',
  disclaimer:
    'General guidance for consumer monitors. Pixel terminology and warranty thresholds vary by panel type, model, seller, region, and purchase terms. Follow the instructions and written warranty for your exact monitor.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-stable-dark-pixel',
      label: 'There is one stable dark pixel on an older monitor',
      shortDescription:
        'The dot stays black in the same location on solid-color tests, and the monitor has no other image, power, heat, or damage symptoms.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'You can keep using the monitor',
      resultBody:
        'One isolated dead pixel normally affects only that tiny part of the image. If it is outside all return and warranty coverage and does not interfere with your work, replacement is optional.',
      recommendedAction:
        "Photograph its location and confirm it with the monitor's built-in test or solid-color screens. Keep using the monitor and check again only if new symptoms appear.",
    },
    {
      slug: 'new-monitor-return-open',
      label: "The monitor is new and the seller's return window is open",
      shortDescription:
        "You noticed the pixel soon after purchase and can still request a return or exchange under the seller's written policy.",
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not let the easiest exchange option expire',
      resultBody:
        "A pixel defect is not dangerous, but living with it now may leave you paying for a replacement later. A seller's exchange policy may be more favorable than the manufacturer's pixel-defect threshold.",
      recommendedAction:
        "Check the seller's written policy and start the return or exchange before its deadline. Keep the receipt, packaging, serial number, and photos of the defect.",
    },
    {
      slug: 'covered-by-warranty',
      label: 'The monitor is under warranty, but coverage is unclear',
      shortDescription:
        "The seller's return period has ended, but the manufacturer warranty or a premium pixel guarantee may still apply.",
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Check the exact pixel policy before accepting it',
      resultBody:
        'Coverage may depend on whether the defect is a full pixel, dark subpixel, bright subpixel, cluster, or part of a premium panel program. Policies differ substantially between models.',
      recommendedAction:
        "Run the manufacturer's diagnostic, count and classify the affected pixels, then compare the result with the written policy for the exact model and region.",
    },
    {
      slug: 'bright-or-colored-dot',
      label: 'The dot is white, red, green, or blue rather than black',
      shortDescription:
        'A fixed bright or colored point is most visible on a dark background and may be classified as a bright or stuck subpixel.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'It may have better warranty coverage than a dark pixel',
      resultBody:
        'Some premium panel programs have zero tolerance for bright defects while allowing several dark subpixel defects. The classification can therefore change whether the monitor qualifies for replacement.',
      recommendedAction:
        'Test the monitor on a black background, document the color and location, and check for zero-bright-dot or premium panel coverage. Do not press on the screen.',
    },
    {
      slug: 'several-or-clustered-pixels',
      label: 'Several pixels are affected or defects form a cluster',
      shortDescription:
        'You can see multiple fixed dots, adjacent defects, or a concentrated group that interferes with the image.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The panel may meet the warranty threshold',
      resultBody:
        'Manufacturer policies often consider the number, type, and placement of pixel defects. A cluster can also be more disruptive than one isolated dot.',
      recommendedAction:
        'Count bright and dark defects separately using solid black, white, red, green, and blue screens. Contact the seller or manufacturer with photos and the exact model number.',
    },
    {
      slug: 'more-defects-appearing',
      label: 'New dead pixels keep appearing',
      shortDescription:
        'The monitor began with one fixed dot, but additional dots have appeared or the affected area is changing.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Stop treating it as one harmless blemish',
      resultBody:
        'An increasing defect count changes both usability and the likelihood of meeting a warranty threshold. It can also mean the display problem is broader than the original isolated pixel.',
      recommendedAction:
        "Record the new defects, run the monitor's diagnostic again, and arrange warranty evaluation or service rather than waiting for the image to become harder to use.",
    },
    {
      slug: 'source-specific-dot',
      label: 'The dot appears only in one app, input, or computer',
      shortDescription:
        'It disappears in the monitor menu, built-in diagnostic, another input, or when different content is displayed.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'This is probably not a dead panel pixel',
      resultBody:
        'A true panel defect stays in the same physical location regardless of the app or connected source. A changing or source-specific mark calls for separate software, cable, port, or graphics troubleshooting.',
      recommendedAction:
        "Open the monitor's own menu or diagnostic, swap inputs or cables, and test another source. Troubleshoot the computer or connection if the monitor can display the area normally.",
    },
    {
      slug: 'lines-flicker-or-dark-area',
      label: 'The dot comes with lines, flicker, image loss, or a large dark area',
      shortDescription: 'The display has broader symptoms rather than one tiny, fixed point.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is no longer an isolated dead pixel',
      resultBody:
        'Lines, intermittent image loss, flicker, bands, or a spreading dark region may involve the panel, internal electronics, signal connection, or connected computer.',
      recommendedAction:
        'Save your work, test the monitor menu and another source, inspect the signal cable, and arrange service if the broader symptoms remain.',
    },
    {
      slug: 'heat-smoke-or-burning-odor',
      label: 'The monitor is unusually hot, smells burned, sparks, or produces smoke',
      shortDescription:
        'An apparent display defect is accompanied by signs of an electrical or component failure.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Stop using it; this is a separate safety problem',
      resultBody:
        'A dead pixel does not explain smoke, sparking, a burning odor, or abnormal heat. Those signs require the monitor to be taken out of service.',
      recommendedAction:
        'Turn the monitor off and unplug it if that can be done safely. Move away from smoke or active fire and follow local emergency guidance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'One picture element stays dark',
      description:
        'A dead pixel or subpixel creates a fixed black point that is easiest to see against light, solid backgrounds.',
      severity: 'info',
      chainLabel: 'One failed pixel',
    },
    {
      stageLabel: 'IF YOU KEEP USING IT',
      title: 'The rest of the display may remain usable',
      description:
        'An isolated pixel defect does not prevent the surrounding pixels, monitor controls, inputs, or computer from operating normally.',
      severity: 'info',
      chainLabel: 'Usable screen → persistent blemish',
    },
    {
      stageLabel: 'IF IT DISTRACTS YOU',
      title: 'Image clarity and comfort can suffer',
      description:
        'A prominent defect can become distracting during reading, design, editing, or other detail-sensitive work. Constantly squinting or changing posture to avoid it can add discomfort.',
      severity: 'caution',
      chainLabel: 'Distraction → reduced comfort',
    },
    {
      stageLabel: 'IF CLAIM OPTIONS CLOSE',
      title: 'A no-cost exchange may no longer be available',
      description:
        'If applicable seller and warranty deadlines pass, correcting the defect may require paying for panel service or replacing the monitor.',
      severity: 'warning',
      chainLabel: 'Missed claim → fewer remedies',
    },
    {
      stageLabel: 'IF OTHER DISPLAY SYMPTOMS DEVELOP',
      title: 'The original assumption no longer applies',
      description:
        'New pixels, lines, flicker, image loss, or a growing dark area should be assessed as a broader display fault rather than the normal consequence of one stable dead pixel.',
      severity: 'warning',
      chainLabel: 'New symptoms → reassess',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One stable dark pixel with no other symptoms',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Confirm it with a solid-color test, photograph it, and keep using the monitor if it does not interfere with your work.',
    },
    {
      situation: 'A newly purchased monitor with an open return or exchange option',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        "Use the seller's written process before the deadline and retain the receipt, packaging, and proof of the defect.",
    },
    {
      situation: 'The monitor is under a manufacturer warranty',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        "Classify and count the defects, then compare them with the exact model's pixel policy before deciding to accept the blemish.",
    },
    {
      situation: 'A fixed white or colored dot',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Test it against a black background and check whether a zero-bright-dot or premium panel guarantee applies.',
    },
    {
      situation: 'Several defects or an adjacent cluster',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Test every solid primary color, document the count and placement, and contact the seller or manufacturer.',
    },
    {
      situation: 'Additional defects are appearing',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Repeat the diagnostic, save new photos, and arrange warranty evaluation or service.',
    },
    {
      situation: 'The mark appears only with one app, cable, input, or computer',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        "Check the monitor's own menu or diagnostic and test another source. Troubleshoot the connection or computer if the mark disappears.",
    },
    {
      situation: 'The screen also flickers, shows lines, cuts out, or develops a dark patch',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat it as a broader display problem. Save your work, test another source, and arrange service if it continues.',
    },
    {
      situation: 'There is smoke, sparking, burning odor, or abnormal heat',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Turn off and unplug the monitor if safe. Move away from smoke or fire and follow local emergency guidance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm that the dot belongs to the panel',
      body:
        'Gently clean the screen according to the monitor manual. Run the built-in diagnostic or display solid black, white, red, green, and blue screens. A panel defect remains fixed in the same physical location.',
    },
    {
      title: 'Document the defect clearly',
      body:
        'Photograph the pixel on backgrounds that make it visible. Record whether it is dark, white, or colored, its location, the number of affected points, the monitor model and serial number, and when you first noticed it.',
    },
    {
      title: 'Check the seller before relying on the warranty',
      body:
        "Look for an available return or exchange under the seller's written policy. If that route is closed, read the manufacturer's pixel policy for the exact model, panel program, purchase region, and warranty status.",
    },
    {
      title: 'Do not press, rub, tap, or massage the screen',
      body:
        "Pressure can damage the panel and may affect warranty coverage. A true dead pixel cannot be restored with software, and unsupported pixel-fixing tools should not replace the manufacturer's diagnostic process.",
    },
    {
      title: 'Separate broader display faults from one dead pixel',
      body:
        'Flicker, intermittent image loss, bands, large dark patches, or color distortion need separate troubleshooting. Test another cable, port, and source, then arrange service if the monitor itself still shows the problem.',
      destinationProblemSlug: 'flickering-monitor',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'More pixels are appearing',
      description:
        'An increasing defect count deserves a new diagnostic and warranty check, even if the original pixel was tolerable.',
      severity: 'warning',
    },
    {
      title: 'A line, band, or large dark patch develops',
      description:
        'A defect extending across many pixels is not the same as one isolated dead pixel and may involve the panel or its electronics.',
      severity: 'warning',
    },
    {
      title: 'The image flickers, cuts out, or changes color',
      description:
        "Check the signal cable and another source, but arrange service if the monitor's own menu or diagnostic is also unstable.",
      severity: 'warning',
    },
    {
      title: 'The mark moves or appears only in certain content',
      description:
        'A true dead pixel stays in one physical spot. A moving or content-specific mark may come from software, graphics hardware, a cable, or the source image.',
      severity: 'caution',
    },
    {
      title: 'The screen is cracked, dented, or pressure-damaged',
      description:
        'Physical panel damage can affect a larger area than the first visible dot. Do not press the damaged region or continue adjusting the panel by force.',
      severity: 'warning',
    },
    {
      title: 'The monitor repeatedly powers off or will not stay on',
      description:
        'Power instability is a separate hardware or connection problem, not a normal effect of one dead pixel.',
      severity: 'warning',
    },
    {
      title: 'There is smoke, sparking, burning odor, or abnormal heat',
      description:
        'Stop using the monitor. Unplug it if safe, move away from smoke or active fire, and follow local emergency guidance.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'What is the difference between a dead pixel and a stuck pixel?',
      answer:
        'A dead pixel or dark subpixel remains off and looks black on a light background. A stuck or bright subpixel remains lit and may look white, red, green, or blue, especially on a black background.',
    },
    {
      question: 'Does one dead pixel mean the whole monitor is failing?',
      answer:
        'No. One isolated pixel does not provide a reliable forecast for the rest of the panel. Reassess the monitor if additional pixels, lines, flicker, image loss, or a growing dark area appears.',
    },
    {
      question: 'Can software fix a dead pixel?',
      answer:
        'Not if it is truly dead. Dell states that a dead pixel cannot be restored with software and that correcting it requires panel replacement. A bright or colored stuck pixel is a different classification, but unsupported tools are not guaranteed to work.',
    },
    {
      question: 'Should I press or massage the pixel?',
      answer:
        "No. Applying pressure can crack or further damage the display and may affect warranty coverage. Use the manufacturer's diagnostic and support process instead.",
    },
    {
      question: 'Why can I see the pixel on white but not on black?',
      answer:
        'A dark pixel is already off, so it blends into a black background and stands out against white or other bright colors. Bright defects behave in the opposite way.',
    },
    {
      question: 'Will a warranty cover one dead pixel?',
      answer:
        'Maybe. Coverage depends on whether it is a full pixel or subpixel, whether it is dark or bright, its location and count, and the policy for your exact model. Some programs cover a single bright defect while allowing several dark subpixel defects.',
    },
    {
      question: 'Should I return a new monitor over one dead pixel?',
      answer:
        "If the seller allows an exchange and the dot bothers you, using that option is reasonable. Do not assume the manufacturer warranty will offer the same terms after the seller's deadline passes.",
    },
    {
      question: 'Can a dead pixel hurt my eyes?',
      answer:
        'A dead pixel is not known to damage your eyes. Monitor use can still cause ordinary eye fatigue, and a distracting defect may make viewing less comfortable. Take visual breaks and adjust the display if you find yourself straining.',
    },
    {
      question: 'How can I tell whether the problem is the monitor or the computer?',
      answer:
        "Open the monitor's own menu or run its built-in solid-color diagnostic. If the mark remains without the normal video image, it is in the monitor. If it appears only with one source, app, input, or cable, troubleshoot that source first.",
    },
    {
      question: 'Is panel repair worth doing after the warranty ends?',
      answer:
        'Get a quote before authorizing panel work. If the monitor is otherwise reliable and the pixel does not bother you, continued use is reasonable. Replacement becomes a personal cost and image-quality decision rather than an urgent repair.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Dell Technologies',
      title: 'Dell Display Pixel Guidelines',
      url: 'https://www.dell.com/support/kbdoc/en-us/000126004/dell-display-pixel-guidelines',
      sourceType: 'manufacturer',
      notes:
        'Defines dark, dead, bright, and stuck pixel defects; gives solid-color diagnostic steps; warns against pressure and unsupported fixes; and states that a true dead pixel requires panel replacement.',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'LG Laptop - I See Dots on the Screen',
      url: 'https://www.lg.com/us/support/help-library/lg-laptop-i-see-dots-on-the-screen-CT10000030-20154710698695',
      sourceType: 'manufacturer',
      notes:
        'Explains bright and dark pixel defects, says inactive pixels do not affect product performance or reliability, and notes that pixel policies differ by model.',
    },
    {
      publisher: 'ViewSonic',
      title: 'Limited Warranties',
      url: 'https://www.viewsonic.com/us/limited-warranties',
      sourceType: 'manufacturer',
      notes:
        'Its U.S. warranty sets different allowed pixel counts by panel resolution and requires proof of purchase, demonstrating that pixel coverage depends on the written product terms.',
    },
    {
      publisher: 'International Organization for Standardization',
      title: 'ISO/TR 9241-310:2010 — Visibility, Aesthetics and Ergonomics of Pixel Defects',
      url: 'https://www.iso.org/standard/54117.html',
      sourceType: 'standards_body',
      notes:
        'Summarizes knowledge about pixel-defect visibility, aesthetic requirements, and ergonomics. ISO states that this technical report offers guidance but does not itself impose pixel-defect requirements.',
    },
    {
      publisher: 'Federal Trade Commission',
      title: 'Warranties',
      url: 'https://consumer.ftc.gov/articles/warranties',
      sourceType: 'government',
      notes:
        'Explains that written warranties vary in coverage and claims process, advises keeping receipts and warranty records, and notes that implied-warranty rules vary by state.',
    },
    {
      publisher: 'National Eye Institute',
      title: 'Healthy Vision: Watch Out for Your Vision',
      url: 'https://www.nei.nih.gov/sites/default/files/2019-06/NEI_Healthy-Vision_booklet_WEB_508%20(1).pdf',
      sourceType: 'government',
      notes:
        'States that monitor use may cause eye fatigue but does not harm the eyes, and recommends looking away and blinking periodically to reduce eyestrain.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Built-in monitor diagnostic or solid-color pixel test',
      description:
        'Displays uniform backgrounds that make fixed dark, bright, and colored defects easier to identify and count.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Soft lint-free microfiber cloth',
      description:
        "Helps rule out dust or surface debris without pressing hard on the panel. Follow the monitor's cleaning instructions.",
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer warranty lookup and support',
      description:
        'Confirms current coverage and provides the exact pixel-defect policy and claim process for the model and purchase region.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Camera or phone for defect photos',
      description:
        'Creates a dated visual record showing the location, color, and number of defects for a seller or warranty claim.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'backlight-bleed-on-a-monitor',
      anchorText: 'Is backlight bleed on a monitor normal?',
      relationshipType: 'sibling',
    },
    {
      slug: 'flickering-monitor',
      anchorText: 'Can I ignore a monitor that keeps flickering?',
      relationshipType: 'escalation',
    },
  ],
};
