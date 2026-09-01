import type { ProblemSeed } from '../types';

export const softwareUpdate: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'updates',
  slug: 'software-update',
  canonicalPath: '/technology/software/updates/software-update/',
  name: 'Software Update',
  eyebrow: 'Technology · Software · Updates',

  h1: 'Can I Ignore a Software Update?',
  seoTitle: 'Software Update Waiting? When It Can Wait and When It Cannot',
  metaDescription:
    'Feature updates can often wait briefly, but security fixes and updates for actively exploited flaws should be installed promptly. Learn how to tell.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'moderate',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the device?',
  canIUseItLabel: 'Usually briefly—check what the update fixes',

  shortAnswer:
    'Probably not indefinitely. A routine feature update can often wait until a convenient restart, but install security updates promptly—especially if the vendor or CISA says the flaw is being exploited or your current version is losing support.',

  whyItMattersHeading: 'Why Software Updates Are Different',
  whyItMatters: [
    'An update may add features, fix ordinary bugs, close security vulnerabilities, or combine all three. The notification alone may not tell you which kind it is, so check the built-in updater and the vendor’s release notes before deciding to postpone it.',
    'A short, planned delay can prevent an update from interrupting important work or give you time to verify compatibility. Repeatedly dismissing security updates is different: it leaves known weaknesses in place after a fix is available. Automatic updates reduce the chance that a temporary delay becomes permanent.',
  ].join('\n\n'),

  redFlagsHeading: 'Act Faster If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Consumer update timing, security-patch urgency, temporary deferral, unsupported versions, and safe installation steps checked against U.S. government and vendor guidance.',
  disclaimer:
    'General guidance for consumer software on personal devices. Managed, medical, industrial, vehicle, and safety-critical systems may require specific vendor or administrator procedures; do not bypass them.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'known-exploited-vulnerability',
      label: 'The update fixes a vulnerability being actively exploited',
      shortDescription: 'The vendor or CISA says attackers are using the flaw against real systems.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Install the official fix promptly',
      resultBody:
        'Evidence of exploitation makes this more urgent than an ordinary update reminder. Leaving the affected version online preserves the weakness attackers are already using.',
      recommendedAction:
        'Confirm that your product and version are affected, back up important data, and install the vendor’s update or stated mitigation through an official channel.',
    },
    {
      slug: 'critical-security-release',
      label: 'The vendor calls it a critical or emergency security update',
      shortDescription:
        'The release notes identify a serious security issue and recommend immediate or expedited installation.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not keep dismissing it',
      resultBody:
        'A vendor’s urgent security notice means this release is intended to reduce a specific, significant exposure. Schedule the interruption rather than leaving the fix unapplied.',
      recommendedAction:
        'Save your work, connect the device to reliable power if needed, install from the built-in updater, and complete any required restart.',
    },
    {
      slug: 'unsupported-version',
      label: 'Your current version is no longer supported',
      shortDescription:
        'The vendor has ended security fixes for the operating system, app, or device version you use.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Updating or replacing it is now a security issue',
      resultBody:
        'Unsupported software may keep running, but newly discovered vulnerabilities may never receive patches for that version.',
      recommendedAction:
        'Move to a supported release or replacement. Until then, limit internet exposure and avoid sensitive activity on the unsupported system where practical.',
    },
    {
      slug: 'security-update-keeps-failing',
      label: 'A security update repeatedly fails to install',
      shortDescription:
        'The updater reports an error, rolls back, or continues offering the same security fix.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The vulnerability may still be open',
      resultBody:
        'An update notification disappearing or a device restarting does not prove the patch installed. Repeated failure needs troubleshooting rather than another dismissal.',
      recommendedAction:
        'Check update history, free required storage, restart normally, retry through the official updater, and use vendor support if the failure continues.',
    },
    {
      slug: 'feature-upgrade-supported-version',
      label: 'It is an optional feature upgrade and your current version is supported',
      shortDescription:
        'The release mainly changes features or appearance, while your installed version still receives security fixes.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'This can usually wait',
      resultBody:
        'You can often postpone a major feature change while the current release remains supported and secure. Support status matters more than whether the new interface looks useful.',
      recommendedAction:
        'Keep installing security fixes for your current version and plan the feature upgrade before that version reaches end of support.',
    },
    {
      slug: 'important-work-in-progress',
      label: 'An update would interrupt important work right now',
      shortDescription:
        'You are presenting, traveling, meeting a deadline, or running a task that should not be interrupted.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Use a short, deliberate pause',
      resultBody:
        'Major platforms provide scheduling or pause controls because an immediate restart is not always practical. The safe choice is to reschedule, not disable updates indefinitely.',
      recommendedAction:
        'Save your work, choose a specific installation opportunity in the official update settings, and leave automatic updates enabled.',
    },
    {
      slug: 'documented-compatibility-concern',
      label: 'A required app or accessory has a documented compatibility concern',
      shortDescription:
        'Its vendor has published a warning about the new operating-system or software release.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Verify compatibility before a major upgrade',
      resultBody:
        'Waiting can be reasonable when a necessary tool may stop working, provided your current version remains supported and no urgent security fix is being withheld.',
      recommendedAction:
        'Check both vendors’ guidance, back up important data, install separately offered security fixes, and upgrade when a supported compatibility path is available.',
    },
    {
      slug: 'managed-device-scheduled-later',
      label: 'Your work or school administrator has scheduled the update for later',
      shortDescription:
        'The device is managed and the organization controls testing, deployment, or restart timing.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Follow the managed update schedule',
      resultBody:
        'Managed devices may delay releases for testing or coordinated deployment. Installing around those controls can create support or compatibility problems.',
      recommendedAction:
        'Leave management settings intact and follow your organization’s instructions. Contact its support team if the device reports an urgent security warning.',
    },
    {
      slug: 'unexpected-update-popup',
      label: 'A website, email, or unexpected pop-up tells you to update',
      shortDescription:
        'The message provides a download link instead of directing you to the software’s normal update control.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Ignore the prompt, not legitimate updates',
      resultBody:
        'Fake update notices can lead to unwanted or malicious downloads. A real need to update should be verified independently.',
      recommendedAction:
        'Close the message without using its link. Open the app store, built-in updater, or vendor support site yourself and check for an update there.',
    },
    {
      slug: 'software-no-longer-used',
      label: 'The update is for software you no longer use',
      shortDescription: 'The app is still installed but is no longer needed.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Remove the unused software instead',
      resultBody:
        'Keeping an unused, outdated program creates maintenance work without providing a benefit. Uninstalling it removes the need to patch that installation.',
      recommendedAction:
        'Confirm that no files or other programs depend on it, preserve anything you need, and uninstall it through the normal system controls.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The installed version usually keeps working',
      description:
        'Postponing an update does not necessarily cause an immediate visible problem, which makes repeated dismissal easy.',
      severity: 'info',
      chainLabel: 'Current version',
    },
    {
      stageLabel: 'IF THE UPDATE FIXES SECURITY FLAWS',
      title: 'Known weaknesses remain in place',
      description:
        'The update cannot protect the device until it is installed and, where required, activated by a restart.',
      severity: 'caution',
      chainLabel: 'Unpatched flaws',
    },
    {
      stageLabel: 'IF DETAILS BECOME PUBLIC',
      title: 'Attackers may have a clearer target',
      description:
        'Once a vulnerability and its fix are known, unpatched versions can be identified and targeted using that information.',
      severity: 'warning',
      chainLabel: 'Easier targeting',
    },
    {
      stageLabel: 'IF SUPPORT ENDS',
      title: 'Future patches may stop arriving',
      description:
        'End-of-life software may remain usable while receiving no fixes for newly discovered security problems.',
      severity: 'warning',
      chainLabel: 'No new fixes',
    },
    {
      stageLabel: 'IF THE DEVICE IS COMPROMISED',
      title: 'Data, accounts, and other systems can be affected',
      description:
        'Successful exploitation may expose information, install malware, disrupt the device, or provide a path to connected accounts and systems.',
      severity: 'danger',
      chainLabel: 'Compromise',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The update only adds features, and your current version remains supported',
      ignoreAnswer: 'Yes, briefly',
      severity: 'info',
      whatToDo:
        'Continue installing security fixes and plan the feature upgrade before support for your current version ends.',
    },
    {
      situation: 'It is a routine security update from the official updater',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Save your work and install it at the next practical opportunity rather than repeatedly dismissing it.',
    },
    {
      situation: 'The fixed vulnerability is being actively exploited or marked urgent',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Confirm that your version is affected and install the official update or vendor mitigation promptly.',
    },
    {
      situation: 'The update is installed but waiting for a restart',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Finish current work, save open files, and restart through the normal system controls so the update can complete.',
    },
    {
      situation: 'You are in the middle of an important presentation or task',
      ignoreAnswer: 'Briefly',
      severity: 'info',
      whatToDo:
        'Use the platform’s pause, active-hours, or restart-scheduling controls and choose a specific time to resume.',
    },
    {
      situation: 'A required program has a documented compatibility problem',
      ignoreAnswer: 'Only while the current version is supported',
      severity: 'caution',
      whatToDo:
        'Verify vendor guidance, keep separate security fixes installed, and prepare a tested upgrade path.',
    },
    {
      situation: 'Your version has reached end of support or a security patch keeps failing',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Upgrade, troubleshoot the failed installation, or replace the unsupported product instead of accepting an open-ended gap.',
    },
    {
      situation: 'An unexpected website or email provides an update download',
      ignoreAnswer: 'Ignore that prompt',
      severity: 'warning',
      whatToDo:
        'Do not use the link. Check for updates through the app store, built-in updater, or a vendor site you opened yourself.',
    },
    {
      situation: 'The software is installed but no longer used',
      ignoreAnswer: 'Yes—uninstall it',
      severity: 'info',
      whatToDo:
        'Preserve any needed files, confirm nothing depends on the program, and remove it through the normal uninstall process.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Check what the update actually fixes',
      body:
        'Open the built-in update screen and read the vendor’s release notes or security advisory. Look for terms such as security, vulnerability, critical, actively exploited, feature update, and end of support.',
    },
    {
      title: 'Save your work and protect important files',
      body:
        'Close work that could be interrupted and confirm that irreplaceable files have a current backup before a major operating-system upgrade or recovery attempt.',
    },
    {
      title: 'Install only through an official channel',
      body:
        'Use the operating system’s update settings, a trusted app store, or a vendor site you opened directly. Do not install an update from an unexpected advertisement, email, or browser pop-up.',
    },
    {
      title: 'Schedule the interruption instead of disabling updates',
      body:
        'Use pause controls, active hours, or a scheduled restart when available. Leave yourself a clear return point so a temporary delay does not become a permanent one.',
    },
    {
      title: 'Fix failed updates and replace unsupported software',
      body:
        'Check installation history and the displayed error, confirm power, storage, and network requirements, and follow vendor troubleshooting. Move away from versions that no longer receive security support.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The vulnerability is in CISA’s Known Exploited Vulnerabilities Catalog',
      description:
        'The catalog is based on evidence that the flaw has been exploited in the wild. Confirm that your product and version are affected and prioritize the vendor’s remediation.',
      severity: 'danger',
    },
    {
      title: 'The vendor labels the release critical, emergency, or out-of-band',
      description:
        'This language usually indicates that the update should not wait for an ordinary maintenance cycle.',
      severity: 'danger',
    },
    {
      title: 'Your installed version has reached end of support',
      description:
        'The software may continue running even though the vendor no longer supplies security fixes.',
      severity: 'warning',
    },
    {
      title: 'A security update repeatedly fails or rolls back',
      description:
        'Check update history rather than assuming the restart completed the installation. Use the vendor’s troubleshooting or support process.',
      severity: 'warning',
    },
    {
      title: 'The update notice came from an unexpected link or pop-up',
      description:
        'Do not download from the message. Verify the update through the product’s normal settings or a vendor address you opened independently.',
      severity: 'warning',
    },
    {
      title: 'The device shows possible signs of compromise',
      description:
        'Unexpected redirects, unfamiliar software, repeated account alerts, disabled security tools, or unexplained settings changes need more than an update alone.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'How can I tell whether an update is a security update?',
      answer:
        'Check the built-in updater and the vendor’s release notes. Security updates commonly mention vulnerabilities, security fixes, CVE identifiers, critical issues, or active exploitation.',
    },
    {
      question: 'Can I skip a feature update?',
      answer:
        'Often, yes for a while, if the installed version remains supported and continues receiving security fixes. Upgrade before that support ends.',
    },
    {
      question: 'Is it okay to wait until later today?',
      answer:
        'Usually, for an ordinary update when there is no urgent security notice. Save your work and schedule the installation rather than dismissing it again without a plan.',
    },
    {
      question: 'Should I turn on automatic updates?',
      answer:
        'Usually, yes. Automatic updates reduce the chance that security fixes are forgotten, while many systems still provide controls for restart timing and major upgrades.',
    },
    {
      question: 'Do I need a backup before every update?',
      answer:
        'Not necessarily before every small app update, but a current backup is wise before a major operating-system upgrade or when the device has already shown update problems.',
    },
    {
      question: 'Is it safe to install an update from a browser pop-up?',
      answer:
        'Do not trust the pop-up itself. Close it and check the app store, built-in update settings, or the vendor’s official support site independently.',
    },
    {
      question: 'Why does the device still say an update is pending?',
      answer:
        'Some updates are downloaded or partly installed in the background but do not become fully active until the device restarts.',
    },
    {
      question: 'Can a legitimate update cause problems?',
      answer:
        'Yes. Updates can introduce bugs or compatibility issues, which is why managed systems may test them first. That possibility supports a planned delay in specific cases, not permanent avoidance of security fixes.',
    },
    {
      question: 'What should I do if my device cannot receive any more updates?',
      answer:
        'Check whether another supported software version is available. If not, plan to replace or retire the device and limit sensitive or internet-connected use in the meantime.',
    },
    {
      question: 'Will installing the latest update remove malware already on the device?',
      answer:
        'Not necessarily. An update can close the weakness malware used, but an already compromised device may also need a security scan, account review, recovery, or professional help.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Cybersecurity and Infrastructure Security Agency',
      title: 'Secure Our World Software Updates Tip Sheet',
      url: 'https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Software-Updates-Tip-Sheet.pdf',
      sourceType: 'government',
      notes:
        'Explains that software updates patch security weaknesses and supports installing updates promptly and using automatic updates.',
    },
    {
      publisher: 'Cybersecurity and Infrastructure Security Agency',
      title: 'Known Exploited Vulnerabilities Catalog',
      url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog',
      sourceType: 'government',
      notes:
        'Identifies vulnerabilities with evidence of exploitation in the wild and supports prioritizing vendor remediation when an affected product appears in the catalog.',
    },
    {
      publisher: 'National Institute of Standards and Technology',
      title: 'Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology',
      url: 'https://csrc.nist.gov/pubs/sp/800/40/r4/final',
      sourceType: 'government',
      notes:
        'Frames patching as preventive maintenance that reduces compromise, data-breach, and disruption risk while recognizing testing and operational constraints.',
    },
    {
      publisher: 'Federal Trade Commission',
      title: 'Update your software now',
      url: 'https://consumer.ftc.gov/comment/46260',
      sourceType: 'government',
      notes:
        'Advises consumers to update operating systems, browsers, apps, and security software promptly and to enable automatic updates.',
    },
    {
      publisher: 'Microsoft',
      title: 'Pause updates in Windows',
      url: 'https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/pause-updates-in-windows',
      sourceType: 'manufacturer',
      notes:
        'Documents temporary update pausing to avoid interruptions and explains that updates resume and install after the pause ends.',
    },
    {
      publisher: 'Apple',
      title: 'Update your iPhone or iPad',
      url: 'https://support.apple.com/en-us/118575',
      sourceType: 'manufacturer',
      notes:
        'Recommends backing up, using reliable power and Wi-Fi, and enabling automatic updates to receive security fixes, bug fixes, and features.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Built-in software update settings',
      description:
        'Shows the installed version, available releases, update history, automatic-update controls, and restart options provided by the platform.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Backup or device-sync service',
      description: 'Protects important files and settings before a major upgrade or recovery procedure.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Vendor release notes and security advisories',
      description:
        'Explain whether a release contains security fixes, feature changes, known issues, compatibility warnings, or end-of-support information.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer support or trusted IT help',
      description:
        'Useful when an update repeatedly fails, the device cannot start normally, or a supported upgrade path is unclear.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],
};
