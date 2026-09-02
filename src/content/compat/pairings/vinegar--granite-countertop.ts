import type { Pairing } from '../types';

/**
 * Vinegar on Granite Countertop.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const vinegarOnGraniteCountertop: Pairing = {
  subjectSlug: 'vinegar',
  subjectName: 'Vinegar',
  subjectKind: 'Liquid',
  subjectNote: 'Dilute acetic acid solution',

  relation: 'on',

  targetSlug: 'granite-countertop',
  targetName: 'Granite Countertop',
  targetKind: 'Surface',
  targetNote: 'Natural stone kitchen work surface',

  eyebrow: 'Kitchen · Countertop Care',
  h1: 'Can I Use Vinegar on a Granite Countertop?',
  seoTitle: 'Vinegar on Granite: Safe Cleaner or Surface Risk? | Can I Use It With',
  metaDescription:
    'No. Avoid vinegar on granite because it can degrade some sealers and may dull or discolor acid-sensitive minerals. Use a pH-neutral stone cleaner.',

  verdict: 'no',
  shortAnswer:
    'No. Do not use vinegar as a routine cleaner on a granite countertop unless the stone supplier and sealer manufacturer confirm that exact installation is compatible. If you spilled it once, blot it up, clean with mild dish soap and water, rinse, and dry the area. Granite is often acid-resistant, but some slabs contain vulnerable minerals, and vinegar can degrade or discolor applied treatments.',

  mainRisk: 'Dulling and staining',
  damages: 'Sealer and finish',
  alternative: 'pH-neutral stone cleaner',

  conditionsOk: [
    'For an accidental spill, blot it up immediately, wash with mild dish soap and water, rinse thoroughly, and dry with a soft cloth.',
    'For routine cleaning, use a pH-neutral cleaner labeled for natural stone.',
    'Use vinegar only if your stone supplier identifies the slab as compatible and the sealer manufacturer also approves it.',
    'Test any approved cleaner on an inconspicuous area before applying it across the counter.',
  ],
  conditionsNever: [
    'Do not use vinegar, diluted or full strength, as a daily or recurring granite cleaner.',
    'Do not leave an accidental vinegar spill standing on the surface.',
    'Do not assume an impregnating sealer makes the stone acid-proof.',
    'Do not use vinegar when the stone type or applied treatment is unknown.',
    'Do not try to remove a dull spot with more vinegar or an abrasive cleaner.',
  ],

  mechanisms: [
    {
      title: 'Sealer repellency can drop',
      body: 'Vinegar can degrade or discolor some sealers and impregnators. As the treatment loses effectiveness, the countertop becomes more susceptible to stains from later spills.',
    },
    {
      title: 'Vulnerable minerals can react',
      body: 'Most granite is siliceous and generally resists common kitchen acids. Some slabs contain acid-sensitive trace minerals, so vinegar can leave localized dulling or discoloration.',
    },
  ],

  calloutLabel: 'Granite varies',
  calloutBody: [
    'Granite has a reputation for shrugging off kitchen acids, and many siliceous granites are more acid-resistant than marble. That is why one splash may clean up without leaving a visible mark.',
    'The slab may still contain acid-sensitive minerals, and its sealer or impregnator can react differently from the main stone. Vinegar is a poor default cleaner unless the exact stone and applied treatment are confirmed compatible.',
  ],

  sources: [
    {
      publisher: 'Natural Stone Institute',
      title: 'Natural Stone Countertop Sanitation',
      url: 'https://www.naturalstoneinstitute.org/stoneprofessionals/technical-bulletins/sanitation/',
      kind: 'industry',
    },
    {
      publisher: 'Natural Stone Institute',
      title: 'Care & Cleaning of Natural Stone',
      url: 'https://www.naturalstoneinstitute.org/consumers/care/',
      kind: 'industry',
    },
    {
      publisher: 'LATICRETE',
      title: 'STONETECH Stone, Tile & Grout Care Guide',
      url: 'https://cdn-global.laticrete.com/-/media/project/laticrete-international/north-america/product-documents/marketing-information/catalogs-and-brochures/tile-and-stone-care-and-maintenance/ds-0828-0519_stonetech-tile--care-guide-brochure-pages.pdf?hash=30E25386315667917C8B4D60454498A8&rev=899f04e57e244473bd38d53c135168d8',
      kind: 'manufacturer',
    },
    {
      publisher: 'Daltile',
      title: 'Caring for & Maintaining Natural Stone',
      url: 'https://www.daltile.com/how-to/how-to-care-for-and-maintain-tile/how-to-care-for-and-maintain-natural-stone',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed vinegar spills, routine cleaning, granite mineral sensitivity, and sealer compatibility using stone-industry and manufacturer care guidance.',
};
