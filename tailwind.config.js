/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightColor: '#FFFAF0'
      }
    },
    screens: {
      ph: '360px',
      sm: '480px',
    },
  },
  plugins: [],
}

