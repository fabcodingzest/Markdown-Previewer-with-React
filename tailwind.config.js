const plugin = require('tailwindcss/plugin')

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
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '90': '90%',
      'full': '100%',
      },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.3xl') },
        'h2': { fontSize: config('theme.fontSize.2xl') },
        'h3': { fontSize: config('theme.fontSize.xl') },
        'h4': { fontSize: config('theme.fontSize.lg') },
        'h5': { fontSize: config('theme.fontSize.md') },
        'h6': { fontSize: config('theme.fontSize.sm') },
      })
    })
  ],
}
