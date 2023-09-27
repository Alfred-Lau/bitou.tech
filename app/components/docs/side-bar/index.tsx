'use client';

import React from 'react';
import items from './mock';

export type SideBarProps = {
  docs: any[];
};

export default function SideBar(props: SideBarProps) {
  const renderItems = (item: any) => {
    if (item.children) {
      return (
        <li>
          <h2>{item.label}</h2>
          <ul>
            {item.children.map((child: any) => {
              return <li key={child.key}>{renderItems(child)}</li>;
            })}
          </ul>
        </li>
      );
    }
    return item.label;
  };

  return (
    <div className="sticky top-[68px]">
      <ul>
        {items.map((item) => {
          return <li key={item.key}>{renderItems(item)}</li>;
        })}
      </ul>
    </div>
  );
}
