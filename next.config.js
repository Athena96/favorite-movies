
/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    output: 'standalone',
    /* config options here */
    env: {
        TEST: process.env.TEST
      }
  }
  
  module.exports = nextConfig