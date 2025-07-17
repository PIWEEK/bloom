// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-svgo',
  ],
  components: true,
  devtools: { enabled: true },
  runtimeConfig: {
    posthogApiKey: process.env.POSTHOG_API_KEY,
    postHogHost: process.env.POSTHOG_HOST,
    postHogProjectId: process.env.POSTHOG_PROJECT_ID,
    postHogDefaults: process.env.POSTHOG_DEFAULTS,
  },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  svgo: {
    dts: true,
  },
})
