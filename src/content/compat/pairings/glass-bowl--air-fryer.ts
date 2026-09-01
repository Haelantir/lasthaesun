import type { Pairing } from '../types';

/**
 * Glass Bowl in Air Fryer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const glassBowlInAirFryer: Pairing = {
  subjectSlug: 'glass-bowl',
  subjectName: 'Glass Bowl',
  subjectKind: 'Cookware',
  subjectNote: 'Glass vessel used for cooking',

  relation: 'in',

  targetSlug: 'air-fryer',
  targetName: 'Air Fryer',
  targetKind: 'Appliance',
  targetNote: 'Fan-driven countertop convection cooker',

  eyebrow: 'Kitchen · Cookware & Bakeware',
  h1: 'Can I Use a Glass Bowl in an Air Fryer?',
  seoTitle: 'Glass Bowls in Air Fryers: When They Are Safe | Can I Use It With',
  metaDescription:
    'Yes, with limits: use only glassware approved for the appliance, leave space for airflow, and protect the bowl from thermal shock.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use the bowl only if its care instructions allow air-fryer or countertop-convection use and your air fryer permits ovenproof dishes. If either manufacturer rules it out, the glass is ordinary serving ware, or the bowl is damaged, use a metal pan instead. Leave open space around the bowl and avoid sudden temperature changes.',

  mainRisk: 'Glass shattering',
  damages: 'Bowl and food',
  alternative: 'Approved metal baking pan',

  conditionsOk: [
    'The bowl\'s care instructions explicitly permit air fryers or countertop convection appliances.',
    'The air fryer manual allows ovenproof dishes, and the bowl sits in the basket or rack position it specifies.',
    'The bowl stays below its rated temperature and leaves open space around its sides for airflow.',
  ],
  conditionsNever: [
    'Use an ordinary serving bowl or any glass item with no clear oven-use rating and care instructions.',
    'Use a bowl whose manufacturer excludes air fryers; current Pyrex guidance does.',
    'Use glass that is chipped, cracked, or deeply scratched.',
    'Add cool liquid to hot glass, set hot glass on a wet or cold surface, or make a temperature transfer the bowl\'s manufacturer prohibits.',
    'Let the bowl touch the heating element or cook with a lid that is not separately approved for heated use.',
  ],

  mechanisms: [
    {
      title: 'Thermal shock',
      body: 'Glass expands as it heats and contracts as it cools. A fast, uneven temperature change builds stress through the bowl and can crack or shatter it.',
    },
    {
      title: 'Flaws start cracks',
      body: 'Chips and deep scratches reduce the glass\'s strength. A flaw can grow into a crack during heating even after earlier uses seemed normal.',
    },
    {
      title: 'Restricted airflow',
      body: 'The bowl takes up open space needed by the fan. If it fills the basket or sits in the wrong place, hot air cannot pass around it and cooking becomes uneven.',
    },
  ],

  calloutLabel: 'The Oven-Safe Gap',
  calloutBody: [
    'An oven-safe stamp looks like enough because an air fryer moves hot air like a convection oven. Appliance and glassware instructions can still conflict. Philips allows ovenproof glass dishes in its Airfryers, while Pyrex currently tells owners not to use its glassware in an air fryer.',
    'Borosilicate is a glass composition with greater resistance to extreme temperature changes than soda-lime glass. Tempering is a strengthening process that changes how glass breaks, but it does not certify a bowl for oven or air-fryer use. Leave ordinary serving glass out and follow the exact bowl’s care instructions.',
  ],

  sources: [
    {
      publisher: 'Philips',
      title: 'What kind of baking tin can I use in my Philips Airfryer?',
      url: 'https://www.usa.philips.com/c-f/XC000015318/what-kind-of-baking-tin-can-i-use-in-my-philips-airfryer',
      kind: 'manufacturer',
    },
    {
      publisher: 'Pyrex',
      title: 'Frequently Asked Questions',
      url: 'https://pyrexhome.com/pages/frequently-asked-questions',
      kind: 'manufacturer',
    },
    {
      publisher: 'Anchor Hocking',
      title: 'Care & Use',
      url: 'https://www.anchorhocking.com/care-use/',
      kind: 'manufacturer',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Tempered Glass Safety Alert',
      url: 'https://www.cpsc.gov/s3fs-public/1801-Tempered-Glass-Safety-Alert.pdf',
      kind: 'government',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed current manufacturer and CPSC guidance on air-fryer cookware, appliance limits, glass composition, tempering, damage, airflow, and thermal shock.',
};
