export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      title: 'Wat als ik later dood ben - End-of-Life Planning',
      meta: [
        {
          name: 'description',
          content: 'Plan je erfenis, deel herinneringen en help je nabestaanden met Wat als ik later dood ben.',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Anton+SC&family=Special+Gothic+Expanded+One&family=Nunito:wght@300;400;600;700;800&display=swap',
        },
      ],
    },
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    exposeConfig: true,
  },
})
