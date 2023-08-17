/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/project02/',
        destination: process.env.PROJECT2_URL,
      },
      {
        source: '/project02/:match*',
        destination: process.env.PROJECT2_URL + ':match',
      },
    ];
  },
};

module.exports = nextConfig;
