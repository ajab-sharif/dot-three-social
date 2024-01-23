/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px'
    },
    extend: {
      width: {
        wrapper: '35rem',
      },
      maxWidth: {
        container: '30rem'
      },
      colors: {
        primary: '#0866ff',
        darkV0: '#18191A',
        darkV1: '#242526',
        greyV1: '#3A3B3C',
        lightV1: '#E7E9ED',


      }
    },
    plugins: [],
  }
}