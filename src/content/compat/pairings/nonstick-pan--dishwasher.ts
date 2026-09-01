import type { Pairing } from '../types';

/**
 * Nonstick Pan in Dishwasher.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const nonstickPanInDishwasher: Pairing = {
  subjectSlug: 'nonstick-pan',
  subjectName: 'Nonstick Pan',
  subjectKind: 'Cookware',
  subjectNote: 'Coated pan for low-stick cooking',

  relation: 'washed-in',

  targetSlug: 'dishwasher',
  targetName: 'Dishwasher',
  targetKind: 'Appliance',
  targetNote: 'Machine for washing dishes',

  eyebrow: 'Kitchen · Cookware Care',
  h1: 'Can I Put a Nonstick Pan in the Dishwasher?',
  seoTitle: 'Dishwasher-Safe Nonstick Pans: Check Before Washing | Can I Use It With',
  metaDescription:
    'Yes, but only if the pan is labeled dishwasher-safe. Otherwise, hand wash it to avoid coating wear, discoloration, or warranty problems.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the pan or its manual explicitly says dishwasher-safe. If the instructions say hand wash only, or you cannot verify them, use mild dish soap and a soft sponge instead. Dishwasher heat and detergent can dull finishes and shorten the life of pans not designed for the cycle.',

  mainRisk: 'Coating wear',
  damages: 'Nonstick surface',
  alternative: 'Gentle hand washing',

  conditionsOk: [
    'Confirm that the exact pan or cookware line is labeled dishwasher-safe.',
    'Let the pan cool completely before loading it.',
    'Follow any detergent restrictions in the manufacturer’s care instructions.',
    'Hand wash when the manufacturer allows dishwashing but recommends hand washing for longer coating life.',
  ],
  conditionsNever: [
    'Do not put the pan in the dishwasher when its instructions say hand wash only.',
    'Do not assume every nonstick pan from the same brand has the same care rating.',
    'Do not wash removable or wooden handles unless their instructions specifically allow it.',
    'Do not use detergent ingredients that the cookware manufacturer excludes.',
  ],

  mechanisms: [
    {
      title: 'Detergent wears finishes',
      body: 'Automatic dishwasher detergent can be harsher than hand-washing soap. Repeated exposure may dull or discolor unapproved cookware and shorten its nonstick performance.',
    },
    {
      title: 'Hot pans can warp',
      body: 'Washing a hot pan creates a sudden temperature change. The pan can deform, so it should cool before any type of washing.',
    },
  ],

  calloutLabel: 'Check the Exact Pan',
  calloutBody: [
    '“Nonstick” describes the cooking surface, not the cleaning method. Some nonstick collections are dishwasher-safe while other lines from the same manufacturer are hand-wash only.',
    'Dishwasher-safe also does not approve every detergent or attached part. Manufacturers may restrict detergent ingredients, exclude removable handles, or recommend hand washing to preserve the coating.',
  ],

  sources: [
    {
      publisher: 'Calphalon',
      title: 'Cookware Use & Care',
      url: 'https://www.calphalon.com/supportShow?cfid=cookware-use-and-care',
      kind: 'manufacturer',
    },
    {
      publisher: 'All-Clad',
      title: 'Warranty & Repairs | Product Support & FAQ',
      url: 'https://www.all-clad.com/customer-service',
      kind: 'manufacturer',
    },
    {
      publisher: 'Tefal',
      title: 'User Manual and Frequently Asked Questions ECO-RESPECT Frypan',
      url: 'https://www.tefal.com/instructions-for-use/csp/2100118325',
      kind: 'manufacturer',
    },
    {
      publisher: 'Circulon',
      title: 'Circulon Cookware: Dishwasher Safety and Care Tips',
      url: 'https://support.circulon.com/en_us/circulon-cookware-dishwasher-safety-care-tips-S1BXE8h1zl',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed manufacturer guidance on dishwasher approval, detergent limits, cooling, removable parts, and nonstick coating longevity.',
};
