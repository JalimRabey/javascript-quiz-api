const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.yellow,
      textColor: colors.white,
      backgroundColor: colors.blueGray,
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
