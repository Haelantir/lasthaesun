import type { ProblemSeed } from '../types';

export const burningSmellFromFurnace: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'heating',
  slug: 'burning-smell-from-furnace',
  canonicalPath: '/home/hvac/heating/burning-smell-from-furnace/',
  name: 'Burning Smell From Furnace',
  eyebrow: 'Home · HVAC · Heating',

  h1: 'Can I Ignore a Burning Smell From My Furnace?',
  seoTitle: 'Furnace Smells Like It’s Burning: When to Shut It Off',
  metaDescription:
    'A faint dusty smell at first seasonal startup may be normal. Plastic, electrical, smoky, gas-like, or persistent odors mean the furnace needs attention.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'professional',
  canIUseItQuestion: 'Can I keep using the furnace?',
  canIUseItLabel: 'Only if it is clearly brief, dusty, and fading',

  shortAnswer:
    'Usually not. A faint dusty smell when the furnace first runs after sitting unused can be normal if it fades quickly. If the odor is plastic-like, electrical, smoky, gas-like, getting stronger, or keeps returning, shut the system down and find the cause before using it normally again.',

  whyItMattersHeading: 'Why a Burning Furnace Smell Can Mean Very Different Things',
  whyItMatters: [
    'A furnace can smell dusty when accumulated dust heats up at the start of the heating season. That is the one common version that often clears on its own. The useful question is not simply whether something smells “burned,” but what the smell resembles, when it started, and whether it is fading.',
    'A sharp plastic or electrical odor can point to overheating wiring or components. Restricted airflow can also make HVAC equipment work harder. Fuel-burning furnaces add another risk: combustion or venting problems can produce carbon monoxide, which has no smell. A rotten-egg or gas odor is a separate emergency signal and should not be treated as ordinary furnace burn-off.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Furnace If:',

  lastReviewedAt: new Date('2026-08-30T00:00:00.000Z'),
  reviewScope:
    'Reviewed against CPSC, USFA, PHMSA, ENERGY STAR, and furnace-manufacturer guidance on heating fires, gas leaks, CO, airflow, and furnace odors.',
  disclaimer:
    'This page is general triage guidance, not an inspection of your furnace or home. If you see fire, smell gas, or receive a CO warning, follow emergency guidance rather than troubleshooting the furnace yourself.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'first-season-dusty-smell',
      label: 'Faint dusty smell on the first heat of the season',
      shortDescription:
        'The furnace has been unused for months, the odor smells like hot dust, and it is already fading.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This is the normal version',
      resultBody:
        'Dust can settle on furnace components and ductwork while the system is idle. Manufacturers describe a temporary dusty odor at seasonal startup as common when that dust heats up.',
      recommendedAction:
        'Keep an eye on it while the furnace runs. If the smell continues instead of fading, becomes sharp or plastic-like, or you see smoke, turn the system off and reassess.',
    },
    {
      slug: 'smell-keeps-returning',
      label: 'The burning smell comes back every time the furnace runs',
      shortDescription:
        'The odor is not limited to the first seasonal startup or it keeps returning after it seemed to clear.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Stop calling it normal dust',
      resultBody:
        'Normal startup dust should be temporary. A recurring odor can mean the source is still present or that a component, airflow problem, or foreign material needs inspection.',
      recommendedAction:
        'Turn the furnace off if the cause is not obvious. Check the filter only if there is no smoke, gas odor, or other emergency sign, then arrange HVAC service if the smell returns.',
    },
    {
      slug: 'burning-plastic-or-rubber',
      label: 'Burning plastic, rubber, or wire-insulation smell',
      shortDescription:
        'The odor is sharp, acrid, chemical, or resembles melting plastic rather than dusty heat.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Shut the furnace off',
      resultBody:
        'Furnace manufacturers warn that a burning-plastic odor can come from an electrical problem such as overheating wire insulation. That is not a smell to run through.',
      recommendedAction:
        'Turn the furnace off and arrange HVAC service. Do not open electrical compartments or keep cycling the system to see whether the smell disappears.',
    },
    {
      slug: 'visible-smoke',
      label: 'Visible smoke or a strong smoky odor',
      shortDescription:
        'Smoke is coming from the furnace, a vent, or nearby equipment, or the odor is strong enough to suggest active burning.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a fire problem',
      resultBody:
        'Visible smoke is no longer a routine startup odor. Heating equipment is a known home-fire source, so continued operation is not worth testing.',
      recommendedAction:
        'Get everyone away from immediate danger and call emergency services if there is active fire, significant smoke, or you cannot safely determine the source. Do not keep operating the furnace.',
    },
    {
      slug: 'rotten-egg-or-gas-odor',
      label: 'Rotten-egg, sulfur, or obvious gas odor',
      shortDescription: 'The smell resembles odorized natural gas rather than dusty heat.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Leave the building',
      resultBody:
        'Odorized natural gas is designed to be detectable. Federal pipeline-safety guidance says to leave the area and avoid flames, switches, vehicles, and other possible ignition sources when a leak is suspected.',
      recommendedAction:
        'Leave by foot without operating switches or using a phone inside. From a safe location, call emergency services and your gas utility or gas supplier and follow their instructions.',
    },
    {
      slug: 'co-alarm-sounds',
      label: 'A carbon-monoxide alarm sounds while the furnace is running',
      shortDescription: 'The odor may be mild or absent, but a CO alarm activates during furnace use.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The alarm matters more than the smell',
      resultBody:
        'Carbon monoxide is odorless. CPSC warns that fuel-burning furnaces can produce CO when equipment is installed incorrectly, poorly maintained, or has defective or blocked venting.',
      recommendedAction:
        'Follow the alarm manufacturer’s emergency instructions and leave the home if the alarm indicates CO. Call emergency services from a safe location and do not resume furnace use until the cause is addressed.',
    },
    {
      slug: 'dirty-filter-and-weak-airflow',
      label: 'The filter is dirty and airflow feels weak',
      shortDescription: 'The furnace smells hot or burned and the system is moving less air than usual.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Fix the airflow problem before pushing it',
      resultBody:
        'ENERGY STAR says a dirty filter slows airflow, makes the system work harder, and can damage equipment. The filter may not be the only cause of the odor, but restricted airflow is enough reason to stop treating the smell as harmless.',
      recommendedAction:
        'Turn the furnace off and inspect or replace the filter according to the system instructions if it is safely accessible. If the odor returns with a clean filter, arrange service.',
    },
    {
      slug: 'new-furnace-startup-odor',
      label: 'Mild odor from a newly installed furnace',
      shortDescription:
        'The unit is new, the installer or manual says an initial curing or manufacturing odor may occur, and there is no smoke or gas smell.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Follow the instructions for that furnace',
      resultBody:
        'Some manufacturers note that coatings or lubricants can create a temporary odor during initial operation. That guidance is model-specific, so it should not be used to excuse any smell from any new furnace.',
      recommendedAction:
        'Follow the manufacturer’s startup guidance and the installer’s instructions. If the odor persists, worsens, or comes with smoke, shut the furnace off and contact the installer.',
    },
    {
      slug: 'smell-after-service',
      label: 'The smell started after furnace service or repair',
      shortDescription: 'The odor was not present before recent work and now appears when the system runs.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Have the work rechecked',
      resultBody:
        'A new odor after service gives you a useful clue about timing but not a safe diagnosis. Dust, disturbed material, wiring, or another service-related issue can smell similar from the room.',
      recommendedAction:
        'Turn the system off if the odor is strong, electrical, or worsening. Contact the company that performed the work and describe exactly when the smell appears.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'A harmless dust smell and a fault can start out sounding similar',
      description:
        'Seasonal dust burn-off can make the first heating cycles smell scorched. The smell type and whether it fades are what separate that from a developing problem.',
      severity: 'info',
      chainLabel: 'Identify the odor',
    },
    {
      stageLabel: 'IF AIRFLOW IS RESTRICTED',
      title: 'The system has to work harder',
      description:
        'A dirty filter can reduce airflow and increase stress on the heating system. That can contribute to overheating and equipment damage.',
      severity: 'caution',
      chainLabel: 'Airflow drops',
    },
    {
      stageLabel: 'IF AN ELECTRICAL PART OVERHEATS',
      title: 'Wire insulation or components can start to burn',
      description:
        'A plastic or electrical odor can indicate overheating electrical material. Continuing to run the furnace can allow the fault to worsen.',
      severity: 'warning',
      chainLabel: 'Heat becomes damage',
    },
    {
      stageLabel: 'IF COMBUSTION OR VENTING IS FAULTY',
      title: 'Carbon monoxide can enter the home',
      description:
        'Fuel-burning furnaces can produce carbon monoxide when combustion or venting is not working safely. CO is colorless and odorless, so smell is not a reliable warning.',
      severity: 'danger',
      chainLabel: 'Hidden combustion hazard',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'Fire or a gas emergency',
      description:
        'Active burning, overheated electrical parts, nearby combustibles, or a fuel-gas leak can turn a furnace odor into an immediate life-safety problem.',
      severity: 'danger',
      chainLabel: 'Stop using the system',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Faint dusty smell only at the first seasonal startup and already fading',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Monitor it while the furnace runs. If the odor keeps fading and no other warning signs appear, no repair is usually needed for the smell itself.',
    },
    {
      situation: 'Burning smell returns on later heating cycles',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo:
        'Stop assuming it is startup dust. Check the filter if it is safe to do so and arrange service if the odor returns.',
    },
    {
      situation: 'Plastic, rubber, or electrical smell',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Turn the furnace off and arrange HVAC service before using it normally again.',
    },
    {
      situation: 'Visible smoke or signs of active burning',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop using the furnace. If there is active fire, heavy smoke, or immediate danger, get out and call emergency services.',
    },
    {
      situation: 'Rotten-egg or gas odor',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Leave without creating sparks or flames. Call emergency services and the gas utility or supplier from a safe location.',
    },
    {
      situation: 'CO alarm activates during furnace use',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Follow the alarm’s emergency instructions, move to a safe location, and call emergency services. Do not restart the furnace until the cause is addressed.',
    },
    {
      situation: 'Newly installed furnace with a mild odor specifically covered by its startup instructions',
      ignoreAnswer: 'Only if the instructions say it is expected',
      severity: 'info',
      whatToDo:
        'Follow the manufacturer’s guidance for that exact furnace. Stop and call the installer if the odor persists, worsens, or changes character.',
    },
    {
      situation: 'Dirty filter, weak airflow, and a hot or burning odor',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Turn the system off and check or replace the filter according to the manual if it is safely accessible. Get service if the odor returns.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Decide whether this is ordinary dust or something sharper',
      body:
        'A mild dusty smell at the first seasonal startup can be normal. Plastic, rubber, electrical, smoky, or gas-like odors move the problem into a different category immediately.',
    },
    {
      title: 'Check the air filter only when the situation is otherwise safe',
      body:
        'If there is no smoke, gas odor, CO alarm, or electrical smell, turn the furnace off and inspect the filter according to the system instructions. Replace or clean it if needed.',
    },
    {
      title: 'Keep combustibles away from the furnace',
      body:
        'Clear paper, boxes, fabric, solvents, and other burnable material away from heating equipment. Do not store items against the furnace or block access panels and airflow openings.',
    },
    {
      title: 'Shut down and arrange HVAC service for persistent or electrical odors',
      body:
        'A smell that keeps returning or resembles melting plastic or wiring needs diagnosis. Do not remove electrical panels or repeatedly restart the furnace to reproduce the problem.',
      destinationProblemSlug: 'breaker-keeps-tripping',
    },
    {
      title: 'Treat gas odor or a CO alarm as an emergency',
      body:
        'Leave the home when gas-leak or CO warning signs are present and call from a safe location. Do not use the furnace again until the relevant emergency service, utility, or qualified HVAC provider says the hazard has been addressed.',
      destinationProblemSlug: 'co-alarm-beeping',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'You see smoke, flame outside the normal burner area, or scorch marks',
      description: 'These are signs of active overheating or burning rather than ordinary dust on startup.',
      severity: 'danger',
    },
    {
      title: 'The smell resembles melting plastic, rubber, or electrical insulation',
      description:
        'Furnace manufacturers warn that this can indicate an electrical problem or overheating material.',
      severity: 'warning',
    },
    {
      title: 'You smell rotten eggs, sulfur, or obvious gas',
      description:
        'Leave the building and follow gas-leak emergency guidance rather than trying to find the source yourself.',
      severity: 'danger',
    },
    {
      title: 'A carbon-monoxide alarm activates',
      description: 'CO has no smell, so the alarm overrides any assumption that the odor is harmless.',
      severity: 'danger',
    },
    {
      title: 'The burning smell gets stronger or returns after seasonal startup',
      description:
        'A recurring odor no longer fits the usual pattern of dust burning off after the furnace has been idle.',
      severity: 'warning',
    },
    {
      title: 'The breaker trips, the furnace shuts off unexpectedly, or electrical symptoms appear',
      description:
        'Repeated electrical or shutdown symptoms raise the chance that the odor is tied to an equipment fault.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is a dusty burning smell normal the first time I turn on the furnace?',
      answer:
        'It can be. Furnace manufacturers describe a temporary dusty odor after a long period of disuse as common. It should be fading rather than getting stronger or returning indefinitely.',
    },
    {
      question: 'Can a dirty furnace filter cause a burning smell?',
      answer:
        'A dirty filter can restrict airflow and make the system work harder. It does not prove the filter is the source of the odor, so a smell that continues after filter service still needs investigation.',
    },
    {
      question: 'Does carbon monoxide smell like something burning?',
      answer:
        'No. Carbon monoxide is colorless and odorless. A CO alarm or symptoms consistent with CO exposure should be taken seriously even if the furnace smells completely normal.',
    },
    {
      question: 'Why does the burning smell seem to come from the vents?',
      answer:
        'The blower can distribute an odor from the furnace or duct system through multiple registers. The strongest-smelling vent is not necessarily where the problem started.',
    },
    {
      question: 'Should I keep running the furnace to burn the smell off?',
      answer:
        'Only when it clearly matches the mild dusty odor of first seasonal startup and is fading. Do not use “burn it off” as a test for plastic, electrical, smoky, gas-like, or worsening odors.',
    },
    {
      question: 'Is a smell from a brand-new furnace normal?',
      answer:
        'Sometimes. Some manufacturers describe temporary startup odors from coatings or lubricants. Follow the manual and installer guidance for your exact furnace rather than assuming every new-furnace odor is harmless.',
    },
    {
      question: 'What if I smell gas near the furnace?',
      answer:
        'Treat it as a suspected gas leak. Leave the building without operating switches or creating an ignition source, then call emergency services and your gas utility or supplier from a safe location.',
    },
    {
      question: 'Can I change the furnace filter myself?',
      answer:
        'Often, if the filter is designed for homeowner access and the system instructions allow it. Do not stay to troubleshoot a filter if there is smoke, a gas odor, a CO alarm, or another emergency sign.',
    },
    {
      question: 'Why would the smell start right after furnace service?',
      answer:
        'The timing is useful information but does not identify the cause. If a new odor appears after service, especially if it is strong or electrical, shut the system down and ask the servicing company to recheck the work.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Keep Warm and Safe This Winter: Tips for Using Generators, Furnaces and Space Heaters',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/Keep-Warm-and-Safe-This-Winter-Tips-for-Using-Generators-Furnaces-and-Space-Heaters',
      sourceType: 'government',
      notes:
        'CPSC warns about fire and CO risks from home heating equipment, recommends annual inspection of fuel-burning heating systems, and notes that furnaces can produce odorless CO when installation, maintenance, or venting is unsafe.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Heating Fire Safety',
      url: 'https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/heating/',
      sourceType: 'government',
      notes:
        'USFA recommends keeping burnable materials away from heat sources and having heating equipment cleaned and inspected each year.',
    },
    {
      publisher: 'Pipeline and Hazardous Materials Safety Administration',
      title: 'Pipeline Leak Recognition and What to Do',
      url: 'https://www.phmsa.dot.gov/safety-awareness/pipeline/pipeline-leak-recognition-and-what-do',
      sourceType: 'government',
      notes:
        'PHMSA explains odorized gas detection and instructs people to leave a suspected leak area, avoid ignition sources, and call emergency services from a safe location.',
    },
    {
      publisher: 'ENERGY STAR',
      title: 'Maintenance Checklist',
      url: 'https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist',
      sourceType: 'government',
      notes:
        'ENERGY STAR says dirty filters can increase energy use and damage HVAC equipment and recommends checking heating-system controls, airflow components, fuel connections, burners, and heat exchangers during maintenance.',
    },
    {
      publisher: 'Trane',
      title: 'Why Does My Furnace Smell Like Burning?',
      url: 'https://www.trane.com/residential/en/resources/troubleshooting/gas-furnaces/furnace-smells-like-burning/',
      sourceType: 'manufacturer',
      notes:
        'Trane distinguishes temporary burning-dust odor at first seasonal use from burning-plastic odor that may indicate an electrical problem and recommends shutting the furnace off for the latter.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Correct replacement furnace filter',
      description:
        'A clean filter helps maintain proper airflow. Match the size and filter type specified for the system rather than forcing in a substitute.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Carbon-monoxide alarm',
      description:
        'Fuel-burning furnaces can create CO under unsafe conditions, and CO cannot be detected by smell. Use alarms that meet current safety requirements and follow their placement instructions.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Working smoke alarms',
      description:
        'Heating equipment can be involved in home fires. Working smoke alarms provide warning when smoke develops elsewhere in the home.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Furnace owner’s manual and installation instructions',
      description:
        'Use the exact manufacturer guidance for filter access, startup odors, shutdown procedures, maintenance, and any model-specific warnings.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'HVAC service',
      description:
        'Appropriate when a burning odor persists, returns, smells electrical, or cannot be safely identified from normal homeowner checks.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'co-alarm-beeping',
      anchorText: 'What if my carbon-monoxide alarm is beeping?',
      relationshipType: 'escalation',
    },
    {
      slug: 'breaker-keeps-tripping',
      anchorText: 'What if the furnace keeps tripping the breaker?',
      relationshipType: 'escalation',
    },
    {
      slug: 'burning-smell-from-outlet',
      anchorText: 'What if the burning smell is coming from an outlet?',
      relationshipType: 'cause',
    },
  ],
};
