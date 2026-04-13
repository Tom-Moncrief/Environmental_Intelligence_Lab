import { MetricCard } from './components/MetricCard';
import { EditorialCard } from './components/EditorialCard';
import { PotentialEstimator } from './components/PotentialEstimator';
import { SectionHeading } from './components/SectionHeading';
import { StageCard } from './components/StageCard';
import { TopNav } from './components/TopNav';
import { siteContent } from './data/siteContent';

export function App() {
  const { brand, hero, metrics, stages, spotlight, footer } = siteContent;

  return (
    <div className="page-shell">
      <div className="page-gridline" aria-hidden="true" />
      <div className="page-glow page-glow--left" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />

      <TopNav brand={brand.name} />

      <main>
        <section className="hero">
          <div className="hero-copy hero-copy--minimal">
            <p className="eyebrow">{brand.subtitle}</p>
            <h1>{hero.headline}</h1>
            <p className="hero-description">{hero.description}</p>

            <div className="hero-actions">
              <a className="button button--primary" href="#pipeline">
                {hero.primaryCta}
              </a>
              <a className="button button--secondary" href="#editable-spots">
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <aside className="hero-panel hero-panel--editorial" aria-label="Project snapshot">
            <p className="panel-label">Project snapshot</p>
            <div className="hero-graphical">
              <div className="hero-graphical__halo" />
              <div className="hero-graphical__frame">
                <span>GeoAI</span>
                <strong>Biomass intelligence</strong>
                <p>Detection, prediction, and potential, composed into one public research platform.</p>
              </div>
            </div>
            <div className="panel-grid">
              {metrics.map((metric) => (
                <MetricCard key={metric.value} {...metric} />
              ))}
            </div>
          </aside>
        </section>

        <section className="section section--research" id="research">
          <SectionHeading
            eyebrow={siteContent.research.eyebrow}
            title={siteContent.research.title}
            description={siteContent.research.description}
          />

          <div className="research-grid">
            {siteContent.research.cards.map((card) => (
              <EditorialCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </section>

        <section className="section" id="pipeline">
          <SectionHeading
            eyebrow="Workflow"
            title="Three-stage GeoAI pipeline"
            description="This layout keeps the story simple: detect current biomass assets, predict how they behave, then map their wider potential."
          />

          <div className="stage-grid">
            {stages.map((stage) => (
              <StageCard key={stage.step} {...stage} />
            ))}
          </div>
        </section>

        <section className="section section--mission">
          <div className="mission-layout">
            <div>
              <p className="eyebrow">{siteContent.mission.eyebrow}</p>
              <h2>{siteContent.mission.title}</h2>
            </div>
            <p className="mission-text">{siteContent.mission.text}</p>
          </div>
        </section>

        <section className="section section--spotlight" id="editable-spots">
          <SectionHeading
            eyebrow="Editable spots"
            title={spotlight.heading}
            description={spotlight.text}
          />

          <div className="spotlight-grid">
            <article className="spotlight-card">
              <h3>Branding</h3>
              <p>
                Change the name, tagline, hero copy, and footer text in{' '}
                <code>src/data/siteContent.ts</code>.
              </p>
            </article>
            <article className="spotlight-card">
              <h3>Content</h3>
              <p>
                Swap the stage titles, bullets, and descriptions without touching the page layout.
              </p>
            </article>
            <article className="spotlight-card">
              <h3>Visuals</h3>
              <p>
                Edit <code>src/styles/global.css</code> to update color, spacing, and typography.
              </p>
            </article>
          </div>
        </section>

        <div id="interactive">
          <PotentialEstimator copy={siteContent.estimator} />
        </div>
      </main>

      <footer className="footer">
        <p>{footer.note}</p>
        <p>{footer.contact}</p>
      </footer>
    </div>
  );
}
