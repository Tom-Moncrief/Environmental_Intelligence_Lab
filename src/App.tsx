const navLinks = [
  { href: '#lab', label: 'The Lab' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#resources', label: 'Resources' },
];

const researchThemes = [
  {
    title: 'Satellite AI',
    body: 'Foundation models, remote sensing embeddings, and geospatial machine learning for environmental understanding.',
  },
  {
    title: 'Biomass and ecosystems',
    body: 'Biomass estimation, canopy structure, forest condition, and ecosystem monitoring across space and time.',
  },
  {
    title: 'Earth system change',
    body: 'Land change, climate analytics, and decision-support tools for environmental research and policy.',
  },
];

const outputCards = [
  {
    title: 'Publications',
    body: 'Selected papers, preprints, conference talks, and lab outputs presented in a clean editorial format.',
  },
  {
    title: 'Resources',
    body: 'Datasets, code, methods notes, and visual materials for collaborators and visitors.',
  },
  {
    title: 'Join the lab',
    body: 'A clear recruitment and contact section for students, researchers, and collaborators.',
  },
];

export function App() {
  return (
    <div className="eil-page">
      <style>{styles}</style>

      <header className="eil-header">
        <div className="eil-shell eil-header__inner">
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

          <a className="eil-cta" href="#join">
            JOIN THE LAB
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="eil-hero">
          <div className="eil-hero__backdrop" aria-hidden="true">
            <div className="eil-hero__image" />
            <div className="eil-hero__veil" />
            <div className="eil-hero__scanlines" />
          </div>

          <div className="eil-shell eil-hero__inner">
            <p className="eil-kicker">Environmental Intelligence Labs</p>
            <h1>Environmental intelligence for a changing planet</h1>
            <p className="eil-lede">
              We develop satellite AI, geospatial modelling, and environmental analytics to understand biomass,
              ecosystems, and land change across space and time.
            </p>

            <div className="eil-actions">
              <a className="eil-button eil-button--contact" href="#join">
                JOIN THE LAB
              </a>
              <a className="eil-button eil-button--light" href="#research">
                Explore research
              </a>
            </div>

            <ul className="eil-tags" aria-label="Research keywords">
              <li>Satellite AI</li>
              <li>GeoAI</li>
              <li>Remote sensing</li>
              <li>Land change</li>
            </ul>
          </div>
        </section>

        <section id="lab" className="eil-section">
          <div className="eil-shell">
            <div className="eil-section__head">
              <p className="eil-kicker">The Lab</p>
              <h2>Modern academic design with a restrained environmental palette.</h2>
              <p>
                The composition is intentionally minimal: white header, black CTA, strong centered hero, and calm
                editorial spacing inspired by a research lab homepage.
              </p>
            </div>

            <div className="eil-split">
              <article className="eil-card eil-card--large">
                <p className="eil-card__eyebrow">Mission</p>
                <h3>Geospatial AI for understanding environmental change.</h3>
                <p>
                  The lab combines remote sensing, machine learning, and scientific modelling to study biomass,
                  ecosystems, and Earth system change with clarity and rigour.
                </p>
              </article>

              <article className="eil-card eil-card--accent">
                <p className="eil-card__eyebrow">Approach</p>
                <h3>Scientific, editorial, and easy to scan.</h3>
                <p>
                  The layout follows the visual hierarchy of the reference while remaining original and tailored to
                  Environmental Intelligence Labs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="research" className="eil-section">
          <div className="eil-shell">
            <div className="eil-section__head">
              <p className="eil-kicker">Research</p>
              <h2>Three pillars guide the lab.</h2>
              <p>
                Each theme is written as a compact, publication-style card to keep the page sharp and disciplined.
              </p>
            </div>

            <div className="eil-grid eil-grid--three">
              {researchThemes.map((item) => (
                <article className="eil-card" key={item.title}>
                  <p className="eil-card__eyebrow">Research theme</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="eil-section">
          <div className="eil-shell">
            <div className="eil-section__head">
              <p className="eil-kicker">Publications</p>
              <h2>Outputs, evidence, and academic visibility.</h2>
              <p>
                A simple, ordered space for articles, talks, and reports that can grow without changing the layout.
              </p>
            </div>

            <div className="eil-grid eil-grid--three">
              {outputCards.slice(0, 2).map((item) => (
                <article className="eil-card" key={item.title}>
                  <p className="eil-card__eyebrow">Lab output</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="eil-section">
          <div className="eil-shell">
            <div className="eil-section__head">
              <p className="eil-kicker">Resources</p>
              <h2>Shared materials for collaborators and visitors.</h2>
              <p>
                Datasets, code, and methods can live here while the visual rhythm stays consistent across the page.
              </p>
            </div>

            <div className="eil-grid eil-grid--three">
              {outputCards.map((item) => (
                <article className="eil-card" key={item.title}>
                  <p className="eil-card__eyebrow">Resources</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="eil-join">
          <div className="eil-shell eil-join__inner">
            <div>
              <p className="eil-kicker">Join the lab</p>
              <h2>Help shape environmental intelligence for the next decade.</h2>
              <p>
                Add your recruitment details, contact link, or application instructions here. The section is designed
                to read like an academic call to action, not a marketing banner.
              </p>
            </div>

            <a className="eil-button eil-button--contact" href="mailto:hello@environmentalintelligencelabs.org">
              JOIN THE LAB
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
  :root {
    color-scheme: light;
    --bg: #d6f8d6;
    --paper: rgba(127, 198, 164, 0.14);
    --paper-strong: rgba(127, 198, 164, 0.22);
    --text: #55505c;
    --muted: #5d737e;
    --line: rgba(85, 80, 92, 0.12);
    --line-strong: rgba(85, 80, 92, 0.2);
    --accent: #7fc6a4;
    --charcoal: #55505c;
    --highlight: #faf33e;
    --shadow: 0 24px 64px rgba(61, 88, 82, 0.12);
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
    font-family: 'Source Sans 3', Arial, Helvetica, sans-serif;
    background:
      radial-gradient(circle at 12% 10%, rgba(127, 198, 164, 0.16), transparent 22%),
      radial-gradient(circle at 82% 12%, rgba(250, 243, 62, 0.14), transparent 20%),
      linear-gradient(180deg, #e6fbe6 0%, var(--bg) 56%, #c9efc9 100%);
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
    font-family: 'Cormorant Garamond', Georgia, serif;
    line-height: 0.95;
    letter-spacing: -0.03em;
    color: var(--charcoal);
  }

  h1 {
    font-size: clamp(3.6rem, 7vw, 7.2rem);
    font-weight: 600;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 600;
  }

  h3 {
    font-size: clamp(1.55rem, 2.6vw, 2rem);
    font-weight: 600;
  }

  p {
    line-height: 1.75;
  }

  #root {
    min-height: 100vh;
  }

  .eil-page {
    min-height: 100vh;
  }

  .eil-shell {
    width: min(100%, 1160px);
    margin: 0 auto;
  }

  .eil-header {
    position: sticky;
    top: 0;
    z-index: 30;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.88));
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
  }

  .eil-header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 14px 0 16px;
  }

  .eil-brand {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
  }

  .eil-brand__mark {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    border: 1px solid var(--line-strong);
    background: linear-gradient(135deg, rgba(127, 198, 164, 0.18), rgba(255, 255, 255, 0.96));
    color: var(--charcoal);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    flex: none;
  }

  .eil-brand__copy {
    display: grid;
    min-width: 0;
  }

  .eil-brand__copy strong {
    font-size: 0.98rem;
    font-weight: 700;
  }

  .eil-brand__copy span {
    margin-top: 3px;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .eil-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .eil-nav__link {
    padding: 9px 12px;
    border-radius: 999px;
    color: var(--muted);
    font-size: 0.95rem;
    transition: transform 160ms ease, color 160ms ease, background 160ms ease;
  }

  .eil-nav__link:hover {
    color: var(--text);
    background: rgba(127, 198, 164, 0.18);
    transform: translateY(-1px);
  }

  .eil-cta,
  .eil-button {
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

  .eil-cta,
  .eil-button--contact {
    background: var(--highlight);
    color: var(--charcoal);
    box-shadow: 0 10px 22px rgba(85, 80, 92, 0.18);
  }

  .eil-button--light {
    background: rgba(255, 255, 255, 0.9);
    color: var(--charcoal);
  }

  .eil-cta:hover,
  .eil-button:hover {
    transform: translateY(-1px);
  }

  .eil-hero {
    position: relative;
    overflow: hidden;
    min-height: min(88vh, 940px);
    display: grid;
    place-items: center;
    border-radius: 36px;
    margin: 16px auto 0;
    border: 1px solid rgba(23, 22, 20, 0.1);
    box-shadow: var(--shadow);
  }

  .eil-hero__backdrop {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .eil-hero__image {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.3)),
      url('/Figures/Homepage.jpg') center center / cover no-repeat;
    transform: scale(1.01);
  }

  .eil-hero__veil {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 50% 44%, rgba(255, 255, 255, 0.2), transparent 22%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.48) 62%, rgba(214, 248, 214, 0.94));
  }

  .eil-hero__scanlines {
    position: absolute;
    inset: 0;
    opacity: 0.38;
    background-image:
      linear-gradient(rgba(85, 80, 92, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(85, 80, 92, 0.06) 1px, transparent 1px);
    background-size: 82px 82px;
    mask-image: radial-gradient(circle at center, black 22%, transparent 78%);
  }

  .eil-hero__inner {
    position: relative;
    z-index: 1;
    width: min(100%, 920px);
    padding: 34px 24px;
    text-align: center;
  }

  .eil-kicker,
  .eil-card__eyebrow {
    color: var(--charcoal);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .eil-kicker {
    margin-bottom: 16px;
  }

  .eil-hero h1 {
    max-width: 11ch;
    margin: 0 auto;
  }

  .eil-lede {
    max-width: 62ch;
    margin: 18px auto 0;
    color: var(--muted);
    font-size: clamp(1.05rem, 1.6vw, 1.22rem);
  }

  .eil-actions {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 28px;
  }

  .eil-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    margin: 26px 0 0;
    list-style: none;
  }

  .eil-tags li {
    padding: 9px 12px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.82);
    font-size: 0.94rem;
  }

  .eil-section {
    padding: 48px 0 0;
  }

  .eil-section__head {
    max-width: 760px;
    margin-bottom: 24px;
  }

  .eil-section__head h2 {
    margin-top: 12px;
  }

  .eil-section__head p:last-child {
    margin-top: 12px;
    color: var(--muted);
    font-size: 1.04rem;
    max-width: 70ch;
  }

  .eil-grid,
  .eil-split {
    display: grid;
    gap: 18px;
  }

  .eil-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .eil-split {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .eil-card {
    padding: 22px;
    border-radius: 24px;
    border: 1px solid var(--line);
    background: var(--paper);
    box-shadow: var(--shadow);
  }

  .eil-card--accent {
    background:
      linear-gradient(180deg, rgba(127, 198, 164, 0.18), rgba(214, 248, 214, 0.96)),
      radial-gradient(circle at top right, rgba(127, 198, 164, 0.16), transparent 28%);
  }

  .eil-card h3 {
    margin-top: 12px;
  }

  .eil-card p {
    margin-top: 12px;
    color: var(--muted);
  }

  .eil-join {
    margin-top: 48px;
    padding: 26px 0;
    border-top: 1px solid var(--line);
    background:
      linear-gradient(135deg, rgba(127, 198, 164, 0.16), rgba(214, 248, 214, 0.96)),
      radial-gradient(circle at 18% 20%, rgba(127, 198, 164, 0.14), transparent 26%);
  }

  .eil-join__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 22px;
  }

  .eil-join h2 {
    max-width: 12ch;
    margin-top: 12px;
  }

  .eil-join p {
    max-width: 66ch;
    margin-top: 12px;
    color: var(--muted);
  }

  @media (max-width: 1100px) {
    .eil-header__inner,
    .eil-join__inner {
      flex-direction: column;
      align-items: flex-start;
    }

    .eil-nav {
      justify-content: flex-start;
    }

    .eil-cta {
      align-self: flex-start;
    }

    .eil-grid--three,
    .eil-split {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .eil-header {
      position: static;
    }

    .eil-header__inner {
      padding: 12px 0 14px;
    }

    .eil-hero {
      min-height: auto;
      border-radius: 28px;
      margin-top: 10px;
    }

    .eil-hero__inner {
      padding: 18px 16px 28px;
    }

    .eil-hero h1 {
      max-width: 12ch;
    }

    .eil-section {
      padding-top: 36px;
    }

    .eil-grid--three,
    .eil-split {
      grid-template-columns: 1fr;
    }
  }
`;
