import type { ProblemSeed } from '../types';

export const dogLimping: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-mobility',
  slug: 'dog-limping',
  canonicalPath: '/pets/dogs/mobility/dog-limping/',
  name: 'Dog limping',
  eyebrow: 'Pets · Dogs · Mobility',

  h1: 'Can I Ignore My Dog Limping?',
  seoTitle: 'Dog Limping: When to Watch and When to See a Vet',
  metaDescription:
    'A brief limp that fully resolves may be watched. Persistent, recurring, worsening, swollen, or non-weight-bearing limping needs veterinary care.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can my dog keep exercising?',
  canIUseItLabel: 'No—restrict activity for now',

  shortAnswer:
    'Usually not. A brief, mild limp that fully disappears after rest can be watched, but a limp that persists, returns, worsens, or prevents weight-bearing needs veterinary attention. Dogs do not have to whine to be in pain.',

  whyItMattersHeading: 'Why Does a Dog Limp Matter?',
  whyItMatters: [
    'Limping is a sign of pain, weakness, or impaired function rather than a diagnosis. The cause may be in a paw, nail, muscle, tendon, ligament, joint, bone, nerve, or spine. Some causes are minor, but appearance alone cannot reliably distinguish a strain from a fracture, unstable joint, infection, or neurologic problem.',
    'Normal eating, playing, and quiet behavior do not rule out pain. Dogs often change how they bear weight, rise, sit, or move instead of crying. The pattern, duration, weight-bearing ability, swelling, recent trauma, and whole-dog symptoms are more useful than whether your dog whines.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help Now If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Assessed against FDA medication guidance and veterinary sources on canine lameness, pain behavior, orthopedic injury, joint infection, and emergency triage.',
  disclaimer:
    'General triage guidance only. Limping has many possible causes and cannot be diagnosed from gait alone; seek veterinary care whenever your dog appears severely painful or unsafe to move.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'resolved-after-rest',
      label: 'A mild limp appeared after a walk and fully resolved',
      shortDescription:
        'After rest, your dog walks normally, bears full weight, and has no swelling, wound, tenderness, weakness, or behavior change.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Brief monitoring is reasonable',
      resultBody:
        'A mild episode that resolves quickly may not require a veterinary visit. The reassurance depends on a complete return to normal, not simply less limping.',
      recommendedAction:
        'Keep activity easy for the rest of the day. Watch closely during rising, turning, and walking, and contact your veterinarian if the limp returns.',
    },
    {
      slug: 'loose-paw-debris-removed',
      label: 'The limp stopped after loose debris was removed from the paw',
      shortDescription:
        'A small, easily reached object was resting between the toes, came out without digging, and left no puncture, bleeding, swelling, or continued pain.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Watch the paw for a returning problem',
      resultBody:
        'Superficial debris can cause temporary discomfort. Continued limping may mean there is a puncture, retained material, nail injury, or problem higher in the limb.',
      recommendedAction:
        'Rinse away surface dirt, prevent licking, and monitor the gait and paw. Do not probe into the skin or pull on anything deeply embedded.',
    },
    {
      slug: 'known-condition-unchanged',
      label: 'This is an unchanged pattern under an existing veterinary plan',
      shortDescription:
        'Your dog has a diagnosed mobility condition, the current limp matches the established pattern, and no new swelling, weakness, trauma, or illness signs are present.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Follow the existing care plan',
      resultBody:
        'A familiar pattern may be managed according to the plan already established for your dog. A change in severity, frequency, limb, or function deserves reassessment.',
      recommendedAction:
        'Use only prescribed treatment as directed, follow activity limits, and contact the managing clinic if the limp is more pronounced or no longer responds as expected.',
    },
    {
      slug: 'no-weight-bearing-but-standing',
      label: 'My dog will not put weight on the leg but can stand',
      shortDescription:
        'Your dog holds one leg up or walks on three legs but remains able to stand and move without assistance.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Arrange urgent veterinary assessment',
      resultBody:
        'Complete refusal to bear weight can occur with a significant paw injury, torn ligament, dislocation, fracture, or other painful condition. Being quiet or willing to eat does not make this minor.',
      recommendedAction:
        'Restrict movement, prevent stairs and jumping, and contact your veterinarian or an urgent-care clinic now for instructions. Carry your dog when practical.',
    },
    {
      slug: 'unable-to-stand-or-walk',
      label: 'My dog cannot stand or walk without help',
      shortDescription:
        'The dog collapses, cannot rise, cannot support their body, or requires assistance to take steps.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Go to an emergency veterinary hospital',
      resultBody:
        'Inability to stand or walk can indicate a severe orthopedic, neurologic, traumatic, or systemic problem and meets emergency-care criteria.',
      recommendedAction:
        'Minimize movement and arrange immediate transport. Use a rigid surface or blanket as a stretcher if needed, and call the emergency hospital while leaving.',
    },
    {
      slug: 'major-trauma-or-deformity',
      label: 'The limp followed major trauma or the limb looks deformed',
      shortDescription:
        'Your dog was hit, fell badly, was attacked, or has a limb at an abnormal angle, an exposed wound, or an obvious fracture.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as an emergency',
      resultBody:
        'Major trauma may cause fractures, dislocations, internal injuries, shock, or damage that is not visible from the outside. Manipulating a deformed limb can worsen pain and injury.',
      recommendedAction:
        'Go to an emergency veterinary hospital. Keep your dog still, avoid straightening or splinting the limb yourself, and use caution because painful dogs may bite.',
    },
    {
      slug: 'hot-swollen-or-wounded',
      label: 'The limb or joint is hot, swollen, wounded, or draining',
      shortDescription:
        'There is marked swelling, heat, redness, a puncture, discharge, an abscess-like lump, or significant tenderness.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Inflammation or infection needs prompt care',
      resultBody:
        'Swelling and heat may accompany trauma, joint injury, or infection. Joint infection can also cause severe pain, stiffness, fever, low energy, and appetite loss.',
      recommendedAction:
        'Contact a veterinarian promptly. Prevent licking, limit movement, and do not squeeze a lump, probe a puncture, or repeatedly flex the painful area.',
    },
    {
      slug: 'shifting-limp-with-illness',
      label: 'The limp shifts between legs or comes with illness signs',
      shortDescription:
        'Different legs seem painful at different times, or the limp occurs with fever, poor appetite, unusual tiredness, stiffness, or swollen joints.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This may involve more than one limb',
      resultBody:
        'Shifting lameness and whole-body symptoms can occur with infectious, inflammatory, or immune-mediated joint disease rather than an isolated strain.',
      recommendedAction:
        'Arrange prompt veterinary assessment. Report tick exposure, travel, wounds, recent procedures, medications, appetite changes, and which legs have been affected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The gait change signals pain, weakness, or dysfunction',
      description:
        'A dog limps by shortening a stride, shifting weight, stiffening, or avoiding a limb. The absence of crying does not cancel that signal.',
      severity: 'caution',
      chainLabel: 'Altered movement',
    },
    {
      stageLabel: 'IF NORMAL ACTIVITY CONTINUES',
      title: 'A painful or unstable area keeps being loaded',
      description:
        'Running, jumping, rough play, and stairs can place additional stress on an injured paw, muscle, ligament, joint, or bone before the cause is known.',
      severity: 'warning',
      chainLabel: 'Continued loading',
    },
    {
      stageLabel: 'IF THE LIMP PERSISTS',
      title: 'An underlying condition may remain untreated',
      description:
        'Persistent lameness can accompany ligament injury, arthritis, developmental disease, foot infection, spinal disease, or another problem that requires an examination to identify.',
      severity: 'warning',
      chainLabel: 'Missed diagnosis',
    },
    {
      stageLabel: 'IF JOINT DISEASE OR INSTABILITY CONTINUES',
      title: 'Mobility and comfort can decline',
      description:
        'Some orthopedic conditions can contribute to joint damage, muscle loss, stiffness, reduced range of motion, and recurring pain when they are not adequately managed.',
      severity: 'warning',
      chainLabel: 'Reduced function',
    },
    {
      stageLabel: 'EMERGENCY PATTERN',
      title: 'Severe trauma or loss of mobility can threaten more than the limb',
      description:
        'An obvious fracture, major trauma, or inability to stand may involve neurologic injury, internal trauma, shock, or severe pain and requires emergency assessment.',
      severity: 'danger',
      chainLabel: 'Emergency care',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The limp appeared after exercise and has completely disappeared',
      ignoreAnswer: 'Yes, briefly',
      severity: 'info',
      whatToDo:
        'Keep activity easy and confirm that your dog continues to bear weight normally. Seek advice if the limp returns, swelling appears, or behavior changes.',
    },
    {
      situation: 'My dog is eating, playing, and not whining but still limping',
      ignoreAnswer: 'No, not if it persists',
      severity: 'caution',
      whatToDo:
        'Restrict running, jumping, and rough play. Quiet behavior and a normal appetite do not rule out pain; contact your veterinarian if the gait does not quickly return to normal.',
    },
    {
      situation: 'The limp is mild and my dog still bears weight',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Use short leash trips only and watch closely. Contact your veterinarian if the limp remains the next day, repeatedly returns, or becomes more pronounced.',
    },
    {
      situation: 'The limp has continued for several days',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Schedule a veterinary examination rather than extending home monitoring. Bring a video and describe when the limp is most visible.',
    },
    {
      situation: 'My dog will not put the foot down but can stand and walk',
      ignoreAnswer: 'No—urgent',
      severity: 'warning',
      whatToDo:
        'Restrict movement and contact a veterinarian or urgent-care clinic now. Avoid testing the leg by making your dog walk repeatedly.',
    },
    {
      situation: 'The area is swollen, hot, wounded, or draining',
      ignoreAnswer: 'No—prompt care',
      severity: 'warning',
      whatToDo:
        'Prevent licking, limit movement, and contact a veterinarian promptly. Fever, poor appetite, or marked lethargy increases the concern for infection or systemic illness.',
    },
    {
      situation: 'The limp keeps returning after rest, stairs, jumping, or exercise',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Arrange an examination. Intermittent lameness can still reflect joint, ligament, tendon, developmental, or arthritic disease.',
    },
    {
      situation: 'There was major trauma, an obvious fracture, or my dog cannot stand',
      ignoreAnswer: 'No—emergency',
      severity: 'danger',
      whatToDo:
        'Minimize movement and go to an emergency veterinary hospital immediately. Do not try to straighten or repeatedly examine the limb.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Restrict activity',
      body:
        'Stop running, jumping, stairs, fetch, and rough play. Use a leash for necessary bathroom trips and provide a quiet resting area with secure footing.',
    },
    {
      title: 'Step 2: Look without forcing the leg',
      body:
        'If your dog is calm and comfortable, check the pads, nails, and spaces between the toes for surface debris, cuts, redness, or swelling. Stop if your dog resists, cries, growls, or tries to bite.',
    },
    {
      title: 'Step 3: Record the limp',
      body:
        'Take a short video of your dog rising, walking straight, and turning on a nonslip surface. Note which leg is affected and whether the limp is worse after rest or activity.',
    },
    {
      title: 'Step 4: Give the clinic useful history',
      body:
        'Report when the limp began, whether it is improving or worsening, recent exercise or trauma, swelling, wounds, appetite and energy changes, and any difficulty rising, jumping, or using stairs.',
    },
    {
      title: 'Step 5: Do not improvise pain medication',
      body:
        'Do not give ibuprofen, naproxen, acetaminophen, aspirin, another pet’s prescription, or leftover veterinary medicine unless a veterinarian specifically directs you to use it for this dog.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Your dog cannot stand or walk without assistance',
      description:
        'Loss of basic mobility may indicate a severe orthopedic, neurologic, traumatic, or systemic problem.',
      severity: 'danger',
    },
    {
      title: 'The limp followed major trauma',
      description:
        'A collision, serious fall, animal attack, or crushing injury can cause fractures and internal injuries even when external damage looks limited.',
      severity: 'danger',
    },
    {
      title: 'A bone may be broken or the limb looks deformed',
      description:
        'An abnormal angle, dangling limb, exposed bone, or severe swelling requires emergency assessment. Do not try to straighten it.',
      severity: 'danger',
    },
    {
      title: 'Your dog suddenly refuses all weight on a leg',
      description:
        'Complete non-weight-bearing can occur with a fracture, dislocation, torn ligament, severe paw injury, or another painful condition.',
      severity: 'warning',
    },
    {
      title: 'A joint or limb is hot, markedly swollen, punctured, or draining',
      description:
        'These signs can occur with significant inflammation, trauma, an abscess, or joint infection.',
      severity: 'warning',
    },
    {
      title: 'The limp comes with fever, poor appetite, or marked lethargy',
      description:
        'Whole-body symptoms or lameness that shifts between legs can indicate infectious or inflammatory disease.',
      severity: 'warning',
    },
    {
      title: 'There is neck or back pain, dragging, knuckling, or worsening weakness',
      description:
        'These signs may involve the nervous system or spine rather than an isolated leg injury and need urgent assessment.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'If my dog is not crying, does that mean the limp is not painful?',
      answer:
        'No. Dogs may show pain by shifting weight, limping, moving less, changing posture, or avoiding certain activities without whining or crying.',
    },
    {
      question: 'Can my dog be in pain while still eating and playing?',
      answer:
        'Yes. Appetite and interest in play do not rule out pain, especially when a dog is excited. Persistent altered weight-bearing still deserves attention.',
    },
    {
      question: 'Is limping after a long walk always just soreness?',
      answer:
        'No. A mild limp that fully resolves may reflect temporary soreness, but a recurring or persistent limp can come from a paw injury, strain, ligament problem, joint disease, or another cause.',
    },
    {
      question: 'How long can I watch a mild limp?',
      answer:
        'Only while it is mild, weight-bearing, and improving with rest. Contact your veterinarian if it remains the next day, keeps returning, or worsens; do not keep waiting when it has continued for more than a day or two.',
    },
    {
      question: 'Should I keep walking my dog to see if the leg loosens up?',
      answer:
        'No. Until the cause is known, use only short leash trips for necessities and avoid exercise, jumping, stairs, and rough play.',
    },
    {
      question: 'Can I check my dog’s paw at home?',
      answer:
        'Yes, if your dog is calm and the examination is gentle. Look for surface debris, damaged nails, cuts, redness, and swelling, but do not probe wounds or manipulate a painful joint.',
    },
    {
      question: 'Can I give my dog a human pain reliever?',
      answer:
        'Not without veterinary instructions. Human pain relievers may be unsafe for dogs, interact with other medicines, damage organs, or make later treatment more complicated.',
    },
    {
      question: 'What will the veterinarian check?',
      answer:
        'The examination may include watching your dog walk, checking the paws and limbs, assessing joints and the spine, and looking for pain, swelling, instability, reduced motion, or neurologic abnormalities. Imaging or laboratory tests may follow.',
    },
    {
      question: 'Why does my dog limp more after getting up?',
      answer:
        'Stiffness or lameness after rest can occur with arthritis and cranial cruciate ligament disease, among other conditions. A recurring pattern should be evaluated rather than attributed to age alone.',
    },
    {
      question: 'Should a limping puppy be allowed to grow out of it?',
      answer:
        'Do not assume so. Young dogs can have paw injuries, strains, fractures, kneecap problems, hip or elbow dysplasia, and other developmental conditions. Recurring or persistent puppy lameness needs an examination.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Get the Facts about Pain Relievers for Pets',
      url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-about-pain-relievers-pets',
      sourceType: 'government',
      notes:
        'Warns owners not to give human or another pet’s pain medication without veterinary direction and explains the risks and prescription status of veterinary NSAIDs.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'What to Expect When Taking Your Limping Dog to the Veterinarian',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/what-to-expect-when-taking-your-limping-dog-to-the-veterinarian',
      sourceType: 'academic',
      notes:
        'Explains that limping usually indicates pain or weakness, outlines common causes and examination methods, recommends videos, and advises against waiting when lameness is persistent, severe, sudden, or worsening.',
    },
    {
      publisher: 'American Animal Hospital Association',
      title: 'Acute and Perioperative Canine Pain Assessment',
      url: 'https://www.aaha.org/resources/2022-aaha-pain-management-guidelines-for-dogs-and-cats/acute-and-perioperative-canine-pain-assessment/',
      sourceType: 'standards_body',
      notes:
        'Supports assessing canine pain through demeanor, posture, movement, appetite, behavior, palpation, and changes from the dog’s normal behavior rather than relying on vocalization alone.',
    },
    {
      publisher: 'American College of Veterinary Surgeons',
      title: 'Cranial Cruciate Ligament Disease',
      url: 'https://www.acvs.org/small-animal/cranial-cruciate-ligament-disease/',
      sourceType: 'industry',
      notes:
        'Describes variable and intermittent lameness, stiffness, swelling, pain, difficulty rising or jumping, joint instability, and the fact that persistent lameness indicates pain even without crying.',
    },
    {
      publisher: 'VCA Animal Hospitals',
      title: 'Urgent Care for Pain or Limping',
      url: 'https://vcahospitals.com/urgent-care/health-concerns/pain-or-limping',
      sourceType: 'other',
      notes:
        'Distinguishes a quickly resolving mild episode from urgent lameness and identifies obvious fracture, inability to stand or walk, and major trauma as emergency-care situations.',
    },
    {
      publisher: 'MSD Veterinary Manual',
      title: 'Septic Arthritis in Dogs and Cats',
      url: 'https://www.msdvetmanual.com/musculoskeletal-system/arthropathies-and-related-disorders-in-small-animals/septic-arthritis-in-dogs-and-cats',
      sourceType: 'academic',
      notes:
        'Lists acute joint pain, lameness, swelling, heat, reduced motion, fever, lethargy, stiffness, and appetite loss as possible signs of infectious arthritis and emphasizes early intervention.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Primary care veterinary examination',
      description:
        'Appropriate for mild weight-bearing lameness that persists, returns, or affects normal activities without emergency signs.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinary urgent-care or emergency service',
      description:
        'Use urgent care for significant pain or refusal to bear weight when the dog can still stand. Use an emergency hospital for major trauma, obvious fracture, or inability to stand.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Smartphone gait video',
      description:
        'A clear recording from the front, back, and side can show lameness that becomes less obvious when a dog is excited at the clinic.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Nonslip floor runner',
      description:
        'Secure footing can reduce slipping while activity is restricted and make necessary movement easier for a dog with mobility pain.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'dog-reluctant-to-jump',
      anchorText: 'Can I ignore my dog refusing to jump?',
      relationshipType: 'sibling',
    },
    { slug: 'dog-shaking-a-paw', anchorText: 'Can I ignore my dog shaking a paw?', relationshipType: 'cause' },
    {
      slug: 'dog-stiff-after-lying-down',
      anchorText: 'Can I ignore my dog being stiff after lying down?',
      relationshipType: 'follow_up',
    },
  ],
};
