import type { Pairing } from '../types';

/**
 * Desktop Computer plugged into Power Strip.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const desktopComputerPluggedIntoPowerStrip: Pairing = {
  subjectSlug: 'desktop-computer',
  subjectName: 'Desktop Computer',
  subjectKind: 'Electronics',
  subjectNote: 'Stationary personal computer system',

  relation: 'plugged-into',

  targetSlug: 'power-strip',
  targetName: 'Power Strip',
  targetKind: 'Electrical',
  targetNote: 'Multi-outlet electrical power device',

  eyebrow: 'Electronics · Power & Surge Protection',
  h1: 'Can I Plug a Desktop Computer Into a Power Strip?',
  seoTitle: 'Desktop PCs on Power Strips: Safe Use | Can I Use It With',
  metaDescription:
    'Yes, if the power strip is certified, grounded, plugged directly into a wall outlet, and rated for the combined load of every connected device.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes. Use a certified, grounded power strip only when its watt or amp rating can handle the desktop and every other device plugged into it. Plug the strip directly into a wall outlet, never another strip or an extension cord. Choose a surge protector for voltage spikes, or a UPS if you need backup power during an outage.',

  mainRisk: 'Overheating and fire',
  damages: 'Strip and computer',
  alternative: 'Surge protector or UPS',

  conditionsOk: [
    'The strip carries an independent testing-lab certification and has a readable electrical rating.',
    'The combined input load of every device plugged into the strip stays within that rating.',
    'The desktop’s three-prong plug remains grounded through the strip and a grounded wall outlet.',
    'The strip plugs directly into the wall, and its cord and the computer’s cord are undamaged and fully inserted.',
  ],
  conditionsNever: [
    'Never connect the power strip to another power strip, surge protector, or extension cord.',
    'Never exceed the strip’s rating even if unused outlets remain.',
    'Never remove the desktop plug’s ground pin or use an adapter that bypasses grounding.',
    'Never use a strip with a frayed, cracked, brittle, or otherwise damaged cord or housing.',
    'Never run a space heater, microwave, or other high-power appliance from the same strip.',
  ],

  mechanisms: [
    {
      title: 'Combined Electrical Load',
      body: 'Every connected device draws power through the strip’s cord and internal conductors. Excess current can trip overcurrent protection, while an overloaded or defective strip can overheat and create a fire hazard.',
    },
    {
      title: 'Ground Fault Path',
      body: 'A grounded desktop plug connects the computer’s chassis to an equipment-grounding path. That path carries fault current back toward the source so a breaker or fuse can open the circuit, reducing shock risk.',
    },
    {
      title: 'Surge Suppression',
      body: 'A basic power strip adds outlets and may include overload protection, but it does not automatically suppress voltage surges. A certified surge protector contains components that limit transient voltage reaching the computer.',
    },
  ],

  calloutLabel: 'Power Strip Confusion',
  calloutBody: [
    'The outlet count is easy to mistake for capacity. Capacity comes from the strip’s watt or amp rating and the combined load of the devices connected to it.',
    'Power strips and surge protectors can have the same shape. A basic strip distributes power without clamping surges. Buy a product identified and certified as a surge protector if voltage spikes are the concern, or use a UPS when you need backup power during outages.',
  ],

  sources: [
    {
      publisher: 'Occupational Safety and Health Administration',
      title: 'Compliance requirements for relocatable power taps or "power strips"',
      url: 'https://www.osha.gov/laws-regs/standardinterpretations/2002-11-18',
      kind: 'regulation',
    },
    {
      publisher: 'UL Solutions',
      title: 'Guide to Power Strips and Surge Protectors',
      url: 'https://www.ul.com/insights/guide-power-strips-and-surge-protectors',
      kind: 'standards_body',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Power Up With Safety: Extension Cords & Power Strips',
      url: 'https://www.cpsc.gov/s3fs-public/ExtensionCordsPowerStrips.pdf',
      kind: 'government',
    },
    {
      publisher: 'Dell Technologies',
      title: 'Dell Desktop Care - Maintenance, Cleaning, and Ergonomics',
      url: 'https://www.dell.com/support/kbdoc/en-us/000184427/best-practices-for-product-use-and-handling-for-dell-desktops',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed for load ratings, grounding, direct wall connection, daisy-chaining, cord condition, and surge protection using OSHA, CPSC, UL, and manufacturer guidance.',
};
