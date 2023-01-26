/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
  },
  experimental: {
    appDir: false,
  }
};
// nextConfig
