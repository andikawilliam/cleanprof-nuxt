<template>
  <section class="static min-h-4/5screen">
    <img
      class="image-background absolute object-cover object-center h-4/5 sm:w-full"
      :src=backgroundDir
    />
    <TheNav />
  </section>
</template>

<script>
export default {
  props: {
    backgroundSrc: String
  },
  computed: {
    backgroundDir: function() {
      return (require(`~/assets/resources/background/${this.backgroundSrc}`))
    }
  }
}
</script>

<style scoped>
.image-background {
  filter: brightness(80%)
}
</style>

