import type { Pairing } from '../types';

/**
 * Milk in Freezer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const milkInFreezer: Pairing = {
  subjectSlug: 'milk',
  subjectName: 'Milk',
  subjectKind: 'Beverage',
  subjectNote: 'Pasteurized fluid dairy milk',

  relation: 'stored-in',

  targetSlug: 'freezer',
  targetName: 'Freezer',
  targetKind: 'Appliance',
  targetNote: 'Cold storage for frozen food',

  eyebrow: 'Kitchen · Dairy Storage',
  h1: 'Can I Put Milk in the Freezer?',
  seoTitle: 'Freezing Milk Safely: Containers and Texture | Can I Use It With',
  metaDescription:
    'Yes, you can freeze pasteurized homogenized milk. Leave expansion room, use a freezer-safe container, thaw in the refrigerator, and expect separation.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, you can freeze pasteurized homogenized milk. Put it in a sealed freezer-safe container with room to expand, then thaw it in the refrigerator and shake or stir it. The milk may separate or feel less smooth after thawing.',

  mainRisk: 'Leaks or breakage',
  damages: 'Container and milk',
  alternative: 'Freeze smaller portions',

  conditionsOk: [
    'Freeze pasteurized homogenized milk while it is still fresh.',
    'Use a moisture-resistant, leakproof container or bag designed for freezer storage.',
    'Leave headspace between the milk and the closure so the contents can expand.',
    'Thaw the milk in the refrigerator, then shake, stir, or briefly blend it before use.',
  ],
  conditionsNever: [
    'Never fill the container completely because the milk needs room to expand as it freezes.',
    'Never use an ordinary glass jar or bottle that is not designed for freezing.',
    'Never rely on a paperboard milk carton for long-term freezer storage.',
    'Never thaw frozen milk on the counter.',
    'Never use freezing to salvage spoiled milk or make unpasteurized milk safe.',
  ],

  mechanisms: [
    {
      title: 'Ice needs room',
      body: 'Water in the milk forms ice crystals, and the contents expand as they freeze. A completely full container can bulge, leak, or break.',
    },
    {
      title: 'The emulsion changes',
      body: 'Ice formation changes the smooth distribution of water, fat, and milk solids. The thawed milk may separate or feel grainy, though mixing can improve its smoothness.',
    },
    {
      title: 'Microbes survive freezing',
      body: 'Freezing stops most microbial growth while the milk remains frozen, but it does not kill most bacteria. Microbes can begin growing again as the milk thaws.',
    },
  ],

  calloutLabel: 'The carton trap',
  calloutBody: [
    'A sealed store carton can look freezer-ready. Paperboard milk cartons are not moisture-resistant enough for long-term freezer storage, and every rigid container needs space for the milk to expand.',
    'Separation after thawing is usually a quality change. The milk may look uneven or feel less smooth even when it remained properly chilled, so shake, stir, or briefly blend it before judging the texture.',
  ],

  sources: [
    {
      publisher: 'North Dakota State University Extension',
      title: 'Food Freezing Basics: Freezing Dairy Products, Eggs and Other Foods',
      url: 'https://www.ndsu.edu/agriculture/extension/publications/food-freezing-basics-freezing-dairy-products-eggs-and-other-foods',
      kind: 'academic',
    },
    {
      publisher: 'National Center for Home Food Preservation',
      title: 'General Freezing FAQs',
      url: 'https://nchfp.uga.edu/faqs/general-freezing/category/faq-freezing',
      kind: 'academic',
    },
    {
      publisher: 'National Center for Home Food Preservation',
      title: 'Packaging Materials FAQs',
      url: 'https://nchfp.uga.edu/faqs/packaging-materials/category/faq-freezing',
      kind: 'academic',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Refrigerator Thermometers - Cold Facts about Food Safety',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed milk freezing, packaging, expansion, texture changes, and safe thawing using FDA, NDSU Extension, and NCHFP guidance.',
};
