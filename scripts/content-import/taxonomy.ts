/**
 * Deterministic taxonomy resolution.
 *
 * The canonical path decides placement: `/home/safety/alarms/chirping-smoke-alarm/`
 * means the parent hub is `/home/safety/alarms/`. If a system already sits at
 * that path the importer reuses it and touches nothing.
 *
 * When it does not, the importer refuses by default rather than inventing hub
 * copy. Creating a taxonomy node makes a new hub page live, which is an
 * editorial decision, not a side effect of importing one problem. `--create-taxonomy`
 * opts in, and the derived names and descriptions are printed in the plan so
 * they can be reviewed before anything is written.
 *
 * Near-miss protection: if a system with a nearly identical name already exists
 * under the same object ("alarm" vs "alarms"), that is an error asking a human
 * to pick, never a second node. Spelling drift is how a taxonomy grows two
 * shelves for the same thing.
 */
import type { DomainSeed, ObjectCategorySeed, SystemSeed } from '../../src/content/types';
import type { ImportError } from './build';

export interface TaxonomySnapshot {
  domains: DomainSeed[];
  objectCategories: ObjectCategorySeed[];
  systems: SystemSeed[];
}

export type TaxonomyAction =
  | { action: 'reuse'; level: 'domain' | 'object' | 'system'; slug: string; path: string; name: string }
  | { action: 'create'; level: 'domain'; record: DomainSeed }
  | { action: 'create'; level: 'object'; record: ObjectCategorySeed }
  | { action: 'create'; level: 'system'; record: SystemSeed };

export interface TaxonomyPlan {
  steps: TaxonomyAction[];
  errors: ImportError[];
}

/** `/home/safety/alarms/chirping-smoke-alarm/` -> `/home/safety/alarms/` */
export function parentPath(path: string): string {
  const parts = path.split('/').filter(Boolean);
  parts.pop();
  return parts.length === 0 ? '/' : `/${parts.join('/')}/`;
}

/** Loose comparison used only to catch spelling drift, never to match. */
function normalise(value: string): string {
  const flat = value.toLowerCase().replace(/[^a-z0-9]/g, '');
  return flat.endsWith('s') ? flat.slice(0, -1) : flat;
}

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((word) => (word.length <= 2 ? word : word[0]!.toUpperCase() + word.slice(1)))
    .join(' ')
    .replace(/^./, (c) => c.toUpperCase());
}

