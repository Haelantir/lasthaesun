import type { Pairing } from '../types';

/**
 * Essential Oils in Humidifier.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const essentialOilsInHumidifier: Pairing = {
  subjectSlug: 'essential-oils',
  subjectName: 'Essential Oils',
  subjectKind: 'Liquid',
  subjectNote: 'Concentrated aromatic plant extracts',

  relation: 'in',

  targetSlug: 'humidifier',
  targetName: 'Humidifier',
  targetKind: 'Appliance',
  targetNote: 'Device that adds indoor humidity',

  eyebrow: 'Home · Humidifiers & Fragrance',
  h1: 'Can I Use Essential Oils in a Humidifier?',
  seoTitle: 'Essential Oils in Humidifiers: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Yes, but only through the method approved for your model. Use an oil-safe tank when the manual allows it; otherwise use its aroma tray or a separate diffuser.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Put essential oil in the water tank only when the manual for that exact humidifier says the tank is oil-compatible. If the unit has an aroma tray, pad, or cup, use that part and keep oil out of the tank; if the manual is silent, use a separate diffuser. Oil in an unapproved tank can damage the humidifier and may void its warranty.',

  mainRisk: 'Internal damage',
  damages: 'Tank and internals',
  alternative: 'A separate oil diffuser',

  conditionsOk: [
    'The exact model manual allows essential oil in the water tank, and you use only the oil type it specifies.',
    'The model provides an aroma tray, pad, or cup, and the oil stays in that approved part.',
    'A separate essential-oil diffuser is operated beside the humidifier according to both products’ instructions.',
    'The approved oil area is cleaned and any pad is replaced as the humidifier manual directs.',
  ],
  conditionsNever: [
    'Never add oil to the tank or reservoir when the manual is silent or prohibits additives.',
    'Never treat an aroma tray feature as permission to add oil to the water.',
    'Never pour oil into a mist outlet or another opening that the manual does not identify for oil.',
    'Never put oil directly in a tray when the instructions require an aroma pad.',
    'Never substitute carrier oil, fragrance oil, or liquid inhalant unless the exact model allows that product type.',
  ],

  mechanisms: [
    {
      title: 'Oil contacts internal materials',
      body: 'Oil placed in the tank reaches the reservoir and other wet-side parts. Oil-compatible models identify protected materials in that path; other models warn that even a few drops can damage the unit.',
    },
    {
      title: 'Tray keeps oil separate',
      body: 'An aroma tray or pad holds oil outside the water circuit. The humidifier releases scent from that part while the tank, reservoir, and mist-making parts handle water.',
    },
    {
      title: 'Tank material can disperse',
      body: 'Ultrasonic and impeller humidifiers can disperse material carried in tank water into indoor air. Oil-compatible tank models use that path for fragrance, while tray models keep oil on a separate route.',
    },
  ],

  calloutLabel: 'The Compatibility Label',
  calloutBody: [
    '“Essential-oil compatible” may mean the humidifier has an aroma pad or tray. It does not automatically mean oil belongs in the water, so the exact model manual must name the approved location.',
    'A plastic tank alone does not prove oil compatibility. Some tank-diffuser models identify oil-proof tank and reservoir materials, while other models warn that even a few drops in those areas can damage the unit or void its warranty.',
  ],

  sources: [
    {
      publisher: 'Honeywell',
      title: 'Cool Mist Mini Humidifier, HUL525',
      url: 'https://www.honeywellpluggedin.com/products/humidifiers/cool-mist-mini-humidifier/',
      kind: 'manufacturer',
    },
    {
      publisher: 'HoMedics',
      title: 'TotalComfort Warm & Cool Mist Ultrasonic Humidifier Instruction Manual',
      url: 'https://www.homedics.com/content/pdf/instructionbooks/1320355-B_IB.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Vicks',
      title: 'NaturalCare Cool Mist Humidifier',
      url: 'https://www.vickshumidifiers.com/products/humidifiers/naturalcare-cool-mist-humidifer/',
      kind: 'manufacturer',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Use and Care of Home Humidifiers',
      url: 'https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed current EPA guidance and official Honeywell, HoMedics, and Vicks instructions covering tank use, aroma trays, oil-resistant materials, damage, and warranty limits.',
};
