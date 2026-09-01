import type { Pairing } from '../types';

/**
 * Space Heater plugged into Extension Cord.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const spaceHeaterPluggedIntoExtensionCord: Pairing = {
  subjectSlug: 'space-heater',
  subjectName: 'Space Heater',
  subjectKind: 'Appliance',
  subjectNote: 'Portable electric room heater',

  relation: 'plugged-into',

  targetSlug: 'extension-cord',
  targetName: 'Extension Cord',
  targetKind: 'Cord',
  targetNote: 'Temporary flexible power cord',

  eyebrow: 'Electrical · Heaters & Cords',
  h1: 'Can I Plug a Space Heater Into an Extension Cord?',
  seoTitle: 'Can a Space Heater Use an Extension Cord? | Can I Use It With',
  metaDescription:
    'No. Plug a space heater directly into a sound wall outlet. An extension cord or its connections can overheat under the heater’s load and cause a fire.',

  verdict: 'no',
  shortAnswer:
    'No. Plug the space heater directly into a properly functioning wall outlet, not an extension cord, power strip, or surge protector. If the factory cord cannot reach, move the heater or use another suitable outlet. Current CPSC and U.S. Fire Administration guidance warns that this setup can overheat and start a fire.',

  mainRisk: 'Electrical fire',
  damages: 'Cord and outlet',
  alternative: 'Direct wall outlet',

  conditionsOk: [
    'Plug the heater directly into a properly functioning wall outlet and follow its owner’s manual.',
    'Position the heater so its factory cord reaches the outlet without tension.',
    'Insert the plug fully and make sure it fits snugly in the outlet.',
    'If no suitable wall outlet is within reach, move the heater or leave it off in that location.',
  ],
  conditionsNever: [
    'Never plug the heater into an extension cord, including a heavy-duty or high-rated cord.',
    'Never use a power strip, surge protector, or multi-outlet adapter instead.',
    'Never route the heater’s factory cord under rugs, beneath furniture, or through a pinch point.',
    'Never continue using the heater if its cord, plug, outlet, or faceplate becomes hot, loose, discolored, or damaged.',
    'Never alter the plug or attach a replacement cord to gain more reach.',
  ],

  mechanisms: [
    {
      title: 'Sustained load heats cord',
      body: 'A heater places a sustained electrical load on the cord while its heating element is energized. An extension cord or its end fittings can overheat, damaging insulation and creating a fire hazard.',
    },
    {
      title: 'Connections become hot spots',
      body: 'The extension cord adds a plug-and-socket connection between the heater and wall. Loose, worn, or damaged contacts can develop localized heat that deforms or melts the connection.',
    },
  ],

  calloutLabel: 'The Heavy-Duty Assumption',
  calloutBody: [
    'A thick cord with a high printed rating can look like an exception. Current CPSC and U.S. Fire Administration guidance still calls for a direct wall connection; Vornado guidance and the Honeywell HCE100 manual say the same for those products.',
    'The extension cord also adds another socket and another set of contacts. Its label cannot confirm that those contacts are tight or undamaged, and a sustained heater load can turn a weak connection into a hot spot.',
  ],

  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: '7 Highly Effective Portable Heater Safety Habits',
      url: 'https://www.cpsc.gov/s3fs-public/NSN-05-062026_PortableHeaterSafety_0.pdf?VersionId=TqdJuQ__l9DalkMDVHitxYLJWdmsIeon',
      kind: 'government',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Pictograph: Space Heater Safety Tips',
      url: 'https://www.usfa.fema.gov/gallery/pictographs/pictograph41.html',
      kind: 'government',
    },
    {
      publisher: 'Vornado',
      title: 'Vornado FAQs',
      url: 'https://vornado.com/pages/faqs',
      kind: 'manufacturer',
    },
    {
      publisher: 'Honeywell',
      title: 'HeatBud Ceramic Personal Heater HCE100 Series Owner’s Manual',
      url: 'https://www.honeywellpluggedin.com/wp-content/uploads/hce100_heatbud_om.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Reviewed current CPSC and U.S. Fire Administration guidance, Vornado support, and a Honeywell manual covering direct wall connection, overheating, and outlet condition.',
};
