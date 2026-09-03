import type { Pairing } from '../types';

/**
 * HDMI 2.1 Cable in HDMI 2.0 Port.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const hdmi21CableInHdmi20Port: Pairing = {
  subjectSlug: 'hdmi-2-1-cable',
  subjectName: 'HDMI 2.1 Cable',
  subjectKind: 'Cable',
  subjectNote: 'Higher-bandwidth digital audio and video cable',

  relation: 'in',

  targetSlug: 'hdmi-2-0-port',
  targetName: 'HDMI 2.0 Port',
  targetKind: 'Port',
  targetNote: 'Earlier-generation HDMI connection',

  eyebrow: 'Electronics · HDMI Compatibility',
  h1: 'Can I Use an HDMI 2.1 Cable in an HDMI 2.0 Port?',
  seoTitle: 'HDMI 2.1 Cable in an HDMI 2.0 Port | Can I Use It With',
  metaDescription:
    'Yes. A genuine Ultra High Speed HDMI cable works in an HDMI 2.0 port, but bandwidth and features remain limited by the port and connected devices.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes. A genuine Ultra High Speed HDMI Cable, often sold as an HDMI 2.1 cable, is backward-compatible with an HDMI 2.0 port and does not harm it. The connection remains limited to modes supported by the source, port, and display, up to the HDMI 2.0 maximum of 18 Gbps.',

  mainRisk: 'Limited output',
  damages: 'No hardware damage',
  alternative: 'Premium High Speed cable',

  conditionsOk: [
    'Use it when the connector type matches the port, such as Type A to Type A.',
    'Choose video and audio settings supported by both connected devices.',
    'Include any receiver, soundbar, switch, or adapter when checking support for the desired mode.',
    'If buying a certified cable, look for the official Ultra High Speed HDMI Certification Label and verify it.',
  ],
  conditionsNever: [
    'Do not expect the cable to make an HDMI 2.0 port deliver 48 Gbps; the HDMI 2.0 maximum is 18 Gbps.',
    'Do not assume a receiver, switch, soundbar, or adapter can pass every format supported by the source and display.',
    'Do not treat HDMI 2.1 cable wording in a listing as proof of certification.',
    'Do not force a Mini HDMI or Micro HDMI plug into a full-size Type A port.',
  ],

  mechanisms: [
    {
      title: 'Same connector, older signaling',
      body: 'HDMI 2.0 did not introduce a new connector, and Ultra High Speed cables are backward-compatible with existing HDMI devices. With an HDMI 2.0 device, the connection uses signaling supported by that port.',
    },
    {
      title: 'The port caps data',
      body: 'HDMI 2.0 supports up to 18 Gbps. An Ultra High Speed cable can support systems up to 48 Gbps, but unused cable capacity cannot raise the port’s limit.',
    },
    {
      title: 'Label verifies the cable',
      body: 'The official label lets you verify the registered cable model and length. Certification covers cable performance and low-EMI testing, not the capabilities of the connected devices.',
    },
  ],

  calloutLabel: 'Cable Names Cause Confusion',
  calloutBody: [
    'HDMI 2.1 cable is common store shorthand. HDMI Licensing Administrator uses the official name Ultra High Speed HDMI Cable and directs cable products to use official cable names instead of standalone version numbers.',
    'The certification label confirms that the cable model passed required testing for its category and lets you verify its registered details. It does not make an HDMI 2.0 port run at 48 Gbps or add features missing from the device.',
  ],

  sources: [
    {
      publisher: 'HDMI Licensing Administrator, Inc.',
      title: 'HDMI 2.2 Specification Technology Overview',
      url: 'https://www.hdmi.org/spec/hdmi2',
      kind: 'standards_body',
    },
    {
      publisher: 'HDMI Licensing Administrator, Inc.',
      title: 'Ultra96 HDMI Cable and Ultra High Speed HDMI Cable',
      url: 'https://www.hdmi.org/spec21sub/ultrahighspeedcable',
      kind: 'standards_body',
    },
    {
      publisher: 'HDMI Forum, Inc.',
      title: 'HDMI Forum Releases Version 2.0 of the HDMI Specification',
      url: 'https://www.hdmi.org/press/bodydetails/24',
      kind: 'standards_body',
    },
    {
      publisher: 'HDMI Licensing Administrator, Inc.',
      title: 'HDMI Cable Overview',
      url: 'https://www.hdmi.org/resource/cables',
      kind: 'standards_body',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed backward compatibility, bandwidth limits, official cable naming, and certification requirements against current HDMI LA and HDMI Forum materials.',
};
