/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,htm}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
