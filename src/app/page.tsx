import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { DecisionsCarousel } from '@/components/DecisionsCarousel';
import { ProblemSearch } from '@/components/ProblemSearch';
import { getFeaturedProblems } from '@/lib/repository/problems';
import { getPublishedDomains } from '@/lib/repository/taxonomy';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/site';

/**
 * The home page states what the site is and puts the search field in front of
 * the visitor. It is not a marketing essay: someone who lands here already has
 * a problem in mind, and the fastest useful thing is a text box.
 */

export const revalidate = 3600;

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `${SITE_NAME} — ${SITE_TAGLINE}`,
  metaDescription: SITE_DESCRIPTION,
  canonicalPath: '/',
  indexable: true,
});

export default async function HomePage() {
  // Fetched well above the 10 the carousel shows, so the client-side shuffle
  // in DecisionsCarousel has a real pool to draw from as the catalogue grows.
  const [featured, domains] = await Promise.all([getFeaturedProblems(24), getPublishedDomains()]);

  return (
    <div className="container">
      <main id="main">
        <section className="hero">
          <Image
            className="hero__illustration"
            src="/hero-illustration.png"
            alt="A person scratching their chin, puzzling over smoke rising from a toaster"
            width={1100}
            height={927}
            sizes="280px"
            priority
          />
          <h1 className="hero__title">{SITE_NAME}</h1>
          <p className="hero__tagline">{SITE_TAGLINE}</p>
          <div className="hero__search">
            <ProblemSearch id="home-search" large />
          </div>
        </section>

        {featured.length > 0 ? (
          <section className="section" aria-labelledby="decisions">
            <div className="section__head measure">
              <h2 id="decisions">{featured.length === 1 ? 'The first decision' : 'Decisions'}</h2>
              <p className="section__lead">Oh, right — I&rsquo;ve wondered about that.</p>
            </div>
            <DecisionsCarousel problems={featured} />
          </section>
        ) : (
          <section className="section measure">
            <p className="empty-state">
              No decisions are published yet. Run <code>npm run db:seed</code> to load the content records.
            </p>
          </section>
        )}

        <section className="section" aria-labelledby="browse">
          <div className="section__head measure">
            <h2 id="browse">Browse</h2>
          </div>
          <ul className="hub-grid">
            {domains.map((domain) => (
              <li key={domain.id}>
                <Link className="hub-tile" href={domain.canonicalPath}>
                  <span className="hub-tile__name">{domain.name}</span>
                  {domain.shortDescription ? (
                    <span className="hub-tile__meta">{domain.shortDescription}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
          <p className="section__lead measure hub-note">
            More areas — home, appliances, tech, garden, personal gear — open up as decisions are written for
            them. We would rather show you one finished answer than fifty empty categories.
          </p>
        </section>
      </main>
    </div>
  );
}
