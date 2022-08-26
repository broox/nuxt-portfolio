export default {
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  css: [
    { src: 'basiclightbox/dist/basicLightbox.min.css' },
    { src: '~/assets/css/main.css'}
  ],
  generate: {
    fallback: '404.html',
  },
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
    { hid: 'author', name: 'author', content: 'Derek Brooks' },
    { name: 'format-detection', content: 'telephone=no' },
    { property: 'og:site_name', content: 'The Portfolio of Derek Brooks' },
    { name: 'twitter:creator', content: '@broox' },
    { name: 'twitter:site', content: '@broox' },
    { name: 'msapplication-TileColor', content:'#2563eb'},
    { name: 'theme-color', content: '#ffffff' },
  ],
  plugins: [
    '~/plugins/dates',
  ],
  router: {
    base: '/nuxt-portfolio/',
    trailingSlash: false,
  },
  target: 'static'
}
