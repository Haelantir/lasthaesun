import type { Pairing } from '../types';

/**
 * Styrofoam in Microwave.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const styrofoamInMicrowave: Pairing = {
  subjectSlug: 'styrofoam',
  subjectName: 'Styrofoam',
  subjectKind: 'Material',
  subjectNote: 'Polystyrene foam food containers',

  relation: 'in',

  targetSlug: 'microwave',
  targetName: 'Microwave',
  targetKind: 'Appliance',
  targetNote: 'Oven that heats food with microwaves',

  eyebrow: 'Kitchen · Food Containers',
  h1: 'Can I Use Styrofoam in a Microwave?',
  seoTitle: 'Microwaving Styrofoam Safely: What the Label Must Say | Can I Use It With',
  metaDescription:
    'Use Styrofoam only when the container is labeled microwave-safe and your oven manual allows it. Transfer ordinary foam cups, trays, and takeout boxes.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only when the specific foam container is clearly labeled microwave-safe or comes with microwave heating instructions, and your microwave manual permits it. Put ordinary Styrofoam takeout boxes, cups, plates, and supermarket foam trays in the no category. Heat from the food can deform or melt unrated foam and may allow packaging chemicals to migrate into the food.',

  mainRisk: 'Melting and spills',
  damages: 'Food and container',
  alternative: 'Microwave-safe glass or ceramic',

  conditionsOk: [
    'Use foam packaging only when it clearly says microwave-safe or gives microwave heating instructions.',
    'Check the oven manual because some manufacturers tell users not to microwave Styrofoam at all.',
    'Follow all package directions, including venting and whether the container may be reused.',
    'Move the food to microwave-safe glass or ceramic whenever the foam is unlabeled.',
  ],
  conditionsNever: [
    'Do not microwave unlabeled foam cups, plates, bowls, takeout clamshells, or trays.',
    'Do not defrost meat on its supermarket foam tray or under the original plastic wrap.',
    'Do not assume a container is safe because it arrived holding hot food.',
    'Do not use foam when your microwave manual specifically prohibits Styrofoam.',
    'Do not keep heating a container that softens, warps, or melts.',
  ],

  mechanisms: [
    {
      title: 'Food Heats the Foam',
      body: 'Microwaves are absorbed mainly by the food, especially its water, fat, and sugar. Heat then moves from the food into the container.',
    },
    {
      title: 'Unrated Foam Loses Shape',
      body: 'Foam not made for microwave heating can deform or melt as the food gets hot. The container may leak or collapse, and damaged packaging can allow chemicals to migrate into the food.',
    },
  ],

  calloutLabel: 'Hot Food Confusion',
  calloutBody: [
    'A foam cup can hold hot coffee, and a takeout box can arrive warm without failing. That only shows the container handled that serving condition; it does not establish that the package was designed for microwave reheating.',
    'Some manufacturers make heat-resistant polystyrene foam packaging for microwave use. Look for a microwave-safe label or heating directions on the exact container, then check the instructions for your microwave model.',
  ],

  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Cooking with Microwave Ovens',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cooking-microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Meat and Poultry Packaging Materials',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/meat-and-poultry-packaging',
      kind: 'government',
    },
    {
      publisher: 'Whirlpool',
      title: 'Microwave Use and Care',
      url: 'https://www.whirlpool.com/content/dam/global/documents/201508/microwave-owners-manual-W10777366-RevC.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Sekisui Kasei Co., Ltd.',
      title: 'Microwavable Food Container',
      url: 'https://www.sekisuikasei.com/en/products/materials/microwavable-food_container/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed USDA microwave and packaging guidance, a Whirlpool owner’s manual, and manufacturer documentation for microwaveable polystyrene foam packaging.',
};
