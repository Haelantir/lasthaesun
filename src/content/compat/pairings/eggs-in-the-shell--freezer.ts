import type { Pairing } from '../types';

/**
 * Eggs in the Shell in Freezer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const eggsInTheShellInFreezer: Pairing = {
  subjectSlug: 'eggs-in-the-shell',
  subjectName: 'Eggs in the Shell',
  subjectKind: 'Food',
  subjectNote: 'Raw eggs with intact shells',

  relation: 'stored-in',

  targetSlug: 'freezer',
  targetName: 'Freezer',
  targetKind: 'Appliance',
  targetNote: 'Appliance for frozen food storage',

  eyebrow: 'Kitchen · Food Storage',
  h1: 'Can I Put Eggs in Their Shells in the Freezer?',
  seoTitle: 'Can Shell Eggs Go in the Freezer? | Can I Use It With',
  metaDescription:
    'No. Do not freeze raw eggs in their shells. Crack and beat them in a freezer-safe container first, and discard accidentally frozen eggs if the shell cracked.',

  verdict: 'no',
  shortAnswer:
    'No. Do not intentionally freeze raw eggs in their shells. For freezer storage, crack them into a freezer-safe container and beat the yolks and whites together first. If an egg freezes by accident, discard it if the shell cracked; otherwise, keep it frozen, thaw it in the refrigerator, and use it immediately.',

  mainRisk: 'Shell cracking',
  damages: 'The eggs',
  alternative: 'Beaten eggs in containers',

  conditionsOk: [
    'Keep intact shell eggs in their original carton in the refrigerator instead of the freezer.',
    'To freeze whole raw eggs, crack them into a freezer-safe container and beat the yolks and whites together.',
    'Egg whites can be frozen separately in a sealed freezer container.',
    'If an intact shell egg freezes accidentally, keep it frozen, thaw it in the refrigerator, and use it immediately.',
  ],
  conditionsNever: [
    'Do not intentionally freeze raw eggs with their shells on.',
    'Never use an accidentally frozen egg if its shell cracked during freezing.',
    'Do not thaw an accidentally frozen shell egg on the counter.',
    'Do not rely on a shell-frozen egg for a recipe that needs a fluid, easily blended yolk.',
    'Do not freeze hard-cooked eggs in their shells either.',
  ],

  mechanisms: [
    {
      title: 'Contents expand',
      body: 'The white and yolk expand as they freeze. The rigid shell may crack under the pressure.',
    },
    {
      title: 'Cracks admit contamination',
      body: 'A crack breaks the shell’s protective barrier. Bacteria on the shell can enter the contents, so a frozen egg with a cracked shell should be discarded.',
    },
    {
      title: 'Yolk texture changes',
      body: 'Freezing makes the yolk thick and syrupy or gel-like. After thawing, it may not flow or blend with the white as a fresh yolk does.',
    },
  ],

  calloutLabel: 'The Shell Problem',
  calloutBody: [
    'An eggshell looks like built-in freezer packaging, so it is easy to assume the whole egg can go straight from the carton into the freezer. As the contents expand, the rigid shell can crack.',
    'Eggs can be frozen after removal from the shell. For whole eggs, beat the whites and yolks together in a freezer container. Whites may be frozen separately.',
  ],

  sources: [
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'What You Need to Know About Egg Safety',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety',
      kind: 'government',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Cold Food Storage Chart',
      url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts',
      kind: 'government',
    },
    {
      publisher: 'University of Maine Cooperative Extension',
      title: 'Facts About Eggs',
      url: 'https://extension.umaine.edu/publications/wp-content/uploads/sites/52/2015/04/2257.pdf',
      kind: 'academic',
    },
    {
      publisher: 'American Egg Board',
      title: 'Important Food Safety Information',
      url: 'https://www.incredibleegg.org/egg-handling-storage-tips/',
      kind: 'industry',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed government, university extension, and egg-industry guidance on intentional freezing, accidental freezing, shell cracks, thawing, and yolk texture.',
};
