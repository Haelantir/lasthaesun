import type { Pairing } from '../types';

/**
 * Air Conditioner plugged into Extension Cord.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const airConditionerPluggedIntoExtensionCord: Pairing = {
  subjectSlug: 'air-conditioner',
  subjectName: 'Air Conditioner',
  subjectKind: 'Appliance',
  subjectNote: 'Window or portable cooling appliance',

  relation: 'plugged-into',

  targetSlug: 'extension-cord',
  targetName: 'Extension Cord',
  targetKind: 'Accessory',
  targetNote: 'Portable cord that extends outlet reach',

  eyebrow: 'Home Cooling · Electrical Safety',
  h1: 'Can I Plug an Air Conditioner Into an Extension Cord?',
  seoTitle: 'Air Conditioner Extension Cord Safety | Can I Use It With',
  metaDescription:
    'No for most window and portable air conditioners. Plug directly into a grounded wall outlet unless the exact model manual expressly permits an extension cord.',

  verdict: 'no',
  shortAnswer:
    'No for most window and portable air conditioners. Plug the unit directly into a grounded wall outlet. Use an extension cord only if the exact model manual expressly permits one and gives the required cord rating; otherwise, do not use it.',

  mainRisk: 'Cord fire',
  damages: 'Cord and outlet',
  alternative: 'Grounded wall outlet',

  conditionsOk: [
    'The air conditioner’s exact model manual expressly permits an extension cord.',
    'The cord meets every grounding and electrical-rating requirement stated in that manual.',
    'The cord powers only the air conditioner and remains uncovered, visible, and undamaged.',
    'Every plug fits firmly, and no part of the cord or connection becomes hot.',
  ],
  conditionsNever: [
    'Never use an extension cord when the manual prohibits one or requires direct wall-outlet connection.',
    'Never use a light-duty, ungrounded, damaged, repaired, or altered cord.',
    'Never run the cord under carpeting, through a doorway, or beneath furniture.',
    'Never use a power strip, surge protector, or multi-outlet adapter instead.',
    'Never continue using the setup if a plug becomes loose, hot, discolored, or smells burned.',
  ],

  mechanisms: [
    {
      title: 'Cord Resistance Creates Heat',
      body: 'An extension cord adds more wire and another plug connection. Under the air conditioner’s sustained load, an undersized, damaged, or loose cord can overheat and start a fire.',
    },
    {
      title: 'Startup Can Drop Voltage',
      body: 'The compressor draws a brief high-current inrush when it starts. Resistance in a long or undersized cord can reduce voltage at the unit, making startup harder and adding electrical stress.',
    },
  ],

  calloutLabel: 'Why Cord Labels Mislead',
  calloutBody: [
    'A cord sold as heavy-duty or labeled for air conditioners can look like a safe fix. That label does not override the appliance manual, and many current window and portable air-conditioner manuals prohibit extension cords.',
    'Manuals differ; check yours. If it expressly permits a cord, follow its stated type, grounding, and electrical ratings. If it says no—or requires direct connection—use a wall outlet instead.',
  ],

  sources: [
    {
      publisher: 'LG Electronics USA',
      title: 'Window Air Conditioner Owner’s Manual',
      url: 'https://media.us.lg.com/m/1b5de66c1c9038b4/original/LW1222IVSM_LW1522IVSM_LW1522FVSM_Owners_Manual_AC.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Midea America',
      title: 'Duo Portable Air Conditioner User Manual',
      url: 'https://www.midea.com/content/dam/midea-aem/us/air-conditioners/portable-air-conditioners/map14s1tbl-a/manual/MAP14S1TBL-A-User-Guide.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Household Extension Cords Can Cause Fires',
      url: 'https://www.cpsc.gov/s3fs-public/5032.pdf',
      kind: 'government',
    },
    {
      publisher: 'Frigidaire',
      title: 'Room Air Conditioner - Dim Lights or Flickering Lights',
      url: 'https://owner.frigidaire.com/support-articles/article/1927756-room-air-conditioner-dim-lights-or-flickering-lights',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed for window and portable air conditioners using manufacturer manuals, support guidance, and CPSC extension-cord safety information.',
};
