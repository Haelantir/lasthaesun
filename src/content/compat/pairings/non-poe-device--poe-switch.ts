import type { Pairing } from '../types';

/**
 * Non-PoE Device plugged into PoE Switch.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const nonPoeDevicePluggedIntoPoeSwitch: Pairing = {
  subjectSlug: 'non-poe-device',
  subjectName: 'Non-PoE Device',
  subjectKind: 'Electronics',
  subjectNote: 'Ethernet device without PoE input',

  relation: 'plugged-into',

  targetSlug: 'poe-switch',
  targetName: 'PoE Switch',
  targetKind: 'Hardware',
  targetNote: 'Network switch that can supply power',

  eyebrow: 'Technology · Network Hardware',
  h1: 'Can I Plug a Non-PoE Device Into a PoE Switch?',
  seoTitle: 'Non-PoE Devices on PoE Switches: Safe or Risky? | Can I Use It With',
  metaDescription:
    'Yes, if the port uses IEEE 802.3af, 802.3at, or 802.3bt in automatic mode. Avoid passive or forced PoE, which may apply power without safe detection.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, if the switch port uses IEEE 802.3af, 802.3at, or 802.3bt PoE in its normal automatic mode. The switch checks for a PoE signature and leaves a non-PoE device on data only. Do not connect it to a passive, always-on, or manually forced PoE output; use a data-only port if the mode is unclear.',

  mainRisk: 'Electrical damage',
  damages: 'Non-PoE device',
  alternative: 'Data-only switch port',

  conditionsOk: [
    'The exact switch port is documented as supporting IEEE 802.3af, 802.3at, or 802.3bt.',
    'The port is using its normal automatic PoE mode with no force-on setting enabled.',
    'The non-PoE device uses its regular power adapter if it needs external power to operate.',
    'You use a data-only port when the switch manual identifies the PoE output as passive or always on.',
  ],
  conditionsNever: [
    'Never connect a non-PoE device to a port documented as passive or always-on PoE.',
    'Never enable a manual force-on or power override for a non-PoE device.',
    'Never assume an older or proprietary PoE port follows IEEE detection because it has an Ethernet jack.',
    'Never test an unidentified PoE mode on the device; verify the exact switch model and port settings first.',
  ],

  mechanisms: [
    {
      title: 'Standard ports test first',
      body: 'An IEEE 802.3af, 802.3at, or 802.3bt switch probes the connection for a valid powered-device signature before normal power is applied. Without that signature, the port can carry Ethernet data without powering the device through the cable.',
    },
    {
      title: 'Passive ports stay live',
      body: 'Passive PoE places a fixed supply on selected cable pairs without negotiation. A non-PoE Ethernet interface can receive power it was never designed to handle, causing permanent damage.',
    },
  ],

  calloutLabel: 'PoE Label Confusion',
  calloutBody: [
    'A PoE switch port looks like a powered outlet, so it is easy to assume every connected device receives power. With IEEE 802.3af, 802.3at, and 802.3bt, the switch checks for a powered-device signature first. A normal non-PoE Ethernet device does not present that signature, so the port remains data-only.',
    'PoE on the label does not guarantee IEEE behavior. Passive PoE keeps voltage on the output without negotiation, and some proprietary or prestandard equipment uses different detection or power arrangements. Age alone does not settle it; check the exact switch manual for IEEE compliance, passive output, or any forced-power setting.',
  ],

  sources: [
    {
      publisher: 'TP-Link Omada',
      title: 'Frequently Asked Questions About Unmanaged Switches',
      url: 'https://support.omadanetworks.com/us/document/13020/',
      kind: 'manufacturer',
    },
    {
      publisher: 'Cisco',
      title: 'PoE, Powered Device, and Switch',
      url: 'https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/infra/poe/poe-configuration-guide/g-poe/c-poe-and-switch.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Ethernet Alliance',
      title: 'The Hazards of Passive PoE',
      url: 'https://ethernetalliance.org/blog/2018/02/06/the-hazards-of-passive-poe/',
      kind: 'industry',
    },
    {
      publisher: 'Ubiquiti',
      title: 'PoE Availability and Modes',
      url: 'https://help.ui.com/hc/en-us/articles/115000263008-PoE-Availability-and-Modes',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed standard PoE detection and non-PoE behavior against Cisco and TP-Link guidance, plus Ethernet Alliance and Ubiquiti warnings on passive PoE.',
};
