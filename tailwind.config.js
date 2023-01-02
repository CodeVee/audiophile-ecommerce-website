/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor'
    },
    fontSize: {},
    lineHeight: {},
    extend: {
      letterSpacing: {},
      borderRadius: {},
      boxShadow: {},
      spacing: {}
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class'
}
