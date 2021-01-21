<template>
  <nav
    id="navbar"
    class="fixed w-full z-30 flex items-center justify-between flex-wrap bg-0 px-4 py-4 sm:px-6"
  >
    <NuxtLink to="/" class="flex items-center flex-shrink-0 xl:px-10">
      <img
        src="~/assets/resources/logo/logo-cleanprof.png"
        class="max-w-full h-16 z-10 sm:h-20"
      />
    </NuxtLink>
    <div class="block z-30 lg:hidden">
      <button
        id="navburger"
        class="flex items-center px-3 py-2 border rounded"
        v-on:click="toggleSideBar"
      >
        <svg
          class="fill-current h-4 w-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>
            Menu
          </title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div
      id="navmenu"
      class="transition-width duration-500 mobile-sidebar flex-grow desktop-navbar"
      v-bind:class="{ 'w-3/5': activeBar }"
    >
      <div class="font-omnes text-lg font-semibold sm:text-xl md:text-2xl lg:text-base lg:flex-grow">
        <NuxtLink
          class="navlink navhover lg:inline-block sm:pt-2 lg:pt-0"
          v-for="page in pages"
          v-bind:key="page.name"
          v-bind:to="page.linkDir"
        >
          {{ page.name }}
        </NuxtLink>
      </div>
      <div class="lg:flex">
        <a href="http://www.tokopedia.com/cleanprofid">
          <button
            class="navlink block text-sm px-2 py-1 leading-none border rounded-full bg-white hover:bg-opacity-75 font-semibold ml-4 mt-4 lg:mt-0"
          >
            <img
              src="../assets/resources/logo/tokopedia-logo.png"
              class="h-6"
            />
          </button>
        </a>
        <a href="http://shopee.co.id/cleanprof.id">
          <button class="navlink block text-sm px-2 py-1 leading-none border rounded-full bg-white hover:bg-opacity-75 font-semibold ml-4 mt-4 lg:mt-0">
            <img
              src="../assets/resources/logo/shopee-logo.png"
              class="h-6"
            />
          </button>
        </a>
      </div>
      <div class="absolute navlink bottom-0 right-0 pb-10 pr-6 lg:hidden">
        <p> © Cleanprof 2020</p>
      </div>
    </div>
  </nav>
</template>

<script>
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      activeBar: false,
      pages: [
        { name: "Shop", linkDir: "/" },
        { name: "Our Story", linkDir: "/about" },
        { name: "Ingredients", linkDir: "/ingredients" },
        { name: "Catalog", linkDir: "/catalog" },
        { name: "Retailers", linkDir: "/retailers" },
        { name: "Contact Us", linkDir: "/contact" },
      ]
    }
  },

  mounted () {
    gsap.fromTo(
      "#navbar", {
        color: "#FFFFFF"
      }, {
        scrollTrigger: {
          trigger: "#body",
          start: "top 8%",
          end: "top top",
          toggleActions: "play none none reverse"
        },
        duration: 0.3,
        paddingTop: '0.3rem',
        paddingBottom: '0.3rem',
        background: "#FFFFFF",
        color: "#4a5568",
        boxShadow: "0px 0.5px 4px 1px rgba(138,138,138,0.2)",
      }
    )
  },

  methods: {
    toggleSideBar: function() {
      this.activeBar = !this.activeBar;
      if (this.activeBar === true) {
        gsap.fromTo(
            ".navlink",
            { x: 50, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, stagger:.05 }
        )
      }
    },
  }
}
</script>

<style scoped>
.moto-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>