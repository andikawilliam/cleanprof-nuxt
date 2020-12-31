<template>
  <div>
    <PageHeader :backgroundSrc="background"/>
    <section id="body" class="relative bg-white sm:py-16 -mt-8 rounded-2rem md:mt-0 md:rounded-none">
      <HeaderMosaic header="Ingredients" />
    
      <div class="sm:mt-12 pt-24 pb-24 px-4 sm:px-24">
        <p class="font-univers font-bold text-center text-3xl sm:text-left sm:text-5xl ">
          Ingredients
        </p>

        <div class="font-omnes font-bold leading-tight text-left text-lg lg:text-xl text-gray-700 mt-6">
          <p>Ethyl Alcohol</p>
          <p>Propylene Glycol</p>
          <p>Benzalkonium Chloride</p>
          <p>Parfum</p>
          <p>Aqua Distilate</p> 
          <p>Cationic Surfactant</p>
          <p><span class="font-thin">dan</span> Adelhid</p>
        </div>

        <hr class="mt-8 border-2">

        <div class="font-omnes font-thin text-left text-lg lg:text-xl text-gray-700 mt-4">
          <p class="mt-4">
            <span class="font-bold">Propylene Glycol:</span> 
            Membuat Tangan Tidak Kering.
          </p>
          <p class="mt-4">
            <span class="font-bold">Cationic Surfactant:</span> 
            Berfungsi untuk mengeliminasi bau seafood, lembab, terasi, 
            hingga bau urin binatang peliharaan anda.
          </p>
          <p class="mt-4">
            Berdasarkan studi LIPI berbagai bahan aktif seperti Ethanol dan 
            Benzalkonium chloride, memiliki efektivitas baik terhadap virus, 
            banyak diantaranya yang mengandung Benzalkonium chloride dan Etanol.
          </p>

          <p class="mt-4">
            Badan Perlindungan Lingkungan Amerika (US EPA/United States Environmental Protection Agency)
            juga memiliki list disinfektan yang efektif untuk membunuh virus, banyak 
            diantaranya yang mengandung Benzalkonium chloride dan Etanol.
          </p>

          <p class="mt-4">
            CDC (Centers for Disease Control and Prevention/Pusat Pengendalian dan Pencegahan Penyakit)
            Amerika merekomendasikan etanol sebagai salah satu bahan aktif untuk hand sanitizer
          </p>
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: "family-2.jpg"
    }
  }
}
</script>

<style scoped>

</style>