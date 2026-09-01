import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { CompatPage } from '@/templates/CompatPage';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { getPairingPage, getPairingsBySubject, getPairingsByTarget } from '@/lib/repository/compat';

/**
 * Every pairing on the site, served from one file and one indexed lookup.
 *
 * Rendered on demand and revalidated hourly, matching `[...path]` on the
 * decision side: publishing a pairing costs one render rather than a rebuild,
 * and `next build` needs no database.
 */
export const revalidate = 3600;
export const dynamicParams = true;

/** Empty on purpose — see the note on the same function in `[...path]`. */
export function generateStaticParams(): { subject: string; target: string }[] {
  return [];
}

type RouteProps = { params: Promise<{ subject: string; target: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { subject, target } = await params;
  // Request-cached, so this does not re-query for the render below.
  const pairing = await getPairingPage(subject, target);
  if (!pairing) return {};

  return buildPageMetadata({
    seoTitle: pairing.seoTitle,
    metaDescription: pairing.metaDescription,
    canonicalPath: pairing.canonicalPath,
    indexable: true,
  });
}

export default async function PairingRoute({ params }: RouteProps) {
  const { subject, target } = await params;
  const pairing = await getPairingPage(subject, target);
  if (!pairing) notFound();

  const [sameTarget, sameSubject] = await Promise.all([
    getPairingsByTarget(pairing.targetSlug),
    getPairingsBySubject(pairing.subjectSlug),
  ]);

  return <CompatPage pairing={pairing} sameTarget={sameTarget} sameSubject={sameSubject} />;
}
