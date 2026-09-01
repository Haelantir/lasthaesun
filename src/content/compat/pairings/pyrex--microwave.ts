import type { Pairing } from '../types';

/**
 * Pyrex in Microwave.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const pyrexInMicrowave: Pairing = {
  subjectSlug: 'pyrex',
  subjectName: 'Pyrex',
  subjectKind: 'Brand',
  subjectNote: 'Branded glass and kitchenware',

  relation: 'in',

  targetSlug: 'microwave',
  targetName: 'Microwave',
  targetKind: 'Appliance',
  targetNote: 'Appliance that heats food electromagnetically',

  eyebrow: 'Kitchen · Cookware & Containers',
  h1: 'Can I Use Pyrex in a Microwave?',
  seoTitle: 'Pyrex in a Microwave: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Yes, with limits: Pyrex glassware can go in a microwave when undamaged and used as directed. Metal Pyrex products and sealed lids must stay out.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Pyrex glassware can be used in a microwave for cooking, warming, and reheating food when it is undamaged and the manufacturer’s use-and-care instructions are followed. Do not microwave Pyrex metal bakeware, stainless-steel bowls, empty or nearly empty glassware, or popcorn and browning wrappers in the glass.',

  mainRisk: 'Glass breakage',
  damages: 'Dish or microwave',
  alternative: 'Microwave-safe labeled dish',

  conditionsOk: [
    'Use Pyrex glassware intended for microwave cooking, warming, or reheating.',
    'Check that the glass has no chips, cracks, or severe scratches before use.',
    'Use only a microwave-safe cover, leaving it unsealed and offset so steam can escape.',
    'Remove hot Pyrex with dry potholders because heat from the food can make the glass very hot.',
  ],
  conditionsNever: [
    'Do not microwave Pyrex metal bakeware or stainless-steel mixing bowls.',
    'Do not use glassware that is chipped, cracked, broken, or severely scratched.',
    'Do not heat empty or nearly empty Pyrex glassware, or overheat butter or oil in it.',
    'Do not use Pyrex glassware for microwave popcorn or food in heat-concentrating browning wrappers.',
    'Do not add liquid to hot glass or place hot Pyrex on a wet, cool, or metal surface.',
  ],

  mechanisms: [
    {
      title: 'Food heats the glass',
      body: 'Microwave energy passes through suitable glass and is absorbed by the food. Heat from the food transfers to the dish, so microwave-safe Pyrex can still become hot enough to burn bare skin.',
    },
    {
      title: 'Thermal stress breaks glass',
      body: 'A sudden temperature change makes different parts of the glass expand or contract unevenly. Chips, cracks, and severe scratches can further weaken the dish.',
    },
    {
      title: 'Sealed lids trap steam',
      body: 'Steam builds as food heats beneath a closed cover. Leaving an approved lid unsealed and offset gives the steam a path out.',
    },
  ],

  calloutLabel: 'Check the Pyrex Product',
  calloutBody: [
    'Pyrex is a brand that covers more than glass dishes. The company allows its glassware in microwaves, while its metal bakeware and stainless-steel mixing bowls must stay out.',
    'The brand name alone does not confirm that every item or accessory is microwave-safe. Check the markings and care instructions for the exact piece, and use a cover only when its instructions allow microwave use and venting.',
  ],

  sources: [
    {
      publisher: 'Pyrex Home',
      title: 'Product Warranties / Safety and Usage',
      url: 'https://pyrexhome.com/pages/product-warranties-safety-and-usage',
      kind: 'manufacturer',
    },
    {
      publisher: 'Pyrex Home',
      title: 'Frequently Asked Questions',
      url: 'https://pyrexhome.com/pages/frequently-asked-questions',
      kind: 'manufacturer',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Microwave Ovens',
      url: 'https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Cooking with Microwave Ovens',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cooking-microwave-ovens',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed current Pyrex glassware use-and-care guidance alongside FDA and USDA guidance for microwave-safe cookware.',
};
