export type BlogPost = {
  title: string;
  description: string;
  content: string;
  og_image?: string;
  feature_image: string;
  published_at: string;
  author: string;
  tags: string;
  slug: string;
  timeToRead: string;
  featured: boolean;
  integrations?: string;
};
