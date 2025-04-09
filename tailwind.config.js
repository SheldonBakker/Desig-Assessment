/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ua-red': '#E31837',
        'ua-grey': '#1D1D1D',
        'ua-light-grey': '#F6F6F6',
      },
      fontFamily: {
        'plak': ['Neue Plak', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
