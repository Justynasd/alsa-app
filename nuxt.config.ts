// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["@/assets/scss/main.scss"],
  image: {
    dir: "public/img",
    // The screen sizes predefined by `@nuxt/image`:
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   '2xl': 1536,
    // },
  },
  modules: ["@nuxt/image-edge", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "lt",
        name: "Lietuvių",
        iso: "lt-LT",
        files: ["lt-LT.json"],
      },
      {
        code: "en",
        name: "English",
        iso: "en-US",
        files: ["en-US.json"],
      },
    ],
    lazy: true,
    strategy: "prefix",
    langDir: "lang",
    defaultLocale: "lt",
    vueI18n: {
      // If fallback is needed, you need to define
      fallbackLocale: "lt",
    },
  },
});
