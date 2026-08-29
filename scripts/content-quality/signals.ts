/**
 * First-pass style signals.
 *
 * None of this decides whether prose is good — a phrase list cannot tell
 * "by itself" used well from "by itself" used as filler. What it can do is
 * measure how far a page sits from the gold set on habits that are cheap to
 * count, so an obvious outlier is caught before an API call is spent on it.
 *
 * Every threshold is derived from the gold set at baseline time, not hardcoded.
 */
import type { ContentDocument } from './extract';
import { jaccard, normalizeTokens, round, sentences, wordCount } from './text';

/**
 * Constructions that mark generated prose. Presence is not the signal —
 * density is. The gold pages use several of these and are fine.
 */
export const AI_PHRASES = [
  'rather than',
  'what matters',
  'the key',
  'the key thing',
  'the point is',
  'the useful distinction',
  'by itself',
  'does not necessarily mean',
  'it is important to note',
  'it is important to remember',
  "it's worth noting",
  'it is worth noting',
  'in other words',
  'when it comes to',
  'this is where',
  'the bottom line',
  'depending on the situation',
  'there is no honest',
  'deserves diagnosis',
  'a different problem',
  'a different situation',
] as const;

/** `not X but Y` and its close relatives, which read as manufactured contrast. */
export const CONTRAST_PATTERNS: { name: string; pattern: RegExp }[] = [
  { name: 'not X but Y', pattern: /\bnot\s+(?:a|an|the)?\s*[\w\s-]{1,30}?\s+but\s+(?:a|an|the)?\s*\w+/gi },
  { name: 'X, not Y', pattern: /,\s*not\s+(?:a|an|the)?\s*\w+[\w\s-]{0,20}\.?$/gim },
  { name: 'does not mean', pattern: /\bdoes\s+not\s+mean\b/gi },
  { name: 'comes from X, not Y', pattern: /\bcomes?\s+from\s+[\w\s-]{2,30},\s*not\b/gi },
];

export const HEDGE_WORDS = [
  'may',
  'might',
  'could',
  'generally',
  'typically',
  'potentially',
  'usually',
  'often',
  'sometimes',
  'possibly',
  'in some cases',
  'can sometimes',
  'tends to',
  'is likely to',
] as const;

/** Abstract nouns that usually mean a plain verb was available. */
export const ABSTRACT_NOUNS = [
  'assessment',
  'consideration',
  'evaluation',
  'determination',
  'indication',
  'implementation',
  'utilization',
  'verification',
  'identification',
  'mitigation',
  'remediation',
  'optimization',
  'functionality',
] as const;

export interface PhraseHit {
  phrase: string;
  count: number;
}

export interface RepetitionCandidate {
  pathA: string;
  pathB: string;
  similarity: number;
  a: string;
  b: string;
}

export interface StyleStats {
  words: number;
  aiPhrasePer1000: number;
  aiPhraseHits: PhraseHit[];
  contrastPer1000: number;
  contrastHits: PhraseHit[];
  hedgePer1000: number;
  hedgeHits: PhraseHit[];
  abstractNounPer1000: number;
  abstractNounHits: PhraseHit[];
  meanSentenceWords: number;
  longSentenceShare: number;
  repeatedNgramCount: number;
  repeatedNgrams: PhraseHit[];
  nearDuplicateCount: number;
}

/** Numeric style metrics that get a gold-set range. */
export const STYLE_METRIC_KEYS = [
  'aiPhrasePer1000',
  'contrastPer1000',
  'hedgePer1000',
  'abstractNounPer1000',
  'meanSentenceWords',
  'longSentenceShare',
  'repeatedNgramCount',
  'nearDuplicateCount',
] as const satisfies readonly (keyof StyleStats)[];

export type StyleMetricKey = (typeof STYLE_METRIC_KEYS)[number];

