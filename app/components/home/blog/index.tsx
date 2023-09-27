import { fetchBlogs, getLocalBlogList } from '@/app/api/blog';
import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDateTime } from '@/utils/format';
import { Avatar } from 'antd';

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
  const { blogs } = getLocalBlogList();

  return (
    <div className="container mt-[40px]">
      <h3 className="section_title text-center">FROM THE BLOG</h3>
      <div className="section_summary m-auto text-center">From our blog</div>
      <div className="m-auto w-[552px] text-center text-gray-900 text-opacity-60 text-lg font-normal font-['Poppins'] leading-loose">
        Creativity is a highfalutin word for the work I have to do between now
        and Tuesday.
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        {blogs?.map((blog: any, index) => {
          return (
            blog && (
              <Link
                key={index}
                href={`/blog/${blog.slug}`}
                className="col-span-4 aspect-[1] overflow-hidden rounded-[8px] border border-gray-90  hover:border-gray-80 transition-colors duration-200 relative"
              >
                <img
                  className="h-[260px] min-w-full object-contain"
                  src={blog.feature_image}
                  alt={blog.title}
                  width={undefined}
                  height={undefined}
                />
                <div className=" p-[20px]">
                  <div className="text-left text-violet-500 text-sm font-semibold font-['Poppins'] uppercase leading-normal tracking-wide">
                    {blog.tags}
                  </div>
                  <div className=" text-gray-900 text-xl font-bold font-['Poppins'] leading-7">
                    {blog.title}
                  </div>
                  <div className="line-clamp-3 text-gray-900 text-opacity-60 text-base font-normal font-['Poppins'] leading-7">
                    {blog.description}
                  </div>
                  <div className="flex items-center my-[6px]">
                    <Avatar />
                    <div className="ml-[10px]">
                      <div className="text-gray-900 text-sm font-semibold font-['Poppins'] leading-[25.20px]">
                        {blog.author || 'bitou'}
                      </div>
                      <div className="text-gray-900 text-opacity-60 text-xs font-normal font-['Poppins'] leading-snug">
                        {formatDateTime(blog.published_at)}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
}
