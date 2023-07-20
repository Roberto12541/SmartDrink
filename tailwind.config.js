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
        },
        pulso: {
          '50%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            transform: 'scale(1.0)'
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.1)',
            opacity: '0.9',
          }
        }
      },
      animation: {
        aparecer: 'aparecer 400ms ease-in-out',
        pulso: 'pulso 1s ease-in-out infinite',
        // ping: 'animation-ping 400ms ease-in-out'
      }
    }
  },
  plugins: [
    flowbite
  ],
}

