import type { Pairing } from '../types';

/**
 * E-Bike on Bike Rack.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const eBikeOnBikeRack: Pairing = {
  subjectSlug: 'e-bike',
  subjectName: 'E-Bike',
  subjectKind: 'Bicycle',
  subjectNote: 'Battery-assisted bicycle with electric motor',

  relation: 'on',

  targetSlug: 'bike-rack',
  targetName: 'Bike Rack',
  targetKind: 'Carrier',
  targetNote: 'Vehicle-mounted carrier for bicycles',

  eyebrow: 'Cycling · Vehicle Transport',
  h1: 'Can I Use an E-Bike on a Bike Rack?',
  seoTitle: 'E-Bike Rack Compatibility and Weight Limits | Can I Use It With',
  metaDescription:
    'Yes, with limits. Use a rack that fits the e-bike and stays within every per-bike, total rack, hitch, and vehicle load rating.',

  verdict: 'yes_with_limits',
  shortAnswer:
    'Yes, with limits. The e-bike must fit the rack’s per-bike weight limit, total load limit, wheelbase, tires, and attachment method. An e-bike-rated platform hitch rack is usually the easiest match; use a hanging or trunk rack only when its manual allows the bike’s weight and shape. Remove a detachable battery when the e-bike maker recommends it, then secure the battery inside the vehicle.',

  mainRisk: 'Bike detachment',
  damages: 'Bike and vehicle',
  alternative: 'E-bike-rated platform hitch rack',

  conditionsOk: [
    'The e-bike’s carried weight, measured after manufacturer-approved removals, stays within the rack’s per-bike limit.',
    'The combined bike load stays within the rack’s total limit, and the wheels and frame fit every required support.',
    'For a hitch rack, the vehicle and receiver instructions approve the rack and loaded setup; hitch class alone is not enough.',
    'A hanging or trunk rack is used only when its manual accepts the bike’s weight and attachment points, and the vehicle fit guide approves installation.',
  ],
  conditionsNever: [
    'Never exceed the per-bike limit because another position is empty or the total rack limit has not been reached.',
    'Never put an e-bike on a trunk or conventional hanging rack because it appears to fit.',
    'Never clamp to the battery or another part that the rack manual does not identify as an attachment point.',
    'Never assume removing the battery fixes incompatible frame geometry, tires, wheelbase, or receiver capacity.',
    'Never drive until every required strap, support, and rack-to-vehicle fastener is fully engaged.',
  ],

  mechanisms: [
    {
      title: 'Per-Bike Overload',
      body: 'Each tray or cradle has its own load limit. A heavy e-bike can overload one position even when the rack’s total capacity has room left.',
    },
    {
      title: 'Incomplete Bike Capture',
      body: 'Platform racks support the wheels, while hanging designs may depend on the frame or handlebars. Step-through frames, fenders, wide tires, or long wheelbases can keep the specified supports from reaching the correct points.',
    },
    {
      title: 'Load Behind Vehicle',
      body: 'A hitch rack carries its weight and the bikes behind the receiver. That position places load on the receiver and vehicle mounting structure, so approval for the complete setup matters.',
    },
  ],

  calloutLabel: 'Battery-Off Assumption',
  calloutBody: [
    'Removing a detachable battery can lower the bike below a rack’s per-bike limit and make loading easier. It does not raise the rack’s rating. Use the e-bike’s actual carried weight and follow its manufacturer’s transport instructions.',
    'Platform hitch racks are often built around heavier bikes and varied frame shapes. Hanging racks are not automatically excluded, since some are e-bike-rated, but conventional hanging and trunk models often have lower per-bike limits or attachment methods that do not suit step-through frames.',
  ],

  sources: [
    {
      publisher: 'Yakima',
      title: 'E-bikes',
      url: 'https://yakimasupport.zendesk.com/hc/en-us/articles/115002740811-E-bikes',
      kind: 'manufacturer',
    },
    {
      publisher: 'Yakima',
      title: 'Trunk Bike Racks',
      url: 'https://yakima.com/collections/trunk-mounted-bike-racks',
      kind: 'manufacturer',
    },
    {
      publisher: 'Küat Racks',
      title: 'No Worries Limited Warranty',
      url: 'https://kuat.com/pages/warranty',
      kind: 'manufacturer',
    },
    {
      publisher: 'Trek Bicycle',
      title: 'Trek Electric Bike FAQ',
      url: 'https://www.trekbikes.com/us/en_US/ebike_faq/',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-03T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current manufacturer guidance on rack load limits, bike fit, hitch capacity, trunk racks, attachment methods, and removable batteries.',
};
