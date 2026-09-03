import type { Pairing } from '../types';

/**
 * Regular Battery Charger with AGM Battery.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const regularBatteryChargerWithAgmBattery: Pairing = {
  subjectSlug: 'regular-battery-charger',
  subjectName: 'Regular Battery Charger',
  subjectKind: 'Charger',
  subjectNote: 'General-purpose lead-acid battery charger',

  relation: 'with',

  targetSlug: 'agm-battery',
  targetName: 'AGM Battery',
  targetKind: 'Battery',
  targetNote: 'Sealed valve-regulated lead-acid battery',

  eyebrow: 'Cars · Battery Charging',
  h1: 'Can I Use a Regular Battery Charger with an AGM Battery?',
  seoTitle: 'Regular Chargers With AGM Batteries | Can I Use It With',
  metaDescription:
    'Yes, with limits: use a charger that explicitly supports AGM batteries and matches the battery maker’s charging profile. Otherwise, use an AGM charger.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only if the charger is explicitly rated for AGM batteries and you select its AGM setting when available. If the manual does not list AGM compatibility, or you have an old unregulated shop charger or fixed-output trickle charger, do not use it. Match the battery voltage and follow the battery maker’s charging limits.',

  mainRisk: 'Battery overcharging',
  damages: 'The AGM battery',
  alternative: 'AGM-compatible smart charger',

  conditionsOk: [
    'Use the AGM setting and correct battery voltage when the charger provides them.',
    'A charger without an AGM button is acceptable only if its manual lists AGM or VRLA compatibility and its limits fit the battery manual.',
    'Keep the charge rate within the battery manufacturer’s recommendation.',
    'For storage, use an AGM-compatible automatic maintainer that switches to float after the battery is full.',
  ],
  conditionsNever: [
    'Do not use a charger with an unknown output profile because its nominal voltage happens to match.',
    'Do not use an unregulated constant-current shop charger on an AGM battery.',
    'Do not select equalize, repair, or recondition mode unless the AGM battery manufacturer specifically authorizes it.',
    'Do not leave a basic fixed-output trickle charger connected for long-term maintenance.',
    'Do not assume a maintenance-only device can recharge a discharged battery unless its manual rates it for that job and battery size.',
  ],

  mechanisms: [
    {
      title: 'The finish voltage matters',
      body: 'An AGM battery needs a voltage-limited profile that tapers current as it approaches full charge. Allowed absorption and float settings vary by battery, so follow the battery manual.',
    },
    {
      title: 'Excess charge opens valves',
      body: 'AGM batteries normally recombine charging gases inside the case. Excess charge can build pressure and open the relief valves; escaped water cannot be replaced, and the battery can dry out.',
    },
    {
      title: 'Float follows full charge',
      body: 'A smart charger changes to a lower maintenance stage after the battery is full. A basic trickle charger keeps supplying current, while a maintainer’s ability to perform a full recharge depends on its manual and output rating.',
    },
  ],

  calloutLabel: 'Same Voltage, Different Profile',
  calloutBody: [
    'AGM batteries are lead-acid batteries, so a standard charger may connect normally and show the correct nominal voltage. That does not prove its charging stages or upper voltage limit are suitable.',
    'Check the charger label and manual. A separate AGM mode is the clearest sign, but some automatic chargers support AGM batteries without a dedicated button. Treat an older charger with no AGM or VRLA approval as incompatible.',
  ],

  sources: [
    {
      publisher: 'East Penn Manufacturing',
      title: 'East Penn AGM Batteries in Heavy-Duty Truck Applications',
      url: 'https://www.eastpennmanufacturing.com/wp-content/uploads/EPM-Heavy-Duty-AGM-Guide-Technical-Update-1401.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Discover Battery',
      title: 'Charging AGM and GEL Batteries',
      url: 'https://discoverbattery.com/support/learning-center/battery-101/charging-agm-and-gel-batteries',
      kind: 'manufacturer',
    },
    {
      publisher: 'NOCO',
      title: 'GENIUS4 Support',
      url: 'https://no.co/support/genius4',
      kind: 'manufacturer',
    },
    {
      publisher: 'Battery Tender',
      title: 'FAQs and Support',
      url: 'https://www.batterytender.com/pages/faqs',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed manufacturer guidance on AGM voltage regulation, charger modes, gas venting, full-charge stages, float maintenance, and fixed-output trickle charging.',
};
