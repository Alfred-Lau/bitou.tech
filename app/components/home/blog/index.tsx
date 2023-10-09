/* eslint-disable @next/next/no-img-element */
import { getLocalBlogList } from '@/app/api/blog';
import React from 'react';
import Link from 'next/link';
import { formatDateTime } from '@/utils/format';
import { Avatar } from 'antd';

export default function BlogList() {
  const { blogs } = getLocalBlogList();

  return (
    <div className="container mt-[40px]">
      <h3 className="section_title text-center">FROM THE BLOG</h3>
      <div className="section_summary m-auto text-center">From our blog</div>
      <div className="m-auto w-[552px] text-center text-gray-900 text-opacity-60 text-lg font-normal font-['Poppins'] leading-loose sm:w-full">
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
                    <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAIAAAAWUfUzAAAABmJLR0QA/wD/AP+gvaeTAAAFI0lEQVR4nO2aX0xbVRzHf7ctBdLhOkphQqg017kqHbqVB7foWHUjrcYYHnRKMk106ZQ/EZ2ZQjQhEH3SlybGjKAmYwxKs1BBWFMkiAG3qDABGX+6TGA4NwrsH5T2ctv6cF3lMAqMcM/pw/k8nZze03776e/ee+45ZUKhEFDuISEdILqgOhCoDgSqA4HqQKA6EKgOBKoDgepAoDoQqA4EqgOB6kCgOhCoDgSqA4HqQKA6EKgOhKjQMTMXmpmLiiVbwjo4Ht6p4TQnfJoTvndPcxxPNg4wBFfSOR6OVHM/9AfCPbmZ0vpj8lgZqUTkquN+FwDgGgy8dpLzk6sRMjpWdCFA1ggBHau4ECBoBLeONV0IkDKCVcc6XQgQMYJPxwO5EMBvBN+NtuRrz0+XOKHN8bD0SzIAU7GJgeDKA1/Mkp4+Kpdjufvi0+F0TuTlnfP5llcHw8DB0sRZ/TZ3934+ghFs8xHRTxYuGLjuuwsAJpOmsdEcFydddsCBD7Zd3Hdp/KHuJ57tlkWIg+2sEVcHFwwc7bWZf6ka996ElYwcOp40YBwS2pe3/Jz5zIWwEQmDvJVrMHCkWvRZvLg6Phv58dyN4cmF23kXvru6cAtQIwffV100/rn0eHdCx+79v8kkoJBDy3uxx3KQ06OlP1DetChqYHGvHVntX/zjuyO00+OV3+99Kz1eCQAtLePWjl97jQMrjnpqIfeTXU/n7JSFQnC8YfFk5/8lkapk3J/HiRdY3OpQxyrC7asLt14+/61QI/2PXo7kAgD+iHfVehv5UJBh4MtXY5bWyPatTKRRm4K0vLxcvHdnFUmN1wYC9wrwDu9rvT407r351ZXu1QcO3526Mj9j3v64lGFyM6Uz89AzHpTLoPpN+SMqEY2IfqNt97jf+L2OC27kGvjSw5lVu1+RMZJQCD4+u5izU/LCruU3ps0Fx7zDeWP47V4bF3yA+WiYD3cc+Oix5zY9UiRwTNJNKbpv9hyWSzbyw9r/7tv0PKuA6Zllw0bU8i1i5IkEvke4DRiRS6Sf6g6JF+l+sD7gm1J0p7Lz5ZJ1PXvIJdLqPYf3qTJEDoWAe/nnefWOU9mvr2lEcGFO0eFJFYbA4uCaRki5AFJLx6sYIegCCG4srGiErAsguwu3zAhxF0B2F06g7/a1qr/OA4BFu/fJralkw5DXEVVExQ5+9EB1IODQ4Xa7W1tbl/aMjo4ODERc/iEIDh1Op7OwsHBpT3Nzs81mA4DS0tKCggIMGdYJpr9SzM/P2+12AEhISDCZTCqVSqFQNDU1ORwOv99fVlZWUlJSWVnJcZxwTEVFRX19Pc/zFoultrZ2dna2uLgYQ04c1cEwjNfrtdvtNpvNbDb39PR0dna2tbWlpqYmJSUplUq9Xl9TU+NwOAwGg8FgsFqtLpero6Ojvb0dALq6upxOJ4acgO1SqlarGxoazpw5AwAej0fozM7O1ul0Wq02Pz/f7/erVCqLxWKxWGQymd/vxxNsGZiqA8OnbAo4rh0Mw0xOTrIsGwqFJBJJWlpa+CWNRlNXV2c0GouKioaGhliWBQCO41iWTU9Pt1qtLMtOT0/zPD81NZWcnCx6VAyzUo/HMzExIbRVKlVGRsbY2FggEBAEDQ4OAoBerx8ZGZmbmwOAxMRErVYbDAb7+vqCwf92sbOysmJiYsSOSifpCHRWikB1IFAdCFQHAtWBQHUgUB0IVAcC1YFAdSBQHQhUBwLVgUB1IFAdCFQHAtWBQHUgUB0I/wLLThKRzQPSOgAAAABJRU5ErkJggg==" />
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
