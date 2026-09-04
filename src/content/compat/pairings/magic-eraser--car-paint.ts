import type { Pairing } from '../types';

/**
 * Magic Eraser on Car Paint.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const magicEraserOnCarPaint: Pairing = {
  subjectSlug: 'magic-eraser',
  subjectName: 'Magic Eraser',
  subjectKind: 'Cleaner',
  subjectNote: 'Melamine-foam household cleaning pad',

  relation: 'on',

  targetSlug: 'car-paint',
  targetName: 'Car Paint',
  targetKind: 'Coating',
  targetNote: 'Painted body finish and clear coat',

  eyebrow: 'Cars · Exterior Care',
  h1: 'Can I Use a Magic Eraser on Car Paint?',
  seoTitle: 'Magic Eraser and Car Paint Safety | Can I Use It With',
  metaDescription:
    'No. Mr. Clean does not recommend Magic Eraser on vehicle bodies. Its abrasive foam can mar or dull paint, so use a paint-safe car cleaner instead.',

  verdict: 'no',
  shortAnswer:
    'No. Mr. Clean specifically lists vehicle bodies among the surfaces not recommended for Magic Eraser use. The foam cleans through abrasion, which can leave fine marring or a dull patch in automotive paint. Use car-wash soap and a clean microfiber mitt, or a non-abrasive spot cleaner labeled safe for paint.',

  mainRisk: 'Finish marring',
  damages: 'Clear coat',
  alternative: 'Car shampoo and microfiber mitt',

  conditionsOk: [
    'Keep the Magic Eraser off the painted body and use a clean, soft microfiber mitt there instead.',
    'Use car-wash soap labeled safe for automotive paint.',
    'Rinse loose dirt and grit from the panel before contact washing.',
    'For stubborn contamination, use a non-abrasive automotive product labeled safe for the finish.',
  ],
  conditionsNever: [
    'Never use a Magic Eraser on painted body panels, even for a small stain.',
    'Never use it on matte, satin, dark, or high-gloss automotive finishes.',
    'Never scrub harder or make repeated passes when a mark does not lift.',
    'Never add a household cleaner or bleach in an attempt to make it paint-safe.',
    'Never move a pad used on wheels or other gritty parts onto the paint.',
  ],

  mechanisms: [
    {
      title: 'Micro-abrasive contact',
      body: 'The foam’s hard, fine cell structure rubs contamination from the surface. It can also rub against the paint’s outer finish and leave fine marks.',
    },
    {
      title: 'Uneven gloss',
      body: 'Spot cleaning concentrates abrasion in a small area. The treated patch may reflect light differently from the surrounding paint and look dull or hazy.',
    },
  ],

  calloutLabel: 'Why It Feels Safe',
  calloutBody: [
    'The pad feels soft and works with water, so it is easy to treat it like an ordinary sponge. Its fine foam structure still cleans by rubbing at the surface.',
    'That action is useful on hard household materials. On a vehicle body, it can change the paint’s gloss, and Mr. Clean’s directions specifically exclude vehicle bodies.',
  ],

  sources: [
    {
      publisher: 'Mr. Clean',
      title: 'How to Get Scuff Marks off Hardwood Floors',
      url: 'https://www.mrclean.com/en-us/how-to/floors/swipe-away-scuff-marks',
      kind: 'manufacturer',
    },
    {
      publisher: 'BASF',
      title: 'Basotect® (Melamine Resin Foam)',
      url: 'https://plastics-rubber.basf.com/global/en/performance_polymers/products/basotect',
      kind: 'manufacturer',
    },
    {
      publisher: 'Mazda USA',
      title: 'Maintaining the Finish',
      url: 'https://www.mazdausa.com/static/manuals/2024/cx-5/contents/07040101.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Reviewed against Mr. Clean’s vehicle-body warning, BASF’s melamine-foam abrasion guidance, and Mazda’s paint-care instructions.',
};
