<template>
  <section id="hero" class="relative min-h-4/5screen sm:h-screen">
    <div class="absolute h-4/5screen sm:h-screen w-full shadow z-0">
      <div id="slides" class="relative h-full w-full">
        <video
          class="slide absolute h-full w-full object-cover object-top"
          autoplay muted loop playsinline
        >
          <source
            src="../assets/resources/video/Cleanprof.mp4"
            type="video/mp4"
          >
        </video>
        <div class="absolute h-full w-full bg-black opacity-30 z-20"></div>
      </div>
    </div>
    <TheNav />
    <div
      class="relative w-4/5 font-univers px-4 pt-24 pb-7/100 text-left text-white-green sm:pt-32 md:px-8 md:w-4/5 lg:tracking-widest lg:py-40 lg:px-20 xl:px-24 xl:w-7/12 xl:leading-normal"
      id="headline-home"
    >
      <p id="body" class="text-5vh sm:text-6vw md:text-7vh lg:text-8xl font-bold">
        {{ home.firstHeader }}
      </p>
      <p class="text-2vh sm:text-2vw md:text-3vh xl:text-4xl font-bold">
        {{ home.secondHeader }}
      </p>
      <p class="text-2vh sm:text-2vw md:text-3vh xl:text-xl pt-1 xl:pt-4"> 
        <span> 
          {{ home.intro }}
        </span>
        <span class="font-bold">
          {{ home.promo }}
        </span>
      </p>
      <a
        href="#featured-products"
        class="inline-block rounded-full py-2 px-4 leading-none bg-orange-bright border-white hover:border-transparent hover:text-orange-bright hover:bg-white my-2 lg:mt-4"
      >
        SHOP NOW!          
      </a>
      <p class="font-omnes text-2vh md:text-3vh py-2 sm:py-4">
        Find us on
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://www.instagram.com/cleanprof.id/" 
          class="ml-1">
          <font-awesome-icon :icon="['fab', 'instagram']"  fixed-width />
        </a>
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://www.facebook.com/CleanProf.ID"
        >
          <font-awesome-icon :icon="['fab', 'facebook']"  fixed-width />
        </a>
      </p>
    </div>
  </section>
</template>

<script>
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);

export default {
  props: {
    home: Object
  },

  mounted () {
    gsap.fromTo(
      "#headline-home", {
        autoAlpha: 1
      }, {
        scrollTrigger: {
          trigger: "#body",
          start: "top top",
          end: "top top",
          toggleActions: "play none none reverse"
        },
        duration: 0.5,
        autoAlpha: 0
      }
    )
  }
}
</script>

<style scoped>

</style>