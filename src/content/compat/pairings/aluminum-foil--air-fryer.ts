import type { Pairing } from '../types';

/**
 * Aluminum Foil in Air Fryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const aluminumFoilInAirFryer: Pairing = {
  subjectSlug: 'aluminum-foil',
  subjectName: 'Aluminum Foil',
  subjectKind: 'Material',
  subjectNote: 'Thin rolled aluminum kitchen wrap',

  relation: 'in',

  targetSlug: 'air-fryer',
  targetName: 'Air Fryer',
  targetKind: 'Appliance',
  targetNote: 'Fan-driven countertop cooking appliance',

  eyebrow: 'Kitchen · Liners & Wraps',
  h1: 'Can I Use Aluminum Foil in an Air Fryer?',
  seoTitle: 'Aluminum Foil in Air Fryers: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Sometimes. Use aluminum foil only when your air fryer’s manual allows it, keep airflow openings clear, and secure the foil under food before cooking.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Sometimes. Manuals differ, so use foil only if your air fryer’s instructions allow it. Keep the piece small, hold it down with food, leave airflow openings clear, and keep it away from the heating element. If your manual says no, cook directly in the basket.',

  mainRisk: 'Foil burning',
  damages: 'The air fryer',
  alternative: 'Cook in bare basket',

  conditionsOk: [
    'The owner’s manual for your exact model allows foil.',
    'The piece is no larger than needed for the food, with open space around it for circulation.',
    'Food is already on top before the fan starts and is heavy enough to keep the foil from moving.',
    'The foil sits only in the location approved by the manual and stays away from the heating element.',
  ],
  conditionsNever: [
    'Never use foil when the manual prohibits or discourages it.',
    'Never cover the entire basket or block its perforations.',
    'Never line a grease-collection pan unless the manual specifically allows that placement.',
    'Never run the fan with loose, unweighted foil inside.',
    'Never let foil protrude toward or touch the heating element.',
  ],

  mechanisms: [
    {
      title: 'Blocked airflow',
      body: 'The fan pushes heated air through and around the basket. A broad foil sheet closes openings, so less hot air reaches the food and cooking becomes uneven.',
    },
    {
      title: 'Lifted into heater',
      body: 'Moving air can raise thin foil when food does not hold it down. Foil that reaches the heating element can start to burn.',
    },
  ],

  calloutLabel: 'Oven-safe assumption',
  calloutBody: [
    'Foil handles normal oven heat, so lining an air fryer can look like an easy way to catch drips and speed cleanup.',
    'The fan changes the decision. Foil can cover the openings that move hot air around the food, and an unsecured sheet can rise toward the heater. Manufacturers allow different placements, so the manual for the exact model controls.',
  ],

  sources: [
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
      publisher: 'Hamilton Beach',
      title: 'Hamilton Beach FAQs',
      url: 'https://hamiltonbeach.com/frequently-asked-questions',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against manufacturer support and owner guidance from Philips, Instant Pot and Hamilton Beach, with differences between models and brands preserved.',
};
