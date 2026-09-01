import type { Pairing } from '../types';

/**
 * Parchment Paper in Oven.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const parchmentPaperInOven: Pairing = {
  subjectSlug: 'parchment-paper',
  subjectName: 'Parchment Paper',
  subjectKind: 'Material',
  subjectNote: 'Heat-resistant nonstick baking paper',

  relation: 'in',

  targetSlug: 'oven',
  targetName: 'Oven',
  targetKind: 'Appliance',
  targetNote: 'Appliance for baking and roasting',

  eyebrow: 'Kitchen · Baking Papers',
  h1: 'Can I Use Parchment Paper in an Oven?',
  seoTitle: 'Parchment Paper Oven Safety and Temperature Limits | Can I Use It With',
  metaDescription:
    'Yes, parchment paper is oven-safe for baking within its package rating. Keep it off heating elements and oven walls, and never use it under the broiler.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, parchment paper can go in an oven for normal baking or roasting, but only within the maximum temperature printed on its package. Trim it to the pan and keep it away from the oven walls, floor, flame, and heating elements. Do not use it under the broiler.',

  mainRisk: 'Fire',
  damages: 'Parchment and food',
  alternative: 'Broiler-safe metal pan',

  conditionsOk: [
    'Use parchment clearly labeled oven-safe and follow the maximum temperature printed on its package.',
    'Cut the sheet to fit the pan so its edges cannot reach the oven walls, racks, or heating elements.',
    'Use conventional bake or convection bake only when the parchment packaging and oven manual permit it.',
    'Use it as a pan liner or parchment packet for ordinary baking and roasting.',
  ],
  conditionsNever: [
    'Never use parchment paper under a broiler.',
    'Never let it touch an open flame, heating element, oven wall, or oven floor.',
    'Never exceed the temperature rating on the package you own.',
    'Never assume another brand’s temperature limit applies to your parchment.',
    'Never substitute wax paper or freezer paper because it looks similar.',
  ],

  mechanisms: [
    {
      title: 'Heat-Rated Paper',
      body: 'Parchment is treated or coated to resist oven heat and release food. Above its product rating, exposed edges can char and the sheet deteriorates faster.',
    },
    {
      title: 'Broiler Radiation',
      body: 'A broiler’s top element sends intense radiant heat directly toward the pan. Parchment near that element can scorch or burn, so manufacturers exclude broiling.',
    },
    {
      title: 'Edge Contact',
      body: 'Overhanging paper can reach a rack, wall, flame, or heating element where it receives concentrated heat. Trimming it to the pan keeps the edges contained.',
    },
  ],

  calloutLabel: 'The Broiler Trap',
  calloutBody: [
    'The words oven-safe can sound like permission for every oven setting. They refer to baking or roasting within the parchment product’s rated temperature, not exposure to the direct radiant heat of a broiler.',
    'Temperature limits also vary by product. Reynolds lists 425°F for its parchment, while King Arthur lists 450°F for its half-sheet parchment, so use the rating printed on the package in your kitchen.',
  ],

  sources: [
    {
      publisher: 'Reynolds Brands',
      title: 'Parchment Paper With Stay Flat Dispensing',
      url: 'https://www.reynoldsbrands.com/products/parchment-paper/parchment-paper-rolls',
      kind: 'manufacturer',
    },
    {
      publisher: 'King Arthur Baking Company',
      title: 'Half-Sheet Baking Parchment Paper',
      url: 'https://shop.kingarthurbaking.com/items/half-sheet-baking-parchment-paper',
      kind: 'manufacturer',
    },
    {
      publisher: 'GE Appliances',
      title: 'Indoor Grilling: Become a Broilmaster',
      url: 'https://pressroom.geappliances.com/news/indoor-grilling-become-a-broilmaster',
      kind: 'manufacturer',
    },
    {
      publisher: 'Reynolds Brands',
      title: 'The Ultimate Aluminum Foil and Cooking Papers Guide',
      url: 'https://www.reynoldsbrands.com/tips-and-how-tos/aluminum-foil-and-cooking-papers-guide',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current Reynolds and King Arthur parchment guidance, Reynolds cooking-paper guidance, and GE Appliances broiler guidance.',
};
