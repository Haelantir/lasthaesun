import type { Pairing } from '../types';

/**
 * Tire Sealant with TPMS Sensors.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const tireSealantWithTpmsSensors: Pairing = {
  subjectSlug: 'tire-sealant',
  subjectName: 'Tire Sealant',
  subjectKind: 'Sealant',
  subjectNote: 'Liquid temporary puncture repair',

  relation: 'with',

  targetSlug: 'tpms-sensors',
  targetName: 'TPMS Sensors',
  targetKind: 'Sensor',
  targetNote: 'In-wheel tire pressure monitoring devices',

  eyebrow: 'Cars · Tires & TPMS',
  h1: 'Can I Use Tire Sealant with TPMS Sensors?',
  seoTitle: 'Tire Sealant and TPMS Sensor Compatibility | Can I Use It With',
  metaDescription:
    'Yes, with limits: use sealant labeled TPMS-safe that does not conflict with the vehicle manual. Arrange tire and sensor service afterward.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use only a sealant labeled TPMS-safe for highway passenger tires, and follow any restrictions in the owner’s manual. Use the vehicle-supplied mobility kit when the manual calls for it. Treat emergency sealant as temporary, then tell the tire shop so the sensor can be inspected, cleaned, or replaced as required.',

  mainRisk: 'Wrong pressure readings',
  damages: 'The TPMS sensor',
  alternative: 'Vehicle-approved mobility kit',

  conditionsOk: [
    'The sealant is labeled TPMS-safe or tire-sensor-safe for highway passenger tires.',
    'The product is supplied with the vehicle, or its use does not conflict with the owner’s manual.',
    'You use emergency sealant for temporary mobility and arrange professional tire service.',
    'You tell the shop that sealant is inside so the sensor receives the required post-use service.',
  ],
  conditionsNever: [
    'Do not use sealant that lacks TPMS compatibility labeling or is marked unsafe for tire sensors.',
    'Do not put a tube, off-highway, or lawn-equipment formula in a highway passenger tire.',
    'Do not use an aftermarket sealant when the owner’s manual limits the vehicle to its supplied kit.',
    'Do not leave emergency sealant in place as a permanent puncture repair.',
    'Do not skip sensor inspection, cleaning, or replacement when the vehicle or sealant instructions require it.',
  ],

  mechanisms: [
    {
      title: 'Sealant reaches the sensor',
      body: 'Sealant enters through the valve and spreads inside the tire around a valve-mounted sensor. A compatible formula is intended to pass through this route without disabling the sensor, though residue may remain.',
    },
    {
      title: 'Pressure ports can clog',
      body: 'Fibers or residue from an incompatible formula can block the sensor’s pressure port. The sensor may then report the wrong pressure or produce an improper warning.',
    },
    {
      title: 'Chemicals can cause damage',
      body: 'Some sealant materials can degrade the protective material covering the sensor electronics. A damaged sensor may need replacement.',
    },
  ],

  calloutLabel: 'What TPMS-Safe Means',
  calloutBody: [
    'The TPMS-safe mark applies to that formula and the uses named on its label. It does not override the owner’s manual or make other formulas from the same brand compatible.',
    'Emergency cans and factory mobility-kit sealants are made for temporary puncture response. Preventive sealants may be intended to remain in non-highway tires, while tube formulas or other products in the same line may be marked as unsafe for TPMS sensors.',
  ],

  sources: [
    {
      publisher: 'General Motors LLC',
      title: 'TPM System Overview, Diagnosing TPM Concerns and Frequently Asked Questions',
      url: 'https://static.nhtsa.gov/odi/tsbs/2022/MC-10213760-9999.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Ford Motor Company',
      title: 'Tire Sealant and Inflator Kit Precautions',
      url: 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G2137087&Uid=G2137059&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G2126704&userMarket=usa&vFilteringEnabled=False&variantid=10824',
      kind: 'manufacturer',
    },
    {
      publisher: 'Slime Products',
      title: 'Is Slime Sealant Tire Sensor Safe?',
      url: 'https://slime.com/pages/is-slime-sealant-tire-sensor-safe',
      kind: 'manufacturer',
    },
    {
      publisher: 'Fix-a-Flat',
      title: 'Will Fix-a-Flat Damage My Tire Pressure Monitoring System?',
      url: 'https://www.fixaflat.com/pages/will-fix-a-flat-damage-my-tpms',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed current sealant-maker guidance, GM service information, and a 2026 Ford owner’s manual covering TPMS compatibility and post-use sensor service.',
};
