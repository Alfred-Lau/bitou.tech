import { fetchArticles } from '@/app/api/article';
import React, { use } from 'react';

export default function BlogList() {
  const { data: blogs } = use(fetchArticles());

  return (
    <div className="w-[1300px] ">
      {blogs?.map((blog) => {
        return (
          <div key={blog.id} className="mb-[20px] bg-sky-600 px-20 py-20">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </div>
  );
}
