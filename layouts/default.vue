<template>
  <div>
    <div class="absolute z-0 container-position">
      <img
        src="~/assets/resources/logo/logo-cleanprof.png"
        class=" max-w-full h-24 md:h-40"
      />
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container-position {
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
