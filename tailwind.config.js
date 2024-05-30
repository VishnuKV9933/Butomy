/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#5BB5A2',
        'custom-blue': '#F8F8F8',
      },
      fontFamily: {
        interSemi : "interSemi"
      },
    },
  },
  plugins: [],
}