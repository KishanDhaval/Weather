/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'], // Add Roboto to the default sans font
        skill:['"Londrina Sketch"' , 'sans-serif'],
        work:['"Work Sans"' , 'sans-serif'],
      },
    },
  },
  plugins: [],
}