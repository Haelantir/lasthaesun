import type { Pairing } from '../types';

/**
 * Glass Baking Dish in Broiler.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const glassBakingDishInBroiler: Pairing = {
  subjectSlug: 'glass-baking-dish',
  subjectName: 'Glass Baking Dish',
  subjectKind: 'Bakeware',
  subjectNote: 'Glass dish made for oven baking',

  relation: 'in',

  targetSlug: 'broiler',
  targetName: 'Broiler',
  targetKind: 'Appliance',
  targetNote: 'Direct-radiant oven cooking mode',

  eyebrow: 'Kitchen · Bakeware',
  h1: 'Can I Use a Glass Baking Dish in a Broiler?',
  seoTitle: 'Glass Bakeware Under a Broiler: What’s Safe | Can I Use It With',
  metaDescription:
    'Only if the exact dish is labeled broiler-safe. Oven-safe glass may shatter under direct broiler heat, so use a metal broiler pan when unsure.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Only use a glass baking dish under the broiler when the manufacturer explicitly says that exact dish is broiler-safe. An oven-safe label alone does not approve broiler use because broiling concentrates radiant heat on one side of the dish. If you cannot find explicit permission, use a metal broiler pan.',

  mainRisk: 'Glass shattering',
  damages: 'The glass dish',
  alternative: 'Metal broiler pan',

  conditionsOk: [
    'The exact model’s label or current care guide explicitly says broiler-safe.',
    'The broiler setting, rack position, and exposure stay within both manufacturers’ instructions.',
    'Remove every lid and accessory unless its own instructions approve broiler use.',
    'Handle the hot dish with dry potholders and cool it on a dry, heat-safe support.',
  ],
  conditionsNever: [
    'Never rely on oven-safe or ovenproof wording that does not mention broiling.',
    'Never use a dish if the model cannot be identified or its care instructions cannot be found.',
    'Never move a prohibited dish to a lower rack as a workaround.',
    'Never use glass that is chipped, cracked, deeply scratched, or damaged by impact.',
    'Never add cool liquid to hot glass or place it on a wet or cool surface.',
  ],

  mechanisms: [
    {
      title: 'Focused Broiler Heat',
      body: 'A broiler sends radiant heat from one side, usually from the top element. The rack controls how concentrated that exposure is, and a close position can produce a steep temperature difference across a glass dish.',
    },
    {
      title: 'Sudden Temperature Change',
      body: 'Cool liquid or a wet countertop can chill one area while the rest stays hot. That uneven contraction can crack or break glass.',
    },
    {
      title: 'Existing Glass Damage',
      body: 'Chips and scratches create weak points. Heat stress can extend a flaw and cause immediate or later breakage.',
    },
  ],

  calloutLabel: 'Oven-Safe vs. Broiler-Safe',
  calloutBody: [
    'The common mistake is reading oven-safe as approval for every oven mode. Pyrex and Anchor Hocking allow their glass bakeware in preheated conventional or convection ovens but separately prohibit use under a broiler.',
    'Some products are built and labeled differently. Rubbermaid DuraLite instructions allow broiler use with specific limits. A lower rack changes exposure, but it does not cancel a no-broiler warning.',
  ],

  sources: [
    {
      publisher: 'Pyrex',
      title: 'Product Warranties / Safety and Usage',
      url: 'https://pyrexhome.com/pages/product-warranties-safety-and-usage',
      kind: 'manufacturer',
    },
    {
      publisher: 'Anchor Hocking',
      title: 'How to Clean Glass Bakeware and Cookware',
      url: 'https://www.anchorhocking.com/care-use/',
      kind: 'manufacturer',
    },
    {
      publisher: 'Rubbermaid',
      title: 'Rubbermaid DuraLite Bakeware Containers Safety and Use Instructions',
      url: 'https://newellbrands.imgix.net/e0a7e464-a3f3-340a-820d-0030cd6d5139/e0a7e464-a3f3-340a-820d-0030cd6d5139.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Maytag',
      title: 'How to Broil in the Oven for Fast Flavor',
      url: 'https://www.maytag.com/blog/kitchen/how-to-broil-in-oven.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current manufacturer guidance on broiler approval, direct heat, thermal shock, cookware condition, and oven rack placement.',
};
