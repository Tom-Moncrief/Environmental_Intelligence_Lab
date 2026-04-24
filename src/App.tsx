import { useEffect, useMemo, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

type PageName = 'Home' | 'People' | 'Research' | 'Research Detail' | 'Publications' | 'Interactive Resources';

type Palette = {
  mint: string;
  teal: string;
  slate: string;
  charcoal: string;
  yellow: string;
  white: string;
};

type PageShellProps = {
  palette: Palette;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

type InfoCardProps = {
  palette: Palette;
  title: string;
  text: string;
  tone: 'mint' | 'teal';
};

type ResearchProject = {
  id: string;
  label: string;
  title: string;
  summary: string;
  focus: string;
  methods: string;
  applications: string;
};

const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'research-01',
    label: 'Research 01',
    title: 'Using satellite foundation models for biomass estimation and ecosystem monitoring.',
    summary: 'Using AlphaEarth satellite embeddings to predict and analyse biomass in tropical rainforests.',
    focus: 'Satellite foundation models, biomass estimation, tropical rainforest monitoring',
    methods: 'AlphaEarth embeddings, downstream modelling, remote sensing analysis, geospatial AI',
    applications: 'Biomass prediction, ecosystem monitoring, tropical forest assessment',
  },
  {
    id: 'research-02',
    label: 'Research 02',
    title: 'Biomass estimation, canopy structure, and ecosystem monitoring',
    summary:
      'Investigating how vegetation structure and biomass patterns can be modelled from spatial data across ecosystems.',
    focus: 'Canopy structure, biomass dynamics, ecosystem condition',
    methods: 'Remote sensing, structural metrics, environmental modelling',
    applications: 'Forest condition mapping, ecological monitoring, habitat assessment',
  },
  {
    id: 'research-03',
    label: 'Research 03',
    title: 'Geospatial machine learning for climate and sustainability questions',
    summary:
      'Building machine learning workflows that support environmental decision-making across climate and sustainability challenges.',
    focus: 'Geospatial AI, climate analytics, sustainability science',
    methods: 'Machine learning, spatial data science, predictive modelling',
    applications: 'Climate risk analysis, land systems, environmental intelligence',
  },
  {
    id: 'research-04',
    label: 'Research 04',
    title: 'Interactive scientific tools for environmental understanding',
    summary:
      'Designing digital tools and interactive interfaces that make environmental data easier to explore, explain, and use.',
    focus: 'Scientific communication, interactive analysis, environmental interfaces',
    methods: 'Web tools, visual analytics, human-centred research interfaces',
    applications: 'Public engagement, lab tools, exploratory research platforms',
  },
];

