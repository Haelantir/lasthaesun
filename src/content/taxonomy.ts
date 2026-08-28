import type { DomainSeed, ObjectCategorySeed, SystemSeed } from './types';

/**
 * DOMAIN -> OBJECT -> SYSTEM.
 *
 * Note what is NOT here: a "Life" level above Mobility. Every problem on this
 * site is a life problem, so the word carries no information and would earn no
 * URL segment, no useful hub and no clarity for a crawler. The taxonomy starts
 * where the first genuine distinction is.
 *
 * `status: 'draft'` means "named, reserved, not built". Draft nodes are not
 * routable and never enter the sitemap; hubs list them as plain text so the site
 * shows its real size instead of a wall of empty category pages.
 *
 * `indexable` is separate from `status` on purpose. A hub can be live and
 * linkable for humans while still being too thin to deserve a place in search
 * results. Flip it to true once the hub actually helps a searcher.
 */

export const domains: DomainSeed[] = [
  {
    slug: 'mobility',
    name: 'Mobility',
    canonicalPath: '/mobility/',
    shortDescription: 'Cars, motorcycles, bikes — anything you use to get around.',
    hubHeading: 'Mobility Problems: What Can You Ignore?',
    seoTitle: 'Mobility Problems: What Can You Ignore? | Can I Ignore It',
    metaDescription:
      'Verdicts on the car, motorcycle and bike problems people put off — what is safe to leave, what needs dealing with, and what happens if you wait.',
    sortOrder: 10,
    status: 'published',
    // One published problem beneath it. Not yet a page worth ranking.
    indexable: false,
  },
  // Reserved top-level domains. Named so the shape of the site is visible, drafts
  // so none of them becomes an empty indexed page.
  {
    slug: 'home',
    name: 'Home',
    canonicalPath: '/home-and-property/',
    shortDescription: 'Plumbing, electrical, HVAC, roof, structure.',
    sortOrder: 20,
    status: 'draft',
    indexable: false,
  },
  {
    slug: 'appliances',
    name: 'Appliances',
    canonicalPath: '/appliances/',
    shortDescription: 'Fridges, dishwashers, washers, dryers, coffee machines.',
    sortOrder: 30,
    status: 'draft',
    indexable: false,
  },
  {
    slug: 'tech',
    name: 'Tech',
    canonicalPath: '/tech/',
    shortDescription: 'Computers, phones, routers, storage, updates.',
    sortOrder: 40,
    status: 'draft',
    indexable: false,
  },
  {
    slug: 'garden-and-outdoors',
    name: 'Garden & Outdoors',
    canonicalPath: '/garden-and-outdoors/',
    shortDescription: 'Lawn, trees, plants, pools, outdoor equipment.',
    sortOrder: 50,
    status: 'draft',
    indexable: false,
  },
  {
    slug: 'personal-gear',
    name: 'Personal Gear',
    canonicalPath: '/personal-gear/',
    shortDescription: 'Shoes, watches, cameras, sports and outdoor kit.',
    sortOrder: 60,
    status: 'draft',
    indexable: false,
  },
];

export const objectCategories: ObjectCategorySeed[] = [
  {
    domainSlug: 'mobility',
    slug: 'cars',
    name: 'Cars',
    singularName: 'Car',
    // Deliberately NOT /mobility/cars/. Mobility is a useful hub and a useful
    // breadcrumb; it is not a useful URL segment.
    canonicalPath: '/cars/',
    shortDescription: 'Warning lights, noises, leaks and the maintenance you have been putting off.',
    hubHeading: 'Car Problems: What Can You Ignore?',
    seoTitle: 'Car Problems: What Can You Ignore? | Can I Ignore It',
    metaDescription:
      'Straight verdicts on common car problems. Find out which ones can wait, which ones cannot, and what actually happens if you keep driving.',
    sortOrder: 10,
    status: 'published',
    indexable: false,
  },
  {
    domainSlug: 'mobility',
    slug: 'motorcycles',
    name: 'Motorcycles',
    canonicalPath: '/motorcycles/',
    shortDescription: 'Chain, tires, brakes, fluids.',
    sortOrder: 20,
    status: 'draft',
    indexable: false,
  },
  {
    domainSlug: 'mobility',
    slug: 'bicycles',
    name: 'Bicycles',
    canonicalPath: '/bicycles/',
    shortDescription: 'Drivetrain, brakes, tires, bearings.',
    sortOrder: 30,
    status: 'draft',
    indexable: false,
  },
  {
    domainSlug: 'mobility',
    slug: 'e-bikes-and-scooters',
    name: 'E-bikes & Scooters',
    canonicalPath: '/e-bikes-and-scooters/',
    shortDescription: 'Batteries, motors, brakes, firmware.',
    sortOrder: 40,
    status: 'draft',
    indexable: false,
  },
];

