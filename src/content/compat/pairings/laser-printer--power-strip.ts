import type { Pairing } from '../types';

/**
 * Laser Printer plugged into Power Strip.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const laserPrinterPluggedIntoPowerStrip: Pairing = {
  subjectSlug: 'laser-printer',
  subjectName: 'Laser Printer',
  subjectKind: 'Printer',
  subjectNote: 'Toner printer with heated fuser',

  relation: 'plugged-into',

  targetSlug: 'power-strip',
  targetName: 'Power Strip',
  targetKind: 'Accessory',
  targetNote: 'Multi-outlet electrical power device',

  eyebrow: 'Office · Power & Electrical',
  h1: 'Can I Plug a Laser Printer into a Power Strip?',
  seoTitle: 'Laser Printer Power Strip Safety | Can I Use It With',
  metaDescription:
    'Avoid it unless the printer manual explicitly allows a properly rated, unshared strip. Laser printers draw much more power when waking or printing.',

  verdict: 'risky',
  shortAnswer:
    'Avoid it unless your laser printer’s manual explicitly allows a power strip and the strip is rated for the full connected load. Many manufacturers call for a direct, grounded wall outlet. A laser printer’s power demand can jump when it wakes or starts printing.',

  mainRisk: 'Overheating or fire',
  damages: 'Strip and printer',
  alternative: 'Grounded wall outlet',

  conditionsOk: [
    'The printer’s manual explicitly allows a power strip for that model.',
    'The strip’s rating covers the printer’s maximum input plus every other connected device.',
    'Use a grounded strip with an independent testing-lab mark, plugged directly into the wall and not shared with other high-draw equipment.',
  ],
  conditionsNever: [
    'Never use a power strip when the printer manual requires a direct wall connection.',
    'Never judge the required capacity from the printer’s idle or sleep-mode consumption.',
    'Never exceed the strip’s load rating with the printer and other connected equipment.',
    'Never use a power strip with a cracked or worn cord, plug, or housing.',
    'Never defeat the printer’s grounding pin or connect it through an ungrounded adapter.',
  ],

  mechanisms: [
    {
      title: 'Warm-up load spike',
      body: 'A laser printer heats its fuser as it wakes and prepares to print. Its instantaneous power draw can be much higher than its idle or average consumption.',
    },
    {
      title: 'Shared-load voltage drop',
      body: 'A power strip adds cord and plug contacts between the printer and wall. If the strip is undersized or heavily shared, the printer can reset, power off, or fail to warm up.',
    },
    {
      title: 'Strip overheating',
      body: 'Damaged or overloaded strip wiring produces heat as current passes through it. Continued overheating can damage the strip and create a fire risk.',
    },
  ],

  calloutLabel: 'Surge Protector Assumption',
  calloutBody: [
    'A surge-protected strip sounds safer than a wall outlet, so it is easy to assume it is an upgrade for the printer. Surge protection addresses voltage spikes. It does not raise the strip’s current rating or ensure that it can handle the printer’s changing demand.',
    'Laser-printer manuals do not all give the same instruction. Some allow a properly rated strip that is not shared with other equipment, while others specifically require a direct wall outlet and exclude power strips or surge protectors. Follow the manual for your model.',
  ],

  sources: [
    {
      publisher: 'Xerox',
      title: 'Xerox C240, C2432, C300 Color Printers User’s Guide',
      url: 'https://download.support.xerox.com/pub/docs/C240/userdocs/any-os/en_GB/Users_Guide_XeroxC240_XeroxC2432_XeroxC300_en.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Xerox',
      title: 'Xerox WorkCentre 6515 Multifunction Printer User Guide',
      url: 'https://download.support.xerox.com/pub/docs/WC6515/userdocs/any-os/en_GB/WorkCentre_6515_mfp_ug_en-us.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'UL Solutions',
      title: 'Power Strips Testing and Certification',
      url: 'https://www.ul.com/services/power-strips-testing-and-certification',
      kind: 'standards_body',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Power Up With Safety: Extension Cords & Power Strips',
      url: 'https://www.cpsc.gov/s3fs-public/ExtensionCordsPowerStrips.pdf',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current and model-specific Xerox laser-printer manuals, UL power-strip guidance, and CPSC overload and cord-safety guidance.',
};
