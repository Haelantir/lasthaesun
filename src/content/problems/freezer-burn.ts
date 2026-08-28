import type { ProblemSeed } from '../types';

/**
 * Food & Kitchen > Food Storage > Frozen Food > Freezer Burn.
 *
 * Every factual claim below traces to one of the six sources at the
 * bottom of this file. The core distinction the page is built around:
 * freezer burn is a quality problem (dry, discolored, sometimes tough),
 * not a safety problem, per USDA and FDA. Whether food is still safe is
 * a completely separate question decided by temperature and time, not by
 * how the surface looks.
 */
export const freezerBurn: ProblemSeed = {
  systemSlug: 'frozen-food',
  slug: 'freezer-burn',
  canonicalPath: '/food-kitchen/food-storage/frozen-food/freezer-burn/',
  name: 'Freezer Burn',
  eyebrow: 'Food & Kitchen · Food Storage · Frozen Food',

  h1: 'Can I Ignore Freezer Burn?',
  seoTitle: 'Freezer Burn: Is the Food Still Safe to Eat? | Can I Ignore It',
  metaDescription:
    'Freezer burn looks bad but usually affects quality, not safety. See when the food is still fine and when thawing or temperature loss changes the answer.',

  status: 'published',
  indexable: true,

  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'Usually, if it stayed safely frozen',

  shortAnswer:
    'Yes. Freezer burn itself does not make food unsafe. It dries the surface and can hurt flavor and texture. The answer changes if the food thawed or warmed above safe temperatures, because freezer burn cannot tell you whether temperature abuse occurred.',

  whyItMattersHeading: 'Why Does Freezer Burn Happen?',
  whyItMatters: [
    'Freezer burn happens when air reaches the surface of frozen food and moisture is lost. USDA describes the result as dry, leathery or discolored areas. Poor wrapping, air left inside packaging and long freezer storage make it more likely.',
    'The main loss is quality. Food can become dry, tough or less flavorful, but USDA says freezer burn itself does not make food unsafe. You can trim freezer-burned areas before or after cooking. If most of the food is badly dried out, throwing it away may make sense because the quality is poor, not because freezer burn made it dangerous.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Blame It on Freezer Burn If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Freezer burn, frozen-food quality, airtight packaging, safe freezer temperatures, thawing after power loss and refreezing criteria checked against USDA FSIS and U.S. FDA consumer food-safety guidance.',
  disclaimer:
    'General food-storage guidance only. Freezer burn cannot show whether food was handled safely before freezing or kept at safe temperatures during a power outage or freezer failure. When temperature history is uncertain, use official food-safety guidance rather than appearance or smell alone.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'small-dry-patch',
      label: 'There is one small dry or pale patch',
      shortDescription: 'The food stayed frozen and the package otherwise looks normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is a quality problem',
      resultBody: 'A small freezer-burned area does not make the rest of the food unsafe. USDA says freezer burn causes dry spots but does not create a food-safety hazard.',
      recommendedAction: 'Cook the food normally if it was stored safely. Trim the dry area if the texture bothers you.',
    },
    {
      slug: 'meat-gray-brown-leathery',
      label: 'Frozen meat has grayish-brown leathery spots',
      shortDescription: 'The affected areas look dry and discolored.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'That matches classic freezer burn',
      resultBody: 'USDA describes freezer burn on meat as grayish-brown leathery spots caused by air reaching the food surface.',
      recommendedAction: 'Cut away badly dried portions before or after cooking if you do not want the tougher texture.',
    },
    {
      slug: 'lots-of-ice-inside-package',
      label: 'There are ice crystals inside the package',
      shortDescription: 'Frost or ice has formed around the food.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Ice alone does not make the food unsafe',
      resultBody: 'Ice in the package can accompany moisture loss, air exposure or temperature cycling. It does not by itself prove that the food became unsafe.',
      recommendedAction: 'Judge quality after cooking or thawing safely. Check the freezer temperature if this keeps happening across many packages.',
    },
    {
      slug: 'badly-freezer-burned',
      label: 'Most of the food is dry, pale or leathery',
      shortDescription: 'Freezer burn covers a large part of the item.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Safe may not mean worth eating',
      resultBody: 'USDA says heavily freezer-burned food may be discarded for quality reasons. The problem is dry texture and poor flavor, not freezer burn turning the food unsafe.',
      recommendedAction: 'Use it in a dish where texture matters less, trim damaged areas, or discard it if the quality is no longer acceptable.',
    },
    {
      slug: 'package-torn-in-freezer',
      label: 'The freezer package tore or opened',
      shortDescription: 'The food stayed frozen but air could get inside.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Rewrap it',
      resultBody: 'USDA says food that remains frozen is still safe if its freezer package accidentally tears or opens. Air exposure can lower quality and increase freezer burn.',
      recommendedAction: 'Rewrap or repackage the food tightly with freezer-safe material and remove as much air as practical.',
    },
    {
      slug: 'freezer-door-left-open-food-still-frozen',
      label: 'The freezer door was left open, but the food still has ice crystals',
      shortDescription: 'The food is still partly or fully frozen.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The food may still be safe',
      resultBody: 'USDA and FDA say food that still contains ice crystals or is at 40°F or below can be safely refrozen or cooked.',
      recommendedAction: 'Check the food temperature when possible. Refreeze or cook food that still has ice crystals or measures 40°F or below.',
    },
    {
      slug: 'thawed-but-40-or-below',
      label: 'The food softened or thawed, but it is 40°F or below',
      shortDescription: 'A thermometer confirms it stayed at or below 40°F.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'It can usually be refrozen or cooked',
      resultBody: 'FDA says frozen food that is 40°F or below can be safely refrozen or cooked. Some quality may be lost after thawing and refreezing.',
      recommendedAction: 'Refreeze it promptly or cook it according to the product and food-safety instructions.',
    },
    {
      slug: 'perishable-warm-too-long',
      label: 'Perishable food was above 40°F for two hours or more',
      shortDescription: 'Meat, poultry, seafood, eggs or another perishable food warmed beyond safe cold storage.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Discard the perishable food',
      resultBody: 'FDA advises discarding perishable food that has been at 40°F or above for two hours or more after a power loss or similar temperature problem.',
      recommendedAction: 'Throw it away. Freezer-burn marks do not change this temperature-based safety decision.',
    },
    {
      slug: 'temperature-history-unknown',
      label: 'I do not know how warm the food got or for how long',
      shortDescription: 'The freezer failed or power was out and there is no reliable temperature history.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Freezer burn cannot answer this',
      resultBody: 'FDA says appearance and odor cannot reliably determine the safety of food after a power outage. If you cannot establish a safe temperature history, do not use freezer burn as proof that the food is fine.',
      recommendedAction: 'Follow FDA power-outage guidance for the specific food. When safe temperature history cannot be established for perishable food, discard it.',
    },
    {
      slug: 'food-was-unsafe-before-freezing',
      label: 'The food may have spoiled before I froze it',
      shortDescription: 'It sat out too long or was already questionable before freezing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Freezing does not reset food safety',
      resultBody: 'Freezing stops most bacterial growth but does not make previously mishandled food safe again.',
      recommendedAction: 'Do not use freezer burn or freezing as a reason to keep food that was already unsafe before it entered the freezer.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Moisture leaves the food surface',
      description: 'Air contact causes frozen food to dry out at exposed areas.',
      severity: 'info',
      chainLabel: 'Moisture loss',
    },
    {
      stageLabel: 'AS IT CONTINUES',
      title: 'Dry spots become more noticeable',
      description: 'The surface may become pale, grayish-brown, leathery or covered with dry patches.',
      severity: 'info',
      chainLabel: 'Dry surface',
    },
    {
      stageLabel: 'KEEP STORING IT',
      title: 'Flavor and texture can decline',
      description: 'Freezer-burned areas may taste dry or stale and can become tougher after cooking.',
      severity: 'caution',
      chainLabel: 'Quality loss',
    },
    {
      stageLabel: 'IF MOST OF THE FOOD IS AFFECTED',
      title: 'It may no longer be worth eating',
      description: 'USDA says heavily freezer-burned food can be discarded because the quality has deteriorated.',
      severity: 'caution',
      chainLabel: 'Poor quality',
    },
    {
      stageLabel: 'SEPARATE SAFETY ISSUE',
      title: 'Thawing or temperature abuse changes the decision',
      description: 'Food that warmed beyond safe cold-storage limits has to be judged by temperature and time, not by the presence or absence of freezer burn.',
      severity: 'danger',
      chainLabel: 'Temperature history',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Small freezer-burned patches and the food stayed continuously frozen',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Cook normally and trim dry areas if you dislike the texture.',
    },
    {
      situation: 'Most of the food is heavily freezer burned',
      ignoreAnswer: 'Yes, for safety',
      severity: 'caution',
      whatToDo: 'Keep it only if the remaining quality is acceptable.',
    },
    {
      situation: 'The package tore but the food remained frozen',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Rewrap the food tightly to reduce further air exposure.',
    },
    {
      situation: 'Food still contains ice crystals after a power loss',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'USDA and FDA say it can be refrozen or cooked.',
    },
    {
      situation: 'Food thawed but measures 40°F or below',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo: 'Refreeze promptly or cook it; expect some quality loss.',
    },
    {
      situation: 'Perishable food was above 40°F for two hours or more',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Discard it.',
    },
    {
      situation: 'You cannot tell how long perishable food was above safe temperature',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Do not judge by smell or freezer burn. Follow FDA outage guidance and discard when safe temperature history cannot be established.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check whether this is really freezer burn',
      body: 'Look for dry, pale, grayish-brown or leathery areas on food that otherwise stayed safely frozen. Freezer burn is surface dehydration caused by air exposure.',
    },
    {
      title: 'Keep it if the quality is acceptable',
      body: 'USDA says freezer-burned food remains safe when it has otherwise been stored safely. Trim the affected portion before or after cooking if you do not want the dry texture.',
    },
    {
      title: 'Repackage exposed food',
      body: 'If the package has opened or contains a lot of air, move the food into freezer-safe airtight packaging. USDA recommends wrapping food tightly and keeping air out to reduce freezer burn.',
    },
    {
      title: 'Keep the freezer at 0°F',
      body: 'USDA and FDA recommend a freezer temperature of 0°F (-18°C) for frozen-food storage. An appliance thermometer makes temperature problems easier to catch.',
    },
    {
      title: 'Use temperature rules after a freezer failure',
      body: 'If the food thawed because of a power outage, open door or freezer problem, stop judging it by appearance. Food that still has ice crystals or is at 40°F or below can be refrozen or cooked under USDA and FDA guidance.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Perishable food was above 40°F for two hours or more',
      description: 'FDA advises discarding it.',
      severity: 'danger',
    },
    {
      title: 'You cannot establish a safe temperature history',
      description: 'Appearance and odor cannot prove the food is safe after a power or freezer failure.',
      severity: 'warning',
    },
    {
      title: 'The food may have been unsafe before it was frozen',
      description: 'Freezing does not undo earlier unsafe handling.',
      severity: 'danger',
    },
    {
      title: 'Raw meat juices leaked onto other food during thawing',
      description: 'Prevent cross-contamination and follow food-specific safety guidance.',
      severity: 'warning',
    },
    {
      title: 'The food has an obvious unrelated spoilage problem after safe thawing',
      description: 'Freezer burn does not explain every change in frozen food.',
      severity: 'warning',
    },
  ],

  /* --------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is freezer-burned food safe to eat?',
      answer: 'Yes, if it was otherwise handled and stored safely. USDA says freezer burn affects quality, not food safety.',
    },
    {
      question: 'What does freezer burn look like?',
      answer: 'USDA describes grayish-brown leathery spots on frozen food. Other foods may show pale, dry or shriveled areas where moisture has been lost.',
    },
    {
      question: 'What causes freezer burn?',
      answer: 'Air reaches the food surface and moisture is lost. Loose packaging, excess air and long storage make it more likely.',
    },
    {
      question: 'Can I cut freezer burn off meat?',
      answer: 'Yes. USDA says freezer-burned portions can be cut away before or after cooking.',
    },
    {
      question: 'Should I throw away heavily freezer-burned food?',
      answer: 'Only if the quality is poor enough that you no longer want it. USDA says heavily freezer-burned food may be discarded for quality reasons.',
    },
    {
      question: 'Does freezer burn mean my freezer is broken?',
      answer: 'Not necessarily. Packaging that lets air reach the food can cause freezer burn even in a properly cold freezer. If many packages are thawing or softening, check the freezer temperature.',
    },
    {
      question: 'Can I prevent freezer burn?',
      answer: 'Reduce air exposure. USDA recommends tight freezer-safe packaging and notes that airtight wrapping helps maintain quality and prevent freezer burn.',
    },
    {
      question: 'Are ice crystals on frozen food dangerous?',
      answer: 'Ice crystals by themselves do not mean the food is unsafe. After a power loss, USDA and FDA actually use remaining ice crystals as one sign that frozen food may still be safely refrozen or cooked.',
    },
    {
      question: 'Can I refreeze food that partially thawed?',
      answer: 'Yes, if it still contains ice crystals or is at 40°F or below. USDA and FDA warn that quality may decline after refreezing.',
    },
    {
      question: 'Can I tell whether thawed food is safe by smelling it?',
      answer: 'No. FDA says appearance and odor cannot reliably determine food safety after a power outage. Use time and temperature guidance instead.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Freezer thermometer',
      description: 'Lets you confirm that the freezer is maintaining the recommended 0°F (-18°C) storage temperature.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Food thermometer',
      description: 'Useful after a power outage or freezer failure to check whether partially thawed food is still at 40°F or below.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Heavy freezer bags',
      description: 'Thick freezer-safe bags help limit air exposure. Press out excess air before sealing.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Airtight freezer containers',
      description: 'Useful for food that is awkward to wrap tightly and for leftovers or prepared foods.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'USDA Freezing and Food Safety guide',
      description: 'Covers freezer burn, safe freezer temperatures, packaging, thawing, refreezing and power-outage handling.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* --------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'Freezing and Food Safety',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety',
      sourceType: 'government',
      notes: 'USDA states that food kept constantly at 0°F remains safe, explains that freezer burn is caused by air contact and moisture loss, says it does not make food unsafe and gives packaging and refreezing guidance.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'What Is Freezer Burn?',
      url: 'https://ask.fsis.usda.gov/article/What-is-freezer-burn',
      sourceType: 'government',
      notes: 'USDA describes freezer burn as grayish-brown leathery spots caused by air reaching the food surface and states that it makes food dry rather than unsafe.',
    },
    {
      publisher: 'U.S. Department of Agriculture Food Safety and Inspection Service',
      title: 'What Materials Are Safe to Freeze Food In?',
      url: 'https://ask.fsis.usda.gov/article/What-materials-are-safe-to-freeze-food-in',
      sourceType: 'government',
      notes: 'USDA explains that freezer packaging is intended to keep air out and reduce freezer burn and recommends tight, freezer-appropriate wrapping materials.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Are You Storing Food Safely?',
      url: 'https://www.fda.gov/consumers/consumer-updates/are-you-storing-food-safely',
      sourceType: 'government',
      notes: 'FDA states that freezer burn is a quality issue rather than a safety issue, recommends 0°F freezer storage and gives refreezing guidance for food that still has ice crystals or is 40°F or below.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Food and Water Safety During Power Outages and Floods',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/food-and-water-safety-during-power-outages-and-floods',
      sourceType: 'government',
      notes: 'FDA explains how to judge frozen food after a power outage using ice crystals and temperature and advises discarding perishable food held at 40°F or above for two hours or more.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Power Outages: Key Tips for Consumers About Food Safety',
      url: 'https://www.fda.gov/food/food-safety-during-emergencies/power-outages-key-tips-consumers-about-food-safety',
      sourceType: 'government',
      notes: 'FDA says food safety after power loss cannot be judged by appearance or odor and that food still containing ice crystals or measuring 40°F or below may be refrozen or cooked.',
    },
  ],

  /* --------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'freezer-door-left-open', anchorText: 'Can I ignore a freezer door left open?', relationshipType: 'related' },
    { slug: 'partially-thawed-frozen-food', anchorText: 'Can I ignore frozen food that partially thawed?', relationshipType: 'escalation' },
    { slug: 'ice-crystals-on-frozen-food', anchorText: 'Can I ignore ice crystals on frozen food?', relationshipType: 'sibling' },
    { slug: 'old-frozen-food', anchorText: 'Can I ignore food that has been frozen for a long time?', relationshipType: 'sibling' },
    { slug: 'freezer-not-cold-enough', anchorText: 'Can I ignore a freezer that is not cold enough?', relationshipType: 'escalation' },
  ],
};
