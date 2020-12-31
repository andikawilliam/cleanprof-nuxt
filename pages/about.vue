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
          <p class="font-bold text-2xl sm:text-3xl mt-10">CleanProf</p>
          <p class="font-thin text-xl mt-4">CleanProf adalah sebuah brand yang bergerak didalam bidang kesehatan dan perawatan sanitasi luar yang diciptakan demi kenyamanan serta kehigenisan disekitar ruang aktivitas anda, kami hadir menyediakan produk dengan bahan alami yang halus di kulit dan tidak berbahaya untuk orang tercinta anda. </p>
          <p class="text-xl sm:text-2xl font-thin text-center mt-10">Temani aktivitas dan lindungi dirimu dengan CleanProf</p>
          <p class="font-bold text-xl sm:text-2xl text-center">Caring For Your Sanitation</p>        
        </div>
      </div>
    </section>
    <TheFooter />

    <div id="overlay" class="fixed h-0 opacity-0 left-0 right-0 bottom-0 z-10 bg-black"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: "aqua-1.jpg"
    }
  }
}
</script>

<style scoped>

</style>