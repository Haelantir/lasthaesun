import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { CompatPage } from '@/templates/CompatPage';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { PAIRINGS, findPairing, pairingPath } from '@/content/compat';

/**
 * Every pairing on the site, from one template.
 *
 * Both halves are dynamic segments. The route was `/use/[subject]/air-fryer/`
 * while one appliance existed, which was honest then and wrong the moment the
 * oven set landed — a subject dossier listing "in an oven" pointed at a URL with
 * no route behind it.
 */

export function generateStaticParams() {
  return PAIRINGS.map((pairing) => ({
    subject: pairing.subjectSlug,
    target: pairing.targetSlug,
  }));
}

/** No fallback rendering: an unwritten pairing is a 404, never a thin page. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; target: string }>;
}): Promise<Metadata> {
  const { subject, target } = await params;
  const pairing = findPairing(subject, target);
  if (!pairing) return {};

  return buildPageMetadata({
    seoTitle: pairing.seoTitle,
    metaDescription: pairing.metaDescription,
    canonicalPath: pairingPath(pairing),
    indexable: true,
  });
}

export default async function PairingRoute({
  params,
}: {
  params: Promise<{ subject: string; target: string }>;
}) {
  const { subject, target } = await params;
  const pairing = findPairing(subject, target);
  if (!pairing) notFound();

  return <CompatPage pairing={pairing} />;
}
