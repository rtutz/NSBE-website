/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Calibre', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'palette': {
          100: '#f2ac7d',// orange
          200: '#CCD6F6', // dark gray
          300: '#374b80',// dark blue
          400: '#a8b2d1', // Cant change
          500: '#6c98e2', // light blue
          600: '#ffe763', //yellow
          700: '#112240',
          800: '#F5F5F5'
        },
      },
    },
  },
  plugins: [],
}