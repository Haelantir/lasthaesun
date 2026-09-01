import type { Pairing } from '../types';

/**
 * Wool Sweater in Clothes Dryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const woolSweaterInClothesDryer: Pairing = {
  subjectSlug: 'wool-sweater',
  subjectName: 'Wool Sweater',
  subjectKind: 'Garment',
  subjectNote: 'Knitted garment containing wool',

  relation: 'in',

  targetSlug: 'clothes-dryer',
  targetName: 'Clothes Dryer',
  targetKind: 'Appliance',
  targetNote: 'Machine that tumbles clothes dry',

  eyebrow: 'Laundry · Wool Care',
  h1: 'Can I Put a Wool Sweater in the Clothes Dryer?',
  seoTitle: 'Can a Wool Sweater Go in the Dryer? | Can I Use It With',
  metaDescription:
    'Only if the care label allows tumble drying. Otherwise, reshape the wool sweater and dry it flat to avoid permanent felting, shrinkage, and distortion.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only when the sweater’s care label specifically allows tumble drying. Follow the listed cycle and heat setting; Woolmark-approved garments with a tumble-dry claim can use low heat or a wool/delicate setting. If the label says dry flat, says not to tumble dry, or gives no dryer permission, keep the sweater out and dry it flat.',

  mainRisk: 'Felting and shrinkage',
  damages: 'The sweater',
  alternative: 'Reshape and dry flat',

  conditionsOk: [
    'The care label explicitly allows tumble drying.',
    'The selected heat and cycle match every drying limit on the label.',
    'For a Woolmark-approved garment, use low heat or the wool/delicate setting specified in its care guidance.',
    'If the sewn-in label is missing, the manufacturer’s instructions for that exact sweater confirm tumble drying is allowed.',
  ],
  conditionsNever: [
    'Do not tumble dry a sweater labeled “Dry flat” or “Do not tumble dry.”',
    'Do not assume “machine washable” also means dryer-safe.',
    'Do not treat “superwash” as permission to use a clothes dryer.',
    'Do not use a hotter or more vigorous cycle than the care label permits.',
    'Do not put a hand-wash-only or dry-clean-only sweater through a household tumble-dry cycle.',
  ],

  mechanisms: [
    {
      title: 'Wool scales lock together',
      body: 'Wool fibers have microscopic surface scales. Heat and moisture can raise them, while tumbling makes the fibers interlock and compact into dense felt; the resulting shrinkage can be irreversible.',
    },
    {
      title: 'Treatments reduce scale locking',
      body: 'Superwash and other shrink-resistant processes modify or mask the scales so fibers slide more freely and resist felting. This supports machine washing, but dryer compatibility still depends on the finished sweater’s drying instructions.',
    },
  ],

  calloutLabel: 'The Machine-Washable Trap',
  calloutBody: [
    '“Machine washable” and “superwash” describe resistance to felting during machine washing. Superwash treatment changes the wool fiber surface so its scales are less likely to lock together, but it does not by itself establish a safe dryer cycle for the finished sweater.',
    'Drying has its own care instruction. The label covers the whole garment, including its knit, seams, dyes, and trim, so a tumble-dry claim matters even when the wool fiber has received shrink-resistant treatment.',
  ],

  sources: [
    {
      publisher: 'Federal Trade Commission',
      title: 'Clothes Captioning: Complying with the Care Labeling Rule',
      url: 'https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule',
      kind: 'government',
    },
    {
      publisher: 'The Woolmark Company',
      title: 'Tumble drying wool',
      url: 'https://www.woolmark.com/care/tumble-drying-wool/',
      kind: 'industry',
    },
    {
      publisher: 'The Woolmark Company',
      title: 'Machine Washable Wool',
      url: 'https://www.woolmark.com/industry/product-development/processing-innovations/machine-washable-wool/',
      kind: 'industry',
    },
    {
      publisher: 'The Woolmark Company',
      title: 'How to dry a wool sweater',
      url: 'https://www.woolmark.com/care/how-to-dry-wool-sweater/',
      kind: 'industry',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed for wool-sweater dryer compatibility using FTC care-label requirements and Woolmark guidance on tumble drying, flat drying, felting, and superwash treatment.',
};
