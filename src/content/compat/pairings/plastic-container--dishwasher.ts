import type { Pairing } from '../types';

/**
 * Plastic Container in Dishwasher.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const plasticContainerInDishwasher: Pairing = {
  subjectSlug: 'plastic-container',
  subjectName: 'Plastic Container',
  subjectKind: 'Container',
  subjectNote: 'Plastic vessel for storing food',

  relation: 'washed-in',

  targetSlug: 'dishwasher',
  targetName: 'Dishwasher',
  targetKind: 'Appliance',
  targetNote: 'Automatic appliance for washing dishes',

  eyebrow: 'Kitchen · Food Containers',
  h1: 'Can I Put a Plastic Container in the Dishwasher?',
  seoTitle: 'Plastic Containers in Dishwashers: Safe Use | Can I Use It With',
  metaDescription:
    'Yes, if the container is dishwasher-safe. Follow top-rack-only directions, secure light parts, and hand-wash plastic with no cleaning instructions.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the container or its manufacturer says it is dishwasher-safe. Put top-rack-only items on the upper rack and secure lids or light pieces so they cannot fall through. If there is no dishwasher guidance, hand-wash it; a microwave-safe mark alone is not approval for dishwasher use.',

  mainRisk: 'Warping or melting',
  damages: 'The container',
  alternative: 'Hand-wash unmarked plastic',

  conditionsOk: [
    'The base, lid, and any removable seal are each marked dishwasher-safe or covered by the manufacturer’s instructions.',
    'Any top-rack-only pieces stay on the upper rack.',
    'Lightweight parts fit securely between tines or in the dishwasher’s small-item holder.',
    'The open side faces down at an angle without blocking a spray arm.',
  ],
  conditionsNever: [
    'Do not put a container with no dishwasher-safe marking or manufacturer guidance in the dishwasher.',
    'Do not treat a microwave-safe mark as dishwasher approval.',
    'Do not place a top-rack-only base, lid, or seal on the lower rack.',
    'Do not leave lightweight pieces loose enough to fall through the rack or block a spray arm.',
    'Do not use a heated-dry or high-temperature option if the container’s care instructions rule it out.',
  ],

  mechanisms: [
    {
      title: 'Heat softens the plastic',
      body: 'Hot wash water and heated drying can soften plastic that is not rated for those conditions. Pressure from tines or heavier dishes can then leave the container warped.',
    },
    {
      title: 'Spray moves light pieces',
      body: 'Water jets can shift a loose container or lid. A piece that falls through the rack may block a spray arm or melt if it lands on an exposed heating element.',
    },
  ],

  calloutLabel: 'Microwave-Safe Is Separate',
  calloutBody: [
    'Microwave-safe directions cover reheating under the container maker’s instructions. They do not establish that the plastic can handle dishwasher detergent, drying heat, or a lower-rack position.',
    'Dishwasher limits can also differ by part. Check the base, lid, and removable seal separately, then follow any top-rack-only wording.',
  ],

  sources: [
    {
      publisher: 'NSF',
      title: 'Food Storage Containers',
      url: 'https://www.nsf.org/consumer-resources/articles/food-storage-containers',
      kind: 'standards_body',
    },
    {
      publisher: 'Whirlpool',
      title: 'How to Load a Dishwasher Properly',
      url: 'https://www.whirlpool.com/blog/kitchen/proper-way-to-load-a-dishwasher.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'Warping/Distortion of Plastics',
      url: 'https://producthelp.whirlpool.com/Dishwashers/Dishwasher/Wash_Performance/Plastics/Warping%2F%2FDistortion_of_Plastics',
      kind: 'manufacturer',
    },
    {
      publisher: 'Rubbermaid',
      title: 'EasyFindLids Food Storage Container Set with SilverShield Antimicrobial Product Protection',
      url: 'https://www.rubbermaid.com/food-storage/everyday-use-containers/easyfindlids/easyfindlids-food-storage-container-set-with-silvershield-antimicrobial-product-protection/SAP_2135630.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed NSF guidance and current Whirlpool and Rubbermaid instructions on labeling, top-rack placement, heated drying, and separate limits for bases and lids.',
};
