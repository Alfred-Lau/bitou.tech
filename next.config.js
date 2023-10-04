/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bitou-tech.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction/what-is-bytebase/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
