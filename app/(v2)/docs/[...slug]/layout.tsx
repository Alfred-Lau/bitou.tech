import { getSidebar } from '@/app/api/doc';
import SideBar from '@/app/components/docs/side-bar';

import Nav from '../../components/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sidebar, expandedList } = getSidebar();

  return (
    <>
      <Nav textColor="#000" bgColor="#fff"></Nav>
      <div className="container-v2 grid grid-cols-12">
        <div className="col-span-3 h-[calc(100vh-40px)] ">
          <SideBar sidebar={sidebar} expandedList={expandedList}></SideBar>
        </div>
        {children}
      </div>
    </>
  );
}
