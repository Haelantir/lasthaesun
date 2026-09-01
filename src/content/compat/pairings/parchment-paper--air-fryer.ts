import type { Pairing } from '../types';

/**
 * Parchment Paper in Air Fryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const parchmentPaperInAirFryer: Pairing = {
  subjectSlug: 'parchment-paper',
  subjectName: 'Parchment Paper',
  subjectKind: 'Material',
  subjectNote: 'Heat-resistant nonstick cooking paper',

  relation: 'in',

  targetSlug: 'air-fryer',
  targetName: 'Air Fryer',
  targetKind: 'Appliance',
  targetNote: 'Countertop hot-air cooking appliance',

  eyebrow: 'Kitchen · Liners & Air Fryers',
  h1: 'Can I Use Parchment Paper in an Air Fryer?',
  seoTitle: 'Parchment Paper and Air Fryers: Safe Use | Can I Use It With',
  metaDescription:
    'Yes, if your air fryer manual allows it. If preheating, add parchment afterward with food, within its heat rating and away from the heater.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only when your exact air fryer manual allows parchment. A perforated air-fryer liner is the better choice; regular parchment must be trimmed to fit and fully held down by food. If you preheat, do it with no parchment inside, then add the paper and food together. If the manual bans paper liners, use the bare basket or an approved accessory.',

  mainRisk: 'Fire',
  damages: 'The air fryer',
  alternative: 'Bare basket or approved accessory',

  conditionsOk: [
    'Check the manual for your exact model and use parchment only when it permits liners or paper.',
    'Choose a perforated liner sized for the basket and approved for that style of air fryer.',
    'With regular parchment, cut the sheet no larger than the food holding it down and leave basket openings exposed around it.',
    'If preheating is needed, heat the fryer first, then place the paper and food inside together.',
  ],
  conditionsNever: [
    'Never preheat with parchment in the basket or run the appliance with a loose, unweighted sheet.',
    'Never use any parchment when the air fryer manual prohibits paper liners.',
    'Never let the paper extend upward toward the heating element or leave broad corners uncovered by food.',
    'Never line the grease-collection pan or seal off the basket’s airflow holes with a solid sheet.',
    'Never cook above the paper’s labeled heat limit or use a liner in an unapproved fryer style.',
  ],

  mechanisms: [
    {
      title: 'Fan lift',
      body: 'The fan can pull an unsecured sheet upward. If it reaches the heating element, the paper can scorch or ignite.',
    },
    {
      title: 'Blocked airflow',
      body: 'Hot air needs open paths through and around the basket. Solid parchment covers more openings than a perforated liner, which can reduce browning and cause uneven cooking.',
    },
  ],

  calloutLabel: 'Why advice conflicts',
  calloutBody: [
    'Parchment is common on oven pans, so it looks interchangeable with an air-fryer liner. A basket air fryer sends fast-moving air around a very light sheet. During preheating, there is no food to keep the paper down.',
    'Official directions differ by product. Some air fryer manufacturers prohibit parchment, while liner manufacturers allow perforated liners under specific conditions. Regular parchment blocks more of the basket than a perforated liner, so fit, airflow, and your model’s instructions all matter.',
  ],

  sources: [
    {
      publisher: 'Reynolds Brands',
      title: 'Can I Put Parchment Paper in the Air Fryer?',
      url: 'https://www.reynoldsbrands.com/faq/can-i-put-parchment-paper-in-an-air-fryer',
      kind: 'manufacturer',
    },
    {
      publisher: 'Philips',
      title: 'Can I use baking paper/tin foil in my Philips Airfryer?',
      url: 'https://www.usa.philips.com/c-f/XC000003625/can-i-use-baking-paper-tin-foil-in-my-philips-airfryer',
      kind: 'manufacturer',
    },
    {
      publisher: 'Instant Pot',
      title: 'Frequently Asked Questions',
      url: 'https://instantpot.com/pages/frequently-asked-questions',
      kind: 'manufacturer',
    },
    {
      publisher: 'Cuisinart',
      title: 'Air Fryer Guide',
      url: 'https://www.cuisinart.com/the-kitchen-guide/airfryer.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed September 1, 2026, against official Philips, Instant Pot, Cuisinart, and Reynolds guidance on parchment, airflow, heat ratings, and preheating.',
};
