# Derek Brooks' Portfolio

This is a simple [Nuxt 3](https://nuxt.com/) application that I built to showcase some software that I've built over the years.

This app is designed to be generated and deployed as a static website and is currently hosted on GitHub pages at [broox.dev](https://broox.dev/).

## Tech Stack

- **Nuxt 3** - Vue.js framework for server-side rendering and static site generation
- **Vue 3** - Progressive JavaScript framework with Composition API
- **Pinia** - State management
- **TypeScript** - Type-safe configuration and plugins
- **Vite** - Fast build tool and dev server

## Setup

1. Install nvm (Node Version Manager)
2. Install and use the LTS version of Node.js
3. Install dependencies

```bash
nvm install --lts
nvm use --lts
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

The dev server will automatically:
- Hot reload on file changes
- Show detailed error messages
- Enable Vue DevTools integration

## Production

This application uses GitHub Actions and will automatically generate a static website that will be deployed when new code is pushed to the `main` branch.

### Build Locally

Build the application for production:

```bash
pnpm run build
```

### Generate Static Site

Generate a static website (for deployment):

```bash
pnpm run generate
```

The static files will be output to the `.output/public` directory.

### Preview Production Build

Preview the generated static site locally:

```bash
pnpm run preview
```
