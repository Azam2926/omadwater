const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : '',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 2s 1',
        'fade-out': 'fade-out 1s 1'
      },
      keyframes: {
        'fade-in': {
          from: {opacity: 0},
          to: {opacity: 1}
        },
        'fade-out': {
          to: {opacity: 0}
        }
      },
      padding: {
        btnY: '0.7em',
        btnX: '3em',
      },
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
        btnLeft: {
          light: '#67b5ff',
          DEFAULT: '#67b5ff',
          dark: '#2644a4',
        },
        btnRight: {
          light: '#4d86ff',
          DEFAULT: '#4d86ff',
          dark: '#08164a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({addUtilities}) {
      const newUtilities = {
        '.flex-basis-31px': {
          flexBasis: '31px',
        },
        '.bg-omad-btn': {
          background: '#67b5ff linear-gradient(120deg, rgba(103, 151, 255, 0) 0%, #4d86ff 100%)'
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
