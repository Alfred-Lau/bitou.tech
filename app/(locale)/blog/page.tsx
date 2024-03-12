/* eslint-disable @next/next/no-img-element */
import { getLocalBlogList } from '@/app/api/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
    <div className="">
      <div className="flex  justify-between">
        <div className=" h-[400px]  flex  items-start  flex-col  justify-center  w-[560px]">
          <h3 className="  text-[40px]">最新发布</h3>
          <p className=" mt-[20px] text-[18px] leading-[32px]">
            你的分享值得被时光看见。关注全链路流量和内容的整个生命周期，笔头，专注个人品牌的运营工具，效率提升打造
          </p>
        </div>
        <div>
          <Image
            src="https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/uploads/20230518094635_59921cb4.png"
            width={720}
            height={360}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="grid  grid-cols-12  gap-[40px]  my-[40px]">
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
    </div>
  );
}
