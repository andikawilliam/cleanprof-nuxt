<template>
  <section 
    class="static bg-center bg-cover min-h-4/5screen bg-shadow"
    v-bind:style="{ backgroundImage: `url('${backgroundDir}')` }"
  >
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
.bg-shadow {
  box-shadow: inset 0 0 0 2000px rgba(3, 3, 3, 0.1);
}
</style>