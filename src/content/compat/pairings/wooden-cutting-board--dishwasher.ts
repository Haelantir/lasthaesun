import type { Pairing } from '../types';

/**
 * Wooden Cutting Board in Dishwasher.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const woodenCuttingBoardInDishwasher: Pairing = {
  subjectSlug: 'wooden-cutting-board',
  subjectName: 'Wooden Cutting Board',
  subjectKind: 'Kitchenware',
  subjectNote: 'Wood food-preparation surface',

  relation: 'washed-in',

  targetSlug: 'dishwasher',
  targetName: 'Dishwasher',
  targetKind: 'Appliance',
  targetNote: 'Automatic dishwashing appliance',

  eyebrow: 'Kitchen · Cutting Boards',
  h1: 'Can I Put a Wooden Cutting Board in the Dishwasher?',
  seoTitle: 'Wood Cutting Boards in Dishwashers: Safe or Not? | Can I Use It With',
  metaDescription:
    'No, unless the manufacturer marks that exact board dishwasher-safe. Dishwasher heat and moisture can warp or split wood and stress glued joints.',

  verdict: 'no',
  shortAnswer:
    'No, unless the manufacturer labels that exact board dishwasher-safe. If you cannot confirm that, wash it by hand with warm, soapy water and dry it promptly. Dishwasher heat, moisture, and detergent can warp or crack wood, while repeated moisture changes can stress glued joints.',

  mainRisk: 'Warping or splitting',
  damages: 'The cutting board',
  alternative: 'Hand-wash and dry promptly',

  conditionsOk: [
    'Use the dishwasher only when the maker labels that exact board dishwasher-safe.',
    'Follow any rack, cycle, or drying limits in the board’s care instructions.',
    'If the label or manual is missing, hand-wash with warm, soapy water and dry promptly.',
  ],
  conditionsNever: [
    'Do not put an unapproved edge-grain or end-grain board in the dishwasher.',
    'Do not machine-wash a laminated or glued-strip board unless its product instructions allow it.',
    'Do not assume solid wood alone means dishwasher-safe; manufacturer directions vary.',
    'Do not use a shorter cycle or switch off heated drying as a workaround for an unapproved board.',
    'Do not soak the board in the sink because prolonged wetting can also warp wood and strain joints.',
  ],

  mechanisms: [
    {
      title: 'Moisture changes shape',
      body: 'Wood absorbs water and swells. As it dries, uneven shrinkage can leave the board warped or split.',
    },
    {
      title: 'Glue lines take stress',
      body: 'Glued strips and blocks do not move exactly like the adhesive between them. Moisture cycling creates stress along the bond, which can weaken it or open a seam.',
    },
    {
      title: 'Surface protection degrades',
      body: 'Dishwasher heat and detergent can damage the board’s protective oil or finish. That leaves less protection against later moisture.',
    },
  ],

  calloutLabel: 'Conflicting Advice',
  calloutBody: [
    'Broad guidance and product instructions do not line up perfectly. USDA says some solid-wood boards can be washed in a dishwasher while warning that laminated boards may crack or split. Major cutting-board and dishwasher manufacturers often tell owners to hand-wash wood.',
    'Use the care instructions for the exact board. Solid wood does not tell you whether its finish, construction, or glued joints were designed for a dishwasher cycle. With no clear dishwasher-safe label, keep it out.',
  ],

  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Cutting Boards',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cutting-boards',
      kind: 'government',
    },
    {
      publisher: 'U.S. Department of Agriculture Forest Service',
      title: 'Chapter 4: Moisture relations and physical properties of wood',
      url: 'https://research.fs.usda.gov/treesearch/62243',
      kind: 'government',
    },
    {
      publisher: 'John Boos & Co.',
      title: 'Boos Block Care and Maintenance',
      url: 'https://www.johnboos.com/care-and-maintenance/blocks',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'What Is and Isn’t Dishwasher Safe?',
      url: 'https://www.whirlpool.com/blog/kitchen/what-is-and-is-not-dishwasher-safe.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against USDA food-safety and wood-moisture guidance plus manufacturer instructions covering dishwasher heat, warping, splitting, and glued joints.',
};
