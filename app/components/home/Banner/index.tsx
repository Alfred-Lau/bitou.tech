import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import bannerImg from '@/public/images/banner-2.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="h-[400px] md:flex md:items-center md:content-center md:flex-col md:pt-[88px]">
        <h1 className=" md:w-[744px] md:h-[67px] md:font-[700] md:text-[56px] md:leading-[66px] md:text-center md:mt-[46px]">
          {/* Dev Less, Content More */}
          笔头，你个人的首席内容官
        </h1>
        <div className="w-[650px] text-center text-gray-900 text-opacity-70 text-xl font-normal font-['Poppins'] leading-9 mt-[20px]">
          你的分享值得被看见。帮助快速构建个人品牌，让你的内容更加专注。
        </div>
        <div className="flex justify-center items-center h-full gap-[20px] ">
          <Link
            href="https://work.bitou.tech"
            className=" md:bg-blue-500 text-center w-[200px] bg-slate-100 px-[32px] py-[14px] rounded-[4px] text-[#fff] hover:bg-blue-800 hover:text-[#fff] transition-all duration-200 ease-in-out"
          >
            快速开始
          </Link>
          <Link
            href="https://bitou.tech/docs"
            className=" md:bg-blue-500 text-center w-[200px] bg-slate-100 px-[32px] py-[14px] rounded-[4px] text-[#fff] hover:bg-blue-800 hover:text-[#fff] transition-all duration-200 ease-in-out"
          >
            了解更多
          </Link>
        </div>
      </div>
      <div className="md:absolute md:bottom-0 md:h-[20px]" />
      <div className="md:absolute md:left-[50%]  md:translate-x-[-50%]">
        <Image
          width={936}
          height={585}
          className="w-[936px] h-[585px] rounded-[20px] shadow"
          // src="http://bitou-tech.oss-cn-hangzhou.aliyuncs.com/uploads/file_1695173578914.png"
          src={bannerImg}
          alt="bitou"
        ></Image>
      </div>
    </div>
  );
}
