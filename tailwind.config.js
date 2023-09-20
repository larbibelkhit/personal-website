/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceCodePro: "Source Code Pro",
      },
      minHeight: {
        "1/3": "33vh",
        "3/4": "75vh",
      }
    },
  },
  plugins: [],
}