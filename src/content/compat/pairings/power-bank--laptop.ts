import type { Pairing } from '../types';

/**
 * Power Bank with Laptop.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const powerBankWithLaptop: Pairing = {
  subjectSlug: 'power-bank',
  subjectName: 'Power Bank',
  subjectKind: 'Accessory',
  subjectNote: 'Portable rechargeable battery for device charging',

  relation: 'with',

  targetSlug: 'laptop',
  targetName: 'Laptop',
  targetKind: 'Computer',
  targetNote: 'Portable computer with rechargeable battery',

  eyebrow: 'Electronics · Portable Power',
  h1: 'Can I Use a Power Bank With a Laptop?',
  seoTitle: 'Using a Power Bank With a Laptop Safely | Can I Use It With',
  metaDescription:
    'Yes, when the laptop accepts the bank’s output and the cable is rated for it. Match the charging port, USB-C PD profile, and required wattage.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the laptop accepts USB-C Power Delivery and the power bank and cable support an input level listed for that laptop. An underpowered bank may charge slowly, fail to charge, or let the battery keep draining during use. For a barrel-jack-only laptop, use a power bank and adapter setup approved for that exact model.',

  mainRisk: 'No laptop charge',
  damages: 'Nothing when compatible',
  alternative: 'Original laptop charger',

  conditionsOk: [
    'The laptop manual identifies the chosen USB-C or Thunderbolt port as a charging input.',
    'The power bank offers a USB Power Delivery output profile the laptop accepts, with enough wattage for the intended use.',
    'The USB-C cable is rated for the power level you expect from the bank.',
    'For a proprietary charging port, the laptop maker approves the power bank and adapter setup for that exact model.',
  ],
  conditionsNever: [
    'Do not assume every USB-C port accepts power; some ports support only data or display connections.',
    'Do not rely on total capacity or mAh alone; check the output wattage and supported PD profiles.',
    'Do not use a USB-A phone-charging port to power a laptop unless the laptop manual explicitly allows it.',
    'Do not use a generic USB-C-to-barrel cable because the plug fits; the required input and model support still have to match.',
    'Do not expect an underpowered bank to hold the battery level during heavy use; switch chargers if the battery drains or a low-power warning appears.',
  ],

  mechanisms: [
    {
      title: 'USB-C PD negotiation',
      body: 'With USB Power Delivery, the laptop and power bank agree on a supported voltage and current before higher power flows. The bank’s maximum rating is an upper limit; the laptop requests an available level.',
    },
    {
      title: 'Power shortfall',
      body: 'A laptop can consume power faster than the bank supplies it. Charging then slows or stops, and the internal battery may keep discharging while the laptop remains connected.',
    },
    {
      title: 'Barrel-jack mismatch',
      body: 'A barrel-jack laptop needs the connector and electrical input specified for that model. An improvised adapter may be rejected, and forcing the wrong plug can damage the connector.',
    },
  ],

  calloutLabel: 'USB-C Looks Universal',
  calloutBody: [
    'USB-C describes the connector shape, not every charging feature behind it. A laptop may have USB-C ports that do not accept input power, and a power bank may have USB-C without offering the PD mode the laptop needs.',
    'A large capacity label creates another mismatch. Capacity affects how long the bank can run; output wattage and PD profiles decide whether the laptop can charge at all, and the cable must carry that power.',
  ],

  sources: [
    {
      publisher: 'USB Implementers Forum',
      title: 'USB Charger (USB Power Delivery)',
      url: 'https://www.usb.org/usb-charger-pd',
      kind: 'standards_body',
    },
    {
      publisher: 'Apple',
      title: 'Charge your Mac laptop computer',
      url: 'https://support.apple.com/en-us/102397',
      kind: 'manufacturer',
    },
    {
      publisher: 'Dell Technologies',
      title: 'How to Identify AC Adapter Damage on Dell Systems',
      url: 'https://www.dell.com/support/kbdoc/en-us/000125337/identify-ac-adapter-damage-on-dell-systems',
      kind: 'manufacturer',
    },
    {
      publisher: 'Lenovo',
      title: 'Power input through a USB Type-C connector',
      url: 'https://download.lenovo.com/pccbbs/pubs/thinkbook_16p_g4/html_en/EN/usb_c_power_port.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed USB-IF guidance plus Apple, Dell, and Lenovo charging documents on USB-C input, power limits, low-wattage behavior, cables, and proprietary charging ports.',
};
