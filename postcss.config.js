// default settings: https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins
module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 0,
        features: {
          'custom-properties': false,
          'nesting-rules': true,
        },
      },
    ],
    ['@csstools/postcss-global-data', { files: ['./src/styles/custom-media-queries.css'] }],
    'postcss-custom-media',
  ],
};
