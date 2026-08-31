import type { ProblemSeed } from '../types';

export const nameTypoOnPlaneTicket: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'tickets-and-check-in',
  slug: 'name-typo-on-plane-ticket',
  canonicalPath: '/travel/air-travel/tickets-and-check-in/name-typo-on-plane-ticket/',
  name: 'Name Typo on a Plane Ticket',
  eyebrow: 'Travel · Air Travel · Tickets & Check-In',

  h1: 'Can I Ignore a Small Typo in My Name on a Plane Ticket?',
  seoTitle: 'Plane Ticket Name Typo: Fix It Before You Fly',
  metaDescription:
    'A small ticket typo may be easy to correct, but do not assume it is harmless. Compare the reservation with your ID and contact the airline before departure.',

  aliases:
    ['/travel/air-travel/tickets-and-check-in/small-name-typo-on-plane-ticket/', '/travel/air-travel/tickets-and-check-in/misspelled-name-on-airline-ticket/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I still fly?',
  canIUseItLabel: 'Only after the airline confirms the name is acceptable',

  shortAnswer:
    'Probably not. A small difference may be accepted, especially a missing middle name or suffix variation, but a misspelled first or last name can interfere with check-in or identity verification. Ask the airline or ticket seller to correct or confirm it before departure.',

  whyItMattersHeading: 'Why the Exact Name Matters',
  whyItMatters: [
    'The name used for a reservation should match the government-issued ID you will present, or your passport for international travel. Some minor formatting differences are accepted, but there is no universal rule that every one-letter typo is harmless.',
    'A correction keeps the same traveler and fixes the record. It is different from changing the ticket to another person, which airlines commonly restrict. Correction procedures also vary by carrier, seller and itinerary, and partner-operated flights can require extra coordination.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Wait Until the Airport If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'U.S. ticket-name matching, minor corrections, legal name changes, partner flights and identity screening checked against DOT, TSA and current airline policies.',
  disclaimer:
    'Airline and destination-country rules vary. The airline or ticket seller must confirm whether a specific reservation can be corrected or used.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'missing-middle-name',
      label: 'Your middle name is missing',
      shortDescription:
        'Your first and last names match the ID exactly, but the ticket omits your middle name or shows only an initial.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'This is often an acceptable minor difference',
      resultBody:
        'Some airlines accept a missing middle name or a middle initial in place of the full name. It is less concerning than an error in the first or last name, but carrier and international-document rules can differ.',
      recommendedAction:
        'Check the airline’s identification guidance. Request a correction if the airline requires it, the trip is international, or check-in or trusted-traveler benefits are affected.',
    },
    {
      slug: 'suffix-difference-only',
      label: 'Only Jr., Sr. or another suffix differs',
      shortDescription:
        'The first and last names match, but the boarding pass omits a suffix shown on your ID or includes one that the ID omits.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'TSA accepts this variation',
      resultBody:
        'TSA says suffixes are not required on boarding passes and accepts a suffix appearing on only the boarding pass or only the ID. An international carrier or destination may still apply its own document rules.',
      recommendedAction:
        'No correction is normally needed for TSA screening on a U.S. domestic trip. Verify with the airline if the itinerary is international.',
    },
    {
      slug: 'formatting-only',
      label: 'Spaces, punctuation or displayed formatting changed',
      shortDescription:
        'The letters and name order are correct, but a hyphen, apostrophe or space is missing, or the confirmation joins names together.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'It may be a reservation-system format',
      resultBody:
        'Airline systems may compress or reformat names, and some carriers accept differences caused by character limits. It is not the same as having the wrong letters or the wrong surname.',
      recommendedAction:
        'Compare every letter and the name order. If only formatting changed, check the carrier’s guidance or ask it to confirm that the stored passenger data is correct.',
    },
    {
      slug: 'first-and-middle-swapped',
      label: 'Your first and middle names are swapped',
      shortDescription:
        'The reservation puts your legal middle name in the first-name position and your legal first name in the middle-name position.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The first-name field needs correction',
      resultBody:
        'This is more than an omitted middle name because the reservation’s first name does not match the first name on your ID. Airlines may process it as a correction for the same traveler.',
      recommendedAction:
        'Contact the airline or ticket seller and ask for a first-and-middle-name correction. Confirm that the revised ticket and Secure Flight details are updated.',
    },
    {
      slug: 'first-and-last-inverted',
      label: 'Your first and last names are reversed',
      shortDescription:
        'The correct names are present, but the surname was entered as the given name and the given name as the surname.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Correct the field order before travel',
      resultBody:
        'Airlines publish procedures for inverted names, which shows that this is a correctable record error rather than a harmless display issue. Partner flights may make the process more involved.',
      recommendedAction:
        'Request an inverted-name correction and obtain a new confirmation or reissued ticket. Check every flight segment afterward.',
    },
    {
      slug: 'nickname-instead-of-legal-name',
      label: 'The ticket uses a nickname or preferred name',
      shortDescription:
        'The reservation says Jim instead of James, Liz instead of Elizabeth, or another name that is not printed on the travel ID.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A familiar nickname is still a different booking name',
      resultBody:
        'The booking should use the name on the ID. Some airlines can correct a nickname to the legal first name for the same passenger, but you should not depend on staff accepting it unchanged.',
      recommendedAction:
        'Ask for a name correction, not a transfer to another passenger. Keep the itinerary unchanged unless the airline tells you otherwise.',
    },
    {
      slug: 'legal-name-change-mismatch',
      label: 'Marriage, divorce or another legal change caused the mismatch',
      shortDescription:
        'The ticket and the ID or passport show different surnames because your legal name changed after one of them was issued.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Connect the two names before departure',
      resultBody:
        'DOT advises travelers whose ticket and ID names differ after a name change to carry supporting documentation. Airline correction requirements still apply, so documentation alone should not be treated as guaranteed boarding approval.',
      recommendedAction:
        'Contact the airline and ask whether the ticket should be corrected. Carry the marriage certificate, divorce decree or court order that documents the change.',
    },
    {
      slug: 'international-passport-mismatch',
      label: 'The ticket does not match your passport',
      shortDescription:
        'An international itinerary contains a different spelling, surname or name order from the passport you will use.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'International travel leaves less room for uncertainty',
      resultBody:
        'DOT tells international travelers to book using the name on the passport. Airlines also transmit passenger document information for international processing, and the operating carrier or destination may apply additional rules.',
      recommendedAction:
        'Contact the ticket seller and every carrier involved. Have the record corrected or get written confirmation that the displayed difference is accepted before going to the airport.',
    },
    {
      slug: 'partner-or-codeshare-flight',
      label: 'Another airline operates part of the trip',
      shortDescription:
        'The ticket was sold by one airline but includes a flight operated by a partner or codeshare carrier.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'One correction may need approval across several systems',
      resultBody:
        'Published airline policies distinguish their own flights from partner-operated flights. A correction that is simple on a single-carrier ticket may require assistance, a new reservation record or confirmation from the operating carrier.',
      recommendedAction:
        'Tell the seller that the itinerary includes partner flights. Confirm the corrected name on every segment rather than checking only the marketing airline’s app.',
    },
    {
      slug: 'departure-is-today',
      label: 'Your flight leaves today',
      shortDescription:
        'The typo remains in the reservation and there is little time for phone or online processing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Go to the airline desk before joining the security line',
      resultBody:
        'Waiting until identity screening leaves less opportunity to correct or reissue the ticket. TSA verifies identity, but the airline or ticket seller controls the reservation.',
      recommendedAction:
        'Contact the airline immediately and arrive early enough to visit its ticket counter. Bring the ID or passport you intend to use and any legal name-change documents.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The reservation contains different identity data',
      description:
        'The ticket may still look usable, but the passenger name no longer fully matches the travel document.',
      severity: 'info',
      chainLabel: 'Name mismatch',
    },
    {
      stageLabel: 'AT ONLINE CHECK-IN',
      title: 'Automated checks may flag the record',
      description:
        'Check-in, boarding-pass issuance or trusted-traveler recognition may fail when reservation and identity details do not align.',
      severity: 'caution',
      chainLabel: 'Check-in problem',
    },
    {
      stageLabel: 'AT THE AIRPORT',
      title: 'Staff may need to inspect or correct the booking',
      description:
        'The airline may have to update passenger data, reissue the ticket or coordinate with the company that sold it.',
      severity: 'caution',
      chainLabel: 'Manual review',
    },
    {
      stageLabel: 'WITH PARTNER OR INTERNATIONAL FLIGHTS',
      title: 'The mismatch can reach another carrier or document check',
      description:
        'A correction may need to appear in multiple reservation systems and match the passport used for the journey.',
      severity: 'warning',
      chainLabel: 'Multiple systems',
    },
    {
      stageLabel: 'IF IT REMAINS UNRESOLVED',
      title: 'You may miss the flight or be refused boarding',
      description:
        'If the airline cannot validate or correct the passenger record, or TSA cannot verify identity, you may not be able to continue the trip.',
      severity: 'warning',
      chainLabel: 'Travel disrupted',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One letter is wrong in your first or last name',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Contact the airline or seller now and request a correction for the same passenger.',
    },
    {
      situation: 'Your middle name is missing but first and last names match',
      ignoreAnswer: 'Usually, after checking the carrier’s policy',
      severity: 'info',
      whatToDo:
        'Review the airline’s identification guidance and correct it if check-in, international travel or trusted-traveler recognition is affected.',
    },
    {
      situation: 'Only a suffix differs on a U.S. domestic trip',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'TSA accepts suffix variations. Keep the first and last names consistent with the ID.',
    },
    {
      situation: 'The ticket uses a nickname rather than the ID name',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Ask the airline or ticket seller to correct the first name to the name printed on your ID.',
    },
    {
      situation: 'The reservation and passport differ',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Resolve the mismatch with the seller and involved airlines before international travel.',
    },
    {
      situation: 'You recently changed your legal name',
      ignoreAnswer: 'Only with airline confirmation',
      severity: 'warning',
      whatToDo:
        'Ask whether the ticket needs correction and carry certified documentation connecting the old and new names.',
    },
    {
      situation: 'The itinerary includes a partner-operated flight',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Make sure the correction is accepted and visible on every carrier’s segment.',
    },
    {
      situation: 'The flight departs today',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact the airline immediately and visit its ticket counter before attempting normal check-in.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Compare the ticket with the ID you will actually use',
      body:
        'Check the first name, surname, order and spelling against your government-issued ID. For international travel, use the passport you will present for that trip.',
    },
    {
      title: 'Contact the company that controls the ticket',
      body:
        'If you booked directly, contact the airline. If a travel agency, corporate booking service or online seller issued the ticket, start there because the airline may be unable to modify that agency’s record.',
    },
    {
      title: 'Ask for a name correction, not a passenger change',
      body:
        'Explain that the same traveler is flying and that the date of birth and itinerary are unchanged. This helps separate a correctable typo from a prohibited transfer to someone else.',
    },
    {
      title: 'Check the reissued record from beginning to end',
      body:
        'After the correction, verify every flight, seat and passenger name. If the trip includes another operating airline, retrieve the booking through that carrier as well.',
    },
    {
      title: 'Deal with a boarding-pass failure instead of retrying indefinitely',
      body:
        'A name or passenger-data mismatch can require airline assistance. If check-in will not complete, contact the carrier or go to its ticket counter.',
      destinationProblemSlug: 'boarding-pass-wont-load',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The surname contains the wrong letters',
      description: 'Last-name errors deserve confirmation even when only one character is wrong.',
      severity: 'warning',
    },
    {
      title: 'The booking uses a nickname or preferred name',
      description: 'Familiarity does not make it match the legal name printed on the travel document.',
      severity: 'warning',
    },
    {
      title: 'First, middle and last names are in the wrong fields',
      description:
        'Swapped or inverted names should be processed as a correction, not assumed to be a display quirk.',
      severity: 'warning',
    },
    {
      title: 'Your passport and international ticket differ',
      description:
        'The operating airline and destination may require passenger information to align with the passport.',
      severity: 'danger',
    },
    {
      title: 'A partner airline operates any segment',
      description: 'The correction may need to pass through more than one reservation system.',
      severity: 'warning',
    },
    {
      title: 'Online check-in or boarding-pass issuance fails',
      description:
        'Stop retrying and ask the airline whether the name or Secure Flight details are preventing check-in.',
      severity: 'caution',
    },
    {
      title: 'The date of birth is also wrong',
      description:
        'This is not merely a name typo. Tell the airline or seller that multiple passenger-data fields need correction.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I fly with one letter wrong in my name?',
      answer:
        'Maybe, but do not count on it. Ask the airline to correct or confirm the spelling before departure, especially if the error is in the surname or the trip is international.',
    },
    {
      question: 'Does my middle name have to appear on the ticket?',
      answer:
        'Not always. Some airlines accept an omitted middle name or a middle initial when the first and last names match, but check your carrier’s policy.',
    },
    {
      question: 'Will TSA accept a missing suffix?',
      answer:
        'Yes. TSA says suffixes are not required on boarding passes and accepts a suffix appearing on only the boarding pass or only the ID.',
    },
    {
      question: 'Is a nickname close enough to my legal first name?',
      answer: 'Do not assume so. Ask for a correction to the first name printed on the ID you will use.',
    },
    {
      question: 'Can TSA fix my ticket at the security checkpoint?',
      answer:
        'No. TSA handles identity screening; the airline or ticket seller controls the reservation and ticket.',
    },
    {
      question: 'Are airlines required to correct a typo for free?',
      answer:
        'No. DOT says airlines are not federally required to make ticket changes, including correcting a misspelled name, free of charge. Individual airline policies may be more generous.',
    },
    {
      question: 'Does the twenty-four-hour booking rule guarantee a free correction?',
      answer:
        'No. For qualifying direct airline bookings, the airline must offer either a reservation hold or a cancellation-and-refund option; it does not have to offer both, and the rule does not require a free correction.',
    },
    {
      question: 'Should I cancel and rebook instead?',
      answer:
        'First ask what the correction requires and check the current fare and seat availability. If your seller offers penalty-free cancellation, rebooking may be simpler, but do not cancel until you understand the consequences.',
    },
    {
      question: 'Who fixes a ticket bought through an online travel agency?',
      answer:
        'Start with the agency or ticket seller. DOT notes that an airline may have limited ability to modify a ticket issued by another company.',
    },
    {
      question: 'Can a name mismatch affect TSA PreCheck?',
      answer:
        'It can. Trusted-traveler benefits depend on matching reservation and membership information, so check the name and Known Traveler Number after any correction.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Transportation',
      title: 'Fly Rights',
      url: 'https://www.transportation.gov/airconsumer/fly-rights',
      sourceType: 'government',
      notes:
        'DOT advises using the name on the photo ID or passport, checking ticket details immediately, pursuing corrections promptly and carrying documentation when a legal name change creates a mismatch.',
    },
    {
      publisher: 'U.S. Department of Transportation',
      title: 'Buying a Ticket',
      url: 'https://www.transportation.gov/individuals/aviation-consumer-protection/buying-ticket',
      sourceType: 'government',
      notes:
        'DOT explains the direct-booking hold or cancellation rule, states that free correction of a misspelled name is not federally required and directs third-party customers to contact the ticket agent.',
    },
    {
      publisher: 'Transportation Security Administration',
      title: 'Acceptable Identification at the TSA Checkpoint',
      url: 'https://www.tsa.gov/travel/security-screening/identification',
      sourceType: 'government',
      notes:
        'TSA lists acceptable identification, explains that travelers whose identity cannot be verified may not enter the checkpoint and expressly accepts boarding-pass and ID variations involving suffixes.',
    },
    {
      publisher: 'Southwest Airlines',
      title: 'Identification Requirements for Travel',
      url: 'https://support.southwest.com/helpcenter/s/article/identification-requirements',
      sourceType: 'industry',
      notes:
        'Southwest says the booking name should match the government ID used for travel and notes that some middle-name and character-limit differences may be acceptable.',
    },
    {
      publisher: 'Southwest Airlines',
      title: 'Global Distribution System Policy',
      url: 'https://www.southwest.com/about-southwest/terms-and-conditions/gds-policy/',
      sourceType: 'industry',
      notes:
        'Southwest’s agency policy identifies inverted names, middle-name changes, hyphenated surnames, repeated characters and certain small first-name typos as minor correction categories.',
    },
    {
      publisher: 'Delta Air Lines',
      title: 'Name Correction Policy',
      url: 'https://pro.delta.com/content/agency/us/en/policy-library/self-service-exceptions/name-correction-policy.html',
      sourceType: 'industry',
      notes:
        'Delta’s current agency policy covers first, middle and limited last-name corrections, inverted names and added surnames, while requiring extra assistance for partner-operated flights and other exclusions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Airline reservations or ticketing support',
      description:
        'The airline can explain whether the difference is acceptable and whether the reservation must be corrected or reissued.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Travel agency or booking-platform support',
      description:
        'Use the original seller when it issued and controls the ticket, especially for package, corporate or third-party bookings.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Government-issued ID or passport',
      description:
        'Keep the exact document you will use in front of you when requesting the correction so every name field can be checked accurately.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Certified legal name-change document',
      description:
        'A marriage certificate, divorce decree or court order can connect old and new names when the ticket and identification differ after a legal change.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'boarding-pass-wont-load',
      anchorText: 'Why won’t my boarding pass load?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'wrong-date-on-flight-booking',
      anchorText: 'Can I ignore the wrong date on my flight booking?',
      relationshipType: 'sibling',
    },
  ],
};
