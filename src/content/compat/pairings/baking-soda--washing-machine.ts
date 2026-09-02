import type { Pairing } from '../types';

/**
 * Baking Soda in Washing Machine.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const bakingSodaInWashingMachine: Pairing = {
  subjectSlug: 'baking-soda',
  subjectName: 'Baking Soda',
  subjectKind: 'Compound',
  subjectNote: 'Mild alkaline household powder',

  relation: 'in',

  targetSlug: 'washing-machine',
  targetName: 'Washing Machine',
  targetKind: 'Appliance',
  targetNote: 'Automatic appliance for washing clothes',

  eyebrow: 'Laundry · Additives & Washer Care',
  h1: 'Can I Use Baking Soda in a Washing Machine?',
  seoTitle: 'Using Baking Soda in a Washer Safely | Can I Use It With',
  metaDescription:
    'Yes, with limits. Put baking soda in the drum only when your washer manual allows it. Keep it out of dispensers and follow model guidance for tub cleaning.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. For a laundry load, use baking soda only if your washer manual allows it, and put the loose powder directly in the tub or drum rather than a dispenser. Keep using the detergent your washer requires, and follow its specific instructions for cleaning the empty machine.',

  mainRisk: 'Dispenser clog',
  damages: 'The dispenser',
  alternative: 'Washer-approved laundry booster',

  conditionsOk: [
    'Your washer manual permits baking soda or loose powdered laundry boosters.',
    'For a wash load, add it to the empty tub or drum before the clothes and put detergent in its labeled compartment.',
    'Stay within the amount allowed by the washer maker or the baking soda maker’s laundry directions.',
    'For deodorizing an empty washer, use baking soda only when the model’s care instructions allow it.',
  ],
  conditionsNever: [
    'Never put loose baking soda in the detergent, fabric-softener or bleach dispenser unless the model instructions specifically allow it there.',
    'Never use baking soda as a replacement for the detergent required by your washer.',
    'Never mix it with vinegar in the same cycle because the two neutralize each other and reduce their cleaning action.',
    'Never improvise a baking-soda tub-clean cycle when the instructions specify Self Clean, washer cleaner or bleach.',
    'Never leave visible powder in the door gasket, dispenser or pump-filter area; remove the residue and rinse the affected area.',
  ],

  mechanisms: [
    {
      title: 'Alkalinity changes wash water',
      body: 'Baking soda is mildly alkaline. In wash water, it can regulate pH and help detergent handle some odors and soil, but it does not replace laundry detergent.',
    },
    {
      title: 'Placement controls dissolution',
      body: 'Loose powder starts dissolving when wash water reaches it in the tub. Narrow dispenser passages can retain the powder and clog.',
    },
    {
      title: 'Cleaning cycles work differently',
      body: 'Self Clean and Tub Clean cycles reach areas that a normal laundry cycle may miss. Manufacturers specify the cleaner and placement by model, while the gasket and pump filter may still need separate cleaning.',
    },
  ],

  calloutLabel: 'Load or Machine?',
  calloutBody: [
    'Because baking soda is a common household cleaner, it is easy to treat every opening in a washer as interchangeable. Each opening has a different job. For a laundry load, manufacturers that allow loose baking soda direct it to the tub or drum while detergent remains in its own compartment.',
    'Cleaning the washer itself is a separate use. Self Clean and Tub Clean directions vary by model, and the gasket, dispenser and pump filter may require hands-on cleaning. A scoop in the drum does not clean every one of those areas.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: '5 Uses for Baking Soda in Laundry',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-to-use-baking-soda-in-laundry.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Maytag',
      title: 'How To Use Baking Soda in Laundry',
      url: 'https://www.maytag.com/blog/washers-and-dryers/how-to-use-baking-soda-in-laundry.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'LG Washer - How to Clean the Tub of Your LG Washing Machine',
      url: 'https://www.lg.com/us/support/help-library/lg-washer-how-to-tub-clean-front-load-and-top-load-washing-machines-CT10000010-20150635948425',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung Electronics America',
      title: 'How to clean your Samsung washer',
      url: 'https://www.samsung.com/us/support/answer/ANS10003197/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Laundry-load use, powder placement, tub-clean cycles, dispenser clogging, gasket residue and drain-filter maintenance checked against manufacturer guidance.',
};
