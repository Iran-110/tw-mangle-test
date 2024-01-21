import nuxtPlugin from 'unplugin-tailwindcss-mangle/nuxt';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    inlineSSRStyles: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ...process.env.NODE_ENV === 'production' ? [nuxtPlugin] : [],
  ],
})
