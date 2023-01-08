/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'brown': {
        DEFAULT: '#D87D4A',
        light: '#FBAF85'
      },
      'grey': {
        DEFAULT: '#F1F1F1',
        light: '#FAFAFA',
        mid: '#4C4C4C'
      },
      'black': {
        DEFAULT: '#000000',
        mid: '#101010',
        light: '#0E0E0E'
      }
    },
    fontSize: {
      xs: '1.3rem',
      xsm: '1.4rem',
      sm: '1.5rem',
      md: '1.8rem',
      lg: '2.4rem',
      lgm: '2.8rem',
      xl: '3.2rem',
      '2xl': '4rem',
      '3xl': '5.6rem',
    },
    lineHeight: {
      xs: '1.9rem',
      xsm: '2.4rem',
      sm: '2.5rem',
      md: '3.3rem',
      lg: '3.6rem',
      xl: '3.8rem',
      '2xl': '4.4rem',
      '3xl': '5.8rem'
    },
    extend: {
      letterSpacing: {
        xp: '.1rem',
        xpm: '.115rem',
        sp: '.13rem',
        mp: '.15rem',
        lp: '.17rem',
        px: '.2rem',
        pp: '1rem'
      },
      borderRadius: {
        0.8: '0.8rem'
      },
      boxShadow: {},
      spacing: {
        1.6: '1.6rem',
        2.4: '2.4rem',
        3.2: '3.2rem',
        3.4: '3.4rem',
        3.6: '3.6rem',
        4.8: '4.8rem',
        5.6: '5.6rem',
        6.4: '6.4rem',
        8.8: '8.8rem',
        9.5: '9.5rem',
        '12f': '12rem',
        '16f': '16rem',
        ct: '111rem',
        cm: '68.9rem'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class'
}
