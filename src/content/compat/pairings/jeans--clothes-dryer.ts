import type { Pairing } from '../types';

/**
 * Jeans in Clothes Dryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const jeansInClothesDryer: Pairing = {
  subjectSlug: 'jeans',
  subjectName: 'Jeans',
  subjectKind: 'Garment',
  subjectNote: 'Denim pants, usually cotton or cotton-blend',

  relation: 'dried-in',

  targetSlug: 'clothes-dryer',
  targetName: 'Clothes Dryer',
  targetKind: 'Appliance',
  targetNote: 'Tumbling appliance that dries clothes',

  eyebrow: 'Laundry · Denim Care',
  h1: 'Can I Put Jeans in a Clothes Dryer?',
  seoTitle: 'Can Jeans Go in a Clothes Dryer? | Can I Use It With',
  metaDescription:
    'Yes, if the care label allows tumble drying. Use the listed heat setting; low or no heat helps limit shrinkage and fading.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the care label allows tumble drying. Use the temperature listed on the label; low or no heat helps preserve fit and color. If the label says line dry, hang dry, dry flat, or do not tumble dry, keep the jeans out of the dryer.',

  mainRisk: 'Shrinkage and fading',
  damages: 'Fit and color',
  alternative: 'Air-dry the jeans',

  conditionsOk: [
    'Read the sewn-in care label and tumble dry only when it permits machine drying.',
    'Use the labeled setting; choose low or no heat when allowed and preserving the fit and color is the priority.',
    'Turn dark, new, or dye-unstable jeans inside out before drying to reduce dye transfer to the drum.',
    'Remove the jeans while slightly damp and hang them to finish drying if you want to limit heat exposure.',
  ],
  conditionsNever: [
    'Do not tumble dry jeans labeled line dry, hang dry, dry flat, or do not tumble dry.',
    'Do not use a hotter setting than the care label allows.',
    'Do not assume raw or stretch denim can handle high heat; follow the instructions for that pair.',
    'Do not machine-dry jeans contaminated with gasoline, dry-cleaning solvents, or cooking oil, even after washing, because residues can ignite.',
  ],

  mechanisms: [
    {
      title: 'Heat changes the fibers',
      body: 'Dryer heat can shrink, fade, or yellow denim. Direct heat can also damage stretch fibers in jeans that contain elastane or similar materials.',
    },
    {
      title: 'Dye meets the drum',
      body: 'Some blue denim contains unstable dye that can transfer to the drum during tumbling. Turning the jeans inside out reduces contact between the dyed outer face and the drum.',
    },
  ],

  calloutLabel: 'The Sturdy Denim Myth',
  calloutBody: [
    'Denim feels heavy, so high heat can seem like the obvious setting. That assumption misses the pair’s fiber blend and finish; raw denim and stretch denim may react differently from preshrunk all-cotton jeans.',
    'The care label applies to the finished garment, including zippers, trim, and blended fibers. One pair may allow tumble drying while another calls for air drying, so the label on the jeans decides.',
  ],

  sources: [
    {
      publisher: 'Federal Trade Commission',
      title: 'Clothes Captioning: Complying with the Care Labeling Rule',
      url: 'https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule',
      kind: 'government',
    },
    {
      publisher: 'Levi Strauss & Co.',
      title: 'Denim care and washing',
      url: 'https://help.levi.com/hc/en-us/articles/15463553339917-Denim-care-and-washing',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'How to Wash Jeans - Denim Care Tips',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-to-wash-jeans.html?fmt=png-alpha',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool Corporation',
      title: 'Dryer User Instructions',
      url: 'https://www.whirlpool.com/content/dam/global/documents/200708/owners-manual-W10150658-RevA.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against FTC care-label rules, Levi’s and Whirlpool denim-care guidance, and Whirlpool dryer instructions on heat and dye transfer.',
};
