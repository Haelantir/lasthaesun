import type { Pairing } from '../types';

/**
 * Aluminum Foil in Microwave.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const aluminumFoilInMicrowave: Pairing = {
  subjectSlug: 'aluminum-foil',
  subjectName: 'Aluminum Foil',
  subjectKind: 'Material',
  subjectNote: 'Thin rolled aluminum kitchen wrap',

  relation: 'in',

  targetSlug: 'microwave',
  targetName: 'Microwave',
  targetKind: 'Appliance',
  targetNote: 'Appliance that heats food with microwaves',

  eyebrow: 'Kitchen · Foil & Wraps',
  h1: 'Can I Use Aluminum Foil in a Microwave?',
  seoTitle: 'Aluminum Foil in a Microwave: When It Is Allowed | Can I Use It With',
  metaDescription:
    'Yes, with limits: use aluminum foil only when your microwave manual allows it, as a small smooth shield kept away from the cavity and other metal.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only if your microwave owner\'s manual allows foil in microwave mode and you follow its method exactly. Use a small, smooth piece pressed close to the food for shielding, with clear space from the oven surfaces and other metal. If the manual is silent, leave the foil out.',

  mainRisk: 'Arcing and fire',
  damages: 'Microwave oven',
  alternative: 'Microwave-safe lid or cookware',

  conditionsOk: [
    'Follow only the foil arrangement described in the owner\'s manual for your exact model.',
    'For shielding, use a small, new, smooth piece pressed closely against the food.',
    'Position the food and foil near the center, clear of cavity surfaces and other metal.',
    'Stay nearby while the microwave runs so you can stop it at the first spark or flash.',
  ],
  conditionsNever: [
    'Never completely wrap food in foil or cover most of its surface.',
    'Never use wrinkled, crumpled, torn, or pointed foil.',
    'Never let foil touch the walls, ceiling, floor, rack, or another metal object.',
    'Never continue the cycle after sparks or flashes appear.',
  ],

  mechanisms: [
    {
      title: 'Metal reflects microwaves',
      body: 'Aluminum foil reflects microwave energy instead of letting it pass through. Food behind a large covered area receives less energy, so it can heat unevenly or remain cold.',
    },
    {
      title: 'Loose edges can arc',
      body: 'Wrinkles, points, and loose foil edges can trigger an electrical arc inside the cavity. The arc appears as sparks or flashes; if it continues, it can damage the oven and may start a fire.',
    },
  ],

  calloutLabel: 'The Limited Exception',
  calloutBody: [
    'A microwave\'s cavity is metal, which makes household foil seem harmless. The cavity is fixed and shaped as part of the appliance. Loose foil can wrinkle, form points, or touch another metal surface.',
    'Some models permit a small smooth piece as a shield over thin parts of food. That narrow exception comes from the instructions for the exact model; it does not make foil safe for wrapping or covering food.',
  ],

  sources: [
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Microwave Ovens',
      url: 'https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Cooking with Microwave Ovens',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cooking-microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'Whirlpool',
      title: 'Can You Microwave Aluminum Foil?',
      url: 'https://www.whirlpool.com/blog/kitchen/aluminum-foil-in-microwave.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'GE Appliances',
      title: 'Microwave - Using Metal or Foil',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17965',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed microwave reflection, arcing, oven damage, and model-specific foil exceptions using FDA, USDA FSIS, Whirlpool, and GE Appliances guidance.',
};
