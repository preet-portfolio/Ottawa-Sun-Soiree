/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"], // Add 'imgur.com' to the list of allowed domains
  },
};

module.exports = nextConfig;
