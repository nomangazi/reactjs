/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      flex: {
        '0-auto': '0 1 auto',
        '0-25': '0 0 25%',
      }
    },
  },
  plugins: [],
}