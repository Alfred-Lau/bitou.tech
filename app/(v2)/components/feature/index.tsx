import Image from 'next/image';

export default function Feature() {
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
            <h2 className="text-4xl font-bold">Feature</h2>
            <p className="text-lg mt-[20px]">
              Even the smallest of ideas deserve to be seen by more people,
              because there are like-minded people waiting for you out there in
              the distance.
            </p>
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
