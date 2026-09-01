import type { Pairing } from '../types';

/**
 * Down Comforter in Clothes Dryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const downComforterInClothesDryer: Pairing = {
  subjectSlug: 'down-comforter',
  subjectName: 'Down Comforter',
  subjectKind: 'Bedding',
  subjectNote: 'Down-filled bed covering',

  relation: 'dried-in',

  targetSlug: 'clothes-dryer',
  targetName: 'Clothes Dryer',
  targetKind: 'Appliance',
  targetNote: 'Tumble dryer for wet laundry',

  eyebrow: 'Laundry · Bedding',
  h1: 'Can I Put a Down Comforter in the Clothes Dryer?',
  seoTitle: 'Drying a Down Comforter Safely | Can I Use It With',
  metaDescription:
    'Yes, if the label allows tumble drying and the drum is roomy. Use the listed heat, reposition the comforter, and dry the down completely to prevent mildew.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the sewn-in care label allows tumble drying and the comforter can move freely in the drum. Use the label’s heat setting; low heat is common, but the exact instruction controls. Dry it alone, pause to loosen and reposition it, then continue until the down is fully dry with no damp clumps. Use an oversized commercial dryer or another label-approved method if your dryer is too small or its manual excludes comforters.',

  mainRisk: 'Mold and mildew',
  damages: 'The comforter',
  alternative: 'Oversized commercial dryer',

  conditionsOk: [
    'The sewn-in care label permits tumble drying, and you follow its listed heat and cycle.',
    'The drum is large enough for the comforter to tumble, unfold, and change position.',
    'Dry the comforter by itself, pausing to shake it out and expose damp sections.',
    'Continue until the inner fill, corners, and seams are fully dry with no wet clumps.',
  ],
  conditionsNever: [
    'Never use a dryer if the comforter label or appliance manual rules out tumble drying this item.',
    'Never pack it into a drum where it stays compressed and cannot unfold.',
    'Never select a hotter setting than the care label allows, even if the dryer’s Bedding cycle defaults higher.',
    'Never trust one completed sensor cycle without opening the comforter and checking its center.',
    'Never use or store it while the down is damp; retained moisture can lead to mold and mildew.',
  ],

  mechanisms: [
    {
      title: 'Bundling Traps Moisture',
      body: 'A bulky comforter can roll into a tight ball as the drum turns. The exposed layers dry first while folded inner sections remain damp.',
    },
    {
      title: 'Wet Down Clumps',
      body: 'Moist down clusters stick together and lose loft. Shaking the comforter and allowing free tumbling separates the fill so drying air can move through it.',
    },
    {
      title: 'Dampness Supports Mildew',
      body: 'Moisture left inside the filling can support mold and mildew during use or storage. A dry outer shell can hide damp down in the center.',
    },
  ],

  calloutLabel: 'The Cycle-Name Trap',
  calloutBody: [
    'The dryer’s Bedding or Bulky cycle may look like automatic approval for any comforter. It only describes a dryer program. It does not override the sewn-in care label or guarantee that the drum can handle the item.',
    'Check both instructions before loading. Manufacturer guidance commonly calls for low or no heat, but the comforter’s own label controls because fabrics and construction differ. If the item cannot open and tumble freely, move it to an oversized commercial dryer or use another care-label-approved method.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'How to Wash a Comforter Without It Getting Lumpy',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-to-wash-a-comforter.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'LG Electronics',
      title: 'Owner’s Manual: Dryer (DLHX4072)',
      url: 'https://www.lg.com/us/support/products/documents/DLHX4072W.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'Drying Function - All-In-One Washer Dryer',
      url: 'https://producthelp.whirlpool.com/Laundry/All-In-One_Washer_Dryer/Control_Panel_Operation/Home_Button/Drying_Function_-_All-In-One_Washer_Dryer',
      kind: 'manufacturer',
    },
    {
      publisher: 'IDFL Laboratory and Institute',
      title: 'Care Label — Down and Feather Products',
      url: 'https://www.idfl.com/wp-content/uploads/2021/05/IDFL_Info_-_Care_Label_Down__Feather_Products.pdf',
      kind: 'industry',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against Whirlpool dryer support, an LG dryer owner’s manual, and IDFL guidance on care labels, drum space, bundling, and complete drying.',
};
