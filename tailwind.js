module.exports = {
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        // primary: "#F36566",
        primary: {
          100: '#FFE6E7',
          200: '#FFCCD0',
          300: '#FFB3BC',
          400: '#F28F94',
          500: '#EF7883',
          600: '#ED5F70',
          700: '#F36566',
          800: '#D85B61',
          900: '#A5474E',
        },
        secondary: "#2A221D",
        neutral: "#F1F1F1",
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [],
}
