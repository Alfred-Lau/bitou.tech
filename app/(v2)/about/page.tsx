'use client';

import React from 'react';

import { getUserInfoURL } from '@/app/api/user';

import Nav from '../components/nav';

export default function Product() {
  const Products = [
    {
      id: 0,
      title: 'bitou AI 平台',
      btnText: '开始使用',
      img: '',
      link: 'https://work.bitou.tech',
    },
    {
      id: 1,
      title: 'bitou AI 内容客户端',
      btnText: '下载试用',
      link: 'https://work.bitou.tech',
      img: '',
      handler: async () => {
        const user = await getUserInfoURL({});
        console.log('🚀 ~ handler: ~ user:', user);
      },
    },
    {
      id: 2,
      title: 'penjs 博客',
      btnText: '浏览',
      img: '',
      link: 'https://pen.bitou.tech',
    },
  ];
  return (
    <>
      <Nav textColor="#000" bgColor="#fff"></Nav>
      <div className="container-v2 min-h-[calc(100vh-400px)] mt-[60px]">
        milestone，product， profile，team，contact， mission
      </div>
    </>
  );
}
