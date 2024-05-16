import Nav from '../components/nav';

export const metadata = {
  title: "博客 - 笔头",
  description: "博客 - 笔头",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav textColor="#000" bgColor="#fff"></Nav>
      <div className="container-v2">
        <div>{children}</div>
      </div>
    </>
  );
}
