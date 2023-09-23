import Link from 'next/link';
import Image from 'next/image';
import cls from 'classnames';
import styles from './index.module.scss';

export default function Header() {
  return (
    <div className={cls([styles.header])}>
      <div className="hidden px-[20px] m-auto md:grid grid-cols-3 md:justify-center md:items-center md:h-[68px] text-[#3B3C4A]">
        <div className="flex items-center">
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAIAAAAWUfUzAAAABmJLR0QA/wD/AP+gvaeTAAAFI0lEQVR4nO2aX0xbVRzHf7ctBdLhOkphQqg017kqHbqVB7foWHUjrcYYHnRKMk106ZQ/EZ2ZQjQhEH3SlybGjKAmYwxKs1BBWFMkiAG3qDABGX+6TGA4NwrsH5T2ctv6cF3lMAqMcM/pw/k8nZze03776e/ee+45ZUKhEFDuISEdILqgOhCoDgSqA4HqQKA6EKgOBKoDgepAoDoQqA4EqgOB6kCgOhCoDgSqA4HqQKA6EKgOhKjQMTMXmpmLiiVbwjo4Ht6p4TQnfJoTvndPcxxPNg4wBFfSOR6OVHM/9AfCPbmZ0vpj8lgZqUTkquN+FwDgGgy8dpLzk6sRMjpWdCFA1ggBHau4ECBoBLeONV0IkDKCVcc6XQgQMYJPxwO5EMBvBN+NtuRrz0+XOKHN8bD0SzIAU7GJgeDKA1/Mkp4+Kpdjufvi0+F0TuTlnfP5llcHw8DB0sRZ/TZ3934+ghFs8xHRTxYuGLjuuwsAJpOmsdEcFydddsCBD7Zd3Hdp/KHuJ57tlkWIg+2sEVcHFwwc7bWZf6ka996ElYwcOp40YBwS2pe3/Jz5zIWwEQmDvJVrMHCkWvRZvLg6Phv58dyN4cmF23kXvru6cAtQIwffV100/rn0eHdCx+79v8kkoJBDy3uxx3KQ06OlP1DetChqYHGvHVntX/zjuyO00+OV3+99Kz1eCQAtLePWjl97jQMrjnpqIfeTXU/n7JSFQnC8YfFk5/8lkapk3J/HiRdY3OpQxyrC7asLt14+/61QI/2PXo7kAgD+iHfVehv5UJBh4MtXY5bWyPatTKRRm4K0vLxcvHdnFUmN1wYC9wrwDu9rvT407r351ZXu1QcO3526Mj9j3v64lGFyM6Uz89AzHpTLoPpN+SMqEY2IfqNt97jf+L2OC27kGvjSw5lVu1+RMZJQCD4+u5izU/LCruU3ps0Fx7zDeWP47V4bF3yA+WiYD3cc+Oix5zY9UiRwTNJNKbpv9hyWSzbyw9r/7tv0PKuA6Zllw0bU8i1i5IkEvke4DRiRS6Sf6g6JF+l+sD7gm1J0p7Lz5ZJ1PXvIJdLqPYf3qTJEDoWAe/nnefWOU9mvr2lEcGFO0eFJFYbA4uCaRki5AFJLx6sYIegCCG4srGiErAsguwu3zAhxF0B2F06g7/a1qr/OA4BFu/fJralkw5DXEVVExQ5+9EB1IODQ4Xa7W1tbl/aMjo4ODERc/iEIDh1Op7OwsHBpT3Nzs81mA4DS0tKCggIMGdYJpr9SzM/P2+12AEhISDCZTCqVSqFQNDU1ORwOv99fVlZWUlJSWVnJcZxwTEVFRX19Pc/zFoultrZ2dna2uLgYQ04c1cEwjNfrtdvtNpvNbDb39PR0dna2tbWlpqYmJSUplUq9Xl9TU+NwOAwGg8FgsFqtLpero6Ojvb0dALq6upxOJ4acgO1SqlarGxoazpw5AwAej0fozM7O1ul0Wq02Pz/f7/erVCqLxWKxWGQymd/vxxNsGZiqA8OnbAo4rh0Mw0xOTrIsGwqFJBJJWlpa+CWNRlNXV2c0GouKioaGhliWBQCO41iWTU9Pt1qtLMtOT0/zPD81NZWcnCx6VAyzUo/HMzExIbRVKlVGRsbY2FggEBAEDQ4OAoBerx8ZGZmbmwOAxMRErVYbDAb7+vqCwf92sbOysmJiYsSOSifpCHRWikB1IFAdCFQHAtWBQHUgUB0IVAcC1YFAdSBQHQhUBwLVgUB1IFAdCFQHAtWBQHUgUB0I/wLLThKRzQPSOgAAAABJRU5ErkJggg=="
            alt="bitou"
            width={48}
            height={48}
          />
          <h1 className="text-2xl  leading-20 md:ml-[20px]">BiTou</h1>
        </div>
        <ul className="flex md:justify-between ">
          <li className="px-[20px] hover_text">
            <Link href={'/'}> Home</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/blog'}> Blog</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/docs'}> Docs</Link>
          </li>
          <li className="px-[20px] hover_text">
            <Link href={'/about'}> About</Link>
          </li>
        </ul>
        <div className="flex gap-[10px]"></div>
      </div>
    </div>
  );
}
