const navLinks = [
  { href: '#lab', label: 'The Lab' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#resources', label: 'Resources' },
];

const researchCards = [
  {
    title: 'GeoAI systems',
    body: 'We combine geospatial machine learning, multimodal imagery, and uncertainty-aware modelling to turn landscape signals into research-grade intelligence.',
  },
  {
    title: 'Remote sensing',
    body: 'Satellite data are used alongside field observations, spatial priors, and environmental covariates to detect change across seasons and years.',
  },
  {
    title: 'Earth system change',
    body: 'Our work links biomass, ecosystems, and land change to climate, policy, and land management questions that span local to regional scales.',
  },
];

const publicationCards = [
  {
    title: 'Articles and preprints',
    body: 'A curated space for journal papers, working papers, and early releases from the lab.',
  },
  {
    title: 'Talks and posters',
    body: 'Conference slides, workshop posters, and presentation materials for academic and public audiences.',
  },
  {
    title: 'Reports and briefs',
    body: 'Short-form outputs for collaborators, funders, and decision-makers working on environmental change.',
  },
];

const resourceCards = [
  {
    title: 'Datasets',
    body: 'Links to satellite scenes, geospatial layers, field observations, and derived environmental products.',
  },
  {
    title: 'Code and notebooks',
    body: 'Reusable tools, analysis notebooks, and model pipelines supporting reproducible research.',
  },
  {
    title: 'Methods',
    body: 'Documentation for training data, evaluation, lab workflows, and data provenance.',
  },
];

function Card({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <article className="eil-card">
      <p className="eil-card__eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export function App() {
  return (
    <div className="eil-app">
      <style>{styles}</style>

      <header className="eil-header">
        <div className="eil-header__inner">
          <a className="eil-brand" href="#top" aria-label="Environmental Intelligence Labs home">
            <span className="eil-brand__mark">EIL</span>
            <span className="eil-brand__copy">
              <strong>Environmental Intelligence Labs</strong>
              <span>GeoAI, Remote Sensing &amp; Earth System Change</span>
            </span>
          </a>

          <nav className="eil-nav" aria-label="Primary">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="eil-nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <a className="eil-nav__cta" href="#join">
            JOIN THE LAB
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="eil-hero">
          <div className="eil-hero__backdrop" aria-hidden="true">
            <span className="eil-hero__orb eil-hero__orb--one" />
            <span className="eil-hero__orb eil-hero__orb--two" />
            <span className="eil-hero__orb eil-hero__orb--three" />
            <span className="eil-hero__grid" />
            <span className="eil-hero__scan" />
          </div>

          <div className="eil-shell eil-hero__inner">
            <p className="eil-eyebrow">Environmental Intelligence Labs</p>
            <h1>Environmental intelligence for a changing planet</h1>
            <p className="eil-hero__lede">
              We develop satellite AI, geospatial modelling, and environmental analytics to understand biomass,
              ecosystems, and land change across space and time.
            </p>

            <div className="eil-hero__actions">
              <a className="eil-btn eil-btn--primary" href="#join">
                JOIN THE LAB
              </a>
              <a className="eil-btn eil-btn--secondary" href="#research">
                Explore research
              </a>
            </div>

            <ul className="eil-pillrow" aria-label="Research keywords">
              <li>Satellite AI</li>
              <li>GeoAI</li>
              <li>Biomass intelligence</li>
              <li>Land change analysis</li>
            </ul>
          </div>
        </section>

        <section id="lab" className="eil-section">
          <div className="eil-section__head">
            <p className="eil-eyebrow">The Lab</p>
            <h2>Research built like a publication front page.</h2>
            <p>
              The site is intentionally restrained: a clean academic frame, a strong hierarchy, and enough room for the
              research story to breathe.
            </p>
          </div>

          <div className="eil-introgrid">
            <article className="eil-introcard">
              <p className="eil-card__eyebrow">Practice</p>
              <h3>Environmental intelligence as a scientific workflow.</h3>
              <p>
                We bring together remote sensing, geospatial AI, and environmental modelling to study change across
                landscapes, seasons, and policy contexts.
              </p>
            </article>

            <article className="eil-introcard eil-introcard--accent">
              <p className="eil-card__eyebrow">Focus</p>
              <h3>From biomass to ecosystems to earth system change.</h3>
              <p>
                The lab frames biomass, ecosystem condition, and land transformation as linked questions that benefit
                from spatial evidence and transparent methods.
              </p>
            </article>
          </div>
        </section>

        <section id="research" className="eil-section">
          <div className="eil-section__head">
            <p className="eil-eyebrow">Research</p>
            <h2>Three pillars guide the lab.</h2>
            <p>
              The structure mirrors the reference hierarchy while reinterpreting it for an environmental AI research
              group.
            </p>
          </div>

          <div className="eil-grid eil-grid--three">
            {researchCards.map((card) => (
              <Card key={card.title} eyebrow="Research theme" title={card.title} body={card.body} />
            ))}
          </div>
        </section>

        <section id="publications" className="eil-section">
          <div className="eil-section__head">
            <p className="eil-eyebrow">Publications</p>
            <h2>Outputs, evidence, and academic visibility.</h2>
            <p>
              A simple layout for papers and project outputs that keeps the page readable now and easy to expand later.
            </p>
          </div>

          <div className="eil-grid eil-grid--three">
            {publicationCards.map((card) => (
              <Card key={card.title} eyebrow="Publications" title={card.title} body={card.body} />
            ))}
          </div>
        </section>

        <section id="resources" className="eil-section">
          <div className="eil-section__head">
            <p className="eil-eyebrow">Resources</p>
            <h2>Shared materials for collaborators and visitors.</h2>
            <p>
              Datasets, code, and methods can live here without changing the visual rhythm of the homepage.
            </p>
          </div>

          <div className="eil-grid eil-grid--three">
            {resourceCards.map((card) => (
              <Card key={card.title} eyebrow="Resources" title={card.title} body={card.body} />
            ))}
          </div>
        </section>

        <section id="join" className="eil-join">
          <div>
            <p className="eil-eyebrow">Join the lab</p>
            <h2>Help shape environmental intelligence for the next decade.</h2>
            <p>
              Add your application details, contact email, or recruitment link here. The section is designed to feel
              like a clear academic call to action rather than a marketing banner.
            </p>
          </div>

          <a className="eil-btn eil-btn--primary" href="mailto:hello@environmentalintelligencelabs.org">
            JOIN THE LAB
          </a>
        </section>
      </main>

      <footer className="eil-footer">
        <p>Environmental Intelligence Labs</p>
        <p>GeoAI, Remote Sensing &amp; Earth System Change</p>
      </footer>
    </div>
  );
}

const styles = `
  :root {
    color-scheme: light;
    --bg: #f4efe6;
    --bg-soft: #f8f5ee;
    --panel: rgba(255, 255, 255, 0.86);
    --panel-strong: rgba(255, 255, 255, 0.96);
    --text: #171614;
    --muted: #5b554b;
    --line: rgba(23, 22, 20, 0.12);
    --line-strong: rgba(23, 22, 20, 0.2);
    --accent: #496349;
    --accent-2: #8a6a3d;
    --shadow: 0 24px 60px rgba(44, 39, 28, 0.11);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    color: var(--text);
    font-family: Arial, Helvetica, sans-serif;
    background:
      radial-gradient(circle at 12% 10%, rgba(73, 99, 73, 0.1), transparent 22%),
      radial-gradient(circle at 82% 12%, rgba(138, 106, 61, 0.11), transparent 20%),
      linear-gradient(180deg, #fcfaf5 0%, var(--bg) 56%, #efe7d8 100%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  h1,
  h2,
  h3 {
    font-family: Georgia, 'Times New Roman', serif;
    line-height: 0.95;
    letter-spacing: -0.03em;
  }

  h1 {
    font-size: clamp(3.5rem, 8vw, 7rem);
    font-weight: 600;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3.4rem);
    font-weight: 600;
  }

  h3 {
    font-size: clamp(1.55rem, 2.5vw, 2rem);
    font-weight: 600;
  }

  p {
    line-height: 1.75;
  }

  #root {
    min-height: 100vh;
  }

  .eil-app {
    width: min(100%, 1440px);
    margin: 0 auto;
    padding: 16px 16px 28px;
  }

  .eil-shell {
    width: min(100%, 1160px);
    margin: 0 auto;
  }

  .eil-header {
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 12px 0 14px;
    margin-bottom: 8px;
    background: linear-gradient(180deg, rgba(252, 250, 245, 0.98), rgba(252, 250, 245, 0.82));
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
  }

  .eil-header__inner {
    width: min(100%, 1160px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .eil-brand {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
  }

  .eil-brand__mark {
    display: grid;
    place-items: center;
    flex: none;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    border: 1px solid var(--line-strong);
    background: linear-gradient(135deg, rgba(73, 99, 73, 0.12), rgba(255, 255, 255, 0.96));
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
  }

  .eil-brand__copy {
    display: grid;
    min-width: 0;
  }

  .eil-brand__copy strong {
    font-size: 0.98rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .eil-brand__copy span {
    margin-top: 3px;
    color: var(--muted);
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .eil-nav {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .eil-nav__link {
    padding: 10px 14px;
    border-radius: 999px;
    color: var(--muted);
    font-size: 0.95rem;
    transition: transform 160ms ease, background 160ms ease, color 160ms ease;
  }

  .eil-nav__link:hover {
    color: var(--text);
    background: rgba(73, 99, 73, 0.08);
    transform: translateY(-1px);
  }

  .eil-nav__cta,
  .eil-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0 18px;
    border-radius: 999px;
    border: 1px solid var(--line-strong);
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, color 160ms ease;
  }

  .eil-nav__cta,
  .eil-btn--primary {
    background: #111111;
    color: #ffffff;
    box-shadow: 0 10px 22px rgba(17, 17, 17, 0.16);
  }

  .eil-nav__cta:hover,
  .eil-btn:hover {
    transform: translateY(-1px);
  }

  .eil-btn--secondary {
    background: rgba(255, 255, 255, 0.78);
    color: var(--text);
  }

  .eil-hero {
    position: relative;
    overflow: hidden;
    min-height: min(86vh, 920px);
    display: grid;
    place-items: center;
    padding: 52px 0 44px;
    border-radius: 36px;
    border: 1px solid rgba(23, 22, 20, 0.1);
    background:
      radial-gradient(circle at 22% 24%, rgba(73, 99, 73, 0.15), transparent 22%),
      radial-gradient(circle at 78% 18%, rgba(138, 106, 61, 0.15), transparent 24%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(248, 244, 236, 0.96));
    box-shadow: var(--shadow);
  }

  .eil-hero__backdrop {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .eil-hero__grid {
    position: absolute;
    inset: -2%;
    opacity: 0.55;
    background-image:
      linear-gradient(rgba(23, 22, 20, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(23, 22, 20, 0.07) 1px, transparent 1px);
    background-size: 84px 84px;
    mask-image: radial-gradient(circle at center, black 30%, transparent 88%);
  }

  .eil-hero__scan {
    position: absolute;
    inset: 0;
    opacity: 0.55;
    background:
      radial-gradient(circle at 38% 56%, rgba(73, 99, 73, 0.2), transparent 15%),
      radial-gradient(circle at 62% 38%, rgba(138, 106, 61, 0.18), transparent 18%),
      radial-gradient(circle at 57% 60%, rgba(25, 31, 26, 0.16), transparent 30%);
    mix-blend-mode: multiply;
  }

  .eil-hero__orb {
    position: absolute;
    border-radius: 999px;
    filter: blur(2px);
  }

  .eil-hero__orb--one {
    width: 26rem;
    height: 26rem;
    left: -7rem;
    top: -6rem;
    background: radial-gradient(circle, rgba(73, 99, 73, 0.24), transparent 68%);
  }

  .eil-hero__orb--two {
    width: 32rem;
    height: 32rem;
    right: -10rem;
    top: 4rem;
    background: radial-gradient(circle, rgba(138, 106, 61, 0.2), transparent 64%);
  }

  .eil-hero__orb--three {
    width: 24rem;
    height: 24rem;
    right: 16%;
    bottom: -10rem;
    background: radial-gradient(circle, rgba(23, 22, 20, 0.12), transparent 70%);
  }

  .eil-hero__inner {
    position: relative;
    z-index: 1;
    width: min(100%, 920px);
    text-align: center;
    padding: 30px 24px;
  }

  .eil-eyebrow,
  .eil-card__eyebrow {
    color: var(--accent);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .eil-eyebrow {
    margin-bottom: 16px;
  }

  .eil-hero h1 {
    max-width: 11ch;
    margin: 0 auto;
  }

  .eil-hero__lede {
    max-width: 62ch;
    margin: 18px auto 0;
    font-size: clamp(1.05rem, 1.6vw, 1.24rem);
    color: var(--muted);
  }

  .eil-hero__actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  .eil-pillrow {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 26px 0 0;
  }

  .eil-pillrow li {
    padding: 9px 12px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    color: var(--text);
    font-size: 0.94rem;
  }

  .eil-section {
    padding: 42px 0 0;
  }

  .eil-section__head {
    max-width: 760px;
    margin-bottom: 24px;
  }

  .eil-section__head h2 {
    margin-top: 12px;
  }

  .eil-section__head p:last-child {
    max-width: 70ch;
    margin-top: 12px;
    color: var(--muted);
    font-size: 1.03rem;
  }

  .eil-introgrid,
  .eil-grid {
    display: grid;
    gap: 18px;
  }

  .eil-introgrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .eil-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .eil-card,
  .eil-introcard,
  .eil-join {
    border: 1px solid var(--line);
    background: var(--panel);
    box-shadow: var(--shadow);
  }

  .eil-card,
  .eil-introcard {
    border-radius: 24px;
    padding: 22px;
  }

  .eil-card h3,
  .eil-introcard h3 {
    margin-top: 12px;
  }

  .eil-card p,
  .eil-introcard p {
    margin-top: 12px;
    color: var(--muted);
  }

  .eil-introcard--accent {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(245, 240, 228, 0.98)),
      radial-gradient(circle at top right, rgba(73, 99, 73, 0.12), transparent 28%);
  }

  .eil-join {
    margin-top: 42px;
    padding: 24px;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 22px;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(243, 238, 228, 0.98)),
      radial-gradient(circle at 18% 20%, rgba(73, 99, 73, 0.12), transparent 26%);
  }

  .eil-join h2 {
    max-width: 12ch;
    margin-top: 12px;
  }

  .eil-join p:last-child {
    max-width: 64ch;
    margin-top: 12px;
    color: var(--muted);
  }

  .eil-footer {
    width: min(100%, 1160px);
    margin: 22px auto 0;
    padding-top: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 14px;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 0.95rem;
  }

  @media (max-width: 1100px) {
    .eil-header__inner,
    .eil-join {
      flex-direction: column;
      align-items: flex-start;
    }

    .eil-nav {
      justify-content: flex-start;
    }

    .eil-nav__cta {
      align-self: flex-start;
    }

    .eil-grid--three,
    .eil-introgrid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .eil-app {
      padding: 10px 10px 22px;
    }

    .eil-header {
      position: static;
      padding-top: 8px;
    }

    .eil-header__inner {
      gap: 12px;
    }

    .eil-brand__copy strong,
    .eil-brand__copy span {
      white-space: normal;
    }

    .eil-nav {
      gap: 4px;
    }

    .eil-nav__link {
      padding: 9px 11px;
      font-size: 0.92rem;
    }

    .eil-hero {
      min-height: auto;
      padding: 28px 0 30px;
      border-radius: 28px;
    }

    .eil-hero__inner {
      padding: 14px 16px;
    }

    .eil-hero h1 {
      max-width: 12ch;
    }

    .eil-hero__lede {
      font-size: 1rem;
    }

    .eil-section {
      padding-top: 34px;
    }

    .eil-grid--three,
    .eil-introgrid {
      grid-template-columns: 1fr;
    }

    .eil-join {
      padding: 22px;
    }
  }
`;
