# app/pages/index.vue
<script setup>
const DescopeClient = defineAsyncComponent(() => import('@descope/vue-sdk').then(module => module.Descope));
</script>

<template>
  <div>
    <client-only>
      <DescopeClient flowId="sign-in" />
    </client-only>
  </div>
</template>