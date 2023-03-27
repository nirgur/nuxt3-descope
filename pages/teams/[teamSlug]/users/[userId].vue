<script lang="ts" setup>
// Nuxt will auto-import Composables and Composition API from Vue
const route = useRoute();

const message = computed(
  () =>
    `I'm on team: <strong>${route.params.teamSlug}</strong> with user ID: <b>${route.params.userId}</b>`
);
</script>

<template>
  <div>
    <h1>Page: Teams</h1>
    <!-- p>
      I'm on team: {{ $route.params.teamSlug }} with user ID:
      {{ $route.params.userId }}
    </p -->
    <p v-html="message"></p>
  </div>
</template>

<style scoped></style>
