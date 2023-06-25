'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export type linkProp = {
  name: string;
  href: string;
};

export type NavigationProp = {
  navLinks: linkProp[];
};

export function Navigation({ navLinks }: NavigationProp) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
