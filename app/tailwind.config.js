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
      width: {
        card: "420px",
      },
      height: {
        edu: "350px",
        hi: "224px",
        name: "184px",
        edu: "350px",
        me: "760px",
      },
      minHeight: {
        edu: "350px",
      },
    },
  },
  plugins: [],
};
