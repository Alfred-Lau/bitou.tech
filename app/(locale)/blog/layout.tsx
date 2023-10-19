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
          <h3 className="  text-[40px]">最新发布</h3>
          <p className=" mt-[20px] text-[18px] leading-[32px]">
            你的分享值得被时光看见。关注全链路流量和内容的整个生命周期，笔头，专注个人品牌的运营工具，效率提升打造
          </p>
        </div>
        <div>
          <Image
            src="https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/uploads/20230518094635_59921cb4.png"
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
