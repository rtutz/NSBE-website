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
          100: '#f2ac7d',
          200: '#CCD6F6',
          300: '#4A4363',
          400: '#a8b2d1',
          500: '#8892b0',
          600: '#233554',
          700: '#112240',
          800: '#F5F5F5'
        },
      },
    },
  },
  plugins: [],
}