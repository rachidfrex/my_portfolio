/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poetsen': ['Poetsen One'],
        'rubik': ['Rubik'],


      },
    },
  },
  plugins: [],
}