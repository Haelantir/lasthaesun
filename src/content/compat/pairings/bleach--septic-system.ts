import type { Pairing } from '../types';

/**
 * Bleach with Septic System.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const bleachWithSepticSystem: Pairing = {
  subjectSlug: 'bleach',
  subjectName: 'Bleach',
  subjectKind: 'Chemical',
  subjectNote: 'Sodium hypochlorite household cleaner',

  relation: 'with',

  targetSlug: 'septic-system',
  targetName: 'Septic System',
  targetKind: 'System',
  targetNote: 'Onsite household wastewater treatment system',

  eyebrow: 'Home · Cleaning Chemicals',
  h1: 'Can I Use Bleach with a Septic System?',
  seoTitle: 'Bleach and Septic Systems: Safe Use Limits | Can I Use It With',
  metaDescription:
    'Yes, in normal household amounts used as labeled. Avoid concentrated disposal, repeated automatic dosing, and unnecessary septic additives.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, use bleach in normal household amounts and follow the product label. Laundry bleach and septic-labeled cleaning products are compatible, but do not pour concentrated or leftover bleach down a drain. Too much bleach can reduce the microorganisms that treat wastewater in the tank.',

  mainRisk: 'Treatment disruption',
  damages: 'Waste-treatment bacteria',
  alternative: 'Mild detergent when adequate',

  conditionsOk: [
    'Use household bleach in the measured amount and dilution stated on its label.',
    'Add laundry bleach through the washer’s bleach dispenser or as the washer and bleach labels direct.',
    'Use a bleach toilet-bowl cleaner only when its exact label says it is suitable for septic systems.',
    'Spread laundry loads through the week rather than sending several large loads into the system at once.',
  ],
  conditionsNever: [
    'Never pour unused or concentrated bleach into a sink, toilet, or septic tank.',
    'Never use more bleach or make a stronger solution than the label directs.',
    'Never mix bleach with ammonia, acids, other toilet-bowl cleaners, or household chemicals because toxic fumes can result.',
    'Never use an automatic every-flush disinfecting product without an explicit septic-safe statement on its label.',
    'Do not add bacteria or chemical septic treatments to correct routine bleach use; EPA does not recommend septic additives.',
  ],

  mechanisms: [
    {
      title: 'Bleach Reacts Before Arrival',
      body: 'During laundry and surface cleaning, sodium hypochlorite reacts with stains, soils, and other organic matter before the wastewater reaches the tank. Wash and rinse water dilute what remains.',
    },
    {
      title: 'High Doses Suppress Microbes',
      body: 'Bleach kills microorganisms. A concentrated dump or repeated disinfectant dosing can reduce the organisms that digest waste, lowering treatment inside the tank.',
    },
  ],

  calloutLabel: 'The dose distinction',
  calloutBody: [
    'A septic-safe claim covers the labeled dose and method for that exact product. It does not cover disposing of leftover bleach through the plumbing.',
    'Toilet products need a closer label check. A one-time bowl cleaning and an every-flush disinfectant create different exposure patterns, and Purdue Extension warns that repeated dosing can concern a system already under stress. Routine bleach use also does not create a need for a septic bacteria additive.',
  ],

  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'How to Care for Your Septic System',
      url: 'https://www.epa.gov/septic/how-care-your-septic-system',
      kind: 'government',
    },
    {
      publisher: 'Purdue Extension',
      title: 'Keep the ‘Dirty Dozen’ Out of Your Onsite Sewage System (Septic Tank)',
      url: 'https://www.extension.purdue.edu/extmedia/HENV/HENV-106-W.pdf',
      kind: 'academic',
    },
    {
      publisher: 'The Clorox Company',
      title: 'Clorox Disinfecting Bleach',
      url: 'https://www.clorox.com/products/clorox-disinfecting-bleach/regular/',
      kind: 'manufacturer',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Septic Tank Additives Fact Sheet',
      url: 'https://www.epa.gov/system/files/documents/2024-09/septictankadditivesfactsheet.pdf',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed normal household bleach, laundry use, toilet-cleaning products, concentrated disposal, and septic additives using EPA, Purdue Extension, and manufacturer guidance.',
};
