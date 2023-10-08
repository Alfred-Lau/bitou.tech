import { getDocDetail } from '@/app/api/doc';
import PostLayout from '@/app/components/docs/post-layout';
import Content from '@/app/components/shared/content';

export default function Docs({ params }: { params: { slug: string[] } }) {
  const { title, feature_image, slug, breadcrumbs, navigationLinks, content } =
    getDocDetail(params.slug.join('/'));

  return (
    <article className="col-span-6 col-start-4 flex flex-col lg:col-span-9 md:col-span-full">
      <PostLayout
        title={title}
        featureImage={feature_image || null}
        currentSlug={slug}
        breadcrumbs={breadcrumbs}
        navigationLinks={navigationLinks}
      >
        <Content content={content} />
      </PostLayout>
    </article>
  );
}
