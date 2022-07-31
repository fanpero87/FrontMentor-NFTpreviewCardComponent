/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        'app-cyan': 'hsl(178, 100%, 50%)',
        'very-dark-blue-main': 'hsl(217, 54%, 11%)',
        'very-dark-blue-card': 'hsl(216, 50%, 16%)',
        'very-dark-blue-line': 'hsl(215, 32%, 27%)',
        'app-white': 'hsl(0, 0%, 100%)',

      },
      fontFamily: {
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
