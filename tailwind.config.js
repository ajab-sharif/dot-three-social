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
      }
    },
    plugins: [],
  }
}