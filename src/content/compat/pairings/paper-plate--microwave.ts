import type { Pairing } from '../types';

/**
 * Paper Plate in Microwave.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const paperPlateInMicrowave: Pairing = {
  subjectSlug: 'paper-plate',
  subjectName: 'Paper Plate',
  subjectKind: 'Material',
  subjectNote: 'Disposable plate made from paperboard',

  relation: 'in',

  targetSlug: 'microwave',
  targetName: 'Microwave',
  targetKind: 'Appliance',
  targetNote: 'Appliance that heats food with microwaves',

  eyebrow: 'Kitchen · Disposable Serveware',
  h1: 'Can I Use a Paper Plate in a Microwave?',
  seoTitle: 'Paper Plates in Microwaves: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Yes, with limits: use a microwave-safe paper plate for brief reheating. Avoid unapproved recycled, printed, coated, or metallic plates and combination modes.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use a paper plate labeled microwave-safe for brief reheating in microwave-only mode, and follow your oven manual. If the plate has no microwave-safe statement, move the food to microwave-safe glass or ceramic; recycled, printed, or coated plates need specific manufacturer approval. Paper can scorch if overheated, while hidden metal or other impurities can cause arcing.',

  mainRisk: 'Fire or arcing',
  damages: 'The microwave',
  alternative: 'Microwave-safe glass or ceramic',

  conditionsOk: [
    'Use a plain, non-recycled paper plate whose package or manufacturer says it is microwave-safe.',
    'Use a printed or coated plate only when that exact product is identified as microwave-safe.',
    'Keep it to reheating or manufacturer-approved short cooking in microwave-only mode.',
    'Stay nearby and stop the cycle if the plate browns, smokes, burns, or sparks.',
  ],
  conditionsNever: [
    'Never assume every paper plate is safe because the base material is paper.',
    'Never microwave a recycled-content plate unless its manufacturer explicitly approves it for microwave use.',
    'Never use a plate with foil accents, metallic ink, a metallic coating, staples, or other metal.',
    'Never use a paper plate in convection, grill, broil, or combination mode.',
    'Never use a paper plate for prolonged cooking or continue heating after scorching or sparking begins.',
  ],

  mechanisms: [
    {
      title: 'Food heats the plate',
      body: 'Microwaves pass through suitable paper and are absorbed by water, fat, and sugar in the food. Heat then moves from the food into the plate. If exposure continues after the food gets very hot, the paper can scorch or ignite.',
    },
    {
      title: 'Hidden material can arc',
      body: 'Recycled stock can contain foreign material, and decorative coatings may contain metal. Conductive particles can create arcs inside the oven, producing sparks that can burn the paper or damage the microwave.',
    },
  ],

  calloutLabel: 'Paper Plates Vary',
  calloutBody: [
    'The word paper makes these plates look interchangeable. They can contain recycled fiber, printed surfaces, grease barriers, plastic films, or metallic decoration, and microwave performance depends on the finished plate.',
    'A microwave-safe statement is the clearest dividing line. Plain white, non-recycled plates are the conservative choice; some printed and coated products are also safe because their manufacturers designed and labeled them for microwave reheating. Without that confirmation, use glass or ceramic.',
  ],

  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Cooking with Microwave Ovens',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cooking-microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'GE Appliances',
      title: 'Microwave - Dish and Utensil Guidelines',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=18849',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'Microwave Hood Combination User Guide',
      url: 'https://www.whirlpool.com/content/dam/global/documents/201908/owners-manual-w11297796-revb.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Hefty',
      title: 'Hefty Compostable Printed Paper Plates & Bowls',
      url: 'https://www.hefty.com/whats-new/hefty-compostable-printed-paper-plates-and-bowls',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against USDA guidance, GE and Whirlpool microwave instructions, and Hefty labeling for printed microwave-safe paper plates.',
};
