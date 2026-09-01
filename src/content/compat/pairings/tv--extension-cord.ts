import type { Pairing } from '../types';

/**
 * TV plugged into Extension Cord.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const tvPluggedIntoExtensionCord: Pairing = {
  subjectSlug: 'tv',
  subjectName: 'TV',
  subjectKind: 'Electronics',
  subjectNote: 'Television display and receiver',

  relation: 'plugged-into',

  targetSlug: 'extension-cord',
  targetName: 'Extension Cord',
  targetKind: 'Accessory',
  targetNote: 'Flexible cord that extends power',

  eyebrow: 'Electrical · Cords & Power',
  h1: 'Can I Plug a TV Into an Extension Cord?',
  seoTitle: 'TVs on Extension Cords: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use a listed cord rated for the TV, preserve any ground connection, keep it uncovered, and treat it as temporary. Check the manual first.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the TV manual does not prohibit it and the extension cord is listed, undamaged, and rated for at least the TV’s electrical load. Keep the cord uncovered, loose, and out of traffic, and use it only as a temporary power route. If the TV will stay there, use a nearby wall outlet or have one installed.',

  mainRisk: 'Fire',
  damages: 'Cord and outlet',
  alternative: 'Nearby wall outlet',

  conditionsOk: [
    'Check the exact TV manual and use an extension cord only when it does not prohibit one or require a direct wall connection.',
    'Choose a cord with an independent testing-laboratory mark and a voltage and current or wattage rating that meets or exceeds the TV’s power label.',
    'Match the TV’s plug configuration, including an intact ground connection when it has a three-prong plug, and insert both plugs fully.',
    'Route the cord where it remains dry, uncovered, unpinched, and out of foot traffic.',
  ],
  conditionsNever: [
    'Never use an extension cord when the TV manual forbids it or specifies direct connection to a wall outlet.',
    'Never use a cord that is cracked, frayed, hot, loosely connected, or missing a recognized certification mark.',
    'Never run the cord beneath a rug or furniture, through a doorway, or inside a wall, ceiling, or floor.',
    'Never remove a ground pin, defeat a polarized plug, or force the TV’s plug into an incompatible cord.',
    'Never exceed the cord’s rating by adding other equipment or use the cord as permanent household wiring.',
  ],

  mechanisms: [
    {
      title: 'Load heats the cord',
      body: 'Current flowing through the cord produces heat. If the connected load exceeds the cord’s rating, its conductors and plug connections can overheat.',
    },
    {
      title: 'Damage creates hot spots',
      body: 'Pinching or repeated foot traffic can break wire strands and damage insulation. The reduced conductor area can heat more, while exposed parts can shock or arc.',
    },
    {
      title: 'Grounding carries fault current',
      body: 'If the TV has a three-prong plug, the extension cord must continue that grounding path. Removing the ground pin or using an incompatible cord defeats that protection.',
    },
  ],

  calloutLabel: 'Reach Versus Surge Protection',
  calloutBody: [
    'A TV is generally a lighter electrical load than a heater or cooking appliance, so its load may fit comfortably within a common extension cord’s rating. Rating is only one check. The cord also needs a recognized certification mark, intact plugs and insulation, the correct grounding arrangement, and a safe route.',
    'An ordinary extension cord provides reach. Surge protection is a separate feature, and a basic power strip may not include it. If you want protection from voltage spikes, choose a product specifically marked and certified as a surge protector; its load rating still applies.',
  ],

  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Extension Cords Business Guidance',
      url: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Household-Electrical-Products/Extension-Cords',
      kind: 'government',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Home Electrical Safety Checklist',
      url: 'https://www.cpsc.gov/s3fs-public/513.pdf',
      kind: 'government',
    },
    {
      publisher: 'UL Solutions',
      title: 'Guide to Power Strips and Surge Protectors',
      url: 'https://www.ul.com/insights/guide-power-strips-and-surge-protectors',
      kind: 'standards_body',
    },
    {
      publisher: 'Samsung Electronics',
      title: 'Samsung TV User Manual BN68-16034C-00',
      url: 'https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/qled-4k-tvs/q80cd/04132023/BN68-16034C-00_UM_Y23-QLED-UHDQD_ZA_ENG_230118.0.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against CPSC extension-cord guidance, UL information on ratings and surge protection, and Samsung TV safety instructions; manuals may differ by model.',
};
