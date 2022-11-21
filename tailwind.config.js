/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md"],
  mode: "jit",
  theme: {
    colors: {
      primary: "#4bbda4",
      secondary: "#8bd8bd",
      tertiary: "#141a46",
      background: "#22293b",
      white: "#FCFCFC",
    },
    extend: {
      fontFamily: {
        display: ["Josefin Sans", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
