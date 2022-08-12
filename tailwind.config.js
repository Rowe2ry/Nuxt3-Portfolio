/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cr-pink': '#C500C5',
        'cr-cyan': '#00EAD0',
        'cr-gold': '#EEAB00',
        'cr-light': '#F3F7FF',
        'cr-dark': '#2F3132',
        'cr-gray': '#C0C4C9'
      },
      fontFamily: {
        'museo': ['MuseoModerno', 'cursive'],
        'lato': ['Lato', 'sans-serif']
      }
    },
    screens: {
      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1080px',
      // => @media (min-width: 1080px) { ... }
    },
  },
  plugins: [],
}
