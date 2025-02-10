import descope, { getSdk } from "@descope/vue-sdk";
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import { createDescope } from '@descope/vue-sdk';

export default defineNuxtPlugin((nuxtApp) => {
  const descope = createDescope({
    projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
  });

  nuxtApp.vueApp.use(descope);
});