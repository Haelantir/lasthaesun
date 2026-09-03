import type { Pairing } from '../types';

/**
 * Drain Cleaner with Septic System.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const drainCleanerWithSepticSystem: Pairing = {
  subjectSlug: 'drain-cleaner',
  subjectName: 'Drain Cleaner',
  subjectKind: 'Product',
  subjectNote: 'Chemical or biological clog remover',

  relation: 'with',

  targetSlug: 'septic-system',
  targetName: 'Septic System',
  targetKind: 'System',
  targetNote: 'On-site household wastewater treatment',

  eyebrow: 'Plumbing · Drain Care',
  h1: 'Can I Use Drain Cleaner with a Septic System?',
  seoTitle: 'Drain Cleaner and Septic Systems: What Is Safe? | Can I Use It With',
  metaDescription:
    'Yes, with limits: use only an exact product labeled septic-safe. Avoid acid openers and routine caustic dosing; a drain snake is the safer first choice.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use only a product labeled for septic systems, and keep chemical treatment to the label-directed dose rather than making it routine. EPA guidance advises avoiding chemical drain openers, so use a drain snake first. Enzyme or bacteria cleaners act more slowly and are not needed to keep the tank’s bacteria alive.',

  mainRisk: 'Microbe disruption',
  damages: 'Tank and drainfield',
  alternative: 'Mechanical drain snake',

  conditionsOk: [
    'Clear reachable clogs with a drain snake before reaching for chemicals.',
    'If cleaner is still needed, confirm that the exact container says it is safe for septic systems and approved for that fixture.',
    'Use no more than the labeled dose, then flush only as the directions specify.',
    'Choose an enzyme or bacteria formula only when slow action on organic buildup is appropriate.',
  ],
  conditionsNever: [
    'Never use a sulfuric acid or hydrochloric acid opener in septic-connected plumbing.',
    'Never use a strong lye or caustic opener unless the exact label expressly permits septic use.',
    'Never mix drain cleaner with bleach, ammonia, another drain cleaner, or any cleaner left in the drain.',
    'Never exceed the label’s dose or repeat frequency because the first treatment did not work.',
    'Never use an enzyme or bacteria additive as a replacement for pumping, inspection, or repair.',
  ],

  mechanisms: [
    {
      title: 'Microbial shock',
      body: 'A septic tank depends on microbes to break down organic waste. Strong acids and alkalis can suppress that activity, and repeated treatments keep sending disruptive chemicals into the biological process.',
    },
    {
      title: 'Material damage',
      body: 'Highly acidic or caustic cleaners can attack some pipes, tanks, and other components. Formulas and plumbing materials differ, so one brand’s septic-safe claim does not cover another product.',
    },
    {
      title: 'Slow biological action',
      body: 'Enzymes and added bacteria act on organic residue over time. They do not provide an instant fix for a complete blockage, and a working septic tank already has its own microbial community.',
    },
  ],

  calloutLabel: 'The Septic-Safe Label',
  calloutBody: [
    '“Septic-safe” on a bottle is a product-specific manufacturer claim, not a category-wide guarantee. Approval for one formula under its label directions does not make acid or caustic drain openers generally compatible, and local rules may be stricter.',
    'Words such as “bio,” “enzyme,” or “natural” do not mean the septic tank needs the product. These formulas differ from corrosive openers and work more slowly, but EPA says normal septic systems already contain the organisms needed for treatment. The long-term effects of biological additives on soil treatment remain uncertain.',
  ],

  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Frequent Questions on Septic Systems',
      url: 'https://www.epa.gov/septic/frequent-questions-septic-systems',
      kind: 'government',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Septic Tank Additives Fact Sheet',
      url: 'https://www.epa.gov/system/files/documents/2024-09/septictankadditivesfactsheet.pdf',
      kind: 'government',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Cleaning and Disinfecting with Bleach',
      url: 'https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html',
      kind: 'government',
    },
    {
      publisher: 'S. C. Johnson & Son, Inc.',
      title: 'Drano Frequently Asked Questions',
      url: 'https://drano.com/en-us/faq',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed EPA septic guidance, CDC chemical-mixing guidance, and manufacturer instructions distinguishing chemical clog removers from microbial maintenance products.',
};
