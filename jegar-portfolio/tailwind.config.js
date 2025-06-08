/** @type {import('tailwindcss').Config} */


module.exports = {
   darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
      }
    }
  },
  plugins: [],
}