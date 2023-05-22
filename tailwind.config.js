/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster'],
      },

      backgroundImage: {
        'heroCard': "url('/images/cardFondo.png')",
      },
    },
  },
  plugins: [],
}

