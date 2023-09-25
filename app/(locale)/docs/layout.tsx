export const metadata = {
  title: '来自页面内部的切换',
  description: '初始化项目',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-200">left menu</div>
      <div>{children}</div>
    </div>
  );
}
