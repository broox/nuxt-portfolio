# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Derek Brooks' portfolio website - a Nuxt 3 application showcasing software projects built over the years. The site is generated as a static website and deployed to GitHub Pages at [broox.dev](https://broox.dev/).

**Tech Stack:** Nuxt 3, Vue 3 (Composition API), Pinia (state management), TypeScript, Vite

## Development Commands

### Setup
```bash
# Install dependencies (use pnpm, not npm/yarn)
pnpm install
```

### Development
```bash
# Start dev server on http://localhost:3000
pnpm run dev
```

### Build & Deploy
```bash
# Build for production
pnpm run build

# Generate static site (outputs to .output/public)
pnpm run generate

# Preview the static build locally
pnpm run preview

# Type check TypeScript code
pnpm run typecheck

# Validate HTML markup
pnpm run validate
```

## Architecture

### Data-Driven Content Model

The application is **content-driven** using JSON files as the data source. All portfolio content lives in `/data/*.json`:

- `data/projects.json` - Portfolio projects with metadata (slug, title, description, tags, images, dates, etc.)
- `data/jobs.json` - Employment history
- `data/tags.json` - Technology/skill tags

**Important:** The store (`store/index.ts`) reverses the projects array to display in descending order. When adding new projects to `projects.json`, add them to the END of the array (they will be displayed first).

### State Management (Pinia)

Single store at `store/index.ts` provides:
- `jobs`, `projects`, `tags` - Raw data from JSON files
- `featuredProjects` - Getter filtering projects with `featured: true`
- `getProject(slug)` - Find project by slug
- `getProjectsForJob(slug)` - Filter projects by job
- `getProjectsTagged(slug)` - Filter projects by tag
- `getTag(slug)` - Find tag by slug

### Routing & Pages

Uses Nuxt 3 file-based routing with dynamic routes:

- `pages/index.vue` - Homepage with featured projects
- `pages/resume.vue` - Resume/CV page
- `pages/projects/index.vue` - All projects listing
- `pages/projects/[slug].vue` - Individual project detail pages
- `pages/tags/index.vue` - All tags listing
- `pages/tags/[slug].vue` - Projects filtered by tag

**Route Configuration:** All routes use trailing slashes (configured via `experimental.defaults.nuxtLink.trailingSlash: 'append'`). The router does not enforce trailing slashes because this is not supported in Nuxt 3, but all routes should have a canonical URL that specifies the trailing slash.

### Plugins

Two global plugins provide utility functions:

- `plugins/dates.ts` - Provides `$getDisplayDate(dateString)` for formatting dates (handles both full dates and year-only strings)
- `plugins/meta.ts` - Provides `$getMetaTags({ title, description, image })` for generating OpenGraph and meta tags

### Static Site Generation

Configured in `nuxt.config.ts` under `nitro.prerender`:
- Starts at `/` and crawls all links
- `failOnError: false` to continue on prerender errors
- Images stored in `/public/images/` with thumbnails in `/public/images/thumb/`

### Deployment

GitHub Actions automatically deploys on push to `main` branch:

1. **Build and Validate** (`.github/workflows/build-and-validate.yml`):
   - Checks out code
   - Sets up Node.js using version from `.nvmrc` (24.11.0)
   - Installs pnpm and dependencies
   - Runs TypeScript type checking (`pnpm typecheck`)
   - Generates static site (`pnpm generate`)
   - Validates HTML markup (`pnpm validate`)
   - Uploads build artifact

2. **Deploy** (`.github/workflows/pages.yml`):
   - Downloads build artifact from previous job
   - Deploys `.output/public` to GitHub Pages

**Note:** Both CI and local development use Node 24.11.0+ (specified in `package.json` engines and `.nvmrc`).

## Key Conventions

- **Package Manager:** Use `pnpm` exclusively (version 9.15.0)
- **Node Version:** 24.11.0+ (use `nvm use` to switch)
- **Adding Projects:** Append to END of `data/projects.json` array (store reverses it)
- **Images:** Store project images in `/public/images/` and thumbnails in `/public/images/thumb/`
- **Slugs:** Used throughout for URL-friendly identifiers in projects, tags, and jobs
