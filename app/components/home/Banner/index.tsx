"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clx from "classnames";
import styles from "./index.module.scss";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <div className={clx(styles.banner, "sm:!h-[520px] sm:!mb-auto")}>
      <div className={styles.triangle}></div>
      <div className="h-[400px]  flex  items-center  content-center  flex-col  pt-[88px]">
        <h1 className="w-[744px]  h-[67px]  font-[700]  text-[56px]  leading-[66px]  text-center  mt-[46px] sm:w-full sm:text-[24px] ">
          {/* Dev Less, Content More */}
          <div>
            <span>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("笔头, 你的首席内容官")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .deleteChars(9)
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </span>
          </div>
        </h1>
        <div className="w-[650px] text-center text-gray-900 text-opacity-70 text-xl font-normal font-['Poppins'] leading-9 mt-[20px] sm:w-full sm:text-[18px] ">
          你的分享值得被时光看见
        </div>
        <div className="flex justify-center items-center h-full gap-[20px] ">
          <Link
            href="https://work.bitou.tech"
            className="  bg-blue-500 text-center w-[200px]  px-[32px] py-[14px] rounded-[4px] text-[#fff] hover:bg-blue-800 hover:text-[#fff] transition-all duration-200 ease-in-out sm:w-[100px] sm:text-[12px] sm:px-[12px] sm:py-[12px]"
          >
            快速开始
          </Link>
          <Link
            href="https://bitou.tech/docs"
            className="  bg-blue-500 text-center w-[200px] px-[32px] py-[14px] rounded-[4px] text-[#fff] hover:bg-blue-800 hover:text-[#fff] transition-all duration-200 ease-in-out sm:w-[100px] sm:text-[12px] sm:px-[12px] sm:py-[12px]"
          >
            了解更多
          </Link>
        </div>
      </div>
      <div className=" absolute  bottom-0  h-[20px]" />
      <div className=" absolute  left-[50%]   translate-x-[-50%]">
        <Image
          width={936}
          height={585}
          className="w-[936px] h-[585px] rounded-[20px] shadow sm:w-full sm:h-auto"
          src="https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/online/iShot_2024-02-20_23.39.24.png"
          // src={bannerImg}
          alt="bitou"
        ></Image>
      </div>
    </div>
  );
}
