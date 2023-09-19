import { fetchArticles } from '@/app/api/article';
import React, { use } from 'react';
import Image from 'next/image';

export default function BlogList() {
  const { data: blogs } = use(fetchArticles());

  return (
    <div className="flex flex-wrap mt-[40px] ">
      {blogs?.map((blog: any) => {
        return (
          <div
            className="w-1/4 h-[400px] p-[10px] hover:cursor-pointer hover:translate-y-[-10px] transition-all ease-in-out duration-300"
            key={blog.id}
          >
            <div className="h-full mb-[10px] border-[1px] border-solid  rounded-[4px] p-[10px] wrap">
              <Image src="images/th.jpeg" alt="blog" className="cover w-full" />
              <h1 className="text-[24px] leading-[28px] pt-[50px] text-[#181A2A] ">
                {blog.title}
              </h1>
              <p className="text-[12px] break-words">{blog.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
