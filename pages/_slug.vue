<template>
  <div>
    <h2 class="">{{ product.title }}</h2>
    <nuxt-content :document="product" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let product;
    try {
      product = await $content("products", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Product not found" });
    }

    return {
      product,
    };
  },
};
</script>
