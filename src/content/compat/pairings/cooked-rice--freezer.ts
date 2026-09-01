import type { Pairing } from '../types';

/**
 * Cooked Rice in Freezer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const cookedRiceInFreezer: Pairing = {
  subjectSlug: 'cooked-rice',
  subjectName: 'Cooked Rice',
  subjectKind: 'Food',
  subjectNote: 'Cooked grains ready for storage',

  relation: 'in',

  targetSlug: 'freezer',
  targetName: 'Freezer',
  targetKind: 'Appliance',
  targetNote: 'Cold appliance for long-term storage',

  eyebrow: 'Kitchen · Food Storage',
  h1: 'Can I Put Cooked Rice in the Freezer?',
  seoTitle: 'Can Cooked Rice Go in the Freezer? | Can I Use It With',
  metaDescription:
    'Yes, with limits. Cool cooked rice quickly, divide it into shallow portions, and freeze it within one hour. Discard rice that has sat out too long.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, cooked rice can go in the freezer. Cool it quickly, divide it into small, shallow portions, and freeze it within one hour of cooking. Discard rice left at room temperature for more than two hours, or more than one hour when the air is above 90°F.',

  mainRisk: 'Food poisoning',
  damages: 'Your health',
  alternative: 'Refrigerate for near-term use',

  conditionsOk: [
    'Freeze the rice within one hour of cooking whenever possible.',
    'Divide it into small, shallow portions so the center cools quickly.',
    'Store the cooled portions in clean, covered freezer containers or freezer bags.',
    'Defrost the rice in the refrigerator, then reheat it until steaming hot and eat it immediately.',
  ],
  conditionsNever: [
    'Never leave cooked rice in the pot or rice cooker for an extended cooling period.',
    'Never freeze rice that has been at room temperature for more than two hours.',
    'Never keep rice out for more than one hour when the air temperature is above 90°F.',
    'Never freeze one large, deep mass of warm rice that will cool slowly in the center.',
    'Never thaw rice on the counter or reheat it more than once.',
  ],

  mechanisms: [
    {
      title: 'Spores Can Survive Cooking',
      body: 'Uncooked rice can carry Bacillus cereus spores that remain after cooking. Slow cooling allows the bacteria to multiply and produce toxins.',
    },
    {
      title: 'Deep Portions Hold Heat',
      body: 'A large mass of rice loses heat slowly at its center. Shallow portions release heat faster and freeze more evenly.',
    },
    {
      title: 'Freezing Pauses Growth',
      body: 'Most bacteria cannot grow while the rice remains frozen. Freezing cannot undo unsafe holding or toxin formation that occurred beforehand.',
    },
  ],

  calloutLabel: 'Cooling Before Freezing',
  calloutBody: [
    '“Cool before freezing” does not mean leaving a full pot on the counter until it reaches room temperature. A deep batch can remain warm in the center long after the surface feels cooler.',
    'Split the rice into small portions as soon as the meal is over. Let those portions cool quickly, cover them, and get them into the freezer within one hour of cooking.',
  ],

  sources: [
    {
      publisher: 'Food Standards Agency',
      title: 'Student Guide to Food Safety and Hygiene',
      url: 'https://www.gov.uk/government/publications/student-guide-to-food-safety-and-hygiene/student-guide-to-food-safety-and-hygiene',
      kind: 'government',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Leftovers: The Gift that Keeps on Giving',
      url: 'https://www.foodsafety.gov/blog/leftovers-gift-keeps-giving',
      kind: 'government',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Supplement to the 2022 Food Code — December 2024 Version',
      url: 'https://www.fda.gov/media/183271/download',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed for home freezing, cooling, holding, thawing, and reheating using current FSA consumer guidance plus USDA/FoodSafety.gov and FDA materials.',
};
