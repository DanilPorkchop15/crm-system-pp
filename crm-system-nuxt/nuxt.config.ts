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
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
