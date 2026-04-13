function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function buildResponse(areaHa, vegetationIndex, rainfallScore, soilScore) {
  const sizeFactor = clamp(areaHa / 250, 0, 1);
  const rawScore = vegetationIndex * 44 + rainfallScore * 0.24 + soilScore * 0.24 + sizeFactor * 12;
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
  };
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const payload = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
    const areaHa = clamp(Number(payload?.areaHa ?? 0), 1, 5000);
    const vegetationIndex = clamp(Number(payload?.vegetationIndex ?? 0), 0, 1);
    const rainfallScore = clamp(Number(payload?.rainfallScore ?? 0), 0, 100);
    const soilScore = clamp(Number(payload?.soilScore ?? 0), 0, 100);

    response.status(200).json({
      ...buildResponse(areaHa, vegetationIndex, rainfallScore, soilScore),
      source: 'api',
    });
  } catch (error) {
    response.status(400).json({
      error: 'Invalid request body',
      detail: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

