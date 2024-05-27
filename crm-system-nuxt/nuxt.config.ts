// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "shadcn-nuxt", "@nuxt/image", [
    "@nuxtjs/google-fonts",
    {
      families: {
        Nunito: [300, 400, 500, 600, 700],
      },
    },
  ], "@vueuse/nuxt", "@pinia/nuxt", [
    "@vee-validate/nuxt",
    {
      autoImports: true
    }    
  ]],
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

});