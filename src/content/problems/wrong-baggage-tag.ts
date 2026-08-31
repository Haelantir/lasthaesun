import type { ProblemSeed } from '../types';

export const wrongBaggageTag: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'checked-bags',
  slug: 'wrong-baggage-tag',
  canonicalPath: '/travel/luggage/checked-bags/wrong-baggage-tag/',
  name: 'Wrong Destination on a Baggage Tag',
  eyebrow: 'Travel · Luggage · Checked Bags',

  h1: 'Can I Ignore the Wrong Destination on My Baggage Tag?',
  seoTitle: 'Wrong Airport Code on Your Bag Tag: What to Do Now',
  metaDescription:
    'A wrong airport code can send a checked bag onto the wrong route. Compare the tag and claim receipt with your itinerary, and alert the airline immediately.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I let the airline take the bag?',
  canIUseItLabel: 'Only after the routing is corrected',

  shortAnswer:
    'No. The destination code is used to sort and route checked bags, so a genuine mismatch should be corrected before the bag leaves your control. If it is already on the belt, tell an airline agent immediately.',

  whyItMattersHeading: 'The tag determines where the bag is routed',
  whyItMatters: [
    'Baggage systems use flight and destination information tied to the tag to sort bags. If the current tag points to another airport, the bag can separate from your itinerary even if your boarding pass is correct. The claim receipt is also a tracking key, so keep it and make sure it belongs to your bag.',
    'Not every shorter routing is a mistake. A bag may be tagged only to a connection when you must collect and recheck it, including some separate-ticket or customs situations. Conversely, a final-destination tag does not always mean you can skip baggage claim at a U.S. entry point. Confirm the handling plan with the airline instead of guessing from the printed city alone.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Airline Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Routing, through-check, customs recheck, reporting, and claim guidance were checked against DOT, CBP, and IATA materials.',
  disclaimer:
    'Airline, airport, and customs procedures vary by itinerary and location. Follow the operating carrier’s and local officials’ instructions.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'wrong-code-before-bag-drop',
      label: 'The current tag shows the wrong airport before the bag is accepted',
      shortDescription:
        'The printed destination does not match the airport where the airline says you will collect the bag.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not send the bag with that tag',
      resultBody:
        'The airport code and routing data on the current tag direct baggage handling. Your correct boarding pass does not cancel an incorrect bag tag.',
      recommendedAction:
        'Keep the bag with you and ask the agent to void and remove the incorrect tag, print a replacement, and give you the matching claim receipt.',
    },
    {
      slug: 'wrong-code-after-bag-drop',
      label: 'You noticed the wrong destination after the bag entered the conveyor system',
      shortDescription:
        'The airline has accepted the bag, but you still have the claim receipt or a photo showing the incorrect routing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Alert the airline immediately',
      resultBody:
        'The longer the bag continues through sorting, the fewer opportunities the departure station may have to intercept and retag it.',
      recommendedAction:
        'Give an agent the bag-tag number, flight details, bag description, and correct destination. Do not enter a restricted area or attempt to retrieve the bag yourself.',
    },
    {
      slug: 'claim-receipt-does-not-match',
      label: 'The claim receipt does not match the tag on your bag',
      shortDescription:
        'The destination, passenger details, or bag-tag number differs between the attached label and the receipt you were given.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the mismatch as a tagging error',
      resultBody:
        'The receipt identifies the baggage record you will use for tracking and claims. A mismatch may mean you received another passenger’s receipt or another bag received your tag.',
      recommendedAction:
        'Ask the agent to scan the attached tag and confirm that the baggage record belongs to you and follows your itinerary. Get a corrected receipt before leaving the counter.',
    },
    {
      slug: 'itinerary-changed-after-tagging',
      label: 'Your flight or destination changed after the tag was printed',
      shortDescription:
        'You were rebooked, rerouted, or changed airports after the bag had already been labeled.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Confirm that the bag was rerouted too',
      resultBody:
        'Changing the passenger itinerary does not give you enough information to assume the accepted bag received updated routing.',
      recommendedAction:
        'Ask the airline to verify the bag-tag number against the new itinerary. If the bag is still with you, require a replacement tag before surrendering it.',
    },
    {
      slug: 'old-tags-still-attached',
      label: 'An old airline tag or barcode sticker remains on the suitcase',
      shortDescription:
        'The current destination is correct, but routing labels from an earlier trip are still attached.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Remove obsolete routing labels',
      resultBody:
        'The U.S. Department of Transportation advises removing tags from previous trips because they may contribute to a bag going astray.',
      recommendedAction:
        'Remove old loop tags and airline barcode stickers before checking the bag, while leaving your personal identification label in place.',
    },
    {
      slug: 'unfamiliar-code-is-correct',
      label: 'The airport code looks unfamiliar, but it matches your intended airport',
      shortDescription:
        'The three-letter code has been confirmed through the airline, your itinerary, or the official IATA code search.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The code is correct',
      resultBody:
        'Airport codes often do not resemble the city name, and metropolitan areas may have several airports. An unfamiliar code is not an error once you confirm the exact airport.',
      recommendedAction:
        'Match the code to the airport named on your itinerary and keep the claim receipt. No retagging is needed if both refer to the intended airport.',
    },
    {
      slug: 'tag-ends-at-expected-connection',
      label: 'The bag is intentionally tagged only to a connecting airport',
      shortDescription:
        'The airline confirms that you must collect and recheck it there because of the ticket arrangement, customs, or carrier-transfer rules.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The shorter routing is intentional',
      resultBody:
        'A connection airport can be the correct endpoint for the current baggage contract even though your personal journey continues.',
      recommendedAction:
        'Keep the claim receipt and follow signs for baggage claim and the next carrier’s check-in. Make sure your connection plan includes the required handoff.',
    },
    {
      slug: 'final-tag-with-customs-recheck',
      label: 'The tag shows your final city, but you were told to collect the bag for U.S. customs',
      shortDescription: 'You are entering the United States and continuing on another flight.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The final tag can still be correct',
      resultBody:
        'On many inbound international connections, the bag remains labeled to the final airport but the traveler must retrieve it for customs and return it to the airline. Preclearance and approved transfer processes can change this.',
      recommendedAction:
        'Follow the instructions provided for your arrival airport and route. Do not walk past baggage claim merely because the final airport appears on the tag.',
    },
    {
      slug: 'corrected-tag-confirmed',
      label: 'The wrong tag was removed and a replacement now matches your trip',
      shortDescription:
        'The attached label and new claim receipt show the intended collection airport and the airline has confirmed the routing.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The correction is complete',
      resultBody:
        'Once the active label and baggage record are correct and the obsolete tag is removed or voided, the original printing error no longer controls the route.',
      recommendedAction: 'Photograph the corrected tag, keep the matching receipt, and proceed with check-in.',
    },
    {
      slug: 'bag-missing-or-tracked-elsewhere',
      label: 'The bag did not arrive or airline tracking shows another airport',
      shortDescription:
        'You are at the intended collection point, but the bag is absent or appears to have followed the incorrect routing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'File a mishandled-baggage report now',
      resultBody:
        'The airline needs a report and the bag-tag number to begin tracing the bag. Leaving without reporting it can make follow-up harder and may affect access to certain remedies.',
      recommendedAction:
        'Visit the baggage service office before leaving the airport, obtain a file reference, confirm your delivery contact information, and keep receipts for reasonable necessary purchases.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The baggage record points to the wrong place',
      description:
        'A genuine destination mismatch gives the handling system routing information that differs from your journey.',
      severity: 'caution',
      chainLabel: 'Wrong code → wrong routing data',
    },
    {
      stageLabel: 'DURING BAG SORTING',
      title: 'The bag can enter another flight stream',
      description:
        'Baggage is sorted using flight and destination information, so the incorrect code can direct it toward a different make-up area or transfer path.',
      severity: 'warning',
      chainLabel: 'Wrong routing data → different flight stream',
    },
    {
      stageLabel: 'IF THE BAG IS LOADED',
      title: 'You and the bag may travel separately',
      description:
        'The bag may leave on another aircraft, remain at the departure airport, or be held while staff resolve the routing discrepancy.',
      severity: 'warning',
      chainLabel: 'Different flight stream → separation',
    },
    {
      stageLabel: 'AT YOUR DESTINATION',
      title: 'The bag may not reach the carousel',
      description:
        'You may arrive without clothing, equipment, or other checked belongings and need the airline to locate and deliver them.',
      severity: 'warning',
      chainLabel: 'Separation → delayed bag',
    },
    {
      stageLabel: 'IF THE BAG IS NOT THERE',
      title: 'Tracing and a baggage claim become necessary',
      description:
        'You will need the claim receipt, a description of the bag, contact information, and a mishandled-baggage report while the airline searches for it.',
      severity: 'warning',
      chainLabel: 'Delayed bag → tracing and claim',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The current destination code is wrong and the bag is still with you',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Do not surrender the bag. Ask for the wrong tag to be removed and replaced, then check the new label and receipt.',
    },
    {
      situation: 'The bag has entered the conveyor system',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Notify the bag-drop agent or airline service desk immediately and provide the bag-tag number and correct destination.',
    },
    {
      situation: 'Boarding is approaching and an agent has not confirmed a correction',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep working with the airline and ask whether the bag was intercepted or rerouted. Do not assume boarding automatically updates the bag.',
    },
    {
      situation: 'The code is unfamiliar but verified as your intended airport',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Keep the matching claim receipt and proceed. The airport code does not need to resemble the city name.',
    },
    {
      situation: 'The tag ends at a connection where the airline told you to recheck',
      ignoreAnswer: 'Yes — the endpoint is intentional',
      severity: 'info',
      whatToDo: 'Collect the bag at that airport and check it again according to the airline’s instructions.',
    },
    {
      situation: 'The tag shows the final destination but customs requires collection',
      ignoreAnswer: 'The tag is fine; follow customs instructions',
      severity: 'caution',
      whatToDo:
        'Retrieve and present the bag as directed, then return it to the connecting-baggage point unless your route uses an approved exception.',
    },
    {
      situation: 'The wrong tag was removed and the replacement matches the receipt',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Photograph the corrected label, retain the receipt, and continue your trip.',
    },
    {
      situation: 'The bag is missing when you reach the intended collection airport',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Report it to airline personnel before leaving the airport and obtain a file reference for tracking and claims.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Compare the airport code and bag-tag number',
      body:
        'Look for the prominent three-letter destination code on the current tag and compare it with the airport where the airline says the bag will next be claimed. Match the bag-tag number on your receipt to the attached label.',
    },
    {
      title: 'Request a complete replacement tag',
      body:
        'Do not accept a handwritten promise over an active incorrect label. Ask the agent to void and remove the wrong tag, print the correct routing, attach it securely, and issue the matching receipt.',
    },
    {
      title: 'Alert the airline if the bag has left your control',
      body:
        'Give the agent the tag number, flight, bag description, and correct airport. Ask whether the bag can be intercepted or its electronic routing updated, and note any reference number provided.',
    },
    {
      title: 'Confirm every collection and recheck point',
      body:
        'Ask whether the bag is checked through, whether your ticket arrangement ends the first carrier’s handling at a connection, and whether customs requires collection. Put each required handoff into your connection plan.',
      destinationProblemSlug: 'bag-not-checked-through',
    },
    {
      title: 'Report a missing bag before leaving the airport',
      body:
        'If the bag does not arrive, create a mishandled-baggage report, verify the delivery address and contact details, save the file reference, and keep receipts for reasonable necessary purchases.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The destination code names a different airport',
      description:
        'This is a routing problem, not a cosmetic typo, unless the airline confirms that the listed airport is an intentional collection point.',
      severity: 'warning',
    },
    {
      title: 'Your receipt belongs to another passenger or bag',
      description:
        'A different name or tag number can prevent reliable tracking and may indicate that two bags were labeled or documented incorrectly.',
      severity: 'warning',
    },
    {
      title: 'Your itinerary changed after the tag was printed',
      description:
        'Rebooking the passenger does not prove that an accepted bag was updated to the new flights or destination.',
      severity: 'warning',
    },
    {
      title: 'The bag has already entered the conveyor system',
      description:
        'Airline staff may have a limited opportunity to intercept it before sorting or loading continues.',
      severity: 'warning',
    },
    {
      title: 'Several active-looking routing labels remain attached',
      description:
        'Remove obsolete airline tags and barcode stickers before the bag is accepted so the current routing is unambiguous.',
      severity: 'caution',
    },
    {
      title: 'The bag unexpectedly stops at a connection',
      description:
        'Ask whether customs, separate tickets, or the absence of an airline baggage agreement requires you to collect and recheck it.',
      severity: 'warning',
    },
    {
      title: 'The bag is absent or tracked to another airport',
      description:
        'File a report before leaving the arrival airport and retain both the baggage receipt and the airline’s file reference.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Which part of the baggage tag shows the destination?',
      answer:
        'The most prominent three-letter airport code usually identifies the tagged destination. Other airport and flight codes may appear as part of the routing, so ask an agent if you are unsure which code is the collection point.',
    },
    {
      question: 'How can I verify an unfamiliar airport code?',
      answer:
        'Compare it with the full airport name on your itinerary and use IATA’s official airport code search. This matters in cities served by several airports.',
    },
    {
      question: 'Why would my bag be tagged only to a connecting airport?',
      answer:
        'You may need to collect and recheck it because of customs, separate tickets, a stopover, or the baggage-transfer policies of the airlines involved. Confirm that this is intentional before the bag is accepted.',
    },
    {
      question: 'Does a final-destination tag mean I never collect the bag during a connection?',
      answer:
        'No. Travelers entering the United States commonly retrieve baggage at the first U.S. entry point and return it for the connecting flight. Preclearance and certain approved transfer processes are exceptions, so follow route-specific instructions.',
    },
    {
      question: 'Can old baggage tags really cause a problem?',
      answer:
        'Yes. The U.S. Department of Transportation advises removing tags from earlier trips because they may contribute to a bag going astray. Remove airline routing labels, not your personal identification tag.',
    },
    {
      question: 'How do I know a corrected baggage tag is actually fixed?',
      answer:
        'The obsolete tag should be removed or clearly voided, the active destination should match the airline’s handling plan, and the claim receipt should carry the same bag-tag number as the attached label.',
    },
    {
      question: 'Can the airline fix the destination after the bag is on the belt?',
      answer:
        'It may be able to intercept or reroute the bag, but that is not guaranteed. Tell an agent immediately and provide the bag-tag number rather than waiting to see where the bag arrives.',
    },
    {
      question: 'What if the tag is correct but the claim receipt is wrong?',
      answer:
        'Do not leave the counter until the airline scans the attached tag and confirms which baggage record belongs to you. Ask for a receipt that matches the tag on your bag.',
    },
    {
      question: 'What should I do if the bag does not arrive?',
      answer:
        'Report it to airline personnel before leaving the airport. Get a file reference, confirm where the bag should be delivered, keep the tag receipt, and save receipts for reasonable necessary purchases.',
    },
    {
      question: 'Will the airline reimburse expenses caused by a delayed bag?',
      answer:
        'U.S. Department of Transportation guidance says airlines must compensate reasonable, verifiable, actual incidental expenses, subject to applicable liability limits. Eligibility and documentation depend on the itinerary and circumstances, and failing to collect and recheck when required can affect certain baggage-fee refund rights.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of Transportation',
      title: 'Lost, Delayed, or Damaged Baggage',
      url: 'https://www.transportation.gov/lost-delayed-or-damaged-baggage',
      sourceType: 'government',
      notes:
        'Explains baggage destination tags and identification receipts, prompt reporting, airline tracing duties, incidental-expense reimbursement, liability limits, and exceptions when travelers fail to collect and recheck baggage as required.',
    },
    {
      publisher: 'U.S. Department of Transportation',
      title: 'Fly Rights',
      url: 'https://www.transportation.gov/airconsumer/fly-rights',
      sourceType: 'government',
      notes:
        'Advises passengers to retain claim stubs, remove tags from previous trips, report missing bags before leaving, and recognize that customs or a lack of an interline agreement may make an intermediate airport the baggage endpoint.',
    },
    {
      publisher: 'U.S. Customs and Border Protection',
      title: 'Checking my baggage through to my final destination',
      url: 'https://www.help.cbp.gov/s/article/Article-1244?language=en_US',
      sourceType: 'government',
      notes:
        'Explains the usual requirement to retrieve baggage when entering the United States from overseas, take it through CBP, and return it to the airline for a connecting flight.',
    },
    {
      publisher: 'U.S. Customs and Border Protection',
      title: 'What is U.S. Customs and Border Protection Preclearance?',
      url: 'https://www.help.cbp.gov/s/article/Article-1333?language=en_US',
      sourceType: 'government',
      notes:
        'Explains that travelers processed at a CBP preclearance airport bypass CBP inspection on U.S. arrival and proceed to their connection or destination.',
    },
    {
      publisher: 'International Air Transport Association',
      title: 'Hold Baggage (HB) Security Procedures',
      url: 'https://www.iata.org/contentassets/1998554ac6624b97a2de8418938eaade/hold-baggage-security-procedures-2024.pdf',
      sourceType: 'standards_body',
      notes:
        'Describes baggage and passenger association through tag numbers and explains that bags are sorted for flights using flight and destination information expressed with IATA airport codes.',
    },
    {
      publisher: 'International Air Transport Association',
      title: 'Airline and Airport Codes Search',
      url: 'https://www.iata.org/en/publications/directories/code-search/',
      sourceType: 'standards_body',
      notes: 'Provides IATA’s official search tool for verifying three-letter airport codes.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Airline baggage service desk',
      description:
        'Airline staff can scan the tag, confirm its electronic routing, replace an incorrect label, attempt an intercept, or create a mishandled-baggage report.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Airline bag tracker',
      description:
        'Use the baggage claim number to review available scan events and detect whether the bag was loaded, transferred, or sent to another airport.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'IATA Airport Code Search',
      description:
        'This official lookup helps confirm which airport a three-letter code identifies, especially in metropolitan areas with multiple airports.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Tag receipt and current bag photo',
      description:
        'A readable receipt and a recent photo showing the suitcase’s color, size, brand, and identifying features can help airline staff trace a mishandled bag.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'bag-not-checked-through',
      anchorText: 'Is my bag checked through to the final destination?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'connection-on-separate-tickets',
      anchorText: 'Do separate tickets change where I collect my bag?',
      relationshipType: 'cause',
    },
    {
      slug: 'short-layover',
      anchorText: 'Is my layover long enough to collect and recheck a bag?',
      relationshipType: 'related',
    },
  ],
};
