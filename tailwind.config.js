module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero" : "url('/Assets/Background.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
