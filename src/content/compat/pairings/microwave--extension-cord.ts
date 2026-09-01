import type { Pairing } from '../types';

/**
 * Microwave plugged into Extension Cord.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const microwavePluggedIntoExtensionCord: Pairing = {
  subjectSlug: 'microwave',
  subjectName: 'Microwave',
  subjectKind: 'Appliance',
  subjectNote: 'High-power appliance for heating food',

  relation: 'plugged-into',

  targetSlug: 'extension-cord',
  targetName: 'Extension Cord',
  targetKind: 'Cord',
  targetNote: 'Portable cord that extends outlet reach',

  eyebrow: 'Kitchen · Electrical Safety',
  h1: 'Can I Plug a Microwave into an Extension Cord?',
  seoTitle: 'Microwave Extension Cord Safety | Can I Use It With',
  metaDescription:
    'Avoid it unless your microwave’s manual explicitly allows it. Plug the microwave directly into a grounded wall outlet on the circuit specified by the manufacturer.',

  verdict: 'risky',
  shortAnswer:
    'Avoid using an extension cord unless your microwave’s manual explicitly permits one. Plug the microwave directly into a properly grounded wall outlet and follow the manual’s circuit requirements. Some manufacturers allow a correctly rated grounding cord under specific conditions, while others prohibit extension cords outright.',

  mainRisk: 'Fire or shock',
  damages: 'Cord and outlet',
  alternative: 'Nearby grounded wall outlet',

  conditionsOk: [
    'The microwave’s own manual explicitly permits an extension cord.',
    'The cord is a listed, three-wire grounding appliance cord rated at least as high as the microwave’s electrical rating.',
    'The extension cord powers only the microwave and plugs into a properly grounded wall outlet.',
    'The cord stays exposed and cannot be pinched, pulled or tripped over.',
  ],
  conditionsNever: [
    'Never use an extension cord when the microwave’s manual says not to.',
    'Never use a two-wire cord, an adapter or a plug with the grounding prong removed.',
    'Never use a cord rated below the microwave’s electrical requirements.',
    'Never power other devices from the same extension cord.',
    'Never use a damaged or hot cord, or route it under rugs, furniture or through a doorway.',
  ],

  mechanisms: [
    {
      title: 'Current heats the cord',
      body: 'A microwave draws substantial current while heating. An undersized or overloaded cord can build up heat in its conductors and insulation.',
    },
    {
      title: 'Grounding may be lost',
      body: 'Microwaves use a three-prong grounding plug. A two-wire cord, adapter or missing ground prong removes the intended fault-current path and raises the risk of electric shock.',
    },
    {
      title: 'Voltage can drop',
      body: 'A long or undersized cord can reduce the voltage reaching the microwave under load. Manufacturer guidance notes possible light flickering, blower changes and longer cooking times.',
    },
  ],

  calloutLabel: 'Why ratings aren’t enough',
  calloutBody: [
    'A heavy-duty label does not make an extension cord acceptable for every microwave. Manufacturer instructions differ. Whirlpool manuals may prohibit extension cords, while GE Appliances permits them only when the grounding, rating and placement requirements are met.',
    'The circuit matters too. An extension cord does not create the separate or dedicated circuit specified by some microwave manufacturers, and it cannot correct an ungrounded or overloaded outlet. If the factory cord cannot reach, the usual manufacturer recommendation is to have a suitable outlet installed nearby.',
  ],

  sources: [
    {
      publisher: 'Whirlpool Corporation',
      title: 'Microwave Hood Combination Use and Care Guide',
      url: 'https://www.whirlpool.com/content/dam/global/documents/202211/owners-manual-w11603630-revB.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'GE Appliances',
      title: 'Microwave - Use of Extension Cords',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=18836',
      kind: 'manufacturer',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Household Extension Cords Can Cause Fires',
      url: 'https://www.cpsc.gov/s3fs-public/5032.pdf',
      kind: 'government',
    },
    {
      publisher: 'Electrical Safety Foundation International',
      title: 'Don’t Overload Your Home',
      url: 'https://www.esfi.org/dont-overload-your-home/',
      kind: 'industry',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed manufacturer, CPSC and electrical-safety guidance on microwave circuits, grounding, cord ratings, voltage drop and extension-cord overheating.',
};
