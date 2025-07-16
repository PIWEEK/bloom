// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  runtimeConfig: {
    posthogApiKey: process.env.POSTHOG_API_KEY,
    postHogHost: process.env.POSTHOG_HOST,
    postHogProjectId: process.env.POSTHOG_PROJECT_ID,
    postHogDefaults: process.env.POSTHOG_DEFAULTS,
  },
  eslint: {
    config: {
        stylistic: true,
      }
    }
})
