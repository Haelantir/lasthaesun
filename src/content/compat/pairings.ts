import type { CompatVerdict, PairingRelation } from '@/lib/compat';
import type { SourceKind } from '@/lib/db/types';

/**
 * "Can I Use It With…" — the compatibility records.
 *
 * Every string below was written by the pinned content writer
 * (CONTENT_WRITER_MODEL, via scripts/content-batch/writer.ts) against the same
 * voice and honesty rules as docs/content-authoring-prompt.txt §2–3, and is
 * reproduced verbatim. Nothing here was rewritten by hand.
 *
 * Every `sources[].url` returned HTTP 200 when this file was written. A source
 * whose URL could not be verified was dropped rather than guessed at, which is
 * why two drafts cite fewer publishers than the model first produced.
 *
 * This is a file of records, not a database table — the section is still a
 * sample. When it graduates, these become rows and the template stops importing
 * from here, exactly as the decision pages already work.
 */

export interface CompatSource {
  publisher: string;
  title: string;
  url: string;
  kind: SourceKind;
}

export interface CompatMechanism {
  title: string;
  body: string;
}

export interface Pairing {
  /** URL segment. The canonical path is `/use/<subjectSlug>/<targetSlug>/`. */
  subjectSlug: string;
  subjectName: string;
  subjectKind: string;
  subjectNote: string;

  relation: PairingRelation;

  targetSlug: string;
  targetName: string;
  targetKind: string;
  targetNote: string;

  eyebrow: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;

  verdict: CompatVerdict;
  shortAnswer: string;

  /** Free text, not an enum: the honest answer is rarely one of four words. */
  mainRisk: string;
  damages: string;
  alternative: string;

  conditionsOk: string[];
  conditionsNever: string[];
  mechanisms: CompatMechanism[];

  calloutLabel: string;
  calloutBody: string[];

  sources: CompatSource[];
  reviewedAt: Date;
  reviewScope: string;
}

const REVIEWED = new Date('2026-09-01T00:00:00Z');

const PHILIPS_FOIL: CompatSource = {
  publisher: 'Philips',
  title: 'Can I use baking paper/tin foil in my Philips Airfryer?',
  url: 'https://www.usa.philips.com/c-f/XC000003625/can-i-use-baking-paper-tin-foil-in-my-philips-airfryer',
  kind: 'manufacturer',
};

const INSTANT_POT_FAQ: CompatSource = {
  publisher: 'Instant Pot',
  title: 'Frequently Asked Questions',
  url: 'https://instantpot.com/pages/frequently-asked-questions',
  kind: 'manufacturer',
};

