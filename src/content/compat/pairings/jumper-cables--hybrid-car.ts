import type { Pairing } from '../types';

/**
 * Jumper Cables on Hybrid Car.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const jumperCablesOnHybridCar: Pairing = {
  subjectSlug: 'jumper-cables',
  subjectName: 'Jumper Cables',
  subjectKind: 'Tool',
  subjectNote: 'Insulated leads for jump-starting batteries',

  relation: 'on',

  targetSlug: 'hybrid-car',
  targetName: 'Hybrid Car',
  targetKind: 'Vehicle',
  targetNote: 'Gas-electric vehicle with two systems',

  eyebrow: 'Cars · Batteries & Starting',
  h1: 'Can I Use Jumper Cables on a Hybrid Car?',
  seoTitle: 'Jumper Cables and Hybrid Cars: Safe Use | Can I Use It With',
  metaDescription:
    'Yes, with limits: jumper cables can start a hybrid through its 12-volt system when the owner\'s manual allows it. Never connect them to the traction battery.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the hybrid\'s 12-volt auxiliary battery is discharged and you use the exact jump points and cable order in its owner\'s manual. Jumper cables cannot charge or jump the high-voltage traction battery. Do not use the hybrid to jump another vehicle unless its manual specifically allows that.',

  mainRisk: 'Battery explosion',
  damages: 'Vehicle electronics',
  alternative: 'Roadside assistance',

  conditionsOk: [
    'The owner\'s manual provides a jump-start procedure for that hybrid model.',
    'The hybrid receives power through its specified 12-volt positive terminal and ground point.',
    'The booster is a 12-volt battery or jump pack, and the vehicles do not touch.',
    'You connect and remove the cables in the exact order given in the manual.',
  ],
  conditionsNever: [
    'Never connect jumper cables to the high-voltage traction battery or other high-voltage components.',
    'Never reverse the positive and negative clamps or allow the clamps to touch.',
    'Never use a different-voltage booster or improvise a terminal or ground point.',
    'Never attempt to jump-start a frozen 12-volt battery.',
    'Never use the hybrid as a donor vehicle unless its manual explicitly permits it.',
  ],

  mechanisms: [
    {
      title: '12-Volt System Wake-Up',
      body: 'The auxiliary battery powers the controls needed to bring the hybrid system online. External 12-volt power can let the vehicle reach READY.',
    },
    {
      title: 'Separate Traction Battery',
      body: 'The high-voltage traction battery supplies the electric drive system. Standard jumper cables cannot jump or recharge that battery.',
    },
    {
      title: 'Incorrect Cable Path',
      body: 'Reverse polarity or a wrong ground can short the low-voltage circuit and damage electronics. A spark near the 12-volt battery can ignite hydrogen gas.',
    },
  ],

  calloutLabel: 'Two Batteries, Two Jobs',
  calloutBody: [
    'A hybrid has a high-voltage traction battery and a separate low-voltage battery. The jump-start procedure reaches the 12-volt side, which powers the controls needed to bring the vehicle to READY.',
    'Using the hybrid as the donor is a separate decision. Some hybrid manuals prohibit it, while others describe limited donor setups, so the donor vehicle\'s manual decides.',
  ],

  sources: [
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Electric and Hybrid Vehicles',
      url: 'https://www.nhtsa.gov/vehicle-safety/electric-and-hybrid-vehicles',
      kind: 'government',
    },
    {
      publisher: 'Ford Motor Company',
      title: 'Jump Starting the Vehicle - Hybrid Electric Vehicle (HEV)',
      url: 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G2236586&Uid=G2213320&buildtype=web&countryCode=USA&div=f&languageCode=en&vFilteringEnabled=False&variantid=10113',
      kind: 'manufacturer',
    },
    {
      publisher: 'Kia Corporation',
      title: 'Jump starting',
      url: 'https://ownersmanual.kia.com/full_webhelp/LQ2AH/2027/en_US/topics/t00749.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current NHTSA guidance and manufacturer manuals covering hybrid 12-volt jump points, cable order, traction-battery limits, and donor restrictions.',
};
