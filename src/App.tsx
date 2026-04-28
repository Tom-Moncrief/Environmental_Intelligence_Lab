import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { PotentialEstimator } from './components/PotentialEstimator';
import { siteContent } from './data/siteContent';
import ceZhangImage from '../Figures/Ce_Zhang.png';
import tomMoncriefImage from '../Figures/Tom_Moncrief_card.jpg';

type PageName = 'Home' | 'People' | 'Research' | 'Research Detail' | 'Publications' | 'Interactive Resources';

type NavPage = Exclude<PageName, 'Research Detail'>;

type ResearchProject = {
  id: string;
  label: string;
  title: string;
  summary: string;
  focus: string;
  methods: string;
  applications: string;
  outputs: string[];
};

const researchProjects: ResearchProject[] = [
  {
    id: 'remote-sensing-intelligence',
    label: 'Research 01',
    title: 'Remote sensing intelligent interpretation',
    summary:
      'Developing AI systems that interpret satellite, UAV, SAR, and other Earth observation data for real-time environmental understanding.',
    focus: 'Remote sensing AI, image segmentation, classification, Earth observation interpretation',
    methods: 'Deep learning, computer vision, transformers, foundation models, geospatial machine learning',
    applications: 'Earth observation interpretation, urban scene analysis, land cover mapping, monitoring systems',
    outputs: ['Remote sensing AI models', 'Image interpretation workflows', 'Maps and uncertainty layers'],
  },
  {
    id: 'biodiversity-ecosystems',
    label: 'Research 02',
    title: 'Biodiversity, ecosystems, and landscape patterns',
    summary:
      'Using spatial AI to study species, habitats, ecosystem condition, landscape processes, and environmental monitoring.',
    focus: 'Biodiversity monitoring, landscape pattern, ecosystem condition, ecological processes',
    methods: 'Satellite deep learning, UAV imagery, spatial statistics, landscape modelling',
    applications: 'Animal population monitoring, plant mapping, habitat assessment, conservation evidence',
    outputs: ['Biodiversity indicators', 'Ecosystem maps', 'Landscape process models'],
  },
  {
    id: 'hazards-urban-systems',
    label: 'Research 03',
    title: 'Natural hazards, cities, and socio-ecological systems',
    summary:
      'Building geospatial AI workflows for flood mapping, urban futures, green space, health, heat networks, and environmental risk.',
    focus: 'Natural hazards, urban systems, green space, environmental risk, socio-ecological modelling',
    methods: 'SAR analysis, street-view interpretation, predictive modelling, scenario analysis',
    applications: 'Flood mapping, urban health, heat network planning, climate risk, planning support',
    outputs: ['Risk maps', 'Urban indicators', 'Decision-support layers'],
  },
  {
    id: 'carbon-decarbonisation',
    label: 'Research 04',
    title: 'Carbon, food security, and sustainable land systems',
    summary:
      'Applying environmental data science to biomass, decarbonisation, food security, land use, and sustainable resource planning.',
    focus: 'Biomass, carbon, food security, land systems, environmental decision support',
    methods: 'Geospatial modelling, remote sensing, optimisation, spatial decision support',
    applications: 'Sustainable biomass expansion, decarbonisation, food security, land management',
    outputs: ['Carbon and biomass maps', 'Suitability models', 'Policy-facing evidence'],
  },
];

const leadInvestigator = {
  name: 'Dr Ce Zhang',
  role: 'Senior Lecturer in Environmental Data Science',
  initials: 'CZ',
  imageUrl: ceZhangImage,
  focus: 'AI, geospatial data science, remote sensing, and socio-ecological systems',
  bio: 'Leads interdisciplinary research at the University of Bristol applying AI, machine learning, deep learning, geospatial data science, and remote sensing to environmental and socio-ecological challenges.',
  selectedWork: {
    title: 'UNetFormer',
    detail:
      'Co-authored a transformer-based semantic segmentation model for efficient remote sensing urban scene interpretation, published in ISPRS Journal of Photogrammetry and Remote Sensing.',
    href: 'https://doi.org/10.1016/j.isprsjprs.2022.06.008',
  },
};

