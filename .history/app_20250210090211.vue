# app/pages/index.vue
<script setup>
import { Descope, useDescope } from "@descope/vue-sdk"; // Causes document not defined from within the BaseDescopeWc.ts 
import { defineAsyncComponent } from 'vue';
</script>

<template>
  <div>
    <client-only>
      <Descope flowId="sign-in" />
    </client-only>
  </div>
</template>