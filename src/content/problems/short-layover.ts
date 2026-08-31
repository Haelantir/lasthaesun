import type { ProblemSeed } from '../types';

export const shortLayover: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'connections',
  slug: 'short-layover',
  canonicalPath: '/travel/air-travel/connections/short-layover/',
  name: 'Short Layover Between Flights',
  eyebrow: 'Travel · Air Travel · Connections',

  h1: 'Can I Ignore a Short Layover Between Flights?',
  seoTitle: 'Short Layover Between Flights: When the Connection Is Too Tight',
  metaDescription:
    'A short layover may work on one ticket but fail on separate tickets. Check customs, security, bag transfer, terminals, and boarding deadlines before flying.',

  aliases:
    ['/travel/air-travel/connections/tight-layover/', '/travel/air-travel/connections/short-connection/'],

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep this itinerary?',
  canIUseItLabel: 'Only after checking the transfer steps',

  shortAnswer:
    'Probably not. A short layover can be reasonable when every flight is on one ticket and the transfer stays airside, but it needs a route-specific check. Separate tickets, U.S. entry processing, bag recheck, security, or a terminal or airport change can turn the same schedule into a likely misconnection.',

  whyItMattersHeading: 'Why a short layover needs a real check',
  whyItMatters: [
    'The listed layover is not all usable transfer time. You must get off the first aircraft, follow signs, reach the next gate, and arrive before the airline’s boarding deadline. Immigration, customs, security screening, bag claim and drop, or terminal transit can consume the buffer. The applicable minimum connection time varies by airport, airlines, and transfer type.',
    'One ticket and separate tickets are not equivalent. A single-ticket connection is sold as a connected itinerary, although it is not a promise that every delay will work. With separate tickets, minimum connection time rules may not apply, bags may stop at the connecting airport, and the next carrier may treat a late arrival as a no-show.',
  ].join('\n\n'),

  redFlagsHeading: 'Change the Plan or Ask the Airline Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked IATA, DOT, TSA, CBP, and airline guidance on minimum connection times, transfer formalities, baggage, deadlines, and separate-ticket risk.',
  disclaimer:
    'Connection procedures and airline remedies vary by airport, route, ticket, carrier, and disruption cause. Confirm the current itinerary with the operating airlines and airports.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'same-ticket-airside-transfer',
      label: 'One ticket with a simple airside domestic transfer',
      shortDescription:
        'Both flights are on one connected ticket, you already have the next boarding pass, and you do not need customs, bag claim, or another security checkpoint.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'This may be a workable connection',
      resultBody:
        'This is the simplest short-connection setup. If the airline issued it as a valid connection and you can remain inside the secure area, the itinerary may be reasonable, though a delay can still remove the limited buffer.',
      recommendedAction:
        'Confirm the arrival and departure terminals, verify that any checked bag is tagged to the final destination, and monitor the itinerary for schedule or gate changes.',
    },
    {
      slug: 'precleared-us-arrival',
      label: 'International arrival from a U.S. preclearance airport',
      shortDescription:
        'You complete U.S. immigration, customs, and related inspection before departure from the foreign airport.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'The U.S. connection may work like a domestic transfer',
      resultBody:
        'Travelers processed at a U.S. preclearance location generally proceed to their connection or destination without repeating CBP and TSA inspections upon U.S. arrival. Other terminal and airline requirements still apply.',
      recommendedAction:
        'Verify that your exact departure airport and flight use preclearance, that your bag is checked through, and that the connection remains inside the secure area.',
    },
    {
      slug: 'separate-tickets',
      label: 'The flights are on separate tickets',
      shortDescription:
        'The onward flight has a separate ticket even if both bookings appear in the same app, reservation, or confirmation.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a self-transfer',
      resultBody:
        'Minimum connection time used for a sold connection may not protect separately ticketed flights. The first airline may not transfer your bag or take responsibility if its delay causes you to miss the second ticket.',
      recommendedAction:
        'Allow substantially more margin, confirm baggage handling with both airlines, and consider changing the itinerary before travel if a modest inbound delay would break it.',
    },
    {
      slug: 'us-entry-processing',
      label: 'Your first U.S. arrival is not precleared',
      shortDescription: 'You arrive from another country and connect onward through your first U.S. airport.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Customs and security make this a different connection',
      resultBody:
        'Travelers generally complete CBP processing at the first U.S. port of entry. Checked baggage ordinarily must be collected and presented before being rechecked, and travelers then proceed through the required security process unless a specific exception applies.',
      recommendedAction:
        'Check the airport’s international connection instructions and choose more connection time if the itinerary leaves little room for immigration, baggage, customs, and security.',
    },
    {
      slug: 'bag-not-through-checked',
      label: 'Your checked bag will not transfer automatically',
      shortDescription:
        'The bag tag ends at the connecting airport, or an airline says you must collect and check the bag again.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Bag claim and check-in cutoffs can break the itinerary',
      resultBody:
        'You must wait for the bag, leave the arrival flow, reach the next carrier’s check-in area, and meet that carrier’s baggage deadline before returning through security.',
      recommendedAction:
        'Confirm the bag’s final tag before departure. If it stops at the connection, evaluate the trip as a new airport check-in rather than an ordinary gate-to-gate transfer.',
    },
    {
      slug: 'security-or-terminal-recheck',
      label: 'The transfer requires another security checkpoint',
      shortDescription:
        'You must leave the secure area, change to an unconnected terminal, or complete a process that sends you back through security.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The posted layover may leave too little usable time',
      resultBody:
        'Security lines and terminal transport add steps that are not present in a normal airside connection. A boarding pass does not exempt you from the next flight’s gate deadline.',
      recommendedAction:
        'Use the airport’s official connection guide to trace the entire route. Change the itinerary if it depends on every line and transfer operating without delay.',
    },
    {
      slug: 'different-airports',
      label: 'The flights use different airports in the same city',
      shortDescription:
        'The arrival and departure airport codes do not match, so the transfer requires ground transportation and a fresh airport check-in.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is not a normal layover',
      resultBody:
        'You must leave one airport, collect any baggage, travel across the city, check in at another airport, and clear security again. Traffic and ground transportation add uncertainty.',
      recommendedAction:
        'Rebook with a much larger gap or use flights connecting at the same airport. Confirm visa or entry requirements if changing airports requires entering the country.',
    },
    {
      slug: 'schedule-change-shortened-connection',
      label: 'An airline schedule change shortened the layover',
      shortDescription:
        'The itinerary was reasonable when booked, but a changed arrival or departure now creates a much tighter connection.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Ask for another itinerary before travel',
      resultBody:
        'A schedule change can leave a connection that no longer works operationally even though both flights remain visible in the reservation.',
      recommendedAction:
        'Contact the airline or ticket issuer and ask whether the revised connection remains valid. Request a workable alternative rather than waiting until the day of departure.',
    },
    {
      slug: 'last-flight-onward',
      label: 'The connection is the last or only practical onward flight',
      shortDescription: 'Missing it could mean an overnight wait or a major change to the rest of the trip.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The consequence is too large for a fragile connection',
      resultBody:
        'Even a connection that sometimes works may be a poor choice when there is no useful later flight. Available rebooking may depend on seats, airline policy, and the cause of the disruption.',
      recommendedAction:
        'Choose an earlier inbound flight or a longer connection if possible, especially when a missed night, event, tour, or separate reservation would be costly.',
    },
    {
      slug: 'inbound-delay-erased-buffer',
      label: 'The first flight is already delayed',
      shortDescription:
        'The remaining connection time is shrinking while you are still at the origin, in the air, or waiting for a gate.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Start dealing with the connection now',
      resultBody:
        'The next flight’s boarding deadline does not move simply because the inbound aircraft is late. Waiting until you reach the gate can reduce the available rebooking choices.',
      recommendedAction:
        'Check the airline app for automatic changes and contact an agent as soon as the connection appears threatened. Follow airline instructions for bags and the revised itinerary.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The schedule hides unusable transfer time',
      description:
        'Deplaning and the next flight’s boarding deadline reduce the part of the layover that is actually available for moving through the airport.',
      severity: 'info',
      chainLabel: 'Transfer clock',
    },
    {
      stageLabel: 'IF THE INBOUND FLIGHT IS LATE',
      title: 'The small buffer disappears first',
      description:
        'A gate delay, taxi delay, or late arrival can consume most of a short connection before you leave the aircraft.',
      severity: 'caution',
      chainLabel: 'Less margin',
    },
    {
      stageLabel: 'IF EXTRA PROCESSING APPLIES',
      title: 'A line or cutoff can break the connection',
      description:
        'Immigration, customs, security, baggage, document checks, and terminal transportation each create another point where the transfer can fail.',
      severity: 'caution',
      chainLabel: 'Added steps',
    },
    {
      stageLabel: 'IF YOU MISS A SINGLE-TICKET CONNECTION',
      title: 'Your arrival may move to a later flight',
      description:
        'The airline may rebook the remaining journey under its contract and disruption policy, but the next option depends on available seats and the cause of the misconnection.',
      severity: 'warning',
      chainLabel: 'Rebooking',
    },
    {
      stageLabel: 'IF YOU MISS A SEPARATE-TICKET FLIGHT',
      title: 'You may be treated as a no-show',
      description:
        'The second carrier may require a new fare or apply the ticket’s missed-flight rules. Later segments attached to that second ticket may also be affected.',
      severity: 'warning',
      chainLabel: 'New cost',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One ticket, domestic airside transfer, and boarding passes ready',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Confirm the gates or terminals and verify that any checked bag is tagged through. Monitor for changes and go directly to the next gate.',
    },
    {
      situation: 'One ticket with a checked bag tagged to the final destination',
      ignoreAnswer: 'Only after checking',
      severity: 'caution',
      whatToDo:
        'Verify the destination printed on the bag receipt and confirm that the route does not require you to reclaim the bag for customs or another transfer process.',
    },
    {
      situation: 'Arrival from an airport with U.S. preclearance',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Confirm that preclearance applies to your exact flight and that no terminal, baggage, or security step remains at the connecting airport.',
    },
    {
      situation: 'First U.S. arrival from abroad without preclearance',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Plan for CBP processing, baggage handling when applicable, and the required route back to the departure gate.',
    },
    {
      situation: 'Flights issued on separate tickets',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat the second flight as a separate departure. Confirm check-in and bag deadlines and leave enough margin to absorb an inbound delay.',
    },
    {
      situation: 'Transfer requires leaving security or changing unconnected terminals',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Trace the route with the airport’s official map and include terminal transport, security, and the next carrier’s boarding deadline.',
    },
    {
      situation: 'Arrival and departure use different airports',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Rebook or allow enough margin for baggage claim, ground transportation, check-in, and security at the second airport.',
    },
    {
      situation: 'The inbound delay has removed most of the connection',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check for automatic rebooking and contact the airline before arrival if possible. Do not assume the onward aircraft will wait.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check whether this is one ticket or a self-transfer',
      body:
        'Look at the e-ticket receipt rather than relying only on the confirmation code or booking app. Ask the issuer whether all flights form one connected ticket and what happens if the inbound flight is late.',
      destinationProblemSlug: 'connection-on-separate-tickets',
    },
    {
      title: 'Trace every transfer step',
      body:
        'Use the connecting airport’s official guide to identify arrival and departure terminals, airside transport, immigration, customs, security, and any airport change. Do not judge the connection by walking distance alone.',
    },
    {
      title: 'Verify the boarding passes and bag tag',
      body:
        'Confirm that you can obtain the onward boarding pass and that the bag receipt shows the intended destination. Ask where you must collect or recheck baggage on an international itinerary.',
      destinationProblemSlug: 'bag-not-checked-through',
    },
    {
      title: 'Change a fragile itinerary before departure',
      body:
        'Contact the airline or ticket issuer if a schedule change, separate ticket, bag recheck, or border process leaves no practical margin. Rebooking early usually gives you more choices than dealing with a missed flight at the airport.',
    },
    {
      title: 'React as soon as a delay threatens the connection',
      body:
        'Watch the airline app, save both boarding passes, and contact an agent when the connection becomes doubtful. Follow the revised instructions instead of running to a gate that the airline has already removed from your itinerary.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The flights are on separate tickets',
      description:
        'The second carrier may not recognize the first flight as a protected connection, even when the airlines are partners or the bookings appear together.',
      severity: 'warning',
    },
    {
      title: 'Your bag is not tagged through',
      description:
        'Bag claim and a fresh bag drop can expose you to check-in cutoffs that do not apply during an ordinary airside transfer.',
      severity: 'warning',
    },
    {
      title: 'You enter the United States at the connecting airport',
      description:
        'Unless preclearance or another confirmed exception applies, expect CBP processing and follow the airport’s instructions for baggage and security.',
      severity: 'warning',
    },
    {
      title: 'You must leave the secure area',
      description:
        'Another security checkpoint adds an unpredictable line and reduces the usable transfer time.',
      severity: 'warning',
    },
    {
      title: 'The airport codes are different',
      description:
        'A same-city airport change requires ground transportation and should not be evaluated as a gate-to-gate layover.',
      severity: 'warning',
    },
    {
      title: 'A schedule change created the short layover',
      description:
        'Ask the ticket issuer to validate or replace the revised connection before the travel date.',
      severity: 'caution',
    },
    {
      title: 'There is no practical later flight',
      description:
        'A missed connection may become an overnight disruption, especially when later flights are full or the onward route operates infrequently.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a forty-five-minute layover enough?',
      answer:
        'Sometimes, but the number alone cannot answer it. A domestic airside transfer on one ticket is very different from a self-transfer involving customs, baggage, security, or another terminal.',
    },
    {
      question: 'Does an airline selling the connection mean it is guaranteed?',
      answer:
        'No. The itinerary may satisfy the applicable minimum connection time, but that is the shortest official transfer interval for that connection type, not a guarantee against delays or lines.',
    },
    {
      question: 'Does one confirmation number always mean one ticket?',
      answer:
        'No. Multiple tickets can sometimes appear in the same reservation. Check the e-ticket receipt or ask the airline or travel agency whether the itinerary was issued as one connected ticket.',
    },
    {
      question: 'Will my checked bag transfer automatically?',
      answer:
        'Only if the airlines accept it through to the destination and the route does not require you to reclaim it. Check the destination printed on the bag receipt instead of assuming.',
    },
    {
      question: 'Where do I clear U.S. customs on a connecting trip?',
      answer:
        'Generally at the first U.S. port of entry. Travelers arriving from a U.S. preclearance airport are normally processed before departure and can proceed to their connection after U.S. arrival.',
    },
    {
      question: 'Does Global Entry make any short international connection safe?',
      answer:
        'No. It may speed eligible CBP processing, but it does not guarantee a short connection or automatically remove baggage, security, terminal, and boarding requirements.',
    },
    {
      question: 'Are separate tickets safer if both flights use the same airline?',
      answer:
        'Not necessarily. They are still separate contracts unless the airline confirms otherwise, and through-checking or missed-connection help can depend on the carrier’s policy.',
    },
    {
      question: 'Will the connecting flight wait for passengers from a late aircraft?',
      answer:
        'Do not count on it. Airlines must manage boarding deadlines and operations, and the onward flight may close even when the inbound delay is visible.',
    },
    {
      question: 'What should I do if a schedule change creates a tight connection?',
      answer:
        'Contact the airline or ticket issuer before travel. Ask whether the revised connection remains valid and request a workable alternative if the required transfer steps no longer fit.',
    },
    {
      question: 'Does traveling with carry-on baggage solve the problem?',
      answer:
        'It removes baggage claim and bag-drop risk, but it does not eliminate deplaning, immigration, customs, security, terminal transfers, document checks, or gate deadlines.',
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
        'Advises checking connection time, airports, bag transfers, carrier terms, and backup options. It also notes boarding and check-in deadlines, misconnection risk, and the consequences of booking the last flight.',
    },
    {
      publisher: 'International Air Transport Association',
      title: 'Station Standard Minimum Connecting Time(s) (MCT)',
      url: 'https://www.iata.org/en/publications/manuals/station-standard-minimum-connecting-time-mct/',
      sourceType: 'standards_body',
      notes:
        'Defines airport Standard MCT as the shortest official interval needed to transfer a passenger and baggage between specific flights at a location.',
    },
    {
      publisher: 'U.S. Customs and Border Protection',
      title: 'Checking my baggage through to my final destination',
      url: 'https://www.help.cbp.gov/s/article/Article-1244?language=en_US',
      sourceType: 'government',
      notes:
        'Describes the standard requirement for travelers entering the United States from overseas to obtain baggage, present it through CBP processing, and recheck it for an onward flight.',
    },
    {
      publisher: 'U.S. Customs and Border Protection',
      title: 'What is U.S. Customs and Border Protection Preclearance?',
      url: 'https://www.help.cbp.gov/s/article/Article-1333?language=en_US',
      sourceType: 'government',
      notes:
        'Explains that airport preclearance completes U.S. inspection before departure and generally lets travelers bypass CBP and TSA inspections upon U.S. arrival.',
    },
    {
      publisher: 'Transportation Security Administration',
      title: 'Checkpoint Requirements and Planning Guide',
      url: 'https://www.tsa.gov/sites/default/files/checkpoint-requirements-and-planning-guide.pdf',
      sourceType: 'government',
      notes:
        'Describes the current U.S. transfer-screening framework for international arrivals and the limited One Stop Security arrangements intended to remove repeat screening for eligible routes.',
    },
    {
      publisher: 'Delta Air Lines',
      title: "Delta's Through-Checked Baggage Policy",
      url: 'https://pro.delta.com/content/agency/global/en/products-and-services/baggage/delta-s-through-check-baggage-policy-.html',
      sourceType: 'industry',
      notes:
        'States that minimum connection times apply when an itinerary is sold as a connection, warns that separate tickets can require bag claim and recheck, and limits responsibility for separately ticketed misconnections.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Airline trip-management and reservations support',
      description:
        'Use the operating airline’s app, website, or reservations team to confirm ticket status, watch schedule changes, and handle a threatened connection.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Official airport connection guide',
      description:
        'Airport maps and transfer instructions show terminal routes, airside transportation, security checkpoints, and international arrival procedures.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'CBP Airport Wait Times',
      description:
        'Historical processing data for major U.S. international airports can help with planning, although it does not include baggage claim or movement through the airport.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Connection checklist',
      description:
        'Keep the flight numbers, ticket status, terminals, boarding passes, bag destination, border steps, and backup flight options together before departure.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'connection-on-separate-tickets',
      anchorText: 'Can I ignore a connection booked on separate tickets?',
      relationshipType: 'sibling',
    },
    {
      slug: 'bag-not-checked-through',
      anchorText: 'Can I ignore a bag that is not checked through?',
      relationshipType: 'related',
    },
    {
      slug: 'boarding-pass-wont-load',
      anchorText: 'Can I ignore a boarding pass that will not load?',
      relationshipType: 'follow_up',
    },
  ],
};
