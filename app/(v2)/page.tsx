import React from 'react';

import Image from 'next/image';

import Brand from './components/brand';
import Custom from './components/custom';
import Feature from './components/feature';
import Nav from './components/nav';
import ReadyToGo from './components/readytogo';
import User from './components/user';

export default function Home() {
  return (
    <div>
      <div>
        <div className="relative bg-[url('https://render.bitou.tech/imgs/banner.png')] bg-no-repeat bg-center bg-cover min-h-[1024px]">
          <Nav />
          <div className="flex justify-center items-center mt-[85px] text-white flex-col">
            <span></span>
            <div className="text-[80px] font-[800] leading-[90px] text-center">
              Online Creating <br /> Processing Is Easy.
            </div>
            <div className="text-[20px] font-[500] leading-[30px] py-[10px]">
              make online payments and keep track of all your transactions.
            </div>

            <div>
              <div className="bg-[#E50F8D] px-[42px] py-[15px] text-white rounded-[40px] mt-[12px]">
                Download Desktop App
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-200px] w-full">
            {/* https://render.bitou.tech/imgs/Group.png */}
            <Image
              src="https://render.bitou.tech/imgs/iShot_2024-05-14_22.40.05.png"
              alt="bitou"
              width={1090}
              height={677}
              className="m-auto"
            />
          </div>
        </div>
        <User></User>
      </div>
      <Feature></Feature>
      <Brand></Brand>
      <Feature></Feature>
      <Feature></Feature>
      <Custom></Custom>
      <ReadyToGo></ReadyToGo>
    </div>
  );
}
