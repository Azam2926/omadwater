module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : '',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
