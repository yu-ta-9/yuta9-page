/** @type {import('next').NextConfig} */
import i18n from './next-i18next.config';

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
};

module.exports = nextConfig;
