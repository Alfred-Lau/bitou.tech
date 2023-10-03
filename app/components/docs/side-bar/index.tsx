'use client';

import React from 'react';
import items from './mock';
import Link from 'next/link';

export type SideBarProps = {
  sidebar: any[];
  expandedList: string[];
};

export default function SideBar(props: SideBarProps) {
  const { sidebar, expandedList } = props;

  const renderItems = (item: any) => {
    if (item.children) {
      return (
        <>
          <h2>{item.title}</h2>
          <ul>
            {item.children.map((child: any) => {
              return <li key={child.url}>{renderItems(child)}</li>;
            })}
          </ul>
        </>
      );
    }
    return <Link href={item.url}>{item.title}</Link>;
  };

  return (
    <div className="sticky top-[68px]">
      <ul>
        {sidebar.map((item) => {
          return <li key={item.key}>{renderItems(item)}</li>;
        })}
      </ul>
    </div>
  );
}
