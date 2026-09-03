import type { Pairing } from '../types';

/**
 * Space Heater plugged into Portable Power Station.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const spaceHeaterPluggedIntoPortablePowerStation: Pairing = {
  subjectSlug: 'space-heater',
  subjectName: 'Space Heater',
  subjectKind: 'Appliance',
  subjectNote: 'Portable electric room heater',

  relation: 'plugged-into',

  targetSlug: 'portable-power-station',
  targetName: 'Portable Power Station',
  targetKind: 'Battery',
  targetNote: 'Battery with built-in AC inverter',

  eyebrow: 'Home Power · Space Heaters',
  h1: 'Can I Plug a Space Heater Into a Portable Power Station?',
  seoTitle: 'Space Heater With a Portable Power Station? | Can I Use It With',
  metaDescription:
    'Yes, with limits. The heater must stay within the station’s continuous AC rating, both manuals must allow the setup, and runtime varies by heat setting.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. Use it only if both manuals permit the connection and the heater’s selected setting, plus every other connected load, stays within the station’s continuous AC rating. Runtime may be brief because space heaters draw substantial power; a lower heat setting lasts longer. Plug the heater directly into the station without an extension cord or power strip.',

  mainRisk: 'Overheated connection',
  damages: 'Plug and receptacle',
  alternative: 'Lower-wattage heater',

  conditionsOk: [
    'Both the heater manual and power station manual permit the setup.',
    'The station’s AC voltage, frequency, and receptacle match the heater’s requirements.',
    'The heater’s selected wattage and all other connected loads together do not exceed the station’s continuous AC output.',
    'The power station stays dry with its ventilation openings clear and remains within its specified operating conditions.',
  ],
  conditionsNever: [
    'Do not use the setup if the heater manual requires a wall outlet or otherwise prohibits portable power sources.',
    'Do not treat the station’s surge rating as continuous capacity; use any boost mode only as its manual allows.',
    'Do not place an extension cord, power strip, or plug adapter between the heater and the station.',
    'Do not continue if the plug fits loosely, the receptacle becomes hot or discolored, or either product is damaged.',
    'Do not leave the heater running unattended or while sleeping.',
  ],

  mechanisms: [
    {
      title: 'Continuous output sets the limit',
      body: 'The inverter can supply only its continuous AC rating for a sustained load. If the heater and other devices demand more, overload protection may shut the AC outlet off.',
    },
    {
      title: 'Runtime follows average draw',
      body: 'Battery capacity is the stored energy available. Higher heat settings use it faster; thermostat cycling may extend runtime, while inverter conversion consumes some energy before it reaches the heater.',
    },
    {
      title: 'Loose connections create heat',
      body: 'Heater current passing through a loose or unsuitable connection creates extra heat at the plug and receptacle. The connection can deform or start a fire.',
    },
  ],

  calloutLabel: 'Output and Runtime Differ',
  calloutBody: [
    'A high AC-output rating does not mean the station has a large battery. That figure tells you whether the inverter can carry the heater while it is running.',
    'Battery capacity determines endurance. Two stations with comparable AC output ratings can provide very different heater runtimes because they store different amounts of energy.',
  ],

  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Warns Consumers to be Cautious When Using Space Heaters, Furnaces and Fireplaces This Winter',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2023/CPSC-Warns-Consumers-to-be-Cautious-When-Using-Space-Heaters-Furnaces-and-Fireplaces-This-Winter',
      kind: 'government',
    },
    {
      publisher: 'Goal Zero',
      title: 'Yeti 300/500/700 User Guide',
      url: 'https://cdn.shopify.com/s/files/1/0520/1156/5225/files/93035_93040_93045_2023_Yeti300500700_120V_UserGuide_REV_E_WEB.pdf?v=1707434330',
      kind: 'manufacturer',
    },
    {
      publisher: 'Honeywell',
      title: 'Honeywell HHF175 Two Position Heater Manual',
      url: 'https://www.honeywellstore.com/store/images/pdf/Honeywell-HHF175-Heater-Manual.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'EcoFlow',
      title: 'EcoFlow DELTA Pro Portable Power Station',
      url: 'https://www.ecoflow.com/us/delta-pro-portable-power-station',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed against CPSC guidance and manufacturer documents covering heater settings, AC output limits, runtime, plug safety, overload behavior, and ventilation.',
};
