import type { Pairing } from '../types';

/**
 * Dish Soap in Pressure Washer.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const dishSoapInPressureWasher: Pairing = {
  subjectSlug: 'dish-soap',
  subjectName: 'Dish Soap',
  subjectKind: 'Detergent',
  subjectNote: 'Liquid detergent for hand-washing dishes',

  relation: 'in',

  targetSlug: 'pressure-washer',
  targetName: 'Pressure Washer',
  targetKind: 'Equipment',
  targetNote: 'High-pressure outdoor cleaning machine',

  eyebrow: 'Outdoor Cleaning · Detergents',
  h1: 'Can I Use Dish Soap in a Pressure Washer?',
  seoTitle: 'Dish Soap in a Pressure Washer: Is It Safe? | Can I Use It With',
  metaDescription:
    'No. Use pressure-washer detergent approved by your manual; dish soap can clog the chemical injector and may damage pump components or O-rings.',

  verdict: 'no',
  shortAnswer:
    'No, unless your model’s manual specifically allows it. Do not put Dawn or another dish soap in the detergent tank or siphon line when the manual calls for pressure-washer detergent. Use an approved product, follow its dilution directions, and flush the detergent system afterward. Dish soap can be too thick for the chemical injector and may damage components in some washers.',

  mainRisk: 'Injector clogging',
  damages: 'Injector and pump',
  alternative: 'Pressure-washer detergent',

  conditionsOk: [
    'Use a detergent labeled for pressure washers and permitted by your model’s manual.',
    'Mix the detergent only as its label and the washer manual direct.',
    'Apply detergent through the soap nozzle or low-pressure setting specified for your machine.',
    'Flush the detergent tank and chemical path with clean water after use as the manual directs.',
  ],
  conditionsNever: [
    'Do not put dish soap in an onboard tank, siphon tube, or injector when the manual specifies pressure-washer detergent.',
    'Do not assume diluting dish soap makes it an approved cleaner.',
    'Do not apply detergent through a high-pressure nozzle when the manual requires the soap setting.',
    'Do not leave detergent sitting in the tank or chemical line after the job.',
    'Do not keep spraying if detergent stops drawing; shut down and follow the manual’s cleaning procedure.',
  ],

  mechanisms: [
    {
      title: 'Thick Soap Blocks Flow',
      body: 'The soap setting uses suction to pull detergent through a narrow pickup path. Dish soap can be thicker than pressure-washer detergent, clogging the nozzle or chemical injector and stopping detergent flow.',
    },
    {
      title: 'Material Compatibility Varies',
      body: 'Detergent routing differs by model. An unapproved cleaner may reach O-rings or pump components, and some manufacturer manuals specifically warn that dish soap can damage those parts.',
    },
  ],

  calloutLabel: 'The Generic Soap Assumption',
  calloutBody: [
    'Dish soap and pressure-washer detergent are both liquid cleaners, so the detergent tank can look like a generic soap dispenser. It is a metered chemical system with a narrow pickup path, and the washer’s manual controls which cleaners belong there.',
    'A downstream injector adds detergent after the pump, but the soap still passes through the pickup tube, metering hardware, and injector. Other designs expose more components. Check the manual for the exact washer rather than treating every detergent system the same.',
  ],

  sources: [
    {
      publisher: 'Snow Joe',
      title: '14.9A Electric Pressure Washer Operator’s Manual, Model SPX3550',
      url: 'https://files.snowjoe.com/product-manuals/SPX3550_MANUAL_M_06272023.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'SIMPSON',
      title: 'Electric Pressure Washer Operator’s Manual, Part No. 7111613 Rev. 4',
      url: 'https://simpsoncleaning.com/wp-content/uploads/CM60976-Pressure-Washer-Manual-PN-7111613-Rev-4.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'VEVOR',
      title: 'VEVOR Electric Pressure Washer, 2150 PSI, Max. 1.8 GPM, 1800W Power Washer Manual',
      url: 'https://www.vevor.com/diy-ideas/product/vevor-electric-pressure-washer-2150-psi-max-1-8-gpm-1800w-power-washer-manual/',
      kind: 'manufacturer',
    },
    {
      publisher: 'AR Blue Clean North America',
      title: 'AR116 Electric Pressure Washer Operating Instructions and Parts List',
      url: 'https://images.thdstatic.com/catalog/pdfImages/e5/e5d676b7-d168-4598-a70c-a39f108bca69.pdf',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-04T00:00:00.000Z'),
  reviewScope:
    'Reviewed detergent compatibility, injector clogging, component warnings, soap-nozzle use, and flushing steps in four pressure-washer manufacturer manuals.',
};