export const PAIRINGS: Pairing[] = [
  /* ------------------------------------------------------------------ foil */
  {
    subjectSlug: 'aluminum-foil',
    subjectName: 'Aluminum Foil',
    subjectKind: 'Material',
    subjectNote: 'Thin rolled aluminum kitchen wrap',

    relation: 'in',

    targetSlug: 'air-fryer',
    targetName: 'Air Fryer',
    targetKind: 'Appliance',
    targetNote: 'Fan-driven countertop cooking appliance',

    eyebrow: 'Kitchen · Liners & Wraps',
    h1: 'Can I Use Aluminum Foil in an Air Fryer?',
    seoTitle: 'Aluminum Foil in Air Fryers: Safe Use Rules | Can I Use It With',
    metaDescription:
      'Sometimes. Use aluminum foil only when your air fryer’s manual allows it, keep airflow openings clear, and secure the foil under food before cooking.',

    verdict: 'yes_with_limits',
    shortAnswer:
      'Sometimes. Manuals differ, so use foil only if your air fryer’s instructions allow it. Keep the piece small, hold it down with food, leave airflow openings clear, and keep it away from the heating element. If your manual says no, cook directly in the basket.',

    mainRisk: 'Foil burning',
    damages: 'The air fryer',
    alternative: 'Cook in bare basket',

    conditionsOk: [
      'The owner’s manual for your exact model allows foil.',
      'The piece is no larger than needed for the food, with open space around it for circulation.',
      'Food is already on top before the fan starts and is heavy enough to keep the foil from moving.',
      'The foil sits only in the location approved by the manual and stays away from the heating element.',
    ],
    conditionsNever: [
      'Never use foil when the manual prohibits or discourages it.',
      'Never cover the entire basket or block its perforations.',
      'Never line a grease-collection pan unless the manual specifically allows that placement.',
      'Never run the fan with loose, unweighted foil inside.',
      'Never let foil protrude toward or touch the heating element.',
    ],
    mechanisms: [
      {
        title: 'Blocked airflow',
        body: 'The fan pushes heated air through and around the basket. A broad foil sheet closes openings, so less hot air reaches the food and cooking becomes uneven.',
      },
      {
        title: 'Lifted into heater',
        body: 'Moving air can raise thin foil when food does not hold it down. Foil that reaches the heating element can start to burn.',
      },
    ],

    calloutLabel: 'Oven-safe assumption',
    calloutBody: [
      'Foil handles normal oven heat, so lining an air fryer can look like an easy way to catch drips and speed cleanup.',
      'The fan changes the decision. Foil can cover the openings that move hot air around the food, and an unsecured sheet can rise toward the heater. Manufacturers allow different placements, so the manual for the exact model controls.',
    ],

    sources: [
      PHILIPS_FOIL,
      INSTANT_POT_FAQ,
      {
        publisher: 'Hamilton Beach',
        title: 'Hamilton Beach FAQs',
        url: 'https://hamiltonbeach.com/frequently-asked-questions',
        kind: 'manufacturer',
      },
    ],
    reviewedAt: REVIEWED,
    reviewScope:
      'Reviewed against manufacturer support and owner guidance from Philips, Instant Pot and Hamilton Beach, with differences between models and brands preserved.',
  },

  /* -------------------------------------------------------- parchment paper */
  {
    subjectSlug: 'parchment-paper',
    subjectName: 'Parchment Paper',
    subjectKind: 'Material',
    subjectNote: 'Heat-resistant nonstick cooking paper',

    relation: 'in',

    targetSlug: 'air-fryer',
    targetName: 'Air Fryer',
    targetKind: 'Appliance',
    targetNote: 'Countertop hot-air cooking appliance',

    eyebrow: 'Kitchen · Liners & Air Fryers',
    h1: 'Can I Use Parchment Paper in an Air Fryer?',
    seoTitle: 'Parchment Paper and Air Fryers: Safe Use | Can I Use It With',
    metaDescription:
      'Yes, if your air fryer manual allows it. If preheating, add parchment afterward with food, within its heat rating and away from the heater.',

    verdict: 'yes_with_limits',
    shortAnswer:
      'Yes, but only when your exact air fryer manual allows parchment. A perforated air-fryer liner is the better choice; regular parchment must be trimmed to fit and fully held down by food. If you preheat, do it with no parchment inside, then add the paper and food together. If the manual bans paper liners, use the bare basket or an approved accessory.',

    mainRisk: 'Fire',
    damages: 'The air fryer',
    alternative: 'Bare basket or approved accessory',

    conditionsOk: [
      'Check the manual for your exact model and use parchment only when it permits liners or paper.',
      'Choose a perforated liner sized for the basket and approved for that style of air fryer.',
      'With regular parchment, cut the sheet no larger than the food holding it down and leave basket openings exposed around it.',
      'If preheating is needed, heat the fryer first, then place the paper and food inside together.',
    ],
    conditionsNever: [
      'Never preheat with parchment in the basket or run the appliance with a loose, unweighted sheet.',
      'Never use any parchment when the air fryer manual prohibits paper liners.',
      'Never let the paper extend upward toward the heating element or leave broad corners uncovered by food.',
      'Never line the grease-collection pan or seal off the basket’s airflow holes with a solid sheet.',
      'Never cook above the paper’s labeled heat limit or use a liner in an unapproved fryer style.',
    ],
    mechanisms: [
      {
        title: 'Fan lift',
        body: 'The fan can pull an unsecured sheet upward. If it reaches the heating element, the paper can scorch or ignite.',
      },
      {
        title: 'Blocked airflow',
        body: 'Hot air needs open paths through and around the basket. Solid parchment covers more openings than a perforated liner, which can reduce browning and cause uneven cooking.',
      },
    ],

    calloutLabel: 'Why advice conflicts',
    calloutBody: [
      'Parchment is common on oven pans, so it looks interchangeable with an air-fryer liner. A basket air fryer sends fast-moving air around a very light sheet. During preheating, there is no food to keep the paper down.',
      'Official directions differ by product. Some air fryer manufacturers prohibit parchment, while liner manufacturers allow perforated liners under specific conditions. Regular parchment blocks more of the basket than a perforated liner, so fit, airflow, and your model’s instructions all matter.',
    ],

    sources: [
      {
        publisher: 'Reynolds Brands',
        title: 'Can I Put Parchment Paper in the Air Fryer?',
        url: 'https://www.reynoldsbrands.com/faq/can-i-put-parchment-paper-in-an-air-fryer',
        kind: 'manufacturer',
      },
      PHILIPS_FOIL,
      INSTANT_POT_FAQ,
      {
        publisher: 'Cuisinart',
        title: 'Air Fryer Guide',
        url: 'https://www.cuisinart.com/the-kitchen-guide/airfryer.html',
        kind: 'manufacturer',
      },
    ],
    reviewedAt: REVIEWED,
    reviewScope:
      'Reviewed September 1, 2026, against official Philips, Instant Pot, Cuisinart, and Reynolds guidance on parchment, airflow, heat ratings, and preheating.',
  },

  /* -------------------------------------------------------------- wax paper */
  {
    subjectSlug: 'wax-paper',
    subjectName: 'Wax Paper',
    subjectKind: 'Material',
    subjectNote: 'Wax-coated paper for food prep',

    relation: 'in',

    targetSlug: 'air-fryer',
    targetName: 'Air Fryer',
    targetKind: 'Appliance',
    targetNote: 'Countertop hot-air cooking appliance',

    eyebrow: 'Kitchen · Liners & Wraps',
    h1: 'Can I Use Wax Paper in an Air Fryer?',
    seoTitle: 'Can Wax Paper Go in an Air Fryer? | Can I Use It With',
    metaDescription:
      'No. Wax paper can melt under air-fryer heat, and loose paper may reach the heating element and burn. Use only a liner your model allows.',

    verdict: 'no',
    shortAnswer:
      "No. Do not put wax paper in an air fryer. Its coating can melt under exposed cooking heat, and loose paper can rise toward the heating element and burn. Use a liner only if your air fryer's manual allows it.",

    mainRisk: 'Smoke or fire',
    damages: 'Food or appliance',
    alternative: 'Manual-approved parchment liner',

    conditionsOk: [
      'Keep wax paper outside the air fryer and use it for food prep, wrapping, or cooling.',
      'Cook directly in the basket or on the tray when your manual does not allow liners.',
      'If your manual allows parchment, use a purpose-made air-fryer liner within its heat rating.',
      'Hold any approved liner down with food and leave the required airflow openings clear.',
    ],
    conditionsNever: [
      'Do not place wax paper in the basket, pan, or air-fryer oven during a cooking cycle.',
      'Do not preheat the air fryer with wax paper or any loose paper inside.',
      'Do not substitute wax paper for parchment paper.',
      'Do not allow an approved liner to touch or rise toward the heating element.',
      'Do not cover the basket or pan in a way that blocks airflow.',
    ],
    mechanisms: [
      {
        title: 'The coating melts',
        body: 'Wax paper has a coating that cannot withstand exposed cooking heat. The coating can melt onto the food or cooking surface.',
      },
      {
        title: 'Loose paper can lift',
        body: 'Air fryers circulate hot air with a fan. A light sheet can rise toward the heating element and begin to burn.',
      },
      {
        title: 'Airflow can be blocked',
        body: 'A sheet across the basket floor or grease pan restricts circulation. Cooking performance drops.',
      },
    ],

    calloutLabel: 'Wax vs. Parchment',
    calloutBody: [
      'Wax paper and parchment paper look similar, and both have nonstick surfaces. Wax paper carries a wax coating and is intended mainly for room-temperature or cold tasks, plus microwave covering. Exposed cooking heat can melt the coating.',
      'Parchment is designed for baking heat, but air-fryer rules still vary by model. Some manufacturers prohibit paper liners, while others sell or allow purpose-made parchment liners. Follow your manual, and keep any approved liner secured under food without blocking required airflow.',
    ],

    sources: [
      {
        publisher: 'Reynolds Brands',
        title: 'Wax Paper',
        url: 'https://www.reynoldsbrands.com/products/kitchen-papers/cut-rite-wax-paper',
        kind: 'manufacturer',
      },
      PHILIPS_FOIL,
      INSTANT_POT_FAQ,
      {
        publisher: 'Chefman',
        title: '8 x 8.2" Air Fryer Liners',
        url: 'https://chefman.com/products/8-x-8-2-air-fryer-liners',
        kind: 'manufacturer',
      },
    ],
    reviewedAt: REVIEWED,
    reviewScope:
      'Reviewed against wax-paper manufacturer guidance and air-fryer support documents covering heat exposure, loose paper near heating elements, and airflow.',
  },

  /* ------------------------------------------------------------ paper plate */
  {
    subjectSlug: 'paper-plate',
    subjectName: 'Paper Plate',
    subjectKind: 'Material',
    subjectNote: 'Disposable plate made from paperboard',

    relation: 'in',

    targetSlug: 'air-fryer',
    targetName: 'Air Fryer',
    targetKind: 'Appliance',
    targetNote: 'Countertop appliance using fast hot air',

    eyebrow: 'Kitchen · Disposable Serveware',
    h1: 'Can I Use a Paper Plate in an Air Fryer?',
    seoTitle: 'Paper Plates in Air Fryers: Safe or Not? | Can I Use It With',
    metaDescription:
      'No. Ordinary paper plates can block airflow in an air fryer and may scorch or burn if they shift toward the heating element. Use the basket or an approved dish.',

    verdict: 'no',
    shortAnswer:
      'No. Do not put a paper plate in an air fryer, even if food is holding it down. Cook in the bare basket or in cookware approved for your model, then transfer the food to the plate for serving. Manufacturer guidance prohibits paper in some air fryers, and a solid plate interferes with airflow.',

    mainRisk: 'Fire',
    damages: 'The air fryer',
    alternative: 'Bare basket or approved cookware',

    conditionsOk: [
      'Use the paper plate only for serving after the food leaves the air fryer.',
      'Cook directly on the basket or crisper tray when your manual calls for it.',
      'Use an oven-safe dish or manufacturer-approved accessory only when your model’s instructions allow it.',
    ],
    conditionsNever: [
      'Never put a paper plate in the basket or cooking chamber.',
      'Never preheat the air fryer with a paper plate inside.',
      'Never assume a microwave-safe label also covers air-fryer use.',
      'Never cover the perforated basket floor with a solid disposable plate.',
      'Never treat a thicker plate or food on top as enough to make paper safe.',
    ],
    mechanisms: [
      {
        title: 'Paper can burn',
        body: 'An air fryer surrounds the plate with hot moving air near a heating element. Some manufacturer safeguards prohibit paper outright because it can scorch or burn inside the appliance.',
      },
      {
        title: 'The plate blocks airflow',
        body: 'Hot air must pass around and beneath the food. A solid plate covers basket openings, reducing circulation and leaving food to cook poorly or unevenly.',
      },
    ],

    calloutLabel: 'Why Microwaves Mislead',
    calloutBody: [
      'White paper plates are commonly used for microwave reheating. That familiar use can make a disposable plate seem safe anywhere food gets hot.',
      'An air fryer works like a compact convection oven, using a heating element and fast-moving hot air. Microwave-safe describes microwave use only. It does not mean the plate is approved for direct oven-style heat or a fan-driven cooking chamber.',
    ],

    sources: [
      {
        publisher: 'BLACK+DECKER',
        title: 'Purifry Fryer AFBD Series Use and Care Manual',
        url: 'https://cdn.shopify.com/s/files/1/0613/0266/9421/files/AFBD42-0BD_Use_and_Care_Manual.pdf?v=1760707197',
        kind: 'manufacturer',
      },
      PHILIPS_FOIL,
      INSTANT_POT_FAQ,
      {
        publisher: 'University of Wisconsin Extension',
        title: 'Choose the Right Containers and Location When Storing Food at Home',
        url: 'https://taylor.extension.wisc.edu/files/2010/08/Choose-the-Right-Containers-When-Storing-Food-at-Home.pdf',
        kind: 'academic',
      },
    ],
    reviewedAt: REVIEWED,
    reviewScope:
      'Reviewed against BLACK+DECKER safeguards, Philips and Instant Pot air-fryer guidance, and University of Wisconsin Extension microwave-container guidance.',
  },

  /* ------------------------------------------------------------- glass bowl */
  {
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
      "The bowl's care instructions explicitly permit air fryers or countertop convection appliances.",
      'The air fryer manual allows ovenproof dishes, and the bowl sits in the basket or rack position it specifies.',
      'The bowl stays below its rated temperature and leaves open space around its sides for airflow.',
    ],
    conditionsNever: [
      'Use an ordinary serving bowl or any glass item with no clear oven-use rating and care instructions.',
      'Use a bowl whose manufacturer excludes air fryers; current Pyrex guidance does.',
      'Use glass that is chipped, cracked, or deeply scratched.',
      "Add cool liquid to hot glass, set hot glass on a wet or cold surface, or make a temperature transfer the bowl's manufacturer prohibits.",
      'Let the bowl touch the heating element or cook with a lid that is not separately approved for heated use.',
    ],
    mechanisms: [
      {
        title: 'Thermal shock',
        body: 'Glass expands as it heats and contracts as it cools. A fast, uneven temperature change builds stress through the bowl and can crack or shatter it.',
      },
      {
        title: 'Flaws start cracks',
        body: "Chips and deep scratches reduce the glass's strength. A flaw can grow into a crack during heating even after earlier uses seemed normal.",
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
    reviewedAt: REVIEWED,
    reviewScope:
      'Reviewed current manufacturer and CPSC guidance on air-fryer cookware, appliance limits, glass composition, tempering, damage, airflow, and thermal shock.',
  },

  /* ------------------------------------------------------------------ pyrex */
  {
    subjectSlug: 'pyrex',
    subjectName: 'Pyrex',
    subjectKind: 'Cookware',
    subjectNote: 'Branded glass bakeware and storage',

    relation: 'in',

    targetSlug: 'air-fryer',
    targetName: 'Air Fryer',
    targetKind: 'Appliance',
    targetNote: 'Countertop hot-air cooking appliance',

    eyebrow: 'Kitchen · Cookware & Appliances',
    h1: 'Can I Use Pyrex in an Air Fryer?',
    seoTitle: 'Pyrex in an Air Fryer: Safe or Not? | Can I Use It With',
    metaDescription:
      'No. Pyrex says its glassware cannot be used in an air fryer because the appliance is a direct heat source that can damage the dish.',

    verdict: 'no',
    shortAnswer:
      'No. Do not put Pyrex glassware in an air fryer, even if the dish fits. Use the fryer’s basket, tray, or another accessory approved in its manual. Pyrex classifies an air fryer as a direct heat source and warns that improper use can damage the dish or cause injury.',

    mainRisk: 'Glass shattering',
    damages: 'The Pyrex dish',
    alternative: 'Air-fryer-approved cooking vessel',

    conditionsOk: [
      'Use the air fryer’s supplied basket or tray as directed in its manual.',
      'Choose another cooking vessel only when the air fryer manufacturer expressly approves it.',
      'For hot cooking with Pyrex, use a fully preheated conventional or convection oven under Pyrex’s instructions.',
    ],
    conditionsNever: [
      'Never place Pyrex glassware in an air fryer, including an oven-style model.',
      'Never assume conventional or convection oven approval includes an air fryer.',
      'Never test the combination at a lower setting or for a shorter cycle; Pyrex gives no air-fryer exception.',
      'Never use Pyrex that is chipped, cracked, or severely scratched in any approved appliance.',
    ],
    mechanisms: [
      {
        title: 'Direct heat exposure',
        body: 'Pyrex classifies an air fryer as a direct heat source and excludes it from approved use. This exposure can damage the dish.',
      },
      {
        title: 'Thermal stress',
        body: 'Fast or uneven heating can leave different parts of the glass at different temperatures. The resulting stress can start cracks or cause the dish to shatter.',
      },
    ],

    calloutLabel: 'Oven-Safe Confusion',
    calloutBody: [
      'The confusion comes from the word “convection.” Air fryers circulate hot air, and Pyrex allows its glassware in fully preheated conventional and convection ovens, so that approval can look broad enough to include an air fryer.',
      'Pyrex draws a separate line for countertop appliances. Its use-and-care guidance specifically lists air fryers among appliances that must not be used with Pyrex, while its FAQ identifies the air fryer as a direct heat source.',
    ],

    sources: [
      {
        publisher: 'Pyrex Home',
        title: 'Frequently Asked Questions',
        url: 'https://pyrexhome.com/pages/frequently-asked-questions',
        kind: 'manufacturer',
      },
      {
        publisher: 'Pyrex Home',
        title: 'Product Warranties / Safety and Usage',
        url: 'https://pyrexhome.com/pages/product-warranties-safety-and-usage',
        kind: 'manufacturer',
      },
      {
        publisher: 'National Institute of Standards and Technology',
        title:
          'NIST Recommended Practice Guide — Fractography of Ceramics and Glasses, 4th edition',
        url: 'https://www.nist.gov/publications/nist-recommended-practice-guide-fractography-ceramics-and-glasses-4th-edition',
        kind: 'government',
      },
    ],
    reviewedAt: REVIEWED,
    reviewScope:
      'Reviewed current Pyrex FAQ and use-and-care warnings for air-fryer use, with NIST guidance used only to explain thermal stress in glass.',
  },
];

export function pairingPath(pairing: Pick<Pairing, 'subjectSlug' | 'targetSlug'>): string {
  return `/use/${pairing.subjectSlug}/${pairing.targetSlug}/`;
}

/** Every pairing sharing a target, in the order authored. Drives the switcher. */
export function pairingsForTarget(targetSlug: string): Pairing[] {
  return PAIRINGS.filter((pairing) => pairing.targetSlug === targetSlug);
}

export function findPairing(subjectSlug: string, targetSlug: string): Pairing | undefined {
  return PAIRINGS.find((p) => p.subjectSlug === subjectSlug && p.targetSlug === targetSlug);
}
