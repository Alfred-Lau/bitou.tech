import "../globals.css";
import "@/styles/main.scss";

import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "./components/footer";

export const metadata = {
  title:
    "Bitou - Your Chief Content Officer - Focus on Online Content Creation and Sharing",
  description:
    "Your sharing deserves to be seen by time. Focusing on the entire lifecycle of full-link traffic and content, Bitou specializes in online content creation and sharing.",
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
        content="Bitou - Your Chief Content Officer - Focus on Online Content Creation and Sharing"
      />
      <meta property="og:url" content="https://bitou.tech/" />
      <meta
        property="og:image"
        content="https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/bitou_tech.png"
      />
      <meta
        property="og:description"
        content="Your sharing deserves to be seen by time. Focusing on the entire lifecycle of full-link traffic and content, Bitou specializes in online content creation and sharing."
      />
      <link rel="icon" href="/favicon.png" sizes="any" />
      <Script src="https://bitou-tracert.oss-cn-hangzhou.aliyuncs.com/index.browser.js"></Script>
      <body>
        {children}
        <Footer></Footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
