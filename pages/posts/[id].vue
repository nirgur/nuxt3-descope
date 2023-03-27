<script lang="ts" setup>
const route = useRoute();

const URL = 'https://jsonplaceholder.typicode.com';

// A shortcut for useAsyncData/$fetch
const { data } = await useFetch(`${URL}/posts/${route.params.id}`, {
  pick: ['id', 'title', 'body'],
  key: `/posts/${route.params.id}`,
  onResponse({ request, response }) {
    if (
      Object.keys(response._data).length === 0 ||
      response._data.Error === 'Post not found'
    ) {
      showError({ statusCode: 404, statusMessage: response._data });
    }
  },
});

useHead({
  //title: 'Hello Nuxt',
  title: data.value.title,
  meta: [
    { name: 'description', content: data.value.title },
    { property: 'og:description', content: data.value.body },
    { property: 'og:image', content: 'image_here' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
});
</script>

<template>
  <div>
    <h1>Post N°{{ $route.params.id }}</h1>
    <pre>
    {{ data }}
    </pre>
  </div>
</template>
