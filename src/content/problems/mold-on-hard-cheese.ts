import type { ProblemSeed } from '../types';

export const moldOnHardCheese: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'food-safety',
  slug: 'mold-on-hard-cheese',
  canonicalPath: '/food-kitchen/refrigeration/food-safety/mold-on-hard-cheese/',
  name: 'Mold on Hard Cheese',
  eyebrow: 'Food & Kitchen · Refrigeration · Food Safety',

  h1: 'Can I Ignore Mold on Hard Cheese?',
  seoTitle: 'Moldy Hard Cheese: When You Can Cut It Off and Keep the Rest',
  metaDescription:
    'A moldy hard-cheese block may be salvageable with a wide cut. Learn when to trim it and when sliced, shredded, soft, or recalled cheese must go.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'Only after a wide safety trim',

  shortAnswer:
    'Usually not as-is. If it is a solid block of hard cheese, cut away at least one inch around and below the mold without touching the mold with the knife. Discard soft, sliced, shredded, or crumbled cheese instead.',

  whyItMattersHeading: 'Why the Cheese Format Changes the Answer',
  whyItMatters: [
    'Mold generally cannot penetrate deeply into dense hard cheese, so USDA guidance allows the unaffected part of a solid block to be saved after a wide cut. Scraping the surface or removing a paper-thin piece is not enough.',
    'That exception follows the cheese’s form as well as its type. Individual slices, shreds, and crumbles have far more exposed surface and may be contaminated beyond the visible spot. Soft cheeses can also be affected below the surface, so the entire container or package should be discarded.',
  ].join('\n\n'),

  redFlagsHeading: 'Discard It or Get Help If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Hard-cheese trimming, discard exceptions, recalls, accidental ingestion, and symptom red flags checked against USDA, FDA, CDC, and Poison Control guidance.',
  disclaimer:
    'General U.S. home food-safety guidance, not a medical diagnosis. Product recalls and label instructions override general trimming advice. Seek medical care for severe symptoms.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'expected-blue-cheese-mold',
      label: 'The mold is an intended part of the cheese',
      shortDescription:
        'The blue or green veins match the cheese’s normal appearance, with no new fuzzy patch, unexpected color, or unusual spoilage.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Expected mold is part of the cheese',
      resultBody:
        'Certain cheeses, including blue cheese, Gorgonzola, and Stilton, are made with selected molds. Their normal veins or established mold pattern are not the same as new spoilage.',
      recommendedAction:
        'Eat it normally if the appearance and odor match the product. Treat any new or unfamiliar surface growth separately.',
    },
    {
      slug: 'mold-on-individual-slices',
      label: 'Mold is on sliced hard cheese',
      shortDescription:
        'Mold appears on deli slices, sandwich slices, or multiple thin pieces rather than one solid block.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Discard all affected sliced cheese',
      resultBody:
        'USDA excludes sliced cheese of every type from the hard-block trimming exception. Contamination may extend beyond the visibly moldy slice.',
      recommendedAction:
        'Discard the entire package containing the affected slices. Do not keep slices that look clean or try to trim their edges.',
    },
    {
      slug: 'mold-on-shredded-or-crumbled-cheese',
      label: 'Mold is in shredded, grated, or crumbled cheese',
      shortDescription: 'One or more loose pieces show fuzzy growth or unexpected colored spots.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'The whole package should go',
      resultBody:
        'Small loose pieces cannot be given the required safety margin. Shredded and crumbled cheese may also be contaminated during cutting and throughout the package.',
      recommendedAction: 'Seal and discard the entire package. Do not pick out the visibly moldy pieces.',
    },
    {
      slug: 'cheese-is-soft-or-fresh',
      label: 'The cheese is soft or fresh, not hard',
      shortDescription:
        'The product is cottage cheese, cream cheese, ricotta, chèvre, or another moist, soft cheese.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not salvage soft cheese',
      resultBody:
        'Mold and accompanying bacteria can extend beneath the surface of moist cheese where they cannot be seen or removed reliably.',
      recommendedAction:
        'Discard the entire container or package without tasting it or scooping around the spot.',
    },
    {
      slug: 'unexpected-mold-on-brie-or-camembert',
      label: 'Brie or Camembert has unfamiliar mold',
      shortDescription:
        'A new colored, fuzzy, or spreading patch appears in addition to the cheese’s normal white manufactured rind.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Unexpected mold means discard it',
      resultBody:
        'Brie and Camembert are soft cheeses. Their intended rind is edible, but USDA says to discard them when mold that is not part of manufacturing appears.',
      recommendedAction: 'Throw away the whole cheese. Do not peel the rind or cut around the new growth.',
    },
    {
      slug: 'block-too-small-for-wide-trim',
      label: 'The block is too small for the full cut',
      shortDescription:
        'Removing the required margin would leave little cheese or would bring the cut close to another mold spot.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'There is not enough clean cheese to save',
      resultBody:
        'The hard-cheese exception depends on cutting at least one inch around and below every mold spot. A smaller trim does not follow the safety guidance.',
      recommendedAction: 'Discard the block instead of reducing the margin to avoid waste.',
    },
    {
      slug: 'block-covered-with-mold',
      label: 'Mold covers much of the block',
      shortDescription:
        'There are many patches, extensive fuzzy growth, or no clearly unaffected interior with room for a full safety margin.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Widespread growth is not a trimming job',
      resultBody:
        'USDA advises discarding food covered with mold. Multiple areas also make it difficult to keep the knife away from growth and preserve an adequate clean section.',
      recommendedAction:
        'Wrap and discard the entire block. Clean the refrigerator area and inspect food that touched it.',
    },
    {
      slug: 'cheese-is-under-recall',
      label: 'The cheese matches a recall notice',
      shortDescription:
        'The brand, variety, package size, lot code, or date matches an active recall or public health warning.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A recall overrides the trimming rule',
      resultBody:
        'A recalled cheese may contain contamination that has nothing to do with the visible mold and cannot be removed by cutting.',
      recommendedAction:
        'Do not eat it. Follow the recall instructions for disposal or return, and clean contacted surfaces if the notice directs you to do so.',
    },
    {
      slug: 'small-accidental-bite-no-symptoms',
      label: 'You accidentally ate a small amount and feel normal',
      shortDescription:
        'A generally healthy person swallowed a small bite before noticing the mold and has no symptoms.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Symptoms are unlikely, but stop eating it',
      resultBody:
        'Poison Control says a healthy person who eats a small amount of moldy food will probably have no symptoms, although stomach, allergic, or respiratory reactions are possible.',
      recommendedAction:
        'Stop eating the untrimmed cheese, discard or trim it correctly, and monitor how you feel. Contact Poison Control for case-specific advice.',
    },
    {
      slug: 'symptoms-after-eating-moldy-cheese',
      label: 'Symptoms started after eating the cheese',
      shortDescription:
        'Nausea, vomiting, diarrhea, cramps, rash, wheezing, fever, or another new symptom developed after it was eaten.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Respond according to the symptoms',
      resultBody:
        'Moldy food can cause gastrointestinal, allergic, or respiratory symptoms, and an unrelated foodborne contaminant may also be responsible.',
      recommendedAction:
        'Stop eating the cheese and contact Poison Control or a health care provider. Seek urgent help for breathing trouble, swelling, bloody diarrhea, severe vomiting, high fever, or dehydration.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The visible spot marks unwanted mold growth',
      description:
        'On a dense hard-cheese block, the growth may remain near the surface, but the visible portion does not define a safe cutting line.',
      severity: 'caution',
      chainLabel: 'Visible mold',
    },
    {
      stageLabel: 'IF YOU SCRAPE IT OR CUT TOO CLOSE',
      title: 'Affected cheese may remain',
      description:
        'A shallow cut can leave mold structures behind, and pushing the knife through the spot can carry contamination onto the section you planned to keep.',
      severity: 'caution',
      chainLabel: 'Inadequate trim',
    },
    {
      stageLabel: 'IF YOU REUSE THE WRAPPER',
      title: 'The trimmed cheese can contact mold again',
      description:
        'Old wrap may still hold growth or residue from the removed section. USDA instructs consumers to re-cover the cheese in fresh wrap.',
      severity: 'caution',
      chainLabel: 'Recontamination',
    },
    {
      stageLabel: 'IF THE CHEESE IS SLICED, SHREDDED, OR SOFT',
      title: 'Contamination may extend beyond what you see',
      description:
        'Moist cheese and small cut pieces cannot be separated from visible mold as reliably as a dense, intact block.',
      severity: 'warning',
      chainLabel: 'Hidden contamination',
    },
    {
      stageLabel: 'IF EATING IT CAUSES A SERIOUS REACTION',
      title: 'Medical attention may be needed',
      description:
        'Breathing difficulty, facial or throat swelling, bloody diarrhea, frequent vomiting, high fever, or dehydration should not be watched at home without medical advice.',
      severity: 'danger',
      chainLabel: 'Severe symptoms',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One isolated spot on a solid hard-cheese block with ample clean cheese around it',
      ignoreAnswer: 'No—trim before eating',
      severity: 'caution',
      whatToDo:
        'Cut at least one inch around and below the spot, keep the knife out of the mold, discard the cut portion, and place the remaining cheese in fresh wrap.',
    },
    {
      situation: 'A hard-cheese block is too small to leave the full trimming margin',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the block. Do not make a thinner cut simply because little cheese would remain.',
    },
    {
      situation: 'Mold appears on individually sliced cheese',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the package containing the slices, including pieces that still look clean.',
    },
    {
      situation: 'Mold appears in shredded, grated, or crumbled cheese',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the whole package. Picking through loose pieces cannot create the required margin.',
    },
    {
      situation: 'The cheese is soft, fresh, or spreadable',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Throw away the entire container or package without scooping around the growth.',
    },
    {
      situation: 'The veins are the normal manufactured mold in blue cheese',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Use the cheese normally if the pattern is expected and there is no new fuzzy growth, unfamiliar discoloration, or other spoilage.',
    },
    {
      situation: 'You swallowed a small bite and feel normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Stop eating the untrimmed cheese and monitor for stomach, skin, or breathing symptoms. Contact Poison Control if you need individualized guidance.',
    },
    {
      situation: 'Symptoms began after the cheese was eaten',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact Poison Control or a health care provider. Get urgent help for breathing difficulty, swelling, severe vomiting, bloody diarrhea, high fever, or dehydration.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Confirm the cheese and its form',
      body:
        'Apply the trimming exception only to one solid piece of hard cheese. Do not apply it to soft cheese, individual slices, shredded cheese, crumbles, or a mixed package of small pieces.',
    },
    {
      title: 'Step 2: Make the full safety cut',
      body:
        'Place the block on a clean cutting board. Cut at least one inch around and below every mold spot, keeping the blade out of the visible growth so it does not drag through the section being saved.',
    },
    {
      title: 'Step 3: Rewrap and refrigerate the remainder',
      body:
        'Discard the removed section, wash the knife and cutting board, and cover the remaining cheese with fresh wrap or place it in a clean container. Do not return it to the moldy wrapper.',
    },
    {
      title: 'Step 4: Discard cheese that cannot be salvaged',
      body:
        'Seal soft, sliced, shredded, crumbled, extensively moldy, or recalled cheese before placing it in a covered trash can. Keep it away from children and animals, then clean surfaces the package touched.',
    },
    {
      title: 'Step 5: Handle an accidental bite based on symptoms',
      body:
        'A healthy person who swallowed a small amount will probably be fine. Stop eating it and monitor how you feel. Contact Poison Control at 1-800-222-1222 for guidance, and seek care for serious symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The cheese is not one solid hard block',
      description:
        'Soft cheese, slices, shreds, loose grated cheese, and crumbles do not qualify for the hard-block trimming exception.',
      severity: 'warning',
    },
    {
      title: 'You cannot leave a full margin around every spot',
      description:
        'Discard a small block, thin wedge, or heavily spotted piece if cutting at least one inch around and below the growth is not possible.',
      severity: 'warning',
    },
    {
      title: 'Growth is widespread or the cheese looks or smells spoiled',
      description:
        'Extensive mold, wet or slimy areas, or a suspicious odor is a reason to discard the product rather than search for a usable section.',
      severity: 'warning',
    },
    {
      title: 'The product matches a recall',
      description:
        'Do not taste or trim recalled cheese. Follow the product-specific return, disposal, and cleaning instructions in the recall notice.',
      severity: 'danger',
    },
    {
      title: 'Breathing trouble or facial or throat swelling develops',
      description:
        'Wheezing, difficulty breathing, or swelling of the lips, tongue, face, or throat may indicate a serious reaction and requires emergency help.',
      severity: 'danger',
    },
    {
      title: 'Severe food-poisoning symptoms develop',
      description:
        'Seek medical care for bloody diarrhea, vomiting that prevents fluids from staying down, fever over 102°F, or signs of dehydration.',
      severity: 'danger',
    },
    {
      title: 'A higher-risk person becomes ill after eating it',
      description:
        'Pregnant people, young children, older adults, and people with weakened immune systems are more vulnerable to serious foodborne illness and should seek advice sooner.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Do I have to throw away the entire block of hard cheese?',
      answer:
        'Not when there is one limited mold spot and enough unaffected cheese to cut at least one inch around and below it. Discard the block if you cannot make that full cut.',
    },
    {
      question: 'Can I just scrape mold off hard cheese?',
      answer:
        'No. Scraping removes only visible surface growth. USDA guidance calls for cutting around and beneath the mold.',
    },
    {
      question: 'Should I wash mold off the cheese before cutting it?',
      answer:
        'No. Washing can spread moisture and mold across the surface. Cut out the affected section with a clean knife while keeping the blade away from the mold.',
    },
    {
      question: 'Is a thin slice from the surface enough?',
      answer: 'No. The cut must extend at least one inch around the spot and at least one inch below it.',
    },
    {
      question: 'Can I keep clean-looking slices from a moldy package?',
      answer:
        'No. USDA says to discard sliced cheeses of every type when mold appears, even if some slices look unaffected.',
    },
    {
      question: 'What about mold in a bag of shredded cheddar?',
      answer:
        'Discard the entire bag. The trimming rule applies to a solid block, not individual shreds or crumbles.',
    },
    {
      question: 'Is mold on blue cheese safe?',
      answer:
        'The mold intentionally used to make blue cheese is normally safe. New fuzzy growth, an unfamiliar color, or an unexpected surface patch should not automatically be treated as part of the cheese.',
    },
    {
      question: 'Can I cut unexpected mold off Brie or Camembert?',
      answer:
        'No. Their normal manufactured rind is expected, but USDA says to discard these soft cheeses if other mold appears.',
    },
    {
      question: 'Does cooking moldy cheese make it safe?',
      answer:
        'Cooking is not a substitute for the USDA trimming or discard guidance. Trim a salvageable hard block correctly before cooking, and discard cheese that falls into a discard category.',
    },
    {
      question: 'What if I already ate a small piece?',
      answer:
        'A healthy person who swallowed a small amount will probably have no symptoms. Stop eating it and monitor for stomach, allergic, or breathing symptoms; contact Poison Control if you are concerned.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Molds on Food: Are They Dangerous?',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/molds-food-are-they-dangerous',
      sourceType: 'government',
      notes:
        'Says hard cheese may be used after cutting at least one inch around and below mold, avoiding contact with the knife, and applying fresh wrap. It says to discard soft, sliced, shredded, and crumbled cheese.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'CPG Sec 555.320 Listeria monocytogenes',
      url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cpg-sec-555320-listeria-monocytogenes',
      sourceType: 'regulation',
      notes:
        'Lists hard cheeses such as cheddar, Colby, and Parmesan among ready-to-eat foods that generally do not support Listeria growth, while identifying soft unripened cheeses as products that can support growth.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'People at Risk of Foodborne Illness',
      url: 'https://www.fda.gov/food/consumers/people-risk-foodborne-illness',
      sourceType: 'government',
      notes:
        'Identifies pregnant people, young children, older adults, and people with weakened immune systems as more vulnerable to foodborne illness and serious complications.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Food Recalls: What You Need to Know',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/food-recalls-what-you-need-know',
      sourceType: 'government',
      notes:
        'Explains how consumers can identify recalled foods and instructs them to follow the recall notice for return, disposal, cleaning, and reporting illness.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Food Poisoning Symptoms',
      url: 'https://www.cdc.gov/food-safety/signs-symptoms/index.html',
      sourceType: 'government',
      notes:
        'Lists common foodborne illness symptoms and severe warning signs, including bloody diarrhea, high fever, frequent vomiting, and dehydration.',
    },
    {
      publisher: 'National Capital Poison Center',
      title: 'Spoiled food and drinks: When in doubt, throw it out',
      url: 'https://www.poison.org/articles/spoiled-food-and-drinks',
      sourceType: 'other',
      notes:
        'Repeats the wide-trim guidance for hard cheese, says a healthy person eating a small amount will probably have no symptoms, and describes possible gastrointestinal, respiratory, and allergic reactions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Clean chef’s knife and cutting board',
      description:
        'A clean, sharp knife helps remove the full section without sawing through the mold or dragging it into the cheese being kept.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Fresh food wrap or a clean storage container',
      description:
        'The salvaged cheese should be placed in new wrapping or a clean covered container rather than returned to contaminated packaging.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'FDA food recall lookup',
      description:
        'Use the brand, product name, package size, lot code, and date to check whether a cheese is included in a current recall or safety alert.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Poison Control',
      description:
        'Free, confidential guidance is available for accidental ingestion of moldy food and questions about possible symptoms.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'mold-on-bread', anchorText: 'Can I ignore mold on bread?', relationshipType: 'sibling' },
    {
      slug: 'food-past-best-by-date',
      anchorText: 'Can I use food past its best-by date?',
      relationshipType: 'related',
    },
    {
      slug: 'fridge-not-cold-enough',
      anchorText: 'What if the refrigerator is not cold enough?',
      relationshipType: 'cause',
    },
  ],
};
