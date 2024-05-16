import Image from 'next/image';

export default function Brand() {
  return (
    <div>
      <div className="container-v2 flex flex-col items-center justify-center">
        <div className="text-[42px] font-[700] leading-[50px]">
          These Brands Trust Us.
        </div>
        <div className="flex flex-wrap  my-[69px] justify-between w-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-full">
              <Image
                src="https://render.bitou.tech/ai_painting/8A5F11E6-6762-44B5-99C7-C9D4383FAC2C-5577-000004A273B8F468.jpg"
                alt=""
                width={60}
                height={60}
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
