import { useMemo, useState, type FormEvent } from 'react';

type EstimatorCopy = {
  eyebrow: string;
  heading: string;
  text: string;
  buttonLabel: string;
  resultTitle: string;
  resultHint: string;
};

type EstimateResponse = {
  score: number;
  band: string;
  summary: string;
  recommendations: string[];
  inputs: {
    areaHa: number;
    vegetationIndex: number;
    rainfallScore: number;
    soilScore: number;
  };
  source: 'api' | 'local';
};

type PotentialEstimatorProps = {
  copy: EstimatorCopy;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function localEstimate(areaHa: number, vegetationIndex: number, rainfallScore: number, soilScore: number): EstimateResponse {
  const sizeFactor = clamp(areaHa / 250, 0, 1);
  const rawScore =
    vegetationIndex * 44 +
    rainfallScore * 0.24 +
    soilScore * 0.24 +
    sizeFactor * 12;
  const score = Math.round(clamp(rawScore, 0, 100));

  const band = score >= 75 ? 'High potential' : score >= 45 ? 'Moderate potential' : 'Lower potential';
  const recommendations =
    score >= 75
      ? ['Prioritise this zone for field validation.', 'Add crop-specific growth assumptions.', 'Link to map and reporting views.']
      : score >= 45
        ? ['Refine the inputs with local field data.', 'Test alternate crop parameters.', 'Compare adjacent areas.']
        : ['Use more detailed sensing or field observations.', 'Adjust the soil and rainfall layers.', 'Check whether the area should be excluded.'];

  return {
    score,
    band,
    summary: `The current combination suggests ${band.toLowerCase()} for biomass energy crop planning.`,
    recommendations,
    inputs: { areaHa, vegetationIndex, rainfallScore, soilScore },
    source: 'local',
  };
}

export function PotentialEstimator({ copy }: PotentialEstimatorProps) {
  const [areaHa, setAreaHa] = useState('120');
  const [vegetationIndex, setVegetationIndex] = useState('0.72');
  const [rainfallScore, setRainfallScore] = useState('68');
  const [soilScore, setSoilScore] = useState('74');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [result, setResult] = useState<EstimateResponse | null>(null);
  const [message, setMessage] = useState(copy.resultHint);

  const normalizedInputs = useMemo(() => {
    const parsedArea = Number(areaHa);
    const parsedVegetation = Number(vegetationIndex);
    const parsedRainfall = Number(rainfallScore);
    const parsedSoil = Number(soilScore);

    return {
      areaHa: clamp(Number.isFinite(parsedArea) ? parsedArea : 0, 1, 5000),
      vegetationIndex: clamp(Number.isFinite(parsedVegetation) ? parsedVegetation : 0, 0, 1),
      rainfallScore: clamp(Number.isFinite(parsedRainfall) ? parsedRainfall : 0, 0, 100),
      soilScore: clamp(Number.isFinite(parsedSoil) ? parsedSoil : 0, 0, 100),
    };
  }, [areaHa, vegetationIndex, rainfallScore, soilScore]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('Running estimate...');

    const fallback = localEstimate(
      normalizedInputs.areaHa,
      normalizedInputs.vegetationIndex,
      normalizedInputs.rainfallScore,
      normalizedInputs.soilScore,
    );

    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(normalizedInputs),
      });

      if (!response.ok) {
        throw new Error(`API request failed with ${response.status}`);
      }

      const payload = (await response.json()) as EstimateResponse;
      setResult({ ...payload, source: 'api' });
      setMessage('Live backend estimate completed.');
      setStatus('ready');
    } catch {
      setResult(fallback);
      setMessage('Backend unavailable, so a local fallback estimate was used.');
      setStatus('error');
    }
  }

  return (
    <section className="section section--estimator">
      <div className="section-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.heading}</h2>
        <p className="section-description">{copy.text}</p>
      </div>

      <div className="estimator-grid">
        <form className="estimator-card" onSubmit={handleSubmit}>
          <label>
            Area in hectares
            <input value={areaHa} onChange={(event) => setAreaHa(event.target.value)} type="number" min="1" max="5000" step="1" />
          </label>
          <label>
            Vegetation index
            <input
              value={vegetationIndex}
              onChange={(event) => setVegetationIndex(event.target.value)}
              type="number"
              min="0"
              max="1"
              step="0.01"
            />
          </label>
          <label>
            Rainfall score
            <input
              value={rainfallScore}
              onChange={(event) => setRainfallScore(event.target.value)}
              type="number"
              min="0"
              max="100"
              step="1"
            />
          </label>
          <label>
            Soil score
            <input
              value={soilScore}
              onChange={(event) => setSoilScore(event.target.value)}
              type="number"
              min="0"
              max="100"
              step="1"
            />
          </label>

          <button className="button button--primary estimator-button" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Estimating...' : copy.buttonLabel}
          </button>
        </form>

        <aside className="estimator-result">
          <p className="panel-label">{copy.resultTitle}</p>
          <p className="estimator-result__message">{message}</p>
          {result ? (
            <div className="result-stack">
              <div className="result-score">
                <strong>{result.score}/100</strong>
                <span>{result.band}</span>
              </div>
              <p>{result.summary}</p>
              <ul>
                {result.recommendations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="result-source">
                Source: {result.source === 'api' ? 'Backend API' : 'Local fallback'} | Area {result.inputs.areaHa} ha
              </p>
            </div>
          ) : (
            <p className="result-placeholder">{copy.resultHint}</p>
          )}
        </aside>
      </div>
    </section>
  );
}
