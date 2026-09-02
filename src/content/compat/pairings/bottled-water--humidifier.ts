import type { Pairing } from '../types';

/**
 * Bottled Water in Humidifier.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const bottledWaterInHumidifier: Pairing = {
  subjectSlug: 'bottled-water',
  subjectName: 'Bottled Water',
  subjectKind: 'Liquid',
  subjectNote: 'Packaged water for drinking',

  relation: 'in',

  targetSlug: 'humidifier',
  targetName: 'Humidifier',
  targetKind: 'Appliance',
  targetNote: 'Adds moisture to indoor air',

  eyebrow: 'Home · Humidifiers & Water',
  h1: 'Can I Use Bottled Water in a Humidifier?',
  seoTitle: 'Bottled Water in Humidifiers: Safe or Not? | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use bottled distilled water unless your manual says otherwise; spring, artesian, and mineral water can cause scale and white dust.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use bottled water labeled distilled when your humidifier calls for distilled or low-mineral water. Spring, artesian, or mineral water can still create scale and white dust, and some electrode vaporizers require mineral-containing water, so check your model’s manual.',

  mainRisk: 'Mineral dust',
  damages: 'Humidifier internals',
  alternative: 'Bottled distilled water',

  conditionsOk: [
    'Use bottled water labeled distilled when your manual calls for distilled or low-mineral water.',
    'Use purified bottled water when the manual permits it and the treatment statement identifies distillation, reverse osmosis, or deionization.',
    'If distilled water is unavailable, use a manufacturer-approved demineralization cartridge when your model supports one.',
    'For a vaporizer that requires minerals to make steam, use the water type named in its manual.',
  ],
  conditionsNever: [
    'Do not assume every bottle contains low-mineral water.',
    'Do not treat spring, artesian, or mineral water as a substitute when the manual specifies distilled water.',
    'Do not keep using water that produces white dust or heavy scale; switch to distilled water or an approved cartridge.',
    'Do not skip normal water changes and cleaning because the water came from a sealed bottle.',
    'Do not use distilled water in an electrode vaporizer whose manual requires mineral-containing water.',
  ],

  mechanisms: [
    {
      title: 'Distillation leaves minerals behind',
      body: 'Distillation turns water into vapor and condenses it again, leaving dissolved minerals behind. The resulting water gives the humidifier less mineral material to deposit or disperse.',
    },
    {
      title: 'Mist carries dissolved solids',
      body: 'Ultrasonic and impeller units launch fine water droplets from the tank into the room. When the water evaporates, dissolved minerals can remain as white dust.',
    },
    {
      title: 'Minerals form scale',
      body: 'Minerals can settle on the reservoir, nebulizer, or heating surfaces. This buildup may reduce output, and scale can support microorganism growth.',
    },
  ],

  calloutLabel: 'Bottled Is Not Distilled',
  calloutBody: [
    'The common mix-up is treating bottled as a purity grade. Bottled products can be spring, artesian, mineral, well-source, municipal-source, distilled, or purified water, with very different mineral content.',
    'Distilled is the clearest low-mineral label. Purified water may also be processed by distillation, reverse osmosis, or deionization, while spring, artesian, and mineral water have not been treated to remove mineral content. Match the label to the wording in your humidifier manual.',
  ],

  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Use and Care of Home Humidifiers',
      url: 'https://www.epa.gov/system/files/documents/2022-07/Use%20and%20Care%20of%20Home%20Humidifiers.pdf',
      kind: 'government',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Bottled Water Everywhere: Keeping It Safe',
      url: 'https://www.fda.gov/consumers/consumer-updates/bottled-water-everywhere-keeping-it-safe',
      kind: 'government',
    },
    {
      publisher: 'Honeywell Plugged In',
      title: 'Cool Mist Humidifiers',
      url: 'https://www.honeywellpluggedin.com/honeywell_support_coolmist/',
      kind: 'manufacturer',
    },
    {
      publisher: 'Vicks Humidifiers',
      title: 'Vaporizer and Warm Mist Humidifier FAQs',
      url: 'https://www.vickshumidifiers.com/vaporizer-faqs/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed EPA and FDA guidance plus Honeywell and Vicks instructions covering mineral dust, bottled-water labels, and vaporizer exceptions.',
};
