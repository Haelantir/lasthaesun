import type { Pairing } from '../types';

/**
 * Wax Paper in Air Fryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const waxPaperInAirFryer: Pairing = {
  subjectSlug: 'wax-paper',
  subjectName: 'Wax Paper',
  subjectKind: 'Material',
  subjectNote: 'Wax-coated paper for food prep',

  relation: 'in',

  targetSlug: 'air-fryer',
  targetName: 'Air Fryer',
  targetKind: 'Appliance',
  targetNote: 'Countertop hot-air cooking appliance',

  eyebrow: 'Kitchen · Liners & Wraps',
  h1: 'Can I Use Wax Paper in an Air Fryer?',
  seoTitle: 'Can Wax Paper Go in an Air Fryer? | Can I Use It With',
  metaDescription:
    'No. Wax paper can melt under air-fryer heat, and loose paper may reach the heating element and burn. Use only a liner your model allows.',

  verdict: 'no',
  shortAnswer:
    'No. Do not put wax paper in an air fryer. Its coating can melt under exposed cooking heat, and loose paper can rise toward the heating element and burn. Use a liner only if your air fryer\'s manual allows it.',

  mainRisk: 'Smoke or fire',
  damages: 'Food or appliance',
  alternative: 'Manual-approved parchment liner',

  conditionsOk: [
    'Keep wax paper outside the air fryer and use it for food prep, wrapping, or cooling.',
    'Cook directly in the basket or on the tray when your manual does not allow liners.',
    'If your manual allows parchment, use a purpose-made air-fryer liner within its heat rating.',
    'Hold any approved liner down with food and leave the required airflow openings clear.',
  ],
  conditionsNever: [
    'Do not place wax paper in the basket, pan, or air-fryer oven during a cooking cycle.',
    'Do not preheat the air fryer with wax paper or any loose paper inside.',
    'Do not substitute wax paper for parchment paper.',
    'Do not allow an approved liner to touch or rise toward the heating element.',
    'Do not cover the basket or pan in a way that blocks airflow.',
  ],

  mechanisms: [
    {
      title: 'The coating melts',
      body: 'Wax paper has a coating that cannot withstand exposed cooking heat. The coating can melt onto the food or cooking surface.',
    },
    {
      title: 'Loose paper can lift',
      body: 'Air fryers circulate hot air with a fan. A light sheet can rise toward the heating element and begin to burn.',
    },
    {
      title: 'Airflow can be blocked',
      body: 'A sheet across the basket floor or grease pan restricts circulation. Cooking performance drops.',
    },
  ],

  calloutLabel: 'Wax vs. Parchment',
  calloutBody: [
    'Wax paper and parchment paper look similar, and both have nonstick surfaces. Wax paper carries a wax coating and is intended mainly for room-temperature or cold tasks, plus microwave covering. Exposed cooking heat can melt the coating.',
    'Parchment is designed for baking heat, but air-fryer rules still vary by model. Some manufacturers prohibit paper liners, while others sell or allow purpose-made parchment liners. Follow your manual, and keep any approved liner secured under food without blocking required airflow.',
  ],

  sources: [
    {
      publisher: 'Reynolds Brands',
      title: 'Wax Paper',
      url: 'https://www.reynoldsbrands.com/products/kitchen-papers/cut-rite-wax-paper',
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
      publisher: 'Chefman',
      title: '8 x 8.2" Air Fryer Liners',
      url: 'https://chefman.com/products/8-x-8-2-air-fryer-liners',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against wax-paper manufacturer guidance and air-fryer support documents covering heat exposure, loose paper near heating elements, and airflow.',
};
