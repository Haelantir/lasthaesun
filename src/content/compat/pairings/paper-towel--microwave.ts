import type { Pairing } from '../types';

/**
 * Paper Towel in Microwave.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const paperTowelInMicrowave: Pairing = {
  subjectSlug: 'paper-towel',
  subjectName: 'Paper Towel',
  subjectKind: 'Material',
  subjectNote: 'Disposable absorbent paper sheet',

  relation: 'in',

  targetSlug: 'microwave',
  targetName: 'Microwave',
  targetKind: 'Appliance',
  targetNote: 'Appliance for heating food',

  eyebrow: 'Kitchen · Towels & Covers',
  h1: 'Can I Use Paper Towel in a Microwave?',
  seoTitle: 'Are Paper Towels Microwave-Safe? | Can I Use It With',
  metaDescription:
    'Yes, with limits: use a fresh, plain white, unprinted, non-recycled paper towel labeled for microwave use, mainly as a loose cover during short reheating.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use a fresh, plain white, unprinted, non-recycled paper towel approved for microwave use, mainly as a loose cover during short reheating. Do not put an already grease-soaked towel back in, and avoid extended or unattended heating.',

  mainRisk: 'Fire or arcing',
  damages: 'Food and microwave',
  alternative: 'Microwave-safe vented cover',

  conditionsOk: [
    'Use a fresh towel whose package approves microwave use, and follow any stricter instruction in your microwave manual.',
    'Prefer plain white, unprinted, non-recycled paper; an unbleached or natural-color towel still needs a microwave-safe label.',
    'Lay the towel loosely over food to catch splatter, or place it under food when the appliance manual or food directions call for it.',
    'Keep it to reheating or short cooking and watch the oven; stop if the paper browns, smokes, or sparks.',
  ],
  conditionsNever: [
    'Do not assume a recycled paper towel is safe; keep it out unless both the towel label and your microwave manual expressly allow it.',
    'Do not use printed, dyed, patterned, or decorated towels.',
    'Do not use paper towels reinforced with nylon or other synthetic fibers.',
    'Do not use a paper towel for extended heating, drying, or an unattended cooking cycle.',
    'Do not reuse a towel that is grease-soaked, browned, brittle, or otherwise damaged.',
  ],

  mechanisms: [
    {
      title: 'Paper Passes Microwaves',
      body: 'Microwave energy passes through paper and is absorbed mainly by the food. The towel catches splatter and lets some steam escape, but heat from the food can still make it hot.',
    },
    {
      title: 'Dry Paper Can Burn',
      body: 'If heating continues too long, the towel and nearby food can dry and overheat. Paper is combustible, so browning or scorching can progress to fire.',
    },
    {
      title: 'Additives Change the Risk',
      body: 'Recycled paper may contain impurities or small metal particles that spark. Nylon and other synthetic reinforcing fibers can ignite, while dyes may run when heated.',
    },
  ],

  calloutLabel: 'Plain Paper Is Different',
  calloutBody: [
    '“Paper” covers products with very different contents. A fresh paper towel labeled for microwave use can work as a loose splatter cover, while recycled, printed, dyed, or fiber-reinforced towels may contain materials that appliance guidance does not allow.',
    'Moisture is not a permanent safety feature. A damp or grease-catching towel can dry out as heating continues. If the towel is already oily, browned, or stiff from a previous cycle, discard it and use a fresh towel or a microwave-safe vented cover.',
  ],

  sources: [
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Microwave Ovens',
      url: 'https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-ovens',
      kind: 'government',
    },
    {
      publisher: 'GE Appliances',
      title: 'Microwave - Food Preparation Coverings',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=18855',
      kind: 'manufacturer',
    },
    {
      publisher: 'LG Electronics',
      title: 'MSER2090 / MSER1590 Owner’s Manual',
      url: 'https://media.us.lg.com/m/73744cfe0f859263/original/MSER2090_MSER1590_2024_Owners_Manual.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Whirlpool',
      title: 'Owner’s Manual W11534944',
      url: 'https://www.whirlpool.com/content/dam/global/documents/202105/owners-manual-w11534944-reva.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed for coverings, recycled and printed paper, synthetic fibers, heating duration, and reuse after grease exposure using FDA guidance and microwave manuals.',
};
