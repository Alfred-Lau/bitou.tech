import Image from 'next/image';

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
      <div className=" flex  justify-between">
        <div className=" h-[400px]  flex  items-start  flex-col  justify-center  w-[560px]">
          <h3 className="  text-[40px]">Hit News</h3>
          <p className=" mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat
            iste explicabo inventore recusandae saepe repudiandae iusto, natus
            dolor, harum vero molestiae sint, reiciendis quasi. Laboriosam odit
            ullam dignissimos dicta.
          </p>
        </div>
        <div>
          <Image
            src="/content/blog/1-12-1-new-features/gh-bb.webp"
            width={720}
            height={360}
            alt=""
          ></Image>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
