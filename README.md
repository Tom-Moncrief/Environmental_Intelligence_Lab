# Environmental Intelligence Lab

Public landing site for the GeoAI biomass energy crops project.

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production files are written to `dist/`.

## Where to edit content

- `src/data/siteContent.ts` for branding, project copy, stage descriptions, and metrics.
- `src/App.tsx` for page layout.
- `src/styles/global.css` for the visual system.

## Publish it publicly

Recommended path: Vercel free tier.

1. Push this repo to GitHub.
2. Import the repository into Vercel.
3. Use the default Vite settings.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Vercel will automatically serve the backend route at `/api/estimate`.

Alternative path: GitHub Pages.

1. Add a `base` path to `vite.config.ts` that matches the repo name.
2. Build with `npm run build`.
3. Deploy the `dist` folder using GitHub Pages.

## Interactive backend

The site includes a simple biomass potential estimator powered by [`api/estimate.js`](/c:/MscR/Biomass_project/Environmental_Intelligence_Lab/api/estimate.js).

This is the right pattern for free hosting if you want:

- form submissions
- quick scoring or validation logic
- later expansion into saved scenarios or database-backed interactions

If you want persistent saved data later, the usual free upgrade is to add a free database such as Supabase or Neon.
