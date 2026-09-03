import type { Pairing } from '../types';

/**
 * Ceramic Cookware on Induction Cooktop.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const ceramicCookwareOnInductionCooktop: Pairing = {
  subjectSlug: 'ceramic-cookware',
  subjectName: 'Ceramic Cookware',
  subjectKind: 'Cookware',
  subjectNote: 'Pure ceramic or ceramic-coated cookware',

  relation: 'on',

  targetSlug: 'induction-cooktop',
  targetName: 'Induction Cooktop',
  targetKind: 'Appliance',
  targetNote: 'Magnetic glass-top cooking appliance',

  eyebrow: 'Kitchen · Cookware Compatibility',
  h1: 'Can I Use Ceramic Cookware on an Induction Cooktop?',
  seoTitle: 'Ceramic Cookware and Induction Compatibility | Can I Use It With',
  metaDescription:
    'Yes, if the ceramic cookware has a magnetic induction base. Pure ceramic will not heat directly, and adapter disks are allowed only when the cooktop manual permits them.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the pan is labeled induction-compatible or a magnet sticks to its base. Pure ceramic cookware with no metal core will not heat directly. Check several points on the base, and use an adapter disk only if the cookware maker and your cooktop manual both allow it.',

  mainRisk: 'No heating',
  damages: 'Glass cooktop',
  alternative: 'Induction-ready ceramic cookware',

  conditionsOk: [
    'Use cookware marked as induction-compatible, and confirm that its base meets the cooktop manual’s size requirements.',
    'If the markings are missing, test several points on the flat underside with a magnet.',
    'Center the pan on a cooking zone that matches the magnetic area of its base.',
    'Keep the base clean, dry and smooth, and lift the pan when moving it.',
  ],
  conditionsNever: [
    'Do not expect pure ceramic or clay cookware with no metal core to activate an induction zone.',
    'Do not assume every ceramic-coated pan is induction-ready; compatibility depends on the construction underneath the coating.',
    'Never use an adapter disk unless the cooktop manual explicitly permits one.',
    'Do not rely on a magnet sticking to one small spot as proof that the whole pan will heat evenly.',
    'Do not drag cookware with a rough base across the glass surface.',
  ],

  mechanisms: [
    {
      title: 'Magnetic Base Creates Heat',
      body: 'An induction coil creates a changing magnetic field beneath the glass. The field heats a ferromagnetic layer in the cookware base; ceramic by itself does not respond.',
    },
    {
      title: 'Base Area Sets Performance',
      body: 'Pan detection responds to the magnetic footprint on the underside. If that area is much smaller than the pan, the zone may not recognize it or only part of the base may heat well.',
    },
    {
      title: 'Adapter Transfers Heat',
      body: 'An adapter disk becomes the magnetic pan and transfers heat by contact to the ceramic cookware above it. This indirect setup is model-specific, and some cooktop manuals prohibit adapter plates.',
    },
  ],

  calloutLabel: 'Ceramic Glass Confusion',
  calloutBody: [
    'Many induction cooktops have a ceramic-glass surface. That describes the top panel, not the kind of cookware the induction coil can heat.',
    'The pan still needs a ferromagnetic base. A ceramic coating on the inside or outside says nothing about that base, so check the individual product rather than matching the word “ceramic” on the pan to the cooktop surface.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'Induction Compatible Cookware',
      url: 'https://producthelp.whirlpool.com/Cooking/Cooktops/Product_Info/Cooktop_Product_Assistance/Induction_Compatible_Cookware',
      kind: 'manufacturer',
    },
    {
      publisher: 'Our Place',
      title: 'Induction Cookware: Induction Compatible Pots & Pans',
      url: 'https://fromourplace.com/collections/induction-cookware',
      kind: 'manufacturer',
    },
    {
      publisher: 'Xtrema',
      title: 'Can I cook with my Xtrema on an Induction Stove?',
      url: 'https://support.xtrema.com/support/solutions/articles/43000477302-can-i-cook-with-my-xtrema-on-an-induction-stove-',
      kind: 'manufacturer',
    },
    {
      publisher: 'Bosch',
      title: 'Use and Care Manual NIT5663UC',
      url: 'https://media3.bosch-home.com/Documents/9002019891_D.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Compatibility reviewed against current Whirlpool and Bosch induction guidance and official Our Place and Xtrema cookware documentation.',
};
