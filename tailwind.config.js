/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      mobile: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      mainblue: "#23A6F0",
      papayas: {
        textblack: "#252B42",
        textgray: "#737373",
        textwhite: "#FFFFFF",
      },
    },
    fontFamily: {
      rob: ["Roboto", "sans-serif"],
      seg: ["Segoe UI", "sans-serif"],
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
