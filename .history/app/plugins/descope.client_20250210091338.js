import descope, { getSdk } from "@descope/vue-sdk";
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin({
  name: 'descope',
  async setup ({ vueApp }) {
    vueApp.use(descope, {
      projectId: 'P2p7sKT5RrJtd8MKHLYpL9gD7b45',
    });

    const sdk = getSdk();
    sdk?.onSessionTokenChange((newSession) => {
      // here you can implement custom logic when the session is changing
    });
  }
})