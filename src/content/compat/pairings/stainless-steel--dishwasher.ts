import type { Pairing } from '../types';

/**
 * Stainless Steel in Dishwasher.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const stainlessSteelInDishwasher: Pairing = {
  subjectSlug: 'stainless-steel',
  subjectName: 'Stainless Steel',
  subjectKind: 'Material',
  subjectNote: 'Corrosion-resistant steel alloy',

  relation: 'in',

  targetSlug: 'dishwasher',
  targetName: 'Dishwasher',
  targetKind: 'Appliance',
  targetNote: 'Automatic dishwashing appliance',

  eyebrow: 'Kitchen · Metals & Cookware',
  h1: 'Can I Put Stainless Steel in the Dishwasher?',
  seoTitle: 'Is Stainless Steel Dishwasher Safe? | Can I Use It With',
  metaDescription:
    'Yes, most plain stainless steel items can go in the dishwasher. Check the care instructions, rinse off salty residue, and keep stainless away from silver.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, most plain stainless steel bowls, flatware, measuring tools and dishwasher-safe cookware can go in the dishwasher. Check the item’s care guide first because knives, insulated pieces and hollow handles may need hand washing. Rinse off salty or acidic residue if the load will sit, and keep stainless steel from touching sterling silver or silver plate.',

  mainRisk: 'Pitting or rust',
  damages: 'The item’s finish',
  alternative: 'Hand-wash when unsure',

  conditionsOk: [
    'The item is labeled dishwasher-safe or its manufacturer permits machine washing.',
    'Plain stainless steel bowls, flatware and measuring tools are generally suitable when their care instructions allow it.',
    'Salty or acidic food residue is rinsed off if the dishwasher will not run promptly.',
    'Stainless flatware is loaded away from silver and visibly rusting items.',
  ],
  conditionsNever: [
    'Do not use the dishwasher when the item’s label or manual says to hand-wash it.',
    'Do not machine-wash sharp knives or hollow-handled utensils unless their manufacturer allows it.',
    'Do not leave salty or acidic residue on the surface while the item waits for a later wash.',
    'Do not let stainless steel touch sterling silver or silver plate in the basket because contact can pit the silver.',
    'Do not load it beside a visibly rusting steel item or cast-iron pan because iron contamination can leave rust stains.',
  ],

  mechanisms: [
    {
      title: 'Passive film resists corrosion',
      body: 'A thin passive film on the steel surface provides corrosion resistance. For pieces approved by the manufacturer, a normal dishwasher cycle is an intended cleaning method.',
    },
    {
      title: 'Residue can cause pitting',
      body: 'Salt left on the surface supplies chlorides, and acidic residue can make local attack easier. If the passive film breaks down at a weak spot or crevice, small pits or rust-colored staining can develop.',
    },
    {
      title: 'Construction sets the limit',
      body: 'Dishwasher heat and detergent act on the whole product, while items can also strike each other during the cycle. Adhesives may loosen. Seals can fail, and knife edges may nick or dull.',
    },
  ],

  calloutLabel: 'Material vs. whole item',
  calloutBody: [
    'The common mistake is treating “stainless steel” as a dishwasher-safe label. It only identifies the metal, so the care instructions still control the decision for the finished product.',
    'A plain bowl or measuring spoon is usually uncomplicated. Knives can lose edge quality, hollow handles may contain adhesive, and insulated pieces rely on seals that dishwasher heat or water can damage.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'What Is and Isn’t Dishwasher Safe?',
      url: 'https://www.whirlpool.com/blog/kitchen/what-is-and-is-not-dishwasher-safe.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'KitchenAid',
      title: 'Is this Item Dishwasher Safe?',
      url: 'https://producthelp.kitchenaid.com/Dishwashers/Product_Info/Dishwasher_Product_Assistance/Is_this_Item_Dishwasher_Safe%3F',
      kind: 'manufacturer',
    },
    {
      publisher: 'ZWILLING',
      title: 'How to Clean and Care for Your Knife',
      url: 'https://www.zwilling.com/us/magazine/product-guide-knives/knife-use-care.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Outokumpu',
      title: 'What makes stainless steel corrosion resistant?',
      url: 'https://www.outokumpu.com/en/expertise/stainless-basics/corrosion-resistance',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed for stainless-steel dishware, flatware, cookware, knives and mixed-material items using manufacturer care and corrosion guidance.',
};
