import type { Pairing } from '../types';

/**
 * Humidifier with Air Purifier.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const humidifierWithAirPurifier: Pairing = {
  subjectSlug: 'humidifier',
  subjectName: 'Humidifier',
  subjectKind: 'Appliance',
  subjectNote: 'Adds moisture to indoor air',

  relation: 'with',

  targetSlug: 'air-purifier',
  targetName: 'Air Purifier',
  targetKind: 'Appliance',
  targetNote: 'Filters particles; some filter gases',

  eyebrow: 'Home Air · Humidifiers & Purifiers',
  h1: 'Can I Use a Humidifier With an Air Purifier?',
  seoTitle: 'Humidifier and Air Purifier Compatibility | Can I Use It With',
  metaDescription:
    'Yes, both can run in the same room. Keep mist away from the purifier, limit humidity, and use low-mineral water in ultrasonic humidifiers.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with spacing and humidity limits. Run both in the same room, but keep the humidifier out of the purifier’s intake path and never aim mist at it. Keep indoor relative humidity at or below 50%. With ultrasonic or impeller models, use distilled or other low-mineral water and maintain the tank as directed.',

  mainRisk: 'Moisture damage',
  damages: 'Purifier and filter',
  alternative: 'Evaporative humidifier',

  conditionsOk: [
    'Set the units apart so the humidifier output disperses before reaching the purifier intake.',
    'Keep both units’ air openings clear and follow each model’s placement instructions.',
    'Use a hygrometer and reduce humidifier output before relative humidity exceeds 50%.',
    'Use distilled or low-mineral water in ultrasonic and impeller humidifiers to reduce airborne mineral dust.',
  ],
  conditionsNever: [
    'Do not place the humidifier directly beside the purifier or aim visible mist at its intake or controls.',
    'Do not let the purifier, filter, cord, outlet, or nearby power strip become damp.',
    'Do not keep humidifying when condensation forms on windows, walls, furniture, or the purifier.',
    'Do not rely on the air purifier to make a dirty or poorly maintained humidifier safe.',
    'Do not exceed the purifier’s rated humidity range or ignore model-specific placement restrictions.',
  ],

  mechanisms: [
    {
      title: 'Mist Enters the Intake',
      body: 'An air purifier pulls room air through its intake. Inside a concentrated mist plume, it can draw droplets and residue onto the filter and internal surfaces before the mist disperses.',
    },
    {
      title: 'Minerals Become Filter Load',
      body: 'Ultrasonic and impeller humidifiers can release minerals and microorganisms from their tanks into the air. Particle filters may capture some of this material, leaving the purifier to filter pollution produced by the humidifier.',
    },
    {
      title: 'Humidity Affects Carbon',
      body: 'HEPA and other particle filters target airborne particles, while activated carbon targets gases. At high relative humidity, water vapor can compete for carbon’s adsorption sites and reduce its gas-removal performance.',
    },
  ],

  calloutLabel: 'Two Jobs, One Room',
  calloutBody: [
    'An air purifier does not cancel a humidifier. The purifier moves air through filters while the humidifier raises moisture, so both can operate at the same time when they are positioned correctly.',
    'Tank cleanliness still matters. Minerals and microorganisms released by a humidifier start in the water, and filtration may remove only part of what enters the room.',
  ],

  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Use and Care of Home Humidifiers',
      url: 'https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers',
      kind: 'government',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Guide to Air Cleaners in the Home',
      url: 'https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home',
      kind: 'government',
    },
    {
      publisher: 'Blueair',
      title: 'Can the Air Purifier Be Used in the Same Room as a Humidifier?',
      url: 'https://www.blueair.com/blogs/air-care-basics/can-the-air-purifier-be-used-in-the-same-room-as-a-humidifier',
      kind: 'manufacturer',
    },
    {
      publisher: 'ASHRAE',
      title: 'Chapter 47. Air Cleaners for Gaseous Contaminants',
      url: 'https://handbook.ashrae.org/Handbooks/A23/SI/A23_Ch47/a23_ch47_si.aspx',
      kind: 'standards_body',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed same-room compatibility, placement, humidity, humidifier emissions, particle filtration, and carbon performance using EPA, ASHRAE, and manufacturer guidance.',
};
