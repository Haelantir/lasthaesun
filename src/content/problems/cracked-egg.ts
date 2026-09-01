import type { ProblemSeed } from '../types';

export const crackedEgg: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'food-safety',
  slug: 'cracked-egg',
  canonicalPath: '/food-kitchen/refrigeration/food-safety/cracked-egg/',
  name: 'Cracked Egg',
  eyebrow: 'Food & Kitchen · Refrigeration · Food Safety',

  h1: 'Can I Ignore a Cracked Egg?',
  seoTitle: 'Cracked Egg Safety: When to Toss It and When It Is Usable',
  metaDescription:
    'Not every cracked egg must be discarded. Learn when a freshly cracked egg can be saved, when a boiled one is safe, and when the egg belongs in the trash.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'Only in specific situations',

  shortAnswer:
    'Usually not. Discard an egg that was already cracked when you found it or whose crack timing is unknown. If you saw it crack just now, you may be able to transfer it to a clean covered container, refrigerate it, use it within two days, and cook it thoroughly.',

  whyItMattersHeading: 'Why the timing of the crack matters',
  whyItMatters: [
    'The shell helps keep surface bacteria away from the egg’s contents. A crack creates a route through that barrier, and you cannot tell by looking or smelling whether Salmonella entered. Even clean, uncracked eggs can contain Salmonella, so a damaged shell adds concern rather than replacing the usual need for refrigeration and thorough cooking.',
    'A crack that happens under your control is different from one that may have been present through shipping or storage. USDA guidance allows a newly cracked egg to be transferred promptly to a clean covered container and refrigerated for short-term use. An egg that cracks during hard cooking is also considered safe, provided it is cooked thoroughly.',
  ].join('\n\n'),

  redFlagsHeading: 'Throw It Out or Get Help If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Crack timing, discard and salvage guidance, hard-cooking exceptions, refrigeration, frozen-shell damage, cooking, and Salmonella symptoms checked against USDA, FDA, CDC, and FoodSafety.gov.',
  disclaimer:
    'General food-safety guidance for commercially sold shell eggs in a home kitchen. Seek medical advice if illness develops, especially for a young child, an older adult, a pregnant person, or someone with a weakened immune system.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'pre-existing-or-unknown-crack',
      label: 'It was cracked at the store or you do not know when it happened',
      shortDescription: 'You found a hairline crack in the carton, but cannot establish when the shell broke.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Discard or return it',
      resultBody:
        'A pre-existing crack may have exposed the contents to surface bacteria during handling and storage. Its appearance cannot show whether contamination entered.',
      recommendedAction:
        'Do not taste it or try to rescue it with extra cooking. Discard it, or return the carton to the seller if appropriate.',
    },
    {
      slug: 'freshly-cracked-in-transit',
      label: 'It cracked on the way home or you just dropped it',
      shortDescription: 'You saw the shell break and can handle the egg immediately.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Save it only if you act now',
      resultBody:
        'USDA guidance allows an egg that cracks on the way home to be broken into a clean container, covered tightly, refrigerated, and used within two days.',
      recommendedAction:
        'Remove the egg from its shell now, place it in a clean covered container, refrigerate it, and use it in a thoroughly cooked dish within two days.',
    },
    {
      slug: 'cracked-as-cooking-started',
      label: 'It cracked while you were starting to cook',
      shortDescription: 'The shell was intact until it broke over a clean pan or bowl.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Use it now and cook it through',
      resultBody:
        'There was no unknown storage period with a damaged shell. The remaining precautions are the same as for any raw egg: check its appearance and odor, prevent cross-contamination, and cook it thoroughly.',
      recommendedAction:
        'Continue cooking if the egg has no unusual odor or appearance. Cook until the white and yolk are firm, or cook the egg dish to 160°F.',
    },
    {
      slug: 'cracked-during-hard-cooking',
      label: 'The shell cracked while the egg was boiling',
      shortDescription: 'The egg went into the water intact and cracked during hard cooking.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'It is safe if fully cooked',
      resultBody:
        'USDA specifically says eggs that crack during hard cooking are safe. Some white may escape and the egg may look uneven, but that is a quality issue.',
      recommendedAction:
        'Finish hard-cooking the egg. Cool and refrigerate it promptly if you are not eating it immediately.',
    },
    {
      slug: 'leaking-in-carton',
      label: 'Raw egg is leaking into the carton',
      shortDescription: 'The membrane has broken, or raw white or yolk is visible outside the shell.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Throw the egg away',
      resultBody:
        'The contents have been directly exposed, and the spill can spread raw egg to hands, packaging, refrigerator surfaces, and nearby food.',
      recommendedAction:
        'Discard the leaking egg and contaminated disposable packaging. Wash your hands and clean contacted surfaces and utensils with hot, soapy water.',
    },
    {
      slug: 'frozen-shell-cracked',
      label: 'The egg froze and its shell cracked',
      shortDescription: 'An egg accidentally froze in its shell and split as the contents expanded.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Discard the cracked frozen egg',
      resultBody: 'FoodSafety.gov advises throwing away accidentally frozen shell eggs if the shell is broken.',
      recommendedAction:
        'Keep intact frozen eggs frozen until you can thaw them in the refrigerator, but discard every egg whose shell cracked.',
    },
    {
      slug: 'raw-or-undercooked-recipe',
      label: 'You planned to use it raw or leave the yolk runny',
      shortDescription:
        'The egg is intended for dressing, mayonnaise, mousse, eggnog, raw batter, or another lightly cooked dish.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Use a pasteurized egg instead',
      resultBody:
        'Thorough cooking is part of the guidance for a freshly salvaged cracked egg. FDA recommends pasteurized shell eggs or pasteurized egg products for recipes served raw or undercooked.',
      recommendedAction:
        'Discard an egg with a pre-existing or unknown crack. For the recipe, use a pasteurized egg or pasteurized egg product.',
    },
    {
      slug: 'off-odor-or-appearance',
      label: 'The egg smells wrong or looks unusual',
      shortDescription:
        'The contents have an unpleasant odor, mold, or an abnormal pink or iridescent appearance.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Discard it immediately',
      resultBody:
        'An unpleasant odor or unusual appearance is a separate reason to discard an egg, regardless of when the crack occurred.',
      recommendedAction:
        'Do not taste it. Throw it away and wash the bowl, utensils, hands, and surfaces that contacted the raw egg.',
    },
    {
      slug: 'higher-risk-person',
      label: 'The egg would be served to someone at higher risk',
      shortDescription:
        'The meal is for a young child, an older adult, a pregnant person, or someone with a weakened immune system.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not use an egg with an uncertain crack',
      resultBody:
        'These groups are more likely to become seriously ill from foodborne infection. A pre-existing crack or uncertain handling history is not worth keeping.',
      recommendedAction:
        'Use a clean, intact, refrigerated egg and cook it thoroughly. Use pasteurized eggs or egg products if the dish will remain raw or lightly cooked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The shell barrier is broken',
      description: 'A crack gives bacteria on the shell surface a possible route to the white and yolk.',
      severity: 'info',
      chainLabel: 'Crack → possible entry',
    },
    {
      stageLabel: 'IF IT REMAINS IN THE SHELL',
      title: 'Contamination can reach the contents',
      description:
        'A cracked egg left in storage has an unknown exposure history, especially when nobody knows when the crack occurred.',
      severity: 'caution',
      chainLabel: 'Exposure → contamination',
    },
    {
      stageLabel: 'DURING PREPARATION',
      title: 'Raw egg can spread around the kitchen',
      description:
        'Leaking egg can contaminate hands, utensils, counters, refrigerator shelves, and ready-to-eat food.',
      severity: 'caution',
      chainLabel: 'Leak → cross-contamination',
    },
    {
      stageLabel: 'IF EATEN RAW OR UNDERCOOKED',
      title: 'Harmful bacteria may survive',
      description:
        'Runny or raw preparation may not provide the heat needed to destroy Salmonella that could be present.',
      severity: 'warning',
      chainLabel: 'Undercooking → surviving bacteria',
    },
    {
      stageLabel: 'IF FOODBORNE ILLNESS BECOMES SEVERE',
      title: 'Dehydration or infection outside the intestines can occur',
      description:
        'Salmonella commonly causes diarrhea and stomach cramps. Severe illness may require medical care and can be more dangerous for higher-risk people.',
      severity: 'danger',
      chainLabel: 'Illness → serious complications',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The egg was already cracked at the store',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Choose another carton or return the damaged eggs.',
    },
    {
      situation: 'You found a crack in the refrigerator and do not know when it happened',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the egg rather than relying on smell, appearance, or extra cooking.',
    },
    {
      situation: 'You watched the egg crack on the way home or in your kitchen',
      ignoreAnswer: 'Briefly, while you transfer it',
      severity: 'caution',
      whatToDo:
        'Break it into a clean container immediately, cover tightly, refrigerate, and use within two days.',
    },
    {
      situation: 'A freshly cracked egg is already in a clean covered container',
      ignoreAnswer: 'Only until used within two days',
      severity: 'caution',
      whatToDo: 'Keep it refrigerated and use it only in a thoroughly cooked preparation.',
    },
    {
      situation: 'The intact egg cracked as you began cooking it',
      ignoreAnswer: 'Yes, if thoroughly cooked',
      severity: 'info',
      whatToDo: 'Use it immediately if its odor and appearance are normal, and cook it through.',
    },
    {
      situation: 'The shell cracked during hard-boiling',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Finish cooking it. Refrigerate promptly if it will not be eaten immediately.',
    },
    {
      situation: 'The recipe will leave the egg raw or runny',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Use pasteurized shell eggs or pasteurized egg products instead.',
    },
    {
      situation: 'The shell cracked after the egg accidentally froze',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the egg. Do not thaw and use an accidentally frozen egg with a broken shell.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Establish when the crack happened',
      body:
        'If the egg was already damaged when you noticed it, treat the timing as unknown and discard it. Salvage guidance applies only when you saw the egg crack and can handle it immediately.',
    },
    {
      title: 'Transfer a newly cracked egg',
      body:
        'Break the egg completely out of the damaged shell into a clean food-safe container. Cover tightly, refrigerate, label it, and use it within two days.',
    },
    {
      title: 'Clean any raw egg spill',
      body:
        'Wash your hands, utensils, and contacted surfaces with hot, soapy water. Remove contaminated disposable packaging rather than returning a leaking egg to the refrigerator.',
    },
    {
      title: 'Cook it safely',
      body:
        'Cook shell eggs until the white and yolk are firm. Cook dishes such as quiche or frittata to 160°F. Use pasteurized eggs for food that will be raw or undercooked.',
    },
    {
      title: 'Check the rest of the carton and refrigerator',
      body:
        'Inspect the remaining shells for damage without washing them. Keep intact eggs in their carton in the main refrigerator compartment at 40°F or below.',
      destinationProblemSlug: 'fridge-not-cold-enough',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'You cannot tell when the shell cracked',
      description:
        'An unknown crack may have existed during shipping, display, transport, or refrigerator storage. Discard the egg.',
      severity: 'warning',
    },
    {
      title: 'White or yolk is leaking from the shell',
      description:
        'The protective membranes have failed and raw egg can spread contamination to the carton and surrounding surfaces.',
      severity: 'warning',
    },
    {
      title: 'The shell is dirty or the contents smell or look abnormal',
      description:
        'Do not taste an egg with an unpleasant odor, mold, or an unusual pink or iridescent appearance.',
      severity: 'warning',
    },
    {
      title: 'The egg cracked after freezing',
      description: 'FoodSafety.gov says to toss accidentally frozen eggs with broken shells.',
      severity: 'warning',
    },
    {
      title: 'The recipe will not cook the egg thoroughly',
      description: 'Use pasteurized shell eggs or pasteurized egg products for food served raw or undercooked.',
      severity: 'warning',
    },
    {
      title: 'The egg is intended for someone at higher risk',
      description:
        'Young children, older adults, pregnant people, and people with weakened immune systems are more vulnerable to serious foodborne illness.',
      severity: 'caution',
    },
    {
      title: 'Severe symptoms develop after eating eggs',
      description:
        'Seek medical advice for bloody diarrhea, fever above 102°F, persistent diarrhea or vomiting, inability to keep liquids down, or signs of dehydration.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a hairline crack safe?',
      answer:
        'Not if you do not know when it formed. A fine crack still breaks the shell barrier, so discard an egg with an unknown hairline crack.',
    },
    {
      question: 'What should I do if an egg cracks on the way home?',
      answer:
        'Break it into a clean container immediately, cover it tightly, refrigerate it, use it within two days, and cook it thoroughly.',
    },
    {
      question: 'Can I eat an egg that cracked while boiling?',
      answer:
        'Yes. USDA says eggs that crack during hard cooking are safe. Finish cooking the egg and refrigerate it promptly if you are saving it.',
    },
    {
      question: 'Is it safe if egg white leaked into the boiling water?',
      answer:
        'Yes, if the egg cracked during hard cooking and is cooked through. The lost white and uneven shape affect quality, not the USDA safety exception.',
    },
    {
      question: 'Can I use a cracked egg for baking?',
      answer:
        'Only if you saw it crack, handled it immediately, and will cook the recipe thoroughly. Do not use baking to rescue an egg with an old or unknown crack.',
    },
    {
      question: 'Is a cracked egg safe if it smells normal?',
      answer:
        'A normal smell does not rule out Salmonella. Smell can identify some spoiled eggs, but it cannot clear a pre-existing or unknown crack.',
    },
    {
      question: 'Should I wash a cracked egg before using it?',
      answer:
        'No. Do not wash a damaged egg. Discard an egg with an unknown crack, or transfer a newly cracked egg directly to a clean covered container.',
    },
    {
      question: 'Can the float test tell whether a cracked egg is safe?',
      answer:
        'No. Floating reflects the size of the egg’s air cell and can indicate age, but it does not reveal whether bacteria entered through a crack.',
    },
    {
      question: 'Can I tape a crack and put the egg back in the refrigerator?',
      answer:
        'No. Tape does not restore the shell’s protective barrier. If the crack just happened, remove the contents and refrigerate them in a clean covered container; otherwise discard the egg.',
    },
    {
      question: 'What if I already ate an egg with a cracked shell?',
      answer:
        'Do not panic. Discard any remaining suspect egg and watch for diarrhea, stomach cramps, fever, nausea, or vomiting. Seek medical care for severe symptoms or dehydration.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'USDA Food Safety and Inspection Service',
      title: 'Shell Eggs from Farm to Table',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/eggs/shell-eggs-farm-table',
      sourceType: 'government',
      notes:
        'Advises consumers to buy clean, uncracked refrigerated eggs, never purchase cracked eggs, thoroughly cook eggs, and considers eggs that crack during hard cooking safe.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'What You Need to Know About Egg Safety',
      url: 'https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety',
      sourceType: 'government',
      notes:
        'Covers Salmonella risk, buying uncracked eggs, refrigeration at 40°F or below, thorough cooking, kitchen hygiene, higher-risk groups, and pasteurized eggs for raw recipes.',
    },
    {
      publisher: 'U.S. Government Publishing Office and USDA Food Safety and Inspection Service',
      title: 'Shell Eggs from Farm to Table',
      url: 'https://www.govinfo.gov/content/pkg/GOVPUB-A110-PURL-gpo19093/pdf/GOVPUB-A110-PURL-gpo19093.pdf',
      sourceType: 'government',
      notes:
        'States that an egg cracked on the way home may be transferred to a clean covered container, refrigerated, and used within two days; also addresses cooking, odors, and unusual appearance.',
    },
    {
      publisher: 'FoodSafety.gov',
      title: 'Cold Food Storage Chart',
      url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts',
      sourceType: 'government',
      notes:
        'Provides refrigerated egg-storage guidance and says to toss accidentally frozen eggs if their shells are broken.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Symptoms of Salmonella Infection',
      url: 'https://www.cdc.gov/salmonella/signs-symptoms/index.html',
      sourceType: 'government',
      notes:
        'Lists common Salmonella symptoms and advises medical care for bloody stool, fever above 102°F, persistent vomiting or diarrhea, and dehydration.',
    },
    {
      publisher: 'Egg Safety Center',
      title: 'Is It Safe to Use Eggs That Have Cracks?',
      url: 'https://eggsafety.org/faq/is-it-safe-to-use-eggs-that-have-cracks/',
      sourceType: 'industry',
      notes:
        'Advises against purchasing cracked eggs and repeats the clean-container, refrigeration, two-day use, and thorough-cooking guidance for eggs cracked on the way home.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Food thermometer',
      description: 'Confirms that mixed egg dishes have reached 160°F instead of relying on appearance alone.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Clean covered food container',
      description:
        'Holds the contents of an egg that you watched crack and allows safe short-term refrigerated storage.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Refrigerator thermometer',
      description: 'Shows whether eggs are being stored at 40°F or below in the main refrigerator compartment.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'USDA Meat and Poultry Hotline or Ask USDA',
      description:
        'Provides case-specific food-safety guidance when the timing, temperature, or handling history is unclear.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'leftovers-left-out',
      anchorText: 'Can I eat eggs that were left out too long?',
      relationshipType: 'sibling',
    },
    {
      slug: 'refrigerator-door-left-open-overnight',
      anchorText: 'What if the refrigerator door was left open overnight?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'fridge-not-cold-enough',
      anchorText: 'What if the refrigerator is not cold enough?',
      relationshipType: 'cause',
    },
  ],
};
