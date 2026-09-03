import type { Pairing } from '../types';

/**
 * Extension Cord with EV Charger.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const extensionCordWithEvCharger: Pairing = {
  subjectSlug: 'extension-cord',
  subjectName: 'Extension Cord',
  subjectKind: 'Accessory',
  subjectNote: 'Flexible cord that extends outlet reach',

  relation: 'with',

  targetSlug: 'ev-charger',
  targetName: 'EV Charger',
  targetKind: 'Equipment',
  targetNote: 'Equipment that delivers power to EVs',

  eyebrow: 'Cars · EV Charging',
  h1: 'Can I Use an Extension Cord With an EV Charger?',
  seoTitle: 'Extension Cords and EV Chargers: What Is Safe? | Can I Use It With',
  metaDescription:
    'No. Do not use a household extension cord for Level 1 or Level 2 EV charging. Use a properly located outlet or EVSE whose factory cable reaches.',

  verdict: 'no',
  shortAnswer:
    'No. Do not put a household, garage, RV, or appliance extension cord between the outlet and an EV charger, for either Level 1 or Level 2 charging. Do not add a J1772 or NACS extension on the vehicle side unless the charger and vehicle manufacturers expressly approve that exact accessory; some charger manuals prohibit these extensions. Use an outlet or safety-certified EVSE whose factory cable reaches the car.',

  mainRisk: 'Fire or shock',
  damages: 'Cord and outlet',
  alternative: 'Properly located EVSE',

  conditionsOk: [
    'Plug a portable charger directly into a grounded outlet that its manual allows and that holds the plug firmly.',
    'Use a dedicated branch circuit for Level 1 charging, with the outlet located near the parking space.',
    'Have Level 2 equipment hardwired or connected to an electrician-inspected receptacle as its manufacturer specifies.',
    'Use only the EVSE’s original vehicle cable and manufacturer-approved interchangeable plugs or adapters.',
  ],
  conditionsNever: [
    'Do not use an ordinary household extension cord to reach a Level 1 charger.',
    'Do not use a dryer, RV, generator, or appliance extension cord for Level 2 charging.',
    'Do not add a third-party J1772 or NACS extension because the connectors happen to fit.',
    'Do not use power strips, splitters, conversion plugs, or stacked adapters to reach the outlet.',
    'Do not charge with a cord tightly coiled, damaged, wet at a connection, or pinched under an object.',
  ],

  mechanisms: [
    {
      title: 'Added connections create heat',
      body: 'Every extra plug and socket adds contact resistance. A loose, worn, or poorly fitted connection can heat up while charging current continues to flow.',
    },
    {
      title: 'Longer conductors resist current',
      body: 'A long or undersized cord adds electrical resistance. The cord can warm and voltage can drop before power reaches the charger.',
    },
    {
      title: 'Protection may miss trouble',
      body: 'Some portable chargers monitor temperature at their own wall plug. An extension moves the building receptacle away from that sensor and adds another connection that may not be monitored. A vehicle-side extension also adds a coupler outside the charger’s factory cable assembly.',
    },
  ],

  calloutLabel: 'Two kinds of extension',
  calloutBody: [
    'A household extension cord sits between the building receptacle and a portable EV charger. The familiar Level 1 plug can make this look like ordinary appliance use, but Chevrolet prohibits extension cords for both Level 1 and Level 2 charging, and Tesla gives the same instruction for its Mobile Connector. A heavier cord or reduced charging setting does not cancel the manufacturer’s warning.',
    'An EV-charging extension uses a J1772 or NACS connection between the charger handle and the car. It avoids a household-style connection on that side, but the added coupler still needs approval for the exact charger and vehicle. Ford’s Charge Station Pro instructions prohibit using an extension to connect the station to the vehicle. Manuals differ, so matching connectors and an “EV-rated” label are not enough.',
  ],

  sources: [
    {
      publisher: 'U.S. Department of Energy Alternative Fuels Data Center',
      title: 'Charging Electric Vehicles at Home',
      url: 'https://afdc.energy.gov/fuels/electricity-charging-home',
      kind: 'government',
    },
    {
      publisher: 'Chevrolet',
      title: 'How to Charge Your EV at Home',
      url: 'https://www.chevrolet.com/support/vehicle/ev-charging/home-charging/how-to',
      kind: 'manufacturer',
    },
    {
      publisher: 'Tesla',
      title: 'Gen 3 Mobile Connector Owner\'s Manual',
      url: 'https://digitalassets.tesla.com/tesla-contents/image/upload/mobile-connector-gen-3-owners-manual-en-na.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Ford',
      title: 'Ford Charge Station Pro Installation Guide',
      url: 'https://www.nvcaem.ford.com/content/dam/nvc/non-vehicle-commerce/us/en-us/chargers/pdfs/FordChargeStationProInstallationGuide.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed Level 1 and Level 2 input cords, vehicle-side extensions, and safer reach options against current DOE guidance and Chevrolet, Tesla, and Ford instructions.',
};
