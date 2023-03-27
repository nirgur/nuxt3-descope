# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

## Using Nuxi CLI

```bash
# Home page in index.vue file:
npm nuxi add page index
# More complex dynamic route:
npm nuxi add page teams/[teamSlug]/users/[userId]
```

### Disable Transition

You can disable page transition using [definePageMeta](https://v3.nuxtjs.org/api/utils/define-page-meta/) option, this will allow to use multiple root-element in the same page.

```js
definePageMeta({
  pageTransition: false,
})
```

### useAsyncData + $fetch

A shorthand to use both useAsyncData + $fetch is by using useFetch:

```js
// Fetching data asynchronously (you must provide a unique key to useAsyncData, like an ID...)
const { data } = await useAsyncData(
  `/posts/${route.params.id}`,
  () => {
    return $fetch(`${URL}/posts/${route.params.id}`);
  },
  {
    // simple way to pick only what you need
    pick: ['id', 'title', 'body'],
    // Transform fetched data (e.g. grab only necessary informations)
    //    transform(data) {
    //      return {
    //        title: data.title,
    //        body: data.body,
    //      };
    //    },
  }
);
```
