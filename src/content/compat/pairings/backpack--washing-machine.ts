import type { Pairing } from '../types';

/**
 * Backpack in Washing Machine.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const backpackInWashingMachine: Pairing = {
  subjectSlug: 'backpack',
  subjectName: 'Backpack',
  subjectKind: 'Bag',
  subjectNote: 'Wearable bag with straps and compartments',

  relation: 'washed-in',

  targetSlug: 'washing-machine',
  targetName: 'Washing Machine',
  targetKind: 'Appliance',
  targetNote: 'Motorized appliance for washing laundry',

  eyebrow: 'Laundry · Bags & Gear',
  h1: 'Can I Put a Backpack in the Washing Machine?',
  seoTitle: 'Can Backpacks Go in a Washing Machine? | Can I Use It With',
  metaDescription:
    'Usually no. Machine-wash a backpack only when its care label or maker allows it and your washer manual accepts the load; otherwise spot clean or hand wash.',

  verdict: 'risky',
  shortAnswer:
    'Usually no. Put a backpack in the washer only when its care label or manufacturer specifically permits machine washing, then follow those directions and your washer manual. If the label says hand wash or do not wash, or you cannot find instructions for the exact pack, spot clean or hand wash instead.',

  mainRisk: 'Torn straps',
  damages: 'Backpack or washer',
  alternative: 'Spot or hand wash',

  conditionsOk: [
    'The sewn-in care label or current manufacturer instructions specifically allow machine washing.',
    'Remove the contents and every detachable part the backpack maker tells you to remove.',
    'Use the cycle, water setting, detergent, spin and drying method specified for that backpack.',
    'Follow the washer manual for loading, securing zippers and handling water-resistant items.',
  ],
  conditionsNever: [
    'Never machine-wash a backpack labeled hand wash only, do not wash or spot clean only.',
    'Do not assume nylon or polyester fabric makes the whole backpack machine-washable.',
    'Do not wash a framed or reinforced pack unless its maker approves the exact structure and explains what to remove.',
    'Do not wash a waterproof or water-resistant backpack when the washer manual prohibits those items.',
    'Do not leave long straps, loose buckles or dangling hardware free to catch inside the machine.',
  ],

  mechanisms: [
    {
      title: 'Straps can snag',
      body: 'Agitation moves straps, buckles and zipper pulls against the drum or agitator. A caught strap can stretch, tear or pull away from the bag.',
    },
    {
      title: 'Coatings take abrasion',
      body: 'Machine movement repeatedly rubs the fabric and any protective coating. On coated packs, this can shorten fabric life or reduce water resistance.',
    },
    {
      title: 'Water shifts the load',
      body: 'A bulky or water-resistant bag can become an uneven load during spin. The washer may vibrate or bounce hard enough to damage the tub.',
    },
  ],

  calloutLabel: 'Fabric Is Not Enough',
  calloutBody: [
    'Many backpacks look like ordinary nylon or polyester laundry, so the outer fabric seems to settle the question. The wash decision also depends on attached straps, fixed reinforcements, padding, trim and protective coatings.',
    'Manufacturer instructions split sharply. PAX provides a machine-wash procedure for specified packs after removable reinforcements come out, while JanSport and deuter direct owners to hand or spot clean. Read the instructions for the exact bag, then check the washer manual if the pack is water-resistant or unusually rigid.',
  ],

  sources: [
    {
      publisher: 'deuter',
      title: 'Cleaning Your Backpack',
      url: 'https://www.deuter.com/us-en/advice/how-to-clean-a-backpack/',
      kind: 'manufacturer',
    },
    {
      publisher: 'JanSport',
      title: 'How to Clean a School Backpack',
      url: 'https://www.jansport.com/pages/how-to-clean-a-jansport',
      kind: 'manufacturer',
    },
    {
      publisher: 'PAX',
      title: 'PAX Cleaning and Maintenance Hints',
      url: 'https://www.pax-bags.com/fileadmin/user_upload/PAX-Wasch-Pflege-Hinweise-A4-EN-0122-1.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'Sorting and Loading Your Front Load Washer',
      url: 'https://www.lg.com/us/support/help-library/sorting-and-loading-your-front-load-washer-CT10000012-20151521334964',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed backpack care guidance from JanSport, deuter and PAX plus LG washer guidance, focusing on labels, structure, coatings, straps and spin balance.',
};
