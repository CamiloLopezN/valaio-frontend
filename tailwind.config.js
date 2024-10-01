/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003a61',
        'secondary': '#fffeff',
        'tertiary': '#e65517',
      },
      fontFamily: {
        'body': ['Nunito']
      }
    },
  },
  plugins: [],
}

