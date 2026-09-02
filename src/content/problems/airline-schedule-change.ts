import type { ProblemSeed } from '../types';

export const airlineScheduleChange: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'tickets-and-check-in',
  slug: 'airline-schedule-change',
  canonicalPath: '/travel/air-travel/tickets-and-check-in/airline-schedule-change/',
  name: 'Airline schedule change',
  eyebrow: 'Travel · Air Travel · Tickets & Check-In',

  h1: 'Can I Ignore an Airline Schedule Change?',
  seoTitle: 'Airline Changed Your Flight? Check Rebooking and Refund Options',
  metaDescription:
    'A small flight-time change may need no action, but broken connections and significant changes can open free rebooking or refund options. Check before accepting.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep the new itinerary?',
  canIUseItLabel: 'Yes, after you verify every segment',

  shortAnswer:
    'Probably not. A tiny time shift can be left alone after you verify the new itinerary, but a broken connection, airport change, added stop, cabin downgrade, or major time change needs action. If the change meets federal significant-change rules and you do not accept the replacement, you may be entitled to a refund.',

  whyItMattersHeading: 'The Email May Have Changed More Than the Flight Time',
  whyItMatters: [
    'Airlines often update or rebook reservations automatically. The replacement may be perfectly usable, but you need to compare the complete trip—not just the changed flight. Check the date, airports, final arrival, connections, operating carrier, cabin, seats, and paid extras.',
    'For covered flights to, from, or within the United States, federal rules define several changes as significant. These include leaving the origin at least three hours earlier or reaching the final destination at least three hours later on a domestic itinerary, with a six-hour standard for international itineraries. Airport changes, added connections, and cabin downgrades can also qualify. Free alternative travel is commonly offered but is not universally required by DOT, so the airline’s policy still matters.',
  ].join('\n\n'),

  redFlagsHeading: 'Contact the Airline or Ticket Seller Now If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Checked against current DOT refund guidance, federal refund regulations, and official airline schedule-change policies for rebooking, deadlines, and connections.',
  disclaimer:
    'This page summarizes U.S. federal refund rules for covered flights. Airline contracts and non-U.S. passenger-rights regimes may provide different or additional remedies.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'ten-minute-time-shift',
      label: 'The flight moved by about ten minutes',
      shortDescription:
        'The date, airports, route, cabin, connections, and final arrival still work, and the airline shows the updated reservation as confirmed.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This can usually be left alone',
      resultBody:
        'A small time adjustment does not by itself create a federal refund right. If the entire confirmed itinerary still works and the airline does not request a response, there may be nothing else to do.',
      recommendedAction:
        'Save the updated itinerary and check it again before travel. Make sure any calendar entry or airport transportation plan uses the new time.',
    },
    {
      slug: 'minor-change-breaks-connection',
      label: 'A small change makes the connection invalid',
      shortDescription:
        'The time shift is modest, but the arriving flight now lands too late for the next confirmed segment or falls below the airline’s connection requirement.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The size of the time change no longer matters',
      resultBody:
        'An itinerary that cannot be completed needs correction even when the first flight moved only slightly. Some airlines specifically treat a schedule change that causes a misconnection as eligible for protected rebooking.',
      recommendedAction:
        'Ask the airline or ticket seller to restore a valid itinerary under its schedule-change policy. Do not pay for a voluntary change until it explains the protected options.',
    },
    {
      slug: 'significant-domestic-time-change',
      label: 'A domestic trip leaves much earlier or arrives much later',
      shortDescription:
        'The itinerary now leaves the origin at least three hours earlier or reaches the final destination at least three hours later.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'You have a federal refund choice',
      resultBody:
        'DOT treats this as a significant change for a covered domestic itinerary. If you do not accept the changed flight, replacement travel, voucher, or other compensation, a full refund is due.',
      recommendedAction:
        'Compare the offered itinerary with other flights. Accept it only if it works; otherwise choose an eligible rebooking or clearly reject it and request the refund to the original payment method.',
    },
    {
      slug: 'significant-international-time-change',
      label: 'An international trip leaves much earlier or arrives much later',
      shortDescription:
        'The itinerary now leaves the origin at least six hours earlier or reaches the final destination at least six hours later.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'The change meets the federal international threshold',
      resultBody:
        'For a covered international itinerary, this is a significant change under DOT rules. You may decline the changed trip and alternative compensation and receive a refund.',
      recommendedAction:
        'Review every international and domestic segment before responding. If the new itinerary is unacceptable, decline it and preserve copies of the original schedule, notice, and refund choice.',
    },
    {
      slug: 'origin-or-destination-airport-changed',
      label: 'The origin or destination airport changed',
      shortDescription:
        'The replacement leaves from another airport or arrives at a different airport, even if the new airport serves the same metro area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A nearby airport is still a significant change',
      resultBody:
        'DOT includes a different origin or destination airport in its significant-change definition. You do not have to treat extra ground transportation, parking, or transfer arrangements as equivalent to the original booking.',
      recommendedAction:
        'Ask for a suitable flight using the original airports, or decline the change and choose a refund if you no longer want to travel.',
    },
    {
      slug: 'added-connection-or-cabin-downgrade',
      label: 'The airline added a connection or lowered the cabin',
      shortDescription:
        'A nonstop trip now connects, the itinerary has more connection points, or the passenger was moved to a lower class of service.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'These are federally significant changes',
      resultBody:
        'Added connection points and an involuntary downgrade to a lower cabin are significant changes under DOT rules. If you travel after a downgrade, the airline must refund the fare difference rather than the full airfare.',
      recommendedAction:
        'Decide whether the replacement is acceptable. If not, reject it and choose a refund; if you fly in the lower cabin, keep the records needed to claim the fare difference.',
    },
    {
      slug: 'disability-accessibility-change',
      label: 'The new route or aircraft removes needed accessibility',
      shortDescription:
        'A traveler with a disability was routed through different connecting airports or moved to an aircraft without an accessibility feature needed for the trip.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Contact the airline before accepting',
      resultBody:
        'Federal rules provide specific refund protection when a traveler with a disability declines certain connecting-airport, aircraft, or downgrade changes that remove needed accessibility. Others on the same reservation may also qualify if they will not continue without that traveler.',
      recommendedAction:
        'Tell the airline which feature or routing is needed and ask for an accessible alternative. If none is acceptable, notify it that the changed itinerary is declined and request the applicable refund.',
    },
    {
      slug: 'airline-set-response-deadline',
      label: 'The notice includes a response deadline',
      shortDescription:
        'The airline asks you to accept, rebook, or decline the replacement by a stated date or time.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not let the offer expire by accident',
      resultBody:
        'DOT allows airlines to set deadlines for accepting alternative transportation. Silence does not safely preserve the replacement indefinitely, and an automatic refund after you do not travel will not get you to your destination.',
      recommendedAction:
        'Respond through the airline’s official channel before its deadline. Save the confirmation showing whether you accepted, rebooked, or declined the itinerary.',
    },
    {
      slug: 'ticket-bought-through-agency',
      label: 'A travel agency or booking site issued the ticket',
      shortDescription:
        'The airline changed the flight, but the reservation was purchased through an online agency, corporate service, or travel agent.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The seller may need to handle the ticket',
      resultBody:
        'The merchant of record shown on your payment statement is responsible for an airfare refund when one is due. The airline may display the change while directing ticket servicing back to the company that issued the ticket.',
      recommendedAction:
        'Contact the ticket seller and identify the merchant of record. Ask for the available schedule-change options rather than making a new paid booking on your own.',
    },
    {
      slug: 'separately-ticketed-connection',
      label: 'The change affects a separately ticketed connection',
      shortDescription:
        'The changed flight and the onward flight are on different reservations or independently purchased tickets.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The other ticket may not be protected',
      resultBody:
        'A schedule change on one reservation does not automatically update an independently issued ticket. The companies involved may treat the bookings separately if the new timing causes a missed connection.',
      recommendedAction:
        'Check both reservations now. Ask each seller what protection applies before changing or canceling either ticket, and compare the cost of a protected rebooking with replacing the separate segment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The active reservation may no longer match your original receipt',
      description:
        'The airline may have replaced a flight, changed its time, or built a different itinerary while leaving the reservation confirmed.',
      severity: 'info',
      chainLabel: 'Original plan becomes an updated booking',
    },
    {
      stageLabel: 'IF YOU CHECK ONLY THE FIRST FLIGHT',
      title: 'A downstream problem can remain hidden',
      description:
        'The first segment may look acceptable while a connection, final arrival, airport, operating carrier, seat, or cabin has changed.',
      severity: 'caution',
      chainLabel: 'Small change affects the whole trip',
    },
    {
      stageLabel: 'IF THE OFFER HAS A DEADLINE',
      title: 'Your preferred alternative may stop being available',
      description:
        'Airlines do not have to hold a rebooking offer indefinitely. Seats can also disappear while you wait, even when another option was initially displayed.',
      severity: 'warning',
      chainLabel: 'Delay reduces the available choices',
    },
    {
      stageLabel: 'IF YOU DO NOT RESPOND OR TRAVEL',
      title: 'A refund may replace the trip rather than preserve it',
      description:
        'For a qualifying significant change, an automatic refund can become due when you reject the alternative or do not respond and do not take the flight. That does not reserve another flight for you.',
      severity: 'warning',
      chainLabel: 'Silence can end the itinerary',
    },
    {
      stageLabel: 'AT DEPARTURE',
      title: 'The old schedule is no longer usable',
      description:
        'Arriving for the original flight does not restore it. You may miss the active flight, discover an invalid connection, or trigger the ticket’s no-show rules.',
      severity: 'warning',
      chainLabel: 'Unreviewed change disrupts travel',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A ten-minute shift leaves the entire confirmed itinerary workable',
      ignoreAnswer: 'Yes, after checking',
      severity: 'info',
      whatToDo:
        'Save the updated confirmation and use the new time for check-in, transportation, and calendar reminders.',
    },
    {
      situation: 'The airline says the replacement is confirmed and no response is required',
      ignoreAnswer: 'Yes, if every segment works',
      severity: 'info',
      whatToDo:
        'Verify the complete itinerary, including airports, connections, final arrival, cabin, seats, and paid services.',
    },
    {
      situation: 'The email contains an acceptance or rebooking deadline',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Make and document your choice through the airline or ticket seller before the stated deadline.',
    },
    {
      situation: 'The revised timing creates an invalid or impractical connection',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Request a protected itinerary with a valid connection. Check whether bags, immigration, security, or an airport transfer add further steps.',
    },
    {
      situation: 'The change meets a federal significant-change condition',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Choose deliberately between keeping the trip, accepting alternative travel, or declining the change for a refund.',
    },
    {
      situation: 'Seats or paid extras disappeared after the rebooking',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Contact the airline, ask it to restore the purchased service where possible, and confirm which unused ancillary fees will be refunded.',
    },
    {
      situation: 'An agency-issued ticket shows different information on the airline and agency sites',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Contact the issuing seller and have it reconcile and reissue the ticket before relying on either display.',
    },
    {
      situation: 'The onward connection is on a separate ticket',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Review both reservations and contact both sellers before canceling, accepting, or purchasing replacement travel.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Compare the old and new itineraries line by line',
      body:
        'Check the travel date, departure and arrival times, airport codes, flight numbers, final arrival, number of connections, operating carriers, and cabin. Do not rely only on the change summary in the email.',
    },
    {
      title: 'Recheck every connection',
      body:
        'Confirm that each connection remains valid and realistic for the airport and itinerary. Account for terminal or airport changes, immigration, security, and any required baggage collection and recheck.',
      destinationProblemSlug: 'short-layover',
    },
    {
      title: 'Verify seats and paid services',
      body:
        'Look for missing seat assignments, cabin downgrades, baggage purchases, upgrades, pet reservations, accessibility arrangements, and other services that may not have transferred to the replacement flight.',
    },
    {
      title: 'Choose accept, rebook, or refund',
      body:
        'Use the airline’s official manage-trip tool or contact channel. If you want a refund, do not accept a voucher or replacement flight without understanding how that choice affects the cash-refund option.',
    },
    {
      title: 'Contact the company that issued the ticket',
      body:
        'If a travel agency or booking site handled payment, start there and check your statement to identify the merchant of record. Ask for written confirmation of the final itinerary or refund.',
    },
    {
      title: 'Protect any separately ticketed connection',
      body:
        'Contact both ticket sellers and explain that an airline-initiated change affected the connection. Do not assume either reservation will be adjusted automatically.',
      destinationProblemSlug: 'connection-on-separate-tickets',
    },
    {
      title: 'Save evidence and escalate an unresolved refund',
      body:
        'Keep the original itinerary, change notice, replacement offer, receipts, and response confirmation. Complain to the airline or ticket agent first, then use the DOT air travel complaint process if a covered refund remains unresolved.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The notice gives you a response deadline',
      description:
        'Waiting can cause an offered flight to expire or leave you without a confirmed travel plan.',
      severity: 'warning',
    },
    {
      title: 'The new flights no longer connect',
      description:
        'Ask for correction as soon as you identify an invalid connection rather than waiting for airport staff to repair the itinerary.',
      severity: 'danger',
    },
    {
      title: 'The origin or destination airport changed',
      description:
        'Verify the airport code carefully. Airports serving the same city can require substantially different transportation and check-in plans.',
      severity: 'warning',
    },
    {
      title: 'A nonstop became a connecting trip',
      description:
        'Added connection points are a significant change under federal refund rules for covered itineraries.',
      severity: 'warning',
    },
    {
      title: 'You were moved to a lower cabin',
      description:
        'You may decline the significant change, or travel and seek the required refund of the fare difference.',
      severity: 'warning',
    },
    {
      title: 'The new route or aircraft removes needed accessibility',
      description:
        'Tell the airline exactly what feature or assistance is needed and request an accessible alternative before accepting the change.',
      severity: 'danger',
    },
    {
      title: 'The airline and ticket seller show different itineraries',
      description:
        'A displayed reservation may not be correctly ticketed. Have the issuing seller confirm and reissue the final record.',
      severity: 'warning',
    },
    {
      title: 'Departure is approaching and the reservation is unresolved',
      description:
        'Stop waiting for another automated email. Contact the seller and operating airline with the confirmation and ticket numbers available.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does every airline schedule change qualify for a refund?',
      answer:
        'No. A small time shift alone generally does not create a federal refund right. The change may still qualify because it changes an airport, adds connections, lowers the cabin, or meets an airline’s more generous policy.',
    },
    {
      question: 'What counts as a significant domestic time change?',
      answer:
        'For a covered domestic itinerary, DOT includes a departure from the origin at least three hours earlier or an arrival at the final destination at least three hours later.',
    },
    {
      question: 'What is the international time threshold?',
      answer:
        'For a covered international itinerary, DOT uses six hours for an earlier departure from the origin or a later arrival at the final destination.',
    },
    {
      question: 'Does a much later departure automatically meet the federal time test?',
      answer:
        'The federal definition focuses on leaving the origin earlier and reaching the final destination later. A later departure may still qualify if the final arrival crosses the threshold or another significant-change condition applies.',
    },
    {
      question: 'Is the airline required to put me on another flight for free?',
      answer:
        'DOT’s refund rule does not universally require alternative transportation. Airlines commonly offer protected rebooking, but the eligible flights, dates, airports, and carriers depend on the airline’s policy.',
    },
    {
      question: 'Can I just show up at the original flight time?',
      answer:
        'No. The original schedule may no longer exist, and the replacement could leave earlier. Use the active itinerary confirmed by the airline or ticket seller.',
    },
    {
      question: 'What happens if I do not respond to a significant-change offer?',
      answer:
        'The airline may set a deadline for accepting its offer. If you do not respond and do not take the changed or alternative flight, an automatic refund may become due, but your travel will not be preserved.',
    },
    {
      question: 'Who issues the refund when I booked through an online travel agency?',
      answer:
        'The merchant of record shown on your payment statement is responsible for the airfare refund when one is due. Contact the ticket agent first if it handled the charge.',
    },
    {
      question: 'Will a refund include taxes, seats, and baggage fees?',
      answer:
        'A full refund due under the federal rule includes the unused airfare, taxes, and ancillary fees. Paid services that were not provided through no fault of the traveler are also subject to refund requirements.',
    },
    {
      question: 'How quickly is a required refund supposed to arrive?',
      answer:
        'Federal rules define a prompt refund as within seven business days for credit-card purchases and within twenty calendar days for cash, check, debit-card, or other payment methods.',
    },
    {
      question: 'Can I take the replacement flight and request a full refund later?',
      answer:
        'Generally, no. If you choose to travel on the significantly changed flight or an accepted alternative, the DOT rule does not provide a full airfare refund for that change.',
    },
    {
      question: 'What if the new schedule breaks a separate-ticket connection?',
      answer:
        'Contact both ticket sellers. The schedule change on one reservation does not automatically protect or modify the other ticket, and changing one booking may affect your options on the other.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Electronic Code of Federal Regulations',
      title: '14 CFR 260.2 — Definitions',
      url: 'https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-260/section-260.2',
      sourceType: 'regulation',
      notes:
        'Defines covered flights, merchants of record, prompt refunds, and the conditions that make an airline-initiated delay or itinerary change significant.',
    },
    {
      publisher: 'Electronic Code of Federal Regulations',
      title:
        '14 CFR 260.6 — Refunding fare for flights cancelled or significantly delayed or changed by carriers',
      url: 'https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-260/section-260.6',
      sourceType: 'regulation',
      notes:
        'Requires full and prompt refunds when consumers decline qualifying changes and explains automatic refunds, alternative offers, and protections involving travelers with disabilities.',
    },
    {
      publisher: 'U.S. Department of Transportation',
      title: 'Refunds',
      url: 'https://www.transportation.gov/individuals/aviation-consumer-protection/refunds',
      sourceType: 'government',
      notes:
        'Gives consumer guidance on significant changes, refund choices, response deadlines, ancillary fees, automatic refunds, and merchant-of-record responsibility.',
    },
    {
      publisher: 'Delta Air Lines',
      title: 'Schedule Changes',
      url: 'https://www.delta.com/us/en/change-cancel/schedule-changes',
      sourceType: 'industry',
      notes:
        'Describes Delta-specific schedule-change notifications, automatic rebooking, self-service alternatives, refunds, minor changes, missed connections, and third-party bookings.',
    },
    {
      publisher: 'Southwest Airlines',
      title: 'Southwest Changed My Flight',
      url: 'https://support.southwest.com/helpcenter/article/options-if-southwest-changes-my-flight?clk=HC_Path_DisruptDelayedCancelled_SeeDetails3',
      sourceType: 'industry',
      notes:
        'Describes Southwest-specific options to keep a confirmed replacement, rebook without additional cost under its policy, choose credit, or obtain an eligible payment-method refund.',
    },
    {
      publisher: 'JetBlue',
      title: 'Flight delays, cancellations and schedule changes',
      url: 'https://www.jetblue.com/help/delays-and-cancellations',
      sourceType: 'industry',
      notes:
        'Describes JetBlue-specific handling of automatic rebooking, significant changes, added connections, cabin changes, misconnections, free alternatives, and refunds.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Original and updated itinerary copies',
      description:
        'Side-by-side records make it easier to identify changed airports, connections, cabins, arrival times, seats, and paid services.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Airline manage-trip tool',
      description:
        'Shows the active reservation and may provide protected alternatives, acceptance controls, cancellation choices, and refund eligibility.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Ticket seller or merchant-of-record support',
      description:
        'Needed when a travel agency, corporate booking provider, or online seller issued the ticket or processed the payment.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'DOT airline refund guidance and complaint process',
      description:
        'Explains federal refund rights for covered travel and provides an escalation path when an airline or ticket agent does not resolve a complaint.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'short-layover', anchorText: 'Is the new layover too short?', relationshipType: 'escalation' },
    {
      slug: 'connection-on-separate-tickets',
      anchorText: 'Are the changed flights on separate tickets?',
      relationshipType: 'related',
    },
    {
      slug: 'wrong-date-on-flight-booking',
      anchorText: 'Did you book the wrong travel date?',
      relationshipType: 'sibling',
    },
    {
      slug: 'boarding-pass-wont-load',
      anchorText: 'Did the change invalidate your boarding pass?',
      relationshipType: 'follow_up',
    },
  ],
};
