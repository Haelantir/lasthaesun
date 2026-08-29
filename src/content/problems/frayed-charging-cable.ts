import type { ProblemSeed } from '../types';

/**
 * Technology > Phones > Charging > Frayed Charging Cable.
 *
 * The distinction the page is built around, and the one most advice gets
 * wrong: which side of the charger the damage is on. A frayed USB cable
 * between the brick and the phone carries low-voltage DC, so the realistic
 * failure is a short, heat at the connector and a damaged phone. A frayed
 * cord on the mains side of the adapter is a shock hazard. CPSC's rule
 * covers both and is short: do not use a damaged cord, do not tape it,
 * replace it.
 */
export const frayedChargingCable: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'charging',
  slug: 'frayed-charging-cable',
  canonicalPath: '/technology/phones/charging/frayed-charging-cable/',
  name: 'Frayed Charging Cable',
  eyebrow: 'Technology · Phones · Charging',

  h1: 'Can I Ignore a Frayed Phone Charging Cable?',
  seoTitle: 'Frayed Phone Charger Cable: Is It Dangerous? | Can I Ignore It',
  metaDescription:
    'A split charging cable is cheap to replace and CPSC says not to tape it. See which frays actually matter and which side of the charger is the risky one.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'No, and a replacement is cheap',

  shortAnswer:
    'No. Once the insulation has split and you can see wire, the cable is finished. CPSC’s rule for a damaged cord is to replace it and never to tape it up, and that goes double for the cord that plugs into the wall. This is a cheap fix that stays cheap only while it is the cable that is damaged.',

  whyItMattersHeading: 'Why Does a Frayed Cable Matter?',
  whyItMatters: [
    'The insulation is the plastic layer around the conductors, and a fabric braid over it is only a wear cover. A fluffy braid is a warning; a split in the plastic underneath is the fault. Once that opens, conductors can touch each other or anything metal, and a short at a connector makes heat quickly.',
    'Where the damage sits changes the stakes. Between the adapter and the phone the voltage is low, so the damage lands on the connector and the port. On the mains side — the adapter’s own cord, or anything that plugs into an outlet — the same fray is a shock and fire risk. That is the side CPSC is describing when it says to replace a damaged cord and never tape it.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using It Now If:',

  lastReviewedAt: new Date('2026-08-29T00:00:00Z'),
  reviewScope:
    'Damaged cords, CPSC guidance against taping or repairing them, exposed conductors, heat at connectors and recalled charging cables, checked against CPSC, USFA and ESFI material.',
  disclaimer:
    'General electrical-safety guidance for consumer charging cables. It does not cover repairs to a device’s internal charging circuitry, and a phone that has been damaged by a faulty cable needs a technician rather than another cable.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'sheath-split-wires-visible',
      label: 'The sheath has split and you can see wires',
      shortDescription: 'Usually right at the connector, where the cable bends most.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Replace it',
      resultBody:
        'Exposed conductors are the point CPSC draws the line at. The cable will keep working right up until the moment it does not.',
      recommendedAction: 'Take it out of use today and buy a replacement.',
    },
    {
      slug: 'outer-braid-fluffy-only',
      label: 'The outer braid is fluffy but nothing is exposed',
      shortDescription: 'Fabric wear over intact plastic insulation.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Watch it closely',
      resultBody:
        'The braid is a wear cover over the insulation, so a fluffy braid is not yet a fault. It is a reliable warning that the plastic underneath is next.',
      recommendedAction: 'Keep using it if nothing conductive shows, and order a replacement now rather than after it splits.',
    },
    {
      slug: 'bent-at-the-connector',
      label: 'It only works at a certain angle',
      shortDescription: 'You have to prop the phone or hold the plug just so.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Broken strands inside',
      resultBody:
        'Intermittent contact means conductors have snapped and are arcing across the gap when they touch. That is where the heat comes from.',
      recommendedAction: 'Stop propping it up and replace the cable.',
    },
    {
      slug: 'connector-hot',
      label: 'The plug or the port gets hot',
      shortDescription: 'Warm is normal on a fast charger; hot is not.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Something is shorting',
      resultBody:
        'Heat concentrated at the connector rather than spread along the cable is a bad joint or a short. It damages the phone’s port as well as the cable.',
      recommendedAction: 'Unplug it now and do not use that cable again.',
    },
    {
      slug: 'taped-up',
      label: 'It has been wrapped in tape',
      shortDescription: 'Electrical tape, washi tape, a spring off a pen.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'CPSC says specifically not to do this',
      resultBody:
        'Tape holds the cable in the bent shape that broke it and traps any heat inside. The guidance is to replace a damaged cord rather than repair it.',
      recommendedAction: 'Bin it and use a new cable.',
    },
    {
      slug: 'damage-on-the-mains-side',
      label: 'The damage is on the cord that plugs into the wall',
      shortDescription: 'The adapter’s own lead, or a cable that goes straight into an outlet.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'This is the dangerous side',
      resultBody:
        'That cord carries mains voltage. A split there is a shock and fire risk, not just a charging problem.',
      recommendedAction: 'Unplug it at the wall, stop using it, and replace the adapter.',
    },
    {
      slug: 'charging-in-bed',
      label: 'It is frayed and you charge under a pillow or duvet',
      shortDescription: 'Cable pinched under bedding overnight.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The worst combination on this page',
      resultBody:
        'A damaged cable that can get hot, buried in something that burns, next to someone asleep. Bedding also crushes the cable and causes the fray in the first place.',
      recommendedAction: 'Charge on a hard surface away from bedding, and replace the cable.',
    },
    {
      slug: 'cheap-unbranded-cable',
      label: 'It is an unbranded cable from a market stall',
      shortDescription: 'No brand marks, no certification logos.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Fraying early is the symptom',
      resultBody:
        'CPSC has recalled charging cables and USB adapters for shock and fire hazards. Thin insulation that gives up quickly is the visible end of that problem.',
      recommendedAction: 'Replace it with a certified cable from a brand you can look up.',
    },
    {
      slug: 'phone-side-port-damaged',
      label: 'The phone’s port is blackened or loose',
      shortDescription: 'Scorch marks in the socket, or the plug wobbles.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The damage has moved to the phone',
      resultBody:
        'A bad cable takes the port with it. A new cable in a damaged port carries on where the old one left off.',
      recommendedAction: 'Get the port looked at before you keep charging.',
    },
    {
      slug: 'cable-was-recalled',
      label: 'The model has been recalled',
      shortDescription: 'A brand you recognise, and a notice you half-remember.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Stop using it and claim',
      resultBody:
        'CPSC recall notices for charging cables normally come with a refund or replacement. That covers a cable you were going to bin anyway.',
      recommendedAction: 'Look it up on cpsc.gov and follow the recall instructions.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'The first split',
      title: 'Insulation opens at the bend',
      description: 'Almost always at the connector, where the cable flexes every time the phone moves.',
      severity: 'info',
      chainLabel: 'Insulation splits',
    },
    {
      stageLabel: 'Over days',
      title: 'Strands break inside',
      description: 'Fewer conductors carry the same current, so the ones left run hotter.',
      severity: 'caution',
      chainLabel: 'Strands break',
    },
    {
      stageLabel: 'Over days',
      title: 'The connection starts arcing',
      description: 'Broken strands touching and parting is what makes a cable work only at one angle.',
      severity: 'warning',
      chainLabel: 'Arcing at the plug',
    },
    {
      stageLabel: 'Weeks',
      title: 'Heat damages the port',
      description: 'The phone’s socket discolours and loosens. Now the repair is a phone repair.',
      severity: 'warning',
      chainLabel: 'Port damaged',
    },
    {
      stageLabel: 'The bad night',
      title: 'A short against something that burns',
      description: 'A hot connector under a pillow or against a duvet is how a two-dollar cable becomes a house fire.',
      severity: 'danger',
      chainLabel: 'Fire',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'Fabric braid worn, insulation intact',
      ignoreAnswer: 'Yes, briefly',
      severity: 'caution',
      whatToDo: 'Order a replacement before anything conductive shows.',
    },
    {
      situation: 'Insulation split, wire visible',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Take it out of use today.',
    },
    {
      situation: 'Works only at one angle',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Replace it — the strands inside have broken.',
    },
    {
      situation: 'Held together with tape',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Bin it. CPSC says a taped cord should not be used.',
    },
    {
      situation: 'Connector or plug getting hot',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Unplug it and stop using that cable.',
    },
    {
      situation: 'Damage on the mains-side cord',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Unplug at the wall and replace the adapter.',
    },
    {
      situation: 'Charging under bedding with any damage',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo: 'Move it onto a hard surface tonight, cable or no cable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Look at where the damage is',
      body: 'Phone end, adapter end, or the cord going into the wall. The last one is the one that carries mains voltage and the one to deal with first.',
    },
    {
      title: 'Take it out of circulation properly',
      body: 'Cut the connector off before you bin it. A cable left in a drawer gets used again by whoever needs one at midnight.',
    },
    {
      title: 'Check the port while you are at it',
      body: 'Shine a light into the phone’s socket. Discolouration or a plug that no longer clicks means the damage has spread past the cable.',
    },
    {
      title: 'Buy a certified replacement',
      body: 'A named brand with certification marks, not the cheapest one at the till. Charging cables are one of the categories CPSC issues recalls in, so the brand is worth something.',
    },
    {
      title: 'Fix the thing that frayed it',
      body: 'Cables die where they bend hardest — under a pillow, wrapped around a charger, yanked out sideways. A different charging spot outlasts a different cable.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The connector, plug or cable is hot to the touch',
      severity: 'danger',
    },
    {
      title: 'Any damage to a cord that plugs directly into a wall outlet',
      description: 'Mains voltage. Unplug it before you do anything else.',
      severity: 'danger',
    },
    {
      title: 'Scorch marks, melted plastic or a burnt smell at either end',
      severity: 'danger',
    },
    {
      title: 'Sparks when plugging in or unplugging',
      severity: 'danger',
    },
    {
      title: 'Bare metal strands showing anywhere on the cable',
      description: 'On a mains cord CPSC warns a single exposed strand can shock or burn you. On the low-voltage side it is a short and a heat risk.',
      severity: 'warning',
    },
    {
      title: 'The phone gets unusually hot while charging with it',
      severity: 'warning',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Can I just wrap it in electrical tape?',
      answer:
        'No. CPSC says not to use a cord that is damaged or repaired with tape. Tape holds the cable in the bent position that broke it and keeps the heat in.',
    },
    {
      question: 'Is a frayed phone cable really a fire risk?',
      answer:
        'On the low-voltage side the realistic risk is a hot connector and a damaged port. It becomes a fire risk when that heat is against bedding or a sofa.',
    },
    {
      question: 'Can a bad cable damage my phone?',
      answer:
        'Yes, most often the charging port. Heat and arcing at the plug discolour the contacts and loosen the socket, and that is a repair rather than a purchase.',
    },
    {
      question: 'Why does it always fray at the same place?',
      answer:
        'That is where the strain sits: right behind the connector, where the cable bends every time you pick the phone up. Charging somewhere the cable is not bent helps more than buying a tougher one.',
    },
    {
      question: 'The cable still works fine. Why replace it?',
      answer: 'Working is not the test — exposed conductors are. It will keep working right up until the short.',
    },
    {
      question: 'Are braided cables safer?',
      answer:
        'They resist wear better, but the braid is a cover rather than the insulation. Check the plastic underneath before deciding a fluffy cable is fine.',
    },
    {
      question: 'Is it safe to charge my phone overnight?',
      answer:
        'With an undamaged cable on a hard surface, that is ordinary use. With a frayed one under a pillow, it is the scenario worth avoiding.',
    },
    {
      question: 'Do cheap cables fray faster?',
      answer:
        'Generally yes, and CPSC has recalled USB cables and adapters for shock and fire hazards. Thin insulation is the visible part of a thinner build.',
    },
    {
      question: 'What about a frayed laptop charger cable?',
      answer: 'Same rule, higher stakes — laptop adapters run at mains voltage on one side and higher power on the other.',
    },
    {
      question: 'How do I dispose of it?',
      answer: 'Cut the ends off so nobody uses it again, then put it in electrical recycling rather than the household bin.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Electrical Cords: Ways to Protect Yourself and Others From Shock or Electrocution',
      url: 'https://www.cpsc.gov/s3fs-public/WaysToProtectYourselfAndOthersFromShockOrElectrocutionuUpdated07312019.pdf',
      sourceType: 'government',
      notes:
        'CPSC states that a cord which is damaged or repaired with tape should not be used, that damaged cords should be replaced rather than repaired, and that touching even a single exposed strand can cause a shock or burn.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Home Electrical Safety Checklist',
      url: 'https://www.cpsc.gov/s3fs-public/513.pdf',
      sourceType: 'government',
      notes: 'CPSC checklist covering inspection of cords for cracked or frayed insulation, bare wires and loose connections before use.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'Target Recalls USB Charging Cables Due to Shock and Fire Hazards',
      url: 'https://www.cpsc.gov/Recalls/2019/Target-Recalls-USB-Charging-Cables-Due-to-Shock-and-Fire-Hazards',
      sourceType: 'government',
      notes: 'CPSC recall of Lightning USB charging cables where metal around the cord could become electrically charged during charging.',
    },
    {
      publisher: 'U.S. Consumer Product Safety Commission',
      title: 'IKEA Recalls USB Chargers Due to Burn and Electric Shock Hazards',
      url: 'https://www.cpsc.gov/Recalls/2024/IKEA-Recalls-USB-Chargers-Due-to-Burn-and-Electric-Shock-Hazards',
      sourceType: 'government',
      notes: 'CPSC recall covering USB chargers whose cables can become damaged or break over time, posing burn and electric shock hazards.',
    },
    {
      publisher: 'U.S. Fire Administration',
      title: 'Electrical Fire Safety',
      url: 'https://www.usfa.fema.gov/downloads/pdf/publications/electrical_fire_safety_vertical.pdf',
      sourceType: 'government',
      notes: 'USFA consumer sheet on electrical fire causes, including damaged cords and cords run under rugs or bedding.',
    },
    {
      publisher: 'Electrical Safety Foundation International',
      title: 'Extension Cord Safety Tips',
      url: 'https://www.esfi.org/extension-cord-safety-tips/',
      sourceType: 'industry',
      notes: 'ESFI guidance on inspecting cords before use and replacing worn, old or damaged cords immediately rather than repairing them.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'A certified replacement cable',
      description: 'A named brand carrying certification marks. This is the whole fix for most people reading this.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'A cable with a moulded strain relief',
      description: 'The thicker collar behind the connector is what stops the next one fraying in the same spot.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'CPSC recall search at cpsc.gov',
      description: 'Worth a look before you bin a branded cable — recalls usually come with a refund.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Electrical waste recycling at your local drop-off',
      description: 'Cut the connectors off first so the cable does not come back into use.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    { slug: 'hot-phone-while-charging', anchorText: 'Can I ignore a phone that gets hot while charging?', relationshipType: 'escalation' },
    { slug: 'loose-charging-port', anchorText: 'Can I ignore a charging port that will not hold the cable?', relationshipType: 'follow_up' },
    { slug: 'cheap-third-party-charger', anchorText: 'Can I ignore which charger I use?', relationshipType: 'related' },
    { slug: 'damaged-laptop-charger-cable', anchorText: 'Can I ignore a damaged laptop charger cable?', relationshipType: 'sibling' },
    { slug: 'swollen-phone-battery', anchorText: 'Can I ignore a swollen phone battery?', relationshipType: 'escalation' },
  ],
};
