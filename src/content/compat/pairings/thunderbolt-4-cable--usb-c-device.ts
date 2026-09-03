import type { Pairing } from '../types';

/**
 * Thunderbolt 4 Cable with USB-C Device.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const thunderbolt4CableWithUsbCDevice: Pairing = {
  subjectSlug: 'thunderbolt-4-cable',
  subjectName: 'Thunderbolt 4 Cable',
  subjectKind: 'Cable',
  subjectNote: 'Certified high-speed USB-C cable',

  relation: 'with',

  targetSlug: 'usb-c-device',
  targetName: 'USB-C Device',
  targetKind: 'Device',
  targetNote: 'Device with a USB-C port',

  eyebrow: 'Electronics · Cables & Ports',
  h1: 'Can I Use a Thunderbolt 4 Cable With a USB-C Device?',
  seoTitle: 'Thunderbolt 4 Cables With USB-C Devices | Can I Use It With',
  metaDescription:
    'Yes, with limits. Thunderbolt 4 cables work with USB-C devices, but data speed, video output, and charging depend on the capabilities of both ports.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. A certified Thunderbolt 4 cable can connect to a USB-C device, and the link will use the fastest data mode both endpoints support. Video requires compatible display support on the ports, while charging depends on the power source, the device, and the cable’s rating.',

  mainRisk: 'Missing functions',
  damages: 'No expected damage',
  alternative: 'None — leave it out',

  conditionsOk: [
    'Use it when both ports accept USB-C plugs and the cable is certified for Thunderbolt 4.',
    'Expect ordinary USB devices to run at their own supported USB speed.',
    'Use it for video when the source and target ports support a common DisplayPort, USB4, or Thunderbolt video mode.',
    'Use it for charging when the source provides power and the device accepts charging through that USB-C port.',
  ],
  conditionsNever: [
    'Do not expect the cable to add Thunderbolt or faster USB support to a port that lacks it.',
    'Do not assume a USB-C port can send video without checking the device specifications.',
    'Do not expect high-power charging when the source or device lacks matching USB Power Delivery support.',
    'Do not place an ordinary USB hub between the endpoints when you need a Thunderbolt connection.',
  ],

  mechanisms: [
    {
      title: 'Data falls back',
      body: 'The cable carries Thunderbolt and USB signaling. When a device does not support Thunderbolt, the connection uses a USB mode shared by the host and device.',
    },
    {
      title: 'Video needs port support',
      body: 'The cable can carry DisplayPort signals, but the source port must produce video and the receiving device must accept it. Without that support, USB data may still work while the screen stays blank.',
    },
    {
      title: 'Power is negotiated',
      body: 'USB-C assigns power roles when the devices connect. USB Power Delivery lets the powered device request an available level, with the source and cable setting the limit.',
    },
  ],

  calloutLabel: 'Same Plug, Different Features',
  calloutBody: [
    'Matching USB-C plugs tell you the cable fits. They do not tell you whether the port supports basic USB data, faster USB modes, video output, or USB Power Delivery.',
    'Thunderbolt 4 certification gives the cable broad data and display capability. It cannot unlock a feature missing from the host or device, so check each port’s specifications when speed, video, or charging matters.',
  ],

  sources: [
    {
      publisher: 'Intel',
      title: 'What Is Thunderbolt 4?',
      url: 'https://www.intel.com/content/www/us/en/gaming/resources/upgrade-gaming-accessories-thunderbolt-4.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'USB Implementers Forum',
      title: 'USB Type-C and USB 2.0 Type-C Cable and Connector Language Usage Guidelines',
      url: 'https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf',
      kind: 'standards_body',
    },
    {
      publisher: 'Video Electronics Standards Association',
      title: 'DisplayPort FAQ',
      url: 'https://www.displayport.org/faq/',
      kind: 'standards_body',
    },
    {
      publisher: 'USB Implementers Forum',
      title: 'USB Charger (USB Power Delivery)',
      url: 'https://www.usb.org/usb-charger-pd',
      kind: 'standards_body',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed connector fit, USB data fallback, DisplayPort video, and USB Power Delivery using current Intel, USB-IF, and VESA guidance.',
};
