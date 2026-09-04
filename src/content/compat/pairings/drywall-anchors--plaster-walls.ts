import type { Pairing } from '../types';

/**
 * Drywall Anchors in Plaster Walls.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const drywallAnchorsInPlasterWalls: Pairing = {
  subjectSlug: 'drywall-anchors',
  subjectName: 'Drywall Anchors',
  subjectKind: 'Fastener',
  subjectNote: 'Fasteners made to grip drywall',

  relation: 'in',

  targetSlug: 'plaster-walls',
  targetName: 'Plaster Walls',
  targetKind: 'Wall',
  targetNote: 'Plaster over lath or masonry',

  eyebrow: 'Home · Wall Fasteners',
  h1: 'Can I Use Drywall Anchors in Plaster Walls?',
  seoTitle: 'Drywall Anchors in Plaster Walls: What Works | Can I Use It With',
  metaDescription:
    'Sometimes. Use anchors that explicitly list plaster, identify the wall backing, and follow the manufacturer’s plaster-specific installation method.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only if the anchor’s instructions explicitly list plaster and match whether the wall is hollow or backed by masonry. Follow the plaster installation method, including any required pilot hole; do not drive a drywall-only self-drilling or push-in anchor into the wall. For heavy or safety-critical mounting, use framing, masonry, or the fixture manufacturer’s approved system.',

  mainRisk: 'Anchor pullout',
  damages: 'Wall and fixture',
  alternative: 'Plaster-rated anchor or framing',

  conditionsOk: [
    'Use the anchor only when its packaging or technical sheet explicitly lists plaster as a suitable base material.',
    'Determine whether the plaster covers lath, a hollow cavity, or solid masonry before choosing the anchor type.',
    'Follow the specified hole size, screw size, wall-thickness range, and installation method for plaster.',
    'Use only sound, firmly attached plaster and follow any stricter mounting instructions supplied with the fixture.',
  ],
  conditionsNever: [
    'Do not use an anchor labeled only for drywall or gypsum wallboard.',
    'Do not copy the no-drill drywall installation method when the plaster instructions require a pilot hole.',
    'Do not use a hollow-wall sleeve or toggle where it lacks room to open or cannot fit the full wall thickness.',
    'Do not rely on loose, crumbling, cracked, or detached plaster to carry the load.',
    'Do not exceed the anchor rating or use it where the fixture instructions require attachment to framing or masonry.',
  ],

  mechanisms: [
    {
      title: 'Hard Surface Entry',
      body: 'Self-drilling drywall anchors are designed to cut into gypsum wallboard. On plaster, an approved anchor may require a drilled hole so it can seat without breaking out the edge.',
    },
    {
      title: 'Hollow-Wall Clamping',
      body: 'Plaster over lath creates a layered wall with a cavity behind it. A sleeve or toggle must fit the full thickness and deploy behind a sound layer; otherwise it can spin or pull out.',
    },
    {
      title: 'Masonry Engagement',
      body: 'Some plaster is applied directly to brick or stone. The fastener must reach and grip that masonry rather than depend on the plaster finish for support.',
    },
  ],

  calloutLabel: 'Check the Backing',
  calloutBody: [
    'The confusion comes from store labels. “Drywall anchor” is often used as a broad product category, but some anchors are designed only for gypsum wallboard while others also list plaster as an approved material.',
    'Plaster walls do not all have the same structure. A hollow lath wall needs an anchor that fits its total thickness and can set behind it. Plaster applied over masonry needs a fastener designed to engage the brick, stone, or block underneath.',
  ],

  sources: [
    {
      publisher: 'DEWALT Anchors & Fasteners',
      title: 'Wall-Dog Combo Hex Washer Head Universal Light Duty Anchor',
      url: 'https://anchors.dewalt.com/anchors/products/mechanical-anchors/light-duty-anchors/wall-dog/wall-dog_combo_hex_washer_head.php',
      kind: 'manufacturer',
    },
    {
      publisher: 'DEWALT Anchors & Fasteners',
      title: 'Drive Polly Hollow Wall Anchor',
      url: 'https://anchors.dewalt.com/anchors/products/mechanical-anchors/light-duty-anchors/polly/drive_polly.php',
      kind: 'manufacturer',
    },
    {
      publisher: '3M',
      title: '3M CLAW Drywall Hooks',
      url: 'https://www.3m.com/3M/en_US/home-improvement-us/3m-claw-hooks/',
      kind: 'manufacturer',
    },
    {
      publisher: 'National Park Service',
      title: 'Preservation Brief 21: Repairing Historic Flat Plaster Walls and Ceilings',
      url: 'https://www.nps.gov/orgs/1739/upload/preservation-brief-21-flat-plaster.pdf',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Reviewed plaster construction and anchor compatibility using NPS guidance and current manufacturer installation documents.',
};
