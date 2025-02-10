# app/pages/index.vue
<script setup>
  import { DescopeClient } from "./descope.client.vue"; // Causes document not defined from within the BaseDescopeWc.ts 
</script>

<template>
  <div>
     <DescopeClient flowId="sign-in" />
  </div>
</template>