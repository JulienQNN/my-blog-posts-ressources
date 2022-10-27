module.exports = {
  plugins: ["./node_modules/prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        astroAllowShorthand: false,
      },
    },
  ],
};