import Link from 'next/link';
import Image from 'next/image';
import cls from 'classnames';
import styles from './index.module.scss';

export default async function Header() {
  return (
    <header className={cls([styles.header])}>
      <div className="px-[20px] m-auto  grid grid-cols-3  justify-center  items-center  h-[68px] text-[#3B3C4A] ">
        <div className="flex items-center">
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAIAAAAWUfUzAAAABmJLR0QA/wD/AP+gvaeTAAAFI0lEQVR4nO2aX0xbVRzHf7ctBdLhOkphQqg017kqHbqVB7foWHUjrcYYHnRKMk106ZQ/EZ2ZQjQhEH3SlybGjKAmYwxKs1BBWFMkiAG3qDABGX+6TGA4NwrsH5T2ctv6cF3lMAqMcM/pw/k8nZze03776e/ee+45ZUKhEFDuISEdILqgOhCoDgSqA4HqQKA6EKgOBKoDgepAoDoQqA4EqgOB6kCgOhCoDgSqA4HqQKA6EKgOhKjQMTMXmpmLiiVbwjo4Ht6p4TQnfJoTvndPcxxPNg4wBFfSOR6OVHM/9AfCPbmZ0vpj8lgZqUTkquN+FwDgGgy8dpLzk6sRMjpWdCFA1ggBHau4ECBoBLeONV0IkDKCVcc6XQgQMYJPxwO5EMBvBN+NtuRrz0+XOKHN8bD0SzIAU7GJgeDKA1/Mkp4+Kpdjufvi0+F0TuTlnfP5llcHw8DB0sRZ/TZ3934+ghFs8xHRTxYuGLjuuwsAJpOmsdEcFydddsCBD7Zd3Hdp/KHuJ57tlkWIg+2sEVcHFwwc7bWZf6ka996ElYwcOp40YBwS2pe3/Jz5zIWwEQmDvJVrMHCkWvRZvLg6Phv58dyN4cmF23kXvru6cAtQIwffV100/rn0eHdCx+79v8kkoJBDy3uxx3KQ06OlP1DetChqYHGvHVntX/zjuyO00+OV3+99Kz1eCQAtLePWjl97jQMrjnpqIfeTXU/n7JSFQnC8YfFk5/8lkapk3J/HiRdY3OpQxyrC7asLt14+/61QI/2PXo7kAgD+iHfVehv5UJBh4MtXY5bWyPatTKRRm4K0vLxcvHdnFUmN1wYC9wrwDu9rvT407r351ZXu1QcO3526Mj9j3v64lGFyM6Uz89AzHpTLoPpN+SMqEY2IfqNt97jf+L2OC27kGvjSw5lVu1+RMZJQCD4+u5izU/LCruU3ps0Fx7zDeWP47V4bF3yA+WiYD3cc+Oix5zY9UiRwTNJNKbpv9hyWSzbyw9r/7tv0PKuA6Zllw0bU8i1i5IkEvke4DRiRS6Sf6g6JF+l+sD7gm1J0p7Lz5ZJ1PXvIJdLqPYf3qTJEDoWAe/nnefWOU9mvr2lEcGFO0eFJFYbA4uCaRki5AFJLx6sYIegCCG4srGiErAsguwu3zAhxF0B2F06g7/a1qr/OA4BFu/fJralkw5DXEVVExQ5+9EB1IODQ4Xa7W1tbl/aMjo4ODERc/iEIDh1Op7OwsHBpT3Nzs81mA4DS0tKCggIMGdYJpr9SzM/P2+12AEhISDCZTCqVSqFQNDU1ORwOv99fVlZWUlJSWVnJcZxwTEVFRX19Pc/zFoultrZ2dna2uLgYQ04c1cEwjNfrtdvtNpvNbDb39PR0dna2tbWlpqYmJSUplUq9Xl9TU+NwOAwGg8FgsFqtLpero6Ojvb0dALq6upxOJ4acgO1SqlarGxoazpw5AwAej0fozM7O1ul0Wq02Pz/f7/erVCqLxWKxWGQymd/vxxNsGZiqA8OnbAo4rh0Mw0xOTrIsGwqFJBJJWlpa+CWNRlNXV2c0GouKioaGhliWBQCO41iWTU9Pt1qtLMtOT0/zPD81NZWcnCx6VAyzUo/HMzExIbRVKlVGRsbY2FggEBAEDQ4OAoBerx8ZGZmbmwOAxMRErVYbDAb7+vqCwf92sbOysmJiYsSOSifpCHRWikB1IFAdCFQHAtWBQHUgUB0IVAcC1YFAdSBQHQhUBwLVgUB1IFAdCFQHAtWBQHUgUB0I/wLLThKRzQPSOgAAAABJRU5ErkJggg=="
            alt="bitou"
            width={48}
            height={48}
            style={{
              borderRadius: '39%',
            }}
          />
          <h1 className="text-2xl  leading-20  ml-[20px] sm:text-[18px]">
            Bitou
          </h1>
        </div>
        <ul className="flex  justify-between sm:hidden">
          <li className="px-[20px] hover_text">
            <Link href={'/'}> 首页</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/product'}>产品</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/blog'}> 博客</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/showcase'}> 案例</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/docs'}> 文档</Link>
          </li>
        </ul>
        <div className="flex gap-[10px] justify-end sm:hidden">
          <a
            href={
              'https://work.bitou.tech/login?redirect=${window.location.href}'
            }
            className="px-[20px] hover_text"
          >
            <a href={'https://github.com/Alfred-Lau'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 26"
                width="22"
                height="22"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M13 .324c-7.15 0-13 5.85-13 13 0 5.769 3.737 10.644 8.856 12.35.65.082.894-.244.894-.65V22.83c-3.656.813-4.388-1.706-4.388-1.706-.568-1.462-1.462-1.868-1.462-1.868-1.219-.813.081-.813.081-.813 1.3.081 2.032 1.3 2.032 1.3 1.137 1.95 3.006 1.381 3.818 1.056a2.805 2.805 0 0 1 .813-1.706c-2.925-.325-5.931-1.462-5.931-6.419 0-1.381.487-2.6 1.3-3.494-.163-.325-.57-1.625.162-3.412 0 0 1.056-.325 3.575 1.3 1.056-.325 2.113-.406 3.25-.406s2.194.162 3.25.406c2.519-1.706 3.575-1.381 3.575-1.381.731 1.787.244 3.087.163 3.412.812.894 1.3 2.031 1.3 3.494 0 4.956-3.007 6.094-5.932 6.419.488.406.894 1.218.894 2.437v3.575c0 .325.244.732.894.65C22.263 23.968 26 19.093 26 13.324c0-7.15-5.85-13-13-13Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </a>
        </div>
        <div className="hidden sm:block sm:absolute sm:top-[16px] sm:right-[16px]">
          三
        </div>
      </div>
    </header>
  );
}
