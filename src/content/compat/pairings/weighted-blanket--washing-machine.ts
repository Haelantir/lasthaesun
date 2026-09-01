import type { Pairing } from '../types';

/**
 * Weighted Blanket in Washing Machine.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const weightedBlanketInWashingMachine: Pairing = {
  subjectSlug: 'weighted-blanket',
  subjectName: 'Weighted Blanket',
  subjectKind: 'Bedding',
  subjectNote: 'Heavy blanket with weighted fill',

  relation: 'washed-in',

  targetSlug: 'washing-machine',
  targetName: 'Washing Machine',
  targetKind: 'Appliance',
  targetNote: 'Motorized washer with rotating drum',

  eyebrow: 'Laundry · Heavy Bedding',
  h1: 'Can I Put a Weighted Blanket in the Washing Machine?',
  seoTitle: 'Weighted Blankets in Washing Machines | Can I Use It With',
  metaDescription:
    'Sometimes. Machine-wash it only when the care label allows it and the washer can handle the blanket’s wet weight and bulk; otherwise use a commercial washer.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only when the care label permits machine washing and your washer can handle the blanket’s bulk and added water weight. Wash it alone using the settings on the label; if the limit is unclear or the blanket is cramped in the drum, use a commercial washer. Glass beads and plastic pellets can both appear in washable blankets, but the fill does not override the product’s care instructions.',

  mainRisk: 'Washer overload',
  damages: 'Washer and blanket',
  alternative: 'Commercial washer or spot cleaning',

  conditionsOk: [
    'The sewn-in care label explicitly permits machine washing.',
    'The washer’s manual or manufacturer guidance allows the blanket’s weight and bulk, including added water weight.',
    'The blanket sits loosely in the drum with room to move, and the load is spread evenly.',
    'You wash it alone using the listed cycle, water temperature, detergent, and drying instructions.',
  ],
  conditionsNever: [
    'Never machine-wash an insert labeled spot clean, hand wash, dry clean, or do not wash.',
    'Never load it when its weight exceeds your washer’s guidance or its bulk leaves no room to move.',
    'Never assume glass beads or plastic pellets make the whole blanket machine washable.',
    'Never add other laundry to a heavy weighted blanket unless the product instructions clearly permit it.',
    'Never substitute a hotter or harsher cycle for the care-label settings.',
  ],

  mechanisms: [
    {
      title: 'Water Adds Load',
      body: 'The blanket begins as a concentrated heavy load, and its fabric holds additional water during washing. If the total load is too high, the drum may not move it properly and cleaning performance falls.',
    },
    {
      title: 'Spin Shifts Mass',
      body: 'Water and weighted fill can settle toward one side as the drum accelerates. The concentrated mass can cause poor spin performance and strong vibration as the washer tries to rebalance it.',
    },
    {
      title: 'Stitching Holds the Fill',
      body: 'Agitation loads the quilted seams that keep beads or pellets in separate pockets. If the finished blanket was not built for machine washing, the fabric can wear and the fill can shift.',
    },
  ],

  calloutLabel: 'The Fill Material Trap',
  calloutBody: [
    'Fill material alone does not decide washability. Some glass-bead blankets permit a gentle machine wash, while others allow only the removable cover in the washer and label the weighted insert for spot cleaning.',
    'Plastic-pellet blankets also need their own care label. The shell, pocket stitching, blanket weight, and washer capacity control the decision, so a washable fill does not make every finished blanket washer-safe.',
  ],

  sources: [
    {
      publisher: 'Maytag',
      title: 'How to Wash a Weighted Blanket by Hand or Machine',
      url: 'https://www.maytag.com/blog/washers-and-dryers/how-to-wash-weighted-blanket.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung',
      title: 'The Best Laundry Load Size for Your Samsung Washing Machine and Dryer',
      url: 'https://www.samsung.com/us/support/answer/ANS10004802/',
      kind: 'manufacturer',
    },
    {
      publisher: 'The Oodie USA',
      title: 'Gray Weighted Blanket',
      url: 'https://us.theoodie.com/products/grey-oodie-weighted-blanket',
      kind: 'manufacturer',
    },
    {
      publisher: 'Tempur-Pedic',
      title: 'Tempur-Pedic Weighted Blanket',
      url: 'https://www.tempurpedic.com/bedding/tempur-pedic-weighted-blanket/v/3266/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current weighted-blanket care instructions and washing-machine load guidance from appliance and blanket manufacturers.',
};
