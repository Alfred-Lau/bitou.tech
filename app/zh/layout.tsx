import "../globals.css";
import "@/styles/main.scss";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "笔头 - 你的首席内容官 - 专注线上内容创作分享",
  description:
    "你的分享值得被时光看见。关注全链路流量和内容的整个生命周期，笔头，专注线上内容创作分享",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <meta
        property="og:title"
        content="笔头 - 你的首席内容官 - 专注线上内容创作分享"
      />
      <meta property="og:url" content="https://bitou.tech/" />
      <meta
        property="og:image"
        content="https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/bitou_tech.png"
      />
      <meta
        property="og:description"
        content="你的分享值得被时光看见。关注全链路流量和内容的整个生命周期，笔头，专注线上内容创作分享"
      />
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
