import type { Pairing } from '../types';

/**
 * Lettuce in Freezer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const lettuceInFreezer: Pairing = {
  subjectSlug: 'lettuce',
  subjectName: 'Lettuce',
  subjectKind: 'Food',
  subjectNote: 'Tender leafy vegetable eaten raw',

  relation: 'in',

  targetSlug: 'freezer',
  targetName: 'Freezer',
  targetKind: 'Appliance',
  targetNote: 'Appliance for frozen food storage',

  eyebrow: 'Kitchen · Food Storage',
  h1: 'Can I Put Lettuce in the Freezer?',
  seoTitle: 'Can Lettuce Be Frozen Safely? | Can I Use It With',
  metaDescription:
    'Yes, with limits: freeze lettuce only for cooked dishes. It becomes limp and watery after thawing, so refrigerate lettuce meant for raw use.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Freeze lettuce only if you plan to use it in a cooked dish. Thawed leaves become limp and waterlogged, so refrigerate lettuce meant for salads, sandwiches, wraps, or garnish.',

  mainRisk: 'Texture loss',
  damages: 'Lettuce leaves',
  alternative: 'Refrigerate for raw use',

  conditionsOk: [
    'Freeze it only when the planned use is a cooked dish where soft leaves are acceptable.',
    'Choose fresh, undamaged lettuce and remove any rotten portions before preparation.',
    'Rinse it under running water and dry it, unless the package is labeled pre-washed or ready-to-eat.',
    'Pack it in a freezer bag or freezer-safe container, press out excess air, and seal it.',
  ],
  conditionsNever: [
    'Do not freeze lettuce intended for salads, sandwiches, wraps, or garnish.',
    'Do not expect thawed leaves to regain their crisp texture, even after draining.',
    'Do not wash lettuce with soap, detergent, or commercial produce wash.',
    'Do not use freezing as a sanitizing step; it does not sterilize food.',
  ],

  mechanisms: [
    {
      title: 'Ice Damages Leaf Cells',
      body: 'Water inside the lettuce expands as it freezes. Ice crystals rupture the thin cell walls, leaving the tissue unable to hold its original shape after thawing.',
    },
    {
      title: 'Air Degrades Quality',
      body: 'Oxygen in poorly sealed packaging can cause color and flavor changes. Pressing out excess air and sealing the package limits that exposure.',
    },
  ],

  calloutLabel: 'The Crispness Problem',
  calloutBody: [
    'Freezing can extend storage, but it does not hold lettuce in its fresh, crisp state. The common mistake is planning to thaw a head or bag and use it the same way as fresh lettuce.',
    'Soft thawed lettuce may be acceptable in a cooked soup or sauce where texture matters less. It will not work like fresh leaves in uncooked dishes.',
  ],

  sources: [
    {
      publisher: 'National Center for Home Food Preservation',
      title: 'Foods That Do Not Freeze Well',
      url: 'https://nchfp.uga.edu/how/freeze/freeze-general-information/foods-that-do-not-freeze-well/',
      kind: 'academic',
    },
    {
      publisher: 'National Center for Home Food Preservation',
      title: 'Got the Wintertime “Greens”?',
      url: 'https://nchfp.uga.edu/blog/got-the-wintertime-greens',
      kind: 'academic',
    },
    {
      publisher: 'North Dakota State University Extension',
      title: 'Food Freezing Guide',
      url: 'https://www.ndsu.edu/agriculture/extension/publications/food-freezing-guide',
      kind: 'academic',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Selecting and Serving Produce Safely',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed post-thaw texture, cooked-versus-raw suitability, packaging, and produce handling against NCHFP, university Extension, and FDA guidance.',
};
