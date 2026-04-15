import { useEffect, useMemo, useState } from 'react';
import { EditorialCard } from './components/EditorialCard';
import { MetricCard } from './components/MetricCard';
import { PotentialEstimator } from './components/PotentialEstimator';
import { SectionHeading } from './components/SectionHeading';
import { StageCard } from './components/StageCard';
import { TopNav } from './components/TopNav';
import { siteContent } from './data/siteContent';

type PageKey = 'home' | 'people' | 'research' | 'publications' | 'resources';

function getPageFromHash(): PageKey {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (raw === 'people' || raw === 'research' || raw === 'publications' || raw === 'resources') {
    return raw;
  }

  return 'home';
}

function routeHref(page: PageKey) {
  return page === 'home' ? '#/' : `#/${page}`;
}

export function App() {
  const { brand, hero, metrics, stages, spotlight, footer, pages } = siteContent;
  const [page, setPage] = useState<PageKey>(() => getPageFromHash());

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navItems = useMemo(
    () => [
      { href: routeHref('home'), label: 'Home', active: page === 'home' },
      { href: routeHref('people'), label: 'The People', active: page === 'people' },
      { href: routeHref('research'), label: 'Research', active: page === 'research' },
      {
        href: routeHref('publications'),
        label: 'Publications',
        active: page === 'publications',
      },
      { href: routeHref('resources'), label: 'Resources', active: page === 'resources' },
    ],
    [page],
  );

  return (
    <div className="page-shell">
      <TopNav brand={brand.name} tagline={brand.tagline} items={navItems} />

      <main>
        {page === 'home' && (
          <>
            <section className="hero">
              <div className="hero-figure" aria-hidden="true" />

              <div className="hero-copy">
                <p className="eyebrow">{brand.subtitle}</p>
                <h1>{hero.headline}</h1>
                <p className="hero-description">{hero.description}</p>

                <div className="hero-actions">
                  <a className="button button--primary" href={routeHref('research')}>
                    {hero.primaryCta}
                  </a>
                  <a className="button button--secondary" href="#editable-spots">
                    {hero.secondaryCta}
                  </a>
                </div>

                <ul className="hero-points" aria-label="Project highlights">
                  <li>National-scale biomass mapping</li>
                  <li>Remote sensing, field data, and modelling</li>
                  <li>Public site designed for ongoing updates</li>
                </ul>
              </div>

              <aside className="hero-panel" aria-label="Project snapshot">
                <div className="hero-panel__meta">
                  {metrics.map((metric) => (
                    <MetricCard key={metric.value} {...metric} />
                  ))}
                </div>
              </aside>
            </section>

            <section className="section section--lede">
              <SectionHeading
                eyebrow={siteContent.coreAim.eyebrow}
                title={siteContent.coreAim.title}
                description={siteContent.coreAim.text}
              />
            </section>

            <section className="section" id="problem">
              <SectionHeading
                eyebrow={siteContent.problem.eyebrow}
                title={siteContent.problem.title}
                description={siteContent.problem.text}
              />

              <div className="research-grid research-grid--three">
                {siteContent.problem.cards.map((card) => (
                  <EditorialCard key={card.title} title={card.title} body={card.body} />
                ))}
              </div>
            </section>

            <section className="section" id="objectives">
              <SectionHeading
                eyebrow={siteContent.objectives.eyebrow}
                title={siteContent.objectives.title}
                description={siteContent.objectives.description}
              />

              <div className="research-grid research-grid--three">
                {siteContent.objectives.cards.map((card) => (
                  <EditorialCard key={card.title} title={card.title} body={card.body} />
                ))}
              </div>
            </section>

            <section className="section" id="pipeline">
              <SectionHeading
                eyebrow="Workflow"
                title="A three-stage GeoAI pipeline"
                description="The site keeps the technical story simple: detect current biomass assets, predict how they behave, then map their wider potential."
              />

              <div className="stage-grid">
                {stages.map((stage) => (
                  <StageCard key={stage.step} {...stage} />
                ))}
              </div>
            </section>

            <section className="section section--mission" id="vision">
              <div className="mission-layout">
                <div>
                  <p className="eyebrow">{siteContent.vision.eyebrow}</p>
                  <h2>{siteContent.vision.title}</h2>
                </div>
                <p className="mission-text">{siteContent.vision.text}</p>
              </div>
            </section>

            <section className="section" id="outcome">
              <SectionHeading
                eyebrow={siteContent.outcome.eyebrow}
                title={siteContent.outcome.title}
                description="The project is designed to produce outputs that are directly useful for decarbonisation planning and sustainable biomass strategy."
              />

              <div className="spotlight-grid spotlight-grid--three">
                {siteContent.outcome.cards.map((card) => (
                  <article className="spotlight-card" key={card}>
                    <h3>{card}</h3>
                  </article>
                ))}
              </div>
            </section>

            <section className="section section--spotlight" id="editable-spots">
              <SectionHeading
                eyebrow="Editable spots"
                title={spotlight.heading}
                description={spotlight.text}
              />

              <div className="spotlight-grid spotlight-grid--three">
                <article className="spotlight-card">
                  <h3>Branding</h3>
                  <p>
                    Change the name, tagline, hero copy, and footer text in{' '}
                    <code>src/data/siteContent.ts</code>.
                  </p>
                </article>
                <article className="spotlight-card">
                  <h3>Content</h3>
                  <p>Swap the stage titles, bullets, and descriptions without touching the page layout.</p>
                </article>
                <article className="spotlight-card">
                  <h3>Visuals</h3>
                  <p>
                    Edit <code>src/styles/global.css</code> to update color, spacing, and typography.
                  </p>
                </article>
              </div>
            </section>

            <div id="interactive" className="section">
              <PotentialEstimator copy={siteContent.estimator} />
            </div>
          </>
        )}

        {page === 'people' && (
          <section className="section">
            <SectionHeading
              eyebrow={pages.people.eyebrow}
              title={pages.people.title}
              description={pages.people.description}
            />

            <div className="people-grid">
              {pages.people.members.map((member) => (
                <article className="person-card" key={member.name}>
                  <div className="person-card__header">
                    <p className="person-role">{member.role}</p>
                    <h2>{member.name}</h2>
                  </div>
                  <div className="person-about">
                    <p className="person-about__label">About</p>
                    <div className="person-about__blank" aria-label={`About section for ${member.name} left blank`} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'research' && (
          <section className="section">
            <SectionHeading
              eyebrow={pages.research.eyebrow}
              title={pages.research.title}
              description={pages.research.description}
            />

            <div className="research-grid">
              <EditorialCard
                title={siteContent.coreAim.title}
                body={siteContent.coreAim.text}
              />
              <EditorialCard
                title={siteContent.problem.title}
                body={siteContent.problem.text}
              />
              <EditorialCard
                title={siteContent.vision.title}
                body={siteContent.vision.text}
              />
            </div>
          </section>
        )}

        {page === 'publications' && (
          <section className="section">
            <SectionHeading
              eyebrow={pages.publications.eyebrow}
              title={pages.publications.title}
              description={pages.publications.description}
            />

            <div className="spotlight-grid spotlight-grid--three">
              <article className="spotlight-card">
                <h3>Publications will appear here</h3>
                <p>Add journal papers, conference submissions, preprints, and reports as they become available.</p>
              </article>
              <article className="spotlight-card">
                <h3>Editable placeholder</h3>
                <p>This page is ready for links, citations, and project outputs.</p>
              </article>
              <article className="spotlight-card">
                <h3>Project updates</h3>
                <p>Use this area for short notes, presentations, or news items.</p>
              </article>
            </div>
          </section>
        )}

        {page === 'resources' && (
          <section className="section">
            <SectionHeading
              eyebrow={pages.resources.eyebrow}
              title={pages.resources.title}
              description={pages.resources.description}
            />

            <div className="research-grid">
              <EditorialCard title="Datasets" body="Add links to satellite, aerial, LiDAR, and field datasets here." />
              <EditorialCard title="Documentation" body="Use this section for methods notes, project docs, and data dictionaries." />
              <EditorialCard title="Links" body="Add code repositories, maps, reports, and any external resources." />
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div>
          <p className="footer__label">{brand.name}</p>
          <p>{footer.note}</p>
        </div>
        <p>{footer.contact}</p>
      </footer>
    </div>
  );
}
