export const metadata = {
  title: '关于 - 笔头',
  description: '关于 - 笔头',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-200 sticky top-[68px]">left menu</div>
      <div>{children}</div>
    </div>
  );
}
