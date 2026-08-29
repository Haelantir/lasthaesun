/**
 * Raw document -> `ProblemSeed`, with every rule the repository already
 * enforces checked before anything is written.
 *
 * The checks come from three places that already exist, so the importer cannot
 * drift from them: the Drizzle column definitions (enum values and varchar
 * lengths), the publish gate in `src/lib/content/schema.ts`, and the editorial
 * rules asserted in `src/content/content.test.ts`. Failing here is much cheaper
 * than failing in `npm test`, and far cheaper than failing in a production seed.
 */
import {
  difficultyLevel,
  relationshipType,
  resourceKind,
  riskLevel,
  severityLevel,
  sourceType,
  urgencyLevel,
  verdictLevel,
} from '../../src/lib/db/schema';
import { canonicalPathSchema } from '../../src/lib/content/schema';
import type { ProblemSeed } from '../../src/content/types';
import type { RawDocument, RawItem } from './parser';
import type { FieldName } from './spec';
import { REQUIRED_FIELDS, REQUIRED_ITEM_KEYS } from './spec';

export interface ImportError {
  /** Input field this is about, e.g. "SOURCES[2].url". */
  field: string;
  message: string;
  line?: number;
}

export interface BuildResult {
  seed: ProblemSeed | null;
  errors: ImportError[];
}

/** Column lengths from `src/lib/db/schema.ts`. Exceeding one fails the seed. */
const LIMITS = {
  slug: 128,
  canonicalPath: 512,
  name: 160,
  eyebrow: 120,
  h1: 200,
  seoTitle: 256,
  metaDescription: 512,
  canIUseItLabel: 120,
  canIUseItQuestion: 120,
  redFlagsHeading: 200,
  whyItMattersHeading: 200,
  reviewScope: 200,
  scenarioLabel: 200,
  scenarioShortDescription: 300,
  scenarioResultHeadline: 160,
  scenarioRecommendedAction: 300,
  consequenceStageLabel: 120,
  consequenceTitle: 200,
  consequenceChainLabel: 80,
  windowSituation: 200,
  windowIgnoreAnswer: 80,
  windowWhatToDo: 300,
  actionTitle: 200,
  actionDestinationLabel: 200,
  flagTitle: 200,
  flagDescription: 400,
  faqQuestion: 300,
  sourcePublisher: 200,
  sourceTitle: 300,
  sourceUrl: 1024,
  sourceNotes: 400,
  relatedAnchorText: 200,
  resourceTitle: 200,
  resourceDescription: 500,
  resourceUrl: 1024,
} as const;

/** Editorial caps asserted by content.test.ts — tighter than the columns. */
const SEO_TITLE_MAX = 75;
const META_DESCRIPTION_MAX = 170;

/** content.test.ts: no invented distance or duration anywhere in free text. */
const DISTANCE_PATTERN = /\b\d+(\.\d+)?\s*(miles|mile|km|kilometres|kilometers|hours|hour|minutes|mins)\b/i;
/** content.test.ts: reviewScope may not smuggle in a fabricated credential. */
const CREDENTIAL_PATTERN = /reviewed by|ASE-certified|\bDr\.|technician\b/i;
const BAD_ANCHOR_PATTERN = /click here|read more|learn more/;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const ENUMS = {
  verdict: verdictLevel.enumValues,
  urgency: urgencyLevel.enumValues,
  safetyRisk: riskLevel.enumValues,
  fixDifficulty: difficultyLevel.enumValues,
  severity: severityLevel.enumValues,
  sourceType: sourceType.enumValues,
  resourceKind: resourceKind.enumValues,
  relationshipType: relationshipType.enumValues,
} as const;

class Collector {
  readonly errors: ImportError[] = [];

  add(field: string, message: string, line?: number): void {
    this.errors.push(line === undefined ? { field, message } : { field, message, line });
  }

