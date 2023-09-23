/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'bitou-tech.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
