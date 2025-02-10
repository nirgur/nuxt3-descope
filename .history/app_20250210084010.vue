# app/pages/index.vue
<script setup>
  import { Descope, useDescope } from "@descope/vue-sdk"; // Causes document not defined from within the BaseDescopeWc.ts 
</script>

<template>
  <div>
     <Descope flowId="sign-in" />
  </div>
</template>