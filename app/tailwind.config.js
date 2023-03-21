/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#16161D",
        bg: "#EDEEF0",
        black: "#0000",
        white: "#FFFF",
      },
    },
  },
  plugins: [],
};
