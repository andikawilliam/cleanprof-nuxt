<template>
  <a :href="catalog.catalog" class="text-4xl">
    Catalog
  </a>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const catalog = await $content("catalog").fetch();
    return {
      catalog
    };
  },
}
</script>