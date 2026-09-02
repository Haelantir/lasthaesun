import type { Pairing } from '../types';

/**
 * Windex on TV Screen.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const windexOnTvScreen: Pairing = {
  subjectSlug: 'windex',
  subjectName: 'Windex',
  subjectKind: 'Cleaner',
  subjectNote: 'Glass and hard-surface cleaning spray',

  relation: 'on',

  targetSlug: 'tv-screen',
  targetName: 'TV Screen',
  targetKind: 'Display',
  targetNote: 'Coated flat-panel viewing surface',

  eyebrow: 'Electronics · Screen Care',
  h1: 'Can I Use Windex on a TV Screen?',
  seoTitle: 'Windex on TV Screens: Safe or Damaging? | Can I Use It With',
  metaDescription:
    'No. Windex can damage a TV screen’s anti-glare coating, and sprayed liquid can enter the set. Use a dry microfiber cloth or follow your model’s manual.',

  verdict: 'no',
  shortAnswer:
    'No. Do not use Windex on a TV screen unless the TV’s manual explicitly approves that exact product. Windex Original contains ammonium hydroxide, and TV makers warn that window cleaners, ammonia, alcohol, and other solvents can damage anti-glare surfaces. Use a clean, dry microfiber cloth; use a barely damp cloth only when your model’s instructions allow it. If you already used Windex once, unplug the TV, let it dry fully, and check for persistent haze, uneven glare, scratches, or moisture at the bezel before using it again.',

  mainRisk: 'Coating damage',
  damages: 'Anti-glare coating',
  alternative: 'Dry microfiber cloth',

  conditionsOk: [
    'Turn off and unplug the TV before cleaning.',
    'Remove dust and fingerprints with a clean, dry microfiber cloth using light pressure.',
    'For stubborn residue, lightly dampen the cloth with distilled water only if the model’s instructions permit it, then dry the screen completely.',
    'If Windex was used accidentally, leave the set unplugged until dry, inspect the surface with the screen off, then check the picture only if no liquid reached the bezel.',
  ],
  conditionsNever: [
    'Never spray Windex, water, or another cleaner directly onto the screen.',
    'Never assume a Windex formula is screen-safe because it says ammonia-free.',
    'Never use paper towels, abrasive pads, or firm pressure on the screen.',
    'Never apply alcohol or more glass cleaner to remove haze left by the first cleaning.',
    'Never reconnect power while moisture remains on the screen, bezel, or openings.',
  ],

  mechanisms: [
    {
      title: 'Coating damage',
      body: 'Many flat-panel TVs have an anti-glare surface over the display. Window cleaners and solvents such as ammonia or alcohol can strip or damage this layer, leaving permanent changes in glare and clarity.',
    },
    {
      title: 'Liquid entry',
      body: 'Direct spray can run into the lower bezel or other openings. Moisture inside the set can cause failure, electric shock, or fire.',
    },
    {
      title: 'Surface abrasion',
      body: 'Paper towels and firm rubbing can scratch the screen’s outer surface. Thin display panels can also be damaged by excessive pressure.',
    },
  ],

  calloutLabel: 'Why Glass Cleaner Fails',
  calloutBody: [
    'A modern TV screen may look like a pane of glass, but the surface you touch can include an anti-glare or anti-reflective layer. A cleaner made for household windows can scratch, strip, or discolor that layer.',
    'Windex is a product family with different formulas. Windex Original lists ammonium hydroxide; an ammonia-free version still remains a window cleaner, and major TV makers reject window cleaners as a category. Check the TV’s model manual rather than relying on the cleaner’s front label.',
  ],

  sources: [
    {
      publisher: 'Samsung Electronics',
      title: 'How to clean your Samsung TV',
      url: 'https://www.samsung.com/us/support/answer/ANS10005221/',
      kind: 'manufacturer',
    },
    {
      publisher: 'LG Electronics',
      title: '[LG TV Cleaning] How can I keep the TV screen clean?',
      url: 'https://www.lg.com/us/support/help-library/lg-tv-cleaning-how-can-i-keep-the-tv-screen-clean--20154629490757',
      kind: 'manufacturer',
    },
    {
      publisher: 'S. C. Johnson & Son, Inc.',
      title: 'Windex® Original Glass Cleaner',
      url: 'https://whatsinsidescjohnson.com/en-us/brands/windex/glass/original-glass-cleaner',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current Windex Original ingredient disclosure and TV-cleaning guidance from Samsung and LG.',
};
