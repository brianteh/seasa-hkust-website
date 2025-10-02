/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(30deg)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(33deg)',
            opacity: '0.4'
          },
        },
      },
      transitionProperty: {
        'all': 'all',
      },
    },
  },
  plugins: [],
}

