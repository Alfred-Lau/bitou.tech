'use client';
import React, { useState } from 'react';
import clsx from 'classnames';
import { usePathname } from 'next/navigation';
import Link from '../../shared/link';
import ChevronIcon from './images/chevron.inline.svg';
const isActiveItem = (children: any, currentUrl: string): boolean => {
  if (!children) return false;
  console.log('props', children, currentUrl);

  return children.some(
    (item) => item.url === currentUrl || isActiveItem(item.children, currentUrl)
  );
};
export type ItemProps = {
  title: string;
  url: string;
  children?: any;
  expandedList: string[];
  depth: number;
  isParentOpen: boolean;
  closeMenu: () => void;
};

export default function Item(props: ItemProps) {
  const pathname = usePathname();

  const {
    title,
    url,
    children,
    expandedList,
    depth,
    isParentOpen = true,
    closeMenu,
  } = props;
  const currentUrl = pathname.replace('/docs', '').slice(0, -1);
  const hasActiveChild = isActiveItem(children, currentUrl);
  const [isOpen, setIsOpen] = useState(() => {
    return (
      url === currentUrl ||
      hasActiveChild ||
      (title && depth === 1 && expandedList?.includes(title))
    );
  });

  const Tag = url ? Link : 'button';
  const toggle = () => {
    if (closeMenu && url) {
      closeMenu();
    }
    setIsOpen((prev) => !prev);
  };

  if (title == '---') {
    return (
      <li>
        <hr className={clsx('mb-2 ml-4 mt-2 w-3/5 opacity-10', '', '')} />
      </li>
    );
  }

  return (
    <li
      className={clsx(
        'flex flex-col items-start',
        depth >= 2 && 'pl-4',
        !isParentOpen && 'hidden'
      )}
    >
      <Tag
        className={clsx(
          'relative flex w-full items-center py-2 text-15 text-gray-30 transition-colors duration-200 before:absolute before:-left-[14.5px] before:top-1/2 before:h-4/5 before:w-0.5 before:-translate-y-1/2 before:rounded-sm before:transition-colors before:duration-200 hover:text-gray-60',
          depth === 1 ? 'font-semibold' : 'font-medium',
          url === currentUrl && 'text-primary-1',
          depth === 1 && hasActiveChild && 'text-black',
          depth >= 2 && url === currentUrl && 'before:bg-primary-1'
        )}
        href={'/docs' + url}
        onClick={toggle}
      >
        <span>{title}</span>
      </Tag>
      {children && (
        <ul
          className={clsx(
            'relative flex w-full flex-col before:absolute before:left-0.5 before:h-full before:w-px before:bg-gray-90',
            isOpen
              ? 'pointer-events-auto h-auto opacity-100'
              : 'pointer-events-none h-0 opacity-0'
          )}
        >
          {children.map((item, index) => {
            return (
              <Item
                {...item}
                closeMenu={closeMenu}
                isParentOpen={isOpen || false}
                key={index}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
