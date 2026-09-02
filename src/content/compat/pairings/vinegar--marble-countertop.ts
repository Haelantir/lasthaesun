import type { Pairing } from '../types';

/**
 * Vinegar on Marble Countertop.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const vinegarOnMarbleCountertop: Pairing = {
  subjectSlug: 'vinegar',
  subjectName: 'Vinegar',
  subjectKind: 'Liquid',
  subjectNote: 'Acidic cooking and cleaning liquid',

  relation: 'on',

  targetSlug: 'marble-countertop',
  targetName: 'Marble Countertop',
  targetKind: 'Surface',
  targetNote: 'Calcite-based natural stone work surface',

  eyebrow: 'Kitchen · Countertop Care',
  h1: 'Can I Use Vinegar on a Marble Countertop?',
  seoTitle: 'Is Vinegar Safe on Marble Countertops? | Can I Use It With',
  metaDescription:
    'No. Vinegar can etch marble even when diluted or the stone is sealed. Use a pH-neutral stone cleaner and blot accidental spills promptly.',

  verdict: 'no',
  shortAnswer:
    'No. Do not use vinegar, diluted vinegar, or vinegar-based sprays to clean a marble countertop, even if it is sealed. If vinegar spills once, blot it promptly and clean the area with a pH-neutral stone cleaner; vinegar can etch the marble itself and leave a dull mark.',

  mainRisk: 'Acid etching',
  damages: 'The marble finish',
  alternative: 'pH-neutral stone cleaner',

  conditionsOk: [
    'Use a pH-neutral cleaner labeled for natural stone for routine care.',
    'If vinegar spills once, blot it promptly with a clean dry cloth, then use a neutral stone cleaner.',
    'Keep vinegar containers where drips and overspray cannot reach the marble.',
  ],
  conditionsNever: [
    'Do not use straight vinegar as an everyday or deep cleaner.',
    'Do not spray diluted vinegar or a vinegar-based multipurpose cleaner on the countertop.',
    'Do not assume a penetrating sealer makes marble resistant to acid.',
    'Do not use vinegar on grout or mineral deposits where runoff can reach the marble.',
    'Do not leave vinegar, pickling liquid, or vinegar-based food spills sitting on the surface.',
  ],

  mechanisms: [
    {
      title: 'Acid changes calcite',
      body: 'Marble is mainly calcite, a calcium carbonate mineral. Acetic acid in vinegar reacts with the exposed calcite and changes the stone surface.',
    },
    {
      title: 'Polish becomes uneven',
      body: 'Etching changes how the countertop reflects light. On polished marble, it usually appears as a dull spot, and ordinary cleaning will not restore the finish.',
    },
    {
      title: 'Sealer cannot stop etching',
      body: 'Penetrating sealers provide stain protection and can give you more time to remove a spill. They leave the surface exposed, so they cannot stop the acid reaction.',
    },
  ],

  calloutLabel: 'The Granite Mix-Up',
  calloutBody: [
    'Advice for granite does not carry over cleanly to marble. Marble contains calcite, so vinegar can react with the stone surface itself. Marble therefore needs stricter acid avoidance.',
    'An accidental splash calls for prompt cleanup. It does not make vinegar suitable for routine wiping; regular use repeatedly exposes the countertop to acid.',
  ],

  sources: [
    {
      publisher: 'Boulder County',
      title: 'Safer Cleaning Products',
      url: 'https://bouldercounty.gov/environment/hazardous-waste/safer-cleaning-products/',
      kind: 'government',
    },
    {
      publisher: 'National Park Service',
      title: 'Preservation Brief 1: Assessing Cleaning and Water-Repellent Treatments for Historic Masonry Buildings',
      url: 'https://www.nps.gov/orgs/1739/upload/preservation-brief-01-cleaning-masonry.pdf',
      kind: 'government',
    },
    {
      publisher: 'LATICRETE International',
      title: 'Stone Cleaning Tips',
      url: 'https://se.laticrete.com/our-products/tile-stone-and-surface-care/resources/care-and-maintenance/stone-cleaning-tips',
      kind: 'manufacturer',
    },
    {
      publisher: 'Daltile',
      title: 'Caring for & Maintaining Natural Stone',
      url: 'https://www.daltile.com/how-to/how-to-care-for-and-maintain-tile/how-to-care-for-and-maintain-natural-stone',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed vinegar use on marble, accidental spills, routine cleaning, acid etching, and sealer limits using government and stone-care manufacturer guidance.',
};
