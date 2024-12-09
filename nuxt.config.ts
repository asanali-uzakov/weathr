// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/icon',
  ],
  ssr: false,
  components: [
    {
      path: '~/components/weather',
      prefix: 'Weather',
    },
  ],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  shadcn: {
    componentDir: './components/ui',
  },
})