const leadProfileFacts = [
  'Co-lead for Environmental Change Research at the Cabot Institute for the Environment',
  'Fellow of the UK Centre for Ecology and Hydrology',
  'Speciality Chief Editor in Frontiers in Remote Sensing',
  'Accepting PhD students in geospatial science, AI, data science, computer science, and statistics',
];

const labThemes = [
  {
    title: 'AI and machine learning',
    text: 'Deep learning, foundation models, computer vision, and interpretable AI for spatial environmental data.',
  },
  {
    title: 'Geospatial modelling',
    text: 'Spatial data mining, landscape pattern and process modelling, time series analysis, and uncertainty-aware mapping.',
  },
  {
    title: 'Remote sensing intelligence',
    text: 'Image segmentation, classification, synthetic aperture radar, UAV imagery, and real-time Earth observation interpretation.',
  },
  {
    title: 'Environmental systems',
    text: 'Biodiversity, natural hazards, urban futures, food security, biomass, freshwater monitoring, and socio-ecological change.',
  },
];

const people = [
  {
    name: 'Tom Moncrief',
    role: 'MScR Postgraduate Researcher',
    initials: 'TM',
    imageUrl: tomMoncriefImage,
    focus: 'Satellite embeddings and biomass mapping',
    bio: 'Works on foundation model embeddings, biomass estimation, and geospatial modelling workflows for ecosystem monitoring.',
    type: 'Researcher',
  },
  {
    name: 'Boyi Li',
    role: 'PhD Researcher',
    initials: 'BL',
    focus: 'Vision-language models',
    bio: 'Develops vision-language approaches for interpreting remote sensing imagery and environmental scenes.',
    type: 'Researcher',
    selectedWork: {
      title: 'DGL-RSIS',
      detail:
        'Lead author on a training-free remote sensing image segmentation framework that decouples global spatial context and local class semantics for vision-language segmentation.',
      href: 'https://doi.org/10.1016/j.jag.2026.105113',
    },
  },
  {
    name: 'James Brock',
    role: 'PhD Researcher',
    initials: 'JB',
    focus: 'Forest change analysis',
    bio: 'Studies how multimodal AI can support forest monitoring, change detection, and environmental interpretation.',
    type: 'Researcher',
    selectedWork: {
      title: 'Forest-Chat',
      detail:
        'Lead author on an LLM-driven vision-language agent for interactive forest change analysis, supporting natural language queries over forest monitoring tasks.',
      href: 'https://doi.org/10.1016/j.ecoinf.2026.103741',
    },
  },
  {
    name: 'Ziming Wang',
    role: 'PhD Researcher',
    initials: 'ZW',
    focus: 'Flood mapping and modelling',
    bio: 'Uses geospatial AI to improve flood mapping, modelling, and risk-informed spatial analysis.',
    type: 'Researcher',
    selectedWork: {
      title: 'Rapid urban flood mapping',
      detail:
        'First author on a Frontiers in Environmental Science paper combining SAR imagery and land cover products for rapid urban flood mapping in complex urban settings.',
      href: 'https://doi.org/10.3389/fenvs.2022.973192',
    },
  },
  {
    name: 'Yifan Liang',
    role: 'PhD Researcher',
    initials: 'YL',
    focus: 'Urban green space and health',
    bio: 'Models relationships between urban green space, street-level imagery, and mental health outcomes.',
    type: 'Researcher',
  },
  {
    name: 'Holly Liken',
    role: 'PhD Researcher',
    initials: 'HL',
    focus: 'Freshwater ecosystem monitoring',
    bio: 'Applies AI methods to algal monitoring and environmental assessment in freshwater ecosystems.',
    type: 'Researcher',
  },
];

