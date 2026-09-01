import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';

import { HubPage } from '@/templates/HubPage';
import { ProblemPage } from '@/templates/ProblemPage';
import { buildPageMetadata, hubMetadataDefaults } from '@/lib/seo/metadata';
import {
  getProblemPage,
  getPublishedProblemsBySystem,
  getPublishedProblemsByObject,
} from '@/lib/repository/problems';
import { getPairingsByDomain, getPairingsByObject } from '@/lib/repository/compat';
import { resolveRoute } from '@/lib/repository/routes';
import { getDomainHub, getHubAnswerCounts, getObjectHub, getSystemHub } from '@/lib/repository/taxonomy';
import { hubIsIndexable } from '@/lib/seo/hub-index';
import { normalizePath } from '@/lib/site';

/**
 * Every content URL on the site is served by this one file.
 *
 * That is possible because taxonomy depth and URL depth are independent: a path
 * cannot be parsed to work out what it is, so it is looked up. `/mobility/`,
 * `/cars/`, `/cars/tires/` and `/cars/tires/low-tire-pressure/` all arrive here
 * and are resolved by a single indexed query.
 *
 * The consequence that matters: adding the site's 50,000th problem adds a
 * database row. It does not add a route, a component or a deployment artifact.
 *
 * Static routes (`/search`, `/about`, …) are matched by Next before this
 * catch-all, so they are unaffected.
 */

// Rendered on demand, then cached and revalidated hourly. Deliberately NOT
// `generateStaticParams` over every problem: pre-rendering 50,000 pages on every
// deploy to publish an edit to one of them is the failure mode this avoids.
// It also means `next build` needs no database connection.
export const revalidate = 3600;
export const dynamicParams = true;

/**
 * Empty on purpose. Returning no params at build time, with `dynamicParams`
 * enabled, gives incremental static regeneration: the first request for a URL
 * renders and caches it, everything after is served from cache until it
 * revalidates. Publishing one problem therefore costs one render, not a
 * 50,000-page rebuild — and `next build` needs no database.
 */
export function generateStaticParams(): { path: string[] }[] {
  return [];
}

type RouteProps = { params: Promise<{ path: string[] }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { path } = await params;
  const canonicalPath = normalizePath(path);
  // `resolveRoute` is request-cached, so this does not re-query for the page render.
  const route = await resolveRoute(canonicalPath);
  if (!route) return {};

  switch (route.kind) {
    case 'problem': {
      const data = await getProblemPage(route.id);
      if (!data) return {};
      return buildPageMetadata({
        seoTitle: data.problem.seoTitle,
        metaDescription: data.problem.metaDescription,
        canonicalPath: data.problem.canonicalPath,
        indexable: data.problem.indexable,
      });
    }
    case 'domain': {
      const hub = await getDomainHub(route.id);
      if (!hub) return {};
      const fallback = hubMetadataDefaults(hub.domain.name, hub.domain.shortDescription);
      return buildPageMetadata({
        seoTitle: hub.domain.seoTitle ?? fallback.seoTitle,
        metaDescription: hub.domain.metaDescription ?? fallback.metaDescription,
        canonicalPath: hub.domain.canonicalPath,
        indexable: hubIsIndexable((await getHubAnswerCounts()).byDomain.get(hub.domain.id) ?? 0),
      });
    }
    case 'objectCategory': {
      const hub = await getObjectHub(route.id);
      if (!hub) return {};
      const fallback = hubMetadataDefaults(hub.objectCategory.name, hub.objectCategory.shortDescription);
      return buildPageMetadata({
        seoTitle: hub.objectCategory.seoTitle ?? fallback.seoTitle,
        metaDescription: hub.objectCategory.metaDescription ?? fallback.metaDescription,
        canonicalPath: hub.objectCategory.canonicalPath,
        indexable: hubIsIndexable(
          (await getHubAnswerCounts()).byObject.get(hub.objectCategory.id) ?? 0,
        ),
      });
    }
    case 'system': {
      const hub = await getSystemHub(route.id);
      if (!hub) return {};
      const fallback = hubMetadataDefaults(hub.system.name, hub.system.shortDescription);
      return buildPageMetadata({
        seoTitle: hub.system.seoTitle ?? fallback.seoTitle,
        metaDescription: hub.system.metaDescription ?? fallback.metaDescription,
        canonicalPath: hub.system.canonicalPath,
        indexable: hubIsIndexable((await getHubAnswerCounts()).bySystem.get(hub.system.id) ?? 0),
      });
    }
    default:
      return {};
  }
}

export default async function CatchAllPage({ params }: RouteProps) {
  const { path } = await params;
  const canonicalPath = normalizePath(path);
  const route = await resolveRoute(canonicalPath);

  // A draft problem, an archived one, or a path that never existed all land
  // here. None of them renders a soft 200.
  if (!route) notFound();

  // Keyword-variation aliases 308 to the canonical page rather than duplicating it.
  if (route.kind === 'redirect') permanentRedirect(route.to);

  if (route.kind === 'problem') {
    const data = await getProblemPage(route.id);
    if (!data) notFound();
    return <ProblemPage data={data} />;
  }

  if (route.kind === 'system') {
    const hub = await getSystemHub(route.id);
    if (!hub) notFound();
    const problems = await getPublishedProblemsBySystem(hub.system.id);
    return (
      <HubPage
        heading={hub.system.hubHeading ?? `Can I Ignore These ${hub.system.name} Problems?`}
        intro={hub.system.shortDescription}
        crumbs={hub.breadcrumbs}
        childLabel=""
        // A system is the last taxonomy level; its children are problems, which
        // the verdict grouping above already renders.
        childHubs={[]}
        planned={[]}
        problems={problems}
      />
    );
  }

  if (route.kind === 'objectCategory') {
    const hub = await getObjectHub(route.id);
    if (!hub) notFound();
    const [problems, pairings] = await Promise.all([
      getPublishedProblemsByObject(hub.objectCategory.id),
      getPairingsByObject(hub.objectCategory.id),
    ]);
    return (
      <HubPage
        heading={hub.objectCategory.hubHeading ?? `${hub.objectCategory.name} Problems: What Can You Ignore?`}
        intro={hub.objectCategory.shortDescription}
        crumbs={hub.breadcrumbs}
        childLabel={`${hub.objectCategory.singularName ?? hub.objectCategory.name} systems`}
        childHubs={hub.children}
        planned={hub.planned}
        problems={problems}
        pairings={pairings}
      />
    );
  }

  const hub = await getDomainHub(route.id);
  if (!hub) notFound();
  const domainPairings = await getPairingsByDomain(hub.domain.id);
  return (
    <HubPage
      heading={hub.domain.hubHeading ?? `${hub.domain.name} Problems: What Can You Ignore?`}
      intro={hub.domain.shortDescription}
      crumbs={hub.breadcrumbs}
      childLabel={`What's in ${hub.domain.name}`}
      childHubs={hub.children}
      planned={hub.planned}
      problems={[]}
      pairings={domainPairings}
    />
  );
}
