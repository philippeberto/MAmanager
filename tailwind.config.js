const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      brown: {
        DEFAULT: '#5c3e1b'
      },

      purple: {
        DEFAULT: '#9e00a3'
      },

      blueTheme: {
        xl: '#00a2c7',
        light: '#005c70',
        DEFAULT: '#003d4d',
        md: '#013946',
        dark: '#00303b'
      },

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
