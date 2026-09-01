import type { Pairing } from '../types';

/**
 * Refrigerator plugged into Extension Cord.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const refrigeratorPluggedIntoExtensionCord: Pairing = {
  subjectSlug: 'refrigerator',
  subjectName: 'Refrigerator',
  subjectKind: 'Appliance',
  subjectNote: 'Household appliance that keeps food cold',

  relation: 'plugged-into',

  targetSlug: 'extension-cord',
  targetName: 'Extension Cord',
  targetKind: 'Accessory',
  targetNote: 'Portable cord that extends outlet reach',

  eyebrow: 'Appliances · Electrical Connections',
  h1: 'Can I Plug a Refrigerator Into an Extension Cord?',
  seoTitle: 'Refrigerator Extension Cord Safety | Can I Use It With',
  metaDescription:
    'Usually no. Plug a refrigerator directly into a grounded wall outlet; use an extension cord only if the refrigerator manual expressly allows it.',

  verdict: 'risky',
  shortAnswer:
    'Usually, no. Plug the refrigerator directly into a grounded wall outlet on the circuit specified in its manual. If the manual expressly allows temporary extension-cord use, follow its exact requirements for the cord’s listing, grounding type, and electrical rating.',

  mainRisk: 'Fire or shock',
  damages: 'Cord and compressor',
  alternative: 'Grounded wall receptacle',

  conditionsOk: [
    'The refrigerator is plugged directly into a grounded wall receptacle that meets its manual and nameplate requirements.',
    'For temporary use, the refrigerator’s manual expressly permits an extension cord.',
    'The cord matches every specification in the manual, including its listing, grounding type, and current and voltage ratings.',
    'The refrigerator is the cord’s only load, and the cord remains visible, undamaged, and clear of pinch points.',
  ],
  conditionsNever: [
    'Never use an extension cord when the refrigerator’s manual prohibits one.',
    'Never use a cord whose marked current or voltage rating is below the refrigerator’s requirement.',
    'Never use a two-wire cord, grounding adapter, or plug with the ground prong removed.',
    'Never connect the refrigerator through chained cords, a power strip, or a multi-outlet adapter.',
    'Never keep using a cord, plug, or receptacle that becomes hot, loose, discolored, damaged, or smells burned.',
  ],

  mechanisms: [
    {
      title: 'Startup current and voltage',
      body: 'The compressor motor draws a brief surge when it starts. Resistance in a long or undersized cord can lower the voltage during that surge, making startup harder and activating the compressor’s overload protection.',
    },
    {
      title: 'Cord heating',
      body: 'An undersized cord or loose connection has more resistance than intended. Current turns that resistance into heat, which can damage insulation and create a fire or shock hazard.',
    },
    {
      title: 'Ground-fault path',
      body: 'The third conductor provides an equipment-grounding path if a fault energizes the refrigerator’s case. A two-wire cord, adapter, or removed ground prong leaves that protection unavailable.',
    },
  ],

  calloutLabel: 'Temporary Becomes Permanent',
  calloutBody: [
    'Moving day or an inconvenient outlet can make any heavy-looking extension cord seem suitable. Refrigerator manuals differ: some prohibit extension cords, while others describe strict requirements for using one despite recommending against it.',
    'For ongoing use, install or use a properly grounded receptacle where the refrigerator can plug in directly. If your model permits a temporary cord, its electrical rating and intact grounding path matter when the compressor starts. Do not turn that stopgap into permanent wiring.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'No Operation - Will Not Turn On',
      url: 'https://producthelp.whirlpool.com/Refrigeration/Full-Size_Refrigerators/All_Refrigerator/Operation/Temperature_Concerns/No_Operation_-_Will_Not_Turn_On',
      kind: 'manufacturer',
    },
    {
      publisher: 'GE Appliances',
      title: 'Refrigerator & Freezer - Extension Cord or Adapter',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=18752',
      kind: 'manufacturer',
    },
    {
      publisher: 'Electrical Safety Foundation International',
      title: 'You Can Make Your Home Safer',
      url: 'https://www.esfi.org/wp-content/uploads/2021/08/ESFI-Safer-Home-Brochure-FINAL-Digital-updated-with-tag.pdf',
      kind: 'industry',
    },
    {
      publisher: 'Embraco',
      title: 'Choose Embraco Original Parts for Replacing',
      url: 'https://www.embraco.com/en/blog/trends/choose-embraco-original-parts-for-replacing.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against Whirlpool and GE refrigerator guidance, ESFI home electrical-safety advice, and Embraco compressor-start information.',
};
