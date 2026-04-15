export const siteContent = {
  brand: {
    name: 'Environmental Intelligence Labs',
    shortName: 'EIL',
    tagline: 'GeoAI for biomass energy crops',
    subtitle:
      'A public research site for mapping biomass opportunity with detection, prediction, and decision support.',
  },
  hero: {
    headline: 'GeoAI for biomass energy crops in the UK.',
    description:
      'A national-scale research platform for sustainable biomass expansion. The site is designed to feel calm, credible, and editorial, with enough structure to present the project clearly to academic and public audiences.',
    primaryCta: 'Explore the project',
    secondaryCta: 'Open editable content',
  },
  metrics: [
    { value: 'National', label: 'Designed to support UK-scale biomass planning' },
    { value: 'Multimodal', label: 'Satellite, aerial, LiDAR, field, and environmental data' },
    { value: 'Adaptive', label: 'Built for continuous updates and scenario testing' },
  ],
  pages: {
    people: {
      eyebrow: 'The People',
      title: 'The team behind the project',
      description:
        'This page introduces the people leading and supporting the GeoAI biomass energy crops project.',
      members: [
        {
          name: 'Ce Zhang',
          role: 'Research Fellow and Principal Investigator',
          about: '',
        },
        {
          name: 'Tom Moncrief',
          role: 'Research & Innovation Associate',
          about: '',
        },
      ],
    },
    research: {
      eyebrow: 'Research',
      title: 'Project research',
      description:
        'A dedicated space for methods, fieldwork, modelling, and project updates.',
    },
    publications: {
      eyebrow: 'Publications',
      title: 'Publications and outputs',
      description:
        'Add papers, preprints, reports, posters, and talks here as the project grows.',
    },
    resources: {
      eyebrow: 'Resources',
      title: 'Data, tools, and references',
      description:
        'Use this page for datasets, documentation, maps, code repositories, and project materials.',
    },
  },
  coreAim: {
    eyebrow: 'Core aim',
    title: 'Develop a national-scale GeoAI system for sustainable biomass expansion',
    text:
      'The project uses multimodal data, including satellite, aerial, LiDAR, field, and environmental sources, to guide where biomass energy crops should be expanded across the UK in support of net zero.',
  },
  problem: {
    eyebrow: 'Problem statement',
    title: 'The UK lacks reliable biomass intelligence at scale',
    text:
      'There are no accurate, up-to-date maps of biomass crops, no robust national estimates of biomass yield and carbon storage, and no clear guidance on where new crops should be planted. That evidence gap slows policy, investment, and large-scale deployment.',
    cards: [
      {
        title: 'Missing maps',
        body: 'The current picture of existing biomass crops is incomplete and difficult to update.',
      },
      {
        title: 'Uncertain estimates',
        body: 'Biomass yield and carbon storage need stronger spatial evidence and consistency.',
      },
      {
        title: 'Limited guidance',
        body: 'Decision-makers lack clear location guidance for future planting and expansion.',
      },
    ],
  },
  objectives: {
    eyebrow: 'Three key objectives',
    title: 'Map, quantify, and optimise',
    description:
      'These are the three technical pillars of the project, and they map directly to the GeoAI pipeline shown later on the page.',
    cards: [
      {
        title: '1. Map existing biomass crops',
        body: 'Identify where miscanthus, willow, and poplar are grown, and understand the environmental conditions they thrive in.',
      },
      {
        title: '2. Quantify biomass and carbon',
        body: 'Estimate biomass production and carbon sequestration potential across landscapes using modelling methods aligned to AGBD-style tasks.',
      },
      {
        title: '3. Optimise future expansion',
        body: 'Identify the best locations for new biomass crops while balancing carbon capture, biodiversity, soil health, and economic viability.',
      },
    ],
  },
  vision: {
    eyebrow: 'Bigger vision',
    title: 'An adaptive decision-support system',
    text:
      'The long-term goal is a system that continuously updates with new data, simulates what-if scenarios such as climate change, policy shifts, and market changes, and supports policymakers, farmers, and investors.',
  },
  outcome: {
    eyebrow: 'Final outcome',
    title: 'Turn raw geospatial data into actionable decisions for UK decarbonisation',
    cards: [
      'First high-resolution national map of energy crops',
      'AI models linking environment to yield and carbon',
      'A planning tool for sustainable biomass deployment',
    ],
  },
  mission: {
    eyebrow: 'Why this matters',
    title: 'A lab site should read like a publication front page',
    text:
      'The reference sites shaped this redesign toward restraint, spacing, and editorial clarity. The result is a cleaner research narrative with fewer visual distractions and more room for the work to breathe.',
  },
  stages: [
    {
      step: 'Stage 1',
      title: 'Detection',
      summary:
        'Identify biomass energy crop locations and candidate areas using imagery, terrain, and environmental context.',
      details:
        'This is the layer that finds what is already present. Replace the bullet points and labels here with your actual model inputs, training data, or study area names.',
      bullets: ['Sentinel-derived vegetation signals', 'Field boundary and land-cover cues', 'Editable model and dataset notes'],
    },
    {
      step: 'Stage 2',
      title: 'Prediction',
      summary:
        'Estimate future crop performance, seasonal response, and biomass growth under changing conditions.',
      details:
        'Use this section to describe your forecasting approach, whether it is machine learning, time-series modelling, or scenario-based prediction.',
      bullets: ['Yield trajectory modelling', 'Climate and soil covariates', 'Editable methodology summary'],
    },
    {
      step: 'Stage 3',
      title: 'Potential',
      summary:
        'Translate analytics into opportunity maps that support planning, investment, and environmental decision-making.',
      details:
        'This final stage is where the project becomes public-facing and decision-ready. Add your region, policy frame, or impact statement here.',
      bullets: ['Spatial opportunity scoring', 'Priority zone ranking', 'Editable policy or impact notes'],
    },
  ],
  spotlight: {
    heading: 'Designed for clarity and future edits',
    text:
      'The layout separates brand text, stage logic, and styling so you can change copy quickly without reworking components. This keeps the site maintainable as the GeoAI project grows.',
  },
  estimator: {
    eyebrow: 'Live backend demo',
    heading: 'Biomass potential estimator',
    text:
      'Use this form to generate a score from the backend. It is a simple first interactive element that you can replace later with authentication, saved scenarios, map queries, or model outputs.',
    buttonLabel: 'Run estimate',
    resultTitle: 'Backend response',
    resultHint:
      'This section is powered by a free serverless API route when deployed on Vercel. If the backend is unavailable, the page falls back to a local calculation so the demo still works.',
  },
  footer: {
    note: 'GeoAI biomass energy crops project | Environmental Intelligence Lab',
    contact: 'Replace this with your email, lab page, or project link.',
  },
} as const;
