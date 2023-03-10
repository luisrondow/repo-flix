/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      base: '#232136',
      'base-light': '#393552',
      surface: '#2a273f',
      'gray-dark': '#393552',
      gray: '#6e6a86',
      'gray-light': '#908caa',
      white: '#e0def4',
      red: '#eb6f92',
      yellow: '#f6c177',
      rose: '#ea9a97',
      green: '#9ccfd8',
      blue: '#3e8fb0',
      purple: '#c4a7e7',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      width: {
        112: '28rem',
        120: '30rem',
      },
      scale: {
        115: '1.15',
      },
    },
  },
  plugins: [],
}
