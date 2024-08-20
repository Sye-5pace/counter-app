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
      'wellread': '#BA3630',
      'mercury': '#E1E1E1',
      'foggygray':'#D1D2BE'
    },
    extend: {
      boxShadow: {
        'inner-bottom': 'inset 0 -7.5px 1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

