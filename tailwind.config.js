/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#394df8",
      textBlack: "#29405f",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
