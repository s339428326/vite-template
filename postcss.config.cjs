module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
