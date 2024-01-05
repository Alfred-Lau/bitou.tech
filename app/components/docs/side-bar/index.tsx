import React from "react";
import Item from "./item";

export type SideBarProps = {
  sidebar: any[];
  expandedList: string[];
};

export default function SideBar(props: SideBarProps) {
  const { sidebar, expandedList } = props;

  const renderMenus = (menus: any[]) => {
    return menus.map((menu) => {
      return (
        <li key={menu.title}>
          {menu.children?.length > 0 ? (
            <details open={expandedList.includes(menu.slug)}>
              <summary>{menu.title}</summary>
              <ul>{renderMenus(menu.children)}</ul>
            </details>
          ) : (
            <a href="">{menu.title}</a>
          )}
        </li>
      );
    });
  };

  return (
    <div className="sticky top-[68px]">
      <nav className="scrollbar-hidden max-h-[calc(100vh-80px)] overflow-y-scroll pt-6 pb-10">
        <ul className="menu bg-base-200 w-56 rounded-box">
          {renderMenus(sidebar)}
        </ul>
      </nav>
    </div>
  );
}
