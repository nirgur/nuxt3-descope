<script setup>
import { Descope, useDescope } from "@descope/vue-sdk"; // Causes document not defined from within the BaseDescopeWc.ts 
</script>

<template>
  <div>
    <ClientOnly fallbackTag="span">
      <Descope flowId="sign-in" />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'DescopeClient'
}
</script>