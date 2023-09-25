import SideBar from "@/app/components/docs/side-bar";
import { getSidebar } from "@/lib/api-docs";

export const metadata = {
  title: '文档 - 笔头',
  description: '文档 - 笔头',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { docs } = getSidebar()


  return (
    <div className="container grid grid-cols-12">
      <div className="col-span-3 h-[calc(100vh-40px)] ">
        <SideBar docs={docs}></SideBar>
      </div>
      <div>{children}</div>
    </div>
  );
}
