import React from 'react';
import Link from 'next/link';
import styles from 'src/components/Header/Header.module.css';

const NAV_ITEMS = [
  { href: '/', label: 'Index' },
  { href: '/posts', label: 'Posts' },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <button className={styles.anchor}>{item.label}</button>
          </Link>
        );
      })}
    </header>
  );
};
