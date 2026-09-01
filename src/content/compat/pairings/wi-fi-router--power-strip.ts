import type { Pairing } from '../types';

/**
 * Wi-Fi Router plugged into Power Strip.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const wiFiRouterPluggedIntoPowerStrip: Pairing = {
  subjectSlug: 'wi-fi-router',
  subjectName: 'Wi-Fi Router',
  subjectKind: 'Device',
  subjectNote: 'Device that routes home network traffic',

  relation: 'plugged-into',

  targetSlug: 'power-strip',
  targetName: 'Power Strip',
  targetKind: 'Accessory',
  targetNote: 'Multi-outlet electrical power distributor',

  eyebrow: 'Networking · Power & Protection',
  h1: 'Can I Plug a Wi-Fi Router Into a Power Strip?',
  seoTitle: 'Wi-Fi Router Power Strip Compatibility | Can I Use It With',
  metaDescription:
    'Yes, a Wi-Fi router can run from a properly rated power strip. Use the correct adapter, avoid overloads, and make sure the plug fits fully without crowding.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes. Plug the router’s manufacturer-specified power adapter into a safety-certified, undamaged power strip connected directly to a wall outlet. Keep the strip’s combined load within its marked rating, and make sure a bulky adapter fits fully without crowding nearby plugs. A basic power strip does not provide surge protection.',

  mainRisk: 'Overheating and fire',
  damages: 'Strip and router',
  alternative: 'Listed surge protector or UPS',

  conditionsOk: [
    'Use an indoor power strip bearing a certification mark from an independent testing lab.',
    'Connect the power strip directly to a wall outlet in a dry location.',
    'Use the power adapter supplied or specified for your router model.',
    'Choose wider-spaced or rotated outlets if the adapter crowds neighboring plugs.',
  ],
  conditionsNever: [
    'Do not exceed the power strip’s marked electrical rating, even when sockets remain empty.',
    'Do not plug the power strip into another power strip or an extension cord.',
    'Do not leave the adapter partly inserted with any portion of its prongs exposed.',
    'Do not run the strip’s cord under a rug or pinch it behind furniture.',
    'Do not rely on a basic power strip to protect the router from power surges.',
  ],

  mechanisms: [
    {
      title: 'Normal Power Conversion',
      body: 'The router’s adapter takes AC power from the strip and converts it to the DC power the router requires. A properly rated strip does not interfere with that conversion.',
    },
    {
      title: 'Shared-Load Heating',
      body: 'Every connected device sends current through the strip’s cord and internal contacts. Excess load, damage, or a loose connection can generate heat and create a fire or shock hazard.',
    },
    {
      title: 'Bulky Adapter Fit',
      body: 'A large adapter can cover neighboring sockets or pull itself partly out. Wider-spaced or rotated outlets let the plug sit fully inserted without pressing against another plug.',
    },
  ],

  calloutLabel: 'More Outlets, Same Capacity',
  calloutBody: [
    'The extra sockets can make a power strip look like extra electrical capacity. Every connected device still shares the strip’s cord and internal conductors, so the marked rating applies to the combined load.',
    'Another common assumption is that every power strip protects electronics from voltage spikes. Some models include surge protection, while a basic strip only distributes power. Choose a listed surge protector for surge protection or a UPS if you also want temporary backup power.',
  ],

  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Power Up With Safety: Extension Cords & Power Strips',
      url: 'https://www.cpsc.gov/s3fs-public/ExtensionCordsPowerStrips.pdf',
      kind: 'government',
    },
    {
      publisher: 'UL Solutions',
      title: 'Power Strips Testing and Certification',
      url: 'https://www.ul.com/services/power-strips-testing-and-certification',
      kind: 'standards_body',
    },
    {
      publisher: 'NETGEAR',
      title: 'Safety Instructions and Warnings',
      url: 'https://kb.netgear.com/000059643/Safety-Instructions-and-Warnings',
      kind: 'manufacturer',
    },
    {
      publisher: 'Eaton',
      title: 'Power Strip Buying Guide: How to Choose the Right Power Strip',
      url: 'https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/power-strips/power-strip-buying-guide.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against CPSC and UL power-strip safety guidance, Eaton outlet-spacing guidance, and NETGEAR power-adapter instructions for network equipment.',
};
