import type { Pairing } from '../types';

/**
 * Paper Plate in Air Fryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const paperPlateInAirFryer: Pairing = {
  subjectSlug: 'paper-plate',
  subjectName: 'Paper Plate',
  subjectKind: 'Material',
  subjectNote: 'Disposable plate made from paperboard',

  relation: 'in',

  targetSlug: 'air-fryer',
  targetName: 'Air Fryer',
  targetKind: 'Appliance',
  targetNote: 'Countertop appliance using fast hot air',

  eyebrow: 'Kitchen · Disposable Serveware',
  h1: 'Can I Use a Paper Plate in an Air Fryer?',
  seoTitle: 'Paper Plates in Air Fryers: Safe or Not? | Can I Use It With',
  metaDescription:
    'No. Ordinary paper plates can block airflow in an air fryer and may scorch or burn if they shift toward the heating element. Use the basket or an approved dish.',

  verdict: 'no',
  shortAnswer:
    'No. Do not put a paper plate in an air fryer, even if food is holding it down. Cook in the bare basket or in cookware approved for your model, then transfer the food to the plate for serving. Manufacturer guidance prohibits paper in some air fryers, and a solid plate interferes with airflow.',

  mainRisk: 'Fire',
  damages: 'The air fryer',
  alternative: 'Bare basket or approved cookware',

  conditionsOk: [
    'Use the paper plate only for serving after the food leaves the air fryer.',
    'Cook directly on the basket or crisper tray when your manual calls for it.',
    'Use an oven-safe dish or manufacturer-approved accessory only when your model’s instructions allow it.',
  ],
  conditionsNever: [
    'Never put a paper plate in the basket or cooking chamber.',
    'Never preheat the air fryer with a paper plate inside.',
    'Never assume a microwave-safe label also covers air-fryer use.',
    'Never cover the perforated basket floor with a solid disposable plate.',
    'Never treat a thicker plate or food on top as enough to make paper safe.',
  ],

  mechanisms: [
    {
      title: 'Paper can burn',
      body: 'An air fryer surrounds the plate with hot moving air near a heating element. Some manufacturer safeguards prohibit paper outright because it can scorch or burn inside the appliance.',
    },
    {
      title: 'The plate blocks airflow',
      body: 'Hot air must pass around and beneath the food. A solid plate covers basket openings, reducing circulation and leaving food to cook poorly or unevenly.',
    },
  ],

  calloutLabel: 'Why Microwaves Mislead',
  calloutBody: [
    'White paper plates are commonly used for microwave reheating. That familiar use can make a disposable plate seem safe anywhere food gets hot.',
    'An air fryer works like a compact convection oven, using a heating element and fast-moving hot air. Microwave-safe describes microwave use only. It does not mean the plate is approved for direct oven-style heat or a fan-driven cooking chamber.',
  ],

  sources: [
    {
      publisher: 'BLACK+DECKER',
      title: 'Purifry Fryer AFBD Series Use and Care Manual',
      url: 'https://cdn.shopify.com/s/files/1/0613/0266/9421/files/AFBD42-0BD_Use_and_Care_Manual.pdf?v=1760707197',
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
      publisher: 'University of Wisconsin Extension',
      title: 'Choose the Right Containers and Location When Storing Food at Home',
      url: 'https://taylor.extension.wisc.edu/files/2010/08/Choose-the-Right-Containers-When-Storing-Food-at-Home.pdf',
      kind: 'academic',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against BLACK+DECKER safeguards, Philips and Instant Pot air-fryer guidance, and University of Wisconsin Extension microwave-container guidance.',
};
