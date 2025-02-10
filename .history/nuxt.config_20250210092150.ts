// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: ['~/app/plugins/descope.client.js'],
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.module.rules.push({
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              isCustomElement: tag => ['descope-wc'].includes(tag)
            }
          }
        });
      }
    }
  }
})
