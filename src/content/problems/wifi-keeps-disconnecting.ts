import type { ProblemSeed } from '../types';

export const wifiKeepsDisconnecting: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'wifi-and-connectivity',
  slug: 'wifi-keeps-disconnecting',
  canonicalPath: '/technology/networking/wifi-and-connectivity/wifi-keeps-disconnecting/',
  name: 'Wi-Fi Keeps Disconnecting',
  eyebrow: 'Technology · Networking · Wi-Fi & Connectivity',

  h1: 'Can I Ignore Wi-Fi That Keeps Disconnecting?',
  seoTitle: 'Wi-Fi Keeps Disconnecting: Causes, Tests and When to Act',
  metaDescription:
    'Repeated Wi-Fi drops are usually not dangerous, but they should not become normal. Separate device, coverage, router, modem and ISP problems.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the connection?',
  canIUseItLabel: 'Yes, if you have a fallback',

  shortAnswer:
    'Probably not as a permanent workaround. You can keep using the network if the drops are brief and nothing important depends on it, but repeated disconnects should be isolated to the device, Wi-Fi radio, router, modem, or ISP.',

  whyItMattersHeading: 'First Find Out What Is Actually Disconnecting',
  whyItMatters: [
    'Start by separating Wi-Fi from internet service. If one device drops while everything else stays online, focus on that device. If every device drops, watch whether the Wi-Fi network disappears, the router restarts, or devices remain joined to Wi-Fi but lose internet access.',
    'Repeated reconnects can interrupt calls, uploads, work sessions, cloud backups, and remote access to connected devices. The Wi-Fi symptom itself is usually a low-safety-risk problem, but the stakes change if it removes access to alerts or controls you rely on.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Keep Waiting If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Home Wi-Fi dropouts, device-versus-network diagnosis, coverage, interference, firmware, ISP escalation and offline connected devices checked against FCC, FTC and manufacturer guidance.',
  disclaimer:
    'General home-network guidance only. Follow instructions for your exact router, modem, gateway and connected devices; workplace, school and managed networks should be handled by their administrator.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'one-drop-during-known-restart',
      label: 'The connection dropped during a known restart or update',
      shortDescription:
        'The interruption happened only while you intentionally restarted or updated the router, modem, or gateway.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'A planned interruption is normal',
      resultBody:
        'Restarting or updating network equipment temporarily disconnects its users. One drop during that process does not establish an ongoing fault.',
      recommendedAction:
        'Wait for the normal status lights to return, reconnect, and confirm that the connection remains stable afterward.',
    },
    {
      slug: 'only-one-device-disconnects',
      label: 'Only one phone, computer, or other device disconnects',
      shortDescription:
        'Other devices remain connected to the same Wi-Fi network and can use the internet normally.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Focus on the device, not the whole network',
      resultBody:
        'When other devices stay online, the likely causes shift toward the device’s saved network profile, software, VPN, power settings, or wireless adapter.',
      recommendedAction:
        'Restart the device, forget and rejoin the network, install available system and adapter updates, and test without VPN or security software if appropriate.',
    },
    {
      slug: 'disconnects-only-in-one-area',
      label: 'It disconnects only in one room or at the edge of coverage',
      shortDescription:
        'The connection becomes stable when the device moves closer to the router or access point.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'This fits a coverage problem',
      resultBody:
        'Walls, floors, metal objects, router placement, and the shorter range of higher-frequency bands can make a connection unreliable in part of a home.',
      recommendedAction:
        'Test closer to the router, try another supported band, and move the router toward a central, open location before buying additional equipment.',
    },
    {
      slug: 'only-one-app-or-vpn-drops',
      label: 'Wi-Fi stays connected but one app or VPN disconnects',
      shortDescription:
        'Websites and other services continue working while a particular app, game, meeting service, or VPN loses its session.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'The Wi-Fi link may not be the problem',
      resultBody:
        'A connected Wi-Fi indicator plus working internet in other apps points toward the affected service, its server, a firewall, or VPN software rather than a complete wireless dropout.',
      recommendedAction:
        'Test another website or app, check the service status, restart the affected software, and follow its support guidance before changing router settings.',
    },
    {
      slug: 'all-devices-connected-without-internet',
      label: 'Every device stays on Wi-Fi but loses internet access',
      shortDescription:
        'The Wi-Fi network remains visible and connected, but online services stop working across the home.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Check the modem, gateway, and ISP',
      resultBody:
        'The local wireless network may still be operating while the modem, fiber terminal, provider connection, or internet service is down.',
      recommendedAction:
        'Check the provider’s outage status and equipment lights, restart equipment using the provider’s instructions, and contact the ISP if the failure returns.',
    },
    {
      slug: 'wireless-drops-while-ethernet-works',
      label: 'Multiple wireless devices drop while Ethernet stays stable',
      shortDescription:
        'Wired devices continue reaching the internet through the same router while phones and laptops lose Wi-Fi.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'The fault is on the wireless side',
      resultBody:
        'A stable wired connection makes a general ISP outage less likely and points toward radio interference, coverage, firmware, compatibility, or wireless settings.',
      recommendedAction:
        'Update the router, test its other supported band, check placement and interference, and use the manufacturer’s guidance before changing advanced channel settings.',
    },
    {
      slug: 'router-keeps-restarting',
      label: 'The router’s lights cycle and the router repeatedly restarts',
      shortDescription:
        'The network disappears while the router or gateway appears to power off and boot again.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Repeated rebooting is not a normal Wi-Fi drop',
      resultBody:
        'Repeated restarts can come from firmware, power, configuration, overheating, or failing equipment. Reconnecting each time does not address the cause.',
      recommendedAction:
        'Use the specified power adapter, keep the router ventilated, install supported firmware, and contact the manufacturer or ISP if the restarts continue.',
    },
    {
      slug: 'important-alerting-device-offline',
      label: 'The dropout takes an important connected device offline',
      shortDescription:
        'A camera, alarm, lock, doorbell, or other device you rely on for remote status or alerts shows as offline.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Verify the device and its backup behavior now',
      resultBody:
        'An offline device may be unable to send cloud alerts, provide remote access, or receive commands. Its local and backup functions depend on the particular product.',
      recommendedAction:
        'Check the device in person when possible, confirm which functions still work without Wi-Fi, restore its connection, and arrange another way to receive important information.',
    },
    {
      slug: 'unknown-devices-or-settings-changed',
      label: 'Unknown devices appear or router settings changed unexpectedly',
      shortDescription:
        'You find unfamiliar clients, a changed network name, altered passwords, or router settings you did not modify.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat this as a possible security problem',
      resultBody:
        'Random dropouts are not proof of hacking, but unexplained administrative changes or unknown network access should not be dismissed as ordinary interference.',
      recommendedAction:
        'Use a trusted device to change the router administrator and Wi-Fi passwords, remove unknown clients, update firmware, disable unneeded remote management, and contact support if control cannot be restored.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Active connections pause or fail',
      description:
        'Calls, streams, downloads, uploads, and remote sessions may stall while the device reconnects.',
      severity: 'info',
      chainLabel: 'Drop → reconnect',
    },
    {
      stageLabel: 'IF DROPS KEEP REPEATING',
      title: 'Work and data transfers become unreliable',
      description:
        'Repeated interruptions can end meetings, interrupt cloud synchronization, fail uploads, and force applications to retry.',
      severity: 'caution',
      chainLabel: 'Reconnect → retry',
    },
    {
      stageLabel: 'IF MULTIPLE DEVICES ARE AFFECTED',
      title: 'The problem reaches beyond one device',
      description:
        'A router, modem, wireless environment, configuration, or ISP issue becomes more likely, and connected devices may appear offline.',
      severity: 'warning',
      chainLabel: 'Device issue → network issue',
    },
    {
      stageLabel: 'IF THE ROUTER KEEPS RESTARTING',
      title: 'The entire network repeatedly resets',
      description:
        'Every connected device must reconnect while the unresolved firmware, power, configuration, or equipment problem remains.',
      severity: 'warning',
      chainLabel: 'Restart → total interruption',
    },
    {
      stageLabel: 'IF IMPORTANT ALERTS DEPEND ON THE CONNECTION',
      title: 'Remote information may be unavailable',
      description:
        'A disconnected camera, alarm, lock, or other connected product may lose cloud access or remote features until it reconnects.',
      severity: 'danger',
      chainLabel: 'Offline device → missing remote access',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The connection dropped once during a known router restart or update',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo: 'Confirm that the equipment finishes starting and the connection remains stable afterward.',
    },
    {
      situation: 'Only one device disconnects while other devices stay online',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Troubleshoot that device’s saved network, software, VPN, power settings, and wireless adapter.',
    },
    {
      situation: 'The problem happens only in a weak-signal area',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Test closer to the router, try another band, and improve router placement or coverage.',
    },
    {
      situation: 'Wi-Fi remains connected and only one app or VPN stops working',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo: 'Check another app and the affected service’s status before changing the network.',
    },
    {
      situation: 'All devices stay on Wi-Fi but lose internet access',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Check the modem or gateway, provider outage information, and ISP support.',
    },
    {
      situation: 'Wireless devices drop while a wired connection remains stable',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Investigate router firmware, bands, interference, placement, and wireless settings.',
    },
    {
      situation: 'The router or gateway repeatedly restarts',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Check its power setup, ventilation, firmware, and support options rather than accepting the restarts.',
    },
    {
      situation: 'A device that provides important remote alerts or controls is offline',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Verify the device in person, check its offline behavior, and restore or replace the connection it needs.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Find the boundary of the problem',
      body:
        'Turn off cellular data while testing a phone, then check the same Wi-Fi network with another device. If available, compare Wi-Fi with a wired Ethernet connection through the router.',
    },
    {
      title: 'Watch what disappears',
      body:
        'Note whether the Wi-Fi network vanishes, the device remains connected without internet, or the router’s status lights restart. These are different faults and need different fixes.',
    },
    {
      title: 'Check for an ISP outage before resetting anything',
      body:
        'Use cellular service or another connection to check the provider’s status page. Contact the ISP when every device loses internet or a direct wired test is also unstable.',
    },
    {
      title: 'Restart the network once using its instructions',
      body:
        'Follow the ISP or manufacturer’s restart sequence and wait for normal status lights before retesting. Repeatedly rebooting equipment is not a substitute for diagnosing recurring drops.',
    },
    {
      title: 'Correct device, coverage, and interference problems',
      body:
        'Forget and rejoin the network on an affected device, install supported updates, test another Wi-Fi band, move closer, and place the router in a central open location away from major obstructions.',
    },
    {
      title: 'Update and secure the router',
      body:
        'Install firmware from the manufacturer or ISP, use WPA3 Personal or WPA2 Personal, set unique administrator and Wi-Fi passwords, and back up settings before considering a factory reset.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Every device loses access',
      description:
        'A network-wide failure deserves modem, router, gateway, and ISP troubleshooting rather than repeated device resets.',
      severity: 'warning',
    },
    {
      title: 'The router repeatedly power-cycles',
      description:
        'Cycling status lights and a disappearing network point to a router, firmware, power, or hardware problem.',
      severity: 'warning',
    },
    {
      title: 'Wired and wireless connections both fail',
      description:
        'This makes a wireless-only coverage problem less likely and moves attention toward the router, modem, provider equipment, or ISP.',
      severity: 'warning',
    },
    {
      title: 'An important connected device remains offline',
      description: 'Check which local, cloud, alert, and remote-control functions still operate without Wi-Fi.',
      severity: 'danger',
    },
    {
      title: 'Unknown devices appear on the network',
      description:
        'Remove unfamiliar clients, change both router passwords, update firmware, and investigate unexpected administrative changes.',
      severity: 'warning',
    },
    {
      title: 'The connection still drops beside the router',
      description:
        'Persistent drops with a strong signal make simple distance and wall obstruction less likely as the whole explanation.',
      severity: 'caution',
    },
    {
      title: 'The ISP reports no outage and the failures continue',
      description:
        'Save the pattern, equipment status, and test results for router support, ISP diagnostics, or equipment replacement.',
      severity: 'caution',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is Wi-Fi that keeps disconnecting dangerous?',
      answer:
        'Usually not by itself. It is normally a reliability problem rather than a direct physical hazard. Treat it more urgently when it removes access to important alerts, communications, or controls.',
    },
    {
      question: 'How can I tell whether Wi-Fi or the internet connection is failing?',
      answer:
        'If the Wi-Fi network disappears or a wired connection still works, focus on the wireless side. If devices remain connected to Wi-Fi but all lose internet, check the modem, gateway, and ISP.',
    },
    {
      question: 'Why does only one device keep disconnecting?',
      answer:
        'That device may have a damaged saved network profile, outdated software or adapter driver, aggressive power saving, incompatible settings, or VPN and security software interference.',
    },
    {
      question: 'Why does Wi-Fi disconnect in only one part of the house?',
      answer:
        'Signal loss through walls, floors, metal, furniture, and distance can make the connection unreliable. Router placement and the selected frequency band also affect coverage.',
    },
    {
      question: 'Should I restart my router every time Wi-Fi drops?',
      answer:
        'One restart is a reasonable troubleshooting step. If regular restarts are required to keep the network working, the underlying firmware, equipment, power, configuration, or ISP problem remains unresolved.',
    },
    {
      question: 'Should I factory-reset the router?',
      answer:
        'Not first. A factory reset erases network names, passwords, device rules, forwarding settings, and other configuration. Record or back up the settings and follow the manufacturer’s escalation steps.',
    },
    {
      question: 'Can router firmware cause disconnections?',
      answer:
        'Yes. Firmware can contain stability, compatibility, and security fixes. Install only firmware supplied by the router manufacturer or ISP for the exact model.',
    },
    {
      question: 'Can nearby networks or household electronics cause Wi-Fi drops?',
      answer:
        'They can contribute to interference and congestion, especially on a crowded band. Moving the router, testing another band, or using an appropriate channel setting may improve reliability.',
    },
    {
      question: 'Do random disconnects mean someone hacked my router?',
      answer:
        'Not usually. Weak coverage, interference, software, and ISP trouble are more common explanations. Unknown clients, changed passwords, or altered administrator settings are stronger reasons to investigate security.',
    },
    {
      question: 'Will a Wi-Fi extender solve the problem?',
      answer:
        'Only if weak coverage is the cause. An extender will not repair an unstable ISP line, failing router, bad device driver, or repeated router rebooting. Test the connection close to the router first.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Federal Communications Commission',
      title: 'Home Network Tips for the Coronavirus Pandemic',
      url: 'https://docs.fcc.gov/public/attachments/DOC-363362A1.pdf',
      sourceType: 'government',
      notes:
        'Supports checking ISP disruptions, restarting a router, considering outdated equipment, recognizing shared-network congestion, comparing common Wi-Fi bands, and placing a router centrally for coverage.',
    },
    {
      publisher: 'Federal Trade Commission',
      title: 'How To Secure Your Home Wi-Fi Network',
      url: 'https://consumer.ftc.gov/articles/how-secure-your-home-wi-fi-network',
      sourceType: 'government',
      notes:
        'Supports router firmware updates, WPA3 or WPA2 encryption, unique Wi-Fi and administrator passwords, reviewing security settings, disabling unnecessary remote features, and using a router firewall.',
    },
    {
      publisher: 'Microsoft',
      title: 'Fix Wi-Fi connection issues in Windows',
      url: 'https://support.microsoft.com/en-US/Windows/Experience/Connectivity-Networking/fix-wi-fi-connection-issues-in-windows',
      sourceType: 'manufacturer',
      notes:
        'Supports comparing devices, forgetting and rejoining a network, restarting modem and router equipment, testing another band, distinguishing router and ISP trouble, checking drivers, and leaving network reset until later.',
    },
    {
      publisher: 'Microsoft',
      title: 'Wi-Fi and your home layout',
      url: 'https://support.microsoft.com/en-us/windows/experience/connectivity-networking/wi-fi-and-your-home-layout',
      sourceType: 'manufacturer',
      notes:
        'Supports the effects of bands, walls, obstacles, router placement, signal strength, nearby networks, channel congestion, household interference, channel width, and older security modes on connection reliability.',
    },
    {
      publisher: 'NETGEAR',
      title: 'My router keeps rebooting itself, what can I do?',
      url: 'https://kb.netgear.com/30858/My-router-keeps-rebooting-itself-what-can-I-do',
      sourceType: 'manufacturer',
      notes:
        'Supports treating repeated router rebooting separately from ordinary client disconnects and checking firmware, power source, the specified power adapter, and model-specific reset or support steps.',
    },
    {
      publisher: 'Google',
      title: 'Troubleshoot Wi-Fi and connection issues for Nest products',
      url: 'https://support.google.com/googlehome/answer/9239960?hl=en',
      sourceType: 'manufacturer',
      notes:
        'Supports checking another device with cellular data disabled, distinguishing ISP outages from individual product trouble, recognizing that offline connected products may require in-person troubleshooting, and checking service status.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Ethernet cable',
      description:
        'A direct wired test helps separate Wi-Fi radio and coverage problems from router, modem, or ISP trouble.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Router manual or management app',
      description:
        'Use the instructions for the exact model to check status, firmware, connected devices, supported bands, logs, restart order, and configuration backups.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'ISP outage and line diagnostic service',
      description:
        'Provider support can confirm local outages, test provider-managed equipment, examine line problems, and replace rented gateways when necessary.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Trusted Wi-Fi signal analyzer',
      description:
        'A signal and channel view can show weak coverage and nearby network congestion before you move equipment or change wireless settings.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
  ],
};
