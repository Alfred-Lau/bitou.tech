'use client';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const CardStack = dynamic(() => import('../../CardStack'), {
  ssr: false,
});

export default function Showcase() {
  return (
    <div className="container my-[90px] flex">
      <div className="flex flex-col justify-center">
        <h3 className="section_title">精彩的故事</h3>
        <div className="section_summary">
          就像你看到的，笔头构建了很多精美的小纸贴，它们都是由我们的用户创作的，你也可以。
        </div>
        <div className="mt-[20px]">
          <Link href="showcase">更多</Link>
        </div>
      </div>
      <div className="flex-1 ">
        <CardStack />
      </div>
    </div>
  );
}
