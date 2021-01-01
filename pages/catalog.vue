<template>
  <iframe
    :src="catalog.catalog"
    width="640" height="480"
  >
  </iframe>
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