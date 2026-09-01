import type { Pairing } from '../types';

/**
 * Rubber-Backed Bath Mat in Clothes Dryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const rubberBackedBathMatInClothesDryer: Pairing = {
  subjectSlug: 'rubber-backed-bath-mat',
  subjectName: 'Rubber-Backed Bath Mat',
  subjectKind: 'Textile',
  subjectNote: 'Absorbent floor mat with rubber backing',

  relation: 'in',

  targetSlug: 'clothes-dryer',
  targetName: 'Clothes Dryer',
  targetKind: 'Appliance',
  targetNote: 'Tumbling appliance for drying laundry',

  eyebrow: 'Laundry · Bath Mats',
  h1: 'Can I Put a Rubber-Backed Bath Mat in the Clothes Dryer?',
  seoTitle: 'Rubber-Backed Bath Mats in the Dryer | Can I Use It With',
  metaDescription:
    'Yes, with limits: follow the mat’s care label and dryer manual. Use true no heat unless the mat specifically allows low heat; otherwise air-dry it.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only when the mat’s care label and your dryer manual allow it. Follow the more restrictive setting; some rubber-backed mats permit low heat, while dryer guidance often calls for a true no-heat Air Only cycle. If the label is missing or says to air-dry, keep the mat out of the dryer.',

  mainRisk: 'Melting or fire',
  damages: 'Backing and dryer',
  alternative: 'Air-dry as the label directs',

  conditionsOk: [
    'The care label explicitly permits tumble drying, and the dryer manual allows rubber-backed mats.',
    'Use the more restrictive instruction when the mat label and dryer manual differ.',
    'If directed to Air Only or No Heat, confirm that the selected cycle adds no heat.',
    'Load the mat loosely so it can tumble freely.',
  ],
  conditionsNever: [
    'Do not use a heated cycle unless the mat’s own label names an allowed heat setting.',
    'Do not assume a Low or Delicate cycle is the same as No Heat.',
    'Do not tumble-dry a mat labeled line dry, dry flat, or do not tumble dry.',
    'Do not override a dryer manual that prohibits items containing rubber.',
    'Do not guess when the care label is missing; air-dry the mat instead.',
  ],

  mechanisms: [
    {
      title: 'Heat changes the backing',
      body: 'Rubber and rubber-like backing materials are heat-sensitive. Heated drying can warp them, and some materials may melt or burn.',
    },
    {
      title: 'Airflow removes moisture',
      body: 'Air Only tumbles the mat while circulating room-temperature air. Moisture leaves without the heated air used by standard cycles.',
    },
    {
      title: 'Backing construction varies',
      body: 'The backing material and how it is attached differ by product. One mat may allow low heat while another requires no heat or drying outside the machine.',
    },
  ],

  calloutLabel: 'Low Heat Is Conditional',
  calloutBody: [
    '“Rubber-backed” is a broad description. A latex-backed IKEA mat and a thermoplastic-rubber Gorilla Grip mat both permit low-heat tumble drying, so the backing alone does not settle the question.',
    'Dryer guidance is more conservative because it covers many unknown rubber and rubber-like materials. Whirlpool directs rubber-backed mats to No Heat or Air Only, while GE warns that heat can make these materials melt or burn. The product label and dryer manual both matter.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'Laundry Settings: Washer and Dryer Cycles Explained',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-choose-laundry-cycles.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'GE Appliances',
      title: 'Dryers Minimize the Fire Hazard',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17926',
      kind: 'manufacturer',
    },
    {
      publisher: 'IKEA',
      title: 'BACKMÅRA Bath Mat, Black, 24x47"',
      url: 'https://www.ikea.com/us/en/p/backmara-bath-mat-black-80605680/',
      kind: 'manufacturer',
    },
    {
      publisher: 'Gorilla Grip',
      title: 'Chenille Bath Rug',
      url: 'https://gorillagrip.com/products/chenille-bath-rug',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed dryer guidance from Whirlpool and GE Appliances plus care instructions for latex- and rubber-backed bath mats from IKEA and Gorilla Grip.',
};
