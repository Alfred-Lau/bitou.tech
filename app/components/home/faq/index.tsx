import Link from 'next/link';
import React from 'react';

export default function FAQ() {
  return (
    <div className="container my-[90px]">
      <div className="text-center text-gray-900 text-[32px] font-bold font-['Poppins'] leading-[44.80px]">
        {/* Frequently asked questions */}
        快速上手
      </div>
      <div className="text-center text-gray-900 text-opacity-60 text-sm font-semibold font-['Poppins'] leading-[25.20px] mt-[20px]">
        开始使用笔头，你需要做的只有三步
      </div>
      <div className="mt-[40px] grid grid-cols-12">
        {[
          {
            id: 1,
            title: '随便写点什么',
            summary: '记下你想分享的内容',
            link: 'https://pen.bitou.tech/',
          },
          {
            id: 2,
            title: '对世界笑一笑',
            summary: '选择或者完全自定义你的内容模板',
            link: 'https://work.bitou.tech/',
          },
          {
            id: 3,
            title: '迭代，发布，看着它长大',
            summary: '对，就是这样，世界也会回你以歌',
            link: 'https://render.bitou.tech/',
          },
        ].map((item, index) => {
          return (
            <div
              // TODO: 添加一个hover的渐变色; TODO: 全站排查登录权限
              className="pl-[12px] col-span-4 h-[134px] justify-start items-center gap-5 inline-flex hover:bg-[#fffccc] hover:cursor-pointer sm:col-span-12"
              key={item.id}
            >
              <Link href={item.link}>
                <div className="w-7 h-7 relative sm:w-0"></div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                  <div className="self-stretch text-gray-900 text-base font-bold font-['Poppins'] leading-snug">
                    {item.title}
                  </div>
                  <div className="self-stretch text-gray-900 text-opacity-60 text-sm font-normal font-['Poppins'] leading-[25.20px]">
                    {item.summary}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
