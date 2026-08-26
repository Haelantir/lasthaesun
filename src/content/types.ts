import type {
  ContentStatus,
  DifficultyLevel,
  RelationshipType,
  ResourceKind,
  RiskLevel,
  SeverityLevel,
  SourceKind,
  UrgencyLevel,
  VerdictLevel,
} from '@/lib/db/types';

/**
 * The authoring format for content.
 *
 * Content is written as typed TypeScript records, validated by Zod, and pushed
 * into PostgreSQL by `npm run db:seed`. The database remains the runtime source
 * of truth — these files are the version-controlled input to it, which is what
 * makes "add a problem" a reviewable pull request rather than a manual INSERT.
 */

export interface DomainSeed {
  slug: string;
  name: string;
  canonicalPath: string;
  shortDescription: string;
  hubHeading?: string;
  seoTitle?: string;
  metaDescription?: string;
  sortOrder: number;
  status: ContentStatus;
  indexable: boolean;
}

export interface ObjectCategorySeed extends DomainSeed {
  domainSlug: string;
  /** Attributive form: "Cars" -> "Car", for "Car Problems". */
  singularName?: string;
}

export interface SystemSeed extends DomainSeed {
  objectSlug: string;
  /** Attributive form: "Tires" -> "Tire", for "Other Tire Problems". */
  singularName?: string;
}

export interface ScenarioSeed {
  slug: string;
  label: string;
  shortDescription?: string;
  verdictOverride?: VerdictLevel;
  urgencyOverride?: UrgencyLevel;
  resultHeadline: string;
  resultBody: string;
  recommendedAction: string;
}

export interface ConsequenceSeed {
  stageLabel: string;
  title: string;
  description?: string;
  severity: SeverityLevel;
  /** Node text for the compressed causal chain. Omit to leave a step out of it. */
  chainLabel?: string;
}

export interface IgnoreWindowSeed {
  situation: string;
  ignoreAnswer: string;
  severity: SeverityLevel;
  whatToDo: string;
}

export interface ActionStepSeed {
  title: string;
  body: string;
  /** Slug of a problem holding the full walkthrough. Rendered only once that
   *  problem is published. */
  destinationProblemSlug?: string;
  destinationLabel?: string;
}

export interface RedFlagSeed {
  title: string;
  description?: string;
  severity?: SeverityLevel;
}

export interface FaqSeed {
  question: string;
  answer: string;
}

export interface SourceSeed {
  publisher: string;
  title: string;
  /** Null when no official URL could be verified. Never guess one. */
  url: string | null;
  sourceType: SourceKind;
  notes?: string;
}

export interface ResourceSeed {
  title: string;
  description: string;
  kind: ResourceKind;
  url: string | null;
  affiliate: boolean;
}

export interface RelatedSeed {
  /** Target problem slug. May still be a draft. */
  slug: string;
  anchorText: string;
  relationshipType: RelationshipType;
}

export interface ProblemSeed {
  systemSlug: string;
  slug: string;
  canonicalPath: string;
  name: string;
  eyebrow?: string;
  h1: string;
  status: ContentStatus;
  indexable: boolean;

  seoTitle?: string;
  metaDescription?: string;
  verdict?: VerdictLevel;
  urgency?: UrgencyLevel;
  safetyRisk?: RiskLevel;
  fixDifficulty?: DifficultyLevel;
  canIUseItQuestion?: string;
  canIUseItLabel?: string;
  shortAnswer?: string;
  whyItMattersHeading?: string;
  whyItMatters?: string;
  redFlagsHeading?: string;
  lastReviewedAt?: Date;
  reviewScope?: string;
  disclaimer?: string;

  /** Old or alternate paths that must 308 here rather than become new pages. */
  aliases?: string[];

  scenarios?: ScenarioSeed[];
  consequences?: ConsequenceSeed[];
  windows?: IgnoreWindowSeed[];
  actions?: ActionStepSeed[];
  flags?: RedFlagSeed[];
  faqs?: FaqSeed[];
  sources?: SourceSeed[];
  resources?: ResourceSeed[];
  related?: RelatedSeed[];
}
