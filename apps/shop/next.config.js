/** @type {import('next').NextConfig} */

// const withTM = require("next-transpile-modules")(["ui"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "dist",
};

module.exports = nextConfig;
