'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './nav-link.module.css';

function NavLink({ children, href }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${styles.link} ${
        path.startsWith(href) ? styles.active : undefined
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
