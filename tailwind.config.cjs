/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  //主題設定
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    //擴充
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.gray,
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
