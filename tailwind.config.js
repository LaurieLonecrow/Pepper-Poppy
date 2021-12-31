const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.blue,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
    },
    extend: {
      fontFamily: {
        Londrina: ['Bungee Shade', 'sans-serif'],

    },
      keyframes:{
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-100px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
        },
      },
  },
  animation: {
    'fade-in-down-1': 'fade-in-down 1s ease-in',
    'fade-in-down-2': 'fade-in-down 1.5s ease-in',
    'fade-in-down-3': 'fade-in-down 2s ease-in',
    'fade-in-down-4': 'fade-in-down 5s forwards',
    'fade-in-down-5': 'fade-in-down 5s reverse',


},
  variants: {
    extend: {},
  },
  plugins: [],
},
}