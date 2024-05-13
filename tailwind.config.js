/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': 
          { transform: 'rotate(360deg)' },
        },
        },
      fontFamily: {
        'poetsen': ['Poetsen One'],
        'rubik': ['Poppins'],
      },
      animation: {
        'border-spin': 'border-spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}