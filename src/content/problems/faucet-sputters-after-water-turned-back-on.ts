import type { ProblemSeed } from '../types';

export const faucetSputtersAfterWaterTurnedBackOn: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'water-pressure',
  slug: 'faucet-sputters-after-water-turned-back-on',
  canonicalPath: '/home/plumbing/water-pressure/faucet-sputters-after-water-turned-back-on/',
  name: 'Faucet Sputtering After Water Service Returns',
  eyebrow: 'Home · Plumbing · Water Pressure',

  h1: 'Can I Ignore a Faucet That Sputters After the Water Was Turned Back On?',
  seoTitle: 'Sputtering Faucet After Water Service Returns: What to Do',
  metaDescription:
    'Brief sputtering after water service returns is usually trapped air. Flush cold water slowly, then investigate persistent sputtering, low pressure, or water changes.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the faucet?',
  canIUseItLabel: 'Yes—after a cold-water flush',

  shortAnswer:
    'Usually, briefly. Sputtering immediately after a known shutoff is commonly trapped air and should stop as you run a cold tap slowly until the stream is steady. Do not ignore it if it continues, returns, or comes with low pressure, a leak, discolored or odd-smelling water, or an official advisory.',

  whyItMattersHeading: 'The Pattern After the Sputtering Matters',
  whyItMatters: [
    'When water service is shut off, part of the plumbing may drain and fill with air. Restored water pushes that air toward open fixtures, producing bursts, hissing, and an uneven stream. Water utilities commonly advise opening a cold tap slowly and letting it run continuously until the flow settles.',
    'A shutoff can also dislodge sediment. If every other fixture becomes steady but one faucet remains weak or erratic, debris may be trapped in its aerator or another faucet component. Housewide low pressure, recurring air, unusual water, a leak, or an advisory points beyond a harmless one-time purge.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Treating It as Trapped Air If:',

  lastReviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Checked against CDC, municipal utility, faucet-maker, and well-system guidance on trapped air, flushing, debris, pressure loss, advisories, and persistent sputtering.',
  disclaimer:
    'General home-plumbing triage. Restoration procedures, meter access, private shutoffs, and drinking-water instructions vary by utility and jurisdiction; follow local notices first.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'clears-after-cold-flush',
      label: 'The stream becomes steady during the initial cold-water flush',
      shortDescription:
        'The faucet sputters just after service returns, then produces clear water at its usual flow.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This fits ordinary trapped air',
      resultBody:
        'Air commonly enters plumbing during a shutdown and is pushed out when service returns. If the stream becomes steady, pressure feels normal, and the water remains clear and odor-free, a repair is usually unnecessary.',
      recommendedAction:
        'Finish flushing as directed by your utility, then use the faucet normally. Check nearby fixtures before restarting water-using appliances.',
    },
    {
      slug: 'persists-after-flushing',
      label: 'It keeps sputtering after a continuous cold-water flush',
      shortDescription:
        'The stream never settles even though water service is fully restored and you followed the utility’s flushing instructions.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Do not assume the remaining air will fix itself',
      resultBody:
        'Persistent sputtering can mean the service has not fully stabilized, air is still entering the system, or a restriction or plumbing problem remains.',
      recommendedAction:
        'Confirm that utility work is complete and contact the water provider if several fixtures are affected. If the utility reports normal service, arrange plumbing diagnosis.',
    },
    {
      slug: 'only-one-faucet',
      label: 'Only one faucet still sputters',
      shortDescription: 'Other faucets and showers have returned to a smooth, normal stream.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'low',
      resultHeadline: 'Focus on that faucet',
      resultBody:
        'Air from a service interruption usually moves through more than one part of the plumbing. A problem isolated to one faucet is more consistent with debris in its aerator, cartridge, spray head, diverter, or local supply.',
      recommendedAction:
        'Compare hot and cold flow, inspect the aerator or spray-head screen according to the faucet instructions, and clean out visible debris. Arrange repair if the irregular flow remains.',
    },
    {
      slug: 'weak-flow-after-sputtering',
      label: 'The sputtering stops but the faucet remains weak',
      shortDescription:
        'Flow becomes continuous, but noticeably less water comes out than before the shutdown.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'low',
      resultHeadline: 'Sediment may be restricting the outlet',
      resultBody:
        'Material disturbed when service returns can collect in an aerator or faucet screen. The trapped air may be gone even though the debris-related restriction remains.',
      recommendedAction:
        'Remove and rinse the aerator if the faucet design permits it. If flow is still weak without the aerator, check the local shutoff valves and follow the manufacturer’s troubleshooting guidance.',
    },
    {
      slug: 'whole-house-low-pressure',
      label: 'Several fixtures sputter and pressure remains low',
      shortDescription:
        'Faucets, showers, or toilets throughout the home have weak or unstable flow after service returns.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Check the supply and rule out a leak',
      resultBody:
        'A housewide pressure problem can involve ongoing utility work, a service-line issue, a partly reopened private valve, a regulator problem, or a leak. It is not just a dirty faucet screen.',
      recommendedAction:
        'Check the utility’s service status, ask whether nearby homes are affected, and look for visible leakage. Report an unexplained broad pressure drop to the utility.',
    },
    {
      slug: 'brown-or-odd-smelling-water',
      label: 'The sputtering comes with brown water or an unusual odor',
      shortDescription:
        'The water is rusty, persistently cloudy, or has a chemical, fuel, sewage-like, or otherwise unfamiliar smell.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Treat the water change separately',
      resultBody:
        'A shutdown can disturb ordinary sediment, but appearance and odor cannot identify everything in the water. Sputtering alone does not establish that the water is safe.',
      recommendedAction:
        'Do not drink or cook with visibly discolored or suspicious-smelling water. Check for utility notices and contact the utility or local health authority if it does not return to normal.',
    },
    {
      slug: 'drinking-water-advisory',
      label: 'A drinking-water advisory is active',
      shortDescription:
        'The utility or health department has issued a boil-water, do-not-drink, or do-not-use notice.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The advisory controls what you can do',
      resultBody:
        'Sputtering may still be trapped air, but the advisory addresses a separate water-quality risk. General flushing advice does not replace the issuing authority’s instructions.',
      recommendedAction:
        'Follow the notice exactly for drinking, cooking, brushing teeth, ice, appliances, bathing, and flushing. Continue until officials specifically lift the advisory.',
    },
    {
      slug: 'active-leak',
      label: 'Water is leaking while the faucet sputters',
      shortDescription:
        'You see water under a sink, near the service line, around plumbing equipment, or entering the building.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The leak is the immediate problem',
      resultBody:
        'A leak can reduce pressure and damage cabinets, floors, walls, or other materials. Sputtering should not distract from water escaping where it should not.',
      recommendedAction:
        'Stop unnecessary water use. Shut off the private supply if active leakage is damaging the home and you can do so safely, then arrange repair. Avoid wet areas involving electrical equipment.',
    },
    {
      slug: 'private-well-recurring-air',
      label: 'The home uses a private well and sputtering keeps returning',
      shortDescription:
        'Air returns after the lines have been purged, or it appears with fluctuating pressure or unusual pump operation.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The well system needs diagnosis',
      resultBody:
        'Recurring air in a well system can involve the pressure tank, treatment equipment, water level, pump, or system piping. Repeatedly bleeding the faucets does not correct the source.',
      recommendedAction:
        'Record when the sputtering occurs and whether pressure changes with it. Have a licensed well contractor or pump installer inspect the system rather than opening or adjusting well equipment yourself.',
    },
    {
      slug: 'hot-side-only',
      label: 'Only hot water keeps sputtering',
      shortDescription:
        'Cold water is steady at several fixtures, but hot flow remains uneven after the hot line has also been flushed.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Look beyond the incoming cold supply',
      resultBody:
        'Once cold service is stable, a continuing hot-only problem points toward the hot-water plumbing, a local hot-side restriction, or related equipment rather than ordinary air throughout the home.',
      recommendedAction:
        'Compare hot flow at several fixtures and inspect the water-heater area for leaks or abnormal operation. Do not alter heater safety controls; call a plumber if the pattern continues.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Trapped air escapes in bursts',
      description:
        'Water pushes air out of the refilled plumbing, creating hissing, splashing, and an uneven stream.',
      severity: 'info',
      chainLabel: 'Air enters → Water returns → Faucet sputters',
    },
    {
      stageLabel: 'IF THE STREAM BECOMES STEADY',
      title: 'The temporary disturbance is over',
      description:
        'Clear water, normal pressure, and a stable stream after flushing fit a one-time air purge rather than a faucet failure.',
      severity: 'info',
      chainLabel: 'Air clears → Normal flow returns',
    },
    {
      stageLabel: 'IF DEBRIS WAS DISLODGED',
      title: 'A faucet may stay restricted',
      description:
        'Sediment can lodge in an aerator, spray-head screen, cartridge, or diverter, leaving weak or distorted flow after the air is gone.',
      severity: 'caution',
      chainLabel: 'Sediment moves → Screen clogs → Flow weakens',
    },
    {
      stageLabel: 'IF SPUTTERING PERSISTS OR RETURNS',
      title: 'Air may still be entering the system',
      description:
        'Continuing or recurring sputtering no longer fits a simple one-time refill and may require help from the utility, a plumber, or a well contractor.',
      severity: 'warning',
      chainLabel: 'Sputtering continues → Source needs diagnosis',
    },
    {
      stageLabel: 'IF A SUPPLY PROBLEM IS INVOLVED',
      title: 'A leak or pressure event may be missed',
      description:
        'Sputtering combined with broad pressure loss, active leakage, abnormal water, or an official advisory can involve property damage or water-quality precautions.',
      severity: 'danger',
      chainLabel: 'Supply problem → Damage or water precautions',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Brief sputtering after a known shutoff that becomes a steady, clear stream',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Complete the cold-water flush recommended by your utility, confirm normal flow at nearby fixtures, and return to ordinary use.',
    },
    {
      situation: 'Sputtering continues after a continuous flush',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Check that service restoration is complete. Contact the utility if several fixtures are affected; call a plumber if the utility side is normal.',
    },
    {
      situation: 'Only one faucet sputters while every other fixture is normal',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Inspect and clean the affected aerator or screen according to the faucet instructions. Troubleshoot the faucet if the problem remains.',
    },
    {
      situation: 'The faucet sputters and has noticeably reduced flow',
      ignoreAnswer: 'Not for long',
      severity: 'caution',
      whatToDo:
        'Check the aerator for sediment and make sure the local shutoff valves are fully open. Investigate further if removing the restriction does not restore flow.',
    },
    {
      situation: 'Several fixtures have low or unstable pressure',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check for utility work, compare with neighboring homes, and look for leakage. Report a sudden or unexplained pressure drop.',
    },
    {
      situation: 'Water is brown, rusty, or has an unfamiliar odor',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep it out of drinking and cooking while you check utility notices and determine whether the water returns completely to normal.',
    },
    {
      situation: 'A drinking-water advisory is active',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Follow the issuing authority’s directions for household water use and post-advisory flushing instead of relying on general advice.',
    },
    {
      situation: 'Sputtering repeatedly returns on a private well',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Arrange diagnosis by a licensed well contractor or pump installer, especially if pressure fluctuates or the pump cycles abnormally.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check whether the restoration is complete',
      body:
        'Look at the utility’s outage, repair, and drinking-water advisory information. If you live in a multi-unit building, ask the building manager whether the internal system has been fully restored.',
    },
    {
      title: 'Purge the line with cold water',
      body:
        'Open a large cold-water outlet slowly and let it run continuously until the stream is steady and clear. A bathtub, utility sink, or outside spigot may handle the initial splashing and debris better, but follow your utility’s specific instructions.',
    },
    {
      title: 'Compare fixtures before taking anything apart',
      body:
        'Test cold and hot flow at more than one faucet. A problem everywhere points toward the supply or building plumbing; a problem at one faucet points toward that fixture or its local branch.',
    },
    {
      title: 'Clean a localized faucet restriction',
      body:
        'If one faucet remains weak or irregular, remove and rinse its aerator or screen only as the manufacturer directs. Protect the finish, keep small parts out of the drain, and reassemble them in the correct order.',
      destinationProblemSlug: 'low-water-pressure',
    },
    {
      title: 'Escalate to the right service',
      body:
        'Contact the water utility for neighborhood-wide sputtering, pressure loss, restoration questions, or water changes. Use a plumber for a persistent problem inside the property and a licensed well contractor for recurring air on a private well.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'An official water advisory is active',
      description:
        'Follow the boil-water, do-not-drink, or do-not-use instructions exactly. The type of advisory determines which household uses are permitted.',
      severity: 'danger',
    },
    {
      title: 'Pressure remains low throughout the home',
      description:
        'A broad pressure loss can involve incomplete restoration, a service problem, a regulator, a partly opened valve, or a leak.',
      severity: 'warning',
    },
    {
      title: 'Water is leaking or causing damage',
      description:
        'Shut off the private supply if necessary and safe. Keep away from wet electrical equipment and arrange repair promptly.',
      severity: 'danger',
    },
    {
      title: 'The water stays discolored or smells unusual',
      description:
        'Do not assume color or odor is caused only by harmless trapped air. Contact the utility or health authority if the water does not return to normal.',
      severity: 'warning',
    },
    {
      title: 'Sputtering returns after the lines were cleared',
      description:
        'Recurrence without another known shutdown suggests that air is entering again or another plumbing or supply problem remains.',
      severity: 'warning',
    },
    {
      title: 'A private well pump cycles rapidly or pressure surges',
      description:
        'Well-system guidance connects these patterns with failed or improperly operating components that need diagnosis to prevent pump damage.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Why does a faucet sputter after the water was turned back on?',
      answer:
        'The shutoff may have allowed air into drained sections of plumbing. Returning water compresses and pushes that air out through the faucet in bursts.',
    },
    {
      question: 'How long should I let the faucet run?',
      answer:
        'Follow your utility’s restoration instructions and run the cold water continuously until the stream is steady and clear. Contact the utility or a plumber if it does not settle after the recommended flush.',
    },
    {
      question: 'Should I run cold or hot water first?',
      answer:
        'Start with cold water. This helps clear air and disturbed material before it is drawn into the hot-water system.',
    },
    {
      question: 'Which faucet should I use to flush the plumbing?',
      answer:
        'Utilities often recommend a large cold-water outlet such as a bathtub faucet, utility sink, or outside spigot because it can handle sputtering and debris. Use the location specified by your utility when instructions are available.',
    },
    {
      question: 'Should I open every faucet in the house?',
      answer:
        'Not automatically. Follow local restoration guidance. After a pressure drop or drinking-water advisory, officials may direct you to flush multiple fixtures in a particular order.',
    },
    {
      question: 'Why is only one faucet sputtering?',
      answer:
        'If other fixtures are steady, inspect that faucet’s aerator, screen, spray head, cartridge, or diverter. Sediment released during restoration can lodge in small faucet passages.',
    },
    {
      question: 'Can a clogged aerator cause weak or irregular flow?',
      answer:
        'Yes. Aerators catch particles, and debris disturbed by a shutdown can reduce or distort the stream. Clean or replace the aerator according to the faucet manufacturer’s instructions.',
    },
    {
      question: 'Does sputtering mean my tap water is contaminated?',
      answer:
        'Not by itself. Sputtering commonly indicates air, but a pressure event may also prompt a utility advisory. Check official notices, especially if the water changes color, taste, or smell.',
    },
    {
      question: 'Can I use the dishwasher or washing machine immediately?',
      answer:
        'Wait until cold water runs steadily and clearly, then follow any utility guidance. This reduces the chance of drawing air or sediment into appliances. An active advisory may impose additional restrictions.',
    },
    {
      question: 'What should I do if I live in an apartment?',
      answer:
        'Compare fixtures and ask neighbors whether they have the same problem. Contact the building manager because internal pumps, valves, or shared plumbing may need to be restored or flushed.',
    },
    {
      question: 'What if my home uses a private well?',
      answer:
        'A one-time burst after service can clear normally. Recurring sputtering, pressure changes, or rapid pump cycling should be diagnosed by a licensed well contractor or pump installer.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Preventing Waterborne Germs at Home',
      url: 'https://www.cdc.gov/drinking-water/prevention/preventing-waterborne-germs-at-home.html',
      sourceType: 'government',
      notes:
        'Recommends flushing each faucet and shower after a water-pressure drop, running until clear, contacting the utility for more guidance, and following official water advisories.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Drinking Water Advisory Communication Toolbox',
      url: 'https://www.cdc.gov/water-emergency/media/pdfs/2024/08/dwact-2016.pdf',
      sourceType: 'government',
      notes:
        'Explains post-advisory faucet sputtering as air in the lines and directs users to open the tap slowly until sputtering stops; also covers flushing fixtures after an advisory.',
    },
    {
      publisher: 'City of Bellevue Utilities',
      title: 'Water Main Shutdowns',
      url: 'https://bellevuewa.gov/city-government/departments/utilities/manage-your-utility-services/water/water-main-shutdown',
      sourceType: 'government',
      notes:
        'Says air can enter plumbing after service restoration, advises opening cold taps slowly, and directs customers to seek help if air persists. It also addresses debris in aerators.',
    },
    {
      publisher: 'City of San Diego Public Utilities',
      title: 'Your Meter, Water Pressure & Plumbing System',
      url: 'https://www.sandiego.gov/public-utilities/customer-support/meter-water-pressure-plumbing-system',
      sourceType: 'government',
      notes:
        'Lists leaks and water-main work among causes of reduced pressure and explains that meter movement with fixtures and appliances off can indicate a leak.',
    },
    {
      publisher: 'Moen',
      title: 'Low Water Flow From Spout—Both Hot and Cold Water on Sink Faucets',
      url: 'https://solutions.moen.com/FAQ%27s/FAQ%27s-Troubleshooting/General/Low_water_flow_from_spout-_BOTH_hot_and_cold_water_on_sink_faucets',
      sourceType: 'manufacturer',
      notes:
        'Lists debris in the aerator, cartridge, diverter, or wand as possible causes of low flow and provides model-dependent cleaning and troubleshooting steps.',
    },
    {
      publisher: 'Water Systems Council',
      title: 'Frequently Asked Technical Questions',
      url: 'https://www.watersystemscouncil.org/download/wellcare_information_sheets/maintaining_your_well_information_sheets/FATQs.pdf',
      sourceType: 'industry',
      notes:
        'Describes possible well-system causes of sputtering air, low or fluctuating pressure, and rapid pump cycling, and recommends diagnosis and repair by a licensed well contractor or pump installer.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Faucet aerator key or padded pliers',
      description:
        'Useful for removing a serviceable aerator without damaging the faucet finish. Some recessed aerators require a model-specific key.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Clean bucket or clear pitcher',
      description:
        'Catches the initial spray and lets you observe whether flow becomes steady and whether the water remains clear.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Local water utility outage and advisory service',
      description:
        'Provides restoration status, local flushing instructions, and any restrictions on drinking or household water use.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Plumbing or licensed well-system service',
      description:
        'Appropriate when sputtering persists, returns, affects several fixtures, accompanies a leak, or involves a private well or pump.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'low-water-pressure',
      anchorText: 'Why is my water pressure still low?',
      relationshipType: 'escalation',
    },
    {
      slug: 'brown-water-from-faucet',
      anchorText: 'Why did brown water come from the faucet?',
      relationshipType: 'sibling',
    },
    {
      slug: 'pipes-bang-when-water-turns-off',
      anchorText: 'Why do my pipes bang when the water shuts off?',
      relationshipType: 'related',
    },
  ],
};
