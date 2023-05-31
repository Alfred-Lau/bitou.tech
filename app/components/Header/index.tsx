import React from 'react';

export default function Header() {
  // tailwindcss 如何实现固定头部
  // https://tailwindcss.com/docs/position

  return (
    <div className="sticky h-20 bg-slate-400 top-0">
      <h1 className="text-2xl text-white">Header</h1>
    </div>
  );
}
