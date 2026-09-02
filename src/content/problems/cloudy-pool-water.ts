import type { ProblemSeed } from '../types';

export const cloudyPoolWater: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'pool-water-quality',
  slug: 'cloudy-pool-water',
  canonicalPath: '/garden-and-outdoors/pools/water-quality/cloudy-pool-water/',
  name: 'Cloudy Pool Water',
  eyebrow: 'Garden & Outdoors · Pools & Spas · Water Quality',

  h1: 'Can I Ignore Cloudy Pool Water?',
  seoTitle: 'Cloudy Pool Water: When It Is Unsafe to Swim',
  metaDescription:
    'Cloudy pool water can hide a swimmer and signal low sanitizer, poor filtration, algae, or imbalance. Learn when to close the pool and what to test.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I swim in it?',
  canIUseItLabel: 'Only after visibility and chemistry checks',

  shortAnswer:
    'Probably not. Do not let anyone swim if the deepest point or main drain is not clearly visible, or until disinfectant and pH have been checked. If the haze is slight, visibility is complete, and chemistry is in range, the cleanup can usually wait briefly while filtration runs.',

  whyItMattersHeading: 'Cloudiness Can Be a Visibility Problem or a Water-Treatment Problem',
  whyItMatters: [
    'Cloudiness creates two separate questions: can you see a swimmer in trouble, and is the water being disinfected and filtered correctly? CDC tells swimmers to make sure the drain at the bottom of the deep end is visible. The Model Aquatic Health Code treats a pool bottom that is not visible as an imminent health hazard for public venues, although state and local codes control actual public-pool requirements.',
    'Low disinfectant, high pH, heavy debris, algae, poor circulation, and filtration problems can all accompany cloudy water. Appearance alone cannot identify the cause. Check visibility first, then test the water and inspect circulation instead of adding chemicals by guesswork.',
  ].join('\n\n'),

  redFlagsHeading: 'Close the Pool Immediately If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Checked against CDC swimmer, home-pool testing, MAHC, chemical-safety, municipal operations, and manufacturer water-balance guidance.',
  disclaimer:
    'General U.S. pool-safety triage. State and local public-pool codes and the instructions on your exact chemical and equipment labels may be stricter and take priority.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'bottom-not-visible',
      label: 'The bottom or main drain is not clearly visible',
      shortDescription:
        'You cannot easily identify the drain, floor markings, or an object at the deepest point from the deck.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Close the pool now',
      resultBody:
        'The cloudiness is now a surveillance and rescue problem. A submerged swimmer may be harder to notice, and CDC’s model code treats a nonvisible pool bottom as grounds for immediate correction or closure at public venues.',
      recommendedAction:
        'Get everyone out, account for every swimmer, block access, and keep the pool closed until the entire bottom is plainly visible and water chemistry is verified.',
    },
    {
      slug: 'person-unaccounted-for',
      label: 'Someone may be missing in or near the pool',
      shortDescription:
        'A child, swimmer, or other person cannot be located while the water is too cloudy to see the bottom.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Treat this as a drowning emergency',
      resultBody:
        'Cloudy water can conceal a person below the surface. This is not a water-maintenance problem until everyone has been found and accounted for.',
      recommendedAction:
        'Call 911 immediately, activate the pool emergency plan, and begin rescue within your training. Use available reaching or throwing equipment and direct responders to the pool.',
    },
    {
      slug: 'slight-haze-tests-normal',
      label: 'There is slight haze, but the full bottom is visible and tests are normal',
      shortDescription:
        'The deepest point is easy to see, the haze is not worsening, and reliable tests show disinfectant and pH within the recommended range.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The cleanup can wait briefly',
      resultBody:
        'Complete visibility and verified chemistry lower the immediate risk. The remaining haze may be suspended material that the operating filter can remove, but clarity should still be monitored.',
      recommendedAction:
        'Keep circulation and filtration running as directed, remove debris, and recheck before use. Close the pool if visibility worsens or chemistry moves out of range.',
    },
    {
      slug: 'free-chlorine-too-low',
      label: 'Free chlorine is below the recommended minimum',
      shortDescription: 'Testing shows inadequate free chlorine for the pool’s sanitizer and stabilizer setup.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not swim until disinfection is restored',
      resultBody:
        'CDC recommends at least 1 ppm free chlorine in pools, or at least 2 ppm when cyanuric acid or stabilized chlorine is used. Low free chlorine leaves less disinfectant available to control germs and algae.',
      recommendedAction:
        'Keep swimmers out, follow the sanitizer label to restore the correct level, circulate the water, and retest before reopening. Do not estimate the dose or rely on appearance.',
    },
    {
      slug: 'ph-far-out-of-range',
      label: 'pH is below 6.5 or above 8.0',
      shortDescription:
        'A reliable test shows pH beyond the limits the Model Aquatic Health Code treats as an imminent public-pool hazard.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Correct the pH before anyone swims',
      resultBody:
        'CDC’s recommended home-pool range is 7.0–7.8. High pH weakens chlorine’s germ-killing ability, while low pH increases corrosion risk and can make the water uncomfortable.',
      recommendedAction:
        'Close the pool, confirm the result with a suitable test, and adjust pH strictly according to the product label. Retest before making another adjustment.',
    },
    {
      slug: 'pump-or-filter-not-working',
      label: 'The pump, filter, or chemical feed system is not working',
      shortDescription:
        'Circulation has stopped, return flow is weak, the pump will not stay primed, or the filter is not operating normally.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Keep the pool closed until circulation works',
      resultBody:
        'Filtration removes suspended material, while circulation distributes disinfectant through the pool. CDC guidance calls for closing a venue when recirculation is not running.',
      recommendedAction:
        'Stop swimming, check the water level and accessible baskets, and follow the equipment manual. Arrange service if normal flow does not return or equipment is leaking, damaged, or repeatedly losing prime.',
    },
    {
      slug: 'green-or-slimy-water',
      label: 'The cloudiness has a green tint or the surfaces feel slimy',
      shortDescription:
        'Color, slippery walls, or visible growth suggests algae rather than ordinary suspended debris.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as an algae and sanitation problem',
      resultBody:
        'Algae growth indicates that sanitation, circulation, or both have not kept the pool under control. Slippery surfaces also add a fall hazard around steps and ladders.',
      recommendedAction:
        'Close the pool, test the full water balance, brush affected surfaces, and follow the sanitizer and equipment instructions for algae treatment. Reopen only after the water is clear and tests are acceptable.',
    },
    {
      slug: 'fecal-or-vomit-contamination',
      label: 'The cloudiness followed feces or vomit in the water',
      shortDescription:
        'A contamination incident occurred and the required disinfection procedure has not been completed.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Close the pool and use the contamination protocol',
      resultBody:
        'Ordinary filtration or a routine chlorine dose is not a substitute for the correct fecal or vomit response. The required treatment depends on the type of contamination and whether cyanuric acid is present.',
      recommendedAction:
        'Clear the pool, remove material with a net or scoop, and follow the current CDC contamination response or local health department instructions. Do not reopen based on appearance alone.',
    },
    {
      slug: 'heavy-use-or-debris',
      label: 'The haze appeared after heavy use or a large debris load',
      shortDescription:
        'Many swimmers, dirt, leaves, sunscreen, or other material entered the pool, but the bottom remains visible.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Pause use while the system catches up',
      resultBody:
        'Swimmer waste and debris consume available chlorine and load the filter. If visibility remains complete and tests are in range, the pool can stay closed while debris is removed and filtration restores clarity.',
      recommendedAction:
        'Skim or vacuum debris, clean accessible baskets, run the system as its manual directs, and retest disinfectant and pH. Escalate if clarity does not improve or the filter cannot maintain flow.',
    },
    {
      slug: 'chemical-fumes-or-coughing',
      label: 'Cloudiness appeared with fumes, coughing, or breathing trouble',
      shortDescription:
        'A chemical was added or spilled, and people nearby developed coughing, chest tightness, severe eye irritation, or trouble breathing.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Leave the area and get emergency help',
      resultBody:
        'Pool chemicals can release dangerous gases or react violently when incompatible products are mixed. Symptoms near the pool or equipment room can indicate a chemical exposure.',
      recommendedAction:
        'Move everyone to fresh air without entering the chemical area. Call 911 for breathing trouble and contact Poison Control at 1-800-222-1222. Do not attempt cleanup unless trained and equipped.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The water is warning you that something changed',
      description:
        'Suspended debris, algae, chemical imbalance, or poor filtration may be affecting clarity. Appearance does not reveal which cause is responsible.',
      severity: 'caution',
      chainLabel: 'Cloudiness → test and inspect',
    },
    {
      stageLabel: 'IF SWIMMERS ENTER',
      title: 'A person below the surface may be harder to see',
      description:
        'Lost bottom visibility can delay recognition of a swimmer in distress and prevent supervisors from seeing submerged hazards.',
      severity: 'danger',
      chainLabel: 'Poor visibility → delayed rescue',
    },
    {
      stageLabel: 'IF DISINFECTION IS INADEQUATE',
      title: 'Germ and algae control can weaken',
      description:
        'Low free chlorine or high pH can reduce effective disinfection. Organic material from swimmers and debris can consume the disinfectant that remains.',
      severity: 'warning',
      chainLabel: 'Low effective sanitizer → contamination risk',
    },
    {
      stageLabel: 'IF CIRCULATION STAYS POOR',
      title: 'Particles remain suspended and treatment stays uneven',
      description:
        'A stopped pump, restricted flow, or ineffective filter prevents normal particle removal and may keep disinfectant from being distributed throughout the pool.',
      severity: 'warning',
      chainLabel: 'Poor flow → persistent haze',
    },
    {
      stageLabel: 'IF CHEMICALS ARE GUESSED OR MIXED',
      title: 'The attempted fix can create a separate emergency',
      description:
        'Incompatible pool chemicals can release toxic gas, create heat, or react violently. Repeated unmeasured dosing can also move the water farther from a safe balance.',
      severity: 'danger',
      chainLabel: 'Guesswork → chemical exposure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Slight haze, full bottom visibility, and verified chemistry in range',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Run filtration as directed, remove debris, and monitor clarity. Recheck before use and close the pool if the haze worsens.',
    },
    {
      situation: 'The deepest point or main drain is not clearly visible',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Close and secure the pool immediately. Account for everyone and do not reopen until the full bottom is plainly visible.',
    },
    {
      situation: 'Free chlorine is low or the sanitizer level is unknown',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep swimmers out, test with a reliable kit, restore the product-appropriate level, circulate, and retest before reopening.',
    },
    {
      situation: 'pH is outside the recommended range',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Confirm the reading and correct it according to the chemical label. CDC recommends pH 7.0–7.8 for home pools.',
    },
    {
      situation: 'Heavy use or debris caused haze but the bottom remains visible',
      ignoreAnswer: 'Only while the pool stays closed',
      severity: 'caution',
      whatToDo:
        'Remove debris, clean accessible baskets, filter the water, and verify disinfectant and pH before allowing swimmers back.',
    },
    {
      situation: 'The pump or filter is not operating normally',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Keep the pool closed. Follow the equipment manual for basic checks and arrange service if normal circulation cannot be restored safely.',
    },
    {
      situation: 'A treatment chemical was just added',
      ignoreAnswer: 'Only until label reentry conditions are met',
      severity: 'caution',
      whatToDo:
        'Keep swimmers out for the conditions stated on that exact product label. Confirm chemistry and full bottom visibility before reopening.',
    },
    {
      situation: 'Cloudiness repeatedly returns despite normal tests and filtration',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Get a complete water analysis and have circulation, filter condition, chemical feed, and equipment sizing assessed instead of repeatedly adding clarifier.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Close the pool if visibility is incomplete',
      body:
        'Look from the deck toward the deepest point. If you cannot clearly identify the bottom, drain, and objects below the surface, get everyone out, account for all swimmers, and prevent access.',
    },
    {
      title: 'Step 2: Test free chlorine and pH',
      body:
        'Use an unexpired DPD test kit or another suitable test used exactly as directed. Record the results before adding anything. If a result seems implausible, repeat it or have a fresh sample professionally tested.',
      destinationProblemSlug: 'low-chlorine-in-a-pool',
    },
    {
      title: 'Step 3: Check circulation and filtration',
      body:
        'Confirm that the pump is running, return flow is present, the water level is adequate, and accessible skimmer and pump baskets are clear. Follow the filter manual for pressure readings, cleaning, and backwashing.',
    },
    {
      title: 'Step 4: Correct only the imbalance you measured',
      body:
        'Follow the exact chemical label and pool-volume directions. Add one product at a time, keep swimmers away during treatment, and never mix different pool chemicals or chlorine with acid.',
      destinationProblemSlug: 'high-ph-in-a-pool',
    },
    {
      title: 'Step 5: Address algae or contamination separately',
      body:
        'Green or slimy water needs algae treatment, while fecal or vomit contamination requires the current CDC or local health procedure. Reopen only when treatment is complete, chemistry is acceptable, and the full bottom is visible.',
      destinationProblemSlug: 'green-pool-water',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'A person cannot be accounted for',
      description:
        'Treat this as a possible drowning emergency. Call 911 and begin rescue within your training rather than troubleshooting the water.',
      severity: 'danger',
    },
    {
      title: 'The bottom or main drain is not clearly visible',
      description:
        'Cloudiness has crossed into a direct supervision and rescue hazard. Keep everyone out until complete visibility is restored.',
      severity: 'danger',
    },
    {
      title: 'Anyone develops coughing, chest tightness, or trouble breathing',
      description:
        'Move to fresh air and call 911 for breathing trouble. Chemical fumes may be present, especially after a spill, equipment error, or mixed products.',
      severity: 'danger',
    },
    {
      title: 'Feces or vomit entered the pool',
      description:
        'Close the pool and follow the correct contamination response. Routine filtering or guessing at a chlorine dose is not enough.',
      severity: 'danger',
    },
    {
      title: 'The pump or recirculation system has stopped',
      description:
        'Swimmers should remain out until circulation, chemical feed, and water quality have been restored and verified.',
      severity: 'warning',
    },
    {
      title: 'Free chlorine is absent or pH is far outside range',
      description:
        'Do not rely on water color or smell. Close the pool, correct the measured problem according to the product label, and retest.',
      severity: 'warning',
    },
    {
      title: 'The water is green, surfaces are slimy, or clarity keeps worsening',
      description:
        'These signs point away from a harmless one-time haze and toward algae, inadequate sanitation, or continuing filtration trouble.',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is cloudy pool water always unsafe?',
      answer:
        'Not every slight haze means the pool is contaminated. It is unsafe to swim when the bottom is not clearly visible, the disinfectant or pH is unknown or out of range, circulation has stopped, or contamination is suspected.',
    },
    {
      question: 'Can I swim if I can still see the main drain?',
      answer:
        'Visibility clears one important safety check, but not the chemistry check. If the entire bottom is plainly visible and reliable tests show disinfectant and pH in range, the immediate risk is lower. Wait for clear water if the haze is unusual, worsening, or unexplained.',
    },
    {
      question: 'Why did my pool turn cloudy after shocking it?',
      answer:
        'Oxidized debris or precipitated minerals may remain suspended, and some treatments can produce cloudiness when the water is unbalanced. Follow the exact product label, keep filtering, and retest rather than adding another chemical automatically.',
    },
    {
      question: 'Will running the filter clear cloudy water?',
      answer:
        'It can clear suspended particles if the filter and circulation system are working correctly. It will not by itself correct low sanitizer, extreme pH, algae, a contamination incident, or a damaged filtration system.',
    },
    {
      question: 'Can high pH make pool water cloudy?',
      answer:
        'Yes. High pH can contribute to cloudiness and scaling, and CDC notes that chlorine becomes less effective as pH rises. Test before adding acid or any other pH reducer.',
    },
    {
      question: 'Can low chlorine cause cloudy water?',
      answer:
        'Yes. Low effective sanitizer can allow organic material and algae to build up. Restore chlorine according to the product label and account for cyanuric acid when interpreting the result.',
    },
    {
      question: 'Should I add pool clarifier?',
      answer:
        'Clarifier may help a compatible filter capture fine suspended particles, but it does not fix poor disinfection, incorrect pH, algae, or failed circulation. Use it only when your filter and the product instructions allow it.',
    },
    {
      question: 'Should I backwash the filter whenever the pool is cloudy?',
      answer:
        'Not automatically. Backwash or clean the filter according to its manual and pressure guidance. The correct procedure depends on whether the pool uses a sand, cartridge, or diatomaceous-earth filter.',
    },
    {
      question: 'Does a strong chlorine smell mean there is too much chlorine?',
      answer:
        'Not necessarily. A strong pool odor often involves chloramines formed when chlorine combines with swimmer waste. Test free and combined chlorine and improve ventilation at an indoor pool instead of judging by smell.',
    },
    {
      question: 'Are test strips accurate enough for cloudy pool water?',
      answer:
        'They can provide a useful screening result when fresh and used correctly, but CDC says DPD kits are more accurate for chlorine and pH. Confirm unexpected or borderline readings before dosing chemicals.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: '2024 Model Aquatic Health Code: Code Language, 5th Edition',
      url: 'https://www.cdc.gov/model-aquatic-health-code/media/pdfs/2024/11/5th-Ed-MAHC-Code-508.pdf',
      sourceType: 'government',
      notes:
        'The model code identifies a nonvisible pool bottom, inadequate disinfectant, extreme pH, and certain recirculation failures as grounds for immediate correction or closure at public venues. It is model guidance, not nationwide law.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Preventing Swimming-related Illnesses',
      url: 'https://www.cdc.gov/healthy-swimming/prevention/',
      sourceType: 'government',
      notes:
        'CDC advises swimmers to make sure the drain at the bottom of the deep end is visible and explains that proper disinfectant and pH reduce the likelihood of swimming-related illness.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Home Pool and Hot Tub Water Treatment and Testing',
      url: 'https://www.cdc.gov/healthy-swimming/about/home-pool-and-hot-tub-water-treatment-and-testing.html',
      sourceType: 'government',
      notes:
        'Provides home-pool chlorine and pH recommendations, explains how pH affects chlorine and equipment, and identifies DPD testing as more accurate than test strips.',
    },
    {
      publisher: 'Centers for Disease Control and Prevention',
      title: 'Pool Chemical Safety',
      url: 'https://www.cdc.gov/healthy-swimming/toolkit/pool-chemical-safety.html',
      sourceType: 'government',
      notes:
        'Covers safe chemical storage and handling, closing to swimmers when recirculation is not running, and preventing incompatible pool chemicals from mixing.',
    },
    {
      publisher: 'City of Manchester, New Hampshire Health Department',
      title: 'Manage My Pool',
      url: 'https://www.manchesternh.gov/Departments/Health/Environmental-Health/Recreational-Water-Quality/Manage-My-Pool',
      sourceType: 'government',
      notes:
        'Municipal guidance for public and semi-public pools says water must be clear enough to see the bottom and identify a person in distress, and connects clarity with filtration, circulation, disinfectant, and pH checks.',
    },
    {
      publisher: 'Pentair',
      title: 'Pool Water Guide',
      url: 'https://www.pentair.com/en-us/education-support/water-education-center/pool-and-spa-education/water-chemistry.html',
      sourceType: 'manufacturer',
      notes:
        'Describes common links between murky water and ineffective chlorine, high pH, high alkalinity, high calcium hardness, scaling, and inadequate circulation.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'DPD pool water test kit',
      description:
        'Measures free chlorine and pH more reliably than judging by color, smell, or water clarity alone. Use fresh reagents and follow the kit directions.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pump and filter owner’s manual',
      description:
        'Gives the correct operating pressure, cleaning or backwashing procedure, valve positions, and shutdown steps for the exact equipment installed.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Pool skimmer, brush, and compatible vacuum',
      description:
        'Removes leaves, dirt, surface film, and settled debris so the sanitizer and filter do not have to handle the entire contaminant load.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Qualified pool water and equipment service',
      description:
        'Useful when cloudiness returns despite verified chemistry, the pump loses prime, flow remains weak, the filter behaves abnormally, or chemical dosing is uncertain.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'green-pool-water', anchorText: 'Can I ignore green pool water?', relationshipType: 'escalation' },
    { slug: 'high-ph-in-a-pool', anchorText: 'Can I ignore high pH in my pool?', relationshipType: 'cause' },
    {
      slug: 'low-chlorine-in-a-pool',
      anchorText: 'Can I ignore low chlorine in my pool?',
      relationshipType: 'cause',
    },
  ],
};
