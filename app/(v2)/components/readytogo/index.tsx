import Link from 'next/link';

export default function ReadyToGo() {
  return (
    <div className="container-v2">
      <div className="bg-[#FBFBFB] py-[97px] flex flex-col items-center">
        <div>Trusted By 200 Users ***</div>
        <div className="text-3xl font-[700]  md:text-[42px] md:font-[700] md:leading-[50px]">
          Ready To Get Started ?
        </div>

        <div className="my-[10px] text-center">
          make online creation and keep track of all your sparkles.
        </div>

        <div>
          <div className="bg-[#E50F8D] px-[42px] py-[15px] text-white rounded-[40px] mt-[12px]">
            <Link href={'https://work.bitou.tech'}>Go to Studio!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
