import type { Pairing } from '../types';

/**
 * Parchment Paper in Microwave.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const parchmentPaperInMicrowave: Pairing = {
  subjectSlug: 'parchment-paper',
  subjectName: 'Parchment Paper',
  subjectKind: 'Material',
  subjectNote: 'Nonstick grease-resistant cooking paper',

  relation: 'in',

  targetSlug: 'microwave',
  targetName: 'Microwave',
  targetKind: 'Appliance',
  targetNote: 'Appliance that heats food with microwaves',

  eyebrow: 'Kitchen · Paper & Liners',
  h1: 'Can I Use Parchment Paper in a Microwave?',
  seoTitle: 'Parchment Paper in a Microwave: Safe Use | Can I Use It With',
  metaDescription:
    'Yes, with limits: plain microwave-safe parchment can line or cover food in microwave-only mode. Keep metal off it and check the manual for heated modes.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, plain food-grade parchment paper can go in a microwave during microwave-only cooking. Use it beneath food or as a loose cover on a microwave-safe dish. Check the appliance manual before using it with convection, grill, air-fry, or speed-cook settings.',

  mainRisk: 'Scorching or fire',
  damages: 'Food and microwave',
  alternative: 'Microwave-safe vented lid',

  conditionsOk: [
    'Use plain, food-grade parchment whose package allows microwave use.',
    'Place a small sheet beneath food or lay it loosely over a microwave-safe dish to catch splatters.',
    'Use microwave-only mode unless both the appliance manual and parchment maker approve another mode.',
  ],
  conditionsNever: [
    'Never use parchment with foil backing, metallic decoration, staples, clips, or wire ties.',
    'Never run the microwave with parchment alone; food or water must be present to absorb microwave energy.',
    'Never let the sheet touch a browning element, grill, or other exposed heater.',
    'Never apply microwave-only guidance to air-fry, grill, broil, toast, convection, or speed-cook mode.',
  ],

  mechanisms: [
    {
      title: 'Energy Passes Through',
      body: 'Microwave energy largely passes through parchment and is absorbed by water, fat, and sugar in the food. The sheet can serve as a liner or splatter cover without blocking normal heating.',
    },
    {
      title: 'Metal Can Cause Arcing',
      body: 'Plain parchment has no metal to reflect microwave energy. Foil-backed paper and metal fasteners change that and can spark.',
    },
    {
      title: 'Heated Modes Work Differently',
      body: 'Combination and air-fry functions can bring paper near hot elements or moving air. A loose sheet may block airflow or reach a heater, so some mode-specific manuals prohibit it.',
    },
  ],

  calloutLabel: 'Microwave vs. Hot Air',
  calloutBody: [
    'People often treat “microwave-safe,” “oven-safe,” and “air-fryer-safe” as the same rating. Combination appliances make that especially easy because one cavity can use entirely different heat sources from one setting to the next.',
    'Microwave-only mode lets energy pass through parchment to the food. GE prohibits parchment as a cover during Advantium Speedcook, while Philips warns that loose baking paper in specified air-fryer models can disrupt airflow or reach the heating element. Use the rule for the selected mode and exact appliance.',
  ],

  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Cooking with Microwave Ovens',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cooking-microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'Reynolds Brands',
      title: 'Parchment Paper With Stay Flat Dispensing',
      url: 'https://www.reynoldsbrands.com/products/parchment-paper/parchment-paper-rolls',
      kind: 'manufacturer',
    },
    {
      publisher: 'GE Appliances',
      title: 'Advantium - Cookware Use by Cooking Mode',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17674',
      kind: 'manufacturer',
    },
    {
      publisher: 'Philips',
      title: 'Can I use baking paper/tin foil in my Philips Airfryer?',
      url: 'https://www.usa.philips.com/c-f/XC000003625/can-i-use-baking-paper-tin-foil-in-my-philips-airfryer',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed microwave-only compatibility and heated-mode limits using USDA guidance and current Reynolds, GE Appliances, and Philips instructions.',
};
