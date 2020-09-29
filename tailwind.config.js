module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["./src/*.js","./src/**/*.js", "./public/**/*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
