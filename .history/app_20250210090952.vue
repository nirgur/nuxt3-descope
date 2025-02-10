# app/pages/index.vue
<script setup>
// import { Descope, useDescope } from "@descope/vue-sdk"; // Causes document not defined from within the BaseDescopeWc.ts 
// import { defineAsyncComponent } from 'vue';

const DescopeClient = defineAsyncComponent(() => import('@descope/vue-sdk').then(module => module.Descope));

</script>

<template>
  <div>
    <client-only>
      <DescopeClient flowId="sign-in" />
    </client-only>
  </div>
</template>