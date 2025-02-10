# app/pages/index.vue
<script setup>
const DescopeClient = defineAsyncComponent(() => import('@descope/vue-sdk').then(module => module.Descope));
</script>

<template>
  <div>
      <DescopeClient flowId="sign-in" />
  </div>
</template>