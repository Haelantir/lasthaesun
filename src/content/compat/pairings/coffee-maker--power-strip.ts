import type { Pairing } from '../types';

/**
 * Coffee Maker plugged into Power Strip.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const coffeeMakerPluggedIntoPowerStrip: Pairing = {
  subjectSlug: 'coffee-maker',
  subjectName: 'Coffee Maker',
  subjectKind: 'Appliance',
  subjectNote: 'Countertop appliance that brews coffee',

  relation: 'plugged-into',

  targetSlug: 'power-strip',
  targetName: 'Power Strip',
  targetKind: 'Device',
  targetNote: 'Multi-outlet electrical power device',

  eyebrow: 'Appliances · Electrical Safety',
  h1: 'Can I Plug a Coffee Maker into a Power Strip?',
  seoTitle: 'Coffee Maker Power Strip Safety | Can I Use It With',
  metaDescription:
    'Avoid plugging a coffee maker into a power strip. Use a wall outlet, or verify the manual and strip rating and connect no other heating appliance.',

  verdict: 'risky',
  shortAnswer:
    'Avoid it; plug the coffee maker directly into a wall outlet when possible. If temporary strip use is unavoidable, the coffee maker’s manual must not prohibit it, and the strip must be safety-certified and rated for the full connected load. Connect no other heating appliance to that strip. If you cannot verify those conditions, do not use it.',

  mainRisk: 'Strip overheating',
  damages: 'Strip and outlet',
  alternative: 'Direct wall outlet',

  conditionsOk: [
    'Use a wall outlet that holds the coffee maker’s plug firmly.',
    'For temporary strip use, confirm the coffee maker instructions do not require a direct wall connection.',
    'Use a safety-certified strip whose marked electrical rating covers the coffee maker and every other connected device.',
    'Keep the coffee maker as the strip’s only heat-producing appliance, with the strip plugged directly into the wall.',
  ],
  conditionsNever: [
    'Do not use a power strip when the coffee maker manual says wall outlet only or forbids extension devices.',
    'Never plug the strip into another power strip, an extension cord, or a multi-plug adapter.',
    'Do not run another heating appliance, such as a toaster or kettle, from the same strip.',
    'Do not exceed the strip’s marked watt or amp rating even when sockets remain empty.',
    'Stop using a strip or outlet that becomes warm, fits loosely, buzzes, looks discolored, or has visible damage.',
  ],

  mechanisms: [
    {
      title: 'Heating load',
      body: 'Coffee makers heat water, and many models also power a warming plate. Heating elements draw more current than low-power electronics, so the strip’s cord and internal contacts carry a substantial load while the heater is on.',
    },
    {
      title: 'Shared strip capacity',
      body: 'Every socket on a power strip feeds through one cord and one marked rating. Current from all connected devices adds together; extra sockets do not increase available capacity. An overload can trip protection or overheat the strip.',
    },
  ],

  calloutLabel: 'More outlets, same capacity',
  calloutBody: [
    'A strip with several empty sockets can look as though it has plenty of room. Socket count does not show how much electrical load the strip can carry; the marked watt or amp rating does.',
    'A surge-protection label can create the same false confidence. Surge protection handles voltage spikes, while the coffee maker’s heating load still passes through the strip. An extension-cord allowance in one model’s manual does not automatically approve a multi-outlet strip, and some fire-inspection rules require coffee makers to use wall outlets.',
  ],

  sources: [
    {
      publisher: 'Honolulu Fire Department',
      title: 'Inspections',
      url: 'https://fire.honolulu.gov/fire-code/inspections/',
      kind: 'government',
    },
    {
      publisher: 'UL Solutions',
      title: 'Guide to Power Strips and Surge Protectors',
      url: 'https://www.ul.com/insights/guide-power-strips-and-surge-protectors',
      kind: 'standards_body',
    },
    {
      publisher: 'Electrical Safety Foundation International',
      title: 'Don’t Overload Your Home',
      url: 'https://www.esfi.org/dont-overload-your-home/',
      kind: 'industry',
    },
    {
      publisher: 'Keurig',
      title: 'K-Duo Essentials Gen 2 Quick Start Guide',
      url: 'https://dam.keurig.com/content/dam/public-assets/kcom_support/K-Duo%20Essentials%20Gen%202%20Quick%20Start%20Guide.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed manufacturer instructions and U.S. safety guidance covering coffee-maker cords, heating loads, power-strip ratings, and direct-wall requirements.',
};
