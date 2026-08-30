import type { ProblemSeed } from '../types';

export const sewerGasSmell: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'drains',
  slug: 'sewer-gas-smell',
  canonicalPath: '/home/plumbing/drains/sewer-gas-smell/',
  name: 'Sewer Gas Smell in the House',
  eyebrow: 'Home · Plumbing · Drains',

  h1: 'Can I Ignore a Sewer Gas Smell in My House?',
  seoTitle: 'Sewer Gas Smell in the House: When to Leave and What to Check',
  metaDescription:
    'A sewer smell may be a dry drain trap or a plumbing defect. Learn when you can try a simple fix, when to call a plumber, and when to leave the house.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I stay in the house?',
  canIUseItLabel: 'Usually, if the odor is mild and clearly localized',

  shortAnswer:
    'Probably not. A faint odor from a rarely used drain may come from a dry trap and can be simple to correct, but a strong, widespread, recurring, or unexplained sewer smell needs attention. If the odor could be natural gas or anyone develops dizziness, nausea, breathing trouble, or faintness, leave the home and call for help from outside.',

  whyItMattersHeading: 'Why sewer odor deserves a real source check',
  whyItMatters: [
    'Plumbing traps hold water to block sewer gases from entering a building. When a seldom-used sink, shower, or floor drain dries out, that water seal can disappear and odor can come through. Refilling the trap may solve that specific problem, but a smell that returns can point to a leaking drain or vent pipe, a failed fixture seal, a blocked vent, or another opening in the drainage system.',
    'Sewer gas can contain hydrogen sulfide and other gases. Hydrogen sulfide can irritate the eyes and respiratory system at sufficient concentrations, and smell is not a reliable way to judge a continuing exposure because the ability to detect the odor can fade. A rotten-egg smell can also be confused with odorized fuel gas, which is why an uncertain source should be treated cautiously.',
  ].join('\n\n'),

  redFlagsHeading: 'Leave or Call for Help If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Checked household sewer-gas entry paths, hydrogen sulfide hazards, dry-trap behavior, and fuel-gas response against U.S. federal and state agency guidance.',
  disclaimer:
    'This page cannot identify a gas or measure its concentration. If fuel gas is possible or anyone has serious symptoms, leave the area and use emergency guidance from a safe location.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'unused-floor-drain',
      label: 'The smell is coming from a rarely used floor drain',
      shortDescription:
        'The odor is localized to a basement, laundry, garage, or utility drain that has not been used recently.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'A dry trap is a plausible cause',
      resultBody:
        'Water in a drain trap is supposed to block sewer gas. Infrequent use can let that water evaporate and open a path for odor.',
      recommendedAction:
        'Pour water into the drain to restore the trap seal, ventilate the area, and see whether the odor stops. If it returns, have the drain and venting checked.',
    },
    {
      slug: 'guest-bathroom-after-vacancy',
      label: 'The odor appeared in a bathroom that has barely been used',
      shortDescription: 'A guest sink, shower, tub, or floor drain has sat unused and now smells like sewage.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Refill the traps first',
      resultBody:
        'A seldom-used fixture can lose its trap water through evaporation even when nothing else is obviously wrong.',
      recommendedAction:
        'Run water through the unused fixtures and add water to any floor drain. If the smell persists after the traps are wet again, move on to a plumbing inspection.',
    },
    {
      slug: 'odor-returns-after-refilling-trap',
      label: 'The smell returns after you refill the trap',
      shortDescription: 'Running water helps for a while, but the same sewer odor comes back.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The easy explanation is no longer enough',
      resultBody:
        'A trap that repeatedly loses its seal can be affected by leakage, siphoning, venting problems, or another defect in the drainage system.',
      recommendedAction:
        'Stop treating it as an odor problem and have the drain, trap, seals, and venting checked.',
    },
    {
      slug: 'odor-near-toilet-base',
      label: 'The smell is strongest around the base of a toilet',
      shortDescription:
        'The odor seems to come from where the toilet meets the floor rather than from the bowl water.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'A failed seal or nearby plumbing issue is possible',
      resultBody:
        'The toilet should not normally provide an open path for sewer gas into the room. Odor at the base deserves a check of the toilet seal and nearby drainage connections.',
      recommendedAction:
        'Avoid masking the smell with fragrance. Arrange a plumbing inspection, especially if the toilet rocks, leaks, or the odor returns after flushing.',
    },
    {
      slug: 'multiple-drains-gurgling',
      label: 'Several drains smell, gurgle, or drain poorly',
      shortDescription:
        'The problem is not limited to one fixture and other drains are making noise or behaving abnormally.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This may involve the larger drainage or vent system',
      resultBody:
        'A problem affecting several fixtures is less consistent with one dry trap and can point to venting trouble, a developing blockage, or a main drainage problem.',
      recommendedAction:
        'Minimize unnecessary water use and arrange prompt plumbing evaluation. If wastewater begins backing up, treat it as a sewage-backup problem.',
    },
    {
      slug: 'strong-widespread-odor',
      label: 'The odor is strong or spread through much of the house',
      shortDescription:
        'You cannot tie the smell to one dry drain and it is noticeable in several rooms or levels.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A widespread source needs prompt investigation',
      resultBody:
        'A widespread odor means you have not established a harmless, localized entry point. Sewer gases can include irritating or flammable components, and odor alone cannot tell you the concentration.',
      recommendedAction:
        'Get people into fresh air, avoid entering confined sewer or septic spaces, and call a plumber, sewer authority, fire department, or gas utility as appropriate to the suspected source.',
    },
    {
      slug: 'symptoms-with-odor',
      label: 'Someone feels sick while the odor is present',
      shortDescription:
        'There is headache, dizziness, nausea, eye or throat irritation, breathing difficulty, weakness, or faintness.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat symptoms as an exposure warning',
      resultBody:
        'Hydrogen sulfide exposure can affect the eyes, respiratory system, and nervous system. You cannot estimate exposure from smell intensity alone.',
      recommendedAction:
        'Leave the affected area for fresh air. For severe breathing trouble, collapse, confusion, or other serious symptoms, call emergency services from a safe location.',
    },
    {
      slug: 'could-be-natural-gas',
      label: 'You are not sure whether this is sewer gas or a natural-gas leak',
      shortDescription:
        'The smell is sulfur-like or rotten-egg-like and the source is unclear, especially near gas appliances or piping.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat an uncertain rotten-egg odor as a possible gas leak',
      resultBody:
        'Odorized natural gas can also smell like rotten eggs. Trying switches, appliances, phones, or other electrical devices inside the area can create an ignition source if natural gas is present.',
      recommendedAction:
        'Leave the area without operating electrical switches or electronics and contact emergency services or the gas utility from outside.',
    },
    {
      slug: 'visible-sewage-or-backup',
      label: 'Sewage or wastewater is backing up',
      shortDescription: 'Dirty water, sewage, or waste is rising from a drain, toilet, tub, or floor drain.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is now a backup problem',
      resultBody:
        'Once wastewater is entering the home, the issue is no longer limited to odor. Continued water use can worsen the backup and spread contamination.',
      recommendedAction:
        'Stop unnecessary water use, keep people and pets away from contaminated areas, and arrange prompt drain or sewer service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Sewer gas has found an indoor path',
      description:
        'A dry trap, failed seal, damaged pipe, venting problem, or other drainage defect can let sewer odor enter occupied space.',
      severity: 'caution',
      chainLabel: 'Open path',
    },
    {
      stageLabel: 'IF A DRY TRAP IS THE CAUSE',
      title: 'Restoring the water seal may stop it',
      description: 'Adding water to an unused drain can restore the barrier that normally blocks sewer gases.',
      severity: 'info',
      chainLabel: 'Simple cause',
    },
    {
      stageLabel: 'IF THE ODOR RETURNS',
      title: 'The plumbing problem is still there',
      description:
        'Recurrent odor after the trap is refilled suggests another entry path or a trap seal that is being lost again.',
      severity: 'warning',
      chainLabel: 'Recurring defect',
    },
    {
      stageLabel: 'IF EXPOSURE IS STRONG ENOUGH',
      title: 'Irritation or illness can occur',
      description:
        'Hydrogen sulfide can affect the eyes, breathing, and nervous system at sufficient concentrations, and a fading smell does not prove the gas is gone.',
      severity: 'danger',
      chainLabel: 'Exposure risk',
    },
    {
      stageLabel: 'IF WASTEWATER BACKS UP',
      title: 'Odor becomes the smaller problem',
      description:
        'A drainage failure that progresses to sewage entering the home adds contamination and water-damage concerns.',
      severity: 'danger',
      chainLabel: 'Backup',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Mild odor from one rarely used floor drain',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Refill the trap with water and ventilate. If the odor clears and stays gone, monitor the drain and keep the trap from drying out again.',
    },
    {
      situation: 'Odor from a seldom-used sink, shower, or tub',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Run water through the fixture to restore the trap seal. Persistent odor after that needs a closer plumbing check.',
    },
    {
      situation: 'Odor returns after water is added to the trap',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Have the trap, drain connections, fixture seals, and venting inspected rather than repeatedly masking the smell.',
    },
    {
      situation: 'Smell is strongest around a toilet base',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Check for rocking or leakage and arrange repair of the toilet seal or nearby plumbing if the odor persists.',
    },
    {
      situation: 'Several fixtures gurgle, drain slowly, or smell',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Treat this as a larger drainage or venting problem and arrange prompt evaluation before a backup develops.',
    },
    {
      situation: 'Strong sewer odor is spread through the house',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Move to fresh air and get the source identified. Do not enter sewers, septic tanks, or other confined areas to chase the smell.',
    },
    {
      situation: 'Anyone develops dizziness, nausea, breathing trouble, or faintness',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Leave the affected area. Seek urgent medical or emergency help for serious symptoms from a safe location.',
    },
    {
      situation: 'You cannot rule out a natural-gas leak',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Leave without operating electrical switches or electronics. Contact emergency services or the gas utility from outside.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Rule out a fuel-gas leak first',
      body:
        'If the rotten-egg odor could be natural gas, do not keep searching indoors for the source. Leave without operating switches or electronics and call the gas utility or emergency services from outside.',
    },
    {
      title: 'Check the least-used drains',
      body:
        'Start with guest bathrooms, basement or garage floor drains, utility sinks, and other fixtures that rarely see water. A dry trap is one of the simplest sewer-odor causes to correct.',
      destinationProblemSlug: 'bad-smell-from-drain',
    },
    {
      title: 'Restore any dry trap',
      body:
        'Add water to a dry drain or run the fixture so the trap can hold water again. If the odor returns, the trap may be leaking or losing its seal for another reason.',
      destinationProblemSlug: 'leaking-p-trap',
    },
    {
      title: 'Watch for venting or main-drain clues',
      body:
        'Gurgling, slow drainage, or odor from several fixtures points beyond one dry trap. Those clues justify checking the venting and larger drainage system.',
      destinationProblemSlug: 'drain-gurgling',
    },
    {
      title: 'Escalate immediately if wastewater appears',
      body:
        'If sewage or dirty wastewater rises from a fixture, stop unnecessary water use and move to backup response rather than continuing odor troubleshooting.',
      destinationProblemSlug: 'sewage-backup',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'You cannot rule out a gas leak',
      description:
        'A rotten-egg odor can come from odorized fuel gas as well as sewer gas. Leave first if the source is uncertain.',
      severity: 'danger',
    },
    {
      title: 'The smell is strong and widespread',
      description: 'A house-wide odor with no clear dry-drain source needs prompt investigation and fresh air.',
      severity: 'warning',
    },
    {
      title: 'Anyone has breathing trouble, dizziness, confusion, or fainting',
      description:
        'These symptoms should not be used as a DIY gas detector. Leave the area and seek appropriate emergency or medical help.',
      severity: 'danger',
    },
    {
      title: 'Several drains are gurgling or slowing down',
      description: 'Multiple affected fixtures can indicate a larger drainage or venting problem.',
      severity: 'warning',
    },
    {
      title: 'Sewage is backing up',
      description:
        'Stop unnecessary water use and keep people and pets away from contaminated water while you arrange service.',
      severity: 'danger',
    },
    {
      title: 'The odor returns after traps are refilled',
      description:
        'Recurrence means you have not fixed the entry path and the plumbing needs further diagnosis.',
      severity: 'caution',
    },
    {
      title: 'The smell is coming from a sewer, septic tank, or other confined area',
      description:
        'Do not enter a confined space to investigate sewer gas. Confined sewer and septic environments can contain dangerous gas concentrations.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can a dry P-trap really make the whole room smell like sewage?',
      answer:
        'Yes. The water in a trap is the barrier between indoor air and the drainage system. If that water evaporates, sewer odor can move through the drain opening.',
    },
    {
      question: 'Why did the smell show up after a vacation or after a room sat unused?',
      answer:
        'An unused sink, shower, tub, or floor drain can lose trap water through evaporation. Refilling the trap is a sensible first check.',
    },
    {
      question: 'Is sewer gas always dangerous?',
      answer:
        'No. A sewer odor does not automatically mean a dangerous concentration. The problem is that sewer gas can contain hazardous components and smell alone cannot tell you how much is present.',
    },
    {
      question: 'Can I tell sewer gas from natural gas by smell?',
      answer:
        'Not reliably enough for safety. Both can be described as sulfur-like or rotten-egg odors. If fuel gas is possible, leave and contact the gas utility or emergency services from outside.',
    },
    {
      question: 'Why can the smell seem to disappear even if the problem is still there?',
      answer:
        'Airflow can change the odor, and hydrogen sulfide can also reduce your ability to smell it during continued or high exposure. Do not use your nose as a concentration meter.',
    },
    {
      question: 'Will opening windows fix a sewer gas problem?',
      answer:
        'Ventilation may reduce indoor odor while you deal with the source, but it does not repair a dry trap, failed seal, damaged pipe, blocked vent, or drainage defect.',
    },
    {
      question: 'Should I pour bleach or drain cleaner down the drain?',
      answer:
        'Not as a default fix. Chemicals do not repair a missing water seal or broken plumbing, and household cleaners should never be mixed. Start by restoring the trap with water and identifying the actual entry point.',
    },
    {
      question: 'Why does it smell around the toilet even though the bowl has water?',
      answer:
        'The bowl water does not rule out a problem at the toilet-to-floor seal, nearby drain piping, or venting. Persistent odor around the base should be inspected.',
    },
    {
      question: 'Who should I call if the smell keeps coming back?',
      answer:
        'A plumber can inspect traps, fixture seals, drain piping, and venting. If you use a public sewer and the source remains unclear, your local sewer authority may also be able to advise.',
    },
    {
      question: 'Does sewer gas contain carbon monoxide?',
      answer:
        'Sewer gas is a variable mixture and should not be treated as a carbon-monoxide warning. Carbon monoxide itself is odorless, so a sewer smell is not a substitute for a working CO alarm.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'North Dakota Department of Environmental Quality',
      title: 'Sewer Gas',
      url: 'https://deq.nd.gov/WM/indoor/SewerGas.aspx',
      sourceType: 'government',
      notes:
        'States that sewer gas in homes is commonly associated with plumbing leaks or dry traps and advises checking traps, adding water, ventilating, and calling a plumber for severe, recurring, or damage-related odors.',
    },
    {
      publisher: 'Ohio Environmental Protection Agency',
      title: 'Sewer gas odors in a home',
      url: 'https://ohioepa.custhelp.com/app/answers/detail/a_id/923/~/sewer-gas-odors-in-a-home',
      sourceType: 'government',
      notes:
        'Describes sewer gas as a mixture that can include hydrogen sulfide and ammonia and lists floor drains, damaged or blocked plumbing or roof vents, and foundation openings as possible entry paths.',
    },
    {
      publisher: 'U.S. Environmental Protection Agency',
      title: 'Controlling Pollutants and Sources: Indoor Air Quality Design Tools for Schools',
      url: 'https://www.epa.gov/iaq-schools/controlling-pollutants-and-sources-indoor-air-quality-design-tools-schools',
      sourceType: 'government',
      notes:
        'Explains that dry drain traps and poorly located sewer vents can allow sewer gases indoors and notes that hydrogen sulfide can cause eye, nose, throat, and breathing effects at sufficient concentrations.',
    },
    {
      publisher: 'Agency for Toxic Substances and Disease Registry',
      title: 'Hydrogen Sulfide | ToxFAQs',
      url: 'https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=388&toxid=67',
      sourceType: 'government',
      notes:
        'Describes hydrogen sulfide as a flammable gas with a rotten-egg odor, explains that higher exposures can affect respiratory, cardiovascular, and nervous systems, and warns that smell can become unreliable.',
    },
    {
      publisher: 'Pipeline and Hazardous Materials Safety Administration',
      title: 'Recognizing and Responding to Pipeline Emergencies',
      url: 'https://primis.phmsa.dot.gov/stakeholder-comms/emergencyresponse/',
      sourceType: 'government',
      notes:
        'Advises people who notice the rotten-egg odor of odorized natural gas to avoid flames, engines, phones, and electrical switches, leave the area, and call for help from a safe location.',
    },
    {
      publisher: 'Occupational Safety and Health Administration',
      title: 'Hydrogen Sulfide',
      url: 'https://www.osha.gov/sites/default/files/publications/HYDROGEN_SULFIDE_FACT.pdf',
      sourceType: 'government',
      notes:
        'Describes hydrogen sulfide as flammable and hazardous, notes that it can collect in low or poorly ventilated areas, and warns not to rely on smell to indicate its continued presence.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Flashlight',
      description:
        'Useful for checking under sinks, around toilet bases, and near floor drains for moisture, loose fittings, or obvious damage without dismantling plumbing.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'P-trap or trap-seal replacement parts',
      description:
        'Appropriate when a confirmed trap is cracked, leaking, or no longer holding its water seal.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Plumbing diagnostic service',
      description:
        'Useful when odor keeps returning and the entry point is not obvious after basic trap checks.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Local sewer utility guidance',
      description:
        'Useful when household plumbing checks do not explain a persistent odor or when a public sewer issue may be involved.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'bad-smell-from-drain', anchorText: 'Why does one drain smell bad?', relationshipType: 'cause' },
    { slug: 'leaking-p-trap', anchorText: 'Could a leaking P-trap be the cause?', relationshipType: 'cause' },
    { slug: 'drain-gurgling', anchorText: 'Why are my drains gurgling too?', relationshipType: 'related' },
    { slug: 'sewage-backup', anchorText: 'What if sewage starts backing up?', relationshipType: 'escalation' },
    {
      slug: 'toilet-gurgling',
      anchorText: 'Why is my toilet gurgling with the smell?',
      relationshipType: 'related',
    },
  ],
};
