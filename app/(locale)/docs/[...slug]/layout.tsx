import { getSidebar } from '@/app/api/doc';
import SideBar from '@/app/components/docs/side-bar';
// import type { Metadata, ResolvingMetadata } from 'next';

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   };
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sidebar, expandedList } = getSidebar();

  return (
    <div className="container grid grid-cols-12">
      <div className="col-span-3 h-[calc(100vh-40px)] ">
        <SideBar sidebar={sidebar} expandedList={expandedList}></SideBar>
      </div>
      {children}
    </div>
  );
}
