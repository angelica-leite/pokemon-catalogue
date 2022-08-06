/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost", "images.pokemontcg.io"],
  },
};
