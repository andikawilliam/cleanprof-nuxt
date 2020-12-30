<template>
  <nav
    id="navbar"
    class="fixed w-full z-30 flex items-center justify-between flex-wrap bg-0 px-4 py-4 sm:px-6"
  >
    <a href="index.html" class="flex items-center flex-shrink-0 lg:px-10">
      <img
        src="../assets/resources/logo/logo-cleanprof.png"
        class="max-w-full h-16 z-10 sm:h-20"
      />
    </a>
    <div class="block z-10 lg:hidden">
      <button
        id="navburger"
        class="flex items-center px-3 py-2 border rounded"
      >
        <svg
          class="fill-current h-3 w-3"
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
    <div id="navmenu" class="transition-width duration-500 mobile-sidebar flex-grow desktop-navbar">
      <div class="font-omnes text-lg font-semibold lg:flex-grow">
        <a id="navclose" class="absolute top-0 right-0 p-10 lg:hidden">
          X
        </a>
        <a
          href="index.html" class="navlink lg:inline-block lg:mt-0">
          Shop
        </a>
        <a href="our-story.html" class="navlink lg:inline-block lg:mt-0">
          Our Story
        </a>
        <a href="ingredients.html" class="navlink lg:inline-block lg:mt-0">
          Ingredients
        </a>
        <a href="catalog.html" class="navlink lg:inline-block lg:mt-0">
          Catalog
        </a>
        <a href="retailers.html" class="navlink lg:inline-block lg:mt-0">
          Retailers
        </a>
        <a href="contact-us.html" class="navlink lg:inline-block lg:mt-0">
          Contact Us
        </a>
      </div>
      <div class="lg:flex">
        <a href="http://www.tokopedia.com/cleanprofid">
          <button class="block text-sm px-2 py-1 leading-none border rounded-full bg-white hover:bg-opacity-75 font-semibold ml-4 mt-4 lg:mt-0">
            <img
              src="../assets/resources/logo/tokopedia-logo.png"
              class="h-6"
            />
          </button>
        </a>
        <a href="http://shopee.co.id/cleanprof.id">
          <button class="block text-sm px-2 py-1 leading-none border rounded-full bg-white hover:bg-opacity-75 font-semibold ml-4 mt-4 lg:mt-0">
            <img
              src="../assets/resources/logo/shopee-logo.png"
              class="h-6"
            />
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>