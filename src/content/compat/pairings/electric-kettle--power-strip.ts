import type { Pairing } from '../types';

/**
 * Electric Kettle plugged into Power Strip.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const electricKettlePluggedIntoPowerStrip: Pairing = {
  subjectSlug: 'electric-kettle',
  subjectName: 'Electric Kettle',
  subjectKind: 'Appliance',
  subjectNote: 'Countertop appliance that boils water',

  relation: 'plugged-into',

  targetSlug: 'power-strip',
  targetName: 'Power Strip',
  targetKind: 'Accessory',
  targetNote: 'Multi-outlet flexible power tap',

  eyebrow: 'Kitchen · Electrical Safety',
  h1: 'Can I Plug an Electric Kettle Into a Power Strip?',
  seoTitle: 'Electric Kettle and Power Strip Safety | Can I Use It With',
  metaDescription:
    'No. Plug an electric kettle directly into a wall outlet; its heating load can overheat an overloaded or weak power-strip connection.',

  verdict: 'no',
  shortAnswer:
    'No. Plug the electric kettle directly into a properly functioning wall outlet, and do not run another heat-producing appliance from that receptacle while the kettle is heating. A power strip adds cord and contact points that can overheat under a heavy appliance load; surge protection does not increase its electrical capacity.',

  mainRisk: 'Electrical fire',
  damages: 'Strip and outlet',
  alternative: 'Direct wall outlet',

  conditionsOk: [
    'Plug the kettle directly into a wall receptacle that is in good condition.',
    'Follow the exact kettle manual for voltage, grounding and circuit requirements.',
    'Insert the plug fully, keep the connection dry and leave it easy to unplug.',
    'Operate only one heat-producing appliance from that receptacle at a time.',
  ],
  conditionsNever: [
    'Never plug the kettle into a power strip, surge protector or multi-outlet adapter.',
    'Never connect a power strip through another strip or an extension cord.',
    'Never use a loose, damaged, scorched or warm plug or receptacle.',
    'Never alter the plug or defeat its grounding or polarization feature.',
    'Never assume empty sockets mean spare electrical capacity.',
  ],

  mechanisms: [
    {
      title: 'Heating Load Warms Connections',
      body: 'The kettle’s heating element draws substantial current while it operates. Resistance in a power strip’s cord, switch and plug contacts produces heat, especially where a connection is loose or damaged.',
    },
    {
      title: 'One Rating Is Shared',
      body: 'A strip’s electrical rating applies to the combined load of every connected device. Adding the kettle to other appliances can overload the strip or branch circuit even when open sockets remain.',
    },
  ],

  calloutLabel: 'Surge Protector Confusion',
  calloutBody: [
    'A surge protector may look like a stronger power strip because it has extra circuitry and protection ratings. Those features address brief voltage spikes.',
    'The kettle’s full operating current still passes through the strip’s cord, switch and outlet contacts. Surge protection does not increase the strip’s load rating.',
  ],

  sources: [
    {
      publisher: 'U.S. Fire Administration',
      title: 'Electrical Fire Safety',
      url: 'https://www.usfa.fema.gov/downloads/pdf/publications/electrical_fire_safety_vertical.pdf',
      kind: 'government',
    },
    {
      publisher: 'Electrical Safety Foundation International',
      title: 'Don’t Overload Your Home',
      url: 'https://www.esfi.org/dont-overload-your-home/',
      kind: 'industry',
    },
    {
      publisher: 'ZWILLING',
      title: 'ENFINIGY Water Kettle Instruction Manual',
      url: 'https://www.zwilling.com/on/demandware.static/-/Sites-zwilling-us-Library/default/dw1b7d8de2/images/other/instruction_Kettle.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Belkin',
      title: 'Power Strips',
      url: 'https://www.belkin.com/products/surge-protectors/power-strips/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed U.S. fire and electrical-safety guidance plus kettle and power-strip manufacturer documents covering direct connection, high-load appliances and overload risk.',
};
