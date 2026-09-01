import type { Pairing } from '../types';

/**
 * Shoes in Washing Machine.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const shoesInWashingMachine: Pairing = {
  subjectSlug: 'shoes',
  subjectName: 'Shoes',
  subjectKind: 'Footwear',
  subjectNote: 'Footwear made from mixed materials',

  relation: 'washed-in',

  targetSlug: 'washing-machine',
  targetName: 'Washing Machine',
  targetKind: 'Appliance',
  targetNote: 'Appliance that washes laundry',

  eyebrow: 'Laundry · Shoe Care',
  h1: 'Can I Put Shoes in a Washing Machine?',
  seoTitle: 'Washing Shoes in a Washer: When It Is Safe | Can I Use It With',
  metaDescription:
    'Yes, with limits: wash only pairs marked machine-washable and allowed by your washer manual. Keep leather and suede out; bag approved shoes and air-dry them.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only if the maker marks that exact pair as machine-washable and your washer manual does not prohibit shoes. Keep leather, suede, nubuck, cleated, embellished, light-up, or otherwise unapproved shoes out. For an approved pair, remove loose debris, laces, and removable insoles, use a wash bag with old towels, follow the listed cycle, and air-dry completely.',

  mainRisk: 'Separation or distortion',
  damages: 'Shoes and washer',
  alternative: 'Gentle hand cleaning',

  conditionsOk: [
    'The exact shoe label, packaging, or product page identifies the pair as machine-washable.',
    'The washing machine manual does not prohibit shoes or restrict that type of load.',
    'Remove loose mud and stones, then take out the laces and any removable insoles before washing.',
    'Use a mesh bag or pillowcase with old towels, follow the shoe maker’s cycle instructions, and air-dry completely.',
  ],
  conditionsNever: [
    'Never machine-wash shoes when their care instructions require hand cleaning or cannot be found.',
    'Never put leather, suede, or nubuck shoes in the washer.',
    'Never machine-wash cleated, embellished, light-up, or delicate shoes unless their exact instructions allow it.',
    'Never ignore a washer manual that excludes shoes, even when the shoes carry a machine-washable label.',
    'Never leave gravel, loose hardware, or removable parts inside the shoes during the cycle.',
  ],

  mechanisms: [
    {
      title: 'Materials absorb water',
      body: 'Leather and suede can absorb moisture and lose their finish, texture, or shape. Approved canvas and synthetic pairs tolerate washing because the complete shoe was made for that cleaning method.',
    },
    {
      title: 'Agitation strains construction',
      body: 'Tumbling repeatedly flexes glued layers, foam, and fastenings. Unapproved shoes can separate, deform, or shed trim inside the machine.',
    },
    {
      title: 'Soles strike the drum',
      body: 'A loose pair can thump against the drum and shift the load off balance. A bag and old towels reduce free movement, but they do not override a washer prohibition.',
    },
  ],

  calloutLabel: 'Material Is Not Permission',
  calloutBody: [
    'A fabric or mesh upper makes a shoe look washer-safe, but the upper is only one part. Dyes, foam, glued layers, trims, and built-in electronics can have different care limits.',
    'Brand rules vary, and washer rules vary too. A machine-washable mark on the exact pair plus a washer manual that allows the load is the reliable combination. Without that, hand-clean the shoes.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'How to Wash Shoes in the Washing Machine',
      url: 'https://www.whirlpool.com/blog/washers-and-dryers/how-to-wash-shoes-in-washing-machine.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Skechers',
      title: 'How to Clean Your Skechers: Answering Your Top Questions',
      url: 'https://www.skechers.com/stories/lifestyle/how-clean-your-skechers.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'HOKA',
      title: 'Product Care',
      url: 'https://help.au.hoka.com/hc/en-us/sections/4899858505497-Product-Care',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung Electronics America',
      title: 'Home Appliance Terms and Conditions',
      url: 'https://www.samsung.com/us/support/legal/LGL10000309/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed shoe materials, wash labels, adhesive and fastening risks, load control, and washer exclusions against current manufacturer guidance.',
};
