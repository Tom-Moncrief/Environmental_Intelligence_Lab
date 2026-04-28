import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { PotentialEstimator } from './components/PotentialEstimator';
import { siteContent } from './data/siteContent';
import ceZhangImage from '../Figures/Ce_Zhang.png';

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
    id: 'satellite-foundation-models',
    label: 'Research 01',
    title: 'Satellite foundation models for biomass estimation',
    summary:
      'Using Earth observation embeddings and geospatial AI to predict, map, and monitor biomass across complex landscapes.',
    focus: 'Satellite AI, biomass estimation, tropical forest monitoring, vegetation structure',
    methods: 'Foundation model embeddings, remote sensing, geospatial machine learning, validation workflows',
    applications: 'Biomass prediction, ecosystem monitoring, land system assessment',
    outputs: ['Reusable model pipelines', 'Benchmark datasets', 'Maps of biomass and uncertainty'],
  },
  {
    id: 'canopy-ecosystems',
    label: 'Research 02',
    title: 'Canopy structure, ecosystems, and land change',
    summary:
      'Connecting spatial data with ecological structure to track forest condition, ecosystem change, and restoration potential.',
    focus: 'Canopy structure, ecosystem condition, ecological monitoring',
    methods: 'LiDAR-informed structure metrics, satellite time series, spatial statistics',
    applications: 'Forest condition mapping, habitat assessment, restoration planning',
    outputs: ['Condition indicators', 'Structure summaries', 'Spatial evidence for conservation'],
  },
  {
    id: 'climate-sustainability',
    label: 'Research 03',
    title: 'GeoAI for climate and sustainability decisions',
    summary:
      'Building interpretable modelling workflows that support climate resilience, land management, and environmental policy.',
    focus: 'Climate analytics, land systems, sustainability science',
    methods: 'Predictive modelling, scenario analysis, reproducible spatial workflows',
    applications: 'Climate risk analysis, planning support, policy evidence',
    outputs: ['Decision-support layers', 'Scenario tools', 'Transparent modelling reports'],
  },
  {
    id: 'interactive-science',
    label: 'Research 04',
    title: 'Interactive scientific tools for environmental understanding',
    summary:
      'Designing public-facing tools and research interfaces that make environmental data easier to explore and use.',
    focus: 'Scientific communication, visual analytics, environmental interfaces',
    methods: 'Web tools, human-centred design, lightweight APIs, visual storytelling',
    applications: 'Public engagement, lab tools, exploratory research platforms',
    outputs: ['Interactive maps', 'Open demos', 'Communication-ready figures'],
  },
];

const leadInvestigator = {
  name: 'Dr Ce Zhang',
  role: 'Senior Lecturer in Environmental Data Science',
  initials: 'CZ',
  imageUrl: ceZhangImage,
  focus: 'Environmental data science, remote sensing, geospatial AI',
  bio: 'Leads research on AI-driven geospatial and remote sensing methods for understanding complex environmental and socio-ecological systems.',
  selectedWork: {
    title: 'UNetFormer',
    detail:
      'Co-authored a transformer-based semantic segmentation model for efficient remote sensing urban scene interpretation, published in ISPRS Journal of Photogrammetry and Remote Sensing.',
    href: 'https://doi.org/10.1016/j.isprsjprs.2022.06.008',
  },
};

const people = [
  {
    name: 'Tom Moncrief',
    role: 'MScR Postgraduate Researcher',
    initials: 'TM',
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
    type: 'Selected outputs',
    title: 'Foundation-model workflows for biomass and ecosystem monitoring',
    detail:
      'A publication area for papers, preprints, reports, conference talks, and reproducible methods notes as the lab portfolio grows.',
    meta: 'Papers, preprints, talks',
  },
  {
    type: 'Methods',
    title: 'Remote sensing, GeoAI, and environmental data science',
    detail:
      'A clean listing pattern for methods-led outputs, with enough structure for citations, links, datasets, and software releases.',
    meta: 'Methods notes and code',
  },
  {
    type: 'Evidence',
    title: 'Environmental intelligence for decision support',
    detail:
      'A home for outputs aimed at collaborators, public agencies, land managers, and wider academic audiences.',
    meta: 'Reports and briefings',
  },
];

const resources = [
  {
    title: 'Biomass potential estimator',
    label: 'Interactive demo',
    description:
      'A lightweight scoring interface that demonstrates how future tools can connect user inputs, backend logic, and decision-ready outputs.',
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
  { icon: '01', title: 'Map change', text: 'Detect shifts in vegetation, forest condition, flood extent, and land use.' },
  { icon: '02', title: 'Model carbon', text: 'Estimate biomass, canopy structure, uncertainty, and environmental potential.' },
  { icon: '03', title: 'Explain systems', text: 'Translate complex spatial data into clear evidence for decisions.' },
  { icon: '04', title: 'Build tools', text: 'Create interactive resources that make environmental data easier to use.' },
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
            We develop satellite AI, geospatial modelling, and environmental analytics to understand biomass,
            ecosystems, and land change across space and time.
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
              <dd>Remote sensing and spatial machine learning</dd>
            </div>
            <div>
              <dt>Biomass</dt>
              <dd>Vegetation structure, carbon, and ecosystem condition</dd>
            </div>
            <div>
              <dt>Impact</dt>
              <dd>Decision-ready tools for environmental research</dd>
            </div>
          </dl>
        </div>
      </section>

      <SectionIntro
        eyebrow="Lab Mission"
        title="Research that turns Earth observation into environmental understanding."
        text="The lab brings together remote sensing, machine learning, ecological knowledge, and clear scientific communication."
      />

      <section className="section section--flush">
        <div className="shell split-panel">
          <article className="statement-card">
            <p className="eyebrow">What We Do</p>
            <h2>Build robust geospatial AI for climate and ecosystem questions.</h2>
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
            title="A focused programme for environmental intelligence."
            text="Each theme is designed to scale from technical research to public communication and practical use."
          />
          <div className="card-grid card-grid--three">
            {researchProjects.slice(0, 3).map((project) => (
              <ResearchSummaryCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeader
            eyebrow="Research Focus"
            title="A lab identity built around environmental evidence."
            text="Remote sensing, field context, and open tools shape how the lab communicates its work."
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
      intro="The team combines environmental data science, remote sensing, machine learning, and applied domain expertise."
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
              <div className="person-card__top">
                <span>{person.initials}</span>
                <small>{person.type}</small>
              </div>
              <h3>{person.name}</h3>
              <p className="person-card__role">{person.role}</p>
              <p className="person-card__focus">{person.focus}</p>
              <p>{person.bio}</p>
              {'selectedWork' in person && person.selectedWork ? (
                <SelectedWork work={person.selectedWork} />
              ) : null}
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
      title="Core research directions built around Earth data and environmental decisions."
      intro="The lab develops computational methods that connect rich spatial data with urgent environmental questions."
    >
      <section className="research-overview">
        <article className="statement-card">
          <p className="eyebrow">Research Programme</p>
          <h2>From sensing to models, from models to evidence.</h2>
        </article>
        <div className="detail-list">
          <div>
            <span>Inputs</span>
            Satellite imagery, LiDAR, environmental covariates, field observations, and spatial context.
          </div>
          <div>
            <span>Methods</span>
            Foundation models, interpretable machine learning, time series analysis, and reproducible geospatial
            workflows.
          </div>
          <div>
            <span>Outputs</span>
            Maps, uncertainty estimates, open tools, publications, and environmental decision support.
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
