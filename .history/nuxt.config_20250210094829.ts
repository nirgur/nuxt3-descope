// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: ['~/app/plugins/descope.client.js'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'descope-wc'
    }
  },
  vite: {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('descope-'),
          },
        },
      }),
    ],
  },
})
