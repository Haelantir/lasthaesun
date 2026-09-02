import type { Pairing } from '../types';

/**
 * Tap Water in Humidifier.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const tapWaterInHumidifier: Pairing = {
  subjectSlug: 'tap-water',
  subjectName: 'Tap Water',
  subjectKind: 'Liquid',
  subjectNote: 'Municipal drinking water from the faucet',

  relation: 'in',

  targetSlug: 'humidifier',
  targetName: 'Humidifier',
  targetKind: 'Appliance',
  targetNote: 'Appliance that adds indoor moisture',

  eyebrow: 'Home · Humidifiers & Water',
  h1: 'Can I Use Tap Water in a Humidifier?',
  seoTitle: 'Tap Water in a Humidifier: Type Matters | Can I Use It With',
  metaDescription:
    'Yes, with limits: check the manual. Use distilled water in ultrasonic models; tap water is often allowed in evaporative and some warm-mist humidifiers.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the humidifier’s manual allows tap water. Use distilled or demineralized water for ultrasonic and impeller models, especially with hard water or visible white dust. Evaporative and warm-mist units generally release fewer minerals into the air, but tap water can still leave scale inside. If you cannot identify the type, use distilled water.',

  mainRisk: 'Mineral dust',
  damages: 'Humidifier internals',
  alternative: 'Distilled water',

  conditionsOk: [
    'Your owner’s manual permits clean tap water for that model.',
    'The unit is evaporative and its wick or filter is maintained as directed.',
    'A warm-mist or steam model specifically instructs you to fill it with tap water.',
    'An approved demineralization cartridge is installed and no white dust appears.',
  ],
  conditionsNever: [
    'Never override instructions requiring purified or distilled water.',
    'Never keep using hard tap water in an ultrasonic or impeller model that leaves white dust.',
    'Never treat spring, artesian, or mineral water as a low-mineral substitute.',
    'Never top off old tank water; empty and refill the tank as directed.',
    'Never let visible scale remain on the nebulizer, wick, or heating chamber.',
  ],

  mechanisms: [
    {
      title: 'Minerals enter the mist',
      body: 'Ultrasonic and impeller humidifiers break tank water into droplets. As the water evaporates, dissolved minerals remain as airborne particles and can settle as white dust.',
    },
    {
      title: 'Scale stays behind',
      body: 'Minerals collect on tanks, nebulizers, wicks, and heaters as water is used. Deposits can reduce output and create rough surfaces where microorganisms can grow.',
    },
    {
      title: 'Design changes exposure',
      body: 'Evaporative models pass water through a wick, while steam units boil it. These designs generally release far fewer minerals into room air, though the minerals can still collect inside the appliance.',
    },
  ],

  calloutLabel: 'Potable Still Has Minerals',
  calloutBody: [
    'Tap water can be safe to drink and still contain enough dissolved minerals to matter in a humidifier. Harder water leaves more material behind when droplets evaporate or water is heated.',
    'The humidifier’s design decides where those minerals go. Ultrasonic and impeller units can send them into the room; evaporative wicks and steam systems keep most of them in the appliance, where they show up as filter crust or scale.',
  ],

  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Use and Care of Home Humidifiers',
      url: 'https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers',
      kind: 'government',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Dirty Humidifiers May Cause Health Problems',
      url: 'https://www.cpsc.gov/s3fs-public/5046.pdf',
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
      title: 'Using Your Vicks Warm Mist Humidifier',
      url: 'https://www.vickshumidifiers.com/wp-content/uploads/v745_om_a008387r0_r2_26sep22_manual.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed tap-water guidance by humidifier type against current EPA and CPSC advice plus official Honeywell ultrasonic and Vicks warm-mist instructions.',
};
