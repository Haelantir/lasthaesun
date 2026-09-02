import type { ProblemSeed } from '../types';

export const mushroomsGrowingInLawn: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'lawn-fungus',
  slug: 'mushrooms-growing-in-lawn',
  canonicalPath: '/garden-and-outdoors/lawn/fungus-and-mushrooms/mushrooms-growing-in-lawn/',
  name: 'Mushrooms Growing in the Lawn',
  eyebrow: 'Garden & Outdoors · Lawn · Fungus & Mushrooms',

  h1: 'Can I Ignore Mushrooms Growing in My Lawn?',
  seoTitle: 'Lawn Mushrooms: When They Are Harmless and When to Remove Them',
  metaDescription:
    'Most lawn mushrooms do not harm grass, but remove them where children or pets could eat them. Learn when recurring growth or a fairy ring needs attention.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I still use the lawn?',
  canIUseItLabel: 'Yes, if no one can eat the mushrooms',

  shortAnswer:
    'Usually, yes. A sudden flush after rain usually means fungi are fruiting on decaying organic matter, not attacking healthy grass. Do not leave unknown mushrooms where a child or pet may eat them, and act immediately after any suspected ingestion.',

  whyItMattersHeading: 'The Lawn Is Usually Fine; Ingestion Is the Risk',
  whyItMatters: [
    'The visible mushroom is only the fruiting body of a larger fungus in the soil. Lawn fungi commonly feed on thatch, buried wood, old roots, or other dead material. Damp conditions can make many mushrooms appear at once, and the same underground food source can produce them again when conditions are favorable.',
    'Most of these fungi do not damage grass. The important exceptions are fairy rings that interfere with water entering the soil and any situation in which a person or animal might eat an unidentified mushroom. Toxic and nontoxic species can look alike, and some serious poisonings do not cause immediate symptoms.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Ignore It If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Lawn effects, wet-weather recurrence, fairy-ring damage, and ingestion risks were checked against CDC, Poison Control, ASPCA, and university extension guidance.',
  disclaimer:
    'This is general lawn and poisoning triage guidance, not mushroom-species identification. For any suspected ingestion, use Poison Control or veterinary guidance rather than relying on a photograph or field guide.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'children-or-pets-have-access',
      label: 'Children or pets regularly use the area',
      shortDescription:
        'Unknown mushrooms are growing where a young child or an animal could pick up or eat them.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Remove them before the lawn is used',
      resultBody:
        'The mushrooms may be harmless to the grass, but appearance alone cannot rule out a poisonous species. Easy access turns a cosmetic lawn issue into an avoidable ingestion risk.',
      recommendedAction:
        'Keep children and pets away while you pick or rake up the mushrooms. Bag them for disposal and check the area again before allowing unsupervised access.',
    },
    {
      slug: 'planning-to-eat-lawn-mushrooms',
      label: 'You are considering eating them',
      shortDescription:
        'You plan to identify the mushrooms with an app, photograph, field guide, or casual online opinion.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not treat lawn mushrooms as food',
      resultBody:
        'Poisonous wild mushrooms can closely resemble edible ones. Cooking does not reliably remove mushroom toxins, and casual visual identification is not enough to establish that a mushroom is safe.',
      recommendedAction:
        'Do not eat or serve them. Only consider a wild mushroom edible after identification by someone with appropriate mycological expertise.',
    },
    {
      slug: 'person-may-have-swallowed-one',
      label: 'A person may have tasted or swallowed one',
      shortDescription: 'There are no symptoms yet, or you are uncertain whether any mushroom was swallowed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Call Poison Control now',
      resultBody:
        'Symptoms from some dangerous mushrooms can be delayed. Waiting to see whether the person becomes ill can postpone treatment or monitoring that Poison Control would recommend.',
      recommendedAction:
        'Call Poison Control at 1-800-222-1222 and follow its instructions. Take clear photos and save a sample if this can be done safely, but do not delay the call.',
    },
    {
      slug: 'person-has-poisoning-symptoms',
      label: 'A person is ill after possible mushroom ingestion',
      shortDescription:
        'Symptoms include vomiting, diarrhea, unusual drowsiness, confusion, hallucinations, weakness, or other sudden changes.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a poisoning emergency',
      resultBody:
        'Wild mushroom toxins can affect the digestive system, brain, liver, kidneys, or breathing. A temporary improvement does not prove the danger has passed.',
      recommendedAction:
        'Call Poison Control immediately. Call 911 for trouble breathing, a seizure, collapse, severe confusion, or difficulty waking the person.',
    },
    {
      slug: 'pet-may-have-eaten-one',
      label: 'A pet may have eaten a mushroom',
      shortDescription: 'The animal chewed or swallowed a wild mushroom but is not showing obvious symptoms.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Contact a veterinarian immediately',
      resultBody:
        'Toxic species can cause severe stomach, neurologic, liver, or kidney effects in pets, and trained identification is often difficult. Lack of symptoms right now does not establish safety.',
      recommendedAction:
        'Call your veterinarian or an animal poison-control service. Save photos and a sample if available. Do not make the pet vomit unless a veterinary professional specifically instructs you to.',
    },
    {
      slug: 'pet-has-poisoning-symptoms',
      label: 'A pet is sick after possible mushroom ingestion',
      shortDescription:
        'The animal has vomiting, diarrhea, heavy drooling, weakness, tremors, seizures, breathing trouble, or abnormal behavior.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Go to an emergency veterinarian',
      resultBody:
        'These signs can occur with mushroom toxicosis and may progress to organ or nervous-system injury. This is no longer a lawn-care problem.',
      recommendedAction:
        'Contact an emergency veterinary clinic while preparing to leave. Bring photos or a safely contained sample, but do not postpone care while trying to identify the species.',
    },
    {
      slug: 'ring-with-brown-or-dead-grass',
      label: 'Mushrooms surround thinning, brown, or dead grass',
      shortDescription: 'The mushrooms form an arc or circle with visible turf damage.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The fairy ring may be damaging the turf',
      resultBody:
        'Some fairy-ring fungi create a dense, water-repellent layer in the soil. Grass above that layer can become water-stressed even when the surrounding lawn receives enough water.',
      recommendedAction:
        'Check whether water penetrates the affected soil. Core aeration and careful irrigation may help; persistent or expanding damage is worth taking to a local extension office or turf service.',
    },
    {
      slug: 'water-will-not-enter-ring',
      label: 'Water beads up or runs off inside a ring',
      shortDescription: 'The soil remains dry beneath the surface even after watering.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Water penetration needs to be restored',
      resultBody:
        'A water-repellent fungal mat can keep moisture from reaching grass roots. Adding more surface water without improving penetration may simply waste water or saturate nearby soil.',
      recommendedAction:
        'Core-aerate through the affected layer and water according to local turf guidance. Get help if you cannot penetrate the layer or the grass continues to decline.',
    },
    {
      slug: 'lawn-stays-soggy',
      label: 'The lawn remains soggy or is watered frequently',
      shortDescription:
        'Mushrooms keep appearing alongside persistently wet soil, puddling, or unnecessary irrigation.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Address the moisture rather than the mushrooms',
      resultBody:
        'Mushrooms do not by themselves prove a drainage defect, but prolonged moisture favors fruiting and can contribute to other lawn problems.',
      recommendedAction:
        'Stop watering by a fixed calendar and irrigate according to the grass and soil. Check for blocked drainage, compacted soil, leaking irrigation, or a low area if wetness persists.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The fungus is recycling dead material',
      description:
        'The visible mushrooms usually come from fungi feeding on roots, thatch, buried wood, or other organic matter rather than living grass.',
      severity: 'info',
      chainLabel: 'Fruiting bodies appear',
    },
    {
      stageLabel: 'AFTER CONDITIONS DRY',
      title: 'The mushrooms may disappear',
      description:
        'The caps can shrivel or collapse while the underground fungal network and its food source remain in place.',
      severity: 'info',
      chainLabel: 'Caps fade',
    },
    {
      stageLabel: 'IF WET CONDITIONS RETURN',
      title: 'New mushrooms can emerge',
      description:
        'Removing the caps improves appearance and limits access, but it does not remove the fungus beneath the lawn.',
      severity: 'caution',
      chainLabel: 'Fruiting can repeat',
    },
    {
      stageLabel: 'IF A FAIRY RING REPELS WATER',
      title: 'Grass can thin or die',
      description:
        'Dense fungal growth can prevent water from reaching roots, creating a brown or dead ring that needs soil and water management.',
      severity: 'warning',
      chainLabel: 'Turf loses water',
    },
    {
      stageLabel: 'IF SOMEONE EATS ONE',
      title: 'A lawn nuisance becomes a poisoning risk',
      description:
        'Depending on the species, ingestion can cause digestive illness, neurologic effects, liver or kidney injury, breathing problems, or death.',
      severity: 'danger',
      chainLabel: 'Toxic exposure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Mushrooms appeared after rain, and the grass looks healthy',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Leave them alone if no one is likely to eat them, or remove them for appearance.',
    },
    {
      situation: 'Mushrooms return in the same healthy patch',
      ignoreAnswer: 'Yes, with a quick inspection',
      severity: 'info',
      whatToDo:
        'Look for an old stump, buried roots, excess thatch, or recurring moisture. Reappearance alone does not mean the grass is diseased.',
    },
    {
      situation: 'Mushrooms are growing around an old tree-removal site',
      ignoreAnswer: 'Yes, if the ground is stable',
      severity: 'info',
      whatToDo:
        'Remove the caps if desired. Watch for sinking or uneven ground as buried roots and wood continue to decay.',
    },
    {
      situation: 'Children or pets use the lawn',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Remove mushrooms before access and supervise anyone likely to put unfamiliar objects in their mouth.',
    },
    {
      situation: 'A green circular band appears with the mushrooms',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Check for fairy-ring symptoms and monitor water penetration and grass condition rather than treating the mushrooms alone.',
    },
    {
      situation: 'A brown or dead ring is developing',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Check for water-repellent soil and address aeration, irrigation, and turf recovery.',
    },
    {
      situation: 'The lawn remains saturated or puddled',
      ignoreAnswer: 'Not indefinitely',
      severity: 'caution',
      whatToDo:
        'Correct excessive irrigation, compaction, a leak, or drainage trouble instead of repeatedly removing the mushrooms.',
    },
    {
      situation: 'A person or pet may have swallowed a mushroom',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact Poison Control for a person or a veterinarian or animal poison-control service for a pet. Do not wait for symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Remove mushrooms from high-access areas',
      body:
        'Wear gloves and pick or rake up the fruiting bodies before children or pets enter the area. Put them in the trash. Mowing is reasonable for appearance when ingestion is not a concern, but it does not kill the underground fungus.',
    },
    {
      title: 'Check whether this is a fairy ring',
      body:
        'Look for mushrooms forming a circle or arc, unusually green grass, thinning turf, or a ring where water will not soak in. Turf damage or water-repellent soil changes this from a cosmetic issue to a lawn-management problem.',
      destinationProblemSlug: 'fairy-ring-in-lawn',
    },
    {
      title: 'Correct persistent moisture',
      body:
        "Water according to the lawn's needs rather than a fixed schedule. Investigate puddling, compacted soil, irrigation leaks, and poor drainage if the area stays wet after the surrounding lawn has drained.",
    },
    {
      title: 'Skip fungicide for ordinary lawn mushrooms',
      body:
        'Fungicide is generally unnecessary for mushrooms that are only decomposing dead material, and removing the caps will not eliminate the underground fungus. Focus on access, moisture, and any buried organic source.',
    },
    {
      title: 'Respond immediately to ingestion',
      body:
        'For a person, call Poison Control at 1-800-222-1222. For a pet, call your veterinarian or ASPCA Animal Poison Control at 888-426-4435. Save photos and a sample if safe, but do not delay the call.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Anyone may have swallowed a mushroom',
      description: 'Get poison guidance even if there are no symptoms and the mushroom looked ordinary.',
      severity: 'danger',
    },
    {
      title: 'There is trouble breathing, a seizure, collapse, or severe confusion',
      description:
        'Call 911 for a person. For a pet, contact an emergency veterinary clinic and leave for care.',
      severity: 'danger',
    },
    {
      title: 'Vomiting, diarrhea, weakness, or unusual drowsiness follows exposure',
      description:
        'Mushroom poisoning can resemble an ordinary stomach illness, and some serious effects may be delayed.',
      severity: 'danger',
    },
    {
      title: 'A pet develops drooling, tremors, abnormal behavior, or loss of coordination',
      description:
        'These can be signs of neurologic or other toxic effects and require urgent veterinary direction.',
      severity: 'danger',
    },
    {
      title: 'A ring of grass is thinning, browning, or dying',
      description: 'Fairy-ring fungi may be interfering with water movement through the soil.',
      severity: 'warning',
    },
    {
      title: 'Water beads up or will not soak into the affected area',
      description: 'A water-repellent fungal layer can leave roots dry while nearby soil becomes overwatered.',
      severity: 'warning',
    },
    {
      title: 'The lawn remains saturated',
      description:
        'Persistent wetness can point to excessive irrigation, compaction, a leak, or a drainage problem that should be corrected.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Do mushrooms mean my lawn has a fungal disease?',
      answer:
        'Usually not. Most lawn mushrooms are fruiting bodies of fungi decomposing dead organic matter rather than infecting the grass.',
    },
    {
      question: 'Why did dozens of mushrooms appear after rain?',
      answer:
        'Moist soil and suitable temperatures can trigger an underground fungus to produce many fruiting bodies at once. Their sudden appearance does not mean the fungus arrived that day.',
    },
    {
      question: 'Why do mushrooms keep growing in exactly the same place?',
      answer:
        'The fungus may be feeding on a localized source such as buried wood, an old stump, decaying roots, or accumulated thatch. It can fruit again whenever conditions favor mushroom production.',
    },
    {
      question: 'Does picking mushrooms get rid of the fungus?',
      answer:
        'No. Picking removes the reproductive structure above the soil, not the underground mycelium. It is still useful for appearance and for preventing children or pets from eating them.',
    },
    {
      question: 'Will mowing over lawn mushrooms spread them?',
      answer:
        'Fungal spores already move through air, water, and lawn equipment. Mowing does not eliminate the fungus, but it is an accepted way to remove ordinary mushrooms when ingestion is not a concern.',
    },
    {
      question: 'Should I spray fungicide on lawn mushrooms?',
      answer:
        'Usually not. Ordinary nuisance mushrooms need no treatment, and fungicides are generally not recommended for eliminating fungi that are decomposing buried organic material.',
    },
    {
      question: 'Are lawn mushrooms safe to eat if I cook them?',
      answer:
        'No assumption of safety should be made. Poisonous and edible species can look alike, and cooking does not reliably destroy some mushroom toxins.',
    },
    {
      question: 'Does a recurring mushroom patch mean I am overwatering?',
      answer:
        'Not necessarily. Wet conditions favor mushroom production, but the fungus also needs organic material to feed on. Review irrigation if the soil remains soggy rather than merely seeing mushrooms after rain.',
    },
    {
      question: 'Can a fairy ring kill grass?',
      answer:
        'Some fairy rings only produce mushrooms or greener grass. Others create water-repellent soil that leaves the turf thin, brown, or dead.',
    },
    {
      question: 'Do mushrooms prove that my soil is healthy?',
      answer:
        'They show that fungi and decomposable organic material are present. That is a normal soil process, but it does not by itself measure drainage, fertility, compaction, or overall lawn health.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Iowa State University Extension and Outreach',
      title: 'How do I get rid of mushrooms in my yard or garden bed?',
      url: 'https://yardandgarden.extension.iastate.edu/faq/how-do-i-get-rid-mushrooms-my-yard-or-garden-bed',
      sourceType: 'academic',
      notes:
        'States that most lawn mushrooms do not damage grass, commonly grow from decaying organic matter in cool, damp conditions, and can be mowed or raked away when children or pets are a concern.',
    },
    {
      publisher: 'University of California Statewide Integrated Pest Management Program',
      title: 'Mushrooms and Other Nuisance Fungi in Lawns',
      url: 'https://ipm.ucanr.edu/home-and-landscape/mushrooms-and-other-nuisance-fungi-in-lawns/',
      sourceType: 'academic',
      notes:
        'Explains that mushrooms are fruiting bodies, removal does not kill underground mycelium, and some fairy rings can create water-repellent soil and damage turf.',
    },
    {
      publisher: 'University of Illinois Extension',
      title: "What's causing the circles in my lawn? Fairy rings",
      url: 'https://extension.illinois.edu/blogs/good-growing/2026-05-22-whats-causing-circles-my-lawn-fairy-rings',
      sourceType: 'academic',
      notes:
        'Describes harmless mushroom-only fairy rings, damaging water-repellent rings, buried organic food sources, and removal by picking, raking, or mowing.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title:
        'Health Care Utilization and Outcomes Associated with Accidental Poisonous Mushroom Ingestions — United States, 2016–2018',
      url: 'https://www.cdc.gov/mmwr/volumes/70/wr/mm7010a1.htm',
      sourceType: 'government',
      notes:
        'Documents serious outcomes from accidental mushroom ingestion and advises against eating wild mushrooms unless identified by an expert; it also notes that cooking does not inactivate mushroom toxins.',
    },
    {
      publisher: 'Poison Control',
      title: 'Get help online or by phone',
      url: 'https://www.poison.org/how-to-get-help-from-poison-control',
      sourceType: 'other',
      notes:
        'Advises getting help immediately for a suspected poisoning rather than waiting for symptoms and provides the U.S. Poison Control number.',
    },
    {
      publisher: 'ASPCA Animal Poison Control Center',
      title: 'The Fungus Among Us: Mushroom Toxicosis',
      url: 'https://www.aspca.org/news/fungus-among-us-mushroom-toxicosis',
      sourceType: 'other',
      notes:
        'Explains that toxic wild mushrooms can cause severe illness or death in pets, recommends immediate veterinary or poison-control advice after ingestion, and advises clearing mushrooms before pets enter the yard.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Garden rake and work gloves',
      description:
        'Useful for collecting mushrooms without leaving pieces where children or pets can reach them.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Local Cooperative Extension or plant diagnostic clinic',
      description:
        'Can help distinguish ordinary nuisance mushrooms from fairy-ring damage and recommend lawn practices suited to local grass and soil.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Poison Control',
      description:
        'Provides immediate, case-specific guidance in the United States when a person may have tasted or swallowed a wild mushroom.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinarian or animal poison-control service',
      description:
        'Assesses mushroom exposure in pets and advises whether emergency examination or treatment is needed.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'fairy-ring-in-lawn',
      anchorText: 'Is a fairy ring damaging my lawn?',
      relationshipType: 'escalation',
    },
    {
      slug: 'slime-mold-on-grass',
      anchorText: 'Could this be slime mold instead?',
      relationshipType: 'related',
    },
    {
      slug: 'brown-patch-in-lawn',
      anchorText: 'Is a brown lawn patch a fungal problem?',
      relationshipType: 'sibling',
    },
  ],
};
