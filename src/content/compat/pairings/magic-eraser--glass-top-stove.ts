import type { Pairing } from '../types';

/**
 * Magic Eraser on Glass-Top Stove.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const magicEraserOnGlassTopStove: Pairing = {
  subjectSlug: 'magic-eraser',
  subjectName: 'Magic Eraser',
  subjectKind: 'Tool',
  subjectNote: 'Melamine-foam cleaning sponge',

  relation: 'on',

  targetSlug: 'glass-top-stove',
  targetName: 'Glass-Top Stove',
  targetKind: 'Appliance',
  targetNote: 'Smooth glass-ceramic cooking surface',

  eyebrow: 'Kitchen · Cooktop Cleaning',
  h1: 'Can I Use Magic Eraser on a Glass-Top Stove?',
  seoTitle: 'Magic Eraser on a Glass Cooktop: When It Is Safe | Can I Use It With',
  metaDescription:
    'Only with model-specific approval. Magic Eraser is abrasive, and many glass cooktop makers warn that abrasive sponges can scratch or alter the finish.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Use a Magic Eraser only if the instructions for your exact cooktop allow it. Melamine foam cleans by fine abrasion, and many glass-ceramic makers prohibit abrasive sponges because they can scratch the surface or leave a dull, uneven sheen. Wolf allows one for hard-water stains on its glass cooktops, but that does not apply to other brands. For routine cleaning or burned-on food, use the cleaner, pad, and scraper specified in your manual.',

  mainRisk: 'Surface scratching',
  damages: 'Cooktop finish',
  alternative: 'Ceramic cooktop cleaner',

  conditionsOk: [
    'The owner’s manual or official support page for your exact model specifically names a Magic Eraser or melamine sponge as acceptable.',
    'Use it only on the stain type named in that guidance; Wolf limits its recommendation to hard-water stains.',
    'On a cool cooktop, wet and squeeze out the sponge, then test a small area using light pressure.',
    'After spot cleaning, wipe the surface with clean water and dry it fully before cooking.',
  ],
  conditionsNever: [
    'Never use it when the cooktop instructions prohibit abrasive sponges or specify approved glass-ceramic cleaning tools.',
    'Never treat general “stovetop” wording on the package as permission for a dark or high-gloss glass top.',
    'Never scrub the entire cooktop as routine maintenance or press harder to chase an old mark.',
    'Never use it on a warm or hot cooktop, or on melted sugar or plastic; follow the manual’s scraper procedure.',
    'Never add bleach or another cleaner unless both the Magic Eraser and cooktop instructions allow that combination.',
  ],

  mechanisms: [
    {
      title: 'Micro-abrasive scrubbing',
      body: 'The foam’s hard, open-cell skeleton presses fine edges against the deposit. Rubbing mechanically wears soil away and can also abrade the surface beneath it.',
    },
    {
      title: 'Sheen can change',
      body: 'Abrasive contact can disturb a polished or dark surface at a microscopic scale. Light then reflects differently from the rubbed spot, which may look cloudy, dull, or patchy.',
    },
    {
      title: 'Stain type matters',
      body: 'Hard-water film sits on the surface and may respond to model-approved spot cleaning. Burned-on deposits are usually handled with a suitable cooktop cleaner and metal scraper instead.',
    },
  ],

  calloutLabel: 'Why It Seems Safe',
  calloutBody: [
    'A Magic Eraser feels like a soft sponge and often needs only water, so it is easy to assume that it behaves like a nonabrasive wipe. The cleaning force comes from the foam structure, which makes surface-finish warnings important.',
    'Mr. Clean advertises Magic Erasers for stovetops but also warns against high-gloss, polished, dark, and satin surfaces. Some cooktop makers provide a narrow exception for a particular stain, while others tell owners to avoid abrasive sponges. Follow the instructions for the appliance model and surface finish in front of you.',
  ],

  sources: [
    {
      publisher: 'Mr. Clean',
      title: 'How to Clean Your Stove Top in 3 Steps',
      url: 'https://www.mrclean.com/en-us/how-to/kitchen/say-goodbye-to-stove-grease',
      kind: 'manufacturer',
    },
    {
      publisher: 'SCHOTT CERAN',
      title: 'Everything You Need to Know',
      url: 'https://www.schott-ceran.com/en/service',
      kind: 'manufacturer',
    },
    {
      publisher: 'Sub-Zero, Wolf, and Cove',
      title: 'Clean Electric and Induction Glass Cooktops',
      url: 'https://www.subzero-wolf.com/assistance/answers/wolf/common/cleanelectric-and-inductionglass-cooktops',
      kind: 'manufacturer',
    },
    {
      publisher: 'Scientific Reports',
      title: 'Protonated Melamine Sponge for Effective Oil/Water Separation',
      url: 'https://www.nature.com/articles/srep14294',
      kind: 'academic',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against Magic Eraser use warnings, melamine-foam abrasion research, and current glass-cooktop care guidance from SCHOTT and Wolf.',
};
