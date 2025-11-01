const title = 'Derek Brooks\'s Portfolio'
const description = 'Professional tech lead, software engineer, and product architect. I\'ve built software and teams for startups, small businesses, and Fortune 100 companies.'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],

  components: true,

  css: [
    'basiclightbox/dist/basicLightbox.min.css',
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Derek Brooks' },
        { name: 'description', content: description },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:site_name', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@broox' },
        { name: 'twitter:site', content: '@broox' },
        { name: 'msapplication-TileColor', content:'#2563eb' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-PCR2QT1MRT',
        },
        {
          src: '/js/ga.js'
        }
      ],
    }
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://broox.dev',
    }
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false
    }
  },

  router: {
    options: {
      strict: false,
    }
  },

  routeRules: {
    '/**': { trailingSlash: 'append' }
  },

  compatibilityDate: '2025-01-30'
})
