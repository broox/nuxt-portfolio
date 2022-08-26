import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    { src: 'basiclightbox/dist/basicLightbox.min.css' },
  ],
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
  modules: [
    '@pinia/nuxt',
  ],
  router: {
    base: '/nuxt-portfolio/'
  },
  target: 'static'
})
