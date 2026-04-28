export const siteContent = {
  brand: {
    name: 'Environmental Intelligence Labs',
    shortName: 'EIL',
    tagline: 'AI and geospatial data science for environmental systems',
    subtitle:
      'A public research site for remote sensing, environmental data science, and socio-ecological intelligence.',
  },
  hero: {
    headline: 'Environmental intelligence for a changing planet.',
    description:
      'A research platform for applying AI, machine learning, deep learning, remote sensing, and geospatial modelling to environmental and socio-ecological systems.',
    primaryCta: 'Explore research',
    secondaryCta: 'Open editable content',
  },
  metrics: [
    { value: 'AI', label: 'Machine learning, deep learning, and computer vision' },
    { value: 'Geospatial', label: 'Satellite, UAV, SAR, street-view, field, and environmental data' },
    { value: 'Systems', label: 'Biodiversity, hazards, cities, land systems, food security, and carbon' },
  ],
  pages: {
    people: {
      eyebrow: 'The People',
      title: 'The team behind the lab',
      description:
        'This page introduces the people working across GeoAI, remote sensing, environmental data science, and applied environmental systems.',
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
    title: 'Develop GeoAI methods for environmental intelligence',
    text:
      'The lab uses multimodal data, including satellite, UAV, SAR, street-view, field, and environmental sources, to understand environmental change and support decision-making.',
  },
  problem: {
    eyebrow: 'Problem statement',
    title: 'Environmental decisions need better spatial intelligence',
    text:
      'Environmental systems are data-rich but difficult to interpret consistently. Robust AI and geospatial modelling can turn complex observations into evidence for science, policy, and planning.',
    cards: [
      {
        title: 'Complex observations',
        body: 'Satellite, UAV, SAR, street-view, and field datasets need methods that can connect across scales and contexts.',
      },
      {
        title: 'Uncertain systems',
        body: 'Environmental processes need models that represent uncertainty and support interpretation.',
      },
      {
        title: 'Decision gaps',
        body: 'Researchers and decision-makers need clearer spatial evidence for hazards, biodiversity, cities, food systems, carbon, and land use.',
      },
    ],
  },
  objectives: {
    eyebrow: 'Three key objectives',
    title: 'Interpret, model, and support decisions',
    description:
      'These are the three technical pillars of the project, and they map directly to the GeoAI pipeline shown later on the page.',
    cards: [
      {
        title: '1. Interpret Earth observation data',
        body: 'Use AI and computer vision to analyse satellite, UAV, SAR, and other spatial imagery.',
      },
      {
        title: '2. Model environmental systems',
        body: 'Build geospatial models of landscapes, hazards, biodiversity, urban systems, carbon, and socio-ecological change.',
      },
      {
        title: '3. Support decisions',
        body: 'Translate analysis into maps, indicators, tools, and evidence that can be inspected and reused.',
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
    title: 'Turn raw geospatial data into environmental intelligence',
    cards: [
      'AI models for remote sensing interpretation',
      'Spatial evidence for environmental and socio-ecological systems',
      'Tools and maps for research, policy, and planning',
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
        'Identify environmental patterns, objects, and changes using imagery, terrain, and spatial context.',
      details:
        'This is the layer that finds what is already present. Replace the bullet points and labels here with your actual model inputs, training data, or study area names.',
      bullets: ['Sentinel-derived vegetation signals', 'Field boundary and land-cover cues', 'Editable model and dataset notes'],
    },
    {
      step: 'Stage 2',
      title: 'Prediction',
      summary:
        'Estimate environmental response, risk, condition, and change under different spatial or temporal settings.',
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
    heading: 'Environmental potential estimator',
    text:
      'Use this form to generate a simple spatial potential score from the backend. It is a first interactive element that can later become a map query, scenario tool, or model output interface.',
    buttonLabel: 'Run estimate',
    resultTitle: 'Backend response',
    resultHint:
      'This section is powered by a serverless API route when deployed on Vercel. If the backend is unavailable, the page falls back to a local calculation so the demo still works.',
  },
  footer: {
    note: 'Environmental Intelligence Labs | University of Bristol',
    contact: 'Replace this with your email, lab page, or project link.',
  },
} as const;