  /** Returns the value when it is one of `allowed`, otherwise records an error. */
  enum<T extends string>(field: string, value: string | undefined, allowed: readonly T[], line?: number): T | undefined {
    if (value === undefined) return undefined;
    if ((allowed as readonly string[]).includes(value)) return value as T;
    this.add(field, `"${value}" is not valid here. Expected one of: ${allowed.join(', ')}`, line);
    return undefined;
  }

  max(field: string, value: string | undefined, limit: number, line?: number): void {
    if (value !== undefined && value.length > limit) {
      this.add(field, `is ${value.length} characters; the limit is ${limit}`, line);
    }
  }

  noInventedFigure(field: string, value: string | undefined, line?: number): void {
    if (value === undefined) return;
    const match = DISTANCE_PATTERN.exec(value);
    if (match) {
      this.add(
        field,
        `contains "${match[0]}". This project does not print distance or duration figures in reader-facing prose — write it without the number.`,
        line,
      );
    }
  }
}

const scalar = (doc: RawDocument, name: FieldName): string | undefined => doc.scalars.get(name)?.value;
const scalarLine = (doc: RawDocument, name: FieldName): number | undefined => doc.scalars.get(name)?.line;
const items = (doc: RawDocument, name: FieldName): RawItem[] => doc.lists.get(name) ?? [];

function itemValue(item: RawItem, key: string): string | undefined {
  return item.values.get(key);
}

/** Parses `null`, an empty value or a URL. Anything else is an error. */
function parseUrl(collector: Collector, field: string, raw: string | undefined, line?: number): string | null {
  if (raw === undefined || raw === '' || raw.toLowerCase() === 'null' || raw.toLowerCase() === 'none') {
    return null;
  }
  if (!/^https:\/\/\S+$/.test(raw)) {
    collector.add(field, `"${raw}" is not an https URL. Use a real URL, or null when none was verified.`, line);
    return null;
  }
  if (/example\.(com|org|test)/i.test(raw)) {
    collector.add(field, 'points at example.com. A placeholder URL is worse than none — use null.', line);
    return null;
  }
  return raw;
}

function parseBoolean(collector: Collector, field: string, raw: string | undefined, line?: number): boolean | undefined {
  if (raw === undefined) return undefined;
  const value = raw.trim().toLowerCase();
  if (value === 'true' || value === 'yes') return true;
  if (value === 'false' || value === 'no') return false;
  collector.add(field, `"${raw}" is not true or false`, line);
  return undefined;
}

function parseDate(collector: Collector, field: string, raw: string | undefined, line?: number): Date | undefined {
  if (raw === undefined) return undefined;
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `${raw}T00:00:00Z` : raw;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    collector.add(field, `"${raw}" is not a date the importer can read. Use YYYY-MM-DD.`, line);
    return undefined;
  }
  return date;
}

