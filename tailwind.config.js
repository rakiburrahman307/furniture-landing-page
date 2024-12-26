/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mochiy: ['Mochiy Pop One', 'sans-serif'],
        robotoSerif: ['Roboto Slab', 'serif'],
        bebas: ['Bebas Neue', 'serif'], 
      },
    },
  },
  plugins: [],
}

