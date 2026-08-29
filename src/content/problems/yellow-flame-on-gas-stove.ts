import type { ProblemSeed } from '../types';

export const yellowFlameOnGasStove: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'gas-burners',
  slug: 'yellow-flame-on-gas-stove',
  canonicalPath: '/appliances/stoves-and-ovens/gas-burners/yellow-flame-on-gas-stove/',
  name: 'Yellow Flame on Gas Stove',
  eyebrow: 'Appliances · Stoves & Ovens · Gas Burners',

  h1: 'Can I Ignore a Gas Stove Flame That Turns Yellow?',
  seoTitle: 'Yellow Gas Stove Flame: When to Stop Using the Burner',
  metaDescription:
    'A steady yellow gas stove flame can signal a burner or combustion problem. Learn when a brief color change is harmless and when to stop using the stove.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the burner?',
  canIUseItLabel: 'Only if the color change is brief and it returns to blue',

  shortAnswer:
    'Probably not if the flame stays yellow. A brief orange flicker in an otherwise blue flame can be harmless, but a steady long yellow flame or soot can mean the burner is not burning correctly. Turn the burner off, let it cool, clean and reseat it as your manual directs, and stop using it if the yellow flame returns.',

  whyItMattersHeading: 'Why Does a Yellow Gas Flame Matter?',
  whyItMatters: [
    'Gas stove burners normally produce a mostly blue flame. The EPA says improper burner adjustment, often indicated by a persistent yellow-tipped flame, can increase pollutant emissions from gas cooking. Flame color is a warning sign rather than a carbon monoxide measurement, so you cannot judge indoor CO levels by color alone.',
    'The pattern matters. GE notes that blue flames or blue flames with small yellow tips can be normal on some burners, while long bright yellow flames are not. Flickering orange can also come from particles in the gas or air. A steady yellow or orange flame on one burner can come from a dirty or misaligned burner cap or clogged ports. If the abnormal color persists after basic cleaning and correct reassembly, the burner needs service.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Stove and Act Now If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00.000Z'),
  reviewScope:
    'Reviewed against current EPA and CPSC combustion-safety guidance plus manufacturer guidance on gas-burner flame appearance, cleaning, soot, and service.',
  disclaimer:
    "General gas-appliance triage only. Flame appearance varies by appliance and fuel, so follow your owner's manual. Treat any suspected gas leak or carbon monoxide alarm as an emergency.",

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'brief-orange-flicker',
      label: 'The flame is mostly blue with an occasional orange flicker',
      shortDescription:
        'The flame stays blue overall, with brief orange flashes and no soot, gas odor, or CO alarm.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Usually normal',
      resultBody:
        'GE says normal flames can show an orange tint when hot or flicker orange because of particles in the gas or air. If the flame remains mostly blue and nothing else is wrong, the color alone is not a reason to stop cooking.',
      recommendedAction:
        'Keep an eye on the flame. If it becomes steadily yellow, starts leaving soot, or comes with another warning sign, treat it as a burner problem instead.',
    },
    {
      slug: 'small-yellow-tips',
      label: 'The flame is blue with small yellow tips',
      shortDescription: 'The main flame is blue and stable, but the tips have a small amount of yellow.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'This can be normal',
      resultBody:
        'Some gas burners can operate normally with blue flames that have small yellow tips. Fuel type and appliance design matter, so do not judge a small yellow tip the same way as a long, mostly yellow flame.',
      recommendedAction:
        "Check the flame description in your owner's manual. If the yellow area grows, the flame becomes lazy or unstable, or soot appears, stop using the burner and investigate.",
    },
    {
      slug: 'one-burner-stays-yellow',
      label: 'One burner stays yellow or orange',
      shortDescription:
        'One surface burner has a steady yellow or orange flame while the other burners look normal.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Check that burner',
      resultBody:
        'A dirty or misaligned burner cap or clogged burner ports can change the flame on a single burner. That makes a burner-specific problem more likely than a whole-stove issue.',
      recommendedAction:
        "Turn the burner off and let it cool. Clean and reseat the removable burner parts exactly as the owner's manual directs, then relight it and check the flame.",
    },
    {
      slug: 'yellow-after-spill',
      label: 'The flame changed after food or liquid spilled on the burner',
      shortDescription:
        'The burner became yellow or orange after a boil-over, grease splatter, or other spill.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Clean it before normal use',
      resultBody:
        'Spills and debris can interfere with burner ports and flame shape, so a burner that changed after a boil-over should be cleaned before normal use.',
      recommendedAction:
        'Turn the burner off, let it cool completely, and clean the burner using the appliance instructions. Make sure removable parts are seated correctly before relighting.',
    },
    {
      slug: 'all-burners-yellow',
      label: 'Several or all burners have long yellow flames',
      shortDescription:
        'The color change affects more than one burner and the flames look long, bright yellow, or unusually lazy.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop treating this as a dirty burner',
      resultBody:
        'A persistent yellow flame can indicate improper combustion or adjustment and increased pollutant emissions. When several burners change together, a gas-supply or appliance-level issue may need to be checked.',
      recommendedAction:
        'Stop using the affected burners and contact the gas supplier or appliance service provider. Do not adjust gas pressure, regulators, or fuel-conversion parts yourself unless the manufacturer specifically directs you to do so.',
    },
    {
      slug: 'soot-on-cookware',
      label: 'The burner is leaving black soot',
      shortDescription: 'Pots, pans, burner parts, or nearby surfaces are developing black carbon deposits.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using that burner',
      resultBody:
        'Soot with a yellow flame is a stronger sign that the burner is not combusting normally. On LP appliances, GE lists airflow, gas pressure, fuel, or orifice problems among possible causes of fully yellow flames or soot.',
      recommendedAction:
        'Turn the burner off and leave it off until the cause is corrected. Arrange service or contact the gas supplier if basic manufacturer-approved cleaning and reassembly do not restore a normal flame.',
    },
    {
      slug: 'yellow-after-cleaning',
      label: 'The flame stays yellow after cleaning and reassembly',
      shortDescription:
        'The cap and burner have been cleaned and seated correctly, but the flame is still steadily yellow or orange.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'It needs service',
      resultBody:
        'Whirlpool advises service when a steady yellow or orange flame remains after cleaning and realignment. Continuing to experiment with gas pressure or internal adjustments is not a good DIY next step.',
      recommendedAction:
        'Stop using the affected burner and arrange appliance service or contact your gas supplier for guidance.',
    },
    {
      slug: 'gas-smell-or-hissing',
      label: 'You smell gas or hear gas leaking',
      shortDescription:
        'There is a gas odor or an audible leak near the stove, whether or not the flame is yellow.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Leave the home',
      resultBody:
        'A possible gas leak is a separate emergency from flame color. CPSC advises leaving immediately and contacting local gas authorities from outside.',
      recommendedAction:
        'Leave the home immediately. Do not operate lights, phones, switches, or other electronics before leaving. Contact local emergency or gas services from outside.',
    },
    {
      slug: 'co-alarm-or-symptoms',
      label: 'A CO alarm sounds or someone has possible CO symptoms',
      shortDescription:
        'A carbon monoxide alarm is sounding, or someone has headache, dizziness, nausea, weakness, confusion, or similar symptoms.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Get outside now',
      resultBody:
        'Carbon monoxide is colorless and odorless. CPSC says an alarming CO alarm should never be ignored, and possible poisoning symptoms require fresh air and prompt emergency help.',
      recommendedAction:
        'Move everyone outside to fresh air and call emergency services. Do not reenter until responders say it is safe, and do not use a suspected appliance again until it has been checked.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The flame pattern has changed',
      description:
        'A brief orange flicker may come from particles in the air or gas. A steady yellow flame is more concerning because burner condition, adjustment, or combustion may be abnormal.',
      severity: 'info',
      chainLabel: 'Flame changes',
    },
    {
      stageLabel: 'IF THE YELLOW FLAME PERSISTS',
      title: 'The burner may keep burning poorly',
      description:
        'Dirty or misaligned burner parts, blocked ports, incorrect adjustment, or another gas-delivery issue can keep the flame from returning to its normal appearance.',
      severity: 'caution',
      chainLabel: 'Abnormal combustion continues',
    },
    {
      stageLabel: 'IF COMBUSTION IS POOR',
      title: 'Pollutant emissions can increase',
      description:
        'EPA guidance links improper burner adjustment and persistent yellow-tipped flames with increased pollutant emissions from gas cooking.',
      severity: 'warning',
      chainLabel: 'More combustion pollutants',
    },
    {
      stageLabel: 'IF CARBON MONOXIDE ACCUMULATES',
      title: 'People can become ill',
      description:
        'Carbon monoxide exposure can cause headache, dizziness, weakness, nausea, confusion, and other symptoms. You cannot smell or see CO.',
      severity: 'danger',
      chainLabel: 'CO exposure',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Severe carbon monoxide poisoning',
      description:
        'High carbon monoxide exposure can cause loss of consciousness and death. A yellow flame does not prove dangerous CO is present, but a CO alarm or symptoms require immediate action.',
      severity: 'danger',
      chainLabel: 'Medical emergency',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Brief orange flickers in an otherwise stable blue flame',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Keep using the burner if it behaves normally and there is no soot, gas odor, CO alarm, or other warning sign. Watch for a change to a steady yellow flame.',
    },
    {
      situation: 'Blue flame with small yellow tips',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        "Check the owner's manual for what is normal for your appliance and fuel. Small yellow tips are not the same as a long, mostly yellow flame.",
    },
    {
      situation: 'One burner stays yellow or orange',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Turn it off, let it cool, and clean and reseat the burner parts as the manufacturer directs. If the flame stays abnormal, stop using that burner and arrange service.',
    },
    {
      situation: 'The flame returns to normal blue after cleaning and correct reassembly',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Resume normal use and watch the burner. If the yellow flame returns repeatedly, have the burner checked instead of repeatedly cleaning it.',
    },
    {
      situation: 'Several burners have long bright yellow flames',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the affected burners and contact the gas supplier or appliance service provider. Do not make gas-pressure or regulator adjustments unless the manufacturer directs them.',
    },
    {
      situation: 'Yellow flame is leaving soot on cookware or burner parts',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop using the burner. Basic cleaning may be appropriate, but persistent soot or yellow flame needs service or gas-supplier guidance.',
    },
    {
      situation: 'You smell gas or hear a possible leak',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Leave the home immediately without operating electronics and contact local emergency or gas services from outside.',
    },
    {
      situation: 'A CO alarm sounds or someone has possible CO-poisoning symptoms',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Get everyone outside to fresh air and call emergency services. Do not reenter until responders say it is safe.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Compare the flame with the other burners',
      body:
        "A brief orange flicker in a mostly blue flame can be normal. A single burner that stays yellow suggests checking that burner's cap, ports, and assembly first. Several burners changing together deserve faster attention.",
    },
    {
      title: 'Clean and reseat the burner only as the manual directs',
      body:
        'Turn the burner off and let it cool. Remove only the parts the manufacturer says are removable, clear approved burner openings, and reinstall each piece in the correct position. Do not enlarge ports or improvise gas adjustments.',
    },
    {
      title: 'Stop using a burner that stays yellow or makes soot',
      body:
        'If cleaning and correct reassembly do not restore the normal flame, leave that burner off and arrange service or contact the gas supplier. Persistent full yellow flames or soot should not become your new normal.',
    },
    {
      title: 'Use cooking ventilation',
      body:
        'Use a range hood that vents outdoors when available. Ventilation can reduce exposure to combustion pollutants, but it does not make a persistently abnormal burner safe to ignore.',
    },
    {
      title: 'Treat gas leaks and CO alarms as separate emergencies',
      body:
        'If you smell gas or hear a leak, leave immediately and contact gas or emergency services from outside. If a CO alarm sounds or people have possible CO symptoms, get outside and call emergency services.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A carbon monoxide alarm sounds',
      description:
        'Leave for fresh air and call emergency services. Do not search the home for the source before leaving.',
      severity: 'danger',
    },
    {
      title: 'You smell gas or hear gas leaking',
      description:
        'Leave immediately. Do not operate lights, phones, switches, or other electronics before you are outside.',
      severity: 'danger',
    },
    {
      title: 'Someone develops headache, dizziness, nausea, weakness, or confusion',
      description:
        'These can be symptoms of carbon monoxide exposure. Get outside to fresh air and seek emergency help if CO exposure is possible.',
      severity: 'danger',
    },
    {
      title: 'Several burners suddenly have long bright yellow flames',
      description:
        'Stop using the affected burners and have the appliance or gas supply checked rather than adjusting gas components yourself.',
      severity: 'warning',
    },
    {
      title: 'Black soot appears on pans, burners, or nearby surfaces',
      description:
        'Soot with an abnormal flame is a strong reason to stop using the burner until the combustion problem is corrected.',
      severity: 'warning',
    },
    {
      title: 'The flame stays yellow after cleaning and correct reassembly',
      description:
        'Manufacturer guidance calls for service when the abnormal flame persists after the basic burner checks are done.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does a yellow gas stove flame always mean carbon monoxide?',
      answer:
        'No. Flame color alone cannot tell you the CO concentration in your home. A persistent yellow flame can signal poor adjustment or combustion and deserves attention, while CO must be treated through proper appliance condition, ventilation, alarms, and emergency response when indicated.',
    },
    {
      question: 'Is an orange gas flame always a problem?',
      answer:
        'No. GE says a normal flame can sometimes show an orange tint or brief orange flickers because of particles in the gas or air. A steady yellow or orange flame is different and should be checked.',
    },
    {
      question: 'Can a gas burner normally have yellow tips?',
      answer:
        'Sometimes. GE describes blue flames or blue flames with yellow tips as normal on its gas ranges and cooktops. Check your own appliance manual because acceptable flame appearance can vary with the appliance and fuel.',
    },
    {
      question: 'Why is only one burner yellow?',
      answer:
        'A burner-specific issue is likely. Dirt, a misaligned burner cap, or clogged ports can change the flame on one burner while the others remain normal.',
    },
    {
      question: 'Why did the flame turn yellow after a spill?',
      answer:
        "Food, grease, or other debris can interfere with the burner and its ports. Let the burner cool and clean it according to the manufacturer's instructions before using it normally again.",
    },
    {
      question: 'What if every burner suddenly turns yellow?',
      answer:
        'Stop treating it as a single dirty burner. If the change persists across several burners, contact the gas supplier or appliance service provider rather than adjusting pressure, regulators, or conversion parts yourself.',
    },
    {
      question: 'Can I clean a yellow-flame burner myself?',
      answer:
        "Basic cleaning and correct reassembly are reasonable when your owner's manual provides the procedure. Do not modify burner openings or make internal gas-pressure adjustments unless the manufacturer specifically directs that work.",
    },
    {
      question: 'Is soot on the bottom of my pan normal?',
      answer:
        'Not when it is coming from a yellow gas flame. Soot is a stronger sign that combustion is not normal and is a reason to stop using that burner until the cause is corrected.',
    },
    {
      question: 'Is natural-gas odor the same thing as carbon monoxide?',
      answer:
        'No. Carbon monoxide is colorless and odorless. A gas odor can indicate a fuel leak, while CO cannot be detected by smell.',
    },
    {
      question: 'Can I rely on a CO alarm and keep using a yellow burner?',
      answer:
        'No. CPSC says a CO alarm adds protection but is not a substitute for proper use and maintenance of fuel-burning appliances. A persistently abnormal burner still needs to be corrected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Sources of Combustion Products',
      url: 'https://www.epa.gov/indoor-air-quality-iaq/sources-combustion-products',
      sourceType: 'government',
      notes:
        'Identifies gas stoves as combustion-pollutant sources and says improper adjustment, often indicated by a persistent yellow-tipped flame, increases pollutant emissions. It also recommends outdoor-venting exhaust fans over gas cooking appliances.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Carbon Monoxide Fact Sheet',
      url: 'https://www.cpsc.gov/safety-education/safety-guides/carbon-monoxide/carbon-monoxide-fact-sheet',
      sourceType: 'government',
      notes:
        'Explains CO production from incomplete fuel burning, symptoms of CO poisoning, alarm guidance, emergency actions, and the need for proper operation and maintenance of fuel-burning appliances.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'CPSC Issues Winter Weather Safety Tips to Prevent Fires and Carbon Monoxide Poisoning',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Issues-Winter-Weather-Safety-Tips-to-Prevent-Fires-and-Carbon-Monoxide-Poisoning',
      sourceType: 'government',
      notes:
        'Advises leaving the home immediately if gas is smelled or heard leaking and contacting local gas authorities from outside without operating electronics before leaving.',
    },
    {
      publisher: 'Whirlpool',
      title: 'How to use a gas stove: confident gas stove cooking',
      url: 'https://www.whirlpool.com/blog/kitchen/how-to-use-a-gas-stove.html',
      sourceType: 'manufacturer',
      notes:
        'Describes a proper burner flame as blue, lists dirty or misaligned burner caps and clogged ports as causes of steady yellow or orange flames, and advises service if the abnormal color remains after cleaning and realignment.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Gas Range & Cooktop - Burner Size and Normal Operation',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=17358',
      sourceType: 'manufacturer',
      notes:
        'Says surface-burner flames should be blue or blue with yellow tips, long bright yellow flames are not normal, and normal flames may show orange tint or flickering orange from particles in the gas or air.',
    },
    {
      publisher: 'GE Appliances',
      title: 'Gas Range & Cooktop - Yellow Flames or Soot on Top Burners',
      url: 'https://products.geappliances.com/appliance/gea-support-search-content?contentId=16965',
      sourceType: 'manufacturer',
      notes:
        'Links fully yellow LP burner flames or soot with airflow, gas pressure, fuel, or orifice issues and recommends contacting the gas supplier or service for the concern.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: "Your gas range owner's manual",
      description:
        'Use the model-specific instructions for normal flame appearance, burner-cap alignment, cleaning, fuel type, and service procedures.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Carbon monoxide alarm',
      description:
        'Provides an added layer of protection against CO in the home. Install and maintain alarms according to the manufacturer and applicable local requirements.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Outdoor-venting range hood',
      description:
        'Helps reduce exposure to pollutants produced during gas cooking when it is used and vented to the outdoors.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Gas appliance service or local gas utility',
      description:
        'Appropriate when the flame remains abnormal after basic cleaning, several burners are affected, soot appears, or a gas-supply issue is suspected.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'gas-smell-near-the-stove',
      anchorText: 'What if I smell gas near the stove?',
      relationshipType: 'escalation',
    },
    {
      slug: 'gas-burner-wont-light',
      anchorText: 'What if the gas burner will not light?',
      relationshipType: 'sibling',
    },
    {
      slug: 'gas-stove-keeps-clicking',
      anchorText: 'What if the gas stove keeps clicking?',
      relationshipType: 'sibling',
    },
    {
      slug: 'co-alarm-beeping',
      anchorText: 'What if my carbon monoxide alarm is beeping?',
      relationshipType: 'escalation',
    },
  ],
};
