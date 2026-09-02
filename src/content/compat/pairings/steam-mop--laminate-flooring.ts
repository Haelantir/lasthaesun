import type { Pairing } from '../types';

/**
 * Steam Mop on Laminate Flooring.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const steamMopOnLaminateFlooring: Pairing = {
  subjectSlug: 'steam-mop',
  subjectName: 'Steam Mop',
  subjectKind: 'Appliance',
  subjectNote: 'Heated floor-cleaning mop using steam',

  relation: 'on',

  targetSlug: 'laminate-flooring',
  targetName: 'Laminate Flooring',
  targetKind: 'Flooring',
  targetNote: 'Layered planks with wood-fiber core',

  eyebrow: 'Home · Floor Care',
  h1: 'Can I Use a Steam Mop on Laminate Flooring?',
  seoTitle: 'Steam Mop on Laminate Flooring: Is It Safe? | Can I Use It With',
  metaDescription:
    'Usually no. Use a steam mop only when the guide for your exact laminate flooring allows it; otherwise use a barely damp microfiber mop.',

  verdict: 'risky',
  shortAnswer:
    'Usually, no. Use a steam mop only if the care or warranty guide for your exact laminate product expressly allows it, then follow every listed condition. If you cannot identify the floor or find clear permission, use a barely damp microfiber mop instead. Heat and moisture can enter plank joints and swell the wood-fiber core.',

  mainRisk: 'Swollen seams',
  damages: 'The laminate floor',
  alternative: 'Barely damp microfiber mop',

  conditionsOk: [
    'Use it only when the care or warranty guide for the exact laminate product expressly permits residential steam mopping.',
    'Confirm that the steam mop’s manual allows use on sealed laminate flooring.',
    'Follow every floor-specific condition, including the required pad, steam setting, travel direction, and perimeter sealing where listed.',
    'Keep the mop moving, and dry any condensation or visible moisture at once.',
  ],
  conditionsNever: [
    'Do not use steam when the floor guide prohibits it or you cannot find clear permission.',
    'Never direct bare steam at the planks or use the mop without the required cloth or pad.',
    'Never pause over one spot or choose a higher steam setting than the floor guide allows.',
    'Do not assume a waterproof or water-resistant label automatically means steam-safe.',
    'Do not treat a few damage-free uses as proof that the combination is approved.',
  ],

  mechanisms: [
    {
      title: 'Vapor condenses at seams',
      body: 'The mop sends hot water vapor through its pad. At cooler plank joints, some vapor can condense into liquid water and reach the floor’s core.',
    },
    {
      title: 'The core changes shape',
      body: 'Wood-based core material swells as it gains moisture. At plank edges, that movement can produce raised seams, bubbling, peeling, or separation.',
    },
  ],

  calloutLabel: 'Waterproof Is Product-Specific',
  calloutBody: [
    'A waterproof or water-resistant label does not settle the steam question. Some laminate warranties expressly allow residential steam mopping under strict conditions. Other laminate care guides ban it and exclude resulting damage from warranty coverage.',
    'If you have already used the steam mop a few times and the floor still looks normal, do not treat that as approval. Each pass can send moisture toward the joints, so appearance alone is a poor compatibility test. Check the exact floor guide before the next use.',
  ],

  sources: [
    {
      publisher: 'U.S. Department of Agriculture, Forest Service',
      title: 'Chapter 4: Moisture Relations and Physical Properties of Wood',
      url: 'https://research.fs.usda.gov/treesearch/62243',
      kind: 'government',
    },
    {
      publisher: 'Shaw Floors',
      title: 'How to Clean Laminate Floors',
      url: 'https://costco.shawfloors.com/flooring/how-to/laminate-how-to-s/care-maintenance/how-to-clean-laminate-floors',
      kind: 'manufacturer',
    },
    {
      publisher: 'Pergo',
      title: 'Pergo Pro + WetProtect Laminated Wood Limited Warranty',
      url: 'https://pdf.lowes.com/productdocuments/487859f1-8a1d-465e-9737-25c6bc7e4023/64180990.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Quick-Step',
      title: 'How to Keep Your Laminate Looking Perfect?',
      url: 'https://cn.quick-step.com/-/media/imported%20assets/flooring/f/b/8/qslmpmaintenance%20leafletenpdf222967.ashx?filename=Maintenance+Laminate.pdf&rev=92802979fec84af09eb6949808deafe9&type=original',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against USDA wood-moisture guidance and laminate care and warranty documents from Shaw, Pergo, and Quick-Step, including product-specific steam-mop limits.',
};
