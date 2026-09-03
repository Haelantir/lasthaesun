import type { Pairing } from '../types';

/**
 * Laptop USB-C Charger with Phone.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const laptopUsbCChargerWithPhone: Pairing = {
  subjectSlug: 'laptop-usb-c-charger',
  subjectName: 'Laptop USB-C Charger',
  subjectKind: 'Charger',
  subjectNote: 'High-output USB-C wall power adapter',

  relation: 'with',

  targetSlug: 'phone',
  targetName: 'Phone',
  targetKind: 'Device',
  targetNote: 'Rechargeable mobile communication device',

  eyebrow: 'Electronics · Chargers & Cables',
  h1: 'Can I Use a Laptop USB-C Charger with a Phone?',
  seoTitle: 'Using a Laptop USB-C Charger for a Phone | Can I Use It With',
  metaDescription:
    'Yes, with limits: a compliant laptop USB-C charger can charge a compatible phone. The phone limits power; cable and charging-protocol support affect speed.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, you can use a standards-compliant laptop USB-C charger with a compatible phone and the correct cable. The wattage printed on the charger is its maximum output. With USB Power Delivery, the phone requests a level it supports. Charging may be slower if the phone and charger lack a shared fast-charging mode or the cable limits power.',

  mainRisk: 'Overheating or fire',
  damages: 'Phone or charger',
  alternative: 'Manufacturer-approved phone charger',

  conditionsOk: [
    'The charger is genuine, undamaged, standards-compliant, and carries applicable independent safety certification.',
    'Use a compliant cable with a USB-C plug for the charger and the connector specified for your phone.',
    'The phone manual permits charging from a compatible USB-C power adapter; manuals differ, so check yours.',
    'Let the phone choose the charging rate; a larger charger rating does not require any manual setting.',
  ],
  conditionsNever: [
    'Do not use a counterfeit, recalled, uncertified, or visibly damaged charger.',
    'Do not use a cable with exposed conductors, melted insulation, bent plugs, scorch marks, or a loose connection.',
    'Do not force a connector or improvise with an adapter that is not specified for phone charging.',
    'Do not assume every USB-C charger supports your phone’s fastest charging mode.',
    'Disconnect the charger if the phone reports an unsupported accessory, charging repeatedly cuts out, or any part becomes abnormally hot.',
  ],

  mechanisms: [
    {
      title: 'The phone requests power',
      body: 'A USB Power Delivery charger first advertises the power levels it can provide. The phone requests a supported level, and the charger supplies that agreed output.',
    },
    {
      title: 'The cable can cap power',
      body: 'USB-C cables have defined power capabilities. A compliant cable can cap the available current, so some phones need a higher-rated cable to reach their fastest supported mode.',
    },
    {
      title: 'Build safety stays separate',
      body: 'Power negotiation cannot correct poor insulation, defective components, or physical damage inside a charger. Poorly built or uncertified chargers can overheat, start a fire, expose live conductors, or damage connected equipment.',
    },
  ],

  calloutLabel: 'The Wattage Mix-Up',
  calloutBody: [
    'People often read a laptop charger’s wattage as the amount it will push into any connected device. The rating is the most the charger can offer under supported conditions. With USB Power Delivery, the phone asks for a level it can accept.',
    'A larger rating does not guarantee faster charging. The phone and charger still need a shared charging mode, and the cable must support the required current. A counterfeit, recalled, damaged, or uncertified charger remains unsafe regardless of whether its plug fits.',
  ],

  sources: [
    {
      publisher: 'USB Implementers Forum',
      title: 'USB Charger (USB Power Delivery)',
      url: 'https://www.usb.org/usb-charger-pd',
      kind: 'standards_body',
    },
    {
      publisher: 'USB Implementers Forum',
      title: 'Cables and Connectors',
      url: 'https://www.usb.org/cable_connector',
      kind: 'standards_body',
    },
    {
      publisher: 'Apple',
      title: 'Charge and connect with the USB-C connector on your iPhone',
      url: 'https://support.apple.com/en-us/105099',
      kind: 'manufacturer',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Request for Inclusion of Requirements in Safety Standards to Address Hazards Associated with AC and USB Chargers',
      url: 'https://www.cpsc.gov/s3fs-public/Letter%20to%20UL%20on%20AC%20and%20USB%20Chargers%20Nov%202018%20Signed.pdf',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed USB-IF power-delivery and cable requirements, Apple charging guidance, and CPSC findings on certified and uncertified AC and USB chargers.',
};
