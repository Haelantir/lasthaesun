import type { Pairing } from '../types';

/**
 * Snow Chains on AWD Car.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const snowChainsOnAwdCar: Pairing = {
  subjectSlug: 'snow-chains',
  subjectName: 'Snow Chains',
  subjectKind: 'Accessory',
  subjectNote: 'Traction devices for snow and ice',

  relation: 'on',

  targetSlug: 'awd-car',
  targetName: 'AWD Car',
  targetKind: 'Vehicle',
  targetNote: 'Car that powers all four wheels',

  eyebrow: 'Cars · Winter Driving',
  h1: 'Can I Use Snow Chains on an AWD Car?',
  seoTitle: 'Snow Chains on AWD Cars: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use snow chains on an AWD car only when its exact manual permits the type and tire size, then fit them on the specified axle.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, but only when the owner’s manual for your exact AWD model and tire size allows them. Install the approved type on the axle or axles the manual specifies; AWD does not automatically mean chaining all four tires. If conventional chains are prohibited because of limited clearance, use only an approved alternative traction device and obey posted chain controls.',

  mainRisk: 'Loss of control',
  damages: 'Tires and suspension',
  alternative: 'Approved traction device',

  conditionsOk: [
    'Confirm that the owner’s manual permits chains or another traction device with your exact tire size.',
    'Fit a matched pair, or two pairs when required, only on the axle or axles specified by the vehicle manufacturer.',
    'Make sure the chains are tight and do not touch the body or nearby vehicle components.',
    'Use them on snow- or ice-covered roads while following posted controls and the chain manufacturer’s operating limits.',
  ],
  conditionsNever: [
    'Never install conventional chains when the vehicle manual prohibits them or excludes your tire size.',
    'Never guess the axle or assume every AWD car uses the same chain placement.',
    'Never use chains that are the wrong size, loose, damaged, or striking the vehicle.',
    'Never keep chains installed on roads that are clear of snow and ice.',
    'Never enter a posted chain-control area if you cannot carry or install a legal device approved for the vehicle.',
  ],

  mechanisms: [
    {
      title: 'Grip at the tread',
      body: 'Cross links press into snow or ice and give the tire more edges to work with. This can improve acceleration, braking, and cornering on a covered surface.',
    },
    {
      title: 'AWD distributes drive torque',
      body: 'AWD can send engine power across both axles, which may reduce wheelspin while accelerating. Braking and cornering still depend on the available grip at each tire.',
    },
    {
      title: 'Clearance gets tighter',
      body: 'A chain adds moving hardware around the tire. Without enough room, it can strike the body or nearby components, so the manual may restrict the device type or prohibit conventional chains.',
    },
  ],

  calloutLabel: 'The AWD misconception',
  calloutBody: [
    'AWD can make a car feel more capable because it may accelerate with less wheelspin. It does not give the tires extra grip when braking or turning, and road agencies may still require AWD vehicles to carry or install traction devices.',
    'Axle choice is model-specific. The 2026 Mazda CX-90 manual specifies rear tires only, while Subaru says its vehicles from model year 2010 onward lack clearance for conventional tire chains; a device maker may approve an SAE Class S alternative for the front wheels. Check the exact manual before buying or mounting anything.',
  ],

  sources: [
    {
      publisher: 'California Department of Transportation',
      title: 'Chain Controls / Chain Installation',
      url: 'https://dot.ca.gov/travel/winter-driving-tips/chain-controls',
      kind: 'government',
    },
    {
      publisher: 'Colorado Department of Transportation',
      title: 'Frequently Asked Questions (FAQ)',
      url: 'https://www.codot.gov/travel/winter-driving/faqs',
      kind: 'government',
    },
    {
      publisher: 'Subaru of America',
      title: 'Can tire chains be used on my Subaru?',
      url: 'https://contactus.subaru.com/knowledgebase/article/1002123/en-us',
      kind: 'manufacturer',
    },
    {
      publisher: 'Mazda North American Operations',
      title: '2026 Mazda CX-90 Owner’s Manual: Tire Chains',
      url: 'https://www.mazdausa.com/static/manuals/2026/cx-90/contents/65620300.html',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed September 3, 2026 against Caltrans and Colorado DOT guidance, Subaru support, and the 2026 Mazda CX-90 manual; axle and clearance rules remain model-specific.',
};
