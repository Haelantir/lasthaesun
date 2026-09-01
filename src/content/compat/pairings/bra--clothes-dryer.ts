import type { Pairing } from '../types';

/**
 * Bra in Clothes Dryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const braInClothesDryer: Pairing = {
  subjectSlug: 'bra',
  subjectName: 'Bra',
  subjectKind: 'Garment',
  subjectNote: 'Supportive undergarment with elastic and cups',

  relation: 'in',

  targetSlug: 'clothes-dryer',
  targetName: 'Clothes Dryer',
  targetKind: 'Appliance',
  targetNote: 'Machine that tumble-dries washed clothes',

  eyebrow: 'Laundry · Delicates & Underwear',
  h1: 'Can I Put a Bra in the Clothes Dryer?',
  seoTitle: 'Drying Bras Safely in a Clothes Dryer | Can I Use It With',
  metaDescription:
    'Usually, air-dry bras. Use a clothes dryer only when the care label allows it and the dryer manual permits the bra’s padding and underwire.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Usually, air-dry it. Put a bra in the dryer only when its care label allows tumble drying and the dryer manual permits its padding and any metal reinforcement. Use the labeled cycle and heat setting; if either instruction is unclear, keep it out.',

  mainRisk: 'Loss of support',
  damages: 'Bra and dryer',
  alternative: 'Air dry away from heat',

  conditionsOk: [
    'The care label explicitly allows tumble drying, and you use the stated cycle and heat setting.',
    'Your dryer manual allows the bra’s construction, including any padding or metal reinforcement.',
    'Use a drying rack or garment bag for an underwire bra only when the dryer manual gives that method.',
    'Hooks and eyes are fastened, and the wire and seams are fully enclosed and intact.',
  ],
  conditionsNever: [
    'Never tumble dry a bra labeled line dry, dry flat, or do not tumble dry.',
    'Never use a hotter cycle than the care label permits.',
    'Never put metal-reinforced underwear directly in a dryer whose manual excludes it.',
    'Never put a bra with a loose or protruding wire in the drum.',
    'Never use heated drying on foam or rubber-like padding when the dryer manual calls for air-only drying or excludes it.',
  ],

  mechanisms: [
    {
      title: 'Heat weakens stretch fibers',
      body: 'Spandex in a band or strap is heat-sensitive. Repeated exposure can damage the fiber and reduce the recovery that keeps the bra snug.',
    },
    {
      title: 'Tumbling works wires loose',
      body: 'The rotating drum repeatedly flexes the bra and lets hooks or edges catch. If an underwire escapes its channel, it can tear fabric or damage the dryer.',
    },
    {
      title: 'Foam padding can overheat',
      body: 'If a bra contains foam rubber or similar padding, heated drying can make that material burn. Dryer manuals may require air-only drying or exclude it from the machine.',
    },
  ],

  calloutLabel: 'The Delicate-Cycle Assumption',
  calloutBody: [
    'A delicate or low-heat cycle sounds safe because a bra is small and lightweight. The care label still controls: line dry and dry flat are alternative drying instructions, even when the label does not also say do not tumble dry.',
    'Low heat leaves the drum’s mechanical action unchanged. An underwire can work loose during tumbling, so use a rack or garment bag only when the dryer manual offers that method; otherwise air-dry the bra.',
  ],

  sources: [
    {
      publisher: 'Federal Trade Commission',
      title: 'Clothes Captioning: Complying with the Care Labeling Rule',
      url: 'https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule',
      kind: 'government',
    },
    {
      publisher: 'ASTM International',
      title: 'ASTM Guide to Care Symbols',
      url: 'https://www.ftc.gov/system/files/documents/rules/care-labeling-textile-wearing-apparel-certain-piece-goods/astm_care_symbols_chart.pdf',
      kind: 'standards_body',
    },
    {
      publisher: 'Fisher & Paykel',
      title: 'Vented Clothes Dryer Installation Guide and User Guide',
      url: 'https://www.fisherpaykel.com/on/demandware.static/-/Sites-fpa-master-catalog/default/dw31f4ad61/InstallationManuals-FisherPaykelAU/FP-InstallGuide-DE6060M2-VentedDryer-0-AU-428118J.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'University of Georgia Cooperative Extension',
      title: 'Understand Your Fibers',
      url: 'https://site.extension.uga.edu/textiles/textile-basics/understand-your-fibers/',
      kind: 'academic',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed bra drying against FTC care-label guidance, an ASTM symbol chart, a current dryer manual, and university textile guidance on spandex heat sensitivity.',
};
