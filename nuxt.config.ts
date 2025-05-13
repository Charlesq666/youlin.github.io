// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ["~/assets/css/main.css"],
  ui: {
    prefix: "U"
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"]
})
