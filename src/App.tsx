import { useMemo, useState } from 'react';

type Palette = {
  mint: string;
  teal: string;
  slate: string;
  charcoal: string;
  yellow: string;
  white: string;
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

type HomePageProps = {
  palette: Palette;
  setCurrentPage: (page: PageName) => void;
};

type PeoplePageProps = {
  palette: Palette;
};

type ResearchPageProps = {
  palette: Palette;
  setSelectedResearchId: (id: string | null) => void;
  setCurrentPage: (page: PageName) => void;
};

type ResearchDetailPageProps = {
  palette: Palette;
  researchId: string | null;
  setCurrentPage: (page: PageName) => void;
  setSelectedResearchId: (id: string | null) => void;
};

type PublicationsPageProps = {
  palette: Palette;
};

type InteractiveResourcesPageProps = {
  palette: Palette;
};

type PageName = 'Home' | 'People' | 'Research' | 'Research Detail' | 'Publications' | 'Interactive Resources';

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

const MANUAL_TEST_CASES = [
  'Home page renders by default with the sticky top navigation visible.',
  'Clicking People shows Dr Ce Zhang as the primary profile and the remaining team cards below.',
  'Clicking Research shows the research themes page without syntax or render errors.',
  'Clicking a research card opens its dedicated research detail page.',
  'Clicking Back to research overview from a research detail page returns to the research grid.',
  'Clicking Publications shows the publications list without syntax or render errors.',
  'Clicking Interactive Resources shows the resources cards.',
  'Clicking the Environmental Intelligence Labs logo returns to Home.',
  'If a research detail page is opened with no selected id, the first research project is shown as a safe fallback.',
];

const navItems = [
  { label: 'People', page: 'People' as const },
  { label: 'Research', page: 'Research' as const },
  { label: 'Publications', page: 'Publications' as const },
  { label: 'Interactive Resources', page: 'Interactive Resources' as const },
];

export function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('Home');
  const [selectedResearchId, setSelectedResearchId] = useState<string | null>(null);

  const palette: Palette = {
    mint: '#D6F8D6',
    teal: '#7FC6A4',
    slate: '#5D737E',
    charcoal: '#55505C',
    yellow: '#FAF33E',
    white: '#FFFFFF',
  };

  const pageTitle = currentPage === 'Home' ? 'Environmental Intelligence Labs' : currentPage;

  const footerNote = useMemo(
    () => `Manual test cases: ${MANUAL_TEST_CASES.length} checks available for the prototype.`,
    [],
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.mint, color: palette.charcoal }}>
      <style>{styles}</style>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <button
            onClick={() => setCurrentPage('Home')}
            className="min-w-0 text-left transition hover:opacity-80"
            type="button"
          >
            <div className="text-[1.05rem] font-semibold leading-none tracking-tight" style={{ color: palette.charcoal }}>
              Environmental Intelligence
            </div>
            <div className="mt-1 text-sm font-medium leading-none" style={{ color: palette.slate }}>
              Labs
            </div>
          </button>

          <nav className="hidden items-center justify-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className="text-sm font-medium transition hover:opacity-70"
                  style={{
                    color: palette.charcoal,
                    textDecoration: active ? 'underline' : 'none',
                    textUnderlineOffset: '8px',
                  }}
                  type="button"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="md:hidden text-xs font-medium" style={{ color: palette.slate }}>
            {pageTitle}
          </div>
        </div>
      </header>

      {currentPage === 'Home' && <HomePage palette={palette} setCurrentPage={setCurrentPage} />}
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

      <footer className="mx-auto max-w-7xl px-6 pb-8 pt-4 text-xs" style={{ color: palette.slate }}>
        {footerNote}
      </footer>
    </div>
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

