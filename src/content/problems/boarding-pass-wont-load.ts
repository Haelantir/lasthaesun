import type { ProblemSeed } from '../types';

export const boardingPassWontLoad: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'tickets-and-check-in',
  slug: 'boarding-pass-wont-load',
  canonicalPath: '/travel/air-travel/tickets-and-check-in/boarding-pass-wont-load/',
  name: "Boarding Pass Won't Load",
  eyebrow: 'Travel · Air Travel · Tickets & Check-In',

  h1: "Can I Ignore a Boarding Pass That Won't Load on My Phone?",
  seoTitle: "Boarding Pass Won't Load? Fix It Before You Miss Your Flight",
  metaDescription:
    'A mobile boarding pass that will not load is usually fixable. Learn when an offline copy is enough and when to use a kiosk, counter, or gate agent now.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I still fly?',
  canIUseItLabel: 'Yes, but resolve it before boarding',

  shortAnswer:
    'Probably not. A loading failure usually has a straightforward backup, such as the airline website, a saved pass, a kiosk, a counter, or an agent, but you still need valid boarding authorization before the airline’s cutoff.',

  whyItMattersHeading: 'The App Is Optional, but Boarding Authorization Is Not',
  whyItMatters: [
    'Your ticket, check-in status, and boarding pass are related but not interchangeable. A confirmed ticket does not always mean check-in is complete, and an old pass may become invalid after a flight or seat change. Confirm the current flight and check-in status instead of assuming this is only an app glitch.',
    'Some TSA checkpoints can electronically confirm flight details from your ID without requiring you to display the pass. Do not count on that at every checkpoint, and it does not eliminate the airline’s boarding requirements. This is mainly a timing problem rather than a physical safety problem: waiting too long can leave you behind a security line or outside the airline’s check-in or boarding cutoff.',
  ].join('\n\n'),

  redFlagsHeading: 'Get Airline Help Now If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Checked against current TSA and DOT guidance plus official airline instructions on mobile passes, airport printing, check-in methods, and boarding cutoffs.',
  disclaimer:
    'Airline, airport, and international document procedures vary. Follow the operating airline’s current instructions and directions from airport staff.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'check-in-not-open-yet',
      label: 'Check-in has not opened yet',
      shortDescription:
        'The trip is still upcoming, and the airline has not started issuing boarding passes for the flight.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Nothing may be wrong',
      resultBody:
        'Airlines generally issue boarding passes only after check-in becomes available. A pass that is missing before then is not evidence of a broken reservation.',
      recommendedAction:
        'Confirm that the reservation appears correctly, then try again when the operating airline opens check-in.',
    },
    {
      slug: 'offline-copy-opens',
      label: 'A current copy opens from your wallet or the airline’s offline storage',
      shortDescription:
        'The app’s live page fails, but a saved copy displays the correct passenger, flight, date, and complete barcode.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Use the valid saved copy',
      resultBody:
        'You do not need the live app page if the airline-supported offline pass is current, complete, and accepted at your airports.',
      recommendedAction:
        'Open it before joining the line, raise the screen brightness, and keep the confirmation code available as a backup.',
    },
    {
      slug: 'browser-or-email-copy-works',
      label: 'The pass works through the airline website or email',
      shortDescription:
        'The app will not load, but the operating airline’s website or boarding-pass message displays a current scannable pass.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The app failure does not matter',
      resultBody: 'The usable boarding pass matters, not which airline channel displayed it.',
      recommendedAction:
        'Save the working pass to the device or print it. Verify the flight and passenger details before relying on it.',
    },
    {
      slug: 'kiosk-or-counter-available',
      label: 'You are checked in and can reach an airline kiosk or counter',
      shortDescription:
        'The phone copy is unavailable, but there is still enough time to obtain a paper pass before security.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Stop troubleshooting and print one',
      resultBody:
        'Major airlines provide airport channels for retrieving reservations and printing boarding passes. The risk comes from delaying until those channels or check-in options close.',
      recommendedAction:
        'Take your ID and confirmation code to the operating airline’s kiosk or check-in desk.',
    },
    {
      slug: 'tsa-cat-validates-flight',
      label: 'TSA electronically validates your flight from your ID',
      shortDescription:
        'A TSA officer confirms that the checkpoint’s system can retrieve your current reservation without seeing the pass.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'You may clear security, but the gate still matters',
      resultBody:
        'Credential Authentication Technology can electronically validate flight information at equipped checkpoints. That does not guarantee you can board without resolving the pass with the airline.',
      recommendedAction:
        'Follow the officer’s directions, then visit the airline’s gate agent before boarding begins.',
    },
    {
      slug: 'at-gate-or-boarding-soon',
      label: 'The phone is dead or the pass will not open at the gate',
      shortDescription: 'You are already airside, and boarding is underway or approaching.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Tell the gate agent now',
      resultBody:
        'Continuing to restart the app or search for a charger can cost the remaining opportunity to verify your reservation. Airlines enforce gate deadlines even when a passenger has a technical problem.',
      recommendedAction:
        'Go directly to the gate desk with your photo ID and confirmation code. Explain that you are checked in but cannot display the pass.',
    },
    {
      slug: 'flight-was-changed',
      label: 'The flight, seat, or itinerary changed',
      shortDescription:
        'The pass disappeared or stopped working after a delay, cancellation, rebooking, standby change, or seat update.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The old pass may no longer be valid',
      resultBody:
        'The missing pass may reflect a changed reservation rather than a phone problem. You need the boarding authorization for the flight you are currently booked to take.',
      recommendedAction:
        'Retrieve the updated trip through the operating airline or ask a kiosk or agent to confirm the active flight and issue a new pass.',
    },
    {
      slug: 'document-check-required',
      label: 'The airline requires an in-person document check',
      shortDescription:
        'Online check-in stops at passport, visa, destination-document, infant, pet, or other manual verification.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The pass is being withheld for a reason',
      resultBody:
        'Some itineraries require the airline to inspect travel documents or complete another check-in step before issuing a boarding pass.',
      recommendedAction:
        'Bring the required documents to the operating airline’s counter and allow enough time for verification and security.',
    },
    {
      slug: 'mobile-pass-not-accepted',
      label: 'The departure or connecting airport does not accept the mobile pass',
      shortDescription:
        'The airline indicates that a printed pass is required at one of the airports on the itinerary.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Get a paper pass',
      resultBody:
        'Mobile-pass availability can depend on the airport and itinerary. A perfectly working phone does not override a location that requires printed documents.',
      recommendedAction:
        'Print before leaving if possible, or obtain a paper pass from the airline’s designated counter or kiosk.',
    },
    {
      slug: 'barcode-will-not-scan',
      label: 'The pass appears, but the barcode cannot be scanned',
      shortDescription:
        'The barcode is cropped, obscured, outdated, too damaged to display, or repeatedly rejected by a scanner.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A visible pass is not enough if it cannot be validated',
      resultBody:
        'Security and boarding systems need a readable, current record. Repeated scan failure can indicate a display problem or an invalidated pass.',
      recommendedAction:
        'Try the official website or wallet copy once, then ask the airline to issue a paper or replacement pass.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The phone cannot display a usable pass',
      description:
        'The reservation may still be fine, but you have lost one way to prove your current check-in and boarding status.',
      severity: 'caution',
      chainLabel: 'Mobile access fails',
    },
    {
      stageLabel: 'IF YOU KEEP RETRYING',
      title: 'A simple fallback turns into a time problem',
      description:
        'Reinstalling apps, resetting passwords, and hunting for airport Wi-Fi can consume time better spent at a kiosk or with an agent.',
      severity: 'caution',
      chainLabel: 'Time is lost',
    },
    {
      stageLabel: 'AT THE CHECKPOINT',
      title: 'Your flight status must be validated',
      description:
        'TSA may validate the boarding pass manually or electronically. If the available lane cannot resolve it, you may be directed back to the airline.',
      severity: 'warning',
      chainLabel: 'Security progress stops',
    },
    {
      stageLabel: 'AT THE AIRLINE’S CUTOFF',
      title: 'Your reservation can be affected',
      description:
        'Airlines set their own check-in, document-verification, and gate deadlines. Failure to complete the required steps can result in cancellation or rebooking.',
      severity: 'warning',
      chainLabel: 'The seat is at risk',
    },
    {
      stageLabel: 'WHEN BOARDING CLOSES',
      title: 'You miss the flight',
      description:
        'A valid ticket does not require the airline to reopen boarding after its deadline. The next step may be rebooking, with availability and costs depending on the fare and circumstances.',
      severity: 'danger',
      chainLabel: 'Boarding is lost',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Check-in has not opened for the flight',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Confirm the reservation and wait until the operating airline opens check-in.',
    },
    {
      situation: 'A current airline-supported offline or wallet pass opens correctly',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Verify the passenger, flight, date, and barcode, then keep the confirmation code accessible.',
    },
    {
      situation: 'The airline website or emailed pass works even though the app does not',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Save or print the working version and use that instead of the app.',
    },
    {
      situation: 'You are checked in and have time to reach a kiosk or counter',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Stop working on the phone and obtain a paper pass from the operating airline.',
    },
    {
      situation: 'TSA confirms that its checkpoint can validate the flight from your ID',
      ignoreAnswer: 'Only until the gate',
      severity: 'caution',
      whatToDo: 'Clear security as directed, then ask the airline’s gate agent to confirm how you will board.',
    },
    {
      situation: 'You are at the airport before security with no working copy',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Use the operating airline’s kiosk, counter, curbside desk, or designated assistance point.',
    },
    {
      situation: 'Your phone dies after you clear security',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Go to the departure gate and speak to the airline agent. Do not leave the secure area unless staff directs you to do so.',
    },
    {
      situation: 'Boarding has started or the gate deadline is approaching',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Stop troubleshooting and identify yourself to the gate agent immediately.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm the reservation and check-in status',
      body:
        'Open the operating airline’s website in a browser and retrieve the trip with your name and confirmation code. Make sure the flight is active and the airline shows you as checked in.',
    },
    {
      title: 'Create a backup while the pass is working',
      body:
        'Add the pass to an airline-supported digital wallet or offline feature, or print it. A screenshot is a reasonable backup only when the airline accepts it and the complete current barcode remains readable.',
    },
    {
      title: 'Use the airport kiosk or check-in desk',
      body:
        'Bring your photo ID and confirmation code. A kiosk may print the pass immediately; use the airline counter if the machine cannot find the trip or requests document verification.',
    },
    {
      title: 'Ask the gate agent if you are already airside',
      body:
        'If the phone fails after security, stay near the departure gate and explain the problem. The agent can check the active reservation and tell you what is required to board.',
    },
    {
      title: 'Treat the cutoff as more important than the app',
      body:
        'Once departure is getting close, stop reinstalling, restarting, and changing passwords. Move to an airline employee who can resolve the reservation before the applicable deadline.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Boarding is already underway',
      description:
        'Go directly to the gate desk. Charging the phone or continuing to troubleshoot is now less important than making the agent aware that you are present.',
      severity: 'danger',
    },
    {
      title: 'The trip no longer shows you as checked in',
      description:
        'The issue may be with check-in or the reservation rather than the display. Have the operating airline confirm your status.',
      severity: 'warning',
    },
    {
      title: 'The flight number, date, or destination changed',
      description:
        'A saved pass may belong to the old itinerary. Obtain a pass for the active flight before joining a checkpoint or boarding line.',
      severity: 'warning',
    },
    {
      title: 'The airline requests document verification',
      description:
        'Take your passport and any required destination documents to the airline counter. Repeated app attempts will not replace an in-person check.',
      severity: 'warning',
    },
    {
      title: 'The kiosk cannot find the reservation',
      description:
        'Check that you are using the operating airline and the correct confirmation code, then speak to an agent rather than repeatedly starting over.',
      severity: 'warning',
    },
    {
      title: 'The barcode repeatedly fails to scan',
      description:
        'Confirm that the full barcode is visible and the pass is current. If another official copy also fails, ask the airline for a replacement.',
      severity: 'warning',
    },
    {
      title: 'The airport requires a printed boarding pass',
      description:
        'Follow the airline’s airport instructions and get the paper document from the specified counter or kiosk.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does having a ticket mean I am already checked in?',
      answer:
        'No. A confirmed ticket reserves travel, while check-in completes additional airline steps and normally produces boarding authorization. Check the operating airline’s current trip status.',
    },
    {
      question: 'Can TSA let me through without showing a boarding pass?',
      answer:
        'Sometimes. At a checkpoint using Credential Authentication Technology, TSA may confirm your flight from your ID. Other circumstances may require the pass to be displayed, and the airline still controls boarding.',
    },
    {
      question: 'Can I use a screenshot of my boarding pass?',
      answer:
        'Only if the airline accepts it, the pass has not changed, and the complete barcode is readable. An official wallet or offline copy is safer because some boarding information can update.',
    },
    {
      question: 'Can I print my boarding pass at the airport?',
      answer:
        'Often, yes. Many airlines offer self-service kiosks or counter assistance, but services vary by airline and airport. Use the operating airline’s facilities.',
    },
    {
      question: 'Do I need a printer at home?',
      answer:
        'Usually not. A valid mobile pass, airport kiosk, or airline counter can provide alternatives. Check the airport’s mobile-pass availability before relying on the phone alone.',
    },
    {
      question: 'What should I do if my phone dies after security?',
      answer:
        'Tell the departure gate agent immediately and have your photo ID and confirmation code ready. Do not exit the secure area to find a kiosk unless airline or airport staff tells you to.',
    },
    {
      question: 'Can another person send the boarding pass to my phone?',
      answer:
        'Yes, if the airline provides an email or text option and the pass is issued to you. Check that it is current, and avoid sharing its barcode publicly.',
    },
    {
      question: 'Why would the airline refuse to issue a mobile boarding pass?',
      answer:
        'Possible reasons include incomplete check-in, required document verification, an itinerary change, an unsupported airport, or reservation conditions that require agent assistance.',
    },
    {
      question: 'Will the airline hold the flight because its app failed?',
      answer:
        'Do not assume it will. Airlines apply check-in and boarding deadlines even when a passenger has a phone, network, or app problem.',
    },
    {
      question: 'Will a mobile boarding pass work without internet access?',
      answer:
        'It can if the airline app stores it offline or you saved it to a supported wallet. Open and verify it before arriving rather than discovering at the checkpoint that it was only a web link.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Transportation Security Administration',
      title: 'Checkpoint Requirements and Planning Guide',
      url: 'https://www.tsa.gov/sites/default/files/checkpoint-requirements-and-planning-guide.pdf',
      sourceType: 'government',
      notes:
        'Explains that passenger identification and boarding-pass status must be validated before screening and that TSA technology may validate the boarding pass electronically.',
    },
    {
      publisher: 'U.S. Department of Transportation',
      title: 'Common Terms in Air Travel',
      url: 'https://www.transportation.gov/sites/dot.gov/files/docs/CommonTermsAirTravel.pdf',
      sourceType: 'government',
      notes:
        'Explains that airlines may impose cutoffs for obtaining a boarding pass, document verification, baggage acceptance, and gate arrival, and may cancel reservations when requirements are not met.',
    },
    {
      publisher: 'American Airlines',
      title: 'Mobile boarding passes',
      url: 'https://www.aa.com/web/i18n/travel-info/travel-tools/mobile-boarding-pass.html',
      sourceType: 'industry',
      notes:
        'Describes saving a mobile pass, displaying the complete barcode, checking airport acceptance, and printing at home or from a self-service kiosk when mobile passes are unavailable.',
    },
    {
      publisher: 'Delta Air Lines',
      title: 'How to Check In',
      url: 'https://www.delta.com/us/en/check-in-security/overview',
      sourceType: 'industry',
      notes:
        'Lists online, app, airport-kiosk, check-in-desk, and curbside options. It states that kiosks can retrieve trips and print boarding passes.',
    },
    {
      publisher: 'Southwest Airlines',
      title: 'Online Check-In',
      url: 'https://support.southwest.com/helpcenter/s/article/online-checkin',
      sourceType: 'industry',
      notes:
        'Lists app, website, kiosk, Skycap, and ticket-counter check-in channels and explains that passengers must retrieve a boarding pass or security document to pass through security.',
    },
    {
      publisher: 'Alaska Airlines',
      title: 'Travel like a pro: 5 ways to ease your travel day using airport kiosks',
      url: 'https://news.alaskaair.com/alaska-airlines/kiosks/',
      sourceType: 'industry',
      notes:
        'Gives an airline-specific example of using a kiosk to reprint a boarding pass when a phone battery dies or a home printer fails.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Airline mobile website',
      description:
        'A browser can retrieve the reservation and boarding pass when the airline app is frozen, signed out, or failing to refresh.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Digital wallet or airline offline-pass feature',
      description:
        'Stores a usable copy on the device so ordinary network loss does not prevent the pass from opening.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Airport self-service kiosk',
      description:
        'Can retrieve many reservations and print a paper boarding pass without depending on the phone.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Airline counter or gate assistance',
      description:
        'Handles document checks, invalidated passes, changed itineraries, dead phones, and reservations a kiosk cannot resolve.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'name-typo-on-plane-ticket',
      anchorText: 'What if my plane ticket has a name typo?',
      relationshipType: 'sibling',
    },
    {
      slug: 'wrong-date-on-flight-booking',
      anchorText: 'What if I booked the wrong flight date?',
      relationshipType: 'related',
    },
    {
      slug: 'phone-not-charging',
      anchorText: 'What if my phone will not charge before the flight?',
      relationshipType: 'cause',
    },
    {
      slug: 'damaged-passport',
      anchorText: 'Can I travel with a damaged passport?',
      relationshipType: 'related',
    },
  ],
};
