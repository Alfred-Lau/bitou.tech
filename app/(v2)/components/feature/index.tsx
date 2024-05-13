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
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[-10px] right-0">
        <Image src="" alt="" width={40} height={40}></Image>
      </div>
    </div>
  );
}
