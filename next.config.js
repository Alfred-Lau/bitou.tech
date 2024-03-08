/** @type {import('next').NextConfig} */
const nextConfig = {
  output :process.env.NODE_ENV === 'production' ? 'standalone' :undefined,
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
        destination: '/docs/introduction/what-is-bitou/',
        permanent: true,
      },
    ];
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://render.bitou.tech/mainsite/' : '',
};

module.exports = nextConfig;
