/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'LightCyan': '#cee3e9',
        'NeonGreen': '#52ffa8',
        'GrayishBlue': '#4e5d73',
        'DarkGrayishBlue': '#323a49',
        'DarkBlue': '#1f2632',
      },
      fontFamily: {
        'Manrope': 'Manrope',
        'ManropeBold' : 'Manrope-Bold'
      }
    },
  },
  plugins: [],
}