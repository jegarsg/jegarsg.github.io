import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disables turbopack, falls back to webpack
  },
};

module.exports = nextConfig;
export default nextConfig;
