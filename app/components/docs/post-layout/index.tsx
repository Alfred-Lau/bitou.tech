import React from 'react';
import Breadcrumbs from '@/app/components/shared/breadcrumbs';

export default function PostLayout(props) {
  const {
    title,
    featureImage,
    currentSlug,
    breadcrumbs,
    navigationLinks,
    children,
  } = props;
  return (
    <div>
      {breadcrumbs?.length > 0 && (
        <Breadcrumbs className="mb-7 mt-[13px]" items={breadcrumbs} />
      )}
      <h1 className="mt-2.5 text-[44px] font-bold leading-extra-tight tracking-tighter text-gray-15 2xl:mt-1.5 lg:text-36 md:text-32 sm:mt-0 sm:text-30">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
