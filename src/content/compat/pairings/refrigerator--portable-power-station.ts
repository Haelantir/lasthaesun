import type { Pairing } from '../types';

/**
 * Refrigerator plugged into Portable Power Station.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const refrigeratorPluggedIntoPortablePowerStation: Pairing = {
  subjectSlug: 'refrigerator',
  subjectName: 'Refrigerator',
  subjectKind: 'Appliance',
  subjectNote: 'Household appliance that keeps food cold',

  relation: 'plugged-into',

  targetSlug: 'portable-power-station',
  targetName: 'Portable Power Station',
  targetKind: 'Equipment',
  targetNote: 'Battery-powered source of AC electricity',

  eyebrow: 'Appliances · Backup Power',
  h1: 'Can I Plug a Refrigerator Into a Portable Power Station?',
  seoTitle: 'Refrigerator on a Portable Power Station | Can I Use It With',
  metaDescription:
    'Yes, with limits: the station must match the refrigerator’s AC requirements, continuous draw, startup surge, and required runtime.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the station supplies the AC voltage and frequency your refrigerator requires, its continuous output covers the total running load, and its surge rating covers compressor startup. Plug the refrigerator directly into the station and follow both manuals’ grounding and inverter restrictions. Make sure the battery has enough usable capacity for the needed runtime; if the station trips or the compressor repeatedly fails to start, disconnect it and use a larger unit.',

  mainRisk: 'Cooling stops',
  damages: 'Food and refrigerator',
  alternative: 'Higher-output power station',

  conditionsOk: [
    'The station’s AC voltage and frequency match the refrigerator nameplate, and the refrigerator manual does not rule out that type of inverter supply.',
    'The station’s continuous AC rating covers the refrigerator and every other load that may operate at the same time.',
    'The station’s surge rating covers the compressor’s documented startup demand; if that figure is unavailable, confirm compatibility with either manufacturer.',
    'The available watt-hour capacity covers the needed runtime, with the station display monitored during actual refrigerator cycling.',
  ],
  conditionsNever: [
    'Never connect the refrigerator when the station’s AC voltage or frequency does not match its requirements.',
    'Never exceed the station’s continuous or surge rating by adding other appliances.',
    'Never assume a large battery capacity means the inverter can start the compressor.',
    'Never use an extension cord, power strip, or adapter when the refrigerator manual prohibits it, and never remove the grounding pin.',
    'Never keep retrying after an overload shutdown or repeated failed compressor starts.',
  ],

  mechanisms: [
    {
      title: 'Compressor Startup Surge',
      body: 'The compressor motor can draw more power while starting than it uses after reaching normal speed. If that brief demand exceeds the station’s surge limit, the inverter may shut off before cooling begins.',
    },
    {
      title: 'Continuous Output Limit',
      body: 'After startup, the compressor cycles on and off. The station must carry the refrigerator and any overlapping loads without exceeding its continuous AC rating.',
    },
    {
      title: 'Stored Battery Energy',
      body: 'Watt-hours determine how long the station can supply power after the refrigerator starts successfully. When the usable charge is depleted, AC output stops even though the inverter was powerful enough to run the appliance.',
    },
  ],

  calloutLabel: 'Battery Size Confusion',
  calloutBody: [
    'A large watt-hour number can make a power station look ready for any appliance. That number describes stored energy. The inverter can still be too small to start a refrigerator compressor.',
    'Once the compressor starts, runtime becomes a separate question. Plan with model-specific energy information and watch the station during real operation, since refrigerator cycling and any shared load affect the remaining time.',
  ],

  sources: [
    {
      publisher: 'EcoFlow',
      title: 'Can a Portable Power Station Power a Refrigerator?',
      url: 'https://www.ecoflow.com/us/blog/portable-power-stations-for-refrigerators',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung',
      title: 'Connect your Samsung fridge to a generator',
      url: 'https://www.samsung.com/us/support/answer/ANS10006915/',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'No Operation - Will Not Turn On',
      url: 'https://producthelp.whirlpool.com/Refrigeration/Full-Size_Refrigerators/All_Refrigerator/Operation/Temperature_Concerns/No_Operation_-_Will_Not_Turn_On',
      kind: 'manufacturer',
    },
    {
      publisher: 'Federal Trade Commission',
      title: 'How To Use the EnergyGuide Label To Shop for Home Appliances',
      url: 'https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed against refrigerator power requirements, generator guidance, portable power-station sizing guidance, and federal EnergyGuide information.',
};