/** EYEBROW is "Home · Safety · Alarms" — a display hint, not the source of truth. */
function eyebrowSegments(eyebrow: string | undefined): string[] {
  if (!eyebrow) return [];
  return eyebrow
    .split(/[·>›|]/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function nextSortOrder(existing: { sortOrder: number }[]): number {
  const max = existing.reduce((highest, node) => Math.max(highest, node.sortOrder), 0);
  return max + 10;
}

export interface PlanInput {
  systemSlug: string;
  canonicalPath: string;
  eyebrow?: string;
  allowCreate: boolean;
}

export function planTaxonomy(input: PlanInput, snapshot: TaxonomySnapshot): TaxonomyPlan {
  const steps: TaxonomyAction[] = [];
  const errors: ImportError[] = [];

  const systemPath = parentPath(input.canonicalPath);
  const objectPath = parentPath(systemPath);
  const domainPath = parentPath(objectPath);

  const segments = eyebrowSegments(input.eyebrow);
  const systemName = segments.at(-1) ?? titleCase(input.systemSlug);
  const objectName = segments.at(-2) ?? titleCase(objectPath.split('/').filter(Boolean).at(-1) ?? 'Category');
  const domainName = segments.at(-3) ?? titleCase(domainPath.split('/').filter(Boolean).at(-1) ?? 'Area');

  const existingSystem = snapshot.systems.find((s) => s.canonicalPath === systemPath);
  if (existingSystem) {
    if (existingSystem.slug !== input.systemSlug) {
      errors.push({
        field: 'SYSTEM',
        message: `"${input.systemSlug}" does not match the system already at ${systemPath}, which is "${existingSystem.slug}". Use that slug, or change CANONICAL_PATH.`,
      });
    }
    if (existingSystem.status !== 'published') {
      errors.push({
        field: 'SYSTEM',
        message: `the system at ${systemPath} is still a draft, so its hub would 404. Publishing it is a separate decision.`,
      });
    }
    steps.push({
      action: 'reuse',
      level: 'system',
      slug: existingSystem.slug,
      path: systemPath,
      name: existingSystem.name,
    });
    return { steps, errors };
  }

  // No system at that path. Resolve upwards first.
  const existingObject = snapshot.objectCategories.find((o) => o.canonicalPath === objectPath);
  const existingDomain = snapshot.domains.find((d) => d.canonicalPath === domainPath);

  if (existingObject) {
    const nearMiss = snapshot.systems.find(
      (s) =>
        s.objectSlug === existingObject.slug &&
        (normalise(s.slug) === normalise(input.systemSlug) || normalise(s.name) === normalise(systemName)),
    );
    if (nearMiss) {
      errors.push({
        field: 'SYSTEM',
        message: `"${input.systemSlug}" looks like the existing system "${nearMiss.slug}" (${nearMiss.canonicalPath}). Use that one rather than adding a near-duplicate.`,
      });
      return { steps, errors };
    }
  }

  if (!input.allowCreate) {
    const missing = [
      !existingDomain ? `domain ${domainPath}` : null,
      !existingObject ? `object ${objectPath}` : null,
      `system ${systemPath}`,
    ].filter(Boolean);
    errors.push({
      field: 'CANONICAL_PATH',
      message: `needs taxonomy that does not exist yet (${missing.join(', ')}). Re-run with --create-taxonomy to add it, or fix the path.`,
    });
    return { steps, errors };
  }

  if (existingDomain) {
    steps.push({ action: 'reuse', level: 'domain', slug: existingDomain.slug, path: domainPath, name: existingDomain.name });
  } else {
    const slug = domainPath.split('/').filter(Boolean).at(-1) ?? 'area';
    steps.push({
      action: 'create',
      level: 'domain',
      record: {
        slug,
        name: domainName,
        canonicalPath: domainPath,
        shortDescription: `${domainName} problems and the questions people put off.`,
        hubHeading: `${domainName} Problems: What Can You Ignore?`,
        seoTitle: `${domainName} Problems: What Can You Ignore? | Can I Ignore It`,
        metaDescription: `${domainName} problems sorted by how urgent they actually are — what can wait, what cannot, and what happens if you leave it.`,
        sortOrder: nextSortOrder(snapshot.domains),
        status: 'published',
        indexable: false,
      },
    });
  }

  if (existingObject) {
    steps.push({ action: 'reuse', level: 'object', slug: existingObject.slug, path: objectPath, name: existingObject.name });
  } else {
    const slug = objectPath.split('/').filter(Boolean).at(-1) ?? 'category';
    const domainSlug =
      existingDomain?.slug ?? (domainPath.split('/').filter(Boolean).at(-1) as string | undefined) ?? 'area';
    steps.push({
      action: 'create',
      level: 'object',
      record: {
        domainSlug,
        slug,
        name: objectName,
        singularName: objectName,
        canonicalPath: objectPath,
        shortDescription: `${objectName} problems and questions.`,
        hubHeading: `${objectName} Problems: What Can You Ignore?`,
        seoTitle: `${objectName} Problems: What Can You Ignore? | Can I Ignore It`,
        metaDescription: `${objectName} problems sorted by how urgent they actually are — what can wait and what needs dealing with now.`,
        sortOrder: nextSortOrder(snapshot.objectCategories.filter((o) => o.canonicalPath.startsWith(domainPath))),
        status: 'published',
        indexable: false,
      },
    });
  }

  const objectSlug = existingObject?.slug ?? (objectPath.split('/').filter(Boolean).at(-1) as string | undefined) ?? 'category';
  steps.push({
    action: 'create',
    level: 'system',
    record: {
      objectSlug,
      slug: input.systemSlug,
      name: systemName,
      singularName: systemName,
      canonicalPath: systemPath,
      shortDescription: `${systemName} problems and questions.`,
      hubHeading: `Can I Ignore These ${systemName} Problems?`,
      seoTitle: `${systemName} Problems: What Can You Ignore? | Can I Ignore It`,
      metaDescription: `${systemName} problems sorted by how urgent they actually are — from the ones you can leave to the ones that need dealing with now.`,
      sortOrder: nextSortOrder(snapshot.systems.filter((s) => s.objectSlug === objectSlug)),
      status: 'published',
      indexable: false,
    },
  });

  return { steps, errors };
}
