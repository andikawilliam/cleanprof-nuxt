<template>
  <div>
    <PageHeader :backgroundSrc="background"/>
    <section id="body" class="relative bg-white sm:py-16 -mt-8 rounded-2rem md:mt-0 md:rounded-none">
      <HeaderMosaic header="Contact Us" />
      <div class="sm:mt-12 pt-24 px-6 pb-24 sm:px-24">
        <p class="font-univers font-bold text-center text-3xl sm:text-left sm:text-5xl ">
          Get in Touch
        </p>

        <div class="font-omnes text-left text-lg md:w-3/5 sm:text-xl text-gray-700 mt-6">
          <div class="grid gap-2 grid-cols-5">
            <p class="font-bold col-span-2 lg:col-span-1">
              Alamat:
            </p>
            <p class="col-span-3 lg:col-span-4">
              {{ contact.address }}
            </p>

            <p class="font-bold col-span-2 lg:col-span-1">
              Email:
            </p>
            <p class="col-span-3 lg:col-span-4">
              {{ contact.email }}
            </p>

            <p class="font-bold col-span-2 lg:col-span-1">
              Telepon:
            </p>
            <p class="col-span-3 lg:col-span-4">
              {{ contact.telepon }}
            </p>
            
            <p class="font-bold col-span-2 lg:col-span-1">
              Instagram:
            </p>
            <p class="col-span-3 lg:col-span-4">
              <a href="https://www.instagram.com/cleanprof.id">@{{ contact.instagram }}</a>
            </p>

            <p class="font-bold col-span-2 lg:col-span-1">
              Facebook:
            </p>
            <p class="col-span-3 lg:col-span-4">
              <a href="https://www.facebook.com/CleanProf.ID">
                {{ contact.facebook }}
              </a>
            </p>

            <p class="font-bold col-span-2 lg:col-span-1">
              Tokopedia:</p>
            <p class="col-span-3 lg:col-span-4">
              <a href="http://www.tokopedia.com/cleanprofid">
                {{ contact.tokopedia }}
              </a>
            </p>

            <p class="font-bold col-span-2 lg:col-span-1">
              Shopee:</p>
            <p class="col-span-3 lg:col-span-4">
              <a href="http://www.tokopedia.com/cleanprofid">
                {{ contact.shopee }}
              </a>
            </p>
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
      background: "on-orange-2.jpg"
    }
  },

  async asyncData({ $content }) {
    const contact = await $content("contact").fetch();
    return {
      contact
    };
  },
}
</script>

<style scoped>

</style>