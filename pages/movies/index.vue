<script setup>
const movieId = ref(213);
</script>

<template>
  <div>
    <h1>Page: Movies</h1>
    <NuxtLink to="movies/123">Movie #1</NuxtLink> |
    <NuxtLink :to="`movies/${movieId}`">Movie #2</NuxtLink>
    <PostSearch />
  </div>
</template>

<style scoped></style>
