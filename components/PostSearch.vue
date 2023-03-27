<script lang="ts" setup>
const query = ref('1');
const posts = ref([]);

const URL = 'https://jsonplaceholder.typicode.com';
const search = async () => {
  posts.value = await $fetch(`${URL}/posts?userId=${query.value}`);
};
</script>

<template>
  <div>
    <h2>Posts:</h2>
    <form @submit.prevent="search">
      <label for="userid">User ID:</label>
      <input type="number" min="1" placeholder="User ID" v-model="query" />
      <button>Search</button>
    </form>

    <p>Nbr of Posts: {{ posts.length }}</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
