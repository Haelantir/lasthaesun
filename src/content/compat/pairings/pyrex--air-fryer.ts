import type { Pairing } from '../types';

/**
 * Pyrex in Air Fryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const pyrexInAirFryer: Pairing = {
  subjectSlug: 'pyrex',
  subjectName: 'Pyrex',
  subjectKind: 'Cookware',
  subjectNote: 'Branded glass bakeware and storage',

  relation: 'in',

  targetSlug: 'air-fryer',
  targetName: 'Air Fryer',
  targetKind: 'Appliance',
  targetNote: 'Countertop hot-air cooking appliance',

  eyebrow: 'Kitchen · Cookware & Appliances',
  h1: 'Can I Use Pyrex in an Air Fryer?',
  seoTitle: 'Pyrex in an Air Fryer: Safe or Not? | Can I Use It With',
  metaDescription:
    'No. Pyrex says its glassware cannot be used in an air fryer because the appliance is a direct heat source that can damage the dish.',

  verdict: 'no',
  shortAnswer:
    'No. Do not put Pyrex glassware in an air fryer, even if the dish fits. Use the fryer’s basket, tray, or another accessory approved in its manual. Pyrex classifies an air fryer as a direct heat source and warns that improper use can damage the dish or cause injury.',

  mainRisk: 'Glass shattering',
  damages: 'The Pyrex dish',
  alternative: 'Air-fryer-approved cooking vessel',

  conditionsOk: [
    'Use the air fryer’s supplied basket or tray as directed in its manual.',
    'Choose another cooking vessel only when the air fryer manufacturer expressly approves it.',
    'For hot cooking with Pyrex, use a fully preheated conventional or convection oven under Pyrex’s instructions.',
  ],
  conditionsNever: [
    'Never place Pyrex glassware in an air fryer, including an oven-style model.',
    'Never assume conventional or convection oven approval includes an air fryer.',
    'Never test the combination at a lower setting or for a shorter cycle; Pyrex gives no air-fryer exception.',
    'Never use Pyrex that is chipped, cracked, or severely scratched in any approved appliance.',
  ],

  mechanisms: [
    {
      title: 'Direct heat exposure',
      body: 'Pyrex classifies an air fryer as a direct heat source and excludes it from approved use. This exposure can damage the dish.',
    },
    {
      title: 'Thermal stress',
      body: 'Fast or uneven heating can leave different parts of the glass at different temperatures. The resulting stress can start cracks or cause the dish to shatter.',
    },
  ],

  calloutLabel: 'Oven-Safe Confusion',
  calloutBody: [
    'The confusion comes from the word “convection.” Air fryers circulate hot air, and Pyrex allows its glassware in fully preheated conventional and convection ovens, so that approval can look broad enough to include an air fryer.',
    'Pyrex draws a separate line for countertop appliances. Its use-and-care guidance specifically lists air fryers among appliances that must not be used with Pyrex, while its FAQ identifies the air fryer as a direct heat source.',
  ],

  sources: [
    {
      publisher: 'Pyrex Home',
      title: 'Frequently Asked Questions',
      url: 'https://pyrexhome.com/pages/frequently-asked-questions',
      kind: 'manufacturer',
    },
    {
      publisher: 'Pyrex Home',
      title: 'Product Warranties / Safety and Usage',
      url: 'https://pyrexhome.com/pages/product-warranties-safety-and-usage',
      kind: 'manufacturer',
    },
    {
      publisher: 'National Institute of Standards and Technology',
      title: 'NIST Recommended Practice Guide — Fractography of Ceramics and Glasses, 4th edition',
      url: 'https://www.nist.gov/publications/nist-recommended-practice-guide-fractography-ceramics-and-glasses-4th-edition',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed current Pyrex FAQ and use-and-care warnings for air-fryer use, with NIST guidance used only to explain thermal stress in glass.',
};
