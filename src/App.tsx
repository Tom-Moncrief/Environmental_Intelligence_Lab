import { useEffect, useMemo, useState } from 'react';

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

      <header className="eil-header">
        <div className="eil-shell eil-header__inner">
          <a className="eil-brand" href={routeHref('Home')} aria-label="Environmental Intelligence Labs home">
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

      <section id="join" className="eil-join">
        <div className="eil-shell eil-join__inner">
          <div>
            <p className="eil-kicker">Join the lab</p>
            <h2>Help shape environmental intelligence for the next decade.</h2>
            <p>
              Add your recruitment details, contact link, or application instructions here. The section is designed to
              read like an academic call to action, not a marketing banner.
            </p>
          </div>

          <a className="eil-button eil-button--contact" href="mailto:hello@environmentalintelligencelabs.org">
            JOIN THE LAB
          </a>
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

  const people = [
    {
      name: 'Tom Moncrief',
      role: 'MscR, Postgraduate Researcher',
      bio: 'Works on geospatial AI, satellite embeddings, biomass mapping, and environmental sensing workflows.',
    },
    {
      name: 'Boyi Li',
      role: 'PhD Researcher',
      bio: 'Vision-language models in remote sensing.',
    },
    {
      name: 'James Brock',
      role: 'PhD Researcher',
      bio: 'Vision-language models in forest change analysis.',
    },
    {
      name: 'Ziming Wang',
      role: 'PhD Researcher',
      bio: 'Flood mapping and modelling using geospatial AI.',
    },
    {
      name: 'Yifan Liang',
      role: 'PhD Researcher',
      bio: 'Modelling green space and mental health using Street View imagery.',
    },
    {
      name: 'Holly Liken',
      role: 'PhD Researcher',
      bio: 'AI for algal monitoring in freshwater ecosystems.',
    },
  ];

  return (
    <PageShell
      palette={palette}
      eyebrow="People"
      title="The researchers behind the lab"
      intro="A multidisciplinary team working across AI, ecology, remote sensing, and environmental data science."
    >
      <div
        className="mb-10 rounded-[2rem] p-8 shadow-md"
        style={{ border: `1px solid ${palette.teal}`, backgroundColor: 'rgba(255,255,255,0.85)' }}
      >
        <div className="flex items-start gap-6">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl text-xl font-semibold"
            style={{ backgroundColor: palette.teal, color: palette.charcoal }}
          >
            CZ
          </div>
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: palette.charcoal }}>
              {primary.name}
            </h2>
            <p className="mt-1 text-sm font-medium" style={{ color: palette.slate }}>
              {primary.role}
            </p>
            <p className="mt-4 text-base leading-7" style={{ color: palette.slate }}>
              {primary.bio}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {people.map((person) => (
          <div
            key={person.name}
            className="rounded-[2rem] p-6 shadow-sm"
            style={{ border: `1px solid ${palette.slate}22`, backgroundColor: 'rgba(255,255,255,0.72)' }}
          >
            <div
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-semibold"
              style={{ backgroundColor: palette.teal, color: palette.charcoal }}
            >
              {person.name
                .split(' ')
                .map((part) => part[0])
                .slice(0, 2)
                .join('')}
            </div>
            <h3 className="text-xl font-semibold" style={{ color: palette.charcoal }}>
              {person.name}
            </h3>
            <p className="mt-2 text-sm font-medium" style={{ color: palette.slate }}>
              {person.role}
            </p>
            <p className="mt-4 text-sm leading-6" style={{ color: palette.slate }}>
              {person.bio}
            </p>
          </div>
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
      <div className="grid gap-6 lg:grid-cols-2">
        {RESEARCH_PROJECTS.map((project) => (
          <button
            key={project.id}
            onClick={() => {
              setSelectedResearchId(project.id);
              setCurrentPage('Research Detail');
            }}
            className="rounded-[2rem] p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            style={{ border: `1px solid ${palette.slate}22`, backgroundColor: 'rgba(255,255,255,0.72)' }}
            type="button"
          >
            <div className="text-sm font-medium" style={{ color: palette.slate }}>
              {project.label}
            </div>
            <h3 className="mt-3 text-2xl font-semibold leading-tight" style={{ color: palette.charcoal }}>
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7" style={{ color: palette.slate }}>
              {project.summary}
            </p>
            <div
              className="mt-6 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: palette.teal, color: palette.charcoal }}
            >
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

        <div className="grid gap-6 lg:grid-cols-3">
          <div
            className="rounded-[2rem] p-6 shadow-sm lg:col-span-2"
            style={{ border: `1px solid ${palette.slate}22`, backgroundColor: 'rgba(255,255,255,0.78)' }}
          >
            <h2 className="text-2xl font-semibold" style={{ color: palette.charcoal }}>
              Project overview
            </h2>
            <p className="mt-4 text-base leading-8" style={{ color: palette.slate }}>
              {project.summary}
            </p>
            <p className="mt-4 text-base leading-8" style={{ color: palette.slate }}>
              This dedicated page can later expand into a full project case study with figures, methods, datasets,
              collaborators, publications, and interactive outputs.
            </p>
          </div>

          <div
            className="rounded-[2rem] p-6 shadow-sm"
            style={{ border: `1px solid ${palette.slate}22`, backgroundColor: 'rgba(255,255,255,0.72)' }}
          >
            <h3 className="text-lg font-semibold" style={{ color: palette.charcoal }}>
              Quick details
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-6" style={{ color: palette.slate }}>
              <div>
                <span className="block font-medium" style={{ color: palette.charcoal }}>
                  Focus
                </span>
                {project.focus}
              </div>
              <div>
                <span className="block font-medium" style={{ color: palette.charcoal }}>
                  Methods
                </span>
                {project.methods}
              </div>
              <div>
                <span className="block font-medium" style={{ color: palette.charcoal }}>
                  Applications
                </span>
                {project.applications}
              </div>
            </div>
          </div>
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
    },
    {
      year: '2025',
      title: 'Environmental foundation models for geospatial monitoring',
      venue: 'Remote Sensing of Environment',
    },
    {
      year: '2025',
      title: 'AI methods for ecosystem-scale Earth observation analysis',
      venue: 'Nature Communications',
    },
  ];

  return (
    <PageShell
      palette={palette}
      eyebrow="Publications"
      title="Selected papers and outputs"
      intro="A clean, journal-style overview of publications, preprints, reports, and other scientific outputs."
    >
      <div className="space-y-4">
        {publications.map((paper) => (
          <article
            key={paper.title}
            className="rounded-[2rem] p-6 shadow-sm"
            style={{ border: `1px solid ${palette.slate}22`, backgroundColor: 'rgba(255,255,255,0.78)' }}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium" style={{ color: palette.slate }}>
                  {paper.year}
                </p>
                <h3 className="mt-2 text-2xl font-semibold" style={{ color: palette.charcoal }}>
                  {paper.title}
                </h3>
                <p className="mt-3 text-sm leading-6" style={{ color: palette.slate }}>
                  {paper.venue}
                </p>
              </div>
              <button
                className="rounded-2xl px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: palette.yellow, color: palette.charcoal }}
                type="button"
              >
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
      description: 'A future interactive tool for exploring predictions, uncertainty, and landscape variation.',
    },
    {
      title: 'Research visualisations',
      description: 'Figures, dashboards, and exploratory scientific interfaces for environmental data.',
    },
    {
      title: 'Teaching and lab resources',
      description: 'Accessible explainers, demos, and material for collaborators, students, and visitors.',
    },
  ];

  return (
    <PageShell
      palette={palette}
      eyebrow="Interactive Resources"
      title="Tools, visualisations, and public-facing resources"
      intro="A space for interactive scientific communication, exploratory tools, and environmental data experiences."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="rounded-[2rem] p-6 shadow-sm"
            style={{ border: `1px solid ${palette.slate}22`, backgroundColor: 'rgba(255,255,255,0.72)' }}
          >
            <div
              className="mb-5 h-32 rounded-[1.5rem]"
              style={{
                background: `linear-gradient(135deg, ${palette.teal}55 0%, ${palette.mint} 65%, ${palette.yellow}70 100%)`,
              }}
            />
            <h3 className="text-xl font-semibold" style={{ color: palette.charcoal }}>
              {resource.title}
            </h3>
            <p className="mt-3 text-sm leading-6" style={{ color: palette.slate }}>
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function PageShell({ palette, eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: palette.slate }}>
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: palette.charcoal }}>
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8" style={{ color: palette.slate }}>
          {intro}
        </p>
      </div>
      <div className="mt-14">{children}</div>
    </main>
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
    min-width: 0;
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
    background: rgba(127, 198, 164, 0.18);
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
    border-radius: 0 0 36px 36px;
    margin: 0 auto 0;
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

    .eil-nav {
      gap: 4px;
    }

    .eil-header__mobile {
      display: block;
    }

    .eil-hero {
      min-height: auto;
      border-radius: 0 0 28px 28px;
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
    .eil-split {
      grid-template-columns: 1fr;
    }
  }
`;
