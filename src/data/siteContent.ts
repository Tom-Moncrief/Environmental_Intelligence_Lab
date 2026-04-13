export const siteContent = {
  brand: {
    name: 'Environmental Intelligence Lab',
    shortName: 'EIL',
    tagline: 'GeoAI for biomass energy crops',
    subtitle:
      'A public-facing research site for mapping biomass opportunity with detection, prediction, and potential analysis.',
  },
  hero: {
    headline: 'GeoAI for biomass energy crops.',
    description:
      'A research-first website for Environmental Intelligence Lab. The design is intentionally calm, spacious, and easy to edit so you can present the project publicly without losing scientific clarity.',
    primaryCta: 'Explore the research',
    secondaryCta: 'Open editable content',
  },
  metrics: [
    { value: 'Stage 1', label: 'Detection from geospatial and remote sensing signals' },
    { value: 'Stage 2', label: 'Prediction of biomass growth and crop suitability' },
    { value: 'Stage 3', label: 'Potential mapping for planning and decision support' },
  ],
  research: {
    eyebrow: 'Research focus',
    title: 'From field signals to decision-ready maps',
    description:
      'The site mirrors a lab homepage: clear statement of purpose, concise research framing, and a direct path into the project workflow.',
    cards: [
      {
        title: 'Landscape detection',
        body: 'Locate promising biomass energy crop areas using satellite imagery, environmental variables, and land context.',
      },
      {
        title: 'Growth prediction',
        body: 'Estimate crop response, seasonal dynamics, and likely yield using a structured model pipeline.',
      },
      {
        title: 'Opportunity mapping',
        body: 'Translate analytics into potential surfaces that support planning, comparison, and communication.',
      },
    ],
  },
  mission: {
    eyebrow: 'Why this matters',
    title: 'A lab site should read like a publication front page',
    text:
      'Selva Lab inspired the section flow and academic clarity. Apple inspired the restraint, spacing, and typographic discipline. The result is a clean research narrative with enough personality to feel modern.',
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
    note: 'GeoAI Biomass Energy Crops | Environmental Intelligence Lab',
    contact: 'Replace this with your email, lab page, or project link.',
  },
} as const;
