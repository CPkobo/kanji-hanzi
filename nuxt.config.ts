// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false,
    },
        build: {
        transpile: ["primevue"],
    },
    css: [
        "primevue/resources/themes/saga-blue/theme.css", // テーマ
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
        "primeflex/primeflex.css",
    ],
})