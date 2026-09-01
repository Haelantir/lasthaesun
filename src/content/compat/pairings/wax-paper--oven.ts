import type { Pairing } from '../types';

/**
 * Wax Paper in Oven.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const waxPaperInOven: Pairing = {
  subjectSlug: 'wax-paper',
  subjectName: 'Wax Paper',
  subjectKind: 'Material',
  subjectNote: 'Wax-coated paper for food prep',

  relation: 'in',

  targetSlug: 'oven',
  targetName: 'Oven',
  targetKind: 'Appliance',
  targetNote: 'Enclosed appliance for baking and roasting',

  eyebrow: 'Kitchen · Baking Papers',
  h1: 'Can I Use Wax Paper in an Oven?',
  seoTitle: 'Wax Paper in the Oven: When Is It Safe? | Can I Use It With',
  metaDescription:
    'Only in a narrow, manufacturer-approved case: wax paper must stay fully covered by batter or dough in a pan. For open baking, use oven-rated parchment.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Only in a narrow case: use wax paper in an oven when its manufacturer allows it and batter or dough completely covers the sheet inside a pan. Do not use it exposed on a baking sheet, under individual foods, or under a broiler. Choose oven-rated parchment paper for ordinary baking. Direct oven heat can melt the coating, and exposed paper may catch fire.',

  mainRisk: 'Oven fire',
  damages: 'Food and cookware',
  alternative: 'Oven-rated parchment paper',

  conditionsOk: [
    'Use a wax paper brand whose package explicitly allows lining a pan under batter or dough.',
    'Cut the sheet to fit flat against the bottom of the pan without any overhang.',
    'Cover every part of the wax paper before placing the pan in the oven.',
    'Use this method only for a pan bake and keep the paper away from the broiler.',
  ],
  conditionsNever: [
    'Never line an open baking sheet with wax paper.',
    'Never place cookies, roasting food, or other separated items directly on wax paper in the oven.',
    'Never leave corners or edges exposed above the batter or pan.',
    'Never let wax paper touch a heating element or flame.',
    'Never assume a microwave-safe label also means oven-safe.',
  ],

  mechanisms: [
    {
      title: 'Wax coating melts',
      body: 'Direct oven heat can soften and melt the wax coating. Once molten, it can contact the pan and food.',
    },
    {
      title: 'Paper can ignite',
      body: 'The base is combustible paper. When exposed to oven heat, it may catch fire.',
    },
    {
      title: 'Batter blocks direct heat',
      body: 'Some manufacturers permit wax paper only when batter or dough covers it completely. Full coverage shields the sheet from direct hot air and radiant heat; bare edges lose that protection.',
    },
  ],

  calloutLabel: 'Look-Alike Baking Papers',
  calloutBody: [
    'Wax paper and parchment paper can look alike, and both provide a nonstick surface. Wax paper is also microwave-safe, which can make it seem suitable for any oven.',
    'Parchment paper is designed for baking within its labeled temperature limit. Check the box before lining a pan; wax paper belongs in a conventional oven only when its own instructions allow the fully covered batter method.',
  ],

  sources: [
    {
      publisher: 'Reynolds Brands',
      title: 'Cut-Rite Wax Paper',
      url: 'https://www.reynoldsbrands.com/products/kitchen-papers/cut-rite-wax-paper',
      kind: 'manufacturer',
    },
    {
      publisher: 'University of Illinois Extension',
      title: 'Kitchen Fire and Food Safety',
      url: 'https://extension.illinois.edu/sites/default/files/fire-food-safety2021.pdf',
      kind: 'academic',
    },
    {
      publisher: 'Whirlpool',
      title: 'Are Parchment Paper and Wax Paper the Same?',
      url: 'https://www.whirlpool.com/blog/kitchen/are-wax-paper-and-parchment-paper-the-same.html',
      kind: 'manufacturer',
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
    'Reviewed direct oven exposure, the covered-pan exception, fire risk, microwave labeling, and parchment substitution using manufacturer, USDA, and university guidance.',
};
