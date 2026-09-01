import type { Pairing } from '../types';

/**
 * Laptop Charger plugged into Extension Cord.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const laptopChargerPluggedIntoExtensionCord: Pairing = {
  subjectSlug: 'laptop-charger',
  subjectName: 'Laptop Charger',
  subjectKind: 'Charger',
  subjectNote: 'AC adapter for a laptop',

  relation: 'plugged-into',

  targetSlug: 'extension-cord',
  targetName: 'Extension Cord',
  targetKind: 'Cord',
  targetNote: 'Temporary cord extending an outlet\'s reach',

  eyebrow: 'Electronics · Power & Charging',
  h1: 'Can I Plug a Laptop Charger Into an Extension Cord?',
  seoTitle: 'Laptop Charger With an Extension Cord: Is It Safe? | Can I Use It With',
  metaDescription:
    'Yes, with limits: use an undamaged extension cord rated for the charger and all other loads. Keep plugs secure, grounding intact, and the cord uncovered.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use an undamaged extension cord whose rating covers the laptop charger and every other device connected to it, with the plug fully inserted and any grounding pin intact. Do not use a hot, loose, covered, wet, or daisy-chained cord; follow the laptop manual if it calls for a wall outlet or a manufacturer-supplied extension.',

  mainRisk: 'Overheating and fire',
  damages: 'Cord and plugs',
  alternative: 'Direct wall outlet',

  conditionsOk: [
    'The extension cord\'s rating meets or exceeds the total load of the laptop charger and anything else plugged into it.',
    'The charger plug fits fully, and a grounding pin, if present, remains connected through a grounded cord and outlet.',
    'The cord is listed by a recognized national testing laboratory and marked for the location where you use it.',
    'The cord stays uncovered and free from pressure while the charger brick sits in a well-ventilated area.',
  ],
  conditionsNever: [
    'Do not use a damaged charger or extension cord, or keep using either one if a plug or socket becomes hot or discolored.',
    'Do not plug one extension cord into another or connect it through a chain of power strips.',
    'Do not run the cord under rugs, through doorways, or beneath furniture.',
    'Do not use an indoor-only cord outdoors or anywhere wet.',
    'Do not leave the setup in place as permanent wiring; unplug the extension cord when it is not needed.',
  ],

  mechanisms: [
    {
      title: 'Cord Overload',
      body: 'Current flowing through the cord produces heat. When the combined load exceeds the cord\'s marked capacity, the cable, plug, or socket can overheat and start a fire.',
    },
    {
      title: 'Loose Plug Contact',
      body: 'A loose or partly inserted plug creates a poor electrical connection. Heat and arcing can develop at the plug or socket.',
    },
    {
      title: 'Insulation Damage',
      body: 'Rugs, doors, furniture, and foot traffic can crush or wear the cord. Damaged insulation or conductors can expose live parts or create a short, leading to shock or fire.',
    },
  ],

  calloutLabel: 'What Sets the Limit',
  calloutBody: [
    'People often assume a laptop charger is too delicate for an extension cord, or low-powered enough for any cord. A suitable extension cord carries the household AC supply to the charger, which still performs the power conversion for the laptop.',
    'The real checks are on the cord and connection. Read the cord\'s rating and include every connected device when checking the load. Inspect the plug fit and cable condition, keep grounding intact, and use the cord only where its marking allows. A laptop maker may add a model-specific rule, so follow the manual if it calls for a wall outlet or a manufacturer-supplied extension.',
  ],

  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Household Extension Cords Can Cause Fires',
      url: 'https://www.cpsc.gov/s3fs-public/5032.pdf',
      kind: 'government',
    },
    {
      publisher: 'Lenovo',
      title: 'Extension Cords and Related Devices',
      url: 'https://download.lenovo.com/pccbbs/pubs/p330_tiny/html_en/en/Extension_cords_and_related_devices_(topic)_T0000763230.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Dell',
      title: 'Electrical Safety for Dell Product Repair: ESD Protection and Precautions',
      url: 'https://www.dell.com/support/kbdoc/en-us/000137973/safety-precautions-when-working-with-electrical-equipment',
      kind: 'manufacturer',
    },
    {
      publisher: 'Apple',
      title: 'If Your USB-C Power Adapter Isn\'t Charging Your Mac Laptop',
      url: 'https://support.apple.com/en-us/102464',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed CPSC guidance plus Lenovo, Dell, and Apple instructions on ratings, grounding, plug condition, routing, adapter ventilation, and model-specific limits.',
};
