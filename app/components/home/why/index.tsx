import React from 'react';

import Image from 'next/image';

const reasons = [
  {
    id: 1,
    title: "轻量创作",
    description:
      "哪怕再小的想法，也值得被更多的人看见，远方正有志同道合的人在等你",
    image:
      "https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/Edit.png",
  },
  {
    id: 2,
    title: "自定义模板",
    description:
      "各类持续丰富的模板，更多的自定义能力，移动端搭建能力的支持，让你放飞你的创意",
    image:
      "https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/Edit.png",
  },
  {
    id: 3,
    title: "AI 赋能",
    description:
      "bitou 小助手跑步入场，帮你记录文案，启迪思路，整理数据，设计插入，更重要的还能陪你一起成长",
    image:
      "https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/Edit.png",
  },
  {
    id: 4,
    title: "流量洞察 & 流程提效",
    description: "关心你的每一次分享，得到反馈，一次比一次更了解你的习惯",
    image:
      "https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/Edit.png",
  },
];

export default function Why() {
  return (
    <div className="container py-[96px] ">
      <div className="section_title">终于等到你</div>
      <div className="section_summary"></div>
      <ul className="grid grid-cols-12 mt-[20px] sm:gap-[12px]">
        {reasons.map((reason) => (
          <li key={reason.id} className="col-span-3 sm:col-span-6">
            <div className="w-[264px] h-[322px] px-6 py-14 bg-white rounded-xl shadow flex-col justify-start items-start gap-6 inline-flex sm:w-full ">
              <div className="self-stretch h-[210px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch h-[94px] flex-col justify-start items-start gap-6 flex">
                  <div className="w-12 h-12 relative">
                    <div className="w-8 h-8 left-0 top-[16px] absolute">
                      <Image src={reason.image} alt="" width={32} height={32} />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-900 text-base font-bold font-['Poppins'] leading-snug">
                    {reason.title}
                  </div>
                </div>
                <div className="self-stretch text-gray-900 text-opacity-60 text-sm font-normal font-['Poppins'] leading-[25.20px] sm:line-clamp-4">
                  {reason.description}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
