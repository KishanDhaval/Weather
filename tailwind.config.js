/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add your Google Font
        popins: ["Poppins", "serif"], // Add your Google Font
      },
    },
  },
  plugins: [],
};
