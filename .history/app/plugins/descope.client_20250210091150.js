import descope, { getSdk } from "@descope/vue-sdk";
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import descope from '@descope/vue-sdk';

export default defineNuxtPlugin((nuxtApp) => {
  const d = descope({
    projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
  });

  nuxtApp.vueApp.use(descope);
});