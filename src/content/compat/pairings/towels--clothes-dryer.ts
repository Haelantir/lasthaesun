import type { Pairing } from '../types';

/**
 * Towels in Clothes Dryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const towelsInClothesDryer: Pairing = {
  subjectSlug: 'towels',
  subjectName: 'Towels',
  subjectKind: 'Textile',
  subjectNote: 'Absorbent woven or knit cloths',

  relation: 'in',

  targetSlug: 'clothes-dryer',
  targetName: 'Clothes Dryer',
  targetKind: 'Appliance',
  targetNote: 'Machine for tumble-drying laundry',

  eyebrow: 'Laundry · Towels & Drying',
  h1: 'Can I Put Towels in a Clothes Dryer?',
  seoTitle: 'Can Towels Go in the Dryer Safely? | Can I Use It With',
  metaDescription:
    'Yes, when the care label permits tumble drying. Match its heat symbol, leave room for tumbling, clean the lint screen, and never dry oil-contaminated towels.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, most towels can go in a clothes dryer when their care label allows tumble drying. Match the label’s heat setting, leave enough room for the towels to tumble, and clean the lint screen before the load. Air-dry towels marked “do not tumble dry,” “line dry,” or “dry flat,” and never machine-dry towels contaminated with cooking oil or flammable solvents.',

  mainRisk: 'Fabric damage',
  damages: 'The towels',
  alternative: 'Air-dry per label',

  conditionsOk: [
    'The care label permits tumble drying, either in words or with a circle inside a square.',
    'Set the dryer to the heat shown inside the tumble-dry symbol: no dots allows any heat, one dot means low, two medium, three high, and a solid circle means no heat.',
    'Shake out the towels, load them loosely, and use a towel or sensor cycle if your dryer manual recommends one.',
    'Clean the lint screen before the load and remove the towels when they are dry.',
  ],
  conditionsNever: [
    'Do not use the dryer if the care label shows a crossed-out circle inside a square.',
    'Do not tumble-dry a towel labeled line dry, drip dry, or dry flat, even without a separate crossed-out dryer symbol.',
    'Do not choose a hotter setting because the dryer has a Towels or Heavy Duty cycle; the towel’s care label controls.',
    'Do not tightly pack the drum because the towels need room to separate and tumble.',
    'Never dry towels exposed to cooking oil, gasoline, dry-cleaning solvent, or another flammable substance.',
  ],

  mechanisms: [
    {
      title: 'Air carries moisture away',
      body: 'Dryer airflow passes through the towel loops as the drum turns, carrying away evaporated water. Packed towels cannot separate and tumble freely, so they dry more slowly and unevenly.',
    },
    {
      title: 'Heat changes the fibers',
      body: 'Heat speeds evaporation, but towel fibers, trims, and finishes do not all tolerate the same setting. Excess heat or overdrying can cause shrinkage, roughness, or other fabric damage.',
    },
    {
      title: 'Residual oil can ignite',
      body: 'Cooking oil can remain in a towel after washing. During heated drying, the oil can react with air and build enough heat for the load to catch fire.',
    },
  ],

  calloutLabel: 'Read the Dryer Symbol',
  calloutBody: [
    'The tumble-dry symbol is a circle inside a square. No dots means any heat; one dot means low, two mean medium, three mean high, and a solid circle means no heat or air only. An X over the symbol means keep the towel out of the dryer.',
    'A label that says line dry, drip dry, or dry flat is also directing you away from tumble drying. Microfiber, decorative borders, bonded layers, and special finishes can need less heat than plain cotton terry. If the label is missing or unreadable, choose a lower setting or air-dry instead of guessing high.',
  ],

  sources: [
    {
      publisher: 'Federal Trade Commission',
      title: 'Care Labels',
      url: 'https://www.ftc.gov/system/files/documents/rules/care-labeling-textile-wearing-apparel-certain-piece-goods/astm_care_symbols_chart.pdf',
      kind: 'government',
    },
    {
      publisher: 'Whirlpool',
      title: 'How to Wash & Dry Towels to Keep Them Soft',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-to-wash-towels.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Maytag',
      title: 'Electric or Gas Dryer Use and Care Guide',
      url: 'https://www.maytag.com/content/dam/global/documents/202209/owners-manual-w11555403-revB.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed for towel tumble-drying compatibility, care symbols, heat selection, loading, lint control, and oil contamination using FTC and manufacturer guidance.',
};
