import type { Pairing } from '../types';

/**
 * Aluminum Foil in Oven.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const aluminumFoilInOven: Pairing = {
  subjectSlug: 'aluminum-foil',
  subjectName: 'Aluminum Foil',
  subjectKind: 'Material',
  subjectNote: 'Thin rolled aluminum kitchen wrap',

  relation: 'in',

  targetSlug: 'oven',
  targetName: 'Oven',
  targetKind: 'Appliance',
  targetNote: 'Enclosed appliance for baking and roasting',

  eyebrow: 'Kitchen · Foil & Liners',
  h1: 'Can I Use Aluminum Foil in an Oven?',
  seoTitle: 'Aluminum Foil in Ovens: Safe Uses and Limits | Can I Use It With',
  metaDescription:
    'Yes, with limits: use foil to wrap food or line pans, but never line the oven floor, cover a full rack, block vents, or touch heating elements.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. You can wrap or tent food with aluminum foil and use it to line an oven-safe pan, provided it stays clear of heating elements. Do not line the oven floor or cover an entire rack. For drips, place a pan on a lower rack and check your oven manual.',

  mainRisk: 'Fire or poisoning',
  damages: 'Oven interior',
  alternative: 'Pan below food',

  conditionsOk: [
    'Wrap, tent, or cover food with kitchen aluminum foil when the recipe calls for it.',
    'Line an oven-safe baking sheet or roasting pan with foil and place the pan on a rack.',
    'To catch drips, set an oven-safe pan or dish on a lower rack and line that pan with foil if desired.',
    'Place foil directly on a lower rack only when your oven manual allows it, leaving open space for airflow.',
  ],
  conditionsNever: [
    'Never line the oven floor with aluminum foil.',
    'Never cover an entire oven rack with foil.',
    'Never block slots, holes, or vents in the oven bottom.',
    'Never let foil touch an exposed bake or broil element.',
    'Never leave aluminum foil inside during a self-cleaning cycle.',
  ],

  mechanisms: [
    {
      title: 'Heat trapped at the floor',
      body: 'Foil on the oven floor traps and reflects heat into the bottom surface. It can melt onto the finish or overheat nearby parts, causing permanent damage and a fire or electrical hazard.',
    },
    {
      title: 'Airflow and combustion blocked',
      body: 'A covered rack or blocked bottom vent stops hot air from circulating as designed. Cooking becomes uneven, and blocked passages in gas ovens can create a carbon monoxide hazard.',
    },
    {
      title: 'Direct element contact',
      body: 'Foil touching an exposed bake or broil element receives intense direct heat. It can melt or ignite, producing smoke or fire.',
    },
  ],

  calloutLabel: 'Oven Liner Confusion',
  calloutBody: [
    'Aluminum foil is sold as oven-safe for cooking uses such as wrapping food, covering dishes, and lining pans. That does not make it suitable for covering the oven cavity. The floor, vents, and most of each rack need to remain clear.',
    'Direct rack use is where manuals diverge. Some allow a small sheet on a lower rack below the dish, while others prohibit lining racks. When in doubt, put the foil on a pan instead and leave the oven floor and vents clear.',
  ],

  sources: [
    {
      publisher: 'GE Appliances',
      title: 'Range & Wall Oven - Using Aluminum Foil or Silicone Liners',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17043',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'Can You Put Aluminum Foil in the Oven?',
      url: 'https://www.whirlpool.com/blog/kitchen/can-you-put-aluminum-foil-in-the-oven.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'LG Electronics',
      title: 'Oven Under Cooking - Gas Ranges',
      url: 'https://www.lg.com/us/support/help-library/oven-under-cooking-gas-ranges--20150326690854ELR',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung',
      title: 'How to clean your Samsung oven',
      url: 'https://www.samsung.com/us/support/answer/ANS10002315/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed food wrapping, pan lining, rack placement, oven-floor hazards, blocked vents, element contact, and self-cleaning guidance from four oven manufacturers.',
};
