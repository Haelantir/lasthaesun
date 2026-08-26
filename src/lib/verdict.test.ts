import { describe, expect, it } from 'vitest';

import {
  VERDICT_GROUP_HEADING,
  VERDICT_ORDER,
  difficultyPresentation,
  riskPresentation,
  severityGlyph,
  severityTone,
  urgencyPresentation,
  verdictPresentation,
  type SeverityLevel,
  type VerdictLevel,
} from './verdict';

const ALL_VERDICTS: VerdictLevel[] = ['safe_to_ignore', 'can_wait', 'probably_not', 'do_not_ignore'];
const ALL_SEVERITIES: SeverityLevel[] = ['info', 'caution', 'warning', 'danger'];

describe('verdict presentation', () => {
  it('maps the seeded verdict to the label the spec requires', () => {
    const v = verdictPresentation('probably_not');
    expect(v.label).toBe('PROBABLY NOT');
    expect(v.tone).toBe('warning');
    expect(v.emoji).toBe('🟠');
  });

  it('gives every verdict a non-empty text label', () => {
    // The accessibility guarantee: meaning never depends on colour, so a label
    // must always exist to carry it.
    for (const verdict of ALL_VERDICTS) {
      expect(verdictPresentation(verdict).label.trim().length).toBeGreaterThan(0);
      expect(verdictPresentation(verdict).gloss.trim().length).toBeGreaterThan(0);
    }
  });

  it('gives each verdict a distinct label, tone and glyph', () => {
    const labels = new Set(ALL_VERDICTS.map((v) => verdictPresentation(v).label));
    const tones = new Set(ALL_VERDICTS.map((v) => verdictPresentation(v).tone));
    const glyphs = new Set(ALL_VERDICTS.map((v) => verdictPresentation(v).glyph));

    expect(labels.size).toBe(ALL_VERDICTS.length);
    expect(tones.size).toBe(ALL_VERDICTS.length);
    // Distinct SHAPES, so the icons still differentiate in greyscale.
    expect(glyphs.size).toBe(ALL_VERDICTS.length);
  });

  it('orders verdicts most urgent first and heads every group', () => {
    expect(VERDICT_ORDER[0]).toBe('do_not_ignore');
    expect(VERDICT_ORDER.at(-1)).toBe('safe_to_ignore');
    expect(new Set(VERDICT_ORDER).size).toBe(ALL_VERDICTS.length);
    for (const verdict of ALL_VERDICTS) {
      expect(VERDICT_GROUP_HEADING[verdict]).toBeTruthy();
    }
  });
});

describe('supporting metrics', () => {
  it('labels the seeded metric values as the spec requires', () => {
    expect(urgencyPresentation('high').label).toBe('High');
    expect(riskPresentation('high').label).toBe('Can become serious');
    expect(difficultyPresentation('easy').label).toBe('Usually easy');
  });

  it('never returns a bare colour or an empty label', () => {
    const all = [
      urgencyPresentation('low'),
      urgencyPresentation('critical'),
      riskPresentation('severe'),
      difficultyPresentation('professional'),
    ];
    for (const presentation of all) {
      expect(presentation.label).not.toMatch(/^#|rgb|red|green|orange|yellow$/i);
      expect(presentation.label.trim()).not.toBe('');
    }
  });
});

describe('severity mapping', () => {
  it('maps every severity to a tone and a glyph', () => {
    for (const severity of ALL_SEVERITIES) {
      expect(severityTone(severity)).toBeTruthy();
      expect(severityGlyph(severity)).toBeTruthy();
    }
  });

  it('escalates danger to the danger tone', () => {
    expect(severityTone('danger')).toBe('danger');
    expect(severityGlyph('danger')).toBe('stop');
  });
});
