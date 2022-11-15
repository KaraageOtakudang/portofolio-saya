/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: { 
     center: true,
     padding: '16px',
    },
    extend: {
      colors: {
        primary: '#be123c',
        dark: '#0F172A',
        dark2: '#7b9ced',
        secondary: '#64748b',
        linkci: '#FB923C'
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}
