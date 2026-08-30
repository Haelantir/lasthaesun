import type { ProblemSeed } from '../types';

export const lowWaterPressure: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'water-pressure',
  slug: 'low-water-pressure',
  canonicalPath: '/home/plumbing/water-pressure/low-water-pressure/',
  name: 'Low Water Pressure',
  eyebrow: 'Home · Plumbing · Water Pressure',

  h1: 'Can I Ignore Low Water Pressure in My House?',
  seoTitle: 'Low Water Pressure at Home: What to Check and When to Act',
  metaDescription:
    'Low water pressure is often a fixture or plumbing problem, but a sudden whole-house drop can point to a leak or utility issue. Here is how to triage it.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the water?',
  canIUseItLabel: 'Usually, while you troubleshoot',

  shortAnswer:
    'Usually, yes, but do not just live with a new pressure drop. Low flow at one fixture is often a clog or local valve issue. A sudden drop throughout the house deserves faster attention because leaks, service-line problems, utility work, or a pressure-loss event can be behind it.',

  whyItMattersHeading: 'Where the Pressure Disappears Tells You a Lot',
  whyItMatters: [
    'What feels like “low pressure” is often low flow. A clogged aerator, showerhead, filter, partly closed valve, water softener, aging pipe, or pressure-reducing valve can restrict water inside the home even when the utility pressure is normal. That is why the first useful test is not guessing at a pressure number. It is checking whether the problem affects one fixture, hot water only, part of the house, or everything.',
    'A sudden whole-house drop is different. Utilities list leaks, main work, neighborhood demand, regulator problems, and service disruptions among possible causes. Low pressure in a public distribution system can also matter for water quality when it is part of a larger pressure-loss event. Low pressure at your kitchen faucet does not automatically make the water unsafe, but a utility advisory does change what you should do.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Treat It as a Minor Pressure Problem If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Checked against EPA and CDC drinking-water guidance and municipal utility troubleshooting on pressure loss, leaks, fixture restrictions, PRVs and service disruptions.',
  disclaimer:
    'General home-plumbing triage. Water ownership, meter access, plumbing rules, and advisory procedures vary by utility and jurisdiction. Follow local utility instructions for shutoffs, service work, and drinking-water notices.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-faucet-only',
      label: 'Only one faucet is weak',
      shortDescription: 'Other sinks, showers, and outside taps still have normal flow.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Start at the fixture',
      resultBody:
        'This points more toward a clogged aerator, faucet cartridge, local shutoff valve, or another restriction at that fixture than a whole-house pressure problem.',
      recommendedAction:
        'Remove and clean the aerator if the faucet design allows it. Make sure the fixture shutoff valves are fully open. If flow stays weak, the faucet or branch plumbing needs more troubleshooting.',
    },
    {
      slug: 'one-shower-only',
      label: 'Only one shower is weak',
      shortDescription: 'Sinks and other fixtures are normal, but one shower has poor flow.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Check the showerhead first',
      resultBody:
        'A restriction at one shower is usually a local flow problem rather than evidence that the entire house has lost pressure.',
      recommendedAction:
        'Check the showerhead for debris or scale and confirm any nearby service valve is fully open. If the problem remains after the fixture is cleared, have the branch plumbing checked.',
    },
    {
      slug: 'hot-water-only',
      label: 'Cold water is normal but hot water is weak',
      shortDescription: 'The pressure problem appears only when fixtures are using hot water.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The hot-water side needs attention',
      resultBody:
        'When cold flow is normal, the restriction is more likely to be on the hot-water side. Utility troubleshooting guidance specifically points homeowners toward the water heater, hot-water aerators, showerheads, or plumbing when this pattern appears.',
      recommendedAction:
        'Check the water heater area for leaks or obvious problems and compare hot flow at several fixtures. Do not dismantle the heater or alter its safety controls. Call a plumber if the restriction is not at a fixture.',
    },
    {
      slug: 'whole-house-gradual',
      label: 'The whole house has slowly become weaker',
      shortDescription: 'Indoor and outdoor fixtures have gradually lost flow over time.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'This is worth diagnosing',
      resultBody:
        'A whole-house decline can come from a pressure-reducing valve, whole-house filter, water softener, partly closed valve, pipe corrosion, or a leak. Replacing faucet parts one by one will not fix a restriction upstream.',
      recommendedAction:
        'Compare several fixtures including an outside spigot. Check accessible filters and softeners for service needs and confirm your private main shutoff is fully open. Have the regulator or supply plumbing checked if the cause is not obvious.',
    },
    {
      slug: 'sudden-whole-house-drop',
      label: 'Pressure suddenly dropped throughout the house',
      shortDescription: 'Hot and cold flow fell at multiple fixtures at about the same time.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Rule out a leak or utility event',
      resultBody:
        'A sudden broad pressure change can be caused by a service disruption, water-main work, a regulator failure, or a leak. CDC guidance tells consumers to contact their drinking-water utility when water pressure drops.',
      recommendedAction:
        'Check for utility notices or nearby work and ask neighbors whether they are affected. Look for visible leakage and unexpected meter movement. Contact the utility if the drop is neighborhood-wide or unexplained.',
    },
    {
      slug: 'after-plumbing-work',
      label: 'It started after plumbing work',
      shortDescription: 'Pressure became weak after a repair, filter change, shutoff, or other work.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Recheck what was touched',
      resultBody:
        'A valve that was not fully reopened, debris released into an aerator, or a filter or treatment device left restricted can reduce flow after plumbing work.',
      recommendedAction:
        'Check the private valves and devices involved in the work. Clean affected aerators if debris appeared. Do not operate a utility-owned meter valve unless your utility permits customers to do so.',
    },
    {
      slug: 'neighbors-affected',
      label: 'Neighbors have low pressure too',
      shortDescription: 'Several nearby homes noticed the same change.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'This may be on the utility side',
      resultBody:
        'When nearby properties change at the same time, utility work, a main problem, or a broader demand issue becomes more plausible than a clog inside your house.',
      recommendedAction:
        "Check your water utility's outage and advisory information or report the pressure change. Follow any drinking-water advisory exactly rather than assuming the water is safe or unsafe from pressure alone.",
    },
    {
      slug: 'leak-signs',
      label: 'Low pressure comes with signs of a leak',
      shortDescription:
        'You see water where it should not be, hear unexplained running, or the meter shows use when everything is off.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the leak as the real problem',
      resultBody:
        'Leaks can reduce water pressure and can damage the building or waste a large amount of water if they continue. The location of the leak determines whether this is a small plumbing repair or a larger service-line problem.',
      recommendedAction:
        'Stop unnecessary water use and locate the leak if you can do so safely. Use your private main shutoff if active leakage is damaging the home. Arrange repair promptly and contact the utility if the problem appears to be before the private plumbing.',
    },
    {
      slug: 'pressure-drop-with-water-change',
      label: 'Pressure dropped and the water changed color, taste, or smell',
      shortDescription: 'The pressure problem appeared with a noticeable water-quality change.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Contact the utility',
      resultBody:
        'A change in pressure plus a change in the water is a reason to involve the water utility or health department rather than treating this as a faucet problem. CDC advises consumers to report pressure drops and changes in water.',
      recommendedAction:
        'Check for a current drinking-water advisory and contact the utility. If an advisory is in effect, follow its instructions for drinking, cooking, brushing teeth, ice, and other uses until officials lift it.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Fixtures work poorly',
      description:
        'Showers feel weak, faucets fill slowly, and appliances that depend on adequate supply may take longer to operate. At this stage the cause may still be a small local restriction.',
      severity: 'info',
      chainLabel: 'Weak flow',
    },
    {
      stageLabel: 'IF THE RESTRICTION PERSISTS',
      title: 'The cause stays hidden',
      description:
        'A clogged fixture may remain a nuisance, but a whole-house restriction can point to a valve, filter, softener, regulator, aging pipe, or supply problem that will not correct itself just because the water still runs.',
      severity: 'caution',
      chainLabel: 'Unresolved cause',
    },
    {
      stageLabel: 'IF A LEAK IS CAUSING IT',
      title: 'Water loss and property damage can grow',
      description:
        'A leak can keep wasting water and may wet walls, floors, cabinets, soil, or structural materials depending on where it is located.',
      severity: 'warning',
      chainLabel: 'Leak continues',
    },
    {
      stageLabel: 'IF THE UTILITY SYSTEM LOST PRESSURE',
      title: 'Water-quality precautions may apply',
      description:
        'Pressure loss in a public distribution system can create conditions that allow contamination to enter through breaks or cross-connections. The utility or health authority decides whether an advisory is needed.',
      severity: 'warning',
      chainLabel: 'Utility pressure event',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'A major leak or service failure is missed',
      description:
        'Sudden near-total loss of pressure with active leakage, a broken service line, or a public-system event can require prompt action to limit damage and protect water quality.',
      severity: 'danger',
      chainLabel: 'Major failure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'One faucet is weak but the rest of the house is normal',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Clean the aerator and check the local shutoff valves. If the fixture stays weak, troubleshoot that faucet or branch line.',
    },
    {
      situation: 'One shower is weak but nearby sinks are normal',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Check the showerhead for blockage or scale. If clearing the fixture does not help, have the local plumbing checked.',
    },
    {
      situation: 'Only hot water has weak flow',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Compare several hot-water fixtures and inspect the water heater area for visible leaks or problems. Call a plumber if the restriction is not at the fixture.',
    },
    {
      situation: 'Every fixture has gradually become weaker',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo:
        'Check the private main valve, filters, softener, and signs of leakage. Have the regulator or supply plumbing evaluated if the cause remains unclear.',
    },
    {
      situation: 'Pressure suddenly dropped across the whole house',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check for utility work or notices, ask whether neighbors are affected, and look for leaks. Report an unexplained pressure drop to the water utility.',
    },
    {
      situation: 'Neighbors have the same pressure problem',
      ignoreAnswer: 'Only while the utility investigates',
      severity: 'caution',
      whatToDo:
        "Check the utility's outage and drinking-water advisory information. Follow any advisory instructions until officials say normal use can resume.",
    },
    {
      situation: 'The meter shows flow with all water use turned off',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Suspect a leak. Check accessible plumbing and arrange repair. If water is actively damaging the home, shut off the private supply if you can do so safely.',
    },
    {
      situation: 'A boil-water or other drinking-water advisory is active',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        "Follow the advisory exactly. Use boiled or bottled water when the notice requires it and keep following the utility or health authority's instructions until the advisory is lifted.",
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Map the problem before touching anything',
      body:
        'Test several cold and hot fixtures, then an outside spigot if you have one. A problem at one outlet points toward that fixture. A problem everywhere points farther upstream toward the home supply or utility system.',
    },
    {
      title: 'Clear the easy restrictions',
      body:
        'Clean removable faucet aerators and showerheads and check that accessible private shutoff valves are fully open. If the problem began after plumbing work, debris or a partly reopened valve is a strong place to start.',
    },
    {
      title: 'Check whole-house devices',
      body:
        'A clogged whole-house filter, a water softener that needs service, or a failing pressure-reducing valve can reduce flow throughout the home. Bypass or service equipment only according to its instructions. Have a plumber handle a regulator you are not equipped to diagnose.',
    },
    {
      title: 'Rule out a leak',
      body:
        "Turn off faucets and water-using appliances and check whether your meter still indicates flow. Also look and listen for water where it should not be. Meter designs differ, so use your utility's instructions for your specific meter.",
    },
    {
      title: 'Choose the right call',
      body:
        'Call the water utility for a sudden whole-house drop, neighborhood-wide problem, service disruption, or water-quality change. Call a plumber when the utility side is normal but the problem remains inside the property.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Pressure suddenly falls to almost nothing throughout the house',
      description:
        'Check for a utility interruption, main break, major private leak, or service-line problem rather than assuming a faucet is clogged.',
      severity: 'danger',
    },
    {
      title: 'Water is actively leaking into the home',
      description:
        'Shut off the private water supply if you can do so safely and arrange repair before the damage spreads.',
      severity: 'danger',
    },
    {
      title: 'A boil-water or other drinking-water advisory is in effect',
      description:
        "Follow the issuing authority's instructions for drinking and household use until the advisory is lifted.",
      severity: 'danger',
    },
    {
      title: 'The water changes color, taste, or smell after the pressure drop',
      description: 'Contact the water utility or health department and check for an active advisory.',
      severity: 'warning',
    },
    {
      title: 'The meter indicates flow when all fixtures and water-using appliances are off',
      description: 'That pattern can point to a leak somewhere on the property.',
      severity: 'warning',
    },
    {
      title: 'Only hot water is weak and the water heater is leaking',
      description: 'The pressure symptom is secondary to a water-heater problem that needs prompt attention.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is low water pressure dangerous?',
      answer:
        'Usually not by itself. The bigger question is why it changed. A clogged fixture is mostly a nuisance, while a leak or a public-system pressure-loss event can require prompt action.',
    },
    {
      question: 'Is low water pressure the same as low flow?',
      answer:
        'No. Pressure is the force moving the water. Flow is how much water comes out. A clogged aerator or corroded pipe can create weak flow even when the supply pressure is normal.',
    },
    {
      question: 'Why is only one faucet affected?',
      answer:
        'That usually points to a local restriction such as an aerator, faucet component, or partly closed shutoff valve rather than a whole-house supply problem.',
    },
    {
      question: 'Why is only my hot water pressure low?',
      answer:
        'If cold water is normal, look at the hot-water side. Check hot-water aerators and showerheads and inspect the water heater area for leaks or other obvious problems. A plumber can trace restrictions farther upstream.',
    },
    {
      question: 'Can a pressure-reducing valve cause low pressure?',
      answer:
        'Yes. A PRV can fail or become restricted and reduce flow throughout the property. If the whole house is affected and other causes are ruled out, have the valve evaluated.',
    },
    {
      question: 'Can a water softener or whole-house filter reduce pressure?',
      answer:
        'Yes. A restricted filter or treatment device can reduce flow to multiple fixtures. Follow the equipment instructions for servicing or bypassing it and see whether flow changes.',
    },
    {
      question: 'Can a hidden leak cause low water pressure?',
      answer:
        'Yes. Utilities list leaks as one possible cause of reduced pressure. With all water use off, an operating meter or leak indicator can help point toward an unexplained leak.',
    },
    {
      question: 'Should I call the water utility or a plumber first?',
      answer:
        'Call the utility when the change is sudden, affects the whole house, affects neighbors, or comes with a water-quality change. If utility service is normal and the problem is confined to your property, call a plumber.',
    },
    {
      question: 'Is tap water safe to drink when the pressure is low?',
      answer:
        'Low pressure at one fixture does not automatically make tap water unsafe. If the pressure drop is sudden or widespread, check with the utility. Follow any boil-water, do-not-drink, or do-not-use advisory exactly.',
    },
    {
      question: 'What should I do after water pressure returns?',
      answer:
        "Check your utility's instructions first. CDC recommends flushing faucets and showerheads after a water-pressure drop. If an advisory was issued, follow the specific recovery instructions from the issuing authority.",
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Portland Water Bureau',
      title: 'Troubleshooting water pressure and flow',
      url: 'https://www.portland.gov/water/drinking-water-quality/troubleshooting-drinking-water-quality-home/water-pressure-and-flow',
      sourceType: 'government',
      notes:
        'Explains pressure versus flow and troubleshooting by scope, including fixture blockages, hot-water-only problems, PRVs, filters, leaks, older piping, and utility-side events.',
    },
    {
      publisher: 'City of San Diego Public Utilities',
      title: 'Your Meter, Water Pressure & Plumbing System',
      url: 'https://www.sandiego.gov/public-utilities/customer-support/meter-water-pressure-plumbing-system',
      sourceType: 'government',
      notes:
        'Lists low-pressure causes including regulator failure, shared demand, water-main work, and leaks, and explains using a water meter to check for possible leaks.',
    },
    {
      publisher: 'City of Tampa',
      title: 'Water Pressure Issue',
      url: 'https://www.tampa.gov/service/water-pressure-issue',
      sourceType: 'government',
      notes:
        'Covers clogged aerators, using an outside spigot to separate fixture or home-plumbing problems from broader pressure issues, and checking water softeners.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Drinking Water Distribution System Tools and Resources',
      url: 'https://www.epa.gov/dwreginfo/drinking-water-distribution-system-tools-and-resources',
      sourceType: 'government',
      notes:
        'Describes pressure management, water-quality concerns from main breaks and water losses, and contamination risks when lower potable-water pressure allows backflow through cross-connections.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Preventing Drinking Water-Related Illnesses',
      url: 'https://www.cdc.gov/drinking-water/prevention/index.html',
      sourceType: 'government',
      notes:
        'Advises consumers to contact their drinking-water utility or health department when water pressure drops or water changes, and recommends flushing fixtures after a pressure drop.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Drinking Water Advisories: An Overview',
      url: 'https://www.cdc.gov/water-emergency/about/drinking-water-advisories-an-overview.html',
      sourceType: 'government',
      notes:
        'Explains boil-water, do-not-drink, and do-not-use advisories and tells consumers to follow the specific instructions issued by local officials.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Water pressure gauge',
      description:
        'Useful for confirming whether the house actually has low pressure rather than only weak flow at a fixture.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Faucet aerator key or basic hand tools',
      description: 'Helpful for removing and cleaning serviceable aerators without damaging the faucet finish.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Local water utility outage and advisory page',
      description:
        'The fastest place to check whether a main break, construction, pressure event, or drinking-water advisory affects your area.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Licensed plumbing service',
      description:
        'Appropriate when the utility side is normal but a PRV, hidden leak, corroded piping, hot-water restriction, or other property-side problem remains.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'water-heater-leaking',
      anchorText: 'What if the water heater is leaking too?',
      relationshipType: 'cause',
    },
    {
      slug: 'small-leak-under-sink',
      anchorText: 'Could a small leak under the sink be related?',
      relationshipType: 'related',
    },
    {
      slug: 'brown-water-from-faucet',
      anchorText: 'What if the pressure drop came with brown water?',
      relationshipType: 'escalation',
    },
  ],
};
