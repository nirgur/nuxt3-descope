<template>
  <div>
    <!-- NuxtWelcome version="v3.0.0-rc.11" title="Hello Nuxt3" / -->
    <h1>Hello Nuxt3</h1>
    <nav>
      <NuxtLink href="/">Home</NuxtLink> |
      <NuxtLink href="/movies">Movies</NuxtLink> |
      <NuxtLink href="/posts">Posts</NuxtLink> |
      <NuxtLink href="/teams/my-team/users/123">Teams</NuxtLink> |
      <!-- External link will have noopener and noreferer attributes-->
      <NuxtLink href="https://vueschool.io">VueSchool</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
