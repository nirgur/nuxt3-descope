# app/pages/index.vue
<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  await import('@descope/web-component'); // Adjust the path
});
const DescopeClient = defineAsyncComponent(() => import('@descope/vue-sdk').then(module => module.Descope));
</script>

<template>
  <div>
    <client-only>
      <DescopeClient flowId="sign-in" />
    </client-only>
  </div>
</template>