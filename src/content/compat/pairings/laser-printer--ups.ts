import type { Pairing } from '../types';

/**
 * Laser Printer plugged into UPS.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const laserPrinterPluggedIntoUps: Pairing = {
  subjectSlug: 'laser-printer',
  subjectName: 'Laser Printer',
  subjectKind: 'Printer',
  subjectNote: 'Toner printer with heated fuser',

  relation: 'plugged-into',

  targetSlug: 'ups',
  targetName: 'UPS',
  targetKind: 'Device',
  targetNote: 'Battery backup with protected outlets',

  eyebrow: 'Office · Power Protection',
  h1: 'Can I Plug a Laser Printer Into a UPS?',
  seoTitle: 'Laser Printer and UPS Compatibility | Can I Use It With',
  metaDescription:
    'Only with limits: use a surge-only UPS outlet if the printer manual allows it. Avoid battery-backed outlets unless both manufacturers approve the load.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Only with limits. Plug it into a UPS outlet labeled Surge Only if the printer manual permits that connection; otherwise use a properly grounded wall outlet. Avoid Battery Backup or Battery + Surge outlets unless both manufacturers approve the pairing and the UPS can handle the printer’s peak load.',

  mainRisk: 'UPS overload',
  damages: 'UPS and printer',
  alternative: 'Grounded wall outlet',

  conditionsOk: [
    'The printer manual allows UPS or surge-protected power.',
    'The selected receptacle is clearly labeled Surge Only, and the UPS manual permits printers there.',
    'For battery-backed use, both manuals approve it and the UPS ratings cover the printer’s peak load plus all other connected equipment.',
    'The UPS itself is connected directly to an appropriately rated, properly grounded wall outlet.',
  ],
  conditionsNever: [
    'Never plug the printer into a Battery Backup or Battery + Surge outlet merely because the plug fits.',
    'Never size a battery-backed setup from standby or average power consumption; check maximum and peak-load requirements.',
    'Never override a printer manual that prohibits UPS devices; some manufacturers warn of poor performance, property damage, or fire.',
    'Never expect a Surge Only outlet to keep the printer running during an outage.',
    'Never add a power strip or separate surge protector to create more UPS outlets.',
  ],

  mechanisms: [
    {
      title: 'Fuser Heating Load',
      body: 'Laser printers use a heated fuser to bond toner to paper. The move from standby into heating creates a much heavier load, and laser printers can also have high startup inrush.',
    },
    {
      title: 'Battery Output Limit',
      body: 'Battery-backed outlets must stay within the UPS watt, VA, and overload limits. A printer’s peak demand can overload the unit or make it transfer to battery repeatedly, shortening battery life.',
    },
    {
      title: 'Surge-Only Outlet',
      body: 'Surge-only receptacles provide surge protection without battery power during an outage. They keep the printer from becoming part of the UPS battery-backed load.',
    },
  ],

  calloutLabel: 'Why Printers Are Different',
  calloutBody: [
    'A desktop UPS is often treated like a power strip with a battery attached. That misses the laser printer’s heating load: the printer may sit at low demand, then pull much harder when the fuser reheats or the machine starts.',
    'Outlet labels matter, but they do not override the printer manual. Some UPS makers direct printers to surge-only receptacles, while some printer makers prohibit UPS devices entirely because the accessory can be overloaded.',
  ],

  sources: [
    {
      publisher: 'Eaton',
      title: 'UPS Features',
      url: 'https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/ups-features.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Eaton',
      title: 'Uninterruptible Power Supply FAQ',
      url: 'https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/backup-power-ups/uninterruptible-power-supply-faq.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Lexmark',
      title: 'Product Statements',
      url: 'https://support.lexmark.com/content/support/guides/en/v59250442/safety-information/product-statements.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Canon',
      title: 'Canon Environmental Report 2002',
      url: 'https://www.usa.canon.com/bin/canon/downloadasset?path=/content/dam/canon-assets/about-canon-assets/about-us/kyosei-our-corporate-philosophy/environment-and-sustainability/additional-initiative-detail-environmental-initiatives/canon-sustainability-report/archive-canon-environmental-2002.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed fuser power behavior, UPS outlet types, inrush sizing, and manufacturer restrictions using Eaton, Lexmark, and Canon documentation.',
};
