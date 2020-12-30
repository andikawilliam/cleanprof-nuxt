<template>
  <div>
    <HomeHeader :home="homeHeader" />
    <HomeProducts :products="products" />
    <TheFooter />

    <div id="overlay" class="fixed h-0 opacity-0 left-0 right-0 bottom-0 z-10 bg-black">
    </div>

    <div class="links">
      <li v-for="product of products" :key="product.slug">
        <NuxtLink :to="product.slug">
          {{ product.title }}
        </NuxtLink>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      }],
    };
  },

  async asyncData({ $content }) {
    const homeHeader = await $content("home").fetch();
    const products = await $content("products").sortBy('title', 'desc').fetch();

    return {
      homeHeader, products
    };
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
