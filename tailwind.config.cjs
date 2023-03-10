/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#287bff',
        white: '#fff',
        grey: '#f5f5f5',
        black2: '#222',
        black9: '#999',
        black: '#171725',
        button1: '#2ebac1',
        button2: '#a4d96c',
        actionHover: '#EEF4FC',
        red: 'rgb(220 38 38)',
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        green: colors.green,
      },
    },

    boxShadow: {
      card: '0 7px 25px rgba(0, 0, 0, 0.08)',
    },
  },
  plugins: [],
};
