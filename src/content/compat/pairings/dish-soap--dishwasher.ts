import type { Pairing } from '../types';

/**
 * Dish Soap in Dishwasher.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const dishSoapInDishwasher: Pairing = {
  subjectSlug: 'dish-soap',
  subjectName: 'Dish Soap',
  subjectKind: 'Cleaner',
  subjectNote: 'Hand-washing cleaner for dishes',

  relation: 'in',

  targetSlug: 'dishwasher',
  targetName: 'Dishwasher',
  targetKind: 'Appliance',
  targetNote: 'Machine that washes dishes',

  eyebrow: 'Kitchen · Soap & Detergent',
  h1: 'Can I Use Dish Soap in a Dishwasher?',
  seoTitle: 'Dish Soap in a Dishwasher: Safe or Not? | Can I Use It With',
  metaDescription:
    'No. Dish soap can create excess foam, leak around the door, reduce cleaning, and leave residue. Use automatic dishwasher detergent instead.',

  verdict: 'no',
  shortAnswer:
    'No. Put only detergent labeled for automatic dishwashers in the machine. If dish soap is already inside, cancel and drain the cycle, remove and rinse the dishes, and clear the suds using your model’s instructions before running it again. Hand dish soap can foam out around the door and leave a poorly rinsed load.',

  mainRisk: 'Suds overflow',
  damages: 'Dishwasher and flooring',
  alternative: 'Automatic dishwasher detergent',

  conditionsOk: [
    'Use powder, gel, tablets, or pods only when the label specifically says they are for automatic dishwashers.',
    'If dishes were hand-washed or sprayed with dish soap, rinse off the soap before loading them.',
    'If the cycle has not started, remove the dish soap from the dispenser or tub and wipe away the residue.',
    'If the cycle started, cancel and drain it, remove and rinse the dishes, clean up any overflow, and follow your model’s suds-removal procedure.',
  ],
  conditionsNever: [
    'Never substitute hand dish soap, even in a small amount.',
    'Never pour it into the detergent dispenser, prewash compartment, or bottom of the tub.',
    'Never load dishes still coated with concentrated spray dish soap.',
    'Never add automatic dishwasher detergent and continue the load while dish-soap suds remain.',
    'Never use a homemade dishwasher mixture containing dish soap; hand-wash the load if you are out of the correct detergent.',
  ],

  mechanisms: [
    {
      title: 'Foam fills the tub',
      body: 'Hand dish soap produces excessive suds in an automatic dishwasher. Circulating wash water spreads the foam throughout the machine.',
    },
    {
      title: 'Suds force water out',
      body: 'The foam can push water past the dishwasher door. Escaping water may soak the floor or nearby cabinets.',
    },
    {
      title: 'Cleaning performance drops',
      body: 'Automatic dishwasher detergents are made for machine washing, often using enzymes to break down starch and protein. Dish soap can leave soapy residue on the load and inside the tub.',
    },
  ],

  calloutLabel: 'Similar bottles, different formulas',
  calloutBody: [
    'Both products clean dishes and may come in liquid form, so their labels can look interchangeable. Liquid automatic dishwasher detergent is made for the machine; ordinary dish soap is intended for hand washing.',
    'A dishwasher’s circulating spray turns hand dish soap into far more foam than the machine is designed to handle. The cycle may leak, clean poorly, or leave soap behind even if it appears to finish normally.',
  ],

  sources: [
    {
      publisher: 'Whirlpool',
      title: 'Can You Use Dish Soap in the Dishwasher?',
      url: 'https://www.whirlpool.com/blog/kitchen/can-you-put-dish-soap-in-dishwasher.html',
      kind: 'manufacturer',
    },
    {
      publisher: 'Samsung',
      title: 'Samsung Dishwasher Is Leaking or Has a Leakage Error Code',
      url: 'https://www.samsung.com/us/support/troubleshoot/TSG10010593/',
      kind: 'manufacturer',
    },
    {
      publisher: 'Bosch',
      title: 'Use and Care Manual SHP65CM5N',
      url: 'https://media3.bosch-home.com/Documents/9001638568_B.pdf',
      kind: 'manufacturer',
    },
    {
      publisher: 'KitchenAid',
      title: 'Removing Suds, Bubbles or Soap Foam from Dishwasher',
      url: 'https://producthelp.kitchenaid.com/Dishwashers/Product_Info/Dishwasher_Product_Assistance/Removing_Suds,_Bubbles_or_Soap_Foam_from_Dishwasher',
      kind: 'manufacturer',
    },
  ],

  reviewedAt: new Date('2026-09-02T00:00:00.000Z'),
  reviewScope:
    'Reviewed against manufacturer guidance on detergent compatibility, excessive suds, leaks, appliance damage, cleaning performance, residue, and accidental-use cleanup.',
};
