import Image from 'next/image';

const customs = Array.from({ length: 6 }).map((_, i) => ({
  avatar: "https://render.bitou.tech/imgs/avatar-for.png",
  name: "Anna Spronio",
  quote:
    "Sed eu in tincidunt arcu et faucibus a. Arcu, risus sapien ac odio ipsum risus imperdiet.",
  star: 4,
}));

export default function Custom() {
  return (
    <div className=" bg-[#FBFBFB]">
      <div className="container-v2 flex items-center flex-col">
        <div>Trusted By 200 Users ***</div>
        <div className="text-[42px] font-[700] leading-[50px]">
          These Customs Trust Us.
        </div>
        <div className="flex flex-wrap gap-[16px] my-[69px]">
          {customs.map((custom) => (
            <div key={custom.name} className="w-[calc((100%-16px)/2)] bg-white">
              <div className="flex p-[24px] items-center">
                <Image
                  src={custom.avatar}
                  alt={custom.name}
                  width={80}
                  height={80}
                  style={{
                    height: "80px",
                  }}
                />
                <div className="ml-[10px]">
                  <div className="text-[24px] font-[600] leading-[21px]">
                    {custom.name}
                  </div>
                  <div className="my-[6px] text-[16px] leading-[24px]">
                    {custom.quote}
                  </div>
                  <div>
                    {[...Array(custom.star)].map((_, i) => (
                      <span key={i}>*</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
