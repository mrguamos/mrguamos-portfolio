// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image-edge'],
  css: ['/assets/global.css'],

  app: {
    head: {
      title: 'Mark Ryan Guamos',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Mark Ryan Guamos Online Portfolio' },
        { name: 'theme-color', content: '#030014' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@400;600&display=swap',
        },
      ],
    },
  },

  tailwindcss: {
    exposeConfig: true,
  },

  compatibilityDate: '2025-01-18',
})