function HomePage({ palette, setCurrentPage }: HomePageProps) {
  return (
    <main className="min-h-screen">
      <section
        className="hero-shell"
        style={{
          borderBottom: `1px solid ${palette.teal}40`,
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.42), rgba(255,255,255,0.62)), radial-gradient(circle at 20% 20%, rgba(127,198,164,0.22), transparent 24%), radial-gradient(circle at 75% 25%, rgba(250,243,62,0.12), transparent 20%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: palette.mint,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium"
                style={{
                  border: `1px solid ${palette.slate}55`,
                  backgroundColor: `${palette.mint}CC`,
                  color: palette.slate,
                }}
              >
                Environmental Intelligence Labs
              </div>

              <div className="space-y-5">
                <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl" style={{ color: palette.charcoal }}>
                  Environmental intelligence for a changing planet.
                </h1>
                <p className="max-w-2xl text-lg leading-8" style={{ color: palette.slate }}>
                  We build AI and Earth observation tools to understand ecosystems, monitor environmental change, and
                  turn complex geospatial data into actionable scientific insight.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('Research')}
                  className="rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition hover:opacity-90"
                  style={{ backgroundColor: palette.charcoal, color: palette.mint }}
                  type="button"
                >
                  Explore research
                </button>
                <button
                  onClick={() => setCurrentPage('Publications')}
                  className="rounded-2xl border px-5 py-3 text-sm font-medium transition"
                  style={{
                    borderColor: palette.slate,
                    color: palette.charcoal,
                    backgroundColor: 'transparent',
                  }}
                  type="button"
                >
                  View publications
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-[2rem] blur-3xl"
                style={{
                  background: `linear-gradient(135deg, ${palette.teal}66 0%, ${palette.mint} 45%, ${palette.yellow}66 100%)`,
                }}
              />
              <div
                className="relative overflow-hidden rounded-[2rem] p-6 shadow-xl"
                style={{
                  border: `1px solid ${palette.slate}33`,
                  backgroundColor: 'rgba(255,255,255,0.58)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <InfoCard palette={palette} title="Focus" text="Remote sensing + AI" tone="mint" />
                  <InfoCard palette={palette} title="Applications" text="Biodiversity, forests, climate" tone="teal" />
                  <div
                    className="col-span-2 rounded-2xl p-5"
                    style={{
                      border: `1px solid ${palette.yellow}88`,
                      backgroundColor: 'rgba(250, 243, 62, 0.22)',
                    }}
                  >
                    <p className="text-sm font-medium" style={{ color: palette.charcoal }}>
                      Current theme
                    </p>
                    <p className="mt-2 text-2xl font-semibold" style={{ color: palette.charcoal }}>
                      Earth observation for environmental monitoring
                    </p>
                    <p className="mt-3 text-sm leading-6" style={{ color: palette.slate }}>
                      Integrating satellite imagery, geospatial foundation models, and scientific workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: palette.slate }}>
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight" style={{ color: palette.charcoal }}>
              Research at the intersection of AI, ecology, and geospatial science.
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg leading-8" style={{ color: palette.slate }}>
              Environmental Intelligence Labs develops computational methods for understanding the natural world at
              scale. Our work combines machine learning, remote sensing, environmental data, and scientific reasoning to
              support monitoring, prediction, and decision-making across ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: `1px solid ${palette.teal}40`,
          borderBottom: `1px solid ${palette.teal}40`,
          backgroundColor: 'rgba(127, 198, 164, 0.10)',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: palette.slate }}>
              Research themes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight" style={{ color: palette.charcoal }}>
              Core areas of the lab
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Environmental monitoring',
                text: 'Tracking ecosystem change across space and time using large-scale data.',
              },
              {
                title: 'Earth observation',
                text: 'Working with satellite, aerial, and spatial data to derive robust environmental insight.',
              },
              {
                title: 'AI for sustainability',
                text: 'Designing machine learning systems that support climate and ecological research.',
              },
              {
                title: 'Geospatial modelling',
                text: 'Building predictive models for biomass, land cover, and environmental dynamics.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl p-6 shadow-sm"
                style={{
                  border: `1px solid ${palette.slate}22`,
                  backgroundColor: 'rgba(255,255,255,0.6)',
                }}
              >
                <h3 className="text-xl font-semibold" style={{ color: palette.charcoal }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6" style={{ color: palette.slate }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: palette.slate }}>
              Featured work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight" style={{ color: palette.charcoal }}>
              Selected projects
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            'Biomass mapping from satellite embeddings',
            'Monitoring tropical forest change',
            'Environmental foundation models for Earth data',
          ].map((project, index) => (
            <article
              key={project}
              className="rounded-3xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{
                border: `1px solid ${palette.slate}22`,
                backgroundColor: 'rgba(255,255,255,0.7)',
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold"
                style={{ backgroundColor: palette.teal, color: palette.charcoal }}
              >
                0{index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold" style={{ color: palette.charcoal }}>
                {project}
              </h3>
              <p className="mt-3 text-sm leading-6" style={{ color: palette.slate }}>
                Brief summary text for a lab project, publication cluster, or case study that can be swapped later.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: palette.charcoal, color: palette.mint }}>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: `${palette.mint}B3` }}>
                Join / Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Collaborate with Environmental Intelligence Labs
              </h2>
            </div>
            <div>
              <p className="text-base leading-7" style={{ color: `${palette.mint}D9` }}>
                We welcome collaborations across environmental science, AI, remote sensing, and geospatial analysis.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('People')}
                  className="rounded-2xl px-5 py-3 text-sm font-medium transition hover:opacity-90"
                  style={{ backgroundColor: palette.yellow, color: palette.charcoal }}
                  type="button"
                >
                  Meet the team
                </button>
                <button
                  onClick={() => setCurrentPage('Interactive Resources')}
                  className="rounded-2xl border px-5 py-3 text-sm font-medium transition"
                  style={{ borderColor: palette.teal, color: palette.mint }}
                  type="button"
                >
                  Explore resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PeoplePage({ palette }: PeoplePageProps) {
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

function ResearchPage({ palette, setSelectedResearchId, setCurrentPage }: ResearchPageProps) {
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
}: ResearchDetailPageProps) {
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

        <div className="grid gap-6 lg:grid-cols-2">
          <div
            className="rounded-[2rem] p-6 shadow-sm"
            style={{ border: `1px solid ${palette.slate}22`, backgroundColor: 'rgba(255,255,255,0.72)' }}
          >
            <h3 className="text-xl font-semibold" style={{ color: palette.charcoal }}>
              Data and modelling
            </h3>
            <p className="mt-4 text-sm leading-7" style={{ color: palette.slate }}>
              This area can describe the data sources, modelling strategy, evaluation approach, and study regions used
              for the project.
            </p>
          </div>
          <div
            className="rounded-[2rem] p-6 shadow-sm"
            style={{ border: `1px solid ${palette.slate}22`, backgroundColor: 'rgba(255,255,255,0.72)' }}
          >
            <h3 className="text-xl font-semibold" style={{ color: palette.charcoal }}>
              Outputs and impact
            </h3>
            <p className="mt-4 text-sm leading-7" style={{ color: palette.slate }}>
              This area can highlight maps, publications, dashboards, policy relevance, and future directions for the
              work.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function PublicationsPage({ palette }: PublicationsPageProps) {
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

function InteractiveResourcesPage({ palette }: InteractiveResourcesPageProps) {
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
  .hero-shell {
    position: relative;
  }
`;
