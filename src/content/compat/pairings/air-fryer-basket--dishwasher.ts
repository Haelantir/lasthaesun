import type { Pairing } from '../types';

/**
 * Air Fryer Basket washed in Dishwasher.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const airFryerBasketWashedInDishwasher: Pairing = {
  subjectSlug: 'air-fryer-basket',
  subjectName: 'Air Fryer Basket',
  subjectKind: 'Component',
  subjectNote: 'Removable air fryer cooking basket',

  relation: 'washed-in',

  targetSlug: 'dishwasher',
  targetName: 'Dishwasher',
  targetKind: 'Appliance',
  targetNote: 'Machine that washes kitchenware',

  eyebrow: 'Kitchen · Air Fryer Cleaning',
  h1: 'Can I Put an Air Fryer Basket in the Dishwasher?',
  seoTitle: 'Air Fryer Basket Dishwasher Safety | Can I Use It With',
  metaDescription:
    'Yes, if your model lists the basket as dishwasher-safe. Check the basket and crisper tray separately; otherwise hand-wash with mild soap and a soft sponge.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the manual, official product listing, or dishwasher-safe marking specifically covers the basket. Follow any top-rack-only direction. If you cannot confirm approval, hand-wash the basket with mild dish soap and a soft sponge.',

  mainRisk: 'Coating wear',
  damages: 'Nonstick finish',
  alternative: 'Hand-wash with soft sponge',

  conditionsOk: [
    'Your owner’s manual or official product page specifically lists the basket as dishwasher-safe.',
    'You follow any top-rack-only instruction for that exact part.',
    'You check the inner crisper plate or tray separately before loading it.',
    'You load the basket securely without blocking the dishwasher’s spray arms.',
  ],
  conditionsNever: [
    'Do not machine-wash a basket when its manual says to hand-wash it.',
    'Do not treat a dishwasher-safe crisper tray as proof that the outer basket is safe.',
    'Do not put the powered air fryer housing, cord, or plug in the dishwasher.',
    'Do not put a top-rack-only basket or tray on the lower rack.',
    'Do not clean a coated basket with metal scouring pads or abrasive tools.',
  ],

  mechanisms: [
    {
      title: 'Dishwasher exposure wears finishes',
      body: 'An automatic dishwasher exposes the basket to heated water, detergent, spray pressure, and drying heat. A dishwasher-safe basket is rated to tolerate that cycle; an unapproved nonstick finish may wear sooner.',
    },
    {
      title: 'Parts have separate ratings',
      body: 'The basket, outer pan, and crisper tray can use different materials and coatings. Manufacturers may approve all of them, limit one to the top rack, or require one part to be hand-washed.',
    },
  ],

  calloutLabel: 'Basket vs. Crisper Plate',
  calloutBody: [
    '“Air fryer basket” often means the entire pull-out assembly. Manuals may split that assembly into an outer basket or pan and an inner crisper plate, then give each part a different cleaning method.',
    'Coating type does not settle the question. Some coated baskets are dishwasher-safe, while others are hand-wash-only; even an approved part may wear faster in repeated machine cycles. Hand-washing with mild soap and a soft sponge is recommended when approval is missing or when the manufacturer says it preserves accessory life.',
  ],

  sources: [
    {
      publisher: 'COSORI',
      title: 'TurboBlaze 6.0-Quart Air Fryer User Manual',
      url: 'https://cosori.com/cdn/shop/files/TurboBlaze_Manual_US.pdf?v=13785879204698167237',
      kind: 'manufacturer',
    },
    {
      publisher: 'Gourmia',
      title: 'GAF789 User Manual',
      url: 'https://www.gourmia.com/pdf/GAF789%20User%20Manual%201.1.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Ninja',
      title: 'Foodi XL Pro Air Oven DT200 Series Owner’s Guide',
      url: 'https://support.ninjakitchen.com/hc/en-us/article_attachments/5061879996316',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'Dishwasher Safe & Other Tableware Symbols',
      url: 'https://www.whirlpool.com/blog/kitchen/dishwasher-safe-and-tableware-symbols.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current manufacturer manuals and guidance for coated baskets, separate crisper trays, top-rack limits, and hand-wash-only models.',
};
