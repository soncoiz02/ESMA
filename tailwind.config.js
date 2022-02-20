module.exports = {
  content: ["*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "soft": "0 0 5px 1px rgba(0,0,0,0.1)"
      },
      borderRadius: {
        "circle": "50px"
      },
      witdh: {
        "calc-1": "calc(100% / 4 - 50px)",
        "calc-2": "calc(100% - 240px)"
      }
    },
  },
  plugins: [],
};