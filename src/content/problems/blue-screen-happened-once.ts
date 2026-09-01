import type { ProblemSeed } from '../types';

export const blueScreenHappenedOnce: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'crashes-and-errors',
  slug: 'blue-screen-happened-once',
  canonicalPath: '/technology/computers/crashes-and-errors/blue-screen-happened-once/',
  name: 'Blue Screen That Happened Once',
  eyebrow: 'Technology · Computers · Crashes & Errors',

  h1: 'Can I Ignore a Blue Screen That Happened Once?',
  seoTitle: 'One Windows Blue Screen: When to Monitor and When to Act',
  metaDescription:
    'A single Windows blue screen can often be monitored after a normal restart. Learn when repeat crashes, hardware errors, malware signs, or boot failure need action.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'can_wait',
  urgency: 'low',
  safetyRisk: 'low',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the PC?',
  canIUseItLabel: 'Yes, if it restarted normally',

  shortAnswer:
    'Usually, yes—but do not completely dismiss it. If the PC restarted normally and remains stable, record any stop code, back up important files, install trusted updates, and watch for another crash.',

  whyItMattersHeading: 'Why One Crash Still Deserves a Quick Check',
  whyItMatters: [
    'A real Windows blue screen is a stop error. Windows deliberately shuts down or restarts when continuing could compromise safe operation or risk operating-system or user-data corruption. The trigger may be hardware, a device driver, software, or a recent system change.',
    'One isolated event does not identify the cause or prove the computer is failing. The pattern matters more: another blue screen, a repeated stop code, boot trouble, failed hardware tests, file problems, or malware symptoms makes investigation more urgent.',
  ].join('\n\n'),

  redFlagsHeading: 'Stop Treating It as a One-Off If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Scope covers isolated and recurring Windows stop errors, hardware clues, recovery, malware signs, and fake alerts using Microsoft and U.S. FTC guidance.',
  disclaimer:
    'This is general guidance for Windows PCs. For a work or school computer, follow your organization’s IT process before changing drivers, firmware, security settings, or recovery options.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'after-new-hardware',
      label: 'It happened after adding a device or internal hardware',
      shortDescription:
        'A USB accessory, memory module, storage device, graphics card, or other hardware was added shortly before the crash.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'Isolate the new hardware',
      resultBody:
        'Microsoft lists hardware devices and their drivers among possible causes and recommends removing newly added hardware when troubleshooting a blue screen.',
      recommendedAction:
        'Shut down and disconnect the new nonessential device. If internal hardware was added, confirm compatibility and installation or have it checked before continuing normal use.',
    },
    {
      slug: 'after-recent-change-and-repeated',
      label: 'It started after a driver, app, or Windows change and happened again',
      shortDescription: 'The crashes began after a specific installation or update and are now recurring.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'The recent change is a useful lead',
      resultBody:
        'Repeated crashes that begin after a known change are less likely to be an isolated glitch. Microsoft includes rolling back changes or returning to a known working state among its troubleshooting options.',
      recommendedAction:
        'Check update and installation history. Use supported rollback, uninstall, or System Restore options for the suspected change, or get help if you cannot identify a safe reversal.',
    },
    {
      slug: 'same-stop-code-repeats',
      label: 'The same stop code appears again',
      shortDescription: 'Windows shows the same code or names the same failed module during another crash.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Treat it as a recurring fault',
      resultBody:
        'A repeated code or module gives evidence that the same driver, device, or system condition may still be present. Continuing without investigation risks more interrupted work.',
      recommendedAction:
        'Back up your files, update Windows and the relevant manufacturer driver, check Event Viewer, and arrange dump analysis or support if the cause remains unclear.',
    },
    {
      slug: 'other-instability',
      label: 'Blue screens come with freezes, random restarts, or file problems',
      shortDescription:
        'The computer is showing more than one kind of instability rather than a single isolated crash.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'This is no longer a one-off event',
      resultBody:
        'Multiple failure symptoms can fit driver, hardware, storage, operating-system, or malware trouble. Further abrupt shutdowns may interrupt work and put unsaved or actively written data at risk.',
      recommendedAction:
        'Back up important files before heavier troubleshooting. Run trusted security and hardware checks, install appropriate updates, and arrange support if instability continues.',
    },
    {
      slug: 'blue-screen-at-startup',
      label: 'Windows blue-screens during startup or enters a repair loop',
      shortDescription:
        'The desktop cannot be reached reliably, or the computer repeatedly enters recovery or automatic repair.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Use recovery options now',
      resultBody:
        'A computer that cannot complete startup is not stable enough for normal use. Safe Mode, Startup Repair, System Restore, or another Windows recovery option may be required.',
      recommendedAction:
        'Disconnect new nonessential hardware and enter the Windows recovery environment. Use the recovery option that best fits the recent change, or contact support before resetting the PC.',
    },
    {
      slug: 'whea-stop-code',
      label: 'The stop code is WHEA_UNCORRECTABLE_ERROR',
      shortDescription: 'The blue screen explicitly displays WHEA_UNCORRECTABLE_ERROR.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Windows detected a hardware error',
      resultBody:
        'Microsoft identifies this stop code as a hardware-error condition. It may involve a component, firmware, driver, or system configuration and warrants troubleshooting even if the computer restarted.',
      recommendedAction:
        'Back up important files, install trusted Windows and manufacturer updates, remove recent hardware changes, and run the device maker’s hardware diagnostics.',
    },
    {
      slug: 'diagnostic-reported-error',
      label: 'A memory or manufacturer hardware test reports an error',
      shortDescription: 'Windows Memory Diagnostic or the computer maker’s diagnostic tool detects a problem.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'A failed test needs follow-up',
      resultBody:
        'A diagnostic error is stronger evidence than the blue screen alone that a component or subsystem needs attention. Repeated use may lead to further crashes or unreliable data.',
      recommendedAction:
        'Save the diagnostic result and back up your files. Follow the computer or component maker’s service guidance rather than repeatedly rerunning normal workloads.',
    },
    {
      slug: 'malware-signs',
      label: 'Crashes come with redirects, pop-ups, disabled security, or unusual slowness',
      shortDescription: 'The blue screen is part of a broader pattern that could indicate malware.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Check for a security problem',
      resultBody:
        'The FTC lists crashes among possible malware symptoms, especially when combined with unexpected redirects, pop-ups, browser changes, or other abnormal behavior. A crash alone does not prove infection.',
      recommendedAction:
        'Avoid banking or entering passwords on the PC. Update its security software, run a trusted scan, and use another trusted device to change passwords if you believe accounts may be exposed.',
    },
    {
      slug: 'browser-blue-screen',
      label: 'The blue screen appeared inside a browser and showed a phone number',
      shortDescription: 'The message demands a call, payment, download, or immediate remote support.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'medium',
      resultHeadline: 'It is probably a tech-support scam',
      resultBody:
        'Genuine Microsoft error messages do not include a phone number. The FTC and Microsoft warn that scam websites can imitate blue screens to obtain money, personal information, or remote access.',
      recommendedAction:
        'Do not call, pay, click, or install anything from the warning. Close the browser or restart the PC, then update your security software and run a scan.',
    },
    {
      slug: 'scammer-got-access',
      label: 'You called the number or gave someone remote access',
      shortDescription:
        'Someone connected to the computer, received payment details, or obtained account information.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Secure the computer and your accounts',
      resultBody:
        'A scammer with remote access may install unwanted software, view personal information, or obtain credentials. Payment and identity risks continue after the fake warning disappears.',
      recommendedAction:
        'Disconnect the PC from the network. From another trusted device, change exposed passwords and contact affected financial institutions. Remove remote-access software, run security scans, and report the scam.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'Windows stops the unsafe operation',
      description:
        'The bug check halts Windows instead of allowing the system to continue in a condition that could affect the operating system or user data. Unsaved work may be lost.',
      severity: 'caution',
      chainLabel: 'Stop error',
    },
    {
      stageLabel: 'AFTER RESTART',
      title: 'Diagnostic clues may remain',
      description:
        'The stop code, failed-module name, system log, or memory dump may help identify the device, driver, software, or hardware involved.',
      severity: 'info',
      chainLabel: '→ Diagnostic clues',
    },
    {
      stageLabel: 'IF THE CAUSE PERSISTS',
      title: 'Another crash can interrupt work',
      description:
        'An unresolved driver, device, software, or hardware problem may trigger another stop error, even if the computer appears normal between crashes.',
      severity: 'warning',
      chainLabel: '→ Repeat crashes',
    },
    {
      stageLabel: 'IF CRASHES INTERRUPT FILE WRITES',
      title: 'Data disruption becomes more likely',
      description:
        'Repeated abrupt stops can interfere with open files, updates, applications, or operating-system tasks. A current backup limits the consequences.',
      severity: 'warning',
      chainLabel: '→ Data disruption',
    },
    {
      stageLabel: 'IF MALWARE OR A SCAM IS INVOLVED',
      title: 'Accounts and personal information may be exposed',
      description:
        'Crashes combined with malware symptoms or fake support warnings can indicate a separate security threat. Remote access or shared credentials requires immediate account protection.',
      severity: 'danger',
      chainLabel: '→ Security exposure',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'A single blue screen followed by a normal restart and stable use',
      ignoreAnswer: 'Yes, with monitoring',
      severity: 'info',
      whatToDo:
        'Record what you can, back up important files, install Windows updates, and watch for recurrence.',
    },
    {
      situation: 'The crash followed newly installed hardware or a connected device',
      ignoreAnswer: 'No',
      severity: 'caution',
      whatToDo: 'Disconnect the new nonessential hardware and confirm compatibility before using it again.',
    },
    {
      situation: 'The same stop code or failed module appears again',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Back up files and investigate the named code, driver, or device using trusted support information.',
    },
    {
      situation: 'Windows cannot reach the desktop or stays in a repair loop',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Use Windows recovery options or contact support before resetting or reinstalling the computer.',
    },
    {
      situation: 'The code is WHEA_UNCORRECTABLE_ERROR',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Treat it as a hardware-error warning and run appropriate manufacturer diagnostics.',
    },
    {
      situation: 'A memory or hardware diagnostic reports an error',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo: 'Save the result, protect your files, and follow the device maker’s service instructions.',
    },
    {
      situation: 'Crashes appear with other possible malware symptoms',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Stop sensitive activity, update security tools, run a scan, and protect potentially exposed accounts.',
    },
    {
      situation: 'A browser blue screen asks you to call a phone number',
      ignoreAnswer: 'No—treat it as a scam',
      severity: 'warning',
      whatToDo:
        'Do not call or click. Close the browser, restart if necessary, and run a trusted security scan.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Save the crash details',
      body:
        'Write down or photograph the stop code and anything shown after “What failed.” Note what the computer was doing. After restart, Event Viewer may contain related critical errors, and Windows may have created a memory dump.',
    },
    {
      title: 'Back up important files',
      body:
        'Confirm that documents, photos, and other irreplaceable files are copied to a separate reliable location. Do this before major driver changes, recovery work, hardware testing, or a Windows reset.',
    },
    {
      title: 'Install updates from trusted sources',
      body:
        'Check Windows Update for operating-system and driver updates. For model-specific drivers or firmware, use the computer or component maker’s support page and follow its instructions.',
    },
    {
      title: 'Reverse a clear recent trigger',
      body:
        'If crashes began after a new device, driver, application, or update, disconnect the device or use supported rollback, uninstall, or System Restore options. Avoid changing unrelated components at the same time.',
    },
    {
      title: 'Run diagnostics if the blue screen returns',
      body:
        'Use Windows Memory Diagnostic and any hardware tests provided by the PC maker. If crashes continue, preserve the dump files and contact the manufacturer, repair service, or support provider for analysis.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'Another blue screen occurs',
      description:
        'Recurrence means the triggering condition may still be present, even if Windows works normally between crashes.',
      severity: 'warning',
    },
    {
      title: 'The same stop code or module keeps appearing',
      description:
        'Repeated diagnostic information provides a specific driver, device, or system condition to investigate.',
      severity: 'warning',
    },
    {
      title: 'Windows cannot start normally',
      description:
        'A startup blue screen, recovery loop, or repeated automatic repair requires recovery or support rather than ordinary use.',
      severity: 'danger',
    },
    {
      title: 'WHEA_UNCORRECTABLE_ERROR appears',
      description:
        'Microsoft identifies this as a hardware-error condition that warrants updates, diagnostics, and investigation.',
      severity: 'warning',
    },
    {
      title: 'A memory or hardware diagnostic fails',
      description: 'Save the result and follow the computer or component maker’s service guidance.',
      severity: 'warning',
    },
    {
      title: 'Files become corrupted or the computer also freezes and restarts',
      description:
        'Multiple failure symptoms indicate a broader stability problem and make a current backup more important.',
      severity: 'warning',
    },
    {
      title: 'Pop-ups, redirects, disabled security, or fake support warnings appear',
      description:
        'Stop sensitive activity. Do not call a number shown in an error message or grant unsolicited remote access.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Is one blue screen a sign that my computer is dying?',
      answer:
        'No. One stop error does not prove that the computer or a component is failing. Hardware is one possible cause, but drivers and software can also trigger blue screens.',
    },
    {
      question: 'Is a single blue screen normal?',
      answer:
        'It is not normal operation, but one isolated crash followed by stable use is usually a monitor-and-check situation rather than proof of an ongoing failure.',
    },
    {
      question: 'What usually causes a Windows blue screen?',
      answer:
        'Microsoft lists hardware devices, device drivers, software, and operating-system conditions among the possible causes. The screen alone may not identify which one is responsible.',
    },
    {
      question: 'Where can I find information after the computer restarts?',
      answer:
        'Check Event Viewer for critical system errors around the crash. If Windows created a dump file, that file can provide the stop code and additional debugging information.',
    },
    {
      question: 'Should I run Windows Memory Diagnostic after only one blue screen?',
      answer:
        'It is optional if the computer remains stable. Run it sooner if the crash repeats, the stop code points toward memory, or you notice freezes, file corruption, or other instability.',
    },
    {
      question: 'Should I reset or reinstall Windows after one blue screen?',
      answer:
        'Usually not. Start with a backup, trusted updates, recent-change review, and basic diagnostics. Resetting or reinstalling is a later recovery option when simpler troubleshooting does not resolve recurring crashes.',
    },
    {
      question: 'Can malware cause a blue screen?',
      answer:
        'Malware can cause crashes, but a blue screen by itself does not prove infection. A security scan becomes more important when crashes come with redirects, pop-ups, browser changes, disabled protection, or unusual activity.',
    },
    {
      question: 'What if the blue screen tells me to call a phone number?',
      answer:
        'Do not call. Genuine Microsoft error messages do not include support phone numbers. Close the browser or restart the PC, then run a trusted security scan.',
    },
    {
      question: 'Can I keep working before I know the exact cause?',
      answer:
        'Yes, if the PC restarted normally and remains stable. Save work frequently and keep a current backup. Stop treating it as low urgency if another crash or any other warning sign appears.',
    },
    {
      question: 'When should I get repair or support help?',
      answer:
        'Get help when crashes recur, Windows cannot start, a diagnostic reports an error, a hardware-related stop code appears, or dump analysis and basic troubleshooting do not reveal the cause.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Microsoft Support',
      title: 'Resolving Blue Screen errors in Windows',
      url: 'https://support.microsoft.com/en-us/windows/resolving-blue-screen-errors-in-windows-60b01860-58f2-be66-7516-5c45a66ae3c6',
      sourceType: 'manufacturer',
      notes:
        'Explains that stop errors shut down or restart Windows after a serious problem and may involve hardware, drivers, or software. Provides guidance on new hardware, Safe Mode, updates, Event Viewer, memory tests, and dump analysis.',
    },
    {
      publisher: 'Microsoft Learn',
      title: 'Stop code error or bug check troubleshooting',
      url: 'https://learn.microsoft.com/en-us/troubleshoot/windows-client/performance/stop-code-error-troubleshooting',
      sourceType: 'manufacturer',
      notes:
        'Describes bug checks as protective stops when safe operation is compromised and covers updates, firmware, hardware testing, rollback, memory-dump collection, and advanced analysis.',
    },
    {
      publisher: 'Microsoft Support',
      title: 'How to fix WHEA_UNCORRECTABLE_ERROR',
      url: 'https://support.microsoft.com/en-us/windows/experience/performance-optimization/how-to-fix-whea-uncorrectable-error',
      sourceType: 'manufacturer',
      notes:
        'Identifies WHEA_UNCORRECTABLE_ERROR as a hardware-error stop condition and recommends Windows and driver updates, recovery options, and further blue-screen troubleshooting.',
    },
    {
      publisher: 'Microsoft Support',
      title: 'Backup, restore, and recovery in Windows',
      url: 'https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-restore-and-recovery-in-windows',
      sourceType: 'manufacturer',
      notes:
        'Explains that backups protect against data loss or corruption and outlines Windows Backup, recovery drives, System Restore, and other recovery choices.',
    },
    {
      publisher: 'Federal Trade Commission',
      title: 'Malware: How To Protect Against, Detect, and Remove It',
      url: 'https://consumer.ftc.gov/articles/malware-how-protect-against-detect-and-remove-it',
      sourceType: 'government',
      notes:
        'Lists crashes among possible malware symptoms, especially with other abnormal behavior, and advises security scans and avoiding sensitive activity when infection is suspected.',
    },
    {
      publisher: 'Federal Trade Commission',
      title: 'How To Spot, Avoid, and Report Tech Support Scams',
      url: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams',
      sourceType: 'government',
      notes:
        'Warns that fake pop-ups may imitate trusted companies and demand a phone call. States that genuine security warnings do not ask users to call a number and explains remote-access, payment, and identity risks.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Windows Event Viewer',
      description:
        'The built-in system log can show critical errors recorded near the blue screen and may help connect the crash to a driver, device, update, or unexpected restart.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Windows Memory Diagnostic',
      description:
        'A built-in memory test that can check for detectable RAM errors when crashes repeat or point toward memory.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'A current backup method',
      description:
        'Windows Backup, cloud storage, or a separate external backup protects important files before diagnostics, rollback, recovery, or hardware service.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Device-maker diagnostics or support',
      description:
        'Many PC manufacturers provide model-specific hardware tests, drivers, firmware instructions, and service options.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],

  /* ---------------------------------------------------------------- Block 12 */
  related: [
    {
      slug: 'laptop-overheating',
      anchorText: 'Could laptop overheating be causing the blue screen?',
      relationshipType: 'cause',
    },
    {
      slug: 'swollen-laptop-battery',
      anchorText: 'Is a swollen laptop battery a separate emergency?',
      relationshipType: 'escalation',
    },
  ],
};
