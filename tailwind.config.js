/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#30e86e",
        "background-light": "#f6f8f6",
        "background-dark": "#112116",
        "nutri-green": "#A9C5A0",
        "nutri-brown": "#6B4F4F",
        "nutri-offwhite": "#F7F7F7",
        "nutri-gray": "#E0E0E0",
        "nutri-gray-dark": "#d1d1d1"
      },
    },
  },
  plugins: [],
}