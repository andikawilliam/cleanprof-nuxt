<template>
  <div>
    <PageHeader :backgroundSrc="background"/>

    <section id="body" class="relative bg-white sm:py-16 -mt-8 rounded-2rem md:mt-0 md:rounded-none">
      <HeaderMosaic header="Our Story" />
      
      <div class="sm:mt-12 pt-24 px-4 pb-24 sm:px-24">
        <p class="font-univers font-bold text-center text-3xl sm:text-left sm:text-5xl ">
          About Us
        </p>

        <div class="font-omnes text-left text-gray-700 mt-4">
          <p class="font-bold text-2xl sm:text-3xl mt-10">
            CleanProf
          </p>
          <p class="font-thin text-xl xl:text-2xl mt-4">
            {{ aboutPage.about }}
          </p>
          
          <p class="text-xl sm:text-2xl font-thin text-center mt-10">
            Temani aktivitas dan lindungi dirimu dengan CleanProf
          </p>
          <p class="font-bold text-xl sm:text-2xl text-center">
            Caring For Your Sanitation
          </p>        
        </div>
      </div>
    </section>
    <TheFooter :contact="contact" />

    <div id="overlay" class="fixed h-0 opacity-0 left-0 right-0 bottom-0 z-10 bg-black"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: "aqua-1.jpg"
    }
  },

  async asyncData({ $content }) {
    const aboutPage = await $content("about").fetch();
    const contact = await $content("contact").fetch();
    return {
      aboutPage, contact
    };
  },
}
</script>

<style scoped>

</style>