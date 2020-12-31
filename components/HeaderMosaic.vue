<template>
  <div class="absolute flex justify-center inset-x-0 top-0 -mt-10 sm:-mt-16 lg:-mt-12">
    <div class="flex items-center w-full h-auto">
      <img 
        class="px-6 h-20 sm:h-3/5 md:h-3/4 lg:h-full mx-auto" 
        :src="require(`~/assets/resources/background/background-mosaic.png`)"
      />
      <p class="absolute font-univers text-white text-center text-wrap w-full px-6 headline-shadow text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        {{ header }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String
  }
}
</script>