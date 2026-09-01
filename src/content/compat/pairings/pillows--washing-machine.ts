import type { Pairing } from '../types';

/**
 * Pillows in Washing Machine.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const pillowsInWashingMachine: Pairing = {
  subjectSlug: 'pillows',
  subjectName: 'Pillows',
  subjectKind: 'Bedding',
  subjectNote: 'Soft filled cushions for sleeping',

  relation: 'in',

  targetSlug: 'washing-machine',
  targetName: 'Washing Machine',
  targetKind: 'Appliance',
  targetNote: 'Automatic appliance for washing laundry',

  eyebrow: 'Laundry · Bedding',
  h1: 'Can I Put Pillows in a Washing Machine?',
  seoTitle: 'Washing Pillows Safely in a Washer | Can I Use It With',
  metaDescription:
    'Yes, if the care label allows machine washing. Polyester, down, and feather pillows vary; use the labeled cycle and dry the filling completely.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only if the care label says the whole pillow is machine washable and your washer manual allows bulky bedding. Many polyester, down, and feather pillows qualify; others are spot-clean or dry-clean only. Do not machine-wash a memory-foam insert, and do not use any pillow until the center is completely dry.',

  mainRisk: 'Fill damage',
  damages: 'The pillow',
  alternative: 'Spot-clean or dry-clean',

  conditionsOk: [
    'The care label says the entire pillow is machine washable; a washable cover alone does not make the insert washable.',
    'The pillow fits with room to move, and the load is balanced in the way your washer manual specifies.',
    'You follow the pillow label and washer guide for the cycle, water temperature, detergent, and rinsing.',
    'You dry it by the labeled method and confirm that the filling is dry at the center before use.',
  ],
  conditionsNever: [
    'Do not machine-wash any pillow marked spot-clean only, dry-clean only, or cover only.',
    'Do not put a memory-foam insert in the washer; clean its removable cover separately if the label allows.',
    'Do not wash a pillow if its shell or seams are damaged or filling is escaping.',
    'Do not cram an oversized pillow into the drum or run a load that cannot stay balanced.',
    'Do not use or store a pillow that is still damp inside.',
  ],

  mechanisms: [
    {
      title: 'Agitation shifts the fill',
      body: 'Water and drum movement squeeze and redistribute the filling. In a pillow that is not washer-safe, the fill can clump or foam can break apart; a weak seam can also release down or fibers.',
    },
    {
      title: 'Wet pillows unbalance loads',
      body: 'A pillow holds a large, uneven mass of water. If the drum is crowded or poorly balanced, the washer may struggle to spin it evenly.',
    },
    {
      title: 'The center dries last',
      body: 'The cover can dry before the center. Moisture trapped in the fill can lead to mildew, so the pillow needs to be dry all the way through.',
    },
  ],

  calloutLabel: 'Why Labels Differ',
  calloutBody: [
    'Two pillows can look identical and still have different cleaning rules. Fill type is a clue, but the shell, seams, internal construction, and manufacturer’s care instructions decide whether the whole pillow can enter the washer.',
    'Drying is where many washable pillows still go wrong. The outer fabric may feel dry while the center retains moisture, particularly with feather or down fill. Use the drying method on the care label and keep going until the center is dry.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'How to Wash Pillows for a Clean Night’s Sleep',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-to-wash-pillows.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung',
      title: 'Care for Your Bedding Items With Your Samsung Washer and Dryer',
      url: 'https://www.samsung.com/us/support/answer/ANS10004803/',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'Use & Care Guide',
      url: 'https://www.whirlpool.com/content/dam/global/documents/201306/owners-manual-40033801.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Tempur-Pedic',
      title: 'Can I Wash My Pillow?',
      url: 'https://help.tempurpedic.com/hc/en-us/articles/4404702940695-Can-I-wash-my-pillow',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against Whirlpool, Samsung, and Tempur-Pedic guidance plus a Whirlpool use-and-care manual covering pillow washing, load balance, and drying.',
};
