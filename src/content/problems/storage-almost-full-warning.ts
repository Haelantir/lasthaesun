import type { ProblemSeed } from '../types';

export const storageAlmostFullWarning: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'storage-space',
  slug: 'storage-almost-full-warning',
  canonicalPath: '/technology/storage/storage-space/storage-almost-full-warning/',
  name: 'Storage Almost Full Warning',
  eyebrow: 'Technology · Storage · Storage Space',

  h1: 'Can I Ignore a "Storage Almost Full" Warning?',
  seoTitle: 'Storage Almost Full: What May Stop Working and What to Delete',
  metaDescription:
    'A nearly full device may still run, but saves, updates, downloads, apps, and backups can fail. Verify the warning, protect your data, and free space soon.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'probably_not',
  urgency: 'medium',
  safetyRisk: 'low',
  fixDifficulty: 'easy',
  canIUseItQuestion: 'Can I keep using the device?',
  canIUseItLabel: 'Yes, briefly—free space soon',

  shortAnswer:
    'Probably not for long. The warning does not mean your device is about to fail, but running out of storage can block saves, downloads, app installs, updates, and backups. Protect important files and free space before normal functions start failing.',

  whyItMattersHeading: 'Why Does Low Storage Matter?',
  whyItMatters: [
    'Storage is the space used for apps, photos, downloads, documents, system files, and temporary data. It is different from working memory, and device storage is separate from an iCloud, Google, or Microsoft cloud quota. Check which one is actually low before deleting or buying anything.',
    'A nearly full device may continue working, but it has less room for new files and system tasks. Microsoft associates low drive space with slower performance and update trouble, while Google documents download, webpage, settings, and app problems on low-space Chromebooks. A full cloud account can separately interrupt backups, uploads, syncing, or email.',
  ].join('\n\n'),

  redFlagsHeading: 'Act Now If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Device and cloud storage limits, update and save failures, Chromebook local-file behavior, cleanup options, and scam pop-ups checked against Apple, Google, Microsoft, and FTC guidance.',
  disclaimer:
    'Storage labels and deletion behavior vary by operating system, app, account type, and managed-device policy. Confirm that important files are backed up before deleting them.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'built-in-warning-device-normal',
      label: 'The alert came from Settings and the device still works normally',
      shortDescription:
        "You confirmed the warning in the device's own storage screen, but saving, apps, and updates still work.",
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'You can finish what you are doing, then make space',
      resultBody:
        'This is usually a capacity warning rather than an immediate hardware failure. Waiting until storage is completely full makes cleanup harder and increases the chance that your next save, download, or update will fail.',
      recommendedAction:
        'Back up irreplaceable files, open the built-in storage recommendations, and remove or move content you no longer need.',
    },
    {
      slug: 'saves-or-installs-failing',
      label: 'New photos, files, downloads, or app installs are failing',
      shortDescription: 'The device is no longer completing ordinary tasks that create or download data.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Storage is already interfering with normal use',
      resultBody:
        'The warning has progressed from advance notice to an active functional problem. Continuing to create important work without dependable saving can leave you with incomplete or missing files.',
      recommendedAction:
        "Stop unnecessary downloads and recording, protect any unsaved work, back up existing files, and free space through the operating system's storage controls.",
    },
    {
      slug: 'update-blocked',
      label: 'A system or security update says there is not enough space',
      shortDescription: 'The update cannot download or install because the device lacks working room.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Make room and retry the update',
      resultBody:
        'Windows and mobile operating systems may require available local storage to download and install updates. Leaving the device unable to update can keep fixes and security improvements from being installed.',
      recommendedAction:
        "Use the system's cleanup recommendations, remove or move unneeded files, restart if instructed, and retry the update from the official settings screen.",
    },
    {
      slug: 'apps-or-settings-unreliable',
      label: 'Apps, webpages, or settings are becoming unreliable',
      shortDescription:
        'The device is slow, apps are failing, pages will not load correctly, or settings cannot be saved.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'The device needs working space now',
      resultBody:
        'Low storage can interfere with temporary files, app data, downloads, and other routine operations. Google specifically lists webpage, settings, download, account, and Android app problems on low-space Chromebooks.',
      recommendedAction:
        'Save and back up important work, close unnecessary tasks, free space using built-in tools, and test the affected functions again.',
    },
    {
      slug: 'chromebook-local-files-at-risk',
      label: 'A Chromebook warns that select data may be deleted',
      shortDescription:
        "Important files are stored only in the Chromebook's local Downloads folder or another unprotected local location.",
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Move important local files before the system cleans up',
      resultBody:
        'ChromeOS warns that when local storage runs low, downloaded files, browsing data, caches, or unused accounts may be automatically removed. Files kept only in Downloads should not be treated as a dependable backup.',
      recommendedAction:
        "Copy important local files to a permanent cloud folder or another verified backup destination, then free space from the Chromebook's storage manager.",
    },
    {
      slug: 'cloud-storage-warning',
      label: 'The warning is for cloud storage, not the device',
      shortDescription:
        'Local device storage is available, but iCloud, Google storage, or Microsoft cloud storage is near its quota.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Local use may continue, but backup and sync can stop',
      resultBody:
        "Buying or clearing cloud storage does not directly expand the device's internal capacity. However, a full cloud account can stop new backups, photo uploads, file syncing, or other account services.",
      recommendedAction:
        "Open the cloud provider's official storage manager, verify which service is using the quota, and delete, download, or upgrade only after checking what is backed up.",
    },
    {
      slug: 'fake-browser-warning',
      label: 'The message is a browser pop-up with a phone number or payment demand',
      shortDescription: 'The warning urges you to call support, install software, pay, or grant remote access.',
      verdictOverride: 'safe_to_ignore',
      urgencyOverride: 'low',
      resultHeadline: 'Ignore the pop-up and verify storage through Settings',
      resultBody:
        'The FTC says bogus computer warnings are commonly used in tech-support scams. A pop-up that asks you to call a number is not a trustworthy storage diagnostic.',
      recommendedAction:
        "Close the tab or browser without using its supplied buttons if possible. Do not call, pay, install software, or grant remote access. Check storage directly in the device's settings.",
    },
    {
      slug: 'storage-refills-after-cleanup',
      label: 'Storage fills up again right after cleanup',
      shortDescription:
        'You remove a meaningful amount of data, but the same category or drive quickly returns to nearly full.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'medium',
      resultHeadline: 'Repeated cleanup is not fixing the cause',
      resultBody:
        'A stuck download, rapidly growing cache, backup process, temporary-file problem, or app data may be consuming the space again. Deleting random personal files will not necessarily solve recurring growth.',
      recommendedAction:
        'Note which storage category is growing, restart the device, check active downloads and backups, and follow official support steps for that operating system or app.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The device has little storage headroom',
      description:
        'It may continue working normally, but there is limited room for new files, apps, temporary data, and system tasks.',
      severity: 'info',
      chainLabel: 'Warning threshold reached',
    },
    {
      stageLabel: 'IF YOU KEEP ADDING DATA',
      title: 'Saves, downloads, and installs can fail',
      description:
        'Photos, documents, media, app installations, or downloaded files may no longer fit in the available space.',
      severity: 'caution',
      chainLabel: 'New data is blocked',
    },
    {
      stageLabel: 'WHEN THE SYSTEM NEEDS WORKING SPACE',
      title: 'Performance and updates can be affected',
      description:
        'Apps may become unreliable, and an operating-system update may be unable to download or install until space is available.',
      severity: 'warning',
      chainLabel: 'System tasks are disrupted',
    },
    {
      stageLabel: 'IF THE CLOUD QUOTA REACHES ITS LIMIT',
      title: 'Backups and syncing can stop',
      description:
        'Depending on the provider, new device backups, photo uploads, file syncing, editing, or email functions may be interrupted.',
      severity: 'warning',
      chainLabel: 'Off-device protection stops',
    },
    {
      stageLabel: 'ON CHROMEOS IF LOCAL SPACE RUNS OUT',
      title: 'Some local data may be automatically removed',
      description:
        'Google warns that a low-space Chromebook may delete downloaded files, browsing data, cache, or unused accounts. An unbacked local file could be lost.',
      severity: 'danger',
      chainLabel: 'Local data can be lost',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'The built-in storage screen shows low space, but everything still works',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        "Finish the current task, back up important files, and use the device's storage recommendations to make room soon.",
    },
    {
      situation: 'A system update is waiting for more available space',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Clear recommended temporary or unused content, confirm important files are backed up, and retry the update.',
    },
    {
      situation: 'The camera, downloads, saves, or app installations are failing',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop adding unnecessary data, protect open work, and free local storage before relying on the device.',
    },
    {
      situation: 'Only the cloud account is almost full',
      ignoreAnswer: 'Briefly',
      severity: 'caution',
      whatToDo:
        'Confirm that local storage is healthy, then manage the cloud quota before backups, uploads, syncing, or email are interrupted.',
    },
    {
      situation: 'A Chromebook contains important files only in Downloads',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Move those files to a permanent, verified backup location before continuing normal use or deleting anything.',
    },
    {
      situation: 'You need the device for an important recording, trip, presentation, or deadline',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Free and verify storage before the task. Do not assume the device will continue saving once the warning becomes a full-storage error.',
    },
    {
      situation: 'A browser pop-up gives a support number or asks for payment',
      ignoreAnswer: 'Yes',
      severity: 'warning',
      whatToDo:
        "Ignore and close the pop-up, do not call or install anything, and verify the real storage status through the operating system's settings.",
    },
    {
      situation: 'The same storage category refills after cleanup',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Identify the growing category and check downloads, backups, app data, and official troubleshooting guidance instead of repeatedly deleting personal files.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Confirm which storage is almost full',
      body:
        "Open the operating system's storage screen directly rather than trusting a browser message. Check whether the warning refers to internal device storage, a removable drive, a backup destination, or a cloud account.",
    },
    {
      title: 'Back up irreplaceable files first',
      body:
        'Confirm that photos, documents, project files, and other important data exist in another reliable location before doing broad cleanup. Open a few backed-up files to verify that the copy is usable.',
    },
    {
      title: 'Use the built-in storage recommendations',
      body:
        "Apple, Google, and Microsoft provide storage breakdowns and cleanup controls. Review the categories instead of guessing, and prefer options such as offloading or archiving when you want to retain an app's documents and settings.",
    },
    {
      title: 'Remove lower-risk items before personal data',
      body:
        "Start with unwanted downloads, offline media, installer files, unused apps, and temporary files identified by the operating system. Review Trash or Recycle Bin before emptying it. Clearing an app's storage or data can erase local app information.",
    },
    {
      title: 'Retry the blocked task and watch the storage meter',
      body:
        'After cleanup, reopen the storage screen and retry the update, save, download, camera, or app function that failed. If available space disappears again, identify the growing category and use official troubleshooting support.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'New work will not save',
      description:
        'A full device may not reliably accept new photos, recordings, documents, downloads, or app data. Protect open work and free space now.',
      severity: 'warning',
    },
    {
      title: 'An operating-system update is blocked',
      description:
        'Make enough room to complete the update rather than repeatedly dismissing the storage error.',
      severity: 'warning',
    },
    {
      title: 'Important files exist only on this device',
      description:
        'Do not start broad deletion until you have a verified backup. Low storage is especially risky when the device contains the only copy.',
      severity: 'danger',
    },
    {
      title: 'Apps, webpages, or settings are failing',
      description:
        'The problem is already affecting normal operation and should no longer be treated as an advance warning.',
      severity: 'warning',
    },
    {
      title: 'A Chromebook says select data may be deleted',
      description:
        'Move important local downloads to permanent storage because ChromeOS may automatically remove some local data when space is low.',
      severity: 'danger',
    },
    {
      title: 'Storage returns to full after you clean it',
      description:
        'Recurring growth can indicate an unresolved app, cache, download, synchronization, backup, or system-file problem.',
      severity: 'warning',
    },
    {
      title: 'You called or granted remote access from a pop-up',
      description:
        'End the remote session. If you shared payment information, contact the financial institution. Change exposed passwords from a trusted device and follow FTC scam-reporting guidance.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does a storage warning mean the drive is failing?',
      answer:
        'No. It means the available capacity is low, not that the storage hardware is necessarily damaged. Back up important data and investigate separately if you also see drive-health warnings, corrupted files, or repeated read and write errors.',
    },
    {
      question: 'Is storage the same thing as memory?',
      answer:
        'No. Storage holds apps and files long term. Memory is working space used while programs run. Closing apps may reduce memory use, but it usually does not free much persistent storage.',
    },
    {
      question: 'How can I tell whether device storage or cloud storage is full?',
      answer:
        "Check the device's Storage settings and the cloud account's official storage page separately. They have different quotas, and clearing or purchasing one does not automatically increase the other.",
    },
    {
      question: 'How much space should I free?',
      answer:
        'There is no single amount that fits every device or update. Free enough to clear the warning and complete the task that was blocked, then keep additional headroom for temporary files, downloads, and future updates.',
    },
    {
      question: "Is clearing an app's cache safe?",
      answer:
        'Clearing cache usually removes temporary data, although the app may load more slowly while rebuilding it. Do not confuse this with clearing storage or app data, which can permanently remove local information and sign-in state.',
    },
    {
      question: 'Will buying cloud storage fix a full phone or computer?',
      answer:
        'Not by itself. It may restore cloud backups or syncing, but local space increases only if files are removed from the device or an approved optimization feature replaces local copies with cloud-managed versions.',
    },
    {
      question: 'Can I delete photos after they are backed up?',
      answer:
        "Only after verifying the backup and understanding the service's deletion behavior. In a synchronized library, manually deleting a photo may remove it from other devices or the cloud too. Use the provider's official free-space feature when available.",
    },
    {
      question: 'Should I install a cleaner app?',
      answer:
        'Start with the storage tools built into the operating system. Avoid unknown utilities that demand broad file access, payment, or remote control, especially if they appeared through an alarming pop-up.',
    },
    {
      question: 'Why is the warning still showing after I deleted files?',
      answer:
        'Deleted items may still be in Trash or Recycle Bin, the storage display may need to refresh, or another app or process may be creating data. Recheck the storage categories after restarting the device.',
    },
    {
      question: 'Do I need a repair service for low storage?',
      answer:
        'Usually not. Most cases can be handled by backing up, moving, offloading, or deleting content. Seek official support if storage usage is unexplained, cleanup tools fail, files are corrupted, or the device remains unreliable after space is available.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Federal Trade Commission',
      title: 'How To Spot, Avoid, and Report Tech Support Scams',
      url: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams',
      sourceType: 'government',
      notes:
        'Explains that bogus computer warnings and pop-ups with support phone numbers are common tech-support scam tactics and advises consumers not to call, pay, or grant remote access.',
    },
    {
      publisher: 'Apple',
      title: 'How to check the storage on your iPhone and iPad',
      url: 'https://support.apple.com/en-us/108429',
      sourceType: 'manufacturer',
      notes:
        'Directly addresses the "Storage Almost Full" alert, storage categories, recommendations, offloading unused apps, deleting apps, and removing content.',
    },
    {
      publisher: 'Google',
      title: 'Free up storage on your Android device',
      url: 'https://support.google.com/android/answer/7431795?hl=en',
      sourceType: 'manufacturer',
      notes:
        "Explains device storage, built-in cleanup, Smart Storage, app archiving, cache clearing, and that clearing an app's storage permanently deletes its app data.",
    },
    {
      publisher: 'Microsoft',
      title: 'Free up drive space in Windows',
      url: 'https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/free-up-drive-space-in-windows',
      sourceType: 'manufacturer',
      notes:
        'States that low drive space can cause slower performance and trouble installing Windows updates, and documents Storage Sense, Cleanup recommendations, and Disk Cleanup.',
    },
    {
      publisher: 'Google',
      title: 'Free up space on your Chromebook',
      url: 'https://support.google.com/chromebook/answer/1061547?hl=en',
      sourceType: 'manufacturer',
      notes:
        'Lists low-space problems involving downloads, webpages, settings, accounts, and Android apps, and warns that downloaded files, browsing data, cache, or unused accounts may be automatically deleted.',
    },
    {
      publisher: 'Apple',
      title: 'Manage your iCloud storage on your Apple device',
      url: 'https://support.apple.com/en-us/108922',
      sourceType: 'manufacturer',
      notes:
        'Explains that full iCloud storage stops device backups, new iCloud Photos uploads, and normal updating across iCloud Drive and other iCloud apps.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Built-in storage manager',
      description:
        'Shows which categories use space and offers operating-system-approved cleanup, offloading, archiving, or temporary-file controls.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Independent backup destination',
      description:
        'A trusted cloud backup service or separate storage device protects important files before cleanup and reduces dependence on one nearly full device.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'External storage drive or computer transfer',
      description:
        'Useful for moving large photo, video, download, or project archives off a device without immediately deleting the only copy.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Official device storage guide',
      description:
        'Manufacturer guidance explains model-specific storage menus, optimization options, update requirements, and the effects of deleting app data.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
  ],
};