function countPhrases(haystack: string, needles: readonly string[]): PhraseHit[] {
  const hits: PhraseHit[] = [];
  for (const needle of needles) {
    const pattern = new RegExp(`\\b${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const count = haystack.match(pattern)?.length ?? 0;
    if (count > 0) hits.push({ phrase: needle, count });
  }
  return hits.sort((a, b) => b.count - a.count);
}

function per1000(count: number, words: number): number {
  return words === 0 ? 0 : round((count / words) * 1000, 2);
}

/** Repeated 5-word sequences, a cheap proxy for copy-paste explanation. */
function repeatedNgrams(prose: string[], size = 5): PhraseHit[] {
  const seen = new Map<string, number>();
  for (const text of prose) {
    const tokens = normalizeTokens(text);
    for (let i = 0; i + size <= tokens.length; i += 1) {
      const gram = tokens.slice(i, i + size).join(' ');
      seen.set(gram, (seen.get(gram) ?? 0) + 1);
    }
  }
  return [...seen.entries()]
    .filter(([, count]) => count > 1)
    .map(([phrase, count]) => ({ phrase, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);
}

/**
 * Sentence pairs that say the same thing in different words at the string
 * level. Real semantic repetition is the judge's call; this only surfaces
 * candidates worth its attention.
 */
export function findRepetitionCandidates(doc: ContentDocument, threshold = 0.55): RepetitionCandidate[] {
  const units: { path: string; text: string; tokens: string[] }[] = [];
  for (const field of doc.fields) {
    for (const sentence of sentences(field.text)) {
      const tokens = normalizeTokens(sentence).filter((t) => t.length > 3);
      if (tokens.length >= 6) units.push({ path: field.path, text: sentence, tokens });
    }
  }

  const candidates: RepetitionCandidate[] = [];
  for (let i = 0; i < units.length; i += 1) {
    for (let j = i + 1; j < units.length; j += 1) {
      const a = units[i]!;
      const b = units[j]!;
      const similarity = jaccard(a.tokens, b.tokens);
      if (similarity >= threshold) {
        candidates.push({ pathA: a.path, pathB: b.path, similarity: round(similarity, 2), a: a.text, b: b.text });
      }
    }
  }
  return candidates.sort((x, y) => y.similarity - x.similarity).slice(0, 15);
}

export function measureStyle(doc: ContentDocument): StyleStats {
  const prose = doc.fields.map((f) => f.text);
  const joined = prose.join('\n');
  const words = wordCount(joined);

  const allSentences = prose.flatMap((text) => sentences(text));
  const sentenceLengths = allSentences.map((s) => wordCount(s));
  const longSentences = sentenceLengths.filter((n) => n > 30).length;

  const aiPhraseHits = countPhrases(joined, AI_PHRASES);
  const hedgeHits = countPhrases(joined, HEDGE_WORDS);
  const abstractNounHits = countPhrases(joined, ABSTRACT_NOUNS);

  const contrastHits: PhraseHit[] = [];
  for (const { name, pattern } of CONTRAST_PATTERNS) {
    const count = joined.match(pattern)?.length ?? 0;
    if (count > 0) contrastHits.push({ phrase: name, count });
  }

  const sum = (hits: PhraseHit[]) => hits.reduce((total, hit) => total + hit.count, 0);
  const ngrams = repeatedNgrams(prose);

  return {
    words,
    aiPhrasePer1000: per1000(sum(aiPhraseHits), words),
    aiPhraseHits,
    contrastPer1000: per1000(sum(contrastHits), words),
    contrastHits,
    hedgePer1000: per1000(sum(hedgeHits), words),
    hedgeHits,
    abstractNounPer1000: per1000(sum(abstractNounHits), words),
    abstractNounHits,
    meanSentenceWords: round(
      sentenceLengths.length === 0 ? 0 : sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length,
      1,
    ),
    longSentenceShare: round(sentenceLengths.length === 0 ? 0 : longSentences / sentenceLengths.length, 3),
    repeatedNgramCount: ngrams.length,
    repeatedNgrams: ngrams,
    nearDuplicateCount: findRepetitionCandidates(doc).length,
  };
}
