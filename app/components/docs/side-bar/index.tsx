import React from 'react';
import Item from './item';

export type SideBarProps = {
  sidebar: any[];
  expandedList: string[];
};

export default function SideBar(props: SideBarProps) {
  const { sidebar, expandedList } = props;

  return (
    <div className="sticky top-[68px]">
      <nav className="scrollbar-hidden max-h-[calc(100vh-80px)] overflow-y-scroll pt-6 pb-10">
        <ul>
          {sidebar.map((item, index) => {
            return <Item {...item} expandedList={expandedList} key={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
}
