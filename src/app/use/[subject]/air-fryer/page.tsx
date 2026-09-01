import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { CompatPage } from '@/templates/CompatPage';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { findPairing, pairingPath, pairingsForTarget } from '@/content/compat/pairings';

/**
 * Every "<something> in an air fryer" pairing, from one template.
 *
 * The target is a real path segment rather than a second dynamic slug: it keeps
 * the route flat while there is one target, and `/use/[subject]/[target]/` is a
 * mechanical change the day a second appliance is written.
 */

const TARGET = 'air-fryer';

export function generateStaticParams() {
  return pairingsForTarget(TARGET).map((pairing) => ({ subject: pairing.subjectSlug }));
}

/** No fallback rendering: an unwritten pairing is a 404, never a thin page. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject } = await params;
  const pairing = findPairing(subject, TARGET);
  if (!pairing) return {};

  return buildPageMetadata({
    seoTitle: pairing.seoTitle,
    metaDescription: pairing.metaDescription,
    canonicalPath: pairingPath(pairing),
    indexable: true,
  });
}

export default async function PairingRoute({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const pairing = findPairing(subject, TARGET);
  if (!pairing) notFound();

  return <CompatPage pairing={pairing} />;
}
