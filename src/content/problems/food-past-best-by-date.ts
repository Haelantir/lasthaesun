import type { ProblemSeed } from '../types';

export const foodPastBestByDate: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'food-safety',
  slug: 'food-past-best-by-date',
  canonicalPath: '/food-kitchen/refrigeration/food-safety/food-past-best-by-date/',
  name: 'Food Past the Best-By Date',
  eyebrow: 'Food & Kitchen · Refrigeration · Food Safety',

  h1: 'Can I Ignore Food Past the Best-By Date?',
  seoTitle: 'Best-By Dates: When Food Is Still Safe and When to Toss It',
  metaDescription:
    'A best-by date usually marks quality, not safety. Learn when pantry, refrigerated, frozen, opened, damaged, or recalled food should be kept or tossed.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'Often yes—if storage and packaging check out',

  shortAnswer:
    'A best-by date is usually about quality, not a safety cutoff. Properly stored food may still be usable after it, but the date never overrides unsafe storage, a damaged package, spoilage, a recall, or product-specific instructions.',

  whyItMattersHeading: 'The Date Is Only One Part of the Decision',
  whyItMatters: [
    'Under federal guidance, “Best if Used By” describes peak flavor or quality, while “Sell By” mainly helps stores rotate inventory. Federal guidance also generally treats “Use By” as a quality date except on infant formula. State rules can differ: for covered food manufactured on or after July 1, 2026 and sold in California, “Use By” is a standardized safety date.',
    'Food type, temperature, package condition, opening date, and handling history determine what happens next. Refrigerated food can become unsafe before its printed date if it was kept too warm, while an intact shelf-stable or continuously frozen product may remain safe after its best-by date. Smell and appearance can reveal spoilage, but they cannot prove that harmful pathogens are absent.',
  ].join('\n\n'),

  redFlagsHeading: 'Throw It Out or Follow the Safety Notice If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Date-label meaning, storage, opening, package damage, spoilage, freezing, infant formula, recalls, and California’s 2026 rule checked against USDA, FDA, and state law.',
  disclaimer:
    'General guidance for commercially packaged food sold in the United States. Home-canned food, specialized medical foods, and products with specific safety instructions require their own guidance; state rules may differ.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'unopened-shelf-stable-food',
      label: 'Unopened shelf-stable food with an intact package',
      shortDescription:
        'Dry pasta, cereal, crackers, canned food, or another pantry item stayed cool and dry with no leaks, swelling, pests, or seal damage.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The date is mainly a quality marker',
      resultBody:
        'Passing a best-by date does not automatically make an unopened shelf-stable food unsafe. Flavor, texture, color, or cooking performance may decline as it ages, and storage recommendations still vary by product.',
      recommendedAction:
        'Inspect the package, check the product in FoodKeeper, and use older stock first. Discard it if the seal is compromised, the container is damaged, or the contents show spoilage when opened.',
    },
    {
      slug: 'continuously-frozen-food',
      label: 'Food stayed continuously frozen',
      shortDescription:
        'The food remained at 0°F or below, with no thawing, power-loss concern, or damaged packaging.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The best-by date is a quality issue',
      resultBody:
        'Food kept continuously frozen at 0°F remains safe, although flavor, moisture, color, and texture can deteriorate. Freezer burn is also a quality problem rather than proof that the food is unsafe.',
      recommendedAction:
        'Keep it frozen until needed, thaw it safely, and follow the package cooking directions. Discard it if you cannot confirm that it stayed frozen.',
    },
    {
      slug: 'sell-by-date-passed-at-home',
      label: 'The sell-by date passed after purchase',
      shortDescription: 'A refrigerated product was bought on time and remained properly chilled at home.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Sell-by is not your eating deadline',
      resultBody:
        'A sell-by date generally tells a retailer how long to display a product. It does not replace the home-storage guidance for that type of food.',
      recommendedAction:
        'Count storage from purchase or opening as appropriate, keep the food at 40°F or below, and use the product-specific refrigerator guidance rather than treating the sell-by date as an automatic discard date.',
    },
    {
      slug: 'refrigerated-food-with-known-history',
      label: 'Refrigerated food with a known storage history',
      shortDescription:
        'The food stayed at 40°F or below and remains within the storage guidance for that specific product.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'It may still be usable',
      resultBody:
        'A passed best-by date alone does not make properly handled refrigerated food unsafe. Refrigerated products have food-specific storage limits, however, and some ready-to-eat foods become riskier as storage continues.',
      recommendedAction:
        'Check FoodKeeper or the applicable cold-storage chart, follow the package directions, and use or freeze the food while it remains within that guidance.',
    },
    {
      slug: 'package-was-opened',
      label: 'The package was opened earlier',
      shortDescription:
        'The original seal is broken, and the opening date or after-opening instructions now matter.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not rely on the printed date alone',
      resultBody:
        'Opening can expose food to air, moisture, utensils, hands, and microorganisms. Many foods also require refrigeration or have a much shorter recommended storage period once opened.',
      recommendedAction:
        'Follow any “refrigerate after opening” and after-opening instructions. If you cannot establish when a perishable product was opened, discard it rather than stretching the best-by date.',
    },
    {
      slug: 'cold-storage-history-unknown',
      label: 'The cold-storage history is unknown',
      shortDescription:
        'The refrigerator may have been too warm, the food sat out, or you do not know how it was transported or stored.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The date cannot prove that it is safe',
      resultBody:
        'Perishable food should not remain at room temperature for more than two hours, or more than one hour above 90°F. A future best-by date does not reverse unsafe temperature exposure.',
      recommendedAction:
        'Discard the affected perishable food when safe time and temperature cannot be established. Do not taste it as a test.',
    },
    {
      slug: 'damaged-package',
      label: 'The package is swollen, leaking, open, or badly damaged',
      shortDescription:
        'A can bulges or leaks, a jar seal is loose, a pouch is swollen, or the package has a puncture, deep dent, or serious rust.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Package damage overrides the date',
      resultBody:
        'Damage can break a commercial seal and allow contamination. Bulging, leaking, deeply dented, heavily rusted, or forcefully spurting containers should not be used even when the printed date has not passed.',
      recommendedAction:
        'Do not open or taste a swollen or leaking container. Securely discard it and clean any surface touched by leaking contents.',
    },
    {
      slug: 'spoilage-signs',
      label: 'The food has clear spoilage signs',
      shortDescription:
        'There is unexpected mold, slime, an off odor, unusual texture, discoloration with other spoilage signs, or unexpected gas.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Throw it out',
      resultBody:
        'A best-by date is not permission to eat spoiled food. Some harmful organisms do not create obvious warning signs, but visible spoilage is still enough reason not to use the product.',
      recommendedAction:
        'Discard the food without tasting it. Clean containers, shelves, and utensils that contacted leaks or mold, and check nearby food for contamination.',
    },
    {
      slug: 'recalled-product',
      label: 'The product matches a recall',
      shortDescription:
        'The brand, package size, lot code, UPC, or date range appears in an FDA, USDA, or manufacturer recall notice.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The recall controls the decision',
      resultBody:
        'Recalled food can look and smell normal and may still be before its best-by date. Recall notices identify the affected codes and provide product-specific return, disposal, and cleaning instructions.',
      recommendedAction:
        'Do not eat or donate it. Follow the recall notice exactly, including any instructions for disposal, refunds, and cleaning.',
    },
    {
      slug: 'true-safety-date-passed',
      label: 'A legally defined safety date has passed',
      shortDescription:
        'Infant formula is past its use-by date, or a covered California food is past a standardized Use By safety date.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Follow the safety date',
      resultBody:
        'FDA requires a use-by date on infant formula and advises against using formula after it. California law uses “Use By” as a safety date on covered food manufactured on or after July 1, 2026.',
      recommendedAction:
        'Discard or replace the product. Do not treat this date like an ordinary best-by quality date.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The best-by date passes',
      description:
        'Nothing automatically changes at midnight. The manufacturer’s stated period of peak quality has ended.',
      severity: 'info',
      chainLabel: 'Date passes',
    },
    {
      stageLabel: 'IF QUALITY DECLINES',
      title: 'Flavor and texture may fade',
      description:
        'Dry food may become stale, sauces may separate, and frozen food may dry out. A product can become disappointing before it becomes unsafe.',
      severity: 'caution',
      chainLabel: 'Quality declines',
    },
    {
      stageLabel: 'IF STORAGE GUIDANCE IS EXCEEDED',
      title: 'The printed date stops being useful',
      description:
        'Once a package is opened or a refrigerated product outlasts its specific storage guidance, the original date cannot establish that it should be kept.',
      severity: 'warning',
      chainLabel: 'Storage guidance ends',
    },
    {
      stageLabel: 'IF HANDLING OR PACKAGING FAILS',
      title: 'Contamination becomes the concern',
      description:
        'Warm exposure, a failed seal, leaks, pests, cross-contamination, or a recall can make food unsafe before or after any printed date.',
      severity: 'warning',
      chainLabel: 'Unsafe condition develops',
    },
    {
      stageLabel: 'IF UNSAFE FOOD IS EATEN',
      title: 'Foodborne illness can occur',
      description:
        'Harmful bacteria, viruses, parasites, toxins, allergens, or foreign material may cause illness or injury, even when the food did not smell spoiled.',
      severity: 'danger',
      chainLabel: 'Illness or injury',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Unopened shelf-stable food, properly stored and package intact',
      ignoreAnswer: 'Yes, for the date alone',
      severity: 'info',
      whatToDo: 'Inspect it, check product-specific storage guidance, and expect possible quality loss.',
    },
    {
      situation: 'Food stayed continuously frozen at 0°F',
      ignoreAnswer: 'Yes, for safety',
      severity: 'info',
      whatToDo: 'Keep it frozen, thaw it safely, and assess quality after cooking or preparation.',
    },
    {
      situation: 'Refrigerated food stayed at 40°F or below',
      ignoreAnswer: 'Only within its storage guidance',
      severity: 'caution',
      whatToDo:
        'Check the guidance for that exact food and account for when it was purchased, prepared, or opened.',
    },
    {
      situation: 'The package was opened, but the opening date is unknown',
      ignoreAnswer: 'Not from the best-by date alone',
      severity: 'warning',
      whatToDo:
        'Follow after-opening directions. Discard a perishable product if its opening and storage history cannot be established.',
    },
    {
      situation: 'Temperature history is unknown or unsafe',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard affected perishable food rather than relying on its date, smell, or appearance.',
    },
    {
      situation: 'The container is swollen, leaking, unsealed, or badly damaged',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not open or taste it. Securely discard it and clean any leaked contents.',
    },
    {
      situation: 'The product matches a recall',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Follow the recall notice’s identification, disposal, return, and cleaning instructions.',
    },
    {
      situation: 'Infant formula or a covered California safety date has expired',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Discard or replace the product rather than treating the date as optional quality guidance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Read the words before the date',
      body:
        '“Best if Used By” normally describes quality. “Sell By” generally concerns store inventory. Treat “Use By” according to the product and jurisdiction, including the federal infant-formula rule and California’s current safety-date system.',
    },
    {
      title: 'Reconstruct the storage history',
      body:
        'Confirm whether the food belongs in the pantry, refrigerator, or freezer; whether it stayed at the required temperature; and when it was opened, cooked, thawed, or brought home.',
    },
    {
      title: 'Check product-specific storage guidance',
      body:
        'Use the USDA FoodKeeper tool or a federal cold-storage chart instead of guessing how far a particular food can go past its date. Storage guidance differs widely among raw meat, deli food, dairy products, condiments, canned goods, and dry food.',
    },
    {
      title: 'Inspect without taste-testing',
      body:
        'Look for a failed seal, swelling, leakage, deep rust, severe dents, pests, mold, slime, or an off odor. Do not taste food from a suspect container or food with an unsafe temperature history.',
    },
    {
      title: 'Check the lot code for recalls',
      body:
        'Compare the exact brand, product name, package size, UPC, lot code, and date range with current FDA, USDA, or manufacturer notices. A similar product or matching brand name alone is not enough.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The package is bulging, leaking, punctured, or unsealed',
      description:
        'A failed package can admit contamination. Do not open a swollen container to investigate it.',
      severity: 'danger',
    },
    {
      title: 'A can or jar spurts liquid or releases a foul odor',
      description:
        'Do not taste the contents. Securely discard the food and clean everything the contents touched.',
      severity: 'danger',
    },
    {
      title: 'There is unexpected mold, slime, or an off odor',
      description:
        'Do not let the best-by date overrule clear spoilage. Bread and most soft or high-moisture foods should not be rescued by removing the visible spot.',
      severity: 'warning',
    },
    {
      title: 'Perishable food became warm or its temperature history is unknown',
      description: 'Appearance and smell cannot establish safety after possible temperature abuse.',
      severity: 'warning',
    },
    {
      title: 'The product is beyond its food-specific storage guidance',
      description:
        'The printed best-by date does not extend refrigerator storage limits or after-opening instructions.',
      severity: 'warning',
    },
    {
      title: 'The package matches a recall notice',
      description:
        'Follow the notice even if the food looks normal and has not reached the date printed on the package.',
      severity: 'danger',
    },
    {
      title: 'A true safety date has passed',
      description:
        'Do not use infant formula after its use-by date or covered California food after a standardized Use By safety date.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does a best-by date mean the food becomes unsafe that day?',
      answer:
        'Usually no. “Best if Used By” generally marks peak flavor or quality. Storage history, package condition, food-specific guidance, and spoilage determine whether the food should be kept.',
    },
    {
      question: 'How long can food be eaten after a best-by date?',
      answer:
        'There is no universal grace period. Dry pasta, refrigerated deli meat, frozen vegetables, milk, and canned soup have different storage guidance. Check the exact food in FoodKeeper and account for whether it was opened.',
    },
    {
      question: 'What does a sell-by date mean?',
      answer:
        'Under federal guidance, it tells the store how long to display the product for inventory management and is not a safety date. State rules may differ, and California now prohibits most consumer-facing sell-by labels on newly manufactured covered foods.',
    },
    {
      question: 'What does a use-by date mean?',
      answer:
        'Federal guidance generally describes it as the manufacturer’s last recommended date for peak quality, except for infant formula. California uses “Use By” as a safety date for covered food manufactured on or after July 1, 2026, so context matters.',
    },
    {
      question: 'Does opening the package change the answer?',
      answer:
        'Yes. After opening, refrigeration instructions, contamination, moisture exposure, and the recommended after-opening period often matter more than the original best-by date.',
    },
    {
      question: 'Is food safe if it smells normal?',
      answer:
        'A normal smell is not proof of safety. Pathogens can be present without causing an off odor, taste, or visible change. Use smell to identify spoilage, not to clear food with an unsafe storage history.',
    },
    {
      question: 'Can I taste a small amount to see whether it is still good?',
      answer:
        'No. Do not taste food from a bulging, leaking, recalled, moldy, spoiled, or temperature-abused package. A small taste is not a reliable safety test.',
    },
    {
      question: 'Is frozen food safe after its best-by date?',
      answer:
        'Yes, if it stayed continuously frozen at 0°F. Quality can decline, and a best-by date cannot confirm safety if the food thawed or its temperature history is unknown.',
    },
    {
      question: 'Can commercially canned food be used after its best-by date?',
      answer:
        'Often, if it was stored in a cool, dry place and the can remains intact. Never use a can that is bulging, leaking, deeply dented, heavily rusted, or forcefully spurts when opened.',
    },
    {
      question: 'Can I cut mold off food and eat the rest?',
      answer:
        'Not as a general rule. Bread, soft cheese, yogurt, leftovers, and other soft or high-moisture foods should be discarded. Only use a trimming exception when official guidance specifically allows it for that type of food.',
    },
    {
      question: 'Should higher-risk people eat borderline refrigerated food?',
      answer:
        'Do not serve food with uncertain storage, expired safety dates, recalls, or other warning signs. Pregnant people, young children, older adults, and people with weakened immune systems can become more seriously ill from foodborne germs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Food Product Dating',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-product-dating',
      sourceType: 'government',
      notes:
        'Defines best-if-used-by, sell-by, use-by, and freeze-by labels; explains that federal dating is generally voluntary except for infant formula and that quality dates do not replace safe handling.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Are You Storing Food Safely?',
      url: 'https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely',
      sourceType: 'government',
      notes:
        'Supports cold-storage temperatures, room-temperature limits, label directions, the limits of smell and appearance, frozen-food safety, package-damage warnings, and the infant-formula exception.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Shelf-Stable Food Safety',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food',
      sourceType: 'government',
      notes:
        'Covers shelf-stable storage, after-opening refrigeration, and discard guidance for swollen, leaking, deeply dented, heavily rusted, or abnormally spurting cans.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Molds on Food: Are They Dangerous?',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/molds-food-are-they-dangerous',
      sourceType: 'government',
      notes:
        'Explains that mold can extend below the visible surface and provides food-specific discard or trimming guidance for bread, soft foods, hard cheese, and firm produce.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Handling Infant Formula Safely: What You Need to Know',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/handling-infant-formula-safely-what-you-need-know',
      sourceType: 'government',
      notes:
        'States that FDA rules require a use-by date on infant formula and that formula should not be used after that date.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Food Recalls: What You Need to Know',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/food-recalls-what-you-need-know',
      sourceType: 'government',
      notes:
        'Explains recall reasons, product identification details, official recall sources, and instructions for returning, discarding, and cleaning after recalled food.',
    },
    {
      publisher: 'California Legislative Information',
      title: 'AB-660 Food and beverage products: labeling: quality dates, safety dates, and sell-by dates',
      url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB660',
      sourceType: 'regulation',
      notes:
        'Establishes California’s quality and safety date terms for covered food manufactured on or after July 1, 2026 and restricts consumer-facing sell-by labels, with listed exemptions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'USDA FoodKeeper',
      description:
        'An official food-storage guide for checking pantry, refrigerator, freezer, and after-opening recommendations for specific foods.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Refrigerator and freezer thermometer',
      description:
        'Confirms that refrigerated food is held at 40°F or below and frozen food at 0°F instead of relying on the appliance setting.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Food date labels and permanent marker',
      description:
        'Mark packages with the date opened, cooked, or thawed so the original best-by date is not mistaken for an after-opening storage limit.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'FDA and USDA recall alerts',
      description:
        'Official notices identify affected products by brand, package size, UPC, lot code, date range, and distribution information.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'expired-canned-food',
      anchorText: 'Can I eat canned food past its date?',
      relationshipType: 'sibling',
    },
    {
      slug: 'eggs-past-sell-by-date',
      anchorText: 'Can I eat eggs after the sell-by date?',
      relationshipType: 'sibling',
    },
    {
      slug: 'leftovers-left-out',
      anchorText: 'Can I eat food that was left out too long?',
      relationshipType: 'cause',
    },
    {
      slug: 'mold-on-bread',
      anchorText: 'Can I save bread after finding mold?',
      relationshipType: 'escalation',
    },
    { slug: 'freezer-burn', anchorText: 'Does freezer burn make food unsafe?', relationshipType: 'related' },
  ],
};
