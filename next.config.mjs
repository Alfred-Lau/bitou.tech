import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bitou-tech.oss-cn-hangzhou.aliyuncs.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/docs",
        destination: "/docs/updates",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
