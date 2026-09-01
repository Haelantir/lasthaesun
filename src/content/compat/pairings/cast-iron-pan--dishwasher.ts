import type { Pairing } from '../types';

/**
 * Cast Iron Pan in Dishwasher.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const castIronPanInDishwasher: Pairing = {
  subjectSlug: 'cast-iron-pan',
  subjectName: 'Cast Iron Pan',
  subjectKind: 'Cookware',
  subjectNote: 'Heavy iron cooking pan',

  relation: 'washed-in',

  targetSlug: 'dishwasher',
  targetName: 'Dishwasher',
  targetKind: 'Appliance',
  targetNote: 'Machine that washes dishes',

  eyebrow: 'Kitchen · Cookware Care',
  h1: 'Can I Put a Cast Iron Pan in the Dishwasher?',
  seoTitle: 'Cast Iron Pan Dishwasher Safety | Can I Use It With',
  metaDescription:
    'Usually no: dishwashers can strip seasoning and cause rust. Use an enameled or specially treated pan only when its exact care instructions permit it.',

  verdict: 'risky',
  shortAnswer:
    'Usually, no. Keep a standard bare or seasoned cast iron pan out of the dishwasher because the cycle can remove seasoning and leave exposed iron vulnerable to rust. An enameled or specially heat-treated pan may go in only when its exact care instructions say dishwasher-safe.',

  mainRisk: 'Rust',
  damages: 'Pan surface',
  alternative: 'Hand wash and dry',

  conditionsOk: [
    'The exact care instructions identify the pan itself as dishwasher-safe, whether it is enameled or specially heat-treated.',
    'Every attached or removable part is also approved for dishwasher cleaning.',
    'The dishwasher rack can support the pan’s weight as required by the manufacturer.',
    'The cycle finishes, the pan dries completely, and any required re-oiling is done before storage.',
  ],
  conditionsNever: [
    'Never put a conventional bare or seasoned pan in the dishwasher unless its own care guide specifically allows it.',
    'Never assume a pan is dishwasher-safe because it is enameled; some enameled skillets are hand-wash only.',
    'Never machine-wash a wooden handle or any lid, knob, decal, or accessory excluded by the manufacturer.',
    'Never store a cast iron pan while damp, especially around an exposed rim.',
    'Never skip re-oiling when the care guide for a dishwasher-safe heat-treated pan requires it.',
  ],

  mechanisms: [
    {
      title: 'Dishwasher strips seasoning',
      body: 'Seasoning is carbonized oil bonded to bare iron. Dishwasher cleaning can remove this layer and expose the surface beneath it.',
    },
    {
      title: 'Exposed iron rusts',
      body: 'Water and lingering moisture reach unprotected iron or an exposed rim. The iron oxidizes and forms rust.',
    },
    {
      title: 'Enamel finish dulls',
      body: 'Repeated dishwasher cleaning can reduce the gloss of an enamel finish. This may leave the pan looking worn even when cooking performance is unchanged.',
    },
  ],

  calloutLabel: 'The Enamel Exception',
  calloutBody: [
    'Cast iron describes the metal beneath the cooking surface. Traditional pans rely on baked-on oil for seasoning. Enameled pans have porcelain bonded over the iron and do not need seasoning; the interior may still be black.',
    'Enamel does not make dishwasher use universal. Some manufacturers allow it with restrictions, while other enameled pans are labeled hand-wash only. Check the instructions for the exact pan and its removable parts.',
  ],

  sources: [
    {
      publisher: 'Lodge Cast Iron',
      title: 'How to Clean',
      url: 'https://www.lodgecastiron.com/pages/how-to-clean',
      kind: 'manufacturer',
    },
    {
      publisher: 'Lodge Cast Iron',
      title: 'Cleaning & Care: Heat-Treated Serveware',
      url: 'https://www.lodgecastiron.com/pages/cleaning-and-care-heat-treated-serveware',
      kind: 'manufacturer',
    },
    {
      publisher: 'Le Creuset',
      title: 'Care and Use',
      url: 'https://www.lecreuset.com/care-and-use.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Tramontina',
      title: 'Bestow 12 Inch Enameled Cast-Iron Skillet',
      url: 'https://www.tramontina.com/products/bestow-12-in-enameled-cast-iron-skillet',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed seasoned, enameled, and heat-treated cast iron against current Lodge, Le Creuset, and Tramontina care instructions.',
};
