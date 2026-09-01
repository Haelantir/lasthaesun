import type { Pairing } from '../types';

/**
 * Cooking Spray in Air Fryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const cookingSprayInAirFryer: Pairing = {
  subjectSlug: 'cooking-spray',
  subjectName: 'Cooking Spray',
  subjectKind: 'Product',
  subjectNote: 'Sprayable oil or oil blend',

  relation: 'in',

  targetSlug: 'air-fryer',
  targetName: 'Air Fryer',
  targetKind: 'Appliance',
  targetNote: 'Countertop hot-air cooking appliance',

  eyebrow: 'Kitchen · Oils & Sprays',
  h1: 'Can I Use Cooking Spray in an Air Fryer?',
  seoTitle: 'Cooking Spray in an Air Fryer: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use plain oil in a pump mister or apply it to food, and avoid conventional aerosol spray when your air fryer manual prohibits it.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use a non-aerosol pump mister filled with plain cooking oil, or brush or toss the food with oil before it goes in. Avoid conventional aerosol cooking spray on a nonstick basket unless your air fryer manual specifically allows it; some manufacturers warn that it can damage the coating.',

  mainRisk: 'Coating damage',
  damages: 'Nonstick basket',
  alternative: 'Plain-oil pump mister',

  conditionsOk: [
    'Use a refillable pump mister filled with plain cooking oil if your manual permits oil spray.',
    'Apply oil to the food before it goes into the basket; a brush or mixing bowl works too.',
    'Choose an oil intended for frying, roasting, or baking at the temperature you are using.',
    'Spray the basket only when your model’s instructions specifically allow it.',
  ],
  conditionsNever: [
    'Do not put conventional pressurized aerosol spray on nonstick parts unless your model’s manual expressly allows it.',
    'Do not spray an aerosol into the air fryer while it is hot or running.',
    'Do not pour oil into the lower pan or fill the basket with oil.',
    'Do not assume the words “for air fryers” on a can override the appliance manual.',
    'Do not leave sticky or greasy residue to reheat; clean cooled parts as the manual directs.',
  ],

  mechanisms: [
    {
      title: 'Coating buildup',
      body: 'Traditional cooking spray can leave residue on wire trays and baskets. Product and appliance makers warn that buildup or aerosol formulas can wear, degrade, or chip a nonstick finish.',
    },
    {
      title: 'Residue reheats',
      body: 'Oil and grease that reach the lower pan can remain after cooking. When that residue reheats during a later cycle, it can produce smoke.',
    },
  ],

  calloutLabel: 'Two Kinds of Spray',
  calloutBody: [
    'The can and the pump bottle may both say cooking spray, but they use different formulas and delivery systems. Common aerosol products may contain lecithin, an antifoaming agent, and propellant along with oil. A refillable pump mister can hold plain oil.',
    'Some air fryer manufacturers permit non-aerosol pump spray while warning against pressurized aerosol on the nonstick tray. Air-fryer-specific canned sprays also exist, but compatibility still depends on the appliance manual. If the instructions are silent, put plain oil on the food rather than coating the basket.',
  ],

  sources: [
    {
      publisher: 'Instant Pot',
      title: 'Frequently Asked Questions',
      url: 'https://instantpot.com/pages/frequently-asked-questions',
      kind: 'manufacturer',
    },
    {
      publisher: 'Philips',
      title: 'How and when to use oil in my Philips Airfryer?',
      url: 'https://www.usa.philips.com/c-f/XC000003626/how-and-when-to-use-oil-in-my-philips-airfryer',
      kind: 'manufacturer',
    },
    {
      publisher: 'Conagra Brands',
      title: 'New PAM Air Fryer Spray a Must-Have for Air Fryer Owners',
      url: 'https://www.conagrabrands.com/news-room/news-new-pam-air-fryer-spray-a-must-have-for-air-fryer-owners-prn-122907',
      kind: 'manufacturer',
    },
    {
      publisher: 'Crisco',
      title: 'Original No-Stick Cooking Spray',
      url: 'https://crisco.com/products/original-no-stick-cooking-spray/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current appliance guidance and official cooking-spray information covering oil placement, aerosol use, residue, and nonstick coatings.',
};
