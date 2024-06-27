import React from 'react';

import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { getUserInfoURL } from '@/app/api/user';

import Brand from './components/brand';
import Custom from './components/custom';
import Feature from './components/feature';
import Nav from './components/nav';
import ReadyToGo from './components/readytogo';
import User from './components/user';

export default async function Home() {
  const cks = cookies();

  const { data: userInfo } = await getUserInfoURL(
    {},
    {
      headers: {
        authorization: cks.get('authorization')?.value,
      },
    },
  );
  return (
    <div>
      <div>
        <div className="relative bg-[url('https://render.bitou.tech/imgs/banner.png')] bg-no-repeat bg-center bg-cover min-h-[1024px] bg-[#e50f8d]">
          <Nav />
          <div className="flex justify-center items-center mt-[85px] text-white flex-col">
            <span></span>
            <div className="text-[80px] font-[800] leading-[90px] text-center">
              Online Creating <br /> Processing Is Easy.
            </div>
            <div className="text-[20px] font-[500] leading-[30px] py-[10px]">
              make online creation and keep track of all your sparkles.
            </div>

            <div>
              <Link href={'https://work.bitou.tech'}>
                <div className="bg-[#E50F8D] px-[42px] py-[15px] text-white rounded-[40px] mt-[12px]">
                  Start Now
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-[-200px] w-full">
            {/* https://render.bitou.tech/imgs/Group.png */}
            <Image
              src="https://render.bitou.tech/imgs/iShot_2024-05-22_00.05.26.png"
              alt="bitou"
              width={1090}
              height={677}
              className="m-auto"
            />
          </div>
        </div>
        <User></User>
      </div>
      <Feature
        title="AI Powered"
        desc="We use the latest AI technology to make your work easier and faster."
      ></Feature>
      <Brand></Brand>
      <Feature
        title="Data Driven"
        desc=" We use data to make your work easier and faster."
      ></Feature>
      <Feature
        title="Opensource and Much functionality"
        desc="cooperate and share with the community, and have more functions."
      ></Feature>
      <Custom></Custom>
      <ReadyToGo></ReadyToGo>
    </div>
  );
}
