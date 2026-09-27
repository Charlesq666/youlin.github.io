# youlin.github.io

Personal website of Youlin Qu, built with [Nuxt](https://nuxt.com), [Nuxt UI](https://ui.nuxt.com) and Tailwind CSS, deployed as a static site to GitHub Pages.

## Editing content

Resume content lives in [`app/data/resume.ts`](app/data/resume.ts). The home page renders from it.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm generate   # static build into .output/public
```

## Deployment

Pushing to `main` runs [`.github/workflows/ci.yml`](.github/workflows/ci.yml), which lints, typechecks, builds the static site and deploys it to GitHub Pages.
