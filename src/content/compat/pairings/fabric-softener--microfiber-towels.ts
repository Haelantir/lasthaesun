import type { Pairing } from '../types';

/**
 * Fabric Softener on Microfiber Towels.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const fabricSoftenerOnMicrofiberTowels: Pairing = {
  subjectSlug: 'fabric-softener',
  subjectName: 'Fabric Softener',
  subjectKind: 'Product',
  subjectNote: 'Laundry additive that coats fibers',

  relation: 'on',

  targetSlug: 'microfiber-towels',
  targetName: 'Microfiber Towels',
  targetKind: 'Textile',
  targetNote: 'Fine synthetic cleaning and drying cloths',

  eyebrow: 'Laundry · Towel Care',
  h1: 'Can I Use Fabric Softener on Microfiber Towels?',
  seoTitle: 'Fabric Softener and Microfiber Towels: What to Know | Can I Use It With',
  metaDescription:
    'No. Standard fabric softener can coat microfiber and reduce absorbency and dirt pickup. Rewash promptly without softener if used by mistake.',

  verdict: 'no',
  shortAnswer:
    'No. Leave fabric softener and dryer sheets out when washing or drying microfiber towels. The residue can reduce water absorption and dirt pickup. If softener was used once, rewash the towels promptly without it and check their performance before reuse.',

  mainRisk: 'Lost absorbency',
  damages: 'Towel performance',
  alternative: 'Plain detergent',

  conditionsOk: [
    'Wash with a plain detergent or microfiber cleaner permitted by the towel manufacturer.',
    'Follow the towel’s care label for wash and dryer settings because temperature limits vary.',
    'Use a particular softener only if the towel manufacturer explicitly approves it.',
    'Check that a freshly washed towel wets evenly and absorbs clean water before returning it to demanding work.',
  ],
  conditionsNever: [
    'Do not add standard rinse-cycle fabric softener when laundering microfiber towels.',
    'Do not use dryer sheets because they can leave the same type of performance-reducing residue.',
    'Do not use detergent with built-in softener unless the towel manufacturer allows it.',
    'Do not assume a softer or more fragrant towel is still absorbing properly.',
    'Do not use a towel for glass, paint, or drying if it smears water or leaves streaks after rewashing.',
  ],

  mechanisms: [
    {
      title: 'Softener Deposits a Coating',
      body: 'Typical rinse-cycle softeners contain cationic surfactants that attach to textile surfaces. Their water-repelling portions help lubricate the fibers, producing a softer feel while making the surface harder to wet.',
    },
    {
      title: 'Residue Blocks Fiber Voids',
      body: 'Microfiber relies on tiny fibers, valleys, and open spaces to lift and hold water and particles. Softener residue coats or occupies that structure, reducing absorption and cleaning pickup.',
    },
  ],

  calloutLabel: 'Softness Can Mislead',
  calloutBody: [
    'A plush feel seems like a sign that a towel is in good condition. Fabric softener creates that feel by leaving lubricating material on the fibers, while microfiber performs best when its fine structure remains clean and open.',
    'A single accidental wash may improve after prompt rewashing without softener. Follow the towel’s own care instructions. If water still beads, smears, or passes over the towel instead of soaking in, move it to a less demanding job or replace it.',
  ],

  sources: [
    {
      publisher: '3M',
      title: 'Scotch-Brite High Performance Cloth 2010 Technical Data Sheet',
      url: 'https://multimedia.3m.com/mws/media/1459376O/scotch-brite-high-performance-cloth-2010-technical-data-sheet.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'E-Cloth USA',
      title: 'How to Wash Microfiber Cleaning Cloths',
      url: 'https://us.e-cloth.com/pages/how-to-wash-microfiber-cleaning-cloths',
      kind: 'manufacturer',
    },
    {
      publisher: 'The Rag Company',
      title: 'Frequently Asked Questions',
      url: 'https://theragcompany.com/pages/faqs',
      kind: 'manufacturer',
    },
    {
      publisher: 'Japan Oil Chemists’ Society',
      title: 'Synthesis and Performance Properties of Cationic Fabric Softeners Derived from Free Fatty Acid of Tallow Fat',
      url: 'https://www.jstage.jst.go.jp/article/jos/65/8/65_ess15276/_pdf',
      kind: 'academic',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed microfiber care instructions from three manufacturers and textile research on softener deposition, fiber wetting, and water absorbency.',
};
