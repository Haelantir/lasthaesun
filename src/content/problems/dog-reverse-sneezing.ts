import type { ProblemSeed } from '../types';

export const dogReverseSneezing: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'dog-breathing',
  slug: 'dog-reverse-sneezing',
  canonicalPath: '/pets/dogs/breathing/dog-reverse-sneezing/',
  name: 'Dog Reverse Sneezing',
  eyebrow: 'Pets · Dogs · Breathing',

  h1: "Can I Ignore My Dog's Reverse Sneezing?",
  seoTitle: 'Dog Reverse Sneezing: When It’s Harmless and When to Call a Vet',
  metaDescription:
    'Reverse sneezing is usually harmless, but frequent episodes, nasal discharge, coughing or real breathing trouble can mean your dog needs veterinary care.',

  aliases: ['/pets/dogs/breathing/reverse-sneezing/', '/pets/dogs/breathing/reverse-sneeze/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'safe_to_ignore',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can my dog go back to normal activity?',
  canIUseItLabel: 'Yes, once your dog is fully normal again',

  shortAnswer:
    'Usually, yes. A brief reverse-sneezing episode that stops on its own and leaves your dog completely normal before and after is usually harmless. Get veterinary help if episodes become frequent or severe, come with other respiratory signs, or look like true breathing difficulty.',

  whyItMattersHeading: 'Why Does Reverse Sneezing Look So Scary?',
  whyItMatters: [
    'Reverse sneezing is a reflex triggered by irritation around the back of the nose and throat. Instead of blasting air out like a normal sneeze, the dog rapidly pulls air inward through the nose. The neck may stretch forward, the nostrils may flare and the dog can make loud snorting or gagging-like sounds.',
    'The noise is dramatic, but most otherwise healthy dogs recover quickly and act completely normal afterward. The important part is recognizing when the pattern stops looking like ordinary reverse sneezing. Foreign material, infection, nasal disease, airway problems and other conditions can cause similar or recurring signs.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Veterinary Help If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Cornell, Merck Veterinary Manual, VCA and FDA guidance was checked for reverse sneezing, upper-airway disease, respiratory distress and emergency escalation.',
  disclaimer:
    'General pet-health triage guidance only. Reverse sneezing can resemble coughing, choking and other breathing problems, so seek veterinary care when the pattern is unclear or your dog appears distressed.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'occasional-brief-episode',
      label: 'A brief episode happens occasionally',
      shortDescription: 'Your dog suddenly snorts and inhales rapidly, then returns completely to normal.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'THIS IS USUALLY HARMLESS',
      resultBody:
        'This fits the common pattern of reverse sneezing. Most mild, sporadic episodes stop on their own and do not require treatment.',
      recommendedAction:
        'Stay calm and let the episode pass. If your dog immediately returns to normal breathing and behavior, no urgent action is usually needed.',
    },
    {
      slug: 'episodes-getting-more-frequent',
      label: 'The episodes are becoming more frequent or intense',
      shortDescription:
        "Reverse sneezing is happening noticeably more often or seems different from your dog's usual pattern.",
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'TIME TO FIND OUT WHY',
      resultBody:
        'Recurrent or more severe reverse sneezing can be associated with allergies, nasal irritation, parasites, infection, foreign material or other airway problems.',
      recommendedAction:
        'Arrange a veterinary examination and record an episode if you can do so safely. A video can help distinguish reverse sneezing from coughing or other breathing problems.',
    },
    {
      slug: 'nasal-discharge-or-bleeding',
      label: 'There is nasal discharge or bleeding',
      shortDescription:
        'Reverse sneezing comes with persistent discharge, blood from the nose or repeated pawing at the face.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: "DON'T ASSUME THIS IS JUST REVERSE SNEEZING",
      resultBody:
        'Nasal discharge, bleeding and facial discomfort can occur with conditions such as inflammation, infection, foreign material or nasal disease. Those signs deserve more attention than an isolated reverse sneeze.',
      recommendedAction:
        'Contact your veterinarian for an examination. Seek faster care if the bleeding is substantial or your dog also has trouble breathing.',
    },
    {
      slug: 'possible-nasal-foreign-body',
      label: 'It started suddenly after sniffing grass or plants',
      shortDescription:
        'Your dog suddenly developed repeated sneezing or reverse sneezing after exploring vegetation or another area with loose material.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'SOMETHING MAY BE IRRITATING THE NOSE',
      resultBody:
        'Plant material and other foreign objects can irritate or lodge in the upper respiratory tract and may trigger reverse sneezing, regular sneezing or nasal discharge.',
      recommendedAction:
        'Have your dog checked if the signs continue or keep returning. Do not blindly probe inside the nose or throat.',
    },
    {
      slug: 'coughing-or-feeling-sick',
      label: 'Your dog is coughing or seems sick too',
      shortDescription:
        'There is persistent coughing, lethargy, reduced appetite or eye or nasal discharge along with the episodes.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'THERE MAY BE MORE GOING ON',
      resultBody:
        'Reverse sneezing can occur alongside respiratory disease, and coughing or systemic illness makes a harmless isolated reflex a less convincing explanation.',
      recommendedAction:
        'Contact your veterinarian and describe all of the symptoms rather than treating the reverse sneezing as a separate problem.',
    },
    {
      slug: 'flat-faced-dog-with-other-airway-signs',
      label: 'A flat-faced dog also struggles with heat or exercise',
      shortDescription:
        'A short-nosed dog has persistent snorting, noisy breathing, exercise intolerance, gagging or other airway problems.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'HAVE THE AIRWAY ASSESSED',
      resultBody:
        'Reverse sneezing is reported more often in brachycephalic dogs, and an elongated soft palate or brachycephalic obstructive airway syndrome can contribute to upper-airway signs.',
      recommendedAction:
        'Arrange a veterinary assessment, especially if breathing becomes more difficult with excitement, exercise or warm conditions.',
    },
    {
      slug: 'real-breathing-distress',
      label: 'Your dog is struggling to breathe',
      shortDescription:
        'Breathing stays labored, the mouth is open at rest, the abdomen is working hard or your dog cannot settle after the episode.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'THIS IS A BREATHING EMERGENCY',
      resultBody:
        'True respiratory distress is different from a typical reverse sneeze and requires immediate veterinary attention.',
      recommendedAction:
        'Go to the nearest emergency animal hospital. Keep your dog calm and cool during transport and call ahead when possible.',
    },
    {
      slug: 'blue-gums-or-collapse',
      label: 'The gums change color or your dog collapses',
      shortDescription:
        'The gums or tongue look blue, purple or unusually pale, or your dog becomes weak, collapses or loses responsiveness.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'GET EMERGENCY HELP NOW',
      resultBody:
        'Gum color changes, weakness and collapse can accompany inadequate oxygen delivery or other serious emergencies. These are not normal features of an uncomplicated reverse sneeze.',
      recommendedAction:
        'Seek emergency veterinary care immediately rather than waiting to see whether another episode occurs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The upper airway triggers a reflex',
      description:
        'Irritation around the nose or throat can trigger rapid inward breaths and the characteristic snorting sound.',
      severity: 'info',
      chainLabel: 'Irritation → reflex',
    },
    {
      stageLabel: 'AFTER A TYPICAL EPISODE',
      title: 'Most dogs return to normal',
      description:
        'Mild sporadic reverse sneezing usually ends on its own, with the dog behaving and breathing normally afterward.',
      severity: 'info',
      chainLabel: 'Reflex → normal again',
    },
    {
      stageLabel: 'IF IT KEEPS HAPPENING',
      title: 'An underlying trigger may still be present',
      description:
        'Repeated episodes can justify looking for allergies, irritants, nasal mites, infection, foreign material or another airway problem.',
      severity: 'caution',
      chainLabel: 'Recurrence → investigate cause',
    },
    {
      stageLabel: 'IF OTHER SIGNS APPEAR',
      title: 'It may not be an isolated reverse sneeze',
      description:
        'Nasal discharge, bleeding, coughing, persistent noisy breathing or illness can point toward another condition that needs veterinary evaluation.',
      severity: 'warning',
      chainLabel: 'Added symptoms → veterinary exam',
    },
    {
      stageLabel: 'IF BREATHING BECOMES DIFFICULT',
      title: 'The situation becomes an emergency',
      description:
        'Labored breathing, abnormal gum color, weakness or collapse are emergency signs and should not be watched at home as reverse sneezing.',
      severity: 'danger',
      chainLabel: 'Respiratory distress → emergency care',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One brief episode followed by completely normal breathing and behavior',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Observe your dog. If everything returns to normal and the pattern remains occasional, no treatment is usually needed.',
    },
    {
      situation: 'Occasional episodes with the same familiar pattern and no other symptoms',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Keep an eye on the pattern and note possible triggers such as excitement, strong odors, dust or leash pressure.',
    },
    {
      situation: 'Episodes are becoming more frequent, intense or different',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Arrange a veterinary examination rather than continuing to assume every episode is harmless.',
    },
    {
      situation: 'Reverse sneezing comes with persistent nasal discharge, blood or facial discomfort',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact your veterinarian because nasal disease, infection or foreign material may need to be ruled out.',
    },
    {
      situation: 'Your dog also has persistent coughing, lethargy or reduced appetite',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Have the full respiratory picture evaluated instead of treating the snorting episodes as an isolated issue.',
    },
    {
      situation: 'A short-nosed dog has chronic noisy breathing or poor heat and exercise tolerance',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange an airway assessment because brachycephalic airway problems can contribute to respiratory signs.',
    },
    {
      situation: 'Breathing remains difficult, gums change color, or your dog becomes weak or collapses',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Seek emergency veterinary care immediately.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Let a typical episode pass',
      body:
        'Keep your dog calm and watch what happens. Most uncomplicated reverse-sneezing episodes stop on their own and the dog returns to normal immediately afterward.',
    },
    {
      title: 'Reduce obvious irritants',
      body:
        'Move away from smoke, strong fragrances, dust or other obvious airborne irritants. If leash pressure seems to trigger episodes, avoid pulling against the neck and consider a properly fitted harness.',
    },
    {
      title: 'Help your dog settle',
      body:
        'Gentle stroking around the neck or encouraging swallowing can help some dogs. Do not force objects, fingers, food or water into the mouth while your dog is struggling.',
    },
    {
      title: 'Record an episode',
      body:
        'If the problem keeps returning, take a short video when it is safe. Reverse sneezing, coughing, gagging and airway obstruction can sound surprisingly similar when described from memory.',
    },
    {
      title: 'Escalate when the pattern changes',
      body:
        'Contact your veterinarian for frequent or severe episodes or for nasal discharge, bleeding, coughing or other illness. Go directly to emergency care for true breathing difficulty, abnormal gum color, weakness or collapse.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Labored or open-mouth breathing',
      description:
        'Persistent effort to breathe, especially while resting, can indicate respiratory distress rather than ordinary reverse sneezing.',
      severity: 'danger',
    },
    {
      title: 'Blue, purple or unusually pale gums',
      description:
        'Abnormal gum or tongue color can signal a serious problem with oxygen delivery or circulation.',
      severity: 'danger',
    },
    {
      title: 'Weakness or collapse',
      description:
        'A typical reverse sneeze should not leave your dog weak, unresponsive or unable to stand normally.',
      severity: 'danger',
    },
    {
      title: 'Your dog does not return to normal',
      description:
        'Ongoing respiratory distress after the snorting stops does not fit the usual harmless reverse-sneeze pattern.',
      severity: 'danger',
    },
    {
      title: 'Blood or persistent discharge from the nose',
      description:
        'Nasal bleeding or ongoing discharge can occur with foreign material, inflammation, infection or other nasal disease.',
      severity: 'warning',
    },
    {
      title: 'Persistent coughing or other signs of illness',
      description:
        'Coughing, lethargy, reduced appetite or other respiratory signs make an isolated benign reflex less likely.',
      severity: 'warning',
    },
    {
      title: 'Episodes keep becoming more frequent or severe',
      description:
        'A changing pattern deserves veterinary evaluation even when your dog seems normal between episodes.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'What exactly is a reverse sneeze?',
      answer:
        'It is a reflex in which a dog rapidly pulls air inward through the nose after irritation around the nasopharynx, the area behind the nose and above the throat.',
    },
    {
      question: 'How is reverse sneezing different from a normal sneeze?',
      answer:
        'A normal sneeze forcefully pushes air out through the nose. A reverse sneeze produces repeated rapid inhalations inward, usually with loud snorting sounds.',
    },
    {
      question: 'Is my dog choking when it reverse sneezes?',
      answer:
        'Usually not. Dogs commonly remain standing and conscious and return to normal after a reverse sneeze. Actual choking or respiratory distress needs urgent attention, especially if your dog cannot breathe normally, becomes weak or develops abnormal gum color.',
    },
    {
      question: 'What can trigger reverse sneezing?',
      answer:
        'Reported triggers include dust, pollen, other irritants, excitement, eating or drinking quickly and pressure from pulling against a leash. Some cases have no identifiable trigger.',
    },
    {
      question: 'Can allergies cause reverse sneezing?',
      answer:
        'Yes. Allergic irritation is one possible cause, but repeated episodes should not automatically be blamed on allergies because foreign material, infection, nasal mites and other conditions can produce similar signs.',
    },
    {
      question: 'Are some dogs more likely to reverse sneeze?',
      answer:
        'Any dog can do it. Cornell reports it more often in smaller dogs and brachycephalic breeds, although reverse sneezing is not limited to those groups.',
    },
    {
      question: "Should I hold my dog's nostrils closed?",
      answer:
        'Some veterinary references describe briefly closing the nostrils or gently massaging the throat to encourage swallowing. It is not necessary for most episodes. Do not restrain a distressed dog or interfere with breathing if you are unsure what is happening.',
    },
    {
      question: 'Can I give my dog an antihistamine for reverse sneezing?',
      answer:
        'Do not start medication just because your dog reverse sneezes. A veterinarian may use medication when a specific cause such as allergy is suspected, but the drug and dose depend on the individual dog.',
    },
    {
      question: 'Why would my veterinarian want a video?',
      answer:
        'The episode may be over before your appointment. A video can help show the sound, posture and breathing pattern and may help distinguish reverse sneezing from coughing, gagging or other airway problems.',
    },
    {
      question: 'Can reverse sneezing ever mean something serious?',
      answer:
        'The reflex itself is usually harmless, but persistent or unusual episodes can occur with foreign material, infection, nasal mites, masses or airway disease. The surrounding symptoms matter more than the noise alone.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Reverse Sneezing',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/reverse-sneezing',
      sourceType: 'academic',
      notes:
        'Supports the description, common triggers, breed patterns, generally benign outcome, home measures and reasons recurrent or severe episodes may require further investigation.',
    },
    {
      publisher: 'Cornell University College of Veterinary Medicine',
      title: 'Recognizing and responding to canine respiratory distress',
      url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/recognizing-and-responding-canine-respiratory-distress',
      sourceType: 'academic',
      notes:
        'Supports emergency warning signs including labored breathing, abnormal gum color, weakness and collapse, and the recommendation for immediate emergency care when respiratory distress is present.',
    },
    {
      publisher: 'Merck Veterinary Manual',
      title: 'Rhinitis and Sinusitis in Dogs and Cats',
      url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/rhinitis-and-sinusitis-in-dogs-and-cats',
      sourceType: 'other',
      notes:
        'Describes reverse sneezing as an aspiration reflex and supports nasal discharge, sneezing and upper-airway disease as signs that may require investigation for an underlying cause.',
    },
    {
      publisher: 'VCA Animal Hospitals',
      title: 'Reverse Sneeze in Dogs',
      url: 'https://vcahospitals.com/carriage-hills/know-your-pet/reverse-sneeze-in-dogs',
      sourceType: 'industry',
      notes:
        'Supports the typical appearance of reverse sneezing, common irritants, generally benign course, differential diagnosis and veterinary evaluation when another respiratory problem is suspected.',
    },
    {
      publisher: 'U.S. Food and Drug Administration',
      title: 'Who Do You Call if You Have a Pet Emergency?',
      url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/who-do-you-call-if-you-have-pet-emergency',
      sourceType: 'government',
      notes:
        'Supports contacting a veterinarian or emergency animal hospital for veterinary advice when a pet emergency is suspected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Phone camera',
      description:
        'A clear video of an episode can give your veterinarian useful information about the sound, posture and breathing pattern.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Well-fitted harness',
      description:
        'Useful when pulling against a neck collar appears to trigger upper-airway irritation or reverse-sneezing episodes.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Veterinary examination',
      description:
        'Appropriate when episodes are frequent, severe, changing or accompanied by nasal discharge, coughing or other respiratory signs.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'dog-coughing', anchorText: 'Is my dog actually coughing instead?', relationshipType: 'sibling' },
  ],
};
