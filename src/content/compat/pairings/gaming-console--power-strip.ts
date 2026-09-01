import type { Pairing } from '../types';

/**
 * Gaming Console plugged into Power Strip.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const gamingConsolePluggedIntoPowerStrip: Pairing = {
  subjectSlug: 'gaming-console',
  subjectName: 'Gaming Console',
  subjectKind: 'Electronics',
  subjectNote: 'Video game system with AC power',

  relation: 'plugged-into',

  targetSlug: 'power-strip',
  targetName: 'Power Strip',
  targetKind: 'Accessory',
  targetNote: 'Multi-outlet device sharing one wall outlet',

  eyebrow: 'Gaming · Power & Electrical',
  h1: 'Can I Plug a Gaming Console Into a Power Strip?',
  seoTitle: 'Gaming Consoles on Power Strips: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use a listed, undamaged power strip rated for the total connected load, plug it directly into the wall, and follow the console manual.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use a listed, undamaged power strip whose rating covers the gaming console and every other connected device, and plug the strip directly into a wall outlet. Follow the console manual if it gives stricter power-connection instructions.',

  mainRisk: 'Electrical fire',
  damages: 'Strip and outlet',
  alternative: 'Direct wall outlet',

  conditionsOk: [
    'Check the console manual and use the supplied or manufacturer-approved power cord.',
    'Choose a power strip with recognized independent testing-lab certification and a rating that meets or exceeds the total connected load.',
    'Plug the power strip directly into a permanent wall outlet and insert every plug fully.',
    'Keep the strip and cord dry, uncovered, undamaged, and protected from foot traffic or pressure.',
  ],
  conditionsNever: [
    'Never connect the power strip to another power strip, surge protector, or extension cord.',
    'Never exceed the strip’s marked rating or add high-power heating or cooking appliances.',
    'Never use a strip or wall outlet that is warm, discolored, cracked, frayed, or loose.',
    'Never run the cord beneath a rug, through an opening, or where furniture or traffic can crush it.',
    'Never remove a grounding pin, use an adapter that defeats grounding, or force an incompatible plug.',
  ],

  mechanisms: [
    {
      title: 'Total Load Makes Heat',
      body: 'Every device on the strip contributes to the current it carries. If the combined load exceeds the strip’s rating, its conductors and receptacle contacts can overheat and create a fire hazard.',
    },
    {
      title: 'Damage Creates Faults',
      body: 'Pinching, crushing, or wear can damage insulation and conductors. Exposed or broken wiring can cause a short circuit, electric shock, or localized heating.',
    },
    {
      title: 'Surge Protection Is Separate',
      body: 'A basic power strip mainly adds outlets. A surge protector includes components that limit transient voltage, but its normal load rating still applies.',
    },
  ],

  calloutLabel: 'Low Load, Real Limits',
  calloutBody: [
    'A gaming console is closer to the computer and audio/video loads power strips are designed to serve than to a space heater or microwave. That makes the pairing generally workable, but it does not make every strip or group of connected devices safe.',
    'The number of open outlets does not set capacity. Add the console and every other connected device, then compare that load with the strip’s marked rating. Cord condition and plug fit still matter. A basic power strip may provide no surge protection.',
  ],

  sources: [
    {
      publisher: 'Microsoft',
      title: 'Product Safety Warnings and Instructions',
      url: 'https://support.microsoft.com/en-US/Surface/hardware-warranty/product-safety-warnings-and-instructions-8',
      kind: 'manufacturer',
    },
    {
      publisher: 'UL Solutions',
      title: 'Guide to Power Strips and Surge Protectors',
      url: 'https://www.ul.com/insights/guide-power-strips-and-surge-protectors',
      kind: 'standards_body',
    },
    {
      publisher: 'Occupational Safety and Health Administration',
      title: 'Compliance Requirements for Relocatable Power Taps or Power Strips',
      url: 'https://www.osha.gov/laws-regs/standardinterpretations/2002-11-18',
      kind: 'government',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Power Up With Safety: Extension Cords and Power Strips',
      url: 'https://www.cpsc.gov/s3fs-public/ExtensionCordsPowerStrips.pdf',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed for U.S. household use against Microsoft Xbox instructions, UL power-strip guidance, and CPSC and OSHA electrical-safety materials.',
};
