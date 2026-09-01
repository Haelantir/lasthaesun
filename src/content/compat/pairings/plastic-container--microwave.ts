import type { Pairing } from '../types';

/**
 * Plastic Container in Microwave.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const plasticContainerInMicrowave: Pairing = {
  subjectSlug: 'plastic-container',
  subjectName: 'Plastic Container',
  subjectKind: 'Container',
  subjectNote: 'Molded plastic vessel for food',

  relation: 'in',

  targetSlug: 'microwave',
  targetName: 'Microwave',
  targetKind: 'Appliance',
  targetNote: 'Appliance that heats food with microwaves',

  eyebrow: 'Kitchen · Containers & Cookware',
  h1: 'Can I Use a Plastic Container in a Microwave?',
  seoTitle: 'Using Plastic Containers in a Microwave Safely | Can I Use It With',
  metaDescription:
    'Yes, with limits: use plastic labeled for microwave use or packaging with heating directions. Transfer food from unlabeled takeout and cold-storage tubs.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only when the specific container is labeled microwave-safe or comes with microwave heating directions. Move food out of unlabeled takeout or delivery tubs and cold-storage containers before heating. Follow the container and microwave instructions, including any lid or vent directions.',

  mainRisk: 'Melting and migration',
  damages: 'Container and food',
  alternative: 'Microwave-safe glass container',

  conditionsOk: [
    'Use a container clearly labeled microwave-safe and follow all limits printed on the container, lid, or packaging.',
    'Use takeout or delivery packaging only when it gives specific microwave directions, and use it only once.',
    'Loosen the lid or open its vent when the container directions call for steam release.',
    'Follow the cookware restrictions in your microwave’s owner’s manual.',
  ],
  conditionsNever: [
    'Never microwave an unlabeled takeout or delivery tub based on its appearance.',
    'Never use margarine tubs, yogurt cups, cottage-cheese cartons, whipped-topping bowls, or similar cold-storage packaging.',
    'Never microwave food in its supermarket tray or original plastic wrap unless the package specifically directs it.',
    'Never continue heating in a container that warps or melts.',
  ],

  mechanisms: [
    {
      title: 'Food Heats the Plastic',
      body: 'Microwaves pass through many plastics and are absorbed by the food. Heat moves from the food into the container, which can warp or melt if it was not made for that use.',
    },
    {
      title: 'Intended Use Controls Migration',
      body: 'Food-contact materials are evaluated for intended uses. Heating cold-storage or single-use packaging outside those uses can deform it and allow packaging substances to migrate into food.',
    },
    {
      title: 'Steam Builds Pressure',
      body: 'Food releases steam as it heats. A sealed lid or blocked vent traps that steam, raising pressure under the cover.',
    },
  ],

  calloutLabel: 'The Label Decides',
  calloutBody: [
    'Microwave-safe applies to a specific container under the maker’s directions. It does not promise that every lid position, food, or reuse is acceptable. Some packaging is intended for one microwave heating only.',
    'Delivery tubs can look like reusable microwave cookware. If the container or package gives no microwave directions, appearance is not enough; transfer the food to microwave-safe glass or ceramic.',
  ],

  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Cooking with Microwave Ovens',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cooking-microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Meat and Poultry Packaging Materials',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/meat-and-poultry-packaging',
      kind: 'government',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Microwave Ovens',
      url: 'https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'Whirlpool',
      title: 'Microwave Oven Use & Care Guide',
      url: 'https://www.whirlpool.com/content/dam/global/documents/202411/owners-manual-w11752381-reva.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed label guidance, delivery and cold-storage packaging, heat transfer, migration, and venting against USDA, FDA, and Whirlpool guidance.',
};
