import type { Pairing } from '../types';

/**
 * Steam Mop on Vinyl Plank Flooring.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const steamMopOnVinylPlankFlooring: Pairing = {
  subjectSlug: 'steam-mop',
  subjectName: 'Steam Mop',
  subjectKind: 'Appliance',
  subjectNote: 'Steam-powered hard-floor cleaning appliance',

  relation: 'on',

  targetSlug: 'vinyl-plank-flooring',
  targetName: 'Vinyl Plank Flooring',
  targetKind: 'Flooring',
  targetNote: 'Layered wood-look vinyl floor planks',

  eyebrow: 'Flooring · Steam Cleaning',
  h1: 'Can I Use a Steam Mop on Vinyl Plank Flooring?',
  seoTitle: 'Steam Mops and Vinyl Plank Flooring: Compatibility | Can I Use It With',
  metaDescription:
    'Use a steam mop only if your exact vinyl plank product approves it. Otherwise, damp-mop; waterproof flooring is not automatically steam-safe.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Use a steam mop only when the care guide for your exact vinyl plank product explicitly approves steam and the mop’s instructions allow that surface. If either guide says no or stays silent, use a damp microfiber mop instead. Waterproof vinyl can still have steam-sensitive finishes, seams or adhesive.',

  mainRisk: 'Heat-moisture damage',
  damages: 'Flooring and subfloor',
  alternative: 'Damp microfiber mop',

  conditionsOk: [
    'The current care guide for the exact brand, collection and style says steam-mop approved.',
    'The steam mop is designed for compatible hard floors and its instructions do not exclude vinyl plank.',
    'You follow every stated restriction for the steam setting, pad and cleaning method.',
    'The guide matches the product generation you own rather than a similarly named collection.',
  ],
  conditionsNever: [
    'Never rely on a waterproof label as proof that steam is allowed.',
    'Never use steam when the flooring guide prohibits it or recommends damp mopping only.',
    'Never treat silence in the care guide as approval.',
    'Never transfer steam approval from one collection to another within the same brand.',
    'Never exceed the settings or methods permitted by either manufacturer.',
  ],

  mechanisms: [
    {
      title: 'Finish heat exposure',
      body: 'Steam heats the wear layer and surface coating. CALI warns that this can dull the finish and make it appear cloudy over time.',
    },
    {
      title: 'Plank expansion',
      body: 'Vinyl expands when heated. Shaw warns that steam temperatures can contribute to wrinkles and glue-bond problems.',
    },
    {
      title: 'Moisture through seams',
      body: 'Steam cools into liquid water on and around the planks. CALI warns that excess moisture may seep through seams and damage the subfloor.',
    },
  ],

  calloutLabel: 'The Waterproof Assumption',
  calloutBody: [
    'Waterproof tells you how a flooring product handles water exposure; it does not grant blanket permission for every wet-cleaning method. CALI describes its vinyl as waterproof and still bans steam because heat may dull the wear layer and moisture may enter the seams.',
    'Approval can be narrower than a brand name. COREtec approves steam cleaning for Scratchless styles while stating that its other collections are not approved, so the exact collection and care guide decide the answer.',
  ],

  sources: [
    {
      publisher: 'COREtec',
      title: 'How to Clean LVP Flooring for a Beautiful Home',
      url: 'https://coretecfloors.com/en-us/blog/your-guide-to-cleaning-lvp-flooring',
      kind: 'manufacturer',
    },
    {
      publisher: 'COREtec',
      title: 'Waterproof & Scratchless Flooring Collection',
      url: 'https://coretecfloors.com/en-us/shop-by-collection/coretec-scratchless',
      kind: 'manufacturer',
    },
    {
      publisher: 'CALI',
      title: 'Vinyl Floor Cleaner Tips and Tricks: Protecting Your CALI Vinyl Flooring',
      url: 'https://www.califloors.com/blog/vinyl-floor-cleaner-tips-and-tricks',
      kind: 'manufacturer',
    },
    {
      publisher: 'Shaw Floors',
      title: 'Resilient Vinyl Flooring Care and Maintenance',
      url: 'https://costco.shawfloors.com/flooring/how-to/vinyl-how-to-s/care-maintenance/resilient-vinyl-flooring-care-and-maintenance',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Reviewed current manufacturer care guidance on steam approval, waterproof vinyl, surface heat, seams and adhesive effects.',
};
