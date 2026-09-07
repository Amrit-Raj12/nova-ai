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
        slate: '#4B5563',
        teal: '#0F766E',
        'teal-dark': '#115E59',
        'teal-bright': '#00A88F',
        cyan: '#5DE1D0',
        cream: '#F7F8F5',
        line: '#E5E9E5',
        amber: '#D97706',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(23, 33, 43, 0.08)',
        lift: '0 22px 60px rgba(15, 118, 110, 0.14)',
        glow: '0 0 0 1px rgba(0, 168, 143, 0.18), 0 18px 50px rgba(0, 168, 143, 0.12)',
      },
    },
  },
  plugins: [],
}