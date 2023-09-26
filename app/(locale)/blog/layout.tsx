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
      <div className="md:flex md:justify-between">
        <div className="md:h-[400px] md:flex md:items-start md:flex-col md:justify-center md:w-[560px]">
          <h3 className=" md:text-[40px]">Hit News</h3>
          <p className="md:mt-[20px]">
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
