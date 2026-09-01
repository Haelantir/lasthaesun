import type { Pairing } from '../types';

/**
 * Bread in Freezer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const breadInFreezer: Pairing = {
  subjectSlug: 'bread',
  subjectName: 'Bread',
  subjectKind: 'Food',
  subjectNote: 'Baked loaf or sliced bread',

  relation: 'in',

  targetSlug: 'freezer',
  targetName: 'Freezer',
  targetKind: 'Appliance',
  targetNote: 'Frozen food storage compartment',

  eyebrow: 'Kitchen · Food Storage',
  h1: 'Can I Put Bread in the Freezer?',
  seoTitle: 'How to Freeze Bread Without Drying It Out | Can I Use It With',
  metaDescription:
    'Yes, with proper packaging. Cool and portion bread, seal it in a freezer-grade bag, and thaw plain baked bread while wrapped to protect its texture.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes. Cool the bread, divide it into useful portions, and seal it in freezer-grade packaging with as little air as possible. Plain baked bread can thaw at room temperature while still wrapped. Loose packaging can leave it dry and stale-tasting.',

  mainRisk: 'Freezer burn',
  damages: 'Bread texture',
  alternative: 'Freezer-weight bag',

  conditionsOk: [
    'Cool baked bread before packaging it.',
    'Slice or divide the loaf into amounts you will use at one time.',
    'Wrap it tightly or use a freezer bag, removing as much air as possible before sealing.',
    'Thaw plain baked bread at room temperature while it remains wrapped.',
  ],
  conditionsNever: [
    'Do not use wax paper or a thin retail bread wrapper as the only freezer barrier.',
    'Do not seal bread while it is still warm.',
    'Do not leave excess air in the package or use a loose closure.',
    'Do not thaw and refreeze the whole loaf whenever you need a few slices.',
  ],

  mechanisms: [
    {
      title: 'Air dries exposed bread',
      body: 'Freezer air removes moisture from bread that is loosely wrapped. Moisture-resistant packaging slows that loss and also limits odor absorption.',
    },
    {
      title: 'Thaw cycles reduce quality',
      body: 'Partial thawing followed by refreezing can lower food quality. Smaller portions keep the unused bread solidly frozen.',
    },
  ],

  calloutLabel: 'The Original Bag Problem',
  calloutBody: [
    'The thin bag around a store-bought loaf looks sealed, so it is easy to assume it is freezer packaging. National Center guidance calls for a freezer-weight bag because standard bread wrappers allow too much moisture vapor to pass.',
    'Put the loaf or portions into moisture-resistant freezer packaging and remove excess air before sealing. Keeping the bread wrapped while it thaws also helps limit surface drying.',
  ],

  sources: [
    {
      publisher: 'Utah State University Extension',
      title: 'Food Waste Prevention Part 3: Shopping',
      url: 'https://extension.usu.edu/nutrition/research/food-waste-part-3',
      kind: 'academic',
    },
    {
      publisher: 'National Center for Home Food Preservation',
      title: 'Packaging and Labeling Foods',
      url: 'https://nchfp.uga.edu/how/freeze/freeze-general-information/packaging-and-labeling-foods/',
      kind: 'academic',
    },
    {
      publisher: 'National Center for Home Food Preservation',
      title: 'Packaging Materials FAQs',
      url: 'https://nchfp.uga.edu/faqs/packaging-materials/category/faq-freezing',
      kind: 'academic',
    },
    {
      publisher: 'Oregon State University Extension Service',
      title: 'Freezing Convenience Foods That You\'ve Prepared at Home',
      url: 'https://extension.oregonstate.edu/sites/extd8/files/documents/pnw296.pdf',
      kind: 'academic',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed baked-bread freezer compatibility, packaging, portioning, and thawing using university extension and National Center guidance.',
};
