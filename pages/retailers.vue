<template>
  <div>
    <PageHeader :backgroundSrc="background"/>
    <section id="body" class="relative bg-white sm:py-16 -mt-8 rounded-2rem md:mt-0 md:rounded-none">
      <HeaderMosaic header="Retailers" />
      

      <div class="mb-12 sm:mt-12 pt-24 px-4 pb-24 sm:px-24">
        <p class="font-univers font-bold text-center text-3xl sm:text-left sm:text-5xl ">
          Retailers
        </p>
        <div 
          class="font-omnes text-center text-gray-700 mt-10 sm:text-left"
          v-for="retailer in retailers"
          v-bind:key="retailer.slug"
        >
          <a href="https://www.tokopedia.com/klikdentalindo">
            <img 
              class="w-3/4 mx-auto sm:mx-0 md:w-1/3 transform hover:scale-105 transition-transform duration-500"
              v-bind:src="retailer.logo" 
            >
            <p class="font-black text-3xl sm:text-4xl mt-2">
              {{ retailer.retailer }}
            </p>
          </a>
          <div class="lg:flex text-left text-lg sm:text-2xl py-4 px-6">
            <div class="lg:w-1/2 grid gap-2 grid-cols-5 mb-4">
              <p class="font-bold col-span-2 lg:col-span-1">
                Alamat:
              </p>
              <p class="col-span-3 lg:col-span-4">
                {{ retailer.alamat }}
              </p>
            </div>

            <div class="lg:w-1/2 grid gap-4 grid-cols-5 lg:ml-24">
              <p class="font-bold col-span-2 lg:col-span-1">
                Telepon:
              </p>
              <p class="col-span-3 lg:col-span-4">
                {{ retailer.telepon }}
              </p>
              <p class="font-bold col-span-2 lg:col-span-1">
                Website:
              </p>
              <p class="col-span-3 lg:col-span-4">
                <a :href="goToWeb(retailer.website)">
                  {{ retailer.website }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter :contact="contact" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      background: "underwater.jpg"
    }
  },
  methods: {
    goToWeb: function(link) {
      return "http://" + link;
    }
  },

  async asyncData({ $content }) {
    const retailers = await $content("retailers").fetch();
    const contact = await $content("contact").fetch();
    return {
      retailers, contact
    };
  },
}
</script>

<style scoped>

</style>