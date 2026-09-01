import type { ProblemSeed } from '../types';

export const sproutsOnAPotato: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'pantry',
  slug: 'sprouts-on-a-potato',
  canonicalPath: '/food-kitchen/food-storage/pantry/sprouts-on-a-potato/',
  name: 'Sprouts on a Potato',
  eyebrow: 'Food & Kitchen · Food Storage · Pantry',

  h1: 'Can I Ignore Sprouts on a Potato?',
  seoTitle: 'Sprouted Potatoes: When to Trim Them and When to Throw Them Out',
  metaDescription:
    'A firm potato with a few sprouts may be usable after careful trimming. Learn when greening, shriveling, bitterness, or heavy sprouting means discard it.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I eat it?',
  canIUseItLabel: 'Only if it is firm, not green, and fully trimmed',

  shortAnswer:
    'Probably not. Never eat the sprouts themselves. A firm potato with only a few small sprouts and no greening can usually be used after cutting out the sprouts and eyes generously and peeling it; discard potatoes that are strongly sprouted, soft, shriveled, deeply green, rotten, or bitter.',

  whyItMattersHeading: 'Sprouting Can Be a Food-Safety Issue',
  whyItMatters: [
    'Potatoes naturally contain glycoalkaloids, mainly solanine and chaconine. The highest concentrations occur in sprouts, eyes, skin, green areas, and damaged tissue. Elevated exposure can cause a bitter or burning sensation, nausea, vomiting, abdominal pain, and diarrhea. Larger exposures can cause neurological and cardiovascular effects.',
    'Cooking does not reliably remove these toxins. Condition matters more than the cooking method: a firm, non-green potato with minor sprouting can be salvaged by careful trimming, while strong sprouting, shriveling, deep greening, or bitterness means the whole potato should go.',
  ].join('\n\n'),

  redFlagsHeading: 'Throw the Potato Away If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Sprout removal, greening, discard signs, cooking limits, symptoms, and storage were checked against U.S., Canadian, German, poison-center, and university guidance.',
  disclaimer:
    'This is general food-safety guidance. For a suspected exposure, contact Poison Control at 1-800-222-1222; call 911 for serious breathing, neurological, or consciousness changes.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'few-small-sprouts-firm-potato',
      label: 'A few small sprouts, but the potato is firm and not green',
      shortDescription: 'The sprouts are limited to a few eyes, and the potato has normal color and texture.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Usable after careful trimming',
      resultBody:
        'Potatoes that remain firm and are not green can generally be eaten after every sprout and the surrounding eye tissue are removed. Peeling further reduces glycoalkaloids concentrated near the surface.',
      recommendedAction:
        'Cut out each sprout and eye generously, peel the potato, and inspect the flesh. Use it only if the remaining potato is firm, normally colored, and free of rot.',
    },
    {
      slug: 'sprouts-fully-removed',
      label: 'The sprouts and eyes were fully removed',
      shortDescription:
        'The peeled potato is firm, normally colored, and has clean flesh around every trimmed eye.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The prepared potato is generally safe to cook',
      resultBody:
        'MedlinePlus states that potatoes that are not green and have had their sprouts removed are safe to eat. No special cooking method is needed once the questionable tissue has been removed.',
      recommendedAction:
        'Cook it normally. Do not use it if you notice bitterness, a burning sensation, hidden green flesh, decay, or additional sprouted areas during preparation.',
    },
    {
      slug: 'strongly-sprouted-potato',
      label: 'The potato has many or well-developed sprouts',
      shortDescription: 'Sprouts cover several eyes or have grown substantially from the potato.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Discard the whole potato',
      resultBody:
        'Strong sprouting is a discard sign in risk-assessment guidance. Glycoalkaloids are highly concentrated in the sprouts and eyes, and extensive sprouting makes simple surface trimming a poor choice.',
      recommendedAction:
        'Do not eat the sprouts or try to salvage a heavily sprouted potato. Put the whole potato in household trash or compost where children and animals cannot eat it.',
    },
    {
      slug: 'sprouted-and-shriveled',
      label: 'The sprouted potato is soft, wrinkled, or shriveled',
      shortDescription: 'It has lost firmness and moisture while feeding new sprout growth.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'It is no longer a good salvage candidate',
      resultBody:
        'Shriveling combined with sprouting indicates an old, deteriorated potato. Government and university guidance advises discarding dried-up, strongly sprouting, or shriveled potatoes rather than relying on trimming.',
      recommendedAction:
        'Discard it. Do not try to restore it by soaking, and do not assume cooking will solve the glycoalkaloid concern.',
    },
    {
      slug: 'small-superficial-green-area',
      label: 'A firm sprouted potato has a small green area on the surface',
      shortDescription: 'Greening appears limited, and the flesh beneath it is not green after trimming.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Salvage is possible only if all green tissue is removed',
      resultBody:
        'The green pigment itself is not the toxin, but greening can signal increased glycoalkaloids. Limited surface greening may be removed generously along with the sprouts, eyes, and peel.',
      recommendedAction:
        'Peel it and cut away all green and sprouted tissue generously. Discard the potato if green color remains below the removed surface or covers a substantial area.',
    },
    {
      slug: 'extensive-or-deep-greening',
      label: 'The potato is widely green or green beneath the skin',
      shortDescription: 'Greening remains after peeling or extends into the flesh.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Throw it away',
      resultBody:
        'MedlinePlus advises never eating potatoes that are green below the skin, and other government guidance treats pronounced greening as unsuitable for consumption. Removing the sprouts alone does not address the rest of the potato.',
      recommendedAction:
        'Discard the entire potato. Do not use it for soup, fries, mashed potatoes, or any other dish.',
    },
    {
      slug: 'bitter-or-burning-potato',
      label: 'The cooked potato tastes bitter or burns the mouth',
      shortDescription: 'There is an unusual bitterness, harshness, or burning sensation while eating.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop eating it immediately',
      resultBody:
        'Bitterness or burning can accompany elevated glycoalkaloid levels. Cooking does not make a questionable potato safe, and seasoning or mixing it with other food only hides the warning.',
      recommendedAction:
        'Spit it out, stop serving the dish, and discard it. Do not keep tasting it to decide whether it is safe.',
    },
    {
      slug: 'already-ate-no-symptoms',
      label: 'Someone already ate a trimmed or sprouted potato but feels normal',
      shortDescription: 'There are no digestive, neurological, breathing, or vision symptoms.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Watch for symptoms and get case-specific advice if concerned',
      resultBody:
        'Eating a small amount does not mean poisoning will occur, and risk depends on the potato and the amount consumed. Appearance cannot reveal the exact glycoalkaloid dose.',
      recommendedAction:
        'Do not induce vomiting. If the potato was deeply green, heavily sprouted, bitter, or eaten in a large amount, call Poison Control at 1-800-222-1222 for guidance.',
    },
    {
      slug: 'digestive-symptoms-after-eating',
      label: 'Nausea, vomiting, diarrhea, or abdominal pain develops after eating',
      shortDescription: 'Digestive symptoms follow a meal containing green or sprouted potatoes.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Contact Poison Control now',
      resultBody:
        'These are recognized symptoms of potato glycoalkaloid poisoning. Similar symptoms have many possible causes, so use the meal history when seeking advice rather than trying to diagnose the cause yourself.',
      recommendedAction:
        'Call Poison Control at 1-800-222-1222. Seek prompt medical care if symptoms are severe, persistent, or prevent the person from keeping fluids down.',
    },
    {
      slug: 'neurological-or-breathing-symptoms',
      label: 'Confusion, weakness, vision changes, faintness, or breathing trouble develops',
      shortDescription: 'Serious symptoms occur after suspected exposure to green potatoes or potato sprouts.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Get emergency medical help',
      resultBody:
        'Severe glycoalkaloid poisoning can affect the nervous, respiratory, and cardiovascular systems. These symptoms should not be watched at home.',
      recommendedAction:
        'Call 911 or obtain emergency medical care now. Do not induce vomiting unless Poison Control or a medical professional specifically instructs you to do so.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Glycoalkaloids are concentrated around the new growth',
      description:
        'Sprouts and eyes contain higher concentrations of the potato’s natural glycoalkaloids than the inner white flesh. Sprouting is therefore more than a cosmetic quality change.',
      severity: 'caution',
      chainLabel: 'Sprouts and eyes',
    },
    {
      stageLabel: 'IF SPROUTING OR GREENING CONTINUES',
      title: 'More of the potato becomes questionable',
      description:
        'Further sprouting, light exposure, damage, and deterioration can be associated with increased glycoalkaloid formation and make the potato harder to salvage safely.',
      severity: 'warning',
      chainLabel: 'Wider affected area',
    },
    {
      stageLabel: 'IF QUESTIONABLE TISSUE IS EATEN',
      title: 'Digestive irritation or poisoning can occur',
      description:
        'Elevated glycoalkaloid exposure can cause bitterness, burning in the mouth, nausea, vomiting, abdominal pain, and diarrhea.',
      severity: 'warning',
      chainLabel: 'Gastrointestinal symptoms',
    },
    {
      stageLabel: 'WITH A MORE SERIOUS EXPOSURE',
      title: 'Nervous-system and cardiovascular effects are possible',
      description:
        'Reported severe effects include confusion, weakness, disturbed vision, impaired consciousness, breathing problems, and cardiovascular disturbance. Fatal poisoning is rare but has been reported.',
      severity: 'danger',
      chainLabel: 'Systemic poisoning',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A firm potato with only a few sprouts and no green color',
      ignoreAnswer: 'Briefly—until you prepare it',
      severity: 'caution',
      whatToDo:
        'Remove every sprout and eye generously, peel the potato, and inspect the remaining flesh before cooking.',
    },
    {
      situation: 'A firm, non-green potato after complete sprout and eye removal',
      ignoreAnswer: 'Yes, after trimming',
      severity: 'info',
      whatToDo: 'Cook it normally, but stop if it tastes bitter or causes a burning sensation.',
    },
    {
      situation: 'A strongly sprouting potato',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard the whole potato instead of trying to trim every affected eye.',
    },
    {
      situation: 'A sprouted potato that is soft, wrinkled, or shriveled',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Discard it. Loss of firmness combined with sprouting makes it unsuitable for use.',
    },
    {
      situation: 'Green color remains beneath the peeled surface',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Throw away the entire potato. Do not rely on further cooking.',
    },
    {
      situation: 'The potato or dish tastes bitter or burns the mouth',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop eating and discard the food. Do not taste another piece as a test.',
    },
    {
      situation: 'Someone ate it but has no symptoms',
      ignoreAnswer: 'Only while watching for symptoms',
      severity: 'caution',
      whatToDo:
        'Do not induce vomiting. Contact Poison Control if the potato was heavily sprouted, deeply green, or bitter, or if the amount is concerning.',
    },
    {
      situation: 'Symptoms develop after eating a suspect potato',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Contact Poison Control promptly, and obtain emergency help for confusion, vision changes, faintness, severe weakness, or breathing trouble.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Inspect the entire potato in good light',
      body:
        'Look for sprouts at every eye, green skin, green flesh, bruising, rot, mold, shriveling, and soft areas. Red or russet skin can make green color harder to notice.',
    },
    {
      title: 'Remove sprouts, eyes, green areas, and the peel',
      body:
        'Cut out each sprout with the surrounding eye tissue rather than snapping off only the visible shoot. Peel the potato and remove any limited green or damaged areas generously.',
    },
    {
      title: 'Discard potatoes with multiple warning signs',
      body:
        'Throw away potatoes that are strongly sprouted, soft, dried up, rotten, widely green, or green beneath the skin. Do not save questionable pieces for another dish.',
    },
    {
      title: 'Do not use cooking as the safety fix',
      body:
        'Baking, boiling, frying, and microwaving do not significantly reduce glycoalkaloids. Decide whether to use the potato before cooking, based on its condition and what remains after trimming.',
    },
    {
      title: 'Store the remaining potatoes away from light',
      body:
        'Keep potatoes in a cool, dark, dry, ventilated place. Remove deteriorating potatoes from the batch so they are not forgotten and used later.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'It is strongly sprouting',
      description: 'Numerous or well-developed sprouts make the whole potato unsuitable for consumption.',
      severity: 'warning',
    },
    {
      title: 'Green color extends beneath the skin',
      description:
        'Deep or pronounced greening is a discard sign, not something to cover with seasoning or cooking.',
      severity: 'danger',
    },
    {
      title: 'It is soft, shriveled, or dried up',
      description: 'An old potato that has lost firmness while sprouting should not be salvaged.',
      severity: 'warning',
    },
    {
      title: 'It is rotten or moldy',
      description: 'Decay is a separate reason to discard the potato, even if sprouting appears minor.',
      severity: 'warning',
    },
    {
      title: 'It tastes bitter or causes burning',
      description: 'Stop eating immediately. These sensations can accompany elevated glycoalkaloid levels.',
      severity: 'danger',
    },
    {
      title: 'Digestive symptoms begin after eating',
      description:
        'Nausea, vomiting, diarrhea, and abdominal pain after eating a suspect potato warrant Poison Control guidance.',
      severity: 'warning',
    },
    {
      title: 'Confusion, vision changes, severe weakness, or breathing trouble occurs',
      description: 'These can be signs of serious poisoning and require emergency medical help.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I just snap the sprouts off?',
      answer:
        'No. Remove the whole sprout and cut out the eye and surrounding tissue. Snapping off the visible shoot leaves the eye behind.',
    },
    {
      question: 'Does cooking destroy solanine and chaconine?',
      answer:
        'Not reliably. Baking, boiling, frying, and microwaving do not significantly reduce potato glycoalkaloids, so a potato that should be discarded remains unsuitable after cooking.',
    },
    {
      question: 'Is the green color itself poisonous?',
      answer:
        'The green color is chlorophyll, which is not the toxin. It matters because greening can accompany increased glycoalkaloids, and the amount cannot be judged from color alone.',
    },
    {
      question: 'Can I eat the potato peel after removing sprouts?',
      answer:
        'Peeling reduces glycoalkaloids concentrated near the surface. Eating the skin is a better choice only with fresh, firm, undamaged, non-green potatoes.',
    },
    {
      question: 'Can I eat a sprouted potato if I am making mashed potatoes?',
      answer:
        'The recipe does not change the decision. Use only a firm, non-green potato after complete removal of sprouts, eyes, and peel; discard strongly sprouted or deteriorated potatoes.',
    },
    {
      question: 'What if a green potato turns normal-colored after being stored in the dark?',
      answer:
        'Do not assume the glycoalkaloid level has fallen because the green color fades. Inspect and discard it according to the original extent of greening.',
    },
    {
      question: 'Are green areas always easy to see?',
      answer:
        'No. Red and russet skins can camouflage greening. Peel questionable potatoes and inspect the flesh under bright light.',
    },
    {
      question: 'Should I serve a trimmed sprouted potato to a young child?',
      answer:
        'Use a fresh, undamaged, peeled potato instead. Risk-assessment guidance specifically recommends peeled potatoes for small children, and a sprouted potato is an avoidable choice.',
    },
    {
      question: 'Can I eat the potato sprouts themselves?',
      answer: 'No. Sprouts have especially high glycoalkaloid concentrations and should always be discarded.',
    },
    {
      question: 'What should I do if I already ate a green or heavily sprouted potato?',
      answer:
        'Do not induce vomiting. Call Poison Control at 1-800-222-1222 for advice, especially if the potato was bitter or symptoms develop. Call 911 for serious breathing, neurological, or consciousness changes.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. National Library of Medicine',
      title: 'Potato plant poisoning - green tubers and sprouts',
      url: 'https://medlineplus.gov/ency/article/002875.htm',
      sourceType: 'government',
      notes:
        'States that sprouts should be discarded, non-green potatoes are safe after sprout removal, green flesh should not be eaten, and suspected poisoning warrants Poison Control or emergency guidance.',
    },
    {
      publisher: 'Health Canada',
      title: 'Glycoalkaloids in Foods',
      url: 'https://www.canada.ca/en/health-canada/services/food-nutrition/reports-publications/food-safety/glycoalkaloids-foods.html',
      sourceType: 'government',
      notes:
        'Covers glycoalkaloid symptoms, limited effects of cooking, removal of sprouts, eyes, green and damaged areas, peeling, severe-case disposal, and the warning signs of bitterness or burning.',
    },
    {
      publisher: 'German Federal Institute for Risk Assessment',
      title: 'Frequently asked questions about solanine (glycoalkaloids) in potatoes',
      url: 'https://www.bfr.bund.de/cm/349/frequently-asked-questions-about-solanine-glycoalkaloids-in-potatoes.pdf',
      sourceType: 'government',
      notes:
        'Identifies high concentrations in sprouts and eyes, describes poisoning effects, and advises discarding old, dried-up, green, or strongly sprouting potatoes while removing eyes and green parts generously.',
    },
    {
      publisher: 'Canadian Food Inspection Agency',
      title: 'Natural toxins in fresh fruit and vegetables',
      url: 'https://inspection.canada.ca/en/food-safety-consumers/fact-sheets/specific-products-and-risks/fruits-and-vegetables/natural-toxins?wbdisable=true',
      sourceType: 'government',
      notes:
        'Advises avoiding potatoes showing sprouting, greening, physical damage, or rot; notes that cooking does not destroy glycoalkaloids and that red or russet skin may hide greening.',
    },
    {
      publisher: 'Iowa State University Extension and Outreach',
      title: 'Spouting or Greening Potatoes . . . Keep or Toss?',
      url: 'https://blogs.extension.iastate.edu/answerline/2024/04/02/spouting-or-greening-potatoes-keep-or-toss/',
      sourceType: 'academic',
      notes:
        'Distinguishes firm potatoes with minor sprouts that can be trimmed from strongly sprouted, shriveled, or deeply green potatoes that should be discarded.',
    },
    {
      publisher: 'National Capital Poison Center',
      title: 'Are sprouted potatoes safe to eat?',
      url: 'https://www.poison.org/articles/are-green-potatoes-safe-to-eat-191',
      sourceType: 'other',
      notes:
        'Explains solanine and chaconine exposure, their concentration in sprouts, eyes and green skin, limited removal through cooking, possible symptoms, storage practices, and when to contact Poison Control.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Paring knife and vegetable peeler',
      description:
        'Useful for removing sprouts, eyes, peel, and limited surface greening while inspecting the flesh beneath.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Opaque, ventilated potato storage',
      description:
        'A dark, breathable container helps limit light exposure while allowing air circulation around stored potatoes.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Poison Control',
      description:
        'Provides free, confidential, case-specific guidance after a suspected exposure at 1-800-222-1222 in the United States.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],
};
