/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      // 'ubuntu': ['Ubuntu','sans-serif'],
    },
    colors: {
      'pavlova': '#D4BE9C',
      'cello':'#1F3E59',
      'well-read': '#BA3630',
      'foggy-gray': '#D1D2BE'
    },
    extend: {},
  },
  plugins: [],
}

