import React from 'react';
import Link from 'next/link';
import styles from 'src/components/Header/Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <button className={styles.anchor}>Index</button>
      </Link>
      <Link href='/about'>
        <button className={styles.anchor}>About</button>
      </Link>
    </header>
  );
}
