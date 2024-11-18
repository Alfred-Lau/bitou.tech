import React from "react";

import Image from "next/image";
import Link from "next/link";

import Brand from "./components/brand";
import Custom from "./components/custom";
import Feature from "./components/feature";
import Nav from "./components/nav";
import ReadyToGo from "./components/readytogo";
import User from "./components/user";

const Banner = () => (
  <div className="relative bg-[url('https://render.bitou.tech/imgs/banner.png')] bg-no-repeat bg-center bg-cover md:min-h-[1024px] bg-[#e50f8d]">
    <Nav />
    <div className="flex justify-center items-center mt-[85px] text-white flex-col">
      <span></span>
      <div className="text-[32px] leading-[50px] md:text-[80px] font-[800] md:leading-[90px] text-center">
        Online Creating <br /> Processing Is Easy.
      </div>
      <div className="px-[20px] py-[20px] text-center text-[20px] leading-[30px] font-[500] md:leading-[30px] md:py-[10px]">
        make online creation and keep track of all your sparkles.
      </div>
      <div>
        <Link href={"https://work.bitou.tech"}>
          <div className="bg-[#E50F8D] px-[42px] py-[15px] text-white rounded-[40px] mt-[12px]">
            Start Now
          </div>
        </Link>
      </div>
    </div>
    <div className="absolute bottom-[-200px] w-full">
      <Image
        src="https://render.bitou.tech/imgs/iShot_2024-05-22_00.05.26.png"
        alt="bitou"
        width={1090}
        height={677}
        className="m-auto"
      />
    </div>
  </div>
);

const Features = () => (
  <>
    <Feature
      title="AI Powered"
      desc="We use the latest AI technology to make your work easier and faster."
    />
    <Feature
      title="Data Driven"
      desc=" We use data to make your work easier and faster."
    />
    <Feature
      title="Open Source and Much functionality"
      desc="cooperate and share with the community, and have more functions."
    />
  </>
);

export default async function Home() {
  return (
    <div>
      <Banner />
      <User />
      <Features />
      <Brand />
      <Custom />
      <ReadyToGo />
    </div>
  );
}
