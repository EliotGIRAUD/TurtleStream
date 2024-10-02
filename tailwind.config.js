/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FA5700',
        'secondary': '#4C4C4C',
        'third': '#000000',
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

