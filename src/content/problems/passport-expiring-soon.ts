import type { ProblemSeed } from '../types';

export const passportExpiringSoon: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'passports',
  slug: 'passport-expiring-soon',
  canonicalPath: '/travel/documents/passports/passport-expiring-soon/',
  name: 'Passport Expiring in Less Than Six Months',
  eyebrow: 'Travel · Travel Documents · Passports',

  h1: 'Can I Ignore a Passport That Expires in Less Than 6 Months?',
  seoTitle: 'Passport Expiring Soon: Will Airlines Let You Fly?',
  metaDescription:
    'An unexpired passport can still fail a destination or transit rule. Learn when you can travel, when to renew, and which validity date to check.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I still fly internationally?',
  canIUseItLabel: 'Only after checking every country',

  shortAnswer:
    'Do not assume an unexpired passport will work. Each destination—and sometimes a transit country—sets its own validity requirement, so an airline may deny boarding before the printed expiration date. Renew if any part of your itinerary requires more validity than you have.',

  whyItMattersHeading: 'Why “Not Expired” May Still Not Be Enough',
  whyItMatters: [
    'Six months is a common buffer, not a worldwide rule. The UK says a passport should be valid for the whole stay. The Schengen rule generally requires at least three months beyond planned departure and a passport issued within the previous ten years. Thailand requires six months beyond arrival for U.S. travelers.',
    'Airlines check travel documents before departure and may refuse boarding when a destination’s rule is not met. A connection can add another country’s requirements if the itinerary requires entry there. Renewal timing also matters: after you apply for a new U.S. passport, the old passport cannot be used for travel.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Rely on This Passport If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Passport validity, airline checks, renewal timing, and example destination rules were checked against current U.S., EU, UK, and Thai government guidance.',
  disclaimer:
    'Entry rules can change and may depend on citizenship, passport type, visa status, route, and transit arrangements. Confirm the current rules with official destination and transit authorities before travel.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'destination-rule-not-checked',
      label: 'You have not checked the destination rule',
      shortDescription: 'The passport is unexpired, but you only know that it has less than six months left.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The expiration date alone is not enough',
      resultBody:
        'The destination may require validity beyond arrival, departure, or the full trip. You cannot tell whether the passport works without checking the rule that applies to your citizenship and itinerary.',
      recommendedAction:
        'Check the destination’s official entry requirements and every country where you may pass through border control before relying on the passport.',
    },
    {
      slug: 'six-month-rule-not-met',
      label: 'The destination requires six months and you fall short',
      shortDescription: 'The official entry rule requires six months beyond a specified travel date.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Renew before this trip',
      resultBody:
        'Being unexpired does not satisfy a rule requiring additional validity. The airline may stop you at check-in, or immigration authorities may refuse entry.',
      recommendedAction:
        'Renew the passport and do not rely on an exception unless the destination’s government confirms one for your exact situation.',
    },
    {
      slug: 'schengen-validity-too-short',
      label: 'You will not have enough validity after leaving Schengen',
      shortDescription:
        'The passport will expire less than three months after your planned departure from the Schengen area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The passport does not meet the normal Schengen rule',
      resultBody:
        'For a typical short visit by a non-EU traveler, the passport generally must remain valid for at least three months after planned departure. It must also meet the issue-date requirement.',
      recommendedAction:
        'Renew before travel and confirm the rules for the first Schengen country you will enter.',
    },
    {
      slug: 'schengen-rule-met',
      label: 'Your passport meets the Schengen validity and issue-date rules',
      shortDescription:
        'It remains valid long enough after departure and was issued within the previous ten years.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Less than six months can still be enough',
      resultBody:
        'The normal Schengen requirement is not a universal six-month rule. If the passport meets the post-departure validity and issue-age tests, the expiration date alone does not block a typical short visit.',
      recommendedAction:
        'Verify the exact countries, transit points, visa or authorization requirements, and planned departure date before flying.',
    },
    {
      slug: 'valid-for-whole-stay',
      label: 'The destination only requires validity for the whole stay',
      shortDescription:
        'The official rule says the passport must remain valid through your visit, and it does.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'It may be fine for this itinerary',
      resultBody:
        'Some destinations do not impose a blanket six-month buffer. If the passport stays valid through the required period and all other entry rules are met, early expiration alone does not prevent the trip.',
      recommendedAction:
        'Save or print the official entry guidance, check transit requirements, and plan to renew before a later trip.',
    },
    {
      slug: 'domestic-us-flight',
      label: 'You are only taking a domestic U.S. flight',
      shortDescription:
        'The passport is still valid and is being used as airport identification, not for foreign entry.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The six-month issue does not apply',
      resultBody:
        'A valid U.S. passport book or passport card can be used as identification for domestic flights. Foreign passport-validity buffers are not part of domestic entry requirements.',
      recommendedAction:
        'Confirm the passport will still be valid on the travel date, or carry another acceptable form of identification.',
    },
    {
      slug: 'expires-during-trip',
      label: 'The passport will expire before your return or onward trip',
      shortDescription: 'It is valid when you leave but not for the entire itinerary.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not leave with this passport',
      resultBody:
        'An expired passport can block onward travel and cannot be used by a U.S. citizen for direct return to the United States by air. Fixing it abroad requires help from a U.S. embassy or consulate.',
      recommendedAction: 'Renew before departure rather than planning to replace the passport during the trip.',
    },
    {
      slug: 'transit-rule-unclear',
      label: 'Your international connection has an unclear document rule',
      shortDescription:
        'You may need to pass border control, collect bags, change airports, or check in again.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Check the connection before relying on it',
      resultBody:
        'A transit point can create another document check. Whether its entry rule applies depends on the airport, route, ticketing, baggage handling, and whether you cross immigration.',
      recommendedAction:
        'Check the transit country’s official guidance and ask the operating airline whether your connection requires border control.',
    },
    {
      slug: 'departure-close-and-rule-fails',
      label: 'Departure is close and the passport fails the rule',
      shortDescription: 'There may not be enough time for an ordinary renewal process.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Use the urgent-travel process now',
      resultBody:
        'Processing and mailing both affect when the new passport arrives. Passport-agency appointments require proof of travel, and appointment availability is not guaranteed.',
      recommendedAction:
        'Follow the State Department’s urgent-travel instructions based on your departure date and gather your application, photo, documents, fees, and proof of travel.',
    },
    {
      slug: 'no-international-travel-planned',
      label: 'You have no international travel planned before expiration',
      shortDescription: 'The passport is not needed for a foreign trip before its printed expiration date.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Renewal can wait',
      resultBody:
        'There is no foreign entry rule to satisfy if you are not traveling internationally. Waiting may still be inconvenient if an unexpected trip appears.',
      recommendedAction:
        'Renew when practical, especially if family, work, or emergencies could require travel without much notice.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The printed date is only one test',
      description:
        'The passport remains unexpired, but that does not prove it meets the destination’s remaining-validity requirement.',
      severity: 'info',
      chainLabel: 'Unexpired passport → rule still unknown',
    },
    {
      stageLabel: 'AT CHECK-IN',
      title: 'The airline may stop the trip',
      description:
        'Airlines may refuse boarding when a traveler does not meet a destination’s passport-validity rule.',
      severity: 'caution',
      chainLabel: 'Insufficient validity → boarding refused',
    },
    {
      stageLabel: 'AT BORDER CONTROL',
      title: 'Entry may be refused',
      description:
        'If the document issue is not caught before departure, immigration authorities may still decide that the passport does not meet their entry conditions.',
      severity: 'warning',
      chainLabel: 'Rule not met → entry refused',
    },
    {
      stageLabel: 'IF YOU RENEW TOO LATE',
      title: 'Your options become narrower',
      description:
        'Processing and mailing take time, while urgent agency service requires an appointment and proof of travel. Appointment slots may not be immediately available.',
      severity: 'warning',
      chainLabel: 'Late application → limited options',
    },
    {
      stageLabel: 'IF IT EXPIRES ABROAD',
      title: 'Return travel becomes a consular problem',
      description:
        'U.S. citizens cannot use an expired U.S. passport for direct return by air and must contact a U.S. embassy or consulate for a travel document.',
      severity: 'danger',
      chainLabel: 'Expiration abroad → emergency replacement',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'No international travel is planned before expiration',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Renew when convenient, but leave enough flexibility for unexpected travel.',
    },
    {
      situation: 'A domestic U.S. flight occurs while the passport is valid',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Use the valid passport book or card as identification, or bring another acceptable ID.',
    },
    {
      situation: 'The destination requires six months and you do not have it',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Renew before traveling unless the destination’s government confirms that a specific exception applies.',
    },
    {
      situation: 'The passport meets the Schengen validity and issue-date rules',
      ignoreAnswer: 'Only for this itinerary',
      severity: 'caution',
      whatToDo:
        'Confirm the planned Schengen departure date and check any non-Schengen destination or transit point separately.',
    },
    {
      situation: 'The destination requires validity only through the stay',
      ignoreAnswer: 'Yes, after verifying',
      severity: 'caution',
      whatToDo:
        'Make sure the passport remains valid through the required date and that every transit country accepts it.',
    },
    {
      situation: 'The passport expires before the return or onward flight',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Renew before departure.',
    },
    {
      situation: 'An international connection may require border control',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check the transit country’s entry rules and confirm the connection process with the operating airline.',
    },
    {
      situation: 'Travel is close and the passport fails a requirement',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Use official urgent passport guidance immediately and do not assume an agency appointment will be available.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check every country on the itinerary',
      body:
        'Use official government entry information for the destination and any transit country. Check requirements for your citizenship, passport type, purpose of travel, and whether you will pass border control.',
    },
    {
      title: 'Count from the date the rule actually names',
      body:
        'A validity rule may be measured from arrival, planned departure, or the end of the trip. Compare the passport expiration date with the correct reference date for each country.',
    },
    {
      title: 'Verify what happens during connections',
      body:
        'Determine whether you remain airside, cross immigration, collect and recheck baggage, change airports, or check in with another carrier. Those details can change which document rules apply.',
    },
    {
      title: 'Choose the renewal route before applying',
      body:
        'Compare your departure date with the State Department’s current processing and mailing estimates. If travel is less than three weeks away, follow urgent-travel instructions; agency appointments are requested when you are within fourteen calendar days of travel.',
    },
    {
      title: 'Plan for the passport number to change',
      body:
        'After you apply, the old passport cannot be used for travel. Check how renewal affects existing visas, electronic travel authorizations, airline records, and Trusted Traveler accounts rather than assuming they transfer automatically.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'It falls short of an official validity requirement',
      description:
        'A passport that is still unexpired can still be unacceptable when the destination requires extra validity.',
      severity: 'danger',
    },
    {
      title: 'It expires before your return or onward journey',
      description:
        'Do not plan to complete an international itinerary using a passport that becomes invalid during the trip.',
      severity: 'danger',
    },
    {
      title: 'The airline has flagged the document',
      description:
        'A failed online check-in, document warning, or instruction to contact the carrier needs to be resolved before airport departure.',
      severity: 'warning',
    },
    {
      title: 'A transit country has not been checked',
      description:
        'Connections can involve immigration or a new check-in even when the traveler does not intend to visit the connecting country.',
      severity: 'warning',
    },
    {
      title: 'You applied for renewal but still planned to use the old passport',
      description:
        'The State Department says the old passport cannot be used for travel after a new passport application is submitted.',
      severity: 'warning',
    },
    {
      title: 'The passport is damaged or altered',
      description:
        'Water damage, missing pages, significant tears, unofficial markings, or damage to the data page can make an otherwise unexpired passport unusable.',
      severity: 'warning',
    },
    {
      title: 'There are not enough blank pages',
      description:
        'Passport validity and blank-page requirements are separate. Some destinations and airlines require available visa or stamp pages.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is the six-month passport rule universal?',
      answer:
        'No. Each destination sets its own rule. Some require six months beyond arrival or travel dates, some use a shorter post-departure period, and some only require validity for the stay.',
    },
    {
      question: 'Is my passport legally valid until the printed expiration date?',
      answer:
        'It remains an unexpired U.S. passport until that date, but a foreign country can require additional remaining validity as a condition of entry.',
    },
    {
      question: 'Can I visit the UK with less than six months left?',
      answer:
        'Potentially. Current UK guidance says the passport or identity document should be valid for the whole stay. You must still meet any visa or electronic authorization requirement and check transit countries.',
    },
    {
      question: 'Can I enter the Schengen area with less than six months left?',
      answer:
        'Sometimes. For a typical short visit by a non-EU traveler, the passport generally must remain valid for at least three months after planned departure and must have been issued within the previous ten years.',
    },
    {
      question: 'Can I travel to Thailand with less than six months left?',
      answer:
        'Not if you have less than six months beyond your arrival date. Current U.S. government destination guidance lists that validity as an entry requirement for U.S. travelers.',
    },
    {
      question: 'Can I use the passport for a domestic U.S. flight?',
      answer:
        'Yes, while it is valid. A U.S. passport book or passport card can be used for domestic flights as an alternative to a state-issued REAL ID.',
    },
    {
      question: 'Can an airline deny boarding even though the passport is unexpired?',
      answer:
        'Yes. Airlines check whether passengers appear to meet destination document requirements and may refuse boarding when the required remaining validity is missing.',
    },
    {
      question: 'Which date should I use to calculate remaining validity?',
      answer:
        'Use the date named in the destination’s rule. It may be the arrival date, planned departure date, or the end of the trip. Check each country separately.',
    },
    {
      question: 'Does the same rule apply to a child’s passport?',
      answer:
        'Yes. The destination’s validity rule still applies. A U.S. passport issued to a child under age sixteen is valid for five years and cannot be renewed; the child must apply again in person.',
    },
    {
      question: 'What should I do if I am leaving soon?',
      answer:
        'Use the State Department’s Get Your Passport Fast guidance. Travelers leaving in less than three weeks are directed toward an agency appointment requested within fourteen calendar days of departure. Slots may not be available.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Department of State, Bureau of Consular Affairs',
      title: 'Frequently Asked Questions about Passport Services',
      url: 'https://travel.state.gov/en/passports/contact-support/faq.html',
      sourceType: 'government',
      notes:
        'Explains that some destinations require six months of validity and airlines may deny boarding. Also covers domestic-flight use, child passports, blank pages, renewal effects, and use of the old passport after applying.',
    },
    {
      publisher: 'U.S. Department of State, Bureau of Consular Affairs',
      title: 'Get Your Passport Fast',
      url: 'https://travel.state.gov/en/passports/apply/get-fast.html',
      sourceType: 'government',
      notes:
        'Lists routine, expedited, urgent, and emergency service options based on travel timing, plus mailing considerations, appointment requirements, and limits on appointment availability.',
    },
    {
      publisher: 'European Union, Your Europe',
      title: 'Travel documents for non-EU nationals',
      url: 'https://europa.eu/youreurope/citizens/travel/entry-exit/non-eu-nationals/index_en.htm',
      sourceType: 'government',
      notes:
        'States that covered non-EU travelers generally need a passport valid for at least three months after leaving and issued within the previous ten years.',
    },
    {
      publisher: 'UK Government',
      title: 'Entering the UK',
      url: 'https://www.gov.uk/uk-border-control',
      sourceType: 'government',
      notes:
        'States that the passport or other identity document should be valid for the whole stay and notes that a visa or electronic travel authorization may also be required.',
    },
    {
      publisher: 'U.S. Department of State',
      title: 'Thailand Travel Advisory',
      url: 'https://travel.state.gov/en/international-travel/travel-advisories/thailand.html',
      sourceType: 'government',
      notes:
        'Lists six months of passport validity beyond arrival as a requirement for U.S. citizens entering Thailand.',
    },
    {
      publisher: 'U.S. Customs and Border Protection',
      title: 'End of Use of Expired U.S. Passports for the Direct Return of U.S. Citizens to the United States',
      url: 'https://www.help.cbp.gov/s/article/Article1861?language=en_US',
      sourceType: 'government',
      notes:
        'States that U.S. citizens can no longer use an expired U.S. passport for direct return and should contact the nearest U.S. embassy or consulate when abroad.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Official destination entry-requirements page',
      description:
        'Use the destination government or U.S. Department of State country page to find the passport-validity formula, visa rules, and blank-page requirements.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Calendar or passport-validity date calculator',
      description:
        'Helps compare the expiration date with an arrival, departure, or post-trip validity requirement without estimating by sight.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'U.S. passport acceptance facility or agency locator',
      description:
        'Identifies routine application locations and passport agencies used for qualifying urgent travel.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Destination embassy or consulate',
      description:
        'Useful when official online guidance does not clearly address a visa, transit route, emergency passport, dual nationality, or other unusual circumstance.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'damaged-passport',
      anchorText: 'Can I travel with a damaged passport?',
      relationshipType: 'sibling',
    },
    {
      slug: 'passport-out-of-blank-pages',
      anchorText: 'What if my passport has no blank pages?',
      relationshipType: 'sibling',
    },
    {
      slug: 'connection-on-separate-tickets',
      anchorText: 'Does a separate-ticket connection change document checks?',
      relationshipType: 'related',
    },
  ],
};
