/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00213D',
        greye4: '#CCD9E4',
        blueCB: '#0F74CB',
        grey34: '#343434',
        greyF8: '#F2F5F8',
        grey65: '#565656',
      },
      fontFamily: {
        cthin: ['Cabinet-Thin', 'sans-serif'],
        cregular: ['Cabinet-Regular', 'sans-serif'],
        cmedium: ['Cabinet-Medium', 'sans-serif'],
        cbold: ['Cabinet-Bold', 'sans-serif'],
        cblack: ['Cabinet-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

