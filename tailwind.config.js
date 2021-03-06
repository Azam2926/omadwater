const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
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
        'omad-story': '0px 8px 44px 0px rgba(41.00000000000001, 112.00000000000016, 250, 0.15)'
      },
      fontFamily: {
        'nunito': ['"Nunito"', 'arial', 'sans-serif'],
        'dosis': ['dosis', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#379eff',
          DEFAULT: '#379eff',
          dark: '#379eff',
        },
        main: {
          light: '#193cbd',
          DEFAULT: '#112c91',
          dark: '#08164a',
        },
        footer: {
          light: '#120d48',
          DEFAULT: '#120d48',
          dark: '#120d48',
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
      backgroundImage: {
        'section': 'linear-gradient(180deg, #FFFFFF 0%, #F3FAFF 100%)',
        'drop-filled': `url("/images/drop-filled.png")`
      },
      backgroundSize: {
        'right-drop-size': '150px auto',
        'left-drop-size': '135px auto'
      }
    }
  },
  plugins: [
    plugin(function ({addUtilities}) {
      const newUtilities = {
        '.bg-omad-btn': {
          background: '#67b5ff linear-gradient(120deg, rgba(103, 151, 255, 0) 0%, #4d86ff 100%)'
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