export function buildSeed(doc: RawDocument): BuildResult {
  const c = new Collector();
  for (const issue of doc.issues) c.add('(format)', issue.message, issue.line);

  for (const field of REQUIRED_FIELDS) {
    const present =
      doc.scalars.has(field) || (doc.lists.get(field)?.length ?? 0) > 0 || (doc.bareLists.get(field)?.values.length ?? 0) > 0;
    if (!present) c.add(field, 'is required and missing (or empty)');
  }

  for (const [field, required] of Object.entries(REQUIRED_ITEM_KEYS) as [FieldName, readonly string[]][]) {
    items(doc, field).forEach((item, index) => {
      for (const key of required) {
        if (!item.values.has(key)) c.add(`${field}[${index}].${key}`, 'is required on every item', item.line);
      }
    });
  }

  const slug = scalar(doc, 'SLUG');
  const canonicalPath = scalar(doc, 'CANONICAL_PATH');

  if (slug !== undefined && !SLUG_PATTERN.test(slug)) {
    c.add('SLUG', `"${slug}" must be lower-case words joined by single hyphens`, scalarLine(doc, 'SLUG'));
  }
  if (canonicalPath !== undefined) {
    if (!canonicalPathSchema.safeParse(canonicalPath).success) {
      c.add(
        'CANONICAL_PATH',
        `"${canonicalPath}" must be lower-case, slash-delimited and end in a slash, e.g. /home/safety/alarms/chirping-smoke-alarm/`,
        scalarLine(doc, 'CANONICAL_PATH'),
      );
    } else if (slug !== undefined && !canonicalPath.endsWith(`/${slug}/`)) {
      c.add('CANONICAL_PATH', `must end with the slug — expected it to end "/${slug}/"`, scalarLine(doc, 'CANONICAL_PATH'));
    }
  }

  const seoTitle = scalar(doc, 'SEO_TITLE');
  const h1 = scalar(doc, 'H1');
  if (seoTitle !== undefined && h1 !== undefined && seoTitle === h1) {
    c.add('SEO_TITLE', 'is identical to H1. They are deliberately different on this site.', scalarLine(doc, 'SEO_TITLE'));
  }
  c.max('SEO_TITLE', seoTitle, SEO_TITLE_MAX, scalarLine(doc, 'SEO_TITLE'));
  c.max('META_DESCRIPTION', scalar(doc, 'META_DESCRIPTION'), META_DESCRIPTION_MAX, scalarLine(doc, 'META_DESCRIPTION'));

  for (const [field, key] of [
    ['SLUG', 'slug'],
    ['CANONICAL_PATH', 'canonicalPath'],
    ['NAME', 'name'],
    ['EYEBROW', 'eyebrow'],
    ['H1', 'h1'],
    ['CAN_I_USE_IT_LABEL', 'canIUseItLabel'],
    ['CAN_I_USE_IT_QUESTION', 'canIUseItQuestion'],
    ['RED_FLAGS_HEADING', 'redFlagsHeading'],
    ['WHY_IT_MATTERS_HEADING', 'whyItMattersHeading'],
    ['REVIEW_SCOPE', 'reviewScope'],
  ] as const) {
    c.max(field, scalar(doc, field), LIMITS[key], scalarLine(doc, field));
  }

  const reviewScope = scalar(doc, 'REVIEW_SCOPE');
  if (reviewScope !== undefined && CREDENTIAL_PATTERN.test(reviewScope)) {
    c.add('REVIEW_SCOPE', 'names a reviewer credential. This site does not claim one.', scalarLine(doc, 'REVIEW_SCOPE'));
  }

  c.noInventedFigure('SHORT_ANSWER', scalar(doc, 'SHORT_ANSWER'), scalarLine(doc, 'SHORT_ANSWER'));
  c.noInventedFigure('WHY_IT_MATTERS', scalar(doc, 'WHY_IT_MATTERS'), scalarLine(doc, 'WHY_IT_MATTERS'));

  const verdict = c.enum('VERDICT', scalar(doc, 'VERDICT'), ENUMS.verdict, scalarLine(doc, 'VERDICT'));
  const urgency = c.enum('URGENCY', scalar(doc, 'URGENCY'), ENUMS.urgency, scalarLine(doc, 'URGENCY'));
  const safetyRisk = c.enum('SAFETY_RISK', scalar(doc, 'SAFETY_RISK'), ENUMS.safetyRisk, scalarLine(doc, 'SAFETY_RISK'));
  const fixDifficulty = c.enum('FIX_DIFFICULTY', scalar(doc, 'FIX_DIFFICULTY'), ENUMS.fixDifficulty, scalarLine(doc, 'FIX_DIFFICULTY'));
  const status = c.enum('STATUS', scalar(doc, 'STATUS'), ['draft', 'reviewed', 'published', 'archived'] as const, scalarLine(doc, 'STATUS'));
  const indexable = parseBoolean(c, 'INDEXABLE', scalar(doc, 'INDEXABLE'), scalarLine(doc, 'INDEXABLE'));
  const lastReviewedAt = parseDate(c, 'LAST_REVIEWED', scalar(doc, 'LAST_REVIEWED'), scalarLine(doc, 'LAST_REVIEWED'));

  const scenarios = items(doc, 'SCENARIOS').map((item, i) => {
    const at = `SCENARIOS[${i}]`;
    const scenarioSlug = itemValue(item, 'slug');
    if (scenarioSlug !== undefined && !SLUG_PATTERN.test(scenarioSlug)) {
      c.add(`${at}.slug`, `"${scenarioSlug}" must be lower-case words joined by single hyphens`, item.line);
    }
    c.max(`${at}.label`, itemValue(item, 'label'), LIMITS.scenarioLabel, item.line);
    c.max(`${at}.short_description`, itemValue(item, 'short_description'), LIMITS.scenarioShortDescription, item.line);
    c.max(`${at}.result_headline`, itemValue(item, 'result_headline'), LIMITS.scenarioResultHeadline, item.line);
    c.max(`${at}.recommended_action`, itemValue(item, 'recommended_action'), LIMITS.scenarioRecommendedAction, item.line);
    c.noInventedFigure(`${at}.result_body`, itemValue(item, 'result_body'), item.line);
    c.noInventedFigure(`${at}.recommended_action`, itemValue(item, 'recommended_action'), item.line);
    return {
      slug: scenarioSlug ?? '',
      label: itemValue(item, 'label') ?? '',
      shortDescription: itemValue(item, 'short_description'),
      verdictOverride: c.enum(`${at}.verdict_override`, itemValue(item, 'verdict_override'), ENUMS.verdict, item.line),
      urgencyOverride: c.enum(`${at}.urgency_override`, itemValue(item, 'urgency_override'), ENUMS.urgency, item.line),
      resultHeadline: itemValue(item, 'result_headline') ?? '',
      resultBody: itemValue(item, 'result_body') ?? '',
      recommendedAction: itemValue(item, 'recommended_action') ?? '',
    };
  });

  const consequences = items(doc, 'CONSEQUENCES').map((item, i) => {
    const at = `CONSEQUENCES[${i}]`;
    c.max(`${at}.stage_label`, itemValue(item, 'stage_label'), LIMITS.consequenceStageLabel, item.line);
    c.max(`${at}.title`, itemValue(item, 'title'), LIMITS.consequenceTitle, item.line);
    c.max(`${at}.chain_label`, itemValue(item, 'chain_label'), LIMITS.consequenceChainLabel, item.line);
    return {
      stageLabel: itemValue(item, 'stage_label') ?? '',
      title: itemValue(item, 'title') ?? '',
      description: itemValue(item, 'description'),
      severity: c.enum(`${at}.severity`, itemValue(item, 'severity'), ENUMS.severity, item.line) ?? 'info',
      chainLabel: itemValue(item, 'chain_label'),
    };
  });

  const windows = items(doc, 'WINDOWS').map((item, i) => {
    const at = `WINDOWS[${i}]`;
    c.max(`${at}.situation`, itemValue(item, 'situation'), LIMITS.windowSituation, item.line);
    c.max(`${at}.ignore_answer`, itemValue(item, 'ignore_answer'), LIMITS.windowIgnoreAnswer, item.line);
    c.max(`${at}.what_to_do`, itemValue(item, 'what_to_do'), LIMITS.windowWhatToDo, item.line);
    c.noInventedFigure(`${at}.what_to_do`, itemValue(item, 'what_to_do'), item.line);
    return {
      situation: itemValue(item, 'situation') ?? '',
      ignoreAnswer: itemValue(item, 'ignore_answer') ?? '',
      severity: c.enum(`${at}.severity`, itemValue(item, 'severity'), ENUMS.severity, item.line) ?? 'info',
      whatToDo: itemValue(item, 'what_to_do') ?? '',
    };
  });

  const actions = items(doc, 'ACTIONS').map((item, i) => {
    const at = `ACTIONS[${i}]`;
    const destination = itemValue(item, 'destination_problem_slug');
    if (destination !== undefined && !SLUG_PATTERN.test(destination)) {
      c.add(`${at}.destination_problem_slug`, `"${destination}" is not a slug`, item.line);
    }
    c.max(`${at}.title`, itemValue(item, 'title'), LIMITS.actionTitle, item.line);
    c.max(`${at}.destination_label`, itemValue(item, 'destination_label'), LIMITS.actionDestinationLabel, item.line);
    c.noInventedFigure(`${at}.body`, itemValue(item, 'body'), item.line);
    return {
      title: itemValue(item, 'title') ?? '',
      body: itemValue(item, 'body') ?? '',
      destinationProblemSlug: destination,
      destinationLabel: itemValue(item, 'destination_label'),
    };
  });

  const flags = items(doc, 'FLAGS').map((item, i) => {
    const at = `FLAGS[${i}]`;
    c.max(`${at}.title`, itemValue(item, 'title'), LIMITS.flagTitle, item.line);
    c.max(`${at}.description`, itemValue(item, 'description'), LIMITS.flagDescription, item.line);
    return {
      title: itemValue(item, 'title') ?? '',
      description: itemValue(item, 'description'),
      severity: c.enum(`${at}.severity`, itemValue(item, 'severity'), ENUMS.severity, item.line),
    };
  });

  const faqs = items(doc, 'FAQS').map((item, i) => {
    const at = `FAQS[${i}]`;
    c.max(`${at}.q`, itemValue(item, 'q'), LIMITS.faqQuestion, item.line);
    c.noInventedFigure(`${at}.a`, itemValue(item, 'a'), item.line);
    return { question: itemValue(item, 'q') ?? '', answer: itemValue(item, 'a') ?? '' };
  });

  const resources = items(doc, 'RESOURCES').map((item, i) => {
    const at = `RESOURCES[${i}]`;
    c.max(`${at}.title`, itemValue(item, 'title'), LIMITS.resourceTitle, item.line);
    c.max(`${at}.description`, itemValue(item, 'description'), LIMITS.resourceDescription, item.line);
    const url = parseUrl(c, `${at}.url`, itemValue(item, 'url'), item.line);
    if (url !== null) {
      c.add(`${at}.url`, 'must be null. This site ships no purchase links yet.', item.line);
    }
    const affiliate = parseBoolean(c, `${at}.affiliate`, itemValue(item, 'affiliate'), item.line);
    if (affiliate === true) {
      c.add(`${at}.affiliate`, 'must be false. Monetisation is off.', item.line);
    }
    return {
      title: itemValue(item, 'title') ?? '',
      description: itemValue(item, 'description') ?? '',
      kind: c.enum(`${at}.kind`, itemValue(item, 'kind'), ENUMS.resourceKind, item.line) ?? 'guide',
      url: null,
      affiliate: false,
    };
  });

  const sourceItems = items(doc, 'SOURCES');
  const sources = sourceItems.map((item, i) => {
    const at = `SOURCES[${i}]`;
    c.max(`${at}.publisher`, itemValue(item, 'publisher'), LIMITS.sourcePublisher, item.line);
    c.max(`${at}.title`, itemValue(item, 'title'), LIMITS.sourceTitle, item.line);
    c.max(`${at}.notes`, itemValue(item, 'notes'), LIMITS.sourceNotes, item.line);
    const url = parseUrl(c, `${at}.url`, itemValue(item, 'url'), item.line);
    c.max(`${at}.url`, url ?? undefined, LIMITS.sourceUrl, item.line);
    return {
      publisher: itemValue(item, 'publisher') ?? '',
      title: itemValue(item, 'title') ?? '',
      url,
      sourceType: c.enum(`${at}.source_type`, itemValue(item, 'source_type'), ENUMS.sourceType, item.line) ?? 'other',
      notes: itemValue(item, 'notes'),
    };
  });

  if (sourceItems.length > 0) {
    const authoritative = sources.some((s) => s.sourceType === 'government' || s.sourceType === 'regulation');
    if (!authoritative) {
      c.add('SOURCES', 'needs at least one source with source_type government or regulation');
    }
  }

  const related = items(doc, 'RELATED').map((item, i) => {
    const at = `RELATED[${i}]`;
    const relatedSlug = itemValue(item, 'slug');
    const anchorText = itemValue(item, 'anchor_text');
    if (relatedSlug !== undefined && !SLUG_PATTERN.test(relatedSlug)) {
      c.add(`${at}.slug`, `"${relatedSlug}" is not a slug`, item.line);
    }
    if (anchorText !== undefined) {
      if (anchorText.length <= 10) {
        c.add(`${at}.anchor_text`, 'must be longer than 10 characters — write the question it answers', item.line);
      }
      if (BAD_ANCHOR_PATTERN.test(anchorText.toLowerCase())) {
        c.add(`${at}.anchor_text`, 'must not be "click here", "read more" or "learn more"', item.line);
      }
      c.max(`${at}.anchor_text`, anchorText, LIMITS.relatedAnchorText, item.line);
    }
    return {
      slug: relatedSlug ?? '',
      anchorText: anchorText ?? '',
      relationshipType:
        c.enum(`${at}.relationship_type`, itemValue(item, 'relationship_type'), ENUMS.relationshipType, item.line) ?? 'related',
    };
  });

  const aliasEntry = doc.bareLists.get('ALIASES');
  const aliases = (aliasEntry?.values ?? []).filter((alias) => {
    if (!canonicalPathSchema.safeParse(alias).success) {
      c.add('ALIASES', `"${alias}" is not a well-formed path`, aliasEntry?.line);
      return false;
    }
    if (alias === canonicalPath) {
      c.add('ALIASES', `"${alias}" is the page's own canonical path`, aliasEntry?.line);
      return false;
    }
    return true;
  });

  if (c.errors.length > 0) return { seed: null, errors: c.errors };

  const seed: ProblemSeed = {
    systemSlug: scalar(doc, 'SYSTEM')!,
    slug: slug!,
    canonicalPath: canonicalPath!,
    name: scalar(doc, 'NAME')!,
    h1: h1!,
    status: status ?? 'published',
    indexable: indexable ?? true,
    seoTitle,
    metaDescription: scalar(doc, 'META_DESCRIPTION'),
    verdict,
    urgency,
    safetyRisk,
    fixDifficulty,
    canIUseItQuestion: scalar(doc, 'CAN_I_USE_IT_QUESTION'),
    canIUseItLabel: scalar(doc, 'CAN_I_USE_IT_LABEL'),
    shortAnswer: scalar(doc, 'SHORT_ANSWER'),
    whyItMatters: scalar(doc, 'WHY_IT_MATTERS'),
    scenarios,
    consequences,
    windows,
    actions,
    flags,
    faqs,
    resources,
    sources,
    related,
  };

  const eyebrow = scalar(doc, 'EYEBROW');
  if (eyebrow !== undefined) seed.eyebrow = eyebrow;
  const whyHeading = scalar(doc, 'WHY_IT_MATTERS_HEADING');
  if (whyHeading !== undefined) seed.whyItMattersHeading = whyHeading;
  const redFlagsHeading = scalar(doc, 'RED_FLAGS_HEADING');
  if (redFlagsHeading !== undefined) seed.redFlagsHeading = redFlagsHeading;
  if (lastReviewedAt !== undefined) seed.lastReviewedAt = lastReviewedAt;
  if (reviewScope !== undefined) seed.reviewScope = reviewScope;
  const disclaimer = scalar(doc, 'DISCLAIMER');
  if (disclaimer !== undefined) seed.disclaimer = disclaimer;
  if (aliases.length > 0) seed.aliases = aliases;

  return { seed, errors: [] };
}
