import { fetchBlogs } from '@/app/api/blog';
import React, { use } from 'react';
import Image from 'next/image';

const defaultBlogs = [
  {
    id: 1,
    title: 'UI Design',
    category: '',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    author: '',
    avatar: '',
    updated_at: '',
  },
  {
    id: 1,
    title: 'UI Design',
    category: '',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    author: '',
    avatar: '',
    updated_at: '',
  },
  {
    id: 1,
    title: 'UI Design',
    category: '',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    author: '',
    avatar: '',
    updated_at: '',
  },
  {
    id: 1,
    title: 'UI Design',
    category: '',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    author: '',
    avatar: '',
    updated_at: '',
  },
  {
    id: 1,
    title: 'UI Design',
    category: '',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas voluptatem sequi impedit.',
    author: '',
    avatar: '',
    updated_at: '',
  },
];

export default function BlogList() {
  const { data: blogs = defaultBlogs } = use(fetchBlogs());

  return (
    <div className="container mt-[40px]">
      <h3 className="section_title text-center">FROM THE BLOG</h3>
      <div className="section_summary m-auto text-center">From our blog</div>
      <div className="m-auto w-[552px] text-center text-gray-900 text-opacity-60 text-lg font-normal font-['Poppins'] leading-loose">
        Creativity is a highfalutin word for the work I have to do between now
        and Tuesday.
      </div>
      <div className="grid grid-cols-12">
        {defaultBlogs?.map((blog: any) => {
          return (
            <div
              className="col-span-4 h-[400px] p-[10px] hover:cursor-pointer hover:translate-y-[-10px] transition-all ease-in-out duration-300"
              key={blog.id}
            >
              <div className="h-full mb-[10px] border-[1px] border-solid  rounded-[4px] p-[10px] wrap">
                <Image src={blog.image} alt="blog" className="cover w-full" />
                <h1 className="text-[24px] leading-[28px] pt-[50px] text-[#181A2A] ">
                  {blog.title}
                </h1>
                <p className="text-[12px] break-words">{blog.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