/**
 * The System level is what stops a large site collapsing. Fifty problems can sit
 * directly under "Cars" and still be navigable; five hundred cannot.
 */
export const systems: SystemSeed[] = [
  {
    objectSlug: 'cars',
    slug: 'tires',
    name: 'Tires',
    singularName: 'Tire',
    canonicalPath: '/cars/tires/',
    shortDescription: 'Pressure, wear, punctures, age and damage.',
    hubHeading: 'Can I Ignore These Tire Problems?',
    seoTitle: 'Tire Problems: What Can You Ignore? | Can I Ignore It',
    metaDescription:
      'Tire problems sorted by how urgent they actually are — from the ones you can leave a while to the ones that mean stop driving.',
    sortOrder: 10,
    status: 'published',
    indexable: false,
  },
  {
    objectSlug: 'cars',
    slug: 'exhaust',
    name: 'Exhaust',
    singularName: 'Exhaust',
    canonicalPath: '/cars/exhaust/',
    shortDescription: 'Noise, smell, emissions, corrosion.',
    hubHeading: 'Can I Ignore These Exhaust Problems?',
    seoTitle: 'Exhaust Problems: What Can You Ignore? | Can I Ignore It',
    metaDescription:
      'Exhaust problems sorted by how urgent they actually are — from normal condensation you can ignore to leaks and warning signs that need attention.',
    sortOrder: 100,
    status: 'published',
    indexable: false,
  },
  {
    objectSlug: 'cars',
    slug: 'engine',
    name: 'Engine',
    singularName: 'Engine',
    canonicalPath: '/cars/engine/',
    shortDescription: 'Warning lights, oil, noises, misfires.',
    hubHeading: 'Can I Ignore These Engine Problems?',
    seoTitle: 'Engine Problems: What Can You Ignore? | Can I Ignore It',
    metaDescription:
      'Engine problems sorted by how urgent they actually are — from normal cold-start behavior you can ignore to warning signs that need attention.',
    sortOrder: 30,
    status: 'published',
    indexable: false,
  },
  ...(
    [
      // slug, name, description, sortOrder, attributive form used in prose
      ['brakes', 'Brakes', 'Pads, discs, fluid, noises.', 20, 'Brake'],
      ['battery-and-electrical', 'Battery & Electrical', 'Starting, charging, lights, sensors.', 40, 'Electrical'],
      ['cooling', 'Cooling', 'Coolant, radiator, thermostat, overheating.', 50, 'Cooling'],
      ['fluids', 'Fluids', 'Oil, coolant, brake, transmission, washer.', 60, 'Fluid'],
      ['suspension', 'Suspension', 'Shocks, springs, bushings, ride quality.', 70, 'Suspension'],
      ['steering', 'Steering', 'Play, pulling, noises, alignment.', 80, 'Steering'],
      ['transmission', 'Transmission', 'Shifting, slipping, fluid, noises.', 90, 'Transmission'],
      ['lights', 'Lights', 'Bulbs, alignment, warning indicators.', 110, 'Light'],
      ['glass', 'Glass', 'Chips, cracks, wipers, visibility.', 120, 'Glass'],
      ['body', 'Body', 'Rust, dents, seals, trim.', 130, 'Body'],
    ] as const
  ).map(
    ([slug, name, shortDescription, sortOrder, singularName]): SystemSeed => ({
      objectSlug: 'cars',
      slug,
      name,
      singularName,
      canonicalPath: `/cars/${slug}/`,
      shortDescription,
      sortOrder,
      status: 'draft',
      indexable: false,
    }),
  ),
];
