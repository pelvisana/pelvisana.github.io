# Pelvisana Website (Astro)

Marketing + educational website for Pelvisana, built with Astro (static output), Tailwind CSS, MDX content, and a lightweight i18n setup (EN/ES/CA).

## Local development

```sh
cd website
npm install
npm run dev
```

Build output goes to `website/dist/`.

## Internationalization (i18n)

- Root (`/`) redirects to the browser language, with fallback to English.
- Language routes live under `src/pages/{en,es,ca}/...`.
- UI strings: `src/i18n/strings.ts`.
- Long-form content (MDX): `src/content/`.

## SEO + LLM-friendly outputs

- Canonical + hreflang alternates are generated in `src/layouts/BaseLayout.astro`.
- Sitemap: `@astrojs/sitemap` (generated in `dist/sitemap-index.xml`).
- `public/llms.txt`, `public/robots.txt`, `public/.well-known/security.txt`.

## Deployment to `pelvisana.github.io`

This site is configured with `site: https://pelvisana.github.io` in `astro.config.mjs`.

Two common approaches:

1. **Recommended: GitHub Actions builds + deploys (no committed `dist/`)**
   - In `pelvisana/pelvisana.github.io` repo:
     - Copy this `website/` folder into that repo (keep it as `website/`).
     - Add workflow: copy `website/docs/github-pages-workflow.yml` to `.github/workflows/pages.yml`.
     - Settings → Pages → **Source: GitHub Actions**.
   - Push to `main`. GitHub Pages will build and deploy automatically.

2. **Simple/manual: commit the build output**
   - Run `npm run build`
   - Copy the contents of `website/dist/` into the root of the `pelvisana/pelvisana.github.io` repository and commit.
