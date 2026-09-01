import type { Pairing } from '../types';

/**
 * Pyrex in Oven.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const pyrexInOven: Pairing = {
  subjectSlug: 'pyrex',
  subjectName: 'Pyrex',
  subjectKind: 'Brand',
  subjectNote: 'Kitchenware and bakeware brand',

  relation: 'in',

  targetSlug: 'oven',
  targetName: 'Oven',
  targetKind: 'Appliance',
  targetNote: 'Conventional or convection cooking appliance',

  eyebrow: 'Kitchen · Bakeware',
  h1: 'Can I Use Pyrex in an Oven?',
  seoTitle: 'Is Pyrex Oven-Safe? Rules for Safe Baking | Can I Use It With',
  metaDescription:
    'Yes, with limits: undamaged Pyrex glass bakeware can go in a fully preheated conventional or convection oven if you avoid direct heat and sudden temperature changes.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Current U.S. Pyrex glass bakeware can be used in a fully preheated conventional or convection oven when the piece is undamaged and its instructions allow oven use. Keep plastic and wood lids out, and do not use the dish under a broiler, in a toaster or countertop oven, over direct heat, or through a sudden temperature change.',

  mainRisk: 'Glass shattering',
  damages: 'The Pyrex dish',
  alternative: 'Oven-rated metal bakeware',

  conditionsOk: [
    'Use an undamaged Pyrex glass dish whose product instructions approve oven use.',
    'Fully preheat the conventional or convection oven before putting the dish inside.',
    'Add enough liquid to cover the dish bottom before cooking food that may release liquid.',
    'Handle the hot dish with dry potholders and place it on a cooling rack, dry cloth, dry potholder, or wood or cork trivet.',
  ],
  conditionsNever: [
    'Do not place Pyrex in the oven while the oven is preheating.',
    'Do not use it under a broiler, on a stovetop or grill, or in a toaster or countertop oven.',
    'Do not put plastic or wood Pyrex lids in a conventional or convection oven.',
    'Do not transfer a frozen dish directly to a hot oven, add liquid to hot glass, or place hot glass on a cool or wet surface.',
    'Do not use a piece that is chipped, cracked, broken, or severely scratched.',
  ],

  mechanisms: [
    {
      title: 'Temperature gradients stress glass',
      body: 'Glass expands when heated and contracts when cooled. Direct element exposure, cold liquid on hot glass, or contact with a cool wet surface can make parts of the dish change temperature at different rates. The resulting stress can fracture the glass.',
    },
    {
      title: 'Existing flaws can spread',
      body: 'Chips, cracks, and severe scratches leave weak points where a fracture can start. Heat and handling stress can extend the flaw until the dish breaks.',
    },
  ],

  calloutLabel: 'The Pyrex name',
  calloutBody: [
    'Pyrex is a brand, and the logo appears on more than one kind of product. Current U.S. Pyrex glass bakeware is approved for preheated conventional and convection ovens; plastic or wood lids, canisters, and some accessories have different rules.',
    'The common mistake is reading “oven-safe” as permission for any heated appliance or oven mode. Pyrex excludes broilers, toaster and countertop ovens, and other direct-heat setups because they can heat the glass unevenly.',
  ],

  sources: [
    {
      publisher: 'Pyrex',
      title: 'Product Warranties Safety and Usage',
      url: 'https://pyrexhome.com/pages/product-warranties-safety-and-usage',
      kind: 'manufacturer',
    },
    {
      publisher: 'Pyrex',
      title: 'Frequently Asked Questions',
      url: 'https://pyrexhome.com/pages/frequently-asked-questions',
      kind: 'manufacturer',
    },
    {
      publisher: 'Pyrex',
      title: 'Pyrex Deep 4-piece Baking Dish Set with Sage Lids',
      url: 'https://pyrexhome.com/products/pyrex-deep-4-piece-baking-dish-set-with-sage-lids',
      kind: 'manufacturer',
    },
    {
      publisher: 'National Institute of Standards and Technology',
      title: 'Fractography of Ceramics and Glasses, Third Edition',
      url: 'https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.960-16e3.pdf',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed current U.S. Pyrex use-and-care, FAQ, and product guidance, plus NIST material on thermal shock and glass fracture.',
};
