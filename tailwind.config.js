/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: "#111826",
      header: "#1A202C",
      white: "#FFFFFF",
      gray: "#B5B5B5",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      exl: "40px",
    },
    extend: {},
  },
  plugins: [],
};
