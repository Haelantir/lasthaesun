import type { ProblemSeed } from '../types';

/**
 * Mobility > Bicycles > Helmets > Cracked Bike Helmet.
 *
 * The distinction the page is built around: the foam liner is the helmet.
 * The shell is a cover. A helmet protects by crushing, and crushed foam
 * cannot crush twice — which is why the federal standard requires a label
 * warning that a helmet may, after an impact, be damaged to the point it no
 * longer protects the head. That makes this one of the few pages on this
 * site where the answer does not depend on the situation.
 */
export const crackedBikeHelmet: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'helmets',
  slug: 'cracked-bike-helmet',
  canonicalPath: '/bicycles/helmets/cracked-bike-helmet/',
  name: 'Cracked Bike Helmet',
  eyebrow: 'Bicycles · Helmets',

  h1: 'Can I Ignore a Cracked Bike Helmet?',
  seoTitle: 'Cracked Bike Helmet: Is It Still Safe to Wear? | Can I Ignore It',
  metaDescription:
    'A cracked helmet has already done its job once. See why the foam matters more than the shell, and which marks mean replace it and which do not.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I still ride in it?',
  canIUseItLabel: 'No, replace it',

  shortAnswer:
    'No. A helmet works by crushing, and foam that has already crushed cannot do it again. The federal standard requires helmets to carry a warning that an impact can damage them past the point of protecting your head. Replace it — this is not a repair.',

  whyItMattersHeading: 'Why Does a Crack Finish a Helmet?',
  whyItMatters: [
    'The hard outer shell spreads the load and slides on the road. The thick foam underneath is what actually protects you: it collapses on impact and turns a sudden stop into a slightly slower one. Once that foam has compressed, it stays compressed, and there is nothing left to absorb the next hit.',
    'This is why CPSC guidance treats visible damage — a cracked shell or a crushed liner — as the end of a helmet’s life, and why the standard makes manufacturers warn about it on the helmet itself. A helmet that looks nearly fine and a helmet that is fine are not the same thing, and there is no way to test yours at home.',
  ].join('\n\n'),

  redFlagsHeading: 'Replace the Helmet Immediately If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Crash damage and cracks, shell versus liner damage, and the labelling and impact requirements of the federal bicycle helmet standard, checked against 16 CFR Part 1203 and CPSC guidance.',
  disclaimer:
    'General guidance for bicycle helmets certified to the U.S. standard. Motorcycle, ski and climbing helmets are built to different standards with different replacement rules. Always follow the specific instructions supplied with your helmet.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'visible-crack-in-the-shell',
      label: 'There is a visible crack in the shell',
      shortDescription: 'A split you can see, anywhere on the outside.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Finished',
      resultBody:
        'CPSC treats a cracked shell as visible damage that ends the helmet. The foam under a cracked shell has almost always taken a hit too.',
      recommendedAction: 'Stop using it and replace it before your next ride.',
    },
    {
      slug: 'foam-dented-or-crushed',
      label: 'The foam is dented, crushed or crumbling',
      shortDescription: 'A flat spot, a compressed patch, or foam that has gone powdery.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The protective part is used up',
      resultBody:
        'This is the damage that matters most and the one people dismiss because the outside still looks tidy. Crushed foam has nothing left to give.',
      recommendedAction: 'Replace it. Do not try to glue, fill or tape the liner.',
    },
    {
      slug: 'crashed-but-looks-fine',
      label: 'You crashed in it but it looks undamaged',
      shortDescription: 'A fall where your head hit something, no visible mark.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Replace it anyway',
      resultBody:
        'Foam can compress without leaving a mark on the shell, and the standard’s own warning covers exactly this: an impact can damage a helmet past the point of protecting you.',
      recommendedAction: 'Retire it. Check whether the maker runs a crash-replacement scheme before buying full price.',
    },
    {
      slug: 'dropped-from-hand-height',
      label: 'You dropped it on the floor with nobody in it',
      shortDescription: 'Off a table, off the handlebars, onto a hard floor.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Usually fine',
      resultBody:
        'An empty helmet hitting the ground carries a fraction of the energy of a head inside one. Damage from that is uncommon, and it shows.',
      recommendedAction: 'Inspect the shell and the foam carefully in good light. No damage, keep riding in it.',
    },
    {
      slug: 'hairline-cracks-in-the-shell-only',
      label: 'Fine cracks in the outer plastic',
      shortDescription: 'Spidery lines in the thin shell, foam apparently intact.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat it as damage',
      resultBody:
        'You cannot see the whole liner through the shell, and cracks in the shell often mark where the foam took the load.',
      recommendedAction: 'Replace it. Guessing about the foam underneath is the risk you are actually taking.',
    },
    {
      slug: 'foam-separated-from-shell',
      label: 'The shell is peeling away from the foam',
      shortDescription: 'A gap, a lifted edge, or the shell rattling on the liner.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'It cannot work as one piece',
      resultBody:
        'Shell and liner are bonded so they behave as a unit. Separated, the shell stops spreading load into the foam.',
      recommendedAction: 'Replace it rather than re-gluing it.',
    },
    {
      slug: 'straps-or-buckle-broken',
      label: 'The straps or buckle are damaged',
      shortDescription: 'A cracked buckle, frayed webbing, an adjuster that slips.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A helmet that comes off protects nobody',
      resultBody:
        'Retention is part of what the standard tests. A helmet that shifts or leaves your head in the first moment of a crash is not in place for the impact.',
      recommendedAction: 'Replace the helmet unless the maker sells a proper replacement strap kit for that model.',
    },
    {
      slug: 'secondhand-unknown-history',
      label: 'It came secondhand and you do not know its history',
      shortDescription: 'A gift, a yard sale, a hand-me-down.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'You are trusting an unknown',
      resultBody:
        'Crash damage does not always show. With a used helmet you are relying on somebody else to have told you about an impact.',
      recommendedAction: 'Check for a certification label and any damage, and treat an unknown history as a reason to buy new.',
    },
    {
      slug: 'child-helmet-with-a-crack',
      label: 'It is a child’s helmet with a crack in it',
      shortDescription: 'Bikes, scooters and helmets take a lot of dropping.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Same rule, less room for argument',
      resultBody:
        'Children fall more often and helmets are cheap next to the alternative. A cracked one is also the one most likely to have been crashed in and not mentioned.',
      recommendedAction: 'Replace it now and fit the new one properly — level, snug, buckled.',
    },
    {
      slug: 'just-a-short-ride',
      label: 'It is cracked, but the ride is short',
      shortDescription: 'To the shop, round the block, one commute until payday.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Distance is not the variable',
      resultBody:
        'Crashes do not scale with how far you planned to go. Most cycling head injuries happen close to home on ordinary rides.',
      recommendedAction: 'Borrow a helmet, or leave the bike until you have replaced it.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'The first impact',
      title: 'The foam crushes as designed',
      description: 'It absorbs the energy by collapsing, which is exactly what it is there to do.',
      severity: 'info',
      chainLabel: 'Foam crushes',
    },
    {
      stageLabel: 'Afterwards',
      title: 'The crushed area stays crushed',
      description: 'The liner does not spring back. That part of the helmet is now a spacer.',
      severity: 'caution',
      chainLabel: 'No crush left',
    },
    {
      stageLabel: 'Every ride after',
      title: 'You are wearing a helmet with a dead zone',
      description: 'It still looks like a helmet, fastens like a helmet, and feels no different on your head.',
      severity: 'warning',
      chainLabel: 'Dead zone in the liner',
    },
    {
      stageLabel: 'The next crash',
      title: 'The energy goes somewhere else',
      description: 'With nothing left to compress, the impact passes through rather than being spread over time.',
      severity: 'warning',
      chainLabel: 'Impact passes through',
    },
    {
      stageLabel: 'The outcome',
      title: 'A head injury the helmet was bought to prevent',
      description: 'This is the specific failure the standard’s warning label exists to prevent, on the specific ride you did not expect to crash on.',
      severity: 'danger',
      chainLabel: 'Head injury',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Visible crack in the shell or the foam',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop riding in it now and replace it.',
    },
    {
      situation: 'Crashed in it, no visible damage',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Retire it and ask the maker about crash replacement.',
    },
    {
      situation: 'Dropped empty onto a hard floor',
      ignoreAnswer: 'Yes, if it inspects clean',
      severity: 'info',
      whatToDo: 'Check the shell and liner in good light before the next ride.',
    },
    {
      situation: 'Scuffs and scratches from storage',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Cosmetic marks on the shell are nothing to act on.',
    },
    {
      situation: 'Shell lifting away from the liner',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Replace it — the two have to work as one piece.',
    },
    {
      situation: 'Straps frayed, or the buckle cracked',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Replace the helmet unless the maker supplies proper replacement straps.',
    },
    {
      situation: 'Secondhand with unknown history',
      ignoreAnswer: 'Not really',
      severity: 'caution',
      whatToDo: 'Inspect it fully, and prefer a new one for a child.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Take the pads out and look inside',
      body: 'Most of the foam is hidden by comfort padding. Pull the pads and check the whole liner in daylight, not under a garage bulb.',
    },
    {
      title: 'Look over the whole foam liner',
      body: 'You are looking for cracks, a visibly crushed or flattened area, foam separating from the shell, or foam that crumbles. A squeeze test will not tell you whether the liner still protects.',
    },
    {
      title: 'Check the certification label',
      body: 'A helmet sold in the US should carry a label showing it meets the CPSC standard. No label means no way to know what it was tested to.',
    },
    {
      title: 'Ask about crash replacement before buying',
      body: 'Several manufacturers replace a crashed helmet at a discount. It is worth an email before you pay full price for the new one.',
    },
    {
      title: 'Destroy the old one before binning it',
      body: 'Cut the straps. A cracked helmet left in a garage gets grabbed by whoever is heading out without one.',
      destinationProblemSlug: 'secondhand-bike-helmet',
      destinationLabel: 'Why used helmets are a gamble',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Any crack in the shell or the foam liner',
      description: 'CPSC treats visible damage as the end of the helmet.',
      severity: 'danger',
    },
    {
      title: 'A soft, flattened or crumbling patch in the foam',
      description: 'The protective layer has already been used.',
      severity: 'danger',
    },
    {
      title: 'The helmet was on your head during a crash',
      description: 'Replace it whether or not you can see anything.',
      severity: 'danger',
    },
    {
      title: 'The shell has come away from the liner',
      severity: 'warning',
    },
    {
      title: 'Straps that slip, or a buckle that does not hold',
      severity: 'warning',
    },
    {
      title: 'No certification label anywhere inside',
      description: 'You have no idea what it was built to withstand.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'It is only a small crack. Does that really matter?',
      answer:
        'Yes. The crack marks where the load went, and the foam under it has taken that load. Size tells you where it hit, not how much protection is left.',
    },
    {
      question: 'Can a cracked helmet be repaired?',
      answer: 'No. Glue and tape restore the appearance and none of the function, because what matters is foam that can still crush.',
    },
    {
      question: 'Do I have to replace it after a crash even if it looks perfect?',
      answer:
        'Yes. Foam compresses without marking the shell, and the standard requires helmets to warn that an impact can damage them past the point of protecting you.',
    },
    {
      question: 'What if I just dropped it in the garage?',
      answer:
        'An empty helmet hitting the floor is a different event from a head inside one hitting the road. Inspect it, and if it is clean, carry on.',
    },
    {
      question: 'Is the shell or the foam the important part?',
      answer:
        'The foam. The shell spreads the load and lets your head slide instead of catching; the liner is what absorbs the energy.',
    },
    {
      question: 'How do I know if the foam is damaged?',
      answer:
        'Take the pads out and look at the whole liner in good light for cracks, a crushed or flattened area, or crumbling foam. If the helmet was on your head in a crash, replace it whatever the liner looks like.',
    },
    {
      question: 'Do helmets expire?',
      answer:
        'Manufacturers give a replacement interval, usually in the instructions. Follow the one for your helmet — the material and the fittings both age.',
    },
    {
      question: 'Is a cracked helmet better than no helmet?',
      answer:
        'That is the wrong comparison to be making at the price of a new one. Buy the replacement rather than arguing yourself into one more ride.',
    },
    {
      question: 'Are more expensive helmets safer?',
      answer:
        'Every helmet legally sold in the US has to meet the same federal minimum standard, so none of them is uncertified. Price mostly buys weight, ventilation, fit and extra features; it does not follow that two helmets perform identically in a crash.',
    },
    {
      question: 'What do I do with the old one?',
      answer: 'Cut the straps off so nobody wears it, then check whether your local recycling takes the shell and the liner separately.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: '16 CFR Part 1203 — Safety Standard for Bicycle Helmets',
      url: 'https://www.ecfr.gov/current/title-16/chapter-II/subchapter-B/part-1203',
      sourceType: 'regulation',
      notes:
        'The federal standard bicycle helmets sold in the US must meet. It sets impact-attenuation and retention-system requirements and requires labelling that warns the user a helmet may, after receiving an impact, be damaged to the point that it is no longer adequate to protect the head against further impacts.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: '16 CFR Part 1203 Subpart A — The Standard',
      url: 'https://www.ecfr.gov/current/title-16/chapter-II/subchapter-B/part-1203/subpart-A',
      sourceType: 'regulation',
      notes:
        'The performance requirements themselves, including the impact-attenuation test a helmet fails if failure can be induced at any permitted impact site, anvil type or conditioning environment.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Which Helmet for Which Activity?',
      url: 'https://www.cpsc.gov/s3fs-public/349-WhichHelmetBrochure_3-23-2026_PRINT_0.pdf',
      sourceType: 'government',
      notes:
        'CPSC consumer brochure stating that helmets should be replaced when visibly damaged, such as a cracked shell or crushed liner, and when the manufacturer directs.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Recreational Helmets',
      url: 'https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Topics/Recreational-Helmets',
      sourceType: 'government',
      notes: 'CPSC overview of helmet standards by activity, and why a helmet built for one sport is not interchangeable with another.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Bicycle Helmets: Business Guidance',
      url: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Bicycle-Helmets',
      sourceType: 'government',
      notes: 'CPSC summary of the certification, testing and labelling obligations that sit behind the label inside a helmet.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'A replacement helmet with a CPSC certification label',
      description: 'Every helmet legally sold in the US must meet the same federal minimum standard, so fit and comfort are the main things you are choosing between.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Your manufacturer’s crash-replacement policy',
      description: 'Often a discounted replacement for a helmet that has been crashed in. Worth checking before you buy.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'A bike shop fitting',
      description: 'A helmet that sits back on the head or rocks loose is doing less than the label suggests, whatever condition it is in.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'The instructions that came with the helmet',
      description: 'Where the manufacturer’s own replacement interval and inspection advice live.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'dropped-bike-helmet', anchorText: 'Can I ignore a helmet I dropped on the ground?', relationshipType: 'sibling' },
    { slug: 'old-bike-helmet', anchorText: 'Can I ignore how old my bike helmet is?', relationshipType: 'sibling' },
    { slug: 'secondhand-bike-helmet', anchorText: 'Can I ignore the history of a secondhand helmet?', relationshipType: 'related' },
    { slug: 'loose-helmet-straps', anchorText: 'Can I ignore helmet straps that will not stay tight?', relationshipType: 'escalation' },
    { slug: 'helmet-too-big-for-a-child', anchorText: 'Can I ignore a helmet that is too big for my child?', relationshipType: 'related' },
  ],
};
