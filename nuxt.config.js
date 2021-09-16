export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'CleanProf ID',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description',
        name: 'description', 
        content: "HAND SANITIZER TERBAIK DISCOUNT 50%! Cleanprof produces the best Hand Sanitizer and Disinfectant in Indonesia. CleanProf membuat Hand Sanitizer dan Disinfektan yang efektif, murah, dan harum untuk dipakai." 
      }
    ],   
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-fontawesome'
  ],

  fontawesome: {
    imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebook', 'faInstagram', 'faFacebookSquare']
        }
    ],
  },

  content: {
    // Options
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  server: {
    host: "0.0.0.0"
  }
}
