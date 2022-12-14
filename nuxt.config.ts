import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
      shim: false
    },
    modules: [
      '@nuxtjs/tailwindcss'
    ],
    ssr: false // try to fix this, should work with "true"
  })