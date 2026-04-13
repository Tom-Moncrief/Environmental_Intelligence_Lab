import { MetricCard } from './components/MetricCard';
import { PotentialEstimator } from './components/PotentialEstimator';
import { SectionHeading } from './components/SectionHeading';
import { StageCard } from './components/StageCard';
import { siteContent } from './data/siteContent';

export function App() {
  const { brand, hero, metrics, stages, spotlight, footer } = siteContent;

  return (
    <div className="page-shell">
      <div className="page-glow page-glow--left" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />

      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">{brand.shortName}</span>
          <div>
            <p className="brand-name">{brand.name}</p>
            <p className="brand-tagline">{brand.tagline}</p>
          </div>
        </div>

        <a className="topbar-link" href="#pipeline">
          View pipeline
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
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

          <aside className="hero-panel" aria-label="Project snapshot">
            <p className="panel-label">Project Snapshot</p>
            <div className="panel-grid">
              {metrics.map((metric) => (
                <MetricCard key={metric.value} {...metric} />
              ))}
            </div>
          </aside>
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

        <PotentialEstimator copy={siteContent.estimator} />
      </main>

      <footer className="footer">
        <p>{footer.note}</p>
        <p>{footer.contact}</p>
      </footer>
    </div>
  );
}
