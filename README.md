# Derek Brooks' Portfolio

This is a simple [Nuxt](https://nuxtjs.org/) application that I built to showcase some software that I've built over the years.

This app is designed to be generated and deployed as a static website and is currently hosted on GitHub pages at [broox.dev](https://broox.dev/).

## Setup

1. Install nvm.
2. Install dependencies.

```bash
nvm install --lts
npm install --global yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn run dev
```

or, to open the site in a browser while starting the server

```bash
yarn dev -o
```

## Production

This application uses GitHub actions and will automatically generate a static website that will be deployed when new code is pushed to the `main` branch.

It can also be built locally for production and tested via:

```bash
yarn run generate
```
