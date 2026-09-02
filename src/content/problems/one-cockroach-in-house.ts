import type { ProblemSeed } from '../types';

export const oneCockroachInHouse: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'cockroaches',
  slug: 'one-cockroach-in-house',
  canonicalPath: '/home/pests/cockroaches/one-cockroach-in-house/',
  name: 'One Cockroach in the House',
  eyebrow: 'Home · Pests · Cockroaches',

  h1: 'Can I Ignore One Cockroach in My House?',
  seoTitle: 'One Cockroach in the House: Ignore It or Investigate?',
  metaDescription:
    'One cockroach may be an outdoor stray or evidence of an indoor infestation. Learn what its species, timing, droppings, egg cases, and repeat sightings mean.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I stay in the house?',
  canIUseItLabel: 'Yes, while you inspect and monitor',

  shortAnswer:
    'Probably not. One cockroach does not prove you have an infestation, especially if it is a large outdoor species that entered near a door or window. Remove it, document what it looked like, inspect nearby hiding places, and set sticky monitors; act promptly if it is a small indoor species, appears in daylight, or comes with droppings, egg cases, nymphs, or more sightings.',

  whyItMattersHeading: 'Why One Sighting Still Deserves a Check',
  whyItMatters: [
    'The species changes the meaning. American, Oriental, smokybrown, and other outdoor cockroaches may wander or be carried inside without establishing an indoor population. German and brownbanded cockroaches live and breed indoors, so even one deserves a closer inspection. Size and color can help, but a clear photo or captured specimen is more reliable than guessing.',
    'Cockroaches can contaminate food-contact areas, while their droppings, shed skins, and other material can contribute to allergies and asthma symptoms. The sensible response is integrated pest management: identify and monitor first, then remove food, water, hiding places, and entry routes. Use targeted control if the evidence shows more than an isolated visitor.',
  ].join('\n\n'),

  redFlagsHeading: 'Escalate the Response If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Checked species identification, indoor-versus-outdoor behavior, monitoring, asthma risks, and pesticide precautions against EPA, CDC, and university extension guidance.',
  disclaimer:
    'This page cannot identify the species or confirm an infestation from one sighting. Follow pesticide labels and local requirements, and seek emergency help for serious breathing symptoms or suspected pesticide exposure.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'isolated-outdoor-invader',
      label: 'One large roach was found beside an exterior door or window',
      shortDescription:
        'It appeared near a clear entry point, and there are no droppings, egg cases, nymphs, dead roaches, or other sightings.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be a one-off outdoor invader',
      resultBody:
        'Several large cockroach species normally live outdoors and occasionally wander inside. One near an obvious entry point does not by itself establish that cockroaches are breeding in the house.',
      recommendedAction:
        'Remove it, save a photo if possible, inspect the nearby door or window, and place a sticky monitor along the wall. If no other evidence appears and identification supports an outdoor species, routine exclusion may be enough.',
    },
    {
      slug: 'one-unidentified-night-sighting',
      label: 'One unidentified cockroach appeared at night',
      shortDescription: 'You saw one after dark but cannot identify it, and there are no other visible signs.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'This is not proof of an infestation, but monitor it',
      resultBody:
        'Nighttime activity is normal cockroach behavior, so the timing alone does not show how many are present. The unanswered question is whether this was an outdoor visitor or an indoor-breeding species leaving a nearby hiding place.',
      recommendedAction:
        'Photograph or capture the insect if you can, inspect nearby kitchens and bathrooms, and set sticky monitors along walls and under appliances. Escalate if another roach or any infestation sign appears.',
    },
    {
      slug: 'possible-german-cockroach',
      label: 'It was a small tan roach with two dark stripes behind its head',
      shortDescription:
        'The insect resembles a German cockroach and was found near food, plumbing, cabinets, or appliances.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A common indoor-breeding species is possible',
      resultBody:
        'German cockroaches commonly occupy kitchens and bathrooms and reproduce indoors. Some outdoor species can look similar, so identification still matters, but this appearance and location justify prompt monitoring and control rather than waiting for obvious numbers.',
      recommendedAction:
        'Capture a specimen or clear photo, inspect cracks and appliance areas, deploy sticky monitors, and begin sanitation and targeted baiting. Consider a licensed pest management service if identification or control is uncertain.',
    },
    {
      slug: 'cockroach-seen-in-daylight',
      label: 'The cockroach was active during daylight',
      shortDescription:
        'It was moving through an occupied room while the lights were on rather than appearing after dark.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Daytime activity is a strong warning sign',
      resultBody:
        'Most household cockroach species stay hidden during the day. Daytime sightings can occur when a population is large, although outdoor daytime species and certain ongoing treatments are exceptions.',
      recommendedAction:
        'Inspect and place monitors promptly, especially near heat, moisture, food, appliances, and plumbing. If you cannot confirm an outdoor species or an expected treatment effect, arrange active control.',
    },
    {
      slug: 'egg-case-or-nymphs',
      label: 'The roach carried an egg case or small nymphs are present',
      shortDescription:
        'A capsule protruded from the adult, or smaller wingless cockroaches have appeared nearby.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Breeding evidence changes the answer',
      resultBody:
        'An egg case or multiple life stages is stronger evidence than one lone adult. It means eggs or young cockroaches are present and protected hiding places may be nearby.',
      recommendedAction:
        'Remove the visible insects and egg case, inspect cracks and sheltered areas, clean up fecal material and skins, place monitors, and begin an integrated control plan.',
    },
    {
      slug: 'infestation-signs-nearby',
      label: 'You found droppings, shed skins, egg cases, or dead cockroaches',
      shortDescription:
        'Dark specks or smears, cast skins, capsules, odor, or dead insects appear near cabinets, appliances, plumbing, or wall edges.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Other evidence points to an established population',
      resultBody:
        'Cockroach feces, shed skins, egg cases, and repeated dead insects indicate activity beyond the one roach you happened to see. These materials can also contribute to allergen exposure.',
      recommendedAction:
        'Document where the evidence appears, vacuum with suitable filtration, clean hard surfaces, set monitors around the affected area, and use targeted control or professional service.',
    },
    {
      slug: 'repeat-sightings-or-catches',
      label: 'Another roach appears or monitors catch more',
      shortDescription:
        'Cockroaches are being seen again, caught in more than one location, or found in different rooms.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Repeated activity needs control, not more waiting',
      resultBody:
        'Additional sightings make an isolated outdoor visitor less likely. Activity in several locations can also mean cockroaches are moving through wall voids, plumbing routes, or adjoining spaces.',
      recommendedAction:
        'Map the sightings and trap catches, identify the species, remove food and water sources, seal routes where practical, and start species-appropriate control.',
    },
    {
      slug: 'apartment-or-attached-home',
      label: 'The sighting happened in an apartment or attached home',
      shortDescription:
        'Your unit shares walls, plumbing, utility openings, hallways, or service areas with other households.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Treat it as a possible building issue',
      resultBody:
        'Cockroaches can move between adjoining units through structural gaps and utility routes. Work in one unit may not solve activity coming from elsewhere in the building.',
      recommendedAction:
        'Photograph the roach, place monitors, and report the sighting to property management in writing. Ask about coordinated inspection and treatment; landlord obligations and reporting procedures vary by location.',
    },
    {
      slug: 'asthma-or-cockroach-allergy',
      label: 'Someone in the home has asthma or cockroach allergy',
      shortDescription:
        'A resident is sensitive to cockroach material or develops respiratory or allergic symptoms around the affected area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Reduce the pest and allergen exposure promptly',
      resultBody:
        'Cockroach droppings, shed skins, and other material can trigger symptoms in sensitized people. Filling the area with sprays or foggers can create additional respiratory exposure.',
      recommendedAction:
        'Use monitoring, sanitation, exclusion, and targeted baiting rather than broad spraying. Keep the sensitive person away during cleanup and pesticide use, and follow their medical plan for worsening symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The sighting creates an identification question',
      description:
        'One cockroach could be an outdoor insect that wandered inside or an indoor species emerging from a hidden harborage. The sighting alone cannot distinguish between them.',
      severity: 'info',
      chainLabel: 'Sighting',
    },
    {
      stageLabel: 'IF IT WAS AN OUTDOOR SPECIES',
      title: 'Nothing else may follow',
      description:
        'Some outdoor cockroaches survive poorly indoors. Removing the insect and blocking its entry route may be all that is needed when monitoring finds no further activity.',
      severity: 'info',
      chainLabel: 'Isolated visitor',
    },
    {
      stageLabel: 'IF IT WAS AN INDOOR-BREEDING SPECIES',
      title: 'Hidden activity can continue',
      description:
        'German and brownbanded cockroaches shelter in cracks, cabinets, appliances, and other protected spaces, so the visible roach may represent only the activity outside those hiding places.',
      severity: 'caution',
      chainLabel: 'Hidden population',
    },
    {
      stageLabel: 'IF FOOD, WATER, AND SHELTER REMAIN',
      title: 'The population can spread',
      description:
        'Accessible crumbs, pet food, leaks, trash, cardboard, and sheltered cracks support survival and reproduction. Cockroaches may spread into additional rooms or adjoining housing units.',
      severity: 'warning',
      chainLabel: 'Expansion',
    },
    {
      stageLabel: 'IF ALLERGENS ACCUMULATE',
      title: 'Asthma and allergy risk can rise',
      description:
        'Droppings, shed skins, and body fragments can become part of household dust and trigger allergic or asthma symptoms in susceptible people.',
      severity: 'danger',
      chainLabel: 'Health effects',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One identified outdoor cockroach entered beside a door or window',
      ignoreAnswer: 'Yes, after removal',
      severity: 'info',
      whatToDo:
        'Remove it, correct the nearby gap or damaged seal, and monitor the entry area. Further treatment may not be needed if no additional evidence appears.',
    },
    {
      situation: 'One unidentified roach appeared at night with no other signs',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Do not immediately assume an infestation, but photograph or capture it, inspect nearby hiding places, and place sticky monitors.',
    },
    {
      situation: 'The insect resembles a German cockroach',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Confirm the identification if possible and begin inspection, sanitation, monitoring, and targeted control promptly.',
    },
    {
      situation: 'The cockroach appeared in daylight',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Look for additional activity around food, moisture, heat, appliances, cabinets, and plumbing. Treat an unexplained daytime sighting as a possible heavy population.',
    },
    {
      situation: 'Nymphs, an egg case, droppings, or shed skins are present',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat these as infestation evidence. Document affected locations, clean the debris carefully, and start a full integrated control plan.',
    },
    {
      situation: 'Another cockroach appears or a monitor catches one',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Move from observation to control. Identify the species, map activity, remove resources, seal routes, and use targeted bait or professional service.',
    },
    {
      situation: 'The sighting occurred in an apartment or attached home',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Notify property management in writing and request coordinated inspection, since cockroaches may move through adjoining units and shared utility routes.',
    },
    {
      situation: 'Someone has asthma, allergy symptoms, or breathing trouble',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        "Reduce exposure, avoid sprays and foggers, and follow the person's medical plan. Seek emergency help for severe breathing difficulty or other serious symptoms.",
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Remove and document the cockroach',
      body:
        'Take a clear photo before disposal if practical, including the markings behind the head. Capture it in a sealed container or remove it with a vacuum. Avoid bare-hand contact, wash afterward, and clean any food-contact surface it crossed.',
    },
    {
      title: 'Step 2: Inspect and install sticky monitors',
      body:
        'Check beneath sinks, inside cabinet corners, behind refrigerators and stoves, around plumbing penetrations, and along wall edges. Put sticky monitors against walls in these areas and near exterior doors; they help identify the species and show where activity is concentrated.',
      destinationProblemSlug: 'cockroach-droppings',
    },
    {
      title: 'Step 3: Remove food, water, and hiding places',
      body:
        'Seal pantry food and pet food, clean dishes and spills, keep trash covered, repair leaks, dry damp areas, and remove unnecessary cardboard and paper clutter. Sanitation supports control but does not replace treatment when an indoor infestation is present.',
    },
    {
      title: 'Step 4: Block entry and movement routes',
      body:
        'Repair screens and weather stripping, add door sweeps where needed, and seal gaps around cabinets, baseboards, pipes, and wiring. Inspect boxes, used appliances, furniture, groceries, and firewood before bringing them farther inside.',
    },
    {
      title: 'Step 5: Use targeted control when the evidence supports it',
      body:
        'Choose an EPA-registered cockroach bait or other product labeled for the location and follow every label direction. Keep it inaccessible to children and pets, do not spray around bait, and avoid foggers. Hire a licensed pest management service for serious, persistent, or uncertain infestations.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A cockroach is active in daylight',
      description:
        'Most household cockroaches hide during the day. Unexplained daytime activity can indicate that available hiding places are crowded.',
      severity: 'warning',
    },
    {
      title: 'It resembles a German cockroach',
      description:
        'A small tan cockroach with two dark stripes behind the head, especially in a kitchen or bathroom, may be an indoor-breeding German cockroach. Similar outdoor species exist, so preserve a photo or specimen.',
      severity: 'warning',
    },
    {
      title: 'You find an egg case or nymphs',
      description:
        'A carried or deposited egg capsule, or cockroaches of several sizes, is evidence that reproduction may be occurring nearby.',
      severity: 'warning',
    },
    {
      title: 'Droppings, shed skins, or dead roaches are accumulating',
      description:
        'These signs indicate more activity than one visible insect and can contribute to allergen exposure.',
      severity: 'warning',
    },
    {
      title: 'Sightings occur in several rooms or adjoining units',
      description:
        'Widespread activity can mean cockroaches are moving through structural gaps, plumbing routes, or shared building spaces.',
      severity: 'warning',
    },
    {
      title: 'Cockroaches reach open food, dishes, or preparation surfaces',
      description:
        'Discard exposed food that may have been contaminated and clean the affected food-contact surfaces before using them again.',
      severity: 'warning',
    },
    {
      title: 'Anyone develops serious breathing symptoms',
      description:
        "Move away from the affected area and follow the person's asthma or emergency plan. Severe breathing difficulty, faintness, confusion, or blue or gray coloration requires emergency help.",
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does seeing one cockroach mean my house is infested?',
      answer:
        'Not always. Outdoor species can wander or be carried inside, while an indoor-breeding species may be the visible part of a hidden population. Identification and monitoring tell you which situation is more likely.',
    },
    {
      question: 'Is a large cockroach less concerning than a small one?',
      answer:
        'Large cockroaches are more often outdoor species, but size alone is not enough to dismiss one. Its markings, location, entry route, and any additional signs matter.',
    },
    {
      question: 'What does a German cockroach look like?',
      answer:
        'Adults are small and light brown or tan, usually with two dark parallel stripes behind the head. They are commonly found around kitchens and bathrooms, but some outdoor lookalikes require closer identification.',
    },
    {
      question: 'Does a daytime sighting always mean a severe infestation?',
      answer:
        'No, but it is a strong warning for most household species. Outdoor daytime species and cockroaches affected by certain treatments are exceptions, so consider the species and circumstances.',
    },
    {
      question: 'Should I crush the cockroach?',
      answer:
        'Removing it is fine, but a photo or captured specimen can help with identification. If it was on a food-contact surface, clean that surface afterward.',
    },
    {
      question: 'Should I use a roach bomb after seeing one cockroach?',
      answer:
        'No. A fogger is not a sensible first response to one sighting. Foggers can create pesticide exposure and fire or explosion hazards if misused, while their contents may not reach cockroaches hidden in cracks.',
    },
    {
      question: 'Can a cockroach come through a drain?',
      answer:
        'Some larger species associated with sewers and damp areas can enter through damaged plumbing routes or faulty drain barriers. Cockroaches can also enter beneath doors, through utility gaps, or inside boxes and household goods.',
    },
    {
      question: 'Does a cockroach mean my house is dirty?',
      answer:
        'No. Cockroaches can enter clean homes through gaps, deliveries, belongings, drains, or adjoining units. Food residue, water, clutter, and unsealed openings make establishment easier, but cleanliness alone does not determine whether they appear.',
    },
    {
      question: 'What if the monitors stay empty and I never see another roach?',
      answer:
        'If the insect was identified as an outdoor species and no droppings, egg cases, nymphs, or further sightings appear, it was likely an isolated visitor. Continue basic exclusion and sanitation.',
    },
    {
      question: 'Should I tell my landlord about one cockroach?',
      answer:
        'Yes, especially in an apartment or attached building. Report the sighting and any trap catches in writing so management can check shared routes and nearby units. Specific legal duties and reporting procedures vary by location.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Integrated Pest Management (IPM) Principles',
      url: 'https://www.epa.gov/safepestcontrol/integrated-pest-management-ipm-principles',
      sourceType: 'government',
      notes:
        'Explains that one pest sighting does not always require control and supports monitoring, accurate identification, prevention, and lower-risk targeted control.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Controlling Asthma',
      url: 'https://www.cdc.gov/asthma/control/',
      sourceType: 'government',
      notes:
        'Recommends removing pest food and water, cleaning spills, sealing cracks, and avoiding sprays and foggers because they can trigger asthma attacks.',
    },
    {
      publisher: 'University of California Statewide Integrated Pest Management Program',
      title: 'Cockroaches',
      url: 'https://ipm.ucanr.edu/home-and-landscape/cockroaches/',
      sourceType: 'academic',
      notes:
        'Distinguishes indoor-breeding from outdoor-invading species and supports sticky-trap monitoring, sanitation, exclusion, baiting, and avoiding bombs and aerosol sprays.',
    },
    {
      publisher: 'University of Florida Institute of Food and Agricultural Sciences',
      title: 'Cockroaches and Their Management',
      url: 'https://ask.ifas.ufl.edu/publication/IG082',
      sourceType: 'academic',
      notes:
        'States that some outdoor cockroaches survive poorly indoors and may only require removal, while German cockroaches commonly occupy kitchens and bathrooms. Covers inspection and IPM control.',
    },
    {
      publisher: 'Texas A&M AgriLife Extension',
      title: 'Cockroach Biology and Management',
      url: 'https://mytexas.ag.tamu.edu/publications/cockroach-biology-and-management/',
      sourceType: 'academic',
      notes:
        'Describes German cockroach identification, explains that daytime sightings usually indicate high numbers, and recommends sticky cards for locating and monitoring activity.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Safety Precautions for Total Release Foggers',
      url: 'https://www.epa.gov/safepestcontrol/safety-precautions-total-release-foggers',
      sourceType: 'government',
      notes:
        'Warns that fogger misuse can cause fire, explosion, pesticide exposure, and illness, and stresses prevention and strict compliance with product labels.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Cockroach sticky monitors',
      description:
        'These capture specimens for identification and show whether activity is isolated or concentrated near appliances, plumbing, cabinets, or exterior entry points.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Cockroach identification guide',
      description:
        'A regional university extension guide can help distinguish indoor-breeding species from outdoor cockroaches that occasionally wander inside.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'EPA-registered cockroach bait',
      description:
        'A labeled bait station or gel can provide targeted control when monitoring supports treatment. Placement and child or pet precautions must follow the product label.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Licensed pest management service',
      description:
        'Useful when German cockroaches, daytime activity, multiple life stages, repeated catches, or activity across an attached building makes control more difficult.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'cockroach-in-daylight',
      anchorText: 'What does a cockroach seen in daylight mean?',
      relationshipType: 'escalation',
    },
    {
      slug: 'cockroach-droppings',
      anchorText: 'Are these marks cockroach droppings?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'cockroach-in-the-bathroom',
      anchorText: 'Why is there a cockroach in my bathroom?',
      relationshipType: 'sibling',
    },
    {
      slug: 'dead-cockroaches-indoors',
      anchorText: 'Why am I finding dead cockroaches indoors?',
      relationshipType: 'related',
    },
  ],
};
