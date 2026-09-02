import type { Pairing } from '../types';

/**
 * Regular Detergent in HE Washing Machine.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const regularDetergentInHeWashingMachine: Pairing = {
  subjectSlug: 'regular-detergent',
  subjectName: 'Regular Detergent',
  subjectKind: 'Cleaner',
  subjectNote: 'Standard detergent without the HE mark',

  relation: 'in',

  targetSlug: 'he-washing-machine',
  targetName: 'HE Washing Machine',
  targetKind: 'Appliance',
  targetNote: 'Low-water high-efficiency clothes washer',

  eyebrow: 'Laundry · Detergents',
  h1: 'Can I Use Regular Detergent in an HE Washing Machine?',
  seoTitle: 'Regular Detergent in an HE Washer: Safe or Not? | Can I Use It With',
  metaDescription:
    'No. Use only detergent marked HE in an HE washing machine. Regular detergent can oversuds, rinse poorly, leave residue, and contribute to washer problems.',

  verdict: 'no',
  shortAnswer:
    'No. Use only detergent marked HE or High Efficiency in an HE washing machine. If you already used regular detergent once, do not add more; follow the washer’s suds-clearing directions, which may call for letting the cycle finish, running Rinse/Spin, or running an empty cycle. Repeated use can leave residue and contribute to leaks or component problems.',

  mainRisk: 'Excessive suds',
  damages: 'Washer components',
  alternative: 'HE-labeled detergent',

  conditionsOk: [
    'Use a detergent sold for both conventional and HE washers only when its package carries the HE mark.',
    'Measure HE detergent according to its label and the washer manual without exceeding the dispenser’s MAX line.',
    'If one wrong load produces a Sud or Sd message, let the washer’s suds-removal routine finish and use Rinse/Spin without detergent if the manual directs.',
    'If regular detergent has been used repeatedly, switch to HE detergent and follow the model’s cleaning or empty-cycle procedure to clear residue.',
  ],
  conditionsNever: [
    'Never use detergent without an HE mark as your normal detergent, even at a reduced dose.',
    'Never add more detergent because the load shows little or no foam.',
    'Never add detergent to a Rinse/Spin or empty cleanup cycle used to clear suds.',
    'Never keep using regular detergent after poor rinsing, unusually wet loads, suds errors, or leaks appear.',
    'Never run the next laundry load while an empty cycle still produces suds.',
  ],

  mechanisms: [
    {
      title: 'Low-water oversudsing',
      body: 'HE washers use less water than conventional machines. Non-HE detergent can create more suds than the washer can rinse away.',
    },
    {
      title: 'Suds change the cycle',
      body: 'The washer may add rinses, extend the cycle, or reduce spin speed while trying to clear foam. Clothes can finish wet or poorly rinsed.',
    },
    {
      title: 'Residue accumulates',
      body: 'Detergent and soil can remain in the tub and on laundry. Continued use can contribute to leaks, odor, and component problems over time.',
    },
  ],

  calloutLabel: 'The HE Label',
  calloutBody: [
    'HE means High Efficiency and identifies detergent formulated to be low-sudsing and quick-dispersing for low-water washers. A detergent sold for both conventional and HE machines can be suitable when the package carries the HE mark.',
    'Many people expect more foam to mean more cleaning. In an HE washer, little or no visible foam is normal. Heavy suds can make the machine spend more time rinsing and still leave detergent behind.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'Front Load Washer Owner’s Manual',
      url: 'https://www.whirlpool.com/content/dam/global/documents/202412/owners-manual-w11735098-reva.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'Excessive Suds in a Front Load Washer',
      url: 'https://producthelp.whirlpool.com/Laundry/Washers/Product_Info/Washer_Tips_and_Tricks/Excessive_Suds_in_a_Front_Load_Washer',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung',
      title: 'Samsung Washing Machine Is Leaking',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10001007/',
      kind: 'manufacturer',
    },
    {
      publisher: 'LG USA',
      title: 'Not Enough Suds in Washing Machine',
      url: 'https://www.lg.com/us/support/help-library/not-enough-suds-in-washing-machine--1337639883655',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against Whirlpool, Samsung, and LG guidance on non-HE detergent, low-water washing, oversudsing, rinsing, residue, and cleanup.',
};
