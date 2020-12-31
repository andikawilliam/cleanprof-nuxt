<template>
  <section id="contact-me" class="text-white-green bg-gradient-to-r from-orange-bright to-orange-bright-2">
      <div class="sm:flex items-center text-center sm:h-40 sm:items-end py-4 font-mono text-base md:text-lg md:px-10">
        <div class="px-2 sm:w-1/4 md:px-10">
          <div class="flex justify-center flex-shrink-0 sm:mb-8">
            <a href="index.html">
              <img src="../assets/resources/logo/logo-cleanprof-putih.png" class="max-w-full h-16 sm:h-20"></img>
            </a>
          </div>
        </div>
        <div class="sm:w-1/4 mt-4 h-full">
          <p class="font-univers my-2 text-xl font-bold">
            Menu
          </p>
          <div class="font-omnes font-semibold grid grid-cols-3">
            <p>                
              <NuxtLink to="/">
                Shop
              </NuxtLink>
            </p>
            <p>                
              <NuxtLink to="/about">
                Our Story
              </NuxtLink>
            </p>
            <p>                
              <NuxtLink to="/ingredients">
                Ingredients
              </NuxtLink>
            </p>
            <p>                
              <NuxtLink to="/">
                Catalog
              </NuxtLink>
            </p>
            <p>                
              <NuxtLink to="/retailers">
                Retailers
              </NuxtLink>
            </p>
            <p>                
              <NuxtLink to="/contact">
                Contact Us
              </NuxtLink>
            </p>
          </div>
        </div>
        <div class="sm:w-1/4 mt-4 h-full">
          <p class="font-univers my-2 text-xl font-bold">Contact</p>
          <p class="font-omnes font-semibold">
            <a :href="mailTo">
              {{ contact.email }}
            </a>
          </p>
        </div>
        <div class="sm:w-1/4 mt-4 h-full">
          <p class="font-univers my-2 text-xl font-bold">
            Socials
          </p>
          <div class="font-omnes md:text-lg">
            <!-- <a
              class="fa fa-instagram bg-green-grass p-1 mr-1 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cleanprof.id/"
            />
            <a
              class="fab fa-facebook-square bg-green-grass p-1 mr-1 rounded-full"
              href="https://www.facebook.com/CleanProf.ID"
            /> -->
            <!-- <a
              class="bg-green-grass rounded-full px-2 py-1 mr-1"
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.tokopedia.com/cleanprofid"
            >
              tokopedia
            </a> -->
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