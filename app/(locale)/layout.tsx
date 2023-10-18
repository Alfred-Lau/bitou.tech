import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import './globals.css';
import '@/styles/main.scss';

export const metadata = {
  title: '笔头 - 你的首席内容官',
  description: '你的分享值得被时光看见。关注全链路流量和内容的整个生命周期',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="笔头 - 你的首席内容官" />
      <meta property="og:url" content="https://bitou.tech/" />
      <meta
        property="og:image"
        content="https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/bitou_tech.png"
      />
      <meta
        property="og:description"
        content="你的分享值得被时光看见。关注全链路流量和内容的整个生命周期"
      />
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
