import type { Pairing } from '../types';

/**
 * Bleach on Grout.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const bleachOnGrout: Pairing = {
  subjectSlug: 'bleach',
  subjectName: 'Bleach',
  subjectKind: 'Chemical',
  subjectNote: 'Chlorine-based household cleaner and disinfectant',

  relation: 'on',

  targetSlug: 'grout',
  targetName: 'Grout',
  targetKind: 'Material',
  targetNote: 'Filler sealing joints between tiles',

  eyebrow: 'Cleaning · Tile & Grout',
  h1: 'Can I Use Bleach on Grout?',
  seoTitle: 'Bleach on Grout: When It Is Safe | Can I Use It With',
  metaDescription:
    'Yes, with limits: use diluted bleach only on intact grout when its care instructions allow it. Avoid unsealed, damaged, or fade-prone colored grout.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only occasionally on intact, sealed grout when the grout and sealer instructions allow bleach. Use the product’s labeled dilution, ventilate the room, rinse as directed, and test colored grout in a hidden spot first. Avoid unsealed, porous, damaged, or recolored grout, and never mix bleach with any other cleaner.',

  mainRisk: 'Discoloration',
  damages: 'Grout and sealer',
  alternative: 'Neutral grout cleaner',

  conditionsOk: [
    'Use bleach only on intact, sealed grout when the grout and sealer care instructions allow it.',
    'Follow the bleach label for dilution, application, contact time, and rinsing.',
    'Ventilate indoor areas and wear any gloves or eye protection required by the label.',
    'Test colored grout in a hidden spot before treating a visible area.',
  ],
  conditionsNever: [
    'Never mix bleach with vinegar, ammonia, toilet-bowl cleaner, or any other cleaner.',
    'Do not use it on unsealed, porous, cracked, powdery, or otherwise damaged grout.',
    'Do not use bleach over a sealer or grout colorant whose care instructions prohibit it.',
    'Do not use it for routine maintenance; repeated use can discolor and weaken grout.',
    'Do not let runoff reach surrounding materials that the bleach label excludes, such as marble or certain metals.',
  ],

  mechanisms: [
    {
      title: 'Bleaching changes appearance',
      body: 'Sodium hypochlorite is an oxidizing bleach, so it removes color from many stain-causing compounds. Colored grout or grout colorant may lighten or become uneven.',
    },
    {
      title: 'Porosity extends contact',
      body: 'Unsealed or damaged cement grout absorbs more liquid than a sealed, intact surface. Uneven exposure within the joint can contribute to discoloration and surface degradation.',
    },
    {
      title: 'Mixtures release toxic gases',
      body: 'Bleach reacts with acids and ammonia-containing cleaners. The reaction can release chlorine or chloramine gases that can severely injure lung tissue.',
    },
  ],

  calloutLabel: 'The sealer mismatch',
  calloutBody: [
    'Bleach is sold as a whitener, so white shower grout can look like an obvious match. The missing detail is the whole surface system: the grout, any sealer or colorant, and the tile beside it each have their own care limits.',
    'Sealed grout is the better candidate, but sealing does not create universal bleach resistance. Clorox allows directed use on sealed grout, while TileLab Grout Sealer says not to maintain that sealer with bleach. If the installed products are unknown, use a neutral tile-and-grout cleaner.',
  ],

  sources: [
    {
      publisher: 'Clorox',
      title: 'How to Clean Grout Stains & Remove Mold Stains',
      url: 'https://www.clorox.com/learn/how-to-clean-grout/',
      kind: 'manufacturer',
    },
    {
      publisher: 'MAPEI',
      title: 'Can I Use Bleach on My Grout?',
      url: 'https://www.mapei.com/ca/en-ca/faq/faq-detail/can-i-use-bleach-on-my-grout',
      kind: 'manufacturer',
    },
    {
      publisher: 'Custom Building Products',
      title: 'TileLab Grout Sealer / TDS-147',
      url: 'https://www.custombuildingproducts.com/wp-content/uploads/2021/10/TDS-147.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Knowledge and Practices Regarding Safe Household Cleaning and Disinfection',
      url: 'https://www.cdc.gov/mmwr/volumes/69/wr/mm6923e2.htm',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed bleach-on-grout compatibility using Clorox, MAPEI, and Custom Building Products care guidance plus CDC instructions on ventilation and chemical mixing.',
};
