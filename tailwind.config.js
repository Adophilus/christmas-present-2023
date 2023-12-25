/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik Doodle Shadow", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

