/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
};

module.exports = nextConfig;
