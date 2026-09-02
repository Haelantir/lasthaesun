import type { Pairing } from '../types';

/**
 * Cast Iron Pan on Induction Cooktop.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const castIronPanOnInductionCooktop: Pairing = {
  subjectSlug: 'cast-iron-pan',
  subjectName: 'Cast Iron Pan',
  subjectKind: 'Cookware',
  subjectNote: 'Heavy iron skillet or frying pan',

  relation: 'on',

  targetSlug: 'induction-cooktop',
  targetName: 'Induction Cooktop',
  targetKind: 'Appliance',
  targetNote: 'Magnetic glass-top cooking appliance',

  eyebrow: 'Kitchen · Cookware & Cooktops',
  h1: 'Can I Use a Cast Iron Pan on an Induction Cooktop?',
  seoTitle: 'Cast Iron on Induction Cooktops | Can I Use It With',
  metaDescription:
    'Yes, cast iron works on induction. Check the cooktop manual, use a smooth clean base, lift the pan, and heat it gradually to avoid scratches or pan damage.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Cast iron is magnetically compatible with induction, but use it only if your cooktop manual allows it and the base is smooth, flat, and clean. Set it down gently, lift it to move it, and raise the heat gradually. A rough base or fast high-power preheat can scratch the glass or stress the pan.',

  mainRisk: 'Glass scratches',
  damages: 'Cooktop or pan',
  alternative: 'Smooth-bottom enameled cast iron',

  conditionsOk: [
    'The cooktop manual permits cast iron, and the pan has a smooth, flat base.',
    'The pan bottom and cooktop surface are clean and dry before heating.',
    'The pan is centered on a cooking zone close to the size of its base.',
    'You handle it gently and raise the heat gradually according to the pan maker\'s instructions.',
  ],
  conditionsNever: [
    'Do not use the pan if your model\'s manual bars rough-bottom cast iron.',
    'Do not place a pan with burrs, raised rough spots, warping, or trapped grit on the glass.',
    'Do not slide, spin, or drag the pan across the cooktop.',
    'Do not drop the pan or set it down hard.',
    'Do not use maximum power or boost for preheating unless the cookware maker explicitly allows it.',
  ],

  mechanisms: [
    {
      title: 'Magnetic Pan Heating',
      body: 'The cooktop creates a changing magnetic field that acts on the iron. Induced electrical currents meet resistance and generate heat inside the pan.',
    },
    {
      title: 'Glass Surface Abrasion',
      body: 'A heavy pan with a rough base can trap grit against the ceramic glass. Sliding it can leave scratches, while a hard impact can damage the surface.',
    },
    {
      title: 'Uneven Thermal Stress',
      body: 'Induction can put heat into cast iron faster than it spreads through a cold pan. Starting at high power can create temperature differences that stress the iron and, in severe cases, crack it.',
    },
  ],

  calloutLabel: 'Glass Top Confusion',
  calloutBody: [
    'The phrase glass cooktop causes the confusion. Glass is the cooking surface; induction is the heating system. Cast iron is magnetic, so the induction field can heat it.',
    'Compatibility does not erase the surface-care rules. Rough cast iron can scratch ceramic glass, and some manufacturers advise against it. Manuals differ, so the model instructions and the condition of the pan base decide whether this specific pairing is acceptable.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'Induction Compatible Cookware',
      url: 'https://producthelp.whirlpool.com/Cooking/Cooktops/Product_Info/Cooktop_Product_Assistance/Induction_Compatible_Cookware',
      kind: 'manufacturer',
    },
    {
      publisher: 'Frigidaire',
      title: 'Ranges - What type of cookware do I use with Induction?',
      url: 'https://owner.frigidaire.com/support-articles/article/1847372-ranges-what-type-of-cookware-do-i-use-with-induction-',
      kind: 'manufacturer',
    },
    {
      publisher: 'Lodge Cast Iron',
      title: 'Can I Use Cast Iron on an Induction Cooktop?',
      url: 'https://www.lodgecastiron.com/blogs/story/can-i-use-cast-iron-induction-cooktop',
      kind: 'manufacturer',
    },
    {
      publisher: 'Bosch Home Appliances',
      title: 'Scratches on an induction or electric cooktop',
      url: 'https://www.bosch-home.com/us/owner-support/get-support/ceramic-hob-scratch',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed induction compatibility, pan detection, glass-surface care, and cast-iron heating guidance from cooktop and cookware manufacturers.',
};
