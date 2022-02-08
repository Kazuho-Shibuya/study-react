import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </header>
  );
}
