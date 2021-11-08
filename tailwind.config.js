const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : '',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'omad': '0 20px 30px 0 rgba(41, 112, 250, 0.2)',
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'dosis': ['dosis', 'sans-serif'],
      },
      colors: {
        main: {
          light: '#193cbd',
          DEFAULT: '#112c91',
          dark: '#08164a',
        },
      },
      background: {
        main: {
          light: '#193cbd',
          DEFAULT: '#112c91',
          dark: '#08164a',
        },
        btn: {
          light: '#67b5ff linear-gradient(120deg, rgba(103, 151, 255, 0) 0%, #4d86ff 100%)',
          DEFAULT: '#112c91',
          dark: '#08164a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.flex-basis-31px': {
          flexBasis: '31px',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
