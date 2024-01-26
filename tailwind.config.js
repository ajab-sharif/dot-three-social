/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }
      'sm-m': '380px',
      // => @media (min-width: 380px) { ... }

      'sm-l': '420px',
      // => @media (min-width: 420px) { ... }

      // => @media (min-width: 320px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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