import type { Pairing } from '../types';

/**
 * Memory Foam Pillow in Washing Machine.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const memoryFoamPillowInWashingMachine: Pairing = {
  subjectSlug: 'memory-foam-pillow',
  subjectName: 'Memory Foam Pillow',
  subjectKind: 'Bedding',
  subjectNote: 'Viscoelastic foam sleep pillow',

  relation: 'washed-in',

  targetSlug: 'washing-machine',
  targetName: 'Washing Machine',
  targetKind: 'Appliance',
  targetNote: 'Automatic washer with rotating drum',

  eyebrow: 'Bedroom · Pillow Care',
  h1: 'Can I Put a Memory Foam Pillow in the Washing Machine?',
  seoTitle: 'Can Memory Foam Pillows Go in the Washer? | Can I Use It With',
  metaDescription:
    'Only with label approval. Most memory foam cores should stay out of the washer; wash the removable cover or a pillow specifically approved for machine washing.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Only put the entire pillow in the washing machine when its care label or manufacturer instructions explicitly allow it. Most solid or contoured memory foam cores should stay out; remove and wash the cover instead, then spot-clean the foam as directed. Some shredded-memory-foam pillows are made for a specified machine cycle. If you cannot confirm that instruction for your model, do not wash the insert.',

  mainRisk: 'Foam breakdown',
  damages: 'Pillow core',
  alternative: 'Wash cover; spot-clean foam',

  conditionsOk: [
    'The whole pillow may go in only when its sewn-in care label or manufacturer instructions say the inner pillow is machine-washable.',
    'A removable outer cover may be machine-washed when its own label permits it, after the foam insert is removed.',
    'For an approved shredded-foam model, close or secure the inner liner exactly as the maker directs before washing.',
    'Follow the listed cycle and drying method, and do not use the pillow until the fill is dry throughout.',
  ],
  conditionsNever: [
    'Never treat a “machine-washable cover” claim as permission to wash the foam core.',
    'Never machine-wash a solid, molded, or layered foam insert marked “do not wash” or “spot clean only.”',
    'Never copy wash settings from another brand or a different pillow model.',
    'Never wring or twist an unapproved foam core to remove absorbed water.',
    'Never put a damp insert back in its cover or use it on the bed.',
  ],

  mechanisms: [
    {
      title: 'Water stays inside',
      body: 'Memory foam absorbs water through the insert, and a thick core can be difficult to dry completely. Moisture left inside can cause odor, mildew, or mold.',
    },
    {
      title: 'Agitation breaks foam',
      body: 'Wash and spin cycles repeatedly flex and compress the wet core. Foam can break apart or lose its shape, reducing the support the pillow was made to provide.',
    },
  ],

  calloutLabel: 'Washable cover confusion',
  calloutBody: [
    'The phrase “machine washable” often refers to the zip-off cover. Product care pages may describe a washable textile shell while separately telling you to keep the foam insert dry or spot-clean it.',
    'Shredded foam does not guarantee that the whole pillow can go in the washer. A few models have liners and fill designed for a specific wash-and-dry routine, while other shredded-foam pillows allow cover washing only. Approval must apply to the inner pillow itself.',
  ],

  sources: [
    {
      publisher: 'Tempur-Pedic',
      title: 'Can I wash my pillow?',
      url: 'https://help.tempurpedic.com/hc/en-us/articles/4404702940695-Can-I-wash-my-pillow',
      kind: 'manufacturer',
    },
    {
      publisher: 'Casper',
      title: 'Foam Pillow with Snow Technology',
      url: 'https://casper.com/products/foam-snow-pillow',
      kind: 'manufacturer',
    },
    {
      publisher: 'Coop Sleep Goods',
      title: 'Care Instructions',
      url: 'https://coopsleepgoods.com/pages/care',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'How to wash pillows for a clean night’s sleep',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-to-wash-pillows.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed current pillow and washer manufacturer guidance on foam-core restrictions, removable covers, moisture retention, agitation damage, and washable shredded-foam exceptions.',
};
