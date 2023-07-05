const flowbite = 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        aparecer: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        }
      },
      animation: {
        aparecer: 'aparecer 400ms ease-in-out',
      }
    }
  },
  plugins: [
    flowbite
  ],
}

