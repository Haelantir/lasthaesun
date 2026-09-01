import type { Pairing } from '../types';

/**
 * Stuffed Animals in Washing Machine.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const stuffedAnimalsInWashingMachine: Pairing = {
  subjectSlug: 'stuffed-animals',
  subjectName: 'Stuffed Animals',
  subjectKind: 'Toy',
  subjectNote: 'Soft fabric toys filled with stuffing',

  relation: 'washed-in',

  targetSlug: 'washing-machine',
  targetName: 'Washing Machine',
  targetKind: 'Appliance',
  targetNote: 'Appliance that washes items with water',

  eyebrow: 'Toys · Cleaning & Care',
  h1: 'Can I Put Stuffed Animals in a Washing Machine?',
  seoTitle: 'Can Stuffed Animals Go in the Washer? | Can I Use It With',
  metaDescription:
    'Yes, if the care label permits machine washing. Keep toys with nonremovable electronics, glued-on features, fragile fabric, or foam beads out of the washer.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only if the care label permits machine washing and the toy has no nonremovable electronics, fragile fabric, foam-bead filling, or glued-on features. Protect it in a mesh laundry bag or tied pillowcase, follow the label’s settings, and dry it as directed. If the label is missing, hand-wash after checking the toy; if electronics remain inside, spot-clean only.',

  mainRisk: 'Toy damage',
  damages: 'The stuffed animal',
  alternative: 'Hand-wash or spot-clean',

  conditionsOk: [
    'The sewn-in care label specifically allows machine washing, and you follow its cycle and drying instructions.',
    'Any electronic or sound module is fully removable, and the manufacturer says the fabric shell is washable after removal.',
    'The seams, fabric, and attached features are secure, with no glued-on or loose pieces.',
    'The toy is placed in a mesh laundry bag or tied pillowcase and washed on the gentlest label-approved setting.',
  ],
  conditionsNever: [
    'Do not put a toy in the washer while a battery pack, sound box, motor, wiring, or other electronic unit remains inside.',
    'Do not machine-wash toys with glued-on eyes or noses, sequins, fragile fabric, damaged seams, or foam-bead filling.',
    'Do not override a surface-clean-only or hand-wash-only label.',
    'Do not machine-wash a toy with a missing care label when you cannot confirm its materials and internal parts.',
    'Do not force an oversized stuffed animal into the machine or use bleach, harsh chemicals, or unapproved drying settings.',
  ],

  mechanisms: [
    {
      title: 'Water reaches hidden parts',
      body: 'A wash cycle saturates the shell and filling. Water can damage a battery pack, sound box, motor, or other internal unit designed for surface cleaning only.',
    },
    {
      title: 'Agitation pulls at features',
      body: 'Tumbling and rubbing load the seams and attachments throughout the cycle. Glued eyes, noses, plastic pieces, and already-loose parts can detach or become damaged.',
    },
    {
      title: 'Filling stays wet',
      body: 'Stuffing can hold moisture after the surface feels dry. The toy must dry completely before use, or it can develop a musty odor or mildew.',
    },
  ],

  calloutLabel: 'The Soft-Toy Trap',
  calloutBody: [
    'A stuffed animal can look like a small pillow, which makes the washer seem like the obvious choice. The shell is only one part of the toy. Its care label, filling, attachments, and anything hidden inside determine whether full immersion is allowed.',
    'Removing the batteries alone does not make an electronic plush washable. The electronic unit must come out, and the manufacturer must say the remaining shell can be washed; glued eyes or noses and worn seams can still rule out the machine.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'How to Wash Stuffed Animals Without Ruining Them',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-to-wash-stuffed-animals.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Maytag',
      title: 'How to Wash Stuffed Animals in a Washer or by Hand',
      url: 'https://www.maytag.com/blog/washers-and-dryers/how-to-wash-stuffed-animals.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Build-A-Bear Workshop',
      title: 'Care and Cleaning',
      url: 'https://www.buildabear.com/brand-help-satisfactionguarantee-care.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Speed Queen',
      title: 'How to Wash Stuffed Animals',
      url: 'https://speedqueen.com/scoop-blog/laundry-room/tips/how-to-wash-stuffed-animals/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current manufacturer guidance covering care labels, electronics, glued features, wash protection, and drying.',
};
