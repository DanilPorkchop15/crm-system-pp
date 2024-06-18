// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "shadcn-nuxt",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Nunito: [300, 400, 500, 600, 700],
        },
      },
    ],
    "@vueuse/nuxt",
    "@pinia/nuxt",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
    "@nuxtjs/i18n",
    "@nuxt/test-utils/module",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  app: {
    head: {
      title: "CRM System",
      meta: [{ name: "description", content: "CRM System" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
      htmlAttrs: { lang: "en" },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "ru",
    detectBrowserLanguage: false,
    langDir: "lang",
    locales: [
      {
        code: "ru",
        iso: "ru-RU",
        name: "Русский",
        file: "ru-RU.json",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "es",
        iso: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
      {
        code: "cn",
        iso: "cn-CN",
        name: "简体中文",
        file: "cn-CN.json",
      },
    ],
  },
});
