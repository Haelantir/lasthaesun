import type { Pairing } from '../types';

/**
 * Rubbing Alcohol on Phone Screen.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const rubbingAlcoholOnPhoneScreen: Pairing = {
  subjectSlug: 'rubbing-alcohol',
  subjectName: 'Rubbing Alcohol',
  subjectKind: 'Cleaner',
  subjectNote: 'Isopropyl alcohol cleaning solution',

  relation: 'on',

  targetSlug: 'phone-screen',
  targetName: 'Phone Screen',
  targetKind: 'Display',
  targetNote: 'Touchscreen glass and surface coating',

  eyebrow: 'Technology · Phone Care',
  h1: 'Can I Use Rubbing Alcohol on a Phone Screen?',
  seoTitle: 'Is Rubbing Alcohol Safe for Phone Screens? | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use only a concentration and method your phone maker allows, apply it with a soft cloth or approved wipe, and keep liquid out of openings.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Current iPhone, Pixel, and Galaxy instructions allow isopropyl alcohol on supported screens, but the approved concentration and application method differ. Turn the phone off, unplug it, and use the wipe or cloth method named by its manufacturer. Never spray the screen or let liquid reach any opening.',

  mainRisk: 'Coating wear',
  damages: 'Screen coating',
  alternative: 'Soft damp microfiber cloth',

  conditionsOk: [
    'Check the cleaning instructions for your phone model before using alcohol because manufacturer guidance differs.',
    'Use only the concentration and product form the manufacturer approves; Apple and Google specify 70% isopropyl alcohol wipes.',
    'Power off the phone, unplug all cables, and remove its case before cleaning.',
    'Wipe gently with an approved premoistened wipe or a soft lint-free cloth prepared as the manufacturer directs.',
  ],
  conditionsNever: [
    'Do not spray or pour rubbing alcohol directly onto the screen.',
    'Do not let liquid enter the charging port, speaker grille, earpiece, microphone openings, or buttons.',
    'Do not assume a stronger concentration is acceptable when the manufacturer names a specific concentration.',
    'Do not scrub with paper towels, abrasive cloths, or heavy pressure.',
    'Do not use alcohol on a foldable screen film or its edges unless that model’s instructions allow it.',
  ],

  mechanisms: [
    {
      title: 'Oleophobic coating wear',
      body: 'The screen’s fingerprint-resistant oleophobic layer repels skin oils. Cleaning products, rough materials, and excessive wiping can diminish that layer, making smudges harder to clear.',
    },
    {
      title: 'Liquid reaches openings',
      body: 'Direct spraying can leave enough liquid to run toward ports and speaker or microphone openings. Applying an approved cleaner through a wipe or cloth gives better control over the amount on the phone.',
    },
  ],

  calloutLabel: 'Why Advice Conflicts',
  calloutBody: [
    'The rule that alcohol always ruins a phone screen is too broad. Apple and Google allow 70% isopropyl alcohol wipes on supported phones, while Samsung allows an approved alcohol-based solution applied to a microfiber cloth.',
    'That permission does not cover spraying from a bottle, soaking the screen, scrubbing, or choosing any concentration. The oleophobic coating reduces fingerprints, and cleaning products or excessive wiping can wear it down faster.',
  ],

  sources: [
    {
      publisher: 'Apple',
      title: 'Cleaning your iPhone',
      url: 'https://support.apple.com/en-us/108765',
      kind: 'manufacturer',
    },
    {
      publisher: 'Google',
      title: 'Clean your Pixel phone',
      url: 'https://support.google.com/pixelphone/answer/7533987?hl=en',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung',
      title: 'Keep your Galaxy phone clean',
      url: 'https://www.samsung.com/us/support/answer/ANS10003416/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current Apple, Google, and Samsung guidance for alcohol concentration, application method, openings, and screen-coating wear.',
};
