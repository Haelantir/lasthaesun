import type { Pairing } from '../types';

/**
 * Cast Iron Pan on Glass-Top Stove.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const castIronPanOnGlassTopStove: Pairing = {
  subjectSlug: 'cast-iron-pan',
  subjectName: 'Cast Iron Pan',
  subjectKind: 'Cookware',
  subjectNote: 'Heavy iron cooking pan',

  relation: 'on',

  targetSlug: 'glass-top-stove',
  targetName: 'Glass-Top Stove',
  targetKind: 'Appliance',
  targetNote: 'Stove with ceramic-glass cooking surface',

  eyebrow: 'Kitchen · Cooktops',
  h1: 'Can I Use a Cast Iron Pan on a Glass-Top Stove?',
  seoTitle: 'Using Cast Iron on a Glass-Top Stove Safely | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use cast iron only when the stove manual allows it, the base is smooth and flat, and you can lift rather than slide the pan.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use cast iron only if your stove’s manual allows it and the pan has a smooth, flat bottom. Set it down gently and lift it to move it; never drag or drop it. Choose another pan if the bottom is rough, warped, or ridged.',

  mainRisk: 'Surface damage',
  damages: 'Glass cooktop',
  alternative: 'Smooth-bottom stainless steel',

  conditionsOk: [
    'The stove’s owner manual permits cast iron cookware on its ceramic-glass surface.',
    'The pan has a smooth, flat base with no burrs, ridges, or rough patches.',
    'The cooktop and the bottom of the pan are clean and dry before heating.',
    'You can lift the loaded pan securely and set it down with control.',
  ],
  conditionsNever: [
    'Never use cast iron when the stove manual lists it as unsuitable or not recommended.',
    'Never place a rough, warped, or ring-bottomed pan on the glass.',
    'Never slide, shake, or spin the pan across the cooking surface.',
    'Never drop the pan or bang it down on the cooktop.',
    'Never leave salt, grit, or dried food trapped between the pan and the glass.',
  ],

  mechanisms: [
    {
      title: 'Rough bottoms scratch glass',
      body: 'Ceramic glass resists scratches but is not scratch-proof. Burrs or trapped grit can score the surface when a heavy pan moves across it.',
    },
    {
      title: 'Impact can crack glass',
      body: 'Cast iron is heavier than most cookware. Dropping it or setting it down hard concentrates the impact on the glass and can cause cracks or other damage.',
    },
    {
      title: 'Cast iron holds heat',
      body: 'Cast iron heats slowly and retains heat after the setting changes. On some radiant glass models, prolonged high heat can trigger the element’s temperature limiter.',
    },
  ],

  calloutLabel: 'Weight Versus Surface Damage',
  calloutBody: [
    'Many people treat the pan’s weight as an automatic ban. Manufacturer guidance is mixed: some allow cast iron with careful handling, while others do not recommend it on ceramic-glass cooktops.',
    'Scratches and cracks come from different actions. Rough bottoms, trapped grit, and sliding abrade the surface; a heavy pan dropped onto the glass can cause impact damage. The stove manual decides whether cast iron is approved for that model.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'Can you use cast iron on a glass-top stove or cooktop?',
      url: 'https://www.whirlpool.com/blog/kitchen/can-you-put-cast-iron-on-glass-cooktop.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'GE Appliances',
      title: 'Electric Range - Cookware Used on a Radiant Smooth Glass Cooktop',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=16259',
      kind: 'manufacturer',
    },
    {
      publisher: 'Frigidaire',
      title: 'Ranges - What type of cookware should I use on my ceramic/glass cooktop surface?',
      url: 'https://owner.frigidaire.com/support-articles/article/1847473-ranges-what-type-of-cookware-should-i-use-on-my-ceramic-glass-cooktop-surface-',
      kind: 'manufacturer',
    },
    {
      publisher: 'Lodge Cast Iron',
      title: 'How to Use Cast Iron Over Any Heat Source',
      url: 'https://www.lodgecastiron.com/pages/how-use-cast-iron-over-any-heat-source',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current Whirlpool, GE, and Frigidaire glass-cooktop guidance and Lodge cast iron use instructions.',
};
