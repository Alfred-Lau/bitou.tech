import React from 'react';
import Link from 'next/link';

export default function Showcase() {
  return (
    <div className="container my-[90px] flex">
      <div className="flex flex-col justify-center">
        <h3 className="section_title">Showcase</h3>
        <div className="section_summary">
          We Use Bitou to create multi wonderful website and content
        </div>
        <div>
          <Link href="showcase"> See More</Link>
        </div>
      </div>
      <div className="flex-1">
        <video width={'100%'} height={300} src="" className="border"></video>
      </div>
    </div>
  );
}
