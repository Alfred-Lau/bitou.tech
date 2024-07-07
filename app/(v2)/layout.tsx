import '../globals.css';
import '@/styles/main.scss';

import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import ScriptContainer from '../components/ScriptContainer';
import Footer from './components/footer';

const meta = {
  title:
    "Bitou - Your Chief Content Officer - Focus on Online Content Creation and Sharing",
  description:
    "Your sharing deserves to be seen by time. Focusing on the entire lifecycle of full-link traffic and content, Bitou specializes in online content creation and sharing.",
  keywords: "AI Powered, Data Driven, Bitou",
  url: "https://bitou.tech/",
};

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    url: meta.url,
    alternates: {
      canonical: meta.url,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAIAAAAWUfUzAAAABmJLR0QA/wD/AP+gvaeTAAAFI0lEQVR4nO2aX0xbVRzHf7ctBdLhOkphQqg017kqHbqVB7foWHUjrcYYHnRKMk106ZQ/EZ2ZQjQhEH3SlybGjKAmYwxKs1BBWFMkiAG3qDABGX+6TGA4NwrsH5T2ctv6cF3lMAqMcM/pw/k8nZze03776e/ee+45ZUKhEFDuISEdILqgOhCoDgSqA4HqQKA6EKgOBKoDgepAoDoQqA4EqgOB6kCgOhCoDgSqA4HqQKA6EKgOhKjQMTMXmpmLiiVbwjo4Ht6p4TQnfJoTvndPcxxPNg4wBFfSOR6OVHM/9AfCPbmZ0vpj8lgZqUTkquN+FwDgGgy8dpLzk6sRMjpWdCFA1ggBHau4ECBoBLeONV0IkDKCVcc6XQgQMYJPxwO5EMBvBN+NtuRrz0+XOKHN8bD0SzIAU7GJgeDKA1/Mkp4+Kpdjufvi0+F0TuTlnfP5llcHw8DB0sRZ/TZ3934+ghFs8xHRTxYuGLjuuwsAJpOmsdEcFydddsCBD7Zd3Hdp/KHuJ57tlkWIg+2sEVcHFwwc7bWZf6ka996ElYwcOp40YBwS2pe3/Jz5zIWwEQmDvJVrMHCkWvRZvLg6Phv58dyN4cmF23kXvru6cAtQIwffV100/rn0eHdCx+79v8kkoJBDy3uxx3KQ06OlP1DetChqYHGvHVntX/zjuyO00+OV3+99Kz1eCQAtLePWjl97jQMrjnpqIfeTXU/n7JSFQnC8YfFk5/8lkapk3J/HiRdY3OpQxyrC7asLt14+/61QI/2PXo7kAgD+iHfVehv5UJBh4MtXY5bWyPatTKRRm4K0vLxcvHdnFUmN1wYC9wrwDu9rvT407r351ZXu1QcO3526Mj9j3v64lGFyM6Uz89AzHpTLoPpN+SMqEY2IfqNt97jf+L2OC27kGvjSw5lVu1+RMZJQCD4+u5izU/LCruU3ps0Fx7zDeWP47V4bF3yA+WiYD3cc+Oix5zY9UiRwTNJNKbpv9hyWSzbyw9r/7tv0PKuA6Zllw0bU8i1i5IkEvke4DRiRS6Sf6g6JF+l+sD7gm1J0p7Lz5ZJ1PXvIJdLqPYf3qTJEDoWAe/nnefWOU9mvr2lEcGFO0eFJFYbA4uCaRki5AFJLx6sYIegCCG4srGiErAsguwu3zAhxF0B2F06g7/a1qr/OA4BFu/fJralkw5DXEVVExQ5+9EB1IODQ4Xa7W1tbl/aMjo4ODERc/iEIDh1Op7OwsHBpT3Nzs81mA4DS0tKCggIMGdYJpr9SzM/P2+12AEhISDCZTCqVSqFQNDU1ORwOv99fVlZWUlJSWVnJcZxwTEVFRX19Pc/zFoultrZ2dna2uLgYQ04c1cEwjNfrtdvtNpvNbDb39PR0dna2tbWlpqYmJSUplUq9Xl9TU+NwOAwGg8FgsFqtLpero6Ojvb0dALq6upxOJ4acgO1SqlarGxoazpw5AwAej0fozM7O1ul0Wq02Pz/f7/erVCqLxWKxWGQymd/vxxNsGZiqA8OnbAo4rh0Mw0xOTrIsGwqFJBJJWlpa+CWNRlNXV2c0GouKioaGhliWBQCO41iWTU9Pt1qtLMtOT0/zPD81NZWcnCx6VAyzUo/HMzExIbRVKlVGRsbY2FggEBAEDQ4OAoBerx8ZGZmbmwOAxMRErVYbDAb7+vqCwf92sbOysmJiYsSOSifpCHRWikB1IFAdCFQHAtWBQHUgUB0IVAcC1YFAdSBQHQhUBwLVgUB1IFAdCFQHAtWBQHUgUB0I/wLLThKRzQPSOgAAAABJRU5ErkJggg==",
          width: 400,
          height: 400,
        },
      ],
    },
    viewport:
      "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <meta
        property="og:title"
        content="Bitou - Your Chief Content Officer - Focus on Online Content Creation and Sharing"
      />
      <meta property="og:url" content="https://bitou.tech/" />
      <meta
        property="og:image"
        content="https://bitou-tech.oss-cn-hangzhou.aliyuncs.com/offline/images/bitou_tech.png"
      />
      <meta
        property="og:description"
        content="Your sharing deserves to be seen by time. Focusing on the entire lifecycle of full-link traffic and content, Bitou specializes in online content creation and sharing."
      />
      <link rel="icon" href="/favicon.png" sizes="any" />
      <Script src="https://bitou-tracert.oss-cn-hangzhou.aliyuncs.com/index.browser.js"></Script>
      <body>
        {children}
        <Footer></Footer>
        <ScriptContainer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
