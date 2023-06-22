/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        aparecer: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        }
      },
      animation: {
        aparecer: 'aparecer 1s ease-in-out',
      }
    }
  },
  plugins: [],
}

