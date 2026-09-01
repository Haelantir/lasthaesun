import type { ProblemSeed } from '../types';

export const clickingHardDrive: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'drives',
  slug: 'clicking-hard-drive',
  canonicalPath: '/technology/storage/drives/clicking-hard-drive/',
  name: 'Clicking Hard Drive',
  eyebrow: 'Technology · Storage · Drives',

  h1: 'Can I Ignore a Clicking Hard Drive?',
  seoTitle: 'Clicking Hard Drive: Back Up Now or Is the Noise Normal?',
  metaDescription:
    'A soft occasional click may be normal, but loud or repeated clicking can signal drive failure. Learn when to back up, power down, test, or replace it.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'high',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using it?',
  canIUseItLabel: 'Only to secure accessible data',

  shortAnswer:
    'Probably not. A soft occasional click can be normal, but a new, loud, or repeating click can indicate abnormal operation or drive failure. If the drive is readable, copy irreplaceable files before testing it; if it is inaccessible, was dropped, or makes hard mechanical clicks, power it down and consider data-recovery help.',

  whyItMattersHeading: 'The sound alone does not tell you whether the drive is failing',
  whyItMatters: [
    'Mechanical hard drives normally make some noise while starting, stopping, reading, writing, or performing internal maintenance. A quiet click that has always been part of the drive’s normal operation, with no errors or performance changes, may not require repair.',
    'A new rhythmic click, loud impact-like click, or clicking paired with freezes, missing files, disconnects, boot errors, or a drive that is not detected is different. Manufacturers treat those patterns as possible abnormal operation or failure. Back up accessible data before running repairs or lengthy diagnostics, because the main risk is losing the only copy of your files.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Using the Drive Normally If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Hard-drive noise, failure signs, backup priority, connection checks, diagnostics, and recovery escalation checked against CISA, Western Digital, and Seagate guidance.',
  disclaimer:
    'This is general guidance for mechanical hard disk drives. Follow the instructions for your exact drive or computer. If the only copy of important data is on an inaccessible or physically damaged drive, avoid repeated DIY attempts and contact a reputable data-recovery service.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'soft-clicking-during-normal-activity',
      label: 'Soft clicks occur only while files are being read or written',
      shortDescription:
        'The noise is quiet, familiar, and not accompanied by errors, freezes, disconnects, or slower access.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'This may be normal drive activity',
      resultBody:
        'Both Western Digital and Seagate describe some soft clicking or chattering during normal operation as expected. The drive’s established sound pattern and continued reliable operation matter more than the word “click.”',
      recommendedAction:
        'Keep a current backup and compare the sound with the guidance for the exact drive model. Investigate if it becomes louder, repetitive, or paired with access problems.',
    },
    {
      slug: 'click-at-startup-or-spindown',
      label: 'The drive clicks once when starting, waking, or stopping',
      shortDescription:
        'A brief click happens during a power-state change, and the drive otherwise works normally.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'A brief transition sound can be normal',
      resultBody:
        'Western Digital notes that working drives may click when starting work or preparing to stop. A consistent brief sound at the same transition is less concerning than clicking that repeats while the drive struggles to operate.',
      recommendedAction:
        'Use the drive normally while maintaining a separate backup. Reassess it if the sound changes or the computer begins reporting errors.',
    },
    {
      slug: 'documented-model-specific-click',
      label: 'The manufacturer documents the same clicking pattern as normal',
      shortDescription:
        'Support information for the exact drive or storage device describes the sound, and there are no other symptoms.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Model-specific guidance can clear the noise',
      resultBody:
        'Some drives and network-storage products make maintenance or activity sounds that would be unusual on another model. Documentation for the exact product is more useful than a generic sound description.',
      recommendedAction:
        'Confirm the model and operating condition match the manufacturer’s description. Keep backups current and investigate any change from that documented pattern.',
    },
    {
      slug: 'new-repeating-click',
      label: 'A new click repeats in a steady or regular pattern',
      shortDescription:
        'The drive still opens, but the clicking is new, persistent, or clearly different from its previous sound.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Back up before doing anything else',
      resultBody:
        'Seagate identifies repeated, regular clicking as a possible sign of abnormal operation or potential failure. Continued access today does not guarantee that the drive will remain readable.',
      recommendedAction:
        'Stop unnecessary work and copy irreplaceable files to another device or vetted cloud storage. Test the drive only after the important data is secure.',
    },
    {
      slug: 'loud-hard-clicking',
      label: 'The clicking is loud, sharp, or sounds like repeated impacts',
      shortDescription:
        'The sound stands out across the room or is much harsher than ordinary read-and-write noise.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat hard clicking as possible physical failure',
      resultBody:
        'Seagate distinguishes loud hard clicking from soft operating noise and says the harder sound usually indicates physical failure. Repeated troubleshooting can be a poor choice when the drive holds unique data.',
      recommendedAction:
        'If the files are already backed up, shut the drive down and replace it. If the only copy of important data is on it, stop repeated power cycles and consult a reputable recovery service.',
    },
    {
      slug: 'clicking-with-access-problems',
      label: 'Clicking comes with freezes, file errors, disconnects, or boot problems',
      shortDescription:
        'The computer pauses, files fail to copy, the drive disappears, or the system cannot boot reliably.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'The drive is no longer operating reliably',
      resultBody:
        'Clicking combined with access failures is more concerning than noise alone. Seagate lists repeated clicking with boot errors or shutdowns among signs of a failed or abnormally functioning drive.',
      recommendedAction:
        'Minimize use. Secure accessible files if the drive remains stable enough to read; otherwise shut it down and decide whether the data warrants professional recovery.',
    },
    {
      slug: 'external-drive-power-or-cable',
      label: 'An external drive clicks only through a hub or questionable cable',
      shortDescription:
        'The drive may not receive stable power, or the noise changes when its connection changes.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Rule out the connection without repeated testing',
      resultBody:
        'External-drive clicking can sometimes come from an unsuitable cable, power supply, USB hub, or port rather than a broken mechanism. A connection problem still needs correction before the drive is trusted.',
      recommendedAction:
        'Connect it directly using a known-good compatible cable and the correct power supply. If it becomes readable, back it up immediately. Stop if hard clicking continues.',
    },
    {
      slug: 'clicking-after-impact',
      label: 'Clicking started after the drive was dropped, jolted, or moved while active',
      shortDescription:
        'The sound began after physical impact or movement that could have damaged a precision mechanical drive.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Do not keep testing a potentially damaged drive',
      resultBody:
        'Western Digital warns against dropping, jolting, or moving a drive during activity. New clicking after an impact makes physical damage more plausible, especially if access has also changed.',
      recommendedAction:
        'Power it down. Do not shake, tap, open, or repeatedly restart it. Use a recovery service if the drive contains important data that is not backed up.',
    },
    {
      slug: 'grinding-or-scraping',
      label: 'The sound is actually grinding or scraping',
      shortDescription:
        'The drive makes a rough continuous mechanical sound rather than a soft isolated click.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Shut the drive down',
      resultBody:
        'Seagate advises immediately powering down a grinding drive because continued operation can cause more damage and make recovery harder or impossible.',
      recommendedAction:
        'Turn it off and do not run diagnostics. Replace it if the data is backed up; otherwise seek professional recovery advice before powering it again.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The click may be normal or abnormal',
      description:
        'Some healthy drives click during ordinary activity or power-state changes, so sound alone does not prove failure.',
      severity: 'info',
      chainLabel: 'An ambiguous sound',
    },
    {
      stageLabel: 'IF THE PATTERN IS NEW OR REPEATING',
      title: 'The drive may be struggling to operate normally',
      description:
        'Regular clicking, hard impacts, or a marked change in sound can indicate abnormal function or potential mechanical failure.',
      severity: 'caution',
      chainLabel: 'Possible abnormal operation',
    },
    {
      stageLabel: 'IF ACCESS PROBLEMS APPEAR',
      title: 'Your files can become harder to reach',
      description:
        'Freezes, failed copies, disconnects, boot errors, or an undetected drive show that the problem is affecting actual data access.',
      severity: 'warning',
      chainLabel: 'Unreliable data access',
    },
    {
      stageLabel: 'IF THE DRIVE STOPS WORKING',
      title: 'Ordinary backup and diagnostic tools may no longer help',
      description:
        'A drive that cannot spin up, remain connected, or respond to commands may require replacement or specialized recovery.',
      severity: 'warning',
      chainLabel: 'Drive failure',
    },
    {
      stageLabel: 'WORST CASE',
      title: 'The only copy of important data is permanently lost',
      description:
        'Hardware failure can make some or all files unrecoverable. Even professional data recovery cannot guarantee a complete result.',
      severity: 'danger',
      chainLabel: 'Permanent data loss',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The clicks are soft, familiar, and occur only during normal drive activity',
      ignoreAnswer: 'Yes',
      severity: 'info',
      whatToDo:
        'Keep using the drive, but maintain a separate current backup and watch for changes in sound or performance.',
    },
    {
      situation: 'There is one brief click when the drive starts, wakes, or stops',
      ignoreAnswer: 'Usually',
      severity: 'info',
      whatToDo:
        'Check the exact model’s documentation. No repair is needed if this is its normal pattern and operation remains reliable.',
    },
    {
      situation: 'The clicking is new and repeats regularly, but the drive is still readable',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop unrelated activity and copy irreplaceable files before running diagnostic or repair tools.',
    },
    {
      situation: 'The clicking is loud, sharp, or impact-like',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Treat it as possible physical failure. Shut it down after securing accessible data, or seek recovery help if the files are unique.',
    },
    {
      situation: 'An external drive clicks and is not recognized',
      ignoreAnswer: 'Only for a connection check',
      severity: 'warning',
      whatToDo:
        'Try a direct connection with a known-good compatible cable and correct power source. Do not keep cycling power if hard clicking continues.',
    },
    {
      situation: 'The drive clicks after being dropped or jolted',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Power it down and avoid further DIY testing. Contact a recovery service if it contains data that exists nowhere else.',
    },
    {
      situation: 'Clicking comes with freezes, file errors, disconnects, or a SMART warning',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Back up anything still accessible and retire the drive. Do not rely on it for primary storage.',
    },
    {
      situation: 'The sound is grinding or scraping rather than clicking',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Shut the drive down immediately. Do not run a scan or continue copying unless advised by a recovery provider.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Back up accessible data first',
      body:
        'Copy the files you cannot replace to a different physical device or properly vetted cloud service. Do not store the backup on another partition of the same clicking drive.',
    },
    {
      title: 'Minimize unrelated drive activity',
      body:
        'Close games, downloads, updates, editing projects, and other work that reads from or writes to the suspect drive. Do not add new files or use it as the destination for another backup.',
    },
    {
      title: 'Check an external drive’s connection',
      body:
        'Use the correct power supply and a known-good compatible data cable, and connect the drive directly instead of through an unpowered hub. Stop if the same hard clicking continues.',
    },
    {
      title: 'Diagnose only after the data is secure',
      body:
        'If the drive is stable and the files are backed up, run the drive manufacturer’s supported short diagnostic. A failed test or SMART warning is a reason to replace the drive.',
    },
    {
      title: 'Replace or recover the drive',
      body:
        'Retire a drive that fails testing, keeps clicking abnormally, or causes access errors. If it is unreadable and holds the only copy of valuable data, avoid formatting or opening it and consult a reputable recovery service.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The clicking repeats in a steady pattern',
      description:
        'Regular tapping or clicking can indicate abnormal operation or potential drive failure rather than ordinary file activity.',
      severity: 'warning',
    },
    {
      title: 'The clicks are loud and impact-like',
      description: 'Hard clicking is more concerning than the quiet chatter some drives make while working.',
      severity: 'danger',
    },
    {
      title: 'The drive disappears or is not detected',
      description:
        'A drive that clicks and cannot maintain a connection is not reliable enough for continued normal use.',
      severity: 'danger',
    },
    {
      title: 'Files fail to open or copy',
      description:
        'Access errors show that the problem is no longer limited to sound. Prioritize recoverable files and stop running unnecessary programs.',
      severity: 'danger',
    },
    {
      title: 'The computer freezes, shuts down, or will not boot',
      description:
        'Clicking paired with system-level failures can be a sign that the drive has failed or is close to becoming unusable.',
      severity: 'danger',
    },
    {
      title: 'The noise began after a drop or jolt',
      description:
        'Do not keep restarting a mechanically damaged drive, especially when it contains the only copy of important data.',
      severity: 'danger',
    },
    {
      title: 'The sound changes to grinding or scraping',
      description:
        'Power the drive down instead of testing it. Continued operation can increase damage and reduce the chance of recovery.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Are all hard-drive clicks a sign of failure?',
      answer:
        'No. Soft clicking during reads, writes, startup, wake, or shutdown can be normal for some drives. New, loud, repetitive clicking or clicking with access problems needs action.',
    },
    {
      question: 'Can a healthy hard drive click every few seconds?',
      answer:
        'Some Western Digital drives can make periodic clicks during normal operation or internal maintenance. Confirm that the pattern is documented for your exact model and that the drive has no errors or performance changes.',
    },
    {
      question: 'Does clicking prove that the read head has crashed?',
      answer:
        'No. You cannot identify the exact internal failure from sound alone. Clicking can be normal, power-related, connection-related, or mechanical, depending on its pattern and the drive’s behavior.',
    },
    {
      question: 'Can a USB cable or power problem make an external drive click?',
      answer:
        'Yes. An unsuitable cable, weak port, hub, or incorrect power supply may prevent an external drive from starting properly. Try one controlled connection with known-good compatible hardware.',
    },
    {
      question: 'Should I run a disk repair tool immediately?',
      answer:
        'Back up first if the drive is readable. Repair tools and surface scans put the drive through more activity, and Western Digital warns that some disk-repair commands can cause data loss.',
    },
    {
      question: 'Can software repair a mechanically clicking drive?',
      answer:
        'Software can address some file-system problems, but it cannot repair damaged mechanical parts. A drive with hard clicking, grinding, or continuing access failures should be replaced or evaluated for recovery.',
    },
    {
      question: 'Should I format the drive to stop the clicking?',
      answer:
        'No. Formatting erases file-system information and does not repair physical damage. Do not format a drive if you may need to recover data from it.',
    },
    {
      question: 'Can I tap, shake, freeze, or open the drive?',
      answer:
        'No. Do not strike, shake, freeze, or open a hard drive. These attempts can cause more damage, and opening the sealed drive can contaminate its internal components.',
    },
    {
      question: 'What if the clicking stops after I change the cable?',
      answer:
        'Back up the drive and run the manufacturer’s supported diagnostic. Replace the suspect cable or power hardware, and keep watching for disconnects or a return of the noise.',
    },
    {
      question: 'Is professional data recovery guaranteed to work?',
      answer:
        'No. Recovery depends on the type and extent of the damage, and some data loss is permanent. Stop repeated DIY attempts when the drive contains unique, valuable files.',
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
        'CISA explains that device failure can cause permanent data loss and recommends keeping frequent backups on secure external storage or a properly vetted cloud service.',
    },
    {
      publisher: 'Western Digital',
      title: 'Reasons for Hard Drive Noise',
      url: 'https://support-en.wd.com/app/answers/detailweb/a_id/32906/~/reasons-for-hard-drive-noise',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes normal operating clicks from strange drive noises, recommends backing up accessible data when failure is suspected, and covers cables, mounting, handling, and diagnostics.',
    },
    {
      publisher: 'Seagate',
      title: "The drive is making 'clicking' sounds",
      url: 'https://www.seagate.com/support/kb/lacie/the-drive-is-making-clicking-sounds-006281en/',
      sourceType: 'manufacturer',
      notes:
        'Distinguishes normal soft clicking from loud hard clicking, which usually indicates physical failure, and identifies external power supplies and cables as possible causes.',
    },
    {
      publisher: 'Seagate',
      title: 'Internal Hard Drive Troubleshooter',
      url: 'https://www.seagate.com/support/kb/internal-hard-drive-troubleshooter-006183en/',
      sourceType: 'manufacturer',
      notes:
        'Treats repeated clicking as possible abnormal operation or drive failure, recommends immediate backup when failure is possible, and advises powering down a grinding drive.',
    },
    {
      publisher: 'Western Digital',
      title: 'How to Check External Drive for Errors or Failure using Windows Diagnostic Programs',
      url: 'https://support-en.wd.com/app/answers/detailweb/a_id/34259',
      sourceType: 'manufacturer',
      notes:
        'Provides drive-checking options and warns that chkdsk can cause data loss, so a backup on another drive should exist before it is used.',
    },
    {
      publisher: 'Seagate',
      title: 'When Data Loss Occurs',
      url: 'https://www.seagate.com/files/www-content/services-software/en-us/docs/data-loss-faq-tp-638-1-1206us.pdf',
      sourceType: 'manufacturer',
      notes:
        'Advises stopping use when a drive shows unusual noise or obvious distress, avoiding formatting or opening it, and seeking specialized recovery when physical damage is suspected.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Separate backup storage',
      description:
        'Another physical drive or a properly vetted cloud service gives you a copy that does not depend on the clicking drive continuing to work.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Manufacturer drive diagnostic',
      description:
        'The drive maker’s supported health and SMART utility can help confirm a fault after important data has been backed up.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Known-good compatible cable and power supply',
      description:
        'Correct connection hardware can rule out inadequate power or a faulty cable on an external hard drive.',
      kind: 'part',
      url: null,
      affiliate: false,
    },
    {
      title: 'Professional data-recovery service',
      description:
        'Specialized recovery may be appropriate when a physically distressed drive is unreadable and contains the only copy of important data.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],
};