function getPageFromHash(): PageName {
  const raw = window.location.hash.replace(/^#\/?/, '');

  if (raw === 'people') return 'People';
  if (raw === 'research') return 'Research';
  if (raw === 'publications') return 'Publications';
  if (raw === 'resources') return 'Interactive Resources';
  if (raw === 'detail') return 'Research Detail';

  return 'Home';
}

function routeHref(page: Exclude<PageName, 'Research Detail'>) {
  if (page === 'Home') return '#/';
  if (page === 'People') return '#/people';
  if (page === 'Research') return '#/research';
  if (page === 'Publications') return '#/publications';
  return '#/resources';
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageName>(() => getPageFromHash());
  const [selectedResearchId, setSelectedResearchId] = useState<string | null>(null);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const palette: Palette = useMemo(
    () => ({
      mint: '#D6F8D6',
      teal: '#7FC6A4',
      slate: '#5D737E',
      charcoal: '#55505C',
      yellow: '#FAF33E',
      white: '#FFFFFF',
    }),
    [],
  );

  const navItems = useMemo(
    () => [
      { label: 'People', href: routeHref('People'), active: currentPage === 'People' },
      { label: 'Research', href: routeHref('Research'), active: currentPage === 'Research' },
      {
        label: 'Publications',
        href: routeHref('Publications'),
        active: currentPage === 'Publications',
      },
      {
        label: 'Interactive Resources',
        href: routeHref('Interactive Resources'),
        active: currentPage === 'Interactive Resources',
      },
    ],
    [currentPage],
  );

  const pageTitle = currentPage === 'Home' ? 'Environmental Intelligence Labs' : currentPage;

  return (
    <div className="eil-page">
      <style>{styles}</style>
      <SpeedInsights />

      <header className="eil-header">
        <div className="eil-shell eil-header__inner">
          <a className="eil-brand" href={routeHref('Home')} aria-label="Environmental Intelligence Labs home">
            <img
              className="eil-brand__logo"
              src="/Figures/Environmental_intelligence_labs_logo.png"
              alt=""
              aria-hidden="true"
            />
            <span className="eil-brand__copy">
              <strong>Environmental Intelligence</strong>
              <span>Labs</span>
            </span>
          </a>

          <nav className="eil-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.active ? 'eil-nav__link eil-nav__link--active' : 'eil-nav__link'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="eil-header__mobile">{pageTitle}</div>
        </div>
      </header>

      {currentPage === 'Home' && <HomePage palette={palette} />}
      {currentPage === 'People' && <PeoplePage palette={palette} />}
      {currentPage === 'Research' && (
        <ResearchPage
          palette={palette}
          setSelectedResearchId={setSelectedResearchId}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'Research Detail' && (
        <ResearchDetailPage
          palette={palette}
          researchId={selectedResearchId}
          setCurrentPage={setCurrentPage}
          setSelectedResearchId={setSelectedResearchId}
        />
      )}
      {currentPage === 'Publications' && <PublicationsPage palette={palette} />}
      {currentPage === 'Interactive Resources' && <InteractiveResourcesPage palette={palette} />}

      <SiteFooter />
    </div>
  );
}

function HomePage({ palette }: { palette: Palette }) {
  return (
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
            <a className="eil-button eil-button--contact" href="#/people">
              JOIN THE LAB
            </a>
            <a className="eil-button eil-button--light" href="#/research">
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

      <section className="eil-section">
        <div className="eil-shell">
          <div className="eil-section__head">
            <p className="eil-kicker">The Lab</p>
            <h2>Modern academic design with a restrained environmental palette.</h2>
            <p>
              The composition is intentionally minimal: white header, yellow CTA, strong centered hero, and calm
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

      <section className="eil-section">
        <div className="eil-shell">
          <div className="eil-section__head">
            <p className="eil-kicker">Research</p>
            <h2>Three pillars guide the lab.</h2>
            <p>Each theme is written as a compact, publication-style card to keep the page sharp and disciplined.</p>
          </div>

          <div className="eil-grid eil-grid--three">
            {['Satellite AI', 'Biomass and ecosystems', 'Earth system change'].map((title, index) => (
              <article className="eil-card" key={title}>
                <p className="eil-card__eyebrow">Research theme</p>
                <h3>{title}</h3>
                <p>{['Foundation models and embeddings for environmental understanding.', 'Biomass estimation, canopy structure, and ecosystem monitoring across space and time.', 'Land change, climate analytics, and decision-support tools for environmental research and policy.'][index]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eil-section">
        <div className="eil-shell">
          <div className="eil-section__head">
            <p className="eil-kicker">Publications</p>
            <h2>Outputs, evidence, and academic visibility.</h2>
            <p>A simple, ordered space for articles, talks, and reports that can grow without changing the layout.</p>
          </div>

          <div className="eil-grid eil-grid--three">
            {[
              'Selected papers, preprints, conference talks, and lab outputs presented in a clean editorial format.',
              'Datasets, code, methods notes, and visual materials for collaborators and visitors.',
            ].map((body, index) => (
              <article className="eil-card" key={body}>
                <p className="eil-card__eyebrow">Lab output</p>
                <h3>{index === 0 ? 'Publications' : 'Resources'}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

function PeoplePage({ palette }: { palette: Palette }) {
  const primary = {
    name: 'Dr Ce Zhang',
    role: 'MSc (ITC), MSc (Soton), PhD (Lancaster)',
    bio: 'Senior Lecturer in Environmental Data Science at the University of Bristol, specialising in AI-driven geospatial and remote sensing methods to understand and model complex environmental and socio-ecological systems.',
  };

  const teamNotes = [
    'Remote sensing and geospatial AI',
    'Biomass, ecosystems, and land change',
    'Methods that can be published, reused, and explained',
  ];

  const people = [
    {
      name: 'Tom Moncrief',
      role: 'MscR, Postgraduate Researcher',
      focus: 'Geospatial AI and biomass mapping',
      bio: 'Works on satellite embeddings, biomass mapping, and environmental sensing workflows.',
    },
    {
      name: 'Boyi Li',
      role: 'PhD Researcher',
      focus: 'Vision-language models',
      bio: 'Develops vision-language approaches for remote sensing interpretation.',
    },
    {
      name: 'James Brock',
      role: 'PhD Researcher',
      focus: 'Forest change analysis',
      bio: 'Studies how vision-language models can support forest change analysis.',
    },
    {
      name: 'Ziming Wang',
      role: 'PhD Researcher',
      focus: 'Flood mapping and modelling',
      bio: 'Uses geospatial AI to improve flood mapping and modelling workflows.',
    },
    {
      name: 'Yifan Liang',
      role: 'PhD Researcher',
      focus: 'Urban green space and health',
      bio: 'Models green space and mental health using Street View imagery.',
    },
    {
      name: 'Holly Liken',
      role: 'PhD Researcher',
      focus: 'Freshwater ecosystem monitoring',
      bio: 'Applies AI to algal monitoring in freshwater ecosystems.',
    },
  ];

  return (
    <PageShell
      palette={palette}
      eyebrow="People"
      title="The researchers behind the lab"
      intro="A multidisciplinary team working across AI, ecology, remote sensing, and environmental data science."
    >
      <div className="eil-leadership">
        <article className="eil-feature">
          <div className="eil-feature__badge">Lead investigator</div>
          <div className="eil-feature__grid">
            <div className="eil-feature__mark" aria-hidden="true">
              CZ
            </div>
            <div>
              <h2 className="eil-feature__title">{primary.name}</h2>
              <p className="eil-feature__meta">{primary.role}</p>
              <p className="eil-feature__text">{primary.bio}</p>
              <div className="eil-pillrow" aria-label="Research strengths">
                {teamNotes.map((note) => (
                  <span key={note} className="eil-pillrow__pill">
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <aside className="eil-card eil-card--leadership">
          <p className="eil-card__eyebrow">Lab profile</p>
          <h3>What the team is built to do</h3>
          <div className="eil-detail-stack eil-detail-stack--compact">
            <div>
              <span>Core methods</span>
              Satellite AI, spatial modelling, and interpretable environmental analytics.
            </div>
            <div>
              <span>Focus areas</span>
              Biomass, ecosystem condition, flood risk, urban health, and freshwater monitoring.
            </div>
            <div>
              <span>Output style</span>
              Papers, datasets, reproducible workflows, and public-facing tools.
            </div>
          </div>
        </aside>
      </div>

      <div className="eil-grid eil-grid--people">
        {people.map((person) => (
          <article
            key={person.name}
            className="eil-card eil-card--team"
          >
            <div className="eil-card__avatar">
              {person.name
                .split(' ')
                .map((part) => part[0])
                .slice(0, 2)
                .join('')}
            </div>
            <p className="eil-card__eyebrow">{person.focus}</p>
            <h3>{person.name}</h3>
            <p className="eil-card__role">{person.role}</p>
            <p>{person.bio}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function ResearchPage({
  palette,
  setSelectedResearchId,
  setCurrentPage,
}: {
  palette: Palette;
  setSelectedResearchId: (id: string | null) => void;
  setCurrentPage: (page: PageName) => void;
}) {
  return (
    <PageShell
      palette={palette}
      eyebrow="Research"
      title="Core research directions"
      intro="The lab develops computational methods that connect rich Earth data with pressing environmental questions."
    >
      <div className="eil-research-lead">
        <article className="eil-card eil-card--research">
          <p className="eil-card__eyebrow">Research programme</p>
          <h3>From data collection to decision-ready outputs.</h3>
          <p>
            Each project begins with environmental data, moves through interpretable modelling, and ends with a
            public or scientific output that can be reused by collaborators.
          </p>
        </article>

        <aside className="eil-card eil-card--research eil-research-summary">
          <p className="eil-card__eyebrow">What appears here</p>
          <div className="eil-detail-stack eil-detail-stack--compact">
            <div>
              <span>Project pages</span>
              Short case-study pages that can expand into methods, figures, and outputs.
            </div>
            <div>
              <span>Shared methods</span>
              Remote sensing, foundation models, spatial analysis, and reproducible workflows.
            </div>
            <div>
              <span>Intended use</span>
              Clear communication for collaborators, students, funders, and the public.
            </div>
          </div>
        </aside>
      </div>

      <div className="eil-grid eil-grid--research">
        {RESEARCH_PROJECTS.map((project) => (
          <button
            key={project.id}
            onClick={() => {
              setSelectedResearchId(project.id);
              setCurrentPage('Research Detail');
            }}
            className="eil-card eil-card--research"
            type="button"
          >
            <div className="eil-card__eyebrow">{project.label}</div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="eil-card__meta-stack">
              <div>
                <span>Focus</span>
                {project.focus}
              </div>
              <div>
                <span>Methods</span>
                {project.methods}
              </div>
            </div>
            <div className="eil-card__pill">
              Open project page
            </div>
          </button>
        ))}
      </div>
    </PageShell>
  );
}

function ResearchDetailPage({
  palette,
  researchId,
  setCurrentPage,
  setSelectedResearchId,
}: {
  palette: Palette;
  researchId: string | null;
  setCurrentPage: (page: PageName) => void;
  setSelectedResearchId: (id: string | null) => void;
}) {
  const project = RESEARCH_PROJECTS.find((item) => item.id === researchId) ?? RESEARCH_PROJECTS[0];

  return (
    <PageShell palette={palette} eyebrow={project.label} title={project.title} intro={project.summary}>
      <div className="space-y-6">
        <button
          onClick={() => {
            setSelectedResearchId(null);
            setCurrentPage('Research');
          }}
          className="rounded-2xl border px-4 py-2 text-sm font-medium transition hover:opacity-80"
          style={{ borderColor: palette.slate, color: palette.charcoal, backgroundColor: 'rgba(255,255,255,0.7)' }}
          type="button"
        >
          Back to research overview
        </button>

        <div className="eil-grid eil-grid--detail">
          <article className="eil-card eil-card--detail">
            <h2>Project overview</h2>
            <p>{project.summary}</p>
            <p>
              This dedicated page can later expand into a full project case study with figures, methods, datasets,
              collaborators, publications, and interactive outputs.
            </p>
          </article>

          <aside className="eil-card eil-card--detail">
            <h3>Quick details</h3>
            <div className="eil-detail-stack">
              <div>
                <span>Focus</span>
                {project.focus}
              </div>
              <div>
                <span>Methods</span>
                {project.methods}
              </div>
              <div>
                <span>Applications</span>
                {project.applications}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}

function PublicationsPage({ palette }: { palette: Palette }) {
  const publications = [
    {
      year: '2026',
      title: 'Downstream modelling of satellite embeddings for biomass mapping',
      venue: 'ISPRS Journal of Photogrammetry and Remote Sensing',
      type: 'Journal article',
    },
    {
      year: '2025',
      title: 'Environmental foundation models for geospatial monitoring',
      venue: 'Remote Sensing of Environment',
      type: 'Journal article',
    },
    {
      year: '2025',
      title: 'AI methods for ecosystem-scale Earth observation analysis',
      venue: 'Nature Communications',
      type: 'Journal article',
    },
  ];

  return (
    <PageShell
      palette={palette}
      eyebrow="Publications"
      title="Selected papers and outputs"
      intro="A curated record of papers, preprints, and lab outputs presented in a format that is easy to scan and extend."
    >
      <div className="eil-publications-lead">
        <article className="eil-card eil-card--featured-publication">
          <p className="eil-card__eyebrow">Featured output</p>
          <h3>Selected evidence should feel like a reading list, not a document dump.</h3>
          <p>
            Use this area to highlight the most important paper, the latest preprint, or the output you want visitors
            to notice first.
          </p>
          <div className="eil-pillrow">
            <span className="eil-pillrow__pill">Peer-reviewed</span>
            <span className="eil-pillrow__pill">Preprints</span>
            <span className="eil-pillrow__pill">Reports</span>
          </div>
        </article>

        <aside className="eil-card eil-card--list">
          <p className="eil-card__eyebrow">Curation notes</p>
          <div className="eil-detail-stack eil-detail-stack--compact">
            <div>
              <span>Top level</span>
              One featured item and a compact list of selected papers.
            </div>
            <div>
              <span>Future additions</span>
              Posters, talks, datasets, software, and project reports.
            </div>
            <div>
              <span>Best practice</span>
              Add DOI, preprint link, and a short summary when available.
            </div>
          </div>
        </aside>
      </div>

      <div className="eil-list">
        {publications.map((paper) => (
          <article
            key={paper.title}
            className="eil-card eil-card--list"
          >
            <div className="eil-list__row">
              <div>
                <p className="eil-card__eyebrow">{paper.year}</p>
                <h3>{paper.title}</h3>
                <p className="eil-card__tag">{paper.type}</p>
                <p className="eil-card__meta">{paper.venue}</p>
              </div>
              <button className="eil-card__button" type="button">
                View paper
              </button>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function InteractiveResourcesPage({ palette }: { palette: Palette }) {
  const resources = [
    {
      title: 'Interactive biomass explorer',
      description: 'A future map-based interface for exploring predictions, uncertainty, and landscape variation.',
      label: 'Map interface',
    },
    {
      title: 'Research visualisations',
      description: 'Figures, dashboards, and exploratory scientific interfaces for environmental data.',
      label: 'Visual analytics',
    },
    {
      title: 'Teaching and lab resources',
      description: 'Accessible explainers, demos, and material for collaborators, students, and visitors.',
      label: 'Reference material',
    },
  ];

  return (
    <PageShell
      palette={palette}
      eyebrow="Interactive Resources"
      title="Tools, visualisations, and public-facing resources"
      intro="A space for interactive scientific communication, exploratory tools, and environmental data experiences."
    >
      <div className="eil-resources-lead">
        <article className="eil-card eil-card--resource eil-card--resource--featured">
          <p className="eil-card__eyebrow">Resource hub</p>
          <h3>Build a public layer around the science.</h3>
          <p>
            This section works best when it holds a small set of intentional tools: a map, a dashboard, a data note,
            and a link to documentation or code.
          </p>
        </article>

        <aside className="eil-card eil-card--resource">
          <p className="eil-card__eyebrow">Suggested structure</p>
          <div className="eil-detail-stack eil-detail-stack--compact">
            <div>
              <span>Interactive</span>
              Map viewers, calculators, and scenario explorers.
            </div>
            <div>
              <span>Explain</span>
              Short notes that translate methods for non-specialists.
            </div>
            <div>
              <span>Share</span>
              Data downloads, code repositories, and citations.
            </div>
          </div>
        </aside>
      </div>

      <div className="eil-grid eil-grid--resources">
        {resources.map((resource) => (
          <article
            key={resource.title}
            className="eil-card eil-card--resource"
          >
            <div className="eil-resource__figure" aria-hidden="true" />
            <p className="eil-card__eyebrow">{resource.label}</p>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function PageShell({ palette, eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="eil-page-shell">
      <section className="eil-page-hero">
        <div className="eil-page-hero__overlay" aria-hidden="true" />
        <div className="eil-shell eil-page-hero__inner">
          <p className="eil-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <div className="eil-shell eil-page-body">
        <div className="eil-page-content">{children}</div>
      </div>
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="eil-footer" aria-label="Site footer">
      <div className="eil-shell eil-footer__inner">
        <div className="eil-footer__brand">
          <p className="eil-kicker">Environmental Intelligence Labs</p>
          <h2>Contact the lab</h2>
          <p>
            Environmental Intelligence Labs, University of Bristol, Bristol, UK.
          </p>
        </div>

        <div className="eil-footer__contact">
          <div>
            <span>Email</span>
            <a href="mailto:hello@environmentalintelligencelabs.org">hello@environmentalintelligencelabs.org</a>
          </div>
          <div>
            <span>Research areas</span>
            <p>GeoAI, biomass mapping, remote sensing, and environmental data science.</p>
          </div>
        </div>

        <div className="eil-footer__links">
          <a href="#/people">People</a>
          <a href="#/research">Research</a>
          <a href="#/publications">Publications</a>
          <a href="#/resources">Interactive Resources</a>
        </div>
      </div>
    </footer>
  );
}

function InfoCard({ palette, title, text, tone }: InfoCardProps) {
  const backgrounds = {
    mint: 'rgba(214, 248, 214, 0.75)',
    teal: 'rgba(127, 198, 164, 0.18)',
  };

  return (
    <div className="rounded-2xl p-4" style={{ backgroundColor: backgrounds[tone] }}>
      <p className="text-sm" style={{ color: palette.slate }}>
        {title}
      </p>
      <p className="mt-2 text-lg font-medium" style={{ color: palette.charcoal }}>
        {text}
      </p>
    </div>
  );
}

const styles = `
  :root {
    color-scheme: light;
    --bg: #f3f5f4;
    --paper: rgba(255, 255, 255, 0.94);
    --paper-strong: rgba(255, 255, 255, 0.98);
    --text: #55505c;
    --muted: #5d737e;
    --line: rgba(93, 115, 126, 0.14);
    --line-strong: rgba(93, 115, 126, 0.24);
    --accent: #49c6e5;
    --charcoal: #55505c;
    --highlight: #00bd9d;
    --shadow: 0 24px 64px rgba(80, 118, 130, 0.12);
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
      radial-gradient(circle at 12% 10%, rgba(73, 198, 229, 0.08), transparent 22%),
      radial-gradient(circle at 82% 12%, rgba(0, 189, 157, 0.06), transparent 20%),
      linear-gradient(180deg, #ffffff 0%, var(--bg) 56%, #ffffff 100%);
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

  .eil-page-shell {
    padding: 0;
  }

  .eil-page-hero {
    position: relative;
    overflow: hidden;
    border-bottom: 0;
    background:
      radial-gradient(circle at 12% 16%, rgba(73, 198, 229, 0.1), transparent 28%),
      radial-gradient(circle at 88% 14%, rgba(139, 215, 210, 0.14), transparent 22%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.94));
  }

  .eil-page-hero__overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(85, 80, 92, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(85, 80, 92, 0.05) 1px, transparent 1px);
    background-size: 94px 94px;
    opacity: 0.28;
    pointer-events: none;
  }

  .eil-page-hero__inner {
    position: relative;
    z-index: 1;
    padding: 34px 0 36px;
  }

  .eil-page-hero h1 {
    max-width: 11ch;
    margin: 8px 0 0;
    font-size: clamp(4rem, 8vw, 7rem);
    line-height: 0.92;
  }

  .eil-page-hero p {
    max-width: 64ch;
    margin-top: 18px;
    color: var(--muted);
    font-size: clamp(1.02rem, 1.4vw, 1.18rem);
  }

  .eil-page-body {
    padding-top: 0;
  }

  .eil-page-content {
    display: grid;
    gap: 18px;
  }

  .eil-header {
    position: sticky;
    top: 0;
    z-index: 30;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.9));
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
    gap: 12px;
    min-width: 0;
  }

  .eil-brand__logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    flex: none;
  }

  .eil-brand__copy {
    display: grid;
    min-width: 0;
    line-height: 1.05;
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

  .eil-nav__link--active,
  .eil-nav__link:hover {
    color: var(--charcoal);
    background: rgba(73, 198, 229, 0.18);
    transform: translateY(-1px);
  }

  .eil-header__mobile {
    display: none;
    color: var(--muted);
    font-size: 0.9rem;
    font-weight: 600;
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
    margin: 0 auto 0;
    border: 0;
    box-shadow: none;
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
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.18)),
      url('/Figures/Homepage.jpg') center center / cover no-repeat;
    transform: scale(1.01);
  }

  .eil-hero__veil {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 50% 44%, rgba(255, 255, 255, 0.2), transparent 22%),
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.18) 0%,
        rgba(255, 255, 255, 0.04) 30%,
        rgba(255, 255, 255, 0.1) 58%,
        rgba(243, 245, 244, 0.58) 82%,
        #f3f5f4 100%
      );
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
    background: rgba(255, 255, 255, 0.9);
    font-size: 0.94rem;
  }

  .eil-section {
    padding: 48px 0 0;
  }

  .eil-section__head {
    max-width: 760px;
    margin-bottom: 24px;
  }

  .eil-section__head--compact {
    margin-bottom: 18px;
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

  .eil-leadership,
  .eil-research-lead,
  .eil-publications-lead,
  .eil-resources-lead {
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .eil-grid--people {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .eil-grid--research,
  .eil-grid--detail,
  .eil-grid--resources {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .eil-grid--steps {
    grid-template-columns: 1fr;
  }

  .eil-card {
    padding: 22px;
    border-radius: 24px;
    border: 1px solid var(--line);
    background: var(--paper);
    box-shadow: var(--shadow);
  }

  .eil-card--team,
  .eil-card--research,
  .eil-card--detail,
  .eil-card--list,
  .eil-card--resource,
  .eil-card--leadership,
  .eil-card--featured-publication {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.72)),
      rgba(73, 198, 229, 0.08);
  }

  .eil-card--accent {
    background:
      linear-gradient(180deg, rgba(73, 198, 229, 0.12), rgba(255, 255, 255, 0.96)),
      radial-gradient(circle at top right, rgba(0, 189, 157, 0.14), transparent 28%);
  }

  .eil-card--team h3,
  .eil-card--research h3,
  .eil-card--detail h2,
  .eil-card--detail h3,
  .eil-card--list h3,
  .eil-card--resource h3,
  .eil-card--leadership h3,
  .eil-card--featured-publication h3 {
    color: var(--charcoal);
  }

  .eil-card__avatar {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border-radius: 18px;
    background: rgba(139, 215, 210, 0.24);
    border: 1px solid rgba(73, 198, 229, 0.18);
    color: var(--charcoal);
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 18px;
  }

  .eil-card__role,
  .eil-card__meta,
  .eil-card__tag,
  .eil-card--detail p,
  .eil-card--resource p,
  .eil-card--leadership p,
  .eil-card--featured-publication p {
    color: var(--muted);
  }

  .eil-card__tag {
    margin-top: 8px;
    font-size: 0.86rem;
  }

  .eil-card__pill,
  .eil-card__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 36px;
    padding: 0 14px;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .eil-card__pill {
    margin-top: 18px;
    background: rgba(73, 198, 229, 0.2);
    color: var(--charcoal);
  }

  .eil-card__button {
    background: var(--highlight);
    color: var(--charcoal);
    border: 1px solid rgba(85, 80, 92, 0.2);
    flex: none;
  }

  .eil-getstarted {
    margin-top: 18px;
    padding-top: 6px;
  }

  .eil-pillrow {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 18px;
  }

  .eil-pillrow__pill {
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.88);
    color: var(--muted);
    font-size: 0.88rem;
  }

  .eil-detail-stack--compact {
    margin-top: 12px;
    gap: 12px;
  }

  .eil-getstarted__intro {
    display: grid;
    align-content: start;
    gap: 12px;
  }

  .eil-stepcard {
    display: grid;
    gap: 10px;
  }

  .eil-codeblock {
    margin: 0;
    padding: 14px 16px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.86);
    color: var(--charcoal);
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .eil-detail-stack {
    display: grid;
    gap: 16px;
    margin-top: 16px;
  }

  .eil-detail-stack div {
    padding-top: 16px;
    border-top: 1px solid var(--line);
  }

  .eil-detail-stack span {
    display: block;
    margin-bottom: 6px;
    color: var(--charcoal);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .eil-card__meta-stack {
    display: grid;
    gap: 12px;
    margin-top: 6px;
    padding-top: 12px;
    border-top: 1px solid var(--line);
  }

  .eil-card__meta-stack span {
    display: block;
    margin-bottom: 6px;
    color: var(--charcoal);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .eil-list {
    display: grid;
    gap: 14px;
  }

  .eil-list__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

  .eil-resource__figure {
    height: 150px;
    margin-bottom: 18px;
    border-radius: 20px;
    background:
      linear-gradient(135deg, rgba(73, 198, 229, 0.58) 0%, rgba(84, 222, 253, 0.92) 50%, rgba(0, 189, 157, 0.64) 100%);
  }

  .eil-card h3 {
    margin-top: 12px;
  }

  .eil-card p {
    margin-top: 12px;
    color: var(--muted);
  }

  .eil-card--research {
    width: 100%;
    text-align: left;
  }

  .eil-card--research p {
    margin-top: 12px;
  }

  .eil-card--featured-publication {
    display: grid;
    gap: 12px;
  }

  .eil-card--resource--featured {
    display: grid;
    gap: 12px;
  }

  .eil-footer {
    margin-top: 30px;
    padding: 26px 0 34px;
    border-top: 1px solid var(--line);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.94)),
      radial-gradient(circle at 18% 20%, rgba(139, 215, 210, 0.08), transparent 26%);
  }

  .eil-footer__inner {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) auto;
    gap: 24px;
    align-items: start;
  }

  .eil-footer__brand h2 {
    max-width: 11ch;
    margin-top: 12px;
  }

  .eil-footer__brand p,
  .eil-footer__contact p {
    margin-top: 10px;
    color: var(--muted);
    max-width: 48ch;
  }

  .eil-footer__contact {
    display: grid;
    gap: 16px;
  }

  .eil-footer__contact span {
    display: block;
    margin-bottom: 6px;
    color: var(--charcoal);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .eil-footer__contact a {
    color: var(--charcoal);
    font-weight: 600;
  }

  .eil-footer__links {
    display: grid;
    gap: 10px;
    justify-items: end;
  }

  .eil-footer__links a {
    color: var(--muted);
    font-weight: 600;
  }

  @media (max-width: 1100px) {
    .eil-header__inner {
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
    .eil-split,
    .eil-leadership,
    .eil-research-lead,
    .eil-publications-lead,
    .eil-resources-lead,
    .eil-grid--people,
    .eil-grid--research,
    .eil-grid--detail,
    .eil-grid--resources,
    .eil-grid--steps {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .eil-list__row {
      flex-direction: column;
      align-items: flex-start;
    }

    .eil-footer__inner {
      grid-template-columns: 1fr;
    }

    .eil-footer__links {
      justify-items: start;
    }
  }

  @media (max-width: 760px) {
    .eil-header {
      position: static;
    }

    .eil-header__inner {
      padding: 12px 0 14px;
    }

    .eil-brand__logo {
      width: 34px;
      height: 34px;
    }

    .eil-nav {
      gap: 4px;
    }

    .eil-header__mobile {
      display: block;
    }

    .eil-hero {
      min-height: auto;
      margin-top: 0;
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
    .eil-split,
    .eil-leadership,
    .eil-research-lead,
    .eil-publications-lead,
    .eil-resources-lead,
    .eil-grid--people,
    .eil-grid--research,
    .eil-grid--detail,
    .eil-grid--resources,
    .eil-grid--steps {
      grid-template-columns: 1fr;
    }

    .eil-footer {
      margin-top: 24px;
      padding-bottom: 28px;
    }

    .eil-footer__inner {
      gap: 18px;
    }
  }
`;
