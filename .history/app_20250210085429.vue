# app/pages/index.vue
<script setup>
  import { DescopeClient } from "./descope.client.vue"; // Causes document not defined from within the BaseDescopeWc.ts 
</script>

<template>
  <div>
    <ClientOnly>

     <DescopeClient flowId="sign-in" />
     </ClientOnly>
  </div>
</template>