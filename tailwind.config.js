/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        'dark-blue': '#20232a',
        'custom-gray': {
          900: '#121212', // Dark background
          800: '#1f2937', // Card background
          700: '#374151', // Button and tag background
        },
      },
      boxShadow: {
        'strong': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}