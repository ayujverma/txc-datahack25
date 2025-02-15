/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'geometric-lines': "url('/src/assets/pattern.svg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    }
  },
  plugins: [],
}