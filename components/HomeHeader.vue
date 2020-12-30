<template>
  <section id="hero" class="relative min-h-4/5screen sm:h-screen">
    <div class="absolute h-4/5screen sm:h-screen w-full shadow z-0">
      <div id="slides" class="relative h-full w-full">
        <video
          class="slide absolute h-full w-full object-cover object-top"
          autoplay muted loop playsinline
        >
          <source
            src="../assets/resources/video/Cleanprof-mute-360.mp4"
            type="video/mp4"
          >
        </video>
        <div class="absolute h-full w-full bg-black opacity-25 z-20"></div>
      </div>
    </div>

    <TheNav />

    <div
      id="headline-home"
      class="relative w-full font-univers px-6 pt-24 pb-7/100 text-left text-white-green lg:tracking-widest lg:py-40 lg:px-20 xl:px-24"
    >
      <p id="body" class="text-5vh md:text-6vh lg:text-8xl font-bold">
        {{ home.firstHeader }}
      </p>
      <p class="text-5vh md:text-6vh lg:text-8xl font-bold">
        {{ home.secondHeader }}
      </p>
      <p class="text-2vh md:text-3vh lg:text-2xl pt-1"> 
        <span> 
          {{ home.intro }}
        </span>
        <span class="font-bold">
          {{ home.promo }}
        </span>
      </p>
      <a
        href="#featured-products"
        class="inline-block rounded-full py-2 px-4 leading-none bg-orange-bright border-white hover:border-transparent hover:text-orange-bright hover:bg-white mt-4 lg:mt-4"
      >
        SHOP NOW!          
      </a>
      <p class="font-omnes text-2vh md:text-3vh py-2 sm:py-2">
        Find us on
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://www.instagram.com/cleanprof.id/" 
          class="fa fa-instagram mx-2">
        </a>
        <a 
          href="https://www.facebook.com/CleanProf.ID"
          class="fab fa-facebook-square">
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    home: Object
  }
}
</script>

<style scoped>

</style>