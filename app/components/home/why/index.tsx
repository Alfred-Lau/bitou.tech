import React from 'react';
import Image from 'next/image';

const reasons = [
  {
    id: 1,
    title: 'Bitou grow your content',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    image:
      'https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/Edit.png',
  },
  {
    id: 2,
    title: 'Bitou grow your content',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    image:
      'https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/Edit.png',
  },
  {
    id: 3,
    title: 'Bitou grow your content',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    image:
      'https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/Edit.png',
  },
  {
    id: 4,
    title: 'Bitou grow your content',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    image:
      'https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/Edit.png',
  },
];

export default function Why() {
  return (
    <div className="container py-[96px] ">
      <div className="section_title">Why BiTou</div>
      <div className="section_summary">
        Creativity is nothing but the way to solve new problems.
      </div>
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
