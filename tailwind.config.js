module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      main: '#116e78',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      red: '#fc0000',
      grayLight: '#f5f5f5',
      gray: '#cfcfcf',
      grayDark: '#ababab',
      accentMain: '#c42b85',
      accentSecondary: '#0cb386',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
