import type { Pairing } from '../types';

/**
 * Silicone Liner in Air Fryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const siliconeLinerInAirFryer: Pairing = {
  subjectSlug: 'silicone-liner',
  subjectName: 'Silicone Liner',
  subjectKind: 'Accessory',
  subjectNote: 'Reusable molded basket liner',

  relation: 'in',

  targetSlug: 'air-fryer',
  targetName: 'Air Fryer',
  targetKind: 'Appliance',
  targetNote: 'Fan-driven countertop convection cooker',

  eyebrow: 'Kitchen · Air Fryer Liners',
  h1: 'Can I Use a Silicone Liner in an Air Fryer?',
  seoTitle: 'Are Silicone Liners Safe in Air Fryers? | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use heat-rated, food-contact silicone that fits inside the basket, stays clear of the heater, and leaves room for airflow.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use a silicone liner labeled for food contact and oven or air-fryer use, and keep the setting within its temperature rating. It must fit inside the basket, remain clear of the heating element, and leave room for hot air to circulate. A solid liner may reduce browning underneath the food.',

  mainRisk: 'Liner overheating',
  damages: 'The silicone liner',
  alternative: 'Bare basket',

  conditionsOk: [
    'Use a liner labeled for food contact and for oven or air-fryer cooking.',
    'Keep the cooking setting at or below the liner’s stated maximum temperature.',
    'Place it inside the removable basket or on the cooking tray as your air fryer manual directs.',
    'Choose a liner that sits flat and leaves space around its sides for moving air.',
  ],
  conditionsNever: [
    'Never use an unlabeled silicone mat, lid, or mold that is not rated for cooking.',
    'Never let the liner touch the heating element or extend into the fan area.',
    'Never force an oversized liner against the basket walls, where it reduces the air path around the food.',
    'Never place it beneath the removable basket or crisper plate unless the manual allows that position.',
    'Never continue cooking if the liner deforms, melts, smokes, or produces a strong chemical odor.',
  ],

  mechanisms: [
    {
      title: 'Heat rating sets the limit',
      body: 'Silicone bakeware tolerates high heat, but every product has a limit. Above its rated temperature, a liner can soften, deform, or melt.',
    },
    {
      title: 'Solid bases redirect airflow',
      body: 'Air fryers brown food by circulating hot air through and around the basket. A solid liner covers basket perforations, so the underside may cook or crisp less efficiently even when air still passes around the sides.',
    },
  ],

  calloutLabel: 'Paper rules get reused',
  calloutBody: [
    'Many liner warnings are written for parchment. Airflow can lift a light sheet toward the heater, so paper-liner manufacturers tell users to add food immediately to hold it down.',
    'A molded silicone liner normally stays seated without food acting as a weight. The paper-specific preheat warning does not automatically carry over, but a thin mat that curls or shifts should stay out until it can be held flat. Follow any preheating restriction printed by the liner or air fryer maker.',
  ],

  sources: [
    {
      publisher: 'Philips',
      title: 'What kind of baking tin can I use in my Philips Airfryer?',
      url: 'https://www.usa.philips.com/c-f/XC000015318/what-kind-of-baking-tin-can-i-use-in-my-philips-airfryer',
      kind: 'manufacturer',
    },
    {
      publisher: 'Health Canada',
      title: 'The safe use of cookware and bakeware',
      url: 'https://www.canada.ca/en/health-canada/services/household-products/safe-use-cookware.html',
      kind: 'government',
    },
    {
      publisher: 'Reynolds Brands',
      title: 'How to Use Air Fryer Liners',
      url: 'https://www.reynoldsbrands.com/tips-and-how-tos/how-to-use-air-fryer-liners',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against Philips air-fryer accessory guidance, Health Canada silicone bakeware advice, and Reynolds instructions for loose paper liners.',
};
