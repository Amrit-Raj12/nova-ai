/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#17212B',
        slate: '#5D6873',
        teal: '#0F766E',
        'teal-dark': '#115E59',
        cream: '#F7F8F5',
        line: '#E5E9E5',
        amber: '#D97706',
      },
      boxShadow: {
        soft: '0 12px 35px rgba(23, 33, 43, 0.08)',
      },
    },
  },
  plugins: [],
}