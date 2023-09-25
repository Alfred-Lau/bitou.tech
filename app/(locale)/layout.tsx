import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import './globals.css';
import '@/styles/main.scss'

export const metadata = {
  title: '笔头--站点全链路管理工具',
  description: '笔头--站点全链路管理工具',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
