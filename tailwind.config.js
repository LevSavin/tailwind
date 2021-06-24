module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          1000: '#0A043C'
        },
        gray: {
          350: '#C4C4C4'
        },
        green: {
          450: '#C4D944'
        },
        yellow: {
          250: '#FAE0D8',
          450: '#FF794D'
        }
      },
    },
    stroke: theme => ({
      'black': theme('colors.black'),
      'white': theme('colors.white'),
      'orange': theme('colors.yellow.450'),
    }),
    fill: theme => ({
      'black': theme('colors.black'),
      'white': theme('colors.white'),
      'orange': theme('colors.yellow.450'),
    }),
  },
  variants: {
    extend: {
      stroke: ['hover', 'group-hover', 'focus'],
      fill: ['hover', 'group-hover', 'focus'],
    },
  },
  plugins: [],
}