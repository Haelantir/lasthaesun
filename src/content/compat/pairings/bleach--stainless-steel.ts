import type { Pairing } from '../types';

/**
 * Bleach on Stainless Steel.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const bleachOnStainlessSteel: Pairing = {
  subjectSlug: 'bleach',
  subjectName: 'Bleach',
  subjectKind: 'Chemical',
  subjectNote: 'Chlorine-based household cleaner and disinfectant',

  relation: 'on',

  targetSlug: 'stainless-steel',
  targetName: 'Stainless Steel',
  targetKind: 'Material',
  targetNote: 'Chromium-bearing corrosion-resistant steel alloy',

  eyebrow: 'Cleaning · Metals & Finishes',
  h1: 'Can I Use Bleach on Stainless Steel?',
  seoTitle: 'Bleach on Stainless Steel: Safe or Damaging? | Can I Use It With',
  metaDescription:
    'Avoid it unless the product manual specifically allows it. Bleach can discolor stainless steel and cause permanent pitting; rinse accidental contact immediately.',

  verdict: 'risky',
  shortAnswer:
    'Usually no. Bleach can attack stainless steel and cause discoloration or permanent pitting, especially when it is strong, warm, left sitting, or trapped in seams. If bleach has already splashed onto the surface, rinse it off immediately with clean water and dry it; use it deliberately only if the exact product manual provides a bleach procedure.',

  mainRisk: 'Pitting corrosion',
  damages: 'Stainless steel surface',
  alternative: 'Mild soap and water',

  conditionsOk: [
    'If bleach splashes onto stainless steel, rinse it off at once with plenty of clean water and dry the surface.',
    'Use bleach only when the exact product manual expressly permits it and provides the dilution, contact, and rinsing method.',
    'For routine sink cleaning, use mild dish soap with a soft sponge, then rinse and dry.',
    'Clean appliance doors and cookware with a non-chlorine cleaner approved by the product manufacturer.',
  ],
  conditionsNever: [
    'Never leave bleach standing in a stainless steel sink or trapped around drains, seams, welds, or under a mat.',
    'Never use bleach on a stainless steel refrigerator door or appliance exterior unless that model’s manual expressly allows it.',
    'Never clean stainless steel cookware with bleach or a detergent containing chlorine bleach unless the cookware maker says it is compatible.',
    'Never put bleach on a hot stainless steel surface or heat a bleach solution in stainless cookware.',
    'Never assume one stainless grade or finish is bleach-safe because another stainless product tolerated it.',
  ],

  mechanisms: [
    {
      title: 'Protective film breaks',
      body: 'Chromium in stainless steel rapidly forms a thin oxide film that provides corrosion resistance. Chlorine compounds from bleach can attack that protection and expose small areas of metal.',
    },
    {
      title: 'Pits grow locally',
      body: 'Corrosion can concentrate at a tiny break instead of spreading evenly, leaving permanent pits while most of the surface still looks intact. Longer contact and residue held in crevices give the attack more opportunity to continue.',
    },
    {
      title: 'Finishes can discolor',
      body: 'Refrigerator doors and other appliance panels may use specialty stainless finishes with their own care limits. Bleach can dull or discolor the exterior without producing an ordinary rust patch.',
    },
  ],

  calloutLabel: 'Why Stainless Still Corrodes',
  calloutBody: [
    'The name stainless makes the surface sound chemically immune. Its corrosion resistance comes from a thin chromium oxide film, and chlorine compounds can damage that film. Bleach strength, temperature, contact time, and the condition of the steel all affect the outcome.',
    'An accidental splash on a sink is a rinse-now problem, not proof that bleach is a safe cleaner. Refrigerator exteriors can discolor, and cookware manuals may ban bleach-containing detergents. Use the care instructions for the exact product.',
  ],

  sources: [
    {
      publisher: 'National Institutes of Health, Office of Research Facilities',
      title: 'Stainless Steel Trap Corrosion',
      url: 'https://orf.od.nih.gov/TechnicalResources/Documents/DTR%20White%20Papers/FinalTrapCorrosionWhitePaperdocsanitized_508.pdf',
      kind: 'government',
    },
    {
      publisher: 'Kraus USA',
      title: 'Care & Cleaning Guide',
      url: 'https://images.thdstatic.com/catalog/pdfImages/14/1499fe37-1367-559b-9ee1-5466a1ca52a9.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'Sub-Zero Group, Inc.',
      title: 'Sub-Zero, Wolf, and Cove Stainless Steel and Platinum Cleaning',
      url: 'https://www.subzero-wolf.com/assistance/answers/multi-brand/clean-stainless-steel-and-platinum',
      kind: 'manufacturer',
    },
    {
      publisher: 'All-Clad',
      title: 'How to Use, Clean, and Care for Your All-Clad',
      url: 'https://www.all-clad.com/care-use',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Compatibility was checked against NIH corrosion guidance and sink, refrigerator-exterior, and cookware care instructions from Kraus, Sub-Zero, and All-Clad.',
};
