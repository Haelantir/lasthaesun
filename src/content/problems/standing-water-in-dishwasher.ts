import type { ProblemSeed } from '../types';

export const standingWaterInDishwasher: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'drainage',
  slug: 'standing-water-in-dishwasher',
  canonicalPath: '/appliances/dishwashers/drainage/standing-water-in-dishwasher/',
  name: "Dishwasher Won't Drain",
  eyebrow: 'Appliances · Dishwashers · Drainage',

  h1: "Can I Ignore a Dishwasher That Won't Drain?",
  seoTitle: "Dishwasher Won't Drain: What Standing Water Means",
  metaDescription:
    'A little sump water can be normal. Learn when standing water means a clogged filter, drain hose, sink connection, pump problem, leak, or service call.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'No—fix the drain problem first',

  shortAnswer:
    'Probably not. A little clean water confined to the sump or filter well can be normal on some models, but water covering the tub floor, dirty water returning, or a repeated drain error needs attention before the next wash.',

  whyItMattersHeading: 'Why Standing Water Is Worth Checking',
  whyItMatters: [
    'When a dishwasher finishes with water across the tub floor, the drain path is not doing its job. Common causes include a clogged filter or sump, a kinked drain hose, a blocked air gap or sink connection, an installation problem, or a drain pump fault.',
    'Contained water is not usually an emergency, but do not keep washing over it. Dirty backflow can foul the tub, high water can escape around the door, and an external leak can damage cabinets or create an electrical hazard if water reaches energized parts.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Checked against current CPSC and EPA safety guidance plus GE, Whirlpool, Samsung, and LG dishwasher drainage troubleshooting.',
  disclaimer:
    'General appliance triage only. Follow the instructions for your dishwasher model and local plumbing requirements. Shut off power before sump, hose, wiring, or panel work, and use appropriate service when water or electrical parts are involved.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'normal-sump-water',
      label: 'A little clean water remains only in the sump',
      shortDescription:
        'Water is confined to the recessed filter or pump area and does not cover the main tub floor.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be normal for your model',
      resultBody:
        "Some dishwashers intentionally retain clean water in the recessed sump or filter area. The owner's manual and the water's location matter more than expecting the entire interior to look completely dry.",
      recommendedAction:
        "Compare the water level with your model's manual. Watch for an increasing level, dirty water, odor, a drain error, or water spreading across the tub floor.",
    },
    {
      slug: 'interrupted-cycle-cleared',
      label: 'The cycle was interrupted and Cancel or Drain cleared the water',
      shortDescription:
        'A power interruption, opened door, or canceled cycle left water behind, but the dishwasher then drained normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The interrupted cycle may explain it',
      resultBody:
        "A dishwasher can retain wash water when its cycle stops before the drain portion. If the model's normal drain procedure empties the tub and the problem does not return, this does not point to an ongoing blockage.",
      recommendedAction:
        "Run the model's Cancel or Drain function, then perform an empty test cycle. Investigate further if excess water returns.",
    },
    {
      slug: 'drains-after-filter-cleaning',
      label: 'Cleaning the filter restored normal draining',
      shortDescription:
        'Food or debris was removed from the filter or sump, and an empty test cycle now finishes without excess water.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The obstruction appears to be cleared',
      resultBody:
        'Filters and sump openings can restrict the drain path when covered by food, labels, or other debris. Normal draining after cleaning is a useful confirmation that the simple cause was corrected.',
      recommendedAction:
        'Reassemble every filter and cover exactly as the manual shows. Continue using the dishwasher only if another cycle drains normally and there is no leak or error code.',
    },
    {
      slug: 'new-installation-never-drained',
      label: 'It has never drained since installation or disposal replacement',
      shortDescription:
        'The problem began immediately after the dishwasher or garbage disposal was installed or moved.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Check the installation before blaming the pump',
      resultBody:
        'A pinched hose, incorrect hose routing, or a disposal inlet plug that was not removed can block drainage from the first cycle.',
      recommendedAction:
        'Leave the dishwasher off and have the installer check the drain hose, sink connection, disposal inlet, air gap, and model-specific installation instructions before using it again.',
    },
    {
      slug: 'dirty-water-backs-in',
      label: 'Dirty water returns after the sink or disposal is used',
      shortDescription:
        'The tub refills between cycles, or the standing water looks or smells like sink wastewater.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Wastewater may be flowing backward',
      resultBody:
        'A clogged sink drain, blocked connection, missing high loop, or air-gap problem can allow wastewater to enter the dishwasher instead of keeping the drain path one-way.',
      recommendedAction:
        'Stop using the dishwasher. Check whether the sink and disposal drain freely, then have the hose routing, air gap, and under-sink connection corrected.',
    },
    {
      slug: 'water-near-door-or-floor',
      label: 'Water is high in the tub or leaking onto the floor',
      shortDescription:
        'Water approaches the door opening, escapes during a cycle, or is visible beneath the dishwasher or sink cabinet.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop before more water escapes',
      resultBody:
        'A severe drain restriction or another leak can wet flooring, cabinets, insulation, wiring, or nearby outlets. External water changes this from routine maintenance to damage control.',
      recommendedAction:
        'Stop the cycle, shut off dishwasher power and the water supply if this can be done safely, contain the leak, and arrange service. Dry wet materials promptly.',
    },
    {
      slug: 'suds-in-tub',
      label: 'The tub is full of foam or hand-dishwashing soap',
      shortDescription:
        'Excess suds appeared after the wrong detergent was used or too much dishwasher detergent was added.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop the suds before testing the drain',
      resultBody:
        'Excessive suds can interfere with normal draining and make it harder to judge the actual water level. Continuing the cycle can spread foam beyond the tub.',
      recommendedAction:
        "Stop using the dishwasher and follow the owner's manual or manufacturer guidance for removing suds. Do not add drain cleaner, bleach, or other products to counteract the soap.",
    },
    {
      slug: 'grinding-or-sharp-debris',
      label: 'It grinds, hums, or may contain broken glass',
      shortDescription:
        'The dishwasher makes an abnormal drain sound, or glass and other hard debris may have entered the filter or pump area.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not reach blindly into the sump',
      resultBody:
        'Hard debris can obstruct the pump area, and manufacturers warn that objects around the filter and pump may be sharp. Sound alone cannot confirm whether the pump is jammed or has failed.',
      recommendedAction:
        "Shut off power before inspecting anything. Remove standing water with a cup or suction tool, wear protective gloves, and follow the model's instructions or arrange service.",
    },
    {
      slug: 'electrical-warning-signs',
      label: 'The breaker trips or there is smoke or a burning smell',
      shortDescription:
        'The drain problem appears with electrical odor, smoke, heat, damaged wiring, or repeated loss of power.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Disconnect power and stop troubleshooting',
      resultBody:
        'This is no longer just a clogged drain. Water near damaged or energized electrical components can create shock or fire hazards.',
      recommendedAction:
        'Do not touch wet electrical parts. Disconnect the dishwasher at the breaker if you can do so without entering a wet area, and arrange appropriate electrical or appliance service.',
    },
    {
      slug: 'drain-error-keeps-returning',
      label: 'The drain error returns after basic checks',
      shortDescription:
        'The filter is clean, the visible hose is not kinked, the sink drains, and the dishwasher still leaves excess water.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The dishwasher needs diagnosis',
      resultBody:
        'A persistent failure after accessible obstructions are cleared can involve the pump, internal hose, wiring, sensor, or controls. Repeated loaded cycles are unlikely to identify the fault.',
      recommendedAction:
        'Stop using the dishwasher and schedule model-appropriate service. Record the error code and describe whether the pump is silent, humming, or moving any water.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Wash water remains in the tub',
      description:
        'The dishwasher has not completed normal emptying, unless the water is limited to an area that the model is designed to keep wet.',
      severity: 'info',
      chainLabel: 'Drain stops → water remains',
    },
    {
      stageLabel: 'IF THE RESTRICTION CONTINUES',
      title: 'Later cycles can retain more soil and water',
      description:
        'A clogged filter, hose, air gap, disposal connection, or sink drain can continue interfering with drainage until the restriction is removed.',
      severity: 'caution',
      chainLabel: 'Restriction → unreliable draining',
    },
    {
      stageLabel: 'IF WATER FLOWS BACKWARD',
      title: 'Sink wastewater can foul the dishwasher',
      description:
        'Incorrect hose routing or a downstream blockage can let dirty water return to the tub, bringing food residue and odor with it.',
      severity: 'warning',
      chainLabel: 'Backflow → dirty tub',
    },
    {
      stageLabel: 'IF WATER ESCAPES',
      title: 'Cabinets and flooring can stay wet',
      description:
        'Leaked water can soak nearby porous materials. If the moisture source is not corrected and the area is not dried, water damage and mold growth can follow.',
      severity: 'warning',
      chainLabel: 'Leak → wet materials → damage',
    },
    {
      stageLabel: 'IF ELECTRICAL PARTS GET WET OR OVERHEAT',
      title: 'Shock or fire becomes possible',
      description:
        'Do not energize or touch an appliance that has leaked onto electrical components, shows burning damage, or repeatedly trips its circuit.',
      severity: 'danger',
      chainLabel: 'Wet or damaged wiring → electrical hazard',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Only a little clean water remains in the recessed sump or filter well',
      ignoreAnswer: 'Yes, if your manual says it is normal',
      severity: 'info',
      whatToDo:
        'Confirm the normal water location for your model and make sure the level is not increasing or spreading across the tub floor.',
    },
    {
      situation: "An interrupted cycle drains fully with the model's normal Cancel or Drain control",
      ignoreAnswer: 'Yes, after a successful empty test',
      severity: 'info',
      whatToDo:
        'Run an empty cycle and confirm that the dishwasher finishes without excess water, leakage, unusual noise, or a drain error.',
    },
    {
      situation: 'The dishwasher drains normally after the filter and sump are cleaned',
      ignoreAnswer: 'Yes, if the fix holds',
      severity: 'info',
      whatToDo: 'Confirm that all filters and covers are correctly seated. Stop again if excess water returns.',
    },
    {
      situation: 'Water covers the main tub floor after a completed cycle',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Remove standing water, clean the accessible filter and sump, and inspect the visible drain path before another loaded cycle.',
    },
    {
      situation: 'The problem began immediately after installation or disposal replacement',
      ignoreAnswer: 'No—correct the installation first',
      severity: 'caution',
      whatToDo:
        'Have the hose routing, disposal inlet plug, air gap, sink connection, and installation instructions checked.',
    },
    {
      situation: 'Dirty water returns when the sink or garbage disposal is used',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the dishwasher and address the sink blockage or backflow-prevention problem before washing dishes again.',
    },
    {
      situation: 'The sink drains slowly or the air gap spills water',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat the downstream plumbing as part of the problem. Clear the accessible air gap or arrange plumbing service.',
    },
    {
      situation: 'Water leaks outside, the breaker trips, or there is a burning smell',
      ignoreAnswer: 'No—disconnect it',
      severity: 'danger',
      whatToDo:
        'Stop the dishwasher, disconnect power if safe, control the water source, and arrange service without running another test cycle.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Stop the dishwasher and try its normal drain command',
      body:
        "Remove the dishes and use the Cancel or Drain procedure in the owner's manual. If the dishwasher does not empty, shut off its circuit before reaching into the filter or sump.",
    },
    {
      title: 'Remove the water and clean the accessible filter',
      body:
        'Use towels, a cup, turkey baster, or suction tool to remove standing water. Clean the filter with a soft brush and inspect the sump for food, labels, bones, glass, or other debris. Do not reach blindly.',
    },
    {
      title: 'Inspect the visible drain hose and sink connection',
      body:
        "Look under the sink for a hose that is pinched, kinked, damaged, or incorrectly routed. Check the air gap, disposal inlet, and sink connection according to the dishwasher's installation instructions.",
      destinationProblemSlug: 'dishwasher-drain-hose-clogged',
    },
    {
      title: 'Check whether the sink and disposal drain freely',
      body:
        'Run the sink and observe whether it drains normally. If the sink or disposal is slow or blocked, correct that plumbing problem rather than repeatedly testing the dishwasher.',
      destinationProblemSlug: 'garbage-disposal-draining-slowly',
    },
    {
      title: 'Choose appliance service or plumbing service',
      body:
        'Call a plumber when the sink, trap, disposal, or household drain is blocked. Use appliance service when the household drain is clear but the dishwasher still will not pump out, shows a repeated error, leaks, or has electrical symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Water is leaking onto the floor or into the cabinet',
      description:
        'Shut off the dishwasher and control the water source if safe. Dry the surrounding materials and investigate the leak before restoring operation.',
      severity: 'danger',
    },
    {
      title: 'You see smoke or smell electrical burning',
      description:
        'Disconnect power at the breaker if you can reach it without crossing a wet area. Do not run another cycle to locate the smell.',
      severity: 'danger',
    },
    {
      title: 'The dishwasher repeatedly trips its breaker',
      description:
        'Do not keep resetting the circuit. Repeated tripping can indicate an electrical fault that needs diagnosis.',
      severity: 'danger',
    },
    {
      title: 'Water is rising toward the door opening',
      description:
        'Stop the cycle rather than opening the door abruptly or allowing the machine to keep filling and washing.',
      severity: 'warning',
    },
    {
      title: 'Chemical drain cleaner was added',
      description:
        'Do not reach into the water, add another product, or mix cleaners. Ventilate the area and contact the dishwasher manufacturer or an appropriate service provider for handling instructions.',
      severity: 'warning',
    },
    {
      title: 'Broken glass or sharp debris may be in the sump',
      description:
        "Shut off power and avoid reaching into cloudy water. Use tools and protective gloves only as the model's manual permits.",
      severity: 'warning',
    },
    {
      title: 'Dirty water returns when the sink is used',
      description: 'This points to backflow or a downstream blockage, not harmless leftover rinse water.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a little standing water in the dishwasher normal?',
      answer:
        'Sometimes. Some models retain clean water in the recessed sump or filter area. Water covering the main tub floor, rising toward the door, looking dirty, or increasing between cycles is not the same thing.',
    },
    {
      question: 'How can I tell whether there is too much water?',
      answer:
        "Use your owner's manual as the model-specific standard. As a general clue, water confined below or around the filter may be normal, while water spread across the tub floor or near the door suggests a drain problem.",
    },
    {
      question: 'Can I run another cycle to see if it fixes itself?',
      answer:
        "Try the model's normal Cancel or Drain command first. After cleaning an obvious filter obstruction, one empty test cycle is reasonable if there is no leak, electrical symptom, or severe noise. Do not keep running loaded cycles over standing water.",
    },
    {
      question: 'Does standing water always mean the drain pump is broken?',
      answer:
        'No. Filters, the sump, drain hose, air gap, disposal inlet, sink drain, detergent suds, and installation errors can all stop proper drainage. Pump or control service moves higher on the list after those accessible causes are ruled out.',
    },
    {
      question: 'Can replacing a garbage disposal cause this problem?',
      answer:
        'Yes. A new disposal may still have its dishwasher inlet plug in place, or the drain hose may have been kinked or reconnected incorrectly during the work.',
    },
    {
      question: 'Why does water return after the dishwasher has already drained?',
      answer:
        'Sink wastewater can flow back through the dishwasher hose when the household drain is blocked or the required air gap or high hose routing is missing or incorrect.',
    },
    {
      question: 'Can I pour drain cleaner into the dishwasher?',
      answer:
        'No. Dishwasher manufacturers warn against chemical drain cleaners because they can damage internal parts and create handling hazards. Clear the obstruction mechanically or arrange service.',
    },
    {
      question: 'Is it safe to remove the pump cover myself?',
      answer:
        "Only if your model's manual provides a user procedure. Shut off power first, remove the standing water, and remember that glass or other sharp debris may be hidden in the sump.",
    },
    {
      question: 'Should I rewash dishes from a cycle that did not drain?',
      answer:
        'Yes if the cycle stopped early, left dirty water, or allowed wastewater to return. Correct the drain problem, clean the filter and tub as directed, and run the dishes through a complete normal cycle.',
    },
    {
      question: 'Do I need a plumber or an appliance repair service?',
      answer:
        'Use a plumber when the sink, disposal, trap, or household drain is slow or blocked. Use appliance service when the sink drains normally but the dishwasher still cannot empty or has pump, control, leak, or electrical symptoms.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'GE Appliances',
      title: 'Dishwasher - Not Draining',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=16240',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes normal sump water from excess tub water and covers filters, hose blockages, sink drains, air gaps, disposal plugs, suds, installation, and service.',
    },
    {
      publisher: 'Whirlpool',
      title: 'Dishwasher Not Draining',
      url: 'https://producthelp.whirlpool.com/Dishwashers/Product_Info/Dishwasher_Product_Assistance/Dishwasher_Not_Draining',
      sourceType: 'manufacturer',
      notes:
        'Covers standing-water removal, power isolation, filters, sump debris, drain hoses, high loops, air gaps, sink connections, pump clues, chemical drain cleaners, and service triggers.',
    },
    {
      publisher: 'Samsung Electronics America',
      title: 'Samsung Dishwasher Is Not Draining',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10004498/',
      sourceType: 'manufacturer',
      notes:
        'Covers blocked sink drains, garbage disposals, pinched or kinked hoses, high loops, air gaps, backflow, sharp drain debris, installation requirements, and service.',
    },
    {
      publisher: 'LG Electronics USA',
      title: 'LG Dishwasher Guide to Error Codes',
      url: 'https://www.lg.com/us/support/help-library/lg-dishwasher-guide-to-error-codes--20154823515108',
      sourceType: 'manufacturer',
      notes:
        'Explains drain errors, clogged filters, kinked hoses, interrupted-cycle water, model drain controls, normal water below the filter, and service when water remains above it.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'A Brief Guide to Mold, Moisture and Your Home',
      url: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
      sourceType: 'government',
      notes:
        'Supports prompt correction of indoor leaks and drying of wet materials to reduce water damage and mold growth. This applies when dishwasher water escapes onto cabinets, floors, or walls.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title:
        'CPSC Urges Flood Victims to Take Steps to Prevent CO Poisoning, Electrocution, Explosion and Fires',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2024/CPSC-Urges-Flood-Victims-to-Take-Steps-to-Prevent-CO-Poisoning-Electrocution-Explosion-and-Fires',
      sourceType: 'government',
      notes:
        'Warns not to touch wet appliances that remain connected to electricity. This supports shutdown precautions when leaked water wets the appliance or nearby electrical equipment.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Dishwasher Owner's Manual",
      description:
        'Gives the correct filter-removal, drain-command, hose-routing, error-code, and pump-access instructions for the exact model.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Towels and Water-Removal Tool',
      description:
        'Towels, a cup, turkey baster, or small suction tool let you remove standing water before opening the filter or disconnecting an accessible hose.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Protective Gloves and Soft Cleaning Brush',
      description:
        'Gloves reduce contact with dirty water and sharp debris, while a soft brush cleans filter mesh without damaging it.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Appliance or Plumbing Service',
      description:
        'Appliance service can diagnose pump and control faults; plumbing service is appropriate when the sink, disposal, trap, or household drain is blocked.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'dishwasher-drain-hose-clogged',
      anchorText: 'Could the dishwasher drain hose be clogged?',
      relationshipType: 'cause',
    },
    {
      slug: 'dishwasher-backing-up-into-sink',
      anchorText: 'Why is the dishwasher backing up into the sink?',
      relationshipType: 'related',
    },
    {
      slug: 'smelly-dishwasher',
      anchorText: 'Why does the dishwasher smell bad?',
      relationshipType: 'follow_up',
    },
    {
      slug: 'garbage-disposal-draining-slowly',
      anchorText: 'Is the garbage disposal draining too slowly?',
      relationshipType: 'cause',
    },
  ],
};
