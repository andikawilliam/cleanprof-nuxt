<template>
  <section
      id="featured-products"
      class="relative bg-white py-24 -mt-10 sm:mt-0 rounded-2rem md:mt-0 md:rounded-none"
    >
      <HeaderMosaic header="Caring for Your Sanitation" />

      <p class="font-bold font-univers text-center text-2xl sm:text-left sm:text-4xl sm:ml-12 px-4 sm:mt-32 mb-6 sm:mb-10 lg:ml-24">
        Featured Products
      </p>

      <div id="products">
        <div class="font-omnes h-auto grid grid-cols-2 md:gap-2 px-2 md:px-12 lg:px-32 md:grid-cols-4 xl:grid-cols-5">
          <a
            class="card-main p-2"
            target="_blank" rel="noopener noreferrer"
            v-bind:href="product.linktokped"
            v-for="product in products"
            :key="product.slug"
          >
            <div class="relative max-w-auto mx-auto">
              <div class="relative w-5/6">
                <div
                  class="flex absolute top-0 right-0"
                  v-if="product.discount"
                >
                  <span class="absolute inline-flex animate-ping">
                    <span class="inline-flex rounded-lg h-8 w-8 bg-orange-500 opacity-75">
                    </span>
                  </span>
                  <span class="relative inline-flex flex-wrap rounded-lg h-8 w-8 bg-orange-bright text-xs sm:text-discount text-white font-bold justify-center items-center">
                    <p> {{ product.discount }}</p>
                    <p>OFF</p>
                  </span>
                </div>
                <img
                  class="w-full shadow-sm rounded-lg image-transition hover:-translate-y-2"
                  v-bind:src="product.image"
                  v-bind:alt="product.title"
                />
              </div>
              <div class="px-6 py-2 text-gray-700">
                <div class="card-title text-sm mb-1 xl:text-base">
                  {{ productName(product.title) }}
                </div>
                <p class="card-content text-sm">
                  {{ product.specification }}
                </p>
              </div>
              <div class="px-6 pt-1 pb-6" v-if="product.discount">
                <p class="price line-through text-red-600 text-xs mr-2">
                  IDR {{ priceCommaString(product.price) }}
                </p>
                <p class="price text-green-600 mr-2">
                  IDR {{ discountPrice(product) }}
                </p>
              </div>
              <div class="px-6 pt-1 pb-6" v-else>
                <p class="price text-green-600 mr-2">
                  IDR {{ priceCommaString(product.price) }}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>      
    </section>
</template>

<script>
export default {
  props: {
    products: Array
  },

  methods: {
    productName: function(title) {
      let name = title.replace(/ *\([^)]*\) */g, "");
      return name;
    },
    discountPrice: function (product) {
      let discount = product.discount;

      if (discount.includes('%')) {
        let discountPercent = +((product.discount).split('%')[0]);
        discount = +(product.price) * discountPercent/100;
      }

      let finalPrice = +(product.price) - discount;
      return this.priceCommaString(finalPrice);
    },
    priceCommaString: function (price) {
      let parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
  }
}
</script>