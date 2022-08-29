const title = 'Derek Brooks\'s Portfolio'
const description = 'Professional tech lead, software engineer, and product architect. I\'ve built software and teams for startups, small businesses, and Fortune 100 companies.'

export default {
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],
  components: true,
  css: [
    { src: 'basiclightbox/dist/basicLightbox.min.css' },
    { src: '~/assets/css/main.css'}
  ],
  generate: {
    fallback: '404.html',
  },
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'Derek Brooks' },
      { hid: 'description', name: 'description', content: description},
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@broox' },
      { name: 'twitter:site', content: '@broox' },
      { name: 'msapplication-TileColor', content:'#2563eb'},
      { name: 'theme-color', content: '#ffffff' },
    ],
    script: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-PCR2QT1MRT',
      },
      {
        src: 'js/ga.js'
      }
    ],
    title: title,
  },
  plugins: [
    '~/plugins/dates',
    '~/plugins/meta',
  ],
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://broox.dev',
  },
  router: {
    // base: '/nuxt-portfolio/',
    trailingSlash: true,
  },
  target: 'static'
}
