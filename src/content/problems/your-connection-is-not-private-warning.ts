import type { ProblemSeed } from '../types';

export const yourConnectionIsNotPrivateWarning: ProblemSeed = {
  /* ---------------------------------------------------------------- Block 1 */
  systemSlug: 'browser-security',
  slug: 'your-connection-is-not-private-warning',
  canonicalPath: '/technology/software/browser-security/your-connection-is-not-private-warning/',
  name: 'Your Connection Is Not Private Warning',
  eyebrow: 'Technology · Software · Browser Security',

  h1: 'Can I Ignore a "Your Connection Is Not Private" Warning?',
  seoTitle: 'Your Connection Is Not Private: When Not to Proceed',
  metaDescription:
    'Do not click through a privacy warning blindly. Learn when a bad clock, public Wi-Fi, site certificate, or network filter is to blame and what to do next.',

  status: 'published',
  indexable: true,

  /* ---------------------------------------------------------------- Block 2 */
  verdict: 'do_not_ignore',
  urgency: 'high',
  safetyRisk: 'high',
  fixDifficulty: 'moderate',
  canIUseItQuestion: 'Can I keep using the site?',
  canIUseItLabel: 'Not past the warning until you verify the cause',

  shortAnswer:
    'No. Go back rather than bypassing the warning, especially before signing in, paying, or entering personal information. A bad clock or broken site certificate may be the cause, but the browser cannot rule out the wrong website or an intercepted connection.',

  whyItMattersHeading: 'Why Does This Privacy Warning Matter?',
  whyItMatters: [
    'For an HTTPS connection, your browser checks the website’s certificate to confirm that it belongs to the address you requested and is trusted. This warning means that check failed, so the browser cannot establish the site’s identity with the normal level of confidence.',
    'The cause may be an expired certificate, the wrong device clock, a Wi-Fi sign-in page, security software, a managed network, or interception by something you did not authorize. You cannot safely distinguish those possibilities by clicking through and looking at the page. Encryption alone also does not prove that a website is legitimate; scammers can operate encrypted sites.',
  ].join('\n\n'),

  redFlagsHeading: 'Do Not Proceed If:',

  lastReviewedAt: new Date('2026-09-01T00:00:00.000Z'),
  reviewScope:
    'Certificate warnings, clock and network causes, sensitive-data risk, local exceptions, and post-exposure steps checked against Google, Mozilla, Apple, and FTC guidance.',
  disclaimer:
    'This page covers browser certificate and connection-privacy warnings. Deceptive-site, malware, download, and account-compromise warnings may require additional steps.',

  /* ---------------------------------------------------------------- Block 3 */
  scenarios: [
    {
      slug: 'login-or-payment-page',
      label: 'The warning appears before a login, payment, email, banking, tax, or medical page',
      shortDescription:
        'The site is about to receive a password, card number, account information, or other sensitive data.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not enter anything',
      resultBody:
        'The certificate warning means the browser cannot reliably confirm that your secure connection ends at the intended site. Credentials or financial information are not worth testing on that connection.',
      recommendedAction:
        'Go back. Open the service from a saved bookmark, its official app, a statement, or an address you already know is correct. Continue only when the warning is gone.',
    },
    {
      slug: 'unexpected-link-or-wrong-address',
      label: 'You arrived through an unexpected message, ad, or slightly unusual web address',
      shortDescription:
        'The domain contains extra words, substituted letters, an unfamiliar ending, or came from a message asking you to act.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Treat the link as untrusted',
      resultBody:
        'A certificate problem combined with an unexpected route or altered domain raises the chance that you are not at the service you intended to visit.',
      recommendedAction:
        'Close the page. Type the known address yourself or contact the organization using information from a statement, card, official app, or other trusted source.',
    },
    {
      slug: 'incorrect-device-clock',
      label: 'Your device’s date, time, or time zone is clearly wrong',
      shortDescription:
        'Several normally reliable sites show date-related certificate errors, and the device clock does not match the current date or local time.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Correct the clock before browsing',
      resultBody:
        'Certificates have validity dates, so an inaccurate device clock can make a legitimate certificate appear expired or not yet valid.',
      recommendedAction:
        'Set the correct date, time, and time zone, preferably using automatic settings. Restart the browser and reload the site instead of bypassing the warning.',
    },
    {
      slug: 'one-public-site-only',
      label: 'Only one ordinary public website shows the warning',
      shortDescription: 'Other secure sites work normally, and you do not control the affected website.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Leave the site and try again later',
      resultBody:
        'A one-site problem often points to an expired certificate, wrong domain, incomplete certificate chain, or another server configuration problem. The website owner needs to correct it.',
      recommendedAction:
        'Do not create an exception. Use another source, notify the site owner if practical, and return after the certificate problem has been fixed.',
    },
    {
      slug: 'public-wifi-sign-in',
      label: 'The warning started immediately after joining hotel, airport, café, or other public Wi-Fi',
      shortDescription:
        'The network may be trying to display a sign-in or terms page before allowing normal internet access.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not use the warning page as the Wi-Fi portal',
      resultBody:
        'Captive portals can interfere with the first secure request, but an unknown or hostile hotspot can also interfere with secure connections. The certificate warning is not a safe place to enter website credentials.',
      recommendedAction:
        'Use the device’s official network sign-in prompt and confirm the network name with the venue. If warnings continue, disconnect and use cellular data or another trusted network.',
    },
    {
      slug: 'managed-work-or-school-network',
      label: 'You are on a managed work or school device or network',
      shortDescription:
        'The organization may use an approved proxy or security system that inspects encrypted traffic.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'medium',
      resultHeadline: 'Let the administrator verify it',
      resultBody:
        'Managed inspection can cause certificate errors when the organization’s required certificate is missing or misconfigured. The same error can also appear when interception is unauthorized.',
      recommendedAction:
        'Stop before entering sensitive information and contact your organization’s support team. Do not install a root certificate or make a permanent exception on your own.',
    },
    {
      slug: 'confirmed-local-device',
      label: 'A router, printer, server, or other device on your own network uses a self-signed certificate',
      shortDescription:
        'You intentionally opened a known local address and the device documentation says a certificate warning may appear.',
      verdictOverride: 'can_wait',
      urgencyOverride: 'low',
      resultHeadline: 'An exception requires specific verification',
      resultBody:
        'Self-signed certificates are common on some controlled local systems, but the browser cannot independently verify them. An exception is reasonable only when you can confirm the exact device, address, and certificate guidance.',
      recommendedAction:
        'Verify the local address and certificate details through the device maker or network administrator. Do not reuse that exception for a public site or unfamiliar device.',
    },
    {
      slug: 'warnings-on-many-sites',
      label: 'Many unrelated secure sites suddenly show certificate warnings',
      shortDescription:
        'The problem began after a VPN, antivirus, filtering tool, extension, network change, or other software change.',
      verdictOverride: 'probably_not',
      urgencyOverride: 'high',
      resultHeadline: 'Investigate the device or network',
      resultBody:
        'Warnings across unrelated sites can mean security software, a managed proxy, malware, or another network component is replacing website certificates.',
      recommendedAction:
        'Avoid sensitive browsing. Update the browser, operating system, and security software; disconnect unfamiliar VPNs or networks; run a security scan; and contact IT if the device is managed.',
    },
    {
      slug: 'information-already-entered',
      label: 'You bypassed the warning and entered a password, card number, or personal information',
      shortDescription: 'Sensitive data was submitted before you confirmed the website and connection.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'critical',
      resultHeadline: 'Protect the affected account now',
      resultBody:
        'The warning does not prove the information was stolen, but you cannot rely on that connection to show who received it.',
      recommendedAction:
        'From a trusted connection, change the password and any reused passwords, enable two-factor authentication, review account activity, and contact the card issuer or bank if payment information was involved.',
    },
    {
      slug: 'browser-blocks-bypass',
      label: 'The browser does not offer a way to continue',
      shortDescription:
        'The site may use HSTS, have a critical certificate error, or be covered by an organizational security policy.',
      verdictOverride: 'do_not_ignore',
      urgencyOverride: 'high',
      resultHeadline: 'Do not search for a workaround',
      resultBody:
        'Browsers deliberately prevent bypassing some certificate failures because proceeding would defeat a required security control.',
      recommendedAction:
        'Check the address and device clock, then contact the site owner or network administrator. Do not alter certificate stores or browser security settings to force access.',
    },
  ],

  /* ---------------------------------------------------------------- Block 4 */
  consequences: [
    {
      stageLabel: 'RIGHT NOW',
      title: 'The browser cannot authenticate the website normally',
      description:
        'The certificate presented by the connection does not pass the browser’s checks for trust, identity, validity, or security.',
      severity: 'caution',
      chainLabel: 'Certificate check fails',
    },
    {
      stageLabel: 'IF YOU BYPASS THE WARNING',
      title: 'You remove the browser’s protection for that connection',
      description:
        'The page may belong to the intended site with a configuration problem, or the connection may end somewhere else. The warning cannot tell you which from the page’s appearance.',
      severity: 'warning',
      chainLabel: 'Identity unverified',
    },
    {
      stageLabel: 'IF YOU SUBMIT INFORMATION',
      title: 'Sensitive data may reach the wrong party',
      description:
        'Passwords, messages, payment details, and personal information may be exposed to an impersonating site or unauthorized interceptor.',
      severity: 'danger',
      chainLabel: 'Data exposure',
    },
    {
      stageLabel: 'IF A PASSWORD IS REUSED',
      title: 'Other accounts may become vulnerable',
      description:
        'Someone who obtains one password may try it on email, shopping, financial, or social accounts where you used the same credentials.',
      severity: 'danger',
      chainLabel: 'Account takeover',
    },
    {
      stageLabel: 'IF FINANCIAL OR IDENTITY DATA IS MISUSED',
      title: 'Fraud or identity theft can follow',
      description:
        'Exposed card, bank, account, or identity information may be used for unauthorized transactions, impersonation, or attempts to open or recover accounts.',
      severity: 'danger',
      chainLabel: 'Financial or identity harm',
    },
  ],

  /* ---------------------------------------------------------------- Block 5 */
  windows: [
    {
      situation: 'You have not clicked through or entered any information',
      ignoreAnswer: 'Yes — leave the site',
      severity: 'info',
      whatToDo:
        'Go back, verify the address, and use another trusted route or wait for the site owner to fix the problem.',
    },
    {
      situation: 'The device date, time, or time zone is wrong',
      ignoreAnswer: 'Briefly, while correcting it',
      severity: 'caution',
      whatToDo: 'Correct the clock and reload. Do not bypass the certificate warning before testing again.',
    },
    {
      situation: 'Only one public website is affected',
      ignoreAnswer: 'Yes — leave and try later',
      severity: 'caution',
      whatToDo:
        'Use another source or contact the owner. Do not add a certificate exception for an ordinary public site.',
    },
    {
      situation: 'A login, payment, banking, email, tax, or medical page is affected',
      ignoreAnswer: 'No',
      severity: 'danger',
      whatToDo:
        'Enter nothing. Reach the organization through its official app, a saved bookmark, or an address you independently know is correct.',
    },
    {
      situation: 'The warning appears on public Wi-Fi',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Use the official network sign-in prompt. Disconnect if secure sites continue showing certificate warnings.',
    },
    {
      situation: 'Many unrelated secure sites are affected',
      ignoreAnswer: 'No',
      severity: 'warning',
      whatToDo:
        'Stop sensitive browsing and investigate the device, network, VPN, security software, or managed proxy.',
    },
    {
      situation: 'A known local device has a documented self-signed certificate',
      ignoreAnswer: 'Only after verification',
      severity: 'caution',
      whatToDo:
        'Confirm the exact local device, address, and certificate instructions before making a limited exception.',
    },
    {
      situation: 'You already submitted sensitive information',
      ignoreAnswer: 'No — act now',
      severity: 'danger',
      whatToDo:
        'Secure the affected accounts from a trusted connection and contact the relevant financial provider if card or bank information was involved.',
    },
  ],

  /* ---------------------------------------------------------------- Block 6 */
  actions: [
    {
      title: 'Step 1: Go back and save the error details',
      body:
        'Do not continue to the page. Open the warning’s details only to note the domain and error code, such as a date, name, or authority error. Do not accept a certificate or create an exception yet.',
    },
    {
      title: 'Step 2: Verify how you reached the site',
      body:
        'Check every part of the domain. If the link came from a message, ad, QR code, or search result, close it and use a bookmark, official app, statement, or address you already know.',
    },
    {
      title: 'Step 3: Check the device',
      body:
        'Correct the date, time, and time zone. Install legitimate operating-system and browser updates, restart the browser, and test again without bypassing the warning.',
    },
    {
      title: 'Step 4: Check the network',
      body:
        'Complete any legitimate Wi-Fi sign-in through the device’s network prompt. If the warning affects several sites, disconnect from unfamiliar Wi-Fi or VPN services and test on a trusted connection.',
    },
    {
      title: 'Step 5: Escalate certificate and filtering problems',
      body:
        'Contact the website owner when only that site fails. Contact your organization’s support team when a managed proxy or inspection system is involved. Do not install a root certificate unless an authorized administrator provides and verifies it.',
    },
    {
      title: 'Step 6: Respond if you submitted information',
      body:
        'Change exposed and reused passwords from a trusted connection, enable two-factor authentication, review account sessions and transactions, and contact the card issuer or bank through a verified number if financial information was entered.',
    },
  ],

  /* ---------------------------------------------------------------- Block 8 */
  flags: [
    {
      title: 'The page asks for a password, card number, or identity information',
      description:
        'Sensitive data should not be submitted while the browser cannot verify the website’s certificate.',
      severity: 'danger',
    },
    {
      title: 'The address is misspelled or unfamiliar',
      description:
        'Added words, substituted letters, unexpected subdomains, and unusual domain endings may indicate that you reached the wrong site.',
      severity: 'danger',
    },
    {
      title: 'The warning followed a link from an unexpected message',
      description:
        'Phishing messages often impersonate familiar companies and pressure recipients to sign in, pay, or confirm account information.',
      severity: 'danger',
    },
    {
      title: 'The warning appears across unrelated major websites',
      description:
        'This can point to interception by security software, a managed proxy, malware, or an untrusted network rather than a problem with each website.',
      severity: 'warning',
    },
    {
      title: 'The certificate name does not match the website address',
      description: 'A name mismatch means the certificate was not issued for the domain you requested.',
      severity: 'danger',
    },
    {
      title: 'The browser says the error cannot be bypassed',
      description:
        'Do not weaken browser security, alter certificate stores, or follow instructions from the warning page to force the connection.',
      severity: 'danger',
    },
    {
      title: 'You already entered sensitive information',
      description:
        'Secure the affected account and payment method rather than waiting to see whether unauthorized activity appears.',
      severity: 'danger',
    },
  ],

  /* ---------------------------------------------------------------- Block 10 */
  faqs: [
    {
      question: 'Does this warning mean someone is hacking me?',
      answer:
        'Not necessarily. An expired certificate, bad server setup, incorrect clock, captive portal, or approved network filter can cause it. The problem is that the browser cannot rule out interception or the wrong site.',
    },
    {
      question: 'Can I proceed if I only want to read the page?',
      answer:
        'Do not bypass the warning on an ordinary public site. Reading instead of signing in lowers what you intentionally submit, but it does not solve the failed identity check.',
    },
    {
      question: 'Can the wrong date or time really cause this error?',
      answer:
        'Yes. Certificates are valid for defined dates, so a device with an inaccurate clock may reject a legitimate certificate. Correct the date, time, and time zone, then reload.',
    },
    {
      question: 'Why does this happen on public Wi-Fi?',
      answer:
        'The hotspot may be trying to redirect you to a sign-in portal before normal internet access works. Use the device’s network sign-in prompt, confirm the hotspot name, and disconnect if certificate warnings continue.',
    },
    {
      question: 'Does Incognito or private browsing make the connection safe?',
      answer:
        'No. Private browsing changes how local history, cookies, or extensions are handled. It does not make an invalid certificate trustworthy.',
    },
    {
      question: 'Will a VPN make the warning safe to ignore?',
      answer:
        'No. A legitimate VPN may protect traffic to its own endpoint, but it cannot turn an invalid website certificate into a valid one. A misconfigured or untrusted VPN may also cause certificate warnings.',
    },
    {
      question: 'Why does the site work in another browser?',
      answer:
        'Browsers may use different certificate stores, policies, extensions, or cached information. One browser loading the page does not prove that the warning in the other browser is harmless.',
    },
    {
      question: 'Is an expired certificate proof that the site is malicious?',
      answer:
        'No. It may simply mean the owner failed to renew or install the certificate correctly. You should still leave rather than bypassing it because the browser can no longer validate the connection normally.',
    },
    {
      question: 'Can I ignore a self-signed certificate on my router or local server?',
      answer:
        'Only after confirming the exact device, local address, and certificate through trusted documentation or an administrator. Do not apply that reasoning to public websites.',
    },
    {
      question: 'What should I do if I already entered a password or card number?',
      answer:
        'Use a trusted connection to change the password and any reused passwords, enable two-factor authentication, and review account activity. Contact the card issuer or bank using a verified number if financial information was involved.',
    },
  ],

  /* ---------------------------------------------------------------- Block 11 */
  sources: [
    {
      publisher: 'Google Chrome Help',
      title: "Check if a site's connection is secure",
      url: 'https://support.google.com/chrome/answer/95617?hl=en',
      sourceType: 'manufacturer',
      notes:
        'Explains that a privacy warning can come from the site, network, or device, and advises against entering personal information when a connection is not private.',
    },
    {
      publisher: 'Google Chrome Help',
      title: 'Get help with common error messages in Chrome',
      url: 'https://support.google.com/chrome/answer/95669?hl=en',
      sourceType: 'manufacturer',
      notes:
        'Covers certificate error codes and troubleshooting for incorrect clocks, Wi-Fi portals, operating-system updates, HTTPS-scanning antivirus, and managed proxy interception.',
    },
    {
      publisher: 'Mozilla Support',
      title: 'Troubleshoot security error codes on secure websites',
      url: 'https://support.mozilla.org/en-US/kb/error-codes-secure-websites',
      sourceType: 'manufacturer',
      notes:
        'Explains certificate validation failures, one-site and multi-site causes, antivirus or network interception, HSTS restrictions, and why permanent exceptions should be limited to controlled internal networks.',
    },
    {
      publisher: 'Apple Support',
      title: "If you see a 'Not Secure' warning while browsing with Safari",
      url: 'https://support.apple.com/en-us/102279',
      sourceType: 'manufacturer',
      notes:
        'Advises never entering a password or credit card number on a site showing the warning and lists expired, illegitimate, unencrypted, and outdated-security connections as possible causes.',
    },
    {
      publisher: 'Federal Trade Commission',
      title: 'Are Public Wi-Fi Networks Safe? What You Need To Know',
      url: 'https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know',
      sourceType: 'government',
      notes:
        'Explains the role of encrypted website connections, recommends current browser and device software, and warns that an encrypted site can still be operated by scammers.',
    },
    {
      publisher: 'Federal Trade Commission',
      title: 'What To Do if You Were Scammed',
      url: 'https://consumer.ftc.gov/articles/what-do-if-you-were-scammed',
      sourceType: 'government',
      notes:
        'Supports changing compromised and reused passwords, enabling two-factor authentication, using account recovery, and promptly contacting financial providers when payment information or money is involved.',
    },
  ],

  /* ---------------------------------------------------------------- Block 7 */
  resources: [
    {
      title: 'Browser certificate error details',
      description:
        'The Advanced or certificate-details panel can show the affected domain and error code without requiring you to proceed to the website.',
      kind: 'guide',
      url: null,
      affiliate: false,
    },
    {
      title: 'Device date, time, and update settings',
      description:
        'Correct clock settings and current operating-system and browser updates resolve some device-side certificate failures.',
      kind: 'tool',
      url: null,
      affiliate: false,
    },
    {
      title: 'Website owner or organization support',
      description:
        'The site owner must repair public certificate problems, while an authorized administrator should handle managed proxies, internal certificates, and work or school devices.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
    {
      title: 'Account recovery and financial-provider support',
      description:
        'Use official account recovery, two-factor authentication, and the verified contact information for your bank or card issuer if sensitive information may have been exposed.',
      kind: 'service',
      url: null,
      affiliate: false,
    },
  ],
};
