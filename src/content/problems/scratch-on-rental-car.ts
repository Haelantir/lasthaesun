import type { ProblemSeed } from '../types';

export const scratchOnRentalCar: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'rental-car-damage',
  slug: 'scratch-on-rental-car',
  canonicalPath: '/travel/rental-cars/damage-and-returns/scratch-on-rental-car/',
  name: 'Scratch on a Rental Car',
  eyebrow: 'Travel · Rental Cars · Damage & Returns',

  h1: 'Can I Ignore a Scratch on a Rental Car?',
  seoTitle: 'Rental Car Scratch: What to Document, Report, and Expect',
  metaDescription:
    'A rental car scratch may be safe to drive with, but it can still lead to a damage claim. Learn when to report it, what to photograph, and when to stop.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I drive it?',
  canIUseItLabel: 'Usually, if the damage is only cosmetic',

  shortAnswer:
    'Probably not. A superficial scratch usually does not make the car unsafe to drive, but ignoring it can leave you with a damage charge or complicate coverage. Photograph it, compare it with the pickup record, and notify the rental company using the instructions in your agreement.',

  whyItMattersHeading: 'Why a Small Scratch Can Become a Large Bill',
  whyItMatters: [
    "Rental companies may distinguish ordinary wear from chargeable damage, but their definitions and thresholds vary. A mark that looks trivial to you may be treated as a body scratch, while a light scuff that does not break the paint may fall within a company's ordinary-wear policy.",
    "Reporting also matters. Rental agreements and damage waivers commonly require prompt notice and cooperation after damage. Personal auto insurance, employer coverage, travel insurance, and credit card benefits have their own conditions. Do not assume that buying a waiver means you can skip the incident report, and do not arrange a repair without the rental company's written permission.",
  ].join('\n\n'),

  redFlagsHeading: 'Stop Driving and Call the Rental Company If:',

  lastReviewedAt: new Date('2026-08-31T00:00:00.000Z'),
  reviewScope:
    'Covers U.S. consumer guidance, major rental-company terms, damage documentation, waiver reporting, return procedures, claims, and tire-safety escalation.',
  disclaimer:
    'General U.S. guidance only. Your rental agreement, rental location, state law, and coverage documents control. In a collision or unsafe situation, follow emergency services and local reporting requirements.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'documented-preexisting-scratch',
      label: 'The scratch is shown in the pickup record',
      shortDescription:
        'The vehicle condition report or your original pickup photos clearly show the same mark in the same location.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Keep the evidence',
      resultBody:
        'Clear pickup documentation is evidence that the scratch predates your rental. The main task is preserving that record in case the mark is questioned at return.',
      recommendedAction:
        'Save the condition report, original photo files, and any message from the rental company. Point out the existing mark at return if an agent raises it.',
    },
    {
      slug: 'unrecorded-damage-found-at-pickup',
      label: 'You found the scratch shortly after pickup',
      shortDescription:
        'The mark may be preexisting, but it is not listed on the condition report and your rental has already started.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Report it before the record gets murkier',
      resultBody:
        'The longer an unrecorded mark goes unreported, the harder it may be to show that you received the vehicle that way.',
      recommendedAction:
        "Park safely, take wide and close photos, and notify the branch or use the rental company's app or support channel. Ask for written confirmation that the condition record was updated.",
    },
    {
      slug: 'confirmed-ordinary-wear',
      label: 'The rental company confirms it is ordinary wear',
      shortDescription:
        'An authorized representative has reviewed the mark and confirmed in writing that it is not chargeable damage.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'No further action is usually needed',
      resultBody:
        'A written confirmation from the company removes much of the uncertainty, provided the mark does not change and there is no hidden tire, glass, or body damage.',
      recommendedAction:
        'Keep the confirmation and your photos through the end of the rental and until the final receipt is settled.',
    },
    {
      slug: 'new-cosmetic-paint-scratch',
      label: 'It is a new scratch, but the car drives normally',
      shortDescription:
        'The paint is marked or broken, but there is no dent, loose part, warning light, fluid leak, or change in handling.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Drivable does not mean ignorable',
      resultBody:
        'A cosmetic scratch is generally a financial and contract issue rather than an immediate driving hazard. It may still be chargeable and should be reported according to the rental agreement.',
      recommendedAction:
        'Photograph the damage and surroundings, write down what happened, and contact the rental company. Continue driving only if the car is otherwise undamaged and the company does not tell you to return it.',
    },
    {
      slug: 'scratch-with-damage-waiver',
      label: "You bought the rental company's damage waiver",
      shortDescription: 'Your agreement shows LDW, CDW, or another waiver that may apply to vehicle damage.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The waiver does not replace reporting',
      resultBody:
        'A waiver may reduce or eliminate your financial responsibility, but its protection can depend on compliance with the rental terms and proper incident reporting.',
      recommendedAction:
        "Report the scratch using the required process, keep the incident number, and check the waiver's exclusions rather than assuming the matter is automatically closed.",
    },
    {
      slug: 'another-party-involved',
      label: 'Another car, person, or property was involved',
      shortDescription:
        "The scratch came from contact with another vehicle, a parked car, a barrier, a building, or someone else's property.",
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as an incident, not just a scratch',
      resultBody:
        "Third-party contact can create liability issues beyond the rental car's paint. The rental company and coverage providers may need identification, insurance, witness, or police-report information.",
      recommendedAction:
        'Get to a safe location, assist anyone injured, exchange information, photograph the scene, and contact the rental company. Notify law enforcement when required by local law, the agreement, or the circumstances.',
    },
    {
      slug: 'curbed-wheel-with-tire-symptoms',
      label: 'The wheel was scraped and the tire may be damaged',
      shortDescription:
        'The scratch followed a curb impact and there is a tire cut, bulge, pressure warning, air loss, noise, pulling, or vibration.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop treating this as cosmetic',
      resultBody:
        'A scraped rim alone may be cosmetic, but a curb impact can also damage the tire or wheel. NHTSA advises action for physical tire damage, pressure problems, noise, or vibration.',
      recommendedAction:
        "Stop normal driving in a safe place and contact the rental company's roadside or damage line. Do not continue on a visibly damaged or deflating tire.",
    },
    {
      slug: 'loose-or-cracked-body-part',
      label: 'The bumper, mirror, light, or panel is loose',
      shortDescription:
        'The scratched area is cracked, detached, hanging, rubbing a tire, exposing sharp edges, or triggering a sensor warning.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is more than surface damage',
      resultBody:
        'A loose part can detach, interfere with a tire, block a light, or indicate damage beneath the visible scuff.',
      recommendedAction:
        'Park safely and call the rental company for instructions or roadside assistance. Do not tape, glue, remove, or repair the part unless the company expressly authorizes it.',
    },
    {
      slug: 'windshield-chip-or-crack',
      label: 'The mark is on the windshield',
      shortDescription:
        "What looked like a scratch is actually a chip, crack, impact mark, or distortion in the driver's view.",
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Handle glass damage separately',
      resultBody:
        'Windshield damage can spread or affect visibility, and rental-company damage policies commonly treat chips and cracks differently from body scuffs.',
      recommendedAction:
        'Report it promptly. Avoid normal driving if the damage blocks or distorts your view, and let the rental company arrange or authorize any glass service.',
    },
    {
      slug: 'post-return-damage-claim',
      label: 'A damage claim arrived after the rental',
      shortDescription:
        'The company says it found a scratch after return or has sent a bill, estimate, or claims notice.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Respond with your records',
      resultBody:
        'Waiting can interfere with a dispute or an insurance, employer, travel, or credit card benefit claim. A later claim should be compared with the pickup and return evidence.',
      recommendedAction:
        'Reply in writing, request the pickup and return inspection records, photos, itemized damage calculation, and basis for added fees. Send your evidence and notify any coverage provider promptly.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The car may still be safe to drive',
      description:
        "A surface-only scratch normally does not affect steering, braking, tires, visibility, lights, or the vehicle's structure.",
      severity: 'info',
      chainLabel: 'Cosmetic mark',
    },
    {
      stageLabel: 'IF THE PICKUP RECORD IS UNCLEAR',
      title: 'Responsibility becomes harder to establish',
      description:
        'Without a condition report or clear photos, you and the rental company may disagree about whether the scratch was already present.',
      severity: 'caution',
      chainLabel: 'Unclear evidence',
    },
    {
      stageLabel: 'IF REPORTING RULES ARE MISSED',
      title: 'Coverage may become harder to use',
      description:
        'Rental agreements, waivers, insurance policies, and card benefits may require notice, an incident report, supporting documents, or cooperation with a claim.',
      severity: 'warning',
      chainLabel: 'Reporting problem',
    },
    {
      stageLabel: 'AT OR AFTER RETURN',
      title: 'The scratch may produce a damage claim',
      description:
        'Depending on the agreement and applicable law, a claim may include repair costs and contract charges such as administration or loss of use.',
      severity: 'warning',
      chainLabel: 'Damage charge',
    },
    {
      stageLabel: 'IF THE DAMAGE IS NOT ACTUALLY COSMETIC',
      title: 'A vehicle-safety problem can go untreated',
      description:
        'Tire damage, a loose panel, broken glass, a fluid leak, or changed handling needs immediate escalation rather than ordinary scratch documentation.',
      severity: 'danger',
      chainLabel: 'Safety issue',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The scratch is clearly shown in your pickup report or photos',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Preserve the original evidence and have it ready at return. Ask for written acknowledgment if the company disputes the mark.',
    },
    {
      situation: 'The company confirms in writing that the mark is ordinary wear',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Keep the confirmation and photos until the rental is fully closed and no damage charge is pending.',
    },
    {
      situation: 'You just noticed an unrecorded scratch that may be preexisting',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Photograph it and contact the rental company now so the condition can be added to the record.',
    },
    {
      situation: 'You caused a new surface scratch and the car is otherwise normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        "The vehicle may remain drivable, but report the scratch and follow the company's return or incident instructions.",
    },
    {
      situation: 'You bought LDW or CDW',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Complete the required report anyway. Confirm that the waiver applies and that no exclusion or prohibited use is involved.',
    },
    {
      situation: 'Your return is approaching',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Submit the damage report before returning the keys, take return photos, and keep proof of the report and final condition.',
    },
    {
      situation: 'You plan to leave the car at an after-hours return',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check the agreement because some contracts leave you responsible until the vehicle is inspected. Report the scratch and thoroughly document the parked car and return location.',
    },
    {
      situation: 'Another person, vehicle, or property was involved',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Secure the scene, collect information, follow local reporting requirements, and contact the rental company and relevant coverage provider.',
    },
    {
      situation: 'There is tire, glass, structural, mechanical, or loose-part damage',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        "Stop normal driving and call the rental company's roadside or damage service for instructions.",
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Photograph the car before touching the mark',
      body:
        "Take clear close-ups and wider views that show the scratch's location on the vehicle. Capture the surrounding panel, license plate, wheels, glass, and adjacent areas, and preserve the original files.",
    },
    {
      title: 'Compare it with the pickup evidence',
      body:
        'Check the vehicle condition report, rental app, pickup email, inspection images, and your own photos or video. Look for the same shape, location, and nearby marks rather than relying on memory.',
    },
    {
      title: 'Report it through an official channel',
      body:
        'Use the phone number, app, online form, branch, or incident process listed in the rental agreement. Describe what you know without guessing, provide photos, and save the confirmation or incident number.',
    },
    {
      title: 'Check every possible source of coverage',
      body:
        'Review the rental-company waiver, personal auto policy, employer plan, travel policy, and the benefits for the card used to pay. Ask what documents are required and whether a claim should be opened now.',
    },
    {
      title: 'Do not arrange your own repair',
      body:
        'Buffing, touch-up paint, glass resin, wheel work, or body repair can alter evidence and may violate the rental agreement. Get express written authorization before anyone repairs or services the vehicle.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The tire has a cut, bulge, gouge, or visible air loss',
      description:
        "Physical tire damage after a curb strike or scrape can be more serious than the wheel's appearance suggests.",
      severity: 'danger',
    },
    {
      title: 'A tire-pressure warning appears or the car vibrates',
      description:
        'Pressure loss, new noise, pulling, or vibration needs roadside guidance and tire or wheel inspection.',
      severity: 'danger',
    },
    {
      title: 'The windshield damage blocks or distorts your view',
      description: 'Do not continue normal driving when glass damage interferes with a clear view of the road.',
      severity: 'danger',
    },
    {
      title: 'A bumper, mirror, light, or panel is loose',
      description:
        'A detached part may fall away, contact a tire, hide deeper damage, or leave required lighting unusable.',
      severity: 'danger',
    },
    {
      title: 'Steering, braking, or handling has changed',
      description: 'A scratch accompanied by a control problem is evidence of more than cosmetic damage.',
      severity: 'danger',
    },
    {
      title: 'You see leaking fluid, smoke, or a burning smell',
      description:
        'Move to a safe location, shut the vehicle down when appropriate, and request roadside assistance.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Will the rental company definitely charge me for a small scratch?',
      answer:
        "No. The result depends on whether the scratch is new, whether it meets the company's definition of chargeable damage, your agreement, applicable law, and any valid waiver or coverage. Do not assume it is free or billable until the company reviews it.",
    },
    {
      question: 'What if the scratch was already on the car?',
      answer:
        'Send the rental company the condition report or original pickup photos showing it. If it was not recorded, report it as soon as you notice it and ask for written acknowledgment.',
    },
    {
      question: 'Does buying LDW or CDW mean I can ignore the scratch?',
      answer:
        "No. A damage waiver may depend on proper reporting and compliance with the rental agreement. Complete the company's incident process even if you expect the waiver to cover the damage.",
    },
    {
      question: 'Can I buff out or touch up the scratch myself?',
      answer:
        'Not without express written permission. Rental terms may prohibit unauthorized repairs, and changing the mark can remove evidence or create additional damage.',
    },
    {
      question: 'Do I need to call the police for a scratch?',
      answer:
        'A surface scratch with no third party involved may not require a police response. Contact the rental company and follow the agreement. Notify law enforcement when someone is injured, another party or property is involved, local law requires it, or the company instructs you to do so.',
    },
    {
      question: 'Will my credit card cover a rental car scratch?',
      answer:
        "It might, but benefits vary by card and may require that you paid with that card, declined the rental company's waiver, used an eligible vehicle, and submitted specified documents. Contact the benefit administrator promptly.",
    },
    {
      question: 'Will my personal car insurance cover the damage?',
      answer:
        'Possibly. Coverage depends on your policy, state, deductible, exclusions, and the type of claim. Ask your insurer whether rental vehicle damage and related charges are covered.',
    },
    {
      question: 'What counts as normal wear on a rental car?',
      answer:
        'There is no universal threshold. Some companies treat limited paint transfer or a scuff that does not break the paint as ordinary wear, while other marks are chargeable. Check the policy for your rental company and location.',
    },
    {
      question: 'What should I do if the company claims damage after I returned the car?',
      answer:
        'Request the pickup and return condition reports, dated photos, inspection details, itemized repair calculation, and explanation of any additional fees. Respond with your evidence and notify any coverage provider.',
    },
    {
      question: 'Can I keep driving with a scratched rental car?',
      answer:
        'Usually, if the damage is strictly cosmetic and the car has no tire damage, loose parts, broken glass, leaks, warning lights, or changes in steering, braking, or handling. Reporting the scratch is still necessary.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Federal Trade Commission',
      title: 'Renting a Car',
      url: 'https://consumer.ftc.gov/articles/renting-car',
      sourceType: 'government',
      notes:
        'Explains rental damage waivers, possible personal auto and credit card coverage, renter responsibility when no protection applies, and where consumers can report rental-car problems.',
    },
    {
      publisher: "Minnesota Attorney General's Office",
      title: 'Renting a Car',
      url: 'https://www.ag.state.mn.us/Consumer/Publications/RentingACar.asp',
      sourceType: 'government',
      notes:
        'Advises renters to inspect the vehicle, record existing damage, and take pickup and return photos. It also warns that even small scratches can lead to charges.',
    },
    {
      publisher: 'Hertz',
      title: 'Accident and Damage',
      url: 'https://www.hertz.com/supporthub/topic/accident-and-damage',
      sourceType: 'industry',
      notes:
        'Provides Hertz-specific definitions of ordinary wear and billable damage, describes pickup and return inspection evidence, and advises immediate reporting of unrecorded preexisting damage.',
    },
    {
      publisher: 'Budget Car Rental',
      title: 'Rental Terms and Conditions',
      url: 'https://www.budget.com/en/legal-documents/rental-terms',
      sourceType: 'industry',
      notes:
        'Requires prompt damage reporting under its terms, addresses after-hours return responsibility and possible damage-related charges, and prohibits repairs without express written consent.',
    },
    {
      publisher: 'Avis Rent a Car',
      title: 'Claims & Accident FAQ',
      url: 'https://www.avis.com/en/customer-service/faqs/usa/claims-accident',
      sourceType: 'industry',
      notes:
        'Directs renters to complete an incident report after damage, contact personal insurance or card coverage, and notes that contract claims may include loss-of-use and administrative charges.',
    },
    {
      publisher: 'National Highway Traffic Safety Administration',
      title: 'Tire Safety Ratings and Awareness',
      url: 'https://www.nhtsa.gov/vehicle-safety/tires',
      sourceType: 'government',
      notes:
        'Advises action for tire cuts, cracks, bulges, pressure problems, noise, or vibration and notes that a curb impact can cause sudden pressure loss.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Rental agreement and vehicle condition report',
      description:
        'These documents show the applicable damage rules, reporting instructions, selected waiver, authorized drivers, and recorded pickup condition.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Phone camera with cloud backup',
      description:
        'Clear original photos and video from pickup, discovery, and return can help establish when a mark was present and whether it changed.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Rental company incident-report service',
      description:
        'The official phone, app, or online reporting channel creates a record and provides instructions about driving, return, roadside service, and claims.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Insurance or card-benefit administrator',
      description:
        'The coverage administrator can explain eligibility, exclusions, required documents, claim procedures, and whether notice should be given before a rental-company bill arrives.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'chip-in-rental-car-windshield',
      anchorText: 'Can I ignore a chip in a rental car windshield?',
      relationshipType: 'sibling',
    },
    {
      slug: 'small-windshield-chip',
      anchorText: 'Can I keep driving with a small windshield chip?',
      relationshipType: 'escalation',
    },
    {
      slug: 'tpms-warning-light',
      anchorText: 'Can I ignore a TPMS warning after hitting a curb?',
      relationshipType: 'escalation',
    },
    {
      slug: 'wheel-vibration',
      anchorText: 'Can I ignore wheel vibration after scraping a curb?',
      relationshipType: 'escalation',
    },
    {
      slug: 'cracked-tire-sidewall',
      anchorText: 'Can I ignore a cracked or damaged tire sidewall?',
      relationshipType: 'escalation',
    },
  ],
};