const publications = [
  {
    type: 'Remote sensing AI',
    title: 'Remote sensing intelligent interpretation brain: real-time intelligent understanding of the Earth',
    detail:
      'A 2025 PNAS Nexus paper on real-time intelligent Earth observation interpretation and remote sensing AI systems.',
    meta: 'PNAS Nexus, 2025',
  },
  {
    type: 'Biodiversity monitoring',
    title: 'Deep learning enables satellite-based monitoring of large terrestrial mammal populations',
    detail:
      'A Nature Communications paper demonstrating satellite-based deep learning methods for monitoring animal populations across heterogeneous landscapes.',
    meta: 'Nature Communications, 2023',
  },
  {
    type: 'Ecological mapping',
    title: 'Identifying and mapping individual plants using UAV imagery and deep learning',
    detail:
      'An ISPRS Journal paper on individual plant detection in a high-elevation ecosystem using high-resolution UAV imagery and deep learning.',
    meta: 'ISPRS JPRS, 2020',
  },
  {
    type: 'Computer vision',
    title: 'UNetFormer for efficient semantic segmentation of remote sensing urban scenes',
    detail:
      'Award-winning work on transformer-based semantic segmentation for remote sensing imagery and urban scene interpretation.',
    meta: 'ISPRS JPRS, 2022',
  },
];

const resources = [
  {
    title: 'Environmental potential estimator',
    label: 'Interactive demo',
    description:
      'A lightweight scoring interface that demonstrates how future tools can connect spatial inputs, backend logic, and decision-ready outputs.',
  },
  {
    title: 'Research datasets',
    label: 'Coming soon',
    description:
      'A structured area for curated datasets, data dictionaries, model inputs, and download links connected to published lab outputs.',
  },
  {
    title: 'Code and reproducible workflows',
    label: 'Coming soon',
    description:
      'A place to surface GitHub repositories, notebooks, methods documentation, and reusable geospatial analysis pipelines.',
  },
];

const fieldNotes = [
  {
    label: 'Remote Sensing',
    title: 'Satellite observations as environmental evidence',
    text: 'Large-area imagery becomes useful when it is paired with ecological knowledge, rigorous validation, and clear uncertainty communication.',
  },
  {
    label: 'Field Context',
    title: 'Models grounded in real landscapes',
    text: 'The lab treats field knowledge, environmental constraints, and local context as part of the modelling system, not an afterthought.',
  },
  {
    label: 'Open Science',
    title: 'Research outputs people can inspect',
    text: 'Interfaces, datasets, figures, and methods notes are designed so collaborators can understand what the model is doing.',
  },
];

const researchMotifs = [
  { icon: '01', title: 'Interpret Earth data', text: 'Turn satellite, UAV, SAR, and street-level imagery into reliable environmental evidence.' },
  { icon: '02', title: 'Model systems', text: 'Analyse landscapes, hazards, biodiversity, urban environments, and land-use change.' },
  { icon: '03', title: 'Connect disciplines', text: 'Bridge physical geography, human geography, ecology, computer science, and data science.' },
  { icon: '04', title: 'Support decisions', text: 'Create maps, indicators, tools, and reports that help environmental decisions.' },
];

function getRoute(): { page: PageName; researchId: string | null } {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [path, id] = raw.split('/');

  if (path === 'people') return { page: 'People', researchId: null };
  if (path === 'research' && id) return { page: 'Research Detail', researchId: id };
  if (path === 'research') return { page: 'Research', researchId: null };
  if (path === 'publications') return { page: 'Publications', researchId: null };
  if (path === 'resources') return { page: 'Interactive Resources', researchId: null };

  return { page: 'Home', researchId: null };
}

function routeHref(page: NavPage) {
  const routes: Record<NavPage, string> = {
    Home: '#/',
    People: '#/people',
    Research: '#/research',
    Publications: '#/publications',
    'Interactive Resources': '#/resources',
  };

  return routes[page];
}

