import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: '文档 - 笔头',
  description: '初始化项目',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
