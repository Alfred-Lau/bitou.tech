export const metadata = {
  title: '博客 - 笔头',
  description: '博客 - 笔头',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
}
