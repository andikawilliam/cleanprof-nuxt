<template>
  <section 
    id="contact-me"
    class="text-white-green bg-gradient-to-b from-orange-bright-2 to-orange-bright-3"
  >
      <div
        class="sm:flex items-center text-center sm:px-4 sm:h-40 sm:items-end py-4 font-mono text-base md:text-lg xl:px-10"
      >
        <div class="px-2 lg:px-10 xl:w-1/6">
          <div class="flex justify-center flex-shrink-0 sm:mb-8">
            <NuxtLink to="/">
              <img
                class="max-w-full h-16 sm:h-20"
                :src="require(`~/assets/resources/logo/logo-cleanprof-putih.png`)"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="sm:w-1/3 mt-4 h-full">
          <p class="font-univers my-2 text-xl font-bold">
            Menu
          </p>
          <div class="font-omnes font-semibold grid grid-cols-2 sm:text-base xl:grid-cols-3">
            <p class="hover:opacity-50">                
              <NuxtLink to="/">
                Shop
              </NuxtLink>
            </p>
            <p class="hover:opacity-50">                
              <NuxtLink to="/about">
                Our Story
              </NuxtLink>
            </p>
            <p class="hover:opacity-50">                
              <NuxtLink to="/ingredients">
                Ingredients
              </NuxtLink>
            </p>
            <p class="hover:opacity-50">                
              <NuxtLink to="/">
                Catalog
              </NuxtLink>
            </p>
            <p class="hover:opacity-50">                
              <NuxtLink to="/retailers">
                Retailers
              </NuxtLink>
            </p>
            <p class="hover:opacity-50">                
              <NuxtLink to="/contact">
                Contact Us
              </NuxtLink>
            </p>
          </div>
        </div>
        <div class="sm:w-1/4 mt-4 h-full xl:w-1/3">
          <p class="font-univers my-2 text-xl font-bold">Contact</p>
          <p class="font-omnes font-semibold hover:opacity-50">
            <a :href="mailTo">
              {{ contact.email }}
            </a>
          </p>
        </div>
        <div class="sm:w-1/4 mt-4 h-full sm:px-6 lg:w-1/6">
          <p class="font-univers my-2 text-xl font-bold">
            Socials
          </p>
          <div class="w-2/5 mx-auto font-omnes sm:text-sm grid grid-cols-1 sm:w-full xl:text-xl">
            <a
              class="bg-green-grass p-1 mr-1 rounded-full my-1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cleanprof.id/"
            >
              <font-awesome-icon :icon="['fab', 'instagram']"  fixed-width />
              {{ contact.instagram }}
            </a>
            <a
              class="bg-green-grass p-1 mr-1 rounded-full my-1"
              href="https://www.facebook.com/CleanProf.ID"
            >
              <font-awesome-icon :icon="['fab', 'facebook-square']"  fixed-width />
              {{ contact.facebook }}
            </a>
          </div>
        </div>   
      </div>
      <div class="flex text-white text-center text-grey-700 h-10"> 
        <div class="w-full text-xs py-2">
          <p> © Cleanprof 2020</p>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    contact: Object
  },

  computed: {
    mailTo: function() {
      return "mailto:" +  this.contact.email;
    }
  },
}
</script>