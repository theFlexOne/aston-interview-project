/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      letterSpacing: {
        loose: ".15rem",
        looser: ".2rem",
        loosest: ".25rem",
        expanded: ".5rem",
      },
      colors: {
        primary: {
          light: "#d8884b",
          DEFAULT: "#d27731",
          dark: "#BC6929",
          darker: "#a75d25",
          darkest: "#864B1D",
          bright: "#ee7f2b",
        },
        secondary: "#708090",
      },
    },
    fontFamily: {
      primary: ["Anybody"],
      secondary: ["Montserrat"],
    },
  },
  plugins: [],
};
