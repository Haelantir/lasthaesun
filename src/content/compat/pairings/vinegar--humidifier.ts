import type { Pairing } from '../types';

/**
 * Vinegar in Humidifier.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const vinegarInHumidifier: Pairing = {
  subjectSlug: 'vinegar',
  subjectName: 'Vinegar',
  subjectKind: 'Liquid',
  subjectNote: 'Acidic cooking and cleaning liquid',

  relation: 'in',

  targetSlug: 'humidifier',
  targetName: 'Humidifier',
  targetKind: 'Appliance',
  targetNote: 'Adds moisture to indoor air',

  eyebrow: 'Home · Humidifier Care',
  h1: 'Can I Use Vinegar in a Humidifier?',
  seoTitle: 'Vinegar and Humidifiers: Safe Cleaning Only | Can I Use It With',
  metaDescription:
    'Yes, but only for powered-off cleaning when the manual allows it. Rinse it out thoroughly, and never run a humidifier with vinegar in the water.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only for powered-off cleaning or descaling when your humidifier’s manual calls for vinegar. Follow that model’s directions, empty the vinegar, and rinse thoroughly before refilling with water. Do not add vinegar to operating water or turn the humidifier on with vinegar inside.',

  mainRisk: 'Chemical mist',
  damages: 'Humidifier components',
  alternative: 'Water specified by manual',

  conditionsOk: [
    'Use only the vinegar type and cleaning method named in the owner’s manual for your exact model.',
    'Turn off, unplug, and empty the humidifier before cleaning; let warm-mist parts cool as directed.',
    'Apply vinegar only to the tank, reservoir, heating element, or other parts the manual specifically lists.',
    'Empty the solution and rinse every treated water-contact surface thoroughly before operating the unit.',
  ],
  conditionsNever: [
    'Never add vinegar to water intended for humidifying the room.',
    'Never power the unit during a vinegar soak or cleaning cycle.',
    'Never mix vinegar with bleach or combine separate scale-removal and disinfection steps.',
    'Never immerse the powered base or let liquid enter a fan opening, control, or other protected area.',
    'Never copy a vinegar ratio or soak time from another humidifier model.',
  ],

  mechanisms: [
    {
      title: 'Vinegar loosens mineral scale',
      body: 'Vinegar wets and loosens mineral deposits on surfaces named in the manual. The scale can then be brushed, wiped, or rinsed away.',
    },
    {
      title: 'Mist carries tank contents',
      body: 'Material left in a humidifier’s water can be released into the room during operation. Ultrasonic and impeller models are especially effective at dispersing tank contents, so cleaning residue must be rinsed away.',
    },
  ],

  calloutLabel: 'Cleaning Is Different',
  calloutBody: [
    'Vinegar appears in many humidifier cleaning instructions, which can look like permission to leave it in the tank. Those steps are performed with the unit off and unplugged, then the vinegar is emptied and rinsed away before the next use.',
    'Vinegar is commonly assigned to scale removal. Some manuals give disinfection its own separate process, and those solutions must never be mixed. Follow the sequence for your exact model.',
  ],

  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Use and Care of Home Humidifiers',
      url: 'https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers',
      kind: 'government',
    },
    {
      publisher: 'Honeywell',
      title: 'Top Fill Warm Mist Humidifier Owner’s Manual',
      url: 'https://www.honeywellpluggedin.com/wp-content/uploads/hwm445_series_om_a004078r0_r7_14feb20-1.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Vicks Humidifiers',
      title: 'Vicks Warm Mist Humidifier (VWM845)',
      url: 'https://www.vickshumidifiers.com/vwm845-faq/',
      kind: 'manufacturer',
    },
    {
      publisher: 'Crane USA',
      title: 'How do I clean my humidifier?',
      url: 'https://support.crane-usa.com/hc/en-us/articles/10296737978011-How-do-I-clean-my-humidifier',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current EPA guidance and official Honeywell, Vicks, and Crane instructions covering vinegar descaling, rinsing, and operation.',
};
