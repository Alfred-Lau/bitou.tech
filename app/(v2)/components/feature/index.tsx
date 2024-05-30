import Image from 'next/image';

export default function Feature(props) {
  const { title, desc } = props;
  return (
    <div className="bg-[#FBFBFB] relative">
      <div className="container-v2">
        <div className="flex items-center">
          <div className=" flex-1">
            <Image
              src="https://render.bitou.tech/imgs/feature.png"
              alt="feature"
              width={400}
              height={400}
            ></Image>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-lg mt-[20px]">{desc}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[-10px] right-0">
        <Image
          src="https://render.bitou.tech/imgs/corner.png"
          alt=""
          width={40}
          height={40}
        ></Image>
      </div>
    </div>
  );
}
