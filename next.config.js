/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bitou-tech.oss-cn-hangzhou.aliyuncs.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "render.bitou.tech",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/docs",
        destination: "https://docs.bitou.tech/",
        permanent: true,
      },
    ];
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://render.bitou.tech/mainsite/' : '',
};

module.exports = nextConfig;
