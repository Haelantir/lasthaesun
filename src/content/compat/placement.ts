/**
 * Where a pairing sits in the site's taxonomy.
 *
 * Pairings have no taxonomy of their own — a pairing is two slugs and a
 * relation, and giving each entity a category before it has attributes of its
 * own would be a hierarchy nobody needs. But the hubs and /browse/ are
 * organised by taxonomy, and a reader who opens "Appliances" should find
 * everything the site knows about appliances, not only the half that happens to
 * be phrased as a decision.
 *
 * So placement is keyed on the TARGET, which is the half that decides it. A
 * reader asking about foil in an oven, Pyrex in an oven or a plastic container
 * in an oven is asking about the oven; what they are holding varies, where the
 * question belongs does not.
 *
 * `object` is optional because not every target has an object category — there
 * is no "air fryers" node, and minting one to hold eight pairings would be the
 * taxonomy inflation `docs/content-architecture.md` warns about. Domain-only
 * placement still puts those pairings on /appliances/ and in /browse/.
 *
 * A target with no entry here fails the seed rather than being placed by guess,
 * the same way a problem with an unknown system does.
 */
export interface Placement {
  /** `domains.slug` */
  domain: string;
  /** `object_categories.slug`, when one genuinely matches the target. */
  object?: string;
}

export const PAIRING_PLACEMENT: Record<string, Placement> = {
  'air-fryer': { domain: 'appliances' },
  oven: { domain: 'appliances', object: 'stoves-and-ovens' },
  microwave: { domain: 'appliances', object: 'microwaves' },
  dishwasher: { domain: 'appliances', object: 'dishwashers' },
  'washing-machine': { domain: 'appliances', object: 'washing-machines' },
  'clothes-dryer': { domain: 'appliances', object: 'dryers' },

  // Filed under food rather than appliances: these pairings are about what
  // happens to bread, milk and eggs, not about the machine.
  freezer: { domain: 'food-kitchen', object: 'food-storage' },

  // A cooktop surface is the stove it sits in. 'he-washing-machine' is its own
  // key rather than an alias of 'washing-machine': the HE part is the whole
  // question, and a reader who lands on it has a different machine in mind.
  'glass-top-stove': { domain: 'appliances', object: 'stoves-and-ovens' },
  'induction-cooktop': { domain: 'appliances', object: 'stoves-and-ovens' },
  'he-washing-machine': { domain: 'appliances', object: 'washing-machines' },

  // Domain-only, like the air fryer: there is no humidifier or air purifier
  // object node, and minting one to hold five pairings is the inflation the
  // note at the top of this file warns about.
  humidifier: { domain: 'appliances' },
  'air-purifier': { domain: 'appliances' },

  // The question is about the surface, not about a kitchen appliance, so these
  // sit with the house rather than under Food & Kitchen. None has an object
  // node: there is no countertops or flooring category, and a cleaning agent
  // is not reason enough to mint one.
  'granite-countertop': { domain: 'home' },
  'marble-countertop': { domain: 'home' },
  'laminate-flooring': { domain: 'home' },
  grout: { domain: 'home' },

  // Stainless steel arrives as a target here, having only been a subject
  // before: the fridge door and the sink are what people are cleaning.
  'stainless-steel': { domain: 'appliances' },

  // Screens. The phone has an object node; televisions do not, and one
  // pairing is not the moment to give them one.
  'phone-screen': { domain: 'tech', object: 'phones' },
  'tv-screen': { domain: 'tech' },

  'extension-cord': { domain: 'home', object: 'electrical' },
  'power-strip': { domain: 'home', object: 'electrical' },
};

export function placementFor(targetSlug: string): Placement | undefined {
  return PAIRING_PLACEMENT[targetSlug];
}
