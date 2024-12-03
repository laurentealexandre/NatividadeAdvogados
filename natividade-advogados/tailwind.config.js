/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marigold': 'rgba(196,145,50,1)',
        'tacha': 'rgba(217,180,90,1)',
        'apache': 'rgba(227,198,115,1)',
        'marzipan': 'rgba(247,231,155,1)',
        'old-gold': 'rgba(210,164,76,1)',
        'drover': 'rgba(252,244,180,1)',
        'putty': 'rgba(228,210,132,1)',
        'flax': 'rgba(236,213,132,1)',
      },
      backgroundColor: {
        'dark-custom': '#2d2d2d',
      }
    },
  },
  plugins: [],
}