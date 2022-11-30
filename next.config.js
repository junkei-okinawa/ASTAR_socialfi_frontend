/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "plus.unsplash.com",
      "ibb.co",// robot https://i.ibb.co/Q8pdQv1/robot.jpg
      "i.ibb.co",// logo https://i.ibb.co/cNfW05w/image.png 
      "*.ic0.app",
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;