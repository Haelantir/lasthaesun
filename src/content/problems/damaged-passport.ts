import type { ProblemSeed } from '../types';

export const damagedPassport: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'passports',
  slug: 'damaged-passport',
  canonicalPath: '/travel/documents/passports/damaged-passport/',
  name: 'Damaged passport',
  eyebrow: 'Travel · Travel Documents · Passports',

  h1: 'Can I Ignore a Damaged Passport?',
  seoTitle: 'Damaged Passport: When It Must Be Replaced Before Travel',
  metaDescription:
    'A damaged U.S. passport can be rejected even before it expires. Learn what counts as damage, what is normal wear, and how to replace it before travel.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I travel with it?',
  canIUseItLabel: 'Not if it is truly damaged',

  shortAnswer:
    'No—not for international travel. The State Department says damaged U.S. passports cannot be used for travel and need replacement; ordinary wear such as small bends or slight edge fraying is different.',

  whyItMattersHeading: 'Why Passport Condition Matters',
  whyItMatters: [
    'A passport can remain unexpired yet be unusable because of its physical condition. Water damage, mold, stains, significant tears, unofficial markings, and missing pages can interfere with identity checks or make the document appear altered. Airlines may deny boarding, and border officials may delay or reject the document.',
    'Do not confuse real damage with normal wear. Folded pages, small bends, page fanning, and slight edge fraying generally do not require replacement when the identity page, security features, pages, cover, and binding remain intact. A genuinely damaged U.S. passport is replaced in person using Form DS-11, along with the damaged passport and a signed explanation.',
  ].join('\n\n'),

  redFlagsHeading: 'Replace It Before Travel If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'U.S. passport damage, normal wear, replacement steps, urgent-travel options, and domestic ID alternatives checked against current State Department and TSA guidance.',
  disclaimer:
    'This guidance covers U.S. passport books and cards. Foreign passports follow the rules of their issuing country, and airlines and border authorities make the final decision on document acceptance.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'normal-wear',
      label: 'The passport has small bends, folded pages, or slight edge fraying',
      shortDescription:
        'All pages are present, the identity information is clear, and the binding and security features appear intact.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is usually normal wear',
      resultBody:
        'The State Department distinguishes ordinary wear from damage. Small bends, folded pages, page fanning, and slight edge fraying do not normally require replacement by themselves.',
      recommendedAction:
        'Keep the passport dry and protected. Check it again before international travel to confirm that no page, laminate, cover, or binding damage has developed.',
    },
    {
      slug: 'cosmetic-cover-scuffs',
      label: 'The cover has light surface scuffs but remains firmly attached',
      shortDescription:
        'The marks are cosmetic, with no cuts, holes, separation, exposed material, or loose binding.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Cosmetic wear alone is usually not damage',
      resultBody:
        'Light surface wear is different from a cut, punctured, detached, or structurally damaged cover. The rest of the passport must still be complete and securely bound.',
      recommendedAction:
        'Inspect the cover edges and binding in good light. Replace the passport if the cover begins separating or the pages become loose.',
    },
    {
      slug: 'water-mold-or-stains',
      label: 'The passport has water damage, mold, or stains',
      shortDescription:
        'Pages are rippled, discolored, stuck together, moldy, or marked by water, ink, chemicals, or another spill.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Replace it before travel',
      resultBody:
        'The State Department specifically lists water damage, mold, and stains as examples of passport damage. Clear-looking identity details do not guarantee that an airline or border official will accept the document.',
      recommendedAction:
        'Let a wet passport air-dry without heat, tape, or chemicals, then keep it as-is for submission with an in-person replacement application.',
    },
    {
      slug: 'torn-or-missing-page',
      label: 'A page is significantly torn, cut, detached, or missing',
      shortDescription: 'This includes a damaged visa page even when the identity page still looks normal.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A damaged or missing page ends normal use',
      resultBody:
        'Torn or missing pages can affect security features and the record of visas or entry stamps. The State Department treats a missing or torn visa page as passport damage.',
      recommendedAction:
        'Do not remove additional pages or tape the tear. Apply for a replacement and submit every detached piece you still have with the damaged passport.',
    },
    {
      slug: 'damaged-data-page',
      label: 'The photo or personal-information page is damaged',
      shortDescription:
        'The page is cracked, torn, stained, distorted, unreadable, or has lifting or separated laminate.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not rely on this passport',
      resultBody:
        'The identity page contains the details and security features used to verify the document. Damage there creates a direct risk of rejection even if the passport number and expiration date remain visible.',
      recommendedAction:
        'Leave the page untouched and apply for a replacement. Bring separate citizenship evidence in case the damaged passport can no longer serve as acceptable evidence.',
    },
    {
      slug: 'loose-cover-or-binding',
      label: 'The cover is coming away or the binding is loose',
      shortDescription:
        'Pages shift, stitching is loose, the cover is partly detached, or the booklet no longer stays together normally.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Structural damage needs replacement',
      resultBody:
        'A passport must remain a complete, secure document. A detached cover or loose binding can resemble alteration and may allow pages to separate or disappear.',
      recommendedAction:
        'Do not glue, sew, staple, or tape the passport. Store all parts together and submit them with the replacement application.',
    },
    {
      slug: 'unofficial-markings',
      label: 'Someone wrote, drew, stamped, or altered the passport',
      shortDescription:
        'There are unofficial marks outside the designated signature or emergency-contact areas.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Unofficial markings can count as damage',
      resultBody:
        'The State Department includes unofficial markings among examples of passport damage. An explanation that the mark was accidental may not make the document acceptable for travel.',
      recommendedAction:
        'Do not erase, cover, or modify the marking. Explain what happened in the signed damage statement when applying for a replacement.',
    },
    {
      slug: 'domestic-flight-with-other-id',
      label: 'You have a domestic flight and another acceptable ID',
      shortDescription:
        'You can use a valid REAL ID-compliant license, passport card, or another form of identification on TSA’s current list.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Use the other ID for this trip',
      resultBody:
        'A damaged passport does not have to be your domestic airport ID if you possess another TSA-accepted document. That does not restore the passport or make it suitable for international travel.',
      recommendedAction:
        'Bring the alternate ID and do not make the damaged passport your only plan. Arrange replacement before your next international trip.',
    },
    {
      slug: 'international-trip-close',
      label: 'International departure is approaching',
      shortDescription: 'There may not be enough time for the ordinary application and mailing process.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Use the urgent-travel process',
      resultBody:
        'Waiting for check-in turns document uncertainty into a possible missed trip. The State Department offers passport agency appointments for qualifying urgent international travel, but appointments are not guaranteed.',
      recommendedAction:
        'If departure is within fourteen calendar days, follow the State Department’s urgent-travel appointment process and bring proof of travel.',
    },
    {
      slug: 'already-abroad',
      label: 'You discover serious damage while outside the United States',
      shortDescription: 'The passport may be questioned before your next flight or border crossing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Contact a U.S. embassy or consulate',
      resultBody:
        'Do not wait until you are at an airline counter or border checkpoint. Consular staff can explain the local replacement process and available options for urgent travel.',
      recommendedAction:
        'Contact the nearest U.S. embassy or consulate, describe the damage and your itinerary, and follow its instructions before attempting further international travel.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The passport becomes an uncertain travel document',
      description:
        'It may still look usable, but physical damage can independently affect acceptance even when the expiration date is far away.',
      severity: 'caution',
      chainLabel: 'Damage creates uncertainty',
    },
    {
      stageLabel: 'AT AIRLINE CHECK-IN',
      title: 'Boarding may be delayed or denied',
      description:
        'Airline staff may refer the passport for additional review or refuse it rather than risk transporting a passenger without acceptable travel documents.',
      severity: 'warning',
      chainLabel: 'Document review',
    },
    {
      stageLabel: 'AT BORDER CONTROL',
      title: 'Entry or onward travel can become difficult',
      description:
        'Damaged pages, identity information, security features, or binding may prevent an official from accepting the passport as a complete and reliable document.',
      severity: 'warning',
      chainLabel: 'Border scrutiny',
    },
    {
      stageLabel: 'IF REPLACEMENT IS LEFT UNTIL TRAVEL IS CLOSE',
      title: 'Your service options narrow',
      description:
        'An in-person replacement requires documents, a photo, fees, and processing. Waiting may leave you dependent on an urgent appointment that is not guaranteed.',
      severity: 'warning',
      chainLabel: 'Less time to replace it',
    },
    {
      stageLabel: 'IF YOU ARE ALREADY ABROAD',
      title: 'You may need consular help before continuing',
      description:
        'A seriously damaged passport can disrupt your next flight or border crossing and may require assistance from a U.S. embassy or consulate.',
      severity: 'warning',
      chainLabel: 'Travel interruption',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Small bends, folded pages, page fanning, or slight edge fraying only',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Confirm that every page is present and that the identity page, cover, binding, and security features remain intact.',
    },
    {
      situation: 'Light surface scuffs on an otherwise intact cover',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Protect the passport from moisture and check that the cover is not cut, punctured, loose, or separating.',
    },
    {
      situation: 'Water damage, mold, stains, or pages stuck together',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not rely on it for travel. Keep the passport unaltered and begin an in-person replacement application.',
    },
    {
      situation: 'A page is significantly torn, detached, cut, or missing',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep any loose pieces, do not tape them back in, and submit the damaged passport when applying for a replacement.',
    },
    {
      situation: 'The identity page or its laminate is damaged',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Replace the passport and prepare separate citizenship evidence in case the damaged document cannot be accepted for that purpose.',
    },
    {
      situation: 'Domestic flight with another current TSA-accepted ID',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Use the alternate ID for the domestic trip, then replace the damaged passport before international travel.',
    },
    {
      situation: 'International travel is approaching',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Apply immediately and use the State Department’s urgent-travel process if your departure meets its appointment window.',
    },
    {
      situation: 'You are already outside the United States',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact the nearest U.S. embassy or consulate before going to the airport or attempting another border crossing.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Decide whether it is wear or actual damage',
      body:
        'Check the passport in bright light. Look at the identity page, laminate, visa pages, cover, binding, perforations, and printed details. Small bends and slight fraying are wear; stains, mold, significant tears, missing pages, unofficial markings, or structural separation are damage.',
    },
    {
      title: 'Leave the passport in its current condition',
      body:
        'Do not tape, glue, staple, sew, laminate, erase, trim, or clean the document with chemicals. Attempts to repair its appearance can hide security features or make the passport look altered.',
    },
    {
      title: 'Apply in person using Form DS-11',
      body:
        'Bring the damaged passport, a signed statement explaining how it was damaged, supporting documents, a compliant passport photo, identification, photocopies, and the required fees. Bring separate citizenship evidence if the passport is severely damaged.',
    },
    {
      title: 'Match the application service to your departure',
      body:
        'Apply early through an acceptance facility when time allows. If international departure is within fourteen calendar days, check eligibility for a passport agency appointment and bring proof of travel.',
    },
    {
      title: 'Get consular instructions if you are abroad',
      body:
        'Contact the nearest U.S. embassy or consulate, explain the condition of the passport, and provide your travel schedule. Do not assume an airline counter can solve the problem at departure.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The photo or personal details are unclear',
      description:
        'Blurring, fading, stains, cracks, missing material, or distortion on the identity page can prevent reliable verification.',
      severity: 'danger',
    },
    {
      title: 'The laminate is lifting or separating',
      description:
        'Do not press it down, peel it farther, or use adhesive. Damage around protected identity information can look like alteration.',
      severity: 'danger',
    },
    {
      title: 'A page is significantly torn, detached, or missing',
      description: 'This includes blank pages, visa pages, and pages carrying entry or exit stamps.',
      severity: 'warning',
    },
    {
      title: 'Water, mold, ink, or another substance affected the booklet',
      description:
        'Even dried damage may have altered paper, printing, security features, or the electronic components.',
      severity: 'warning',
    },
    {
      title: 'The cover or binding is separating',
      description:
        'A loose booklet is no longer a reliably complete document and can lose pages during handling.',
      severity: 'warning',
    },
    {
      title: 'There are unofficial marks or apparent alterations',
      description:
        'Do not erase or conceal them. Keep the document as-is and explain the circumstances with the replacement application.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I travel with a water-damaged passport if it dried out?',
      answer:
        'Do not count on it. The State Department specifically lists water damage as passport damage, and drying it does not restore affected paper or security features.',
    },
    {
      question: 'Is one torn passport page really enough to require replacement?',
      answer:
        'A small folded corner may be ordinary wear, but a significant tear or a torn, detached, or missing visa page counts as damage and should be replaced.',
    },
    {
      question: 'Does damage to only the passport cover matter?',
      answer:
        'Light scuffing may be cosmetic. Cuts, holes, separation, exposed material, or a cover coming away from the booklet should be treated as real damage.',
    },
    {
      question: 'What if the photo page is still readable?',
      answer:
        'Readability alone does not guarantee acceptance. Cracks, stains, distortion, missing material, or lifting laminate on the identity page create a strong risk of rejection.',
    },
    {
      question: 'Can I tape or glue a damaged passport?',
      answer:
        'No. Leave it in its damaged condition and submit it with the replacement application. A homemade repair can cover security features or resemble tampering.',
    },
    {
      question: 'Can I replace a damaged U.S. passport online or by mail?',
      answer:
        'The State Department directs holders of damaged passports to apply in person using Form DS-11 and submit the damaged document with a signed explanation.',
    },
    {
      question: 'Can I use a damaged passport for a domestic flight?',
      answer:
        'Do not make it your only ID. Use another document from TSA’s acceptable-ID list if available. If you lack acceptable ID, TSA identity verification may be possible, but entry to the checkpoint is not guaranteed.',
    },
    {
      question: 'Can I use a passport card instead of my damaged passport book?',
      answer:
        'A valid passport card is acceptable for domestic flights, but it is not valid for international air travel.',
    },
    {
      question: 'What should I do if I notice the damage while abroad?',
      answer:
        'Contact the nearest U.S. embassy or consulate before your next flight or border crossing. Give consular staff the damage details and your itinerary.',
    },
    {
      question: 'Will the State Department return my damaged passport?',
      answer:
        'Do not assume it will. State Department guidance says damaged passports submitted during the replacement process may be kept.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of State',
      title: 'Glossary',
      url: 'https://travel.state.gov/en/glossary.html',
      sourceType: 'government',
      notes:
        'Defines passport damage and normal wear. It says damaged passports cannot be used for travel and need replacement, while pocket bends, page fanning, and slight edge fraying are normal wear.',
    },
    {
      publisher: 'U.S. Department of State',
      title: 'Apply for Your Adult Passport',
      url: 'https://travel.state.gov/en/passports/apply/adults.html',
      sourceType: 'government',
      notes:
        'Gives the in-person Form DS-11 process and requires a damaged passport plus a signed explanation. Lists water damage, mold, stains, significant tears, unofficial markings, and missing pages as damage.',
    },
    {
      publisher: 'U.S. Department of State',
      title: 'Frequently Asked Questions about Passport Services',
      url: 'https://travel.state.gov/en/passports/contact-support/faq.html',
      sourceType: 'government',
      notes:
        'Warns that airlines may deny boarding or travelers may encounter difficulties abroad. Directs holders to apply in person with Form DS-11, the damaged passport, a signed statement, supporting documents, photo, and fees.',
    },
    {
      publisher: 'U.S. Department of State',
      title: 'Get Your Passport Fast',
      url: 'https://travel.state.gov/en/passports/apply/get-fast.html',
      sourceType: 'government',
      notes:
        'Explains routine, expedited, urgent-travel, and life-or-death services, including passport agency appointments for qualifying international travel within fourteen calendar days.',
    },
    {
      publisher: 'Transportation Security Administration',
      title: 'Acceptable Identification at the TSA Checkpoint',
      url: 'https://www.tsa.gov/travel/security-screening/identification',
      sourceType: 'government',
      notes:
        'Lists acceptable identification for domestic checkpoints, including U.S. passport books, passport cards, REAL ID-compliant state IDs, and other credentials, and describes identity verification when acceptable ID is unavailable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Passport Acceptance Facility Locator',
      description:
        'Finds authorized post offices, libraries, courts, and other locations that accept in-person Form DS-11 applications.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Form DS-11 Application Guide',
      description:
        'Helps you prepare the correct form, supporting documents, photocopies, photo, damage statement, and payment before your appointment.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Passport Agency Appointment Service',
      description:
        'The official route for qualifying travelers whose international departure is too close for ordinary application service.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'U.S. Embassy or Consulate Passport Services',
      description:
        'Provides local instructions and urgent assistance when passport damage is discovered outside the United States.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'passport-expiring-soon',
      anchorText: 'Is my passport expiring too soon to travel?',
      relationshipType: 'sibling',
    },
    {
      slug: 'passport-out-of-blank-pages',
      anchorText: 'Can I travel without blank passport pages?',
      relationshipType: 'sibling',
    },
  ],
};
