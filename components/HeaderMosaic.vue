<template>
    <div
      class="absolute flex justify-center inset-x-0 top-0 -mt-10 sm:-mt-16 lg:-mt-12"
      id="header-mosaic"
    >
      <div class="flex items-center w-full h-auto">
        <img 
          class="px-6 h-20 sm:h-3/5 md:h-3/4 lg:h-full mx-auto" 
          :src="require(`~/assets/resources/background/background-mosaic.png`)"
        />
        <p
          class="absolute font-univers text-white text-center text-wrap w-full px-6 headline-shadow text-8vw leading-9 sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          {{ header }}
        </p>
      </div>
    </div>
</template>

<script>
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);

export default {
  props: {
    header: String
  },

  mounted() {
    gsap.fromTo(
      "#header-mosaic",
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5 }
    )

    gsap.fromTo(
      "#header-mosaic", {
        y: 0,
        autoAlpha: 1
      }, {
        scrollTrigger: {
          trigger: "#header-mosaic",
          start: "top 10%",
          end: "top top",
          toggleActions: "play none none reverse"
        },
        duration: 0.5,
        y: 50,
        autoAlpha: 0
      }
    )
  }
}
</script>

<style scoped>
.headline-shadow {
  text-shadow: -1.5px 1.5px 1px #679966;
}

@media only screen and (min-width: 640px) {
  .headline-shadow {
    text-shadow: -2px 2px 1px #679966;
  }
}

</style>