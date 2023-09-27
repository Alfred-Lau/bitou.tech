import { getLocalBlogList } from '@/app/api/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export type BlogType = {
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  slug: string;
  tags: string[];
  id: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
};

export const metadata = {
  title: '博客 - 笔头',
  description: '博客 - 笔头',
};

export default function Blog(props: any) {
  const { blogs } = getLocalBlogList();

  if (!blogs) return notFound();

  if (blogs.length === 0) return <div>暂无博客</div>;

  return (
    <div className=" grid  grid-cols-12  gap-[20px]  my-[40px]">
      {blogs.map((blog, index) => {
        return (
          blog && (
            <Link
              key={index}
              href={`/blog/${blog.slug}`}
              className="col-span-4 aspect-[1] overflow-hidden rounded-[4px] border border-gray-90  hover:border-gray-80 transition-colors duration-200 relative"
            >
              <img
                className="h-[260px] min-w-full object-contain"
                src={blog.feature_image}
                alt={blog.title}
                width={undefined}
                height={undefined}
              />
              <div className=" p-[20px]">
                <h2>{blog.title}</h2>
                <div>{blog.description?.slice(0, 10)}</div>
                <div>{blog.content?.slice(0, 21)}</div>
                <div>{blog.published_at}</div>
                <div>{blog.tags}</div>
              </div>
            </Link>
          )
        );
      })}
    </div>
  );
}
