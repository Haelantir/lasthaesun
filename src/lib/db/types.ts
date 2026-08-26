/**
 * Enum value types, derived from the schema so they cannot drift from it.
 * Importing these instead of the table objects keeps client-safe modules free of
 * any Drizzle/`pg` dependency.
 */
import type {
  contentStatus,
  difficultyLevel,
  relationshipType,
  resourceKind,
  riskLevel,
  severityLevel,
  sourceType,
  urgencyLevel,
  verdictLevel,
} from './schema';

export type ContentStatus = (typeof contentStatus.enumValues)[number];
export type VerdictLevel = (typeof verdictLevel.enumValues)[number];
export type UrgencyLevel = (typeof urgencyLevel.enumValues)[number];
export type RiskLevel = (typeof riskLevel.enumValues)[number];
export type DifficultyLevel = (typeof difficultyLevel.enumValues)[number];
export type SeverityLevel = (typeof severityLevel.enumValues)[number];
export type SourceKind = (typeof sourceType.enumValues)[number];
export type RelationshipType = (typeof relationshipType.enumValues)[number];
export type ResourceKind = (typeof resourceKind.enumValues)[number];
