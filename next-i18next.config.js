module.exports = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  localePath: require('path').resolve('./public/locales'),
};
