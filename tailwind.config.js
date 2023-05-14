/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroCard': "url('/images/cardFondo.png')",
      }
    },
  },
  plugins: [],
}

