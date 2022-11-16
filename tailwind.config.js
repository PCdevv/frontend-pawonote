/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ijo1': '#A4B07E',
        'ijo2': '#707C4F',
        'ijo3': '#424106',
        'cok1': '#D4CB8C',
        'cok2': '#C6A685',
        'cok3': '#6D4930'
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#A4B07E",
          "secondary": "#707C4F",
          "accent": "#D4CB8C",
          "neutral": "#C6A685",
          "base-100": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#6D4930",
          "error": "#424106",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
}