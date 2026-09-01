import type { Pairing } from '../types';

/**
 * Silicone Utensils in Dishwasher.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const siliconeUtensilsInDishwasher: Pairing = {
  subjectSlug: 'silicone-utensils',
  subjectName: 'Silicone Utensils',
  subjectKind: 'Utensil',
  subjectNote: 'Flexible silicone cooking and serving tools',

  relation: 'in',

  targetSlug: 'dishwasher',
  targetName: 'Dishwasher',
  targetKind: 'Appliance',
  targetNote: 'Automatic machine for washing dishes',

  eyebrow: 'Kitchen · Utensils & Tools',
  h1: 'Can I Put Silicone Utensils in the Dishwasher?',
  seoTitle: 'Are Silicone Utensils Dishwasher-Safe? | Can I Use It With',
  metaDescription:
    'Yes, if the utensil is labeled dishwasher-safe. Secure long tools on an upper or third rack, and hand-wash wood-handled or unlabeled pieces.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the utensil is labeled dishwasher-safe. Lay long silicone tools flat on the upper or third rack so they cannot slip onto an exposed heater or block a spray arm. Hand-wash wood-handled or unlabeled utensils unless the maker says the silicone head can be removed and machine-washed.',

  mainRisk: 'Handle damage',
  damages: 'The utensil',
  alternative: 'Hand-wash unlabeled tools',

  conditionsOk: [
    'Use the dishwasher only when the utensil, packaging, or maker’s care guide says it is dishwasher-safe.',
    'Lay long spatulas, spoons, and ladles flat on the upper or third rack, secured so they cannot fall through.',
    'Remove a silicone head from a wooden handle only when the manufacturer specifically tells you to do so.',
    'Follow any top-rack-only or heated-dry restriction in the utensil or dishwasher instructions.',
  ],
  conditionsNever: [
    'Do not treat a cooking heat rating as proof that the whole utensil is dishwasher-safe.',
    'Do not machine-wash a wooden handle; water and drying heat can roughen, crack, or split it.',
    'Do not let any part hang below the rack or touch an exposed heating element.',
    'Do not position a long utensil where it can stop a spray arm or block the detergent dispenser.',
    'Do not machine-wash an unlabeled or hand-wash-only tool.',
  ],

  mechanisms: [
    {
      title: 'Heat reaches every part',
      body: 'Hot water and drying heat reach the head, core, handle, and joints. A silicone section may tolerate the cycle while wood or another unapproved part is damaged.',
    },
    {
      title: 'Loose tools can shift',
      body: 'Spray jets can move a loose spatula or spoon. If it slips through the rack, it can stop a spray arm or reach an exposed bottom heater.',
    },
    {
      title: 'Crowding blocks the wash',
      body: 'Water and detergent need access to every food-contact surface. Nested heads or tightly packed tools can leave soil in covered areas.',
    },
  ],

  calloutLabel: 'Heat-safe is incomplete',
  calloutBody: [
    'A high cooking-temperature rating does not automatically approve a utensil for dishwasher detergent, repeated hot-water exposure, or heated drying. Look for a dishwasher-safe statement from the utensil maker.',
    'Rack advice depends on the machine. Lay long tools flat on an upper or third rack as the preferred default, especially when the dishwasher has an exposed heating element at the bottom.',
  ],

  sources: [
    {
      publisher: 'KitchenAid',
      title: 'Silicone Gadgets Use and Care',
      url: 'https://producthelp.kitchenaid.com/Kitchenware/Tools_and_Gadgets/Silicone_Gadgets_Use_and_Care',
      kind: 'manufacturer',
    },
    {
      publisher: 'Le Creuset',
      title: 'Care and Use',
      url: 'https://www.lecreuset.com/care-and-use.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'How to Load a Dishwasher Properly',
      url: 'https://www.whirlpool.com/blog/kitchen/proper-way-to-load-a-dishwasher.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Bosch',
      title: 'Dishwasher FAQs',
      url: 'https://www.bosch-home.com/us/experience-bosch/heart-of-the-home/tips-and-tricks/tips-dishwasher',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against KitchenAid and Le Creuset silicone-tool care guidance plus Whirlpool and Bosch dishwasher loading and drying guidance.',
};
