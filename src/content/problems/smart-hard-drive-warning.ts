import type { ProblemSeed } from '../types';

export const smartHardDriveWarning: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'drives',
  slug: 'smart-hard-drive-warning',
  canonicalPath: '/technology/storage/drives/smart-hard-drive-warning/',
  name: 'S.M.A.R.T. Drive Warning',
  eyebrow: 'Technology · Storage · Drives',

  h1: 'Can I Ignore a S.M.A.R.T. Hard Drive Warning?',
  seoTitle: 'S.M.A.R.T. Drive Warning: Back Up Now or Keep Using It?',
  metaDescription:
    'A S.M.A.R.T. warning can appear while a drive still works. Learn when to back up immediately, when an alert may be misread, and when to replace the drive.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Only to back up or migrate data',

  shortAnswer:
    'No. A S.M.A.R.T. warning means the drive or storage system has detected a health condition associated with failure risk, even if the computer still starts and files still open. Back up important data now, verify the copy, and plan to replace the drive unless the warning is confirmed as a temperature or reporting issue that clears after corrective action and official testing.',

  whyItMattersHeading: 'Why a Working Drive Can Still Be Failing',
  whyItMatters: [
    'S.M.A.R.T. is health monitoring built into many hard disk drives and solid-state drives. A failure or critical-health message can appear when a manufacturer-defined threshold is crossed or, on an NVMe SSD, when spare capacity, media reliability, or read-only status becomes critical. Those conditions concern whether the drive remains dependable, not whether it happened to boot this time.',
    'The practical divide is not between a working drive and a dead one. It is between data that exists only on the warned drive and data already stored in a separate, usable backup. There is no honest safe countdown: some alerts turn out to involve heat, firmware, or incorrect reporting, but a genuine S.M.A.R.T. failure is not repaired by clearing the message or running a file-system utility.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Drive Normally If:',

  lastReviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Assessed against current CISA backup guidance and support documentation from Microsoft, Apple, Western Digital, Seagate, and Dell.',
  disclaimer:
    'General storage triage only. Replacement, warranty, RAID handling, and recovery procedures vary by device. If irreplaceable data is not backed up and the drive becomes unstable, avoid repeated DIY tests.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'complete-verified-backup',
      label: 'Everything important is in a recent, verified backup',
      shortDescription:
        'You opened files from the backup or confirmed a successful restore, and the warned drive is not the only copy.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The data is protected, but the drive is still suspect',
      resultBody:
        'A usable backup removes the immediate risk of losing your only copy. It does not reverse the drive’s health warning or make the drive dependable for new work.',
      recommendedAction:
        'Keep the drive out of important service, arrange a replacement, and avoid storing the only copy of anything new on it.',
    },
    {
      slug: 'replaceable-data-only',
      label: 'The drive holds only replaceable downloads, games, or applications',
      shortDescription:
        'Losing the drive would be inconvenient, but no personal files, work, or unique data would disappear.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Lower consequence, same unreliable hardware',
      resultBody:
        'You do not need emergency data recovery precautions for files you can download again. The warning still means the drive should not be trusted for future storage.',
      recommendedAction:
        'Stop adding important data, replace the drive when practical, and reinstall the replaceable content afterward.',
    },
    {
      slug: 'backup-drive-only',
      label: 'The warning is on a backup drive, while the originals remain healthy',
      shortDescription:
        'The suspect drive contains copies, and the source files are still available on another healthy device.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Your files remain, but your backup protection is weakened',
      resultBody:
        'Failure of this drive would not erase the originals, but it could leave you with no usable backup if something then happens to the primary device.',
      recommendedAction:
        'Create a fresh backup on another healthy drive or vetted cloud service, verify it, and retire the warned backup drive.',
    },
    {
      slug: 'temperature-warning-cleared',
      label: 'A temperature warning cleared after airflow was corrected',
      shortDescription:
        'A blocked vent or failed fan was corrected, the alert no longer returns, and the manufacturer’s diagnostic test passes.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'Monitor it with a current backup',
      resultBody:
        'Some temperature-based S.M.A.R.T. warnings can clear after ventilation is restored. That is different from a persistent media, reliability, or spare-capacity failure.',
      recommendedAction:
        'Keep backups current, watch for the warning to return, and follow the drive or computer manufacturer’s temperature and diagnostic guidance.',
    },
    {
      slug: 'third-party-attribute-warning',
      label: 'Only a third-party utility labels one raw attribute as caution',
      shortDescription:
        'The drive reports overall health as passed, no operating-system or startup warning appears, and the manufacturer’s test passes.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Confirm the interpretation before replacing the drive',
      resultBody:
        'Raw ATA S.M.A.R.T. values and their meanings can be vendor-specific. A generic utility’s caution label is not necessarily the same as a drive-reported predictive failure.',
      recommendedAction:
        'Make sure the backup is current, check the exact model with the manufacturer’s diagnostic tool, and monitor whether the value or overall status changes.',
    },
    {
      slug: 'firmware-reporting-issue-resolved',
      label: 'An official firmware or BIOS update resolves the warning',
      shortDescription:
        'The update applies to your exact hardware, the alert stops, and the manufacturer’s diagnostic test passes afterward.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'The resolved alert may have been a reporting problem',
      resultBody:
        'Some systems can misinterpret additional S.M.A.R.T. fields, and documented firmware issues can also produce false predictive alerts. Resolution must be specific to the hardware involved.',
      recommendedAction:
        'Keep the backup, record the update and test result, and act if the warning returns or the drive begins showing errors.',
    },
    {
      slug: 'healthy-redundant-array',
      label: 'One drive in a healthy redundant RAID or NAS array has a warning',
      shortDescription:
        'The array remains healthy or protected, and no other member is failed, missing, or rebuilding.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Replace the member through the array’s procedure',
      resultBody:
        'Redundancy may keep the system online after one member develops a predictive warning. It does not repair that member or replace a separate backup.',
      recommendedAction:
        'Confirm the array state, update the backup, and follow the NAS, server, or controller manufacturer’s replacement sequence. Do not pull a drive blindly.',
    },
    {
      slug: 'low-ssd-life-no-critical-warning',
      label: 'An SSD shows low estimated life but no critical warning',
      shortDescription:
        'The health page shows heavy endurance use, but reliability is not degraded, spare capacity is not critical, and the drive is not read-only.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Plan replacement rather than assuming immediate failure',
      resultBody:
        'Estimated life is a manufacturer-based wear estimate. Microsoft notes that consuming the rated estimate does not automatically mean the SSD has failed.',
      recommendedAction:
        'Back up the data, check the SSD manufacturer’s health guidance, and plan a replacement before relying on the drive for important new work.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The drive has reported a health threshold or critical condition',
      description:
        'It may still start, open files, and pass some tests. Normal operation does not cancel the warning.',
      severity: 'info',
      chainLabel: 'Health warning',
    },
    {
      stageLabel: 'IF YOU KEEP USING IT NORMALLY',
      title: 'New work remains dependent on suspect storage',
      description:
        'New and changed files may exist only on a drive that has already reported reduced reliability.',
      severity: 'caution',
      chainLabel: 'Continued reliance',
    },
    {
      stageLabel: 'IF READ OR WRITE ERRORS APPEAR',
      title: 'Files and backups can become incomplete',
      description:
        'Copies may fail, files may become unreadable, and the operating system may freeze or report storage errors.',
      severity: 'warning',
      chainLabel: 'Copy failures',
    },
    {
      stageLabel: 'IF THE DRIVE STOPS RESPONDING',
      title: 'Ordinary migration may no longer work',
      description:
        'A drive that disappears, becomes read-only, or cannot complete reads may no longer allow a normal file copy or clone.',
      severity: 'danger',
      chainLabel: 'Drive inaccessible',
    },
    {
      stageLabel: 'WITHOUT A USABLE BACKUP',
      title: 'Unique data may be permanently lost',
      description:
        'Recovery may require a specialist, may be expensive, and is not guaranteed to recover every file.',
      severity: 'danger',
      chainLabel: 'Data loss',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The warning appears at startup, but the computer works normally',
      ignoreAnswer: 'Briefly',
      severity: 'warning',
      whatToDo:
        'Use the working access to back up important files. Do not treat a successful startup as proof that the drive is healthy.',
    },
    {
      situation: 'Important files exist only on the warned drive',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Copy the irreplaceable files to a separate healthy drive or vetted cloud service now, then verify that the copies open.',
    },
    {
      situation: 'A complete, separate backup has been verified',
      ignoreAnswer: 'Only until replacement',
      severity: 'caution',
      whatToDo:
        'Minimize reliance on the warned drive, avoid putting new unique data on it, and arrange replacement.',
    },
    {
      situation: 'The exact warning identifies excessive temperature',
      ignoreAnswer: 'Only while cooling and checking',
      severity: 'warning',
      whatToDo:
        'Back up first, check vents and fans, let the system cool, and run the manufacturer’s test after correcting any airflow problem.',
    },
    {
      situation: 'The drive fails a manufacturer diagnostic or self-test',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Replace the drive. If unbacked-up data is still readable, save it before doing more tests or repairs.',
    },
    {
      situation: 'Only a third-party app warns, while official diagnostics pass',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Confirm that the app supports the exact model, update the backup, and check for official firmware or system guidance.',
    },
    {
      situation: 'The warning affects one member of a healthy redundant array',
      ignoreAnswer: 'Only under array guidance',
      severity: 'warning',
      whatToDo:
        'Verify the backup and array state, then follow the manufacturer’s member-replacement procedure.',
    },
    {
      situation: 'The drive clicks, disconnects, becomes read-only, or vanishes',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop normal use. If unique data is not backed up, avoid repeated tests and consider a professional data recovery service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Identify exactly which drive triggered the warning',
      body:
        'Record the full message, drive model, serial number, and whether it came from the BIOS, operating system, RAID controller, or a third-party utility. Systems with several drives make it easy to replace or test the wrong one.',
    },
    {
      title: 'Back up the irreplaceable files first',
      body:
        'Copy documents, photos, projects, records, and anything else that cannot simply be downloaded again to a separate healthy device or vetted cloud service. Do not use another folder on the same warned drive as the backup.',
    },
    {
      title: 'Verify the backup instead of trusting the progress bar',
      body:
        'Open a selection of copied files and confirm that important folders are present. A backup that completed with skipped or unreadable files may not contain everything you expected.',
    },
    {
      title: 'Diagnose only after the important data is safe',
      body:
        'Use the computer or drive manufacturer’s supported diagnostic tool and check for official BIOS, controller, or drive firmware guidance. Do not erase or format the drive merely to make the warning disappear.',
    },
    {
      title: 'Replace the drive or escalate unstable data recovery',
      body:
        'Replace a confirmed failing drive and restore from the verified backup. If it starts clicking, disconnecting, or refusing reads before the backup is complete, power it down and consider specialist recovery rather than repeated DIY attempts.',
      destinationProblemSlug: 'clicking-hard-drive',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'It clicks, grinds, or repeatedly spins up and stops',
      description:
        'New mechanical noises from an HDD can indicate a physical problem beyond the predictive warning.',
      severity: 'danger',
    },
    {
      title: 'The drive disappears from the BIOS or operating system',
      description: 'Intermittent detection can interrupt copying and may precede complete loss of access.',
      severity: 'danger',
    },
    {
      title: 'Files become unreadable or copying produces repeated errors',
      description: 'The warning is now accompanied by an active data-access problem.',
      severity: 'warning',
    },
    {
      title: 'The computer freezes whenever the drive is accessed',
      description: 'Severe delays or lockups during reads and writes can prevent a reliable backup.',
      severity: 'warning',
    },
    {
      title: 'The drive becomes read-only or refuses new writes',
      description:
        'Some SSDs enter read-only mode when the storage device reports a critical health condition.',
      severity: 'warning',
    },
    {
      title: 'There is smoke, a burning odor, unusual heat, or visible damage',
      description:
        'Shut the computer down, disconnect power if it is safe to do so, and do not continue testing damaged hardware.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'What does S.M.A.R.T. stand for?',
      answer:
        'Self-Monitoring, Analysis, and Reporting Technology. It lets a drive report health information and certain conditions associated with failure risk.',
    },
    {
      question: 'Why does the computer still work if the drive is failing?',
      answer:
        'S.M.A.R.T. is predictive. It can warn while the drive remains readable, giving you an opportunity to back up before access becomes worse or stops.',
    },
    {
      question: 'Does a S.M.A.R.T. warning guarantee that the drive will fail?',
      answer:
        'No. It is a risk warning, not a precise countdown or guaranteed outcome. A genuine failure status still justifies backing up and replacing the drive because you cannot know how long normal access will continue.',
    },
    {
      question: 'Can CHKDSK, Disk Utility, or another repair program fix it?',
      answer:
        'Those tools may repair file-system problems, but they cannot repair worn flash memory, failing media, mechanical damage, or another hardware condition that triggered a genuine health failure.',
    },
    {
      question: 'Does passing a quick diagnostic mean the warning is safe to ignore?',
      answer:
        'Not necessarily. Seagate notes that a drive with a S.M.A.R.T. error may still pass some tests. Back up first and follow the manufacturer’s guidance for the exact warning and drive model.',
    },
    {
      question: 'Can I disable S.M.A.R.T. in the BIOS?',
      answer:
        'Disabling it usually hides the warning rather than fixing the drive. Consider that only when the manufacturer confirms a reporting incompatibility, supported diagnostics pass, applicable updates are installed, and your backup is current.',
    },
    {
      question: 'Should I clone the whole drive or copy individual files?',
      answer:
        'If the drive is stable, either can work. Protect irreplaceable files first; a full clone is less useful if it delays copying the data you care about or repeatedly stalls on unreadable areas.',
    },
    {
      question: 'Does RAID mean I do not need to back up the warned drive?',
      answer:
        'No. RAID can maintain availability after a member fails, but it is not a separate backup against additional failures, deletion, corruption, theft, or damage to the whole system.',
    },
    {
      question: 'Is low estimated SSD life the same as a critical warning?',
      answer:
        'No. Estimated life is a wear measure, while critical warnings can report low spare capacity, degraded reliability, or read-only media. Low life calls for backup and replacement planning; a critical warning needs faster action.',
    },
    {
      question: 'Is a clicking hard drive more urgent than a silent S.M.A.R.T. warning?',
      answer:
        'Yes. Clicking, disappearing, repeated disconnects, or unreadable files mean the drive is already showing operational symptoms. Stop ordinary use and protect any remaining accessible data.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Cybersecurity and Infrastructure Security Agency',
      title: 'How to Protect the Data that is Stored on Your Devices',
      url: 'https://www.cisa.gov/resources-tools/training/how-protect-data-stored-your-devices',
      sourceType: 'government',
      notes:
        'Explains that device wear or failure can cause permanent data loss and recommends backups to a secure external drive or properly vetted cloud service.',
    },
    {
      publisher: 'Western Digital',
      title: 'S.M.A.R.T. Self-Monitoring Analysis and Reporting Technology',
      url: 'https://support-en.wd.com/app/answers/detailweb/a_id/12163/~/s.m.a.r.t.-self-monitoring-analysis-and-reporting-technology',
      sourceType: 'manufacturer',
      notes:
        'States that S.M.A.R.T. failures indicate drive risk, calls for prompt backup and replacement, and explains that attribute meanings and thresholds can be vendor-specific.',
    },
    {
      publisher: 'Seagate',
      title: 'My system reported a S.M.A.R.T. error on the drive',
      url: 'https://www.seagate.com/support/kb/my-system-reported-a-smart-error-on-the-drive-184619en/',
      sourceType: 'manufacturer',
      notes:
        'Explains that a drive may appear normal or pass some tests despite a S.M.A.R.T. error, recommends prompt backup, and describes temperature and BIOS interpretation exceptions.',
    },
    {
      publisher: 'Microsoft',
      title: 'What to do about a critical warning for a storage device',
      url: 'https://support.microsoft.com/en-US/Windows/Experience/Storage-FileManagement/what-to-do-about-a-critical-warning-for-a-storage-device',
      sourceType: 'manufacturer',
      notes:
        'Recommends backing up after a Windows storage warning and defines NVMe warnings for low spare capacity, degraded reliability, and read-only status.',
    },
    {
      publisher: 'Apple',
      title: 'Check if a Mac disk is about to fail',
      url: 'https://support.apple.com/en-ca/guide/mac-help/mchlp2548/mac',
      sourceType: 'manufacturer',
      notes:
        'Says a reported fatal disk hardware error cannot be repaired by Disk Utility or another software repair utility and advises backing up available data and arranging service.',
    },
    {
      publisher: 'Dell Technologies',
      title: 'PowerEdge: What is Predictive Drive Failure and How to Resolve It - PDR16',
      url: 'https://www.dell.com/support/kbdoc/en-us/000126418/poweredge-hdd-what-is-predicted-drive-failure-and-how-to-solve-it',
      sourceType: 'manufacturer',
      notes:
        'Treats predictive drive failure as requiring immediate attention, backup, and replacement while noting that firmware or reporting issues can sometimes create false alerts.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Separate backup destination',
      description:
        'A healthy external drive or properly vetted cloud backup gives important files somewhere to exist besides the warned drive.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer-supported drive diagnostic',
      description:
        'The computer or drive maker’s utility can confirm the overall health status, run supported self-tests, and provide an error code for warranty service.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Compatible replacement drive',
      description:
        'A replacement must match the computer’s supported interface and physical format and provide enough capacity for the data or system image being restored.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional data recovery service',
      description:
        'Appropriate when unique data is not backed up and the drive clicks, disconnects, is no longer detected, or cannot complete ordinary reads.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'clicking-hard-drive',
      anchorText: 'Is the hard drive clicking too?',
      relationshipType: 'escalation',
    },
    { slug: 'laptop-overheating', anchorText: 'Is the laptop overheating as well?', relationshipType: 'cause' },
  ],
};
