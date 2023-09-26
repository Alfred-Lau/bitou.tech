import { BlogPost } from '@/types/blog';
import { DOMAIN } from './const';
import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';

export const fetchBlogs = async () => {
  const res = await fetch(`${DOMAIN}/article`);
  return res.json();
};

export const getLocalBlogList = () => {
  const files = fs
    .readdirSync(`${process.cwd()}/content/blog`)
    .filter((filename) => filename.endsWith('.md'));
  const dir = path.join(process.cwd(), 'content/blog/');

  const blogs = files.map((filename) => {
    const blog = getPostBySlug(dir, filename);

    return blog;
  });
  return {
    blogs,
  };
};

const getPostBySlug = (dir: string, slug: string): BlogPost | null => {
  try {
    const VERSION = fs.readFileSync('VERSION').toString();
    const filePath = path.join(dir, slug);

    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(markdownWithMeta);

    if (!data || !content) return null;

    const contentWithVersion: string = content.replace(
      /%%bb_version%%/g,
      VERSION
    );

    return {
      ...data,
      content: contentWithVersion,
      slug,
      // timeToRead: getTimeToRead(content),
    } as BlogPost;
  } catch (e) {
    return null;
  }
};
