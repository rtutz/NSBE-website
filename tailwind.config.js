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
    colors: {
      'palette': {
        100: '#64ffda',
        200: '#e6f1ff',
        300: '#ccd6f6',
        400: '#a8b2d1',
        500: '#8892b0',
        600: '#233554',
        700: '#112240',
        800: '#0a192f'
      },
    },
    extend: {},
  },
  plugins: [],
}