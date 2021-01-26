module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'omnes' : ['Omnes Regular'],
        'univers' : ['Univers LT Std 55 Roman'],
      },
      opacity: {
        '30' : '0.3',
        '40' : '0.4'
      },
      fontSize: {
        '2vh' : '2vh',
        '3vh' : '3vh',
        '4vh' : '4vh',
        '5vh' : '5vh',
        '6vh' : '6vh',
        '7vh' : '7vh',
        '8vh' : '8vh',
        '2vw' : '2vw',
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5vw' : '5vw',
        '6vw' : '6vw',
        '7vw' : '7vw',
        '8vw' : '8vw',
        'discount': '.7rem',
        '7xl': '4.5rem',
        '8xl': '5rem',
      },
      spacing: {
        '5/100': '5%',
        '7/100': '7%',
        '1/10': '10%',
        '1/5': '20%',
        '4/5screen': '80vh', 
      },
      height: {
        'logo': '10%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
        '3/5screen': '60vh',
        '4/5screen': '80vh',
        '9/10screen': '90vh',
      },
      minHeight: {
        '3/5screen': '60vh',
        '4/5screen': '80vh',
      },
      colors: {
        'orange-bright': '#fcb01c',
        'orange-bright-2': '#fcb935',
        'orange-bright-3': '#e39e19',
        'green-grass': '#679966',
        'white-green': '#FFFEF1',
      },
      transitionProperty: {
        'width': 'width',
        'display': 'display',
      },
      transitionDuration: {        
        '2s': '3000ms',
        '3s': '3000ms',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        'fadein': 'fadein 0.5s' 
      },
      borderRadius: {
        '3rem': '3rem',
        '2rem': '2rem',
        'footer-tl': '100% 120%',
        'footer-tr': '40% 85%',
      }
    },
  },
  variants: {},
  plugins: [],
}