export function App() {
  const [{ page, researchId }, setRoute] = useState(() => getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="app">
      <SpeedInsights />
      <SiteHeader currentPage={page} />

      {page === 'Home' && <HomePage />}
      {page === 'People' && <PeoplePage />}
      {page === 'Research' && <ResearchPage />}
      {page === 'Research Detail' && <ResearchDetailPage researchId={researchId} />}
      {page === 'Publications' && <PublicationsPage />}
      {page === 'Interactive Resources' && <ResourcesPage />}

      <SiteFooter />
    </div>
  );
}

function SiteHeader({ currentPage }: { currentPage: PageName }) {
  const navItems: NavPage[] = ['People', 'Research', 'Publications', 'Interactive Resources'];

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="brand" href={routeHref('Home')} aria-label="Environmental Intelligence Labs home">
          <span className="brand__text">
            <strong>Environmental Intelligence Labs</strong>
            <span>University of Bristol</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item}
              className={currentPage === item || (item === 'Research' && currentPage === 'Research Detail') ? 'is-active' : ''}
              href={routeHref(item)}
            >
              {item === 'Interactive Resources' ? 'Resources' : item}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#/people">
          Join the lab
        </a>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__media" aria-hidden="true" />
        <div className="shell hero__content">
          <p className="eyebrow">Environmental Intelligence Labs</p>
          <h1>Environmental intelligence for a changing planet.</h1>
          <p className="hero__lede">
            We develop AI, machine learning, remote sensing, and geospatial modelling to understand environmental
            change across ecosystems, cities, hazards, biodiversity, and land systems.
          </p>
          <div className="button-row">
            <a className="button button--primary" href="#/research">
              Explore research
            </a>
            <a className="button button--secondary" href="#/people">
              Meet the team
            </a>
          </div>
          <dl className="hero__metrics" aria-label="Lab summary">
            <div>
              <dt>GeoAI</dt>
              <dd>AI, deep learning, and geospatial data science</dd>
            </div>
            <div>
              <dt>Earth Observation</dt>
              <dd>Satellite, UAV, SAR, and street-level imagery</dd>
            </div>
            <div>
              <dt>Systems</dt>
              <dd>Biodiversity, hazards, cities, food security, and carbon</dd>
            </div>
          </dl>
        </div>
      </section>

      <SectionIntro
        eyebrow="Lab Mission"
        title="AI and geospatial data science for environmental understanding."
        text="The lab builds methods that connect data-rich environmental observation with scientific explanation and practical decision support."
      />

      <section className="section section--flush">
        <div className="shell split-panel">
          <article className="statement-card">
            <p className="eyebrow">What We Do</p>
            <h2>Build robust environmental intelligence across places, scales, and data sources.</h2>
          </article>
          <div className="stacked-copy">
            <p>
              Environmental systems are complex, spatial, and constantly changing. Our work focuses on methods that
              can extract useful evidence from satellite imagery, spatial datasets, and field-informed environmental
              knowledge.
            </p>
            <p>
              We prioritise models and interfaces that can be inspected, reused, communicated, and connected to real
              decisions in research, policy, conservation, and land management.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeader
            eyebrow="Research Themes"
            title="The lab is broader than one environmental application."
            text="Biomass and carbon are part of the programme, alongside biodiversity monitoring, natural hazards, urban futures, food security, and remote sensing AI."
          />
          <div className="card-grid card-grid--three">
            {labThemes.map((theme) => (
              <article className="content-card" key={theme.title}>
                <span className="card-index">Theme</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeader
            eyebrow="Research Focus"
            title="A lab identity built around environmental evidence."
            text="The research portfolio spans methods, environmental applications, and tools for interpreting complex spatial systems."
          />
          <div className="motif-grid">
            {researchMotifs.map((motif) => (
              <article className="motif-card" key={motif.title}>
                <span>{motif.icon}</span>
                <h3>{motif.title}</h3>
                <p>{motif.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell field-notes">
          <div className="field-notes__intro">
            <p className="eyebrow">Field Notes</p>
            <h2>Designed to feel like a living research group, not a static project page.</h2>
            <p>
              These panels create room for future images from fieldwork, satellite scenes, map products, and short lab
              updates while keeping the homepage polished now.
            </p>
          </div>
          <div className="field-notes__grid">
            {fieldNotes.map((note, index) => (
              <article className="field-note" key={note.title}>
                <div className={`field-note__image field-note__image--${index + 1}`} aria-hidden="true" />
                <p className="eyebrow">{note.label}</p>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PeoplePage() {
  return (
    <PageShell
      eyebrow="People"
      title="A multidisciplinary lab working across AI, ecology, and spatial data."
      intro="The team combines environmental data science, remote sensing, machine learning, ecology, urban analysis, hazards, and applied domain expertise."
    >
      <section className="leader-panel">
        <div className="leader-panel__portrait">
          <img
            src={leadInvestigator.imageUrl}
            alt={`${leadInvestigator.name} profile`}
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <span>{leadInvestigator.initials}</span>
        </div>
        <div>
          <p className="eyebrow">Lead Investigator</p>
          <h2>{leadInvestigator.name}</h2>
          <p className="person-card__role">{leadInvestigator.role}</p>
          <p className="person-card__focus">{leadInvestigator.focus}</p>
          <p>{leadInvestigator.bio}</p>
          <ul className="leader-panel__facts">
            {leadProfileFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <SelectedWork work={leadInvestigator.selectedWork} />
        </div>
      </section>

      <section className="section section--compact">
        <SectionHeader
          eyebrow="Lab Members"
          title="Researchers and students"
          text="A clear team directory for collaborators, applicants, and visitors."
        />
        <div className="card-grid card-grid--people">
          {people.map((person) => (
            <article className="person-card" key={person.name}>
              <div className="person-card__media">
                <PersonAvatar
                  name={person.name}
                  initials={person.initials}
                  imageUrl={'imageUrl' in person ? person.imageUrl : undefined}
                />
                <small>{person.type}</small>
              </div>
              <div className="person-card__content">
                <h3>{person.name}</h3>
                <p className="person-card__role">{person.role}</p>
                <p className="person-card__focus">{person.focus}</p>
                <p>{person.bio}</p>
                {'selectedWork' in person && person.selectedWork ? (
                  <SelectedWork work={person.selectedWork} />
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function ResearchPage() {
  return (
    <PageShell
      eyebrow="Research"
      title="Core research directions across environmental data science."
      intro="The lab develops computational methods that connect spatial data with environmental, ecological, urban, and socio-ecological questions."
    >
      <section className="research-overview">
        <article className="statement-card">
          <p className="eyebrow">Research Programme</p>
          <h2>From sensing to models, from models to evidence.</h2>
        </article>
        <div className="detail-list">
          <div>
            <span>Inputs</span>
            Satellite imagery, UAV imagery, SAR, LiDAR, street-view data, environmental covariates, field observations,
            and spatial context.
          </div>
          <div>
            <span>Methods</span>
            Foundation models, interpretable machine learning, time series analysis, and reproducible geospatial
            workflows.
          </div>
          <div>
            <span>Outputs</span>
            Maps, uncertainty estimates, image interpretation systems, open tools, publications, and decision support.
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="card-grid card-grid--two">
          {researchProjects.map((project) => (
            <ResearchCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function ResearchDetailPage({ researchId }: { researchId: string | null }) {
  const project = researchProjects.find((item) => item.id === researchId) ?? researchProjects[0];

  return (
    <PageShell eyebrow={project.label} title={project.title} intro={project.summary}>
      <a className="text-link" href="#/research">
        Back to research overview
      </a>

      <section className="detail-layout">
        <article className="content-card content-card--large">
          <p className="eyebrow">Project Focus</p>
          <h2>Research scope</h2>
          <p>
            This page is structured as a concise project brief. It gives collaborators and visitors the important
            context first, with room to add papers, figures, datasets, methods, and project updates later.
          </p>
        </article>

        <aside className="detail-list">
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
        </aside>
      </section>

      <section className="section section--compact">
        <SectionHeader
          eyebrow="Expected Outputs"
          title="Designed to support publication and reuse."
          text="Project pages can expand as work matures without changing the page architecture."
        />
        <div className="card-grid card-grid--three">
          {project.outputs.map((output) => (
            <article className="content-card" key={output}>
              <span className="card-index">Output</span>
              <h3>{output}</h3>
              <p>
                Add links, figures, datasets, repositories, or publication records here when the output is ready to
                share.
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function PublicationsPage() {
  return (
    <PageShell
      eyebrow="Publications"
      title="Papers, methods, reports, and research outputs."
      intro="A publication-ready structure for presenting the lab's academic and applied outputs with clarity."
    >
      <section className="publication-feature">
        <div>
          <p className="eyebrow">Selected Publications</p>
          <h2>Evidence, methods, and outputs will sit in one consistent editorial system.</h2>
        </div>
        <p>
          The publication page is intentionally clean: enough hierarchy for academic credibility, but flexible enough
          for preprints, peer-reviewed papers, posters, talks, datasets, and policy-facing reports.
        </p>
      </section>

      <section className="section section--compact">
        <div className="publication-list">
          {publications.map((item) => (
            <article className="publication-item" key={item.title}>
              <div>
                <p className="eyebrow">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <span>{item.meta}</span>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Interactive Resources"
      title="Tools, datasets, and public-facing research resources."
      intro="A dedicated area for interactive demos, code, data releases, and reusable lab materials."
    >
      <section className="section section--compact">
        <div className="card-grid card-grid--three">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.title}>
              <div className="resource-card__figure" aria-hidden="true" />
              <p className="eyebrow">{resource.label}</p>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </article>
          ))}
        </div>
      </section>

      <PotentialEstimator copy={siteContent.estimator} />
    </PageShell>
  );
}

function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <div className="shell page-body">{children}</div>
    </main>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="section section-intro">
      <div className="shell">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ResearchSummaryCard({ project }: { project: ResearchProject }) {
  return (
    <article className="content-card">
      <span className="card-index">{project.label}</span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <a className="text-link" href={`#/research/${project.id}`}>
        Open project
      </a>
    </article>
  );
}

function ResearchCard({ project }: { project: ResearchProject }) {
  return (
    <article className="research-card">
      <div>
        <p className="eyebrow">{project.label}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="detail-list detail-list--compact">
        <div>
          <span>Focus</span>
          {project.focus}
        </div>
        <div>
          <span>Methods</span>
          {project.methods}
        </div>
      </div>
      <a className="button button--secondary" href={`#/research/${project.id}`}>
        View project
      </a>
    </article>
  );
}

function SelectedWork({
  work,
}: {
  work: {
    title: string;
    detail: string;
    href: string;
  };
}) {
  return (
    <a className="person-card__work" href={work.href} target="_blank" rel="noreferrer">
      <span>Selected work</span>
      <strong>{work.title}</strong>
      {work.detail}
    </a>
  );
}

function PersonAvatar({ name, initials, imageUrl }: { name: string; initials: string; imageUrl?: string }) {
  return (
    <span className={imageUrl ? 'person-card__avatar person-card__avatar--image' : 'person-card__avatar'}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${name} profile`}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      ) : null}
      <span>{initials}</span>
    </span>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <p className="eyebrow">Environmental Intelligence Labs</p>
          <h2>Geospatial AI for environmental understanding.</h2>
        </div>
        <div className="site-footer__contact">
          <p>University of Bristol, Bristol, UK.</p>
          <a href="mailto:hello@environmentalintelligencelabs.org">hello@environmentalintelligencelabs.org</a>
        </div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          <a href="#/people">People</a>
          <a href="#/research">Research</a>
          <a href="#/publications">Publications</a>
          <a href="#/resources">Resources</a>
        </nav>
      </div>
    </footer>
  );
}
